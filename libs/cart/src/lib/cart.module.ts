import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import {RouterModule} from '@angular/router';
import {BooksModule} from '@bmc/books';
import {cartRoutes} from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(cartRoutes), BooksModule],
  declarations: [CartComponent],
  exports: [CartComponent]
})
export class CartModule {}
