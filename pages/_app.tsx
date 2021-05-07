import React from 'react';

import { AppProps } from 'next/app';

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

// eslint-disable-next-line import/no-default-export
export default MyApp;
