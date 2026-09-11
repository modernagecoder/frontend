'use strict';
// Veenendaal: peat, wool and cigars on the edge of the Gelderse Vallei.
// 70,779 residents.
// Spine (modest, per the Phase 5 method): the encyclopaedia insists the name
// is to be read as Veenen-Daal and not as Veen-en-Daal. How a string is cut
// into pieces decides what it means, and language models read every word as
// pieces chosen by a tokenizer, which cuts by vocabulary, not by meaning.

module.exports = {
  slug: 'coding-classes-in-veenendaal',
  code: 'vnd',
  accent: '#750B00',
  accentRationale: 'Veenendaal: a deep peat-fire red, placed by the solver more than twenty-eight units from every page it links to, the Utrecht, Amersfoort and Ede accents among them, with an unlinked city as its nearest neighbour',
  pageType: 'city',
  place: {
    name: 'Veenendaal',
    eyebrow: 'Veenendaal, Utrecht',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Utrecht' },
      { type: 'Country', name: 'Netherlands' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Veenendaal, Netherlands',
  title: 'Coding Classes in Veenendaal | Modern Age Coders',
  description: 'Live online coding, Python, AI and app classes for Veenendaal, ages 6 to 67, from the Centrum and Noordwest to Veenendaal-Oost. The first lesson is free.',
  ogDescription: 'Live online coding, Python, AI and mathematics in Veenendaal, on a page about how a word is cut into pieces, by people and by language models.',
  twitterDescription: 'Veenendaal classes for ages 6 to 67, taught live online, starting with a free lesson.',
  ogImageCourse: 'python-ai-automation-masterclass-college',
  verifiedOn: '11 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Veenendaal Learners',
    description: 'Ability-placed online coding, Python, AI, app building and mathematics for children, teenagers and adults in Veenendaal, taught in English.'
  },

  h1: 'Coding classes in Veenendaal, a name that can be split two ways',
  capsuleQ: 'What are the best coding classes in Veenendaal?',
  capsule: 'Veenendaal had 70,779 residents on 1 January 2026, according to the national statistics, on the edge of the Utrechtse Heuvelrug and the Gelderse Vallei. Peat digging, wool and cigars built the town, and its citizens set up their own municipality in 1795. The encyclopaedia is firm about the name: it should be read as Veenen-Daal, not as Veen-en-Daal. The same letters, cut in a different place, say something different, and that is exactly how a language model sees text. Before a model reads a word it is cut into pieces called tokens, chosen by vocabulary rather than meaning, and the cut shapes what the model can and cannot do with it. Modern Age Coders teaches live online in English for ages 6 to 67; the first lesson is free, then a group place is USD 100 a month and a private one USD 150.',
  lead: 'Veenendaal, the encyclopaedia says, must be understood as Veenen-Daal and not as Veen-en-Daal. Dutch readers cut long compound words into their parts without thinking, and most of the time they cut them the same way. Computers do not read like that. A language model never sees the word Veenendaal as a whole, nor as letters; a component called a tokenizer first chops the text into pieces from a fixed vocabulary it learned from a mass of other text, and the model only ever works with those pieces. Whether the cut falls after veenen or after veen depends on which pieces happened to be common in that other text, not on what the name means. It explains some of the odd things AI does, such as miscounting the letters in a word, and why a Dutch sentence can cost a model more pieces than an English one. Veenendaal, a name that needed a ruling on where to cut, is a good place to learn it.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Veenendaal.',

  picks: {
    eyebrow: 'Course picks for Veenendaal',
    h2: 'Four courses for the town between the Heuvelrug and the Vallei',
    intro: 'A child in the Centrum who wants to make a word game, a teenager in Zuidwest curious why a chatbot cannot count the letters in its own answer, a student in Noordoost building a search tool for Dutch text, and an adult in Veenendaal-Oost paying for an AI service by the token. The first lesson costs nothing, for any of them.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Word games in Scratch where a child splits long words into parts and finds that some split more than one way.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Typed Python that cuts words into pieces from a small list, and shows how changing the list changes the pieces.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'Text processing and language-model work in Python, including counting tokens, costs and what a tokenizer does to Dutch.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'AI tools used with a clear idea of what a token is, why Dutch uses more of them, and what that means for cost and limits.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Veenendaal today',
      h2: 'Peat, wool, cigars, and a municipality founded in 1795',
      intro: 'Veenendaal is a single woonplaats, divided by the statistics office into six wijken, Centrum, Noordwest, West, Noordoost, Zuidwest and Zuidoost, and 38 buurten. On 1,942 hectares of land and only 30 of water it houses a published 3,623 residents per square kilometre. The town lies on the Utrechtse Heuvelrug and the Gelderse Vallei, close against the Grebbelinie.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Peat and a name', p: 'At the end of the Middle Ages peat came into use as fuel instead of wood, and as in many other parts of the Netherlands the peat here was dug. The name, the encyclopaedia says, must therefore be understood as Veenen-Daal and not as Veen-en-Daal.' },
          { h3: 'Wool and cigars', p: 'The wool industry has its origins here, and together with the cigar industry the textile industry shaped Veenendaal until the first half of the twentieth century.' },
          { h3: 'A municipality of its own', p: 'In 1795 some citizens of Veenendaal took the arrival of the French armies as their chance to found a municipality of their own. In 1998 another piece of land was taken over from Ede, to build three new wijken in Veenendaal-Oost: Buurtstede, Groenpoort and Veenderij.' }
        ] }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Where to cut',
      h2: 'One word, cut by three vocabularies',
      intro: 'The table uses a toy tokenizer that works the simple way many real ones start: from the left, take the longest piece in its vocabulary that fits, then repeat. The vocabularies are invented for the illustration.',
      body: [
        { kind: 'table', caption: 'The same rule, three vocabularies, three results for veenendaal', head: ['Vocabulary contains', 'Pieces produced', 'Number of pieces', 'Reading'], rows: [
          ['veenen, veen, en, daal, and single letters', 'veenen | daal', '2', 'the encyclopaedia\'s Veenen-Daal'],
          ['veen, en, daal, and single letters, but not veenen', 'veen | en | daal', '3', 'the reading the encyclopaedia rejects'],
          ['single letters only', 'v | e | e | n | e | n | d | a | a | l', '10', 'no reading at all']
        ] },
        { kind: 'p', text: 'The rule never changed; only the vocabulary did. With veenen available the tokenizer produces the correct reading, without it the rejected one, and with letters alone it produces ten pieces that carry no reading at all. A real tokenizer\'s vocabulary has tens of thousands of pieces, learned from the text it was built on, and if that text was mostly English, common English fragments are well represented and long Dutch compounds are cut into more, smaller, less meaningful pieces. Nothing in the process consults the meaning of the word. This is why a model may stumble when asked how many letters a word has, since it may never have seen the letters separately, and why the same message in Dutch can use noticeably more tokens than in English, which matters because models are priced and limited by the token.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Veenendaal in the national statistics',
      intro: 'Figures published for the municipality, with the year of each; the encyclopaedia history; and, at the end, the few calculations this page makes.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Growth', p: '54,027 residents in 1995, 63,032 in 2013, 70,352 in 2025 and 70,779 on 1 January 2026; the figures site gives the growth since 1995 as 31 percent. In 2025 there were 34,964 men and 35,388 women.' },
          { h3: 'A young town', p: 'In 2026, 12,556 residents were under fifteen, 8,552 between fifteen and twenty-five, 18,735 between twenty-five and forty-five, 17,208 between forty-five and sixty-five, and 13,728 sixty-five or older.' },
          { h3: 'Households', p: '30,114 households in 2025 with an average of 2.3 people, 10,390 of them single-person and 19,724 of more people, 10,913 of which include children.' },
          { h3: 'Homes and incomes', p: '30,164 dwellings in 2025, 17,797 owner-occupied and 12,367 rented, at an estimated average value of 394,000 euro. Average income was 32,400 euro per resident and 40,400 per income recipient in 2024, with 2.3 percent of residents in poverty.' },
          { h3: 'Schools and origin', p: '25 primary establishments teach 7,165 pupils, about 287 each, and 4 secondary establishments teach 5,845, about 1,461 each; 160 MBO students study at institutions in the town. In 2025, 54,861 residents were of Dutch origin, 3,700 of European and 11,791 of non-European origin, and 62,234 had been born in the Netherlands.' },
          { h3: 'The sums', p: '70,779 minus 54,027 is 16,752. 7,165 over 25 is about 287 and 5,845 over 4 about 1,461. The age groups, the origin groups, the household types and the two tenure groups were each totalled only to confirm they are complete.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders is not connected with the municipality of Veenendaal or any school, firm or museum in the town, and nothing here implies it. The statistics are those published for Veenendaal for the years stated. The name, the peat, the wool and cigar industries, the municipality of 1795, the land taken over from Ede in 1998 and the town\'s position come from the encyclopaedia entry for Veenendaal, which gives 70,000 residents on 9 August 2024, a different source and date from the statistics, so the two are not combined.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Build a tokenizer, then break it',
      intro: 'A learner can write the whole idea in a few dozen lines: a vocabulary, a rule for cutting, and a set of words that show where the rule goes wrong.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Write the rule', p: 'Start from the left of a word, find the longest piece in the vocabulary that matches, cut it off, and repeat until the word is used up. Fall back to single letters when nothing longer fits.' },
          { h3: '2. Change the vocabulary', p: 'Run the same words through several vocabularies. Watch Veenendaal, and other compounds, split differently each time while the rule stays the same, and count the pieces.' },
          { h3: '3. Find the failures', p: 'Look for words where the cut crosses a real boundary, or where the piece count balloons. Those are the words a language model built on that vocabulary will handle least naturally.' }
        ] },
        { kind: 'table', caption: 'What tokens explain about AI behaviour', head: ['Something AI does', 'The token explanation', 'Who notices', 'What to do about it'], rows: [
          ['Miscounts the letters in a word', 'the word arrived as a few pieces, not as letters', 'anyone who asks it to spell', 'ask for the letters one by one, or use code to count'],
          ['Uses more of its limit on Dutch text', 'long compounds cut into many small pieces', 'people paying per token', 'measure token counts on real Dutch input'],
          ['Stumbles on rare names and places', 'an unfamiliar name becomes a string of fragments', 'users from small towns', 'test with local names before relying on it'],
          ['Treats two spellings very differently', 'a small change of spelling changes every piece', 'people with typos or variant spellings', 'normalise spelling before processing'],
          ['Reads Veenendaal', 'veenen and daal, or veen, en and daal, depending on vocabulary', 'this page', 'know that the cut is not the meaning']
        ] },
        { kind: 'callout', h3: 'Why the smallest step of an AI model deserves attention', p: 'People discussing language models talk about training data, size and reasoning, and hardly ever about the tokenizer, the first and simplest stage. Yet everything the model does passes through it. The tokenizer decides how many pieces a sentence costs, which words are seen as familiar wholes and which as strings of fragments, and whether the model ever sees individual letters at all. Languages and names that were rare in the text the vocabulary was built from are cut more finely, which can make them slower, more expensive and less reliable to work with. None of this is visible in a chat window, where the answer arrives as fluent sentences. A learner who has written a twenty-line tokenizer and watched a vocabulary change the pieces of one Dutch word will understand a whole class of AI behaviour that otherwise seems mysterious. Veenendaal gives the lesson a local voice: the town\'s own name needed an encyclopaedia to say where the cut belongs.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for working with text and language models',
      intro: 'For search, chatbots, text analysis and any tool that charges or limits by the token. Practised in a town whose name splits two ways.',
      body: [
        { kind: 'table', caption: 'Handling text with the tokenizer in mind', head: ['Habit', 'How', 'What it avoids', 'Benefit'], rows: [
          ['Count real tokens', 'Measure token counts on actual Dutch input, not an English estimate', 'Budgets and limits blown by long compounds', 'Predictable cost'],
          ['Letters by code', 'Use ordinary code for spelling, counting and exact matching', 'Asking a model to do what its pieces hide', 'Exact answers'],
          ['Normalise first', 'Standardise spelling, spacing and case before processing', 'Variant spellings treated as different words', 'Consistent results'],
          ['Test local names', 'Include street, town and family names in every evaluation', 'Tools that fail on the words users actually type', 'Tools that work here'],
          ['Keep the original', 'Store the raw text beside any tokenized form', 'Losing what was actually written', 'Text you can reprocess later']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A game of cutting long Dutch words into parts with a pair of scissors on paper, then with a small program. The child finds a word that can be cut two ways and decides which cut is right.' },
          { h3: 'For teenagers', p: 'A tokenizer in Python with a vocabulary the teenager builds, tested on Dutch compounds and English words. The stretch: count how many more pieces the Dutch sentences need.' },
          { h3: 'For adults', p: 'A measured comparison of token counts for the same message in Dutch and in English, using a real AI tool\'s counter. Adults often find the Dutch version noticeably more expensive.' }
        ] },
        { kind: 'p', text: 'This section uses the encyclopaedia\'s ruling on the name Veenendaal and a toy tokenizer built for the page. It makes no claim about how any particular AI product cuts the word Veenendaal.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From cutting words with scissors to counting a model\'s tokens',
    intro: 'Where a learner begins is decided in the free lesson by how they handle a real task. Their wijk plays no part, and age alone does not decide it.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Cutting words', p: 'Children split long words into parts and find ones that split two ways.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Longest piece first', p: 'Learners write the cutting rule in Python and try new vocabularies.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Dutch against English', p: 'Teenagers measure how many more pieces Dutch sentences need.', courses: ['complete-app-development-masterclass-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Tokens and cost', p: 'Adults measure real token use and plan AI work around it.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI reads every word in pieces. Why should a teenager in Veenendaal learn where it cuts?',
    intro: 'Because the town\'s own name shows that where a word is cut decides what it says.',
    p1: 'Every language model works on tokens, pieces of text taken from a vocabulary built before the model was trained. People see words; the model sees whatever pieces the tokenizer produced. For common English words that is usually a whole word or two sensible parts. For long Dutch compounds, rare names and unusual spellings it can be a string of fragments, and the model has to work out the meaning from pieces that do not line up with the parts a Dutch reader would see.',
    p2: 'A learner who has written a tokenizer, changed its vocabulary and watched one word come apart in different places understands why a model miscounts letters, why Dutch text can cost more and why local names trip tools up. Deciding when to hand a task to plain code instead, measuring token use on real input and testing with the words people actually type are choices a person makes. The model cannot see its own pieces. People can.',
    closer: 'So the case for a child in Veenendaal learning to code in 2026 is not the peat or the wool. It is that someone who knows how text is cut before a model reads it will be needed wherever AI is used on Dutch words, local names and anything outside the common English that its vocabulary was built on.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Every wijk of Veenendaal, one class',
    intro: 'From the Centrum out to the new wijken of Veenendaal-Oost, the town is compact, and a lesson that begins at home spares every family the trip.',
    cells: [
      { h3: 'From any of the six wijken', p: 'A learner in Zuidoost and a learner in Noordwest open the lesson at the same time, each from home, without a ride through town in the evening.' },
      { h3: 'School words left alone', p: 'Groep, brugklas, vmbo, havo, vwo and the profielkeuze are said in Dutch, as a Veenendaal school writes them, while the teaching is in English.' },
      { h3: 'A real first lesson', p: 'The free session works through a genuine task. It ends with a suggested level, a course and a weekly slot, and no payment details are asked for.' },
      { h3: 'Matched groups', p: 'Five to ten learners at the same point. Veenendaal has 12,556 residents under fifteen, but five who match on subject, level and hour are rarely found in one town, so groups may include learners from other countries.' },
      { h3: 'Regio Midden holidays', p: 'Two lessons a week, around eight a month, at a fixed hour, pausing for the regio Midden holidays that schools in the province of Utrecht follow.' },
      { h3: 'Teaching from India', p: 'The teachers are three and a half hours ahead of Veenendaal in summer and four and a half in winter, so late afternoons, evenings and weekend mornings all work.' }
    ],
    spec: { title: 'Twenty-nine schools, six wijken, and one group online', p: 'Veenendaal has 25 primary establishments teaching 7,165 pupils and 4 secondary establishments teaching 5,845. Five learners matched on subject, stage and hour are much easier to find across all ages from 6 to 67 and many countries than inside one town.' }
  },

  fees: {
    h2: 'Fees for Veenendaal',
    intro: 'Three prices, and nothing hidden behind them.',
    first: 'A real lesson on a real task, finishing with a level and a course.',
    group: 'Monthly, normally eight lessons, five to ten learners at one level.',
    private: 'Monthly, normally eight lessons, one learner and one teacher.',
    closer: 'The fee is a single dollar price for every country, with no euro version, so a household in Veenendaal-Oost pays what a household in the Centrum pays. Nothing is due until the free lesson has settled a course and a slot, after which payment is arranged on WhatsApp. Pauses, changes of format and missed lessons are covered on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, left as they were written',

  book: {
    h2: 'Where is the learner starting?',
    intro: 'The first task might be cutting long words into parts, a small tokenizer tried with different vocabularies, or a count of how many pieces a Dutch sentence needs.',
    success: 'Thank you. Your Veenendaal class request has been sent.'
  },

  faq: {
    h2: 'Veenendaal coding class questions',
    intro: 'The town, its name, its figures, and the lessons.',
    items: [
      { q: 'Which wijken does Veenendaal have?', a: 'The statistics office divides the town into six wijken, Centrum, Noordwest, West, Noordoost, Zuidwest and Zuidoost, with 38 buurten. Veenendaal-Oost includes the newer wijken of Buurtstede, Groenpoort and Veenderij.' },
      { q: 'How many people live in Veenendaal?', a: 'The national count was 70,779 on 1 January 2026, in 30,114 households in 2025. In 1995 it was 54,027, and the figures site gives the growth since then as 31 percent.' },
      { q: 'How should the name Veenendaal be read?', a: 'As Veenen-Daal and not as Veen-en-Daal, according to the encyclopaedia, which connects the name with the digging of peat in the area at the end of the Middle Ages.' },
      { q: 'What industries made Veenendaal?', a: 'The wool industry began here, and together with the cigar industry the textile industry shaped the town until the first half of the twentieth century, the encyclopaedia records.' },
      { q: 'When did Veenendaal become a municipality?', a: 'In 1795, when some of its citizens used the arrival of the French armies to set up a municipality of their own. In 1998 land was taken over from Ede to build three new wijken in Veenendaal-Oost.' },
      { q: 'How many schools are there in Veenendaal?', a: 'The statistics count 25 primary establishments teaching 7,165 pupils and 4 secondary establishments teaching 5,845, with 160 MBO students at institutions in the town. This page rates no school.' },
      { q: 'What language are lessons in, and when are they held?', a: 'The lessons are in English, with Dutch school words such as brugklas, havo and vwo kept as they are. The teachers work from India, three and a half hours ahead of Veenendaal in summer and four and a half in winter, so late-afternoon, evening and weekend slots are simple to arrange. The slot is agreed in the free lesson, and regio Midden holidays are kept.' },
      { q: 'Is there a Modern Age Coders classroom in Veenendaal?', a: 'No, and none is claimed here or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Veenendaal coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or address. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the province of Utrecht and beyond',
    h2: 'Across the Heuvelrug, into the Vallei, and up to the hub',
    html: 'The provincial capital has its own page at <a class="cg-inline-link" href="/coding-classes-in-utrecht">coding classes in Utrecht</a>, and to the north <a class="cg-inline-link" href="/coding-classes-in-amersfoort">Amersfoort</a> has one too. Across the provincial border, <a class="cg-inline-link" href="/coding-classes-in-ede">Ede</a>, from which Veenendaal took land in 1998, has a page of its own, and the whole province is gathered on <a class="cg-inline-link" href="/coding-classes-in-utrecht-province">the province of Utrecht</a>. For machine learning straight away there is the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>, and the complete series is on the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>.',
    waLabel: 'Ask on WhatsApp'
  },

  footerHeading: 'Veenendaal, Utrecht and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-utrecht', label: 'Utrecht' },
    { href: '/coding-classes-in-utrecht-province', label: 'Utrecht province' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-vnd .cg-hero-grid { align-items: end; gap: clamp(1.1rem, 2.7vw, 2.25rem); }
.cg-root.cg-vnd .cg-hero h1 { font-weight: 650; letter-spacing: -0.019em; line-height: 1.07; }
.cg-root.cg-vnd .cg-capsule { border-top: 2px solid var(--cg-accent); padding-top: 1.15rem; }
.cg-root.cg-vnd .cg-eyebrow { letter-spacing: 0.13em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-vnd .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.016em; }
.cg-root.cg-vnd .cg-grid-3 { gap: clamp(1.05rem, 2.3vw, 1.85rem); }
.cg-root.cg-vnd .cg-card { border-radius: 10px; border-top: 3px solid var(--cg-accent-soft); }
.cg-root.cg-vnd .cg-table caption { letter-spacing: 0.02em; font-weight: 700; }
.cg-root.cg-vnd .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-vnd .cg-table td:nth-child(2) { font-weight: 700; }
.cg-root.cg-vnd .cg-ladder-col { border-left: 3px solid var(--cg-accent-soft); padding-left: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'Gemeente Veenendaal, Utrecht: 70,779 residents (statistics, 1 January 2026), 70,352 (2025), 63,032 (2013), 54,027 (1995), growth given by the site as 31 percent; 34,964 men and 35,388 women (2025); ages (2026) 12,556 under fifteen, 8,552 fifteen to twenty-five, 18,735 twenty-five to forty-five, 17,208 forty-five to sixty-five, 13,728 sixty-five or over; 30,114 households (2025) averaging 2.3, 10,390 one-person, 19,724 multi-person, 10,913 with children; 1,972 hectares, 1,942 land, 30 water, published density 3,623; 30,164 dwellings (2025), 17,797 owner-occupied at 59 percent, 12,367 rented at 41 percent; estimated average value 394,000 euro; income 32,400 euro per resident and 40,400 per recipient (2024); 2.3 percent in poverty; origin (2025) 54,861 Dutch, 3,700 European, 11,791 non-European, 62,234 born in the Netherlands and 8,118 abroad; one woonplaats, six wijken (Noordwest, West, Noordoost, Centrum, Zuidwest, Zuidoost), 38 buurten; 25 primary establishments with 7,165 pupils, 4 secondary with 5,845, 160 MBO students at institutions. Encyclopaedia: the name is to be understood as Veenen-Daal and not as Veen-en-Daal; peat came into use as fuel at the end of the Middle Ages and was dug here; the wool industry originates here, and with the cigar industry the textile industry shaped Veenendaal until the first half of the twentieth century; in 1998 land was again taken over from Ede for three new wijken in Veenendaal-Oost, Buurtstede, Groenpoort and Veenderij; on the Utrechtse Heuvelrug and the Gelderse Vallei, close against the Grebbelinie; in 1795 citizens used the French invasion to found their own municipality; 70,000 residents on 9 August 2024 and 19.81 square kilometres, not combined with the statistics. Regio Midden holidays. The city page teaches tokenization.',
    localProject: 'Where a word is cut decides what it says. The encyclopaedia rules that Veenendaal is to be read as Veenen-Daal and not Veen-en-Daal. Language models read text as tokens cut from a fixed vocabulary; a toy greedy longest-match tokenizer on the page cuts veenendaal as veenen and daal with one vocabulary, veen, en and daal without veenen, and ten letters with letters alone, so the rule is constant and only the vocabulary decides. The programming and AI form is tokenization: models miscount letters because words arrive as pieces, long Dutch compounds and rare local names cost more tokens and are handled less naturally, spelling variants change every piece, and models are priced and limited by the token. The defences are measuring token counts on real Dutch input, using ordinary code for spelling and counting, normalising spelling first, testing with local names, and keeping the original text. The page makes no claim about how any particular AI product cuts the word. Chosen after a case-sensitive check found no page using token, tokenizer, subword or longest match. Distinct from Friesland and Scheveningen, which concern names as identifiers, and from Hoorn, which concerns date conventions.',
    requiredMentions: [
      '54,027',
      '63,032',
      '30,114',
      '10,390',
      '10,913',
      '30,164',
      '17,797',
      '12,367',
      '13,728',
      '12,556',
      'Veenen-Daal',
      'Veenderij',
      'Groenpoort',
      'Buurtstede'
    ],
    sources: [
      { claim: 'Gemeente Veenendaal: 70,779 inwoners (2026), 70,352 (2025), 63,032 (2013), 54,027 (1995), growth 31 percent since 1995 (16,752); mannen 34,964, vrouwen 35,388 (2025); 30,114 huishoudens, 10,390 eenpersoons, 19,724 meerpersoons, 10,913 met kinderen, gemiddeld 2.3 (2025); ages 0-15 12,556, 15-25 8,552, 25-45 18,735, 45-65 17,208, 65+ 13,728 (2026); 1,972 hectare, land 1,942, water 30; bevolkingsdichtheid 3,623; woningvoorraad 30,164, koop 17,797 (59 percent), huur 12,367 (41 percent) (2025); gemiddelde WOZ 394,000 euro; basisonderwijs 25 vestigingen 7,165 leerlingen, voortgezet onderwijs 4 vestigingen 5,845 leerlingen, MBO 160; herkomst Nederland 54,861, Europa 3,700, buiten Europa 11,791, geboren in Nederland 62,234, buiten Nederland 8,118 (2025); gemiddeld inkomen per inwoner 32,400 and per inkomensontvanger 40,400 euro (2024); personen in armoede 2.3 percent; 1 woonplaats, 6 wijken (Noordwest, West, Noordoost, Centrum, Zuidwest, Zuidoost), 38 buurten.', url: 'https://allecijfers.nl/gemeente/veenendaal/' },
      { claim: 'Veenendaal (encyclopaedia): De naam moet dan ook begrepen worden als Veenen-Daal, en niet als Veen-en-Daal. Aan het einde van de Middeleeuwen kwam turf steeds meer in gebruik als brandstof, in plaats van hout. Net als in veel andere gebieden in Nederland werd het veen ook in dit gebied ontgonnen. De wolindustrie dankt hier zijn oorsprong aan. Samen met de sigarenindustrie was de textielindustrie tot in de eerste helft van de 20e eeuw bepalend voor Veenendaal. Om de bouw van drie nieuwe, levensloopbestendige woonwijken in Veenendaal-Oost (Buurtstede, Groenpoort en Veenderij) mogelijk te maken is in 1998 wederom een stuk grond van Ede overgenomen. Gelegen aan de Utrechtse Heuvelrug en de Gelderse Vallei; vlak tegen de Grebbelinie aan. In 1795 grepen enkele Veense burgers de inval van de Franse legers aan om een eigen gemeente op te richten. Per 9 augustus 2024 telde de gemeente 70.000 inwoners; oppervlakte 19,81 km2.', url: 'https://nl.wikipedia.org/wiki/Veenendaal' },
      { claim: 'School holiday regions: regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'How any particular AI product or tokenizer cuts the word Veenendaal. The page uses a toy tokenizer with invented vocabularies.',
      'The meaning of the parts of the name beyond the encyclopaedia\'s ruling and its link with peat digging.',
      'Any growth figure or boundary argument built on the land taken from Ede in 1998. Boundary changes in a series are the Alkmaar argument.',
      'The encyclopaedia milestone of 70,000 residents on 9 August 2024 as anything more than a dated figure. Milestones are the Zoetermeer argument.',
      'Names of cigar or textile firms. Not in the sentences read.',
      'Anything the Utrecht, Amersfoort, Ede and Utrecht province pages own, including their figures and arguments.'
    ]
  }
};
