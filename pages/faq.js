import React from 'react';
import Faq from '../components/faq';
import { fetchContentfulStartAsync } from "../redux/contentful/actions";


 const  FaqPage =  () => (
    <div>
        <Faq/>
    </div>
);

// Index.getInitialProps = async function(ctx) {
//     ctx.store.dispatch(fetchContentfulStartAsync('/index'));
//     return {};
// };

export default FaqPage;