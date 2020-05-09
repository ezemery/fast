import React from 'react';
import Assets from '../components/assets';
import { fetchContentfulStartAsync } from "../redux/contentful/actions";


 const  AssetsPage =  () => (
    <div>
        <Assets/>
    </div>
);

// Index.getInitialProps = async function(ctx) {
//     ctx.store.dispatch(fetchContentfulStartAsync('/index'));
//     return {};
// };

export default AssetsPage;