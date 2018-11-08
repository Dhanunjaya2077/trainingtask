import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';


const approutes:Routes=[
  {
    path:'register',
    component:RegisterComponent
  },
   {
    path:'home',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'',redirectTo:'/home',pathMatch:'full'
  },
  {
    path:'**',component:HomeComponent,
  },
]

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule, FormsModule ,ReactiveFormsModule,HttpClientModule,RouterModule.forRoot(approutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
