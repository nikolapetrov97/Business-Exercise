import { applyMiddleware, createStore, compose } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import { rootReducer } from '../reducers'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'

let customCompose

if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  customCompose = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__({ name: 'businessexample' })
  )
} else {
  customCompose = compose(applyMiddleware(thunk))
}

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['business'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, customCompose)

const persistor = persistStore(store)

export { store, persistor }
