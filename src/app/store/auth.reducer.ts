// src/app/store/reducers/auth.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { AuthState } from './app.state';
import { login, logout } from './auth.actions';

export const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

const _authReducer = createReducer(
  initialState,
  on(login, (state, { user }) => ({
    ...state,
    user,
    isAuthenticated: true,
  })),
  on(logout, (state) => ({
    ...state,
    user: null,
    isAuthenticated: false,
  }))
);

export function authReducer(state: any, action: any) {
  return _authReducer(state, action);
}
