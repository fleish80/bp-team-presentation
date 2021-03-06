import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormRoutingModule } from './reactive-form-routing.module';
import { FormControlComponent } from './form-control/form-control.component';
import { FormControlNameComponent } from './form-control-name/form-control-name.component';
import { ReactiveFormComponent } from './reactive-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormControlComponent, FormControlNameComponent, ReactiveFormComponent],
  imports: [
    CommonModule,
    ReactiveFormRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ReactiveFormModule { }
