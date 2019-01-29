import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CdkPocRoutingModule } from './cdk-poc-routing.module';
import { CdkPocComponent } from './cdk-poc.component';

@NgModule({
  declarations: [CdkPocComponent],
  imports: [
    CommonModule,
    CdkPocRoutingModule
  ]
})
export class CdkPocModule { }
