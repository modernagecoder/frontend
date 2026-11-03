'use strict';
// Informatik-Abitur Bayern (ag- German-language door, Germany cluster row DE084, P3).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; formal "Sie";
// euro shown, USD charged. We teach alongside school and award no grades.
// Angle: only Bavarian facts. The new G9 written Informatik Abitur (first held May 2026): structure, minutes, BE, the
// Bewertungsraster, the four Inhaltsbereiche, language rules (Java and Python in the Erwartungshorizont, Prolog for the
// knowledge base), the Heaviside convention for artificial neurons, the 2027 dates; plus an original artificial-neuron
// exercise in Python, because Künstliche Intelligenz is examinable in Bayern on both levels.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/informatik-abitur-bayern/, fetched
// 3 November 2026 with curl, text via PDFKit; layout checked on the rendered page where tables were involved):
//  - ISB, "Informatik – Hinweise zur schriftlichen Abiturprüfung", Stand November 2025: "besteht aus drei Aufgaben";
//    gA "jeweils 30 Bewertungseinheiten", "vier Aufgaben zur Auswahl gestellt, von denen drei bearbeitet werden müssen",
//    "Arbeitszeit einschließlich Auswahlzeit von insgesamt 255 Minuten"; eA "jeweils 40 Bewertungseinheiten", "300 Minuten";
//    four Inhaltsbereiche (rendered table: I gA Listen, Binärbäume / eA Rekursion, Listen, Bäume; II gA Rekursion,
//    Nebenläufige Prozesse, Funktionsweise eines Rechners / eA Funktionsweise eines Rechners, Betriebssysteme, Prozesse und
//    Nebenläufigkeit; III gA Formale Sprachen und Automaten, Grenzen der Berechenbarkeit / eA Informationssicherheit,
//    Internet der Dinge, Künstliche Intelligenz; IV gA Informationssicherheit, Künstliche Intelligenz / eA Formale Sprachen
//    und Automaten, Algorithmen, Komplexität und Berechenbarkeit); "Praktische Softwareentwicklung, Projekt" a
//    "Querschnittthema"; "(derzeit) nicht vorgesehen, dass Teile einer Aufgabe am Computer bearbeitet werden"; "einfache
//    Syntax- oder Schreibfehler wie vergessene Strichpunkte o. ä. wie bisher zurückhaltend zu bewerten"; "Der
//    Fachausschuss ergänzt ... die erlaubte(n) objektorientierte(n) Programmiersprache(n) auf dem Deckblatt"; "Für die
//    Lösungen im Erwartungshorizont werden Java und Python als objektorientierte Programmiersprachen und Prolog als logische
//    Programmiersprache verwendet."; Bewertungsraster (15 points from 86 gA / 114 eA, 5 points from 41 / 54, 1 point from
//    18 / 24); "Bisher mussten die angegebenen Grenzen überschritten werden, im neuen Abitur müssen sie lediglich erreicht
//    werden."; Prüfling names on Deckblatt and hands in the Geheft; aids list (Formeldokument, Formelsammlung, WTR,
//    Rechtschreibwörterbuch).
//  - ISB, "Informatik – Übersicht", Stand September 2023: Leistungsfach eA five hours, gA three hours; spät beginnende
//    Informatik oral only; Kolloquium "in zwei jeweils 15-minütige Teile", "30-minütigen Vorbereitungszeit".
//  - ISB Kontaktbrief Informatik 2025: "Im Mai 2026 folgen dann – ebenfalls zum ersten Mal – schriftliche
//    Abiturprüfungen in Informatik auf zwei Anforderungsniveaus"; "Erstmals gibt es Informatik als Leistungsfach";
//    "erstmals der Lernbereich „Künstliche Intelligenz“ in Jahrgangsstufe 13"; Heaviside "0 für x < 0, 1 für x ≥ 0. Damit
//    gilt insbesondere, dass im Fall x = 0 das künstliche Neuron feuern würde."
//  - BayMBl. 2025 Nr. 354 (Bekanntmachung vom 18. August 2025), Abiturprüfung 2027: "21. April 2027 alle
//    Abiturprüfungsfächer auf erhöhtem Anforderungsniveau (mit Ausnahme von Deutsch, Mathematik, Englisch, Französisch,
//    Biologie, Chemie, Physik)"; "7. Mai 2027 alle Abiturprüfungsfächer auf grundlegendem Anforderungsniveau (mit Ausnahme
//    von Englisch, Französisch, Biologie, Chemie, Physik)"; Kolloquium weeks 31 May to 4 June and 7 to 11 June 2027;
//    Entlassung "Freitag, den 25. Juni 2027".
//  - GI Informatik-Monitor 2026/27, Bayern page (raw in src-pages/abitur-computer-science-in-english/infmon-bayern/):
//    FACTS 70, 71, 72; NTG Qualifikationsphase "dreistündig auf grundlegendem Anforderungsniveau oder fünfstündig auf
//    erhöhtem Anforderungsniveau"; "Im Fach Informatik auf erhöhtem Anforderungsniveau wird eine schriftliche oder mündliche
//    Abiturprüfung abgelegt."; "In den Fächern Wirtschaftsinformatik und spät beginnende Informatik ist eine mündliche
//    Abiturprüfung möglich."; Kennzahlen "Anteil SuS mit Informatik in der Sek II 11 %" (2024/2025, KMK); "1248" teachers
//    (footnote "Nur Lehrkräfte in Realschulen und Gymnasien"), 3 % (2025/2026, StMUK). Gender shares not used.
// Our own: neuron.py, run with python3 -I on 3 November 2026: "UND: [0, 0, 0, 1]", "ODER: [0, 1, 1, 1]",
// "XOR-Treffer: 0 von 343". With the strict rule (x > 0 fires) the UND neuron gives [0, 0, 0, 0] (also run).
// Lesson family: a truth table is a complete test suite; one neuron draws one straight line (XOR fails), and the boundary
// convention at exactly 0 decides the AND gate.

const { DE } = require('../../scripts/nl/lib/market-de');

const PY = [
  'def heaviside(x):',
  '    return 1 if x >= 0 else 0',
  '',
  'def neuron(w1, w2, theta, x1, x2):',
  '    return heaviside(w1 * x1 + w2 * x2 - theta)',
  '',
  'eingaben = [(0, 0), (0, 1), (1, 0), (1, 1)]',
  'print("UND:", [neuron(1, 1, 2, a, b) for a, b in eingaben])',
  'print("ODER:", [neuron(1, 1, 1, a, b) for a, b in eingaben])',
  '',
  'xor = [0, 1, 1, 0]',
  'treffer = 0',
  'werte = range(-3, 4)',
  'for w1 in werte:',
  '    for w2 in werte:',
  '        for theta in werte:',
  '            if [neuron(w1, w2, theta, a, b) for a, b in eingaben] == xor:',
  '                treffer += 1',
  'print("XOR-Treffer:", treffer, "von", len(werte) ** 3)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'german', label: 'Informatik-Abitur Bayern' },
  slug: 'informatik-abitur-bayern',
  code: 'iab',
  accent: '#5A5587',
  accentRationale: 'Informatik-Abitur Bayern: a muted violet #5A5587 from alloc.tsv, calm enough for long exam tables; contrast 5.53 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Deutschland' }],
  routeLabel: 'Informatik-Abitur Bayern (Unterricht auf Englisch)',
  title: 'Informatik-Abitur Bayern 2027: G9-Prüfung, Termine, KI-Übung',
  description: 'Informatik-Abitur Bayern im G9: 255 oder 300 Minuten, drei von vier Aufgaben, Termine 21. April und 7. Mai 2027, plus KI-Übung in Python. Unterricht auf Englisch.',
  ogDescription: 'Das neue schriftliche Informatik-Abitur am bayerischen G9-Gymnasium: Aufbau, Bewertung, Inhaltsbereiche, Termine 2027 und eine eigene Übung zum künstlichen Neuron, gelöst in Python.',
  twitterDescription: 'Informatik-Abitur Bayern 2027: Aufbau der G9-Prüfung, Termine und eine gelöste Übung zum künstlichen Neuron.',
  pageName: 'Informatik-Abitur Bayern',
  webPageDescription: 'Wie das schriftliche Informatik-Abitur am neunjährigen bayerischen Gymnasium funktioniert, erklärt für Familien und Oberstufenschüler: Aufbau und Bewertung nach den Hinweisen des ISB, die Termine 2027 laut Bayerischem Ministerialblatt, die Stellung des Fachs in der Oberstufe und eine eigene Übungsaufgabe zum künstlichen Neuron in Python.',
  courseDescription: 'Vorbereitung für das bayerische Informatik-Abitur in der Profil- und Leistungsstufe, live per Video und nur auf Englisch: Listen und Bäume, Rekursion, Automaten, Informationssicherheit und künstliche Intelligenz, mit Java oder Python, als Gruppe oder einzeln.',
  crumbs: [{ name: 'Kurse', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Informatik-Abitur Bayern',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Deutschland' },
    { href: '#pruefung', label: 'Prüfung' },
    { href: '#termine', label: 'Termine' },
    { href: '#uebung', label: 'Übung' },
    { href: '#zeiten', label: 'Zeiten' }
  ],
  eyebrow: 'Bayern &middot; G9-Gymnasium &middot; Abitur Informatik',
  h1: 'Informatik-Abitur Bayern: Vorbereitung live auf Englisch',
  lede: 'Mit dem neunjährigen Gymnasium hat Bayern das schriftliche Informatik-Abitur neu geordnet: zwei Anforderungsniveaus, mehr Zeit, eine Wahl zwischen vier Aufgaben und künstliche Intelligenz als Prüfungsstoff. Diese Seite erklärt den Aufbau nach den Hinweisen des Staatsinstituts für Schulqualität und Bildungsforschung, nennt die Termine 2027 und rechnet eine eigene Übung zum künstlichen Neuron vollständig durch.',
  secondaryCta: { href: '#pruefung', label: 'Aufbau der Prüfung' },
  wa: 'Hallo Modern Age Coders, in Bayern steht für unser Kind 2027 Informatik im Abitur an. Gibt es eine Probestunde?',
  heroNote: 'Seit 2020 live unterrichtet &middot; mehr als 10.000 Lernende rund um die Welt &middot; Abiturstoff auf Englisch erklärt',
  spec: [
    ['Für', 'Jahrgangsstufe 11 bis 13, G9'],
    ['Sprachen', 'Java oder Python, dazu Prolog-Grundlagen'],
    ['Form', '15 bis 20 in der Gruppe oder allein'],
    ['Schwerpunkt', 'Aufgaben mit Stift, wie in der Prüfung'],
    ['Mentor', 'Immer derselbe, live aus Indien'],
    ['Einstieg', 'Erste Stunde gratis']
  ],
  capsuleQ: 'Kurz gesagt',
  capsule: 'Das schriftliche Informatik-Abitur in Bayern besteht seit dem G9 aus drei Aufgaben, die Prüflinge aus vier auswählen: 255 Minuten und 90 Bewertungseinheiten auf grundlegendem, 300 Minuten und 120 auf erhöhtem Niveau, ohne Computer. Modern Age Coders bereitet darauf live online vor, auf Englisch, im Kurs Informatik Oberstufe und Abitur, in der Gruppe oder einzeln, mit einem festen Mentor für Ihr Kind.',

  picks: {
    eyebrow: 'Passende Kurse',
    h2: 'Drei Kurse für die bayerische Oberstufe',
    lede: 'Der Abiturkurs deckt die Inhaltsbereiche ab, der KI-Kurs vertieft das Thema, das in Jahrgangsstufe 13 neu dazugekommen ist, und der Mathematikkurs begleitet das zweite Prüfungsfach vieler Informatikerinnen und Informatiker.',
    items: [
      { course: 'informatik-abitur-course-java-python', code: 'BY / 01', title: 'Informatik Oberstufe und Abitur', alt: 'Kursbild Informatik Oberstufe und Abitur mit Java und Python', note: 'Profil- und Leistungsstufe. Listen, Bäume, Rekursion, Automaten und Sicherheit, in Java oder Python, mit wöchentlicher Papieraufgabe.' },
      { course: 'ai-ml-masterclass-teens', code: 'BY / 02', title: 'KI und maschinelles Lernen für Jugendliche', alt: 'Kursbild KI und maschinelles Lernen für Jugendliche', note: 'Ab 13. Neuronen, Netze und Lernverfahren von Grund auf, mit eigenem Code statt fertiger Werkzeuge.' },
      { course: 'abitur-mathematics-course-in-english', code: 'BY / 03', title: 'Abitur-Mathematik auf Englisch', alt: 'Kursbild Abitur-Mathematik auf Englisch', note: 'Oberstufe. Analysis, Stochastik und Geometrie für die Mathematikprüfung, im selben Format.' }
    ]
  },

  sections: [
    {
      id: 'pruefung',
      eyebrow: 'Die schriftliche Prüfung im G9',
      h2: 'Wie ist das Informatik-Abitur in Bayern aufgebaut?',
      lede: 'Das ISB hat die Regeln für die schriftliche Prüfung ab 2026 in einem eigenen Dokument veröffentlicht, Stand November 2025. Die wichtigsten Punkte für beide Niveaus:',
      body: [
        { kind: 'table', numCols: [], caption: 'Schriftliches Informatik-Abitur am bayerischen G9-Gymnasium', head: ['Punkt', 'Grundlegendes Niveau (gA)', 'Erhöhtes Niveau (eA, Leistungsfach)'], rows: [
          ['Arbeitszeit inklusive Auswahlzeit', '255 Minuten', '300 Minuten'],
          ['Vorgelegte Aufgaben', 'vier', 'vier'],
          ['Zu bearbeiten', 'drei, gewählt von den Prüflingen', 'drei, gewählt von den Prüflingen'],
          ['Bewertungseinheiten', '3 mal 30, zusammen 90', '3 mal 40, zusammen 120'],
          ['Wochenstunden in der Qualifikationsphase', 'drei', 'fünf'],
          ['Computer', 'derzeit nicht vorgesehen', 'derzeit nicht vorgesehen'],
          ['Programmiersprache', 'wird auf dem Deckblatt genannt', 'wird auf dem Deckblatt genannt'],
          ['Prüfungsform', 'schriftlich oder mündlich', 'schriftlich oder mündlich']
        ] },
        { kind: 'source', html: 'Unsere Zusammenfassung der beiden ISB-Papiere zur Prüfung (Hinweise zur schriftlichen Abiturprüfung, Stand November 2025; Übersicht, Stand September 2023); Prüfungsformen nach dem Informatik-Monitor 2026/27 der Gesellschaft für Informatik, Seite Bayern. Gelesen am 2. und 3. November 2026.' },
        { kind: 'two', mt: true,
          leftH3: 'Welche Sprache auf dem Papier?',
          left: [
            'Der Fachausschuss trägt vor der Prüfung die erlaubte objektorientierte Programmiersprache oder die erlaubten Sprachen auf dem Deckblatt ein. In den Lösungen des Erwartungshorizonts verwendet das ISB Java und Python, für Wissensbasen im Lernbereich Künstliche Intelligenz des Leistungsfachs außerdem die logische Sprache Prolog.',
            'Vergessene Strichpunkte und ähnliche Schreibfehler sollen laut ISB weiterhin zurückhaltend bewertet werden. Entscheidend ist, ob der Algorithmus stimmt.'
          ],
          rightH3: 'Was sich gegenüber früher geändert hat',
          right: [
            'Das ISB nennt eine längere Arbeitszeit und auf grundlegendem Niveau weniger Bewertungseinheiten insgesamt. Außerdem müssen die Grenzen im Bewertungsraster jetzt nur noch erreicht, nicht mehr überschritten werden.',
            'Neu ist auch, dass Prüflinge ins Aufgabenheft schreiben und markieren dürfen. Deshalb tragen sie ihren Namen auf dem Deckblatt ein und geben das Heft mit ab.'
          ] },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Bewertungsraster ab 2026, Auszug: mindestens zu erreichende Bewertungseinheiten', head: ['Notenpunkte', 'gA (max. 90 BE)', 'eA (max. 120 BE)'], rows: [
          ['15', '86', '114'],
          ['11', '68', '90'],
          ['8', '54', '72'],
          ['5', '41', '54'],
          ['1', '18', '24']
        ] },
        { kind: 'source', html: 'Auszug aus dem Bewertungsraster in den ISB-Hinweisen zur schriftlichen Abiturprüfung (Stand November 2025) und im ISB-Kontaktbrief Informatik 2025. Das vollständige Raster nennt alle Stufen von 0 bis 15 Punkten. Wir vergeben keine Noten; die Tabelle dient nur der Orientierung.' }
      ]
    },
    {
      id: 'inhalte',
      eyebrow: 'Vier Inhaltsbereiche',
      h2: 'Welche Themen können in Bayern drankommen?',
      lede: 'Jede der vier Aufgaben bezieht sich schwerpunktmäßig auf einen Inhaltsbereich. Die Zuordnung der Lernbereiche unterscheidet sich zwischen den Niveaus.',
      body: [
        { kind: 'table', numCols: [], caption: 'Inhaltsbereiche der schriftlichen Prüfung nach Niveau', head: ['Bereich', 'gA: Lernbereiche', 'eA: Lernbereiche'], rows: [
          ['I', 'Listen, Binärbäume', 'Rekursion, Listen, Bäume'],
          ['II', 'Rekursion, nebenläufige Prozesse, Funktionsweise eines Rechners', 'Funktionsweise eines Rechners; Betriebssysteme, Prozesse und Nebenläufigkeit'],
          ['III', 'Formale Sprachen und Automaten, Grenzen der Berechenbarkeit', 'Informationssicherheit, Internet der Dinge, künstliche Intelligenz'],
          ['IV', 'Informationssicherheit, künstliche Intelligenz', 'Formale Sprachen und Automaten; Algorithmen, Komplexität und Berechenbarkeit']
        ] },
        { kind: 'source', html: 'Quelle: ISB, Informatik: Hinweise zur schriftlichen Abiturprüfung, Abschnitt Inhaltsbereiche (gegen die gedruckten Tabellen geprüft am 3. November 2026). Der Lernbereich Praktische Softwareentwicklung, Projekt gehört zu keinem Bereich, sondern kann laut ISB als Querschnittthema in allen Aufgaben geprüft werden.' },
        { kind: 'p', mt: true, html: 'Das ISB setzt außerdem Grundlagen aus früheren Jahrgangsstufen voraus: vor allem objektorientierte Modellierung und Programmierung aus Jahrgangsstufe 9 und 10, die Graphen aus Jahrgangsstufe 11 als Basis für Teile der Rekursion und den Lernbereich Künstliche Intelligenz aus Jahrgangsstufe 11. Wer am naturwissenschaftlich-technologischen Gymnasium Informatik seit Jahrgangsstufe 9 hat, startet damit anders als jemand aus einem anderen Zweig.' },
        { kind: 'two', mt: true,
          leftH3: 'Drei Wege ins Fach',
          left: [
            'Laut Informatik-Monitor 2026/27 haben in Jahrgangsstufe 11 alle Ausbildungsrichtungen zwei verpflichtende Informatikstunden: Informatik am naturwissenschaftlich-technologischen Gymnasium, Wirtschaftsinformatik am wirtschaftswissenschaftlichen, spät beginnende Informatik in allen anderen Zweigen.',
            'In der Qualifikationsphase gibt es Informatik am NTG dreistündig auf grundlegendem oder fünfstündig auf erhöhtem Niveau; spät beginnende Informatik läuft dreistündig auf grundlegendem Niveau.'
          ],
          rightH3: 'Schriftlich oder mündlich',
          right: [
            'Schriftlich prüfen lassen kann man nur das Fach Informatik. In spät beginnender Informatik und in Wirtschaftsinformatik ist laut Monitor nur eine mündliche Prüfung möglich.',
            'Das Kolloquium in Informatik besteht nach der ISB-Übersicht aus zwei Teilen von je 15 Minuten, mit 30 Minuten Vorbereitungszeit davor; der erste Teil beginnt mit einem zehnminütigen Kurzreferat.'
          ] }
      ]
    },
    {
      id: 'termine',
      eyebrow: 'Abitur 2027',
      h2: 'Wann wird das Informatik-Abitur 2027 in Bayern geschrieben?',
      lede: 'Das Kultusministerium hat die Termine im Bayerischen Ministerialblatt 2025 Nr. 354 bekannt gemacht. Informatik ist dort nicht einzeln aufgeführt, sondern fällt unter die Sammeltermine.',
      body: [
        { kind: 'table', numCols: [], caption: 'Termine der Abiturprüfung 2027 in Bayern, soweit sie Informatik betreffen', head: ['Datum', 'Was', 'Gilt für Informatik'], rows: [
          ['21. April 2027', 'alle Fächer auf erhöhtem Niveau, außer Deutsch, Mathematik, Englisch, Französisch, Biologie, Chemie, Physik', 'Leistungsfach (eA), schriftlich'],
          ['7. Mai 2027', 'alle Fächer auf grundlegendem Niveau, außer Englisch, Französisch, Biologie, Chemie, Physik', 'Informatik auf gA, schriftlich'],
          ['31. Mai bis 4. Juni 2027', 'erste Prüfungswoche Kolloquium', 'mündliche Prüfung'],
          ['7. bis 11. Juni 2027', 'zweite Prüfungswoche Kolloquium', 'mündliche Prüfung'],
          ['25. Juni 2027', 'Entlassung der Abiturientinnen und Abiturienten', 'alle']
        ] },
        { kind: 'source', html: 'Quelle: Bekanntmachung des Bayerischen Staatsministeriums für Unterricht und Kultus vom 18. August 2025, BayMBl. 2025 Nr. 354, Abiturprüfung 2027, Nr. 1. Die Spalte "Gilt für Informatik" ist unsere Zuordnung, weil Informatik nicht unter den Ausnahmen genannt ist.' },
        { kind: 'p', mt: true, html: 'Zwischen den beiden schriftlichen Terminen liegen gut zwei Wochen. Wer Informatik als Leistungsfach hat, schreibt schon am 21. April 2027 und damit noch vor Deutsch und Mathematik. Die Vorbereitung muss daher früher abgeschlossen sein als in den meisten anderen Fächern.' },
        { kind: 'two', mt: true,
          leftH3: 'Seit wann es diese Prüfung gibt',
          left: [
            'Laut ISB-Kontaktbrief 2025 wurden im Mai 2026 zum ersten Mal schriftliche Abiturprüfungen in Informatik auf zwei Anforderungsniveaus geschrieben. Der Jahrgang 2027 ist also erst der zweite mit diesem Format.',
            'Im selben Brief schreibt das ISB, dass es Informatik als Leistungsfach erstmals gibt und der Lernbereich Künstliche Intelligenz zum ersten Mal in Jahrgangsstufe 13 unterrichtet wurde.'
          ],
          rightH3: 'Wie viele Lehrkräfte und Lernende',
          right: [
            'Elf Prozent: So hoch war 2024/2025 in Bayern der Anteil der Lernenden in der Sekundarstufe II, die Informatik belegt hatten. Die Zahl stammt von der Kultusministerkonferenz und steht im Informatik-Monitor.',
            'Für 2025/2026 nennt das Kultusministerium 1.248 Informatiklehrkräfte an Realschulen und Gymnasien, das sind 3 Prozent der Lehrkräfte dieser Schularten.'
          ] }
      ]
    },
    {
      id: 'uebung',
      tint: 'tint',
      eyebrow: 'Eine Übungsaufgabe von uns',
      h2: 'Wie rechnet man ein künstliches Neuron im Abitur?',
      lede: 'Künstliche Intelligenz steht in Bayern auf beiden Niveaus im Prüfungsstoff. Das ISB setzt dafür die Heaviside-Funktion und die Identitätsfunktion als Aktivierungsfunktionen voraus und legt fest: Die Heaviside-Funktion ist 0 für x &lt; 0 und 1 für x ≥ 0, ein Neuron mit genau 0 feuert also. Die folgende Aufgabe ist unsere eigene, keine echte Prüfungsaufgabe.',
      body: [
        { kind: 'p', html: '<strong>Aufgabe (unsere).</strong> Ein Neuron hat zwei Eingänge x1 und x2 mit den Werten 0 oder 1, die Gewichte w1 und w2 und den Schwellenwert θ. Es berechnet H(w1 · x1 + w2 · x2 − θ) mit der Heaviside-Funktion H. a) Zeigen Sie mit einer Wertetabelle, dass w1 = w2 = 1 und θ = 2 die UND-Verknüpfung ergibt. b) Welche Werte von θ ergeben bei denselben Gewichten die ODER-Verknüpfung? c) Begründen Sie, warum kein einzelnes Neuron dieser Art die XOR-Verknüpfung berechnet.' },
        { kind: 'table', numCols: [0, 1, 2, 3], caption: 'Lösung zu a): Wertetabelle für w1 = w2 = 1, θ = 2 (unsere)', head: ['x1', 'x2', 'Summe minus θ', 'Ausgabe H'], rows: [
          ['0', '0', '-2', '0'],
          ['0', '1', '-1', '0'],
          ['1', '0', '-1', '0'],
          ['1', '1', '0', '1']
        ] },
        { kind: 'p', mt: true, html: 'Die letzte Zeile ist der Kern der Aufgabe. Die gewichtete Summe minus θ ist genau 0, und nur weil H(0) = 1 gilt, feuert das Neuron. Mit der Regel "feuert erst bei x &gt; 0" käme für alle vier Eingaben 0 heraus, das Neuron wäre nutzlos. Diese Konvention steht deshalb ausdrücklich in den Hinweisen des ISB.' },
        { kind: 'p', html: '<strong>Zu b).</strong> Mit θ = 1 liefert die Tabelle 0, 1, 1, 1, also ODER. Allgemein muss θ größer als 0 sein (sonst feuert schon 0, 0) und höchstens 1 (sonst feuern 0, 1 und 1, 0 nicht); jeder Wert mit 0 &lt; θ ≤ 1 passt.' },
        { kind: 'code', label: 'neuron.py: Wertetabellen und eine Suche nach XOR', lang: 'Python', code: PY, note: 'Ausgabe, von uns mit Python 3 ausgeführt: <code>UND: [0, 0, 0, 1]</code>, <code>ODER: [0, 1, 1, 1]</code>, <code>XOR-Treffer: 0 von 343</code>.' },
        { kind: 'p', mt: true, html: '<strong>Zu c).</strong> Das Programm probiert 343 ganzzahlige Kombinationen und findet keine, die XOR ergibt. Das ist ein Hinweis, aber noch kein Beweis, denn es gibt unendlich viele Gewichte. Der Beweis geht so: XOR verlangt H(w1 − θ) = 1 und H(w2 − θ) = 1, also w1 ≥ θ und w2 ≥ θ, und außerdem H(−θ) = 0, also θ &gt; 0. Addiert man die ersten beiden Bedingungen, folgt w1 + w2 ≥ 2θ &gt; θ, also feuert das Neuron auch bei 1, 1. XOR verlangt dort aber 0. Ein einzelnes Neuron trennt die Eingaben mit einer Geraden, und für XOR gibt es keine solche Gerade.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Die Wertetabelle ist der Test.</strong> Bei zwei Eingängen gibt es nur vier Fälle. Schreiben Sie alle vier hin, bevor Sie behaupten, ein Neuron leiste etwas.',
          '<strong>Die Grenze genau ansehen.</strong> Liegt eine Summe genau auf dem Schwellenwert, entscheidet die Definition von H. Prüfen Sie, welche Konvention die Aufgabe vorgibt.',
          '<strong>Suchen ist kein Beweis.</strong> Ein Programm, das nichts findet, macht eine Vermutung plausibel. Im Abitur zählt die Begründung mit Ungleichungen.'
        ] }
      ]
    },
    {
      id: 'englisch',
      eyebrow: 'Unterricht auf Englisch',
      h2: 'Wie bereiten wir auf Englisch auf ein bayerisches Abitur vor?',
      lede: 'Die Stunden laufen ausschließlich auf Englisch, die Prüfung ist auf Deutsch. Das passt besser zusammen, als es klingt, denn die Fachsprache der Informatik ist zu einem großen Teil englisch.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Begriffe doppelt lernen', p: 'Neuron, Schwellenwert, Aktivierungsfunktion: Der Mentor nennt jeweils den englischen Begriff (neuron, threshold, activation function) und den deutschen aus dem Lehrplan, bis beide sicher sitzen.' },
          { h3: 'Aufgabentexte auf Deutsch lesen', p: 'Wir arbeiten mit deutschen Aufgabenstellungen aus dem Unterricht Ihres Kindes und besprechen sie auf Englisch. So bleibt der Wortlaut der Prüfung vertraut.' },
          { h3: 'Tempo, das passt', p: 'Ihr Mentor unterrichtet von Indien aus, immer live über Video. Er spricht deutlich, sagt Schwieriges ein zweites Mal mit schlichteren Worten und lässt Zeit für Notizen.' }
        ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Einstieg am eigenen Material.</strong> Die erste Stunde beginnt mit einer Aufgabe aus dem aktuellen Kurshalbjahr Ihres Kindes.',
          '<strong>Vier Bereiche, ein Plan.</strong> Wir gehen die Inhaltsbereiche des passenden Niveaus durch und gewichten nach den Lücken, nicht nach der Reihenfolge im Lehrplan.',
          '<strong>Auswahl üben.</strong> Weil die Prüflinge selbst drei von vier Aufgaben wählen, üben wir auch die Auswahl: in den ersten Minuten entscheiden, welche Aufgabe man auslässt.',
          '<strong>Unter Prüfungsbedingungen.</strong> Vor dem Termin schreiben wir mindestens eine vollständige Aufgabe auf Papier in der Zeit, die das ISB vorsieht.'
        ] }
      ]
    },
    {
      id: 'zeiten',
      eyebrow: 'Unterrichtszeiten',
      h2: 'Wann können die Stunden stattfinden?',
      lede: 'Die Stunden werden nach dem bayerischen Schultag geplant; der Mentor stellt sich auf Ihre Zeitzone ein. Drei Beispiele:',
      body: [
        { kind: 'table', numCols: [], caption: 'Beispielzeiten in Bayern und beim Mentor in Indien', head: ['Uhrzeit in Bayern', 'Indien, Winter (bis 27. März 2027)', 'Indien, Sommer (ab 28. März 2027)'], rows: [
          ['13:30', '18:00', '17:00'],
          ['18:30', '23:00', '22:00'],
          ['Sonntag 10:00', '14:30', '13:30']
        ] },
        { kind: 'source', html: 'Gesetzliche Zeit nach dem Einheiten- und Zeitgesetz: MEZ (UTC+1) im Winter, MESZ (UTC+2) im Sommer. Die Sommerzeit ging am 25. Oktober 2026 zu Ende und beginnt 2027 am 28. März. Indien hat ganzjährig UTC+5:30 und liegt damit 4 Stunden 30 Minuten (Winter) beziehungsweise 3 Stunden 30 Minuten (Sommer) vorn. Beispiele, keine festen Termine.' },
        { kind: 'p', mt: true, html: 'Vor dem 21. April und dem 7. Mai 2027 nehmen viele Familien zusätzliche Einzelstunden. Die Uhrzeit wählen Sie bei der Buchung in Ihrer eigenen Zeitzone.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Fortschritt',
    h2: 'Woran man den Stand vor dem Abitur erkennt',
    lede: 'Unsere eigenen Stufen für die bayerische Oberstufe. Sie sind keine Noten und haben mit dem Bewertungsraster der Schule nichts zu tun.',
    table: { caption: 'Fünf Stufen bis zur Prüfung (unsere Einteilung)', head: ['Stufe', 'Etwa wann', 'Ihr Kind kann'], rows: [
      ['1. Modellieren', 'Jahrgangsstufe 11', 'eine Situation als Klassendiagramm darstellen und in Java oder Python umsetzen'],
      ['2. Rekursiv arbeiten', 'Jahrgangsstufe 12, erstes Halbjahr', 'Listen und Bäume rekursiv durchlaufen und den Aufruf-Ablauf aufschreiben'],
      ['3. Theorie anwenden', 'Jahrgangsstufe 12, zweites Halbjahr', 'Automaten konstruieren und Grenzen der Berechenbarkeit erklären'],
      ['4. KI und Sicherheit', 'Jahrgangsstufe 13', 'Neuronen von Hand rechnen und Verschlüsselungsverfahren vergleichen'],
      ['5. Prüfungsreif', 'vor April oder Mai 2027', 'drei von vier Aufgaben in der vorgesehenen Zeit lösen und die Auswahl begründen']
    ] },
    left: { h3: 'Für Eltern', ps: [
      'Monatlich erfahren Sie, welche Stufe erreicht ist und woran als Nächstes gearbeitet wird.',
      'Stufe 3 ist für viele die abstrakteste. Hier hilft ruhiges, wiederholtes Üben mehr als Tempo.'
    ] },
    right: { h3: 'Tipps für die Prüflinge', ps: [
      'Machen Sie zu jeder Aufgabe zuerst eine Tabelle aller Fälle. Danach rechnen.',
      'Lesen Sie in jeder Übung alle vier Aufgaben an, bevor Sie anfangen. Die Auswahl ist Teil der Prüfung.'
    ] }
  },

  catalogue: {
    eyebrow: 'Weitere Kurse',
    h2: 'Neun weitere Kurse für Informatik, KI und Mathematik',
    lede: 'Zum Vertiefen einzelner Inhaltsbereiche oder als Ausgleich zum Schulstoff. Gleicher Ablauf, gleiche Unterrichtssprache.',
    bands: [
      { num: 'I', h3: 'Programmieren', sub: '13 bis 19 Jahre', courses: [
        { code: 'BY / CODE / 01', slug: 'python-complete-masterclass-teens', title: 'Python für Jugendliche', blurb: 'Von Grundlagen bis zu eigenen Programmen.' },
        { code: 'BY / CODE / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java für Jugendliche', blurb: 'Objektorientierung sauber aufgebaut.' },
        { code: 'BY / CODE / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithmen und Datenstrukturen', blurb: 'Rekursion, Listen und Bäume mit Übung.' }
      ] },
      { num: 'II', h3: 'Sicherheit und Systeme', sub: '13 bis 19 Jahre', courses: [
        { code: 'BY / SYS / 01', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'IT-Sicherheit', blurb: 'Verschlüsselung und Angriffe verstehen, um zu schützen.' },
        { code: 'BY / SYS / 02', slug: 'competitive-programming-for-teens-course', title: 'Wettbewerbsprogrammierung', blurb: 'Komplexität und schnelle Lösungen.' },
        { code: 'BY / SYS / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data Science', blurb: 'Daten auswerten und darstellen mit Python.' }
      ] },
      { num: 'III', h3: 'Mathematik', sub: '15 bis 19 Jahre', courses: [
        { code: 'BY / MATHE / 01', slug: 'statistics-probability-maths-course', title: 'Stochastik', blurb: 'Wahrscheinlichkeit mit Verständnis.' },
        { code: 'BY / MATHE / 02', slug: 'maths-through-coding', title: 'Mathematik mit Code', blurb: 'Rechnen und Prüfen mit Python.' },
        { code: 'BY / MATHE / 03', slug: 'complete-high-school-mathematics-mastery', title: 'Mathematik der Oberstufe', blurb: 'Lücken schließen vor dem Abitur.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Ablauf',
    h2: 'So läuft die Vorbereitung in Bayern',
    lede: 'Jede Woche gibt es zwei Termine zu je rund sechzig Minuten, geleitet vom immer gleichen Mentor. Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche.',
    slots: [
      { time: 'Mittag oder Abend', l: 'Nach dem Unterricht, je nach Stundenplan.' },
      { time: 'Sonntag', l: 'Vormittags, wenn die Woche voll ist.' },
      { time: 'Einzeln', l: 'Vor Klausuren und vor den Terminen 2027.' }
    ],
    cells: [
      { h3: 'Fester Mentor', p: 'Kennt Niveau, Zweig und Kursstand.' },
      { h3: 'Nach Inhaltsbereichen', p: 'Die vier Bereiche des ISB geben die Struktur.' },
      { h3: 'Papier vor Rechner', p: 'Erst schreiben, dann am Computer prüfen.' },
      { h3: 'Klares Englisch', p: 'Fachwörter immer auch auf Deutsch.' },
      { h3: 'Rückmeldung', p: 'Einmal im Monat an die Eltern.' },
      { h3: 'Zwei Formen', p: 'Gruppe mit fünfzehn bis zwanzig oder allein.' }
    ]
  },

  projectsH2: 'Projekte unserer Lernenden',
  projectsLede: 'Neben der Prüfung entstehen eigene Programme. Einige sehen Sie unten; weitere stehen auf <a class="ag-inline-link" href="/student-labs">Student labs</a> (auf Englisch).',
  reviewsLede: 'Was Eltern und Lernende auf Google schreiben, unübersetzt im Original.',

  fees: {
    h2: 'Was die Vorbereitung kostet',
    lede: 'Ein Monatsbeitrag deckt acht Live-Stunden ab. Die Euro-Angaben beruhen auf dem Referenzkurs der Europäischen Zentralbank, abgebucht wird aber in US-Dollar. Den Wechsel übernimmt Ihre Bank, sodass der Betrag auf dem Auszug leicht anders aussehen kann.',
    free: ['Erste Stunde ohne Kosten', 'Einordnung an einer Kursaufgabe', 'Keine Zahlungsdaten nötig'],
    group: ['Fünfzehn bis zwanzig Lernende', 'Ein Mentor durchgehend', 'Zwei Stunden in der Woche', 'Monatlich beendbar'],
    one: ['Unterricht nur für Ihr Kind', 'Plan nach Niveau und Zweig', 'Zeiten frei vereinbar']
  },

  faq: {
    eyebrow: 'Fragen und Antworten',
    h2: 'Informatik-Abitur Bayern: häufige Fragen',
    items: [
      { q: 'Findet der Unterricht auf Deutsch statt?', a: 'Nein. Wir unterrichten nur auf Englisch, live, mit Mentoren, die Tempo und Aussprache an Ihr Kind anpassen. Für Informatik ist das ein Vorteil: Ihr Kind trainiert Programmieren und Englisch zugleich, und die Fachbegriffe besprechen wir in beiden Sprachen.' },
      { q: 'Wie lange dauert das schriftliche Informatik-Abitur in Bayern?', a: 'Nach den Hinweisen des ISB 255 Minuten auf grundlegendem und 300 Minuten auf erhöhtem Anforderungsniveau, jeweils einschließlich der Zeit für die Auswahl der Aufgaben.' },
      { q: 'Dürfen die Prüflinge Aufgaben auswählen?', a: 'Ja. Vorgelegt werden vier Aufgaben, drei davon werden bearbeitet. Jede Aufgabe gehört schwerpunktmäßig zu einem von vier Inhaltsbereichen.' },
      { q: 'Welche Programmiersprache gilt im bayerischen Informatik-Abitur?', a: 'Die erlaubte objektorientierte Sprache steht auf dem Deckblatt, festgelegt vom Fachausschuss. Im Erwartungshorizont verwendet das ISB Java und Python, für Wissensbasen im Leistungsfach außerdem Prolog.' },
      { q: 'Wann ist das Informatik-Abitur 2027 in Bayern?', a: 'Auf erhöhtem Niveau am 21. April 2027, auf grundlegendem Niveau am 7. Mai 2027. Das ergibt sich aus der Bekanntmachung im Bayerischen Ministerialblatt 2025 Nr. 354, in der Informatik unter die Sammeltermine fällt.' },
      { q: 'Kommt künstliche Intelligenz im Abitur vor?', a: 'Ja, auf beiden Niveaus. Das ISB setzt die Heaviside- und die Identitätsfunktion als Aktivierungsfunktionen voraus und legt fest, dass ein Neuron bei genau 0 feuert.' },
      { q: 'Kann man spät beginnende Informatik schriftlich prüfen lassen?', a: 'Nein. Laut Informatik-Monitor 2026/27 ist in spät beginnender Informatik und in Wirtschaftsinformatik nur eine mündliche Abiturprüfung möglich.' },
      { q: 'Wann finden die Stunden statt?', a: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche. 13:30 Uhr in Bayern ist im Winter 18:00 Uhr in Indien.' },
      { q: 'Wie wird bezahlt?', a: 'Einmal im Monat, abgebucht in US-Dollar. Damit Sie den Betrag einschätzen können, zeigen wir ihn in Euro, gerechnet mit dem Referenzkurs der Europäischen Zentralbank. Für die Probestunde zahlen Sie nichts.' },
      { q: 'Ersetzen Sie den Unterricht in der Schule?', a: 'Nein. Wir unterrichten neben der Schule, vergeben keine Noten und sind weder mit dem Kultusministerium noch mit dem ISB verbunden. Was im Abitur zählt, legen Schule und Ministerium fest.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Weiterlesen',
    h2: 'Mehr für Familien in Deutschland',
    lede: 'Überwiegend englischsprachige Seiten.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Alle Angebote für Deutschland.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Nachhilfe von Klasse 5 bis 13.' },
      { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and ML classes in Germany', p: 'KI für Jugendliche und Erwachsene.' },
      { href: '/abitur-computer-science-in-english', label: 'Abitur computer science in English', p: 'Informatik-Abitur im Überblick.' },
      { href: '/learn-to-think-not-copy-ai-germany', label: 'Learn to think, not copy AI', p: 'Selbst denken statt KI abschreiben.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'So sieht eine Live-Stunde aus.' }
    ]
  },

  start: {
    h2: 'Kostenlose Probestunde für Bayern buchen',
    lede: 'Legen Sie für die erste Stunde eine Schulaufgabe oder Klausur aus Jahrgangsstufe 12 oder 13 bereit. Der Mentor arbeitet eine Aufgabe daraus mit Ihrem Kind durch und empfiehlt danach Niveau, Kurs und Zeitplan bis April oder Mai 2027.',
    readFirst: 'Lesenswert vorab: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> über den Ablauf und <a class="ag-inline-link" href="/learn-to-think-not-copy-ai-germany">Learn to think, not copy AI</a> über unseren Umgang mit KI (beide auf Englisch).',
    note: 'Unterricht live online, nur auf Englisch, mit Mentoren in Indien. Über WhatsApp erreichen Sie uns am schnellsten.',
    formNote: 'Gratis, ohne Bindung, ohne Kreditkarte.'
  },

  footer: {
    cols: [
      { h4: 'Kurse', links: [
        { href: '/courses/informatik-abitur-course-java-python', label: 'Informatik Abitur' },
        { href: '/courses/ai-ml-masterclass-teens', label: 'KI für Jugendliche' },
        { href: '/courses/abitur-mathematics-course-in-english', label: 'Mathematik Abitur' },
        { href: '/courses', label: 'Alle Kurse' }
      ] },
      { h4: 'Deutschland', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'KI in Deutschland' },
        { href: '/student-labs', label: 'Projekte' }
      ] }
    ],
    bottomRight: 'Bei genau null feuert das Neuron'
  },

  personalityCss: `
.ag-root.ag-iab .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-iab .ag-capsule { border-left-width: 3px; border-radius: 2px; }
.ag-root.ag-iab .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-iab .ag-table td:first-child { font-weight: 600; }
.ag-root.ag-iab .ag-code-head b { letter-spacing: 0.01em; }
`,

  dossier: {
    curriculumAuthority: 'ISB Bayern: Hinweise zur schriftlichen Abiturprüfung Informatik (Stand November 2025), Informatik Übersicht (Stand September 2023), Kontaktbrief Informatik 2025; StMUK Bekanntmachung BayMBl. 2025 Nr. 354 (Abiturprüfung 2027); GI Informatik-Monitor 2026/27, Bayern page; Einheiten- und Zeitgesetz. Read 2 and 3 November 2026. Exercise our own.',
    localProject: 'One artificial neuron with the Bavarian Heaviside convention (H(0) = 1): an original Python exercise; AND with w1 = w2 = 1, theta = 2 gives [0, 0, 0, 1] only because H(0) = 1 (strict > gives [0, 0, 0, 0]); OR with theta = 1 gives [0, 1, 1, 1]; a search over 343 integer settings finds 0 for XOR, then a short inequality proof. Lesson family: a truth table is a complete test suite; one neuron draws one straight line.',
    requiredMentions: ['UND: [0, 0, 0, 1]', 'XOR-Treffer: 0 von 343', 'w1 + w2 ≥ 2θ', '3 mal 40, zusammen 120', '1.248 Informatiklehrkräfte', 'Bekanntmachung im Bayerischen Ministerialblatt 2025 Nr. 354', 'Bei genau null feuert das Neuron', 'jeder Wert mit 0 &lt; θ ≤ 1 passt'],
    sources: [
      { claim: 'G9 written Informatik Abitur: three of four tasks, 255 and 300 minutes, 90 and 120 BE, languages on the cover sheet, Java and Python and Prolog in the Erwartungshorizont, no computer, Inhaltsbereiche, Bewertungsraster.', url: 'https://www.isb.bayern.de/fileadmin/user_upload/Gymnasium/IlluPA/Inf/IlluPA_Informatik_Hinweise_zur_schriftlichen_Pruefung.pdf' },
      { claim: 'Kolloquium two parts of 15 minutes, 30 minutes preparation; gA three hours, eA five hours.', url: 'https://www.isb.bayern.de/fileadmin/user_upload/Gymnasium/IlluPA/Inf/IlluPA_Informatik_Uebersichtsblatt.pdf' },
      { claim: 'First G9 written exams May 2026; Leistungsfach new; KI in Jgst. 13; Heaviside H(0) = 1.', url: 'https://www.isb.bayern.de/fileadmin/user_upload/Gymnasium/Kontaktbriefe/Informatik/kontaktbrief_informatik_2025.pdf' },
      { claim: 'Abitur 2027 dates: eA 21 April 2027, gA 7 May 2027, Kolloquium weeks, 25 June 2027.', url: 'https://www.verkuendung-bayern.de/files/baymbl/2025/354/baymbl-2025-354.pdf' },
      { claim: 'Bayern Oberstufe rules, oral-only subjects, 11 percent, 1,248 teachers.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/bayern' }
    ],
    rejectedClaims: [
      'German-language teaching: English only, said plainly.',
      'Any grade promise or reading of the Bewertungsraster as our assessment: refused; we award no grades.',
      'Reproducing ISB illustrative tasks or real Abitur tasks: refused; the neuron exercise is our own.',
      'A specific Informatik date in the BayMBl list: Informatik is not named; we derive it from the collective dates and say so.',
      'Gender shares from the Informatik-Monitor: not used.',
      'Recommending 18+ AI tools to pupils: none named.'
    ]
  }
};
