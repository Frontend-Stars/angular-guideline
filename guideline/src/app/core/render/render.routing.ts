import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenderModule } from './render.module';

const routes: Routes = [
];


@NgModule({
  imports: [
    RenderModule,
    RouterModule.forChild(routes)
  ]
})
export class RenderRoutingModule {}
