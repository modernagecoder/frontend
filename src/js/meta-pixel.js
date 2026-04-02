/**
 * Meta Pixel - Modern Age Coders
 *
 * Setup instructions:
 * 1. Go to Meta Events Manager → Data Sources → Add → Web → Meta Pixel
 * 2. Replace 'YOUR_PIXEL_ID' below with your actual Pixel ID
 * 3. This file is included on all pages — update once, works everywhere
 */

(function() {
    'use strict';

    // ========================================
    // REPLACE THIS WITH YOUR META PIXEL ID
    var PIXEL_ID = 'YOUR_PIXEL_ID';
    // ========================================

    if (PIXEL_ID === 'YOUR_PIXEL_ID') {
        console.warn('[Meta Pixel] Pixel ID not configured. Replace YOUR_PIXEL_ID in meta-pixel.js');
        return;
    }

    // Meta Pixel base code
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');

    fbq('init', PIXEL_ID);
    fbq('track', 'PageView');

    // Add noscript fallback image
    var noscriptImg = document.createElement('img');
    noscriptImg.height = 1;
    noscriptImg.width = 1;
    noscriptImg.style.display = 'none';
    noscriptImg.src = 'https://www.facebook.com/tr?id=' + PIXEL_ID + '&ev=PageView&noscript=1';
    document.body.appendChild(noscriptImg);
})();
