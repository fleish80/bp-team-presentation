import { FocusTrapComponent } from './focus-trap/focus-trap.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CdkPocComponent } from './cdk-poc.component';
import { DescendantKeyComponent } from './descendant-key/descendant-key.component';
import { FilterPipe } from './descendant-key/filter.pipe1';

const routes: Routes = [
  {
    path: '',
    component: CdkPocComponent,
    children: [
      {
        path: 'focus-trap',
        component: FocusTrapComponent,
      },
      {
        path: 'descendant-key',
        component: DescendantKeyComponent,
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CdkPocRoutingModule { }
