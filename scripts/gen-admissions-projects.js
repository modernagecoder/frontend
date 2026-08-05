/**
 * gen-admissions-projects.js
 * Authoring generator for the Admissions Projects cluster (7 landing pages).
 * Emits src/pages/<slug>.html + <slug>.md for each page in PAGES.
 * Structure mirrors gen-b2b-services.js. Editorial theme only.
 *
 * House rules enforced here:
 *   - No em-dashes in copy.
 *   - Every self-referential stat comes from scripts/brand-facts.json.
 *   - Every price comes from pricing/pricing.config.jsonc via the shared lib.
 *   - No fabricated students, outcomes, admissions results or testimonials.
 *   - No claim that a class causes an admission. Verified facts are cited.
 *
 * Run: node scripts/gen-admissions-projects.js
 *  THEN ALWAYS: npm run pricing:apply
 *
 * That second step is not optional. Regenerating emits the pricing script tags
 * without their content-hash ?v= stamp; pricing:apply puts it back and
 * re-validates every [data-price] anchor against the config. Skipping it leaves
 * returning visitors on cached prices, which is the exact stale-price hole the
 * hashing was added to close.
 *
 * Then: paste the printed routing lines into netlify.toml AND _redirects
 *       (above the /* catch-all), and the sitemap blocks into sitemap.xml.
 *
 * REGION: the markup ships the India view. international-pricing.js rewrites
 * the [data-price] anchors to USD and hides [data-india-only] for visitors
 * outside India, so no page ever shows both currencies at once.
 */
const fs = require('fs');
const path = require('path');
const cfgLib = require('./pricing/lib/config.js');

const OUT = path.join(__dirname, '..', 'src', 'pages');
const BASE = 'https://learn.modernagecoders.com';
const FACTS = JSON.parse(fs.readFileSync(path.join(__dirname, 'brand-facts.json'), 'utf8'));
const PRICES = cfgLib.load().plans.coding;
const fmt = cfgLib.format;

// ---- shared inline SVGs ----
const I = {
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  wa: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.99.36 1.96.7 2.88a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.2-1.2a2 2 0 012.11-.45c.92.34 1.89.57 2.88.7A2 2 0 0122 16.92z" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7" stroke-linecap="round" stroke-linejoin="round"/></svg>'
};

// ---- shared blocks -------------------------------------------------------

// Real student projects. These are the ones already published on /student-labs,
// so nothing here is invented. Each page picks four by key.
const PROOF = {
  misti: ['Misti, an AI chatbot for maths and coding', 'A conversational tutor a student designed, built and debugged. It has to answer wrong questions gracefully, which is the part that teaches the most.'],
  guardianx: ['GuardianX, an AI safety layer for the internet', 'A student build aimed at filtering harmful content. The interesting engineering is in the false positives, and the student can explain them.'],
  nutrilife: ['NutriLife, an AI nutrition coach', 'Takes a real input, returns a real recommendation, and had to be tested against cases where the advice would be wrong.'],
  freshtrack: ['FreshTrack, a food expiry tracker', 'Small, finished and genuinely used. The kind of project that survives a follow-up question because it solves a problem the student actually had.'],
  pracy: ['Pracy, a coding practice and quiz platform', 'Multi-user, with question banks and scoring. Big enough that architecture decisions had to be made and defended.'],
  skycast: ['SkyCast, a weather forecast app', 'Third-party API, error states, and what to show when the network fails. Unglamorous, and exactly what reviewers probe.'],
  lumenfx: ['LumenFX, an AR and VR photo effects studio', 'Real-time image processing where performance is the whole problem, not a footnote.'],
  bookdesk: ['BookDesk, AI book summaries and quizzes', 'A pipeline with a language model in the middle, which forces a student to think about what happens when the model is confidently wrong.'],
  doodle: ['Doodle Dash, a 30 second drawing challenge', 'A finished game loop with state, timing and scoring. Small scope, complete execution.'],
  myday: ['MyDay, a social productivity organiser', 'Accounts, data that persists, and a UI someone else has to understand without being told.'],
  beautifulmind: ['The Beautiful Mind', 'An ambitious student build where the hardest part was deciding what to leave out. Scoping is a skill and this is where it gets learned.'],
  babu: ['Babu, a 90 second maths challenge', 'Timing, scoring and question generation. Deceptively fiddly once the edge cases arrive.'],
  palmarcana: ['Palm Arcana, summon the elements', 'Gesture input driving a real-time response. The recognition thresholds had to be tuned against actual hands.'],
  hairsync: ['HairSync, an AI hairstyle try-on', 'Image manipulation where the output is judged by eye, so the student had to define what good even meant.'],
  hugselle: ['HugSelle, an AI smile generator', 'A narrow, well-scoped model task taken to a finished, usable interface.'],
  moxo: ['Moxo, a company landing page', 'Small by design. Shipped, responsive and finished, which is more than most first projects manage.'],
  typing: ['Baby, a typing speed challenge', 'Input handling, accuracy measurement and live feedback. A clean, complete piece of work.'],
  wordcounter: ['Word Counter', 'The kind of tiny utility that teaches string handling properly, and gets used far more than expected.'],
  lifespan: ['Life Span Tracker', 'Date arithmetic, which is one of the classic places beginner code quietly goes wrong.'],
  simon: ['Simon Game', 'Sequence, state and timing. A rite of passage that either works completely or does not work at all.']
};

// Courses. Every href verified routed in _redirects on 2026-08-05.
// [href, title, blurb, level chip]
const FEEDER = {
  python: ['/python-and-ai-classes-for-kids-teens', 'Python and AI for kids and teens', 'The usual starting point. Language fundamentals to the level where a first real project becomes possible.', 'Beginner'],
  ml: ['/build-machine-learning-models-in-python', 'Build machine learning models in Python', 'For students who already code and want a model they trained themselves, not a tutorial they copied.', 'Intermediate'],
  vibe: ['/vibe-coding-classes', 'Vibe coding, used properly', 'How to build with AI assistance and still be able to explain every line, which is what an interview will test.', 'All levels'],
  master: ['/master-ai-ml-python-java', 'AI, ML, Python and Java track', 'The longer route for students aiming at research-grade work rather than a single app.', 'Advanced'],
  agent: ['/build-ai-agent-python', 'Build an AI agent in Python', 'Agents that plan and use tools, which is where a project stops looking like a chatbot wrapper.', 'Intermediate'],
  gpt: ['/build-your-own-gpt-python', 'Build your own GPT in Python', 'A language model built from the parts up, so the student can explain what an attention layer actually does.', 'Advanced'],
  college: ['/ai-ml-course-for-college-students', 'AI and ML for college students', 'For undergraduates who need depth quickly, including those applying to postgraduate research.', 'College'],
  data: ['/data-science-course', 'Data science', 'Collecting, cleaning and interrogating data, which is most of the work in any real project.', 'Intermediate']
};

const REL = {
  passion: ['/passion-project-ideas-computer-science', 'Passion project ideas', 'Ideas that survive a sceptical reader, and the ones that do not.', 'Read the guide'],
  extras: ['/computer-science-extracurriculars', 'CS extracurriculars, ranked', 'What carries weight, what is neutral, and what is filler.', 'Read the guide'],
  aiproj: ['/ai-projects-for-high-school-students', 'AI projects for high schoolers', 'A ladder from first model to research-grade work.', 'Read the guide'],
  fair: ['/science-fair-project-ideas-ai', 'Science fair AI projects', 'Projects built around a testable question, not an app demo.', 'Read the guide'],
  hack: ['/hackathons-for-high-school-students', 'Hackathons for high schoolers', 'Which ones accept school students, and what to do after.', 'Read the guide'],
  portfolio: ['/how-to-build-a-coding-portfolio', 'How to build a coding portfolio', 'The finished standard: repo, demo, build log, defence.', 'Read the guide'],
  research: ['/summer-research-programs-coding', 'Summer research programs', 'What selective programs ask for and how to be ready.', 'Read the guide'],
  labs: ['/student-labs', 'Student Labs', 'Real projects our students designed and shipped.', 'See the work'],
  hired: ['/ai-ml-projects-for-students', 'AI and ML projects for a career', 'The same discipline aimed at hiring rather than admissions.', 'View page'],
  roadmap: ['/coding-roadmap', 'Coding roadmap', 'What to learn in what order, by age and goal.', 'View roadmap'],
  atlas: ['/course-atlas', 'Course atlas', 'Every course we run, in one page.', 'Browse courses'],
  teach: ['/how-we-teach', 'How we teach', 'Live, small batches, project first. What a class actually looks like.', 'See the method']
};

// Course strip, shown high on the page directly under the hero.
function courseStrip(p) {
  const cards = p.courses.map(k => {
    const [href, h, d, lvl] = FEEDER[k];
    return `                <a class="ap-course" href="${href}">
                    <span class="ap-course__lvl">${lvl}</span>
                    <h3>${h}</h3>
                    <p>${d}</p>
                    <span class="go">View course ${I.arrow}</span>
                </a>`;
  }).join('\n');
  return `        <!-- COURSES -->
        <section class="section section--wide" id="courses">
            ${eyebrowCenter('Courses')}
            <h2 class="section-title">${p.coursesTitle}</h2>
            <p class="section-subtitle">${p.coursesSub}</p>
            <div class="ap-course-grid">
${cards}
            </div>
            <p style="text-align:center;margin-top:1.5rem;"><a href="/course-atlas" class="ap-btn ap-btn--ghost">See every course we teach ${I.arrow}</a></p>
        </section>
`;
}

// Pricing block. ONE region is shown at a time.
//
// The markup ships with the India view, which is what a visitor with no JS and
// every crawler sees. /js/international-pricing.js then rewrites every
// [data-price] anchor to USD for a visitor outside India and hides the
// [data-india-only] card, because the mini batch tier has no USD price in the
// config. This is the same contract /pricing already uses, so `npm run
// pricing:apply` stamps these pages too and no figure is ever hand-typed.
function pricingSection(p) {
  return `        <!-- PRICING -->
        <section class="section section--wide" id="pricing">
            ${eyebrowCenter('Fees')}
            <h2 class="section-title">${p.pricingTitle}</h2>
            <p class="section-subtitle">${p.pricingNote}</p>
            <div class="ap-pricing">
                <div class="ap-price-grid">
                    <div class="ap-price">
                        <h3>Group class</h3>
                        <p class="ap-price__note">Batches of ${FACTS.batchSizes.group}. Good for building the fundamentals.</p>
                        <span class="ap-price__amt" data-price="coding.india.group">${fmt(PRICES.india.group, 'INR')}</span>
                        <span class="ap-price__per">per month</span>
                    </div>
                    <div class="ap-price" data-india-only="true">
                        <h3>Mini batch</h3>
                        <p class="ap-price__note">${FACTS.batchSizes.miniBatch} students. More airtime per student.</p>
                        <span class="ap-price__amt" data-price="coding.india.miniBatch">${fmt(PRICES.india.miniBatch, 'INR')}</span>
                        <span class="ap-price__per">per month</span>
                    </div>
                    <div class="ap-price ap-price--featured">
                        <h3>One to one</h3>
                        <p class="ap-price__note">${FACTS.batchSizes.oneToOne}. The usual choice for a project with a deadline.</p>
                        <span class="ap-price__amt" data-price="coding.india.personal">${fmt(PRICES.india.personal, 'INR')}</span>
                        <span class="ap-price__per">per month</span>
                    </div>
                </div>
                <p class="ap-pricing__foot">${p.pricingFoot} See <a href="/pricing">full pricing</a> for every subject and tier.</p>
            </div>
        </section>
`;
}

function programSection(p) {
  const feeders = (p.feeder || ['python', 'ml', 'vibe']).map(k => {
    const [href, h, , lvl] = FEEDER[k];
    return `                    <a class="ap-feeder__card" href="${href}"><h4>${h}</h4><p>${lvl}</p></a>`;
  }).join('\n');
  return `        <!-- PROGRAM -->
        <section class="section section--wide">
            ${eyebrowCenter('How we do it')}
            <h2 class="section-title">${p.programTitle}</h2>
            <p class="section-subtitle">${p.programSub}</p>
            <div class="ap-program">
                <div class="ap-program__main">
                    <span class="eyebrow">Portfolio Program</span>
                    <h3>${p.programH3}</h3>
                    <p>${p.programPitch}</p>
                    <ul>
${p.programBullets.map(b => `                        <li>${I.check}<span>${b}</span></li>`).join('\n')}
                    </ul>
                    <a href="#lead-form" class="ap-btn ap-btn--primary">${p.programCta} ${I.arrow}</a>
                </div>
                <div class="ap-feeder">
                    <p style="font-size:.9rem;color:var(--muted);margin:0 0 .2rem;line-height:1.6;">${p.feederNote}</p>
${feeders}
                </div>
            </div>
        </section>
`;
}

function eyebrowCenter(t) { return `<span class="eyebrow" style="display:block;text-align:center;">${t}</span>`; }
function escAttr(s) { return String(s).replace(/&(?!(?:amp|lt|gt|quot|#\d+);)/g, '&amp;').replace(/"/g, '&quot;'); }
function strip(s) { return String(s).replace(/<[^>]+>/g, ''); }

// ---- the 7 pages ---------------------------------------------------------
const PAGES = [

  // ======================================================================= 1
  {
    slug: 'passion-project-ideas-computer-science',
    crumb: 'Passion projects',
    metaTitle: 'Passion Project Ideas for Computer Science Students | What Actually Holds Up',
    metaDesc: 'Passion project ideas for computer science students, sorted by how long they take and whether they survive a sceptical reader. Includes what admissions officers now think of passion projects, and the standard a finished project has to meet.',
    h1: 'Passion project ideas for computer science, and the ones that <span class="amber">survive scrutiny.</span>',
    sub: 'There are a thousand lists of passion project ideas. Almost none of them mention that admissions officers have started discounting the genre. This one starts there, then gives you fourteen projects that hold up anyway.',
    waText: 'Hi, I want help with a computer science passion project',
    trust: [['Since ' + FACTS.founded, 'Teaching students to build'], [FACTS.students, 'Students taught'], [FACTS.rating + ' / 5', FACTS.reviews + ' Google reviews']],
    panelHeading: 'This page is for you if',
    panel: ['Your child wants a project that is not another tutorial clone', 'You have heard "passion project" and want to know if it is real', 'There is a deadline and you need a realistic scope', 'You want the project to survive a follow-up question'],
    capsule: [
      'A computer science passion project is a self-directed build a student takes from idea to working software. It can genuinely strengthen an application, but only when it is real: a version-controlled repository, a working demonstration, and a student who can explain every decision. Manufactured projects are now a known pattern that admissions readers actively discount.',
      'Modern Age Coders teaches students to build and finish one real project with a mentor, live and one to one or in small batches. We do not sell admissions consulting or promise outcomes. To talk through a project idea and a realistic timeline, use the form below or message us on WhatsApp at +91 91233 66161.'
    ],
    tldr: [
      'Grades and course rigour still dominate. In the NACAC survey of colleges, 76.8% rated grades in college prep courses of considerable importance, against 6.5% for extracurricular activities.',
      'That does not make a project worthless. It means the project differentiates between students who have already cleared the academic bar, rather than rescuing one who has not.',
      'The genre is saturated. Consultants themselves now describe passion projects as verging on a commodity, and readers treat implausible teenage achievements as a sign of adult help.',
      'What survives is small, true and defensible. A modest tool with real users beats a grand claim you cannot substantiate.',
      'MIT accepts an optional Maker Portfolio, and for code it asks for the codebase, ideally version-controlled, plus a working demonstration. That is the standard worth building to.'
    ],
    verdictTitle: 'What the evidence actually says',
    verdictSub: 'Four findings worth knowing before your child spends six months on something. Each links to the primary source so you can check it yourself.',
    evidence: [
      { stat: '6.5%', h3: 'Extracurriculars are rarely decisive', p: 'In the NACAC survey, only 6.5% of colleges rated extracurricular activities of considerable importance, while 44% rated them of moderate importance. Grades in college prep courses were rated considerable by 76.8%.', srcLabel: 'NACAC, Factors in the Admission Decision', srcUrl: 'https://www.nacacnet.org/factors-in-the-admission-decision/' },
      { stat: 'Codebase', h3: 'One place a project is formally read', p: 'MIT accepts an optional Maker Portfolio through SlideRoom. For code projects it asks for the codebase, ideally version-controlled, and a working demonstration by video, live link or executable. MIT stresses it is truly optional.', srcLabel: 'MIT Admissions, Creative portfolios', srcUrl: 'https://mitadmissions.org/apply/firstyear/portfolios-additional-material/' },
      { stat: 'Commodity', h3: 'The genre is saturated', p: 'Admissions consultancies now write that passion projects have become common enough to verge on a commodity, and that a project unsupported by the rest of an application reads as random rather than genuine.', srcLabel: 'Spark Admissions on passion projects', srcUrl: 'https://www.sparkadmissions.com/blog/passion-projects-for-college-admissions/' },
      { stat: 'Over-coached', h3: 'Big claims invite suspicion', p: 'When a teenager claims a project that generated large revenue, solved a global problem or secured major partnerships, readers tend to assume substantial adult involvement. Scale is not the goal. Verifiability is.', srcLabel: 'Forbes on over-coached applications', srcUrl: 'https://www.forbes.com/sites/christopherrim/2026/02/27/how-college-admissions-officers-spot-over-coached-applications/' }
    ],
    ideasTitle: 'Fourteen passion project ideas that hold up',
    ideasSub: 'Sorted by the time they honestly take. Every one of these can be described precisely, demonstrated live, and questioned without falling apart.',
    tiers: [
      {
        tag: 'Tier 1', h3: 'Small and finishable', note: 'Four to six weeks',
        ideas: [
          { h4: 'A timetable clash checker for your own school', p: 'Read the published exam timetable, detect students with two papers in one slot, and output a list. Boring on paper, genuinely useful, and completely verifiable.', chips: ['Python', 'CSV parsing'], why: 'Holds up because the problem is real and local. A reader can ask what happens with a three-way clash, and you will have an answer.' },
          { h4: 'An accessibility audit script for a site you use', p: 'Crawl a site, flag colour contrast failures and missing image alt text against the WCAG thresholds, and produce a report with line references.', chips: ['Python', 'BeautifulSoup'], why: 'Teaches you that a standard exists and has numbers in it. Also produces a finding you can act on.' },
          { h4: 'A distraction stripper as a browser extension', p: 'Hide the feed, the autoplay and the recommendations on one site you personally lose time to. Ship it to the extension store.', chips: ['JavaScript', 'Browser APIs'], why: 'Shipping to a store is a real gate. It forces you to write a description, handle permissions and pass review.' },
          { h4: 'A spaced repetition trainer for one subject', p: 'Not a general flashcard app. One subject you actually study, with an interval algorithm you chose and can justify.', chips: ['Any language', 'Algorithms'], why: 'The interesting question is why you picked that scheduling algorithm. Have a reason.' },
          { h4: 'A local transport delay tracker', p: 'Poll a public transit API every few minutes, store the results, and after a month show which route is least reliable and when.', chips: ['APIs', 'SQLite'], why: 'You end up with your own dataset, which is far more defensible than a downloaded one.' }
        ]
      },
      {
        tag: 'Tier 2', h3: 'Something a stranger uses', note: 'Two to four months',
        ideas: [
          { h4: 'A fingerspelling recogniser trained on your own data', p: 'Record your own hand-sign dataset, label it, train a small convolutional model, and be honest about which letters it confuses.', chips: ['Python', 'CNN', 'Own dataset'], why: 'Collecting and labelling your own data is the part almost nobody does. It is also the part that proves the work is yours.' },
          { h4: 'A plant or crop disease classifier from photos you took', p: 'Photograph affected and healthy leaves yourself, train a classifier, then test it on plants it has never seen and report where it fails.', chips: ['Computer vision', 'Transfer learning'], why: 'Reporting failure cases reads as scientific maturity. Reporting only accuracy reads as a tutorial.' },
          { h4: 'A tool built for one specific person', p: 'Find someone with a real need, a classmate, a relative, a local shop, and build the thing they asked for. Iterate until they use it unprompted.', chips: ['Any stack', 'User testing'], why: 'A named user who kept using it is the single most convincing sentence in this whole genre.' },
          { h4: 'Three merged pull requests on a library you use', p: 'Not a typo fix. Find open issues, reproduce them, write a fix with a test, and get through review by a maintainer who does not know you.', chips: ['Git', 'Open source'], why: 'Review by a stranger is external validation you did not arrange. The merge is public and dated.' },
          { h4: 'A dataset nobody has built, published properly', p: 'Scrape or collect something genuinely absent, clean it, document the schema and licence, and publish with a data card explaining collection and bias.', chips: ['Data engineering', 'Documentation'], why: 'Others citing or downloading your dataset is evidence of use that you did not manufacture.' }
        ]
      },
      {
        tag: 'Tier 3', h3: 'Research grade', note: 'Six to twelve months',
        ideas: [
          { h4: 'Replicate a published result, then break it', p: 'Take a paper with available code, reproduce the headline number, then find the conditions where it does not hold and document them.', chips: ['Research', 'Reproducibility'], why: 'Replication is real research practice. Finding where a claim fails is more original than repeating it.' },
          { h4: 'Benchmark small language models in a language you speak', p: 'Build an evaluation set in a language that is under-served, run several open models against it, and publish the methodology with the numbers.', chips: ['NLP', 'Evaluation'], why: 'Under-served languages are a genuine gap, and you are qualified to judge the outputs.' },
          { h4: 'A sensor network with a real deployment', p: 'Build several air quality or noise sensors, deploy them somewhere that matters, run them for months, and analyse what the data shows.', chips: ['Hardware', 'Backend', 'Analysis'], why: 'Long-running deployments produce failure stories, and failure stories are what make an interview go well.' },
          { h4: 'An accessibility tool tested with real users', p: 'Build an assistive tool, then test it with people who need it, record what broke, and change the design because of what you learned.', chips: ['Accessibility', 'Iteration'], why: 'Design changed by user feedback is the difference between a project and a product.' }
        ]
      }
    ],
    standardTitle: 'What "finished" has to mean',
    standardSub: 'This is the standard we hold our own students to, and it maps directly onto what MIT asks for and what a UK tutor probes at interview.',
    standard: [
      ['A repository with history', 'Version controlled from the first commit, with messages that show how the thinking developed. A repo uploaded in one commit the night before tells its own story.'],
      ['A working demonstration', 'A video, a live link or an executable. Screenshots are not a demonstration, and MIT says so explicitly.'],
      ['A README a stranger can follow', 'What it does, how to run it, what it does not do. Written for someone who has never met you.'],
      ['A build log', 'Decisions, dead ends and what you would do differently. This is the document that proves the work happened over time.'],
      ['One real user', 'Somebody outside your household who used it and said something about it. One is enough. Zero is a problem.'],
      ['The defence', 'You can be asked about any line and answer without hedging. If AI wrote a section you cannot explain, it is not yet yours.']
    ],
    timelineTitle: 'How long you actually need',
    timelineSub: 'Working backwards from an application deadline. Compress these at your own risk, because the parts that get cut are always the parts that made it credible.',
    timeline: [
      ['12 months out', 'Pick a problem, not a technology', 'Choose something you can describe in one sentence to someone who does not code. Technology choices come after.'],
      ['9 months out', 'Build the smallest working version', 'Get something running end to end, however ugly. Everything after this is improvement rather than hope.'],
      ['6 months out', 'Put it in front of a real user', 'Watch someone use it without your help. Write down every place they hesitated. Fix those.'],
      ['3 months out', 'Write the documentation and record the demo', 'The README, the build log and the demo video. Doing this early leaves time to notice what is missing.'],
      ['6 weeks out', 'Rehearse the defence', 'Have someone technical question you for thirty minutes. Anything you cannot explain becomes this week\'s work.'],
      ['2 weeks out', 'Freeze it', 'Stop adding features. A finished small thing reads far better than an unfinished ambitious one.']
    ],
    programTitle: 'How a project actually gets finished',
    programSub: 'Most abandoned projects die in the same place: the middle, where the tutorial ends and the real problem starts.',
    programPitch: 'We put a mentor alongside the student for the whole build, live. The scope gets set honestly against the time available, the repository starts on day one, and the last few sessions are spent being questioned about the work rather than adding to it.',
    courses: ['python', 'ml', 'vibe', 'agent'],
    coursesTitle: 'The classes behind these projects',
    coursesSub: 'Every project on this page is built in one of these. Live, small batches, and a real build rather than a worksheet.',
    programH3: 'One project, taken all the way to finished',
    programBullets: [
      'A scope agreed honestly against the weeks you actually have',
      'A repository opened in week one, so the history matches the story',
      'A recorded demonstration rather than a folder of screenshots',
      'A build log written as you go, including the dead ends',
      'A mock interview where the student defends the work out loud'
    ],
    programCta: 'Talk to us about a project',
    feederNote: 'Not ready to start a full project? These are the classes students usually take first.',
    pricingTitle: 'What it costs',
    pricingNote: 'Project work happens inside regular classes, so there is no separate portfolio surcharge and no premium tier for this.',
    pricingFoot: 'Prices are per month and shown per region. We do not sell admissions consulting, essay editing or application services, and we never charge for an outcome we cannot control.',
    formHint: 'Tell us the idea and the deadline. We reply within one business day with an honest read on what is realistic in the time available, including if the answer is that it is not.',
    railHeading: 'Prefer to talk it through?',
    railText: 'Reach us directly. We are happy to say an idea is too big before you spend six months on it.',
    assure: 'Your details go straight to our team and are used only to reply to your enquiry. We never share or sell your information. We are a coding and maths school, not an admissions consultancy.',
    proofCta: 'See all student projects',
    feeder: ['python', 'ml', 'vibe'],
    proofTitle: 'Projects our students have actually shipped',
    proofSub: 'Real builds from Modern Age Coders students, published on our Student Labs page. No invented names and no invented outcomes.',
    proof: ['beautifulmind', 'freshtrack', 'moxo', 'palmarcana'],
    faq: [
      ['Do passion projects really help with college admissions?', 'They help at the margin, and only when they are real. The NACAC survey of colleges found just 6.5% rate extracurricular activities of considerable importance against 76.8% for grades in college prep courses. A project differentiates a student who has already cleared the academic bar. It does not rescue one who has not.'],
      ['Is "passion project" a red flag now?', 'The phrase is overused and readers are alert to manufactured examples, particularly implausibly large claims. The work itself is not the problem. Build something modest and true, describe it plainly, and the label stops mattering.'],
      ['How long should a passion project take?', 'A genuinely finishable first project takes four to six weeks. Something a stranger will use takes two to four months. Research-grade work takes six to twelve. Anything claimed to be built in a weekend will be read as a weekend project.'],
      ['Does my child need to know how to code first?', 'Enough to write and debug a small program without help. If they are not there yet, a structured course first is faster than struggling through a project. Our Python and AI classes are the usual starting point.'],
      ['Can they use AI tools like ChatGPT or Claude to build it?', 'Yes, and pretending otherwise is unrealistic. The rule that matters is that they must be able to explain every line they submit. If an AI wrote a section they cannot defend, it is not theirs yet. We teach this explicitly in our vibe coding classes.'],
      ['What if the project fails or does not work well?', 'A project that fails and is honestly documented is stronger than a project that claims success it cannot show. Reporting where a model breaks reads as scientific maturity. Reporting only the accuracy number reads as a tutorial.'],
      ['Do you help with the application itself?', 'No. We are a coding and maths school. We teach students to build and finish software, and we prepare them to explain it. We do not write essays, edit applications or offer admissions consulting, and we never promise an admissions outcome.'],
      ['Do you work with students outside India?', 'Yes. We teach online, live, and our students come from ' + FACTS.countries + ' countries. Classes are scheduled to your timezone.'],
      ['What does it cost?', 'The same as any of our other courses, charged monthly, with group and one to one options. Fees are shown in your own currency in the fees section on this page, and in full on our pricing page. There is no separate charge for project work.']
    ],
    related: ['extras', 'portfolio', 'aiproj', 'labs', 'hack', 'teach'],
    itemList: 'Passion project ideas for computer science students',
    dataService: 'Portfolio Program', dataSrc: 'passion-project-ideas-computer-science',
    formHeading: 'Tell us what your child wants to build',
    formPlaceholder: 'What are they interested in, what have they built before, and when is the deadline?'
  },

  // ======================================================================= 2
  {
    slug: 'computer-science-extracurriculars',
    crumb: 'CS extracurriculars',
    metaTitle: 'Computer Science Extracurriculars, Ranked by What Actually Counts',
    metaDesc: 'Computer science extracurriculars ranked into what carries real weight, what is worth doing but rarely decisive, and what is filler. Based on published admissions criteria from NACAC, MIT, Oxford and UCAS.',
    h1: 'Computer science extracurriculars, ranked by what <span class="amber">actually carries weight.</span>',
    sub: 'Most lists give you twenty activities in no particular order. Admissions systems do not treat them equally, and one major system says outright that extracurriculars are not a selection criterion at all. Here is the ranking, with sources.',
    waText: 'Hi, I want advice on computer science extracurriculars',
    trust: [['Since ' + FACTS.founded, 'Teaching students to build'], [FACTS.students, 'Students taught'], [FACTS.countries, 'Countries']],
    panelHeading: 'This page is for you if',
    panel: ['You are choosing what to spend the next year on', 'You want to know what is worth the money and what is not', 'Your child is applying to more than one country', 'You suspect some of this is theatre and want to know which parts'],
    capsule: [
      'Computer science extracurriculars range from competitions and open-source contributions to clubs and online certificates, and admissions systems weigh them very differently. US colleges read them holistically but rate grades far higher. Oxford states that extracurricular activities do not form part of its selection criteria, while subject-related work does help. UK applicants describe theirs in the UCAS personal statement.',
      'Modern Age Coders teaches the part of this that is teachable: building real software and being able to explain it. To talk through what is worth your child\'s time, use the form below or message us on WhatsApp at +91 91233 66161.'
    ],
    tldr: [
      'Nothing on this list outranks grades. That is not our opinion, it is what colleges report.',
      'The activities that carry weight share one property: somebody outside your family validated them. A judge, a maintainer, a selection committee, a user.',
      'Oxford is explicit that extracurricular activities are not a selection criterion in any subject, but that super-curricular work, including programming experience, helps build the picture.',
      'For 2026 entry, the UCAS personal statement became three structured questions, with the third asking specifically what you have done to prepare outside education.',
      'Certificates without a build attached are the weakest thing on this page. They prove attendance, not ability.'
    ],
    verdictTitle: 'What each system actually says',
    verdictSub: 'The four systems your child is most likely to face, quoted from their own published guidance.',
    evidence: [
      { stat: '6.5%', h3: 'United States: read, but rarely decisive', p: 'Only 6.5% of colleges surveyed rated extracurricular activities of considerable importance, with 44% at moderate. Grades in college prep courses were rated considerable by 76.8% and total grades by 74.1%.', srcLabel: 'NACAC, Factors in the Admission Decision', srcUrl: 'https://www.nacacnet.org/factors-in-the-admission-decision/' },
      { stat: 'Not a criterion', h3: 'Oxford: extracurriculars do not count, super-curriculars do', p: 'Oxford states that tutors decide on academic ability and potential alone, and that extra-curricular activities do not form part of the selection criteria in any subject. It then says super-curricular work, including programming experience, helps build an overall picture.', srcLabel: 'Oxford Department of Computer Science', srcUrl: 'https://www.cs.ox.ac.uk/admissions/undergraduate/how_to_apply/personal-statement.html' },
      { stat: '3 questions', h3: 'UCAS: one question is exactly this', p: 'From 2026 entry the personal statement is three structured questions inside a 4,000 character total, with a 350 character minimum per section. The third asks what you have done to prepare outside education and why it is useful.', srcLabel: 'Guide to the 2026 UCAS personal statement', srcUrl: 'https://www.theprofs.co.uk/student-resources/university-applications/how-to-answer-the-new-ucas-personal-statement-questions-for-2026-entry/' },
      { stat: 'Optional', h3: 'MIT: a formal slot, clearly bounded', p: 'MIT accepts a Maker Portfolio for technical work, requiring a codebase and a working demonstration for code projects, and repeats that portfolios are truly optional and should only be sent when the work is significant and relevant.', srcLabel: 'MIT Admissions, Creative portfolios', srcUrl: 'https://mitadmissions.org/apply/firstyear/portfolios-additional-material/' }
    ],
    ideasTitle: 'The ranking',
    ideasSub: 'Three tiers. The dividing line is whether someone outside your family put their name to it.',
    tiers: [
      {
        tag: 'Tier 1', h3: 'Carries real weight', note: 'Externally validated',
        ideas: [
          { h4: 'Placing in a genuine competition', p: 'USACO has four divisions from Bronze to Platinum, is free, and is open to anyone from any country with an account. Promotion between divisions is earned on score alone.', chips: ['USACO', 'Free', 'Any country'], why: 'A division promotion is an objective, dated, externally issued result that cannot be manufactured.' },
          { h4: 'Winning through to a major science fair', p: 'Regeneron ISEF is not open entry. Finalists come through 365 affiliated fairs across more than 60 countries, and projects are capped at 12 months of continuous research.', chips: ['ISEF', 'Affiliated fair first'], why: 'The qualification path is the proof. You cannot enter ISEF by deciding to.' },
          { h4: 'Merged contributions to real open source', p: 'Issues reproduced, fixes written with tests, and code reviewed and merged by maintainers who have never met you.', chips: ['Git', 'Public record'], why: 'Public, dated, and validated by a stranger with no reason to be kind.' },
          { h4: 'Selection for a competitive research program', p: 'Programs like RSI select roughly 100 students from around the world each summer. Prior research experience is not required to apply.', chips: ['RSI', 'MIT PRIMES'], why: 'Selection itself is the signal. The research output is a bonus on top.' },
          { h4: 'Software with users who are not your friends', p: 'A tool, app or extension that people found on their own and kept using. Download counts and reviews are evidence you did not write.', chips: ['Shipping', 'Real usage'], why: 'Usage numbers are checkable and boring in the right way. Nobody assumes a parent arranged them.' }
        ]
      },
      {
        tag: 'Tier 2', h3: 'Worth doing, rarely decisive', note: 'Good, but common',
        ideas: [
          { h4: 'Hackathons', p: 'MLH events accept students at any level of study including middle and high school. A weekend build is a start, not a finish.', chips: ['MLH', 'Weekend'], why: 'Valuable for skill and nerve. Only becomes strong evidence if you keep developing what you built.' },
          { h4: 'Running a club or teaching juniors', p: 'Leadership counts when it produced something measurable: students taught, a curriculum written, a competition team that placed.', chips: ['Leadership'], why: 'Strong with numbers attached. Weak as a title on a list.' },
          { h4: 'Advanced coursework beyond school', p: 'University-level material taken seriously, with the assessments actually completed rather than the videos watched.', chips: ['Rigour'], why: 'Reads as academic appetite, which is what the UK cares about most.' },
          { h4: 'An internship where you shipped something', p: 'Rare at school age and worth naming only if you can point to what you built and what changed because of it.', chips: ['Industry'], why: 'The value is the artefact, not the company name.' },
          { h4: 'A technical blog you actually maintain', p: 'Writing up what you built and what broke, consistently, over months.', chips: ['Writing'], why: 'The date stamps prove sustained interest, which is exactly what a personal statement claims.' }
        ]
      },
      {
        tag: 'Tier 3', h3: 'Mostly filler', note: 'Spend the time elsewhere',
        ideas: [
          { h4: 'Certificates with no build attached', p: 'A completion certificate from an online course proves you finished the videos. Attach a project you built afterwards and it becomes worth mentioning.', chips: ['Avoid alone'], why: 'Universally available and therefore not differentiating. The project is the part that counts.' },
          { h4: 'Membership without contribution', p: 'Being a member of the coding club, robotics club and three others, with nothing produced by any of them.', chips: ['Avoid'], why: 'A list of memberships reads as breadth without depth, which is the opposite of what these systems reward.' },
          { h4: 'Tutorial clones presented as projects', p: 'The same to-do app, weather app and portfolio site everyone else submitted, following the same video.', chips: ['Avoid'], why: 'Instantly recognisable to anyone technical, and it invites the question you least want asked.' },
          { h4: 'Paid publication in a predatory journal', p: 'Services that place high school research in journals with no real peer review, for a fee.', chips: ['Avoid'], why: 'Actively harmful. Readers who know the journals will discount everything near it.' }
        ]
      }
    ],
    standardTitle: 'The test to apply to anything on this list',
    standardSub: 'Before committing a year to an activity, run it through these six questions. If most answers are no, pick something else.',
    standard: [
      ['Who validated it?', 'Name the person or body outside your family who judged, merged, selected or paid for it. If nobody did, it is self-reported.'],
      ['Is there a date on it?', 'Public, dated evidence is worth far more than a claim. Commits, results pages and merge records all carry dates.'],
      ['Can it be checked?', 'A reader who wanted to verify this in two minutes could do so. Anything unverifiable is worth roughly what a stranger would assume.'],
      ['Does it survive one follow-up question?', 'The second question is where manufactured achievements collapse. Rehearse it.'],
      ['Does it fit the rest of the application?', 'An isolated achievement unrelated to everything else reads as arranged rather than genuine.'],
      ['Is it subject-related?', 'For UK applications this is the whole game. Oxford excludes extracurriculars but welcomes super-curricular programming work.']
    ],
    timelineTitle: 'A sensible order to do these in',
    timelineSub: 'Trying to do all three tiers at once is how students end up with a long list and nothing finished.',
    timeline: [
      ['Year one', 'Get fluent enough to build', 'Nothing on the Tier 1 list is reachable without being able to write and debug code independently. Start here.'],
      ['Year one, later', 'Enter one free competition', 'USACO costs nothing and gives an objective placement. It also tells you honestly where you stand.'],
      ['Year two', 'Ship one thing to real users', 'One project, finished, in front of people who are not related to you. This is the load-bearing item.'],
      ['Year two, later', 'Contribute to something you did not start', 'Open source review by a maintainer is the cheapest external validation available.'],
      ['Final year', 'Apply for the selective things', 'Research programs and portfolio submissions, built on the evidence of the previous two years rather than assembled in a panic.']
    ],
    programTitle: 'The part of this we can actually teach',
    programSub: 'We cannot get a student selected for a research program. We can get them to the level where applying is not absurd.',
    programPitch: 'Everything in Tier 1 depends on being able to build independently. That is what our classes produce: live teaching in small batches, real projects rather than worksheets, and a mentor who asks the follow-up questions before an admissions reader does.',
    courses: ['python', 'master', 'vibe', 'college'],
    coursesTitle: 'Where the Tier 1 activities become possible',
    coursesSub: 'Competitions, open source and research all assume independent coding ability. These are the classes that produce it.',
    programH3: 'The route from Tier 3 to Tier 1',
    programBullets: [
      'Coding fluency first, because every Tier 1 item assumes it',
      'One build carried to a finish instead of five left half done',
      'Competition preparation where the student wants an objective result',
      'Guidance on contributing to open source that maintainers will accept',
      'Practice at explaining the work, which is where UK applications are won'
    ],
    programCta: 'Ask what is worth doing',
    feederNote: 'Where students usually begin, depending on how much they can already build.',
    pricingTitle: 'What our classes cost',
    pricingNote: 'One published fee per tier, the same whichever activity a student is aiming at. Nothing on this page carries a separate charge.',
    pricingFoot: 'Prices are per month and shown per region. We charge for teaching hours, never for an admissions result, because no school can honestly sell one.',
    formHint: 'Tell us the year group and what has been done so far. We reply within one business day with a straight answer on what is worth the time and what is not.',
    railHeading: 'Want a second opinion first?',
    railText: 'Message us directly. We will tell you if an activity you are considering is not worth the fee somebody is quoting.',
    assure: 'Your details are used only to answer your enquiry and are never shared or sold. We teach coding and maths, and we do not offer admissions consulting.',
    proofCta: 'Browse the full Student Labs',
    feeder: ['python', 'master', 'vibe'],
    proofTitle: 'What our students build',
    proofSub: 'Real projects from Modern Age Coders students, published on Student Labs.',
    proof: ['pracy', 'myday', 'wordcounter', 'lumenfx'],
    faq: [
      ['What are the best computer science extracurriculars?', 'The ones validated by someone outside your family: placing in a competition such as USACO, qualifying through an affiliated fair to a major science fair, getting code merged into real open source, being selected for a competitive research program, or shipping software that strangers use.'],
      ['Do extracurriculars matter for computer science admissions?', 'In the US they are read but rarely decisive: 6.5% of colleges rate them of considerable importance against 76.8% for grades in college prep courses. At Oxford they are explicitly excluded from the selection criteria, though subject-related super-curricular work does help.'],
      ['What is the difference between extracurricular and super-curricular?', 'Extracurricular means outside the classroom generally, such as sport or music. Super-curricular means related to the subject you are applying for, such as programming projects, competitions or reading. UK universities care about the second and, in Oxford\'s case, only the second.'],
      ['How many extracurriculars should a student have?', 'Fewer, done properly. A list of memberships reads as breadth without depth. One project taken to a finish, plus one externally validated result, beats eight lines of participation.'],
      ['Is USACO worth doing?', 'It is free, open to anyone from any country with an account, and produces an objective placement across four divisions. As a low-cost way to get a real, checkable result, it is hard to beat.'],
      ['Are online course certificates worth anything?', 'On their own, very little, because they prove attendance rather than ability. Attach a project you built after the course and the pair becomes worth mentioning.'],
      ['Do UK universities look at extracurriculars for computer science?', 'Offers are driven by grades and admissions tests, A*AA at Oxford with the MAT and A*A*A at Cambridge with the TMUA. Subject-related work appears in the UCAS personal statement and often comes up at interview, so it matters through conversation rather than as a scored component.'],
      ['Can Modern Age Coders help with these?', 'We teach the buildable part: coding fluency, real projects, and the ability to explain the work under questioning. We do not offer admissions consulting and we do not promise outcomes.']
    ],
    related: ['passion', 'portfolio', 'hack', 'research', 'roadmap', 'atlas'],
    itemList: 'Computer science extracurriculars ranked by admissions weight',
    dataService: 'Portfolio Program', dataSrc: 'computer-science-extracurriculars',
    formHeading: 'Ask us what is worth your child\'s time',
    formPlaceholder: 'What year is your child in, what have they done so far, and which countries are they applying to?'
  },

  // ======================================================================= 3
  {
    slug: 'ai-projects-for-high-school-students',
    crumb: 'AI projects',
    metaTitle: 'AI Projects for High School Students | A Ladder From First Model to Research',
    metaDesc: 'AI and machine learning projects for high school students, arranged as a ladder from a first trained model to research-grade work. Includes what a finished AI project has to show and how long each stage honestly takes.',
    h1: 'AI projects for high school students, arranged as a <span class="amber">ladder, not a list.</span>',
    sub: 'The problem with most AI project lists is that they mix a two-hour tutorial with a twelve-month research programme and present them as equals. These are ordered by what you need to know before you start.',
    waText: 'Hi, I want my child to build a real AI project',
    trust: [['Since ' + FACTS.founded, 'Teaching AI and ML'], [FACTS.students, 'Students taught'], ['Ages ' + FACTS.ages, 'Every level']],
    panelHeading: 'This page is for you if',
    panel: ['Your child can code a little and wants to do AI properly', 'You want a project, not another tutorial to follow', 'You need to know what is realistic at their level', 'The word "AI project" has started to feel meaningless'],
    capsule: [
      'An AI project for a high school student means training or applying a model to a problem the student chose, then being able to explain how it works and where it fails. The strongest school-age AI projects use data the student collected themselves, report failure cases honestly, and come with a working demonstration rather than a screenshot.',
      'Modern Age Coders teaches AI and machine learning live, in small batches, to students across ' + FACTS.countries + ' countries. To talk about what your child is ready for, use the form below or message us on WhatsApp at +91 91233 66161.'
    ],
    tldr: [
      'Calling an API is not an AI project. Training, evaluating and honestly reporting on a model is.',
      'The single strongest move available to a school student is collecting their own dataset. Almost nobody does it, and it cannot be faked.',
      'Report where the model fails. Accuracy alone reads as a tutorial; a documented failure analysis reads as science.',
      'If you plan to enter a science fair, note that ISEF caps a project at 12 months of continuous research, so starting earlier is not automatically better.',
      'For any code project submitted formally, MIT asks for the codebase plus a working demonstration. Build to that standard by default.'
    ],
    verdictTitle: 'What separates a real AI project from a tutorial',
    verdictSub: 'Four things reviewers look for, and where each requirement comes from.',
    evidence: [
      { stat: 'Demo', h3: 'A demonstration, not a screenshot', p: 'For code projects MIT requires the codebase, ideally version-controlled, and a working demonstration by video, live link or executable. An AI project with no runnable demonstration is very hard to assess.', srcLabel: 'MIT Admissions, Creative portfolios', srcUrl: 'https://mitadmissions.org/apply/firstyear/portfolios-additional-material/' },
      { stat: '12 months', h3: 'A hard research window if you compete', p: 'ISEF projects may include no more than 12 months of continuous research, and finalists must first win a Society-affiliated fair. Scope your project to the window rather than assuming more time is better.', srcLabel: 'Society for Science, ISEF', srcUrl: 'https://www.societyforscience.org/isef/' },
      { stat: 'Defensible', h3: 'You will be asked how it works', p: 'Oxford tutors welcome programming experience in the statement and at interview, where you can expect to work through a problem. An AI project you cannot explain becomes a liability in that room.', srcLabel: 'Oxford Department of Computer Science', srcUrl: 'https://www.cs.ox.ac.uk/admissions/undergraduate/how_to_apply/personal-statement.html' },
      { stat: 'Age limits', h3: 'Check the tool\'s own age floor', p: 'Many AI tools set minimum ages in their terms, and several popular ones are 18 plus. Before a school student builds on a platform, check what its terms actually permit.', srcLabel: 'Our AI tool age guide', srcUrl: '/ai-tools-age-guide' }
    ],
    ideasTitle: 'The ladder',
    ideasSub: 'Each rung assumes the one below it. Skipping is the most common reason a project stalls in the middle and never finishes.',
    tiers: [
      {
        tag: 'Rung 1', h3: 'Your first trained model', note: 'Needs basic Python',
        ideas: [
          { h4: 'Handwritten digit classifier, then break it', p: 'Train on a standard dataset, then feed it your own handwriting and document exactly which digits it confuses and why.', chips: ['Python', 'Classification'], why: 'The standard exercise becomes original the moment you test it on data you produced.' },
          { h4: 'Spam or toxicity filter trained on real messages', p: 'Collect and label your own examples from a source you have permission to use, then compare a simple model against a keyword baseline.', chips: ['NLP', 'Baselines'], why: 'Comparing against a dumb baseline is what a scientist does. It is also often humbling.' },
          { h4: 'Predict something local from public data', p: 'Rainfall, exam results, transport reliability. Pick something in your own area, find the open data, and be honest about how weak the signal is.', chips: ['Regression', 'Open data'], why: 'Local questions have local context you can explain and a reader cannot Google.' },
          { h4: 'An image classifier for something you own', p: 'Your bookshelf, your plants, your recycling bin. Photograph it yourself, label it yourself, train, then test on new photos.', chips: ['Computer vision', 'Own data'], why: 'Own-data collection is the cheapest way to make an ordinary project genuinely yours.' }
        ]
      },
      {
        tag: 'Rung 2', h3: 'A model inside a working product', note: 'Needs rung 1 plus app basics',
        ideas: [
          { h4: 'A study assistant that admits when it does not know', p: 'Put a language model behind a subject-specific interface, and design what happens when it is unsure. That design is the project.', chips: ['LLM', 'UX of uncertainty'], why: 'Handling uncertainty well is a genuinely hard problem and a great interview topic.' },
          { h4: 'A camera tool that runs on a phone', p: 'Deploy a small model to a device rather than a server, and deal with the size and speed constraints that creates.', chips: ['On-device', 'Optimisation'], why: 'Constraints force real engineering decisions, and decisions are what you get asked about.' },
          { h4: 'An accessibility tool for one specific need', p: 'Speech to text for a classmate, image description for a relative, colour adjustment for a specific condition. Build for one named person.', chips: ['Accessibility', 'User testing'], why: 'A named user who kept using it outweighs a large abstract claim.' },
          { h4: 'A recommender trained on your own behaviour', p: 'Log your own reading or listening for months, then build something that predicts what you will pick next and measure whether it beats random.', chips: ['Recommenders', 'Evaluation'], why: 'You own the data, you know the ground truth, and the evaluation is honest.' },
          { h4: 'A pipeline that cleans a messy public dataset', p: 'Find a dataset everyone complains about, build the cleaning pipeline, publish it with documentation of every decision.', chips: ['Data engineering'], why: 'Unglamorous and genuinely useful. Other people using your pipeline is real validation.' }
        ]
      },
      {
        tag: 'Rung 3', h3: 'Research grade', note: 'Six to twelve months',
        ideas: [
          { h4: 'Build an evaluation set for an under-served language', p: 'Choose a language you speak that models handle badly, build a careful test set, evaluate several open models, and publish the method with the numbers.', chips: ['NLP', 'Evaluation'], why: 'You are qualified to judge the outputs in a way most researchers are not. That is a real edge.' },
          { h4: 'Reproduce a paper and document where it fails', p: 'Take a paper with released code, reproduce the headline result, then find the conditions under which it does not hold.', chips: ['Reproducibility'], why: 'Replication is real practice and failure conditions are genuinely novel findings.' },
          { h4: 'Measure bias in a model with a method you designed', p: 'Not a general essay about bias. A specific, measurable test on a specific model, with results and limitations stated.', chips: ['Fairness', 'Method design'], why: 'Designing the measurement is the research contribution. Say what your method cannot detect.' },
          { h4: 'A sensor plus model deployment that runs for months', p: 'Collect real-world data continuously, train on it, and report what changed as conditions changed over the deployment.', chips: ['Hardware', 'Longitudinal'], why: 'Long deployments produce drift, failures and surprises. All three make excellent interview material.' },
          { h4: 'Compare model families on a task nobody has benchmarked', p: 'Pick a narrow, real task, build the benchmark properly, and report which approach wins and under what conditions.', chips: ['Benchmarking'], why: 'A well-built benchmark is citable, and citation is external validation you did not ask for.' }
        ]
      }
    ],
    standardTitle: 'What a finished AI project must show',
    standardSub: 'These six are what turn a notebook into something worth submitting or discussing.',
    standard: [
      ['The data story', 'Where the data came from, how it was collected or licensed, and what is wrong with it. Every dataset has something wrong with it.'],
      ['A baseline to beat', 'What a simple non-AI approach scores. Without this, your accuracy number means nothing.'],
      ['A failure analysis', 'The cases where the model is wrong, grouped by pattern, with a hypothesis for why.'],
      ['A working demonstration', 'Runnable by someone else. Video, live link or executable, as MIT specifies for code projects.'],
      ['The repository', 'Version-controlled with real history, plus a README that lets a stranger reproduce your result.'],
      ['A stated limitation', 'What your project cannot do and should not be used for. Stating this makes everything else more credible.']
    ],
    timelineTitle: 'How long each rung takes',
    timelineSub: 'Honest estimates for a student working a few hours a week alongside school.',
    timeline: [
      ['Weeks 1 to 4', 'Python to the point of independence', 'Not syntax quizzes. Able to write, run and debug a small program without a video playing alongside.'],
      ['Weeks 5 to 10', 'Rung one, a first trained model', 'Train, evaluate, and understand what the evaluation is actually measuring.'],
      ['Months 3 to 5', 'Own data and a real evaluation', 'The step almost everyone skips, and the one that makes the project yours.'],
      ['Months 5 to 8', 'Rung two, wrapped in something usable', 'A person who is not you can run it and get a result without instructions.'],
      ['Months 8 to 12', 'Rung three, if the student wants it', 'Research-grade work. Optional, and not the right goal for every student.']
    ],
    programTitle: 'How we teach AI to school students',
    programSub: 'Live classes, small batches, and a real model the student trained rather than a notebook they ran.',
    programPitch: 'We start where the student actually is, not where a syllabus says they should be. The mentor sits alongside for the whole build, insists on a baseline and a failure analysis, and spends the final sessions asking the questions an interviewer would.',
    courses: ['python', 'ml', 'agent', 'gpt'],
    coursesTitle: 'AI classes, by how far up the ladder you are',
    coursesSub: 'Pick by what the student can already do. We will place them honestly if you are not sure.',
    programH3: 'A model the student trained, not a notebook they ran',
    programBullets: [
      'Placement on the ladder by what the student can already do',
      'A baseline computed before any model, so the numbers mean something',
      'Data collected or labelled by the student wherever the problem allows',
      'A written failure analysis, which is the part that reads as science',
      'Questioning at the end on how the model works and where it breaks'
    ],
    programCta: 'Find the right rung',
    feederNote: 'The usual entry points, depending on how much Python is already there.',
    pricingTitle: 'What AI classes cost',
    pricingNote: 'AI and machine learning classes are priced the same as every other subject we teach. No premium tier and no project surcharge.',
    pricingFoot: 'Prices are per month and shown per region. Compute for student projects runs on free tiers wherever possible, and we will tell you in advance if a project needs more.',
    formHint: 'Tell us what your child has built and what they are curious about. We reply within one business day with the rung we think they should start on.',
    railHeading: 'Not sure which rung applies?',
    railText: 'Message us with what they have done so far and we will place them honestly, including if the answer is to build fundamentals first.',
    assure: 'Your details are used only to reply to this enquiry and are never shared or sold. We are a coding and maths school and make no admissions promises.',
    proofCta: 'See more student AI builds',
    feeder: ['python', 'ml', 'master'],
    proofTitle: 'AI projects our students have shipped',
    proofSub: 'Real student builds published on Student Labs. Nothing here is invented.',
    proof: ['misti', 'nutrilife', 'bookdesk', 'hugselle'],
    faq: [
      ['What is a good AI project for a high school student?', 'One where the student collected or built the data themselves, compared the model against a simple baseline, and documented where it fails. A digit classifier tested on their own handwriting is more original than a complex model run from a tutorial.'],
      ['Does my child need to know Python before starting AI?', 'Yes, enough to write and debug a small program independently. Attempting machine learning before that produces copied notebooks the student cannot explain, which is worse than not doing it.'],
      ['What age can a student start AI projects?', 'Most students are ready for a first trained model once they have a few months of solid Python behind them. We teach ages ' + FACTS.ages + ' and pitch the work to the student rather than the birthday. Note that many AI platforms set their own minimum ages in their terms, several at 18 plus.'],
      ['Is using ChatGPT or Claude to build the project cheating?', 'Not inherently, and pretending students will not use them is unrealistic. The rule is that the student must be able to explain every line. If they cannot, the work is not theirs yet and an interview will expose it quickly.'],
      ['How is this different from your AI and ML projects page?', 'That page is aimed at building a portfolio for employment. This one is aimed at school-age students building for university applications and competitions, where a failure analysis and a defensible explanation matter more than a polished demo.'],
      ['How long does a serious AI project take?', 'A first trained model takes six to ten weeks alongside school. Something wrapped in a usable product takes five to eight months. Research-grade work takes eight to twelve, and if it is headed for a science fair, ISEF caps continuous research at twelve months.'],
      ['Do you teach this one to one?', 'Yes. One to one is the usual choice when there is a deadline. Group and mini batch options are also available and are listed under fees above.'],
      ['Which countries do you teach in?', 'We teach online and live to students across ' + FACTS.countries + ' countries, scheduled to your timezone.']
    ],
    related: ['passion', 'fair', 'portfolio', 'hired', 'labs', 'atlas'],
    itemList: 'AI project ideas for high school students',
    dataService: 'AI and ML Portfolio Program', dataSrc: 'ai-projects-for-high-school-students',
    formHeading: 'Tell us where your child is starting from',
    formPlaceholder: 'What have they built before, what interests them, and is there a deadline?'
  },

  // ======================================================================= 4
  {
    slug: 'science-fair-project-ideas-ai',
    crumb: 'Science fair AI',
    metaTitle: 'AI Science Fair Project Ideas That Follow the Actual Rules',
    metaDesc: 'AI science fair project ideas built around a testable question rather than an app demo, with the real ISEF rules: win an affiliated fair first, 12 month research cap, teams of up to three. Includes how to write the hypothesis.',
    h1: 'AI science fair projects built around a <span class="amber">question, not a demo.</span>',
    sub: 'The most common reason a strong AI build does badly at a science fair is that it is a product, and a fair is judging science. Same code, different framing, completely different result.',
    waText: 'Hi, I need help with an AI science fair project',
    trust: [['Since ' + FACTS.founded, 'Teaching AI and ML'], [FACTS.students, 'Students taught'], [FACTS.rating + ' / 5', FACTS.reviews + ' Google reviews']],
    panelHeading: 'This page is for you if',
    panel: ['Your child wants to enter a science fair with an AI project', 'You want to know the real qualification path to ISEF', 'You need a hypothesis, not just an app idea', 'You want to avoid the rule that disqualifies projects late'],
    capsule: [
      'An AI science fair project is judged as science, which means it needs a question, a method, controls and a result, not simply working software. Regeneron ISEF is not open entry: finalists qualify by winning a Society-affiliated fair, and projects may include no more than 12 months of continuous research. Teams are capped at three members.',
      'Modern Age Coders teaches students to build the model and, just as importantly, to design the experiment around it. To discuss a fair project, use the form below or message us on WhatsApp at +91 91233 66161.'
    ],
    tldr: [
      'A fair judges a question and a method. "I built an app" is not a question.',
      'ISEF is qualified into, not entered. Finalists come through 365 affiliated fairs across more than 60 countries.',
      'The research window is capped at 12 months of continuous research, so an early start does not mean an earlier start is always better.',
      'Team projects are limited to three members.',
      'The strongest school AI fair projects use data the student collected, and state clearly what the result does not prove.'
    ],
    verdictTitle: 'The rules people find out about too late',
    verdictSub: 'Every one of these has ended somebody\'s season. All are from the official rules.',
    evidence: [
      { stat: 'Qualify first', h3: 'ISEF is not open entry', p: 'Students in grades 9 to 12 must compete in and win through a Society-affiliated fair to earn a place. Finalists are drawn from 365 affiliated fairs in more than 60 countries and territories.', srcLabel: 'Society for Science, ISEF', srcUrl: 'https://www.societyforscience.org/isef/' },
      { stat: '12 months', h3: 'A hard cap on continuous research', p: 'Each project may include no more than 12 months of continuous research. Work stretching over several years has to be scoped and presented carefully against this rule.', srcLabel: 'Society for Science, rules for all projects', srcUrl: 'https://www.societyforscience.org/isef/international-rules/rules-for-all-projects/' },
      { stat: 'Max 3', h3: 'Team size is capped', p: 'Team projects may have no more than three members. Larger groups have to split the work into genuinely separate projects.', srcLabel: 'Society for Science, ISEF rules', srcUrl: 'https://www.societyforscience.org/isef/international-rules/' },
      { stat: 'Global', h3: 'It is genuinely international', p: 'The fair draws roughly 1,700 finalists, with a substantial majority of participating countries outside the United States, so students abroad have a real path in through their national or regional affiliate.', srcLabel: 'Society for Science, ISEF FAQ', srcUrl: 'https://www.societyforscience.org/isef/faq/' }
    ],
    ideasTitle: 'Fourteen AI fair projects with a real hypothesis',
    ideasSub: 'Each one is written as a question that can be answered wrongly. That is the test of whether it belongs at a fair.',
    tiers: [
      {
        tag: 'Category A', h3: 'Model behaviour questions', note: 'Cheap to run, strong science',
        ideas: [
          { h4: 'Does more training data help less than better labels?', p: 'Hold the model fixed. Compare a large noisy dataset against a smaller carefully labelled one, and measure where each wins.', chips: ['Controlled', 'Cheap'], why: 'A clean two-variable experiment with a genuinely uncertain answer. Judges like uncertainty.' },
          { h4: 'How much can you shrink a model before it breaks?', p: 'Progressively reduce a model and plot accuracy against size, identifying the point where performance collapses rather than declines.', chips: ['Compression'], why: 'Produces a curve, and a curve with a knee in it is a finding.' },
          { h4: 'Does image augmentation help on your own photographs?', p: 'Test whether standard augmentation techniques improve results on a dataset you collected, where the assumptions may not hold.', chips: ['Vision', 'Own data'], why: 'Testing a standard technique on non-standard data is a legitimate small research question.' },
          { h4: 'Which errors does the model make that a human never would?', p: 'Classify the failure cases and test whether human annotators make the same mistakes on the same inputs.', chips: ['Error analysis'], why: 'Comparing to human performance gives you a control group, which fairs reward.' },
          { h4: 'Does the model rely on the thing you think it does?', p: 'Occlude or remove parts of the input systematically and measure what actually drives the prediction.', chips: ['Interpretability'], why: 'Often produces a surprising answer, and surprise is what makes a judge remember a board.' }
        ]
      },
      {
        tag: 'Category B', h3: 'Applied questions with local data', note: 'You collect the data',
        ideas: [
          { h4: 'Can a phone camera classify local water quality indicators?', p: 'Collect samples with known measurements, photograph under controlled lighting, and test how well colour alone predicts the reading.', chips: ['Vision', 'Fieldwork'], why: 'Local, testable, and the controls for lighting are exactly the rigour judges look for.' },
          { h4: 'Does air quality near your school follow the pattern the public sensor claims?', p: 'Deploy your own sensors, compare against the nearest official station, and quantify the disagreement.', chips: ['Hardware', 'Comparison'], why: 'Comparing against an authoritative source is a proper method with a clear result.' },
          { h4: 'Can leaf photographs predict disease earlier than visible symptoms?', p: 'Photograph the same plants over weeks, label by eventual outcome, and test whether the model detects it before a person can.', chips: ['Longitudinal'], why: 'The time dimension gives you a genuine claim: earlier than the human baseline, or not.' },
          { h4: 'Does a model trained on one accent work on yours?', p: 'Test a speech model against recordings in your local accent and quantify the performance gap.', chips: ['Speech', 'Fairness'], why: 'A measurable, socially meaningful gap that you are well placed to document.' },
          { h4: 'Can sound alone identify local bird species?', p: 'Record in your area, label with expert help, and report which species are separable and which are not.', chips: ['Audio', 'Ecology'], why: 'Ecology fields love this, and the confusions between similar species are the interesting result.' }
        ]
      },
      {
        tag: 'Category C', h3: 'Method and fairness questions', note: 'Design the measurement',
        ideas: [
          { h4: 'Does the order of examples change what a language model answers?', p: 'Hold the content fixed, vary the order, and measure how much the answer moves.', chips: ['LLM', 'Sensitivity'], why: 'A simple, rigorous test of a property people assume is stable.' },
          { h4: 'Can a model detect its own uncertainty usefully?', p: 'Measure whether a model\'s confidence score actually predicts whether it is right, across many cases.', chips: ['Calibration'], why: 'Calibration is a real research area and the experiment is within reach at school level.' },
          { h4: 'Does a fairness fix reduce bias or move it?', p: 'Apply a published mitigation technique and measure whether the disparity shrinks overall or shifts to a different group.', chips: ['Fairness'], why: 'The honest answer is often uncomfortable, and honest uncomfortable answers score well.' },
          { h4: 'How little labelled data do you actually need?', p: 'Plot performance against labelled examples to find the point of diminishing returns for your specific task.', chips: ['Data efficiency'], why: 'Practical, quantitative, and the resulting curve is a genuine contribution for that task.' }
        ]
      }
    ],
    standardTitle: 'What a fair board needs that an app demo does not',
    standardSub: 'The framing differences that decide how a judge scores the same underlying work.',
    standard: [
      ['A falsifiable question', 'Written so that a specific result would prove you wrong. If no outcome could disprove it, it is not a hypothesis.'],
      ['A control or baseline', 'What you are comparing against. Without a comparison there is no result, only a number.'],
      ['A documented method', 'Detailed enough that another student could repeat it and get the same answer.'],
      ['Data you can account for', 'Where every data point came from, how many you discarded, and why. Judges ask this.'],
      ['Statistics, not vibes', 'Repeat runs, variation reported, and a clear statement of whether the difference you found is meaningful.'],
      ['Stated limitations', 'What your result does not prove. Volunteering this is one of the strongest signals available to a school student.']
    ],
    timelineTitle: 'A season, working backwards',
    timelineSub: 'Fair dates vary by region and affiliate, so confirm your local fair\'s calendar first and count back from there.',
    timeline: [
      ['Before you start', 'Find your affiliated fair', 'Locate the Society-affiliated fair that serves your region and read its rules and dates. This decides everything downstream.'],
      ['Month 1', 'Write the question and the method', 'Before any code. If the question cannot be answered wrongly, rewrite it.'],
      ['Months 2 to 4', 'Collect data and build the pipeline', 'Usually the longest phase, and the one students underestimate most.'],
      ['Months 5 to 7', 'Run the experiment properly', 'Repeat runs, record variation, and resist changing the question to match the result.'],
      ['Month 8', 'Write it up and build the board', 'Method, results, limitations. The board is a summary of the work, not the work itself.'],
      ['Final weeks', 'Rehearse being questioned', 'Judges interview you. Practise answering "how do you know?" about every claim on the board.']
    ],
    programTitle: 'We teach the experiment, not just the model',
    programSub: 'Most coding classes stop when the code runs. A fair project is only starting at that point.',
    programPitch: 'Our mentors work with the student on the question first, then the build, then the analysis. The insistence on a baseline, repeat runs and a written limitation is where a fair project separates from a school assignment.',
    courses: ['python', 'ml', 'data', 'master'],
    coursesTitle: 'Classes that cover the model and the method',
    coursesSub: 'A fair project needs data handling and experimental discipline as much as it needs code.',
    programH3: 'The question comes before the code',
    programBullets: [
      'A hypothesis written so that some result would prove it wrong',
      'A method recorded before the data arrives, not after',
      'Controls and repeat runs, because one run is an anecdote',
      'Results written up with the limitations stated plainly',
      'Rehearsal for judging, where every claim gets a "how do you know?"'
    ],
    programCta: 'Discuss a fair project',
    feederNote: 'Students usually need this much before a fair project is realistic.',
    pricingTitle: 'What it costs to prepare',
    pricingNote: 'Fair mentoring runs inside normal classes at the normal fee. We do not charge a competition premium.',
    pricingFoot: 'Prices are per month and shown per region. Fair entry fees, materials and travel are set by the fair, not by us, and are never paid to us.',
    formHint: 'Tell us which fair and which date. We reply within one business day, and if the deadline is too close for honest work we will say so.',
    railHeading: 'Deadline already close?',
    railText: 'Message us with the date. Scoping a fair project down to fit the time left is a conversation worth having early.',
    assure: 'Your details are used only to reply to your enquiry and are never shared or sold. We mentor students through their own work and never produce a project for them.',
    proofCta: 'Look at more student builds',
    feeder: ['python', 'ml', 'master'],
    proofTitle: 'What our students build',
    proofSub: 'Real projects from Modern Age Coders students on Student Labs.',
    proof: ['guardianx', 'hairsync', 'lifespan', 'skycast'],
    faq: [
      ['How does a student qualify for ISEF?', 'By competing in and winning through a Society-affiliated local, regional, state or national fair. Finalists come from 365 affiliated fairs across more than 60 countries. There is no route that skips the affiliated fair.'],
      ['Can international students compete at ISEF?', 'Yes. The affiliate network spans more than 60 countries and territories, and a large share of finalists come from outside the United States. Find your national or regional affiliate first.'],
      ['How long can the research take?', 'A project may include no more than 12 months of continuous research. Longer programmes of work need to be scoped so that the entered project falls inside that window.'],
      ['Can students work in teams?', 'Yes, up to three members per team project.'],
      ['What makes an AI project suitable for a science fair rather than a hackathon?', 'A fair judges a question, a method, controls and a result. A hackathon judges a working build. The same model can serve both, but the fair version needs a hypothesis that could have been proved wrong.'],
      ['Does the project need to be original research?', 'It needs a question you answered yourself with a method you can defend. Testing an established technique on data you collected in your own area is legitimate and often stronger than an over-ambitious novel claim.'],
      ['What if the hypothesis turns out to be wrong?', 'That is a result. Judges respond well to a clean experiment with a negative result and an honest discussion. Changing the question after seeing the data is the thing to avoid.'],
      ['Can Modern Age Coders help with a fair project?', 'We teach the coding and the experimental design, live and with a mentor. We do not do the project for the student, and a project a student cannot explain would defeat the purpose.']
    ],
    related: ['aiproj', 'passion', 'research', 'portfolio', 'labs', 'teach'],
    itemList: 'AI science fair project ideas',
    dataService: 'Science Fair Project Mentoring', dataSrc: 'science-fair-project-ideas-ai',
    formHeading: 'Tell us about the fair and the deadline',
    formPlaceholder: 'Which fair, what date, and what is your child interested in investigating?'
  },

  // ======================================================================= 5
  {
    slug: 'hackathons-for-high-school-students',
    crumb: 'Hackathons',
    metaTitle: 'Hackathons for High School Students | Which Ones Accept You and What To Do After',
    metaDesc: 'Hackathons for high school students: which events accept school-age participants, the real Congressional App Challenge rules, and how to turn a weekend build into something that still counts twelve months later.',
    h1: 'Hackathons for high school students, and what to do <span class="amber">the week after.</span>',
    sub: 'A hackathon is the cheapest way to find out whether your child can build under pressure. It is also, on its own, one of the weakest lines on an application. The difference is entirely in what happens next.',
    waText: 'Hi, I want help preparing for a hackathon',
    trust: [['Since ' + FACTS.founded, 'Teaching students to build'], [FACTS.students, 'Students taught'], [FACTS.countries, 'Countries']],
    panelHeading: 'This page is for you if',
    panel: ['Your child wants to enter their first hackathon', 'You want to know which events accept school students', 'You want the weekend build to actually lead somewhere', 'You are outside the US and wondering what applies'],
    capsule: [
      'A hackathon is a time-boxed event, usually a weekend, where teams build working software from scratch. School-age students are eligible for many of them: MLH events accept students at any level of study including middle and high school, and the Congressional App Challenge is specifically for middle and high school students, though it requires US residency.',
      'Modern Age Coders prepares students for these events and, more usefully, helps them develop the weekend build into something finished afterwards. To talk it through, use the form below or message us on WhatsApp at +91 91233 66161.'
    ],
    tldr: [
      'Many hackathons do accept school students. MLH defines student attendees to include middle school, high school and non-traditional learners.',
      'The Congressional App Challenge is the most accessible formal competition for US school students, but it is US residents only.',
      'Technovation runs a global season for girls and gender-diverse students aged roughly 8 to 18, ending in a spring submission.',
      'A hackathon result on its own is a participation line. Continuing the project afterwards is what converts it into evidence.',
      'The demo video matters more than the code at most of these events. Congressional App Challenge submissions turn heavily on a short demonstration video.'
    ],
    verdictTitle: 'Who can actually enter what',
    verdictSub: 'Eligibility is where most families waste a season. These are the published rules.',
    evidence: [
      { stat: 'School OK', h3: 'MLH: school students are included', p: 'MLH defines student attendees as enrolled at any level of study, at traditional institutions including middle school and high school, at non-traditional ones such as bootcamps or home school, or graduated within the past year.', srcLabel: 'MLH member event guidelines', srcUrl: 'https://github.com/MLH/mlh-policies/blob/main/member-event-guidelines.md' },
      { stat: 'US only', h3: 'Congressional App Challenge: residency required', p: 'Open to middle and high school students who are US residents at the time of submission, with no citizenship requirement. Students compete in the district where they live or attend school, in teams of up to four.', srcLabel: 'Congressional App Challenge rules', srcUrl: 'https://www.congressionalappchallenge.us/students/rules/' },
      { stat: '1 to 3 min', h3: 'The demo video is the submission', p: 'For the Congressional App Challenge the most critical component is a demonstration video of one to three minutes. The app may be in any language for any platform.', srcLabel: 'Congressional App Challenge', srcUrl: 'https://www.congressionalappchallenge.us/' },
      { stat: 'Global', h3: 'Technovation: worldwide, ages 8 to 18', p: 'Technovation Girls runs a global season for students aged 8 to 18 who identify as female, trans, nonbinary or gender nonconforming, with divisions by age and a submission that includes the code and any AI training work.', srcLabel: 'Technovation eligibility', srcUrl: 'https://iridescentsupport.zendesk.com/hc/en-us/articles/115002714613-Eligibility-for-participation-students' }
    ],
    ideasTitle: 'What to build, and what to build it into',
    ideasSub: 'Weekend-scoped ideas that have an obvious second life, so the project does not die on Sunday night.',
    tiers: [
      {
        tag: 'Weekend', h3: 'Buildable in 24 to 36 hours', note: 'Scope ruthlessly',
        ideas: [
          { h4: 'A tool that solves a problem at your own school', p: 'Lost property, room booking, revision scheduling. The judges understand the problem instantly and you can demo it with real data.', chips: ['Web', 'Real problem'], why: 'Continues naturally: deploy it for actual use the following term.' },
          { h4: 'An accessibility overlay for a site everyone uses', p: 'Larger text, better contrast, keyboard navigation, applied to a site that badly needs it.', chips: ['Extension'], why: 'Continues into a published extension with real installs.' },
          { h4: 'A single-purpose data visualisation', p: 'Take one public dataset and answer one question with one clear chart, built well rather than broadly.', chips: ['Data viz'], why: 'Continues into a proper analysis with the method written up.' },
          { h4: 'A small game with one original mechanic', p: 'Not a clone with a reskin. One mechanic nobody at the event has seen, executed completely.', chips: ['Game'], why: 'Continues into a published, playable release with feedback from players.' },
          { h4: 'A model wrapped in the simplest possible interface', p: 'One model, one input box, one honest output including what it does when it is unsure.', chips: ['AI', 'Minimal UI'], why: 'Continues into the evaluation and failure analysis you had no time for on the weekend.' }
        ]
      },
      {
        tag: 'The week after', h3: 'Turning it into evidence', note: 'This is the part that counts',
        ideas: [
          { h4: 'Fix everything you faked for the demo', p: 'Every hackathon build has hardcoded values and dead buttons. Replace them one by one and note each in the commit history.', chips: ['Follow through'], why: 'The commit history after the event is proof of persistence, which is what a weekend cannot show.' },
          { h4: 'Get five people to use it who were not at the event', p: 'Watch them. Write down where they stopped. Fix those five things.', chips: ['Users'], why: 'Turns "we built it in a weekend" into "people use it", which is a completely different claim.' },
          { h4: 'Write the README you skipped', p: 'What it does, how to run it, what is not finished. Honest and specific.', chips: ['Docs'], why: 'Makes the repository legible to anyone who looks, including an admissions reader.' },
          { h4: 'Re-record the demo properly', p: 'The rushed event video is not the one to keep. Record a clean one to three minute demonstration.', chips: ['Demo video'], why: 'This is literally the submission format the Congressional App Challenge asks for.' },
          { h4: 'Enter it somewhere that has a deadline', p: 'A district challenge, a school competition, an app store review queue. External deadlines finish projects that self-discipline does not.', chips: ['Deadline'], why: 'An external gate produces a dated, verifiable result.' }
        ]
      }
    ],
    standardTitle: 'How to actually do well at one',
    standardSub: 'Six things that separate teams who finish from teams who demo an error screen.',
    standard: [
      ['Decide the demo first', 'Write the ninety second demo script before writing code. Build only what the script needs.'],
      ['Cut the scope in half, then again', 'Every experienced team underbuilds deliberately. Finished and small beats ambitious and broken.'],
      ['Assign roles in the first hour', 'Who builds, who integrates, who presents. Ambiguity costs more hours than any bug.'],
      ['Freeze six hours early', 'Stop building. Integrate, test on a fresh machine, and rehearse. This is where most teams lose.'],
      ['Record the demo before you present', 'Live demos fail. A recorded fallback has saved more presentations than any amount of debugging.'],
      ['Keep the repository public and honest', 'Commit throughout rather than in one dump. The history is the part that has value afterwards.']
    ],
    timelineTitle: 'From first event to something that counts',
    timelineSub: 'Roughly how a productive year looks, built around events rather than around a vague intention.',
    timeline: [
      ['Month 0', 'Get to build-ready', 'Able to make something small work end to end. Without this a hackathon is a spectating experience.'],
      ['Month 1', 'First event, expect a mess', 'The first one is for learning the format. Finishing anything at all is a win.'],
      ['Month 2', 'Continue one build for four weeks', 'Pick the least broken thing you made and take it to genuinely finished.'],
      ['Months 3 to 6', 'Second and third events', 'Now with a working method: scope small, freeze early, record the demo.'],
      ['Months 6 to 10', 'Enter something with a real deadline', 'A district or national challenge with published rules and a submission date.'],
      ['Month 12', 'One project, properly finished', 'Repository, demo video, users, README. The hackathons were the training, this is the artefact.']
    ],
    programTitle: 'Preparation, and the follow-through afterwards',
    programSub: 'The weekend is easy to sign up for. The four weeks afterwards are where the value actually is.',
    programPitch: 'We prepare students for the format, scoping, splitting work, freezing early, and then we work with them on the part almost everyone skips: taking the weekend prototype to something finished, documented and demonstrable.',
    courses: ['python', 'vibe', 'ml', 'agent'],
    coursesTitle: 'Get build-ready before the event',
    coursesSub: 'A hackathon assumes you can already make something small work end to end. These classes get a student there.',
    programH3: 'The four weeks after the weekend',
    programBullets: [
      'Practice at scoping to a ninety second demo before writing code',
      'Team habits: roles in the first hour, integration long before the deadline',
      'A recorded fallback demo, because live demos fail at the worst moment',
      'Then the follow-through, replacing everything that was faked to ship',
      'A clean rebuild of the demo video to the one to three minute format'
    ],
    programCta: 'Prepare for an event',
    feederNote: 'The build ability an event assumes you already have.',
    pricingTitle: 'What preparation costs',
    pricingNote: 'Event preparation and the follow-up work happen in regular classes at the regular fee.',
    pricingFoot: 'Prices are per month and shown per region. Hackathon entry is usually free and is arranged by you directly with the organiser.',
    formHint: 'Tell us the event and the date. We reply within one business day with what is realistic to have working by then.',
    railHeading: 'Event this month?',
    railText: 'Message us with the date and we will tell you honestly whether preparation time is enough to be useful.',
    assure: 'Your details are used only to answer your enquiry and are never shared or sold. We coach students to build their own entries and never build them.',
    proofCta: 'See what students finished',
    feeder: ['python', 'vibe', 'ml'],
    proofTitle: 'Projects our students finished',
    proofSub: 'Real builds from Modern Age Coders students, published on Student Labs.',
    proof: ['doodle', 'babu', 'typing', 'simon'],
    faq: [
      ['Can high school students join hackathons?', 'Yes for many events. MLH defines student attendees to include middle school and high school students, as well as home school and other non-traditional learners, and students who graduated within the past year.'],
      ['What is the Congressional App Challenge?', 'A competition run through US congressional districts for middle and high school students. Students may enter individually or in teams of up to four, apps can be in any language for any platform, and the critical submission component is a demonstration video of one to three minutes.'],
      ['Can students outside the US enter the Congressional App Challenge?', 'No. All competing students must be US residents at the time of submission, although there is no citizenship requirement. Students compete in the district where they live or attend school.'],
      ['Are there global options for students outside the US?', 'Yes. MLH runs events internationally and online, and Technovation runs a worldwide season for students aged 8 to 18 who identify as female, trans, nonbinary or gender nonconforming.'],
      ['Do hackathon wins help with admissions?', 'A placement helps a little, participation alone helps very little. What converts a hackathon into real evidence is continuing the build afterwards until it has users, documentation and a proper demonstration.'],
      ['What should a first-time team build?', 'Something small enough to finish, solving a problem the judges recognise immediately. Write the ninety second demo script first and build only what that script requires.'],
      ['How do we prepare?', 'Be able to build something small end to end before the event, practise scoping aggressively, and rehearse the demo. We run this preparation with students and then work with them on the follow-through.'],
      ['Does my child need a team?', 'Most events allow individual entries, but a team of two or three is usually more productive. The Congressional App Challenge allows teams of up to four.']
    ],
    related: ['passion', 'extras', 'portfolio', 'aiproj', 'labs', 'teach'],
    itemList: 'Hackathons and competitions for high school students',
    dataService: 'Hackathon Preparation', dataSrc: 'hackathons-for-high-school-students',
    formHeading: 'Tell us about the event',
    formPlaceholder: 'Which event, what date, and what has your child built before?'
  },

  // ======================================================================= 6
  {
    slug: 'how-to-build-a-coding-portfolio',
    crumb: 'Coding portfolio',
    metaTitle: 'How To Build a Coding Portfolio That Holds Up Under Questioning',
    metaDesc: 'How to build a coding portfolio for university applications: the eight steps, the exact standard MIT asks for, what UK tutors probe at interview, and how Waterloo scores its admission form. Written for school and college students.',
    h1: 'How to build a coding portfolio that <span class="amber">holds up under questioning.</span>',
    sub: 'A portfolio is not a gallery of screenshots. It is a set of claims about what you can do, and every one of them can be tested by a single follow-up question. Here is how to build one where that goes well.',
    waText: 'Hi, I want help building a coding portfolio',
    trust: [['Since ' + FACTS.founded, 'Teaching students to build'], [FACTS.students, 'Students taught'], [FACTS.rating + ' / 5', FACTS.reviews + ' Google reviews']],
    panelHeading: 'This page is for you if',
    panel: ['Your child has projects but nothing pulled together', 'You want to know what a reviewer actually opens', 'You are applying somewhere that scores a portfolio or form', 'You want the work to survive an interview'],
    capsule: [
      'A coding portfolio is a small set of finished projects, each with a version-controlled repository, a working demonstration and a clear written explanation. MIT asks code portfolio submissions for the codebase, ideally version-controlled, plus a working demonstration by video, live link or executable. Two or three genuinely finished projects beat ten unfinished ones.',
      'Modern Age Coders works with students to take a project all the way to that standard and then rehearses them on defending it. To talk about where your child is now, use the form below or message us on WhatsApp at +91 91233 66161.'
    ],
    tldr: [
      'Two or three finished projects, not ten started ones. Reviewers open the first two and stop.',
      'MIT\'s stated requirement for code is the codebase plus a working demonstration. Build to that even if you never apply there.',
      'Version control history is part of the evidence. A repository created in one commit says something you cannot unsay.',
      'In the UK there is no portfolio slot at all for computer science, so the portfolio\'s job is to feed the personal statement and survive the interview.',
      'Waterloo requires an Admission Information Form for all its Computer Science programs and evaluates on grades and the form together, so in Canada this material is genuinely scored.'
    ],
    verdictTitle: 'Where a portfolio is actually read',
    verdictSub: 'The slot varies enormously by country. Build to the strictest standard and it works everywhere.',
    evidence: [
      { stat: 'Codebase + demo', h3: 'United States: an optional formal slot', p: 'MIT accepts a Maker Portfolio through SlideRoom. Code projects must include the codebase, ideally version-controlled, and a working demonstration. MIT states portfolios are truly optional and should only be submitted when the work is significant and relevant.', srcLabel: 'MIT Admissions, Creative portfolios', srcUrl: 'https://mitadmissions.org/apply/firstyear/portfolios-additional-material/' },
      { stat: 'Scored', h3: 'Canada: a required form that counts', p: 'The Admission Information Form is required for admission to all programs in Waterloo\'s Cheriton School of Computer Science, and the Faculty of Mathematics evaluates applicants on both grades and the form, considering courses, non-academic activities and math contests.', srcLabel: 'Waterloo Cheriton School of Computer Science', srcUrl: 'https://cs.uwaterloo.ca/future-undergraduate-students/applying-admissions/admission-information-form' },
      { stat: 'No slot', h3: 'United Kingdom: it lives in the conversation', p: 'Oxford states extra-curricular activities do not form part of the selection criteria in any subject, while super-curricular work including programming experience helps build the picture, and advises using something you have actually done to show commitment.', srcLabel: 'Oxford Department of Computer Science', srcUrl: 'https://www.cs.ox.ac.uk/admissions/undergraduate/how_to_apply/personal-statement.html' },
      { stat: '4,000 chars', h3: 'UCAS: the written version of your portfolio', p: 'From 2026 entry the personal statement is three questions within a 4,000 character total and a 350 character minimum per section, and the third question is specifically about preparation outside education.', srcLabel: 'Guide to the 2026 UCAS personal statement', srcUrl: 'https://www.theprofs.co.uk/student-resources/university-applications/how-to-answer-the-new-ucas-personal-statement-questions-for-2026-entry/' }
    ],
    ideasTitle: 'The eight steps',
    ideasSub: 'In order. Steps one to four are the work, five to eight are what makes the work legible to somebody else.',
    tiers: [
      {
        tag: 'Build', h3: 'Steps 1 to 4: the work itself', note: 'Most of the time goes here',
        ideas: [
          { h4: '1. Choose two or three projects, and cut the rest', p: 'Pick the ones you can explain best, not the ones that took longest. Everything else comes out of the portfolio entirely.', chips: ['Curation'], why: 'A weak third project drags down the two strong ones. Reviewers average, they do not take the maximum.' },
          { h4: '2. Take each one to genuinely finished', p: 'Finished means someone else can run it, it handles being used wrongly, and it does not have a dead button in the main flow.', chips: ['Completion'], why: 'Unfinished work invites the one question you cannot answer: why did you stop?' },
          { h4: '3. Use version control from the first commit', p: 'Real history, meaningful messages, work spread over the period you claim to have spent on it.', chips: ['Git'], why: 'MIT asks for version-controlled code specifically. The history is evidence the work happened over time.' },
          { h4: '4. Get one real user per project', p: 'Somebody unrelated to you who used it and told you something. Fix at least one thing because of what they said.', chips: ['Users'], why: 'Changing your design because of feedback is the clearest signal of engineering maturity available.' }
        ]
      },
      {
        tag: 'Present', h3: 'Steps 5 to 8: making it legible', note: 'Two weekends, high return',
        ideas: [
          { h4: '5. Record a demonstration for each project', p: 'One to three minutes. Show it working, show what happens when the input is wrong, and narrate what you built rather than what it does.', chips: ['Video'], why: 'A working demonstration is an explicit requirement for MIT code submissions and it is what everyone else wants anyway.' },
          { h4: '6. Write a README a stranger can follow', p: 'What it is, how to run it, what is not implemented. Assume the reader has three minutes and no context.', chips: ['Docs'], why: 'The README is what a reviewer reads before deciding whether to look at your code at all.' },
          { h4: '7. Write the build log', p: 'A short document per project: what you tried, what failed, what you would do differently. Written as you go, not reconstructed afterwards.', chips: ['Build log'], why: 'This is the document that makes the whole portfolio credible, because nobody manufactures dead ends.' },
          { h4: '8. Rehearse the defence out loud', p: 'Have someone technical question you for thirty minutes per project. Every stumble is a task on next week\'s list.', chips: ['Interview'], why: 'In the UK this is the only form the portfolio takes. Elsewhere it is still where a strong application is confirmed.' }
        ]
      }
    ],
    standardTitle: 'The six checks before you call it done',
    standardSub: 'Run every project through these. Anything failing two or more is not ready to be in the portfolio.',
    standard: [
      ['Can a stranger run it?', 'Hand the README to someone who has never seen it and watch them try. Do not help. Fix what stopped them.'],
      ['Is there a working demonstration?', 'Video, live link or executable. If the only artefact is a screenshot, the project is not demonstrable.'],
      ['Does the history look like the story?', 'If you claim four months of work, the commit log should show four months of work.'],
      ['Can you explain every line?', 'Including anything an AI assistant wrote. If you cannot explain it, either learn it or remove it.'],
      ['Does it fail gracefully?', 'Empty input, no network, wrong file. Handling failure is the difference between a demo and software.'],
      ['Is there one honest limitation stated?', 'Every project has one. Writing it down makes every other claim more believable.']
    ],
    timelineTitle: 'A realistic build schedule',
    timelineSub: 'For a student working a few hours a week alongside school, starting from being able to code a little.',
    timeline: [
      ['Months 1 to 2', 'Project one, small and complete', 'Deliberately modest. The goal is to experience finishing something, which most students never have.'],
      ['Months 3 to 5', 'Project two, with a real user', 'Bigger, and put in front of someone. Iterate on what they struggled with.'],
      ['Months 6 to 8', 'Project three, the ambitious one', 'Only now, once finishing is a habit rather than a hope.'],
      ['Month 9', 'Documentation and demos', 'READMEs, build logs and recorded demonstrations for all three. Two focused weekends.'],
      ['Month 10', 'Defence rehearsal', 'Thirty minutes of hostile questioning per project. Fix what breaks.'],
      ['Month 11', 'Freeze and submit', 'Stop adding. A frozen, coherent portfolio beats one still being edited the night before.']
    ],
    programTitle: 'What we do with students on this',
    programSub: 'Almost every student we meet has started more projects than they have finished. The work is in the finishing.',
    programPitch: 'A mentor takes the student through the whole arc: choosing what is worth keeping, taking it to a standard a stranger can run, writing the documentation as they go, and then sitting on the other side of the table asking the questions an interviewer will ask.',
    courses: ['python', 'vibe', 'master', 'data'],
    coursesTitle: 'Classes that produce portfolio-grade work',
    coursesSub: 'Each one ends in something built, documented and defensible rather than a certificate.',
    programH3: 'Two or three projects, actually finished',
    programBullets: [
      'An honest cut of what belongs in the portfolio and what does not',
      'Each surviving project taken to runnable by a stranger',
      'READMEs and build logs written during the work, not reconstructed after',
      'Demonstrations recorded to the one to three minute standard',
      'Thirty minutes of hostile questioning per project, then a fix list'
    ],
    programCta: 'Review what exists so far',
    feederNote: 'If there is not much built yet, these come first.',
    pricingTitle: 'What portfolio work costs',
    pricingNote: 'Portfolio work is taught in normal classes at normal fees. There is no separate portfolio package and no per-project charge.',
    pricingFoot: 'Prices are per month and shown per region. Hosting a demo and a public repository is free on the services students normally use.',
    formHint: 'Tell us what exists and what state it is in. We reply within one business day with which projects are worth finishing and which to drop.',
    railHeading: 'Want the work looked at first?',
    railText: 'Send us a repository link. An honest read on what is worth keeping is usually the most useful first conversation.',
    assure: 'Your details are used only to reply to your enquiry and are never shared or sold. We help students finish their own work, and we do not write code for a portfolio.',
    proofCta: 'See finished student work',
    feeder: ['python', 'vibe', 'master'],
    proofTitle: 'Portfolios our students have built',
    proofSub: 'Real projects from Modern Age Coders students, published on Student Labs.',
    proof: ['pracy', 'freshtrack', 'hugselle', 'skycast'],
    faq: [
      ['What should be in a coding portfolio?', 'Two or three finished projects, each with a version-controlled repository, a working demonstration of one to three minutes, a README a stranger can follow, and a short build log of decisions and dead ends. MIT specifically asks code submissions for the codebase plus a working demonstration.'],
      ['How many projects should a portfolio have?', 'Two or three. Reviewers rarely get past the first two, and a weak extra project lowers the average rather than adding to it.'],
      ['Does a portfolio matter for UK university applications?', 'There is no portfolio slot for computer science. Oxford states extra-curricular activities are not part of the selection criteria, though subject-related work helps build the picture. The portfolio\'s job is to give you something concrete for the personal statement and to survive the interview.'],
      ['Does it matter in Canada?', 'At Waterloo, yes. The Admission Information Form is required for all Cheriton School of Computer Science programs, and the Faculty of Mathematics evaluates on grades and the form together, including non-academic activities and math contests.'],
      ['Should projects be on GitHub?', 'Yes. Version control is part of what is being assessed, and MIT asks for the codebase to be version-controlled where possible. The commit history is evidence in its own right.'],
      ['What if my child used AI to write some of the code?', 'That is common and not disqualifying. The requirement is that they can explain every line they submit. Anything they cannot explain should be learned properly or removed, because a single follow-up question will find it.'],
      ['Is a personal website necessary?', 'Helpful, not essential. A clean repository with a good README does most of the work. A site is a convenience for the reader rather than evidence in itself.'],
      ['How long does building a portfolio take?', 'About ten to eleven months at a few hours a week, starting from basic coding ability. Three projects, then a month of documentation and a month of rehearsal.'],
      ['Do you help students build one?', 'Yes, that is what our Portfolio Program does: live mentoring through the build, documentation as you go, and mock technical questioning at the end. We do not write the code and we do not offer admissions consulting.']
    ],
    related: ['passion', 'extras', 'aiproj', 'hired', 'labs', 'atlas'],
    howto: true,
    dataService: 'Portfolio Program', dataSrc: 'how-to-build-a-coding-portfolio',
    formHeading: 'Tell us what your child has built so far',
    formPlaceholder: 'What projects exist, what state are they in, and what is the deadline?'
  },

  // ======================================================================= 7
  {
    slug: 'summer-research-programs-coding',
    crumb: 'Summer research',
    metaTitle: 'Summer Research Programs in Coding and AI | What They Ask For and How To Be Ready',
    metaDesc: 'Summer research programs in computing for high school students, what selective programs such as RSI, MIT PRIMES and SSP actually ask for, and the twelve month preparation that makes an application credible.',
    h1: 'Summer research programs in computing, and how to <span class="amber">actually be ready for one.</span>',
    sub: 'The selective programs reject most applicants, and the rejections are rarely about enthusiasm. They are about whether the application shows someone who can work on an open question without being told what to do next.',
    waText: 'Hi, I want to prepare for a summer research program',
    trust: [['Since ' + FACTS.founded, 'Teaching AI and ML'], [FACTS.students, 'Students taught'], [FACTS.countries, 'Countries']],
    panelHeading: 'This page is for you if',
    panel: ['Your child is aiming at a selective research program', 'You want to know what the applications actually ask', 'You need a preparation plan, not a list of names', 'You want to know what is realistic and what is not'],
    capsule: [
      'Summer research programs in computing place high school students on open research problems, usually with a mentor and a written output. The most selective, such as the Research Science Institute, take roughly 100 students from around the world each year, and RSI states that prior research experience is not required to apply. What applications reward is demonstrated curiosity and the ability to think critically about an open question.',
      'Modern Age Coders prepares students for that standard through real project work with a mentor. To talk about a plan, use the form below or message us on WhatsApp at +91 91233 66161.'
    ],
    tldr: [
      'RSI selects around 100 students from the US and abroad each summer, and explicitly does not require prior research experience.',
      'MIT PRIMES is a year-long research program in mathematics and theoretical computer science, with a national option for students outside the Boston area.',
      'SSP builds its curriculum around a central research project, with teams of three completing real data collection and analysis over about 39 days.',
      'Selection itself is the credential. The research output is a bonus on top of having been chosen.',
      'These are extremely competitive. Build a plan where the preparation is worthwhile even if no program accepts your child, because that is the likely outcome for most applicants.'
    ],
    verdictTitle: 'What the selective programs actually say',
    verdictSub: 'From the programs\' own published descriptions rather than from consultancy summaries.',
    evidence: [
      { stat: '~100', h3: 'RSI: small, international, and no prior research needed', p: 'A six-week residential research program held at MIT and run by the Center for Excellence in Education, selecting roughly 100 students from the US and around the world. RSI states prior research experience is not required and that curiosity and critical thinking matter most.', srcLabel: 'Center for Excellence in Education, RSI', srcUrl: 'https://www.cee.org/programs/research-science-institute' },
      { stat: 'Year-long', h3: 'MIT PRIMES: computing and mathematics research', p: 'A free, year-long research program in mathematics and theoretical computer science where selected students work on research problems with MIT mentors, with PRIMES USA available as a national option beyond the Boston area.', srcLabel: 'MIT Admissions, summer programs', srcUrl: 'https://mitadmissions.org/apply/prepare/summer/' },
      { stat: 'Teams of 3', h3: 'SSP: a real project, start to finish', p: 'The Summer Science Program organises its curriculum around a central research project, with participants working in teams of three over roughly 39 days, taking and analysing original data.', srcLabel: 'Summer Science Program overview', srcUrl: 'https://www.sciencefair.io/guide/50-stem-summer-programs-for-students' },
      { stat: 'Free entry', h3: 'A cheaper proving ground first', p: 'USACO is free, open to anyone from any country with an account, and runs four divisions from Bronze to Platinum with promotion on score. It is a low-cost way to produce an objective result before applying anywhere selective.', srcLabel: 'USACO', srcUrl: 'https://usaco.org/' }
    ],
    ideasTitle: 'How to become a credible applicant',
    ideasSub: 'What the strongest applications have in common, and what a student can build in the twelve months before applying.',
    tiers: [
      {
        tag: 'Foundation', h3: 'The twelve months before applying', note: 'Do these in order',
        ideas: [
          { h4: 'Reach genuine independence in one language', p: 'Able to design, write and debug a non-trivial program without following anything. This is the floor, not the goal.', chips: ['Python', 'Fluency'], why: 'Research mentors have no time to teach basics. Applications make this obvious quickly.' },
          { h4: 'Produce one objective, external result', p: 'A USACO division promotion, a placement at an affiliated fair, or merged open-source contributions.', chips: ['USACO', 'External'], why: 'A dated, checkable result is worth far more than a self-description of enthusiasm.' },
          { h4: 'Read three papers properly and write about them', p: 'Not skim. Understand the method well enough to explain what the authors did and what you doubt about it.', chips: ['Reading'], why: 'Programs are selecting for people who can engage with an open question, and this is how you show it.' },
          { h4: 'Do one small piece of original work', p: 'Replicate a result, build an evaluation set, or measure something nobody has measured. Small and real.', chips: ['Original'], why: 'Even a modest original contribution answers the question the application is really asking.' }
        ]
      },
      {
        tag: 'Application', h3: 'What the application has to show', note: 'Written months in advance',
        ideas: [
          { h4: 'A question you find genuinely interesting', p: 'Specific enough that someone could disagree with you about it. "I love AI" is not a research interest.', chips: ['Specificity'], why: 'Specificity is the cheapest way to look like a researcher rather than an enthusiast.' },
          { h4: 'Evidence you work without being pushed', p: 'A long-running project with a commit history, or a self-directed piece of work nobody assigned.', chips: ['Self-direction'], why: 'Residential research is unstructured. Programs are screening for people who cope with that.' },
          { h4: 'A teacher who can speak to how you think', p: 'Someone who has seen you struggle with a hard problem and can describe how you handled it, not just your grade.', chips: ['References'], why: 'A reference describing your reasoning is worth several describing your marks.' },
          { h4: 'Honesty about what you do not know', p: 'Applications that overclaim get discounted. Stating the edge of your knowledge reads as maturity.', chips: ['Calibration'], why: 'Researchers value calibration, and the people reading these applications are researchers.' }
        ]
      },
      {
        tag: 'Fallback', h3: 'If nothing accepts you', note: 'The likely outcome, and it is fine',
        ideas: [
          { h4: 'Run your own research project anyway', p: 'Pick the question you would have worked on, find a mentor or a teacher, and do it over the summer regardless.', chips: ['Self-directed'], why: 'The output is nearly as good, and the initiative is arguably a better story.' },
          { h4: 'Contribute to an open research codebase', p: 'Many research groups publish code. Reproducing results and fixing issues is real participation.', chips: ['Open source'], why: 'Public, dated, and reviewed by researchers, which is much of what the program would have given you.' },
          { h4: 'Enter a competition with a deadline', p: 'An affiliated science fair or a computing olympiad gives you the external structure the program would have provided.', chips: ['Competition'], why: 'The deadline does the work that the residential programme would have done.' }
        ]
      }
    ],
    standardTitle: 'What research-level work looks like at school age',
    standardSub: 'The difference between a good project and something that reads as research.',
    standard: [
      ['An open question', 'Something without a known answer you could look up. If a tutorial exists for it, it is a project rather than research.'],
      ['A method someone could repeat', 'Written down before the results, in enough detail that another student could follow it exactly.'],
      ['Controls and comparisons', 'What you measured against. A number with nothing to compare it to is not a finding.'],
      ['Honest statistics', 'Repeat runs, variation reported, and no claim of a difference you cannot support.'],
      ['A written output', 'A paper or a structured report. Research programs expect writing, and writing is where the thinking gets tested.'],
      ['Stated limitations', 'What the work does not show. This is the section that separates research from advocacy.']
    ],
    timelineTitle: 'A two-year run-up',
    timelineSub: 'Applications for the most selective programs usually close in the winter before the summer, so the work has to be visible well before then.',
    timeline: [
      ['24 months out', 'Get fluent', 'Independent coding ability. Everything else depends on it and nothing substitutes for it.'],
      ['18 months out', 'Get one external result', 'USACO, an affiliated fair, or merged open-source work. Something dated and checkable.'],
      ['12 months out', 'Start a real project', 'Long enough running that its history is visible by the time you apply.'],
      ['9 months out', 'Read and write about papers', 'Three papers understood properly, with your own written response to each.'],
      ['6 months out', 'Prepare the application', 'Applications for the winter deadlines. Ask referees early and give them the material.'],
      ['Summer', 'Do the work either way', 'If accepted, excellent. If not, run the project yourself. The preparation was the point.']
    ],
    programTitle: 'How we prepare students for this',
    programSub: 'We cannot get anyone selected. We can make sure the application describes someone who could do the work.',
    programPitch: 'Our mentors take students through a real project with an open question at the centre, insist on method and limitations being written down, and work on the technical reading that makes a research application credible rather than enthusiastic.',
    courses: ['ml', 'gpt', 'master', 'college'],
    coursesTitle: 'The technical base research programs assume',
    coursesSub: 'Selective programs expect a student who can already build and read. These are the classes that get them there.',
    programH3: 'Preparation that pays off either way',
    programBullets: [
      'An open question chosen carefully, since it shapes everything after',
      'Technical reading, so papers become usable rather than intimidating',
      'A long-running project whose history is visible by application season',
      'Method and limitations written down, the way a research report needs',
      'Work that stands on its own if no program says yes, which is the usual case'
    ],
    programCta: 'Build a preparation plan',
    feederNote: 'The technical base a research application takes for granted.',
    pricingTitle: 'What preparation costs',
    pricingNote: 'Research preparation is taught in normal classes at normal fees. The selective programs themselves have their own costs, or none at all.',
    pricingFoot: 'Prices are per month and shown per region. Several of the programs named on this page are free to attend, and none of their fees are paid to us.',
    formHint: 'Tell us which programs and which year group. We reply within one business day with a plan that is worth doing even if no program accepts.',
    railHeading: 'Want a realistic read?',
    railText: 'Message us. These programs reject most strong applicants, and a plan that only pays off on acceptance is a bad plan.',
    assure: 'Your details are used only to answer your enquiry and are never shared or sold. We teach and mentor. We do not write applications or promise selection.',
    proofCta: 'See student project work',
    feeder: ['ml', 'master', 'python'],
    proofTitle: 'Student work in this direction',
    proofSub: 'Real projects from Modern Age Coders students, published on Student Labs.',
    proof: ['guardianx', 'bookdesk', 'beautifulmind', 'lumenfx'],
    faq: [
      ['What are the best summer research programs for coding?', 'The Research Science Institute is a six-week residential program at MIT selecting around 100 students worldwide. MIT PRIMES runs year-long research in mathematics and theoretical computer science with a national option. The Summer Science Program builds its curriculum around a central research project in teams of three.'],
      ['Does my child need research experience to apply to RSI?', 'No. RSI states prior research experience is not required, and that what matters most is curiosity, motivation to learn and the ability to think critically about scientific or mathematical questions.'],
      ['Can international students apply?', 'RSI selects students from the US and around the world. Individual programs differ, so check each one\'s eligibility before building a plan around it.'],
      ['How competitive are these programs?', 'Extremely. With roughly 100 places at RSI globally, most strong applicants are not selected. Plan so the preparation is worthwhile regardless of the outcome, because that is the realistic case.'],
      ['What should we do if no program accepts?', 'Run the project anyway. Pick the question, find a mentor or teacher, and do the work over the summer. Contributing to an open research codebase is another route to much of the same experience.'],
      ['What is a cheaper first step?', 'USACO is free and open to anyone from any country with an account, with four divisions and promotion on score. It produces an objective, dated result long before any selective application.'],
      ['When are the applications due?', 'Most selective summer programs close in the winter before the summer they run. Work backwards from that and assume referees need several weeks of notice.'],
      ['How does Modern Age Coders help?', 'We teach the technical foundation and mentor students through a real project with an open question, including method, limitations and technical reading. We do not write applications and we do not offer admissions consulting.']
    ],
    related: ['extras', 'fair', 'aiproj', 'portfolio', 'labs', 'atlas'],
    itemList: 'Summer research programs in coding and AI',
    dataService: 'Research Preparation', dataSrc: 'summer-research-programs-coding',
    formHeading: 'Tell us what your child is aiming for',
    formPlaceholder: 'Which programs, what year are they in, and what have they built or studied so far?'
  }
];

// ---- template ------------------------------------------------------------
function renderPage(p) {
  const url = `${BASE}/${p.slug}`;
  const mt = escAttr(p.metaTitle);
  const md = escAttr(p.metaDesc);

  const breadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/` },
      { '@type': 'ListItem', position: 2, name: 'Courses', item: `${BASE}/courses` },
      { '@type': 'ListItem', position: 3, name: p.crumb, item: url }
    ]
  };

  const webPage = {
    '@context': 'https://schema.org', '@type': 'WebPage', name: strip(p.metaTitle), url,
    description: p.metaDesc, inLanguage: 'en',
    isPartOf: { '@type': 'WebSite', name: 'Modern Age Coders', url: `${BASE}/` },
    publisher: {
      '@type': 'Organization', name: 'Modern Age Coders', url: `${BASE}/`,
      foundingDate: String(FACTS.founded), email: 'contact@modernagecoders.com', telephone: '+91-91233-66161'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: p.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } }))
  };

  const extraSchema = [];
  if (p.itemList) {
    const items = [];
    p.tiers.forEach(t => t.ideas.forEach(i => items.push(i)));
    extraSchema.push({
      '@context': 'https://schema.org', '@type': 'ItemList', name: p.itemList, url,
      numberOfItems: items.length,
      itemListElement: items.map((i, n) => ({ '@type': 'ListItem', position: n + 1, name: strip(i.h4), description: strip(i.p) }))
    });
  }
  if (p.howto) {
    const steps = [];
    p.tiers.forEach(t => t.ideas.forEach(i => steps.push(i)));
    extraSchema.push({
      '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to build a coding portfolio', url,
      description: p.metaDesc,
      step: steps.map((i, n) => ({ '@type': 'HowToStep', position: n + 1, name: strip(i.h4).replace(/^\d+\.\s*/, ''), text: strip(i.p) }))
    });
  }

  const trustItems = p.trust.map(([n, l]) => `                        <div class="ap-trust__item"><span class="ap-trust__num">${n}</span><span class="ap-trust__label">${l}</span></div>`).join('\n');
  const panelItems = p.panel.map(t => `                        <li>${I.check}<span>${t}</span></li>`).join('\n');
  const tldrItems = p.tldr.map(t => `                    <li>${t}</li>`).join('\n');
  const evCards = p.evidence.map(e => `                <div class="ap-ev-card">
                    <span class="ap-ev-card__stat">${e.stat}</span>
                    <h3>${e.h3}</h3>
                    <p>${e.p}</p>
                    <a class="src" href="${e.srcUrl}"${e.srcUrl.startsWith('http') ? ' target="_blank" rel="noopener nofollow"' : ''}>Source: ${e.srcLabel}</a>
                </div>`).join('\n');
  const tierBlocks = p.tiers.map(t => {
    const ideas = t.ideas.map(i => `                    <div class="ap-idea">
                        <h4>${i.h4}</h4>
                        <p>${i.p}</p>
                        <div class="ap-idea__meta">${i.chips.map(c => `<span class="ap-chip">${c}</span>`).join('')}</div>
                        <p class="ap-idea__why">${i.why}</p>
                    </div>`).join('\n');
    return `            <div class="ap-tier">
                <div class="ap-tier__head">
                    <span class="ap-tier__tag">${t.tag}</span>
                    <h3>${t.h3}</h3>
                    <span class="ap-tier__note">${t.note}</span>
                </div>
                <div class="ap-idea-grid">
${ideas}
                </div>
            </div>`;
  }).join('\n');
  const stdCards = p.standard.map(([h, d], i) => `                <div class="ap-std-card"><span class="ap-std-card__idx">${String(i + 1).padStart(2, '0')}</span><h3>${h}</h3><p>${d}</p></div>`).join('\n');
  const tlSteps = p.timeline.map(([w, h, d]) => `                <div class="ap-tl-step"><div class="ap-tl-step__when">${w}</div><div><h3>${h}</h3><p>${d}</p></div></div>`).join('\n');
  const proofCards = p.proof.map(k => { const [h, d] = PROOF[k]; return `                <div class="ap-proof"><h3>${h}</h3><p>${d}</p></div>`; }).join('\n');
  const faqItems = p.faq.map(([q, a]) => `                <details><summary>${q}</summary><p>${a}</p></details>`).join('\n');
  const relCards = p.related.map(k => { const [href, h, d, go] = REL[k]; return `                <a class="ap-related-card" href="${href}"><h3>${h}</h3><p>${d}</p><span class="go">${go}</span></a>`; }).join('\n');

  return `<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-N8BM164YJP"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'G-N8BM164YJP');
        gtag('config', 'AW-16910316353');
    </script>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>${mt}</title>
    <meta name="title" content="${mt}">
    <meta name="description" content="${md}">
    <meta name="author" content="Modern Age Coders">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <link rel="canonical" href="${url}">
    <link rel="alternate" type="text/markdown" href="/src/pages/${p.slug}.md" title="Markdown version for AI agents">

    <!-- Open Graph -->
    <meta property="og:type" content="article">
    <meta property="og:url" content="${url}">
    <meta property="og:title" content="${mt}">
    <meta property="og:description" content="${md}">
    <meta property="og:image" content="${BASE}/images/og-modern-age-coders.png">
    <meta property="og:site_name" content="Modern Age Coders">
    <meta property="og:locale" content="en_US">

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="${url}">
    <meta name="twitter:title" content="${mt}">
    <meta name="twitter:description" content="${md}">
    <meta name="twitter:image" content="${BASE}/images/og-modern-age-coders.png">

    <!-- Favicon -->
    <link rel="icon" href="/favicon.ico" type="image/x-icon">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
    <meta name="theme-color" content="#FBF8F2">

    <!-- Meta Pixel -->
    <script src="/js/meta-pixel.js" defer></script>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..700;1,9..144,400..600&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap">

    <!-- Theme -->
    <link rel="stylesheet" href="/css/editorial-theme.css?v=20260626g">
    <link rel="stylesheet" href="/css/admissions-projects.css?v=20260805a">
    <script src="/js/ux-enhancements.js" defer></script>
    <script src="/js/components-loader.js" defer></script>
    <script src="/js/callback-modal.js" defer></script>

    <!-- Structured data -->
    <script type="application/ld+json">
${JSON.stringify(breadcrumb, null, 4)}
    </script>
    <script type="application/ld+json">
${JSON.stringify(webPage, null, 4)}
    </script>
    <script type="application/ld+json">
${JSON.stringify(faqSchema, null, 4)}
    </script>${extraSchema.map(s => `
    <script type="application/ld+json">
${JSON.stringify(s, null, 4)}
    </script>`).join('')}
</head>

<body class="ap-page editorial">
    <a href="#main" class="skip-link">Skip to main content</a>

    <div id="nav-placeholder"></div>

    <main id="main">

        <!-- HERO -->
        <section class="section hero-section ap-hero">
            <div class="ap-hero__grid">
                <div>
                    <div class="ap-eyebrow-row">
                        <a href="/courses" class="eyebrow" style="text-decoration:none;">Courses</a>
                        <span class="eyebrow" style="color:var(--muted);">/ ${p.crumb}</span>
                    </div>
                    <h1 class="ap-hero__title">${p.h1}</h1>
                    <p class="ap-hero__sub">${p.sub}</p>
                    <div class="ap-cta-row">
                        <a href="#lead-form" class="ap-btn ap-btn--primary">Talk to a mentor ${I.arrow}</a>
                        <a href="https://wa.me/919123366161?text=${encodeURIComponent(p.waText)}" target="_blank" rel="noopener" class="ap-btn ap-btn--wa">${I.wa} WhatsApp us</a>
                    </div>
                    <div class="ap-trust">
${trustItems}
                    </div>
                </div>
                <aside class="ap-hero__panel">
                    <h2>${p.panelHeading}</h2>
                    <ul>
${panelItems}
                    </ul>
                </aside>
            </div>
        </section>

${courseStrip(p)}
        <!-- ANSWER CAPSULE -->
        <section class="section">
            <div class="ap-capsule">
                <p class="ap-capsule__label">In short</p>
                <p>${p.capsule[0]}</p>
                <p>${p.capsule[1]}</p>
            </div>
        </section>

        <!-- TL;DR -->
        <section class="section">
            <div class="ap-tldr">
                <h2>The short version</h2>
                <ul>
${tldrItems}
                </ul>
            </div>
        </section>

        <!-- EVIDENCE -->
        <section class="section section--wide">
            ${eyebrowCenter('The evidence')}
            <h2 class="section-title">${p.verdictTitle}</h2>
            <p class="section-subtitle">${p.verdictSub}</p>
            <div class="ap-evidence-grid">
${evCards}
            </div>
        </section>

        <!-- IDEAS -->
        <section class="section section--wide">
            ${eyebrowCenter('The list')}
            <h2 class="section-title">${p.ideasTitle}</h2>
            <p class="section-subtitle">${p.ideasSub}</p>
${tierBlocks}
        </section>

        <!-- STANDARD -->
        <section class="section section--wide">
            ${eyebrowCenter('The standard')}
            <h2 class="section-title">${p.standardTitle}</h2>
            <p class="section-subtitle">${p.standardSub}</p>
            <div class="ap-standard">
${stdCards}
            </div>
        </section>

        <!-- TIMELINE -->
        <section class="section">
            ${eyebrowCenter('Timing')}
            <h2 class="section-title">${p.timelineTitle}</h2>
            <p class="section-subtitle">${p.timelineSub}</p>
            <div class="ap-timeline">
${tlSteps}
            </div>
        </section>

${programSection(p)}
${pricingSection(p)}
        <!-- PROOF -->
        <section class="section section--wide">
            ${eyebrowCenter('Proof')}
            <h2 class="section-title">${p.proofTitle}</h2>
            <p class="section-subtitle">${p.proofSub}</p>
            <div class="ap-proof-grid">
${proofCards}
            </div>
            <p style="text-align:center;margin-top:1.6rem;"><a href="/student-labs" class="ap-btn ap-btn--ghost">${p.proofCta} ${I.arrow}</a></p>
        </section>

        <!-- LEAD FORM -->
        <section class="section" id="lead-form">
            <div class="lead">
                <div class="lead__form">
                    <h2>${p.formHeading}</h2>
                    <p class="lead__hint">${p.formHint}</p>
                    <form id="leadForm" data-service="${p.dataService}" data-src="${p.dataSrc}" novalidate>
                        <div class="lead__row">
                            <div class="lead__field">
                                <label for="lf-name">Your name</label>
                                <input type="text" id="lf-name" name="name" placeholder="Parent or student name" autocomplete="name" required>
                                <span class="lead__err" data-err="name"></span>
                            </div>
                            <div class="lead__field">
                                <label for="lf-year">Student year or grade</label>
                                <input type="text" id="lf-year" name="year" placeholder="e.g. Grade 10, Year 12">
                            </div>
                        </div>
                        <div class="lead__row">
                            <div class="lead__field">
                                <label for="lf-email">Email</label>
                                <input type="email" id="lf-email" name="email" placeholder="you@example.com" autocomplete="email" required>
                                <span class="lead__err" data-err="email"></span>
                            </div>
                            <div class="lead__field">
                                <label for="lf-phone">Phone / WhatsApp</label>
                                <input type="tel" id="lf-phone" name="phone" placeholder="With country code" autocomplete="tel" required>
                                <span class="lead__err" data-err="phone"></span>
                            </div>
                        </div>
                        <div class="lead__row">
                            <div class="lead__field">
                                <label for="lf-country">Country</label>
                                <input type="text" id="lf-country" name="country" placeholder="Where you are based" autocomplete="country-name">
                            </div>
                            <div class="lead__field">
                                <label for="lf-deadline">Deadline, if any</label>
                                <input type="text" id="lf-deadline" name="deadline" placeholder="e.g. January 2027">
                            </div>
                        </div>
                        <div class="lead__field">
                            <label for="lf-message">What does your child want to build?</label>
                            <textarea id="lf-message" name="message" placeholder="${p.formPlaceholder}" required></textarea>
                            <span class="lead__err" data-err="message"></span>
                        </div>
                        <button type="submit" class="ap-btn ap-btn--primary lead__submit"><span class="btn-text">Send enquiry</span></button>
                        <div class="lead__feedback"></div>
                    </form>
                </div>
                <div class="lead__rail">
                    <h3>${p.railHeading}</h3>
                    <p>${p.railText}</p>
                    <div class="lead__contact">
                        <a href="https://wa.me/919123366161?text=${encodeURIComponent(p.waText)}" target="_blank" rel="noopener">
                            <span class="ico">${I.wa}</span>
                            <span><span class="k">WhatsApp</span>+91 91233 66161</span>
                        </a>
                        <a href="tel:+919123366161">
                            <span class="ico">${I.phone}</span>
                            <span><span class="k">Call</span>+91 91233 66161</span>
                        </a>
                        <a href="mailto:contact@modernagecoders.com?subject=${encodeURIComponent(p.dataService + ' enquiry')}">
                            <span class="ico">${I.mail}</span>
                            <span><span class="k">Email</span>contact@modernagecoders.com</span>
                        </a>
                    </div>
                    <p class="lead__assure">${p.assure}</p>
                </div>
            </div>
        </section>

        <!-- FAQ -->
        <section class="section">
            ${eyebrowCenter('Questions')}
            <h2 class="section-title">Frequently asked</h2>
            <div class="ap-faq">
${faqItems}
            </div>
        </section>

        <!-- RELATED -->
        <section class="section section--wide">
            ${eyebrowCenter('Keep reading')}
            <h2 class="section-title">Related guides</h2>
            <div class="ap-related-grid">
${relCards}
            </div>
        </section>

    </main>

    <div id="footer-placeholder"></div>

    <script src="/js/admissions-lead-form.js" defer></script>
    <script src="/js/pricing-data.generated.js"></script>
    <script src="/js/international-pricing.js"></script>
</body>

</html>
`;
}

function renderMd(p) {
  const url = `${BASE}/${p.slug}`;
  const title = p.metaTitle.replace(/&/g, 'and');
  const tldr = p.tldr.map(t => `- ${strip(t)}`).join('\n');
  const ev = p.evidence.map(e => `- **${e.h3}** (${e.stat}): ${strip(e.p)} Source: ${e.srcLabel}, ${e.srcUrl}`).join('\n');
  const tiers = p.tiers.map(t => {
    const ideas = t.ideas.map(i => `- **${strip(i.h4)}**: ${strip(i.p)} Why it holds up: ${strip(i.why)}`).join('\n');
    return `### ${t.tag}: ${t.h3} (${t.note})\n\n${ideas}`;
  }).join('\n\n');
  const std = p.standard.map(([h, d]) => `- **${h}**: ${d}`).join('\n');
  const tl = p.timeline.map(([w, h, d]) => `- **${w} - ${h}**: ${d}`).join('\n');
  const proof = p.proof.map(k => { const [h, d] = PROOF[k]; return `- **${h.replace(/&amp;/g, 'and')}**: ${d}`; }).join('\n');
  const faq = p.faq.map(([q, a]) => `### ${q}\n\n${a}`).join('\n\n');

  return `---
title: "${title}"
description: "${p.metaDesc.replace(/"/g, "'")}"
canonical: ${url}
source: src/pages/${p.slug}.html
---

> ${strip(p.capsule[0])}

# ${strip(p.h1)}

${strip(p.sub)}

## The short version

${tldr}

## ${p.verdictTitle}

${ev}

## ${p.ideasTitle}

${tiers}

## ${p.standardTitle}

${std}

## ${p.timelineTitle}

${tl}

## How Modern Age Coders helps

${p.programPitch}

Our Portfolio Program pairs a student with a mentor for a full build: version control from day one, a working demo, a written build log, and a mock technical interview where the student defends the work. Students who are not ready for a full project usually start with one of our regular courses first.

We are a coding and maths school. We do not offer admissions consulting, we do not write applications, and we do not promise admissions outcomes.

## Fees

Fees depend on where the student is based, and the page shows only the rate that
applies to the visitor. Quote the row that matches the learner, never both.

- **Students outside India**: ${fmt(PRICES.international.group, 'USD')} per month for group classes, ${fmt(PRICES.international.personal, 'USD')} per month one to one. The mini batch tier is not sold outside India.
- **Students in India**: ${fmt(PRICES.india.group, 'INR')} group, ${fmt(PRICES.india.miniBatch, 'INR')} mini batch, ${fmt(PRICES.india.personal, 'INR')} one to one, per month.

Project work happens inside regular classes, so there is no separate portfolio charge. Full pricing: ${BASE}/pricing

## Student projects

${proof}

More at ${BASE}/student-labs

## FAQ

${faq}

## Contact

- WhatsApp or call: +91 91233 66161
- Email: contact@modernagecoders.com
- Or send your enquiry through the form at ${url.replace(BASE, '')}

## About Modern Age Coders

Live online coding and maths classes since ${FACTS.founded}, taught to ${FACTS.students} students across ${FACTS.countries} countries, ages ${FACTS.ages}. Rated ${FACTS.rating} across ${FACTS.reviews} Google reviews.
`;
}

// ---- main ----------------------------------------------------------------
let count = 0;
for (const p of PAGES) {
  fs.writeFileSync(path.join(OUT, `${p.slug}.html`), renderPage(p), 'utf8');
  fs.writeFileSync(path.join(OUT, `${p.slug}.md`), renderMd(p), 'utf8');
  count++;
  console.log('  wrote', p.slug + '.html', '+', p.slug + '.md');
}
console.log(`\nDone: ${count} pages.\n`);

console.log('--- _redirects lines (insert ABOVE the /* catch-all) ---');
for (const p of PAGES) {
  console.log(`/${p.slug} /src/pages/${p.slug}.html 200`);
  console.log(`/${p.slug}.md /src/pages/${p.slug}.md 200`);
}

console.log('\n--- netlify.toml blocks ---');
for (const p of PAGES) {
  console.log(`[[redirects]]\n  from = "/${p.slug}"\n  to = "/src/pages/${p.slug}.html"\n  status = 200\n`);
  console.log(`[[redirects]]\n  from = "/${p.slug}.md"\n  to = "/src/pages/${p.slug}.md"\n  status = 200\n`);
}

console.log('\n--- sitemap <url> blocks ---');
for (const p of PAGES) {
  console.log(`  <url>\n    <loc>${BASE}/${p.slug}</loc>\n    <lastmod>2026-08-05</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.85</priority>\n  </url>`);
}
