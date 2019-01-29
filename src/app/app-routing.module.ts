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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
