import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './actions/actions'
import Gif from './gif'
import {ChevronLeft, ChevronRight} from '@material-ui/icons';
import Loading from './loading'

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
    this.props.loadGifs();
  }
  render() {
    const {
      gifs,
      current,
      goRight,
      goLeft,
      gifCount,
      loaded,
    } = this.props;
    const goRightHandler = () => goRight(current + 1)
    const goLeftHandler = () => goLeft(current - 1)
    const navRight = current < gifCount - 1 ? <ChevronRight onClick={goRightHandler} /> : null;
    const navLeft = current > 0 ? <ChevronLeft onClick={goLeftHandler} /> : null;
    const gif = loaded ? <Gif url={gifs[current]} ></Gif> : <Loading></Loading>
    return (
      <div className="carousel">
        {navLeft}
          {gif}
          {navRight}
      </div>
    )
  }
}

export default connect(matStateToProps, matDispatchToProps)(App)
