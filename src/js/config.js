// API Configuration
// Update this after deploying your backend to Vercel

const API_CONFIG = {
  // For local development
  development: 'http://localhost:5000',
  
  // For production - UPDATE THIS after deploying backend to Vercel
  // Example: 'https://mylearn-backend.vercel.app'
  production: 'https://backend-modernagecoders.vercel.app/',
  
  // Auto-detect environment
  getBaseURL: function() {
    // Check if running on localhost
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      return this.development;
    }
    // Production (Netlify)
    return this.production;
  }
};

// Export for use in other files
const API_BASE_URL = API_CONFIG.getBaseURL();

console.log('🔗 API Base URL:', API_BASE_URL);
