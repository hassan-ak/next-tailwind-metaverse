// Contact Us Page
'use client';

import Form from './contactPageComponents/Form';
import Contacts from './contactPageComponents/Contacts';
import { Container, Flex, Box, Stack } from '@chakra-ui/react';

// Conatct us page function
export default function contact() {
  return (
    <Container
      bg='white'
      maxW='full'
      mt={['20', '10']}
      centerContent
      overflow='hidden'
    >
      <Flex>
        <Box
          bg='#02054B'
          color='white'
          borderRadius='lg'
          m={['4', '4', '10']}
          p='5'
        >
          <Box p={4}>
            <Stack
              spacing={['20', '3', '5', '20']}
              direction={['column', 'column', 'row']}
            >
              {/* Page Components */}
              <Contacts></Contacts>
              <Form></Form>
            </Stack>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
