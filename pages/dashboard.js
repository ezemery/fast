import React from 'react';
import Dashboard from '../components/dashboard';
import { fetchContentfulStartAsync } from "../redux/contentful/actions";


 const  DashboardPage =  () => (
    <div>
        <Dashboard/>
    </div>
);

// Index.getInitialProps = async function(ctx) {
//     ctx.store.dispatch(fetchContentfulStartAsync('/index'));
//     return {};
// };

export default DashboardPage;