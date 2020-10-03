import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'favoritos', component: FavoritosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
