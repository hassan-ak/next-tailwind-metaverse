// Home Page Hero Section

import React from 'react';
import Image from 'next/image';
import main from '../../../public/media/main.png';
import { Heading, SimpleGrid, Stack, Text, Box, Flex } from '@chakra-ui/react';

export default function HomePageHeader() {
  return (
    <SimpleGrid
      mt={['10', '20']}
      py={['10', '10', '15']}
      spacing={['8', '8', '10']}
      columns={[1, 1, 2]}
      px='10'
    >
      {/* Hero Section Text Part */}
      <Stack flex={1} m='auto'>
        {/* Hero Section Heading */}
        <Heading fontWeight={600} fontSize={['2xl', '3xl', '4xl']}>
          <Text width='fit-content'>Panaverse DAO</Text>
          <Text
            fontWeight={400}
            fontSize={['xl', '2xl', '3xl']}
            color={'red.400'}
          >
            a Community
          </Text>
        </Heading>
        {/* Hero Section Text */}
        <Text color={'gray.600'} align='justify' fontSize={['sm', 'md', 'lg']}>
          to learn the Future of Web: Web 3.0, Metaverse, and Edge Computing.
          Panaverse DAO is a movement to spread these technolgies globally. It
          is community of Web 3 and Metaverse developers, designers, trainers,
          startup founders and service providers.
        </Text>
      </Stack>
      {/* Hero Section Image Part */}
      <Flex flex={1} justify={'center'} align={'center'} w={'full'}>
        <Box rounded={'2xl'} boxShadow={'2xl'} overflow={'hidden'}>
          <Image src={main} alt={'Title Image'} />
        </Box>
      </Flex>
    </SimpleGrid>
  );
}
