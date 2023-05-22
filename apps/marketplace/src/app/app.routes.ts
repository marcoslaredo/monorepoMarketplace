import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'feed',
    pathMatch: 'full'
  },
  {
    path: 'feed',
    loadChildren: () => import('@bmc/feed').then( m => m.FeedModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('@bmc/cart').then( m => m.CartModule)
  },
];
