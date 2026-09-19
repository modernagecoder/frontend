/**
 * PRIORITY DEMO CLUSTER - CONTENT
 *
 * Ten pages that explain the paid priority demo and the teaching behind it.
 * scripts/build-priority-demo-pages.js turns this file into src/pages/*.html.
 * Edit the words here, then run:  node scripts/build-priority-demo-pages.js
 *
 * House rules for this content
 *   - {{PRICE}} renders as the visitor's own price (rupees in India, dollars
 *     elsewhere), the same way course pricing works. Never type a price.
 *   - No invented numbers. Batch sizes, demo length, student counts and refund
 *     terms vary across the site, so these pages do not state them.
 *   - "Best in the world" is written as what we set out to do and how we work
 *     toward it, never as a ranking nobody can check.
 *   - Every internal link is validated by the build script against _redirects
 *     and the course data, so a wrong URL fails the build instead of shipping.
 */
'use strict';

const C = {
  hub: '/priority-demo',
  why: '/why-we-charge-for-a-priority-demo',
  versus: '/free-demo-vs-priority-demo',
  inside: '/what-happens-in-a-demo-class',
  book: '/how-to-book-a-priority-demo',
  think: '/we-teach-you-how-to-think',
  engineer: '/think-like-a-software-engineer',
  together: '/why-coding-and-maths-together',
  batches: '/small-batches-and-1-on-1-classes',
  trust: '/why-trust-modern-age-coders'
};

const K = {
  scratch: '/courses/scratch-programming-complete-course',
  pyKids: '/courses/python-ai-kids-masterclass',
  pyTeens: '/courses/python-complete-masterclass-teens',
  pyCollege: '/courses/python-programming-masterclass-zero-to-advanced-college',
  webTeens: '/courses/full-stack-web-development-teens-masterclass',
  webCollege: '/courses/full-stack-web-development-masterclass-college',
  dsaCollege: '/courses/data-structures-algorithms-masterclass-college',
  dsaTeens: '/courses/problem-solving-dsa-masterclass-teens',
  aiTeens: '/courses/ai-ml-masterclass-teens',
  genai: '/courses/complete-generative-ai-masterclass-college',
  gameKids: '/courses/game-development-masterclass-for-kids',
  javaTeens: '/courses/java-programming-masterclass-for-teens',
  cppTeens: '/courses/cpp-programming-masterclass-for-teens',
  mathsCoding: '/courses/maths-through-coding',
  mental: '/courses/mental-maths-mastery-kids',
  vedic: '/courses/vedic-maths-course-speed-calculation-mastery',
  olympiad: '/courses/olympiad-mathematics-premium-course',
  algebra: '/courses/algebra-foundations-masterclass',
  highSchool: '/courses/complete-high-school-mathematics-mastery',
  jee: '/courses/jee-foundation-maths-course-class-8-10'
};

// Short labels used for the "whole guide" card grid on every page.
const CLUSTER_CARDS = [
  { url: C.hub, tag: 'Start here', title: 'The Priority Live Demo', blurb: 'What it is, who it is for and how it works.' },
  { url: C.why, tag: 'The reason', title: 'Why we charge for a priority demo', blurb: 'Where mentor time goes, and why honesty beat a fake free offer.' },
  { url: C.versus, tag: 'Compare', title: 'Free demo vs priority demo', blurb: 'Side by side: wait time, certainty and what you get.' },
  { url: C.inside, tag: 'Inside the class', title: 'What happens in a demo class', blurb: 'From hello to a working project, step by step.' },
  { url: C.book, tag: 'How to', title: 'How to book a priority demo', blurb: 'Pick a slot, pay once, get confirmed on WhatsApp.' },
  { url: C.think, tag: 'Our method', title: 'We teach you how to think', blurb: 'Why thinking comes before syntax in every class.' },
  { url: C.engineer, tag: 'Our method', title: 'Think like a software engineer', blurb: 'Real tools, real bugs, real software from early on.' },
  { url: C.together, tag: 'Our method', title: 'Why coding and maths together', blurb: 'One habit of mind, taught from two directions.' },
  { url: C.batches, tag: 'How we run classes', title: 'Small batches and 1-on-1 classes', blurb: 'Why mentor time is limited, by design.' },
  { url: C.trust, tag: 'Trust', title: 'Why trust Modern Age Coders', blurb: 'What we promise, what we refuse to do, and how to check us.' }
];

const PROMISE = [
  ['We teach you how to think', 'Before any code is typed, the student learns to read a problem, break it apart and plan an answer.'],
  ['We teach you to solve problems', 'Every class is built around a problem worth solving, not a list of commands to memorise.'],
  ['We teach you to build software', 'Students plan, write, test and fix real programs, the way working engineers do.'],
  ['We teach maths as a way of reasoning', 'Number sense, proof and patterns, so maths stops being a set of tricks.']
];

const pages = [

  // ───────────────────────────── 1. HUB ─────────────────────────────
  {
    slug: 'priority-demo',
    title: 'Priority Live Demo Class | Book Your Slot Today or Tomorrow',
    description: 'The Priority Live Demo is a paid, guaranteed demo class at Modern Age Coders. Pick your own day and time, meet a real mentor and build something in the first class.',
    eyebrow: 'Priority Live Demo',
    h1: 'A guaranteed live demo, <em>today or tomorrow.</em>',
    lede: 'Our mentors spend the day teaching. A free demo waits until one of them is free. The Priority Live Demo does not wait: you choose the slot, a mentor is reserved for you, and the class happens.',
    answer: 'The Priority Live Demo is a one-time paid demo class ({{PRICE}}). You pick the day and time, usually today or tomorrow, and a Modern Age Coders mentor is reserved for that slot. It is the same live teaching our enrolled students get, confirmed on WhatsApp within the hour. The free demo still exists, but it is a waiting list with no promised date.',
    sections: [
      {
        h2: 'What the Priority Live Demo is',
        html: `
<p>It is a real class, not a sales call. A mentor meets the student live, finds out what they already know, and teaches a short piece of <a href="/courses">coding</a> or <a href="/courses/maths">maths</a> that ends with something working on the screen. Parents are welcome to sit in.</p>
<p>What makes it "priority" is certainty. You choose the slot. We block a mentor for it. You get a WhatsApp confirmation within the hour. If you want to understand why that certainty costs a small fee while the ordinary demo stays free, read <a href="${C.why}">why we charge for a priority demo</a>.</p>
<ul>
  <li><b>Guaranteed slot.</b> Today or tomorrow in most cases, at a time you pick.</li>
  <li><b>A mentor reserved for you.</b> Not whoever happens to be free.</li>
  <li><b>The same teaching as a paid class.</b> The demo is a sample of the real thing, so it has to be the real thing.</li>
</ul>`
      },
      {
        h2: 'Who it is for',
        html: `
<p>Families who have already decided they want to see a class and do not want to wait. A parent comparing two or three institutes this week. A student with an exam or a school project coming up. Anyone in a time zone where a missed call means another week gone.</p>
<p>If you are in no hurry, the free waiting list is a fair choice, and we explain both honestly in <a href="${C.versus}">free demo vs priority demo</a>.</p>`
      },
      {
        h2: 'What you will actually see',
        html: `
<p>You will see how we teach, which matters more than what we teach. We do not hand a child a finished program to copy. We give them a problem and teach them to think their way to the answer. That idea runs through everything here, and it has its own page: <a href="${C.think}">we teach you how to think</a>.</p>
<p>For the full run of the class, from the first hello to the last line of code, see <a href="${C.inside}">what happens in a demo class</a>. When you are ready, <a href="${C.book}">how to book a priority demo</a> walks through the slot picker and the payment.</p>`
      },
      {
        h2: 'Courses you can sample in a demo',
        html: `
<p>Tell the mentor what you are curious about and the demo is shaped around it. Popular starting points:</p>
<ul>
  <li>Young beginners: <a href="${K.scratch}">Scratch coding for kids</a> or <a href="${K.pyKids}">Python and AI for kids</a>.</li>
  <li>Teens: <a href="${K.pyTeens}">Python for teens</a>, <a href="${K.webTeens}">full stack web development</a> or <a href="${K.aiTeens}">AI and machine learning</a>.</li>
  <li>College and adults: <a href="${K.pyCollege}">Python from zero to advanced</a> or <a href="${K.dsaCollege}">data structures and algorithms</a>.</li>
  <li>Maths: <a href="${K.mental}">mental maths</a>, <a href="${K.algebra}">algebra foundations</a> or <a href="${K.olympiad}">Olympiad mathematics</a>.</li>
</ul>
<p>Browse by age at <a href="/levels/coding-for-kids">coding for kids</a>, <a href="/levels/coding-for-teens">coding for teens</a> and <a href="/levels/coding-for-college-students">coding for college students</a>.</p>`
      }
    ],
    faqs: [
      ['Is the priority demo a full class or a sales pitch?', 'It is a class. A mentor teaches a real topic and the student builds or solves something. Fees and batches are discussed only if you ask.'],
      ['Can I still take a free demo?', 'Yes. The free demo is a waiting list. Mentors take free demos only when they are not teaching, so we cannot promise a date.'],
      ['How soon can the priority demo happen?', 'Usually today or tomorrow. You pick the day and time when you book, and we confirm on WhatsApp within the hour.'],
      ['Who teaches the demo?', 'A Modern Age Coders mentor who teaches our regular batches. The demo is meant to show you our real teaching.']
    ]
  },

  // ───────────────────────────── 2. WHY ─────────────────────────────
  {
    slug: 'why-we-charge-for-a-priority-demo',
    title: 'Why We Charge for a Priority Demo | Modern Age Coders',
    description: 'Our mentors teach live classes most of the day, so free demos wait in a queue. Here is the honest reason a guaranteed demo slot carries a small fee.',
    eyebrow: 'The honest reason',
    h1: 'Why a guaranteed demo <em>costs a little.</em>',
    lede: 'Most institutes offer a free demo and quietly staff it with a sales team. We staff ours with the mentors who actually teach. That choice is the whole story.',
    answer: 'We charge a small one-time fee ({{PRICE}}) for a priority demo because our demos are taught by working mentors, and those mentors are in live classes most of the day. A free demo can only happen when a mentor is free, which may take weeks. The fee lets us reserve a mentor for your chosen slot without taking time away from enrolled students.',
    sections: [
      {
        h2: 'Where a mentor\'s day goes',
        html: `
<p>A Modern Age Coders mentor spends the day in <a href="${C.batches}">small live batches and 1-on-1 classes</a>. Between classes they review student code, prepare the next session and answer doubts. There is very little empty space in that day, and we like it that way, because it means the people teaching your child are teachers, not presenters.</p>
<p>A free demo has to fit into whatever space is left. Some weeks that space exists. Some weeks it does not. That is why the free demo is a waiting list and why we say so plainly instead of promising a date we might miss.</p>`
      },
      {
        h2: 'Why we did not hire a demo team instead',
        html: `
<p>The usual fix is a separate team that only runs demos. Those demos are smooth, rehearsed and free, and they tell you almost nothing about the class your child will sit in next month.</p>
<p>We want the demo to be a true sample. The person who teaches it should be a person who teaches our batches, using the same approach described in <a href="${C.think}">we teach you how to think</a>. Keeping it real means using real mentor time, and real mentor time is limited.</p>
<p class="pd-pull">A free demo that never happens is worth less than a paid one that does.</p>`
      },
      {
        h2: 'What the fee pays for',
        html: `
<ul>
  <li><b>A reserved mentor.</b> Your slot is blocked in a mentor's calendar the moment you pay.</li>
  <li><b>Your choice of time.</b> You pick it. We work around you, including for families outside India.</li>
  <li><b>No cost to enrolled students.</b> We never cancel or shorten a paid class to fit a demo.</li>
</ul>
<p>It is a one-time fee for one class. It is not a subscription and it does not commit you to a course. See the side by side in <a href="${C.versus}">free demo vs priority demo</a>.</p>`
      },
      {
        h2: 'What stays free',
        html: `
<p>Plenty. You can watch complete recorded classes on <a href="/how-we-teach">how we teach</a>, work through our <a href="/free-resources">free resources</a>, read every course syllabus under <a href="/courses">courses</a> and see real fees on the <a href="/pricing">pricing page</a>. You can join the free demo waiting list at any time from <a href="/book-demo">book a demo</a>.</p>
<p>When you want certainty, <a href="${C.book}">book a priority demo</a>. If you would like to know more about us first, start with <a href="${C.trust}">why trust Modern Age Coders</a>.</p>`
      }
    ],
    faqs: [
      ['Is the free demo being removed?', 'No. It remains as a waiting list. We simply cannot promise when, or whether, a mentor will be free for it.'],
      ['Does paying for the demo mean I must enrol?', 'No. It is a one-time fee for one class. There is no commitment to any course.'],
      ['Why not just hire more mentors for demos?', 'We hire mentors to teach students. A separate demo team would give you a polished preview that does not match the real class.'],
      ['Will the demo be taught by a real mentor?', 'Yes. The point of the fee is to reserve a mentor who teaches our regular batches.']
    ]
  },

  // ───────────────────────────── 3. VERSUS ─────────────────────────────
  {
    slug: 'free-demo-vs-priority-demo',
    title: 'Free Demo vs Priority Demo | Which One Should You Pick?',
    description: 'A plain comparison of the free demo waiting list and the paid Priority Live Demo at Modern Age Coders: wait time, certainty, mentor and what you get.',
    eyebrow: 'Compare',
    h1: 'Free demo or priority demo: <em>an honest comparison.</em>',
    lede: 'Both are taught by our mentors. Both show you real teaching. The difference is when it happens and whether it is certain to happen at all.',
    answer: 'The free demo is a waiting list: mentors take it only when they are not teaching, so the wait can be several weeks and there is no guaranteed slot. The Priority Live Demo is a one-time paid class ({{PRICE}}) with a slot you choose, usually today or tomorrow, and a mentor reserved for you. The teaching is the same in both.',
    sections: [
      {
        h2: 'Side by side',
        html: `
<div class="pd-table-wrap"><table class="pd-table">
<thead><tr><th scope="col">&nbsp;</th><th scope="col">Free demo</th><th scope="col">Priority Live Demo</th></tr></thead>
<tbody>
<tr><th scope="row">Cost</th><td>Nothing</td><td>One-time {{PRICE}}</td></tr>
<tr><th scope="row">When</th><td class="pd-no">When a mentor becomes free. Often several weeks.</td><td class="pd-yes">Today or tomorrow, at a time you pick</td></tr>
<tr><th scope="row">Guaranteed?</th><td class="pd-no">No. We may not be able to offer one.</td><td class="pd-yes">Yes. A mentor is reserved for your slot.</td></tr>
<tr><th scope="row">Confirmation</th><td>We contact you if a slot opens</td><td class="pd-yes">WhatsApp confirmation within the hour</td></tr>
<tr><th scope="row">Who teaches</th><td>A working mentor</td><td>A working mentor</td></tr>
<tr><th scope="row">Scheduling order</th><td>After all paid bookings</td><td class="pd-yes">First</td></tr>
<tr><th scope="row">Commitment</th><td>None</td><td>None. One class, no enrolment required.</td></tr>
</tbody></table></div>`
      },
      {
        h2: 'When the free demo is the right choice',
        html: `
<p>If you are exploring with no deadline, join the waiting list and use the time well. Watch the recorded lessons on <a href="/how-we-teach">how we teach</a>, try the exercises in <a href="/free-resources">free resources</a> and read <a href="${C.inside}">what happens in a demo class</a> so you know what to look for.</p>`
      },
      {
        h2: 'When the priority demo is the right choice',
        html: `
<ul>
  <li>You want to decide this week, not next month.</li>
  <li>You are comparing institutes and need a real class to compare.</li>
  <li>You live outside India and need a time that fits your evening.</li>
  <li>Your child is excited now, and you know that does not last forever.</li>
</ul>
<p>The reasoning behind the fee is laid out in <a href="${C.why}">why we charge for a priority demo</a>, and the steps are in <a href="${C.book}">how to book a priority demo</a>.</p>`
      },
      {
        h2: 'What is identical in both',
        html: `
<p>The teaching. In either demo the mentor will do what we do in every class: give the student a problem, let them wrestle with it, and coach the thinking rather than dictate the answer. That is the approach behind <a href="${C.think}">we teach you how to think</a> and <a href="${C.engineer}">think like a software engineer</a>.</p>
<p>You can sample any subject, from <a href="${K.scratch}">Scratch</a> and <a href="${K.pyTeens}">Python</a> to <a href="${K.vedic}">Vedic maths</a> and <a href="${K.highSchool}">high school mathematics</a>.</p>`
      }
    ],
    faqs: [
      ['Is the free demo lower quality?', 'No. The teaching is the same. The only differences are timing and certainty.'],
      ['How long is the free demo wait?', 'It depends on mentor availability and can be several weeks. We cannot promise a date.'],
      ['Can I switch from the waiting list to a priority demo?', 'Yes, at any time. Book a priority demo and your slot is confirmed regardless of your place in the queue.'],
      ['Is the priority fee adjusted against course fees?', 'The fee covers the reserved demo class. For current course fees, see the pricing page or ask your mentor during the demo.']
    ]
  },

  // ───────────────────────────── 4. INSIDE ─────────────────────────────
  {
    slug: 'what-happens-in-a-demo-class',
    title: 'What Happens in a Demo Class | Step by Step | Modern Age Coders',
    description: 'A step by step look inside a Modern Age Coders demo class: how the mentor starts, what the student builds, and what parents should watch for.',
    eyebrow: 'Inside the class',
    h1: 'What actually happens <em>in a demo class.</em>',
    lede: 'No slides about our achievements. No countdown timer on a discount. A mentor, a student, a problem, and something working by the end.',
    answer: 'A Modern Age Coders demo is a real lesson. The mentor first finds the student\'s level with a few questions, then sets a small problem in coding or maths, coaches the student through planning and solving it, and ends with a working result and honest feedback for the parent. It is taught by a working mentor, not a sales team.',
    sections: [
      {
        h2: 'The shape of the class',
        html: `
<ol class="pd-steps">
  <li><b>A short conversation.</b> What does the student enjoy? What have they tried? The mentor is finding the right starting point, not reading a script.</li>
  <li><b>A problem, not a lecture.</b> "Make the cat chase the mouse." "Find the pattern in these numbers." The student is asked what they think should happen first.</li>
  <li><b>Thinking out loud.</b> The mentor coaches the plan: what are the steps, what could go wrong, how would we check it?</li>
  <li><b>Building it.</b> The student types, drags, calculates. The mentor steers with questions and resists taking over the keyboard.</li>
  <li><b>Something breaks.</b> It always does. Finding the bug is part of the lesson, and often the best part.</li>
  <li><b>A working result.</b> A small game, a program, a solved puzzle. The student can show it to the family.</li>
  <li><b>Straight feedback.</b> Where the student stands, what would suit them, and what would not.</li>
</ol>`
      },
      {
        h2: 'What parents should watch for',
        html: `
<p>Watch who is doing the thinking. If the mentor is typing and the child is nodding, that is a performance. In our classes the child does the work, and the mentor's job is to ask the next good question. This is the habit we describe in <a href="${C.think}">we teach you how to think</a>.</p>
<p>Watch what happens when something goes wrong. A good class treats an error as information. That calm, methodical response to a bug is the first step toward <a href="${C.engineer}">thinking like a software engineer</a>.</p>`
      },
      {
        h2: 'What the demo covers, by age',
        html: `
<ul>
  <li><b>Younger children:</b> a first animation or game in <a href="${K.scratch}">Scratch</a>, or number play from <a href="${K.mental}">mental maths</a>.</li>
  <li><b>Pre-teens:</b> a first real program from <a href="${K.pyKids}">Python and AI for kids</a>, or a puzzle from <a href="${K.mathsCoding}">maths through coding</a>.</li>
  <li><b>Teens:</b> a small project from <a href="${K.pyTeens}">Python</a>, <a href="${K.javaTeens}">Java</a>, <a href="${K.webTeens}">web development</a> or <a href="${K.gameKids}">game development</a>, or a problem from <a href="${K.dsaTeens}">problem solving and DSA</a>.</li>
  <li><b>College and adults:</b> a taste of <a href="${K.pyCollege}">Python</a>, <a href="${K.webCollege}">full stack development</a> or <a href="${K.genai}">generative AI</a>.</li>
</ul>
<p>You can see full recorded lessons first at <a href="/how-we-teach">how we teach</a>.</p>`
      },
      {
        h2: 'What you need',
        html: `
<p>A laptop or desktop, Chrome, a steady connection and a quiet corner. A phone works for watching, not for building. When you are ready, choose between the waiting list and a guaranteed slot in <a href="${C.versus}">free demo vs priority demo</a>, or go straight to <a href="${C.book}">how to book a priority demo</a>.</p>`
      }
    ],
    faqs: [
      ['Can parents sit in on the demo?', 'Yes, and we encourage it, especially for younger children. You will learn more from watching ten minutes than from any brochure.'],
      ['Does my child need prior coding experience?', 'No. The mentor starts from wherever the student is, including complete beginners.'],
      ['Will there be pressure to enrol at the end?', 'No. You get honest feedback on the student\'s level. Fees and batches come up only if you ask.'],
      ['Can the demo be in maths instead of coding?', 'Yes. Tell us the subject when you book and the mentor will prepare a maths problem at the right level.']
    ]
  },

  // ───────────────────────────── 5. BOOK ─────────────────────────────
  {
    slug: 'how-to-book-a-priority-demo',
    title: 'How to Book a Priority Demo | Pick a Slot, Pay Once, Get Confirmed',
    description: 'Step by step: choose a day and time, pay once through Razorpay, and get your Priority Live Demo confirmed on WhatsApp within the hour.',
    eyebrow: 'How to book',
    h1: 'Book your priority demo <em>in about two minutes.</em>',
    lede: 'One short form, a slot you choose, one secure payment. A mentor confirms on WhatsApp within the hour.',
    answer: 'To book a Priority Live Demo, press the booking button on this page, enter a name, email and WhatsApp number, pick a day and an hour between 10 am and 8 pm IST, and pay the one-time fee ({{PRICE}}) through Razorpay. Your slot is reserved immediately and a mentor confirms it on WhatsApp within the hour.',
    sections: [
      {
        h2: 'The steps',
        html: `
<ol class="pd-steps">
  <li><b>Open the booking form.</b> Use the button above, or submit any demo form on the site and choose the paid option when asked.</li>
  <li><b>Enter your details.</b> Student or parent name, email and a WhatsApp number. Pick your country code so we message the right number.</li>
  <li><b>Pick a day.</b> Today and tomorrow are offered first, then the next few days.</li>
  <li><b>Pick a time.</b> Hourly slots from 10 am to 8 pm IST. If you are outside India, your local time is shown under each slot.</li>
  <li><b>Pay once.</b> Payment runs through Razorpay. Cards, UPI, net banking and wallets are supported, depending on your country.</li>
  <li><b>Get confirmed.</b> You see your slot and order ID on screen, and a mentor confirms on WhatsApp within the hour.</li>
</ol>`
      },
      {
        h2: 'If you are not sure which time to pick',
        html: `
<p>You can pay without choosing a slot, and we will call to fix a time that suits you. For younger children, late afternoon or early evening usually works best. Avoid the hour right after school.</p>`
      },
      {
        h2: 'After you book',
        html: `
<ul>
  <li>Keep a laptop or desktop ready with Chrome and a steady connection.</li>
  <li>Tell the mentor on WhatsApp what the student is curious about: <a href="${K.pyTeens}">Python</a>, <a href="${K.webTeens}">web development</a>, <a href="${K.aiTeens}">AI</a>, <a href="${K.cppTeens}">C++</a>, <a href="${K.jee}">JEE foundation maths</a> or anything from the <a href="/courses">course list</a>.</li>
  <li>Read <a href="${C.inside}">what happens in a demo class</a> so you know what to look for.</li>
</ul>`
      },
      {
        h2: 'If something goes wrong with the payment',
        html: `
<p>If the payment page does not open, or money is taken but the page does not confirm, do not pay a second time. Send the payment ID to us on WhatsApp at 9123366161 or through the <a href="/contact">contact page</a>, and we will confirm your slot by hand.</p>
<p>Still deciding? Compare the two options in <a href="${C.versus}">free demo vs priority demo</a>, or read <a href="${C.why}">why we charge for a priority demo</a>.</p>`
      }
    ],
    faqs: [
      ['Which payment methods are accepted?', 'Payment runs through Razorpay, which supports cards, UPI, net banking and wallets. Available methods depend on your country.'],
      ['What time zone are the slots in?', 'Slots are in IST, from 10 am to 8 pm. Visitors outside India see their local time under each slot.'],
      ['Can I reschedule?', 'Message us on WhatsApp as early as you can and we will move the slot to another time that works.'],
      ['I paid but did not get a confirmation. What now?', 'Do not pay again. Send your payment ID on WhatsApp to 9123366161 and we will confirm the slot manually.']
    ]
  },

  // ───────────────────────────── 6. THINK ─────────────────────────────
  {
    slug: 'we-teach-you-how-to-think',
    title: 'We Teach You How to Think | The Modern Age Coders Method',
    description: 'Syntax is easy to look up. Thinking is not. How Modern Age Coders teaches students to read a problem, break it down and reason to an answer in coding and maths.',
    eyebrow: 'Our method',
    h1: 'We do not teach typing. <em>We teach thinking.</em>',
    lede: 'Any command can be looked up in seconds. What cannot be looked up is how to face a problem you have never seen and find a way in. That is what we teach.',
    answer: 'Modern Age Coders teaches students how to think before teaching them what to type. In every coding and maths class the student learns to read a problem carefully, break it into smaller parts, plan an approach, test it and fix what fails. Languages and formulas are taught as tools for that thinking, not as the goal.',
    sections: [
      {
        h2: 'Why thinking comes first',
        html: `
<p>A student who memorises a loop can write that loop. A student who understands why repetition exists can invent the loop, and everything built on it. The first student is stuck the moment the question changes. The second is just getting started.</p>
<p>We set out to give the best coding and maths education in the world, and we do not think that is possible by teaching faster. It is possible by teaching deeper: fewer topics rushed, more problems genuinely solved.</p>
<p class="pd-pull">Knowledge tells you the answer. Thinking gets you there when nobody has told you.</p>`
      },
      {
        h2: 'The habit we build in every class',
        html: `
<ol class="pd-steps">
  <li><b>Understand.</b> Say the problem back in your own words. What is given? What is being asked?</li>
  <li><b>Break it down.</b> Find the smaller problems hiding inside the big one.</li>
  <li><b>Plan.</b> Decide the steps before touching the keyboard or the pen.</li>
  <li><b>Try.</b> Build the simplest version that could work.</li>
  <li><b>Check and fix.</b> Test it, find where it fails, and work out why.</li>
  <li><b>Improve.</b> Ask whether there is a cleaner, faster or more general way.</li>
</ol>
<p>This loop is the same whether the student is building a game in <a href="${K.scratch}">Scratch</a>, a program in <a href="${K.pyTeens}">Python</a>, or a proof in <a href="${K.olympiad}">Olympiad mathematics</a>.</p>`
      },
      {
        h2: 'What this looks like for different ages',
        html: `
<ul>
  <li><b>Children</b> learn to give clear instructions and notice when instructions are ambiguous, through <a href="${K.scratch}">Scratch</a> and <a href="${K.mental}">mental maths</a>.</li>
  <li><b>Teens</b> learn to design before they build, through <a href="${K.dsaTeens}">problem solving and data structures</a> and <a href="${K.algebra}">algebra</a>.</li>
  <li><b>College students and adults</b> learn to reason about trade-offs, through <a href="${K.dsaCollege}">data structures and algorithms</a> and <a href="${K.pyCollege}">Python</a>.</li>
</ul>
<p>The same habit is why we teach the two subjects side by side, as explained in <a href="${C.together}">why coding and maths together</a>, and where it leads is covered in <a href="${C.engineer}">think like a software engineer</a>.</p>`
      },
      {
        h2: 'See it for yourself',
        html: `
<p>Watch a full recorded class at <a href="/how-we-teach">how we teach</a>, or sit in on a live one. <a href="${C.inside}">What happens in a demo class</a> tells you what to look for, and the <a href="${C.hub}">Priority Live Demo</a> gets you a slot today or tomorrow.</p>`
      }
    ],
    faqs: [
      ['Does "teaching thinking" mean less actual coding?', 'No. Students write a lot of code. The difference is that they plan it and understand it rather than copy it.'],
      ['Is this approach suitable for exam preparation?', 'Yes. Students who understand why a method works handle unfamiliar exam questions far better than students who memorised steps.'],
      ['My child is a complete beginner. Is this too advanced?', 'No. Thinking skills start with simple things: giving clear instructions and spotting patterns. Beginners do this from the first class.'],
      ['How is progress measured?', 'By what the student can do alone: the problems they solve and the projects they build without being told the steps.']
    ]
  },

  // ───────────────────────────── 7. ENGINEER ─────────────────────────────
  {
    slug: 'think-like-a-software-engineer',
    title: 'Think Like a Software Engineer | Real Software Training for Students',
    description: 'How Modern Age Coders trains students to work like real software engineers: planning, building, debugging, reading code and shipping projects that actually run.',
    eyebrow: 'Our method',
    h1: 'Train like a <em>real software engineer.</em>',
    lede: 'Software engineering is not knowing a language. It is knowing how to turn a fuzzy idea into a program that works, and how to fix it when it does not.',
    answer: 'Modern Age Coders trains students the way software engineers actually work: understand the requirement, design the solution, write the code in small pieces, test it, debug it calmly, and improve it. Students build real, running projects rather than copying tutorials, so they finish with the habits of an engineer and a portfolio to show for it.',
    sections: [
      {
        h2: 'What engineers do that tutorials skip',
        html: `
<ul>
  <li><b>They clarify the problem.</b> Half of engineering is working out what is really being asked.</li>
  <li><b>They design first.</b> Data, steps and edge cases are thought through before code is written.</li>
  <li><b>They build in small pieces.</b> Write a little, run it, confirm it, move on.</li>
  <li><b>They debug methodically.</b> Read the error. Form a guess. Test the guess. Never panic.</li>
  <li><b>They read other people's code.</b> Most real work is understanding what already exists.</li>
  <li><b>They finish.</b> A project that runs beats ten that are nearly done.</li>
</ul>
<p>A follow-along video teaches none of this, because in a video nothing ever goes wrong. In our classes things go wrong on purpose, and the student learns what to do next.</p>`
      },
      {
        h2: 'How that becomes a class',
        html: `
<p>Students are given requirements, not recipes. "Build a quiz that keeps score and never asks the same question twice." They plan it, the mentor challenges the plan, and then they build it. When it breaks, the mentor asks questions until the student finds the fault themselves.</p>
<p>This is the engineering end of the habit described in <a href="${C.think}">we teach you how to think</a>. It needs a mentor watching closely, which is why we keep <a href="${C.batches}">batches small and offer 1-on-1 classes</a>.</p>`
      },
      {
        h2: 'The path from first program to real software',
        html: `
<ul>
  <li><b>Foundations:</b> <a href="${K.scratch}">Scratch</a> and <a href="${K.pyKids}">Python for kids</a> build logic and confidence.</li>
  <li><b>Core programming:</b> <a href="${K.pyTeens}">Python</a>, <a href="${K.javaTeens}">Java</a> or <a href="${K.cppTeens}">C++</a> for teens.</li>
  <li><b>Problem solving:</b> <a href="${K.dsaTeens}">DSA for teens</a> and <a href="${K.dsaCollege}">interview-ready DSA</a>.</li>
  <li><b>Building products:</b> <a href="${K.webTeens}">full stack web development for teens</a> and the <a href="${K.webCollege}">full stack developer course</a>.</li>
  <li><b>Modern AI:</b> <a href="${K.aiTeens}">AI and machine learning</a> and <a href="${K.genai}">generative AI</a>.</li>
</ul>
<p>Student work is on display in <a href="/student-labs">student labs</a>, and outcomes in <a href="/success-stories">success stories</a>.</p>`
      },
      {
        h2: 'Why maths is part of it',
        html: `
<p>Strong engineers reason precisely, estimate sensibly and spot patterns. Those are mathematical habits. That is why we teach both subjects, as explained in <a href="${C.together}">why coding and maths together</a>.</p>
<p>To see the approach live, book the <a href="${C.hub}">Priority Live Demo</a> or read <a href="${C.inside}">what happens in a demo class</a>.</p>`
      }
    ],
    faqs: [
      ['At what age can a child start learning this way?', 'The habits start early. Young children learn to plan and debug in Scratch. The tools grow more professional as the student grows.'],
      ['Do students build real projects?', 'Yes. Every course is built around projects that run, from small games to full web applications.'],
      ['Is this useful if my child does not want to be an engineer?', 'Yes. Breaking down problems, testing ideas and fixing mistakes calmly are useful in every field.'],
      ['Which language should a beginner start with?', 'Usually Scratch for younger children and Python for older beginners. The mentor will recommend a start after the demo.']
    ]
  },

  // ───────────────────────────── 8. TOGETHER ─────────────────────────────
  {
    slug: 'why-coding-and-maths-together',
    title: 'Why Coding and Maths Together | One Way of Thinking, Two Subjects',
    description: 'Coding and maths train the same habit: precise, step by step reasoning. Why Modern Age Coders teaches both, and how each subject makes the other easier.',
    eyebrow: 'Our method',
    h1: 'Coding and maths are <em>the same skill in two languages.</em>',
    lede: 'Both ask you to be precise, to reason step by step and to prove that your answer is right. Learn one well and the other gets easier.',
    answer: 'Modern Age Coders teaches coding and maths together because they train the same habit of mind: precise, step by step reasoning. Maths gives coding its logic, patterns and efficiency. Coding gives maths something you can run, test and see. Students who learn both become stronger problem solvers than students who learn either alone.',
    sections: [
      {
        h2: 'What maths gives a programmer',
        html: `
<ul>
  <li><b>Logic.</b> Conditions, proofs and cases are the backbone of every program.</li>
  <li><b>Patterns.</b> Spotting structure is how you replace a hundred lines with five.</li>
  <li><b>Efficiency.</b> Knowing why one method is faster than another is pure mathematics.</li>
  <li><b>The road to AI.</b> Machine learning is built on algebra, probability and calculus.</li>
</ul>`
      },
      {
        h2: 'What coding gives a maths student',
        html: `
<ul>
  <li><b>Instant feedback.</b> A program is a claim you can test right now.</li>
  <li><b>Something to see.</b> Plot the function. Simulate the dice. Watch the pattern appear.</li>
  <li><b>A reason to care.</b> Coordinates matter when your game character needs to move.</li>
</ul>
<p>Our <a href="${K.mathsCoding}">maths through coding</a> course is built entirely on this idea.</p>`
      },
      {
        h2: 'How we teach maths',
        html: `
<p>As reasoning, not tricks. A shortcut that is understood is a tool. A shortcut that is memorised is a trap waiting for the first unfamiliar question. We teach number sense in <a href="${K.mental}">mental maths</a>, speed with understanding in <a href="${K.vedic}">Vedic maths</a>, structure in <a href="${K.algebra}">algebra foundations</a> and <a href="${K.highSchool}">high school mathematics</a>, and real problem solving in <a href="${K.jee}">JEE foundation maths</a> and <a href="${K.olympiad}">Olympiad mathematics</a>.</p>
<p>See every maths course at <a href="/courses/maths">maths courses</a>, and a longer comparison of the two subjects at <a href="/coding-vs-maths">coding vs maths</a>.</p>`
      },
      {
        h2: 'One habit underneath',
        html: `
<p>Read the problem. Break it down. Plan. Try. Check. Improve. That loop is set out in <a href="${C.think}">we teach you how to think</a>, and it is the same loop a professional uses, as described in <a href="${C.engineer}">think like a software engineer</a>.</p>
<p>You can sample either subject in a demo. The <a href="${C.hub}">Priority Live Demo</a> gets you a guaranteed slot.</p>`
      }
    ],
    faqs: [
      ['Does my child need to be good at maths to learn coding?', 'No. Beginners need curiosity, not advanced maths. The two grow together over time.'],
      ['Should we start with coding or maths?', 'Start with whichever the student is more curious about. The mentor can advise after a demo.'],
      ['Can a student take both subjects at once?', 'Yes, many do. The mentor will help plan a schedule that does not overload the student.'],
      ['Is the maths aligned with school syllabuses?', 'We offer board and exam specific courses as well as foundation courses. See the maths course list for your syllabus.']
    ]
  },

  // ───────────────────────────── 9. BATCHES ─────────────────────────────
  {
    slug: 'small-batches-and-1-on-1-classes',
    title: 'Small Live Batches and 1-on-1 Classes | Why Mentor Time Is Limited',
    description: 'Modern Age Coders teaches in small live batches and private 1-on-1 classes. Why we keep it that way, what it means for your child, and why demo slots are scarce.',
    eyebrow: 'How we run classes',
    h1: 'Small batches. Private classes. <em>Limited on purpose.</em>',
    lede: 'A mentor can only watch a few students think at once. So we keep classes small, and we accept that this makes our time scarce.',
    answer: 'Modern Age Coders teaches in small live batches and personal 1-on-1 classes, never in large webinars. Small groups let the mentor see each student\'s reasoning and correct it in the moment. The cost of that choice is that mentor time is limited, which is why free demos wait in a queue and guaranteed demo slots carry a small fee.',
    sections: [
      {
        h2: 'Why small',
        html: `
<p>Teaching someone to think means watching them think. The mentor has to see the half-finished plan, the wrong turn and the moment of confusion, and respond right then. In a crowd that is impossible. The quiet students vanish and the quick ones coast.</p>
<p>In a small batch every student speaks, shares a screen and gets corrected individually, while still learning from classmates. That is the setting our whole method depends on, from <a href="${C.think}">teaching how to think</a> to <a href="${C.engineer}">training like a software engineer</a>.</p>`
      },
      {
        h2: 'When 1-on-1 is the better choice',
        html: `
<ul>
  <li>The student is well ahead of or behind their age group.</li>
  <li>There is a fixed goal and a deadline, such as an exam or a competition.</li>
  <li>The family needs unusual timings or lives in a distant time zone.</li>
  <li>The student is shy and needs to build confidence first.</li>
</ul>
<p>Group and 1-on-1 fees are listed openly on the <a href="/pricing">pricing page</a> and explained further at <a href="/coding-classes-fees">coding classes fees</a>.</p>`
      },
      {
        h2: 'What this has to do with demos',
        html: `
<p>Everything. Because our mentors are in these classes most of the day, there is little spare time for free demos. We will not shorten a student's class to make room for one. So free demos wait for a gap, and a guaranteed slot is paid. The full explanation is in <a href="${C.why}">why we charge for a priority demo</a>, and the two options are compared in <a href="${C.versus}">free demo vs priority demo</a>.</p>`
      },
      {
        h2: 'Find a course',
        html: `
<p>Both formats are available across the catalogue: <a href="/levels/coding-for-kids">coding for kids</a>, <a href="/levels/coding-for-teens">coding for teens</a>, <a href="/levels/coding-for-college-students">coding for college students</a> and <a href="/courses/maths">maths</a>. Popular picks include <a href="${K.pyKids}">Python and AI for kids</a>, <a href="${K.webTeens}">full stack web development for teens</a> and <a href="${K.dsaCollege}">data structures and algorithms</a>.</p>
<p>To see a class for yourself, book the <a href="${C.hub}">Priority Live Demo</a>.</p>`
      }
    ],
    faqs: [
      ['Are classes live or recorded?', 'Live, with a mentor, in small batches or 1-on-1. Recordings are there for revision, not as a replacement.'],
      ['Can my child move between a batch and 1-on-1?', 'Yes. Talk to your mentor and we will arrange the format that suits the student best.'],
      ['Do you run large webinar-style classes?', 'No. We do not believe thinking can be taught to a crowd.'],
      ['Why are free demo slots so hard to get?', 'Mentors are teaching enrolled students most of the day, and we do not take time from those classes for demos.']
    ]
  },

  // ───────────────────────────── 10. TRUST ─────────────────────────────
  {
    slug: 'why-trust-modern-age-coders',
    title: 'Why Trust Modern Age Coders | What We Promise and How to Check',
    description: 'What Modern Age Coders promises students and parents, what we refuse to do, and the simple ways you can check our teaching before paying for a course.',
    eyebrow: 'Trust',
    h1: 'Do not take our word for it. <em>Check us.</em>',
    lede: 'We set out to give the best coding and maths education in the world. That is a big claim, so here is how we work toward it and how you can test it yourself.',
    answer: 'Modern Age Coders aims to give the best coding and maths education in the world by teaching students how to think, solve problems and build real software, in small live batches and 1-on-1 classes taught by working mentors. You can verify this before enrolling: watch full recorded classes for free, read open pricing, see student projects, and sit in on a live demo.',
    sections: [
      {
        h2: 'What we promise',
        html: `
<ul>
  <li><b>Real understanding.</b> Students learn why things work, as set out in <a href="${C.think}">we teach you how to think</a>.</li>
  <li><b>Real skills.</b> Students plan, build, debug and finish projects, as described in <a href="${C.engineer}">think like a software engineer</a>.</li>
  <li><b>Real attention.</b> <a href="${C.batches}">Small batches and 1-on-1 classes</a>, never webinars.</li>
  <li><b>Both subjects, properly.</b> Coding and maths taught as one way of reasoning. See <a href="${C.together}">why coding and maths together</a>.</li>
</ul>`
      },
      {
        h2: 'What we refuse to do',
        html: `
<ul>
  <li>We do not run demos with a sales team in place of teachers.</li>
  <li>We do not promise a free demo date we cannot keep. We tell you it is a waiting list.</li>
  <li>We do not hide fees. They are on the <a href="/pricing">pricing page</a>.</li>
  <li>We do not tell every parent their child is gifted. You get honest feedback.</li>
</ul>
<p>That honesty is also why the <a href="${C.hub}">Priority Live Demo</a> exists. Rather than pretend free slots are plentiful, we explain the situation in <a href="${C.why}">why we charge for a priority demo</a>.</p>`
      },
      {
        h2: 'How to check us before you pay for a course',
        html: `
<ol class="pd-steps">
  <li><b>Watch a whole class.</b> Full recorded lessons are free at <a href="/how-we-teach">how we teach</a>.</li>
  <li><b>Read the syllabus.</b> Every course under <a href="/courses">courses</a> lists what is taught, week by week.</li>
  <li><b>Look at student work.</b> Projects are in <a href="/student-labs">student labs</a> and results in <a href="/success-stories">success stories</a>.</li>
  <li><b>Try the free material.</b> Work through <a href="/free-resources">free resources</a>.</li>
  <li><b>Sit in a live class.</b> Read <a href="${C.inside}">what happens in a demo class</a>, then <a href="${C.book}">book a priority demo</a>.</li>
  <li><b>Ask us anything.</b> The <a href="/faq">FAQ</a>, the <a href="/about">about page</a> and <a href="/contact">contact</a> are open.</li>
</ol>`
      },
      {
        h2: 'Where to begin',
        html: `
<p>If you are new to us, the most useful next step is a live class. Compare the options in <a href="${C.versus}">free demo vs priority demo</a>. Families often start with <a href="${K.scratch}">Scratch</a>, <a href="${K.pyTeens}">Python for teens</a>, <a href="${K.pyCollege}">Python for college students</a> or <a href="${K.mental}">mental maths</a>.</p>`
      }
    ],
    faqs: [
      ['Is Modern Age Coders really the best in the world?', 'That is what we work toward every day, and we would rather you judge it yourself. Watch a recorded class, see student projects and sit in a live demo.'],
      ['Who teaches the classes?', 'Working mentors who teach our regular small batches and 1-on-1 classes. The same mentors teach the demos.'],
      ['Can I see the fees before talking to anyone?', 'Yes. Fees are listed on the pricing page.'],
      ['What if the course is not right for my child?', 'The mentor will tell you so after the demo. We would rather lose an enrolment than place a student in the wrong class.']
    ]
  }
];

module.exports = { pages, C, K, CLUSTER_CARDS, PROMISE };
