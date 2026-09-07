'use strict';
// Westland: ten villages under 2,497 hectares of glass, and a statistics page
// that records zero students in higher education because there is nowhere here
// to study. Spine: a zero produced by the absence of a category is not a
// measurement of the thing the column is named after.

module.exports = {
  slug: 'coding-classes-in-westland',
  code: 'wst',
  accent: '#55396D',
  accentRationale: 'Westland: a cool aubergine for the glasshouse country at dusk, placed by the solver clear of Breda\'s Nassau violet and Utrecht province\'s plum',
  pageType: 'city',
  place: {
    name: 'Westland',
    eyebrow: 'Westland, Zuid-Holland',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Zuid-Holland' },
      { type: 'Country', name: 'Netherlands' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Westland, Netherlands',
  title: 'Coding Classes in Westland | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in Westland for ages 6 to 67, in Naaldwijk, s-Gravenzande, Monster, Wateringen and De Lier. First lesson free.',
  ogDescription: 'Live online coding, Python, AI and mathematics for families across the ten villages of Westland, built on a zero that means there is nowhere to study rather than nobody studying.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'data-and-ai-analytics-for-non-programmers-course',
  verifiedOn: '8 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Westland Learners',
    description: 'Ability-placed online coding, Python, AI and mathematics for children, teenagers and adults across Naaldwijk, s-Gravenzande, Monster, Wateringen, De Lier and the other villages of Westland, taught in English.'
  },

  h1: 'Coding classes in Westland, where the statistics say zero students and 3,330 people are studying',
  capsuleQ: 'What are the best coding classes in Westland?',
  capsule: 'Coding classes in Westland serve 118,874 people (Statistics Netherlands, 1 January 2026) across ten villages under about 2,497 hectares of glass, which is roughly 31 percent of the municipality\'s land. The national statistics page records zero students in higher education here, and it is right: there are no higher-education institutions in the municipality at all. It also records 2,530 residents in applied higher education and 800 at university level, all of whom travel. A zero can mean nothing exists to count. Modern Age Coders teaches live online in English to all ten villages, ages 6 to 67, free first lesson, then USD 100 monthly in a group of five to ten or USD 150 one to one.',
  lead: 'Sort every Dutch municipality by students in higher education and Westland comes last with nothing. Read that as a fact about its people and you have it exactly backwards: 3,330 residents are registered in higher education, and every one of them travels, because the municipality contains no institution for the column to count. The zero is correct and it is not about the population at all. It is about which places have universities, which is a different question with a different answer.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Westland.',

  picks: {
    eyebrow: 'Course picks for Westland',
    h2: 'Four courses for ten villages that grow most of the country\'s tomatoes',
    intro: 'A groep 5 child in De Lier, a teenager in Naaldwijk who wants to write the software the greenhouses run on, an adult in Monster retraining out of the sheds, and a parent in Wateringen whose grower dashboards are full of zeros that mean four different things: four doors under one roof of glass.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Typed Python, turtle drawings and a first program that learns a rule, in English, for the groep 5 to 8 child in Poeldijk or Kwintsheul.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'Scripting, scraping and automation, for the adult whose working week around the glass is a stack of tasks a program could finish.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Excel, Sheets and Power BI with AI, for the grower or planner whose sensor tables are full of zeros that need interpreting.' },
      { course: 'complete-app-development-masterclass-for-teens', band: 'Ages 13 to 18', note: 'From an idea to an app on a real device, for the teenager who would rather build the tool than fill in the form it produces.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Westland today',
      h2: 'Ten villages, no city, and a third of the land under glass',
      intro: 'The national register held 118,874 people on 1 January 2026, in 50,556 households averaging 2.28 people, on 80.76 square kilometres of land inside 90.74 of territory: a published 1,448 residents to the square kilometre. In 1995 the count was 92,570, so Westland has gained 26,304 people in thirty-one years, a rise of 28 percent.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'A family municipality', p: '19,263 residents are under fifteen, 16 percent, and 13,916 are between fifteen and twenty-five; 29,830 are between twenty-five and forty-five, 31,284 between forty-five and sixty-five, and 24,581 are sixty-five or over. Only 17,031 households hold one person, 34 percent, among the lowest in this series.' },
          { h3: 'Forty primary schools, nine secondary', p: '40 primary establishments teach 10,988 pupils and 9 secondary establishments teach 6,211. Ten separate villages need primary schools in most of them, and the secondary provision concentrates into a handful of buildings that most teenagers reach by bicycle or bus.' },
          { h3: 'Glass, counted', p: 'In 2023 the Westland still had about 2,497 hectares under glass, against a national total of 10,151 hectares in the same year. That is close to a quarter of the country\'s glasshouse area, and about 31 percent of this municipality\'s own 8,076 hectares of land. The area under glass in the Netherlands fell by nearly 500 hectares in that year.' }
        ] },
        { kind: 'spec', title: 'A municipality assembled in 2004', p: 'Westland was formed on 1 January 2004 from five municipalities: De Lier, s-Gravenzande including Heenweg, Monster with Poeldijk and Ter Heijde, Naaldwijk with Honselersdijk and Maasdijk, and Wateringen including Kwintsheul. There is no city here and no place called Westland; the name is the region\'s and the municipality took it.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Where the learners are',
      h2: 'Ten places, none of them dominant',
      intro: 'The statistics office counts 10 woonplaatsen, 11 wijken and 78 buurten. Unusually for a municipality of this size, no single place holds even a quarter of the population.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 's-Gravenzande, 23,470 in 2023', p: 'The largest of the ten, on the coast behind the dunes, with its own centre and its own secondary provision.' },
          { h3: 'Naaldwijk, 22,720 in 2023', p: 'The administrative seat, where the municipal offices and much of the trade sit, and the closest thing to a centre that a municipality without a city has.' },
          { h3: 'Wateringen, 16,335 in 2023', p: 'East towards The Hague, the village most affected by the city next door and the one whose commuters make the shortest journey.' },
          { h3: 'Monster, 14,410, and Ter Heijde, 740', p: 'On the coast in 2023, one a substantial village and the other the smallest place in the municipality, a strip of houses behind the sea wall.' },
          { h3: 'De Lier, 12,830, and Maasdijk, 4,570', p: 'South and south-east in 2023, towards the Nieuwe Waterweg, with their own schools and their own identities from before 2004.' },
          { h3: 'Honselersdijk 7,790, Poeldijk 7,615, Kwintsheul 4,405', p: 'The inland villages in 2023, surrounded by glass on most sides. A child in any of them is in the same group at the same hour as a child in s-Gravenzande.' }
        ] },
        { kind: 'p', text: 'All ten villages get the same class at the same hour and the same fee, and what a learner can already do decides which group they join.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Every figure and its source, and the zero explained',
      intro: 'The national count, the municipal entry, the merger, and the two glasshouse figures.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The municipal count', p: 'Statistics Netherlands, 1 January 2026: 118,874 residents; 50,556 households for 2025 averaging 2.28 people, 17,031 of them single-person, 34 percent; 19,263 under fifteen; 13,916 aged fifteen to twenty-five; 29,830 aged twenty-five to forty-five; 31,284 aged forty-five to sixty-five; 24,581 aged sixty-five and over; 40 primary establishments with 10,988 pupils and 9 secondary with 6,211; total area 9,074 hectares, land 8,076; density 1,448; 10 woonplaatsen, 11 wijken and 78 buurten; 92,570 residents in 1995, a rise of 26,304.' },
          { h3: 'The zero, and what sits beside it', p: 'The same page records zero students in higher education for the municipality and, in the neighbouring field, zero higher-education programmes. It separately records 2,530 residents in applied higher education and 800 at university level. The two kinds of figure count different things: one counts institutions here, the other counts people living here.' },
          { h3: 'The municipality, described', p: 'Its own entry: 118,795 residents on 1 January 2026, 79 fewer than the national figure for the same date, both kept; 90.74 square kilometres, 81.27 of land and 9.47 of water, against 80.76 of land nationally, both kept; a density of 1,462 against the national source\'s 1,448, both kept; mayor Bouke Arends.' },
          { h3: 'The merger', p: 'The same entry: Westland was formed from the municipalities of De Lier, s-Gravenzande including Heenweg, Monster with the villages Poeldijk and Ter Heijde, Naaldwijk with Honselersdijk and Maasdijk, and Wateringen including Kwintsheul. The merger took effect on 1 January 2004.' },
          { h3: 'The villages, 2023', p: 's-Gravenzande 23,470; Naaldwijk 22,720; Wateringen 16,335; Monster 14,410; De Lier 12,830; Honselersdijk 7,790; Poeldijk 7,615; Maasdijk 4,570; Kwintsheul 4,405; Ter Heijde 740. Those ten total 114,885, on a date three years earlier than the municipal figure, and no residual is computed from that difference here.' },
          { h3: 'The glass', p: 'A trade report for 2023: about 2,497 hectares of glasshouse horticulture remained in the Westland, and the total glasshouse area in the Netherlands was 10,151 hectares in the same year, having fallen by nearly 500 hectares. A separate entry describes the Westland as holding the greatest concentration of glasshouse horticulture in the world; this page quotes that description without treating it as a measurement.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection to the municipality, any grower or any school named here and claims none. The share of the national glasshouse area is this page dividing two figures published together for the same year.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Zero students: build the check that asks which kind of zero it is',
      intro: 'One number, four possible meanings, and a ranking that puts a municipality last for a reason that has nothing to do with its people.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Sort the country and look at the bottom', p: 'Rank municipalities by students in higher education and Westland sits at the bottom with nothing at all. Read as a statement about education in the municipality it is devastating, and it is not a statement about that. The neighbouring column already explains it: there are zero programmes here, so there is nothing for the first column to count.' },
          { h3: '2. Enumerate what a zero can mean', p: 'The learner writes down the possibilities. Nothing was observed, though the thing could exist here. The category does not apply, because no institution exists. The value is unknown and somebody typed nought. Or the value is a true measured absence. Four meanings, one glyph, and only the second one fits Westland.' },
          { h3: '3. Encode the difference', p: 'Then the fix: separate the fields. Record whether the category applies before recording the count, and make any ranking exclude the rows where it does not. The same table already holds the answer in the programmes column, which is why the check is cheap: the data needed to interpret the zero was published right beside it.' }
        ] },
        { kind: 'table', caption: 'One zero, four readings, and what the record actually supports', head: ['Reading of the zero', 'What it would mean', 'Does the record support it?', 'Consequence if assumed'], rows: [
          ['Nobody here studies', 'the population is not in higher education', 'no: 2,530 and 800 residents are enrolled', 'a false conclusion about 3,330 people'],
          ['No institution here to count', 'the category does not apply', 'yes: the programmes field is also zero', 'the correct reading'],
          ['The figure is unknown', 'somebody entered nought for a blank', 'no evidence either way in the source', 'unnecessary doubt'],
          ['A measured absence', 'institutions exist but enrolled nobody', 'no: there are no programmes', 'an absurdity']
        ] },
        { kind: 'callout', h3: 'Ask whether the category applies before you read the count', p: 'Zero is the most overloaded value in any dataset. It stands in for nothing observed, nothing applicable, nothing recorded and nothing at all, and the four are routinely mixed inside one column because they all print the same way. Rankings make this worse, because a zero always sorts to one end and looks like an extreme rather than an exclusion, and the place that should have been left out of the comparison ends up characterised by it. The habit worth building is to check, for every zero that matters, whether the thing being counted could exist in that row at all, and to keep that answer in its own field rather than in somebody\'s head. Here the answer was published in the very next column. The four readings above are tested against the figures in the evidence for this page, and only one of them survives.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for a column full of zeros',
      intro: 'Sales in a region with no shops, complaints about a product not sold there, sick days for a contractor, downtime for a service not yet launched: the zero is real and the ranking built on it is not. Practised on a municipality with no university.',
      body: [
        { kind: 'table', caption: 'When zero might not mean none', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Ask if it applies', 'Check whether the counted thing could exist in that row', 'A structural zero read as poor performance', 'The right rows in the comparison'],
          ['Store applicability', 'Keep a separate field for whether the category applies', 'Four meanings sharing one glyph', 'A dataset that explains itself'],
          ['Exclude, do not rank', 'Leave inapplicable rows out of a league table rather than sorting them last', 'A place characterised by an exclusion', 'Rankings among comparable things'],
          ['Look at the neighbours', 'Read the adjacent columns before interpreting a count', 'A question answered without the answer beside it', 'Interpretation for free'],
          ['Say which zero it is', 'Write the meaning into the report, not just the number', 'A reader repeating your mistake', 'A figure that travels safely']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A tally of how many goals each child scored in a match, and one child who was not playing. Their nought looks the same as the nought of a child who played and missed. The class invents a way to tell them apart, which is the whole idea and takes about ten minutes.' },
          { h3: 'For teenagers', p: 'The municipal table in Python with two columns, count and applicable, a ranking function that filters on the second before sorting on the first, and a printed comparison of the ranking with and without the filter. The stretch: how many other rows in a real dataset are structural zeros?' },
          { h3: 'For adults', p: 'The same audit on a dashboard at work: a metric that shows zero for a region, a product or a period where the thing simply does not exist. Adults very often find a target being missed by a team that was never in a position to hit it.' }
        ] },
        { kind: 'p', text: 'The population, household, area, school and student figures come from the offices and entries named beside them, including the two zero fields. The glasshouse share of about a quarter is this page dividing two figures published for the same year in the same report, and the 31 percent is that year\'s Westland glass area against the municipality\'s published land area.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a child who was not playing to a ranking that filters before it sorts',
    intro: 'The starting rung comes out of the free hour, and which village a learner lives in is not part of it.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Two kinds of nought', p: 'Children separate not playing from played and missed, and invent a way to record it.', courses: ['kids-coding-blocks-masterclass', 'python-ai-kids-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Counts and conditions', p: 'Learners add an applicability column and see how a table changes.', courses: ['maths-through-coding', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 14 to 18', h3: 'Filter, then rank', p: 'Teenagers build a ranking that excludes inapplicable rows and compare it with the naive one.', courses: ['complete-app-development-masterclass-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Structural zeros at work', p: 'Adults audit a dashboard for a metric reported against something that does not exist.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will report zero students in Westland. Why should a child here learn to read the next column?',
    intro: 'Because the number is right, the ranking built on it is wrong, and the correction is sitting immediately beside it.',
    p1: 'Ask a tool how many students there are in Westland and zero is a defensible answer, because that is what the field says. Ask it to rank municipalities on the figure and Westland goes last, which reads as a judgement on the place. What the tool has no reason to do is look one column across, notice that the number of higher-education programmes is also zero, and conclude that the first zero is a fact about institutions rather than about people. Interpretation lives in the relationships between columns, and columns arrive one at a time.',
    p2: 'So the learner builds the ranking twice, once naively and once with an applicability filter, and sees a municipality move from last place to out of the comparison altogether. It is a few lines of code carrying a large idea, and the idea generalises immediately to every dashboard with a region, a product line or a period that did not exist yet. A twelve-year-old in Poeldijk who has done this will ask, at twenty-two, whether a team could have hit the target at all before reporting that they missed it. Tools will keep reading the column you point at. Deciding whether that column applies is the part left over.',
    closer: 'The case for a Westland child learning to code in 2026 is therefore not about horticulture. It is that a zero is the most ambiguous value in any table, that rankings turn ambiguity into judgement, and that the cheapest possible demonstration is a municipality that appears last in a league table for the excellent reason that it should never have been in it.',
    blogAnchor: 'the argument for a child writing code in an age of AI'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for ten villages and no city',
    intro: 'Ter Heijde has 740 residents and s-Gravenzande has 23,470, and there is no centre for either to travel to. Whatever a family wants after school, it is somewhere else.',
    cells: [
      { h3: 'Nothing to drive to, because there is no centre', p: 'The lesson happens at the kitchen table in Kwintsheul, Maasdijk or Naaldwijk at one fixed hour a week, all year round.' },
      { h3: 'Taught in English, with four Dutch exceptions', p: 'The working language is English from beginning to end. Groep, havo, vwo and profielkeuze are the four terms left untouched, on the grounds that a learner meets them in that form and nowhere else.' },
      { h3: 'The hour that costs nothing decides everything', p: 'Out of it come a demonstrated level, a named course and a time each week. Setting all three in place needs no payment details from anyone.' },
      { h3: 'Grouped on ability alone', p: 'A learner in De Lier and a learner in Monster share a group when they are at the same stage, and go into different ones when they are not.' },
      { h3: 'Twice weekly, on the middle calendar', p: 'Two lessons a week at one repeating slot, eight in most months. Westland takes its holidays with regio Midden along with the rest of Zuid-Holland, and weeks away are written in before the slot is set.' },
      { h3: 'Three and a half hours apart, or four and a half', p: 'The Netherlands adjusts twice a year and India does not, so the season decides the size of the gap. Whichever it is, the hours between the school bell and bedtime overlap, and so does the whole of Saturday and Sunday.' }
    ],
    spec: { title: 'A municipality with nowhere to study after school', p: 'The statistics record zero higher-education programmes here, and 3,330 residents registered in higher education somewhere else. Whatever a family in this municipality wants beyond secondary school involves a journey, which is exactly the cost a live online class does not impose.' }
  },

  fees: {
    h2: 'The fee, in dollars, in all ten villages',
    intro: 'On the page rather than kept for a phone call.',
    first: 'A complete lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'Everywhere outside India is quoted the same dollar figure and there is no euro list at all, which is why Ter Heijde and s-Gravenzande pay identically. The order is fixed: free lesson first, course and time second, payment third, and that payment is handled over WhatsApp. Details of pauses, plan changes and missed weeks sit on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, printed as their authors typed them',

  book: {
    h2: 'Tell us where the learner is; the village is not needed',
    intro: 'The first task might be a tally with one child who was not playing, a ranking that filters before it sorts, or a dashboard at work reporting zero against something that does not exist.',
    success: 'Thank you. Your Westland class request has been sent.'
  },

  faq: {
    h2: 'Westland coding class questions',
    intro: 'The municipality, its villages, its statistics, the teaching and the terms.',
    items: [
      { q: 'Why does this page say zero students and 3,330 people studying?', a: 'Because both are true and they count different things. The national statistics page records zero students in higher education for this municipality and, beside it, zero higher-education programmes: there is nothing here to study at. The same page separately records 2,530 residents in applied higher education and 800 at university level, all of whom travel. Working out which kind of zero you are looking at is the project on this page.' },
      { q: 'Which villages does the class reach?', a: 'All ten: s-Gravenzande, Naaldwijk, Wateringen, Monster, De Lier, Honselersdijk, Poeldijk, Maasdijk, Kwintsheul and Ter Heijde. The fee and the hour are identical in every one, and no village has a coding club of its own.' },
      { q: 'Is there really no city in Westland?', a: 'There is no place called Westland at all. The municipality was formed on 1 January 2004 from five older municipalities and took the name of the region. No single village holds even a quarter of the 118,874 residents, which is unusual for a municipality of this size.' },
      { q: 'How much of Westland is under glass?', a: 'A trade report for 2023 gives about 2,497 hectares of glasshouse horticulture in the Westland, which is roughly 31 percent of the municipality\'s 8,076 hectares of land, and close to a quarter of the 10,151 hectares of glasshouse in the whole country that year. That share is this page dividing two figures published together, not a figure either source states.' },
      { q: 'Is any of this taught in Dutch?', a: 'No. All teaching happens in English. School vocabulary is the exception and stays Dutch, so a teacher says groep, havo, vwo or profielkeuze rather than translating. No Dutch edition of the course exists.' },
      { q: 'What time are classes for a family in Westland?', a: 'The offset is three and a half hours from late March and four and a half from late October, because only one of the two countries changes its clocks. In practice that leaves the late afternoon and the early evening on weekdays and all of Saturday and Sunday. A single weekly time is chosen at the free lesson and then left alone.' },
      { q: 'What is in the free lesson?', a: 'The teacher locates the ceiling of what the learner manages now and puts one task immediately above it. For a child that may be a tally that has to tell a nought apart from an absence. A teenager writes a ranking that filters before it sorts. An adult arrives with a dashboard from work. The hour closes with a named course, a starting rung, a weekly time and a dollar price, none of which has been paid for.' },
      { q: 'Is there a Modern Age Coders classroom in Westland?', a: 'No, and none is claimed in Naaldwijk, in s-Gravenzande or anywhere in the Netherlands. Lessons are live online and need a laptop or desktop, working audio, a current browser and a stable connection. The telephone number on this page is Indian and is described as such.', boiler: true },
      { q: 'What do Westland coding classes cost?', a: 'The first lesson is free. Group tuition is USD 100 a month for two live lessons a week, normally eight in the month, in a group of five to ten. Private tuition is USD 150 a month, one learner with one teacher at the same frequency. Course, format, recurring time and availability are confirmed before payment.', boiler: true },
      { q: 'How many learners are in a Westland group?', a: 'Between five and ten, matched on level, pace and goal rather than on age, school or village. Private tuition is one learner and one teacher. If no group at the right level is running, the family can take private tuition or wait for the next one to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the Netherlands',
    h2: 'East to the ministries, out to the province, and up to the country',
    html: 'East of the glass is <a class="cg-inline-link" href="/coding-classes-in-the-hague">The Hague</a>, where a good many of this municipality\'s commuters go, and Westland sits in <a class="cg-inline-link" href="/coding-classes-in-zuid-holland">Zuid-Holland</a>, whose page is about a region nobody drew a boundary for. Sitting at the head of it all is the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>, with <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> and the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a> for anyone after trained models rather than running programs.',
    waLabel: 'Close with WhatsApp'
  },

  footerHeading: 'The Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' },
    { href: '/coding-classes-in-zuid-holland', label: 'Zuid-Holland' },
    { href: '/coding-classes-in-the-hague', label: 'The Hague' }
  ],

  personalityCss: `
.cg-root.cg-wst .cg-hero-grid { align-items: start; gap: clamp(1.85rem, 4.3vw, 3.35rem); }
.cg-root.cg-wst .cg-hero h1 { font-weight: 500; letter-spacing: -0.0085em; line-height: 1.12; }
.cg-root.cg-wst .cg-capsule { border-left-width: 4px; border-left-style: dashed; padding-left: 1.55rem; }
.cg-root.cg-wst .cg-eyebrow { letter-spacing: 0.14em; font-weight: 600; }
.cg-root.cg-wst .cg-section-head h2 { max-width: 33ch; }
.cg-root.cg-wst .cg-grid-3 { gap: clamp(1.25rem, 2.55vw, 2rem); }
.cg-root.cg-wst .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 1.2rem; }
.cg-root.cg-wst .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wst .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'Municipality of Westland, Zuid-Holland: 118,874 residents (CBS 1 January 2026) across ten villages with no city and no place of that name; 40 primary establishments (10,988 pupils) and 9 secondary (6,211); zero higher-education programmes and zero students at institutions, against 2,530 residents in applied higher education and 800 at university level. Formed 1 January 2004 from five municipalities. About 2,497 ha under glass in 2023. Regio Midden holidays with the rest of Zuid-Holland. The city page argues from structural zeros; the province page owns the Randstad boundary question and The Hague owns its own.',
    localProject: 'Ask whether the category applies before you read the count. The national statistics page records zero students in higher education for Westland and, in the adjacent field, zero higher-education programmes, while separately recording 2,530 residents in applied higher education and 800 at university level. The zero is therefore structural, produced by the absence of any institution, and a ranking of municipalities on that column places Westland last for a reason that says nothing about its people. The learner enumerates the four things a zero can mean, tests each against the record, stores applicability in its own field and makes the ranking filter before it sorts. Distinct from the empty-cell trap (Nijmegen, where an unfilled cell would be read as a zero): here the cell is correctly filled with zero and the error runs the other way, reading a true zero as a measurement of a different quantity. The interpreting datum was published in the neighbouring column.',
    requiredMentions: [
      '118,874',
      '50,556',
      '17,031',
      '92,570',
      '10,988',
      '6,211',
      'Naaldwijk',
      'Wateringen',
      'Honselersdijk',
      'Kwintsheul',
      'Ter Heijde',
      'Bouke Arends',
      '2,497',
      '10,151'
    ],
    sources: [
      { claim: 'Westland 118,874 residents on 1 January 2026 (CBS); 50,556 households (2025) averaging 2.28, 17,031 single-person (34 percent); 19,263 aged 0 to 15; 13,916 aged 15 to 25; 29,830 aged 25 to 45; 31,284 aged 45 to 65; 24,581 aged 65 and over; total area 9,074 ha, land 8,076 ha; density 1,448; 40 primary establishments (10,988 pupils) and 9 secondary (6,211); zero students in higher education and zero higher-education programmes in the municipality; 2,530 residents in HBO and 800 in WO; 10 woonplaatsen, 11 wijken and 78 buurten; 92,570 in 1995, a rise of 26,304 (28 percent).', url: 'https://allecijfers.nl/gemeente/westland/' },
      { claim: 'Westland 118,795 residents on 1 January 2026; 90.74 km2 (81.27 land, 9.47 water); density 1,462; mayor Bouke Arends (PvdA); formed from the municipalities of De Lier, s-Gravenzande including Heenweg, Monster with the kernen Poeldijk and Ter Heijde, Naaldwijk with Honselersdijk and Maasdijk, and Wateringen including Kwintsheul; kernen on 1 January 2023 Naaldwijk 22,720, s-Gravenzande 23,470, Monster 14,410, Wateringen 16,335, De Lier 12,830, Honselersdijk 7,790, Poeldijk 7,615, Maasdijk 4,570, Kwintsheul 4,405, Ter Heijde 740.', url: 'https://nl.wikipedia.org/wiki/Westland_(gemeente)' },
      { claim: 'In 2023 about 2,497 hectares of glasshouse horticulture remained in the Westland, and the total glasshouse area in the Netherlands that year was 10,151 hectares, having fallen by nearly 500 hectares.', url: 'https://www.nieuweoogst.nl/nieuws/2024/04/16/areaal-glastuinbouw-daalt-bijna-500-hectare' },
      { claim: 'The Westland holds the greatest concentration of glasshouse horticulture in the world.', url: 'https://nl.wikipedia.org/wiki/Glastuinbouw' },
      { claim: 'School holiday regions: regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'The date on which the 2004 merger took effect as sourced from the municipal entry. The entry names the five municipalities; the date of 1 January 2004 is stated on the page as the merger date and no other date is claimed.',
      'A share of the national glasshouse area stated by any source. The roughly one quarter is this page dividing 2,497 by 10,151, both published for 2023 in the same report, and it is labelled as derived.',
      'Any treatment of the greatest concentration in the world claim as a measurement. It is quoted as a description and no comparison set, measure or threshold is offered by the source.',
      'A reconciliation of the ten 2023 village populations with the 2026 municipal total. The dates differ and no residual is computed.',
      'Anything the Zuid-Holland page owns: the Randstad boundary question and the provincial totals. Anything The Hague page owns.'
    ]
  }
};
