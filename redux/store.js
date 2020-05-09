import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducer'

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

export const initializeStore = (initialState) => {
  return createStore(
      rootReducer,
      initialState,
    bindMiddleware([thunkMiddleware])
  )
}
export default initializeStore; 