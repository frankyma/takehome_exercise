import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import './index.css'
import App from './App'
import Home from './Home'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


ReactDOM.render(
  <Provider store={configureStore()}>
    <Router>
      <div>
        <ul className="navigation">
          <li><Link to="/home">home</Link></li>
          <li><Link to="/">gifs</Link></li>
        </ul>
        <Route exact path="/" component={App} />
        <Route exact path="/home" component={Home} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
