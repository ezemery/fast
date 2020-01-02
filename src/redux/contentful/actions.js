import { ContentfulActionTypes } from "./types";
import { getEntries } from "../../helpers/contentful";


export const fetchContentfulStart = () => ({
  type: ContentfulActionTypes.FETCH_CONTENTFUL_START,
  payload: {}
});

export const fetchContentfulSuccess = payload => ({
  type: ContentfulActionTypes.FETCH_CONTENTFUL_SUCCESS,
  payload: payload
});

export const fetchContentfulError = error => ({
  type: ContentfulActionTypes.FETCH_CONTENTFUL_ERROR,
  payload: error
});

export const fetchContentfulStartAsync = slug => async dispatch => {
  dispatch(fetchContentfulStart());
  try {
    const entries = await getEntries(slug);
    dispatch(fetchContentfulSuccess(entries));
  } catch (error) {
    dispatch(fetchContentfulError(error));
  }
};