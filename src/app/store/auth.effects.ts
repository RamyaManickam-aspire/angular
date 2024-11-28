// src/app/store/effects/auth.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { login, logout } from '../store/auth.actions';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions) {}

  login$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(login),
        tap((action) => {
          // Save token to local storage
          localStorage.setItem('token', action.user.token);
        })
      ),
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logout),
        tap(() => {
          // Remove token from local storage
          localStorage.removeItem('token');
        })
      ),
    { dispatch: false }
  );
}
