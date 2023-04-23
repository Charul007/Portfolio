import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';
import { headData } from '../mock/data';

export default function Document() {
  const { title, lang, description } = headData;

  return (
    <Html lang="en">
      <Head>
        {/* <meta charSet="utf-8" />
        <title>{title || 'Ritik Patidar | Developer'}</title>
        <html lang={lang || 'en'} />
        <meta name="keywords" content="Ritik,Patidar ,Ritik Patidar, Developer,MERN Developer" />
        <meta name="description" content={description || 'Ritik Patidar | Developer'} /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
