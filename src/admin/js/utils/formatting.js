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
 *
 * `e164` is the number the server already normalised (duplicated country code
 * removed, domestic leading zero removed) and it always wins when present.
 * Gluing a dial code onto raw stored digits is what produced the unringable
 * "+91 91..." numbers this panel used to show, so that path is now only the
 * fallback for records the server has not decorated.
 */
function fullPhone(countryCode, phone, e164) {
  const normalised = String(e164 || '').replace(/\D/g, '');
  if (normalised) return normalised;

  const digits = String(phone || '').replace(/\D/g, '');
  if (!digits) return '';
  const dial = String(countryCode || '').replace(/\D/g, '');

  // Do not re-prefix a number that already carries its country code. The test
  // is length-based on purpose: a ten-digit Indian mobile beginning 91 is a
  // real number, not a doubled dial code, so only a number already long enough
  // to be international is left alone.
  if (dial && digits.length > 10 && digits.indexOf(dial) === 0) return digits;

  return dial ? dial + digits : digits;
}

/**
 * THE NUMBER, AS SOMETHING A PERSON CAN READ AND DIAL
 *
 * One renderer for every lead screen. It shows the server's grouped display
 * form ("+91 91233 66161"), and when the server flagged the number as doubtful
 * it says so on the row rather than letting someone discover it by ringing a
 * dead line.
 *
 * @param {object} record  - a decorated lead (phoneDisplay / phoneWarning set)
 * @param {string} rawKey  - 'phone' or 'contact', for records not yet decorated
 * @param {object} options - { noFlag: true } to render the warning separately
 *                           via renderPhoneFlag, so it does not sit between the
 *                           number and the call buttons and wrap them onto a
 *                           second line
 */
function renderPhone(record, rawKey, options) {
  if (!record) return '<span class="phone-with-code">—</span>';

  const key = rawKey || (record.phone !== undefined ? 'phone' : 'contact');
  const raw = record[key] || '';
  const dial = record.countryCode || '';

  // Server-decorated records carry a ready-made display string. Anything else
  // falls back to dial + digits, which is what the panel always did.
  const display = record.phoneDisplay || ((dial ? dial + ' ' : '') + raw);

  let html = `<span class="phone-with-code">${escapeHtml(display)}</span>`;

  if (record.phoneWarning && !(options && options.noFlag)) {
    html += renderPhoneFlag(record);
  }

  return html;
}

/** The "check this number" badge on its own, for placing beside the country. */
function renderPhoneFlag(record) {
  if (!record || !record.phoneWarning) return '';
  return `<span class="phone-flag" title="${escapeHtml(record.phoneWarning)}">⚠ check</span>`;
}

/**
 * WHEN SOMETHING HAPPENED, SAID ONCE AND SAID CLEARLY
 *
 * Two things people actually want from a timestamp: the exact moment, and how
 * long ago that was. Showing both removes the mental arithmetic.
 *
 * Everything is pinned to Asia/Kolkata and labelled IST. Before this the panel
 * rendered in whatever zone the browser happened to be in while the
 * notification emails said IST, so the same event carried two different times
 * depending on where you read it.
 */
function formatWhen(dateString, opts) {
  if (!dateString) return '<span class="when-empty">—</span>';
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return '<span class="when-empty">—</span>';

  const exact = date.toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    day: 'numeric', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit', hour12: true
  });

  const ago = formatRelative(date);
  const urgent = opts && opts.urgentAfterHours
    && (Date.now() - date.getTime()) > opts.urgentAfterHours * 3600000;

  return `
    <span class="when-cell${urgent ? ' is-overdue' : ''}">
      <span class="when-exact">${escapeHtml(exact)} IST</span>
      <span class="when-ago">${escapeHtml(ago)}</span>
    </span>
  `;
}

/**
 * "2 hours ago", "in 3 days". Plain words, no library.
 */
function formatRelative(date) {
  const d = date instanceof Date ? date : new Date(date);
  if (isNaN(d.getTime())) return '';

  const diff = Date.now() - d.getTime();
  const future = diff < 0;
  const secs = Math.abs(diff) / 1000;

  const say = (n, unit) => {
    const rounded = Math.floor(n);
    const label = rounded + ' ' + unit + (rounded === 1 ? '' : 's');
    return future ? 'in ' + label : label + ' ago';
  };

  if (secs < 60) return future ? 'in a moment' : 'just now';
  if (secs < 3600) return say(secs / 60, 'minute');
  if (secs < 86400) return say(secs / 3600, 'hour');
  if (secs < 2592000) return say(secs / 86400, 'day');
  if (secs < 31536000) return say(secs / 2592000, 'month');
  return say(secs / 31536000, 'year');
}

/**
 * Country as a badge. Shared by every lead screen so "where is this person"
 * is answered the same way everywhere.
 */
function renderCountry(record) {
  const iso = String(record.countryIso || '').toUpperCase();
  const name = record.countryName || '';
  const dial = record.countryCode || '';

  if (!iso && !name && !dial) {
    return '<span class="country-badge country-badge--unknown" '
         + 'title="This lead arrived before the country picker existed, or the picker did not load">'
         + '— Not recorded</span>';
  }

  const flag = iso.length === 2
    ? iso.replace(/./g, c => String.fromCodePoint(0x1F1A5 + c.charCodeAt(0)))
    : '🌍';
  const cls = iso === 'IN' ? 'country-badge country-badge--india' : 'country-badge country-badge--foreign';
  const label = name || iso || dial;

  return `<span class="${cls}" title="${escapeHtml(label)}">`
       + `<span class="country-flag">${flag}</span> ${escapeHtml(label)}`
       + `${iso ? ` <small>(${escapeHtml(iso)})</small>` : ''}</span>`;
}

/**
 * CALL AND WHATSAPP BUTTONS
 *
 * Contacting the client is the job this panel exists for, so these are on the
 * row itself rather than hidden behind a detail view.
 *
 * @param {string} e164 - the server-normalised number; wins over the other two
 */
function renderContactActions(countryCode, phone, email, e164) {
  const intl = fullPhone(countryCode, phone, e164);
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
