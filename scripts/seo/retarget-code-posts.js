#!/usr/bin/env node
/**
 * Subject-keyword push, exemplars 1 to 3: the three Python code posts that Google
 * already shows on page one for large code queries but that earn almost no clicks.
 * Search Console, page-filtered query view, 16 months to 2026-09-23:
 *
 *   pythonprogrammes.json        /blog/python-basic-programs-for-beginners
 *                                "simple python code" 1,319 impr @10.3, "python programs" 1,195 @13.8,
 *                                "basic python programs" 653 @8.3, "basic python code" 521 @11.3,
 *                                "simple python program" 434, "easy python code" 332
 *                                -> the post listed 35 programs and showed the code for none of them
 *   leap-year-python.json        /blog/how-to-write-a-leap-year-program-in-python
 *                                "leap year program in python" 605 @9.0, "leap year logic" 531 @3.4,
 *                                "leap year code" 319 @7.1 (0 clicks), "leap year program using functions"
 *                                73 @23, a "next leap year after a given year" exercise query
 *   menu-driveen-in-python.json  /blog/how-to-build-menu-driven-program-in-python
 *                                "how to get daily menu using python script" 10,530 @6.4 (0 clicks),
 *                                "menu driven program in python" 1,752 @8.4, "how to make a menu in python" 624
 *
 * Every code block added here comes from scripts/seo/code-posts/<module>.py and every
 * output block is what scripts/seo/code-posts/run_programs.py captured when it ran that
 * code (re-run it before this script if a program changes). Output that depends on the
 * clock or on randomness is labelled "Sample output".
 *
 * Idempotent: a post already carrying meta.retarget === MARK is skipped.
 *   python scripts/seo/code-posts/run_programs.py python_basic_programs   (and leap_year_programs, menu_programs)
 *   node scripts/seo/retarget-code-posts.js [--dry-run]
 *   npm run generate:blogs
 */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');
const DRY = process.argv.includes('--dry-run');
const DATA = path.join(ROOT, 'content', 'blog', 'data');
const RUNS = path.join(__dirname, 'code-posts');
const TODAY = '2026-09-23';
const MARK = 'code-posts-2026-09';

function load(name) { return JSON.parse(fs.readFileSync(path.join(DATA, name), 'utf8')); }
function save(name, j) { if (!DRY) fs.writeFileSync(path.join(DATA, name), JSON.stringify(j, null, 2) + '\n'); }
function runs(mod) { return JSON.parse(fs.readFileSync(path.join(RUNS, mod + '.out.json'), 'utf8')); }
function idx(secs, pred, label) { const i = secs.findIndex(pred); if (i === -1) throw new Error('not found: ' + label); return i; }
const H = (level, text, id) => (id ? { type: 'heading', level, text, id } : { type: 'heading', level, text });
const P = (text) => ({ type: 'paragraph', text });
const T = (headers, rows) => ({ type: 'table', headers, rows });
const isH = (t) => (s) => s.type === 'heading' && s.text === t;
const startsH = (t) => (s) => s.type === 'heading' && s.text.startsWith(t);
function addKeywords(meta, kws) { kws.forEach((k) => { if (!meta.keywords.includes(k)) meta.keywords.push(k); }); }
function codeAndOutput(p) {
  return [
    { type: 'code', language: 'python', code: p.code },
    { type: 'code', language: 'plaintext', title: p.sample ? 'Sample output (changes on every run)' : 'Output', code: p.output },
  ];
}

// The one conversion block each post carries: the live Python course for the reader's age.
const COURSE_DIR = path.join(ROOT, 'content', 'courses', 'data');
function course(slug) {
  for (const f of fs.readdirSync(COURSE_DIR).filter((x) => x.endsWith('.json'))) {
    let j; try { j = JSON.parse(fs.readFileSync(path.join(COURSE_DIR, f), 'utf8')); } catch (e) { continue; }
    const m = j.meta || j;
    if (m.slug === slug) return { url: '/courses/' + slug, title: m.title.split(':')[0] };
  }
  throw new Error('no course JSON with meta.slug ' + slug);
}
const KIDS = course('python-ai-kids-masterclass');
const TEENS = course('python-complete-masterclass-teens');
const ADULTS = course('python-programming-masterclass-zero-to-advanced-college');
function learnLive(lead) {
  return {
    type: 'callout', calloutType: 'tip', title: 'Learn Python live, with a teacher reading your code',
    text: `${lead} Ages 9 to 12: <a href='${KIDS.url}'>${KIDS.title}</a>. Ages 13 to 18: <a href='${TEENS.url}'>${TEENS.title}</a>. College students and adults: <a href='${ADULTS.url}'>${ADULTS.title}</a>. The first class is a free demo, so you can see how it is taught before you decide.`,
  };
}

// ────────────────────────────────────────────────────── 35 basic programs
(function basicPrograms() {
  const name = 'pythonprogrammes.json';
  const j = load(name); if (j.meta.retarget === MARK) return console.log('skip', name);
  const s = j.content.sections;
  const progs = runs('python_basic_programs');
  if (progs.length !== 35) throw new Error('expected 35 programs');

  j.meta.title = '35 Basic Python Programs for Beginners, With Code and Output';
  j.hero.title = j.meta.title; j.hero.featuredImage.alt = j.meta.title;
  j.meta.description = '35 simple Python programs for beginners, each with complete code and the real output it prints: numbers, loops, primes, strings, lists, files and utilities.';
  j.meta.tldr = 'Here are 35 basic Python programs for beginners, each with complete code you can copy and the exact output it prints when run. They climb in four levels, from Hello, World and adding two numbers to primes, palindromes, files and a password generator, and all of them run on Python 3.9 or later with nothing extra to install.';
  addKeywords(j.meta, ['python programs', 'simple python code', 'basic python code', 'basic python programs', 'simple python programs', 'easy python code', 'python code examples', 'python programs for beginners', 'python programs with output']);
  j.meta.readTime = '22 min read';
  j.meta.dateModified = TODAY; j.meta.retarget = MARK;

  // answer first
  s[1] = P('Here are 35 basic Python programs for beginners, each with the complete code and the exact output it prints when you run it. They climb in four levels: the absolute basics (printing, input, arithmetic), then loops and conditions (leap years, primes, factorials), then strings, lists and functions, and finally small real utilities such as a password generator and a countdown timer.');
  s[2] = P('Every program uses only what comes with Python 3.9 or later, so there is nothing to install. Type each one yourself rather than pasting it, run it, and compare what you see with the output block underneath. Where a program asks for input, the value after the prompt in the output is what was typed in.');
  s[3] = P('If you are stuck in "tutorial hell", freezing the moment you open a blank editor, this list is the way out: small programs, each teaching one idea, that you can finish in a sitting.');

  // at-a-glance table, before the first H2
  const teaches = ['print()', 'input() and float()', 'the math module', 'arithmetic with variables', 'tuple unpacking', 'the random module', 'f-string formatting', 'using a formula', 'if, elif and else', 'the modulo operator %', 'combining and / or', 'comparisons and max()', 'a for loop with break', 'nested loops and for-else', 'building a result in a loop', 'range()', 'multiple assignment', 'strings of digits and sum()', 'a loop against a formula', 'lambda and map()', 'ord() and chr()', 'a while loop and math.gcd()', 'functions stored in a dictionary', 'slicing with [::-1]', 'the string module and join()', 'split() and sort()', 'counting with a dictionary', 'merging dictionaries', 'try and except', 'with open() for files', 'the datetime module', 'sorted()', 'the secrets module', 'time.sleep()', 'list comprehensions'];
  const level = (n) => (n <= 10 ? '1' : n <= 20 ? '2' : n <= 30 ? '3' : '4');
  const firstH2 = idx(s, (x) => x.type === 'heading' && x.level === 2, 'first h2');
  s.splice(firstH2, 0,
    H(2, 'All 35 Python programs at a glance', 'at-a-glance'),
    P('Use this table to jump to the idea you need. Each program below has its code and its output.'),
    T(['#', 'Program', 'What it teaches', 'Level'], progs.map((p) => [String(p.n), p.title.replace(/"/g, '&quot;'), teaches[p.n - 1], level(p.n)])));

  // level headings: no dashes
  s.forEach((x) => { if (x.type === 'heading' && /–/.test(x.text)) x.text = x.text.replace(/\s*–\s*/g, ' to '); });

  // code + output under every numbered program
  const ownPost = {
    11: `The <a href='/blog/how-to-write-a-leap-year-program-in-python'>leap year program in Python</a> guide explains the three rules and shows four more versions.`,
    18: `There is a full walk-through, with the other Armstrong numbers, in <a href='/blog/armstrong-number-python-complete-guide-examples-code'>Armstrong numbers in Python</a>.`,
    22: `For LCM as well, and why Euclid's method is fast, read <a href='/blog/how-to-find-hcf-and-lcm-in-python'>HCF and LCM in Python</a>.`,
  };
  const descFix = {
    1: 'The classic rite of passage for every programmer: get the computer to say hello back to you.',
    2: 'Ask the user for two numbers, add them and print the total. <code>input()</code> always returns text, so convert each answer with <code>float()</code> (or <code>int()</code> for whole numbers) before adding.',
    33: 'Build a 12-character password that mixes lowercase and uppercase letters, digits and symbols. Use the <code>secrets</code> module rather than <code>random</code>: the Python documentation warns that the generators in <code>random</code> should not be used for security purposes and points to <code>secrets</code> instead.',
    35: 'Take a list of 20 numbers and, instead of a standard <code>for</code> loop, use a list comprehension to build new lists in one line: the even numbers, and the squares of the odd ones.',
  };
  progs.forEach((p) => {
    const h = idx(s, startsH(p.n + '. '), 'program ' + p.n);
    s[h].text = p.n + '. ' + p.title;
    if (s[h + 1].type !== 'paragraph') throw new Error('no description under program ' + p.n);
    if (descFix[p.n]) s[h + 1].text = descFix[p.n];
    const add = codeAndOutput(p);
    if (ownPost[p.n]) add.push(P(ownPost[p.n]));
    s.splice(h + 2, 0, ...add);
  });

  // FAQ, then the conclusion with the one course block
  const concl = idx(s, isH('Conclusion'), 'conclusion');
  s.splice(concl, 0,
    H(2, 'Python programs: common questions', 'faq'),
    { type: 'accordion', items: [
      { title: 'What are some simple Python programs for beginners?', content: 'Start with printing Hello, World, adding two numbers, checking whether a number is even or odd, converting Celsius to Fahrenheit and printing a multiplication table. Then move to loops and conditions: leap years, factorials, prime numbers and the Fibonacci sequence. All of them are on this page with code and output.' },
      { title: 'How do I run these Python programs?', content: 'Install Python 3 from python.org, save a program in a file ending in .py, and run it from a terminal with <code>python program.py</code> (on macOS and Linux the command is often <code>python3</code>). You can also paste it into IDLE, which comes with Python, or into an online Python editor.' },
      { title: 'Why is my output slightly different from the page?', content: 'Programs 6, 31 and 33 use randomness or the clock, so they print something new each time; their output is marked as a sample. Everywhere else your output should match exactly if you type the same input. A number read with <code>float()</code> prints with a decimal point, so 7 becomes 7.0.' },
      { title: 'Do I need to install any packages?', content: 'No. Every program uses only the standard library that ships with Python 3.9 or later: math, random, string, datetime, secrets and time.' },
      { title: 'How long does it take to finish all 35 programs?', content: 'At two or three programs a day, which is a pace most beginners can keep up, the list takes about two weeks. Speed matters less than typing each one yourself and changing it until you can predict what it will print.' },
      { title: 'Where can I find Python programs for CBSE Class 11 and 12?', content: `The Class 12 programs go further than this page, into text, binary and CSV files and the stack. We collect them in <a href='/blog/python-programs-for-cbse-class-12'>Python programs for CBSE Class 12</a>.` },
      { title: 'What should I learn after these basic programs?', content: `Join programs together. A <a href='/blog/how-to-build-menu-driven-program-in-python'>menu driven program in Python</a> turns several of these into one app, <a href='/blog/exception-handling-in-python'>exception handling</a> stops it crashing on bad input, and <a href='/blog/star-pattern-programs-in-python'>star pattern programs</a> are good practice for nested loops.` },
    ] });
  const c2 = idx(s, isH('Conclusion'), 'conclusion');
  const last = s.length - 1;
  if (s[last].type !== 'paragraph' || !/Modern Age Coders/.test(s[last].text)) throw new Error('unexpected last paragraph in ' + name);
  s[last] = learnLive('Working through a list alone is how most people start; the jump to writing your own programs comes faster when someone reads your code and asks why it works.');
  if (c2 >= last) throw new Error('conclusion order');
  save(name, j); console.log('retargeted', name);
})();

// ────────────────────────────────────────────────────── leap year
(function leapYear() {
  const name = 'leap-year-python.json';
  const j = load(name); if (j.meta.retarget === MARK) return console.log('skip', name);
  const s = j.content.sections;
  const progs = runs('leap_year_programs');
  const get = (n) => progs.find((p) => p.n === n);

  j.meta.title = 'Leap Year Program in Python: Logic, Code and Output';
  j.hero.title = j.meta.title; j.hero.featuredImage.alt = j.meta.title;
  j.meta.description = 'Leap year program in Python: the logic (divisible by 4, not by 100 unless by 400), code with if-else, a function, one line and calendar.isleap, with output.';
  j.meta.tldr = 'A year is a leap year if it is divisible by 4 and not by 100, or if it is divisible by 400. In Python that is one line, (year % 4 == 0 and year % 100 != 0) or year % 400 == 0, or a call to calendar.isleap(year). This guide shows the logic, four ways to write it, programs for the next leap year and leap years in a range, each with its output, and a test against Python itself.';
  addKeywords(j.meta, ['leap year program in python', 'leap year code', 'leap year logic', 'leap year code in python', 'leap year program in python using functions', 'next leap year python', 'what is leap year in programming']);
  j.meta.readTime = '10 min read';
  j.meta.dateModified = TODAY; j.meta.retarget = MARK;

  s[1] = P('A year is a leap year if it is divisible by 4 and not by 100, or if it is divisible by 400. In Python the whole rule fits on one line, <code>(year % 4 == 0 and year % 100 != 0) or year % 400 == 0</code>, and the standard library already has it as <code>calendar.isleap(year)</code>. Here it is as a function, with its output:');
  s[2] = P('That is why 1900 and 2100 are not leap years while 2000 is. Below: the logic in plain words, three ways to write the check, programs that find the next leap year and every leap year in a range, and a way to prove your function right. It is a common beginner exercise and interview question because it tests whether you can combine conditions without breaking the logic.');
  s.splice(2, 0, ...codeAndOutput(get(1)));

  const logic = idx(s, (x) => x.type === 'paragraph' && /365\.2425/.test(x.text), 'orbit paragraph');
  s[logic] = P('The year of the seasons is a little shorter than 365.25 days, so adding a day every fourth year would slowly push the calendar ahead of the seasons. The Gregorian calendar corrects this by dropping three leap days every 400 years (1700, 1800 and 1900 were not leap years; 2000 was). That leaves 97 leap years in every 400, an average year of 365 + 97/400 = 365.2425 days. The rules your code must follow are:');

  const cheat = idx(s, (x) => x.type === 'paragraph' && /C-level code/.test(x.text), 'cheat code paragraph');
  s[cheat] = P(`<strong>The shortcut:</strong> <code>calendar.isleap()</code> returns <code>True</code> or <code>False</code> for you. It is not magic: inside Python's own calendar module it is the same three rules, written as <code>year % 4 == 0 and (year % 100 != 0 or year % 400 == 0)</code>. In real projects that work with dates, use it, and browse the <a href='https://docs.python.org/3/library/calendar.html' target='_blank' rel='noopener noreferrer'>calendar module documentation</a> for what else it can do.`);

  const mistakes = idx(s, isH('Common Mistakes Beginners Make'), 'mistakes');
  s.splice(mistakes, 0,
    H(2, 'More leap year programs, with output', 'more-programs'),
    P('These four come up as exercises again and again. Each reuses the one-line rule.'),
    H(3, 'Leap year program in Python using functions'),
    P('Put the rule in a function with a docstring, then call it on a year the user types. Keeping the logic in a function means you can test it on many years without touching the input code.'),
    ...codeAndOutput(get(2)),
    H(3, 'Find the next leap year after a given year'),
    P('Start one year after the input and count upwards until the function says yes. Starting after the input matters: if the user types a leap year such as 2024, the answer must be the following one, 2028. Typing 2023 gives 2024.'),
    ...codeAndOutput(get(3)),
    H(3, 'Print all leap years between two years'),
    P('A list comprehension with the same function collects every leap year in a range. Notice that 1900 is missing from the output: divisible by 100, not by 400.'),
    ...codeAndOutput(get(4)),
    H(3, 'How many days are in February?'),
    P('<code>calendar.monthrange(year, month)</code> returns the weekday of the first day and the number of days in the month, so February is 29 days long exactly when the year is a leap year.'),
    ...codeAndOutput(get(5)));

  const concl = idx(s, isH('Conclusion'), 'conclusion');
  s.splice(concl, 0,
    H(3, 'Mistake 3: Testing Only Easy Years'),
    P('A program that says 2024 is a leap year can still be wrong about 1900 or 2100. Test the century years, or better, compare your function with <code>calendar.isleap</code> for every year from 1 to 3000. An empty list of disagreements means your logic matches Python\'s own.'),
    ...codeAndOutput(get(6)),
    H(2, 'Leap year in Python: common questions', 'faq'),
    { type: 'accordion', items: [
      { title: 'What is the leap year logic in programming?', content: 'A year is a leap year if it is divisible by 4 and not divisible by 100, or if it is divisible by 400. In code: <code>(year % 4 == 0 and year % 100 != 0) or year % 400 == 0</code>. The modulo operator % gives the remainder, so <code>year % 4 == 0</code> means the year divides exactly by 4.' },
      { title: 'Is 2100 a leap year?', content: 'No. 2100 is divisible by 4 and by 100 but not by 400, so it is not a leap year. 2000 was a leap year because it is divisible by 400.' },
      { title: 'What is the next leap year after 2024?', content: '2028. The program above finds it by starting at 2025 and counting up until the leap year rule is true.' },
      { title: 'What is the easiest way to check a leap year in Python?', content: 'Import the calendar module and call <code>calendar.isleap(year)</code>. It returns True or False and uses the same three rules. Writing the rule yourself is still worth doing once, because the exercise is about combining conditions.' },
      { title: 'Why is my leap year program wrong for 1900?', content: 'Because it probably checks only divisibility by 4. 1900 divides by 4 but also by 100 and not by 400, so it is not a leap year. Add the 100 and 400 rules, or test your function against <code>calendar.isleap</code> as shown above.' },
      { title: 'Why does input() break my leap year program?', content: 'input() always returns text. <code>"2024" % 4</code> does not do arithmetic, so convert first: <code>year = int(input("Enter a year: "))</code>.' },
    ] });

  const cta = idx(s, (x) => x.type === 'paragraph' && /professional Python masterclasses/.test(x.text), 'cta paragraph');
  s[cta] = learnLive('A leap year check is small, but it is exactly the kind of logic our students learn to reason about before they write a line.');
  save(name, j); console.log('retargeted', name);
})();

// ────────────────────────────────────────────────────── menu driven program
(function menuDriven() {
  const name = 'menu-driveen-in-python.json';
  const j = load(name); if (j.meta.retarget === MARK) return console.log('skip', name);
  const s = j.content.sections;
  const progs = runs('menu_programs');
  const get = (n) => progs.find((p) => p.n === n);

  j.meta.title = 'Menu Driven Program in Python (With a Daily Menu Script)';
  j.hero.title = j.meta.title; j.hero.featuredImage.alt = j.meta.title;
  j.meta.description = "Build a menu driven program in Python with a while loop and if-elif, see its real output, stop bad input crashing it, and print today's menu with a script.";
  j.meta.tldr = "A menu driven program in Python prints numbered choices inside a while True loop, reads the choice with input(), runs the matching code with if and elif, and stops with break when the user picks Exit. This guide builds a calculator menu with its output, a number reader that never crashes, and a daily menu script that prints today's dishes from a dictionary or a file.";
  addKeywords(j.meta, ['menu driven program in python', 'how to make a menu in python', 'python menu', 'menu in python', 'python menu example', 'how to get daily menu using python script', 'daily menu python script', 'menu driven calculator program in python']);
  j.meta.readTime = '13 min read';
  j.meta.dateModified = TODAY; j.meta.retarget = MARK;

  s[1] = P('A menu driven program in Python prints a numbered list of choices inside a <code>while True</code> loop, reads the choice with <code>input()</code>, runs the matching code with <code>if</code> and <code>elif</code>, and stops with <code>break</code> when the user picks Exit. That is the whole pattern; everything else is what each choice does.');
  s[2] = P("Below you will build a calculator menu and see exactly what it prints, make it survive bad input, and then write a script that prints today's menu, from a dictionary or from a file, and turn it into a menu driven canteen program.");

  const calc = idx(s, (x) => x.type === 'code' && /Main Menu/.test(x.code), 'calculator code');
  s.splice(calc, 1, ...codeAndOutput(get(1)));
  const intro = idx(s, (x) => x.type === 'paragraph' && /complete, working code/.test(x.text), 'calculator intro');
  s[intro] = P('Here is the complete, working code, and underneath it what one run looks like: add 8 and 2, type a choice that does not exist, then exit.');

  const tryCode = idx(s, (x) => x.type === 'code' && /except ValueError/.test(x.code), 'try snippet');
  s.splice(tryCode, 1, ...codeAndOutput(get(2)));
  const tryIntro = idx(s, (x) => x.type === 'paragraph' && /we "try" to get a number/.test(x.text), 'try intro');
  s[tryIntro] = P('Instead of letting the program crash, put the conversion in a small function that tries, catches the <code>ValueError</code>, and asks again. Use <code>read_number()</code> wherever the menu needs a number:');

  const realWorld = idx(s, (x) => x.type === 'heading' && /Real-World Use Cases/.test(x.text), 'real world');
  s.splice(realWorld, 0,
    H(2, 'How to get a daily menu with a Python script', 'daily-menu'),
    P("A daily menu script answers one question, what is on today, and it needs two things: the menu for each day of the week, and today's day name. Python's <code>datetime</code> module gives the day name with <code>date.today().strftime(\"%A\")</code>, and a dictionary keyed by day name holds the menu."),
    ...codeAndOutput(get(3)),
    P('The output above is from a Wednesday; run it on another day and you get that day\'s dishes. If a canteen, a school or a family keeps the menu in a file, read it from there instead, so changing the menu never means editing code. JSON suits this because Python reads it straight into a dictionary:'),
    ...codeAndOutput(get(4)),
    P('Now combine the two ideas from this guide: a menu driven program whose choices show the whole week or one chosen day.'),
    ...codeAndOutput(get(5)),
    P('If the menu is only published on a website, the script first has to download the page (with <code>urllib.request</code> from the standard library, or the <code>requests</code> package) and then pick the dishes out of the HTML. Check that the site allows it, and use a JSON feed or a downloadable file if the site offers one; it is far more reliable than scraping a page whose layout can change.'));

  const concl = idx(s, isH('Conclusion'), 'conclusion');
  s.splice(concl, 0,
    H(2, 'Menu driven programs in Python: common questions', 'faq'),
    { type: 'accordion', items: [
      { title: 'What is a menu driven program in Python?', content: 'A program that shows the user a numbered list of options, waits for a choice, runs the code for that choice and then shows the menu again, until the user chooses to exit. It is built from a <code>while True</code> loop, <code>input()</code>, <code>if</code>/<code>elif</code> and <code>break</code>.' },
      { title: 'How do I make a menu in Python?', content: 'Print the options inside <code>while True:</code>, read the choice with <code>choice = input("Choice: ")</code>, compare it with <code>if choice == "1":</code> and so on, and call <code>break</code> on the Exit option. Put each action in its own function so the loop stays short.' },
      { title: 'How do I get a daily menu using a Python script?', content: `Store the menu in a dictionary keyed by day name, or in a JSON file, and look up <code>date.today().strftime("%A")</code>. The <a href='#daily-menu'>daily menu section</a> above has three working versions with their output.` },
      { title: 'How do I stop the menu crashing when the user types a letter?', content: 'Wrap the conversion in <code>try</code>/<code>except ValueError</code> inside a loop, as in <code>read_number()</code> above, so bad input prints a message and asks again instead of ending the program.' },
      { title: 'Can I use match-case instead of if-elif for a menu?', content: 'Yes, from Python 3.10. <code>match choice:</code> with <code>case "1":</code>, <code>case "2":</code> and <code>case _:</code> for anything else reads neatly for long menus. if-elif works on every Python 3 version.' },
      { title: 'How do I write a menu driven calculator program in Python?', content: 'Write one function per operation, show them as numbered choices, read two numbers for the chosen operation and print the result, looping until the user exits. The calculator at the top of this guide does exactly that; add multiply as a fourth operation for practice.' },
    ] });

  const cta = idx(s, (x) => x.type === 'paragraph' && /Explore the complete Python masterclasses/.test(x.text), 'cta paragraph');
  s[cta] = learnLive('Menus are where beginners first build something that feels like an app; our students go on from here to files, classes and their own projects.');
  save(name, j); console.log('retargeted', name);
})();
