import * as types from '../actionTypes/actiontypes'
const initialState = {
  loaded: false,
  gifs: [],
  current: null,
  gifCount: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_GIFS: 
      return {
        loaded: true,
        gifs: action.payload,
        current: 0,
        gifCount: action.payload.length
      };
      break;
    case types.GO_RIGHT: 
      return {
        ...state,
        current: action.payload,
      };
      break;
    case types.GO_LEFT: 
      return {
        ...state,
        current: action.payload,
      };
      break;
    default:
      return state
  }
}
