/**
 * SEO Utility Functions
 * Helper functions for generating and validating SEO meta tags
 */

// Import configuration (if using Node.js)
const SEO_CONFIG = require('./seo-config.js');

/**
 * Validate and truncate title to meet SEO requirements
 * @param {string} title - The page title
 * @param {number} maxLength - Maximum length (default: 60)
 * @returns {string} - Validated title
 */
function validateTitle(title, maxLength = 60) {
  if (!title || title.trim() === '') {
    console.warn('[SEO] Empty title provided, using default');
    return SEO_CONFIG.defaultTitle;
  }

  const trimmedTitle = title.trim();

  if (trimmedTitle.length > maxLength) {
    console.warn(`[SEO] Title too long: ${trimmedTitle.length} characters (max: ${maxLength})`);
    return trimmedTitle.substring(0, maxLength - 3) + '...';
  }

  if (trimmedTitle.length < 30) {
    console.warn(`[SEO] Title too short: ${trimmedTitle.length} characters (recommended min: 30)`);
  }

  return trimmedTitle;
}

/**
 * Validate and truncate description to meet SEO requirements
 * @param {string} description - The page description
 * @param {number} maxLength - Maximum length (default: 160)
 * @returns {string} - Validated description
 */
function validateDescription(description, maxLength = 160) {
  if (!description || description.trim() === '') {
    console.warn('[SEO] Empty description provided, using default');
    return SEO_CONFIG.defaultDescription;
  }

  const trimmedDesc = description.trim();

  if (trimmedDesc.length > maxLength) {
    console.warn(`[SEO] Description too long: ${trimmedDesc.length} characters (max: ${maxLength})`);
    return trimmedDesc.substring(0, maxLength - 3) + '...';
  }

  if (trimmedDesc.length < 120) {
    console.warn(`[SEO] Description too short: ${trimmedDesc.length} characters (recommended min: 120)`);
  }

  return trimmedDesc;
}

/**
 * Validate image URL and ensure it meets OG image requirements
 * @param {string} imageUrl - The image URL
 * @param {string} type - Image type ('og' or 'twitter')
 * @returns {string} - Validated image URL
 */
function validateImageUrl(imageUrl, type = 'og') {
  if (!imageUrl || imageUrl.trim() === '') {
    console.warn('[SEO] Empty image URL provided, using default');
    return SEO_CONFIG.defaultImage;
  }

  // Ensure absolute URL
  if (!imageUrl.startsWith('http')) {
    imageUrl = SEO_CONFIG.domain + (imageUrl.startsWith('/') ? '' : '/') + imageUrl;
  }

  return imageUrl;
}

/**
 * Generate canonical URL
 * @param {string} path - The page path (e.g., '/courses/python' or '/blog/slug/')
 * @returns {string} - Full canonical URL
 */
function generateCanonicalUrl(path) {
  if (!path) {
    return SEO_CONFIG.domain + '/';
  }

  // Preserve trailing slash if it was provided (important for blog/course URLs)
  // Only normalize if path doesn't end with /
  const hasTrailingSlash = path.endsWith('/');

  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : '/' + path;

  return SEO_CONFIG.domain + normalizedPath;
}

/**
 * Format keywords array to string
 * @param {Array<string>} keywords - Array of keywords
 * @param {number} maxKeywords - Maximum number of keywords
 * @returns {string} - Comma-separated keywords
 */
function formatKeywords(keywords, maxKeywords = 10) {
  if (!Array.isArray(keywords) || keywords.length === 0) {
    return SEO_CONFIG.defaultKeywords.slice(0, maxKeywords).join(', ');
  }

  return keywords
    .slice(0, maxKeywords)
    .map(k => k.trim())
    .filter(k => k.length > 0)
    .join(', ');
}

/**
 * Generate meta tags HTML
 * @param {Object} options - Meta tag options
 * @returns {string} - HTML meta tags
 */
function generateMetaTags(options) {
  const {
    title,
    description,
    keywords,
    canonical,
    ogType = 'website',
    ogImage,
    twitterCard = 'summary_large_image',
    author = 'Modern Age Coders'
  } = options;

  const validatedTitle = validateTitle(title);
  const validatedDescription = validateDescription(description);
  const validatedKeywords = formatKeywords(keywords);
  const canonicalUrl = generateCanonicalUrl(canonical);
  const validatedImage = validateImageUrl(ogImage);

  return `
    <!-- Basic Meta Tags -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${validatedTitle}</title>
    <meta name="description" content="${validatedDescription}">
    <meta name="keywords" content="${validatedKeywords}">
    <meta name="author" content="${author}">
    <link rel="canonical" href="${canonicalUrl}">

    <!-- Open Graph Meta Tags -->
    <meta property="og:type" content="${ogType}">
    <meta property="og:url" content="${canonicalUrl}">
    <meta property="og:title" content="${validatedTitle}">
    <meta property="og:description" content="${validatedDescription}">
    <meta property="og:image" content="${validatedImage}">
    <meta property="og:site_name" content="${SEO_CONFIG.siteName}">

    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="${twitterCard}">
    <meta name="twitter:url" content="${canonicalUrl}">
    <meta name="twitter:title" content="${validatedTitle}">
    <meta name="twitter:description" content="${validatedDescription}">
    <meta name="twitter:image" content="${validatedImage}">
  `.trim();
}

/**
 * Generate Organization schema
 * @returns {Object} - Organization JSON-LD
 */
function generateOrganizationSchema() {
  const org = SEO_CONFIG.organization;

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": org.name,
    "legalName": org.legalName,
    "url": SEO_CONFIG.domain,
    "logo": {
      "@type": "ImageObject",
      "url": SEO_CONFIG.domain + org.logo
    },
    "description": org.description,
    "foundingDate": org.foundingDate,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": org.phone,
      "contactType": "Customer Service",
      "email": org.email,
      "availableLanguage": ["English", "Hindi"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": org.address.addressCountry
    },
    "sameAs": org.socialProfiles
  };
}

/**
 * Generate WebSite schema with search action
 * @returns {Object} - WebSite JSON-LD
 */
function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": SEO_CONFIG.siteName,
    "url": SEO_CONFIG.domain,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": SEO_CONFIG.domain + "/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };
}

/**
 * Generate EducationalOrganization schema
 * @returns {Object} - EducationalOrganization JSON-LD
 */
function generateEducationalOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": SEO_CONFIG.organization.name,
    "description": SEO_CONFIG.organization.description,
    "url": SEO_CONFIG.domain,
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "50+"
    },
    "alumni": {
      "@type": "QuantitativeValue",
      "value": "10000+"
    }
  };
}

/**
 * Generate Course schema
 * @param {Object} courseData - Course data object
 * @returns {Object} - Course JSON-LD
 */
function generateCourseSchema(courseData) {
  const meta = courseData.meta;

  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": meta.title,
    "description": meta.description,
    "provider": {
      "@type": "Organization",
      "name": SEO_CONFIG.organization.name,
      "sameAs": SEO_CONFIG.domain
    },
    "timeRequired": meta.duration || "Self-paced",
    "educationalLevel": meta.level || "All Levels",
    "courseCode": meta.slug,
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online",
      "courseWorkload": meta.commitment || "Flexible"
    },
    "offers": meta.price ? [
      {
        "@type": "Offer",
        "category": "Group Classes",
        "price": meta.price.group || "Contact for pricing",
        "priceCurrency": "INR"
      },
      {
        "@type": "Offer",
        "category": "Personal Mentorship",
        "price": meta.price.personal || "Contact for pricing",
        "priceCurrency": "INR"
      }
    ] : [],
    "keywords": Array.isArray(meta.keywords) ? meta.keywords.join(', ') : meta.keywords,
    "url": generateCanonicalUrl(`/courses/${meta.slug}`)
  };
}

/**
 * Generate BlogPosting schema
 * @param {Object} blogData - Blog post data object
 * @returns {Object} - BlogPosting JSON-LD
 */
function generateBlogPostingSchema(blogData) {
  const meta = blogData.meta;

  // Ensure we have a valid image URL
  const imageUrl = blogData.hero?.featuredImage?.url || SEO_CONFIG.defaultImage;
  const fullImageUrl = validateImageUrl(imageUrl);

  // Build author information
  const author = {
    "@type": "Person",
    "name": meta.author?.name || "Modern Age Coders Team"
  };

  // Add author bio if available
  if (meta.author?.bio) {
    author.description = meta.author.bio;
  }

  // Add author URL if available (could be profile page)
  if (meta.author?.url) {
    author.url = meta.author.url;
  }

  // Build publisher information with complete organization details
  const publisher = {
    "@type": "Organization",
    "name": SEO_CONFIG.organization.name,
    "url": SEO_CONFIG.domain,
    "logo": {
      "@type": "ImageObject",
      "url": SEO_CONFIG.domain + SEO_CONFIG.organization.logo,
      "width": 512,
      "height": 512
    }
  };

  // Add contact information to publisher
  if (SEO_CONFIG.organization.email) {
    publisher.contactPoint = {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": SEO_CONFIG.organization.email
    };
  }

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": meta.title,
    "description": meta.description,
    "image": {
      "@type": "ImageObject",
      "url": fullImageUrl,
      "width": 1200,
      "height": 630
    },
    "author": author,
    "publisher": publisher,
    "datePublished": meta.date,
    "dateModified": meta.dateModified || meta.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": generateCanonicalUrl(`/blog/${meta.slug}/`)
    },
    "articleSection": meta.category || "Programming",
    "keywords": Array.isArray(meta.keywords) ? meta.keywords.join(', ') : (meta.keywords || ''),
    "wordCount": meta.wordCount || undefined,
    "timeRequired": meta.readTime || undefined,
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "url": generateCanonicalUrl(`/blog/${meta.slug}/`)
  };
}

/**
 * Generate BreadcrumbList schema
 * @param {Array} breadcrumbs - Array of breadcrumb items [{name, url}]
 * @returns {Object} - BreadcrumbList JSON-LD
 */
function generateBreadcrumbSchema(breadcrumbs) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": generateCanonicalUrl(crumb.url)
    }))
  };
}

/**
 * Generate AboutPage schema
 * @param {Object} pageData - About page data
 * @returns {Object} - AboutPage JSON-LD
 */
function generateAboutPageSchema(pageData = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": pageData.title || "About Modern Age Coders",
    "description": pageData.description || SEO_CONFIG.organization.description,
    "url": generateCanonicalUrl('/about'),
    "mainEntity": {
      "@type": "EducationalOrganization",
      "name": SEO_CONFIG.organization.name,
      "description": SEO_CONFIG.organization.description,
      "url": SEO_CONFIG.domain,
      "foundingDate": SEO_CONFIG.organization.foundingDate,
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "value": "50+"
      },
      "alumni": {
        "@type": "QuantitativeValue",
        "value": "10000+"
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": SEO_CONFIG.organization.address.addressCountry
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": SEO_CONFIG.organization.phone,
        "contactType": "Customer Service",
        "email": SEO_CONFIG.organization.email
      }
    }
  };
}

/**
 * Generate ContactPage schema
 * @param {Object} contactInfo - Contact information
 * @returns {Object} - ContactPage JSON-LD
 */
function generateContactPageSchema(contactInfo = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Modern Age Coders",
    "description": "Get in touch with Modern Age Coders for inquiries about our coding courses",
    "url": generateCanonicalUrl('/contact'),
    "mainEntity": {
      "@type": "Organization",
      "name": SEO_CONFIG.organization.name,
      "url": SEO_CONFIG.domain,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": contactInfo.phone || SEO_CONFIG.organization.phone,
        "contactType": "Customer Service",
        "email": contactInfo.email || SEO_CONFIG.organization.email,
        "availableLanguage": ["English", "Hindi"],
        "areaServed": "IN"
      }
    }
  };
}

/**
 * Generate ItemList schema for course or blog listings
 * @param {Array} items - Array of items (courses or blog posts)
 * @param {string} listType - Type of list ('courses' or 'blogs')
 * @returns {Object} - ItemList JSON-LD
 */
function generateItemListSchema(items, listType = 'courses') {
  const listName = listType === 'courses' ? 'Modern Age Coders Course Catalog' : 'Modern Age Coders Blog Posts';
  const listDescription = listType === 'courses'
    ? 'Comprehensive coding and mathematics courses for all ages'
    : 'Expert coding tutorials and programming insights';

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": listName,
    "description": listDescription,
    "url": generateCanonicalUrl(`/${listType}`),
    "numberOfItems": items.length,
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": listType === 'courses' ? "Course" : "BlogPosting",
        "name": item.title || item.name,
        "description": item.description,
        "url": generateCanonicalUrl(item.url || `/${listType}/${item.slug}`),
        "provider": listType === 'courses' ? {
          "@type": "Organization",
          "name": SEO_CONFIG.organization.name
        } : undefined
      }
    }))
  };
}

/**
 * Generate FAQPage schema
 * @param {Array} faqItems - Array of FAQ items [{question, answer}]
 * @returns {Object} - FAQPage JSON-LD
 */
function generateFAQSchema(faqItems) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };
}

/**
 * Generate complete page schema with multiple types
 * @param {string} pageType - Type of page (home, about, courses, etc.)
 * @param {Object} pageData - Page-specific data
 * @returns {Array} - Array of schema objects
 */
function generatePageSchema(pageType, pageData = {}) {
  const schemas = [];
  const pageConfig = SEO_CONFIG.pages[pageType];

  if (!pageConfig || !pageConfig.schema) {
    logSEOWarning(`No schema configuration found for page type: ${pageType}`);
    return schemas;
  }

  pageConfig.schema.forEach(schemaType => {
    switch (schemaType) {
      case 'Organization':
        schemas.push(generateOrganizationSchema());
        break;
      case 'WebSite':
        schemas.push(generateWebSiteSchema());
        break;
      case 'EducationalOrganization':
        schemas.push(generateEducationalOrganizationSchema());
        break;
      case 'AboutPage':
        schemas.push(generateAboutPageSchema(pageData));
        break;
      case 'ContactPage':
        schemas.push(generateContactPageSchema(pageData));
        break;
      case 'BreadcrumbList':
        if (pageData.breadcrumbs) {
          schemas.push(generateBreadcrumbSchema(pageData.breadcrumbs));
        }
        break;
      case 'ItemList':
        if (pageData.items) {
          schemas.push(generateItemListSchema(pageData.items, pageData.listType || 'courses'));
        }
        break;
      case 'Course':
        if (pageData.course) {
          schemas.push(generateCourseSchema(pageData.course));
        }
        break;
      case 'BlogPosting':
        if (pageData.blog) {
          schemas.push(generateBlogPostingSchema(pageData.blog));
        }
        break;
      default:
        logSEOWarning(`Unknown schema type: ${schemaType}`);
    }
  });

  return schemas;
}

/**
 * Validate page SEO requirements
 * @param {Object} pageElement - DOM element or page data to validate
 * @returns {Object} - Validation report with warnings and errors
 */
function validatePageSEO(pageElement) {
  const report = {
    valid: true,
    warnings: [],
    errors: []
  };

  // Check for title
  const title = pageElement.querySelector ? pageElement.querySelector('title')?.textContent : pageElement.title;
  if (!title) {
    report.errors.push('Missing title tag');
    report.valid = false;
  } else if (title.length < 30 || title.length > 60) {
    report.warnings.push(`Title length ${title.length} is outside recommended range (30-60 characters)`);
  }

  // Check for meta description
  const description = pageElement.querySelector ?
    pageElement.querySelector('meta[name="description"]')?.content :
    pageElement.description;
  if (!description) {
    report.errors.push('Missing meta description');
    report.valid = false;
  } else if (description.length < 120 || description.length > 160) {
    report.warnings.push(`Description length ${description.length} is outside recommended range (120-160 characters)`);
  }

  // Check for canonical URL
  const canonical = pageElement.querySelector ?
    pageElement.querySelector('link[rel="canonical"]')?.href :
    pageElement.canonical;
  if (!canonical) {
    report.warnings.push('Missing canonical URL');
  }

  // Check for Open Graph tags
  const ogTitle = pageElement.querySelector ?
    pageElement.querySelector('meta[property="og:title"]')?.content :
    pageElement.ogTitle;
  if (!ogTitle) {
    report.warnings.push('Missing Open Graph title');
  }

  const ogImage = pageElement.querySelector ?
    pageElement.querySelector('meta[property="og:image"]')?.content :
    pageElement.ogImage;
  if (!ogImage) {
    report.warnings.push('Missing Open Graph image');
  }

  // Check for viewport meta tag
  const viewport = pageElement.querySelector ?
    pageElement.querySelector('meta[name="viewport"]')?.content :
    pageElement.viewport;
  if (!viewport) {
    report.errors.push('Missing viewport meta tag');
    report.valid = false;
  }

  return report;
}

/**
 * Log SEO warning
 * @param {string} message - Warning message
 * @param {Object} context - Additional context
 */
function logSEOWarning(message, context = {}) {
  console.warn(`[SEO Warning] ${message}`, context);
}

/**
 * Log SEO error
 * @param {string} message - Error message
 * @param {Object} context - Additional context
 */
function logSEOError(message, context = {}) {
  console.error(`[SEO Error] ${message}`, context);
}

// Export functions
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    validateTitle,
    validateDescription,
    validateImageUrl,
    generateCanonicalUrl,
    formatKeywords,
    generateMetaTags,
    generateOrganizationSchema,
    generateWebSiteSchema,
    generateEducationalOrganizationSchema,
    generateCourseSchema,
    generateBlogPostingSchema,
    generateBreadcrumbSchema,
    generateAboutPageSchema,
    generateContactPageSchema,
    generateItemListSchema,
    generateFAQSchema,
    generatePageSchema,
    validatePageSEO,
    logSEOWarning,
    logSEOError
  };
}
