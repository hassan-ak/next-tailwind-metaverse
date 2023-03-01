// Home Page Content

import React from 'react';
import { Box, Button, Heading, Link, Text } from '@chakra-ui/react';

export default function HomePage() {
  return (
    <Box bg='#dcfcfc' my='5'>
      {/* Section Heading */}
      <Heading
        color='gray.700'
        fontWeight={'bold'}
        fontSize={['xl', '2xl', '3xl']}
        textAlign='center'
        pt='5'
        pb='3'
      >
        Start Your Journey
      </Heading>
      {/* Section Description */}
      <Text
        align={'center'}
        color={'gray.600'}
        fontSize={['sm', 'md', 'lg']}
        mx={['5', '10', '20']}
        pb='3'
      >
        Multiple courses are offered though the platform of Presidential
        Initiative for Artificial Intelligence & Computing (PIAIC). Each is
        going to be a fifteen-month long hybrid program that includes both
        onsite and online classes and is divided into five quarters of 13 weeks
        each. The first three quarters are shared by all specialties and are
        dedicated to studying Object-Oriented Programming and cutting-edge
        Full-Stack Web 2.0 development. The graduates of this program will own
        products (Full-Stack App Templates, AR and VR Experiences, and APIs)
        that are marketed globally by the Panaverse DAO
      </Text>
      {/* Section Buttons */}
      <Box textAlign='center' pb='5'>
        <Button
          as={Link}
          href='courses'
          rounded={'xl'}
          size={['sm', 'md', 'lg']}
          fontWeight={'normal'}
          colorScheme={'teal'}
          _hover={{ bg: '#68D391', textDecoration: 'none' }}
          mr='50px'
        >
          Explore
        </Button>
        <Button
          as={Link}
          href='https://portal.piaic.org/signup'
          target='_blank'
          rounded={'xl'}
          size={['sm', 'md', 'lg']}
          fontWeight={'normal'}
          colorScheme={'teal'}
          _hover={{ bg: '#68D391', textDecoration: 'none' }}
        >
          Register
        </Button>
      </Box>
    </Box>
  );
}
