/* eslint-disable react/prop-types */
import React from 'react';
import '../style/main.scss';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
