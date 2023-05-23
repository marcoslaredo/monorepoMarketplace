import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book, BooksService } from '@bmc/books';
import { CartService } from '@bmc/cart-bl';

@Component({
  selector: 'bmc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedComponent implements OnInit {
  books$!: Observable<Book[]>;
  cart$!: Observable<Book[]>;
  constructor(
    private booksService: BooksService,
    private cartService: CartService
  ) {}
  ngOnInit(): void {
    this.books$ = this.booksService.getBooks('Angular');
    this.cart$ = this.cartService.getCart();
  }
  cartAction(book: Book) {
    if (!this.isOnCart(book)) {
      this.cartService.addToCart(book);
    } else {
      this.cartService.removeFromCart(book);
    }
  }

  isOnCart(book: Book): boolean {
    let isListed = false;
    this.cart$?.subscribe((cart) => {
      isListed = cart?.some((b) => b.id === book.id) || false;
    });
    return isListed;
  }
}
