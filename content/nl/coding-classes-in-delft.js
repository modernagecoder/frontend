'use strict';
// Delft: 110,089 people on 22 square kilometres, a technical university with
// four founding dates, and a painter with between 34 and 37 surviving works.
// Spine: the criterion is agreed and the membership is not, so the count is a
// range that no amount of careful counting will close.

module.exports = {
  slug: 'coding-classes-in-delft',
  code: 'dlf',
  accent: '#80325E',
  accentRationale: 'Delft: a plum tone for the old brick and the pottery glazes, set by the solver apart from Apeldoorn\'s heathland rose and Uithoorn\'s mauve',
  pageType: 'city',
  place: {
    name: 'Delft',
    eyebrow: 'Delft, Zuid-Holland',
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
  routeLabel: 'Delft, Netherlands',
  title: 'Coding Classes in Delft | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in Delft for ages 6 to 67, across all 13 wijken of the technical city. First lesson free, then one flat monthly fee.',
  ogDescription: 'Live online coding, Python, AI and mathematics for families in Delft, built on a count that stays a range because the membership, not the counting, is in doubt.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'complete-typescript-programming-masterclass-college',
  verifiedOn: '8 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Delft Learners',
    description: 'Ability-placed online coding, Python, TypeScript, AI and mathematics for children, teenagers and adults across the wijken of Delft, taught in English.'
  },

  h1: 'Coding classes in Delft, where the number of Vermeers is between 34 and 37 and better counting will not help',
  capsuleQ: 'What are the best coding classes in Delft?',
  capsule: 'Coding classes in Delft serve 110,089 people (Statistics Netherlands, 1 January 2026) on 22.66 square kilometres, the second densest municipality in this series, with 59 percent of households holding one person. Between 34 and 37 paintings are attributed to the city\'s most famous painter, and that spread is not a counting problem: everyone agrees the criterion is that Vermeer painted it, and the disagreement is about individual pictures. Modern Age Coders teaches live online in English across all thirteen wijken, ages 6 to 67, first lesson free, then USD 100 monthly in a group of five to ten or USD 150 one to one.',
  lead: 'How many paintings did Vermeer leave? Between thirty-four and thirty-seven, and the range has nothing to do with anybody miscounting. Every expert applies the same rule, that the picture was painted by Vermeer, and they disagree about two or three specific canvases. No better inventory closes that gap, because the uncertainty lives in the membership rather than in the arithmetic. Any dataset with borderline records has the same shape, and knowing which kind of doubt you are looking at decides whether more effort will help.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Delft.',

  picks: {
    eyebrow: 'Course picks for Delft',
    h2: 'Four courses for the most technical square mile in the country',
    intro: 'A groep 5 child in Tanthof, a teenager in Voorhof aiming at a technical profile, a student whose faculty assumes programming it never taught, and a parent in Wippolder whose customer list has duplicates nobody can settle: four doors into a very small city.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Typed Python, turtle drawings and a first program that learns a rule, in English, for the groep 5 to 8 child anywhere in the city.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Two years from a blank file to real projects, for the teenager who has decided the technical profile is the one.' },
      { course: 'complete-typescript-programming-masterclass-college', band: 'College and adult', note: 'Typed JavaScript, React and Node, for the student who wants the compiler to catch what a marker otherwise will.' },
      { course: 'mysql-database-complete-masterclass-college', band: 'Adults', note: 'Design, keys and matching done properly, for anyone whose records will not deduplicate cleanly.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Delft today',
      h2: 'A hundred and ten thousand people on twenty-two square kilometres',
      intro: 'The national register held 110,089 people on 1 January 2026, in 63,476 households averaging 1.72 people, on 22.66 square kilometres of land inside 24.06 of territory: a published 4,862 residents to the square kilometre, second only to Leiden in this series. In 1995 the count was 92,457, so Delft has gained 17,632 people in thirty-one years, a rise of 19 percent.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Fifty-nine percent of households, one person each', p: '37,324 of the 63,476 households hold exactly one person, the highest share on this site. 22,428 residents are between fifteen and twenty-five, 20 percent, and only 13,158 are under fifteen, 12 percent; 33,594 are between twenty-five and forty-five, 22,376 between forty-five and sixty-five and 18,533 are sixty-five or over.' },
          { h3: 'More secondary pupils than primary', p: '30 primary establishments teach 7,388 pupils and 14 secondary establishments teach 8,233. The municipality counts 29,856 students at institutions here, and separately 2,710 residents in applied higher education and 14,710 at university level. Those two kinds of figure count different things and are never added on this page.' },
          { h3: 'A university with four beginnings', p: 'The Royal Academy was founded on 8 January 1842, the Polytechnic School followed on 20 June 1864, a law of 22 May 1905 made it a Technical High School, and it was renamed a technical university on 1 September 1986. Its own entry gives more than 27,000 students for 2021, with an infobox figure of 27,080.' }
        ] },
        { kind: 'spec', title: 'A tower that leans, a pottery that survived, a painter who did not travel', p: 'Delft received city rights on 15 April 1246 from Willem the Second. The tower of the Oude Kerk is 75 metres and stands 1.96 metres out of true; the church dates from 1246 and the tower was built between 1325 and 1350. Of the pottery works that made the city famous, only ten remained by 1794 and De Porceleyne Fles is still operating. Vermeer was baptised here on 31 October 1632, joined the guild of Saint Luke, the Sint-Lucasgilde, in December 1653 and was buried on 15 December 1675.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Where the learners are',
      h2: 'Thirteen wijken and nowhere further than a bicycle ride',
      intro: 'Delft is a single woonplaats divided into 13 wijken and 91 buurten. The whole municipality fits inside 22.66 square kilometres of land, so distance is never the reason a family cannot get to something.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The old centre', p: 'Inside the canals, with the two churches, the market and the streets Vermeer painted. Small, dense and holding a good share of the 37,324 single-person households.' },
          { h3: 'Wippolder and the campus side', p: 'South-east, where the university buildings and much of the student housing sit. This is where most of the 29,856 counted students actually are during the week.' },
          { h3: 'Voorhof and Buitenhof', p: 'The post-war districts west of the railway, the largest concentration of family housing in the municipality and where the primary schools are fullest.' },
          { h3: 'Tanthof', p: 'The southern expansion of the 1970s and 1980s, planned around its own schools and green space, and the part of the city that feels least like a university town.' },
          { h3: 'Hof van Delft and the north', p: 'The older residential districts towards Rijswijk, with short journeys and a mix of ages closer to the national picture than anywhere else here.' },
          { h3: 'The industrial edges', p: 'The ground along the canal and the motorway where the pottery, the yeast works and the technology firms sat and in places still sit. Even these are inside a municipality a person can cross in twenty minutes.' }
        ] },
        { kind: 'p', text: 'All thirteen wijken get the same class at the same hour and the same fee, and placement follows what a learner can already do.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Every figure and its source, and the range that is not a measurement error',
      intro: 'The national count, the municipal entry, the university, the church, the pottery and the painter.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The municipal count', p: 'Statistics Netherlands: 110,089 residents in 2026; 63,476 households for 2025 averaging 1.72 people, 37,324 of them single-person, 59 percent; 13,158 under fifteen; 22,428 aged fifteen to twenty-five; 33,594 aged twenty-five to forty-five; 22,376 aged forty-five to sixty-five; 18,533 aged sixty-five and over; 30 primary establishments with 7,388 pupils and 14 secondary with 8,233; 29,856 students at institutions here for 2025; 2,710 residents in applied higher education and 14,710 at university level; total area 2,406 hectares, land 2,266; density 4,862; one woonplaats, 13 wijken and 91 buurten; 92,457 residents in 1995, a rise of 17,632.' },
          { h3: 'The municipality, described', p: 'Its own entry: 110,044 residents on 1 January 2026, 45 fewer than the national figure for the same date, both kept; 24.06 square kilometres, 22.65 of land and 1.41 of water, against 22.66 of land nationally, both kept; a density of 4,858 against the national source\'s 4,862, both kept; mayor Alexander Pechtold; city rights on 15 April 1246 from Willem the Second.' },
          { h3: 'The university, four dates', p: 'The Royal Academy founded 8 January 1842; the Polytechnic School 20 June 1864; the Technical High School by a law of 22 May 1905; renamed Technische Universiteit Delft on 1 September 1986. More than 27,000 students in 2021, given as 27,080 in the infobox; more than 3,800 full-time-equivalent academic staff in 2021, of whom more than 1,600 were doctoral candidates.' },
          { h3: 'The painter', p: 'Vermeer was baptised in Delft on 31 October 1632 and buried on 15 December 1675; he joined the guild of Saint Luke in December 1653; between 34 and 37 paintings are attributed to him. The View of Delft, The Little Street and Girl with a Pearl Earring are dated to the middle 1660s in the same entry.' },
          { h3: 'The church and the pottery', p: 'The tower of the Oude Kerk is 75 metres high and stands 1.96 metres out of true; the church dates from 1246 and the tower was built between 1325 and 1350. Of the Delftware factories only ten remained by 1794, and De Porceleyne Fles is still in operation.' },
          { h3: 'A ranking this page does not use', p: 'The municipal entry makes no claim about Delft\'s position among densely populated Dutch places and gives no rank. A ranking placing it fifth appears only in an aggregator blog, and is mentioned here solely to record that it was found and rejected.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection to the municipality, the university, the pottery or any school named here and claims none. The attribution range of 34 to 37 is quoted from the entry and is not narrowed anywhere on this page.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Between 34 and 37: build the distinction between counting badly and not agreeing what counts',
      intro: 'One agreed criterion, a handful of contested items, and a range that more effort cannot close.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Separate the two kinds of doubt', p: 'Uncertainty about a count can come from the counting, which better process fixes, or from the membership, which it does not. Everyone agrees the rule here is that Vermeer painted it. Nobody is losing track of canvases. The range of 34 to 37 exists because two or three specific pictures are disputed, and a more careful inventory changes nothing.' },
          { h3: '2. Watch it propagate', p: 'He joined the guild in December 1653 and was buried on 15 December 1675, about twenty-two years. Paintings per year is therefore between 1.55 and 1.68, and the learner discovers that the range travels through every calculation built on the count, never shrinking, because its source is upstream of all of them.' },
          { h3: '3. Model membership as a field', p: 'The fix is not to pick a number but to store one: each work gets a status, accepted, disputed or rejected, and every total is reported as a range with the disputed items named. That is what the sources themselves do when they write between 34 and 37, and it is what a well-built dataset does too.' }
        ] },
        { kind: 'table', caption: 'Two kinds of uncertainty in one count', head: ['Question', 'Source of the doubt', 'Does more careful work fix it?', 'How to report'], rows: [
          ['Did we miss a painting in the store?', 'the counting', 'yes, recount', 'a single number, once checked'],
          ['Is this particular canvas by Vermeer?', 'the membership', 'no, experts apply the same rule and differ', 'a range, with the disputed items listed'],
          ['How many Vermeers are there?', 'membership, not counting', 'no', '34 to 37, as the sources give it'],
          ['How many paintings a year?', 'inherited from the count', 'no', '1.55 to 1.68 over about twenty-two years']
        ] },
        { kind: 'callout', h3: 'Ask whether the doubt is in the measurement or in the definition of the set', p: 'These two get treated identically and behave completely differently. Measurement doubt shrinks with effort: check again, use a better instrument, take more samples. Membership doubt does not, because the disagreement is about whether particular items belong, and the people disagreeing already share the rule and the evidence. Pouring effort into the first kind is diligence; pouring it into the second is waste, and the honest output there is a range plus a list of the cases in dispute. Every dataset with borderline records has this shape: the possible duplicate, the account that may or may not be active, the transaction that may or may not be fraud. The best practice is exactly what the art historians do, which is to publish the range and name the doubtful items rather than quietly picking a number. The figures above are quoted from the entry and the per-year range is arithmetic on them, labelled as such.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for a count with borderline members',
      intro: 'Duplicate customers, active users, qualified leads, repeat incidents, related articles: in every one the rule is agreed and the edge cases are not. Practised on a count this city has argued about for a century.',
      body: [
        { kind: 'table', caption: 'When the set has a fuzzy edge', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Classify the doubt', 'Decide whether the uncertainty is in measuring or in belonging', 'Effort spent where it cannot help', 'A realistic plan'],
          ['Give members a status', 'Store accepted, disputed and rejected rather than a bare list', 'A judgement baked into a total', 'A count you can re-run under other rules'],
          ['Report the range', 'Publish the low and high figure, not the midpoint', 'False precision on a contested set', 'An honest headline'],
          ['Name the disputed cases', 'List which items are in doubt, not just how many', 'A range nobody can interrogate', 'Somebody else able to check your judgement'],
          ['Carry it downstream', 'Let every derived figure inherit the range', 'A rate quoted to two decimals from a fuzzy count', 'Consistency all the way to the conclusion']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A box of red things, and a few objects that are arguably orange. The children agree the rule is red, then disagree about four objects, and end up reporting a number between two values with the four laid out beside it. Nobody was careless and nobody was wrong.' },
          { h3: 'For teenagers', p: 'A small dataset in Python where each record carries a status field, a count function that returns a low and a high, and a rate calculation that inherits both. The stretch: what evidence would move one item from disputed to accepted, and who would have to accept it?' },
          { h3: 'For adults', p: 'The same treatment on a deduplication or eligibility problem at work. Adults almost always find a rule everybody agrees with, a set of edge cases nobody has looked at in years, and a single number being reported as though the edge cases had been settled.' }
        ] },
        { kind: 'p', text: 'The population, household, area, school, university, church, pottery and painter figures come from the offices and entries named beside them. The range of 1.55 to 1.68 paintings a year is this page dividing the published attribution range by the span between the guild entry of December 1653 and the burial of 15 December 1675, and it is presented as a derived range rather than as a fact about how he worked.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a box of arguably orange things to a count that reports its own disputes',
    intro: 'The starting rung comes out of the free hour, and the wijk on the address is not consulted.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Is this one red?', p: 'Children agree a rule, disagree about four objects, and report a range.', courses: ['kids-coding-blocks-masterclass', 'python-ai-kids-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Counting versus belonging', p: 'Learners sort their uncertainty into the kind effort fixes and the kind it does not.', courses: ['maths-through-coding', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 14 to 18', h3: 'Status fields and inherited ranges', p: 'Teenagers give every record a status and make derived figures carry the range.', courses: ['python-complete-masterclass-teens', 'complete-typescript-programming-masterclass-college'] },
      { band: 'Ages 18 to 67', h3: 'Fuzzy sets at work', p: 'Adults take a deduplication or eligibility rule and separate the settled cases from the disputed ones.', courses: ['mysql-database-complete-masterclass-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will give you a number of Vermeers. Why should a child in Delft learn to insist on two?',
    intro: 'Because the sources say between 34 and 37, and a single figure is a decision presented as a fact.',
    p1: 'Ask a tool how many paintings Vermeer left and you will usually get one number, because a single number reads better and because most of the text it has seen quotes one. The entry itself gives a range, and the range is the informative part: it records that the discipline agrees on the rule and disagrees on two or three canvases. Flattening it loses precisely the thing a careful reader wants, which is where the doubt sits.',
    p2: 'So the learner builds the version that keeps the range and names the disputed items. This is a modelling habit rather than a coding trick, and it is the difference between a system that can be re-run under a different rule and one that has a judgement welded into it. A thirteen-year-old in Tanthof who has done that with paintings will do it at twenty-three with duplicate customer records, and will hand over a low figure, a high figure and a list rather than one number and a shrug. Tools will keep preferring the single answer. Deciding when a range is the answer is a person\'s judgement.',
    closer: 'The case for a Delft child learning to code in 2026 is therefore nothing to do with art history. It is that some uncertainty shrinks with effort and some does not, that telling them apart saves months, and that a count this city has argued about for a hundred years is the clearest place to learn the difference.',
    blogAnchor: 'why writing code still repays a child in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for a city you can cross in twenty minutes',
    intro: 'Distance is not the obstacle in Delft. Time is: a small dense city, two working parents and a diary with nothing spare in it.',
    cells: [
      { h3: 'Nothing to travel to', p: 'The class runs at the kitchen table in Tanthof, Voorhof or the old centre at one fixed hour every week.' },
      { h3: 'English throughout, school words untranslated', p: 'The lesson is in English, which suits a city with this many international students. Groep, havo, vwo and profielkeuze stay Dutch, since those are the forms a pupil actually meets.' },
      { h3: 'What the free hour establishes', p: 'The real level, demonstrated rather than asserted, a course that follows from it, and a weekly time. No card is required at any point.' },
      { h3: 'Level decides, address does not', p: 'Two learners at the same stage work together whichever wijk they live in, and two at different stages do not.' },
      { h3: 'Twice weekly, on the middle calendar', p: 'Two lessons a week at one repeating slot, eight in most months. Delft takes its holidays with regio Midden along with the rest of Zuid-Holland, and weeks away go into the plan first.' },
      { h3: 'Three and a half hours, or four and a half', p: 'Only the Dutch clock changes, so the gap to the teacher depends on the month. Late afternoon, early evening and both weekend days work at either setting.' }
    ],
    spec: { title: 'A city where children are outnumbered three to two by young adults', p: '13,158 residents are under fifteen and 22,428 are between fifteen and twenty-five. A child growing up in Delft is in a smaller cohort than in almost any comparable place, and a group of five to ten assembled on ability from across the country is a different proposition from whatever the nearest school can put together.' }
  },

  fees: {
    h2: 'The fee, in dollars, in all thirteen wijken',
    intro: 'Published here rather than kept for a phone call.',
    first: 'A complete lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'One international rate exists, it is quoted in dollars, and there is no euro version, so every address in the city sees the same figure. The order is free lesson first, course and time second, payment third, and the payment goes over WhatsApp. Pauses, plan changes and missed weeks are described on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, printed as their authors typed them',

  book: {
    h2: 'Tell us the level; the wijk is not needed',
    intro: 'The first task might be a box of arguably orange things, a dataset whose records carry a status field, or a deduplication problem at work that has been reported as a single number for years.',
    success: 'Thank you. Your Delft class request has been sent.'
  },

  faq: {
    h2: 'Delft coding class questions',
    intro: 'The city, its university, its painter, the teaching and the terms.',
    items: [
      { q: 'Why does this page refuse to give one number of Vermeers?', a: 'Because the sources give between 34 and 37, and the spread is not a counting error. Every expert applies the same rule, that Vermeer painted it, and they disagree about two or three specific canvases. More careful counting cannot close that, so the honest output is a range with the disputed items named. Telling that kind of uncertainty apart from the kind effort does fix is the project on this page.' },
      { q: 'When was the university founded?', a: 'Four dates are published and they mark four different things: the Royal Academy on 8 January 1842, the Polytechnic School on 20 June 1864, the Technical High School by a law of 22 May 1905, and the renaming to a technical university on 1 September 1986. This page quotes all four rather than choosing.' },
      { q: 'How many students are there in Delft?', a: 'Two figures answer two questions and are never combined here. The municipality counts 29,856 students at institutions in the city for 2025; among residents, 2,710 are registered in applied higher education and 14,710 at university level. The university separately reported more than 27,000 for 2021, given as 27,080 in its infobox.' },
      { q: 'Is any of this taught in Dutch?', a: 'No. The lesson is in English throughout, which suits a city with a large international student population. Dutch school vocabulary is kept as it is, so groep, havo, vwo and profielkeuze are spoken the way a pupil meets them, but no Dutch-language version of the course exists.' },
      { q: 'What time are classes for a family in Delft?', a: 'Only the Dutch clock changes, so the teacher is three and a half hours ahead in the lighter months and four and a half in the darker ones. The window runs from the end of the school day to mid-evening, with both weekend days open, and one repeating slot is agreed at the free lesson.' },
      { q: 'Is Delft one of the most densely populated cities in the country?', a: 'It is the second densest in this series at a published 4,862 residents to the square kilometre, behind Leiden. Its own entry makes no claim about a national ranking and gives no position, and this page does not supply one, because the only ranking found was in an aggregator blog rather than in a source worth citing.' },
      { q: 'What is in the free lesson?', a: 'The teacher establishes the real level by having the learner do something, then sets one task just beyond it. A child might sort a box of things that are arguably orange. A teenager gives every record a status and makes a count return two numbers. An adult brings a deduplication problem. It ends with a course, a rung, a weekly time and a dollar price, and nothing has been charged.' },
      { q: 'Is there a Modern Age Coders classroom in Delft?', a: 'No, and none is claimed on the campus, in the old centre or anywhere in the Netherlands. Lessons are live online and need a laptop or desktop, working audio, a current browser and a stable connection. The telephone number on this page is Indian and is described as such.', boiler: true },
      { q: 'What do Delft coding classes cost?', a: 'The first lesson is free. Group tuition is USD 100 a month for two live lessons a week, normally eight in the month, in a group of five to ten. Private tuition is USD 150 a month, one learner with one teacher at the same frequency. Course, format, recurring time and availability are confirmed before payment.', boiler: true },
      { q: 'How many learners are in a Delft group?', a: 'Between five and ten, matched on level, pace and goal rather than on age, school or wijk. Private tuition is one learner and one teacher. If no group at the right level is running, the family can take private tuition or wait for the next one to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the Netherlands',
    h2: 'North to the ministries, out to the province, and up to the country',
    html: 'North is <a class="cg-inline-link" href="/coding-classes-in-the-hague">The Hague</a> and south <a class="cg-inline-link" href="/coding-classes-in-rotterdam">Rotterdam</a>, with <a class="cg-inline-link" href="/coding-classes-in-leiden">Leiden</a>, the only municipality in this series denser than Delft, a short way up the line. All of them sit in <a class="cg-inline-link" href="/coding-classes-in-zuid-holland">Zuid-Holland</a>, and the whole series descends from the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>, with <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> and the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a> for models rather than programs.',
    waLabel: 'Close with WhatsApp'
  },

  footerHeading: 'The Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' },
    { href: '/coding-classes-in-zuid-holland', label: 'Zuid-Holland' },
    { href: '/coding-classes-in-the-hague', label: 'The Hague' }
  ],

  personalityCss: `
.cg-root.cg-dlf .cg-hero-grid { align-items: center; gap: clamp(1.55rem, 3.85vw, 2.95rem); }
.cg-root.cg-dlf .cg-hero h1 { font-weight: 500; letter-spacing: -0.0105em; line-height: 1.11; }
.cg-root.cg-dlf .cg-capsule { border-left-width: 3px; border-left-style: solid; border-top: 3px solid var(--cg-accent-soft); padding-left: 1.45rem; padding-top: 0.6rem; }
.cg-root.cg-dlf .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; }
.cg-root.cg-dlf .cg-section-head h2 { max-width: 35ch; }
.cg-root.cg-dlf .cg-grid-3 { gap: clamp(1.05rem, 2.25vw, 1.7rem); }
.cg-root.cg-dlf .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 1.05rem; }
.cg-root.cg-dlf .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-dlf .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'City and municipality of Delft, Zuid-Holland: 110,089 residents (CBS 2026) on 22.66 km2, the second densest in this series at a published 4,862, with 59 percent single-person households, the highest here; 30 primary establishments (7,388 pupils) and 14 secondary (8,233), so secondary outnumbers primary; 29,856 students at institutions here. City rights 15 April 1246. A single woonplaats with 13 wijken and 91 buurten. Regio Midden holidays with the rest of Zuid-Holland. The city page argues from membership uncertainty; the province page owns the Randstad boundary question and Leiden owns the historical unit.',
    localProject: 'Ask whether the doubt is in the measurement or in the definition of the set. Between 34 and 37 paintings are attributed to Vermeer, and the range is not a counting error: the criterion is agreed and two or three specific canvases are disputed, so no better inventory closes it. The range propagates, giving 1.55 to 1.68 paintings a year across the roughly twenty-two years between his entry to the guild of Saint Luke in December 1653 and his burial on 15 December 1675. The learner models membership as a status field, returns a low and a high, names the disputed items and lets derived figures inherit the range. Distinct from the bound-versus-value trap (Hong Kong) and from ranking under measurement noise (Breda): here the quantity is fixed and knowable in principle, and the irreducible uncertainty is about which items belong to the set rather than about how well anything was measured. The range is quoted from the source and never narrowed.',
    requiredMentions: [
      '110,089',
      '63,476',
      '37,324',
      '92,457',
      '7,388',
      '8,233',
      '29,856',
      'Vermeer',
      'Oude Kerk',
      'Pechtold',
      '15 April 1246',
      'Porceleyne Fles',
      '27,080',
      'Sint-Lucasgilde'
    ],
    sources: [
      { claim: 'Delft 110,089 residents in 2026 (CBS); 63,476 households (2025) averaging 1.72, 37,324 single-person (59 percent); 13,158 aged 0 to 15; 22,428 aged 15 to 25; 33,594 aged 25 to 45; 22,376 aged 45 to 65; 18,533 aged 65 and over; total area 2,406 ha, land 2,266 ha; density 4,862; 30 primary establishments (7,388 pupils) and 14 secondary (8,233); 29,856 students at institutions in the municipality (2025); HBO 2,710 and WO 14,710; one woonplaats, 13 wijken and 91 buurten; 92,457 in 1995, a rise of 17,632 (19 percent).', url: 'https://allecijfers.nl/gemeente/delft/' },
      { claim: 'Delft 110,044 residents on 1 January 2026; 24.06 km2 (22.65 land, 1.41 water); density 4,858; mayor Alexander Pechtold (D66); city rights 15 April 1246 from Willem II; of the Delftware factories only ten remained by 1794 and De Porceleyne Fles is still operating. The entry gives no national ranking for population density.', url: 'https://nl.wikipedia.org/wiki/Delft' },
      { claim: 'TU Delft: the Koninklijke Akademie was founded on 8 January 1842; the Polytechnische School on 20 June 1864; the Technische Hoogeschool by a law of 22 May 1905; renamed Technische Universiteit Delft on 1 September 1986; more than 27,000 students in 2021 with an infobox figure of 27,080; more than 3,800 fte academic staff in 2021, of whom more than 1,600 doctoral candidates.', url: 'https://nl.wikipedia.org/wiki/Technische_Universiteit_Delft' },
      { claim: 'Johannes Vermeer was baptised in Delft on 31 October 1632 and buried on 15 December 1675; he joined the Sint-Lucasgilde in December 1653; between 34 and 37 paintings are attributed to him; the View of Delft, The Little Street and Girl with a Pearl Earring are dated to the middle 1660s.', url: 'https://nl.wikipedia.org/wiki/Johannes_Vermeer' },
      { claim: 'The tower of the Oude Kerk in Delft is 75 metres high and stands 1.96 metres out of true; the church dates from 1246 and the tower was built between 1325 and 1350.', url: 'https://nl.wikipedia.org/wiki/Oude_Kerk_(Delft)' },
      { claim: 'School holiday regions: regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'A single number of paintings by Vermeer. The published range of 34 to 37 is quoted and never narrowed.',
      'A national density ranking for Delft. The municipal entry gives none; a fifth place appears only in an aggregator blog, which the page records as found and rejected.',
      'A single founding year for the university. Four dates are published for four different institutions or statuses and all four are quoted.',
      'Any sum of the 29,856 students at institutions and the 17,420 residents enrolled. They count different things.',
      'The lean of the Oude Kerk tower expressed in degrees. The source gives metres and the page does not convert, because a lean in degrees belongs to another page in this series.',
      'Anything the Zuid-Holland page owns: the Randstad boundary question and the provincial totals. Anything The Hague, Rotterdam or Leiden pages own.'
    ]
  }
};
