import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CdkPocRoutingModule } from './cdk-poc-routing.module';
import { CdkPocComponent } from './cdk-poc.component';
import { FocusTrapComponent } from './focus-trap/focus-trap.component';
import {A11yModule} from '@angular/cdk/a11y';
import { DescendantKeyComponent } from './descendant-key/descendant-key.component';

@NgModule({
  declarations: [CdkPocComponent, FocusTrapComponent, DescendantKeyComponent],
  imports: [
    CommonModule,
    CdkPocRoutingModule,
    A11yModule
  ],
  exports: [CdkPocComponent]
})
export class CdkPocModule { }
