import { Component, OnInit } from '@angular/core';
import { Notes } from 'src/app/models/noteModel';
import { NotesService } from 'src/app/services/notes.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss']
})
export class NoteDetailComponent implements OnInit {

  public notes:Notes;
  public id:number;

  constructor(private noteService:NotesService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe((param:Params)=>{
      this.id = +param['id']
      this.notes = this.noteService.getNoteById(this.id)
    })
  }

  onEditNote(){
    this.router.navigate(['edit'],{relativeTo:this.route})
  }
  
  onDeleteNote(){
    this.noteService.deleteNote(this.id)
    this.router.navigate(['/notes-list'])
  }
  
}
