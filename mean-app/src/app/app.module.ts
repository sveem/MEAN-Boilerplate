import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Modules
import { AppMaterialUIModule } from './ui/material-ui.module';
import { HeaderComponent } from './core/header/header.component';
import { GuideComponent } from './core/guide/guide.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GuideComponent
  ],
  imports: [
    BrowserModule,
    AppMaterialUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
