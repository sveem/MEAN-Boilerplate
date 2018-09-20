import { NgModule } from '@angular/core';

// Components
import { HeaderComponent } from './header/header.component';
import { GuideComponent } from './guide/guide.component';

// Modules
import { AppMaterialUIModule } from '../ui/material-ui.module';
import { AppRoutingModule } from '../shared/routing/app-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    GuideComponent
  ],
  imports: [
    AppMaterialUIModule,
    AppRoutingModule,
  ],
  exports: [
    HeaderComponent,
    GuideComponent
  ]
})

export class AppCoreModule { }
