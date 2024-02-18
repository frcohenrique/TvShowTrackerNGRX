import { createReducer, on } from '@ngrx/store';
import * as ShowActions from './show-list.actions';
import { IShowListState } from './show-list.state';

export const initialState: IShowListState = {
  shows: [],
};

export const showListReducer = createReducer(
  initialState,
  on(ShowActions.addTvShow, (state, { show }) => ({
    ...state,
    shows: [...state.shows, show],
  }))
);
