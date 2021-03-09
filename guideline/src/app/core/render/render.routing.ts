import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenderModule } from './render.module';
import { RenderPageComponent } from './components/render-page/render-page.component';


const routes: Routes = [
  {
    path: '',
    component: RenderPageComponent
  }
];


@NgModule({
  imports: [
    RenderModule,
    RouterModule.forChild(routes)
  ]
})
export class RenderRoutingModule {}
