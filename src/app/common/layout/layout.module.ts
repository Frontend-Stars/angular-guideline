import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { LayoutBaseComponent } from './components/layout-base/layout-base.component';
import { LayoutHeaderComponent } from './components/layout-header/layout-header.component';
import { LayoutFooterComponent } from './components/layout-footer/layout-footer.component';
import { LayoutContentComponent } from './components/layout-content/layout-content.component';

import { NavigationModule } from '../navigation/navigation.module';

@NgModule({
  declarations: [
    LayoutBaseComponent,
    LayoutHeaderComponent,
    LayoutFooterComponent,
    LayoutContentComponent
  ],
  exports: [
    LayoutBaseComponent,
  ],
  imports: [
    MatToolbarModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    NavigationModule,
  ],
})
export class LayoutModule { }
