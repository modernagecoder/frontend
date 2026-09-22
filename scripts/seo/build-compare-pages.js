#!/usr/bin/env node
/**
 * Keyword Ledger 2026-27, actions 12 and 17: two hand-specified pages on the compare-pages
 * system (src/css/compare-pages.css, the system /online-coding-classes-cost and
 * /best-online-coding-classes-for-kids-2026 use).
 *
 *   live-vs-recorded-coding-classes   action 17: P20 "Live vs recorded coding classes for kids,
 *                                      which is better?" returned no brand on any engine (prompt run
 *                                      2026-09-22); comparison pages earn 21.5 clicks per page.
 *   coding-classes-for-adults         action 12: the adult hub the brief at
 *                                      seo/superseo-2026-09/06-content-brief.md specifies; nine adult
 *                                      spokes exist and link up to nothing; "coding bootcamp for
 *                                      seniors 2026" 374 impr @7.4 with no adult page behind it.
 *
 * Brand facts from scripts/brand-facts.json (asserted), prices as data-price anchors only
 * (npm run pricing:apply stamps them and adds the scripts), no prices in FAQ text, no em
 * dashes, every link checked against the tree, course cards with real thumbnails as the first
 * section after the answer. Real reviews and projects are copied from the block the cost page
 * already carries (verified Wall of Love names), never written here.
 *
 * Then: wire-page.js, generate-static-md, pricing:apply, pricing:verify, rendered check.
 *   node scripts/seo/build-compare-pages.js [slug ...]
 */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');
const facts = require(path.join(ROOT, 'scripts', 'brand-facts.json'));
if (facts.reviews !== 547 || facts.students !== '10,000+' || facts.founded !== 2020 || facts.batchSizes.group !== '5–10') throw new Error('brand-facts.json changed; re-read before building');
const BATCH = '5 to 10';
const MINI = '3 to 4';
const PD = facts.priorityDemo;
const BASE = 'https://learn.modernagecoders.com';
const esc = (s) => String(s).replace(/&(?!(amp|lt|gt|quot|#\d+|#x[0-9a-f]+|middot|nbsp);)/gi, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const strip = (s) => String(s).replace(/<[^>]+>/g, '').replace(/&middot;/g, '·').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();

// real social proof block (reviews + projects), copied from the cost page
const costPage = fs.readFileSync(path.join(ROOT, 'src', 'pages', 'online-coding-classes-cost.html'), 'utf8');
const msuStart = costPage.indexOf('<style>\n/* real social proof');
const msuEnd = costPage.indexOf('</main>');
if (msuStart === -1 || msuEnd === -1) throw new Error('social proof block not found on the cost page');
const MSU = costPage.slice(msuStart, msuEnd);
if (!/Shradha Saraf|Ritu Kedia/.test(MSU)) throw new Error('social proof block no longer carries the verified names');

const P = (k) => '<span data-price="' + k + '">' + ({ 'coding.india.group': '₹1,499', 'coding.india.miniBatch': '₹2,999', 'coding.india.personal': '₹4,999' })[k] + '</span>';
const PC = (k) => '<span data-price="' + k + '" data-price-derive="perClass">' + ({ 'coding.india.group': '₹187', 'coding.india.miniBatch': '₹375', 'coding.india.personal': '₹1,250' })[k] + '</span>';

const PAGES = {
  'live-vs-recorded-coding-classes': {
    title: 'Live vs Recorded Coding Classes for Kids: Which Is Better?',
    description: 'Live vs recorded coding classes for kids, compared honestly: attention, feedback, completion, cost per hour and what the child keeps, and when each format wins.',
    ogTitle: 'Live vs recorded coding classes for kids, compared honestly',
    ogDescription: 'Six formats, one table, and the cases where a recording is the right choice. Our own format and fee stated on the page.',
    crumb: ['Pricing', '/pricing'], crumbName: 'Live vs recorded coding classes',
    kicker: 'Format guide &middot; updated September 2026',
    h1: 'Live vs recorded coding classes for kids: which is better?',
    lead: 'For a child learning to code for the first time, a live class with a teacher who can see their screen wins, and it is not close. A recorded course wins in three specific cases: a self-driven teenager revising a tool they already use, a family testing whether the interest is real before paying anyone, and a budget that has to be near zero. This page lays out the difference by what actually happens in the hour, so you can pick the format that fits your child rather than the one with the better advert.',
    ctas: [['Try a free live class', '/book-demo'], ['Jump to the comparison table', '#table']],
    answerTag: 'The 20-second answer',
    answer: '<strong>Live</strong> means a teacher is on screen while your child codes and reacts to what they do; <strong>recorded</strong> means the teaching happened once, to a camera, and the child works alone. The first is expensive to run and is priced per month; the second costs the provider nothing after the first sale and is priced once. For a beginner under about 13, choose live in a small batch of ' + BATCH + ' or 1-on-1. For a teenager who already codes and just needs a specific tool, a good recorded course plus someone to ask questions to is a fair choice. Everything below is the detail behind those two sentences.',
    coursesH2: 'The live courses this page is comparing against',
    coursesLede: 'Every one of these runs as a live class of ' + BATCH + ' children or 1-on-1, one hour, with the same mentor all term. They are here so you can see what a live format actually contains before you weigh it against a recording.',
    courses: [
      { href: '/courses/scratch-programming-complete-course', img: '/images/scratch-kids.webp', alt: 'Scratch coding for kids course thumbnail', code: 'Ages 6 to 12 / first course', h3: 'Scratch Coding for Kids', p: 'Zero to real games in three to four months. Every project is built live with the mentor watching the child\'s screen.' },
      { href: '/courses/python-ai-kids-masterclass', img: '/images/python-kids.webp', alt: 'Python and AI for kids course thumbnail', code: 'Ages 9 to 12 / first typed code', h3: 'Python and AI for Kids', p: 'Turtle art, tiny games and a first AI project. Typed code needs a person to catch the missing colon; this is where live earns its fee.' },
      { href: '/courses/python-complete-masterclass-teens', img: '/images/python-teens.webp', alt: 'Python for teens course thumbnail', code: 'Ages 13 to 18 / the full course', h3: 'Python for Teens', p: 'Beginner to advanced with objects, files and a project of the teen\'s own. The course a self-driven teen might compare with a recorded one.' },
      { href: '/courses/full-stack-web-development-teens-masterclass', img: '/images/web-dev-teens.webp', alt: 'Full stack web development for teens course thumbnail', code: 'Ages 13 to 18 / deployed project', h3: 'Full Stack Web Development for Teens', p: 'React and Node, ending with a site on a live link. Debugging a real deployment is the part recorded courses skip.' },
    ],
    sections: [
      { type: 'banner', id: 'formats', eyebrow: 'Six formats', h2: 'What "live" and "recorded" actually cover', lede: 'The two words hide six different products. The batch size and whether anyone watches the child code matter more than the label.', items: [
        ['Live 1-on-1', 'One teacher, one child', 'the most attention per hour and the highest fee; best for a specific goal or a child who needs the room to themselves'],
        ['Live small batch', BATCH + ' children, one teacher', 'the teacher still sees every screen; children learn from each other\'s questions; the fee is a fraction of 1-on-1'],
        ['Live large cohort', '20 to 100 in a webinar', 'live in name; the teacher cannot see any screen, questions go to a chat box, and the child is effectively watching a recording that cannot be paused'],
        ['Recorded, self-paced', 'Video lessons, no teacher', 'cheap or free, available at 6 am on a Sunday, and abandoned by most children within weeks because nobody notices when they stop'],
        ['Recorded plus mentor call', 'Videos, a weekly check-in', 'a fair middle ground for teens; the check-in is where the learning is confirmed, so ask how long it is and who runs it'],
        ['School coding club', 'One adult, a whole class', 'often free and often the child\'s first exposure; rarely a place to get unstuck on their own project'],
      ] },
      { type: 'table', id: 'table', eyebrow: 'Side by side', h2: 'Live vs recorded, on the things that decide whether a child learns', lede: 'Seven rows, judged from the child\'s side of the screen rather than the provider\'s. The middle column is a live class of ' + BATCH + ', which is what we run, so read that column as ours.', headers: ['', 'Recorded, self-paced', 'Live small batch (' + BATCH + ')', 'Live 1-on-1'], rows: [
        ['Who notices when the child is stuck', 'Nobody, until a parent checks', 'The teacher, within the minute, on the child\'s own screen', 'The teacher, immediately'],
        ['How a bug gets fixed', 'Rewind the video and hope the mistake is the same one', 'The teacher reads the child\'s code and asks a question that leads them to it', 'Same, with the whole hour available for it'],
        ['Pace', 'The child\'s own, which for most children means stopping', 'The batch\'s pace, with the teacher adjusting per child', 'Entirely the child\'s'],
        ['What keeps them coming back', 'Willpower', 'A fixed time, classmates who will ask what they built, and a teacher expecting them', 'A fixed time and a teacher expecting them'],
        ['Completion', 'Low for children; the course is finished by the parent, not the child', 'High, because the class happens whether or not the child felt like it', 'High'],
        ['Cost per hour of teaching', 'Near zero after the first sale, which is why it is cheap', 'A teacher\'s hour divided by ' + BATCH + '; ours is ' + PC('coding.india.group') + ' per live class', 'A teacher\'s full hour; ours is ' + PC('coding.india.personal') + ' per private class'],
        ['What the child keeps', 'A certificate of completion, sometimes', 'Projects they built themselves, on a link they can open, and a teacher who knows their name', 'The same, plus a plan written for them alone'],
      ] },
      { type: 'feat', eyebrow: 'Be fair to the recording', h2: 'When a recorded course is the right choice', lede: 'A page written by a live school owes you the cases where the other format wins. There are real ones.', items: [
        ['Testing whether the interest is real', 'Before paying anyone, a free recorded platform such as Scratch\'s own tutorials or Code.org tells you in two weeks whether your child comes back on their own. If they do not, a live class will not change that; if they do, a live class is where the next year happens.'],
        ['A self-driven teenager with a specific tool to learn', 'A 15 year old who already writes Python and wants Git, or a particular framework, learns it faster from a good recorded course than by waiting for a batch to reach it. Give them someone to ask when stuck and let them go.'],
        ['A budget that has to be near zero', 'A free recorded course done at a fixed time each week, with a parent sitting nearby for the first month, beats a paid class that cannot be afforded past month two. Consistency is the ingredient, not the format.'],
        ['Revision between live classes', 'The best use of recordings is alongside a live class: rewatching the part of the hour the child did not follow. Our own classes are available to the family afterwards for exactly this.'],
        ['A child who cannot yet sit for an hour', 'A 6 year old who manages twenty minutes of Scratch Junior at home is not ready for an hour with a teacher. Short recorded or app-based sessions first, live at 7 or 8, loses nothing.'],
        ['Time zones that defeat every timetable', 'If no live window fits the family\'s week, a recorded course done at the same hour each week, with a monthly live check-in, is better than a live class the child misses half the time.'],
      ] },
      { type: 'feat', eyebrow: 'Where live earns its fee', h2: 'When a live class is the right choice', lede: 'For most children learning to code for the first time, these six describe them.', items: [
        ['A beginner under about 13', 'Typed code fails on a missing colon, and a child cannot tell a typo from a wrong idea. A teacher looking at the screen can. Without that, the first month of Python is mostly frustration, and the child concludes they are "not a coding person".'],
        ['A child who has stopped before', 'If a recorded course or an app has already been abandoned once, the problem was never the content. A fixed time and a person expecting the child is the fix.'],
        ['A child with their own ideas', 'Recorded courses teach the project in the video. A live teacher can take "can I make it two-player?" and turn it into the next three classes. That question is the moment a child becomes a programmer.'],
        ['A goal with a date', 'A school exam board syllabus, a competition, a portfolio for an application: a live teacher plans backwards from the date and adjusts every week. A recording cannot know the date exists.'],
        ['A shy child, or a very energetic one', 'Both do badly in front of a video. 1-on-1 suits the first; a small batch with a teacher who changes activity every fifteen minutes suits the second.'],
        ['Parents who want to know what is happening', 'A live class produces a teacher who can tell you, in a sentence, what your child can do this month that they could not last month. A dashboard of watched videos cannot.'],
      ] },
      { type: 'feat', eyebrow: 'Ask before you pay', h2: 'Six questions that separate "live" from live', lede: 'Many products described as live are webinars. These questions find out in one call.', items: [
        ['How many children in the class, at most?', 'Get the maximum. "Small" means nothing; a number does. Ours is ' + BATCH + ' in a group batch and ' + MINI + ' in a mini batch.'],
        ['Can the teacher see my child\'s screen?', 'If the answer is "children share when they have a question", the teacher cannot. A live class where nobody sees the code is a recording with a chat box.'],
        ['Is it the same teacher next month?', 'A rotating pool means every class starts from zero. Ask whether your child keeps the teacher they meet in the demo.'],
        ['What happens when we miss a class?', 'A recording of that class, a make-up, or nothing. The answer tells you how the provider thinks about a family\'s real week.'],
        ['What does my child open at the end of the term?', 'A project on a live link they built themselves, or a certificate. Ask to see last term\'s.'],
        ['Can we see one full class before paying?', 'A free demo should be a real class, not a sales tour. If the provider will only show a highlight reel, the class is the highlight reel.'],
      ] },
    ],
    disclosure: { eyebrow: 'Full disclosure: this is us', h2: 'Where Modern Age Coders lands', p: 'We are a live online school teaching coding, AI and mathematics to students from age 6 to 67, in India and 25+ countries, since 2020. Every class is one hour, live, in a batch of ' + BATCH + ' or 1-on-1, taught by a mentor who sees the student\'s screen and stays with them term after term. Recordings of the family\'s own classes are available afterwards for revision, which is the one job a recording does well.', chips: [
      'Group batch: ' + P('coding.india.group') + ' a month = <b>' + PC('coding.india.group') + ' per live class</b>',
      'Mini batch of ' + MINI + ': ' + P('coding.india.miniBatch') + ' a month = <b>' + PC('coding.india.miniBatch') + ' per live class</b>',
      'One to one: ' + P('coding.india.personal') + ' a month = <b>' + PC('coding.india.personal') + ' per private class</b>',
      'Group formats: <b>8 one-hour live classes a month</b> &middot; one to one: <b>4</b>',
      'Enrolment fees: <b>none</b> &middot; Stop: <b>any month end</b>',
    ], note: 'Rated ' + facts.rating + ' across ' + facts.reviews + ' Google reviews. The first class is a free demo of ' + PD.freeDemoLength + ' minutes; if you want a full ' + PD.lengthShort + ' class today or tomorrow, the Priority Live Demo has a small fee that is adjusted against your first month if you enrol. Judge the format in that hour, not on this page.' },
    faq: [
      ['Are live online coding classes worth it for kids?', 'For a beginner, yes, and the reason is specific: typed code fails on tiny mistakes a child cannot diagnose alone, and a teacher who can see the screen fixes that in a minute. A live class also happens at a fixed time with a person expecting the child, which is why it gets finished. The exceptions are a self-driven teen learning a specific tool, a family still testing interest, and a budget that cannot stretch, where a recorded course done consistently is the better choice.'],
      ['What is the difference between a live class and a recorded coding course?', 'In a live class a teacher is on screen while the child codes and responds to what the child does. In a recorded course the teaching was filmed once and the child works through it alone. The first costs a teacher\'s time every week and is priced monthly; the second costs the provider nothing after the first sale and is priced once. Live large cohorts of 20 to 100 sit in between in name only: the teacher cannot see any child\'s screen.'],
      ['Is a recorded coding course ever better than a live class?', 'Yes, in three cases. A teenager who already codes and needs one specific tool learns it faster from a good recording with someone to ask questions to. A family that wants to test whether the interest is real should use a free recorded platform first. And a budget that cannot sustain a monthly fee is better spent on consistency with a free course than on two months of a paid one.'],
      ['How many children should be in a live online coding class?', 'Few enough that the teacher can look at every child\'s code during the hour. In our experience that ceiling is about ten; our group batches are ' + BATCH + ' and mini batches ' + MINI + '. Ask any provider for the maximum, not the typical number, and treat "it varies" as the largest number they will admit.'],
      ['Do live coding classes come with recordings?', 'Ours do: the family can revisit their own class afterwards, which is the best use of a recording, rewatching the ten minutes the child did not follow. Ask any provider what happens when a class is missed; the answer is usually a recording, a make-up class, or nothing.'],
      ['How do I test whether a "live" class is really live?', 'Ask for the maximum batch size, whether the teacher can see your child\'s screen, whether the same teacher continues next month, and whether you can watch one full class before paying. A product that cannot answer the second question with a plain yes is a webinar.'],
      ['Which format is best for a 7 or 8 year old starting coding?', 'A live class in a batch of ' + BATCH + ' or 1-on-1, in Scratch, one hour, as long as the child can sit for an hour. A 6 or 7 year old who manages twenty minutes at home is better served by short app-based sessions first; starting live at 7 or 8 loses nothing. Our <a href="/coding-for-8-year-olds">coding for 8 year olds</a> page describes what that first year looks like.'],
    ],
    cta: { h2: 'Decide in one hour, not on a page', p: 'Book a free demo class and watch one full hour of live, small-batch coding teaching with your child. Then compare it with any recorded course you are considering.', links: [['Book a free demo', '/book-demo'], ['See what live classes cost', '/online-coding-classes-cost']] },
    footerLinks: [['/online-coding-classes-cost', 'What coding classes cost'], ['/best-online-coding-classes-for-kids-2026', 'Best online coding classes for kids'], ['/pricing', 'Full pricing'], ['/guarantee', 'Our zero-risk promise']],
  },

  'coding-classes-for-adults': {
    title: 'Coding Classes for Adults: Live, Small Batches, Ages 18 to 67',
    description: 'Live online coding and maths classes for adults, from complete beginner to career changer. Batches of 5 to 10 or 1-on-1, evening and weekend classes worldwide.',
    ogTitle: 'Coding classes for adults, live and taught in small batches',
    ogDescription: 'Python, web, Java, data and AI for adults from 18 to 67: a live class of 5 to 10 with a mentor, evening and weekend windows, and the fee on the page.',
    crumb: ['Courses', '/courses'], crumbName: 'Coding classes for adults',
    kicker: 'Adult learners &middot; ages 18 to 67 &middot; updated September 2026',
    h1: 'Coding classes for adults, live and taught in small batches',
    lead: 'Most of what ranks for "coding classes for adults" is a list of video courses. This is a class: a live hour with a mentor who writes software for a living, in a batch of ' + BATCH + ' adults or 1-on-1, in the evening or at the weekend, that ends with something you built. It is for the career changer, the professional who needs Python for the job they already have, the parent who wants to keep up with their child, and the retired engineer who always meant to learn. Ages 18 to 67, in India and 25+ countries.',
    ctas: [['Book a free class', '/book-demo'], ['See the adult paths', '#paths']],
    answerTag: 'What a live adult coding class actually looks like',
    answer: 'A live adult class at Modern Age Coders is one hour on a video call with a mentor and a batch of ' + BATCH + ' adults at the same level, or 1-on-1. You write code from the first session in Python, JavaScript or Java, the mentor sees your screen and unblocks you on the spot, and a short task follows each class. Batches run in the evening and at the weekend, twice a week, with the same mentor all course. The first class is a free demo.',
    coursesH2: 'The courses adults start with',
    coursesLede: 'Six live courses for complete beginners from 18 up. Each is taught in a batch of ' + BATCH + ' or 1-on-1, one hour per class, and ends with a project you can show.',
    courses: [
      { href: '/courses/python-programming-masterclass-zero-to-advanced-college', img: '/images/python-college.webp', alt: 'Python masterclass for adults course thumbnail', code: 'First language / most adults', h3: 'Python Masterclass: Zero to Advanced', p: 'The default first language for an adult: readable, in demand, and useful at work within weeks. Fundamentals to objects, files and a real project.' },
      { href: '/courses/html-css-course-for-beginners-build-real-websites', img: '/images/html-css-beginners.webp', alt: 'HTML and CSS for beginners course thumbnail', code: 'First language / visual learners', h3: 'HTML and CSS: Build Real Websites', p: 'For the adult who wants to see something on screen in the first hour. Responsive pages you can put online, then JavaScript when you are ready.' },
      { href: '/courses/full-stack-web-development-masterclass-college', img: '/images/mern-stack-college.webp', alt: 'Full stack web development course thumbnail', code: 'Career change / the long road', h3: 'Full Stack Web Development', p: 'React, Node.js and the basics of deployment: the course a career changer takes after Python or JavaScript, ending with a portfolio that works on a live link.' },
      { href: '/courses/complete-java-programming-masterclass-college', img: '/images/java-college.webp', alt: 'Java course for adults thumbnail', code: 'Enterprise / large systems', h3: 'Java: Core to Spring Boot', p: 'For the adult heading into, or already inside, a company that runs on Java. Core language, objects, then Spring Boot.' },
      { href: '/courses/data-and-ai-analytics-for-non-programmers-course', img: '/images/data-ai-analytics-non-programmers.webp', alt: 'Data and AI analytics for non-programmers course thumbnail', code: 'No code required / at work', h3: 'Data and AI Analytics for Non-Programmers', p: 'Excel, Sheets and Power BI with AI tools, for the professional who needs answers from data without becoming a programmer.' },
      { href: '/courses/python-ai-automation-masterclass-college', img: '/images/python-automation-ai-college.webp', alt: 'Python automation and applied AI course thumbnail', code: 'Professionals / automate the job', h3: 'Python Automation and Applied AI', p: 'Scripting, scraping and small AI tools that remove the repetitive part of a job. The course working professionals most often ask for.' },
    ],
    sections: [
      { type: 'feat', id: 'who', eyebrow: 'Who these classes are for', h2: 'Five kinds of adult learner, and what each one actually needs', lede: 'The same live hour, paced differently. Say which of these you are on the call and the mentor plans from there.', items: [
        ['Career changers', 'You need a real language, a portfolio on a live link, and honest feedback on whether the work is hireable. Python or JavaScript first, then <a href="/courses/full-stack-web-development-masterclass-college">full stack</a>, over six to nine months of two classes a week. We do not promise a job; we do promise you will know exactly where you stand.'],
        ['Working professionals upskilling', 'You already know your field and want the code that removes its repetitive parts: <a href="/courses/python-ai-automation-masterclass-college">Python automation</a>, <a href="/courses/data-and-ai-analytics-for-non-programmers-course">data analytics</a>, or <a href="/ai-classes-for-adults">AI tools</a>. Short courses, evening batches, and projects built on your own spreadsheets.'],
        ['Returners after a break', 'You coded once, a decade ago, and the language or the tools have moved. A placement conversation in the free class, then a course that starts where your memory ends rather than at zero.'],
        ['Parents learning alongside their child', 'You want to understand what your child is building and keep up. We teach the same curriculum to both ages, so a parent in the Python batch and a child in <a href="/coding-for-10-year-olds">Python for 10 year olds</a> can compare notes at dinner.'],
        ['Retired and later-life learners', 'Time, patience and a project in mind, often a website for a club or a tool for a hobby. Paced for you, in a batch of adults, with nothing to prove to anyone. Our <a href="/learn-to-code-over-50-uk">learning to code over 50</a> page is written for you.'],
      ] },
      { type: 'feat', eyebrow: 'First language', h2: 'Choosing your first language as an adult', lede: 'Three good answers, and the case where the usual one is wrong.', items: [
        ['Python, and when it is the wrong first pick', 'Python is the right first language for most adults: it reads like English, it is used in data, automation and AI, and a beginner writes something useful in the first weeks. It is the wrong pick for one adult: the one who wants to build websites and needs to see a page change in the browser to stay motivated. That adult should start with HTML, CSS and then JavaScript.'],
        ['JavaScript', 'The language of the browser and, with Node.js, of the server too. Start here if your goal is websites and web apps, or if you learn best by seeing results on screen. The <a href="/courses/full-stack-web-development-masterclass-college">full stack course</a> is where it leads.'],
        ['Java', 'Verbose, strict and everywhere in large companies, banks and Android. Start here if you are heading into a Java shop or an engineering degree that uses it, and nowhere else; as a first language for a hobbyist it is a slower start than Python. See <a href="/java-classes-for-adults">Java classes for adults</a>.'],
      ] },
      { type: 'prose', id: 'maths', eyebrow: 'The maths question', h2: 'Do you need to be good at maths to learn coding?', paras: [
        'No, not for most of it. Building a website, automating a spreadsheet, writing a script that renames a thousand files, or making a small app needs arithmetic and logic, not algebra. The maths that matters in everyday programming is the kind of careful, step-by-step thinking you already use to follow a recipe or plan a journey.',
        'Maths becomes necessary in three places: data science and machine learning (statistics and some linear algebra), graphics and games (geometry and trigonometry), and competitive programming or computer science degrees (discrete maths). If one of those is your goal, the maths can be learnt alongside the code, and we teach both. Our <a href="/courses/data-analytics-mathematics-masterclass">maths for data science</a> course exists for exactly this, and adults who want to rebuild school maths from the ground up before anything else can do that in a live maths batch too.',
        'The honest warning: adults returning to code stall on maths more often than on syntax, usually because a data or AI course assumed statistics they never had. Say so on the first call and the plan changes; it is not a reason to wait.',
      ] },
      { type: 'prose', id: 'age', eyebrow: 'The age question', h2: 'Is it too late to learn to code at 40, 50 or 60?', paras: [
        'No, and the useful answer is what actually gets harder, because something does. Memorising syntax takes longer after 40 than at 20, and a 55 year old will not out-type a 25 year old. Neither matters much: syntax is looked up, not memorised, and typing speed has never been the bottleneck in programming.',
        'What adults have that younger learners do not is a reason, a domain, and patience. A 45 year old accountant learning Python knows exactly which report to automate first; a 60 year old learning to build a website knows what the website is for. Projects with a purpose get finished, and finished projects are the whole game.',
        'The two things that make it work after 40 are a fixed time each week, because life will otherwise always be busier, and a mentor who can see your screen, because an adult who gets stuck alone at 10 pm tends to stop for good. That is the case for a live class over a recorded one, and it is stronger for adults than for children. Our <a href="/learn-to-code-over-50-uk">learn to code over 50</a> page goes further, and families searching for a coding bootcamp for seniors will find that a paced live class, not a bootcamp, is what they actually want.',
      ] },
      { type: 'table', id: 'compare', eyebrow: 'Format', h2: 'Live classes compared with self-paced courses, for adults', lede: 'Adults abandon recorded courses for the same reason children do, only later at night. The middle column is what we run.', headers: ['', 'Self-paced video course', 'Live batch of ' + BATCH, 'Live 1-on-1'], rows: [
        ['Pace', 'Yours, which usually means stopping', 'The batch\'s, adjusted by the mentor per person', 'Entirely yours'],
        ['When you get stuck', 'A forum, or the next evening', 'The mentor, on your screen, in the same minute', 'Immediately'],
        ['Completion', 'Low; most adults finish the first fifth', 'High; the class happens whether you felt like it or not', 'High'],
        ['Cost', 'One-time, often low', 'Monthly, ' + PC('coding.india.group') + ' per live class', 'Monthly, ' + PC('coding.india.personal') + ' per private class'],
        ['Support between classes', 'None', 'A short task and a place to ask', 'The same, on your own plan'],
        ['What you finish with', 'A certificate', 'Projects on a live link, and a mentor who can vouch for them', 'The same, plus a plan written for you'],
      ] },
      { type: 'prose', id: 'timetable', eyebrow: 'When', h2: 'Evening and weekend timetable', paras: [
        'Adult batches run on weekday evenings between 7 pm and 10 pm Indian Standard Time and on weekend mornings, two classes a week of one hour each. The same windows serve the UK and Europe in the afternoon and early evening, the Gulf in the early evening, and Singapore and Australia at night. Learners in the US and Canada usually take the early-morning IST batches, which fall in their evening.',
        'Exact days and times are agreed on the free class once we know your level and your week, and they stay fixed for the course with the same mentor. One-to-one learners choose their own slot within the same windows.',
      ] },
      { type: 'prose', id: 'howlong', eyebrow: 'How long', h2: 'How long until you build something that works', paras: [
        'In the first class. Every adult batch writes and runs code in the first hour, because the point of a live class is that nothing waits for a video to finish. Within four weeks of two classes a week, a Python beginner has a program that does something useful on their own machine, and an HTML and CSS beginner has a page online.',
        'A full first language takes about three to four months at two classes a week. A career-change path, first language then full stack with a portfolio, is six to nine months. Automation and analytics courses for professionals are shorter, because the goal is one job done, not a new career. None of these is a promise about employment; they are the pace we see in our own batches when the two classes a week actually happen.',
      ] },
      { type: 'paths', id: 'paths', eyebrow: 'Adult learner paths', h2: 'Where to go next, by what you want', lede: 'This is the hub for everything we run for adults. Each page below goes deeper on one audience or subject.', items: [
        ['/ai-classes-for-adults', 'AI classes for adults', 'AI tools, automation and the three courses adults start with'],
        ['/ai-and-machine-learning-for-working-professionals', 'AI and machine learning for working professionals', 'From Python to real models, on your own data'],
        ['/java-classes-for-adults', 'Java classes for adults', 'Core Java to Spring Boot for the enterprise route'],
        ['/learn-to-code-with-ai', 'Learn to code with AI', 'Using AI assistants honestly while you learn the fundamentals'],
        ['/how-to-actually-learn-to-code', 'How to actually learn to code', 'The method, for adults who have tried and stopped before'],
        ['/learn-to-code-over-50-uk', 'Learning to code over 50', 'Paced for later-life learners, with a project in mind'],
        ['/online-maths-classes-for-adults-in-uk', 'Maths classes for adults, UK', 'Rebuild school maths live, from arithmetic to A-level'],
        ['/online-maths-classes-for-adults-in-usa', 'Maths classes for adults, US', 'Algebra to calculus for work, study or the GRE'],
        ['/maths-classes-for-adults-uae', 'Maths classes for adults, UAE', 'Live evening maths batches in Gulf time'],
        ['/summer-coding-camp-adults', 'Summer coding camp for adults', 'An intensive few weeks when the calendar allows'],
        ['/winter-coding-camp-adults', 'Winter coding camp for adults', 'The December and January version'],
        ['/best-coding-classes-for-adults-uk', 'Coding classes for adults, UK', 'Evening batches in UK time, fee in pounds'],
        ['/best-coding-classes-for-adults-ireland', 'Coding classes for adults, Ireland', 'The Irish edition, with local exam vocabulary'],
        ['/coding-and-ai-classes-for-adults-netherlands', 'Coding and AI classes for adults, Netherlands', 'English-language batches in Dutch evening time'],
      ] },
    ],
    disclosure: { eyebrow: 'What it costs', h2: 'The fee, shown in your own currency', p: 'One flat monthly fee for every adult coding course, with no enrolment charge and no contract; stop at any month end. Specialist courses for professionals, such as AI agents, are priced on their own pages.', chips: [
      'Group batch of ' + BATCH + ': ' + P('coding.india.group') + ' a month = <b>' + PC('coding.india.group') + ' per live class</b>',
      'Mini batch of ' + MINI + ': ' + P('coding.india.miniBatch') + ' a month = <b>' + PC('coding.india.miniBatch') + ' per live class</b>',
      'One to one: ' + P('coding.india.personal') + ' a month = <b>' + PC('coding.india.personal') + ' per private class</b>',
      'Group formats: <b>8 one-hour live classes a month</b> &middot; one to one: <b>4</b>',
      'Enrolment fees: <b>none</b> &middot; Stop: <b>any month end</b>',
    ], note: 'Rated ' + facts.rating + ' across ' + facts.reviews + ' Google reviews; ' + facts.students + ' students taught live since ' + facts.founded + '. The first class is a free demo of ' + PD.freeDemoLength + ' minutes; a Priority Live Demo, a full ' + PD.lengthShort + ' class today or tomorrow, has a small fee that is adjusted against your first month if you enrol.' },
    faq: [
      ['Can I learn coding as an adult with no experience?', 'Yes. Every adult batch starts from zero: what a program is, how to run one, and a first working script in the first hour. No prior coding, no particular degree and no maths beyond arithmetic is assumed. The free class includes a short placement conversation so a returner is not put in a beginner batch and a beginner is not rushed.'],
      ['Is it too late to learn to code at 40?', 'No. What gets harder after 40 is memorising syntax and typing quickly, and neither is the bottleneck in real programming, because syntax is looked up and speed is irrelevant. What adults bring is a reason and a domain: the report to automate, the website the club needs. A fixed weekly time and a mentor who can see your screen are what make it work.'],
      ['How long does it take an adult to learn to code?', 'Something useful in the first class, a program of your own within about four weeks at two classes a week, a full first language in three to four months, and a career-change portfolio in six to nine months. Professional automation and analytics courses are shorter because the goal is a job done, not a new career.'],
      ['Do you need to be good at maths to learn coding?', 'Not for websites, automation, scripting or apps, which need arithmetic and clear thinking. Maths matters for data science and machine learning, graphics and games, and computer science degrees, and in those cases it can be learnt alongside the code. We teach both subjects, so a learner who stalls on statistics gets a maths batch, not a dead end.'],
      ['Are free coding courses good enough for adults?', 'For testing interest, yes, and for a self-driven adult learning one specific tool, often yes. For learning to program from nothing, most adults stop within weeks because nobody notices when they do. A live class is a fixed time, a person expecting you and someone to fix the bug at the moment it happens; that is what free courses cannot provide.'],
      ['Is there a coding bootcamp for seniors?', 'What most people searching for that phrase want is a paced live class, not a bootcamp. A bootcamp is full-time and intense; a later-life learner usually wants two evenings a week, a project with a purpose and a mentor who does not rush. Our adult batches run that way for ages up to 67, and the over-50 page describes the experience in detail.'],
      ['Can I learn to code alongside my child?', 'Yes, and it works well. We teach the same curriculum to children and adults, so a parent in a Python batch and a child in a kids Python class learn the same ideas in the same weeks and can build together at home. Book the free class for each of you and say so on the call.'],
      ['When do adult classes run for learners outside India?', 'The evening and weekend windows are set in Indian Standard Time and fall in the UK and European afternoon and early evening, the Gulf early evening, and the Singapore and Australian night. Learners in the US and Canada usually take the early-morning IST batches, which fall in their evening. Exact times are fixed on the free class.'],
    ],
    cta: { h2: 'Write your first program in the free class', p: 'One live hour with a mentor and a batch of adults at your level. Bring the report you want to automate or the website you want to build; the plan starts from there.', links: [['Book a free class', '/book-demo'], ['See all adult courses', '/courses']] },
    footerLinks: [['/ai-classes-for-adults', 'AI classes for adults'], ['/java-classes-for-adults', 'Java classes for adults'], ['/learn-to-code-over-50-uk', 'Learning to code over 50'], ['/pricing', 'Full pricing']],
  },
};

/* ---------------- link and asset checks ---------------- */
const KNOWN = new Set(['/', '/pricing', '/book-demo', '/courses', '/contact', '/guarantee', '/love', '/student-labs', '/team', '/success-stories', '/coding-fee-calculator', '/online-math-tutor-cost']);
function checkLink(href, slug) {
  if (!href.startsWith('/')) return;
  const clean = href.split('#')[0].split('?')[0];
  if (!clean || KNOWN.has(clean) || clean.startsWith('/src/pages/') || clean.startsWith('/favicon')) return;
  if (/\.(css|js|webp|png|jpg|svg|ico)$/.test(clean)) { if (!fs.existsSync(path.join(ROOT, 'public', clean)) && !fs.existsSync(path.join(ROOT, 'src', clean))) throw new Error(slug + ': asset missing ' + href); return; }
  const rel = clean.slice(1);
  const ok = fs.existsSync(path.join(ROOT, 'src', 'pages', rel + '.html'))
    || (rel.startsWith('courses/') && fs.existsSync(path.join(ROOT, 'content', 'courses', 'generated', rel.slice(8))))
    || (rel.startsWith('blog/') && fs.existsSync(path.join(ROOT, 'content', 'blog', 'generated', rel.slice(5))))
    || PAGES[rel];
  if (!ok) throw new Error(slug + ': unresolved link ' + href);
}

/* ---------------- renderers ---------------- */
const R = {
  banner: (s) => '<section id="' + (s.id || '') + '">\n  <div class="wrap">\n    <div class="sec-head reveal">\n      <span class="eyebrow">' + s.eyebrow + '</span>\n      <h2>' + s.h2 + '</h2>\n      <p>' + s.lede + '</p>\n    </div>\n    <div class="range-banner">\n' + s.items.map((it) => '      <div class="range-item reveal"><span class="fmt">' + it[0] + '</span><div class="rng">' + it[1] + '</div><div class="sub">' + it[2] + '</div></div>').join('\n') + '\n    </div>\n  </div>\n</section>',
  feat: (s) => '<section' + (s.id ? ' id="' + s.id + '"' : '') + ' class="cmp">\n  <div class="wrap">\n    <div class="sec-head reveal">\n      <span class="eyebrow">' + s.eyebrow + '</span>\n      <h2>' + s.h2 + '</h2>\n      <p>' + s.lede + '</p>\n    </div>\n    <div class="feat-grid">\n' + s.items.map((it, i) => '      <div class="feat reveal"><div class="dot">' + (i + 1) + '</div><h3>' + it[0] + '</h3><p>' + it[1] + '</p></div>').join('\n') + '\n    </div>\n  </div>\n</section>',
  table: (s) => '<section id="' + s.id + '">\n  <div class="wrap">\n    <div class="sec-head reveal">\n      <span class="eyebrow">' + s.eyebrow + '</span>\n      <h2>' + s.h2 + '</h2>\n      <p>' + s.lede + '</p>\n    </div>\n    <p class="cmp-scrollhint">Swipe sideways to see every column</p>\n    <div class="cmp-wrap reveal">\n      <table class="cmp-table">\n        <thead><tr>' + s.headers.map((h, i) => '<th' + (i === 2 ? ' class="col-us"' : '') + '>' + h + (i === 2 ? ' <span class="badge-best">ours</span>' : '') + '</th>').join('') + '</tr></thead>\n        <tbody>\n' + s.rows.map((r) => '          <tr><th>' + r[0] + '</th>' + r.slice(1).map((c, i) => '<td' + (i === 1 ? ' class="cell-us"' : '') + '>' + c + '</td>').join('') + '</tr>').join('\n') + '\n        </tbody>\n      </table>\n    </div>\n  </div>\n</section>',
  prose: (s) => '<section id="' + s.id + '"' + (s.alt ? ' class="cmp"' : '') + '>\n  <div class="wrap">\n    <div class="sec-head reveal">\n      <span class="eyebrow">' + s.eyebrow + '</span>\n      <h2>' + s.h2 + '</h2>\n' + s.paras.map((p) => '      <p>' + p + '</p>').join('\n') + '\n    </div>\n  </div>\n</section>',
  paths: (s) => '<section id="' + s.id + '" class="cmp">\n  <div class="wrap">\n    <div class="sec-head reveal">\n      <span class="eyebrow">' + s.eyebrow + '</span>\n      <h2>' + s.h2 + '</h2>\n      <p>' + s.lede + '</p>\n    </div>\n    <div class="path-grid">\n' + s.items.map((it) => '      <a class="path reveal" href="' + it[0] + '"><strong>' + it[1] + '</strong><span>' + it[2] + '</span></a>').join('\n') + '\n    </div>\n  </div>\n</section>',
};

function build(slug) {
  const p = PAGES[slug];
  if (p.title.length > 65) throw new Error(slug + ': title ' + p.title.length);
  if (p.description.length < 150 || p.description.length > 160) throw new Error(slug + ': description ' + p.description.length);
  const url = BASE + '/' + slug;
  const faqLd = p.faq.map(([q, a]) => '      { "@type": "Question", "name": ' + JSON.stringify(strip(q)) + ', "acceptedAnswer": { "@type": "Answer", "text": ' + JSON.stringify(strip(a)) + ' } }').join(',\n');
  const courses = '<section id="courses">\n  <div class="wrap">\n    <div class="sec-head reveal">\n      <span class="eyebrow">Courses</span>\n      <h2>' + p.coursesH2 + '</h2>\n      <p>' + p.coursesLede + '</p>\n    </div>\n    <div class="cc-grid">\n' + p.courses.map((c) => '      <a class="cc reveal" href="' + c.href + '"><span class="cc-shot"><img src="' + c.img + '" alt="' + esc(c.alt) + '" width="640" height="400" loading="lazy" decoding="async"></span><span class="cc-body"><span class="cc-code">' + c.code + '</span><strong>' + c.h3 + '</strong><span class="cc-p">' + c.p + '</span><span class="cc-open">See the course</span></span></a>').join('\n') + '\n    </div>\n  </div>\n</section>';
  const html = `<!DOCTYPE html>
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
  <title>${esc(p.title)}</title>
  <meta name="description" content="${esc(p.description)}">
  <meta name="author" content="Modern Age Coders">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <link rel="canonical" href="${url}">
  <link rel="alternate" type="text/markdown" href="/src/pages/${slug}.md" title="Markdown version for AI agents">
  <link rel="icon" href="/favicon.ico" type="image/x-icon">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
  <meta name="theme-color" content="#fbfaf7">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${url}">
  <meta property="og:title" content="${esc(p.ogTitle)}">
  <meta property="og:description" content="${esc(p.ogDescription)}">
  <meta property="og:image" content="${BASE}/images/og-modern-age-coders.png">
  <meta property="og:site_name" content="Modern Age Coders">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(p.ogTitle)}">
  <meta name="twitter:description" content="${esc(p.ogDescription)}">
  <meta name="twitter:image" content="${BASE}/images/og-modern-age-coders.png">
  <script src="/js/meta-pixel.js" defer></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600;8..60,700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/css/compare-pages.css?v=20260706">
  <style>:root{--accent:#B45309;--accent-soft:#fbefd9;--accent-line:#efd2a6}
  .cc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
  @media(max-width:860px){.cc-grid{grid-template-columns:1fr 1fr}}
  @media(max-width:560px){.cc-grid{grid-template-columns:1fr}}
  .cc{display:flex;flex-direction:column;background:var(--card);border:1px solid var(--line);border-radius:var(--radius-lg);overflow:hidden;text-decoration:none;color:var(--ink);box-shadow:var(--shadow-sm);transition:transform .2s ease}
  .cc:hover{transform:translateY(-3px)}
  .cc-shot{display:block;aspect-ratio:16/10;height:auto;background:var(--paper-2);overflow:hidden}
  .cc-shot img{width:100%;height:100%;object-fit:cover;display:block}
  .cc-body{display:flex;flex-direction:column;gap:6px;padding:16px 18px 18px;flex:1}
  .cc-code{font-family:"JetBrains Mono",monospace;font-size:.78rem;letter-spacing:.08em;text-transform:uppercase;color:var(--accent);font-weight:600}
  .cc-body strong{font-family:"Source Serif 4",serif;font-size:1.12rem;line-height:1.25}
  .cc-p{font-size:.92rem;line-height:1.55;color:var(--ink-soft);flex:1}
  .cc-open{font-size:.8rem;font-weight:700;text-decoration:underline;margin-top:4px}
  .path-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}
  @media(max-width:700px){.path-grid{grid-template-columns:1fr}}
  .path{display:flex;flex-direction:column;gap:4px;padding:16px 18px;background:var(--card);border:1px solid var(--line);border-radius:var(--radius);text-decoration:none;color:var(--ink);min-height:44px}
  .path:hover{border-color:var(--accent-line)}
  .path strong{font-size:1rem}
  .path span{font-size:.9rem;color:var(--ink-soft);line-height:1.5}
  .sec-head p a,.feat p a,.answer p a,.faq-list p a{color:var(--accent);text-decoration:underline}
  /* 12px type floor (site UI rule); the shared stylesheet sets several labels below it */
  .kicker,.answer .tag,.sec-head .eyebrow,.range-item .fmt,.cmp-scrollhint,.badge-best,main .msu-kick,main .msu-pc,main .msu-open,main .msu-rl,main .msu-pby{font-size:.78rem}
  </style>
  <noscript><style>.reveal{opacity:1 !important;transform:none !important}</style></noscript>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "${BASE}/" },
      { "@type": "ListItem", "position": 2, "name": ${JSON.stringify(p.crumb[0])}, "item": "${BASE}${p.crumb[1]}" },
      { "@type": "ListItem", "position": 3, "name": ${JSON.stringify(p.crumbName)}, "item": "${url}" }
    ]
  }
  </script>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
${faqLd}
    ]
  }
  </script>
</head>
<body>

<header class="nav">
  <div class="wrap nav-inner">
    <a class="brand" href="/">
      <img src="/images/logo.svg" alt="Modern Age Coders logo" width="36" height="36">
      <span>Modern Age Coders</span>
    </a>
    <button class="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false" aria-controls="navLinks">
      <span></span><span></span><span></span>
    </button>
    <nav class="nav-links" id="navLinks">
      <a href="/courses">Courses</a>
      <a href="/pricing">Pricing</a>
      <a href="/guarantee">Our Promise</a>
      <a href="/contact">Contact</a>
      <a class="btn btn-primary nav-cta" href="/book-demo">Book a free demo</a>
    </nav>
  </div>
</header>

<main>

<!-- HERO -->
<section class="hero">
  <div class="wrap">
    <span class="kicker reveal">${p.kicker}</span>
    <h1 class="reveal">${p.h1}</h1>
    <p class="lead reveal">${p.lead}</p>
    <div class="hero-cta reveal">
      <a class="btn btn-primary" href="${p.ctas[0][1]}">${p.ctas[0][0]}</a>
      <a class="btn btn-secondary" href="${p.ctas[1][1]}">${p.ctas[1][0]}</a>
    </div>
  </div>
</section>

<!-- ANSWER-FIRST -->
<section>
  <div class="wrap">
    <div class="answer reveal">
      <span class="tag">${p.answerTag}</span>
      <p>${p.answer}</p>
    </div>
  </div>
</section>

<!-- COURSES FIRST -->
${courses}

${p.sections.map((s) => R[s.type](s)).join('\n\n')}

<!-- DISCLOSURE -->
<section>
  <div class="wrap">
    <div class="sec-head reveal">
      <span class="eyebrow">${p.disclosure.eyebrow}</span>
      <h2>${p.disclosure.h2}</h2>
      <p>${p.disclosure.p}</p>
    </div>
    <div class="math-band reveal">
      <h3>Our published fees</h3>
      <div class="math-row">
${p.disclosure.chips.map((c) => '        <span class="math-chip"' + (c.includes('miniBatch') ? ' data-india-only="true"' : '') + '>' + c + '</span>').join('\n')}
      </div>
      <p class="math-note">${p.disclosure.note}</p>
    </div>
  </div>
</section>

<!-- FAQ -->
<section>
  <div class="wrap">
    <div class="sec-head reveal" style="margin-left:auto;margin-right:auto;text-align:center">
      <span class="eyebrow">Honest answers</span>
      <h2>Frequently asked questions</h2>
    </div>
    <div class="faq-list">
${p.faq.map(([q, a]) => '      <details class="reveal">\n        <summary>' + q + '</summary>\n        <p>' + a + '</p>\n      </details>').join('\n')}
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta-band">
  <div class="wrap reveal">
    <h2>${p.cta.h2}</h2>
    <p>${p.cta.p}</p>
    <div class="hero-cta">
      <a class="btn btn-light" href="${p.cta.links[0][1]}">${p.cta.links[0][0]}</a>
      <a class="btn btn-ghost" href="${p.cta.links[1][1]}">${p.cta.links[1][0]}</a>
    </div>
  </div>
</section>

${MSU}</main>

<footer>
  <div class="wrap">
    <div class="foot-grid">
      <div>
        <div class="foot-brand">
          <img src="/images/logo.svg" alt="Modern Age Coders logo" width="32" height="32">
          <span>Modern Age Coders</span>
        </div>
        <p class="foot-tag">Live, instructor-led coding, AI and mathematics classes for curious minds aged 6 to 67. Small batches, real projects, and mentors who care.</p>
      </div>
      <div>
        <h4>Related</h4>
        <ul>
${p.footerLinks.map((l) => '          <li><a href="' + l[0] + '">' + l[1] + '</a></li>').join('\n')}
        </ul>
      </div>
      <div>
        <h4>Company</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/team">Our Team</a></li>
          <li><a href="/success-stories">Success Stories</a></li>
          <li><a href="/book-demo">Book a free demo</a></li>
        </ul>
      </div>
    </div>
    <div class="foot-small">&copy; 2026 Modern Age Coders. Live coding &amp; mathematics classes, ages 6 to 67.</div>
  </div>
</footer>

<script>
(function(){
  var burger=document.getElementById('hamburger');
  var links=document.getElementById('navLinks');
  if(burger&&links){
    burger.addEventListener('click',function(){
      var open=links.classList.toggle('open');
      burger.setAttribute('aria-expanded',open?'true':'false');
    });
    links.addEventListener('click',function(e){
      if(e.target.tagName==='A'){links.classList.remove('open');burger.setAttribute('aria-expanded','false');}
    });
  }
})();
(function(){
  var els=document.querySelectorAll('.reveal');
  var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduce||!('IntersectionObserver'in window)){
    for(var i=0;i<els.length;i++){els[i].classList.add('in');}
    return;
  }
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}
    });
  },{rootMargin:'0px 0px -8% 0px',threshold:0.08});
  for(var j=0;j<els.length;j++){io.observe(els[j]);}
})();
</script>
<script>window.addEventListener('load',function(){setTimeout(function(){var r=document.querySelectorAll('.reveal');for(var i=0;i<r.length;i++){r[i].classList.add('in');}},1600);});</script>
</body>
</html>
`;
  if (/—/.test(html)) throw new Error(slug + ': em dash');
  if (/\bPremium\b/.test(html)) throw new Error(slug + ': "Premium" in copy');
  [...html.matchAll(/(?:href|src)="([^"]+)"/g)].forEach((m) => checkLink(m[1], slug));
  // every price mention must be an anchor
  const bare = html.replace(/<span data-price="[^"]*"[^>]*>[^<]*<\/span>/g, '').match(/₹\s?[\d,]+|\$\s?\d+/g);
  if (bare) throw new Error(slug + ': unanchored price ' + bare.join(', '));
  [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].forEach((m) => JSON.parse(m[1]));
  const out = path.join(ROOT, 'src', 'pages', slug + '.html');
  fs.writeFileSync(out, html);
  const words = strip(html.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '')).split(/\s+/).length;
  console.log('wrote', slug, '| words', words, '| faq', p.faq.length, '| courses', p.courses.length);
}

const want = process.argv.slice(2).length ? process.argv.slice(2) : Object.keys(PAGES);
want.forEach(build);
