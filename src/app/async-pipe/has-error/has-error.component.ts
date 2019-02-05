import { Component, OnInit } from '@angular/core';
import { Observable, interval, of, throwError } from 'rxjs';
import { User, users } from '../user';
import { switchMap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-has-error',
  templateUrl: './has-error.component.html',
  styleUrls: ['./has-error.component.scss']
})
export class HasErrorComponent implements OnInit {

  user$: Observable<User[]>;
  error: string;

  constructor() { }

  ngOnInit() {
    this.user$ = interval(2000).pipe(
      switchMap(() => throwError('Bp Team Error')),
      catchError((error: string) => {
        this.error = error;
        return of([]);
      }));
  }

}
