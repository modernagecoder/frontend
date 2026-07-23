/**
 * gen-b2b-services.js
 * One-off authoring generator for the B2B services SPOKE pages.
 * Emits src/pages/<slug>.html + <slug>.md for each page in PAGES.
 * Structure mirrors the verified pilot (custom-software-development-services).
 * Editorial theme only. No em-dashes in copy. Real facts only, no fabricated proof.
 *
 * Run: node scripts/gen-b2b-services.js
 * Commit the emitted .html/.md (they are served statically).
 */
const fs = require('fs');
const path = require('path');
const OUT = path.join(__dirname, '..', 'src', 'pages');
const BASE = 'https://learn.modernagecoders.com';

// ---- shared inline SVGs ----
const I = {
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  wa: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.99.36 1.96.7 2.88a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.2-1.2a2 2 0 012.11-.45c.92.34 1.89.57 2.88.7A2 2 0 0122 16.92z" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7.4-6.3-4.6L5.7 21.4 8 14 2 9.4h7.6z" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  checkc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke-linecap="round" stroke-linejoin="round"/></svg>'
};
const WHY_ICON = { star: I.star, check: I.checkc, shield: I.shield, chat: I.chat };

// ---- reusable content blocks ----
const engageDev = [
  { tag: 'Best for a defined build', h3: 'Fixed scope project', p: 'You know what you need. We scope it, quote a fixed price against milestones, and deliver to an agreed timeline.', items: ['Clear deliverables and dates', 'Milestone based payments', 'Handover and documentation included'], btn: 'Get a quote' },
  { tag: 'Best for ongoing work', h3: 'Monthly retainer', p: 'Continuous development and improvements after launch, on a predictable monthly commitment.', items: ['Reserved engineering time', 'Priority fixes and features', 'Cancel or pause any time'], btn: 'Discuss a retainer' },
  { tag: 'Best for scaling teams', h3: 'Dedicated team', p: 'Extend your team with engineers who work as your own, on your board and at your pace.', items: ['Developers aligned to your process', 'Flexible ramp up and down', 'Direct communication'], btn: 'Build a team' }
];
const whyDev = [
  { icon: 'star', h3: 'Proven since 2020', p: 'We have built and taught software since 2020, with more than 10,000 learners across over 25 countries and a 4.9 rating from 547 Google reviews. The team that teaches these tools also ships them.' },
  { icon: 'check', h3: 'You own everything', p: 'Full source code, documentation and access on handover. No lock-in and no dependence on us. You can take the work to any team, including your own.' },
  { icon: 'shield', h3: 'Maintainable by design', p: 'We write tested, documented code that another developer can pick up. What we build is an asset, not a trap.' },
  { icon: 'chat', h3: 'Plain communication', p: 'Weekly updates in language you can follow, honest timelines and a single point of contact. You always know what is done and what is next.' }
];

// ---- the 7 pages ----
const PAGES = [
  {
    slug: 'web-application-development-services',
    crumb: 'Web Development',
    metaTitle: 'Web Application Development Company | Custom Web Apps & SaaS | Modern Age Coders',
    metaDesc: 'Custom web application development for businesses worldwide. We build fast, secure web apps, SaaS platforms, customer portals and dashboards that hold up under real traffic. Free consultation.',
    serviceType: 'Web application development',
    h1: 'Web applications that <span class="amber">hold up under real traffic.</span>',
    sub: 'From customer portals to full SaaS platforms, we build web software that is fast, secure and easy to use on any device, and easy to maintain long after launch.',
    waText: 'Hi, I need a web application built',
    trust: [['Since 2020', 'Shipping web software'], ['You own it', 'Full code handover'], ['Worldwide', 'Remote delivery']],
    panelHeading: 'Good fit if you need',
    panel: ['A web app tailored to your business', 'A SaaS product real customers can use', 'A portal for clients, staff or partners', 'A dashboard that turns data into decisions'],
    capsule: [
      'Web application development means building browser based software for your business, from customer portals and dashboards to full SaaS platforms. Modern Age Coders designs, builds, tests and maintains fast, secure, responsive web apps that work on any device.',
      'We deliver worldwide, hand over full source code with documentation, and quote each project after a free consultation. To start, describe your requirement below or message us on WhatsApp at +91 91233 66161.'
    ],
    servicesEyebrow: 'What we build', servicesTitle: 'Web software shaped to your business',
    servicesSub: 'If it runs in a browser and serves your customers or your team, we can build it. A few of the things we are asked for most.',
    services: [
      ['Custom web apps', 'Browser based software built around your exact process, not a template forced to fit.'],
      ['SaaS platforms', 'Multi-tenant products with accounts, subscriptions, roles and billing, ready for paying users.'],
      ['Customer &amp; partner portals', 'Secure logins where clients, staff or vendors track orders, tickets and documents.'],
      ['Admin dashboards', 'Live dashboards that pull from your systems and surface the numbers that drive decisions.'],
      ['Progressive web apps', 'App-like experiences that install to the home screen and work offline, without an app store.'],
      ['E-commerce &amp; checkout', 'Storefronts, carts and payment flows that convert and handle real order volume.'],
      ['API-driven frontends', 'Fast interfaces on top of your APIs, headless CMS or existing backend.'],
      ['Web app redesign', 'Rebuild a slow, dated or fragile web app into something quick and pleasant to use.']
    ],
    process: [
      ['Discover', 'A free consultation to map your users, workflow and goals. We write a clear requirement together.'],
      ['Scope &amp; quote', 'A written proposal with features, milestones, timeline and a fixed or milestone based price.'],
      ['Design', 'Wireframes and a clickable flow so you can see and shape the app before we build it.'],
      ['Build', 'Short iterations with working features you can try each week. Feedback goes straight back in.'],
      ['Test &amp; launch', 'Automated tests, cross-device checks and performance tuning, then we ship and monitor the release.'],
      ['Support', 'Optional retainer for improvements, fixes and new features once you are live.']
    ],
    stackTitle: 'Modern, maintainable technology',
    stackSub: 'We choose tools that are proven, well supported and easy for any team to maintain later. If your stack is different, we work in yours.',
    stack: [['Frontend', ['React', 'Next.js', 'Vue', 'TypeScript', 'Tailwind']], ['Backend', ['Node.js', 'Python', 'Django', 'Express', 'REST &amp; GraphQL']], ['Data', ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis']], ['Cloud &amp; ops', ['AWS', 'Vercel', 'Docker', 'CI / CD']]],
    whoTitle: 'Businesses that live on the web',
    who: [['Startups', 'A web product built right the first time, ready to grow with your users.'], ['SMEs', 'Portals, dashboards and tools that replace scattered spreadsheets and manual work.'], ['E-commerce', 'Fast storefronts and checkout that handle traffic spikes without breaking.'], ['Large organisations', 'Internal web apps and integrations that generic software cannot cover.']],
    whyHeadline: 'Built right, handed over clean',
    formHeading: 'Tell us about your web app',
    dataService: 'Web and Web-App Development', dataSrc: 'web-application-development',
    formPlaceholder: 'Describe the web app, who will use it, and any timeline.',
    faq: [
      ['What is web application development?', 'A web application is software you use in a browser instead of installing it. It can be a customer portal, a dashboard, or a full SaaS product. We design, build, test and maintain it end to end so it fits your business exactly.'],
      ['Will my web app work on mobile?', 'Yes. We build responsive web apps that work well on phones, tablets and desktops, and we can deliver a progressive web app that installs to the home screen and works offline.'],
      ['Is a web app good for SEO?', 'It can be. We build with clean markup, fast load times and server rendering where it matters, so your public pages are crawlable and rank, while your app stays fast for logged-in users.'],
      ['How long does it take?', 'A focused portal can take a few weeks, while a full SaaS platform can take a few months. After a free consultation we give a written timeline with milestones.'],
      ['Will I own the code?', 'Yes. You receive the full source code, documentation and access on handover. There is no lock-in and you can continue with any team.']
    ],
    related: ['custom-software', 'mobile', 'ai', 'seo', 'aeo', 'hub']
  },

  {
    slug: 'mobile-app-development-services',
    crumb: 'Mobile Apps',
    metaTitle: 'Mobile App Development Company | Android, iOS & Cross-Platform | Modern Age Coders',
    metaDesc: 'Mobile app development for businesses worldwide. We build Android, iOS and cross-platform apps with clean UX, offline support and store-ready builds. Free consultation and a written quote.',
    serviceType: 'Mobile app development',
    h1: 'Mobile apps your users <span class="amber">keep on the home screen.</span>',
    sub: 'Native or cross-platform, we build fast, reliable apps with clean design, offline resilience and a smooth path through the app stores.',
    waText: 'Hi, I need a mobile app built',
    trust: [['Since 2020', 'Shipping software'], ['Android &amp; iOS', 'One team, both'], ['Worldwide', 'Remote delivery']],
    panelHeading: 'Good fit if you need',
    panel: ['An Android and iOS app from one codebase', 'A native app that uses the full device', 'An app for an existing web product', 'Store submission handled for you'],
    capsule: [
      'Mobile app development means building software for phones and tablets, delivered through the Google Play Store and Apple App Store. Modern Age Coders builds Android, iOS and cross-platform apps with clean UX, offline support and reliable performance.',
      'We deliver worldwide, hand over full source code with documentation, and quote each project after a free consultation. To start, describe your requirement below or message us on WhatsApp at +91 91233 66161.'
    ],
    servicesEyebrow: 'What we build', servicesTitle: 'Apps built to be kept, not deleted',
    servicesSub: 'Whether you need one app for both stores or a native build that uses every part of the device, we cover it.',
    services: [
      ['Cross-platform apps', 'One codebase for Android and iOS with React Native or Flutter, faster and cheaper to maintain.'],
      ['Native Android', 'Kotlin apps that use the full device when you need maximum performance and platform features.'],
      ['Native iOS', 'Swift apps built to Apple guidelines, ready for the App Store and a polished iPhone experience.'],
      ['App backends &amp; APIs', 'The servers, databases and APIs that power your app, built to scale with your users.'],
      ['App redesign &amp; rescue', 'Modernise a dated app or take over one that stalled, and get it back on track.'],
      ['Offline-first apps', 'Apps that keep working without a signal and sync cleanly when the connection returns.'],
      ['Store submission', 'We prepare, submit and shepherd your app through Google Play and App Store review.']
    ],
    process: [
      ['Discover', 'A free consultation to map your users, platforms and goals. We write a clear requirement together.'],
      ['Scope &amp; quote', 'A written proposal with features, milestones, timeline and a fixed or milestone based price.'],
      ['Design', 'Wireframes and a clickable prototype so you can feel the app before we build it.'],
      ['Build', 'Short iterations with installable builds you can try on a real device each week.'],
      ['Test &amp; submit', 'Device testing, store preparation and submission, then we monitor the launch.'],
      ['Support', 'Optional retainer for updates, new features and OS compatibility once you are live.']
    ],
    stackTitle: 'The right tool for your app',
    stackSub: 'Cross-platform when speed and budget matter, native when performance does. We help you pick, then build it well.',
    stack: [['Cross-platform', ['React Native', 'Flutter']], ['Native', ['Swift', 'Kotlin']], ['Backend &amp; data', ['Node.js', 'Python', 'Firebase', 'REST &amp; GraphQL']], ['Delivery', ['App Store', 'Google Play', 'Push', 'Analytics']]],
    whoTitle: 'Who it is for',
    who: [['Startups', 'A launch-ready app that proves your idea to users and investors.'], ['SMEs', 'A customer-facing app that puts your service in your customers pocket.'], ['Service businesses', 'Bookings, jobs and accounts on mobile, built for how you deliver.'], ['Product teams', 'Extend an existing web product to a proper mobile experience.']],
    whyHeadline: 'Built right, handed over clean',
    formHeading: 'Tell us about your app',
    dataService: 'Mobile App Development', dataSrc: 'mobile-app-development',
    formPlaceholder: 'Describe the app, which platforms you need, who will use it, and any timeline.',
    faq: [
      ['Should I build native or cross-platform?', 'Cross-platform, with React Native or Flutter, gives you one codebase for both stores at lower cost, and suits most apps. Native, with Swift or Kotlin, is best when you need maximum performance or deep device features. We help you choose in the free consultation.'],
      ['Can you build for both Android and iOS?', 'Yes. Most of our builds ship to both the Google Play Store and Apple App Store, either from a single cross-platform codebase or as native apps.'],
      ['Do you handle app store submission?', 'Yes. We prepare the store listings, meet the technical requirements, and manage the submission and review process for both stores.'],
      ['How much does a mobile app cost?', 'Each app is scoped to your requirement, so we quote after a free consultation. You get a written proposal with scope, timeline and a fixed or milestone based price.'],
      ['Do you maintain the app after launch?', 'Yes. Apps need updates as phones and operating systems change. We offer a maintenance retainer for fixes, new features and OS compatibility.']
    ],
    related: ['custom-software', 'web', 'ai', 'maintenance', 'mvp', 'hub']
  },

  {
    slug: 'ai-development-services',
    crumb: 'AI Development',
    metaTitle: 'AI Development Company | AI Agents, Chatbots & Automation | Modern Age Coders',
    metaDesc: 'AI development and automation for businesses worldwide. We build AI agents, chatbots, RAG assistants and workflow automation wired into your real systems and data. Free consultation.',
    serviceType: 'AI development and automation',
    h1: 'AI agents and automation <span class="amber">wired into real work.</span>',
    sub: 'Not a demo that impresses once, but AI that plugs into your data and tools and does useful work every day. Agents, assistants and automation, built to be reliable.',
    waText: 'Hi, I need AI development for my business',
    trust: [['Since 2020', 'Building with AI'], ['Your data', 'Stays yours'], ['Worldwide', 'Remote delivery']],
    panelHeading: 'Good fit if you need',
    panel: ['An assistant that knows your documents', 'A chatbot that actually helps customers', 'Automation for repetitive manual work', 'AI features inside your own product'],
    capsule: [
      'AI development and automation means building software that uses large language models and machine learning to do real work: answering from your documents, handling support, processing paperwork, or automating a workflow. Modern Age Coders builds AI agents, chatbots, knowledge assistants and automation wired into your existing systems.',
      'We deliver worldwide, keep your data in systems you control, and quote each project after a free consultation. To start, describe your requirement below or message us on WhatsApp at +91 91233 66161.'
    ],
    servicesEyebrow: 'What we build', servicesTitle: 'AI that earns its keep',
    servicesSub: 'The point is not a clever demo. It is software that saves your team hours or serves your customers better, every day.',
    services: [
      ['AI agents', 'Agents that plan, use tools and complete multi-step tasks, not just answer a single question.'],
      ['Customer &amp; support chatbots', 'Assistants that answer accurately from your real content and hand off to a human when needed.'],
      ['Knowledge assistants (RAG)', 'Ask questions across your documents, policies and data and get sourced, grounded answers.'],
      ['Workflow automation', 'Connect your tools so repetitive steps run automatically, with AI handling the judgement calls.'],
      ['Document processing', 'Pull structured data from invoices, forms and contracts and push it into your systems.'],
      ['AI features in your product', 'Add search, summarisation, drafting or recommendations to the software you already run.'],
      ['LLM integration &amp; guardrails', 'Safe, monitored connections to models like Claude and OpenAI, with cost and quality controls.']
    ],
    process: [
      ['Discover', 'A free consultation to find a workflow where AI saves real time. We write down the goal and how we will measure it.'],
      ['Scope &amp; quote', 'A written proposal with the use case, milestones, timeline and a fixed or milestone based price.'],
      ['Prototype', 'A working proof of concept on your real data, so you see the value before the full build.'],
      ['Build', 'Short iterations with working AI you can try, wired into your tools and data.'],
      ['Test &amp; harden', 'Measure accuracy, add guardrails and monitoring, and control cost before it goes live.'],
      ['Support', 'Optional retainer to tune, extend and keep the AI reliable as your needs change.']
    ],
    stackTitle: 'How we build it',
    stackSub: 'We use business-grade models and proven patterns, so the result is accurate, safe and affordable to run.',
    stack: [['Models', ['OpenAI', 'Claude', 'Open models']], ['Frameworks', ['RAG', 'LangChain', 'Vector DBs']], ['Backend', ['Python', 'Node.js', 'APIs']], ['Operations', ['Monitoring', 'Evaluations', 'Cost controls']]],
    whoTitle: 'Who it is for',
    who: [['SMEs', 'Automate the repetitive manual work that eats your team time.'], ['Support teams', 'Deflect routine tickets with an assistant that answers from your real content.'], ['Product companies', 'Add AI features to your product without hiring a full AI team.'], ['Operations-heavy orgs', 'Process documents and paperwork automatically and accurately.']],
    whyHeadline: 'Reliable AI, not a party trick',
    formHeading: 'Tell us what you want AI to do',
    dataService: 'AI Development and Automation', dataSrc: 'ai-development',
    formPlaceholder: 'Describe the workflow, the data involved, and what a good outcome looks like.',
    faq: [
      ['What can AI actually do for my business?', 'Practical things: answer customer and staff questions from your documents, handle routine support, pull data out of invoices and forms, draft and summarise, and automate multi-step workflows. We look for where it saves real time or serves customers better.'],
      ['Is my data safe with AI?', 'Yes. We use business-grade model APIs that do not train on your data, keep your documents in systems you control, and use retrieval so your data is used only to answer your own questions.'],
      ['Why build something instead of just using ChatGPT?', 'A general chatbot does not know your business, your data or your systems. We connect models to your content and tools, add guardrails, and put the AI where the work happens, so it is accurate and actually gets used.'],
      ['Can you guarantee the AI never makes mistakes?', 'No system is perfect, so we design for it: grounded answers with sources, guardrails, human handoff for edge cases, and monitoring. We measure accuracy on your real data before launch.'],
      ['How much does an AI project cost?', 'Each project is scoped to your requirement, so we quote after a free consultation. We often start with a small proof of concept so you can see value before committing to the full build.']
    ],
    related: ['custom-software', 'web', 'aeo', 'maintenance', 'mvp', 'hub']
  },

  {
    slug: 'mvp-development-company',
    crumb: 'MVP & Product',
    metaTitle: 'MVP Development Company for Startups | Idea to Launch | Modern Age Coders',
    metaDesc: 'MVP and product development for startups worldwide. We take your idea to a launchable product that early users and investors can try, fast and engineered to grow. Free consultation.',
    serviceType: 'MVP and product development',
    h1: 'From idea to a product <span class="amber">early users can try.</span>',
    sub: 'Ship the smallest version that proves your idea, without building it twice. We help founders go from concept to a real product people can use, fast and engineered to grow.',
    waText: 'Hi, I want to build an MVP',
    trust: [['Since 2020', 'Shipping products'], ['You own it', 'Full code and IP'], ['Worldwide', 'Remote delivery']],
    panelHeading: 'Good fit if you need',
    panel: ['A launchable MVP, not a slide deck', 'A product to put in front of early users', 'A demo investors can actually try', 'A codebase you can build on, not throw away'],
    capsule: [
      'An MVP, or minimum viable product, is the smallest version of your idea that real users can try and give feedback on. Modern Age Coders helps founders take an idea from wireframe to a launchable product, built fast but engineered so you can grow it instead of rebuilding it.',
      'We deliver worldwide, hand over full source code and IP, and quote each project after a free consultation. To start, describe your idea below or message us on WhatsApp at +91 91233 66161.'
    ],
    servicesEyebrow: 'What we do', servicesTitle: 'Everything from idea to launch',
    servicesSub: 'We help you build the right small thing, then help you grow it once real users tell you what matters.',
    services: [
      ['MVP scoping', 'We cut the idea down to the core that proves value, so you launch in weeks, not quarters.'],
      ['Rapid prototyping', 'A clickable prototype to test the flow and the pitch, before a line of production code.'],
      ['Full MVP build', 'A real, working product with the features early users need and nothing they do not.'],
      ['Investor-ready demos', 'A stable, polished build you can confidently put in front of investors and pilots.'],
      ['Iterate to fit', 'After launch we help you read the feedback and ship the changes that move the numbers.'],
      ['Technical partner', 'No technical co-founder yet? We fill the gap and keep your options open.']
    ],
    process: [
      ['Discover', 'A free consultation to understand the idea, the user and what success looks like.'],
      ['Scope the MVP', 'We agree the smallest version that proves the idea, and quote a fixed price and timeline.'],
      ['Design', 'Wireframes and a clickable flow so you can see and pitch it before we build.'],
      ['Build fast', 'Short iterations with working software, using proven building blocks to move quickly.'],
      ['Launch', 'We ship to your first users and set up the feedback and analytics you need.'],
      ['Iterate', 'We help you improve toward product-market fit, on a retainer if you want to keep moving.']
    ],
    stackTitle: 'Fast to build, ready to grow',
    stackSub: 'We use proven building blocks so you launch quickly, on a foundation that scales instead of one you outgrow in a month.',
    stack: [['Frontend', ['React', 'Next.js', 'React Native']], ['Backend', ['Node.js', 'Python', 'Firebase']], ['Data &amp; cloud', ['PostgreSQL', 'MongoDB', 'Vercel', 'AWS']], ['Speed', ['Prebuilt auth', 'Payments', 'Analytics']]],
    whoTitle: 'Who it is for',
    who: [['First-time founders', 'A technical team that turns your idea into something real and launchable.'], ['Non-technical founders', 'The engineering half of the founding team, so you can focus on customers.'], ['Funded startups', 'Move fast on a runway, with a team that ships and can scale with you.'], ['Companies', 'Launch a new product line without pulling your core team off their work.']],
    whyHeadline: 'Ship fast, without building it twice',
    formHeading: 'Tell us about your idea',
    dataService: 'MVP and Product Development', dataSrc: 'mvp-development',
    formPlaceholder: 'Describe the idea, who it is for, and where you are now.',
    engage: [
      { tag: 'Best to launch fast', h3: 'Fixed scope MVP', p: 'We scope the smallest launchable version, quote a fixed price and ship it to a timeline.', items: ['Agreed core feature set', 'Milestone based payments', 'Launch-ready handover'], btn: 'Scope my MVP' },
      { tag: 'Best after launch', h3: 'Monthly retainer', p: 'Keep iterating toward product-market fit with reserved engineering time each month.', items: ['Continuous iteration', 'Priority features and fixes', 'Cancel or pause any time'], btn: 'Discuss a retainer' },
      { tag: 'Best for founders', h3: 'Technical partner', p: 'Ongoing product and engineering support when you do not have a technical co-founder yet.', items: ['Product and technical guidance', 'A team that scales with you', 'You keep full ownership'], btn: 'Partner with us' }
    ],
    faq: [
      ['What is an MVP?', 'An MVP, or minimum viable product, is the smallest version of your idea that real users can actually use. It proves the core value and gives you real feedback, without the cost and time of building everything up front.'],
      ['How fast can you build an MVP?', 'Often in a few weeks, depending on scope. We keep the first version deliberately small and use proven building blocks so you can launch and learn quickly.'],
      ['Will I own the product and the IP?', 'Yes. You own the full source code and intellectual property. We hand over the repositories, documentation and access, with no lock-in.'],
      ['What happens after launch?', 'Real users tell you what matters. We help you read the feedback and iterate toward product-market fit, on a retainer if you want to keep moving fast.'],
      ['I do not have a technical co-founder. Can you help?', 'Yes. Many of our founder clients are non-technical. We act as the engineering side of the team while you focus on customers, and you keep full ownership throughout.']
    ],
    related: ['custom-software', 'web', 'mobile', 'ai', 'scaling', 'hub']
  },

  {
    slug: 'software-scaling-and-modernization',
    crumb: 'Scaling & Modernization',
    metaTitle: 'Software Scaling & Modernization Services | Fix Slow, Legacy Systems | Modern Age Coders',
    metaDesc: 'Software scaling and modernization for businesses worldwide. We re-architect, optimise and modernise software that is slow, fragile or buckling under growth. Free consultation.',
    serviceType: 'Software scaling and modernization',
    h1: 'Scale the software that is <span class="amber">buckling under growth.</span>',
    sub: 'When success starts breaking your product, we make it fast and stable again. Performance work, re-architecture and modernisation for software that has outgrown how it was built.',
    waText: 'Hi, I need to scale or modernise my software',
    trust: [['Since 2020', 'Building software'], ['No big-bang', 'Safe, incremental'], ['Worldwide', 'Remote delivery']],
    panelHeading: 'You need this if',
    panel: ['Software that slows down under load', 'A legacy system nobody wants to touch', 'A database that cannot keep up', 'A cloud bill growing faster than usage'],
    capsule: [
      'Software scaling and modernization means reworking an existing system so it stays fast, stable and affordable as usage grows. Modern Age Coders profiles the real bottlenecks, re-architects what needs it, and modernises legacy code, so your product keeps up with your business.',
      'We deliver worldwide, work in safe incremental steps rather than a risky rewrite, and quote after a free assessment. To start, describe your system below or message us on WhatsApp at +91 91233 66161.'
    ],
    servicesEyebrow: 'What we do', servicesTitle: 'Make it fast, stable and affordable again',
    servicesSub: 'Growth should not break your product. We find what is holding it back and fix it, without stopping the business.',
    services: [
      ['Performance optimization', 'Profile the real bottlenecks and fix them, so pages and APIs get fast again.'],
      ['Re-architecture', 'Redesign the parts that cannot scale, from monolith seams to background jobs and caching.'],
      ['Database scaling', 'Indexing, query tuning, read replicas and schema changes so data stops being the wall.'],
      ['Legacy modernization', 'Bring old code onto current, supported technology without a risky big-bang rewrite.'],
      ['Cloud migration', 'Move to cloud infrastructure that scales with demand and keeps cost under control.'],
      ['Refactoring &amp; tests', 'Untangle fragile code and add tests so future changes stop being scary.'],
      ['Monitoring &amp; reliability', 'Alerts, dashboards and error tracking so you see problems before your users do.']
    ],
    process: [
      ['Assess', 'A review of where and why the system struggles, with a written diagnosis and clear targets.'],
      ['Prioritise', 'Fix the highest-impact bottlenecks first, with before-and-after numbers you can see.'],
      ['Rework', 'Optimise or re-architect in safe, incremental steps, not a risky all-at-once rewrite.'],
      ['Test', 'Load and regression testing so the changes hold up under real traffic.'],
      ['Roll out', 'Ship gradually with monitoring in place and a clear path to roll back if needed.'],
      ['Support', 'Optional retainer to keep the system healthy and scaling as you grow.']
    ],
    stackTitle: 'Where the wins usually are',
    stackSub: 'Most scaling problems come down to a few familiar places. We know where to look and how to fix them safely.',
    stack: [['Backend', ['Node.js', 'Python', 'Java']], ['Data', ['PostgreSQL', 'MongoDB', 'Redis', 'Read replicas']], ['Cloud', ['AWS', 'Docker', 'Autoscaling', 'CDN']], ['Reliability', ['Monitoring', 'Load testing', 'CI / CD']]],
    whoTitle: 'Who it is for',
    who: [['Growing startups', 'Traffic outran the MVP and the product is straining. We help it catch up.'], ['SMEs', 'A legacy system is holding the business back. We modernise it without the drama.'], ['Product companies', 'Users are feeling the slowness. We make it quick again before they leave.'], ['Large organisations', 'Modernise critical systems safely, without downtime the business cannot afford.']],
    whyHeadline: 'Fixed in safe steps, not a risky rewrite',
    formHeading: 'Tell us about your system',
    dataService: 'Software Scaling and Modernization', dataSrc: 'software-scaling',
    formPlaceholder: 'Describe the system, what is slow or fragile, and roughly your scale.',
    faq: [
      ['How do I know I need to scale?', 'Common signs: pages and APIs slow down as usage grows, the system falls over at peak times, the database is the bottleneck, deploys are scary, or your cloud bill is rising faster than your usage. We can confirm with an assessment.'],
      ['Should we rewrite or refactor?', 'Usually refactor. A full rewrite is risky and expensive and often is not needed. We prefer safe, incremental changes that improve the system while it keeps running, and rewrite only the parts that truly require it.'],
      ['Will scaling work cause downtime?', 'We plan to avoid it. Changes roll out gradually behind monitoring, with a clear path to roll back, so the business keeps running while the system improves.'],
      ['How much does it cost?', 'It depends on the system and the goals, so we quote after an assessment. You get a written diagnosis and a prioritised plan with clear targets before work begins.'],
      ['Can you move us to the cloud?', 'Yes. We migrate systems to cloud infrastructure that scales with demand and controls cost, and we do it in careful steps rather than all at once.']
    ],
    related: ['custom-software', 'maintenance', 'web', 'ai', 'mvp', 'hub']
  },

  {
    slug: 'software-maintenance-and-support',
    crumb: 'Bug Fixing & Maintenance',
    metaTitle: 'Bug Fixing, QA & Software Maintenance Services | Modern Age Coders',
    metaDesc: 'Bug fixing, QA and software maintenance for businesses worldwide. We fix stubborn bugs, add tests, patch security and keep your live systems healthy, even code we did not build. Free consultation.',
    serviceType: 'Bug fixing, QA and maintenance',
    h1: 'Fix the bugs, then <span class="amber">keep it running.</span>',
    sub: 'Stubborn defects tracked down, tests added, and a live system kept healthy. We take on the code you have, even if we did not write it, and make it dependable.',
    waText: 'Hi, I need bug fixing or ongoing maintenance',
    trust: [['Since 2020', 'Fixing and building'], ['Any codebase', 'Even code we did not write'], ['Worldwide', 'Remote delivery']],
    panelHeading: 'Good fit if you have',
    panel: ['A bug nobody can seem to fix', 'A live system that keeps breaking', 'Code with no tests and no docs', 'No one to keep it running reliably'],
    capsule: [
      'Software maintenance and support means keeping working software healthy: fixing bugs, adding tests, patching security, updating dependencies and responding when something breaks. Modern Age Coders takes on your existing codebase, even one we did not build, and keeps it dependable.',
      'We deliver worldwide and can work one-off or on a retainer. To start, describe the bug or the system below or message us on WhatsApp at +91 91233 66161.'
    ],
    servicesEyebrow: 'What we do', servicesTitle: 'From one stubborn bug to full upkeep',
    servicesSub: 'Whether you need a single defect gone or a team to keep everything running, we take it on.',
    services: [
      ['Bug fixing', 'We reproduce, diagnose and fix defects properly, including the ones that resist a quick patch.'],
      ['Emergency response', 'Production down? We jump in, stabilise the system, and then find the root cause.'],
      ['QA &amp; testing', 'Structured testing that catches problems before your users do, not after.'],
      ['Automated tests', 'Add a test suite so fixes stay fixed and new changes do not break old features.'],
      ['Security &amp; updates', 'Patch vulnerabilities, update dependencies and keep your stack current and safe.'],
      ['Maintenance retainers', 'A dependable monthly arrangement for fixes, small features and peace of mind.'],
      ['Monitoring &amp; support', 'Alerts and error tracking so issues are caught early, with a team ready to respond.']
    ],
    process: [
      ['Triage', 'We understand the bug or the system and reproduce the problem so we are fixing the real thing.'],
      ['Diagnose', 'We find the actual root cause, not just the symptom, so it does not come back.'],
      ['Fix', 'We resolve it cleanly and add a test so the same bug cannot return unnoticed.'],
      ['Verify', 'We confirm the fix in a realistic environment before it ships to your users.'],
      ['Prevent', 'We harden the weak spots that let the bug happen in the first place.'],
      ['Support', 'Optional retainer to keep the system healthy, updated and monitored.']
    ],
    stackTitle: 'We work in your stack',
    stackSub: 'Taking over unfamiliar code is routine for us. We read it, reproduce the problem, and fix it properly.',
    stack: [['Languages', ['JavaScript', 'TypeScript', 'Python', 'Java', 'PHP']], ['Testing', ['Unit', 'Integration', 'End-to-end']], ['Reliability', ['Monitoring', 'Error tracking', 'Alerts']], ['Security', ['Patching', 'Dependency updates']]],
    whoTitle: 'Who it is for',
    who: [['Stuck teams', 'A bug you cannot crack, handed to a fresh pair of experienced eyes.'], ['Businesses without in-house devs', 'Dependable upkeep for software you rely on but do not maintain yourself.'], ['Founders left in the lurch', 'Your developer disappeared. We pick up the code and keep it running.'], ['Companies needing support', 'A team on call for fixes, updates and the occasional emergency.']],
    whyHeadline: 'Dependable, even on code we did not write',
    formHeading: 'Tell us what needs fixing',
    dataService: 'Bug Fixing, QA and Maintenance', dataSrc: 'software-maintenance',
    formPlaceholder: 'Describe the bug or the system, the stack if you know it, and how urgent it is.',
    engage: [
      { tag: 'Best for a single issue', h3: 'One-off fix', p: 'A specific bug or problem, scoped and fixed for a fixed price, with a test so it stays fixed.', items: ['Clear diagnosis first', 'Fixed price for the fix', 'Test added to prevent regression'], btn: 'Get it fixed' },
      { tag: 'Best for peace of mind', h3: 'Monthly retainer', p: 'Reserved time each month for fixes, small features, updates and fast response when something breaks.', items: ['Priority bug fixing', 'Security and dependency updates', 'Cancel or pause any time'], btn: 'Discuss a retainer' },
      { tag: 'Best for full ownership', h3: 'Dedicated team', p: 'Hand over ongoing maintenance entirely to a team that treats your system as its own.', items: ['End-to-end maintenance', 'Monitoring and support', 'Flexible scope'], btn: 'Build a team' }
    ],
    faq: [
      ['Can you fix a codebase you did not build?', 'Yes. Taking over unfamiliar code is routine for us. We start by reading the code and reproducing the problem, then diagnose and fix it properly, and we can document what we find along the way.'],
      ['Can you help with an emergency right now?', 'Yes. For production-down situations we move quickly to stabilise the system first, then find and fix the root cause so it does not recur. Reach us fastest on WhatsApp at +91 91233 66161.'],
      ['Should I take a one-off fix or a retainer?', 'A one-off fix suits a single, specific problem. A retainer suits software you depend on and want kept healthy, with priority response, updates and small improvements each month. We are happy with either.'],
      ['Will you add tests?', 'Where it helps, yes. Adding a test for a fixed bug keeps it from silently coming back, and a test suite makes all future changes safer. We can build this up over time.'],
      ['How much does it cost?', 'A one-off fix is quoted after we see the problem. A retainer is a predictable monthly amount based on the level of support you need. Either way you get a clear quote before work begins.']
    ],
    related: ['custom-software', 'scaling', 'web', 'ai', 'seo', 'hub']
  },

  {
    slug: 'seo-services',
    crumb: 'SEO',
    metaTitle: 'SEO Services | Technical SEO & Content That Ranks | Modern Age Coders',
    metaDesc: 'SEO services for businesses worldwide. Technical SEO, content and internal linking that earn durable rankings on Google, not short-lived spikes. Free SEO audit and a written plan.',
    serviceType: 'SEO services',
    h1: 'SEO that earns durable rankings, <span class="amber">not spikes.</span>',
    sub: 'Rankings that hold, from technical foundations, content that answers real questions, and internal linking done right. Built by a team that ranks its own site every day.',
    waText: 'Hi, I want SEO for my business',
    trust: [['Practised', 'On our own site'], ['Durable', 'Not short-lived spikes'], ['Worldwide', 'Any market']],
    panelHeading: 'You need this if',
    panel: ['You want traffic that grows and holds', 'Technical issues are holding your site back', 'Your content ranks but does not convert', 'You want a clear plan, not vague promises'],
    capsule: [
      'SEO, search engine optimization, is the work that helps your pages rank on Google and bring in customers who are already searching. Modern Age Coders combines technical SEO, content and internal linking to build durable organic growth, and we track it so you can see what is working.',
      'We deliver worldwide and every engagement starts with a free SEO audit and a written plan. To start, request your audit below or message us on WhatsApp at +91 91233 66161.'
    ],
    servicesEyebrow: 'What we do', servicesTitle: 'The work that earns rankings',
    servicesSub: 'Rankings are the sum of a healthy site, content that matches intent, and authority. We do all three, deliberately.',
    services: [
      ['Technical SEO', 'Crawlability, indexing, site structure and the fixes that let Google read your site properly.'],
      ['On-page SEO', 'Titles, headings, content and intent matching so each page can rank for what it is about.'],
      ['Content strategy', 'Plan and write content that answers what your buyers actually search for.'],
      ['Internal linking', 'Connect your pages so authority flows to the ones that matter, a lever most sites ignore.'],
      ['Core Web Vitals', 'Speed and stability improvements that both users and Google reward.'],
      ['Schema &amp; structured data', 'Markup that helps search engines understand and richly display your pages.'],
      ['SEO audits', 'A clear diagnosis of what is holding your rankings back and what to fix first.'],
      ['Local SEO', 'Show up in local searches and maps for the places your customers are in.']
    ],
    process: [
      ['Audit', 'A free audit of your technical health, content and rankings, with a clear diagnosis.'],
      ['Plan', 'A prioritised roadmap, highest impact first, that you could act on with any team.'],
      ['Fix technical', 'Clear the technical issues that hold back the whole site, from crawling to speed.'],
      ['Build content', 'Create and optimise the pages that earn rankings for the searches that matter.'],
      ['Earn authority', 'Internal linking, schema and signals that lift the trust of the whole site.'],
      ['Track', 'Monitor rankings and traffic transparently, and keep tuning what works.']
    ],
    stackTitle: 'What we cover',
    stackSub: 'SEO is not one thing. We work across every layer that decides whether you rank, and report on all of them.',
    stack: [['Technical', ['Crawl', 'Index', 'Structure', 'Speed']], ['Content', ['Strategy', 'Writing', 'On-page']], ['Authority', ['Internal links', 'Schema', 'Entities']], ['Measurement', ['Rankings', 'Traffic', 'Search Console']]],
    whoTitle: 'Who it is for',
    who: [['SMEs', 'Compete for the local and category searches your customers actually use.'], ['E-commerce', 'Win product and category rankings that bring buyers, not just browsers.'], ['SaaS', 'Content-led growth that brings qualified visitors month after month.'], ['Local businesses', 'Show up in maps and local results where your customers are searching.']],
    whyHeadline: 'We rank our own site, every day',
    why: [
      { icon: 'star', h3: 'We rank our own site', p: 'Our own site runs technical SEO, schema, internal linking and answer-first content across hundreds of pages. We recommend only what we practise, and we can show the work.' },
      { icon: 'check', h3: 'Honest about results', p: 'No one can guarantee a ranking, and we will never pretend otherwise. We do the work that reliably improves search over time and report the movement transparently, good or bad.' },
      { icon: 'shield', h3: 'Engineers behind it', p: 'Technical SEO, speed and schema are engineering problems. We are a software team, so the technical layer is done properly, not bolted on.' },
      { icon: 'chat', h3: 'Clear reporting', p: 'You get a plain picture of rankings, traffic and what we did, so you always know what your investment is buying.' }
    ],
    formHeading: 'Request a free SEO audit',
    formHint: 'Tell us your website and goals. We reply within one business day with where you stand and what to do about it. No obligation.',
    submitLabel: 'Request audit',
    dataService: 'SEO Services', dataSrc: 'seo-services',
    formPlaceholder: 'Your website, your main competitors, and the searches you want to win.',
    engage: [
      { tag: 'Best to start', h3: 'Audit and roadmap', p: 'A one-off deep audit of your SEO with a prioritised, written plan you can act on with any team.', items: ['Technical, content and ranking review', 'Prioritised action plan', 'Yours to keep'], btn: 'Request an audit' },
      { tag: 'Best for growth', h3: 'Monthly retainer', p: 'We execute the roadmap month by month, technical fixes, content and authority work, and track results.', items: ['Ongoing technical and content work', 'Ranking and traffic tracking', 'Cancel or pause any time'], btn: 'Discuss a retainer' },
      { tag: 'Best with a build', h3: 'Built in from day one', p: 'Building a new site with us? We engineer SEO into the foundation instead of retrofitting it later.', items: ['Clean, crawlable structure', 'Speed and schema by default', 'Content ready to rank'], btn: 'Plan a build' }
    ],
    faq: [
      ['How long does SEO take to work?', 'Meaningful movement usually takes a few months, because search engines need time to trust changes. Technical fixes can help quickly, while content and authority compound over time. We show progress along the way.'],
      ['Can you guarantee first-page rankings?', 'No honest SEO can guarantee a specific ranking, because Google algorithm is not ours to control. We do the work that reliably improves rankings over time, and we report the movement transparently.'],
      ['Is SEO about technical work or content?', 'Both. A technically healthy site that Google can crawl and understand, plus content that matches what people search, plus internal linking and authority. We cover all of it, because weak links hold back the rest.'],
      ['Do you do local SEO?', 'Yes. We help you rank in local searches and maps for the places your customers are in, including your business profile, local pages and reviews signals.'],
      ['How do you measure results?', 'We track rankings for your target searches, organic traffic, and visibility in Search Console, and we report on the work we did, so you can see what your investment is buying.']
    ],
    related: ['aeo', 'web', 'custom-software', 'ai', 'maintenance', 'hub']
  }
];

// ---- related-card metadata (title + blurb + go label) ----
const REL = {
  hub: ['/for-business', 'All business services', 'See everything we do for companies.', 'Back to hub'],
  'custom-software': ['/custom-software-development-services', 'Custom Software Development', 'Bespoke platforms and internal tools.', 'View service'],
  web: ['/web-application-development-services', 'Web &amp; Web-App Development', 'Fast web apps, portals and SaaS UIs.', 'View service'],
  mobile: ['/mobile-app-development-services', 'Mobile App Development', 'Android, iOS and cross-platform apps.', 'View service'],
  ai: ['/ai-development-services', 'AI Development &amp; Automation', 'Agents, chatbots and automation.', 'View service'],
  mvp: ['/mvp-development-company', 'MVP &amp; Product Development', 'From startup idea to launch.', 'View service'],
  scaling: ['/software-scaling-and-modernization', 'Scaling &amp; Modernization', 'Grow software that is straining.', 'View service'],
  maintenance: ['/software-maintenance-and-support', 'Bug Fixing &amp; Maintenance', 'Fix defects and keep it running.', 'View service'],
  seo: ['/seo-services', 'SEO Services', 'Durable rankings from technical SEO and content.', 'View service'],
  aeo: ['/aeo-geo-optimization-services', 'AEO &amp; GEO Optimization', 'Get cited by ChatGPT, Gemini and Google AI.', 'View service']
};

// ---- template ----
function eyebrowCenter(t) { return `<span class="eyebrow" style="display:block;text-align:center;">${t}</span>`; }
// Escape a string for safe use inside an HTML attribute / title (ampersands that are
// not already entities, plus quotes). Keeps meta titles/descriptions valid HTML.
function escAttr(s) { return String(s).replace(/&(?!(?:amp|lt|gt|quot|#\d+);)/g, '&amp;').replace(/"/g, '&quot;'); }

function renderPage(p) {
  const url = `${BASE}/${p.slug}`;
  const mt = escAttr(p.metaTitle);
  const md = escAttr(p.metaDesc);
  const engage = p.engage || engageDev;
  const why = p.why || whyDev;
  const formHint = p.formHint || 'Tell us what you need. We reply within one business day with next steps and a free consultation slot. No obligation.';
  const submit = p.submitLabel || 'Send requirement';

  const breadcrumb = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/` },
    { '@type': 'ListItem', position: 2, name: 'For Business', item: `${BASE}/for-business` },
    { '@type': 'ListItem', position: 3, name: p.crumb, item: url }
  ] };
  const service = { '@context': 'https://schema.org', '@type': 'Service', name: p.serviceType, url,
    description: p.capsule[0], serviceType: p.serviceType, areaServed: 'Worldwide',
    provider: { '@type': 'Organization', name: 'Modern Age Coders', url: `${BASE}/`, foundingDate: '2020', email: 'contact@modernagecoders.com', telephone: '+91-91233-66161' } };
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: p.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) };

  const svcCards = p.services.map(([h, d], i) => `                <div class="svc-card"><span class="svc-card__idx">${String(i + 1).padStart(2, '0')}</span><h3>${h}</h3><p>${d}</p></div>`).join('\n');
  const procSteps = p.process.map(([h, d]) => `                <div class="process__step"><h3>${h}</h3><p>${d}</p></div>`).join('\n');
  const stackCols = p.stack.map(([h, chips]) => `                <div class="stack-col"><h3>${h}</h3><div class="chips">${chips.map(c => `<span class="chip">${c}</span>`).join('')}</div></div>`).join('\n');
  const whoCards = p.who.map(([h, d]) => `                <div class="industry-card"><h3>${h}</h3><p>${d}</p></div>`).join('\n');
  const whyCards = why.map(w => `                <div class="why-card"><h3>${WHY_ICON[w.icon]}${w.h3}</h3><p>${w.p}</p></div>`).join('\n');
  const engageCards = engage.map(e => `                <div class="engage-card">
                    <span class="engage-card__tag">${e.tag}</span>
                    <h3>${e.h3}</h3>
                    <p>${e.p}</p>
                    <ul>${e.items.map(it => `<li>${it}</li>`).join('')}</ul>
                    <a href="#lead-form" class="biz-btn biz-btn--ghost">${e.btn}</a>
                </div>`).join('\n');
  const faqItems = p.faq.map(([q, a]) => `                <details><summary>${q}</summary><p>${a}</p></details>`).join('\n');
  const relCards = p.related.map(k => { const [href, h, d, go] = REL[k]; return `                <a class="related-card" href="${href}"><h3>${h}</h3><p>${d}</p><span class="go">${go}</span></a>`; }).join('\n');
  const panelItems = p.panel.map(t => `                        <li>${I.check}<span>${t}</span></li>`).join('\n');
  const trustItems = p.trust.map(([n, l]) => `                        <div class="biz-trust__item"><span class="biz-trust__num">${n}</span><span class="biz-trust__label">${l}</span></div>`).join('\n');
  const heroCtaLabel = p.dataSrc === 'seo-services' ? 'Get a free SEO audit' : 'Discuss your requirement';

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
    <meta property="og:type" content="website">
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
    <link rel="stylesheet" href="/css/business-services.css?v=20260723a">
    <script src="/js/ux-enhancements.js" defer></script>
    <script src="/js/components-loader.js" defer></script>
    <script src="/js/callback-modal.js" defer></script>

    <!-- Structured data -->
    <script type="application/ld+json">
${JSON.stringify(breadcrumb, null, 4)}
    </script>
    <script type="application/ld+json">
${JSON.stringify(service, null, 4)}
    </script>
    <script type="application/ld+json">
${JSON.stringify(faqSchema, null, 4)}
    </script>
</head>

<body class="biz-page editorial">
    <a href="#main" class="skip-link">Skip to main content</a>

    <div id="nav-placeholder"></div>

    <main id="main">

        <!-- HERO -->
        <section class="section hero-section biz-hero">
            <div class="biz-hero__grid">
                <div>
                    <div class="biz-eyebrow-row">
                        <a href="/for-business" class="eyebrow" style="text-decoration:none;">For Business</a>
                        <span class="eyebrow" style="color:var(--muted);">/ ${p.crumb}</span>
                    </div>
                    <h1 class="biz-hero__title">${p.h1}</h1>
                    <p class="biz-hero__sub">${p.sub}</p>
                    <div class="biz-cta-row">
                        <a href="#lead-form" class="biz-btn biz-btn--primary">${heroCtaLabel} ${I.arrow}</a>
                        <a href="https://wa.me/919123366161?text=${encodeURIComponent(p.waText)}" target="_blank" rel="noopener" class="biz-btn biz-btn--wa">${I.wa} WhatsApp us</a>
                    </div>
                    <div class="biz-trust">
${trustItems}
                    </div>
                </div>
                <aside class="biz-hero__panel">
                    <h2>${p.panelHeading}</h2>
                    <ul>
${panelItems}
                    </ul>
                </aside>
            </div>
        </section>

        <!-- ANSWER CAPSULE -->
        <section class="section">
            <div class="biz-capsule">
                <p class="biz-capsule__label">In short</p>
                <p>${p.capsule[0]}</p>
                <p>${p.capsule[1]}</p>
            </div>
        </section>

        <!-- WHAT WE DO -->
        <section class="section section--wide">
            ${eyebrowCenter(p.servicesEyebrow)}
            <h2 class="section-title">${p.servicesTitle}</h2>
            <p class="section-subtitle">${p.servicesSub}</p>
            <div class="svc-grid">
${svcCards}
            </div>
        </section>

        <!-- PROCESS -->
        <section class="section">
            ${eyebrowCenter('How we work')}
            <h2 class="section-title">A clear path from requirement to results</h2>
            <p class="section-subtitle">You see progress every step, and you own everything we ship.</p>
            <div class="process">
${procSteps}
            </div>
        </section>

        <!-- CAPABILITIES -->
        <section class="section section--wide">
            ${eyebrowCenter('Capabilities')}
            <h2 class="section-title">${p.stackTitle}</h2>
            <p class="section-subtitle">${p.stackSub}</p>
            <div class="stack-grid">
${stackCols}
            </div>
        </section>

        <!-- WHO -->
        <section class="section">
            ${eyebrowCenter('Who it is for')}
            <h2 class="section-title">${p.whoTitle}</h2>
            <div class="industry-grid">
${whoCards}
            </div>
        </section>

        <!-- WHY US -->
        <section class="section section--wide">
            ${eyebrowCenter('Why Modern Age Coders')}
            <h2 class="section-title">${p.whyHeadline}</h2>
            <div class="why-grid">
${whyCards}
            </div>
        </section>

        <!-- ENGAGEMENT -->
        <section class="section section--wide">
            ${eyebrowCenter('How we engage')}
            <h2 class="section-title">Pick the model that fits</h2>
            <p class="section-subtitle">Every engagement starts with a free consultation and a written quote. No fixed packages, because the right shape depends on your requirement.</p>
            <div class="engage-grid">
${engageCards}
            </div>
        </section>

        <!-- LEAD FORM -->
        <section class="section" id="lead-form">
            <div class="lead">
                <div class="lead__form">
                    <h2>${p.formHeading}</h2>
                    <p class="lead__hint">${formHint}</p>
                    <form id="leadForm" data-service="${p.dataService}" data-src="${p.dataSrc}" novalidate>
                        <div class="lead__row">
                            <div class="lead__field">
                                <label for="lf-name">Your name</label>
                                <input type="text" id="lf-name" name="name" placeholder="Full name" autocomplete="name" required>
                                <span class="lead__err" data-err="name"></span>
                            </div>
                            <div class="lead__field">
                                <label for="lf-company">Company</label>
                                <input type="text" id="lf-company" name="company" placeholder="Company name (optional)" autocomplete="organization">
                            </div>
                        </div>
                        <div class="lead__row">
                            <div class="lead__field">
                                <label for="lf-email">Work email</label>
                                <input type="email" id="lf-email" name="email" placeholder="you@company.com" autocomplete="email" required>
                                <span class="lead__err" data-err="email"></span>
                            </div>
                            <div class="lead__field">
                                <label for="lf-phone">Phone / WhatsApp</label>
                                <input type="tel" id="lf-phone" name="phone" placeholder="With country code" autocomplete="tel" required>
                                <span class="lead__err" data-err="phone"></span>
                            </div>
                        </div>
                        <div class="lead__field">
                            <label for="lf-message">What do you need?</label>
                            <textarea id="lf-message" name="message" placeholder="${p.formPlaceholder}" required></textarea>
                            <span class="lead__err" data-err="message"></span>
                        </div>
                        <button type="submit" class="biz-btn biz-btn--primary lead__submit"><span class="btn-text">${submit}</span></button>
                        <div class="lead__feedback"></div>
                    </form>
                </div>
                <div class="lead__rail">
                    <h3>Prefer to talk first?</h3>
                    <p>Reach us directly. We answer questions before you commit to anything.</p>
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
                    <p class="lead__assure">Your details go straight to our team and are used only to reply to your enquiry. We never share or sell your information.</p>
                </div>
            </div>
        </section>

        <!-- FAQ -->
        <section class="section">
            ${eyebrowCenter('Questions')}
            <h2 class="section-title">Frequently asked</h2>
            <div class="biz-faq">
${faqItems}
            </div>
        </section>

        <!-- RELATED -->
        <section class="section section--wide">
            ${eyebrowCenter('Related services')}
            <h2 class="section-title">Often needed alongside</h2>
            <div class="related-grid">
${relCards}
            </div>
        </section>

    </main>

    <div id="footer-placeholder"></div>

    <script src="/js/biz-lead-form.js" defer></script>
</body>

</html>
`;
}

function renderMd(p) {
  const url = `${BASE}/${p.slug}`;
  const why = p.why || whyDev;
  const bullets = p.services.map(([h, d]) => `- **${h.replace(/&amp;/g, 'and')}**: ${d.replace(/&amp;/g, 'and')}`).join('\n');
  const whoList = p.who.map(([h, d]) => `- **${h}**: ${d}`).join('\n');
  const whyList = why.map(w => `- **${w.h3}**: ${w.p}`).join('\n');
  const procList = p.process.map(([h]) => h.replace(/&amp;/g, 'and')).join(', ');
  const faq = p.faq.map(([q, a]) => `### ${q}\n\n${a}`).join('\n\n');
  const title = p.metaTitle.replace(/&/g, 'and');
  return `---
title: "${title}"
description: "${p.metaDesc.replace(/"/g, "'")}"
canonical: ${url}
source: src/pages/${p.slug}.html
---

> ${p.capsule[0]}

# ${p.serviceType}

${p.sub.replace(/<[^>]+>/g, '')}

## What we do

${bullets}

## How we work

${procList}. You see progress every step and own everything we ship, including full source code and documentation.

## Who it is for

${whoList}

## Why Modern Age Coders

${whyList}

## Pricing

Every engagement is quoted after a free consultation. No fixed packages, because the right shape depends on your requirement.

## FAQ

${faq}

## Contact

- WhatsApp or call: +91 91233 66161
- Email: contact@modernagecoders.com
- Or send your requirement through the form at ${url.replace(BASE, '')}
`;
}

// ---- main ----
let count = 0;
for (const p of PAGES) {
  fs.writeFileSync(path.join(OUT, `${p.slug}.html`), renderPage(p), 'utf8');
  fs.writeFileSync(path.join(OUT, `${p.slug}.md`), renderMd(p), 'utf8');
  count++;
  console.log('  wrote', p.slug + '.html', '+', p.slug + '.md');
}
console.log(`\nDone: ${count} pages.\n`);

// print routing + sitemap snippets for convenience
console.log('--- _redirects lines ---');
for (const p of PAGES) {
  console.log(`/${p.slug} /src/pages/${p.slug}.html 200`);
  console.log(`/${p.slug}.md /src/pages/${p.slug}.md 200`);
}
console.log('\n--- sitemap <url> blocks ---');
for (const p of PAGES) {
  console.log(`  <url>\n    <loc>${BASE}/${p.slug}</loc>\n    <lastmod>2026-07-23</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.85</priority>\n  </url>`);
}
