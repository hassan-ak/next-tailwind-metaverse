// Course outline

import React from 'react';
import ContentIcon from '../../utilityFunctions/ContentIcon';
import { Text, Heading, Stack, Link } from '@chakra-ui/react';
import { AccordionItem, AccordionPanel, Box } from '@chakra-ui/react';
import { CORE_TRACK, COURSE_ITEMS } from '@/appContent/courseContent';
import { Accordion, AccordionButton, AccordionIcon } from '@chakra-ui/react';

// Returns Course Outline
export default function CourseOutline({
  track,
  slug,
}: {
  track: string;
  slug: string;
}) {
  // Based on track and slug set track to map (core/specilized)
  let trackContent =
    track === 'core'
      ? CORE_TRACK
      : COURSE_ITEMS.find((item) => item.slug === slug)?.track;
  return (
    <Stack px={['4', '4', '12', '16', '20']} mb='6'>
      {/* Heading Based on track*/}
      {track === 'core' ? (
        <Heading color='gray.600' fontSize={['lg', 'xl', '2xl']}>
          Core Track
        </Heading>
      ) : (
        <Heading color='gray.600' fontSize={['lg', 'xl', '2xl']}>
          Specialization Track
        </Heading>
      )}

      <Box px={['2', '2', '4', '6']}>
        <Box
          border={'1px'}
          borderRadius='xl'
          borderColor='gray.300'
          px={['1', '1', '20']}
        >
          {trackContent &&
            trackContent.map((quarter) => (
              // Box along with content for each quarter
              <Box key={quarter.title} py='10px' px={['1', '1', '2', '2']}>
                <Box border={'1px'}>
                  <Accordion allowToggle>
                    <AccordionItem>
                      {/* Accordion Title / Quarter Title*/}
                      <h2>
                        <AccordionButton
                          _expanded={{
                            bg: 'blue.900',
                            color: 'gray.100',
                            fontWeight: 'medium',
                          }}
                        >
                          <Box
                            as='span'
                            flex='1'
                            textAlign='left'
                            fontSize={['small', 'small', 'md']}
                          >
                            {quarter.subTitle}
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      {/* Accordion Content / Quarter Content*/}
                      <AccordionPanel pb={4}>
                        <Box
                          textAlign={'center'}
                          fontSize={['small', 'small', 'md']}
                        >
                          {/* Quarter Number and Title along with duration */}
                          {quarter.subTitle && (
                            <Text fontWeight='bold' pb='2'>
                              {quarter.title}
                              <br />
                              {quarter.subTitle}
                            </Text>
                          )}
                          <Text>Duration: 13 Weeks</Text>
                          {/* quarter description */}
                          {quarter.description && (
                            <Box>
                              <Text textAlign={'left'} fontWeight='bold'>
                                Course Description:
                              </Text>
                              <Text textAlign={'justify'}>
                                {quarter.description}
                              </Text>
                            </Box>
                          )}
                        </Box>
                        {/* Map over quarter content to list topics */}
                        <Box px={['1', '2']}>
                          {quarter.outline &&
                            quarter.outline.map((outline) => (
                              <Box
                                key={outline.title}
                                py='10px'
                                px={['1', '1', '2', '2']}
                              >
                                <Box border={'1px'}>
                                  <Accordion allowToggle>
                                    <AccordionItem>
                                      {/* Accordion Title / Topic Title*/}
                                      <h2>
                                        <AccordionButton
                                          _expanded={{
                                            bg: 'cyan.900',
                                            color: 'white',
                                          }}
                                        >
                                          <Box
                                            as='span'
                                            flex='1'
                                            textAlign='left'
                                            fontSize={['small', 'small', 'md']}
                                          >
                                            {outline.title}
                                          </Box>
                                          <AccordionIcon />
                                        </AccordionButton>
                                      </h2>
                                      {/* Map over topic details */}
                                      <AccordionPanel pb={4}>
                                        {outline.subOutline &&
                                          outline.subOutline.map(
                                            (subOutline) => (
                                              <Box
                                                key={subOutline.title}
                                                mb='2'
                                                borderBottom='1px solid'
                                                borderColor='gray.200'
                                                px='1'
                                                pb={'4'}
                                              >
                                                {/* content icon and details */}
                                                <Stack direction={'row'}>
                                                  {subOutline.type && (
                                                    // Content Icon
                                                    <ContentIcon
                                                      type={subOutline.type}
                                                    ></ContentIcon>
                                                  )}
                                                  {/* Check if content has a link or not */}
                                                  {subOutline.href ? (
                                                    // Returns click able link
                                                    <Link
                                                      target='_blank'
                                                      href={subOutline.href}
                                                      _hover={{
                                                        textDecoration: 'none',
                                                        transform:
                                                          'scale(1.02)',
                                                      }}
                                                      fontSize={[
                                                        'small',
                                                        'small',
                                                        'md',
                                                      ]}
                                                    >
                                                      {subOutline.title}
                                                    </Link>
                                                  ) : (
                                                    // Returns simple text
                                                    <Text
                                                      fontSize={[
                                                        'small',
                                                        'small',
                                                        'md',
                                                      ]}
                                                    >
                                                      {subOutline.title}
                                                    </Text>
                                                  )}
                                                </Stack>
                                              </Box>
                                            )
                                          )}
                                      </AccordionPanel>
                                    </AccordionItem>
                                  </Accordion>
                                </Box>
                              </Box>
                            ))}
                        </Box>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </Box>
              </Box>
            ))}
        </Box>
      </Box>
    </Stack>
  );
}
