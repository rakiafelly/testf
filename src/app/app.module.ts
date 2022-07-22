import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivreComponent } from './livre/livre.component';
import { CategoryComponent } from './category/category.component';
import { ClientComponent } from './client/client.component';
import { LivrePipe } from './livre/livre.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [
    AppComponent,
    LivreComponent,
    CategoryComponent,
    ClientComponent,
    LivrePipe,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    NgSelectModule,
  
   
  
  
  ],

  

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
