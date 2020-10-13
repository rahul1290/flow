import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { TestComponent } from './test/test.component';



@NgModule({
  declarations: [LoginpageComponent, TestComponent],
  imports: [
    CommonModule
  ],
  exports:[LoginpageComponent,TestComponent]
})
export class AuthModule { }
