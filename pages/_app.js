import React from 'react'
import App from 'next/app'
import withRedux from 'next-redux-wrapper'
import { Provider } from 'react-redux';
import { initializeStore } from '../redux/store.js'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import 'bootstrap/dist/js/bootstrap.min.js';
import '../static/font/graphik/style.css';
import '../static/style.css';


const App = props => {
  const { Component, pageProps, store } = props
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default withRedux(initializeStore)(App)