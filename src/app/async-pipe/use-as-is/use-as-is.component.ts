import { Component, OnInit } from '@angular/core';
import { users, User } from '../user';
import { Observable, interval, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-use-as-is',
  templateUrl: './use-as-is.component.html',
  styleUrls: ['./use-as-is.component.scss']
})
export class UseAsIsComponent implements OnInit {

  user$: Observable<User[]>;

  constructor() { }

  ngOnInit() {
    this.user$ = interval(3000).pipe(
      switchMap(() => of(users))
    );
  }

}
