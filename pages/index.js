import React from 'react';
import Home from '../components/home';
import { fetchContentfulStartAsync } from "../redux/contentful/actions";
import { connect } from "react-redux";
import { withModules } from "../helpers/modules";


 const  Index =  () => (
        <Home/>
);

Index.getInitialProps = async function({ reduxStore, req }) {
    reduxStore.dispatch(fetchContentfulStartAsync('/index'));
    return {};
};

export default withModules(connect()(Index));