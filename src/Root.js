import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './routes'

export default class Root extends React.PureComponent {
  render() {
    const { store } = this.props

    return (
        <Provider store={store}>
          <Router>
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