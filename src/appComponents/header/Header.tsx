// Header NavBar component
// To be used at the root level

'use client';

import React from 'react';
import Title from './headerComponents/Title';
import MobileNav from './headerComponents/MobileNav';
import DesktopNav from './headerComponents/DesktopNav';
import { Box, Flex, Collapse } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { IconButton, useDisclosure } from '@chakra-ui/react';

export default function Header() {
  // isOpen default set to false
  // onToggle call back function toggle value of isOpen
  // to be used for popover display
  const { isOpen, onToggle } = useDisclosure();

  return (
    // wrapper div of the component
    <Box marginBottom={isOpen ? '0' : '0'}>
      {/* Flex to work as a box representing the header navbar */}
      <Flex
        bg='white'
        boxShadow='0px 15px 20px -10px rgba(0, 0, 0, 0.1), -5px 5px 5px -10px rgba(0, 0, 0, 0.04)'
        color='gray.50'
        minH='60px'
        py='2'
        px='4'
        position={'fixed'}
        minW='100vw'
      >
        {/* Flex box for the logo, title and desktop navbar (hides on mobile devices)*/}
        <Flex flexShrink={'0'} justify='start' align={'center'}>
          <Title />
          <Flex display={['none', 'flex']} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
        {/* Menu/close button to be displayed on mobile devices */}
        <Flex flex='auto' justify='flex-end' display={['flex', 'none']}>
          <IconButton
            colorScheme='red'
            variant={'ghost'}
            onClick={onToggle}
            aria-label={'Toggle Navigation'}
            icon={
              isOpen ? (
                <CloseIcon boxSize={'3'} />
              ) : (
                <HamburgerIcon boxSize={'5'} />
              )
            }
          />
        </Flex>
      </Flex>
      {/* mobile navbar (to be hiden on desktop devices and on closure) */}
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}
