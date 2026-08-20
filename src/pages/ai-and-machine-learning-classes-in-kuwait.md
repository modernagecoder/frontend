---
title: "AI & Machine Learning Classes in Kuwait | Build AI, Live Online"
description: "Live online AI and machine learning classes for students in Kuwait, ages 6 to 67. Train real models in Python, not just prompt AI tools. Free first class."
canonical: https://learn.modernagecoders.com/ai-and-machine-learning-classes-in-kuwait
source: src/pages/ai-and-machine-learning-classes-in-kuwait.html
---
> Live online AI and machine learning classes for students in Kuwait, ages 6 to 67. Train real models in Python, not just prompt AI tools. Free first class.

In short

Modern Age Coders runs live online AI and machine learning classes for students in Kuwait, ages 6 to 67, in batches of five to eight or one to one. Students learn Python and the mathematics beneath machine learning, then train and evaluate their own models instead of only prompting AI tools. Fees start at USD 100 a month, billed in US dollars, and the first class is free.

The catalogue

## Twelve live courses, grouped by present ability

Where a learner starts is decided by what they can already do, not by their birthday. The three bands below are separate curricula with their own projects and their own finishing line. Each card opens the full week by week syllabus.

I

### Children, ages 6 to 12

Real code early, and a truthful account of what AI is

KW / KIDS / 01

#### Python and AI for Kids

Typed code from week one, not coloured blocks dragged into a slot. Python, turtle graphics, small games, then the central idea: a machine shown examples can work out the rule itself.

[Open the syllabus](/courses/python-ai-kids-masterclass)

KW / KIDS / 02

#### AI Literacy for Kids

Where a model gets its answers, why two runs disagree, and why fluent writing is not evidence of a fact. Children practise checking a claim before repeating it.

[Open the syllabus](/courses/ai-literacy-for-kids-course)

KW / KIDS / 03

#### Vibe Coding for Kids

Children brief an AI tool, run what comes back, find the part that does not work and fix it. Writing the instruction takes a minute. Locating the fault is the lesson.

[Open the syllabus](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)II

### Teenagers, ages 13 to 18

From first syntax to a model with a measurable error

KW / TEEN / 01

#### AI and Machine Learning for Teens

The main track behind this page. Python, the mathematics the subject needs, classical algorithms, neural networks, computer vision and language models, with a trained model closing every stage.

[Open the syllabus](/courses/ai-ml-masterclass-teens)

KW / TEEN / 02

#### Data Science for Teens

Most of the work happens before a model is fitted. Reading messy files, joining tables that disagree, plotting, and finding the bad row that would make every later number wrong.

[Open the syllabus](/courses/data-science-course-for-teens-python-data)

KW / TEEN / 03

#### Python for Teens

Two years from the first line of code to genuinely advanced Python. The right start if your child has never programmed and wants the machine learning track on firm ground.

[Open the syllabus](/courses/python-complete-masterclass-teens)

KW / TEEN / 04

#### Vibe Coding for Teens

Shipping web and Python projects with an AI assistant, then reviewing what it wrote line by line. Teens finish able to deliver, and able to defend every decision inside the delivery.

[Open the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)III

### University students and working professionals

Depth, generative systems, and deployment

KW / PRO / 01

#### AI and Machine Learning Masterclass

The full engineering route. Supervised and unsupervised methods, deep networks, training discipline, evaluation that holds up under questioning, and the deployment step short courses leave out.

[Open the syllabus](/courses/ai-ml-masterclass-complete-college)

KW / PRO / 02

#### Generative AI: LLMs, RAG and Agents

How large language models are trained, fine tuned and grounded against a private document set, and how an agent is constrained so it does not act on a wrong conclusion.

[Open the syllabus](/courses/complete-generative-ai-masterclass-college)

KW / PRO / 03

#### Python and AI Automation

For professionals in Kuwait who want the applied half first: machine learning and language processing pointed at the reports, spreadsheets and pipelines already on their desk.

[Open the syllabus](/courses/python-ai-automation-masterclass-college)

KW / PRO / 04

#### Data Science Masterclass

Built around the shape of the job. Statistics, SQL, feature engineering, modelling, and explaining a result to someone who will not read your code. Ends in a portfolio.

[Open the syllabus](/courses/data-science-complete-masterclass-college)

KW / PRO / 05

#### Data Structures and Algorithms

The gate every serious engineering interview puts in front of you, and the reason a pipeline that handles a thousand rows survives ten million. Problem solving, not memorisation.

[Open the syllabus](/courses/data-structures-algorithms-masterclass-college)

Beyond AI we teach mathematics, web, app and game development and exam preparation, all live and all on Kuwait timings. [Browse the full catalogue](/courses).

What you actually build

## The Shamal Dust Classifier, and what a false alarm costs at Shagaya

Every market we teach in gets a first project on data from that country, because a model your own family can argue with is a model you remember. In Kuwait the subject is dust. A dust storm is defined meteorologically as horizontal visibility below 1,000 metres, and research in the Arabian Journal of Geosciences puts Kuwait at about 255.4 dusty days a year.

| Year | Dust storm | Blowing dust | Dust haze | Haze | Rainfall, mm |
| --- | --- | --- | --- | --- | --- |
| 2014 | 8 | 45 | 48 | 236 | n/a |
| 2015 | 8 | 68 | 76 | 276 | n/a |
| 2016 | 2 | 54 | 43 | 256 | n/a |
| 2017 | 2 | 62 | 47 | 292 | 52.2 |
| 2018 | 18 | 86 | 97 | 291 | 344.1 |
| 2019 | 4 | 63 | 93 | 295 | 69.3 |
| 2020 | 2 | 60 | 101 | 315 | 114.1 |
| 2021 | 7 | 66 | 72 | 306 | 32.3 |
| 2022 | 4 | 84 | 97 | 317 | 114.3 |
| 2023 | 1 | 53 | 58 | 305 | 147.4 |

### Why this table is worth ten lectures

The obvious hypothesis is that a wet year washes the dust out. 2018 destroys it: the decade's highest dust storm count, eighteen, arrived in its wettest year, 344.1 mm. 2021 was the driest year at 32.3 mm and still recorded seven storms, while 2023 had 147.4 mm and recorded one.

The harder lesson is in the last two columns. Haze runs between 236 and 317 days a year while dust storms run between one and eighteen: a class imbalance of roughly one in three hundred. A student who has met that problem at fifteen is never again impressed by an accuracy score.

### The label, the features, the tools

The modelling data is about 3,650 daily surface observations for station OKBK, Kuwait International Airport, from 1 January 2014 to 31 December 2023, free from the NOAA Integrated Surface Database or the Iowa State IEM archive. Each row holds visibility, wind speed and direction, temperature, dewpoint, pressure and present weather codes. The published counts above are the exhibit students validate against, not the training data.

The target is a four class daily label matching the Met Center's own categories, dust storm, blowing dust, dust haze and haze, plus clear, reduced for the headline task to dust storm against everything else.

pandasscikit-learn matplotlibgradient boosting precision and recalltime based split

1. #### Type the ten rows in by hand, then find the base rate

  The student enters the published table into a CSV and plots dust storms against haze days. Before any modelling, they work out what a model that always predicts no dust storm would score. With one to eighteen storms in a 365 day year, that lazy model is right about 95 to 99.7 per cent of the time. That number goes at the top of the notebook and every later result has to beat it.
2. #### Pull the raw observations and check the fields you were promised

  Download the day level record for OKBK for 2014 to 2023, then inspect the present weather field first. Coverage varies by station and by year. If it is sparse, labels have to come from visibility and wind instead. Finding that out on day one rather than in week three is itself the taught skill, and it is why we do not hand students a cleaned file.
3. #### Reconcile against the published counts, and explain the gap

  Compare your derived annual totals with the Met Center's published counts above. They will not match. The Met Center may count across a different station set, may apply a duration threshold, and its observer categories do not map one to one onto machine readable codes. Writing down where the two disagree, and why, is the deliverable. Making the difference vanish is not.
4. #### Build the two features where the physics lives

  Daily maximum wind speed, minimum visibility, temperature range, dewpoint depression and day of year as sine and cosine are the easy part. The shamal direction flag, at roughly 300 to 340 degrees, and the days since rain counter carry the meteorology. Without them a model learns only that dust happens in July. The Met Center names four recurring dust windows, 9 to 12 June, 17 to 24 June, 1 to 7 July and 9 to 17 July, plus the Al-Sarayat season of 10 March to 8 April with mean winds of 65 km per hour.
5. #### Split on time, never at random

  Train on 2014 to 2021 and test on 2022 to 2023, with no shuffling. Weather is strongly autocorrelated from one day to the next, so a random split leaks tomorrow into today's training data and returns a score that collapses on the first unseen date. We let students make that mistake once, deliberately.
6. #### Report precision and recall, and refuse to report accuracy

  Fit a logistic regression baseline and a gradient boosted tree beside it. Show the confusion matrix, report precision, recall and the area under the precision recall curve, tune class weighting, then sweep the decision threshold and plot how many false alarms each additional caught storm costs.
7. #### Price the model in wash trucks, not in F1 score

  At the Shagaya Renewable Energy Park, whose KISR supervised photovoltaic plant is 11.15 MW, made up of 5.5 MW of thin film and 5.6 MW of polycrystalline silicon, a sudden dust storm drops output by about 30 per cent, the performance ratio fell 6 to 8 per cent across 25 months of monitoring even with careful cleaning, panels are washed about five times a year by semi-automatic truck using 3.35 to 4.61 litres of water per MWh, and a mean site wind of 11.3 m per second gives partial self cleaning. How many false alarms per correct warning can the threshold afford before the truck costs more than the generation it saves? That figure is the answer, not the F1 score.

The distinction

## Driving a model and building one are separate skills

We teach both, in that order, and we tell parents which one holds its value. Driving a tool is a product skill, and products get replaced.

#### Using AI tools

- Describe what you want, read what comes back, reword until it looks right
- Memorise the interface of whichever product is fashionable this year
- The finish line is an output that reads plausibly
- Nothing tells you when the answer is confidently wrong
- Value evaporates when the tool is retired, repriced or age restricted
- Genuinely useful, and honestly about six weeks of anybody's time

#### Building AI

- Assemble the data yourself and defend every decision you made about it
- Pick a model knowing which assumption it is quietly making for you
- Train it, then state the error in units a non specialist can verify
- Work out whether the failure came from the data, the features or the model
- Put it in front of real inputs and watch it degrade over months
- Built on statistics, linear algebra and code, none of which get deprecated

The dust project is that distinction made concrete. A prompt will describe a dust storm beautifully. It will not tell the operator of an 11.15 MW solar plant whether to send the wash truck tomorrow, because that answer exists only once somebody has trained a model on ten years of local observations and priced its mistakes.

Why now, in Kuwait

## A draft national strategy, two announced cloud regions, and nobody to staff them

In January 2025 the Central Agency for Information Technology published the Kuwait National AI Strategy 2025 to 2028 as a draft aligned to Kuwait Vision 2035. It is a roadmap and a set of recommendations, not enacted law. Its five pillars are establishing Kuwait as an AI hub, AI driven transformation across government, healthcare, energy, education, transport and public safety, AI governance with privacy and security, workforce empowerment through skills, digital literacy and scholarships, and an ecosystem of startups, venture capital and academic collaboration.

The named first year initiatives are an AI Centre of Excellence, pilot projects, a centralised data repository and a High-Level Steering Committee drawing on CAIT, CITRA, the National Cybersecurity Center, ministries, academia and the private sector. Years two and three, 2026 and 2027, scale what worked and integrate AI into core services, with full sectoral integration targeted by 2028.

Infrastructure has been announced alongside it. In March 2025 Microsoft signed a strategic partnership with the Government of Kuwait covering an intended AI powered Azure Region, a Microsoft Technology Innovation Hub operating an AI Innovation Center, and a joint cybersecurity initiative. Google Cloud has named Kuwait City as its next Middle East and Africa region. The Civil Service Bureau is targeting completion of service integration for an AI powered unified government services platform before the end of June 2026.

The demand is not only governmental. Kuwait Oil Company has opened an Artificial Intelligence Innovation Center to connect oil field production with AI, and predictive maintenance, predictive analytics and real time monitoring of the major fields are named applications across Kuwait Oil Company and Kuwait Burgan Drilling Company, under Kuwait Petroleum Corporation and KIPIC. Zain Group is headquartered in Kuwait, and its Kuwait Codes initiative with CODED Academy has trained more than 3,500 young Kuwaiti coders with free training in app creation, AI and cybersecurity. stc Kuwait and Ooredoo Kuwait operate here too.

Banking is the deepest non oil employer of quantitative talent, and the reason is transaction volume: KNET brands every debit card in the country, roughly 80 per cent of about 5 million cards in issue. Fraud detection, credit scoring, anti money laundering and Islamic finance product analytics run on that data.

| Bank | Total assets, KD million |
| --- | --- |
| National Bank of Kuwait | 45,613 |
| Kuwait Finance House | 42,760 |
| Boubyan Bank | 10,201 |
| Burgan Bank | 9,099 |
| Gulf Bank | 7,700 |
| Warba Bank | 6,028 |

2025 to 2028

Span of the draft Kuwait National AI Strategy, published by CAIT in January 2025

Five pillars

AI hub, sectoral transformation, governance, workforce, ecosystem

June 2026

Civil Service Bureau target for the AI powered unified government services platform

255.4 days

Dusty days a year in Kuwait, the dataset behind the first student project

School and university

## Four school systems in one country, and how this fits each of them

### The Indian and CBSE schools

Private and international schools are accredited by the Private Education Department of the Ministry of Education, which also regulates staff qualifications, facilities and fees. The Indian schools under it are affiliated to CBSE New Delhi and run the April to March year with Class 10 and 12 board exams from February to April: Indian Community School Kuwait, founded 1959 with four branches, the Indian Educational School, Fahaheel Al-Watanieh Indian Private School, Jabriya Indian School, started June 1993, The Integrated Indian School at Jleeb Al-Shuyoukh, Carmel School Kuwait, India International School and Indian Public School.

Demand here is demographic. Per the Central Statistical Bureau and PACI, Indians are the largest expatriate community in Kuwait at about 1.059 million at the end of 2025, up 5.08 per cent on the year, with Egyptians second at about 667,173. For those families CBSE Computer Science and Artificial Intelligence is the board content we already teach to.

### The British, American, IB and bilingual schools

The International Schools Database, a commercial directory rather than a Ministry publication, lists 46 international schools in Kuwait City: roughly 21 American curriculum, 17 British, 5 Indian and CBSE, 5 Kuwaiti bilingual, 3 IB, 1 Canadian and 1 French, with annual tuition quoted between KD 1,132 and KD 7,950.

British curriculum: The British School of Kuwait, running Key Stages 1 to 3 then IGCSE and A level, Kuwait English School, The English Academy in Hawalli, which sits public exams in Years 10 and 11, International Academy of Kuwait, Oxford Academy Kuwait and Kuwait International English School. American diploma: The American School of Kuwait, American Academy for Girls, American Baccalaureate School, American United School, New American School and Iqra'a American School. IB World Schools: American International School of Kuwait, running the Primary Years, Middle Years and Diploma programmes, American Creativity Academy at Diploma level, Kuwait Bilingual School at Primary and Middle Years, and Reborn Kids Education Academy. The Kuwaiti bilingual schools, among them Hayat Universal Bilingual School, Ajial Bilingual School, Al Ghanim Bilingual School, Dasman Bilingual School and A'Takamul International School, teach a North American curriculum alongside the Kuwaiti Ministry of Education curriculum for Arabic, Islamic Studies and Social Studies.

### Kuwait University and Abdullah Al-Salem University

Kuwait University, founded 1966, welcomed 43,843 students for 2025 to 2026, including 6,596 first years across 15 colleges. Its main campus is Sabah Al-Salem University City at Shadadiya, opened in 2019, about 6 million square metres with 17,000 parking spaces, housing Engineering and Petroleum alongside Business Administration, Life Sciences, Education, Arts and Science.

For 2025 to 2026 the College of Life Sciences, through its Department of Information Sciences, launched a Data Science and Artificial Intelligence programme designed to ABET and ACM curriculum standards. Dr Bader Ali describes it as the only such programme at Kuwait University, and the announcement names Prof. Ahmed Al-Lafi, Acting President of the College of Life Sciences, and Dr Zainab Al-Jazzaf, Acting President of the Department of Information Sciences.

One caution on entry requirements. Undergraduate cut off percentages are set annually by the Deanship of Admission and Registration, and we publish no figure for them. The requirements we can verify are for graduate Computer Science admission through the College of Graduate Studies: a GPA of 2.67, an admission exam score of 60 per cent, and TOEFL 500 or IELTS 6.0 overall. Those are postgraduate requirements, not school-leaver ones.

Abdullah Al-Salem University, the second public university, was inaugurated by the Amir with an Amiri Diwan announcement dated 6 March 2024, and its 2025 to 2026 intake was the third cohort. It runs colleges of Business and Entrepreneurship, Computing and Systems, Engineering and Energy, and Health and Medicine at bachelor's, master's and doctoral level, focused on cybersecurity, data science, artificial intelligence and renewable energy under Kuwait Vision 2035.

Gulf University for Science and Technology teaches Computer Science across programming, algorithms, data structures, artificial intelligence, databases, web and mobile development, cybersecurity and networking. The American University of Kuwait runs a BSc in Computer Science through its College of Engineering and Applied Sciences at a minimum of 120 credit hours. American International University Kuwait offers BS Computer Science with an Artificial Intelligence specialisation covering machine learning, neural networks, natural language processing and cognitive computing, and a separate Data Science specialisation. The American University of the Middle East also operates here. Every one of those routes rewards a student who arrives already able to write and defend code.

How the classes run

## Built around a Sunday to Thursday week, not a Western one

Kuwait keeps Arabia Standard Time, UTC+3, and observes no daylight saving at any point in the year. India, where our teaching operation sits, keeps UTC+5:30, so India is exactly 2 hours 30 minutes ahead every day, with none of the twice yearly drift that makes a British or American schedule fragile. The offset is the easy part. What providers get wrong is the week.

16:00 to 17:30

Kuwait time, Sunday to Thursday. Straight after school, popular with children aged 6 to 12. That is 18:30 in India.

18:00 to 19:30

Kuwait time, Sunday to Thursday. The main teenage block, and the slot working adults choose. That is 20:30 in India.

10:00 to 11:30

Kuwait time, Friday or Saturday. The weekend group for every age band, including university students and professionals. That is 12:30 in India.

### What a session is, and what we will not promise

Ninety minutes of live teaching from someone who recalls your child's last sticking point without being reminded. Screens are shared both ways, so the teacher watches the code being written and interrupts at the moment the mistake appears. Batches are five to eight students, or one to one. Between sessions there is a build task rather than a worksheet, and questions during the week reach the same teacher rather than a support queue.

Our latest workable slot is 7:30 PM Kuwait time, already 10:00 PM in India. An 8:00 or 9:00 PM Kuwait batch would fill, but it needs a dedicated late shift teacher to run honestly, so we do not list one.

### Two academic years, side by side

Indian curriculum families run April to March with board exams from February to April and a long break in July and August. British, American, IB and Kuwaiti schools run late August or September to June. Kuwait English School publishes its 2026 to 2027 Term 1 as Sunday 30 August to Thursday 17 December 2026, with a mid term break from 25 to 29 October and a winter break from 20 to 31 December, Term 2 as Sunday 3 January to Thursday 15 April 2027, and Term 3 ending on 16 and 17 June 2027. It marks Ramadan as expected to begin 8 February 2027, subject to moon sighting. We enrol against both calendars.

Kuwait has 13 official public holidays in 2026. National Day on Wednesday 25 February and Liberation Day on Thursday 26 February fall consecutively and, with the Friday and Saturday weekend, make a four day break. Eid al-Fitr runs Friday 20 to Sunday 22 March 2026, Eid al-Adha covers four days, and Isra and Mi'raj, the Islamic New Year and the Prophet's Birthday complete the list. Islamic dates are confirmed by moon sighting and can move by a day or two, so we confirm affected weeks with families rather than publishing a fixed table.

Summer is its own constraint. Outdoor work is banned daily from 11:00 to 16:00 between 1 June and 31 August under Ministerial Resolution No. 3 of 2026 from the Public Authority for Manpower, and Kuwaiti summers routinely pass 50 degrees Celsius. Indoor months are long here, which is one reason a serious online course works better than a commute.

Student work

## Software our students wrote and published

None of it is a mockup. Each is a working application at a real address, built by a student and left online where anyone can open it and try to break it. More in [Student Labs](/student-labs).

![NutriLife AI nutrition coach project screenshot](/images/projects/nutrilife.webp)

AI and ML

#### NutriLife, an AI nutrition coach

A nutrition assistant that reads what you have eaten and coaches you toward a target.

by Bhavya · [Open the live project](https://nutrilife-bhavya.lovable.app)

![Misti AI chatbot for maths and coding screenshot](/images/projects/misti.webp)

AI and ML

#### Misti, an AI chatbot for maths and coding

A tutoring chatbot that answers maths and programming questions, deployed on its own domain.

by Harshit · [Open the live project](https://misti.modernagecoders.com)

![GuardianX AI safety assistant screenshot](/images/projects/guardianx.webp)

AI and ML

#### GuardianX, an AI safety assistant

An assistant that helps a young person recognise an unsafe situation online.

by Vivaan · [Open the live project](https://guardianx-cybersaver.lovable.app)

![SkyCast weather forecast app screenshot](/images/projects/skycast.webp)

Data and APIs

#### SkyCast, a weather forecast app

A forecast app built on live weather data, the nearest cousin to the dust classifier above.

by Krish

Fees

## What it costs a family in Kuwait

Billing runs month to month, with nothing charged to join and no yearly commitment. Fees are a flat USD 100 a month for a group batch and USD 150 for one to one, billed in US dollars, the same fee everywhere outside India; your bank converts to dinars at its own card rate on the day.

Free first class

USD 0

No card, no KNET

- A real teaching session, not a sales call
- Doubles as a placement check so the level is set correctly
- You watch it happen, then decide

Book it

Group batch

USD 100

a month, billed in US dollars

- Five to eight students, same teacher every week
- Live video only, no recording sold as a lesson
- A build task between sessions, reviewed by the teacher
- Certificate on completion, and a published project that matters more

Start here

One to one

USD 150

a month, billed in US dollars

- Private teaching at your pace and on your calendar
- Best for board exam years and adults with one free evening
- Syllabus rebuilt around your goal, not a cohort average

Enquire

What families say

## Rated 4.9 across 547 Google reviews

Real reviews left by real families. We do not write testimonials and we do not commission them.

★★★★★

"The teachers are incredibly knowledgeable and passionate about coding. They make every session engaging and insightful."

Ritu Kedia

Parent

★★★★★

"The one step solution for my son. Modern Age Coders make learning coding so simple that kids love it."

Ria Mukherjee

Parent

★★★★★

"I struggled to grasp IT concepts and coding before joining, but their classes transformed everything. I'm now the topper in my class and can confidently write complex programs with ease."

Samriddha Mondal

Student

★★★★★

"My child Dhairya is really enjoying the Modern Age Coder IT classes. This is his first online class, and he eagerly looks forward to it."

Sonam Oswal

Parent of Dhairya

★★★★★

"Modern Age Coder have wonderful teachers who teach in a clear, easy and practical way. The teacher boosts students' confidence, keeps them updated with technology, and inspires them to learn without hesitation."

Sonu Goyal

Parent

★★★★★

"One of the most wonderful education centres out there. Education is not limited to school syllabus but focuses on skill development."

Vansh Agarwal

Student

Questions from Kuwait

## What families in Kuwait City, Salmiya and Fahaheel ask us first

### Can we pay with KNET, or how do families in Kuwait actually pay?

KNET settles only in Kuwaiti dinars and only inside Kuwait, so it cannot pay an Indian provider. It was established in 1992, is jointly owned by 11 Kuwaiti national banks, and every debit card issued in Kuwait carries its brand. Families in Salmiya, Jabriya, Hawalli and Fahaheel pay us by Visa or Mastercard credit card, or by bank transfer. The free first class needs no payment method at all.

### Kuwait's weekend is Friday and Saturday. Do your weekend batches run on those days?

Yes. The Kuwaiti school and working week runs Sunday to Thursday, so a Saturday and Sunday batch is wrong here, because Sunday is a school day. Our weekend group meets at 10:00 Kuwait time on Friday or Saturday, which is 12:30 in India. National Day on Wednesday 25 February 2026 and Liberation Day on Thursday 26 February 2026 make a four day break with the weekend, and those classes are rescheduled rather than cancelled.

### My child is at a CBSE school in Kuwait. Does this fit the April to March year and the board exams?

Yes. Indian Community School Kuwait, the Indian Educational School, Jabriya Indian School and The Integrated Indian School are affiliated to CBSE New Delhi, approved by the Private Education Department of the Ministry of Education, and run the Indian April to March year. Our teens track covers CBSE Computer Science and Artificial Intelligence for Classes 9 to 12. Through the February to April board exam window we drop to one short session a week.

### My child is at a British school in Kuwait. Do you cover IGCSE Computer Science and A level?

Yes. The British School of Kuwait runs Key Stages 1 to 3 and then IGCSE and A level, and Kuwait English School, The English Academy in Hawalli and International Academy of Kuwait sit public exams in the senior years. Their year runs late August to mid June. Kuwait English School publishes Term 1 of 2026 to 2027 as starting on Sunday 30 August 2026, and we enrol against that calendar rather than the Indian one.

### India is 2 hours 30 minutes ahead of Kuwait. What is the latest evening slot you can run?

Kuwait keeps Arabia Standard Time, UTC+3, with no daylight saving in any month, and India keeps UTC+5:30, so the gap is a fixed 2 hours and 30 minutes all year. A 6:00 PM class in Kuwait is 8:30 PM in India and runs comfortably. Our ceiling is 7:30 PM Kuwait time, already 10:00 PM in India. We do not advertise an 8:00 or 9:00 PM Kuwait batch, because staffing one from India needs a dedicated late shift teacher.

### Is the fee fixed in dinars or in dollars, and what happens if the rate moves?

The fee is fixed in dollars: a flat USD 100 a month for a group batch and USD 150 for one to one, billed in US dollars, the same fee everywhere outside India, and we hold it. The Kuwaiti dinar is the one Gulf currency not pegged straight to the US dollar, so the dinar amount on your card statement can drift by a few fils from month to month while the dollar fee itself does not move.

### Will this help with admission to Kuwait University or Abdullah Al-Salem University?

It builds the evidence those applications want. For 2025 to 2026 the College of Life Sciences at Kuwait University, through its Department of Information Sciences, launched a Data Science and Artificial Intelligence programme designed to ABET and ACM curriculum standards. Abdullah Al-Salem University, inaugurated on 6 March 2024, runs a College of Computing and Systems focused on cybersecurity, data science, artificial intelligence and renewable energy. Undergraduate cut offs are set annually by the Deanship of Admission and Registration, so we quote no number.

### Does an online certificate from India carry weight with employers in Kuwait?

On its own, very little, here or anywhere, and we say so. What carries weight is a link to something that runs. Kuwait Oil Company has opened an Artificial Intelligence Innovation Center, Zain Group is headquartered in Kuwait and its Kuwait Codes programme with CODED Academy has trained more than 3,500 young Kuwaiti coders, and banks led by National Bank of Kuwait and Kuwait Finance House run fraud detection, credit scoring and anti money laundering models. Those teams can read a notebook.

Start here

## Book the free first class

Leave a number and a mentor calls you back, usually within a few hours and at an hour that suits Kuwait rather than one that suits us. The first class is a real class with a real teacher, and it doubles as a placement check so your child begins at the right level.

Prefer to read first? See [how we teach](/how-we-teach), or open what students have built in [Student Labs](/student-labs).

[Chat with us](https://wa.me/919123366161?text=Hi%2C%20I'm%20interested%20in%20learning%20more%20about%20your%20courses!)

---

*Canonical: https://learn.modernagecoders.com/ai-and-machine-learning-classes-in-kuwait*
