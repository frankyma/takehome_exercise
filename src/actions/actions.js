import * as types from '../actionTypes/actiontypes'

export const loadGifs = gifs => ({
  type: types.LOAD_GIFS,
  payload: gifs
});

export const goRight = newIndex => ({
  type: types.GO_RIGHT,
  payload: newIndex
});

export const goLeft = newIndex => ({
  type: types.GO_LEFT,
  payload: newIndex
});

