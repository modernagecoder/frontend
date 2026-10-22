'use strict';
// AI classes for kids in Canada (ag- door, Canada cluster Plan 2, row 69).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Spine: what the AI companies' own terms allow children to use (verbatim), where AI already appears in Canadian
// school documents, what children aged 8 to 12 actually build in an AI class, and one original "learn from examples"
// project on City of Victoria open data that is tested honestly against a simple hand rule.
// Sources read raw on 22 October 2026 (copies in keyword-research-2026-09/ca/src-pilots/ai-classes-for-kids-in-canada/):
//  - help.openai.com/en/articles/8313401 (openai-ages.html): "ChatGPT is not meant for children under 13, and we require
//    that children ages 13 to 18 obtain parental consent before using ChatGPT."; "if you are using ChatGPT in the
//    education context for children under 13, the actual interaction with ChatGPT must be conducted by an adult."
//  - openai.com/policies/terms-of-use (openai-terms.html), "Effective: January 1, 2026": "You must be at least 13 years
//    old or the minimum age required in your country to consent to use the Services. If you are under 18 you must have
//    your parent or legal guardian's permission to use the Services."
//  - anthropic.com/legal/consumer-terms (anthropic-consumer-terms.html), effective "Oct 8, 2025": "You must be at least
//    18 years old or the minimum age required to consent to use the Services in your location, whichever is higher."
//  - policies.google.com/terms (google-terms.html), "Effective July 30, 2026": "If you're under the age required to
//    manage your own Google Account, you must have your parent or legal guardian's permission to use a Google Account."
//  - support.google.com/gemini/answer/14517446 (gemini-teens.html): "To use Gemini Apps with a Google AI plan in most
//    countries, you must be 13 (or the applicable age in your country)". Quoted only in that exact form.
//  - facts-schools-contests.md: Ontario Science and Technology Grade 6 A2 "use coding in investigations and to model
//    concepts, and assess the impact of coding and of emerging technologies on everyday life"; ICD2O "investigate current
//    and emerging innovations in digital technology, including automation and artificial intelligence, and assess their
//    benefits and limitations"; Alberta draft Grades 7 to 9 "artificial intelligence, computer science and money
//    management", "ahead of mandatory implementation in September 2027"; New Brunswick CS 110 "AI-assisted debugging
//    tools"; CCC rules (src-pilots/ccc-junior-guide) forbid "generative AI such as CoPilot or ChatGPT".
//  - Course facts from content/courses/data/ai-literacy-for-kids.json (ages 8 to 14, 16 weeks, phase titles, "never
//    asks a child to create an account on a service that does not permit their age"), python-ai-kids.json (ages 9 to
//    12, Phase 4 kid-safe AI), kids-coding.json (Machine Learning for Kids and Teachable Machine in phase 3). No age is
//    stated for Teachable Machine or Machine Learning for Kids: their pages rendered only by JavaScript.
//  - facts-geo.md section 3 for times.
// Open data: City of Victoria, Tree Species (Parks trees database), https://hub.arcgis.com/api/v3/datasets/
//  36e90771770542baaa89afddce69195a_15/downloads/data?format=csv&spatialRefId=4326&where=1%3D1 (data/victoria-trees.csv,
//  1,248,538 bytes, sha256 f4a2c7c9...4b18, 34,965 rows). Licence: Open Government Licence - City of Victoria
//  (opendata.tsv licence check; data/victoria-licence-hubpage.json): "including for commercial purposes"; attribution
//  "Contains information licensed under the Open Government Licence" then a dash then "City of Victoria." (dash not
//  reproduced).
// Our own calculations (tree_guesser.py, run with python -I, output tree_guesser.out.txt; extra runs inline): Garry oak
//  5,200 rows, Douglas fir 1,300, none skipped for missing Height or Width; median height 9 m (oak) and 16 m (fir);
//  training set 600 + 600, test set 300 + 300 (different trees); nearest neighbour 351 of 600 on test, 930 of 1200 on
//  its own training trees; hand rule "taller than 12 m is a fir" 394 of 600; nearest neighbour guessed oak 537 of 600
//  times; with firs listed first it scores 373; a vote of the 31 nearest scores 383; only 242 distinct (height, width)
//  pairs among the 1,200 training trees.
// Lesson family: learning from examples and testing on unseen ones (with a simple rule as the bar to beat).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const GUESSER = `# Our tree guesser: Garry oak or Douglas fir? (Modern Age Coders, written for this page)
import csv

oaks, firs = [], []
with open("victoria-trees.csv", encoding="utf-8-sig") as f:
    for row in csv.DictReader(f):
        try:
            tree = (float(row["Height"]), float(row["Width"]))
        except ValueError:
            continue                       # skip trees with a missing measurement
        if row["CommonName"] == "Garry oak":
            oaks.append(tree)
        elif row["CommonName"] == "Douglas fir":
            firs.append(tree)

# Examples to learn from, and different trees to test on. Same number of each kind.
train = [(t, "oak") for t in oaks[:600]] + [(t, "fir") for t in firs[:600]]
test = [(t, "oak") for t in oaks[600:900]] + [(t, "fir") for t in firs[600:900]]

def guess(tree):
    # Find the training tree whose height and width are closest, and copy its answer.
    closest = min(train, key=lambda ex: (ex[0][0] - tree[0]) ** 2 + (ex[0][1] - tree[1]) ** 2)
    return closest[1]

def my_rule(tree):
    return "fir" if tree[0] > 12 else "oak"   # a rule a child writes by hand

for name, method in [("nearest neighbour", guess), ("hand rule", my_rule)]:
    right = sum(1 for tree, answer in test if method(tree) == answer)
    print(name, right, "of", len(test), "right")
print("test on the training trees:", sum(1 for t, a in train if guess(t) == a), "of", len(train))`;

const GUESSER_OUT = `nearest neighbour 351 of 600 right
hand rule 394 of 600 right
test on the training trees: 930 of 1200`;

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'AI FOR KIDS', blurb: 'AI classes for Canadian children: what OpenAI, Anthropic and Google allow at each age, where AI sits in Canadian school documents, and a Victoria tree project.' },
  slug: 'ai-classes-for-kids-in-canada',
  code: 'akc',
  accent: '#1C4C39',
  accentRationale: 'AI classes for kids, Canada: a deep cedar green #1C4C39, allocated for row 69 at least 6 RGB units from every site accent and 14 from the other Canada accents; contrast 9.25 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'AI classes for kids in Canada',
  title: 'AI Classes for Kids in Canada: What Children Learn and Build',
  description: 'AI classes for Canadian kids aged 8 to 12: the age rules in OpenAI, Anthropic and Google\'s own terms, what children build, and a Victoria tree project tested fairly.',
  ogDescription: 'What an AI class for children should teach in Canada: how a machine learns from examples, how to check it, which AI tools a child is allowed to use, and a real project on the City of Victoria\'s tree data.',
  twitterDescription: 'AI for Canadian kids: the tools\' real age rules, what children build, and a Victoria tree project.',
  pageName: 'AI Classes for Kids in Canada',
  webPageDescription: 'A guide for Canadian parents of children aged 8 to 12 to learning about artificial intelligence, built from the terms of OpenAI, Anthropic and Google, Ontario, Alberta and New Brunswick curriculum documents, with an original learn-from-examples project on City of Victoria open data.',
  courseDescription: 'Live online AI classes for children aged 8 to 12 across Canada: how machines learn, where AI goes wrong, and small AI projects children build and explain, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Canada', href: '/coding-classes-in-canada' }],
  crumbLabel: 'AI for kids',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#rules', label: 'Age rules' },
    { href: '#school', label: 'AI at school' },
    { href: '#build', label: 'What kids build' },
    { href: '#project', label: 'Victoria project' },
    { href: '#home', label: 'At home' }
  ],
  eyebrow: 'Canada &middot; Artificial intelligence &middot; Ages 8 to 12',
  h1: 'AI classes for kids in Canada',
  lede: 'Children in Canada hear about AI every day, and many have watched an older sibling or a parent type into a chatbot. What they rarely get is an explanation of what is happening inside, or a chance to build a small one and watch it fail. This page sets out what the AI companies themselves allow at each age, where AI already appears in Canadian school documents, what a child of 8 to 12 can genuinely build, and one complete project on the City of Victoria\'s tree data in which a learned guesser loses to a child\'s rule, and why that teaches more than any win.',
  secondaryCta: { href: '#project', label: 'See the Victoria project' },
  wa: 'Hello Modern Age Coders, my child in Canada is curious about AI. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; children learn how AI works, not just how to type into it',
  spec: [
    ['Ages', '8 to 12 (AI literacy to 14)'],
    ['Learns', 'How machines learn, and where they fail'],
    ['Builds', 'Small models and programs of their own'],
    ['Accounts', 'None a child\'s age does not allow'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'AI classes for kids in Canada show 8 to 12 year olds how a machine learns from examples, how to test it, and why it can be confidently wrong, through small projects they build themselves, without adult chatbot accounts. Modern Age Coders offers this live online, as a group class or one to one, in AI Literacy for Kids.',

  picks: {
    eyebrow: 'Courses for curious children',
    h2: 'Three AI courses for Canadian children',
    lede: 'One built entirely around understanding AI, one that teaches typed Python with AI projects at the end, and one long coding course in which children train their own small models.',
    items: [
      { course: 'ai-literacy-for-kids-course', code: 'AKC / 01', title: 'AI Literacy for Kids', note: 'Ages 8 to 14, no coding needed. Sixteen weeks in three phases: how a machine learns, where AI goes wrong, then a project the child builds and presents.' },
      { course: 'python-ai-kids-masterclass', code: 'AKC / 02', title: 'Python and AI for Kids', note: 'For 9 to 12 year olds. Python typed from the first lesson, turtle art and games, and a final phase of kid-safe AI projects.' },
      { course: 'kids-coding-blocks-masterclass', code: 'AKC / 03', title: 'Coding for Kids', note: 'From age 6 up to 12. Scratch and games first; later, children train image and sound models with Machine Learning for Kids and Teachable Machine and use them in their own games.' }
    ]
  },

  sections: [
    {
      id: 'rules', tint: 'tint', eyebrow: 'What the companies allow',
      h2: 'AI tool age rules, in the companies\' own words',
      lede: 'Parents are often told that a child "can use" a chatbot. The companies\' terms are more specific. These lines are copied from each company\'s current terms or help pages, read on 22 October 2026. Where a page gave no clear age, we say nothing.',
      body: [
        { kind: 'table', caption: 'Age rules for AI tools a child may hear about, from each company\'s own pages (read 22 October 2026)', head: ['Tool', 'What the company says', 'What it means for a child under 13'], rows: [
          ['ChatGPT (OpenAI)', '"ChatGPT is not meant for children under 13, and we require that children ages 13 to 18 obtain parental consent before using ChatGPT."', 'Not for them. In a classroom for under-13s, OpenAI says "the actual interaction with ChatGPT must be conducted by an adult."'],
          ['OpenAI services generally', '"You must be at least 13 years old"; "If you are under 18 you must have your parent or legal guardian\'s permission to use the Services." (terms effective January 1, 2026)', 'No account of their own'],
          ['Claude (Anthropic)', '"You must be at least 18 years old or the minimum age required to consent to use the Services in your location, whichever is higher." (effective Oct 8, 2025)', 'Not for children or teenagers at all'],
          ['Google Account', '"If you\'re under the age required to manage your own Google Account, you must have your parent or legal guardian\'s permission to use a Google Account." (effective July 30, 2026)', 'A parent decides, and supervises'],
          ['Gemini Apps with a Google AI plan', '"To use Gemini Apps with a Google AI plan in most countries, you must be 13 (or the applicable age in your country)"', 'The paid plan is not for under-13s']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What we do with these rules',
          left: [
            'We follow them, and our courses are written around them. The AI Literacy for Kids syllabus says it never asks a child to create an account on a service that does not permit their age. Younger children see adult chatbots only when the teacher runs them on screen, which is exactly the arrangement OpenAI describes for classrooms with children under 13.',
            'We never recommend Claude; that is our rule as much as Anthropic\'s. It is an 18-and-over product, and no page or class of ours for children or teens suggests it.'
          ],
          rightH3: 'Why the rules help, not hinder',
          right: [
            'A child who cannot open a chatbot is not missing the important part. The important part of AI, for a ten year old, is the idea that a machine learns a pattern from examples, and that the pattern can be wrong. That idea can be taught with a spreadsheet, a few photos and some patience.',
            'Children who understand it are better protected later, when they are old enough for the tools: they know to ask where an answer came from and how it was checked.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://help.openai.com/en/articles/8313401-is-chatgpt-safe-for-all-ages" rel="noopener" target="_blank">OpenAI help centre</a>; <a class="ag-inline-link" href="https://openai.com/policies/terms-of-use/" rel="noopener" target="_blank">OpenAI Terms of Use</a>; <a class="ag-inline-link" href="https://www.anthropic.com/legal/consumer-terms" rel="noopener" target="_blank">Anthropic Consumer Terms</a>; <a class="ag-inline-link" href="https://policies.google.com/terms" rel="noopener" target="_blank">Google Terms of Service</a>; <a class="ag-inline-link" href="https://support.google.com/gemini/answer/14517446" rel="noopener" target="_blank">Gemini Apps Help</a>. All read 22 October 2026. Terms change; check each page before a child signs up for anything.' }
      ]
    },
    {
      id: 'school', tint: 'deep', eyebrow: 'AI in Canadian schools',
      h2: 'Where AI already appears in Canadian school documents',
      lede: 'No province we read has a separate AI subject for elementary children, but AI is starting to appear inside existing courses. These are the lines we found in the provincial documents on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'AI and emerging technology in provincial curriculum documents (read 22 October 2026)', head: ['Province and grade', 'Document', 'What it asks'], rows: [
          ['Ontario, Grade 6', 'Science and Technology (2022), A2', '"use coding in investigations and to model concepts, and assess the impact of coding and of emerging technologies on everyday life"'],
          ['Alberta, Grades 7 to 9 (draft)', 'Renewed curriculum', 'Topics "like artificial intelligence, computer science and money management", "ahead of mandatory implementation in September 2027"'],
          ['Ontario, Grade 10', 'ICD2O (2023)', '"investigate current and emerging innovations in digital technology, including automation and artificial intelligence, and assess their benefits and limitations"'],
          ['New Brunswick, high school', 'Computer Science 110', 'Coding with "AI-assisted debugging tools"'],
          ['Every province', 'The Canadian Computing Competition rules', 'Generative AI is forbidden during the contest']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The thread running through them',
          left: [
            'Read together, the lines ask the same thing at rising levels: understand the technology, then judge it. Ontario\'s Grade 6 science wants children to "assess the impact" of emerging technologies; Ontario\'s Grade 10 course wants students to weigh AI\'s "benefits and limitations". Neither asks a child to be a skilled chatbot user.',
            'That is why our AI classes for children spend as much time on where AI goes wrong as on what it can do.'
          ],
          rightH3: 'For families outside Ontario and Alberta',
          right: [
            'We could not read primary elementary documents for the other provinces that day, so we describe none. In practice, children in every province meet the same ideas through news, games and siblings, and the questions they ask are the same in Halifax as in Kelowna.',
            'Our classes are not tied to any province\'s curriculum and do not replace school. They give children the understanding the school documents point towards.'
          ] },
        { kind: 'source', html: 'Sources: Ontario curriculum <a class="ag-inline-link" href="https://ws.api.dcp.edu.gov.on.ca/content/api/items/e___sci___tech___grade_6___strands?depth=4" rel="noopener" target="_blank">Science and Technology, Grade 6</a> and <a class="ag-inline-link" href="https://ws.api.dcp.edu.gov.on.ca/content/api/items?system.type=l2___course&amp;elements.code=ICD2O&amp;depth=0" rel="noopener" target="_blank">ICD2O</a> data; <a class="ag-inline-link" href="https://www.alberta.ca/curriculum-how-we-got-here" rel="noopener" target="_blank">Alberta curriculum</a>; <a class="ag-inline-link" href="https://curriculum.nbed.ca/learning-areas/high-school-block/career-connected-learning/digital-and-information-technology/computer-science-110/" rel="noopener" target="_blank">New Brunswick Computer Science 110</a>; <a class="ag-inline-link" href="https://cccgrader.com/rules.pdf" rel="noopener" target="_blank">CCC rules</a>. Read 22 October 2026. Modern Age Coders has no link to any ministry or to CEMC.' }
      ]
    },
    {
      id: 'build', tint: 'tint', eyebrow: 'What children build',
      h2: 'What a child of 8 to 12 actually builds in an AI class',
      lede: 'A good AI class for children is mostly making, testing and arguing about results. The projects below come from our own course syllabuses; the age bands are our guidance.',
      body: [
        { kind: 'table', caption: 'AI projects in our children\'s courses, by age (from the course syllabuses; ages are our guidance)', head: ['Age', 'Project', 'The idea underneath'], rows: [
          ['8 to 9', 'An "AI spotting hunt": find five AI systems used this week and say what each one decides', 'AI is everywhere, and each system makes a specific decision'],
          ['8 to 10', 'Sorting everyday examples into rule-following or learning-from-examples', 'The difference between a rule a person writes and a pattern a machine finds'],
          ['9 to 11', 'Training a small image or sound model, then using it inside a block-coded game', 'A model is only as good as the examples it was shown'],
          ['9 to 12', 'Training a model on lopsided data on purpose, then showing the class how it fails', 'Bias comes from the data, not from the machine being unkind'],
          ['10 to 12', 'Typed Python that learns from a real table of examples, tested on new ones', 'Test on examples the model has never seen, and compare it with a simple rule']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Learn', p: 'How a machine turns examples into a pattern, taught with cards, drawings and tiny datasets before any screen.' },
          { h3: 'Doubt', p: 'Why an AI can be confident and wrong: missing examples, lopsided examples, and questions it was never trained on.' },
          { h3: 'Explain', p: 'Every child presents a project and answers two questions: how did you test it, and when does it fail?' }
        ] }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'A real project',
      h2: 'Garry oak or Douglas fir? A tree guesser on Victoria\'s data',
      lede: 'The City of Victoria publishes a database of its trees under a licence that allows commercial reuse, with each tree\'s species, height and crown width. With 10 to 12 year olds we turn it into the simplest kind of machine learning there is: look at examples, find the closest one, copy its answer. Then we test it fairly. We wrote the program; each result comes from running it on the city\'s copy fetched 22 October 2026.',
      body: [
        { kind: 'p', html: '<b>The question:</b> given only a tree\'s height and width in metres, can the computer tell a Garry oak from a Douglas fir? The file has 5,200 Garry oaks and 1,300 Douglas firs, all with both measurements. A typical Garry oak in the file is 9 metres tall; a typical Douglas fir, 16.' },
        { kind: 'code', label: 'Our program &middot; tree_guesser.py', lang: 'python', code: GUESSER },
        { kind: 'code', label: 'Output, Victoria tree file', lang: 'text', code: GUESSER_OUT, note: 'The learned guesser gets 351 of 600 new trees right. The child\'s one-line rule gets 394. On trees it has already seen, the guesser looks far better: 930 of 1200.' },
        { kind: 'table', mt: true, caption: 'Every run we made on the same 600 test trees (our results)', head: ['Method', 'Right out of 600', 'What it teaches'], rows: [
          ['Always guess "oak"', '300', 'The test set is half oaks and half firs, so guessing one answer gets exactly half right'],
          ['Nearest neighbour, oaks listed first', '351', 'It guessed oak 537 times, because many trees share the same measurements and ties went to whichever tree came first'],
          ['Nearest neighbour, firs listed first', '373', 'Same method, different order, different score: a sign the method is fragile'],
          ['Vote of the 31 nearest trees', '383', 'Asking many neighbours smooths out the ties'],
          ['Hand rule: taller than 12 m means fir', '394', 'A child who looked at the data and thought about it beat every learned version']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why the computer lost, and why that is good',
          left: [
            'Heights and widths in the file are recorded in whole metres, so the 1,200 training trees have only 242 different pairs of measurements. Lots of oaks and firs look identical to the program. When two examples are equally close, our first version simply took the one it met first, and the oaks were listed first.',
            'Children usually expect the "AI" to win. Watching it lose to their own rule, and then finding the reason, teaches more about machine learning than any winning demo: a model only knows what its examples can show, and a fair test is the only way to find out.'
          ],
          rightH3: 'The trap every adult falls into too',
          right: [
            'Tested on its own training trees, the guesser scores 930 of 1200, which looks impressive. On new trees it drops to 351 of 600. That gap is why the program keeps the test trees separate, and why we ask children, "would you trust a spelling test where you saw the answers first?"',
            'The same lesson sits behind every serious AI system: report the score on examples the model has never seen, next to a simple rule it has to beat.'
          ] },
        { kind: 'source', html: 'Data: <a class="ag-inline-link" href="https://hub.arcgis.com/datasets/36e90771770542baaa89afddce69195a_15" rel="noopener" target="_blank">City of Victoria open data</a>, Tree Species (parks trees database). Contains information licensed under the Open Government Licence, City of Victoria. Reuse is permitted "including for commercial purposes". The guesser and its scores are ours; the City of Victoria does not endorse this page.' }
      ]
    },
    {
      id: 'home', tint: 'tint', eyebrow: 'Try it at home',
      h2: 'A learn-from-examples game for the kitchen table',
      lede: 'No screen needed. This is our own activity, and it contains the whole idea of the Victoria project in twenty minutes.',
      body: [
        { kind: 'ol', items: [
          '<b>Collect examples.</b> Cut out or draw 20 pictures of animals. On the back of each, write one fact: "lives in water" or "lives on land".',
          '<b>Split them.</b> Put 12 pictures in a "learning" pile and 8 in a "test" pile. Do not peek at the test pile.',
          '<b>Learn a pattern.</b> The child studies the learning pile, front and back, and writes one rule, for example "if it has fins, it lives in water".',
          '<b>Test fairly.</b> Turn over the test pictures one at a time. The child applies the rule to the front only, then checks the back. Count how many were right out of 8.',
          '<b>Find the failure.</b> Which test picture fooled the rule? A penguin, a frog, a whale? Change the rule and test again on new pictures, not the same ones.',
          '<b>Cheat on purpose.</b> Now test the rule on the learning pile. It scores higher. Ask why that score should not be trusted.'
        ] },
        { kind: 'p', mt: true, html: 'Step 6 is the most important. It is the kitchen-table version of the 930 against 351 in the Victoria project, and children who have done it once rarely forget it.' }
      ]
    },
    {
      id: 'thinking', tint: 'deep', eyebrow: 'Thinking, not copying',
      h2: 'Children who understand AI, rather than children who copy from it',
      lede: 'Our promise to families in Canada and everywhere else is that children learn to reason their own way to an answer; copying one, from a person or from an AI, is not the goal. For an AI class that means three things.',
      body: [
        { kind: 'three', cells: [
          { h3: 'The child does the reasoning', p: 'In every project, the child decides what the examples are, what the rule should be and how to test it. A tool can help with the counting; it never makes those choices.' },
          { h3: 'Every result is questioned', p: 'A score is never accepted on its own. "Compared to what? Tested on which examples?" are questions children learn to ask about their own models first.' },
          { h3: 'Mistakes are the material', p: 'A model that fails is the most useful thing in the room. Children are asked to make one fail on purpose and explain it.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What we tell parents about chatbots',
          left: [
            'Under 13, the companies we checked say no account, and OpenAI says an adult must run the interaction in a classroom. Between 13 and 17, OpenAI requires a parent\'s consent; Claude remains closed until 18. These are the companies\' rules, not ours, and they are the minimum.',
            'If your child is curious, sit with them, ask the chatbot something you both know the answer to, and look for the mistake together. That is an AI lesson in itself.'
          ],
          rightH3: 'Why this protects a child later',
          right: [
            'A child who has trained a guesser and watched it fail understands, years before anyone else in their class, that an AI answer is a guess built from examples. That child asks better questions when they are finally old enough to use the tools.',
            'Our teachers report each class to parents in a few plain lines: what the child built, what failed, and what the child concluded.'
          ] }
      ]
    },
    {
      id: 'time', tint: 'tint', eyebrow: 'Every time zone',
      h2: 'Fitting AI classes into a Canadian child\'s week',
      lede: 'Children join from every province. We book each class in the family\'s own time and recheck it when Eastern and Atlantic clocks change; much of the West no longer changes at all.',
      body: [
        { kind: 'table', caption: 'Clock changes across Canada this school year, per the IANA tz database (release 2026e)', head: ['Families in', 'Clock on 1 November 2026', 'Clock on 14 March 2027'], rows: [
          ['Victoria, Vancouver, Whitehorse', 'Stays at UTC-7', 'Stays at UTC-7'],
          ['Calgary, Edmonton, Regina', 'Stays at UTC-6', 'Stays at UTC-6'],
          ['Winnipeg', 'Stays at UTC-5 (no change this year)', 'Stays at UTC-5'],
          ['Toronto, Montreal, Ottawa', 'Goes back to UTC-5', 'Goes forward to UTC-4'],
          ['Halifax, Moncton, Charlottetown', 'Goes back to UTC-4', 'Goes forward to UTC-3'],
          ['St. John\'s', 'Goes back to UTC-3:30', 'Goes forward to UTC-2:30']
        ] },
        { kind: 'p', mt: true, html: 'For children aged 8 to 12 we suggest a weekend morning or the first hour after school. A child in Victoria and a child in Calgary are one hour apart all year now, since both provinces keep one clock.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Four ideas',
    h2: 'Four ideas a child should own by 12',
    lede: 'Our milestones for an AI class, used to place a child and to report progress.',
    table: { caption: 'Four AI ideas for children (ours)', head: ['Idea', 'The child can say'], rows: [
      ['1. Rules or examples', '"This program follows a rule a person wrote; that one learned from examples."'],
      ['2. Examples decide', '"It got this wrong because it never saw one like it."'],
      ['3. Test fairly', '"You have to test on examples it has not seen."'],
      ['4. Beat a simple rule', '"It is only good if it does better than an easy guess."']
    ] },
    left: { h3: 'For parents', ps: [
      'Idea 3 is the one most adults never learn. A child who owns it will read every AI headline more carefully.',
      'Progress is measured in what the child can explain, not in how many tools they have tried.'
    ] },
    right: { h3: 'For children', ps: [
      'When your model gets something wrong, do not fix it straight away. First say why it went wrong.',
      'Always keep some examples hidden for testing. If you peek, the test is spoiled.'
    ] }
  },

  catalogue: {
    eyebrow: 'More for children',
    h2: 'Nine more courses for Canadian children',
    lede: 'All live with one regular teacher, in a batch or one to one, for children in any province or territory.',
    bands: [
      { num: 'I', h3: 'Thinking skills', sub: 'Ages 6 to 12', courses: [
        { code: 'AKC / THINK / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational thinking', blurb: 'Breaking problems down, from age 7.' },
        { code: 'AKC / THINK / 02', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Three to four months of block games.' },
        { code: 'AKC / THINK / 03', slug: 'maths-through-coding', title: 'Math with Python', blurb: 'Numbers and patterns in code, 10 to 15.' }
      ] },
      { num: 'II', h3: 'Make things', sub: 'Ages 7 to 12', courses: [
        { code: 'AKC / MAKE / 01', slug: 'game-development-masterclass-for-kids', title: 'Making games', blurb: 'Logic in Scratch, then 3D worlds, 8 to 12.' },
        { code: 'AKC / MAKE / 02', slug: 'block-coding-app-development-masterclass', title: 'Phone apps with blocks', blurb: 'Real apps without typing, 8 to 12.' },
        { code: 'AKC / MAKE / 03', slug: 'minecraft-coding-for-kids-course', title: 'Coding in Minecraft', blurb: 'A world children already know, 7 to 12.' }
      ] },
      { num: 'III', h3: 'Typed code', sub: 'Ages 9 to 14', courses: [
        { code: 'AKC / CODE / 01', slug: 'kids-ai-web-development-course', title: 'Websites for kids', blurb: 'A first site of their own, 9 to 12.' },
        { code: 'AKC / CODE / 02', slug: 'cpp-programming-for-kids-course', title: 'C++ for young coders', blurb: 'Puzzles and games in C++, 9 to 12.' },
        { code: 'AKC / CODE / 03', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox scripting', blurb: 'Luau scripts for real games, 8 to 14.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Live AI classes built for children',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'The hour after school, in your own zone.' },
      { time: 'Weekends', l: 'Mornings, when children concentrate well.' },
      { time: '1-on-1', l: 'For a child who wants their own project and pace.' }
    ],
    cells: [
      { h3: 'No adult accounts', p: 'Nothing a child\'s age does not allow.' },
      { h3: 'Teacher-run demos', p: 'Chatbots appear only on the teacher\'s screen.' },
      { h3: 'Models they train', p: 'Small image, sound and table models of their own.' },
      { h3: 'Fair tests', p: 'Hidden test examples, every time.' },
      { h3: 'Parent notes', p: 'What was built, what failed, what the child concluded.' },
      { h3: 'Group or solo', p: 'Fifteen to twenty children, or one child alone.' }
    ]
  },

  projectsH2: 'Projects from our students',
  projectsLede: 'Older students take these ideas much further. Some of their projects are below, and the <a class="ag-inline-link" href="/student-labs">student labs</a> page holds more.',
  reviewsLede: 'Parents\' and students\' Google reviews, with nothing changed.',

  fees: {
    h2: 'Fees',
    lede: 'The fee is monthly and covers eight live classes. AI Literacy for Kids runs sixteen weeks, and families pay month by month rather than for the whole course at once.',
    free: ['A free first class', 'A sorting game that shows how machines learn', 'No card needed'],
    group: ['Fifteen to twenty children of a similar age', 'A regular teacher', 'A fixed weekly time', 'Paid monthly'],
    one: ['One child, one teacher', 'A project of the child\'s choosing', 'Times that suit your family']
  },

  faq: {
    eyebrow: 'Parents in Canada ask',
    h2: 'AI classes for kids in Canada: common questions',
    items: [
      { q: 'What age can a child start learning about AI?', a: 'Our AI Literacy for Kids course takes children from 8 and needs no coding. Children from about 10 can also build simple AI programs in typed Python in our Python and AI for Kids course.' },
      { q: 'Can my child use ChatGPT?', a: 'Not on their own if they are under 13. OpenAI says ChatGPT is not meant for children under 13 and that children aged 13 to 18 need parental consent. For under-13s in a classroom, OpenAI says an adult must conduct the interaction.' },
      { q: 'Is Claude suitable for children?', a: 'No. Anthropic\'s terms say users must be at least 18 years old, or older where local law requires. We never recommend Claude to anyone under 18.' },
      { q: 'What do children actually build in an AI class?', a: 'Small models and programs of their own: sorting examples into rule-following or learning, training an image or sound model for a game, and for older children, a Python program that learns from real data and is tested on new examples.' },
      { q: 'Will my child need to create accounts on AI websites?', a: 'No. Our AI Literacy for Kids course never asks a child to create an account on a service that does not permit their age. Younger children see adult tools only in teacher-run demonstrations.' },
      { q: 'Is AI part of the school curriculum in Canada?', a: 'It is starting to be. Ontario\'s Grade 6 science asks students to assess the impact of emerging technologies, Ontario\'s Grade 10 ICD2O course investigates artificial intelligence, and Alberta\'s draft Grades 7 to 9 curriculum includes it.' },
      { q: 'Does my child need to know how to code first?', a: 'Not for AI Literacy for Kids, which uses hands-on activities and block coding. The Python course teaches coding from the beginning, so children aged 9 to 12 can start there too.' },
      { q: 'How do you keep AI lessons safe for children?', a: 'By following each company\'s age rules, using tools and demonstrations chosen for children, and keeping chatbots on the teacher\'s screen. Children spend most of the class building and testing their own small models.' },
      { q: 'What times are classes for Canadian families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Every time is confirmed in your own province\'s zone.' },
      { q: 'How will I know my child is learning?', a: 'After classes the teacher sends a short note: what your child built, where it failed and what they concluded. By the end, a child should be able to explain why a model must be tested on examples it has never seen.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Canadian families thinking about children and AI.',
    items: [
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'All our Canadian pages.' },
      { href: '/ai-and-machine-learning-classes-in-canada', label: 'AI and machine learning in Canada', p: 'For teens and adults.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Age rules for many more tools.' },
      { href: '/ai-literacy-for-elementary-students', label: 'AI literacy for elementary students', p: 'How we teach AI to young children.' },
      { href: '/should-my-child-learn-ai', label: 'Should my child learn AI?', p: 'A parent\'s question, answered.' },
      { href: '/ai-projects-for-kids', label: 'AI projects for kids', p: 'More project ideas by age.' },
      { href: '/how-ai-actually-works', label: 'How AI actually works', p: 'The idea behind the guesser.' },
      { href: '/python-for-10-year-olds', label: 'Python for 10 year olds', p: 'Typed code at ten.' },
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch classes for kids', p: 'Where many children begin.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'We begin with a short sorting game: the child learns a rule from some examples, then tests it on others. The teacher sees how the child reasons and suggests the course that fits.',
    readFirst: 'Before you book, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains our live classes, and <a class="ag-inline-link" href="/courses">all courses</a> lists every syllabus.',
    note: 'Classes are live online with teachers in India, so families in every province take part from home. WhatsApp is the fastest way to ask us anything.',
    formNote: 'Free, with no card and no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Children and AI', links: [
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/ai-literacy-for-elementary-students', label: 'AI literacy' },
        { href: '/ai-projects-for-kids', label: 'AI projects for kids' },
        { href: '/should-my-child-learn-ai', label: 'Should my child learn AI?' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/ai-and-machine-learning-classes-in-canada', label: 'AI and ML in Canada' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Keep some examples hidden'
  },

  personalityCss: `
.ag-root.ag-akc .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-akc .ag-capsule { border-left-width: 6px; border-radius: 0; }
.ag-root.ag-akc .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-akc .ag-table caption { text-align: left; font-weight: 500; }
.ag-root.ag-akc .ag-band-head h3 { letter-spacing: -0.006em; }
.ag-root.ag-akc .ag-slots { gap: 1.15rem; }
`,

  dossier: {
    curriculumAuthority: 'OpenAI help centre and Terms of Use, Anthropic Consumer Terms, Google Terms of Service and Gemini Apps Help, all read 22 October 2026; Ontario DCP API Science and Technology Grade 6 and ICD2O; alberta.ca curriculum page; New Brunswick Computer Science 110; CCC rules; our course syllabuses. City of Victoria tree database under the Open Government Licence, City of Victoria.',
    localProject: 'A Victoria tree guesser: an original Python nearest-neighbour program that learns Garry oak versus Douglas fir from 1,200 City of Victoria trees and is tested on 600 different ones, scoring 351 against a child\'s hand rule at 394, with the tie bias (537 oak guesses, 242 distinct measurement pairs), the training-set illusion (930 of 1200) and four further runs explained; plus a six-step screen-free learn-from-examples game. Lesson family: learning from examples and testing on unseen ones.',
    requiredMentions: ['tree_guesser.py', 'nearest neighbour 351 of 600 right', 'hand rule 394 of 600 right', '930 of 1200', 'only 242 different pairs', 'guessed oak 537 times', 'Vote of the 31 nearest trees', 'Cheat on purpose', 'Keep some examples hidden'],
    sources: [
      { claim: 'ChatGPT not meant for children under 13; parental consent 13 to 18; adults conduct the interaction for under-13s in education.', url: 'https://help.openai.com/en/articles/8313401-is-chatgpt-safe-for-all-ages' },
      { claim: 'OpenAI minimum age 13 and parent or guardian permission under 18.', url: 'https://openai.com/policies/terms-of-use/' },
      { claim: 'Anthropic: users must be at least 18.', url: 'https://www.anthropic.com/legal/consumer-terms' },
      { claim: 'Google Account permission rule for children.', url: 'https://policies.google.com/terms' },
      { claim: 'Gemini Apps with a Google AI plan: 13 in most countries.', url: 'https://support.google.com/gemini/answer/14517446' },
      { claim: 'Ontario Grade 6 science and ICD2O on emerging technology and AI.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items?system.type=l2___course&elements.code=ICD2O&depth=0' },
      { claim: 'Victoria tree database and its licence.', url: 'https://hub.arcgis.com/api/v3/datasets/36e90771770542baaa89afddce69195a_15/downloads/data?format=csv&spatialRefId=4326&where=1%3D1' }
    ],
    rejectedClaims: [
      'An age rule for Teachable Machine or Machine Learning for Kids: their pages rendered only by JavaScript, so no age is stated.',
      'That "Gemini is 13+": not claimed; only the Google AI plan sentence is quoted, exactly.',
      'Recommending Claude, ChatGPT accounts or Gemini plans to children under 13: refused.',
      'That the learned guesser is better than a simple rule: refused; our runs show the opposite and the page says so.',
      'Elementary AI expectations in provinces other than Ontario and Alberta: not read, so none described.',
      'Any affiliation with OpenAI, Anthropic, Google, a ministry or the City of Victoria: none.'
    ]
  }
};
