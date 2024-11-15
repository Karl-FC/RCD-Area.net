import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAnalytics, getAnalytics } from '@angular/fire/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyBgrDjEGCi5KAav_Z13vEiOYf1aA19iL0s",
  authDomain: "bakal-areanet.firebaseapp.com",
  projectId: "bakal-areanet",
  storageBucket: "bakal-areanet.firebasestorage.app",
  messagingSenderId: "990730367254",
  appId: "1:990730367254:web:57fbbf34031ab5e29e6037",
  measurementId: "G-0KFF0X16JL"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAnalytics(() => getAnalytics()),
    provideRouter(routes),
    provideHttpClient(),
  ],
};


;
