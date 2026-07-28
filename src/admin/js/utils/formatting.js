/**
 * FORMATTING UTILITIES
 */

function formatDate(dateString) {
  if (!dateString) return 'N/A';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

function formatDateShort(dateString) {
  if (!dateString) return 'N/A';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

function formatDateLong(dateString) {
  if (!dateString) return 'N/A';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

/**
 * Compact date for table cells, e.g. "28 Jul 26".
 * The long form wrapped onto three lines once the source and demo slot columns
 * were added, which pushed the action buttons off the right edge.
 */
function formatDateCompact(dateString) {
  if (!dateString) return '—';
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return '—';
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: '2-digit' });
}

function truncateText(text, maxLength = 50) {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}

function capitalizeFirst(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * ESCAPE HTML
 *
 * Every component here builds rows with innerHTML, and the values come from
 * the public internet: names and messages typed by visitors, and now also the
 * landing page and referrer, which are taken straight from a visitor's own URL.
 * A visitor could otherwise arrive at
 *   /page?x=<img src=x onerror=...>
 * and have that run inside the admin panel when staff open the lead.
 *
 * Anything interpolated into markup must go through this first.
 */
function escapeHtml(value) {
  if (value === null || value === undefined) return '';
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Human-readable label for a traffic channel.
 */
const CHANNEL_LABELS = {
  direct: 'Direct',
  organic: 'Search',
  paid: 'Paid ad',
  social: 'Social',
  referral: 'Referral',
  internal: 'Internal',
  unknown: 'Unknown'
};

/**
 * SOURCE CELL
 *
 * Shows the page that earned the lead plus how they arrived. Leads captured
 * before source tracking shipped have no attribution at all, and say so
 * plainly rather than showing a misleading blank.
 */
function renderSource(attribution) {
  if (!attribution || (!attribution.formPage && !attribution.landingPage)) {
    return '<span class="source-unknown">Not recorded</span>';
  }

  const landed = attribution.landingPage || attribution.formPage;
  const channel = CHANNEL_LABELS[attribution.channel] || 'Unknown';
  const host = attribution.referrerHost ? ' &middot; ' + escapeHtml(attribution.referrerHost) : '';

  return `
    <div class="source-cell">
      <span class="source-page" title="${escapeHtml(landed)}">${escapeHtml(landed)}</span>
      <span class="source-channel">${escapeHtml(channel)}${host}</span>
    </div>
  `;
}

/**
 * DEMO SLOT CELL
 *
 * `raw` is what the parent actually saw on screen, so it is what we show.
 * A slot already in the past is dimmed rather than hidden - it still explains
 * what the lead asked for.
 */
function renderSlot(demoSlot, compact) {
  if (!demoSlot || !demoSlot.raw) {
    return '<span class="slot-empty">&mdash;</span>';
  }

  const isPast = demoSlot.at && new Date(demoSlot.at) < new Date();

  // In a table the weekday, the "IST" suffix and any overseas parenthetical
  // eat width that the Date and Actions columns need. The full string stays in
  // the tooltip and is shown in full in the detail view.
  let text = demoSlot.raw;
  if (compact) {
    text = String(demoSlot.raw)
      .replace(/\s*\([^)]*\)\s*$/, '')
      .replace(/^[A-Za-z]{3},?\s*/, '')
      .replace(/\s*IST\s*$/, '');
  }

  return `<span class="slot-cell${isPast ? ' is-past' : ''}" title="${escapeHtml(demoSlot.raw)}">${escapeHtml(text)}</span>`;
}

/**
 * The path a visitor took before converting.
 */
function renderJourney(journey) {
  if (!Array.isArray(journey) || !journey.length) return '';

  return '<div class="journey-trail">' + journey.map((step, i) => {
    const last = i === journey.length - 1;
    const arrow = i > 0 ? '<span class="journey-arrow">&rsaquo;</span>' : '';
    return `${arrow}<span class="journey-step${last ? ' is-last' : ''}">${escapeHtml(step)}</span>`;
  }).join('') + '</div>';
}

/**
 * Full international number for tel: and wa.me links.
 * Falls back to the bare digits when no country code was captured.
 */
function fullPhone(countryCode, phone) {
  const digits = String(phone || '').replace(/\D/g, '');
  if (!digits) return '';
  const dial = String(countryCode || '').replace(/\D/g, '');
  return dial ? dial + digits : digits;
}

/**
 * CALL AND WHATSAPP BUTTONS
 *
 * Contacting the client is the job this panel exists for, so these are on the
 * row itself rather than hidden behind a detail view.
 */
function renderContactActions(countryCode, phone, email) {
  const intl = fullPhone(countryCode, phone);
  if (!intl && !email) return '';

  let html = '<div class="contact-actions">';

  if (intl) {
    html += `<a class="contact-btn" href="tel:+${escapeHtml(intl)}" title="Call this number" aria-label="Call">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A15 15 0 0 1 4 5a1 1 0 0 1 1-1z"/></svg>
    </a>`;

    html += `<a class="contact-btn is-whatsapp" href="https://wa.me/${escapeHtml(intl)}" target="_blank" rel="noopener" title="Message on WhatsApp" aria-label="WhatsApp">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-5.2A8.5 8.5 0 1 1 21 11.5z"/><path d="M8.8 9.2c.3 2.6 3.4 5.7 6 6l1-1.6-2-.9-1 1a7 7 0 0 1-2.5-2.5l1-1-.9-2z" fill="currentColor" stroke="none"/></svg>
    </a>`;
  }

  if (email) {
    html += `<a class="contact-btn" href="mailto:${escapeHtml(email)}" title="Send an email" aria-label="Email">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16v14H4z"/><path d="m4 7 8 5 8-5"/></svg>
    </a>`;
  }

  return html + '</div>';
}
