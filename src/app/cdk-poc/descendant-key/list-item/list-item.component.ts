import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Highlightable } from '@angular/cdk/a11y';
import { User } from '../user';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements Highlightable {

  @Input() item: User;
  disabled = false;
  @HostBinding('class.active') active = false;

  constructor() {}

  setActiveStyles(): void {
    this.active = true;
  }
  setInactiveStyles(): void {
    this.active = false;
  }

  getLabel?(): string {
    return this.item.name;
  }
}
