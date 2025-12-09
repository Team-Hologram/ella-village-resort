export const SITE_CONFIG = {
  name: 'Ella Village Retreat',
  tagline: 'Experience Authentic Village Life in Ella',
  description:
    'Immerse yourself in traditional Sri Lankan village life surrounded by paddy fields, coconut groves, and ancient temples in the heart of Ella.',
  url: 'https://ellavillageretreat.com',
  email: 'hello@ellavillageretreat.com',
  phone: '+94 77 123 4567',
  whatsapp: '+94771234567',
  address: 'Ella Village Road, Ella 90900, Sri Lanka',
  coordinates: {
    lat: 6.8667,
    lng: 81.0467,
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
    name: 'Ravana Falls',
    type: 'waterfall',
    coordinates: { lat: 6.8234, lng: 81.0532 },
    description: 'Majestic 25m waterfall surrounded by lush greenery',
  },
  {
    id: 2,
    name: 'Ancient Village Temple',
    type: 'temple',
    coordinates: { lat: 6.8712, lng: 81.0401 },
    description: '300-year-old Buddhist temple with stunning murals',
  },
  {
    id: 3,
    name: 'Sunrise Paddy Fields',
    type: 'paddy',
    coordinates: { lat: 6.8689, lng: 81.0489 },
    description: 'Golden rice terraces perfect for morning walks',
  },
  {
    id: 4,
    name: 'Crystal Lake',
    type: 'lake',
    coordinates: { lat: 6.8601, lng: 81.0523 },
    description: 'Tranquil lake ideal for fishing and bird watching',
  },
  {
    id: 5,
    name: 'Village River Bath',
    type: 'river',
    coordinates: { lat: 6.8656, lng: 81.0445 },
    description: 'Natural bathing spot used by locals for generations',
  },
];