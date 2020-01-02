import App from 'next/app';
import React from 'react';
import withReduxStore from '../helpers/with-redux-store';
import '../assets/font/graphik/style.css';
import '../assets/style.css';
import { Provider } from 'react-redux'

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Provider store={reduxStore}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default withReduxStore(MyApp)