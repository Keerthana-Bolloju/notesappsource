import { Injectable } from '@angular/core';
import { Notes } from '../models/noteModel';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  public notesChangeInDOM = new Subject<Notes[]>();

  private notes: Notes[] = [
    new Notes(
      'This Notes is related to the thing Dummy Content',
      new Date(2019,2,11,9,25,0),
      new Date(2019,2,11,9,25,0)
    ),
    new Notes(
      'The time that sun rises and sets is the most beautiful scene',
      new Date(2019,2,11,18,25,0),
      new Date(2019,2,11,18,25,0)
    ),
    new Notes(
      'The documents has to be uploaded to the cliets before the deadline',
      new Date(2019,2,11,19,25,0),
      new Date(2019,2,11,19,25,0)
    ),
    new Notes(
      'Meeting has to be scheduled by this week',
      new Date(),
      new Date()
    ),
  ];


  constructor() { }


  setNotes(note:Notes[]){
    this.notes = note
  }

  getAllNotes(){
     return this.notes.slice()
  }

  getNoteById(id:number){
    return this.notes[id]
  }

  addNewNote(note:Notes){
    this.notes.push(note)
    return this.notesChangeInDOM.next(this.notes.slice())
  }

  editNote(id:number, note:Notes){
    this.notes[id] = note
    return this.notesChangeInDOM.next(this.notes.slice())   
  }

  deleteNote(id:number){
    this.notes.splice(id,1)
    return this.notesChangeInDOM.next(this.notes.slice())
  }




}
