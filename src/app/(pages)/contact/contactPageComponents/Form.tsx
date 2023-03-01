// Contact Form
'use client';

import { BsPerson } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import { InputLeftElement, Textarea } from '@chakra-ui/react';
import { FormLabel, Input, InputGroup } from '@chakra-ui/react';
import { Flex, Box, Button, VStack, FormControl } from '@chakra-ui/react';

// Return a form
export default function Form() {
  return (
    <Flex>
      <Box bg='white' borderRadius='lg'>
        <Box m={8} color='#0B0E3F'>
          {/* Stack form elements vertically */}
          <VStack spacing={5}>
            {/* Name Input box */}
            <FormControl id='name'>
              <FormLabel>Your Name</FormLabel>
              <InputGroup borderColor='#E0E1E7'>
                <InputLeftElement pointerEvents='none'>
                  <BsPerson color='gray.800' />
                </InputLeftElement>
                <Input type='text' size='md' />
              </InputGroup>
            </FormControl>
            {/* mail Input box */}
            <FormControl id='mail'>
              <FormLabel>Mail</FormLabel>
              <InputGroup borderColor='#E0E1E7'>
                <InputLeftElement pointerEvents='none'>
                  <MdOutlineEmail color='gray.800' />
                </InputLeftElement>
                <Input type='text' size='md' />
              </InputGroup>
            </FormControl>
            {/* Text Input box */}
            <FormControl id='msg'>
              <FormLabel>Message</FormLabel>
              <Textarea
                borderColor='gray.300'
                _hover={{
                  borderRadius: 'gray.300',
                }}
                placeholder='message'
              />
            </FormControl>
            {/* Form Button */}
            <FormControl id='name' float='right'>
              <Button variant='solid' bg='#0D74FF' color='white'>
                Send Message
              </Button>
            </FormControl>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}
