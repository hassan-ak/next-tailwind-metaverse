// Home Page

'use client';

import { Box } from '@chakra-ui/react';
import HomePage from './homePageComponents/HomePage';
import HomePageHeader from './homePageComponents/HomePageHeader';

export default function Home() {
  return (
    <Box>
      <HomePageHeader />
      <HomePage />
    </Box>
  );
}
