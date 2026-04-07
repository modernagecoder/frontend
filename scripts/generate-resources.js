#!/usr/bin/env node

/**
 * Resource Generator for Modern Age Coders
 * Generates resource pages (notes + practice) from JSON data files
 */

const fs = require('fs');
const path = require('path');

// Import SEO configuration and utilities
const SEO_CONFIG = require('./seo-config.js');
const seoUtils = require('./seo-utils.js');

class ResourceGenerator {
    constructor() {
        this.projectRoot = path.resolve(__dirname, '..');
        this.dataDir = path.join(this.projectRoot, 'content', 'resources', 'data');
        this.templateDir = path.join(this.projectRoot, 'content', 'resources', 'template');
        this.generatedDir = path.join(this.projectRoot, 'content', 'resources', 'generated');
    }

    /**
     * Main generation method
     */
    async generate() {
        try {
            console.log('🚀 Generating resource pages...');

            this.ensureDirectories();
            this.copyAssets();

            // Load templates
            console.log('📄 Loading templates...');
            const notesTemplate = fs.readFileSync(path.join(this.templateDir, 'resource-notes-template.html'), 'utf8');
            const practiceTemplate = fs.readFileSync(path.join(this.templateDir, 'resource-practice-template.html'), 'utf8');
            const languageIndexTemplate = fs.readFileSync(path.join(this.templateDir, 'language-index-template.html'), 'utf8');
            const masterIndexTemplate = fs.readFileSync(path.join(this.templateDir, 'resource-index-template.html'), 'utf8');

            // Find all language directories
            const languageDirs = fs.readdirSync(this.dataDir).filter(d => {
                const fullPath = path.join(this.dataDir, d);
                return fs.statSync(fullPath).isDirectory();
            });

            if (languageDirs.length === 0) {
                console.log('⚠️  No language directories found in resources/data/');
                return;
            }

            console.log(`📂 Found ${languageDirs.length} language(s): ${languageDirs.join(', ')}`);

            const allLanguageMeta = [];

            for (const langDir of languageDirs) {
                const metaPath = path.join(this.dataDir, langDir, '_meta.json');
                if (!fs.existsSync(metaPath)) {
                    console.warn(`⚠️  No _meta.json found in ${langDir}, skipping`);
                    continue;
                }

                const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
                allLanguageMeta.push(meta);

                console.log(`\n📘 Processing ${meta.language} (${meta.chapters.length} chapters)...`);

                // Ensure language output directory
                const langOutDir = path.join(this.generatedDir, meta.slug);
                if (!fs.existsSync(langOutDir)) {
                    fs.mkdirSync(langOutDir, { recursive: true });
                }

                let chaptersProcessed = 0;

                for (const chapter of meta.chapters) {
                    const chapterDataPath = path.join(this.dataDir, langDir, `${chapter.slug}.json`);

                    if (!fs.existsSync(chapterDataPath)) {
                        // Chapter JSON doesn't exist yet — skip silently
                        continue;
                    }

                    let chapterData;
                    try {
                        chapterData = JSON.parse(fs.readFileSync(chapterDataPath, 'utf8'));
                    } catch (e) {
                        console.error(`❌ Error parsing ${chapter.slug}.json: ${e.message}`);
                        continue;
                    }

                    // Merge meta from _meta.json chapter entry
                    chapterData.chapterMeta = chapter;

                    if (!this.validateChapterData(chapterData, chapter.slug)) {
                        continue;
                    }

                    this.generateNotesPage(notesTemplate, chapterData, meta);
                    this.generatePracticePage(practiceTemplate, chapterData, meta);
                    chaptersProcessed++;
                }

                console.log(`   ✅ ${chaptersProcessed} chapter(s) generated for ${meta.language}`);

                // Generate language index
                this.generateLanguageIndex(languageIndexTemplate, meta);
            }

            // Generate master index
            this.generateMasterIndex(masterIndexTemplate, allLanguageMeta);

            // Generate sitemap entries
            this.generateSitemapEntries(allLanguageMeta);

            console.log('\n🎉 Resource generation complete!');
        } catch (error) {
            console.error('❌ Resource generation failed:', error.message);
            console.error(error.stack);
            process.exit(1);
        }
    }

    /**
     * Create output directories
     */
    ensureDirectories() {
        const dirs = [
            this.generatedDir,
            path.join(this.projectRoot, 'src', 'css'),
            path.join(this.projectRoot, 'src', 'js')
        ];
        for (const dir of dirs) {
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }
        }
    }

    /**
     * Copy CSS and JS assets to src/ so they are served via Netlify /css/ and /js/ routes
     */
    copyAssets() {
        const cssSource = path.join(this.templateDir, 'resource-standalone.css');
        const cssDest = path.join(this.projectRoot, 'src', 'css', 'resource-standalone.css');
        fs.copyFileSync(cssSource, cssDest);
        console.log('📋 Copied resource-standalone.css → src/css/');

        const jsSource = path.join(this.templateDir, 'resource-interactive.js');
        const jsDest = path.join(this.projectRoot, 'src', 'js', 'resource-interactive.js');
        fs.copyFileSync(jsSource, jsDest);
        console.log('📋 Copied resource-interactive.js → src/js/');
    }

    /**
     * Validate chapter data has required fields
     */
    validateChapterData(data, slug) {
        const required = ['content', 'practice'];
        for (const field of required) {
            if (!data[field]) {
                console.warn(`⚠️  ${slug}: missing required field "${field}"`);
                return false;
            }
        }

        if (!data.content.what || !data.content.why || !data.content.explanation) {
            console.warn(`⚠️  ${slug}: missing content sub-fields (what/why/explanation)`);
            return false;
        }

        return true;
    }

    /**
     * Generate a notes page for a chapter
     */
    generateNotesPage(template, chapterData, meta) {
        const chapter = chapterData.chapterMeta;
        const content = chapterData.content;

        const seoTitle = `${chapter.title} - ${meta.language} Tutorial | Modern Age Coders`;
        const seoDescription = chapter.description;
        const seoKeywords = `${chapter.title.toLowerCase()}, ${meta.language.toLowerCase()} tutorial, ${meta.language.toLowerCase()} ${chapter.title.toLowerCase()}, learn ${meta.language.toLowerCase()}`;

        const readingTime = chapterData.readingTime || this.estimateReadingTime(content);
        const lastUpdated = chapterData.lastUpdated || new Date().toISOString().split('T')[0];

        const structuredData = JSON.stringify(this.generateNotesStructuredData(chapterData, meta), null, 2);

        let html = template
            .replace(/\{\{SEO_TITLE\}\}/g, this.escapeHtml(seoTitle))
            .replace(/\{\{SEO_DESCRIPTION\}\}/g, this.escapeHtml(seoDescription))
            .replace(/\{\{SEO_KEYWORDS\}\}/g, this.escapeHtml(seoKeywords))
            .replace(/\{\{LANGUAGE_SLUG\}\}/g, meta.slug)
            .replace(/\{\{TOPIC_SLUG\}\}/g, chapter.slug)
            .replace(/\{\{LANGUAGE_NAME\}\}/g, this.escapeHtml(meta.language))
            .replace(/\{\{TOPIC_TITLE\}\}/g, this.escapeHtml(chapter.title))
            .replace(/\{\{TOPIC_TITLE_FULL\}\}/g, this.escapeHtml(chapter.title))
            .replace(/\{\{CHAPTER_NUMBER\}\}/g, chapter.order)
            .replace(/\{\{DIFFICULTY\}\}/g, chapter.difficulty)
            .replace(/\{\{DIFFICULTY_CLASS\}\}/g, chapter.difficulty.toLowerCase())
            .replace(/\{\{READING_TIME\}\}/g, readingTime)
            .replace(/\{\{LAST_UPDATED\}\}/g, lastUpdated)
            .replace(/\{\{CONTENT_WHAT\}\}/g, content.what)
            .replace(/\{\{CONTENT_WHY\}\}/g, content.why)
            .replace(/\{\{CONTENT_EXPLANATION\}\}/g, content.explanation)
            .replace(/\{\{CODE_EXAMPLES_HTML\}\}/g, this.generateCodeExamplesHTML(content.codeExamples || []))
            .replace(/\{\{COMMON_MISTAKES_HTML\}\}/g, this.generateMistakesHTML(content.commonMistakes || []))
            .replace(/\{\{SUMMARY_HTML\}\}/g, this.generateSummaryHTML(content.summary || []))
            .replace(/\{\{RELATED_TOPICS_HTML\}\}/g, this.generateRelatedTopicsHTML(chapterData.relatedTopics || [], meta))
            .replace(/\{\{PREV_CHAPTER_LINK\}\}/g, this.getChapterNav(chapter.slug, meta, 'prev'))
            .replace(/\{\{NEXT_CHAPTER_LINK\}\}/g, this.getChapterNav(chapter.slug, meta, 'next'))
            .replace(/\{\{COURSE_CTA_TEXT\}\}/g, this.escapeHtml(meta.courseCta.text))
            .replace(/\{\{COURSE_CTA_URL\}\}/g, meta.courseCta.url)
            .replace(/\{\{COURSE_CTA_LINK_TEXT\}\}/g, this.escapeHtml(meta.courseCta.linkText))
            .replace(/\{\{STRUCTURED_DATA\}\}/g, structuredData);

        const outDir = path.join(this.generatedDir, meta.slug, chapter.slug);
        if (!fs.existsSync(outDir)) {
            fs.mkdirSync(outDir, { recursive: true });
        }
        fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');
    }

    /**
     * Generate a practice page for a chapter
     */
    generatePracticePage(template, chapterData, meta) {
        const chapter = chapterData.chapterMeta;
        const practice = chapterData.practice;

        const seoTitle = `Practice Questions - ${chapter.title} | ${meta.language} | Modern Age Coders`;
        const seoDescription = `${practice.totalQuestions || 50}+ practice questions on ${chapter.title} in ${meta.language}. Easy, medium, and hard questions with hints, answers, and coding challenges.`;
        const seoKeywords = `${chapter.title.toLowerCase()} practice, ${meta.language.toLowerCase()} questions, ${meta.language.toLowerCase()} practice problems, ${chapter.title.toLowerCase()} exercises`;

        // Count questions by difficulty
        const allQuestions = [
            ...(practice.topicSpecific || []),
            ...(practice.mixed || [])
        ];
        const countEasy = allQuestions.filter(q => (q.difficulty || '').toLowerCase() === 'easy').length;
        const countMedium = allQuestions.filter(q => (q.difficulty || '').toLowerCase() === 'medium').length;
        const countHard = allQuestions.filter(q => (q.difficulty || '').toLowerCase() === 'hard').length;
        const totalQuestions = practice.totalQuestions || (allQuestions.length + (practice.mcqs || []).length + (practice.codingChallenges || []).length);

        const structuredData = JSON.stringify(this.generatePracticeStructuredData(chapterData, meta, totalQuestions), null, 2);

        let html = template
            .replace(/\{\{SEO_TITLE\}\}/g, this.escapeHtml(seoTitle))
            .replace(/\{\{SEO_DESCRIPTION\}\}/g, this.escapeHtml(seoDescription))
            .replace(/\{\{SEO_KEYWORDS\}\}/g, this.escapeHtml(seoKeywords))
            .replace(/\{\{LANGUAGE_SLUG\}\}/g, meta.slug)
            .replace(/\{\{TOPIC_SLUG\}\}/g, chapter.slug)
            .replace(/\{\{LANGUAGE_NAME\}\}/g, this.escapeHtml(meta.language))
            .replace(/\{\{TOPIC_TITLE\}\}/g, this.escapeHtml(chapter.title))
            .replace(/\{\{CHAPTER_NUMBER\}\}/g, chapter.order)
            .replace(/\{\{DIFFICULTY\}\}/g, chapter.difficulty)
            .replace(/\{\{DIFFICULTY_CLASS\}\}/g, chapter.difficulty.toLowerCase())
            .replace(/\{\{TOTAL_QUESTIONS\}\}/g, totalQuestions)
            .replace(/\{\{COUNT_EASY\}\}/g, countEasy)
            .replace(/\{\{COUNT_MEDIUM\}\}/g, countMedium)
            .replace(/\{\{COUNT_HARD\}\}/g, countHard)
            .replace(/\{\{TOPIC_SPECIFIC_HTML\}\}/g, this.generateQuestionsHTML(practice.topicSpecific || [], 'ts'))
            .replace(/\{\{MIXED_QUESTIONS_HTML\}\}/g, this.generateQuestionsHTML(practice.mixed || [], 'mx'))
            .replace(/\{\{MCQS_HTML\}\}/g, this.generateMCQsHTML(practice.mcqs || []))
            .replace(/\{\{CODING_CHALLENGES_HTML\}\}/g, this.generateCodingChallengesHTML(practice.codingChallenges || []))
            .replace(/\{\{PREV_CHAPTER_PRACTICE_LINK\}\}/g, this.getChapterNav(chapter.slug, meta, 'prev', 'practice'))
            .replace(/\{\{NEXT_CHAPTER_PRACTICE_LINK\}\}/g, this.getChapterNav(chapter.slug, meta, 'next', 'practice'))
            .replace(/\{\{COURSE_CTA_TEXT\}\}/g, this.escapeHtml(meta.courseCta.text))
            .replace(/\{\{COURSE_CTA_URL\}\}/g, meta.courseCta.url)
            .replace(/\{\{COURSE_CTA_LINK_TEXT\}\}/g, this.escapeHtml(meta.courseCta.linkText))
            .replace(/\{\{STRUCTURED_DATA\}\}/g, structuredData);

        const outDir = path.join(this.generatedDir, meta.slug, chapter.slug, 'practice');
        if (!fs.existsSync(outDir)) {
            fs.mkdirSync(outDir, { recursive: true });
        }
        fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');
    }

    /**
     * Generate language index page (e.g., /resources/python/)
     */
    generateLanguageIndex(template, meta) {
        // Count total questions across chapters that have data
        let totalQuestions = 0;
        for (const chapter of meta.chapters) {
            const chapterPath = path.join(this.dataDir, meta.slug, `${chapter.slug}.json`);
            if (fs.existsSync(chapterPath)) {
                try {
                    const data = JSON.parse(fs.readFileSync(chapterPath, 'utf8'));
                    totalQuestions += data.practice?.totalQuestions || 50;
                } catch (e) {
                    totalQuestions += 50;
                }
            } else {
                totalQuestions += 50; // Estimate
            }
        }

        let chaptersHTML = '';
        for (const chapter of meta.chapters) {
            const hasData = fs.existsSync(path.join(this.dataDir, meta.slug, `${chapter.slug}.json`));
            chaptersHTML += `
            <a href="/resources/${meta.slug}/${chapter.slug}" class="chapter-card${hasData ? '' : ' coming-soon'}">
                <div class="chapter-card-number">${chapter.order}</div>
                <div class="chapter-card-body">
                    <div class="chapter-card-title">${this.escapeHtml(chapter.title)}</div>
                    <div class="chapter-card-desc">${this.escapeHtml(chapter.description)}</div>
                    <div class="chapter-card-badges">
                        <span class="badge badge-${chapter.difficulty.toLowerCase()}">${chapter.difficulty}</span>
                        ${hasData ? '' : '<span class="badge badge-updated">Coming Soon</span>'}
                    </div>
                </div>
            </a>`;
        }

        const structuredData = JSON.stringify([
            seoUtils.generateBreadcrumbSchema([
                { name: 'Home', url: '/' },
                { name: 'Resources', url: '/resources' },
                { name: meta.language, url: `/resources/${meta.slug}` }
            ]),
            {
                "@context": "https://schema.org",
                "@type": "ItemList",
                "name": meta.index.title,
                "description": meta.index.description,
                "numberOfItems": meta.chapters.length,
                "itemListElement": meta.chapters.map((ch, i) => ({
                    "@type": "ListItem",
                    "position": i + 1,
                    "name": ch.title,
                    "url": `${SEO_CONFIG.domain}/resources/${meta.slug}/${ch.slug}`
                }))
            }
        ], null, 2);

        let html = template
            .replace(/\{\{INDEX_TITLE\}\}/g, this.escapeHtml(meta.index.title))
            .replace(/\{\{INDEX_DESCRIPTION\}\}/g, this.escapeHtml(meta.index.description))
            .replace(/\{\{INDEX_KEYWORDS\}\}/g, this.escapeHtml(meta.index.keywords))
            .replace(/\{\{INDEX_INTRO\}\}/g, meta.index.intro)
            .replace(/\{\{LANGUAGE_SLUG\}\}/g, meta.slug)
            .replace(/\{\{LANGUAGE_NAME\}\}/g, this.escapeHtml(meta.language))
            .replace(/\{\{CHAPTERS_COUNT\}\}/g, meta.chapters.length)
            .replace(/\{\{QUESTIONS_COUNT\}\}/g, totalQuestions)
            .replace(/\{\{CHAPTERS_HTML\}\}/g, chaptersHTML)
            .replace(/\{\{COURSE_CTA_TEXT\}\}/g, this.escapeHtml(meta.courseCta.text))
            .replace(/\{\{COURSE_CTA_URL\}\}/g, meta.courseCta.url)
            .replace(/\{\{COURSE_CTA_LINK_TEXT\}\}/g, this.escapeHtml(meta.courseCta.linkText))
            .replace(/\{\{STRUCTURED_DATA\}\}/g, structuredData);

        const outDir = path.join(this.generatedDir, meta.slug);
        if (!fs.existsSync(outDir)) {
            fs.mkdirSync(outDir, { recursive: true });
        }
        fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');
        console.log(`   📄 Language index generated: /resources/${meta.slug}/`);
    }

    /**
     * Generate master resource index page (/resources/)
     */
    generateMasterIndex(template, allLanguageMeta) {
        let languageCardsHTML = '';

        for (const meta of allLanguageMeta) {
            languageCardsHTML += `
            <a href="/resources/${meta.slug}" class="language-card">
                <div class="language-card-name">${this.escapeHtml(meta.language)}</div>
                <div class="language-card-desc">${this.escapeHtml(meta.index.description)}</div>
                <div class="language-card-stats">
                    <span class="badge badge-chapter">${meta.chapters.length} Chapters</span>
                    <span class="badge badge-free">Free</span>
                </div>
            </a>`;
        }

        const structuredData = JSON.stringify([
            seoUtils.generateBreadcrumbSchema([
                { name: 'Home', url: '/' },
                { name: 'Resources', url: '/resources' }
            ]),
            {
                "@context": "https://schema.org",
                "@type": "CollectionPage",
                "name": "Free Coding Resources",
                "description": "Free coding resources with detailed chapter-by-chapter notes, code examples, and practice questions.",
                "url": `${SEO_CONFIG.domain}/resources`,
                "provider": {
                    "@type": "Organization",
                    "name": SEO_CONFIG.organization.name
                }
            }
        ], null, 2);

        let html = template
            .replace(/\{\{LANGUAGE_CARDS_HTML\}\}/g, languageCardsHTML)
            .replace(/\{\{STRUCTURED_DATA\}\}/g, structuredData);

        fs.writeFileSync(path.join(this.generatedDir, 'index.html'), html, 'utf8');
        console.log('📄 Master resource index generated: /resources/');
    }

    /**
     * Generate HTML for code examples
     */
    generateCodeExamplesHTML(examples) {
        if (!examples || examples.length === 0) return '<p>No code examples available yet.</p>';

        return examples.map(ex => {
            const titleBar = ex.title ? `<div class="code-example-title">${this.escapeHtml(ex.title)}</div>` : '';
            const code = `<pre><code class="language-python">${this.escapeHtml(ex.code || '')}</code></pre>`;
            const explanation = ex.explanation ? `<div class="code-example-explanation">${ex.explanation}</div>` : '';
            const output = ex.output ? `<div class="code-example-output">${this.escapeHtml(ex.output)}</div>` : '';

            return `<div class="code-example">${titleBar}${code}${explanation}${output}</div>`;
        }).join('\n');
    }

    /**
     * Generate HTML for common mistakes
     */
    generateMistakesHTML(mistakes) {
        if (!mistakes || mistakes.length === 0) return '<p>No common mistakes listed for this topic.</p>';

        return mistakes.map(m => {
            const wrongCode = m.wrongCode ? `<div class="wrong-code"><pre><code class="language-python">${this.escapeHtml(m.wrongCode)}</code></pre></div>` : '';
            const errorMsg = m.error ? `<div class="error-message">${this.escapeHtml(m.error)}</div>` : '';
            const correctCode = m.correctCode ? `<div class="correct-code"><pre><code class="language-python">${this.escapeHtml(m.correctCode)}</code></pre></div>` : '';
            const explanation = m.explanation ? `<div class="mistake-explanation">${m.explanation}</div>` : '';

            return `<div class="mistake-card">
                <h3>${this.escapeHtml(m.title || 'Common Mistake')}</h3>
                ${wrongCode}${errorMsg}${correctCode}${explanation}
            </div>`;
        }).join('\n');
    }

    /**
     * Generate HTML for summary list
     */
    generateSummaryHTML(items) {
        if (!items || items.length === 0) return '<p>Summary coming soon.</p>';

        const lis = items.map(item => `<li>${this.escapeHtml(item)}</li>`).join('\n');
        return `<div class="summary-box"><ul>${lis}</ul></div>`;
    }

    /**
     * Generate HTML for related topics
     */
    generateRelatedTopicsHTML(slugs, meta) {
        if (!slugs || slugs.length === 0) return '<p>No related topics.</p>';

        const links = slugs.map(slug => {
            const chapter = meta.chapters.find(c => c.slug === slug);
            if (!chapter) return '';
            return `<a href="/resources/${meta.slug}/${slug}" class="related-topic-link">${this.escapeHtml(chapter.title)}</a>`;
        }).filter(Boolean);

        if (links.length === 0) return '<p>No related topics.</p>';

        return `<div class="related-topics-list">${links.join('\n')}</div>`;
    }

    /**
     * Generate HTML for questions (topic-specific or mixed)
     */
    generateQuestionsHTML(questions, prefix) {
        if (!questions || questions.length === 0) return '<p>Questions coming soon.</p>';

        return questions.map((q, i) => {
            const num = i + 1;
            const id = `${prefix}-${num}`;
            const diffClass = (q.difficulty || 'easy').toLowerCase();

            let html = `<div class="question-card">
                <div class="question-number">Question ${num}</div>
                <span class="question-difficulty ${diffClass}">${q.difficulty || 'Easy'}</span>
                <div class="question-text">${q.question || ''}</div>`;

            if (q.hint) {
                html += `<button type="button" class="collapsible-toggle" data-target="hint-${id}" data-label-closed="Show Hint" data-label-open="Hide Hint" aria-expanded="false">Show Hint</button>`;
                html += `<div class="collapsible-content" id="hint-${id}">${q.hint}</div>`;
            }

            if (q.answer) {
                html += `<button type="button" class="collapsible-toggle" data-target="answer-${id}" data-label-closed="Show Answer" data-label-open="Hide Answer" aria-expanded="false">Show Answer</button>`;
                html += `<div class="collapsible-content" id="answer-${id}">${q.answer}</div>`;
            }

            html += `</div>`;
            return html;
        }).join('\n');
    }

    /**
     * Generate HTML for MCQs
     */
    generateMCQsHTML(mcqs) {
        if (!mcqs || mcqs.length === 0) return '<p>MCQs coming soon.</p>';

        return mcqs.map((mcq, i) => {
            const num = i + 1;
            const id = `mcq-${num}`;

            let optionsHTML = '<ul class="mcq-options">';
            const labels = ['A', 'B', 'C', 'D'];
            (mcq.options || []).forEach((opt, j) => {
                optionsHTML += `<li><span class="mcq-option-label">${labels[j] || String.fromCharCode(65 + j)}.</span> ${this.escapeHtml(opt)}</li>`;
            });
            optionsHTML += '</ul>';

            let html = `<div class="question-card">
                <div class="question-number">MCQ ${num}</div>
                <div class="question-text">${mcq.question || ''}</div>
                ${optionsHTML}`;

            const answerText = mcq.explanation
                ? `<strong>Answer: ${this.escapeHtml(mcq.answer || '')}</strong><br>${mcq.explanation}`
                : `<strong>Answer: ${this.escapeHtml(mcq.answer || '')}</strong>`;

            html += `<button type="button" class="collapsible-toggle" data-target="mcqans-${id}" data-label-closed="Show Answer" data-label-open="Hide Answer" aria-expanded="false">Show Answer</button>`;
            html += `<div class="collapsible-content" id="mcqans-${id}">${answerText}</div>`;

            html += `</div>`;
            return html;
        }).join('\n');
    }

    /**
     * Generate HTML for coding challenges
     */
    generateCodingChallengesHTML(challenges) {
        if (!challenges || challenges.length === 0) return '<p>Coding challenges coming soon.</p>';

        return challenges.map((ch, i) => {
            const num = i + 1;
            const id = `challenge-${num}`;
            const diffClass = (ch.difficulty || 'easy').toLowerCase();

            let html = `<div class="challenge-card">
                <h3>Challenge ${num}: ${this.escapeHtml(ch.title || '')}</h3>
                <span class="challenge-difficulty ${diffClass}">${ch.difficulty || 'Easy'}</span>
                <div class="challenge-description">${ch.description || ''}</div>`;

            if (ch.sampleInput) {
                html += `<div class="challenge-io">
                    <div class="challenge-io-label">Sample Input</div>
                    <div class="challenge-io-value">${this.escapeHtml(ch.sampleInput)}</div>
                </div>`;
            }
            if (ch.sampleOutput) {
                html += `<div class="challenge-io">
                    <div class="challenge-io-label">Sample Output</div>
                    <div class="challenge-io-value">${this.escapeHtml(ch.sampleOutput)}</div>
                </div>`;
            }
            if (ch.constraints) {
                html += `<div class="challenge-constraints">${this.escapeHtml(ch.constraints)}</div>`;
            }

            if (ch.solution) {
                html += `<button type="button" class="collapsible-toggle" data-target="sol-${id}" data-label-closed="Show Solution" data-label-open="Hide Solution" aria-expanded="false">Show Solution</button>`;
                html += `<div class="collapsible-content" id="sol-${id}"><pre><code class="language-python">${this.escapeHtml(ch.solution)}</code></pre></div>`;
            }

            html += `</div>`;
            return html;
        }).join('\n');
    }

    /**
     * Get prev/next chapter navigation links
     */
    getChapterNav(currentSlug, meta, direction, type) {
        const chapters = meta.chapters;
        const idx = chapters.findIndex(c => c.slug === currentSlug);
        if (idx === -1) return '';

        const targetIdx = direction === 'prev' ? idx - 1 : idx + 1;
        if (targetIdx < 0 || targetIdx >= chapters.length) return '';

        const target = chapters[targetIdx];
        const suffix = type === 'practice' ? '/practice' : '';
        const label = direction === 'prev' ? 'Previous Chapter' : 'Next Chapter';
        const cssClass = direction === 'prev' ? 'prev' : 'next';

        return `<a href="/resources/${meta.slug}/${target.slug}${suffix}" class="chapter-nav-card ${cssClass}">
            <span class="chapter-nav-label">${label}</span>
            <span class="chapter-nav-title">${this.escapeHtml(target.title)}</span>
        </a>`;
    }

    /**
     * Generate structured data for notes page: TechArticle + BreadcrumbList + FAQPage
     */
    generateNotesStructuredData(chapterData, meta) {
        const chapter = chapterData.chapterMeta;
        const content = chapterData.content;
        const url = `/resources/${meta.slug}/${chapter.slug}`;

        const schemas = [];

        // TechArticle
        schemas.push({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": chapter.title,
            "description": chapter.description,
            "author": {
                "@type": "Organization",
                "name": SEO_CONFIG.organization.name,
                "url": SEO_CONFIG.domain
            },
            "publisher": {
                "@type": "Organization",
                "name": SEO_CONFIG.organization.name,
                "logo": {
                    "@type": "ImageObject",
                    "url": SEO_CONFIG.domain + SEO_CONFIG.organization.logo
                }
            },
            "datePublished": chapterData.lastUpdated || new Date().toISOString().split('T')[0],
            "dateModified": chapterData.lastUpdated || new Date().toISOString().split('T')[0],
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": SEO_CONFIG.domain + url
            },
            "educationalLevel": chapter.difficulty,
            "inLanguage": "en",
            "isAccessibleForFree": true,
            "url": SEO_CONFIG.domain + url
        });

        // BreadcrumbList
        schemas.push(seoUtils.generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Resources', url: '/resources' },
            { name: meta.language, url: `/resources/${meta.slug}` },
            { name: chapter.title, url: url }
        ]));

        // FAQPage from common mistakes
        const mistakes = content.commonMistakes || [];
        if (mistakes.length > 0) {
            const faqItems = mistakes.map(m => ({
                question: m.title || 'What is a common mistake?',
                answer: m.explanation || `Avoid: ${m.wrongCode || ''} — Use: ${m.correctCode || ''}`
            }));
            schemas.push(seoUtils.generateFAQSchema(faqItems));
        }

        return schemas;
    }

    /**
     * Generate structured data for practice page: Quiz + BreadcrumbList
     */
    generatePracticeStructuredData(chapterData, meta, totalQuestions) {
        const chapter = chapterData.chapterMeta;
        const url = `/resources/${meta.slug}/${chapter.slug}/practice`;

        const schemas = [];

        // Quiz
        schemas.push({
            "@context": "https://schema.org",
            "@type": "Quiz",
            "name": `Practice Questions - ${chapter.title}`,
            "description": `${totalQuestions}+ practice questions on ${chapter.title} in ${meta.language}.`,
            "educationalLevel": chapter.difficulty,
            "about": {
                "@type": "Thing",
                "name": chapter.title
            },
            "provider": {
                "@type": "Organization",
                "name": SEO_CONFIG.organization.name,
                "url": SEO_CONFIG.domain
            },
            "isAccessibleForFree": true,
            "url": SEO_CONFIG.domain + url
        });

        // BreadcrumbList
        schemas.push(seoUtils.generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Resources', url: '/resources' },
            { name: meta.language, url: `/resources/${meta.slug}` },
            { name: chapter.title, url: `/resources/${meta.slug}/${chapter.slug}` },
            { name: 'Practice', url: url }
        ]));

        return schemas;
    }

    /**
     * Generate sitemap entries XML file
     */
    generateSitemapEntries(allLanguageMeta) {
        let entries = '';
        const today = new Date().toISOString().split('T')[0];

        // Master index
        entries += `  <url>\n    <loc>${SEO_CONFIG.domain}/resources</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;

        for (const meta of allLanguageMeta) {
            // Language index
            entries += `  <url>\n    <loc>${SEO_CONFIG.domain}/resources/${meta.slug}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;

            for (const chapter of meta.chapters) {
                // Notes page
                entries += `  <url>\n    <loc>${SEO_CONFIG.domain}/resources/${meta.slug}/${chapter.slug}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
                // Practice page
                entries += `  <url>\n    <loc>${SEO_CONFIG.domain}/resources/${meta.slug}/${chapter.slug}/practice</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.6</priority>\n  </url>\n`;
            }
        }

        const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<!-- Resource sitemap entries - include these in your main sitemap -->\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}</urlset>\n`;

        fs.writeFileSync(path.join(this.generatedDir, 'sitemap-entries.xml'), sitemapXml, 'utf8');
        console.log('🗺️  Sitemap entries generated: sitemap-entries.xml');
    }

    /**
     * Estimate reading time based on content
     */
    estimateReadingTime(content) {
        const text = [
            content.what || '',
            content.why || '',
            content.explanation || ''
        ].join(' ');

        // Strip HTML tags for word count
        const plainText = text.replace(/<[^>]*>/g, '');
        const words = plainText.split(/\s+/).filter(w => w.length > 0).length;
        return Math.max(5, Math.ceil(words / 200));
    }

    /**
     * Escape HTML special characters
     */
    escapeHtml(text) {
        if (!text) return '';
        return String(text)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}

// Run
const generator = new ResourceGenerator();
generator.generate();
