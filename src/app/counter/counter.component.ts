import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../store/counter.actions';
import { getCount } from '../store/counter.selectors';
import { AppState } from '../store/app.state';

@Component({
  selector: 'app-counter',
  template: `<div>
    <h1>Counter: {{ count$ | async }}</h1>
    <button (click)="onIncrement()">Increment</button>
    <button (click)="onDecrement()">Decrement</button>
    <button (click)="onReset()">Reset</button>
  </div>`,
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  count$: any;
  constructor(private readonly store: Store<AppState>) {
    this.count$ = this.store.select('count');
  }

  onIncrement() {
    this.store.dispatch(increment());
  }

  onDecrement() {
    this.store.dispatch(decrement());
  }

  onReset() {
    this.store.dispatch(reset());
  }
}
