import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavigationModule } from '@common/navigation/navigation.module';
import { NAVIGATION_MENU_MANAGER } from '@common/navigation/types/navigation-menu.type';
import { LayoutModule } from '@common/layout/layout.module';
import { RenderNavigationMenuManager } from './managers/menu/render-navigation-menu.manager';
import { TestPipe } from './pipes/test/test.pipe';
import { RenderPageComponent } from './components/render-page/render-page.component';
import { RenderTestComponent } from './components/render-test/render-test.component';
import { RenderTestVComponent } from './components/render-test-v/render-test-v.component';


@NgModule({
  declarations: [RenderPageComponent, TestPipe, RenderTestComponent, RenderTestVComponent],
  providers: [
    {
      provide: NAVIGATION_MENU_MANAGER,
      useClass: RenderNavigationMenuManager
    }
  ],
  imports: [
    LayoutModule,
    CommonModule,
    NavigationModule,
    ReactiveFormsModule,
  ],
})
export class RenderModule { }
