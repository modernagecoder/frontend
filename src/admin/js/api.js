/**
 * API CLIENT
 * 
 * Handles all API requests to the backend
 */

const API_BASE_URL = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') 
    ? 'http://localhost:5000/api'
    : 'https://backend-modernagecoders.vercel.app/api';


class APIClient {
  constructor() {
    this.token = localStorage.getItem('adminToken');
  }
  
  /**
   * Get authorization headers
   */
  getHeaders() {
    const headers = {
      'Content-Type': 'application/json'
    };
    
    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }
    
    return headers;
  }
  
  /**
   * Handle API response
   */
  async handleResponse(response) {
    const data = await response.json();
    
    if (!response.ok) {
      // If unauthorized, redirect to login
      if (response.status === 401) {
        this.clearToken();
        window.location.href = 'login.html';
      }
      
      throw new Error(data.message || data.error || 'API request failed');
    }
    
    return data;
  }
  
  /**
   * Make API request
   */
  async request(endpoint, options = {}) {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers: this.getHeaders()
      });
      
      return await this.handleResponse(response);
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }
  
  /**
   * Set authentication token
   */
  setToken(token) {
    this.token = token;
    localStorage.setItem('adminToken', token);
  }
  
  /**
   * Clear authentication token
   */
  clearToken() {
    this.token = null;
    localStorage.removeItem('adminToken');
  }
  
  // ============================================
  // AUTH ENDPOINTS
  // ============================================
  
  async login(email, password) {
    const data = await this.request('/admin/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });
    
    if (data.token) {
      this.setToken(data.token);
    }
    
    return data;
  }
  
  async verifyToken() {
    return await this.request('/admin/auth/verify');
  }
  
  async logout() {
    const data = await this.request('/admin/auth/logout', {
      method: 'POST'
    });
    
    this.clearToken();
    return data;
  }
  
  // ============================================
  // CONTACT ENDPOINTS
  // ============================================
  
  async getContacts(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    return await this.request(`/admin/contacts?${queryString}`);
  }
  
  async getContact(id) {
    return await this.request(`/admin/contacts/${id}`);
  }
  
  async updateContact(id, updates) {
    return await this.request(`/admin/contacts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updates)
    });
  }
  
  async deleteContact(id) {
    return await this.request(`/admin/contacts/${id}`, {
      method: 'DELETE'
    });
  }
  
  async bulkDeleteContacts(ids) {
    return await this.request('/admin/contacts/bulk-delete', {
      method: 'POST',
      body: JSON.stringify({ ids })
    });
  }
  
  async bulkUpdateContacts(ids, updates) {
    return await this.request('/admin/contacts/bulk-update', {
      method: 'POST',
      body: JSON.stringify({ ids, updates })
    });
  }
  
  // ============================================
  // USER ENDPOINTS
  // ============================================
  
  async getUsers(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    return await this.request(`/admin/users?${queryString}`);
  }
  
  async getUser(id) {
    return await this.request(`/admin/users/${id}`);
  }
  
  async updateUser(id, updates) {
    return await this.request(`/admin/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updates)
    });
  }
  
  async deleteUser(id) {
    return await this.request(`/admin/users/${id}`, {
      method: 'DELETE'
    });
  }
  
  async bulkDeleteUsers(ids) {
    return await this.request('/admin/users/bulk-delete', {
      method: 'POST',
      body: JSON.stringify({ ids })
    });
  }
  
  // ============================================
  // ANALYTICS ENDPOINTS
  // ============================================
  
  async getAnalyticsSummary(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    return await this.request(`/admin/analytics/summary?${queryString}`);
  }
  
  async getMonthlyAnalytics() {
    return await this.request('/admin/analytics/monthly');
  }
  
  async exportData(type, format, params = {}) {
    const queryString = new URLSearchParams({ type, format, ...params }).toString();
    const response = await fetch(`${API_BASE_URL}/admin/analytics/export?${queryString}`, {
      headers: this.getHeaders()
    });
    
    if (!response.ok) {
      throw new Error('Export failed');
    }
    
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${type}-export-${Date.now()}.${format}`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }
  
  // ============================================
  // AUDIT LOG ENDPOINTS
  // ============================================
  
  async getAuditLogs(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    return await this.request(`/admin/audit-logs?${queryString}`);
  }

  
   // ============================================
  // CORPORATE TRAINING ENDPOINTS
  // ============================================
  
  async getCorporateTrainings(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    return await this.request(`/admin/corporate-training?${queryString}`);
  }
  
  async getCorporateTraining(id) {
    return await this.request(`/admin/corporate-training/${id}`);
  }
  
  async updateCorporateTraining(id, updates) {
    return await this.request(`/admin/corporate-training/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updates)
    });
  }
  
  async deleteCorporateTraining(id) {
    return await this.request(`/admin/corporate-training/${id}`, {
      method: 'DELETE'
    });
  }
  
  async getCorporateTrainingStats() {
    return await this.request('/admin/corporate-training/stats/summary');
  }

}





// Create global API client instance
const api = new APIClient();
