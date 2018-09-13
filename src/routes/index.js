const routes = [
  {
    id: 1,
    path: '/wallet',
    name: 'Wallet',
    icon: 'wallet',
  },
  {
    id: 2,
    path: '/crowdsale',
    name: 'Crowdsale',
    icon: 'coin',
  },
  {
    id: 3,
    path: '/special-offers',
    name: 'Special Offers',
    icon: 'tag',
  },
  {
    id: 4,
    path: '/all-coins',
    name: 'All coins',
    parent: 1,
  },
  {
    id: 5,
    path: '/borrow',
    name: 'Borrow',
    parent: 1,
  },
  {
    id: 6,
    path: '/contacts',
    name: 'Contacts',
    parent: 1,
  },
  {
    id: 7,
    path: '/settings',
    name: 'Settings',
    parent: 1,
  },
];

export default routes;
