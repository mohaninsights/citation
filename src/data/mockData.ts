import { ServiceItem, TestimonialItem, FaqItem, DelhiArea, ArticleItem } from '../types';
import careerGuidanceImg from '../assets/images/regenerated_image_1788178301036.webp';
import marriageSolutionsImg from '../assets/images/regenerated_image_1788180058561.webp';
import healthPredictionsImg from '../assets/images/regenerated_image_1788179027010.webp';
import legalAstrologyImg from '../assets/images/regenerated_image_1788325376258.webp';
import muhurtaImg from '../assets/images/regenerated_image_1788325549625.webp';
import wealthAstrologyImg from '../assets/images/regenerated_image_1788325991964.webp';
import vastuConsultationImg from '../assets/images/regenerated_image_1788326310122.webp';
import loveAstrologyImg from '../assets/images/regenerated_image_1788327796760.webp';
import astrologyGuidanceImg from '../assets/images/regenerated_image_1788327798134.webp';
import divorceAstrologyImg from '../assets/images/regenerated_image_1788179337214.webp';
import kundliAnalysisImg from '../assets/images/regenerated_image_1788180294455.webp';
import propertyAstrologyImg from '../assets/images/regenerated_image_1788175921390.webp';

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'career-astrology',
    title: 'Career Astrology',
    description: 'Find the right career path, job timing & promotions.',
    iconName: 'Briefcase',
    imageUrl: careerGuidanceImg,
    category: 'Career & Wealth',
    badge: 'High Demand',
    highlightTags: ['10th House Karma', 'Job & Promotion', 'Govt Exam'],
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
    id: 'match-making',
    title: 'Match Making',
    description: 'Kundli Milan, 36 Guna matching & marriage compatibility.',
    iconName: 'HeartHandshake',
    imageUrl: marriageSolutionsImg,
    category: 'Love & Family',
    badge: '98% Success',
    highlightTags: ['36 Guna Milan', 'Mangal Dosha', 'Compatibility'],
    longDescription: 'Comprehensive Kundli Milan (Ashtakoot Guna Milan) & analysis of 7th house, Venus & Jupiter to ensure lasting compatibility, emotional harmony, Manglik Dosha resolution, and prosperous married life.',
    benefits: [
      'Kundli Milan with in-depth 36 Guna matching and Bhakoot/Nadi analysis',
      'Effective Mangal Dosha & Nadi Dosha neutralization remedies',
      'Evaluating emotional, financial, and family compatibility of partners',
      'Restoring peace, trust, and mutual understanding in married life'
    ],
    remediesOffered: ['Kumbh Vivah guidance if applicable', 'Gauri Shankar Rudraksha recommendation', 'Specific fastings & Shukra puja']
  },
  {
    id: 'litigation-astrology',
    title: 'Litigation Astrology',
    description: 'Court cases, property disputes, litigation timing & dispute settlements.',
    iconName: 'Scale',
    imageUrl: legalAstrologyImg,
    category: 'Legal & Disputes',
    badge: 'High Precision',
    highlightTags: ['6th House Shatru/Rin', 'Court Victory', 'Dispute Settlement'],
    longDescription: 'Comprehensive astrological analysis of the 6th House (litigation & disputes), 8th House (sudden obstacles), and 12th House (legal outcomes). Gain precise timing for court hearings, out-of-court settlements, property conflicts, and planetary remedies for legal relief.',
    benefits: [
      'Analysis of 6th house (Shatru Bhava) and planetary Dasha for litigation outcomes',
      'Timings for favorable court hearings, appeals & settlement negotiations',
      'Remedies for ancestral property disputes & corporate legal conflicts',
      'Neutralizing enemy hostility and false allegations with Vedic remedies'
    ],
    remediesOffered: ['Baglamukhi Anushthan & Jaap guidance', 'Mars & Saturn balancing remedies', 'Sudarshan Chakra Kavach & energized Yantras']
  },
  {
    id: 'muhurta-consultation',
    title: 'Muhurta Consultation',
    description: 'Auspicious timings for marriage, Griha Pravesh, business launch & key milestones.',
    iconName: 'Calendar',
    imageUrl: muhurtaImg,
    category: 'Muhurta & Timing',
    badge: 'Shubh Muhurat',
    highlightTags: ['Griha Pravesh', 'Vivah Muhurat', 'Business Launch'],
    longDescription: 'Unlock the power of cosmic timing with authentic Vedic Shubh Muhurta analysis. Calculate the most auspicious Choghadiya, Nakshatra, Tithi, and Lagna for wedding ceremonies, Griha Pravesh (housewarming), property registration, business inaugurations, and vehicle purchases to maximize success and eliminate obstacles.',
    benefits: [
      'Auspicious Vivah (Wedding) & Sagai (Engagement) Muhurats synchronized with both Kundlis',
      'Griha Pravesh, Bhoomi Pujan & property registration Shubh Muhurats',
      'High-growth inauguration timings for business ventures, startups & major contracts',
      'Avoiding Rahu Kaal, Bhadra, Gandmool, and inauspicious planetary transits'
    ],
    remediesOffered: ['Personalized Shubh Muhurat Time-Window Report', 'Choghadiya & Hora alignment checklist', 'Sankalp & Shubh Puja vidhi guidelines']
  },
  {
    id: 'health-astrology',
    title: 'Health Astrology',
    description: 'Ayur-Jyotish insights for preventive wellness & mental peace.',
    iconName: 'Activity',
    imageUrl: healthPredictionsImg,
    category: 'Wellness & Mind',
    badge: 'Ayur-Jyotish',
    highlightTags: ['6th & 8th House', 'Mental Peace', 'Chakra Balance'],
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
    id: 'wealth-astrology',
    title: 'Wealth Astrology',
    description: 'Unlock Dhan Yogas, clear debts & attract financial prosperity.',
    iconName: 'IndianRupee',
    imageUrl: wealthAstrologyImg,
    category: 'Career & Wealth',
    badge: 'Lakshmi Yoga',
    highlightTags: ['Dhan Bhava', 'Debt Clearance', 'Property Timings'],
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
    description: 'Non-demolition Vastu remedies for positive Prana energy.',
    iconName: 'Home',
    imageUrl: vastuConsultationImg,
    category: 'Space & Energy',
    badge: 'Non-Demolition',
    highlightTags: ['Home & Office', 'Ishanya Zone', 'Energy Helix'],
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
    id: 'love-astrology',
    title: 'Love Astrology',
    description: 'Love relationship guidance, break-up recovery & attraction harmony.',
    iconName: 'Heart',
    imageUrl: loveAstrologyImg,
    category: 'Love & Family',
    badge: 'Relationship',
    highlightTags: ['5th & 7th House', 'Venus Blessing', 'Emotional Sync'],
    longDescription: 'Navigate complex love relationships, misunderstandings, long-distance strain, and attraction dynamics through the 5th House (Romance) and 7th House (Partnership) and planetary blessings of Venus and Moon.',
    benefits: [
      'Deep relationship compatibility and emotional bonding analysis',
      'Remedies to overcome communication gaps and relationship turbulence',
      'Healing after break-ups and guidance for reviving true love',
      'Astrological insights for inter-caste or family-opposed relationship harmony'
    ],
    remediesOffered: ['Radha Krishna Stotram & Shukra remedies', 'Rose Quartz & Emerald balancing guidance', 'Personalized relationship harmony yantra']
  },
  {
    id: 'astrology-guidance',
    title: 'Astrology Guidance',
    description: 'Comprehensive 360° Kundli reading for destiny, life roadmap & clarity.',
    iconName: 'Sparkles',
    imageUrl: astrologyGuidanceImg,
    category: 'Life & Destiny',
    badge: 'Comprehensive',
    highlightTags: ['360° Kundli', 'Life Roadmap', 'Dasha Analysis'],
    longDescription: 'Deep 360-degree Vedic horoscope assessment analyzing your Lagna chart, Moon chart, Navamsha (D9), and current Vimshottari Mahadasha to illuminate your true life purpose, navigate critical transitions, and clear persistent roadblocks.',
    benefits: [
      'Comprehensive 360° Kundli reading covering career, wealth, health & relationships',
      'Accurate timing of favorable & challenging life phases (Vimshottari Dasha)',
      'Guidance for major life decisions, relocations, and spiritual alignment',
      'Customized non-fear based Vedic remedies for holistic peace of mind'
    ],
    remediesOffered: ['Personalized Kundli Dasha Report', 'Energized Rudraksha & Yantra recommendations', 'Daily Vedic Mantra & Ishta Devta Upasana']
  },
  {
    id: 'divorce-astrology',
    title: 'Divorce Astrology',
    description: 'Marital discord resolution, separation timing & mutual reconciliation guidance.',
    iconName: 'HeartCrack',
    imageUrl: divorceAstrologyImg,
    category: 'Love & Family',
    badge: 'High Accuracy',
    highlightTags: ['7th & 8th House', 'Reconciliation', 'Alimony & Settlement'],
    longDescription: 'Facing severe marital turbulence, separation risk, or contested divorce proceedings? Comprehensive Vedic analysis of the 7th house (spouse), 8th house (marital longevity), and 12th house (separation) to explore reconciliation possibilities, minimize emotional trauma, and safeguard your future.',
    benefits: [
      'Accurate analysis of separation indicators vs. temporary planetary affliction',
      'Effective astrological remedies for marital reconciliation and harmony',
      'Favorable timing for legal separation, mutual consent, and alimony settlement',
      'Remedies to overcome negative planetary transits affecting marital peace'
    ],
    remediesOffered: ['Katyayani Mantra & Shukra Shanti Puja for reconciliation', 'Gauri Shankar Rudraksha & planetary gemstone alignment', 'Vedic peace protocols to defuse emotional hostility']
  },
  {
    id: 'kundli-analysis',
    title: 'Kundli Analysis',
    description: 'Detailed birth chart calculation, planetary yogas, Dasha timeline & life roadmap.',
    iconName: 'Compass',
    imageUrl: kundliAnalysisImg,
    category: 'Life & Destiny',
    badge: 'Deep Reading',
    highlightTags: ['D1 Lagna & D9', 'Planetary Yogas', 'Mahadasha Timeline'],
    longDescription: 'In-depth Janam Kundli reading examining your 12 houses, planetary placements, Bhavat Bhavam, Raja Yogas, and Vimshottari Mahadasha cycles to uncover your core strengths, past karma, and upcoming life roadmap.',
    benefits: [
      'Precision analysis of Lagna, Moon sign, and Nakshatra influences',
      'Identification of auspicious Raja Yogas & Dhan Yogas in birth chart',
      'Comprehensive timeline mapping of Mahadasha, Antardasha & transits',
      'Personalized non-fear based Vedic remedies tailored to your planetary chart'
    ],
    remediesOffered: ['Birth chart specific gemstone & metal recommendations', 'Customized Vedic Mantra Japa guidelines for weak benefic planets', 'Vedic Daan (charity) and fasts for malefic planetary pacification']
  },
  {
    id: 'property-astrology',
    title: 'Property Astrology',
    description: 'Land purchase, home ownership timing, real estate investments & dispute relief.',
    iconName: 'Building2',
    imageUrl: propertyAstrologyImg,
    category: 'Space & Wealth',
    badge: 'Bhoomi Yoga',
    highlightTags: ['4th House Bhoomi', 'Real Estate Yogas', 'Home Buying Timing'],
    longDescription: 'Unlock the potential of your 4th house (Sukha & Bhoomi Bhava) and Mars (Karaka of land/property). Discover the most auspicious timing to buy your dream home, invest in commercial real estate, resolve ancestral property disputes, and secure land acquisitions.',
    benefits: [
      'Analysis of 4th House & Mars for home purchase and real estate gains',
      'Accurate timing for booking, registry, and possession of properties',
      'Astrological remedies for delayed construction or property disputes',
      'Evaluating profitability of real estate & agricultural land investments'
    ],
    remediesOffered: ['Mars (Mangal) & Saturn (Shani) propitiation rituals for property gains', 'Bhoomi Pujan & Vastu Yantra energization protocols', 'Kuber & Prithvi Gayatri Mantra guidelines for asset accumulation']
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
    serviceCategory: 'Career Astrology'
  },
  {
    id: 't-2',
    name: 'Priya Mehta',
    location: 'Delhi',
    rating: 5,
    quote: 'His predictions are accurate and remedies very effective. Highly recommended!',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    serviceCategory: 'Match Making'
  },
  {
    id: 't-3',
    name: 'Neha Verma',
    location: 'Delhi',
    rating: 5,
    quote: 'We got the best solution for our relationship and marriage. Thank you Acharya Ji!',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    serviceCategory: 'Love Astrology'
  },
  {
    id: 't-4',
    name: 'Amit Kapoor',
    location: 'Delhi',
    rating: 5,
    quote: 'Found the most auspicious Shubh Muhurat for our new business launch. Truly grateful!',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    serviceCategory: 'Muhurta Consultation'
  },
  {
    id: 't-5',
    name: 'Vikram Malhotra',
    location: 'South Delhi',
    rating: 5,
    quote: 'Hanish Bagga\'s Vastu guidance for our South Extension home cleared months of stress without breaking any walls.',
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
    serviceCategory: 'Health Astrology'
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
    answer: 'Vedic Astrology is an empirical cosmic science practiced for over 5,000 years. Hanish Bagga combines multi-chart verification (Lagna, Moon, Navamsha, and Vimshottari Dasha transits) to deliver predictions with a proven 98% accuracy track record.'
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
      'Hanish Bagga provides clear, practical remedies to overcome delayed marriage and foster understanding between couples.'
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
    title: 'Legal Astrology: Overcoming Court Cases & Disputes',
    category: 'Legal Astrology',
    readTime: '4 min read',
    imageUrl: legalAstrologyImg,
    snippet: 'Understand the role of the 6th and 8th houses in litigations, dispute settlements, and Vedic remedies for justice.',
    content: [
      'In Vedic Astrology, legal conflicts and court litigations are primarily governed by the 6th House (Shatru Bhava) and influenced by Saturn, Mars, and Rahu.',
      'A skilled astrologer analyzes transit cycles to determine the most favorable court hearing dates and periods for out-of-court dispute resolution.',
      'Through authentic Vedic remedies, Maa Baglamukhi Upasana, and planetary pacification, one can protect reputation and achieve fair justice.'
    ]
  }
];
