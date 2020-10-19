import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { EntryformModule } from './entryform/entryform.module';
import { ReportsModule } from './reports/reports.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    EntryformModule,
    ReportsModule,
    FormsModule,
  ],
  providers: [{ 
    provide : LocationStrategy,
    useClass : PathLocationStrategy 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
