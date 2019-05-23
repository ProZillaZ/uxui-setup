import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TestElementModule} from '../shared/elements/test-element/test-element.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TestElementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
