import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Book } from "@bmc/books";
import { CartService } from "@bmc/cart-bl";
import { Observable } from "rxjs";

@Component({
  selector: 'bmc-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent implements OnInit{
  cart$?: Observable<Book[]>;
  constructor(
    private cartService: CartService
  ) {}
  ngOnInit(): void {
    this.cart$ = this.cartService.getCart();
  }
  removeFromCart(book: Book) {
    this.cartService.removeFromCart(book);
  }
}
