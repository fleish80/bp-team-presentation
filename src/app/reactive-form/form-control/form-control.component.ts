import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent implements OnInit, OnDestroy {


  formGroup: FormGroup;
  nameCtrl: FormControl;
  clientMessage = 'client message';
  serverMessage: string;
  private subscriptions = new Subscription();

  constructor(private formBuilder: FormBuilder) {

   }

  ngOnInit() {
    this.nameCtrl = new FormControl();
    this.subscriptions.add(
    this.nameCtrl.valueChanges.subscribe((value: string) => {
      if (value === 'server') {
        this.serverMessage = 'server message';
      } else {
        this.serverMessage = '';
      }
    }));
    this.formGroup = this.formBuilder.group({
      name: this.nameCtrl
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
