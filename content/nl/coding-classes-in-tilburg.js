'use strict';
// Tilburg: the second city of Noord-Brabant, a wool town that lost its mills
// and rebuilt around a university. Spine: Tilburg is divided into 59 wijken
// and Groningen, a city of almost the same size, into 20. Every per-
// neighbourhood statistic in the country is a fact about the lines as much as
// about the people inside them.

module.exports = {
  slug: 'coding-classes-in-tilburg',
  code: 'tlb',
  accent: '#803103',
  accentRationale: 'Tilburg: a burnt orange-brown for the wool town, placed by the solver clear of Amstelveen\'s orange and Noord-Brabant\'s sienna',
  pageType: 'city',
  place: {
    name: 'Tilburg',
    eyebrow: 'Tilburg, Noord-Brabant',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Noord-Brabant' },
      { type: 'Country', name: 'Netherlands' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Tilburg, Netherlands',
  title: 'Coding Classes in Tilburg | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in Tilburg for ages 6 to 67, from Reeshof to Berkel-Enschot and Udenhout. First lesson free, then one flat monthly fee.',
  ogDescription: 'Live online coding, Python, AI and mathematics for families in Tilburg, the wool city that rebuilt around a university, built on the neighbourhood average that measures the map.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'data-analysis-mastery-course-college',
  verifiedOn: '7 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Tilburg Learners',
    description: 'Ability-placed online coding, Python, data, AI and mathematics for children, teenagers and adults in Tilburg, Berkel-Enschot and Udenhout, taught in English.'
  },

  h1: 'Coding classes in Tilburg, where the average neighbourhood has 3,911 people because someone drew 59 of them',
  capsuleQ: 'What are the best coding classes in Tilburg?',
  capsule: 'Coding classes in Tilburg serve a municipality of 230,746 people (Statistics Netherlands, 1 January 2026), the second city of Noord-Brabant and the sixth or seventh largest in the country depending on the year you check. The statistics office divides it into 59 wijken and 254 buurten, so its average neighbourhood holds 3,911 people; it divides Groningen, a city 6 percent larger, into 20 wijken, whose average holds 12,221. Neither city is more neighbourly than the other. Modern Age Coders teaches live online in English across all of them, for ages 6 to 67, with the first lesson free and then USD 100 a month for a group of five to ten or USD 150 one-to-one.',
  lead: 'A newspaper says the average Dutch neighbourhood has so many people, so much income, so much of something per head. Before believing it, ask who drew the neighbourhood. Tilburg is cut into 59 wijken and Groningen into 20, for populations that differ by six percent, so Tilburg\'s average wijk is a third the size of Groningen\'s before a single person moves house. A child who has computed both averages and seen the gap has learned that a per-area statistic measures the map as much as the place.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Tilburg.',

  picks: {
    eyebrow: 'Course picks for Tilburg',
    h2: 'Four courses for a city that rebuilt itself once already',
    intro: 'A groep 5 child in Reeshof, a teenager in Udenhout who wants the web to be something she makes, a Tilburg University student whose degree assumes data skills it never taught, and a parent in Berkel-Enschot whose job description changed under them: four doors into one city.',
    items: [
      { course: 'kids-ai-web-development-course', band: 'Ages 8 to 12', note: 'Real HTML and CSS with AI as a helper rather than a shortcut, in English, for the groep 5 to 8 child who wants a page of her own.' },
      { course: 'frontend-development-masterclass-for-teens', band: 'Ages 13 to 18', note: 'CSS done properly, then JavaScript and React, for the teenager who is tired of templates that all look the same.' },
      { course: 'data-analysis-mastery-course-college', band: 'College and adult', note: 'Excel, SQL, Python and BI end to end, for the economics, law or social science student whose course sets data work and teaches none.' },
      { course: 'ai-tools-mastery-complete-college', band: 'Adults', note: 'ChatGPT, Claude and automation used with judgement, for the working parent whose employer switched the tools on and explained nothing.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Tilburg today',
      h2: 'A quarter of a million people, 125 wool mills gone, one university',
      intro: 'The municipal register held 230,746 people on 1 January 2026 by the national count, living in 115,876 households of 1.95 on average. The land under them measures 125.89 square kilometres, 128.46 counting water, which works out at 1,830 residents to the square kilometre. Set against 185,107 in 1995, that is 45,639 more people in thirty-one years, a quarter again.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'A city of families and students at once', p: '31,513 residents are under fifteen and 34,328 are between fifteen and twenty-five; 67,036 are between twenty-five and forty-five and 41,402 are sixty-five or over. Forty-seven percent of households hold one person. That is a more ordinary shape than a pure student city, and it is why this page is written for the whole age range rather than one end of it.' },
          { h3: 'The schools and the university', p: '55 primary establishments teach 17,440 pupils and 19 secondary establishments teach 10,770. The municipality counts 31,774 students in higher education. Tilburg University, founded in 1927 as a Roman Catholic commercial college and renamed in 2010, had 19,168 students in 2024 across five schools, with about 3,096 full-time-equivalent staff.' },
          { h3: 'What the mills left behind', p: 'In 1871 the city held 125 wool-cloth factories. The industry fell away from the 1960s and the city had to become something else, which is the plainest local argument this page can make for learning a skill that is still being invented rather than one that is finished.' }
        ] },
        { kind: 'spec', title: 'City rights from a passing king', p: 'Tilburg was granted city rights on 18 April 1809 by Louis Napoleon during an inspection tour of Brabant and Zeeland, which makes it young as Dutch cities go and explains why it has no medieval centre to speak of. The municipality today also holds Berkel-Enschot and Udenhout, villages with their own names, schools and post-war memories of being separate.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Where the learners are',
      h2: 'Fifty-nine wijken, two villages, and one class that reaches all of them',
      intro: 'The municipality is described at two levels at once: 59 wijken subdivided into 254 buurten by the statistics office, and a handful of large city districts in ordinary speech. Both are below, and the difference between them is the subject of this page.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Oud-Zuid and Oud-Noord', p: 'The two halves of the old city, 43,979 and 34,976 people in 2024, on either side of the railway that once carried the wool. The centre, the university quarter and the nineteenth-century streets that grew around the mills.' },
          { h3: 'Reeshof', p: '43,757 people in 2024, the great western expansion built from the 1980s onward, a district larger than most Dutch towns and served by its own station. In the statistics office\'s classification it is not one wijk but several.' },
          { h3: 'West and the rest of the city', p: '27,976 people in 2024 in West, plus the northern and eastern districts. Between them these named districts account for most of the city, and the wijk table cuts across them rather than matching them.' },
          { h3: 'Berkel-Enschot', p: '14,481 people in 2024, east of the city, a village with its own primary schools that joined the municipality but not the city. For a family here the nearest secondary school is a bus ride and the nearest coding class was, until now, further.' },
          { h3: 'Udenhout', p: '8,730 people in 2024, north-east of the city, the smaller of the two villages, with the same arithmetic: a school run, a sports club, and no reason a weekly coding lesson should require another journey.' },
          { h3: 'The city as the statistics office sees it', p: '59 wijken and 254 buurten. That is 3,911 people to the average wijk and 908 to the average buurt, and 213 hectares of land to a wijk. Hold those three numbers; the project below is about what they do and do not mean.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders teaches into all of it at one hour, and where the learner sits in the wijk table has never once decided which group they join.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Every figure and its source, including two Tilburgs and two areas',
      intro: 'The national count, the encyclopaedia entry for the city, the university, and the places where the two do not describe the same thing.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The municipal count', p: 'Statistics Netherlands, provisional, 1 January 2026: 230,746 residents; 115,876 households averaging 1.95 people, 47 percent of them single-person; 31,513 under fifteen; 34,328 aged fifteen to twenty-five; 67,036 aged twenty-five to forty-five; 41,402 aged sixty-five and over; 55 primary establishments with 17,440 pupils and 19 secondary with 10,770; 31,774 students in higher education; total area 12,846 hectares, land 12,589; density 1,830; 59 wijken and 254 buurten; 185,107 residents in 1995, a rise of 45,639.' },
          { h3: 'The city, as against the municipality', p: 'The encyclopaedia entry for Tilburg gives 203,690 inhabitants in 2023 on 88.6 square kilometres, 86.65 of them land, at 2,351 to the square kilometre. Those are figures for the city; the municipal figures above cover a larger area and include Berkel-Enschot and Udenhout. Both sets are printed here with what they describe, and no figure from one is used with a figure from the other.' },
          { h3: 'The districts', p: 'From the same entry, 2024 populations: Oud-Zuid 43,979; Reeshof 43,757; Oud-Noord 34,976; West 27,976; Berkel-Enschot 14,481; Udenhout 8,730. These are named districts and villages, not the statistics office\'s wijken, and the page does not treat them as the same objects.' },
          { h3: 'City rights and the mills', p: 'City rights granted on 18 April 1809 by Louis Napoleon; 125 wool-cloth factories in the city in 1871; the industry in decline from the 1960s onward, forcing an economic restructuring.' },
          { h3: 'The university', p: 'Tilburg University, founded 1927 as the Roomsch Katholieke Handelshoogeschool, renamed Tilburg University in 2010; 19,168 students in 2024; about 3,096 full-time-equivalent staff; five schools covering economics and management, law, social and behavioural sciences, humanities and digital sciences, and Catholic theology.' },
          { h3: 'Two student counts, not one', p: 'The municipality reports 31,774 students in higher education; the university reports 19,168 of its own in 2024. The gap is other institutions and other definitions, not a contradiction, and the page never subtracts one from the other to imply a number for anybody else.' }
        ] },
        { kind: 'p', text: 'No connection exists or is implied between Modern Age Coders and the municipality, the university or any school named here. They appear because a page that claims to teach Tilburg should be able to say which Tilburg it means.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Fifty-nine against twenty: build the program that shows a neighbourhood average measuring the map',
      intro: 'Two cities of almost the same size, two published divisions of them, and a per-neighbourhood statistic that moves by a factor of three without anybody moving house.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Compute both averages', p: 'Tilburg: 230,746 people in 59 wijken is 3,911 to a wijk. Groningen: 244,427 people in 20 wijken is 12,221. The learner has two correct averages of the same kind of thing, three times apart, for two cities whose populations differ by six percent.' },
          { h3: '2. Change the level and watch it move again', p: 'At buurt level Tilburg has 254 and Groningen 160, giving 908 and 1,528 people to a buurt, a gap of 1.7 rather than 3.1. The same two cities, the same two populations, a different ratio, because the two levels were drawn to different conventions.' },
          { h3: '3. Try to rescue it with land', p: 'Per hectare it flips shape again: Tilburg has 213 hectares of land to a wijk and Groningen 928. The learner discovers that no per-zone figure survives the change of zoning, and that the only honest comparisons are the ones computed on the whole territory: 1,830 people per square kilometre in Tilburg against 1,318 in Groningen.' }
        ] },
        { kind: 'table', caption: 'Two cities, four ways of counting the same thing', head: ['Measure', 'Tilburg', 'Groningen', 'Ratio', 'Does it depend on the zoning?'], rows: [
          ['Residents', '230,746', '244,427', '0.94', 'no'],
          ['People per wijk', '3,911 across 59 wijken', '12,221 across 20 wijken', '0.32', 'yes'],
          ['People per buurt', '908 across 254 buurten', '1,528 across 160 buurten', '0.59', 'yes'],
          ['People per square kilometre of land', '1,830', '1,318', '1.39', 'no']
        ] },
        { kind: 'callout', h3: 'Draw the lines differently and every per-zone number changes', p: 'The trouble is not that one of these figures is wrong. All four are correct arithmetic on published counts. The trouble is that two of them describe a decision made in an office about where to put boundaries, and two of them describe the ground. Any statistic of the form "per neighbourhood", "per district", "per zone" inherits the zoning, so two places can be compared on it only if the zones were drawn to the same rule, and Dutch wijken plainly are not. The same city can even carry two divisions at once: the statistics office splits Groningen into 20 wijken and 160 buurten while the municipality\'s own entry gives 14 wijken and 106 buurten. A learner who has computed all four rows will ask, of every per-area figure they meet, who drew the areas. The table was computed before this paragraph was written, from the two municipalities\' published counts and nothing else.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for any number that comes with the word "per" in it',
      intro: 'Per neighbourhood, per store, per region, per team, per ward, per bin: the moment a total is divided by a count of containers, the containers are part of the answer. The city outside the window is where the habit gets built.',
      body: [
        { kind: 'table', caption: 'When the denominator is a set of boundaries', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Ask who drew the zones', 'Find out which body defined the units and to what rule', 'Tilburg called fragmented and Groningen cohesive', 'A denominator you can defend'],
          ['Check the count is comparable', 'Two places compared per-zone need zones drawn alike', 'A ratio of 0.32 that is really a ratio of conventions', 'A comparison that survives scrutiny'],
          ['Prefer a natural denominator', 'People, households, square kilometres: things that exist without an office', '1,830 against 1,318 confused with 3,911 against 12,221', 'A figure about the ground'],
          ['Recompute at another level', 'If wijk and buurt disagree about the story, the story is the zoning', 'One level quoted as if it were the truth', 'Evidence the effect is real'],
          ['Say which division you used', 'Name the classification and its date beside the number', 'Two published divisions of one city silently mixed', 'A number a reader can reproduce']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'Twenty counters on a table and a piece of string. The child encloses them in four loops, then in ten, and computes counters per loop each time. Nothing was added or taken away and the answer halved. The child says why, and has understood the whole lesson before any code is written.' },
          { h3: 'For teenagers', p: 'The four rows above in Python from the two cities\' published counts, then a chart with the zoning-dependent measures in one colour and the ground-truth measures in another. The stretch: given only "average people per wijk", what can you honestly say about a city, and what can you not?' },
          { h3: 'For adults', p: 'The same test on a per-unit figure from work: sales per region, tickets per team, cost per site. Adults usually find that the regions were redrawn at some point and that the series either side of the redraw is being read as one trend.' }
        ] },
        { kind: 'p', text: 'Residents, households, areas, densities, the wijk and buurt counts, the school figures and the university figures all come from the offices and entries cited beside them. Everything expressed as people per wijk, people per buurt or hectares per wijk is this page dividing those published counts, and it is marked as derived every time it appears.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From counters and string to a comparison that survives a redrawn boundary',
    intro: 'Where a learner starts is worked out during the free hour. Nothing about the postcode enters that decision.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Four loops or ten', p: 'Children divide the same counters into different numbers of loops and watch the average move.', courses: ['kids-coding-blocks-masterclass', 'kids-ai-web-development-course'] },
      { band: 'Ages 11 to 13', h3: 'Totals, counts and division', p: 'Learners compute a per-container average and explain which part of it is about the containers.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'Comparing two places honestly', p: 'Teenagers build all four rows, chart them and separate the zoning-dependent from the real.', courses: ['frontend-development-masterclass-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Per-unit figures at work', p: 'Adults find a per-region series that crosses a redraw and rebuild it on a stable denominator.', courses: ['data-analysis-mastery-course-college', 'ai-tools-mastery-complete-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will happily tell you Tilburg has more neighbourhoods than Groningen. Why should a child here learn what that is worth?',
    intro: 'Because it is true, it is sourced, and as a statement about the two cities it is close to meaningless.',
    p1: 'Ask a tool how Tilburg\'s neighbourhoods compare with another city\'s and it will give you counts and averages, correctly, from the published tables. It will not pause to say that a wijk is an administrative object rather than a natural one, that the two cities were carved by conventions that differ, or that the comparison collapses the moment you switch to buurten or to square kilometres. Those objections come from someone who has computed the four rows and watched the ratio go from 0.32 to 0.59 to 1.39.',
    p2: 'That is what the class is for, and it is why the learner still writes the divisions rather than reading the summary. The tool will produce the table, the chart and the caveat the instant it is asked for them. What it will not do unprompted is refuse a comparison. A twelve-year-old in Reeshof who has seen an average move by a factor of three without anyone moving house will ask who drew the regions behind a sales chart at twenty-two and behind a school league table at thirty-two. The tools will look different by then. Denominators will not.',
    closer: 'None of this is an argument that a Tilburg child should grow up to draw maps. It is an argument that the word "per" conceals somebody\'s decision, that uncovering the decision takes four lines of arithmetic, and that a child remembers the lesson permanently when the four lines are run on their own city and on one two hours up the motorway.',
    blogAnchor: 'the longer case for teaching a child to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for a city and the two villages attached to it',
    intro: 'Reeshof to Udenhout is a real journey on a wet Tuesday, and Berkel-Enschot has its own centre and its own school run. The lesson goes to all three at the same hour.',
    cells: [
      { h3: 'Nobody crosses the city for it', p: 'The lesson happens at the kitchen table in Reeshof, Udenhout or the Oud-Noord at a fixed weekly hour, in November as easily as in May.' },
      { h3: 'Taught in English, school words left in Dutch', p: 'The instruction is English throughout. Where the child\'s school says groep, havo, vwo or profielkeuze, so does the teacher, without translating either way.' },
      { h3: 'An hour that costs nothing and decides everything', p: 'The teacher sets work at the level the learner is actually at, names the course that follows from it, and books the weekly time. No payment details are collected to do any of that.' },
      { h3: 'What decides the group is what the learner can do', p: 'Two learners at the same stage work together whether one lives by the Piushaven and the other in a village; two at different stages do not, however close their front doors are.' },
      { h3: 'Eight lessons in most months, on the southern holiday calendar', p: 'The pattern is two lessons weekly at one fixed slot. Tilburg\'s school year runs on regio Zuid, shared with Limburg and Zeeland, and any weeks the family is away are written into the schedule before the slot is agreed.' },
      { h3: 'The teacher is ahead by three and a half hours, or four and a half', p: 'Clocks shift here twice a year and never in India, which puts Tilburg that far behind Delhi depending on the month. The overlap that matters runs from the end of the school day to mid-evening, and all day Saturday and Sunday.' }
    ],
    spec: { title: 'A city that has already retrained once', p: 'Tilburg lost 125 wool mills and built a university city on the site. The families here understand better than most that the skill a child needs is the one that outlives the industry, and a weekly hour at home is the cheapest way to start finding out whether this is that skill.' }
  },

  fees: {
    h2: 'What it costs, in dollars, for every address in the municipality',
    intro: 'Published on the page so nobody has to ask.',
    first: 'A complete lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'There is a single international rate, quoted in dollars, and no separate euro list, which means an Udenhout family and a city-centre family see the same figure. Money changes hands only after the free lesson has produced a course and a timetable, and it changes hands over WhatsApp. What happens if you pause, change plan or miss a week is set out on the pricing page.'
  },

  reviewsH2: 'Six families, quoted from Google exactly as they wrote it',

  book: {
    h2: 'Send the level. The address can wait.',
    intro: 'Depending on who is learning, the first thing on screen might be twenty counters and a loop of string, four lines of division in Python, or a per-region figure from work that quietly crosses a boundary redraw.',
    success: 'Thank you. Your Tilburg class request has been sent.'
  },

  faq: {
    h2: 'Tilburg coding class questions',
    intro: 'The city, its neighbourhoods, its villages, the teaching and the terms.',
    items: [
      { q: 'Why does this page compare Tilburg\'s neighbourhoods with Groningen\'s?', a: 'Because it is the clearest way to show that a per-neighbourhood statistic measures the map. The statistics office divides Tilburg into 59 wijken and Groningen into 20, for populations of 230,746 and 244,427, so the average wijk holds 3,911 people here and 12,221 there. Switch to buurten and the ratio changes; switch to square kilometres and it reverses. Building all four comparisons is the project on this page.' },
      { q: 'Does this page cover the city or the municipality?', a: 'The municipality, which includes Berkel-Enschot and Udenhout: 230,746 people on 1 January 2026. The city itself was 203,690 in 2023 on a smaller area. Where a figure describes the city rather than the municipality, the page says so and does not mix the two.' },
      { q: 'We live in Berkel-Enschot or Udenhout. Is the class different there?', a: 'It is the same class at the same hour. A learner in Udenhout and one in Reeshof are in one group when they are at the same level, and the journey that would separate them for an in-person class never has to happen.' },
      { q: 'Is any of this taught in Dutch?', a: 'No. Lessons run in English from start to finish. School vocabulary stays Dutch, so groep, havo, vwo and profielkeuze are spoken as the child already hears them, but there is no Dutch-language version of the course and none in Brabants.' },
      { q: 'What time are classes for a family in Tilburg?', a: 'Under Dutch summer time the teacher is three and a half hours ahead of Tilburg; under winter time, four and a half, since Indian clocks never move. That leaves a workable window from the end of school to mid-evening, plus both weekend days. The slot is picked once, during the free lesson, and then it stays put.' },
      { q: 'How many students are there in Tilburg?', a: 'Two published figures answer two different questions. The municipality counts 31,774 students in higher education; Tilburg University reports 19,168 of its own for 2024. The rest are at other institutions or on other definitions, and this page quotes both rather than subtracting one from the other.' },
      { q: 'Is Tilburg an old city?', a: 'Not as Dutch cities go. It received city rights on 18 April 1809 from Louis Napoleon, which is why there is no medieval core, and it had 125 wool-cloth factories by 1871. The industry went from the 1960s and the city rebuilt around education and services.' },
      { q: 'Is there a Modern Age Coders classroom in Tilburg?', a: 'No, and none is claimed near the university, in the Reeshof or anywhere in the Netherlands. Lessons are live online and need a laptop or desktop, working audio, a current browser and a stable connection. The telephone number on this page is Indian and is described as such.', boiler: true },
      { q: 'What do Tilburg coding classes cost?', a: 'The first lesson is free. Group tuition is USD 100 a month for two live lessons a week, normally eight in the month, in a group of five to ten. Private tuition is USD 150 a month, one learner with one teacher at the same frequency. Course, format, recurring time and availability are confirmed before payment.', boiler: true },
      { q: 'How many learners are in a Tilburg group?', a: 'Between five and ten, matched on level, pace and goal rather than on age, school or neighbourhood. Private tuition is one learner and one teacher. If no group at the right level is running, the family can take private tuition or wait for the next one to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the Netherlands',
    h2: 'Across the province, north to the comparison, and up to the country',
    html: 'Tilburg sits in <a class="cg-inline-link" href="/coding-classes-in-noord-brabant">Noord-Brabant</a>, whose page counts the rings around a garden in Baarle; east along the A58 is <a class="cg-inline-link" href="/coding-classes-in-eindhoven">Eindhoven</a>, and the other half of this page\'s arithmetic is at <a class="cg-inline-link" href="/coding-classes-in-groningen">Groningen</a>. The <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a> is the root of the whole set. Training a model, as opposed to writing a program, starts instead at <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> or at the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>.',
    waLabel: 'Close with WhatsApp'
  },

  footerHeading: 'The Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' },
    { href: '/coding-classes-in-noord-brabant', label: 'Noord-Brabant' },
    { href: '/coding-classes-in-eindhoven', label: 'Eindhoven' }
  ],

  personalityCss: `
.cg-root.cg-tlb .cg-hero-grid { align-items: start; gap: clamp(1.6rem, 4vw, 3rem); }
.cg-root.cg-tlb .cg-hero h1 { font-weight: 600; letter-spacing: -0.012em; line-height: 1.09; }
.cg-root.cg-tlb .cg-capsule { border-left-width: 4px; border-left-style: dotted; padding-left: 1.5rem; }
.cg-root.cg-tlb .cg-eyebrow { letter-spacing: 0.13em; font-weight: 600; }
.cg-root.cg-tlb .cg-section-head h2 { max-width: 32ch; }
.cg-root.cg-tlb .cg-grid-3 { grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: clamp(1.1rem, 2.3vw, 1.75rem); }
.cg-root.cg-tlb .cg-ladder-col { border-top: 2px dashed var(--cg-accent); padding-top: 1.2rem; }
.cg-root.cg-tlb .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-tlb .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'City and municipality of Tilburg, Noord-Brabant: 230,746 residents (CBS 1 January 2026); 55 primary establishments (17,440 pupils) and 19 secondary (10,770); 31,774 in higher education; Tilburg University (1927, 19,168 students in 2024). City rights 18 April 1809; 125 wool-cloth factories in 1871. Municipality includes Berkel-Enschot and Udenhout. Regio Zuid holidays. The city page argues from the zoning of its own neighbourhoods; the province page owns Baarle and the hub owns the national curriculum.',
    localProject: 'A per-zone statistic measures the zoning as much as the ground (the modifiable areal unit problem). CBS divides Tilburg into 59 wijken and 254 buurten and Groningen into 20 wijken and 160 buurten, for populations of 230,746 and 244,427: 3,911 against 12,221 people per wijk (ratio 0.32), 908 against 1,528 per buurt (0.59), and 1,830 against 1,318 per square kilometre of land (1.39, and zoning-independent). Groningen additionally carries two published divisions at once, 20/160 by CBS and 14/106 in its municipal entry. Distinct from the unit-of-observation trap (Zeeland: ranking municipalities against towns), from the no-boundary trap (Zuid-Holland: a region nobody drew) and from the denominator-choice trap (Gadong): the flaw here is comparing two places on a per-container average when the containers were drawn to different conventions. Computed before writing, from published counts only.',
    requiredMentions: [
      '230,746',
      '115,876',
      '59 wijken',
      '254 buurten',
      '17,440',
      '10,770',
      '31,774',
      '185,107',
      'Berkel-Enschot',
      'Udenhout',
      'Reeshof',
      '3,911',
      '18 April 1809',
      '19,168'
    ],
    sources: [
      { claim: 'Municipality of Tilburg 230,746 residents on 1 January 2026 (CBS provisional); 115,876 households averaging 1.95 people with 47 percent single-person; 31,513 under 15; 34,328 aged 15 to 25; 67,036 aged 25 to 45; 41,402 aged 65 and over; 55 primary establishments (17,440 pupils); 19 secondary (10,770); 31,774 students in higher education; total area 12,846 ha, land 12,589 ha; density 1,830; 59 wijken and 254 buurten; 185,107 residents in 1995, a rise of 45,639 (25 percent).', url: 'https://allecijfers.nl/gemeente/tilburg/' },
      { claim: 'City of Tilburg 203,690 inhabitants in 2023; area 88.6 km2 (86.65 land, 1.93 water); density 2,351 per km2; city rights granted 18 April 1809 by Louis Napoleon during an inspection tour of Brabant and Zeeland; 125 wool-cloth factories in the city in 1871, with decline from the 1960s; district populations in 2024: Oud-Zuid 43,979, Reeshof 43,757, Oud-Noord 34,976, West 27,976, Berkel-Enschot 14,481, Udenhout 8,730; Tilburg University founded 1927 as the Roomsch Katholieke Handelshoogeschool.', url: 'https://nl.wikipedia.org/wiki/Tilburg' },
      { claim: 'Tilburg University founded 1927 as the Roomsch Katholieke Handelshoogeschool, renamed Tilburg University in 2010; 19,168 students (2024); 3,096 fte staff (2024); five schools: Economics and Management, Law, Social and Behavioral Sciences, Humanities and Digital Sciences, Catholic Theology.', url: 'https://nl.wikipedia.org/wiki/Tilburg_University' },
      { claim: 'Municipality of Groningen 244,427 residents on 1 January 2026 (CBS provisional); land 18,553 ha; density 1,318; 20 wijken and 160 buurten. Its municipal encyclopaedia entry gives seven gebiedsdelen and 14 wijken in 106 buurten.', url: 'https://allecijfers.nl/gemeente/groningen/' },
      { claim: 'School holiday regions: regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'Tilburg\'s exact rank among Dutch municipalities by population. The entry says only that it is among the largest; the capsule says sixth or seventh depending on the year checked and gives no single number.',
      'Any wijk-level population, income or crime figure. No wijk table was read, so the page makes no claim about which wijk is largest or smallest and computes only municipal averages.',
      'A count of how many people live in a wijk above or below a given size. That needs the underlying wijk table, which the page did not read, and the project says so explicitly.',
      'Mixing city and municipal figures. The 203,690 city count and the 88.6 km2 city area are never combined with the municipal counts.',
      'Anything the Noord-Brabant page owns: the Baarle enclaves, the 56 municipalities, the capital-versus-largest contrast. Anything the Groningen page owns: the household mean split.'
    ]
  }
};
