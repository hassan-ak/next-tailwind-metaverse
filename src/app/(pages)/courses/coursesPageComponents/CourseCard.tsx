// Course Card

import React from 'react';
import CourseImage from '../utilityFunctions/CourseImage';
import { Box, Heading, Text, Button, Link } from '@chakra-ui/react';

// returns course Card
export default function CourseCard({
  title,
  subTitle,
  slug,
}: {
  title: string;
  subTitle: string;
  slug: string;
}) {
  return (
    // Course card box
    <Box
      key={title}
      borderRadius='lg'
      p='5'
      boxShadow='0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'
      border='1px'
      borderColor='red.100'
      role='group'
      _hover={{ bg: 'blue.50', transform: 'scale(1.05)' }}
      transition='all .5s ease-in-out'
    >
      {/* Course Title */}
      <Heading
        transition='all .5s ease-in-out'
        color='gray.600'
        _groupHover={{ color: 'red.400' }}
        textAlign='center'
        pb='3'
        fontSize={['xl', '2xl']}
      >
        {title}
      </Heading>
      {/* Course Image */}
      <CourseImage course={slug}></CourseImage>
      {/* Course Sub Title */}
      <Text mt='3' color='gray.500' fontSize={['sm', 'md']}>
        {subTitle}
      </Text>
      {/* Button */}
      <Box mt='4' textAlign='center'>
        <Button
          colorScheme='teal'
          size='sm'
          w={['auto']}
          as={Link}
          href={`courses/${title.toLowerCase()}`}
          transition='all .5s ease'
          _hover={{ textDecoration: 'none', bg: '#68D391' }}
        >
          Read more
        </Button>
      </Box>
    </Box>
  );
}
