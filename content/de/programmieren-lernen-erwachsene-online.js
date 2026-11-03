'use strict';
// Programmieren lernen für Erwachsene online (ag- German-language door, Germany cluster P3, row DE058, alloc code prl, accent #844D16).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live in English only, matching the learner's pace and accent; the capsule says "auf Englisch".
// Formal "Sie" throughout. Pages show euro; checkout charges USD. Adults of any age: no job, salary or career promises; no
// Bildungsgutschein or any accreditation (we hold none).
// Spine: adults deciding whether to start. (1) Where adults in Germany stand on digital skills and generative AI, by age band,
// against the EU Digital Decade target (Eurostat 2025; Decision (EU) 2022/2481); (2) "too old?" answered honestly, with the
// Python FAQ on Python as a first language; (3) an original Python example adults actually want: renaming holiday photos,
// with a dry run that catches a name collision before anything changes; (4) paths by goal; (5) what a course does not promise;
// (6) times that suit working adults (early morning, lunch break, Saturday).
// Sources, raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/programmieren-lernen-erwachsene-online/ (fetched 3 Nov 2026):
//  Eurostat isoc_sk_dskl_i21 (2025, % of individuals), API JSON: Germany basic or above basic overall digital skills (I_DSK2_BAB)
//   all 16 to 74: 59.55; 25-34: 69.83; 35-44: 68.28; 45-54: 61.03; 55-64: 54.56; 65-74: 41.16; EU27 all: 60.4.
//   Above basic (I_DSK2_AB) Germany all: 24.21.
//  Eurostat isoc_ai_iaiu (2025): Germany used generative AI tools in the last 3 months (I_IUAI) all: 32.25; 25-34: 53.17;
//   35-44: 41.71; 45-54: 27.77; 55-64: 17.16; 65-74: 7.5. For work (I_IUAIWP) all: 15.79; 25-34: 28.03; 45-54: 14.34; 55-64: 8.41.
//   All values rounded by us to whole numbers on the page.
//  Decision (EU) 2022/2481 (Digital Decade policy programme 2030), Publications Office CELEX 32022D2481, German text:
//   "mindestens 80 % aller Personen im Alter von 16–74 Jahren verfügen über grundlegende digitale Kompetenzen"; "vom 14. Dezember 2022".
//  docs.python.org FAQ, General Python FAQ: "Students may be better served by learning Python as their first language. Python has a
//   very simple and consistent syntax and a large standard library"; "In February 1991, after just over a year of development, I
//   decided to post to USENET."
//  Time: EinhZeitG; summer time ended 25 Oct 2026, begins 28 Mar 2027.
// Our calculation: 80 minus 59.55 = 20.45, so Germany's 2025 share is about 20 percentage points below the 2030 target.
// Our own example (python3 -I, 3 Nov 2026): the dry run prints "IMG_20260814_093112.jpg -> 2026-08-14_09-31.jpg",
// "KONFLIKT: IMG_20260814_093145.jpg -> 2026-08-14_09-31.jpg", "IMG_20260815_174500.jpg -> 2026-08-15_17-45.jpg",
// "bleibt: Urlaub_Notizen.txt"; with seconds in the format the two names become 2026-08-14_09-31-12.jpg and 2026-08-14_09-31-45.jpg.
// Lesson family: dry run before you change anything; print the plan, check it, then let the script act.

const { DE } = require('../../scripts/nl/lib/market-de');

const PY = [
  'from datetime import datetime',
  '',
  'dateien = [',
  "    'IMG_20260814_093112.jpg',",
  "    'IMG_20260814_093145.jpg',",
  "    'IMG_20260815_174500.jpg',",
  "    'Urlaub_Notizen.txt',",
  ']',
  '',
  'def neuer_name(alt):',
  "    if not alt.startswith('IMG_'):",
  '        return None',
  "    zeit = datetime.strptime(alt[4:19], '%Y%m%d_%H%M%S')",
  "    return zeit.strftime('%Y-%m-%d_%H-%M') + '.jpg'",
  '',
  'plan = {}',
  'for alt in dateien:',
  '    neu = neuer_name(alt)',
  '    if neu is None:',
  "        print('bleibt:', alt)",
  '    elif neu in plan.values():',
  "        print('KONFLIKT:', alt, '->', neu)",
  '    else:',
  '        plan[alt] = neu',
  "        print(alt, '->', neu)"
].join('\n');

const PY_FIX = [
  'from datetime import datetime',
  '',
  'def neuer_name(alt):',
  "    zeit = datetime.strptime(alt[4:19], '%Y%m%d_%H%M%S')",
  "    return zeit.strftime('%Y-%m-%d_%H-%M-%S') + '.jpg'",
  '',
  "print(neuer_name('IMG_20260814_093112.jpg'))",
  "print(neuer_name('IMG_20260814_093145.jpg'))"
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'german', label: 'Programmieren lernen für Erwachsene' },
  slug: 'programmieren-lernen-erwachsene-online',
  code: 'prl',
  accent: '#844D16',
  accentRationale: 'Programmieren lernen für Erwachsene: a deep tobacco brown #844D16, the colour of a leather notebook, grown-up and unhurried next to the teenage plum; contrast 5.58 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Deutschland' }],
  routeLabel: 'Programmieren lernen für Erwachsene (auf Englisch)',
  title: 'Programmieren lernen als Erwachsener: live online auf Englisch',
  description: 'Programmieren lernen als Erwachsener, in jedem Alter: live online auf Englisch, mit festem Mentor. Dazu Eurostat-Zahlen zu digitalen Kompetenzen 2025 nach Alter.',
  ogDescription: 'Für Erwachsene, die programmieren lernen wollen, ob mit 25 oder mit 65: Live-Unterricht auf Englisch, die Eurostat-Zahlen 2025 zu digitalen Kompetenzen nach Alter und ein erstes Python-Skript, das Urlaubsfotos sicher umbenennt.',
  twitterDescription: 'Programmieren als Erwachsener, live auf Englisch: Eurostat 2025 nach Alter und ein Skript mit Probelauf.',
  pageName: 'Programmieren lernen für Erwachsene',
  webPageDescription: 'Ein Leitfaden für Erwachsene in Deutschland, die programmieren lernen möchten: digitale Kompetenzen und Nutzung generativer KI nach Altersgruppe laut Eurostat 2025, das EU-Ziel für 2030, eine ehrliche Antwort auf die Frage nach dem Alter und ein eigenes Python-Beispiel mit Probelauf.',
  courseDescription: 'Live-Online-Programmierkurse für Erwachsene jeden Alters in ganz Deutschland, ausschließlich auf Englisch: Python von Grund auf, Automatisierung, Daten und Web, in der Gruppe oder im Einzelunterricht.',
  crumbs: [{ name: 'Kurse', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Programmieren für Erwachsene',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Deutschland' },
    { href: '#zahlen', label: 'Zahlen' },
    { href: '#alter', label: 'Alter' },
    { href: '#beispiel', label: 'Beispiel' },
    { href: '#zeiten', label: 'Zeiten' }
  ],
  eyebrow: 'Deutschland &middot; Programmieren &middot; für Erwachsene',
  h1: 'Programmieren lernen als Erwachsener, live auf Englisch',
  lede: 'Viele Erwachsene nehmen sich das Programmieren seit Jahren vor und fangen nie an, weil sie glauben, es sei nur etwas für junge Leute oder für Mathematiker. Diese Seite zeigt zuerst, wo Erwachsene in Deutschland laut Eurostat 2025 bei digitalen Kompetenzen stehen, beantwortet dann ehrlich die Frage nach dem Alter und führt Sie durch ein erstes Python-Skript, das Ihnen sofort Arbeit abnimmt, ohne etwas kaputt zu machen.',
  secondaryCta: { href: '#beispiel', label: 'Das erste Skript ansehen' },
  wa: 'Hallo Modern Age Coders, ich bin erwachsen und möchte programmieren lernen, live auf Englisch. Kann ich eine kostenlose Probestunde buchen?',
  heroNote: 'Live-Unterricht seit 2020 &middot; über 10.000 Lernende weltweit &middot; auf Englisch, mit Ihrem eigenen Mentor',
  spec: [
    ['Für', 'Erwachsene jeden Alters, ohne Vorkenntnisse'],
    ['Einstieg', 'Python, danach Daten, Web oder Automatisierung'],
    ['Format', 'Live per Video, mit Bildschirmfreigabe'],
    ['Gruppe', 'Fünfzehn bis zwanzig Erwachsene, oder einzeln'],
    ['Zeiten', 'Früh morgens, mittags, abends oder samstags'],
    ['Probestunde', 'Kostenlos, ohne Bindung']
  ],
  capsuleQ: 'Kurz gesagt',
  capsule: 'Bei Modern Age Coders lernen Erwachsene jeden Alters live online programmieren, auf Englisch und mit einem festen Mentor aus Indien, der sich auf Ihr Tempo und Ihre Aussprache einstellt. Sie beginnen mit Python und schreiben früh Skripte für eigene Aufgaben, etwa Dateien ordnen oder Tabellen auswerten. Sie lernen in einer Gruppe von fünfzehn bis zwanzig Erwachsenen oder im Einzelunterricht, zu Zeiten, die neben Beruf und Familie passen.',

  picks: {
    eyebrow: 'Passende Kurse',
    h2: 'Drei Kurse für Erwachsene, die neu anfangen',
    lede: 'Ein gründlicher Python-Kurs von null an, ein Kurs, der Python gleich für eigene Routinearbeiten einsetzt, und einer für alle, die erst einmal mit Daten statt mit Code arbeiten möchten.',
    items: [
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'PRL / 01', title: 'Python von null bis fortgeschritten', alt: 'Kursbild Python Masterclass für Erwachsene', note: 'Ab 18, ohne Vorkenntnisse. Alles Nötige, auch die Mathematik, wird im Kurs selbst erklärt, Schritt für Schritt und mit vielen kleinen Programmen.' },
      { course: 'python-ai-automation-masterclass-college', code: 'PRL / 02', title: 'Python für Automatisierung', alt: 'Kursbild Python Automatisierung', note: 'Ab 18. Skripte für Dateien, Tabellen und Webseiten, die wiederkehrende Handgriffe erledigen, und ein Blick darauf, wo KI dabei hilft.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', code: 'PRL / 03', title: 'Daten und KI ohne Programmierkenntnisse', alt: 'Kursbild Daten und KI für Nicht-Programmierer', note: 'Für Berufstätige ohne Programmiererfahrung. Tabellen, Diagramme und Auswertungen mit Excel, Google Sheets und Power BI, als sanfter Einstieg.' }
    ]
  },

  sections: [
    {
      id: 'zahlen',
      eyebrow: 'Eurostat 2025',
      h2: 'Wie gut sind die digitalen Kompetenzen von Erwachsenen in Deutschland?',
      lede: 'Etwas besser, als viele vermuten, und je nach Alter sehr verschieden. Eurostat misst jedes Jahr, wie viele Menschen zwischen 16 und 74 Jahren mindestens grundlegende digitale Kompetenzen haben und wer generative KI nutzt. Die Werte für 2025:',
      body: [
        { kind: 'table', numCols: [1, 2, 3], caption: 'Erwachsene in Deutschland nach Alter, 2025, Anteil in Prozent', head: ['Alter', 'Mindestens grundlegende digitale Kompetenzen', 'Generative KI genutzt (3 Monate)', 'Beruflich genutzt (3 Monate)'], rows: [
          ['25 bis 34', '70', '53', '28'],
          ['35 bis 44', '68', '42', '23'],
          ['45 bis 54', '61', '28', '14'],
          ['55 bis 64', '55', '17', '8'],
          ['65 bis 74', '41', '8', '2'],
          ['Alle von 16 bis 74', '60', '32', '16']
        ] },
        { kind: 'source', html: 'Quelle: Eurostat, Datensätze isoc_sk_dskl_i21 (digitale Kompetenzen, Indikator "basic or above basic overall digital skills") und isoc_ai_iaiu (Nutzung generativer KI-Werkzeuge in den letzten drei Monaten, insgesamt und für berufliche Zwecke), Jahr 2025, Anteil an allen Personen der Altersgruppe, abgerufen am 3. November 2026. Auf ganze Zahlen gerundet von uns. Die Spalte "beruflich" ist ebenfalls ein Anteil an allen Personen, nicht an den KI-Nutzenden.' },
        { kind: 'two', mt: true,
          leftH3: 'Das EU-Ziel für 2030',
          left: [
            'Im Beschluss (EU) 2022/2481 vom 14. Dezember 2022, dem Politikprogramm für die digitale Dekade, haben sich die EU-Staaten ein Ziel gesetzt: Bis 2030 sollen mindestens 80 Prozent aller Personen im Alter von 16 bis 74 Jahren über grundlegende digitale Kompetenzen verfügen.',
            'Deutschland lag 2025 laut Eurostat bei knapp 60 Prozent, fast genau im EU-Schnitt von 60,4 Prozent. Bis zum Ziel fehlen damit, nach unserer eigenen Rechnung, gut 20 Prozentpunkte. Über dem Grundniveau, also in allen fünf Bereichen fortgeschritten, waren in Deutschland 24 Prozent.'
          ],
          rightH3: 'Was die Zahlen nicht sagen',
          right: [
            'Grundlegende digitale Kompetenzen sind nicht dasselbe wie Programmieren. Eurostat fragt nach Informationssuche, Kommunikation, Erstellen digitaler Inhalte, Sicherheit und Problemlösen. Wer programmieren lernt, trainiert vor allem die beiden letzten Bereiche gleich mit.',
            'Und eine Altersgruppe ist kein Schicksal. Gut zwei von fünf Menschen zwischen 65 und 74 erreichen das Grundniveau bereits. Die Tabelle zeigt, wie viele es schon geschafft haben, nicht, wer es noch schaffen kann.'
          ] }
      ]
    },
    {
      id: 'alter',
      eyebrow: 'Die Frage nach dem Alter',
      h2: 'Bin ich mit 40, 50 oder 60 zu alt, um programmieren zu lernen?',
      lede: 'Nein. Es gibt keine Altersgrenze für logisches Denken, und Erwachsene bringen etwas mit, das Kindern fehlt: echte Probleme, die sie lösen wollen. Was sich mit dem Alter ändert, ist nicht die Fähigkeit, sondern die Art, wie man am besten lernt.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Sie haben ein Ziel', p: 'Kinder lernen Schleifen, weil sie im Lehrplan stehen. Erwachsene lernen sie, weil hundert Dateien umbenannt werden müssen. Ein echter Zweck macht das Gelernte haltbarer, und wir richten die Übungen danach aus.' },
          { h3: 'Sie lernen anders', p: 'Erwachsene wollen meist verstehen, warum etwas funktioniert, bevor sie es üben. Ein Mentor kann darauf eingehen, ein Video nicht. Fragen sind in jeder Stunde ausdrücklich erwünscht, auch dieselbe Frage zum zweiten Mal.' },
          { h3: 'Sie haben wenig Zeit', p: 'Zwei Stunden pro Woche zu festen Zeiten sind realistischer als ein Wochenende voller Videos, das man nie findet. Kleine Schritte, die Woche für Woche aufeinander aufbauen, tragen weiter als ein großer Anlauf.' }
        ] },
        { kind: 'p', mt: true, html: 'Für den Einstieg empfehlen wir Python. Die offizielle Python-Dokumentation sagt in ihren allgemeinen FAQ über Anfänger, sie seien mit Python als erster Sprache womöglich besser bedient, weil Python eine sehr einfache und einheitliche Syntax und eine große Standardbibliothek hat. Python selbst ist übrigens kein junges Werkzeug: Sein Erfinder Guido van Rossum stellte es laut derselben FAQ im Februar 1991 erstmals öffentlich im USENET vor.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Häufige Sorgen von Erwachsenen und unsere Antwort', head: ['Die Sorge', 'Unsere Erfahrung'], rows: [
          ['Ich war in Mathe nie gut.', 'Für die ersten Monate reichen die Grundrechenarten. Was später an Mathematik gebraucht wird, erklären wir dann, wenn es gebraucht wird.'],
          ['Mein Englisch ist eingerostet.', 'Der Mentor spricht langsam und schreibt Begriffe auf. Python selbst besteht ohnehin aus wenigen englischen Wörtern wie if, for und print.'],
          ['Ich habe Angst, etwas kaputt zu machen.', 'Wir üben zuerst mit Kopien und Probeläufen, wie im Beispiel unten. Ein Skript zeigt erst an, was es tun würde, bevor es etwas tut.'],
          ['Ich bin der oder die Älteste in der Gruppe.', 'Die Gruppen sind für Erwachsene, nicht für Studierende. Wer lieber allein lernt, wählt den Einzelunterricht.']
        ] }
      ]
    },
    {
      id: 'beispiel',
      tint: 'tint',
      eyebrow: 'Ein erstes Skript',
      h2: 'Was kann ich als Erwachsener als Erstes programmieren?',
      lede: 'Etwas, das Ihnen Arbeit abnimmt. Ein klassisches erstes Projekt bei uns: Urlaubsfotos vom Handy heißen etwa IMG_20260814_093112.jpg, und man möchte sie nach Datum lesbar benennen. Das Beispiel ist unser eigenes. Das Wichtigste daran ist nicht das Umbenennen, sondern der Probelauf davor.',
      body: [
        { kind: 'code', label: 'Probelauf: nur anzeigen, was passieren würde', lang: 'Python', code: PY, note: 'Ausgabe, von uns mit Python 3 ausgeführt:<br><code>IMG_20260814_093112.jpg -&gt; 2026-08-14_09-31.jpg</code><br><code>KONFLIKT: IMG_20260814_093145.jpg -&gt; 2026-08-14_09-31.jpg</code><br><code>IMG_20260815_174500.jpg -&gt; 2026-08-15_17-45.jpg</code><br><code>bleibt: Urlaub_Notizen.txt</code>' },
        { kind: 'p', mt: true, html: 'Der Probelauf hat einen Fehler gefunden, bevor er Schaden anrichten konnte. Zwei Fotos wurden in derselben Minute aufgenommen, um 9:31 Uhr, nur 33 Sekunden auseinander. Hätte das Skript sofort umbenannt, hätte das zweite Foto das erste überschrieben, und ein Urlaubsbild wäre verloren gewesen. Weil das Skript zuerst nur einen Plan ausgibt, sehen Sie das Problem schwarz auf weiß.' },
        { kind: 'code', label: 'Die Lösung: Sekunden in den Namen aufnehmen', lang: 'Python', code: PY_FIX, note: 'Ausgabe: <code>2026-08-14_09-31-12.jpg</code> und <code>2026-08-14_09-31-45.jpg</code>. Jetzt sind beide Namen verschieden. Erst wenn der Probelauf keinen Konflikt mehr meldet, würden wir im Kurs die eigentliche Umbenennung mit <code>pathlib</code> ergänzen. Beide Programme haben wir selbst ausgeführt.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Erst den Plan ausgeben.</strong> Ein Skript, das Dateien ändert, zeigt im ersten Lauf nur an, was es tun würde.',
          '<strong>Den Plan lesen.</strong> Sie prüfen die Liste wie einen Brief vor dem Absenden: Stimmen die Namen, gibt es Doppelte, bleibt etwas übrig?',
          '<strong>Mit einer Kopie arbeiten.</strong> Der erste echte Lauf geschieht in einem Ordner mit kopierten Dateien, nie mit den Originalen.',
          '<strong>Dann erst handeln.</strong> Wenn Plan und Kopie stimmen, darf das Skript an die echten Dateien.'
        ] }
      ]
    },
    {
      id: 'wege',
      eyebrow: 'Lernwege',
      h2: 'Welcher Lernweg passt zu meinem Ziel?',
      lede: 'Erwachsene kommen mit sehr verschiedenen Absichten. Die folgende Übersicht ist unsere eigene und zeigt, womit wir je nach Ziel beginnen. Sie verspricht keinen Berufswechsel und keine Stelle; sie beschreibt, was Sie nach einigen Monaten selbst können.',
      body: [
        { kind: 'table', numCols: [], caption: 'Vier Ziele, vier Wege (unsere Empfehlung)', head: ['Ihr Ziel', 'Wir beginnen mit', 'Nach etwa sechs Monaten können Sie'], rows: [
          ['Routinearbeit am Rechner loswerden', 'Python-Grundlagen, Dateien und Ordner', 'eigene Skripte für Dateien, Listen und einfache Berichte schreiben'],
          ['Tabellen und Zahlen besser verstehen', 'Tabellenkalkulation, dann Python mit Daten', 'Daten einlesen, bereinigen, auswerten und als Diagramm zeigen'],
          ['Eine eigene Webseite bauen', 'HTML und CSS, dann etwas JavaScript', 'eine eigene Seite gestalten, die auch auf dem Handy gut aussieht'],
          ['Verstehen, wie KI funktioniert', 'Python, dann einfache Modelle', 'ein kleines Modell trainieren und erklären, wo es irrt']
        ] },
        { kind: 'p', mt: true, html: 'Viele Erwachsene wechseln nach einigen Monaten den Weg, weil sie gemerkt haben, was ihnen liegt. Das ist kein Umweg. Python bleibt in allen vier Wegen die gemeinsame Grundlage, und was Sie dort gelernt haben, nehmen Sie mit.' }
      ]
    },
    {
      id: 'ehrlich',
      eyebrow: 'Klar gesagt',
      h2: 'Was ein Online-Programmierkurs für Erwachsene nicht verspricht',
      lede: 'Wir sagen lieber am Anfang, was wir nicht bieten, als am Ende enttäuschen.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Keine Jobgarantie', p: 'Wir versprechen keine Stelle, kein Gehalt und keinen Berufswechsel. Was Sie bekommen, sind Fähigkeiten und eigene Programme, die Sie vorzeigen können.' },
          { h3: 'Keine Förderung', p: 'Unsere Kurse sind nicht für den Bildungsgutschein zugelassen und haben keine staatliche Anerkennung. Bitte rechnen Sie nicht mit einer Erstattung durch eine Behörde.' },
          { h3: 'Kein deutscher Unterricht', p: 'Alle Stunden finden auf Englisch statt. Wer gar kein Englisch versteht, wird sich schwertun; wer Schulenglisch hat, kommt nach unserer Erfahrung gut mit.' }
        ] },
        { kind: 'p', mt: true, html: 'Was wir versprechen: dieselbe Qualität des Unterrichts, egal wo Sie wohnen, ein Mentor, der Sie kennt, und dass Sie selbst denken lernen, statt fremden Code oder KI-Antworten abzuschreiben. Auf dieser Grundlage können Sie später jedes Werkzeug bewusster einsetzen.' }
      ]
    },
    {
      id: 'zeiten',
      eyebrow: 'Unterrichtszeiten',
      h2: 'Wann kann ich neben dem Beruf lernen?',
      lede: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche.',
      body: [
        { kind: 'table', numCols: [], caption: 'Zeiten, die zu einem Arbeitstag passen, deutsche und indische Zeit', head: ['Ihre Zeit in Deutschland', 'Beim Mentor, Winter (bis 27. März 2027)', 'Beim Mentor, Sommer (ab 28. März 2027)'], rows: [
          ['07:30, vor der Arbeit', '12:00', '11:00'],
          ['12:15, in der Mittagspause', '16:45', '15:45'],
          ['Samstag 08:30', '13:00', '12:00']
        ] },
        { kind: 'source', html: 'Die gesetzliche Zeit in Deutschland ist laut Einheiten- und Zeitgesetz im Winter MEZ (UTC+1) und im Sommer MESZ (UTC+2). Die Sommerzeit 2026 endete am 25. Oktober 2026; am 28. März 2027 werden die Uhren wieder vorgestellt. Indien kennt keine Zeitumstellung und hat immer UTC+5:30, ist also im Winter 4 Stunden 30 Minuten, im Sommer 3 Stunden 30 Minuten weiter. Die Zeilen sind Beispiele, keine festen Gruppentermine.' },
        { kind: 'p', mt: true, html: 'Für Berufstätige ist der Zeitunterschied ein Vorteil: Ein früher Termin um halb acht liegt beim Mentor mitten am Tag. Abends ist es in Indien dagegen schon spät, deshalb bieten wir vor allem frühe Vormittage, die Mittagszeit und das Wochenende an.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Fortschritt',
    h2: 'Woran Sie Ihren Fortschritt erkennen',
    lede: 'Unsere eigenen Stufen für Erwachsene ohne Vorkenntnisse.',
    table: { caption: 'Vier Stufen für Erwachsene (unsere)', head: ['Stufe', 'Typischer Zeitraum', 'Sie können'], rows: [
      ['1. Lesen', 'erster Monat', 'ein kurzes Python-Programm lesen und sagen, was es ausgibt'],
      ['2. Schreiben', 'bis Monat drei', 'eigene Programme mit Schleifen, Bedingungen und Funktionen schreiben'],
      ['3. Anwenden', 'bis Monat sechs', 'ein Skript für eine eigene Aufgabe planen, mit Probelauf testen und einsetzen'],
      ['4. Weiterbauen', 'ab Monat sieben', 'fremden Code und Dokumentation lesen und Ihr Projekt selbstständig erweitern']
    ] },
    left: { h3: 'Was Sie mitbringen sollten', ps: [
      'Zwei Stunden pro Woche für den Unterricht und etwa eine Stunde zum Üben. Mehr ist schön, aber nicht nötig.',
      'Eine Aufgabe aus Ihrem Alltag, die Sie gern loswerden würden. Daraus machen wir Ihr erstes Projekt.'
    ] },
    right: { h3: 'Ein Tipp vom Mentor', ps: [
      'Lassen Sie jedes Skript, das Dateien verändert, zuerst nur anzeigen, was es tun würde.',
      'Schreiben Sie Fehlermeldungen nicht ab, sondern lesen Sie die letzte Zeile laut vor. Dort steht meistens, was los ist.'
    ] }
  },

  catalogue: {
    eyebrow: 'Weitere Kurse',
    h2: 'Neun weitere Kurse für Erwachsene',
    lede: 'Alle live online, auf Englisch und mit festem Mentor, als Gruppe oder einzeln.',
    bands: [
      { num: 'I', h3: 'Web', sub: 'ab 18 Jahren', courses: [
        { code: 'PRL / WEB / 01', slug: 'html-css-course-for-beginners-build-real-websites', title: 'HTML und CSS', blurb: 'Eigene Webseiten von Grund auf.' },
        { code: 'PRL / WEB / 02', slug: 'full-stack-web-development-masterclass-college', title: 'Full-Stack-Webentwicklung', blurb: 'React, Node.js und eine erste Datenbank.' },
        { code: 'PRL / WEB / 03', slug: 'python-web-development-django-flask-course', title: 'Webanwendungen mit Python', blurb: 'Django und Flask für eigene Werkzeuge.' }
      ] },
      { num: 'II', h3: 'Daten und KI', sub: 'ab 18 Jahren', courses: [
        { code: 'PRL / DATEN / 01', slug: 'data-analysis-mastery-course-college', title: 'Datenanalyse', blurb: 'Excel, SQL, Python und Dashboards.' },
        { code: 'PRL / DATEN / 02', slug: 'ai-tools-mastery-complete-college', title: 'KI-Werkzeuge sicher nutzen', blurb: 'ChatGPT, Claude und Automatisierung mit Augenmaß.' },
        { code: 'PRL / DATEN / 03', slug: 'complete-generative-ai-masterclass-college', title: 'Generative KI verstehen', blurb: 'Sprachmodelle, RAG und Agenten von innen.' }
      ] },
      { num: 'III', h3: 'Werkzeuge für Fortgeschrittene', sub: 'ab 18 Jahren', courses: [
        { code: 'PRL / WERKZEUG / 01', slug: 'mysql-database-complete-masterclass-college', title: 'MySQL und Datenbanken', blurb: 'Abfragen, Entwurf und Verwaltung.' },
        { code: 'PRL / WERKZEUG / 02', slug: 'git-github-advanced-version-control-masterclass-for-professionals', title: 'Git und GitHub', blurb: 'Versionen verwalten wie im Team.' },
        { code: 'PRL / WERKZEUG / 03', slug: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', title: 'KI-Coding-Agenten', blurb: 'Codex und Claude Code mit eigener Kontrolle.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Ablauf',
    h2: 'Wie der Live-Unterricht für Erwachsene funktioniert',
    lede: 'Zwei Termine pro Woche, je eine Stunde, immer mit demselben Mentor. Zwischen den Terminen gibt es eine kurze Übung, die zu Ihrem Alltag passt.',
    slots: [
      { time: 'Früh', l: 'Vor Arbeitsbeginn, wenn der Kopf noch frei ist.' },
      { time: 'Mittags', l: 'Eine Stunde in der Pause, vom Büro oder von zu Hause.' },
      { time: 'Samstag', l: 'Am Vormittag, mit etwas mehr Ruhe.' }
    ],
    cells: [
      { h3: 'Ihr Mentor', p: 'Eine feste Ansprechperson, die Ihren Stand kennt.' },
      { h3: 'Ruhiges Englisch', p: 'Deutlich gesprochen, Begriffe werden notiert.' },
      { h3: 'Eigene Aufgaben', p: 'Übungen aus Ihrem Alltag statt Lehrbuchbeispiele.' },
      { h3: 'Probelauf zuerst', p: 'Sicher üben, ohne echte Dateien zu riskieren.' },
      { h3: 'Fragen erwünscht', p: 'Auch dieselbe Frage zum dritten Mal.' },
      { h3: 'Gruppe oder allein', p: 'Fünfzehn bis zwanzig Erwachsene oder Einzelunterricht.' }
    ]
  },

  projectsH2: 'Projekte unserer Lernenden',
  projectsLede: 'Erwachsene bauen oft praktische Werkzeuge, Lernende aller Altersgruppen auch Spiele und Webseiten. Beispiele unten, weitere auf <a class="ag-inline-link" href="/student-labs">Student labs</a> (auf Englisch).',
  reviewsLede: 'Rückmeldungen von Lernenden und Familien auf Google, so wie sie auf Englisch geschrieben wurden.',

  fees: {
    h2: 'Preise für Erwachsene in Deutschland',
    lede: 'Die Gebühr gilt pro Monat und deckt acht Live-Stunden ab. Wir zeigen sie in Euro nach dem Referenzkurs der Europäischen Zentralbank; belastet wird in US-Dollar. Den Wechsel übernimmt Ihre Bank, darum kann der Betrag auf Ihrer Abrechnung leicht vom angezeigten abweichen.',
    free: ['Eine kostenlose Probestunde', 'Ein Gespräch über Ihr Ziel', 'Keine Kartendaten nötig'],
    group: ['Fünfzehn bis zwanzig Erwachsene', 'Ein fester Mentor', 'Zwei Live-Stunden pro Woche', 'Monatlich kündbar'],
    one: ['Sie allein mit dem Mentor', 'Ihr Projekt, Ihr Tempo', 'Termine nach Absprache']
  },

  faq: {
    eyebrow: 'Häufige Fragen',
    h2: 'Programmieren lernen als Erwachsener: häufige Fragen',
    items: [
      { q: 'Findet der Unterricht auf Deutsch statt?', a: 'Nein, alle Stunden sind live und ausschließlich auf Englisch. Viele Erwachsene sehen darin einen Vorteil: Sie lernen Programmieren und frischen nebenbei ihr Englisch auf, das in der Welt der Software ohnehin überall gebraucht wird. Der Mentor spricht langsam, wiederholt gern und stellt sich auf Ihr Tempo und Ihre Aussprache ein.' },
      { q: 'Bin ich zu alt, um programmieren zu lernen?', a: 'Nein. Wir unterrichten Erwachsene jeden Alters. Laut Eurostat hatten 2025 in Deutschland 41 Prozent der 65- bis 74-Jährigen mindestens grundlegende digitale Kompetenzen; das Alter allein entscheidet also nicht. Entscheidend sind ein Ziel und regelmäßige Übung.' },
      { q: 'Welche Programmiersprache sollte ich als Erwachsener zuerst lernen?', a: 'Python. Die offizielle Python-Dokumentation hält Python für eine gute erste Sprache, weil die Syntax einfach und einheitlich ist. Mit Python können Sie schon nach wenigen Wochen eigene kleine Aufgaben automatisieren.' },
      { q: 'Wie viel Zeit muss ich pro Woche einplanen?', a: 'Zwei Live-Stunden und etwa eine Stunde eigene Übung. Wer mehr Zeit hat, kommt schneller voran, aber die Regelmäßigkeit zählt mehr als die Menge.' },
      { q: 'Kann ich den Kurs mit einem Bildungsgutschein bezahlen?', a: 'Nein. Unsere Kurse sind dafür nicht zugelassen, und wir haben keine staatliche Anerkennung. Sie zahlen die Kursgebühr selbst, monatlich und monatlich kündbar.' },
      { q: 'Bekomme ich durch den Kurs einen Job?', a: 'Das versprechen wir nicht. Ein Kurs gibt Ihnen Fähigkeiten und eigene Projekte; ob und wie Sie diese beruflich nutzen, hängt von vielen Dingen ab, die wir nicht in der Hand haben.' },
      { q: 'Wann finden die Kurse statt?', a: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche. Besonders beliebt bei Berufstätigen sind frühe Termine: 07:30 Uhr in Deutschland ist im Winter 12:00 Uhr beim Mentor in Indien.' },
      { q: 'Was brauche ich technisch?', a: 'Einen Laptop oder Computer, eine stabile Internetverbindung und ein Headset. Die Programme, die wir installieren, sind kostenlos. Ein Dienstrechner mit Installationssperre ist ungeeignet; nutzen Sie lieber ein privates Gerät.' },
      { q: 'Lerne ich mit Gleichaltrigen?', a: 'Die Gruppen bestehen aus fünfzehn bis zwanzig Erwachsenen, nicht aus Schülerinnen und Schülern. Wer lieber allein lernt, wählt den Einzelunterricht, bei dem Tempo und Themen ganz nach Ihnen gehen.' },
      { q: 'Wie wird bezahlt?', a: 'Monatlich. Die Beträge sehen Sie hier in Euro, umgerechnet zum Referenzkurs der Europäischen Zentralbank; abgebucht wird in US-Dollar, und Ihre Bank rechnet um. Die erste Stunde kostet nichts.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Weitere Seiten',
    h2: 'Weiterlesen',
    lede: 'Mehr für Lernende in Deutschland, überwiegend auf Englisch.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Unsere Startseite für Deutschland.' },
      { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and ML in Germany', p: 'KI und maschinelles Lernen live.' },
      { href: '/learn-to-think-not-copy-ai-germany', label: 'Think, not copy AI', p: 'Selbst denken, auch mit KI daneben.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'So läuft eine Live-Stunde ab.' },
      { href: '/courses', label: 'All courses', p: 'Alle Lehrpläne nebeneinander.' },
      { href: '/student-labs', label: 'Student labs', p: 'Projekte unserer Lernenden.' }
    ]
  },

  start: {
    h2: 'Kostenlose Probestunde vereinbaren',
    lede: 'In der Probestunde sprechen Sie mit dem Mentor über Ihr Ziel, schreiben gemeinsam ein erstes kleines Programm und bekommen eine ehrliche Empfehlung, welcher Kurs passt und welcher nicht.',
    readFirst: 'Zum Einlesen: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> zeigt, wie unterrichtet wird, <a class="ag-inline-link" href="/courses">All courses</a> listet die Lehrpläne (beide auf Englisch).',
    note: 'Unterrichtet wird live von Mentoren in Indien, nur auf Englisch. Per WhatsApp erreichen Sie uns am schnellsten.',
    formNote: 'Kostenlos, ohne Zahlungsdaten, ohne Bindung.'
  },

  footer: {
    cols: [
      { h4: 'Für Erwachsene', links: [
        { href: '/courses/python-programming-masterclass-zero-to-advanced-college', label: 'Python von null an' },
        { href: '/courses/python-ai-automation-masterclass-college', label: 'Python-Automatisierung' },
        { href: '/courses/data-and-ai-analytics-for-non-programmers-course', label: 'Daten ohne Code' },
        { href: '/courses', label: 'Alle Kurse' }
      ] },
      { h4: 'Deutschland', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'KI in Deutschland' },
        { href: '/learn-to-think-not-copy-ai-germany', label: 'Denken statt kopieren' },
        { href: '/student-labs', label: 'Projekte' }
      ] }
    ],
    bottomRight: 'Erst der Probelauf, dann die Tat'
  },

  personalityCss: `
.ag-root.ag-prl .ag-hero h1 { letter-spacing: -0.008em; }
.ag-root.ag-prl .ag-capsule { border-left-width: 6px; border-radius: 0; }
.ag-root.ag-prl .ag-section-head h2 { max-width: 36ch; }
.ag-root.ag-prl .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-prl .ag-table td { hyphens: auto; line-height: 1.5; }
`,

  dossier: {
    curriculumAuthority: 'Eurostat isoc_sk_dskl_i21 and isoc_ai_iaiu (2025); Decision (EU) 2022/2481 (Digital Decade), German text via the EU Publications Office; docs.python.org General Python FAQ; Einheiten- und Zeitgesetz. Read 3 November 2026. Example code our own.',
    localProject: 'Dry run first: an original Python script that plans to rename phone photos by date and, before touching anything, prints a KONFLIKT for two photos taken in the same minute (IMG_20260814_093112.jpg and IMG_20260814_093145.jpg both map to 2026-08-14_09-31.jpg); adding seconds fixes it. Run with python3 -I. Lesson family: print the plan, check it, then act.',
    requiredMentions: ['KONFLIKT: IMG_20260814_093145.jpg', '2026-08-14_09-31-45.jpg', 'bleibt: Urlaub_Notizen.txt', 'Beschluss (EU) 2022/2481 vom 14. Dezember 2022', 'fast genau im EU-Schnitt von 60,4 Prozent', 'Beruflich genutzt (3 Monate)', 'isoc_sk_dskl_i21', '07:30, vor der Arbeit', 'Erst der Probelauf, dann die Tat'],
    sources: [
      { claim: 'Basic or above basic digital skills by age, Germany and EU, 2025; above basic in Germany.', url: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/isoc_sk_dskl_i21' },
      { claim: 'Use of generative AI tools, overall and for work, by age, Germany 2025.', url: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/isoc_ai_iaiu' },
      { claim: 'EU 2030 target of 80 percent with basic digital skills, decision of 14 December 2022.', url: 'http://publications.europa.eu/resource/celex/32022D2481' },
      { claim: 'Python as a first language; first public post in February 1991.', url: 'https://docs.python.org/3/faq/general.html' },
      { claim: 'German legal time.', url: 'https://www.gesetze-im-internet.de/me_einhg/BJNR007090969.html' }
    ],
    rejectedClaims: [
      'Job, salary or career-change promises: refused.',
      'Bildungsgutschein, AZAV, ZFU or any state recognition: none held; the page says so plainly.',
      'German-language teaching: English only.',
      'Gender figures from Eurostat: left out by rule.',
      'Treating "basic digital skills" as programming skill: refused; the page explains the difference.'
    ]
  }
};
