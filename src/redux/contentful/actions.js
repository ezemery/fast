import { ContentfulActionTypes } from "./types";
import { getEntries } from "../../helpers/contentful";

export const fetchContentfulStart = () => (
    {type: ContentfulActionTypes.FETCH_CONTENTFUL_START}
);

export const fetchContentfulStartAsync = (slug) => async dispatch =>{
    dispatch(fetchContentfulStart());
    try {
        const entries = getEntries(slug);
        dispatch(fetchContentfulSucess(entries));
    } catch (error) {
        dispatch (fetchContentfulError(error)); 
        throw new Error(error)
    }
}


export const fetchContentfulSucess = (payload) => (
    {type: ContentfulActionTypes.FETCH_CONTENTFUL_SUCCESS, payload}
);

export const fetchContentfulError = (error) => (
    {type: ContentfulActionTypes.FETCH_CONTENTFUL_ERROR, error}
);