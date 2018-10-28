import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule, MatIconModule, MatButtonModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QuillModule } from 'ngx-quill';

import { AppComponent } from './app.component';
import { ProComponent } from './pro/pro.component';
import { ConComponent } from './con/con.component';
import { StatementComponent } from './statement/statement.component';
import { ProsConsComponent } from './pros-cons/pros-cons.component';
import { ProsComponent } from './pros/pros.component';
import { ConsComponent } from './cons/cons.component';
import { VoteComponent } from './vote/vote.component';
import { SourceComponent } from './source/source.component';

@NgModule({
  declarations: [
    AppComponent,
    ProComponent,
    ConComponent,
    StatementComponent,
    ProsConsComponent,
    ProsComponent,
    ConsComponent,
    VoteComponent,
    SourceComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
    FlexLayoutModule,
    QuillModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
