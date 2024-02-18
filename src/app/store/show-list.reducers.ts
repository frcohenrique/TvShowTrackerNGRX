import { createReducer, on } from '@ngrx/store';
import * as ShowActions from './show-list.actions';
import { IShowListState } from './show-list.state';

export const initialState: IShowListState = {
  shows: [],
};

export const showListReducer = createReducer(
  initialState,
  on(ShowActions.addTvShow, (state, { show }) => {
    const showExists = state.shows.some(
      (existingShow) => existingShow.id === show.id
    );
    if (!showExists) {
      return {
        ...state,
        shows: [...state.shows, show],
      };
    }
    return state;
  })
);
