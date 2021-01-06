import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [LogoComponent],
  exports: [
    LogoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
})
export class BrandModule { }
