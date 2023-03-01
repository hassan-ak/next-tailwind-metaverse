// Tile of the app
// Logo and site title

import React from 'react';
import Image from 'next/image';
import { Flex, Text, Link, Box } from '@chakra-ui/react';
import appLogo from '../../../../public/media/appLogo.png';

// Function to retirn title component
export default function Title() {
  return (
    // Wrapper Flex box
    // act as link on click navigate to home page
    <Flex as={Link} href={'/'}>
      {/* Site Logo */}
      <Box w={['24px', '32px']} h={['36px', '48px']}>
        <Image src={appLogo} alt='Panaverse Logo' />
      </Box>
      {/* Site Title */}
      <Text
        color='gray.800'
        textAlign='center'
        fontSize={['md', 'lg']}
        fontFamily={'sans-serif'}
        my='auto'
        px='2'
      >
        Panaverse
      </Text>
    </Flex>
  );
}
