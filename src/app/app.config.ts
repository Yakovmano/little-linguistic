import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withComponentInputBinding()), provideAnimations(), provideFirebaseApp(() => initializeApp({"projectId":"ono-project-fa779","appId":"1:912903886249:web:f60eb551e9872ddd2c20b8","storageBucket":"ono-project-fa779.appspot.com","apiKey":"AIzaSyCQ_Vg_kvgfFpV99EeA52-W-FkR9yTQACs","authDomain":"ono-project-fa779.firebaseapp.com","messagingSenderId":"912903886249","measurementId":"G-NNP1F80L7X"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
