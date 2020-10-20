import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  fServ } from './servc.service';
import {SComponent} from './dep.component';
import { EvtComponent } from './evt.component';

@NgModule({
  declarations: [
    AppComponent,
    SComponent,
    EvtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [fServ],
  bootstrap: [AppComponent]
})
export class AppModule { }
