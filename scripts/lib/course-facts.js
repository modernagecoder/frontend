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
    ['Live demo', 'Optional. Enroll directly on this page, or <a href="/book-demo">book a free live demo</a> if you would like to meet a mentor first.'],
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
      'Yes. Choose a plan on this page and enroll directly; a booking or a demo is not required. A free live demo is optional, for anyone who wants to meet a mentor first. Outside India, our team confirms the plan and completes payment with you over WhatsApp, so allow a little time for that step.'],
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
      answer: 'Yes. Choose a plan on this page and enroll directly. A free live demo is optional: book one if you would like to meet a mentor before deciding. Outside India, our team confirms the plan and completes payment with you over WhatsApp, so allow a little time for that step.',
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

module.exports = { renderFacts, renderAnswers, augmentFaqs, libraryFor, schemaExtras, watchClass, factsMarkdown, answersMarkdown, RECORDINGS };
