'use strict';
// AP CSP Create performance task guide (ag- AP door; US cluster Phase 3, row 50).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md, plan docs/superpowers/plans/2026-10-17-us-cluster-build.md.
// Sources, College Board only, fetched raw with curl on 17 October 2026 (copies in
// keyword-research-2026-09/us/src/ap-csp-create-performance-task-guide/):
//  - ap-csp-student-task-directions.pdf (AP CSP Student Handouts, effective fall 2023): "a minimum of 9 hours of class
//    time"; Component A program code as one PDF; input from "the user (including user actions that trigger events)",
//    "a device", "an online data stream", "a file"; list, procedure, algorithm with "sequencing, selection, and
//    iteration"; video "No more than 1 minute in length", "No more than 30MB in file size", formats .webm, .mp4, .wmv,
//    .avi, .mov, no "Voice narration (though text captions are encouraged)"; PPR "should not include any comments",
//    "at least 10-point font size"; plagiarism gives "a score of 0 on the Create performance task"; generative AI
//    "as supplementary resources for understanding coding principles, assisting in code development, and debugging";
//    "You cannot submit any work from AP Central samples, curriculum provider samples, or practice performance tasks".
//  - ap-csp-personalized-project-reference-tip-sheet.pdf: "Each image box allows up to three screen captures."; "The
//    use of 12-point font is even better."; rotate wide code 90 degrees, "always rotate them in the same direction".
//  - ap-digital-portfolio-student-user-guide.pdf (updated summer 2026): three components; Submit Final; "only the latest
//    file version that you upload will be submitted as final"; programming language choice "will NOT impact your final
//    AP score"; "Do not publicly post or share any portions of your performance task."
//  - apcentral exam page: deadline Fri, Apr 30, 2027, 11:59 PM ET; the four written-response categories and their
//    learning objectives (CRD-2.B, AAP-2.J, CRD-2.I.a, AAP-1.D.b and others).
//  - course FAQs (exam; digital portfolio; plagiarism and AI): screen captures at 100% display; collaboration examples;
//    allot "at least 30 minutes" to submitting; resubmission "isn't allowed"; HTML "is a markup language and not a
//    programming language"; plagiarism notices by email, respond "within 6 weeks".
// Our own material, labelled on the page: the 8-week plan, the requirements checklist, and the practice-only Python
// example (run by us with Python 3.13: prints 2 and 5; count_long_words("comet", 3) returns 0) with practice prompts.
// Lesson family: procedural and data abstraction (a parameter that matters, a list that earns its place).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const PRACTICE = `# Practice only: never submit sample code
def count_long_words(words, min_length):
    total = 0
    for word in words:
        if len(word) >= min_length:
            total = total + 1
    return total

spelling_list = ["orbit", "comet", "nebula", "star", "galaxy"]
print(count_long_words(spelling_list, 6))
print(count_long_words(spelling_list, 0))`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'AP CSP CREATE TASK', blurb: 'The AP CSP Create performance task from College Board&rsquo;s own handouts: what to build, the video and PPR rules, AI use, and the April deadline.' },
  slug: 'ap-csp-create-performance-task-guide',
  code: 'accp',
  accent: '#38688F',
  accentRationale: 'AP CSP Create task guide, US: a muted slate blue #38688F from the US allocation table, set apart from the green and teal AP calculator and practice pages',
  pageType: 'market',
  market: US,
  routeLabel: 'AP CSP Create task guide',
  title: 'AP CSP Create Performance Task Guide: Rules, PPR and Deadline',
  description: 'AP CSP Create performance task guide: the program requirements, the 1-minute video and PPR rules, what AI help is allowed, and the April 30, 2027 deadline to submit.',
  ogDescription: 'Everything the College Board handouts require for the AP CSP Create task, in one place: program code, video, Personalized Project Reference, AI rules and how to submit as final.',
  twitterDescription: 'The AP CSP Create task from the official handouts: code, video, PPR, AI rules, deadline.',
  pageName: 'AP CSP Create Performance Task Guide',
  webPageDescription: 'A guide for US students to the AP Computer Science Principles Create performance task, built from College Board&rsquo;s student handouts, tip sheet, Digital Portfolio guide and FAQs.',
  courseDescription: 'Live online AP Computer Science Principles preparation for US students, teaching the concepts behind the Create performance task and the written responses, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'AP CSP Create task guide',
  navLinks: [
    { href: '#components', label: 'Components' },
    { href: '#program', label: 'Program' },
    { href: '#ppr', label: 'PPR' },
    { href: '#ai', label: 'AI and help' },
    { href: '#submit', label: 'Submitting' },
    { href: '#practice', label: 'Practice' }
  ],
  eyebrow: 'United States &middot; Grades 9 to 12 &middot; AP Computer Science Principles',
  h1: 'AP CSP Create performance task guide',
  lede: 'The Create performance task is the part of AP Computer Science Principles you build yourself, over several weeks of class time, before the exam. It is also the part where students lose points for reasons that have nothing to do with how good their program is: a video with narration, a comment left in a screen capture, a file that was uploaded but never submitted as final. This guide pulls together what College Board&rsquo;s own handouts, tip sheet, Digital Portfolio guide and FAQs say, in the order a student meets it, with the exact limits and the exact deadline. It does not give you a project to submit. College Board forbids that, and we teach the ideas so the program is yours.',
  secondaryCta: { href: '#components', label: 'See the three components' },
  wa: 'Hello Modern Age Coders, my teen in the US is starting the AP CSP Create performance task and wants to understand the concepts properly. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; The concepts, never the scored work',
  spec: [
    ['Task', 'AP CSP Create performance task'],
    ['Class time', 'At least 9 hours'],
    ['Components', 'Code, video, PPR'],
    ['Video limit', '1 minute, 30MB'],
    ['Deadline', 'April 30, 2027, 11:59 PM ET'],
    ['Exam day', 'Friday, May 14, 2027'],
    ['Lessons', 'Batch or 1-on-1'],
    ['Begin', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'The AP CSP Create performance task asks you to build a program of your choice in at least 9 hours of class time and submit three components as final in the AP Digital Portfolio: your program code as a PDF, a video of up to 1 minute with no narration, and a Personalized Project Reference of screen captures with no comments. The deadline for the 2027 exam is April 30, 2027, at 11:59 PM ET.',

  picks: {
    eyebrow: 'Learn the ideas first',
    h2: 'Three courses that build the skills the Create task checks',
    lede: 'Procedures, parameters, lists and explaining your own code: these courses teach them before the scored task begins, so the student arrives ready.',
    items: [
      { course: 'ap-computer-science-principles-exam-prep-course', code: 'ACCP / 01', title: 'AP Computer Science Principles prep', note: 'Grades 9 to 12. All five big ideas and the written responses.' },
      { course: 'python-complete-masterclass-teens', code: 'ACCP / 02', title: 'Python for teens', note: 'Ages 13 to 18. Functions and lists in a readable language.' },
      { course: 'javascript-course-for-teens-beginners-interactive-web', code: 'ACCP / 03', title: 'JavaScript for teens', note: 'Ages 13 to 18. Events, inputs and outputs in the browser.' }
    ]
  },

  sections: [
    {
      id: 'components', tint: 'tint', eyebrow: 'What you submit',
      h2: 'The three components, and who may help with each',
      lede: 'College Board&rsquo;s Student Handouts set out three components. The rule on collaboration is different for each one, and that difference trips students up.',
      body: [
        { kind: 'table', caption: 'Create performance task components, from the AP CSP Student Handouts and Digital Portfolio guide (read 17 October 2026)', head: ['Component', 'What it is', 'Who may work on it'], rows: [
          ['A: Program code', 'One PDF with all of your program code, including comments, with acknowledgment of any code someone else wrote', 'You alone, or with your partner(s)'],
          ['B: Video', 'One video of your program running, showing input, at least one aspect of functionality, and output', 'You alone, no collaboration'],
          ['C: Personalized Project Reference', 'Screen captures of your own code segments: a procedure and a call to it, a list being stored and a list being used', 'You alone, no collaboration']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Time in class',
          left: [
            'The handouts say you "will be provided with a minimum of 9 hours of class time" to complete and submit the three components. The FAQ adds that students may work outside the classroom as long as they have been given that class time.',
            'Nine hours sounds generous until you count it: planning, building, testing, recording, capturing and checking. Students who arrive already comfortable with procedures and lists use those hours to build, not to learn.'
          ],
          rightH3: 'Partners, and what they may do',
          right: [
            'College Board&rsquo;s FAQ gives examples of acceptable collaboration on the program: two students writing it together, perhaps with pair programming; splitting a larger program into parts; giving feedback; or helping each other debug.',
            'Code you were not actively involved in writing should be cited, and the FAQ says it should not be used in your Personalized Project Reference. To keep the work anonymous, you say a part was written by your collaborative peer rather than naming them.'
          ] },
        { kind: 'source', html: 'Sources, read 17 October 2026: <a class="ag-inline-link" href="https://apcentral.collegeboard.org/media/pdf/ap-csp-student-task-directions.pdf" rel="noopener" target="_blank">AP CSP Student Handouts</a>, <a class="ag-inline-link" href="https://apcentral.collegeboard.org/media/pdf/ap-digital-portfolio-student-user-guide.pdf" rel="noopener" target="_blank">AP Digital Portfolio Student User Guide</a> and <a class="ag-inline-link" href="https://apcentral.collegeboard.org/courses/ap-computer-science-principles/course/faq/about-ap-csp-exam" rel="noopener" target="_blank">AP CSP: Questions About the Exam</a>. We are not connected with College Board.' }
      ]
    },
    {
      id: 'program', tint: 'deep', eyebrow: 'Component A',
      h2: 'What the program has to contain',
      lede: 'You choose the program: College Board says it can be an app, a game, art or anything else, in the language of your choice. What it must contain is fixed.',
      body: [
        { kind: 'table', caption: 'Program requirements, from the AP CSP Student Handouts (read 17 October 2026)', head: ['Requirement', 'What counts'], rows: [
          ['Input', 'From "the user (including user actions that trigger events)", "a device", "an online data stream" or "a file"'],
          ['A list or other collection', 'Used to store data and manage complexity, so the program is easier to develop or maintain than it would be without it'],
          ['A student-developed procedure', 'With a name, a return type if needed, and one or more parameters, that helps fulfil the program&rsquo;s purpose'],
          ['An algorithm inside it', 'Using sequencing, selection and iteration, in the body of that procedure'],
          ['Calls to the procedure', 'Your own program calling your own procedure'],
          ['Output', 'Tactile, audible, visual or textual, based on input and functionality']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What does not count as yours',
          left: [
            'The handouts say that built-in or existing procedures and language structures, "such as event handlers or main methods", are not considered student-developed. A click handler is not your procedure, even if you wrote the code inside it.',
            'Any existing program code you use "needs to be extended in some new way by adding new functionality", and must be cited, with credit given to the author.'
          ],
          rightH3: 'Choosing a language',
          right: [
            'There is no required language. When you submit the code, the Digital Portfolio asks which language you used, and College Board says that choice "will NOT impact your final AP score".',
            'One limit from the FAQ: HTML "is a markup language and not a programming language" for this task. A web page alone will not meet the requirements; it needs a real program behind it, for example in JavaScript.'
          ] }
      ]
    },
    {
      id: 'video', tint: 'tint', eyebrow: 'Component B',
      h2: 'The video: short, silent and anonymous',
      lede: 'The video is the easiest component to get right and the easiest to get wrong on a technicality. These limits are from the Student Handouts.',
      body: [
        { kind: 'table', caption: 'Video rules, from the AP CSP Student Handouts (read 17 October 2026)', head: ['Rule', 'Limit'], rows: [
          ['Must show', 'Input to your program, at least one aspect of its functionality, and its output'],
          ['Length', 'No more than 1 minute'],
          ['File size', 'No more than 30MB'],
          ['Format', '.webm, .mp4, .wmv, .avi or .mov'],
          ['Must not contain', 'Any distinguishing information about yourself, or voice narration'],
          ['Allowed', 'Text captions, which the handouts encourage']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Make input visible',
          left: [
            'If your program takes input from a click, show the pointer and the result. If it reads a file, show the file being chosen. The 2026 Scoring Guidelines allow the reader to look at the code if the source of input is unclear, but a clear video saves them the trouble.',
            'The guidelines are also explicit that screenshots or storyboards are not acceptable: the video must show the program actually running.'
          ],
          rightH3: 'Our checklist before recording',
          right: [
            'Close anything that shows your name: browser profiles, file paths, chat windows, a sign-in badge in the corner of an editor.',
            'Turn the microphone off rather than relying on staying quiet, and check the finished file is under a minute and under 30MB before you upload it.'
          ] }
      ]
    },
    {
      id: 'ppr', tint: 'deep', eyebrow: 'Component C',
      h2: 'The Personalized Project Reference, the component that matters on exam day',
      lede: 'The Personalized Project Reference, or PPR, is what you will have in front of you when you answer the written-response questions. It has strict rules, and breaking one can cost the whole task.',
      body: [
        { kind: 'table', caption: 'PPR rules, from the Student Handouts, the PPR Tip Sheet and the exam FAQ (read 17 October 2026)', head: ['Section', 'Capture 1', 'Capture 2'], rows: [
          ['Procedure', 'Your procedure: its name and return type if needed, one or more parameters that affect what it does, and an algorithm with sequencing, selection and iteration', 'Where your procedure is called in the program'],
          ['List', 'How data is stored in the list', 'The same list being used, for example creating new data from it or accessing several of its elements']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>No comments, anywhere.</b> The handouts say your code segments "should not include any comments", and that course content or comments in the PPR lead to a score of 0 on the Create performance task, including the written responses.',
          '<b>Readable text.</b> At least 10-point font. The tip sheet adds: "The use of 12-point font is even better."',
          '<b>Capture at 100 percent.</b> The FAQ says to take captures while the application displays at 100%, and the tip sheet warns against zooming out and enlarging later, which makes text blurry.',
          '<b>Split long code.</b> "Each image box allows up to three screen captures." For a long segment, capture it in sections and upload them in order.',
          '<b>Handle wide code.</b> Shorten long lines with variables if you can. If not, the tip sheet says to rotate the captures 90 degrees and "always rotate them in the same direction".',
          '<b>Print it once.</b> Saving the PPR in the Digital Portfolio creates a PDF; print it and read it before submitting as final, because that printout is close to what you will have on exam day.'
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://apcentral.collegeboard.org/media/pdf/ap-csp-personalized-project-reference-tip-sheet.pdf" rel="noopener" target="_blank">AP CSP Personalized Project Reference Tip Sheet</a> and the AP CSP Student Handouts, read 17 October 2026. The exam-day prompts change every year.' }
      ]
    },
    {
      id: 'written', tint: 'tint', eyebrow: 'On exam day',
      h2: 'The four written-response prompts your PPR has to support',
      lede: 'On the end-of-course exam you answer two questions, split into four prompts, about the code in your PPR. AP Central lists the learning objectives each prompt can assess.',
      body: [
        { kind: 'table', caption: 'Written-response categories and some of their learning objectives, from the AP CSP exam page (read 17 October 2026)', head: ['Prompt', 'Category', 'Examples of objectives it can assess'], rows: [
          ['Written Response 1', 'Program Design, Function, and Purpose', 'CRD-2.B explain how a code segment functions; CRD-2.C and CRD-2.D identify inputs and outputs; CRD-2.G documentation'],
          ['Written Response 2(a)', 'Algorithm Development', 'AAP-2.J express an algorithm that uses iteration without a programming language; AAP-2.L compare algorithms'],
          ['Written Response 2(b)', 'Errors and Testing', 'CRD-2.I.a identify the error; CRD-2.I.b correct it; CRD-2.J choose inputs and expected outputs to test'],
          ['Written Response 2(c)', 'Data and Procedural Abstraction', 'AAP-1.D.b how a list manages complexity; AAP-3.B how a procedure manages complexity']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why the PPR choices matter',
          left: [
            'Every prompt points at the PPR. If your procedure has a parameter that does nothing, or your list holds one item, the prompt about it has nothing real to grip, and the answer is hard to write well.',
            'So choose PPR segments with the exam in mind: a procedure whose parameter clearly changes the result, a loop whose stopping point you can name, and a list whose removal would make the code longer.'
          ],
          rightH3: 'Practice before you submit',
          right: [
            'College Board&rsquo;s FAQ advises completing some practice written-response prompts before submitting the components as final, so students discover whether the PPR contains all the code segments they need.',
            'That is the single most useful piece of advice in the whole FAQ. Once submitted as final, nothing can be changed unless a teacher returns the component.'
          ] }
      ]
    },
    {
      id: 'ai', tint: 'deep', eyebrow: 'Help, AI and plagiarism',
      h2: 'What help is allowed, and what costs the whole task',
      lede: 'College Board&rsquo;s rules on generative AI and plagiarism are clear once laid side by side. The consequences are not small.',
      body: [
        { kind: 'table', caption: 'Help and integrity rules, from the Student Handouts and the AP CSP plagiarism and AI FAQ (read 17 October 2026)', head: ['Question', 'What College Board says'], rows: [
          ['Can I use generative AI?', 'Yes, "as supplementary resources for understanding coding principles, assisting in code development, and debugging"'],
          ['What must I do if I use it?', 'Review and understand any code co-written with AI, be ready to explain it in detail on the exam, and acknowledge it through citation, attribution or reference'],
          ['What counts as plagiarism?', 'Using code, media, data, information or evidence created by someone else or with generative AI tools without appropriate acknowledgment'],
          ['What is the penalty?', 'A score of 0 on the Create performance task, including the written responses on the end-of-course exam'],
          ['Can I reuse a class practice task?', 'No: "You cannot submit any work from AP Central samples, curriculum provider samples, or practice performance tasks"'],
          ['Can I post my project online?', 'No. The Digital Portfolio guide says: "Do not publicly post or share any portions of your performance task."'],
          ['How would I be told?', 'By email to your College Board account, usually in the summer, with 6 weeks to respond']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What a teacher may and may not do',
          left: [
            'The handouts say that once your teacher assigns the task for AP scoring, you complete it without help from anyone except your partner, and then only on the program code. The FAQ adds that teachers may not give feedback on the three components until after they are submitted as final.',
            'Teachers may check that the right, uncorrupted files were uploaded, and check the PPR for comments and course content. That is all.'
          ],
          rightH3: 'How we teach around those rules',
          right: [
            'We teach the concepts, and we set practice projects that are deliberately different from anything a student would submit. During the scored task we do not look at, suggest or fix the student&rsquo;s Create code, video or PPR.',
            'If a student uses AI while learning, we ask them to explain every line back in their own words, which is exactly what the written responses demand. Our post on <a class="ag-inline-link" href="/blog/how-to-use-chatgpt-to-study-without-cheating">studying with ChatGPT without cheating</a> covers the habit.'
          ] }
      ]
    },
    {
      id: 'submit', tint: 'tint', eyebrow: 'Submitting as final',
      h2: 'Getting all three components scored before the deadline',
      lede: 'Uploading is not submitting. Only components marked Submitted in the AP Digital Portfolio are sent for scoring.',
      body: [
        { kind: 'ol', items: [
          '<b>Join the class section.</b> Use the join code from your teacher in My AP; homeschooled and virtual school students get theirs from the AP coordinator at the school where they test.',
          '<b>Upload, then check.</b> If you upload more than one version, the Digital Portfolio guide says "only the latest file version that you upload will be submitted as final".',
          '<b>Submit each component as final.</b> Open each one, view the file you are submitting, confirm personal information has been removed, and confirm you cannot change it afterwards.',
          '<b>Attest.</b> Agree that the work is original and accept the terms. A confirmation window shows College Board received it.',
          '<b>Leave time.</b> The FAQ advises allowing at least 30 minutes to submit all three, and warns that uploads slow down near the deadline of April 30, 2027, at 11:59 PM ET.',
          '<b>Then sit the exam.</b> The end-of-course exam is on Friday, May 14, 2027. A student who submits the task but skips the exam has the score cancelled.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'No second chances',
          left: [
            'College Board&rsquo;s FAQ is plain: "resubmission of performance tasks across any of the AP Exams isn&rsquo;t allowed", apart from rare extreme circumstances. Extensions to the deadline are not guaranteed.',
            'So treat the April date as the end of the work, not the start of the upload.'
          ],
          rightH3: 'Planning backwards from April 30',
          right: [
            'Our own rule for students: everything submitted as final by mid-April, a printed PPR read once, and two practice written responses answered from it before then.',
            'For how the task fits into the score, read our <a class="ag-inline-link" href="/ap-computer-science-principles-online-coaching">AP Computer Science Principles coaching</a> page.'
          ] }
      ]
    },
    {
      id: 'practice', tint: 'deep', eyebrow: 'A practice exercise',
      h2: 'Practise the ideas on code that is not your project',
      lede: 'This tiny program is ours and is for practice only. It must never be submitted: College Board forbids submitting sample or practice work. It shows, in eight lines, what a procedure with a meaningful parameter and a list in use look like.',
      body: [
        { kind: 'code', label: 'practice.py &middot; practice only, never submit', lang: 'python', code: PRACTICE, note: 'Run by us on 17 October 2026 with Python 3.13. Output: 2, then 5.' },
        { kind: 'table', mt: true, caption: 'Practice prompts on the example, in the style of the four categories (ours; model answers are ours)', head: ['Practice prompt', 'One acceptable answer'], rows: [
          ['What does min_length do?', 'It sets the shortest word that counts. With 6 the call returns 2 (nebula and galaxy); with 0 it returns 5, every word.'],
          ['What stops the iteration?', 'The for loop ends after the last element of words, so it stops when every item in the list has been checked.'],
          ['Give a call that behaves incorrectly', 'count_long_words("comet", 3) returns 0, because a string is passed instead of a list, so the loop visits single letters, each of length 1.'],
          ['How does the list manage complexity?', 'One variable holds every word, so the same loop works for five words or five hundred. Without it you would need a variable and an if statement per word.']
        ] },
        { kind: 'p', mt: true, html: 'Write your own answers before reading ours, in two or three sentences each. Then do the same exercise, out loud, on a practice project your teacher sets. For a broader look at the two AP computer science courses, see <a class="ag-inline-link" href="/blog/ap-csp-vs-ap-csa-which-to-take-first">AP CSP or AP CSA first</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'An eight-week plan',
    h2: 'Eight weeks from idea to submitted as final',
    lede: 'Our suggested pacing for the weeks around the scored task. Your teacher sets the real class-time schedule.',
    table: { caption: 'An eight-week Create task plan (ours)', head: ['Weeks', 'Focus'], rows: [
      ['1 to 2', 'Practice projects: procedures with parameters, lists in use'],
      ['3', 'Choose an idea that needs a list and a real procedure'],
      ['4 to 6', 'Build and test during class time, cite anything not yours'],
      ['7', 'Video, PPR captures, a printed check, practice prompts'],
      ['8', 'Submit all three as final, well before April 30']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask your teen to show you the Submitted status for all three components. Uploaded is not enough.',
      'You cannot help with the scored work either. Encouragement and a quiet room are fine.'
    ] },
    right: { h3: 'For students', ps: [
      'Pick a project small enough to finish and explain. A clear small program beats a clever unfinished one.',
      'Remove every comment before capturing the PPR, and print it once to check.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for AP CSP students and beyond',
    lede: 'All live online, with a regular teacher, in a group batch or one to one.',
    bands: [
      { num: 'I', h3: 'AP courses', sub: 'Grades 9 to 12', courses: [
        { code: 'ACCP / AP / 01', slug: 'ap-computer-science-principles-exam-prep-course', title: 'AP CSP prep', blurb: 'Big ideas, written responses, practice tasks.' },
        { code: 'ACCP / AP / 02', slug: 'ap-computer-science-a-java-exam-prep-course', title: 'AP CSA prep', blurb: 'The Java exam after CSP.' },
        { code: 'ACCP / AP / 03', slug: 'ap-statistics-maths-exam-prep-course', title: 'AP Statistics', blurb: 'Data, inference and clear writing.' }
      ] },
      { num: 'II', h3: 'Languages', sub: 'Ages 13 to 18', courses: [
        { code: 'ACCP / LG / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Readable code, real projects.' },
        { code: 'ACCP / LG / 02', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Event-driven programs on the web.' },
        { code: 'ACCP / LG / 03', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Objects, classes and methods.' }
      ] },
      { num: 'III', h3: 'Projects', sub: 'Ages 13 to 18', courses: [
        { code: 'ACCP / PJ / 01', slug: 'full-stack-web-development-teens-masterclass', title: 'Full stack for teens', blurb: 'Apps with a front end and a server.' },
        { code: 'ACCP / PJ / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Programs that read real data.' },
        { code: 'ACCP / PJ / 03', slug: 'vibe-coding-for-teens-python-web-ai-projects-course', title: 'Building with AI, for teens', blurb: 'AI as a helper, explained line by line.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Concepts taught live, the project left to the student',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Late afternoon and evening, any US time zone.' },
      { time: 'Weekends', l: 'Time for longer practice projects.' },
      { time: '1-on-1', l: 'Planned around the school&rsquo;s task window.' }
    ],
    cells: [
      { h3: 'A regular teacher', p: 'Who knows where the student is in the year.' },
      { h3: 'Practice projects', p: 'Different from anything a student submits.' },
      { h3: 'Explaining code', p: 'Every lesson ends with the student explaining.' },
      { h3: 'Rules first', p: 'No help on scored work, ever.' },
      { h3: 'Online, every state', p: 'From home, on video.' },
      { h3: 'Two formats', p: 'Fifteen to twenty in a batch, or one to one.' }
    ]
  },

  projectsH2: 'Projects our students have built',
  projectsLede: 'Built in class by students learning the same ideas, never scored AP work. See the <a class="ag-inline-link" href="/student-labs">student labs</a> for more.',
  reviewsLede: 'Parents&rsquo; words, taken from Google.',

  fees: {
    h2: 'Fees',
    lede: 'Teaching is paid monthly in US dollars. There is no contract for the term, so a family can stop at the end of any month, including once the task is submitted.',
    free: ['A free first lesson', 'Ask about the rules', 'No card details'],
    group: ['Fifteen to twenty students', 'One regular teacher', 'Choose your batch', 'Paid monthly'],
    one: ['A private teacher', 'At times that suit you', 'Paced to your class window']
  },

  faq: {
    eyebrow: 'Questions from students',
    h2: 'The AP CSP Create task: common questions',
    items: [
      { q: 'What is the AP CSP Create performance task?', a: 'It is the through-course part of the AP Computer Science Principles exam. You build a program of your choice in at least 9 hours of class time and submit your program code, a video and a Personalized Project Reference as final in the AP Digital Portfolio.' },
      { q: 'When is the AP CSP Create task due in 2027?', a: 'AP Central lists Friday, April 30, 2027, at 11:59 PM ET as the deadline to submit all components as final.' },
      { q: 'How long can the Create task video be?', a: 'No more than 1 minute and no more than 30MB, in .webm, .mp4, .wmv, .avi or .mov format, with no voice narration and nothing that identifies you. Text captions are encouraged.' },
      { q: 'Can my Personalized Project Reference have comments?', a: 'No. College Board says comments or course content in the PPR result in a score of 0 on the Create performance task, including the written responses.' },
      { q: 'Can I use ChatGPT or other AI for the Create task?', a: 'College Board allows generative AI as a supplementary resource for understanding coding principles, helping with code development and debugging. You must understand and be able to explain any AI-assisted code and acknowledge it.' },
      { q: 'Can I work with a partner on the Create task?', a: 'Only on the program code. The video and the Personalized Project Reference must be made individually, and the written responses are answered alone on exam day.' },
      { q: 'Can I use HTML for the Create task?', a: 'College Board says HTML is a markup language, not a programming language that can be used for the task. You need a real programming language such as Python or JavaScript.' },
      { q: 'Can I change my Create task after submitting it as final?', a: 'No, unless your teacher returns a component to you. College Board also says resubmitting performance tasks is not allowed except in rare extreme circumstances.' },
      { q: 'Will you help with my Create task code?', a: 'No. We teach the concepts and set separate practice projects. During the scored task we do not look at, suggest or fix a student\'s Create work, which College Board does not allow.' },
      { q: 'What times are AP CSP lessons for US students?', a: 'Weekdays or weekends, flexible. Choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'How much do AP CSP lessons cost?', a: 'The first lesson is free. After that, lessons are paid month by month, with the monthly amount shown in US dollars in the fees section.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for US students in AP Computer Science Principles.',
    items: [
      { href: '/ap-computer-science-principles-online-coaching', label: 'AP CSP coaching', p: 'The live course, start to finish.' },
      { href: '/blog/ap-csp-vs-ap-csa-which-to-take-first', label: 'AP CSP or AP CSA', p: 'Choosing the first course.' },
      { href: '/blog/how-to-use-chatgpt-to-study-without-cheating', label: 'AI and honest study', p: 'Habits that keep work your own.' },
      { href: '/how-to-debug-code', label: 'How to debug code', p: 'For the testing prompt.' },
      { href: '/congressional-app-challenge-guide', label: 'Congressional App Challenge', p: 'A place for a project after AP.' },
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'All our US pages.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Tell us where your class is in the year. The first lesson is about the concepts: procedures, parameters and lists, on a practice program that has nothing to do with your submission.',
    readFirst: 'For how lessons work, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>; for every syllabus, the <a class="ag-inline-link" href="/courses">courses page</a>.',
    note: 'We teach live on video from India, so there is no local centre to visit. For US families, WhatsApp is the quickest way to ask a question.',
    formNote: 'A free first lesson, and no card is needed.'
  },

  footer: {
    cols: [
      { h4: 'AP computer science', links: [
        { href: '/ap-computer-science-principles-online-coaching', label: 'AP CSP coaching' },
        { href: '/ap-computer-science-a-online-classes', label: 'AP CSA classes' },
        { href: '/blog/ap-csp-vs-ap-csa-which-to-take-first', label: 'AP CSP or AP CSA' },
        { href: '/congressional-app-challenge-guide', label: 'Congressional App Challenge' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/coding-for-15-year-olds', label: 'Coding for 15 year olds' },
        { href: '/homeschool-coding-curriculum', label: 'Homeschool coding' },
        { href: '/computer-science-extracurriculars', label: 'CS extracurriculars' }
      ] }
    ],
    bottomRight: 'A parameter that matters, a list that earns its place'
  },

  personalityCss: `
.ag-root.ag-accp .ag-hero h1 { letter-spacing: -0.016em; }
.ag-root.ag-accp .ag-capsule { border-left-width: 6px; border-radius: 0; }
.ag-root.ag-accp .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-accp .ag-table caption { text-align: left; font-style: normal; }
.ag-root.ag-accp .ag-slots { gap: 1.05rem; }
`,

  dossier: {
    curriculumAuthority: 'College Board, read raw on 17 October 2026: AP CSP Student Handouts (9 hours minimum; components A, B, C; input sources; list, procedure, algorithm; video 1 minute, 30MB, formats, no narration; PPR no comments, 10-point font; plagiarism 0; generative AI use; no sample or practice work); PPR Tip Sheet (three captures per box, 12-point better, rotate in the same direction); Digital Portfolio Student Guide, summer 2026 (Submit Final, latest version, language choice does not affect score, do not post); exam page (April 30, 2027 deadline, written-response categories and objectives); FAQs on the exam, the portfolio and plagiarism and AI.',
    localProject: 'A practice-only Python example (count_long_words, run by us: 2 and 5; count_long_words("comet", 3) returns 0) with four practice prompts and model answers in the style of the written-response categories, plus an eight-week plan of our own. Lesson family: procedural and data abstraction.',
    requiredMentions: ['a minimum of 9 hours of class time', 'No more than 30MB', '.webm, .mp4, .wmv, .avi or .mov', 'The use of 12-point font is even better.', 'Each image box allows up to three screen captures.', 'only the latest file version that you upload will be submitted as final', 'Do not publicly post or share any portions of your performance task.', 'count_long_words("comet", 3) returns 0', 'AAP-2.J', 'April 30, 2027, at 11:59 PM ET'],
    sources: [
      { claim: 'Components, requirements, video and PPR rules, plagiarism and AI policy.', url: 'https://apcentral.collegeboard.org/media/pdf/ap-csp-student-task-directions.pdf' },
      { claim: 'PPR capture advice.', url: 'https://apcentral.collegeboard.org/media/pdf/ap-csp-personalized-project-reference-tip-sheet.pdf' },
      { claim: 'Submitting as final, latest version, language choice, do not post.', url: 'https://apcentral.collegeboard.org/media/pdf/ap-digital-portfolio-student-user-guide.pdf' },
      { claim: 'Deadline, exam date, written-response categories and objectives.', url: 'https://apcentral.collegeboard.org/courses/ap-computer-science-principles/exam' },
      { claim: 'Collaboration examples, 100% capture, 30 minutes to submit, no resubmission, HTML.', url: 'https://apcentral.collegeboard.org/courses/ap-computer-science-principles/course/faq/about-ap-csp-exam' },
      { claim: 'Generative AI acknowledgment; plagiarism notification and 6 weeks to respond.', url: 'https://apcentral.collegeboard.org/courses/ap-computer-science-principles/course/frequently-asked-questions/questions-about-plagiarism-and-ai' }
    ],
    rejectedClaims: [
      'The 750 and 850 word limits in an FAQ answer: they describe an older written-response format, so not printed.',
      'A ready-made Create project or PPR: never given; the only code is a short practice example labelled never to submit.',
      'Help with any student&rsquo;s scored Create work: not offered, and the page says so.',
      'That plagiarism is reported to colleges: College Board says it is not; not discussed beyond the rules.',
      'Any affiliation with College Board: none, and the page says so.'
    ]
  }
};
