const routes = [
  {
    id: 1,
    path: '/wallet',
    name: 'Wallet',
    icon: 'wallet',
    children: [
      {
        id: 2,
        path: '/all-coins',
        name: 'All coins',
        parent: 1,
      },
      {
        id: 3,
        path: '/borrow',
        name: 'Borrow',
        parent: 1,
      },
      {
        id: 4,
        path: '/contacts',
        name: 'Contacts',
        parent: 1,
      },
      {
        id: 5,
        path: '/settings',
        name: 'Settings',
        parent: 1,
      },
    ],
  },
  {
    id: 6,
    path: '/crowdsale',
    name: 'Crowdsale',
    icon: 'coin',
  },
  {
    id: 7,
    path: '/special-offers',
    name: 'Special Offers',
    icon: 'tag',
  },
];

export default routes;
