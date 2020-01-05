import React from 'react';
import Home from '../components/home';
import { fetchContentfulStartAsync } from "../redux/contentful/actions";


 const  Index =  () => (
        <Home/>
);

Index.getInitialProps =  async function({ store, req }) {
    await store.dispatch(fetchContentfulStartAsync('/index'));
    return {};
};

export default Index;