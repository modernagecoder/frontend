'use strict';
// Mathe-Nachhilfe online für die Oberstufe (ag- German-language door, Germany cluster P3, rows.tsv DE074, alloc code mno).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; capsule says
// "auf Englisch". Formal "Sie". priceSubject 'maths'. Pages show euro; checkout charges USD.
// Angle: the whole Oberstufe, not only the Abitur exam: Einführungsphase and Qualifikationsphase, why Q-phase course marks
// count towards the Gesamtqualifikation (KMK), and one concrete checkpoint before the Abitur: NRW's Zentrale Klausur am Ende
// der Einführungsphase 2027 in Mathematik (date, Nachschreibtermin, structure, aids, topics) from the ministry's Runderlass
// and QUA-LiS Vorgaben. Then the KMK Abitur standards' Leitideen as a map of the Q-phase, and an original Stochastik task on
// "mindestens einmal". The IQB pool structure, Bewertungseinheiten and Notenpunkte table (abitur-maths-in-english) are not
// repeated.
// Sources (fetched raw with curl -sL -A "Mozilla/5.0" on 3 Nov 2026; copies in
// ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/mathe-nachhilfe-online-oberstufe/):
//  - NRW Runderlass "Termine für die Durchführung der Zentralen Klausuren am Ende der Einführungsphase 2027" vom 30. Mai 2025,
//    BASS 12-65 Nr. 10, https://bass.schule.nrw/20190.htm (bass-20190.html): Deutsch "Dienstag, 25. Mai 2027"; Mathematik
//    "Montag, 31. Mai 2027"; Nachschreibetermine Deutsch "Mittwoch, 2. Juni 2027", Mathematik "Dienstag, 8. Juni 2027"; "an
//    Gymnasien und Gesamtschulen"; Nachschreiben "zentral oder dezentral".
//  - QUA-LiS NRW, "Konkretisierung der fachlichen Rahmenbedingungen für die Zentrale Klausur am Ende der Einführungsphase 2027
//    im Fach Mathematik", https://www.qua-lis.nrw.de/system/files/media/document/file/vorgaben_zke_mathematik_2027.pdf
//    (zke-ma-2027.pdf): KLP SII "Inkraftsetzung zum 01.08.2023 beginnend mit der Einführungsphase aufsteigend"; "Die Klausur
//    umfasst zwei Teile. Eine Aufgabenauswahl ist nicht vorgesehen."; Teil B "ein Aufgabensatz für das Hilfsmittel einfacher
//    WTR sowie ein Aufgabensatz für das Hilfsmittel CAS/MMS"; Teil A "(ohne Taschenrechner, ohne Formelsammlung)", "max. 25
//    Minuten"; "Gesamtbearbeitungszeit für beide Teile beträgt zusammen 100 Minuten"; "Jeder Prüfling entscheidet selbst über
//    den Zeitpunkt, zu dem er den Aufgabenteil A abgibt"; "Die Bewertungseinheiten entsprechen den Zeitanteilen"; "Es dürfen
//    nur ganzzahlige Punkte vergeben werden"; topics: Potenzfunktionen, ganzrationale Funktionen, Transformationen, mittlere
//    und lokale Änderungsrate, Ableitungsregeln, Extrempunkte, Wendepunkte; Teil A also Vektoren (Länge, Kollinearität).
//  - KMK, Gymnasiale Oberstufe und Abitur (facts-school/src/kmk-abi-oberstufe and kmk-sekii): "eine Einführungsphase (ein Jahr)
//    und eine Qualifikationsphase (zwei Jahre)"; "das Creditsystem zur Ermittlung der Gesamtqualifikation"; "In die
//    Gesamtqualifikation und die Abiturdurchschnittsnote gehen neben den Prüfungsleistungen auch die Leistungen aus der
//    Qualifikationsphase ein."; FACTS.md 11 (four or five exam subjects, two of German, foreign language, maths), 12
//    (Durchschnittsnote 4), 22 (Oberstufe 10 to 12 or 11 to 13).
//  - KMK Bildungsstandards Mathematik AHR (18.10.2012; FACTS.md 125 to 128): Leitideen L1 to L5 and K1 to K6.
//  - FACTS.md 41 (Bayern: three written and two oral Abitur exams), 52/53 (Sachsen, Hamburg G8 Oberstufe grade 10 to 12),
//    50 (Niedersachsen G9 grade 11 to 13).
//  - Time: EinhZeitG; 25 October 2026 / 28 March 2027.
// Our own: "mindestens einmal" with p = 0.15 and target 0.9, run with python3 -I: "falsch gedacht, n * p: 6 0.9";
// "richtig fuer n = 6: 0.6229"; "kleinstes n: 15"; "n = 14: 0.8972"; "n = 15: 0.9126".
// Lesson family: "at least once" is one minus "never"; probabilities of repeated tries never simply add up.

const { DE: DE_DE } = require('../../scripts/nl/lib/market-de');

const PY = [
  'p = 0.15',
  'ziel = 0.9',
  '',
  'def mindestens_einmal(n):',
  '    return 1 - (1 - p) ** n',
  '',
  'print("falsch gedacht, n * p:", 6, round(6 * p, 2))',
  'print("richtig fuer n = 6:", round(mindestens_einmal(6), 4))',
  '',
  'n = 1',
  'while mindestens_einmal(n) < ziel:',
  '    n = n + 1',
  'print("kleinstes n:", n)',
  'print("n = 14:", round(mindestens_einmal(14), 4))',
  'print("n = 15:", round(mindestens_einmal(15), 4))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'german', label: 'Mathe-Nachhilfe Oberstufe' },
  slug: 'mathe-nachhilfe-online-oberstufe',
  code: 'mno',
  accent: '#2D5761',
  accentRationale: 'Mathe-Nachhilfe Oberstufe: a dark sea-slate #2D5761, allocated for this page, cooler and greyer than the Informatik petrol so the maths and computing doors stay apart; contrast 6.44 or better on the paper #FBF8F2 and on all three paper tints',
  pageType: 'market',
  priceSubject: 'maths',
  market: DE_DE,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Deutschland' }],
  routeLabel: 'Mathe-Nachhilfe online Oberstufe (auf Englisch)',
  title: 'Mathe-Nachhilfe online Oberstufe: EF und Q-Phase, auf Englisch',
  description: 'Mathe-Nachhilfe online für die Oberstufe, live auf Englisch: warum die Q-Phase zählt, die Zentrale Klausur 2027 in NRW, Analysis, Geometrie und Stochastik.',
  ogDescription: 'Mathe in der Oberstufe, von der Einführungsphase bis zum Abitur: was in die Gesamtqualifikation eingeht, wie die Zentrale Klausur Mathematik 2027 in NRW aufgebaut ist und eine eigene Stochastik-Aufgabe. Unterricht live auf Englisch.',
  twitterDescription: 'Oberstufe Mathe: Q-Phase zählt mit, ZK Mathematik NRW am 31. Mai 2027, "mindestens einmal" richtig rechnen. Live auf Englisch.',
  pageName: 'Mathe-Nachhilfe online Oberstufe',
  webPageDescription: 'Ein Ratgeber für Schülerinnen und Schüler der gymnasialen Oberstufe und ihre Eltern zur Mathe-Nachhilfe online: Einführungsphase und Qualifikationsphase nach der KMK, warum die Kursnoten der Qualifikationsphase in die Gesamtqualifikation eingehen, die Zentrale Klausur Mathematik am Ende der Einführungsphase 2027 in Nordrhein-Westfalen und eine eigene Aufgabe zur Stochastik.',
  courseDescription: 'Live-Online-Mathenachhilfe für die gymnasiale Oberstufe, Einführungsphase und Qualifikationsphase, Grundkurs und Leistungskurs, ausschließlich auf Englisch: Analysis, Analytische Geometrie und Lineare Algebra, Stochastik, Klausuren und Abiturvorbereitung, in der Gruppe oder im Einzelunterricht.',
  crumbs: [{ name: 'Kurse', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Mathe-Nachhilfe Oberstufe',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Deutschland' },
    { href: '#qphase', label: 'Q-Phase' },
    { href: '#klausur', label: 'Klausur EF' },
    { href: '#themen', label: 'Themen' },
    { href: '#aufgabe', label: 'Aufgabe' }
  ],
  eyebrow: 'Deutschland &middot; Mathematik &middot; gymnasiale Oberstufe',
  h1: 'Mathe-Nachhilfe online für die Oberstufe, live auf Englisch',
  lede: 'In der Oberstufe zählt nicht erst die Abiturprüfung. Laut Kultusministerkonferenz gehen die Leistungen aus der Qualifikationsphase in die Gesamtqualifikation ein, jede Klausur in Mathe also mit. Diese Seite erklärt den Aufbau der Oberstufe, zeigt mit der Zentralen Klausur am Ende der Einführungsphase 2027 in Nordrhein-Westfalen einen ersten Prüfstein, ordnet die Themen der Qualifikationsphase und rechnet eine typische Stochastik-Aufgabe vor. Unterrichtet wird live, mit festem Mentor und auf Englisch.',
  secondaryCta: { href: '#qphase', label: 'Warum die Q-Phase zählt' },
  wa: 'Hallo Modern Age Coders, ich bin in der Oberstufe und suche Mathe-Nachhilfe auf Englisch. Kann ich eine kostenlose Probestunde machen?',
  heroNote: 'Oberstufenmathe live per Video &middot; seit 2020 online &middot; mehr als 10.000 Lernende weltweit &middot; Unterricht auf Englisch',
  spec: [
    ['Phase', 'Einführungs- und Qualifikationsphase'],
    ['Kurse', 'Grundkurs und Leistungskurs'],
    ['Themen', 'Analysis, Geometrie, Stochastik'],
    ['Gruppe', 'Fünfzehn bis zwanzig, oder einzeln'],
    ['Sprache', 'Englisch, Mentoren in Indien'],
    ['Probestunde', 'Gratis, ohne Karte']
  ],
  capsuleQ: 'Die kurze Antwort',
  capsule: 'Für die Oberstufe bietet Modern Age Coders Mathe-Nachhilfe online an, live und auf Englisch, für die Einführungsphase und die Qualifikationsphase, im Grundkurs wie im Leistungskurs: Analysis, Analytische Geometrie und Lineare Algebra sowie Stochastik, im Takt der Kursklausuren und mit Blick auf das Abitur. Grundlage ist unser Kurs Abitur Mathematik auf Englisch; gelernt wird in einem Kurs aus fünfzehn bis zwanzig Jugendlichen oder allein mit einem festen Mentor.',

  picks: {
    eyebrow: 'Kurse für die Oberstufe',
    h2: 'Drei Mathekurse für Einführungs- und Qualifikationsphase',
    lede: 'Der erste trägt die ganze Oberstufe bis zum Abitur, der zweite sichert den Übergang aus Klasse 10, der dritte vertieft die Stochastik, die vielen am längsten fremd bleibt.',
    items: [
      { course: 'abitur-mathematics-course-in-english', code: 'MNO / 01', title: 'Abitur Mathematik auf Englisch', alt: 'Kursbild Abitur Mathematik auf Englisch', note: 'Grund- und Leistungskurs, Analysis, Geometrie und Stochastik, mit eigenen Aufgaben im Stil der Klausuren und des Abiturs.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'MNO / 02', title: 'Brücke in die Oberstufe', alt: 'Kursbild Mathematik für die Oberstufe', note: 'Funktionen, Gleichungen und Terme aus der Mittelstufe so sicher machen, dass die Einführungsphase nicht zur Aufholjagd wird.' },
      { course: 'statistics-probability-maths-course', code: 'MNO / 03', title: 'Stochastik vertiefen', alt: 'Kursbild Statistik und Wahrscheinlichkeit', note: 'Baumdiagramme, Binomialverteilung, Erwartungswert und Hypothesen, langsam aufgebaut und viel geübt.' }
    ]
  },

  sections: [
    {
      id: 'qphase',
      eyebrow: 'Aufbau der Oberstufe',
      h2: 'Zählen die Mathenoten der Qualifikationsphase fürs Abitur?',
      lede: 'Ja. Laut Kultusministerkonferenz gehen in die Gesamtqualifikation und die Abiturdurchschnittsnote neben den Prüfungsleistungen auch die Leistungen aus der Qualifikationsphase ein. Wer Mathe als Kurs belegt, sammelt also schon zwei Jahre vor der Prüfung Punkte.',
      body: [
        { kind: 'table', numCols: [], caption: 'Die gymnasiale Oberstufe nach den Angaben der Kultusministerkonferenz', head: ['Baustein', 'Was die KMK sagt', 'Was das für Mathe heißt (unsere Folgerung)'], rows: [
          ['Gliederung', 'Eine Einführungsphase von einem Jahr und eine Qualifikationsphase von zwei Jahren', 'Die Einführungsphase legt die Grundlagen, die Qualifikationsphase zählt'],
          ['Klassenstufen', 'Am Gymnasium die Jahrgangsstufen 10 bis 12 oder 11 bis 13', 'G8 und G9 haben denselben Aufbau, nur ein Jahr verschoben'],
          ['Gesamtqualifikation', 'Ermittelt über ein Creditsystem; Leistungen der Qualifikationsphase gehen ein', 'Jede Mathe-Klausur der Q-Phase ist Teil der Abiturnote'],
          ['Prüfungsfächer', 'Vier oder fünf, darunter zwei der drei Fächer Deutsch, Fremdsprache und Mathematik', 'Mathe ist oft, aber nicht immer Prüfungsfach'],
          ['Bestehen', 'Allgemeine Hochschulreife bei mindestens ausreichenden Leistungen, Durchschnittsnote 4', 'Schwache Kurse lassen sich nicht beliebig ausgleichen']
        ] },
        { kind: 'source', html: 'Quelle: Kultusministerkonferenz, Seite "Sekundarstufe II: Gymnasiale Oberstufe und Abitur", gelesen am 3. November 2026. Die Regeln, welche Kurse genau eingebracht werden, legt jedes Land in seiner Oberstufenverordnung fest. Die rechte Spalte ist unsere Einordnung.' },
        { kind: 'two', mt: true,
          leftH3: 'Wann die Oberstufe beginnt',
          left: [
            'In Ländern mit G8-Oberstufe wie Sachsen oder Hamburg ist Klasse 10 die Einführungsphase, die Qualifikationsphase umfasst Klasse 11 und 12. In Niedersachsen ist es laut Informatik-Monitor 2026/27 Klasse 11 für die Einführungsphase und 12 bis 13 für die Qualifikationsphase.',
            'Für die Nachhilfe ist das wichtig, weil der Schritt in die Einführungsphase der größte Sprung in Mathematik ist: Funktionen werden allgemein betrachtet, Ableitungen kommen hinzu, das Tempo steigt.'
          ],
          rightH3: 'Grundkurs oder Leistungskurs',
          right: [
            'Im Leistungskurs ist Mathe ein Fach mit erhöhtem Anforderungsniveau; laut KMK müssen sich unter den Prüfungsfächern mindestens zwei solche Fächer befinden. Viele Lernende wählen Mathe dafür, weil sie es können, und merken später, wie viel Übung es kostet.',
            'Wir richten uns nach Ihrer Kursart und Ihrem Kursmaterial. Im Leistungskurs üben wir mehr Beweise und offene Aufgaben, im Grundkurs mehr Routine und Sachaufgaben.'
          ] }
      ]
    },
    {
      id: 'klausur',
      eyebrow: 'Ein erster Prüfstein',
      h2: 'Wie ist die Zentrale Klausur Mathematik am Ende der Einführungsphase 2027 in NRW aufgebaut?',
      lede: 'Nordrhein-Westfalen schreibt am Ende der Einführungsphase an Gymnasien und Gesamtschulen eine landesweit einheitliche Klausur in Mathematik. Termin und Aufbau für 2027 stehen bereits fest.',
      body: [
        { kind: 'table', numCols: [], caption: 'Zentrale Klausur Mathematik am Ende der Einführungsphase 2027, Nordrhein-Westfalen', head: ['Punkt', 'Angabe von Ministerium und QUA-LiS'], rows: [
          ['Termin', 'Montag, 31. Mai 2027'],
          ['Zentraler Nachschreibetermin', 'Dienstag, 8. Juni 2027'],
          ['Gesamtzeit', '100 Minuten für beide Teile zusammen'],
          ['Teil A', 'Hilfsmittelfrei, ohne Taschenrechner und ohne Formelsammlung, Abgabe spätestens nach 25 Minuten'],
          ['Teil B', 'Mit Hilfsmitteln, getrennte Aufgabensätze für einfachen WTR und für CAS/MMS, Formelsammlung erlaubt'],
          ['Auswahl', 'Keine Aufgabenauswahl'],
          ['Bewertung', 'Bewertungseinheiten entsprechen den Zeitanteilen, nur ganzzahlige Punkte'],
          ['Grundlage', 'Kernlehrplan Mathematik Sekundarstufe II, in Kraft seit 01.08.2023, beginnend mit der Einführungsphase']
        ] },
        { kind: 'source', html: 'Quellen: Schulministerium NRW, Runderlass "Termine für die Durchführung der Zentralen Klausuren am Ende der Einführungsphase 2027" vom 30. Mai 2025 (BASS 12-65 Nr. 10); QUA-LiS NRW, "Konkretisierung der fachlichen Rahmenbedingungen für die Zentrale Klausur am Ende der Einführungsphase 2027 im Fach Mathematik". Beide gelesen am 3. November 2026. Die Klausur in Deutsch ist am Dienstag, 25. Mai 2027.' },
        { kind: 'p', mt: true, html: 'Zwei Regeln verdienen besondere Aufmerksamkeit. Erstens entscheidet laut Vorgaben jeder Prüfling selbst, wann er Teil A abgibt und die Hilfsmittel erhält, spätestens aber nach 25 Minuten. Wer Teil A schnell erledigt, gewinnt Zeit für Teil B. Zweitens prüft Teil A ohne Taschenrechner unter anderem Ableitungsregeln, Monotonie, Extrem- und Wendepunkte sowie Vektoren, ihre Länge und Kollinearität. Genau diese Grundlagen braucht man in der Qualifikationsphase ständig.' },
        { kind: 'p', mt: true, html: 'Auch außerhalb von Nordrhein-Westfalen lohnt der Blick auf diese Klausur. Sie zeigt, was ein Land am Ende des ersten Oberstufenjahres für unverzichtbar hält: ganzrationale Funktionen und ihre Transformationen, die mittlere und die lokale Änderungsrate, Sekante und Tangente, das graphische Ableiten. Wer in Bayern, Hessen oder Sachsen die Einführungsphase durchläuft, trifft auf dieselben Begriffe, nur in anderer Reihenfolge. Wir nutzen die veröffentlichten Schwerpunkte deshalb als Prüfliste für alle Länder: Was davon nach dem ersten Halbjahr noch nicht sitzt, kommt in die Wiederholung, bevor die Qualifikationsphase beginnt. Die Originalklausuren früherer Jahre stellt das Land selbst bereit; im Unterricht ergänzen wir sie durch Aufgaben, die wir selbst schreiben.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Teil A unter Zeit üben.</strong> Kurze hilfsmittelfreie Aufgaben in 20 Minuten, damit fünf Minuten Reserve bleiben.',
          '<strong>Den eigenen Rechner kennen.</strong> Ob WTR oder CAS: Teil B setzt voraus, dass die Bedienung sitzt. Wir üben mit dem Gerät, das Ihre Schule verwendet.',
          '<strong>Die Formelsammlung lesen.</strong> In Teil B ist die ländergemeinsame Formelsammlung erlaubt. Wer weiß, wo was steht, sucht nicht.'
        ] }
      ]
    },
    {
      id: 'themen',
      eyebrow: 'Themen der Qualifikationsphase',
      h2: 'Welche Themen kommen in Mathe in der Qualifikationsphase dran?',
      lede: 'Die drei Sachgebiete sind überall Analysis, Analytische Geometrie und Lineare Algebra sowie Stochastik. Die Bildungsstandards der KMK für die Allgemeine Hochschulreife vom 18.10.2012 ordnen sie in fünf Leitideen, die wir als Landkarte für die Wiederholung nutzen.',
      body: [
        { kind: 'table', numCols: [], caption: 'Die fünf Leitideen der KMK-Standards für das Abitur und typische Kursthemen (Themen unsere Zuordnung)', head: ['Leitidee', 'Typische Kursthemen', 'Woran man Lücken erkennt'], rows: [
          ['Algorithmus und Zahl (L1)', 'Grenzwerte, Näherungsverfahren, Gleichungssysteme', 'Gleichungssysteme nur mit dem Rechner lösbar'],
          ['Messen (L2)', 'Flächen über Integrale, Längen und Winkel im Raum', 'Integral und Fläche werden verwechselt'],
          ['Raum und Form (L3)', 'Vektoren, Geraden und Ebenen, Lagebeziehungen', 'Keine räumliche Vorstellung von Ebenen'],
          ['Funktionaler Zusammenhang (L4)', 'Ableitung, Kurvendiskussion, Exponentialfunktionen, Integral', 'Ableitungsregeln sitzen nicht hilfsmittelfrei'],
          ['Daten und Zufall (L5)', 'Bedingte Wahrscheinlichkeit, Binomialverteilung, Erwartungswert', '"Mindestens"-Aufgaben werden falsch angesetzt']
        ] },
        { kind: 'source', html: 'Die Namen der Leitideen L1 bis L5 stammen aus den Bildungsstandards im Fach Mathematik für die Allgemeine Hochschulreife (Beschluss der KMK vom 18.10.2012). Welche Themen in welchem Halbjahr unterrichtet werden, regeln die Länder und Schulen; die mittlere und rechte Spalte sind unsere Erfahrung.' },
        { kind: 'p', mt: true, html: 'Neben den Leitideen nennen die Standards sechs allgemeine Kompetenzen, angefangen bei Mathematisch argumentieren (K1), Probleme mathematisch lösen (K2) und Mathematisch modellieren (K3). In Klausuren der Qualifikationsphase zeigt sich das an den Arbeitsaufträgen: Begründen, Zeigen, Interpretieren. Wer nur rechnet, verschenkt dort Punkte. Deshalb schreibt bei uns jede Lernende und jeder Lernende zu jeder Rechnung einen Satz, der das Ergebnis im Sachzusammenhang deutet.' }
      ]
    },
    {
      id: 'aufgabe',
      tint: 'tint',
      eyebrow: 'Eine Übungsaufgabe',
      h2: 'Wie oft muss man mindestens drehen? Eine Stochastik-Aufgabe zu "mindestens einmal"',
      lede: 'Aufgaben mit "mindestens einmal" gehören zu den häufigsten der Stochastik, und eine falsche Idee liegt besonders nahe. Die Aufgabe ist unsere eigene, keine Klausur- oder Abituraufgabe.',
      body: [
        { kind: 'p', html: '<strong>Aufgabe.</strong> Bei einem Glücksrad gewinnt man mit der Wahrscheinlichkeit 0,15. Wie oft muss man mindestens drehen, damit man mit einer Wahrscheinlichkeit von mindestens 90 % wenigstens einmal gewinnt?' },
        { kind: 'p', mt: true, html: '<strong>Die verlockende falsche Idee:</strong> 0,15 pro Drehung, also nach 6 Drehungen 6 · 0,15 = 0,9. Das stimmt nicht, denn Wahrscheinlichkeiten wiederholter Versuche addieren sich nicht. Wer so rechnet, käme nach 7 Drehungen auf über 100 %, was unmöglich ist.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Gegenereignis bilden.</strong> "Mindestens einmal gewinnen" ist das Gegenteil von "nie gewinnen". Nie gewinnen hat bei n Drehungen die Wahrscheinlichkeit 0,85<sup>n</sup>.',
          '<strong>Ungleichung aufstellen.</strong> 1 − 0,85<sup>n</sup> ≥ 0,9, also 0,85<sup>n</sup> ≤ 0,1.',
          '<strong>Lösen.</strong> Mit dem Logarithmus folgt n ≥ ln(0,1) / ln(0,85) ≈ 14,2. Achtung: Beim Teilen durch ln(0,85), eine negative Zahl, dreht sich das Ungleichheitszeichen um.',
          '<strong>Antworten und prüfen.</strong> Die kleinste ganze Zahl ist n = 15. Probe: Für n = 14 ergibt sich etwa 0,8972, also zu wenig; für n = 15 etwa 0,9126.'
        ] },
        { kind: 'code', label: 'Falsche Idee, richtige Rechnung und Suche nach dem kleinsten n', lang: 'Python', code: PY, note: 'Unser Lauf mit Python 3 gab aus: <code>falsch gedacht, n * p: 6 0.9</code>, <code>richtig fuer n = 6: 0.6229</code>, <code>kleinstes n: 15</code>, <code>n = 14: 0.8972</code> und <code>n = 15: 0.9126</code>. Nach 6 Drehungen liegt die echte Chance also nur bei rund 62 %.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Bei "mindestens einmal" immer das Gegenereignis.</strong> 1 minus "nie" ist fast immer der kürzeste Weg.',
          '<strong>Nie Wahrscheinlichkeiten von Wiederholungen addieren.</strong> Spätestens wenn mehr als 1 herauskommt, ist der Ansatz falsch.',
          '<strong>Die Nachbarn prüfen.</strong> Rechnen Sie das gefundene n und n − 1 nach. Erst dann ist "mindestens 15 Drehungen" begründet.'
        ] }
      ]
    },
    {
      id: 'unterricht',
      eyebrow: 'Unterricht und Zeiten',
      h2: 'Wie funktioniert Mathe-Nachhilfe in der Oberstufe auf Englisch?',
      lede: 'Live per Video, mit einem Whiteboard, auf dem Sie selbst rechnen. Der Mentor folgt Ihrem Kursplan und Ihren Klausurterminen.',
      body: [
        { kind: 'two',
          leftH3: 'Englisch als Unterrichtssprache',
          left: [
            'Gleich vorweg: Unsere Stunden laufen komplett auf Englisch. In der Oberstufenmathematik ist das gut machbar: Formeln, Graphen und Vektoren sind international, die Fachwörter wie derivative, integral oder probability lernen sich schnell.',
            'Die Mentoren in Indien sprechen in ruhigem Tempo und gewöhnen sich rasch an Ihre Aussprache. Viele Lernende nutzen das bewusst als Training für ein Studium, in dem englische Fachliteratur selbstverständlich ist.'
          ],
          rightH3: 'Klausuren auf Deutsch',
          right: [
            'Weil Klausuren und Abitur auf Deutsch geschrieben werden, üben wir die Arbeitsaufträge auf Deutsch: Bestimmen, Berechnen, Begründen, Zeigen. Zu jedem Thema entsteht eine kurze Liste mit beiden Fachbegriffen.',
            'Wir unterrichten parallel zum Kurs an Ihrer Schule und vergeben keine Punkte; welche Note im Kurs steht, entscheidet allein Ihre Lehrkraft.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Beispielzeiten bei Ihnen und beim Mentor (unsere Umrechnung)', head: ['Bei Ihnen in Deutschland', 'Beim Mentor, Winterhalbjahr', 'Beim Mentor, ab 28. März 2027'], rows: [
          ['Montag 18:15', '22:45', '21:45'],
          ['Mittwoch 16:50', '21:20', '20:20'],
          ['Samstag 13:30', '18:00', '17:00']
        ] },
        { kind: 'source', html: 'Gesetzliche Zeit ist nach dem Einheiten- und Zeitgesetz MEZ (UTC+1) beziehungsweise in der Sommerzeit MESZ (UTC+2). Die Uhren wurden am 25. Oktober 2026 umgestellt und springen am 28. März 2027 wieder vor. Indien bleibt ganzjährig bei UTC+5:30. Die Zeiten zeigen nur Möglichkeiten, keine festen Kurse.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Fortschritt',
    h2: 'Woran Sie merken, dass die Oberstufe in Mathe gelingt',
    lede: 'Mit diesen fünf Stufen beschreiben wir, wo jemand in der Oberstufe gerade steht.',
    table: { caption: 'Fünf Stufen in der Oberstufenmathematik (unsere)', head: ['Stufe', 'Zeitpunkt', 'Was Sie können'], rows: [
      ['1. Übergang geschafft', 'Erste Monate der Einführungsphase', 'Funktionen allgemein beschreiben und verschieben, ohne Rechner'],
      ['2. Ableiten sicher', 'Ende der Einführungsphase', 'Ableitungsregeln hilfsmittelfrei anwenden und Extrempunkte bestimmen'],
      ['3. Drei Sachgebiete', 'Erstes Jahr der Qualifikationsphase', 'Analysis, Vektoren und Stochastik auseinanderhalten und verbinden'],
      ['4. Deuten und beweisen', 'Q-Phase, zweites Jahr', 'Ergebnisse im Sachzusammenhang deuten und Aussagen beweisen'],
      ['5. Abiturreif', 'Vor der Prüfung', 'eine vollständige Klausur in der vorgesehenen Zeit bearbeiten']
    ] },
    left: { h3: 'Für Eltern', ps: [
      'Der Übergang von Stufe 1 zu Stufe 2 entscheidet oft über die ganze Oberstufe. Wer in der Einführungsphase ins Rutschen gerät, schleppt die Lücke in die Qualifikationsphase mit, wo sie zählt.',
      'Auf Wunsch erhalten Sie nach jeder Einheit eine kurze Notiz.'
    ] },
    right: { h3: 'Für Sie selbst', ps: [
      'Rechnen Sie jede Woche fünf hilfsmittelfreie Aufgaben, auch wenn gerade ein anderes Thema dran ist.',
      'Bei "mindestens"-Aufgaben: erst das Gegenereignis aufschreiben, dann rechnen.'
    ] }
  },

  catalogue: {
    eyebrow: 'Weitere Kurse',
    h2: 'Neun weitere Mathekurse für die Oberstufe und danach',
    lede: 'Auch hier gilt: live, englischsprachig, ein Mentor für die ganze Dauer.',
    bands: [
      { num: 'I', h3: 'Analysis und Algebra', sub: '15 bis 19 Jahre', courses: [
        { code: 'MNO / ANA / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra auffrischen', blurb: 'Termumformungen, die in jeder Klausur stecken.' },
        { code: 'MNO / ANA / 02', slug: 'ap-calculus-exam-prep', title: 'Analysis vertiefen', blurb: 'Ableitung und Integral in amerikanischer Tiefe.' },
        { code: 'MNO / ANA / 03', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A Level Mathematics', blurb: 'Der britische Weg, gleicher Stoff.' }
      ] },
      { num: 'II', h3: 'Andere Abschlüsse', sub: '16 bis 19 Jahre', courses: [
        { code: 'MNO / INT / 01', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB Mathematics', blurb: 'Analysis and Approaches oder Applications.' },
        { code: 'MNO / INT / 02', slug: 'a-level-further-maths-course', title: 'Further Maths', blurb: 'Für alle, die über den Leistungskurs hinaus wollen.' },
        { code: 'MNO / INT / 03', slug: 'college-mathematics-complete-masterclass', title: 'Mathe für das Studium', blurb: 'Der Schritt nach dem Abitur.' }
      ] },
      { num: 'III', h3: 'Mathe mit Code', sub: '14 bis 19 Jahre', courses: [
        { code: 'MNO / CODE / 01', slug: 'maths-through-coding', title: 'Mathematik mit Python', blurb: 'Funktionen plotten, Zufall simulieren.' },
        { code: 'MNO / CODE / 02', slug: 'python-complete-masterclass-teens', title: 'Python für Jugendliche', blurb: 'Das Werkzeug für eigene Berechnungen.' },
        { code: 'MNO / CODE / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiade-Mathematik', blurb: 'Beweise und Problemlösen für Fortgeschrittene.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Ablauf',
    h2: 'So läuft die Oberstufen-Nachhilfe Woche für Woche',
    lede: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche.',
    slots: [
      { time: 'Abends', l: 'Nach dem Nachmittagsunterricht, deutscher Zeit.' },
      { time: 'Samstag', l: 'Längere Einheiten für Probeklausuren.' },
      { time: 'Vor Klausuren', l: 'Zusätzliche Einzelstunden nach Absprache.' }
    ],
    cells: [
      { h3: 'Ihr Kursplan', p: 'Wir folgen der Reihenfolge Ihrer Schule.' },
      { h3: 'Hilfsmittelfrei', p: 'Jede Woche kurze Aufgaben ohne Rechner.' },
      { h3: 'Ihr Rechner', p: 'Üben mit WTR oder CAS, je nach Schule.' },
      { h3: 'Begründen', p: 'Ein Satz zu jedem Ergebnis.' },
      { h3: 'Fester Mentor', p: 'Bis zum Abitur dieselbe Person.' },
      { h3: 'Rückmeldung', p: 'Kurz und regelmäßig, auch an Eltern.' }
    ]
  },

  projectsH2: 'Projekte unserer Lernenden',
  projectsLede: 'Manche nutzen die Oberstufenmathe für eigene Simulationen und Datenprojekte. Beispiele unten, weitere auf <a class="ag-inline-link" href="/student-labs">Student labs</a> (auf Englisch).',
  reviewsLede: 'Google-Bewertungen von Lernenden und Familien, auf Englisch belassen.',

  fees: {
    h2: 'Preise der Oberstufen-Nachhilfe',
    lede: 'Pro Monat sind acht Live-Einheiten enthalten. Den Preis rechnen wir für die Anzeige mit dem Euro-Referenzkurs der EZB um. Die Belastung erfolgt in US-Dollar, und Ihre Bank übernimmt die Umrechnung; deshalb kann der Betrag auf dem Kontoauszug geringfügig anders ausfallen.',
    free: ['Kostenlose Probestunde', 'Blick auf Ihre letzte Klausur', 'Ohne Karte und ohne Bindung'],
    group: ['Fünfzehn bis zwanzig Lernende aus der Oberstufe', 'Ein fester Mentor', 'Zwei Einheiten pro Woche', 'Monatlich kündbar'],
    one: ['Sie und der Mentor', 'Plan nach Ihren Klausurterminen', 'Termine nach Wunsch']
  },

  faq: {
    eyebrow: 'Fragen und Antworten',
    h2: 'Was Oberstufenschülerinnen und Eltern uns oft fragen',
    items: [
      { q: 'Findet der Unterricht auf Deutsch statt?', a: 'Nein. Der Unterricht ist live und nur auf Englisch, mit Mentoren in Indien, die Tempo und Aussprache an Sie anpassen. Viele Oberstufenschülerinnen und -schüler sehen darin einen Vorteil: Mathe auf Englisch bereitet auf ein Studium mit englischer Fachliteratur vor. Die deutschen Arbeitsaufträge für die Klausuren üben wir zusätzlich.' },
      { q: 'Zählen die Mathe-Klausuren der Qualifikationsphase fürs Abitur?', a: 'Ja. Laut Kultusministerkonferenz gehen in die Gesamtqualifikation und die Abiturdurchschnittsnote neben den Prüfungsleistungen auch die Leistungen aus der Qualifikationsphase ein. Welche Kurse genau eingebracht werden, regelt Ihr Land.' },
      { q: 'Wann ist die Zentrale Klausur Mathematik 2027 in NRW?', a: 'Laut Runderlass des Ministeriums für Schule und Bildung am Montag, 31. Mai 2027, mit dem zentralen Nachschreibetermin am Dienstag, 8. Juni 2027. Sie wird am Ende der Einführungsphase an Gymnasien und Gesamtschulen geschrieben.' },
      { q: 'Wie lange dauert die Zentrale Klausur Mathematik in der Einführungsphase?', a: 'Laut QUA-LiS 100 Minuten für beide Teile zusammen. Teil A ist hilfsmittelfrei und muss spätestens nach 25 Minuten abgegeben werden, danach gibt es Taschenrechner und Formelsammlung für Teil B.' },
      { q: 'Lohnt sich Nachhilfe schon in der Einführungsphase?', a: 'Ja, gerade dort. Der Übergang aus Klasse 10 ist der größte Sprung in Mathe, und die Lücken von dort tragen Sie in die Qualifikationsphase, in der die Noten zählen. Früh angefangen reichen oft wenige Wochen, um wieder sicher zu werden.' },
      { q: 'Helfen Sie im Grundkurs und im Leistungskurs?', a: 'In beiden. Im Leistungskurs arbeiten wir mehr an Beweisen und offenen Aufgaben, im Grundkurs an Routine und Sachaufgaben. Der Mentor richtet sich nach dem Material Ihres Kurses.' },
      { q: 'Vergeben Sie Noten oder ersetzen Sie den Kurs?', a: 'Nein. Wir begleiten den Unterricht Ihrer Schule und vergeben keine Punkte. Was zählt, sind allein die Klausuren und Prüfungen Ihrer Schule und Ihres Landes.' },
      { q: 'Wann finden die Stunden statt?', a: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche. Montag 18:15 Uhr in Deutschland ist im Winter 22:45 Uhr beim Mentor.' },
      { q: 'Was kostet die Nachhilfe?', a: 'Der Monatsbeitrag wird hier in Euro nach dem Referenzkurs der Europäischen Zentralbank angezeigt. Bezahlt wird in US-Dollar, Ihre Bank rechnet um. Die Probestunde ist kostenlos, ohne Karte.' },
      { q: 'Bereiten Sie auch direkt auf das Mathe-Abitur vor?', a: 'Ja, mit unserem Kurs Abitur Mathematik auf Englisch, mit eigenen Aufgaben im Prüfungsstil. Eine ausführliche englische Seite zum Aufbau der Abiturprüfung in Mathe finden Sie unter Abitur maths in English.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Weiterlesen',
    h2: 'Weitere Seiten zur Oberstufe',
    lede: 'Teils auf Englisch.',
    items: [
      { href: '/abitur-maths-in-english', label: 'Abitur maths in English', p: 'Aufbau und Termine des Mathe-Abiturs.' },
      { href: '/abitur-vs-ib-vs-a-levels-maths', label: 'Abitur vs IB vs A levels', p: 'Mathe in drei Abschlüssen im Vergleich.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Wenn Informatik ein weiteres Kursfach ist.' },
      { href: '/german-school-system-maths-and-computing-explained', label: 'German school system explained', p: 'Das Schulsystem im Überblick.' },
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Alle unsere Seiten für Deutschland.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'So unterrichten wir live.' }
    ]
  },

  start: {
    h2: 'Probestunde für die Oberstufe buchen',
    lede: 'Bringen Sie die letzte Mathe-Klausur oder ein Aufgabenblatt mit, an dem Sie hängen geblieben sind. Der Mentor bespricht es mit Ihnen und erkennt dabei, ob die Lücke im aktuellen Thema oder schon in der Mittelstufe liegt. Danach schlagen wir einen Plan bis zur nächsten Klausur vor.',
    readFirst: 'Vorab lesen: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> und <a class="ag-inline-link" href="/courses/abitur-mathematics-course-in-english">der Kurs Abitur Mathematik auf Englisch</a> (beide Seiten auf Englisch).',
    note: 'Unterricht live online, ausschließlich auf Englisch, mit Mentoren in Indien. Per WhatsApp antworten wir am schnellsten.',
    formNote: 'Kostenlos, unverbindlich, ohne Karte.'
  },

  footer: {
    cols: [
      { h4: 'Mathematik', links: [
        { href: '/courses/abitur-mathematics-course-in-english', label: 'Abitur Mathematik' },
        { href: '/courses/complete-high-school-mathematics-mastery', label: 'Brücke in die Oberstufe' },
        { href: '/courses/statistics-probability-maths-course', label: 'Stochastik' },
        { href: '/courses', label: 'Alle Kurse' }
      ] },
      { h4: 'Deutschland', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/abitur-maths-in-english', label: 'Abitur maths (EN)' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/student-labs', label: 'Projekte' }
      ] }
    ],
    bottomRight: 'Mindestens einmal heißt eins minus nie'
  },

  personalityCss: `
.ag-root.ag-mno .ag-hero h1 { letter-spacing: -0.011em; }
.ag-root.ag-mno .ag-capsule { border-left-width: 4px; border-radius: 1px; }
.ag-root.ag-mno .ag-section-head h2 { max-width: 35ch; }
.ag-root.ag-mno .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-mno .ag-table td { hyphens: auto; }
`,

  dossier: {
    curriculumAuthority: 'NRW Ministerium für Schule und Bildung, Runderlass ZK EF 2027 (30. Mai 2025, BASS 12-65 Nr. 10); QUA-LiS NRW, Vorgaben ZKE Mathematik 2027; KMK, Gymnasiale Oberstufe und Abitur; KMK Bildungsstandards Mathematik AHR (18.10.2012); GI Informatik-Monitor 2026/27 Oberstufe descriptions; read 3 November 2026. Task our own.',
    localProject: 'A Stochastik task on "mindestens einmal": wheel with p = 0.15, at least 90 percent; the tempting n · p gives 6, the complement 1 - 0.85^n gives n = 15 (14 gives 0.8972, 15 gives 0.9126), with the sign flip when dividing by ln(0.85); checked in Python. Lesson family: "at least once" is one minus "never"; probabilities of repeated tries never simply add up.',
    requiredMentions: ['Montag, 31. Mai 2027', 'Dienstag, 8. Juni 2027', 'Abgabe spätestens nach 25 Minuten', 'Bewertungseinheiten entsprechen den Zeitanteilen, nur ganzzahlige Punkte', 'Kernlehrplan Mathematik Sekundarstufe II, in Kraft seit 01.08.2023', 'auch die Leistungen aus der Qualifikationsphase ein', '<code>richtig fuer n = 6: 0.6229</code>', 'Mindestens einmal heißt eins minus nie'],
    sources: [
      { claim: 'ZK EF 2027 dates: Mathematik 31 May 2027, Nachschreibetermin 8 June 2027, Deutsch 25 May 2027.', url: 'https://bass.schule.nrw/20190.htm' },
      { claim: 'ZKE Mathematik 2027: two parts, no choice, Teil A without aids max 25 minutes, 100 minutes total, WTR and CAS sets, integer points, KLP SII from 01.08.2023, topics.', url: 'https://www.qua-lis.nrw.de/system/files/media/document/file/vorgaben_zke_mathematik_2027.pdf' },
      { claim: 'Oberstufe structure, Creditsystem, Q-phase counts towards the Gesamtqualifikation, exam subjects, Durchschnittsnote 4.', url: 'https://www.kmk.org/themen/allgemeinbildende-schulen/bildungswege-und-abschluesse/sekundarstufe-ii-gymnasiale-oberstufe-und-abitur.html' },
      { claim: 'Leitideen L1 to L5 and K1 to K3.', url: 'https://www.kmk.org/fileadmin/Dateien/veroeffentlichungen_beschluesse/2012/2012_10_18-Bildungsstandards-Mathe-Abi.pdf' },
      { claim: 'Niedersachsen G9 Oberstufe 11 to 13.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/niedersachsen' }
    ],
    rejectedClaims: [
      'German-language teaching: we teach in English only, and the page says so.',
      'Point or grade promises: none.',
      'Reproducing ZKE or Abitur tasks: refused; the wheel task is our own.',
      'IQB pool structure, Bewertungseinheiten by area and the Notenpunkte table: on abitur-maths-in-english, not repeated.'
    ]
  }
};
