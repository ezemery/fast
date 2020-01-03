import React from 'react';
import WarRoom from '../components/warroom';
import { fetchContentfulStartAsync } from "../redux/contentful/actions";


 const  WarRoomPage =  () => (
    <div>
        <WarRoom/>
    </div>
);

// Index.getInitialProps = async function(ctx) {
//     ctx.store.dispatch(fetchContentfulStartAsync('/index'));
//     return {};
// };

export default WarRoomPage;