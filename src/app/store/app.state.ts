// src/app/store/app.state.ts
export interface AppState {
  auth: AuthState; // Add more slices of state if needed
}

export interface AuthState {
  user: { name: string; token: string } | null;
  isAuthenticated: boolean;
}
