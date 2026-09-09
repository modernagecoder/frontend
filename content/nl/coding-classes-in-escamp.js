'use strict';
// Escamp: the largest stadsdeel of The Hague, post-war south-west, six wijken,
// five of them read in full.
// Spine: a school standing in a wijk is neither necessary nor sufficient for
// the children of that wijk, and counting establishments counts neither.

module.exports = {
  slug: 'coding-classes-in-escamp',
  code: 'esc',
  accent: '#94285B',
  accentRationale: 'Escamp: a deep claret off the brick of the post-war portiekflats and the Zuiderpark rose beds, well clear of the slate blue of the Hague city page and the moss green of Den Haag Centrum, the two pages it hangs beside, and nearest to Delft, which it does not link to',
  pageType: 'district',
  place: {
    name: 'Escamp',
    eyebrow: 'Escamp, Den Haag',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'City', name: 'The Hague' },
      { type: 'AdministrativeArea', name: 'Zuid-Holland' },
      { type: 'Country', name: 'Netherlands' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-netherlands', name: 'Netherlands' },
    { slug: 'coding-classes-in-the-hague', name: 'The Hague' }
  ],
  nav: [
    { label: 'The Hague', href: '/coding-classes-in-the-hague' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Escamp, The Hague, Netherlands',
  title: 'Coding Classes in Escamp, The Hague | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in Escamp, The Hague, for ages 6 to 67, from Bouwlust and Moerwijk to the Wateringse Veld. First lesson free.',
  ogDescription: 'Live online coding, Python and AI in the largest stadsdeel of The Hague, on a page about conditions that are necessary without being sufficient.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'python-ai-kids-masterclass',
  verifiedOn: '10 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Escamp Learners',
    description: 'Ability-placed online coding, Python, AI, app building and mathematics for children, teenagers and adults across the six wijken of stadsdeel Escamp in The Hague, taught in English.'
  },

  h1: 'Coding classes in Escamp, where thirteen primary schools and five primary schools teach almost the same number of children',
  capsuleQ: 'What are the best coding classes in Escamp?',
  capsule: 'Coding classes in Escamp reach the largest stadsdeel of The Hague, six wijken across the post-war south-west. Bouwlust has 13 primary establishments teaching 2,954 pupils. The Wateringse Veld has 5 teaching 2,534. Counting the buildings does not count the places in them, and a school standing inside a wijk is neither necessary nor sufficient for the children who live there, because it may teach anyone and they may go anywhere. Modern Age Coders teaches live online in English from Moerwijk to the Hoge Veld, ages 6 to 67, first lesson free, then USD 100 monthly in a group of five to ten or USD 150 one to one.',
  lead: 'Thirteen schools sounds like more than five schools. It is more buildings, certainly. It is not more pupils in any reliable way: the thirteen establishments in Bouwlust teach 2,954 children and the five in the Wateringse Veld teach 2,534, a difference of a few hundred across a ratio of nearly three to one. And neither figure is a statement about the children of either wijk, because a school inside a wijk is not required for a local child to be educated and does not guarantee that it educates one. The count answers a question about geography that almost nobody was asking.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Escamp.',

  picks: {
    eyebrow: 'Course picks for Escamp',
    h2: 'Four courses for the south-west of The Hague',
    intro: 'A groep 6 child in Morgenstond who has never been asked to make the computer do anything, a teenager in Bouwlust whose game exists entirely as a description, a student in Leyenburg whose script passes on their own machine and nowhere else, and an adult in the Wateringse Veld who has to sign off a rule that decides who qualifies. Four separate starting points, and none of them charges for the first hour.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Typed Python with real conditions in it, where the child finds out that one test is usually not enough to describe what they meant.' },
      { course: 'complete-app-development-masterclass-for-teens', band: 'Ages 13 to 18', note: 'An app taken from nothing to something installable, for the teenager who can describe every screen and has never opened an editor.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'Python that runs without a person watching, which is where a condition that was almost right starts costing something.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Reading a count without assuming it answers the question you had, for anybody who reports figures other people act on.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Escamp today',
      h2: 'Six wijken in the post-war south-west, five read in full',
      intro: 'Escamp was created in 1986, when the council divided The Hague into seven stadsdelen, and it became the largest of them by population once the Wateringse Veld was added and finished; that Vinex wijk has been fully inhabited since 2009. Most of the rest was built after the Second World War. Its six wijken are Bouwlust en Vrederust, Leyenburg, Moerwijk en Zuiderpark, Morgenstond, Rustenburg en Oostbroek and the Wateringse Veld. Five of the six were read in full for this page.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The five wijken read here', p: 'Bouwlust with 29,012 residents on 428 hectares, the Wateringse Veld with 24,628 on 328, Moerwijk with 21,974 on 180, Morgenstond with 20,553 on 169 and Leyenburg with 17,143 on 135, all counted at January 2026. Rustenburg en Oostbroek was not read and no figure here includes it.' },
          { h3: 'One wijk unlike the other four', p: 'Households average 2.6 people in the Wateringse Veld with only 2,415 of its 9,175 single, 26 percent, against 1.8 to 2.1 elsewhere and single-person shares from 50 to 54 percent. It also holds 8,708 dwellings at an average 479,000 euro with 5,312 owner-occupied, 61 percent, where Moerwijk has 1,799 owner-occupied out of 10,585. The newest wijk in the stadsdeel is the outlier in nearly every column.' },
          { h3: 'Children, and the schools standing near them', p: 'Under fifteen: 5,325 in Bouwlust, 4,750 in the Wateringse Veld, 4,060 in Moerwijk, 3,625 in Morgenstond and 2,395 in Leyenburg. Primary establishments in the same five: 13, 5, 7, 8 and 4. Those two lists are not in the same order, and the reason is the subject of this page.' }
        ] },
        { kind: 'spec', title: 'Why this page gives no population for Escamp itself', p: 'There are two published stadsdeel totals and neither is current. The encyclopaedia entry gives 120,080 residents for 2015. The Hague city page in this series carries 128,967 for 2022. The wijk rows above are 2026 and exact, and five of the six is not the whole, so nothing here is added up into a stadsdeel figure and no stadsdeel figure is divided down into a wijk. Where the total appears at all it is dated. This is not fussiness: a number carried over from a different year and presented flat is the most ordinary way a page like this becomes quietly wrong.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Where the learners are',
      h2: 'Two columns that look like the same column',
      intro: 'Below are three published counts for each of the five wijken read. The first two are commonly treated as measures of the third. Neither is.',
      body: [
        { kind: 'table', caption: 'Establishments, pupils taught, children resident', head: ['Wijk', 'Primary establishments', 'Primary pupils taught in it', 'Residents under fifteen'], rows: [
          ['Bouwlust', '13', '2,954', '5,325'],
          ['Wateringse Veld', '5', '2,534', '4,750'],
          ['Morgenstond', '8', '1,734', '3,625'],
          ['Moerwijk', '7', '1,565', '4,060'],
          ['Leyenburg', '4', '1,454', '2,395']
        ] },
        { kind: 'p', text: 'Two rows are worth staring at. Bouwlust has thirteen establishments and the Wateringse Veld has five, a ratio of nearly three to one, and they teach 2,954 and 2,534 pupils, which is not a ratio of nearly three to one. And Moerwijk has 435 more residents under fifteen than Morgenstond while 169 fewer primary pupils are taught inside it, from one establishment fewer. Those two subtractions are the only arithmetic on this page. Nothing is wrong with any of the published numbers. They simply count three different things, and the habit of reading them as one thing is what this page is about.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Five rows in full, two subtractions, and the sixth wijk left out',
      intro: 'Everything quoted with its year, the small amount that was calculated, and the list of things the figures do not support.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Bouwlust', p: '29,012 residents (2026); 14,230 households averaging 2.1, 7,105 single-person at 50 percent; 5,325 under fifteen at 18 percent, 3,910 aged fifteen to twenty-five, 8,090 aged twenty-five to forty-five, 7,250 aged forty-five to sixty-five, 4,430 over sixty-five at 15 percent; 428 hectares; density 7,088; 12,877 dwellings; average value 275,000 euro; 3,348 owner-occupied at 26 percent and 9,529 rented at 74; income 24,700 euro (2024); 13 primary establishments with 2,954 pupils and 3 secondary with 877; four buurten, Venen Oorden en Raden, Zijden Steden en Zichten, Dreven en Gaarden and De Uithof.' },
          { h3: 'Wateringse Veld', p: '24,628 residents (2026); 9,175 households averaging 2.6, 2,415 single-person at 26 percent; 4,750 under fifteen at 19 percent, 3,420 aged fifteen to twenty-five, 6,000 aged twenty-five to forty-five, 7,115 aged forty-five to sixty-five, 3,320 over sixty-five; 328 hectares; density 8,059; 8,708 dwellings; average value 479,000 euro; 5,312 owner-occupied at 61 percent and 3,309 rented at 38; income 36,000 euro (2024); 5 primary establishments with 2,534 pupils and 1 secondary with 612; five buurten, Erasmus Veld, Hoge Veld, Parkbuurt Oosteinde, Lage Veld and Zonne Veld.' },
          { h3: 'Moerwijk and Morgenstond', p: 'Moerwijk: 21,974 residents (2026); 11,125 households averaging 1.9, 54 percent single-person; 4,060 under fifteen at 18 percent; 180 hectares; density 12,157; 10,585 dwellings; average value 230,000 euro; 1,799 owner-occupied at 17 percent; income 23,500 euro (2024); 7 primary establishments with 1,565 pupils and 1 secondary with 472; four buurten. Morgenstond: 20,553 residents; 10,565 households averaging 1.9, 5,505 single at 52 percent; 3,625 under fifteen at 18 percent; 169 hectares; density 12,375; 10,161 dwellings; average value 262,000 euro; 2,439 owner-occupied at 24 percent; income 26,200 euro (2024); 8 primary establishments with 1,734 pupils and 1 secondary with 275; three buurten.' },
          { h3: 'Leyenburg', p: '17,143 residents (2026); 9,150 households averaging 1.8, 4,685 single-person at 51 percent; 2,395 under fifteen at 14 percent, the lowest child share of the five, 2,000 aged fifteen to twenty-five, 5,735 aged twenty-five to forty-five at 33 percent, 4,040 aged forty-five to sixty-five, 2,965 over sixty-five at 17 percent; 135 hectares; density 13,194; 8,492 dwellings; average value 282,000 euro; 4,671 owner-occupied at 55 percent and 3,821 rented at 45; income 31,800 euro (2024); 4 primary establishments with 1,454 pupils and no secondary establishment.' },
          { h3: 'What was calculated here', p: 'Two subtractions, both on published counts from the same table and the same year. 4,060 minus 3,625 is the 435 more children living in Moerwijk than in Morgenstond. 1,734 minus 1,565 is the 169 more primary pupils taught in Morgenstond than in Moerwijk. Nothing else on this page is computed; every other figure is quoted as published, and no wijk row was averaged into a stadsdeel figure.' },
          { h3: 'The wijk that is missing, and why it is named anyway', p: 'Rustenburg en Oostbroek is the sixth wijk of Escamp and its row was not read for this page. It is named here rather than quietly omitted, because a list of five presented as a list of six is a specific and easy way to mislead, and because a reader who lives there should know at once that this page has nothing to say about it.' }
        ] },
        { kind: 'p', text: 'No relationship exists between Modern Age Coders and Escamp, its wijken, the municipality or any establishment counted above, and nothing on this page should be read as suggesting one. Each wijk row was taken from its own statistics office page. The vintages are mixed by the office rather than by this page: residents and ages are January 2026, households and housing are 2025, income is 2024. The 1986 formation of the stadsdeel and the 2009 completion of the Wateringse Veld are from the encyclopaedia entry.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Necessary, sufficient, or neither',
      intro: 'One count of buildings, three questions it does not answer, and the two failure modes of every condition anybody has ever written.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Ask whether it has to be true', p: 'Does a child in Moerwijk need a school inside Moerwijk in order to be educated? No. Schools admit from catchments that ignore wijk boundaries and families choose across them. So a school in the wijk is not a necessary condition for the wijk children to be at school, and its absence would prove nothing.' },
          { h3: '2. Ask whether it is enough on its own', p: 'Do thirteen establishments in Bouwlust guarantee that Bouwlust children have places? No. Their 2,954 pupils may live anywhere, and the count says nothing about the size of any of them, which is why five establishments elsewhere teach almost as many. So it is not a sufficient condition either.' },
          { h3: '3. Then say what the number does measure', p: 'It measures buildings with a school registered at an address inside a boundary. That is a real and useful fact about buildings. It becomes a false one the moment it is offered as an answer to a question about children, and nobody has to lie for that to happen.' }
        ] },
        { kind: 'table', caption: 'The same two questions, in five other places', head: ['The condition', 'Necessary?', 'Sufficient?', 'What goes wrong when it is treated as both'], rows: [
          ['Being over eighteen, to open an account', 'yes', 'no', 'Adults are let through who fail the checks nobody wrote'],
          ['A filename ending in .jpg, to be an image', 'no', 'no', 'Real images rejected, and anything renamed accepted'],
          ['Passing the tests, to be correct', 'no', 'no', 'Green suite read as proof, untested paths shipped'],
          ['Being logged in, to edit a document', 'yes', 'no', 'Any user can edit any document'],
          ['A school inside the wijk, to teach its children', 'no', 'no', 'A count of buildings reported as provision']
        ] },
        { kind: 'callout', h3: 'Almost every condition anybody writes is necessary without being sufficient, and almost nobody says so out loud', p: 'There are exactly two ways a condition can be wrong and they fail in opposite directions, which is why they are so rarely spotted together. A condition that is necessary but not sufficient lets things through: adulthood is required to open an account and is nowhere near enough, so a check that stops at age admits everyone who is old enough and fails everything else silently. A condition that is sufficient but not necessary keeps things out: a file ending in .jpg is probably an image, so a check that insists on the extension rejects every image that does not have it, and the rejection looks like the code working. Beginners write the first kind constantly, because the first condition they think of is genuinely required and the feeling of having thought of a real requirement is indistinguishable from the feeling of being finished. Experienced people write the second kind, because they know one reliable case and reach for it. The habit that fixes both takes fifteen seconds and is almost never done: for every condition, ask can this be false while the thing is still true, and can this be true while the thing is still false. If the first answer is yes the condition is not necessary. If the second is yes it is not sufficient. Most real conditions score yes on both, and once you have seen that written down you can no longer pretend the single test in front of you was the whole rule. This is the same move as noticing that thirteen buildings inside a boundary neither had to be there nor settle anything, and it is worth more than most of what gets called logic.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for a count that seems to answer your question',
      intro: 'Headcount, licence count, ticket count, store count, school count: every one of them is a real measurement of something, and each gets quoted as an answer to a question it was not measuring. Practised on a stadsdeel where thirteen schools and five schools teach nearly the same number of children.',
      body: [
        { kind: 'table', caption: 'Checking a count against the question you actually had', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Write the question', 'Say what you wanted to know, before looking at any figure', 'A number arriving in search of a use', 'Something the count can be judged against'],
          ['Name the population', 'State exactly who or what the count counts', 'Two different groups read as one', 'The mismatch, if there is one'],
          ['Test necessity', 'Ask if the condition can be false while the thing is true', 'A missing case treated as a disproof', 'Whether absence means anything'],
          ['Test sufficiency', 'Ask if it can be true while the thing is false', 'A present case treated as a guarantee', 'Whether presence means anything'],
          ['Report the gap', 'Publish what the count does measure, plainly', 'A useful fact doing a false job', 'A figure that survives being quoted']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A rule for who may join a game, written by the child, then broken by the teacher twice: once by someone who fits the rule and should not be in, once by someone who does not fit and clearly should.' },
          { h3: 'For teenagers', p: 'Every if statement in their own project annotated with the two answers, necessary and sufficient. The stretch: find the one guard that is doing the work of three and write the other two.' },
          { h3: 'For adults', p: 'A rule at work that decides eligibility, access or a discount. Adults almost always find one clause that was never required and one requirement that was never written into a clause.' }
        ] },
        { kind: 'p', text: 'Every quoted figure above belongs to one of five wijk pages published by the statistics office, and each column carries the year the office assigned it rather than a year chosen here. The encyclopaedia entry supplied four things and nothing else: that the stadsdeel dates from 1986, that it holds six wijken, that the Wateringse Veld was finished in 2009, and a 2015 count of 120,080. Two subtractions, both shown, are the whole of the arithmetic.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a rule for joining a game to an eligibility clause nobody has re-read',
    intro: 'Which rung a learner starts on is decided in the free hour, by what they turn out to be able to do. No part of it depends on the wijk, and no part of it depends on their age either.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Break your own rule', p: 'Children write a rule and then watch it admit the wrong person and turn away the right one.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Two questions per condition', p: 'Learners ask of every test whether it has to be true and whether it is enough.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'The guard doing three jobs', p: 'Teenagers find the single condition standing in for a rule nobody wrote down, and write it.', courses: ['complete-app-development-masterclass-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'The clause that was never required', p: 'Adults take a real eligibility rule apart and find both kinds of error in it.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will tell you Bouwlust has thirteen primary schools. Why should a teenager in Morgenstond ask thirteen schools for whom?',
    intro: 'Because the count is about buildings and the question was about children, and nothing in the answer marks the change of subject.',
    p1: 'Ask a model how well served a wijk is and it will reach for the establishment count, because that is the figure most often published next to that question and because it looks like an answer. It will not usually add that the schools inside a boundary teach whoever is enrolled rather than whoever lives there, that the count says nothing about how large any of them is, or that the two wijken at the top of that column teach 2,954 and 2,534 pupils from thirteen buildings and five. The model is not wrong about the thirteen. It has simply supplied a true fact about one population as though it were about another, which is the most common way a confident paragraph goes wrong and the hardest kind to notice, because there is nothing in it to contradict.',
    p2: 'So the learner practises the two questions on everything, starting with their own code, where the cost arrives fastest. Can this condition be false while the thing I care about is still true? Can it be true while the thing is still false? A fifteen-year-old in the Wateringse Veld who has run that check over their own if statements will be the person at thirty who reads a dashboard tile and asks which population it counted before agreeing with it. Models will keep answering the question that the nearest available number fits. Noticing that it was not your question stays a person job.',
    closer: 'The case for a child in Escamp learning to code in 2026 is therefore not about schools. It is that code is unusually honest about conditions: write one that is not sufficient and something wrong gets through, write one that is not necessary and something right gets refused, and either way the program tells you, which is more than most arguments do.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes across the largest stadsdeel in The Hague',
    intro: 'Escamp runs from Leyenburg down to the Wateringse Veld, and Bouwlust alone covers 428 hectares, so this is a district where getting to a weekly activity is a real question rather than a formality.',
    cells: [
      { h3: 'Four hundred and twenty-eight hectares, and no journey at all', p: 'Bouwlust is larger than several Dutch towns and the Wateringse Veld sits at the far southern edge of the city. A weekly class that requires crossing that is a class that gets dropped in November; one that starts at the kitchen table does not.' },
      { h3: 'The school words stay Dutch', p: 'Groep, havo, vwo and profielkeuze are used untranslated inside an English lesson. A child reading those on a report card should meet the same words in class, not an approximation that has to be converted back before it means anything.' },
      { h3: 'What the free hour is actually for', p: 'It is a lesson, with a task, taught by a teacher who is watching how the learner works rather than whether they say yes. It ends with a level, a course and a weekly time. Nothing is charged and no card is requested.' },
      { h3: 'Level decides the group; the address never does', p: 'Five to ten learners at the same stage, gathered from wherever they are. A single stadsdeel, however large, rarely holds enough people at one narrow level in one month, and waiting for it to is how a family ends up waiting a term.' },
      { h3: 'Eight lessons a month, holidays already in the plan', p: 'Two live lessons a week at a fixed hour. Zuid-Holland follows the regio Midden holiday calendar, which is published years ahead, so the weeks off are agreed at the start rather than discovered later.' },
      { h3: 'A gap that changes without anyone in India moving a clock', p: 'Three and a half hours in Dutch summer time, four and a half outside it. The teacher sits in a country that has kept one time for decades; the whole of the shift comes from this side, and neither setting touches the hours a family here would use.' }
    ],
    spec: { title: 'The most children in the stadsdeel, and still no guarantee of a group', p: 'Bouwlust has 5,325 residents under fifteen and the Wateringse Veld 4,750, the two largest child populations of the five wijken read here. That is a great many eleven-year-olds. It is still not five to ten of them at one particular stage of one particular subject in one particular month, because a stage is narrow and a wijk is only a place; the two conditions are independent, and having plenty of the second does nothing about the first. That is why the groups are built by stage from a worldwide pool, and why they run at every age between 6 and 67.' }
  },

  fees: {
    h2: 'The fee, in dollars, in all six wijken',
    intro: 'Set out here, not held back for a call.',
    first: 'A complete lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'One international rate in dollars and no euro edition, so an address in the Hoge Veld pays exactly what one in Moerwijk pays. Nothing is due until the free lesson has fixed a course and an hour, and payment is arranged over WhatsApp after that. Pausing, changing plan and missing a week are all covered on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, exactly as the people who left them wrote them',

  book: {
    h2: 'Send the level, not the wijk',
    intro: 'The first task might be a rule for joining a game that lets in the wrong child, an if statement asked whether it has to be true and whether it is enough, or a rule at work that decides who qualifies and has never been taken apart.',
    success: 'Thank you. Your Escamp class request has been sent.'
  },

  faq: {
    h2: 'Escamp coding class questions',
    intro: 'The stadsdeel, its six wijken, one thing a count of buildings cannot tell you, the teaching and the terms.',
    items: [
      { q: 'Which neighbourhoods make up Escamp?', a: 'Six wijken: Bouwlust en Vrederust, Leyenburg, Moerwijk en Zuiderpark, Morgenstond, Rustenburg en Oostbroek and the Wateringse Veld. The stadsdeel was created in 1986 when the council divided The Hague into seven districts, most of it was built after the Second World War, and it became the largest by population once the Wateringse Veld was added, that wijk having been fully inhabited since 2009.' },
      { q: 'Does Bouwlust have more schools than the Wateringse Veld?', a: 'More establishments, yes: 13 against 5. Not correspondingly more pupils, though. Those thirteen teach 2,954 primary pupils and those five teach 2,534, so a ratio of nearly three to one in buildings produces a difference of a few hundred in children. A count of establishments is a count of registered locations and carries no information about how large any of them is.' },
      { q: 'Which wijk in Escamp has the most children?', a: 'Bouwlust, with 5,325 residents under fifteen, 18 percent of the wijk, then the Wateringse Veld with 4,750, Moerwijk with 4,060, Morgenstond with 3,625 and Leyenburg with 2,395, which at 14 percent is the lowest child share of the five read here. Rustenburg en Oostbroek, the sixth wijk, was not read.' },
      { q: 'Does a school inside a wijk mean local children have places there?', a: 'It does not follow, in either direction. A school in the wijk is not necessary, since children attend across boundaries as a matter of course, and it is not sufficient, since its places may be filled by children from anywhere. That is why this page reports the establishment counts, the pupil counts and the resident child counts as three separate things and does not use any of them to stand in for another.' },
      { q: 'Why does this page not give one population for Escamp?', a: 'Because no current one is published. The encyclopaedia entry gives 120,080 for 2015 and the Hague city page in this series carries 128,967 for 2022, and neither is a 2026 count. The five wijken read here are 2026 and exact, but five of six is not the whole, so no total is asserted and the dated figures appear as context only.' },
      { q: 'Is the class taught in Dutch?', a: 'No. Everything is taught in English, apart from the Dutch school vocabulary, which is left as it is: groep, havo, vwo and profielkeuze are used in class exactly as a child meets them on their school paperwork. There is no Dutch-language version of any course.' },
      { q: 'What hours suit a family in Escamp?', a: 'The teacher is three and a half hours ahead during Dutch summer time and four and a half outside it, and every bit of that change originates in the Netherlands rather than in India. Nothing useful is lost: after school, early evening and both weekend days are all available. One weekly hour is agreed at the free lesson and then holds.' },
      { q: 'Is there a Modern Age Coders classroom in Escamp?', a: 'No, and none is claimed here, elsewhere in The Hague or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Escamp coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or address. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore The Hague and beyond',
    h2: 'North into the centre, and out across Zuid-Holland',
    html: 'North is <a class="cg-inline-link" href="/coding-classes-in-the-hague-centrum">Den Haag Centrum</a>, whose page refuses to grade a household figure at all. The city page, <a class="cg-inline-link" href="/coding-classes-in-the-hague">coding classes in The Hague</a>, carries all eight stadsdelen and the schools named across them. South-west across the boundary are the greenhouses of the <a class="cg-inline-link" href="/coding-classes-in-westland">Westland</a>, east is <a class="cg-inline-link" href="/coding-classes-in-zoetermeer">Zoetermeer</a>, and everything here sits inside <a class="cg-inline-link" href="/coding-classes-in-zuid-holland">Zuid-Holland</a>. Every page in this series hangs off the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>. Anyone whose real interest is training a model rather than writing a program has two better starting points: <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a>, or the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>.',
    waLabel: 'Finish this on WhatsApp'
  },

  footerHeading: 'The Hague and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-the-hague', label: 'The Hague' },
    { href: '/coding-classes-in-the-hague-centrum', label: 'Den Haag Centrum' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-esc .cg-hero-grid { grid-template-columns: 1.15fr 1fr; align-items: start; }
.cg-root.cg-esc .cg-hero h1 { font-weight: 500; letter-spacing: -0.0125em; line-height: 1.12; }
.cg-root.cg-esc .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 1.05rem; }
.cg-root.cg-esc .cg-eyebrow { letter-spacing: 0.145em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-esc .cg-section-head h2 { max-width: 34ch; letter-spacing: -0.014em; }
.cg-root.cg-esc .cg-grid-3 { gap: clamp(1.15rem, 2.4vw, 1.9rem); }
.cg-root.cg-esc .cg-card { border-radius: 2px; border-bottom: 3px solid var(--cg-accent-soft); }
.cg-root.cg-esc .cg-table caption { letter-spacing: 0.045em; font-weight: 600; }
.cg-root.cg-esc .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-esc .cg-table tbody tr:first-child td { font-weight: 600; }
.cg-root.cg-esc .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 1.1rem; }
`,

  dossier: {
    curriculumAuthority: 'Stadsdeel Escamp, Den Haag, Zuid-Holland: the largest stadsdeel by population, created 1986 when the council divided The Hague into seven districts, mostly built after the Second World War, with the Vinex wijk Wateringse Veld fully inhabited since 2009; 120,080 residents at the 2015 encyclopaedia figure and 128,967 on the city page for 2022, neither current; six wijken, Bouwlust en Vrederust, Leyenburg, Moerwijk en Zuiderpark, Morgenstond, Rustenburg en Oostbroek and Wateringse Veld. Five read in full at 2026: Bouwlust 29,012 on 428 hectares, density 7,088, 14,230 households averaging 2.1 with 7,105 single at 50 percent, 5,325 under fifteen at 18 percent, 12,877 dwellings, value 275,000 euro, 3,348 owner-occupied at 26 percent, income 24,700 euro, 13 primary establishments with 2,954 pupils and 3 secondary with 877, buurten Venen Oorden en Raden, Zijden Steden en Zichten, Dreven en Gaarden and De Uithof; Wateringse Veld 24,628 on 328 hectares, density 8,059, 9,175 households averaging 2.6 with only 2,415 single at 26 percent, 4,750 under fifteen, 8,708 dwellings, value 479,000 euro, 5,312 owner-occupied at 61 percent, income 36,000 euro, 5 primary establishments with 2,534 pupils, buurten Erasmus Veld, Hoge Veld, Parkbuurt Oosteinde, Lage Veld and Zonne Veld; Moerwijk 21,974 on 180 hectares, density 12,157, 11,125 households averaging 1.9, 4,060 under fifteen, 10,585 dwellings, value 230,000 euro, 1,799 owner-occupied, income 23,500 euro, 7 primary establishments with 1,565 pupils; Morgenstond 20,553 on 169 hectares, density 12,375, 10,565 households averaging 1.9 with 5,505 single, 3,625 under fifteen, 10,161 dwellings, value 262,000 euro, income 26,200 euro, 8 primary establishments with 1,734 pupils; Leyenburg 17,143 on 135 hectares, density 13,194, 9,150 households averaging 1.8 with 4,685 single, 2,395 under fifteen at 14 percent, 8,492 dwellings, value 282,000 euro, 4,671 owner-occupied at 55 percent, income 31,800 euro, 4 primary establishments with 1,454 pupils and no secondary. Regio Midden holidays. The district page argues necessary versus sufficient; Den Haag Centrum owns the missing standard, The Hague city page the stadsdeel populations and named schools, Hillegersberg-Schiebroek correlated measures and Amsterdam-Zuid the gap between two registers.',
    localProject: 'A condition can fail in two opposite directions and almost nobody checks both. Bouwlust has 13 primary establishments teaching 2,954 pupils; the Wateringse Veld has 5 teaching 2,534. A ratio of nearly three to one in buildings produces a few hundred children of difference, because an establishment count counts registered locations and carries no information about the size of any of them. Worse, neither column is about the children of either wijk. A school standing inside a wijk is not necessary for its children to be schooled, since admission crosses boundaries as a matter of course, and it is not sufficient, since its places may be filled from anywhere: Moerwijk has 435 more residents under fifteen than Morgenstond while 169 fewer primary pupils are taught inside it, from one establishment fewer. Three counts, three populations, routinely read as one. The programming form is the commonest logic bug there is. A condition that is necessary but not sufficient lets the wrong things through, which is what a check on age alone does to an account signup; a condition that is sufficient but not necessary keeps the right things out, which is what insisting on a .jpg extension does to images. Beginners write the first kind because the first requirement they think of is genuinely required and feeling that is indistinguishable from being finished. The fifteen-second repair is two questions asked of every condition: can this be false while the thing is true, and can it be true while the thing is false. Distinct from the missing standard (Den Haag Centrum), which is about a verdict needing an imported goal, and from the gap between two registers (Amsterdam-Zuid), which subtracts one count from another: here both counts are correct and the error is treating a spatial label as a membership condition. The page reports the three columns separately and lets none stand for another.',
    requiredMentions: [
      '2,954',
      '2,534',
      '1,565',
      '1,734',
      '1,454',
      '5,325',
      '3,625',
      '2,395',
      '4,060',
      '14,230',
      '9,175',
      '12,877',
      '479,000',
      'Erasmus Veld'
    ],
    sources: [
      { claim: 'Wijk 33 Bouwlust, Den Haag: 29,012 inwoners (2026); 14,230 huishoudens averaging 2.1, 7,105 eenpersoonshuishoudens at 50 percent; ages 5,325 (0 to 15, 18 percent), 3,910 (15 to 25, 13 percent), 8,090 (25 to 45, 28 percent), 7,250 (45 to 65, 25 percent), 4,430 (65+, 15 percent); 428 hectare; bevolkingsdichtheid 7,088 per km2; woningvoorraad 12,877; gemiddelde WOZ 275,000 euro (2025); 9,529 huurwoningen (74 percent) and 3,348 koopwoningen (26 percent); gemiddeld inkomen 24,700 euro (2024); 13 vestigingen basisonderwijs with 2,954 leerlingen and 3 vestigingen voortgezet onderwijs with 877 leerlingen; buurten: Venen Oorden en Raden, Zijden Steden en Zichten, Dreven en Gaarden, De Uithof.', url: 'https://allecijfers.nl/wijk/bouwlust-den-haag/' },
      { claim: 'Wijk 40 Wateringse Veld, Den Haag: 24,628 inwoners (2026); 9,175 huishoudens averaging 2.6, 2,415 eenpersoonshuishoudens at 26 percent and 6,760 meerpersoonshuishoudens at 74; ages 4,750 (0 to 15, 19 percent), 3,420 (15 to 25, 14 percent), 6,000 (25 to 45, 24 percent), 7,115 (45 to 65, 29 percent), 3,320 (65+, 13 percent); 328 hectare; bevolkingsdichtheid 8,059 per km2; woningvoorraad 8,708; gemiddelde WOZ 479,000 euro (2025); 3,309 huurwoningen (38 percent) and 5,312 koopwoningen (61 percent); gemiddeld inkomen 36,000 euro (2024); 5 vestigingen basisonderwijs with 2,534 leerlingen and 1 vestiging voortgezet onderwijs with 612 leerlingen; 5 buurten: Erasmus Veld, Hoge Veld, Parkbuurt oosteinde, Lage Veld, Zonne Veld.', url: 'https://allecijfers.nl/wijk/wateringse-veld-den-haag/' },
      { claim: 'Wijk Moerwijk, Den Haag: 21,974 inwoners (2026); 11,125 huishoudens averaging 1.9, 6,050 eenpersoonshuishoudens at 54 percent; ages 4,060 (0 to 15, 18 percent), 2,785 (15 to 25, 13 percent), 7,130 (25 to 45, 32 percent), 5,405 (45 to 65, 25 percent), 2,615 (65+, 12 percent); 180 hectare; bevolkingsdichtheid 12,157 per km2; woningvoorraad 10,585; gemiddelde WOZ 230,000 euro (2025); 8,786 huurwoningen (83 percent) and 1,799 koopwoningen (17 percent); gemiddeld inkomen 23,500 euro (2024); 7 vestigingen basisonderwijs with 1,565 leerlingen and 1 vestiging voortgezet onderwijs with 472 leerlingen; 4 buurten: Moerwijk-Oost, Moerwijk-West, Moerwijk-Noord, Moerwijk-Zuid.', url: 'https://allecijfers.nl/wijk/moerwijk-den-haag/' },
      { claim: 'Wijk 34 Morgenstond, Den Haag: 20,553 inwoners (2026); 10,565 huishoudens averaging 1.9, 5,505 eenpersoonshuishoudens at 52 percent; ages 3,625 (0 to 15, 18 percent), 2,320 (15 to 25, 11 percent), 6,700 (25 to 45, 33 percent), 5,310 (45 to 65, 26 percent), 2,580 (65+, 13 percent); 169 hectare; bevolkingsdichtheid 12,375 per km2; woningvoorraad 10,161; gemiddelde WOZ 262,000 euro (2025); 7,722 huurwoningen (76 percent) and 2,439 koopwoningen (24 percent); gemiddeld inkomen 26,200 euro (2024); 8 vestigingen basisonderwijs with 1,734 leerlingen and 1 vestiging voortgezet onderwijs with 275 leerlingen; 3 buurten: Morgenstond-Oost, Morgenstond-West, Morgenstond-Zuid.', url: 'https://allecijfers.nl/wijk/morgenstond-den-haag/' },
      { claim: 'Wijk 32 Leyenburg, Den Haag: 17,143 inwoners (2026); 9,150 huishoudens averaging 1.8, 4,685 eenpersoonshuishoudens at 51 percent and 4,465 meerpersoonshuishoudens at 49; ages 2,395 (0 to 15, 14 percent), 2,000 (15 to 25, 12 percent), 5,735 (25 to 45, 33 percent), 4,040 (45 to 65, 24 percent), 2,965 (65+, 17 percent); 135 hectare; bevolkingsdichtheid 13,194 per km2; woningvoorraad 8,492 (2025); gemiddelde WOZ 282,000 euro (2025); 3,821 huurwoningen (45 percent) and 4,671 koopwoningen (55 percent); gemiddeld inkomen 31,800 euro (2024); 4 vestigingen basisonderwijs with 1,454 leerlingen and 0 vestigingen voortgezet onderwijs.', url: 'https://allecijfers.nl/wijk/leyenburg-den-haag/' },
      { claim: 'Stadsdeel Escamp, Den Haag: formed in 1986 after the council decided to divide The Hague into seven stadsdelen; largely built after the Second World War; became the district with the most residents through the addition of the Vinex district Wateringse Veld, which has been completely inhabited since 2009; more than 40,000 migrants; 120,080 inwoners (2015); six wijken: Bouwlust en Vrederust, Leyenburg, Moerwijk en Zuiderpark, Morgenstond, Rustenburg en Oostbroek, Wateringse Veld.', url: 'https://nl.wikipedia.org/wiki/Escamp' },
      { claim: 'School holiday regions: regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'That any wijk is well or badly served by schools. Establishment counts, pupil counts and resident child counts are three different populations and this page keeps them apart rather than combining them into a judgement.',
      'That a school inside a wijk teaches the children of that wijk, or that its absence would mean they are unschooled. Neither follows, which is the argument of the page.',
      'A population for stadsdeel Escamp. The published totals are 120,080 for 2015 and 128,967 for 2022 on the city page; both are dated wherever used and neither is presented as current.',
      'Any stadsdeel figure built from the five wijken read. Five of six is a subset, and Rustenburg en Oostbroek is named rather than silently dropped.',
      'Any estimate of how many of the under-fifteens are of primary age. Dutch primary school runs from four to twelve and the published band runs from zero to fifteen, but slicing the band by assuming an even spread of ages inside it is exactly the move the IJsselmonde page in this series takes apart, and it is not made here.',
      'Any ranking of the wijken by income or by dwelling value, or any claim that those two orders agree. That is the Hillegersberg-Schiebroek page argument.',
      'Any reading of a gap between two published registers as a quantity. That is the Amsterdam-Zuid page argument; the two subtractions here compare the same measure across two wijken, not two different measures of one wijk.',
      'Figures for Rustenburg en Oostbroek. It is the sixth wijk, it is named, and its row was not read.',
      'Anything the Hague city page owns, including the stadsdeel population table, the named secondary schools and their addresses.'
    ]
  }
};
