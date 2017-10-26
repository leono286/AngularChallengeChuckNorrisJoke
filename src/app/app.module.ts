import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { ChuckNorrisJokesService } from "./services/chuck-norris-jokes.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ChuckNorrisJokesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
