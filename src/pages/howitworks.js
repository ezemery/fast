import React from 'react';
import HowItWorks from '../components/howitworks';
import { fetchContentfulStartAsync } from "../redux/contentful/actions";


 const  HowItWorksPage =  () => (
    <div>
        <HowItWorks/>
    </div>
);

// Index.getInitialProps = async function(ctx) {
//     ctx.store.dispatch(fetchContentfulStartAsync('/index'));
//     return {};
// };

export default HowItWorksPage;