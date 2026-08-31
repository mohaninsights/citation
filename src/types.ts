export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  imageUrl?: string;
  category?: string;
  badge?: string;
  highlightTags?: string[];
  longDescription?: string;
  benefits?: string[];
  remediesOffered?: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  quote: string;
  avatarUrl: string;
  serviceCategory?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface DelhiArea {
  name: string;
  pincodes?: string;
  description?: string;
}

export interface ArticleItem {
  id: string;
  title: string;
  category: string;
  readTime: string;
  imageUrl: string;
  snippet: string;
  content: string[];
}

export interface BookingFormData {
  fullName: string;
  mobileNumber: string;
  emailAddress: string;
  selectedService: string;
  preferredDate?: string;
  preferredTime?: string;
  birthDate?: string;
  birthTime?: string;
  birthPlace?: string;
  notes?: string;
}
