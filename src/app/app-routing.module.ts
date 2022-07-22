import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ClientComponent } from './client/client.component';
import { LivreComponent } from './livre/livre.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'login', component:LoginComponent, },
  {path:'registre', component:RegisterComponent, },
  {path:'livre', component:LivreComponent, },
  {path:'category', component:CategoryComponent, },
  {path:'client', component:ClientComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
