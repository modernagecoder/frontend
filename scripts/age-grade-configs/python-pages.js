/*
 * python-pages.js — 18 Python-focused landing pages.
 * Required by scripts/age-grade-pages-config.js.
 *
 * Split across three sub-modules to keep each file manageable.
 */

const pythonAgePages = require('./python-age-pages');
const pythonKidsPages = require('./python-kids-pages');
const pythonGradePages = require('./python-grade-pages');

module.exports = [
    ...pythonAgePages,
    ...pythonKidsPages,
    ...pythonGradePages
];
