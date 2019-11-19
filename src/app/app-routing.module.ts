import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from "./home/home.module";

const routes: Routes = [
  { path: '', redirectTo: 'notes-list', pathMatch: 'full' },
  { path: 'notes-list', loadChildren: './home/home.module#HomeModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
