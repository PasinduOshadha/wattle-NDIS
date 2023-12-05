const nav_menus_list = [
  // {
  //   link: '/',
  //   title: 'Home',
  //   hasDropdown: true,
  //   megamenu: false,
  //   dropdownItems: [
  //     { link: '/', title: 'Home Style 01' },
  //     { link: '/home-2', title: 'Home Style 02' },
  //     { link: '/home-3', title: 'Home Style 03' },
  //     { link: '/home-4', title: 'Home Style 04' },
  //     { link: '/home-5', title: 'Home Style 05' },
  //   ]
  // },
  {
    link: '/',
    title: 'Home',
  },
  {
    link: '/about',
    title: 'About',
  },
  {
    link: '',
    title: 'Services',
    hasDropdown: true,
    megamenu: false,
    dropdownItems: [
      {
        link: '/service-details-2', title: 'Daily Living Support'
      },
      { link: '/service-details-3', title: 'Life Assistance' },
      { link: '/service-details-6', title: '24 Hour High Intensity Nursing and Personal Care' },
      { link: '/service-details-8', title: 'Assistance with Travel/Transport Arrangements' },
      { link: '/service-details-5', title: 'Social & Community Participation' },
      { link: '/service-details-4', title: 'Support Coordination' },
      { link: '/service-details-10', title: 'Home And Community Care Nursing' },
      { link: '/service-details-13', title: 'Group and Household Tasks' },

      // { link: '/service-details-7', title: 'Assistance with Life Stage Transition' },
      // { link: '/service-details-9', title: 'Innovative Community Participation' },
      // { link: '/service-details-11', title: 'Development of Life Skills' },
      // { link: '/service-details-12', title: 'Group and Centre-based Activities' },
      { link: '/service-details', title: 'Accommodation Services' },

    ]
  },
  // {
  //   link: '/referrels',
  //   title: 'Referells',
  // },
  // {
  //   link: '/feedback',
  //   title: 'Feedback',
  // },
  // {
  //   link: '/shop',
  //   title: 'Pages',
  //   hasDropdown: true,
  //   megamenu: false,
  //   dropdownItems: [
  //     { link: '/portfolio', title: 'Portfolio' },
  //     { link: '/portfolio-details', title: 'Portfolio Details' },
  //     { link: '/team', title: 'Team' },
  //     { link: '/team-details', title: 'Team Details' },
  //     { link: '/shop', title: 'Shop' },
  //     { link: '/shop-details', title: 'Shop Details' },
  //     { link: '/wishlist', title: 'Wishlist' },
  //     { link: '/cart', title: 'Cart' },
  //     { link: '/checkout', title: 'Checkout' },
  //     { link: '/faq', title: 'FAQ' },
  //   ]
  // },
  // {
  //   link: '/blog',
  //   title: 'Blog',
  //   hasDropdown: true,
  //   megamenu: false,
  //   dropdownItems: [
  //     { link: '/blog', title: 'Blog' },
  //     { link: '/blog-details', title: 'Blog Details' },
  //   ]
  // },
  {
    link: '/contact',
    title: 'Contact',
  },
]

export default nav_menus_list;