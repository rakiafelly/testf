import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { NavbarComponent } from './navbar/navbar.component';
import { EspaceClientComponent } from './espace-client/espace-client.component';
import { LoginClientComponent } from './login-client/login-client.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import { ListLivreComponent } from './list-livre/list-livre.component';
// import { NgSelectModule } from '@ng-select/ng-select';




@NgModule({
  declarations: [
    AppComponent,
    LivreComponent,
    CategoryComponent,
    ClientComponent,
    LivrePipe,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    EspaceClientComponent,
    LoginClientComponent,
    ListCategoryComponent,
    ListLivreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    // NgSelectModule
    
  
   
  
  
  ],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
