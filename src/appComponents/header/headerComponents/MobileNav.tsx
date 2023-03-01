// Navigation menu to be displayed on desktop view

import React, { useState } from 'react';
import MobileSubNav from './MobileSubNav';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useDisclosure, IconButton } from '@chakra-ui/react';
import { NAV_ITEMS } from '../../../appContent/navBarContent';
import { Stack, Flex, Link, Text, Collapse } from '@chakra-ui/react';

export default function MobileNav() {
  // isOpen default set to false
  // onToggle call back function toggle value of isOpen
  // to be used for popover display
  // state is for particular item
  const { isOpen, onToggle } = useDisclosure();
  const [state, setState] = useState('');

  return (
    // Stack to display only on mobile view
    <Stack bg='white' px={4} pt={4} pb={1} display={['flex', 'none']} mt='50px'>
      {/* Loop over items to be listed on the display */}
      {/* Each item to act as a link */}
      {NAV_ITEMS.map((navItem) => (
        <Stack spacing={4} key={navItem.label}>
          <Flex justify={'space-between'} align={'center'}>
            <Flex
              w='100vw'
              py={2}
              as={Link}
              href={navItem.href}
              align={'center'}
              _hover={{
                textDecoration: 'none',
              }}
            >
              <Text fontWeight={600} color='gray.600'>
                {navItem.label}
              </Text>
            </Flex>
            {/* If any item have children include an icon too */}
            {navItem.children && (
              <IconButton
                aria-label={'Toggle Navigation'}
                colorScheme='red'
                variant={'ghost'}
                transition={'all .25s ease-in-out'}
                transform={
                  isOpen && navItem.label === state ? 'rotate(180deg)' : ''
                }
                boxSize='6'
                onClick={navItem.children && onToggle}
              >
                <ChevronDownIcon
                  onClick={() => {
                    setState(navItem.label);
                  }}
                />
              </IconButton>
            )}
          </Flex>
          {/* Content to be displayed on dropdown */}
          <Collapse
            in={isOpen && navItem.label === state}
            animateOpacity
            style={{ marginTop: '0!important' }}
          >
            <Stack
              mt={2}
              pl={4}
              borderLeft={1}
              borderStyle={'dotted'}
              borderColor='gray.200'
              align={'start'}
            >
              {/* Loop-over chidren and call sub component */}
              {navItem.children &&
                navItem.children.map((child) => (
                  <MobileSubNav key={child.label} {...child} />
                ))}
            </Stack>
          </Collapse>
        </Stack>
      ))}
    </Stack>
  );
}
