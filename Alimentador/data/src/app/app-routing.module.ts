import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BDtablasComponent } from './bdtablas/bdtablas.component';
import { FunctionComponent } from './function/function.component';
//import { CardGraficosComponent } from './card-graficos/card-graficos.component';
//import { GraficosComponent } from './graficos/graficos.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  //{path: 'graficos', component: CardGraficosComponent},
  //{path: 'graficos', component: GraficosComponent},
  {path: 'tablas', component: BDtablasComponent},
  {path: 'funciones', component: FunctionComponent},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
