import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntryformRoutingModule } from './entryform-routing.module';
import { StoryIdeaComponent } from './components/story-idea/story-idea.component';
import { StoryFileComponent } from './components/story-file/story-file.component';
import {NavbarComponent } from './../common/components/navbar/navbar.component';


@NgModule({
  declarations: [
    StoryIdeaComponent, 
    StoryFileComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    EntryformRoutingModule,
    NavbarComponent
  ],
  exports:[
    StoryIdeaComponent, 
    StoryFileComponent
  ]
})
export class EntryformModule { }
