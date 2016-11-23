import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { LoginComponent } from '../app/login/login.component';
import { RegistrationComponent } from '../app/registration/registration.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule
   RouterModule.forRoot([
   	  {path: '', redirectTo: '/login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      {path: 'registration', component: RegistrationComponent}
    ])
   ],
  declarations: [ AppComponent, LoginComponent, RegistrationComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
