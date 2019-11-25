import { ContentfulActionTypes } from "./types";
import { getEntries } from "../../helpers/contentful";

export const fetchContentfulStart = () => (
    {type: ContentfulActionTypes.FETCH_CONTENTFUL_START}
);

export const fetchContentfulStartAsync = (slug) => async dispatch =>{
    dispatch(fetchContentfulStart());
    try {
        const entries = await getEntries(slug);
        dispatch(fetchContentfulSucess(entries));
    } catch (error) {
        console.error(error)
        dispatch (fetchContentfulError(error)); 
    }
}


export const fetchContentfulSucess = (payload) => (
    {
        type: ContentfulActionTypes.FETCH_CONTENTFUL_SUCCESS, 
        payload: payload
    }
);

export const fetchContentfulError = (error) => (
    {
        type: ContentfulActionTypes.FETCH_CONTENTFUL_ERROR, 
        payload: error
    }
);