// Error Page for Course
'use client';

import { Box, Heading, Text, Link } from '@chakra-ui/react';

export default function NotFound() {
  return (
    <Box
      minH='78vh'
      display={'flex'}
      flexDirection='column'
      justifyContent={'center'}
      alignItems='center'
    >
      <Heading color='#eb7040' fontSize={['3xl', '7xl']} fontWeight='medium'>
        404
      </Heading>
      <Text m='20px' textAlign={'center'}>
        Maybe this page moved. Got deleted. Is hiding out in quarantine. Never
        existed in the first place.
      </Text>
      <Text textAlign={'center'}>
        Let&apos;s go{' '}
        <Link
          href='/'
          _hover={{
            color: 'gray.800',
            textDecoration: 'none',
          }}
          color='green'
          fontSize={'xl'}
          fontWeight='medium'
        >
          Home
        </Link>{' '}
        and try from there.
      </Text>
    </Box>
  );
}
