import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { ResetPasswordComponent } from './auth/components/reset-password/reset-password.component';
import { StoryFileComponent } from './entryform/components/story-file/story-file.component';
import { StoryIdeaComponent } from './entryform/components/story-idea/story-idea.component';
import { AuthguardGuard } from './guard/authguard.guard';
import { ScriptFileDashboardComponent } from './reports/components/script-file-dashboard/script-file-dashboard.component';
import { ScriptFileReportComponent } from './reports/components/script-file-report/script-file-report.component';
import { StoryIdeaDashboardComponent } from './reports/components/story-idea-dashboard/story-idea-dashboard.component';

const routes: Routes = [
  { path: '',redirectTo:'/login',pathMatch:'full'},
  { path: 'login',component:LoginComponent},
  { path: 'register',component:RegisterComponent ,canActivate:[AuthguardGuard]},
  { path: 'reset', component: ResetPasswordComponent },
  { path: 'entryform/story-idea',component:StoryIdeaComponent },
  { path: 'entryform/story-file',component:StoryFileComponent,canActivate:[AuthguardGuard]},
  { path: 'report/script-file-dashboard',component:ScriptFileDashboardComponent },
  { path: 'report/script-file-report',component:ScriptFileReportComponent },
  { path: 'report/story-idea-dashboard',component:StoryIdeaDashboardComponent },
  { path: 'report/story-idea-report',component:StoryIdeaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
