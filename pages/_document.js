import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang='en'>
        <Head>
          <link rel='manifest' href='/manifest.json' />
          <link rel='icon' href='/images/icon-192.png' />
          <link rel='apple-touch-icon' href='/images/icon-192.png' />
          <meta name='theme-color' content='#317EFB' />
          <meta name='Description' content='Put your description here.' />
          <title>My App</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
  };
};
