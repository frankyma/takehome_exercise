import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios';
import * as actions from './actions/actions'
import Gif from './gif'
import {ChevronLeft, ChevronRight} from '@material-ui/icons';

const matDispatchToProps = dispatch => ({
  loadGifs: gifs => dispatch(actions.loadGifs(gifs)),
  goRight: newIndex => dispatch(actions.goRight(newIndex)),
  goLeft: newIndex => dispatch(actions.goLeft(newIndex)),
})

const matStateToProps = ({ home }) => ({
  ...home
})

class App extends Component {
  componentDidMount() {
    axios.get('http://api.giphy.com/v1/gifs/search?api_key=vfJyZ01MtzcR17VY7mNvlh43HDjhuuP8&q=cats&limit=5')
    .then(result => {
      console.log(result.data.data[1])
      this.props.loadGifs(result.data.data.map(gifObj => gifObj.embed_url));
    })
    .catch(err => console.log(err))
  }
  render() {
    const {
      gifs,
      current,
      goRight,
      goLeft,
      gifCount
    } = this.props;
    const goRightHandler = () => goRight(current + 1)
    const goLeftHandler = () => goLeft(current - 1)
    const navRight = current < gifCount - 1 ? <ChevronRight onClick={goRightHandler} /> : null;
    const navLeft = current > 0 ? <ChevronLeft onClick={goLeftHandler} /> : null;

    return (
      <div>
        <div>
          {navLeft}
          <Gif url={gifs[current]} ></Gif>
          {navRight}
        </div>
      </div>
    )
  }
}

export default connect(matStateToProps, matDispatchToProps)(App)
