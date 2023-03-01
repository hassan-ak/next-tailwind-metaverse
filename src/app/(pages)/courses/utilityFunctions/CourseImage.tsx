// Course Image

import React from 'react';
import Image from 'next/image';
import { Box } from '@chakra-ui/react';
import gb from '../../../../../public/media/gb.png';
import wmd from '../../../../../public/media/web3.png';
import aic from '../../../../../public/media/aic.png';
import cnc from '../../../../../public/media/cnc.png';
import iot from '../../../../../public/media/iot.png';
import npa from '../../../../../public/media/npa.png';
import blank from '../../../../../public/media/blank.png';

// Returns an image pages on course title/slug
export default function CourseImage(props: { course: string }) {
  switch (props.course) {
    case 'wmd':
      return (
        <Box borderRadius={'xl'} overflow='hidden'>
          <Image src={wmd} alt={props.course} />
        </Box>
      );
    case 'aic':
      return (
        <Box borderRadius={'xl'} overflow='hidden'>
          <Image src={aic} alt={props.course} />
        </Box>
      );
    case 'cnc':
      return (
        <Box borderRadius={'xl'} overflow='hidden'>
          <Image src={cnc} alt={props.course} />
        </Box>
      );
    case 'iot':
      return (
        <Box borderRadius={'xl'} overflow='hidden'>
          <Image src={iot} alt={props.course} />
        </Box>
      );
    case 'gb':
      return (
        <Box borderRadius={'xl'} overflow='hidden'>
          <Image src={gb} alt={props.course} />
        </Box>
      );
    case 'npa':
      return (
        <Box borderRadius={'xl'} overflow='hidden'>
          <Image src={npa} alt={props.course} />
        </Box>
      );
    default:
      return (
        <Box borderRadius={'xl'} overflow='hidden'>
          <Image src={blank} alt={'blank'} />
        </Box>
      );
  }
}
