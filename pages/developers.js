import React from 'react';
import Developers from '../components/developers';
import { fetchContentfulStartAsync } from "../redux/contentful/actions";


 const  DevelopersPage =  () => (
    <div>
        <Developers/>
    </div>
);

// Index.getInitialProps = async function(ctx) {
//     ctx.store.dispatch(fetchContentfulStartAsync('/index'));
//     return {};
// };

export default DevelopersPage;