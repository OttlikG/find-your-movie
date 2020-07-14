import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
// You could use BrowserRoute or HashRoute
// But passing in history directly to Route will
// give your app more flexibility on deeper integration of `history`
import { Router } from 'react-router-dom'

import Routes from './routes'

export default class Root extends React.PureComponent {
  render() {
    const { store, history } = this.props

    return (
        <Provider store={store}>
          <Router history={history}>
            <Routes />
          </Router>
        </Provider>
    )
  }
}

Root.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
}