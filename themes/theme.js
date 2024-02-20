// theme.js
import React from 'react';
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#153832',
      },
    },
  },
});

export default theme;
