// src/app/store/actions/auth.actions.ts
import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Auth] Login',
  props<{ user: { name: string; token: string } }>()
);

export const logout = createAction('[Auth] Logout');
