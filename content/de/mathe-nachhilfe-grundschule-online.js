'use strict';
// Mathe-Nachhilfe Grundschule online (ag- German-language door, Germany cluster P3, rows.tsv DE075, alloc code mna).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; capsule says
// "auf Englisch". Formal "Sie" to parents. priceSubject 'maths'. Pages show euro; checkout charges USD.
// Audience: parents of primary-school children (Klasse 1 to 4, in Berlin and Brandenburg to 6) who look for online maths
// help, honestly framed for families whose child already understands some English or grows up bilingual. Angle: what the
// KMK primary maths standards (2022) expect at the end of Klasse 4 (numbers to 1 000 000, Einmaleins by heart, written
// algorithms, checking by Überschlag and Umkehraufgabe, patterns), why it matters in Bayern where the Übertrittszeugnis
// in May uses the average of Deutsch, Mathematik and HSU (2,33 Gymnasium, 2,66 Realschule), and an original pattern task
// (matchstick squares, 3n + 1). VERA-3 tables (online-math-tutor-germany) are not repeated.
// Sources (fetched raw with curl -sL -A "Mozilla/5.0" on 3 Nov 2026 unless marked FACTS.md; copies in
// ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/mathe-nachhilfe-grundschule-online/):
//  - KMK Bildungsstandards Mathematik Primarbereich i.d.F. vom 23.06.2022 (facts-school/src/kmk-bista-primar-ma, fetched
//    2 Nov 2026): "stellen Zahlen bis 1 000 000 auf verschiedene Weise dar"; "beherrschen die Grundaufgaben des Kopfrechnens
//    (u. a. Zahlzerlegungen, Einspluseins, Einmaleins) gedächtnismäßig" (PDF hyphenates "Eins-pluseins"); "verstehen
//    schriftliche Verfahren der Addition, Subtraktion und Multiplikation"; "kontrollieren Lösungen durch geeignete
//    Vorgehensweisen (z. B. Überschlagsrechnung, Umkehroperation)"; "erkennen und beschreiben Strukturen in geometrischen und
//    arithmetischen Mustern (z. B. Zahlenfolgen, Pentominos)"; the Leitidee "Muster, Strukturen und funktionaler
//    Zusammenhang" "nimmt eine besondere Rolle unter den Leitideen ein"; "hinterfragen mathematische Aussagen und prüfen diese
//    auf Korrektheit"; "erkennen und beschreiben funktionale Beziehungen in Sachsituationen (z. B. Menge - Preis)".
//    FACTS.md 119 to 121 (adopted 15.10.2004, i.d.F. 23.06.2022; five Leitideen; binding in all Länder).
//  - Bayern, Kultusministerium, Übertritt, https://www.km.bayern.de/lernen/ubertritt-und-bildungswege/uebertritt
//    (by-uebertritt.html): "Anfang Mai erhalten alle Schülerinnen und Schüler der Jahrgangsstufe 4 ein Übertrittszeugnis.";
//    Gymnasium "eine Gesamtdurchschnittsnote von 2,33 oder besser aus den Fächern Deutsch, Mathematik und Heimat- und
//    Sachunterricht"; Realschule "eine Gesamtdurchschnittsnote von 2,66 oder besser in den Fächern Deutsch, Mathematik sowie
//    Heimat- und Sachunterricht"; "kann die Eignung ... auch über den Probeunterricht ermittelt werden".
//  - Bayern, Kultusministerium, Grundschule, https://www.km.bayern.de/lernen/schularten/grundschule (grundschule.html):
//    "Die Grundschule umfasst die Jahrgangsstufen 1 bis 4."; "alle Schülerinnen und Schüler sollen am Ende der vierten Klasse
//    verlässlich die notwendigen Standards in Deutsch und Mathematik erreichen".
//  - FACTS.md 1 (Grundschule to grade 4, to 6 in Berlin and Brandenburg), 3 (over half of hours on Deutsch, Mathematik,
//    Sachunterricht), 28 (no leaving exam at the end of Grundschule), 111 (VERA-3 2027: 12.04. bis 26.05.2027).
//  - Time: EinhZeitG; 25 October 2026 / 28 March 2027.
// Our own: matchstick squares, run with python3 -I: "1 4 4", "2 7 7", "3 10 10", "10 31 31", "100 301 301", "[20]".
// Lesson family: find the rule behind a growing pattern, then predict a far term without drawing every step.

const { DE: DE_DE } = require('../../scripts/nl/lib/market-de');

const PY = [
  'def gezaehlt(quadrate):',
  '    hoelzer = 4',
  '    for _ in range(quadrate - 1):',
  '        hoelzer = hoelzer + 3',
  '    return hoelzer',
  '',
  'for n in [1, 2, 3, 10, 100]:',
  '    print(n, gezaehlt(n), 3 * n + 1)',
  '',
  'print([n for n in range(1, 50) if 3 * n + 1 == 61])'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'german', label: 'Mathe-Nachhilfe Grundschule' },
  slug: 'mathe-nachhilfe-grundschule-online',
  code: 'mna',
  accent: '#1E4976',
  accentRationale: 'Mathe-Nachhilfe Grundschule: a clear school-ink blue #1E4976, allocated for this page, the colour of a Füller cartridge, distinct from the berry, claret and slate of the other maths doors; contrast 7.51 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  priceSubject: 'maths',
  market: DE_DE,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Deutschland' }],
  routeLabel: 'Mathe-Nachhilfe Grundschule online (auf Englisch)',
  title: 'Mathe-Nachhilfe Grundschule online: Klasse 1 bis 4, auf Englisch',
  description: 'Mathe-Nachhilfe Grundschule online, live auf Englisch: was Kinder bis Ende Klasse 4 können sollen, das Übertrittszeugnis in Bayern und eine Musteraufgabe.',
  ogDescription: 'Mathe-Nachhilfe für Grundschulkinder, live auf Englisch: die KMK-Standards bis zum Ende der Klasse 4, warum Mathe beim Übertritt in Bayern zählt, Tipps für zu Hause und eine eigene Aufgabe zu Mustern.',
  twitterDescription: 'Grundschulmathe: Einmaleins, Zahlen bis zur Million, Muster erkennen. Nachhilfe live auf Englisch, mit festem Mentor.',
  pageName: 'Mathe-Nachhilfe Grundschule online',
  webPageDescription: 'Ein Ratgeber für Eltern von Grundschulkindern zur Mathe-Nachhilfe online: was die Bildungsstandards der Kultusministerkonferenz am Ende der Klasse 4 erwarten, welche Rolle Mathematik beim Übertrittszeugnis in Bayern spielt, wie Eltern zu Hause helfen können und eine eigene Aufgabe zu Streichholzmustern, gelöst von Hand und mit Python.',
  courseDescription: 'Live-Online-Mathenachhilfe für Grundschulkinder der Klassen 1 bis 4 (in Berlin und Brandenburg bis 6), ausschließlich auf Englisch: Zahlverständnis, Einmaleins, schriftliches Rechnen, Größen, Geometrie und Muster, spielerisch und im Tempo des Kindes, in der Gruppe oder im Einzelunterricht.',
  crumbs: [{ name: 'Kurse', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Mathe-Nachhilfe Grundschule',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Deutschland' },
    { href: '#klasse4', label: 'Klasse 4' },
    { href: '#uebertritt', label: 'Übertritt' },
    { href: '#muster', label: 'Muster' },
    { href: '#zuhause', label: 'Zuhause' }
  ],
  eyebrow: 'Deutschland &middot; Mathematik &middot; Grundschule',
  h1: 'Mathe-Nachhilfe für die Grundschule, online und auf Englisch',
  lede: 'In der Grundschule entsteht das Fundament für alles, was in Mathe danach kommt: Zahlvorstellung, Einmaleins, schriftliches Rechnen. Diese Seite zeigt, was die Kultusministerkonferenz am Ende der Klasse 4 erwartet, warum Mathe in Bayern beim Übertritt auf eine weiterführende Schule mitentscheidet, welche kleinen Übungen im Alltag viel bewirken, und für welche Kinder unsere Live-Nachhilfe auf Englisch passt.',
  secondaryCta: { href: '#klasse4', label: 'Was Kinder bis Klasse 4 können' },
  wa: 'Hallo Modern Age Coders, unser Kind geht in die Grundschule und könnte in Mathe Unterstützung gebrauchen. Es versteht etwas Englisch. Ist eine kostenlose Probestunde möglich?',
  heroNote: 'Mathe für Kinder live per Video &middot; seit 2020 &middot; über 10.000 Lernende weltweit &middot; Unterricht auf Englisch, geduldig und langsam',
  spec: [
    ['Klassen', '1 bis 4, in Berlin und Brandenburg bis 6'],
    ['Alter', 'Etwa 6 bis 10 Jahre'],
    ['Themen', 'Zahlen, Einmaleins, Rechnen, Muster'],
    ['Gruppe', 'Fünfzehn bis zwanzig, oder einzeln'],
    ['Sprache', 'Englisch, Mentoren in Indien'],
    ['Probestunde', 'Kostenlos, keine Karte']
  ],
  capsuleQ: 'Kurz erklärt',
  capsule: 'Modern Age Coders gibt Mathe-Nachhilfe für Grundschulkinder online, live und auf Englisch, für Klasse 1 bis 4: Zahlen bis zur Million, Einmaleins, schriftliches Rechnen, Größen, Geometrie und Muster, spielerisch und im Tempo Ihres Kindes. Am besten passt das Angebot zu Kindern, die etwas Englisch verstehen oder zweisprachig aufwachsen. Unterrichtet wird von einem festen Mentor, entweder in einer Kindergruppe (fünfzehn bis zwanzig Kinder) oder ganz allein.',

  picks: {
    eyebrow: 'Kurse für die Grundschule',
    h2: 'Drei Mathekurse für Grundschulkinder',
    lede: 'Einer für den Anfang, einer für den Stoff bis Klasse 4, einer für sicheres Kopfrechnen.',
    items: [
      { course: 'early-math-foundations', code: 'MNA / 01', title: 'Erste Mathe-Grundlagen', alt: 'Kursbild erste Mathe-Grundlagen', note: 'Für Klasse 1 und 2: Zahlen verstehen, zerlegen und vergleichen, Plus und Minus mit Anschauung.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'MNA / 02', title: 'Grundschulmathe komplett', alt: 'Kursbild Grundschulmathematik komplett', note: 'Für Klasse 2 bis 4: Einmaleins, schriftliche Verfahren, Größen, Formen und Sachaufgaben.' },
      { course: 'mental-maths-mastery-kids', code: 'MNA / 03', title: 'Kopfrechnen mit Spaß', alt: 'Kursbild Kopfrechnen für Kinder', note: 'Rechenstrategien und Einmaleins so üben, dass es im Kopf sitzt, nicht nur auf dem Blatt.' }
    ]
  },

  sections: [
    {
      id: 'klasse4',
      eyebrow: 'Ziel am Ende der Grundschule',
      h2: 'Was muss ein Kind am Ende der 4. Klasse in Mathe können?',
      lede: 'Darüber geben die KMK-Standards Mathematik für den Primarbereich Auskunft, zuletzt gefasst am 23.06.2022. Sie sind in allen Ländern verbindliche Ziele. Einige Beispiele aus dem Wortlaut:',
      body: [
        { kind: 'table', numCols: [], caption: 'Ausgewählte Erwartungen der KMK am Ende von Jahrgangsstufe 4', head: ['Bereich', 'Die Kinder ... (laut KMK)', 'Woran Sie es zu Hause merken (unsere Beispiele)'], rows: [
          ['Zahlen', 'stellen Zahlen bis 1 000 000 auf verschiedene Weise dar', 'Ihr Kind liest 407 050 richtig vor und weiß, was die 4 bedeutet'],
          ['Kopfrechnen', 'beherrschen Zahlzerlegungen, Einspluseins und Einmaleins gedächtnismäßig', '7 · 8 kommt sofort, ohne Fingerzählen'],
          ['Schriftlich rechnen', 'verstehen schriftliche Verfahren der Addition, Subtraktion und Multiplikation', 'Ihr Kind kann erklären, warum es beim Übertrag eine 1 schreibt'],
          ['Kontrollieren', 'kontrollieren Lösungen, z. B. durch Überschlagsrechnung und Umkehroperation', 'Nach 512 − 178 rechnet es 334 + 178 zur Probe'],
          ['Muster', 'erkennen und beschreiben Strukturen in Mustern, z. B. Zahlenfolgen', 'Es setzt 3, 7, 11, 15 fort und sagt, warum'],
          ['Sachrechnen', 'erkennen und beschreiben funktionale Beziehungen, z. B. Menge und Preis', 'Doppelt so viele Brötchen, doppelt so viel zahlen'],
          ['Argumentieren', 'hinterfragen mathematische Aussagen und prüfen diese auf Korrektheit', 'Es widerspricht, wenn Sie absichtlich falsch rechnen']
        ] },
        { kind: 'source', html: 'Quelle: Kultusministerkonferenz, Bildungsstandards für das Fach Mathematik Primarbereich, Beschluss vom 15.10.2004 i.d.F. vom 23.06.2022, gelesen am 3. November 2026. Die mittlere Spalte gibt den Wortlaut der Standards gekürzt wieder; die rechte Spalte sind unsere eigenen Beispiele.' },
        { kind: 'two', mt: true,
          leftH3: 'Muster als roter Faden',
          left: [
            'Die KMK hebt eine der fünf Leitideen eigens hervor: "Muster, Strukturen und funktionaler Zusammenhang" nimmt laut den Standards eine besondere Rolle unter den Leitideen ein, weil das Erkennen von Regelmäßigkeiten in allen anderen Bereichen gebraucht wird.',
            'Deshalb ist unsere Übungsaufgabe weiter unten eine Musteraufgabe und keine reine Rechenübung.'
          ],
          rightH3: 'Viel Zeit für Mathe',
          right: [
            'Nach der Vereinbarung der KMK zur Grundschule soll über die Hälfte der Gesamtstunden auf Deutsch, Mathematik und Sachunterricht verwendet werden. Mathe ist also schon in der Schule ein Hauptfach mit vielen Stunden.',
            'Eine Abschlussprüfung gibt es am Ende der Grundschule laut KMK nicht. Das Zeugnis und, je nach Land, die Empfehlung für die weiterführende Schule zählen umso mehr.'
          ] }
      ]
    },
    {
      id: 'uebertritt',
      eyebrow: 'Übertritt in Bayern',
      h2: 'Welche Rolle spielt die Mathenote beim Übertritt nach der 4. Klasse in Bayern?',
      lede: 'Eine große. In Bayern erhalten laut Kultusministerium Anfang Mai alle Kinder der Jahrgangsstufe 4 ein Übertrittszeugnis. Maßgeblich ist die Durchschnittsnote aus drei Fächern, und Mathematik ist eines davon.',
      body: [
        { kind: 'table', numCols: [], caption: 'Übertritt nach der Grundschule in Bayern: was das Kultusministerium nennt', head: ['Weiterführende Schule', 'Voraussetzung laut Übertrittszeugnis', 'Andernfalls'], rows: [
          ['Gymnasium', 'Gesamtdurchschnittsnote von 2,33 oder besser aus Deutsch, Mathematik und Heimat- und Sachunterricht', 'Eignung kann über den Probeunterricht ermittelt werden'],
          ['Realschule', 'Gesamtdurchschnittsnote von 2,66 oder besser in denselben drei Fächern', 'Eignung kann über den Probeunterricht ermittelt werden'],
          ['Mittelschule', 'Steht allen Kindern nach der Grundschule offen', 'Spätere Wechsel sind möglich']
        ] },
        { kind: 'source', html: 'Quelle: Kultusministerium Bayern (km.bayern.de), Seiten "Übertritt" und "Grundschule", gelesen am 3. November 2026. Andere Länder regeln den Übergang anders, etwa mit einer Empfehlung, über die die Eltern entscheiden. Fragen Sie die Grundschule Ihres Kindes nach den Regeln Ihres Landes.' },
        { kind: 'p', mt: true, html: 'Ein Rechenbeispiel, unser eigenes: Ein Kind mit Deutsch 2, Mathematik 3 und HSU 2 hat den Durchschnitt (2 + 3 + 2) / 3 ≈ 2,33 und liegt damit genau auf der Grenze für das Gymnasium. Mit einer 2 in Mathe läge es bei 2,0. Gerade in der 3. und 4. Klasse kann eine stabile Mathenote also über den Weg nach der Grundschule mitentscheiden.' },
        { kind: 'p', mt: true, html: 'Uns ist wichtig, ehrlich zu sein: Nachhilfe ist kein Mittel, um eine Note zu garantieren, und wir vergeben selbst keine Noten. Wir arbeiten parallel zum Unterricht der Grundschule daran, dass Ihr Kind sicher und gern rechnet. Die Note gibt allein die Lehrkraft. In Berlin und Brandenburg reicht die Grundschule übrigens bis zur 6. Klasse; dort liegt der Übergang zwei Jahre später.' }
      ]
    },
    {
      id: 'muster',
      tint: 'tint',
      eyebrow: 'Eine Aufgabe für Kind und Eltern',
      h2: 'Wie viele Streichhölzer braucht man für 10 Quadrate?',
      lede: 'Eine Musteraufgabe für Klasse 3 und 4, die Sie mit echten Streichhölzern oder Zahnstochern nachlegen können. Die Aufgabe ist unsere eigene.',
      body: [
        { kind: 'p', html: '<strong>Aufgabe.</strong> Legen Sie Quadrate aus Streichhölzern in einer Reihe nebeneinander, so dass benachbarte Quadrate sich ein Hölzchen teilen. Für 1 Quadrat braucht man 4 Hölzer, für 2 Quadrate 7, für 3 Quadrate 10. Wie viele braucht man für 10 Quadrate? Und für 100?' },
        { kind: 'table', mt: true, numCols: [0, 1, 2], caption: 'Hölzer pro Reihe, gelegt und gezählt (unsere Tabelle)', head: ['Quadrate', 'Hölzer', 'Dazu gekommen'], rows: [
          ['1', '4', '4'], ['2', '7', '3'], ['3', '10', '3'], ['4', '13', '3']
        ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Legen und zählen.</strong> Die ersten drei oder vier Reihen wirklich legen. Kinder sehen dann selbst: Jedes neue Quadrat braucht nur 3 Hölzer, weil eine Seite schon da ist.',
          '<strong>Die Regel sagen.</strong> "Am Anfang 4, danach immer 3 dazu." Bei 10 Quadraten sind das 4 und neunmal 3, also 4 + 27 = 31.',
          '<strong>Weit voraussagen.</strong> Für 100 Quadrate legt niemand mehr Hölzer. Man denkt: 1 Holz ganz links und dann 3 pro Quadrat, also 1 + 3 · 100 = 301.',
          '<strong>Rückwärts fragen.</strong> Mit 61 Hölzern: Wie viele Quadrate? 61 − 1 = 60, und 60 : 3 = 20 Quadrate.'
        ] },
        { kind: 'code', label: 'Für Eltern: dieselbe Rechnung als kleines Python-Programm', lang: 'Python', code: PY, note: 'Bei unserem Lauf mit Python 3 kamen diese Zeilen heraus: <code>1 4 4</code>, <code>2 7 7</code>, <code>3 10 10</code>, <code>10 31 31</code>, <code>100 301 301</code> und zum Schluss <code>[20]</code>. Die mittlere Spalte zählt Schritt für Schritt, die rechte nutzt die Regel 3 · n + 1; beide stimmen überein.' },
        { kind: 'p', mt: true, html: 'Das Programm ist für Sie gedacht, nicht für Ihr Kind in Klasse 3. Es zeigt aber genau, worum es in der Aufgabe geht: Wer die Regel gefunden hat, muss nicht mehr alles legen oder zählen. In den Standards der KMK heißt das, Strukturen in Mustern zu erkennen, zu beschreiben und zu nutzen. Kinder, die Freude daran haben, finden im Programmieren später denselben Gedanken wieder.' }
      ]
    },
    {
      id: 'zuhause',
      eyebrow: 'Für zu Hause',
      h2: 'Wie können Eltern ihr Grundschulkind in Mathe unterstützen?',
      lede: 'Kurz, regelmäßig und ohne Druck. Ein paar Ideen, die sich in den Alltag einbauen lassen.',
      body: [
        { kind: 'ol', items: [
          '<strong>Fünf Minuten Einmaleins.</strong> Lieber täglich kurz als einmal pro Woche lang. Fragen Sie im Auto oder beim Abendessen eine Reihe ab, und lassen Sie Ihr Kind auch Sie abfragen.',
          '<strong>Überschlagen beim Einkaufen.</strong> "Ungefähr wie viel kostet das zusammen?" schult genau die Kontrolle durch Überschlag, die die KMK verlangt.',
          '<strong>Die Probe zur Gewohnheit machen.</strong> Nach jeder Minusaufgabe die Plusaufgabe zur Kontrolle. Das kostet zehn Sekunden und findet viele Fehler.',
          '<strong>Absichtlich falsch rechnen.</strong> Sagen Sie "12 mal 3 ist 33, oder?" und warten Sie auf Widerspruch. Kinder, die widersprechen und es begründen, argumentieren mathematisch.',
          '<strong>Muster suchen.</strong> Hausnummern, Fliesen, Treppenstufen: Wo wiederholt sich etwas, und wie geht es weiter?'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Was unsere Nachhilfe ergänzt',
          left: [
            'Der Mentor nimmt sich Zeit für genau die Stelle, an der Ihr Kind festhängt, mit Anschauungsmaterial am Bildschirm und vielen kleinen Erfolgserlebnissen. Die Arbeitsblätter aus der Schule können Sie mitbringen.',
            'Die Stunden sind kurzweilig aufgebaut, mit Spielen und Rätseln zwischendurch, weil Grundschulkinder nicht lange am Stück vor dem Bildschirm sitzen sollten.'
          ],
          rightH3: 'Ehrlich zur Sprache',
          right: [
            'Unser Unterricht findet nur auf Englisch statt, nie auf Deutsch. Das passt gut für Kinder, die etwas Englisch verstehen, an einer bilingualen oder internationalen Schule lernen oder in einer englischsprachigen Familie aufwachsen.',
            'Die Mentoren in Indien sprechen besonders langsam, zeigen viel und reden wenig. Für ein Kind ganz ohne Englisch empfehlen wir zuerst die Probestunde, um zu sehen, ob es sich wohlfühlt.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Beispielzeiten für Grundschulkinder, deutsche und indische Uhrzeit (unsere Umrechnung)', head: ['Bei Ihnen', 'Beim Mentor bis 28. März 2027', 'Beim Mentor ab 28. März 2027'], rows: [
          ['Montag 14:45', '19:15', '18:15'],
          ['Donnerstag 16:10', '20:40', '19:40'],
          ['Samstag 10:45', '15:15', '14:15']
        ] },
        { kind: 'source', html: 'Das Einheiten- und Zeitgesetz regelt die Uhrzeit in Deutschland: Im Winterhalbjahr gilt MEZ, eine Stunde vor UTC, in der Sommerzeit MESZ, zwei Stunden vor UTC. Zuletzt umgestellt wurde am 25. Oktober 2026, das nächste Mal am 28. März 2027. In Indien gilt durchgehend UTC+5:30. Die Zeiten sind Vorschläge.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Fortschritt',
    h2: 'Woran Sie sehen, dass Ihr Kind in Mathe sicherer wird',
    lede: 'So beschreiben wir, wie weit ein Grundschulkind in Mathe schon ist.',
    table: { caption: 'Fünf Stufen in der Grundschulmathematik (unsere)', head: ['Stufe', 'Oft erreicht in', 'Was dann klappt'], rows: [
      ['1. Zahlen sehen', '1', 'Mengen bis 20 auf einen Blick erfassen und zerlegen'],
      ['2. Im Kopf rechnen', '2', 'Plus und Minus bis 100 und die ersten Einmaleinsreihen'],
      ['3. Einmaleins sicher', '3', 'alle Reihen auswendig und die Umkehraufgaben'],
      ['4. Schriftlich rechnen', '3 bis 4', 'schriftlich addieren, subtrahieren und multiplizieren und erklären, warum'],
      ['5. Muster nutzen', '4', 'eine Regel in einer Zahlenfolge finden und weit voraussagen']
    ] },
    left: { h3: 'Für Eltern', ps: [
      'Beim Einmaleins kippt es oft. Kinder, die das Einmaleins noch zählend rechnen, kommen beim schriftlichen Multiplizieren in Klasse 4 kaum hinterher.',
      'Am Ende jeder Stunde bekommen Sie eine kleine Notiz: geübtes Thema, was schon gut ging.'
    ] },
    right: { h3: 'Für Ihr Kind', ps: [
      'Erst schätzen, dann rechnen, dann vergleichen.',
      'Wenn ein Muster wächst: Was kommt jedes Mal dazu?'
    ] }
  },

  catalogue: {
    eyebrow: 'Weitere Kurse',
    h2: 'Neun weitere Kurse für Kinder',
    lede: 'Jeder davon live und englischsprachig, mit vertrautem Mentor.',
    bands: [
      { num: 'I', h3: 'Rechnen und Denken', sub: '6 bis 12 Jahre', courses: [
        { code: 'MNA / RECHNEN / 01', slug: 'abacus-mental-maths-course-for-kids', title: 'Abakus-Kopfrechnen', blurb: 'Rechnen mit dem Rechenrahmen im Kopf.' },
        { code: 'MNA / RECHNEN / 02', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Schnell rechnen', blurb: 'Tricks für große Zahlen.' },
        { code: 'MNA / RECHNEN / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Knobeln und Denken', blurb: 'Rätsel, Logik und erste Algorithmen.' }
      ] },
      { num: 'II', h3: 'Erstes Programmieren', sub: '6 bis 12 Jahre', courses: [
        { code: 'MNA / CODE / 01', slug: 'kids-coding-blocks-masterclass', title: 'Programmieren mit Blöcken', blurb: 'Muster und Schleifen am Bildschirm.' },
        { code: 'MNA / CODE / 02', slug: 'scratch-programming-complete-course', title: 'Scratch komplett', blurb: 'Eigene Spiele und Geschichten.' },
        { code: 'MNA / CODE / 03', slug: 'python-ai-kids-masterclass', title: 'Python für Kinder', blurb: 'Für Größere, ab etwa 9 Jahren.' }
      ] },
      { num: 'III', h3: 'Nach der Grundschule', sub: '9 bis 14 Jahre', courses: [
        { code: 'MNA / WEITER / 01', slug: 'mathematik-olympiade-and-kaenguru-training-course', title: 'Känguru und Olympiade', blurb: 'Für Kinder, die gern knobeln.' },
        { code: 'MNA / WEITER / 02', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Mathe ab Klasse 5', blurb: 'Brüche, Dezimalzahlen und mehr.' },
        { code: 'MNA / WEITER / 03', slug: 'middle-school-math-competitions-course', title: 'Mathewettbewerbe', blurb: 'Problemlösen über die Schule hinaus.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'So läuft es',
    h2: 'Wie Live-Nachhilfe für Grundschulkinder funktioniert',
    lede: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche.',
    slots: [
      { time: 'Früher Nachmittag', l: 'Nach Schule oder Hort, in deutscher Zeit.' },
      { time: 'Samstagvormittag', l: 'Ausgeruht und ohne Hausaufgabenstress.' },
      { time: 'Einzeln', l: 'Zu einer Zeit, die zum Familienalltag passt.' }
    ],
    cells: [
      { h3: 'Kurze Einheiten', p: 'Kindgerecht, mit Pausen und Spielen.' },
      { h3: 'Ein Mentor', p: 'Dieselbe vertraute Person jede Woche.' },
      { h3: 'Viel zeigen', p: 'Anschauung am Bildschirm, wenig Gerede.' },
      { h3: 'Langsames Englisch', p: 'Einfache Sätze, oft wiederholt.' },
      { h3: 'Schulblätter', p: 'Was aus der Schule kommt, wird mitgeübt.' },
      { h3: 'Eltern informiert', p: 'Zwei Sätze Rückmeldung nach jeder Stunde.' }
    ]
  },

  projectsH2: 'Was Kinder bei uns bauen',
  projectsLede: 'Aus Mustern und Zahlen werden später kleine Spiele und Animationen. Ein paar Projekte sehen Sie unten, mehr auf <a class="ag-inline-link" href="/student-labs">Student labs</a> (englischsprachige Seite).',
  reviewsLede: 'Bewertungen von Eltern auf Google, unübersetzt auf Englisch.',

  fees: {
    h2: 'Kosten der Grundschul-Nachhilfe',
    lede: 'Die Gebühr gilt pro Monat für acht Live-Stunden. Für die Anzeige wird sie über den EZB-Referenzkurs in Euro umgerechnet. Gezahlt wird aber in US-Dollar, die Ihre Bank umrechnet; der abgebuchte Betrag kann deshalb ein wenig anders aussehen.',
    free: ['Kostenlose Probestunde', 'Prüfen, ob Englisch für Ihr Kind passt', 'Keine Karte, kein Vertrag'],
    group: ['Fünfzehn bis zwanzig Kinder ähnlichen Alters', 'Derselbe Mentor jede Woche', 'Zwei kurze Stunden pro Woche', 'Jeden Monat kündbar'],
    one: ['Nur Ihr Kind und der Mentor', 'Tempo ganz nach Ihrem Kind', 'Termine nach Absprache']
  },

  faq: {
    eyebrow: 'Fragen von Eltern',
    h2: 'Was Eltern zur Grundschul-Nachhilfe wissen möchten',
    items: [
      { q: 'Findet der Unterricht auf Deutsch statt?', a: 'Nein, ausschließlich auf Englisch, immer live. Die Mentoren in Indien sprechen sehr langsam und zeigen viel. Für Kinder, die etwas Englisch verstehen oder zweisprachig aufwachsen, ist das ein schöner Doppelnutzen: Mathe wird sicherer, und das Englisch wächst mit. Ob es für Ihr Kind passt, zeigt die kostenlose Probestunde.' },
      { q: 'Was muss mein Kind am Ende der 4. Klasse in Mathe können?', a: 'Laut KMK-Bildungsstandards unter anderem Zahlen bis 1 000 000 darstellen, Einspluseins und Einmaleins auswendig, schriftlich addieren, subtrahieren und multiplizieren, Lösungen durch Überschlag und Umkehraufgabe kontrollieren und Strukturen in Mustern erkennen.' },
      { q: 'Welche Noten zählen für den Übertritt aufs Gymnasium in Bayern?', a: 'Laut Kultusministerium die Gesamtdurchschnittsnote aus Deutsch, Mathematik und Heimat- und Sachunterricht im Übertrittszeugnis, das Anfang Mai ausgegeben wird. Für das Gymnasium sind 2,33 oder besser nötig, für die Realschule 2,66 oder besser. Sonst kann die Eignung über den Probeunterricht ermittelt werden.' },
      { q: 'Ab welchem Alter ist Online-Nachhilfe sinnvoll?', a: 'Ab etwa 6 Jahren, wenn die Stunden kurz und abwechslungsreich sind. Jüngere Kinder brauchen anfangs oft einen Erwachsenen in der Nähe, der beim Einloggen hilft. Bei uns sind die Einheiten bewusst kindgerecht gestaltet.' },
      { q: 'Gibt es am Ende der Grundschule eine Prüfung?', a: 'Nein. Laut KMK wird am Ende der Grundschule keine Abschlussprüfung durchgeführt. In der 3. Klasse schreiben Kinder bundesweit die VERA-3-Vergleichsarbeiten, laut IQB 2027 im Zeitraum vom 12.04. bis 26.05.2027; diese werden nicht benotet.' },
      { q: 'Wie lange reicht die Grundschule?', a: 'Laut KMK von der 1. bis zur 4. Klasse, in Berlin und Brandenburg bis zur 6. Klasse. Wir unterrichten Kinder in allen diesen Klassenstufen.' },
      { q: 'Vergeben Sie Noten?', a: 'Nein. Wir begleiten den Unterricht der Grundschule und helfen Ihrem Kind, sicherer und lieber zu rechnen. Die Noten gibt allein die Lehrkraft an der Schule.' },
      { q: 'Wann sind die Stunden?', a: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche. Für Grundschulkinder sind frühe Nachmittage beliebt; 14:45 Uhr bei Ihnen ist im Winter 19:15 Uhr beim Mentor.' },
      { q: 'Was kostet es?', a: 'Den Monatsbeitrag sehen Sie auf dieser Seite in Euro nach dem Referenzkurs der Europäischen Zentralbank. Bezahlt wird in US-Dollar, und Ihre Bank rechnet um. Die Probestunde ist kostenlos und braucht keine Karte.' },
      { q: 'Kann mein Kind auch programmieren lernen?', a: 'Ja, ab etwa 6 Jahren mit Blöcken oder Scratch. Mathe und Programmieren passen gut zusammen, weil beide vom Erkennen von Mustern und Regeln leben.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Weiterlesen',
    h2: 'Weitere Seiten für Familien',
    lede: 'Zum Teil auf Englisch.',
    items: [
      { href: '/coding-classes-for-kids-berlin', label: 'Coding classes for kids in Berlin', p: 'Programmieren für Kinder von 6 bis 12.' },
      { href: '/german-school-system-maths-and-computing-explained', label: 'German school system explained', p: 'Von der Grundschule bis zum Abitur.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Für später, ab Klasse 5.' },
      { href: '/learn-to-think-not-copy-ai-germany', label: 'Learn to think, not copy AI', p: 'Selbst denken lernen.' },
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Alle unsere Seiten für Deutschland.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Unser Live-Unterricht.' }
    ]
  },

  start: {
    h2: 'Eine kostenlose Probestunde ausprobieren',
    lede: 'In der ersten Stunde lernt der Mentor Ihr Kind kennen, spielt ein paar Zahlenspiele und rechnet eine Aufgabe aus dem aktuellen Schulheft. Dabei zeigt sich auch, ob das Englisch für Ihr Kind gut passt. Danach empfehlen wir Kurs und Format.',
    readFirst: 'Vorab lesen: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> und <a class="ag-inline-link" href="/courses/elementary-mathematics-complete-masterclass">der Kurs Grundschulmathe</a> (beides auf Englisch).',
    note: 'Unterricht live online, nur auf Englisch, mit Mentoren in Indien. Über WhatsApp erreichen Sie uns am schnellsten.',
    formNote: 'Kostenlos, ohne Karte und ohne Verpflichtung.'
  },

  footer: {
    cols: [
      { h4: 'Mathe für Kinder', links: [
        { href: '/courses/early-math-foundations', label: 'Erste Grundlagen' },
        { href: '/courses/elementary-mathematics-complete-masterclass', label: 'Grundschulmathe' },
        { href: '/courses/mental-maths-mastery-kids', label: 'Kopfrechnen' },
        { href: '/courses', label: 'Alle Kurse' }
      ] },
      { h4: 'Deutschland', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-for-kids-berlin', label: 'Programmieren in Berlin' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/student-labs', label: 'Projekte' }
      ] }
    ],
    bottomRight: 'Erst die Regel finden, dann weit voraussagen'
  },

  personalityCss: `
.ag-root.ag-mna .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-mna .ag-capsule { border-left-width: 5px; border-radius: 6px; }
.ag-root.ag-mna .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-mna .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-mna .ag-table td { font-variant-numeric: tabular-nums; }
`,

  dossier: {
    curriculumAuthority: 'KMK Bildungsstandards Mathematik Primarbereich i.d.F. 23.06.2022; KMK Primarbereich page and Eurydice dossier; Bayerisches Staatsministerium für Unterricht und Kultus, pages Übertritt and Grundschule; IQB VERA-3; read 2 and 3 November 2026. Task our own.',
    localProject: 'Matchstick squares in a row: 4, 7, 10, 13 sticks, the rule "4, then 3 more each time" (1 + 3n), 31 for 10 squares, 301 for 100, 20 squares from 61 sticks, with a Python check that counts step by step and by the rule. Lesson family: find the rule behind a growing pattern, then predict a far term without drawing every step.',
    requiredMentions: ['stellen Zahlen bis 1 000 000 auf verschiedene Weise dar', 'beherrschen Zahlzerlegungen, Einspluseins und Einmaleins gedächtnismäßig', 'Gesamtdurchschnittsnote von 2,33 oder besser aus Deutsch, Mathematik und Heimat- und Sachunterricht', 'Gesamtdurchschnittsnote von 2,66 oder besser in denselben drei Fächern', 'Anfang Mai alle Kinder der Jahrgangsstufe 4 ein Übertrittszeugnis', '1 + 3 · 100 = 301', '<code>100 301 301</code>', 'Erst die Regel finden, dann weit voraussagen'],
    sources: [
      { claim: 'End of grade 4 expectations: numbers to 1 000 000, Einmaleins by heart, written algorithms, checking, patterns, functional relations, special role of the pattern Leitidee.', url: 'https://www.kmk.org/fileadmin/Dateien/veroeffentlichungen_beschluesse/2022/2022_06_23-Bista-Primarbereich-Mathe.pdf' },
      { claim: 'Bayern Übertrittszeugnis early May; 2,33 Gymnasium and 2,66 Realschule from Deutsch, Mathematik, HSU; Probeunterricht.', url: 'https://www.km.bayern.de/lernen/ubertritt-und-bildungswege/uebertritt' },
      { claim: 'Bayern Grundschule grades 1 to 4; standards in Deutsch and Mathematik at the end of grade 4.', url: 'https://www.km.bayern.de/lernen/schularten/grundschule' },
      { claim: 'Grundschule to grade 6 in Berlin and Brandenburg; over half of hours on Deutsch, Mathematik, Sachunterricht.', url: 'https://www.kmk.org/themen/allgemeinbildende-schulen/bildungswege-und-abschluesse/primarbereich.html' },
      { claim: 'VERA-3 2027 window.', url: 'https://www.iqb.hu-berlin.de/de/schule/primarstufe/vera-3/' }
    ],
    rejectedClaims: [
      'German-language teaching: we teach in English only, and the page says so, with an honest note on which children it suits.',
      'Any promise of an Übertritt grade: refused; grades come from the school.',
      'Übertritt rules of other Länder: not fetched, so families are sent to their school.',
      'A VERA-3 table: on another Germany page, not repeated.'
    ]
  }
};
