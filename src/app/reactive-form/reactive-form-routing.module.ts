import { FormControlNameComponent } from './form-control-name/form-control-name.component';
import { FormControlComponent } from './form-control/form-control.component';
import { ReactiveFormComponent } from './reactive-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ReactiveFormComponent,
    children: [
      {
        path: 'form-control',
        component: FormControlComponent,
      },
      {
        path: 'form-control-name',
        component: FormControlNameComponent,
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ReactiveFormRoutingModule { }
