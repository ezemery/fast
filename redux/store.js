import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducer'


export function initializeStore(initialState) {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
export default initializeStore;   