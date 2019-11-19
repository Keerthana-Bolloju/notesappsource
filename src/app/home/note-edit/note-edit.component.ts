import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NotesService } from 'src/app/services/notes.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Notes } from 'src/app/models/noteModel';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.scss']
})
export class NoteEditComponent implements OnInit {
  public notes:Notes
  public editMode: boolean = false;
  public id: number;

  public createdOn:Date;
  public modifiedOn:Date;

  noteEditForm: FormGroup;

  constructor(private noteService:NotesService, private route:ActivatedRoute, private router:Router, private dataService:DataService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id']
      this.editMode = params['id'] != null
      this.initializeForm()
    })
  }

  initializeForm(){
    let noteName = '';
    if(this.editMode){
      const note = this.noteService.getNoteById(this.id)
      noteName = note.name      
      console.log(note)
    }
    this.noteEditForm = new FormGroup({
      'name': new FormControl(noteName)
    })
  }

  onSubmit(){
    if(this.editMode){
      this.noteService.editNote(this.id,{name: this.noteEditForm.controls['name'].value, createdOn: new Date(),modifiedOn:new Date()})
      this.dataService.saveNotes()
    }else{
      this.noteService.addNewNote({name: this.noteEditForm.controls['name'].value, createdOn: new Date(),modifiedOn:new Date()})
      this.dataService.saveNotes()
    }
    this.onCancel()
  }

  onCancel(){
    this.router.navigate(['../'],{relativeTo:this.route})
  }

}
