// Header NavBar component
// To be used at the root level

'use client';

import Image from 'next/image';
import { Box, Flex } from '@chakra-ui/react';
import appLogo from '../../../public/media/appLogoFoot.png';

// Return an image with logo
// center alligned
// Image enclosed in a
export default function Footer() {
  return (
    <Box bg='white'>
      <Box>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: 'gray.200',
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: 'gray.200',
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Box w={['80px']} h={['48px']}>
            <Image src={appLogo} alt='Panaverse Logo' />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
