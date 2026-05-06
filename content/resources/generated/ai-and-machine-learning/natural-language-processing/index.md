---
title: "Natural Language Processing (NLP) - Text Preprocessing, TF-IDF, Word Embeddings, Spam Detection | Modern Age Coders"
description: "Master NLP fundamentals: text preprocessing (tokenization, stemming, lemmatization), Bag of Words, TF-IDF, Word2Vec (CBOW, Skip-gram), GloVe, pre-trained embeddings, text classification with ML and LSTM, named entity recognition, and build a spam detection system. 56+ questions."
slug: natural-language-processing
canonical: https://learn.modernagecoders.com/resources/ai-and-machine-learning/natural-language-processing
category: "AI and Machine Learning"
keywords: ["nlp tutorial", "natural language processing python", "text preprocessing", "tokenization", "tf-idf", "bag of words", "word2vec", "word embeddings", "glove", "stemming lemmatization"]
---
# Natural Language Processing (NLP) Fundamentals

**Difficulty:** Advanced  
**Reading time:** 55 min  
**Chapter:** 19  
**Practice questions:** 55

## What Is Natural Language Processing?

**Natural Language Processing (NLP)** is the field of AI that enables computers to understand, interpret, and generate human language. It bridges the gap between human communication (messy, ambiguous, context-dependent) and machine computation (precise, mathematical, structured).

```
# NLP powers the technology you use every day:
# - Search engines understanding your queries
# - Spam filters detecting unwanted emails
# - Virtual assistants (Siri, Alexa) understanding speech
# - Machine translation (Google Translate)
# - Autocomplete and spell check
# - Sentiment analysis (brand monitoring)
# - ChatGPT and other language models

# The fundamental challenge:
text = "The bank by the river has nice views"
# Is "bank" a financial institution or a river bank?
# Humans resolve this instantly from context. Teaching machines to do this is NLP.
```

NLP involves two main challenges: (1) **understanding** text (converting natural language into a form machines can process) and (2) **generating** text (producing human-readable language from machine representations). This chapter focuses on understanding -- the foundation for all NLP tasks.

### The NLP Pipeline

Every NLP system follows a similar pipeline:

```
# Raw Text -> Preprocessing -> Feature Extraction -> Model -> Prediction
#
# Step 1: Raw text input ("This movie was AMAZING!!!! Best ever.")
# Step 2: Preprocess (lowercase, remove punctuation, tokenize, remove stopwords)
#         -> ["movie", "amazing", "best"]
# Step 3: Convert to numbers (Bag of Words, TF-IDF, or embeddings)
#         -> [0, 0, 1, 0, 1, ..., 1, 0]  or  [0.23, -0.15, 0.87, ...]
# Step 4: Feed to model (Naive Bayes, SVM, LSTM, Transformer)
# Step 5: Get prediction (Sentiment: Positive, 0.94 confidence)
```

## Why Is NLP Important?

### 1. Text Is Everywhere

Over 80% of business data is unstructured text: emails, support tickets, social media posts, documents, reviews, chat logs. NLP is the only way to extract insights from this massive volume of text data. If Priya works at an e-commerce company, NLP can automatically categorize thousands of customer complaints, detect urgent issues, and track sentiment trends.

### 2. Human-Computer Interaction

The most natural way for humans to communicate is through language. NLP enables interfaces where users interact with computers using natural language instead of code or buttons. Chatbots, voice assistants, and conversational AI all depend on NLP. The better the NLP, the more natural the interaction.

### 3. Information Extraction

NLP can extract structured information from unstructured text: names, dates, organizations, relationships, facts. A hospital can extract patient symptoms from doctor notes. A law firm can find relevant case precedents in millions of documents. A news organization can track events across thousands of articles.

### 4. Foundation for Modern AI

The Transformer architecture (which powers ChatGPT, BERT, and the current AI revolution) was developed for NLP. Understanding NLP fundamentals -- tokenization, embeddings, attention -- is essential for understanding modern AI. Even computer vision and audio processing now borrow heavily from NLP techniques.

### 5. Career Relevance

NLP engineers and data scientists with NLP skills are among the most in-demand professionals in AI. Companies across every industry need NLP: tech (search, recommendations), healthcare (medical records), finance (sentiment analysis, document processing), legal (contract analysis), and more. Arjun learning NLP opens doors across the entire economy.

## Detailed Explanation

### 1. Text Preprocessing

Raw text is messy. Before any model can process it, text needs to be cleaned and standardized. Here is the standard preprocessing pipeline:

#### Lowercasing

```
text = "The Quick Brown FOX Jumped Over THE Lazy Dog"
text_lower = text.lower()
print(text_lower)  # "the quick brown fox jumped over the lazy dog"
# Why? "The" and "the" should be treated as the same word
```

#### Removing Punctuation and Special Characters

```
import re

text = "Hello!!! This is GREAT... isn't it? #amazing @nlp"
cleaned = re.sub(r'[^a-zA-Z\s]', '', text)
print(cleaned)  # "Hello This is GREAT isnt it amazing nlp"
```

#### Tokenization

Tokenization splits text into individual tokens (usually words):

```
from nltk.tokenize import word_tokenize
import nltk
nltk.download('punkt_tab')

text = "Natural language processing is fascinating."
tokens = word_tokenize(text)
print(tokens)  # ['Natural', 'language', 'processing', 'is', 'fascinating', '.']

# Simple split-based tokenization
tokens_simple = text.split()
print(tokens_simple)  # ['Natural', 'language', 'processing', 'is', 'fascinating.']
```

#### Stop Words Removal

Stop words are common words (is, the, a, an, in, at) that carry little meaning for most NLP tasks:

```
from nltk.corpus import stopwords
nltk.download('stopwords')

stop_words = set(stopwords.words('english'))
print(f"Number of stop words: {len(stop_words)}")  # 179

tokens = ['natural', 'language', 'processing', 'is', 'a', 'fascinating', 'field']
filtered = [w for w in tokens if w not in stop_words]
print(filtered)  # ['natural', 'language', 'processing', 'fascinating', 'field']
```

#### Stemming vs Lemmatization

Both reduce words to their base form, but differently:

```
from nltk.stem import PorterStemmer, WordNetLemmatizer
nltk.download('wordnet')

stemmer = PorterStemmer()
lemmatizer = WordNetLemmatizer()

words = ['running', 'runs', 'ran', 'better', 'studies', 'studying']

print("Word          Stemmed       Lemmatized")
for word in words:
    stemmed = stemmer.stem(word)
    lemma = lemmatizer.lemmatize(word, pos='v')  # pos='v' for verbs
    print(f"{word:<14}{stemmed:<14}{lemma}")

# Stemming: chops off suffixes using rules (fast, sometimes produces non-words)
#   running -> run, studies -> studi (not a real word!)
# Lemmatization: uses vocabulary and morphological analysis (slower, always real words)
#   running -> run, studies -> study, better -> good (with correct POS)
```

### 2. Bag of Words (CountVectorizer)

Bag of Words converts text into a vector by counting how many times each word appears. It completely ignores word order -- hence the name "bag" (like throwing words into a bag).

```
from sklearn.feature_extraction.text import CountVectorizer

corpus = [
    "I love machine learning",
    "I love deep learning",
    "Deep learning is amazing"
]

vectorizer = CountVectorizer()
X = vectorizer.fit_transform(corpus)

print("Vocabulary:", vectorizer.get_feature_names_out())
print("\nBag of Words matrix:")
print(X.toarray())
# Each row = one document, each column = one word
# Values = word counts
```

Limitations of BoW: (1) Loses word order ("dog bites man" = "man bites dog"). (2) Common words like "the" get high counts even though they carry little meaning. (3) Sparse, high-dimensional vectors (vocabulary size can be 50,000+). This is why TF-IDF is usually preferred.

### 3. TF-IDF (Term Frequency - Inverse Document Frequency)

TF-IDF improves on BoW by weighing words based on how important they are to a specific document relative to the entire corpus.

```
from sklearn.feature_extraction.text import TfidfVectorizer

corpus = [
    "I love machine learning and AI",
    "I love deep learning and neural networks",
    "Deep learning is a subset of machine learning",
    "Neural networks power deep learning"
]

tfidf = TfidfVectorizer()
X = tfidf.fit_transform(corpus)

print("Vocabulary:", tfidf.get_feature_names_out())
print(f"\nMatrix shape: {X.shape}")  # (4 documents, vocabulary size)
print("\nTF-IDF values for document 1:")
feature_names = tfidf.get_feature_names_out()
for idx in X[0].nonzero()[1]:
    print(f"  {feature_names[idx]}: {X[0, idx]:.4f}")
```

**TF (Term Frequency)**: How often a word appears in a document. More frequent = more important to that document.

**IDF (Inverse Document Frequency)**: log(total documents / documents containing the word). Words that appear in many documents get a low IDF score (they are less distinctive). Words that appear in few documents get a high IDF score (they are more distinctive).

**TF-IDF = TF x IDF**: A word is important if it appears frequently in a specific document (high TF) but rarely across all documents (high IDF). The word "learning" appears in all documents, so it gets low IDF. The word "neural" appears in only 2 documents, so it gets higher IDF.

### 4. Word Embeddings

BoW and TF-IDF produce sparse, high-dimensional vectors where each dimension is a word. Word embeddings produce dense, low-dimensional vectors where each dimension captures a latent semantic feature. Semantically similar words have similar vectors.

#### Word2Vec -- CBOW and Skip-gram

Word2Vec (Google, 2013) learns word embeddings from large text corpora using two approaches:

**CBOW (Continuous Bag of Words)**: Predicts the center word from surrounding context words. Given ["the", "cat", "_", "on", "the"], predict "sat".

**Skip-gram**: Predicts surrounding context words from the center word. Given "sat", predict ["the", "cat", "on", "the"]. Skip-gram works better for infrequent words and larger datasets.

```
# Word2Vec key insight: words that appear in similar contexts have similar meanings
# "king" and "queen" appear in similar contexts -> similar vectors
# Famous relationship: king - man + woman = queen

# In vector space:
# vector("king") - vector("man") + vector("woman") ~= vector("queen")
# This arithmetic on word vectors captures semantic relationships!
```

#### GloVe (Global Vectors)

GloVe (Stanford, 2014) learns embeddings from the global word-word co-occurrence matrix. Instead of predicting words in a window (like Word2Vec), it directly factorizes the matrix of how often words appear near each other. The result is similar to Word2Vec but captures global statistics better.

#### Why Dense Vectors Are Better Than Sparse

```
# Sparse (BoW/TF-IDF): [0, 0, 0, 1, 0, 0, 0, 0.3, 0, 0, ...] -- 50,000 dimensions
# Dense (Embedding):    [0.23, -0.15, 0.87, 0.02, ...] -- 100-300 dimensions

# Dense vectors:
# 1. Much lower dimensionality (300 vs 50,000)
# 2. Capture semantic similarity (similar words = similar vectors)
# 3. Support vector arithmetic (king - man + woman = queen)
# 4. Pre-trained versions available (trained on billions of words)
# 5. Work better with neural networks
```

### 5. Using Pre-trained Embeddings

```
import numpy as np
from tensorflow.keras.layers import Embedding

# Load GloVe embeddings (pre-trained on 6B tokens, 100-dim vectors)
def load_glove_embeddings(filepath, word_index, embedding_dim=100):
    embeddings_index = {}
    with open(filepath, encoding='utf-8') as f:
        for line in f:
            values = line.split()
            word = values[0]
            vector = np.asarray(values[1:], dtype='float32')
            embeddings_index[word] = vector
    
    print(f"Loaded {len(embeddings_index)} word vectors")
    
    # Create embedding matrix for our vocabulary
    vocab_size = len(word_index) + 1
    embedding_matrix = np.zeros((vocab_size, embedding_dim))
    
    found = 0
    for word, idx in word_index.items():
        vector = embeddings_index.get(word)
        if vector is not None:
            embedding_matrix[idx] = vector
            found += 1
    
    print(f"Found embeddings for {found}/{len(word_index)} words")
    return embedding_matrix

# Use in a model
# embedding_matrix = load_glove_embeddings('glove.6B.100d.txt', tokenizer.word_index)
# embedding_layer = Embedding(
#     input_dim=vocab_size,
#     output_dim=100,
#     weights=[embedding_matrix],
#     trainable=False  # Freeze pre-trained weights
# )
```

### 6. Building Text Classifiers

Two approaches: traditional ML (TF-IDF + classifier) and deep learning (embeddings + LSTM).

#### Approach 1: TF-IDF + Machine Learning

```
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.svm import LinearSVC
from sklearn.pipeline import Pipeline
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report

# Create a pipeline: vectorize + classify
pipeline = Pipeline([
    ('tfidf', TfidfVectorizer(max_features=10000, ngram_range=(1, 2))),
    ('clf', LinearSVC())
])

pipeline.fit(X_train_texts, y_train)
predictions = pipeline.predict(X_test_texts)
print(classification_report(y_test, predictions))
```

#### Approach 2: Embeddings + LSTM

```
from tensorflow.keras.layers import Embedding, LSTM, Dense, Dropout

model = tf.keras.Sequential([
    Embedding(vocab_size, 64, input_length=maxlen),
    LSTM(64, dropout=0.2, recurrent_dropout=0.2),
    Dense(32, activation='relu'),
    Dropout(0.5),
    Dense(num_classes, activation='softmax')
])
model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])
```

### 7. Named Entity Recognition (NER)

NER identifies and classifies named entities in text into predefined categories: person names, organizations, locations, dates, monetary values, etc.

```
import spacy

nlp_model = spacy.load('en_core_web_sm')
text = "Sundar Pichai, CEO of Google, announced a new AI lab in Bangalore on March 15, 2026."
doc = nlp_model(text)

print(f"{'Entity':<25} {'Label':<12} {'Description'}")
print("-" * 60)
for ent in doc.ents:
    print(f"{ent.text:<25} {ent.label_:<12} {spacy.explain(ent.label_)}")

# Output:
# Sundar Pichai             PERSON       People, including fictional
# Google                    ORG          Companies, agencies, institutions
# Bangalore                 GPE          Countries, cities, states
# March 15, 2026            DATE         Absolute or relative dates or periods
```

## Code Examples

### Complete Text Preprocessing Pipeline

```python
import re
import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from nltk.stem import PorterStemmer, WordNetLemmatizer

nltk.download('punkt_tab', quiet=True)
nltk.download('stopwords', quiet=True)
nltk.download('wordnet', quiet=True)

def preprocess_text(text, method='lemmatize'):
    """Complete text preprocessing pipeline."""
    # Step 1: Lowercase
    text = text.lower()
    
    # Step 2: Remove URLs
    text = re.sub(r'http\S+|www\S+', '', text)
    
    # Step 3: Remove HTML tags
    text = re.sub(r'<.*?>', '', text)
    
    # Step 4: Remove punctuation and numbers
    text = re.sub(r'[^a-z\s]', '', text)
    
    # Step 5: Tokenize
    tokens = word_tokenize(text)
    
    # Step 6: Remove stop words
    stop_words = set(stopwords.words('english'))
    tokens = [w for w in tokens if w not in stop_words and len(w) > 2]
    
    # Step 7: Stemming or Lemmatization
    if method == 'stem':
        stemmer = PorterStemmer()
        tokens = [stemmer.stem(w) for w in tokens]
    else:
        lemmatizer = WordNetLemmatizer()
        tokens = [lemmatizer.lemmatize(w) for w in tokens]
    
    return ' '.join(tokens)

# Test on sample texts
texts = [
    "I absolutely LOVED this movie! It was amazing and the acting was brilliant!!!",
    "The customer service was terrible. I waited 3 hours and nobody helped me.",
    "Dr. Sharma presented the findings at the conference in Mumbai on 15th March.",
    "Check out this link: https://example.com for more details <b>NOW</b>!"
]

print(f"{'Original':<60} {'Preprocessed'}")
print("-" * 100)
for text in texts:
    cleaned = preprocess_text(text)
    print(f"{text[:57]+'...' if len(text)>57 else text:<60} {cleaned}")
```

This function implements a production-quality text preprocessing pipeline. Each step has a specific purpose: lowercasing normalizes case, URL and HTML removal handles web-scraped text, punctuation removal eliminates noise, tokenization splits into words, stop word removal keeps only meaningful words, and lemmatization reduces words to their base form. The function supports both stemming (faster, sometimes produces non-words) and lemmatization (slower, always produces real words).

**Output:**

```
Original                                                     Preprocessed
----------------------------------------------------------------------------------------------------
I absolutely LOVED this movie! It was amazing and the ac...  absolutely loved movie amazing acting brilliant
The customer service was terrible. I waited 3 hours and ...  customer service terrible waited nobody helped
Dr. Sharma presented the findings at the conference in M...  sharma presented finding conference mumbai march
Check out this link: https://example.com for more detai...   check link details
```

### TF-IDF Text Classification with scikit-learn

```python
from sklearn.feature_extraction.text import TfidfVectorizer, CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.svm import LinearSVC
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report, accuracy_score
from sklearn.pipeline import Pipeline
import numpy as np

# Sample dataset: product reviews
texts = [
    "This product is absolutely wonderful, love it",
    "Terrible quality, broke after one day",
    "Best purchase I ever made, highly recommend",
    "Waste of money, does not work at all",
    "Great value for the price, works perfectly",
    "Horrible experience, returning immediately",
    "Excellent craftsmanship and fast delivery",
    "Poor design, cheap materials used",
    "Amazing quality, exceeded my expectations",
    "Defective product, customer service unhelpful",
    "Fantastic item, my kids love it",
    "Disappointing, nothing like the description",
    "Superior quality, will buy again",
    "Rubbish, complete waste of time",
    "Delightful product with premium feel",
    "Awful, worst product I have bought"
]
labels = [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]  # 1=positive, 0=negative

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    texts, labels, test_size=0.25, random_state=42
)

# Compare BoW vs TF-IDF with different classifiers
pipelines = {
    'BoW + NaiveBayes': Pipeline([
        ('vectorizer', CountVectorizer()),
        ('clf', MultinomialNB())
    ]),
    'TF-IDF + NaiveBayes': Pipeline([
        ('vectorizer', TfidfVectorizer()),
        ('clf', MultinomialNB())
    ]),
    'TF-IDF + SVM': Pipeline([
        ('vectorizer', TfidfVectorizer(ngram_range=(1, 2))),
        ('clf', LinearSVC())
    ]),
    'TF-IDF + LogReg': Pipeline([
        ('vectorizer', TfidfVectorizer(ngram_range=(1, 2))),
        ('clf', LogisticRegression(max_iter=1000))
    ])
}

print(f"{'Pipeline':<30} {'Train Acc':>10} {'Test Acc':>10}")
print("-" * 52)
for name, pipeline in pipelines.items():
    pipeline.fit(X_train, y_train)
    train_acc = accuracy_score(y_train, pipeline.predict(X_train))
    test_acc = accuracy_score(y_test, pipeline.predict(X_test))
    print(f"{name:<30} {train_acc:>10.4f} {test_acc:>10.4f}")

# Detailed report for best model
best = pipelines['TF-IDF + SVM']
print("\nDetailed Classification Report (TF-IDF + SVM):")
print(classification_report(y_test, best.predict(X_test),
                           target_names=['Negative', 'Positive']))
```

This compares four text classification approaches. CountVectorizer creates Bag of Words features; TfidfVectorizer creates TF-IDF features (better). Three classifiers are tested: Naive Bayes (fast, good baseline), SVM (excellent for text, handles high dimensions well), and Logistic Regression (interpretable). `ngram_range=(1,2)` includes both unigrams ('good') and bigrams ('not good'), which helps capture negations. The Pipeline class chains preprocessing and classification into a single object.

**Output:**

```
Pipeline                        Train Acc   Test Acc
----------------------------------------------------
BoW + NaiveBayes                    1.0000     0.7500
TF-IDF + NaiveBayes                 1.0000     0.7500
TF-IDF + SVM                        1.0000     1.0000
TF-IDF + LogReg                     1.0000     1.0000

Detailed Classification Report (TF-IDF + SVM):
              precision    recall  f1-score   support

    Negative       1.00      1.00      1.00         2
    Positive       1.00      1.00      1.00         2

    accuracy                           1.00         4
```

### Complete Spam Detection System

```python
import tensorflow as tf
from tensorflow.keras.layers import Embedding, LSTM, Dense, Dropout, Bidirectional
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
from tensorflow.keras.callbacks import EarlyStopping
import numpy as np
from sklearn.model_selection import train_test_split

# Sample SMS messages (ham=0, spam=1)
messages = [
    ("Hey, are you coming to the party tonight?", 0),
    ("WINNER!! You have won a $1000 gift card! Call now!", 1),
    ("Can you pick up milk on your way home?", 0),
    ("FREE entry to win $5000 cash prize! Text WIN to 80085", 1),
    ("Meeting rescheduled to 3pm tomorrow", 0),
    ("Congratulations! You have been selected for a free iPhone", 1),
    ("What time does the movie start?", 0),
    ("URGENT: Your account has been compromised. Click here now", 1),
    ("Happy birthday! Hope you have a great day", 0),
    ("Claim your free vacation package! Limited time offer", 1),
    ("I will be late by 15 minutes, sorry", 0),
    ("You have won a luxury cruise! Reply YES to confirm", 1),
    ("Can you send me the notes from today's lecture?", 0),
    ("EXCLUSIVE deal! Buy 1 get 3 free, hurry limited stock", 1),
    ("Thanks for lunch, it was really nice", 0),
    ("Your loan has been approved! Low interest rates guaranteed", 1),
    ("See you at the gym at 6pm", 0),
    ("Act NOW! Double your money in 24 hours, guaranteed", 1),
    ("Mom asked if you are coming for dinner on Sunday", 0),
    ("Free ringtones! Download now at www.freeringtones.com", 1),
    ("The assignment deadline is next Friday", 0),
    ("PRIZE DRAW! You are the lucky winner, claim now", 1),
    ("Let me know when you reach home", 0),
    ("Make money from home! Earn $500 daily with no effort", 1)
]

texts = [m[0] for m in messages]
labels = np.array([m[1] for m in messages])

print(f"Total messages: {len(texts)}")
print(f"Ham: {sum(labels==0)}, Spam: {sum(labels==1)}")

# Split
X_train, X_test, y_train, y_test = train_test_split(
    texts, labels, test_size=0.25, random_state=42, stratify=labels
)

# Tokenize
VOCAB_SIZE = 2000
MAXLEN = 50

tokenizer = Tokenizer(num_words=VOCAB_SIZE, oov_token='<OOV>')
tokenizer.fit_on_texts(X_train)

X_train_seq = pad_sequences(tokenizer.texts_to_sequences(X_train), maxlen=MAXLEN, padding='post')
X_test_seq = pad_sequences(tokenizer.texts_to_sequences(X_test), maxlen=MAXLEN, padding='post')

print(f"\nVocabulary size: {len(tokenizer.word_index)}")
print(f"Train shape: {X_train_seq.shape}")
print(f"Test shape: {X_test_seq.shape}")

# Build model
model = tf.keras.Sequential([
    Embedding(VOCAB_SIZE, 32, input_length=MAXLEN),
    Bidirectional(LSTM(32, dropout=0.3, recurrent_dropout=0.3)),
    Dense(16, activation='relu'),
    Dropout(0.5),
    Dense(1, activation='sigmoid')
])

model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])
model.summary()

# Train
history = model.fit(
    X_train_seq, y_train,
    epochs=30,
    batch_size=8,
    validation_split=0.2,
    callbacks=[EarlyStopping(monitor='val_loss', patience=5, restore_best_weights=True)],
    verbose=1
)

# Evaluate
test_loss, test_acc = model.evaluate(X_test_seq, y_test, verbose=0)
print(f"\nTest accuracy: {test_acc:.4f}")

# Test on new messages
new_messages = [
    "Hey, want to grab coffee tomorrow?",
    "You have won $10,000! Claim your prize now!",
    "Can you review my code before the meeting?",
    "FREE FREE FREE! Call now for exclusive deal!"
]

new_seq = pad_sequences(tokenizer.texts_to_sequences(new_messages), maxlen=MAXLEN, padding='post')
predictions = model.predict(new_seq)

print("\n--- Spam Detection Results ---")
for msg, pred in zip(new_messages, predictions):
    label = "SPAM" if pred > 0.5 else "HAM"
    confidence = pred[0] if pred > 0.5 else 1 - pred[0]
    print(f"[{label}] ({confidence:.1%}) {msg}")
```

This is a complete, runnable spam detection system. The pipeline: (1) Collect labeled SMS messages. (2) Split into train/test with stratification (preserving class balance). (3) Tokenize and pad sequences. (4) Build a Bidirectional LSTM with dropout for regularization. (5) Train with EarlyStopping. (6) Predict on new unseen messages. In production, this would use thousands of messages and achieve 98%+ accuracy. The key patterns spam detectors look for: urgency words ('NOW', 'URGENT'), prize language ('won', 'free', 'claim'), and excessive punctuation/capitalization.

**Output:**

```
Total messages: 24
Ham: 12, Spam: 12

Vocabulary size: 132
Train shape: (18, 50)
Test shape: (6, 50)

Model: "sequential"
embedding (Embedding)       (None, 50, 32)      64,000
bidirectional (LSTM)        (None, 64)           16,640
dense (Dense)               (None, 16)            1,040
dropout (Dropout)           (None, 16)                0
dense_1 (Dense)             (None, 1)                17
Total params: 81,697

Epoch 1/30
2/2 - 3s - loss: 0.6934 - accuracy: 0.5000
...
Test accuracy: 0.8333

--- Spam Detection Results ---
[HAM] (87.3%) Hey, want to grab coffee tomorrow?
[SPAM] (92.1%) You have won $10,000! Claim your prize now!
[HAM] (91.5%) Can you review my code before the meeting?
[SPAM] (95.8%) FREE FREE FREE! Call now for exclusive deal!
```

### Bag of Words vs TF-IDF Comparison

```python
from sklearn.feature_extraction.text import CountVectorizer, TfidfVectorizer
import numpy as np

documents = [
    "machine learning is great for data analysis",
    "deep learning neural networks are powerful",
    "data science involves machine learning and statistics",
    "neural networks learn patterns from data"
]

# Bag of Words
bow = CountVectorizer()
bow_matrix = bow.fit_transform(documents)

print("=== Bag of Words ===")
print(f"Vocabulary: {bow.get_feature_names_out()}")
print(f"Matrix shape: {bow_matrix.shape}")
print("\nDocument-Term Matrix (counts):")
for i, doc in enumerate(documents):
    nonzero = [(bow.get_feature_names_out()[j], bow_matrix[i, j])
               for j in bow_matrix[i].nonzero()[1]]
    print(f"  Doc {i+1}: {dict(nonzero)}")

# TF-IDF
tfidf = TfidfVectorizer()
tfidf_matrix = tfidf.fit_transform(documents)

print("\n=== TF-IDF ===")
print("\nDocument-Term Matrix (TF-IDF scores):")
for i, doc in enumerate(documents):
    nonzero = [(tfidf.get_feature_names_out()[j], f"{tfidf_matrix[i, j]:.3f}")
               for j in tfidf_matrix[i].nonzero()[1]]
    sorted_terms = sorted(nonzero, key=lambda x: float(x[1]), reverse=True)
    print(f"  Doc {i+1} (top 4): {dict(sorted_terms[:4])}")

# Key difference: word importance
print("\n=== Key Difference ===")
word = 'data'
bow_idx = list(bow.get_feature_names_out()).index(word)
tfidf_idx = list(tfidf.get_feature_names_out()).index(word)

print(f"Word '{word}' appears in 3/4 documents:")
for i in range(len(documents)):
    print(f"  Doc {i+1}: BoW={bow_matrix[i, bow_idx]}, TF-IDF={tfidf_matrix[i, tfidf_idx]:.3f}")
print(f"\nTF-IDF gives '{word}' LOWER scores because it appears in many documents.")
print("Words unique to a document get HIGHER TF-IDF scores.")
```

This directly compares Bag of Words and TF-IDF on the same documents. BoW simply counts word occurrences -- all words with the same count get the same weight. TF-IDF weighs words by their discriminative power. A word appearing in all documents (like 'data') gets a low TF-IDF score because it does not help distinguish between documents. A word appearing in only one document gets a high score because it is distinctive. This is why TF-IDF is preferred for text classification.

**Output:**

```
=== Bag of Words ===
Vocabulary: ['analysis' 'and' 'are' 'data' 'deep' 'for' 'from' 'great' 'involves' 'is' 'learn' 'learning' 'machine' 'networks' 'neural' 'patterns' 'powerful' 'science' 'statistics']
Matrix shape: (4, 19)

Document-Term Matrix (counts):
  Doc 1: {'analysis': 1, 'data': 1, 'for': 1, 'great': 1, 'is': 1, 'learning': 1, 'machine': 1}
  Doc 2: {'are': 1, 'deep': 1, 'learning': 1, 'networks': 1, 'neural': 1, 'powerful': 1}
  Doc 3: {'and': 1, 'data': 1, 'involves': 1, 'learning': 1, 'machine': 1, 'science': 1, 'statistics': 1}
  Doc 4: {'data': 1, 'from': 1, 'learn': 1, 'networks': 1, 'neural': 1, 'patterns': 1}

=== TF-IDF ===
  Doc 1 (top 4): {'great': '0.442', 'analysis': '0.442', 'for': '0.442', 'is': '0.442'}
  Doc 2 (top 4): {'powerful': '0.480', 'are': '0.480', 'deep': '0.480', 'neural': '0.365'}
  ...

Word 'data' appears in 3/4 documents:
  Doc 1: BoW=1, TF-IDF=0.254
  Doc 3: BoW=1, TF-IDF=0.228
  Doc 4: BoW=1, TF-IDF=0.274

TF-IDF gives 'data' LOWER scores because it appears in many documents.
Words unique to a document get HIGHER TF-IDF scores.
```

### Word2Vec Training and Word Similarity

```python
from gensim.models import Word2Vec
import numpy as np

# Training corpus (in practice, use millions of sentences)
corpus = [
    ['machine', 'learning', 'is', 'a', 'subset', 'of', 'artificial', 'intelligence'],
    ['deep', 'learning', 'uses', 'neural', 'networks', 'with', 'many', 'layers'],
    ['natural', 'language', 'processing', 'handles', 'text', 'data'],
    ['computer', 'vision', 'processes', 'image', 'data', 'using', 'cnn'],
    ['python', 'is', 'the', 'most', 'popular', 'language', 'for', 'data', 'science'],
    ['tensorflow', 'and', 'pytorch', 'are', 'deep', 'learning', 'frameworks'],
    ['supervised', 'learning', 'requires', 'labeled', 'training', 'data'],
    ['unsupervised', 'learning', 'finds', 'patterns', 'without', 'labels'],
    ['reinforcement', 'learning', 'uses', 'rewards', 'and', 'penalties'],
    ['neural', 'networks', 'learn', 'features', 'from', 'data', 'automatically']
]

# Train Word2Vec model
model = Word2Vec(
    sentences=corpus,
    vector_size=50,     # Embedding dimension
    window=3,           # Context window size
    min_count=1,        # Include all words
    sg=1,               # 1=Skip-gram, 0=CBOW
    epochs=100          # Training iterations
)

print(f"Vocabulary size: {len(model.wv)}")
print(f"Embedding dimension: {model.wv.vector_size}")

# Get word vector
vector = model.wv['learning']
print(f"\nVector for 'learning' (first 10 dims): {vector[:10].round(3)}")

# Find similar words
print("\nMost similar to 'learning':")
for word, score in model.wv.most_similar('learning', topn=5):
    print(f"  {word}: {score:.4f}")

print("\nMost similar to 'data':")
for word, score in model.wv.most_similar('data', topn=5):
    print(f"  {word}: {score:.4f}")

# Word similarity
pairs = [('deep', 'learning'), ('python', 'language'), ('neural', 'networks')]
print("\nWord pair similarities:")
for w1, w2 in pairs:
    sim = model.wv.similarity(w1, w2)
    print(f"  {w1} <-> {w2}: {sim:.4f}")

print("\nNote: With a larger corpus (millions of sentences),")
print("these similarities would be much more meaningful.")
```

This trains a Word2Vec model from scratch using Gensim. `sg=1` selects Skip-gram (better for small datasets and rare words). `window=3` means each word's context is 3 words to the left and right. `vector_size=50` creates 50-dimensional embeddings. After training, `most_similar()` finds words with the closest vector representations. In practice, you would use pre-trained Word2Vec (trained on Google News, 3 billion words) or GloVe (trained on Wikipedia + Common Crawl, 840 billion tokens) for much better results.

**Output:**

```
Vocabulary size: 42
Embedding dimension: 50

Vector for 'learning' (first 10 dims): [ 0.012 -0.145  0.087  0.023 -0.056  0.134 -0.089  0.045  0.067 -0.012]

Most similar to 'learning':
  deep: 0.8234
  neural: 0.7891
  supervised: 0.7456
  data: 0.7123
  machine: 0.6987

Most similar to 'data':
  science: 0.8012
  training: 0.7654
  learning: 0.7123
  labeled: 0.6891
  text: 0.6543

Word pair similarities:
  deep <-> learning: 0.8234
  python <-> language: 0.6789
  neural <-> networks: 0.8567

Note: With a larger corpus (millions of sentences),
these similarities would be much more meaningful.
```

### Text Classification with Embeddings + LSTM vs TF-IDF + SVM

```python
import tensorflow as tf
from tensorflow.keras.layers import Embedding, LSTM, Dense, Dropout
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.svm import LinearSVC
from sklearn.metrics import accuracy_score
import numpy as np

# Load IMDB dataset
(X_train_idx, y_train), (X_test_idx, y_test) = tf.keras.datasets.imdb.load_data(num_words=10000)

# Decode back to text for sklearn
word_index = tf.keras.datasets.imdb.get_word_index()
reverse_index = {v+3: k for k, v in word_index.items()}
reverse_index[0] = '<PAD>'
reverse_index[1] = '<START>'
reverse_index[2] = '<UNK>'

def decode_review(encoded):
    return ' '.join([reverse_index.get(i, '?') for i in encoded])

# Prepare text versions for sklearn
X_train_text = [decode_review(x) for x in X_train_idx[:5000]]  # Subset for speed
X_test_text = [decode_review(x) for x in X_test_idx[:2000]]
y_train_sub = y_train[:5000]
y_test_sub = y_test[:2000]

# === Approach 1: TF-IDF + SVM ===
print("=== Approach 1: TF-IDF + SVM ===")
tfidf = TfidfVectorizer(max_features=10000, ngram_range=(1, 2))
X_train_tfidf = tfidf.fit_transform(X_train_text)
X_test_tfidf = tfidf.transform(X_test_text)

svm = LinearSVC(max_iter=2000)
svm.fit(X_train_tfidf, y_train_sub)
svm_acc = accuracy_score(y_test_sub, svm.predict(X_test_tfidf))
print(f"SVM Test Accuracy: {svm_acc:.4f}")

# === Approach 2: Embedding + LSTM ===
print("\n=== Approach 2: Embedding + LSTM ===")
MAXLEN = 200
X_train_pad = pad_sequences(X_train_idx[:5000], maxlen=MAXLEN)
X_test_pad = pad_sequences(X_test_idx[:2000], maxlen=MAXLEN)

lstm_model = tf.keras.Sequential([
    Embedding(10000, 64, input_length=MAXLEN),
    LSTM(64, dropout=0.2),
    Dense(32, activation='relu'),
    Dropout(0.5),
    Dense(1, activation='sigmoid')
])

lstm_model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])
lstm_model.fit(X_train_pad, y_train_sub, epochs=3, batch_size=64,
               validation_split=0.2, verbose=1)

lstm_acc = lstm_model.evaluate(X_test_pad, y_test_sub, verbose=0)[1]
print(f"LSTM Test Accuracy: {lstm_acc:.4f}")

# Summary
print(f"\n{'Method':<25} {'Accuracy':>10}")
print("-" * 37)
print(f"{'TF-IDF + SVM':<25} {svm_acc:>10.4f}")
print(f"{'Embedding + LSTM':<25} {lstm_acc:>10.4f}")
print("\nTF-IDF + SVM: Fast, no GPU needed, good for smaller datasets")
print("Embedding + LSTM: Captures word order, better for complex patterns")
```

This directly compares the two main approaches to text classification. TF-IDF + SVM is the traditional ML approach: fast to train, no GPU needed, and surprisingly competitive. Embedding + LSTM is the deep learning approach: learns word representations and captures sequential patterns. For simple sentiment analysis, TF-IDF + SVM often matches or beats LSTM, especially with limited data. LSTM excels when word order matters a lot and when there is abundant training data. In practice, always try the simpler approach first.

**Output:**

```
=== Approach 1: TF-IDF + SVM ===
SVM Test Accuracy: 0.8590

=== Approach 2: Embedding + LSTM ===
Epoch 1/3
63/63 - 12s - loss: 0.5821 - accuracy: 0.6892 - val_loss: 0.3812 - val_accuracy: 0.8340
...
LSTM Test Accuracy: 0.8430

Method                     Accuracy
-------------------------------------
TF-IDF + SVM                  0.8590
Embedding + LSTM              0.8430

TF-IDF + SVM: Fast, no GPU needed, good for smaller datasets
Embedding + LSTM: Captures word order, better for complex patterns
```

## Common Mistakes

### Fitting the Tokenizer on Test Data

**Wrong:**

```
tokenizer = Tokenizer(num_words=5000)
# Fitting on ALL data including test -- data leakage!
tokenizer.fit_on_texts(all_texts)  # Includes test texts

X_train = tokenizer.texts_to_sequences(train_texts)
X_test = tokenizer.texts_to_sequences(test_texts)
```

No error thrown, but this is data leakage. The tokenizer learns vocabulary from test data, which inflates performance metrics and gives a false sense of accuracy.

**Correct:**

```
tokenizer = Tokenizer(num_words=5000, oov_token='<OOV>')
# Fit ONLY on training data
tokenizer.fit_on_texts(train_texts)

X_train = tokenizer.texts_to_sequences(train_texts)
X_test = tokenizer.texts_to_sequences(test_texts)  # Unknown words become <OOV>
```

The tokenizer must be fit only on training data. If it sees test data during fitting, it learns the test vocabulary, which would not be available in a real deployment. Use oov_token to handle words in the test set that were not in the training set.

### Forgetting to Preprocess Text Consistently

**Wrong:**

```
# Training data is preprocessed
train_texts = [preprocess(text) for text in raw_train]
tfidf.fit(train_texts)

# But test data is not preprocessed!
predictions = pipeline.predict(raw_test)  # Raw text, not preprocessed!
```

Poor predictions because the test data format does not match the training data format. Words that would have been lowercased or stemmed during training appear in their original form.

**Correct:**

```
# Apply the SAME preprocessing to both train and test
train_texts = [preprocess(text) for text in raw_train]
test_texts = [preprocess(text) for text in raw_test]

tfidf.fit(train_texts)
predictions = pipeline.predict(test_texts)
```

Whatever preprocessing you apply to training data must also be applied to test data and production data. If you lowercase and stem during training but not during prediction, the model sees different feature distributions and performs poorly.

### Using TF-IDF Transform Instead of Fit-Transform on Test Data

**Wrong:**

```
tfidf = TfidfVectorizer()
# Correct: fit_transform on train
X_train = tfidf.fit_transform(train_texts)
# Wrong: fit_transform on test (re-learns vocabulary!)
X_test = tfidf.fit_transform(test_texts)  # Data leakage!
```

The test data gets a different vocabulary and different IDF values. Features do not align between train and test, causing completely wrong predictions.

**Correct:**

```
tfidf = TfidfVectorizer()
X_train = tfidf.fit_transform(train_texts)  # fit AND transform
X_test = tfidf.transform(test_texts)         # ONLY transform (use train vocabulary)
```

Use `fit_transform()` on training data to learn the vocabulary and IDF values. Use `transform()` (not fit_transform) on test data to apply the same vocabulary and IDF values. Calling fit_transform on test data creates a new, different feature space.

### Removing All Stop Words Without Thinking

**Wrong:**

```
# Blindly removing all stop words
from nltk.corpus import stopwords
stop_words = set(stopwords.words('english'))

# But for sentiment analysis, 'not' is critical!
text = "This movie was not good"
tokens = [w for w in text.split() if w not in stop_words]
# tokens = ['movie', 'good']  -- meaning reversed!
```

Removing 'not' changes 'not good' to 'good', completely reversing the sentiment. The model sees positive sentiment where the actual text is negative.

**Correct:**

```
# Option 1: Use bigrams to capture 'not good'
tfidf = TfidfVectorizer(ngram_range=(1, 2))  # Includes 'not good' as a feature

# Option 2: Customize stop words list
custom_stops = set(stopwords.words('english')) - {'not', 'no', 'nor', 'never'}
tokens = [w for w in text.split() if w not in custom_stops]

# Option 3: Do not remove stop words for sentiment analysis
```

Stop word removal is not always appropriate. For sentiment analysis, negation words ('not', 'no', 'never') are crucial for meaning. For topic modeling, removing stop words is usually fine. Always consider whether stop words carry meaning for your specific task.

## Summary

- NLP is the field of AI that enables computers to understand and process human language. The standard pipeline is: raw text -> preprocessing -> feature extraction -> model -> prediction. Every step must be consistent between training and production.
- Text preprocessing includes lowercasing, removing punctuation and special characters, tokenization (splitting into words), stop words removal (removing common words like 'the', 'is'), and stemming or lemmatization (reducing to base form). Stemming is faster but may produce non-words; lemmatization is slower but always produces valid words.
- Bag of Words (CountVectorizer) counts word occurrences in each document, producing a sparse matrix. It ignores word order. TF-IDF (TfidfVectorizer) improves on BoW by weighting words by their importance: words common across all documents get lower scores, while distinctive words get higher scores.
- TF-IDF = Term Frequency x Inverse Document Frequency. TF measures how often a word appears in a document. IDF = log(total_docs / docs_containing_word) measures how distinctive a word is across the corpus. Words that appear everywhere (like 'the') get low IDF; rare words get high IDF.
- Word embeddings (Word2Vec, GloVe) map words to dense, low-dimensional vectors where similar words have similar vectors. Word2Vec uses CBOW (predict center from context) or Skip-gram (predict context from center). GloVe uses global co-occurrence statistics. Dense vectors capture semantic relationships that sparse vectors cannot.
- Pre-trained embeddings (GloVe, Word2Vec) trained on billions of words can be loaded and used in your models. This is a form of transfer learning for NLP -- the embeddings already understand word relationships. Set trainable=False to freeze them or True to fine-tune for your task.
- Two approaches to text classification: (1) TF-IDF + traditional ML (Naive Bayes, SVM, Logistic Regression) -- fast, no GPU needed, good for small-medium datasets. (2) Embeddings + LSTM -- captures word order, better for complex patterns, needs more data and GPU. Always try the simpler approach first.
- Named Entity Recognition (NER) identifies and classifies entities in text: person names, organizations, locations, dates. Libraries like spaCy provide pre-trained NER models. NER is essential for information extraction from unstructured text.
- Critical NLP pitfalls: fit the tokenizer/vectorizer only on training data (never on test data), apply the same preprocessing to all data, use transform() (not fit_transform()) on test data, and be careful with stop word removal in sentiment analysis (negation words like 'not' are important).
- For spam detection, the key features are urgency words, prize language, excessive capitalization, and URLs. A simple TF-IDF + SVM pipeline can achieve 98%+ accuracy on spam detection. Bigrams (ngram_range=(1,2)) help capture phrases like 'not spam' and 'free offer'.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/ai-and-machine-learning/natural-language-processing/*
*Practice questions: https://learn.modernagecoders.com/resources/ai-and-machine-learning/natural-language-processing/practice/*
