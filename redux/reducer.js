import { combineReducers } from "redux";
// import all reducers here and add to the the combine reducer method
import contentReducer from './contentful/reducer'

export const rootReducer = combineReducers({
    contentful: contentReducer,
})
export default rootReducer