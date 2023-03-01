// About Page Components

import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { ABOUT_ITEMS } from '@/appContent/aboutContnet';

// Function Returns a Box by mapping over about data
export default function AboutPage() {
  return (
    <>
      {ABOUT_ITEMS.map((aboutItem) => (
        <Box key={aboutItem.id}>
          {/* Heading */}
          <Heading size='md' mt='5' color='gray.600'>
            {aboutItem.title}
          </Heading>
          {/* Description */}
          <Box px={['3', '5']} textAlign={'justify'} mb='5'>
            {aboutItem.para.map((paraItem) => (
              <Text
                pt='1'
                fontSize={['sm', 'md']}
                key={paraItem.id}
                color='gray.500'
              >
                &emsp;
                {paraItem.content}
              </Text>
            ))}
          </Box>
        </Box>
      ))}
    </>
  );
}
