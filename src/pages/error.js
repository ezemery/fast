import React from 'react';
import NotFound from '../components/404';
import ServerError from '../components/500';

function Error({ statusCode }) {
    { statusCode == 404 ? <NotFound/> : <ServerError/>}
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error