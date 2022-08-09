import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ClientComponent } from './client/client.component';
import { EspaceClientComponent } from './espace-client/espace-client.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import { ListLivreComponent } from './list-livre/list-livre.component';
import { LivreComponent } from './livre/livre.component';
import { LoginClientComponent } from './login-client/login-client.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'login', component:LoginComponent, },
  {path:'registre', component:RegisterComponent, },
  {path:'livre', component:LivreComponent, },
  {path:'category', component:CategoryComponent, },
  {path:'client', component:ClientComponent, },
  {path:'loginClient', component:LoginClientComponent },
  {path:'espaceClient',component:EspaceClientComponent },
  {path:'listCategory',component:ListCategoryComponent },
  {path:'listLivre',component:ListLivreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
