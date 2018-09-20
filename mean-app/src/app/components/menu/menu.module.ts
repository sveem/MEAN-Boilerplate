import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { MenuComponent } from './menu.component';

// Modules
import { AppMaterialUIModule } from '../../ui/material-ui.module';
import { MenuRoutingModule } from './menu-routing.module';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    AppMaterialUIModule,
    MenuRoutingModule
  ]
})

export class AppMenuModule { }
