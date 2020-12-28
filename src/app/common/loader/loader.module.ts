import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ContentLoaderComponent } from './components/content-loader/content-loader.component';


@NgModule({
  declarations: [ContentLoaderComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    ContentLoaderComponent,
  ],
})
export class LoaderModule { }
