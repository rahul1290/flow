import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent } from '../app/auth/loginpage/loginpage.component';
import { TestComponent } from '../app/auth/test/test.component';

const routes: Routes = [
  { path:"login",component:LoginpageComponent },
  { path:"test",component:TestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
