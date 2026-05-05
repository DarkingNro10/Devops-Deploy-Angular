import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

// --- 1. Importaciones de Firebase ---
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

// --- 2. Tu Configuración de Firebase ---
const firebaseConfig = {
  apiKey: "AIzaSyCOmAEN0ABa00aHenrrgmDqJp7Ud1NDSJE",
  authDomain: "prueba1-90aa3.firebaseapp.com",
  projectId: "prueba1-90aa3",
  storageBucket: "prueba1-90aa3.firebasestorage.app",
  messagingSenderId: "319446563489",
  appId: "1:319446563489:web:891b961499580905b70ee0",
  measurementId: "G-JZN2D91LWY"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    // --- 3. Proveedores de Firebase y Firestore ---
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore())
  ]
};