'use strict';
// Surrey (cg- county page, UK cluster Phase 1 preview). The exemplar for the 94 county pages of Phase 7:
// a county index that names the towns which will never get their own URL, with a figure beside each.
// Spine: a counter with too few bits. Guildford has built satellites since a University of Surrey
// spin-out in 1985, so the county page uses the GPS week number, a 10-bit field that wraps every 1024
// weeks. Our own run (scratchpad uk/surrey/rollover.js, 20 September 2026) computes the rollover instants
// from the GPS epoch and the 18-second GPS-UTC offset and reproduces what GPS.gov publishes: week 1024
// at 1999-08-21 23:59:42 UTC, week 2048 at 2019-04-06 23:59:42 UTC (GPS.gov: "23:59:42 UTC on April 6,
// 2019"), week 3072 at 2038-11-20 (GPS.gov: "November 20, 2038"), and the 13-bit CNAV field first
// wrapping on 2137-01-05 (GPS.gov: "won't roll over until 2137"). On 20 September 2026 the true count is
// 2437 weeks; a 10-bit reader sees 389 and dates it to 1987, out by 39.2 years. Same fault, closer to
// home: 32-bit signed Unix seconds run out at 2,147,483,647, which is 03:14:07 UTC on 19 January 2038,
// and wrap to 20:45:52 UTC on 13 December 1901. Lesson family: a counter with too few bits (integer
// overflow and rollover), screened free against all 322 dossiers on 20 September 2026; distinct from the
// lost update on a counter (Assen) and from where a series begins (Heerlen).
// Place facts at their own sources, read 20 September 2026: ONS Census 2021 usual residents for the 11
// Surrey districts via Nomis (1,203,113 in total) and ONS Census 2021 built-up area populations for the
// towns; Surrey County Council term dates 2026-27 (two-week autumn half term, 19 to 30 October 2026,
// five days taken from the July 2027 summer holiday, community and voluntary controlled schools);
// Surrey County Council school organisation data (births falling in all 11 districts and boroughs;
// Elmbridge down 33 per cent from its 2010 peak to a new low of 1,273 in 2025); Surrey Satellite
// Technology Ltd (Tycho House, 20 Stephenson Road, Surrey Research Park, Guildford GU2 7YE; formed 1985
// as a University of Surrey spin-out; about 70 satellites for 22 countries; an Airbus subsidiary);
// University of Surrey, Surrey Space Centre (BA building, Guildford GU2 7XH; small satellite work from
// 1979); GPS.gov on the week number rollover.
// Surrey County Council's site answers us normally, unlike Kent's; nothing here is second hand.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'SURREY', blurb: 'Eleven boroughs, thirty-odd towns with a figure each, and a satellite clock that ran out of digits.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-surrey',
  code: 'sry',
  accent: '#0F571C',
  accentRationale: 'Surrey: a deep forest green from the solver (7.10:1 on every paper tint), darker and far bluer than the UK best-page green, and unlike any other UK accent',
  pageType: 'governorate',
  place: {
    name: 'Surrey',
    eyebrow: 'County of Surrey',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'South East England' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'London', href: '/best-coding-class-in-london' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Surrey',
  title: 'Coding Classes in Surrey | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python, AI and maths classes for Surrey families, from Staines and Woking to Farnham, Caterham and Camberley. The first lesson is free.',
  ogDescription: 'Coding classes for every town in Surrey, on a page about the satellite clock that ran out of digits and the thirty-odd towns the county is actually made of.',
  twitterDescription: 'Surrey coding classes for ages 6 to 67, live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '20 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Surrey Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults across the eleven boroughs and districts of Surrey, taught live in English.'
  },

  h1: 'Coding classes in Surrey',
  capsuleQ: 'What are the best coding classes in Surrey?',
  capsule: 'Surrey is eleven boroughs and districts holding 1,203,113 people at the 2021 Census, and no single town anybody means when they say Surrey: Guildford and Woking are the largest at about 77,880 and 75,660, and after them it is Camberley, Epsom, Redhill, Egham and thirty more. A class that works here cannot depend on a building, because Farnham to Caterham is an hour by road at the wrong time of day. Ours are taught live over video from India, placed by what a learner can already do rather than by school year, for ages 6 to 67, in groups of five to ten or one to one. This page also carries a project with a Guildford accent: the county has built small satellites since 1985, and the clock those satellites broadcast once ran out of digits. The first lesson is free; after that a group place is USD 100 a month and one-to-one teaching USD 150.',
  lead: 'A field that counts weeks in ten bits can count to 1,023, and then it counts to zero. That is not a hypothetical: it is how the civil GPS signal has always carried the week number, and it is why receivers all over the world woke up in 1999 and again in 2019 believing it was nineteen years earlier. Guildford has a particular stake in this. Surrey Satellite Technology, spun out of the University of Surrey in 1985, has built around seventy satellites for twenty-two countries from the Surrey Research Park, and the Surrey Space Centre up the hill has worked on small spacecraft since 1979. So this page\'s project is a Surrey one: compute the rollover dates from first principles, check them against what the US government publishes, and then go looking for the same fault in the clock on your own laptop.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Surrey.',

  picks: {
    eyebrow: 'Course picks for Surrey',
    h2: 'Four courses for Surrey learners',
    intro: 'A Year 4 child in Horley who wants to make a game, a Year 9 student in Woking choosing GCSE options, a sixth former in Guildford who likes space and numbers, and an adult in Esher who inherited a spreadsheet nobody understands. All four start with the same free lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch counters and timers, where a child meets the idea that a number can go round in a circle.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'First typed Python, including dates and clocks, which are where beginners meet their first honest bug.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python for Key Stage 3 and 4, with the rollover project on this page written properly and tested.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'For grown-ups whose reports rest on dates and ranges, and who would rather find the edge case than meet it.' }
    ]
  },

  sections: [
    {
      id: 'surrey', tint: '', eyebrow: 'Surrey today',
      h2: 'Eleven boroughs, 1,203,113 people, and no capital town',
      intro: 'Every figure below is from the body that publishes it, named in the row. This is the shape of the county a class here has to fit.',
      body: [
        { kind: 'table', caption: 'The eleven Surrey boroughs and districts, usual residents at Census 2021', head: ['Borough or district', 'Usual residents', 'Larger towns in it'], rows: [
          ['Reigate and Banstead', '150,846', 'Redhill, Reigate, Horley, Banstead'],
          ['Guildford', '143,647', 'Guildford, Ash and Ash Vale'],
          ['Elmbridge', '138,755', 'Walton-on-Thames, Cobham, Weybridge, Esher, Hersham'],
          ['Waverley', '128,226', 'Farnham, Godalming, Haslemere, Cranleigh'],
          ['Woking', '103,943', 'Woking, Byfleet'],
          ['Spelthorne', '102,960', 'Ashford, Staines-upon-Thames, Sunbury-on-Thames, Shepperton'],
          ['Surrey Heath', '90,456', 'Camberley, Frimley, Bagshot, Lightwater'],
          ['Runnymede', '88,079', 'Egham, Chertsey, Addlestone, Virginia Water'],
          ['Tandridge', '87,877', 'Caterham, Oxted, Warlingham, Lingfield'],
          ['Mole Valley', '87,387', 'Dorking, Ashtead, Leatherhead, Great Bookham'],
          ['Epsom and Ewell', '80,937', 'Epsom, Ewell, Stoneleigh']
        ] },
        { kind: 'p', text: 'Add the eleven and you get 1,203,113 people, more than Birmingham, spread across a county with no obvious centre. That matters for a practical reason. A weekly class in a hall in Dorking is a real option for Dorking and a two-bus expedition for Staines, and the club that opens in Guildford closes again when the four families from Camberley stop coming in January. Distance is why so much of Surrey\'s teaching for children ends up being either school-based or online.' },
        { kind: 'table', caption: 'Surrey towns by built-up area population, Census 2021, the ones most often asked about', head: ['Town', 'Usual residents', 'Town', 'Usual residents'], rows: [
          ['Guildford', '77,880', 'Chertsey', '14,560'],
          ['Woking', '75,660', 'Byfleet', '14,190'],
          ['Camberley', '36,785', 'Hersham', '12,625'],
          ['Epsom', '35,850', 'Haslemere', '11,900'],
          ['Redhill', '32,525', 'Oxted', '11,490'],
          ['Egham', '28,000', 'Leatherhead', '11,485'],
          ['Ewell', '27,515', 'Godalming', '10,450'],
          ['Horley', '27,070', 'Cranleigh', '10,425'],
          ['Walton-on-Thames', '27,020', 'Esher', '9,485'],
          ['Ash and Ash Vale', '24,285', 'Banstead', '8,925'],
          ['Reigate', '23,780', 'Warlingham', '8,920'],
          ['Ashford', '22,825', 'Lightwater', '6,535'],
          ['Caterham', '22,755', 'Bagshot', '5,930'],
          ['Sunbury-on-Thames', '21,475', 'Shepperton', '5,915'],
          ['Great Bookham and Fetcham', '21,655', 'Virginia Water', '5,185'],
          ['Staines-upon-Thames', '21,325', 'Frimley', '15,100'],
          ['Farnham', '20,500', 'Ashtead', '14,830'],
          ['Cobham', '17,505', 'Addlestone', '13,745'],
          ['Dorking', '17,465', 'Weybridge', '15,915']
        ] },
        { kind: 'callout', h3: 'Surrey\'s school year is not England\'s school year', p: 'From September 2026 Surrey County Council\'s community and voluntary controlled schools take a two-week autumn half term, 19 to 30 October 2026, and five days come out of the summer holiday in July 2027. The autumn term runs 1 September to 18 December 2026. Kent, next door, keeps the usual single week at the end of October. If you are booking a weekly online lesson for a Surrey child, that fortnight is the one to plan around, and it is the reason we agree breaks with each family rather than publishing a single timetable.' },
        { kind: 'p', text: 'One more number from the council, because it shapes the next decade of Surrey classrooms: births are falling in all eleven districts and boroughs. Elmbridge peaked at 1,890 births in 2010 and reached a new low of 1,273 in 2025, a fall of a third; Woking is down 30 per cent from its 2012 peak, Epsom and Ewell 29 per cent, Guildford 27 per cent. Smaller cohorts mean fewer children of the same age in the same town wanting the same lesson at the same hour, which is precisely the problem an online group solves and a local club does not.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Surrey project',
      h2: 'The clock that ran out of digits',
      intro: 'Guildford builds satellites. This project takes one thing those satellites broadcast and asks a question a ten-year-old can hold and a professional can get wrong.',
      body: [
        { kind: 'p', text: 'GPS satellites do not broadcast a date. They broadcast a week number counted from a Sunday in January 1980, and in the legacy civil message that number is carried in ten bits. Ten bits hold 0 to 1,023. On the 1,024th week the field has nowhere to go, so it reads zero again, and a receiver that takes the number at face value decides it is 1980. The learner\'s job is to work out exactly when that happens, three times over, and then check their answer against the organisation that runs the system.' },
        { kind: 'table', caption: 'Our run of 20 September 2026: computed from the GPS epoch, then checked against GPS.gov', head: ['What we computed', 'Our answer', 'What GPS.gov publishes'], rows: [
          ['First wrap, week 1024', '21 August 1999, 23:59:42 UTC', 'A rollover in August 1999'],
          ['Second wrap, week 2048', '6 April 2019, 23:59:42 UTC', '"23:59:42 UTC on April 6, 2019"'],
          ['Third wrap, week 3072', '20 November 2038, 23:59:42 UTC', '"next rollover on November 20, 2038"'],
          ['First wrap of the 13-bit field', '5 January 2137', '"a 13-bit week number that won\'t roll over until 2137"'],
          ['Length of one 10-bit epoch', '1,024 weeks, 7,168 days, 19.6 years', '"every 19.7 years"']
        ] },
        { kind: 'p', text: 'Two details make this a real lesson rather than a trick. The first is that odd 23:59:42. GPS time ignores leap seconds and UTC does not, so GPS is now eighteen seconds ahead; midnight at the start of a GPS week therefore falls eighteen seconds before midnight UTC. A learner who does not know that gets every answer eighteen seconds late and cannot tell whether their code or their understanding is wrong. The second is that the check is against a published fact. We did not look up the dates and write them down. We computed them, and only then compared, which is the only version of this exercise that teaches anything.' },
        { kind: 'grid3', cells: [
          { h3: 'What a 10-bit reader sees now', p: 'On 20 September 2026 the true count is 2,437 weeks since the epoch. A receiver holding only ten bits sees 389 and dates the signal to June 1987: an error of 39.2 years, reported with complete confidence.' },
          { h3: 'The same fault, nearer home', p: 'Signed 32-bit seconds since 1970 run out at 2,147,483,647, which is 03:14:07 UTC on 19 January 2038. One second later the counter reads minus 2,147,483,648, and the clock says 13 December 1901.' },
          { h3: 'What the fix costs', p: 'Three more bits move the GPS problem from 2038 to 2137. That is the whole lesson about ranges: the cost of being generous with a counter is measured in bits, and the cost of being mean with one is measured in field recalls.' }
        ] },
        { kind: 'callout', h3: 'Why an AI does not settle this for you', p: 'Ask an assistant when the GPS week rolls over and it will tell you, correctly, April 2019. Ask it to write the conversion and it will usually produce something that works for today\'s dates and quietly ignores both the leap-second offset and the wrap. Neither answer teaches a learner that a number has a size. The point of the exercise is not to obtain the dates; it is to have built the counter, watched it turn over, and understood that every field in every system has an edge somebody chose.' },
        { kind: 'p', text: 'Modern Age Coders has no connection with Surrey Satellite Technology, Airbus, the University of Surrey, Surrey County Council or the United States government, and nothing here implies one. The addresses and founding dates are theirs; the arithmetic, and any error in it, is ours.' }
      ]
    },
    {
      id: 'guildford', tint: 'deep', eyebrow: 'Why Guildford, of all places',
      h2: 'A university spin-out that ended up building satellites',
      intro: 'The Surrey angle is not decoration. Two organisations a mile apart made small spacecraft an ordinary industry.',
      body: [
        { kind: 'table', caption: 'Surrey\'s space cluster, from each organisation\'s own pages', head: ['Organisation', 'Where', 'What it says about itself'], rows: [
          ['Surrey Satellite Technology Ltd', 'Tycho House, 20 Stephenson Road, Surrey Research Park, Guildford GU2 7YE', 'Formed in 1985 as a spin-out to commercialise University of Surrey research that began in the late 1970s with satellites built from commercial off-the-shelf parts; about 70 satellites for 22 countries in the three decades after; majority shareholding bought by Airbus in 2009 and now a wholly owned subsidiary.'],
          ['Surrey Space Centre', 'BA building, University of Surrey, Guildford GU2 7XH', 'Small satellite work from 1979 onwards, pushing what low-cost small satellites can be used for.']
        ] },
        { kind: 'p', text: 'The reason this belongs on a page about children learning to code is the off-the-shelf part. The Surrey story started with researchers deciding that parts built for ordinary electronics could fly, which is the same bet a child makes with a free copy of Python and a second-hand laptop. It does not mean everything is easy. It means the barrier is understanding rather than equipment, and understanding is what a lesson can supply.' },
        { kind: 'spec', title: 'Surrey and the rest of the country', p: 'Surrey is one county of many. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK page</a> covers the four school systems and links every UK page as it goes live, and <a class="cg-inline-link" href="/best-coding-class-in-london">London</a> is the next county over for families on the Spelthorne and Elmbridge edge.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a counter that goes round to a system with no surprises left in it',
    intro: 'The free lesson places a learner by what they can do now. School year is a hint, not an answer.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Numbers that wrap', p: 'Scratch timers, scores and clocks, where a counter that reaches its limit is something a child can see happen on screen.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 10 to 13', h3: 'Dates and ranges', p: 'Python that works with real dates, and the first honest conversation about what a variable can and cannot hold.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Edges on purpose', p: 'Types, limits, overflow and tests written for the boundary rather than the middle, which is the habit exams and employers both reward.', courses: ['python-complete-masterclass-teens', 'problem-solving-dsa-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Systems that outlive you', p: 'Adults work on the data they already own: ranges, migrations and the quiet assumptions in a spreadsheet nobody has questioned since 2014.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An assistant can write a date converter in ten seconds. Why should a Surrey teenager learn to do it slowly?',
    intro: 'Because the code that comes back will be right about this year and silent about every other one.',
    p1: 'Generated code is trained on the ordinary case, and the ordinary case is a date in the range everyone was already using. It will convert GPS weeks perfectly well for 2026 and produce 1987 without a murmur if you feed it the wrong ten bits, because nothing in the request said what the field was made of. The failure is not that the assistant is bad at arithmetic. It is that the question of range was never asked, and an assistant does not ask.',
    p2: 'A learner who has built the counter themselves, watched 1,023 turn into 0, and then read the published dates back knows where to look. They ask how many bits, how many digits, how many characters, what happens at the top of the range and what happens below zero. Those five questions catch a large share of the bugs that reach production, and they are almost never in the prompt.',
    closer: 'So the case for a Surrey child learning to code in 2026 is not that the machine cannot write the code. It is that somebody has to know what to ask it, and to recognise a confident wrong answer when it arrives.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Staines to Haslemere, and no journey at either end',
    intro: 'The county is wide and the traffic is famous. An online lesson makes both irrelevant.',
    cells: [
      { h3: 'Taught where the learner sits', p: 'A bedroom in Camberley, a kitchen table in Oxted, a library desk in Woking. The lesson goes to the learner rather than the other way about.' },
      { h3: 'English school language', p: 'Key Stage 2 and 3, Year 9 options, GCSE and A level are used as the names they are, and teaching is in English throughout.' },
      { h3: 'A free lesson before any money', p: 'A genuine piece of work with a teacher, ending in a plain recommendation about level and course. No card is asked for.' },
      { h3: 'Groups matched by level', p: 'Five to ten learners at the same stage, drawn from Surrey and beyond, which is the only way a group of the right level exists at the right hour.' },
      { h3: 'Fitted to the Surrey calendar', p: 'Two lessons a week is usual, and breaks are agreed with each family, including that two-week October half term that Surrey alone among its neighbours now takes.' },
      { h3: 'One clock, stated clearly', p: 'Teachers work from India, five and a half hours ahead of the UK in winter and four and a half in summer. Every lesson is agreed and shown in UK time.' }
    ],
    spec: { title: 'Thirty-four towns, one group', p: 'Surrey has thirty-odd towns above five thousand people and no single centre, so a group formed by postcode would never fill. Ours are formed by level, which is why a child in Lingfield and a child in Frimley can be in the same class.' }
  },

  fees: {
    h2: 'What classes cost in Surrey',
    intro: 'One price list for the whole county, and for every country outside India.',
    first: 'A complete lesson on real work, ending with a suggested level and course.',
    group: 'Around eight lessons a month, five to ten learners at a single level.',
    private: 'Around eight lessons a month with a teacher working with one learner.',
    closer: 'Prices are set in US dollars, the rate everywhere outside India, and we do not keep a pound list. Nothing is paid until the free lesson has settled a course and a weekly slot; pauses, missed lessons and moving between group and private teaching are all explained on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, printed as they were written',

  book: {
    h2: 'Tell us who is learning',
    intro: 'An age or school year and a sentence about what they like is plenty. A first lesson might be a Scratch timer, a first Python program, or the counter on this page turning over in front of them.',
    success: 'Thank you. Your Surrey class request has reached the team.'
  },

  faq: {
    h2: 'Surrey coding class questions',
    intro: 'About the county, the project, and how lessons actually work.',
    items: [
      { q: 'How many people live in Surrey?', a: 'The eleven Surrey boroughs and districts held 1,203,113 usual residents at the 2021 Census, according to Office for National Statistics data on Nomis. Reigate and Banstead is the largest at 150,846 and Epsom and Ewell the smallest at 80,937.' },
      { q: 'Which are the biggest towns in Surrey?', a: 'By Census 2021 built-up area, Guildford at 77,880 and Woking at 75,660, then Camberley at 36,785, Epsom at 35,850 and Redhill at 32,525. Thirty-four Surrey towns have more than five thousand residents, which is why the county has no single centre.' },
      { q: 'When is half term in Surrey in 2026?', a: 'Surrey County Council has set a two-week autumn half term for community and voluntary controlled schools, 19 to 30 October 2026, with five days taken from the summer holiday in July 2027. The autumn term runs from 1 September to 18 December 2026.' },
      { q: 'What is the rollover project?', a: 'Learners compute when the GPS week number, a ten-bit field, runs out of values. Our run gives 21 August 1999, 6 April 2019 and 20 November 2038, each at 23:59:42 UTC, and those match the dates GPS.gov publishes. The same fault sets a 32-bit clock back to 1901 on 19 January 2038.' },
      { q: 'Why does a Surrey page talk about satellites?', a: 'Because the county makes them. Surrey Satellite Technology was formed in 1985 as a University of Surrey spin-out and has built around seventy satellites for twenty-two countries from the Surrey Research Park in Guildford, and the Surrey Space Centre has worked on small spacecraft since 1979.' },
      { q: 'Do you have a classroom in Guildford or Woking?', a: 'No. Every lesson is live online, which is a deliberate choice in a county where a fifteen-mile journey can take an hour. There is no building to travel to and no catchment to fall outside.' },
      { q: 'What time do Surrey learners have lessons?', a: 'A weekly slot is agreed after the free lesson, depending on which groups have room at that level. Teachers are in India, five and a half hours ahead in winter and four and a half in summer, and every time is confirmed in UK time.' },
      { q: 'What ages do you teach?', a: 'Six to sixty-seven. Children start in Scratch, move to typed Python around ten to twelve, and older teenagers and adults work on data, AI and software. Placement comes from the free lesson, not from a birthday.' },
      { q: 'What does it cost?', a: 'The first lesson is free. A place in a group is then USD 100 a month and one-to-one teaching USD 150, with nothing to join and no fixed term.' },
      { q: 'Do you teach the school curriculum?', a: 'We teach alongside it. Computing at Key Stages 2 and 3, GCSE and A level Computer Science, and maths from primary upwards, all taught to what the learner is actually sitting rather than to a generic syllabus.' }
    ]
  },

  next: {
    eyebrow: 'Explore the UK',
    h2: 'The rest of the country',
    html: 'The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK page</a> covers the four school systems and links every UK page as it goes live. <a class="cg-inline-link" href="/best-coding-class-in-london">London</a> is over the northern boundary, <a class="cg-inline-link" href="/11-plus-maths-tuition-kent">Kent</a> is the next county east and has its own selective test, and <a class="cg-inline-link" href="/best-online-coding-classes-uk">choosing an online class</a> sets out what to ask any provider.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Surrey and the UK',
  footerPlaces: [
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
    { href: '/best-coding-class-in-london', label: 'London' },
    { href: '/best-online-coding-classes-uk', label: 'Choosing a class, UK' }
  ],

  personalityCss: `
.cg-root.cg-sry .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 3vw, 2.6rem); }
.cg-root.cg-sry .cg-hero h1 { font-weight: 700; letter-spacing: -0.022em; line-height: 1.04; }
.cg-root.cg-sry .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-sry .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-sry .cg-section-head h2 { max-width: 25ch; letter-spacing: -0.014em; }
.cg-root.cg-sry .cg-table caption { font-style: italic; font-weight: 600; }
.cg-root.cg-sry .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-sry .cg-table th { letter-spacing: 0.015em; }
.cg-root.cg-sry .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-sry .cg-callout { border-left-width: 9px; border-radius: 0 8px 8px 0; }
`,

  dossier: {
    curriculumAuthority: 'Surrey. ONS Census 2021 usual residents via Nomis for the eleven districts: Reigate and Banstead 150,846; Guildford 143,647; Elmbridge 138,755; Waverley 128,226; Woking 103,943; Spelthorne 102,960; Surrey Heath 90,456; Runnymede 88,079; Tandridge 87,877; Mole Valley 87,387; Epsom and Ewell 80,937; total 1,203,113. ONS Census 2021 built-up areas: Guildford 77,880; Woking 75,660; Camberley 36,785; Epsom 35,850; Redhill 32,525; Egham 28,000; Ewell 27,515; Horley 27,070; Walton-on-Thames 27,020; Ash and Ash Vale 24,285; Reigate 23,780; Ashford (Spelthorne) 22,825; Caterham 22,755; Great Bookham and Fetcham 21,655; Sunbury-on-Thames 21,475; Staines-upon-Thames 21,325; Farnham 20,500; Cobham 17,505; Dorking 17,465; Weybridge 15,915; Frimley 15,100; Ashtead 14,830; Chertsey 14,560; Byfleet 14,190; Addlestone 13,745; Hersham 12,625; Haslemere 11,900; Oxted 11,490; Leatherhead 11,485; Godalming 10,450; Cranleigh 10,425; Esher 9,485; Banstead 8,925; Warlingham 8,920; Lightwater 6,535; Bagshot 5,930; Shepperton 5,915; Virginia Water 5,185. Surrey County Council term dates 2026-27, community and voluntary controlled schools: autumn term 1 September to 18 December 2026 with a two-week autumn half term 19 to 30 October 2026; "Five days will be taken from the summer holiday in July 2027"; spring term 4 January to 25 March 2027; summer term 12 April to 28 July 2027. Surrey County Council school organisation data: births falling in all eleven districts and boroughs; Elmbridge "Following a 2010 peak of 1,890, births in Elmbridge have dropped by 33%", "Births reached a new low of 1,273 in 2025"; Woking down 30 per cent from a 2012 peak; Epsom and Ewell down 29 per cent from a 2015 peak; Guildford down 27 per cent from a 2012 peak. Surrey Satellite Technology Ltd: Tycho House, 20 Stephenson Road, Surrey Research Park, Guildford GU2 7YE; researchers at the University of Surrey led by Martin Sweeting built satellites from commercial off-the-shelf components in the late 1970s; "In 1985 Surrey Satellite Technology Ltd was formed as a spin-out company"; about 70 satellites for 22 countries over the following three decades; Airbus bought the majority shareholding from the University of Surrey in 2009 and SSTL is now a wholly owned subsidiary. Surrey Space Centre, BA building, University of Surrey, Guildford GU2 7XH: small satellite activities from 1979. GPS.gov: the C/A code carries the week number as a "10-bit code with a maximum value of 1,023 weeks"; "every 19.7 years" it rolls over; "The last GPS Week Number Rollover occurred at 23:59:42 UTC on April 6, 2019"; "next rollover on November 20, 2038"; CNAV uses "a 13-bit week number that won\'t roll over until 2137".',
    localProject: 'A counter with too few bits. From the GPS epoch at 00:00:00 UTC on 6 January 1980 and the eighteen-second GPS minus UTC offset, compute the instant each 1,024-week epoch of the 10-bit LNAV week number turns over, then compare with what GPS.gov publishes. Our run of 20 September 2026: week 1024 at 1999-08-21 23:59:42 UTC, week 2048 at 2019-04-06 23:59:42 UTC (matching GPS.gov\'s stated 23:59:42 UTC on 6 April 2019 to the second), week 3072 at 2038-11-20 23:59:42 UTC (GPS.gov: November 20, 2038), and the 13-bit field first wrapping on 2137-01-05 (GPS.gov: 2137). One epoch is 1,024 weeks, 7,168 days, 19.6 years. On 20 September 2026 the true count is 2,437 weeks; a 10-bit reader sees 389 and dates it to 1987-06-20, an error of 39.2 years. The same fault in signed 32-bit Unix seconds: the maximum 2,147,483,647 falls at 03:14:07 UTC on 19 January 2038 and wraps to 20:45:52 UTC on 13 December 1901. AI angle: an assistant returns the right rollover date and writes a converter that ignores both the leap-second offset and the wrap, because nothing in the prompt mentions the size of the field. Lesson family: a counter with too few bits (integer overflow and rollover); screened free on 20 September 2026 against all 322 dossiers, and distinct from the lost update on a shared counter (Assen), where a series begins (Heerlen) and a record outliving its reader (Hilversum).',
    requiredMentions: [
      '1,203,113',
      '23:59:42 UTC',
      '2,147,483,647',
      'Tycho House',
      'Surrey Research Park',
      'two-week autumn half term',
      '1,273 in 2025',
      'Ash and Ash Vale',
      '7,168 days',
      '2,437 weeks'
    ],
    sources: [
      { claim: 'ONS Census 2021 usual residents for the eleven Surrey districts, totalling 1,203,113, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations for Surrey towns.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'Surrey County Council: 2026-27 term dates, two-week autumn half term 19 to 30 October 2026, five days taken from the July 2027 summer holiday.', url: 'https://www.surreycc.gov.uk/schools-and-learning/schools/term-dates' },
      { claim: 'Surrey County Council: school organisation data, births falling in all eleven districts; Elmbridge down 33 per cent from a 2010 peak of 1,890 to a new low of 1,273 in 2025.', url: 'https://www.surreycc.gov.uk/schools-and-learning/schools/strategies-plans-policies-consultations/provision-of-school-places-and-school-expansions/School-organisation-plan-data' },
      { claim: 'Surrey Satellite Technology Ltd: 1985 University of Surrey spin-out, about 70 satellites for 22 countries, Airbus majority shareholding from 2009.', url: 'https://www.sstl.co.uk/about-us' },
      { claim: 'Surrey Satellite Technology Ltd address: Tycho House, 20 Stephenson Road, Surrey Research Park, Guildford, GU2 7YE.', url: 'https://www.sstl.co.uk/contact-us' },
      { claim: 'University of Surrey, Surrey Space Centre: small satellite activities from 1979, BA building, Guildford GU2 7XH.', url: 'https://www.surrey.ac.uk/surrey-space-centre' },
      { claim: 'GPS.gov: 10-bit week number with a maximum of 1,023, rollover at 23:59:42 UTC on 6 April 2019, next on 20 November 2038, 13-bit CNAV week number lasting to 2137.', url: 'https://www.gps.gov/news/gps-week-number-rollover' }
    ],
    rejectedClaims: [
      'The number of libraries Surrey County Council runs: the libraries page lists branches in a dropdown but publishes no total we could read, so no count is printed.',
      'Guildford as a video games cluster: not read at a primary source for this build, so no studio or industry claim is made.',
      'Named Surrey schools and their computing provision: not read at their own sites for this build, so none is named.',
      'Surrey commuting and rail journey times: quoted widely but not read at an operator or council source, so travel is described only in general terms.',
      'West Molesey\'s built-up area figure of 47,150: the ONS area appears to cover more than the town its name suggests, so it is left out rather than printed under a misleading label.'
    ]
  }
};
