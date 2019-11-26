import logger from 'redux-logger'
import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './reducer'
import thunk from 'redux-thunk'
const middlewears = [thunk] 

if(process.env.NODE_ENV === "development"){
    middlewears.push(logger)
}

export const store = createStore(rootReducer, compose(
  applyMiddleware(...middlewears),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))
export default store;  