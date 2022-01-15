import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatosComponent } from './views/contatos/contatos.component';
import { HomeComponent } from './views/home/home.component';
import { SmartphoneComponent } from './views/smartphone/smartphone.component';
import { XboxComponent } from './views/xbox/xbox.component';


const routes: Routes = [
  {path: "contatos", component: ContatosComponent},
  {path: "", component: HomeComponent},
  {path: "smartphone", component: SmartphoneComponent},
  {path: "xbox", component: XboxComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
