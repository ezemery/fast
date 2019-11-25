import { combineReducers } from "redux";
// import all reducers here and add to the the combine reducer method
import contentfulReducer from './contentful/reducer'

export const rootReducer = combineReducers({
    contentful: contentfulReducer,
})
export default rootReducer