import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardGuard } from '../guard/authguard.guard';
import { StoryFileComponent } from './components/story-file/story-file.component';
import { StoryIdeaComponent } from './components/story-idea/story-idea.component';

const routes: Routes = [
  { path :'entryform',
    canActivate:[AuthguardGuard],
    children:[
      { path: 'story-idea',component:StoryIdeaComponent },
      { path: 'story-file',component:StoryFileComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntryformRoutingModule { }
