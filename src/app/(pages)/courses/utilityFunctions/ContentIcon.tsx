// Content type icon

import React from 'react';
import { Icon } from '@chakra-ui/icons';
import { Flex, Text } from '@chakra-ui/react';
import { FaVideo, FaBookOpen, FaInfoCircle } from 'react-icons/fa';
import { MdAssignmentTurnedIn, MdQuiz, MdHomeWork } from 'react-icons/md';
import { RiCheckboxBlankCircleLine, RiGithubFill } from 'react-icons/ri';

// Returns icon based on content type
export default function ContentIcon(props: { type: string }) {
  switch (props.type) {
    case 'video':
      return (
        <Flex pr='3'>
          <Icon as={FaVideo} boxSize='4' m='auto'></Icon>
          <Text pl='2' m='auto'>
            :
          </Text>
        </Flex>
      );
    case 'reading':
      return (
        <Flex pr='3'>
          <Icon as={FaBookOpen} boxSize='4' m='auto'></Icon>
          <Text pl='2' m='auto'>
            :
          </Text>
        </Flex>
      );
    case 'assignment':
      return (
        <Flex pr='3'>
          <Icon as={MdAssignmentTurnedIn} boxSize='4' m='auto'></Icon>
          <Text pl='2' m='auto'>
            :
          </Text>
        </Flex>
      );
    case 'quiz':
      return (
        <Flex pr='3'>
          <Icon as={MdQuiz} boxSize='4' m='auto'></Icon>
          <Text pl='2' m='auto'>
            :
          </Text>
        </Flex>
      );
    case 'github':
      return (
        <Flex pr='3'>
          <Icon as={RiGithubFill} boxSize='4' m='auto'></Icon>
          <Text pl='2' m='auto'>
            :
          </Text>
        </Flex>
      );
    case 'homework':
      return (
        <Flex pr='3'>
          <Icon as={MdHomeWork} boxSize='4' m='auto'></Icon>
          <Text pl='2' m='auto'>
            :
          </Text>
        </Flex>
      );
    case 'info':
      return (
        <Flex pr='3'>
          <Icon as={FaInfoCircle} boxSize='4' m='auto'></Icon>
          <Text pl='2' m='auto'>
            :
          </Text>
        </Flex>
      );
    default:
      return (
        <Flex pr='3'>
          <Icon as={RiCheckboxBlankCircleLine} boxSize='4' m='auto'></Icon>
          <Text pl='2' m='auto'>
            :
          </Text>
        </Flex>
      );
  }
}
