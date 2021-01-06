import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';


@NgModule({
  declarations: [LogoComponent],
  exports: [
    LogoComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class BrandModule { }
