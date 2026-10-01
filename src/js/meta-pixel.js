/**
 * Meta Pixel - Modern Age Coders (fallback)
 *
 * The pixel itself is stamped into every page's <head> at build time by
 * scripts/ensure-meta-pixel.js; change the ID there. This file only fires it
 * on a page that somehow reached visitors without that block, and does
 * nothing when the head snippet has already run, so no PageView is counted
 * twice.
 */

(function() {
    'use strict';

    if (window.fbq) return;

    var PIXEL_ID = '1134229305795086';

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
})();
