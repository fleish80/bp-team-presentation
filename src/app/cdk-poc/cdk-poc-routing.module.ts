import { LiveAnnouncerComponent } from './live-announcer/live-announcer.component';
import { FocusTrapComponent } from './focus-trap/focus-trap.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CdkPocComponent } from './cdk-poc.component';
import { DescendantKeyComponent } from './descendant-key/descendant-key.component';
import { FocusKeyComponent } from './focus-key/focus-key.component';
import { FocusMonitorComponent } from './focus-monitor/focus-monitor.component';

const routes: Routes = [
  {
    path: '',
    component: CdkPocComponent,
    children: [
      {
        path: 'focus-trap',
        component: FocusTrapComponent,
      },
      {
        path: 'descendant-key',
        component: DescendantKeyComponent,
      },
      {
        path: 'focus-key',
        component: FocusKeyComponent,
      },
      {
        path: 'focus-monitor',
        component: FocusMonitorComponent,
      },
      {
        path: 'live-annoucer',
        component: LiveAnnouncerComponent,
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CdkPocRoutingModule { }
