import { Component, OnInit } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-live-announcer',
  templateUrl: './live-announcer.component.html',
  styleUrls: ['./live-announcer.component.scss']
})
export class LiveAnnouncerComponent implements OnInit {

  constructor(private liveAnnouncer: LiveAnnouncer) { }

  ngOnInit() {
  }

  annouce(message) {
    this.liveAnnouncer.announce(message, 1000);
  }

}
