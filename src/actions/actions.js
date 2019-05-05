import * as types from '../actionTypes/actiontypes'
import axios from 'axios';

export const loadGifs = () => {
  return dispatch => {
    dispatch({
      type: types.LOADING,
    })
    axios.get('http://api.giphy.com/v1/gifs/search?api_key=vfJyZ01MtzcR17VY7mNvlh43HDjhuuP8&q=cats&limit=5')
      .then(result => {
        console.log('result', result.data.data[1])
        const gifs = result.data.data.map(gifObj => gifObj.embed_url)
        setTimeout (() => dispatch({
          type: types.LOAD_GIFS,
          payload: gifs
        }), 1000)
      })
      .catch(err => console.log(err))
}
}

export const loadGifs2 = gifs => ({
        type: types.LOAD_GIFS,
        payload: gifs
      })

export const goRight = newIndex => ({
  type: types.GO_RIGHT,
  payload: newIndex
});

export const goLeft = newIndex => ({
  type: types.GO_LEFT,
  payload: newIndex
});

