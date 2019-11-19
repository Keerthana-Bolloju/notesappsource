import { Component, OnInit, Input } from '@angular/core';
import { Notes } from 'src/app/models/noteModel';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {


  @Input()notes:Notes
  @Input()index:number

  constructor() { }

  ngOnInit() {
  }
}
