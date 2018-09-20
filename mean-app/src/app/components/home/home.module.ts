import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { HomeComponent } from './home.component';

// Modules
import { AppMaterialUIModule } from '../../ui/material-ui.module';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    AppMaterialUIModule,
    HomeRoutingModule
  ]
})

export class AppHomeModule { }
