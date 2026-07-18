export const destinations = [
  {
    id: 1,
    slug: 'chitkul',
    name: 'Chitkul',
    location: 'Kinnaur, Himachal Pradesh',
    description: 'The last inhabited village near the Indo-Tibet border, Chitkul offers pristine views of snow-capped peaks, ancient wooden temples, and lush green meadows that stretch as far as the eye can see.',
    shortDescription: 'India\'s last village on the Indo-Tibet border with stunning mountain views.',
    price: 8999,
    duration: '3N/4D',
    difficulty: 'Easy',
    altitude: '3,450m',
    bestTime: 'May – October',
    distance: '12 km',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1571401835393-8c5f35328320?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=800&fit=crop'
    ],
    included: ['Accommodation in tents/homestays', 'All meals during trek', 'Experienced guide', 'First aid kit', 'Permits & permissions'],
    excluded: ['Travel to/from base', 'Personal expenses', 'Travel insurance', 'Tips & gratuities', 'Anything not mentioned'],
    itinerary: [
      { day: 1, title: 'Arrive in Sangla', description: 'Arrive at Sangla and drive to Chitkul. Explore the village and ancient temple.' },
      { day: 2, title: 'Explore Chitkul', description: 'Trek to nearby meadows, visit the last Indian outpost, enjoy panoramic views.' },
      { day: 3, title: 'Rakcham Excursion', description: 'Day trek to Rakcham village through pine forests and apple orchards.' },
      { day: 4, title: 'Departure', description: 'Morning at leisure, then drive back to Sangla for onward journey.' }
    ],
    faqs: [
      { q: 'How difficult is the Chitkul trip?', a: 'It is easy to moderate. Suitable for beginners and families.' },
      { q: 'What is the best time to visit?', a: 'May to October offers the best weather and road conditions.' },
      { q: 'Is network available?', a: 'Limited BSNL network is available. Most areas have no connectivity.' }
    ]
  },
  {
    id: 2,
    slug: 'triund',
    name: 'Triund',
    location: 'Dharamshala, Himachal Pradesh',
    description: 'Triund is a breathtaking hilltop meadow situated at the foot of the Dhauladhar ranges. Known as the "Crown of Dharamshala," it offers spectacular sunrise views and a magical night sky.',
    shortDescription: 'The Crown of Dharamshala with majestic Dhauladhar views.',
    price: 5499,
    duration: '2N/3D',
    difficulty: 'Easy-Moderate',
    altitude: '2,828m',
    bestTime: 'March – December',
    distance: '9 km',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1200&h=800&fit=crop'
    ],
    included: ['Camping at Triund top', 'All meals', 'Guide & porter', 'First aid', 'Permits'],
    excluded: ['Transport to McLeodganj', 'Personal gear', 'Insurance', 'Tips', 'Extra activities'],
    itinerary: [
      { day: 1, title: 'McLeodganj to Triund', description: 'Trek from McLeodganj through rhododendron forests to Triund top. Camp overnight.' },
      { day: 2, title: 'Triund Exploration', description: 'Watch sunrise over Dhauladhar, explore Snowline Café route, stargazing at night.' },
      { day: 3, title: 'Triund to McLeodganj', description: 'Early morning descent back to McLeodganj. Trip ends.' }
    ],
    faqs: [
      { q: 'Is this suitable for first-time trekkers?', a: 'Yes, Triund is one of the best beginner treks in India.' },
      { q: 'Can we drive to the top?', a: 'No, you must trek the last 9 km from McLeodganj.' },
      { q: 'Is camping allowed at the top?', a: 'Yes, multiple camping sites are available at the meadow.' }
    ]
  },
  {
    id: 3,
    slug: 'kareri-lake',
    name: 'Kareri Lake',
    location: 'Kangra, Himachal Pradesh',
    description: 'A stunning glacial lake nestled in the Dhauladhar range at an altitude of 2,950m. The turquoise blue waters reflect the surrounding snow peaks creating a photographer\'s paradise.',
    shortDescription: 'Glacial turquoise lake surrounded by majestic Dhauladhar peaks.',
    price: 6999,
    duration: '2N/3D',
    difficulty: 'Easy-Moderate',
    altitude: '2,950m',
    bestTime: 'March – November',
    distance: '14 km',
    image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1571401835393-8c5f35328320?w=1200&h=800&fit=crop'
    ],
    included: ['Camping by the lake', 'Meals', 'Guide', 'First aid', 'Camping gear'],
    excluded: ['Transport', 'Personal items', 'Insurance', 'Tips', 'Camera charges'],
    itinerary: [
      { day: 1, title: 'Ghera to Kareri', description: 'Drive to Ghera village, trek through oak forests to Kareri village.' },
      { day: 2, title: 'Kareri Lake', description: 'Trek to Kareri Lake, explore the glacial surroundings, camp by the lake.' },
      { day: 3, title: 'Return', description: 'Descend back to Ghera village and drive to Dharamshala.' }
    ],
    faqs: [
      { q: 'Is swimming allowed in the lake?', a: 'No, the lake is glacial and extremely cold.' },
      { q: 'How remote is the location?', a: 'Very remote. Limited network, basic facilities at Kareri village.' }
    ]
  },
  {
    id: 4,
    slug: 'kheerganga',
    name: 'Kheerganga',
    location: 'Kullu, Himachal Pradesh',
    description: 'Famous for its natural hot springs at 3,050m altitude, Kheerganga is a paradise trekker\'s reward. The trek passes through Parvati Valley\'s stunning landscapes and dense pine forests.',
    shortDescription: 'Natural hot springs at 3,050m in the stunning Parvati Valley.',
    price: 5999,
    duration: '2N/3D',
    difficulty: 'Moderate',
    altitude: '3,050m',
    bestTime: 'March – November',
    distance: '12 km',
    image: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1200&h=800&fit=crop'
    ],
    included: ['Camp stay', 'All meals', 'Guide', 'First aid camping equipment'],
    excluded: ['Transport', 'Personal expenses', 'Insurance', 'Tips'],
    itinerary: [
      { day: 1, title: 'Kasol to Kheerganga', description: 'Trek from Barshaini through Parvati Valley to Kheerganga. Hot spring bath.' },
      { day: 2, title: 'Kheerganga', description: 'Explore the meadows, visit Shiva temple, enjoy hot springs. Stargazing.' },
      { day: 3, title: 'Return to Kasol', description: 'Descend to Barshaini, drive back to Kasol.' }
    ],
    faqs: [
      { q: 'Are the hot springs safe?', a: 'Yes, natural hot springs are safe and therapeutic.' },
      { q: 'Is the trek difficult?', a: 'Moderate. Some steep sections but manageable with basic fitness.' }
    ]
  },
  {
    id: 5,
    slug: 'manali',
    name: 'Manali',
    location: 'Kullu, Himachal Pradesh',
    description: 'The adventure capital of India, Manali is a stunning hill station surrounded by towering peaks, ancient temples, and world-class skiing, paragliding, and river rafting experiences.',
    shortDescription: 'India\'s adventure capital with snow peaks, rivers, and endless activities.',
    price: 7499,
    duration: '3N/4D',
    difficulty: 'Easy',
    altitude: '2,050m',
    bestTime: 'Year Round',
    distance: 'N/A',
    image: 'https://images.unsplash.com/photo-1571401835393-8c5f35328320?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1571401835393-8c5f35328320?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1200&h=800&fit=crop'
    ],
    included: ['Hotel accommodation', 'Daily breakfast & dinner', 'Sightseeing cab', 'Guide', 'Activities'],
    excluded: ['Flights/train', 'Lunch', 'Personal expenses', 'Insurance', 'Tips'],
    itinerary: [
      { day: 1, title: 'Arrive in Manali', description: 'Check in, explore Mall Road, Hadimba Temple, local market.' },
      { day: 2, title: 'Solang Valley', description: 'Full day excursion to Solang Valley. Paragliding, skiing, zorbing.' },
      { day: 3, title: 'Rohtang / Atal Tunnel', description: 'Drive to Rohtang Pass or Atal Tunnel. Snow activities and views.' },
      { day: 4, title: 'Departure', description: 'Visit Vashisht hot springs, Jogini Falls. Depart.' }
    ],
    faqs: [
      { q: 'Is Manali safe for solo travelers?', a: 'Yes, Manali is very safe and tourist-friendly year round.' },
      { q: 'Which season is best?', a: 'Summer (Mar-Jun) for adventure, Winter (Dec-Feb) for snow.' }
    ]
  },
  {
    id: 6,
    slug: 'kasol',
    name: 'Kasol',
    location: 'Kullu, Himachal Pradesh',
    description: 'Known as the "Mini Israel of India," Kasol is a backpacker\'s haven nestled in the Parvati Valley. Famous for its cafés, Israeli cuisine, and as a gateway to countless treks.',
    shortDescription: 'The Mini Israel of India – backpacker\'s paradise in Parvati Valley.',
    price: 4999,
    duration: '2N/3D',
    difficulty: 'Easy',
    altitude: '1,640m',
    bestTime: 'Year Round',
    distance: 'N/A',
    image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1200&h=800&fit=crop'
    ],
    included: ['Hostel/hotel stay', 'Breakfast', 'Local sightseeing', 'Guide', 'Camping gear'],
    excluded: ['Transport', 'Other meals', 'Personal expenses', 'Tips'],
    itinerary: [
      { day: 1, title: 'Arrive in Kasol', description: 'Check in, explore cafés, walk along Parvati River, visit Manikaran.' },
      { day: 2, title: 'Chalal Trek', description: 'Short trek to Chalal village, explore Israeli cafés, evening bonfire.' },
      { day: 3, title: 'Departure', description: 'Morning nature walk, breakfast, depart for onward journey.' }
    ],
    faqs: [
      { q: 'Is Kasol suitable for families?', a: 'Yes, though it\'s more popular with young travelers and backpackers.' },
      { q: 'What is the weather like?', a: 'Pleasant in summer (15-25°C), cold in winter (0-10°C).' }
    ]
  },
  {
    id: 7,
    slug: 'tosh',
    name: 'Tosh',
    location: 'Kullu, Himachal Pradesh',
    description: 'A remote and unspoiled village perched at 2,400m in the Parvati Valley, Tosh offers raw Himalayan beauty with snow-capped peaks, traditional stone houses, and absolute tranquility.',
    shortDescription: 'Unspoiled Himalayan village with raw beauty and serene vibes.',
    price: 5499,
    duration: '2N/3D',
    difficulty: 'Easy-Moderate',
    altitude: '2,400m',
    bestTime: 'March – November',
    distance: '4 km',
    image: 'https://images.unsplash.com/photo-1595814294526-84287e1bde23?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1595814294526-84287e1bde23?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1200&h=800&fit=crop'
    ],
    included: ['Homestay', 'Meals', 'Guide', 'First aid'],
    excluded: ['Transport', 'Personal expenses', 'Tips'],
    itinerary: [
      { day: 1, title: 'Barshaini to Tosh', description: 'Short trek from Barshaini to Tosh village. Settle in and explore.' },
      { day: 2, title: 'Tosh Exploration', description: 'Hike to nearby viewpoints, visit Kutla village, sunset views.' },
      { day: 3, title: 'Return', description: 'Descend to Barshaini and continue journey.' }
    ],
    faqs: [
      { q: 'How is the road to Tosh?', a: 'Road from Barshaini to Tosh is steep and can be challenging.' },
      { q: 'Is there electricity?', a: 'Yes, but power cuts are common. Carry a power bank.' }
    ]
  },
  {
    id: 8,
    slug: 'spiti',
    name: 'Spiti Valley',
    location: 'Lahaul-Spiti, Himachal Pradesh',
    description: 'The "Middle Land" between India and Tibet, Spiti is a cold desert mountain valley with ancient monasteries, crystal-clear lakes, and some of the highest motorable roads in the world.',
    shortDescription: 'India\'s cold desert with ancient monasteries and otherworldly landscapes.',
    price: 18999,
    duration: '7N/8D',
    difficulty: 'Moderate-Difficult',
    altitude: '4,500m',
    bestTime: 'June – September',
    distance: '450 km',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1571401835393-8c5f35328320?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=800&fit=crop'
    ],
    included: ['Hotel/camp stay', 'All meals', 'AC vehicle', 'Guide', 'Permits', 'Oxygen cylinder'],
    excluded: ['Flights/train', 'Personal expenses', 'Insurance', 'Tips', 'Medical expenses'],
    itinerary: [
      { day: 1, title: 'Manali to Sissu', description: 'Drive through Atal Tunnel to Sissu. Explore waterfall.' },
      { day: 2, title: 'Sissu to Kaza', description: 'Drive through Kunzum Pass to Kaza, the capital of Spiti.' },
      { day: 3, title: 'Kaza – Key & Kibber', description: 'Visit Key Monastery, Kibber village, and Chicham bridge.' },
      { day: 4, title: 'Kaza – Langza & Hikkim', description: 'Visit highest post office at Hikkim, Langza Buddha statue.' },
      { day: 5, title: 'Kaza – Dhankar & Tabo', description: 'Dhankar Monastery, Tabo Monastery, and Dhankar Lake.' },
      { day: 6, title: 'Chitkul', description: 'Drive to Chitkul, last village on Indo-Tibet border.' },
      { day: 7, title: 'Kalpa', description: 'Visit Kalpa village, Suicide Point, apple orchards.' },
      { day: 8, title: 'Return to Manali', description: 'Drive back through Narkanda to Manali.' }
    ],
    faqs: [
      { q: 'Is Spiti safe for road trips?', a: 'Yes, but roads are challenging. Experienced driver recommended.' },
      { q: 'Do I need permits?', a: 'No special permits needed for Indian nationals for most areas.' },
      { q: 'Is there oxygen availability?', a: 'Basic medical facilities exist. We carry backup oxygen cylinders.' }
    ]
  }
]

export const treks = [
  {
    id: 1,
    slug: 'triund-trek',
    name: 'Triund Trek',
    location: 'Dharamshala, Himachal Pradesh',
    description: 'The crown jewel of Dharamshala treks, Triund offers a perfect blend of easy trekking with reward of stunning panoramic views of the Dhauladhar range and Kangra Valley.',
    altitude: '2,828m',
    distance: '9 km',
    difficulty: 'Easy-Moderate',
    bestTime: 'March – December',
    price: 5499,
    duration: '2N/3D',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    highlights: ['Stunning sunrise over Dhauladhar', 'Night camping under stars', 'Snow line café visit', 'Rhododendron forests']
  },
  {
    id: 2,
    slug: 'kareri-lake-trek',
    name: 'Kareri Lake Trek',
    location: 'Kangra, Himachal Pradesh',
    description: 'A hidden gem trek leading to a pristine glacial lake at 2,950m. The turquoise waters reflecting Dhauladhar peaks make this one of Himachal\'s most photogenic treks.',
    altitude: '2,950m',
    distance: '14 km',
    difficulty: 'Easy-Moderate',
    bestTime: 'March – November',
    price: 6999,
    duration: '2N/3D',
    image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&h=600&fit=crop',
    highlights: ['Turquoise glacial lake', 'Camp by the lake', 'Dense oak forests', 'Dhauladhar base views']
  },
  {
    id: 3,
    slug: 'kheerganga-trek',
    name: 'Kheerganga Trek',
    location: 'Kullu, Himachal Pradesh',
    description: 'The legendary trek through Parvati Valley to natural hot springs at 3,050m. Believed to be where Lord Shiva meditated for 3000 years, the reward is a natural hot water pool.',
    altitude: '3,050m',
    distance: '12 km',
    difficulty: 'Moderate',
    bestTime: 'March – November',
    price: 5999,
    duration: '2N/3D',
    image: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&h=600&fit=crop',
    highlights: ['Natural hot springs', 'Parvati Valley views', 'Shiva temple', 'Stunning waterfalls']
  },
  {
    id: 4,
    slug: 'pin-bhaba-pass',
    name: 'Pin Bhaba Pass Trek',
    location: 'Kinnaur-Spiti, Himachal Pradesh',
    description: 'A high-altitude pass trek connecting the lush green Bhaba Valley to the stark, moon-like landscapes of Spiti. A dramatic transition from forests to desert.',
    altitude: '4,900m',
    distance: '62 km',
    difficulty: 'Difficult',
    bestTime: 'June – September',
    price: 15999,
    duration: '6N/7D',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop',
    highlights: ['4,900m pass crossing', 'Biome transition', 'Campsite at 4,200m', 'Pin Valley views']
  },
  {
    id: 5,
    slug: 'hampta-pass',
    name: 'Hampta Pass Trek',
    location: 'Kullu-Lahaul, Himachal Pradesh',
    description: 'The most dramatic pass trek in Himachal, crossing from green Kullu Valley to the barren Lahaul Valley. The contrast is breathtaking and unmatched.',
    altitude: '4,270m',
    distance: '35 km',
    difficulty: 'Moderate',
    bestTime: 'June – September',
    price: 12999,
    duration: '4N/5D',
    image: 'https://images.unsplash.com/photo-1595814294526-84287e1bde23?w=800&h=600&fit=crop',
    highlights: ['Kullu to Lahaul crossing', 'Shea Goru camp', 'Chandratal Lake side trip', 'Dramatic landscape shift']
  },
  {
    id: 6,
    slug: 'chopta-tungnath',
    name: 'Chopta Tungnath Trek',
    location: 'Rudraprayag, Uttarakhand',
    description: 'Trek to the highest Shiva temple in the world at Tungnath (3,680m) with the option to continue to Chandrashila peak (4,000m) for 360° Himalayan views.',
    altitude: '4,000m',
    distance: '5 km',
    difficulty: 'Easy-Moderate',
    bestTime: 'Year Round',
    price: 7499,
    duration: '2N/3D',
    image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&h=600&fit=crop',
    highlights: ['World\'s highest Shiva temple', '360° Himalayan views', 'Rhododendron forests', 'Snow trek in winter']
  }
]

export const packages = [
  {
    id: 1,
    name: 'Himachal Explorer',
    duration: '6N/7D',
    destinations: ['Manali', 'Kasol', 'Triund'],
    price: 16999,
    description: 'The ultimate Himachal Pradesh experience covering three iconic destinations.',
    image: 'https://images.unsplash.com/photo-1571401835393-8c5f35328320?w=800&h=600&fit=crop'
  },
  {
    id: 2,
    name: 'Spiti Valley Road Trip',
    duration: '7N/8D',
    destinations: ['Manali', 'Kaza', 'Chitkul', 'Kalpa'],
    price: 22999,
    description: 'An epic road trip through the cold desert landscapes of Spiti.',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop'
  },
  {
    id: 3,
    name: 'Parvati Valley Retreat',
    duration: '4N/5D',
    destinations: ['Kasol', 'Kheerganga', 'Tosh'],
    price: 12999,
    description: 'Immerse yourself in the mystical Parvati Valley with treks and hot springs.',
    image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&h=600&fit=crop'
  },
  {
    id: 4,
    name: 'Uttarakhand Spiritual Trek',
    duration: '5N/6D',
    destinations: ['Chopta', 'Tungnath', 'Deoriatal'],
    price: 14999,
    description: 'A spiritual journey to the world\'s highest Shiva temple with stunning trekking.',
    image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&h=600&fit=crop'
  }
]

export const testimonials = [
  {
    id: 1,
    name: 'Rohit Sharma',
    avatar: 'RS',
    location: 'Delhi',
    rating: 5,
    review: 'ASTRAROAM made our Triund trek absolutely magical. The guide was incredible, the camping setup was premium, and the sunset views were breathtaking. Will definitely book again!',
    trek: 'Triund Trek'
  },
  {
    id: 2,
    name: 'Priya Patel',
    avatar: 'PP',
    location: 'Mumbai',
    rating: 5,
    review: 'Our Spiti Valley road trip was a dream come true. Everything from the hotels to the itinerary was perfectly planned. The team handled the challenging roads like professionals.',
    trek: 'Spiti Valley'
  },
  {
    id: 3,
    name: 'Ankit Verma',
    avatar: 'AV',
    location: 'Bangalore',
    rating: 5,
    review: 'The Kheerganga trek with ASTRAROAM was my first trek experience. The hot springs at the top were heavenly. Professional service and amazing value for money.',
    trek: 'Kheerganga Trek'
  },
  {
    id: 4,
    name: 'Sneha Gupta',
    avatar: 'SG',
    location: 'Pune',
    rating: 4,
    review: 'Beautiful Manali trip organized perfectly. The Solang Valley adventure was the highlight. Minor hiccups but the team was very responsive. Highly recommended.',
    trek: 'Manali Trip'
  },
  {
    id: 5,
    name: 'Vikash Kumar',
    avatar: 'VK',
    location: 'Kolkata',
    rating: 5,
    review: 'Kareri Lake trek was surreal. The campsite by the lake with mountain views is something I\'ll never forget. ASTRAROAM staff was friendly and knowledgeable.',
    trek: 'Kareri Lake Trek'
  },
  {
    id: 6,
    name: 'Meera Joshi',
    avatar: 'MJ',
    location: 'Jaipur',
    rating: 5,
    review: 'Third time booking with ASTRAROAM. Consistent quality and amazing experiences. The Chopta Tungnath winter trek was absolutely spectacular!',
    trek: 'Chopta Tungnath'
  }
]
