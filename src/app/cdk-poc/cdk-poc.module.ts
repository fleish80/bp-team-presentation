import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CdkPocRoutingModule } from './cdk-poc-routing.module';
import { CdkPocComponent } from './cdk-poc.component';
import { FocusTrapComponent } from './focus-trap/focus-trap.component';
import {A11yModule} from '@angular/cdk/a11y';
import { DescendantKeyComponent } from './descendant-key/descendant-key.component';
import { ListItemComponent } from './descendant-key/list-item/list-item.component';
import { FilterPipe } from './descendant-key/filter.pipe';
import { FocusKeyComponent } from './focus-key/focus-key.component';
import { ListItemFocusComponent } from './focus-key/list-item-focus/list-item-focus.component';
import { FocusMonitorComponent } from './focus-monitor/focus-monitor.component';
import { LiveAnnouncerComponent } from './live-announcer/live-announcer.component';

@NgModule({
  declarations: [CdkPocComponent, FocusTrapComponent, DescendantKeyComponent, ListItemComponent,
    ListItemFocusComponent, FilterPipe, FocusKeyComponent, FocusMonitorComponent, LiveAnnouncerComponent],
  imports: [
    CommonModule,
    CdkPocRoutingModule,
    A11yModule
  ],
  exports: [CdkPocComponent]
})
export class CdkPocModule { }
