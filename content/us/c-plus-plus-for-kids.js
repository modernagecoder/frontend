'use strict';
// C++ for kids (ag- subject door; US cluster Phase 2, row 30).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md; plan docs/superpowers/plans/2026-10-17-us-cluster-build.md.
// Search evidence (autocomplete_us.tsv): c++ for kids / free / online / book / pdf; c++ coding for kids; learn to code c++.
// Existing pages linked, not twinned: /c-plus-plus-classes-for-teens, /c-plus-plus-game-development,
// /c-plus-plus-for-beginners, /usaco-preparation-online-coaching. No C++ for Kids course exists yet (planned C2), so the
// Course: C++ for Kids (cpp-programming-for-kids-course, ages 9 to 12); C++ for teens for 13 and up.
// Sources, read raw with curl on 17 October 2026 (copies in keyword-research-2026-09/us/src/c-plus-plus-for-kids/):
//  - isocpp.org/get-started: free compilers (GCC "Includes g++", Clang, "Visual C++ Community : A free Windows C++
//    compiler by Microsoft"); online compiler pages (godbolt.org, Wandbox, ideone.com), "Some are compile-only";
//    "If you've never programmed before, why not learn in modern C++?"; Stroustrup's "Tour of C++".
//  - isocpp.org/std/status: "C++23 and many TSes have been published, and work is now underway on more TSes and C++26".
//  - en.cppreference.com: main ("if control reaches the end of main without encountering a return statement, the
//    effect is that of executing return 0 ;"); types (int "guaranteed to have a width of at least 16 bits", long "at
//    least 32 bits", long long "at least 64 bits"); undefined behavior ("There are no restrictions on the behavior of
//    the program.", examples "memory accesses outside of array bounds, signed integer overflow"); vector::at ("with
//    bounds checking", "std::out_of_range"); uniform_int_distribution ("closed interval", random_device, mt19937);
//    std::cin ("associated with the standard C input stream stdin").
//  - usaco.org instructions: "There is never any fee for participation."; solutions "in C, C++, Java, or Python";
//    "C++ is the only language supported at IOI"; time limits "2 seconds per input case for C and C++, and 4 seconds
//    per input case for Java and Python"; "all bronze-level problems are also fully-solvable in Python".
//  - apstudents.collegeboard.org AP CS A: "a subset of the Java programming language".
// Our own material, labelled: the three programs (standard C++ only, tested by the reader), the age table, the
// arithmetic (2 to the power 6 = 64, so 6 guesses cover 1 to 50; 2,147,483,647 / 1,000 = about 2,147,483 seconds,
// / 86,400 = about 24.8 days), and the 12-week plan. No individual is named except the language's creator as the
// author of a book isocpp recommends.
// Lesson family: types and limits (what a variable can hold, and what happens past the edge).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const HELLO = `// hello.cpp (ours)
#include <iostream>
#include <string>

int main() {
    std::string name;
    std::cout << "What is your name? ";
    std::cin >> name;
    std::cout << "Hello, " << name << ". Welcome to C++.\\n";
}`;

const GUESS = `// guess.cpp: a number guessing game (ours)
#include <iostream>
#include <random>

int main() {
    std::random_device rd;          // a seed source
    std::mt19937 gen(rd());         // the random engine
    std::uniform_int_distribution<int> pick(1, 50);

    int secret = pick(gen);         // 1 to 50, both ends included
    int guess = 0;
    int tries = 0;

    while (guess != secret) {
        std::cout << "Guess a number from 1 to 50: ";
        std::cin >> guess;
        tries = tries + 1;
        if (guess < secret) std::cout << "Higher\\n";
        else if (guess > secret) std::cout << "Lower\\n";
    }
    std::cout << "Got it in " << tries << " tries.\\n";
}`;

const SCORES = `// scores.cpp: why .at() is the safer way in (ours)
#include <iostream>
#include <stdexcept>
#include <vector>

int main() {
    std::vector<int> scores = {7, 9, 4};
    scores.push_back(10);           // positions 0, 1, 2 and 3

    std::cout << "First score: " << scores.at(0) << "\\n";
    std::cout << "How many: " << scores.size() << "\\n";

    try {
        // there is no position 4
        std::cout << scores.at(4) << "\\n";
    } catch (const std::out_of_range& e) {
        std::cout << "Caught it: no score at position 4\\n";
    }
    // scores[4] also compiles, but reading it is undefined behavior
}`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'C++ FOR KIDS', blurb: 'C++ for kids: when it is a good first language and when it is not, three short real programs, and the US competition path it leads to.' },
  slug: 'c-plus-plus-for-kids',
  code: 'cppk',
  accent: '#124875',
  accentRationale: 'C++ for kids, US: a deep steel blue #124875 from the US allocation sheet (row 30), serious enough for a compiled language, distinct from the Scratch and App Inventor accents',
  pageType: 'market',
  market: US,
  routeLabel: 'C++ for kids',
  title: 'C++ for Kids: Is It a Good First Language? Real Code Inside',
  description: 'C++ for kids, honestly: who is ready for it and who should start with Python, three short C++ programs to run, and how C++ leads to USACO for US students.',
  ogDescription: 'Is C++ right for a 9, 11 or 13 year old? An honest age guide, three real C++ programs (a greeting, a guessing game, safe vectors) and the USACO path.',
  twitterDescription: 'C++ for kids: an honest age guide, three real programs and the USACO path.',
  pageName: 'C++ for Kids',
  webPageDescription: 'A guide for US parents deciding whether their child should learn C++, with an age table, three standard C++ programs and the facts from isocpp.org, cppreference and USACO.',
  courseDescription: 'Live online C++ classes for US children aged 9 to 12 and teens of 13 to 18, taught by a regular teacher in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'C++ for kids',
  navLinks: [
    { href: '#ready', label: 'Is my child ready?' },
    { href: '#setup', label: 'Setting up' },
    { href: '#programs', label: 'Three programs' },
    { href: '#limits', label: 'Limits and bugs' },
    { href: '#usaco', label: 'USACO' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Ages 9 to 13 and up &middot; C++',
  h1: 'C++ for kids: when it is the right start',
  lede: 'Some children ask for C++ by name. They have heard it runs real games, or an older cousin uses it for competitions, or they simply want the language that sounds hardest. C++ is a serious, fast, widely used language, and a determined child can learn it. It is also strict, wordy and unforgiving in ways that Python and Scratch are not. This page is an honest guide for American parents: which children are ready, which should start elsewhere first, what C++ code actually looks like at a beginner level, and where it leads for students who stay with it.',
  secondaryCta: { href: '#programs', label: 'See three C++ programs' },
  wa: 'Hello Modern Age Coders, my child in the US wants to learn C++. Could we talk about whether they are ready, in a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; An honest answer on readiness first',
  spec: [
    ['For', 'Ages 9 to 13 and up'],
    ['Language', 'Modern C++ (C++23 published)'],
    ['Tools', 'g++, Clang or an online compiler'],
    ['Good for', 'Competitions, fast programs'],
    ['Not first for', 'Under-11s, as a rule'],
    ['Format', 'Batch or one to one'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'C++ can be a child&rsquo;s first typed language from about 11 or 12, if they read and type comfortably and do not mind strict error messages; for children of 9 or 10 we recommend starting in Scratch or Python and moving to C++ later. Free compilers such as g++ and Clang, or an online compiler page, are all a beginner needs.',

  picks: {
    eyebrow: 'Learn it with a teacher',
    h2: 'Three courses on the road to C++',
    lede: 'C++ for Kids covers ages 9 to 12, C++ for teens takes over at 13, and Python suits a child who wants a gentler first language.',
    items: [
      { course: 'cpp-programming-for-kids-course', code: 'CPPK / 01', title: 'C++ for Kids', note: 'Ages 9 to 12. A first program, loops, functions, small games and puzzles.' },
      { course: 'python-ai-kids-masterclass', code: 'CPPK / 02', title: 'Python and AI for kids', note: 'Ages 9 to 12. The gentler typed language we usually start with.' },
      { course: 'cpp-programming-masterclass-for-teens', code: 'CPPK / 03', title: 'C++ for teens', note: 'Ages 13 to 18. Fundamentals, the STL, data structures and games.' }
    ]
  },

  sections: [
    {
      id: 'ready', tint: 'tint', eyebrow: 'Is my child ready?',
      h2: 'Is C++ a good first language for your child?',
      lede: 'The official C++ site asks beginners who have never programmed, "why not learn in modern C++?" For teenagers we agree. For younger children the answer depends on the child, so here is the table we use with parents.',
      body: [
        { kind: 'table', caption: 'C++ readiness by age (ours, from teaching children of these ages)', head: ['Age', 'Usual starting point', 'When C++ makes sense'], rows: [
          ['6 to 8', 'Scratch or other block coding', 'Not yet; typing and reading speed get in the way'],
          ['9 to 10', 'Scratch, then Python', 'Rarely as a first language; a few C++ ideas after a year of Python'],
          ['11 to 12', 'Python, or C++ with a patient teacher', 'Yes, for a child who types well, reads errors calmly and wants it'],
          ['13 and up', 'C++ directly is fine', 'Yes; our teen course starts from zero']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'When C++ is a good choice',
          left: [
            'A child who wants to compete is the clearest case. USACO, the USA Computing Olympiad, accepts C, C++, Java and Python, and says C++ is the only language supported at the International Olympiad in Informatics.',
            'It also suits children who like knowing how things work underneath: why a number has a limit, where memory goes, why one program runs faster than another. C++ makes those questions visible.'
          ],
          rightH3: 'When it is not',
          right: [
            'If your child wants to see something on screen within ten minutes, C++ is a slow start. Python, Scratch or JavaScript give quicker rewards, and quick rewards keep young beginners coming back.',
            'If their goal is websites, apps or AI, C++ is the long way round. Those children do better in JavaScript or Python, and can still learn C++ later for competitions.'
          ] },
        { kind: 'p', mt: true, html: 'For a side-by-side view of languages by age, see our post on <a class="ag-inline-link" href="/blog/best-coding-languages-kids-10-18-beginner-advanced">coding languages for ages 10 to 18</a> and our guide to the <a class="ag-inline-link" href="/best-age-to-start-coding">right age to start coding</a>.' }
      ]
    },
    {
      id: 'setup', tint: 'deep', eyebrow: 'Setting up',
      h2: 'What a child needs to write C++ at home',
      lede: 'The tools are free. The official site, isocpp.org, lists free compilers for every major operating system and several online compiler pages for computers where nothing can be installed.',
      body: [
        { kind: 'table', caption: 'Free ways to run C++, from isocpp.org Get Started (read 17 October 2026)', head: ['Computer', 'Free option isocpp.org lists', 'Note'], rows: [
          ['Windows PC', 'Visual C++ Community, or a Windows build of GCC (g++)', 'Microsoft&rsquo;s compiler is described as free for Windows'],
          ['Mac', 'Clang', 'Described by isocpp.org as an open-source compiler for various platforms'],
          ['Linux', 'GCC or Clang', 'isocpp.org says builds are likely available through the package manager'],
          ['Chromebook or school laptop', 'Online compiler pages such as godbolt.org, Wandbox or ideone.com', 'Some only compile; others also run the program and show its output']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Which C++ is "modern" C++?',
          left: [
            'C++ is an ISO international standard, and its committee publishes new versions over time. The isocpp.org status page says C++23 has been published and work is under way on C++26.',
            'For a child, the version matters less than the style. Modern C++ uses std::string, std::vector and the random library instead of the older C habits, and that is what every program on this page uses.'
          ],
          rightH3: 'Books, if your child likes them',
          right: [
            'isocpp.org recommends books for complete beginners, including an introduction to programming written by the creator of C++ and a shorter Tour of C++ by the same author. Both are written for adults and older teens.',
            'For younger readers, we suggest a teacher and short programs first, then a book once they can already read simple C++ comfortably.'
          ] }
      ]
    },
    {
      id: 'programs', tint: 'tint', eyebrow: 'Real code',
      h2: 'Three short C++ programs for a first month',
      lede: 'These are the first three programs our C++ beginners write. They use only standard C++ described on cppreference.com. Paste each into an online compiler or a compiler on your computer and run it.',
      body: [
        { kind: 'code', label: 'Program 1 &middot; say hello', lang: 'c++', code: HELLO, note: 'There is no return statement, and that is allowed: cppreference says that reaching the end of main without one has the effect of return 0. std::cin reads from the keyboard, the standard input.' },
        { kind: 'code', label: 'Program 2 &middot; a guessing game', lang: 'c++', code: GUESS, note: 'uniform_int_distribution produces whole numbers on the closed interval from a to b, so 1 and 50 can both be the secret. Our arithmetic: halving the range each time finds any number from 1 to 50 in at most 6 guesses, because 2 to the power 6 is 64, which is at least 50.' },
        { kind: 'code', label: 'Program 3 &middot; scores in a vector', lang: 'c++', code: SCORES, note: 'vector::at checks the position and throws std::out_of_range when it is outside the vector. The square-bracket version does no check, so the program in the last comment would compile and then behave unpredictably.' },
        { kind: 'two', mt: true,
          leftH3: 'What the guessing game teaches',
          left: [
            'The while loop keeps asking until the guess equals the secret; the if and else if decide which hint to give. That is a complete game in under twenty lines, and every line is something the child can explain.',
            'The halving strategy is the real lesson. A child who works out that 6 guesses are always enough has discovered binary search, an idea that appears in competitions for years to come.'
          ],
          rightH3: 'Why we teach .at() before [ ]',
          right: [
            'Beginners make off-by-one mistakes constantly: a vector of 4 scores has positions 0 to 3, not 1 to 4. With .at(), that mistake produces a clear error the child can find. With square brackets, it can produce nonsense that looks like a working program.',
            'Once a student can always say which positions exist, we show them square brackets and why experienced programmers use them in fast code.'
          ] }
      ]
    },
    {
      id: 'limits', tint: 'deep', eyebrow: 'Limits and bugs',
      h2: 'The C++ lesson other languages skip: every number has a limit',
      lede: 'In Python, whole numbers grow as big as needed. In C++, each type has a fixed width, and going past it is a bug the language does not have to catch. Children find this strange at first and fascinating soon after.',
      body: [
        { kind: 'table', caption: 'Minimum integer widths, from cppreference.com fundamental types (read 17 October 2026)', head: ['Type', 'The standard guarantees', 'Usual today'], rows: [
          ['short', 'At least 16 bits', '16 bits'],
          ['int', 'At least 16 bits', 'At least 32 bits on 32-bit and 64-bit systems'],
          ['long', 'At least 32 bits', '32 or 64 bits, depending on the system'],
          ['long long', 'At least 64 bits', '64 bits']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'A worked example: the overflowing score',
          left: [
            'Our example: a game stores the score in a 32-bit int, which can hold up to 2,147,483,647. If the game adds 1,000 points every second, the score passes that limit after about 2,147,483 seconds, and 2,147,483 / 86,400 is about 24.8 days of non-stop play.',
            'After that, signed integer overflow is undefined behavior. cppreference lists it among its examples, alongside reading outside an array, and says of undefined behavior: "There are no restrictions on the behavior of the program."'
          ],
          rightH3: 'What a child takes from this',
          right: [
            'The fix is simple, a long long, which the standard guarantees is at least 64 bits. The habit is the valuable part: asking how big a value can get before choosing its type.',
            'USACO makes the same point in its instructions: answers usually fit in a standard 32-bit integer, but this is not guaranteed. Checking limits before coding is a habit we teach from the first month.'
          ] }
      ]
    },
    {
      id: 'usaco', tint: 'tint', eyebrow: 'Where it leads in the US',
      h2: 'From a first C++ program to USACO',
      lede: 'For American students, C++ has one very concrete destination: the USA Computing Olympiad. Its contest instructions explain how languages are treated.',
      body: [
        { kind: 'table', caption: 'USACO and programming languages, from the USACO contest instructions (read 17 October 2026)', head: ['Point', 'What USACO says'], rows: [
          ['Fee', '"There is never any fee for participation."'],
          ['Languages', 'Solutions in C, C++, Java or Python'],
          ['At the international level', '"C++ is the only language supported at IOI"'],
          ['Time limits', 'For most contests, 2 seconds per input case for C and C++, 4 seconds for Java and Python'],
          ['Python at the start', 'All bronze-level problems are meant to be fully solvable in Python'],
          ['Divisions', 'Bronze, silver, gold and platinum']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What this means for a 12-year-old',
          left: [
            'A child does not need C++ to start USACO. Bronze can be done in Python, so a younger student can compete in the language they already know and switch when the problems demand speed.',
            'USACO also says that on some problems, particularly in higher divisions, Python may be too slow to solve every input in time. That is the point where C++ pays off, and a student who learned it at 12 or 13 is ready for it.'
          ],
          rightH3: 'Our part in it',
          right: [
            'Our <a class="ag-inline-link" href="/usaco-preparation-online-coaching">USACO preparation coaching</a> takes students from their first contest upward. We are not connected with USACO, and we make no promises about divisions or results.',
            'Teens who prefer building to competing can take C++ toward graphics and games instead; our page on <a class="ag-inline-link" href="/c-plus-plus-game-development">C++ game development</a> covers that route.'
          ] }
      ]
    },
    {
      id: 'plan', tint: 'deep', eyebrow: 'A first term',
      h2: 'Twelve weeks of C++ for an 11 to 13 year old',
      lede: 'Our outline for a younger student who is ready for C++. Teens in our main course move faster; younger children may spend longer on the first weeks.',
      body: [
        { kind: 'table', caption: 'A 12-week first C++ term (ours)', head: ['Weeks', 'What the student builds', 'The idea'], rows: [
          ['1 to 2', 'Hello, a calculator, a mad-libs story', 'Compiling, variables, input and output'],
          ['3 to 4', 'The guessing game, then a dice roller', 'Loops, conditions, random numbers'],
          ['5 to 6', 'A times-table quiz that keeps score', 'Functions and return values'],
          ['7 to 8', 'Scores and names in vectors', 'Vectors, .at() and off-by-one thinking'],
          ['9 to 10', 'A text adventure with rooms', 'Strings, menus, larger programs'],
          ['11 to 12', 'Two small olympiad-style problems', 'Reading a problem, testing edge cases']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Ages 9 to 10', p: 'C++ for Kids at a slower pace, with more time on typing carefully and reading what the compiler says; some children try Python first.' },
          { h3: 'Ages 11 to 12', p: 'The twelve weeks above inside C++ for Kids, in a batch or one to one, with a lot of time on reading error messages.' },
          { h3: 'Ages 13 and up', p: 'Our C++ for teens course, from first programs through the STL and data structures to games and competition problems.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Growing into C++',
    h2: 'Four stages of a young C++ programmer',
    lede: 'The stages we teach through, and what comes next.',
    table: { caption: 'Stages of a young C++ learner (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Copier', 'Types out programs carefully and hunts down missing semicolons'],
      ['2. Reader', 'Can explain what each line of a short program does'],
      ['3. Builder', 'Writes small games and tools from an idea, with loops and vectors'],
      ['4. Solver', 'Reads a contest problem, plans, and checks limits before coding']
    ] },
    left: { h3: 'For parents', ps: [
      'Compiler errors are long and frightening at first. A child who reads the first line of the error, not the whole wall, has already reached stage 2.',
      'Ask your child what the largest value in their program could be. If they can answer, they are thinking like a C++ programmer.'
    ] },
    right: { h3: 'For kids', ps: [
      'Fix the first error first. One missing semicolon can cause ten errors further down.',
      'Run the program after every few lines. Small steps make bugs easy to find.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalog',
    h2: 'Nine courses for future C++ programmers',
    lede: 'Each course is taught live by one teacher who stays with the class, in a group or privately.',
    bands: [
      { num: 'I', h3: 'Before C++', sub: 'Ages 6 to 12', courses: [
        { code: 'CPPK / PRE / 01', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Logic in blocks.' },
        { code: 'CPPK / PRE / 02', slug: 'python-ai-kids-masterclass', title: 'Python for kids', blurb: 'The first typed language.' },
        { code: 'CPPK / PRE / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving', blurb: 'Puzzles, steps, patterns.' }
      ] },
      { num: 'II', h3: 'C++ and friends', sub: 'Ages 13 to 18', courses: [
        { code: 'CPPK / TEN / 01', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ for teens', blurb: 'Zero to data structures.' },
        { code: 'CPPK / TEN / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving and DSA', blurb: 'Contest-style thinking.' },
        { code: 'CPPK / TEN / 03', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'The AP CS A language.' }
      ] },
      { num: 'III', h3: 'Exams and further', sub: 'High school and beyond', courses: [
        { code: 'CPPK / FUR / 01', slug: 'ap-computer-science-a-java-exam-prep-course', title: 'AP CS A preparation', blurb: 'Java for the College Board exam.' },
        { code: 'CPPK / FUR / 02', slug: 'complete-game-development-masterclass-for-teens', title: 'Game development for teens', blurb: 'Engines and real games.' },
        { code: 'CPPK / FUR / 03', slug: 'cpp-programming-complete-masterclass-college', title: 'C++ for college', blurb: 'Deeper C++ for older students.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Lesson times',
    h2: 'C++ lessons that fit around school',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Evening batches that work from the East Coast to the West Coast.' },
      { time: 'Weekends', l: 'Weekend mornings suit students with busy weekdays.' },
      { time: '1-on-1', l: 'Often the right choice for an 11 or 12 year old starting C++.' }
    ],
    cells: [
      { h3: 'Readiness first', p: 'We tell you honestly if Python should come first.' },
      { h3: 'Code on screen', p: 'Students type, compile and debug in class.' },
      { h3: 'Errors, read aloud', p: 'Learning to read compiler messages is part of the plan.' },
      { h3: 'The same teacher', p: 'One teacher who knows your child&rsquo;s code.' },
      { h3: 'Anywhere in the US', p: 'A laptop or Chromebook and a browser.' },
      { h3: 'Batch or private', p: 'Fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Programs and projects our students built',
  projectsLede: 'Work from learners who began with programs like the three above. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Copied from Google, in parents&rsquo; own words.',

  fees: {
    h2: 'Fees',
    lede: 'Compilers cost nothing. What you pay for is a teacher, one month at a time and shown in US dollars, with no semester commitment; stop whenever a month ends.',
    free: ['A free first lesson', 'An honest readiness check', 'No card asked for'],
    group: ['Batches of fifteen to twenty', 'One teacher throughout', 'You choose the batch', 'Monthly billing'],
    one: ['Teacher and student only', 'Times to suit you', 'Paced for a younger learner']
  },

  faq: {
    eyebrow: 'Questions from parents',
    h2: 'C++ for kids: common questions',
    items: [
      { q: 'Can kids learn C++?', a: 'Yes. A child can learn C++ from about 11 or 12 if they read and type comfortably. For children of 9 or 10 we recommend starting with Scratch or Python and moving to C++ once they understand loops and variables.' },
      { q: 'Is C++ too hard for a 10 year old?', a: 'In our view it is a harder first language than a 10 year old needs, because of strict syntax and long error messages. A year of Python first usually makes C++ much easier.' },
      { q: 'Should my child learn Python or C++ first?', a: 'We usually recommend Python first. Choose C++ first if your child is 12 or older and aims at competitions such as USACO, or wants to understand how computers handle memory and speed.' },
      { q: 'Is C++ free to learn?', a: 'The tools are free. isocpp.org lists free compilers such as GCC (g++), Clang and Visual C++ Community, plus online compiler pages that run in a browser.' },
      { q: 'Can my child write C++ on a Chromebook?', a: 'Yes, using an online compiler page such as godbolt.org, Wandbox or ideone.com, which isocpp.org lists. Some only compile code; others also run it and show the output.' },
      { q: 'What version of C++ should kids learn?', a: 'Modern C++. The isocpp.org status page says C++23 has been published and work is under way on C++26. For beginners, the style matters more than the version number.' },
      { q: 'Do you need C++ for USACO?', a: 'Not at first. USACO accepts C, C++, Java and Python, and aims for every bronze problem to be fully solvable in Python. It says C++ is the only language supported at the international olympiad, so serious competitors usually learn it.' },
      { q: 'What is the first C++ program a child should write?', a: 'A short program that asks for their name and says hello, then a number guessing game with a loop. Both appear on this page, written in standard C++.' },
      { q: 'Do you offer a C++ course for kids under 13?', a: 'Yes. C++ for Kids is for ages 9 to 12, in a batch or one to one, and C++ for teens continues from 13. Some younger children start with Python or Scratch and move across.' },
      { q: 'What times are classes for US families?', a: 'Weekdays or weekends, flexible. Choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'How much are C++ classes?', a: 'The first lesson is free. Then families pay monthly for the teaching, and the fees section of this page shows the amount in US dollars.' }
    ]
  },

  elsewhere: {
    eyebrow: 'On this site',
    h2: 'Related pages',
    lede: 'More for US families weighing up C++.',
    items: [
      { href: '/c-plus-plus-classes-for-teens', label: 'C++ classes for teens', p: 'Our full C++ course page.' },
      { href: '/usaco-preparation-online-coaching', label: 'USACO preparation', p: 'Coaching for the US olympiad.' },
      { href: '/c-plus-plus-game-development', label: 'C++ game development', p: 'For teens who want to build games.' },
      { href: '/python-for-11-year-olds', label: 'Python for 11 year olds', p: 'The usual first step.' },
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'All our pages for US families.' },
      { href: '/c-plus-plus-for-beginners', label: 'C++ for beginners', p: 'For older beginners and adults.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Tell us your child&rsquo;s age and what they have coded so far. The teacher will try a small C++ program with them and tell you honestly whether to start with C++ or Python.',
    readFirst: 'If you would like to see the method first, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a live class, and the C++ syllabus sits on our <a class="ag-inline-link" href="/courses">courses</a> page.',
    note: 'Classes are online and our teachers work from India, so students anywhere in the United States join from home. For the fastest answer, message us on WhatsApp.',
    formNote: 'Free first lesson, no payment details taken.'
  },

  footer: {
    cols: [
      { h4: 'C++ and competitions', links: [
        { href: '/c-plus-plus-classes-for-teens', label: 'C++ classes for teens' },
        { href: '/usaco-preparation-online-coaching', label: 'USACO preparation' },
        { href: '/c-plus-plus-projects-for-students', label: 'C++ projects for students' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/online-coding-classes-for-kids-usa', label: 'Online classes for kids' },
        { href: '/coding-for-12-year-olds', label: 'Coding for 12 year olds' },
        { href: '/coding-for-13-year-olds', label: 'Coding for 13 year olds' }
      ] }
    ],
    bottomRight: 'Every number has a limit; know it first'
  },

  personalityCss: `
.ag-root.ag-cppk .ag-hero h1 { letter-spacing: -0.018em; }
.ag-root.ag-cppk .ag-capsule { border-left-width: 6px; border-radius: 2px; }
.ag-root.ag-cppk .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-cppk .ag-table caption { text-align: left; font-style: normal; }
.ag-root.ag-cppk .ag-code-note { line-height: 1.6; }
.ag-root.ag-cppk .ag-slots { gap: 0.9rem; }
`,

  dossier: {
    curriculumAuthority: 'isocpp.org Get Started and Standard status; en.cppreference.com pages on main, fundamental types, undefined behavior, vector::at, uniform_int_distribution and std::cin; usaco.org contest instructions; all read raw on 17 October 2026. Facts: free compilers g++, Clang, Visual C++ Community; online compilers godbolt.org, Wandbox, ideone.com; C++23 published, C++26 in progress; implicit return 0 from main; int at least 16 bits, long at least 32, long long at least 64; UB has no restrictions, includes signed overflow and out-of-bounds access; at() throws std::out_of_range; uniform_int_distribution on a closed interval; USACO free, C/C++/Java/Python, C++ only at IOI, 2 s vs 4 s, bronze solvable in Python.',
    localProject: 'Three standard C++ programs (ours): a greeting with std::cin, a 1 to 50 guessing game using random_device, mt19937 and uniform_int_distribution (at most 6 guesses because 2 to the power 6 = 64), and a vector of scores using .at() and catching std::out_of_range. An overflow worked example: 2,147,483,647 / 1,000 = about 2,147,483 seconds, / 86,400 = about 24.8 days. A readiness table by age and a 12-week plan. Lesson family: types and limits.',
    requiredMentions: ['why not learn in modern C++?', 'C++23 has been published', 'Visual C++ Community', 'godbolt.org', 'produces whole numbers on the closed interval', 'std::out_of_range', 'There are no restrictions on the behavior of the program.', 'At least 64 bits', '2,147,483 / 86,400', '2 to the power 6 is 64', 'There is never any fee for participation.', 'C++ is the only language supported at IOI'],
    sources: [
      { claim: 'Free compilers, online compiler pages, beginner books, and the invitation to learn modern C++.', url: 'https://isocpp.org/get-started' },
      { claim: 'C++23 published; C++26 in progress.', url: 'https://isocpp.org/std/status' },
      { claim: 'Integer type widths.', url: 'https://en.cppreference.com/w/cpp/language/types' },
      { claim: 'Undefined behavior: no restrictions; signed overflow and out-of-bounds examples.', url: 'https://en.cppreference.com/w/cpp/language/ub' },
      { claim: 'vector::at bounds checking and std::out_of_range.', url: 'https://en.cppreference.com/w/cpp/container/vector/at' },
      { claim: 'uniform_int_distribution, random_device and mt19937.', url: 'https://en.cppreference.com/w/cpp/numeric/random/uniform_int_distribution' },
      { claim: 'Implicit return 0 at the end of main.', url: 'https://en.cppreference.com/w/cpp/language/main_function' },
      { claim: 'USACO fee, languages, IOI, time limits and bronze in Python.', url: 'https://usaco.org/index.php?page=instructions' },
      { claim: 'AP Computer Science A uses a subset of the Java programming language.', url: 'https://apstudents.collegeboard.org/courses/ap-computer-science-a' }
    ],
    rejectedClaims: [
      'Outcome claims for the C++ for Kids course: none made (no results data yet).',
      'That AP Computer Science A uses C++: College Board describes it as using a subset of the Java programming language, so the page points AP CS A students to Java.',
      'Named USACO medallists listed on usaco.org: not used, under the cluster rule on naming people.',
      'Exact compiler commands and flags: not taken from a fetched source, so not printed.',
      'That we ran the three programs on this page: they use standard C++ described on cppreference, and the reader runs them.',
      'Any affiliation with USACO, the Standard C++ Foundation or cppreference: none.'
    ]
  }
};
