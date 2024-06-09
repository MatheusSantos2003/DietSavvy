import { AuthGuard,redirectLoggedInTo, canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

import { Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './register/register.component';
import { inject } from '@angular/core';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['auth/login']);
const redirectLoggedIn = () => redirectLoggedInTo('home');

export const routes: Routes = [
  { path: "" ,
    children: [
      { path: '', redirectTo: 'register', pathMatch: 'full' },
      { path: 'home', component: AuthComponent, ...canActivate(redirectUnauthorizedToLogin) },
      { path: 'login', component: RegisterComponent, ...canActivate(redirectLoggedIn)   },
      { path: 'register', component: RegisterComponent, ...canActivate(redirectLoggedIn) },
      // { path: 'home', component: AuthComponent,  },
      // { path: 'login', component: RegisterComponent,    },
      // { path: 'register', component: RegisterComponent,  },
    ]
  },
];


