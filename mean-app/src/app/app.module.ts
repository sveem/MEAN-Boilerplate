import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Modules
import { AppMaterialUIModule } from './ui/material-ui.module';
import { AppRoutingModule } from './shared/routing/app-routing.module';
import { AppHomeModule } from './components/home/home.module';
import { AppCoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppMaterialUIModule,
    AppRoutingModule,
    AppCoreModule,
    AppHomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
