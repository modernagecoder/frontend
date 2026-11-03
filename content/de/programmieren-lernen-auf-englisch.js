'use strict';
// Programmieren lernen auf Englisch (ag- German-language door, Germany cluster P3 row DE079), written 2026-11-03.
// Owner 2026-11-02: classes are live, in English only, with mentors (based in India) who match the learner's pace and
// accent; the capsule says "auf Englisch". Formal "Sie" throughout. Pages show euro; checkout charges USD.
// Spine: the German page for "why learn programming in English": our English-only teaching as a benefit. Where English
// meets a learner in programming (above all in error messages), how much English German school expects by each
// Abschluss (KMK Bildungsstandards, with the line on accents), and one original lesson: the one-sentence English
// docstring that explains a silent bug (list.sort returns None). Deliberately not the keyword/identifier angle of learn-coding-in-english-germany.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/programmieren-lernen-auf-englisch/,
// fetched 3 Nov 2026):
//  - KMK, Bildungsstandards für die erste Fremdsprache (Englisch/Französisch) für den Ersten Schulabschluss und den
//    Mittleren Schulabschluss (i.d.F. vom 22.06.2023), PDF: "Bis zum Ersten Schulabschluss erreichen die Schülerinnen und
//    Schüler im Wesentlichen das Niveau A2 des Gemeinsamen europäischen Referenzrahmens"; MSA "das Niveau B1".
//  - KMK, Bildungsstandards für die fortgeführte Fremdsprache (Englisch/Französisch) für die Allgemeine Hochschulreife
//    (18.10.2012), PDF: "Am Ende der gymnasialen Oberstufe wird ... das Niveau B2 des GeR (Englisch: in rezeptiven
//    Teilkompetenzen auch das Niveau C1) erwartet. Sprachlicher Orientierungspunkt sind Standardsprache(n) sowie Register,
//    Varietäten und Akzente, deren Färbung ein Verstehen nicht generell behindert."
//  - python/docsbuild-scripts config.toml: [languages.de] name = "German", translated_name = "Deutsch";
//    docs.python.org/de/3/tutorial: "Das Python-Tutorial". PEP 545 (Python Documentation Translations): "Created :
//    04-Mar-2017".
//  - FACTS.md 30 (IQB pools for English since 2017), 113 (VERA-8 includes English), 64 (NRW ZP10 in German, maths and
//    English), 213 (BWKI projects in German or English), 153 (IOI 2027, 12 to 19 September 2027, Potsdam), 159 (about 400
//    contestants from 90 to 100 countries).
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
// Our own: sortieren.py (scratchpad de/w/GC/pen, python3 -I 3.14.8, same output under LANG=de_DE.UTF-8): "Versuch 1:
// None"; "Sort the list in ascending order and return None."; "Return a new list containing all items from the iterable
// in ascending order."; "Versuch 2: [1, 2, 2, 3, 4] | Original: [3, 1, 2, 2, 4]". Error messages stay English under a
// German locale: checked with noten.py, which prints "TypeError: unsupported operand type(s) for +: 'int' and 'str'"
// under LANG=de_DE.UTF-8 (not shown on the page). Lesson family changed from tracebacks (taken by the sibling
// python-lernen-fuer-schueler) to: read what a function returns in its English documentation before you use it.
// Lesson family: read the docs first: what does the function return? (in-place methods return None).

const { DE } = require('../../scripts/nl/lib/market-de');

const SORT = [
  'noten = [3, 1, 2, 2, 4]',
  '',
  '# Versuch 1: sortieren und das Ergebnis speichern',
  'sortiert = noten.sort()',
  "print('Versuch 1:', sortiert)",
  '',
  '# Was sagt die Dokumentation?',
  'print(list.sort.__doc__.splitlines()[0])',
  'print(sorted.__doc__.splitlines()[0])',
  '',
  '# Versuch 2: sorted() gibt eine neue Liste zurück',
  'noten = [3, 1, 2, 2, 4]',
  'sortiert = sorted(noten)',
  "print('Versuch 2:', sortiert, '| Original:', noten)"
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'german', label: 'Programmieren lernen auf Englisch' },
  slug: 'programmieren-lernen-auf-englisch',
  code: 'pen',
  accent: '#396106',
  accentRationale: 'Programmieren lernen auf Englisch: a deep moss green #396106, the colour of a passing test run, far from the plum, ink blue and brick red of the other German doors; contrast 5.90 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Deutschland' }],
  routeLabel: 'Programmieren lernen auf Englisch',
  title: 'Programmieren lernen auf Englisch: live online, mit Mentor',
  description: 'Programmieren lernen auf Englisch: Live-Kurse in Python und Java ab 8 Jahren. Warum Englisch hilft, wie viel Schulenglisch reicht, wie man Dokumentation liest.',
  ogDescription: 'Warum Programmieren auf Englisch leichter wird, als viele denken: wie viel Englisch die Schule bis MSA und Abitur erwartet, wo Englisch beim Coden wirklich zählt, und wie ein englischer Satz aus der Python-Dokumentation einen Fehler erklärt.',
  twitterDescription: 'Programmieren lernen auf Englisch, live online: Dokumentation verstehen, Schulenglisch nutzen, mit festem Mentor.',
  pageName: 'Programmieren lernen auf Englisch',
  webPageDescription: 'Ein Leitfaden für Schülerinnen und Schüler, Eltern und Erwachsene in Deutschland, die Programmieren auf Englisch lernen möchten: wo Englisch beim Programmieren gebraucht wird, welches Englischniveau die KMK-Bildungsstandards bis zum Ersten Schulabschluss, zum MSA und zum Abitur vorsehen, und wie man die eingebaute englische Dokumentation von Python liest, um einen stillen Fehler zu finden.',
  courseDescription: 'Live-Online-Programmierkurse in ganz Deutschland, ausschließlich auf Englisch: Scratch, Python, Java und Webentwicklung für Kinder ab 8, Jugendliche und Erwachsene, mit Mentoren aus Indien, die Tempo und Aussprache anpassen, in der Gruppe oder im Einzelunterricht.',
  crumbs: [{ name: 'Kurse', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Programmieren auf Englisch',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Deutschland' },
    { href: '#wo', label: 'Wo Englisch?' },
    { href: '#niveau', label: 'Niveau' },
    { href: '#doku', label: 'Doku' },
    { href: '#zeiten', label: 'Zeiten' }
  ],
  eyebrow: 'Deutschland &middot; Programmieren &middot; ab 8 Jahren',
  h1: 'Programmieren lernen auf Englisch: zwei Fähigkeiten, ein Kurs',
  lede: 'Bei uns lernen Sie oder Ihr Kind Programmieren ausschließlich auf Englisch. Das klingt für manche Familien zuerst nach einer Hürde. Tatsächlich spricht der Computer selbst längst Englisch: Jede Fehlermeldung in Python oder Java kommt auf Englisch, auch auf einem Rechner mit deutscher Spracheinstellung. Diese Seite zeigt, wo Englisch beim Programmieren gebraucht wird, wie viel Schulenglisch dafür reicht und warum ein einziger englischer Satz aus der Dokumentation eine halbe Stunde Fehlersuche spart. Unterricht auf Englisch, mit Mentoren aus Indien.',
  secondaryCta: { href: '#doku', label: 'Die Dokumentation lesen' },
  wa: 'Hallo Modern Age Coders, ich möchte Programmieren auf Englisch lernen (oder mein Kind). Kann ich eine kostenlose Probestunde buchen?',
  heroNote: 'Unterricht auf Englisch, mit Mentoren aus Indien &middot; Live-Unterricht seit 2020 &middot; über 10.000 Lernende weltweit',
  spec: [
    ['Für', 'Kinder ab 8, Jugendliche, Erwachsene'],
    ['Sprachen im Code', 'Scratch, Python, Java, JavaScript'],
    ['Unterrichtssprache', 'Nur Englisch, klar gesprochen'],
    ['Englisch nötig', 'Schulenglisch genügt für den Anfang'],
    ['Gruppe', 'Fünfzehn bis zwanzig, oder einzeln'],
    ['Probestunde', 'Kostenlos, ohne Karte']
  ],
  capsuleQ: 'Kurz gesagt',
  capsule: 'Bei Modern Age Coders lernen Kinder ab 8, Jugendliche und Erwachsene in ganz Deutschland Programmieren live auf Englisch, mit Mentoren aus Indien, die langsam und deutlich sprechen und sich auf Ihr Tempo und Ihre Aussprache einstellen. Wer Python, Java oder Scratch auf Englisch lernt, versteht Befehle, Fehlermeldungen und Dokumentation im Original und übt die Sprache jede Stunde mit. Sie lernen in einer Gruppe von fünfzehn bis zwanzig oder im Einzelunterricht.',

  picks: {
    eyebrow: 'Passende Kurse',
    h2: 'Drei Kurse, mit denen man auf Englisch programmieren lernt',
    lede: 'Python für Jugendliche, Python für Erwachsene und Java, die Sprache vieler Informatik-Kurse in der Oberstufe.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'PEN / 01', title: 'Python für Jugendliche', alt: 'Kursbild Python für Jugendliche', note: 'Für 13 bis 18 Jahre. Vom ersten print bis zu eigenen Projekten, mit viel Übung im Lesen von Fehlermeldungen.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'PEN / 02', title: 'Python für Erwachsene', alt: 'Kursbild Python Masterclass für Erwachsene', note: 'Für Erwachsene ohne Vorkenntnisse. Grundlagen, Dateien, Daten und Automatisierung, live und im eigenen Tempo.' },
      { course: 'java-programming-masterclass-for-teens', code: 'PEN / 03', title: 'Java für Jugendliche', alt: 'Kursbild Java für Jugendliche', note: 'Für 13 bis 18 Jahre. Klassen, Objekte und Datenstrukturen, wie sie in vielen Ländern im Informatik-Unterricht vorkommen.' }
    ]
  },

  sections: [
    {
      id: 'wo',
      eyebrow: 'Englisch im Alltag des Programmierens',
      h2: 'Wo braucht man beim Programmieren Englisch?',
      lede: 'An mehr Stellen, als man denkt, und an einer Stelle unausweichlich: bei den Meldungen des Computers. Die Tabelle ist unsere Übersicht; die Belege stehen darunter.',
      body: [
        { kind: 'table', numCols: [], caption: 'Wo Lernende beim Programmieren auf Englisch treffen (unsere Übersicht)', head: ['Stelle', 'Gibt es das auf Deutsch?', 'Was das für Lernende heißt'], rows: [
          ['Befehle im Code (if, for, return, class)', 'Nein', 'Wer die Wörter versteht, ahnt, was eine Zeile tut'],
          ['Fehlermeldungen von Python und Java', 'Nein, auch bei deutscher Spracheinstellung', 'Die wichtigste Lesefähigkeit beim Programmieren'],
          ['Offizielle Python-Dokumentation', 'Teilweise, es gibt eine deutsche Übersetzung', 'Neues erscheint zuerst auf Englisch'],
          ['Namen von Funktionen in Bibliotheken', 'Nein', 'split, append, sort lesen sich wie Anweisungen'],
          ['Fragen und Antworten in Foren', 'Selten', 'Die meisten Lösungen stehen auf Englisch im Netz'],
          ['Wettbewerbe wie der BWKI', 'Ja, beides erlaubt', 'Projekte dürfen auf Deutsch oder Englisch eingereicht werden']
        ] },
        { kind: 'source', html: 'Belege: Die englische Fehlermeldung haben wir mit Python 3.14 auch unter deutscher Spracheinstellung (LANG=de_DE.UTF-8) erzeugt. Die deutsche Übersetzung der Python-Dokumentation ist im Build-Verzeichnis der Python-Dokumentation als Sprache "Deutsch" eingetragen; der Prozess für Übersetzungen ist in PEP 545 beschrieben, angelegt am 4. März 2017. BWKI: Teilnahmebedingungen, gelesen am 2. November 2026. Alles Übrige ist unsere Einschätzung.' },
        { kind: 'two', mt: true,
          leftH3: 'Warum das ein Vorteil ist',
          left: [
            'Wer im Unterricht von Anfang an Englisch hört, muss später nichts übersetzen. Das Wort "loop" bedeutet im Unterricht dasselbe wie im Code und in der Fehlermeldung. Schülerinnen und Schüler, die auf Deutsch lernen, haben oft zwei Wörter für eine Sache: "Schleife" im Heft und <code>for</code> auf dem Bildschirm.',
            'Dazu kommt das Englisch selbst. In jeder Stunde erklärt man, fragt nach und beschreibt Probleme in ganzen Sätzen. Das ist Sprechpraxis zu einem Thema, das Lernende wirklich interessiert.'
          ],
          rightH3: 'Was es nicht ist',
          right: [
            'Kein Englischkurs mit Programmierteil. Grammatik korrigieren wir nicht, außer jemand wünscht es. Ziel ist, dass Sie verstehen und verstanden werden.',
            'Und kein Hindernis für Anfänger: Viele Lernende beginnen mit einem Englisch, das sie selbst als "nur Schulenglisch" beschreiben. Die Mentoren sprechen langsamer, wiederholen und schreiben schwierige Wörter in den Chat.'
          ] }
      ]
    },
    {
      id: 'niveau',
      eyebrow: 'Schulenglisch',
      h2: 'Reicht Schulenglisch, um auf Englisch programmieren zu lernen?',
      lede: 'Für den Anfang ja. Die Bildungsstandards der Kultusministerkonferenz legen fest, welches Englischniveau Schülerinnen und Schüler bis zu ihrem Abschluss erreichen sollen. Gemessen wird nach dem Gemeinsamen europäischen Referenzrahmen (GeR).',
      body: [
        { kind: 'table', numCols: [], caption: 'Erwartetes Englischniveau nach Abschluss, KMK-Bildungsstandards', head: ['Abschluss', 'Niveau nach GeR', 'Für den Programmierkurs heißt das (unsere Einschätzung)'], rows: [
          ['Erster Schulabschluss', 'im Wesentlichen A2', 'Kurze Anweisungen verstehen, einfache Fragen stellen; der Mentor zeigt viel'],
          ['Mittlerer Schulabschluss', 'im Wesentlichen B1', 'Erklärungen folgen, Probleme beschreiben, Fehlermeldungen mit Hilfe lesen'],
          ['Allgemeine Hochschulreife', 'B2, in Englisch rezeptiv auch C1', 'Dokumentation selbstständig lesen, Lösungen auf Englisch begründen']
        ] },
        { kind: 'source', html: 'Quellen: KMK, Bildungsstandards für die erste Fremdsprache (Englisch/Französisch) für den Ersten Schulabschluss und den Mittleren Schulabschluss, Fassung vom 22.06.2023; KMK, Bildungsstandards für die fortgeführte Fremdsprache (Englisch/Französisch) für die Allgemeine Hochschulreife, Beschluss vom 18.10.2012. Gelesen am 3. November 2026. Mit der KMK sind wir nicht verbunden.' },
        { kind: 'p', mt: true, html: 'Eine Zeile aus den Standards für das Abitur passt besonders gut zu unserem Unterricht. Sprachlicher Orientierungspunkt sind dort neben der Standardsprache auch "Register, Varietäten und Akzente, deren Färbung ein Verstehen nicht generell behindert". Englisch mit einem indischen Akzent zu verstehen, gehört also zu dem, was die Schule am Ende der Oberstufe ohnehin erwartet. Unsere Mentoren kommen Lernenden dabei entgegen: Sie sprechen deutlich, achten auf die Aussprache ihres Gegenübers und wechseln das Tempo, bis es passt.' },
        { kind: 'p', html: 'Englisch ist in der Schule kein Randfach. Es gehört zu den Fächern der Vergleichsarbeiten in Klasse 8 (VERA-8), in Nordrhein-Westfalen zu den Zentralen Prüfungen am Ende der Klasse 10, und für das Abitur gibt es seit 2017 einen gemeinsamen Aufgabenpool der Länder. Wer nebenher auf Englisch programmiert, übt also genau die Sprache, die auch in der Schule geprüft wird. Noten in Englisch geben wir nicht; das bleibt Sache der Schule.' }
      ]
    },
    {
      id: 'doku',
      tint: 'tint',
      eyebrow: 'Eine Lektion aus dem Kurs',
      h2: 'Warum lohnt es sich, die englische Dokumentation zu lesen?',
      lede: 'Weil dort in einem Satz steht, was eine Funktion zurückgibt, und genau das ist die häufigste Ursache für rätselhafte Fehler. Python hat die Dokumentation sogar eingebaut: Jede Funktion trägt eine kurze Beschreibung auf Englisch bei sich. Das Beispiel ist unser eigenes, mit einer Liste von Schulnoten.',
      body: [
        { kind: 'code', label: 'Sortieren, zweimal versucht', lang: 'Python', code: SORT, note: 'Ausgabe unseres Laufs mit Python 3.14, identisch unter deutscher Spracheinstellung:<br><code>Versuch 1: None</code><br><code>Sort the list in ascending order and return None.</code><br><code>Return a new list containing all items from the iterable in ascending order.</code><br><code>Versuch 2: [1, 2, 2, 3, 4] | Original: [3, 1, 2, 2, 4]</code>' },
        { kind: 'table', mt: true, numCols: [], caption: 'Zwei Sätze aus der eingebauten Dokumentation, Wort für Wort (unsere Übung)', head: ['Englisch', 'Was es heißt', 'Was daraus folgt'], rows: [
          ['<code>Sort the list in ascending order</code>', 'Sortiert die Liste aufsteigend', 'Die Liste selbst wird verändert'],
          ['<code>and return None.</code>', 'und gibt None zurück', 'In <code>sortiert</code> landet nichts: None'],
          ['<code>Return a new list</code>', 'Gibt eine neue Liste zurück', 'Das Ergebnis kann man speichern'],
          ['<code>containing all items from the iterable</code>', 'mit allen Elementen aus der Eingabe', 'Die ursprüngliche Liste bleibt, wie sie war'],
          ['<code>in ascending order.</code>', 'in aufsteigender Reihenfolge', 'Kleinste Note zuerst']
        ] },
        { kind: 'p', mt: true, html: 'Versuch 1 sieht vernünftig aus und liefert doch <code>None</code>. Python meldet keinen Fehler, das Programm läuft einfach mit einem leeren Ergebnis weiter, und der Absturz kommt oft erst viele Zeilen später. Die Erklärung steht in einem einzigen englischen Satz: <code>list.sort</code> sortiert die Liste an Ort und Stelle "and return None". Die Funktion <code>sorted</code> dagegen "Return a new list". Wer diese beiden Sätze lesen kann, findet den Fehler in Sekunden statt in einer halben Stunde.' },
        { kind: 'p', html: 'Im Unterricht rufen wir solche Beschreibungen mit <code>help(list.sort)</code> oder über <code>__doc__</code> direkt im Programm auf. Die Texte sind kurz, die Wörter wiederholen sich: return, list, new, order, item. Nach einigen Wochen lesen Lernende sie ohne Wörterbuch.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Erst nachlesen, dann aufrufen.</strong> Bei jeder neuen Funktion fragen wir: Was gibt sie zurück? Die Antwort steht fast immer im ersten Satz der Beschreibung.',
          '<strong>Auf "return None" achten.</strong> Funktionen, die etwas verändern, statt etwas Neues zu liefern, sagen das oft genau so. Ihr Ergebnis zu speichern, ist ein klassischer Fehler.',
          '<strong>Das Original prüfen.</strong> Versuch 2 gibt auch die ursprüngliche Liste aus. So sieht man, dass <code>sorted</code> sie unverändert lässt.',
          '<strong>Laut übersetzen.</strong> Lernende übersetzen einen Satz der Dokumentation laut ins Deutsche. Wer ihn übersetzen kann, hat ihn verstanden.'
        ] }
      ]
    },
    {
      id: 'wer',
      eyebrow: 'Für wen',
      h2: 'Für wen lohnt sich Programmieren auf Englisch besonders?',
      lede: 'Für fast alle, aus unterschiedlichen Gründen. Drei Gruppen fragen uns besonders oft.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Schülerinnen und Schüler', p: 'Informatik in der Schule und Englisch als Prüfungsfach üben sich gegenseitig. Wer später an einem Wettbewerb teilnimmt, profitiert doppelt: Beim BWKI dürfen Projekte auf Englisch eingereicht werden, und die Internationale Informatik-Olympiade findet vom 12. bis 19. September 2027 in Potsdam statt, mit erwartet rund 400 Teilnehmenden aus 90 bis 100 Ländern.' },
          { h3: 'Familien, die Englisch sprechen', p: 'Kinder, die zu Hause oder an einer internationalen Schule Englisch sprechen, lernen in ihrer Unterrichtssprache. Für sie ist ein Kurs auf Englisch oft der natürlichere Weg, auch wenn sie in Deutschland leben.' },
          { h3: 'Erwachsene im Beruf', p: 'In vielen Teams in Deutschland sind Code, Tickets und Besprechungen ohnehin englisch. Wer Programmieren direkt auf Englisch lernt, muss die Fachsprache nicht ein zweites Mal lernen.' }
        ] },
        { kind: 'p', mt: true, html: 'Für jüngere Kinder ab 8 beginnen wir mit Scratch. Die Blöcke dürfen auf Deutsch eingestellt bleiben; der Mentor sagt zu jedem Block das englische Wort, und mit der Zeit wechseln viele Kinder von selbst auf die englische Ansicht.' },
        { kind: 'p', html: 'Die IOI und der BWKI sind Wettbewerbe mit eigenen Veranstaltern; wir sind mit ihnen nicht verbunden, und die Anmeldung läuft dort.' }
      ]
    },
    {
      id: 'zeiten',
      eyebrow: 'Unterrichtszeiten',
      h2: 'Wann finden die Kurse auf Englisch statt?',
      lede: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche.',
      body: [
        { kind: 'table', numCols: [], caption: 'Drei Beispieltermine, deutsche und indische Uhrzeit', head: ['Deutsche Zeit', 'Indische Zeit, Winter', 'Indische Zeit, ab 28. März 2027'], rows: [
          ['15:50', '20:20', '19:20'],
          ['17:25', '21:55', '20:55'],
          ['Samstag 12:00', '16:30', '15:30']
        ] },
        { kind: 'source', html: 'Rechtliche Grundlage ist das Einheiten- und Zeitgesetz: in Deutschland MEZ (UTC+1), im Sommer MESZ (UTC+2). Die Sommerzeit ist am 25. Oktober 2026 zu Ende gegangen und startet am 28. März 2027 neu. In Indien gilt durchgehend UTC+5:30, viereinhalb Stunden vor Deutschland im Winter und dreieinhalb im Sommer. Die Termine sind Beispiele.' },
        { kind: 'p', mt: true, html: 'Erwachsene wählen häufig den Samstag oder einen Einzeltermin; Schülerinnen und Schüler eher den Nachmittag. Bei der Buchung sehen Sie die Zeiten nach der Uhr Ihres Geräts.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Fortschritt',
    h2: 'Woran man merkt, dass Englisch und Code zusammenwachsen',
    lede: 'Fünf Stufen aus unserem Unterricht. Sie messen nicht das Englisch, sondern das Programmieren auf Englisch.',
    table: { caption: 'Fünf Stufen beim Programmieren auf Englisch (unsere)', head: ['Stufe', 'Woran man sie erkennt', 'Typisch nach'], rows: [
      ['1. Zuhören', 'Anweisungen des Mentors folgen, mit Zeigen und Wiederholen', 'den ersten Stunden'],
      ['2. Benennen', 'Begriffe wie loop, variable und function selbst verwenden', 'einigen Wochen'],
      ['3. Lesen', 'den ersten Satz einer Funktionsbeschreibung ohne Hilfe verstehen', 'zwei bis drei Monaten'],
      ['4. Fragen', 'ein Problem auf Englisch so beschreiben, dass andere helfen können', 'etwa einem halben Jahr'],
      ['5. Nachschlagen', 'Dokumentation auf Englisch lesen und das Gelesene anwenden', 'etwa einem Jahr']
    ] },
    left: { h3: 'Für Lernende', ps: [
      'Lesen Sie bei jeder neuen Funktion den ersten Satz ihrer Beschreibung laut. Wer ihn ausspricht, liest ihn wirklich.',
      'Notieren Sie neue Wörter mit dem Codebeispiel, in dem sie vorkamen, nicht als Vokabelliste.'
    ] },
    right: { h3: 'Für Eltern', ps: [
      'Fragen Sie Ihr Kind, was die zuletzt gelesene Funktion zurückgibt. Die Antwort zeigt Englisch und Programmieren zugleich.',
      'Wir melden uns regelmäßig mit ein paar Sätzen zum Stand.'
    ] }
  },

  catalogue: {
    eyebrow: 'Weitere Kurse',
    h2: 'Neun weitere Kurse, alle auf Englisch',
    lede: 'Live, mit festem Mentor, in der Gruppe oder einzeln, vom ersten Block bis zur Webanwendung.',
    bands: [
      { num: 'I', h3: 'Kinder', sub: '8 bis 12 Jahre', courses: [
        { code: 'PEN / KIDS / 01', slug: 'scratch-programming-complete-course', title: 'Scratch', blurb: 'Blöcke statt Tippen, mit englischen Begriffen dazu.' },
        { code: 'PEN / KIDS / 02', slug: 'python-ai-kids-masterclass', title: 'Python für Kinder', blurb: 'Die ersten getippten Programme, mit Grafik und Spielen.' },
        { code: 'PEN / KIDS / 03', slug: 'kids-coding-blocks-masterclass', title: 'Blöcke, Spiele, Apps', blurb: 'Breiter Einstieg in mehrere Werkzeuge.' }
      ] },
      { num: 'II', h3: 'Jugendliche', sub: '13 bis 18 Jahre', courses: [
        { code: 'PEN / TEEN / 01', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript', blurb: 'Webseiten, die auf Klicks reagieren.' },
        { code: 'PEN / TEEN / 02', slug: 'git-github-version-control-course-for-teens', title: 'Git und GitHub', blurb: 'Versionen verwalten, wie es Teams weltweit tun.' },
        { code: 'PEN / TEEN / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithmen', blurb: 'Datenstrukturen und Problemlösen mit System.' }
      ] },
      { num: 'III', h3: 'Schule und Beruf', sub: 'ab 15 Jahren', courses: [
        { code: 'PEN / NEXT / 01', slug: 'informatik-abitur-course-java-python', title: 'Informatik Abitur', blurb: 'Oberstufe und Prüfung mit Java oder Python.' },
        { code: 'PEN / NEXT / 02', slug: 'ib-diploma-computer-science-course', title: 'IB Computer Science', blurb: 'Für internationale Schulen in Deutschland.' },
        { code: 'PEN / NEXT / 03', slug: 'full-stack-web-development-masterclass-college', title: 'Full Stack für Erwachsene', blurb: 'React und Node.js bis zur eigenen Anwendung.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Ablauf',
    h2: 'Wie der Unterricht auf Englisch funktioniert',
    lede: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche.',
    slots: [
      { time: 'Nachmittag', l: 'Für Schülerinnen und Schüler, etwa ab 15:50 Uhr.' },
      { time: 'Samstag', l: 'Mittags, beliebt bei Erwachsenen.' },
      { time: 'Einzeln', l: 'Zu vereinbarten Zeiten, auch abends.' }
    ],
    cells: [
      { h3: 'Langsam und deutlich', p: 'Die Mentoren passen Tempo und Wortwahl an, ohne den Inhalt zu vereinfachen.' },
      { h3: 'Wörter im Chat', p: 'Neue Begriffe stehen sofort geschrieben da, mit einem Codebeispiel.' },
      { h3: 'Doku gemeinsam lesen', p: 'Bei jeder neuen Funktion lesen wir ihre englische Beschreibung zusammen.' },
      { h3: 'Fragen erlaubt', p: 'Auch ein deutsches Wort zwischendurch ist in Ordnung; der Mentor nennt das englische.' },
      { h3: 'Ein fester Mentor', p: 'Dieselbe Person, die sich an Ihre Aussprache gewöhnt.' },
      { h3: 'Gruppe oder einzeln', p: 'Fünfzehn bis zwanzig Lernende oder Unterricht nur für Sie.' }
    ]
  },

  projectsH2: 'Projekte, die auf Englisch entstanden sind',
  projectsLede: 'Arbeiten unserer Lernenden aus vielen Ländern; mehr davon auf <a class="ag-inline-link" href="/student-labs">Student labs</a> (englischsprachig).',
  reviewsLede: 'Google-Rezensionen unserer Familien und Lernenden, unübersetzt.',

  fees: {
    h2: 'Preise für Kurse auf Englisch',
    lede: 'Ein Monat bringt acht Live-Stunden. Wir zeigen den Betrag in Euro, umgerechnet mit dem Referenzkurs der Europäischen Zentralbank. Bezahlt wird in US-Dollar, und den Tausch in Euro macht Ihre Bank; um ein paar Cent kann der Betrag deshalb abweichen.',
    free: ['Eine kostenlose Probestunde', 'Ein kurzes Gespräch über Ziele und Englisch', 'Ohne Kreditkarte'],
    group: ['Fünfzehn bis zwanzig Lernende', 'Ein fester Mentor', 'Zwei Stunden pro Woche', 'Monatlich zahlbar und kündbar'],
    one: ['Nur Sie und der Mentor', 'Tempo und Sprache ganz nach Ihnen', 'Termine nach Absprache']
  },

  faq: {
    eyebrow: 'Häufige Fragen',
    h2: 'Programmieren lernen auf Englisch: häufige Fragen',
    items: [
      { q: 'Findet der Unterricht auf Deutsch statt?', a: 'Nein, nie. Jede Stunde ist live und auf Englisch, mit Mentoren aus Indien, die deutlich sprechen und sich auf Ihr Tempo und Ihre Aussprache einstellen. Darin liegt der Gewinn: Sie lernen Programmieren in der Sprache, in der Python, Java und ihre Fehlermeldungen geschrieben sind, und üben Englisch in jeder Stunde mit.' },
      { q: 'Wie gut muss mein Englisch sein?', a: 'Schulenglisch reicht für den Anfang. Nach den KMK-Bildungsstandards sollen Schülerinnen und Schüler bis zum Mittleren Schulabschluss im Wesentlichen das Niveau B1 erreichen; damit kann man Erklärungen folgen und Fragen stellen. Kinder ab 8 starten auch mit weniger, weil der Mentor viel zeigt.' },
      { q: 'Gibt es Fehlermeldungen von Python auch auf Deutsch?', a: 'Nein. Python meldet Fehler auf Englisch, auch wenn der Rechner auf Deutsch eingestellt ist; das haben wir für diese Seite mit Python 3.14 geprüft. Die Dokumentation gibt es dagegen teilweise auf Deutsch. Englische Meldungen und Beschreibungen lesen zu können, gehört also ohnehin dazu, und im Kurs üben wir das jede Stunde.' },
      { q: 'Ist ein indischer Akzent nicht schwer zu verstehen?', a: 'Selten, und die Mentoren achten darauf. Sie sprechen langsam, wiederholen und schreiben Wörter in den Chat. Die KMK-Standards für das Abitur nennen ausdrücklich Varietäten und Akzente, deren Färbung das Verstehen nicht generell behindert, als Teil dessen, was Lernende verstehen sollen.' },
      { q: 'Lernt mein Kind dabei auch besser Englisch?', a: 'Sehr wahrscheinlich übt es mehr, weil es jede Stunde zuhört, fragt und erklärt. Eine Englischnote versprechen wir nicht, und wir korrigieren keine Grammatik, außer Sie wünschen es. Das Ziel ist Verständigung über Code.' },
      { q: 'Ab welchem Alter geht das?', a: 'Ab 8 Jahren mit Scratch, ab etwa 10 mit Python. Für Jugendliche gibt es Python, Java und JavaScript, für Erwachsene eigene Kurse bis zur Webentwicklung.' },
      { q: 'Hilft das bei Wettbewerben?', a: 'Ja. Beim Bundeswettbewerb Künstliche Intelligenz dürfen Projekte auf Deutsch oder Englisch eingereicht werden. Die Internationale Informatik-Olympiade 2027 findet in Potsdam statt, mit rund 400 Teilnehmenden aus 90 bis 100 Ländern. Mit beiden Wettbewerben sind wir nicht verbunden.' },
      { q: 'Kann ich zwischendurch ein deutsches Wort sagen?', a: 'Natürlich. Der Mentor versteht häufige Fachwörter wie Schleife oder Variable und nennt Ihnen das englische Wort dazu. Niemand muss in jeder Minute perfekt Englisch sprechen.' },
      { q: 'Wann finden die Stunden statt?', a: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche. Beginnt Ihre Stunde im Winter um 17:25 Uhr, ist es beim Mentor in Indien 21:55 Uhr.' },
      { q: 'Was kostet der Kurs?', a: 'Die Monatsgebühr steht in Euro auf dieser Seite, berechnet nach dem Referenzkurs der EZB. Abgebucht wird in US-Dollar, Ihre Bank rechnet um. Die Probestunde kostet nichts und braucht keine Kreditkarte.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Weiterlesen',
    h2: 'Weitere Seiten zum Lernen auf Englisch',
    lede: 'Meist in englischer Sprache.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Unser Überblick für Deutschland.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Schulinformatik von Klasse 5 bis zum Abitur.' },
      { href: '/abitur-computer-science-in-english', label: 'Abitur computer science in English', p: 'Informatik-Abitur, englisch erklärt.' },
      { href: '/ib-computer-science-tutor-germany', label: 'IB computer science tutor Germany', p: 'Für Lernende an internationalen Schulen.' },
      { href: '/learn-to-think-not-copy-ai-germany', label: 'Learn to think, not copy AI', p: 'Eigenes Denken vor fertigen Antworten.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Wie unser Live-Unterricht abläuft.' }
    ]
  },

  start: {
    h2: 'Probestunde auf Englisch ausprobieren',
    lede: 'Ob Ihr Englisch reicht, zeigt am ehesten eine echte Stunde. In der kostenlosen Probestunde schreibt der Mentor mit Ihnen ein kleines Programm und liest mit Ihnen die englische Beschreibung einer Funktion, die darin vorkommt. Danach wissen Sie, wie gut Sie mitkommen.',
    readFirst: 'Vorab: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> zeigt den Ablauf, <a class="ag-inline-link" href="/courses">All courses</a> alle Lehrpläne, beides in englischer Sprache.',
    note: 'Unterricht live, nur auf Englisch, mit Mentoren aus Indien. Auf WhatsApp antworten wir in der Regel zuerst.',
    formNote: 'Kostenlos, ohne Kreditkarte, ohne Vertrag.'
  },

  footer: {
    cols: [
      { h4: 'Auf Englisch lernen', links: [
        { href: '/courses/python-complete-masterclass-teens', label: 'Python für Jugendliche' },
        { href: '/courses/python-programming-masterclass-zero-to-advanced-college', label: 'Python für Erwachsene' },
        { href: '/courses/java-programming-masterclass-for-teens', label: 'Java für Jugendliche' },
        { href: '/courses', label: 'Alle Kurse' }
      ] },
      { h4: 'Deutschland', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/ib-computer-science-tutor-germany', label: 'IB Computer Science' },
        { href: '/student-labs', label: 'Projekte' }
      ] }
    ],
    bottomRight: 'Erst nachlesen, dann aufrufen'
  },

  personalityCss: `
.ag-root.ag-pen .ag-hero h1 { letter-spacing: -0.013em; }
.ag-root.ag-pen .ag-capsule { border-left-width: 4px; border-radius: 0; }
.ag-root.ag-pen .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-pen .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-pen .ag-code-head b { letter-spacing: 0.01em; }
`,

  dossier: {
    curriculumAuthority: 'KMK Bildungsstandards erste Fremdsprache ESA/MSA (2023) and fortgeführte Fremdsprache AHR (2012); python/docsbuild-scripts config and docs.python.org/de; PEP 545; FACTS.md 30, 64, 113, 153, 159, 213; Einheiten- und Zeitgesetz; read 2 and 3 November 2026. Example our own.',
    localProject: 'Read the docs first: an original Python example on a list of German school marks; noten.sort() stored in a variable prints "Versuch 1: None", the built-in English docstrings explain why ("Sort the list in ascending order and return None." against "Return a new list ..."), and sorted() prints [1, 2, 2, 3, 4] with the original unchanged; same output under a German locale. Lesson family: read what a function returns in its English documentation before you use it.',
    requiredMentions: ['Versuch 1: None', 'Versuch 2: [1, 2, 2, 3, 4] | Original: [3, 1, 2, 2, 4]', 'Zwei Sätze aus der eingebauten Dokumentation, Wort für Wort', 'Register, Varietäten und Akzente, deren Färbung ein Verstehen nicht generell behindert', 'B2, in Englisch rezeptiv auch C1', 'Nein, auch bei deutscher Spracheinstellung', 'angelegt am 4. März 2017', 'Erst nachlesen, dann aufrufen'],
    sources: [
      { claim: 'ESA A2 and MSA B1 in the first foreign language.', url: 'https://www.kmk.org/fileadmin/Dateien/veroeffentlichungen_beschluesse/2023/2023_06_22-Bista-ESA-MSA-ErsteFremdsprache.pdf' },
      { claim: 'Abitur B2, English receptive C1; registers, varieties and accents.', url: 'https://www.kmk.org/fileadmin/Dateien/veroeffentlichungen_beschluesse/2012/2012_10_18-Bildungsstandards-Fortgef-FS-Abi.pdf' },
      { claim: 'German translation of the Python documentation listed.', url: 'https://raw.githubusercontent.com/python/docsbuild-scripts/main/config.toml' },
      { claim: 'PEP 545 created 4 March 2017.', url: 'https://peps.python.org/pep-0545/' },
      { claim: 'BWKI projects in German or English.', url: 'https://www.bw-ki.de/teilnahmebedingungen' },
      { claim: 'IOI 2027 in Potsdam, dates and expected size.', url: 'https://bwinf.de/olympiade/2027/' }
    ],
    rejectedClaims: [
      'Promising better English grades: refused; we teach programming in English and do not grade English.',
      'Python documentation exists only in English: false; a German translation exists and the page says so.',
      'Echoing the keyword/identifier lesson of learn-coding-in-english-germany: avoided; this page teaches reading error messages.',
      'Any connection to the KMK, BWINF, IOI or BWKI: none.',
      'German-language teaching: English only.'
    ]
  }
};
