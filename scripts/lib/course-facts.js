/**
 * course-facts.js
 * ------------------------------------------------------------------
 * The buyer-facing facts of a course, generated from the course JSON,
 * scripts/brand-facts.json and content/recordings.json, so the visible
 * copy, the schema and the markdown twin cannot disagree.
 *
 * Three outputs, all consumed by generate-courses.js:
 *   renderFacts(courseData)    the "At a glance" block under the hero
 *   renderAnswers(courseData)  the nine questions a buyer asks, answered
 *                              in plain sentences (who, what, how deep,
 *                              who teaches, practice and feedback, cost,
 *                              schedule, watch first, enroll without demo)
 *   augmentFaqs(courseData)    appends the two recording/demo questions to
 *                              the course FAQs (visible + FAQPage schema)
 *   libraryFor(courseData)     the recording library that matches the
 *                              course's audience (kids 6 to 12, or 13+)
 *   schemaExtras(courseData)   inLanguage and audience for the Course node
 *
 * Rules honoured here (do not loosen):
 *   - No price literal anywhere: prices are one-per-visitor and stamped by
 *     pricing:apply; the facts link to the plans on the page instead.
 *   - The recordings need a Google sign-in; never say "no sign-up".
 *   - Nothing is invented. Instructors are not named in the data, so the
 *     answer says who teaches in words that are true.
 *   - No em-dashes.
 */
'use strict';
const path = require('path');

const BRAND = require(path.join(__dirname, '..', 'brand-facts.json'));
const RECORDINGS = require(path.join(__dirname, '..', '..', 'content', 'recordings.json'));

function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/** lower-case only the first letter, so "Google" keeps its capital */
function lc(s) { s = String(s || ''); return s.charAt(0).toLowerCase() + s.slice(1); }

function firstSentences(text, max) {
  const t = String(text || '').split(/\n\n/)[0].replace(/\s+/g, ' ').trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max);
  const end = Math.max(cut.lastIndexOf('. '), cut.lastIndexOf('! '), cut.lastIndexOf('? '));
  return end > 60 ? cut.slice(0, end + 1) : cut.replace(/\s+\S*$/, '') + '.';
}

function values(obj) {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return [];
  return Object.keys(obj).filter((k) => !k.startsWith('_') && k !== 'title').map((k) => obj[k]).filter((v) => typeof v === 'string');
}

/**
 * The recording library whose audience matches this course: the kids library
 * (6 to 12) or the teens-and-adults library (13+, also maths).
 *
 * Decided from the level / prerequisites text in this order, because a bare
 * number there is usually NOT an age ("Grades 7-9", "Class 10", "Years 12-13",
 * "4+ years of experience"):
 *   1. an explicit age range: "ages 8 to 12", "(Ages 8-12)", "aged 6-10",
 *      "ages 10 to adult". Upper bound 12 or lower = kids; "adult" = teens.
 *   2. a school level: grade / class / year / primary / standard N(-M).
 *      Top grade 6 or lower = kids (elementary), otherwise teens and up.
 *   3. words: kids / children with no teen, college, adult or professional
 *      mention = kids; everything else = teens and up.
 */
function libraryFor(courseData) {
  const meta = courseData.meta || {};
  const pre = courseData.prerequisites || {};
  const text = [meta.level, pre.age].filter(Boolean).join(' ').replace(/[–—]/g, '-');
  const kids = RECORDINGS.libraries.find((l) => l.id === 'kids');
  const teens = RECORDINGS.libraries.find((l) => l.id === 'teens');

  const age = text.match(/\bages?d?\s*\(?\s*(\d{1,2})\s*(?:to|-|and)\s*(\d{1,2}|adult)/i);
  if (age) {
    if (age[2].toLowerCase() === 'adult') return teens;
    // a range that straddles 12 but is sold "for kids" and starts young belongs with the kids
    const forKids = /\bkids?\b/i.test((meta.title || '') + ' ' + (meta.slug || ''));
    if (Number(age[2]) <= 12 || (forKids && Number(age[1]) <= 9)) return kids;
    return teens;
  }

  if (/\b(kindergarten|k-\d)\b/i.test(text)) return kids;
  const grade = text.match(/\b(?:grades?|class(?:es)?|years?|primary|standard|std)\s*(\d{1,2})(?:\s*(?:to|-|and)\s*(\d{1,2}))?/i);
  if (grade) return Math.max(Number(grade[1]), Number(grade[2] || 0)) <= 6 ? kids : teens;

  const saysKids = /\b(kids?|children|child)\b/i.test(text) && !/\b(teen|college|professional|adult|18\+)/i.test(text);
  return saysKids ? kids : teens;
}

function audienceLine(courseData) {
  const meta = courseData.meta || {};
  const pre = courseData.prerequisites || {};
  let line = (meta.level || 'All levels').trim();
  // prerequisites.age often repeats the level's numbers; only add it when it says more
  if (pre.age) {
    const first = String(pre.age).split(/\.\s/)[0].trim();
    if (!line.includes(first)) line += (/[.!?]$/.test(line) ? ' ' : '. ') + 'Age: ' + String(pre.age).trim();
  }
  return /[.!?]$/.test(line) ? line : line + '.';
}

function prerequisiteLine(courseData) {
  const pre = courseData.prerequisites || {};
  const parts = [pre.coding_experience, pre.maths_background, pre.prior_knowledge, pre.experience].filter(Boolean);
  if (parts.length) return parts.join(' ');
  const v = values(pre).filter((s) => !/^\d/.test(s));
  return v[0] || 'None. The course starts from the beginning.';
}

function formatLine(courseData) {
  const g = courseData.course_guarantees || {};
  return g.live_classes || 'Live, interactive online classes with a real mentor, never pre-recorded videos.';
}

function classSize(courseData) {
  // A 1-on-1-only course (meta.one_on_one_only) sells no batch at all, so
  // quoting the group and mini-batch sizes here would describe plans the
  // page never offers.
  if (courseData && courseData.meta && courseData.meta.one_on_one_only === true) {
    return 'Taught 1-on-1 only: every class is a private session with your own mentor.';
  }
  const b = BRAND.batchSizes || {};
  const g = String(b.group || '5 to 10').replace(/[–-]/g, ' to ');
  const m = String(b.miniBatch || '3 to 4').replace(/[–-]/g, ' to ');
  return `Group batches of ${g} students, mini batches of ${m}, or 1-on-1.`;
}

function phaseCount(courseData) {
  return Object.keys(courseData).filter((k) => /^phase_\d+/.test(k)).length;
}

/* ------------------------------------------------------------------ */

function renderFacts(courseData) {
  const meta = courseData.meta || {};
  const lib = libraryFor(courseData);
  const rows = [
    ['Who it is for', esc(audienceLine(courseData))],
    ['Prerequisites', esc(prerequisiteLine(courseData))],
    ['Format', esc(formatLine(courseData)) + ' Live classes run about one hour.'],
    ['Language', 'English or Hindi, depending on the batch.'],
    ['Duration', esc(meta.duration || 'Set with you at enrolment')],
    ['Weekly commitment', esc(meta.commitment || '2 live classes a week plus practice')],
    ['Class size', esc(classSize(courseData))],
    ['Price', '<a href="#enroll">Monthly plans, shown in your currency below.</a>'],
    ['Certificate', esc(meta.certification || 'Course-completion certificate from Modern Age Coders')],
    ['Watch first', `<a href="${esc(lib.url)}" target="_blank" rel="noopener" data-recording-library="${esc(lib.id)}" onclick="try{gtag('event','watch_library_click',{library:'${esc(lib.id)}',page:'course'})}catch(e){}">Free recordings of real classes for ages ${esc(lib.ages)}</a>, ${esc(lc(RECORDINGS.accessShort))}. ${esc(RECORDINGS.sample_note)}`],
    ['Live demo', `Optional. Enrol directly on this page, or <a href="/book-demo" data-pd-book="course-facts">book a Priority Demo</a>: a full live class of ${esc((BRAND.priorityDemo || {}).length || 'about 45 to 60 minutes')} with a mentor reserved for you.`],
    ['Questions', `<a href="${esc(contactLinks(courseData).wa)}" target="_blank" rel="noopener">WhatsApp ${CONTACT.phone}</a> or email <a href="${esc(contactLinks(courseData).mail)}">${CONTACT.email}</a>.`],
  ];
  return `
        <section class="cd-facts" aria-labelledby="cd-facts-title">
            <div class="cd-facts-card">
                <h2 id="cd-facts-title">At a glance</h2>
                <dl class="cd-facts-grid">
${rows.map(([k, v]) => `                    <div class="cd-fact"><dt>${k}</dt><dd>${v}</dd></div>`).join('\n')}
                </dl>
            </div>
        </section>`;
}

function renderAnswers(courseData) {
  const meta = courseData.meta || {};
  const overview = courseData.program_overview || {};
  const g = courseData.course_guarantees || {};
  const lib = libraryFor(courseData);
  const who = values(courseData.who_is_this_for).slice(0, 3);
  const phases = phaseCount(courseData);

  const qa = [
    ['Who should take this course?',
      esc(audienceLine(courseData)) + (who.length ? ' It suits ' + esc(who.map((s) => s.replace(/\.$/, '')).join('; ').toLowerCase()) + '.' : '')],
    ['What will they learn and build?',
      esc(firstSentences(overview.description || meta.description, 420))],
    ['How deeply are topics covered?',
      esc(`The course runs ${meta.duration || 'at a pace set with you'} at ${meta.commitment || '2 live classes a week plus practice'}` +
        (phases ? `, across ${phases} phases listed week by week in the syllabus below.` : '.') +
        (g.structured_curriculum ? ' ' + g.structured_curriculum : ''))],
    ['Who teaches it?',
      'Modern Age Coders mentors, who teach the live classes themselves. You can watch them at work in the free class recordings before you decide.'],
    ['How do practice, feedback and assessment work?',
      esc([g.structured_curriculum ? '' : 'Classwork in every session and homework after every class.', g.real_assessment, g.doubt_support, g.certificate].filter(Boolean).join(' '))],
    ['What does it cost?',
      (meta.one_on_one_only === true
        ? 'One plan, taught 1-on-1 only, billed per month of private classes. <a href="#enroll">The price is shown in your currency in the plans section</a>. Monthly billing, cancel any time.'
        : 'Three monthly plans: a group batch, a mini batch and 1-on-1. <a href="#enroll">Prices are shown in your currency in the plans section</a>. Monthly billing, cancel any time.')],
    ['When can classes take place?',
      (meta.one_on_one_only === true
        ? 'Live classes are scheduled around your week: as a 1-on-1 student you choose your own slots with your mentor, and international students are scheduled in their own timezone. Ask on WhatsApp for the current availability.'
        : 'Live classes are scheduled around your week. Group batches meet at a fixed weekly slot; 1-on-1 students choose their own. International students are scheduled in their own timezone. Ask on WhatsApp for the current slots.')],
    ['Can I watch the teaching before deciding?',
      `Yes. <a href="${esc(lib.url)}" target="_blank" rel="noopener" data-recording-library="${esc(lib.id)}" onclick="try{gtag('event','watch_library_click',{library:'${esc(lib.id)}',page:'course'})}catch(e){}">Full recordings of real ${esc(lib.ages)} classes</a> are free to watch, ${esc(lc(RECORDINGS.accessShort))}. ${esc(RECORDINGS.sample_note)} ${esc(RECORDINGS.languages)} ${esc(RECORDINGS.watchTip)}`],
    ['Can I enroll without a live demo?',
      'Yes. Choose a plan on this page and enrol directly; a demo is not required. If you would like to see a full class with a mentor first, <a href="/book-demo" data-pd-book="course-answers">book a Priority Demo</a>.'],
    ['How do I reach you with a question?',
      `<a href="${esc(contactLinks(courseData).wa)}" target="_blank" rel="noopener">WhatsApp ${CONTACT.phone}</a>, email <a href="${esc(contactLinks(courseData).mail)}">${CONTACT.email}</a>, or call ${CONTACT.phone}. Tell us the student's age and what they have learned so far, and we will point you to the right plan and batch.`],
  ];

  return `
        <section class="cd-answers" id="straight-answers" aria-labelledby="cd-answers-title">
            <div class="cd-answers-inner">
                <span class="cd-answers-eyebrow">Before you decide</span>
                <h2 id="cd-answers-title">Straight answers about ${esc(meta.title || 'this course')}</h2>
                <dl class="cd-answers-list">
${qa.map(([q, a]) => `                    <div class="cd-answer"><dt>${esc(q)}</dt><dd>${a}</dd></div>`).join('\n')}
                </dl>
            </div>
        </section>`;
}

/* ---------- enrolment steps and contact (the "how do I actually join" block) ---------- */

// How a family reaches a person. connect@ is the address the enrolment modal
// already uses; the WhatsApp number is the one /welcome sends payers to.
const CONTACT = {
  waNumber: '919123366161',
  tel: '+919123366161',
  phone: '+91 91233 66161',
  email: 'connect@modernagecoders.com',
};

const WA_ICON = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88zM20.46 3.49A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.69 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.16-3.49-8.41z"/></svg>';
const MAIL_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"></rect><polyline points="22 6 12 13 2 6"></polyline></svg>';
const PHONE_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>';

/** WhatsApp and email links that already name the course, built at generation time. */
function contactLinks(courseData) {
  const title = (courseData.meta || {}).title || 'a course';
  return {
    wa: `https://wa.me/${CONTACT.waNumber}?text=${encodeURIComponent(`Hi, I have a question about the ${title} course before enrolling.`)}`,
    mail: `mailto:${CONTACT.email}?subject=${encodeURIComponent(`Question about ${title}`)}`,
    tel: `tel:${CONTACT.tel}`,
  };
}

/** The four real steps from reading this page to the first class. */
function enrolSteps(courseData) {
  const oneOnOne = courseData.meta && courseData.meta.one_on_one_only === true;
  const pd = BRAND.priorityDemo || {};
  const b = BRAND.batchSizes || {};
  const g = String(b.group || '5 to 10').replace(/[–-]/g, ' to ');
  const m = String(b.miniBatch || '3 to 4').replace(/[–-]/g, ' to ');
  return [
    {
      title: 'See a full class first (optional)',
      body: `Book a Priority Demo: a live class of ${pd.length || 'about 45 to 60 minutes'} with a mentor reserved for you, today or tomorrow. ${pd.report || ''} ${pd.feeCredit || ''}`.replace(/\s+/g, ' ').trim(),
      action: '<a class="cd-step-btn" href="/book-demo" data-pd-book="course-steps">Book a Priority Demo</a><span class="cd-step-fee">Demo fee <span class="pd-price">₹499</span></span>',
    },
    {
      title: 'Choose a plan',
      body: oneOnOne
        ? 'This course is taught 1-on-1 only, so there is one plan: private live classes with your own mentor, about one hour each. The card below shows the schedule and the monthly fee in your currency.'
        : `Group batch (${g} students), mini batch (${m} students, India only) or 1-on-1 with your own mentor. Every plan is live online, and each class runs about one hour. The cards below show classes per week and the monthly fee in your currency.`,
    },
    {
      title: 'Enrol and pay the first month',
      body: 'Press Enrol Now on your plan. Choose Pay online for secure Razorpay checkout (you fill in your name, email and phone), or WhatsApp enrolment to talk to our team first.',
    },
    {
      title: 'Fix your class timings',
      body: `After payment, message us on WhatsApp or call ${CONTACT.phone} with the student's name, the course and your preferred time slot. We confirm the batch, send the class link and schedule the first class at your chosen time.`,
    },
  ];
}

function renderEnrolSteps(courseData) {
  const steps = enrolSteps(courseData);
  return `
                <div class="cd-steps" aria-labelledby="cd-steps-title">
                    <h3 id="cd-steps-title" class="cd-steps-title">How enrolment works</h3>
                    <ol class="cd-steps-list">
${steps.map((s, i) => `                        <li class="cd-step"><span class="cd-step-n" aria-hidden="true">${i + 1}</span><div class="cd-step-body"><h4>${esc(s.title)}</h4><p>${esc(s.body)}</p>${s.action ? `<div class="cd-step-action">${s.action}</div>` : ''}</div></li>`).join('\n')}
                    </ol>
                    <p class="cd-steps-note">Billing is monthly and you can cancel any time.</p>
                </div>`;
}

/** The "talk to a person" card: WhatsApp, email and phone, under the plans. */
function renderContact(courseData) {
  const l = contactLinks(courseData);
  return `
            <div class="cd-contact" aria-labelledby="cd-contact-title">
                <div class="cd-contact-text">
                    <h3 id="cd-contact-title">Questions before you enrol? Talk to our team.</h3>
                    <p>Ask about class timings, the right level for your child, what they need to know already, or payment. Parents and adult learners can reach us on WhatsApp, by email or by phone.</p>
                </div>
                <div class="cd-contact-actions">
                    <a class="cd-contact-btn cd-contact-wa" href="${esc(l.wa)}" target="_blank" rel="noopener">${WA_ICON}<span>WhatsApp us<small>${CONTACT.phone}</small></span></a>
                    <a class="cd-contact-btn cd-contact-mail" href="${esc(l.mail)}">${MAIL_ICON}<span>Email us<small>${CONTACT.email}</small></span></a>
                    <a class="cd-contact-btn cd-contact-tel" href="${l.tel}">${PHONE_ICON}<span>Call us<small>${CONTACT.phone}</small></span></a>
                </div>
            </div>`;
}

/** One quiet line of contact under the hero and final buttons. */
function renderContactLine(courseData, cls) {
  const l = contactLinks(courseData);
  return `<p class="${cls}">Questions? <a href="${esc(l.wa)}" target="_blank" rel="noopener">WhatsApp ${CONTACT.phone}</a> or email <a href="${esc(l.mail)}">${CONTACT.email}</a></p>`;
}

/** The owner's quality promise (2026-09-28), a bold band right under the hero. */
function promisePillars() {
  return [
    ['World-class instructors', 'Every class is taught by an instructor who specialises in that exact field.'],
    ['No compromise on quality', 'Every lesson, project and piece of feedback is held to the highest standard.'],
    ['Education for everyone', `Learners aged ${BRAND.ages || '6 to 67'}, from first-time beginners to working professionals, in ${BRAND.countries || '25+'} countries.`],
  ];
}

function renderPromise() {
  return `
        <section class="cd-promise" aria-labelledby="cd-promise-title">
            <div class="cd-promise-inner">
                <p class="cd-promise-eyebrow">Our promise</p>
                <h2 id="cd-promise-title" class="cd-promise-title">The world's best learning experience, open to <em>everyone</em>.</h2>
                <ul class="cd-promise-pillars">
${promisePillars().map(([h, p]) => `                    <li><strong>${esc(h)}</strong><span>${esc(p)}</span></li>`).join('\n')}
                </ul>
                <div class="cd-promise-close">
                    <p>If you want the highest quality, Modern Age Coders is the right choice.</p>
                    <a class="cd-promise-btn" href="/book-demo" data-pd-book="course-promise">Book a Priority Demo</a>
                </div>
            </div>
        </section>`;
}

function stepsMarkdown(courseData) {
  const l = contactLinks(courseData);
  return '## Our promise\n\n' +
    "**The world's best learning experience, open to everyone.**\n\n" +
    promisePillars().map(([h, p]) => `- **${h}:** ${p}`).join('\n') +
    '\n\nIf you want the highest quality, Modern Age Coders is the right choice.\n\n' +
    '## How enrolment works\n\n' +
    enrolSteps(courseData).map((s, i) => `${i + 1}. **${s.title}.** ${s.body}`).join('\n') +
    '\n\nBilling is monthly and you can cancel any time.\n\n' +
    `## Contact\n\n- WhatsApp: ${CONTACT.phone} (${l.wa})\n- Email: ${CONTACT.email}\n- Phone: ${CONTACT.phone}\n\n`;
}

/** Append the two recording/demo questions to the course FAQs, once. */
function augmentFaqs(courseData) {
  if (!Array.isArray(courseData.faqs)) courseData.faqs = [];
  const lib = libraryFor(courseData);
  const has = (needle) => courseData.faqs.some((f) => String(f.question || '').toLowerCase().includes(needle));
  if (!has('watch how you teach')) {
    courseData.faqs.push({
      question: 'Can I watch how you teach before enrolling in this course?',
      answer: `Yes. Full recordings of real, unedited classes for ages ${lib.ages} are free to watch: ${RECORDINGS.access} ${RECORDINGS.sample_note} ${RECORDINGS.languages} ${RECORDINGS.watchTip}`,
    });
  }
  if (!has('without a live demo')) {
    courseData.faqs.push({
      question: 'Can I enroll without a live demo?',
      answer: `Yes. Choose a plan on this page and enrol directly. A demo is optional: if you would like to see a full class with a mentor first, book a Priority Demo, a live class of ${(BRAND.priorityDemo || {}).length || 'about 45 to 60 minutes'}. Questions: WhatsApp ${CONTACT.phone} or email ${CONTACT.email}.`,
    });
  }
  return courseData;
}

function schemaExtras(courseData) {
  const meta = courseData.meta || {};
  return {
    inLanguage: ['en', 'hi'],
    audience: { '@type': 'EducationalAudience', audienceType: meta.level || 'All levels' },
  };
}

function watchClass(courseData) {
  const lib = libraryFor(courseData);
  return {
    href: lib.url,
    id: lib.id,
    label: `Watch a real class (ages ${lib.ages})`,
    ariaLabel: `Watch free recordings of real classes for ages ${lib.ages}. Opens the recording library in a new tab; ${lc(RECORDINGS.accessShort)}.`,
    note: `Recordings are ${lc(RECORDINGS.accessShort)}. ${RECORDINGS.sample_note}`,
  };
}

/* ---------- markdown twins: the same facts and answers, as text ---------- */

function htmlToText(html, base) {
  const abs = (href) => href.startsWith('#') ? (base || '') + href : href.startsWith('/') ? 'https://learn.modernagecoders.com' + href : href;
  return String(html || '')
    .replace(/<a\s[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g, (m, href, text) => `[${text}](${abs(href)})`)
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ').trim();
}

function pairs(html, base) {
  const out = [];
  const re = /<dt>([\s\S]*?)<\/dt><dd>([\s\S]*?)<\/dd>/g;
  let m;
  while ((m = re.exec(html))) out.push([htmlToText(m[1], base), htmlToText(m[2], base)]);
  return out;
}

function pageUrl(courseData) {
  return 'https://learn.modernagecoders.com/courses/' + ((courseData.meta || {}).slug || '') + '/';
}

function factsMarkdown(courseData) {
  const rows = pairs(renderFacts(courseData), pageUrl(courseData));
  return '## At a glance\n\n' + rows.map(([k, v]) => `- **${k}:** ${v}`).join('\n') + '\n\n';
}

function answersMarkdown(courseData) {
  const rows = pairs(renderAnswers(courseData), pageUrl(courseData));
  return '## Straight answers about this course\n\n' + rows.map(([q, a]) => `### ${q}\n\n${a}\n`).join('\n') + '\n';
}

module.exports = { renderFacts, renderAnswers, renderPromise, renderEnrolSteps, renderContact, renderContactLine, augmentFaqs, libraryFor, schemaExtras, watchClass, factsMarkdown, answersMarkdown, stepsMarkdown, RECORDINGS };
