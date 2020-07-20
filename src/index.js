import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history';

import Root from './Root'
import configureStore from './redux/configureStore'
import 'antd/dist/antd.css';

const history = createBrowserHistory();
const store = configureStore(window.__INITIAL_STATE__, history)

// Render the React application to the DOM
// Root component is to bootstrap Provider, Router and DevTools
ReactDOM.render(
  <Root history={history} store={store} />,
  document.getElementById('root')
)
