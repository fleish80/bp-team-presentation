import {
  Component,
  ViewChild,
  ViewChildren,
  ElementRef,
  QueryList,
  HostListener,
  AfterViewInit
} from '@angular/core';
import {
  FocusTrapFactory,
  FocusMonitor,
  ListKeyManager
} from '@angular/cdk/a11y';

@Component({
  selector: 'app-focus-trap',
  templateUrl: './focus-trap.component.html',
  styleUrls: ['./focus-trap.component.scss']
})
export class FocusTrapComponent {
  keyManager: any;
  @ViewChild('element') element: ElementRef;
  @ViewChildren('elementChild') elementChild: QueryList<any>;

  constructor(
    private focusTrap: FocusTrapFactory,
  ) {}

  /* Shows the form, puts focus on it and initialize keyboard navigation */
  testA11y() {
    const focusTrap = this.focusTrap.create(this.element.nativeElement); // creates a focus trap region
    focusTrap.focusInitialElement(); // Moves the focus in the form (by default the first field)
  }
}
