import '@/styles/mantineBase.css';
import '@/styles/tailwind.css';
import { MantineProvider } from '@mantine/core';
import React from 'react';

const App = ({ Component, pageProps }) => (
  <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={{
      /** Put your mantine theme override here */
      colorScheme: 'light',
      fontFamily: 'Inria Sans',
      fontSizes: {
        xs: 14,
        sm: 16,
        md: 20,
        lg: 32,
        xl: 40,
      },
    }}
  >
    <Component
      /* eslint-disable react/jsx-props-no-spreading */
      {...pageProps}
    />
  </MantineProvider>
);

export default App;
