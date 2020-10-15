import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ScriptFileDashboardComponent } from './components/script-file-dashboard/script-file-dashboard.component';
import { StoyIdeaReportComponent } from './components/stoy-idea-report/stoy-idea-report.component';
import { StoryIdeaDashboardComponent } from './components/story-idea-dashboard/story-idea-dashboard.component';
import { ScriptFileReportComponent } from './components/script-file-report/script-file-report.component';


@NgModule({
  declarations: [ScriptFileDashboardComponent, StoyIdeaReportComponent, StoryIdeaDashboardComponent, ScriptFileReportComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ],
  exports:[ScriptFileDashboardComponent, StoyIdeaReportComponent, StoryIdeaDashboardComponent, ScriptFileReportComponent]
})
export class ReportsModule { }
