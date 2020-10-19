import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoryIdeaComponent } from '../entryform/components/story-idea/story-idea.component';
import { AuthguardGuard } from '../guard/authguard.guard';
import { ScriptFileDashboardComponent } from './components/script-file-dashboard/script-file-dashboard.component';
import { ScriptFileReportComponent } from './components/script-file-report/script-file-report.component';
import { StoryIdeaDashboardComponent } from './components/story-idea-dashboard/story-idea-dashboard.component';

const routes: Routes = [
  { path : 'report',
  canActivate:[AuthguardGuard],
    children:[
      { path: 'script-file-dashboard',component:ScriptFileDashboardComponent },
      { path: 'script-file-report',component:ScriptFileReportComponent },
      { path: 'story-idea-dashboard',component:StoryIdeaDashboardComponent },
      { path: 'story-idea-report',component:StoryIdeaComponent } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
