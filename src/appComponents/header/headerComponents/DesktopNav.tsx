// Navigation menu to be displayed on desktop view

import React from 'react';
import DesktopSubNav from './DesktopSubNav';
import { Link, PopoverContent } from '@chakra-ui/react';
import { NAV_ITEMS } from '../../../appContent/navBarContent';
import { Popover, Stack, Box, PopoverTrigger } from '@chakra-ui/react';

// Function to export Navbar component
export default function DesktopNav() {
  return (
    // stack items in a row
    <Stack direction={'row'} spacing={4}>
      {/* Loop-over nav items and create a popover component for each item */}
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            {/* Each popover trigger is a link to respective page */}
            <PopoverTrigger>
              <Link
                p={2}
                fontSize='sm'
                fontWeight='500'
                color='gray.600'
                href={navItem.href}
                _hover={{
                  color: 'gray.800',
                  textDecoration: 'none',
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>
            {/* In case any item have children, define popover content */}
            {navItem.children && (
              <PopoverContent
                bg='white'
                zIndex={'1'}
                border={0}
                boxShadow={'xl'}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack>
                  {/* Loop-over item children and define nav bar sub-elements */}
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
}
