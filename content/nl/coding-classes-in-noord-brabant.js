'use strict';
// Noord-Brabant: the province page. Fifty-six municipalities, the most of any
// province, a capital that is only the fourth city, and one village on the
// Belgian border that is the best worked example of point-in-polygon in
// Europe. Spine: inside is a count of rings, not a look at the outer line.

module.exports = {
  slug: 'coding-classes-in-noord-brabant',
  code: 'nbr',
  accent: '#6A2203',
  accentRationale: 'Noord-Brabant: a burnt sienna the solver placed well away from Eindhoven\'s rust and Amstelveen\'s orange',
  pageType: 'governorate',
  place: {
    name: 'Noord-Brabant',
    eyebrow: 'Province of Noord-Brabant',
    schemaType: 'AdministrativeArea',
    chain: [{ type: 'Country', name: 'Netherlands' }]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Noord-Brabant, Netherlands',
  title: 'Coding Classes in Noord-Brabant | Modern Age Coders',
  description: 'Live online coding, Python and AI classes across Noord-Brabant, ages 6 to 67: Eindhoven, Tilburg, Breda, Den Bosch, Helmond, Roosendaal and all 56 municipalities.',
  ogDescription: 'Live online coding, Python, AI and mathematics for families in all 56 municipalities of Noord-Brabant, from Eindhoven to Baarle-Nassau, built on the border with holes in it.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'java-programming-masterclass-for-teens',
  verifiedOn: '7 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Noord-Brabant Learners',
    description: 'Ability-placed online coding, Python, Java, AI and mathematics for children, teenagers and adults across the 56 municipalities of the province of Noord-Brabant, taught in English.'
  },

  h1: 'Coding classes in Noord-Brabant, where a garden in Baarle can be Dutch, inside Belgium, inside the Netherlands',
  capsuleQ: 'What are the best coding classes in Noord-Brabant?',
  capsule: 'Coding classes in Noord-Brabant reach 2,676,954 people in 56 municipalities (Statistics Netherlands, 1 January 2026): more municipalities than any other province, the third largest population and the second largest area. Its capital, \'s-Hertogenbosch, is only its fourth city, and its smallest municipality, Baarle-Nassau, holds 22 pieces of Belgium, two of which hold pieces of the Netherlands again. From Eindhoven to Baarle the class Modern Age Coders runs is one class: live, online, in English, for ages 6 to 67, with nothing owed for the first lesson and afterwards USD 100 a month in a group of five to ten or USD 150 with a teacher to yourself.',
  lead: 'Ask which country a garden in Baarle is in and the honest answer is: count the borders around it. On the open ground of Baarle-Nassau it is Dutch. Inside one of the 22 Belgian enclaves it is Belgian. Inside one of the Dutch enclaves that sit inside those Belgian enclaves it is Dutch again. Neither the outermost line nor the innermost one decides; the number of lines does. A child who has written the program that counts them has learned the rule every map with holes in it obeys.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Noord-Brabant.',

  picks: {
    eyebrow: 'Course picks for Noord-Brabant',
    h2: 'Four courses for the province with fifty-six town halls',
    intro: 'A groep 6 child in Oss who wants a website that is actually hers, a Tilburg teenager who has been told Java is what the serious people use, a Breda student who wants the whole stack, and a parent in Helmond whose company has just told everyone to use coding agents: four doors into one province.',
    items: [
      { course: 'kids-ai-web-development-course', band: 'Ages 8 to 12', note: 'Real HTML, CSS and a little JavaScript, with AI as a helper rather than a crutch, for the groep 5 to 8 child who wants a page with her own name on it.' },
      { course: 'java-programming-masterclass-for-teens', band: 'Ages 13 to 18', note: 'Java from the first class to objects, collections and a finished project, for the teenager in Tilburg or Den Bosch whose school offers informatica in theory and not on the timetable.' },
      { course: 'full-stack-web-development-masterclass-college', band: 'College and adult', note: 'React, Node and deployment to a live address, for the Breda or Eindhoven student who wants to ship something before the degree ends.' },
      { course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', band: 'Professionals', note: 'Coding agents used properly, with a review habit built in, for the working parent whose employer in the Brainport supply chain has switched them on and not explained them.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Noord-Brabant today',
      h2: 'Fifty-six municipalities, a fourth-place capital and a border with twenty-two holes',
      intro: 'On 1 January 2026 Statistics Netherlands counted 2,676,954 residents in 1,227,495 households, 384,718 of them under fifteen and 313,390 aged fifteen to twenty-five, on 4,901.56 square kilometres of land: 544 people to each. Thirty-one years earlier, in 1995, the count was 2,276,207; the province has added 400,747 people since, an eighteen percent rise.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The capital is the fourth city', p: 'Eindhoven leads with 249,783 people, Tilburg follows with 230,746 and Breda with 190,204; \'s-Hertogenbosch, the capital, is fourth at 162,295, or 6.1 percent of the province. Eindhoven itself holds 9.3 percent. No Brabant city reaches a tenth, which is why the province has four centres and not one.' },
          { h3: 'The schools', p: '921 primary establishments teach 211,249 pupils and 186 secondary establishments 134,310, the largest secondary count of any province in this series. The under-fifteens are 14.4 percent of the population, in line with the country, and the fifteen-to-twenty-fives 11.7 percent.' },
          { h3: 'The most of anything', p: 'Fifty-six municipalities, more than any other province; the second largest area after Gelderland; the third largest population after Zuid-Holland and Noord-Holland. The province in its present form dates from 1815, and its old regions still carry the names: De Kempen, De Peel, the Meierij, the Langstraat, the Baronie and the Markiezaat.' }
        ] },
        { kind: 'spec', title: 'One border, twenty-two holes, and holes in the holes', p: 'Baarle-Nassau, the smallest municipality at 7,256 people, contains 22 separate pieces of the Belgian municipality of Baarle-Hertog, and eight pieces of Baarle-Nassau lie inside Belgian ground in turn, seven of them inside two of those Belgian enclaves and one, near Ginhoven, inside Belgium itself. The arrangement descends from medieval land deals between the lords of Breda and the dukes of Brabant, was fixed by the Treaty of Maastricht in 1843 and finally delimited in 1995, and it is the reason this page has an algorithm in it.' }
      ]
    },
    {
      id: 'spread', tint: 'tint', eyebrow: 'The spread',
      h2: 'From Eindhoven to Baarle-Nassau: all 56 municipalities, by population',
      intro: 'Nine parts, grouped by this page and not by any office, each with its municipalities and the register count on 1 January 2026, down to Baarle-Nassau at 7,256.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Brainport', p: 'Eindhoven 249,783, the largest and already a page in this series; Helmond 96,860, a page to come; Veldhoven 47,918; Geldrop-Mierlo 40,683; Best 31,699; Nuenen, Gerwen en Nederwetten 24,473; Son en Breugel 18,140; Waalre 17,864. The chip-and-machine economy and its dormitories.' },
          { h3: 'De Peel and the south-east', p: 'Deurne 33,596; Valkenswaard 31,920; Gemert-Bakel 31,806; Laarbeek 23,541; Cranendonck 21,101; Someren 20,471; Asten 17,484; Heeze-Leende 17,281. Peat, pig farms and the Limburg border.' },
          { h3: 'De Kempen', p: 'Bladel 21,046; Eersel 20,537; Oirschot 19,801; Bergeijk 19,436; Reusel-De Mierden 13,729. Five municipalities of heath and pine between Eindhoven and Belgium.' },
          { h3: 'Tilburg and Hart van Brabant', p: '<a class="cg-inline-link" href="/coding-classes-in-tilburg">Tilburg</a> 230,746, the second city, with its own page; Oisterwijk 33,356; Gilze en Rijen 28,437; Dongen 27,673; Goirle 24,886; Hilvarenbeek 16,315. The old textile city and the villages that fed its mills.' },
          { h3: 'The Langstraat and the Biesbosch', p: 'Altena 58,946; Waalwijk 51,635; Heusden 46,689; Drimmelen 28,402; Loon op Zand 24,111; Geertruidenberg 21,914. The shoe-and-leather towns along the Maas and the wetland beyond them.' },
          { h3: '\'s-Hertogenbosch and the Meierij', p: '<a class="cg-inline-link" href="/coding-classes-in-den-bosch">\'s-Hertogenbosch</a> 162,295, the capital, called Den Bosch by everyone in it, with its own page; Meierijstad 85,236; Boxtel 34,302; Vught 33,202; Sint-Michielsgestel 30,191. The province\'s seat and the bailiwick that historically surrounded it.' },
          { h3: 'Oss and the north-east', p: 'Oss 95,549, a page to come; Land van Cuijk 93,645; Maashorst 60,059; Bernheze 32,947; Boekel 11,686. The Maas bank facing Gelderland, and the two large municipalities merged into being in 2022.' },
          { h3: 'Breda and the Baronie', p: '<a class="cg-inline-link" href="/coding-classes-in-breda">Breda</a> 190,204, the third city, with its own page; Oosterhout 58,726; Etten-Leur 46,117; Zundert 23,088; Rucphen 23,973; Alphen-Chaam 10,495; Baarle-Nassau 7,256, the smallest and the strangest. The old barony and the road south to Antwerp.' },
          { h3: 'The Markiezaat and the west', p: 'Roosendaal 78,165, a page to come; Bergen op Zoom 70,691; Moerdijk 38,467; Halderberge 31,484; Steenbergen 24,596; Woensdrecht 22,301. The marquisate on the Scheldt, the port at Moerdijk and the polders towards Zeeland.' }
        ] },
        { kind: 'p', text: 'Fifty-six, every one of them above. Eindhoven has its page; Tilburg, Breda, \'s-Hertogenbosch, Helmond, Oss and Roosendaal will follow and go close. This page keeps the whole province in one frame, Boekel and Baarle included.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Where every figure on this page comes from, and where two sources differ by two people',
      intro: 'The national count, the 56 registers, the province\'s own entry, and the Dutch and English entries on the two Baarles.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The national count', p: 'Statistics Netherlands, provisional figures for 1 January 2026: 2,676,954 residents in 56 municipalities; 1,227,495 households; 384,718 under fifteen; 313,390 aged fifteen to twenty-five; 921 primary establishments with 211,249 pupils and 186 secondary with 134,310; land 490,156 hectares; density 544; 2,276,207 residents in 1995, a rise of 400,747.' },
          { h3: 'The fifty-six', p: 'Every municipality with its 1 January 2026 register count, from Eindhoven at 249,783 to Baarle-Nassau at 7,256. The 56 figures add to 2,676,954 exactly, and the class adds them before it draws a single ring.' },
          { h3: 'The province, described', p: 'Capital \'s-Hertogenbosch; Commissaris van de Koning Ina Adema; 5,082 square kilometres in total, 4,905 of land and 177 of water, against 4,901.56 of land by the national count, both kept; third by population and second by area; 56 municipalities, the most of any province; formed in 1815; regions De Kempen, De Peel, the Meierij, the Langstraat, the Baronie and the Markiezaat.' },
          { h3: 'Baarle, by the Dutch entry', p: '22 exclaves of Baarle-Hertog inside Baarle-Nassau and eight exclaves of Baarle-Nassau inside Baarle-Hertog, some of them enclaves of the second order; 7,254 residents on 1 January 2026 by this entry against 7,256 in the register list for the same date, both kept; 76.29 square kilometres, 76.14 of them land.' },
          { h3: 'Baarle, by the English entry', p: 'Baarle-Hertog is 26 parcels, 22 of them exclaves wholly surrounded by the Netherlands; the eight Dutch pieces inside Belgian ground are six inside the largest Belgian exclave, one inside the second largest, and one near Ginhoven; the pattern descends from medieval deals between the lords of Breda and the dukes of Brabant, was ratified under the Treaty of Maastricht in 1843 and finally delimited in 1995.' },
          { h3: 'The holiday region', p: 'Noord-Brabant belongs to regio Zuid for school holidays, with Limburg, Zeeland and the southern part of Gelderland, under the Rijksoverheid\'s division.' }
        ] },
        { kind: 'p', text: 'No connection exists or is suggested between Modern Age Coders and the province, any of its 56 municipalities, either Baarle, or any school in them. They appear because a page claiming Noord-Brabant should be able to draw it, holes included.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Which country is this garden in? Build the program that counts the borders instead of trusting the outer one',
      intro: 'Twenty-two Belgian rings inside a Dutch municipality, seven Dutch rings inside two of those, and one rule that gets every point right.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Draw the rings', p: 'The outer boundary of Baarle-Nassau, Dutch. Inside it, 22 closed curves, each enclosing Belgian ground. Inside two of those, seven more closed curves, each enclosing Dutch ground again. The learner represents each as a polygon and stops thinking of the border as one line.' },
          { h3: '2. Count, do not look', p: 'For any point, count how many of the enclave boundaries enclose it. Zero: the open ground of Baarle-Nassau, Dutch. One: inside a Belgian exclave, Belgian. Two: inside a Dutch counter-exclave, Dutch. The country flips at every ring, so an even count is the Netherlands and an odd count is Belgium, and no other test is needed.' },
          { h3: '3. Break the two easy rules', p: 'Rule A, "inside Baarle-Nassau\'s outer line means Dutch", is wrong in 22 patches. Rule B, "inside any Belgian ring means Belgian", is wrong in seven. And the eighth Dutch piece, near Ginhoven, sits in Belgium proper with no Dutch ring outside it, which teaches the last lesson: the count starts from whichever country the outermost ground belongs to.' }
        ] },
        { kind: 'table', caption: 'Four kinds of point in and around Baarle, and what three rules say about each', head: ['Where the point is', 'Rings around it', 'Outer-line rule', 'Any-Belgian-ring rule', 'Parity rule'], rows: [
          ['Open ground of Baarle-Nassau', 'none', 'Netherlands, right', 'Netherlands, right', 'Netherlands, right'],
          ['Inside one of the 22 Belgian exclaves', 'one', 'Netherlands, wrong', 'Belgium, right', 'Belgium, right'],
          ['Inside one of the seven Dutch counter-exclaves', 'two', 'Netherlands, right by accident', 'Belgium, wrong', 'Netherlands, right'],
          ['The Dutch piece near Ginhoven, in Belgium proper', 'one, counted from Belgium', 'Belgium, wrong', 'Belgium, wrong', 'Netherlands, right']
        ] },
        { kind: 'callout', h3: 'Inside is a count, not a look', p: 'The rule the learner has just written is the rule every mapping program uses for every polygon on earth: shoot a line from the point to somewhere far away, count how many times it crosses the boundary, and an odd count means inside. Nested enclaves are that rule applied to a boundary made of many curves, and Baarle is the place where the curves are dense enough to break anyone who guesses from the outermost one. A learner who has counted rings here will treat every region with a hole in it, from a park with a lake to a tax zone with exemptions, as a set of curves to be counted rather than a shape to be eyeballed. The table was worked through before this paragraph was written; the 22, the seven and the one are quoted from the two entries on the Baarles, and every verdict in it is the parity rule and nothing else.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for any region that has holes in it',
      intro: 'Sales territories with an excluded city, postcodes with a carve-out, a nature reserve with a village inside it, a lake inside a park inside a town: every one is a polygon with holes. Practised first on the border at Baarle.',
      body: [
        { kind: 'table', caption: 'When a boundary is more than one line', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['List every ring', 'A region is a set of closed curves; find all of them before testing anything', 'Twenty-two Belgian gardens filed as Dutch', 'A boundary you can actually test against'],
          ['Count crossings', 'Odd means inside, even means outside, at every level', 'Trusting the outer line, or trusting the innermost', 'One rule for every point'],
          ['Start from the outside', 'Know which side the outermost ground is on before counting', 'Ginhoven filed as Belgian', 'A count with the right starting value'],
          ['Handle the line itself', 'A point on a boundary needs a stated rule the geometry does not contain', 'A house split by the border assigned by a coin toss', 'An explicit tie-break, written down'],
          ['Keep holes as holes', 'Area is the outer ring minus the holes, plus the holes in the holes', 'Baarle-Nassau measured with Belgium inside it', 'The right number of hectares']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'Three rope loops on the floor, one inside the next, and a child hopping from patch to patch saying which country each one is. The rule comes out on its own in ten minutes: every time you step over a rope, the country changes. Then a fourth loop somewhere off to the side, with no loop around it, and the harder question of what it starts as.' },
          { h3: 'For teenagers', p: 'A toy Baarle in Python: an outer square, two Belgian squares inside it, a Dutch square inside one of those. The learner writes the crossing count, tests twenty random points, then breaks Rule A and Rule B on purpose and counts how many points each gets wrong. The stretch: compute the area of Dutch ground properly, outer minus holes plus holes in holes.' },
          { h3: 'For adults', p: 'The same crossing count on something from work: a delivery zone with an excluded district, a rate area with exempt parcels, a catchment with a reserve inside it. Adults usually discover that the system they use at work applies Rule A, and that somebody has been paying for it.' }
        ] },
        { kind: 'p', text: 'The provincial totals, the 56 municipal counts, the areas and the enclave numbers are published by the offices and the entries named in the sentences that use them. The verdicts in the table are the parity rule applied to the published counts, presented as exactly that; the rule for buildings that straddle the line was not read at source and is left as a stated gap rather than a guess.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From three rope loops to a point-in-polygon test with holes',
    intro: 'The rung is set in the free lesson, and which of the 56 town halls is nearest is not one of the inputs.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Step over a rope, change country', p: 'Children hop between nested loops and discover that inside is a count of ropes crossed.', courses: ['kids-coding-blocks-masterclass', 'kids-ai-web-development-course'] },
      { band: 'Ages 11 to 13', h3: 'Odd and even, on a map', p: 'Learners write the crossing count for one square inside another and test it on twenty points.', courses: ['maths-through-coding', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 14 to 18', h3: 'Rings, holes and areas in code', p: 'Teenagers build the toy Baarle, break the two easy rules on purpose and compute the area properly.', courses: ['java-programming-masterclass-for-teens', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Regions with holes at work', p: 'Adults find the carve-outs in a zone they already use and test whether the system counts them.', courses: ['full-stack-web-development-masterclass-college', 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will tell a child in Baarle which country the bakery is in. Why should the child learn to count the rings instead?',
    intro: 'Because the assistant answers from the address, and the address is the outer line, and the outer line is wrong in twenty-two places.',
    p1: 'Put a Baarle address to a tool and it will name a country with confidence, because it has seen the street name filed under one municipality or the other. It is applying Rule A. It has not drawn the rings, it does not know that the far end of the same street may be under a different flag, and it cannot tell you why the answer would change if you crossed the pavement. The person who can is the one who has written the crossing count and watched it flip at every curve.',
    p2: 'Which is what the learner is here for. The tool will happily write the point-in-polygon function on request; what it cannot supply is the instinct to ask, of any region, how many boundaries it really has. A twelve-year-old in Boxtel who has counted ropes on the floor will ask that of a school catchment at fifteen and a pricing zone at twenty-five, and will be the one who notices the carve-out nobody drew. Versions of the tools will come and go before then. The parity of a crossing count will not.',
    closer: 'A Brabant parent weighing coding in 2026, then, is weighing something narrower than a career in geography. The question is whether the child should own the rule that inside is a count and not a look, and whether the fastest way to own it is to write it and run it on the strangest border in Europe. The class says yes to both.',
    blogAnchor: 'whether coding is still worth a child\'s time in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for a province with four centres and no middle',
    intro: 'Eindhoven, Tilburg, Breda and Den Bosch each pull their own hinterland, and a family in Land van Cuijk or Steenbergen belongs to none of them. A class that comes to the house in Boekel or Woensdrecht does not have to choose.',
    cells: [
      { h3: 'The A2, the A58 and the A67 stay out of it', p: 'The lesson is at home in Oss, Zundert or Cranendonck at a fixed weekly hour, and nobody drives to a city for it.' },
      { h3: 'English outside, school Dutch inside', p: 'The lesson runs in English, which the Brainport families and the international schools already share, and groep, havo, vwo and profielkeuze keep their Dutch names because the school keeps them.' },
      { h3: 'The first hour, and what it settles', p: 'A real task at the learner\'s level, a course named at the end of it and a rung to start on, and no card is asked for to book any of it.' },
      { h3: 'Ability sets the group', p: 'What the learner can do and wants next decides who they sit with; Brainport, the Baronie or the Peel does not.' },
      { h3: 'Twice a week, on regio Zuid\'s calendar', p: 'Eight lessons a month at one recurring time. Noord-Brabant breaks up with regio Zuid, alongside Limburg, Zeeland and the south of Gelderland, and the summer weeks are agreed before the slot is.' },
      { h3: 'The clocks', p: 'The Dutch clock moves in March and October and the Indian one does not, so a Brabant afternoon is three and a half hours behind the teacher in summer and four and a half in winter. After school, early evening and weekends fall inside both days.' }
    ],
    spec: { title: 'From Baarle, Belgium is nearer than Breda', p: 'From Baarle-Nassau, Woensdrecht or Reusel the Belgian border is a walk and the nearest Brabant city is a drive. A weekly class at home is the same class the Eindhoven family gets, and it is the only version that does not begin with a decision about which country to head into.' }
  },

  fees: {
    h2: 'Fifty-six municipalities, one dollar tariff, and a free hour first',
    intro: 'Set out before a number of yours is requested.',
    first: 'A complete lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'Everywhere outside India pays the same US dollar figure, with no euro edition, so Baarle-Nassau pays what Eindhoven pays. Course and hour are fixed in the free lesson and payment comes after it, over WhatsApp. The pricing page covers pauses, changes of plan and missed lessons.'
  },

  reviewsH2: 'Six Google reviews, quoted in full',

  book: {
    h2: 'Send the level; the municipality is optional',
    intro: 'The first task could be three rope loops on the floor, a toy Baarle in Python, or a delivery zone from work with a district cut out of it that the software has never noticed.',
    success: 'Thank you. Your Noord-Brabant class request has been sent.'
  },

  faq: {
    h2: 'Noord-Brabant coding class questions',
    intro: 'The province, its towns, the border at Baarle, the teaching and the terms.',
    items: [
      { q: 'Why is a border with holes in it on a coding page?', a: 'Because Baarle-Nassau, with 22 pieces of Belgium inside it and seven pieces of the Netherlands inside two of those, is the clearest worked example there is of a rule every map program relies on: a point is inside a region if the number of boundary lines around it is odd. Neither the outer line nor the innermost one decides; the count does. Building the program that counts the rings, and breaking the two easy rules it replaces, is the project on this page.' },
      { q: 'Which Noord-Brabant towns get their own page, and which are covered here?', a: 'Eindhoven already has one. Tilburg, Breda, \'s-Hertogenbosch, Helmond, Oss and Roosendaal follow in this series. The other 49, from Bergen op Zoom and Meierijstad to Boekel and Baarle-Nassau, are listed above with their populations and served from this page.' },
      { q: 'Is Den Bosch or Eindhoven the capital?', a: '\'s-Hertogenbosch, which everyone in it calls Den Bosch, is the capital with 162,295 residents on 1 January 2026, the fourth city of the province. Eindhoven, with 249,783, is the largest, and Tilburg and Breda both outrank the capital as well.' },
      { q: 'We are in Baarle-Nassau, or Woensdrecht, or Reusel, right on the Belgian line. Does that matter?', a: 'Not to the class. A learner in Baarle sits in one group with one from Tilburg at one hour, and whether the kitchen is in a Dutch patch or ten metres from a Belgian one does not come into it. It is, if anything, the place where a class that comes to the house makes the most sense.' },
      { q: 'Does the teacher speak Dutch?', a: 'The lesson is in English. Groep, havo, vwo and profielkeuze are said as the school says them, but the class itself is not offered in Dutch, and not in Brabants either.' },
      { q: 'What time are classes for a family in Noord-Brabant?', a: 'The Dutch clock jumps twice a year and the Indian one stays, so a Brabant afternoon runs three and a half hours behind the teacher in summer and four and a half in winter. After-school, early-evening and weekend hours suit both ends, and the fixed weekly hour is chosen during the free lesson.' },
      { q: 'What happens in the free lesson?', a: 'We look for what the learner already does well and set one task at that edge. A child hops between rope loops. A teenager builds a toy Baarle and counts crossings. An adult brings a zone from work with a carve-out. By the end there is a named course, a rung, a fixed hour and the dollar figure, and nothing has been paid.' },
      { q: 'Is there a Modern Age Coders classroom anywhere in Noord-Brabant?', a: 'No, and none is claimed in Eindhoven, in Tilburg or anywhere in the Netherlands. Lessons are live online and need a laptop or desktop, working audio, a current browser and a stable connection. The telephone number on this page is Indian and is described as such.', boiler: true },
      { q: 'What do Noord-Brabant coding classes cost?', a: 'The first lesson is free. Group tuition is USD 100 a month for two live lessons a week, normally eight in the month, in a group of five to ten. Private tuition is USD 150 a month, one learner with one teacher at the same frequency. Course, format, recurring time and availability are confirmed before payment.', boiler: true },
      { q: 'How many learners are in a Noord-Brabant group?', a: 'Between five and ten, matched on level, pace and goal rather than on age, school or municipality. Private tuition is one learner and one teacher. If no group at the right level is running, the family can take private tuition or wait for the next one to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the Netherlands',
    h2: 'East to Brainport, south to Limburg, and up to the country',
    html: 'The province\'s largest city already has its page: <a class="cg-inline-link" href="/coding-classes-in-eindhoven">Eindhoven</a>, with the Brainport ratio chain. East along the A67 is <a class="cg-inline-link" href="/coding-classes-in-limburg">Limburg</a>, with the hill that stopped being the highest point in the country. Both sit under the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>, and a learner who wants a model that learns rather than a program that runs should look at <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> or the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>. <a class="cg-inline-link" href="/coding-classes-in-tilburg">Tilburg</a> has its page; <a class="cg-inline-link" href="/coding-classes-in-breda">Breda</a> too; \'s-Hertogenbosch, Helmond, Oss and Roosendaal follow.',
    waLabel: 'Close with WhatsApp'
  },

  footerHeading: 'The Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' },
    { href: '/coding-classes-in-eindhoven', label: 'Eindhoven' },
    { href: '/coding-classes-in-limburg', label: 'Limburg' }
  ],

  personalityCss: `
.cg-root.cg-nbr .cg-hero-grid { align-items: end; gap: clamp(1.75rem, 4vw, 3.25rem); }
.cg-root.cg-nbr .cg-hero h1 { font-weight: 600; letter-spacing: -0.01em; line-height: 1.1; }
.cg-root.cg-nbr .cg-capsule { border-left-width: 6px; border-left-style: solid; padding-left: 1.6rem; }
.cg-root.cg-nbr .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; }
.cg-root.cg-nbr .cg-section-head h2 { max-width: 32ch; }
.cg-root.cg-nbr .cg-grid-3 { gap: clamp(1.1rem, 2.3vw, 1.8rem) clamp(1.4rem, 3vw, 2.2rem); }
.cg-root.cg-nbr .cg-ladder-col { border-top: 4px double var(--cg-accent); }
.cg-root.cg-nbr .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-nbr .cg-callout h3 { letter-spacing: -0.005em; }
`,

  dossier: {
    curriculumAuthority: 'Province of Noord-Brabant: 56 municipalities (the most of any province), 2,676,954 residents (CBS 1 January 2026), 921 primary establishments (211,249 pupils) and 186 secondary (134,310). Capital \'s-Hertogenbosch (fourth city, 162,295); largest Eindhoven (249,783), then Tilburg and Breda. Regions De Kempen, De Peel, Meierij, Langstraat, Baronie, Markiezaat. Regio Zuid holidays. A province page is about the spread; the hub owns the national curriculum and Eindhoven owns Brainport.',
    localProject: 'Inside is a count, not a look (point-in-polygon with nested holes; the even-odd rule). Baarle-Nassau holds 22 exclaves of Belgian Baarle-Hertog; eight Dutch pieces lie inside Belgian ground, seven of them second-order (six in the largest Belgian exclave, one in the second largest) and one near Ginhoven in Belgium proper. The learner counts the enclave boundaries around a point: even is the Netherlands, odd is Belgium, starting from the country of the outermost ground. Rule A (outer line decides) fails in 22 patches; Rule B (any Belgian ring decides) fails in seven; Ginhoven shows the count needs a starting side. Distinct from the no-boundary trap (Zuid-Holland: a region nobody drew), the scope trap (Limburg: which set), and the perimeter-versus-area trap (Al Hamra): the flaw here is testing membership against one curve when the boundary is many. Worked through before writing; the rule for buildings on the line was not read at source and is stated as a gap.',
    requiredMentions: [
      '2,676,954',
      '56 municipalities',
      '\'s-Hertogenbosch',
      'Baarle-Nassau',
      'Baarle-Hertog',
      'Ginhoven',
      'Treaty of Maastricht',
      'De Kempen',
      'De Peel',
      'Langstraat',
      'Markiezaat',
      'Land van Cuijk',
      'Meierijstad',
      '2,276,207'
    ],
    sources: [
      { claim: 'Noord-Brabant 2,676,954 residents on 1 January 2026 (CBS provisional); 56 municipalities; land 490,156 ha; density 544; 1,227,495 households; 384,718 under 15; 313,390 aged 15 to 25; 921 primary establishments (211,249 pupils); 186 secondary (134,310); 400,747 more than 1995 (2,276,207), an 18 percent rise; capital \'s-Hertogenbosch; province since 1815; regions De Kempen, De Peel, Meierij, Langstraat.', url: 'https://allecijfers.nl/provincie/noord-brabant/' },
      { claim: 'All 56 municipalities on 1 January 2026, Eindhoven 249,783 to Baarle-Nassau 7,256: Tilburg 230,746; Breda 190,204; Den Bosch 162,295; Helmond 96,860; Oss 95,549; Land van Cuijk 93,645; Meierijstad 85,236; Roosendaal 78,165; Bergen op Zoom 70,691; Maashorst 60,059; Altena 58,946; Oosterhout 58,726; Waalwijk 51,635; Veldhoven 47,918; Heusden 46,689; Etten-Leur 46,117; Geldrop-Mierlo 40,683; Moerdijk 38,467; Boxtel 34,302; Deurne 33,596; Oisterwijk 33,356; Vught 33,202; Bernheze 32,947; Valkenswaard 31,920; Gemert-Bakel 31,806; Best 31,699; Halderberge 31,484; Sint-Michielsgestel 30,191; Gilze en Rijen 28,437; Drimmelen 28,402; Dongen 27,673; Goirle 24,886; Steenbergen 24,596; Nuenen, Gerwen en Nederwetten 24,473; Loon op Zand 24,111; Rucphen 23,973; Laarbeek 23,541; Zundert 23,088; Woensdrecht 22,301; Geertruidenberg 21,914; Cranendonck 21,101; Bladel 21,046; Eersel 20,537; Someren 20,471; Oirschot 19,801; Bergeijk 19,436; Son en Breugel 18,140; Waalre 17,864; Asten 17,484; Heeze-Leende 17,281; Hilvarenbeek 16,315; Reusel-De Mierden 13,729; Boekel 11,686; Alphen-Chaam 10,495.', url: 'https://allecijfers.nl/ranglijst/grootste-en-kleinste-gemeenten-in-inwoners-in-de-provincie-noord-brabant/' },
      { claim: 'Capital \'s-Hertogenbosch; Commissaris van de Koning Ina Adema; about 2.68 million residents end 2025, third by population; 5,082 km2 (4,905 land, 177 water), second largest by area after Gelderland; 56 municipalities, the most of any province; Eindhoven the largest at roughly 248,000, then Tilburg and Breda; established 1815; regions De Kempen, De Peel, Meierij, Langstraat, Baronie, Markiezaat; Baarle-Nassau with its enclaves on the Belgian border.', url: 'https://nl.wikipedia.org/wiki/Noord-Brabant' },
      { claim: '22 exclaves of Baarle-Hertog in Baarle-Nassau and eight exclaves of Baarle-Nassau in Baarle-Hertog, some of them enclaves of the second order; Baarle-Nassau 7,254 residents on 1 January 2026; 76.29 km2 (76.14 land, 0.15 water).', url: 'https://nl.wikipedia.org/wiki/Baarle-Nassau' },
      { claim: 'Baarle-Hertog comprises 26 parcels, 22 of them exclaves wholly surrounded by the Netherlands; eight Dutch counter-exclaves, six inside the largest Belgian exclave, one inside the second largest, one near Ginhoven; origin in medieval treaties between the lords of Breda and the dukes of Brabant; ratified under the Treaty of Maastricht 1843; final delimitation 1995.', url: 'https://en.wikipedia.org/wiki/Baarle-Hertog' },
      { claim: 'School holiday regions: regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'The front-door rule for buildings straddling the border. Widely repeated; not read at either source used here, so the page names it as a gap in the geometry rather than stating it.',
      'Baarle-Nassau at 7,254 versus 7,256 on the same date. Both kept; the page uses the register list figure in the spread and quotes the other in the evidence.',
      'The nine regional groupings of the 56 municipalities. The page\'s own arrangement for reading, labelled as such; not an official division.',
      'Anything the Eindhoven page owns: the Brainport ratio chain, the Indian-origin share, the university\'s founding.',
      'Anything the Netherlands hub owns: the SLO core objectives and the national informatica figures.'
    ]
  }
};
