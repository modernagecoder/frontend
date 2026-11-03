'use strict';
/**
 * Renderer for Netherlands cluster pages on the build-ai (ag-) system.
 *
 * Structure only: every sentence comes from the page module in
 * content/nl/<slug>.js. Anatomy mirrors src/pages/ai-and-python-academy-oman.html
 * (nav, hero with at-a-glance panel, capsule, picks with real thumbnails,
 * ordered sections, ladder, catalogue bands, how it runs, student work,
 * fees, reviews, FAQ, elsewhere, start form) so ai-global.css needs no new
 * classes. Designed-to-repeat chrome (reviews, student projects, price grid,
 * form panel) is the same on every page by design and is stripped by the
 * uniqueness gate by class.
 */
const fs = require('fs');
const path = require('path');
const { course } = require('./catalogue');
const { withGroup } = require('./exam-groups');
const { neutralFee, feeAnchor, feeRegion, ldPrice, feeText } = require('./fee-anchor');

const ROOT = path.resolve(__dirname, '..', '..', '..');
const BRAND = JSON.parse(fs.readFileSync(path.join(ROOT, 'scripts', 'brand-facts.json'), 'utf8'));
const SITE = 'https://learn.modernagecoders.com';
// A page in the country hreflang cluster (content/markets.json) must carry the whole set or
// scripts/verify-hreflang.js fails the build; read from markets.json, opt in with hreflangCluster: true
// (the Germany hub, rebuilt on this template 2026-11-03). Same rule as render-cg.js.
function hreflangLinks(page) {
  if (!page.hreflangCluster) return '';
  const m = JSON.parse(fs.readFileSync(path.join(ROOT, 'content', 'markets.json'), 'utf8'));
  return m.markets.map(x => [x.hreflang, x.path]).concat([['x-default', m.xDefault]])
    .map(([code, p]) => `  <link rel="alternate" hreflang="${code}" href="${SITE}${p === '/' ? '' : p}">`).join('\n') + '\n';
}
const WA = 'https://wa.me/919123366161?text=';

// Priority demo entry points (owner request 2026-09-27), same contract as render-cg.js:
// data-pd-book opens the paid priority demo form through src/js/demo-choice.js, which the
// deploy build injects everywhere; /book-demo is the no-script fallback. No price printed
// (the popup shows the visitor's currency). Wording from brand-facts.json priorityDemo.
// No nav button: five market links already fill the 1160px nav (tested 1280 and 1440).
// The card sits inside .ag-form-panel, which the uniqueness gate strips;
// the phone bar's text is under seven words, so it cannot form a shared shingle.
const PD = BRAND.priorityDemo;
const pdLink = (placement, cls, label) => `<a class="${cls}" href="/book-demo" data-pd-book="${placement}">${label}</a>`;

const REVIEWS = [
  ['The one step solution for my son. Modern Age Coders make learning coding so simple that kids love it. The teachers explain complex concepts clearly with practical exercises and interactive content.', 'Ria Mukherjee', 'Parent'],
  ['Modern Age Coders has been a game-changer for me. I struggled to grasp IT concepts and coding before joining, but their classes transformed everything. I can now confidently write complex programs with ease.', 'Samriddha Mondal', 'Student'],
  ['One of the most wonderful education centres out there. Education is not limited to school syllabus but focuses on skill development.', 'Vansh Agarwal', 'Student'],
  ['My child Dhairya is really enjoying the Modern Age Coders classes. This is his first online class and he eagerly looks forward to it. I can already see his improvement, and the teachers are very cooperative.', 'Sonam Oswal', 'Parent of Dhairya'],
  ['Modern Age Coders have wonderful teachers who teach in a clear, easy and practical way. The teacher boosts students\' confidence and inspires them to learn without hesitation.', 'Sonu Goyal', 'Parent'],
  ['I highly recommend this computer coding class! The teachers are incredibly knowledgeable and passionate about coding.', 'Ritu Kedia', 'Parent']
];

// Student projects with live addresses, identical on every academy page.
const PROJECTS = [
  ['nutrilife.webp', 'NutriLife AI nutrition coach project screenshot', 'AI and ML', 'NutriLife', 'An AI nutrition coach that reads what you eat and works you toward a target.', 'Bhavya', 'https://nutrilife-bhavya.lovable.app'],
  ['misti.webp', 'Misti AI chatbot for maths and coding screenshot', 'AI and ML', 'Misti', 'A chatbot that answers mathematics and programming questions, built and deployed by a student.', 'Harshit', 'https://misti.modernagecoders.com'],
  ['guardianx.webp', 'GuardianX AI internet safety assistant screenshot', 'AI and ML', 'GuardianX', 'An assistant that helps a young person recognise unsafe situations online.', 'Vivaan', 'https://guardianx-cybersaver.lovable.app'],
  ['skycast.webp', 'SkyCast weather forecast application screenshot', 'Web app', 'SkyCast', 'A weather forecasting site with live conditions for any location.', 'Krish', '']
];

// Germany cluster (spec docs/superpowers/specs/2026-11-02-de-cluster-design.md): German-language pages
// (market.lang 'de-DE') get the template's own words in German, formal "Sie". The words a page writes
// come from its module as always. Reviews stay in the families' own English words, never translated.
const PROJECTS_DE = {
  NutriLife: ['Screenshot des Projekts NutriLife, ein KI-Ernährungscoach', 'KI und ML', 'Ein KI-Ernährungscoach, der Mahlzeiten auswertet und Schritt für Schritt auf ein Ziel hinarbeitet.'],
  Misti: ['Screenshot von Misti, ein KI-Chatbot für Mathematik und Programmieren', 'KI und ML', 'Ein Chatbot, der Fragen zu Mathematik und Programmierung beantwortet, von einem Schüler gebaut und veröffentlicht.'],
  GuardianX: ['Screenshot von GuardianX, ein KI-Assistent für Sicherheit im Internet', 'KI und ML', 'Ein Assistent, der jungen Menschen hilft, unsichere Situationen im Internet zu erkennen.'],
  SkyCast: ['Screenshot der Wetter-App SkyCast', 'Web-App', 'Eine Wetter-Website mit aktuellen Bedingungen für jeden Ort.']
};
const deNum = v => String(v).replace('.', ',');
const STR = {
  en: {
    home: 'Home', navCta: 'Free first class', heroCta: 'Book the free first class', pdCta: 'Book a priority demo', wa: 'Ask on WhatsApp',
    glance: 'At a glance', trust: () => `${BRAND.rating} across ${BRAND.reviews} Google reviews`, syllabus: 'Open the syllabus',
    projEyebrow: 'Student work', by: 'by', openIt: 'Open it', feesEyebrow: 'Fees', freeName: 'Free first class', free: 'Free', usd0: 'USD 0',
    noCard: 'no card required', bookIt: 'Book it', groupName: 'Group batch', perMonth8: 'a month, eight live classes', billedUsd: 'a month, billed in US dollars',
    startHere: 'Start here', oneName: 'One to one', enquire: 'Enquire', revEyebrow: 'What families say', revH2: () => `Rated ${BRAND.rating} across ${BRAND.reviews} Google reviews`,
    partOf: 'Part of the guide:', more: 'More guides:', startEyebrow: 'Start here', waUs: 'WhatsApp us', yourName: 'Your name', namePh: 'Parent or student name',
    phoneIn: (name, dial) => 'Phone or WhatsApp, ' + name + ' ' + dial, phoneAny: 'Phone or WhatsApp, including your country code', ageLabel: 'Learner age group',
    ages: ['Child, 6 to 12', 'Teen, 13 to 18', 'University student', 'Working professional'], submit: 'Request the free class',
    pdH3: 'Want a class sooner? Book a priority demo', pdP: () => `A priority demo is a full class of ${PD.length}. ${PD.report} ${PD.feeCredit}`,
    footAbout: () => `Live online coding, AI and mathematics for ages ${BRAND.ages}. Teaching since ${BRAND.founded}, more than
          ${BRAND.students.replace('+', '')} students across ${BRAND.countries} countries.`,
    company: 'Company', about: 'About us', howTeach: 'How we teach', reviewsL: 'Reviews', contact: 'Contact', copy: '&copy; 2026 Modern Age Coders. Live online classes worldwide.',
    stickyFree: 'Free class', stickyPd: 'Priority demo', call: 'Call us',
    badPhoneIn: name => 'Please enter a valid ' + name + ' phone number.', badPhoneAny: 'Please enter a valid phone number, including your country code.',
    sending: 'Sending...', thanks: 'Thank you', willCall: '. A mentor will call you shortly.', wrong: 'Something went wrong. Please try again.', network: 'Network error. Please try again.',
    mdGlance: 'At a glance', mdRated: () => `Rated ${BRAND.rating} across ${BRAND.reviews} Google reviews.`, mdFree: 'Free first class', mdGroup: 'Group batch', mdOne: 'One to one', mdMonth: 'a month',
    mdPartOf: 'Part of the guide', mdMore: 'More guides', mdContact: 'Contact',
    mdContactP: url => `Book the free first class at [${url}](${url}#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.`,
    langRow: ['Teaching language', 'Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner'],
    // The USD note is shown only outside India: an Indian visitor sees and pays rupees (international-pricing.js reveals [data-intl-only]).
    billedDe: 'a month, eight live classes<span data-intl-only="true" hidden>, charged in US dollars</span>'
  },
  de: {
    home: 'Startseite', navCta: 'Probestunde', heroCta: 'Kostenlose Probestunde buchen', pdCta: 'Priority Demo buchen', wa: 'Per WhatsApp fragen',
    glance: 'Auf einen Blick', trust: () => `${deNum(BRAND.rating)} von 5 bei ${BRAND.reviews} Google-Bewertungen`, syllabus: 'Zum Lehrplan',
    projEyebrow: 'Projekte unserer Lernenden', by: 'von', openIt: 'Öffnen', feesEyebrow: 'Preise', freeName: 'Kostenlose Probestunde', free: 'Kostenlos', usd0: 'Kostenlos',
    noCard: 'keine Karte nötig', bookIt: 'Buchen', groupName: 'Gruppenkurs', perMonth8: 'pro Monat, acht Live-Stunden', billedUsd: 'pro Monat, acht Live-Stunden',
    startHere: 'Hier starten', oneName: 'Einzelunterricht', enquire: 'Anfragen', revEyebrow: 'Was Familien sagen', revH2: () => `${deNum(BRAND.rating)} von 5 bei ${BRAND.reviews} Google-Bewertungen`,
    partOf: 'Teil des Leitfadens:', more: 'Weitere Leitfäden:', startEyebrow: 'Jetzt starten', waUs: 'Per WhatsApp schreiben', yourName: 'Ihr Name', namePh: 'Name von Elternteil oder Lernendem',
    phoneIn: (name, dial) => 'Telefon oder WhatsApp, ' + (name === 'Germany' ? 'Deutschland' : name) + ' ' + dial, phoneAny: 'Telefon oder WhatsApp, mit Ländervorwahl', ageLabel: 'Altersgruppe',
    ages: ['Kind, 6 bis 12', 'Jugendliche, 13 bis 18', 'Studierende', 'Berufstätige'], submit: 'Kostenlose Probestunde anfragen',
    pdH3: 'Lieber früher starten? Priority Demo buchen',
    pdP: () => 'Eine Priority Demo ist eine vollständige Unterrichtsstunde von etwa 45 bis 60 Minuten. Danach schickt der Mentor per WhatsApp einen schriftlichen Kompetenzbericht und einen persönlichen Lernplan. Wenn Sie sich anmelden, wird die Demo-Gebühr mit der ersten Monatsgebühr verrechnet: Schicken Sie uns dazu die Bestellnummer der Demo per WhatsApp.',
    footAbout: () => `Live-Online-Unterricht in Programmieren, KI und Mathematik für Menschen von ${BRAND.ages.replace(' to ', ' bis ')} Jahren. Wir unterrichten seit ${BRAND.founded}, mehr als
          ${BRAND.students.replace('+', '').replace(',', '.')} Lernende in ${BRAND.countries.replace('+', '')} Ländern.`,
    company: 'Unternehmen', about: 'Über uns', howTeach: 'So unterrichten wir', reviewsL: 'Bewertungen', contact: 'Kontakt', copy: '&copy; 2026 Modern Age Coders. Live-Online-Unterricht weltweit.',
    stickyFree: 'Probestunde', stickyPd: 'Priority Demo', call: 'Anrufen',
    badPhoneIn: () => 'Bitte geben Sie eine gültige deutsche Telefonnummer ein.', badPhoneAny: 'Bitte geben Sie eine gültige Telefonnummer mit Ländervorwahl ein.',
    sending: 'Wird gesendet...', thanks: 'Vielen Dank', willCall: '. Ein Mentor ruft Sie in Kürze an.', wrong: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.', network: 'Netzwerkfehler. Bitte versuchen Sie es erneut.',
    mdGlance: 'Auf einen Blick', mdRated: () => `${deNum(BRAND.rating)} von 5 bei ${BRAND.reviews} Google-Bewertungen.`, mdFree: 'Kostenlose Probestunde', mdGroup: 'Gruppenkurs', mdOne: 'Einzelunterricht', mdMonth: 'pro Monat',
    mdPartOf: 'Teil des Leitfadens', mdMore: 'Weitere Leitfäden', mdContact: 'Kontakt',
    mdContactP: url => `Kostenlose Probestunde buchen unter [${url}](${url}#start), per WhatsApp oder telefonisch unter +91 91233 66161 (eine indische Nummer, der tatsächliche Kontakt von Modern Age Coders) oder per E-Mail an connect@modernagecoders.com.`,
    langRow: ['Unterrichtssprache', 'Live-Unterricht ausschließlich auf Englisch, im eigenen Tempo; die Mentoren sprechen deutlich und stellen sich auf Tempo und Akzent der Lernenden ein'],
    billedDe: 'pro Monat, acht Live-Stunden<span data-intl-only="true" hidden>, abgerechnet in US-Dollar</span>'
  }
};
const isDe = page => /^de\b/i.test((page.market && page.market.lang) || '');
const T = page => isDe(page) ? STR.de : STR.en;
// Every Germany page (English or German) states the teaching language in its at-a-glance panel
// (owner 2026-11-02: classes are live, in English only, matching the learner's pace and accent).
const specRows = page => (page.market && page.market.iso === 'DE') ? [T(page).langRow].concat(page.spec) : page.spec;

const esc = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const plain = s => String(s).replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
const groupLabel = () => BRAND.batchSizes.group.replace(/[–—-]/, ' to ');
const stars = () => '<span class="ag-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>';

function paras(arr) { return arr.map(p => `<p>${p}</p>`).join('\n'); }

// The sibling renderer (render-cg.js) calls a paragraph's content `text`; this one calls it `html`.
// Eight UK pages were written with `text` here and shipped a literal "undefined" paragraph, with
// the real sentence dropped. Accept either name, and refuse to build a block that has neither.
function blockHtml(b) {
  const v = b.html !== undefined ? b.html : b.text;
  if (typeof v !== 'string' || !v.trim()) throw new Error("render-ag: '" + b.kind + "' block has no html/text content");
  return v;
}

function block(b) {
  switch (b.kind) {
    case 'two':
      return `<div class="ag-grid-2${b.mt ? ' ag-mt-40' : ''}" style="align-items:start"><div>${b.leftH3 ? `<h3>${b.leftH3}</h3>` : ''}${paras(b.left)}</div><div>${b.rightH3 ? `<h3>${b.rightH3}</h3>` : ''}${paras(b.right)}</div></div>`;
    case 'three':
      return `<div class="ag-grid-3${b.mt ? ' ag-mt-40' : ''}">` + b.cells.map(c => `<div><h3>${c.h3}</h3><p>${c.p}</p></div>`).join('') + '</div>';
    case 'table': {
      const num = new Set(b.numCols || []);
      return `<div class="ag-table-wrap${b.mt ? ' ag-mt-40' : ''}"><table class="ag-table"><caption>${b.caption}</caption><thead><tr>` + b.head.map(h => `<th scope="col">${h}</th>`).join('') + '</tr></thead><tbody>' + b.rows.map(r => '<tr>' + r.map((c, i) => `<td${num.has(i) ? ' class="ag-num"' : ''}>${c}</td>`).join('') + '</tr>').join('') + '</tbody></table></div>';
    }
    case 'source':
      return `<p class="ag-source-note ag-mt-40">${blockHtml(b)}</p>`;
    case 'p':
      return `<p${b.mt ? ' class="ag-mt-40"' : ''}>${blockHtml(b)}</p>`;
    case 'capsule':
      return `<div class="ag-capsule"><p class="ag-capsule-q">${b.q}</p><p>${b.p}</p></div>`;
    // Real code, styled by .ag-code in ai-global.css. Escapes only &, < and > so quotes stay readable.
    case 'code': {
      const code = String(b.code).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      return `<figure class="ag-code"><figcaption class="ag-code-head"><b>${b.label}</b><span>${esc(b.lang)}</span></figcaption><pre>${code}</pre>${b.note ? `<p class="ag-code-note">${b.note}</p>` : ''}</figure>`;
    }
    case 'ol':
      return `<ol class="ag-steps${b.mt ? ' ag-mt-40' : ''}">` + b.items.map(i => `<li>${i}</li>`).join('') + '</ol>';
    default:
      throw new Error('render-ag: unknown block kind ' + b.kind);
  }
}

function section(s) {
  const tint = s.tint === 'tint' ? ' ag-section--tint' : s.tint === 'deep' ? ' ag-section--deep' : '';
  const head = s.h2 ? `<div class="ag-section-head"><p class="ag-eyebrow">${esc(s.eyebrow)}</p><h2>${s.h2}</h2>${s.lede ? `<p class="ag-lede">${s.lede}</p>` : ''}</div>` : '';
  return `<section class="ag-section${tint}"${s.id ? ` id="${s.id}"` : ''}>\n  <div class="ag-wrap">\n    ${head}\n    ${s.body.map(block).join('\n    ')}\n  </div>\n</section>`;
}

function pick(item, n, L) {
  L = L || STR.en;
  const c = course(item.course);
  return `      <a class="ag-pick" href="${c.url}">
        <div class="ag-pick-shot"><img src="${c.image}" alt="${esc(item.alt || (c.title.split(':')[0] + ' course thumbnail'))}" width="800" height="450" loading="lazy"></div>
        <div class="ag-pick-body">
          <p class="ag-pick-code">${esc(item.code || ('NL / ' + String(n + 1).padStart(2, '0')))}</p>
          <h3>${esc(item.title || c.title.split(':')[0])}</h3>
          <p>${item.note}</p>
          <span class="ag-pick-go">${L.syllabus} <span>&rarr;</span></span>
        </div>
      </a>`;
}

function courseCard(x, L) {
  L = L || STR.en;
  const c = course(x.slug);
  return `        <article class="ag-course">
          <p class="ag-course-code">${esc(x.code)}</p>
          <h4>${esc(x.title || c.title.split(':')[0])}</h4>
          <p>${x.blurb}</p>
          <a class="ag-course-link" href="${c.url}">${L.syllabus}</a>
        </article>`;
}

function jsonLd(page) {
  const url = SITE + '/' + page.slug;
  const m = page.market;
  // A market with an empty iso is a worldwide page (the international lead
  // contract): it serves everywhere rather than one country.
  const area = m.iso === '' ? { '@type': 'Place', name: 'Worldwide' } : { '@type': 'Country', name: m.name };
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'EducationalOrganization', '@id': SITE + '/#org', name: 'Modern Age Coders', url: SITE, logo: SITE + '/images/logo.svg', foundingDate: String(BRAND.founded), areaServed: area, knowsAbout: ['Python', 'Machine Learning', 'AI Agents', 'Deep Learning', 'Data Science', 'Generative AI', 'Large Language Models', 'Model Evaluation', 'Git and GitHub', 'Statistics'] },
      { '@type': 'WebPage', '@id': url + '#page', url, name: plain(page.pageName), description: page.webPageDescription, inLanguage: m.lang, isPartOf: { '@type': 'WebSite', url: SITE, name: 'Modern Age Coders' } },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE + '/' }].concat(page.crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 2, name: c.name, item: SITE + c.href }))).concat([{ '@type': 'ListItem', position: page.crumbs.length + 2, name: plain(page.crumbLabel), item: url }]) },
      { '@type': 'Course', name: plain(page.pageName), description: page.courseDescription, provider: { '@id': SITE + '/#org' }, inLanguage: 'en', educationalCredentialAwarded: 'Modern Age Coders certificate of completion', audience: { '@type': 'EducationalAudience', educationalRole: 'student' }, hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'online', courseWorkload: 'PT1H30M', location: { '@type': 'VirtualLocation', url }, instructor: { '@type': 'Organization', name: 'Modern Age Coders' } }, offers: [{ '@type': 'Offer', name: 'Group batch', ...ldPrice(page, 'group'), category: 'Monthly', availability: 'https://schema.org/InStock', url }, { '@type': 'Offer', name: 'One to one', ...ldPrice(page, 'personal'), category: 'Monthly', availability: 'https://schema.org/InStock', url }] },
      { '@type': 'FAQPage', mainEntity: page.faq.items.map(f => ({ '@type': 'Question', name: plain(f.q), acceptedAnswer: { '@type': 'Answer', text: plain(f.a) } })) }
    ]
  };
  const service = { '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Online Python, AI and machine learning teaching for students', provider: { '@type': 'EducationalOrganization', name: 'Modern Age Coders', url: SITE + '/' }, areaServed: area, availableChannel: { '@type': 'ServiceChannel', serviceUrl: url, availableLanguage: ['en'] } };
  return `  <script type="application/ld+json" data-price-scope="coding.${feeRegion(page)}">\n  ${JSON.stringify(graph)}\n  </script>\n\n  <script type="application/ld+json">\n  ${JSON.stringify(service)}\n  </script>`;
}

function leadScript(page) {
  const m = page.market;
  const L = T(page);
  const fn = 'submitLead_' + page.code;
  return `<script>
window.${fn} = function (e) {
  e.preventDefault();
  var form = e.target;
  var name = (form.querySelector('input[name="name"]') || {}).value || '';
  var phoneRaw = (form.querySelector('input[type="tel"]') || {}).value || '';
  var age = (form.querySelector('select[name="age"]') || {}).value || '';
  var note = form.querySelector('.ag-form-note');
  var phoneDigits = phoneRaw.replace(/\\D/g, '');${m.stripTrunk ? `
  if (phoneDigits.indexOf('00${String(m.dial).replace(/\D/g, '')}') === 0) phoneDigits = phoneDigits.slice(${String(m.dial).replace(/\D/g, '').length + 2});
  else if (phoneDigits.indexOf('${String(m.dial).replace(/\D/g, '')}') === 0 && phoneDigits.length > ${m.minDigits}) phoneDigits = phoneDigits.slice(${String(m.dial).replace(/\D/g, '').length});
  if (phoneDigits.charAt(0) === '0') phoneDigits = phoneDigits.slice(1);` : ''}
  if (phoneDigits.length < ${m.minDigits}) { if (note) note.textContent = '${m.iso ? L.badPhoneIn(m.name) : L.badPhoneAny}'; return; }${m.maxDigits ? `
  // The country picker hands a visitor from another country an international number; only a number for
  // this page's country gets the national length and first-digit checks.
  var foreignLead = form.__macLead && form.__macLead.iso && form.__macLead.iso !== '${m.iso}';
  if (!foreignLead && (phoneDigits.length > ${m.maxDigits}${m.nationalStart ? ` || !/^[${m.nationalStart}]/.test(phoneDigits)` : ''})) { if (note) note.textContent = '${L.badPhoneIn(m.name)}'; return; }` : ''}
  var btn = form.querySelector('button[type="submit"]');
  var oldText = btn.textContent;
  btn.disabled = true; btn.textContent = '${L.sending}';
  var API_URL = (location.hostname === 'localhost' || location.hostname === '127.0.0.1')
    ? 'http://localhost:5000' : 'https://backend-modernagecoders.vercel.app';
  fetch(API_URL + '/api/callback/request', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      phone: phoneDigits, countryCode: '${m.dial}', countryIso: '${m.iso}', countryName: '${m.name}',
      source: '${page.slug}-inline', meta: { name: name, age: age, page: '${page.slug}'${m.iso ? '' : ', raw: phoneRaw'} }
    })
  }).then(function (r) { return r.json(); }).then(function (data) {
    if (data && data.success) {
      form.innerHTML = '<p class="ag-form-ok">${L.thanks}' + (name ? ', ' + name.split(' ')[0] : '') + '${L.willCall}</p>';
    } else {
      if (note) note.textContent = (data && data.message) || '${L.wrong}';
      btn.disabled = false; btn.textContent = oldText;
    }
  }).catch(function () {
    if (note) note.textContent = '${L.network}';
    btn.disabled = false; btn.textContent = oldText;
  });
};
</script>
<script>
  window.addEventListener('load', function () {
    var s = document.createElement('script');
    s.src = 'https://www.googletagmanager.com/gtag/js?id=G-N8BM164YJP';
    s.async = true;
    document.head.appendChild(s);
  });
</script>`;
}

function render(page) {
  page = withGroup(page);
  const url = SITE + '/' + page.slug;
  const m = page.market;
  const wa = WA + encodeURIComponent(page.wa);
  const fn = 'submitLead_' + page.code;
  const fid = m.iso ? m.iso.toLowerCase() : 'intl';
  const L = T(page);

  const head = `<!DOCTYPE html>
<html lang="${m.lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>${esc(page.title)}</title>
  <meta name="description" content="${esc(page.description)}">
  <meta name="author" content="Modern Age Coders">
  <link rel="canonical" href="${url}">
${hreflangLinks(page)}  <link rel="alternate" type="text/markdown" href="/src/pages/${page.slug}.md" title="Markdown version for AI agents">

  <link rel="icon" href="/favicon.ico" type="image/x-icon">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
  <meta name="theme-color" content="${page.accent}">

  <meta property="og:type" content="website">
  <meta property="og:url" content="${url}">
  <meta property="og:title" content="${esc(page.title)}">
  <meta property="og:description" content="${esc(page.ogDescription)}">
  <meta property="og:image" content="${SITE}/images/og-modern-age-coders.png">
  <meta property="og:site_name" content="Modern Age Coders">
  <meta property="og:locale" content="${m.locale}">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(page.title.replace(/ \| .*$/, ''))}">
  <meta name="twitter:description" content="${esc(page.twitterDescription)}">
  <meta name="twitter:image" content="${SITE}/images/og-modern-age-coders.png">

  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
${m.geoRegion ? `  <meta name="geo.region" content="${m.geoRegion}">
  <meta name="geo.placename" content="${esc(m.name)}">` : '  <meta name="geo.placename" content="Worldwide">'}

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/css/ai-global.css?v=${page.cssVersion || '20260907'}">
  <style>
${page.personalityCss.trim()}
  </style>

  <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-N8BM164YJP');gtag('config','AW-16910316353');</script>

${jsonLd(page)}
</head>

<body class="ag-root ag-${page.code}">

<nav class="ag-nav" aria-label="Primary">
  <div class="ag-nav-inner">
    <a href="/" class="ag-nav-brand">
      <img src="/images/logo.svg" alt="Modern Age Coders logo" width="30" height="30" fetchpriority="high">
      Modern Age Coders
      <span class="ag-brand-tag">${esc(m.brandTag)}</span>
    </a>
    <ul class="ag-nav-links">
      ${page.navLinks.map(l => `<li><a href="${l.href}">${esc(l.label)}</a></li>`).join('\n      ')}
    </ul>
    <a href="#start" class="ag-btn">${L.navCta}</a>
  </div>
</nav>`;

  const hero = `<header class="ag-hero">
  <div class="ag-wrap">
    <nav class="ag-crumbs" aria-label="Breadcrumb">
      <a href="/">${L.home}</a> / ${page.crumbs.map(c => `<a href="${c.href}">${esc(c.name)}</a>`).join(' / ')} / ${page.crumbLabel}
    </nav>
    <div class="ag-hero-grid ag-mt-40">
      <div>
        <p class="ag-eyebrow">${page.eyebrow}</p>
        <h1>${page.h1}</h1>
        <p class="ag-lede">${page.lede}</p>
        <div class="ag-btn-row">
          <a href="#start" class="ag-btn">${L.heroCta}</a>
          ${pdLink('ag-hero', 'ag-btn ag-btn--pd', L.pdCta)}
          <a href="${page.secondaryCta.href}" class="ag-btn ag-btn--ghost">${esc(page.secondaryCta.label)}</a>
          <a href="${wa}" class="ag-btn ag-btn--ghost" target="_blank" rel="noopener" onclick="if(window.gtag)gtag('event','whatsapp_click',{page_market:'${page.code}'});">${L.wa}</a>
        </div>
        <p class="ag-hero-note">${page.heroNote}</p>
      </div>

      <aside class="ag-spec">
        <p class="ag-spec-title">${L.glance}</p>
        <p class="ag-trust">
          ${stars()}
          ${L.trust()}
        </p>
        <dl>
          ${specRows(page).map(r => `<dt>${esc(r[0])}</dt><dd>${r[1]}</dd>`).join('\n          ')}
        </dl>
      </aside>
    </div>
  </div>
</header>`;

  const capsule = `<section class="ag-section">
  <div class="ag-wrap">
    <div class="ag-capsule">
      <p class="ag-capsule-q">${esc(page.capsuleQ)}</p>
      <p>${page.capsule}</p>
    </div>
  </div>
</section>`;

  const picks = `<section class="ag-section" id="courses">
  <div class="ag-wrap">
    <div class="ag-section-head">
      <p class="ag-eyebrow">${esc(page.picks.eyebrow)}</p>
      <h2>${page.picks.h2}</h2>
      <p class="ag-lede">${page.picks.lede}</p>
    </div>
    <div class="ag-picks">
${page.picks.items.map((it, n) => pick(it, n, L)).join('\n')}
    </div>
  </div>
</section>`;

  const sections = page.sections.map(section).join('\n\n');

  const ladder = `<section class="ag-section" id="ladder">
  <div class="ag-wrap">
    <div class="ag-section-head">
      <p class="ag-eyebrow">${esc(page.ladder.eyebrow)}</p>
      <h2>${page.ladder.h2}</h2>
      <p class="ag-lede">${page.ladder.lede}</p>
    </div>
    ${block(Object.assign({ kind: 'table', numCols: [1, 2] }, page.ladder.table))}
    ${block({ kind: 'two', mt: true, leftH3: page.ladder.left.h3, left: page.ladder.left.ps, rightH3: page.ladder.right.h3, right: page.ladder.right.ps })}
  </div>
</section>`;

  const catalogue = `<section class="ag-section ag-section--tint" id="catalogue">
  <div class="ag-wrap">
    <div class="ag-section-head">
      <p class="ag-eyebrow">${esc(page.catalogue.eyebrow)}</p>
      <h2>${page.catalogue.h2}</h2>
      <p class="ag-lede">${page.catalogue.lede}</p>
    </div>
${page.catalogue.bands.map(b => `    <div class="ag-band">
      <div class="ag-band-head">
        <span class="ag-band-num">${esc(b.num)}</span>
        <h3>${b.h3}</h3>
        <span class="ag-band-sub">${b.sub}</span>
      </div>
      <div class="ag-grid-${b.courses.length >= 4 ? 4 : 3}">
${b.courses.map(x => courseCard(x, L)).join('\n')}
      </div>
    </div>`).join('\n')}
  </div>
</section>`;

  const how = `<section class="ag-section" id="how">
  <div class="ag-wrap">
    <div class="ag-section-head">
      <p class="ag-eyebrow">${esc(page.how.eyebrow)}</p>
      <h2>${page.how.h2}</h2>
      <p class="ag-lede">${page.how.lede}</p>
    </div>
    <div class="ag-slots">
      ${page.how.slots.map(s => `<div class="ag-slot"><p class="ag-slot-time">${esc(s.time)}</p><p class="ag-slot-l">${s.l}</p></div>`).join('\n      ')}
    </div>
    <div class="ag-grid-3">
      ${page.how.cells.map(c => `<div><h3>${c.h3}</h3><p>${c.p}</p></div>`).join('\n      ')}
    </div>
  </div>
</section>`;

  const projects = `<section class="ag-section ag-section--tint">
  <div class="ag-wrap">
    <div class="ag-section-head">
      <p class="ag-eyebrow">${L.projEyebrow}</p>
      <h2>${page.projectsH2}</h2>
      <p class="ag-lede">${page.projectsLede}</p>
    </div>
    <div class="ag-grid-4">
${PROJECTS.map(p0 => { const t = isDe(page) ? PROJECTS_DE[p0[3]] : null; const p = t ? [p0[0], t[0], t[1], p0[3], t[2], p0[5], p0[6]] : p0; return `      <article class="ag-proj">
        <div class="ag-proj-shot"><img src="/images/projects/${p[0]}" alt="${p[1]}" loading="lazy" width="400" height="250"></div>
        <div class="ag-proj-body">
          <p class="ag-proj-cat">${p[2]}</p>
          <h4>${p[3]}</h4>
          <p>${p[4]}</p>
          <p class="ag-proj-meta">${L.by} ${p[5]}${p[6] ? ` &middot; <a href="${p[6]}" rel="noopener" target="_blank">${L.openIt}</a>` : ''}</p>
        </div>
      </article>`; }).join('\n')}
    </div>
  </div>
</section>`;

  const fees = `<section class="ag-section" id="fees">
  <div class="ag-wrap">
    <div class="ag-section-head">
      <p class="ag-eyebrow">${L.feesEyebrow}</p>
      <h2>${page.fees.h2}</h2>
      <p class="ag-lede">${page.fees.lede}</p>
    </div>
    <div class="ag-grid-3">
      <div class="ag-price">
        <p class="ag-price-name">${L.freeName}</p>
        <p class="ag-price-amt">${neutralFee(page) ? L.free : L.usd0}</p>
        <p class="ag-price-alt">${L.noCard}</p>
        <ul>${page.fees.free.map(x => `<li>${x}</li>`).join('')}</ul>
        <a href="#start" class="ag-btn ag-btn--ghost">${L.bookIt}</a>
      </div>
      <div class="ag-price ag-price--feature">
        <p class="ag-price-name">${L.groupName}</p>
        ${neutralFee(page) ? `<p class="ag-price-amt">${feeAnchor(page, 'group')}</p>
        <p class="ag-price-alt">${feeRegion(page) === 'germany' ? L.billedDe : L.perMonth8}</p>` : `<p class="ag-price-amt">USD 100</p>
        <p class="ag-price-alt">${L.billedUsd}</p>`}
        <ul>${page.fees.group.map(x => `<li>${x}</li>`).join('')}</ul>
        <a href="#start" class="ag-btn">${L.startHere}</a>
      </div>
      <div class="ag-price">
        <p class="ag-price-name">${L.oneName}</p>
        ${neutralFee(page) ? `<p class="ag-price-amt">${feeAnchor(page, 'personal')}</p>
        <p class="ag-price-alt">${feeRegion(page) === 'germany' ? L.billedDe : L.perMonth8}</p>` : `<p class="ag-price-amt">USD 150</p>
        <p class="ag-price-alt">${L.billedUsd}</p>`}
        <ul>${page.fees.one.map(x => `<li>${x}</li>`).join('')}</ul>
        <a href="#start" class="ag-btn ag-btn--ghost">${L.enquire}</a>
      </div>
    </div>
  </div>
</section>`;

  const reviews = `<section class="ag-section ag-section--tint">
  <div class="ag-wrap">
    <div class="ag-section-head">
      <p class="ag-eyebrow">${L.revEyebrow}</p>
      <h2>${L.revH2()}</h2>
      <p class="ag-lede">${page.reviewsLede}</p>
    </div>
    <div class="ag-grid-3">
${REVIEWS.map(r => `      <article class="ag-review">
        <p class="ag-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
        <p class="ag-review-text">"${r[0]}"</p>
        <p class="ag-review-name">${r[1]}</p>
        <p class="ag-review-role">${r[2]}</p>
      </article>`).join('\n')}
    </div>
  </div>
</section>`;

  const faq = `<section class="ag-section" id="faq">
  <div class="ag-wrap">
    <div class="ag-section-head">
      <p class="ag-eyebrow">${esc(page.faq.eyebrow)}</p>
      <h2>${page.faq.h2}</h2>
    </div>
    <div class="ag-faq">
${page.faq.items.map(f => `      <div class="ag-faq-item">
        <h3>${f.q}</h3>
        <p>${f.a}</p>
      </div>`).join('\n')}
    </div>
  </div>
</section>`;

  const elsewhere = `<section class="ag-section">
  <div class="ag-wrap">
    <div class="ag-section-head">
      <p class="ag-eyebrow">${esc(page.elsewhere.eyebrow)}</p>
      <h2>${page.elsewhere.h2}</h2>
      <p class="ag-lede">${page.elsewhere.lede}</p>
    </div>
    <div class="ag-grid-3">
      ${page.elsewhere.items.map(i => `<div><h3><a class="ag-inline-link" href="${i.href}">${esc(i.label)}</a></h3><p>${i.p}</p></div>`).join('\n      ')}
    </div>
  </div>
</section>`;

  // UK/US exams cluster (scripts/nl/lib/exam-groups.js): hub index, sibling pages and other hubs.
  // The ag-siblings suffix marks it as shared chrome for the uniqueness gate.
  const rel = page.cluster_related;
  const related = !rel ? '' : `<section class="ag-section ag-siblings" aria-label="${esc(rel.h2)}">
  <div class="ag-wrap">
    <h2 class="ag-siblings-h2">${esc(rel.h2)}</h2>${rel.index ? `
    <p class="ag-siblings-index">${L.partOf} <a class="ag-inline-link" href="${rel.index.href}">${esc(rel.index.label)}</a></p>` : ''}
    <div class="ag-siblings-cols">
      ${rel.sections.map(s => `<div class="ag-siblings-col"><h3>${esc(s.name)}</h3><ul>${s.links.map(l => `<li><a href="${l.href}">${esc(l.label)}</a></li>`).join('')}</ul></div>`).join('\n      ')}
    </div>${rel.others.length ? `
    <p class="ag-siblings-more">${L.more} ${rel.others.map(o => `<a class="ag-inline-link" href="${o.href}">${esc(o.label)}</a>`).join(' &middot; ')}</p>` : ''}
  </div>
</section>`;

  const start = `<section class="ag-section ag-section--deep" id="start">
  <div class="ag-wrap">
    <div class="ag-grid-2" style="align-items:start">
      <div>
        <p class="ag-eyebrow">${L.startEyebrow}</p>
        <h2>${page.start.h2}</h2>
        <p class="ag-lede">${page.start.lede}</p>
        <p class="ag-mt-40">${page.start.readFirst}</p>
        <p class="ag-mt-40">
          <a class="ag-inline-link" href="${wa}" target="_blank" rel="noopener" onclick="if(window.gtag)gtag('event','whatsapp_click',{page_market:'${page.code}',pos:'end'});">${L.waUs}</a>
          &middot; <a class="ag-inline-link" href="tel:+919123366161">+91 91233 66161</a>
          &middot; <a class="ag-inline-link" href="mailto:connect@modernagecoders.com">connect@modernagecoders.com</a>
        </p>
        <p class="ag-form-note">${page.start.note}</p>
      </div>
      <div class="ag-form-panel">
        <form onsubmit="${fn}(event)" novalidate>
          <div class="ag-field">
            <label for="${fid}-name">${L.yourName}</label>
            <input id="${fid}-name" type="text" name="name" placeholder="${L.namePh}" required>
          </div>
          <div class="ag-field">
            <label for="${fid}-phone">${m.iso ? L.phoneIn(esc(m.name), esc(m.dial)) : L.phoneAny}</label>
            <input id="${fid}-phone" type="tel" name="phone" placeholder="${esc(m.phonePlaceholder)}" required>
          </div>
          <div class="ag-field">
            <label for="${fid}-age">${L.ageLabel}</label>
            <select id="${fid}-age" name="age"><option value="6-12">${L.ages[0]}</option><option value="13-18">${L.ages[1]}</option><option value="college">${L.ages[2]}</option><option value="adult">${L.ages[3]}</option></select>
          </div>
          <button type="submit" class="ag-btn" style="width:100%">${L.submit}</button>
          <p class="ag-form-note">${page.start.formNote}</p>
        </form>
        <div class="ag-pd-card"><h3>${L.pdH3}</h3><p>${esc(L.pdP())}</p>${pdLink('ag-book', 'ag-btn ag-btn--pd', L.pdCta)}</div>
      </div>
    </div>
  </div>
</section>`;

  const footer = `<footer class="ag-footer">
  <div class="ag-wrap">
    <div class="ag-grid-4">
      <div>
        <h4>Modern Age Coders</h4>
        <p style="font-size:.9rem;opacity:.82">
          ${L.footAbout()}
        </p>
      </div>
      ${page.footer.cols.map(c => `<div><h4>${esc(c.h4)}</h4><ul>${c.links.map(l => `<li><a href="${l.href}">${esc(l.label)}</a></li>`).join('')}</ul></div>`).join('\n      ')}
      <div>
        <h4>${L.company}</h4>
        <ul>
          <li><a href="/about">${L.about}</a></li>
          <li><a href="/how-we-teach">${L.howTeach}</a></li>
          <li><a href="/love">${L.reviewsL}</a></li>
          <li><a href="/contact">${L.contact}</a></li>
        </ul>
      </div>
    </div>
    <div class="ag-footer-bottom">
      <span>${L.copy}</span>
      <span>${page.footer.bottomRight}</span>
    </div>
  </div>
</footer>`;

  return [head, '', hero, '', capsule, '', picks, '', sections, '', ladder, '', catalogue, '', how, '', projects, '', fees, '', reviews, '', faq, '', elsewhere, '', related, '', start, '', footer, '', `<div class="ag-sticky"><a href="#start">${L.stickyFree}</a>${pdLink('ag-sticky', 'ag-sticky-pd', L.stickyPd)}<a href="tel:+919123366161" aria-label="${isDe(page) ? 'Anrufen' : 'Call'} +91 91233 66161">${L.call}</a></div>`, '', leadScript(page), '', '</body>', '</html>', ''].join('\n');
}

// ---------------------------------------------------------------- md twin
function md(html) {
  return String(html)
    .replace(/<a [^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g, (x, h, t) => `[${t.replace(/<[^>]+>/g, '')}](${h})`)
    .replace(/<strong>([\s\S]*?)<\/strong>/g, '**$1**')
    .replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&middot;/g, '·').replace(/&rarr;/g, '->').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ').trim();
}
function mdTable(t) {
  return [`**${md(t.caption)}**`, '', '| ' + t.head.map(md).join(' | ') + ' |', '|' + t.head.map(() => '---').join('|') + '|', ...t.rows.map(r => '| ' + r.map(md).join(' | ') + ' |')].join('\n');
}
function mdBlock(b) {
  switch (b.kind) {
    case 'two': return [b.leftH3 ? `### ${md(b.leftH3)}` : '', ...b.left.map(md), b.rightH3 ? `### ${md(b.rightH3)}` : '', ...b.right.map(md)].filter(Boolean).join('\n\n');
    case 'three': return b.cells.map(c => `### ${md(c.h3)}\n\n${md(c.p)}`).join('\n\n');
    case 'table': return mdTable(b);
    case 'source': return md(blockHtml(b));
    case 'p': return md(blockHtml(b));
    case 'capsule': return `**${md(b.q)}** ${md(b.p)}`;
    // The twin is what AI engines read: code keeps its lines (so it still runs) and steps keep their numbers.
    case 'code': return [`**${md(b.label)}** (${md(b.lang)})`, '```' + String(b.lang || '').toLowerCase().replace(/[^a-z0-9+#]/g, ''), String(b.code).replace(/\s+$/, ''), '```', b.note ? md(b.note) : ''].filter((x, i) => i !== 4 || x).join('\n');
    case 'ol': return b.items.map((it, i) => `${i + 1}. ${md(it)}`).join('\n');
    default: return '';
  }
}
function twin(page) {
  page = withGroup(page);
  const L = T(page);
  const url = SITE + '/' + page.slug;
  const out = ['---', `title: ${JSON.stringify(page.title)}`, `description: ${JSON.stringify(page.description)}`, `canonical: ${url}`, `source: src/pages/${page.slug}.html`, '---'];
  out.push(`> ${md(page.capsule)}`, '');
  out.push(`[${L.home}](/) / ` + page.crumbs.map(c => `[${c.name}](${c.href})`).join(' / ') + ' / ' + md(page.crumbLabel), '');
  out.push(md(page.eyebrow), '', `# ${md(page.h1)}`, '', md(page.lede), '');
  out.push(L.mdGlance + ': ' + specRows(page).map(r => `${r[0]}: ${md(r[1])}`).join('; ') + '. ' + L.mdRated(), '');
  out.push(`## ${md(page.picks.h2)}`, '', md(page.picks.lede), '');
  page.picks.items.forEach(i => { const c = course(i.course); out.push(`- [${i.title || c.title.split(':')[0]}](${c.url}): ${md(i.note)}`); });
  out.push('');
  for (const s of page.sections) { if (s.h2) { out.push(`## ${md(s.h2)}`, ''); if (s.lede) out.push(md(s.lede), ''); } for (const b of s.body) { const t = mdBlock(b); if (t) out.push(t, ''); } }
  out.push(`## ${md(page.ladder.h2)}`, '', md(page.ladder.lede), '', mdTable(page.ladder.table), '', `### ${md(page.ladder.left.h3)}`, '', ...page.ladder.left.ps.map(md), '', `### ${md(page.ladder.right.h3)}`, '', ...page.ladder.right.ps.map(md), '');
  out.push(`## ${md(page.catalogue.h2)}`, '', md(page.catalogue.lede), '');
  for (const b of page.catalogue.bands) { out.push(`### ${md(b.h3)}`, '', md(b.sub), ''); for (const x of b.courses) { const c = course(x.slug); out.push(`- [${x.title || c.title.split(':')[0]}](${c.url}): ${md(x.blurb)}`); } out.push(''); }
  out.push(`## ${md(page.how.h2)}`, '', md(page.how.lede), '');
  for (const s of page.how.slots) out.push(`- **${md(s.time)}** ${md(s.l)}`);
  out.push('');
  for (const c of page.how.cells) out.push(`- **${md(c.h3)}** ${md(c.p)}`);
  out.push('');
  out.push(`## ${md(page.fees.h2)}`, '', md(page.fees.lede), '', `- ${L.mdFree}: ${feeText(page, 'free')}. ${page.fees.free.map(md).join('. ')}.`, `- ${L.mdGroup}: ${feeText(page, 'group')} ${L.mdMonth}. ${page.fees.group.map(md).join('. ')}.`, `- ${L.mdOne}: ${feeText(page, 'personal')} ${L.mdMonth}. ${page.fees.one.map(md).join('. ')}.`, '');
  out.push(`## ${md(page.faq.h2)}`, '');
  for (const f of page.faq.items) out.push(`### ${md(f.q)}`, '', md(f.a), '');
  out.push(`## ${md(page.elsewhere.h2)}`, '');
  for (const i of page.elsewhere.items) out.push(`- [${i.label}](${i.href}): ${md(i.p)}`);
  const rel = page.cluster_related;
  if (rel) {
    out.push('', `## ${md(rel.h2)}`, '');
    if (rel.index) out.push(`${L.mdPartOf}: [${rel.index.label}](${rel.index.href})`, '');
    for (const sec of rel.sections) { out.push(`### ${md(sec.name)}`, ''); for (const l of sec.links) out.push(`- [${l.label}](${l.href})`); out.push(''); }
    if (rel.others.length) out.push(L.mdMore + ': ' + rel.others.map(o => `[${o.label}](${o.href})`).join(', '));
  }
  out.push('', '## ' + L.mdContact, '', L.mdContactP(url), '');
  return out.join('\n');
}

module.exports = { render, twin, plain, REVIEWS, PROJECTS };
