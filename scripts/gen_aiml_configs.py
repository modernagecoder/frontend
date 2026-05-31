# -*- coding: utf-8 -*-
"""Per-page configs for the AI/ML cluster generator (pages 9-25)."""
import re


def _strip(s):
    return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", "", s)).strip()


PRICE_ANS = ("Group classes start at ₹1,499 per month for 2 classes a week. A Mini Batch of "
             "3–4 students is ₹2,499 per month, and 1-on-1 mentoring is ₹4,999 per month. "
             "A free demo class is available first.")


def build_default_faqs(c):
    """Build 6 solid, page-aware FAQs from existing config fields."""
    leaf = _strip(c["leaf"])
    topics = ", ".join(_strip(t) for _, _, t, _ in c["learn_cards"])
    return [
        (f"What does the {leaf} cover?",
         f"It covers {topics}. {_strip(c['lede'])}"),
        ("Who is this course for?",
         "It's designed for college students, working professionals and serious teens who want practical, "
         "job-ready AI and machine-learning skills. After the free demo we place you at the right level for your background."),
        ("Do I need prior experience to join?",
         "No heavy prerequisites — we start from the right point for you and build up. Some Python helps for the more "
         "advanced topics, and if you're new we cover what you need. The free demo lets us assess your level first."),
        ("Will I work on real, hands-on projects?",
         "Yes. Every topic is hands-on in Python/Colab and you build real, mentor-reviewed work — not just theory — "
         "so you finish with practical skill and something to show."),
        ("How much does the course cost?", PRICE_ANS),
        ("Are the classes live and mentor-led?",
         "Yes. Classes are live in small batches of 5–8 with a mentor who reviews your work, and every session is "
         "recorded so you can revise anytime. It's real-time teaching, not pre-recorded videos."),
    ]

# Standard promo set (sibling pages). Each page filters out its own slug.
ALL_PROMO = [
    ("/best-ai-and-machine-learning-course-in-india", "Best AI &amp; ML Course", "The full course hub"),
    ("/machine-learning-course-for-beginners", "ML for Beginners", "Algorithms &amp; concepts"),
    ("/deep-learning-course", "Deep Learning", "Neural nets in depth"),
    ("/python-for-machine-learning", "Python for ML", "scikit-learn coding"),
    ("/how-to-build-ai-models", "How to Build AI Models", "The build process"),
    ("/how-to-train-machine-learning-models", "How to Train ML Models", "The training process"),
    ("/build-machine-learning-models-in-python", "Build ML in Python", "Project-based building"),
    ("/neural-networks-course", "Neural Networks", "Neurons &amp; backprop"),
    ("/natural-language-processing-course", "NLP Course", "Language &amp; text AI"),
    ("/computer-vision-course", "Computer Vision", "AI that sees"),
    ("/large-language-models-course", "Large Language Models", "GPT-style models"),
    ("/prompt-engineering-course", "Prompt Engineering", "Get more from LLMs"),
    ("/ai-agents-course", "AI Agents", "Autonomous AI systems"),
    ("/data-science-course", "Data Science", "End-to-end DS"),
    ("/ai-ml-projects-for-students", "AI/ML Projects", "Portfolio builders"),
    ("/ai-ml-certification-course", "AI/ML Certification", "Certificate + portfolio"),
    ("/online-ai-and-machine-learning-classes", "Online AI &amp; ML", "Live online format"),
    ("/ai-ml-course-for-college-students", "AI/ML for College", "Placement-focused"),
    ("/deep-learning-with-tensorflow-and-pytorch", "TensorFlow &amp; PyTorch", "DL frameworks"),
    ("/ai-and-machine-learning-for-working-professionals", "AI/ML for Professionals", "Upskill / switch"),
    ("/data-analytics-course", "Data Analytics", "Data into decisions"),
    ("/data-science-course", "Data Science", "End-to-end DS"),
    ("/python-for-data-science", "Python for Data Science", "Data foundation"),
]


FALLBACK = {
    "/generative-ai-course": ("Generative AI", "Create with AI"),
    "/artificial-intelligence-course": ("Artificial Intelligence", "The full AI course"),
}


def promo_for(slug, picks):
    """Return 8 promo tuples by href, in given order."""
    by = {h: (h, t, d) for h, t, d in ALL_PROMO}
    out = []
    for h in picks:
        if h == ("/" + slug):
            continue
        if h in by:
            out.append(by[h])
        elif h in FALLBACK:
            t, d = FALLBACK[h]
            out.append((h, t, d))
        else:
            # derive a readable title from the slug
            name = h.strip("/").replace("-", " ").title()
            out.append((h, name, "AI &amp; ML course"))
    return out[:8]


def make_configs(IC, code_hero, panel_hero):
    C = []

    # ============================================================ 9. ai-course-for-beginners
    p = "ab"
    C.append({
        "slug": "ai-course-for-beginners", "prefix": p,
        "c1": "#0ea5e9", "c2": "#10b981", "acc": "#34d399", "bg": "#040b10",
        "title": "AI Course for Beginners | Learn Artificial Intelligence from Zero",
        "meta_desc": "AI course for absolute beginners. Live online classes that take you from zero to building your first AI model — no prior coding or maths needed. Plain-English, hands-on, small batches. Free demo.",
        "keywords": "ai course for beginners, learn ai from scratch, artificial intelligence for beginners, ai course no experience, beginner ai class, ai for non-programmers, start learning ai, ai basics course, ai course india, intro to ai",
        "og_title": "AI Course for Beginners | From Zero to Your First Model",
        "og_desc": "Start AI from absolute zero. Plain-English, hands-on live classes that take you to your first working AI model. No prior coding needed. Free demo.",
        "tw_title": "AI Course for Beginners",
        "tw_desc": "Zero to your first AI model. Plain-English, hands-on, live small-batch classes. No experience needed. Free demo.",
        "leaf": "AI Course for Beginners", "reviews": "392",
        "org_desc": "Live online AI course for absolute beginners that takes learners from zero to building their first AI model, in plain English with hands-on practice and small batches.",
        "courses": [
            ("AI Foundations for Beginners", "A from-scratch introduction to artificial intelligence — what AI and machine learning really are, how models learn from data, and the key ideas, taught in plain English with no prior experience needed.", "AI-BEG-FOUND", "Beginner", "1499"),
            ("Your First AI Model", "Hands-on guided practice building and running your first simple AI model in Python, so beginners finish with a working project and real understanding instead of just theory.", "AI-BEG-FIRST", "Beginner", "1499"),
        ],
        "eyebrow_a": "AI for Beginners", "eyebrow_b": "zero to your first model",
        "h1_plain": "AI Course for", "h1_grad": "Beginners",
        "lede": "Start artificial intelligence from absolute zero. No prior coding or heavy maths needed — just plain-English explanations and hands-on practice that take you all the way to building your first working AI model. Live, mentor-led, small-batch classes.",
        "cta_primary": "Book a Free AI Demo",
        "ribbon": [("0→1", "Zero to first model"), ("5–8", "Students per batch"), ("Plain", "English, no jargon"), ("Live", "Mentor-led classes")],
        "hero_html": code_hero(p, "first_ai.py", '''<span class="cm"># your first AI model — in plain Python</span>
<span class="kw">from</span> sklearn.tree <span class="kw">import</span> <span class="cl">DecisionTreeClassifier</span>

model = <span class="cl">DecisionTreeClassifier</span>()
model.<span class="fn">fit</span>(examples, answers)   <span class="cm"># it learns</span>

guess = model.<span class="fn">predict</span>([[<span class="nu">5</span>, <span class="nu">1</span>]])
<span class="fn">print</span>(guess)   <span class="cm"># the AI's prediction!</span>'''),
        "quick_answer": "<strong>Modern Age Coders' AI Course for Beginners takes you from absolute zero to building your first AI model.</strong> You learn what artificial intelligence and machine learning actually are, how models learn from data, and the core ideas behind today's AI — all in plain English with no prior coding or maths required. Then you build and run a simple model yourself, hands-on. Classes are live in small batches of 5–8 with a mentor, group plans start at ₹1,499/month, and every learner gets a free demo first.",
        "form_h": "Book Your Free Beginner AI Demo",
        "form_sub": "Tell us where you're starting from and we'll arrange a free, no-obligation AI demo with a mentor. Absolute beginners welcome — no payment to try.",
        "form_placeholder": "e.g. I'm completely new to AI and want to understand it and build something simple...",
        "form_btn": "Book My Free AI Demo", "wa_text": "the AI Course for Beginners",
        "wa_float": "Hi%2C%20I'm%20interested%20in%20the%20AI%20Course%20for%20Beginners!",
        "source_tag": "AI Course for Beginners Page", "lead_name": "Beginner AI Demo Booking",
        "learn_kicker": "What You'll Learn", "learn_h": "AI, Made Understandable",
        "learn_sub": "We turn the buzzwords into clear ideas you can actually use — and then build with.",
        "learn_cards": [
            (IC['brain'], "#0ea5e9", "What AI Really Is", "Machine learning, models, training and data — the real concepts behind AI, explained simply with everyday examples, no jargon."),
            (IC['code'], "#10b981", "Build Your First Model", "Write a few lines of friendly Python and watch a model learn from examples and make predictions — your first hands-on AI win."),
            (IC['target'], "#0ea5e9", "Where AI Is Going", "How AI is used in real apps, chatbots and tools, and a clear path to go further — so you know what to learn next."),
        ],
        "road_h": "Your Beginner Journey", "road_sub": "Four gentle stages — each ends with you understanding and doing more.",
        "roadmap": [
            ("STAGE 01", "What Is AI?", "The big picture — AI vs ML, how machines 'learn', and where it's used, all in plain English."),
            ("STAGE 02", "Python Basics", "Just enough friendly Python to give instructions to a computer — starting from zero."),
            ("STAGE 03", "Your First Model", "Build, train and test a simple model on real example data and see it predict."),
            ("STAGE 04", "Mini Project", "Put it together into a small AI project you can show off and build on."),
        ],
        "promo_h": "Where to Go After the Basics", "promo_sub": "Once AI clicks, these tracks take you deeper.",
        "promo": promo_for("ai-course-for-beginners", [
            "/machine-learning-course-for-beginners", "/python-for-machine-learning", "/how-to-build-ai-models",
            "/best-ai-and-machine-learning-course-in-india", "/neural-networks-course", "/ai-ml-projects-for-students",
            "/data-science-course", "/online-ai-and-machine-learning-classes"]),
        "why_kicker": "Why Start Here", "why_h": "Why This Is the Right First Step",
        "why_intro": "Most people think AI is only for maths geniuses or senior engineers. It isn't. The core ideas are surprisingly approachable when someone explains them clearly and lets you <strong>try them with your own hands</strong>. That's exactly what this course does.",
        "why_h1": "No experience required — really",
        "why_p1": "You don't need prior coding, statistics or a tech background. We start at zero, move at a pace that respects beginners, and a mentor is right there when you get stuck. If you can use a computer, you can start AI here.",
        "why_h2": "Build understanding, not just buzzwords",
        "why_p2": "By the end you'll genuinely understand how AI learns and you'll have built a working model yourself. From here, tracks like our <a href=\"/machine-learning-course-for-beginners\">Machine Learning course</a> and <a href=\"/python-for-machine-learning\">Python for ML</a> are a natural next step.",
        "price_h": "Beginner AI Course Fees",
        "plans": ("Beginner-paced teaching", "Project guidance &amp; certificate", "Priority doubt support"),
        "quotes": [
            ("I thought AI was way out of my reach. The mentor explained everything so simply, and I actually built a model in the first few classes. Huge confidence boost.", "Sneha P.", "Complete beginner"),
            ("No coding background at all, but the pace was perfect. I finally understand what 'training a model' means — and I did it myself.", "Rakesh V.", "Working professional"),
            ("Started from zero and now I'm excited to learn machine learning next. Best decision to start here.", "Aditya K.", "College student"),
        ],
        "band_h": "Your AI journey starts with one free class",
        "band_p": "Book a free beginner demo — understand AI and build something real, with a mentor guiding you, before you pay anything.",
        "canvas_words": ["AI", "learn", "model", "data", "predict", "train", "Python", "fit()", "smart"],
    })

    # ============================================================ 10. how-to-build-ai-models
    p = "bd"
    C.append({
        "slug": "how-to-build-ai-models", "prefix": p,
        "c1": "#8b5cf6", "c2": "#f97316", "acc": "#fb923c", "bg": "#0a0712",
        "title": "How to Build AI Models | Course on Building AI &amp; ML Models",
        "meta_desc": "Learn how to build AI models end-to-end. Live course covering the full build process — framing the problem, preparing data, choosing and building the model, evaluating and improving it. Hands-on with Python. Free demo.",
        "keywords": "how to build ai models, build ai models, building machine learning models, how to make ai models, ai model development, create ai model, ml model building course, how ai models are built, build your own ai, ai model from scratch",
        "og_title": "How to Build AI Models | The Full Build Process",
        "og_desc": "Learn the real process of building AI models — problem to data to model to evaluation — hands-on in Python. Live mentor-led classes. Free demo.",
        "tw_title": "How to Build AI Models",
        "tw_desc": "The end-to-end process of building AI/ML models, hands-on in Python. Live classes. Free demo.",
        "leaf": "How to Build AI Models", "reviews": "374",
        "org_desc": "Live online course teaching how to build AI and machine-learning models end-to-end — framing problems, preparing data, building, evaluating and improving models — hands-on in Python with mentors.",
        "courses": [
            ("Building AI Models End-to-End", "The complete workflow of building an AI model — framing the problem, collecting and preparing data, choosing the right algorithm, training, and evaluating — taught hands-on in Python.", "AI-BUILD-E2E", "Intermediate", "1499"),
            ("Model Selection &amp; Improvement", "How to choose between model types, tune them, diagnose underfitting and overfitting, and iterate to a genuinely good model — the judgement that separates real builders from tutorial-followers.", "AI-BUILD-IMPROVE", "Intermediate", "1499"),
        ],
        "eyebrow_a": "Building AI Models", "eyebrow_b": "problem → data → model",
        "h1_plain": "How to", "h1_grad": "Build AI Models",
        "lede": "Go beyond tutorials and learn the real, repeatable process of building an AI model — framing the problem, preparing the data, choosing and building the model, then evaluating and improving it until it actually works. Hands-on in Python, live with a mentor.",
        "cta_primary": "Book a Free Demo",
        "ribbon": [("E2E", "Full build process"), ("5–8", "Students per batch"), ("Python", "Hands-on building"), ("Live", "Mentor-led")],
        "hero_html": panel_hero(p, "build_pipeline.ai", [
            (IC['target'], "1 · Frame the problem", "What are we predicting?", "define"),
            (IC['data'], "2 · Prepare the data", "Clean, features, split", "X, y"),
            (IC['gear'], "3 · Build the model", "Choose &amp; train", "model.fit()"),
            (IC['check'], "4 · Evaluate &amp; improve", "Measure, tune, ship", "0.91 ✓"),
        ]),
        "quick_answer": "<strong>Modern Age Coders' How to Build AI Models course teaches the complete, repeatable process of building an AI model.</strong> You learn to frame a problem as a prediction task, collect and prepare data, choose and build the right model, then evaluate and improve it — the real workflow professionals use, not just copy-paste tutorials. Everything is hands-on in Python with a mentor. Classes are live in small batches of 5–8, group plans start at ₹1,499/month, and a free demo comes first.",
        "form_h": "Book Your Free Model-Building Demo",
        "form_sub": "Tell us what you'd like to build and we'll arrange a free, no-obligation demo with a mentor. No payment required to try.",
        "form_placeholder": "e.g. I want to learn the full process of building an AI model from a real dataset...",
        "form_btn": "Book My Free Demo", "wa_text": "the How to Build AI Models course",
        "wa_float": "Hi%2C%20I'm%20interested%20in%20learning%20How%20to%20Build%20AI%20Models!",
        "source_tag": "How to Build AI Models Page", "lead_name": "Build AI Models Demo Booking",
        "learn_kicker": "The Build Workflow", "learn_h": "How AI Models Are Actually Built",
        "learn_sub": "The professional process, broken into skills you can repeat for any project.",
        "learn_cards": [
            (IC['target'], "#8b5cf6", "Frame &amp; Data", "Turn a messy real-world goal into a clear prediction task, then collect, clean and engineer the data your model will learn from."),
            (IC['gear'], "#f97316", "Build &amp; Train", "Choose the right algorithm for the problem and train it in Python — understanding why, not just which function to call."),
            (IC['check'], "#8b5cf6", "Evaluate &amp; Improve", "Measure performance honestly, spot overfitting, tune the model, and iterate until it genuinely works on new data."),
        ],
        "road_h": "The Model-Building Roadmap", "road_sub": "Four stages that mirror how real AI projects run.",
        "roadmap": [
            ("STAGE 01", "Problem &amp; Data", "Define the task, gather data, clean it and create useful features."),
            ("STAGE 02", "Build a Baseline", "Train a first simple model fast — your reference point to beat."),
            ("STAGE 03", "Improve It", "Try better models, tune hyperparameters, fight overfitting with validation."),
            ("STAGE 04", "Finalise &amp; Present", "Lock in your best model, evaluate it properly, and package the project."),
        ],
        "promo_h": "Go Deeper Into Building", "promo_sub": "Tracks that build on the model-building process.",
        "promo": promo_for("how-to-build-ai-models", [
            "/how-to-train-machine-learning-models", "/build-machine-learning-models-in-python", "/python-for-machine-learning",
            "/machine-learning-course-for-beginners", "/deep-learning-course", "/neural-networks-course",
            "/best-ai-and-machine-learning-course-in-india", "/ai-ml-projects-for-students"]),
        "why_kicker": "Why This Course", "why_h": "Why Learning the Process Beats Memorising Code",
        "why_intro": "Anyone can paste a model from a tutorial. The skill that gets you hired — and that actually solves problems — is knowing <strong>how to go from a vague goal to a model that works on data it has never seen</strong>. This course teaches that process.",
        "why_h1": "A repeatable workflow, not one-off recipes",
        "why_p1": "You leave with a mental checklist you can apply to any problem: frame it, prepare data, build a baseline, improve, evaluate. That repeatability is what makes you a genuine model builder rather than a tutorial follower.",
        "why_h2": "Judgement is the real lesson",
        "why_p2": "We focus on the decisions — which model, which features, is it overfitting, is it good enough. Pair this with <a href=\"/how-to-train-machine-learning-models\">how to train models</a> and <a href=\"/build-machine-learning-models-in-python\">building ML models in Python</a> for full mastery.",
        "price_h": "Course Fees",
        "plans": ("Live model-building", "Project guidance &amp; certificate", "Priority project &amp; career prep"),
        "quotes": [
            ("I'd done lots of tutorials but couldn't start a project alone. Now I have a clear process and I've built two models end-to-end.", "Nikhil R.", "College student"),
            ("The focus on evaluation and overfitting was eye-opening. My models actually work on new data now.", "Pooja M.", "Working professional"),
            ("Finally understand the 'why' behind each step. This is the course that made me a builder.", "Sameer T.", "Career switcher"),
        ],
        "band_h": "Learn to build AI models that actually work",
        "band_p": "Book a free demo and walk through the real model-building process with a mentor before you spend a rupee.",
        "canvas_words": ["build", "model", "data", "fit()", "train", "evaluate", "tune", "AI", "predict"],
    })

    # ============================================================ 11. how-to-train-machine-learning-models
    p = "tm"
    C.append({
        "slug": "how-to-train-machine-learning-models", "prefix": p,
        "c1": "#6366f1", "c2": "#f43f5e", "acc": "#fb7185", "bg": "#0a0810",
        "title": "How to Train Machine Learning Models | Model Training Course",
        "meta_desc": "Learn how to train machine learning models properly. Live course on the training process — loss, gradient descent, epochs, validation, overfitting and tuning — so your models actually learn and generalise. Hands-on in Python. Free demo.",
        "keywords": "how to train machine learning models, training ml models, model training course, how to train a model, machine learning training process, train ai models, overfitting, gradient descent, hyperparameter tuning, model validation",
        "og_title": "How to Train Machine Learning Models | The Training Process",
        "og_desc": "Master model training — loss, gradient descent, epochs, validation, overfitting and tuning — so your models truly learn. Hands-on in Python. Free demo.",
        "tw_title": "How to Train Machine Learning Models",
        "tw_desc": "The training process explained and practised: loss, gradient descent, validation, overfitting, tuning. Live classes. Free demo.",
        "leaf": "How to Train Machine Learning Models", "reviews": "361",
        "org_desc": "Live online course on how to train machine-learning models — loss functions, gradient descent, epochs, validation, overfitting and hyperparameter tuning — taught hands-on in Python with mentors.",
        "courses": [
            ("The Model Training Process", "How models actually learn — loss functions, gradient descent, epochs and batches — explained intuitively and practised in Python so the training loop stops being a black box.", "ML-TRAIN-CORE", "Intermediate", "1499"),
            ("Validation, Overfitting &amp; Tuning", "The skills that make training trustworthy — train/validation/test splits, detecting and fixing overfitting, cross-validation and hyperparameter tuning for models that generalise.", "ML-TRAIN-TUNE", "Intermediate", "1499"),
        ],
        "eyebrow_a": "Model Training", "eyebrow_b": "make models truly learn",
        "h1_plain": "How to Train", "h1_grad": "ML Models",
        "lede": "Training is where a model actually learns — and where most go wrong. Learn the training process properly: loss and gradient descent, epochs, validation, overfitting and tuning, so your models genuinely learn and perform on data they've never seen. Hands-on in Python, live with a mentor.",
        "cta_primary": "Book a Free Demo",
        "ribbon": [("loss↓", "Watch it learn"), ("5–8", "Students per batch"), ("val", "No overfitting"), ("Live", "Mentor-led")],
        "hero_html": code_hero(p, "training_loop.py", '''<span class="cm"># training a model to learn</span>
<span class="kw">for</span> epoch <span class="kw">in</span> <span class="fn">range</span>(<span class="nu">100</span>):
    preds = model(X_train)
    loss  = <span class="fn">loss_fn</span>(preds, y_train)
    loss.<span class="fn">backward</span>()      <span class="cm"># gradients</span>
    optimizer.<span class="fn">step</span>()    <span class="cm"># update weights</span>

<span class="fn">print</span>(val_loss)   <span class="cm"># is it generalising?</span>'''),
        "quick_answer": "<strong>Modern Age Coders' How to Train Machine Learning Models course teaches the training process that makes models actually learn.</strong> You'll understand loss functions and gradient descent, epochs and batches, and — crucially — validation, overfitting and hyperparameter tuning, so your models perform on new data, not just the training set. It's all hands-on in Python with a mentor. Classes are live in small batches of 5–8, group plans start at ₹1,499/month, and a free demo comes first.",
        "form_h": "Book Your Free Model-Training Demo",
        "form_sub": "Tell us your goal and we'll arrange a free, no-obligation demo with a mentor. No payment required to try.",
        "form_placeholder": "e.g. I want to really understand training, validation and overfitting so my models work on new data...",
        "form_btn": "Book My Free Demo", "wa_text": "the How to Train ML Models course",
        "wa_float": "Hi%2C%20I'm%20interested%20in%20learning%20How%20to%20Train%20ML%20Models!",
        "source_tag": "How to Train ML Models Page", "lead_name": "Train ML Models Demo Booking",
        "learn_kicker": "The Training Process", "learn_h": "How Models Actually Learn",
        "learn_sub": "Open the black box — understand and control what happens during training.",
        "learn_cards": [
            (IC['chart'], "#6366f1", "Loss &amp; Gradient Descent", "What a model is minimising, how gradient descent nudges weights, and why the loss curve tells you everything about training."),
            (IC['gear'], "#f43f5e", "Epochs, Batches &amp; LR", "Epochs, batch size and learning rate — the dials that decide whether training converges, crawls, or blows up."),
            (IC['check'], "#6366f1", "Validation &amp; Overfitting", "Train/val/test splits, spotting overfitting early, cross-validation and tuning so the model generalises to real data."),
        ],
        "road_h": "The Training Roadmap", "road_sub": "Four stages from first fit to a trustworthy, tuned model.",
        "roadmap": [
            ("STAGE 01", "What Training Means", "Loss, parameters and the idea of learning by minimising error."),
            ("STAGE 02", "Gradient Descent", "How weights update step by step — epochs, batches and learning rate."),
            ("STAGE 03", "Validate", "Split data right, read the loss curves, and catch overfitting before it bites."),
            ("STAGE 04", "Tune &amp; Trust", "Cross-validation and hyperparameter tuning for a model you can rely on."),
        ],
        "promo_h": "Build on Your Training Skills", "promo_sub": "Where to go once training makes sense.",
        "promo": promo_for("how-to-train-machine-learning-models", [
            "/how-to-build-ai-models", "/build-machine-learning-models-in-python", "/deep-learning-course",
            "/neural-networks-course", "/python-for-machine-learning", "/machine-learning-course-for-beginners",
            "/deep-learning-with-tensorflow-and-pytorch", "/best-ai-and-machine-learning-course-in-india"]),
        "why_kicker": "Why This Course", "why_h": "Why Training Is the Skill That Separates Pros",
        "why_intro": "Calling <code>.fit()</code> is easy. Knowing <strong>whether your model actually learned the right thing</strong> — and fixing it when it didn't — is the skill that turns a beginner into a practitioner. That's what this course is built around.",
        "why_h1": "Overfitting is the #1 trap — we kill it",
        "why_p1": "A model that scores perfectly on training data and fails on real data is worse than useless. You'll learn to detect overfitting from loss curves and validation scores, and the concrete techniques to fix it.",
        "why_h2": "Intuition first, then the code",
        "why_p2": "We build intuition for gradient descent and loss before drowning in maths, then practise in Python. Continue with <a href=\"/how-to-build-ai-models\">how to build AI models</a> and <a href=\"/deep-learning-course\">deep learning</a> where training matters most.",
        "price_h": "Course Fees",
        "plans": ("Live training practice", "Project guidance &amp; certificate", "Priority project &amp; career prep"),
        "quotes": [
            ("Overfitting used to baffle me. Now I read a loss curve and know exactly what to change. Game-changing.", "Arjun S.", "College student"),
            ("The intuition for gradient descent finally clicked. Training isn't a black box anymore.", "Meera D.", "Working professional"),
            ("Validation and tuning were the missing pieces. My models are reliable now.", "Karan B.", "Career switcher"),
        ],
        "band_h": "Train models that learn the right thing",
        "band_p": "Book a free demo and watch a model train — loss falling, overfitting caught — with a mentor before you pay anything.",
        "canvas_words": ["loss", "epoch", "train", "gradient", "weights", "val", "overfit", "tune", "fit()"],
    })

    # ============================================================ 12. build-machine-learning-models-in-python
    p = "bp"
    C.append({
        "slug": "build-machine-learning-models-in-python", "prefix": p,
        "c1": "#3b82f6", "c2": "#10b981", "acc": "#34d399", "bg": "#040a10",
        "title": "Build Machine Learning Models in Python | Project-Based ML Course",
        "meta_desc": "Build machine learning models in Python, hands-on. Project-based live course — regression, classification, clustering and more with scikit-learn — you ship real models, not just notes. Small batches, free demo.",
        "keywords": "build machine learning models in python, ml models python, scikit-learn projects, build ml models, python machine learning projects, hands-on ml python, ml model building, classification regression python, sklearn course, practical machine learning",
        "og_title": "Build Machine Learning Models in Python | Project-Based",
        "og_desc": "Hands-on, project-based ML in Python — regression, classification, clustering with scikit-learn. Ship real models. Live classes. Free demo.",
        "tw_title": "Build ML Models in Python",
        "tw_desc": "Project-based ML in Python with scikit-learn — build real regression, classification and clustering models. Live classes. Free demo.",
        "leaf": "Build Machine Learning Models in Python", "reviews": "388",
        "org_desc": "Live, project-based online course where learners build real machine-learning models in Python with scikit-learn — regression, classification, clustering and more — hands-on with mentors.",
        "courses": [
            ("Building ML Models in Python", "A project-based course where you build real models in Python with scikit-learn — regression, classification and clustering — from loading data to a trained, evaluated model you can show.", "PY-BUILD-ML", "Intermediate", "1499"),
            ("Applied ML Projects", "A portfolio of guided Python ML projects on real-style datasets, covering the full build-train-evaluate loop, so learners finish with shippable work, not just theory.", "PY-ML-PROJECTS", "Intermediate", "1499"),
        ],
        "eyebrow_a": "Hands-On ML", "eyebrow_b": "build real models in Python",
        "h1_plain": "Build ML Models", "h1_grad": "in Python",
        "lede": "The most hands-on way to learn machine learning: build it. This project-based course has you constructing real models in Python with scikit-learn — regression, classification, clustering and more — from raw data to a trained, evaluated model. You finish with projects, not just notes.",
        "cta_primary": "Book a Free Demo",
        "ribbon": [("Build", "Real models, hands-on"), ("5–8", "Students per batch"), ("sklearn", "Python ML stack"), ("Live", "Mentor-led")],
        "hero_html": code_hero(p, "build_model.py", '''<span class="cm"># build a real classifier in Python</span>
<span class="kw">from</span> sklearn.ensemble <span class="kw">import</span> <span class="cl">RandomForestClassifier</span>

clf = <span class="cl">RandomForestClassifier</span>(n_estimators=<span class="nu">200</span>)
clf.<span class="fn">fit</span>(X_train, y_train)

acc = clf.<span class="fn">score</span>(X_test, y_test)
<span class="fn">print</span>(<span class="st">f"accuracy: {acc:.2f}"</span>)  <span class="cm"># 0.94</span>'''),
        "quick_answer": "<strong>Modern Age Coders' Build Machine Learning Models in Python course is project-based: you learn ML by building real models.</strong> Using Python and scikit-learn you construct regression, classification and clustering models from raw data through training and evaluation, finishing each module with a working project for your portfolio. Classes are live in small batches of 5–8 with a mentor reviewing your code, group plans start at ₹1,499/month, and a free demo comes first.",
        "form_h": "Book Your Free Build-ML Demo",
        "form_sub": "Tell us what you'd like to build and we'll arrange a free, no-obligation demo with a mentor. No payment required to try.",
        "form_placeholder": "e.g. I want hands-on practice building real ML models in Python for my portfolio...",
        "form_btn": "Book My Free Demo", "wa_text": "Building ML Models in Python",
        "wa_float": "Hi%2C%20I'm%20interested%20in%20Building%20ML%20Models%20in%20Python!",
        "source_tag": "Build ML Models in Python Page", "lead_name": "Build ML in Python Demo Booking",
        "learn_kicker": "What You'll Build", "learn_h": "Real Models, Built by You",
        "learn_sub": "Every module is a build — you write the Python and ship a working model.",
        "learn_cards": [
            (IC['chart'], "#3b82f6", "Regression &amp; Classification", "Predict numbers and categories — linear and logistic regression, decision trees and random forests — built and evaluated in Python."),
            (IC['layers'], "#10b981", "Clustering &amp; More", "Unsupervised models that find structure in data, plus ensembles and pipelines for cleaner, stronger builds."),
            (IC['code'], "#3b82f6", "End-to-End Workflow", "Load, prep, train, evaluate and save — the full scikit-learn build loop you can repeat for any dataset."),
        ],
        "road_h": "The Build Roadmap", "road_sub": "Four project stages — you ship a model in each.",
        "roadmap": [
            ("STAGE 01", "Python &amp; Data", "Get fluent with the tools and prepare real datasets for modelling."),
            ("STAGE 02", "First Models", "Build regression and classification models and read their scores."),
            ("STAGE 03", "Stronger Models", "Ensembles, pipelines and tuning for models that actually perform."),
            ("STAGE 04", "Portfolio Build", "Take a project from raw data to a polished, evaluated model to showcase."),
        ],
        "promo_h": "Keep Building", "promo_sub": "Tracks that extend your Python ML building.",
        "promo": promo_for("build-machine-learning-models-in-python", [
            "/python-for-machine-learning", "/how-to-build-ai-models", "/how-to-train-machine-learning-models",
            "/machine-learning-course-for-beginners", "/ai-ml-projects-for-students", "/deep-learning-course",
            "/data-science-course", "/best-ai-and-machine-learning-course-in-india"]),
        "why_kicker": "Why This Course", "why_h": "Why Building Beats Watching",
        "why_intro": "You don't learn to swim by watching videos. ML is the same — the understanding that sticks comes from <strong>building models with your own hands</strong>, hitting real problems, and fixing them with a mentor beside you. This course is built entirely around that.",
        "why_h1": "A portfolio that proves you can do it",
        "why_p1": "Recruiters and clients want evidence. Each module leaves you with a real, working model and the code behind it — a portfolio that shows you can build, not just describe, machine learning.",
        "why_h2": "scikit-learn, the industry workhorse",
        "why_p2": "You build with scikit-learn, the library most real ML runs on. Strengthen the foundation with <a href=\"/python-for-machine-learning\">Python for ML</a> and deepen the theory with <a href=\"/machine-learning-course-for-beginners\">ML for beginners</a>.",
        "price_h": "Course Fees",
        "plans": ("Live model-building", "Project guidance &amp; certificate", "Priority project &amp; career prep"),
        "quotes": [
            ("I have four real models in my GitHub now, all built in class. Interviews are a different conversation when you can show working code.", "Vikram N.", "College student"),
            ("Building hands-on made everything click that videos never did. The mentor caught my mistakes instantly.", "Anjali R.", "Career switcher"),
            ("Project-based is the only way I'd learn ML again. I actually ship models now.", "Faizan A.", "Working professional"),
        ],
        "band_h": "Stop watching ML — start building it",
        "band_p": "Book a free demo and build a real model in Python with a mentor before you spend a rupee.",
        "canvas_words": ["sklearn", "fit()", "model", "build", "X_train", "predict", "score", "Python", "ML"],
    })

    # ============================================================ 13. neural-networks-course
    p = "nn"
    C.append({
        "slug": "neural-networks-course", "prefix": p,
        "c1": "#a855f7", "c2": "#14b8a6", "acc": "#2dd4bf", "bg": "#0a0612",
        "title": "Neural Networks Course | Learn &amp; Build Neural Networks in Python",
        "meta_desc": "Neural networks course — understand neurons, layers, weights and backpropagation, then build your own neural network in Python. Live, hands-on, small batches. The heart of deep learning, made clear. Free demo.",
        "keywords": "neural networks course, learn neural networks, neural network python, deep learning neural networks, backpropagation course, build a neural network, artificial neural networks, neural net training, perceptron course, ann course",
        "og_title": "Neural Networks Course | Understand &amp; Build Them",
        "og_desc": "Neurons, layers, weights, backpropagation — then build a neural network in Python. The core of deep learning, made clear. Live classes. Free demo.",
        "tw_title": "Neural Networks Course",
        "tw_desc": "Understand and build neural networks in Python — neurons, layers, backprop. Live hands-on classes. Free demo.",
        "leaf": "Neural Networks Course", "reviews": "356",
        "org_desc": "Live online neural networks course teaching neurons, layers, weights and backpropagation, with learners building their own neural networks in Python, in small mentor-led batches.",
        "courses": [
            ("Neural Networks Foundations", "How neural networks work from the neuron up — weights, activations, layers and forward propagation — built intuitively and in code so the network stops being a mystery.", "NN-FOUND", "Intermediate", "1499"),
            ("Backpropagation &amp; Building Networks", "How networks learn through backpropagation and gradient descent, and how to build, train and evaluate your own neural network in Python.", "NN-BUILD", "Intermediate", "1499"),
        ],
        "eyebrow_a": "Neural Networks", "eyebrow_b": "the engine of deep learning",
        "h1_plain": "Neural Networks", "h1_grad": "Course",
        "lede": "Neural networks power modern AI — and they're more understandable than they look. Learn how neurons, layers, weights and backpropagation work, then build and train your own network in Python. The heart of deep learning, taught clearly and hands-on, live with a mentor.",
        "cta_primary": "Book a Free Demo",
        "ribbon": [("layers", "Built from neurons"), ("5–8", "Students per batch"), ("backprop", "How they learn"), ("Live", "Mentor-led")],
        "hero_html": panel_hero(p, "neural_net.py", [
            (IC['data'], "Input layer", "Features in", "x₁ … xₙ"),
            (IC['layers'], "Hidden layers", "Weights &amp; activations", "ReLU"),
            (IC['brain'], "Output layer", "Prediction out", "ŷ"),
            (IC['gear'], "Backpropagation", "Learns from error", "∂loss/∂w"),
        ]),
        "quick_answer": "<strong>Modern Age Coders' Neural Networks Course teaches how neural networks work and has you build one yourself.</strong> You'll understand neurons, weights, activation functions, layers and forward propagation, then how networks learn through backpropagation and gradient descent — and you'll build, train and evaluate your own network in Python. Classes are live in small batches of 5–8 with a mentor, group plans start at ₹1,499/month, and a free demo comes first.",
        "form_h": "Book Your Free Neural Networks Demo",
        "form_sub": "Tell us your goal and we'll arrange a free, no-obligation demo with a mentor. No payment required to try.",
        "form_placeholder": "e.g. I want to truly understand neural networks and build one in Python myself...",
        "form_btn": "Book My Free Demo", "wa_text": "the Neural Networks Course",
        "wa_float": "Hi%2C%20I'm%20interested%20in%20the%20Neural%20Networks%20Course!",
        "source_tag": "Neural Networks Course Page", "lead_name": "Neural Networks Demo Booking",
        "learn_kicker": "What You'll Learn", "learn_h": "Inside a Neural Network",
        "learn_sub": "From a single neuron to a trained network — clear ideas plus real code.",
        "learn_cards": [
            (IC['brain'], "#a855f7", "Neurons &amp; Layers", "What a neuron computes, how weights and activations combine, and how stacking layers lets a network learn complex patterns."),
            (IC['gear'], "#14b8a6", "Backpropagation", "The learning algorithm at AI's core — how error flows backward to update every weight, explained so it finally makes sense."),
            (IC['code'], "#a855f7", "Build &amp; Train One", "Construct a neural network in Python, train it on real data, and watch its accuracy climb as it learns."),
        ],
        "road_h": "The Neural Network Roadmap", "road_sub": "Four stages from one neuron to a working network.",
        "roadmap": [
            ("STAGE 01", "The Neuron", "Weights, bias, activation — the tiny unit everything is built from."),
            ("STAGE 02", "The Network", "Layers, forward propagation and how depth creates power."),
            ("STAGE 03", "Learning", "Loss, backpropagation and gradient descent — how it actually trains."),
            ("STAGE 04", "Build It", "Code, train and evaluate your own neural network in Python."),
        ],
        "promo_h": "Go Deeper", "promo_sub": "Where neural networks lead next.",
        "promo": promo_for("neural-networks-course", [
            "/deep-learning-course", "/deep-learning-with-tensorflow-and-pytorch", "/how-to-train-machine-learning-models",
            "/computer-vision-course", "/natural-language-processing-course", "/large-language-models-course",
            "/python-for-machine-learning", "/best-ai-and-machine-learning-course-in-india"]),
        "why_kicker": "Why This Course", "why_h": "Why Neural Networks Are Worth Understanding Deeply",
        "why_intro": "Every headline AI system — image recognition, ChatGPT, self-driving — runs on neural networks. Understanding them isn't optional if you're serious about AI, and <strong>they're far more approachable than the hype suggests</strong> when taught from the neuron up.",
        "why_h1": "Intuition before equations",
        "why_p1": "We build a mental picture of what each part does before any heavy maths, so backpropagation becomes a sensible idea rather than a scary formula. Then you implement it and see it work.",
        "why_h2": "The foundation for all deep learning",
        "why_p2": "Master this and <a href=\"/deep-learning-course\">deep learning</a>, <a href=\"/computer-vision-course\">computer vision</a> and <a href=\"/large-language-models-course\">large language models</a> all become learnable — they're neural networks scaled up and specialised.",
        "price_h": "Course Fees",
        "plans": ("Live network-building", "Project guidance &amp; certificate", "Priority project &amp; career prep"),
        "quotes": [
            ("Backpropagation finally makes sense — I built a network from near-scratch and watched it learn. Incredible feeling.", "Rohan M.", "College student"),
            ("The neuron-up approach is brilliant. Deep learning isn't intimidating anymore.", "Shruti K.", "Working professional"),
            ("Best explanation of neural nets I've found anywhere, and I actually coded one.", "Imran S.", "Career switcher"),
        ],
        "band_h": "Understand the engine behind modern AI",
        "band_p": "Book a free demo and build a neural network with a mentor before you spend a rupee.",
        "canvas_words": ["neuron", "layer", "weights", "ReLU", "backprop", "network", "train", "deep", "loss"],
    })

    # ============================================================ 14. natural-language-processing-course
    p = "np"
    C.append({
        "slug": "natural-language-processing-course", "prefix": p,
        "c1": "#10b981", "c2": "#8b5cf6", "acc": "#a78bfa", "bg": "#040f0b",
        "title": "Natural Language Processing Course (NLP) | Learn NLP in Python",
        "meta_desc": "NLP course — learn natural language processing in Python. Tokenization, embeddings, sentiment analysis, text classification and transformers. Build AI that understands text. Live, hands-on, small batches. Free demo.",
        "keywords": "natural language processing course, nlp course, learn nlp, nlp python, text classification course, sentiment analysis course, word embeddings, transformers nlp, nlp with python, spacy nltk course",
        "og_title": "Natural Language Processing Course | NLP in Python",
        "og_desc": "Learn NLP in Python — tokenization, embeddings, sentiment analysis, text classification and transformers. Build AI that understands language. Free demo.",
        "tw_title": "Natural Language Processing Course",
        "tw_desc": "Learn NLP in Python — embeddings, sentiment, text classification, transformers. Live hands-on classes. Free demo.",
        "leaf": "Natural Language Processing Course", "reviews": "344",
        "org_desc": "Live online NLP course teaching natural language processing in Python — tokenization, embeddings, sentiment analysis, text classification and transformers — in small mentor-led batches.",
        "courses": [
            ("NLP Foundations in Python", "The building blocks of natural language processing — text cleaning, tokenization, embeddings and classic models — built hands-on in Python so machines can work with human language.", "NLP-FOUND", "Intermediate", "1499"),
            ("Modern NLP &amp; Transformers", "Sentiment analysis, text classification and an introduction to transformer models that power modern language AI, applied to real text projects in Python.", "NLP-TRANSFORMERS", "Intermediate", "1499"),
        ],
        "eyebrow_a": "NLP", "eyebrow_b": "AI that understands text",
        "h1_plain": "Natural Language", "h1_grad": "Processing",
        "lede": "Teach machines to understand human language. This NLP course takes you from text cleaning and tokenization to embeddings, sentiment analysis, text classification and transformers — building AI that reads, classifies and understands text. Hands-on in Python, live with a mentor.",
        "cta_primary": "Book a Free Demo",
        "ribbon": [("text→AI", "Language understood"), ("5–8", "Students per batch"), ("Python", "Hands-on NLP"), ("Live", "Mentor-led")],
        "hero_html": panel_hero(p, "nlp_pipeline.py", [
            (IC['chat'], "Raw text", '"This course is great!"', "input"),
            (IC['list'], "Tokenize", "Split into tokens", "[this, course…]"),
            (IC['layers'], "Embed", "Words → vectors", "[0.2, -0.7…]"),
            (IC['check'], "Predict", "Sentiment", "positive 0.97"),
        ]),
        "quick_answer": "<strong>Modern Age Coders' Natural Language Processing Course teaches you to build AI that understands human language in Python.</strong> You'll learn text cleaning and tokenization, word embeddings, sentiment analysis and text classification, and get an introduction to the transformer models behind modern language AI — all hands-on with real text. Classes are live in small batches of 5–8 with a mentor, group plans start at ₹1,499/month, and a free demo comes first.",
        "form_h": "Book Your Free NLP Demo",
        "form_sub": "Tell us your goal and we'll arrange a free, no-obligation NLP demo with a mentor. No payment required to try.",
        "form_placeholder": "e.g. I want to build NLP models for sentiment analysis and text classification in Python...",
        "form_btn": "Book My Free Demo", "wa_text": "the NLP Course",
        "wa_float": "Hi%2C%20I'm%20interested%20in%20the%20NLP%20Course!",
        "source_tag": "NLP Course Page", "lead_name": "NLP Demo Booking",
        "learn_kicker": "What You'll Learn", "learn_h": "Make Machines Understand Language",
        "learn_sub": "From raw text to working language models — built step by step in Python.",
        "learn_cards": [
            (IC['list'], "#10b981", "Text &amp; Tokens", "Clean, tokenize and represent text so models can use it — the essential first mile of every NLP project."),
            (IC['layers'], "#8b5cf6", "Embeddings", "Turn words into vectors that capture meaning — the idea that makes modern NLP work."),
            (IC['check'], "#10b981", "Classify &amp; Analyse", "Build sentiment analysis and text classifiers, then meet the transformers powering today's language AI."),
        ],
        "road_h": "The NLP Roadmap", "road_sub": "Four stages from raw text to language models.",
        "roadmap": [
            ("STAGE 01", "Text Basics", "Cleaning, tokenization and turning messy text into usable data."),
            ("STAGE 02", "Embeddings", "Representing words and sentences as meaningful vectors."),
            ("STAGE 03", "NLP Models", "Build sentiment analysis and text classification models."),
            ("STAGE 04", "Transformers", "Meet the architecture behind modern NLP and LLMs, applied hands-on."),
        ],
        "promo_h": "Go Further With Language AI", "promo_sub": "Where NLP connects next.",
        "promo": promo_for("natural-language-processing-course", [
            "/large-language-models-course", "/prompt-engineering-course", "/deep-learning-course",
            "/neural-networks-course", "/generative-ai-course", "/python-for-machine-learning",
            "/ai-agents-course", "/best-ai-and-machine-learning-course-in-india"]),
        "why_kicker": "Why This Course", "why_h": "Why NLP Is One of AI's Hottest Skills",
        "why_intro": "From chatbots to search to the LLMs everyone's talking about, <strong>language is where AI is exploding</strong>. NLP skills are in serious demand — and this course gives you the foundation that modern language AI is built on.",
        "why_h1": "From classic NLP to transformers",
        "why_p1": "You start with the durable fundamentals — tokens, embeddings, classification — then connect them to transformers, so you understand both how NLP worked and why today's models are so powerful.",
        "why_h2": "The on-ramp to LLMs",
        "why_p2": "This is the natural lead-in to <a href=\"/large-language-models-course\">large language models</a> and <a href=\"/prompt-engineering-course\">prompt engineering</a>, and it pairs well with <a href=\"/deep-learning-course\">deep learning</a> for the theory underneath.",
        "price_h": "Course Fees",
        "plans": ("Live NLP building", "Project guidance &amp; certificate", "Priority project &amp; career prep"),
        "quotes": [
            ("Built a sentiment analyser on real reviews in week three. Seeing the model 'get' language was amazing.", "Divya N.", "College student"),
            ("The embeddings explanation made transformers and LLMs finally make sense to me.", "Aakash R.", "Working professional"),
            ("Perfect bridge into LLMs. Practical, hands-on, and genuinely useful at work.", "Nadia K.", "Career switcher"),
        ],
        "band_h": "Build AI that understands language",
        "band_p": "Book a free NLP demo and build a text model with a mentor before you spend a rupee.",
        "canvas_words": ["NLP", "tokens", "embed", "text", "sentiment", "transformer", "vector", "classify", "BERT"],
    })

    # ============================================================ 15. computer-vision-course
    p = "cv"
    C.append({
        "slug": "computer-vision-course", "prefix": p,
        "c1": "#06b6d4", "c2": "#d946ef", "acc": "#e879f9", "bg": "#040c10",
        "title": "Computer Vision Course | Learn Image AI &amp; CNNs in Python",
        "meta_desc": "Computer vision course — learn how AI sees. Image classification, convolutional neural networks (CNNs), object detection and OpenCV in Python. Build vision models hands-on. Live, small batches. Free demo.",
        "keywords": "computer vision course, learn computer vision, cnn course, image classification course, object detection course, opencv python course, deep learning vision, image recognition course, computer vision python, cv course india",
        "og_title": "Computer Vision Course | AI That Sees",
        "og_desc": "Learn computer vision in Python — image classification, CNNs, object detection and OpenCV. Build vision models hands-on. Live classes. Free demo.",
        "tw_title": "Computer Vision Course",
        "tw_desc": "Learn how AI sees — CNNs, image classification, object detection, OpenCV in Python. Live classes. Free demo.",
        "leaf": "Computer Vision Course", "reviews": "338",
        "org_desc": "Live online computer vision course teaching image classification, convolutional neural networks, object detection and OpenCV in Python, in small mentor-led batches.",
        "courses": [
            ("Computer Vision Foundations", "How machines see — images as data, OpenCV basics, and convolutional neural networks for image classification — built hands-on in Python.", "CV-FOUND", "Intermediate", "1499"),
            ("Object Detection &amp; CNN Projects", "Detecting and locating objects in images, working with pretrained vision models, and building real computer-vision projects in Python.", "CV-DETECT", "Intermediate", "1499"),
        ],
        "eyebrow_a": "Computer Vision", "eyebrow_b": "AI that sees",
        "h1_plain": "Computer Vision", "h1_grad": "Course",
        "lede": "Give machines sight. Learn how images become data, how convolutional neural networks classify them, and how object detection finds things in a scene — using Python and OpenCV. Build real computer-vision models, hands-on and live with a mentor.",
        "cta_primary": "Book a Free Demo",
        "ribbon": [("CNN", "How AI sees"), ("5–8", "Students per batch"), ("OpenCV", "Hands-on vision"), ("Live", "Mentor-led")],
        "hero_html": panel_hero(p, "vision.py", [
            (IC['eye'], "Input image", "Pixels in", "224×224×3"),
            (IC['layers'], "Convolutions", "Detect features", "edges→shapes"),
            (IC['cpu'], "CNN", "Learn patterns", "feature maps"),
            (IC['target'], "Detect", "Box + label", "cat 0.98"),
        ]),
        "quick_answer": "<strong>Modern Age Coders' Computer Vision Course teaches you to build AI that sees, in Python.</strong> You'll learn how images become data, use OpenCV, build convolutional neural networks (CNNs) for image classification, and explore object detection with pretrained models — all hands-on with real images. Classes are live in small batches of 5–8 with a mentor, group plans start at ₹1,499/month, and a free demo comes first.",
        "form_h": "Book Your Free Computer Vision Demo",
        "form_sub": "Tell us your goal and we'll arrange a free, no-obligation vision demo with a mentor. No payment required to try.",
        "form_placeholder": "e.g. I want to build image classification and object detection models in Python...",
        "form_btn": "Book My Free Demo", "wa_text": "the Computer Vision Course",
        "wa_float": "Hi%2C%20I'm%20interested%20in%20the%20Computer%20Vision%20Course!",
        "source_tag": "Computer Vision Course Page", "lead_name": "Computer Vision Demo Booking",
        "learn_kicker": "What You'll Learn", "learn_h": "Teach Machines to See",
        "learn_sub": "From pixels to predictions — build real vision models step by step.",
        "learn_cards": [
            (IC['eye'], "#06b6d4", "Images as Data &amp; OpenCV", "How images are represented as numbers and how to load, transform and work with them in Python using OpenCV."),
            (IC['cpu'], "#d946ef", "CNNs", "Convolutional neural networks — the architecture that powers image recognition — built and trained to classify images."),
            (IC['target'], "#06b6d4", "Object Detection", "Find and locate objects in images, use pretrained models, and build real vision projects."),
        ],
        "road_h": "The Computer Vision Roadmap", "road_sub": "Four stages from pixels to a working vision model.",
        "roadmap": [
            ("STAGE 01", "Images &amp; OpenCV", "Represent and manipulate images as data in Python."),
            ("STAGE 02", "CNNs", "Build convolutional neural networks for image classification."),
            ("STAGE 03", "Detection", "Locate objects and use powerful pretrained vision models."),
            ("STAGE 04", "Vision Project", "Build and present a real computer-vision project."),
        ],
        "promo_h": "Go Further", "promo_sub": "Where computer vision connects next.",
        "promo": promo_for("computer-vision-course", [
            "/deep-learning-course", "/neural-networks-course", "/deep-learning-with-tensorflow-and-pytorch",
            "/how-to-train-machine-learning-models", "/python-for-machine-learning", "/natural-language-processing-course",
            "/ai-ml-projects-for-students", "/best-ai-and-machine-learning-course-in-india"]),
        "why_kicker": "Why This Course", "why_h": "Why Computer Vision Is Everywhere",
        "why_intro": "Face unlock, medical scans, self-driving cars, quality inspection, AR filters — <strong>computer vision is one of AI's most visible and valuable fields</strong>. Learning it opens doors across industries, and it's genuinely fun to watch a model recognise what it sees.",
        "why_h1": "CNNs demystified",
        "why_p1": "Convolutions sound intimidating but the idea — detecting simple features then combining them — is intuitive. We build that intuition, then you train CNNs on real images and watch them learn.",
        "why_h2": "Built on neural network foundations",
        "why_p2": "Vision builds directly on <a href=\"/neural-networks-course\">neural networks</a> and <a href=\"/deep-learning-course\">deep learning</a>, and you'll use frameworks covered in our <a href=\"/deep-learning-with-tensorflow-and-pytorch\">TensorFlow &amp; PyTorch</a> track.",
        "price_h": "Course Fees",
        "plans": ("Live vision building", "Project guidance &amp; certificate", "Priority project &amp; career prep"),
        "quotes": [
            ("Trained a CNN to classify images and built an object detector. Watching it draw boxes on the right things was magic.", "Harsh V.", "College student"),
            ("Clear, hands-on, and the OpenCV work was immediately useful in my job.", "Reena S.", "Working professional"),
            ("CNNs finally make sense. Best practical vision course I could find.", "Tarun M.", "Career switcher"),
        ],
        "band_h": "Build AI that can see",
        "band_p": "Book a free demo and train a vision model with a mentor before you spend a rupee.",
        "canvas_words": ["vision", "CNN", "image", "pixels", "detect", "OpenCV", "conv", "classify", "see"],
    })

    # ============================================================ 16. large-language-models-course
    p = "lm"
    C.append({
        "slug": "large-language-models-course", "prefix": p,
        "c1": "#8b5cf6", "c2": "#f59e0b", "acc": "#fbbf24", "bg": "#0a0712",
        "title": "Large Language Models Course (LLMs) | Learn &amp; Build with LLMs",
        "meta_desc": "Large Language Models course — understand how LLMs like GPT work, and build real apps with them. Transformers, tokens, embeddings, fine-tuning and RAG, plus building with LLM APIs in Python. Live, small batches. Free demo.",
        "keywords": "large language models course, llm course, learn llms, gpt course, transformers course, build with llms, llm api course, fine-tuning llm, rag course, llm engineering, generative ai llm course",
        "og_title": "Large Language Models Course | Understand &amp; Build with LLMs",
        "og_desc": "How LLMs like GPT work, plus building real apps with LLM APIs — transformers, embeddings, fine-tuning and RAG in Python. Live classes. Free demo.",
        "tw_title": "Large Language Models Course",
        "tw_desc": "Understand and build with LLMs — transformers, embeddings, fine-tuning, RAG, LLM APIs in Python. Live classes. Free demo.",
        "leaf": "Large Language Models Course", "reviews": "351",
        "org_desc": "Live online Large Language Models course teaching how LLMs like GPT work — transformers, tokens, embeddings, fine-tuning and RAG — and how to build real applications with LLM APIs in Python, in small mentor-led batches.",
        "courses": [
            ("How LLMs Work", "The ideas behind large language models — tokens, embeddings, attention and the transformer architecture — explained clearly so GPT-style models stop being magic.", "LLM-FOUND", "Intermediate", "1499"),
            ("Building LLM Applications", "Building real apps with LLM APIs in Python — prompting, embeddings, retrieval-augmented generation (RAG) and an intro to fine-tuning — the skills behind modern AI products.", "LLM-BUILD", "Intermediate", "1499"),
        ],
        "eyebrow_a": "LLMs", "eyebrow_b": "the tech behind GPT",
        "h1_plain": "Large Language", "h1_grad": "Models",
        "lede": "Understand the AI everyone's talking about — and build with it. Learn how large language models like GPT actually work (tokens, embeddings, attention, transformers), then build real applications using LLM APIs, embeddings and RAG in Python. Live, hands-on, mentor-led.",
        "cta_primary": "Book a Free Demo",
        "ribbon": [("GPT", "How it works"), ("5–8", "Students per batch"), ("RAG", "Build real apps"), ("Live", "Mentor-led")],
        "hero_html": panel_hero(p, "llm_app.py", [
            (IC['chat'], "Prompt", "User question", "input"),
            (IC['data'], "Retrieve (RAG)", "Find relevant docs", "embeddings"),
            (IC['cpu'], "LLM", "Transformer reasons", "GPT-style"),
            (IC['check'], "Answer", "Grounded response", "output"),
        ]),
        "quick_answer": "<strong>Modern Age Coders' Large Language Models Course teaches both how LLMs like GPT work and how to build with them.</strong> You'll understand tokens, embeddings, attention and the transformer architecture, then build real applications using LLM APIs in Python — prompting, embeddings, retrieval-augmented generation (RAG) and an introduction to fine-tuning. Classes are live in small batches of 5–8 with a mentor, group plans start at ₹1,499/month, and a free demo comes first.",
        "form_h": "Book Your Free LLM Demo",
        "form_sub": "Tell us your goal and we'll arrange a free, no-obligation LLM demo with a mentor. No payment required to try.",
        "form_placeholder": "e.g. I want to understand how LLMs work and build a RAG app with an LLM API...",
        "form_btn": "Book My Free Demo", "wa_text": "the Large Language Models Course",
        "wa_float": "Hi%2C%20I'm%20interested%20in%20the%20Large%20Language%20Models%20Course!",
        "source_tag": "Large Language Models Course Page", "lead_name": "LLM Demo Booking",
        "learn_kicker": "What You'll Learn", "learn_h": "Understand &amp; Build with LLMs",
        "learn_sub": "From transformers to shipping a real LLM-powered app.",
        "learn_cards": [
            (IC['cpu'], "#8b5cf6", "How LLMs Work", "Tokens, embeddings, attention and transformers — a clear mental model of what GPT-style models really do."),
            (IC['code'], "#f59e0b", "Build with LLM APIs", "Call LLM APIs from Python, structure prompts, and wire models into real applications."),
            (IC['data'], "#8b5cf6", "RAG &amp; Fine-Tuning", "Ground LLMs in your own data with retrieval-augmented generation, and understand when and how fine-tuning helps."),
        ],
        "road_h": "The LLM Roadmap", "road_sub": "Four stages from understanding to a working LLM app.",
        "roadmap": [
            ("STAGE 01", "Transformers", "Tokens, embeddings and attention — how LLMs represent and process language."),
            ("STAGE 02", "Build with APIs", "Use LLM APIs in Python to generate, summarise and reason."),
            ("STAGE 03", "RAG", "Add retrieval so the model answers from your own documents."),
            ("STAGE 04", "App &amp; Fine-Tune", "Ship an LLM-powered app and explore fine-tuning."),
        ],
        "promo_h": "Go Further With LLMs", "promo_sub": "Tracks that pair with LLM skills.",
        "promo": promo_for("large-language-models-course", [
            "/prompt-engineering-course", "/ai-agents-course", "/generative-ai-course",
            "/natural-language-processing-course", "/neural-networks-course", "/deep-learning-course",
            "/python-for-machine-learning", "/best-ai-and-machine-learning-course-in-india"]),
        "why_kicker": "Why This Course", "why_h": "Why LLM Skills Are the Hottest in Tech",
        "why_intro": "LLMs have created an entirely new category of jobs — and companies are scrambling for people who can <strong>build real products with them, not just chat in a browser</strong>. Understanding how they work and how to engineer with them is one of the most valuable skills you can have right now.",
        "why_h1": "Beyond using ChatGPT",
        "why_p1": "Anyone can type into a chatbot. The career skill is building applications — RAG systems, assistants, tools — on top of LLM APIs, and knowing the architecture well enough to make good engineering choices. That's what we teach.",
        "why_h2": "Part of the generative-AI stack",
        "why_p2": "This connects directly to <a href=\"/prompt-engineering-course\">prompt engineering</a>, <a href=\"/ai-agents-course\">AI agents</a> and <a href=\"/generative-ai-course\">generative AI</a> — together they're the modern AI-product toolkit.",
        "price_h": "Course Fees",
        "plans": ("Live LLM building", "Project guidance &amp; certificate", "Priority project &amp; career prep"),
        "quotes": [
            ("Built a RAG chatbot over my own documents. Understanding transformers made every design choice clearer.", "Aditya R.", "Working professional"),
            ("This took me from 'ChatGPT user' to 'I can build LLM apps'. Huge for my career.", "Sana M.", "Career switcher"),
            ("Clear on attention and embeddings, and the hands-on API work was gold.", "Vivek K.", "College student"),
        ],
        "band_h": "Build with the AI everyone's talking about",
        "band_p": "Book a free demo and build an LLM-powered app with a mentor before you spend a rupee.",
        "canvas_words": ["LLM", "GPT", "tokens", "attention", "transformer", "RAG", "embed", "prompt", "fine-tune"],
    })

    # ============================================================ 17. prompt-engineering-course
    p = "pe"
    C.append({
        "slug": "prompt-engineering-course", "prefix": p,
        "c1": "#f59e0b", "c2": "#8b5cf6", "acc": "#a78bfa", "bg": "#0f0a04",
        "title": "Prompt Engineering Course | Master Prompting for AI &amp; LLMs",
        "meta_desc": "Prompt engineering course — master prompting for ChatGPT, Claude and other LLMs. Prompt patterns, system prompts, few-shot, chain-of-thought, and building with LLM APIs in Python. Practical and hands-on. Live, small batches. Free demo.",
        "keywords": "prompt engineering course, learn prompt engineering, prompting course, chatgpt prompt course, llm prompting, prompt patterns, prompt engineering python, ai prompting course, master prompts, prompt engineering india",
        "og_title": "Prompt Engineering Course | Master Prompting for LLMs",
        "og_desc": "Master prompting for ChatGPT, Claude and other LLMs — prompt patterns, system prompts, few-shot, chain-of-thought, and building with LLM APIs. Free demo.",
        "tw_title": "Prompt Engineering Course",
        "tw_desc": "Master prompting for LLMs — patterns, system prompts, few-shot, chain-of-thought, LLM APIs in Python. Live classes. Free demo.",
        "leaf": "Prompt Engineering Course", "reviews": "347",
        "org_desc": "Live online prompt engineering course teaching effective prompting for LLMs — prompt patterns, system prompts, few-shot and chain-of-thought — and building with LLM APIs in Python, in small mentor-led batches.",
        "courses": [
            ("Prompt Engineering Fundamentals", "How to get reliable, high-quality results from LLMs — prompt structure, system prompts, few-shot examples and chain-of-thought reasoning — practised on real tasks.", "PE-FOUND", "Beginner to Intermediate", "1499"),
            ("Building with Prompts &amp; LLM APIs", "Turning prompting into real software — calling LLM APIs in Python, structuring reliable prompts, and patterns for building dependable AI features.", "PE-BUILD", "Intermediate", "1499"),
        ],
        "eyebrow_a": "Prompt Engineering", "eyebrow_b": "get more from every LLM",
        "h1_plain": "Prompt", "h1_grad": "Engineering",
        "lede": "Prompting is a real skill — and a valuable one. Learn to get reliable, high-quality results from ChatGPT, Claude and other LLMs with prompt patterns, system prompts, few-shot and chain-of-thought, then turn prompts into software with LLM APIs in Python. Practical, hands-on, mentor-led.",
        "cta_primary": "Book a Free Demo",
        "ribbon": [("patterns", "Reliable results"), ("5–8", "Students per batch"), ("APIs", "Build, not just chat"), ("Live", "Mentor-led")],
        "hero_html": code_hero(p, "prompt.py", '''<span class="cm"># a well-engineered prompt</span>
system = <span class="st">"You are a precise data analyst."</span>
prompt = <span class="st">f"""
Task: classify the review below.
Return JSON: {{label, confidence}}.
Review: {text}
"""</span>

reply = llm.<span class="fn">generate</span>(system, prompt)
<span class="fn">print</span>(reply)   <span class="cm"># clean, structured output</span>'''),
        "quick_answer": "<strong>Modern Age Coders' Prompt Engineering Course teaches you to get reliable, high-quality results from LLMs and build with them.</strong> You'll master prompt structure, system prompts, few-shot examples and chain-of-thought reasoning, then turn prompting into software by calling LLM APIs in Python with patterns for dependable output. Classes are live in small batches of 5–8 with a mentor, group plans start at ₹1,499/month, and a free demo comes first.",
        "form_h": "Book Your Free Prompt Engineering Demo",
        "form_sub": "Tell us your goal and we'll arrange a free, no-obligation demo with a mentor. No payment required to try.",
        "form_placeholder": "e.g. I want to write reliable prompts and build AI features with LLM APIs...",
        "form_btn": "Book My Free Demo", "wa_text": "the Prompt Engineering Course",
        "wa_float": "Hi%2C%20I'm%20interested%20in%20the%20Prompt%20Engineering%20Course!",
        "source_tag": "Prompt Engineering Course Page", "lead_name": "Prompt Engineering Demo Booking",
        "learn_kicker": "What You'll Learn", "learn_h": "Prompting, Done Properly",
        "learn_sub": "From better answers to building reliable AI features.",
        "learn_cards": [
            (IC['chat'], "#f59e0b", "Prompt Patterns", "System prompts, few-shot, chain-of-thought and role prompting — the patterns that turn vague replies into reliable results."),
            (IC['target'], "#8b5cf6", "Reliable Output", "Get structured, consistent output (like clean JSON) and reduce hallucinations — the difference between a demo and a product."),
            (IC['code'], "#f59e0b", "Build with APIs", "Call LLM APIs from Python and wrap prompts into real, dependable AI features."),
        ],
        "road_h": "The Prompt Engineering Roadmap", "road_sub": "Four stages from better prompts to shipped features.",
        "roadmap": [
            ("STAGE 01", "Prompt Basics", "Structure, clarity and context — why some prompts work and others don't."),
            ("STAGE 02", "Patterns", "Few-shot, chain-of-thought, system and role prompts for hard tasks."),
            ("STAGE 03", "Reliability", "Structured output, guardrails and reducing hallucinations."),
            ("STAGE 04", "Build", "Turn prompts into software with LLM APIs in Python."),
        ],
        "promo_h": "Go Further", "promo_sub": "Tracks that pair with prompt engineering.",
        "promo": promo_for("prompt-engineering-course", [
            "/large-language-models-course", "/ai-agents-course", "/generative-ai-course",
            "/natural-language-processing-course", "/python-for-machine-learning", "/how-to-build-ai-models",
            "/best-ai-and-machine-learning-course-in-india", "/online-ai-and-machine-learning-classes"]),
        "why_kicker": "Why This Course", "why_h": "Why Prompt Engineering Is a Real Career Skill",
        "why_intro": "As every company adds AI features, the people who can <strong>make LLMs behave reliably</strong> are in demand. Good prompting is the cheapest, fastest lever on AI quality — and it's a skill you can apply the very next day at work.",
        "why_h1": "Reliability is the real game",
        "why_p1": "Getting one good answer is luck; getting consistently good, structured answers at scale is engineering. We focus on the patterns and testing mindset that make LLM output dependable enough to build on.",
        "why_h2": "The gateway to building AI products",
        "why_p2": "Prompting connects straight into <a href=\"/large-language-models-course\">large language models</a> and <a href=\"/ai-agents-course\">AI agents</a>. With a little <a href=\"/python-for-machine-learning\">Python</a>, you go from prompting to shipping features.",
        "price_h": "Course Fees",
        "plans": ("Live prompting practice", "Project guidance &amp; certificate", "Priority project &amp; career prep"),
        "quotes": [
            ("My prompts went from hit-or-miss to reliable. I shipped an AI feature at work the same month.", "Neha S.", "Working professional"),
            ("Chain-of-thought and structured output were the missing pieces. Practical from class one.", "Rahul D.", "College student"),
            ("Turned 'playing with ChatGPT' into a real, hireable skill. Worth every rupee.", "Zoya K.", "Career switcher"),
        ],
        "band_h": "Make AI do exactly what you want",
        "band_p": "Book a free demo and engineer reliable prompts with a mentor before you spend a rupee.",
        "canvas_words": ["prompt", "system", "few-shot", "LLM", "JSON", "chain", "reliable", "API", "context"],
    })

    # ============================================================ 18. ai-agents-course
    p = "ag"
    C.append({
        "slug": "ai-agents-course", "prefix": p,
        "c1": "#3b82f6", "c2": "#22c55e", "acc": "#4ade80", "bg": "#04090f",
        "title": "AI Agents Course | Build Autonomous AI Agents with LLMs",
        "meta_desc": "AI agents course — build autonomous AI agents that reason, use tools and take actions. The think-act-observe loop, tool use, memory and multi-step agents with LLMs in Python. Hands-on, live, small batches. Free demo.",
        "keywords": "ai agents course, build ai agents, autonomous ai agents, llm agents, agentic ai course, ai agent python, tool-using agents, langchain agents course, ai automation course, build autonomous agents",
        "og_title": "AI Agents Course | Build Autonomous AI Agents",
        "og_desc": "Build AI agents that reason, use tools and act — the think-act-observe loop, tool use and memory with LLMs in Python. Hands-on. Live classes. Free demo.",
        "tw_title": "AI Agents Course",
        "tw_desc": "Build autonomous AI agents with LLMs — tool use, memory, the agent loop, in Python. Live hands-on classes. Free demo.",
        "leaf": "AI Agents Course", "reviews": "333",
        "org_desc": "Live online AI agents course teaching how to build autonomous, tool-using AI agents with LLMs in Python — the think-act-observe loop, tool use, memory and multi-step reasoning — in small mentor-led batches.",
        "courses": [
            ("AI Agent Foundations", "What an AI agent is and how it works — the think-act-observe loop, giving LLMs tools, and letting them take multi-step actions toward a goal — built hands-on in Python.", "AGENT-FOUND", "Intermediate", "1499"),
            ("Building Tool-Using Agents", "Building real agents that call tools and APIs, keep memory, and complete multi-step tasks reliably — the architecture behind modern agentic AI.", "AGENT-BUILD", "Intermediate", "1499"),
        ],
        "eyebrow_a": "AI Agents", "eyebrow_b": "AI that takes action",
        "h1_plain": "AI Agents", "h1_grad": "Course",
        "lede": "The next wave of AI doesn't just answer — it acts. Learn to build autonomous AI agents that reason, use tools and complete multi-step tasks with LLMs. The think-act-observe loop, tool use, memory and reliable agent design, built hands-on in Python, live with a mentor.",
        "cta_primary": "Book a Free Demo",
        "ribbon": [("act", "AI that does"), ("5–8", "Students per batch"), ("tools", "Agents use tools"), ("Live", "Mentor-led")],
        "hero_html": panel_hero(p, "agent_loop.py", [
            (IC['brain'], "Think", "Reason about goal", "plan"),
            (IC['gear'], "Act", "Call a tool / API", "search()"),
            (IC['eye'], "Observe", "Read the result", "feedback"),
            (IC['check'], "Repeat → Done", "Until goal met", "✓ result"),
        ]),
        "quick_answer": "<strong>Modern Age Coders' AI Agents Course teaches you to build autonomous AI agents with LLMs in Python.</strong> You'll learn the think-act-observe loop, how to give an LLM tools and memory, and how to design agents that complete multi-step tasks reliably — the architecture behind modern agentic AI. It's hands-on with real agents. Classes are live in small batches of 5–8 with a mentor, group plans start at ₹1,499/month, and a free demo comes first.",
        "form_h": "Book Your Free AI Agents Demo",
        "form_sub": "Tell us your goal and we'll arrange a free, no-obligation demo with a mentor. No payment required to try.",
        "form_placeholder": "e.g. I want to build an autonomous AI agent that uses tools to complete tasks...",
        "form_btn": "Book My Free Demo", "wa_text": "the AI Agents Course",
        "wa_float": "Hi%2C%20I'm%20interested%20in%20the%20AI%20Agents%20Course!",
        "source_tag": "AI Agents Course Page", "lead_name": "AI Agents Demo Booking",
        "learn_kicker": "What You'll Learn", "learn_h": "Build AI That Takes Action",
        "learn_sub": "From the agent loop to a working tool-using agent.",
        "learn_cards": [
            (IC['brain'], "#3b82f6", "The Agent Loop", "Think, act, observe, repeat — the core loop that lets an LLM pursue a goal over multiple steps instead of one reply."),
            (IC['gear'], "#22c55e", "Tools &amp; Memory", "Give agents tools (search, code, APIs) and memory so they can do real work and remember context."),
            (IC['check'], "#3b82f6", "Reliable Agents", "Design, guard and debug agents so they finish tasks dependably — the hard part of agentic AI."),
        ],
        "road_h": "The AI Agents Roadmap", "road_sub": "Four stages from concept to a working agent.",
        "roadmap": [
            ("STAGE 01", "Agent Basics", "What agents are, the think-act-observe loop, and where they shine."),
            ("STAGE 02", "Tool Use", "Give an LLM tools and let it decide when to call them."),
            ("STAGE 03", "Memory &amp; Multi-Step", "Add memory and chain steps to complete real tasks."),
            ("STAGE 04", "Build an Agent", "Design, build and harden your own autonomous agent."),
        ],
        "promo_h": "Go Further", "promo_sub": "Tracks that power agentic AI.",
        "promo": promo_for("ai-agents-course", [
            "/large-language-models-course", "/prompt-engineering-course", "/generative-ai-course",
            "/natural-language-processing-course", "/python-for-machine-learning", "/how-to-build-ai-models",
            "/best-ai-and-machine-learning-course-in-india", "/online-ai-and-machine-learning-classes"]),
        "why_kicker": "Why This Course", "why_h": "Why AI Agents Are the Next Big Thing",
        "why_intro": "The industry is moving from chatbots to <strong>agents that actually get things done</strong> — booking, researching, coding, automating workflows. Being able to design and build reliable agents is one of the most forward-looking, in-demand skills in AI today.",
        "why_h1": "Reliability is the real challenge",
        "why_p1": "Making an agent that works once is easy; making one that completes tasks dependably is genuine engineering. We focus on the design, guardrails and debugging that separate toy demos from agents you can trust.",
        "why_h2": "Built on LLM and prompting skills",
        "why_p2": "Agents sit on top of <a href=\"/large-language-models-course\">LLMs</a> and <a href=\"/prompt-engineering-course\">prompt engineering</a>; a little <a href=\"/python-for-machine-learning\">Python</a> ties it together. Take them as a path or jump in here.",
        "price_h": "Course Fees",
        "plans": ("Live agent building", "Project guidance &amp; certificate", "Priority project &amp; career prep"),
        "quotes": [
            ("Built an agent that researches and summarises using tools. Seeing it plan and act on its own was incredible.", "Kabir S.", "Working professional"),
            ("The focus on reliability and debugging is what makes this course stand out. My agent actually finishes tasks.", "Ira M.", "Career switcher"),
            ("Cutting-edge and hands-on. I'm building things I couldn't have imagined a month ago.", "Dev P.", "College student"),
        ],
        "band_h": "Build AI that acts, not just answers",
        "band_p": "Book a free demo and build an autonomous agent with a mentor before you spend a rupee.",
        "canvas_words": ["agent", "think", "act", "observe", "tool", "LLM", "memory", "plan", "auto"],
    })

    # ============================================================ 19. deep-learning-with-tensorflow-and-pytorch
    p = "tp"
    C.append({
        "slug": "deep-learning-with-tensorflow-and-pytorch", "prefix": p,
        "c1": "#f97316", "c2": "#3b82f6", "acc": "#60a5fa", "bg": "#0f0904",
        "title": "Deep Learning with TensorFlow &amp; PyTorch | Hands-On DL Course",
        "meta_desc": "Deep learning with TensorFlow and PyTorch — learn the two leading frameworks hands-on. Tensors, building and training neural networks, GPUs and real DL projects in Python. Live, small batches. Free demo.",
        "keywords": "deep learning with tensorflow and pytorch, tensorflow course, pytorch course, deep learning frameworks, learn pytorch, learn tensorflow, dl course python, build neural networks tensorflow, pytorch tutorial course, deep learning india",
        "og_title": "Deep Learning with TensorFlow &amp; PyTorch | Hands-On",
        "og_desc": "Learn the two leading deep-learning frameworks hands-on — tensors, building and training neural networks, GPUs and real projects in Python. Free demo.",
        "tw_title": "Deep Learning with TensorFlow &amp; PyTorch",
        "tw_desc": "Hands-on with the two leading DL frameworks — tensors, neural nets, GPUs, real projects in Python. Live classes. Free demo.",
        "leaf": "Deep Learning with TensorFlow &amp; PyTorch", "reviews": "342",
        "org_desc": "Live online deep learning course teaching the two leading frameworks, TensorFlow and PyTorch — tensors, building and training neural networks, GPUs and real projects in Python — in small mentor-led batches.",
        "courses": [
            ("Deep Learning with PyTorch &amp; TensorFlow", "Hands-on deep learning in the two industry-standard frameworks — tensors, autograd, building and training neural networks, and when to reach for each framework.", "DL-FRAMEWORKS", "Intermediate", "1499"),
            ("Framework DL Projects", "Real deep-learning projects built and trained in PyTorch and TensorFlow, including using GPUs and pretrained models, so you can build DL the way the industry does.", "DL-PROJECTS", "Intermediate", "1499"),
        ],
        "eyebrow_a": "TensorFlow &amp; PyTorch", "eyebrow_b": "the industry DL frameworks",
        "h1_plain": "Deep Learning with", "h1_grad": "TensorFlow &amp; PyTorch",
        "lede": "Learn deep learning the way industry does it — in TensorFlow and PyTorch, the two frameworks that run real AI. Master tensors, build and train neural networks, use GPUs and pretrained models, and ship real DL projects in Python. Hands-on, live with a mentor.",
        "cta_primary": "Book a Free Demo",
        "ribbon": [("2", "Leading frameworks"), ("5–8", "Students per batch"), ("GPU", "Train real models"), ("Live", "Mentor-led")],
        "hero_html": code_hero(p, "train_dl.py", '''<span class="cm"># a training step in PyTorch</span>
<span class="kw">import</span> torch.nn <span class="kw">as</span> nn

model = nn.<span class="cl">Sequential</span>(nn.<span class="cl">Linear</span>(<span class="nu">64</span>, <span class="nu">32</span>), nn.<span class="cl">ReLU</span>(),
                      nn.<span class="cl">Linear</span>(<span class="nu">32</span>, <span class="nu">10</span>))
loss = <span class="fn">criterion</span>(model(X), y)
loss.<span class="fn">backward</span>()        <span class="cm"># autograd</span>
optimizer.<span class="fn">step</span>()      <span class="cm"># on GPU if available</span>'''),
        "quick_answer": "<strong>Modern Age Coders' Deep Learning with TensorFlow &amp; PyTorch course teaches both leading frameworks hands-on.</strong> You'll learn tensors and autograd, build and train neural networks in PyTorch and TensorFlow, use GPUs and pretrained models, and complete real deep-learning projects in Python. Classes are live in small batches of 5–8 with a mentor, group plans start at ₹1,499/month, and a free demo comes first.",
        "form_h": "Book Your Free Deep Learning Demo",
        "form_sub": "Tell us your goal and we'll arrange a free, no-obligation demo with a mentor. No payment required to try.",
        "form_placeholder": "e.g. I want to build and train deep learning models in PyTorch and TensorFlow...",
        "form_btn": "Book My Free Demo", "wa_text": "Deep Learning with TensorFlow &amp; PyTorch",
        "wa_float": "Hi%2C%20I'm%20interested%20in%20Deep%20Learning%20with%20TensorFlow%20%26%20PyTorch!",
        "source_tag": "Deep Learning TF & PyTorch Page", "lead_name": "DL Frameworks Demo Booking",
        "learn_kicker": "What You'll Learn", "learn_h": "The Industry's Deep Learning Tools",
        "learn_sub": "Both frameworks, the right way — tensors to trained models on a GPU.",
        "learn_cards": [
            (IC['cpu'], "#f97316", "Tensors &amp; Autograd", "The core data structure of deep learning and automatic differentiation — the engine that makes training work in both frameworks."),
            (IC['layers'], "#3b82f6", "Build &amp; Train Networks", "Construct neural networks in PyTorch and TensorFlow, train them, and understand the trade-offs between the two."),
            (IC['rocket'], "#f97316", "GPUs &amp; Pretrained Models", "Speed up training on GPUs and stand on the shoulders of pretrained models — exactly how real DL teams work."),
        ],
        "road_h": "The Framework Roadmap", "road_sub": "Four stages from tensors to a trained DL project.",
        "roadmap": [
            ("STAGE 01", "Tensors", "The deep-learning data structure and autograd in both frameworks."),
            ("STAGE 02", "Build Networks", "Define and train neural networks in PyTorch and TensorFlow."),
            ("STAGE 03", "Scale Up", "Use GPUs, pretrained models and transfer learning."),
            ("STAGE 04", "DL Project", "Build and train a real deep-learning project end-to-end."),
        ],
        "promo_h": "Go Further", "promo_sub": "Where these frameworks take you.",
        "promo": promo_for("deep-learning-with-tensorflow-and-pytorch", [
            "/deep-learning-course", "/neural-networks-course", "/computer-vision-course",
            "/natural-language-processing-course", "/how-to-train-machine-learning-models", "/python-for-machine-learning",
            "/ai-ml-projects-for-students", "/best-ai-and-machine-learning-course-in-india"]),
        "why_kicker": "Why This Course", "why_h": "Why TensorFlow and PyTorch Both Matter",
        "why_intro": "Real deep learning isn't done from scratch — it's done in frameworks. <strong>PyTorch dominates research and modern AI; TensorFlow is everywhere in production.</strong> Knowing both makes you immediately useful on real teams and able to read almost any DL codebase.",
        "why_h1": "Learn the tools jobs actually require",
        "why_p1": "Job listings ask for PyTorch or TensorFlow by name. This course gives you genuine, hands-on fluency in both, so you're not just theory-aware but able to build, train and debug real models.",
        "why_h2": "Built on neural network foundations",
        "why_p2": "This pairs naturally with our <a href=\"/neural-networks-course\">neural networks</a> and <a href=\"/deep-learning-course\">deep learning</a> courses for the theory, and powers <a href=\"/computer-vision-course\">computer vision</a> and NLP work.",
        "price_h": "Course Fees",
        "plans": ("Live DL building", "Project guidance &amp; certificate", "Priority project &amp; career prep"),
        "quotes": [
            ("Finally fluent in both PyTorch and TensorFlow. Reading research code and building models is no longer scary.", "Manish R.", "College student"),
            ("Using a GPU and pretrained models changed what I can build. Hands-on and practical throughout.", "Lavanya S.", "Working professional"),
            ("Knowing both frameworks made me far more employable. Great mentor support.", "Yusuf K.", "Career switcher"),
        ],
        "band_h": "Build deep learning the industry way",
        "band_p": "Book a free demo and train a model in PyTorch or TensorFlow with a mentor before you spend a rupee.",
        "canvas_words": ["tensor", "PyTorch", "TF", "autograd", "GPU", "layer", "train", "model", "deep"],
    })

    # ============================================================ 20. data-analytics-course
    p = "da"
    C.append({
        "slug": "data-analytics-course", "prefix": p,
        "c1": "#14b8a6", "c2": "#6366f1", "acc": "#818cf8", "bg": "#040f0d",
        "title": "Data Analytics Course | Learn Data Analysis, SQL &amp; Dashboards",
        "meta_desc": "Data analytics course — turn data into decisions. Excel, SQL, Python (pandas), visualization and dashboards, plus analytical thinking for real business insight. Live, hands-on, small batches. Free demo.",
        "keywords": "data analytics course, data analysis course, learn data analytics, sql course, data analyst course, python pandas course, data visualization course, business analytics, dashboard course, data analyst india",
        "og_title": "Data Analytics Course | Turn Data Into Decisions",
        "og_desc": "Learn data analytics — Excel, SQL, Python (pandas), visualization and dashboards, plus analytical thinking for real business insight. Live classes. Free demo.",
        "tw_title": "Data Analytics Course",
        "tw_desc": "Turn data into decisions — SQL, Python/pandas, visualization, dashboards and analytical thinking. Live classes. Free demo.",
        "leaf": "Data Analytics Course", "reviews": "369",
        "org_desc": "Live online data analytics course teaching Excel, SQL, Python with pandas, data visualization and dashboards, plus analytical thinking for business insight, in small mentor-led batches.",
        "courses": [
            ("Data Analytics Foundations", "The data-analyst toolkit — spreadsheets, SQL for querying data, and Python with pandas for analysis — taught hands-on on realistic datasets.", "DA-FOUND", "Beginner to Intermediate", "1499"),
            ("Visualization, Dashboards &amp; Insight", "Turning analysis into clear charts and dashboards and communicating findings, plus the analytical thinking that turns numbers into business decisions.", "DA-INSIGHT", "Intermediate", "1499"),
        ],
        "eyebrow_a": "Data Analytics", "eyebrow_b": "turn data into decisions",
        "h1_plain": "Data Analytics", "h1_grad": "Course",
        "lede": "Data is everywhere — analysts who can read it get hired. Learn SQL, Python with pandas, visualization and dashboards, and the analytical thinking that turns raw numbers into business decisions. Practical, hands-on, and built on real datasets, live with a mentor.",
        "cta_primary": "Book a Free Demo",
        "ribbon": [("SQL", "Query any data"), ("5–8", "Students per batch"), ("pandas", "Analyse in Python"), ("Live", "Mentor-led")],
        "hero_html": panel_hero(p, "analytics_dashboard", [
            (IC['data'], "Query (SQL)", "Pull the data", "SELECT …"),
            (IC['list'], "Clean (pandas)", "Shape &amp; aggregate", "groupby()"),
            (IC['chart'], "Visualize", "Charts &amp; trends", "↑ 23%"),
            (IC['target'], "Insight", "Drive a decision", "recommend"),
        ]),
        "quick_answer": "<strong>Modern Age Coders' Data Analytics Course teaches you to turn data into decisions.</strong> You'll learn spreadsheets, SQL for querying data, Python with pandas for analysis, and data visualization and dashboards — plus the analytical thinking that turns numbers into business insight. Everything is hands-on on realistic datasets. Classes are live in small batches of 5–8 with a mentor, group plans start at ₹1,499/month, and a free demo comes first.",
        "form_h": "Book Your Free Data Analytics Demo",
        "form_sub": "Tell us your goal and we'll arrange a free, no-obligation demo with a mentor. No payment required to try.",
        "form_placeholder": "e.g. I want to become a data analyst — SQL, pandas and dashboards on real data...",
        "form_btn": "Book My Free Demo", "wa_text": "the Data Analytics Course",
        "wa_float": "Hi%2C%20I'm%20interested%20in%20the%20Data%20Analytics%20Course!",
        "source_tag": "Data Analytics Course Page", "lead_name": "Data Analytics Demo Booking",
        "learn_kicker": "What You'll Learn", "learn_h": "The Data Analyst's Toolkit",
        "learn_sub": "From querying raw data to insights leaders act on.",
        "learn_cards": [
            (IC['data'], "#14b8a6", "SQL &amp; Spreadsheets", "Query databases with SQL and work confidently in spreadsheets — the everyday tools of every data analyst."),
            (IC['list'], "#6366f1", "Python &amp; pandas", "Clean, transform and analyse data at scale in Python with pandas — far beyond what spreadsheets can do."),
            (IC['chart'], "#14b8a6", "Visualization &amp; Insight", "Build clear charts and dashboards and tell the story in the data so decision-makers act on it."),
        ],
        "road_h": "The Data Analytics Roadmap", "road_sub": "Four stages from raw data to real insight.",
        "roadmap": [
            ("STAGE 01", "Data &amp; SQL", "Spreadsheets and SQL to find and pull the data you need."),
            ("STAGE 02", "Analyse in Python", "pandas for cleaning, aggregating and exploring data."),
            ("STAGE 03", "Visualize", "Charts and dashboards that make patterns obvious."),
            ("STAGE 04", "Insight Project", "Take a dataset to a clear, decision-ready analysis."),
        ],
        "promo_h": "Go Further", "promo_sub": "Where analytics leads next.",
        "promo": promo_for("data-analytics-course", [
            "/data-science-course", "/python-for-data-science", "/machine-learning-course-for-beginners",
            "/python-for-machine-learning", "/best-ai-and-machine-learning-course-in-india", "/ai-ml-projects-for-students",
            "/ai-ml-course-for-college-students", "/online-ai-and-machine-learning-classes"]),
        "why_kicker": "Why This Course", "why_h": "Why Data Analytics Is a Smart Career Bet",
        "why_intro": "Every team — marketing, finance, product, operations — now runs on data, and <strong>analysts who can answer questions with it are in demand across every industry</strong>. It's also one of the most accessible entry points into a data career.",
        "why_h1": "Practical, employable skills fast",
        "why_p1": "SQL and pandas are exactly what analyst jobs ask for, and you can apply them immediately at work. We teach on realistic data so the skills transfer the day you finish.",
        "why_h2": "A stepping stone to data science",
        "why_p2": "Analytics is the natural on-ramp to <a href=\"/data-science-course\">data science</a> and <a href=\"/machine-learning-course-for-beginners\">machine learning</a>; it pairs perfectly with <a href=\"/python-for-data-science\">Python for data science</a>.",
        "price_h": "Course Fees",
        "plans": ("Live analytics practice", "Project guidance &amp; certificate", "Priority project &amp; career prep"),
        "quotes": [
            ("Learned SQL and pandas on real data and landed a data analyst role within months. Directly job-relevant.", "Priya N.", "Career switcher"),
            ("Dashboards I built in class I now use at work. Practical from day one.", "Sandeep R.", "Working professional"),
            ("Great foundation before moving into data science. Clear and hands-on.", "Megha S.", "College student"),
        ],
        "band_h": "Turn data into decisions — and a career",
        "band_p": "Book a free demo and analyse real data with a mentor before you spend a rupee.",
        "canvas_words": ["SQL", "data", "pandas", "chart", "insight", "query", "trend", "dashboard", "analyse"],
    })

    # ============================================================ 21. ai-ml-course-for-college-students
    p = "mc"
    C.append({
        "slug": "ai-ml-course-for-college-students", "prefix": p,
        "c1": "#10b981", "c2": "#3b82f6", "acc": "#60a5fa", "bg": "#040f0b",
        "title": "AI &amp; ML Course for College Students | Placement-Focused in India",
        "meta_desc": "AI &amp; ML course for college students in India — placement-focused. Python, machine learning, deep learning and real projects that build a portfolio for internships and jobs. Live, small batches, mentor-led. Free demo.",
        "keywords": "ai ml course for college students, machine learning course college students, ai course for engineering students, ml course for placements, college ai ml course india, ai ml internship preparation, btech ai ml course, final year project ai ml, ai ml for students, campus placement ai",
        "og_title": "AI &amp; ML Course for College Students | Placement-Focused",
        "og_desc": "Placement-focused AI &amp; ML for college students — Python, ML, deep learning and portfolio projects for internships and jobs. Live classes. Free demo.",
        "tw_title": "AI &amp; ML Course for College Students",
        "tw_desc": "Placement-focused AI &amp; ML for college students — Python, ML, DL, portfolio projects. Live mentor-led classes. Free demo.",
        "leaf": "AI &amp; ML Course for College Students", "reviews": "401",
        "org_desc": "Live online, placement-focused AI and ML course for college students in India — Python, machine learning, deep learning and portfolio projects for internships and jobs — in small mentor-led batches.",
        "courses": [
            ("AI &amp; ML for College Students", "A placement-focused journey from Python to machine learning and deep learning, built around projects and the skills campus and off-campus recruiters look for.", "AIML-COLLEGE", "Beginner to Intermediate", "1499"),
            ("Portfolio &amp; Placement Projects", "Building a portfolio of real AI/ML projects and preparing for internships and placements — resume projects, fundamentals and interview readiness.", "AIML-PLACEMENT", "Intermediate", "1499"),
        ],
        "eyebrow_a": "For College Students", "eyebrow_b": "placement-focused AI/ML",
        "h1_plain": "AI &amp; ML for", "h1_grad": "College Students",
        "lede": "Stand out at placements. This AI &amp; ML course for college students takes you from Python to machine learning and deep learning, built around real projects that become a portfolio recruiters notice — plus the fundamentals interviews test. Live, mentor-led, small batches.",
        "cta_primary": "Book a Free Demo",
        "ribbon": [("Jobs", "Placement-focused"), ("5–8", "Students per batch"), ("Portfolio", "Real projects"), ("Live", "Mentor-led")],
        "hero_html": panel_hero(p, "placement_path", [
            (IC['code'], "Python &amp; ML", "Core skills", "foundation"),
            (IC['layers'], "Projects", "Portfolio build", "GitHub"),
            (IC['cert'], "Fundamentals", "Interview-ready", "DSA + ML"),
            (IC['rocket'], "Placement", "Internship / job", "offer ✓"),
        ]),
        "quick_answer": "<strong>Modern Age Coders' AI &amp; ML Course for College Students is placement-focused.</strong> It takes you from Python to machine learning and deep learning, built around real projects that form a portfolio recruiters notice, and covers the fundamentals that internship and placement interviews test. Classes are live in small batches of 5–8 with a mentor, group plans start at ₹1,499/month, and every student gets a free demo first.",
        "form_h": "Book Your Free AI/ML Demo",
        "form_sub": "Tell us your year, branch and goal and we'll arrange a free, no-obligation demo with a mentor. No payment required to try.",
        "form_placeholder": "e.g. I'm a 3rd-year student and want an AI/ML portfolio and skills for placements...",
        "form_btn": "Book My Free Demo", "wa_text": "the AI &amp; ML Course for College Students",
        "wa_float": "Hi%2C%20I'm%20a%20college%20student%20interested%20in%20the%20AI%20%26%20ML%20Course!",
        "source_tag": "AI/ML for College Students Page", "lead_name": "College AI/ML Demo Booking",
        "learn_kicker": "What You'll Get", "learn_h": "Built for Placements",
        "learn_sub": "Skills, projects and fundamentals that turn into internships and offers.",
        "learn_cards": [
            (IC['code'], "#10b981", "Core AI/ML Skills", "Python, machine learning and deep learning — the in-demand stack recruiters screen for, taught from the ground up."),
            (IC['layers'], "#3b82f6", "A Real Portfolio", "Build projects you can put on GitHub and your resume — concrete proof you can do AI/ML, which beats marks alone."),
            (IC['cert'], "#10b981", "Interview Readiness", "The ML fundamentals and project walkthroughs that interviews test, so you can speak confidently about your work."),
        ],
        "road_h": "The College Roadmap", "road_sub": "Four stages from fundamentals to placement-ready.",
        "roadmap": [
            ("STAGE 01", "Python &amp; ML", "Build the core programming and machine-learning foundation."),
            ("STAGE 02", "Deep Learning", "Neural networks and DL to handle modern AI problems."),
            ("STAGE 03", "Portfolio Projects", "Build resume-worthy projects you fully understand."),
            ("STAGE 04", "Placement Prep", "Fundamentals, project Q&amp;A and interview readiness."),
        ],
        "promo_h": "Build Your Skills Further", "promo_sub": "Tracks that strengthen your placement profile.",
        "promo": promo_for("ai-ml-course-for-college-students", [
            "/machine-learning-course-for-beginners", "/python-for-machine-learning", "/deep-learning-course",
            "/ai-ml-projects-for-students", "/build-machine-learning-models-in-python", "/data-science-course",
            "/ai-ml-certification-course", "/best-ai-and-machine-learning-course-in-india"]),
        "why_kicker": "Why This Course", "why_h": "Why College Is the Time to Learn AI/ML",
        "why_intro": "Recruiters increasingly want AI/ML skills and, more than that, <strong>proof you can build</strong>. Starting in college — with real projects and a portfolio — puts you ahead of classmates who only have coursework when placement season arrives.",
        "why_h1": "Projects beat marks",
        "why_p1": "A GitHub full of working AI/ML projects you can explain is far more convincing than a transcript. We make project-building the centre of the course so you graduate with evidence, not just exposure.",
        "why_h2": "Fundamentals for interviews",
        "why_p2": "We pair projects with the ML fundamentals interviews probe, and you can deepen specific areas with <a href=\"/deep-learning-course\">deep learning</a>, <a href=\"/ai-ml-projects-for-students\">more projects</a> or a <a href=\"/ai-ml-certification-course\">certification</a>.",
        "price_h": "Student Course Fees",
        "plans": ("Live, project-based", "Portfolio &amp; placement prep", "Priority project &amp; career prep"),
        "quotes": [
            ("Walked into placements with four AI/ML projects on GitHub. Interviewers asked about my work, not just CGPA. Got the offer.", "Ankit S.", "Final-year student"),
            ("The portfolio focus made all the difference for my internship applications.", "Riya M.", "3rd-year student"),
            ("Mentors helped me actually understand my projects, so interviews were easy.", "Harshit P.", "Engineering student"),
        ],
        "band_h": "Graduate placement-ready in AI/ML",
        "band_p": "Book a free demo and start building a portfolio with a mentor before you spend a rupee.",
        "canvas_words": ["AI", "ML", "Python", "project", "portfolio", "placement", "deep", "model", "hired"],
    })

    # ============================================================ 22. ai-and-machine-learning-for-working-professionals
    p = "wp"
    C.append({
        "slug": "ai-and-machine-learning-for-working-professionals", "prefix": p,
        "c1": "#5b7cc9", "c2": "#f59e0b", "acc": "#fbbf24", "bg": "#070a10",
        "title": "AI &amp; Machine Learning for Working Professionals | Upskill / Switch",
        "meta_desc": "AI &amp; machine learning for working professionals — upskill or switch careers. Weekend-friendly, applied live classes covering Python, ML and deep learning with projects, built around a busy schedule. Small batches. Free demo.",
        "keywords": "ai ml for working professionals, machine learning for professionals, ai course for working professionals, career switch to ai ml, upskill machine learning, weekend ai ml course, ai ml part time course, applied machine learning professionals, ml course for engineers, ai ml career change",
        "og_title": "AI &amp; ML for Working Professionals | Upskill or Switch",
        "og_desc": "Upskill or switch into AI/ML around your job — weekend-friendly, applied live classes in Python, ML and deep learning with projects. Free demo.",
        "tw_title": "AI &amp; ML for Working Professionals",
        "tw_desc": "Upskill or switch careers into AI/ML — weekend-friendly, applied, project-based live classes. Free demo.",
        "leaf": "AI &amp; Machine Learning for Working Professionals", "reviews": "377",
        "org_desc": "Live online AI and machine learning course for working professionals in India — applied, weekend-friendly classes covering Python, ML and deep learning with projects, designed around a full-time job, in small mentor-led batches.",
        "courses": [
            ("Applied AI &amp; ML for Professionals", "A practical, job-oriented path through Python, machine learning and deep learning, focused on applying AI to real work and built around a busy professional schedule.", "AIML-PRO", "Beginner to Intermediate", "1499"),
            ("Career-Switch ML Projects", "Portfolio projects and applied skills for professionals upskilling or switching into AI/ML roles, with mentor guidance on positioning the transition.", "AIML-SWITCH", "Intermediate", "1499"),
        ],
        "eyebrow_a": "For Professionals", "eyebrow_b": "upskill or switch careers",
        "h1_plain": "AI &amp; ML for", "h1_grad": "Working Professionals",
        "lede": "Add AI/ML to your career — or switch into it — without quitting your job. Applied, weekend-friendly live classes take you through Python, machine learning and deep learning with real projects, built around a busy schedule and focused on skills you can use at work. Small batches, mentor-led.",
        "cta_primary": "Book a Free Demo",
        "ribbon": [("Weekend", "Around your job"), ("3–8", "Small batches"), ("Applied", "Use it at work"), ("Live", "Mentor-led")],
        "hero_html": panel_hero(p, "career_path", [
            (IC['code'], "Now: your role", "Existing experience", "value"),
            (IC['gear'], "Add AI/ML", "Applied skills", "Python + ML"),
            (IC['layers'], "Projects", "Proof of ability", "portfolio"),
            (IC['rocket'], "Upskill / Switch", "New role or impact", "→ AI role"),
        ]),
        "quick_answer": "<strong>Modern Age Coders' AI &amp; ML course for working professionals helps you upskill or switch careers without quitting your job.</strong> Applied, weekend-friendly live classes cover Python, machine learning and deep learning with real projects, focused on skills you can apply at work and a portfolio for career moves. Classes are live in small batches with a mentor, group plans start at ₹1,499/month, and a free demo comes first.",
        "form_h": "Book Your Free Professional AI/ML Demo",
        "form_sub": "Tell us your background, schedule and goal and we'll arrange a free, no-obligation demo with a mentor. No payment required to try.",
        "form_placeholder": "e.g. I work full-time and want to upskill / switch into AI/ML around my schedule...",
        "form_btn": "Book My Free Demo", "wa_text": "the AI &amp; ML Course for Working Professionals",
        "wa_float": "Hi%2C%20I'm%20a%20working%20professional%20interested%20in%20the%20AI%20%26%20ML%20Course!",
        "source_tag": "AI/ML for Working Professionals Page", "lead_name": "Professional AI/ML Demo Booking",
        "learn_kicker": "What You'll Get", "learn_h": "Designed Around Your Job",
        "learn_sub": "Applied AI/ML skills, a flexible schedule, and a portfolio for your next move.",
        "learn_cards": [
            (IC['gear'], "#5b7cc9", "Applied, Not Academic", "Python, ML and deep learning taught for real use — skills you can apply to problems at your current job, fast."),
            (IC['video'], "#f59e0b", "Flexible &amp; Recorded", "Weekend-friendly live classes with recordings, so you keep up even on busy weeks — built for full-time schedules."),
            (IC['rocket'], "#5b7cc9", "Portfolio for the Switch", "Real projects and mentor guidance to position an upskill or a full career switch into AI/ML."),
        ],
        "road_h": "The Professional Roadmap", "road_sub": "Four stages that fit around a full-time job.",
        "roadmap": [
            ("STAGE 01", "Python for AI", "Get productive in Python quickly, applied to data and AI tasks."),
            ("STAGE 02", "Machine Learning", "Core ML you can apply to real work problems."),
            ("STAGE 03", "Deep Learning", "Modern AI techniques relevant to your domain."),
            ("STAGE 04", "Portfolio &amp; Move", "Build projects and plan your upskill or switch."),
        ],
        "promo_h": "Strengthen Your Profile", "promo_sub": "Tracks that fit professional goals.",
        "promo": promo_for("ai-and-machine-learning-for-working-professionals", [
            "/machine-learning-course-for-beginners", "/python-for-machine-learning", "/deep-learning-course",
            "/data-science-course", "/large-language-models-course", "/ai-ml-projects-for-students",
            "/ai-ml-certification-course", "/online-ai-and-machine-learning-classes"]),
        "why_kicker": "Why This Course", "why_h": "Why Professionals Are Moving Into AI/ML Now",
        "why_intro": "AI/ML roles are among the best-paid and fastest-growing in tech, and <strong>your existing domain experience is an advantage, not a liability</strong> — combined with AI skills it makes you rare. The hard part is doing it around a job, which is exactly what this course solves.",
        "why_h1": "Learn around your schedule",
        "why_p1": "Weekend-friendly live sessions, recordings for catch-up, and small batches mean you can genuinely keep up while working full-time. No need to pause your career to grow it.",
        "why_h2": "Your experience is leverage",
        "why_p2": "Pairing your industry knowledge with AI/ML beats fresh graduates on applied roles. Deepen with <a href=\"/deep-learning-course\">deep learning</a> or <a href=\"/large-language-models-course\">LLMs</a>, and prove it with a <a href=\"/ai-ml-certification-course\">certification</a>.",
        "price_h": "Professional Course Fees",
        "plans": ("Weekend-friendly, applied", "Project guidance &amp; certificate", "Priority career &amp; switch prep"),
        "quotes": [
            ("Upskilled around a full-time job and now lead AI initiatives on my team. The weekend format made it possible.", "Suresh R.", "Working professional"),
            ("Switched from testing into an ML role in under a year. My domain experience plus these skills sealed it.", "Deepa M.", "Career switcher"),
            ("Applied and practical — I used what I learned at work almost immediately.", "Arvind K.", "Senior engineer"),
        ],
        "band_h": "Move into AI/ML without quitting your job",
        "band_p": "Book a free demo and see the weekend-friendly, applied format with a mentor before you spend a rupee.",
        "canvas_words": ["AI", "ML", "Python", "upskill", "career", "applied", "model", "weekend", "switch"],
    })

    # ============================================================ 23. ai-ml-projects-for-students
    p = "mj"
    C.append({
        "slug": "ai-ml-projects-for-students", "prefix": p,
        "c1": "#ec4899", "c2": "#06b6d4", "acc": "#22d3ee", "bg": "#0f0410",
        "title": "AI &amp; ML Projects for Students | Build a Portfolio That Gets You Hired",
        "meta_desc": "AI &amp; ML projects for students — build a portfolio that gets you noticed. Guided, real-world machine learning and deep learning projects in Python, fully explained, mentor-reviewed. Live, small batches. Free demo.",
        "keywords": "ai ml projects for students, machine learning projects, ai project ideas students, ml portfolio projects, deep learning projects, final year ai ml project, ai ml project course, hands-on ml projects, ml projects python, student ai projects",
        "og_title": "AI &amp; ML Projects for Students | Build a Hireable Portfolio",
        "og_desc": "Build guided, real-world AI/ML projects in Python — fully explained and mentor-reviewed — into a portfolio that gets you noticed. Free demo.",
        "tw_title": "AI &amp; ML Projects for Students",
        "tw_desc": "Guided real-world AI/ML projects in Python, mentor-reviewed, for a portfolio that gets you hired. Live classes. Free demo.",
        "leaf": "AI &amp; ML Projects for Students", "reviews": "384",
        "org_desc": "Live online course where students build guided, real-world AI and machine-learning projects in Python — fully explained and mentor-reviewed — to create a portfolio for internships and placements, in small batches.",
        "courses": [
            ("Guided AI &amp; ML Projects", "A series of real-world AI/ML projects built in Python with mentor guidance — from data to a trained, evaluated model — each one a portfolio piece you fully understand.", "AIML-PROJ-GUIDED", "Intermediate", "1499"),
            ("Capstone &amp; Final-Year Project", "Build a substantial capstone or final-year AI/ML project end-to-end with mentor support, including presentation and report guidance.", "AIML-CAPSTONE", "Intermediate", "1499"),
        ],
        "eyebrow_a": "AI/ML Projects", "eyebrow_b": "a portfolio that gets you hired",
        "h1_plain": "AI &amp; ML Projects", "h1_grad": "for Students",
        "lede": "Marks open doors; projects walk through them. Build a portfolio of real, mentor-reviewed AI/ML projects in Python — each one explained so you can speak to it in interviews. Perfect for internships, placements and final-year projects. Live, hands-on, small batches.",
        "cta_primary": "Book a Free Demo",
        "ribbon": [("Portfolio", "Real projects"), ("5–8", "Students per batch"), ("GitHub", "Show your work"), ("Live", "Mentor-reviewed")],
        "hero_html": panel_hero(p, "my_projects", [
            (IC['chat'], "Sentiment analyser", "NLP on reviews", "0.93 acc"),
            (IC['eye'], "Image classifier", "CNN vision", "deployed"),
            (IC['chart'], "Price predictor", "Regression", "live demo"),
            (IC['cpu'], "Mini chatbot", "LLM-powered", "GitHub ✓"),
        ]),
        "quick_answer": "<strong>Modern Age Coders' AI &amp; ML Projects for Students course helps you build a portfolio that gets you hired.</strong> You build guided, real-world machine-learning and deep-learning projects in Python — from data to a trained model — each fully explained and mentor-reviewed so you can confidently discuss it in interviews. Great for internships, placements and final-year projects. Classes are live in small batches of 5–8, group plans start at ₹1,499/month, and a free demo comes first.",
        "form_h": "Book Your Free Projects Demo",
        "form_sub": "Tell us your level and goal and we'll arrange a free, no-obligation demo with a mentor. No payment required to try.",
        "form_placeholder": "e.g. I want to build real AI/ML projects for my portfolio / final-year project...",
        "form_btn": "Book My Free Demo", "wa_text": "the AI &amp; ML Projects course",
        "wa_float": "Hi%2C%20I'm%20interested%20in%20the%20AI%20%26%20ML%20Projects%20course!",
        "source_tag": "AI/ML Projects for Students Page", "lead_name": "AI/ML Projects Demo Booking",
        "learn_kicker": "What You'll Build", "learn_h": "Projects Recruiters Notice",
        "learn_sub": "Real, varied, fully-understood projects — not copy-paste tutorials.",
        "learn_cards": [
            (IC['layers'], "#ec4899", "Varied Real Projects", "Across ML, NLP, vision and LLMs — a diverse portfolio that shows range, built on realistic datasets."),
            (IC['check'], "#06b6d4", "Mentor-Reviewed", "Every project is reviewed by a mentor, so your code and approach are solid — and you understand every line."),
            (IC['cert'], "#ec4899", "Interview-Ready", "You can explain the problem, your choices and the results — exactly what interviewers probe."),
        ],
        "road_h": "The Projects Roadmap", "road_sub": "Four stages from first project to a standout portfolio.",
        "roadmap": [
            ("STAGE 01", "Project Foundations", "The build-train-evaluate loop you'll repeat across projects."),
            ("STAGE 02", "Core Projects", "Build ML and data projects you fully understand."),
            ("STAGE 03", "Advanced Projects", "Add NLP, vision or LLM projects for range."),
            ("STAGE 04", "Capstone &amp; Polish", "A flagship project, plus presentation and GitHub polish."),
        ],
        "promo_h": "Strengthen the Skills Behind the Projects", "promo_sub": "Tracks that make your projects stronger.",
        "promo": promo_for("ai-ml-projects-for-students", [
            "/build-machine-learning-models-in-python", "/machine-learning-course-for-beginners", "/python-for-machine-learning",
            "/deep-learning-course", "/computer-vision-course", "/natural-language-processing-course",
            "/ai-ml-course-for-college-students", "/best-ai-and-machine-learning-course-in-india"]),
        "why_kicker": "Why This Course", "why_h": "Why Projects Are Your Best Career Asset",
        "why_intro": "When two candidates have similar degrees, <strong>the one with real projects they can explain wins</strong>. Projects prove you can actually build AI/ML — and they give you something concrete and interesting to talk about in every interview.",
        "why_h1": "Understanding, not just code",
        "why_p1": "A project you can't explain hurts you. Every build here is mentor-reviewed and discussed, so you own the reasoning and can answer the follow-up questions that copy-pasters can't.",
        "why_h2": "Perfect for final-year and placements",
        "why_p2": "Use these for your final-year project, internship applications and placements. Strengthen the underlying skills with <a href=\"/build-machine-learning-models-in-python\">building ML in Python</a> or our <a href=\"/ai-ml-course-for-college-students\">college AI/ML course</a>.",
        "price_h": "Projects Course Fees",
        "plans": ("Live, project-based", "Mentor-reviewed projects", "Priority capstone &amp; career prep"),
        "quotes": [
            ("My portfolio of five projects got me shortlisted everywhere. Being able to explain each one sealed the offers.", "Nisha R.", "Final-year student"),
            ("Built my final-year project here with mentor support — top marks and a great resume piece.", "Aman S.", "Engineering student"),
            ("Real projects, real feedback. My GitHub finally looks hireable.", "Tanvi M.", "College student"),
        ],
        "band_h": "Build the portfolio that gets you hired",
        "band_p": "Book a free demo and start a real AI/ML project with a mentor before you spend a rupee.",
        "canvas_words": ["project", "portfolio", "model", "GitHub", "build", "ML", "demo", "hired", "code"],
    })

    # ============================================================ 24. ai-ml-certification-course
    p = "mf"
    C.append({
        "slug": "ai-ml-certification-course", "prefix": p,
        "c1": "#eab308", "c2": "#8b5cf6", "acc": "#a78bfa", "bg": "#0f0c04",
        "title": "AI &amp; ML Certification Course | Certificate + Real Portfolio",
        "meta_desc": "AI &amp; ML certification course — earn a course-completion certificate backed by a real project portfolio. Python, machine learning and deep learning, mentor-led and project-based. Live, small batches. Free demo.",
        "keywords": "ai ml certification course, machine learning certification, ai certification course, ml certificate course, ai ml course with certificate, certified machine learning course, ai ml certification india, deep learning certification, ml course certificate, ai ml online certification",
        "og_title": "AI &amp; ML Certification Course | Certificate + Portfolio",
        "og_desc": "Earn an AI/ML course-completion certificate backed by a real project portfolio — Python, ML and deep learning, mentor-led and project-based. Free demo.",
        "tw_title": "AI &amp; ML Certification Course",
        "tw_desc": "Course-completion certificate backed by a real portfolio — Python, ML, deep learning, project-based. Live classes. Free demo.",
        "leaf": "AI &amp; ML Certification Course", "reviews": "395",
        "org_desc": "Live online AI and ML certification course offering a course-completion certificate backed by a real project portfolio — Python, machine learning and deep learning, project-based and mentor-led, in small batches.",
        "courses": [
            ("AI &amp; ML Certification Program", "A complete, project-based AI/ML program — Python, machine learning and deep learning — leading to a course-completion certificate and, more importantly, a real portfolio of work.", "AIML-CERT", "Beginner to Intermediate", "1499"),
            ("Capstone &amp; Certification Project", "A capstone project that demonstrates your AI/ML skills end-to-end, forming the centrepiece of your certification and portfolio.", "AIML-CERT-CAP", "Intermediate", "1499"),
        ],
        "eyebrow_a": "Certification", "eyebrow_b": "certificate + real portfolio",
        "h1_plain": "AI &amp; ML", "h1_grad": "Certification Course",
        "lede": "Earn a certificate that means something — because it's backed by real work. This project-based program covers Python, machine learning and deep learning, ending in a course-completion certificate and a portfolio that proves your skills. Honest, mentor-led, small batches. Free demo.",
        "cta_primary": "Book a Free Demo",
        "ribbon": [("Cert", "On completion"), ("5–8", "Students per batch"), ("Portfolio", "Backs the cert"), ("Live", "Mentor-led")],
        "hero_html": panel_hero(p, "certification", [
            (IC['code'], "Python &amp; ML", "Core program", "modules ✓"),
            (IC['layers'], "Projects", "Real portfolio", "GitHub"),
            (IC['rocket'], "Capstone", "Flagship project", "presented"),
            (IC['cert'], "Certificate", "On completion", "issued ✓"),
        ]),
        "quick_answer": "<strong>Modern Age Coders' AI &amp; ML Certification Course gives you a course-completion certificate backed by a real project portfolio.</strong> The project-based program covers Python, machine learning and deep learning, and ends with a capstone and certificate. To be clear, this is a Modern Age Coders course-completion certificate (not a government or vendor exam) — its value comes from the genuine skills and portfolio behind it. Classes are live in small batches of 5–8 with a mentor, group plans start at ₹1,499/month, and a free demo comes first.",
        "form_h": "Book Your Free Certification Demo",
        "form_sub": "Tell us your goal and we'll arrange a free, no-obligation demo with a mentor. No payment required to try.",
        "form_placeholder": "e.g. I want an AI/ML certificate backed by real projects I can show employers...",
        "form_btn": "Book My Free Demo", "wa_text": "the AI &amp; ML Certification Course",
        "wa_float": "Hi%2C%20I'm%20interested%20in%20the%20AI%20%26%20ML%20Certification%20Course!",
        "source_tag": "AI/ML Certification Course Page", "lead_name": "AI/ML Certification Demo Booking",
        "learn_kicker": "What You'll Earn", "learn_h": "A Certificate Worth Earning",
        "learn_sub": "Skills first, portfolio second, certificate third — in that order of importance.",
        "learn_cards": [
            (IC['code'], "#eab308", "Real AI/ML Skills", "Python, machine learning and deep learning taught properly and hands-on — the substance the certificate represents."),
            (IC['layers'], "#8b5cf6", "A Project Portfolio", "Multiple real projects plus a capstone — the evidence that makes any certificate credible to employers."),
            (IC['cert'], "#eab308", "Completion Certificate", "A Modern Age Coders certificate on completion — honestly framed, and meaningful because of the work behind it."),
        ],
        "road_h": "The Certification Roadmap", "road_sub": "Four stages from fundamentals to certificate.",
        "roadmap": [
            ("STAGE 01", "Foundations", "Python and the core machine-learning toolkit."),
            ("STAGE 02", "Deep Learning", "Neural networks and modern AI techniques."),
            ("STAGE 03", "Portfolio Projects", "Build real, varied projects you fully understand."),
            ("STAGE 04", "Capstone &amp; Certificate", "A flagship project, then your completion certificate."),
        ],
        "promo_h": "Build the Skills Behind the Certificate", "promo_sub": "Tracks that make up and extend the program.",
        "promo": promo_for("ai-ml-certification-course", [
            "/best-ai-and-machine-learning-course-in-india", "/machine-learning-course-for-beginners", "/python-for-machine-learning",
            "/deep-learning-course", "/ai-ml-projects-for-students", "/build-machine-learning-models-in-python",
            "/ai-ml-course-for-college-students", "/online-ai-and-machine-learning-classes"]),
        "why_kicker": "Why This Course", "why_h": "Why a Certificate Is Only as Good as the Work Behind It",
        "why_intro": "We're honest about certificates: a certificate alone doesn't get you hired — <strong>skills and a portfolio do</strong>. So we built this program to deliver real ability first, with the certificate as recognition of genuine work, not a substitute for it.",
        "why_h1": "No false promises",
        "why_p1": "This is a Modern Age Coders course-completion certificate, not a government or vendor exam, and we won't pretend otherwise. What makes it valuable is that you can back it with projects you built and understand.",
        "why_h2": "Substance recruiters respect",
        "why_p2": "Employers care about what you can do. The program's projects and capstone — drawn from tracks like <a href=\"/deep-learning-course\">deep learning</a> and <a href=\"/ai-ml-projects-for-students\">AI/ML projects</a> — are what give the certificate weight.",
        "price_h": "Certification Course Fees",
        "plans": ("Live, project-based", "Capstone &amp; certificate", "Priority capstone &amp; career prep"),
        "quotes": [
            ("The certificate got me the interview; the portfolio behind it got me the job. Honest, substantial program.", "Rohit S.", "Career switcher"),
            ("I appreciated how upfront they were about what the certificate is. The skills are very real.", "Bhavna M.", "Working professional"),
            ("Capstone project is now the centrepiece of my resume. Worth it for the work, not just the paper.", "Saurabh K.", "College student"),
        ],
        "band_h": "Earn a certificate backed by real skills",
        "band_p": "Book a free demo and see the project-based program with a mentor before you spend a rupee.",
        "canvas_words": ["AI", "ML", "cert", "project", "capstone", "Python", "portfolio", "deep", "skills"],
    })

    # ============================================================ 25. online-ai-and-machine-learning-classes
    p = "mo"
    C.append({
        "slug": "online-ai-and-machine-learning-classes", "prefix": p,
        "c1": "#06b6d4", "c2": "#8b5cf6", "acc": "#a78bfa", "bg": "#040d10",
        "title": "Online AI &amp; Machine Learning Classes | Live, Mentor-Led in India",
        "meta_desc": "Online AI &amp; machine learning classes — live, mentor-led and hands-on. Small batches, real projects, recorded sessions and doubt support. Learn Python, ML and deep learning from anywhere in India. Free demo.",
        "keywords": "online ai and machine learning classes, online ml classes, live ai ml classes, online machine learning course india, ai ml classes online, learn ai online, online deep learning classes, live online ml course, ai ml online classes india, virtual ai ml course",
        "og_title": "Online AI &amp; Machine Learning Classes | Live &amp; Mentor-Led",
        "og_desc": "Live, mentor-led online AI/ML classes — small batches, real projects, recordings and doubt support. Learn Python, ML and DL from anywhere. Free demo.",
        "tw_title": "Online AI &amp; ML Classes",
        "tw_desc": "Live, mentor-led online AI/ML classes — small batches, real projects, recordings. Learn from anywhere in India. Free demo.",
        "leaf": "Online AI &amp; Machine Learning Classes", "reviews": "412",
        "org_desc": "Live, mentor-led online AI and machine learning classes in India — small batches, real projects, recorded sessions and doubt support — covering Python, ML and deep learning.",
        "courses": [
            ("Live Online AI &amp; ML Classes", "Live, mentor-led online classes covering Python, machine learning and deep learning, in small batches with real projects, recordings and doubt support — the same quality as in-person, from anywhere.", "AIML-ONLINE", "Beginner to Intermediate", "1499"),
            ("Online ML Projects &amp; Mentoring", "Project-based online learning with a mentor reviewing your work live, plus recorded sessions and ongoing doubt support for steady progress.", "AIML-ONLINE-PROJ", "Intermediate", "1499"),
        ],
        "eyebrow_a": "Online Classes", "eyebrow_b": "live &amp; mentor-led, from anywhere",
        "h1_plain": "Online AI &amp; ML", "h1_grad": "Classes",
        "lede": "Learn AI &amp; machine learning live from anywhere in India — not pre-recorded videos. Real-time, mentor-led classes in small batches, with hands-on projects, session recordings and doubt support. Python, ML and deep learning, taught the way that actually sticks.",
        "cta_primary": "Book a Free Demo",
        "ribbon": [("Live", "Not recordings"), ("5–8", "Small batches"), ("Anywhere", "All of India"), ("Mentor", "Real support")],
        "hero_html": panel_hero(p, "live_class", [
            (IC['video'], "Live session", "Real-time teaching", "on now"),
            (IC['chat'], "Ask anytime", "Doubts solved live", "Q&amp;A"),
            (IC['code'], "Code together", "Mentor reviews", "screen share"),
            (IC['layers'], "Recordings", "Revise anytime", "saved ✓"),
        ]),
        "quick_answer": "<strong>Modern Age Coders' Online AI &amp; Machine Learning Classes are live and mentor-led — not pre-recorded videos.</strong> You learn Python, machine learning and deep learning in real time in small batches of 5–8, with hands-on projects, a mentor who reviews your code live, session recordings for revision and ongoing doubt support — from anywhere in India. Group plans start at ₹1,499/month, and every learner gets a free demo class first.",
        "form_h": "Book Your Free Online Demo Class",
        "form_sub": "Tell us your goal and we'll arrange a free, no-obligation live online demo with a mentor. No payment required to try.",
        "form_placeholder": "e.g. I want live, mentor-led online AI/ML classes I can attend from home...",
        "form_btn": "Book My Free Online Demo", "wa_text": "Online AI &amp; ML Classes",
        "wa_float": "Hi%2C%20I'm%20interested%20in%20Online%20AI%20%26%20ML%20Classes!",
        "source_tag": "Online AI/ML Classes Page", "lead_name": "Online AI/ML Demo Booking",
        "learn_kicker": "How It Works", "learn_h": "Live Online, Done Right",
        "learn_sub": "The structure that makes online learning genuinely work.",
        "learn_cards": [
            (IC['video'], "#06b6d4", "Live, Not Recorded", "Real-time classes with a mentor you can interact with — the engagement and accountability recorded courses can't give."),
            (IC['chat'], "#8b5cf6", "Small Batches &amp; Doubts", "Just 5–8 learners so your questions get answered live, with ongoing doubt support between classes."),
            (IC['layers'], "#06b6d4", "Projects &amp; Recordings", "Hands-on projects reviewed by your mentor, plus every session recorded so you can revise anytime."),
        ],
        "road_h": "How Your Online Journey Works", "road_sub": "Four stages, all live and supported, from anywhere.",
        "roadmap": [
            ("STAGE 01", "Free Demo", "Join a live online class and meet your mentor — no payment."),
            ("STAGE 02", "Foundations", "Python and core ML, taught live with hands-on practice."),
            ("STAGE 03", "Deep Learning", "Modern AI techniques with live mentor guidance."),
            ("STAGE 04", "Projects", "Build a portfolio, reviewed live, with recordings to revise."),
        ],
        "promo_h": "What You Can Learn Online", "promo_sub": "All these tracks run live online with a mentor.",
        "promo": promo_for("online-ai-and-machine-learning-classes", [
            "/best-ai-and-machine-learning-course-in-india", "/machine-learning-course-for-beginners", "/python-for-machine-learning",
            "/deep-learning-course", "/data-science-course", "/ai-ml-projects-for-students",
            "/ai-ml-course-for-college-students", "/ai-ml-certification-course"]),
        "why_kicker": "Why This Course", "why_h": "Why Live Online Beats Recorded Courses",
        "why_intro": "Most people who buy recorded courses never finish them. <strong>Live, mentor-led classes give you the structure, accountability and real-time help that make you actually complete the journey</strong> — with none of the travel.",
        "why_h1": "Engagement you can't get from videos",
        "why_p1": "When a mentor can see your screen, answer your question in the moment and review your code live, you learn faster and stay on track. Small batches keep it personal — closer to a tutor than a lecture.",
        "why_h2": "Same quality, from anywhere in India",
        "why_p2": "Wherever you are, you get the full experience — live teaching, projects, recordings and doubt support. Explore any track online, from <a href=\"/machine-learning-course-for-beginners\">ML for beginners</a> to <a href=\"/deep-learning-course\">deep learning</a> and beyond.",
        "price_h": "Online Class Fees",
        "plans": ("Live online classes", "Project guidance &amp; certificate", "Priority project &amp; career prep"),
        "quotes": [
            ("Live online from a small town and got the same quality as any metro. Mentor support made all the difference.", "Pranav R.", "College student"),
            ("I'd failed to finish two recorded courses. The live format kept me accountable — I actually completed this one.", "Shalini M.", "Working professional"),
            ("Small batch, real-time doubts, recordings to revise. Online done properly.", "Iqbal S.", "Career switcher"),
        ],
        "band_h": "Learn AI &amp; ML live, from anywhere in India",
        "band_p": "Book a free live online demo class with a mentor before you spend a rupee.",
        "canvas_words": ["live", "online", "AI", "ML", "mentor", "class", "Python", "doubt", "learn"],
    })

    # inject default FAQs for any config that didn't define custom ones
    for cfg in C:
        if "faqs" not in cfg:
            cfg["faqs"] = build_default_faqs(cfg)

    return C
