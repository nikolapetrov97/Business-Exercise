import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { store, persistor } from './store'
import CssBaseline from '@mui/material/CssBaseline'
import { PersistGate } from 'redux-persist/integration/react'

declare global {
  interface Window {
    store: any
    __REDUX_DEVTOOLS_EXTENSION__?: any
    paypal: any
  }
}

window.store = store

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <CssBaseline>
        <App />
      </CssBaseline>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
