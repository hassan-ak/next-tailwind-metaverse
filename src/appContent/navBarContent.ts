// NavBar contnet

// NAV item iterface
export interface NavItem {
  href: string;
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
}

// NavBar Items (Array of items)
export const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Courses',
    href: '/courses',
    children: [
      {
        label: 'WMD',
        subLabel: 'Web 3.0 (Blockchain) and Metaverse',
        href: '/courses/wmd',
      },
      {
        label: 'AIC',
        subLabel: 'Artificial Intelligence and Deep Learning',
        href: '/courses/aic',
      },
      {
        label: 'CNC',
        subLabel: 'Cloud-Native Computing',
        href: '/courses/cnc',
      },
      {
        label: 'IOT',
        subLabel: 'Ambient Computing and IoT',
        href: '/courses/iot',
      },
      {
        label: 'GB',
        subLabel: 'Genomics and Bioinformatics',
        href: '/courses/gb',
      },
      {
        label: 'NPA',
        subLabel: 'Network Programmability and Automation',
        href: '/courses/npa',
      },
    ],
  },
  {
    label: 'Contact Us',
    href: '/contact',
  },
];
