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
  switch (action.type) {
    case ContentfulActionTypes.FETCH_CONTENTFUL_START:
      return {
        ...state,
        data: {},
        loading:true,
      };
      case ContentfulActionTypes.FETCH_CONTENTFUL_SUCCESS:
      return {
        ...state,
        data: {
          ...action.payload
        },
        loading:false,
      };
      case ContentfulActionTypes.FETCH_CONTENTFUL_ERROR:
        return {
            ...state,
            data: {
              ...action.error
            },
            loading:false,
        };
    default:
      return state;
  }
};

export default contentReducer;