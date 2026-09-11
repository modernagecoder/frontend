'use strict';
// Heerlen: Roman Coriovallum, mining town, seat of a statistics office site,
// 87,764 residents in four stadsdelen.
// Spine (modest, per the Phase 5 method): the mines ran from 1899 to 1974 and
// the statistics office series used here begins in 1995. A series begins
// where someone started counting, not where the story began, so a chart can
// show an effect whose cause lies before its first year. Logs, shallow git
// history and a model's training window all have the same blind spot.

module.exports = {
  slug: 'coding-classes-in-heerlen',
  code: 'hrl',
  accent: '#4F6F15',
  accentRationale: 'Heerlen: a moss green placed by the solver more than thirty units from every page it links to, the Limburg plum and the Sittard-Geleen olive among them, with an unlinked town as its nearest neighbour',
  pageType: 'city',
  place: {
    name: 'Heerlen',
    eyebrow: 'Heerlen, Limburg',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Limburg' },
      { type: 'Country', name: 'Netherlands' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Heerlen, Netherlands',
  title: 'Coding Classes in Heerlen | Modern Age Coders',
  description: 'Live online coding, Python, AI and app classes in Heerlen for ages 6 to 67, in Heerlen-Stad, Heerlerheide, Heerlerbaan and Hoensbroek. The first lesson is free.',
  ogDescription: 'Live online coding, Python, AI and mathematics in the old mining capital, on a page about what a chart cannot see before its first year.',
  twitterDescription: 'Classes in Heerlen for ages 6 to 67, live online, and the first lesson costs nothing.',
  ogImageCourse: 'python-ai-automation-masterclass-college',
  verifiedOn: '11 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Heerlen Learners',
    description: 'Ability-placed online coding, Python, AI, app building and mathematics for children, teenagers and adults in Heerlen and Hoensbroek, taught in English.'
  },

  h1: 'Coding classes in Heerlen, where the story is older than the statistics',
  capsuleQ: 'What are the best coding classes in Heerlen?',
  capsule: 'Coding classes in Heerlen serve 87,764 people (statistics office, 1 January 2026) in a municipality of four stadsdelen, Heerlen-Stad, Heerlerheide, Heerlerbaan and Hoensbroek, together since 1982. The Romans founded a military settlement here called Coriovallum; the mines turned a village of 6,646 people in 1900 into a town of 32,263 by 1930; and the last of those mines closed in 1974. The statistics office series used on this page begins in 1995, and it shows 8,510 fewer residents since then. A series begins where someone started counting, not where the story began, and every programmer meets that blind spot in logs, version history and the training data of AI models. Modern Age Coders teaches live online in English, ages 6 to 67, first lesson free, then USD 100 monthly in a group of five to ten or USD 150 one to one.',
  lead: 'Show someone a chart of Heerlen\'s population from 1995 to 2026 and they will see a steady fall, from 96,274 to 87,764, and look for its cause somewhere on the chart. The chart cannot help them. Its first year comes more than two decades after the last of the mines closed, and almost three decades after the first of them, and the growth that came before, from 6,646 residents in 1900 to 32,263 in 1930, is not on it at all. This page does not claim to know why Heerlen has fewer residents than in 1995. It makes a simpler point: any series starts where somebody started recording, and whatever happened before that line is invisible in it. Programmers live with the same limit every day, in logs that keep thirty days, in repositories cloned without their history, and in AI models that know nothing outside their training window.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Heerlen.',

  picks: {
    eyebrow: 'Course picks for Heerlen',
    h2: 'Four courses for a town with a long memory',
    intro: 'A child in Hoensbroek who wants to build a game, a teenager in Heerlerheide who has started using Git, a student in Heerlen-Stad chasing a bug that began before the logs did, and an adult in Heerlerbaan whose dashboard always opens on the last ninety days. Any of them can start with a full lesson that costs nothing.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Games with a save history, so that a child can go back and see what the project looked like before the latest change.' },
      { course: 'complete-app-development-masterclass-for-teens', band: 'Ages 13 to 18', note: 'Real apps under version control from the first commit, with a history deep enough to answer when a problem began.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'Python for logs and time series, with the start of every dataset recorded and questioned before any trend is read.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Charts and dashboards whose default window is chosen deliberately and printed in the title.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Heerlen today',
      h2: 'Four stadsdelen, two thousand years, and an office of the statistics bureau',
      intro: 'Since 1 January 1982 the municipality has consisted of Heerlen and the former municipality of Hoensbroek, and it is divided into four stadsdelen: Heerlen-Stad, Heerlerheide, Heerlerbaan and Hoensbroek. The statistics office counted 87,764 residents on 1 January 2026, on 4,491 hectares of land within 4,553, a published density of 1,949, in two woonplaatsen, 23 wijken and 57 buurten. Heerlen belongs to the administrative partnership Parkstad Limburg, home to over 250,000 people in all, and the national statistics bureau itself lists Heerlen as one of its office locations, beside The Hague and the Caribbean Netherlands.',
      body: [
        { kind: 'spec', title: 'Coriovallum, and a plough in June 1940', p: 'The Romans founded a military settlement here some two thousand years ago and called it Coriovallum, and among other things they built a bath house and made pottery. In 1940 the foundations of a bath complex were discovered in the centre of Heerlen when a farmer ploughing the fallow ground caught his plough, on 18 June, on part of a column shaft. The amateur archaeologist H.J. Beckers then led a large excavation with volunteers. Although the standing walls have almost entirely gone, the foundations and floor levels still give a good picture of the bath house. The Thermenmuseum opened to the public in 1977, held a collection of about 30,000 objects from the Roman period, and closed in September 2024; a Roman museum is due to open in 2028.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The mines', p: 'Work on the Oranje-Nassau I mine began in 1894, and it ran from 1899 to 1974. The Staatsmijn Emma worked from 1911 to 1973, Oranje-Nassau III from 1917 to 1973 and Oranje-Nassau IV from 1927 to 1966. In the same years Heerlen grew from a village of 6,646 residents in 1900 into a town of 32,263 in 1930.' },
          { h3: 'The Glaspaleis', p: 'In 1935 a building that became very famous was completed: the Glaspaleis, commissioned by the local shopkeeper Peter Schunck.' },
          { h3: 'Offices', p: 'Heerlen houses the head offices or offices of firms in financial and economic services, among them the pension fund ABP, according to the encyclopaedia. The statistics bureau whose figures fill every page in this series has one of its locations here too.' }
        ] }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Before the first year',
      h2: 'What the series shows, and what lies before it',
      intro: 'The first two rows below come from the encyclopaedia, the rest from the statistics office. They are different sources, counting different areas, so they are placed side by side and not joined into one line.',
      body: [
        { kind: 'table', caption: 'Heerlen through three sources, without joining them', head: ['Year or period', 'What is recorded', 'Source', 'On a 1995 to 2026 chart?'], rows: [
          ['About two thousand years ago', 'the Roman settlement of Coriovallum', 'encyclopaedia', 'no'],
          ['1899 to 1974', 'the working life of Oranje-Nassau I, with Emma, Oranje-Nassau III and IV closing between 1966 and 1973', 'encyclopaedia', 'no'],
          ['1900 and 1930', '6,646 and 32,263 residents of Heerlen, then a separate municipality from Hoensbroek', 'encyclopaedia', 'no'],
          ['1995', '96,274 residents on the present boundaries', 'statistics office', 'the first point'],
          ['2013', '88,747 residents', 'statistics office', 'yes'],
          ['2026', '87,764 residents', 'statistics office', 'the last point']
        ] },
        { kind: 'p', text: 'Read only the last three rows and Heerlen is a town that loses residents, and the question becomes what went wrong after 1995. Read all six and it is also a town that grew nearly fivefold in thirty years while the mines were opening, and whose last mine closed twenty-one years before the chart begins. The page does not say that one explains the other. Many things happen to a town over a century, and the sources read here do not connect the mines to the recent figures. What the page does say is that a series is a window, and that a question asked of the window can only be answered with what the window contains. The first year of any dataset is a decision somebody made about where to start counting, and it deserves as much attention as the numbers after it.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Heerlen in figures, with the few sums the page makes',
      intro: 'The statistics office row for the municipality with each year given, then schools and origin, then the history. Every calculation is listed.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Residents', p: '87,764 in 2026, 87,522 in 2025, 88,747 in 2013 and 96,274 in 1995, all on the present boundaries; 43,784 men and 43,738 women in 2025. Ages in 2026: 11,220 under fifteen, 8,921 from fifteen to twenty-five, 21,875 from twenty-five to forty-five, 23,636 from forty-five to sixty-five and 22,112 aged sixty-five or more, adding to the 2026 total.' },
          { h3: 'Households', p: '46,069 households in 2025, averaging 1.86 people: 21,993 of one person, 48 percent, and 24,076 of more than one. 11,936 households, 26 percent, have children living at home.' },
          { h3: 'Homes and income', p: '46,795 dwellings in 2025, 21,994 owner-occupied at 47 percent and 24,801 rented at 53, which together make the total; estimated average value 214,000 euro. Income 30,000 euro per resident and 35,500 per income recipient in 2024, with 5.4 percent of residents in poverty.' },
          { h3: 'Schools', p: '27 primary establishments teach 7,139 pupils, about 264 each, and 19 secondary establishments teach 8,116, about 427 each. The office records 5,195 MBO and 4,840 higher professional students at institutions in the municipality.' },
          { h3: 'Origin', p: 'In 2025, 58,771 residents were of Dutch origin, 13,972 of European and 14,779 of non-European origin, adding to the 2025 total of 87,522; 72,448 were born in the Netherlands.' },
          { h3: 'Every calculation', p: '96,274 minus 87,764 is 8,510, or 8.8 percent of the 1995 figure, on the same boundaries. 1974 to 1995 is twenty-one years. 7,139 over 27 is about 264 and 8,116 over 19 about 427. The age, origin and tenure groups were added only to confirm each is complete. The encyclopaedia figures for 1900 and 1930 are not combined with the office series.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection with the municipality of Heerlen, the statistics bureau, ABP, the Glaspaleis, the former Thermenmuseum or any school in Parkstad, and nothing here suggests one. The municipal figures are the statistics office row for Heerlen at the years given. The Roman history, the mines, the 1900 and 1930 populations, the Glaspaleis, the 1982 merger, the stadsdelen, Parkstad and ABP come from the encyclopaedia entry for Heerlen, the bath house details from the entry for the Thermenmuseum, and the office locations from the statistics bureau\'s own contact page.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Find the first line before you read the rest',
      intro: 'Every log, table, chart and training set has a first record. Most people never look at it. It decides what the data can and cannot answer.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Find the start', p: 'Look up the earliest record, and write down why it is the earliest. A system was switched on, a retention policy deleted older entries, someone chose a default window. Each reason means something different.' },
          { h3: '2. Ask what came before', p: 'List what might have happened before the start that could explain what the data shows: an earlier change, a launch, an outage, a closure. The data cannot confirm or rule these out on its own.' },
          { h3: '3. Say it in the title', p: 'Put the start into every chart and report: since 1995, last ninety days, logs retained thirty days. A reader who knows where the window opens can judge what it leaves out.' }
        ] },
        { kind: 'table', caption: 'The same blind spot in everyday programming', head: ['Where', 'Where the record starts', 'What lies before it', 'The mistaken reading'], rows: [
          ['Server logs', 'the retention limit, often thirty days', 'the day a fault actually began', 'the fault has always been there'],
          ['A shallow Git clone', 'the most recent commit only', 'every earlier change and its reason', 'the last person to touch a line wrote it'],
          ['A dashboard', 'its default window, such as ninety days', 'last year\'s season or last month\'s launch', 'a trend that is really a recovery'],
          ['A trained AI model', 'the first day of its training data', 'rare events from earlier years', 'such events cannot happen'],
          ['Heerlen\'s population series', '1995', 'the mining century and its end', 'the story began in 1995']
        ] },
        { kind: 'callout', h3: 'Why an AI model inherits the limits of its window', p: 'A model learns from a dataset that starts on some date and ends on another, and it treats everything inside as the whole of the world. Events that fall before the start, like a financial crisis, a pandemic or a rare kind of fault, simply do not exist for it, and a model trained on a calm decade can be confident about a world that has been calm only for that decade. The end of the window matters in the same way: a model knows nothing after its training cutoff and will describe the world as it was on that day. None of this is a flaw in the arithmetic. It is a decision about where to start and stop counting, usually made for convenience, and it shapes every answer the model gives. Programmers who work with logs meet the same thing on a small scale whenever a bug predates the retention limit. Heerlen shows it on the scale of a town: a population series that begins in 1995 cannot show the mines, the Romans or the growth of the 1920s, however carefully it is read.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for data that starts somewhere',
      intro: 'For logs, time series, version history, dashboards and training data. Learned in a town whose history is much longer than any series about it.',
      body: [
        { kind: 'table', caption: 'Keeping the start of the data in view', head: ['Habit', 'What to do', 'What it prevents', 'What it gives'], rows: [
          ['Record the start', 'Store when each dataset begins and why', 'A first record mistaken for the beginning of events', 'A known window'],
          ['Print the window', 'Put the date range into every chart title and report', 'Readers assuming the chart shows all of history', 'Honest scope'],
          ['Keep full history', 'Clone repositories with their history and keep logs long enough for slow faults', 'Blame landing on the last person to touch a line', 'Causes that can be traced'],
          ['Look further back', 'Search older sources for anything that could explain what the window shows', 'Explanations invented inside the window', 'Context from before the start'],
          ['Test outside the window', 'Check a model on periods it never trained on, including earlier ones', 'Confidence built on one calm stretch', 'Models that fail less by surprise']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A story told from the middle, then from the beginning. The child notices how the ending means something different once the start is known, and then saves every version of a game to see its whole history.' },
          { h3: 'For teenagers', p: 'A Git repository with a bug planted many commits ago, first cloned shallow and then in full. The teenager finds the commit that caused it and explains why the shallow clone pointed at the wrong one.' },
          { h3: 'For adults', p: 'A work dashboard reopened with a longer window. Adults often find that a worrying trend in the last ninety days was the tail of something that began long before the default view.' }
        ] },
        { kind: 'p', text: 'This section uses the published start and end of the mines, the encyclopaedia population figures for 1900 and 1930 and the office series from 1995, and it deliberately does not link them by cause. It makes no claim about why Heerlen has fewer residents than in 1995.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From saving every version of a game to testing a model outside its window',
    intro: 'The free lesson places each learner by watching them work through a real task. It is not decided by which stadsdeel they live in, nor by age on its own.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Every version', p: 'Children save each stage of a game and look back at how it began.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'The first record', p: 'Learners find where a small dataset starts and ask what came before.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Full history', p: 'Teenagers trace a bug through Git to the commit that really caused it.', courses: ['complete-app-development-masterclass-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Outside the window', p: 'Adults test a model or dashboard on periods it never saw.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI model only knows the years it was trained on. Why should a teenager in Heerlen ask where its data begins?',
    intro: 'Because Heerlen\'s own statistics begin long after most of its story.',
    p1: 'A language model or a forecasting system is built from data that starts on one date and stops on another. Inside that window it can be remarkably good. Outside it, the model has nothing, and it rarely says so: asked about something older than its data, or newer than its cutoff, it answers in the same fluent tone, drawing on patterns from the years it did see. Businesses train smaller models on their own records in the same way, and those records usually begin when some system was switched on, not when the business, or the problem, began.',
    p2: 'A learner who has chased a bug through a repository cloned without its history, and found the real cause only after fetching the older commits, understands the limit in a way that no warning label conveys. The question to ask of any dataset, and of any model trained on one, is where it begins and why. The model cannot ask it about itself. People have to.',
    closer: 'The case for a child in Heerlen learning to code in 2026 is therefore not the town\'s mining past. It is that someone who asks what happened before the first record will be needed wherever AI is trained on data that starts at a convenient date.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From Hoensbroek to Heerlerbaan, the same live class',
    intro: 'The four stadsdelen and the wider Parkstad are close together, but evenings are short, and a lesson that starts at home is the one that actually happens every week.',
    cells: [
      { h3: 'Straight from home', p: 'A pupil in Hoensbroek or Heerlerheide opens the class on a laptop at the agreed hour. There is no journey into the centre and no one waiting to collect them afterwards.' },
      { h3: 'Dutch terms, English teaching', p: 'Groep, brugklas, vmbo, havo, vwo and the profielkeuze keep their Dutch names in lessons, as a Limburg school uses them, while the teaching is in English.' },
      { h3: 'The free lesson is a lesson', p: 'The first hour is spent on a real task. By the end the teacher recommends a level, a named course and a regular weekly time, and no payment details are taken.' },
      { h3: 'Groups beyond one town', p: 'Groups are five to ten learners at the same stage. Heerlen has 11,220 residents under fifteen, and five at an identical stage free at an identical hour are uncommon anywhere, so groups can include learners from several countries.' },
      { h3: 'Regio Zuid holidays', p: 'Two lessons a week, about eight a month, always at the same time, and paused for the regio Zuid holidays that Limburg schools follow.' },
      { h3: 'A convenient time difference', p: 'India is three and a half hours ahead of Heerlen in summer and four and a half in winter, so after school, the early evening and weekend mornings stay open throughout the year.' }
    ],
    spec: { title: 'Forty-six schools, and one group that forms online', p: 'Heerlen has 27 primary establishments teaching 7,139 pupils and 19 secondary establishments teaching 8,116. For a coding class, what matters is five learners who match on subject, stage and hour at once, and those are easier to find across all ages from 6 to 67 and many countries than within one town, however many schools it has.' }
  },

  fees: {
    h2: 'Heerlen fees, all three of them',
    intro: 'Here is everything a family pays, before anyone books a thing.',
    first: 'A genuine lesson on a genuine task, ending in a level and a named course.',
    group: 'Each month, usually eight lessons, five to ten learners grouped by ability.',
    private: 'Each month, usually eight lessons, one teacher for one learner.',
    closer: 'The dollar fee is identical in every country and there is no euro list beside it, so a household in Hoensbroek pays exactly what one in Heerlerbaan pays. Nothing is charged until the free lesson has fixed a course and a time, after which payment is arranged over WhatsApp. Breaks, changes of format and missed lessons are covered on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, reproduced exactly',

  book: {
    h2: 'Tell us how the learner is getting on',
    intro: 'The first task might be saving every version of a small game, finding the first record in a dataset, or tracing a bug back through a repository\'s history.',
    success: 'Thank you. Your Heerlen class request has been sent.'
  },

  faq: {
    h2: 'Heerlen coding class questions',
    intro: 'The town, its Roman and mining past, the statistics, and the lessons.',
    items: [
      { q: 'What does Heerlen include?', a: 'Since 1 January 1982 the municipality has consisted of Heerlen and the former municipality of Hoensbroek. It is divided into four stadsdelen, Heerlen-Stad, Heerlerheide, Heerlerbaan and Hoensbroek, and the statistics office counts 23 wijken and 57 buurten in two woonplaatsen.' },
      { q: 'How many people live in Heerlen?', a: 'The statistics office counted 87,764 residents on 1 January 2026, in 46,069 households in 2025. On the present boundaries the count was 96,274 in 1995, so there are 8,510 fewer residents, or 8.8 percent. This page does not claim to know why.' },
      { q: 'What was Coriovallum?', a: 'The military settlement the Romans founded at Heerlen about two thousand years ago. They built a bath house there, whose foundations were found in 1940 when a farmer ploughing the land struck part of a column shaft. The Thermenmuseum on the site opened in 1977 and closed in September 2024, and a Roman museum is due to open in 2028.' },
      { q: 'When did the Heerlen mines close?', a: 'According to the encyclopaedia, Oranje-Nassau I ran from 1899 to 1974, the Staatsmijn Emma from 1911 to 1973, Oranje-Nassau III from 1917 to 1973 and Oranje-Nassau IV from 1927 to 1966.' },
      { q: 'What is the Glaspaleis?', a: 'A building completed in 1935 for the local shopkeeper Peter Schunck, which the encyclopaedia describes as having become very famous.' },
      { q: 'How many schools are there in Heerlen?', a: 'The statistics office counts 27 primary establishments teaching 7,139 pupils and 19 secondary establishments teaching 8,116, with 5,195 MBO and 4,840 higher professional students at institutions in the municipality. This page rates no school.' },
      { q: 'What language are lessons in, and at what time?', a: 'English, with Dutch school terms such as groep, havo and vwo kept in Dutch. India is three and a half hours ahead in summer and four and a half in winter, so after-school, early-evening and weekend times all work. The weekly hour is agreed at the free lesson and holidays follow regio Zuid.' },
      { q: 'Is there a Modern Age Coders classroom in Heerlen?', a: 'No, and none is claimed here or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Heerlen coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or address. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Limburg and beyond',
    h2: 'Across Zuid-Limburg, and back to the hub',
    html: 'The nearest page is <a class="cg-inline-link" href="/coding-classes-in-maastricht">coding classes in Maastricht</a>, the provincial capital, and to the west <a class="cg-inline-link" href="/coding-classes-in-sittard-geleen">Sittard-Geleen</a>, another former mining town, has one too. Further north <a class="cg-inline-link" href="/coding-classes-in-venlo">Venlo</a> has its own page, and all 31 municipalities of the province are listed on <a class="cg-inline-link" href="/coding-classes-in-limburg">Limburg</a>. A learner who wants to begin with machine learning can go straight to the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>, and the whole series sits on the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>.',
    waLabel: 'Talk to us on WhatsApp'
  },

  footerHeading: 'Heerlen, Limburg and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-maastricht', label: 'Maastricht' },
    { href: '/coding-classes-in-limburg', label: 'Limburg' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-hrl .cg-hero-grid { grid-template-columns: 1.02fr 0.98fr; align-items: start; gap: clamp(1.1rem, 2.7vw, 2.2rem); }
.cg-root.cg-hrl .cg-hero h1 { font-weight: 660; letter-spacing: -0.022em; line-height: 1.05; }
.cg-root.cg-hrl .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.25rem; }
.cg-root.cg-hrl .cg-eyebrow { letter-spacing: 0.19em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-hrl .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.017em; }
.cg-root.cg-hrl .cg-grid-3 { gap: clamp(1rem, 2.3vw, 1.85rem); }
.cg-root.cg-hrl .cg-card { border-radius: 3px; border-top: 2px solid var(--cg-accent-soft); }
.cg-root.cg-hrl .cg-table caption { letter-spacing: 0.035em; font-weight: 700; }
.cg-root.cg-hrl .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-hrl .cg-table td:nth-child(4) { font-weight: 600; }
.cg-root.cg-hrl .cg-ladder-col { border-left: 2px solid var(--cg-accent-soft); padding-left: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'Gemeente Heerlen, Limburg: 87,764 residents (statistics office, 1 January 2026), 87,522 (2025), 88,747 (2013), 96,274 (1995), historical data on current boundaries; 43,784 men and 43,738 women (2025); 46,069 households (2025) averaging 1.86, 21,993 one-person (48 percent), 24,076 multi-person, 11,936 with children (26 percent); ages (2026) 11,220 under fifteen, 8,921 fifteen to twenty-five, 21,875 twenty-five to forty-five, 23,636 forty-five to sixty-five, 22,112 sixty-five or over; 4,553 hectares, 4,491 land, 62 water, published density 1,949; 46,795 dwellings (2025), 21,994 owner-occupied at 47 percent, 24,801 rented at 53 percent; estimated average value 214,000 euro; income 30,000 euro per resident and 35,500 per recipient (2024); 5.4 percent in poverty; origin (2025) 58,771 Dutch, 13,972 European, 14,779 non-European, 72,448 born in the Netherlands; 2 woonplaatsen, 23 wijken, 57 buurten; 27 primary establishments with 7,139 pupils, 19 secondary with 8,116, 5,195 MBO and 4,840 HBO students at institutions. Encyclopaedia (Heerlen): the Romans founded a military settlement called Coriovallum about 2000 years ago and built a bath house and made pottery; Oranje-Nassau I begun 1894, working 1899 to 1974; Oranje-Nassau III 1917 to 1973; Oranje-Nassau IV 1927 to 1966; Staatsmijn Emma 1911 to 1973; from a village of 6,646 residents in 1900 to a town of 32,263 in 1930; the Glaspaleis completed 1935 for the local shopkeeper Peter Schunck; since 1 January 1982 the municipality consists of Heerlen and the former municipality of Hoensbroek; four stadsdelen Heerlen-Stad, Heerlerheide, Heerlerbaan and Hoensbroek; part of Parkstad Limburg with over 250,000 residents in all; (head) offices of financial and economic services including ABP; 87,754 residents on 1 January 2026 in the infobox, not combined with the office row. Thermenmuseum: foundations of a bath complex found in 1940 when a farmer ploughing on 18 June caught his plough on part of a column shaft; excavation by H.J. Beckers with volunteers; standing walls almost entirely gone, foundations and floor levels remain; opened 1977; about 30,000 Roman objects; closed September 2024; a Roman museum due in 2028. Statistics bureau contact page: offices in Den Haag, Heerlen and Caribisch Nederland. Regio Zuid holidays. The city page observes that a series begins where someone started counting.',
    localProject: 'A series begins where someone started counting, not where the story began. The statistics office series used for Heerlen begins in 1995 at 96,274 and ends in 2026 at 87,764; the mines ran from 1899 to 1974 with the others closing between 1966 and 1973, twenty-one years and more before the first point; and the growth from 6,646 in 1900 to 32,263 in 1930 is in a different source for a different area. The page places the six facts side by side without joining them and makes no causal claim about the decline since 1995. The programming form is the start of a window: log retention limits, shallow Git clones that put blame on the last commit, dashboards with a default ninety-day view, and AI models that know only the span of their training data and describe the world as of their cutoff. The defences are recording when and why each dataset begins, printing the window in every title, keeping full history, looking to older sources for context, and testing models outside their training period. Kept modest under the Phase 5 method. Distinct from Emmen, which asks whether the first observation is typical of what follows, from Prins Alexander, which reads several histories into one snapshot, from base-year growth rates (Flevoland), from epochs and boundary changes in a series (Amersfoort, Alkmaar) and from Rotterdam Centrum, whose truncation is spatial.',
    requiredMentions: [
      '96,274',
      '88,747',
      '46,069',
      '21,993',
      '46,795',
      '21,994',
      '24,801',
      '8,116',
      '22,112',
      '5,195',
      'Glaspaleis',
      'Schunck',
      'Heerlerheide',
      'Heerlerbaan'
    ],
    sources: [
      { claim: 'Gemeente Heerlen: 87,764 inwoners (2026), 87,522 (2025), 88,747 (2013), 96,274 (1995), historical data reflects current municipal boundaries; mannen 43,784, vrouwen 43,738; 46,069 huishoudens, 21,993 eenpersoons (48 percent), 24,076 meerpersoons, 11,936 met kinderen (26 percent), gemiddeld 1.86; ages 0-15 11,220, 15-25 8,921, 25-45 21,875, 45-65 23,636, 65+ 22,112 (2026); 4,553 hectare, land 4,491, water 62; bevolkingsdichtheid 1,949; woningvoorraad 46,795, koopwoningen 21,994 (47 percent), huurwoningen 24,801 (53 percent) (2025); gemiddelde WOZ 214,000 euro; gemiddeld inkomen per inwoner 30,000 and per inkomensontvanger 35,500 euro (2024); personen in armoede 5.4 percent; basisonderwijs 27 vestigingen 7,139 leerlingen, voortgezet onderwijs 19 vestigingen 8,116 leerlingen, MBO 5,195, HBO 4,840 studenten; herkomst Nederland 58,771, Europa 13,972, buiten Europa 14,779, geboren in Nederland 72,448 (2025); 2 woonplaatsen, 23 wijken, 57 buurten.', url: 'https://allecijfers.nl/gemeente/heerlen/' },
      { claim: 'Heerlen (encyclopaedia): De Romeinen stichtten er 2000 jaar geleden een militaire nederzetting, die zij de naam Coriovallum gaven. De Romeinen bouwden onder meer een badhuis en bedreven er pottenbakkerij. In 1894 was al begonnen met de aanleg van de Oranje-Nassaumijn I, 1899-1974; Oranje-Nassau III (1917-1973), Oranje-Nassau IV (1927-1966), Staatsmijn Emma (1911-1973). Van een dorpje met 6646 inwoners in 1900 tot een stad van 32.263 inwoners in 1930. In 1935 kwam een zeer befaamd geworden gebouw gereed, het Glaspaleis van opdrachtgever en lokale winkelier Peter Schunck. Sinds 1 januari 1982 wordt de huidige gemeente Heerlen gevormd door Heerlen en de voormalige gemeente Hoensbroek. Bestuurlijk wordt Heerlen gevormd door vier stadsdelen - Heerlen-Stad, Heerlerheide, Heerlerbaan en Hoensbroek. Heerlen maakt deel uit van het bestuurlijke samenwerkingsverband Parkstad Limburg, waar in totaal ruim 250.000 mensen wonen. In Heerlen bevinden zich (hoofd)kantoren van spelers in de financiele en economische dienstverlening, waaronder Stichting Pensioenfonds ABP. Op 1 januari 2026 had Heerlen 87.754 inwoners (CBS).', url: 'https://nl.wikipedia.org/wiki/Heerlen' },
      { claim: 'Thermenmuseum (encyclopaedia): In 1940 werd in het centrum van Heerlen het fundament ontdekt van een thermencomplex. Een boer die het braakliggende grasland aan het omploegen was bleef op 18 juni van dat jaar met zijn ploeg in een deel van een zuilschacht steken. Later begon amateurarcheoloog dr. H.J. Beckers, geholpen door vrijwilligers, met een grote opgraving. Hoewel het opgaande muurwerk bijna geheel verdwenen is, kan men zich aan de hand van funderingen en vloerniveaus nog een goede voorstelling maken van het badhuis. In 1977 werd geopend voor publiek. Het museum bezit een collectie van circa 30.000 kunst- en gebruiksvoorwerpen uit de Romeinse tijd. Het Thermenmuseum sloot in september 2024 haar deuren en Het Romeins Museum zal in 2028 geopend worden.', url: 'https://nl.wikipedia.org/wiki/Thermenmuseum' },
      { claim: 'Statistics Netherlands contact page: Het CBS heeft vestigingen in Den Haag, Heerlen en Caribisch Nederland (Bonaire).', url: 'https://www.cbs.nl/nl-nl/over-ons/contact' },
      { claim: 'School holiday regions: regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'Any causal link between the mine closures and the fall in residents since 1995. The sources read do not make it, so neither does the page.',
      'Any joining of the 1900 and 1930 encyclopaedia figures with the office series from 1995. Different sources and a different area before the 1982 merger with Hoensbroek.',
      'Any comparison of the encyclopaedia figure of 87,754 with the office figure of 87,764 for 1 January 2026. Two sources that disagree is the Breda argument.',
      'The architect of the Glaspaleis, which the sources read did not state in a quotable sentence.',
      'That the statistics bureau has its head office in Heerlen. Its own page lists Heerlen as one of its locations, and the page says only that.',
      'Any comment on the university student count, which the row did not give as a figure.',
      'Anything the Maastricht, Sittard-Geleen, Venlo and Limburg pages own, including their figures and arguments.'
    ]
  }
};
