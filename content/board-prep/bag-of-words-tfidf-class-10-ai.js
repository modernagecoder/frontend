// CBSE Class 10 AI (417), Unit 6: Bag of Words and TFIDF, worked end to end for 2026-27.
// Intent: "bag of words class 10 AI", "TFIDF class 10", "text normalisation steps",
// "document vector table", "term frequency inverse document frequency example".
// Distinct from cbse-class-10-ai-nlp-questions (cb07), which answers the whole unit
// (stages, chatbots, applications) in exam format. This page is the calculation page:
// one original three-document corpus taken from raw sentences through normalisation,
// dictionary, document vector table, DF, IDF and the final TFIDF table, plus quick
// numericals. It links up to cb07 for the rest of the unit.
// Convention: the CBSE AI Facilitator Handbook for Class X (cbseacademic.nic.in,
// Curriculum26 publication, checked 2026-11-06) defines TF as the count in the
// document vector table, IDF(W) = total documents / documents containing W (a ratio,
// written as a fraction), and TFIDF(W) = TF(W) x log(IDF(W)) with log to base 10.
// That is the formula used here. Other conventions (natural log, smoothed IDF as in
// scikit-learn) are named only to warn that they give different numbers.
// Every number was recomputed with python3 on 2026-11-06 (scratch cb08.py, cb08b.py
// and page_tfidf.py, the program shown on the page, run as printed): tokens 15, 8, 8;
// normalised lists of 8, 5 and 4 words; 10-word dictionary; TF rows D1 2,1,1,2,1,1,0,0,0,0
// D2 1,0,1,1,0,0,1,1,0,0 D3 0,0,0,1,0,0,0,1,1,1; DF 2,1,2,3,1,1,1,2,1,1; log10(3/1) =
// 0.477, log10(3/2) = 0.176, log10(1) = 0; TFIDF D1 meera 0.352; the program output is
// pasted exactly. Quick numericals: 3 x log10(8/2) = 1.806; log10(8/1) = 0.903;
// 2 x log10(8/5) = 0.408; log10(8/8) = 0; ln 3 = 1.099 (natural-log contrast);
// smoothed ln((1+3)/(1+1)) + 1 = 1.693 for a word in 1 of 3 documents.
'use strict';

module.exports = {
  slug: 'bag-of-words-tfidf-class-10-ai',
  code: 'cb08',
  board: 'cbse',
  themeColor: '#6B3A2A',
  dateModified: '2026-11-06',
  title: 'Bag of Words Class 10 AI: TFIDF Worked Example, 2026-27',
  description: 'Bag of words class 10 AI, fully worked: three documents taken from raw text to the document vector table, IDF and TFIDF, using the CBSE handbook formula.',
  ogTitle: 'Bag of Words and TFIDF for Class 10 AI, Every Table Worked',
  ogDesc: 'One three-document corpus taken through text normalisation, the dictionary, the document vector table, document frequency, IDF and TFIDF, with the CBSE handbook formula, a short Python check and quick numericals.',
  twDesc: 'Raw text to TFIDF in six tables for CBSE 417 Unit 6, with the handbook formula and quick numericals.',
  headline: 'Bag of Words Class 10 AI: One Corpus Worked from Raw Text to the Final TFIDF Table',
  courseName: 'CBSE Class 10 AI (417) Bag of Words and TFIDF, Live Online',
  courseDesc: 'Live online practice of Bag of Words and TFIDF for CBSE Class 10 Artificial Intelligence (417), session 2026-27: corpora normalised by hand, document vector tables built, document frequency, IDF and TFIDF computed with the handbook formula and checked line by line on screen, then repeated with fresh text in timed four-mark questions, every Monday and Wednesday at 9:00 PM IST or one to one at a time the family chooses.',
  brandTag: '417 &middot; BoW and TFIDF',
  navLinks: [['#what', 'Bag of Words'], ['#corpus', 'Normalise'], ['#vectors', 'Vector table'], ['#tfidf', 'TFIDF'], ['#numericals', 'Numericals']],
  crumbs: [['/', 'Home'], ['/cbse-class-10-ai-classes-online', 'Class 10 AI classes'], [null, 'Bag of Words and TFIDF']],
  eyebrow: 'CBSE Class 10 &middot; Artificial Intelligence, code 417 &middot; Unit 6 calculations, 2026-27',
  h1: 'Bag of words class 10 AI, worked through to the last TFIDF value.',
  lede: 'Most notes on bag of words class 10 AI stop at a definition and a two-line example. This page takes one corpus of three short documents all the way: normalise it, build the dictionary, fill the document vector table, count document frequency, work out IDF and finish with every TFIDF value, using the formula in the CBSE handbook. In our live batch, students do the same on fresh text against the clock until the method is automatic.',
  heroNote: 'Live online &middot; one corpus, every table &middot; CBSE handbook formula &middot; checked in Python &middot; four-mark questions timed in class &middot; first class free',
  waText: 'Hello Modern Age Coders. I want help with Bag of Words and TFIDF for CBSE Class 10 AI 417.',
  timetable: {
    label: 'When TFIDF is practised',
    title: 'BoW and TFIDF',
    right: 'CBSE 417',
    rows: [
      ['Monday, worked corpus on screen', '9:00', 'PM IST'],
      ['Wednesday, timed four-mark sum', '9:00', 'PM IST'],
      ['Documents in the worked corpus', '3', 'docs'],
      ['Words in its dictionary', '10', 'words']
    ],
    zones: '<b>UAE and Oman:</b> 7:30 PM local. <b>Saudi Arabia, Qatar, Kuwait and Bahrain:</b> 6:30 PM local. <b>Kenya:</b> 6:30 PM local. <b>Nepal:</b> 9:15 PM. <b>Malaysia and Singapore:</b> 11:30 PM, so one to one suits better.',
    stamps: ['Log to base 10', 'Part of Unit 6, 8 marks']
  },
  picksH2: 'Courses behind these calculations',
  picksLede: 'The 417 course whose Class 10 batch drills these tables, Python for students who want to check their TFIDF in code, and Data Science for the counting and table habits underneath.',
  picks: [
    { slug: 'cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843', code: 'The batch / 417 Class 10', h3: 'CBSE AI for Class 9 to 12', p: 'Unit 6 taught in full, with Bag of Words and TFIDF worked on new corpora until students can do a four-mark question without notes.' },
    { slug: 'python-complete-masterclass-teens', code: 'Check it / Python', h3: 'Python for Teens', p: 'Lists, loops and the math module: enough Python to write the ten-line TFIDF checker on this page yourself.' },
    { slug: 'data-science-course-for-teens-python-data', code: 'Tables / Data Science', h3: 'Data Science for Teens', p: 'Counting, frequency tables and reading numbers in context, the skills a TFIDF table quietly depends on.' }
  ],
  capsule: 'Bag of words class 10 AI is the method in CBSE 417 Unit 6 that turns text into numbers: normalise the corpus, list every unique word as the dictionary, then write each document as a row of word counts, called the document vector table. TFIDF then weighs each count. Following the CBSE handbook, IDF(W) = total documents / documents containing W, and TFIDF(W) = TF(W) x log10(IDF(W)), so a word found in every document scores 0. Modern Age Coders practises these tables live in a Monday and Wednesday 9:00 PM IST batch, or personalised one to one.',
  sections: [
`<section class="bx-section bx-section--tint" id="what">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. What is it?</p>
      <h2>What is Bag of Words in Class 10 AI?</h2>
      <p class="bx-lede">Bag of Words is an NLP model that represents each document by how many times every word of the corpus occurs in it, ignoring grammar and word order. The name fits: the words are tipped into a bag and only counted.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <h3>The algorithm in four steps</h3>
        <ol class="bx-steps">
          <li class="bx-step"><h4>Normalise the text</h4><p>Clean all the documents together: split, tokenise, drop stopwords and symbols, lower the case, reduce words to their base.</p></li>
          <li class="bx-step"><h4>Create the dictionary</h4><p>List each unique word of the normalised corpus once. This list is also called the vocabulary.</p></li>
          <li class="bx-step"><h4>Make a vector for one document</h4><p>Under every dictionary word, write how many times it appears in that document.</p></li>
          <li class="bx-step"><h4>Repeat for every document</h4><p>Stack the rows and you have the document vector table, ready for TFIDF.</p></li>
        </ol>
      </div>
      <div>
        <h3>What the model gives, and what it loses</h3>
        <ul class="bx-check">
          <li><b>Gives:</b> a fixed-length row of numbers for every document, which a machine can compare and learn from.</li>
          <li><b>Gives:</b> a quick view of which words dominate each document.</li>
          <li><b>Loses:</b> order. "Dog bites man" and "man bites dog" get the same vector.</li>
          <li><b>Loses:</b> importance. A common word gets a big count without telling documents apart, which is the problem TFIDF fixes.</li>
        </ul>
        <p>Bag of Words and TFIDF are part of the theory half of Unit 6 in the 2026-27 curriculum, so a calculation on a small corpus is fair game for a four-mark question. The other Unit 6 topics, the stages, chatbots and applications, are answered on <a class="bx-link" href="/cbse-class-10-ai-nlp-questions">NLP class 10 questions and answers</a>.</p>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section" id="corpus">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. Clean the corpus</p>
      <h2>Text normalisation steps on our three documents</h2>
      <p class="bx-lede">We start from three raw sentences. The stopword list is stated up front, because an examiner marks you on the list you declare, and different lists give different dictionaries.</p>
    </div>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Raw corpus</b><span>N = 3 documents</span></figcaption>
  <pre>D1: Meera feeds the stray dogs, and the
    dogs wag their tails at Meera.
D2: The stray dogs follow Meera to school.
D3: Dogs sleep in the sun after school.

Stopwords used: the, and, their, at,
to, in, after</pre>
  <p class="bx-code-note">Each document is a single sentence, so sentence segmentation gives three sentences.</p>
</figure>
      <div class="bx-table-wrap">
        <table class="bx-table">
          <thead><tr><th scope="col">Step</th><th scope="col">D1</th><th scope="col">D2</th><th scope="col">D3</th></tr></thead>
          <tbody>
            <tr><td>Tokens (words and marks)</td><td class="bx-num">15</td><td class="bx-num">8</td><td class="bx-num">8</td></tr>
            <tr><td>After stopwords and punctuation go</td><td>Meera feeds stray dogs dogs wag tails Meera</td><td>stray dogs follow Meera school</td><td>Dogs sleep sun school</td></tr>
            <tr><td>Lower case, then lemmatise</td><td>meera feed stray dog dog wag tail meera</td><td>stray dog follow meera school</td><td>dog sleep sun school</td></tr>
            <tr><td>Words left</td><td class="bx-num">8</td><td class="bx-num">5</td><td class="bx-num">4</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
      <div>
        <h3>The dictionary</h3>
        <p>Reading the cleaned lists left to right and keeping each new word once gives ten words:</p>
        <p><code>meera, feed, stray, dog, wag, tail, follow, school, sleep, sun</code></p>
        <p>Note that repeats inside D1 (dog twice, meera twice) still give one entry each. The dictionary counts kinds of word, not occurrences.</p>
      </div>
      <div>
        <h3>Where students slip</h3>
        <ul class="bx-check">
          <li>Counting D1 as 13 tokens: the comma and the full stop are tokens too, so it is 15.</li>
          <li>Keeping "Dogs" and "dog" as two entries because the case or the plural was not fixed.</li>
          <li>Changing the stopword list halfway. Declare it once and apply it to every document.</li>
        </ul>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" id="vectors">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. Count the words</p>
      <h2>The document vector table, and term frequency</h2>
      <p class="bx-lede">A document vector table has one row per document and one column per dictionary word; each cell is the number of times that word occurs in that document. Those cells are the term frequencies, TF, that TFIDF needs.</p>
    </div>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Document vector table</b><span>rows = documents, cells = TF</span></figcaption>
  <pre>     meera feed stray dog wag tail follow school sleep sun
D1     2    1     1    2   1    1     0      0     0    0
D2     1    0     1    1   0    0     1      1     0    0
D3     0    0     0    1   0    0     0      1     1    1</pre>
  <p class="bx-code-note">Read across a row to get that document's vector. D2's vector is [1, 0, 1, 1, 0, 0, 1, 1, 0, 0].</p>
</figure>
    <div class="bx-grid-3 bx-mt-40">
      <div class="bx-card"><h3>Check 1: row totals</h3><p>Each row should add up to the words left after cleaning: 8 for D1, 5 for D2, 4 for D3. If it does not, a word was missed or double counted.</p></div>
      <div class="bx-card"><h3>Check 2: no empty column</h3><p>Every dictionary word came from some document, so every column has at least one non-zero cell.</p></div>
      <div class="bx-card"><h3>Presence or count?</h3><p>Some textbook examples only mark 1 for present and 0 for absent. In a TFIDF question you need the true counts, so D1's dog is 2, not 1.</p></div>
    </div>
  </div>
</section>`,

`<section class="bx-section" id="tfidf">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. Weigh the words</p>
      <h2>TFIDF class 10: a term frequency inverse document frequency example</h2>
      <p class="bx-lede">TFIDF scores a word high when it is frequent in one document but rare across the corpus. We use the CBSE handbook convention: IDF(W) = N / DF(W), written as a fraction, and TFIDF(W) = TF(W) x log10(IDF(W)), where N is the number of documents and DF(W) is how many documents contain W.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Word</th><th scope="col">DF</th><th scope="col">IDF = 3 / DF</th><th scope="col">log10(IDF)</th><th scope="col">TFIDF D1</th><th scope="col">TFIDF D2</th><th scope="col">TFIDF D3</th></tr></thead>
        <tbody>
          <tr><td>meera</td><td class="bx-num">2</td><td class="bx-num">3/2</td><td class="bx-num">0.176</td><td class="bx-num">0.352</td><td class="bx-num">0.176</td><td class="bx-num">0</td></tr>
          <tr><td>feed</td><td class="bx-num">1</td><td class="bx-num">3/1</td><td class="bx-num">0.477</td><td class="bx-num">0.477</td><td class="bx-num">0</td><td class="bx-num">0</td></tr>
          <tr><td>stray</td><td class="bx-num">2</td><td class="bx-num">3/2</td><td class="bx-num">0.176</td><td class="bx-num">0.176</td><td class="bx-num">0.176</td><td class="bx-num">0</td></tr>
          <tr><td>dog</td><td class="bx-num">3</td><td class="bx-num">3/3</td><td class="bx-num">0</td><td class="bx-num">0</td><td class="bx-num">0</td><td class="bx-num">0</td></tr>
          <tr><td>wag</td><td class="bx-num">1</td><td class="bx-num">3/1</td><td class="bx-num">0.477</td><td class="bx-num">0.477</td><td class="bx-num">0</td><td class="bx-num">0</td></tr>
          <tr><td>tail</td><td class="bx-num">1</td><td class="bx-num">3/1</td><td class="bx-num">0.477</td><td class="bx-num">0.477</td><td class="bx-num">0</td><td class="bx-num">0</td></tr>
          <tr><td>follow</td><td class="bx-num">1</td><td class="bx-num">3/1</td><td class="bx-num">0.477</td><td class="bx-num">0</td><td class="bx-num">0.477</td><td class="bx-num">0</td></tr>
          <tr><td>school</td><td class="bx-num">2</td><td class="bx-num">3/2</td><td class="bx-num">0.176</td><td class="bx-num">0</td><td class="bx-num">0.176</td><td class="bx-num">0.176</td></tr>
          <tr><td>sleep</td><td class="bx-num">1</td><td class="bx-num">3/1</td><td class="bx-num">0.477</td><td class="bx-num">0</td><td class="bx-num">0</td><td class="bx-num">0.477</td></tr>
          <tr><td>sun</td><td class="bx-num">1</td><td class="bx-num">3/1</td><td class="bx-num">0.477</td><td class="bx-num">0</td><td class="bx-num">0</td><td class="bx-num">0.477</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
      <div>
        <h3>One cell, written as the examiner wants it</h3>
        <p><b>TFIDF(meera) in D1</b> = TF x log10(N / DF) = 2 x log10(3 / 2) = 2 x 0.176 = 0.352.</p>
        <p><b>TFIDF(dog) in D1</b> = 2 x log10(3 / 3) = 2 x log10(1) = 2 x 0 = 0.</p>
        <p>Show TF, the fraction, the log and the product for at least one word; then the rest can go straight into the table. Log values are rounded to three decimal places throughout.</p>
      </div>
      <div>
        <h3>Reading the result</h3>
        <ul class="bx-check">
          <li><b>dog scores 0 everywhere</b>, even with TF 2 in D1, because it is in all three documents. It behaves like a stopword for this corpus.</li>
          <li><b>feed, wag and tail</b> are D1's most telling words at 0.477 each: they appear nowhere else.</li>
          <li><b>sleep and sun</b> identify D3; <b>follow</b> identifies D2.</li>
          <li><b>meera</b> in D1 beats stray (0.352 against 0.176) only because it occurs twice there.</li>
        </ul>
      </div>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Check it in Python</b><span>math.log10, no libraries</span></figcaption>
  <pre>import math

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
    print(w, df, scores)</pre>
  <p class="bx-code-note">The lists are the cleaned documents from the table above. d.count(w) is TF; N / df is the handbook's IDF.</p>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Output</b><span>word, DF, TFIDF in D1 to D3</span></figcaption>
  <pre>meera 2 [0.352, 0.176, 0.0]
feed 1 [0.477, 0.0, 0.0]
stray 2 [0.176, 0.176, 0.0]
dog 3 [0.0, 0.0, 0.0]
wag 1 [0.477, 0.0, 0.0]
tail 1 [0.477, 0.0, 0.0]
follow 1 [0.0, 0.477, 0.0]
school 2 [0.0, 0.176, 0.176]
sleep 1 [0.0, 0.0, 0.477]
sun 1 [0.0, 0.0, 0.477]</pre>
  <p class="bx-code-note">Matches the hand-worked table cell for cell. Programs like this belong in the practical file too; see <a class="bx-link" href="/python-for-cbse-class-10-ai">Python for CBSE Class 10 AI</a>.</p>
</figure>
    </div>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" id="numericals">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. Practise the sums</p>
      <h2>TFIDF class 10 numericals, and the formula traps</h2>
      <p class="bx-lede">Short calculations in the shape objective and short-answer questions take. Use log to base 10, as the handbook does, and round to three places.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <ol class="bx-qlist">
          <li>A corpus has 8 documents. "monsoon" occurs 3 times in one document and appears in 2 documents in all. Find its TFIDF in that document.
            <details><summary>Answer</summary> 3 x log10(8 / 2) = 3 x log10(4) = 3 x 0.602 = 1.806.</details></li>
          <li>In the same corpus, "is" appears in all 8 documents. What is its TFIDF in any document?
            <details><summary>Answer</summary> 0, because log10(8 / 8) = log10(1) = 0, whatever its TF.</details></li>
          <li>"glacier" appears once, in one document out of 8. Its TFIDF there is
            <details><summary>Answer</summary> 1 x log10(8 / 1) = 0.903, the largest value any single occurrence can reach in this corpus.</details></li>
          <li>"river" appears twice in a document and in 5 of the 8 documents. Find its TFIDF.
            <details><summary>Answer</summary> 2 x log10(8 / 5) = 2 x log10(1.6) = 2 x 0.204 = 0.408.</details></li>
          <li>Which has the higher TFIDF: a word with TF 1 found in 1 of 8 documents, or a word with TF 3 found in 2 of 8?
            <details><summary>Answer</summary> The second: 1.806 against 0.903. Rarity helps, but frequency in the document multiplies it.</details></li>
          <li>Name two applications of TFIDF.
            <details><summary>Answer</summary> Any two of: document classification, topic modelling, information retrieval (search), and stopword filtering.</details></li>
        </ol>
      </div>
      <div>
        <h3>Why sites give different numbers</h3>
        <div class="bx-table-wrap">
          <table class="bx-table">
            <thead><tr><th scope="col">Convention</th><th scope="col">Word in 1 of 3 docs, TF 1</th><th scope="col">Use in the exam?</th></tr></thead>
            <tbody>
              <tr><td>CBSE handbook: TF x log10(N / DF)</td><td class="bx-num">0.477</td><td>Yes</td></tr>
              <tr><td>Same idea written as IDF = log10(N / DF)</td><td class="bx-num">0.477</td><td>Same numbers, different labels</td></tr>
              <tr><td>Natural log: TF x ln(N / DF)</td><td class="bx-num">1.099</td><td>No</td></tr>
              <tr><td>Smoothed, as in scikit-learn: ln((1 + N) / (1 + DF)) + 1</td><td class="bx-num">1.693</td><td>No</td></tr>
            </tbody>
          </table>
        </div>
        <p class="bx-mt-40">The handbook calls the fraction N / DF the IDF and applies the log in the TFIDF step. Many websites put the log inside IDF instead. With base 10 the final TFIDF is identical, so either layout earns the marks as long as you are consistent. A Python library run with default settings will not match the handbook, so never copy a library's output into a written answer.</p>
      </div>
    </div>
    <p class="bx-mt-40">More one-mark items on this topic sit beside every other unit on <a class="bx-link" href="/cbse-class-10-ai-mcq-questions">Class 10 AI MCQ with answers</a>, and every formula of the course is on one page at <a class="bx-link" href="/cbse-class-10-ai-formula-sheet">the CBSE Class 10 AI formula sheet</a>.</p>
  </div>
</section>`,

`<section class="bx-section" id="live">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q6. How is it practised?</p>
      <h2>How the live class makes a TFIDF question routine</h2>
      <p class="bx-lede">A TFIDF question is long but not hard. Marks are lost to one missed token, one wrong document frequency or a calculator set to the wrong log. Practice under a teacher's eye removes those slips.</p>
    </div>
    <div class="bx-grid-3">
      <div class="bx-card"><h3>Worked once, together</h3><p>On Monday the teacher builds a corpus with the class, and students call out each cell of the vector table before it is filled in, so the method is shared and every row is checked aloud.</p></div>
      <div class="bx-card"><h3>Then alone, timed</h3><p>On Wednesday each student gets a fresh three- or four-document corpus and a four-mark time limit. Answers are marked on screen against a scheme: dictionary, vectors, IDF, TFIDF, each worth its share.</p></div>
      <div class="bx-card"><h3>Calculator and code</h3><p>Students learn which key gives log to base 10 on their own calculator, and those who want it write the short Python checker above for their practical file.</p></div>
    </div>
    <p class="bx-mt-40">TFIDF questions also turn up inside full papers on <a class="bx-link" href="/cbse-class-10-ai-sample-paper-and-mock-tests">the sample paper and mock tests page</a>, and the model answers for other long questions are on <a class="bx-link" href="/cbse-class-10-ai-important-questions">CBSE Class 10 AI important questions</a>.</p>
  </div>
</section>`
  ],
  chooseH2: 'Practise Bag of Words and TFIDF in the batch, or one to one',
  chooseLede: 'In the batch, TFIDF comes in its place in Unit 6 and returns in every mock. One to one can start straight at the table your child gets wrong, whether that is tokens, document frequency or the log. Monthly billing, no admission fee, stop whenever a month ends.',
  chooseBatch: [
    'Monday and Wednesday, 9:00 PM IST, live on video',
    'Fifteen to twenty Class 10 AI students, one teacher',
    'Corpora worked together, then solved alone under time',
    'Four-mark TFIDF answers marked step by step on screen',
    'TFIDF inside full mock papers from December'
  ],
  choosePersonal: [
    'Your days and hour, in your own time zone',
    'Fresh corpora until every table comes out right first time',
    'The exact step that slips is found and fixed',
    'Optional Python checker written together',
    'Same CBSE 417 syllabus and teachers as the batch'
  ],
  chooseAfter: 'A student who understands the idea but keeps making arithmetic or counting slips usually needs only a few one to one sessions of timed corpora. A student meeting NLP for the first time is better in the batch, where the whole unit is built up in order. Fees show in your own currency.',
  zonesH2: 'Bag of Words and TFIDF practice for CBSE students abroad',
  zonesLede: 'The same handbook formula is examined in CBSE schools in the UAE, Saudi Arabia, Qatar and Kenya. Here is when the batch meets in your local time this winter.',
  zonesAfter: 'If the 9:00 PM IST class is too late for you, one to one runs at a local hour you pick. See <a class="bx-link" href="/cbse-class-10-ai-online-classes-gulf-and-abroad">CBSE Class 10 AI online classes in the Gulf and abroad</a> for more.',
  faqLabel: 'Questions about Bag of Words and TFIDF',
  faqH2: 'Bag of Words and TFIDF in Class 10 AI: common questions',
  faqs: [
    ['What is bag of words in class 10 AI?', 'It is the NLP model that turns each document into a row of word counts. You normalise the corpus, list every unique word as the dictionary, then count how often each dictionary word appears in each document. Order and grammar are ignored; only counts matter. It is part of Unit 6 of CBSE 417.'],
    ['What is the TFIDF formula in class 10 AI?', 'The CBSE handbook uses TFIDF(W) = TF(W) x log(IDF(W)), with IDF(W) = total number of documents divided by the number of documents containing W, and log to base 10. TF is the count of the word in that document, read from the document vector table.'],
    ['What is a document vector table?', 'A table with one row per document and one column per dictionary word. Each cell holds how many times that word appears in that document. A single row is that document\'s vector, and the cells are the term frequencies used in TFIDF.'],
    ['Why is TFIDF zero for some words?', 'If a word appears in every document, IDF = N / N = 1 and log10(1) = 0, so its TFIDF is 0 however often it occurs. Such a word cannot tell documents apart, which is why very common words behave like stopwords.'],
    ['Which log is used for TFIDF in CBSE class 10?', 'Log to base 10. The handbook says so directly. On a calculator use the log key, not ln. Using the natural log gives larger numbers, for example 1.099 instead of 0.477 for a word in one of three documents. Check your calculator once before the exam: log10 of 100 should show 2.'],
    ['Can you give a term frequency inverse document frequency example?', 'In a corpus of 8 documents, a word appearing 3 times in one document and in 2 documents overall has TFIDF = 3 x log10(8 / 2) = 3 x 0.602 = 1.806. A word in all 8 documents scores 0. The full three-document example on this page shows every table.'],
    ['What are the text normalisation steps before Bag of Words?', 'Split the corpus into sentences, break them into tokens, remove stopwords and punctuation, put everything in lower case, then stem or lemmatise. State your stopword list first, because it decides what reaches the dictionary. Then show the cleaned text of every document, since the examiner checks your vector table against it, and a slip at this stage carries through every later table.'],
    ['Do I write TF as a count or as a fraction of the document length?', 'For CBSE 417, as a count: the handbook reads TF straight from the document vector table. Some websites divide by the document length; that is a different convention and will not match the scheme. In our worked corpus, dog has TF 2 in the first document, not 2 out of 8, and that count is what you multiply by the log.'],
    ['Is a TFIDF calculation asked in the board exam?', 'TFIDF is listed under text processing in the theory part of Unit 6 for 2026-27, and a small-corpus calculation suits a four-mark question. The 2026-27 sample paper for 417 is not out yet, so we cannot say exactly how it will be asked this year.'],
    ['Is this practised in your classes?', 'Yes. Corpora are worked together on Monday and solved alone under time on Wednesday, with each step marked on screen, and TFIDF appears in the full mocks. It is covered by the monthly fee shown on this page, for the batch or one to one. The first class is a free demo.']
  ],
  startH2: 'Work a corpus with a teacher, free',
  startHtml: `        <p>In the free first class your child normalises a short three-document corpus, builds the vector table and computes two TFIDF values with the teacher watching each step. Afterwards the mentor tells you where the method holds and where it slips, and whether the batch or one to one would be the better fit.</p>
        <p>The rest of the unit, from stages to chatbots, is on <a class="bx-link" href="/cbse-class-10-ai-nlp-questions">NLP class 10 questions and answers</a>.</p>`,
  footerTag: 'CBSE 417 &middot; Bag of Words and TFIDF'
};
