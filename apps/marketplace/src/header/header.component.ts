import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CartService } from '@bmc/cart-bl';
import { Observable } from 'rxjs';

@Component({
  selector: 'bmc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public cartCounter$?: Observable<number> = this.cartService.cartCounter$;
  constructor(private cartService: CartService) {}
}
