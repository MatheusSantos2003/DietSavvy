import { redirectLoggedInTo, canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['auth/login']);
const redirectLoggedIn = () => redirectLoggedInTo('auth/home');

export const routes: Routes = [
  { path: "" ,
    children: [

      { path: '', component: HomeComponent, ...canActivate(redirectUnauthorizedToLogin) },
    ]
  },
];


