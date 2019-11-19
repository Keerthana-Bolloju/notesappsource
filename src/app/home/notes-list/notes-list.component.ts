import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Notes } from 'src/app/models/noteModel';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  public subscribe:Subscription;
  public notes:Notes[] = [];
  public inputText:string = '';
  
  constructor(private noteService:NotesService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.subscribe = this.noteService.notesChangeInDOM.subscribe(
      (data:Notes[])=>{
        this.notes = data
      }
    )
  this.notes = this.noteService.getAllNotes()
  }

  onAddNewNote(){
    this.router.navigate(['newNote'],{relativeTo:this.route})
  }

  search(){
    if(this.inputText != ''){
      this.notes = this.notes.filter(res=>{
        return (res.name.toLocaleLowerCase().match(this.inputText.toLocaleLowerCase()) )
      })
    }else if(this.inputText == ''){
      this.ngOnInit()
    }
  }


}
