import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form-control-name',
  templateUrl: './form-control-name.component.html',
  styleUrls: ['./form-control-name.component.scss']
})
export class FormControlNameComponent implements OnInit, OnDestroy {

  formGroup: FormGroup;
  clientMessage = 'client message';
  serverMessage: string;
  private subscriptions = new Subscription();

  constructor(private formBuilder: FormBuilder) {

   }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: []
    });
    this.subscriptions.add(
      this.formGroup.get('name').valueChanges.subscribe((value: string) => {
        if (value === 'server') {
          this.serverMessage = 'server message';
        } else {
          this.serverMessage = '';
        }
      }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
