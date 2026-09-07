'use strict';
// Uithoorn: 32,204 people on the Amstel, two woonplaatsen, the second
// highest Indian-origin share in the country, and a municipal entry whose
// population graph will not draw.
// Spine: an absence can live in the world, in the record or only in the
// view, and the three look identical from where the reader sits.

module.exports = {
  slug: 'coding-classes-in-uithoorn',
  code: 'uit',
  accent: '#733357',
  accentRationale: 'Uithoorn: a mulberry drawn from the river town and the Amstel light, set by the solver clear of the plum already carrying Delft and the greens on the Amstelveen page next door',
  pageType: 'city',
  place: {
    name: 'Uithoorn',
    eyebrow: 'Uithoorn, Noord-Holland',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Noord-Holland' },
      { type: 'Country', name: 'Netherlands' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Uithoorn, Netherlands',
  title: 'Coding Classes in Uithoorn | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in Uithoorn and De Kwakel for ages 6 to 67, taught in English by teachers in India. The first lesson is free.',
  ogDescription: 'Live online coding, Python and AI for families in Uithoorn, built on the difference between a fact that is missing and a graph that will not draw.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'mysql-database-complete-masterclass-college',
  verifiedOn: '8 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Uithoorn Learners',
    description: 'Ability-placed online coding, Python, AI, databases and mathematics for children, teenagers and adults in Uithoorn and De Kwakel, taught in English.'
  },

  h1: 'Coding classes in Uithoorn, where the population graph will not draw and that is a fact about the software, not about the town',
  capsuleQ: 'What are the best coding classes in Uithoorn?',
  capsule: 'Coding classes in Uithoorn serve 32,204 people (Statistics Netherlands, 1 January 2026) on 19.42 square kilometres of the Amstel valley at 1,772 residents to the square kilometre, in 14,077 households of which 4,805 hold one person. Where the municipal entry should show a graph of the population over time it shows a sentence explaining that the graph software cannot be displayed, and a reader who stops there concludes the history is missing. It is not: the same history says 24,581 residents in 1995 against 32,204 today. Modern Age Coders teaches live online in English in Uithoorn and De Kwakel, ages 6 to 67, first lesson free, then USD 100 monthly in a group of five to ten or USD 150 one to one.',
  lead: 'Open the municipal entry for Uithoorn, scroll to where the population history should be, and you find no graph. In its place sits a sentence saying that because of a security problem with the graph software it is not currently possible to display this chart. Nothing about Uithoorn is missing. The town has a population history, the numbers are recorded, and one of them says 24,581 people lived here in 1995. What failed was the drawing. From where a reader sits, though, a broken picture and a fact that was never collected look exactly the same, and that is one of the most expensive confusions in working with data.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Uithoorn.',

  picks: {
    eyebrow: 'Course picks for Uithoorn',
    h2: 'Four courses for a small town with an unusually wide world in it',
    intro: 'A groep 5 child near the Amstel who is bored of dragging blocks, a teenager in De Kwakel who wants a page on the internet that is genuinely theirs, a student who has realised every job advertisement mentions models, and a parent whose work database is full of blanks nobody can account for: four doors, and the first hour of each costs nothing.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Typed Python, drawings that follow instructions and a first program that spots a rule, taught in English to the groep 5 to 8 child in either woonplaats.' },
      { course: 'frontend-development-masterclass-for-teens', band: 'Ages 13 to 18', note: 'HTML, CSS and JavaScript until a real site works on a real phone, for the teenager who wants something they can show rather than describe.' },
      { course: 'ai-ml-masterclass-complete-college', band: 'College and adult', note: 'How a model is trained, tested and broken, for the student who would rather understand the machinery than repeat what it says.' },
      { course: 'mysql-database-complete-masterclass-college', band: 'Adults', note: 'Keys, joins and the meaning of NULL, for anyone whose reports contain blanks that three people explain three different ways.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Uithoorn today',
      h2: 'Thirty-two thousand people between Amstelveen and the water',
      intro: 'The national register held 32,204 residents on 1 January 2026, in 14,077 households averaging 2.26 people, on 1,812 hectares of land inside 1,942 hectares of territory, a published 1,772 residents to the square kilometre. In 1995 the count was 24,581, so the recorded gain across thirty-one years is 7,623 people, a rise of 31 percent, which is fast for a municipality that has not grown outward much.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'A young town by Dutch standards', p: '5,443 residents are under fifteen, which is 17 percent, a higher share than most municipalities in this series. 3,657 are between fifteen and twenty-five, 8,060 between twenty-five and forty-five, 8,882 between forty-five and sixty-five and 6,162 are sixty-five or over. 4,805 of the 14,077 households hold one person, 34 percent, which is low for the Netherlands.' },
          { h3: 'Nine primary schools, three secondary', p: '9 primary establishments teach 2,843 pupils and 3 secondary establishments teach 2,385. Among residents, 670 are enrolled in applied higher education and 370 at university level. The national page gives no figure for students at institutions inside the municipality, and this page records that as an absent figure rather than as a zero.' },
          { h3: 'Eleven wijken and eleven buurten', p: 'The register divides the municipality into 2 woonplaatsen, 11 wijken and 11 buurten, one buurt to each wijk. A buurt-level statistic here therefore carries no more detail than a wijk-level one, so this page treats the two levels as the same level and makes no fine-grained claim from either.' }
        ] },
        { kind: 'spec', title: 'The Amstel, a tram that arrived in 2024, and a very old boundary', p: 'Uithoorn sits on the Amstel, bordered by Aalsmeer, Amstelveen, Kaag en Braassem, Nieuwkoop and De Ronde Venen. Its entry records that on 1 October 1819 Uithoorn again became part of the province of Noord-Holland and that on 10 February 1820 Thamen was again annexed, the word again appearing in both sentences. On 21 July 2024 the tram from Amstelveen Westwijk was extended to Uithoorn Centrum. The mayor is Pieter Heiliegers of the VVD.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Where the learners are',
      h2: 'Two woonplaatsen, one river, and a very international thirty thousand',
      intro: 'Uithoorn is a town on the Amstel and a village behind it, and the whole municipality fits inside nineteen square kilometres. Almost nothing here is a journey. What is unusual about it is not its size.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Uithoorn', p: 'The town itself, along the river and out towards Amstelveen, holding the station end of the new tram, the schools and the large majority of the 32,204 residents. The entry gives no separate population for it.' },
          { h3: 'De Kwakel', p: 'The second woonplaats, south-west towards Aalsmeer, a village with its own name, its own identity and, like the town, no population figure of its own in the municipal entry.' },
          { h3: 'The second highest Indian-origin share in the country', p: 'Statistics Netherlands put Uithoorn at 49.6 residents of Indian origin per thousand on 1 January 2024, behind only Amstelveen at 68.3 and ahead of every other municipality in the Netherlands. This page quotes the rate and does not multiply it into a headcount, because the rate is a 2024 figure and the population above is a 2026 one.' },
          { h3: 'Twenty minutes of tram from Amstelveen', p: 'The two municipalities with the highest Indian-origin shares in the country are neighbours on the same tram line, which is why families here often already know somebody taking these classes.' },
          { h3: 'A young age structure', p: 'With 5,443 children under fifteen in a municipality of 32,204, Uithoorn has a fuller bottom to its population pyramid than most of the towns in this series, and the primary schools carry 2,843 of them.' },
          { h3: 'Where the specialist class is not', p: 'Nine primary and three secondary establishments is a complete school system for a town this size and a thin one for anything specialised. A child who wants Python properly at ten, or Java at fifteen, is not going to find a local group at the right level, and that has nothing to do with the quality of the schools.' }
        ] },
        { kind: 'p', text: 'Both woonplaatsen get the same class at the same hour for the same fee. A learner is placed on what they can already do, so a child in De Kwakel and a child by the river sit together when they are at the same stage and apart when they are not.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Every figure, its source, and four different kinds of nothing',
      intro: 'The national count, the municipal entry, the graph that will not draw, and the things this page refuses to fill in.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The municipal count', p: 'Statistics Netherlands: 32,204 residents in 2026; 14,077 households averaging 2.26, 4,805 of them single-person, 34 percent; 5,443 under fifteen; 3,657 aged fifteen to twenty-five; 8,060 aged twenty-five to forty-five; 8,882 aged forty-five to sixty-five; 6,162 aged sixty-five and over; total area 1,942 hectares with 1,812 of land; density 1,772; 9 primary establishments with 2,843 pupils and 3 secondary with 2,385; 670 residents in applied higher education and 370 at university level; 2 woonplaatsen, 11 wijken and 11 buurten; 24,581 residents in 1995, a rise of 7,623.' },
          { h3: 'The municipality, described', p: 'Its own entry: de gemeente telt 32.215 inwoners on 1 January 2026 and names Statistics Netherlands as its source, eleven more than the national page gives for the same date from the same office, and both are kept; an area of 19.49 square kilometres of which 1.20 water, against 19.42 with 1.30 of water in the national figures, and again both are kept; mayor Pieter Heiliegers of the VVD; neighbouring municipalities Aalsmeer, Amstelveen, Kaag en Braassem, Nieuwkoop and De Ronde Venen.' },
          { h3: 'The graph that is not there', p: 'Where the entry would show the population over time, it prints instead: vanwege een beveiligingsprobleem met de MediaWiki Graph-software is het momenteel niet mogelijk deze grafiek weer te geven. The series is not withdrawn, disputed or lost. One piece of display software is switched off, and the sentence sitting where the picture should be is about that software and about nothing else.' },
          { h3: 'The average that disagrees with itself', p: 'The national page gives a household size of 2.26 in its table and describes it as 2.3 in the prose immediately beside it. That is rounding rather than contradiction, and both are reproduced here so that a reader comparing this page with the source finds what they expect.' },
          { h3: 'Two very old sentences', p: 'The entry records that op 1 oktober 1819 ging Uithoorn weer deel uitmaken van de provincie Noord-Holland and that op 10 februari 1820 werd Thamen weer geannexeerd. The word weer, again, appears in both and implies earlier changes that this page did not read and therefore does not describe.' },
          { h3: 'What is not filled in here', p: 'No population is given for the town of Uithoorn or for De Kwakel, because the entry gives none. No student count for institutions inside the municipality appears, because the national page shows none. No headcount of residents of Indian origin is computed, because the published rate and the published population belong to different years. In each case the blank is left visible.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection to the municipality, the schools or any organisation named here and claims none. Every absence on this page is left as an absence.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'The graph is empty. Is the town, the record, or the screen?',
      intro: 'One missing picture, one perfectly intact history, and three other kinds of nothing on the same two pages.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Separate the world from the record from the view', p: 'The population of Uithoorn changed every year since 1819. That is the world. Those changes were counted and stored. That is the record. A chart was supposed to draw them and did not. That is the view. Only the third one failed, and only the third one is what a reader actually looked at.' },
          { h3: '2. Notice that the failure is written in words', p: 'The page does not go blank. It prints a sentence about MediaWiki, and a sentence is content. A person skims past it. A program reading the page stores it, or stores nothing, and either way a later reader sees a field with no number in it and no explanation of why. The error message has become the data.' },
          { h3: '3. Go and get the number from somewhere else', p: 'This one takes about a minute. The national statistics page for the municipality gives 24,581 residents in 1995 and 32,204 in 2026, a gain of 7,623 or 31 percent. The history the broken chart would have shown was never unavailable. It was unavailable in that one place, on that one day, in that one rendering.' }
        ] },
        { kind: 'table', caption: 'Four kinds of nothing on two pages about one small town', head: ['What you see', 'What it might mean', 'The move that fits', 'What guessing costs you'], rows: [
          ['A chart replaced by a note about graph software', 'the record exists and the drawing failed', 'find the series elsewhere, which here takes one page', 'you report that a town has no population history'],
          ['No population beside De Kwakel', 'the source never published at that level', 'say so plainly, or find a source that does', 'you invent a split between two places'],
          ['No students-at-institutions figure', 'not collected, not applicable, or too small to publish', 'ask which before any total is taken', 'a real absence gets averaged in as a zero'],
          ['A rate from 2024 and a population from 2026', 'both correct, and not multipliable together', 'quote the rate and stop', 'a headcount that reads as measured and is not']
        ] },
        { kind: 'callout', h3: 'Ask which layer the absence is in: the world, the record, or the view', p: 'Every number that reaches a person has travelled through at least three layers, and each of them can produce an emptiness that looks identical from the far end. The world may genuinely have nothing to report. The record may never have collected it, or may have collected it and lost it, or may hold it while refusing to publish because the count is too small. And the view, the last and least examined layer, may simply have failed to draw what it was given. A dashboard tile that will not load, a chart library that throws, a join that silently drops rows, an export capped at a thousand records, a permission that hides a column: all of these produce a screen with nothing on it, and the person looking at that screen reaches a conclusion about the world. The habit worth building is to ask which layer before believing anything, and it costs one question. Here the answer was the third layer, the fix was to open a different page, and the town had a full history the entire time. The version of this mistake that reaches real work is the one where nobody asks, the empty tile becomes a slide, the slide becomes a decision, and the number was sitting in the database throughout.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for telling an empty thing from an empty screen',
      intro: 'A dashboard that will not load, an export that stops at a thousand rows, a column somebody lost permission to read: every one of them looks like a fact about the business. Practised on a town whose history was never actually missing.',
      body: [
        { kind: 'table', caption: 'Working out what a blank is before acting on it', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Locate the layer', 'Ask whether the gap is in the world, the record or the view', 'A rendering bug reported as a finding', 'A question with an answer instead of a shrug'],
          ['Read the error as text', 'Treat any message where a number should be as a signal, not as content', 'An error string stored and later averaged', 'A blank you can trace back to a cause'],
          ['Try a second route', 'Fetch the same fact from another source before concluding it is gone', 'A conclusion drawn from one broken page', 'Confirmation, or a genuinely missing value'],
          ['Give absence a code', 'Distinguish not collected, not applicable, suppressed and not displayed', 'Four different situations flattened into one blank', 'Rows that still explain themselves next year'],
          ['Never let a blank default', 'Refuse to substitute a zero or a mean without writing down that you did', 'A silent fill that survives into every later total', 'Totals you can still defend when questioned']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A jar with a lid nobody can open. Is it empty? The children list every way of finding out without opening it, and discover the difference between knowing something is empty and not being able to see inside.' },
          { h3: 'For teenagers', p: 'A small Python dataset where four different absences are stored with four different codes, a summary function that refuses to average across them, and a report that prints how many of each kind it skipped. The stretch: write the version that silently fills blanks with zero, run both, and explain the gap between the two answers.' },
          { h3: 'For adults', p: 'A real report at work with a gap in it. Adults nearly always find that nobody knows which layer the gap is in, that the tool it came from has changed twice since, and that a decision was already taken on the strength of the empty cell.' }
        ] },
        { kind: 'p', text: 'Population, household, age, area, school and enrolment figures come from the national statistics office; the population, area, mayor, neighbouring municipalities, the 1819 and 1820 sentences, the tram extension and the missing graph come from the encyclopaedia entry for the municipality; the Indian-origin rates come from a Statistics Netherlands release dated to 1 January 2024. The rise of 7,623 people and the figure of 31 percent are this page subtracting and dividing two published counts, and are labelled as arithmetic where they appear.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a jar nobody can open to a report that codes its own gaps',
    intro: 'The rung a learner starts on is fixed in the free hour by what they can already do, and never by which of the two woonplaatsen the address is in.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Is it empty or can you just not see?', p: 'Children find out how many ways there are of not knowing something.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Four kinds of blank', p: 'Learners give each kind of missing thing its own code and stop treating them alike.', courses: ['python-ai-kids-masterclass', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 14 to 18', h3: 'Summaries that refuse to guess', p: 'Teenagers write code that will not average across absences and says how many it skipped.', courses: ['frontend-development-masterclass-for-teens', 'mysql-mastery-for-teens'] },
      { band: 'Ages 18 to 67', h3: 'NULL means what, exactly?', p: 'Adults take the blanks in a real database and work out which layer each one came from.', courses: ['mysql-database-complete-masterclass-college', 'ai-ml-masterclass-complete-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI reading that page will report no population history for Uithoorn. Why should a child here learn to check?',
    intro: 'Because the history is complete, and what the model actually read was a sentence about graph software.',
    p1: 'A tool asked to summarise the entry meets a paragraph explaining that a chart cannot currently be displayed. It has three reasonable options: mention the technical note, say nothing about population history, or state that none is available. The last of those is the one that reads best and it is the one most likely to come out, because a summary is supposed to be about the town rather than about the wiki software. Nothing in the process is broken. The output is simply a statement about a rendering, dressed as a statement about a place.',
    p2: 'So the learner practises the check that costs a minute: when something is absent, ask which layer it went missing in and try a second route before writing it down. Here the second route is the national statistics page, and it hands over 24,581 for 1995 without argument. That reflex is what makes somebody useful with data at any age. A twelve-year-old in De Kwakel who has caught a broken chart pretending to be a fact will be the person at twenty-six who asks whether the dashboard is empty or merely not loading. Tools will keep summarising whatever is in front of them. Noticing what is not in front of them stays a person\'s job.',
    closer: 'The case for a child in Uithoorn learning to code in 2026 is therefore not about wiki software at all. It is that most of the wrong conclusions adults reach from data come from an emptiness they never questioned, that three different layers can each produce that emptiness, and that a small town with a full population history and a broken chart is the neatest demonstration of the difference anywhere in this series.',
    blogAnchor: 'whether writing code is still worth a child\'s time in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for a town of nineteen square kilometres',
    intro: 'Nothing in Uithoorn is far from anything. What is far is a group at the right level for a specific child, and no amount of local geography fixes that.',
    cells: [
      { h3: 'The class arrives at the table', p: 'One repeating hour a week at home, whether that home is in De Kwakel or three streets from the Amstel, with no journey attached to it at either end.' },
      { h3: 'English throughout, Dutch school words kept', p: 'All teaching is in English, which suits a town with this many international families. Groep, havo, vwo and profielkeuze stay Dutch, because a child recognises those from their own timetable.' },
      { h3: 'What the free hour delivers', p: 'A level the learner has demonstrated, a named course that follows from it, and a weekly time. Nobody is asked for payment details during it.' },
      { h3: 'Grouped by stage, from anywhere', p: 'Groups are five to ten learners at the same level, drawn from across the world rather than from one town of 32,204, which is the only way a specific level fills up at all.' },
      { h3: 'Twice weekly, regio Noord holidays', p: 'Two lessons a week in a fixed slot, normally eight in a month. Noord-Holland takes its school holidays with regio Noord, and weeks away are written into the plan before it begins.' },
      { h3: 'The teacher is in India', p: 'Three and a half hours ahead in Dutch summer time and four and a half in winter, since only the Dutch clock moves. For families here with their own connection to India, that offset is already familiar.' }
    ],
    spec: { title: 'The second highest Indian-origin share of any municipality in the country', p: 'Statistics Netherlands recorded 49.6 residents of Indian origin per thousand in Uithoorn on 1 January 2024, second only to neighbouring Amstelveen at 68.3. Classes here are taught in English by teachers in India, on Indian time, to a syllabus that runs from age 6 to age 67, and for a good number of families in this town none of that needs explaining. The rate is quoted as published and is deliberately not turned into a number of people, since it belongs to a different year from the population figures on this page.' }
  },

  fees: {
    h2: 'The fee, in dollars, the same in both woonplaatsen',
    intro: 'Put in writing here rather than held back for a call.',
    first: 'A complete lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'One international rate exists and it is quoted in dollars, with no euro edition, so De Kwakel and Uithoorn see the identical figure. Nothing is charged until the free lesson has fixed a course and an hour, and payment is then arranged over WhatsApp. Pausing, changing plan and missing a week are all described on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, printed exactly as the people who left them wrote them',

  book: {
    h2: 'Tell us the level, not the woonplaats',
    intro: 'The first task might be a jar with a lid nobody can open, a dataset with four kinds of blank in it, or a report at work with a gap that three colleagues explain three different ways.',
    success: 'Thank you. Your Uithoorn class request has been sent.'
  },

  faq: {
    h2: 'Uithoorn coding class questions',
    intro: 'The town, its two woonplaatsen, its missing graph, the teaching and the terms.',
    items: [
      { q: 'Why does this page make so much of a chart that will not load?', a: 'Because it is the clearest small example of a large mistake. The municipal entry prints a note saying a security problem with the graph software prevents the chart being displayed, and a reader who stops there concludes Uithoorn has no population history. It has one, and the national statistics page gives 24,581 residents in 1995 against 32,204 in 2026. The absence was in the display, not in the record and not in the town, and telling those three apart is the project on this page.' },
      { q: 'How many people live in Uithoorn and how many in De Kwakel?', a: 'The municipality holds 32,204 residents according to the national count for 1 January 2026, and its own entry gives 32,215 for the same date while citing the same office. Neither source publishes a separate population for the town of Uithoorn or for De Kwakel, so this page gives neither and does not estimate a split.' },
      { q: 'Is it true that Uithoorn has one of the largest Indian communities in the Netherlands?', a: 'Statistics Netherlands recorded 49.6 residents of Indian origin per thousand in Uithoorn on 1 January 2024, the second highest municipal share in the country behind Amstelveen at 68.3. That is a rate from 2024, and the population figures elsewhere on this page are from 2026, so no number of people is calculated from it here.' },
      { q: 'Is the class taught in Dutch or in an Indian language?', a: 'In English, from beginning to end. Dutch school vocabulary is kept exactly as a Dutch school writes it, so groep, havo, vwo and profielkeuze are used rather than translated. There is no Dutch-language version and no Hindi or Tamil version of any course.' },
      { q: 'What hours work for a family in Uithoorn?', a: 'The teacher is three and a half hours ahead during Dutch summer time and four and a half in winter, because the Indian clock does not change. The practical window runs from the end of the school day to mid-evening, with both weekend days open, and one repeating slot is agreed at the free lesson and then kept.' },
      { q: 'The town has good schools. Why would we look outside them?', a: 'Nine primary and three secondary establishments serve 32,204 people perfectly well for a general education. What a town this size cannot assemble is a group of five to ten learners at one specific level in one specific subject, which is a matter of arithmetic rather than of quality. Groups here are formed across the world by ability, which is the only way that particular problem gets solved.' },
      { q: 'What happens in the free lesson?', a: 'The teacher finds where the learner\'s ability currently stops by watching them work, then sets a single task just past it. A young child might argue about whether a jar is empty or merely closed. A teenager writes a summary function that refuses to average across missing values and reports how many it skipped. An adult brings a real report with a gap in it. It ends with a course, a rung, a weekly hour and a dollar price, and nothing has been charged.' },
      { q: 'Is there a Modern Age Coders classroom in Uithoorn?', a: 'No, and none is claimed in Uithoorn, in De Kwakel or anywhere else in the Netherlands. Every lesson is live and online, requiring a laptop or desktop, working audio, a current browser and a connection that stays up. The telephone number on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Uithoorn coding classes cost?', a: 'The first lesson is free. After that, group tuition is USD 100 a month for two live lessons a week, normally eight in a month, in a group of five to ten. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all settled before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or address. One-to-one means one learner with one teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the Netherlands',
    h2: 'North up the tram line, out to the province, and up to the country',
    html: 'Twenty minutes north on the same tram is <a class="cg-inline-link" href="/coding-classes-in-amstelveen">Amstelveen</a>, the municipality with the highest Indian-origin share in the country, and beyond it <a class="cg-inline-link" href="/coding-classes-in-amsterdam">Amsterdam</a>. West across the polder lies <a class="cg-inline-link" href="/coding-classes-in-haarlemmermeer">Haarlemmermeer</a> with the airport in it, and all of them sit inside <a class="cg-inline-link" href="/coding-classes-in-noord-holland">Noord-Holland</a>. The whole series descends from the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>, and a learner who wants trained models rather than running programs should begin at <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> or the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>.',
    waLabel: 'Carry on in WhatsApp'
  },

  footerHeading: 'The Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' },
    { href: '/coding-classes-in-noord-holland', label: 'Noord-Holland' },
    { href: '/coding-classes-in-amstelveen', label: 'Amstelveen' }
  ],

  personalityCss: `
.cg-root.cg-uit .cg-hero-grid { align-items: end; gap: clamp(1.4rem, 3.2vw, 2.6rem); }
.cg-root.cg-uit .cg-hero h1 { font-weight: 500; letter-spacing: -0.009em; line-height: 1.14; }
.cg-root.cg-uit .cg-capsule { border-left-width: 3px; border-left-style: solid; border-top: 1px solid var(--cg-accent-soft); padding-left: 1.25rem; padding-top: 0.9rem; }
.cg-root.cg-uit .cg-eyebrow { letter-spacing: 0.17em; font-weight: 600; }
.cg-root.cg-uit .cg-section-head h2 { max-width: 32ch; }
.cg-root.cg-uit .cg-grid-3 { gap: clamp(1.2rem, 2.5vw, 1.9rem); }
.cg-root.cg-uit .cg-card { border-radius: 6px; }
.cg-root.cg-uit .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-uit .cg-ladder-col h3 { letter-spacing: -0.003em; }
.cg-root.cg-uit .cg-callout { border-left-width: 4px; border-left-style: dashed; }
`,

  dossier: {
    curriculumAuthority: 'Town and municipality of Uithoorn, Noord-Holland: 32,204 residents (CBS 2026) on 19.42 km2 of the Amstel valley at a published density of 1,772; 14,077 households averaging 2.26 with 4,805 single-person, 34 percent, low for the country; 5,443 residents under fifteen, 17 percent, a young structure; 9 primary establishments (2,843 pupils) and 3 secondary (2,385), with no published count of students at institutions here; 2 woonplaatsen, and 11 wijken to 11 buurten, so the two zone levels are one-to-one and neither supports a fine-grained claim; 49.6 residents of Indian origin per thousand on 1 January 2024, second in the country behind Amstelveen at 68.3; the Amsteltram reached Uithoorn Centrum on 21 July 2024; regio Noord holidays. The town page argues from the layer an absence lives in; Amstelveen owns stock versus flow and the Indian-migration cohort argument, Tilburg owns the modifiable areal unit problem and Westland owns the structural zero.',
    localProject: 'Ask which layer the absence is in: the world, the record, or the view. The municipal entry for Uithoorn prints, where its population history should be, the sentence vanwege een beveiligingsprobleem met de MediaWiki Graph-software is het momenteel niet mogelijk deze grafiek weer te geven. Nothing is missing from the world or from the record: the national statistics page gives 24,581 residents in 1995 against 32,204 in 2026, a gain of 7,623 or 31 percent. Only the drawing failed, and because the failure is written as prose it reads to a summariser as content, so an error message becomes a claim that the town has no history. The same two pages carry three further kinds of nothing that must not be treated alike: no published population for either woonplaats, no students-at-institutions figure at all, and an Indian-origin rate from 2024 that cannot be multiplied by a 2026 population. Distinct from null-is-not-zero (Ash Sharqiyah South) and from the failed-lookup default (Jerudong), where the record itself is at fault, and from the structural zero (Westland), where a real zero is correctly recorded and wrongly ranked: here the record is complete and correct and only the presentation layer failed. Every absence on the page is left as an absence.',
    requiredMentions: [
      '32,204',
      '14,077',
      '4,805',
      '24,581',
      '2,843',
      '2,385',
      '5,443',
      '8,882',
      '7,623',
      '1,772',
      'De Kwakel',
      'Heiliegers',
      'Thamen',
      'MediaWiki'
    ],
    sources: [
      { claim: 'Uithoorn 32,204 residents in 2026 (CBS); 14,077 households averaging 2.26, described as 2.3 in the accompanying prose, 4,805 single-person (34 percent); 5,443 aged 0 to 15; 3,657 aged 15 to 25; 8,060 aged 25 to 45; 8,882 aged 45 to 65; 6,162 aged 65 and over; total area 1,942 ha, land 1,812 ha; density 1,772; 9 primary establishments (2,843 pupils) and 3 secondary (2,385); HBO 670 and WO 370; no figure published for students at institutions in the municipality; 2 woonplaatsen, 11 wijken and 11 buurten; 24,581 residents in 1995, a rise of 7,623.', url: 'https://allecijfers.nl/gemeente/uithoorn/' },
      { claim: 'De gemeente Uithoorn telt 32.215 inwoners (1 januari 2026, bron: CBS); oppervlakte 19,49 km2 waarvan 1,20 km2 water; burgemeester Pieter Heiliegers (VVD); woonplaatsen Uithoorn and De Kwakel, with no population given for either; aangrenzende gemeenten Aalsmeer, Amstelveen, Kaag en Braassem, Nieuwkoop, De Ronde Venen; op 1 oktober 1819 ging Uithoorn weer deel uitmaken van de provincie Noord-Holland en op 10 februari 1820 werd Thamen weer geannexeerd; op 21 juli 2024 werd de Amsteltram doorgetrokken van Amstelveen Westwijk tot Uithoorn Centrum; the population history graph is replaced by the note vanwege een beveiligingsprobleem met de MediaWiki Graph-software is het momenteel niet mogelijk deze grafiek weer te geven.', url: 'https://nl.wikipedia.org/wiki/Uithoorn' },
      { claim: 'Amstelveen 68.3 and Uithoorn 49.6 residents of Indian origin per thousand on 1 January 2024, the two highest municipal shares in the Netherlands.', url: 'https://www.cbs.nl/en-gb/news/2025/10/migrants-from-india-are-staying-longer-in-the-netherlands' },
      { claim: 'School holiday regions: regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'Any population for the town of Uithoorn or for De Kwakel separately. Neither source publishes one and no split is estimated.',
      'A count of residents of Indian origin. The published rate is dated 1 January 2024 and the population figures here are 2026, so the rate is quoted and never multiplied.',
      'A zero for students at institutions in the municipality. The national page shows no figure and the page records that as absent rather than as nought.',
      'Any buurt-level claim treated as finer than a wijk-level one. There are 11 of each, so the two levels carry the same information, and what per-zone statistics do to an analysis belongs to the Tilburg page.',
      'A single household size. The source table gives 2.26 and its own prose gives 2.3, and both are printed.',
      'A single area or population figure. The national and municipal sources differ on both and all four numbers are kept.',
      'Any account of the boundary changes implied by the word weer in the 1819 and 1820 sentences. Those earlier changes were not read.',
      'Anything the Amstelveen or Noord-Holland pages own.'
    ]
  }
};
