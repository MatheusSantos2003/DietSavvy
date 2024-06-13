
import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';
import { environment } from './app/environment/environment';
import { provideRouter, withDisabledInitialNavigation } from '@angular/router';
import { AuthService } from './app/shared/services/auth.service';
import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';


import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { AlertService } from './app/shared/services/alert.service';
import { MatDialogModule } from '@angular/material/dialog';
import { importProvidersFrom } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';



bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes, withDisabledInitialNavigation()),
    { provide: AuthService, useClass: AuthService },
    { provide: AlertService, useClass: AlertService },
    importProvidersFrom(
      [
        MatDialogModule,
        MatSnackBarModule
      ]),
    CommonModule,
    HttpClientModule,
    HttpClientJsonpModule,
      provideFirebaseApp(() => initializeApp(environment.firebase)),
      provideAuth(() => getAuth()),
      provideFirestore(() => getFirestore())
  ],

}).catch((err) =>
  console.error(err)
);
