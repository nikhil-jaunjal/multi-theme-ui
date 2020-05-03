import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { ThemeService } from './theme-service.service';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
