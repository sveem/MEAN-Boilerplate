import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GuideComponent } from '../../core/guide/guide.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '',  component: GuideComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
