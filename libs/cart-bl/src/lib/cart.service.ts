import { Injectable } from '@angular/core';
import { Book } from '@bmc/books';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class CartService {
  private cart$: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
  public cartCounter$: Observable<number> = this.getCart().pipe(
    map( (cart: Book[]) => cart.length )
  );
  getCart(): Observable<Book[]> {
    return this.cart$.asObservable();
  }
  addToCart( book: Book) {
    const currentCart: Book[] = this.cart$.getValue();
    if (!currentCart.some( b => b.id == book.id)) {
      console.log(`Book '${book.title}' added to the Cart.`);
      const newCart: Book[] = [...currentCart, book];
      this.cart$.next(newCart);
    }
    else {
      console.log(`Book '${book.title}' already added to the Cart.`);
    }
  }
  removeFromCart( book: Book ) {
    const currentCart: Book[] = this.cart$.getValue();
    if (currentCart.some( b => b.id == book.id)) {
      console.log(`Book '${book.title}' added to the Cart.`);
      const newCart: Book[] = currentCart.filter( b => b.id !== book.id);
      this.cart$.next(newCart);
    }
    else {
      console.log(`Book '${book.title}' already added to the Cart.`);
    }
  }
}
