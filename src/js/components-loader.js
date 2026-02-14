/**
 * Component Loader
 * Dynamically loads navigation and footer components into pages
 */

(function () {
    'use strict';

    /**
     * Get the correct base path for components
     */
    function getBasePath() {
        const path = window.location.pathname;
        const scriptTag = document.currentScript || document.querySelector('script[src*="components-loader"]');

        if (scriptTag && scriptTag.src) {
            // Calculate path based on script location
            const scriptPath = scriptTag.src;
            const scriptDir = scriptPath.substring(0, scriptPath.lastIndexOf('/'));
            const baseUrl = scriptDir.replace(/\/js$/, '');
            return baseUrl + '/components/';
        }

        // Fallback: calculate from current page location
        if (path.includes('/src/pages/')) {
            return '../../components/';
        } else if (path.includes('/src/')) {
            return '../components/';
        }

        // Default to root-relative path
        return '/components/';
    }

    /**
     * Load HTML component from file
     * @param {string} url - Path to the component file
     * @returns {Promise<string>} - HTML content
     */
    async function loadComponent(url) {
        try {
            console.log('Loading component from:', url);
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to load component: ${url} (Status: ${response.status})`);
            }
            const html = await response.text();
            console.log('Component loaded successfully:', url);
            return html;
        } catch (error) {
            console.error('Component loading error:', error);
            return '';
        }
    }

    /**
     * Insert component HTML into placeholder
     * @param {string} placeholderId - ID of the placeholder element
     * @param {string} html - HTML content to insert
     */
    function insertComponent(placeholderId, html) {
        const placeholder = document.getElementById(placeholderId);
        if (placeholder) {
            placeholder.outerHTML = html;
            console.log('Component inserted:', placeholderId);
        } else {
            console.warn(`Placeholder not found: ${placeholderId}`);
        }
    }

    /**
     * Initialize all components
     */
    async function initComponents() {
        console.log('Initializing components...');
        const basePath = getBasePath();
        console.log('Base path:', basePath);

        // Check if we are in development mode
        const isDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
        const cacheBust = isDev ? `?t=${Date.now()}` : '';

        // Load navigation
        const navHTML = await loadComponent(basePath + 'nav.html' + cacheBust);
        if (navHTML) {
            insertComponent('nav-placeholder', navHTML);
        }

        // Load footer
        const footerHTML = await loadComponent(basePath + 'footer.html' + cacheBust);
        if (footerHTML) {
            insertComponent('footer-placeholder', footerHTML);

            // Initialize copyright date
            const copyrightElem = document.getElementById("copyright");
            if (copyrightElem) {
                copyrightElem.innerHTML = "&copy; " + new Date().getFullYear() + " Modern Age Coders. All Rights Reserved.";
            }
        }

        // Trigger custom event after components are loaded
        document.dispatchEvent(new CustomEvent('componentsLoaded'));
        console.log('Components loaded successfully!');
    }

    // Load components when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initComponents);
    } else {
        initComponents();
    }
})();
