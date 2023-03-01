// Course Page HEader
import React from 'react';
import CourseImage from '../../utilityFunctions/CourseImage';
import { Heading, SimpleGrid, Stack, Text, Box } from '@chakra-ui/react';

// Returns Course heading description and Picture
export default function CourseHeader({
  subTitle,
  description,
  slug,
}: {
  subTitle: string;
  description: string;
  slug: string;
}) {
  return (
    <SimpleGrid
      spacing={['5', '5', '8']}
      px={['4', '4', '8', '12']}
      mt={['20', '20', '20']}
      mb={['4', '8', '12']}
      columns={[1, 1, 2]}
    >
      <Stack m='auto'>
        {/* Course Heading */}
        <Heading
          color='gray.600'
          fontSize={['xl', '2xl', '3xl']}
          textAlign={'start'}
        >
          {subTitle}
        </Heading>
        {/* Course Description */}
        <Text textAlign={'justify'} fontSize={['small', 'small', 'md']}>
          {description}
        </Text>
      </Stack>
      {/* Course Image */}
      <Box m='auto'>
        <CourseImage course={slug}></CourseImage>
      </Box>
    </SimpleGrid>
  );
}
