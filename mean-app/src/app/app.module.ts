import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

// Services
import { HomeService } from './shared/http/home.service';
import { MenuService } from './shared/http/menu.service';

// Modules
import { AppMaterialUIModule } from './ui/material-ui.module';
import { AppRoutingModule } from './shared/routing/app-routing.module';
import { AppCoreModule } from './core/core.module';
import { AppInterceptorsModule } from './shared/interceptors/app-interceptors.module';
import { AppHomeModule } from './components/home/home.module';
import { AppMenuModule } from './components/menu/menu.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppMaterialUIModule,
    AppInterceptorsModule,
    AppRoutingModule,
    AppCoreModule,
    AppHomeModule,
    AppMenuModule
  ],
  providers: [ HomeService, MenuService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
