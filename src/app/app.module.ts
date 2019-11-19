import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesService } from './services/notes.service';
import { HomeModule } from './home/home.module';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
  ],
  providers: [NotesService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
