import { IconLayoutDashboard, IconChartBubble, IconChartLine, IconChartBar } from '@tabler/icons';

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Home',
  },
  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconLayoutDashboard,
    href: '/system/dashboard',
  },
  {
    navlabel: true,
    subheader: 'User Management',
  },
  {
    id: uniqueId(),
    title: 'My Account',
    icon: IconChartBubble,
    href: '/system/user',
  },
  {
    navlabel: true,
    subheader: 'More About',
  },
  {
    id: uniqueId(),
    title: 'Chart 01',
    icon: IconChartBubble,
    href: '/system/chart',
  },
  {
    id: uniqueId(),
    title: 'Chart 02',
    icon: IconChartLine,
    href: '/system/chart-two',
  },
  {
    id: uniqueId(),
    title: 'Chart 03',
    icon: IconChartBar,
    href: '/system/chart-three',
  },
];

export default Menuitems;
