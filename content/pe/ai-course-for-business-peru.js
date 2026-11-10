'use strict';
// SHIP: market | AI course for business in Peru: owners and teams, what to use first, what rules say, in English | embeddings as cosine similarity: word overlap picks the wrong FAQ, a toy embedding the right one
// AI course for business, Peru (ag- English subject door, Peru cluster row PE025, hubGroup subjects).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08: timing flexible at any hour.
// Audience: business owners, managers and staff in Peru (from a single-person business to a mid-size company) searching
// "ai course for business", "ai for small business", "ai training for employees". Spanish twin (live): curso-de-ia-para-
// empresas-peru (precision, recall and a pilot's threshold; MYPE periods). This page has its own spine and lesson.
// Spine: who Peruvian businesses are (INEI business demography, II Trimestre 2026); where AI helps a business first (a customer
// FAQ that understands meaning, via embeddings, Google ML Crash Course); the lesson; what DS 115-2025-PCM says businesses should
// tell customers (art. 25 transparency and visible labelling, high-risk uses in hiring and credit, art. 18 support for MIPYME) as
// context; English by job function (EF EPI 2025); how a team trains.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/ai-course-for-business-peru/, read 9 Nov 2026):
//  - INEI, Demografía Empresarial en el Perú, II Trimestre 2026 (inei-demog-iit2026.pdf/.txt; PDF text extracted with PDFKit):
//    "Al 30 de junio del 2026, el número de empresas activas registradas en el Directorio Central de Empresas y Establecimientos
//    fue 3 millones 377 mil 839 empresas, cifra mayor en 1,3%"; "entre abril y junio del 2026, se dieron de alta un total de 89
//    mil 846 empresas"; "se dieron de baja 62 mil 835 empresas"; "La tasa de natalidad empresarial ... constituyó el 2,7%";
//    "la tasa de bajas empresarial fue 1,9%"; "una tasa neta de 0,8%"; "Lima Metropolitana donde se crearon o reactivaron 32 mil
//    890 empresas, representando el 36,6% del total"; "Comprende solo información de empresas privadas."
//  - Google, Machine Learning Crash Course, "Embeddings: Embedding space and static embeddings" (gmlcc-embeddings.txt):
//    "Embeddings are low-dimensional representations of high-dimensional data, often used to capture semantic relationships
//    between items."; "Embeddings place similar items closer together in the embedding space"; "The distance between points in
//    an embedding space represents the relative similarity between the corresponding items."
//  - DS 115-2025-PCM (El Peruano, 9 September 2025; ds115.txt): art. 25.1 high-risk systems must inform the user "de forma
//    previa, clara y sencilla, sobre la finalidad o uso del sistema basado en IA"; art. 25.2 "el etiquetado visible del sistema
//    basado en IA"; art. 24.1 e "Determinar procesos de selección, evaluación, contratación y cese de trabajadores o
//    postulantes"; art. 24.1 g "Determinar la evaluación crediticia de personas; salvo si el uso de la IA, es para la detección
//    de fraude financiero"; art. 18.2 MIPYME "participen del entorno de experimentación y prueba controlado (Sandbox)"; first
//    final provision MYPE: small companies two years, micro companies three years.
//  - EF EPI 2025 Peru (ef_peru.raw): job-function scores "customer-service" high 585, "marketing" high 565, "operations" high
//    554, "sales" moderate 547, "admin-clerical" moderate 540, "it" moderate 522, "accounting-finance" low 484,
//    "strategy-project-management" high 589.
//  - Vendor terms (ai-tool-age-audit.json): Claude 18+; ChatGPT parental permission under 18 (for family businesses with
//    teenage helpers).
//  - Time (timezone.tsv): America/Lima UTC-5; Asia/Kolkata UTC+5:30.
// Our own calculation: 89,846 - 62,835 = 27,011 (matches INEI's printed net change for the quarter).
// Code (similitud.py, python3 -I; the FAQ, the question and the four-dimensional embedding are invented by us):
//    word overlap: price 0.33 / hours 0.0 / delivery 0.34
//    toy embedding: price 0.99 / hours 0.11 / delivery 0.28
// Lesson family: embeddings as cosine similarity; why word overlap fails on meaning.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const CODE = [
  'import math',
  '',
  '# A small bakery\'s FAQ and one customer question, all invented by us.',
  'faq = {',
  '    "price":    "what is the cost of a whole tart or a single slice",',
  '    "hours":    "what time do you open and close on sunday",',
  '    "delivery": "can you deliver a cake to miraflores and how long does delivery take",',
  '}',
  'question = "how much is a birthday cake"',
  '',
  'def cosine(a, b):',
  '    dot = sum(a[k] * b.get(k, 0) for k in a)',
  '    na = math.sqrt(sum(v * v for v in a.values()))',
  '    nb = math.sqrt(sum(v * v for v in b.values()))',
  '    return dot / (na * nb) if na and nb else 0.0',
  '',
  'def word_counts(text):',
  '    v = {}',
  '    for w in text.split():',
  '        v[w] = v.get(w, 0) + 1',
  '    return v',
  '',
  'print("word overlap:")',
  'for name, text in faq.items():',
  '    print(" ", name, round(cosine(word_counts(question), word_counts(text)), 2))',
  '',
  '# A toy embedding: four hand-made dimensions (money, time, travel, food).',
  'EMB = {"cost": (1, 0, 0, 0), "much": (0.9, 0, 0, 0), "price": (1, 0, 0, 0),',
  '       "tart": (0, 0, 0, 1), "slice": (0.2, 0, 0, 0.8), "cake": (0, 0, 0, 1),',
  '       "birthday": (0, 0.2, 0, 0.5), "time": (0, 1, 0, 0), "open": (0, 1, 0, 0),',
  '       "close": (0, 1, 0, 0), "sunday": (0, 0.8, 0, 0), "long": (0, 0.6, 0.3, 0),',
  '       "deliver": (0, 0, 1, 0), "delivery": (0, 0, 1, 0), "miraflores": (0, 0, 0.8, 0)}',
  '',
  'def embed(text):',
  '    vecs = [EMB[w] for w in text.split() if w in EMB]',
  '    return {i: sum(v[i] for v in vecs) / len(vecs) for i in range(4)}',
  '',
  'print("toy embedding:")',
  'for name, text in faq.items():',
  '    print(" ", name, round(cosine(embed(question), embed(text)), 2))'
].join('\n');

const OUT = [
  'word overlap:',
  '  price 0.33',
  '  hours 0.0',
  '  delivery 0.34',
  'toy embedding:',
  '  price 0.99',
  '  hours 0.11',
  '  delivery 0.28'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'subjects', label: 'AI course for business' },
  slug: 'ai-course-for-business-peru',
  code: 'abu',
  accent: '#147175',
  accentRationale: 'AI course for business, Peru: a clear commercial teal #147175, a little brighter than the professionals\' agents page, for shopfronts and small offices rather than corporate floors; above 4.5:1 on all three papers, as the build checks.',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'AI course for business in Peru',
  title: 'AI Course for Business in Peru: Live Team Training in English',
  description: 'An AI course for businesses in Peru, from one-person shops to growing firms: live training online in English on where AI helps first and how to tell customers.',
  ogDescription: 'How many businesses Peru has (INEI, mid-2026), where AI helps a small business first, why a customer FAQ needs meaning rather than matching words, what Peru\'s 2025 AI regulation says about telling customers, and how a team learns in English.',
  twitterDescription: 'Live AI training in English for business owners and teams in Peru: start small, understand it, tell customers.',
  pageName: 'AI Course for Business in Peru',
  webPageDescription: 'A guide for business owners and managers in Peru planning AI training, built from INEI\'s business demography bulletin for the second quarter of 2026, Google\'s Machine Learning Crash Course on embeddings, DS 115-2025-PCM, EF EPI 2025 job-function scores and vendor terms, with an original lesson on embeddings and cosine similarity.',
  courseDescription: 'Live online AI training for business owners, managers and staff in Peru, taught in English: practical AI tools, data and analytics for non-programmers, customer-facing assistants that understand meaning, low-code agents and the transparency practices customers expect, for a single owner or a whole staff, taught privately or alongside fifteen to twenty other adults, scheduled around when the business is open.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'AI course for business',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#firms', label: 'Businesses in Peru' },
    { href: '#first', label: 'Where to start' },
    { href: '#project', label: 'Embeddings lesson' },
    { href: '#customers', label: 'Telling customers' },
    { href: '#team', label: 'Training a team' }
  ],
  eyebrow: 'Peru &middot; AI for business &middot; Owners, managers and teams',
  h1: 'AI course for business in Peru',
  lede: 'Most businesses in Peru are small, busy and sceptical of anything that sounds like a technology project. That is a healthy starting point for AI. This page is for owners, managers and team members who want to know where AI can genuinely save time in a Peruvian business, how the most useful kind of AI assistant actually understands a customer\'s question, what Peru\'s 2025 AI regulation says about telling customers, and how to train a team without stopping the business to do it.',
  secondaryCta: { href: '#project', label: 'See the embeddings lesson' },
  wa: 'Hello Modern Age Coders, I run a business in Peru and would like AI training for myself or my team. Could we book a free first class?',
  heroNote: 'Live classes since 2020 &middot; 10,000+ students worldwide &middot; every session live, online and in English',
  spec: [
    ['For', 'Owners, managers and staff'],
    ['Business size', 'One person to a growing team'],
    ['Coding needed', 'None to begin'],
    ['First focus', 'Customer questions, data, documents'],
    ['Format', 'One to one, or a group of fifteen to twenty'],
    ['Start with', 'A free class']
  ],
  capsuleQ: 'The answer in short',
  capsule: 'Modern Age Coders runs an AI course for business in Peru: live online training, taught in English, for owners, managers and staff of businesses of any size. Participants learn where AI saves time first (answering customer questions, organising documents, reading sales data), how AI tools understand meaning rather than just matching words, and how to tell customers clearly when AI is involved. No coding is needed to start. Mentors in India train one person or a whole team, one to one or in a group of fifteen to twenty, at hours that suit business opening times in Peru.',

  picks: {
    eyebrow: 'Three starting points',
    h2: 'Which AI course suits your business?',
    lede: 'Start with the problem you have, not the tool you have heard of. These three courses cover what most businesses need first.',
    items: [
      { course: 'ai-tools-mastery-complete-college', code: 'ABU / 01', title: 'AI Tools Mastery', note: 'Practical AI for adults at work: writing, summarising, researching and automating with tools like ChatGPT and Claude, always with the habit of checking the output before a customer sees it.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', code: 'ABU / 02', title: 'Data and AI Analytics for Non-Programmers', note: 'Spreadsheets in Excel or Google Sheets, dashboards in Power BI, and AI assistance throughout. For owners and managers who want to read their own sales, stock and customer data clearly, without learning to code.' },
      { course: 'ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals', code: 'ABU / 03', title: 'Copilot Studio Agent Masterclass', note: 'For businesses on Microsoft 365 that want an assistant to answer customers or staff from their own documents. Taught one to one, around your own business.' }
    ]
  },

  sections: [
    {
      id: 'firms',
      eyebrow: 'Businesses in Peru',
      h2: 'How many businesses are there in Peru?',
      lede: 'About 3.38 million active private businesses in mid-2026. INEI\'s business register counted 3,377,839 active businesses on 30 June 2026, 1.3% more than a year earlier.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Business demography in Peru, second quarter of 2026', head: ['Measure (INEI)', 'Value', 'Note'], rows: [
          ['Active businesses on 30 June 2026', '3,377,839', 'Up 1.3% on a year earlier'],
          ['Businesses created or reactivated, April to June 2026', '89,846', 'Up 1.3% on the same quarter of 2025'],
          ['Businesses closed or deregistered, April to June 2026', '62,835', 'Up 8.1%'],
          ['Birth rate', '2.7%', 'New and reactivated businesses as a share of the stock'],
          ['Closure rate', '1.9%', 'Closures as a share of the stock'],
          ['New or reactivated in Lima Metropolitana', '32,890', '36.6% of the national total for the quarter']
        ] },
        { kind: 'source', html: 'Source: INEI, Demografía Empresarial en el Perú, II Trimestre de 2026, from the Directorio Central de Empresas y Establecimientos; private businesses only. Read on 9 November 2026. By our own subtraction, 89,846 minus 62,835 gives 27,011, which matches the net change INEI prints for the quarter.' },
        { kind: 'two', mt: true,
          leftH3: 'What that means for AI training',
          left: [
            'Tens of thousands of businesses open in Peru every quarter, and most begin with one or two people doing everything. For them, AI is not a strategy; it is a way to answer customers at night, write a product description in English, or understand last month\'s sales without hiring an analyst.',
            'A course for that audience has to be practical from the first class, and honest about what not to automate.'
          ],
          rightH3: 'And for larger teams',
          right: [
            'Growing companies have a different problem: staff are already using AI tools on their own, inconsistently, sometimes with client data they should not share. Training a team together sets shared habits: what may be pasted into a tool, how output is checked, and when a customer is told.',
            'Our Spanish page <a class="ag-inline-link" href="/curso-de-ia-para-empresas-peru">curso de IA para empresas</a> looks at how to measure an AI pilot; this page focuses on where to start and on customers. Both describe the same live classes in English.'
          ] }
      ]
    },
    {
      id: 'first',
      tint: 'tint',
      eyebrow: 'Where to start',
      h2: 'Where does AI help a small business first?',
      lede: 'Usually with words: answering repeated customer questions, drafting messages and descriptions, and finding things in the business\'s own documents. These are low-risk, easy to check and quick to show results.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Customer questions', p: 'Prices, opening hours, delivery areas, how to order. An assistant that finds the right answer from your own FAQ, and hands anything unusual to a person, saves hours a week. The lesson below shows how it understands the question.' },
          { h3: 'Writing and translating', p: 'Product descriptions, replies, social posts, an English version of your menu or catalogue. AI drafts; a person who knows the business checks every word before it goes out.' },
          { h3: 'Reading your numbers', p: 'Which products sell on which days, which customers have stopped ordering. AI help in a spreadsheet turns a sales file into a clear chart, if someone checks that the formulas are right.' }
        ] },
        { kind: 'p', mt: true, html: 'What we suggest leaving until later: anything that decides about people. Peru\'s 2025 AI regulation, DS 115-2025-PCM, lists as high risk the use of AI to determine the selection, evaluation, hiring and dismissal of workers or applicants (article 24.1 e), and to determine people\'s credit assessment, except where AI is used to detect financial fraud (article 24.1 g). We cite these as published context, not legal advice; the practical message is that hiring and credit are not where a small business should experiment first.' }
      ]
    },
    {
      id: 'project',
      eyebrow: 'A real lesson',
      h2: 'How does an AI assistant understand a customer\'s question? Embeddings',
      lede: 'This lesson comes from our business course. A bakery\'s FAQ has three answers. A customer writes "how much is a birthday cake". Matching words picks the wrong answer. Matching meaning picks the right one, and the idea behind it, embeddings, is what most modern AI assistants use.',
      body: [
        { kind: 'p', html: 'Google\'s Machine Learning Crash Course describes embeddings as "low-dimensional representations of high-dimensional data, often used to capture semantic relationships between items", and adds that they "place similar items closer together in the embedding space". In plain words: each word or sentence becomes a list of numbers, and sentences that mean similar things get similar lists. Comparing two lists with a measure called cosine similarity tells you how close their meanings are, from 0 (unrelated) to 1 (pointing the same way).' },
        { kind: 'code', label: 'Matching a customer question: words versus meaning', lang: 'Python', code: CODE, note: 'The FAQ, the question and the four-dimensional embedding are invented by us for teaching. Real embeddings have hundreds of dimensions learned from data, not four chosen by hand.' },
        { kind: 'code', label: 'Output', lang: 'Output', code: OUT, note: 'Word overlap prefers the delivery answer, 0.34 to 0.33. The toy embedding prefers the price answer, 0.99 to 0.28.' },
        { kind: 'two', mt: true,
          leftH3: 'Why word overlap fails',
          left: [
            'The customer\'s question and the delivery answer share the words "how", "a" and "cake". The price answer shares only "is" and "a", because it says "cost" and "tart" rather than "much" and "cake". Counting shared words, the delivery answer wins by a hair, and the customer gets told about delivery times instead of prices.',
            'This is how simple keyword search behaves, and why so many website chat boxes give irritating answers. They match spelling, not meaning.'
          ],
          rightH3: 'Why the embedding works',
          right: [
            'In the toy embedding, "much" and "cost" both point strongly along the money dimension, and "cake" and "tart" both point along the food dimension. So the question and the price answer point in almost the same direction: 0.99. The delivery answer mixes travel and time, and scores only 0.28.',
            'Real systems learn their embeddings from huge amounts of text, so "how much" lands near "price" and "cost" without anyone writing a table. The principle is the one you just watched in twenty lines of Python.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Break it.</strong> Ask "do you open late on sunday". Which answer does each method pick? Then try a question with no words from the embedding table at all, and explain what happens.',
          '<strong>Add a fallback.</strong> Decide what the assistant should do when even the best match is weak: hand the question to a person. Write that rule in one sentence first, then in code.',
          '<strong>Your own FAQ.</strong> Write the five questions your customers ask most, with your answers. Those five are the start of a real assistant, and the start of an evaluation set to test it.',
          '<strong>Spanish and English.</strong> Real multilingual embeddings place "precio" near "price". Discuss what that means for a Peruvian business serving tourists and local customers with one FAQ.'
        ] }
      ]
    },
    {
      id: 'customers',
      tint: 'tint',
      eyebrow: 'Telling customers',
      h2: 'Do businesses in Peru have to tell customers they are using AI?',
      lede: 'For high-risk uses, the 2025 regulation asks for transparency, and it mentions visible labelling as one way to give it. For everyday uses, telling customers is simply good practice.',
      body: [
        { kind: 'p', html: 'Article 25.1 of DS 115-2025-PCM, published in El Peruano on 9 September 2025, asks developers and implementers of high-risk AI systems to inform users "de forma previa, clara y sencilla" about the purpose of the system, its main functions and the kind of decisions it can make. Article 25.2 says the mechanisms can include "el etiquetado visible del sistema basado en IA", a visible label telling users in advance that a product, service or content runs on AI, with an exception for AI supporting internal administrative processes without a direct impact on decisions affecting people\'s rights or services.' },
        { kind: 'p', html: 'For small businesses, the regulation sets later dates for these transparency provisions: two years from publication for small companies with annual sales above 150 and up to 1,700 UIT, and three years for micro companies with annual sales up to 150 UIT. Article 18 also commits the government to promote MIPYME participation in a controlled testing environment, a sandbox, to validate AI solutions before real use. All of this is published context; what applies to a specific business is a question for its lawyer or accountant, not for us.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Say it plainly', p: '"This assistant uses AI and may make mistakes; a person reviews orders and complaints." One sentence at the start of a chat sets the right expectation.' },
          { h3: 'Offer a person', p: 'Every AI assistant should have an obvious way to reach a human. Customers forgive an AI that hands over; they do not forgive one that traps them.' },
          { h3: 'Protect their data', p: 'Do not paste customers\' names, numbers or orders into a public AI tool without checking its terms and your obligations. Our course covers what to anonymise and how.' }
        ] }
      ]
    },
    {
      id: 'team',
      eyebrow: 'Training a team',
      h2: 'Can a team in Peru be trained in AI in English?',
      lede: 'Yes, and for many roles the English is already there. EF\'s English Proficiency Index 2025 scores Peruvian adults in customer service at 585 and in marketing at 565, both in the "high" band.',
      body: [
        { kind: 'table', numCols: [1], caption: 'EF EPI 2025, Peru, English score by job function', head: ['Job function', 'EF EPI 2025 score', 'EF band'], rows: [
          ['Strategy and project management', '589', 'High'],
          ['Customer service', '585', 'High'],
          ['Marketing', '565', 'High'],
          ['Operations', '554', 'High'],
          ['Sales', '547', 'Moderate'],
          ['Administrative and clerical', '540', 'Moderate'],
          ['IT', '522', 'Moderate'],
          ['Accounting and finance', '484', 'Low']
        ] },
        { kind: 'source', html: 'Source: EF Education First, EF English Proficiency Index 2025, Peru country page, scores by job function, read on 9 November 2026. EF tests adults who choose to take its online test, so these scores describe test-takers in each role, not every employee in Peru.' },
        { kind: 'two', mt: true,
          leftH3: 'How we organise team training',
          left: [
            'A team can learn together in one group, or in small groups by role: customer-facing staff on assistants and messages, managers on data and decisions, finance on spreadsheets and checking. Where English is weaker, as the accounting and finance score suggests it may be, one-to-one classes let the mentor slow down.',
            'Mentors speak clearly and steadily and put key terms in the chat. We do not teach in Spanish, but the English practice is part of the value for many businesses that serve tourists or foreign clients.'
          ],
          rightH3: 'Fitting it around the business',
          right: [
            'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
            'Lima stays five hours behind UTC all year, and India five and a half ahead, so an 08:00 class in Lima, before the shop opens, is 18:30 in India. Owners who want to code their own tools later can continue on our <a class="ag-inline-link" href="/cursos-de-programacion-para-adultos-peru">cursos de programación para adultos</a> route.'
          ] }
      ]
    },
    {
      id: 'agents',
      tint: 'tint',
      eyebrow: 'Next steps',
      h2: 'When should a business move from AI tools to AI agents?',
      lede: 'When a task is repeated often, follows clear steps and can be checked, and when the team already uses AI tools well. Agents act in other systems, so mistakes cost more.',
      body: [
        { kind: 'p', html: 'An assistant that answers questions is low risk: if it is wrong, a person corrects it. An agent that books, invoices or orders stock changes things, and needs limits, tests and a clear hand-off to a person. We recommend most businesses spend a few months with AI tools and assistants before building agents, and that the first agent handles something easy to undo.' },
        { kind: 'p', html: 'When you are ready, our Spanish page <a class="ag-inline-link" href="/curso-de-agentes-de-ia-para-profesionales">agentes de IA para profesionales</a> explains how companies keep agents under control, with an approval-gate lesson. The classes behind it are the same live classes in English. Anthropic restricts Claude to users of at least 18, so in a family business a teenage helper would follow a different route from the adults.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'How a business moves from curiosity to useful AI',
    lede: 'Our own stages for business clients. They describe the business\'s progress, not an individual qualification.',
    table: { numCols: [], caption: 'AI adoption stages for a business (ours)', head: ['Stage', 'The business can', 'Evidence'], rows: [
      ['1. Rules', 'Say what may and may not be pasted into AI tools', 'A one-page policy staff have read'],
      ['2. Drafts', 'Use AI for drafts that a person always checks', 'Ten customer messages, checked and sent'],
      ['3. Data', 'Read its own sales or stock data with AI help', 'A monthly chart someone understands'],
      ['4. FAQ', 'Answer common customer questions by meaning', 'The embeddings lesson, on your FAQ'],
      ['5. Tell', 'Explain AI use to customers in one clear sentence', 'A label on every AI touchpoint'],
      ['6. Agent', 'Automate one repeatable, reversible task', 'An agent with limits and a hand-off']
    ] },
    left: { h3: 'For owners', ps: [
      'Start with the question your customers ask most. That is your first AI project.',
      'If you cannot check it, do not automate it yet.'
    ] },
    right: { h3: 'For staff', ps: [
      'AI writes the draft. You are still the one who knows the customer.',
      'Matching words is not understanding. Test with a question phrased differently.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for business teams',
    lede: 'All live and in English, each led by one mentor.',
    bands: [
      { num: 'I', h3: 'For every role', sub: 'No coding', courses: [
        { code: 'ABU / ALL / 01', slug: 'canva-ai-design-masterclass', title: 'Canva and AI design', blurb: 'Posts, menus and catalogues with AI features.' },
        { code: 'ABU / ALL / 02', slug: 'complete-business-finance-mathematics-mastery', title: 'Business and finance maths', blurb: 'Margins, interest and risk, worked out clearly.' },
        { code: 'ABU / ALL / 03', slug: 'data-analysis-mastery-course-college', title: 'Data Analysis', blurb: 'Excel, SQL, Python and BI on business data.' }
      ] },
      { num: 'II', h3: 'Assistants and agents', sub: 'Platforms', courses: [
        { code: 'ABU / AGENT / 01', slug: 'build-ai-agents-with-google-gemini-enterprise-course', title: 'Gemini Enterprise agents', blurb: 'For businesses on Google Workspace, one to one.' },
        { code: 'ABU / AGENT / 02', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI: LLMs, RAG and Agents', blurb: 'Assistants that search your own documents.' },
        { code: 'ABU / AGENT / 03', slug: 'python-ai-automation-masterclass-college', title: 'Python automation and applied AI', blurb: 'Scripts that move data between your tools.' }
      ] },
      { num: 'III', h3: 'Building in-house skill', sub: 'For a technical hire', courses: [
        { code: 'ABU / TECH / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python Masterclass', blurb: 'The foundation for building your own tools.' },
        { code: 'ABU / TECH / 02', slug: 'mysql-database-complete-masterclass-college', title: 'MySQL', blurb: 'Databases for orders, stock and customers.' },
        { code: 'ABU / TECH / 03', slug: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', title: 'Codex and Claude Code', blurb: 'AI coding agents for adults who build software.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How does live AI training for a business work?',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Before opening', l: 'Early mornings in Peru, evening for the mentor in India.' },
      { time: 'After closing', l: 'Late hours in Peru fall in the Indian early morning; we can arrange it.' },
      { time: 'One to one', l: 'The owner alone, or one key person, around the business.' }
    ],
    cells: [
      { h3: 'Your own business', p: 'Exercises use your products, FAQ and data.' },
      { h3: 'Check every output', p: 'Nothing AI writes reaches a customer unchecked.' },
      { h3: 'Data kept safe', p: 'Customer details anonymised before any tool.' },
      { h3: 'Clear English', p: 'Steady speech; key terms written down.' },
      { h3: 'By role', p: 'Groups can be split by job when it helps.' },
      { h3: 'Grown-ups only', p: 'Every business course is for over-18s.' }
    ]
  },

  projectsH2: 'What our students build',
  projectsLede: 'Some of what people on our longer programmes have made; the <a class="ag-inline-link" href="/student-labs">student labs</a> page collects the rest.',
  reviewsLede: 'Reviews from learners and families on Google, unchanged.',

  fees: {
    h2: 'What AI training costs',
    lede: 'We charge in US dollars, to a card, per learner. Each payment is converted into soles by the card-issuing bank at its rate on the day, so your business statement may show small differences from month to month.',
    free: ['A free first class', 'Try the FAQ exercise on your own questions', 'No card required'],
    group: ['Fifteen to twenty adults', 'One mentor for the whole course', 'Two live classes a week', 'Monthly; stop when you choose'],
    one: ['The owner or one staff member alone', 'Built around your business', 'Times that suit your opening hours']
  },

  faq: {
    eyebrow: 'Business owners ask',
    h2: 'AI course for business: questions',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. All training is live online and in English only. Mentors speak clearly, adapt to each person\'s accent and pace, and put key terms in the chat. For team members whose English is weaker, one-to-one classes let the mentor slow down.' },
      { q: 'Do we need technical staff to take the course?', a: 'No. The first courses need no coding. Owners, managers and customer-facing staff learn to use and check AI tools, read their data and set up simple assistants. Technical staff can go further with Python if you wish.' },
      { q: 'Where should a small business start with AI?', a: 'With repeated customer questions, drafting messages and descriptions, and reading your own sales data. These are easy to check and quick to show results. Leave decisions about people, such as hiring or credit, until much later.' },
      { q: 'What is an embedding, in plain words?', a: 'A list of numbers that represents the meaning of a word or sentence, so that similar meanings get similar numbers. It is how an AI assistant can match "how much is a cake" to an answer about price even when no words match.' },
      { q: 'Do we have to tell customers we use AI?', a: 'Peru\'s DS 115-2025-PCM asks for transparency for high-risk uses and mentions visible labelling as one mechanism, with later dates for small and micro companies. That is context, not legal advice; ask your lawyer. Telling customers plainly is good practice anyway.' },
      { q: 'When are classes held?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. Peru never changes its clocks and neither does India, so the ten and a half hour gap is the same every week of the year.' },
      { q: 'Can you train our whole team?', a: 'Yes. A team can learn together or in groups by role, with exercises built on your own products and questions. Contact us with the number of people and their roles and we will suggest a plan.' },
      { q: 'Will you see our customer data?', a: 'We ask you not to share personal customer data in class. Exercises use anonymised or invented examples, and we teach your team how to anonymise data before using any AI tool.' },
      { q: 'Is there a certificate?', a: 'Each learner who completes a course receives our own certificate of completion. It is not an official Peruvian qualification, and we are not connected with INEI, PRODUCE or any Peruvian authority.' },
      { q: 'What does each person need?', a: 'Each learner needs a computer rather than a phone, reliable internet and ideally a headset with a microphone. We set up AI tool accounts together in class, choosing tools your business is happy to use.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related',
    h2: 'Further reading for businesses',
    lede: 'Other pages on our site.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'All our courses for Peru.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Age rules for over a hundred tools.' },
      { href: '/we-teach-you-how-to-think', label: 'We teach you how to think', p: 'Judgement before tools.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'The live class format.' },
      { href: '/student-labs', label: 'Student labs', p: 'Projects by our learners.' },
      { href: '/courses', label: 'All courses', p: 'Every syllabus.' }
    ]
  },

  start: {
    h2: 'Book a free AI class for your business',
    lede: 'Bring the five questions your customers ask most. In the trial, a mentor shows how an assistant would match them, where it would go wrong, and what your team would need to learn first. You leave with a recommended course and plan.',
    readFirst: 'To see how we teach before booking, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or look through the <a class="ag-inline-link" href="/courses">courses</a> and their syllabuses.',
    note: 'Training is live on video, in English, with mentors based in India. Write to us on WhatsApp in English for a quick reply.',
    formNote: 'The first class is free and needs no card.'
  },

  footer: {
    cols: [
      { h4: 'AI for business', links: [
        { href: '/ai-tools-age-guide', label: 'AI tools and age' },
        { href: '/we-teach-you-how-to-think', label: 'Judgement first' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] },
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Classes in Peru' },
        { href: '/curso-de-ia-para-empresas-peru', label: 'IA para empresas' },
        { href: '/curso-de-agentes-de-ia-para-profesionales', label: 'Agentes para profesionales' },
        { href: '/cursos-de-programacion-para-adultos-peru', label: 'Programación para adultos' }
      ] }
    ],
    bottomRight: 'Match the meaning, not the spelling'
  },

  personalityCss: `
.ag-root.ag-abu .ag-hero h1 { max-width: 17ch; letter-spacing: -0.01em; }
.ag-root.ag-abu .ag-capsule { border-left-width: 6px; border-radius: 0; }
.ag-root.ag-abu .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-abu .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-abu .ag-code-note code { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'INEI, Demografía Empresarial en el Perú, II Trimestre de 2026; Google Machine Learning Crash Course, Embeddings; DS 115-2025-PCM arts. 18, 24.1 e and g, 25.1 and 25.2 and the MYPE final provision (El Peruano, 9 September 2025); EF EPI 2025 Peru, job-function scores; Anthropic consumer terms. All read 9 November 2026.',
    localProject: 'An original embeddings lesson for a business: a bakery FAQ with price, hours and delivery answers and the question "how much is a birthday cake"; word-overlap cosine similarity wrongly prefers the delivery answer (0.34 to 0.33); a four-dimensional toy embedding (money, time, travel, food) correctly prefers the price answer (0.99 to 0.28). Plus four tasks including a human fallback and a bilingual FAQ. Lesson family: embeddings as cosine similarity.',
    requiredMentions: ['3,377,839', '32,890', 'delivery 0.34', 'price 0.99', 'They match spelling, not meaning', 'el etiquetado visible del sistema basado en IA', 'except where AI is used to detect financial fraud', 'customer service at 585', 'Match the meaning, not the spelling'],
    sources: [
      { claim: '3,377,839 active businesses on 30 June 2026 (+1.3%); 89,846 created or reactivated and 62,835 closed in Q2 2026; birth rate 2.7%, closure rate 1.9%; Lima Metropolitana 32,890 (36.6%).', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-demografia-empresarial-iit2026.pdf' },
      { claim: 'Embeddings capture semantic relationships and place similar items closer together.', url: 'https://developers.google.com/machine-learning/crash-course/embeddings/embedding-space' },
      { claim: 'DS 115-2025-PCM: transparency and visible labelling (art. 25), hiring and credit high-risk (art. 24.1 e, g), MIPYME sandbox (art. 18), MYPE periods.', url: 'https://www.gob.pe/institucion/pcm/normas-legales/7133522-115-2025-pcm' },
      { claim: 'EF EPI 2025 Peru job-function scores: strategy 589, customer service 585, marketing 565, operations 554, sales 547, admin 540, IT 522, accounting and finance 484.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Claude minimum age 18.', url: 'https://www.anthropic.com/legal/consumer-terms' }
    ],
    rejectedClaims: [
      'Share of Peruvian businesses using AI: no primary source found; not said.',
      'MYPE size by count, or the UIT in soles: not in our sources, and currency figures are not printed on Peru pages.',
      'Legal or tax advice on DS 115-2025-PCM: none; quoted as context with a pointer to the business\'s own lawyer.',
      'Productivity or revenue promises from AI: none made.',
      'Affiliation with INEI, PRODUCE, Microsoft or Google: none, and the page says so.'
    ]
  }
};
