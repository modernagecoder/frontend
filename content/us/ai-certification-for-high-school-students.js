'use strict';
// AI certification for high school students (ag- topic door; US cluster Phase 2, row 22).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md; plan docs/superpowers/plans/2026-10-17-us-cluster-build.md.
// Sources, read raw with curl on 17 October 2026 (copies in keyword-research-2026-09/us/src/ai-certification-for-high-school-students/):
//  - Certiport, IT Specialist Certify page (certiport.pearsonvue.com/Certifications/ITSpecialist/Certification/Certify):
//    Artificial Intelligence exam, "Candidates for this exam are AI enabled learners and are prepared for the professional
//    use of AI by understanding how AI can be used to solve problems."; the exams are "best suited for ages 14 and up"
//    (paraphrased on the page to keep the visible "best" count at zero); "valid from the date they are passed and are a
//    one-time issuance"; "approximately 150 hours of instruction and hands-on experience with the exam topic".
//  - Certiport, IT Specialist Overview: ACE "recommended credit amount is three credits per IT Specialist exam passed".
//  - Certiport, Exam lengths: "IT Specialist (each exam is 50 minutes)", "Artificial Intelligence: 45 - 50 Questions".
//  - Certiport blog, 29 April 2026, "We're updating the IT Specialist AI certification": Objective 2 split into "Data
//    Collection & Transformation" and "Feature Engineering"; "Objective 4.1 now covers Natural Language Processing (NLP)";
//    English, Spanish and French updates "go live in June 2026".
//  - Microsoft Learn, Exam AI-901: Microsoft Azure AI Fundamentals: "Passing score: 700"; "Identify AI concepts and
//    capabilities (40-45%)", "Implement AI solutions by using Microsoft Foundry (55-60%)"; English version "updated on
//    April 15, 2026"; "knowledge of Python coding syntax"; personal MSA account advice, "your exam records will be lost if
//    you leave your organization". Exam scoring page: scale "1 to 1,000", "A passing score is 700 or greater", scaled score
//    "may not equal 70% of the points". Renewal page: "Fundamentals certifications do not expire."
//  - AWS, Certified AI Practitioner page: Category "Foundational", "90 minutes", "65 questions", "This certification is valid
//    for 3 years". AWS Certification FAQs: "Candidates must be 13 years or older"; "Candidates ages 13-17 are permitted to take
//    AWS Certification exams with the consent of their parent or legal guardian." The exam fee is published there but is not
//    printed here (no third-party dollar figures on US pages).
//  - Python Institute, PCEP page: "PCEP-30-02", "Exam: 40 minutes, NDA/Tutorial: 5 minutes", 30 questions, passing score 70%,
//    validity 5 years, PCEP-30-03 "scheduled for release on October 31, 2026". PCEP testing policies (revised November 18,
//    2025): "children under 13 are not allowed to test or receive certification even with parental consent"; 13 to 17 "with
//    parental or legal guardian consent".
//  - CS50 AI certificate page (cs50.harvard.edu/ai/certificate/): free CS50 Certificate after "a score of at least 70% on each
//    of this course's projects". edX Terms: "You must be at least 13 years old to use the Service."
//  - Executive Order "Advancing Artificial Intelligence Education for American Youth", April 23, 2025, Sec. 8(d):
//    "industry-recognized AI credentials concurrent with high school education".
//  - scikit-learn docs (1.9.1): confusion_matrix ("known to be in group i and predicted to be in group j"), precision
//    "tp / (tp + fp)", recall "tp / (tp + fn)".
// Not found on the pages read: an age rule for Microsoft exams, and an age rule for Certiport exams beyond the suitability
// line. So the page states no Microsoft or Certiport age limit.
// Our own material, labelled on the page: the spam-filter scoring script and its output (run with Python 3.13 and
// scikit-learn 1.7.2 on 17 October 2026: TP 4, FP 2, FN 1, TN 5; accuracy 0.75, precision 0.667, recall 0.8), the grade
// table, the six-question practice set, the eight-week plan, and the arithmetic 150 hours / 8 weeks = 18.75 hours a week.
// Lesson family: model evaluation (precision versus recall).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SCORE_BY_HAND = `# Our spam filter's report card (ours)
# 1 = spam, 0 = a normal email
actual    = [1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0]
predicted = [1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0]

pairs = list(zip(actual, predicted))
tp = pairs.count((1, 1))  # spam, caught
fp = pairs.count((0, 1))  # normal, flagged
fn = pairs.count((1, 0))  # spam, missed
tn = pairs.count((0, 0))  # normal, let through

print("TP", tp, "FP", fp, "FN", fn, "TN", tn)
print("accuracy ", round((tp + tn) / len(pairs), 3))
print("precision", round(tp / (tp + fp), 3))
print("recall   ", round(tp / (tp + fn), 3))`;

const SCORE_LIBRARY = `# The same check with scikit-learn (ours)
from sklearn.metrics import (confusion_matrix,
    precision_score, recall_score)

actual    = [1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0]
predicted = [1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0]

print(confusion_matrix(actual, predicted))
print(round(precision_score(actual, predicted), 3))
print(recall_score(actual, predicted))`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'AI CERTIFICATION', blurb: 'Four AI and Python certification exams a US high school student can sit, compared from each issuer\'s own pages, plus what a certificate does and does not prove.' },
  slug: 'ai-certification-for-high-school-students',
  code: 'aice',
  accent: '#42269E',
  accentRationale: 'AI certification door, US row 22: the muted ink violet #42269E allocated in alloc.tsv, distinct from the other US accents and dark enough for body links on the paper',
  pageType: 'market',
  market: US,
  routeLabel: 'AI certification for high school students',
  title: 'AI Certification for High School Students: The Exams Compared',
  description: 'AI certification for high school students: Certiport IT Specialist AI, Microsoft AI-901, AWS AI Practitioner and PCEP compared, with the teen age rules.',
  ogDescription: 'Which AI certification can a US high school student actually take? Four exams compared from the issuers\' own pages: length, pass mark, validity and the under-18 rules.',
  twitterDescription: 'Four AI and Python certification exams for US high schoolers, compared from the issuers\' own pages.',
  pageName: 'AI Certification for High School Students',
  webPageDescription: 'A guide for US high school students and parents to the AI and Python certification exams open to teenagers, built from the issuers\' own published rules, with an original practice set and study plan.',
  courseDescription: 'Live online AI, machine learning and Python classes for US high school students who want the skills behind an AI or Python certification, taught in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'AI certification for high school students',
  navLinks: [
    { href: '#compare', label: 'The exams' },
    { href: '#proof', label: 'What it proves' },
    { href: '#choose', label: 'Choosing' },
    { href: '#practice', label: 'Practice' },
    { href: '#plan', label: 'Study plan' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grades 9 to 12 &middot; AI and Python exams',
  h1: 'AI certification for high school students',
  lede: 'A tenth grader who has trained a first model often asks the same thing next: is there a certificate that says I can do this? There is more than one, and they are not alike. One comes from a testing company that sells to schools and test centers, some from a cloud provider for people starting careers, and one by a Python foundation that tests code rather than ideas. This page lays the four realistic options side by side using only what each issuer publishes: who may sit the exam, how long it runs, what it tests, how long the credential lasts, and what a teenager needs a parent to sign.',
  secondaryCta: { href: '#compare', label: 'Compare the four exams' },
  wa: 'Hello Modern Age Coders, my high schooler in the US is interested in an AI or Python certification. Could we book a free first class?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; We teach the skills; the issuers run the exams',
  spec: [
    ['For', 'Grades 9 to 12'],
    ['Exams covered', 'IT Specialist AI, AI-901, AWS AI Practitioner, PCEP'],
    ['Teen rule', 'AWS and PCEP: 13 to 17 with a parent\'s consent'],
    ['Our role', 'Teaching, not testing'],
    ['Courses', 'Python, AI and ML for teens'],
    ['Format', 'A batch, or one to one'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'The short answer',
  capsule: 'A US high school student can sit four realistic AI-related exams: Certiport\'s IT Specialist Artificial Intelligence (50 minutes), Microsoft\'s AI-901 Azure AI Fundamentals (pass mark 700), AWS Certified AI Practitioner (65 questions, ages 13 to 17 with a parent\'s consent) and the Python Institute\'s PCEP. Modern Age Coders teaches the skills behind them live online, ages 13 to 18, in a batch or one to one.',

  picks: {
    eyebrow: 'Learn the skills behind the badge',
    h2: 'Courses that prepare a teenager for more than one exam',
    lede: 'An exam measures a slice of what a student knows. These courses build the whole of it, and each one is taught live by a regular teacher.',
    items: [
      { course: 'pcep-pcap-python-certification-course', code: 'AICE / 01', title: 'PCEP and PCAP Python certification', note: 'From about 13 upward. The Python Institute syllabus, taught line by line.' },
      { course: 'ai-ml-masterclass-teens', code: 'AICE / 02', title: 'AI and machine learning for teens', note: 'Ages 13 to 18. Models trained, scored and explained, the core of every AI exam.' },
      { course: 'data-science-course-for-teens-python-data', code: 'AICE / 03', title: 'Data science for teens', note: 'Ages 14 to 18. Cleaning data and reading results, which the newer exam objectives stress.' }
    ]
  },

  sections: [
    {
      id: 'compare', tint: 'tint', eyebrow: 'The four exams',
      h2: 'Four exams a high schooler can realistically sit, side by side',
      lede: 'Every cell below comes from the issuer\'s own page, read on 17 October 2026. Where an issuer publishes nothing on a point, the table says so rather than guessing. Exam fees are listed on each issuer\'s page and change by country, so check them there.',
      body: [
        { kind: 'table', caption: 'AI and Python certification exams open to US teenagers, from each issuer\'s published pages (read 17 October 2026)', head: ['Exam', 'Issuer', 'What it tests', 'Length', 'Pass mark', 'Lasts', 'Under-18 rule'], rows: [
          ['IT Specialist: Artificial Intelligence', 'Certiport, a Pearson VUE business', 'Using AI to solve problems: data collection, feature engineering, NLP, feasibility, deployment planning', '50 minutes, 45 to 50 questions', 'Set by Certiport', 'One-time issuance, valid from the date passed', 'Certiport says the series suits ages 14 and up'],
          ['AI-901: Azure AI Fundamentals', 'Microsoft', 'AI concepts (40 to 45%) and building with Microsoft Foundry (55 to 60%)', 'Not stated on the exam page', '700 on a 1 to 1,000 scale', 'Fundamentals certifications do not expire', 'No age rule on the pages we read'],
          ['AWS Certified AI Practitioner', 'Amazon Web Services', 'AI, ML and generative AI concepts and AWS AI services', '90 minutes, 65 questions', 'Set by AWS', 'This certification is valid for 3 years', '13 or older; 13 to 17 with a parent or legal guardian\'s consent'],
          ['PCEP: Certified Entry-Level Python Programmer', 'Python Institute (OpenEDG)', 'Python itself: data types, loops, functions, exceptions', '40 minutes plus 5 for the agreement, 30 questions', '70%', '5 years', 'Not under 13; 13 to 17 with parental or legal guardian consent']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How to read the table',
          left: [
            'Three of the four test ideas about AI. Only PCEP tests whether you can write and read code, and it tests Python rather than AI. PCEP makes a natural first exam because it rewards exactly the work a beginner is already doing.',
            'The Microsoft pass mark is a scaled score. Microsoft says a score of 700 "may not equal 70% of the points", because harder question sets need fewer points to pass. Do not convert it to a percentage in your head.'
          ],
          rightH3: 'Two details teenagers miss',
          right: [
            'Microsoft strongly recommends registering with a personal account, warning that with a work or school account "your exam records will be lost if you leave your organization". A student who registers through a school email can lose the record at graduation.',
            'For AWS, "Candidates must be at least 13 years old at the time of scheduling an exam", and the Python Institute says children under 13 are not allowed to test or receive certification even with parental consent. A parent signs for both until the student turns 18.'
          ] },
        { kind: 'source', html: 'Sources, read 17 October 2026: <a class="ag-inline-link" href="https://certiport.pearsonvue.com/Certifications/ITSpecialist/Certification/Certify" rel="noopener" target="_blank">Certiport IT Specialist</a> and <a class="ag-inline-link" href="https://certiport.pearsonvue.com/Educator-resources/Exam-details/Exam-lengths" rel="noopener" target="_blank">exam lengths</a>; <a class="ag-inline-link" href="https://learn.microsoft.com/en-us/credentials/certifications/exams/ai-901/" rel="noopener" target="_blank">Microsoft Exam AI-901</a>; <a class="ag-inline-link" href="https://aws.amazon.com/certification/certified-ai-practitioner/" rel="noopener" target="_blank">AWS Certified AI Practitioner</a> and the <a class="ag-inline-link" href="https://aws.amazon.com/certification/faqs/" rel="noopener" target="_blank">AWS Certification FAQs</a>; <a class="ag-inline-link" href="https://pythoninstitute.org/pcep" rel="noopener" target="_blank">Python Institute PCEP</a> and its testing policies. We are not connected with Certiport, Pearson VUE, Microsoft, Amazon Web Services or the Python Institute.' }
      ]
    },
    {
      id: 'issuers', tint: 'deep', eyebrow: 'Exam by exam',
      h2: 'What each issuer says about its own exam',
      lede: 'The comparison table flattens real differences. Here is the detail behind each row, in the issuers\' words where the words matter.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Certiport IT Specialist: AI', p: 'Certiport describes candidates as "AI enabled learners" who are prepared for the professional use of AI. It expects approximately 150 hours of instruction and hands-on experience with the topic, and Certiport says the American Council on Education recommends three college credits per IT Specialist exam passed. A recommendation is not a guarantee: each college decides for itself.' },
          { h3: 'Microsoft AI-901', p: 'Microsoft updated the English version of this exam on April 15, 2026. It asks for knowledge of Python coding syntax and familiarity with Azure resources, which is more hands-on than the word Fundamentals suggests. The weight sits on building: "Implement AI solutions by using Microsoft Foundry" makes up 55 to 60% of the exam.' },
          { h3: 'AWS AI Practitioner', p: 'AWS files this exam under its Foundational category and describes it as a starting point for people exploring AI and machine learning on AWS. It is the longest of the four at 90 minutes. Its credential lasts three years, the shortest stated validity of the four, and AWS lets a later exam renew it.' }
        ] },
        { kind: 'table', mt: true, caption: 'What changed in the IT Specialist AI objectives, from Certiport\'s blog of 29 April 2026', head: ['Change', 'What Certiport says'], rows: [
          ['Data objective split in two', 'Objective 2 became "Data Collection & Transformation" and "Feature Engineering"'],
          ['Language models named', '"Objective 4.1 now covers Natural Language Processing (NLP)", with algorithm families in 4.1.2 to 4.1.6'],
          ['New planning skills', 'Feasibility analysis, choosing visualization types for a data story, and planning for continuous integration and deployment'],
          ['When', 'English, Spanish and French versions go live in June 2026']
        ] },
        { kind: 'p', mt: true, html: 'PCEP is also changing: the Python Institute lists PCEP-30-02 as the active version and PCEP-30-03 as scheduled for release on October 31, 2026, and says the update does not affect the five-year validity of credentials already earned. A student booking an exam this fall should check which version the voucher covers.' },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://certiport.pearsonvue.com/Certifications/ITSpecialist/Certification/Overview" rel="noopener" target="_blank">IT Specialist overview</a>; the <a class="ag-inline-link" href="https://certiport.pearsonvue.com/Blog/2026/April/We%E2%80%99re-updating-the-IT-Specialist-AI-certification" rel="noopener" target="_blank">Certiport blog, 29 April 2026</a>; <a class="ag-inline-link" href="https://learn.microsoft.com/en-us/credentials/certifications/exam-scoring-reports" rel="noopener" target="_blank">Microsoft exam scoring</a> and <a class="ag-inline-link" href="https://learn.microsoft.com/en-us/credentials/certifications/renew-your-microsoft-certification" rel="noopener" target="_blank">renewal</a> pages; <a class="ag-inline-link" href="https://pythoninstitute.org/pcep" rel="noopener" target="_blank">PCEP exam information</a>.' }
      ]
    },
    {
      id: 'proof', tint: 'tint', eyebrow: 'Honest about value',
      h2: 'What a certificate shows, and what it does not',
      lede: 'Parents are right to ask what a certification is worth. The answer is narrower than the marketing around exams suggests, and more useful once it is clear.',
      body: [
        { kind: 'two',
          leftH3: 'What it does show',
          left: [
            'That on one day, under supervised conditions, the student answered enough questions correctly on a published list of objectives. That is real information. The objectives are public, so anyone can see exactly what was measured.',
            'For a younger teenager it is also a finish line. Preparing for a fixed date teaches revision habits that a self-paced tutorial never does.'
          ],
          rightH3: 'What it does not show',
          right: [
            'It does not show that the student can build anything. An exam samples knowledge in a fixed time; a model on GitHub with an honest write-up of where it fails says more about ability than any badge.',
            'It is not an admission ticket or a job offer, and no issuer claims it is. We make no such promise either: we teach the material, the student sits the exam, and the result belongs to them.'
          ] },
        { kind: 'table', mt: true, caption: 'Three kinds of paper a student might collect, and what each one means (ours)', head: ['Kind', 'Example', 'Who checks the work', 'What it tells a reader'], rows: [
          ['Certification exam', 'AWS AI Practitioner, PCEP', 'The issuer, in a proctored test', 'The objectives were met on test day'],
          ['Course certificate', 'The free CS50 Certificate for CS50 AI', 'Course staff, from submitted projects', 'The projects were completed to a set standard'],
          ['Portfolio', 'A repository with code, data and a write-up', 'Anyone who opens it', 'What the student can actually do']
        ] },
        { kind: 'p', mt: true, html: 'Harvard\'s CS50 AI offers its free certificate to anyone who submits and scores at least 70% on each of the course\'s projects; submitting needs an edX account, and edX says users must be at least 13. Federal policy has also moved toward credentials for teenagers: the April 23, 2025 executive order on AI education asks agencies to encourage dual enrollment so students can earn "industry-recognized AI credentials concurrent with high school education". Neither turns a certificate into a guarantee. Our own view of certificates is in <a class="ag-inline-link" href="/blog/modern-age-coders-certificate-earned-not-given">a certificate earned, not given</a>.' }
      ]
    },
    {
      id: 'choose', tint: 'deep', eyebrow: 'Choosing',
      h2: 'Which exam fits which student',
      lede: 'There is no single right order, but there is a sensible default. This table is our advice, not any issuer\'s.',
      body: [
        { kind: 'table', caption: 'A first certification by grade and goal (ours)', head: ['Student', 'A sensible first exam', 'Why'], rows: [
          ['Grade 9, some Python', 'PCEP', 'Tests code they already write; 30 questions in 40 minutes'],
          ['Grade 10, school AI unit done', 'IT Specialist: AI', 'Certiport suits it to ages 14 and up; covers data, features and NLP'],
          ['Grade 11, wants cloud skills', 'AI-901 or AWS AI Practitioner', 'Both expect comfort with a cloud console'],
          ['Grade 12, building a portfolio', 'Whichever fits the project', 'The project matters more; the exam confirms the vocabulary'],
          ['Any grade, no code yet', 'None yet', 'Learn first; an exam taken too early mostly measures guessing']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>Start from the objectives.</b> Download the issuer\'s objective list and tick what the student can already explain out loud. Under half ticked means the exam is months away, not weeks.',
          '<b>Check the age rule before paying.</b> For AWS and PCEP a parent or legal guardian gives consent for students aged 13 to 17. Do this before buying a voucher.',
          '<b>Use a personal account.</b> Register with the student\'s own personal email, not a school account, so the record survives graduation.',
          '<b>Book the practice test, then the exam.</b> Every issuer here offers official practice material. Sit it under timed conditions first.',
          '<b>Build one thing alongside.</b> Pair the exam with a small project that uses the same ideas, so the certificate has evidence behind it.',
          '<b>Decide what comes next.</b> PCEP leads to PCAP; the AI exams lead to a real model and a write-up. Plan the next step before exam day.'
        ] }
      ]
    },
    {
      id: 'practice', tint: 'tint', eyebrow: 'A worked example',
      h2: 'Practice a core AI fundamentals idea: precision versus recall',
      lede: 'Judging a model by more than one number is a core idea in AI fundamentals. Here is the idea worked through in code, on a dozen made-up emails. Both scripts are ours; we ran them with Python 3.13 and scikit-learn 1.7.2 on 17 October 2026.',
      body: [
        { kind: 'code', label: 'Script 1 &middot; scoring a spam filter by hand', lang: 'python', code: SCORE_BY_HAND, note: 'Output on our run: TP 4 FP 2 FN 1 TN 5, accuracy 0.75, precision 0.667, recall 0.8. The filter caught four of the five spam emails (recall 4/5) but two of the six emails it flagged were normal (precision 4/6).' },
        { kind: 'code', label: 'Script 2 &middot; the same numbers from scikit-learn', lang: 'python', code: SCORE_LIBRARY, note: 'Output on our run: [[5 2] [1 4]], then 0.667 and 0.8. In scikit-learn\'s confusion matrix each row is the true class and each column the predicted class, so the top row reads 5 normal emails let through and 2 wrongly flagged.' },
        { kind: 'two', mt: true,
          leftH3: 'Why the two numbers disagree',
          left: [
            'Precision asks: when the filter shouts spam, how often is it right? Recall asks: of all the real spam, how much did it catch? scikit-learn defines them as tp / (tp + fp) and tp / (tp + fn), the same sums Script 1 does by hand.',
            'Accuracy hides the trade. A filter that never flags anything would score 7 out of 12 here, about 58%, while catching no spam at all. That is our arithmetic, and it is the kind of trap a well-written question sets.'
          ],
          rightH3: 'Why we teach it with code',
          right: [
            'A student who has typed pairs.count((0, 1)) knows what a false positive is. One who has only read the definition usually mixes up the two error types under exam pressure.',
            'Change one value in the predicted list and run it again. Watching precision move while recall stays put is worth a page of notes.'
          ] }
      ]
    },
    {
      id: 'set', tint: 'deep', eyebrow: 'Practice set',
      h2: 'Six practice questions, written by us',
      lede: 'These are ours, written in the spirit of the published objectives. They are not real exam items and no issuer has reviewed them. Answers are in the second column, so cover it first.',
      body: [
        { kind: 'table', caption: 'An original practice set on AI fundamentals (ours)', head: ['Question', 'Answer and reason'], rows: [
          ['1. A model flags 10 photos as cats; 8 are cats. What is its precision?', '0.8: 8 correct out of 10 flagged.'],
          ['2. There were 16 cat photos and the model found 8. What is its recall?', '0.5: it found half of the real cats.'],
          ['3. A dataset has 95 normal transactions and 5 unusual ones. Why is 95% accuracy unimpressive?', 'Guessing normal every time scores 95% and finds nothing unusual.'],
          ['4. You turn a column of dates into day of week. Which objective is this?', 'Feature engineering: making a new input the model can use.'],
          ['5. Training accuracy is 99% and test accuracy is 70%. What is the likely problem?', 'Overfitting: the model memorized the training set.'],
          ['6. A chatbot gives a confident wrong date. What should a responsible user do?', 'Check a primary source before repeating it; fluent text is not proof.']
        ] },
        { kind: 'p', mt: true, html: 'Questions 1 and 2 use the same model and land on different numbers, which is the whole point of the code above. Students who get question 3 right have understood why exams ask for more than accuracy. For the reasons models fail in the first place, see <a class="ag-inline-link" href="/blog/why-do-machine-learning-models-make-mistakes">why machine learning models make mistakes</a>.' }
      ]
    },
    {
      id: 'plan', tint: 'tint', eyebrow: 'Study plan',
      h2: 'An eight-week plan for a first AI exam',
      lede: 'Our plan for a high schooler preparing for the IT Specialist AI exam or AI-901 alongside school. It assumes some Python already; without it, add the PCEP material first.',
      body: [
        { kind: 'table', caption: 'Eight weeks to a first AI certification exam (ours)', head: ['Week', 'Focus', 'Proof of progress'], rows: [
          ['1', 'Read the objective list; sort into known and unknown', 'A ticked list'],
          ['2', 'Data: collecting, cleaning, splitting', 'A cleaned table and a train and test split'],
          ['3', 'Features: what a model can learn from', 'Two new features and a sentence on each'],
          ['4', 'Models: classification and regression', 'One trained model, scored'],
          ['5', 'Evaluation: precision, recall, overfitting', 'The practice set above, all six right'],
          ['6', 'Language and image AI, and their limits', 'One page in their own words'],
          ['7', 'Responsible AI: bias, privacy, checking outputs', 'A short risk note on their own model'],
          ['8', 'Official practice test, timed, then review', 'A score and a fix list']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'The hours, honestly', p: 'Certiport expects about 150 hours of instruction and practice. Spread over eight weeks that is 150 / 8 = 18.75 hours a week, our arithmetic, which is too much beside school. So start earlier or take the exam later.' },
          { h3: 'Where we fit', p: 'Our classes cover the skills in weeks 2 to 7 as part of a normal course. The official practice test and booking stay with the student and the issuer.' },
          { h3: 'If the score disappoints', p: 'Read the score report by objective, not the total. One weak objective is a week of work; three weak ones mean the exam came too soon.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'From learner to certified',
    h2: 'Four stages on the way to a first AI credential',
    lede: 'Where a high schooler might start, and what moves them up a stage.',
    table: { caption: 'Stages toward an AI certification (ours)', head: ['Stage', 'In practice'], rows: [
      ['1. User', 'Uses AI apps and can describe what they do'],
      ['2. Coder', 'Writes Python and has trained one model on real data'],
      ['3. Evaluator', 'Can say why a model is wrong, with numbers'],
      ['4. Certified builder', 'Has passed an exam and shipped a project that matches it']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 2 is where an exam starts to make sense. Before it, money spent on a voucher mostly buys a lesson in guessing.',
      'Ask your teenager to explain their model to you. If they can, stage 3 is close.'
    ] },
    right: { h3: 'For students', ps: [
      'Keep the exam objectives open beside your project. Each one you can point to in your own code is one you will not need to cram.',
      'Plan for a pass, not a perfect score. The credential does not print the mark.'
    ] }
  },

  catalogue: {
    eyebrow: 'The course catalog',
    h2: 'Nine courses for teenagers working toward a credential',
    lede: 'Each is live and online, with a regular teacher, taught in a batch or one to one.',
    bands: [
      { num: 'I', h3: 'Exam-facing', sub: 'Ages 13 and up', courses: [
        { code: 'AICE / EXM / 01', slug: 'pcep-pcap-python-certification-course', title: 'PCEP and PCAP', blurb: 'The Python Institute\'s two entry exams, objective by objective.' },
        { code: 'AICE / EXM / 02', slug: 'pcap-python-certification-prep-course', title: 'PCAP prep', blurb: 'For students who already hold PCEP or its equivalent.' },
        { code: 'AICE / EXM / 03', slug: 'teens-ai-tools-mastery-course', title: 'AI tools for teens (13+)', blurb: 'Using AI well, with the checking habits exams reward.' }
      ] },
      { num: 'II', h3: 'The skills underneath', sub: 'Ages 13 to 18', courses: [
        { code: 'AICE / SKL / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'From a first script to programs worth testing.' },
        { code: 'AICE / SKL / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and ML for teens', blurb: 'Training and scoring real models.' },
        { code: 'AICE / SKL / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'pandas, charts and honest conclusions.' }
      ] },
      { num: 'III', h3: 'Beyond the exam', sub: 'Teens who want depth', courses: [
        { code: 'AICE / BYD / 01', slug: 'orange-data-mining-visual-machine-learning-course-for-teens', title: 'Orange data mining', blurb: 'Machine learning on a visual canvas, then the step to Python.' },
        { code: 'AICE / BYD / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Algorithms for the unseen question.' },
        { code: 'AICE / BYD / 03', slug: 'mysql-mastery-for-teens', title: 'MySQL for teens', blurb: 'Where the data in every AI project lives.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Classes that fit around school and exam dates',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school, in whichever US time zone you live.' },
      { time: 'Weekends', l: 'Weekend mornings suit students with busy weeks.' },
      { time: '1-on-1', l: 'Paced to a booked exam date.' }
    ],
    cells: [
      { h3: 'One teacher', p: 'The same teacher from the first class to the exam.' },
      { h3: 'Objectives on screen', p: 'We map each lesson to the list the student will be tested on.' },
      { h3: 'Code, not slides', p: 'Every idea is typed and run in class.' },
      { h3: 'Mock questions', p: 'Our own practice items, never leaked exam content.' },
      { h3: 'Any state', p: 'Live on video from home.' },
      { h3: 'Group or private', p: 'Fifteen to twenty in a batch, or one to one.' }
    ]
  },

  projectsH2: 'Projects built by our teenage students',
  projectsLede: 'The kind of evidence that sits well beside a certificate. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Reviews parents left on Google, copied without edits.',

  fees: {
    h2: 'Fees',
    lede: 'Exam vouchers are bought from the issuer and are not part of our fees. What we charge is for teaching, a month at a time in US dollars, with no term contract; stop after any month.',
    free: ['A free first class', 'Bring the objective list', 'No card details'],
    group: ['Fifteen to twenty students', 'One regular teacher', 'Choose your batch', 'Monthly'],
    one: ['A teacher to yourself', 'Paced to your exam date', 'Times at your convenience']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'AI certification for teenagers: common questions',
    items: [
      { q: 'Is there an AI certification for high school students?', a: 'Yes. Certiport\'s IT Specialist Artificial Intelligence exam is one, and Certiport says its IT Specialist exams suit ages 14 and up. AWS Certified AI Practitioner is open from 13, with a parent\'s consent until 18. Microsoft publishes no age rule for AI-901 on the pages we read, so check with Microsoft.' },
      { q: 'Can a 15 year old take the AWS Certified AI Practitioner exam?', a: 'Yes, with consent. AWS says candidates must be at least 13 when they schedule an exam, and candidates aged 13 to 17 may test with the consent of a parent or legal guardian.' },
      { q: 'How long is the Certiport IT Specialist AI exam?', a: 'Certiport lists each IT Specialist exam at 50 minutes, with 45 to 50 questions for Artificial Intelligence.' },
      { q: 'What score do you need to pass Microsoft AI-901?', a: 'Microsoft lists a passing score of 700 on a scale of 1 to 1,000. It is a scaled score, so Microsoft says it may not equal 70% of the points.' },
      { q: 'Do AI certifications expire?', a: 'It depends on the issuer. Microsoft says Fundamentals certifications do not expire, AWS says its AI Practitioner certification is valid for 3 years, the Python Institute lists PCEP as valid for 5 years, and Certiport describes its exams as a one-time issuance.' },
      { q: 'Is PCEP an AI certification?', a: 'No. PCEP tests entry-level Python: data types, loops, functions and exceptions. It pairs well with AI study because courses such as CS50 AI and libraries such as scikit-learn use Python.' },
      { q: 'Will an AI certification help with college admission?', a: 'We cannot promise that, and no issuer claims it. A certification shows that published objectives were met on one test day. Colleges decide for themselves what they value.' },
      { q: 'Should my teenager register with their school email?', a: 'Microsoft strongly recommends a personal account, warning that exam records tied to a school or work account will be lost if the student leaves that organization. Use a personal email for any exam.' },
      { q: 'Do you run the exams?', a: 'No. We teach the skills and the material in live classes. Students book and sit the exam directly with the issuer. We are not connected with Certiport, Microsoft, AWS or the Python Institute.' },
      { q: 'When are your classes for US students?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'What do your classes cost?', a: 'The first class is free. After that families pay monthly for teaching, and the fees section of this page shows the figure in US dollars. Exam vouchers are separate and come from the issuer.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for US high schoolers working on AI.',
    items: [
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'Every page we have written for US families.' },
      { href: '/ai-ml-certification-course', label: 'AI and ML certification course', p: 'Our own certificate track and its portfolio.' },
      { href: '/blog/pcep-vs-pcap-which-python-certification', label: 'PCEP or PCAP', p: 'Which Python exam to sit first.' },
      { href: '/ai-projects-for-high-school-students', label: 'AI projects for high schoolers', p: 'The evidence that sits beside an exam.' },
      { href: '/ai-tools-age-guide', label: 'AI tool age guide', p: 'Which tools a teenager may use, from their terms.' },
      { href: '/ai-classes-for-teenagers', label: 'AI classes for teenagers', p: 'Our live AI track for ages 13 to 18.' },
      { href: '/ai-summer-programs-for-high-school-students', label: 'AI summer programs for high school students', p: 'AI summer programs for US high schoolers in 2027, and an eight-week AI summer you can run at home.' },
      { href: '/ai-literacy-for-elementary-students', label: 'AI literacy for elementary students', p: 'AI literacy for K-5: what it means, what standards expect, and two activities.' },
      { href: '/machine-learning-competitions-for-high-school-students', label: 'Machine learning competitions for high school students', p: 'ML and AI competitions for US high schoolers, 2026-27, from the official rules.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us which exam your teenager is eyeing and what they have built so far. The teacher reads the objective list with them in the first class and says honestly how far away the exam is.',
    readFirst: 'Curious how a class works first? Read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or open <a class="ag-inline-link" href="/courses">the course list</a>, where each syllabus is public.',
    note: 'We teach from India over live video, so classes reach every US state without a commute. WhatsApp is the fastest way to reach us from the US.',
    formNote: 'The first class is free and we never ask for card details.'
  },

  footer: {
    cols: [
      { h4: 'AI for teenagers', links: [
        { href: '/ai-classes-for-teenagers', label: 'AI classes for teenagers' },
        { href: '/ai-ml-course-for-teens', label: 'AI and ML course for teens' },
        { href: '/ai-ml-certification-course', label: 'AI and ML certification' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/ai-and-machine-learning-classes-in-usa', label: 'AI and ML classes in the USA' },
        { href: '/python-for-15-year-olds', label: 'Python for 15 year olds' },
        { href: '/ap-computer-science-principles-online-coaching', label: 'AP CSP coaching' }
      ] }
    ],
    bottomRight: 'Precision asks how often; recall asks how many'
  },

  personalityCss: `
.ag-root.ag-aice .ag-hero h1 { letter-spacing: -0.012em; max-width: 18ch; }
.ag-root.ag-aice .ag-capsule { border-left-width: 5px; }
.ag-root.ag-aice .ag-table caption { text-align: left; }
.ag-root.ag-aice .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-aice .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-aice .ag-steps { gap: 0.9rem; }
`,

  dossier: {
    curriculumAuthority: 'Issuer pages read raw on 17 October 2026: Certiport IT Specialist (AI exam description, 14 and up suitability, one-time issuance, about 150 hours, ACE three credits, 50 minutes, 45 to 50 questions, April 2026 objective update); Microsoft AI-901 (700 pass mark, 40 to 45% and 55 to 60% weights, April 15, 2026 update, personal account advice, Fundamentals do not expire); AWS AI Practitioner (Foundational, 90 minutes, 65 questions, 3 years, 13+ and 13 to 17 with consent); Python Institute PCEP (40 minutes, 30 questions, 70%, 5 years, under-13 rule, PCEP-30-03 on October 31, 2026).',
    localProject: 'A spam-filter report card in plain Python and in scikit-learn (ours, run with scikit-learn 1.7.2: TP 4, FP 2, FN 1, TN 5; precision 0.667, recall 0.8), an original six-question practice set, a grade-by-goal exam table and an eight-week plan with the 150 / 8 = 18.75 hours arithmetic. Lesson family: model evaluation, precision versus recall.',
    requiredMentions: ['AI enabled learners', '45 to 50 questions for Artificial Intelligence', 'a one-time issuance', 'three college credits per IT Specialist exam passed', 'Implement AI solutions by using Microsoft Foundry', 'your exam records will be lost if you leave your organization', 'Candidates must be at least 13 years old at the time of scheduling an exam', 'children under 13 are not allowed to test or receive certification even with parental consent', 'PCEP-30-03', 'industry-recognized AI credentials concurrent with high school education', '150 / 8 = 18.75', 'TP 4 FP 2 FN 1 TN 5'],
    sources: [
      { claim: 'IT Specialist AI exam description, suitability from age 14, one-time issuance, about 150 hours of instruction.', url: 'https://certiport.pearsonvue.com/Certifications/ITSpecialist/Certification/Certify' },
      { claim: 'IT Specialist exams are 50 minutes; Artificial Intelligence has 45 to 50 questions.', url: 'https://certiport.pearsonvue.com/Educator-resources/Exam-details/Exam-lengths' },
      { claim: 'June 2026 update to the IT Specialist AI objectives.', url: 'https://certiport.pearsonvue.com/Blog/2026/April/We%E2%80%99re-updating-the-IT-Specialist-AI-certification' },
      { claim: 'AI-901 pass mark, skill weights, update date and personal account advice.', url: 'https://learn.microsoft.com/en-us/credentials/certifications/exams/ai-901/' },
      { claim: 'Fundamentals certifications do not expire.', url: 'https://learn.microsoft.com/en-us/credentials/certifications/renew-your-microsoft-certification' },
      { claim: 'AWS AI Practitioner length, question count and validity.', url: 'https://aws.amazon.com/certification/certified-ai-practitioner/' },
      { claim: 'AWS minimum age 13; 13 to 17 with parent or guardian consent.', url: 'https://aws.amazon.com/certification/faqs/' },
      { claim: 'PCEP length, questions, pass mark, validity, version dates and age policy.', url: 'https://pythoninstitute.org/pcep-testing-policies' },
      { claim: 'Dual enrollment for industry-recognized AI credentials, Sec. 8(d).', url: 'https://www.whitehouse.gov/presidential-actions/2025/04/advancing-artificial-intelligence-education-for-american-youth/' }
    ],
    rejectedClaims: [
      'Exam fees: published by AWS and the Python Institute but not printed, because US pages print no third-party dollar figures and fees vary by country.',
      'An age limit for Microsoft or Certiport exams: none found on the pages read, so none is stated beyond Certiport\'s suitability line.',
      'That a certification helps admission or employment: no issuer claims it and we make no such promise.',
      'A pass mark for the Certiport and AWS exams: not stated on the pages read.',
      'Any affiliation with Certiport, Pearson VUE, Microsoft, AWS, the Python Institute or Harvard: none, and the page says so.'
    ]
  }
};
