import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import combineReducer from '../Reducers/Main'

const ComposeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
      })
    : compose

const configureStore = () => {
  const middleWare = [thunk]
  const enhancers = [applyMiddleware(...middleWare)]
  const store = createStore(combineReducer, ComposeEnhancers(...enhancers))
  return store
}
export default configureStore
