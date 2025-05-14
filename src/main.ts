import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';
import { environment } from './environments/environment';
import { TableModule } from 'primeng/table';

import { ChartModule } from 'primeng/chart';
import { CalendarModule } from 'primeng/calendar';
import { ProgressBarModule } from 'primeng/progressbar';
import { AvatarModule } from 'primeng/avatar';
import { TagModule } from 'primeng/tag';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideAnimations(),

    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),

    importProvidersFrom(
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      CardModule,
      InputTextModule,
      ButtonModule,
      ToastModule,
      TableModule,
      ChartModule,
      CalendarModule,
      ProgressBarModule,
      AvatarModule,
      TagModule 
    ),
    { provide: MessageService, useClass: MessageService },
  ]
});
