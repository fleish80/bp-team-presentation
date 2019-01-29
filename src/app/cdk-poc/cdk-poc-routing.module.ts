import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CdkPocComponent } from './cdk-poc.component';

const routes: Routes = [
  {
    path: '',
    component: CdkPocComponent,
    pathMatch: 'full'
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
