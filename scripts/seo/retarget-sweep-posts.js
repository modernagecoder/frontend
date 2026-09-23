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
