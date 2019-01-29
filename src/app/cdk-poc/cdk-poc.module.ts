import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CdkPocRoutingModule } from './cdk-poc-routing.module';
import { CdkPocComponent } from './cdk-poc.component';
import { FocusTrapComponent } from './focus-trap/focus-trap.component';
import {A11yModule} from '@angular/cdk/a11y';

@NgModule({
  declarations: [CdkPocComponent, FocusTrapComponent],
  imports: [
    CommonModule,
    CdkPocRoutingModule,
    A11yModule
  ]
})
export class CdkPocModule { }
