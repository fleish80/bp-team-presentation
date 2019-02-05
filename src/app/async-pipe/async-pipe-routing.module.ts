import { HasErrorComponent } from './has-error/has-error.component';
import { AsyncPipeComponent } from './async-pipe.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UseAsIsComponent } from './use-as-is/use-as-is.component';

const routes: Routes = [
  {
    path: '',
    component: AsyncPipeComponent,
    children: [
      {
        path: 'use-as-is',
        component: UseAsIsComponent,
      },
      {
        path: 'has-error',
        component: HasErrorComponent,
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
export class AsyncPipeRoutingModule { }
