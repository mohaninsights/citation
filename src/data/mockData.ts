import { ServiceItem, TestimonialItem, FaqItem, DelhiArea, ArticleItem } from '../types';

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'career-guidance',
    title: 'Career Guidance',
    description: 'Find the right career path and achieve success.',
    iconName: 'Briefcase',
    longDescription: 'Stuck in your career or facing uncertainty about job changes, promotions, or foreign employment? Get deep insights from your 10th house (Karma Bhava) and D10 Dashamsha chart for tailored career progression.',
    benefits: [
      'Identification of ideal career fields based on birth chart',
      'Timings for promotions, appraisals, and job changes',
      'Guidance for competitive exams and government jobs',
      'Remedies to overcome workplace toxicity and stagnancy'
    ],
    remediesOffered: ['Specific Gemstone suggestions', 'Mantra Upasana for Sun and Saturn', 'Customized Yantra energization']
  },
  {
    id: 'marriage-solutions',
    title: 'Marriage Solutions',
    description: 'Get solutions for marriage delays & harmony.',
    iconName: 'HeartHandshake',
    longDescription: 'Comprehensive Kundli Milan (Ashtakoot Guna Milan) & analysis of 7th house, Venus & Jupiter to resolve marriage delays, Manglik Dosha, Nadi Dosha, and post-marital harmony issues.',
    benefits: [
      'Kundli Milan with in-depth 36 Guna matching',
      'Effective Mangal Dosha & Nadi Dosha neutralization',
      'Remedies for delay in finding an ideal life partner',
      'Restoring peace, trust, and intimacy in married life'
    ],
    remediesOffered: ['Kumbh Vivah guidance if applicable', 'Gauri Shankar Rudraksha recommendation', 'Specific fastings & Shukra puja']
  },
  {
    id: 'love-relationship',
    title: 'Love & Relationship',
    description: 'Improve relationships & resolve love problems.',
    iconName: 'Heart',
    longDescription: 'Resolve misunderstandings, communication gaps, and familial objections in love relationships with positive Vedic astrological remedies and emotional alignment.',
    benefits: [
      'Analysis of 5th house of love and emotional connection',
      'Solutions for parental approval in inter-caste marriages',
      'Healing breakups and attracting soul connection',
      'Strengthening bond and mutual respect'
    ],
    remediesOffered: ['Venus strengthening rituals', 'Vashikaran-free sattvic Vedic mantras', 'Rose Quartz & Emerald balancing']
  },
  {
    id: 'business-astrology',
    title: 'Business Astrology',
    description: 'Grow your business with the right astrological guidance.',
    iconName: 'TrendingUp',
    longDescription: 'Leverage planetary transits of Mercury, Jupiter, and Saturn for auspicious business inaugurations, partnership compatibility, cash-flow expansion, and mitigating losses.',
    benefits: [
      'Auspicious Muhurat for new ventures & office openings',
      'Partnership compatibility analysis (7th & 11th houses)',
      'Forecasting high-profit and high-risk periods',
      'Remedies to recover bad debts and remove business blockages'
    ],
    remediesOffered: ['Shree Yantra installation guide', 'Kuber Puja remedies', 'Business name numerology alignment']
  },
  {
    id: 'health-predictions',
    title: 'Health Predictions',
    description: 'Know about your health & find preventive solutions.',
    iconName: 'Activity',
    longDescription: 'Medical Astrology (Ayur-Jyotish) analysis of the 6th, 8th, and 12th houses to identify underlying elemental imbalances (Vata, Pitta, Kapha) and timely preventive remedies.',
    benefits: [
      'Early detection of chronic ailments and weakness zones',
      'Mental peace, anxiety relief & sound sleep guidance',
      'Remedies for surgery avoidance if planetary indications allow',
      'Vedic lifestyle alignment with planetary periods'
    ],
    remediesOffered: ['Maha Mrityunjaya Jaap recommendations', 'Ayurvedic gemstone balancing', 'Chakra healing consultation']
  },
  {
    id: 'finance-wealth',
    title: 'Finance & Wealth',
    description: 'Attract wealth, prosperity & financial stability.',
    iconName: 'IndianRupee',
    longDescription: 'Unlock the wealth potential in your Dhan Bhava (2nd house) and Labha Bhava (11th house). Identify Lakshmi Yogas, remove Kemdrum Dosha, and attract sustained financial growth.',
    benefits: [
      'Strategies for safe investments in stocks, property & gold',
      'Remedies to overcome sudden losses and accumulated debts',
      'Identifying sources of ancestral and passive wealth',
      'Auspicious timings for major financial transactions'
    ],
    remediesOffered: ['Kanakdhara Stotram guidance', 'Yellow Sapphire / Pukhraj recommendation', 'Vedic Lakshmi Kuber puja protocol']
  },
  {
    id: 'vastu-consultation',
    title: 'Vastu Consultation',
    description: 'Bring positivity & balance to your home or office.',
    iconName: 'Home',
    longDescription: 'Non-demolition Vastu Shastra remedies for residential apartments, villas, commercial showrooms, and corporate spaces in Delhi NCR to channel positive cosmic energy (Prana).',
    benefits: [
      'Correction of main entrance, kitchen, and master bedroom directions',
      'Rectifying Brahmasthan and Northeast (Ishanya) defects without breaking walls',
      'Factory and showroom energy enhancement for footfall',
      'Geopathic stress detection and elemental balancing'
    ],
    remediesOffered: ['Copper pyramids & energy helixes', 'Directional mirrors & colors', 'Vastu Yantras for 16 directional zones']
  },
  {
    id: 'numerology',
    title: 'Numerology',
    description: 'Discover your numbers & unlock your potential.',
    iconName: 'Grid',
    longDescription: 'Harness the cosmic vibrations of your Mulank (Driver), Bhagyank (Conductor), and Name Number (Namank) to attract luck, fame, and harmony.',
    benefits: [
      'Name spelling correction for career and marriage success',
      'Lucky mobile numbers, vehicle numbers, and house numbers',
      'Lucky colors, favorable dates, and friendly gemstones',
      'Brand and company name numerological optimization'
    ],
    remediesOffered: ['Personalized Chaldean numerology chart', 'Signature analysis & correction', 'Annual numerology forecast']
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: '1. Book',
    subtitle: 'Your Slot',
    icon: 'Calendar',
    description: 'Select your preferred date, time, and mode of consultation (Phone, Video Call, or In-Person).'
  },
  {
    step: 2,
    title: '2. Share',
    subtitle: 'Birth Details',
    icon: 'FileText',
    description: 'Provide your exact Date of Birth, Time of Birth, and Place of Birth (Delhi or anywhere globally).'
  },
  {
    step: 3,
    title: '3. Horoscope',
    subtitle: 'Analysis',
    icon: 'Compass',
    description: 'Acharya Ji performs detailed manual calculation of D1 Lagna, D9 Navamsha, and planetary Dasha.'
  },
  {
    step: 4,
    title: '4. Consultation',
    subtitle: '(Call / Video)',
    icon: 'PhoneCall',
    description: 'Engage in a deep 1-on-1 confidential session with clear answers to all your life questions.'
  },
  {
    step: 5,
    title: '5. Remedies',
    subtitle: '& Guidance',
    icon: 'Sparkles',
    description: 'Receive personalized, practical, non-fear based Vedic remedies and clear action items.'
  },
  {
    step: 6,
    title: '6. Follow Up',
    subtitle: 'Support',
    icon: 'Headphones',
    description: 'Enjoy complimentary follow-up support to track improvements and adjust remedies.'
  }
];

export const TESTIMONIALS_LIST: TestimonialItem[] = [
  {
    id: 't-1',
    name: 'Rahul Sharma',
    location: 'Delhi',
    rating: 5,
    quote: 'Acharya Ji guided me at the right time. My career and financial situation improved tremendously.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    serviceCategory: 'Career Guidance'
  },
  {
    id: 't-2',
    name: 'Priya Mehta',
    location: 'Delhi',
    rating: 5,
    quote: 'His predictions are accurate and remedies very effective. Highly recommended!',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    serviceCategory: 'Marriage Solutions'
  },
  {
    id: 't-3',
    name: 'Neha Verma',
    location: 'Delhi',
    rating: 5,
    quote: 'We got the best solution for our marriage delay. Thank you Acharya Ji!',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    serviceCategory: 'Relationship'
  },
  {
    id: 't-4',
    name: 'Amit Kapoor',
    location: 'Delhi',
    rating: 5,
    quote: 'Business growth after consultation has been amazing. Grateful!',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    serviceCategory: 'Business Astrology'
  },
  {
    id: 't-5',
    name: 'Vikram Malhotra',
    location: 'South Delhi',
    rating: 5,
    quote: 'Acharya Ganesh Ji\'s Vastu guidance for our South Extension home cleared months of stress without breaking any walls.',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    serviceCategory: 'Vastu Consultation'
  },
  {
    id: 't-6',
    name: 'Dr. Sunita Rao',
    location: 'Rohini, Delhi',
    rating: 5,
    quote: 'Extremely polite, logical, and scientific approach to Vedic astrology. The health predictions were astonishingly precise.',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    serviceCategory: 'Health Predictions'
  }
];

export const FAQ_LIST: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Is online consultation available for Delhi residents?',
    answer: 'Yes! While in-person consultations are conducted at our Delhi center by prior appointment, we also offer high-definition video calls (Google Meet/WhatsApp) and phone consultations with the exact same precision and personalized remedy report.'
  },
  {
    id: 'faq-2',
    question: 'What information do I need to provide?',
    answer: 'To prepare an accurate Vedic horoscope (Kundli), please provide your Date of Birth, Exact Time of Birth (with AM/PM), and Place of Birth (City/State). If exact birth time is unavailable, Acharya Ji can perform Prashna Kundli (Horary Astrology) or Palmistry.'
  },
  {
    id: 'faq-3',
    question: 'How long does a consultation take?',
    answer: 'Standard comprehensive consultations take 30 to 45 minutes of detailed one-on-one discussion. There is ample time to ask all your personal, professional, and family questions without rushing.'
  },
  {
    id: 'faq-4',
    question: 'Will my information be kept confidential?',
    answer: 'Absolutely 100%. We strictly maintain complete client confidentiality and privacy. Your birth details, personal concerns, and consultation recordings are never shared with any third party.'
  },
  {
    id: 'faq-5',
    question: 'Can you predict future accurately?',
    answer: 'Vedic Astrology is an empirical cosmic science practiced for over 5,000 years. Acharya Ganesh Ji combines multi-chart verification (Lagna, Moon, Navamsha, and Vimshottari Dasha transits) to deliver predictions with a proven 98% accuracy track record.'
  }
];

export const DELHI_AREAS: DelhiArea[] = [
  { name: 'South Delhi', description: 'Greater Kailash, Saket, Hauz Khas, Vasant Kunj, Defense Colony' },
  { name: 'Rohini', description: 'Sectors 1-30, Pitampura, Prashant Vihar, Mangolpuri' },
  { name: 'North Delhi', description: 'Civil Lines, Model Town, Kamla Nagar, Shalimar Bagh' },
  { name: 'Dwarka', description: 'Sectors 1-24, Uttam Nagar, Janakpuri, Palam' },
  { name: 'West Delhi', description: 'Rajouri Garden, Punjabi Bagh, Paschim Vihar, Patel Nagar' },
  { name: 'Noida', description: 'Sectors 15 to 150, Noida Expressway, Greater Noida' },
  { name: 'East Delhi', description: 'Mayur Vihar, Laxmi Nagar, Preet Vihar, Anand Vihar' },
  { name: 'Gurugram', description: 'DLF Phases 1-5, Golf Course Road, Cyber City, Sohna Road' }
];

export const ARTICLES_LIST: ArticleItem[] = [
  {
    id: 'art-1',
    title: 'Career Astrology: Choose the Right Path',
    category: 'Career & Wealth',
    readTime: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80',
    snippet: 'Discover how the 10th house in Vedic astrology reveals your true calling, business acumen, and best timing for promotions.',
    content: [
      'In Vedic Astrology, the 10th House—known as the Karma Bhava—serves as the primary indicator of your vocation, public stature, and professional achievements.',
      'By analyzing planetary placements like the Sun (authority), Mercury (business and analytics), Mars (engineering and executive power), and Saturn (tenacity and discipline), an astrologer can identify the exact sector where you will thrive.',
      'Understanding your current Mahadasha and Antardasha cycles enables you to time critical career moves, job transitions, and overseas opportunities with supreme confidence.'
    ]
  },
  {
    id: 'art-2',
    title: 'Marriage Astrology: Find Your Perfect Match',
    category: 'Marriage & Matchmaking',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&auto=format&fit=crop&q=80',
    snippet: 'Explore the 36 Guna Milan system, Manglik Dosha facts vs myths, and how Vedic astrology ensures lasting marital harmony.',
    content: [
      'Kundli Matching is not just about counting matching points out of 36; it involves a deep psychological and emotional compatibility study through the Navamsha (D9) chart.',
      'Many people live in unnecessary fear of Manglik Dosha. In authentic Vedic treatises, over 70% of Manglik doshas have natural cancellations depending on placement and the partner’s chart.',
      'Acharya Ganesh provides clear, practical remedies to overcome delayed marriage and foster understanding between couples.'
    ]
  },
  {
    id: 'art-3',
    title: 'How Vastu Can Bring Prosperity in Life',
    category: 'Vastu Shastra',
    readTime: '3 min read',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=80',
    snippet: 'Learn simple, non-structural Vastu adjustments for your Delhi home and office to unblock positive energy and financial abundance.',
    content: [
      'Vastu Shastra bridges the five elemental forces—Earth, Water, Fire, Air, and Space—with directional magnetic grids of your living environment.',
      'Ensuring the North-East zone (Ishanya) is kept clean, light, and water-aligned brings supreme mental clarity and spiritual blessing.',
      'Placing financial lockers and cash registers in the North (Kuber zone) helps eliminate unwanted expenditure and promotes wealth retention without major architectural remodeling.'
    ]
  },
  {
    id: 'art-4',
    title: 'Love Problems & Astrological Solutions',
    category: 'Relationship Guidance',
    readTime: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&auto=format&fit=crop&q=80',
    snippet: 'Overcome misunderstandings, parental objections, and emotional distances using positive Vedic astrological principles.',
    content: [
      'Love relationships are governed by the 5th House of romance, Venus (planet of affection), and the Moon (emotional state).',
      'When affliction by Rahu, Ketu, or retrograde planets occurs, communication breaks down even between soulmates.',
      'Through non-manipulative, sattvic Vedic mantras, gemological balance, and planetary peace rituals, harmony and understanding can be restored naturally.'
    ]
  }
];
