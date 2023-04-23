/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/globals.css';
import '../styles/vendor/css/font-awesome.min.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
