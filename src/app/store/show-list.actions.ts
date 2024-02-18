import { createAction, props } from '@ngrx/store';

export const addTvShow = createAction(
  '[TV Show] Add TV Show',
  props<{ show: any }>()
);
