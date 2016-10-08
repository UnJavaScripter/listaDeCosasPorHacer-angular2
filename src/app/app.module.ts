import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LaListaComponent } from './la-lista/la-lista.component';
import { UnaCosaComponent } from './una-cosa/una-cosa.component';

@NgModule({
  declarations: [
    AppComponent,
    LaListaComponent,
    UnaCosaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
