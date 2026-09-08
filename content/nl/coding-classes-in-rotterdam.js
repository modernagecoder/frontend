'use strict';
// Rotterdam: the port city that hands off to eight district pages. Spine: in
// 2025 the port handled 3.1 percent more containers and 0.2 percent less
// container cargo, because a TEU counts boxes and a tonne weighs what is in
// them. Two units, one flow, opposite signs. Reads as a map, never as a
// district page.

module.exports = {
  slug: 'coding-classes-in-rotterdam',
  code: 'rtm',
  accent: '#066374',
  accentRationale: 'Rotterdam: the pale blue of the Swan\'s pylon on the Erasmusbrug, darkened until it clears every paper tint',
  pageType: 'city',
  place: {
    name: 'Rotterdam',
    eyebrow: 'Rotterdam, Zuid-Holland',
    schemaType: 'City',
    chain: [{ type: 'AdministrativeArea', name: 'Zuid-Holland' }, { type: 'Country', name: 'Netherlands' }]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Rotterdam, Zuid-Holland, Netherlands',
  title: 'Coding Classes in Rotterdam | Modern Age Coders',
  description: 'Live online coding, Python, Java, app and AI classes for Rotterdam learners aged 6 to 67, from Feijenoord to Prins Alexander, where the port counts in two units.',
  ogDescription: 'Live online coding, Python, Java, app development, AI and mathematics for Rotterdam families, built on the year the port handled more boxes and less cargo.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'complete-app-development-masterclass-for-teens',
  verifiedOn: '7 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Rotterdam Learners',
    description: 'Ability-placed online coding, Python, Java, app development, AI, data and mathematics for children, teenagers and adults across the fourteen gebieden of Rotterdam, taught in English.'
  },

  h1: 'Coding classes in Rotterdam, where the port handled more boxes and less cargo in the same year',
  capsuleQ: 'What are the best coding classes in Rotterdam?',
  capsule: 'Coding classes in Rotterdam serve the second city of the Netherlands, 673,804 people on 1 January 2026 (Statistics Netherlands), a third of them born abroad, with the largest Surinamese-origin community of any origin group in the city at 52,003, and a port that in 2025 moved 428.4 million tonnes, 1.7 percent less than the year before, while handling 14.2 million containers, 3.1 percent more. Modern Age Coders teaches coding, Python, Java, app development, AI and mathematics to Rotterdam learners aged 6 to 67, live online and in English. Nothing is charged for the first lesson; a place in a group of five to ten is then USD 100 a month and private tuition USD 150.',
  lead: 'A container is a box, and a tonne is what is inside it. In 2025 Rotterdam had more of the first and less of the second, and a family reading two headlines about the same port in the same week could be forgiven for thinking one of them was wrong. Neither was. The program that shows why is the project on this page, and in a city that lives by the quay it is not a small thing for a child to understand.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Rotterdam.',

  picks: {
    eyebrow: 'Course picks for Rotterdam',
    h2: 'Four courses for a city that builds things and ships them',
    intro: 'Rotterdam is the Dutch city most likely to send a child to a vmbo, the home of a business university founded by the port\'s own merchants, and a place where a third of residents were born somewhere else. These four are chosen for making rather than talking: an app on a phone, a Java service that runs, a dataset that can be checked against the quay.',
    items: [
      { course: 'block-coding-app-development-masterclass', band: 'Ages 8 to 12', note: 'Real apps built from blocks, for the groep 5 to 8 child in Charlois or Prins Alexander who wants something to show a cousin by the weekend.' },
      { course: 'complete-app-development-masterclass-for-teens', band: 'Ages 13 to 17', note: 'React Native apps that run on a real phone, for the teenager at De Hef, the Wolfert or the Erasmiaans who is done with worksheets.' },
      { course: 'complete-java-programming-masterclass-college', band: 'College and adult', note: 'Core Java to Spring Boot, for the Hogeschool Rotterdam or Erasmus student who wants a backend that would survive a port operator\'s traffic.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults', note: 'Excel, SQL, Python and Power BI, for the logistics planner who has read tonnes and TEU in the same report and never been sure which one to trust.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Rotterdam today',
      h2: 'Six hundred and seventy-three thousand people, a third born abroad, in a city that was rebuilt from a quarter of an hour',
      intro: 'Statistics Netherlands counted 673,804 residents on 1 January 2026 in 342,340 households averaging 1.93 people: 99,640 under fifteen and 90,861 between fifteen and twenty-five. Forty-three percent are of Dutch origin, thirteen percent from elsewhere in Europe and forty-four percent from outside it, and 228,079 people, thirty-four percent, were born abroad. The largest origin groups in 2022 were Suriname at 52,003, Turkey at 47,750 and Morocco at 46,211.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The fifteen minutes', p: 'The bombing of 14 May 1940 lasted about a quarter of an hour, destroyed more than 24,000 homes, killed about eight hundred people and left eighty thousand without a house. Almost everything a visitor sees in the centre was built after it, which is why Rotterdam looks like no other Dutch city and why its children grow up among cranes.' },
          { h3: 'The tunnel and the bridge', p: 'The Maastunnel opened on 14 February 1942, the first road tunnel in the country, in the middle of the occupation. The Erasmusbrug opened on 6 September 1996: 802 metres long, a single pylon 139 metres high, 165 million euros, designed by Ben van Berkel and called the Swan by everyone who lives here.' },
          { h3: 'The port, by its own count', p: 'Europe\'s largest port stretches about forty kilometres from the city to the sea. In 2025 it handled 428.4 million tonnes, down 1.7 percent, and 14.2 million TEU of containers, up 3.1 percent, according to the Port Authority figures reported on 27 February 2026; crude oil rose 3.4 percent to 101.2 million tonnes, LNG rose 15.1 percent to 13.0 million and coal fell 8.7 percent to 17.3 million.' }
        ] },
        { kind: 'spec', title: 'The most Surinamese city in the country by absolute count of any single origin', p: 'In The Hague the Surinamese-origin community is the largest non-Dutch group at 44,769; in Rotterdam it is larger still, at 52,003, and it is the largest origin group of any kind in the city. The Hindustani, Creole and Javanese families inside that figure are not separated by any statistic, which is the same limit The Hague\'s page explains. Rotterdam\'s page does not repeat the argument; it points to it and moves on to the quay.' }
      ]
    },
    {
      id: 'districts', tint: 'tint', eyebrow: 'The fourteen gebieden',
      h2: 'Fourteen districts that sum to the city minus eight people',
      intro: 'Rotterdam is divided into fourteen gebieden, each with its own committee since the deelgemeenten lost their formal status on 19 March 2014, plus a handful of port and industrial zones with almost nobody in them. The fourteen sum to 670,760 on 1 January 2026; add the 2,922 people of Nieuw Mathenesse and the hundred or so in the port areas and the total comes to 673,796, eight short of the national figure. Eight pages in this series will cover the largest; this is the map.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Prins Alexander', p: 'The largest gebied at 97,794 and the north-eastern suburb: Ommoord, Zevenkamp, Nesselande, Oosterflank, built from the 1960s onward on drained polder land, with the Alexandrium and its own metro stations. A page of its own follows.' },
          { h3: 'Feijenoord and IJsselmonde', p: 'Feijenoord, 81,512, is the south bank across the Swan: the Kop van Zuid, the Afrikaanderwijk, the Hillesluis, and De Hef on the Slaghekstraat. IJsselmonde, 63,475, lies further south-east around the stadium. Both get their own pages.' },
          { h3: 'Delfshaven and Charlois', p: 'Delfshaven, 76,590, is the old harbour town swallowed by the city, with Spangen, Bospolder and Tussendijken. Charlois, 70,932, is the south-west: Carnisse, Tarwewijk, Pendrecht, Zuidwijk. Two of the densest and youngest gebieden in the city.' },
          { h3: 'Kralingen-Crooswijk and Noord', p: 'Kralingen-Crooswijk, 54,856, holds the Woudestein campus of Erasmus University and the Kralingse Plas; Noord, 51,962, the Bergweg, the Agniesebuurt and Blijdorp. Noord is covered inside this page rather than given a URL.' },
          { h3: 'Hillegersberg-Schiebroek and Centrum', p: 'Hillegersberg-Schiebroek, 44,792, is the leafy north with the Bergse plassen, the Melanchthon Schiebroek and the international school at Nord Anglia. <a class="cg-inline-link" href="/coding-classes-in-rotterdam-centrum">Centrum</a>, 42,924, is the rebuilt heart, and its page argues that a district this small is mostly edge: the Lijnbaan, the Markthal, the Wolfert and the Erasmiaans on the Wytemaweg.' },
          { h3: 'The five outside the ring', p: 'Hoogvliet 36,752, Overschie 21,157, Rozenburg 12,619, Hoek van Holland 10,513 and Pernis 4,882 sit among the port and the polders. They are covered here by name; a separate page for each would be a page about a refinery.' }
        ] },
        { kind: 'p', text: 'District pages in this series follow one rule: a paragraph of city context, then only what is true of that gebied and false of its neighbours. This page carries the city so that they can stay close to the ground.' }
      ]
    },
    {
      id: 'schools', tint: '', eyebrow: 'Schools by name',
      h2: 'Eighty-one schools in the city, and the seven that place a Rotterdam child for us',
      intro: 'The schools register lists 82 secondary establishments in the municipality and 26,376 Rotterdam-resident pupils attending 142 different schools in 2025-26. The left column is the school as the register and its own site describe it; the right is what fits beside it.',
      body: [
        { kind: 'align', rows: [
          { code: 'RISS', req: 'Rotterdam International Secondary School, Bentincklaan 294, part of the Wolfert van Borselen group: the IB Diploma Programme and IGCSE, about 400 pupils in 2021 and 82 countries represented in 2017.', ours: 'Cambridge IGCSE Computer Science 0478 for the middle years; the IB Diploma Computer Science course for the Diploma years, with the live sessions used for the internal assessment.' },
          { code: 'Wolfert Tweetalig', req: 'Wolfert Tweetalig, Bentincklaan 280, the bilingual school of the same group, vbo through vwo, 1,062 Rotterdam pupils, second largest intake in the city.', ours: 'Python for teens in English fits a bilingual timetable without translation; a term of it before the profielkeuze for third-years.' },
          { code: 'NAISR', req: 'Nord Anglia International School Rotterdam in Hillegersberg, founded in 1959 as the American International School of Rotterdam, acquired by Nord Anglia in 2018, an IB World School for ages 3 to 18 with about 260 pupils from more than forty nationalities.', ours: 'Placement by programme year; the IB course for Diploma students who choose Computer Science. Many NAISR families are on three-year postings, and a course that goes to the next one is the point.' },
          { code: 'Melanchthon', req: 'Melanchthon Schiebroek, Van Bijnkershoekweg 97, vbo through vwo, 1,129 Rotterdam pupils, the largest intake in the city.', ours: 'The Python ladder by level for the havo and vwo streams; app and website courses for the vmbo stream, so a portfolio exists before an MBO intake asks for one.' },
          { code: 'Erasmiaans', req: 'Erasmiaans Gymnasium, Wytemaweg 25, vwo only, 858 Rotterdam pupils, the categorical gymnasium of the city.', ours: 'Problem solving and data structures, and the Python-to-machine-learning track, for the student who reads Homer and can therefore read a stack trace.' },
          { code: 'Montessori and Emmaus', req: 'Montessori Lyceum Rotterdam on the Schimmelpenninckstraat (havo and vwo, 981) and the Emmauscollege on the Alexandriestraat in Prins Alexander (havo and vwo, 973).', ours: 'Data science in Python beside wiskunde A or B in the bovenbouw; JavaScript for the teenager who wants the thing built to be on a phone by Friday.' },
          { code: 'De Hef', req: 'De Hef, Slaghekstraat 221 in Feijenoord, vbo and mavo, 603 Rotterdam pupils, the school of the south bank.', ours: 'App-making and web development whose output is something to show an MBO admissions tutor, and a first data course on the port\'s own numbers.' }
        ] },
        { kind: 'p', text: 'Het Lyceum Rotterdam, the Rotterdam Designcollege, the Avicenna College, the Rudolf Steiner College, the Einstein Lyceum, the Laurens Lyceum and the Wolfert Dalton complete the largest fifteen. A school\'s name fixes the vocabulary we use with a family; the level is found in the opening lesson and nowhere else.' }
      ]
    },
    {
      id: 'evidence', tint: 'tint', eyebrow: 'Verified local facts',
      h2: 'Rotterdam facts, with the office and the date on each',
      intro: 'Seven things this page rests on, including the two port figures that make the project possible.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The count', p: 'Statistics Netherlands, provisional, 1 January 2026: 673,804 residents; 342,340 households; 99,640 under fifteen; 90,861 aged fifteen to twenty-five; 168 primary establishments with 55,423 pupils; 81 secondary with 37,967; 22 wijken and 92 buurten; 34 percent born abroad; origin 43 percent Dutch, 13 Europe, 44 outside Europe; Suriname 52,003, Turkey 47,750, Morocco 46,211 in 2022.' },
          { h3: 'The gebieden', p: 'Municipal register, 1 January 2026: Prins Alexander 97,794; Feijenoord 81,512; Delfshaven 76,590; Charlois 70,932; IJsselmonde 63,475; Kralingen-Crooswijk 54,856; Noord 51,962; Hillegersberg-Schiebroek 44,792; Centrum 42,924; Hoogvliet 36,752; Overschie 21,157; Rozenburg 12,619; Hoek van Holland 10,513; Pernis 4,882. Sum 670,760.' },
          { h3: 'The port in 2025', p: 'Port of Rotterdam Authority figures as reported by Container News on 27 February 2026 and SWZ Maritime on 2 March 2026: 428.4 million tonnes (minus 1.7 percent); containers 14.2 million TEU (plus 3.1 percent) but minus 0.2 percent in tonnes; dry bulk minus 6.5; liquid bulk minus 1.5; crude 101.2 million tonnes (plus 3.4); LNG 13.0 million (plus 15.1); coal 17.3 million (minus 8.7); iron ore and scrap minus 11.5; agribulk plus 6.3; revenue 940.4 million euros (plus 6.6); EBITDA 583.6 million (plus 3.6).' },
          { h3: 'Why the two signs', p: 'SWZ Maritime\'s account of the Authority\'s explanation: imports from Asia rose 9.3 percent, exports fell, transhipment declined, and congestion at container quays diverted volume to other ports and increased the handling of empty containers. More boxes, more of them empty or lightly loaded, less weight.' },
          { h3: 'The dates', p: 'Bombing 14 May 1940, about fifteen minutes, more than 24,000 homes, about 800 dead, 80,000 homeless. Maastunnel 14 February 1942, the first road tunnel in the Netherlands. Erasmusbrug 6 September 1996, 802 metres, pylon 139 metres, 165 million euros, Ben van Berkel. Erasmus University founded 8 November 1913 as the Nederlandsche Handels-Hoogeschool, renamed 1973, 31,612 students and 3,207 academic staff in 2023, Woudestein campus in Kralingen, Erasmus MC since 2003.' },
          { h3: 'The schools', p: 'Register 2025-26: 82 establishments in the municipality, 26,376 Rotterdam pupils across 142 schools. Melanchthon Schiebroek 1,129; Wolfert Tweetalig 1,062; Montessori Lyceum 981; Emmauscollege 973; Erasmiaans Gymnasium 858; Het Lyceum Rotterdam 814; Rotterdam Designcollege 812; Avicenna College 722; De Hef 603. RISS at Bentincklaan 294; NAISR in Hillegersberg, founded 1959, Nord Anglia since 2018.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no association with the Port of Rotterdam Authority, the municipality, Erasmus University, the Wolfert van Borselen group, Nord Anglia or any school named above, and claims none. They appear because a page about coding classes in Rotterdam has to know what Rotterdam does for a living.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'More boxes, less cargo: build the program that makes both port headlines true at once',
      intro: 'Two published percentages for one flow of containers, a unit that counts and a unit that weighs, and a table that turns a contradiction into arithmetic.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Take the two published changes', p: 'Containers through Rotterdam in 2025: 14.2 million TEU, up 3.1 percent on 2024; container cargo by weight, down 0.2 percent. A TEU is a twenty-foot equivalent unit, a count of box-lengths, and it counts an empty box exactly as it counts a full one. A tonne is a tonne. Both figures are from the Port Authority, reported the same week.' },
          { h3: '2. Write the two units as two variables', p: 'The learner keeps boxes and weight as separate quantities and derives the third: weight per box. Fourteen point two million divided by one point zero three one gives 13.77 million TEU in 2024; with weight at 99.8 percent of the year before, the average load per box index falls to 96.8, a drop of 3.2 percent. Nothing in the two headlines said that, and it is the only number that explains them.' },
          { h3: '3. Add the empties, and watch loaded boxes fall', p: 'The share of empty containers is not published, so the learner treats it as a labelled assumption. If empties rose from 20 to 23 percent of all boxes, loaded boxes fell 0.8 percent in a year the box count rose 3.1. At 20 to 25 percent, loaded boxes fell 3.3 percent. The port grew and shrank in the same year, and which one you say depends on which unit you were handed.' }
        ] },
        { kind: 'table', caption: 'One container flow, two units, and the derived figure neither headline mentions (2024 = 100; empty shares illustrative)', head: ['Measure', '2024', '2025', 'Change', 'Status'], rows: [
          ['Boxes, million TEU', '13.77', '14.20', 'plus 3.1 percent', 'published (2024 derived from the change)'],
          ['Container cargo by weight, index', '100.0', '99.8', 'minus 0.2 percent', 'published'],
          ['Weight per box, index', '100.0', '96.8', 'minus 3.2 percent', 'derived'],
          ['Loaded boxes if empties went from 20 to 23 percent', '11.02', '10.93', 'minus 0.8 percent', 'illustrative'],
          ['Loaded boxes if empties went from 20 to 25 percent', '11.02', '10.65', 'minus 3.3 percent', 'illustrative']
        ] },
        { kind: 'callout', h3: 'A box is not a tonne, and a unit is a choice', p: 'Every count of a flow is a count in some unit, and the unit decides what the number can see. TEU sees box-lengths and is blind to what is inside; tonnes see weight and are blind to how many boxes carried it. When the two move in opposite directions the flow has changed shape, not size: lighter loads, more empties, more imports and fewer exports, as the Authority\'s own explanation says. A learner who has derived the weight-per-box line once will ask "in what unit?" of a sales figure, a traffic count and a press release for the rest of their life. The table was computed before this paragraph was written; the two published percentages are the Authority\'s, and the empty-container rows are labelled as the assumptions they are.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for any figure that could have been counted in a different unit',
      intro: 'Units, page views against sessions, orders against revenue, tonnes against boxes: the same trap sits under most dashboards. Practised first on the quay.',
      body: [
        { kind: 'table', caption: 'When two units describe one flow', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Name the unit', 'Say what one of the thing is: a box, a tonne, a visit, an order', 'Growth in one unit read as growth in all', 'A number you can compare'],
          ['Ask what the unit is blind to', 'A TEU cannot see weight; a tonne cannot see count', 'A contradiction where there is only a change of shape', 'The second variable'],
          ['Derive the ratio', 'Divide one unit by the other and watch the ratio move', 'Two headlines with opposite signs and no explanation', 'The figure neither headline gave'],
          ['Label the assumption', 'Mark what was not published and what you assumed for it', 'An empty-container share quoted as a fact', 'Honest illustrative rows'],
          ['Keep both', 'Report the flow in both units, never just the flattering one', 'A port that grew in the press release and shrank on the quay', 'A story that survives the next report']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'Ten toy boxes on a table, some with marbles in and some empty. The child counts the boxes, then weighs the table. Then two boxes are emptied and three empty ones are added: more boxes, less weight. The child says the sentence themselves, and it takes ten minutes and no screen.' },
          { h3: 'For teenagers', p: 'The two units in Python, the derived weight per box, and a loop over empty-container shares that prints the loaded-box change for each. Then the harder question: what single figure, if the Authority published it, would replace the illustrative rows with a fact, and where would you look for it.' },
          { h3: 'For adults', p: 'The same program on page views against sessions, orders against revenue, or tonnes against pallets in a warehouse report. Most operations dashboards report the unit that went up, and a Rotterdam planner has almost certainly sat in a meeting where two departments were both right. Bring one if it is yours to share.' }
        ] },
        { kind: 'p', text: 'The port percentages, the population and gebied figures, the school counts, the dates of the bombing, the tunnel and the bridge, and the university figures are published by the offices and outlets named in the sentences that use them. The 2024 TEU figure is derived from the published change; the weight-per-box index is derived from the two published percentages; the empty-container shares are illustrative and labelled. No figure on this page reports a Rotterdam measurement that no office has published.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From ten toy boxes to a two-unit model with its ratio derived',
    intro: 'The opening lesson finds the rung; which gebied the laptop is in does not.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'More boxes, less weight', p: 'Children count and weigh the same table and find the two numbers move apart.', courses: ['kids-coding-blocks-masterclass', 'block-coding-app-development-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'A ratio that explains two headlines', p: 'Learners divide one unit by another in Python and watch the result move.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'Two units, one flow, labelled assumptions', p: 'Teenagers build the container model and mark what is published and what is assumed.', courses: ['python-complete-masterclass-teens', 'problem-solving-dsa-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Units at work', p: 'Adults take apart a dashboard that reports the flattering unit and rebuild it in both.', courses: ['data-analysis-mastery-course-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'The port already runs on software. Does a Rotterdam child still need to learn to write it, now that AI does too?',
    intro: 'Ask an assistant whether the port of Rotterdam grew in 2025 and you will get a yes or a no, delivered with equal confidence, depending on which sentence of the press release it happened to weigh more.',
    p1: 'The tool is not wrong either way; it is answering in whichever unit it was handed. What it does not do unprompted is notice that the question has no answer until a unit is named, derive the ratio that reconciles the two, or say which of its confident figures rests on an assumption about empty boxes that nobody published. Those moves are made by a person who has once kept boxes and tonnes as two variables and watched them diverge.',
    p2: 'That is why the learner still writes the program: not for the syntax, which the tools now produce, but for the reflex of asking "in what unit?" before believing a number, and of deriving the second figure that the headline left out. A thirteen-year-old in Charlois who has done that with the port will do it with a sales chart at twenty-three without being asked, and will be the one in the room who says the two departments are both right and here is why. The tools will have changed several times by then. The question will be the same one.',
    closer: 'So the honest answer for a Rotterdam parent is the one the quay teaches every day: a flow can grow in one unit and shrink in another, a child who can show that in code has learned to think, and the code was the way in, not the point.',
    blogAnchor: 'is coding still worth learning in 2026 when AI writes it'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for a city that works in shifts',
    intro: 'Port, hospital, terminal and refinery families in Rotterdam do not all keep office hours, and a child\'s week in Pendrecht or Nesselande is planned around a rota. A lesson that comes to the kitchen table at a fixed time is built for that.',
    cells: [
      { h3: 'One recurring slot, chosen by the family', p: 'The class is at home in Ommoord, Kralingen or the Kop van Zuid at an hour the household keeps, and it does not require the parent on the early shift to be there.' },
      { h3: 'English, with Rotterdam\'s school words left alone', p: 'Teaching is in English. Groep, mavo, havo, vwo, profiel, tweetalig and IGCSE are used as the child hears them at school, because that is the vocabulary the family uses at the table.' },
      { h3: 'One full lesson before any decision', p: 'A real task, a level and a named course by the end of the hour, with no card details taken to arrange it and nothing to decide until the family has watched us teach.' },
      { h3: 'Five to ten learners, grouped by level', p: 'A group is built from what its members can do and want next. The gebied, the school, the rota and the country the grandparents left play no part in it.' },
      { h3: 'Eight lessons a month, on the regio Midden calendar', p: 'Two lessons a week at one time agreed once. Zuid-Holland takes its school holidays with regio Midden, and the summer weeks are settled before the slot is.' },
      { h3: 'Three and a half hours, or four and a half', p: 'That is how far a Rotterdam afternoon sits behind the teacher\'s evening in India, more in winter because only the Dutch clock changes. After-school, early-evening and weekend slots suit both ends and the family picks one during the free lesson.' }
    ],
    spec: { title: 'A metro city', p: 'Five metro lines, a river, a bridge and a tunnel connect the fourteen gebieden, and a child in Hoogvliet is forty minutes from a child in Prins Alexander. Neither of them has to travel for a class that arrives over a connection, and the class does not care which side of the Maas the laptop is on.' }
  },

  fees: {
    h2: 'A free opening lesson, then USD 100 or USD 150 a month, and that is all of it',
    intro: 'The tariff in full, ahead of any request for a phone number, because a port city likes its numbers on the table.',
    first: 'A complete lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'The rate is the single international one and it is in US dollars: no euro list, no Rotterdam surcharge, no joining fee. The opening lesson fixes the course and the slot; payment is arranged afterwards over WhatsApp. Pauses, changes of plan and missed lessons are on the pricing page.'
  },

  reviewsH2: 'What families and learners say',

  book: {
    h2: 'Tell us the learner\'s level, and the gebied if you like',
    intro: 'The opening task might be ten toy boxes and a kitchen scale, a Python model of boxes and tonnes with the empties as a labelled variable, or a report from work that says two opposite things in two different units.',
    success: 'Thank you. Your Rotterdam class request has been sent.'
  },

  faq: {
    h2: 'Rotterdam coding class questions',
    intro: 'The city, the port, the schools, the teaching and the terms.',
    items: [
      { q: 'Did the port of Rotterdam grow or shrink in 2025?', a: 'Both, depending on the unit, and that is the project on this page. The Port Authority reported 428.4 million tonnes, 1.7 percent less than 2024, and 14.2 million TEU of containers, 3.1 percent more, with container cargo by weight down 0.2 percent. A TEU counts boxes including empty ones; a tonne weighs what is inside. Deriving the weight per box, down 3.2 percent, is what makes both headlines true.' },
      { q: 'Our child is at RISS, the Wolfert Tweetalig or NAISR. Does the ladder fit?', a: 'Yes. RISS at Bentincklaan 294 runs the IB Diploma Programme and IGCSE, so middle-years pupils take the Cambridge IGCSE Computer Science 0478 course and Diploma students the IB one. The Wolfert Tweetalig next door is bilingual, so Python in English fits its timetable directly. NAISR in Hillegersberg is an IB World School and is placed by programme year.' },
      { q: 'Which Rotterdam schools do you know?', a: 'Melanchthon Schiebroek, the Wolfert Tweetalig, Montessori Lyceum Rotterdam, Emmauscollege, the Erasmiaans Gymnasium, Het Lyceum Rotterdam, the Rotterdam Designcollege, Avicenna College, De Hef and the rest of the largest fifteen, with their streams and 2025-26 intake from the schools register, plus RISS and NAISR. The name fixes the vocabulary; the opening lesson fixes the level.' },
      { q: 'Which of the fourteen gebieden is the class for?', a: 'All of them. This page carries the city picture; the eight largest gebieden get their own pages written close to the ground, and the five outside the ring are covered here by name. The class itself does not care whether the laptop is in Feijenoord or Overschie, and a family that moves across the Maas keeps its slot.' },
      { q: 'Is the teaching in English or Dutch?', a: 'In English, which is the language a third of the city was born into somewhere else and the language the port, the university and both international schools work in. Dutch school vocabulary is kept as the school uses it. We do not offer Dutch-medium teaching.' },
      { q: 'What time are classes for a Rotterdam family?', a: 'The teacher is in India on a clock that never changes, so a Rotterdam afternoon is four and a half hours behind in winter and three and a half in summer. After-school, early-evening and weekend slots work at both ends, and the recurring time is fixed during the free lesson before any payment.' },
      { q: 'What happens in the free Rotterdam lesson?', a: 'We find what the learner can do and set one task there. A child counts and weighs ten toy boxes. A teenager writes the two-unit model and derives the weight per box. An adult brings a report that says two things in two units. The lesson ends with a course, a level, a weekly slot and the price in dollars, and nothing has been paid.' },
      { q: 'Is there a Modern Age Coders classroom in Rotterdam?', a: 'No, and none is claimed in Rotterdam, in Schiedam or anywhere in the Netherlands. Lessons are live online and need a laptop or desktop, working audio, a current browser and a stable connection. The telephone number on this page is Indian and is described as such.', boiler: true },
      { q: 'What do Rotterdam coding classes cost?', a: 'The first lesson is free. Group tuition is USD 100 a month for two live lessons a week, normally eight in the month, in a group of five to ten. Private tuition is USD 150 a month, one learner with one teacher at the same frequency. Course, format, recurring time and availability are confirmed before payment.', boiler: true },
      { q: 'How many learners are in a Rotterdam group?', a: 'Between five and ten, matched on level, pace and goal rather than on age, school or gebied. Private tuition is one learner and one teacher. If no group at the right level is running, the family can take private tuition or wait for the next one to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the Netherlands',
    h2: 'Up the river, along the coast, and up to the country page',
    html: 'Twenty minutes up the A13 is <a class="cg-inline-link" href="/coding-classes-in-the-hague">The Hague</a>, whose page explains the Surinamese-origin figure this one only cites; up the A2 is <a class="cg-inline-link" href="/coding-classes-in-utrecht">Utrecht</a>; and beyond them <a class="cg-inline-link" href="/coding-classes-in-amsterdam">Amsterdam</a>, <a class="cg-inline-link" href="/coding-classes-in-amstelveen">Amstelveen</a>, <a class="cg-inline-link" href="/coding-classes-in-almere">Almere</a> and <a class="cg-inline-link" href="/coding-classes-in-eindhoven">Eindhoven</a>. Every one of them spokes from the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>, and a learner who wants to train models rather than write programs should start at <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a>. <a class="cg-inline-link" href="/coding-classes-in-rotterdam-centrum">Rotterdam Centrum</a> is the first of the eight gebied pages; the other seven follow in this series.',
    waLabel: 'Close with WhatsApp'
  },

  footerHeading: 'The Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' },
    { href: '/coding-classes-in-the-hague', label: 'The Hague' },
    { href: '/coding-classes-in-utrecht', label: 'Utrecht' }
  ],

  personalityCss: `
.cg-root.cg-rtm .cg-hero-grid { grid-template-columns: 1.4fr 0.9fr; gap: clamp(1.25rem, 3vw, 2.5rem); }
.cg-root.cg-rtm .cg-hero h1 { font-weight: 700; letter-spacing: -0.025em; }
.cg-root.cg-rtm .cg-capsule { border-left-width: 12px; padding-left: 1.6rem; }
.cg-root.cg-rtm .cg-eyebrow { font-weight: 800; letter-spacing: 0.22em; }
.cg-root.cg-rtm .cg-section-head h2 { text-transform: none; max-width: 28ch; }
.cg-root.cg-rtm .cg-grid-3 { gap: clamp(1rem, 2vw, 1.5rem); }
.cg-root.cg-rtm .cg-ladder-col { border-top-width: 8px; }
.cg-root.cg-rtm .cg-table th { font-weight: 700; }
.cg-root.cg-rtm .cg-pick-band { letter-spacing: 0.14em; }
.cg-root.cg-rtm .cg-price strong { letter-spacing: -0.02em; }
`,

  dossier: {
    curriculumAuthority: 'Rotterdam, Zuid-Holland: 81 secondary establishments with 37,967 pupils (CBS 1 January 2026); register 2025-26: 82 establishments in the municipality, 26,376 Rotterdam pupils across 142 schools. Named: Rotterdam International Secondary School (Bentincklaan 294, Wolfert van Borselen group, IB DP and IGCSE, about 400 pupils 2021, 82 countries 2017); Wolfert Tweetalig (Bentincklaan 280, bilingual vbo-vwo, 1,062); Nord Anglia International School Rotterdam (Hillegersberg, founded 1959 as the American International School of Rotterdam, Nord Anglia since 2018, IB World School, about 260 pupils, 40+ nationalities); Melanchthon Schiebroek (Van Bijnkershoekweg 97, 1,129); Erasmiaans Gymnasium (Wytemaweg 25, vwo, 858); Montessori Lyceum Rotterdam (981); Emmauscollege (Alexandriestraat 40, 973); De Hef (Slaghekstraat 221, vbo/mavo, 603). Regio Midden holidays. The hub owns the national digital-literacy curriculum; The Hague owns the Surinamese-origin definition argument; this page owns the port and the fourteen gebieden.',
    localProject: 'Two units, one flow, opposite signs. Port of Rotterdam Authority 2025 figures (reported 27 February and 2 March 2026): containers 14.2 million TEU, plus 3.1 percent, while container cargo by weight fell 0.2 percent; total throughput 428.4 million tonnes, minus 1.7 percent. A TEU counts box-lengths including empties; a tonne weighs contents. The learner keeps the two as separate variables, derives 2024 TEU (13.77 million) and the weight-per-box index (96.8, minus 3.2 percent), then adds the unpublished empty share as a labelled assumption (20 to 23 percent: loaded boxes minus 0.8 percent; 20 to 25 percent: minus 3.3 percent). Distinct from the truncation trap (Yanqul: same unit, rounding), from the name-based misfiling of tonnages (Liwa), from the unit-of-analysis trap (Haima: one entity, two boundaries) and from the two-instruments trap (Amsterdam: two measurements of one latent value): the flaw here is reading growth in one unit as growth in the flow. Computed before writing; illustrative rows labelled.',
    requiredMentions: [
      '428.4 million tonnes',
      '14.2 million TEU',
      'Bentincklaan 294',
      'Wolfert Tweetalig',
      'Melanchthon Schiebroek',
      'Erasmiaans Gymnasium',
      'Prins Alexander',
      '14 May 1940',
      'Maastunnel',
      '8 November 1913',
      '52,003',
      'Slaghekstraat 221',
      'Nord Anglia International School Rotterdam',
      '670,760',
      '19 March 2014'
    ],
    sources: [
      { claim: 'Rotterdam 673,804 residents on 1 January 2026 (CBS provisional); 342,340 households averaging 1.93; 99,640 under 15; 90,861 aged 15 to 25; 168 primary establishments (55,423 pupils); 81 secondary (37,967); 22 wijken, 92 buurten; origin 43% Dutch (287,754), 13% Europe (86,833), 44% outside Europe (298,373); born abroad 34% (228,079); Suriname 52,003, Turkey 47,750, Morocco 46,211 (2022).', url: 'https://allecijfers.nl/gemeente/rotterdam/' },
      { claim: 'Wijken (gebieden) on 1 January 2026: Prins Alexander 97,794; Feijenoord 81,512; Delfshaven 76,590; Charlois 70,932; IJsselmonde 63,475; Kralingen-Crooswijk 54,856; Noord 51,962; Hillegersberg-Schiebroek 44,792; Rotterdam Centrum 42,924; Hoogvliet 36,752; Overschie 21,157; Rozenburg 12,619; Hoek van Holland 10,513; Pernis 4,882; Nieuw Mathenesse 2,922; Spaanse Polder 64; Waalhaven-Eemhaven 28; Rotterdam-Noord-West 15; Botlek-Europoort-Maasvlakte 7; Vondelingenplaat 0; Rivium 0.', url: 'https://allecijfers.nl/ranglijst/grootste-en-kleinste-wijken-in-inwoners-in-de-gemeente-rotterdam/' },
      { claim: 'Port of Rotterdam 2025 (article 27 February 2026): 428.4 million tonnes (minus 1.7%); dry bulk minus 6.5%; liquid bulk minus 1.5%; crude 101.2 Mt (plus 3.4%); coal 17.3 Mt (minus 8.7%); iron ore and scrap minus 11.5%; LNG 13.0 Mt (plus 15.1%); containers 14.2 million TEU (plus 3.1%), tonnage minus 0.2%; Asia imports plus 9.3%; North America plus 13.6%; revenue EUR 940.4 million (plus 6.6%); EBITDA EUR 583.6 million (plus 3.6%).', url: 'https://container-news.com/rotterdam-port-throughput-falls-1-7-in-2025/' },
      { claim: 'Port of Rotterdam 2025 (article 2 March 2026): same figures; breakbulk plus 4.6%; agribulk plus 6.3%; TEU rose while tonnes fell because of a 9.3% rise in imports from Asia, lower export volumes, a decline in transhipment, and congestion at container quays that diverted volume to other ports and increased empty-container handling.', url: 'https://swzmaritime.nl/news/2026/03/02/port-of-rotterdam-throughput-declined-in-2025/' },
      { claim: 'Secondary schools 2025-26, Rotterdam-resident pupils: Melanchthon Schiebroek (Van Bijnkershoekweg 97) 1,129; Wolfert Tweetalig (Bentincklaan 280) 1,062; Montessori Lyceum Rotterdam (Schimmelpenninckstraat 17) 981; Emmauscollege (Alexandriestraat 40) 973; Erasmiaans Gymnasium (Wytemaweg 25) 858; Het Lyceum Rotterdam 814; Rotterdam Designcollege 812; Avicenna College 722; Rudolf Steiner College 700; Hugo de Groot 696; Einstein Lyceum 653; Laurens Lyceum 649; Wolfert Dalton 641; De Hef (Slaghekstraat 221) 603; 82 establishments in the municipality; 26,376 Rotterdam pupils across 142 schools.', url: 'https://allecijfers.nl/middelbare-scholen-overzicht/rotterdam/' },
      { claim: 'Rotterdam International Secondary School: junior campus Bentincklaan 294, 3039 KK; IB Diploma Programme and IGCSE; part of the Wolfert van Borselen group; about 400 pupils in September 2021; 82 countries represented in 2017.', url: 'https://en.wikipedia.org/wiki/Rotterdam_International_Secondary_School' },
      { claim: 'Nord Anglia International School Rotterdam: founded 1959 as the American International School of Rotterdam; Hillegersberg; IB World School, ages 3 to 18; about 260 pupils from 40+ nationalities; acquired by Nord Anglia Education in 2018; NEASC and CIS accredited.', url: 'https://en.wikipedia.org/wiki/Nord_Anglia_International_School_Rotterdam' },
      { claim: 'Erasmus University Rotterdam: founded 8 November 1913 as the Nederlandsche Handels-Hoogeschool; renamed 1973; 20,508 undergraduates and 11,104 postgraduates in 2023; 3,207 academic and 3,130 administrative staff; Woudestein campus near Kralingen; Erasmus MC since 2003.', url: 'https://en.wikipedia.org/wiki/Erasmus_University_Rotterdam' },
      { claim: 'Erasmusbrug: opened 6 September 1996 by Queen Beatrix; 802 m; pylon 139 m; EUR 165 million (365 million guilders); designed by Ben van Berkel; nicknamed De Zwaan.', url: 'https://en.wikipedia.org/wiki/Erasmusbrug' },
      { claim: 'Until 19 March 2014 Rotterdam\'s fourteen boroughs had the formal status of submunicipalities (deelgemeenten); they were then replaced by advisory gebiedscommissies. The fourteen: Centrum, Charlois, Delfshaven, Feijenoord, Hillegersberg-Schiebroek, Hoogvliet, Hoek van Holland, IJsselmonde, Kralingen-Crooswijk, Noord, Overschie, Pernis, Prins Alexander, Rozenburg.', url: 'https://en.wikipedia.org/wiki/Boroughs_of_Rotterdam' },
      { claim: 'Bombing of 14 May 1940 lasted about a quarter of an hour; more than 24,000 homes destroyed; about 800 dead; 80,000 homeless. Maastunnel opened 14 February 1942, the first road tunnel in the Netherlands. The port is Europe\'s largest, stretching about 40 km.', url: 'https://nl.wikipedia.org/wiki/Rotterdam' }
    ],
    rejectedClaims: [
      'The published share of empty containers at Rotterdam in 2025. Not in either report; the page treats it as a labelled assumption.',
      'Rotterdam groep 8 advice shares and higher-test-advice rates. No municipal publication was found; the page does not use them.',
      'The Port Authority\'s own press release text. Its pages returned 403; two trade outlets reporting the same Authority figures are cited instead, and the page says so.',
      'A wijk-by-wijk mapping of the largest schools to gebieden beyond the ones stated by address (De Hef in Feijenoord, Emmauscollege in Prins Alexander, Melanchthon and NAISR in Hillegersberg-Schiebroek, Wolfert and Erasmiaans in the centre).',
      'Anything The Hague owns: the two-generation definition argument, the Choenni figures and the Hindustani estimate. Cited by link, not repeated.',
      'Anything the Netherlands hub owns: the nine SLO core objectives, the March 2024 finalisation as a spine, the groep 8 streaming advice as an argument, the CET/CEST offset paragraph.'
    ]
  }
};
