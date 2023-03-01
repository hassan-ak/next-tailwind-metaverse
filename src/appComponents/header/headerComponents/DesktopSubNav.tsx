// Sub Nav Manu for the Desktop view
// Any Nav item having Sub-itmes have this component

import React from 'react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { NavItem } from '../../../appContent/navBarContent';
import { Stack, Link, Box, Text, Flex, Icon } from '@chakra-ui/react';

// Return function for the component
export default function DesktopSubNav({ label, href, subLabel }: NavItem) {
  return (
    // Returns a link to respective page
    <Link
      href={href}
      role='group'
      display='block'
      p={2}
      rounded={'md'}
      _hover={{ bg: 'blue.50' }}
    >
      {/* Each link is a row-stack of text and a icon */}
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all 0.5s ease'}
            _groupHover={{ color: 'red.400' }}
            fontWeight={500}
            color='gray.600'
          >
            {label}
          </Text>
          <Text fontSize={'sm'} color='gray.400'>
            {subLabel}
          </Text>
        </Box>
        <Flex
          transition={'all 0.5s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'red.400'} boxSize='5' as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
}
