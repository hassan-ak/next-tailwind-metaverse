// Contact compnent

'use client';

import React from 'react';
import { BsGithub, BsYoutube, BsTwitter } from 'react-icons/bs';
import { ContactButton, SocilaButton } from '../utilityFunctions/Buttons';
import { MdPhone, MdEmail, MdLocationOn, MdFacebook } from 'react-icons/md';
import { Flex, Box, Heading, Text, HStack, VStack } from '@chakra-ui/react';

// Function to return contact information and social buttons
export default function Contacts() {
  return (
    <Flex margin={'auto'}>
      <Box>
        {/* Heading and text*/}
        <Heading>Contact</Heading>
        <Text mt={['3', '3', '3', '5']} color='gray.500'>
          Fill up the form below to contact
        </Text>
        {/* Box to display contact buttons */}
        <Box py={['5', '5', '8', '10']}>
          <VStack pl={0} spacing={3} alignItems='flex-start'>
            <ContactButton icon={<MdPhone color='#1970F1' size='20px' />}>
              +92-300-1234567
            </ContactButton>
            <ContactButton icon={<MdEmail color='#1970F1' size='20px' />}>
              hello@abc.com
            </ContactButton>
            <ContactButton icon={<MdLocationOn color='#1970F1' size='20px' />}>
              Lahore, Pakistan
            </ContactButton>
          </VStack>
        </Box>
        {/* Stack to display social buttons */}
        <HStack mt={['5', '10']} spacing={5} px={5} alignItems='flex-start'>
          <SocilaButton
            icon={<MdFacebook size='28px' />}
            href={'https://www.facebook.com/groups/panaverse'}
          ></SocilaButton>
          <SocilaButton
            icon={<BsGithub size='28px' />}
            href={'https://github.com/panaverse'}
          ></SocilaButton>
          <SocilaButton
            icon={<BsTwitter size='28px' />}
            href={'https://twitter.com/Panaverse_edu'}
          ></SocilaButton>
          <SocilaButton
            icon={<BsYoutube size='28px' />}
            href={'https://www.youtube.com/@panaverse/streams'}
          ></SocilaButton>
        </HStack>
      </Box>
    </Flex>
  );
}
