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
  },
  
  // Page-Specific SEO Configurations
  pages: {
    home: {
      title: 'Modern Age Coders - Learn Coding & Math for All Ages',
      description: 'Professional coding and mathematics education for all ages. Expert instructors, hands-on projects, and personalized learning. Start your coding journey today!',
      keywords: ['coding education', 'programming courses', 'math learning', 'web development', 'software engineering', 'online coding classes', 'STEM education', 'AI for kids', 'app development'],
      ogImage: '/images/og-default.jpg',
      ogType: 'website',
      schema: ['Organization', 'WebSite', 'EducationalOrganization']
    },
    about: {
      title: 'About Modern Age Coders | Expert Coding Education',
      description: 'Innovative coding & math education for all ages. 10,000+ students, 50+ expert instructors, project-based learning. Discover our story and mission today!',
      keywords: ['about modern age coders', 'coding education', 'programming school', 'STEM education', 'technology training', 'expert instructors', 'personalized learning'],
      ogImage: '/images/og-about.jpg',
      ogType: 'website',
      schema: ['AboutPage', 'Organization', 'BreadcrumbList']
    },
    courses: {
      title: 'Courses - Modern Age Coders | Learn Coding & Mathematics',
      description: 'Explore 30+ coding and math courses for all ages. Python, Web Development, AI, Data Science, and more. Expert instructors, hands-on projects. Enroll today!',
      keywords: ['online coding courses', 'programming tutorials', 'mathematics courses', 'web development', 'AI courses', 'learn python', 'data science courses', 'app development'],
      ogImage: '/images/og-courses.jpg',
      ogType: 'website',
      schema: ['ItemList', 'BreadcrumbList']
    },
    blog: {
      title: 'Blog - Modern Age Coders | Coding Tips & Tutorials',
      description: 'Expert coding tutorials, programming tips, and tech education insights. Learn from industry professionals and stay updated with latest trends.',
      keywords: ['coding blog', 'programming tutorials', 'tech education', 'coding tips', 'web development blog', 'learn programming'],
      ogImage: '/images/og-blog.jpg',
      ogType: 'website',
      schema: ['ItemList', 'BreadcrumbList']
    },
    contact: {
      title: 'Contact Us - Modern Age Coders | Get in Touch',
      description: 'Have questions about our coding courses? Contact Modern Age Coders today. We\'re here to help you start your programming journey.',
      keywords: ['contact modern age coders', 'coding course inquiry', 'programming school contact', 'get in touch'],
      ogImage: '/images/og-default.jpg',
      ogType: 'website',
      schema: ['ContactPage', 'Organization']
    },
    pricing: {
      title: 'Pricing - Modern Age Coders | Course Fees & Plans',
      description: 'Affordable coding course pricing for all ages. Flexible payment plans, group classes, and personal mentorship options. View our transparent pricing today.',
      keywords: ['coding course pricing', 'programming course fees', 'online coding classes cost', 'affordable coding education'],
      ogImage: '/images/og-default.jpg',
      ogType: 'website',
      schema: ['WebPage', 'Offer']
    },
    terms: {
      title: 'Terms of Service - Modern Age Coders',
      description: 'Read our terms of service and understand the guidelines for using Modern Age Coders educational platform.',
      keywords: ['terms of service', 'user agreement', 'terms and conditions'],
      ogImage: '/images/og-default.jpg',
      ogType: 'website',
      schema: ['WebPage'],
      noindex: false
    },
    privacy: {
      title: 'Privacy Policy - Modern Age Coders',
      description: 'Learn how Modern Age Coders protects your privacy and handles your personal information. Read our comprehensive privacy policy.',
      keywords: ['privacy policy', 'data protection', 'personal information'],
      ogImage: '/images/og-default.jpg',
      ogType: 'website',
      schema: ['WebPage'],
      noindex: false
    },
    notFound: {
      title: '404 - Page Not Found | Modern Age Coders',
      description: 'The page you\'re looking for doesn\'t exist. Return to Modern Age Coders homepage to explore our coding courses.',
      keywords: ['404', 'page not found'],
      ogImage: '/images/og-default.jpg',
      ogType: 'website',
      schema: [],
      noindex: true
    }
  },
  
  // Schema Templates
  schemaTemplates: {
    organization: {
      '@context': 'https://schema.org',
      '@type': 'Organization'
    },
    website: {
      '@context': 'https://schema.org',
      '@type': 'WebSite'
    },
    educationalOrganization: {
      '@context': 'https://schema.org',
      '@type': 'EducationalOrganization'
    },
    course: {
      '@context': 'https://schema.org',
      '@type': 'Course'
    },
    blogPosting: {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting'
    },
    breadcrumbList: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList'
    },
    aboutPage: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage'
    },
    contactPage: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage'
    },
    itemList: {
      '@context': 'https://schema.org',
      '@type': 'ItemList'
    },
    faqPage: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage'
    }
  }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SEO_CONFIG;
}
