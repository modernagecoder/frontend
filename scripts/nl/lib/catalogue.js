'use strict';
/**
 * Course catalogue lookup for the Netherlands cluster builders.
 *
 * Reads content/courses/data/*.json once and indexes by meta.slug, which is the
 * live URL segment (/courses/<meta.slug>) and is NOT the filename. Resolves the
 * thumbnail under public/images and throws if either the slug or the image is
 * missing, so a broken card can never ship into the first section of a page.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..', '..');
const DATA = path.join(ROOT, 'content', 'courses', 'data');
const IMAGES = path.join(ROOT, 'public', 'images');

let INDEX = null;

function load() {
  if (INDEX) return INDEX;
  INDEX = {};
  for (const f of fs.readdirSync(DATA)) {
    if (!f.endsWith('.json')) continue;
    let j;
    try { j = JSON.parse(fs.readFileSync(path.join(DATA, f), 'utf8')); } catch (e) { continue; }
    const m = j.meta || j;
    if (!m.slug) continue;
    INDEX[m.slug] = {
      slug: m.slug,
      title: m.title || '',
      category: m.category || '',
      image: m.image_path ? '/images/' + m.image_path : '',
      url: '/courses/' + m.slug,
      oneOnOneOnly: !!m.one_on_one_only
    };
  }
  return INDEX;
}

function course(slug) {
  const idx = load();
  const c = idx[slug];
  if (!c) throw new Error('catalogue: unknown course slug ' + slug);
  if (!c.image) throw new Error('catalogue: course has no image_path: ' + slug);
  const file = path.join(IMAGES, c.image.replace('/images/', ''));
  if (!fs.existsSync(file)) throw new Error('catalogue: thumbnail missing on disk ' + c.image);
  const gen = path.join(ROOT, 'content', 'courses', 'generated', slug);
  if (!fs.existsSync(gen)) {
    // generated/ is gitignored and may be absent locally; the gate checks the
    // generated dir too, so only warn here.
    process.stderr.write('catalogue: note, content/courses/generated/' + slug + ' not present locally\n');
  }
  return c;
}

function all() { return Object.values(load()); }

module.exports = { course, all };
