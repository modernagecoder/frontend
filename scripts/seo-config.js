/**
 * SEO Configuration for Modern Age Coders
 * Central configuration for all SEO-related settings
 */

const SEO_CONFIG = {
  // Domain Configuration
  domain: 'https://learn.modernagecoders.com',
  siteName: 'Modern Age Coders',
  
  // Default Meta Tags
  defaultTitle: 'Modern Age Coders - Learn Coding & Math for All Ages',
  defaultDescription: 'Professional coding and mathematics education platform for kids, teens, college students, and working professionals. Master programming skills at any age with expert instructors and hands-on projects.',
  defaultKeywords: [
    'coding education',
    'programming courses',
    'math learning',
    'web development',
    'software engineering',
    'online coding classes',
    'STEM education',
    'learn programming'
  ],
  defaultImage: '/images/og-default.jpg',
  
  // Social Media
  twitterHandle: '@modernagecoders',
  facebookAppId: '', // Add if available
  
  // Organization Information
  organization: {
    name: 'Modern Age Coders',
    legalName: 'Modern Age Coders Education',
    logo: '/images/logo.png',
    foundingDate: '2020',
    description: 'Innovative education platform teaching coding and mathematics to students of all ages',
    
    // Contact Information
    email: 'contact@modernagecoders.com',
    phone: '+919123366161',
    
    // Address (if available)
    address: {
      streetAddress: '',
      addressLocality: '',
      addressRegion: '',
      postalCode: '',
      addressCountry: 'IN'
    },
    
    // Social Media Profiles
    socialProfiles: [
      'https://facebook.com/modernagecoders',
      'https://twitter.com/modernagecoders',
      'https://linkedin.com/company/modernagecoders',
      'https://instagram.com/modernagecoders',
      'https://youtube.com/@modernagecoders'
    ]
  },
  
  // Image Requirements
  imageRequirements: {
    ogImage: {
      width: 1200,
      height: 630,
      format: 'jpg, png'
    },
    twitterImage: {
      width: 1200,
      height: 600,
      format: 'jpg, png'
    }
  },
  
  // Meta Tag Length Limits
  limits: {
    titleMin: 30,
    titleMax: 60,
    descriptionMin: 120,
    descriptionMax: 160,
    keywordsMax: 10
  }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SEO_CONFIG;
}
