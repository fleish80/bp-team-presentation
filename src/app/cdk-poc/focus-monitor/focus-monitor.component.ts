import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';

@Component({
  selector: 'app-focus-monitor',
  templateUrl: './focus-monitor.component.html',
  styleUrls: ['./focus-monitor.component.scss']
})
export class FocusMonitorComponent implements OnInit, OnDestroy {

  origin: string;
  @ViewChild('subtree') subtree: ElementRef<HTMLElement>;

  constructor(private focusMonitor: FocusMonitor) { }

  ngOnInit() {
    this.focusMonitor.monitor(this.subtree, true)
    .subscribe((origin: string) => {
      this.origin = origin;
    });
  }

  ngOnDestroy() {
    this.focusMonitor.stopMonitoring(this.subtree);
  }

}
