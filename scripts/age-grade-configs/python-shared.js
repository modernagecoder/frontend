/*
 * python-shared.js — course pool + city chips for all Python pages.
 */

const IMG = slug => `/images/${slug}`;

const PY = {
    pythonKids: { href: '/courses/python-ai-kids-masterclass', pill: 'Python', img: IMG('python-kids.webp'), alt: 'Python for kids masterclass', title: 'Python for Kids', desc: 'Turtle graphics, mini games, maths quizzes — real Python that still feels like play.', tags: ['Python', 'Beginner'] },
    pythonTeen: { href: '/courses/python-complete-masterclass-teens', pill: 'Python', img: IMG('python-teens.webp'), alt: 'Python complete masterclass for teens', title: 'Python Masterclass', desc: 'Zero to confident — functions, OOP, files, real mini-apps. The backbone track.', tags: ['Python', 'OOP'] },
    pythonCollege: { href: '/courses/python-programming-masterclass-zero-to-advanced-college', pill: 'Python', img: IMG('python-college.webp'), alt: 'Python zero to advanced college course', title: 'Python Zero to Advanced', desc: 'College-level Python — OOP, decorators, packaging, libraries. Ready for BTech year 1.', tags: ['Python', 'Advanced'] },
    aiKids: { href: '/courses/cbse-computational-thinking-and-ai-course-for-kids-classes-3-to-8', pill: 'AI', img: IMG('ct-ai-kids.webp'), alt: 'computational thinking and AI for kids', title: 'Computational Thinking & AI', desc: 'Teachable Machine, image classifiers — first hands-on taste of AI.', tags: ['AI', 'No-code'] },
    aimlTeen: { href: '/courses/ai-ml-masterclass-teens', pill: 'AI/ML', img: IMG('ai-ml-teens.webp'), alt: 'AI and ML masterclass for teens', title: 'AI & ML Masterclass', desc: 'Pandas, sklearn, neural nets — real AI projects with datasets.', tags: ['AI', 'ML'] },
    dsTeen: { href: '/courses/data-science-complete-masterclass-college', pill: 'Data Science', img: IMG('data-science.webp'), alt: 'Data science masterclass', title: 'Data Science', desc: 'Pandas, NumPy, matplotlib, sklearn — the end-to-end data toolkit.', tags: ['Pandas', 'Numpy'] },
    genAI: { href: '/courses/complete-generative-ai-masterclass-college', pill: 'Gen AI', img: IMG('generative-ai-college.webp'), alt: 'Generative AI masterclass', title: 'Generative AI Masterclass', desc: 'LLMs, prompt engineering, embeddings — build with the AI stack of 2026.', tags: ['LLM', 'Prompts'] },
    dsaTeen: { href: '/courses/problem-solving-dsa-masterclass-teens', pill: 'DSA', img: IMG('data-structure-algorithms.webp'), alt: 'DSA masterclass for teens', title: 'DSA in Python', desc: 'Arrays, trees, graphs, DP — solved in Python. Interview foundation.', tags: ['DSA'] },
    flaskBackend: { href: '/courses/backend-coding-masterclass-for-teens', pill: 'Backend', img: IMG('backend-teens.webp'), alt: 'Backend coding with Flask for teens', title: 'Backend with Flask', desc: 'Build REST APIs with Flask — auth, databases, Postman tests.', tags: ['Flask', 'API'] },
    autoPy: { href: '/courses/python-ai-automation-masterclass-college', pill: 'Automation', img: IMG('automation-with-python-ai.webp'), alt: 'Python automation and AI', title: 'Python Automation + AI', desc: 'Selenium, scripts, AI APIs — automate the boring stuff using Python.', tags: ['Automation'] },
    cbseCS: { href: '/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course', pill: 'Board', img: IMG('python-teens.webp'), alt: 'CBSE ICSE CS Class 11 12 Python Java', title: 'CBSE/ICSE CS 11–12', desc: 'Board-aligned Python + Java — full syllabus, sample papers.', tags: ['Board'] },
    cbseIP: { href: '/courses/cbse-informatics-practices-ip-class-11-12-python-pandas-sql-complete-course', pill: 'IP', img: IMG('ip-cs-class-11-12.webp'), alt: 'CBSE IP Class 11 12 Python Pandas SQL', title: 'CBSE IP 11–12', desc: 'Python, Pandas, SQL — exact IP syllabus, plus the practical prep.', tags: ['IP'] },
    mlPro: { href: '/courses/ai-ml-masterclass-complete-college', pill: 'AI/ML Pro', img: IMG('ai-ml-college.webp'), alt: 'Complete AI ML masterclass college', title: 'AI & ML Complete', desc: 'Deep learning, CV, NLP — college-level ML with projects.', tags: ['DL', 'CV'] }
};

const CITY_CHIPS = [
    { href: '/best-coding-class-in-delhi', label: 'Delhi' },
    { href: '/best-coding-class-in-mumbai', label: 'Mumbai' },
    { href: '/best-coding-class-in-bengaluru', label: 'Bengaluru' },
    { href: '/best-coding-class-in-hyderabad', label: 'Hyderabad' },
    { href: '/best-coding-class-in-chennai', label: 'Chennai' },
    { href: '/best-coding-class-in-pune', label: 'Pune' },
    { href: '/best-coding-class-in-kolkata', label: 'Kolkata' },
    { href: '/best-coding-class-in-ahmedabad', label: 'Ahmedabad' }
];

/* Shared class-format and form text lives inside the renderer — nothing here. */

module.exports = { PY, CITY_CHIPS };
