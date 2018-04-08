import React from 'react'
import { Provider } from 'react-redux'
import Store from './Store'

import App from '../../containers/App'

const AppProvider = ({ children, title }) => (
  <Provider store={Store}>
    <App title={title}>{ children }</App>
  </Provider>
)

export default AppProvider
