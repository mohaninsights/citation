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
import kundliAnalysisImg from '../assets/images/regenerated_image_1788352739160.jpg';
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
    answer: 'Yes, video consultations can be made online by Delhi NCR residents. An astrologer in Delhi can interpret your horoscope, astrological periods, concerns and relevant planets and give you customized tips. Online sessions can provide as much intensive analysis, but offer appointments that are more convenient, accessible and time efficient.'
  },
  {
    id: 'faq-2',
    question: 'What are the requirements to provide?',
    answer: 'Note: If you need to consult correctly, you need to provide your full name, date of birth, exact time of birth and the birthplace. It\'s also important to have a short description of the main concern that you want to discuss. These details help the best astrologer in Delhi examine your Janam Kundli properly and thoroughly.'
  },
  {
    id: 'faq-3',
    question: 'How long does the consultation last?',
    answer: 'The time for consultation varies according to the type of service you choose and your questions. There is enough time in most sessions to consider significant planetary aspects, talk about issues that are in your face and discuss positive times and what to do to make them work to your advantage. The exact session time can be verified beforehand with the astrology support team during your booking.'
  },
  {
    id: 'faq-4',
    question: 'Will my information be kept confidential?',
    answer: 'Yes. All personal birth information, family, professional, financial and consultation notes are kept confidential. Sessions held in a confidential and professional manner. Your information is securely used for astrological analysis and guidance in your requested astrological consultation topics, either online or physically.'
  },
  {
    id: 'faq-5',
    question: 'Do you have any idea of what is to come in the future?',
    answer: 'In Astrology many things are considered to provide details on periods and challenges such as planets, Dashas, transits, houses and divisional. Should not be considered a certain event in the future. The responsible astrologer gives you real help, time information and intelligent possibilities in a way that you can make better decisions with confidence.'
  }
];

export const DELHI_AREAS: DelhiArea[] = [
  { name: 'East Delhi', description: 'Mayur Vihar, Laxmi Nagar, Preet Vihar, Anand Vihar, Patparganj, Nirman Vihar, Vivek Vihar' },
  { name: 'West Delhi', description: 'Rajouri Garden, Punjabi Bagh, Janakpuri, Dwarka, Paschim Vihar, Patel Nagar, Tilak Nagar' },
  { name: 'North Delhi', description: 'Civil Lines, Model Town, Kamla Nagar, Rohini, Pitampura, Shalimar Bagh, Ashok Vihar' },
  { name: 'South Delhi', description: 'Greater Kailash, Saket, Hauz Khas, Vasant Kunj, Defense Colony, Lajpat Nagar, Malviya Nagar' }
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
