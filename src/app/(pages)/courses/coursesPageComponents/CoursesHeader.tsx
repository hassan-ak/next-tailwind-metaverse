// Courses page Header

'use client';

import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

// Header Return function
export default function CoursesHeader() {
  return (
    <Box>
      {/* Box on top with heading */}
      <Box
        as='section'
        bg='linear-gradient(to right,#EBF8FF, #BEE3F8,#BEE3F8,#EBF8FF)'
        pt={['10', '10', '20']}
        pb={['10', '10', '20']}
        px='8'
        textAlign='center'
        marginTop='20'
      >
        <Heading
          color='#1A365D'
          as='h1'
          fontWeight='extrabold'
          fontSize={['3xl', '3xl', '4xl', '5xl']}
        >
          Courses we Offer
        </Heading>
      </Box>
      {/* Box with PAge description */}
      <Box as='section' mx='6'>
        <Box
          maxW='994px'
          minH='20'
          margin='auto'
          mt='-10'
          borderRadius='xl'
          overflow='hidden'
          boxShadow='0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'
          bg='white'
          p={['3']}
        >
          <Text textAlign={'justify'} fontSize={['small', 'small', 'md']}>
            The curriculum is intended for beginners who want to learn software
            development from the ground up. We are offering following six
            courses at the moment. The first two quarters are shared by all
            specialties and are dedicated to studying Object-Oriented
            Programming and cutting edge Full-Stack Web 2.0 development. It is
            going to be a fifteen-month-long hybrid program that includes both
            onsite and online classes and is divided into five quarters of 13
            weeks each. The emphasis will be on hands-on learning by educating
            students to produce projects.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
