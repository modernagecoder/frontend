---
title: "NLP Class 10 Questions and Answers, CBSE AI 417 2026-27"
description: "NLP class 10 questions and answers for CBSE AI 417, 2026-27: stages of NLP, script bot vs smart bot, worked text normalisation, answers for every mark."
canonical: https://learn.modernagecoders.com/cbse-class-10-ai-nlp-questions
source: src/pages/cbse-class-10-ai-nlp-questions.html
updated: 2026-11-06
---

> NLP class 10 questions and answers for CBSE 417 come from Unit 6, Natural Language Processing, worth 8 of the 50 theory marks in 2026-27. The examined topics are: features of natural language, applications of NLP, the five stages (lexical, syntactic, semantic, discourse integration, pragmatic), script bots versus smart bots, and text processing: text normalisation, Bag of Words and TFIDF. In the 2025-26 sample paper the unit had five one-mark items, one two-mark and one four-mark question. Modern Age Coders teaches the unit live in a Monday and Wednesday 9:00 PM IST batch, or personalised one to one.

## How many marks is NLP in Class 10 AI, and what is examined?

Natural Language Processing carries 8 of the 50 theory marks in CBSE 417 for 2026-27, the third-largest unit after Modeling (11) and Evaluating Models (10). The curriculum splits it into a theory part and a smaller practical part.

- Topic in Unit 6 | Assessed in | What the answer usually asks

- Features of natural language, why NLP is needed | Theory | Two features, or why a computer struggles with human language

- Applications of NLP | Theory | Name and explain two or four, with a real example

- Stages of NLP | Theory | Name a stage from a description, or explain all five

- Chatbots: script bot and smart bot | Theory | Differences, or classify a given bot

- Text processing: normalisation, Bag of Words, TFIDF | Theory | Normalise given text, build a vector, compute TFIDF

- Code and no-code NLP tools, sentiment analysis in Orange | Practical | Run the case study, explain each step in the viva

### The question shapes, from the last sample paper

- Five one-mark objective items in the 2025-26 paper, with choice across the AI units.

- One two-mark question, typically a difference or a short definition.

- One four-mark question, often text normalisation or a TFIDF calculation on a small corpus.

- The 2026-27 sample paper for 417 has not been published yet, so treat these counts as a guide, not a promise.

### Where hours go in the syllabus

CBSE gives the unit 20 theory hours and 7 practical hours. The theory hours are spent mostly on the stages and on text processing, which is also where the longer answers come from. The practical hours go to sentiment analysis, which reaches the practical exam and the viva rather than the written paper.

The full blueprint for every unit is on [the 417 exam date and paper pattern page](/cbse-class-10-ai-exam-date-and-paper-pattern).

## What are the stages of NLP in Class 10?

The five stages of NLP are lexical analysis, syntactic analysis, semantic analysis, discourse integration and pragmatic analysis, in that order. Each one checks the text at a deeper level than the one before: words, then grammar, then meaning, then the link between sentences, then the intended purpose.

- Stage | One-line definition | Example that passes or fails it

- 1. Lexical analysis | Breaks a long text into paragraphs, sentences and words, and identifies each word | "Rohan bought mangoes. They were sweet." becomes two sentences and their words

- 2. Syntactic analysis (parsing) | Checks that the words follow the grammar of the language | "Mangoes bought Rohan sweet were" fails: the order breaks the rules

- 3. Semantic analysis | Checks that the grammatically correct sentence actually makes sense | "The mango sang loudly" passes grammar but fails meaning

- 4. Discourse integration | Links a sentence with those before and after it | Working out that "They" in the second sentence means the mangoes

- 5. Pragmatic analysis | Finds the intended meaning in the real situation | "Can you pass the salt?" is a request, not a question about ability

```
NLP understands text in five stages.
1. Lexical analysis: the text is split
   into sentences and words.
2. Syntactic analysis: the sentence is
   checked against grammar rules.
3. Semantic analysis: the meaning is
   checked; "the mango sang" fails.
4. Discourse integration: each sentence
   is read with the ones around it, so
   "they" is linked to "mangoes".
5. Pragmatic analysis: the real intent
   is found; "can you pass the salt?"
   is understood as a request.
```

### How students lose marks here

- Mixing up syntactic and semantic. Syntax is grammar; semantics is meaning. A sentence can pass the first and fail the second, never the reverse in a useful exam example.

- Calling discourse "the meaning". Discourse is about how sentences connect, especially pronouns like it, he and they.

- Skipping the example. A definition alone usually earns half the marks for a stage.

- Writing "parsing" for lexical. Parsing is the other name for syntactic analysis.

A one-mark form of the same idea: "Which stage would reject a grammatically correct sentence that makes no sense?" Answer: semantic analysis.

## Applications of NLP, and script bot vs smart bot

A chatbot is a program that holds a conversation with a person in text or speech. A script bot follows a fixed, pre-written flow; a smart bot uses NLP and machine learning to understand open questions and improves as it sees more data.

- Point of difference | Script bot | Smart bot

- How it works | Follows a script: buttons, menus or set keywords | Understands free text using NLP

- Language processing | Little or none | Large: intent, context and meaning

- Learning | Does not learn; changes only when someone edits the script | Learns from more data and conversations

- Data it uses | A small set of fixed replies | Large databases and other resources

- Building it | Easy, often with no coding | Needs coding and training

- Example | A school fee bot that offers "1 for dates, 2 for receipts" | A voice assistant that answers "Will I need an umbrella in Pune tomorrow?"

A two-mark question asks for two differences; four rows of this table cover a four-mark one. Write each difference as a pair, script bot first, so the examiner can tick both halves.

### Applications of NLP the syllabus names

### Voice assistants
Turn speech into text, find the intent and reply, such as setting an alarm when told "wake me at six".

### Auto-generated captions
Speech in a video is converted to text on screen as it plays, which helps viewers with hearing loss.

### Language translation
Text in one language is rewritten in another while keeping its meaning, not word by word.

### Sentiment analysis
Decides whether a review or post is positive, negative or neutral. This is also the practical case study in Orange.

### Text classification
Puts text into categories, such as sorting emails into spam and not spam, or news into sport and politics.

### Keyword extraction
Pulls the most important words out of a long text, so a report can be tagged or summarised quickly.

Why is any of this hard for a computer? Human language is ambiguous ("I saw her duck"), the same idea can be said many ways, and it keeps changing. Those three features of natural language are a common two-mark question in their own right. Short contrasts of this kind are collected on [CBSE Class 10 AI difference between questions](/cbse-class-10-ai-difference-between-questions).

## Text normalisation class 10: the steps, worked on real text

Text normalisation is the cleaning of a whole corpus so a machine can work with it: the text is cut into sentences and tokens, low-value words and symbols are dropped, case is made uniform and each word is reduced to a base form. Here it is done on a two-document corpus, step by step.

```
Document 1:
Grandma tells the best stories at night.

Document 2:
We were listening to her stories, and
we laughed!
```

-
**Sentence segmentation** Each document here is one sentence, so the corpus gives two sentences.

-
**Tokenisation** Every word and every punctuation mark becomes a token. Document 1 gives 8 tokens (7 words and the full stop); Document 2 gives 11 (9 words, a comma and an exclamation mark). 19 tokens in all.

-
**Removing stopwords and special characters** Dropping the, at, we, were, to, her, and, and all punctuation leaves "Grandma tells best stories night" and "listening stories laughed".

-
**Converting to a common case** Everything becomes lower case, so "Grandma" and "grandma" can never be counted as two different words.

-
**Stemming or lemmatisation** Each word is cut to its base: tells to tell, listening to listen, laughed to laugh, stories to story (lemma). The result: grandma, tell, best, story, night, listen, laugh, 7 unique words.

- Word | After stemming | After lemmatisation | What it shows

- stories | stori | story | A stem need not be a real word; a lemma always is

- listening | listen | listen | Both methods agree when the suffix is regular

- better | better | good | Only lemmatisation knows the dictionary root

- happily | happili | happy | Rules chop endings without checking the result is English

### Stemming against lemmatisation, in one answer

Stemming removes affixes by rule, so it is fast but may leave a word that does not exist. Lemmatisation finds the proper dictionary form, so it is slower but always gives a meaningful word. The usual exam choice: lemmatisation when meaning matters, stemming when speed matters.

### What comes next: Bag of Words and TFIDF

The 7 normalised words become the dictionary for Bag of Words, and each document becomes a row of counts. TFIDF then scores every word by how special it is to one document. The complete worked tables, three documents from raw text to final TFIDF values, are on [Bag of Words and TFIDF for Class 10 AI](/bag-of-words-tfidf-class-10-ai).

## NLP class 10 questions and answers, by marks

Original questions in the shapes the paper uses. Try each before opening the answer. The one-mark answers are short on purpose; the two- and four-mark ones show the length the scheme rewards.

### One mark each

- Which stage of NLP works out that "she" in the second sentence refers to Asha in the first?
Answer Discourse integration, which links each sentence with its neighbours.

- How many tokens are there in "Is it raining? Take an umbrella, Riya."?
Answer 10: seven words plus the question mark, the comma and the full stop.

- Words such as "is", "an" and "the" that are removed because they add little meaning are called
Answer Stopwords.

- A bank's chatbot only lets you tap one of four buttons. Is it a script bot or a smart bot?
Answer A script bot: it follows a fixed flow and understands no free text.

- Name the NLP application that turns spoken words in a video into text on screen.
Answer Auto-generated captions.

- "Doctors said the new medicine works. It works fast!" How many tokens?
Answer 11: nine words, the full stop and the exclamation mark. "works" counts twice because tokens are not unique words.

- Which gives a meaningful base word: stemming or lemmatisation?
Answer Lemmatisation.

- What is the whole body of text taken from all the documents together called?
Answer The corpus.

### Two marks each

- Give two differences between a script bot and a smart bot.
Answer A script bot follows a pre-written script and has little language processing, while a smart bot understands free text using NLP. A script bot does not learn, while a smart bot improves with more data.

- Differentiate between syntactic and semantic analysis with an example.
Answer Syntactic analysis checks grammar; semantic analysis checks meaning. "The mango sang loudly" is grammatically correct, so it passes the syntactic stage, but it makes no sense, so it fails the semantic stage.

- Why is text converted to a common case during normalisation?
Answer A machine treats "School" and "school" as different words because their characters differ. Lowercasing everything makes them one word, so counts and vectors are correct.

- State any two features of natural language that make NLP difficult.
Answer It is ambiguous: one sentence can have more than one meaning. It is redundant and changing: the same idea can be said in many ways, and words and usage change over time.

### Four marks each

- Explain any four applications of NLP with one example each.
Answer Voice assistants turn speech into an action, such as setting an alarm. Translation rewrites text in another language, such as a Hindi sign read in English. Sentiment analysis labels a review positive or negative, such as rating feedback on a product. Text classification sorts text into groups, such as moving spam out of the inbox.

- Normalise "Riya plays football. Her brothers play cricket!" Treat "her" as the only stopword. Show each step and give the final dictionary.
Answer Segmentation: two sentences. Tokenisation: 9 tokens, seven words plus the full stop and the exclamation mark. Remove "Her" and both punctuation marks. Lower case: riya plays football / brothers play cricket. Lemmatise: plays to play, brothers to brother. Dictionary of unique words: riya, play, football, brother, cricket, so 5 words.

More objective items for this unit sit with every other unit on [Class 10 AI MCQ with answers](/cbse-class-10-ai-mcq-questions), and the spoken versions of these questions are on [CBSE Class 10 AI viva questions](/cbse-class-10-ai-viva-questions).

## Natural language processing class 10 notes become marks in the live batch

Notes tell a student what NLP is. Marks come from writing the stages in order, sizing an answer to its marks and counting tokens without slips. That is the work the class does each week.

### Taught on real sentences
Each stage is shown on a sentence the class suggests, then broken on purpose: a jumbled one for syntax, a silly one for semantics, a pronoun puzzle for discourse. Students remember the stage by the sentence that failed it.

### Answers marked against the scheme
Two- and four-mark answers are written in the last part of the Monday class, then shared and marked on screen point by point. A missing example or a stage out of order is caught before it becomes a habit.

### The practical in Orange
On Wednesday the sentiment analysis walkthrough is built live in Orange: load reviews, preprocess, score and read the result. Students rehearse explaining each widget, because that is what the viva asks.

The no-code tool itself has its own page, [Orange Data Mining for Class 10 AI](/orange-data-mining-class-10-ai). The neighbouring theory unit, worth 4 marks, is answered the same way on [computer vision class 10 questions and answers](/cbse-class-10-ai-computer-vision-questions).

## The courses behind this page

- [CBSE AI for Class 9 to 12](/courses/cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843): Unit 6 taught in order, from features of language to TFIDF, with written answers in every mark band marked live.
- [Visual ML with Orange](/courses/orange-data-mining-visual-machine-learning-course-for-teens): The no-code sentiment analysis walkthrough the curriculum names for the NLP practical, built widget by widget.
- [Python for Teens](/courses/python-complete-masterclass-teens): Splitting, lowercasing and counting words in a few lines of Python, so tokens and stopwords stop being abstract.

Families also look at [AI and ML for Teens](/courses/ai-ml-masterclass-teens), [Data Science for Teens](/courses/data-science-course-for-teens-python-data), [CBSE Class 10 Maths board exam prep](/courses/cbse-class-10-maths-board-exam-prep-course), [CBSE and ICSE Computer Science Class 11 and 12](/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course), [CBSE Informatics Practices Class 11 and 12](/courses/cbse-informatics-practices-ip-class-11-12-python-pandas-sql-complete-course), [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course), [Hackathon Prep for Teens](/courses/hackathon-prep-for-teens-coding-ai-build-innovate-win-course), [Git and GitHub for Teens](/courses/git-github-version-control-course-for-teens).

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

**What are the important NLP class 10 questions and answers for 2026-27?** The questions that recur are: the five stages of NLP with examples, differences between a script bot and a smart bot, four applications of NLP, the steps of text normalisation on given text, stemming against lemmatisation, and a Bag of Words or TFIDF calculation on a small corpus. This page answers each of them in the length the marks deserve.

**How many marks is NLP in CBSE Class 10 AI?** Unit 6, Natural Language Processing, carries 8 of the 50 theory marks in CBSE 417 for 2026-27. In the 2025-26 sample paper it appeared as five one-mark objective items, one two-mark question and one four-mark question, with choice across units. The sentiment analysis case study is assessed in the practical instead.

**What are the stages of NLP class 10?** There are five: lexical analysis splits text into sentences and words; syntactic analysis checks grammar; semantic analysis checks meaning; discourse integration links each sentence with those around it; pragmatic analysis finds the real intent. Learn them in this order with one example each.

**What is the difference between a script bot and a smart bot?** A script bot follows a fixed, pre-written flow, has little or no language processing, does not learn and is easy to build. A smart bot uses NLP to understand free text, learns from more data, works with large databases and needs coding. A menu-based fee bot is a script bot; a voice assistant is a smart bot.

**What are the steps of text normalisation in class 10?** Sentence segmentation, tokenisation, removing stopwords and special characters, converting to a common case, and stemming or lemmatisation. The output is a clean list of base words for the whole corpus, which then becomes the dictionary for Bag of Words. In a four-mark answer, show the text after every step, not just the final list, because each step usually carries its own share of the marks.

**What are the applications of NLP for class 10?** The curriculum names voice assistants, auto-generated captions, language translation, sentiment analysis, text classification and keyword extraction. For a four-mark answer, explain four of them with one real example each, such as spam filtering for text classification. Sentiment analysis is worth knowing best, because it is also the case study you build in Orange for the practical.

**Are punctuation marks counted as tokens?** Yes. In tokenisation every word, number and special character, including commas, full stops and exclamation marks, becomes a separate token. Punctuation is only removed in the next step, along with stopwords. Most token-count mistakes come from forgetting this. So "Stop, Riya!" is four tokens: two words, a comma and an exclamation mark.

**Where can I find natural language processing class 10 notes?** This page works as exam-focused notes for the whole unit: the marks, the stages table, chatbots, applications and a worked normalisation. For notes on every unit of 417 in one place, see our Class 10 AI notes page, and the CBSE handbook remains the base text.

**Is TFIDF in the Class 10 AI theory paper?** Yes. TFIDF is listed under text processing in the theory part of Unit 6 for 2026-27, alongside Bag of Words and text normalisation. A small corpus calculation is a natural four-mark question, which is why we give it a page of its own with full tables.

**Is sentiment analysis asked in the written paper?** As an application of NLP, yes: you may be asked what it is or for an example. The hands-on sentiment analysis case study in Orange is listed under the practical part of Unit 6, so it is assessed through the practical exam and viva rather than written out in full.

**Do you teach NLP separately or as part of the whole course?** Both are possible. In the batch, NLP is taught in its place in the 417 syllabus, with written answers and the Orange case study. One to one can focus only on Unit 6 if that is the gap. Both are covered by the monthly fee shown on this page, and the first class is a free demo.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

## More pages in this series

**Classes, tuition and batches:** [The Mon and Wed 9 PM AI batch](/cbse-class-10-ai-classes-online), [CBSE AI classes in the Gulf and abroad](/cbse-class-10-ai-online-classes-gulf-and-abroad), [Live doubt classes](/cbse-class-10-ai-doubt-classes), [Class 10 AI tuition online](/cbse-class-10-ai-tuition), [Class 10 AI crash course](/cbse-class-10-ai-crash-course), [1-on-1 private AI tutor](/cbse-class-10-ai-private-tutor), [AI tuition in Delhi](/class-10-ai-tuition-delhi), [AI tuition in Gurgaon](/class-10-ai-tuition-gurgaon), [AI tuition in Noida](/class-10-ai-tuition-noida).

**Unit by unit:** [CBSE AI 417 syllabus explained](/cbse-class-10-ai-syllabus-explained), [Python for Class 10 AI](/python-for-cbse-class-10-ai), [Part A employability skills](/cbse-class-10-ai-employability-skills-part-a), [Unit 3: Evaluating Models](/cbse-class-10-ai-evaluating-models-questions), [Confusion matrix numericals](/confusion-matrix-class-10-ai-numericals), [Unit 2: Advanced modeling](/cbse-class-10-ai-advanced-modeling-questions), [Bag of Words and TFIDF, worked](/bag-of-words-tfidf-class-10-ai), [Unit 5: Computer Vision](/cbse-class-10-ai-computer-vision-questions), [Orange Data Mining for Class 10 AI](/orange-data-mining-class-10-ai), [Unit 1: Project cycle and ethics](/cbse-class-10-ai-project-cycle-and-ethics).

**Questions and practice:** [CBSE AI important questions](/cbse-class-10-ai-important-questions), [Sample paper and mock tests](/cbse-class-10-ai-sample-paper-and-mock-tests), [Class 10 AI MCQ, unit wise](/cbse-class-10-ai-mcq-questions), [Previous year papers, solved](/cbse-class-10-ai-previous-year-question-papers), [AI practical and project viva](/cbse-class-10-ai-viva-questions), [Case based questions](/cbse-class-10-ai-case-based-questions), [Employability skills MCQ](/employability-skills-class-10-mcq), [Difference between questions](/cbse-class-10-ai-difference-between-questions), [Assertion and reason questions](/cbse-class-10-ai-assertion-reason-questions).

**Notes and revision:** [Class 10 AI notes, unit wise](/cbse-class-10-ai-notes), [Class 10 AI one shot revision](/cbse-class-10-ai-one-shot-revision), [30, 7 and 1 day revision plan](/cbse-class-10-ai-revision-plan), [Worksheets with answers](/cbse-class-10-ai-worksheets), [AI handbook exercise answers](/cbse-class-10-ai-textbook-solutions), [Best book for Class 10 AI](/best-book-for-cbse-class-10-ai), [Formula sheet](/cbse-class-10-ai-formula-sheet).

**Exam, marks and practicals:** [CBSE AI board exam preparation](/cbse-class-10-ai-board-exam-preparation), [AI project and practical file](/cbse-class-10-ai-project-and-practical-file), [Exam date 2027 and paper pattern](/cbse-class-10-ai-exam-date-and-paper-pattern), [AI practical exam questions](/cbse-class-10-ai-practical-exam-questions), [AI project ideas](/cbse-class-10-ai-project-ideas), [Passing marks](/cbse-class-10-ai-passing-marks), [The second board exam in May](/cbse-class-10-ai-second-board-exam).

**Choosing the subject:** [AI 417 or IT 402?](/ai-417-vs-it-402-class-10), [AI, IT or Computer Applications?](/ai-vs-computer-applications-class-10).

---

*Canonical: https://learn.modernagecoders.com/cbse-class-10-ai-nlp-questions*
