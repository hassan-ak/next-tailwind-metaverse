// Sub Nav Manu for the mobile view
// Any Nav item having Sub-itmes have this component

import React from 'react';
import { Link } from '@chakra-ui/react';
import { NavItem } from '../../../appContent/navBarContent';

// Component return funtion
export default function MobileSubNav({ label, subLabel, href }: NavItem) {
  return (
    // Link to sub labels
    <Link
      key={label}
      py={2}
      href={href}
      fontWeight={500}
      color='gray.600'
      _hover={{
        textDecoration: 'none',
        color: 'red.400',
      }}
    >
      {subLabel}
    </Link>
  );
}
