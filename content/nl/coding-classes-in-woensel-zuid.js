'use strict';
// Woensel-Zuid: the stadsdeel just north of the Eindhoven centre, three CBS
// wijken, all three read, Oud-Woensel, Erp and Begijnenbroek.
// Spine: the encyclopaedia boxes for Woensel-Zuid and Woensel-Noord carry
// each other's figures. Every check a box can run on itself still passes,
// because each is symmetric under the swap; only a keyed check against the
// office areas of the named wijken sees it.

module.exports = {
  slug: 'coding-classes-in-woensel-zuid',
  code: 'wsz',
  accent: '#615927',
  accentRationale: 'Woensel-Zuid: a dark olive, well away from the Dommel teal of the Eindhoven city page, the brick red of Strijp and the rose of Eindhoven Centrum on either side, and nearest to Zuid-Holland, which it does not link to',
  pageType: 'district',
  place: {
    name: 'Woensel-Zuid',
    eyebrow: 'Woensel-Zuid, Eindhoven',
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
  routeLabel: 'Woensel-Zuid, Eindhoven, Netherlands',
  title: 'Coding Classes in Woensel-Zuid, Eindhoven | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in Woensel-Zuid, Eindhoven for ages 6 to 67, in Oud-Woensel, Erp and Begijnenbroek. The first lesson is free.',
  ogDescription: 'Live online coding, Python and AI in Woensel-Zuid, on a page about a record that passes every check it can run on itself and is still wrong.',
  twitterDescription: 'Classes in Woensel-Zuid for ages 6 to 67, a USD fee in full and a free first lesson.',
  ogImageCourse: 'python-ai-automation-masterclass-college',
  verifiedOn: '11 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Woensel-Zuid Learners',
    description: 'Ability-placed online coding, Python, AI, app building and mathematics for children, teenagers and adults in Oud-Woensel, Erp and Begijnenbroek, taught in English.'
  },

  h1: 'Coding classes in Woensel-Zuid, where a record can pass every check and still belong to the neighbours',
  capsuleQ: 'What are the best coding classes in Woensel-Zuid, Eindhoven?',
  capsule: 'Coding classes in Woensel-Zuid reach a stadsdeel of three statistics office wijken, Oud-Woensel, Erp and Begijnenbroek, all three read, with 42,682 residents in January 2026 on 824 hectares. The encyclopaedia box printed under Woensel-Zuid says 64,790 residents on 18.64 square kilometres, and the box under Woensel-Noord says 42,165 on 8.24. Each box is internally consistent and the two add up exactly to Woensel as a whole, yet 8.24 square kilometres is the area of the three Woensel-Zuid wijken to the hectare. The boxes sit under the wrong headings, and no check that looks only at them can tell. Modern Age Coders teaches live online in English from Limbeek to Hondsheuvels, ages 6 to 67, first lesson free, then USD 100 monthly in a group of five to ten or USD 150 one to one.',
  lead: 'Two small tables of figures sit in the encyclopaedia entry for Woensel, one under the heading Woensel-Zuid and one under Woensel-Noord. Test either of them and it passes: its density is its population divided by its area, its land and water add to its area, and the two tables together add up exactly to the table for Woensel as a whole. They even cite the same source. And they are the wrong way round. The area printed under Woensel-Noord is the area of the three Woensel-Zuid wijken, to the hectare, and the reverse holds too. Every one of the checks above would give exactly the same result if the error were fixed, which is why none of them could ever find it. It is the same reason a plain sum of digits cannot catch two digits swapped in a bank account number, and why the Dutch banks used a test that could.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Woensel-Zuid, Eindhoven.',

  picks: {
    eyebrow: 'Course picks for Woensel-Zuid',
    h2: 'Four courses for the north side of the centre',
    intro: 'A groep 6 child in Erp who wants to make a game, a teenager in Begijnenbroek with an app idea for the Woenselse Markt, a student in Oud-Woensel whose test suite passes every time, even when the code is broken, and an adult in Kronehoef who pastes one sorted column next to an unsorted one every month and has never been caught. The first lesson for each of them is a real one, and it is free.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Typed Python where a child builds a check digit, then swaps two digits on purpose and watches a plain sum miss it and a weighted one catch it.' },
      { course: 'complete-app-development-masterclass-for-teens', band: 'Ages 13 to 18', note: 'A complete app, from first screen to working build, with records matched by their id rather than by where they happen to sit in a list.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'Python and pandas where joins go by key, never by position, and every test is tried against a deliberately broken input first.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Spreadsheets checked against a second source on the row name, for anybody who has ever trusted a total because it added up.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Woensel-Zuid today',
      h2: 'Three wijken between the centre and the ring',
      intro: 'On 1 January 1920 Woensel became part of the municipality of Eindhoven, one of the villages joined to the old town that day. Old Woensel is now two stadsdelen, and the southern one, Woensel-Zuid, is three statistics office wijken: Oud-Woensel, Erp and Begijnenbroek. Their areas add to 824 hectares, 821 of land and 3 of water, and their 2026 counts add to 42,682 residents. The office publishes no stadsdeel total, so that figure is a sum of three published rows, and it is the only population figure this page uses for Woensel-Zuid.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Oud-Woensel, the densest wijk in Eindhoven', p: '11,662 residents on 131 hectares, with a published density of 9,065 to the square kilometre, the highest of the twenty wijken. Five buurten: the Gildebuurt, the Woenselse Watermolen, Hemelrijken, Limbeek-Noord and Limbeek-Zuid. 83 percent of the 6,484 dwellings are rented, the highest share in the city, and two thirds of households hold one person.' },
          { h3: 'Erp, the largest of the three', p: '18,779 residents on 395 hectares, six buurten: Vredeoord, Rapenland, Mensfort, Barrier, Kronehoef and Woensel-West. 10,280 households averaging 1.8 people and 9,215 dwellings, 68 percent rented. Three primary establishments teach 907 pupils and two secondary establishments 731.' },
          { h3: 'Begijnenbroek, older and school-heavy', p: '12,241 residents on 295 hectares of land, six buurten: Eckartdal, the two halves of the Oude Gracht, the Generalenbuurt, Hondsheuvels and one named after the Oude Toren. 2,715 residents are over sixty-five, 22 percent. Six primary establishments teach 1,391 pupils and three secondary establishments 2,312.' }
        ] },
        { kind: 'spec', title: 'A fifteenth-century tower, a church of 1880 and a triangular square', p: 'The encyclopaedia entry for Woensel, which now covers both stadsdelen in one article, gives the landmarks of the old village. The Oude Toren, a brick tower, is all that remains of the medieval Sint-Petruskerk; the fifteenth-century building has three stages. The present Sint-Petruskerk was consecrated in 1880 to a design by H.J. van Tulder, and it only received a new tower in 1912, designed by Louis Kooken. In 1903 the Woenselse Markt was laid out as a triangular square. The page repeats these lines and adds nothing to them, and it does not try to place each landmark in a particular wijk.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Five checks',
      h2: 'Every check a record can run on itself passes',
      intro: 'The two boxes below are copied as printed in the encyclopaedia entry for Woensel, each under its own heading, both citing CBS Kerncijfers wijken en buurten 2023. The office areas in the last row come from the statistics office page for each wijk the same entry lists under each heading.',
      body: [
        { kind: 'table', caption: 'The two Woensel boxes, checked five ways', head: ['Check', 'Box printed under Woensel-Zuid', 'Box printed under Woensel-Noord', 'Result'], rows: [
          ['Residents over area equals the printed density', '64,790 over 18.64 is 3,476', '42,165 over 8.24 is 5,117', 'passes for both'],
          ['Land plus water equals the area', '18.54 plus 0.11, 18.64 within rounding', '8.21 plus 0.03 is 8.24', 'passes for both'],
          ['The two boxes add up to the Woensel box', 'residents 64,790 plus 42,165 is 106,955', 'dwellings 28,676 plus 21,250 is 49,926; area 26.88', 'passes'],
          ['Both cite the same source and year', 'CBS Kerncijfers wijken en buurten 2023', 'CBS Kerncijfers wijken en buurten 2023', 'passes'],
          ['Office area of the wijken listed under the same heading', 'Oud-Woensel, Erp, Begijnenbroek: 824 hectares, 821 land, 3 water', 'Ontginning, Achtse Molen, Aanschot, Dommelbeemd: 1,864 hectares, 1,854 land, 11 water', 'fails for both: each box matches the other list']
        ] },
        { kind: 'p', text: 'The first four checks cannot fail, and not because the boxes are right. Swap the two boxes back and every one of those checks gives exactly the same result: a density inside a box does not care which heading it sits under, a sum is the same in either order, and the source line is identical. A check that returns the same answer with and without an error is not a check for that error. The fifth check is different because it joins each box, through the heading, to something outside the boxes: the areas the statistics office publishes for the wijken named in the same section. There the swap is exact. The box under Woensel-Noord gives 8.24 square kilometres, 8.21 of land and 0.03 of water, and the three Woensel-Zuid wijken cover 824 hectares, 821 of land and 3 of water; the box under Woensel-Zuid matches the four northern wijken just as closely.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'The three wijken, the four areas beside them, and every check made',
      intro: 'Each Woensel-Zuid wijk as the office publishes it, with years; the four Woensel-Noord wijken by area alone, since that is all this page needs from them; then the sums, the checks and the refusals.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Wijk Oud-Woensel', p: '11,662 residents (2026); 7,725 households averaging 1.5, 5,080 single-person at 66 percent; 1,090 under fifteen, 2,440 aged fifteen to twenty-five, 4,955 aged twenty-five to forty-five at 42 percent, 1,970 aged forty-five to sixty-five, 1,235 over sixty-five; 131 hectares, all land; published density 9,065 (2025); 6,484 dwellings, 5,382 rented at 83 percent and 1,102 owner-occupied; estimated average value 311,000 euro (2025), the lowest of the twenty wijken; income 34,000 euro per resident (2024); 2 primary establishments with 510 pupils, no secondary; resident students 720 higher professional and 1,000 university (2025).' },
          { h3: 'Wijk Erp', p: '18,779 residents (2026); 10,280 households averaging 1.8, 5,950 single-person; 2,335 under fifteen, 3,255 aged fifteen to twenty-five, 6,610 aged twenty-five to forty-five, 3,765 aged forty-five to sixty-five, 2,795 over sixty-five; 395 hectares, all land; published density 4,728; 9,215 dwellings, 2,949 owner-occupied at 32 percent and 6,266 rented; estimated 323,000 euro (2025); income 31,000 euro per resident (2024); 3 primary establishments with 907 pupils, 2 secondary with 731; resident students 700 higher professional and 1,090 university.' },
          { h3: 'Wijk Begijnenbroek', p: '12,241 residents (2026); 6,290 households averaging 1.8, 3,205 single-person; 1,480 under fifteen, 1,510 aged fifteen to twenty-five, 3,770 aged twenty-five to forty-five, 2,780 aged forty-five to sixty-five, 2,715 over sixty-five; 298 hectares, 295 land and 3 water; published density 4,142; 6,003 dwellings, 2,881 owner-occupied at 48 percent and 3,122 rented; estimated 348,000 euro (2025); income 33,800 euro per resident (2024); 6 primary establishments with 1,391 pupils, 3 secondary with 2,312; resident students 350 higher professional and 350 university.' },
          { h3: 'The four Woensel-Noord wijken, by area only', p: 'Ontginning 333 hectares, all land; Achtse Molen 497, of which 496 land; Aanschot 519, of which 517 land; Dommelbeemd 515, of which 508 land. Together 1,864 hectares, 1,854 of land, with 11 hectares of water listed. These are used for the area check and nothing else; everything else about those wijken belongs to the Woensel-Noord page.' },
          { h3: 'The sums and the checks', p: 'Woensel-Zuid: residents 42,682 (2026); 824 hectares, 821 land; households 24,295 and dwellings 21,702 (2025), of them 6,932 owner-occupied; under fifteen 4,905; primary establishments 11 teaching 2,808 pupils, secondary 5 teaching 3,043. Box checks: 64,790 over 18.64 is 3,476; 42,165 over 8.24 is 5,117; the two boxes sum to 106,955 residents, 49,926 dwellings and 26.88 square kilometres, matching the Woensel box; the office areas match the opposite box in both directions.' },
          { h3: 'What the page does not say', p: 'It does not say the statistics office made the error; all three boxes cite its 2023 key figures, and the mismatch is in how they were placed. It does not move 42,165 across to Woensel-Zuid or 64,790 across to Woensel-Noord, since that would be the page repairing a source; it uses its own 2026 sum. And it does not use the dwelling counts, which point the same way but are for 2025 against 2023.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection with Woensel-Zuid, with Eindhoven, with the encyclopaedia or with any school or church named here, and the page implies none. Each of the seven wijk rows was read from its own statistics office page, residents and ages at 2026, households, dwellings and values at 2025, income at 2024 and resident students at 2025. The boxes, the 1920 date and the landmarks are copied from the encyclopaedia entry for Woensel, where the Woensel-Zuid and Woensel-Noord titles now lead, and the elfproef lines from the entry on the elfproef.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'A check that cannot see the error will never catch it',
      intro: 'Before trusting a check, ask what it would say if the error had happened. If the answer is the same, the check is decoration.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Run the checks a record can run on itself', p: 'Density against population and area. Land plus water against the total. The parts against the whole. The source line. For the two Woensel boxes all of these pass, and it is tempting to stop there, because four passes in a row feel like proof.' },
          { h3: '2. Apply the error on purpose and run them again', p: 'Swap the two boxes and repeat every check. Nothing changes. A ratio inside a record, a total across records and an identical citation are all unaffected by which record is labelled which, so they are blind to exactly the mistake that happened here.' },
          { h3: '3. Join on the key to something independent', p: 'Take the heading, find the wijken listed under it, and look up their areas in a second source. That check depends on which box sits under which heading, so it changes when the boxes are swapped, and that is precisely what lets it find the swap.' }
        ] },
        { kind: 'table', caption: 'Checks that are blind to the error they are meant to catch', head: ['The error', 'A check that cannot see it', 'A check that can', 'Why the first is blind'], rows: [
          ['Two digits of an account number swapped', 'the sum of the digits', 'the elfproef, which weights each digit by its position', 'a sum is the same in any order'],
          ['Two rows given the wrong names', 'row and column totals', 'a join on the name to a second source', 'totals do not depend on which row is which'],
          ['Two lists zipped together after one was sorted', 'the two lengths match', 'compare the id carried inside each pair', 'reordering never changes a length'],
          ['Test and production settings files swapped', 'every setting in each file is valid', 'check the environment name written inside the file', 'both files are perfect on their own'],
          ['Two Woensel boxes under the wrong headings', 'density, land plus water, the sum to Woensel', 'the office areas of the wijken listed beside them', 'every one of the first three is symmetric in the two boxes']
        ] },
        { kind: 'callout', h3: 'The Dutch banks solved this for account numbers, and the idea generalises', p: 'Dutch bank account numbers of nine or ten digits used to be tested with the elfproef, the eleven test. The last digit is multiplied by 1, the one before it by 2, the one before that by 3, and so on, and a valid number gives a total divisible by eleven. The citizen service number uses a variant in which the last digit is multiplied by minus 1. The encyclopaedia states the property that makes it useful: starting from a number that passes, no new valid number can be produced by changing one digit or by swapping two. A plain sum of the digits would catch the first mistake and never the second, because a swap leaves the sum unchanged; weighting each digit by its position is what makes the test sensitive to order. That is the whole lesson in one line of arithmetic. A check has to change when the error happens, and the way to find out whether it does is to make the error on purpose, which is what programmers call mutation testing: break the code or the data deliberately and confirm the tests go red. In data work the usual culprit is a join by position, pairing rows because they happen to sit side by side, where the fix is to join on an identifier and compare the identifier after the join. The Woensel boxes are a join by position that went wrong in public, and every self-check on them is order-blind.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for checks that actually check',
      intro: 'Unit tests, validation rules, reconciliation reports, checksums and dashboards that must add up all share one weakness: a check can pass for reasons that have nothing to do with correctness. Practised on two tables in an encyclopaedia that agree with each other perfectly and sit in the wrong places.',
      body: [
        { kind: 'table', caption: 'Making a check sensitive to the error you fear', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Break it on purpose', 'Introduce the error you fear and confirm the check fails', 'Checks that pass whatever happens', 'Tests that test something'],
          ['Join by key', 'Match records on an identifier, never on their position', 'Pairs assigned by order', 'Joins that survive a sort'],
          ['Use a second source', 'Compare each record with an independent attribute looked up by its key', 'A self-consistent record on the wrong key', 'A mismatch you can see'],
          ['Weight by position', 'Where order matters, use check digits that change when digits move', 'Transpositions that leave a sum unchanged', 'The elfproef idea, anywhere'],
          ['Say which half you trust', 'State which fields agree with outside sources and which do not', 'Quietly repairing half a source', 'A correction a reader can audit']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'Two lunchboxes with the name labels swapped. Each lunchbox looks fine and each label is spelled correctly. The class works out which question would catch it, and it turns out to be asking about the food inside, not about the label.' },
          { h3: 'For teenagers', p: 'The elfproef in Python, run on a valid number, then on the same number with two digits swapped. Then the same experiment with a plain digit sum, and a short explanation of why one test notices and the other never can.' },
          { h3: 'For adults', p: 'A spreadsheet in which one column was sorted and its neighbour was not. Every total still reconciles. Adults add one lookup on the row name to a second source and see the damage that the totals were hiding.' }
        ] },
        { kind: 'p', text: 'The material here is two encyclopaedia boxes and seven statistics office rows. The boxes are quoted as printed with their shared citation; the three Woensel-Zuid rows are used in full and the four Woensel-Noord rows only for area. Which side to trust is settled by agreement with outside sources: the wijk lists in the encyclopaedia match the office wijk names, and the box areas contradict the office areas, so the lists are kept and the boxes are set aside rather than corrected.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From swapped lunchbox labels to a test suite that fails when it should',
    intro: 'A learner is placed during the free lesson by how they handle an actual task in front of the teacher. Where in Woensel they live and how old they are play no part.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'The swapped labels', p: 'Children find the question that catches two labels on the wrong boxes.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'The eleven test', p: 'Learners build a check digit and see why a plain sum misses a swap.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Break it first', p: 'Teenagers break their own code on purpose to prove their tests can fail.', courses: ['complete-app-development-masterclass-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Join on the name', p: 'Adults replace joins by position with joins by key and find what totals hid.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI reading the encyclopaedia will say Woensel-Zuid has 64,790 residents. Why should a teenager in Limbeek check the area first?',
    intro: 'Because that box carries the area of the other stadsdeel, and every figure in it agrees with every other.',
    p1: 'Ask a language model how many people live in Woensel-Zuid and it may well give 64,790, and it would be hard to blame it. The figure is printed under the right heading, cites the statistics office, divides neatly into the density printed beside it and adds up with its neighbour to the total for Woensel. Every signal a reader or a model uses to judge a number says this one is sound. What it does not do is reach outside the box to ask whether 18.64 square kilometres is the size of the three wijken listed under the same heading, and that is the only question that would have caught it.',
    p2: 'The learner who has written a test, watched it pass, broken the code on purpose and watched it pass again, knows the feeling of a check that was never checking anything. Machine learning is full of these: an evaluation that runs on data the model has already seen, a validation split that leaks, labels shuffled against their examples so that every row is well formed and the whole dataset is wrong. Models will keep quoting figures that agree with themselves. Asking what a check would say if the error had happened stays a human habit.',
    closer: 'The case for a child in Woensel-Zuid learning to code in 2026 is therefore not any one skill. It is that code which pairs records by position fails in exactly this way, and a person who has fixed it once looks for the key behind every row they are shown.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for Oud-Woensel, Erp and Begijnenbroek',
    intro: 'Woensel-Zuid starts a few streets from the station and runs north through some of the most tightly built housing in the city, and in a household here the free hour is harder to find than the route to anywhere.',
    cells: [
      { h3: 'Nothing to cross, nothing to wait for', p: 'Even this close to the centre, a weekly class elsewhere means a bike ride, a wait and a ride home, twice a week. The online lesson begins when the laptop opens at the agreed hour, and that is the only preparation it needs.' },
      { h3: 'The school vocabulary stays Dutch', p: 'Groep, havo, vwo and profielkeuze are used exactly as the schools of Woensel use them. A learner hears the words that appear on their own reports, and the teacher adapts to the school rather than the other way round.' },
      { h3: 'An hour of teaching, not selling', p: 'The free lesson is a lesson: a real task, worked through with a teacher who is watching how the learner thinks. It finishes with a level, a course and a regular time, and it asks for no payment details at any point.' },
      { h3: 'Classmates matched on stage', p: 'Five to ten learners at the same point in the same subject. Woensel-Zuid has 4,905 residents under fifteen, and still the chance of five at one exact stage wanting one exact hour is small, so groups are drawn from a worldwide pool.' },
      { h3: 'Brabant holidays, regio Zuid', p: 'Two lessons a week, around eight a month, at one fixed time. Noord-Brabant takes regio Zuid school holidays, on dates that differ from the west of the country, and the plan follows them from the first month.' },
      { h3: 'The time gap, both seasons', p: 'India is three and a half hours ahead of Eindhoven in summer and four and a half in winter, and only the Dutch clock ever moves. After school, the early evening and weekend mornings stay available all year round.' }
    ],
    spec: { title: 'Eleven primary schools, five secondary, and one way to form a group', p: 'Woensel-Zuid has eleven primary establishments teaching 2,808 pupils and five secondary establishments teaching 3,043, six of the primary ones in Begijnenbroek alone. However many schools stand nearby, a coding group still needs five people at the same stage of the same subject free at the same hour, and a pool that large only exists worldwide, across every age from 6 to 67.' }
  },

  fees: {
    h2: 'What classes in Woensel-Zuid cost, in dollars',
    intro: 'Stated in full, so nothing depends on a conversation first.',
    first: 'A complete lesson with a real task, a placement and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'One dollar price for every country and no euro version, so a rented flat in Limbeek and an owned house in Eckartdal see the same number. Nothing is paid until the free lesson has fixed a course and a weekly hour, and payment is then arranged over WhatsApp. Pausing, switching format and missed lessons are each explained on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, copied without a word changed',

  book: {
    h2: 'Tell us the stage the learner has reached',
    intro: 'The first task might be two swapped lunchbox labels, an eleven test that catches swapped digits, or a spreadsheet joined on its row names for the first time.',
    success: 'Thank you. Your Woensel-Zuid class request has been sent.'
  },

  faq: {
    h2: 'Woensel-Zuid coding class questions',
    intro: 'The stadsdeel, its three wijken, two boxes under the wrong headings, the lessons and the terms.',
    items: [
      { q: 'What does Woensel-Zuid include?', a: 'Three statistics office wijken: Oud-Woensel, Erp and Begijnenbroek, with seventeen buurten between them in the office list, from the Gildebuurt and Limbeek to Kronehoef, Eckartdal and Hondsheuvels. Together they cover 824 hectares, 821 of them land. Woensel-Noord, the other half of the former village of Woensel, has its own four wijken.' },
      { q: 'How many people live in Woensel-Zuid?', a: 'Adding the three published wijk counts for January 2026 gives 42,682: 11,662 in Oud-Woensel, 18,779 in Erp and 12,241 in Begijnenbroek. The encyclopaedia box printed under Woensel-Zuid says 64,790 for 2023, but that box carries the area of the four Woensel-Noord wijken, so this page does not use it.' },
      { q: 'How do we know the two Woensel boxes are swapped?', a: 'By their areas. The box under Woensel-Noord gives 8.24 square kilometres, 8.21 land and 0.03 water, which is exactly the 824 hectares, 821 land and 3 water of Oud-Woensel, Erp and Begijnenbroek. The box under Woensel-Zuid gives 18.64 square kilometres, matching the 1,864 hectares of the four northern wijken. The wijk lists in the same article agree with the office names, so the lists are right and the boxes are misplaced.' },
      { q: 'Why did nobody notice?', a: 'Because every check that looks only at the boxes passes. Each density equals its population over its area, land plus water gives the area, and the two boxes add up exactly to the box for Woensel as a whole. All of those checks give the same result whichever way round the boxes are, so none of them can detect the swap. Only a check against an outside source can.' },
      { q: 'What is the elfproef?', a: 'The eleven test used on Dutch bank account numbers of nine or ten digits: the last digit is multiplied by 1, the next by 2, and so on, and the total must be divisible by eleven. The citizen service number uses a variant with minus 1 for the last digit. Changing one digit or swapping two in a valid number can never give another valid number, which a plain digit sum cannot promise.' },
      { q: 'How many schools are there in Woensel-Zuid?', a: 'Adding the three wijk rows: eleven primary establishments teaching 2,808 pupils and five secondary establishments teaching 3,043, with six of the primary and three of the secondary ones in Begijnenbroek. 4,905 residents are under fifteen. The page makes no claim about the quality or results of any school.' },
      { q: 'In what language and at what hours are lessons?', a: 'In English, with the Dutch school words kept in Dutch. India is three and a half hours ahead in summer and four and a half in winter, so after-school, early-evening and weekend times all work. One weekly slot is fixed at the free lesson, and the calendar follows regio Zuid holidays.' },
      { q: 'Is there a Modern Age Coders classroom in Woensel-Zuid?', a: 'No, and none is claimed here, elsewhere in Eindhoven or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Woensel-Zuid coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or address. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Eindhoven and beyond',
    h2: 'South to the old town, west to Strijp, and out across Brabant',
    html: 'The whole-city figures, Brainport and the international schools are on <a class="cg-inline-link" href="/coding-classes-in-eindhoven">coding classes in Eindhoven</a>. Just south of Oud-Woensel lies the old town, on <a class="cg-inline-link" href="/coding-classes-in-eindhoven-centrum">Eindhoven Centrum</a>, and to the west is <a class="cg-inline-link" href="/coding-classes-in-strijp">Strijp</a>, where every detail added to a picture of a resident makes it fit fewer people. Woensel-Noord and Tongelre are the two stadsdelen still to be written, and all of them sit in <a class="cg-inline-link" href="/coding-classes-in-noord-brabant">Noord-Brabant</a>. Anyone going straight for machine learning can start at the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a> instead, and the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a> ties every page together.',
    waLabel: 'Continue on WhatsApp'
  },

  footerHeading: 'Woensel-Zuid, Eindhoven and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-eindhoven', label: 'Eindhoven' },
    { href: '/coding-classes-in-eindhoven-centrum', label: 'Eindhoven Centrum' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-wsz .cg-hero-grid { grid-template-columns: 1fr 1fr; align-items: stretch; gap: clamp(1.25rem, 3vw, 2.3rem); }
.cg-root.cg-wsz .cg-hero h1 { font-weight: 600; letter-spacing: -0.016em; line-height: 1.09; }
.cg-root.cg-wsz .cg-capsule { border-left: 4px solid var(--cg-accent); border-bottom: 1px solid var(--cg-accent-soft); padding-left: 1.2rem; padding-bottom: 0.8rem; }
.cg-root.cg-wsz .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-wsz .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.012em; }
.cg-root.cg-wsz .cg-grid-3 { gap: clamp(1.05rem, 2.3vw, 1.8rem); }
.cg-root.cg-wsz .cg-card { border-radius: 6px; border-top: 2px solid var(--cg-accent-soft); border-bottom: 2px solid var(--cg-accent-soft); }
.cg-root.cg-wsz .cg-table caption { letter-spacing: 0.035em; font-weight: 600; }
.cg-root.cg-wsz .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wsz .cg-table td:last-child { font-weight: 700; }
.cg-root.cg-wsz .cg-ladder-col { border-left: 2px solid var(--cg-accent-soft); padding-left: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'Stadsdeel Woensel-Zuid, Eindhoven, Noord-Brabant: part of the former municipality of Woensel, which became part of Eindhoven on 1 January 1920; three statistics office wijken, Oud-Woensel, Erp and Begijnenbroek, with 17 buurten in the office list against 16 in the encyclopaedia, whose areas add to 824 hectares, 821 land and 3 water. Complete-set 2026 sum 42,682 residents, flagged as arithmetic and used as the only stadsdeel population. Oud-Woensel 11,662 residents (2026) on 131 hectares, published density 9,065 (2025), the highest of the twenty Eindhoven wijken, 7,725 households averaging 1.5 with 5,080 single at 66 percent, 6,484 dwellings with 5,382 rented at 83 percent, the highest share in the city, estimated 311,000 euro, the lowest, income 34,000 euro per resident (2024), buurten Gildebuurt, Woenselse Watermolen, Hemelrijken, Limbeek-Noord and Limbeek-Zuid, 2 primary with 510 pupils, resident students 720 higher professional and 1,000 university. Erp 18,779 on 395 hectares, 10,280 households, 9,215 dwellings with 2,949 owner-occupied at 32 percent, estimated 323,000 euro, income 31,000 euro, buurten Vredeoord, Rapenland, Mensfort, Barrier, Kronehoef and Woensel-West, 3 primary with 907 pupils, 2 secondary with 731. Begijnenbroek 12,241 on 295 hectares of land, 6,290 households, 2,715 over sixty-five at 22 percent, 6,003 dwellings with 2,881 owner-occupied at 48 percent, estimated 348,000 euro, buurten Eckartdal, Oude Gracht-Oost, Generalenbuurt, Oude Gracht-West, Oude Toren and Hondsheuvels, 6 primary with 1,391 pupils, 3 secondary with 2,312. Woensel-Noord wijken used for area only: Ontginning 333, Achtse Molen 497, Aanschot 519, Dommelbeemd 515 hectares, 1,864 total and 1,854 land. Encyclopaedia boxes, all citing CBS Kerncijfers wijken en buurten 2023: under Woensel-Zuid 18.64 square kilometres, 18.54 land, 0.11 water, 64,790 residents at 3,476 per square kilometre, 28,676 dwellings; under Woensel-Noord 8.24, 8.21 land, 0.03 water, 42,165 at 5,117, 21,250 dwellings; Woensel whole 26.88, 26.75 land, 0.14 water, 106,955 at 3,979, 49,926 dwellings. Landmarks: the Oude Toren, a fifteenth-century brick tower, the only remnant of the medieval Sint-Petruskerk; the Sint-Petruskerk consecrated 1880 to a design by H.J. van Tulder with a tower of 1912 by Louis Kooken; the Woenselse Markt laid out 1903 as a triangular square. Elfproef: Dutch bank account numbers of nine or ten digits weighted 1, 2, 3 from the right, total divisible by eleven; BSN variant with minus 1; no valid number results from changing one digit or swapping two. Regio Zuid holidays. The district page argues that a check invariant under an error cannot detect it: every self-check on the two boxes is symmetric in the swap, and only a keyed check against an independent source can see it.',
    localProject: 'A record can pass every check it can run on itself and still sit on the wrong key, because checks that are unchanged by an error cannot detect it. The encyclopaedia entry for Woensel prints two boxes, both citing CBS Kerncijfers wijken en buurten 2023: under Woensel-Zuid, 64,790 residents on 18.64 square kilometres (18.54 land, 0.11 water), density 3,476, 28,676 dwellings; under Woensel-Noord, 42,165 on 8.24 (8.21 land, 0.03 water), density 5,117, 21,250 dwellings. Four checks pass: each density equals population over area; land plus water gives area within rounding; the two boxes add to the Woensel box exactly, 106,955 residents, 49,926 dwellings, 26.88 square kilometres; both cite the same source. A fifth fails: the statistics office areas of the wijken the same entry lists under each heading, Oud-Woensel, Erp and Begijnenbroek at 824 hectares, 821 land, 3 water, against Ontginning, Achtse Molen, Aanschot and Dommelbeemd at 1,864, 1,854 land, 11 water, match the opposite box in both directions. The first four are symmetric under swapping the boxes, so they return the same result with or without the error; the fifth joins through the heading to an independent source, so it changes when the boxes change, which is what lets it find the swap. The wijk lists are trusted because they match the office wijk names, a second source; the boxes are set aside, not corrected, and the page uses its own 2026 sum of 42,682 as the stadsdeel population. The programming form is the order-blind check: a digit sum cannot catch a transposition while the elfproef, weighting each digit by its position, can (no valid number results from changing one digit or swapping two); totals cannot catch rows given the wrong names; matching lengths cannot catch lists zipped after one was sorted; per-file validation cannot catch swapped settings files; the remedy is mutation testing, applying the feared error deliberately to confirm a check fails, and joins by key rather than position. Distinct from cross-field validation (Den Bosch), where a within-record constraint catches the error: here every within-record and across-record constraint is invariant under it; from a single well-formed but wrong field (Masirah); from a name outliving its referent (Scheveningen); and from the ceiling check (Segbroek).',
    requiredMentions: [
      '11,662',
      '18,779',
      '12,241',
      '42,682',
      '64,790',
      '42,165',
      '28,676',
      '21,250',
      '106,955',
      'Woenselse Markt',
      'Sint-Petruskerk',
      'Louis Kooken',
      'Gildebuurt',
      'Hemelrijken'
    ],
    sources: [
      { claim: 'Woensel (encyclopaedia entry; the Woensel-Zuid and Woensel-Noord titles redirect here). Box Woensel: oppervlakte 26,88 km2, land 26,75 km2, water 0,14 km2; inwoners (2023) 106.955 (3.979 inw./km2); woningvoorraad 49.926 woningen; bron CBS Kerncijfers wijken en buurten 2023. Box under Woensel-Noord: 8,24 km2, land 8,21, water 0,03; inwoners (2023) 42.165 (5.117 inw./km2); 21.250 woningen; same bron. Box under Woensel-Zuid: 18,64 km2, land 18,54, water 0,11; inwoners (2023) 64.790 (3.476 inw./km2); 28.676 woningen; same bron. Het gebied Woensel-Zuid wordt ingedeeld in 3 wijken en 16 buurten: Oud-Woensel, Erp, Begijnenbroek. Het gebied Woensel-Noord is ingedeeld in vier wijken en 21 buurten: Ontginning, Achtse Molen, Aanschot, Dommelbeemd. Op 1 januari 1920 werd Woensel deel van de gemeente Eindhoven. Deze bakstenen toren is het enige wat is overgebleven van de middeleeuwse Sint-Petruskerk. Het 15e-eeuwse gebouw heeft drie geledingen. Sint-Petruskerk: ze werd ingewijd in 1880, architect H.J. van Tulder; pas in 1912 werd een nieuwe toren gebouwd, de architect was Louis Kooken. In 1903 werd de Woenselse Markt aangelegd, een driehoekig plein.', url: 'https://nl.wikipedia.org/wiki/Woensel' },
      { claim: 'Wijk Oud-Woensel, Eindhoven: 11,662 inwoners (2026); 7,725 huishoudens averaging 1.5, 5,080 eenpersoonshuishoudens (66 percent); ages 1,090 (0 to 15), 2,440 (15 to 25), 4,955 (25 to 45), 1,970 (45 to 65), 1,235 (65+); 131 hectare, 131 land, 0 water; bevolkingsdichtheid 9,065 per km2 (2025); woningvoorraad 6,484, 5,382 huurwoningen (83 percent) and 1,102 koopwoningen (17 percent); gemiddelde WOZ 311,000 euro (2025); gemiddeld inkomen per inwoner 34,000 euro (2024); buurten Gildebuurt, Woenselse Watermolen, Hemelrijken, Limbeek-Noord, Limbeek-Zuid; 2 vestigingen basisonderwijs with 510 leerlingen, 0 voortgezet onderwijs; studenten HBO 720, WO 1,000 (2025).', url: 'https://allecijfers.nl/wijk/oud-woensel-eindhoven/' },
      { claim: 'Wijk Erp, Eindhoven: 18,779 inwoners (2026); 10,280 huishoudens averaging 1.8, 5,950 eenpersoonshuishoudens (58 percent); ages 2,335 (0 to 15), 3,255 (15 to 25), 6,610 (25 to 45), 3,765 (45 to 65), 2,795 (65+); 395 hectare, 395 land, 0 water; bevolkingsdichtheid 4,728 per km2; woningvoorraad 9,215, 2,949 koopwoningen (32 percent) and 6,266 huurwoningen (68 percent); gemiddelde WOZ 323,000 euro (2025); gemiddeld inkomen per inwoner 31,000 euro (2024); buurten Vredeoord, Rapenland, Mensfort, Barrier, Kronehoef, Woensel-West; 3 vestigingen basisonderwijs with 907 leerlingen, 2 voortgezet onderwijs with 731; studenten HBO 700, WO 1,090.', url: 'https://allecijfers.nl/wijk/erp-eindhoven/' },
      { claim: 'Wijk Begijnenbroek, Eindhoven: 12,241 inwoners (2026); 6,290 huishoudens averaging 1.8, 3,205 eenpersoonshuishoudens (51 percent); ages 1,480 (0 to 15), 1,510 (15 to 25), 3,770 (25 to 45), 2,780 (45 to 65), 2,715 (65+); 298 hectare, 295 land, 3 water; bevolkingsdichtheid 4,142 per km2; woningvoorraad 6,003, 2,881 koopwoningen (48 percent) and 3,122 huurwoningen (52 percent); gemiddelde WOZ 348,000 euro (2025); gemiddeld inkomen per inwoner 33,800 euro (2024); buurten Eckartdal, Oude Gracht-Oost, Generalenbuurt, Oude Gracht-West, Oude Toren, Hondsheuvels; 6 vestigingen basisonderwijs with 1,391 leerlingen, 3 voortgezet onderwijs with 2,312; studenten HBO 350, WO 350.', url: 'https://allecijfers.nl/wijk/begijnenbroek-eindhoven/' },
      { claim: 'Wijk Ontginning, Eindhoven: oppervlakte 333 hectare, land 333, water 0. Wijk Achtse Molen: 497 hectare, land 496, water 1. Wijk Aanschot: 519 hectare, land 517, water 2. Wijk Dommelbeemd: 515 hectare, land 508, water 8. (Area figures only; each from its own wijk page at allecijfers.nl/wijk/<name>-eindhoven/.)', url: 'https://allecijfers.nl/wijk/ontginning-eindhoven/' },
      { claim: 'Elfproef: De elfproef of 11-proef is een test die in het Nederlandse elektronische betalingsverkeer werd uitgevoerd op negen- en tiencijferige Nederlandse rekeningnummers bij banken. Het laatste cijfer van het rekeningnummer wordt met 1 vermenigvuldigd, het voorlaatste met 2, het op twee na laatste met 3, enzovoorts. Bij burgerservicenummers wordt het laatste getal met -1 vermenigvuldigd in plaats van met 1. Uitgaande van een nummer dat voldoet aan de elfproef kan geen nieuw geldig nummer worden gegenereerd door een cijfer te veranderen of door twee cijfers te verwisselen. Het IBAN behorende aan nieuwe rekeningen voldoet niet meer aan de elfproef.', url: 'https://nl.wikipedia.org/wiki/Elfproef' },
      { claim: 'Gemeente Eindhoven: 249,783 inwoners (2026); 130,304 huishoudens (2025); 20 wijken en 116 buurten.', url: 'https://allecijfers.nl/gemeente/eindhoven/' },
      { claim: 'School holiday regions: regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'A Woensel-Zuid population of 64,790. That box carries the area of the four Woensel-Noord wijken; the page uses its own 2026 sum of 42,682.',
      'That Woensel-Zuid really had 42,165 residents in 2023. Moving a figure from the other box would be the page repairing a source it has just shown to be misplaced.',
      'That the statistics office made the error. All three boxes cite its 2023 key figures; the mismatch is in how the boxes were placed under the headings.',
      'Any comparison of the 2023 box figures with the 2026 wijk sums as growth, or any use of the 2025 dwelling counts against the 2023 box counts.',
      'Any placement of the Oude Toren, the Sint-Petruskerk or the Woenselse Markt in a specific wijk. The entry describes them for Woensel as a whole.',
      'Any reconciliation of the 16 buurten in the encyclopaedia with the 17 in the office list, which splits Limbeek in two.',
      'A within-record constraint catching a proxy value. That is the Den Bosch page argument; here every within-record and across-record constraint is blind to the error.',
      'A single well-formed field holding a wrong value. That is the Masirah argument; here whole records are attached to the wrong keys.',
      'Anything the Eindhoven city page owns, including the named secondary schools and their addresses, the High Tech Campus and the Indian-origin figures.'
    ]
  }
};
