import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';

@Component({
  selector: 'app-focus-monitor',
  templateUrl: './focus-monitor.component.html',
  styleUrls: ['./focus-monitor.component.scss']
})
export class FocusMonitorComponent implements OnInit {

  @ViewChild('subtree') subtree: ElementRef<HTMLElement>;

  constructor(private focusMonitor: FocusMonitor) { }

  ngOnInit() {
    this.focusMonitor.monitor(this.subtree, true)
    .subscribe(origin => {
      console.log(origin);
    });
  }

}
