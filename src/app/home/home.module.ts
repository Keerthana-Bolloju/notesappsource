import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NoteComponent } from './notes-list/note/note.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotesViewComponent } from './notes-view/notes-view.component';
import { HomeComponent } from './home.component';
import { NoteDefaultComponent } from './note-default/note-default.component';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { ShortenPipe } from '../pipes/shorten.pipe';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: HomeComponent,children:[
    {path:'',component:NoteDefaultComponent},
    {path:'newNote',component:NoteEditComponent},
    {path:':id',component:NoteDetailComponent,},
    {path:':id/edit',component:NoteEditComponent,},
  ] },
];

@NgModule({
  declarations: [
    HomeComponent,
    NotesListComponent,
    NoteComponent, 
    NavbarComponent, 
    NotesViewComponent,
    NoteEditComponent,
    NoteDefaultComponent,
    NoteDetailComponent,
    ShortenPipe,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class HomeModule { }
