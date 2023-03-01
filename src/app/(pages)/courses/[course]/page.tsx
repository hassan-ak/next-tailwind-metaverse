// Particular course page

'use client';

import React from 'react';
import { Box } from '@chakra-ui/react';
import { notFound } from 'next/navigation';
import { COURSE_ITEMS } from '@/appContent/courseContent';
import CourseHeader from './coursePageComponent/CourseHeader';
import CourseOutline from './coursePageComponent/CourseOutline';

// Get available courses list
const courseList = () => {
  let courses: string[] = [];
  COURSE_ITEMS.map((course) => {
    courses.push(course.slug);
  });
  return courses;
};

// genrate static params
export async function generateStaticParams() {
  const courses = courseList();
  return courses.map((course) => ({
    course: course,
  }));
}

// Course Page
export default function course({ params }: { params: { course: string } }) {
  // Course details based on slug/name
  let courseDetails = COURSE_ITEMS.find((item) => item.slug === params.course);

  // In case of error returns error Page
  if (!courseDetails) {
    notFound();
  }

  // Page content
  return (
    <Box my='5'>
      <CourseHeader {...courseDetails}></CourseHeader>
      <CourseOutline track={'core'} slug={courseDetails.slug}></CourseOutline>
      <CourseOutline
        track={'specialized'}
        slug={courseDetails.slug}
      ></CourseOutline>
    </Box>
  );
}
