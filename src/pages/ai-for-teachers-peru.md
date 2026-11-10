---
title: "AI for Teachers in Peru: Live Online Course in English"
description: "AI for teachers in Peru: a live online course in English on how AI works, how to test an AI marking tool against your own marks, and using it safely with pupils."
canonical: https://learn.modernagecoders.com/ai-for-teachers-peru
source: src/pages/ai-for-teachers-peru.html
---
> Modern Age Coders offers AI for teachers in Peru: live online classes taught in English for teachers of any subject. Teachers learn how AI tools produce their answers, how to check an AI tool against their own marking with a small evaluation set before using it, which tools pupils may use at which age, and, if they wish, enough Python to build and test simple classroom tools. Mentors in India teach one to one or in groups of fifteen to twenty adults, at hours that fit the school calendar and the working day in Peru.

[Home](/) / [Courses](/courses) / [Coding and AI classes in Peru](/coding-and-ai-classes-in-peru) / AI for teachers

Peru · AI for educators · Primary, secondary and beyond

# AI for teachers in Peru

Teachers in Peru are being asked to use artificial intelligence before most have had the chance to look inside it. This page is for teachers who want more than a list of apps: how AI tools reach their answers, how to check one against your own professional judgement before you trust it with pupils' work, which tools pupils may legally use, and when in the 2026 school calendar a course actually fits. The lesson at the centre is one any teacher can run with a set of exercise books: test the machine against your own marks.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; For: Teachers in any subject; Coding needed: None to start; Core skill: Testing AI against your own judgement; Also covers: Pupils' tool ages, Python basics; Format: One to one, or a group of fifteen to twenty; Try it: A free first class. Rated 4.9 across 547 Google reviews.

## Three courses teachers choose

No coding is needed for the first two. The third suits teachers of maths, science or computing who want to build their own small tools.

- [AI Tools Mastery](/courses/ai-tools-mastery-complete-college): Practical use of ChatGPT, Claude and automation tools for adults, taught with the habit of checking every output. Teachers apply it to planning, materials and feedback, never to pupils' personal data.
- [Data and AI Analytics for Non-Programmers](/courses/data-and-ai-analytics-for-non-programmers-course): Spreadsheets, charts and AI help for people who do not code. Useful for teachers who track marks, attendance and progress and want to read their own data clearly.
- [AI and ML Masterclass](/courses/ai-ml-masterclass-complete-college): Python and machine learning from the start, at an adult pace. For teachers who want to understand models properly and build small tools, such as the marking check below.

## What AI training does MINEDU already offer teachers in Peru?

A free online course, workshops and pilots. MINEDU reported on 9 May 2025 that more than 87,000 teachers had enrolled in its course "Inteligencia artificial (IA) en la práctica docente", delivered through its virtual platform.

**MINEDU's announced AI initiatives for teachers and schools**

| Initiative | What MINEDU said | Date of the press note |
|---|---|---|
| Online course "IA en la práctica docente" | More than 87,000 teachers enrolled; free; a pass gives a certificate that counts towards the Carrera Pública Magisterial scale; two units, the second "Enseñar y aprender con IA" | 9 May 2025 |
| Workshops on responsible AI integration | Run since 2024 in the 26 regions; target of 3,550 teachers of pedagogical innovation | 9 May 2025 |
| In-person workshops | Lima Metropolitana, Callao and Ica, with a target of 1,600 teachers | 9 May 2025 |
| AI for planning in rural secondary | 205 rural schools in alternation, residential and tutorial models, serving about 27,000 pupils | 4 December 2025 |

Sources: MINEDU press notes of 9 May 2025 and 4 December 2025, gob.pe; read on 9 November 2026. MINEDU also reports 627,508 secondary pupils enrolled in rural schools. We are not connected with MINEDU, its platform or these programmes.

### What the state course is for

MINEDU's course is free, counts for the teaching career scale and reaches teachers in every region. If you have not taken it, it is a sensible first step, and nothing on this page competes with it.

Its focus, as MINEDU describes it, is practice: using AI in teaching and learning. That is what most teachers need first.

### What a deeper course adds

What a short practice course rarely has time for is the inside view: how a classifier or a language model reaches an answer, why it fails in predictable ways, and how to measure whether a tool is good enough for a job before you rely on it.

That is our focus. A teacher who has tested an AI marker against their own marks, as in the lesson below, makes better decisions about every AI tool that arrives in the school afterwards.

## Can a teacher in Peru let AI mark pupils' work?

As a helper, with care; not as a replacement. Peru's 2025 AI regulation treats AI that evaluates the learning results of children and adolescents as high risk, unless it plays a complementary role and does not replace the teacher's judgement.

DS 115-2025-PCM, the regulation of Law 31814, appeared in El Peruano on 9 September 2025. Its article 24.1 b lists among high-risk uses the evaluation of children and adolescents in education, including "evaluación de resultados de aprendizaje", with an exception: "salvo que el sistema integre una función complementaria y no reemplace la evaluación pedagógica humana". In plain words, a system that helps a teacher assess is treated differently from one that replaces the teacher's assessment.

The same regulation, in article 13.2, promotes "la formación del personal docente en IA y tecnologías digitales" for pedagogical use in public and private schools. We quote both articles as published context about where Peru is heading. This is not legal advice, and how a particular school applies the regulation is for that school and its advisers to decide.

### Use it to sort, not to judge

An AI helper can group similar answers so you mark them together, or flag answers it finds unusual. The mark and the comment stay yours.

### Test before you trust

Before using any marking tool with a class, run it on answers you have already marked and measure how often it agrees with you. The lesson below shows how.

### Keep pupils' data out

Never paste names, photos or personal details into a public AI service. Anonymise first, and check whether your school allows the tool at all.

## How can a teacher check an AI marking tool? An evaluation set

This is the lesson teachers in our course remember. You take answers you have already marked, let the tool mark them too, and compare. The comparison has a name, an evaluation set, and one number that matters more than the obvious one.

1. **Collect.** Fourteen pupil answers to one question, "Which is larger, 0.5 or 0.25? Explain.", each marked by the teacher: 2 for a full answer, 1 for a correct choice with weak or wrong reasoning, 0 for a wrong choice. The answers and marks in our code are invented, but they are typical of real ones.
2. **Mark again, by machine.** A simple rule stands in for an AI helper: an answer starting with 0.5 gets 2 if it contains "because", "since" or ">", otherwise 1; anything else gets 0. Real AI tools are more sophisticated, but the method of checking them is exactly the same.
3. **Compare.** Count how often teacher and helper agree, how often they would agree by pure chance, and the difference between the two, a statistic called Cohen's kappa. Then read every disagreement.

**An evaluation set for a marking helper** (Python)
```python
# Question: "Which is larger, 0.5 or 0.25? Explain." Fourteen answers and the
# teacher's marks (2 full, 1 partial, 0 none) are invented by us.
answers = [
    ("0.5, because 0.5 is 50 hundredths and 0.25 is 25", 2),
    ("0.5 is larger since half is more than a quarter", 2),
    ("0.25 is larger because 25 is bigger than 5", 0),
    ("0.5", 1),
    ("0.5 is larger, 0.50 > 0.25", 2),
    ("0.25 is larger, it has more digits", 0),
    ("0.5 is larger because a half beats a quarter", 2),
    ("they are equal", 0),
    ("0.5 is larger because 5 > 2", 1),
    ("0.5 is larger because 0.5 = 0.50 and 50 > 25", 2),
    ("0.5 larger", 1),
    ("0.25 is larger because it is longer", 0),
    ("0.5 is larger because it is shorter", 1),
    ("Half is more than a quarter, so 0.5 wins", 2),
]

def helper(text):                     # a simple marking rule standing in for an AI helper
    if not text.startswith("0.5"):
        return 0
    return 2 if "because" in text or "since" in text or ">" in text else 1

teacher = [m for _, m in answers]
machine = [helper(t) for t, _ in answers]

agree = sum(t == m for t, m in zip(teacher, machine)) / len(answers)
labels = [0, 1, 2]
p_chance = sum((teacher.count(k) / len(answers)) * (machine.count(k) / len(answers)) for k in labels)
kappa = (agree - p_chance) / (1 - p_chance)
print("agreement", round(agree, 2), "| chance", round(p_chance, 2), "| kappa", round(kappa, 2))

for t in labels:
    print("teacher gave", t, "-> helper gave 0/1/2:", [sum(1 for a, b in zip(teacher, machine) if a == t and b == m) for m in labels])
for (text, t), m in zip(answers, machine):
    if t != m:
        print("disagree:", repr(text), "teacher", t, "helper", m)
```
Run with Python 3, it prints the seven lines below. The question, answers and marks are ours, written for the lesson.

**Output** (Output)
```output
agreement 0.79 | chance 0.36 | kappa 0.67
teacher gave 0 -> helper gave 0/1/2: [4, 0, 0]
teacher gave 1 -> helper gave 0/1/2: [0, 2, 2]
teacher gave 2 -> helper gave 0/1/2: [1, 0, 5]
disagree: '0.5 is larger because 5 > 2' teacher 1 helper 2
disagree: '0.5 is larger because it is shorter' teacher 1 helper 2
disagree: 'Half is more than a quarter, so 0.5 wins' teacher 2 helper 0
```
Agreement 0.79 sounds good. Kappa 0.67 is the more honest number, and the three disagreements tell you what the tool cannot do.

### Why agreement is not enough

The helper agrees with the teacher on 11 of 14 answers, 79%. But if both simply handed out marks in the proportions they each use, they would agree about 36% of the time by chance alone. Kappa measures how much better than chance the helper does: here 0.67, which is useful but well short of the teacher.

In a class where almost every answer is correct, a tool that gives everyone full marks could reach high agreement and a kappa near zero. Always ask for both numbers, from any vendor, about any marking tool.

### What the disagreements show

Two answers got full marks from the helper for reasoning a teacher would never accept: "because 5 > 2" and "because it is shorter". The helper rewards the word "because", not the thinking after it. That is a pattern-matching failure, and real AI markers have subtler versions of it.

The third answer is correct and well reasoned, "Half is more than a quarter, so 0.5 wins", but it does not start with "0.5", so the helper gives 0. A pupil who writes differently is punished. Only reading the disagreements reveals that; no single score does.

1. **With your own class.** Choose one question you mark often. Take twenty answers you have already marked, anonymise them and run them through any AI tool your school allows. Count agreement and list every disagreement.
2. **Find the bias.** Look at whom the tool marks down. Pupils who write briefly? Pupils who explain in a different order? Those are the pupils a tool would quietly disadvantage.
3. **Decide the role.** In two sentences, decide what this tool may do in your classroom (sort, flag, suggest) and what it may not (decide a mark), and why.
4. **Optional, in Python.** Change the helper rule to fix one disagreement. Does agreement rise, and does a new disagreement appear?

## Which AI tools may pupils use, and at what age?

Fewer than many teachers assume. Each company sets a minimum age in its own terms, and the strictest apply to the tools teachers hear about most.

**Age terms set by the vendors, as we read them**

| Tool | What the vendor's terms say | In practice for a school |
|---|---|---|
| ChatGPT (OpenAI) | At least 13; under 18 needs a parent or guardian's permission | Not for primary; secondary only with parents' permission |
| Claude (Anthropic) | At least 18 | Teachers only; never pupils |
| Khanmigo (Khan Academy) | Use by under-18s must be supervised by an authorised adult and linked to a parent or teacher account | Possible with supervision and linked accounts |
| Gemini (Google) | 13 or the applicable age in the country; not with a Family Link account | Secondary only, with care |

Sources: OpenAI terms of use, Anthropic consumer terms, Khan Academy terms of service and Google Gemini help, as recorded in our [AI tools age guide](/ai-tools-age-guide); read on 9 November 2026. Terms change; check the vendor's page and your school's own policy.

For younger pupils, the most useful AI lessons need no AI account at all: sorting games, simple rules like the marking helper above, and discussions about why a machine got something wrong. If you teach children and want examples, our [clases de programación para niños en inglés](/clases-de-programacion-para-ninos-en-ingles) page describes how we teach coding and AI ideas to children aged 6 to 12.

## When can a teacher in Peru fit in an AI course?

Around the school calendar. RM 501-2025-MINEDU sets the 2026 school year at 36 teaching weeks and 8 management weeks, in alternating blocks, with at least 160 teaching days and 30 management days.

**The 2026 school calendar for Educación Básica (RM 501-2025-MINEDU, table 1)**

| Block | Length | Dates in 2026 |
|---|---|---|
| First management block | 2 weeks | 2 to 13 March |
| First teaching block | 9 weeks | 16 March to 15 May |
| Second management block | 1 week | 18 to 22 May |
| Second teaching block | 9 weeks | 25 May to 24 July |
| Third management block | 2 weeks | 27 July to 7 August |
| Third teaching block | 9 weeks | 10 August to 9 October |
| Fourth management block | 1 week | 12 to 16 October |
| Fourth teaching block | 9 weeks | 19 October to 18 December |
| Fifth management block | 2 weeks | 21 to 31 December |

Source: MINEDU, RM 501-2025-MINEDU, Norma Técnica para el Año Escolar 2026, section 5.2.1, table 1, checked against the scanned page; read on 9 November 2026. Schools may adapt to local context; Educación Básica Alternativa follows its own two periods.

### A plan that works for many teachers (ours)

Start in the January to February break, when there are no classes to prepare, and set a steady pace of two short classes a week. Use the management weeks in May, July and October to catch up or finish a project.

In the busiest teaching weeks, especially around reports, one-to-one classes can pause or move; tell your mentor your school's dates at the start.

### The clock

Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.

Peru does not change its clocks, and neither does India, so the gap stays at ten and a half hours all year. A 06:30 class in Lima, before school, is 17:00 in India; an 18:00 class after school is 04:30 the next morning in India, which some mentors can do.

## Is my English good enough for a course in English?

Most likely, if you can follow a slow talk in English. EF's English Proficiency Index 2025 gives Peruvian adults working as teachers a score of 532, in the "moderate" band, close to the national 519.

### A double benefit

For English teachers and teachers at bilingual, Cambridge or IB schools, the course is professional English practice as well as AI. For others, it is a chance to use English with a purpose, in a subject where the original sources are in English anyway.

EF tests adults who choose to take its online test, so its scores describe that group, not every teacher in Peru.

### How we make it work

Mentors speak steadily, check understanding often and put key terms in the chat. You can ask a mentor to repeat or rephrase at any time. We do not teach in Spanish, but one-to-one classes let you set the pace.

If you prefer to read about this course in Spanish first, our [IA para docentes](/ia-para-docentes-curso-en-ingles) page describes it for teachers in Spanish, with a different lesson; the live classes are the same.

## What a teacher can do at each stage

Our own stages for the teachers' route. They are not a MINEDU certificate and do not count towards the Carrera Pública Magisterial scale.

**AI for teachers: stages (ours)**

| Stage | The teacher can | Shown by |
|---|---|---|
| 1. Explain | Describe how a classifier and a language model reach an answer | A five-minute explanation to colleagues |
| 2. Check ages | Say which tools pupils of each age may use | A one-page guide for your school |
| 3. Prompt with care | Get useful planning help without sharing pupils' data | Three lesson plans, checked and corrected |
| 4. Evaluate | Build an evaluation set and read kappa and disagreements | The marking lesson, on your own subject |
| 5. Build | Write a small classroom tool in Python, optional | A working quiz or checker |
| 6. Decide | Set the role of an AI tool in your classroom | A written policy for one tool |

### For teachers

Agreement alone flatters a tool. Ask for kappa, then read every disagreement.
A tool that rewards the word "because" is not reading the reasoning.

### For school leaders

Stage 4 is the one to ask for before any AI marking tool is adopted.
Teachers receive notes on what they built and tested, not just hours attended.

## Nine more courses teachers take

All live and in English. Several are courses teachers later recommend to their own pupils.

### For the teacher

Adult courses

- [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college): Programming from zero, at an adult pace.
- [Generative AI](/courses/complete-generative-ai-masterclass-college): How language models are used and evaluated.
- [Canva and AI design](/courses/canva-ai-design-masterclass): Clear classroom materials with AI features.

### Maths and data

For maths and science teachers

- [Maths for Data Science](/courses/data-analytics-mathematics-masterclass): Statistics and linear algebra behind AI.
- [Maths through coding](/courses/maths-through-coding): School maths explored in Python.
- [Data Analysis](/courses/data-analysis-mastery-course-college): Excel, SQL and Python for real datasets.

### For your pupils

Courses to recommend

- [AI Literacy for Kids](/courses/ai-literacy-for-kids-course): Ages 8 to 14: understanding AI, not just using it.
- [AI and ML for teens](/courses/ai-ml-masterclass-teens): Python to real models for 13 to 18 year olds.
- [Scratch coding](/courses/scratch-programming-complete-course): First games and stories for young children.

## What does a live class for teachers look like?

Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.

- **Before school** Early mornings in Peru meet the Indian evening.
- **After school** Evenings in Peru, early morning in India, by arrangement.
- **One to one** Your pace, paused for report weeks and exams.

- **Your subject** Examples drawn from what you actually teach.
- **Your marks** Evaluation sets built on your own marked work.
- **No pupil data** Everything anonymised before it reaches a tool.
- **Clear English** Steady pace; key terms written down.
- **Adults only** Teacher groups never mix with pupils.
- **One mentor** The same person through the whole course.

## Fees for teachers

The course is priced in US dollars and paid by card. Your bank converts each monthly payment into soles at the rate it uses that day, so the figure in soles may vary slightly between months.

- Free first class: Free. A free first class. Try the marking check on a few answers. No card to book.
- Group batch: USD 100 a month. Fifteen to twenty adult learners. One mentor from start to finish. Two live classes a week. Monthly; pause in busy school weeks.
- One to one: USD 150 a month. A mentor for you alone. Built around your subject and school. Times fitted around your teaching.

## AI for teachers: questions and answers

### Are the classes in Spanish?

No. Our teachers' course is taught live online in English, and only in English. Mentors speak steadily, adjust to your accent and pace, and write key terms in the chat, so a teacher with intermediate English can follow and improve along the way.

### Do I need to know how to code?

No. The core of the teachers' route, including the marking check, can be done without writing code. Teachers who want to build their own tools can add Python at any point, from zero.

### Is this the same as MINEDU's AI course?

No. MINEDU's free course "Inteligencia artificial (IA) en la práctica docente" focuses on practice and counts towards the teaching career scale. Ours is independent, goes deeper into how AI works and how to test it, and does not count towards that scale.

### Can I use AI to mark my pupils' work?

As a helper, carefully. Test any tool on answers you have already marked, as in the lesson on this page, and keep the final mark yours. Peru's DS 115-2025-PCM treats AI that replaces human evaluation of pupils' learning as high risk; that is context, not legal advice.

### Which AI tools can my pupils use?

It depends on age and on each vendor's terms. ChatGPT requires users to be at least 13, with a parent's permission under 18; Claude requires 18. For primary pupils we recommend AI lessons that need no account at all.

### When can I take classes?

Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. Many teachers start in the January to February break and use the 2026 management weeks to catch up.

### What is Cohen's kappa, briefly?

A measure of how much two markers agree beyond what chance alone would produce. Agreement of 79% with chance agreement of 36% gives a kappa of 0.67 in our lesson: useful, but well short of a teacher marking alone.

### Is there a certificate?

Our own certificate of completion. It is not a MINEDU certificate, does not count for the Carrera Pública Magisterial scale, and we are not connected with MINEDU, any UGEL or any school.

### Can a group of teachers from one school join together?

Yes. Teachers from the same school can form a group, and the examples can be built around your shared subjects and calendar. Contact us to arrange it.

### What do I need?

A laptop or desktop computer, a stable connection and a headset. Accounts for AI tools are optional and set up only with tools your school permits.

## Related pages

- [Coding and AI classes in Peru](/coding-and-ai-classes-in-peru): Everything we teach in Peru, by age.
- [Profesor de matemáticas en inglés](/profesor-de-matematicas-en-ingles-peru): Maths taught in English, explained in Spanish.
- [AI tools age guide](/ai-tools-age-guide): Minimum ages for over a hundred AI tools.
- [We teach you how to think](/we-teach-you-how-to-think): Our approach: reasoning before tools.
- [How we teach](/how-we-teach): How a live class runs.
- [All courses](/courses): Every syllabus.

## More pages for Peru

Part of the guide: [Every Peru page](/coding-and-ai-classes-in-peru)

### Subjects and courses

- [AI agents course](/ai-agents-course-peru)
- [AI agents for professionals](/ai-agents-for-professionals-peru)
- [AI course for business](/ai-course-for-business-peru)
- [AI course for kids](/ai-course-for-kids-peru)
- [AI course for teens](/ai-course-for-teens-peru)
- [AI for university students](/ai-course-for-university-students-peru)
- [App development course](/app-development-course-peru)
- [App development for teens](/app-development-for-teens-peru)
- [C++ course](/c-plus-plus-course-peru)
- [Data science course](/data-science-course-peru)
- [Java course](/java-course-peru)
- [Java for CS students](/java-for-computer-science-students-peru)
- [Maths for kids in English](/maths-for-kids-in-english-peru)
- [Maths tutor in English](/maths-tutor-in-english-peru)
- [Minecraft coding for kids](/minecraft-coding-for-kids-peru)
- [One-on-one coding tutor](/one-on-one-coding-tutor-peru)
- [Online maths classes](/online-maths-classes-peru)
- [Python course](/python-course-peru)
- [Python for engineering students](/python-for-engineering-students-peru)
- [Python for kids](/python-for-kids-peru)
- [Roblox coding for kids](/roblox-coding-for-kids-peru)
- [Scratch for kids](/scratch-for-kids-peru)
- [Software development course](/software-development-course-peru)
- [SQL and data analysis](/sql-and-data-analysis-course-peru)
- [Vibe coding classes](/vibe-coding-classes-peru)
- [Web development course](/web-development-course-peru)

### Subjects and courses (in Spanish)

- [Agentes de IA para profesionales](/curso-de-agentes-de-ia-para-profesionales)
- [Clases particulares de programación](/clases-particulares-de-programacion-online-peru)
- [Crear apps: adolescentes](/crear-apps-curso-para-adolescentes-peru)
- [Curso de agentes de IA](/curso-de-agentes-de-ia-peru)
- [Curso de IA para adolescentes](/curso-de-ia-para-adolescentes-peru)
- [Curso de IA para empresas](/curso-de-ia-para-empresas-peru)
- [Curso de inteligencia artificial en inglés](/curso-de-inteligencia-artificial-en-ingles-peru)
- [Curso de inteligencia artificial para niños](/curso-de-inteligencia-artificial-para-ninos-peru)
- [Curso de Java en inglés](/curso-de-java-en-ingles-peru)
- [Curso de Python en inglés](/curso-de-python-en-ingles-peru)
- [Cursos de programación con certificado](/cursos-online-con-certificado-programacion-en-ingles)
- [Data science y Python](/curso-de-data-science-en-ingles-peru)
- [Desarrollo de aplicaciones](/curso-de-desarrollo-de-aplicaciones-en-ingles)
- [Desarrollo de software](/curso-de-desarrollo-de-software-en-ingles-peru)
- [Desarrollo web](/curso-de-desarrollo-web-en-ingles-peru)
- [IA para docentes](/ia-para-docentes-curso-en-ingles)
- [Java para universitarios](/curso-de-java-para-universitarios-peru)
- [Matemáticas en inglés para niños](/clases-de-matematicas-en-ingles-para-ninos)
- [Profesor de matemáticas en inglés](/profesor-de-matematicas-en-ingles-peru)
- [Profesor particular de matemáticas online](/profesor-particular-de-matematicas-online-peru)
- [Programación en Minecraft para niños](/programacion-minecraft-para-ninos-peru)
- [Programación en Roblox para niños](/programacion-roblox-para-ninos-en-ingles)
- [Python para ingeniería](/python-para-estudiantes-de-ingenieria-peru)
- [Python para niños](/curso-de-python-para-ninos-peru)
- [Scratch para niños en inglés](/scratch-para-ninos-en-ingles)
- [Vibe coding en inglés](/vibe-coding-curso-en-ingles)

More guides: [Coding and AI classes in Peru](/coding-and-ai-classes-in-peru), [En español: clases de programación en inglés](/clases-de-programacion-en-ingles-peru), [Start here: English-medium coding in Lima](/english-medium-coding-classes-lima), [By age and stage: AI and coding for professionals](/ai-and-coding-for-professionals-peru), [Exams, olympiads and school holidays: IB computer science tutor](/ib-computer-science-tutor-peru), [Guides to choosing: An English-taught option to Crack The Code](/crack-the-code-alternative-in-english), [Regions of Peru: Amazonas region](/online-coding-and-ai-classes-amazonas-region-peru), [Cities: Arequipa: coding for every age](/coding-classes-in-arequipa-peru), [Lima and Callao districts: Programación para niños en Ancón](/clases-de-programacion-para-ninos-ancon-lima)

## Contact

Book the free first class at [https://learn.modernagecoders.com/ai-for-teachers-peru](https://learn.modernagecoders.com/ai-for-teachers-peru#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
