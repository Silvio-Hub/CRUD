import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ButtonComponent } from './components/button/button.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment.development';
import { AngularFireModule } from '@angular/fire/compat';
import { UsersComponent } from './pages/users/users.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [
    // provideAnimationsAsync(),
    // provideFirebaseApp(() =>
    //   initializeApp({
    //     projectId: 'user-crud-angular-1f394',
    //     appId: '1:181572304653:web:23c97f8b4f2ee8979d3a44',
    //     storageBucket: 'user-crud-angular-1f394.firebasestorage.app',
    //     apiKey: 'AIzaSyC9BCFngw-Jvx0qbZTFeDK_Gm0cjsyBHUY',
    //     authDomain: 'user-crud-angular-1f394.firebaseapp.com',
    //     messagingSenderId: '181572304653',
    //   })
    // ),
    // provideFirestore(() => getFirestore()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
