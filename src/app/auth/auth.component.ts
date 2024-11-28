// src/app/auth/auth.component.ts
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { Observable } from 'rxjs';
import { login, logout } from '../store/auth.actions';
import {
  selectIsAuthenticated,
  selectUser,
} from '../store/selectors/auth.selectors';

@Component({
  selector: 'app-auth',
  template: `
    <div *ngIf="!(isAuthenticated$ | async)">
      <h2>Login</h2>
      <button (click)="onLogin()">Login</button>
    </div>

    <div *ngIf="isAuthenticated$ | async">
      <h2>Welcome, {{ (user$ | async)?.name }}</h2>
      <button (click)="onLogout()">Logout</button>
    </div>
  `,
})
export class AuthComponent {
  isAuthenticated$: Observable<boolean>;
  user$: Observable<{ name: string; token: string } | null>;

  constructor(private store: Store<AppState>) {
    this.isAuthenticated$ = this.store.select(selectIsAuthenticated);
    this.user$ = this.store.select(selectUser);
  }

  onLogin() {
    const user = { name: 'John Doe', token: '12345' };
    this.store.dispatch(login({ user }));
  }

  onLogout() {
    this.store.dispatch(logout());
  }
}
