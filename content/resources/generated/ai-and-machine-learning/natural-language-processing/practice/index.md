---
title: "Practice: Natural Language Processing (NLP) Fundamentals"
description: "55 practice problems for Natural Language Processing (NLP) Fundamentals in AI and Machine Learning"
slug: natural-language-processing-practice
canonical: https://learn.modernagecoders.com/resources/ai-and-machine-learning/natural-language-processing/practice/
category: "AI and Machine Learning"
---
# Practice: Natural Language Processing (NLP) Fundamentals

**Total questions:** 55

## Topic-Specific Questions

### Q1. [Easy] What is the output?

```
text = "Hello World! NLP is GREAT."
print(text.lower())
```

*Hint:* lower() converts all characters to lowercase.

**Answer:** `hello world! nlp is great.`

The `lower()` method converts all uppercase characters to lowercase. This is the first step in text preprocessing to ensure 'NLP' and 'nlp' are treated as the same word.

### Q2. [Easy] What does this produce?

```
import re
text = "Call me at 9876543210 or email abc@xyz.com!"
cleaned = re.sub(r'[^a-zA-Z\s]', '', text)
print(cleaned)
```

*Hint:* The regex keeps only letters and whitespace.

**Answer:** `Call me at  or email abcxyzcom`

The regex `[^a-zA-Z\s]` matches any character that is NOT a letter or whitespace. `re.sub` replaces these with empty string, removing numbers, @, ., and ! but keeping letters and spaces.

### Q3. [Easy] What is tokenization in NLP?

*Hint:* It breaks text into individual units.

**Answer:** Tokenization is the process of splitting text into individual tokens, usually words or subwords. For the sentence 'Natural language processing is fascinating', tokenization produces ['Natural', 'language', 'processing', 'is', 'fascinating']. It is a fundamental first step in NLP because models need to process individual units, not continuous strings of text.

Different tokenizers handle edge cases differently. 'don't' might become ['do', 'n\'t'] or ['don', 't']. Subword tokenizers (BPE, WordPiece) used by Transformers break rare words into pieces: 'preprocessing' -> ['pre', 'process', 'ing'].

### Q4. [Easy] What are stop words and why do we remove them?

*Hint:* They are common words that appear in almost every sentence.

**Answer:** Stop words are extremely common words like 'the', 'is', 'a', 'an', 'in', 'at', 'of' that appear in nearly every sentence but carry little meaning for most NLP tasks. We remove them to reduce noise and dimensionality. After removing stop words from 'machine learning is a fascinating field', we get 'machine learning fascinating field' -- the core meaning is preserved with fewer tokens.

NLTK's English stop words list has about 179 words. However, stop word removal is not always appropriate -- for sentiment analysis, words like 'not' and 'no' are crucial and should be kept.

### Q5. [Easy] What is the difference?

```
from nltk.stem import PorterStemmer
stemmer = PorterStemmer()
words = ['running', 'studies', 'better']
for w in words:
    print(f"{w} -> {stemmer.stem(w)}")
```

*Hint:* Stemming chops off suffixes using rules.

**Answer:** `running -> run`
`studies -> studi`
`better -> better`

Stemming applies rule-based suffix removal. 'running' -> 'run' (correct), 'studies' -> 'studi' (not a real word!), 'better' -> 'better' (no rule matches). Stemming is fast but imprecise. Lemmatization would produce: running -> run, studies -> study, better -> good.

### Q6. [Easy] What shape does CountVectorizer produce?

```
from sklearn.feature_extraction.text import CountVectorizer
corpus = ["I love coding", "coding is fun", "I love fun"]
vec = CountVectorizer()
X = vec.fit_transform(corpus)
print(f"Shape: {X.shape}")
print(f"Vocabulary: {vec.get_feature_names_out()}")
```

*Hint:* Rows = documents, columns = unique words.

**Answer:** `Shape: (3, 4)`
`Vocabulary: ['coding' 'fun' 'is' 'love']`

3 documents, 4 unique words (after removing single-character tokens by default). Note: 'I' is excluded because CountVectorizer ignores single-character tokens by default. Each row represents a document, each column a word, values are counts.

### Q7. [Medium] Explain the difference between TF and IDF. Why is TF-IDF better than raw word counts?

*Hint:* TF measures local importance, IDF measures global distinctiveness.

**Answer:** TF (Term Frequency) measures how often a word appears in a specific document. A word mentioned 5 times is probably important to that document. IDF (Inverse Document Frequency) measures how distinctive a word is across the corpus: IDF = log(N/df) where N is total documents and df is documents containing the word. A word in all documents (like 'the') gets low IDF. A word in only 1 document gets high IDF. TF-IDF = TF x IDF. It is better than raw counts because it down-weights common words (high TF but low IDF) and up-weights distinctive words (moderate TF but high IDF).

In a corpus about AI, the word 'the' might have high TF in every document but very low IDF (appears everywhere). The word 'backpropagation' might have moderate TF in one document but very high IDF (appears in few documents). TF-IDF correctly identifies 'backpropagation' as more informative.

### Q8. [Medium] What is the difference between CBOW and Skip-gram in Word2Vec?

*Hint:* One predicts the center word from context; the other predicts context from the center word.

**Answer:** CBOW (Continuous Bag of Words) takes surrounding context words as input and predicts the center word. For 'the cat [?] on the mat', it uses ['the', 'cat', 'on', 'the'] to predict 'sat'. Skip-gram does the reverse: it takes the center word and predicts the surrounding context words. Given 'sat', it predicts ['the', 'cat', 'on', 'the']. Skip-gram works better for rare words and larger datasets because each word generates multiple training examples. CBOW is faster to train and works better for frequent words.

Skip-gram: one word -> many predictions (more training signal per word). CBOW: many words -> one prediction (faster, smoother representations for common words). In practice, Skip-gram is more commonly used.

### Q9. [Medium] What is the key difference in these TF-IDF scores?

```
from sklearn.feature_extraction.text import TfidfVectorizer
docs = ["machine learning", "deep learning", "machine deep"]
tfidf = TfidfVectorizer()
X = tfidf.fit_transform(docs)
vocab = tfidf.get_feature_names_out()
for i, word in enumerate(vocab):
    scores = [f"{X[j, i]:.3f}" for j in range(3)]
    print(f"{word}: {scores}")
```

*Hint:* Words appearing in fewer documents get higher IDF.

**Answer:** 'learning' appears in 2/3 docs (lower IDF), 'machine' appears in 2/3 docs (lower IDF), 'deep' appears in 2/3 docs (lower IDF). All words appear in the same fraction of documents, so their IDF values are similar. The differences come from TF (term frequency within each document).

In this small example, all words appear in exactly 2 out of 3 documents, so they have the same IDF. The TF-IDF scores differ only based on term frequency (how many times each word appears in each document, normalized by document length).

### Q10. [Medium] Why are dense word vectors (embeddings) better than sparse vectors (one-hot or BoW) for deep learning?

*Hint:* Think about dimensionality, semantic similarity, and how neural networks process data.

**Answer:** Dense vectors are better because: (1) Dimensionality -- dense vectors are 100-300 dimensions vs 50,000+ for sparse. Neural networks train faster with fewer dimensions. (2) Semantic similarity -- similar words have similar vectors (cosine similarity). Sparse vectors have zero similarity for all word pairs. (3) Generalization -- if the model learns 'excellent' is positive, it automatically knows 'great' is positive too (similar vectors). With sparse vectors, each word must be learned independently. (4) Compositionality -- dense vectors support arithmetic: king - man + woman = queen. (5) Pre-training -- embeddings trained on billions of words capture rich linguistic knowledge that transfers to downstream tasks.

In one-hot encoding, 'cat' = [0,0,1,0,...] and 'kitten' = [0,0,0,1,...]. Their dot product is 0 (no similarity). In embedding space, vector('cat') and vector('kitten') would be very close, capturing their semantic relationship.

### Q11. [Medium] Why does this code produce a data leakage error?

```
tfidf = TfidfVectorizer()
X_train = tfidf.fit_transform(train_texts)
X_test = tfidf.fit_transform(test_texts)  # Bug here
```

*Hint:* fit_transform() re-learns the vocabulary.

**Answer:** Calling `fit_transform()` on test data re-fits the vectorizer, creating a new vocabulary and new IDF values from test data. This is data leakage -- the model benefits from information it should not have. It also creates a different feature space, so the features do not align between train and test. The fix is to use `tfidf.transform(test_texts)` which applies the vocabulary and IDF learned from training data.

fit_transform() = fit() + transform(). On test data, you should only transform() using the statistics learned from training data. This applies to all scikit-learn transformers: TfidfVectorizer, StandardScaler, MinMaxScaler, etc.

### Q12. [Hard] What is the role of ngram_range=(1, 2) in TfidfVectorizer? When is it important?

*Hint:* It includes both single words and word pairs as features.

**Answer:** ngram_range=(1, 2) creates features from both unigrams (single words) and bigrams (consecutive word pairs). For 'not good movie', the features include: unigrams ['not', 'good', 'movie'] and bigrams ['not good', 'good movie']. This is important for capturing negation and multi-word expressions. Without bigrams, 'not good' becomes 'not' + 'good', and the model might see 'good' as positive. With bigrams, 'not good' is a single feature that the model can learn is negative. Bigrams are especially important for sentiment analysis.

Trade-off: bigrams increase the vocabulary size significantly (every word pair becomes a feature). max_features can limit this. Trigrams (ngram_range=(1,3)) capture even more context but at the cost of very high dimensionality.

### Q13. [Hard] Meera has a dataset of 500 customer reviews and needs to build a text classifier. Should she use TF-IDF + SVM or Embeddings + LSTM? Why?

*Hint:* Consider dataset size and model complexity.

**Answer:** Meera should use TF-IDF + SVM. With only 500 reviews: (1) An LSTM with Embedding layer has too many parameters for so little data and will overfit. The Embedding layer alone for a 10,000-word vocabulary with 64 dimensions has 640,000 parameters. (2) TF-IDF + SVM works well with small datasets because SVM is designed for high-dimensional, sparse data and generalizes well with limited examples. (3) TF-IDF does not need to learn word representations -- it uses statistical word weighting that works immediately. (4) Training is seconds (SVM) vs minutes (LSTM). If she needs LSTM-level performance, she should use pre-trained embeddings (GloVe, Word2Vec) with the Embedding layer frozen.

The rule of thumb: use TF-IDF + ML for datasets under ~10,000 samples. Use embeddings + deep learning for larger datasets. Always start with the simpler approach and only move to deep learning if it provides measurable improvement.

### Q14. [Hard] What does the vector arithmetic 'king - man + woman = queen' actually mean in embedding space?

*Hint:* Think about what direction each subtraction and addition encodes.

**Answer:** In the embedding space, the vector difference (king - man) captures the concept of 'royalty' independent of gender. Adding 'woman' to this 'royalty' direction yields a point closest to 'queen'. More precisely: the vector from 'man' to 'king' represents the gender-to-royalty transformation. Applying this same transformation to 'woman' (by adding the same difference vector) lands near 'queen'. This works because Word2Vec embeddings organize so that consistent relationships between word pairs correspond to consistent directions in vector space. It is not exact (the nearest word to king-man+woman might not always be queen), but it demonstrates that embeddings capture semantic relationships as geometric directions.

Other examples that work: Paris - France + Italy = Rome (capital-country relationship), bigger - big + small = smaller (comparative relationship). These analogies emerge from the training data patterns without any explicit supervision.

## Mixed Questions

### Q1. [Easy] What does this produce?

```
text = "I love NLP and AI"
tokens = text.lower().split()
print(tokens)
```

*Hint:* lower() then split() on whitespace.

**Answer:** `['i', 'love', 'nlp', 'and', 'ai']`

lower() converts to lowercase, split() splits on whitespace. Simple tokenization. Note that this does not handle punctuation (e.g., 'AI!' would remain as 'ai!').

### Q2. [Easy] What is the difference between stemming and lemmatization?

*Hint:* One uses rules, the other uses a dictionary.

**Answer:** Stemming uses rule-based suffix stripping to reduce words to a root form. It is fast but can produce non-words ('studies' -> 'studi'). Lemmatization uses vocabulary lookup and morphological analysis to reduce words to their dictionary base form (lemma). It always produces real words ('studies' -> 'study', 'better' -> 'good') but is slower. Choose stemming for speed when exact words do not matter; choose lemmatization when you need valid dictionary words.

Stemming: running->run, flies->fli, better->better. Lemmatization: running->run, flies->fly, better->good. Lemmatization needs part-of-speech info for best results (e.g., 'better' as adjective -> 'good').

### Q3. [Easy] How many features does TfidfVectorizer with max_features=100 produce?

```
tfidf = TfidfVectorizer(max_features=100)
X = tfidf.fit_transform(corpus_of_1000_documents)
print(X.shape)
```

*Hint:* max_features limits the vocabulary to the top N words by term frequency.

**Answer:** `(1000, 100)`

max_features=100 keeps only the 100 most frequent words in the vocabulary. 1000 documents with 100 features each produces a (1000, 100) matrix. This limits dimensionality and focuses on the most common words.

### Q4. [Medium] What is the NLP pipeline? List the steps in order.

*Hint:* From raw text to prediction.

**Answer:** The NLP pipeline: (1) Raw text input. (2) Text preprocessing: lowercasing, removing punctuation/URLs/HTML, tokenization. (3) Text cleaning: stop word removal, stemming/lemmatization. (4) Feature extraction: convert text to numbers (BoW, TF-IDF, or word embeddings). (5) Model training: feed numerical features to a classifier (Naive Bayes, SVM, LSTM, Transformer). (6) Prediction: the model outputs a label (sentiment, spam/ham, topic) or other structured output. Each step must be consistent between training and inference.

The pipeline ensures reproducibility. In production, the same preprocessing and feature extraction steps must be applied to new incoming text. Scikit-learn's Pipeline class and Keras models encapsulate this.

### Q5. [Medium] What happens when you process a new word that was not in the training data?

```
tokenizer = Tokenizer(num_words=100, oov_token='')
tokenizer.fit_on_texts(['I love machine learning'])
new_seq = tokenizer.texts_to_sequences(['I love quantum computing'])
print(new_seq)
```

*Hint:* Unknown words become the OOV token.

**Answer:** `[[2, 3, 1, 1]]` where 1 is the OOV index.

'I' -> 2, 'love' -> 3, 'quantum' -> 1 (OOV, not in vocabulary), 'computing' -> 1 (OOV). The oov_token ensures unknown words get a valid index instead of being silently dropped.

### Q6. [Medium] What is the vocabulary of this vectorizer?

```
from sklearn.feature_extraction.text import TfidfVectorizer
tfidf = TfidfVectorizer(ngram_range=(1, 2), max_features=8)
tfidf.fit(["I love deep learning", "deep learning is great"])
print(tfidf.get_feature_names_out())
```

*Hint:* ngram_range=(1,2) includes unigrams and bigrams. max_features keeps top 8.

**Answer:** The vocabulary includes the top 8 features from unigrams and bigrams, such as: `['deep', 'deep learning', 'great', 'is', 'is great', 'learning', 'learning is', 'love']` (exact order may vary by TF-IDF ranking).

With ngram_range=(1,2), both single words ('deep', 'learning') and word pairs ('deep learning', 'learning is') are considered features. max_features=8 selects the top 8 by overall term frequency across the corpus.

### Q7. [Medium] Why should you use transform() instead of fit_transform() on test data when using TfidfVectorizer?

*Hint:* fit_transform() learns new statistics from the data it processes.

**Answer:** fit_transform() on test data re-learns the vocabulary and IDF values from test data, causing two problems: (1) Data leakage -- the model benefits from test data statistics it should not know. (2) Feature misalignment -- the test vocabulary may differ from the training vocabulary, so features do not correspond to the same words. transform() applies the vocabulary and IDF values learned from training data to new text, ensuring consistent feature representation. This rule applies to all scikit-learn transformers.

In production, when a new text arrives, you can only transform() it using the saved vectorizer. You cannot fit a new vocabulary for every new input. The same principle applies to Tokenizer in Keras -- fit on training data only.

### Q8. [Medium] What is the difference between these two approaches?

```
# Approach 1: Learned embeddings
Embedding(10000, 64, trainable=True)

# Approach 2: Pre-trained embeddings (frozen)
Embedding(10000, 64, weights=[glove_matrix], trainable=False)
```

*Hint:* One learns from scratch, the other uses pre-trained knowledge.

**Answer:** Approach 1 initializes embeddings randomly and learns them from your training data. Good when you have lots of data (100K+ samples). Approach 2 loads pre-trained GloVe/Word2Vec embeddings and freezes them. Good when you have limited data -- the embeddings already capture word relationships from billions of tokens. You can also use trainable=True with pre-trained weights to fine-tune them for your specific task.

Pre-trained embeddings provide a massive head start. A randomly initialized embedding for 'king' and 'queen' starts as unrelated vectors. Pre-trained embeddings already know they are related, saving your model from having to learn this from scratch.

### Q9. [Hard] Explain why TF-IDF + SVM often performs as well as deep learning for text classification on small to medium datasets.

*Hint:* Consider the properties of TF-IDF features and SVM's capabilities.

**Answer:** Several reasons: (1) TF-IDF captures word importance effectively through statistical weighting, which is often sufficient for classification. (2) SVM is specifically designed for high-dimensional, sparse data (which is exactly what TF-IDF produces). (3) SVM finds the maximum-margin hyperplane, which generalizes well even with limited data. (4) Bigrams in TF-IDF (ngram_range=(1,2)) capture some word order information. (5) Deep learning models (LSTM, Transformer) need large datasets to learn good representations from scratch. With limited data, the Embedding layer alone has more parameters than the entire TF-IDF+SVM pipeline. (6) Deep learning's advantage (learning complex patterns) only materializes with sufficient data.

Research consistently shows that for datasets under ~10K samples, well-tuned TF-IDF + SVM matches or beats neural approaches. The deep learning advantage appears with larger datasets (50K+) and more complex tasks (multi-hop reasoning, long documents).

### Q10. [Hard] What are the limitations of Bag of Words and TF-IDF? What kinds of text understanding do they fail at?

*Hint:* Think about word order, context, and polysemy.

**Answer:** Limitations: (1) No word order -- 'dog bites man' and 'man bites dog' produce identical vectors. (2) No context -- 'bank' (financial) and 'bank' (river) get the same representation. (3) No compositionality -- cannot understand phrases ('not good' is just 'not' + 'good'). (4) Sparse, high-dimensional -- vocabulary of 50K words creates 50K-dimensional sparse vectors. (5) No generalization across synonyms -- 'excellent' and 'great' are completely different features with zero similarity. (6) Cannot handle out-of-vocabulary words. These limitations are why word embeddings and neural models were developed.

Bigrams partially address the word order issue. Word embeddings address the similarity and compositionality issues. Transformers with contextualized embeddings (BERT) address the polysemy issue by giving 'bank' different vectors depending on context.

### Q11. [Hard] What would happen if you remove stop words for this NER task?

```
# Text: "The Bank of India announced new policies"
# After stop word removal: "Bank India announced new policies"
# NER on original: "Bank of India" -> ORG
# NER on cleaned: "Bank" -> ?, "India" -> GPE
```

*Hint:* Stop word removal can break multi-word entities.

**Answer:** Removing stop words destroys the multi-word entity 'Bank of India'. The NER model can no longer recognize it as an organization name because 'of' (a stop word) is removed. 'Bank' alone might be classified as a common noun, and 'India' separately as a location. The correct entity (a specific bank named 'Bank of India') is lost. This is why stop word removal should NOT be applied before NER or any task where entity boundaries and multi-word expressions matter.

General rule: do not remove stop words before NER, dependency parsing, or machine translation. These tasks need the complete sentence structure. Stop word removal is appropriate for topic modeling, text classification (with caution about negation), and information retrieval.

### Q12. [Hard] Rajesh wants to build a text classifier for legal documents in Hindi. What challenges will he face compared to English NLP?

*Hint:* Consider tokenization, pre-trained resources, and morphological complexity.

**Answer:** Challenges for Hindi NLP: (1) Tokenization is harder -- Hindi uses Devanagari script, words may have different spellings, and compound words are common. (2) Limited pre-trained resources -- far fewer pre-trained embeddings and language models compared to English. GloVe and Word2Vec trained on Hindi corpora are smaller. (3) Morphological richness -- Hindi has complex inflections (gender, number, case), requiring more sophisticated stemming/lemmatization. (4) Smaller labeled datasets -- legal documents in Hindi are rare in public datasets. (5) Code-mixing -- many Hindi texts mix Hindi and English words (Hinglish), requiring special handling. (6) Standard NLP tools (NLTK, spaCy) have limited Hindi support compared to English. Solutions: use multilingual models (mBERT, XLM-RoBERTa), Hindi-specific tokenizers (iNLTK, Stanza), and consider few-shot learning approaches.

Multilingual BERT (mBERT) and XLM-RoBERTa are trained on 100+ languages including Hindi. They provide a strong starting point for Hindi NLP tasks without needing Hindi-specific pre-training from scratch.

### Q13. [Easy] What does this code do?

```
from sklearn.feature_extraction.text import TfidfVectorizer
tfidf = TfidfVectorizer(stop_words='english')
X = tfidf.fit_transform(['I love machine learning'])
print(tfidf.get_feature_names_out())
```

*Hint:* stop_words='english' removes common English words.

**Answer:** `['learning' 'love' 'machine']` (approximately -- 'I' is removed as a stop word)

Setting stop_words='english' automatically removes common English stop words from the vocabulary. 'I' is a stop word and is excluded. The remaining content words ('love', 'machine', 'learning') form the vocabulary.

### Q14. [Medium] What is the advantage of using pre-trained word embeddings (GloVe, Word2Vec) over training embeddings from scratch?

*Hint:* Think about the amount of data needed to learn good word representations.

**Answer:** Pre-trained embeddings are trained on billions of words (Google News for Word2Vec, Wikipedia + Common Crawl for GloVe) and capture rich semantic relationships that your small dataset cannot learn. Training embeddings from scratch on, say, 10,000 reviews would produce poor representations because there is not enough context to learn meaningful word relationships. Pre-trained embeddings provide a massive head start -- 'king' and 'queen' already have similar vectors. You can use them as fixed features (trainable=False) or fine-tune them (trainable=True) for your specific task.

This is transfer learning for word representations. Just as VGG16 pre-trained on ImageNet transfers visual features to new tasks, GloVe pre-trained on 840 billion tokens transfers linguistic knowledge to new NLP tasks.

### Q15. [Medium] What is the output shape of TfidfVectorizer on 100 documents?

```
tfidf = TfidfVectorizer(max_features=5000)
X = tfidf.fit_transform(corpus_of_100_documents)
print(X.shape)
```

*Hint:* Rows = documents, columns = vocabulary features.

**Answer:** `(100, 5000)` or fewer columns if the corpus has fewer than 5000 unique words.

TfidfVectorizer creates a matrix with one row per document and one column per word in the vocabulary. max_features=5000 caps the vocabulary at the top 5000 words. The actual number of columns may be less if the corpus has fewer than 5000 unique words.

### Q16. [Hard] How would you handle a dataset where some reviews are in English and some are in Hindi for sentiment analysis?

*Hint:* Think about multilingual models and consistent preprocessing.

**Answer:** Options: (1) Use a multilingual pre-trained model like mBERT (multilingual BERT) or XLM-RoBERTa, which understand 100+ languages including both English and Hindi. These models produce language-agnostic representations where sentiment patterns transfer across languages. (2) Translate all texts to one language before processing, though this introduces translation errors. (3) Train separate models for each language. (4) Use multilingual TF-IDF with appropriate tokenization for each language. The best approach is (1) -- multilingual Transformers handle code-mixed text naturally and have been shown to transfer sentiment understanding across languages.

Multilingual models are trained on Wikipedia articles in 100+ languages. They learn a shared representation space where similar meanings in different languages have similar vectors. This is why you can fine-tune mBERT on English sentiment data and it works reasonably well on Hindi text too.

## Multiple Choice Questions

### Q1. [Easy] What is the first step in most NLP pipelines?

**Answer:** B

**B is correct.** Text preprocessing (lowercasing, removing punctuation, tokenization) is always the first step. Raw text must be cleaned and standardized before any model can process it.

### Q2. [Easy] What does tokenization do?

**Answer:** B

**B is correct.** Tokenization breaks text into individual units (tokens), usually words. 'I love NLP' becomes ['I', 'love', 'NLP']. It is a fundamental preprocessing step.

### Q3. [Easy] What does TF-IDF stand for?

**Answer:** B

**B is correct.** TF-IDF = Term Frequency (how often a word appears in a document) x Inverse Document Frequency (how distinctive the word is across all documents).

### Q4. [Easy] Which of these words would typically be considered a stop word in English?

**Answer:** B

**B is correct.** 'the' is one of the most common English stop words. Stop words are extremely frequent words that carry little meaning (the, is, a, an, in, at). Content words like 'algorithm', 'neural', 'python' are not stop words.

### Q5. [Easy] What is Bag of Words?

**Answer:** C

**C is correct.** Bag of Words creates a vector by counting how many times each word appears in a document. It completely ignores word order (like throwing words into a bag).

### Q6. [Medium] Why is TF-IDF generally better than raw Bag of Words?

**Answer:** C

**C is correct.** TF-IDF weighs words by their importance. Common words across all documents get low scores (low IDF). Words distinctive to specific documents get high scores (high IDF). BoW treats all words equally based on count alone.

### Q7. [Medium] What is the key advantage of word embeddings over one-hot encoding?

**Answer:** B

**B is correct.** Word embeddings map words to dense vectors where semantically similar words (king/queen, cat/kitten) have similar vectors. One-hot encoding produces sparse, orthogonal vectors where every word pair has zero similarity.

### Q8. [Medium] In Word2Vec Skip-gram, what is the model trained to do?

**Answer:** B

**B is correct.** Skip-gram predicts context words from the center word. Given 'sat', it predicts surrounding words like 'cat', 'on', 'mat'. CBOW does the reverse: predicts the center word from context.

### Q9. [Medium] Which sklearn method should be used on test data: fit_transform() or transform()?

**Answer:** C

**C is correct.** fit_transform() on training data learns the vocabulary/statistics AND transforms. transform() on test data uses the SAME learned vocabulary/statistics to transform new data. This prevents data leakage.

### Q10. [Medium] What does ngram_range=(1, 2) do in TfidfVectorizer?

**Answer:** B

**B is correct.** ngram_range=(1, 2) includes unigrams (single words like 'good') and bigrams (word pairs like 'not good') as features. This helps capture phrases and negations.

### Q11. [Hard] What does IDF equal for a word that appears in every document of a corpus?

**Answer:** B

**B is correct.** IDF = log(N / df). If a word appears in all N documents: IDF = log(N/N) = log(1) = 0. Words appearing everywhere contribute zero information for distinguishing documents, so their TF-IDF score is zero.

### Q12. [Hard] Which NLP task identifies names of people, organizations, and locations in text?

**Answer:** B

**B is correct.** NER (Named Entity Recognition) identifies and classifies entities: PERSON (Sundar Pichai), ORG (Google), GPE (Bangalore), DATE (March 15). It is a key information extraction technique.

### Q13. [Hard] Which statement about GloVe is correct?

**Answer:** B

**B is correct.** GloVe (Global Vectors) learns embeddings by factorizing the global word-word co-occurrence matrix. Unlike Word2Vec which uses a sliding window, GloVe uses global statistics of the entire corpus. The result is dense vectors (not sparse) that work for multiple languages.

### Q14. [Hard] For a small dataset of 500 text samples, which approach is most appropriate?

**Answer:** B

**B is correct.** With 500 samples, TF-IDF + SVM is the best simple approach (SVM handles high dimensions well with limited data). Alternatively, use pre-trained embeddings (GloVe) to leverage knowledge from billions of tokens. Training a Transformer or Word2Vec from scratch requires vastly more data.

### Q15. [Hard] What is the famous Word2Vec analogy equation?

**Answer:** B

**B is correct.** king - man + woman = queen. The vector difference (king - man) captures the royalty concept independent of gender. Adding woman to this royalty direction yields queen. This demonstrates that embeddings capture semantic relationships as geometric directions.

### Q16. [Easy] What does lowercasing do in text preprocessing?

**Answer:** B

**B is correct.** Lowercasing normalizes text so that 'The', 'THE', and 'the' are all treated as the same token. This reduces vocabulary size and improves model generalization.

### Q17. [Easy] What is the output of CountVectorizer?

**Answer:** B

**B is correct.** CountVectorizer creates a document-term matrix where each row is a document, each column is a word from the vocabulary, and values are word counts. This is the Bag of Words representation.

### Q18. [Medium] What is the difference between stemming and lemmatization?

**Answer:** B

**B is correct.** Stemming applies rule-based suffix removal: 'studies' -> 'studi' (not a word). Lemmatization uses morphological analysis: 'studies' -> 'study' (valid word). Stemming is faster; lemmatization is more accurate.

### Q19. [Medium] What does a high IDF value for a word indicate?

**Answer:** B

**B is correct.** IDF = log(N/df). A word appearing in few documents has a small df (document frequency), giving a high IDF. This word is distinctive and informative for distinguishing documents. A word in all documents has IDF = 0.

### Q20. [Hard] Why do word embeddings support vector arithmetic like king - man + woman = queen?

**Answer:** B

**B is correct.** Word2Vec and GloVe learn that words appearing in similar contexts get similar vectors. The king-queen and man-woman relationships involve the same gender dimension shift. This emergent property arises from training on billions of words, not from explicit programming.

### Q21. [Easy] What does NER stand for in NLP?

**Answer:** B

**B is correct.** NER (Named Entity Recognition) identifies and classifies named entities in text into categories like PERSON, ORGANIZATION, LOCATION, and DATE.

### Q22. [Medium] What does max_features=10000 do in TfidfVectorizer?

**Answer:** B

**B is correct.** max_features limits the vocabulary size to the top N most frequent terms across the corpus. This reduces dimensionality and focuses on the most common and potentially useful words.

### Q23. [Hard] When should you NOT remove stop words in NLP?

**Answer:** C

**C is correct.** In sentiment analysis, removing 'not' from 'not good' leaves only 'good', reversing the intended meaning. Negation words (not, no, never) are critical for sentiment analysis and should be preserved.

### Q24. [Hard] What is the key difference between CBOW and Skip-gram in Word2Vec?

**Answer:** A

**A is correct.** CBOW (Continuous Bag of Words) predicts the center word from surrounding context. Skip-gram predicts surrounding context from the center word. Both are unsupervised and produce dense vectors. Skip-gram works better for rare words and larger datasets.

### Q25. [Medium] What is a Pipeline in scikit-learn?

**Answer:** B

**B is correct.** A Pipeline chains multiple steps (e.g., TfidfVectorizer + LinearSVC) into one object. Calling fit() trains all steps, and predict() applies all steps. This ensures consistent preprocessing and prevents data leakage.

---

*Notes: https://learn.modernagecoders.com/resources/ai-and-machine-learning/natural-language-processing/*
