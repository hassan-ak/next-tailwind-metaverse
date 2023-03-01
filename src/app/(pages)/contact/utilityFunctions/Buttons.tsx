// Contacts buttons

'use client';

import React from 'react';
import { ReactElement } from 'react';
import { IconButton, Button, StackProps, Link } from '@chakra-ui/react';

// Interface to define StackProps along with icon and href
interface ButtonProps extends StackProps {
  icon: ReactElement;
  href?: string;
}

// Returns a button to display contact information and icon button
export function ContactButton(props: ButtonProps) {
  const { icon, children } = props;
  return (
    <Button
      justifyContent='flex-start'
      size='md'
      height='48px'
      width='200px'
      variant='ghost'
      color='#DCE2FF'
      _hover={{ border: '2px solid #1C6FEB' }}
      leftIcon={icon}
    >
      {children}
    </Button>
  );
}

// Returns a button to display social button
export function SocilaButton(props: ButtonProps) {
  const { icon, href } = props;
  return (
    <IconButton
      as={Link}
      href={href}
      target='_blank'
      aria-label='facebook'
      variant='ghost'
      size='lg'
      isRound={true}
      _hover={{ bg: '#0D74FF' }}
      leftIcon={icon}
    />
  );
}
