import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from './store/counter.actions';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AppState, selectCounter } from './store/counter.selector';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  counter$!: Observable<number>
  constructor(
    private store: Store<AppState>
  ) {
    this.counter$ = this.store.select(selectCounter)
  }

  incrementCount() {
    this.store.dispatch(increment());
  }

  decrimentCount() {
    this.store.dispatch(decrement());
  }

  resetCount() {
    this.store.dispatch(reset());
  }
}
