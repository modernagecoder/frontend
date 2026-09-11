'use strict';
// Helmond: textile town east of Eindhoven, 96,860 residents, twelve wijken.
// Spine: no record of Helmond's city rights survives; the encyclopaedia says
// they are generally assumed to date from the same period as neighbouring
// Eindhoven's, in or around 1232. A value filled in from a neighbour cannot
// then be evidence that the neighbours agree.

module.exports = {
  slug: 'coding-classes-in-helmond',
  code: 'hmd',
  accent: '#91314A',
  accentRationale: 'Helmond: a deep madder red for the dye works of a town that printed cloth for centuries, well away from the Dommel teal of Eindhoven, the Brabant red and the green of Den Bosch, and nearest to Emmen, which it does not link to',
  pageType: 'city',
  place: {
    name: 'Helmond',
    eyebrow: 'Helmond, Noord-Brabant',
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
  routeLabel: 'Helmond, Netherlands',
  title: 'Coding Classes in Helmond | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in Helmond for ages 6 to 67, from Brandevoort and Stiphout to Mierlo-Hout and Dierdonk. The first lesson is free.',
  ogDescription: 'Live online coding, Python, AI and mathematics for families in Helmond, on a page about a charter date nobody wrote down.',
  twitterDescription: 'Online classes in Helmond for ages 6 to 67, the fee in USD and a free first lesson.',
  ogImageCourse: 'python-ai-automation-masterclass-college',
  verifiedOn: '11 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Helmond Learners',
    description: 'Ability-placed online coding, Python, AI, app building and mathematics for children, teenagers and adults in Helmond, Stiphout, Mierlo-Hout and Brandevoort, taught in English.'
  },

  h1: 'Coding classes in Helmond, where the year of the city charter was borrowed from the neighbours',
  capsuleQ: 'What are the best coding classes in Helmond?',
  capsule: 'Coding classes in Helmond serve 96,860 people (statistics office, 1 January 2026) in a textile town of twelve wijken east of Eindhoven, enlarged in 1968 with Stiphout and Mierlo-Hout. Helmond kept no evidence of its city rights. The encyclopaedia says they are generally assumed to date from the same period as those of its neighbour Eindhoven, in or around 1232, which is the year Eindhoven received its rights from Duke Henry I of Brabant. So the two towns share a charter year because one was copied from the other, and that agreement proves nothing. Modern Age Coders teaches live online in English across Helmond, ages 6 to 67, first lesson free, then USD 100 monthly in a group of five to ten or USD 150 one to one.',
  lead: 'Ask when Helmond became a city and most lists will give 1232. Ask where that year comes from and the answer is Eindhoven: Helmond has kept no evidence of a grant, and the usual assumption is that its rights came in the same period as its neighbour, which received them in 1232 from the same duke who had founded Helmond in 1225. There is nothing wrong with a reasonable assumption. What goes wrong is what happens next, when the filled-in year sits in a table beside the recorded one and somebody notices that the two neighbouring towns were chartered in the same year. They were chartered in the same year because the table was filled in to say so. Programmers call it imputation, and the rule it breaks is simple: a value you filled in cannot be used as evidence for the rule you filled it in with.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Helmond.',

  picks: {
    eyebrow: 'Course picks for Helmond',
    h2: 'Four courses for a town between the Peel and Brainport',
    intro: 'A groep 5 child in Brandevoort who has only ever played games, a teenager in Stiphout who wants to build an app for the club rather than use somebody else, a student near the Automotive Campus whose dataset has gaps that somebody quietly filled, and an adult in Mierlo-Hout whose spreadsheet copies last month into every blank cell. Each can start with an hour that is taught properly and charged at nothing.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Typed Python where a child fills a gap in a table with a guess, marks it as a guess, and sees why the mark matters later.' },
      { course: 'complete-app-development-masterclass-for-teens', band: 'Ages 13 to 18', note: 'A full app, first screen to finished build, whose data model keeps a value and a flag saying whether anyone actually recorded it.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'Python and pandas where every fillna leaves a column behind it, and no test is ever run on values the fill produced.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Spreadsheets with the filled cells shown, for anybody whose reports agree with each other a little too neatly.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Helmond today',
      h2: 'A textile town of ninety-seven thousand, enlarged in 1968',
      intro: 'The national register held 96,860 people on 1 January 2026, in 43,914 households averaging 2.18 people, on 53.17 square kilometres of land inside 54.75 of territory: a published 1,816 residents to the square kilometre. In 1995 the count was 73,607, so the municipality has gained 23,253 people in thirty-one years, a rise of 32 percent. The encyclopaedia prints 96,842 for the same date, and this page uses the statistics office figure throughout without trying to reconcile the eighteen.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Centuries of cloth', p: 'Helmond was a centre of textile production for centuries, and two of its firms, Vlisco and Raymakers, are still active. The old metal industry is represented by Nedschroef. Industrial growth was stimulated by the arrival of the Zuid-Willemsvaart canal in 1825, according to the encyclopaedia entry for the town.' },
          { h3: 'Enlarged in 1968', p: 'In 1968 Helmond took in the municipality of Stiphout and parts of Mierlo, with the village of Mierlo-Hout, of Deurne, with part of Brouwhuis, and of Bakel en Milheeze. On the west side of the town the new district of Brandevoort has been built since the late 1990s. The statistics office now divides Helmond into 12 wijken and 44 buurten.' },
          { h3: 'Families, and an older middle', p: '15,469 of the 43,914 households have children, 35 percent, and 15,886 hold one person. The largest age band is forty-five to sixty-five with 26,752 residents, just ahead of twenty-five to forty-five with 26,127; 14,407 residents are under fifteen and 18,281 are sixty-five or over.' }
        ] },
        { kind: 'spec', title: 'A water castle, a papal bull and a charter nobody kept', p: 'The settlement existed before the year 1000 and is first mentioned in 1179, in a bull of Pope Alexander III. The town was founded in 1225 by Duke Henry I of Brabant. Its square water castle near the centre was built in the fourteenth century and served as the council chamber until 2001. Helmond has preserved no evidence of the grant of its city rights; the encyclopaedia says it is generally assumed that they came in the same period as those of neighbouring Eindhoven, in or around 1232. More recently the town gained the theatre \'t Speelhuis and the cube houses designed by Piet Blom; \'t Speelhuis was destroyed by fire on 29 December 2011, and some of the cube houses were damaged. The High Tech Automotive Campus was initiated in 2003, and a foundation to run it followed in 2017.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Recorded or filled in',
      h2: 'Two towns chartered in 1232, and only one of them on the record',
      intro: 'Every year below is quoted from the encyclopaedia entries for Helmond and Eindhoven. The last column is the only one this page adds: whether the year was written down at the time or supplied afterwards by reasoning.',
      body: [
        { kind: 'table', caption: 'Dates for Helmond and its neighbour, and where each comes from', head: ['Event', 'Year given', 'Basis stated in the source', 'Recorded or filled in'], rows: [
          ['Helmond first mentioned', '1179', 'a bull of Pope Alexander III', 'recorded'],
          ['Helmond founded as a town', '1225', 'founded by Duke Henry I of Brabant', 'recorded'],
          ['Eindhoven receives city and market rights', '1232', 'granted by Duke Henry I of Brabant', 'recorded'],
          ['Helmond receives city rights', 'in or around 1232', 'no evidence preserved; generally assumed to match neighbouring Eindhoven', 'filled in from the neighbour'],
          ['Castle serves as council chamber', 'until 2001', 'stated directly', 'recorded']
        ] },
        { kind: 'p', text: 'Put these rows into a table with a single column for the charter year and the fourth row becomes 1232, looking exactly like the third. Now ask the table an innocent question: which neighbouring towns received their rights in the same year? It will answer Helmond and Eindhoven, and the answer will be completely worthless, because the only reason the two years match is that one was copied from the other. The filled-in value has not been observed; it has been deduced from an assumption that the neighbours were alike, and a query that finds the neighbours alike has simply read the assumption back. The encyclopaedia is careful to say generally assumed and in or around. The table, unless someone builds it to, keeps neither of those phrases.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Helmond in figures, with every calculation shown',
      intro: 'The statistics office row for the municipality, with the year attached to each figure, then the schools and the wijken, then what the page refuses to conclude.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The register', p: '96,860 residents (2026), 96,551 (2025), 92,423 (2020), 89,023 (2013) and 73,607 (1995); 48,801 men and 47,750 women (2025); 43,914 households averaging 2.18, 15,886 single-person, 12,559 multi-person without children and 15,469 with; 14,407 under fifteen, 11,293 aged fifteen to twenty-five, 26,127 aged twenty-five to forty-five, 26,752 aged forty-five to sixty-five, 18,281 over sixty-five; 5,475 hectares, 5,317 land and 159 water; published density 1,816.' },
          { h3: 'Homes, income and origin', p: '43,549 dwellings (2025), 23,516 owner-occupied at 54 percent and 20,033 rented; estimated average value 345,000 euro (2025); income 32,600 euro per resident and 39,600 per income recipient (2024); 3.1 percent of residents in poverty and 7.2 percent of households at or around the social minimum. By origin (2025): 64,581 Dutch, 13,430 European and 18,540 non-European; 18,891 residents were born abroad.' },
          { h3: 'Schools and colleges', p: '31 primary establishments teach 8,236 pupils and 7 secondary establishments teach 5,493. The encyclopaedia names the Carolus Borromeus College, the Jan van Brabant College, the Dr. Knippenbergcollege and the Vakcollege Helmond, with vocational training at ROC Ter AA. The office also counts residents enrolled in 2025: 2,700 in MBO, 2,010 in higher professional and 690 in university education.' },
          { h3: 'Twelve wijken', p: 'Binnenstad, Helmond-Oost, Helmond-Noord, \'t Hout, Brouwhuis, Helmond-West, Warande, Stiphout, Rijpelberg, Dierdonk, Brandevoort and Industriegebied Zuid, with 44 buurten between them. The page quotes no wijk figures; the municipal row is the only statistics row it uses.' },
          { h3: 'Every calculation', p: '96,860 minus 73,607 is 23,253, which is 32 percent of 73,607. 15,469 of 43,914 households with children is 35 percent; 15,886 single-person is 36 percent. 8,236 primary pupils over 31 establishments is about 266 each; 5,493 secondary pupils over 7 is about 785. Nothing else was calculated.' },
          { h3: 'What the page does not say', p: 'It gives no year for Helmond city rights, because no record of the grant survives; it says only what the source says, in or around 1232 by assumption. It does not reconcile 96,860 with the 96,842 printed in the encyclopaedia for the same date. And it makes no claim about jobs at the Automotive Campus or the firms named, beyond the sentences quoted.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection with Helmond, its council, its schools, the Automotive Campus or any firm named on this page, and nothing here implies one. The municipal figures come from the statistics office row for Helmond at the years it gives: residents and ages for 2026, households as published, dwellings and values for 2025, income for 2024, origin for 2025. The history, the landmarks and the charter sentence come from the encyclopaedia entry for Helmond, and the 1232 grant to Eindhoven from the entry for Eindhoven.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'A filled-in value cannot vouch for the rule that filled it',
      intro: 'Filling gaps is often necessary. Forgetting which cells were filled, and then testing the filling rule on its own output, is the mistake.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Mark every value you did not observe', p: 'Beside the charter year, a second column: recorded or filled in, and if filled, how. For Helmond the answer is filled, from the neighbour, by an assumption the source calls general. Without that column the table cannot tell its facts from its guesses.' },
          { h3: '2. Never test a rule on its own output', p: 'The assumption was that Helmond matched Eindhoven. Any question about whether neighbouring towns match will now find that they do, because the answer was written in. Leave filled values out of any test that touches the rule used to fill them.' },
          { h3: '3. Say what the filling does to the whole', p: 'Filling from a neighbour makes neighbours look alike. Filling from a rule makes the data obey the rule. Filling forward in time makes things look steady. Each fill leaves a fingerprint, and the report has to show it.' }
        ] },
        { kind: 'table', caption: 'The same circle, in five other places', head: ['The gap', 'How it was filled', 'The finding it then produces', 'Why the finding is empty'], rows: [
          ['Missing sensor readings', 'copied forward from the last reading', 'the machine was remarkably stable', 'the flat stretches are the copies'],
          ['The branch each customer uses', 'set to the branch nearest their address when unknown', 'customers mostly use their nearest branch', 'the rule wrote the finding'],
          ['Missing values in a dataset', 'taken from the most similar rows', 'clear clusters of similar customers', 'the fill made rows resemble their neighbours'],
          ['Missing labels for training', 'predicted by the model being trained', 'the model agrees with its labels', 'it is being graded on its own answers'],
          ['Helmond city rights', 'assumed to match neighbouring Eindhoven', 'the two towns were chartered together in 1232', 'the match is the assumption read back']
        ] },
        { kind: 'callout', h3: 'Imputation is a tool, and its output is not data', p: 'Real datasets have holes, and filling them is often the right thing to do: a model cannot train on a blank, and a chart with gaps can mislead in its own way. The standard tools make it easy. In pandas one call, fillna, replaces every missing value with a constant, an average or the previous row, and more elaborate methods borrow values from the nearest similar records. The trouble begins when the filled table is treated as if it had been measured. Every filling method pushes the data towards whatever the method assumes: neighbours become alike and time series flatten, so any later finding along the same lines is partly the method answering its own question. The defences are cheap and almost never used. Keep a column that records which values were filled and how. Run every important analysis twice, once with the filled values and once without them, and distrust any result that appears only in the first. In machine learning, never fill using information from the data you will test on, which is one of the commonest ways a model comes to look better than it is. Helmond makes the point with a single cell. Its charter year is a sensible inference from its neighbour, stated honestly by the source as an assumption, and it becomes an error only when it is copied into a column that has no way of saying so.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for any table with gaps in it',
      intro: 'Survey answers, sensor logs, historical records, customer files and training labels all arrive with holes, and all of them tempt someone to fill the holes and forget. Practised on a town whose charter year was supplied by the town next door.',
      body: [
        { kind: 'table', caption: 'Filling gaps without fooling yourself', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Flag every fill', 'Add a column recording whether each value was observed or filled, and how', 'Guesses indistinguishable from facts', 'A table that knows its own gaps'],
          ['Keep the missingness', 'Store the pattern of blanks before filling anything', 'Losing the evidence of what was absent', 'Gaps you can study'],
          ['Exclude from its own test', 'Leave filled values out of any check on the rule that filled them', 'Circular confirmation', 'Tests that can fail'],
          ['Run it both ways', 'Repeat key results with and without the filled values', 'Findings created by the method', 'Results that survive the gaps'],
          ['Print the rule', 'State the filling method beside every figure it touches', 'Silent assumptions in reports', 'Numbers a reader can weigh']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A class chart of favourite colours with three children absent. The class fills the blanks by copying the child sitting next to each one, then counts the colours, and sees that pairs of neighbours now always match.' },
          { h3: 'For teenagers', p: 'A small table of temperatures in Python with some readings missing. Fill them forward, then calculate how often the temperature stayed the same from one hour to the next, and compare with the figure from the observed readings alone.' },
          { h3: 'For adults', p: 'A report from work where some cells were filled by a formula or by hand. Adults add a flag column, rerun one headline figure without the filled cells, and often find a trend that owed a good deal to the filling.' }
        ] },
        { kind: 'p', text: 'The dates in this section are quoted from two encyclopaedia entries, and the only judgement the page adds is which of them rest on a record and which on an assumption. The source itself draws that line clearly for Helmond; the page keeps the line visible rather than letting the charter year settle into a column beside Eindhoven as if both had been written down in 1232.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From copying a neighbour on a colour chart to a model that is never graded on its own answers',
    intro: 'The free lesson decides where a learner starts, from how they work on a real problem. Where in Helmond they live and how old they are play no part.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Fill it and mark it', p: 'Children fill gaps in a chart and learn to mark which answers were guesses.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'The guess column', p: 'Learners keep a flag beside every value and count only the real ones.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Fill forward, look again', p: 'Teenagers see how filling a gap changes what the data seems to say.', courses: ['complete-app-development-masterclass-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'With and without', p: 'Adults rerun a real result without its filled cells and see what survives.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will tell you Helmond received city rights in 1232. Why should a child here learn to ask who wrote that down?',
    intro: 'Because nobody did. The year was borrowed from Eindhoven by assumption.',
    p1: 'Ask a language model when Helmond became a city and it will very probably say 1232, because that is the year most lists carry, and the lists carry it because they copied it from each other and ultimately from an assumption about Eindhoven. The model has no way to tell a recorded year from a supplied one; in the text it learned from, the two look identical once the words generally assumed have been dropped along the way. Ask it next which Brabant towns were chartered together, and it may cheerfully offer Helmond and Eindhoven as an example, turning the assumption into a finding.',
    p2: 'A learner who has filled the gaps in a dataset with fillna, then discovered a pattern that turned out to be the filling, has learnt to ask of every value whether anyone observed it. Machine learning depends on that question more than almost any other, since models are routinely trained and scored on data that has been cleaned, filled and relabelled by other programs, and a model that is graded on answers it helped to produce will always look good. Models will keep repeating the filled-in year. Asking where a value came from remains the human part of the work.',
    closer: 'The case for a child in Helmond learning to code in 2026 is therefore not the Automotive Campus down the road. It is that anyone who has written a flag column beside a filled value understands, for good, the difference between knowing something and having assumed it.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes across Helmond',
    intro: 'Helmond reaches from the castle and the Binnenstad out to Brandevoort in the west, Stiphout in the north and Mierlo-Hout, and a weekly class has to fit into family evenings in all of them.',
    cells: [
      { h3: 'From Brandevoort or Dierdonk, nothing to drive', p: 'A class in Eindhoven means the car or the train twice a week, and even across Helmond itself it is a ride there and back. The online lesson starts at the kitchen table at the agreed hour, and the travel simply drops out of the week.' },
      { h3: 'Groep, havo and vwo, kept Dutch', p: 'The school words a Helmond child reads on every report stay in Dutch during lessons: groep, havo, vwo, profielkeuze. Nothing is lost translating the school system, because it is never translated.' },
      { h3: 'The first lesson is a lesson', p: 'A real task, worked through with a teacher who watches how the learner goes about it. It ends with a level, a course and a regular time, and it never asks for a card number or turns into a sales conversation.' },
      { h3: 'Groups built by stage', p: 'Five to ten learners at the same point in the same subject. Helmond has 14,407 residents under fifteen, and still five at one exact stage wanting one exact hour is rare, so groups are drawn from a worldwide pool and start promptly.' },
      { h3: 'Regio Zuid, in the diary', p: 'Two lessons a week, around eight a month, at one fixed hour. Noord-Brabant schools take regio Zuid holidays, on dates that differ from the west of the country, and lessons are planned around them from the first month.' },
      { h3: 'The hour, winter and summer', p: 'India is three and a half hours ahead of Helmond in summer and four and a half in winter; only the Dutch clocks move. The late afternoon, the early evening and weekend mornings all stay available through the year.' }
    ],
    spec: { title: 'Thirty-one primary schools, seven secondary, and one way to form a class', p: 'Helmond has 31 primary establishments teaching 8,236 pupils and 7 secondary establishments teaching 5,493, on average about 785 each. A coding group needs something no single town reliably supplies: five learners at the same stage of the same subject who are free at the same hour. That is why classes are formed from a pool that spans every age from 6 to 67 and every country the teachers serve.' }
  },

  fees: {
    h2: 'What classes in Helmond cost, in dollars',
    intro: 'The full fee is here on the page, not saved for a phone call.',
    first: 'A complete taught lesson, ending with a level and a named course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'Every country pays the same dollar figure and there is no euro list, so a family in Brandevoort and one in the Binnenstad see the same price. Nothing is charged until the free lesson has settled a course and a weekly hour, and payment is then arranged over WhatsApp. Pauses, format changes and missed lessons are covered on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, unedited',

  book: {
    h2: 'Tell us where the learner is now',
    intro: 'The first task might be a colour chart with its guesses marked, a table of temperatures filled forward and checked again, or a work report rerun without its filled cells.',
    success: 'Thank you. Your Helmond class request has been sent.'
  },

  faq: {
    h2: 'Helmond coding class questions',
    intro: 'The town, its wijken, one borrowed date, the teaching and the terms.',
    items: [
      { q: 'What does Helmond include?', a: 'Twelve statistics office wijken and 44 buurten: the Binnenstad, Helmond-Oost, Helmond-Noord, the Hout, Brouwhuis, Helmond-West, Warande, Stiphout, Rijpelberg, Dierdonk, Brandevoort and Industriegebied Zuid. Stiphout and Mierlo-Hout joined in 1968 together with parts of Brouwhuis and of Bakel en Milheeze, and Brandevoort has been built since the late 1990s.' },
      { q: 'How many people live in Helmond?', a: 'The statistics office counted 96,860 residents on 1 January 2026, in 43,914 households. In 1995 the count was 73,607, so the town has grown by 23,253, or 32 percent. The encyclopaedia prints 96,842 for the same date; this page uses the statistics office figure.' },
      { q: 'When did Helmond get city rights?', a: 'Nobody knows for certain. Helmond has kept no evidence of the grant. The encyclopaedia says it is generally assumed that its rights came in the same period as those of neighbouring Eindhoven, in or around 1232. The town itself is recorded earlier: first mentioned in 1179 in a papal bull, and founded in 1225 by Duke Henry I of Brabant.' },
      { q: 'Why does it matter that the year was assumed?', a: 'Because a filled-in value cannot be evidence for the assumption that filled it. If the 1232 is copied into a table beside Eindhoven, the table will report that the two neighbours were chartered in the same year, and that finding is only the assumption read back. The same thing happens in data science whenever gaps are filled and then analysed as if they had been measured.' },
      { q: 'What is Helmond known for?', a: 'Centuries of textile production, with Vlisco and Raymakers still active, and Nedschroef representing the older metal industry. The fourteenth-century water castle served as the council chamber until 2001. Piet Blom designed the cube houses and the theatre \'t Speelhuis, which burned down on 29 December 2011, and the High Tech Automotive Campus was initiated in 2003.' },
      { q: 'Which secondary schools are in Helmond?', a: 'The encyclopaedia names the Carolus Borromeus College, the Jan van Brabant College, the Dr. Knippenbergcollege and the Vakcollege Helmond, with vocational training at ROC Ter AA. The statistics office counts 7 secondary establishments with 5,493 pupils. Nothing on this page rates any school.' },
      { q: 'What language are lessons in, and when?', a: 'English, with Dutch school words such as groep, havo and vwo kept as they are. India is three and a half hours ahead in summer and four and a half in winter, so after-school, early-evening and weekend times all work. One weekly slot is fixed at the free lesson, and holidays follow regio Zuid.' },
      { q: 'Is there a Modern Age Coders classroom in Helmond?', a: 'No, and none is claimed here or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Helmond coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or address. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Brabant and beyond',
    h2: 'West to Eindhoven, and on across Noord-Brabant',
    html: 'The neighbour whose 1232 charter Helmond is assumed to share has its own page, <a class="cg-inline-link" href="/coding-classes-in-eindhoven">coding classes in Eindhoven</a>, with the Brainport figures and pages for all seven of its stadsdelen. The provincial capital is on <a class="cg-inline-link" href="/coding-classes-in-den-bosch">Den Bosch</a>, where a painter is recorded as buried the day before he died, and the province as a whole is on <a class="cg-inline-link" href="/coding-classes-in-noord-brabant">Noord-Brabant</a>. For a learner who wants to go straight to machine learning, the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a> is the more direct door, and every page in this series is gathered on the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>.',
    waLabel: 'Finish on WhatsApp'
  },

  footerHeading: 'Helmond, Noord-Brabant and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-eindhoven', label: 'Eindhoven' },
    { href: '/coding-classes-in-noord-brabant', label: 'Noord-Brabant' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-hmd .cg-hero-grid { grid-template-columns: 1.12fr 0.98fr; align-items: center; gap: clamp(1.3rem, 3.2vw, 2.5rem); }
.cg-root.cg-hmd .cg-hero h1 { font-weight: 600; letter-spacing: -0.019em; line-height: 1.07; }
.cg-root.cg-hmd .cg-capsule { border-left: 4px solid var(--cg-accent); border-top: 1px solid var(--cg-accent-soft); padding-left: 1.2rem; padding-top: 0.75rem; }
.cg-root.cg-hmd .cg-eyebrow { letter-spacing: 0.13em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-hmd .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.015em; }
.cg-root.cg-hmd .cg-grid-3 { gap: clamp(1.05rem, 2.2vw, 1.75rem); }
.cg-root.cg-hmd .cg-card { border-radius: 4px; border-bottom: 3px solid var(--cg-accent-soft); }
.cg-root.cg-hmd .cg-table caption { letter-spacing: 0.03em; font-weight: 700; }
.cg-root.cg-hmd .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-hmd .cg-table td:last-child { font-style: italic; }
.cg-root.cg-hmd .cg-ladder-col { border-left: 3px solid var(--cg-accent-soft); padding-left: 0.9rem; }
`,

  dossier: {
    curriculumAuthority: 'Gemeente Helmond, Noord-Brabant: 96,860 residents (statistics office, 1 January 2026; the encyclopaedia prints 96,842 for the same date), 96,551 (2025), 92,423 (2020), 89,023 (2013), 73,607 (1995); 48,801 men and 47,750 women (2025); 43,914 households averaging 2.18, 15,886 single-person, 12,559 without children, 15,469 with children; ages 14,407 under fifteen, 11,293 fifteen to twenty-five, 26,127 twenty-five to forty-five, 26,752 forty-five to sixty-five, 18,281 over sixty-five; 5,475 hectares, 5,317 land and 159 water, published density 1,816; 43,549 dwellings (2025) with 23,516 owner-occupied at 54 percent and 20,033 rented; estimated average value 345,000 euro; income 32,600 euro per resident and 39,600 per recipient (2024); 3.1 percent of residents in poverty, 7.2 percent of households at or around the social minimum; origin (2025) 64,581 Dutch, 13,430 European, 18,540 non-European, 18,891 born abroad; 12 wijken and 44 buurten (Binnenstad, Helmond-Oost, Helmond-Noord, t Hout, Brouwhuis, Helmond-West, Warande, Stiphout, Rijpelberg, Dierdonk, Brandevoort, Industriegebied Zuid); 31 primary establishments with 8,236 pupils, 7 secondary with 5,493; resident students 2,700 MBO, 2,010 higher professional, 690 university (2025). Secondary schools named in the encyclopaedia: Carolus Borromeus College, Jan van Brabant College, Dr. Knippenbergcollege, Vakcollege Helmond; ROC Ter AA. History: a settlement before 1000; first mentioned 1179 in a bull of Pope Alexander III; founded 1225 by Duke Henry I of Brabant; no evidence of the grant of city rights preserved, generally assumed to date from the same period as neighbouring Eindhoven, in or around 1232 (Eindhoven received city and market rights in 1232 from Duke Henry I of Brabant); fourteenth-century water castle, council chamber until 2001; centuries of textile production with Vlisco and Raymakers still active and Nedschroef in metal; industrialisation stimulated by the Zuid-Willemsvaart in 1825; 1968 enlargement with Stiphout and parts of Mierlo (Mierlo-Hout), Deurne (part of Brouwhuis) and Bakel en Milheeze; Brandevoort built since the late 1990s; theatre t Speelhuis and cube houses by Piet Blom, t Speelhuis destroyed by fire 29 December 2011; High Tech Automotive Campus initiated 2003, foundation 2017. Regio Zuid holidays. The city page argues that a filled-in value cannot serve as evidence for the rule that filled it.',
    localProject: 'A value filled in by a rule cannot confirm the rule. Helmond has preserved no evidence of its city rights, and the encyclopaedia says they are generally assumed to date from the same period as those of neighbouring Eindhoven, in or around 1232, the year Eindhoven received city and market rights from Duke Henry I of Brabant, who had founded Helmond in 1225. In a table with one charter-year column, Helmond becomes 1232 beside Eindhoven 1232, indistinguishable from a recorded date, and the query which neighbours were chartered in the same year returns the pair, a finding that is only the filling assumption read back. The source keeps generally assumed and in or around; a single column keeps neither. The general mechanism is imputation: forward filling makes series look stable, nearest-neighbour filling makes neighbours alike and manufactures clusters, and labels predicted by a model make that model look accurate when scored on them. Defences: a flag column recording which values were observed and how the rest were filled, preserving the missingness pattern, excluding filled values from any test of the rule that filled them, running key results with and without the fills, and in machine learning never filling with information from the test data. Distinct from the estimate printed like a count (Loosduinen), where the value is an assessor valuation and the issue is lost provenance, whereas here the issue is circular confirmation downstream of a fill; from the empty field that means no charter (Maastricht); from repetition across sources (Dordrecht); and from agreement between dependent measures (Hillegersberg-Schiebroek), where two published measures reflect one fact, whereas here the analyst creates the dependence.',
    requiredMentions: [
      '73,607',
      '43,914',
      '43,549',
      '15,469',
      '5,317',
      '8,236',
      '5,493',
      '1232',
      'Vlisco',
      'Raymakers',
      'Nedschroef',
      'Stiphout',
      'Brandevoort',
      'Piet Blom'
    ],
    sources: [
      { claim: 'Gemeente Helmond: 96,860 inwoners (2026), 96,551 (2025), 92,423 (2020), 89,023 (2013), 73,607 (1995); mannen 48,801, vrouwen 47,750 (2025); 43,914 huishoudens, 15,886 eenpersoonshuishoudens, 12,559 meerpersoonshuishoudens zonder kinderen, 15,469 met kinderen, gemiddelde huishoudensgrootte 2.18; ages 14,407 (0 to 15), 11,293 (15 to 25), 26,127 (25 to 45), 26,752 (45 to 65), 18,281 (65+) (2026); oppervlakte 5,475 hectare, land 5,317, water 159; bevolkingsdichtheid 1,816; woningvoorraad 43,549 (2025), 23,516 koopwoningen (54 percent), 20,033 huurwoningen; gemiddelde WOZ 345,000 euro (2025); gemiddeld inkomen per inwoner 32,600 and per inkomensontvanger 39,600 euro (2024); personen in armoede 3.1 percent; huishoudens onder of rond sociaal minimum 7.2 percent; 12 wijken, 44 buurten; basisonderwijs 31 vestigingen, 8,236 leerlingen; voortgezet onderwijs 7 vestigingen, 5,493 leerlingen; studenten MBO 2,700, HBO 2,010, WO 690 (2025); herkomst (2025) Nederlands 64,581, Europees 13,430, buiten-Europees 18,540, geboren in het buitenland 18,891.', url: 'https://allecijfers.nl/gemeente/helmond/' },
      { claim: 'Helmond (encyclopaedia): Helmond telt 96.842 inwoners (1 januari 2026, bron: CBS); oppervlakte 54,75 km2, land 53,18, water 1,57. Helmond is ontstaan vanuit een nederzetting die al voor het jaar 1000 moet hebben bestaan, en werd in 1179 voor het eerst genoemd in een bul van Paus Alexander III. De stad werd in 1225 gesticht door Hertog Hendrik I van Brabant. Helmond heeft geen bewijzen bewaard van de toekenning van stadsrechten, maar algemeen gaat men ervan uit dat deze in dezelfde periode zijn verleend als die van nabuur Eindhoven, dus in of rond 1232. Helmond was eeuwenlang een centrum van textielnijverheid; de nog actieve bedrijven Vlisco en Raymakers; de oude metaalindustrie wordt vertegenwoordigd door Nedschroef. Deze werd gestimuleerd door de komst van de Zuid-Willemsvaart in 1825. Deze waterburcht is in de veertiende eeuw gebouwd en heeft tot 2001 als Raadszaal dienstgedaan. In 1968 gebeurde dit met de gemeente Stiphout en delen van de gemeenten Mierlo (de kern Mierlo-Hout), Deurne (deel van Brouwhuis) en Bakel en Milheeze. Aan de westzijde van de stad wordt vanaf eind jaren negentig gebouwd aan de woonwijk Brandevoort. Theater t Speelhuis en de Kubuswoningen, ontworpen door Piet Blom; t Speelhuis is op 29 december 2011 verwoest door een brand, waarbij ook een paar kubuswoningen beschadigd zijn geraakt. Dit in 2003 geinitieerde centrum kreeg de naam High Tech Automotive Campus; in 2017 komt de stichting Automotive Campus tot stand. Scholen: Carolus Borromeus College, Jan van Brabant College, Dr. Knippenbergcollege, Vakcollege Helmond; ROC Ter AA.', url: 'https://nl.wikipedia.org/wiki/Helmond' },
      { claim: 'Eindhoven (encyclopaedia): Het kreeg in 1232 stadsrechten en marktrecht van hertog Hendrik I van Brabant.', url: 'https://nl.wikipedia.org/wiki/Eindhoven' },
      { claim: 'School holiday regions: regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'That Helmond received city rights in 1232. No evidence of the grant survives; the source says they are generally assumed to date from the same period as Eindhoven, in or around 1232.',
      'That Helmond and Eindhoven were chartered in the same year. The match exists only because the Helmond year was filled in from Eindhoven.',
      'Any reconciliation of the statistics office count of 96,860 with the 96,842 printed in the encyclopaedia for the same date. Source disagreement is the Breda argument.',
      'Any claim that the growth from 73,607 in 1995 to 96,860 in 2026 is on unchanged boundaries. The page quotes the published figures only.',
      'Any figure for employment or output at the Automotive Campus, Vlisco, Raymakers or Nedschroef beyond the sentences quoted.',
      'That the Zuid-Willemsvaart caused the growth of Helmond industry. The source says the arrival of the canal stimulated it, and the page quotes that and goes no further.',
      'The estimate printed like a count. That is the Loosduinen argument; the Helmond year is openly an assumption in its source, and the problem arises only downstream.',
      'Repetition across sources as false evidence. That is the Dordrecht argument; here the dependence is created by the filling rule.',
      'Anything the Eindhoven city page owns, including its workplaces, the High Tech Campus in Eindhoven and its named secondary schools.'
    ]
  }
};
