// CBSE Class 10 AI (417), Unit 6 Natural Language Processing, 2026-27: the whole
// 8-mark unit in exam answer format.
// Intent: "NLP class 10 questions and answers", "natural language processing class 10
// notes", "script bot vs smart bot", "stages of NLP class 10", "applications of NLP",
// "text normalisation class 10".
// Distinct from bag-of-words-tfidf-class-10-ai (cb08), which carries the full corpus to
// TF, IDF and TFIDF tables. This page covers the unit end to end (features of natural
// language, applications, the five stages, chatbots, text normalisation) as one-, two-
// and four-mark answers, and only previews Bag of Words before linking down to cb08.
// Unit facts are from the official 417 curriculum for 2026-27 (theory topics: intro,
// applications, stages, chatbots, text processing with Bag of Words and TFIDF; practical
// topics: code and no-code tools, sentiment analysis in Orange). 8 theory marks, 20
// theory hours and 7 practical hours. Question counts are quoted from the 2025-26
// sample paper blueprint (5 one-mark, 1 two-mark, 1 four-mark); the 2026-27 417 SQP is
// not out. Assertion-reason is not claimed for 417.
// Every count on this page was recomputed with python3 on 2026-11-06 (scratch cb07.py,
// regex tokeniser that splits words and each punctuation mark): Doc 1 gives 8 tokens,
// Doc 2 gives 11, total 19; after stopword and punctuation removal 5 and 3 words; after
// lemmatisation 7 unique words; "Is it raining? Take an umbrella, Riya." = 10 tokens;
// "Doctors said the new medicine works. It works fast!" = 11 tokens;
// "Riya plays football. Her brothers play cricket!" = 9 tokens (7 words), 5-word dictionary.
'use strict';

module.exports = {
  slug: 'cbse-class-10-ai-nlp-questions',
  code: 'cb07',
  board: 'cbse',
  themeColor: '#1E4A8C',
  dateModified: '2026-11-06',
  title: 'NLP Class 10 Questions and Answers, CBSE AI 417 2026-27',
  description: 'NLP class 10 questions and answers for CBSE AI 417, 2026-27: stages of NLP, script bot vs smart bot, worked text normalisation, answers for every mark.',
  ogTitle: 'NLP Class 10 Questions and Answers for the 2026-27 Paper',
  ogDesc: 'The whole 8-mark Natural Language Processing unit of CBSE 417 in exam format: the five stages with examples, chatbots, applications, a worked text normalisation and model answers for every mark band.',
  twDesc: 'Unit 6 of CBSE AI 417 as exam answers: stages of NLP, script bot vs smart bot, text normalisation worked step by step.',
  headline: 'NLP Class 10 Questions and Answers: the Whole Unit 6 in Exam Format for 2026-27',
  courseName: 'CBSE Class 10 AI (417) Natural Language Processing, Live Online',
  courseDesc: 'Live online teaching of Unit 6, Natural Language Processing, for CBSE Class 10 Artificial Intelligence (417), session 2026-27: the five stages of NLP, chatbots, text normalisation, Bag of Words and TFIDF taught for understanding, then written as one-, two- and four-mark answers and marked against the scheme on screen, with the Orange sentiment analysis case study done hands-on for the practical, every Monday and Wednesday at 9:00 PM IST or one to one at a time the family chooses.',
  brandTag: '417 &middot; Unit 6 NLP',
  navLinks: [['#marks', 'Marks'], ['#stages', 'Stages'], ['#chatbots', 'Chatbots'], ['#normalise', 'Normalisation'], ['#answers', 'Q and A']],
  crumbs: [['/', 'Home'], ['/cbse-class-10-ai-classes-online', 'Class 10 AI classes'], [null, 'NLP questions']],
  eyebrow: 'CBSE Class 10 &middot; Artificial Intelligence, code 417 &middot; Unit 6, 2026-27',
  h1: 'NLP class 10 questions and answers: Unit 6 written the way the examiner marks it.',
  lede: 'These NLP class 10 questions and answers cover all of Unit 6 of CBSE 417 for 2026-27: why computers find human language hard, where NLP is used, the five stages, script bots and smart bots, and text normalisation done on a real piece of text. Each topic ends in an answer you could write in the paper, sized to its marks. In our Monday class the unit is taught this way, and the written answers are marked on screen against the scheme.',
  heroNote: 'Live online &middot; whole Unit 6 answered &middot; stages, chatbots, normalisation &middot; answers marked on screen &middot; Orange case study for the practical &middot; first class free',
  waText: 'Hello Modern Age Coders. I want help with NLP, Unit 6 of CBSE Class 10 AI 417.',
  timetable: {
    label: 'When Unit 6 is taught',
    title: 'NLP in the batch',
    right: 'CBSE 417',
    rows: [
      ['Monday, NLP theory and answers', '9:00', 'PM IST'],
      ['Wednesday, Orange sentiment case', '9:00', 'PM IST'],
      ['Theory marks for Unit 6', '8', 'of 50'],
      ['Stages of NLP to know', '5', 'stages']
    ],
    zones: '<b>Dubai, Abu Dhabi, Muscat:</b> 7:30 PM. <b>Riyadh, Doha, Kuwait City, Manama:</b> 6:30 PM. <b>Nairobi:</b> 6:30 PM. <b>Kathmandu:</b> 9:15 PM. <b>Singapore:</b> late, so one to one is better there.',
    stamps: ['Unit 6: 8 theory marks', 'Sentiment case in practical']
  },
  picksH2: 'Courses that teach Unit 6',
  picksLede: 'The 417 course whose Class 10 batch covers this unit, the Orange course for the sentiment analysis case study the practical uses, and Python for students who want to see text processing done in code.',
  picks: [
    { slug: 'cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843', code: 'The batch / 417 Class 10', h3: 'CBSE AI for Class 9 to 12', p: 'Unit 6 taught in order, from features of language to TFIDF, with written answers in every mark band marked live.' },
    { slug: 'orange-data-mining-visual-machine-learning-course-for-teens', code: 'Practical / Orange', h3: 'Visual ML with Orange', p: 'The no-code sentiment analysis walkthrough the curriculum names for the NLP practical, built widget by widget.' },
    { slug: 'python-complete-masterclass-teens', code: 'Code / Python', h3: 'Python for Teens', p: 'Splitting, lowercasing and counting words in a few lines of Python, so tokens and stopwords stop being abstract.' }
  ],
  capsule: 'NLP class 10 questions and answers for CBSE 417 come from Unit 6, Natural Language Processing, worth 8 of the 50 theory marks in 2026-27. The examined topics are: features of natural language, applications of NLP, the five stages (lexical, syntactic, semantic, discourse integration, pragmatic), script bots versus smart bots, and text processing: text normalisation, Bag of Words and TFIDF. In the 2025-26 sample paper the unit had five one-mark items, one two-mark and one four-mark question. Modern Age Coders teaches the unit live in a Monday and Wednesday 9:00 PM IST batch, or personalised one to one.',
  sections: [
`<section class="bx-section bx-section--tint" id="marks">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. How much is NLP worth?</p>
      <h2>How many marks is NLP in Class 10 AI, and what is examined?</h2>
      <p class="bx-lede">Natural Language Processing carries 8 of the 50 theory marks in CBSE 417 for 2026-27, the third-largest unit after Modeling (11) and Evaluating Models (10). The curriculum splits it into a theory part and a smaller practical part.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Topic in Unit 6</th><th scope="col">Assessed in</th><th scope="col">What the answer usually asks</th></tr></thead>
        <tbody>
          <tr><td>Features of natural language, why NLP is needed</td><td>Theory</td><td>Two features, or why a computer struggles with human language</td></tr>
          <tr><td>Applications of NLP</td><td>Theory</td><td>Name and explain two or four, with a real example</td></tr>
          <tr><td>Stages of NLP</td><td>Theory</td><td>Name a stage from a description, or explain all five</td></tr>
          <tr><td>Chatbots: script bot and smart bot</td><td>Theory</td><td>Differences, or classify a given bot</td></tr>
          <tr><td>Text processing: normalisation, Bag of Words, TFIDF</td><td>Theory</td><td>Normalise given text, build a vector, compute TFIDF</td></tr>
          <tr><td>Code and no-code NLP tools, sentiment analysis in Orange</td><td>Practical</td><td>Run the case study, explain each step in the viva</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
      <div>
        <h3>The question shapes, from the last sample paper</h3>
        <ul class="bx-check">
          <li><b>Five one-mark objective items</b> in the 2025-26 paper, with choice across the AI units.</li>
          <li><b>One two-mark question</b>, typically a difference or a short definition.</li>
          <li><b>One four-mark question</b>, often text normalisation or a TFIDF calculation on a small corpus.</li>
          <li>The 2026-27 sample paper for 417 has not been published yet, so treat these counts as a guide, not a promise.</li>
        </ul>
      </div>
      <div>
        <h3>Where hours go in the syllabus</h3>
        <p>CBSE gives the unit 20 theory hours and 7 practical hours. The theory hours are spent mostly on the stages and on text processing, which is also where the longer answers come from. The practical hours go to sentiment analysis, which reaches the practical exam and the viva rather than the written paper.</p>
        <p>The full blueprint for every unit is on <a class="bx-link" href="/cbse-class-10-ai-exam-date-and-paper-pattern">the 417 exam date and paper pattern page</a>.</p>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section" id="stages">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. What are the stages?</p>
      <h2>What are the stages of NLP in Class 10?</h2>
      <p class="bx-lede">The five stages of NLP are lexical analysis, syntactic analysis, semantic analysis, discourse integration and pragmatic analysis, in that order. Each one checks the text at a deeper level than the one before: words, then grammar, then meaning, then the link between sentences, then the intended purpose.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Stage</th><th scope="col">One-line definition</th><th scope="col">Example that passes or fails it</th></tr></thead>
        <tbody>
          <tr><td>1. Lexical analysis</td><td>Breaks a long text into paragraphs, sentences and words, and identifies each word</td><td>"Rohan bought mangoes. They were sweet." becomes two sentences and their words</td></tr>
          <tr><td>2. Syntactic analysis (parsing)</td><td>Checks that the words follow the grammar of the language</td><td>"Mangoes bought Rohan sweet were" fails: the order breaks the rules</td></tr>
          <tr><td>3. Semantic analysis</td><td>Checks that the grammatically correct sentence actually makes sense</td><td>"The mango sang loudly" passes grammar but fails meaning</td></tr>
          <tr><td>4. Discourse integration</td><td>Links a sentence with those before and after it</td><td>Working out that "They" in the second sentence means the mangoes</td></tr>
          <tr><td>5. Pragmatic analysis</td><td>Finds the intended meaning in the real situation</td><td>"Can you pass the salt?" is a request, not a question about ability</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Model answer, 4 marks</b><span>explain the stages of NLP</span></figcaption>
  <pre>NLP understands text in five stages.
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
   is understood as a request.</pre>
  <p class="bx-code-note">Five stages, each with one line and one example. Order matters: a jumbled list loses a mark in most schemes.</p>
</figure>
      <div>
        <h3>How students lose marks here</h3>
        <ul class="bx-check">
          <li><b>Mixing up syntactic and semantic.</b> Syntax is grammar; semantics is meaning. A sentence can pass the first and fail the second, never the reverse in a useful exam example.</li>
          <li><b>Calling discourse "the meaning".</b> Discourse is about how sentences connect, especially pronouns like it, he and they.</li>
          <li><b>Skipping the example.</b> A definition alone usually earns half the marks for a stage.</li>
          <li><b>Writing "parsing" for lexical.</b> Parsing is the other name for syntactic analysis.</li>
        </ul>
        <p>A one-mark form of the same idea: "Which stage would reject a grammatically correct sentence that makes no sense?" Answer: semantic analysis.</p>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" id="chatbots">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. Applications and chatbots</p>
      <h2>Applications of NLP, and script bot vs smart bot</h2>
      <p class="bx-lede">A chatbot is a program that holds a conversation with a person in text or speech. A script bot follows a fixed, pre-written flow; a smart bot uses NLP and machine learning to understand open questions and improves as it sees more data.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Point of difference</th><th scope="col">Script bot</th><th scope="col">Smart bot</th></tr></thead>
        <tbody>
          <tr><td>How it works</td><td>Follows a script: buttons, menus or set keywords</td><td>Understands free text using NLP</td></tr>
          <tr><td>Language processing</td><td>Little or none</td><td>Large: intent, context and meaning</td></tr>
          <tr><td>Learning</td><td>Does not learn; changes only when someone edits the script</td><td>Learns from more data and conversations</td></tr>
          <tr><td>Data it uses</td><td>A small set of fixed replies</td><td>Large databases and other resources</td></tr>
          <tr><td>Building it</td><td>Easy, often with no coding</td><td>Needs coding and training</td></tr>
          <tr><td>Example</td><td>A school fee bot that offers "1 for dates, 2 for receipts"</td><td>A voice assistant that answers "Will I need an umbrella in Pune tomorrow?"</td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">A two-mark question asks for two differences; four rows of this table cover a four-mark one. Write each difference as a pair, script bot first, so the examiner can tick both halves.</p>
    <h3 class="bx-mt-40">Applications of NLP the syllabus names</h3>
    <div class="bx-grid-3">
      <div class="bx-card"><h3>Voice assistants</h3><p>Turn speech into text, find the intent and reply, such as setting an alarm when told "wake me at six".</p></div>
      <div class="bx-card"><h3>Auto-generated captions</h3><p>Speech in a video is converted to text on screen as it plays, which helps viewers with hearing loss.</p></div>
      <div class="bx-card"><h3>Language translation</h3><p>Text in one language is rewritten in another while keeping its meaning, not word by word.</p></div>
      <div class="bx-card"><h3>Sentiment analysis</h3><p>Decides whether a review or post is positive, negative or neutral. This is also the practical case study in Orange.</p></div>
      <div class="bx-card"><h3>Text classification</h3><p>Puts text into categories, such as sorting emails into spam and not spam, or news into sport and politics.</p></div>
      <div class="bx-card"><h3>Keyword extraction</h3><p>Pulls the most important words out of a long text, so a report can be tagged or summarised quickly.</p></div>
    </div>
    <p class="bx-mt-40">Why is any of this hard for a computer? Human language is ambiguous ("I saw her duck"), the same idea can be said many ways, and it keeps changing. Those three features of natural language are a common two-mark question in their own right. Short contrasts of this kind are collected on <a class="bx-link" href="/cbse-class-10-ai-difference-between-questions">CBSE Class 10 AI difference between questions</a>.</p>
  </div>
</section>`,

`<section class="bx-section" id="normalise">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. Normalise this text</p>
      <h2>Text normalisation class 10: the steps, worked on real text</h2>
      <p class="bx-lede">Text normalisation is the cleaning of a whole corpus so a machine can work with it: the text is cut into sentences and tokens, low-value words and symbols are dropped, case is made uniform and each word is reduced to a base form. Here it is done on a two-document corpus, step by step.</p>
    </div>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>The corpus</b><span>two documents</span></figcaption>
  <pre>Document 1:
Grandma tells the best stories at night.

Document 2:
We were listening to her stories, and
we laughed!</pre>
  <p class="bx-code-note">A corpus is the whole collection of text being processed. Normalisation works on all of it together.</p>
</figure>
      <ol class="bx-steps">
        <li class="bx-step"><h4>Sentence segmentation</h4><p>Each document here is one sentence, so the corpus gives two sentences.</p></li>
        <li class="bx-step"><h4>Tokenisation</h4><p>Every word and every punctuation mark becomes a token. Document 1 gives 8 tokens (7 words and the full stop); Document 2 gives 11 (9 words, a comma and an exclamation mark). 19 tokens in all.</p></li>
        <li class="bx-step"><h4>Removing stopwords and special characters</h4><p>Dropping the, at, we, were, to, her, and, and all punctuation leaves "Grandma tells best stories night" and "listening stories laughed".</p></li>
        <li class="bx-step"><h4>Converting to a common case</h4><p>Everything becomes lower case, so "Grandma" and "grandma" can never be counted as two different words.</p></li>
        <li class="bx-step"><h4>Stemming or lemmatisation</h4><p>Each word is cut to its base: tells to tell, listening to listen, laughed to laugh, stories to story (lemma). The result: grandma, tell, best, story, night, listen, laugh, 7 unique words.</p></li>
      </ol>
    </div>
    <div class="bx-table-wrap bx-mt-40">
      <table class="bx-table">
        <thead><tr><th scope="col">Word</th><th scope="col">After stemming</th><th scope="col">After lemmatisation</th><th scope="col">What it shows</th></tr></thead>
        <tbody>
          <tr><td>stories</td><td>stori</td><td>story</td><td>A stem need not be a real word; a lemma always is</td></tr>
          <tr><td>listening</td><td>listen</td><td>listen</td><td>Both methods agree when the suffix is regular</td></tr>
          <tr><td>better</td><td>better</td><td>good</td><td>Only lemmatisation knows the dictionary root</td></tr>
          <tr><td>happily</td><td>happili</td><td>happy</td><td>Rules chop endings without checking the result is English</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
      <div>
        <h3>Stemming against lemmatisation, in one answer</h3>
        <p>Stemming removes affixes by rule, so it is fast but may leave a word that does not exist. Lemmatisation finds the proper dictionary form, so it is slower but always gives a meaningful word. The usual exam choice: lemmatisation when meaning matters, stemming when speed matters.</p>
      </div>
      <div>
        <h3>What comes next: Bag of Words and TFIDF</h3>
        <p>The 7 normalised words become the dictionary for Bag of Words, and each document becomes a row of counts. TFIDF then scores every word by how special it is to one document. The complete worked tables, three documents from raw text to final TFIDF values, are on <a class="bx-link" href="/bag-of-words-tfidf-class-10-ai">Bag of Words and TFIDF for Class 10 AI</a>.</p>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" id="answers">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. Practise by mark band</p>
      <h2>NLP class 10 questions and answers, by marks</h2>
      <p class="bx-lede">Original questions in the shapes the paper uses. Try each before opening the answer. The one-mark answers are short on purpose; the two- and four-mark ones show the length the scheme rewards.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <h3>One mark each</h3>
        <ol class="bx-qlist">
          <li>Which stage of NLP works out that "she" in the second sentence refers to Asha in the first?
            <details><summary>Answer</summary> Discourse integration, which links each sentence with its neighbours.</details></li>
          <li>How many tokens are there in "Is it raining? Take an umbrella, Riya."?
            <details><summary>Answer</summary> 10: seven words plus the question mark, the comma and the full stop.</details></li>
          <li>Words such as "is", "an" and "the" that are removed because they add little meaning are called
            <details><summary>Answer</summary> Stopwords.</details></li>
          <li>A bank's chatbot only lets you tap one of four buttons. Is it a script bot or a smart bot?
            <details><summary>Answer</summary> A script bot: it follows a fixed flow and understands no free text.</details></li>
          <li>Name the NLP application that turns spoken words in a video into text on screen.
            <details><summary>Answer</summary> Auto-generated captions.</details></li>
          <li>"Doctors said the new medicine works. It works fast!" How many tokens?
            <details><summary>Answer</summary> 11: nine words, the full stop and the exclamation mark. "works" counts twice because tokens are not unique words.</details></li>
          <li>Which gives a meaningful base word: stemming or lemmatisation?
            <details><summary>Answer</summary> Lemmatisation.</details></li>
          <li>What is the whole body of text taken from all the documents together called?
            <details><summary>Answer</summary> The corpus.</details></li>
        </ol>
      </div>
      <div>
        <h3>Two marks each</h3>
        <ol class="bx-qlist" start="9">
          <li>Give two differences between a script bot and a smart bot.
            <details><summary>Answer</summary> A script bot follows a pre-written script and has little language processing, while a smart bot understands free text using NLP. A script bot does not learn, while a smart bot improves with more data.</details></li>
          <li>Differentiate between syntactic and semantic analysis with an example.
            <details><summary>Answer</summary> Syntactic analysis checks grammar; semantic analysis checks meaning. "The mango sang loudly" is grammatically correct, so it passes the syntactic stage, but it makes no sense, so it fails the semantic stage.</details></li>
          <li>Why is text converted to a common case during normalisation?
            <details><summary>Answer</summary> A machine treats "School" and "school" as different words because their characters differ. Lowercasing everything makes them one word, so counts and vectors are correct.</details></li>
          <li>State any two features of natural language that make NLP difficult.
            <details><summary>Answer</summary> It is ambiguous: one sentence can have more than one meaning. It is redundant and changing: the same idea can be said in many ways, and words and usage change over time.</details></li>
        </ol>
        <h3 class="bx-mt-40">Four marks each</h3>
        <ol class="bx-qlist" start="13">
          <li>Explain any four applications of NLP with one example each.
            <details><summary>Answer</summary> Voice assistants turn speech into an action, such as setting an alarm. Translation rewrites text in another language, such as a Hindi sign read in English. Sentiment analysis labels a review positive or negative, such as rating feedback on a product. Text classification sorts text into groups, such as moving spam out of the inbox.</details></li>
          <li>Normalise "Riya plays football. Her brothers play cricket!" Treat "her" as the only stopword. Show each step and give the final dictionary.
            <details><summary>Answer</summary> Segmentation: two sentences. Tokenisation: 9 tokens, seven words plus the full stop and the exclamation mark. Remove "Her" and both punctuation marks. Lower case: riya plays football / brothers play cricket. Lemmatise: plays to play, brothers to brother. Dictionary of unique words: riya, play, football, brother, cricket, so 5 words.</details></li>
        </ol>
      </div>
    </div>
    <p class="bx-mt-40">More objective items for this unit sit with every other unit on <a class="bx-link" href="/cbse-class-10-ai-mcq-questions">Class 10 AI MCQ with answers</a>, and the spoken versions of these questions are on <a class="bx-link" href="/cbse-class-10-ai-viva-questions">CBSE Class 10 AI viva questions</a>.</p>
  </div>
</section>`,

`<section class="bx-section" id="live">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q6. How is Unit 6 taught?</p>
      <h2>Natural language processing class 10 notes become marks in the live batch</h2>
      <p class="bx-lede">Notes tell a student what NLP is. Marks come from writing the stages in order, sizing an answer to its marks and counting tokens without slips. That is the work the class does each week.</p>
    </div>
    <div class="bx-grid-3">
      <div class="bx-card"><h3>Taught on real sentences</h3><p>Each stage is shown on a sentence the class suggests, then broken on purpose: a jumbled one for syntax, a silly one for semantics, a pronoun puzzle for discourse. Students remember the stage by the sentence that failed it.</p></div>
      <div class="bx-card"><h3>Answers marked against the scheme</h3><p>Two- and four-mark answers are written in the last part of the Monday class, then shared and marked on screen point by point. A missing example or a stage out of order is caught before it becomes a habit.</p></div>
      <div class="bx-card"><h3>The practical in Orange</h3><p>On Wednesday the sentiment analysis walkthrough is built live in Orange: load reviews, preprocess, score and read the result. Students rehearse explaining each widget, because that is what the viva asks.</p></div>
    </div>
    <p class="bx-mt-40">The no-code tool itself has its own page, <a class="bx-link" href="/orange-data-mining-class-10-ai">Orange Data Mining for Class 10 AI</a>. The neighbouring theory unit, worth 4 marks, is answered the same way on <a class="bx-link" href="/cbse-class-10-ai-computer-vision-questions">computer vision class 10 questions and answers</a>.</p>
  </div>
</section>`
  ],
  chooseH2: 'Learn Unit 6 in the Monday and Wednesday batch, or one to one',
  chooseLede: 'The batch takes NLP in its place in the syllabus, with classmates whose answers you see marked beside yours. One to one starts wherever your child is stuck, whether that is the stages or a TFIDF table. Billed monthly, no admission fee, and you can stop at the end of any month.',
  chooseBatch: [
    'Monday and Wednesday, 9:00 PM IST, live on video',
    'Fifteen to twenty Class 10 AI students with one teacher',
    'Stages, chatbots and normalisation taught in order',
    'Written NLP answers marked on screen every week',
    'Orange sentiment case study built in class'
  ],
  choosePersonal: [
    'A day and hour you choose, in your own time zone',
    'Starts from the NLP topic your child finds hardest',
    'Normalisation and TFIDF repeated on fresh text until steady',
    'Every four-mark answer read and corrected one to one',
    'Same CBSE 417 syllabus and the same teachers'
  ],
  chooseAfter: 'If Unit 6 is the only weak spot, a handful of one to one sessions on the stages and text processing is usually enough. If the student has not reached NLP yet, or is behind on several units, the batch covers the whole syllabus in order. Fees appear in your own currency.',
  zonesH2: 'NLP classes for CBSE Class 10 students outside India',
  zonesLede: 'CBSE schools in the Gulf and East Africa sit the same 417 paper, with the same 8 marks for Natural Language Processing. These are the batch times in local terms this winter.',
  zonesAfter: 'Where the 9:00 PM IST batch falls too late, personalised one to one runs at a local hour you choose. More on studying from abroad is on <a class="bx-link" href="/cbse-class-10-ai-online-classes-gulf-and-abroad">CBSE Class 10 AI online classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about NLP in Class 10 AI',
  faqH2: 'NLP class 10: what students and parents ask',
  faqs: [
    ['What are the important NLP class 10 questions and answers for 2026-27?', 'The questions that recur are: the five stages of NLP with examples, differences between a script bot and a smart bot, four applications of NLP, the steps of text normalisation on given text, stemming against lemmatisation, and a Bag of Words or TFIDF calculation on a small corpus. This page answers each of them in the length the marks deserve.'],
    ['How many marks is NLP in CBSE Class 10 AI?', 'Unit 6, Natural Language Processing, carries 8 of the 50 theory marks in CBSE 417 for 2026-27. In the 2025-26 sample paper it appeared as five one-mark objective items, one two-mark question and one four-mark question, with choice across units. The sentiment analysis case study is assessed in the practical instead.'],
    ['What are the stages of NLP class 10?', 'There are five: lexical analysis splits text into sentences and words; syntactic analysis checks grammar; semantic analysis checks meaning; discourse integration links each sentence with those around it; pragmatic analysis finds the real intent. Learn them in this order with one example each.'],
    ['What is the difference between a script bot and a smart bot?', 'A script bot follows a fixed, pre-written flow, has little or no language processing, does not learn and is easy to build. A smart bot uses NLP to understand free text, learns from more data, works with large databases and needs coding. A menu-based fee bot is a script bot; a voice assistant is a smart bot.'],
    ['What are the steps of text normalisation in class 10?', 'Sentence segmentation, tokenisation, removing stopwords and special characters, converting to a common case, and stemming or lemmatisation. The output is a clean list of base words for the whole corpus, which then becomes the dictionary for Bag of Words. In a four-mark answer, show the text after every step, not just the final list, because each step usually carries its own share of the marks.'],
    ['What are the applications of NLP for class 10?', 'The curriculum names voice assistants, auto-generated captions, language translation, sentiment analysis, text classification and keyword extraction. For a four-mark answer, explain four of them with one real example each, such as spam filtering for text classification. Sentiment analysis is worth knowing best, because it is also the case study you build in Orange for the practical.'],
    ['Are punctuation marks counted as tokens?', 'Yes. In tokenisation every word, number and special character, including commas, full stops and exclamation marks, becomes a separate token. Punctuation is only removed in the next step, along with stopwords. Most token-count mistakes come from forgetting this. So "Stop, Riya!" is four tokens: two words, a comma and an exclamation mark.'],
    ['Where can I find natural language processing class 10 notes?', 'This page works as exam-focused notes for the whole unit: the marks, the stages table, chatbots, applications and a worked normalisation. For notes on every unit of 417 in one place, see our Class 10 AI notes page, and the CBSE handbook remains the base text.'],
    ['Is TFIDF in the Class 10 AI theory paper?', 'Yes. TFIDF is listed under text processing in the theory part of Unit 6 for 2026-27, alongside Bag of Words and text normalisation. A small corpus calculation is a natural four-mark question, which is why we give it a page of its own with full tables.'],
    ['Is sentiment analysis asked in the written paper?', 'As an application of NLP, yes: you may be asked what it is or for an example. The hands-on sentiment analysis case study in Orange is listed under the practical part of Unit 6, so it is assessed through the practical exam and viva rather than written out in full.'],
    ['Do you teach NLP separately or as part of the whole course?', 'Both are possible. In the batch, NLP is taught in its place in the 417 syllabus, with written answers and the Orange case study. One to one can focus only on Unit 6 if that is the gap. Both are covered by the monthly fee shown on this page, and the first class is a free demo.']
  ],
  startH2: 'Try a free NLP class with a teacher',
  startHtml: `        <p>In the free first class your child normalises a short piece of text with the teacher, names the stage each broken sentence fails, and writes one two-mark answer that is marked on screen. Afterwards the mentor tells you which parts of Unit 6 are solid and which need work, and whether the batch or one to one would suit your child better.</p>
        <p>Want every unit summarised first? Start with <a class="bx-link" href="/cbse-class-10-ai-notes">CBSE Class 10 AI notes</a>.</p>`,
  footerTag: 'CBSE 417 &middot; Class 10 NLP questions'
};
