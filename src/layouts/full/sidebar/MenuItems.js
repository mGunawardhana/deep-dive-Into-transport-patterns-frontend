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
    href: '/dashboard',
  },
  {
    navlabel: true,
    subheader: 'More About',
  },
  {
    id: uniqueId(),
    title: 'Chart 01',
    icon: IconChartBubble,
    href: '#',
  },
  {
    id: uniqueId(),
    title: 'Chart 02',
    icon: IconChartLine,
    href: '#',
  },
  {
    id: uniqueId(),
    title: 'Chart 03',
    icon: IconChartBar,
    href: '#',
  },
];

export default Menuitems;
