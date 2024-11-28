import { createSelector } from '@ngrx/store';
import { AppState } from './app.state';

const selectedCount = (state: AppState) => state.count;

export const getCount = createSelector(selectedCount, (count: number) => count);
