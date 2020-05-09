import React from 'react';
import Shopify from '../components/platform/shopify';
import { fetchContentfulStartAsync } from "../redux/contentful/actions";


 const  ShopifyPage =  () => (
    <div>
        <Shopify/>
    </div>
);

// Index.getInitialProps = async function(ctx) {
//     ctx.store.dispatch(fetchContentfulStartAsync('/index'));
//     return {};
// };

export default ShopifyPage;