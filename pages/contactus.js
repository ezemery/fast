import React from 'react';
import ContactUs from '../components/contactus';
import { fetchContentfulStartAsync } from "../redux/contentful/actions";


 const  ContactUsPage =  () => (
    <div>
        <ContactUs/>
    </div>
);

// Index.getInitialProps = async function(ctx) {
//     ctx.store.dispatch(fetchContentfulStartAsync('/index'));
//     return {};
// };

export default ContactUsPage;