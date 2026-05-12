/* Download Curriculum — client-side PDF generation.
   Reads the inline JSON at #course-curriculum-data, lazy-loads jsPDF,
   builds a branded curriculum PDF, and saves it. */

(function () {
  'use strict';

  var JSPDF_URL = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
  var jspdfPromise = null;

  function loadJsPDF() {
    if (jspdfPromise) return jspdfPromise;
    jspdfPromise = new Promise(function (resolve, reject) {
      if (window.jspdf && window.jspdf.jsPDF) {
        resolve(window.jspdf.jsPDF);
        return;
      }
      var s = document.createElement('script');
      s.src = JSPDF_URL;
      s.async = true;
      s.onload = function () {
        if (window.jspdf && window.jspdf.jsPDF) resolve(window.jspdf.jsPDF);
        else { jspdfPromise = null; reject(new Error('jsPDF loaded but global missing')); }
      };
      s.onerror = function () {
        jspdfPromise = null; // allow retry on next click
        reject(new Error('Failed to load jsPDF'));
      };
      document.head.appendChild(s);
    });
    return jspdfPromise;
  }

  function readCourseData() {
    var tag = document.getElementById('course-curriculum-data');
    if (!tag) throw new Error('Missing #course-curriculum-data tag');
    var text = tag.textContent || '';
    if (!text.trim()) throw new Error('#course-curriculum-data is empty');
    return JSON.parse(text);
  }

  /* ---------- PDF layout helpers ---------- */

  var PAGE = { w: 210, h: 297 };          // A4 mm
  var MARGIN = { x: 18, top: 20, bottom: 20 };
  var CONTENT_W = PAGE.w - MARGIN.x * 2;

  function makeWriter(doc) {
    var y = MARGIN.top;

    function ensureSpace(needed) {
      if (y + needed > PAGE.h - MARGIN.bottom) {
        doc.addPage();
        y = MARGIN.top;
      }
    }

    function textBlock(str, opts) {
      opts = opts || {};
      doc.setFont('helvetica', opts.style || 'normal');
      doc.setFontSize(opts.size || 10);
      doc.setTextColor(opts.color || '#1f2937');
      var lines = doc.splitTextToSize(String(str || ''), opts.width || CONTENT_W);
      var lineH = (opts.size || 10) * 0.45;
      for (var i = 0; i < lines.length; i++) {
        ensureSpace(lineH);
        doc.text(lines[i], opts.x || MARGIN.x, y);
        y += lineH;
      }
      y += opts.after || 1.5;
    }

    function heading(str, level) {
      var sizes = { 1: 18, 2: 14, 3: 12, 4: 11 };
      var spacingBefore = level === 1 ? 4 : 3;
      ensureSpace(sizes[level] * 0.5 + spacingBefore);
      y += spacingBefore;
      textBlock(str, { size: sizes[level] || 11, style: 'bold', color: '#111827', after: 2 });
    }

    function bullets(items, prefix) {
      if (!items || !items.length) return;
      var indent = MARGIN.x + 4;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor('#374151');
      for (var i = 0; i < items.length; i++) {
        var lines = doc.splitTextToSize(String(items[i] || ''), CONTENT_W - 6);
        for (var j = 0; j < lines.length; j++) {
          ensureSpace(4.5);
          if (j === 0) doc.text(prefix || '•', MARGIN.x, y);
          doc.text(lines[j], indent, y);
          y += 4.5;
        }
      }
      y += 1.5;
    }

    function rule() {
      ensureSpace(3);
      doc.setDrawColor('#e5e7eb');
      doc.setLineWidth(0.3);
      doc.line(MARGIN.x, y, PAGE.w - MARGIN.x, y);
      y += 3;
    }

    function newPage() { doc.addPage(); y = MARGIN.top; }

    return {
      get y() { return y; },
      set y(v) { y = v; },
      ensureSpace: ensureSpace,
      textBlock: textBlock,
      heading: heading,
      bullets: bullets,
      rule: rule,
      newPage: newPage
    };
  }

  /* ---------- Section renderers ---------- */

  function renderCover(doc, payload) {
    var meta = payload.meta || {};
    var overview = payload.program_overview || {};

    // Amber→coral band, top 60mm
    var steps = 40;
    for (var i = 0; i < steps; i++) {
      var t = i / steps;
      var r = Math.round(0xf5 + (0xef - 0xf5) * t);
      var g = Math.round(0x9e + (0x44 - 0x9e) * t);
      var b = Math.round(0x0b + (0x44 - 0x0b) * t);
      doc.setFillColor(r, g, b);
      doc.rect(0, (60 * i) / steps, PAGE.w, 60 / steps + 0.2, 'F');
    }

    doc.setTextColor('#ffffff');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text('MODERN AGE CODERS', MARGIN.x, 18);

    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text('learn.modernagecoders.com', MARGIN.x, 24);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(22);
    var titleLines = doc.splitTextToSize(meta.title || overview.title || 'Course Curriculum', CONTENT_W);
    doc.text(titleLines, MARGIN.x, 42);

    // Body content below band
    var y = 76;
    if (overview.tagline) {
      doc.setTextColor('#374151');
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(13);
      var tag = doc.splitTextToSize(overview.tagline, CONTENT_W);
      doc.text(tag, MARGIN.x, y);
      y += tag.length * 6 + 4;
    }

    // Meta pills
    var pills = [
      ['Duration', meta.duration],
      ['Level', meta.level],
      ['Commitment', meta.commitment],
      ['Certification', meta.certification]
    ].filter(function (p) { return p[1]; });

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    for (var i = 0; i < pills.length; i++) {
      doc.setTextColor('#6b7280');
      doc.text(pills[i][0].toUpperCase(), MARGIN.x, y);
      doc.setTextColor('#111827');
      var val = doc.splitTextToSize(String(pills[i][1]), CONTENT_W - 50);
      doc.text(val, MARGIN.x + 45, y);
      y += val.length * 4.5 + 2;
    }

    // Generated date
    y = PAGE.h - 30;
    doc.setTextColor('#9ca3af');
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.text('Generated on ' + new Date().toISOString().slice(0, 10), MARGIN.x, y);
  }

  function renderOverview(w, doc, overview) {
    if (!overview) return;
    w.newPage();
    w.heading('Program Overview', 1);

    if (overview.description) {
      var paras = String(overview.description).split('\n\n');
      for (var i = 0; i < paras.length; i++) {
        w.textBlock(paras[i], { size: 10, after: 3 });
      }
    }

    if (overview.what_makes_this_different && overview.what_makes_this_different.length) {
      w.heading('What Makes This Different', 3);
      w.bullets(overview.what_makes_this_different);
    }

    if (overview.learning_path) {
      w.heading('Your Learning Journey', 3);
      var lpItems = Object.keys(overview.learning_path).map(function (k) {
        return k.replace('phase_', 'Phase ') + ': ' + overview.learning_path[k];
      });
      w.bullets(lpItems);
    }

    if (overview.career_outcomes && overview.career_outcomes.length) {
      w.heading('Career Progression', 3);
      var co = overview.career_outcomes.map(function (s, idx) { return (idx + 1) + '. ' + s; });
      w.bullets(co, ' ');
    }
  }

  function renderWeek(w, weekData) {
    if (!weekData) return;
    if (weekData.title) w.heading(weekData.title, 4);
    if (Array.isArray(weekData.topics) && weekData.topics.length) {
      w.bullets(weekData.topics);
    }
    if (Array.isArray(weekData.projects) && weekData.projects.length) {
      w.textBlock('Projects:', { size: 10, style: 'bold', color: '#374151', after: 1 });
      w.bullets(weekData.projects);
    }
    if (Array.isArray(weekData.deliverables) && weekData.deliverables.length) {
      w.textBlock('Deliverables:', { size: 10, style: 'bold', color: '#374151', after: 1 });
      w.bullets(weekData.deliverables);
    }
    if (weekData.practice) {
      w.textBlock('Practice: ' + weekData.practice, { size: 10, color: '#374151', after: 2 });
    }
    if (weekData.assessment) {
      w.textBlock('Assessment: ' + weekData.assessment, { size: 10, color: '#374151', after: 2 });
    }
  }

  function renderPhase(w, phaseKey, phaseData) {
    w.newPage();
    w.heading(phaseData.title || phaseKey.replace(/_/g, ' '), 1);
    if (phaseData.description) {
      w.textBlock(phaseData.description, { size: 10, after: 3 });
    }
    var monthKeys = Object.keys(phaseData).filter(function (k) { return /^month_/.test(k); });
    for (var m = 0; m < monthKeys.length; m++) {
      var monthData = phaseData[monthKeys[m]] || {};
      w.heading(monthData.title || monthKeys[m].replace(/_/g, ' '), 2);
      if (monthData.weeks) {
        w.textBlock(monthData.weeks, { size: 9, color: '#6b7280', after: 2 });
      }
      var weekKeys = Object.keys(monthData).filter(function (k) { return /^week_/.test(k); });
      for (var k = 0; k < weekKeys.length; k++) {
        renderWeek(w, monthData[weekKeys[k]]);
      }
    }
  }

  function renderFallback(w, payload) {
    var skip = { meta: 1, program_overview: 1 };
    var keys = Object.keys(payload).filter(function (k) { return !skip[k]; });
    for (var i = 0; i < keys.length; i++) {
      var node = payload[keys[i]];
      if (!node || typeof node !== 'object') continue;
      if (!node.title && !node.description && !node.topics && !node.projects) continue;
      w.newPage();
      if (node.title) w.heading(node.title, 1);
      if (node.description) w.textBlock(node.description, { size: 10, after: 3 });
      if (Array.isArray(node.topics)) w.bullets(node.topics);
      if (Array.isArray(node.projects)) {
        w.textBlock('Projects:', { size: 10, style: 'bold', color: '#374151', after: 1 });
        w.bullets(node.projects);
      }
    }
  }

  function drawPageFooters(doc) {
    var total = doc.internal.getNumberOfPages();
    for (var p = 1; p <= total; p++) {
      doc.setPage(p);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor('#9ca3af');
      doc.text('Modern Age Coders · learn.modernagecoders.com', MARGIN.x, PAGE.h - 8);
      doc.text('Page ' + p + ' of ' + total, PAGE.w - MARGIN.x, PAGE.h - 8, { align: 'right' });
    }
  }

  function buildPdf(JsPDFCtor, payload) {
    var doc = new JsPDFCtor({ unit: 'mm', format: 'a4', orientation: 'portrait' });
    renderCover(doc, payload);
    var w = makeWriter(doc);
    w.y = MARGIN.top; // writer starts on cover page; the next renderer calls newPage() first
    renderOverview(w, doc, payload.program_overview);

    var phaseKeys = Object.keys(payload)
      .filter(function (k) { return /^phase_\d+/.test(k); })
      .sort(function (a, b) {
        var na = parseInt((a.match(/\d+/) || ['0'])[0], 10);
        var nb = parseInt((b.match(/\d+/) || ['0'])[0], 10);
        return na - nb;
      });

    if (phaseKeys.length) {
      for (var i = 0; i < phaseKeys.length; i++) {
        renderPhase(w, phaseKeys[i], payload[phaseKeys[i]] || {});
      }
    } else {
      renderFallback(w, payload);
    }

    drawPageFooters(doc);
    return doc;
  }

  /* ---------- UI wiring ---------- */

  function setLoading(btn, on) {
    if (on) {
      btn.classList.add('is-loading');
      btn.disabled = true;
      var label = btn.querySelector('.dl-label');
      if (label) {
        btn.dataset.originalLabel = label.textContent;
        label.textContent = 'Preparing PDF…';
      }
    } else {
      btn.classList.remove('is-loading');
      btn.disabled = false;
      var lbl = btn.querySelector('.dl-label');
      if (lbl && btn.dataset.originalLabel) {
        lbl.textContent = btn.dataset.originalLabel;
      }
    }
  }

  function showError(btn, msg) {
    var existing = btn.parentNode.querySelector('.download-curriculum-error');
    if (existing) existing.remove();
    var el = document.createElement('div');
    el.className = 'download-curriculum-error';
    el.textContent = msg;
    btn.parentNode.appendChild(el);
  }

  function clearError(btn) {
    var existing = btn.parentNode.querySelector('.download-curriculum-error');
    if (existing) existing.remove();
  }

  function handleClick(btn) {
    clearError(btn);
    setLoading(btn, true);
    var payload;
    try {
      payload = readCourseData();
    } catch (e) {
      console.warn('[download-curriculum] ' + e.message);
      setLoading(btn, false);
      showError(btn, 'Download failed — please refresh and try again.');
      return;
    }
    loadJsPDF()
      .then(function (JsPDFCtor) {
        var doc = buildPdf(JsPDFCtor, payload);
        var slug = (payload.meta && payload.meta.slug) || 'course';
        doc.save(slug + '-curriculum.pdf');
      })
      .catch(function (err) {
        console.warn('[download-curriculum] ' + (err && err.message ? err.message : err));
        showError(btn, 'Download failed — please refresh and try again.');
      })
      .then(function () { setLoading(btn, false); });
  }

  function init() {
    var btn = document.getElementById('downloadCurriculumBtn');
    if (!btn) return;
    btn.addEventListener('click', function () { handleClick(btn); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
