import { Route } from '@angular/router';
import { AppComponent } from './app.component';


export const appRoutes: Route[] = [

  // { path: '*', pathMatch: 'full', loadChildren: () => import('./modules/auth/auth.routing').then(m => m.routes) },
  { path: "", redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./modules/home/home.routing').then((m) =>  m.routes) },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.routing').then((m) =>  m.routes) },
];
