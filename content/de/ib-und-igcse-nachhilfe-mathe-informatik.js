'use strict';
// IB- und IGCSE-Nachhilfe in Mathe und Informatik (ag- German-language door, Germany cluster P3 row DE080, hub 'german').
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; writer brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; formal "Sie";
// pages show euro, checkout charges USD. We are not connected with the IBO, Cambridge, the KMK, AGIS or any school; we award
// no qualification and the school course is the one that counts.
// Angle: German-speaking parents whose child attends an international school in Germany (IB or Cambridge) and needs help in
// maths and computer science together. Spine: the three routes (IGCSE, IB MYP, IB Diploma) in one table with their maths
// and computing subjects and what AGIS and the KMK say they are worth in Germany; what the KMK agreement means for the
// subject choice in maths and in Computer Science; what the Cambridge syllabuses say about calculators, exam series and the
// switch to Python from 2029; then one original task where maths and informatics meet (bisection). The English siblings
// (ib-maths, ib-cs, igcse-maths, igcse-cs tutor pages) carry the points formula, the six-subject checker, the accuracy rule
// and the pseudocode task; none of those tables or examples is used here.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/ib-und-igcse-nachhilfe-mathe-informatik/,
// fetched 2 and 3 Nov 2026; quoted strings grepped from the .txt files):
//  - KMK, Vereinbarung über die Anerkennung des IB Diploma (Beschluss 10.03.1986 i. d. F. 15.06.2023, Anlage 1 Stand
//    26.03.2026, kmk-ib-de-2026): "nach einem Besuch von mindestens zwölf aufsteigenden Jahrgangsstufen"; subjects must include
//    "Mathematik (Mathematics: Analysis and Approaches oder Mathematics: Applications and Interpretation)"; footnote 3 (SL from
//    the 2021 exam: "nur ein fachgebundener Hochschulzugang ... für Studienfächer, die nicht dem
//    mathematisch-naturwissenschaftlich-technischen Bereich zuzuordnen sind", exception for schools in Anlagen 1 and 2);
//    "Das sechste verbindliche Fach kann außer den genannten Fächern eines der nachfolgenden" with "Computer Science" in that
//    list; HL rule "muss entweder eine Sprache, Mathematik oder ein naturwissenschaftliches Fach" ("Gilt ab Prüfung 2025");
//    "durchgängig, d. h. zweijährig aufsteigend"; "mindestens mit der IB-Note 4".
//  - AGIS homepage and Wer wir sind (FACTS 247 to 250): "Das an den Schulen angebotene IB Diploma ... ist (mit vorgegebenen
//    Fächerkombinationen) dem deutschen Abitur gleichwertig"; MYP or IGCSE schools give "einen der Mittleren Reife
//    gleichwertigen Abschluss"; "Alle Mitgliedsschulen der AGIS sind autorisierte IB-Schulen"; 65 nations, English.
//  - KMK Eurydice dossier (FACTS 252): IB Diploma agreement dated 10.3.1986 i. d. F. 15.6.2023; MYP agreement 08.12.2011.
//  - Cambridge IGCSE Mathematics 0580 page and 2025 to 2027 syllabus: "One of the papers at each tier is now a dedicated
//    non-calculator paper"; "Use this syllabus for exams in 2025, 2026 and 2027."; "Exams are available in the June and
//    November series."; Core and Extended.
//  - Cambridge IGCSE Computer Science 0478, 2026 to 2028 syllabus: Paper 1 "No calculators are permitted"; "Knowledge of
//    programming language syntax is not examined; in all cases the logic is more important than the syntax."; 2029 to 2031
//    syllabus: "Use this syllabus for exams in 2029, 2030 and 2031."; "write their own programs in Python 3.10 or higher".
//  - Time: Einheitenzeitgesetz; summer time ended 25 October 2026, begins 28 March 2027; India UTC+5:30.
//  - ibo.org: blocked (403, BLOCKED.md); no IB syllabus hours, papers or grade boundaries are stated.
// Our own (scratchpad de/w/GE/py/halbieren.py, python3 -I) prints:
//    Schritt 1: [1.5, 2.0] / Schritt 2: [1.5, 1.75] / Schritt 3: [1.5, 1.625] / Schritte: 10 /
//    Nullstelle zwischen 1.515625 und 1.516602 / vorhergesagt: 10
//  Hand values (ours): f(1.5) = -0.125, f(1.75) = 2.109375, f(1.625) = 0.916015625.
// Lesson family: halve the interval (bisection), and predict the number of steps from the accuracy before running it.

const { DE } = require('../../scripts/nl/lib/market-de');

const PY = [
  'import math',
  '',
  'def f(x):',
  '    return x**3 + x - 5',
  '',
  'links, rechts = 1.0, 2.0          # f(1) = -3, f(2) = 5',
  'schritte = 0',
  'while rechts - links > 0.001:',
  '    mitte = (links + rechts) / 2',
  '    if f(links) * f(mitte) <= 0:',
  '        rechts = mitte',
  '    else:',
  '        links = mitte',
  '    schritte += 1',
  '    if schritte <= 3:',
  '        print(f"Schritt {schritte}: [{links}, {rechts}]")',
  '',
  'print("Schritte:", schritte)',
  'print(f"Nullstelle zwischen {links:.6f} und {rechts:.6f}")',
  'print("vorhergesagt:", math.ceil(math.log2(1 / 0.001)))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'german', label: 'IB- und IGCSE-Nachhilfe' },
  slug: 'ib-und-igcse-nachhilfe-mathe-informatik',
  code: 'iui',
  accent: '#37706D',
  accentRationale: 'IB- und IGCSE-Nachhilfe: a deep teal #37706D, between the blue of an exam board document and the green of a school blazer, distinct from the Informatik petrol and the maths plum and walnut; at least 4.61 on the paper #FBF8F2 and its tints',
  pageType: 'market',
  priceSubject: 'maths',
  market: DE,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Deutschland' }],
  routeLabel: 'IB- und IGCSE-Nachhilfe in Mathe und Informatik',
  title: 'IB- und IGCSE-Nachhilfe in Mathe und Informatik, auf Englisch',
  description: 'IB- und IGCSE-Nachhilfe in Mathe und Informatik für Schüler internationaler Schulen in Deutschland: live auf Englisch, mit KMK-Regeln zur Fächerwahl.',
  ogDescription: 'Nachhilfe für IB und IGCSE in Mathematik und Informatik, live auf Englisch: was IGCSE, MYP und IB Diploma in Deutschland wert sind, worauf es bei der Fächerwahl ankommt und eine Übung, in der Mathe und Informatik zusammenkommen.',
  twitterDescription: 'IB- und IGCSE-Nachhilfe in Mathe und Informatik, live auf Englisch: Abschlüsse, Fächerwahl und eine gemeinsame Übung.',
  pageName: 'IB- und IGCSE-Nachhilfe in Mathe und Informatik',
  webPageDescription: 'Ein Leitfaden für Eltern, deren Kind eine internationale Schule in Deutschland besucht: IGCSE, IB Middle Years Programme und IB Diploma mit ihren Mathe- und Informatikfächern, die Anerkennungsregeln der Kultusministerkonferenz, die Cambridge-Vorgaben zu Taschenrechnern und Python, und eine eigene Übung zum Halbierungsverfahren.',
  courseDescription: 'Live-Online-Nachhilfe auf Englisch für Schülerinnen und Schüler internationaler Schulen in Deutschland: IB Mathematics AA und AI, IB Computer Science, Cambridge IGCSE Mathematics und Computer Science, in der Gruppe oder im Einzelunterricht.',
  crumbs: [{ name: 'Kurse', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'IB- und IGCSE-Nachhilfe',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Deutschland' },
    { href: '#abschluesse', label: 'Abschlüsse' },
    { href: '#faecher', label: 'Fächer' },
    { href: '#uebung', label: 'Übung' },
    { href: '#zeiten', label: 'Zeiten' }
  ],
  eyebrow: 'Deutschland &middot; IB und IGCSE &middot; Mathe und Informatik',
  h1: 'IB- und IGCSE-Nachhilfe in Mathe und Informatik',
  lede: 'An internationalen Schulen in Deutschland lernen Kinder nach englischsprachigen Programmen, meist nach dem International Baccalaureate oder nach Cambridge IGCSE. Für Eltern, die selbst eine deutsche Schule besucht haben, ist das oft fremd: Welcher Mathekurs zählt später für ein Studium in Deutschland, ist Computer Science ein gutes Wahlfach, und was gilt bei Taschenrechnern? Diese Seite beantwortet das aus den Originaldokumenten der Kultusministerkonferenz und von Cambridge. Unsere Nachhilfe dazu ist live, auf Englisch, mit Mentoren aus Indien, also in genau der Sprache, in der Ihr Kind auch unterrichtet und geprüft wird.',
  secondaryCta: { href: '#abschluesse', label: 'Die Abschlüsse im Überblick' },
  wa: 'Hallo Modern Age Coders, unser Kind besucht eine internationale Schule in Deutschland und braucht Nachhilfe in Mathe und Informatik (IB oder IGCSE). Können wir eine kostenlose Probestunde vereinbaren?',
  heroNote: 'Live online seit 2020 &middot; mehr als 10.000 Lernende weltweit &middot; IB und Cambridge, Unterricht auf Englisch',
  spec: [
    ['Für', 'Schülerinnen und Schüler internationaler Schulen'],
    ['Mathe', 'IGCSE 0580, IB Maths AA und AI'],
    ['Informatik', 'IGCSE 0478, IB Computer Science'],
    ['Gruppe', 'Fünfzehn bis zwanzig, oder Einzelunterricht'],
    ['Sprache', 'Englisch, wie an der Schule'],
    ['Probestunde', 'Kostenlos, ohne Karte']
  ],
  capsuleQ: 'Kurz gesagt',
  capsule: 'Modern Age Coders bietet IB- und IGCSE-Nachhilfe in Mathe und Informatik als Live-Online-Unterricht auf Englisch für Kinder und Jugendliche an internationalen Schulen in Deutschland: Cambridge IGCSE Mathematics und Computer Science, IB Maths AA und AI sowie IB Computer Science. Ihr Kind arbeitet in einer Gruppe von fünfzehn bis zwanzig oder allein mit einem festen Mentor, der Tempo und Aussprache anpasst und mit dem Material der Schule arbeitet, von den ersten Programmen bis zur Abschlussprüfung.',

  picks: {
    eyebrow: 'Passende Kurse',
    h2: 'Drei Kurse für internationale Schulen',
    lede: 'Ein Mathekurs für das IB Diploma und zwei Informatikkurse, je einer für das IB und für Cambridge IGCSE.',
    items: [
      { course: 'ib-mathematics-aa-ai-masterclass', code: 'IUI / 01', title: 'IB Maths AA und AI', alt: 'Kursbild IB Mathematics AA und AI', note: 'Für das IB Diploma, Standard und Higher Level, mit Begleitung bei der internen Arbeit. Erklärt wird, was hinter jeder Methode steht, nicht nur der Rechenweg.' },
      { course: 'ib-diploma-computer-science-course', code: 'IUI / 02', title: 'IB Computer Science', alt: 'Kursbild IB Diploma Computer Science', note: 'Für das IB Diploma. Programmieren, Algorithmen und die Theorie dahinter, mit Übungen in dem Stil, den die Schule verwendet.' },
      { course: 'igcse-computer-science-0478-course', code: 'IUI / 03', title: 'IGCSE Computer Science 0478', alt: 'Kursbild Cambridge IGCSE Computer Science 0478', note: 'Für Cambridge IGCSE. Computersysteme, Algorithmen, Pseudocode und Python, der vollständige Lehrplan mit Prüfungsvorbereitung.' }
    ]
  },

  sections: [
    {
      id: 'abschluesse',
      eyebrow: 'Die Abschlüsse',
      h2: 'Was sind IGCSE, MYP und IB Diploma in Deutschland wert?',
      lede: 'Internationale Schulen in Deutschland vergeben keine deutschen Zeugnisse, ihre Abschlüsse werden aber anerkannt, wenn bestimmte Bedingungen erfüllt sind. Die Tabelle fasst zusammen, was die Arbeitsgemeinschaft der Internationalen Schulen (AGIS) und die Kultusministerkonferenz (KMK) dazu schreiben.',
      body: [
        { kind: 'table', numCols: [], caption: 'Drei internationale Abschlüsse, ihre Mathe- und Informatikfächer und ihre Einordnung in Deutschland', head: ['Abschluss', 'Mathematik', 'Informatik', 'Einordnung laut Quelle'], rows: [
          ['Cambridge IGCSE', 'Mathematics 0580, Core oder Extended', 'Computer Science 0478', 'AGIS: Schulen mit IGCSE vergeben einen der Mittleren Reife gleichwertigen Abschluss'],
          ['IB Middle Years Programme (MYP)', 'Mathematik im MYP der Schule', 'je nach Schule', 'AGIS: ebenfalls der Mittleren Reife gleichwertig; KMK-Vereinbarung zum MYP vom 08.12.2011'],
          ['IB Diploma Programme', 'Mathematics: Analysis and Approaches oder Applications and Interpretation', 'Computer Science, nur als sechstes Fach', 'AGIS: mit vorgegebenen Fächerkombinationen dem deutschen Abitur gleichwertig; Bedingungen in der KMK-Vereinbarung']
        ] },
        { kind: 'source', html: 'Quellen: AGIS, Startseite und "Wer wir sind" (gelesen am 2. November 2026); KMK, Vereinbarung über die Anerkennung des International Baccalaureate Diploma, Beschluss vom 10.03.1986 in der Fassung vom 15.06.2023, Anlage 1 Stand 26.03.2026 (gelesen am 3. November 2026); KMK, Eurydice-Dossier zum Bildungswesen. Ob die Bedingungen im Einzelfall erfüllt sind, entscheidet die zuständige Stelle, nicht wir; wir geben keine Rechtsauskunft.' },
        { kind: 'p', mt: true, html: 'Alle AGIS-Mitgliedsschulen sind nach eigener Angabe autorisierte IB-Schulen und bieten mindestens eines der vier IB-Programme an. Einige bieten zusätzlich Cambridge-Abschlüsse wie IGCSE an. Welches Programm Ihr Kind in welcher Klasse durchläuft, steht im Profil der Schule; für die Nachhilfe ist das die wichtigste Information, denn IGCSE-Mathematik und IB-Mathematik bauen unterschiedlich aufeinander auf.' }
      ]
    },
    {
      id: 'faecher',
      eyebrow: 'Fächerwahl',
      h2: 'Welche Mathe- und Informatikfächer braucht man im IB für ein Studium in Deutschland?',
      lede: 'Die KMK-Vereinbarung legt fest, welche Fächer unter den sechs Prüfungsfächern des IB Diploma sein müssen. Für Mathematik und Informatik stehen darin drei Sätze, die Eltern kennen sollten, bevor die Fächerwahl für die letzten zwei Schuljahre feststeht.',
      body: [
        { kind: 'ol', items: [
          '<strong>Mathematik ist Pflicht.</strong> Unter den sechs Fächern muss Mathematik sein, und zwar entweder Mathematics: Analysis and Approaches oder Mathematics: Applications and Interpretation. Beide Kurse zählen.',
          '<strong>Das Niveau zählt für das Studienfach.</strong> Wer seit dem Prüfungstermin 2021 Mathematik nur auf Standard Level (SL) nachweist, erhält laut Fußnote 3 der Vereinbarung nur einen fachgebundenen Hochschulzugang für Studienfächer außerhalb des mathematisch-naturwissenschaftlich-technischen Bereichs. Ausgenommen sind Absolventinnen und Absolventen der Schulen, die in den Anlagen 1 und 2 der Vereinbarung aufgeführt sind. Wer Informatik, Ingenieurwesen oder Physik studieren möchte, sollte diese Fußnote vor der Kurswahl mit der Schule besprechen.',
          '<strong>Computer Science ist ein sechstes Fach.</strong> Die Vereinbarung nennt Computer Science in der Liste der Fächer, die das sechste verbindliche Fach sein können, nicht als naturwissenschaftliches Fach. Biologie, Chemie oder Physik muss also zusätzlich belegt werden.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Weitere Bedingungen',
          left: [
            'Von den drei Fächern auf Higher Level muss eines eine Sprache, Mathematik oder ein naturwissenschaftliches Fach sein; diese Regel gilt laut Vereinbarung ab der Prüfung 2025.',
            'Alle Fächer müssen durchgängig, also zwei Jahre aufsteigend, belegt sein, und jedes der sechs Fächer braucht mindestens die IB-Note 4. Dazu kommen mindestens zwölf aufsteigende Schuljahre mit Vollzeitunterricht.'
          ],
          rightH3: 'Was das für die Nachhilfe heißt',
          right: [
            'Für viele Familien ist die Frage nicht, ob ihr Kind Mathematik besteht, sondern ob es Higher Level schafft. Dafür muss die Algebra aus der IGCSE- oder MYP-Zeit sitzen, bevor das Diploma beginnt.',
            'In Computer Science hilft frühes Programmieren. Wer schon vor dem Diploma Python oder Java sicher schreibt, hat im Kurs Zeit für das Denken in Algorithmen statt für die Syntax.'
          ] },
        { kind: 'p', mt: true, html: 'Die genaue Fächerkombination und die Frage, ob eine Schule in der Anlage der Vereinbarung steht, klären Sie bitte mit der Schule und der Stelle, die später über die Zulassung entscheidet. Wir unterrichten die Fächer; die Anerkennung beurteilen andere.' }
      ]
    },
    {
      id: 'cambridge',
      eyebrow: 'Cambridge IGCSE',
      h2: 'Was müssen IGCSE-Schüler in Mathematik und Computer Science wissen?',
      lede: 'Für IGCSE gelten die Lehrpläne von Cambridge International. Drei Punkte daraus verändern, wie wir üben.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Mathe ohne Rechner', p: 'In Mathematics 0580 ist laut Cambridge auf jedem Niveau, Core und Extended, eine der Prüfungen jetzt eine reine Prüfung ohne Taschenrechner. Bruchrechnung und Umformen von Hand gehören deshalb in jede Stunde.' },
          { h3: 'Logik vor Syntax', p: 'Im Lehrplan 0478 für 2026 bis 2028 heißt es, Kenntnisse der Syntax einer Programmiersprache würden nicht geprüft; die Logik sei wichtiger als die Syntax. In Paper 1 sind keine Taschenrechner erlaubt.' },
          { h3: 'Ab 2029 Python', p: 'Der Lehrplan 0478 für die Prüfungen 2029, 2030 und 2031 sieht vor, dass Lernende eigene Programme in Python 3.10 oder höher schreiben. Wer heute in Klasse 7 oder 8 ist, sollte gleich mit Python anfangen.' }
        ] },
        { kind: 'p', mt: true, html: 'Prüfungen in Mathematics 0580 gibt es laut Lehrplan in den Serien im Juni und im November, der aktuelle Lehrplan gilt für die Prüfungen 2025, 2026 und 2027. Die Schule entscheidet, in welcher Serie Ihr Kind antritt und ob es Core oder Extended schreibt. Unsere Nachhilfe richtet sich nach dieser Entscheidung, nicht umgekehrt.' },
        { kind: 'p', html: 'Für Familien, die später an eine deutsche Schule wechseln wollen, ist IGCSE ein guter Zwischenschritt: AGIS ordnet IGCSE an ihren Mitgliedsschulen als der Mittleren Reife gleichwertig ein. Mathematisch fehlen nach einem Wechsel in die deutsche Oberstufe oft die Vektoren in drei Dimensionen und die ausführliche Stochastik, das holen wir gezielt nach.' }
      ]
    },
    {
      id: 'uebung',
      tint: 'tint',
      eyebrow: 'Mathe trifft Informatik',
      h2: 'Wie lösen Mathematik und Informatik dieselbe Aufgabe?',
      lede: 'Viele Gleichungen lassen sich nicht mit einer Formel lösen, aber mit einem Algorithmus. Das Halbierungsverfahren ist dafür das einfachste Beispiel: In IB Mathematics und IGCSE Mathematics ist es ein Werkzeug, in Computer Science ein Algorithmus mit Schleife und Abbruchbedingung. Die Aufgabe ist unsere eigene.',
      body: [
        { kind: 'p', html: '<strong>Aufgabe (unsere).</strong> Die Gleichung x&sup3; + x &minus; 5 = 0 hat genau eine reelle Lösung. Finden Sie ein Intervall der Breite höchstens 0,001, in dem sie liegt, und sagen Sie <em>vor</em> dem Rechnen voraus, wie viele Halbierungsschritte von [1, 2] aus nötig sind.' },
        { kind: 'p', html: '<strong>Mathematischer Teil.</strong> f(x) = x&sup3; + x &minus; 5 wächst überall, weil f\'(x) = 3x&sup2; + 1 &gt; 0, also gibt es nur eine Nullstelle. Wegen f(1) = &minus;3 &lt; 0 und f(2) = 5 &gt; 0 liegt sie zwischen 1 und 2. Jeder Schritt halbiert die Breite: nach n Schritten ist sie 1/2<sup>n</sup>. Gesucht ist das kleinste n mit 1/2<sup>n</sup> &le; 0,001, also 2<sup>n</sup> &ge; 1000. Weil 2<sup>9</sup> = 512 und 2<sup>10</sup> = 1024, sind es 10 Schritte.' },
        { kind: 'table', mt: true, numCols: [0, 1, 2], caption: 'Die ersten drei Schritte von Hand (unsere Werte)', head: ['Schritt', 'Mitte', 'f(Mitte)', 'Neues Intervall'], rows: [
          ['1', '1,5', '&minus;0,125', '[1,5; 2]'],
          ['2', '1,75', '2,109375', '[1,5; 1,75]'],
          ['3', '1,625', '0,916015625', '[1,5; 1,625]']
        ] },
        { kind: 'code', label: 'Informatischer Teil: dieselbe Idee als Schleife', lang: 'Python', code: PY, note: 'Ausgabe, mit <code>python3 -I</code> ausgeführt: <code>Schritt 1: [1.5, 2.0]</code>, <code>Schritt 2: [1.5, 1.75]</code>, <code>Schritt 3: [1.5, 1.625]</code>, <code>Schritte: 10</code>, <code>Nullstelle zwischen 1.515625 und 1.516602</code>, <code>vorhergesagt: 10</code>.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Erst vorhersagen.</strong> Die Zahl 10 stand fest, bevor das Programm lief. Stimmt die Vorhersage mit der Ausgabe überein, ist das ein starkes Zeichen, dass Mathematik und Programm zusammenpassen.',
          '<strong>Die Abbruchbedingung prüfen.</strong> Die Schleife läuft, solange die Breite größer als 0,001 ist. Wer stattdessen eine feste Zahl von Durchläufen einbaut, versteht nicht, warum es genau zehn sind.',
          '<strong>Das Vorzeichen entscheidet.</strong> Ist f(links) &middot; f(Mitte) &le; 0, liegt die Nullstelle in der linken Hälfte. In Prüfungen wird genau diese Zeile gern als Lücke zum Ergänzen gestellt.'
        ] },
        { kind: 'p', mt: true, html: 'Die Nullstelle liegt also bei etwa 1,516. Für IB-Lernende ist das eine Brücke zur internen mathematischen Arbeit, für IGCSE-Lernende in Computer Science eine typische Aufgabe zum Verfolgen einer Schleife. Wir nutzen solche Aufgaben, weil sie zeigen, dass Mathe und Informatik dieselbe Denkweise trainieren.' }
      ]
    },
    {
      id: 'englisch',
      eyebrow: 'Unterricht auf Englisch',
      h2: 'Warum Nachhilfe auf Englisch für internationale Schulen passt',
      lede: 'Ihr Kind wird auf Englisch unterrichtet und geprüft. Nachhilfe auf Deutsch würde jede Erklärung erst übersetzen müssen; wir arbeiten gleich in der Sprache des Klassenzimmers.',
      body: [
        { kind: 'p', html: 'AGIS beschreibt ihre Mitgliedsschulen als Schulen, die Kinder aus bis zu 65 Nationen zusammenführen und Englisch als gemeinsame Unterrichtssprache nutzen. Für die Nachhilfe heißt das: Die Fachbegriffe aus den Lehrplänen, etwa "show that", "hence" oder "trace table", benutzen wir genau so, wie sie in der Prüfung stehen. Eltern, die selbst lieber Deutsch sprechen, erhalten die Rückmeldungen auf Wunsch so einfach formuliert, dass ein Übersetzungsprogramm sie zuverlässig überträgt.' },
        { kind: 'p', html: 'Die Mentoren arbeiten von Indien aus und unterrichten live per Video. Sie sprechen ruhig und deutlich, stellen sich auf den Akzent Ihres Kindes ein, ob es nun mit Deutsch, Englisch oder einer dritten Sprache aufgewachsen ist, und wiederholen schwierige Stellen, bis sie verstanden sind.' }
      ]
    },
    {
      id: 'zeiten',
      eyebrow: 'Unterrichtszeiten',
      h2: 'Wann findet die Nachhilfe statt?',
      lede: 'Internationale Schulen haben oft lange Schultage. Deshalb liegen viele Stunden am späten Nachmittag oder am Wochenende. Einige Beispiele mit der Uhrzeit des Mentors:',
      body: [
        { kind: 'table', numCols: [], caption: 'Beispieltermine in deutscher Zeit, daneben die Zeit in Indien', head: ['Deutsche Zeit', 'Indien bis 27. März 2027', 'Indien ab 28. März 2027'], rows: [
          ['13:15', '17:45', '16:45'],
          ['15:45', '20:15', '19:15'],
          ['Samstag 12:00', '16:30', '15:30'],
          ['Sonntag 14:00', '18:30', '17:30']
        ] },
        { kind: 'source', html: 'Deutschland: MEZ (UTC+1) im Winter, MESZ (UTC+2) im Sommer, nach dem Einheiten- und Zeitgesetz; die Sommerzeit endete am 25. Oktober 2026 und beginnt am 28. März 2027. Indien: UTC+5:30 ohne Sommerzeit, also viereinhalb Stunden voraus im Winter und dreieinhalb im Sommer. Die Zeiten sind Beispiele und keine festen Kurstermine.' },
        { kind: 'p', mt: true, html: 'Vor den Prüfungen im Mai und im November vereinbaren viele Familien zusätzliche Einzelstunden. Bei der Buchung sehen Sie jede Uhrzeit in Ihrer Zeitzone.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Fortschritt',
    h2: 'Woran Sie erkennen, wo Ihr Kind steht',
    lede: 'Vier Stufen, die für Mathe und Informatik gleichermaßen gelten. Die Einteilung ist unsere eigene.',
    table: { caption: 'Vier Stufen in Mathe und Informatik (unsere)', head: ['Stufe', 'Mathematik', 'Informatik'], rows: [
      ['1. Nachmachen', 'ein vorgerechnetes Beispiel mit anderen Zahlen lösen', 'ein Programm abtippen und starten'],
      ['2. Vorhersagen', 'sagen, was ein Rechenschritt bewirkt', 'sagen, was ein Programm ausgibt'],
      ['3. Begründen', 'einen Lösungsweg mit "show that" sauber aufschreiben', 'eine Schleife mit einer Trace Table belegen'],
      ['4. Übertragen', 'eine Methode auf eine neue Aufgabe anwenden', 'eine mathematische Idee als Algorithmus umsetzen']
    ] },
    left: { h3: 'Für Eltern', ps: [
      'Nach jedem Monat erhalten Sie eine kurze Einschätzung: auf welcher Stufe Ihr Kind in welchem Fach steht und was als Nächstes geübt wird.',
      'Prüfungsnoten versprechen wir nicht. Die Noten vergeben die Schule und die Prüfungsorganisation.'
    ] },
    right: { h3: 'Für Schülerinnen und Schüler', ps: [
      'Sagen Sie bei jeder Aufgabe zuerst voraus, was herauskommt, ob Zahl oder Programmausgabe.',
      'Wenn ein Ergebnis nicht zur Vorhersage passt, ist das kein Fehler, sondern der spannendste Moment der Stunde.'
    ] }
  },

  catalogue: {
    eyebrow: 'Weitere Kurse',
    h2: 'Neun weitere Kurse für internationale Schulen',
    lede: 'Alle live auf Englisch, mit einem Mentor, der Ihr Kind kennt, in einer Gruppe oder einzeln.',
    bands: [
      { num: 'I', h3: 'Cambridge und britische Abschlüsse', sub: '14 bis 19 Jahre', courses: [
        { code: 'IUI / CAM / 01', slug: 'igcse-mathematics-mastery', title: 'IGCSE Mathematics', blurb: 'Core, Extended und Additional Mathematics.' },
        { code: 'IUI / CAM / 02', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level Maths', blurb: 'Pure, Mechanics und Statistics nach der IGCSE.' },
        { code: 'IUI / CAM / 03', slug: 'cambridge-a-level-computer-science-9618-course', title: 'A level Computer Science 9618', blurb: 'Der nächste Schritt nach IGCSE 0478.' }
      ] },
      { num: 'II', h3: 'Programmieren als Grundlage', sub: '11 bis 18 Jahre', courses: [
        { code: 'IUI / CODE / 01', slug: 'python-complete-masterclass-teens', title: 'Python für Jugendliche', blurb: 'Die Sprache, die IGCSE ab 2029 verlangt.' },
        { code: 'IUI / CODE / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithmen und Datenstrukturen', blurb: 'Suchen, Sortieren und Denken in Schritten.' },
        { code: 'IUI / CODE / 03', slug: 'maths-through-coding', title: 'Mathematik mit Python', blurb: 'Mathe und Code verbinden, 10 bis 15.' }
      ] },
      { num: 'III', h3: 'Andere Wege', sub: '15 bis 19 Jahre', courses: [
        { code: 'IUI / WEG / 01', slug: 'ap-computer-science-a-java-exam-prep-course', title: 'AP Computer Science A', blurb: 'Für Schulen mit amerikanischem Programm.' },
        { code: 'IUI / WEG / 02', slug: 'abitur-mathematics-course-in-english', title: 'Abitur Mathematik in English', blurb: 'Für den Wechsel an eine deutsche Oberstufe.' },
        { code: 'IUI / WEG / 03', slug: 'statistics-probability-maths-course', title: 'Statistik und Wahrscheinlichkeit', blurb: 'Für IB Maths AI und Statistikthemen.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Ablauf',
    h2: 'So läuft die Nachhilfe ab',
    lede: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche.',
    slots: [
      { time: 'Nach der Schule', l: 'Später Nachmittag, auch nach langen Schultagen.' },
      { time: 'Am Wochenende', l: 'Vormittags oder mittags, mit Zeit für längere Aufgaben.' },
      { time: 'Vor Prüfungen', l: 'Zusätzliche Einzelstunden vor den Serien im Mai und November.' }
    ],
    cells: [
      { h3: 'Ein fester Mentor', p: 'Kennt das Programm der Schule und den Stand Ihres Kindes.' },
      { h3: 'Beide Fächer', p: 'Mathe und Informatik bei Bedarf mit derselben Person.' },
      { h3: 'Schulmaterial', p: 'Wir arbeiten mit den Aufgaben und Unterlagen der Schule.' },
      { h3: 'Prüfungssprache', p: 'Operatoren und Fachwörter so, wie sie in der Prüfung stehen.' },
      { h3: 'Rückmeldung', p: 'Monatliche Einschätzung für die Eltern.' },
      { h3: 'Gruppe oder einzeln', p: 'Fünfzehn bis zwanzig Jugendliche oder Einzelunterricht.' }
    ]
  },

  projectsH2: 'Projekte unserer Lernenden',
  projectsLede: 'Aus Informatikunterricht werden oft eigene Projekte. Einige davon zeigen wir unten, viele weitere auf <a class="ag-inline-link" href="/student-labs">Student labs</a> (auf Englisch).',
  reviewsLede: 'Google-Bewertungen von Familien, so wie sie auf Englisch geschrieben wurden.',

  fees: {
    h2: 'Preise für IB- und IGCSE-Nachhilfe',
    lede: 'Die Gebühr gilt pro Monat und umfasst acht Live-Stunden. Wir zeigen sie in Euro, berechnet mit dem Referenzkurs der Europäischen Zentralbank. Belastet wird Ihre Karte oder Ihr Konto in US-Dollar; die Umrechnung macht Ihre Bank, daher weicht der Betrag auf der Abrechnung gelegentlich um Kleinigkeiten ab.',
    free: ['Kostenlose Probestunde', 'Einschätzung an Aufgaben der Schule', 'Keine Kartenangabe nötig'],
    group: ['Fünfzehn bis zwanzig Lernende aus ähnlichen Programmen', 'Ein fester Mentor', 'Zwei Stunden pro Woche', 'Monatlich, jederzeit beendbar'],
    one: ['Ihr Kind allein mit dem Mentor', 'IB oder IGCSE, Mathe oder Informatik nach Bedarf', 'Termine nach Wunsch']
  },

  faq: {
    eyebrow: 'Häufige Fragen',
    h2: 'IB- und IGCSE-Nachhilfe: häufige Fragen',
    items: [
      { q: 'Findet der Unterricht auf Deutsch statt?', a: 'Nein, nur auf Englisch, und gerade das ist für Kinder an internationalen Schulen ein Vorteil: Sie lernen in derselben Sprache, in der sie unterrichtet und geprüft werden. Nebenbei verbessern sie ihr Englisch weiter, was für Mathe und Informatik im Studium ohnehin gebraucht wird.' },
      { q: 'Ist das IB Diploma in Deutschland so viel wert wie das Abitur?', a: 'Laut AGIS ist das IB Diploma mit vorgegebenen Fächerkombinationen dem deutschen Abitur gleichwertig. Die Bedingungen stehen in der Vereinbarung der Kultusministerkonferenz vom 10.03.1986 in der Fassung vom 15.06.2023. Ob sie im Einzelfall erfüllt sind, entscheidet die zuständige Stelle.' },
      { q: 'Reicht IB Maths auf Standard Level für ein Studium in Deutschland?', a: 'Für viele Fächer ja, für mathematisch-naturwissenschaftlich-technische Studiengänge nicht ohne Weiteres. Laut Fußnote 3 der KMK-Vereinbarung gibt Mathematik auf Standard Level seit dem Prüfungstermin 2021 nur einen fachgebundenen Zugang außerhalb dieses Bereichs, außer für Schulen in den Anlagen der Vereinbarung.' },
      { q: 'Zählt IB Computer Science als Naturwissenschaft?', a: 'Nein. Die KMK-Vereinbarung nennt Computer Science unter den Fächern, die das sechste Fach sein können. Ein naturwissenschaftliches Fach wie Biology, Chemistry oder Physics muss zusätzlich unter den sechs Fächern sein.' },
      { q: 'Ist IGCSE gleichwertig mit der Mittleren Reife?', a: 'AGIS schreibt, dass ihre Mitgliedsschulen mit MYP oder IGCSE einen der Mittleren Reife gleichwertigen Abschluss gewährleisten. Für Schulen außerhalb der AGIS fragen Sie bitte die Schule selbst.' },
      { q: 'Welche Programmiersprache braucht IGCSE Computer Science?', a: 'Im Lehrplan 0478 für 2026 bis 2028 wird die Syntax einer Programmiersprache nicht geprüft, die Logik zählt mehr. Für die Prüfungen 2029 bis 2031 sieht Cambridge Python 3.10 oder höher vor. Wir unterrichten deshalb Pseudocode und Python.' },
      { q: 'Darf man in IGCSE Mathematics einen Taschenrechner benutzen?', a: 'In einem Teil der Prüfungen ja. Cambridge hat die Mathematics 0580 so geändert, dass auf jedem Niveau eine der Prüfungen ganz ohne Taschenrechner geschrieben wird. Rechnen von Hand üben wir deshalb in jeder Stunde mit.' },
      { q: 'Passen die Stunden neben einen langen Schultag?', a: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche. 15:45 Uhr in Deutschland ist bis zum 27. März 2027 20:15 Uhr in Indien.' },
      { q: 'Kann mein Kind Mathe und Informatik beim selben Mentor lernen?', a: 'Auf Wunsch ja, sofern ein passender Mentor für beide Fächer frei ist; das klären wir in der Probestunde. Es hat einen Vorteil, den unsere Übung zum Halbierungsverfahren zeigt: Der Mentor kann eine mathematische Idee direkt als Programm umsetzen lassen und umgekehrt.' },
      { q: 'Was kostet die Nachhilfe, und in welcher Währung wird bezahlt?', a: 'Sie sehen die Monatsgebühr hier in Euro; zugrunde liegt der Kurs, den die Europäische Zentralbank als Referenz veröffentlicht. Die Abbuchung erfolgt in US-Dollar, den Wechsel in Euro erledigt Ihre Bank. Die Probestunde ist kostenlos und ohne Karte.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Weiterlesen',
    h2: 'Mehr für Familien an internationalen Schulen',
    lede: 'Diese Seiten sind auf Englisch und gehen einzelnen Fächern genauer nach.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Unser gesamtes Angebot in Deutschland.' },
      { href: '/coding-for-international-school-students-germany', label: 'International school students', p: 'Programmieren für Schülerinnen und Schüler internationaler Schulen.' },
      { href: '/ib-computer-science-tutor-germany', label: 'IB Computer Science tutor', p: 'IB Computer Science und die Fächerregeln im Detail.' },
      { href: '/igcse-computer-science-tutor-germany', label: 'IGCSE Computer Science tutor', p: 'Cambridge 0478 und der Wechsel zu Python.' },
      { href: '/abitur-vs-ib-vs-a-levels-maths', label: 'Abitur vs IB vs A levels', p: 'Die drei Mathe-Abschlüsse nebeneinander.' },
      { href: '/ap-computer-science-tutor-germany', label: 'AP Computer Science tutor', p: 'Für Schulen mit amerikanischem Programm.' }
    ]
  },

  start: {
    h2: 'Kostenlose Probestunde anfragen',
    lede: 'Zur ersten Stunde bringt Ihr Kind eine aktuelle Aufgabe aus Mathe oder Informatik mit. Der Mentor bearbeitet sie gemeinsam mit ihm, sieht, wo es hängt, und schlägt dann den passenden Kurs vor.',
    readFirst: 'Vorab: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> beschreibt unseren Unterricht, <a class="ag-inline-link" href="/courses">All courses</a> zeigt alle Lehrpläne (beide auf Englisch).',
    note: 'Jede Stunde ist live, auf Englisch, mit einem Mentor in Indien. Eine Verbindung zur IB-Organisation, zu Cambridge, zur KMK oder zu einer Schule besteht nicht. Schneller als per Formular geht es über WhatsApp.',
    formNote: 'Kostenlos, ohne Karte, ohne Bindung.'
  },

  footer: {
    cols: [
      { h4: 'IB und IGCSE', links: [
        { href: '/courses/ib-mathematics-aa-ai-masterclass', label: 'IB Maths AA und AI' },
        { href: '/courses/ib-diploma-computer-science-course', label: 'IB Computer Science' },
        { href: '/courses/igcse-computer-science-0478-course', label: 'IGCSE Computer Science' },
        { href: '/courses', label: 'Alle Kurse' }
      ] },
      { h4: 'Deutschland', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-for-international-school-students-germany', label: 'Internationale Schulen' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/student-labs', label: 'Projekte' }
      ] }
    ],
    bottomRight: 'Halbieren, bis es passt'
  },

  personalityCss: `
.ag-root.ag-iui .ag-hero h1 { letter-spacing: -0.016em; }
.ag-root.ag-iui .ag-capsule { border-left-width: 4px; }
.ag-root.ag-iui .ag-section-head h2 { max-width: 36ch; }
.ag-root.ag-iui .ag-table caption { text-align: left; }
.ag-root.ag-iui .ag-table td { hyphens: auto; }
`,

  dossier: {
    curriculumAuthority: 'KMK Vereinbarung über die Anerkennung des IB Diploma (10.03.1986 i. d. F. 15.06.2023, Anlage 1 Stand 26.03.2026); KMK Eurydice dossier; AGIS homepage and Wer wir sind; Cambridge IGCSE Mathematics 0580 page and syllabus 2025 to 2027; Cambridge IGCSE Computer Science 0478 syllabuses 2026 to 2028 and 2029 to 2031; read 2 and 3 November 2026. Example our own.',
    localProject: 'An original bisection task joining maths and informatics: x³ + x − 5 = 0 on [1, 2], the number of halvings predicted as 10 from 2^10 = 1024 before running, the first three steps traced by hand (f(1.5) = −0.125, f(1.75) = 2.109375, f(1.625) = 0.916015625) and a Python loop that confirms 10 steps and the interval 1.515625 to 1.516602. Lesson family: halve the interval, and predict the number of steps from the accuracy before running it.',
    requiredMentions: ['x&sup3; + x &minus; 5 = 0', 'Nullstelle zwischen 1.515625 und 1.516602', 'vorhergesagt: 10', '0,916015625', 'Computer Science, nur als sechstes Fach', 'fachgebundenen Hochschulzugang für Studienfächer außerhalb', 'Python 3.10 oder höher', 'Halbieren, bis es passt'],
    sources: [
      { claim: 'IB Diploma recognition: maths AA or AI required; SL footnote 3; Computer Science in the sixth-subject list; HL rule from 2025; grade 4; twelve years.', url: 'https://www.kmk.org/zab/fileadmin/Dateien/pdf/ZAB/Hochschulzugang_Beschluesse_der_KMK/aktuell/283_Vereinb_Anerkenn_Int_Baccalaureate_Diploma-2023-06-15_Liste1__2026-03-26_Liste2-2026-05-22.pdf' },
      { claim: 'AGIS: IB Diploma equivalent to the Abitur with prescribed combinations; MYP or IGCSE equivalent to Mittlere Reife; English as common language.', url: 'https://www.agis-schools.org/' },
      { claim: 'All AGIS members authorised IB schools.', url: 'https://www.agis-schools.org/wer-wir-sind' },
      { claim: 'IGCSE 0580: one non-calculator paper at each tier; syllabus for 2025 to 2027; June and November series.', url: 'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-mathematics-0580/' },
      { claim: 'IGCSE 0478: syntax not examined, no calculators in Paper 1 (2026 to 2028); Python 3.10 or higher from 2029.', url: 'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-computer-science-0478/' }
    ],
    rejectedClaims: [
      'German-language teaching: we teach in English only, and the page says so.',
      'Any statement that a given pupil or school meets the KMK conditions: refused; the competent body decides.',
      'IB syllabus hours, paper structures or grade boundaries: ibo.org blocked (403), so nothing stated.',
      'Naming any school as a source of our students: refused; schools are not named at all.',
      'Grade promises: refused.'
    ]
  }
};
