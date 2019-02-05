import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncPipeRoutingModule } from './async-pipe-routing.module';
import { AsyncPipeComponent } from './async-pipe.component';
import { UseAsIsComponent } from './use-as-is/use-as-is.component';
import { HasErrorComponent } from './has-error/has-error.component';

@NgModule({
  declarations: [AsyncPipeComponent, UseAsIsComponent, HasErrorComponent],
  imports: [
    CommonModule,
    AsyncPipeRoutingModule
  ]
})
export class AsyncPipeModule { }
