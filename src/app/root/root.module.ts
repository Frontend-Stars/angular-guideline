import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RootRoutingModule } from './root-routing.module';

import { RootComponent } from './components/root/root.component';


@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserModule,
    RootRoutingModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [RootComponent]
})
export class RootModule { }
