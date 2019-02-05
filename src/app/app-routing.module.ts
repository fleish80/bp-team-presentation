import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cdk-poc',
    pathMatch: 'full'
  },
  {
    path: 'cdk-poc',
    loadChildren: './cdk-poc/cdk-poc.module#CdkPocModule',
  },
  {
    path: 'async-pipe',
    loadChildren: './async-pipe/async-pipe.module#AsyncPipeModule',
  },
  {
    path: 'reactive-form',
    loadChildren: './reactive-form/reactive-form.module#ReactiveFormModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
