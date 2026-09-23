#!/usr/bin/env node
/**
 * Subject-keyword sweep (owner "go ahead" 2026-09-23 after the three Python exemplars,
 * see scripts/seo/retarget-code-posts.js). Same recipe: answer first, facts checked at
 * the source, FAQ accordion (FAQPage schema), one age-routed course block, no prices.
 *
 *   javaide.json  /blog/best-java-ides-for-beginners
 *     Search Console, page-filtered, 16 months to 2026-09-23: "best java ide" 5,659 impr @8.0
 *     (0.1% CTR), "best ide for java" 1,322 @8.3, "best java ide for beginners" 675 @5.0,
 *     "which ide is best for java" 285 @9.4, "simple java ide" 252 @4.7, "best java ide for windows" 183.
 *     Vendor pages read with curl on 2026-09-23:
 *       blog.jetbrains.com/idea/2025/07/intellij-idea-unified-distribution-plan: from 2025.3 the
 *         Community Edition is no longer a separate product; one installer, free without a
 *         subscription, Ultimate features need one.
 *       netbeans.apache.org download: Apache NetBeans 31, released August 10, 2026, four releases a year.
 *       bluej.org: "A free Java Development Environment designed for beginners", 6.0.1, 4 September 2026, GPL v2.
 *       jgrasp.org: 2.1.0_02, September 22, 2026; runs on Java 11 or higher.
 *       greenfoot.org: 3.9.0, 29 October 2024; "programmed in standard textual Java code"; GPL v2.
 *       eclipse.org packages: Eclipse IDE 2026-09 R, "Eclipse IDE for Java Developers".
 *       code.visualstudio.com/docs/languages/java: "Extension Pack for Java".
 *       openjdk.org/jeps/222: jshell, Release 9.
 *     Removed: DrJava and JCreator (drjava.org, jcreator.com/.org no longer belong to the projects;
 *     one serves unrelated content, the other a gambling site), an "Apache NetBeans (Student
 *     Edition)" that does not exist, "Greenfoot teaches a simplified version of Java" (false),
 *     "NetBeans updates come out slowly" (quarterly), a sentence attributed to Oracle's tutorials,
 *     and the "1-2 weeks" figure.
 *
 * Idempotent (meta.retarget === MARK skips).  node scripts/seo/retarget-sweep-posts.js [--dry-run]
 * then npm run generate:blogs.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const os = require('os');
const { execFileSync } = require('child_process');
const ROOT = path.resolve(__dirname, '..', '..');
const DRY = process.argv.includes('--dry-run');
const DATA = path.join(ROOT, 'content', 'blog', 'data');
const TODAY = '2026-09-23';
const MARK = 'sweep-2026-09';

function load(name) { return JSON.parse(fs.readFileSync(path.join(DATA, name), 'utf8')); }
function save(name, j) { if (!DRY) fs.writeFileSync(path.join(DATA, name), JSON.stringify(j, null, 2) + '\n'); }
function idx(secs, pred, label) { const i = secs.findIndex(pred); if (i === -1) throw new Error('not found: ' + label); return i; }
const H = (level, text, id) => (id ? { type: 'heading', level, text, id } : { type: 'heading', level, text });
const P = (text) => ({ type: 'paragraph', text });
const T = (headers, rows) => ({ type: 'table', headers, rows });
const isH = (t) => (s) => s.type === 'heading' && s.text === t;
const pStarts = (t) => (s) => s.type === 'paragraph' && s.text.startsWith(t);
function addKeywords(meta, kws) { kws.forEach((k) => { if (!meta.keywords.includes(k)) meta.keywords.push(k); }); }

const COURSE_DIR = path.join(ROOT, 'content', 'courses', 'data');
function course(slug) {
  for (const f of fs.readdirSync(COURSE_DIR).filter((x) => x.endsWith('.json'))) {
    let j; try { j = JSON.parse(fs.readFileSync(path.join(COURSE_DIR, f), 'utf8')); } catch (e) { continue; }
    const m = j.meta || j;
    if (m.slug === slug) return { url: '/courses/' + slug, title: m.title.split(':')[0] };
  }
  throw new Error('no course JSON with meta.slug ' + slug);
}

// run a single-file Java program (java 11+ source launcher) and return what it printed
function runJava(className, code) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'mac-java-'));
  const file = path.join(dir, className + '.java');
  fs.writeFileSync(file, code);
  const out = execFileSync('java', [file], { cwd: dir, encoding: 'utf8' });
  fs.rmSync(dir, { recursive: true, force: true });
  return out.replace(/\r\n/g, '\n').replace(/\n+$/, '');
}

// ────────────────────────────────────────────────────── best Java IDEs
(function javaIde() {
  const name = 'javaide.json';
  const j = load(name); if (j.meta.retarget === MARK) return console.log('skip', name);
  const s = j.content.sections;
  const TEENS = course('java-programming-masterclass-for-teens');
  const ICSE = course('icse-computer-applications-java-bluej-course');
  const COLLEGE = course('complete-java-programming-masterclass-college');

  j.meta.title = 'Best Java IDE for Beginners in 2026: 7 Free IDEs Compared';
  j.hero.title = j.meta.title; j.hero.featuredImage.alt = 'Java IDEs for beginners compared';
  j.meta.description = 'The best Java IDE for beginners in 2026: IntelliJ IDEA, Eclipse, NetBeans, VS Code, BlueJ, jGRASP and Greenfoot compared, versions checked in September.';
  j.meta.tldr = 'For most beginners in 2026 the best Java IDE is IntelliJ IDEA, which since its 2025.3 release is one free download (the separate Community Edition was retired; paid features need a subscription). School students usually start in BlueJ, and anyone learning several languages can use VS Code with the Extension Pack for Java. All seven IDEs compared here are free, with versions checked on 23 September 2026.';
  addKeywords(j.meta, ['best ide for java', 'best java ide for beginners', 'which ide is best for java', 'simple java ide', 'best java ide for windows', 'java ides', 'intellij idea community edition', 'free java ide']);
  j.meta.readTime = '12 min read';
  j.meta.dateModified = TODAY; j.meta.retarget = MARK;

  s[1] = P('For most beginners in 2026 the best Java IDE is <strong>IntelliJ IDEA</strong>. Since its 2025.3 release JetBrains ships one download that is free to use without a subscription, replacing the old Community Edition; only the former Ultimate features need a paid plan. If you are a school student, <strong>BlueJ</strong> is the simplest place to start, and if you want one light editor for Java, Python and web code, use <strong>VS Code</strong> with Microsoft\'s Extension Pack for Java.');
  s[2] = P('All seven IDEs below are free. The table gives the version each project was offering when we checked their official sites on 23 September 2026, followed by what each one is like to learn on, and the questions beginners ask most.');
  s.splice(3, 0,
    T(['IDE', 'Version on 23 Sep 2026', 'Cost', 'Best for'], [
      ['IntelliJ IDEA', 'Single download since 2025.3', 'Free without a subscription; extra features paid', 'Beginners aiming at professional Java'],
      ['Eclipse IDE', '2026-09', 'Free, open source', 'Students whose course uses Eclipse'],
      ['Apache NetBeans', '31 (10 Aug 2026)', 'Free, open source', 'A tidy all-in-one start, Swing and JavaFX'],
      ['VS Code + Extension Pack for Java', 'Extension pack from Microsoft', 'Free', 'Learning Java alongside other languages'],
      ['BlueJ', '6.0.1 (4 Sep 2026)', 'Free, open source', 'School students and first objects'],
      ['jGRASP', '2.1.0_02 (22 Sep 2026)', 'Free download', 'Seeing program structure as diagrams'],
      ['Greenfoot', '3.9.0 (29 Oct 2024)', 'Free, open source', 'Younger learners who want to make games'],
    ]));

  const oracle = idx(s, (x) => x.type === 'paragraph' && /Oracle's Java tutorials/.test(x.text), 'oracle paragraph');
  s[oracle] = P('That short loop between typing code and seeing it run, with mistakes flagged as you go, is what keeps beginners going through the first weeks.');

  const list = idx(s, isH('10 Best Java IDEs for Beginners'), 'list heading');
  s[list].text = '7 Free Java IDEs for Beginners, Compared';
  if (s[list + 1].type === 'image') s.splice(list + 1, 1); // the old image says "10"

  // 1. IntelliJ IDEA
  const ij = idx(s, isH('1. IntelliJ IDEA Community Edition'), 'intellij');
  s[ij].text = '1. IntelliJ IDEA (free, formerly Community Edition)';
  s[ij + 1] = P('<strong>What it is:</strong> JetBrains\' Java IDE. Until 2025 it came as a free Community Edition and a paid Ultimate Edition; from the 2025.3 release there is one installer, fully usable for free, with the former Ultimate features unlocked by a subscription.');
  s[ij + 3] = P('<strong>Pros:</strong> Many professional Java developers work in it, so the habits you build carry straight over. Its code inspections catch mistakes before you run the program, and the free feature set covers everything a learner needs.');
  s[ij + 4] = P('<strong>Cons:</strong> It is heavier than the other IDEs here, so older computers can feel slow, and there are more menus to learn at first. Some advanced framework features need the paid subscription.');
  s[ij + 6] = P('<strong>Price:</strong> Free to use; subscription for the extra features | <strong>Platform:</strong> Windows, macOS, Linux');

  // 2. Eclipse: its pros claimed it "works fine on slower computers", which the guidance below contradicts
  const ec = idx(s, pStarts('<strong>Pros:</strong> Completely free with no paid versions.'), 'eclipse pros');
  s[ec].text = s[ec].text.replace(' Works fine on slower computers.', '');

  // 3. NetBeans
  const nb = idx(s, isH('3. NetBeans'), 'netbeans');
  s[nb].text = '3. Apache NetBeans';
  s[nb + 1] = P('<strong>What it is:</strong> A free, open-source IDE from the Apache Software Foundation, released four times a year; version 31 came out on 10 August 2026.');
  s[nb + 3] = P('<strong>Pros:</strong> Easy to install with little setup, and clear enough for a first project. Its visual GUI builder makes it a good place to learn Swing and JavaFX (the toolkits for programs with buttons and windows). Free and open source.');
  s[nb + 4] = P('<strong>Cons:</strong> Fewer plugins than Eclipse or IntelliJ, fewer advanced refactoring tools than IntelliJ, and less common in company teams than the other two.');

  // 4. VS Code
  const vs = idx(s, isH('4. Visual Studio Code (with Java Extensions)'), 'vscode');
  s[vs + 1] = P('<strong>What it is:</strong> Microsoft\'s free, lightweight code editor. It becomes a Java IDE once you install the Extension Pack for Java, a bundle of extensions Microsoft recommends (language support by Red Hat, a debugger, a test runner, Maven and project management).');
  s[vs + 3] = P('<strong>Pros:</strong> Fast to start, clean to look at, and the same editor works for Python, JavaScript and many other languages, which suits anyone learning more than one.');

  // 5. BlueJ
  const bj = idx(s, isH('5. BlueJ'), 'bluej');
  s[bj + 1] = P('<strong>What it is:</strong> In its own words, "a free Java Development Environment designed for beginners". Version 6.0.1 was released on 4 September 2026.');

  // drop DrJava and JCreator, rename jGRASP and Greenfoot, drop the invented student edition
  const dr = idx(s, isH('6. DrJava'), 'drjava');
  const jg = idx(s, isH('7. JGrasp'), 'jgrasp');
  s.splice(dr, jg - dr);
  const jg2 = idx(s, isH('7. JGrasp'), 'jgrasp 2');
  s[jg2].text = '6. jGRASP';
  s[jg2 + 1] = P('<strong>What it is:</strong> A lightweight IDE built to show the structure of your code as diagrams, from Auburn University. Version 2.1.0_02 was released on 22 September 2026 and runs anywhere Java 11 or later runs.');
  s[jg2 + 3] = P('<strong>Pros:</strong> Its Control Structure Diagrams and data-structure views help visual learners see how loops, branches, lists and arrays behave. Light and simple, and a free download.');
  const jc = idx(s, isH('8. JCreator'), 'jcreator');
  const gf = idx(s, isH('9. Greenfoot'), 'greenfoot');
  s.splice(jc, gf - jc);
  const gf2 = idx(s, isH('9. Greenfoot'), 'greenfoot 2');
  s[gf2].text = '7. Greenfoot';
  s[gf2 + 1] = P('<strong>What it is:</strong> A learning IDE for making games and simulations, from the team behind BlueJ. You create "actors" that live in "worlds"; version 3.9.0 was released on 29 October 2024.');
  s[gf2 + 3] = P('<strong>Pros:</strong> Learning Java through games is fun, which keeps younger beginners going, and there are plenty of example scenarios to learn from. Free and open source.');
  s[gf2 + 4] = P('<strong>Cons:</strong> Programs are written in standard Java, so everything you learn carries over, but the world-and-actor setup is made for games and simulations; for other programs you will move to another IDE.');
  const se = idx(s, isH('10. Apache NetBeans (Student Edition)'), 'student edition');
  const choose = idx(s, isH('How to Choose the Right Java IDE for Your Needs'), 'choose');
  s.splice(se, choose - se,
    H(3, 'What happened to DrJava and JCreator?'),
    P('Older lists, including an earlier version of this one, recommended DrJava and JCreator. When we checked on 23 September 2026, their old official websites no longer belonged to the projects: one showed unrelated articles and the other a gambling site. We no longer recommend them, and we suggest you do not download Java tools from those addresses.'));

  // choosing, first program, and small fixes
  const quick = idx(s, pStarts('Learning several programming languages?'), 'quick test paragraph');
  s[quick] = P('Learning several programming languages? Visual Studio Code works for Java, Python, JavaScript and more. Want to try one line of Java without making a project? Every JDK since Java 9 includes <code>jshell</code>, an interactive shell: type <code>jshell</code> in a terminal and then any Java expression.');
  const older = idx(s, pStarts('Think about your computer.'), 'computer paragraph');
  s[older] = P('Think about your computer. IntelliJ IDEA and Eclipse are the heaviest here and like a recent machine. Older computers are happier with NetBeans, BlueJ or jGRASP, and VS Code uses little disk space.');

  const helloCode = 'public class HelloIDE {\n    public static void main(String[] args) {\n        System.out.println("My Java IDE works!");\n\n        int total = 0;\n        for (int i = 1; i <= 10; i++) {\n            total += i;\n        }\n        System.out.println("1 + 2 + ... + 10 = " + total);\n    }\n}';
  const helloOut = runJava('HelloIDE', helloCode);
  if (helloOut !== 'My Java IDE works!\n1 + 2 + ... + 10 = 55') throw new Error('unexpected Java output: ' + helloOut);
  const tipsH = idx(s, isH('Tips for Beginners Using Java IDEs'), 'tips');
  s.splice(tipsH, 0,
    H(3, 'Test your new IDE with this program'),
    P('Create a class called <code>HelloIDE</code> (the file must be named <code>HelloIDE.java</code>), paste this in and press Run. If you see the two lines of output below, your JDK and IDE are set up correctly.'),
    { type: 'code', language: 'java', code: helloCode },
    { type: 'code', language: 'plaintext', title: 'Output', code: helloOut });

  const weeks = idx(s, pStarts('Learning a new IDE takes about'), 'weeks paragraph');
  s[weeks] = P('Moving to a new IDE is mostly a matter of finding familiar things in new places: the run button, the debugger, the project view. The Java you know does not change.');
  const mc = idx(s, pStarts('For structured learning that works with any IDE'), 'masterclass paragraph');
  s[mc] = { type: 'callout', calloutType: 'tip', title: 'Learn Java live, in whichever IDE your school uses', text: `An IDE only helps once you know what to type. Ages 13 to 18: <a href='${TEENS.url}'>${TEENS.title}</a>. ICSE Class 9 and 10, in BlueJ: <a href='${ICSE.url}'>${ICSE.title}</a>. College students and adults: <a href='${COLLEGE.url}'>${COLLEGE.title}</a>. The first class is a free demo, so you can see how it is taught before you decide.` };

  // FAQ: heading + paragraph pairs -> accordion (FAQPage schema), with the answers brought up to date
  const faqH = idx(s, (x) => x.type === 'heading' && x.id === 'faq', 'faq heading');
  const finalH = idx(s, isH('Final Thoughts'), 'final thoughts');
  const items = [
    { title: 'Which Java IDE is best for absolute beginners?', content: 'BlueJ, if you want the simplest possible start: it shows your classes as a diagram and lets you create objects and call their methods by clicking. NetBeans or IntelliJ IDEA suit a beginner who wants an IDE they can keep using as their programs grow. All three are free.' },
    { title: 'What is the best IDE for Java in 2026?', content: 'For most learners, IntelliJ IDEA: one free download since the 2025.3 release, strong code inspections, and the IDE many professional Java developers use. Eclipse and NetBeans are good free alternatives, and VS Code with the Extension Pack for Java suits people who code in several languages.' },
    { title: 'Is IntelliJ IDEA Community Edition still available?', content: 'Not as a separate product. From the 2025.3 release JetBrains distributes one IntelliJ IDEA installer. Without a subscription it stays fully usable for free, with the feature set that used to be the Community Edition and more; the former Ultimate features need a subscription.' },
    { title: 'Is IntelliJ IDEA better than Eclipse for beginners?', content: 'IntelliJ IDEA usually feels more helpful out of the box, with smarter completion and clearer warnings. Eclipse is completely free and open source, lighter on some machines, and still taught on many courses. If your class uses one of them, learn that one; the Java is the same in both.' },
    { title: 'What is the simplest Java IDE?', content: 'BlueJ. It has a small number of buttons, shows how your classes relate as a diagram, and was designed for teaching. jGRASP is also simple and adds diagrams of your code\'s control structure.' },
    { title: 'Which Java IDE is best for Windows?', content: 'All seven IDEs on this page run on Windows, as well as on macOS and Linux, so choose by your stage rather than your operating system: BlueJ to start, IntelliJ IDEA or NetBeans as you grow, VS Code if you use several languages.' },
    { title: 'Do I need to pay for a Java IDE?', content: 'No. IntelliJ IDEA (without a subscription), Eclipse, NetBeans, VS Code, BlueJ, jGRASP and Greenfoot are all free, and together they cover everything from a first program to professional work. The paid IntelliJ subscription adds advanced features that beginners do not need.' },
    { title: 'Can I use Visual Studio Code instead of a Java IDE?', content: 'Yes. Install Microsoft\'s Extension Pack for Java and VS Code can edit, run, debug and test Java. Dedicated Java IDEs still set up Java projects with less effort, so pure-Java learners may find IntelliJ IDEA or NetBeans easier.' },
    { title: 'Do I need to install Java separately?', content: 'You need a JDK (Java Development Kit). Some IDEs can download one for you during setup; otherwise install one first and check it by typing <code>java -version</code> in a terminal or command prompt.' },
  ];
  s.splice(faqH + 1, finalH - faqH - 1, { type: 'accordion', items });
  s[faqH].text = 'Java IDEs: common questions';

  const ft = idx(s, pStarts('Picking the right Java IDE depends on'), 'final paragraph');
  s[ft] = P('Picking a Java IDE depends on what you want to learn, what computer you have and how much you already know. For a first program, BlueJ or NetBeans is the gentlest start. If you plan to work as a programmer, get used to IntelliJ IDEA or Eclipse early. If you are learning several languages, VS Code covers them all.');
  const ft2 = idx(s, pStarts('Start with one IDE and learn its basic features'), 'final paragraph 2');
  s[ft2] = P('Start with one IDE and learn its basic features before trying others. The right IDE is the one that lets you think about Java instead of fighting the tool. Try two or three from this list for a few days each, then stick with the one you like; what you know about Java matters far more than where you type it.');

  // related posts list: the first item linked the college course but called it the teens course
  const rel = idx(s, (x) => x.type === 'list' && x.items.some((it) => /Java Programming Masterclass for Teens/.test(it)), 'related list');
  s[rel].items = s[rel].items.map((it) => it
    .replace(/<a href='https:\/\/www\.modernagecoders\.com\/courses\/complete-java-programming-masterclass-college'[^>]*>Java Programming Masterclass for Teens<\/a>/, `<a href='${TEENS.url}'>${TEENS.title}</a>`)
    .replace(/https:\/\/(www\.)?(learn\.)?modernagecoders\.com\//g, '/')
    .replace(/ target='_blank' rel='noopener noreferrer'/g, '')
    .replace(/Best Programming Languages for College Students 2025<\/a>/, 'Best Programming Languages for College Students to Learn in 2026</a>'));
  s.forEach((x) => { if (x.type === 'paragraph') x.text = x.text.replace(/href='https:\/\/learn\.modernagecoders\.com\//g, "href='/").replace(/(href='\/[^']*') target='_blank' rel='noopener noreferrer'/g, '$1'); });

  save(name, j); console.log('retargeted', name);
})();

// ────────────────────────────────────────────────────── maths in programming
// Search Console, page-filtered, 16 months to 2026-09-23: "mathematics for programming" 555 impr @7.3,
// "math in programming" 504 @6.5, "math in coding" 308 @7.0 (0 clicks), "mathematics in programming"
// 298, "math for programming" 295 @10.2, "math and programming" 225, "how is math used in programming" 98.
// Every snippet was either not runnable (has_vip_pass, number, power_ratio undefined) or showed no output;
// they are replaced by scripts/seo/code-posts/maths_programs.py with captured output. Removed: the
// unsourced "80% of coding needs only basic math" (description, tldr, callout), named-company claims
// (Netflix, Google Maps, Spotify, YouTube), "students report better math grades".
function runs(mod) { return JSON.parse(fs.readFileSync(path.join(__dirname, 'code-posts', mod + '.out.json'), 'utf8')); }
function codeAndOutput(p) {
  return [
    { type: 'code', language: 'python', code: p.code },
    { type: 'code', language: 'plaintext', title: p.sample ? 'Sample output (changes on every run)' : 'Output', code: p.output },
  ];
}
(function mathsInProgramming() {
  const name = 'role-mathematics-programming-problem-solving.json';
  const j = load(name); if (j.meta.retarget === MARK) return console.log('skip', name);
  const s = j.content.sections;
  const progs = runs('maths_programs');
  const get = (n) => progs.find((p) => p.n === n);
  const MTC = course('maths-through-coding');
  const OLY = course('olympiad-competition-mathematics-mastery');

  j.meta.title = 'Math in Programming: What You Need, Shown in Real Code';
  j.hero.title = j.meta.title;
  j.hero.subtitle = 'How much maths coding really needs, field by field, with every idea shown as Python you can run.';
  j.meta.description = 'How much math do you need for programming? What each field uses, and how algebra, logic, sets, sequences and logarithms appear in real Python code with output.';
  j.meta.tldr = 'Most programming needs school maths: arithmetic, a little algebra and the logic of true and false. Specialised fields need more: linear algebra, calculus and statistics for machine learning, trigonometry and vectors for games and graphics, discrete maths for competitive programming. This guide shows each idea as runnable Python with its output.';
  addKeywords(j.meta, ['math in programming', 'mathematics for programming', 'math for programming', 'math in coding', 'mathematics in programming', 'how is math used in programming', 'how much math do you need for programming']);
  j.meta.dateModified = TODAY; j.meta.retarget = MARK;

  s[1] = P('How much math do you need for programming? For most programming, school maths is enough: arithmetic, a little algebra, and the logic of true and false that every <code>if</code> statement uses. Specialised fields ask for more: machine learning uses linear algebra, calculus and statistics; games and graphics use trigonometry and vectors; competitive programming uses discrete maths and number theory.');
  s[2] = P('Maths in programming shows up less as formulas and more as a way of thinking: define the problem exactly, break it into parts, spot the pattern, and check the answer. Below, the maths each kind of programming needs, then every idea as a short Python program with the output it prints.');
  s[3] = T(['Kind of programming', 'Maths it uses', 'Needed from the start?'], [
    ['Websites, apps, most software', 'Arithmetic, basic algebra, Boolean logic, percentages', 'Yes, and school maths covers it'],
    ['Algorithms and data structures', 'Logarithms, exponents, counting, recursion, graphs', 'Learn it as you meet it'],
    ['Data science and machine learning', 'Linear algebra, calculus, probability and statistics', 'Yes, alongside the code'],
    ['Games and graphics', 'Trigonometry, vectors and matrices, geometry', 'As soon as things move on screen'],
    ['Competitive programming', 'Discrete maths, combinatorics, number theory', 'Yes, for harder problems'],
  ]);

  const rule = idx(s, (x) => x.type === 'callout' && x.title === 'The 80/20 Rule', '80/20 callout');
  s[rule] = { type: 'callout', calloutType: 'info', title: 'Know which kind you are aiming at', text: 'Most programming work needs only basic maths. Machine learning, graphics and scientific computing need deeper maths, so check which of these your goal falls into before deciding what to study.' };
  const struggle = idx(s, pStarts('Many students who struggle with traditional math'), 'struggle paragraph');
  s[struggle] = P('Some students who find school maths dry take to programming, because it presents the same thinking in a concrete, interactive way: you change a number and see what happens.');

  const swaps = [[/y = 2x \+ 5/, 1], [/def square\(x\)/, 2], [/can_drive/, 3], [/set_a \| set_b/, 4], [/Arithmetic sequence/, 5], [/number % 2/, 6], [/math\.log2/, 7]];
  swaps.forEach(([re, n]) => { const c = idx(s, (x) => x.type === 'code' && re.test(x.code), 'code ' + n); s.splice(c, 1, ...codeAndOutput(get(n))); });
  const seqApp = idx(s, (x) => x.type === 'paragraph' && /Netflix shows/.test(x.text), 'netflix paragraph');
  s[seqApp] = P('<strong>Practical application:</strong> page numbers in search results, animation frames, repayment schedules and compound interest are all sequences. The formula line is worth noticing: adding up 100 numbers and using n(n+1)/2 give the same answer, but the formula takes one step however large n gets.');
  const logApp = idx(s, (x) => x.type === 'paragraph' && /Analyzing algorithm performance, calculating compound interest/.test(x.text), 'log application');
  s.splice(logApp + 1, 0,
    H(3, 'Why binary search needs so few steps'),
    P('Logarithms explain why searching a sorted list is fast. Binary search halves the range at every step, so a million items need at most 20 steps, because 2 to the power 20 is 1,048,576, just over a million. Here it is counting its steps:'),
    ...codeAndOutput(get(8)));
  const tip = idx(s, (x) => x.type === 'callout' && x.title === 'Learning Tip', 'learning tip');
  s[tip].text = 'If you struggled with maths at school, try meeting it through programming. Seeing an abstract idea run, and changing it to see what happens, often makes it click.';
  const bottom = idx(s, (x) => x.type === 'callout' && x.title === 'The Bottom Line', 'bottom line');
  s[bottom].text = 'Do not let maths anxiety stop you from learning to code. Start programming now, and learn the maths your goal needs as you go.';

  const maps = idx(s, pStarts('Google Maps and similar apps use sophisticated math'), 'maps');
  s[maps] = P('Route-finding apps rely on geometry and graph algorithms:');
  const stream = idx(s, pStarts('Netflix, Spotify, and YouTube use math'), 'streaming');
  s[stream] = P('Recommendation systems in streaming and shopping apps are built on probability and linear algebra:');
  const recH = idx(s, isH('Streaming Services: Probability and Linear Algebra'), 'streaming heading');
  s[recH].text = 'Recommendations: Probability and Linear Algebra';

  const acc = idx(s, (x) => x.type === 'accordion', 'faq accordion');
  const items = s[acc].items.filter((it) => it.title !== 'Can programming help me get better at math?');
  items.unshift(
    { title: 'How is math used in programming?', content: 'Mostly as logic and structure: Boolean logic in every condition, algebra in every variable and formula, functions that map inputs to outputs, the modulo operator for cycles and even or odd checks, and logarithms when you reason about how fast an algorithm is. Specialised fields add linear algebra, calculus, statistics or trigonometry.' },
    { title: 'How much math do you need for programming?', content: 'For websites, apps and most software, school maths is enough: arithmetic, basic algebra, percentages and true or false logic. Machine learning needs linear algebra, calculus and statistics, games need trigonometry and vectors, and competitive programming needs discrete maths and number theory.' });
  items.push({ title: 'Can programming help me understand math?', content: 'Often, yes. Code turns an abstract idea into something you can run and change: you can watch a sequence grow, test a formula on a thousand values, or see why halving a range reaches the answer in a few steps. That makes it a good companion to maths lessons, though not a replacement for practising the maths itself.' });
  s[acc].items = items;

  const start = idx(s, (x) => x.type === 'callout' && x.title === 'Start Your Journey', 'start callout');
  s[start] = { type: 'callout', calloutType: 'tip', title: 'Learn maths and coding together', text: `Ages 10 to 15: <a href='${MTC.url}'>${MTC.title}</a> teaches school maths by writing Python. For contest problems: <a href='${OLY.url}'>${OLY.title}</a>, or compare the olympiads on our <a href='/maths-olympiad-classes-online'>maths olympiad classes</a> page. The first class is a free demo, so you can see how it is taught before you decide.` };

  save(name, j); console.log('retargeted', name);
})();

// ────────────────────────────────────────────────────── advantages of functions in Python
// Search Console, page-filtered, 16 months to 2026-09-23: "advantages of functions in python" 1,410 impr
// @6.8 (0.3% CTR), "advantages of function in python" 919 @7.4 (0 clicks), "benefits of functions in
// python" 461, "why we use function in python" 384, "why do we use functions in python" 378, "why use
// functions in python" 290, "advantages of using functions in python" 278. A textbook exam question, so the
// answer is a numbered list first. Code now comes from scripts/seo/code-posts/functions_programs.py with
// captured output; the built-in vs user-defined "table" was pipe characters in paragraphs; a sentence
// attributed to the Python documentation is reworded to what the linked tutorial section actually is.
(function functionsAdvantages() {
  const name = 'functionadvantage.json';
  const j = load(name); if (j.meta.retarget === MARK) return console.log('skip', name);
  const s = j.content.sections;
  const progs = runs('functions_programs');
  const get = (n) => progs.find((p) => p.n === n);
  const KIDS = course('python-ai-kids-masterclass');
  const TEENS = course('python-complete-masterclass-teens');
  const ADULTS = course('python-programming-masterclass-zero-to-advanced-college');
  // same order as the numbered H3 sections below
  const ADV = ['Reusability: write the code once and call it as often as you need', 'Readability: a well-named function says what the code does', 'Easier debugging and testing: check one small piece at a time', 'Better organisation (modularity): split a big problem into small parts', 'Less repetition: the DRY principle, Don\'t Repeat Yourself', 'Teamwork: different people can write different functions', 'Easier maintenance: fix or change the logic in one place', 'Abstraction: use a function without knowing how it works inside'];

  j.meta.title = 'Advantages of Functions in Python: 8 Benefits With Examples';
  j.hero.title = j.meta.title; j.hero.featuredImage.alt = j.meta.title;
  j.meta.description = 'The advantages of functions in Python for students: reusability, less repetition, readability, easier testing and more, each shown with code and its output.';
  j.meta.tldr = 'The main advantages of functions in Python are reusability, readable code, easier debugging and testing, better organisation, less repetition (DRY), easier teamwork, changes made in one place, and abstraction. We use functions so a job is written once, named clearly and called wherever it is needed. Every example here shows its real output.';
  addKeywords(j.meta, ['advantages of function in python', 'benefits of functions in python', 'why do we use functions in python', 'why use functions in python', 'advantages of using functions in python', 'why we use function in python', 'types of functions in python']);
  j.meta.readTime = '11 min read';
  j.meta.dateModified = TODAY; j.meta.retarget = MARK;

  s[1] = P('The main advantages of functions in Python are:');
  s[2] = P('In short, we use functions in Python so that a job is written once, given a clear name and called wherever it is needed, instead of copying the same lines around a program. Each advantage is explained below with a short program and the output it prints.');
  s.splice(2, 0, { type: 'list', style: 'ordered', items: ADV.map((a) => { const [head, rest] = a.split(': '); return `<strong>${head}</strong>: ${rest}`; }) });

  const c1 = idx(s, (x) => x.type === 'code' && /Welcome to Python/.test(x.code), 'greet code');
  s.splice(c1, 1, ...codeAndOutput(get(1)));
  const docs = idx(s, (x) => x.type === 'paragraph' && /Python official documentation/.test(x.text), 'docs paragraph');
  s[docs] = P(`Python has two types of functions. Built-in functions come ready to use, such as <code>print()</code>, <code>len()</code> and <code>input()</code>. User-defined functions are the ones you write yourself with the <code>def</code> keyword. The official Python tutorial covers them in its section on <a href='https://docs.python.org/3/tutorial/controlflow.html#defining-functions' target='_blank' rel='noopener noreferrer'>defining functions</a>.`);

  const swap = (re, n) => { const c = idx(s, (x) => x.type === 'code' && re.test(x.code), 'code ' + n); s.splice(c, 1, ...codeAndOutput(get(n))); };
  swap(/def add_numbers/, 2);
  swap(/def update_score\(current_score, points\)/, 3);
  swap(/def greet_user/, 4);
  swap(/def calculate_area/, 7);
  const same = idx(s, pStarts('Same function, different inputs'), 'same function');
  s[same] = P('Same function, different inputs, different results, and not one line repeated.');
  const story = idx(s, pStarts('The second version tells a story.'), 'story paragraph');
  s[story].text = s[story].text.replace('The second version tells a story.', 'The second version tells a story, and it grows cleanly: adding 25 more points is one more readable line.');

  const bulbs = idx(s, pStarts("It's like finding one broken bulb"), 'bulbs');
  s.splice(bulbs + 1, 0, P('Because a function takes inputs and returns a result, you can check it on its own with a few known answers. Python\'s <code>assert</code> stops the program if a check fails:'), ...codeAndOutput(get(5)));

  const team = idx(s, pStarts('This is how large apps are actually built'), 'team end');
  s.splice(team + 1, 0,
    H(3, '7. Easier Maintenance: Change It in One Place'),
    P('If the same calculation is copied into ten places, a change means ten edits and ten chances to miss one. Inside a function, you change it once and every call follows. Here, changing the format string would change every price the program prints:'),
    ...codeAndOutput(get(6)),
    H(3, '8. Abstraction: Use It Without Knowing How It Works'),
    P('You call <code>len()</code>, <code>sorted()</code> and <code>print()</code> every day without reading their code. Your own functions work the same way: once <code>calculate_area()</code> is written and tested, the rest of the program only needs its name, its inputs and what it returns. That is what lets programs grow without every part having to be understood at once.'));

  const tHead = idx(s, pStarts('<strong>Type | Examples | When to Use</strong>'), 'pipe table');
  s.splice(tHead, 3, T(['Type', 'Examples', 'When to use'], [
    ['Built-in', '<code>print()</code>, <code>len()</code>, <code>input()</code>, <code>range()</code>', 'Everyday tasks Python already knows how to do'],
    ['User-defined', 'Functions you write with <code>def</code>', 'Logic specific to your program'],
    ['Lambda (anonymous)', '<code>lambda x: x * 2</code>', 'A one-line function passed to <code>sorted()</code>, <code>map()</code> or <code>filter()</code>'],
  ]));

  const rw = idx(s, pStarts('<strong>Game score calculator:</strong>'), 'real world start');
  const rwEnd = idx(s, (x) => x.type === 'paragraph' && /Python projects for kids/.test(x.text), 'real world end');
  s.splice(rw, rwEnd - rw, P('A quiz checker and a tiny chatbot, each a function that takes an input and returns an answer:'), ...codeAndOutput(get(9)));

  const noReturn = idx(s, pStarts('<strong>Forgetting return</strong>'), 'forgetting return');
  s[noReturn] = P('<strong>Forgetting return</strong>: the function runs but hands back nothing, which Python shows as <code>None</code>. Use <code>return</code> whenever the result is needed outside the function:');
  s.splice(noReturn + 1, 0, ...codeAndOutput(get(8)));

  const concl = idx(s, isH('Conclusion'), 'conclusion');
  s.splice(concl, 0,
    H(2, 'Functions in Python: common questions', 'faq'),
    { type: 'accordion', items: [
      { title: 'What are the advantages of functions in Python?', content: 'Reusability, readable code, easier debugging and testing, better organisation into modules, less repetition (DRY), easier teamwork, changes made in one place, and abstraction: using a function without knowing how it works inside.' },
      { title: 'Why do we use functions in Python?', content: 'To write a piece of logic once, give it a clear name and call it wherever it is needed. That keeps programs shorter, easier to read and easier to fix, because each job lives in one place.' },
      { title: 'What are the types of functions in Python?', content: 'Built-in functions such as <code>print()</code> and <code>len()</code>, user-defined functions written with <code>def</code>, and anonymous lambda functions written with <code>lambda</code>. Functions defined inside a class are called methods.' },
      { title: 'What is the difference between built-in and user-defined functions?', content: 'Built-in functions come with Python and are always available. User-defined functions are written by you, with <code>def</code>, for the logic your own program needs.' },
      { title: 'What happens if a function has no return statement?', content: 'It still runs, but it returns <code>None</code>. If you print the result of such a call, you see <code>None</code>, as in the example above.' },
      { title: 'What is a function in Python, with an example?', content: 'A named block of code that does one job. For example, <code>def add_numbers(a, b): return a + b</code> defines a function, and <code>add_numbers(5, 3)</code> calls it and gives back 8.' },
    ] });

  const cta = idx(s, (x) => x.type === 'paragraph' && /explore our <a href='https:\/\/learn\.modernagecoders\.com\/courses\/python-ai-kids-masterclass'/.test(x.text), 'cta');
  s[cta] = { type: 'callout', calloutType: 'tip', title: 'Learn Python live, with a teacher reading your code', text: `Functions are where programs start to feel like real software. Ages 9 to 12: <a href='${KIDS.url}'>${KIDS.title}</a>. Ages 13 to 18: <a href='${TEENS.url}'>${TEENS.title}</a>. College students and adults: <a href='${ADULTS.url}'>${ADULTS.title}</a>. The first class is a free demo, so you can see how it is taught before you decide.` };
  s.forEach((x) => { if (x.type === 'paragraph') x.text = x.text.replace(/href='https:\/\/learn\.modernagecoders\.com\//g, "href='/").replace(/(href='\/[^']*') target='_blank' rel='noopener noreferrer'/g, '$1'); });

  save(name, j); console.log('retargeted', name);
})();

// ────────────────────────────────────────────────────── Armstrong numbers
// Search Console, page-filtered, 16 months to 2026-09-23: "armstrong number in python" 462 impr @14.6,
// many "armstrong number definition ..." phrasings (449, 348, 264, 241 ... @6-8, 0 clicks),
// "2 digit armstrong number" 384 @8.4, "what is armstrong number in python" 328, "5 digit armstrong
// number" 203, "armstrong number definition" 202, "how many armstrong numbers are there" 193,
// "6 digit armstrong number" 184. The definition and the list by digit count now come first; the list is
// the captured output of scripts/seo/code-posts/armstrong_programs.py (every Armstrong number up to 7
// digits). Count: oeis.org/A005188 read with curl on 2026-09-23, "A finite sequence, the 89th and last
// term being 115132219018763992565095597973971522401" (39 digits); the sequence starts at 0, so 88
// positive ones. The post said "exactly 88" while listing 0 among them.
(function armstrong() {
  const name = 'armstrong.json';
  const j = load(name); if (j.meta.retarget === MARK) return console.log('skip', name);
  const s = j.content.sections;
  const progs = runs('armstrong_programs');
  const get = (n) => progs.find((p) => p.n === n);
  const KIDS = course('python-ai-kids-masterclass');
  const TEENS = course('python-complete-masterclass-teens');
  const ADULTS = course('python-programming-masterclass-zero-to-advanced-college');
  const LAST = '115132219018763992565095597973971522401';

  // the list table is built from the program's own output, so page and program cannot disagree
  const groups = get(2).output.split('\n').map((line) => { const m = line.match(/^(\d)-digit \((\d+)\): (.*)$/); if (!m) throw new Error('bad line ' + line); return m.slice(1); });
  if (groups.length !== 7 || groups[1][1] !== '0' || groups[2][2] !== '153, 370, 371, 407') throw new Error('unexpected Armstrong output');
  const byDigits = Object.fromEntries(groups.map(([d, c, list]) => [d, { c, list }]));

  j.meta.title = 'Armstrong Number: Definition, Full List and Python Program';
  j.hero.title = j.meta.title; j.hero.featuredImage.alt = j.meta.title;
  j.meta.description = 'What an Armstrong number is, every one up to 7 digits (there are no 2-digit ones), how many exist, and Armstrong number programs in Python with real output.';
  j.meta.tldr = 'An Armstrong number equals the sum of its digits, each raised to the power of the number of digits: 153 = 1^3 + 5^3 + 3^3. There are none with 2 digits; the 3-digit ones are 153, 370, 371 and 407, the 5-digit ones 54748, 92727 and 93084, and the only 6-digit one is 548834. The sequence is finite: 89 numbers counting 0, the largest with 39 digits. This guide lists them and gives Python programs with their output.';
  addKeywords(j.meta, ['armstrong number definition', 'what is armstrong number', 'armstrong number in python', '2 digit armstrong number', '5 digit armstrong number', '6 digit armstrong number', 'how many armstrong numbers are there', 'list of armstrong numbers']);
  j.meta.readTime = '12 min read';
  j.meta.dateModified = TODAY; j.meta.retarget = MARK;

  s[1] = P('An <strong>Armstrong number</strong> (also called a narcissistic number) is a number equal to the sum of its own digits, each raised to the power of the number of digits. 153 is one, because it has 3 digits and 1<sup>3</sup> + 5<sup>3</sup> + 3<sup>3</sup> = 1 + 125 + 27 = 153. So is 9474: 9<sup>4</sup> + 4<sup>4</sup> + 7<sup>4</sup> + 4<sup>4</sup> = 9474.');
  s[2] = P(`There are <strong>no 2-digit Armstrong numbers</strong>. The 3-digit ones are ${byDigits['3'].list}; the 4-digit ones ${byDigits['4'].list}; the 5-digit ones ${byDigits['5'].list}; and the only 6-digit one is ${byDigits['6'].list}. The list is finite: the On-Line Encyclopedia of Integer Sequences counts 89 of them including 0, and the largest has 39 digits.`);
  s[3] = P('Below: the definition worked through, the full list up to 7 digits with the program that finds it, three ways to check a number in Python, and the questions students ask most.');

  const note = idx(s, pStarts('<strong>Important note:</strong> All single-digit numbers'), 'single digit note');
  s[note] = P('<strong>Important note:</strong> every single-digit number from 0 to 9 is an Armstrong number, because a digit raised to the power 1 is itself: 5<sup>1</sup> = 5. Here is the same check in Python, showing the working for each number:');
  s.splice(note + 1, 0, ...codeAndOutput(get(1)));

  const also = idx(s, isH('You May Also like:'), 'you may also like');
  s.splice(also, 2);

  const listH = idx(s, isH('List of Armstrong Numbers (Complete Reference)'), 'list heading');
  s[listH].text = 'List of Armstrong Numbers by Number of Digits';
  s[listH + 1] = P('Armstrong numbers get rarer as numbers get longer. Here is every one with up to 7 digits, followed by the program that produced this list:');
  s[listH + 2] = T(['Digits', 'How many', 'Armstrong numbers'], groups.map(([d, c, list]) => [d, c, list === 'none' ? 'none' : list]));
  const oeisNote = idx(s, pStarts('<strong>Note:</strong> There are no 2-digit Armstrong numbers.'), 'oeis note');
  s[oeisNote] = P('The program tries each combination of digits once rather than every number, which is why it reaches 7 digits in about a second:');
  s.splice(oeisNote + 1, 0, ...codeAndOutput(get(2)),
    P(`<strong>How many are there?</strong> A finite number. The On-Line Encyclopedia of Integer Sequences (<a href='https://oeis.org/A005188' target='_blank' rel='noopener noreferrer'>sequence A005188</a>) lists 89, counting 0, so 88 positive Armstrong numbers. The last and largest is ${LAST}, which has 39 digits. Why must the list end? From 61 digits up, even a number made entirely of 9s gives a digit-power sum (n &times; 9<sup>n</sup>) with fewer digits than the number itself, so no longer number can match; the lengths below that have been searched by computer.`));

  const final = idx(s, isH('Final Thoughts'), 'final thoughts');
  s.splice(final, 0,
    H(2, 'Armstrong numbers: common questions', 'faq'),
    { type: 'accordion', items: [
      { title: 'What is an Armstrong number?', content: 'A number equal to the sum of its digits, each raised to the power of how many digits it has. 153 is one: 1<sup>3</sup> + 5<sup>3</sup> + 3<sup>3</sup> = 153. They are also called narcissistic numbers or pluperfect digital invariants.' },
      { title: 'Is there any 2-digit Armstrong number?', content: 'No. No number from 10 to 99 equals the sum of the squares of its digits; the program above checks every case.' },
      { title: 'What are the 3-digit Armstrong numbers?', content: `${byDigits['3'].list}.` },
      { title: 'What are the 4-digit and 5-digit Armstrong numbers?', content: `4-digit: ${byDigits['4'].list}. 5-digit: ${byDigits['5'].list}.` },
      { title: 'What is the 6-digit Armstrong number?', content: `There is only one: ${byDigits['6'].list}. With 7 digits there are four: ${byDigits['7'].list}.` },
      { title: 'How many Armstrong numbers are there?', content: `89 counting 0 (88 positive ones), according to OEIS sequence A005188. The largest is ${LAST}, with 39 digits.` },
      { title: 'Is 0 an Armstrong number?', content: '0 has one digit and 0<sup>1</sup> = 0, so by the definition it is, and OEIS includes it. Some textbooks start their lists at 1, so check which your teacher uses.' },
      { title: 'How do you check an Armstrong number in Python?', content: 'Turn the number into a string, count its digits, and compare the number with <code>sum(int(d) ** len(s) for d in s)</code>. Method 2 above does exactly this in five lines.' },
    ] });
  const f2 = idx(s, isH('Final Thoughts'), 'final thoughts 2');
  s.splice(f2 + 3, 0, { type: 'callout', calloutType: 'tip', title: 'Learn Python live, with a teacher reading your code', text: `Programs like this are where loops, strings and maths meet. Ages 9 to 12: <a href='${KIDS.url}'>${KIDS.title}</a>. Ages 13 to 18: <a href='${TEENS.url}'>${TEENS.title}</a>. College students and adults: <a href='${ADULTS.url}'>${ADULTS.title}</a>. The first class is a free demo, so you can see how it is taught before you decide.` });

  s.forEach((x) => {
    if (x.type === 'paragraph') x.text = x.text.replace(/href='https:\/\/learn\.modernagecoders\.com\//g, "href='/").replace(/(href='\/[^']*') target='_blank' rel='noopener noreferrer'/g, '$1');
    if (x.type === 'list') x.items = x.items.map((it) => it.replace(/href='https:\/\/learn\.modernagecoders\.com\//g, "href='/").replace(/(href='\/[^']*') target='_blank' rel='noopener noreferrer'/g, '$1'));
  });
  save(name, j); console.log('retargeted', name);
})();

// ────────────────────────────────────────────────────── AP CSP vs AP CSA
// Search Console, page-filtered, 16 months to 2026-09-23 (all 0 clicks): "ap csp vs ap csa" 131 @7.0,
// "ap csa vs ap csp" 102 @7.3, "csp vs csa" 51, "ap csa vs csp" 47, "is ap csa harder than csp" 41 @4.5,
// "is csa harder than csp" 20, "difference between ap csp and ap csa" 12. The post (2026-08-21) argued well
// but never answered "which is harder" plainly or set the two courses side by side. College Board pages read
// with curl on 2026-09-23: apstudents.collegeboard.org/courses/ap-computer-science-a and -principles (units,
// "subset of the Java programming language", college equivalents, recommended prerequisites),
// apcentral.collegeboard.org .../exam pages (CSA: 42 MCQ, 1 hour 30 minutes, 55%; 4 FRQ, 1 hour 30 minutes,
// 45%; CSP: 70 MCQ, 120 minutes, 70%; Create task and written response 30%, 9 hours in class, 60-minute
// written section), apstudents.collegeboard.org/exam-dates (CSA Wednesday May 12 2027 Session 2, CSP Friday
// May 14 2027 Session 1, sessions "typically the morning and afternoon"; Create task due April 30 2027
// 11:59 p.m. ET). Batch size fixed to scripts/brand-facts.json (group 5 to 10, mini 3 to 4).
(function apCspVsCsa() {
  const name = 'ap-csp-vs-ap-csa-which-to-take-first.json';
  const j = load(name); if (j.meta.retarget === MARK) return console.log('skip', name);
  const s = j.content.sections;
  const facts = require(path.join(ROOT, 'scripts', 'brand-facts.json'));
  if (facts.batchSizes.group !== '5–10' || facts.batchSizes.miniBatch !== '3–4') throw new Error('batch sizes changed; update the wording below');

  j.meta.title = 'AP CSP vs AP CSA: Which Is Harder, and Which to Take First';
  j.hero.title = j.meta.title;
  j.meta.description = 'Is AP CSA harder than AP CSP? CSA is harder to learn but more students score a 5. The differences, 2027 exam format and dates, and which to take first.';
  addKeywords(j.meta, ['ap csa vs ap csp', 'is ap csa harder than csp', 'csp vs csa', 'difference between ap csp and ap csa', 'ap computer science principles vs ap computer science a', 'ap csa exam 2027', 'ap csp exam 2027']);
  j.meta.dateModified = TODAY; j.meta.retarget = MARK;

  s.splice(1, 0,
    P('<strong>Is AP CSA harder than AP CSP?</strong> To learn, yes: Computer Science A means writing Java from memory, with a three-hour exam that is all programming. To score a 5 in, no: on College Board\'s preliminary 2026 figures, 25 per cent of Computer Science A candidates scored a 5 against 10 per cent in Principles. Principles is broader and gentler, a project year with multiple-choice and written responses; Computer Science A is a Java programming year.'),
    H(2, 'AP CSP vs AP CSA at a glance', 'at-a-glance'),
    T(['', 'AP Computer Science Principles', 'AP Computer Science A'], [
      ['What you learn', 'Five big ideas: creative development, data, algorithms and programming, computer systems and networks, the impact of computing', 'Programming in a subset of Java: objects and methods, selection and iteration, class creation, data collections'],
      ['Programming', 'Your own Create task program; exam questions on algorithms and code', 'Java throughout, typed in the exam'],
      ['Assessment', 'Create performance task (9 hours of class time) plus the end-of-course exam', 'End-of-course exam only'],
      ['Exam', '70 multiple-choice questions in 120 minutes (70%); 60-minute written response on your Create task (30%)', '42 multiple-choice questions in 1 hour 30 minutes (55%); 4 free-response questions in 1 hour 30 minutes (45%)'],
      ['2027 dates', 'Create task due Friday 30 April 2027, 11:59 p.m. ET; exam Friday 14 May 2027, Session 1 (typically morning)', 'Exam Wednesday 12 May 2027, Session 2 (typically afternoon)'],
      ['College equivalent', 'A first-semester introductory college course in computing', 'A one-semester introductory college course in computer science'],
      ['Recommended before', 'High school algebra', 'High school English and algebra, and familiarity with functions'],
    ]),
    P('All dates and formats above are from College Board\'s AP Students and AP Central pages, checked on 23 September 2026. Both exams are digital, taken in the Bluebook app; your AP coordinator confirms the exact start times.'));

  const units = idx(s, pStarts('<strong>Computer Science A</strong> has no project and nothing to submit.'), 'csa work paragraph');
  s.splice(units + 1, 0, P('Its four units, with their share of the exam from College Board\'s course page: Using Objects and Methods (15 to 25 per cent), Selection and Iteration (25 to 35 per cent), Class Creation (10 to 18 per cent) and Data Collections (30 to 40 per cent).'));

  const batch = idx(s, (x) => x.type === 'paragraph' && /one to one or in a batch of five to eight students/.test(x.text), 'batch paragraph');
  s[batch].text = s[batch].text.replace('one to one or in a batch of five to eight students', 'one to one, in a mini batch of three or four, or in a group of five to ten students');

  const acc = idx(s, (x) => x.type === 'accordion', 'faq');
  s[acc].items.unshift(
    { title: 'Is AP CSA harder than AP CSP?', content: 'Harder to learn, yes: Computer Science A is a year of Java and an exam made entirely of programming questions. Harder to get a 5 in, no: on College Board\'s preliminary 2026 figures, 25 per cent of Computer Science A candidates scored a 5 against 10 per cent in Principles.' },
    { title: 'What is the difference between AP CSP and AP CSA?', content: 'Principles is a broad introduction to computing across five big ideas, with a through-year Create project and an exam of multiple-choice and written responses. Computer Science A is a programming course in Java, assessed only by an exam of 42 multiple-choice and 4 free-response questions.' },
    { title: 'When are the AP Computer Science exams in 2027?', content: 'AP Computer Science A is on Wednesday 12 May 2027 in Session 2 (typically the afternoon). AP Computer Science Principles is on Friday 14 May 2027 in Session 1 (typically the morning), and its Create performance task must be submitted by Friday 30 April 2027 at 11:59 p.m. ET. Your AP coordinator confirms local times.' });
  const lang = s[acc].items.find((it) => it.title === 'Which programming language should we use for the Create task?');
  if (lang) lang.content = lang.content.replace('Python is the most common choice because the code stays short enough', 'Python works well because the code stays short enough');

  save(name, j); console.log('retargeted', name);
})();

// ────────────────────────────────────────────────────── best coding games for kids
// Search Console, page-filtered, 16 months to 2026-09-23: "best coding games for kids" 5,346 impr @8.7 (1 click),
// "coding games for kids" 1,120 @24.6, "programming games for kids" 367 @22, "kids coding games" 168 @25.
// Rebuilt from facts checked on 2026-09-23 at each maker's own site or app store listing (raw pages saved,
// every quote machine-matched): scratchfoundation.org (Scratch ages 8-13+, free, offline app on Windows/macOS/
// ChromeOS/Android; ScratchJr 5-7 on iPad/Android/Amazon tablets), code.org/en-US/about ("why Code.org became
// CodeAI", "Every CodeAI course, tool, and activity is free to use", Hour of Code became the Hour of AI),
// code.org/en-US/tools (Sprite Lab 5-12, Game Lab 12-18 JavaScript, Python Lab 13-18), blockly.games/about
// (open source, Pond Tutor switches to JavaScript, offline download), tynker.com (ages 5 to 18, free start plus
// quarterly/yearly/lifetime plans, Python and JavaScript), kodable.com/parents (ages 4-10, paid subscription with
// a 7-day free trial, real JavaScript), CodeCombat's own repo strings (Ages 8+, Junior 5-8, free introductory
// levels, Python, JavaScript, C++, Java, Lua), Lightbot App Store listing (SpriteBox LLC, one-time paid app,
// 50 levels; free Hour of Code demo on lightbot.com), education.minecraft.net (licence needed, MakeCode then
// Python in Code Builder, Windows/Mac/ChromeOS/iOS/Android), create.roblox.com (free, Windows and Mac, Luau
// derived from Lua 5.1, Roblox account needed).
// Removed: two invented "parent reviews", a "Roblox success story", invented research statistics ("EdTech
// Research Institute 2024", "2023 Stanford study"), "we've tested dozens", star ratings, rupee prices for
// other companies' products, "12 best" in a post that listed 8, Lightbot Jr (only in commented-out HTML now),
// "Kodable free tier" (home use is paid), "Created by Google" for Blockly Games (not stated by the site),
// "Lua" for Roblox (Luau).
(function codingGames() {
  const name = 'top-coding-games-platforms-kids.json';
  const j = load(name); if (j.meta.retarget === MARK) return console.log('skip', name);
  const old = j.content.sections;
  const SCRATCH = course('scratch-programming-complete-course');
  const MINE = course('minecraft-coding-for-kids-course');
  const ROBLOX = course('roblox-game-coding-for-kids-lua-course');
  const GAMEDEV = course('game-development-masterclass-for-kids');
  const PYKIDS = course('python-ai-kids-masterclass');
  const link = (c) => `<a href='${c.url}'>${c.title}</a>`;

  j.meta.title = 'Best Coding Games for Kids in 2026: 10 Picks by Age';
  j.hero.title = j.meta.title;
  j.hero.subtitle = 'Ten games and apps that teach real coding logic, sorted by age, with who makes each one, what it costs and what your child actually writes, checked at the source in September 2026.';
  j.meta.description = 'The best coding games for kids in 2026 by age: Scratch, ScratchJr, CodeAI (formerly Code.org), Blockly Games, CodeCombat and more, free or paid, facts checked.';
  j.meta.tldr = 'The best coding games for kids in 2026: ScratchJr for ages 5 to 7, Scratch from 8, CodeAI (the new name of Code.org) and Blockly Games as free structured options, CodeCombat for typed Python and JavaScript from 8, and Minecraft Education or Roblox Studio for fans of those games. Scratch, ScratchJr, CodeAI, Blockly Games and Roblox Studio are free; Tynker, Kodable, Lightbot, Minecraft Education and CodeCombat beyond its first levels are paid. Every fact here was checked at the maker\'s own site in September 2026.';
  j.meta.keywords = ['best coding games for kids', 'coding games for kids', 'programming games for kids', 'kids coding games', 'free coding games for kids', 'Scratch', 'ScratchJr', 'CodeAI', 'Code.org', 'Blockly Games', 'CodeCombat', 'Tynker', 'Minecraft Education', 'Roblox Studio'];
  j.meta.readTime = '12 min read';
  j.meta.dateModified = TODAY; j.meta.retarget = MARK;

  const game = (n, name, what, rows, note, extra) => [
    H(3, `${n}. ${name}`),
    P(what),
    T(['', 'Details'], rows),
    P(note),
    ...(extra ? [P(extra)] : []),
  ];

  // keep the five parent tips (generic advice, no claims) exactly as they were
  const tipsFrom = idx(old, (x) => x.type === 'heading' && x.id === 'parent-tips', 'parent tips');
  const tipsTo = idx(old, (x) => x.type === 'divider' && old.indexOf(x) > tipsFrom, 'divider after tips');
  const tips = old.slice(tipsFrom, tipsTo);

  const s = [
    { type: 'toc' },
    P('The best coding games for kids in 2026, by age: <strong>ScratchJr</strong> for 5 to 7 year olds, <strong>Scratch</strong> from 8, <strong>CodeAI</strong> (the new name of Code.org) and <strong>Blockly Games</strong> as free step-by-step courses, <strong>CodeCombat</strong> when a child is ready to type real Python or JavaScript, and <strong>Minecraft Education</strong> or <strong>Roblox Studio</strong> for children who already love those worlds.'),
    P('Five of the ten are free: Scratch, ScratchJr, CodeAI, Blockly Games and Roblox Studio. Tynker, Kodable, Lightbot and Minecraft Education are paid, and CodeCombat is free for its introductory levels. We checked every fact below on each maker\'s own website or app store listing on 23 September 2026, because this corner of the internet changes fast: Code.org renamed itself CodeAI in June 2026, and its Hour of Code is now the Hour of AI.'),
    H(2, 'All 10 coding games at a glance', 'quick-comparison'),
    T(['Game', 'Ages (maker)', 'Cost', 'What your child writes', 'Runs on'], [
      ['ScratchJr', '5 to 7', 'Free', 'Picture blocks, no reading needed', 'iPad, Android and Amazon tablets'],
      ['Scratch', '8 to 13+', 'Free', 'Drag-and-snap blocks', 'Web browser; offline app for Windows, macOS, ChromeOS, Android'],
      ['CodeAI (formerly Code.org)', 'Kindergarten to Grade 12', 'Free', 'Blocks, then JavaScript and Python', 'Web browser'],
      ['Blockly Games', 'Not stated (built for first-time coders)', 'Free, open source', 'Blocks, then JavaScript', 'Web browser, or downloaded for offline use'],
      ['Tynker', '5 to 18', 'Free start, paid plans', 'Picture blocks, blocks, then Python and JavaScript', 'Web, iPad, iPhone'],
      ['Kodable', '4 to 10', 'Paid, 7-day free trial', 'Drag-and-drop commands, then JavaScript', 'iPad, iPhone, web'],
      ['CodeCombat', '8+ (Junior 5 to 8)', 'Free first levels, then paid', 'Typed Python or JavaScript (also C++, Java, Lua)', 'Web; Junior also on Chromebooks and tablets'],
      ['Lightbot', 'All ages', 'Paid app (free web demo)', 'Commands that steer a robot', 'iPhone, iPad'],
      ['Minecraft Education', 'Not stated', 'Paid licence (school or family)', 'MakeCode blocks, then Python', 'Windows, Mac, ChromeOS, iPhone, iPad, Android'],
      ['Roblox Studio', 'Not stated (needs a Roblox account)', 'Free', 'Luau, a language based on Lua', 'Windows, Mac'],
    ]),
    P('"Ages (maker)" is the range each maker states itself; where a maker gives none, our suggested age is in the section below.'),
    H(2, 'Free coding games that teach the most', 'best-free'),
    ...game(1, 'Scratch (ages 8 to 13+, free)',
      'Scratch is where a great many children start coding. Kids drag blocks that snap together, so there is no syntax to get wrong, and they build games, animations and interactive stories from the first session. It was developed at the MIT Media Lab in 2007, and since 2019 it has been run by the Scratch Foundation, an independent nonprofit.',
      [['Made by', 'Scratch Foundation'], ['Cost', 'Free'], ['Ages stated by the maker', '8 to 13+'], ['Your child writes', 'Blocks, dragged and snapped together'], ['Runs on', 'Any web browser at scratch.mit.edu; an offline app for Windows 10+, macOS 10.13+, ChromeOS and Android 6.0+ (the Scratch Foundation lists no iPad app for full Scratch)']],
      'Why it is first on most lists: children learn loops, conditions, variables and events while making something they want to show off, and projects can be shared in a moderated online community.',
      `Want a teacher alongside? Our ${link(SCRATCH)} course takes ages 6 to 12 from their first sprite to finished games, live.`),
    ...game(2, 'ScratchJr (ages 5 to 7, free)',
      'ScratchJr is Scratch for young children. Its blocks are pictures rather than words, so a child can start before they can read, snapping blocks together to make characters move, jump, dance and sing.',
      [['Made by', 'Scratch Foundation; co-created by Marina Bers and Mitchel Resnick'], ['Cost', 'Free'], ['Ages stated by the maker', '5 to 7'], ['Your child writes', 'Icon-based blocks'], ['Runs on', 'iPad (iPadOS 11+), Android tablets of 7 inches or more, Amazon tablets']],
      'The natural first step for 5 to 7 year olds, and it leads straight into Scratch at about 8.'),
    ...game(3, 'CodeAI, formerly Code.org (Kindergarten to Grade 12, free)',
      'Code.org renamed itself <strong>CodeAI</strong> in June 2026; the address is still code.org. It is a nonprofit, and it states that every course, tool and activity is free. Younger children start with block-based coding such as Sprite Lab; older students move on to Game Lab (JavaScript), Web Lab (HTML, CSS and JavaScript) and Python Lab. Its famous Hour of Code is now called the <strong>Hour of AI</strong>.',
      [['Made by', 'CodeAI (formerly Code.org), a nonprofit'], ['Cost', 'Free, with no ads'], ['Ages stated by the maker', 'Kindergarten to Grade 12: Sprite Lab 5 to 12, Game Lab 12 to 18, Python Lab 13 to 18'], ['Your child writes', 'Blocks, then JavaScript, HTML, CSS and Python'], ['Runs on', 'Web browser']],
      'Best for children who like clear goals and step-by-step levels, and for families who want a free path from blocks to text code.'),
    ...game(4, 'Blockly Games (first-time coders, free)',
      'Blockly Games is a series of short browser games built on the Blockly library: Puzzle, Maze, Bird, Turtle, Movie, Music, Pond Tutor and Pond. Each introduces one idea, such as loops and conditions in Maze or functions in Music, and the last two switch between blocks and real JavaScript in a text editor.',
      [['Made by', 'An open-source project (the site names no company)'], ['Cost', 'Free, open source'], ['Ages stated by the maker', 'None; it is designed for children with no programming experience'], ['Your child writes', 'Blocks, then JavaScript'], ['Runs on', 'Web browser, or downloaded for offline use']],
      'We suggest it from about 8 as a quick, focused companion to Scratch, and as a gentle bridge to typed code at the end.'),
    H(2, 'Paid coding games and apps worth considering', 'paid'),
    ...game(5, 'Tynker (ages 5 to 18, free start and paid plans)',
      'Tynker is a full coding curriculum: picture blocks for young children, then block coding, then courses in Python and JavaScript. A placement test puts a child on a path by age and skill, and Minecraft fans can build their own mods, skins and add-ons.',
      [['Cost', 'Free to start; paid quarterly, yearly and lifetime plans covering up to 3 children'], ['Ages stated by the maker', '5 to 18 (Tynker Junior for the youngest)'], ['Your child writes', 'Picture blocks, blocks, then Python and JavaScript'], ['Runs on', 'Web, iPad, iPhone']],
      'Good for a child who wants one app that keeps going for years; the free part gives a taste, so expect to pay for a plan if it clicks.'),
    ...game(6, 'Kodable (ages 4 to 10, paid)',
      'Kodable uses drag-and-drop commands that need no reading or typing, then moves children on to real JavaScript in its later worlds. It also includes a typing game, and it describes itself as ad-free with no messaging between users.',
      [['Made by', 'SurfScore, Inc. (Kodable)'], ['Cost', 'Home use is a paid subscription with a 7-day free trial; teachers can create free accounts'], ['Ages stated by the maker', '4 to 10'], ['Your child writes', 'Drag-and-drop commands, then JavaScript'], ['Runs on', 'iPad, iPhone and the web']],
      'A calm choice for 4 to 7 year olds who are not reading yet, and it grows with them into JavaScript.'),
    ...game(7, 'CodeCombat (ages 8+, first levels free)',
      'CodeCombat is an adventure game in which you type real code, Python or JavaScript, to move your hero through each level. Unlike most games on this list, children learn actual syntax rather than blocks. A Junior version for ages 5 to 8 uses blocks or simple text.',
      [['Cost', 'Introductory levels free; a subscription unlocks the rest'], ['Ages stated by the maker', '8+ (CodeCombat Junior 5 to 8)'], ['Your child writes', 'Typed Python or JavaScript; C++, Java and Lua are also supported'], ['Runs on', 'Web at codecombat.com; Junior also on Chromebooks, tablets and iPads']],
      'The best bridge we know of from blocks to typing, for a child of about 9 to 12 who loves role-playing games.',
      `When your child wants to go further than the levels, our ${link(PYKIDS)} course (ages 9 to 12) teaches Python by building games and Turtle art.`),
    ...game(8, 'Lightbot (all ages, paid app)',
      'Lightbot is a puzzle game: you give a small robot commands to light up tiles, and in doing so learn procedures, loops and conditionals without typing any code. A free web demo made for the Hour of Code is on lightbot.com.',
      [['Made by', 'SpriteBox LLC'], ['Cost', 'Paid, one-time purchase (free web demo)'], ['Ages stated by the maker', 'All ages, designed for first-time coders'], ['Your child writes', 'Commands that steer the robot'], ['Runs on', 'iPhone and iPad']],
      'Fifty levels of pure logic; a good fit for a child who enjoys puzzles more than building their own projects.'),
    H(2, 'Coding games for Minecraft and Roblox fans', 'minecraft-roblox'),
    ...game(9, 'Minecraft Education (paid licence)',
      'Minecraft Education is a separate edition of Minecraft made for schools. Its Code Builder lets children program the game world with MakeCode blocks and then Python. It needs a licence: usually through a school, or through a commercial offer for homeschools and families, so check with your child\'s school first.',
      [['Made by', 'Mojang / Microsoft'], ['Cost', 'Paid licence (school, or a family and homeschool offer)'], ['Ages stated by the maker', 'Not stated; we suggest 7+'], ['Your child writes', 'MakeCode blocks, then Python'], ['Runs on', 'Windows, Mac, ChromeOS, iPhone, iPad, Android']],
      'The obvious pick for a Minecraft fan, because the code changes a world they already care about.',
      `Our ${link(MINE)} course (ages 7 to 12) takes Minecraft fans from blocks to real code with a teacher.`),
    ...game(10, 'Roblox Studio (free, Windows and Mac)',
      'Roblox Studio is the free tool for making Roblox games. Children script their games in <strong>Luau</strong>, Roblox\'s language derived from Lua 5.1, and can publish them to Roblox. It is the most demanding option on this list, and it needs a Roblox account, so set it up with your child.',
      [['Made by', 'Roblox Corporation'], ['Cost', 'Free'], ['Ages stated by the maker', 'Not stated; we suggest 10+, with a parent managing the account'], ['Your child writes', 'Luau (typed code)'], ['Runs on', 'Windows 10 and macOS 10.14 or later']],
      'Real game development with a real language, for a Roblox fan who is ready to type.',
      `Our ${link(ROBLOX)} course (ages 8 to 14) builds real Roblox games in Luau, live with a teacher.`),
    H(2, 'Which coding game for which age', 'age-recommendations'),
    T(['Age', 'Start with', 'Then try', 'For fans of'], [
      ['5 to 7', 'ScratchJr (free)', 'Kodable (paid trial), Lightbot', 'Puzzles: Lightbot'],
      ['8 to 9', 'Scratch (free)', 'CodeAI courses, Blockly Games', 'Minecraft: Minecraft Education'],
      ['10 to 12', 'Advanced Scratch projects', 'CodeCombat (typed Python or JavaScript)', 'Minecraft Education, Roblox Studio'],
      ['13+', 'Python (CodeAI Python Lab, or a course)', 'CodeCombat, CodeAI Game Lab (JavaScript)', 'Roblox Studio'],
    ]),
    P('Ages are a starting point, not a rule: a confident 7 year old can enjoy Scratch, and a 12 year old who has never coded should still start with blocks for a few weeks.'),
    ...tips,
    H(2, 'Coding games for kids: common questions', 'faqs'),
    { type: 'accordion', items: [
      { title: 'What is the best free coding game for kids?', content: 'Scratch for children aged about 8 and up, ScratchJr for 5 to 7 year olds, and Blockly Games for short, focused puzzles. CodeAI (formerly Code.org) is also completely free and gives a step-by-step path from blocks to JavaScript and Python.' },
      { title: 'Which coding games teach real code?', content: 'CodeCombat has children type Python or JavaScript, Roblox Studio uses Luau, and Blockly Games, Kodable and Tynker all move from blocks to JavaScript (Tynker also to Python). Block-based games still teach real programming ideas, loops, conditions and variables, which carry over to any language.' },
      { title: 'What happened to Code.org and the Hour of Code?', content: 'Code.org renamed itself CodeAI in June 2026, and its Hour of Code became the Hour of AI. The website is still code.org, and CodeAI says every course, tool and activity remains free.' },
      { title: 'Are free coding games as good as paid ones?', content: 'For a beginner, often yes: Scratch, ScratchJr, CodeAI and Blockly Games are enough for a year or more. Paid apps such as Tynker and Kodable add a longer structured path, progress reports and more content. Start free, and pay only once your child is hooked.' },
      { title: 'How much time should my child spend on coding games?', content: 'Our suggestion is short, regular sessions: 20 to 30 minutes three times a week for younger children, and up to an hour for older ones, with breaks when frustration shows. Making something counts for more than time spent.' },
      { title: 'My child just plays other people\'s projects. What should I do?', content: 'Encourage making over playing, for example one project of their own before browsing others. Platforms with levels, such as CodeAI, CodeCombat or Tynker, give more structure than open sandboxes.' },
      { title: 'Is Roblox Studio safe for kids?', content: 'Roblox Studio is a creation tool, but it needs a Roblox account, and games can be published to the Roblox platform. Set the account up with your child, review its settings together, and agree what they will publish and share. Never share personal information in a game or its description.' },
      { title: 'Can my child learn coding from games alone?', content: 'Games are excellent for starting and staying interested. Most children eventually benefit from structured teaching to fill gaps and to move to typed languages such as Python, which is where a course helps.' },
      { title: 'When should we move from coding games to a course?', content: 'When your child has finished the main content of their favourite game, wants to build bigger projects of their own, is ready to type code, or keeps getting stuck on the same idea.' },
    ] },
    H(2, 'Start with one game this week', 'conclusion'),
    P('Pick the game that matches your child\'s age and interests, play it with them for the first session, and ask them to show you what they made. The right coding game is the one they choose to open again tomorrow.'),
    { type: 'callout', calloutType: 'tip', title: 'When your child is ready for a teacher', text: `Our live classes build on what these games start. Ages 6 to 12: ${link(SCRATCH)}. Ages 8 to 12: ${link(GAMEDEV)}. Minecraft fans, 7 to 12: ${link(MINE)}. Roblox fans, 8 to 14: ${link(ROBLOX)}. Ready to type, 9 to 12: ${link(PYKIDS)}. The first class is a free demo, so you can see how it is taught before you decide.` },
  ];
  j.content.sections = s;
  save(name, j); console.log('retargeted', name);
})();

// ────────────────────────────────────────────────────── Scratch vs Python
// Search Console, page-filtered, 16 months to 2026-09-23: "scratch vs python" 1,097 impr @7.6 (0.2% CTR),
// "python vs scratch" 502 @7.0, "scratch python" 250, "python vs scratch for kids" 185 @10.5, "scratch vs python
// for kids" 118 @11, "difference between scratch and python" 75, "is scratch python" 19. Scratch facts from
// scratchfoundation.org (read 2026-09-23 for the coding-games rebuild): developed at the MIT Media Lab in 2007,
// run by the Scratch Foundation since 2019, ages 8-13+, free, "200 million kids create on Scratch for free",
// moderated community, offline app for Windows/macOS/ChromeOS/Android. EduBlocks from edublocks.org ("a free
// tool by Anaconda", blocks to Python). Python examples are scratch_python_programs.py with captured output.
// Removed: an invented "Real Scratch Success Story", "100M+ users, 900M+ projects", "works on any device",
// "used by Google, Netflix, Instagram, NASA", "decades of research", two "research/studies show" FAQ claims,
// and a Trinket feature claim that was not checked.
(function scratchVsPython() {
  const name = 'scratch-vs-python-young-learners.json';
  const j = load(name); if (j.meta.retarget === MARK) return console.log('skip', name);
  const s = j.content.sections;
  const progs = runs('scratch_python_programs');
  const get = (n) => progs.find((p) => p.n === n);
  const SCRATCH = course('scratch-programming-complete-course');
  const PYKIDS = course('python-ai-kids-masterclass');
  const TEENS = course('python-complete-masterclass-teens');

  j.meta.title = 'Scratch vs Python for Kids: The Difference and Which First';
  j.hero.title = j.meta.title;
  j.meta.description = 'Scratch vs Python: Scratch is free drag-and-drop blocks for ages 8 to 13+, Python is typed text code. The real differences, side-by-side code and which first.';
  j.meta.tldr = 'Scratch is a free block-based language from the Scratch Foundation for ages 8 to 13+: children snap blocks together and never type. Python is a text-based language used professionally: every line is typed. Most children do best starting with Scratch at about 8 to 10 and moving to Python from about 11; a child of 11 or more who types comfortably can start with Python. Scratch is not Python, but its loops, conditions and variables carry straight over.';
  addKeywords(j.meta, ['python vs scratch', 'scratch vs python for kids', 'difference between scratch and python', 'is scratch python', 'scratch or python', 'python vs scratch for kids']);
  j.meta.dateModified = TODAY; j.meta.retarget = MARK;

  s[1] = P('<strong>Scratch vs Python:</strong> Scratch is a free, block-based language from the Scratch Foundation, made for ages 8 to 13+, where children build programs by snapping blocks together and never type. Python is a text-based language used by professional programmers, where every line is typed. Most children do best starting with Scratch at about 8 to 10 and moving to Python from about 11; a child of 11 or older who types comfortably can start with Python directly.');
  s[2] = P('Is Scratch Python? No. They are separate languages, but the ideas are the same: a Scratch <em>repeat</em> block is a Python <code>for</code> loop, and <em>set score to 0</em> is <code>score = 0</code>. Below we compare them honestly, show the same programs side by side with their Python output, and set out when to move from one to the other.');

  const t = s[idx(s, (x) => x.type === 'table' && x.rows && x.rows[0][0] === 'Best Age Range', 'comparison table')];
  t.rows[0][1] = '8 to 13+ (Scratch Foundation)';
  t.rows = t.rows.map((r) => (r[0] === 'Community Size' ? ['Community', 'The Scratch Foundation says 200 million kids create on Scratch', 'Large and professional', 'Both excellent'] : r));

  const origin = idx(s, pStarts('Scratch is a visual programming language developed by MIT'), 'origin');
  s[origin] = P('Scratch is a visual programming language for children. It was developed at the MIT Media Lab in 2007 by a team led by Professor Mitchel Resnick, and since 2019 it has been run by the Scratch Foundation, an independent nonprofit. Instead of typing code, kids drag colourful blocks that snap together like puzzle pieces; each block is one instruction, such as move, turn, repeat or if-then.');
  const special = s[idx(s, (x) => x.type === 'list' && x.items.some((it) => /Huge community/.test(it)), 'scratch list')];
  special.items = special.items.map((it) => it
    .replace(/<strong>Huge community:<\/strong>.*/, '<strong>Huge community:</strong> the Scratch Foundation says 200 million kids create on Scratch, and projects can be shared and remixed in a moderated online community')
    .replace(/<strong>Completely free:<\/strong>.*/, '<strong>Completely free:</strong> runs in a web browser, with an offline app for Windows, macOS, ChromeOS and Android'));

  const gameLoop = idx(s, (x) => x.type === 'callout' && x.title === 'Scratch Block Example', 'scratch game loop');
  s.splice(gameLoop + 1, 0, P('The same idea in Python: a loop that keeps running until the game ends, then stops.'), ...codeAndOutput(get(4)));
  const story = idx(s, (x) => x.type === 'callout' && x.title === 'Real Scratch Success Story', 'success story');
  s.splice(story, 1);
  const pyIntro = idx(s, pStarts('Python is a professional programming language used by companies'), 'python intro');
  s[pyIntro] = P('Python is a professional, text-based programming language used for websites, data science, AI and automation. Don\'t let that intimidate you: it is also one of the most readable languages to start typing in, which is why so many schools teach it to teenagers.');

  const loopCallout = idx(s, (x) => x.type === 'callout' && x.title === 'Scratch Version' && /repeat \(10\)/.test(x.text), 'loop callout');
  s[loopCallout].text = s[loopCallout].text.replace('repeat (10)', 'repeat (3)');
  const swap = (re, n) => { const c = idx(s, (x) => x.type === 'code' && re.test(x.code), 'code ' + n); s.splice(c, 1, ...codeAndOutput(get(n))); };
  swap(/for i in range\(10\)/, 1);
  swap(/if score > 100/, 2);
  swap(/score = score \+ 10/, 3);

  const mit = idx(s, pStarts('Scratch IS real coding.'), 'mit research');
  s[mit] = P('Scratch IS real coding. It teaches real programming concepts. The visual interface is a feature, not a limitation: its designers built it so children can concentrate on ideas instead of typos.');

  const acc = s[idx(s, (x) => x.type === 'accordion', 'faq')];
  acc.items = acc.items.map((it) => {
    if (it.title === 'Can my child skip Scratch and start with Python?') it.content = 'Yes, if they are 11 or older, type reasonably well and have patience for debugging. Children who start with Scratch arrive at Python already understanding loops, conditions and variables, so they only have to learn the new way of writing them.';
    if (it.title === 'Will learning Scratch make Python harder because of different syntax?') it.content = 'No. Scratch builds the concepts, so in Python children are learning a new way to express ideas they already know, not new ideas and new syntax at once.';
    if (it.title === 'Are there tools that combine Scratch and Python?') it.content = 'Yes. EduBlocks, a free tool by Anaconda, uses drag-and-drop blocks in which each block is a line of Python, so children see exactly how blocks turn into text code.';
    if (it.title === 'What if my child hates Scratch but wants to code?') it.content = 'Some children find Scratch too childish or prefer text from the start. If they are motivated and 11 or older, try Python directly. As a middle ground, Blockly Games switches between blocks and JavaScript in its last levels, and CodeAI (formerly Code.org) has free text-based courses.';
    return it;
  });
  acc.items.unshift(
    { title: 'Is Scratch Python?', content: 'No. Scratch is its own block-based language from the Scratch Foundation, and Python is a separate text-based language. You cannot write Python inside Scratch, but the ideas, loops, conditions, variables and events, are the same, so moving from one to the other is mostly learning to type what you already know.' },
    { title: 'What is the difference between Scratch and Python?', content: 'Scratch uses drag-and-drop blocks, so there is no typing and no syntax errors, and it is built for children aged 8 to 13+. Python is typed text, used by professionals, with far more depth but more room for mistakes. Scratch is for learning; Python is for learning and for real work.' },
    { title: 'Scratch or Python: which is better for kids?', content: 'For most children under about 11, Scratch; for 11 and up who type comfortably, Python. The best path for most is Scratch first, then Python, because the concepts learned in blocks carry straight over.' });

  const ready = idx(s, (x) => x.type === 'callout' && x.title === 'Ready to Start?', 'ready callout');
  s[ready] = { type: 'callout', calloutType: 'tip', title: 'Scratch first, Python next, with a teacher', text: `Ages 6 to 12: <a href='${SCRATCH.url}'>${SCRATCH.title}</a>. Ready to type, 9 to 12: <a href='${PYKIDS.url}'>${PYKIDS.title}</a>. Ages 13 to 18: <a href='${TEENS.url}'>${TEENS.title}</a>. The first class is a free demo, so you can see how it is taught before you decide.` };

  save(name, j); console.log('retargeted', name);
})();
