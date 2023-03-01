// About Page
'use client';

import React from 'react';
import { Box } from '@chakra-ui/react';
import AboutPage from './aboutPageComponents/AboutPage';

// Function returns about page
export default function About() {
  return (
    <Box
      border='1px'
      borderColor='red.100'
      marginTop='20'
      marginBottom='5'
      mx={['5', '10']}
      px='5'
      borderRadius='md'
    >
      <AboutPage></AboutPage>
    </Box>
  );
}
