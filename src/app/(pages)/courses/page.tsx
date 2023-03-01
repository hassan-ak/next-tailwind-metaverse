// Course Page

'use client';
import React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import { COURSE_ITEMS } from '@/appContent/courseContent';
import CourseCard from './coursesPageComponents/CourseCard';
import CoursesHeader from './coursesPageComponents/CoursesHeader';

// Returns course page
export default function courses() {
  return (
    <Box>
      {/* Course Page Header */}
      <CoursesHeader></CoursesHeader>
      {/* Grid to show course cards */}
      {/* Loop Over courses and return card for each course */}
      <SimpleGrid
        spacing='40px'
        px={['5', '10', '20']}
        my='10'
        columns={[1, 2, 3]}
      >
        {COURSE_ITEMS.map((course) => (
          <CourseCard key={course.slug} {...course}></CourseCard>
        ))}
      </SimpleGrid>
    </Box>
  );
}
