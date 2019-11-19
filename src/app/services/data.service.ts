import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { NotesService } from './notes.service';
import { Notes } from '../models/noteModel';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  
private url = 'https://console.firebase.google.com/notes.json'

  constructor(private http:HttpClient, private noteService:NotesService) { }

  saveNotes(){
      let notes = this.noteService.getAllNotes()
      this.http.put(this.url,notes).subscribe(notes=>{
          console.log(notes)
      })
  }

  fetchData(){
     return this.http.get<Notes[]>(this.url)
      .pipe(map(notes=>{
          return notes
      }),
      tap(
        notes=>{
          this.noteService.setNotes(notes)
          console.log(notes)
        }
    )
      )
      
  }

}
