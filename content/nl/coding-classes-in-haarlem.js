'use strict';
// Haarlem: capital of Noord-Holland, 168,898 people on 29 square kilometres of
// land, and the densest municipality in this series. Spine: one source
// publishes a population and a density that cannot both be right, because the
// density was computed from an older population and never recomputed.

module.exports = {
  slug: 'coding-classes-in-haarlem',
  code: 'hlm',
  accent: '#742945',
  accentRationale: 'Haarlem: a deep madder red for the old brickwork, placed by the solver clear of Amsterdam\'s red and Apeldoorn\'s heathland rose',
  pageType: 'city',
  place: {
    name: 'Haarlem',
    eyebrow: 'Haarlem, Noord-Holland',
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
  routeLabel: 'Haarlem, Netherlands',
  title: 'Coding Classes in Haarlem | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in Haarlem for ages 6 to 67, across all 21 wijken and Spaarndam. First lesson free, then one flat monthly fee.',
  ogDescription: 'Live online coding, Python, AI and mathematics for families in Haarlem, capital of Noord-Holland, built on a published density that contradicts the population beside it.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'frontend-development-masterclass-for-teens',
  verifiedOn: '7 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Haarlem Learners',
    description: 'Ability-placed online coding, Python, web development, AI and mathematics for children, teenagers and adults across the wijken of Haarlem, taught in English.'
  },

  h1: 'Coding classes in Haarlem, where one page publishes a population and a density that cannot both be true',
  capsuleQ: 'What are the best coding classes in Haarlem?',
  capsule: 'Coding classes in Haarlem serve 168,898 people (Statistics Netherlands, 1 January 2026) on 29.21 square kilometres of land, which makes it the most tightly packed municipality in this series at about 5,780 residents to the square kilometre. One widely read source gives the population as 168,946 and the density as 5,036 on the same page, and those two numbers cannot both describe the same place: the division comes out at 5,265 against the total area and 5,792 against the land. Modern Age Coders teaches live online in English across every wijk, for ages 6 to 67, first lesson free, then USD 100 a month in a group of five to ten or USD 150 one-to-one.',
  lead: 'Divide 168,946 residents by 32.09 square kilometres and you get 5,265 to the square kilometre. Divide by the 29.17 of land and you get 5,792. The page that publishes all three of those numbers also publishes a density of 5,036, which is neither. Work backwards and 5,036 implies a population of about 161,605, which is Haarlem a few years ago. Nobody has lied. Somebody stored a calculated number, updated the population above it, and never recomputed the line below. A child who has caught that once will check derived figures for the rest of their life.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Haarlem.',

  picks: {
    eyebrow: 'Course picks for Haarlem',
    h2: 'Four courses for a city that is mostly within cycling distance of itself',
    intro: 'A groep 4 child in the Vijfhoek, a teenager in Schalkwijk who wants the page to look designed rather than defaulted, an adult retraining after years in Amsterdam offices, and a parent in the Haarlemmerhout side whose reporting pack has a stale number in it: four doors into one compact city.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch from an empty stage to a finished game in three months, in English, for the groep 3 to 6 child anywhere between the Spaarne and Schalkwijk.' },
      { course: 'frontend-development-masterclass-for-teens', band: 'Ages 13 to 18', note: 'Real CSS, then JavaScript, then React, for the teenager who has noticed that every template looks the same and wants out of it.' },
      { course: 'full-stack-web-development-masterclass-college', band: 'College and adult', note: 'React, Node and a live deployment, for the student or career-changer who wants something running at a real address by the end.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults', note: 'Excel, SQL, Python and BI, for the working parent whose monthly pack contains at least one number nobody has recalculated since it was written.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Haarlem today',
      h2: 'The provincial capital, twenty minutes from Amsterdam, and packed tight',
      intro: 'The national register held 168,898 people on 1 January 2026, in 81,464 households averaging 2.04 people, on 29.21 square kilometres of land inside 32.09 of territory. That works out at about 5,780 residents to the square kilometre of land, the tightest in this series by a wide margin. In 1995 the count was 148,908, so the city has gained 19,990 people in thirty-one years, a rise of 13 percent.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'A city of families in a small space', p: '26,988 residents are under fifteen, 16 percent, and only 17,847 are between fifteen and twenty-five; 49,920 are between twenty-five and forty-five and 30,171 are sixty-five or over. 35,803 households hold one person, 44 percent. Plenty of children, few students: Haarlem sends its school leavers to Amsterdam and keeps its young families.' },
          { h3: 'Schools close together', p: '49 primary establishments teach 15,378 pupils and 18 secondary establishments teach 12,405. On 29 square kilometres that is a school every few streets, which is exactly why an online class here competes on time rather than on distance: nothing is far, but everything is booked.' },
          { h3: 'Capital, and not the largest', p: 'Haarlem is the seat of Noord-Holland, a province whose largest city is Amsterdam by a wide margin. It has city rights from 1245, granted by Count Willem the Second of Holland, and its own entry calls it one of the most densely populated cities in the country.' }
        ] },
        { kind: 'spec', title: 'Four centuries of measurement in one square', p: 'The Grote of Sint-Bavokerk was built between 1370 and 1520, its crossing tower stands at over 78 metres, and its Christian Müller organ of 1735 to 1738 has about five thousand pipes. Frans Hals, Pieter Saenredam, Jan Adriaanszoon Leeghwater, Pieter Teyler van der Hulst and Willem Bilderdijk are buried in it. Teylers Museum, founded in 1784 and holding the oldest Dutch museum hall with a near-original interior, recorded 157,843 visitors in 2016.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Where the learners are',
      h2: 'Twenty-one wijken, two woonplaatsen, and nothing more than a few kilometres away',
      intro: 'The statistics office divides the municipality into 21 wijken and 111 buurten across two woonplaatsen; the municipal entry groups the same ground into five stadsdelen and the same 21 wijken. Both descriptions are of a city small enough to cross by bicycle in half an hour.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The centre and the Vijfhoek', p: 'The old city inside the line of the vanished walls: the Grote Markt, the Spaarne, the courtyards and the narrowest streets in the municipality. A large share of the 44 percent single-person households lives here.' },
          { h3: 'Haarlem-Noord', p: 'North of the Spaarne, the interwar and post-war districts where most of the 26,988 under-fifteens are, with the fullest primary schools and the shortest school runs anywhere in this series.' },
          { h3: 'Schalkwijk', p: 'The south-eastern expansion of the 1960s, the most recently built large district, and the part of the city whose teenagers travel furthest to reach a secondary school on the other side.' },
          { h3: 'Haarlem-Zuidwest and the Hout', p: 'Towards the Haarlemmerhout, the municipal woodland that has existed, by its entry\'s account, since the beginning of our era. Older housing, quieter streets, and a short ride to everything.' },
          { h3: 'The Waarderpolder side', p: 'East of the Spaarne, the working half: business parks, the station approaches and the road to Amsterdam that many of the 49,920 residents aged twenty-five to forty-five use every working day.' },
          { h3: 'Spaarndam and the edge', p: 'The second woonplaatsen of the municipality out towards the north-east, a village core with its own name, its own school and a real journey into the city on a wet evening.' }
        ] },
        { kind: 'p', text: 'All of it is taught at one hour, and the wijk on the address has never been an input to which group a learner joins.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Every figure and its office, including the three densities that do not agree',
      intro: 'The national count, the municipal entry, the church, the museum, and the arithmetic that shows which published number was left behind.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The municipal count', p: 'Statistics Netherlands: 168,898 residents on 1 January 2026, provisional; 81,464 households for 2025 averaging 2.04 people, 35,803 of them single-person, 44 percent; 26,988 under fifteen; 17,847 aged fifteen to twenty-five; 49,920 aged twenty-five to forty-five; 30,171 aged sixty-five and over; 49 primary establishments with 15,378 pupils and 18 secondary with 12,405; total area 3,209 hectares, land 2,921; a published density of 5,777 to the square kilometre; two woonplaatsen, 21 wijken and 111 buurten; 148,908 residents in 1995, a rise of 19,990.' },
          { h3: 'The municipality, described', p: 'Haarlem\'s own entry: 168,946 residents on 1 January 2026, 48 more than the national figure for the same date, both kept; 32.09 square kilometres in total, 29.17 of land and 2.92 of water, against 29.21 of land nationally, both kept; mayor Jos Wienen; city rights in 1245 from Count Willem the Second of Holland; five stadsdelen and 21 wijken; described as one of the most densely populated cities in the country, at a stated 5,036 residents to the square kilometre; the tenth largest Dutch city counting urban cores only.' },
          { h3: 'The density that does not divide', p: 'The national source publishes 5,777 and its own figures give 168,898 over 29.21 square kilometres, which is 5,782: consistent to within rounding. The municipal entry publishes 5,036, and its own figures give 168,946 over 32.09, which is 5,265, or over 29.17, which is 5,792. Neither is 5,036, and the gap is the subject of the project below.' },
          { h3: 'What 5,036 does divide into', p: 'A density of 5,036 across the entry\'s own total area of 32.09 square kilometres implies a population of about 161,605. That is not this year\'s Haarlem and it is not a figure anybody published as this year\'s Haarlem. It is what the city was some years ago, which is the shape of the error rather than proof of its cause.' },
          { h3: 'The church and the museum', p: 'The Grote of Sint-Bavokerk, built 1370 to 1520, with a crossing tower of over 78 metres and a Christian Müller organ of 1735 to 1738 holding about five thousand pipes; Frans Hals, Pieter Saenredam, Jan Adriaanszoon Leeghwater, Pieter Teyler van der Hulst and Willem Bilderdijk buried there, Bilderdijk last. Teylers Museum, founded 1784 at Spaarne 16, holds the oldest Dutch museum hall with a near-original interior and recorded 157,843 visitors in 2016; it went onto the UNESCO tentative list in August 2011 and the submission was withdrawn in 2013.' },
          { h3: 'The wood', p: 'The Haarlemmerhout, the municipal forest on the edge of the city, described in its entry as having existed since the beginning of our era and as a principal recreation area. No area figure was given at source and none is stated here.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection to the municipality, the museum, the church or any school named here and claims none. They appear because a page that says it teaches Haarlem should be willing to check the arithmetic of the sources it leans on.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'A density that will not divide: build the program that recomputes instead of trusting',
      intro: 'Three published numbers on one page, one division, and an answer that shows which of them was last updated.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Do the division yourself', p: 'The learner takes the population and the area from the same source and divides. 168,946 over 32.09 square kilometres is 5,265; over the 29.17 of land it is 5,792. The published figure on that page is 5,036, which is neither, and the discrepancy is not rounding: it is 229 short of one answer and 756 short of the other.' },
          { h3: '2. Invert it to find the missing input', p: 'If the density is 5,036 and the area is 32.09, the population it was computed from was about 161,605. If the area used was the land figure of 29.17, the implied population is about 146,900. The learner now has two candidate histories and can say which is plausible: a Haarlem of about 161,600 is a Haarlem of a few years ago, and one of 146,900 is a Haarlem of the mid-1990s.' },
          { h3: '3. Check the other source and see the difference', p: 'The national source publishes 5,777 and its own inputs give 5,782, agreeing to within a rounding of the area. So one publisher recomputes the derived value when the inputs change and the other does not. The lesson is not that either is careless; it is that a stored derived number carries a date its label does not show.' }
        ] },
        { kind: 'table', caption: 'One city, two sources, and four densities', head: ['Density', 'Where it comes from', 'Population implied', 'Area implied', 'Consistent with its own page?'], rows: [
          ['5,782', 'this page dividing 168,898 by 29.21', '168,898', '29.21 km2 of land', 'yes'],
          ['5,777', 'published by the national source', 'about 168,898', 'about 29.24 km2', 'yes, to within rounding'],
          ['5,265', 'this page dividing 168,946 by 32.09', '168,946', '32.09 km2 in total', 'yes, if total area is meant'],
          ['5,036', 'published by the municipal entry', 'about 161,605', '33.55 km2 if the population is current', 'no']
        ] },
        { kind: 'callout', h3: 'A derived number is a photograph of its inputs at the moment it was taken', p: 'Density, averages per head, growth rates, ratios and percentages are all calculated from other values, and the moment they are written down they stop tracking those values. Update the population and the density beside it goes quietly wrong, with no error message and no visible change. The defence has two parts, and both are cheap. Recompute derived values from stored inputs rather than storing the result, so that they cannot drift. And when you meet a derived figure you did not compute, divide it back out and see what inputs it implies, because that tells you when it was made. The four rows above were computed before this paragraph was written, from figures each source publishes about itself; the implied populations are inversions of the published density, not claims about how many people have ever lived here.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for any number somebody else calculated',
      intro: 'Conversion rates in a deck, cost per unit in a price list, margins in a model, scores in a dashboard: every one is a division somebody did once. Practised on the entry for the city the learner lives in.',
      body: [
        { kind: 'table', caption: 'When the number in front of you is a result, not an input', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Identify the derived', 'Mark which figures are inputs and which are results of arithmetic', 'A density trusted like a headcount', 'A map of what can drift'],
          ['Recompute on sight', 'Redo the division from the inputs on the same page', 'A stale result carried forward for years', 'Agreement, or a question'],
          ['Invert the discrepancy', 'Solve for the input that would produce the published result', 'A vague sense that something is off', 'The approximate date of the error'],
          ['Store inputs, not outputs', 'Keep population and area; compute density when asked', 'A field that must be remembered to update', 'A number that cannot go stale'],
          ['Report both, not one', 'When two sources disagree, publish both with their arithmetic', 'A silent choice presented as a fact', 'A reader who can check you']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A jar of sweets with a label saying how many are inside. The child eats three and the label still says the old number. Everyone laughs, and then the teacher asks what else in the room has a label that was written once and never checked. That question is the entire lesson and it lands at seven.' },
          { h3: 'For teenagers', p: 'The four rows in Python, with density as a function of population and area rather than a stored field, plus an inversion that solves for the implied population of any published density. Then the stretch: write a checker that takes any page with population, area and density and reports whether the three agree.' },
          { h3: 'For adults', p: 'The same check on a reporting pack from work: recompute every percentage and per-unit figure from the raw columns in the same file. Adults very commonly find at least one derived cell that was hard-coded during a deadline and has been carried forward ever since.' }
        ] },
        { kind: 'p', text: 'The population, household, area, school, church and museum figures come from the offices and entries named beside them. The 5,782, the 5,265, the implied 161,605 and the implied 146,900 are this page dividing and inverting those published figures, and each is presented as arithmetic rather than as a claim about the city.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a mislabelled sweet jar to a checker that recomputes every derived cell',
    intro: 'The rung is fixed during the free hour, and the wijk on the address has nothing to do with it.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'The label nobody updated', p: 'Children find the gap between what a label says and what is actually in the jar.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Recompute before believing', p: 'Learners redo a published division and say whether the two agree.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'Functions, not fields', p: 'Teenagers make density a function of its inputs and invert a published figure to date it.', courses: ['frontend-development-masterclass-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Hard-coded cells at work', p: 'Adults rebuild a reporting pack so every derived value is computed rather than typed.', courses: ['full-stack-web-development-masterclass-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will quote you Haarlem\'s density without dividing anything. Why should a child here learn to do the division?',
    intro: 'Because the figure it quotes may be the one that no longer follows from the numbers printed beside it.',
    p1: 'Ask a tool how densely populated Haarlem is and it will return a sourced number, quite possibly 5,036, because that is what a widely read page says. It is repeating a value, not evaluating one, and nothing in the text signals that the same page carries a population and an area which together give 5,265 or 5,792. Spotting that requires somebody to do the division and then to care about the remainder, which is a decision rather than a capability.',
    p2: 'That is why the learner writes it. The tool will happily compute the density, invert the discrepancy and even build the three-way checker if asked. What it will not do unbidden is treat a published result as a claim to be tested against its own inputs. A twelve-year-old in Schalkwijk who has caught a stale density will recompute the conversion rate on a slide at twenty-two and the margin in a model at thirty-two, and will be the one who notices the cell somebody typed in during a deadline. The tools will get faster at arithmetic; they will not start distrusting the page for you.',
    closer: 'The case for a Haarlem child learning to code in 2026 is therefore not about geography. It is that most numbers in working life are results of arithmetic somebody did once, that they go stale silently when their inputs move, and that the habit of recomputing before believing is best learned on a page describing the street the child lives on.',
    blogAnchor: 'the longer case for teaching a child to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for a city where nothing is far and every hour is spoken for',
    intro: 'Haarlem is small enough to cross by bicycle in half an hour, so distance is not the obstacle here. Time is: two working parents, a train to Amsterdam and a diary with no gaps in it.',
    cells: [
      { h3: 'No journey to schedule around', p: 'The lesson happens at the kitchen table in Schalkwijk, the Vijfhoek or Spaarndam at one fixed hour, and no part of the evening is spent getting anywhere.' },
      { h3: 'English throughout, Dutch school words kept', p: 'Teaching is in English. Groep, havo, vwo and profielkeuze are said as the child\'s school says them, and nothing is translated in either direction.' },
      { h3: 'What the first hour settles', p: 'A piece of work that shows the real level, a named course that follows from it, and a weekly slot, arranged without any payment details.' },
      { h3: 'Grouped by level, not by stadsdeel', p: 'Two learners at the same stage sit together whether one is in Haarlem-Noord and the other by the Hout; two at different stages do not, however close they live.' },
      { h3: 'Two lessons a week, on the northern calendar', p: 'Usually eight lessons a month at one fixed time. Haarlem takes its school holidays with regio Noord along with the rest of Noord-Holland, and the family\'s weeks away go into the plan before the slot is agreed.' },
      { h3: 'A gap of three and a half or four and a half hours', p: 'Only the Dutch clock changes, so the distance to the teacher is shorter from late March to late October and longer through winter. The overlap covers the late afternoon, the early evening and both weekend days.' }
    ],
    spec: { title: 'A commuter city that keeps its children at home', p: 'Haarlem has a high share of under-fifteens and a low share of young adults: families settle here and school leavers go elsewhere. A weekly hour that arrives through the connection fits a household where both parents are on a train by eight and back after six, which is the ordinary shape of a Haarlem week.' }
  },

  fees: {
    h2: 'What it costs, in dollars, in every wijk',
    intro: 'Put on the page rather than kept for a phone call.',
    first: 'A complete lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'One international rate applies, quoted in dollars and never in euros, so a family in Spaarndam sees exactly what a family in the centre sees. Payment comes after the free lesson has produced a course and a time, and it goes over WhatsApp. Pausing, changing plan and missing a week are described on the pricing page.'
  },

  reviewsH2: 'Six families, in the words they left on Google',

  book: {
    h2: 'Send us the level; the wijk is not needed',
    intro: 'The first task might be a sweet jar with an out-of-date label, a density recomputed from its own inputs in Python, or a reporting pack from work with a hard-coded percentage in it.',
    success: 'Thank you. Your Haarlem class request has been sent.'
  },

  faq: {
    h2: 'Haarlem coding class questions',
    intro: 'The city, its figures, its districts, the teaching and the terms.',
    items: [
      { q: 'Why does this page say a published density is wrong?', a: 'Not wrong so much as out of date, and the page shows the working. A widely read entry gives Haarlem 168,946 residents on 32.09 square kilometres and states a density of 5,036. The division gives 5,265 against the total area and 5,792 against the 29.17 of land. Inverted, 5,036 implies a population of about 161,605, which is the city some years ago. The national source publishes 5,777 and its own inputs give 5,782, so it agrees with itself. Recomputing rather than trusting is the project on this page.' },
      { q: 'Which parts of Haarlem does this page cover?', a: 'All of the municipality: the centre and the Vijfhoek, Haarlem-Noord, Schalkwijk, the south-west towards the Haarlemmerhout, the Waarderpolder side and Spaarndam. The statistics office counts two woonplaatsen, 21 wijken and 111 buurten, and none of those affects a class.' },
      { q: 'Is Haarlem or Amsterdam the capital of Noord-Holland?', a: 'Haarlem is the provincial capital. Amsterdam is much the larger city and is the capital of the country. Being the seat of a province and being its biggest city are separate things, and this cluster has met the distinction more than once.' },
      { q: 'Is any of this taught in Dutch?', a: 'No. Lessons run in English from start to finish. The Dutch a school uses stays in place, so groep, havo, vwo and profielkeuze are spoken as the child hears them, but no Dutch-language edition of the course exists.' },
      { q: 'What time are classes for a family in Haarlem?', a: 'The teacher is three and a half hours ahead under Dutch summer time and four and a half in winter, because the Indian clock does not move. Workable hours run from the end of the school day to mid-evening, with both weekend days available. The recurring slot is agreed during the free lesson and then kept.' },
      { q: 'We are in Spaarndam rather than the city. Does that change anything?', a: 'Only the journey that no longer has to happen. A learner in Spaarndam joins the same group at the same hour as one in the centre, at the same fee, and the ride into town on a February evening never comes into it.' },
      { q: 'What is in the free lesson?', a: 'The teacher finds the edge of what the learner already manages and puts one piece of work just past it. For a child that might be a jar whose label nobody updated. For a teenager, a density written as a function of its inputs and inverted to date a published figure. For an adult, a reporting pack with a hard-coded cell. It closes with a course, a rung, a weekly time and a price in dollars, and nothing has been charged.' },
      { q: 'Is there a Modern Age Coders classroom in Haarlem?', a: 'No, and none is claimed near the Grote Markt, in Schalkwijk or anywhere in the Netherlands. Lessons are live online and need a laptop or desktop, working audio, a current browser and a stable connection. The telephone number on this page is Indian and is described as such.', boiler: true },
      { q: 'What do Haarlem coding classes cost?', a: 'The first lesson is free. Group tuition is USD 100 a month for two live lessons a week, normally eight in the month, in a group of five to ten. Private tuition is USD 150 a month, one learner with one teacher at the same frequency. Course, format, recurring time and availability are confirmed before payment.', boiler: true },
      { q: 'How many learners are in a Haarlem group?', a: 'Between five and ten, matched on level, pace and goal rather than on age, school or wijk. Private tuition is one learner and one teacher. If no group at the right level is running, the family can take private tuition or wait for the next one to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the Netherlands',
    h2: 'East to the capital, out to the province, and up to the country',
    html: 'Twenty minutes east is <a class="cg-inline-link" href="/coding-classes-in-amsterdam">Amsterdam</a>, and Haarlem is the seat of <a class="cg-inline-link" href="/coding-classes-in-noord-holland">Noord-Holland</a>, whose page is about the difference between a rank and a distance. Everything here descends from the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>, and a learner after a model that learns rather than a program that runs should open <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> or the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>.',
    waLabel: 'Close with WhatsApp'
  },

  footerHeading: 'The Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' },
    { href: '/coding-classes-in-noord-holland', label: 'Noord-Holland' },
    { href: '/coding-classes-in-amsterdam', label: 'Amsterdam' }
  ],

  personalityCss: `
.cg-root.cg-hlm .cg-hero-grid { align-items: end; gap: clamp(1.5rem, 3.8vw, 2.9rem); }
.cg-root.cg-hlm .cg-hero h1 { font-weight: 500; letter-spacing: -0.01em; line-height: 1.12; }
.cg-root.cg-hlm .cg-capsule { border-left-width: 7px; border-left-style: solid; padding-left: 1.3rem; }
.cg-root.cg-hlm .cg-eyebrow { letter-spacing: 0.15em; font-weight: 600; }
.cg-root.cg-hlm .cg-section-head h2 { max-width: 35ch; }
.cg-root.cg-hlm .cg-grid-3 { gap: clamp(1.05rem, 2.2vw, 1.7rem); }
.cg-root.cg-hlm .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 1.3rem; }
.cg-root.cg-hlm .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-hlm .cg-callout { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'City and municipality of Haarlem, capital of Noord-Holland: 168,898 residents (CBS 1 January 2026) on 29.21 km2 of land, the densest municipality in this series; 49 primary establishments (15,378 pupils) and 18 secondary (12,405); city rights 1245. Two woonplaatsen, 21 wijken, 111 buurten; five stadsdelen in the municipal description. Regio Noord holidays with the rest of Noord-Holland. The city page argues from a stale derived figure; the province page owns the rank-versus-distance lesson and Amsterdam owns its own.',
    localProject: 'A derived number is a photograph of its inputs at the moment it was taken. The municipal entry publishes 168,946 residents, 32.09 km2 total and 29.17 km2 of land, and states a density of 5,036; the division gives 5,265 against total area and 5,792 against land, so the published density agrees with neither. Inverted, 5,036 implies a population of about 161,605 across the total area, or about 146,900 across the land. The national source publishes 5,777 against its own 168,898 over 29.21, which gives 5,782 and is consistent to within rounding. Distinct from stale cached data (Ibri) and from the two-vintage comparison (Apeldoorn: parts dated 2023 against a whole dated 2026): here a single source is internally inconsistent because a stored result was not recomputed when its own inputs were updated, and the fix is to compute derived values rather than store them. Computed and inverted before writing.',
    requiredMentions: [
      '168,898',
      '81,464',
      '35,803',
      '148,908',
      '15,378',
      '12,405',
      '5,777',
      '5,036',
      '161,605',
      'Teylers',
      'Jos Wienen',
      'Haarlemmerhout',
      '157,843',
      'Schalkwijk'
    ],
    sources: [
      { claim: 'Haarlem 168,898 residents on 1 January 2026 (CBS provisional); 81,464 households (2025) averaging 2.04, 35,803 single-person (44 percent); 26,988 aged 0 to 15; 17,847 aged 15 to 25; 49,920 aged 25 to 45; 30,171 aged 65 and over; total area 3,209 ha, land 2,921 ha; density 5,777 per km2; 49 primary establishments (15,378 pupils); 18 secondary (12,405); two woonplaatsen, 21 wijken and 111 buurten; 148,908 in 1995, a rise of 19,990 (13 percent).', url: 'https://allecijfers.nl/gemeente/haarlem/' },
      { claim: 'Haarlem 168,946 residents on 1 January 2026; 32.09 km2 total, 29.17 land, 2.92 water; mayor Jos Wienen (CDA); city rights 1245 from Count Willem II of Holland; five stadsdelen and 21 wijken; described as one of the most densely populated cities in the country at 5,036 inhabitants per km2; the tenth largest city by population counting urban cores only.', url: 'https://nl.wikipedia.org/wiki/Haarlem' },
      { claim: 'Grote of Sint-Bavokerk, Haarlem: built 1370 to 1520; crossing tower over 78 metres; Christian Müller organ built 1735 to 1738 with about five thousand pipes; Frans Hals, Pieter Saenredam, Jan Adriaanszoon Leeghwater, Pieter Teyler van der Hulst and Willem Bilderdijk buried there, Bilderdijk the last burial.', url: 'https://nl.wikipedia.org/wiki/Grote_of_Sint-Bavokerk_(Haarlem)' },
      { claim: 'Teylers Museum, founded 1784 when the Ovale Zaal opened to the public, at Spaarne 16; holds the oldest Dutch museum hall with a near-original interior; a record 157,843 visitors in 2016; placed on the UNESCO tentative list in August 2011 with the submission withdrawn in 2013.', url: 'https://nl.wikipedia.org/wiki/Teylers_Museum' },
      { claim: 'The Haarlemmerhout is a municipal forest on the edge of Haarlem, described as having existed since the beginning of our era and as a major recreation area. No area figure is given.', url: 'https://nl.wikipedia.org/wiki/Haarlemmerhout' },
      { claim: 'School holiday regions: regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'A statement that the municipal entry is in error. The page shows that its three figures do not divide into one another and offers the stale-derived-value explanation as the shape of the discrepancy, not as a proven cause.',
      'That Haarlem was 161,605 or 146,900 in any particular year. Those are inversions of the published density and are labelled as such; no dated population other than 1995 and 2026 is claimed.',
      'An area figure for the Haarlemmerhout, and any visitor figure for Teylers after 2016. Not found at source.',
      'Any claim that Haarlem is the densest municipality in the Netherlands. The page says only that it is the densest in this series.',
      'Anything the Noord-Holland page owns: the rank-versus-distance project and the provincial totals. Anything the Amsterdam page owns.'
    ]
  }
};
