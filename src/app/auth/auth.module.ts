// src/app/auth/auth.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { authReducer } from '../store/auth.reducer';
import { AuthEffects } from '../store/auth.effects';
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    AuthComponent,
    CommonModule,
    StoreModule.forFeature('auth', authReducer), // Register feature state
    EffectsModule.forFeature([AuthEffects]), // Register effects for feature
  ],
  exports: [AuthComponent],
})
export class AuthModule {}
