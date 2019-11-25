import { ContentfulActionTypes } from "./types";

/**
 * @desc Inistate State for redux actions
 * @typedef [Obj]
 */

export const INITIAL_STATE = {
    data: {},
    loading: false,
};

export const contentReducer = (state = INITIAL_STATE, action) => {
  const {type, payload} = action
  switch (type) {
    case ContentfulActionTypes.FETCH_CONTENTFUL_START:
      return {
        ...state,
        data: {},
        loading:true,
      };
      case ContentfulActionTypes.FETCH_CONTENTFUL_SUCCESS:
      return {
        ...state,
        data: payload,
        loading:false,
      };
      case ContentfulActionTypes.FETCH_CONTENTFUL_ERROR:
        return {
            ...state,
            data: payload,
            loading:false,
        };
    default:
      return state;
  }
};

export default contentReducer;