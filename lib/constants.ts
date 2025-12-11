export const SITE_CONFIG = {
  name: 'Echo Home Relax',
  tagline: 'Experience Authentic Village Life in Ella',
  description:
    'Immerse yourself in traditional Sri Lankan village life surrounded by paddy fields, coconut groves, and ancient temples in the heart of Ella-Wellawaya.',
  url: 'https://echohomerelax.com',
  email: 'hello@echohomerelax.com',
  phone: '+94 77 251 7219',
  whatsapp: '+94772517219',
  address: 'Ella-Wellawaya Road, Wellawaya 91000, Sri Lanka',
  coordinates: {
    lat: 6.6433840,
    lng: 81.1091610,
  },
};

export const ACTIVITIES = [
  {
    id: 1,
    title: 'Clay Pot Making',
    description: 'Learn the ancient art of pottery with local artisans',
    icon: '🏺',
    duration: '2 hours',
    image: '/images/activities/clay-pot.jpg',
  },
  {
    id: 2,
    title: 'Coconut Plucking',
    description: 'Experience traditional coconut harvesting techniques',
    icon: '🥥',
    duration: '1 hour',
    image: '/images/activities/coconut.jpg',
  },
  {
    id: 3,
    title: 'Village Kitchen Cooking',
    description: 'Cook authentic Sri Lankan cuisine on a wood fire',
    icon: '🍛',
    duration: '3 hours',
    image: '/images/activities/cooking.jpg',
  },
  {
    id: 4,
    title: 'Paddy Field Walk',
    description: 'Stroll through golden rice fields at sunrise',
    icon: '🌾',
    duration: '1.5 hours',
    image: '/images/activities/paddy-field.jpg',
  },
  {
    id: 5,
    title: 'Lake Fishing',
    description: 'Try traditional fishing methods in serene waters',
    icon: '🎣',
    duration: '3 hours',
    image: '/images/activities/fishing.jpg',
  },
  {
    id: 6,
    title: 'River Bathing',
    description: 'Refresh in natural river pools like the locals',
    icon: '🏞️',
    duration: '2 hours',
    image: '/images/activities/river.jpg',
  },
  {
    id: 7,
    title: 'Waterfall Exploration',
    description: 'Discover hidden waterfalls in the lush countryside',
    icon: '💧',
    duration: '4 hours',
    image: '/images/activities/waterfall.jpg',
  },
  {
    id: 8,
    title: 'Temple Visits',
    description: 'Explore ancient Buddhist temples with local guides',
    icon: '🛕',
    duration: '2 hours',
    image: '/images/activities/temple.jpg',
  },
];

// export const ROOMS = [
//   {
//     id: 1,
//     name: 'Traditional Clay House',
//     description: 'Authentic mud-walled room with thatched roof',
//     capacity: 2,
//     amenities: ['King bed', 'Traditional bathroom', 'Garden view', 'Fan'],
//     price: 80,
//     images: ['/images/rooms/clay-1.jpg', '/images/rooms/clay-2.jpg'],
//   },
//   {
//     id: 2,
//     name: 'Coconut Grove Suite',
//     description: 'Spacious suite overlooking coconut plantation',
//     capacity: 4,
//     amenities: ['2 Queen beds', 'Modern bathroom', 'Balcony', 'AC'],
//     price: 120,
//     images: ['/images/rooms/grove-1.jpg', '/images/rooms/grove-2.jpg'],
//   },
//   {
//     id: 3,
//     name: 'Paddy View Villa',
//     description: 'Luxury villa with panoramic paddy field views',
//     capacity: 6,
//     amenities: ['3 Bedrooms', 'Kitchen', 'Living area', 'Private terrace'],
//     price: 200,
//     images: ['/images/rooms/villa-1.jpg', '/images/rooms/villa-2.jpg'],
//   },
// ];

export const TRADITIONAL_CLAY_HOUSE = {
  id: 1,
  name: 'Traditional Clay House',
  description: 'Authentic mud-walled room with thatched roof',
  capacity: 2,
  price: 80,
  gallery: [
    '/images/rooms/clay-exterior.jpg',
    '/images/rooms/clay-bedroom.jpg',
    '/images/rooms/clay-interior.jpg',
    '/images/rooms/clay-bathroom.jpg',
    '/images/rooms/clay-courtyard.jpg',
    '/images/rooms/clay-details.jpg',
    '/images/rooms/clay-night.jpg',
    '/images/rooms/clay-garden.jpg',
  ],
};

export const EXPLORATION_POINTS = [
  
  {
    id: 1,
    name: "Yudhaganava Stupa\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0",
    type: 'temple',
    coordinates: { lat: 6.7754864462951145, lng: 81.23498427571167 },
    description: '/images/explore/yudaganawa.jpg',
  },
  {
    id: 2,
    name: 'Diyaluma Falls\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0',
    type: 'waterfall',
    coordinates: { lat: 6.733368063279525, lng: 81.03137867796386 },
    description: '/images/explore/diyaluma.jpg',
  },
  {
    id: 3,
    name: 'Ellewala Waterfall\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0',
    type: 'waterfall',
    coordinates: { lat: 6.781680537528461, lng: 81.08577150842197 },
    description: '/images/explore/ellewala.jpg',
  },
  {
    id: 4,
    name: 'Buduruwagala Raja Maha Viharaya',
    type: 'temple',
    coordinates: { lat: 6.685771565107966, lng: 81.07965075704934 },
    description: '/images/explore/buduruwagala.jpg',
  },
  {
    id: 5,
    name: 'Maligawila Old Rajamaha Viharaya',
    type: 'temple',
    coordinates: { lat: 6.731626036323862, lng: 81.35389785707471 },
    description: '/images/explore/maligawila.jpg',
  },
];