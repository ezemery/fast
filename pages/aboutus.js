import React from 'react';
import AboutUs from '../components/aboutus';
import { fetchContentfulStartAsync } from "../redux/contentful/actions";


 const  AboutUsPage =  () => (
    <div>
        <AboutUs/>
    </div>
);

// Index.getInitialProps = async function(ctx) {
//     ctx.store.dispatch(fetchContentfulStartAsync('/index'));
//     return {};
// };

export default AboutUsPage;