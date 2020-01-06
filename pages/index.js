import React from 'react';
import Home from '../components/home';
import { fetchContentfulStartAsync } from "../redux/contentful/actions";



 const  Index =  () => (
        <Home/>
);

Index.getInitialProps =  async function({ store }) {
    await store.dispatch(fetchContentfulStartAsync('/index'));
    console.log("store state",store.getState())
    // return {  };
};

export default Index;