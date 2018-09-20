import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { LogResponseInterceptor } from './log-response.interceptor';

@NgModule({
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LogResponseInterceptor, multi: true }
  ]
})

export class AppInterceptorsModule { }
