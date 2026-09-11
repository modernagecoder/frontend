'use strict';
// Leidschendam-Voorburg: merged on 1 January 2002, with Forum Hadriani under
// Voorburg and Hofwijck, the Huygens estate, on the Vliet. 78,916 residents.
// Spine (modest, per the Phase 5 method): Christiaan Huygens held the patent
// on the first pendulum clock in 1656. Simulate a pendulum by stepping it
// forward in time with the simplest method and it slowly gains energy that a
// real pendulum never has: every step's small error points the same way.
// The numbers on the page were computed for it and are stated as such.

module.exports = {
  slug: 'coding-classes-in-leidschendam-voorburg',
  code: 'lvb',
  accent: '#9A2A23',
  accentRationale: 'Leidschendam-Voorburg: a brick red for the town of Hofwijck, placed by the solver close to twenty-eight units from every page it links to, the Hague and Leidschenveen-Ypenburg accents among them, with an unlinked city as its nearest neighbour',
  pageType: 'city',
  place: {
    name: 'Leidschendam-Voorburg',
    eyebrow: 'Leidschendam-Voorburg, Zuid-Holland',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Zuid-Holland' },
      { type: 'Country', name: 'Netherlands' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Leidschendam-Voorburg, Netherlands',
  title: 'Coding Classes in Leidschendam-Voorburg | Modern Age Coders',
  description: 'Live online coding, Python, AI and app lessons for Leidschendam-Voorburg, ages 6 to 67, in Voorburg, Leidschendam and Stompwijk. First lesson free.',
  ogDescription: 'Live online coding, Python, AI and mathematics where Huygens lived, on a page about the small errors that pile up inside every simulation.',
  twitterDescription: 'Leidschendam-Voorburg classes for ages 6 to 67, live online, and the first one is free.',
  ogImageCourse: 'python-ai-automation-masterclass-college',
  verifiedOn: '11 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Leidschendam-Voorburg Learners',
    description: 'Ability-placed online coding, Python, AI, app building and mathematics for children, teenagers and adults in Voorburg, Leidschendam and Stompwijk, taught in English.'
  },

  h1: 'Coding classes in Leidschendam-Voorburg, where Huygens lived and a simulated pendulum slowly goes wrong',
  capsuleQ: 'What are the best coding classes in Leidschendam-Voorburg?',
  capsule: 'Leidschendam-Voorburg has 78,916 residents by the national count of 1 January 2026, in a municipality formed in 2002 from Leidschendam and Voorburg and cut through by the Vliet. Under Voorburg lie the remains of Forum Hadriani, to which the emperor Hadrian gave his name in 121, and on its edge stands Hofwijck, the estate of Constantijn Huygens, where his son Christiaan lived. Christiaan Huygens held the patent on the first pendulum clock in 1656. A pendulum is also the classic first physics simulation in code, and the classic warning: step it forward with the simplest method and it gains a little energy every swing, until a 20-degree swing becomes a spin. Live, online, English-language classes are open from age 6 to 67; the first costs nothing, and afterwards a group place is USD 100 a month and one-to-one tuition USD 150.',
  lead: 'A computer cannot solve the motion of a pendulum the way a mathematician would on paper. It steps: it takes the angle and speed now, works out how they will change in the next hundredth of a second, updates them, and repeats. Each step is very nearly right. The trouble is the word nearly. With the simplest stepping rule, the tiny error made at each step always pushes the same way, adding a sliver of energy, and the slivers accumulate. Run such a program on a 1 metre pendulum released at 20 degrees, and after half a minute it is swinging to almost 80 degrees; before a minute is out it is going over the top. A one-line change to the order of the updates keeps it at 20 degrees for as long as anyone cares to watch. Christiaan Huygens, who worked out the theory of pendulum motion and lived at Hofwijck in Voorburg, would have recognised the problem at once: small errors that point the same way are the ones that matter.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Leidschendam-Voorburg.',

  picks: {
    eyebrow: 'Course picks for Leidschendam-Voorburg',
    h2: 'Four courses for the town of Hofwijck and the Vliet',
    intro: 'A child in Stompwijk who wants to make a ball bounce on screen, a teenager in Voorburg writing a first physics game, a student in Leidschendam modelling something that changes over time, and an adult whose spreadsheets project a figure forward month by month. The first lesson is free for each of them.',
    items: [
      { course: 'game-development-masterclass-for-kids', band: 'Ages 8 to 12', note: 'Moving objects in games, where a child sees a bouncing ball bounce a little higher each time and learns to find out why.' },
      { course: 'maths-through-coding', band: 'Ages 11 to 14', note: 'Mathematics made concrete in code, including step-by-step models of motion and growth and the errors they carry.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'Python simulations built with a check that the quantity which should stay constant actually does.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Forecasts rolled forward period by period, tested for the small repeated error that grows into a large one.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Leidschendam-Voorburg today',
      h2: 'Two towns merged in 2002, a Roman forum, and a canal down the middle',
      intro: 'The present municipality was created on 1 January 2002 by merging Leidschendam and Voorburg, and at the same time almost the whole of the Tedingerbroekpolder was annexed by The Hague. The Rijn-Schiekanaal, better known as the Vliet, cuts through the municipality from south-west to north-east. The statistics office counts two woonplaatsen, 13 wijken and 43 buurten, on 3,261 hectares of land within 3,562, a published density of 2,402 residents to the square kilometre.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Forum Hadriani', p: 'Under Voorburg the Romans founded a civil town. As the name Forum Hadriani shows, forum meaning market place, it was a place of trade, and the emperor Hadrian attached his name to it in 121 on his journey through the region. Around 161 it took another name, Municipium Aelium Cananefatium, the capital of the Cananefates.' },
          { h3: 'Hofwijck', p: 'Hofwijck, an estate dating from 1642 in Voorburg, was designed by Constantijn Huygens with Jacob van Campen. Constantijn and his son Christiaan lived there in the seventeenth century; in 1692 Christiaan described experiencing the earthquake of Verviers at Hofwijck. Since 1914 it has been a museum, and it now holds an exhibition on the Huygens family.' },
          { h3: 'Voorburg and its church', p: 'The Oude Kerk, also called the Sint-Martinuskerk, is a Gothic church from around 1200. Voorburg itself had 43,090 residents on 1 January 2023, according to its encyclopaedia entry, which also names the neighbourhood of Essesteijn.' }
        ] },
        { kind: 'spec', title: 'Christiaan Huygens and the pendulum clock', p: 'In 1656 Christiaan Huygens held a patent on the first pendulum clock, which was built by Salomon Coster in The Hague. Astronomy, and finding position at sea, required accurate measurement of time, which led Huygens to the problem, and in his Horologium Oscillatorium of 1673 he set out the theory of the motion of a pendulum. He died in The Hague on 8 July 1695.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'A simulation that drifts',
      h2: 'A 20-degree swing, stepped forward two ways',
      intro: 'The figures in this table were computed for this page, with a standard program, for an ideal 1 metre pendulum released at 20 degrees under gravity of 9.81 metres per second squared. They describe the program, not any clock or any real pendulum.',
      body: [
        { kind: 'table', caption: 'Largest swing in the seconds before each mark, by stepping rule and step size', head: ['Stepping rule and step', 'After 10 seconds', 'After 30 seconds', 'After 60 seconds'], rows: [
          ['Explicit Euler, 0.01 s steps', '31.1 degrees', '78.8 degrees', 'spinning over the top; energy about 41 times the start'],
          ['Explicit Euler, 0.001 s steps', '20.9 degrees', '23.1 degrees', '26.7 degrees; energy about 1.8 times the start'],
          ['Semi-implicit Euler, 0.01 s steps', '20.0 degrees', '20.0 degrees', '20.0 degrees; energy within about 1 percent'],
          ['Semi-implicit Euler, 0.001 s steps', '20.0 degrees', '20.0 degrees', '20.0 degrees; energy within about 0.1 percent']
        ] },
        { kind: 'p', text: 'The two rules differ by a single choice: whether the new angle is computed from the old speed or from the speed just updated. Explicit Euler, the rule most people write first, uses the old speed, and for a swinging system that makes every step add a little energy. Making the steps ten times smaller slows the drift a great deal and does not stop it; after a minute the swing has still grown from 20 to almost 27 degrees. Semi-implicit Euler uses the updated speed, and its errors wobble around the true answer instead of piling up, so the swing stays at 20 degrees however long the program runs. Neither rule is exact. The difference is that one makes errors which cancel and the other makes errors which add, and over thousands of steps that difference is everything.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'The municipality in the national statistics',
      intro: 'Figures for Leidschendam-Voorburg as the national statistics publish them, with the year of each; the history from the encyclopaedia; and the calculations made here, listed at the end.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'A population that dipped and rose', p: 'On the present boundaries the count was 74,058 in 1995, 72,588 in 2013 and 78,916 in 2026, with 78,318 in 2025. The page makes no claim about why the count fell and then rose. Women outnumbered men in 2025, 40,626 to 37,692.' },
          { h3: 'Ages in 2026', p: '12,233 were under fifteen, 7,997 between fifteen and twenty-five, 19,528 between twenty-five and forty-five, 20,505 between forty-five and sixty-five, and 18,653, almost a quarter, sixty-five or older.' },
          { h3: 'Households', p: 'In 2025, 37,719 households averaged 2.05 people; 15,804 consisted of one person and 11,820 included children.' },
          { h3: 'Homes and income', p: '37,861 dwellings in 2025, of which 22,338 owner-occupied and 15,523 rented, with an estimated average value of 443,000 euro. Income averaged 40,400 euro per resident and 49,800 per income recipient in 2024; 3.3 percent of residents were in poverty.' },
          { h3: 'Schools and origin', p: '21 primary establishments taught 5,858 pupils, some 279 each, and 7 secondary establishments 4,811, some 687 each, with 697 MBO students at institutions in the municipality. In 2025, 60,361 residents had been born in the Netherlands; by origin 48,362 were Dutch, 8,794 European and 21,162 from outside Europe.' },
          { h3: 'What was worked out here', p: '78,916 less 72,588 is 6,328, and 78,916 less 74,058 is 4,858. 5,858 pupils over 21 establishments is about 279, and 4,811 over 7 about 687. The origin groups, age groups and tenure groups were each summed to check nothing is missing. The pendulum table was computed separately and is described above.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no link of any kind with the municipality, Hofwijck, the Huygens family\'s heirs or any school in Leidschendam-Voorburg, and the page suggests none. The statistics are those published for the municipality in the years given, with earlier years recalculated to the present boundaries. The merger, the Tedingerbroekpolder and the Vliet come from the encyclopaedia entry for the municipality; Forum Hadriani, the Oude Kerk and Voorburg\'s population from the entry for Voorburg; the estate from the entry for Hofwijck; and the pendulum clock from the entry for Christiaan Huygens. The municipal entry gives 78,915 residents for 1 January 2026, which is not combined with the statistics used here.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Watch the quantity that should never change',
      intro: 'Every simulation that steps forward in time makes a small error at each step. The question is not whether there is error but which way it points, and there is almost always a simple way to find out.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Find the conserved quantity', p: 'Most physical systems keep something constant: energy for a frictionless pendulum, total money in a closed ledger, the number of people in a population model with no births or deaths. Write down what should stay fixed.' },
          { h3: '2. Log it every step', p: 'Compute that quantity at every step and plot it. In a correct simulation it wobbles slightly around a flat line. If it climbs or falls steadily, the errors are adding up in one direction.' },
          { h3: '3. Change the method, not just the step', p: 'Smaller steps delay a drift and cost time. A better method, such as updating the speed before the position, can remove the drift altogether. Test both, and keep the one whose conserved quantity stays flat.' }
        ] },
        { kind: 'table', caption: 'Small errors that point the same way', head: ['Where it happens', 'The step', 'What drifts', 'How it shows'], rows: [
          ['A game with physics', 'one frame of movement', 'energy', 'a ball that bounces higher each time, or a character flung off the map'],
          ['A robot or car simulator', 'one simulated tick', 'position and speed', 'a trained controller that works in simulation and fails on the real machine'],
          ['A running total in money', 'each rounded transaction', 'the balance', 'cents that appear or vanish over thousands of operations'],
          ['A forecast rolled forward', 'each month built on the last', 'the trend', 'a small bias that becomes a large gap after a few years'],
          ['The pendulum on this page', 'one hundredth of a second', 'energy, with explicit Euler', 'a 20-degree swing that becomes a spin within a minute']
        ] },
        { kind: 'callout', h3: 'Why AI trained in simulation needs this lesson', p: 'Robots, self-driving systems and many game-playing AIs are trained largely inside simulators, because a simulator can run millions of trials safely and cheaply. Every one of those simulators steps its world forward in small increments, and each increment carries a small numerical error. If those errors point the same way, the simulated world slowly behaves unlike the real one: objects keep a little energy they should lose, contacts are slightly too springy, a vehicle travels a fraction further than it would. An AI that learns to exploit such quirks can perform brilliantly in simulation and badly in reality, which engineers call the gap between simulation and the real world. The first defence is exactly the one on this page. Decide what should stay constant or match reality, measure it at every step, and choose methods whose errors cancel rather than accumulate. A pendulum is the smallest possible example, and the one Huygens, who worked on its theory in the house on the Vliet, would have understood best.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five checks for any program that steps through time',
      intro: 'For games, physics, population and money models, forecasts and AI training environments. Built around a pendulum, in the town where the theory of pendulum motion was lived with.',
      body: [
        { kind: 'table', caption: 'Keeping step-by-step programs honest', head: ['Check', 'How', 'The failure it catches', 'What you gain'], rows: [
          ['A conserved quantity', 'Pick something that should not change and compute it each step', 'Errors accumulating silently', 'An alarm that rings early'],
          ['Two step sizes', 'Run with a step and with a step ten times smaller, and compare', 'Results that depend on the step', 'A measure of numerical error'],
          ['A better method', 'Try an update order or integrator suited to the system', 'Drift that smaller steps only delay', 'Stable long runs'],
          ['A known answer', 'Test against a case with an exact solution, such as a very small swing', 'Code that is wrong everywhere', 'Confidence in the basics'],
          ['A long run', 'Run far longer than you need and look at the end', 'Problems that appear only after many steps', 'Behaviour you can trust over time']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A bouncing ball in a game that should bounce to the same height every time. The child notices it creeping higher, counts the bounces, and swaps two lines of code to fix it.' },
          { h3: 'For teenagers', p: 'A pendulum simulated in Python with both Euler rules, energy plotted over a minute. The teenager reproduces the drift, then explains in one paragraph why one line in a different order stops it.' },
          { h3: 'For adults', p: 'A spreadsheet forecast rolled forward month by month, checked by running it with a small deliberate error and watching how far it travels. Adults often find the model amplifies errors they had assumed were harmless.' }
        ] },
        { kind: 'p', text: 'This section uses the encyclopaedia\'s account of Christiaan Huygens and Hofwijck as the setting, and a pendulum simulation computed for this page with standard methods. It says nothing about any real clock, and nothing about how Huygens himself calculated.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a ball that bounces too high to a simulation that stays true',
    intro: 'Placement comes from watching the learner work in the free lesson on a real task. It does not come from age on its own, nor from whether home is Voorburg or Stompwijk.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'The creeping bounce', p: 'Children spot a game ball bouncing higher each time and fix it.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Step by step', p: 'Learners move an object through time in small steps and count the error.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Two Euler rules', p: 'Teenagers simulate a pendulum both ways and plot the energy.', courses: ['complete-app-development-masterclass-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Rolled-forward models', p: 'Adults test a forecast for errors that grow as it steps ahead.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI can write a physics simulation in seconds. Why should a teenager in Voorburg check that its pendulum does not speed up?',
    intro: 'Because the simplest correct-looking code drifts, and the drift only shows if someone looks for it.',
    p1: 'Ask an AI assistant for a pendulum, a bouncing ball or an orbit and it will usually produce clean, readable code using the most familiar stepping rule, the one every textbook shows first. It runs, it animates, and for the first few seconds it looks right. Whether it stays right over a thousand swings depends on a choice the assistant may never mention, and a quick demo will not reveal it. The same pattern appears in larger systems, where AI-written simulations feed games, training environments and forecasts that run for a very long time.',
    p2: 'A learner who has watched a simulated pendulum climb from 20 degrees to a full spin, and then fixed it by swapping the order of two lines, knows to ask what a simulation should conserve and to measure it. That habit decides whether a program can be trusted over long runs, and no amount of fluent code replaces it. The model can write the loop. Checking that the loop keeps faith with reality is a human responsibility.',
    closer: 'So the case for a child in Leidschendam-Voorburg learning to code in 2026 is not Hofwijck or its famous residents. It is that someone who watches the quantity that should never change will be needed wherever AI builds simulated worlds and trains machines inside them.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Classes on both banks of the Vliet',
    intro: 'The municipality stretches along the Vliet from the Hague border to the polders of Stompwijk, and a learner anywhere along it joins the same class from home.',
    cells: [
      { h3: 'No crossing required', p: 'A pupil on one side of the Vliet and a pupil on the other open the same lesson at the same moment. Nobody needs a lift over a bridge on a school night.' },
      { h3: 'School words as they are', p: 'The brugklas, vmbo, havo, vwo, groep and profielkeuze of a Zuid-Holland school keep their Dutch names; everything around them is explained in English.' },
      { h3: 'A free lesson, properly taught', p: 'The first session is a full lesson on a real problem. The teacher observes how the learner works and afterwards recommends a level, a course and a weekly time, taking no payment details.' },
      { h3: 'Five to ten at one stage', p: 'Groups are built from learners at the same point. The municipality has 12,233 residents under fifteen, but a matching five, free at the same hour, is uncommon, so groups can draw on learners in other countries.' },
      { h3: 'Regio Midden breaks', p: 'Classes meet twice weekly, about eight times a month, in the same slot, and pause during the regio Midden holidays that Zuid-Holland schools follow.' },
      { h3: 'Teachers in India', p: 'With the teaching team three and a half hours ahead of Dutch summer time and four and a half ahead in winter, afternoon, evening and weekend-morning classes all fit.' }
    ],
    spec: { title: 'Twenty-eight schools, and a group that forms online', p: 'Leidschendam-Voorburg has 21 primary establishments teaching 5,858 pupils and 7 secondary establishments teaching 4,811. A coding group needs five learners who agree on subject, stage and hour at once, and they are far easier to gather across every age from 6 to 67 and many countries than within one municipality.' }
  },

  fees: {
    h2: 'Fees for Leidschendam-Voorburg families',
    intro: 'The complete price list is these three lines.',
    first: 'A real lesson built round a real task, with a level and a course at the end.',
    group: 'Per month, normally eight classes, in a group of five to ten learners at one level.',
    private: 'Per month, normally eight classes, with one teacher for one learner.',
    closer: 'The dollar price is the same in every country, with no euro table beside it, so a family in Stompwijk pays exactly what a family in Voorburg pays. Nothing is due until the free lesson has settled the course and the time, and payment is arranged over WhatsApp after that. The pricing page explains pauses, a change of format and missed classes.'
  },

  reviewsH2: 'Six Google reviews in their authors\' own words',

  book: {
    h2: 'Tell us where the learner is starting',
    intro: 'The first task might be a ball that bounces a little too high, an object moved through time in small steps, or a pendulum simulated two ways with its energy on a chart.',
    success: 'Thank you. Your Leidschendam-Voorburg class request has been sent.'
  },

  faq: {
    h2: 'Leidschendam-Voorburg coding class questions',
    intro: 'The merger, the Romans, Hofwijck, the figures, and the lessons.',
    items: [
      { q: 'When was Leidschendam-Voorburg formed?', a: 'On 1 January 2002, by merging Leidschendam and Voorburg. At the same time almost the whole of the Tedingerbroekpolder was annexed by The Hague. The statistics office counts two woonplaatsen, 13 wijken and 43 buurten.' },
      { q: 'How many people live in Leidschendam-Voorburg?', a: 'The national count was 78,916 on 1 January 2026, in 37,719 households in 2025. On the present boundaries the count was 74,058 in 1995 and 72,588 in 2013.' },
      { q: 'What was Forum Hadriani?', a: 'A Roman civil town under present-day Voorburg, a place of trade to which the emperor Hadrian attached his name in 121, according to the encyclopaedia. Around 161 it was renamed Municipium Aelium Cananefatium, the capital of the Cananefates.' },
      { q: 'What is Hofwijck?', a: 'An estate in Voorburg dating from 1642, designed by Constantijn Huygens with Jacob van Campen. Constantijn and his son Christiaan lived there in the seventeenth century, and since 1914 it has been a museum; it now houses an exhibition on the Huygens family.' },
      { q: 'What did Christiaan Huygens have to do with clocks?', a: 'In 1656 he held a patent on the first pendulum clock, built by Salomon Coster in The Hague, and in 1673 he published the theory of pendulum motion in his Horologium Oscillatorium, according to the encyclopaedia.' },
      { q: 'How many schools are there in Leidschendam-Voorburg?', a: 'The statistics list 21 primary establishments with 5,858 pupils and 7 secondary establishments with 4,811, plus 697 MBO students at institutions in the municipality. No school is rated on this page.' },
      { q: 'What language are the classes in, and when can they be taken?', a: 'Classes are taught in English, and Dutch school terms such as brugklas, havo and vwo are kept in Dutch. Because the teachers work three and a half hours ahead of the Netherlands in summer and four and a half in winter, afternoon, evening and weekend slots are all possible. The slot is agreed in the free lesson, and the regio Midden holidays are kept.' },
      { q: 'Is there a Modern Age Coders classroom in Leidschendam-Voorburg?', a: 'No, and none is claimed here or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Leidschendam-Voorburg coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or address. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Haaglanden and beyond',
    h2: 'Into The Hague, along the Vliet, and out to the province',
    html: 'The capital next door has its own page at <a class="cg-inline-link" href="/coding-classes-in-the-hague">coding classes in The Hague</a>, with district pages including <a class="cg-inline-link" href="/coding-classes-in-leidschenveen-ypenburg">Leidschenveen-Ypenburg</a>. Along the Vliet lie <a class="cg-inline-link" href="/coding-classes-in-leiden">Leiden</a> to the north-east and <a class="cg-inline-link" href="/coding-classes-in-delft">Delft</a> to the south, and the whole province is on <a class="cg-inline-link" href="/coding-classes-in-zuid-holland">Zuid-Holland</a>. A learner heading straight for machine learning can go to the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>, and the full series is on the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>.',
    waLabel: 'Send us a WhatsApp'
  },

  footerHeading: 'Leidschendam-Voorburg, Zuid-Holland and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-the-hague', label: 'The Hague' },
    { href: '/coding-classes-in-zuid-holland', label: 'Zuid-Holland' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-lvb .cg-hero-grid { grid-template-columns: 1.04fr 0.96fr; align-items: start; gap: clamp(1.1rem, 2.8vw, 2.3rem); }
.cg-root.cg-lvb .cg-hero h1 { font-weight: 640; letter-spacing: -0.016em; line-height: 1.08; }
.cg-root.cg-lvb .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-lvb .cg-eyebrow { letter-spacing: 0.18em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-lvb .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.017em; }
.cg-root.cg-lvb .cg-grid-3 { gap: clamp(1rem, 2.2vw, 1.75rem); }
.cg-root.cg-lvb .cg-card { border-radius: 5px; border-bottom: 3px solid var(--cg-accent-soft); }
.cg-root.cg-lvb .cg-table caption { letter-spacing: 0.04em; font-weight: 700; }
.cg-root.cg-lvb .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-lvb .cg-table td:nth-child(4) { font-weight: 700; }
.cg-root.cg-lvb .cg-ladder-col { border-top: 2px solid var(--cg-accent-soft); padding-top: 1.05rem; }
`,

  dossier: {
    curriculumAuthority: 'Gemeente Leidschendam-Voorburg, Zuid-Holland: 78,916 residents (statistics, 1 January 2026), 78,318 (2025), 72,588 (2013), 74,058 (1995), recalculated to present boundaries after the 2002 merger; 37,692 men and 40,626 women (2025); 37,719 households (2025) averaging 2.05, 15,804 one-person, 11,820 with children; ages (2026) 12,233 under fifteen, 7,997 fifteen to twenty-five, 19,528 twenty-five to forty-five, 20,505 forty-five to sixty-five, 18,653 sixty-five or over; 3,562 hectares, 3,261 land, 301 water, published density 2,402; 37,861 dwellings (2025), 22,338 owner-occupied at 59 percent, 15,523 rented at 41 percent; estimated average value 443,000 euro; income 40,400 euro per resident and 49,800 per recipient (2024); 3.3 percent in poverty; 60,361 born in the Netherlands, origin 48,362 Dutch, 8,794 European, 21,162 non-European (2025); 2 woonplaatsen, 13 wijken, 43 buurten; 21 primary establishments with 5,858 pupils, 7 secondary with 4,811, 697 MBO students at institutions. Encyclopaedia (municipality): formed 1 January 2002 by merger of Leidschendam and Voorburg, simultaneously almost the whole Tedingerbroekpolder annexed by Den Haag; cut from south-west to north-east by the Rijn-Schiekanaal, better known as the Vliet; infobox 78,915 on 1 January 2026 and 35.60 square kilometres. Encyclopaedia (Voorburg): the Romans founded a civil town, Forum Hadriani, a trading place to which Hadrian attached his name in 121; around 161 renamed Municipium Aelium Cananefatium, capital of the Cananefates; Constantijn Huygens had Hofwijck built, now a museum; on the Vliet; the Oude or Sint-Martinuskerk, Gothic, about 1200; 43,090 residents on 1 January 2023; the neighbourhood Essesteijn. Encyclopaedia (Hofwijck): an estate from 1642 in Voorburg, designed by Huygens and Jacob van Campen; Constantijn and Christiaan Huygens lived there; in 1692 Christiaan described experiencing the Verviers earthquake there; museum of the Vereniging Hofwijck since 1914; today an exhibition on the Huygens family. Encyclopaedia (Christiaan Huygens): patent on the first pendulum clock in 1656, built by Salomon Coster in The Hague; Horologium Oscillatorium (1673) set out the theory of pendulum motion; astronomy and position-finding at sea needed accurate time; died in The Hague on 8 July 1695. Regio Midden holidays. The city page teaches accumulating numerical error in step-by-step simulation, with a pendulum computed for the page.',
    localProject: 'Small errors that point the same way are the ones that matter. Christiaan Huygens held the patent on the first pendulum clock in 1656 and set out the theory of pendulum motion in 1673, and he lived at Hofwijck in Voorburg. A pendulum simulated for this page (ideal, 1 metre, released at 20 degrees, g 9.81) with explicit Euler at 0.01 second steps swings to 31.1 degrees after 10 seconds and 78.8 after 30, and is spinning over the top within a minute with energy about 41 times the start; at 0.001 second steps it still grows to 26.7 degrees by 60 seconds; semi-implicit Euler, one reordered line, holds 20.0 degrees at either step with energy within about 1 and 0.1 percent. Explicit Euler makes errors that add; semi-implicit Euler makes errors that cancel. The programming form covers game physics, robot and vehicle simulators where accumulated error opens a gap between simulation and reality for AI trained inside them, rounded money totals and forecasts rolled forward period by period. The defences are logging a conserved quantity every step, comparing two step sizes, choosing a method suited to the system, testing against a case with a known answer, and running far longer than needed. A numerical-methods point rather than a statistical fallacy. Chosen after a case-sensitive check found no page using Euler, pendulum, integration or time step; clock skew was considered and rejected because Leidschenveen-Ypenburg, next door, is built around the clock on a number. Distinct from compounding uncertainty in a chain of ratios (Eindhoven), which concerns estimates multiplied together rather than repeated steps, and from precision of results (Leeuwarden).',
    requiredMentions: [
      '74,058',
      '72,588',
      '37,719',
      '15,804',
      '11,820',
      '37,861',
      '22,338',
      '15,523',
      '5,858',
      '4,811',
      '18,653',
      'Hofwijck',
      'Tedingerbroekpolder',
      'Salomon Coster'
    ],
    sources: [
      { claim: 'Gemeente Leidschendam-Voorburg: 78,916 inwoners (2026), 78,318 (2025), 72,588 (2013), 74,058 (1995), historical data recalculated to current boundaries (merged from Leidschendam and Voorburg in 2002); mannen 37,692, vrouwen 40,626 (2025); 37,719 huishoudens, 15,804 eenpersoons, 11,820 met kinderen, gemiddeld 2.05 (2025); ages 0-15 12,233, 15-25 7,997, 25-45 19,528, 45-65 20,505, 65+ 18,653 (2026); 3,562 hectare, land 3,261, water 301; bevolkingsdichtheid 2,402; woningvoorraad 37,861, koopwoningen 22,338 (59 percent), huurwoningen 15,523 (41 percent) (2025); gemiddelde WOZ 443,000 euro; gemiddeld inkomen per inwoner 40,400 and per inkomensontvanger 49,800 euro (2024); personen in armoede 3.3 percent; basisonderwijs 21 vestigingen 5,858 leerlingen, voortgezet onderwijs 7 vestigingen 4,811 leerlingen, MBO 697 (2025); geboren in Nederland 60,361, herkomst Nederland 48,362, Europa 8,794, buiten Europa 21,162 (2025); 2 woonplaatsen, 13 wijken, 43 buurten.', url: 'https://allecijfers.nl/gemeente/leidschendam-voorburg/' },
      { claim: 'Leidschendam-Voorburg (encyclopaedia): De huidige gemeente ontstond op 1 januari 2002 uit een fusie van Leidschendam en Voorburg. Gelijktijdig met deze fusie werd vrijwel de gehele Tedingerbroekpolder geannexeerd door de gemeente Den Haag. De gemeente wordt van zuidwest naar noordoost doorsneden door het Rijn-Schiekanaal, veelal beter bekend als de Vliet. Infobox: 78.915 inwoners (1 januari 2026), 35,60 km2.', url: 'https://nl.wikipedia.org/wiki/Leidschendam-Voorburg' },
      { claim: 'Voorburg (encyclopaedia): Daar werd door de Romeinen een burgerlijke stad gesticht. Zoals uit de benaming Forum Hadriani blijkt (forum = markt(plaats)) was dit een handelsplaats, waaraan keizer Hadrianus in 121 na Chr. op zijn tocht door dit gebied zijn naam verbond. Omstreeks het jaar 161 heeft de stad een andere naam gekregen: Municipium Aelium Cananefatium, de hoofdstad van het Cananefaatse gebied. Constantijn Huygens liet hier zijn lusthof Hofwijck bouwen; tegenwoordig is het een museum. Voorburg is gelegen aan het Rijn-Schiekanaal (ook Vliet genoemd). Oude- of St.-Martinuskerk, gotische kerk uit circa 1200. De stad telde op 1 januari 2023 43.090 inwoners. Neighbourhood Essesteijn.', url: 'https://nl.wikipedia.org/wiki/Voorburg_(Zuid-Holland)' },
      { claim: 'Hofwijck (encyclopaedia): Hofwijck is een buitenplaats uit 1642 gelegen in de Nederlandse plaats Voorburg. Het huis en de bijbehorende tuin zijn door Huygens en Jacob van Campen ontworpen. Hier woonden in de 17e eeuw Constantijn Huygens en zijn zoon Christiaan Huygens; in 1692 beschreef zijn zoon Christiaan Huygens hoe hij op Hofwijck de aardbeving bij Verviers ervoer. In 1914 kwam het buiten in bezit van de Vereniging Hofwijk, die er een museum vestigde. Tegenwoordig kan men een tentoonstelling bezoeken, gewijd aan de geschiedenis van de familie Huygens.', url: 'https://nl.wikipedia.org/wiki/Hofwijck' },
      { claim: 'Christiaan Huygens (encyclopaedia): in 1656 had hij een patent op het eerste slingeruurwerk, gebouwd door Salomon Coster te Den Haag. In het werk Horologium Oscillatorium sive de motu pendulorum (1673) formuleerde hij de theorie voor de beweging van een pendule. Astronomie, en ook de plaatsbepaling op zee, vereiste nauwkeurige tijdmetingen, waardoor Huygens zich op dit probleem ging toeleggen. Christiaan Huygens overleed in Den Haag op 8 juli 1695.', url: 'https://nl.wikipedia.org/wiki/Christiaan_Huygens' },
      { claim: 'School holiday regions: regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'The Voorburg entry dates Hofwijck to 1640 and the Hofwijck entry to 1642. Only the estate\'s own entry is used, and the two are not set against each other, which is the Breda argument.',
      'Any oldest-city claim for Voorburg. Nijmegen owns the four claimants and their tests.',
      'Any cause for the fall in the count between 1995 and 2013 or the rise after. Not in the sources read, and boundary effects are the Alkmaar argument.',
      'Any claim about how accurate the Huygens clock was. The entry read does not give a figure.',
      'Any statement about how Huygens calculated. The pendulum table is a modern computation with standard methods and says nothing about his methods.',
      'Higher-education student counts. Not published as figures in the row read.',
      'Clock skew between computers, considered as the spine and rejected as too close to Leidschenveen-Ypenburg, which is built around the clock on a number.',
      'Anything The Hague, Leidschenveen-Ypenburg, Leiden, Delft and Zuid-Holland pages own, including their figures and arguments.'
    ]
  }
};
