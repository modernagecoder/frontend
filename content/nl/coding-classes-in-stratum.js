'use strict';
// Stratum: the south-eastern stadsdeel of Eindhoven, three CBS wijken, all
// three read, Oud-Stratum, Kortonjo and Putten.
// Spine: three correct wijk densities, averaged, give a stadsdeel density a
// fifth too high. Add the people, add the land, divide once.

module.exports = {
  slug: 'coding-classes-in-stratum',
  code: 'stm',
  accent: '#54578F',
  accentRationale: 'Stratum: a slate violet, the colour of the white Dudok houses in evening shade, far from the Dommel teal of the Eindhoven city page, the rose of Eindhoven Centrum and the Brabant red, and nearest to The Hague, which it does not link to',
  pageType: 'district',
  place: {
    name: 'Stratum',
    eyebrow: 'Stratum, Eindhoven',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'City', name: 'Eindhoven' },
      { type: 'AdministrativeArea', name: 'Noord-Brabant' },
      { type: 'Country', name: 'Netherlands' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-netherlands', name: 'Netherlands' },
    { slug: 'coding-classes-in-eindhoven', name: 'Eindhoven' }
  ],
  nav: [
    { label: 'Eindhoven', href: '/coding-classes-in-eindhoven' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Stratum, Eindhoven, Netherlands',
  title: 'Coding Classes in Stratum, Eindhoven | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in Stratum, Eindhoven for ages 6 to 67, across Oud-Stratum, Kortonjo and Putten. The first full lesson is free.',
  ogDescription: 'Live online coding, Python and AI in Stratum, on a page about three correct numbers that average to a wrong one.',
  twitterDescription: 'Online classes in Stratum for ages 6 to 67, fees in USD and a free first lesson.',
  ogImageCourse: 'python-ai-kids-masterclass',
  verifiedOn: '10 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Stratum Learners',
    description: 'Ability-placed online coding, Python, AI, app building and mathematics for children, teenagers and adults in Oud-Stratum, Kortonjo and Putten, taught in English.'
  },

  h1: 'Coding classes in Stratum, where averaging three correct densities gives a wrong one',
  capsuleQ: 'What are the best coding classes in Stratum, Eindhoven?',
  capsule: 'Coding classes in Stratum reach a stadsdeel of three statistics office wijken, Oud-Stratum, Kortonjo and Putten, all three read for this page, holding 35,779 residents on 1,141 hectares of land in January 2026. Their densities are 6,156, 2,777 and 2,361 residents per square kilometre of land. The mean of those three is 3,765, and it is wrong: Stratum as a whole has 3,136, because Oud-Stratum is the densest wijk and has the least land. Add the people, add the land, divide once. Modern Age Coders teaches live online in English from the Joriskwartier to Leenderheide, ages 6 to 67, first lesson free, then USD 100 monthly in a group of five to ten or USD 150 one to one.',
  lead: 'Three numbers, each of them correct, each of them published or checked against a published count, and the most natural thing anyone could do with them, take their average, produces a figure about twenty percent too high. Nothing is wrong with Oud-Stratum, Kortonjo or Putten. What goes wrong is the one step that combines them, because an average of three densities treats the three wijken as equal, and they are not equal in the thing a density divides by. The same step is taken every day in code, when somebody averages the accuracy of each batch, the response time of each server or the pass rate of each class, and it is one of the few mistakes in data work that can be caught with nothing more than a pencil.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Stratum, Eindhoven.',

  picks: {
    eyebrow: 'Course picks for Stratum',
    h2: 'Four courses for the south-east of Eindhoven',
    intro: 'A groep 6 child in Kortonjo who wants to make something move on a screen, a teenager in Putten whose phone is full of ideas for apps nobody has built, a student in Oud-Stratum whose model looks accurate on every batch and disappointing on the whole test set, and an adult near the Stadswandelpark who averages a column of percentages every Monday. Any of the four can start with an hour that is taught in full and billed at nothing.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Typed Python where a child shares out sweets between tables of different sizes and finds that the fair answer is not the average of the tables.' },
      { course: 'complete-app-development-masterclass-for-teens', band: 'Ages 13 to 18', note: 'A working application built screen by screen, including the summary screen that totals everything correctly instead of averaging the averages.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'Python that keeps numerators and denominators as separate columns until the last line, so a combined rate is always a real rate.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Spreadsheets and dashboards read by one habit: before averaging a column of rates, ask how big each row is.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Stratum today',
      h2: 'Three wijken, and together they are exactly the stadsdeel',
      intro: 'Stratum was a municipality in its own right until 1 January 1920, when it was one of the five villages joined to the old town to form the Eindhoven of today. The statistics office now divides it into three wijken, Oud-Stratum, Kortonjo and Putten, and their areas add to 1,153 hectares, 1,141 of land and 12 of water. The encyclopaedia gives the stadsdeel as 11.53 square kilometres, 11.41 of them land and 0.12 water, which is the same figure to the hectare and the best available check that these three wijken are the whole of Stratum and nothing else. Their 2026 resident counts add to 35,779. The office publishes no stadsdeel total, so that figure is this page adding three published rows, and it is labelled as such wherever it appears.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Oud-Stratum, the old village core', p: '12,188 residents on 198 hectares of land, the densest of the three by a wide margin. Eight buurten in the office list, among them the Joriskwartier around the Sint-Joriskerk, the Irisbuurt, Tuindorp and the two halves of the Elzent. Households are small, averaging 1.6 people, and 58 percent of the 6,476 dwellings are rented.' },
          { h3: 'Kortonjo, the smallest by people', p: '8,860 residents on 319 hectares, six buurten from Genneperzijde to Roosten, including the sports ground on the Aalsterweg. The oldest age profile of the three, with 20 percent over sixty-five, and the highest share of owner-occupied dwellings, 2,479 of 4,132, which is 60 percent.' },
          { h3: 'Putten, the largest by land', p: '14,731 residents on 624 hectares, more than half of all the land in Stratum, in eleven buurten that run south to Gijzenrooi, Riel, Schuttersbosch and Leenderheide. The most children of the three, 2,425 under fifteen, and four primary schools teaching 1,197 pupils.' }
        ] },
        { kind: 'spec', title: 'A village with a radio monument', p: 'The encyclopaedia entry for Stratum lists the landmarks that make it more than a set of figures. The Sint-Joriskerk, a neo-gothic cruciform basilica, was consecrated in 1885. The Witte Dorp, a quarter of entirely white-painted houses between the old core of Stratum and the country house De Burgh, was built by Willem Dudok from 1937 to 1939, and De Burgh itself was built in 1912 to a design by Joseph Cuypers. In the Stadswandelpark stands the Radiomonument, from 1936, which recalls the first wireless radio link made in 1927 with what was then Nederlandsch-Indie. A water tower of three white spheres stands on the Antoon Coolenlaan, built in 1970 to a design by Wim Quist; DAF has its plant between the Geldropseweg and the Eindhovens Kanaal; and on the west the stadsdeel is bounded, as it always was, by the Dommel and the Tongelreep, which meet inside the Stadswandelpark.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Three densities',
      h2: 'Three correct densities, and one average that is not',
      intro: 'Each density below is the 2026 resident count divided by the land area the statistics office publishes for that wijk. The published densities are slightly different because they sit on the 2025 counts, 6,210 for Oud-Stratum being 12,295 residents over 198 hectares, so the page recomputes all three on 2026 to keep every figure in one year.',
      body: [
        { kind: 'table', caption: 'Residents per square kilometre of land, January 2026', head: ['Wijk or combination', 'Residents on land', 'Per square kilometre', 'How much each part counts'], rows: [
          ['Oud-Stratum', '12,188 on 198 ha', '6,156', '17.4 percent of the land; a third of the list'],
          ['Kortonjo', '8,860 on 319 ha', '2,777', '28.0 percent of the land; a third of the list'],
          ['Putten', '14,731 on 624 ha', '2,361', '54.7 percent of the land; a third of the list'],
          ['Mean of the three densities', 'none: it averages ratios', '3,765', 'every wijk counted as a third'],
          ['Stratum, all people over all land', '35,779 on 1,141 ha', '3,136', 'every hectare counted once']
        ] },
        { kind: 'p', text: 'The mean of the three densities is 3,765 residents per square kilometre. The density of Stratum is 3,136. The first figure is 20 percent higher than the second, and the only thing that separates them is how much each wijk is allowed to count. A density is people divided by land, so the land is what every part should be weighted by. Oud-Stratum has 17.4 percent of the land and a density two and a half times that of the other two, and the plain mean gives it a third of the vote, nearly double its share. Putten, which is more than half the land, is cut to a third. Weight each density by its land and the answer returns to exactly 3,136, which is simply the long way round to people over land. Using the published 2025 densities instead gives a mean of 3,795, and the error is the same size.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'All three wijken of Stratum, row by row, and every sum done here',
      intro: 'Each wijk as the statistics office publishes it, with the year attached to each figure, then the additions and divisions this page performs, then the things it declines to compute.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Wijk Oud-Stratum', p: '12,188 residents (2026), 12,295 in 2025; 7,295 households averaging 1.6, 4,415 single-person at 61 percent; 1,230 under fifteen, 2,055 aged fifteen to twenty-five, 4,615 aged twenty-five to forty-five at 38 percent, 2,360 aged forty-five to sixty-five, 1,890 over sixty-five; 200 hectares, 198 land and 2 water; published density 6,210 (2025); 6,476 dwellings, 2,720 owner-occupied at 42 percent and 3,756 rented at 58; estimated average value 427,000 euro (2025); income 42,600 euro (2024); eight buurten; 2 primary establishments with 621 pupils and 1 secondary with 1,145; 580 higher professional and 830 university students resident.' },
          { h3: 'Wijk Kortonjo', p: '8,860 residents (2026); 4,345 households averaging 2.0, 2,015 single-person at 46 percent; 1,275 under fifteen, 1,325 aged fifteen to twenty-five, 2,215 aged twenty-five to forty-five, 2,305 aged forty-five to sixty-five, 1,765 over sixty-five at 20 percent; 322 hectares, 319 land and 3 water; published density 2,799; 4,132 dwellings, 2,479 owner-occupied at 60 percent and 1,653 rented; estimated average value 489,000 euro (2025); income 40,400 euro (2024); six buurten; 2 primary establishments with 901 pupils and no secondary; 310 higher professional and 300 university students resident.' },
          { h3: 'Wijk Putten', p: '14,731 residents (2026); 7,295 households averaging 2.0, 3,220 single-person at 44 percent; 2,425 under fifteen at 16 percent, 1,730 aged fifteen to twenty-five, 4,400 aged twenty-five to forty-five, 3,850 aged forty-five to sixty-five, 2,325 over sixty-five; 631 hectares, 624 land and 7 water; published density 2,375; 6,972 dwellings, 3,207 owner-occupied at 46 percent and 3,765 rented at 54; estimated average value 421,000 euro (2025); income 35,500 euro (2024); eleven buurten; 4 primary establishments with 1,197 pupils and 2 secondary with 688; 380 higher professional and 270 university students resident.' },
          { h3: 'The additions', p: 'Residents 12,188 plus 8,860 plus 14,731 is 35,779 (2026). Land 198 plus 319 plus 624 is 1,141 hectares, and total area 1,153. Households 18,935, of them 9,650 single-person. Dwellings 17,580, of them 8,406 owner-occupied. Under fifteen, 4,930. Primary establishments 8 teaching 2,719 pupils; secondary 3 teaching 1,833. Every addition covers all three wijken and one year, which is the only condition on which a stadsdeel sum means anything.' },
          { h3: 'The divisions', p: 'Densities on land: 6,156, 2,777, 2,361 and, for Stratum, 3,136; mean of the three, 3,765, which is 20 percent too high; weighted by residents instead of land, 3,757. Single-person households: mean of the three shares 50.3 percent, true share 9,650 of 18,935, 51.0. Owner-occupied: mean of the shares 49.3 percent, true share 8,406 of 17,580, 47.8. Nothing else was calculated.' },
          { h3: 'What the page does not say', p: 'It gives no stadsdeel figure for income or dwelling value, because each is an average over a population whose size this page does not have for all three wijken, and averaging averages without their weights is the error the page is about. It does not read the 2023 encyclopaedia count against the 2026 sum as growth. And it does not reconcile the 22 buurten of the encyclopaedia with the 25 of the office list.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no link with Stratum, with Eindhoven, with DAF or with any school or landmark named on this page, and nothing here suggests otherwise. The three wijk rows were each read from their own statistics office page: residents and ages for 2026, households, dwellings and dwelling values for 2025, resident students for 2025, income for 2024. The 1920 merger, the 11.53 square kilometres and the landmarks, from the Sint-Joriskerk to the water tower, come from the encyclopaedia entry for the stadsdeel, quoted rather than enlarged upon.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Add the tops, add the bottoms, divide once',
      intro: 'A rate is a pair of counts. Combine the counts and divide at the end, and the combined rate is always right. Combine the rates and it is right only by luck.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Keep both halves of every rate', p: 'A density is residents over land; a share is a count over a group. Store the two counts, not the finished ratio, because once 6,156 has been written down on its own there is no way to know that it came from 12,188 people and 198 hectares, and the hectares are what the next step needs.' },
          { h3: '2. Sum each half across the parts', p: 'All the people in Stratum: 35,779. All the land: 1,141 hectares. Those sums are legitimate because the three wijken are the complete stadsdeel, checked against its published area, and every count carries the same year. A sum over part of the set, or over mixed years, would fail before any division started.' },
          { h3: '3. Then divide, once, at the very end', p: '35,779 over 1,141 hectares is 3,136 to the square kilometre. If the parts were ever to be averaged instead, each would have to be weighted by its own denominator, its land, and that weighted average comes back to 3,136 exactly, which is why the shortcut is never worth taking.' }
        ] },
        { kind: 'table', caption: 'One mistake, three measures, three different errors', head: ['Measure', 'Mean of the three wijk figures', 'Totals divided once', 'Size of the error, and why'], rows: [
          ['Residents per square kilometre of land', '3,765', '3,136', '20 percent too high: the densest wijk has the least land and gets a third of the vote'],
          ['Share of households with one person', '50.3 percent', '51.0 percent', '0.6 points too low: Kortonjo holds 23 percent of the households and is counted as a third'],
          ['Share of dwellings owner-occupied', '49.3 percent', '47.8 percent', '1.5 points too high: Kortonjo, at 60 percent owners, holds 23.5 percent of the dwellings and is counted as a third']
        ] },
        { kind: 'table', caption: 'The same step, taken in five other places', head: ['What gets averaged', 'The tempting figure', 'The honest figure', 'Why they differ'], rows: [
          ['Model accuracy per batch, last batch of four examples', 'the mean of the batch accuracies', 'all correct predictions over all examples', 'four examples count as much as two hundred and fifty-six'],
          ['Page load time per server', 'the mean of each server average', 'total time over total requests', 'a quiet server with one slow page counts like the busiest one'],
          ['Star ratings across a shop', 'the mean of each product average', 'all the stars over all the ratings', 'two reviews weigh the same as two thousand'],
          ['Pass rates across a school', 'the mean of each class pass rate', 'all passes over all pupils', 'a class of eight counts like a class of thirty'],
          ['Density across Stratum', 'the mean of three wijk densities, 3,765', 'residents over land, 3,136', 'Oud-Stratum is 17 percent of the land and a third of the list']
        ] },
        { kind: 'callout', h3: 'The weight belongs to the bottom of the fraction', p: 'The size of the error is not random, and seeing why makes it easy to predict. An unweighted mean gives every part the same weight, and the true figure gives each part a weight equal to its share of the denominator. The error comes from parts whose weight is misstated and whose value sits far from the rest, and it needs both. In density, Oud-Stratum is both: badly overweighted and two and a half times as dense as its neighbours, so the mean is 20 percent out. In the household measures something tidier happens. Oud-Stratum and Putten each publish exactly 7,295 households, so the unweighted mean misweights them by identical amounts and the whole error reduces to how far Kortonjo sits from the other two; it sits close, so the mean is out by only 0.6 points. The wrong weight is its own trap: weight the three densities by residents instead of land and the answer is 3,757, which is not the density of Stratum either, but the density at which the average resident lives, a real quantity with uses in planning and a wrong one if reported as the first. In code the fix is structural. Keep numerators and denominators as separate columns, sum them with the grouping, and divide in the last line; in a training loop, accumulate correct predictions and example counts rather than per-batch accuracies, or the short final batch quietly gets the same say as a full one. An unweighted mean is sometimes exactly what is wanted, when the question is about the typical wijk rather than about Stratum, but that is a different question and it should be asked out loud.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for combining rates without inventing one',
      intro: 'Densities, shares, averages, conversion rates, accuracies and response times all have a top and a bottom, and all of them break the same way when the bottoms are thrown away too early. Practised on three wijken whose own figures are all correct.',
      body: [
        { kind: 'table', caption: 'Combining parts into a whole that is really the whole', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Store counts, not ratios', 'Keep the numerator and denominator of every rate as their own fields', 'A rate that cannot be combined', 'Figures that can be added up later'],
          ['Check the set is whole', 'Confirm the parts cover the entire area, group or period before summing', 'A total that is really a subtotal', 'Sums that mean what they say'],
          ['Sum, then divide', 'Add the tops and the bottoms separately, and divide last', 'An average of averages', 'The real combined rate'],
          ['Name the weight', 'If averaging parts, weight each by its own denominator', 'A mean weighted by accident', 'The same answer by the long route'],
          ['Say which question', 'Use an unweighted mean only for the typical part, and label it so', 'A typical figure reported as a total', 'Two honest numbers, not one muddled one']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'Two tables at a party, one with two children and four sweets, one with eight children and eight sweets. Each table works out sweets per child, then the class tries to find sweets per child for the whole party, and discovers the average of the two tables is not the answer.' },
          { h3: 'For teenagers', p: 'A small Python program that scores a model batch by batch, with an awkward last batch of four examples. First the mean of the batch scores, then the true score from the totals, then a hunt for the exact line of code that makes them disagree.' },
          { h3: 'For adults', p: 'A column of percentages from a real report, each row with its own size. Adults compare the AVERAGE of the column with the total divided by the total, and a surprising number find a figure they have been quoting in meetings that was never the real one.' }
        ] },
        { kind: 'p', text: 'The figures behind this section are the three published wijk rows and nothing else: residents and ages at 2026, households and dwellings at 2025, land area as the office gives it. The completeness check is the match between the three wijk areas and the 11.53 square kilometres of the encyclopaedia entry. Every sum on this page adds all three wijken at one year, and every division is set out above so that a reader with a calculator can reproduce it in a couple of minutes.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From sweets at two party tables to a model scored on the whole test set',
    intro: 'Where a learner starts is settled in the free hour, by watching how they handle one real problem. Which wijk they live in and how old they are decide nothing.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Fair shares', p: 'Children share things out between groups of different sizes and see why the fair answer is not the middle one.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Tops and bottoms', p: 'Learners keep both numbers of every fraction and add them up before dividing.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'The short last batch', p: 'Teenagers score a model two ways and find the line that lets a tiny batch outvote a big one.', courses: ['complete-app-development-masterclass-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'The column of percentages', p: 'Adults recombine a real report from its counts and find out which figures were ever real.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an AI for the density of Stratum and it may average the three wijken. Why should a teenager in Putten add the land first?',
    intro: 'Because the average of the three is 3,765 and Stratum is 3,136.',
    p1: 'Hand a language model the three wijk rows and ask for the density of Stratum, and there is a fair chance it will average the three densities, because that is what the question looks like and what a great many tables on the web do. The answer arrives with a comma in the right place and a confident sentence around it, and it is a fifth too high. Nothing in the reply looks wrong, because every input was correct; the error is in a step that does not appear in the output at all. A reader who sees only 3,765 has no way to know that Oud-Stratum, with 17 percent of the land, was allowed a third of the say.',
    p2: 'The learner who has written the loop that sums correct predictions and example counts separately, and then watched a single short batch drag the averaged score around, carries a reflex that no amount of reading supplies: whenever two rates are combined, ask what each was divided by. Machine learning drills this constantly, because every evaluation is a combination of parts, and the parts are almost never the same size. Models will keep producing averages of averages as long as people write them. Noticing when one has been produced is still a job for a person who knows where the denominators went.',
    closer: 'The case for a child in Stratum learning to code in 2026 is therefore not DAF down the road or the campus to the north. It is that a program that keeps both halves of every fraction cannot make this mistake, and a person who has written one stops making it too.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for Oud-Stratum, Kortonjo and Putten',
    intro: 'Stratum runs from the old village streets by the Sint-Joriskerk to the woods at Leenderheide, and whichever end a family lives at, the scarce thing is a free evening rather than a route to a classroom.',
    cells: [
      { h3: 'No ride across the ring', p: 'From Putten or the Elzent a classroom anywhere else in the city is a bike ride each way, twice a week, in every kind of weather. A lesson at the kitchen table removes the ride and keeps the hour, and an hour that costs no travel is the one that survives November.' },
      { h3: 'School words stay in Dutch', p: 'Groep, havo, vwo and profielkeuze are not translated during a lesson. A Stratum child reads them on every letter home and hears them at every parents evening, so they are used in their own form and nobody pauses to convert them.' },
      { h3: 'A real lesson, and no sales pitch', p: 'The free hour is taught, with a problem the learner actually solves, and it ends with a placement, a named course and a fixed weekly time. There is no card to enter and no call afterwards dressed up as a follow-up lesson.' },
      { h3: 'Classmates by stage, not by postcode', p: 'A group is five to ten learners at the same point in the same subject. Stratum holds 4,930 children under fifteen, and even so, five at one exact stage wanting one exact hour is rare anywhere, so groups are formed from a worldwide pool and start without a waiting list.' },
      { h3: 'Holidays set by regio Zuid', p: 'Twice a week, about eight lessons a month, at an hour that does not move. Noord-Brabant schools take regio Zuid holidays, which fall at different times from the west of the country, and the teaching calendar follows them from the first month.' },
      { h3: 'One clock changes, and it is the Dutch one', p: 'India runs three and a half hours ahead of Eindhoven in summer and four and a half in winter, and India never changes its clocks. After school, the early evening and weekend mornings all stay open whatever the season.' }
    ],
    spec: { title: 'Eight primary schools, and why the group still comes from everywhere', p: 'Stratum has eight primary establishments teaching 2,719 pupils and three secondary establishments teaching 1,833, which is a good deal of schooling for three wijken. None of that changes how a class is formed. Two learners from the same school are rarely at the same stage in Python, and a group that waits for five from one stadsdeel may wait a year. Placement is therefore by stage alone, from a pool that spans every age from 6 to 67 and every time zone the teachers serve.' }
  },

  fees: {
    h2: 'The fee for Stratum, set out in dollars',
    intro: 'Printed in full on the page so that nobody has to ask for it.',
    first: 'A complete taught lesson that ends with a level and a named course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'The same dollar figure applies in every country, with no euro version, so a flat in Oud-Stratum and a house in Kortonjo pay exactly the same. Nothing is charged until the free lesson has fixed a course and an hour, and payment is then handled over WhatsApp. What happens with a pause, a change of plan or a missed week is written out on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, word for word as they were posted',

  book: {
    h2: 'Tell us the stage, not the street',
    intro: 'The first task might be sharing sweets between tables of different sizes, a model scored batch by batch and then as a whole, or a column of percentages rebuilt from its counts.',
    success: 'Thank you. Your Stratum class request has been sent.'
  },

  faq: {
    h2: 'Stratum coding class questions',
    intro: 'The stadsdeel, its three wijken, one way of combining numbers that goes wrong, the teaching and the terms.',
    items: [
      { q: 'What does Stratum include?', a: 'Three statistics office wijken: Oud-Stratum, Kortonjo and Putten. Their areas add to 1,153 hectares, 1,141 of them land, matching the 11.53 square kilometres the encyclopaedia gives for the stadsdeel. Their 2026 resident counts add to 35,779. The office lists 25 buurten across the three, eight, six and eleven; the encyclopaedia says 22, and this page uses the office list.' },
      { q: 'How densely populated is Stratum?', a: 'About 3,136 residents per square kilometre of land in 2026, which is 35,779 residents over 1,141 hectares. The three wijken differ a great deal: 6,156 in Oud-Stratum, 2,777 in Kortonjo and 2,361 in Putten. The average of those three, 3,765, is not the density of Stratum, because it gives the small, dense Oud-Stratum as much weight as Putten, which has more than half the land.' },
      { q: 'Why is the average of the three wijk densities wrong?', a: 'Because a density divides by land, and the three wijken have very different amounts of it: 198, 319 and 624 hectares. A plain average counts each wijk as a third, while the true figure counts each hectare once. Weight each density by its land and the answer returns to 3,136. The same rule applies to any rate: add the tops, add the bottoms, divide once.' },
      { q: 'Was Stratum once a separate town?', a: 'Yes. Stratum was a municipality until 1 January 1920, when it was joined with the old town of Eindhoven and the villages of Woensel, Strijp, Gestel and Tongelre to form the present municipality. Its old core survives as the wijk Oud-Stratum, around the Sint-Joriskerk, consecrated in 1885.' },
      { q: 'What is the Radiomonument in the Stadswandelpark?', a: 'A monument from 1936 that recalls the first wireless radio link, made in 1927, with what was then Nederlandsch-Indie. It stands in the Stadswandelpark, where the Tongelreep flows into the Dommel on the western edge of Stratum, and it is a fitting landmark for a stadsdeel where a great deal of Eindhoven engineering has always lived.' },
      { q: 'How many schools and children are there in Stratum?', a: 'Adding the three wijk rows: 4,930 residents under fifteen, eight primary establishments teaching 2,719 pupils and three secondary establishments teaching 1,833. Putten has the most children, 2,425, and the most primary schools, four. Kortonjo has no secondary establishment. The page makes no claim about the quality or results of any of them.' },
      { q: 'Are classes in Dutch, and when do they run?', a: 'Lessons are in English, with the Dutch school words kept as they are. The teachers are three and a half hours ahead of Stratum in summer and four and a half in winter, so after-school, early-evening and weekend slots are all available. One weekly time is fixed at the free lesson, and the calendar follows regio Zuid holidays.' },
      { q: 'Is there a Modern Age Coders classroom in Stratum?', a: 'No, and none is claimed here, elsewhere in Eindhoven or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Stratum coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or address. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Eindhoven and beyond',
    h2: 'From Stratum into the rest of Eindhoven and Brabant',
    html: 'The whole-city picture, with Brainport, the international schools and the figures the district pages leave alone, is on <a class="cg-inline-link" href="/coding-classes-in-eindhoven">coding classes in Eindhoven</a>. Across the Dommel to the north-west lies the old town, on <a class="cg-inline-link" href="/coding-classes-in-eindhoven-centrum">Eindhoven Centrum</a>, a single wijk where the campus is the youngest place and still not where the young people are. Gestel, Strijp, Woensel-Zuid, Woensel-Noord and Tongelre follow as their pages are written, and the province around all of them is <a class="cg-inline-link" href="/coding-classes-in-noord-brabant">Noord-Brabant</a>. For a learner who wants to go straight to machine learning, the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a> is the more direct entrance, and every page in the series leads back to the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>.',
    waLabel: 'Ask on WhatsApp instead'
  },

  footerHeading: 'Stratum, Eindhoven and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-eindhoven', label: 'Eindhoven' },
    { href: '/coding-classes-in-eindhoven-centrum', label: 'Eindhoven Centrum' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-stm .cg-hero-grid { grid-template-columns: 1fr 1.05fr; align-items: end; gap: clamp(1.4rem, 3.4vw, 2.6rem); }
.cg-root.cg-stm .cg-hero h1 { font-weight: 600; letter-spacing: -0.02em; line-height: 1.07; }
.cg-root.cg-stm .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 1.1rem; }
.cg-root.cg-stm .cg-eyebrow { letter-spacing: 0.12em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-stm .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.02em; }
.cg-root.cg-stm .cg-grid-3 { gap: clamp(1rem, 2vw, 1.6rem); }
.cg-root.cg-stm .cg-card { border-radius: 2px; border-left: 3px solid var(--cg-accent-soft); }
.cg-root.cg-stm .cg-table caption { letter-spacing: 0.02em; font-weight: 700; }
.cg-root.cg-stm .cg-table td { font-variant-numeric: tabular-nums lining-nums; }
.cg-root.cg-stm .cg-table td:nth-child(3) { font-weight: 700; }
.cg-root.cg-stm .cg-ladder-col { border-top: 2px solid var(--cg-accent-soft); padding-top: 0.9rem; }
`,

  dossier: {
    curriculumAuthority: 'Stadsdeel Stratum, Eindhoven, Noord-Brabant: a municipality until 1 January 1920; three statistics office wijken, Oud-Stratum, Kortonjo and Putten, whose areas add to 1,153 hectares, 1,141 land and 12 water, matching the encyclopaedia 11.53 square kilometres with 11.41 land and 0.12 water; 25 buurten in the office list (8, 6 and 11) against 22 in the encyclopaedia. Complete-set 2026 sum 35,779 residents, flagged as arithmetic on three published rows. Oud-Stratum 12,188 residents (2026; 12,295 in 2025) on 198 hectares of land, published density 6,210 on the 2025 count, 7,295 households averaging 1.6 with 4,415 single at 61 percent, 6,476 dwellings, 42 percent owner-occupied, estimated 427,000 euro, income 42,600 euro (2024), buurten including the Joriskwartier, Irisbuurt, Tuindorp and Elzent-Noord and Elzent-Zuid, 2 primary with 621 pupils, 1 secondary with 1,145. Kortonjo 8,860 on 319 hectares, published density 2,799, 4,345 households averaging 2.0, 4,132 dwellings, 60 percent owner-occupied, estimated 489,000 euro, income 40,400 euro, 20 percent over sixty-five, 2 primary with 901 pupils. Putten 14,731 on 624 hectares, published density 2,375, 7,295 households averaging 2.0, 6,972 dwellings, 46 percent owner-occupied, estimated 421,000 euro, income 35,500 euro, 2,425 under fifteen, eleven buurten to Gijzenrooi, Riel, Schuttersbosch and Leenderheide, 4 primary with 1,197 pupils, 2 secondary with 688. Landmarks from the encyclopaedia: Sint-Joriskerk consecrated 1885, the Witte Dorp by Willem Dudok 1937 to 1939, De Burgh 1912 by Joseph Cuypers, the Radiomonument of 1936 in the Stadswandelpark recalling the 1927 wireless link with Nederlandsch-Indie, the three-sphere water tower on the Antoon Coolenlaan by Wim Quist 1970, DAF between the Geldropseweg and the Eindhovens Kanaal, the Dommel and Tongelreep as western boundary. Regio Zuid holidays. The district page argues that a mean of ratios is not a ratio of sums; Gelderland owns the mean of a mixture, Gadong the choice of denominator, Venlo the mismatched denominator, Tilburg the zoning effect, and the partial-average rule on several district pages concerns subsets, where this page has the complete set.',
    localProject: 'Three correct densities, averaged, give a wrong one. Recomputed on the 2026 counts and the published land, Oud-Stratum has 6,156 residents per square kilometre, Kortonjo 2,777 and Putten 2,361; their mean is 3,765, while Stratum as a whole, 35,779 residents over 1,141 hectares, has 3,136, so the mean is 20 percent too high. The published 2025 densities give a mean of 3,795 and the same error. The cause is weighting: a density divides by land, so each wijk should count in proportion to its land, and Oud-Stratum, the densest, has 17.4 percent of the land but a third of the vote in a plain mean, while Putten, 54.7 percent of the land, is cut to a third. Weight by land and the mean returns exactly to 3,136. Weighting by residents instead gives 3,757, the density at which the average resident lives, a real quantity that is wrong only if reported as the density of Stratum. The page shows the error is predictable: it needs a part that is both misweighted and far from the rest. For single-person households the plain mean is 50.3 percent against a true 51.0, and because Oud-Stratum and Putten both publish exactly 7,295 households, the whole error reduces to how far Kortonjo sits from the other two. For owner occupation the plain mean is 49.3 against a true 47.8, driven by Kortonjo at 60 percent owners holding 23.5 percent of the dwellings. The programming form is the averaged per-batch accuracy with a short final batch, the mean of server averages, the mean of product ratings and the mean of class pass rates; the fix is structural, keeping numerators and denominators as separate fields, summing them with the grouping and dividing in the last line. Distinct from the mean of a mixture (Gelderland), where one average of two populations describes neither; from the partial-average rule on several district pages, which forbids averaging a subset, whereas here the set is complete and checked against the published area; from the choice of denominator (Gadong) and the mismatched denominator (Venlo), since every denominator here is the right one and the error is only in how the parts are combined; and from the zoning effect (Tilburg). An unweighted mean remains correct for the question about the typical wijk, and the page asks that it be labelled as such.',
    requiredMentions: [
      '12,188',
      '14,731',
      '35,779',
      '17,580',
      '3,136',
      '1,141',
      '6,210',
      '2,799',
      'Sint-Joriskerk',
      'Radiomonument',
      'Stadswandelpark',
      'Antoon Coolenlaan',
      'Joriskwartier',
      'Leenderheide'
    ],
    sources: [
      { claim: 'Wijk Oud-Stratum, Eindhoven: 12,188 inwoners (2026), 12,295 (2025); bevolkingsdichtheid 6,210 per km2 (2025); 200 hectare, 198 land, 2 water; 7,295 huishoudens (2025), 4,415 eenpersoonshuishoudens, gemiddelde huishoudensgrootte 1.6; ages 1,230 (0 to 15), 2,055 (15 to 25), 4,615 (25 to 45), 2,360 (45 to 65), 1,890 (65+); woningvoorraad 6,476 (2025), 2,720 koopwoningen (42 percent) and 3,756 huurwoningen (58 percent); gemiddelde WOZ 427,000 euro (2025); gemiddeld inkomen 42,600 euro (2024); buurten Irisbuurt, Rochusbuurt, Elzent-Noord, Tuindorp, Joriskwartier, Elzent-Zuid, Looiakkers, Bloemenplein; 2 vestigingen basisonderwijs with 621 leerlingen, 1 voortgezet onderwijs with 1,145; studenten HBO 580, WO 830.', url: 'https://allecijfers.nl/wijk/oud-stratum-eindhoven/' },
      { claim: 'Wijk Kortonjo, Eindhoven: 8,860 inwoners (2026); 4,345 huishoudens averaging 2.0, 2,015 eenpersoonshuishoudens (46 percent); ages 1,275 (0 to 15), 1,325 (15 to 25), 2,215 (25 to 45), 2,305 (45 to 65), 1,765 (65+); 322 hectare, 319 land, 3 water; bevolkingsdichtheid 2,799 per km2; woningvoorraad 4,132, 2,479 koopwoningen (60 percent) and 1,653 huurwoningen (40 percent); gemiddelde WOZ 489,000 euro (2025); gemiddeld inkomen 40,400 euro (2024); buurten Genneperzijde, Gerardusplein, Kerstroosplein, Sportpark Aalsterweg, Eikenburg, Roosten; 2 vestigingen basisonderwijs with 901 leerlingen, 0 voortgezet onderwijs; studenten HBO 310, WO 300.', url: 'https://allecijfers.nl/wijk/kortonjo-eindhoven/' },
      { claim: 'Wijk Putten, Eindhoven: 14,731 inwoners (2026); 7,295 huishoudens averaging 2.0, 3,220 eenpersoonshuishoudens (44 percent); ages 2,425 (0 to 15), 1,730 (15 to 25), 4,400 (25 to 45), 3,850 (45 to 65), 2,325 (65+); 631 hectare, 624 land, 7 water; bevolkingsdichtheid 2,375 per km2; woningvoorraad 6,972, 3,207 koopwoningen (46 percent) and 3,765 huurwoningen (54 percent); gemiddelde WOZ 421,000 euro (2025); gemiddeld inkomen 35,500 euro (2024); buurten Poeijers, Burghplan, Puttense Dreef, Sintenbuurt, Nieuwe Erven, Tivoli, Kruidenbuurt, Gijzenrooi, Riel, Schuttersbosch, Leenderheide; 4 vestigingen basisonderwijs with 1,197 leerlingen, 2 voortgezet onderwijs with 688; studenten HBO 380, WO 270.', url: 'https://allecijfers.nl/wijk/putten-eindhoven/' },
      { claim: 'Stadsdeel Stratum: De gemeente Eindhoven werd op 1 januari 1920 gevormd uit het oude stadje Eindhoven en de omliggende gemeenten Woensel, Strijp, Gestel, Stratum en Tongelre. Het stadsdeel Stratum bestaat uit 3 wijken en 22 buurten. Infobox (CBS Kerncijfers wijken en buurten 2023): 35.665 inwoners, 17.285 woningen, oppervlakte 11,53 km2, land 11,41 km2, water 0,12 km2, dichtheid 3.093 inw./km2. Sint-Joriskerk: in 1885 ingewijd, een neogotische kruisbasiliek. Witte Dorp: woonbuurt tussen de oude kern van Stratum en het kasteel De Burgh, geheel wit geschilderde huizen, gebouwd door architect Willem Dudok van 1937 tot 1939. De Burgh: in 1912 gebouwd, architect Joseph Cuypers. Radiomonument: in het Stadswandelpark, monument uit 1936 dat herinnert aan de eerste draadloze radioverbinding die in 1927 werd gerealiseerd met het toenmalige Nederlandsch-Indie. Watertoren met drie witte bollen aan de Antoon Coolenlaan, gebouwd in 1970 naar ontwerp van architect Wim Quist. Tussen de Geldropseweg en het Eindhovens Kanaal ligt de vestiging van DAF. Stratum wordt vanouds in het westen begrensd door de Dommel en de Tongelreep, welke laatste in het Stadswandelpark in de Dommel stroomt.', url: 'https://nl.wikipedia.org/wiki/Stratum_(Eindhoven)' },
      { claim: 'Gemeente Eindhoven: 249,783 inwoners (2026); 130,304 huishoudens (2025); 20 wijken en 116 buurten.', url: 'https://allecijfers.nl/gemeente/eindhoven/' },
      { claim: 'School holiday regions: regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'A density of Stratum of 3,765. That is the unweighted mean of the three wijk densities, and the page shows it as the error, not as a figure.',
      'Any comparison of the encyclopaedia density of 3,093 with the 3,136 computed here. The first divides a 2023 count by total area including water, the second a 2026 sum by land only.',
      'Any growth read from the 35,665 residents of 2023 in the encyclopaedia to the 35,779 summed here for 2026. Different sources, different years, and a sum against a published total.',
      'A stadsdeel average income or dwelling value. Each is an average over a population, earners or valued dwellings, whose size is not available here for all three wijken, so no correct weights exist.',
      'Any reconciliation of the 22 buurten in the encyclopaedia with the 25 in the statistics office list. The page uses the office list and says so.',
      'Anything about DAF beyond the location sentence in the encyclopaedia, including workforce, production or any link with local schools.',
      'The claim that one average describes nobody when two groups are mixed. That is the Gelderland page argument, and the three Stratum wijken are not treated as a mixture here.',
      'Any confusion of the inverse, share of a place against share of a group. That is the Eindhoven Centrum page argument.',
      'Anything the Eindhoven city page owns, including the named secondary schools and their addresses, the High Tech Campus and the Indian-origin figures.'
    ]
  }
};
