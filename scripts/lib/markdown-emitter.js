/**
 * Markdown Emitter for Modern Age Coders
 *
 * Produces clean markdown twins of generated HTML pages so AI agents that
 * request `Accept: text/markdown` (Claude Code, Cursor, OpenCode) and crawlers
 * that probe `.md` URLs get a token-efficient version of every page.
 *
 * Three public converters:
 *   - blogToMarkdown(blogData)     — uses content.sections[] schema
 *   - courseToMarkdown(courseData) — recursive walker over phase/month/week trees
 *   - chapterToMarkdown(data, lang)— resource chapter notes
 *   - chapterPracticeToMarkdown(data, lang)
 *
 * Plus shared helpers:
 *   - htmlToMarkdown(html)         — regex-based block converter
 *   - stripInlineHtml(text)        — converts strong/em/code/a, drops the rest
 *   - frontMatter(meta)            — minimal YAML front matter
 */

'use strict';

const SITE = 'https://learn.modernagecoders.com';

// ---------- Entity & tag helpers ----------

function decodeEntities(s) {
    if (!s) return '';
    return String(s)
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&apos;/g, "'")
        .replace(/&mdash;/g, '—')
        .replace(/&ndash;/g, '–')
        .replace(/&hellip;/g, '…')
        .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(parseInt(n, 10)));
}

function escapeMdPipes(s) {
    return String(s || '').replace(/\|/g, '\\|');
}

/**
 * Convert inline HTML inside a single text run to markdown.
 * Handles: <strong>/<b>, <em>/<i>, <code>, <a href>, <br>. Strips everything else.
 */
function stripInlineHtml(text) {
    if (!text) return '';
    let s = String(text);

    // Block-ish constructs first (so question text with <pre><code> renders as fenced)
    s = s.replace(/<pre[^>]*>\s*<code(?:\s+class=["']language-(\w+)["'])?[^>]*>([\s\S]*?)<\/code>\s*<\/pre>/gi,
        (_, lang, code) => `\n\n\`\`\`${lang || ''}\n${decodeEntities(code).replace(/\n+$/, '')}\n\`\`\`\n\n`);
    s = s.replace(/<pre[^>]*>([\s\S]*?)<\/pre>/gi,
        (_, code) => `\n\n\`\`\`\n${decodeEntities(code).replace(/\n+$/, '')}\n\`\`\`\n\n`);

    s = s.replace(/<br\s*\/?>/gi, '\n');
    s = s.replace(/<\/(p|div)>/gi, '\n\n');
    s = s.replace(/<(p|div)[^>]*>/gi, '');
    s = s.replace(/<a\s+[^>]*?href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi,
        (_, href, txt) => `[${stripInlineHtml(txt).trim()}](${href})`);
    s = s.replace(/<(strong|b)>([\s\S]*?)<\/\1>/gi, (_, _t, inner) => `**${stripInlineHtml(inner)}**`);
    s = s.replace(/<(em|i)>([\s\S]*?)<\/\1>/gi, (_, _t, inner) => `*${stripInlineHtml(inner)}*`);
    s = s.replace(/<code>([\s\S]*?)<\/code>/gi, (_, inner) => `\`${decodeEntities(inner)}\``);

    // Strict: only strip strings that look like real HTML tags (start with letter or /).
    // Prevents eating C++ stream operators like `cout << "x"` or generics like `vector<int>`.
    s = s.replace(/<\/?[a-zA-Z][a-zA-Z0-9-]*(?:\s+[^>]*)?>/g, '');

    s = decodeEntities(s);
    return s.replace(/\n{3,}/g, '\n\n').trim();
}

/**
 * Convert a block of HTML (with headings, lists, pre/code blocks, paragraphs)
 * to markdown. Used for resource `content.what / why / explanation` fields
 * and any blog text that contains nested block markup.
 */
function htmlToMarkdown(html) {
    if (!html) return '';
    let s = String(html);

    // Pre+code → fenced code blocks (must run before generic code handling)
    s = s.replace(/<pre[^>]*>\s*<code(?:\s+class=["']language-(\w+)["'])?[^>]*>([\s\S]*?)<\/code>\s*<\/pre>/gi,
        (_, lang, code) => `\n\n\`\`\`${lang || ''}\n${decodeEntities(code).replace(/\n+$/, '')}\n\`\`\`\n\n`);
    s = s.replace(/<pre[^>]*>([\s\S]*?)<\/pre>/gi,
        (_, code) => `\n\n\`\`\`\n${decodeEntities(code).replace(/\n+$/, '')}\n\`\`\`\n\n`);

    // Headings
    for (let lvl = 6; lvl >= 1; lvl--) {
        const re = new RegExp(`<h${lvl}[^>]*>([\\s\\S]*?)</h${lvl}>`, 'gi');
        s = s.replace(re, (_, inner) => `\n\n${'#'.repeat(lvl)} ${stripInlineHtml(inner)}\n\n`);
    }

    // Blockquotes
    s = s.replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, (_, inner) => {
        const text = stripInlineHtml(inner).trim();
        return '\n\n' + text.split('\n').map(l => `> ${l}`).join('\n') + '\n\n';
    });

    // Lists — process innermost first by repeatedly applying until stable
    let prev;
    do {
        prev = s;
        s = s.replace(/<ul[^>]*>([\s\S]*?)<\/ul>/i, (_, inner) => {
            const items = [...inner.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)]
                .map(m => `- ${stripInlineHtml(m[1])}`)
                .join('\n');
            return `\n\n${items}\n\n`;
        });
        s = s.replace(/<ol[^>]*>([\s\S]*?)<\/ol>/i, (_, inner) => {
            const items = [...inner.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)]
                .map((m, i) => `${i + 1}. ${stripInlineHtml(m[1])}`)
                .join('\n');
            return `\n\n${items}\n\n`;
        });
    } while (s !== prev);

    // HR
    s = s.replace(/<hr\s*\/?>/gi, '\n\n---\n\n');

    // Paragraphs
    s = s.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, (_, inner) => `\n\n${stripInlineHtml(inner)}\n\n`);

    // Whatever inline HTML survives — note stripInlineHtml uses the same strict
    // tag regex, so C++/generic syntax like `cout <<` and `vector<int>` survives.
    s = stripInlineHtml(s);

    return s.replace(/\n{3,}/g, '\n\n').trim();
}

// ---------- Front matter ----------

function frontMatter(meta) {
    const lines = ['---'];
    if (meta.title) lines.push(`title: ${JSON.stringify(meta.title)}`);
    if (meta.description) lines.push(`description: ${JSON.stringify(meta.description)}`);
    if (meta.slug) lines.push(`slug: ${meta.slug}`);
    if (meta.canonical) lines.push(`canonical: ${meta.canonical}`);
    if (meta.date) lines.push(`date: ${meta.date}`);
    if (meta.dateModified) lines.push(`dateModified: ${meta.dateModified}`);
    if (meta.category) lines.push(`category: ${JSON.stringify(meta.category)}`);
    if (meta.tags && meta.tags.length) lines.push(`tags: [${meta.tags.map(t => JSON.stringify(t)).join(', ')}]`);
    if (meta.keywords && meta.keywords.length) lines.push(`keywords: [${meta.keywords.slice(0, 10).map(k => JSON.stringify(k)).join(', ')}]`);
    if (meta.readTime) lines.push(`readTime: ${JSON.stringify(meta.readTime)}`);
    if (meta.author) lines.push(`author: ${JSON.stringify(meta.author)}`);
    lines.push('---', '');
    return lines.join('\n');
}

// ---------- Blog converter ----------

function blogSectionToMarkdown(section, allSections) {
    if (!section || !section.type) return '';
    switch (section.type) {
        case 'paragraph':
            return stripInlineHtml(section.text) + '\n\n';

        case 'heading': {
            const level = Math.min(6, Math.max(1, section.level || 2));
            return `${'#'.repeat(level)} ${stripInlineHtml(section.text)}\n\n`;
        }

        case 'list': {
            const ordered = section.style === 'ordered';
            const lines = (section.items || []).map((item, i) =>
                ordered ? `${i + 1}. ${stripInlineHtml(item)}` : `- ${stripInlineHtml(item)}`
            );
            return lines.join('\n') + '\n\n';
        }

        case 'image': {
            const alt = (section.alt || '').replace(/[\[\]]/g, '');
            const cap = section.caption ? `\n\n*${stripInlineHtml(section.caption)}*` : '';
            return `![${alt}](${section.url})${cap}\n\n`;
        }

        case 'code': {
            const lang = section.language || '';
            const title = section.title ? `**${section.title}**\n\n` : '';
            return `${title}\`\`\`${lang}\n${section.code}\n\`\`\`\n\n`;
        }

        case 'quote': {
            const text = stripInlineHtml(section.text).split('\n').map(l => `> ${l}`).join('\n');
            const cite = section.author ? `\n> \n> — ${section.author}` : '';
            return `${text}${cite}\n\n`;
        }

        case 'callout': {
            const title = section.title ? `**${stripInlineHtml(section.title)}**\n\n` : '';
            return `> ${title}> ${stripInlineHtml(section.text).replace(/\n/g, '\n> ')}\n\n`;
        }

        case 'video': {
            const cap = section.caption ? ` — ${section.caption}` : '';
            if (section.platform === 'youtube' && section.videoId) {
                return `[Video: https://www.youtube.com/watch?v=${section.videoId}]${cap}\n\n`;
            }
            if (section.platform === 'vimeo' && section.videoId) {
                return `[Video: https://vimeo.com/${section.videoId}]${cap}\n\n`;
            }
            return section.url ? `[Video: ${section.url}]${cap}\n\n` : '';
        }

        case 'table': {
            const headers = (section.headers || []).map(escapeMdPipes);
            const rows = (section.rows || []).map(r => r.map(c => escapeMdPipes(stripInlineHtml(String(c)))));
            if (!headers.length && !rows.length) return '';
            const headRow = headers.length
                ? `| ${headers.join(' | ')} |\n| ${headers.map(() => '---').join(' | ')} |\n`
                : '';
            const bodyRows = rows.map(r => `| ${r.join(' | ')} |`).join('\n');
            return `${headRow}${bodyRows}\n\n`;
        }

        case 'accordion': {
            return (section.items || [])
                .map(item => `**${stripInlineHtml(item.title)}**\n\n${stripInlineHtml(item.content)}\n`)
                .join('\n') + '\n';
        }

        case 'button':
            return `[${stripInlineHtml(section.text)}](${section.url})\n\n`;

        case 'divider':
            return `---\n\n`;

        case 'gallery': {
            return (section.images || [])
                .map(img => `![${(img.alt || '').replace(/[\[\]]/g, '')}](${img.url})`)
                .join('\n\n') + '\n\n';
        }

        case 'embed':
            return htmlToMarkdown(section.html || '') + '\n\n';

        case 'toc':
            return ''; // skip — markdown readers can build TOC themselves

        case 'columns': {
            return (section.columns || [])
                .map(col => (col.sections || []).map(s => blogSectionToMarkdown(s, allSections)).join(''))
                .join('\n') + '\n';
        }

        case 'cta': {
            const title = section.title ? `## ${section.title}\n\n` : '';
            const desc = section.description ? `${stripInlineHtml(section.description)}\n\n` : '';
            const btn = section.buttonText && section.buttonUrl ? `[${section.buttonText}](${section.buttonUrl})\n\n` : '';
            return `${title}${desc}${btn}`;
        }

        default:
            return '';
    }
}

function blogToMarkdown(data) {
    const meta = data.meta || {};
    const hero = data.hero || {};
    const fm = frontMatter({
        title: meta.title,
        description: meta.description,
        slug: meta.slug,
        canonical: `${SITE}/blog/${meta.slug}`,
        date: meta.date,
        dateModified: meta.dateModified,
        category: meta.category,
        tags: meta.tags,
        keywords: meta.keywords,
        readTime: meta.readTime,
        author: meta.author && meta.author.name
    });

    let body = '';
    body += `# ${hero.title || meta.title}\n\n`;
    if (hero.subtitle) body += `> ${stripInlineHtml(hero.subtitle)}\n\n`;
    if (hero.featuredImage && hero.featuredImage.url) {
        body += `![${(hero.featuredImage.alt || meta.title || '').replace(/[\[\]]/g, '')}](${hero.featuredImage.url})\n\n`;
    }
    if (meta.author && meta.author.name) {
        body += `*By ${meta.author.name}`;
        if (meta.date) body += ` · ${meta.date}`;
        if (meta.readTime) body += ` · ${meta.readTime}`;
        body += '*\n\n';
    }

    const sections = (data.content && data.content.sections) || [];
    for (const section of sections) {
        body += blogSectionToMarkdown(section, sections);
    }

    body += `\n---\n\n*Source: ${SITE}/blog/${meta.slug}/*\n`;
    return fm + body.replace(/\n{3,}/g, '\n\n');
}

// ---------- Course converter ----------

/**
 * Generic recursive walker for the course JSON. Course data has a deeply
 * nested phase/month/week structure that varies per course, so we walk
 * any object and render keys as headings, arrays as lists, strings as text.
 */
function renderValue(value, depth) {
    if (value == null) return '';
    if (typeof value === 'string') return stripInlineHtml(value);
    if (typeof value === 'number' || typeof value === 'boolean') return String(value);
    if (Array.isArray(value)) {
        if (!value.length) return '';
        // Array of primitives → bullet list
        if (value.every(v => typeof v === 'string' || typeof v === 'number')) {
            return value.map(v => `- ${stripInlineHtml(String(v))}`).join('\n') + '\n\n';
        }
        // Array of objects → render each as a block
        return value.map(v => renderValue(v, depth)).filter(Boolean).join('\n');
    }
    if (typeof value === 'object') {
        return renderObject(value, depth);
    }
    return '';
}

function humanizeKey(key) {
    return key
        .replace(/_/g, ' ')
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/\b\w/g, c => c.toUpperCase());
}

function renderObject(obj, depth) {
    if (!obj || typeof obj !== 'object') return '';
    const lvl = Math.min(6, Math.max(2, depth));
    let out = '';

    // If the object has a title, lead with it as a heading
    if (obj.title) {
        out += `${'#'.repeat(lvl)} ${stripInlineHtml(obj.title)}\n\n`;
    }
    if (obj.tagline) out += `*${stripInlineHtml(obj.tagline)}*\n\n`;
    if (obj.description) out += `${stripInlineHtml(obj.description)}\n\n`;
    if (obj.weeks && typeof obj.weeks === 'string') out += `**Weeks:** ${obj.weeks}\n\n`;
    if (obj.duration && typeof obj.duration === 'string' && depth > 2) out += `**Duration:** ${obj.duration}\n\n`;

    const skip = new Set(['title', 'tagline', 'description', 'weeks']);
    for (const [key, val] of Object.entries(obj)) {
        if (skip.has(key)) continue;
        if (val == null || val === '') continue;

        if (typeof val === 'string') {
            out += `**${humanizeKey(key)}:** ${stripInlineHtml(val)}\n\n`;
        } else if (typeof val === 'number' || typeof val === 'boolean') {
            out += `**${humanizeKey(key)}:** ${val}\n\n`;
        } else if (Array.isArray(val)) {
            if (!val.length) continue;
            out += `**${humanizeKey(key)}:**\n\n`;
            out += renderValue(val, lvl + 1);
            if (!out.endsWith('\n\n')) out += '\n';
        } else if (typeof val === 'object') {
            out += `${'#'.repeat(Math.min(6, lvl + 1))} ${humanizeKey(key)}\n\n`;
            out += renderObject(val, lvl + 2);
        }
    }
    return out;
}

function courseToMarkdown(data) {
    const meta = data.meta || {};
    const fm = frontMatter({
        title: meta.title,
        description: meta.description,
        slug: meta.slug,
        canonical: `${SITE}/courses/${meta.slug}`,
        category: meta.category,
        keywords: meta.keywords
    });

    let body = `# ${meta.title || meta.slug}\n\n`;
    if (meta.description) body += `> ${stripInlineHtml(meta.description)}\n\n`;

    // Quick facts
    const facts = [];
    if (meta.level) facts.push(`**Level:** ${meta.level}`);
    if (meta.duration) facts.push(`**Duration:** ${meta.duration}`);
    if (meta.commitment) facts.push(`**Commitment:** ${meta.commitment}`);
    if (meta.certification) facts.push(`**Certification:** ${meta.certification}`);
    if (meta.price) {
        if (meta.price.group) facts.push(`**Group classes:** ${meta.price.group}`);
        if (meta.price.personal) facts.push(`**1-on-1:** ${meta.price.personal}`);
        if (meta.price.lifetime) facts.push(`**Lifetime:** ${meta.price.lifetime}`);
    }
    if (facts.length) body += facts.join('  \n') + '\n\n';

    // Walk every top-level key except meta
    const skip = new Set(['meta']);
    for (const [key, val] of Object.entries(data)) {
        if (skip.has(key)) continue;
        if (val == null || val === '') continue;
        if (typeof val === 'object' && !Array.isArray(val) && val.title) {
            body += renderObject(val, 2);
        } else if (Array.isArray(val) && val.length) {
            body += `## ${humanizeKey(key)}\n\n`;
            body += renderValue(val, 3);
        } else if (typeof val === 'object') {
            body += `## ${humanizeKey(key)}\n\n`;
            body += renderObject(val, 3);
        }
    }

    body += `\n---\n\n## Enroll\n\n`;
    body += `- Book a free demo: ${SITE}/book-demo\n`;
    body += `- Course page: ${SITE}/courses/${meta.slug}/\n`;
    body += `- All courses: ${SITE}/courses\n`;
    body += `\n*Source: ${SITE}/courses/${meta.slug}/*\n`;

    return fm + body.replace(/\n{3,}/g, '\n\n');
}

// ---------- Resource chapter converter ----------

function chapterNotesToMarkdown(data, langMeta) {
    const slug = data.slug;
    const fm = frontMatter({
        title: (data.seo && data.seo.title) || data.title,
        description: data.seo && data.seo.description,
        slug,
        canonical: `${SITE}/resources/${langMeta.slug}/${slug}`,
        category: langMeta.language,
        keywords: data.seo && data.seo.keywords
            ? data.seo.keywords.split(',').map(s => s.trim()).filter(Boolean)
            : []
    });

    let body = `# ${data.title}\n\n`;
    const facts = [];
    if (data.difficulty) facts.push(`**Difficulty:** ${data.difficulty}`);
    if (data.readingTime) facts.push(`**Reading time:** ${data.readingTime}`);
    if (data.chapter) facts.push(`**Chapter:** ${data.chapter}`);
    if (data.totalQuestions) facts.push(`**Practice questions:** ${data.totalQuestions}`);
    if (facts.length) body += facts.join('  \n') + '\n\n';

    const c = data.content || {};
    if (c.what) body += htmlToMarkdown(c.what) + '\n\n';
    if (c.why) body += htmlToMarkdown(c.why) + '\n\n';
    if (c.explanation) body += htmlToMarkdown(c.explanation) + '\n\n';

    if (Array.isArray(c.codeExamples) && c.codeExamples.length) {
        body += `## Code Examples\n\n`;
        for (const ex of c.codeExamples) {
            if (ex.title) body += `### ${ex.title}\n\n`;
            body += `\`\`\`${ex.language || ''}\n${ex.code}\n\`\`\`\n\n`;
            if (ex.explanation) body += `${stripInlineHtml(ex.explanation)}\n\n`;
            if (ex.output) body += `**Output:**\n\n\`\`\`\n${ex.output}\n\`\`\`\n\n`;
        }
    }

    if (Array.isArray(c.commonMistakes) && c.commonMistakes.length) {
        body += `## Common Mistakes\n\n`;
        for (const m of c.commonMistakes) {
            if (m.title) body += `### ${m.title}\n\n`;
            if (m.wrongCode) body += `**Wrong:**\n\n\`\`\`\n${m.wrongCode}\n\`\`\`\n\n`;
            if (m.error) body += `${stripInlineHtml(m.error)}\n\n`;
            if (m.correctCode) body += `**Correct:**\n\n\`\`\`\n${m.correctCode}\n\`\`\`\n\n`;
            if (m.explanation) body += `${stripInlineHtml(m.explanation)}\n\n`;
        }
    }

    if (Array.isArray(c.summary) && c.summary.length) {
        body += `## Summary\n\n`;
        body += c.summary.map(s => `- ${stripInlineHtml(s)}`).join('\n') + '\n\n';
    }

    if (Array.isArray(data.relatedTopics) && data.relatedTopics.length) {
        body += `## Related Topics\n\n`;
        body += data.relatedTopics
            .map(t => t.url ? `- [${t.title || t.text}](${t.url})` : `- ${t.title || t.text}`)
            .join('\n') + '\n\n';
    }

    body += `\n---\n\n*Source: ${SITE}/resources/${langMeta.slug}/${slug}/*\n`;
    body += `*Practice questions: ${SITE}/resources/${langMeta.slug}/${slug}/practice/*\n`;

    return fm + body.replace(/\n{3,}/g, '\n\n');
}

function chapterPracticeToMarkdown(data, langMeta) {
    const slug = data.slug;
    const practice = data.practice || {};
    const fm = frontMatter({
        title: `Practice: ${data.title}`,
        description: `${practice.totalQuestions || ''} practice problems for ${data.title} in ${langMeta.language}`.trim(),
        slug: `${slug}-practice`,
        canonical: `${SITE}/resources/${langMeta.slug}/${slug}/practice`,
        category: langMeta.language
    });

    let body = `# Practice: ${data.title}\n\n`;
    if (practice.totalQuestions) body += `**Total questions:** ${practice.totalQuestions}\n\n`;

    function renderQuestion(q, i) {
        let out = `### Q${i + 1}. `;
        if (q.difficulty) out += `[${q.difficulty}] `;
        out += stripInlineHtml(q.question || q.text || q.prompt || '') + '\n\n';
        if (q.code) out += `\`\`\`\n${q.code}\n\`\`\`\n\n`;
        if (Array.isArray(q.options) && q.options.length) {
            q.options.forEach((opt, j) => {
                out += `${String.fromCharCode(65 + j)}. ${stripInlineHtml(opt)}\n`;
            });
            out += '\n';
        }
        if (q.hint) out += `*Hint:* ${stripInlineHtml(q.hint)}\n\n`;
        if (q.answer) out += `**Answer:** ${stripInlineHtml(String(q.answer))}\n\n`;
        if (q.explanation) out += `${stripInlineHtml(q.explanation)}\n\n`;
        return out;
    }

    function renderChallenge(c, i) {
        let out = `### Challenge ${i + 1}. ${stripInlineHtml(c.title || '')}\n\n`;
        if (c.difficulty) out += `**Difficulty:** ${c.difficulty}\n\n`;
        if (c.description) out += `${stripInlineHtml(c.description)}\n\n`;
        if (c.constraints) {
            const cons = Array.isArray(c.constraints) ? c.constraints : [c.constraints];
            out += `**Constraints:**\n\n`;
            out += cons.map(x => `- ${stripInlineHtml(String(x))}`).join('\n') + '\n\n';
        }
        if (c.sampleInput) out += `**Sample input:**\n\n\`\`\`\n${c.sampleInput}\n\`\`\`\n\n`;
        if (c.sampleOutput) out += `**Sample output:**\n\n\`\`\`\n${c.sampleOutput}\n\`\`\`\n\n`;
        if (c.solution) out += `**Solution:**\n\n\`\`\`${langMeta.slug || ''}\n${c.solution}\n\`\`\`\n\n`;
        if (c.explanation) out += `${stripInlineHtml(c.explanation)}\n\n`;
        return out;
    }

    if (Array.isArray(practice.topicSpecific) && practice.topicSpecific.length) {
        body += `## Topic-Specific Questions\n\n`;
        practice.topicSpecific.forEach((q, i) => { body += renderQuestion(q, i); });
    }
    if (Array.isArray(practice.mixed) && practice.mixed.length) {
        body += `## Mixed Questions\n\n`;
        practice.mixed.forEach((q, i) => { body += renderQuestion(q, i); });
    }
    if (Array.isArray(practice.mcqs) && practice.mcqs.length) {
        body += `## Multiple Choice Questions\n\n`;
        practice.mcqs.forEach((q, i) => { body += renderQuestion(q, i); });
    }
    if (Array.isArray(practice.codingChallenges) && practice.codingChallenges.length) {
        body += `## Coding Challenges\n\n`;
        practice.codingChallenges.forEach((c, i) => { body += renderChallenge(c, i); });
    }

    body += `\n---\n\n*Notes: ${SITE}/resources/${langMeta.slug}/${slug}/*\n`;
    return fm + body.replace(/\n{3,}/g, '\n\n');
}

// ---------- Public API ----------

module.exports = {
    blogToMarkdown,
    courseToMarkdown,
    chapterNotesToMarkdown,
    chapterPracticeToMarkdown,
    htmlToMarkdown,
    stripInlineHtml,
    frontMatter
};
