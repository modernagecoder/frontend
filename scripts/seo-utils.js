/**
 * SEO Utility Functions
 * Helper functions for generating and validating SEO meta tags
 */

// Import configuration (if using Node.js)
// const SEO_CONFIG = require('./seo-config.js');

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
 * @param {string} path - The page path (e.g., '/courses/python')
 * @returns {string} - Full canonical URL
 */
function generateCanonicalUrl(path) {
  if (!path) {
    return SEO_CONFIG.domain + '/';
  }
  
  // Remove trailing slash except for root
  const cleanPath = path === '/' ? '/' : path.replace(/\/$/, '');
  
  // Ensure path starts with /
  const normalizedPath = cleanPath.startsWith('/') ? cleanPath : '/' + cleanPath;
  
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
  
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": meta.title,
    "description": meta.description,
    "image": blogData.hero?.featuredImage?.url || SEO_CONFIG.defaultImage,
    "author": {
      "@type": "Person",
      "name": meta.author?.name || "Modern Age Coders Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": SEO_CONFIG.organization.name,
      "logo": {
        "@type": "ImageObject",
        "url": SEO_CONFIG.domain + SEO_CONFIG.organization.logo
      }
    },
    "datePublished": meta.date,
    "dateModified": meta.dateModified || meta.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": generateCanonicalUrl(`/blog/${meta.slug}`)
    },
    "articleSection": meta.category || "Programming",
    "keywords": Array.isArray(meta.keywords) ? meta.keywords.join(', ') : meta.keywords
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
    logSEOWarning,
    logSEOError
  };
}
