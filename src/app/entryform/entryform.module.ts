import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntryformRoutingModule } from './entryform-routing.module';
import { StoryIdeaComponent } from './components/story-idea/story-idea.component';
import { StoryFileComponent } from './components/story-file/story-file.component';


@NgModule({
  declarations: [StoryIdeaComponent, StoryFileComponent],
  imports: [
    CommonModule,
    EntryformRoutingModule
  ],
  exports:[StoryIdeaComponent, StoryFileComponent]
})
export class EntryformModule { }
