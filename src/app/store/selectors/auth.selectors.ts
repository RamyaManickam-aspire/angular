// src/app/store/selectors/auth.selectors.ts
import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectAuthState = (state: AppState) => state.auth;

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (authState) => authState.isAuthenticated
);

export const selectUser = createSelector(
  selectAuthState,
  (authState) => authState.user
);
