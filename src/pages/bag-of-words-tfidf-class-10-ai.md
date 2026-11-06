---
title: "Bag of Words Class 10 AI: TFIDF Worked Example, 2026-27"
description: "Bag of words class 10 AI, fully worked: three documents taken from raw text to the document vector table, IDF and TFIDF, using the CBSE handbook formula."
canonical: https://learn.modernagecoders.com/bag-of-words-tfidf-class-10-ai
source: src/pages/bag-of-words-tfidf-class-10-ai.html
updated: 2026-11-06
---

> Bag of words class 10 AI is the method in CBSE 417 Unit 6 that turns text into numbers: normalise the corpus, list every unique word as the dictionary, then write each document as a row of word counts, called the document vector table. TFIDF then weighs each count. Following the CBSE handbook, IDF(W) = total documents / documents containing W, and TFIDF(W) = TF(W) x log10(IDF(W)), so a word found in every document scores 0. Modern Age Coders practises these tables live in a Monday and Wednesday 9:00 PM IST batch, or personalised one to one.

## What is Bag of Words in Class 10 AI?

Bag of Words is an NLP model that represents each document by how many times every word of the corpus occurs in it, ignoring grammar and word order. The name fits: the words are tipped into a bag and only counted.

### The algorithm in four steps

-
**Normalise the text** Clean all the documents together: split, tokenise, drop stopwords and symbols, lower the case, reduce words to their base.

-
**Create the dictionary** List each unique word of the normalised corpus once. This list is also called the vocabulary.

-
**Make a vector for one document** Under every dictionary word, write how many times it appears in that document.

-
**Repeat for every document** Stack the rows and you have the document vector table, ready for TFIDF.

### What the model gives, and what it loses

- Gives: a fixed-length row of numbers for every document, which a machine can compare and learn from.

- Gives: a quick view of which words dominate each document.

- Loses: order. "Dog bites man" and "man bites dog" get the same vector.

- Loses: importance. A common word gets a big count without telling documents apart, which is the problem TFIDF fixes.

Bag of Words and TFIDF are part of the theory half of Unit 6 in the 2026-27 curriculum, so a calculation on a small corpus is fair game for a four-mark question. The other Unit 6 topics, the stages, chatbots and applications, are answered on [NLP class 10 questions and answers](/cbse-class-10-ai-nlp-questions).

## Text normalisation steps on our three documents

We start from three raw sentences. The stopword list is stated up front, because an examiner marks you on the list you declare, and different lists give different dictionaries.

```
D1: Meera feeds the stray dogs, and the
    dogs wag their tails at Meera.
D2: The stray dogs follow Meera to school.
D3: Dogs sleep in the sun after school.

Stopwords used: the, and, their, at,
to, in, after
```

- Step | D1 | D2 | D3

- Tokens (words and marks) | 15 | 8 | 8

- After stopwords and punctuation go | Meera feeds stray dogs dogs wag tails Meera | stray dogs follow Meera school | Dogs sleep sun school

- Lower case, then lemmatise | meera feed stray dog dog wag tail meera | stray dog follow meera school | dog sleep sun school

- Words left | 8 | 5 | 4

### The dictionary

Reading the cleaned lists left to right and keeping each new word once gives ten words:

meera, feed, stray, dog, wag, tail, follow, school, sleep, sun

Note that repeats inside D1 (dog twice, meera twice) still give one entry each. The dictionary counts kinds of word, not occurrences.

### Where students slip

- Counting D1 as 13 tokens: the comma and the full stop are tokens too, so it is 15.

- Keeping "Dogs" and "dog" as two entries because the case or the plural was not fixed.

- Changing the stopword list halfway. Declare it once and apply it to every document.

## The document vector table, and term frequency

A document vector table has one row per document and one column per dictionary word; each cell is the number of times that word occurs in that document. Those cells are the term frequencies, TF, that TFIDF needs.

```
     meera feed stray dog wag tail follow school sleep sun
D1     2    1     1    2   1    1     0      0     0    0
D2     1    0     1    1   0    0     1      1     0    0
D3     0    0     0    1   0    0     0      1     1    1
```

### Check 1: row totals
Each row should add up to the words left after cleaning: 8 for D1, 5 for D2, 4 for D3. If it does not, a word was missed or double counted.

### Check 2: no empty column
Every dictionary word came from some document, so every column has at least one non-zero cell.

### Presence or count?
Some textbook examples only mark 1 for present and 0 for absent. In a TFIDF question you need the true counts, so D1's dog is 2, not 1.

## TFIDF class 10: a term frequency inverse document frequency example

TFIDF scores a word high when it is frequent in one document but rare across the corpus. We use the CBSE handbook convention: IDF(W) = N / DF(W), written as a fraction, and TFIDF(W) = TF(W) x log10(IDF(W)), where N is the number of documents and DF(W) is how many documents contain W.

- Word | DF | IDF = 3 / DF | log10(IDF) | TFIDF D1 | TFIDF D2 | TFIDF D3

- meera | 2 | 3/2 | 0.176 | 0.352 | 0.176 | 0

- feed | 1 | 3/1 | 0.477 | 0.477 | 0 | 0

- stray | 2 | 3/2 | 0.176 | 0.176 | 0.176 | 0

- dog | 3 | 3/3 | 0 | 0 | 0 | 0

- wag | 1 | 3/1 | 0.477 | 0.477 | 0 | 0

- tail | 1 | 3/1 | 0.477 | 0.477 | 0 | 0

- follow | 1 | 3/1 | 0.477 | 0 | 0.477 | 0

- school | 2 | 3/2 | 0.176 | 0 | 0.176 | 0.176

- sleep | 1 | 3/1 | 0.477 | 0 | 0 | 0.477

- sun | 1 | 3/1 | 0.477 | 0 | 0 | 0.477

### One cell, written as the examiner wants it

TFIDF(meera) in D1 = TF x log10(N / DF) = 2 x log10(3 / 2) = 2 x 0.176 = 0.352.

TFIDF(dog) in D1 = 2 x log10(3 / 3) = 2 x log10(1) = 2 x 0 = 0.

Show TF, the fraction, the log and the product for at least one word; then the rest can go straight into the table. Log values are rounded to three decimal places throughout.

### Reading the result

- dog scores 0 everywhere, even with TF 2 in D1, because it is in all three documents. It behaves like a stopword for this corpus.

- feed, wag and tail are D1's most telling words at 0.477 each: they appear nowhere else.

- sleep and sun identify D3; follow identifies D2.

- meera in D1 beats stray (0.352 against 0.176) only because it occurs twice there.

```
import math

docs = [["meera", "feed", "stray", "dog", "dog", "wag", "tail", "meera"],
        ["stray", "dog", "follow", "meera", "school"],
        ["dog", "sleep", "sun", "school"]]

vocab = []
for d in docs:
    for w in d:
        if w not in vocab:
            vocab.append(w)

N = len(docs)
for w in vocab:
    df = sum(1 for d in docs if w in d)
    scores = [round(d.count(w) * math.log10(N / df), 3) for d in docs]
    print(w, df, scores)
```

```
meera 2 [0.352, 0.176, 0.0]
feed 1 [0.477, 0.0, 0.0]
stray 2 [0.176, 0.176, 0.0]
dog 3 [0.0, 0.0, 0.0]
wag 1 [0.477, 0.0, 0.0]
tail 1 [0.477, 0.0, 0.0]
follow 1 [0.0, 0.477, 0.0]
school 2 [0.0, 0.176, 0.176]
sleep 1 [0.0, 0.0, 0.477]
sun 1 [0.0, 0.0, 0.477]
```

## TFIDF class 10 numericals, and the formula traps

Short calculations in the shape objective and short-answer questions take. Use log to base 10, as the handbook does, and round to three places.

- A corpus has 8 documents. "monsoon" occurs 3 times in one document and appears in 2 documents in all. Find its TFIDF in that document.
Answer 3 x log10(8 / 2) = 3 x log10(4) = 3 x 0.602 = 1.806.

- In the same corpus, "is" appears in all 8 documents. What is its TFIDF in any document?
Answer 0, because log10(8 / 8) = log10(1) = 0, whatever its TF.

- "glacier" appears once, in one document out of 8. Its TFIDF there is
Answer 1 x log10(8 / 1) = 0.903, the largest value any single occurrence can reach in this corpus.

- "river" appears twice in a document and in 5 of the 8 documents. Find its TFIDF.
Answer 2 x log10(8 / 5) = 2 x log10(1.6) = 2 x 0.204 = 0.408.

- Which has the higher TFIDF: a word with TF 1 found in 1 of 8 documents, or a word with TF 3 found in 2 of 8?
Answer The second: 1.806 against 0.903. Rarity helps, but frequency in the document multiplies it.

- Name two applications of TFIDF.
Answer Any two of: document classification, topic modelling, information retrieval (search), and stopword filtering.

### Why sites give different numbers

- Convention | Word in 1 of 3 docs, TF 1 | Use in the exam?

- CBSE handbook: TF x log10(N / DF) | 0.477 | Yes

- Same idea written as IDF = log10(N / DF) | 0.477 | Same numbers, different labels

- Natural log: TF x ln(N / DF) | 1.099 | No

- Smoothed, as in scikit-learn: ln((1 + N) / (1 + DF)) + 1 | 1.693 | No

The handbook calls the fraction N / DF the IDF and applies the log in the TFIDF step. Many websites put the log inside IDF instead. With base 10 the final TFIDF is identical, so either layout earns the marks as long as you are consistent. A Python library run with default settings will not match the handbook, so never copy a library's output into a written answer.

More one-mark items on this topic sit beside every other unit on [Class 10 AI MCQ with answers](/cbse-class-10-ai-mcq-questions), and every formula of the course is on one page at [the CBSE Class 10 AI formula sheet](/cbse-class-10-ai-formula-sheet).

## How the live class makes a TFIDF question routine

A TFIDF question is long but not hard. Marks are lost to one missed token, one wrong document frequency or a calculator set to the wrong log. Practice under a teacher's eye removes those slips.

### Worked once, together
On Monday the teacher builds a corpus with the class, and students call out each cell of the vector table before it is filled in, so the method is shared and every row is checked aloud.

### Then alone, timed
On Wednesday each student gets a fresh three- or four-document corpus and a four-mark time limit. Answers are marked on screen against a scheme: dictionary, vectors, IDF, TFIDF, each worth its share.

### Calculator and code
Students learn which key gives log to base 10 on their own calculator, and those who want it write the short Python checker above for their practical file.

TFIDF questions also turn up inside full papers on [the sample paper and mock tests page](/cbse-class-10-ai-sample-paper-and-mock-tests), and the model answers for other long questions are on [CBSE Class 10 AI important questions](/cbse-class-10-ai-important-questions).

## The courses behind this page

- [CBSE AI for Class 9 to 12](/courses/cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843): Unit 6 taught in full, with Bag of Words and TFIDF worked on new corpora until students can do a four-mark question without notes.
- [Python for Teens](/courses/python-complete-masterclass-teens): Lists, loops and the math module: enough Python to write the ten-line TFIDF checker on this page yourself.
- [Data Science for Teens](/courses/data-science-course-for-teens-python-data): Counting, frequency tables and reading numbers in context, the skills a TFIDF table quietly depends on.

Families also look at [Visual Machine Learning with Orange for Teens](/courses/orange-data-mining-visual-machine-learning-course-for-teens), [AI and ML for Teens](/courses/ai-ml-masterclass-teens), [CBSE Class 10 Maths board exam prep](/courses/cbse-class-10-maths-board-exam-prep-course), [CBSE and ICSE Computer Science Class 11 and 12](/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course), [CBSE Informatics Practices Class 11 and 12](/courses/cbse-informatics-practices-ip-class-11-12-python-pandas-sql-complete-course), [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course), [Hackathon Prep for Teens](/courses/hackathon-prep-for-teens-coding-ai-build-innovate-win-course), [Git and GitHub for Teens](/courses/git-github-version-control-course-for-teens).

## Batch or personalised, and the fees

Option 1, fixed batch: Monday and Wednesday at 9:00 PM IST, live online, fifteen to twenty students. Option 2, personalised one to one: days and time chosen by the family, the right choice for time zones where the batch falls in school hours or late at night. Monthly billing, no admission fee, stop at any month end. Fees are shown on the page in the visitor's own currency. The first class is a free demo; a paid priority demo (about 45 to 60 minutes, written skill report afterwards) is also available.

## Batch times outside India

- Where you live | Mon and Wed 9:00 PM IST | Best format

- India (IST)every Indian city | 9:00 PM | Batch fits

- UAE and OmanDubai, Abu Dhabi, Sharjah, Muscat | 7:30 PM | Batch fits

- Saudi Arabia, Qatar, Kuwait, BahrainRiyadh, Jeddah, Dammam, Doha, Kuwait City, Manama | 6:30 PM | Batch fits

- NepalKathmandu | 9:15 PM | Batch fits

- Ethiopia and East AfricaAddis Ababa and East Africa Time | 6:30 PM | Batch fits

- Singapore and MalaysiaSingapore, Kuala Lumpur | 11:30 PM | Choose 1-on-1

## Frequently asked questions

**What is bag of words in class 10 AI?** It is the NLP model that turns each document into a row of word counts. You normalise the corpus, list every unique word as the dictionary, then count how often each dictionary word appears in each document. Order and grammar are ignored; only counts matter. It is part of Unit 6 of CBSE 417.

**What is the TFIDF formula in class 10 AI?** The CBSE handbook uses TFIDF(W) = TF(W) x log(IDF(W)), with IDF(W) = total number of documents divided by the number of documents containing W, and log to base 10. TF is the count of the word in that document, read from the document vector table.

**What is a document vector table?** A table with one row per document and one column per dictionary word. Each cell holds how many times that word appears in that document. A single row is that document's vector, and the cells are the term frequencies used in TFIDF.

**Why is TFIDF zero for some words?** If a word appears in every document, IDF = N / N = 1 and log10(1) = 0, so its TFIDF is 0 however often it occurs. Such a word cannot tell documents apart, which is why very common words behave like stopwords.

**Which log is used for TFIDF in CBSE class 10?** Log to base 10. The handbook says so directly. On a calculator use the log key, not ln. Using the natural log gives larger numbers, for example 1.099 instead of 0.477 for a word in one of three documents. Check your calculator once before the exam: log10 of 100 should show 2.

**Can you give a term frequency inverse document frequency example?** In a corpus of 8 documents, a word appearing 3 times in one document and in 2 documents overall has TFIDF = 3 x log10(8 / 2) = 3 x 0.602 = 1.806. A word in all 8 documents scores 0. The full three-document example on this page shows every table.

**What are the text normalisation steps before Bag of Words?** Split the corpus into sentences, break them into tokens, remove stopwords and punctuation, put everything in lower case, then stem or lemmatise. State your stopword list first, because it decides what reaches the dictionary. Then show the cleaned text of every document, since the examiner checks your vector table against it, and a slip at this stage carries through every later table.

**Do I write TF as a count or as a fraction of the document length?** For CBSE 417, as a count: the handbook reads TF straight from the document vector table. Some websites divide by the document length; that is a different convention and will not match the scheme. In our worked corpus, dog has TF 2 in the first document, not 2 out of 8, and that count is what you multiply by the log.

**Is a TFIDF calculation asked in the board exam?** TFIDF is listed under text processing in the theory part of Unit 6 for 2026-27, and a small-corpus calculation suits a four-mark question. The 2026-27 sample paper for 417 is not out yet, so we cannot say exactly how it will be asked this year.

**Is this practised in your classes?** Yes. Corpora are worked together on Monday and solved alone under time on Wednesday, with each step marked on screen, and TFIDF appears in the full mocks. It is covered by the monthly fee shown on this page, for the batch or one to one. The first class is a free demo.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

## More pages in this series

**Classes, tuition and batches:** [The Mon and Wed 9 PM AI batch](/cbse-class-10-ai-classes-online), [CBSE AI classes in the Gulf and abroad](/cbse-class-10-ai-online-classes-gulf-and-abroad), [Live doubt classes](/cbse-class-10-ai-doubt-classes), [Class 10 AI tuition online](/cbse-class-10-ai-tuition), [Class 10 AI crash course](/cbse-class-10-ai-crash-course), [1-on-1 private AI tutor](/cbse-class-10-ai-private-tutor), [AI tuition in Delhi](/class-10-ai-tuition-delhi), [AI tuition in Gurgaon](/class-10-ai-tuition-gurgaon), [AI tuition in Noida](/class-10-ai-tuition-noida), [AI tuition in Bangalore](/class-10-ai-tuition-bangalore), [AI tuition in Pune](/class-10-ai-tuition-pune).

**Unit by unit:** [CBSE AI 417 syllabus explained](/cbse-class-10-ai-syllabus-explained), [Python for Class 10 AI](/python-for-cbse-class-10-ai), [Part A employability skills](/cbse-class-10-ai-employability-skills-part-a), [Unit 3: Evaluating Models](/cbse-class-10-ai-evaluating-models-questions), [Confusion matrix numericals](/confusion-matrix-class-10-ai-numericals), [Unit 2: Advanced modeling](/cbse-class-10-ai-advanced-modeling-questions), [Unit 6: Natural Language Processing](/cbse-class-10-ai-nlp-questions), [Unit 5: Computer Vision](/cbse-class-10-ai-computer-vision-questions), [Orange Data Mining for Class 10 AI](/orange-data-mining-class-10-ai), [Unit 1: Project cycle and ethics](/cbse-class-10-ai-project-cycle-and-ethics).

**Questions and practice:** [CBSE AI important questions](/cbse-class-10-ai-important-questions), [Sample paper and mock tests](/cbse-class-10-ai-sample-paper-and-mock-tests), [Class 10 AI MCQ, unit wise](/cbse-class-10-ai-mcq-questions), [Previous year papers, solved](/cbse-class-10-ai-previous-year-question-papers), [AI practical and project viva](/cbse-class-10-ai-viva-questions), [Case based questions](/cbse-class-10-ai-case-based-questions), [Employability skills MCQ](/employability-skills-class-10-mcq), [Difference between questions](/cbse-class-10-ai-difference-between-questions), [Assertion and reason questions](/cbse-class-10-ai-assertion-reason-questions).

**Notes and revision:** [Class 10 AI notes, unit wise](/cbse-class-10-ai-notes), [Class 10 AI one shot revision](/cbse-class-10-ai-one-shot-revision), [30, 7 and 1 day revision plan](/cbse-class-10-ai-revision-plan), [Worksheets with answers](/cbse-class-10-ai-worksheets), [AI handbook exercise answers](/cbse-class-10-ai-textbook-solutions), [Best book for Class 10 AI](/best-book-for-cbse-class-10-ai), [Formula sheet](/cbse-class-10-ai-formula-sheet), [Class 10 AI notes in Hindi](/cbse-class-10-ai-notes-in-hindi).

**Exam, marks and practicals:** [CBSE AI board exam preparation](/cbse-class-10-ai-board-exam-preparation), [AI project and practical file](/cbse-class-10-ai-project-and-practical-file), [Exam date 2027 and paper pattern](/cbse-class-10-ai-exam-date-and-paper-pattern), [AI practical exam questions](/cbse-class-10-ai-practical-exam-questions), [Paper analysis and answer key](/cbse-class-10-ai-paper-analysis), [Marking scheme, explained](/cbse-class-10-ai-marking-scheme), [AI project ideas](/cbse-class-10-ai-project-ideas), [Passing marks](/cbse-class-10-ai-passing-marks), [The second board exam in May](/cbse-class-10-ai-second-board-exam).

**Choosing the subject:** [AI 417 or IT 402?](/ai-417-vs-it-402-class-10), [AI, IT or Computer Applications?](/ai-vs-computer-applications-class-10).

---

*Canonical: https://learn.modernagecoders.com/bag-of-words-tfidf-class-10-ai*
