import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms' ;

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent/parent.component';
import { ModalComponent } from './shared/modal/modal.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SecondModalComponent } from './shared/second-modal/second-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ModalComponent,
    SecondModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
