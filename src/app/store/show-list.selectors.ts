import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IShowListState } from './show-list.state';

export const selectShowListState =
  createFeatureSelector<IShowListState>('showList');

export const selectTvShows = createSelector(
  selectShowListState,
  (state: IShowListState) => state.shows
);
