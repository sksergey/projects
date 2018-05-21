import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SigninComponent } from './users/signin/signin.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { KeywordsComponent } from './projects/keywords/keywords.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    ProjectsListComponent,
    KeywordsComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
