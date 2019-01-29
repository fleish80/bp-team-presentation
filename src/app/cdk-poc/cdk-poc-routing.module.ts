import { FocusTrapComponent } from './focus-trap/focus-trap.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CdkPocComponent } from './cdk-poc.component';

const routes: Routes = [
  {
    path: '',
    component: FocusTrapComponent,
    pathMatch: 'full'
  },
  {
    path: 'focus-trap',
    component: FocusTrapComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CdkPocRoutingModule { }
