import {
  Component,
  Input,
  ElementRef,
  HostBinding,
  OnInit
} from '@angular/core';
import { FocusableOption } from '@angular/cdk/a11y';
import { User } from '../user';

@Component({
  selector: 'app-list-item-focus',
  templateUrl: './list-item-focus.component.html',
  styleUrls: ['./list-item-focus.component.scss']
})
export class ListItemFocusComponent implements FocusableOption, OnInit {


  @Input() item: User;
  @HostBinding('attr.tabindex') tabindex = -1;

  constructor(private host: ElementRef) {}

  ngOnInit(): void {
    // this.tabindex = 'dsdsd';
    // this.active = true;
  }

  focus() {
    this.host.nativeElement.focus();
  }
}
