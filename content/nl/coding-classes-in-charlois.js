'use strict';
// Charlois: 70,932 residents in ten buurten on the south bank, the lowest
// average income and dwelling value of the Rotterdam districts measured.
// Spine: a percentage needs its base named. The same 18,440 households are
// 51 percent of the households here and 26 percent of the people.

module.exports = {
  slug: 'coding-classes-in-charlois',
  code: 'chl',
  accent: '#5B6400',
  accentRationale: 'Charlois: an olive drawn from the Zuiderpark and the older quays, the best-separated tone remaining and clearly apart from the dock green, brick red and river purple already carrying the other three Rotterdam district pages',
  pageType: 'district',
  place: {
    name: 'Charlois',
    eyebrow: 'Charlois, Rotterdam',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'City', name: 'Rotterdam' },
      { type: 'AdministrativeArea', name: 'Zuid-Holland' },
      { type: 'Country', name: 'Netherlands' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-netherlands', name: 'Netherlands' },
    { slug: 'coding-classes-in-rotterdam', name: 'Rotterdam' }
  ],
  nav: [
    { label: 'Rotterdam', href: '/coding-classes-in-rotterdam' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Charlois, Rotterdam, Netherlands',
  title: 'Coding Classes in Charlois, Rotterdam | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in Charlois, Rotterdam, for ages 6 to 67, from Pendrecht and Zuidwijk out to Heijplaat. First lesson free.',
  ogDescription: 'Live online coding, Python and AI for families in Charlois, on a page about how the same fact reads as 51 percent or 26 percent depending on the base.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'frontend-development-masterclass-for-teens',
  verifiedOn: '9 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Charlois Learners',
    description: 'Ability-placed online coding, Python, AI, web building and mathematics for children, teenagers and adults across the ten buurten of Charlois, taught in English.'
  },

  h1: 'Coding classes in Charlois, where the same fact is 51 percent or 26 percent depending on what you divide by',
  capsuleQ: 'What are the best coding classes in Charlois?',
  capsule: 'Coding classes in Charlois reach 70,932 residents (1 January 2026) on 1,119 hectares of land at 6,302 people to the square kilometre, in 35,855 households of which 18,440 hold one person. That is 51 percent of the households. It is also 26 percent of the residents, because those 18,440 households hold 18,440 people out of 70,932. One fact, two bases, and a figure that halves depending on which one nobody stated. Modern Age Coders teaches live online in English from Heijplaat to Pendrecht, ages 6 to 67, first lesson free, then USD 100 monthly in a group of five to ten or USD 150 one to one.',
  lead: 'Charlois has 18,440 single-person households out of 35,855, which is 51 percent. Those households contain 18,440 people out of 70,932 residents, which is 26 percent. Both sentences describe the identical set of people and the identical set of homes. The number halves because the first divides by households and the second by residents, and there are about two residents per household. Nothing in the phrase fifty-one percent tells you which of the two it was.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Charlois.',

  picks: {
    eyebrow: 'Course picks for Charlois',
    h2: 'Four courses for ten buurten from a port village to a post-war estate',
    intro: 'A groep 5 child in Zuidwijk who has finished every game in the house, a teenager in Carnisse who wants a site that works on a phone rather than a lesson about one, a student near the Zuidplein who needs Python to run without supervision, and an adult in Pendrecht handed a set of AI tools and a deadline: four doors, and the first hour of each costs nothing.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Real typed Python, drawings that follow orders and a first program that finds a rule, taught in English to the groep 5 to 8 child in any of the ten buurten.' },
      { course: 'frontend-development-masterclass-for-teens', band: 'Ages 13 to 18', note: 'HTML, CSS and JavaScript carried until a real site behaves on a real phone, for the teenager who wants something other people can open.' },
      { course: 'data-science-complete-masterclass-college', band: 'College and adult', note: 'Python, pandas and the habit of naming the base of every rate, for the student who will be handed tables for the rest of their working life.' },
      { course: 'ai-tools-mastery-complete-college', band: 'Adults', note: 'The current tools used with judgement instead of trust, for anybody given them at work with no instructions and a deadline.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Charlois today',
      h2: 'Seventy thousand people on the widest of the south-bank districts',
      intro: 'Charlois holds 70,932 residents across 1,190 hectares, of which 1,119 are land and 71 water, at a published 6,302 people to the square kilometre. It is far the largest of the four south-bank and central districts this series has measured by area, and the thinnest spread. It also has the lowest average income and the lowest average dwelling value of the five Rotterdam districts read so far.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Ten buurten, one of them in the port', p: 'Tarwewijk, Heijplaat, Oud Charlois, Carnisse, Zuidplein, Wielewaal, Zuiderpark, Pendrecht, Zuidwijk and Charlois Zuidrand. Heijplaat is a village inside the harbour ground, physically apart from the rest and reached past the docks; Pendrecht and Zuidwijk are post-war estates; Oud Charlois is the old village the district is named after.' },
          { h3: 'The lowest figures in the city so far', p: 'Average dwelling value is 240,000 euro and average income 26,400 euro per resident, both the lowest of the five Rotterdam districts this series has measured. 24,605 of the 34,655 dwellings are rented, 71 percent. 11,615 residents are under fifteen, 16 percent, and 8,895 are sixty-five or over, 13 percent.' },
          { h3: 'Two kinds of education figure', p: 'One counts places filled inside the boundary: 24 primary establishments with 5,819 pupils, 7 secondary with 2,800. The other counts residents by what they are enrolled in wherever they study: 1,970 in applied higher education, 1,030 at university. They answer different questions and no sum of them appears anywhere here.' }
        ] },
        { kind: 'spec', title: 'Two percentages in one panel, on two different bases', p: 'The published summary for this district puts 51 percent of households holding one person next to 16 percent of residents being under fifteen. Both are correct. They are not comparable, because the first divides by 35,855 households and the second by 70,932 residents, and nothing in the layout says so. Reading them as two shares of the same thing is the mistake this page is about, and it is made constantly because the two figures look identical in shape.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Where the learners are',
      h2: 'One fact, restated across five districts on both bases',
      intro: 'Every one of these districts publishes a count of single-person households and a count of residents. The share halves in all five, because a single-person household holds one person and the average household holds about two.',
      body: [
        { kind: 'table', caption: 'Living alone, as a share of households and as a share of people', head: ['District', 'Single-person households', 'As a share of households', 'The same people as a share of residents'], rows: [
          ['Rotterdam Centrum', '15,290 of 25,035', '61 percent', '36 percent of 42,924'],
          ['Delfshaven', '20,975 of 40,120', '52 percent', '27 percent of 76,590'],
          ['Charlois', '18,440 of 35,855', '51 percent', '26 percent of 70,932'],
          ['Feijenoord', '18,935 of 39,940', '47 percent', '23 percent of 81,512'],
          ['The pattern', 'identical people, identical homes', 'one base', 'the other, and roughly half the number']
        ] },
        { kind: 'p', text: 'The ordering survives the change of base, so a ranking of the districts is unaffected. The magnitude does not: sixty-one percent and thirty-six percent are very different impressions of the same city centre, and only one of them can be set beside a figure like sixteen percent of residents under fifteen. The person-based column here is this page dividing the published household count by the published population, and is labelled as arithmetic wherever it appears.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Every figure, its source, its year, and the division this page performs',
      intro: 'One district row in full, four comparison pairs, and the one calculation the argument rests on.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Charlois', p: '70,932 residents (2026); 35,855 households averaging 1.9 (2025), 18,440 single-person at 51 percent; ages 11,615 under fifteen at 16 percent, 9,335 at 13 percent, 24,630 at 35 percent, 16,485 at 23 percent and 8,895 at 13 percent; 1,190 hectares total, 1,119 land and 71 water; density 6,302; 34,655 dwellings; average value 240,000 euro; 24,605 rented at 71 percent and 10,050 owned at 29; income 26,400 euro (2024); 1,970 residents in applied higher education and 1,030 at university; 24 primary establishments with 5,819 pupils and 7 secondary with 2,800; ten buurten.' },
          { h3: 'The comparison pairs', p: 'Only two numbers are taken from each of the other districts, the single-person household count and the resident count. Rotterdam Centrum 15,290 and 42,924. Delfshaven 20,975 and 76,590. Feijenoord 18,935 and 81,512. Everything else about those three lives on their own pages in this series.' },
          { h3: 'The calculation', p: 'A single-person household contains exactly one person, so the number of people living alone equals the number of such households. Dividing that by the resident population instead of by the household count gives the person-based share. For Charlois, 18,440 over 70,932 is 26 percent against 18,440 over 35,855, which is 51.' },
          { h3: 'Why the factor is about two', p: 'The published average household size here is 1.9 people. A base of households is therefore about half the size of a base of residents, and any share of households is correspondingly about twice the same share of residents. Where average household size is larger the gap widens, and where it approaches one the two bases converge.' },
          { h3: 'What is not claimed', p: 'No statement about why Charlois has the lowest income or dwelling value of the districts measured, because explaining a position needs more than a position. No comparison of the person-based share against any published figure, since the office publishes the household-based one and this page derives the other.' }
        ] },
        { kind: 'p', text: 'No relationship of any kind exists between Modern Age Coders and this gebied, the city, or a school mentioned on this page, and none is suggested. The statistics office page for each named wijk is the source of everything quoted from it. Only the person-based percentages, 36, 27, 26 and 23, are worked out here rather than published.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Fifty-one percent and twenty-six percent, describing the same people',
      intro: 'One published rate, one derived rate, no disagreement between them, and a factor of two that lives entirely in a word nobody says out loud.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Say what the base is, every time', p: 'Fifty-one percent of what. The answer here is households, and the moment it is said the figure stops being ambiguous. A percentage without its base is not a fact with a small omission; it is two different facts wearing one number, and the reader picks whichever they were already thinking of.' },
          { h3: '2. Work out how far apart the bases are', p: 'Charlois has 70,932 residents and 35,855 households, so the two bases differ by a factor of about two, which is just the average household size of 1.9. That factor is the maximum damage the ambiguity can do, and it is computable before anybody argues about anything.' },
          { h3: '3. Refuse the comparison across bases', p: 'Fifty-one percent of households and sixteen percent of residents cannot be ranked, added, or set in the same sentence as though they described the same population. If both are needed, restate one on the other base first, which for the household figure means dividing by residents instead and getting twenty-six.' }
        ] },
        { kind: 'table', caption: 'The same phenomenon, on either base', head: ['Statement', 'Base', 'Figure for Charlois', 'What it can be compared with'], rows: [
          ['Households holding one person', '35,855 households', '51 percent', 'other household-based shares, such as tenure'],
          ['Residents living alone', '70,932 residents', '26 percent', 'other person-based shares, such as age'],
          ['Residents under fifteen', '70,932 residents', '16 percent', 'the person-based row above, and not the first row'],
          ['Dwellings rented', '34,655 dwellings', '71 percent', 'other dwelling-based shares only'],
          ['The trap', 'unstated', 'looks like one number', 'nothing, until somebody names it']
        ] },
        { kind: 'callout', h3: 'A percentage is a fraction, and half of it is the part nobody says', p: 'Every rate has two halves and only one of them is usually spoken. Fifty-one percent, of households. Sixteen percent, of residents. Seventy-one percent, of dwellings. In a well-made table those bases are obvious from the column heading; in a summary panel, a slide or a sentence in a report they vanish, and what remains is a row of numbers that look like they belong together. They do not, and the size of the error is not small: here it is a factor of about two, which is simply the average household size. The same problem runs through most reporting. A share of orders is not a share of revenue, and in a business with a wide price range they can differ enormously. A share of customers is not a share of spend. A share of files is not a share of bytes. A share of incidents is not a share of downtime, which is why a team can close ninety percent of its incidents and still lose most of its availability to the other ten. In every case both figures are correct, both are useful, and putting them side by side without their bases invites a comparison that is arithmetically meaningless. The habit is small and it never stops paying: write the base into the label rather than the caption, restate one rate on the other base before comparing them, and treat any percentage arriving without a stated denominator as incomplete rather than as approximately right.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for rates that arrive without their bases',
      intro: 'Percent of orders against percent of revenue, percent of users against percent of usage, percent of tickets against percent of hours: all of them correct, none of them comparable. Practised on a figure that halves between one base and the next.',
      body: [
        { kind: 'table', caption: 'Making a percentage say what it means', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Name the base in the label', 'Write percent of households, not percent', 'Two bases read as one', 'A number that cannot be misread'],
          ['Measure the gap between bases', 'Divide one base by the other and keep the ratio', 'Surprise at how far apart they are', 'The maximum size of the confusion'],
          ['Restate before comparing', 'Convert one rate onto the other base rather than lining them up', 'A ranking across incommensurable rates', 'A comparison that is actually valid'],
          ['Distrust a bare percentage', 'Treat any rate without a denominator as incomplete', 'A figure inherited and reused for years', 'A question that takes ten seconds to answer'],
          ['Keep the counts, not just the rates', 'Publish numerator and denominator beside the percentage', 'A rate that cannot be rebased later', 'Everything a reader needs to check you']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'Half the bags in the cupboard hold one apple each. What share of the apples is that? The children discover the answer is not a half, and that they need to know how many apples are in the other bags before they can say anything.' },
          { h3: 'For teenagers', p: 'The four districts in Python, with every rate stored as a numerator and a denominator rather than as a percentage, and a comparison function that refuses to run when two rates have different bases. The stretch: rebase every published figure onto residents and describe which impressions change.' },
          { h3: 'For adults', p: 'A real dashboard row with several percentages in it. Adults nearly always find at least two different bases, no labels saying so, and a conclusion somebody drew by reading straight across.' }
        ] },
        { kind: 'p', text: 'All population, household, age, area, density, dwelling, value, tenure, income, student, establishment and pupil figures come from the national statistics office pages for the wijken named, with 2026 populations and pupil counts, 2025 household and housing figures and 2024 incomes. The person-based shares of 36, 27, 26 and 23 percent, and the observation that the two bases differ by about the average household size, are this page dividing published counts and are labelled as arithmetic where they appear.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From bags of apples to rates stored as fractions rather than percentages',
    intro: 'The rung is settled in the free hour by what the learner can already do, and never by which of the ten buurten the address falls in.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Half the bags, but how many apples?', p: 'Children find out that a share of containers is not a share of contents.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Percent of what?', p: 'Learners write the base into every rate before they use it in a sentence.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Rates that keep their fractions', p: 'Teenagers store numerator and denominator and build comparisons that check the bases match.', courses: ['frontend-development-masterclass-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'The dashboard row read straight across', p: 'Adults take a panel of percentages from work and find the two or three bases inside it.', courses: ['data-science-complete-masterclass-college', 'ai-tools-mastery-complete-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will compare 51 percent with 16 percent. Why should a teenager in Charlois stop it?',
    intro: 'Because one is a share of households and the other a share of people, and neither number says so.',
    p1: 'Hand a model the published summary for this district and ask what stands out, and it will do something reasonable with the percentages in it. Fifty-one percent single-person households and sixteen percent under fifteen will end up in the same paragraph, probably in the same sentence, described as two features of the same place. Both figures are correct and the sentence will read well. What is missing is that the first was divided by 35,855 and the second by 70,932, and that restating the first on the second base turns it into twenty-six.',
    p2: 'So the learner practises storing rates as fractions rather than as percentages, keeping numerator and denominator together, and writing comparisons that refuse to run when the bases differ. It is a small structural discipline rather than a clever technique, and it removes an entire category of error permanently. A fifteen-year-old in Carnisse who has rebased a figure once will be the person at thirty asking whether that is percent of orders or percent of revenue before agreeing the discount worked. Models will keep reading straight across a row of percentages. Noticing that the row has two bases in it stays a person\'s job.',
    closer: 'The case for a child in Charlois learning to code in 2026 is therefore not about household statistics. It is that percentages are the most quoted and least specified numbers in working life, that the unspoken half of them can move a figure by a factor of two, and that one district where fifty-one percent and twenty-six percent describe the identical people makes it impossible to forget.',
    blogAnchor: 'whether learning to code still pays off for a child in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes across eleven square kilometres of south bank',
    intro: 'Charlois is wide. Heijplaat sits inside the port and Pendrecht and Zuidwijk are a long way from the rest of the city, so an evening class somewhere central is a real journey twice over.',
    cells: [
      { h3: 'The distance stops mattering', p: 'The class happens at the table in Zuidwijk, Carnisse or Heijplaat at one hour that repeats, which is the difference between a family enrolling and a family meaning to.' },
      { h3: 'A lesson that leaves the school vocabulary alone', p: 'Teaching happens in English. The exception is deliberate and short: a teacher says groep, havo, vwo or profielkeuze, unchanged, because those are the words a child has already seen on paper at school.' },
      { h3: 'The first hour is free, and it is a real one', p: 'Not a sales call with a demonstration in it. The learner works, the teacher watches, and by the end there is a level, a course chosen from that level, and an hour marked in the week. Card details are never requested during it.' },
      { h3: 'What a group is made of', p: 'Between five and ten learners, all of them working at one level, drawn from whichever countries happen to have somebody at that level this month. Proximity is not a qualification and is never treated as one.' },
      { h3: 'The rhythm, and the weeks it skips', p: 'Twice a week, roughly eight lessons a month. The regio Midden holiday dates apply across Zuid-Holland and are published far ahead, so the breaks are part of the schedule from the outset instead of interrupting it.' },
      { h3: 'Two countries, one clock that moves', p: 'India has kept the same time for decades. The Netherlands shifts twice a year, which is why the teacher is sometimes three and a half hours ahead and sometimes four and a half. Nothing about the workable hours changes with it.' }
    ],
    spec: { title: 'Eleven and a half thousand children, spread very thin', p: '11,615 residents are under fifteen, 16 percent, across 1,119 hectares of land at just 6,302 people to the square kilometre, the thinnest of the Rotterdam districts measured here. There are children in Charlois and there is a great deal of ground between them, which is precisely the situation in which a local group at one particular level in one particular subject does not form. A group assembled on ability from across the world does, at every age from 6 to 67.' }
  },

  fees: {
    h2: 'The fee, in dollars, in all ten buurten',
    intro: 'Set out here rather than kept for a call.',
    first: 'A complete lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'One international rate, quoted in dollars, with no euro edition, so an address on Heijplaat is charged exactly what one in Oud Charlois is. Nothing is paid until the free lesson has settled a course and an hour, and payment goes over WhatsApp afterwards. Pausing, switching plan and missing a week are all on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, printed the way the people who left them typed them',

  book: {
    h2: 'Send the level; the buurt is not asked for',
    intro: 'The first task might be bags of apples that need counting twice, a rate stored as a fraction so it can be rebased, or a dashboard row at work with three different denominators hiding in it.',
    success: 'Thank you. Your Charlois class request has been sent.'
  },

  faq: {
    h2: 'Charlois coding class questions',
    intro: 'The district, its ten buurten, one halving percentage, the teaching and the terms.',
    items: [
      { q: 'How can the same fact be 51 percent and 26 percent?', a: 'Charlois has 18,440 single-person households out of 35,855, which is 51 percent of households. Those households contain 18,440 people out of 70,932 residents, which is 26 percent of residents. Identical people, identical homes, two bases. The gap is about a factor of two because the average household here holds 1.9 people, so a base of households is about half the size of a base of residents.' },
      { q: 'Which of the two figures is the right one?', a: 'Both, for different questions. The household share is the one the statistics office publishes and is the right figure to set beside other household-based shares, such as tenure. The person share is the right one to set beside anything counted per resident, such as the 16 percent under fifteen. What is never right is comparing one against the other, and that is what a panel of bare percentages invites.' },
      { q: 'Which neighbourhoods are in Charlois?', a: 'Ten buurten: Tarwewijk, Heijplaat, Oud Charlois, Carnisse, Zuidplein, Wielewaal, Zuiderpark, Pendrecht, Zuidwijk and Charlois Zuidrand. Heijplaat is a village inside the harbour ground, reached past the docks and physically separate from the rest; Pendrecht and Zuidwijk are post-war estates; Oud Charlois is the village the district takes its name from.' },
      { q: 'Is Charlois the poorest district in Rotterdam?', a: 'It has the lowest average income and the lowest average dwelling value of the five Rotterdam districts this series has measured, at 26,400 euro per resident for 2024 and 240,000 euro per home for 2025. Five of the city twenty-two wijken is not the whole city, so this page says lowest of those measured rather than lowest in Rotterdam, and it offers no explanation for the position, because explaining one needs more than a position.' },
      { q: 'What are the schools like here?', a: 'This page does not say, and no source read here would support saying it. What is published is that 24 primary establishments teach 5,819 pupils and 7 secondary establishments teach 2,800. Those are counts of registrations and attendance, not descriptions of teaching, and the page treats them as such.' },
      { q: 'Is the class taught in Dutch?', a: 'English, start to finish. The one place Dutch remains is school vocabulary, kept because groep, havo, vwo and profielkeuze are the terms a child reads on their own reports and an English equivalent would have to be converted back before it meant anything. Nothing is offered in a Dutch edition.' },
      { q: 'What hours suit a family in Charlois?', a: 'It depends on the season, and only because the Netherlands changes its clocks while India does not: the gap is three and a half hours under Dutch summer time and four and a half outside it. Neither setting closes the useful window, which runs from the end of the school day through the early evening, with Saturday and Sunday entirely open. The hour is agreed in the free lesson and does not move afterwards.' },
      { q: 'Is there a Modern Age Coders classroom in Charlois?', a: 'No, and none is claimed in Charlois, elsewhere in Rotterdam or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Charlois coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or address. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Rotterdam and beyond',
    h2: 'East along the bank, north across the river, and up to the country',
    html: 'East along the south bank is <a class="cg-inline-link" href="/coding-classes-in-feijenoord">Feijenoord</a>, whose page shows why four districts agreeing proves nothing, and north across the Maas are <a class="cg-inline-link" href="/coding-classes-in-rotterdam-centrum">Rotterdam Centrum</a> and <a class="cg-inline-link" href="/coding-classes-in-delfshaven">Delfshaven</a>. The city page, <a class="cg-inline-link" href="/coding-classes-in-rotterdam">coding classes in Rotterdam</a>, carries the port and all fourteen gebieden, and everything here sits inside <a class="cg-inline-link" href="/coding-classes-in-zuid-holland">Zuid-Holland</a>. The series descends from the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>, and a learner after trained models rather than running programs should begin at <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> or the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>.',
    waLabel: 'Finish this on WhatsApp'
  },

  footerHeading: 'Rotterdam and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-rotterdam', label: 'Rotterdam' },
    { href: '/coding-classes-in-feijenoord', label: 'Feijenoord' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-chl .cg-hero-grid { align-items: center; gap: clamp(1.35rem, 3.2vw, 2.55rem); }
.cg-root.cg-chl .cg-hero h1 { font-weight: 600; letter-spacing: -0.013em; line-height: 1.09; }
.cg-root.cg-chl .cg-capsule { border-left-width: 3px; border-left-style: solid; border-bottom: 3px solid var(--cg-accent-soft); padding-left: 1.25rem; padding-bottom: 0.9rem; }
.cg-root.cg-chl .cg-eyebrow { letter-spacing: 0.185em; font-weight: 500; text-transform: uppercase; }
.cg-root.cg-chl .cg-section-head h2 { max-width: 32ch; }
.cg-root.cg-chl .cg-grid-3 { gap: clamp(1.15rem, 2.4vw, 1.85rem); }
.cg-root.cg-chl .cg-card { border-radius: 6px; border-left: 2px solid var(--cg-accent-soft); }
.cg-root.cg-chl .cg-table caption { letter-spacing: 0.05em; }
.cg-root.cg-chl .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-chl .cg-callout { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Gebied Charlois, Rotterdam, Zuid-Holland: 70,932 residents (2026) on 1,190 hectares of which 1,119 land and 71 water, density 6,302, the thinnest spread of the Rotterdam districts measured; 35,855 households averaging 1.9 with 18,440 single-person at 51 percent; 11,615 residents under fifteen at 16 percent; 34,655 dwellings, 24,605 rented at 71 percent, average value 240,000 euro, the lowest of the five Rotterdam districts read; income 26,400 euro (2024), also the lowest; 1,970 residents in applied higher education and 1,030 at university; 24 primary establishments with 5,819 pupils and 7 secondary with 2,800; ten buurten including Heijplaat, a village inside the harbour ground. Regio Midden holidays. The district page argues from unstated bases; Rotterdam Centrum owns boundary truncation, Delfshaven owns counts of non-interchangeable units, Feijenoord owns sample size, and the city page owns the port units argument.',
    localProject: 'A percentage is a fraction and half of it is the part nobody says. Charlois has 18,440 single-person households out of 35,855, published as 51 percent. Those same households contain 18,440 people out of 70,932 residents, which is 26 percent. Identical people, identical homes, two bases, and a figure that halves between them because the average household holds 1.9 people. The published district panel puts the 51 percent next to 16 percent of residents under fifteen, with nothing in the layout to say that one divides by households and the other by people, which is exactly the comparison that cannot be made. The same halving holds across every district measured: Rotterdam Centrum 61 percent of households and 36 of residents, Delfshaven 52 and 27, Feijenoord 47 and 23. The ordering survives the change of base and the magnitude does not. The general case is percent of orders against percent of revenue, percent of customers against percent of spend, percent of files against percent of bytes, percent of incidents against percent of downtime. Distinct from the denominator-choice trap (Gadong), where several nested resident populations are all defensible and the fault is failing to name which, and from the excluded-population denominator (Venlo): here both bases are correct and appropriate for their own fact, and the error is purely one of juxtaposition. The person-based shares are derived on the page and labelled as arithmetic; the office publishes only the household-based ones.',
    requiredMentions: [
      '70,932',
      '35,855',
      '18,440',
      '34,655',
      '240,000',
      '26,400',
      '6,302',
      '11,615',
      '5,819',
      '2,800',
      '1,030',
      'Heijplaat',
      'Pendrecht',
      'Wielewaal'
    ],
    sources: [
      { claim: 'Wijk Charlois, Rotterdam: 70,932 inwoners (2026); 35,855 huishoudens averaging 1.9 (2025), 18,440 eenpersoonshuishoudens at 51 percent; ages 11,615 (0 to 15, 16 percent), 9,335 (15 to 25, 13 percent), 24,630 (25 to 45, 35 percent), 16,485 (45 to 65, 23 percent), 8,895 (65+, 13 percent); 1,190 hectare total, 1,119 land, 71 water (2025); bevolkingsdichtheid 6,302 per km2 (2025); woningvoorraad 34,655 (2025); gemiddelde WOZ 240,000 euro (2025); 24,605 huurwoningen (71 percent) and 10,050 koopwoningen (29 percent); gemiddeld inkomen 26,400 euro (2024); studenten HBO 1,970 and WO 1,030 (2025); 24 vestigingen basisonderwijs with 5,819 leerlingen and 7 vestigingen voortgezet onderwijs with 2,800 leerlingen (2026); 10 buurten: Tarwewijk, Heijplaat, Oud Charlois, Carnisse, Zuidplein, Wielewaal, Zuiderpark, Pendrecht, Zuidwijk, Charlois Zuidrand.', url: 'https://allecijfers.nl/wijk/charlois-rotterdam/' },
      { claim: 'Single-person household counts and resident counts used for the rebasing comparison only. Rotterdam Centrum 15,290 eenpersoonshuishoudens and 42,924 inwoners. Feijenoord 18,935 and 81,512. Delfshaven 20,975 and 76,590.', url: 'https://allecijfers.nl/wijk/rotterdam-centrum-rotterdam/' },
      { claim: 'School holiday regions: regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'That Charlois is the poorest district in Rotterdam. It is the lowest on income and dwelling value of the five wijken this series has measured, out of twenty-two, and the page says so in those terms.',
      'Any explanation of why Charlois sits lowest on either measure. Explaining a position needs more than a position.',
      'Any statement about school quality or teaching. The published figures are counts of establishments and pupils and are treated as such.',
      'The person-based shares presented as published figures. The office publishes the household-based ones and this page derives the others.',
      'Full statistics rows for the comparison districts. Only single-person household counts and resident counts are taken from each.',
      'Figures for the individual buurten. Ten are named and none was read separately.',
      'Anything the Rotterdam city page owns, including the port throughput in two units and the named secondary schools with their addresses.'
    ]
  }
};
