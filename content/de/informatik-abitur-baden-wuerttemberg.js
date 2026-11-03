'use strict';
// Informatik-Abitur Baden-Württemberg (ag- German-language door, Germany cluster row DE087, P3).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; formal "Sie";
// euro shown, USD charged. We teach alongside school and award no grades.
// Angle: only Baden-Württemberg facts. The written Informatik Abitur exists only as Leistungsfach at Schulversuch schools;
// Facherlass 2027: Pflichtteil A plus three of four Wahlaufgaben B1 to B4, 270 minutes, programming in the course
// language, IQB Formelsammlung newly allowed; 4 x 30 = 120 BE; date Monday 19 April 2027. Original exercise from one of
// the Pflichtteil task types the Abiturkommission lists ("zweitgrößtes Element bestimmen"), in Java and Python.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/informatik-abitur-baden-wuerttemberg/,
// fetched 3 November 2026 from km.baden-wuerttemberg.de; PDF text via PDFKit):
//  - KM BW, Facherlass für die Abiturprüfung 2027, Stand 09.09.2025 (Facherlass_2027_Stand_09.09.2025.pdf), section 29
//    Informatik, Az KM35-6615-140/4: "Der Abiturjahrgang 2027 wird – mit Ausnahme der am Schulversuch Informatik
//    teilnehmenden Schulen – nach dem Bildungsplan 2004 unterrichtet."; "Schulen, die nicht am Schulversuch Informatik
//    teilnehmen, können nur das bisherige Wahlfach nach dem Bildungsplan 2004 anbieten"; Leistungsfach (Schulversuch) on
//    Bildungsplan 2016; not examined "3.3.3. Rechner und Netze, inhaltsbezogene Kompetenzen (8) bis (13) (von-Neumann-
//    Modellmaschine, Rechnernetze)"; "in den ersten drei Schulhalbjahren jeweils mindestens zwei Klausuren und im vierten
//    Schulhalbjahr mindestens eine Klausur"; "Der zeitliche Umfang einer Klausur beträgt in der Regel zwei
//    Unterrichtsstunden."; "Bearbeitungszeit: 270 Minuten einschließlich Auswahlzeit"; aids IQB "mathematisch-
//    naturwissenschaftliche Formelsammlung", "Nachschlagewerke zur deutschen Rechtschreibung", WTR; B1 "Entwurf / Analyse
//    von Programmen und Programmiertechniken", B2 "Algorithmen und Datenstrukturen", B3 "Automaten / Formale Sprachen /
//    technische Informatik", B4 "Datenbanken / Kryptologie / Datenschutz"; "wählt drei der vier Wahlaufgaben aus Gruppe B";
//    "Die Implementierung von Programmen oder Programmteilen erfolgt in der im jeweiligen Kurs eingeführten
//    Programmiersprache."; "An eine Fehlerbehandlung von Falscheingaben ist nicht gedacht."
//  - Abiturkommission Informatik BW for the KM, "Leistungsfach Informatik Schriftliche Abiturprüfung ab 2027, Version 3.0
//    vom 20.10.2025" (INF_ABI27_MusterFundus_V3.0.pdf): "Ab der Abiturprüfung 2024 werden statt 60 Verrechnungspunkten (VP)
//    insgesamt 120 Bewertungseinheiten (BE) vergeben."; "Ab der Abiturprüfung 2027 ist die „mathematisch-
//    naturwissenschaftliche Formelsammlung“ des IQB ... als Hilfsmittel zugelassen."; structure "bisher 2017 – 2022
//    Bearbeitungszeit: 240 min"; "Lehrerwahl" before, "Schülerwahl (3 der 4 Wahlaufgaben)" since 2023; "Jeder dieser
//    Aufgabenteile umfasst 30 Bewertungseinheiten."; Pflichtteil "Jede Aufgabe wird in der Regel mit 4 bis 6 BE bewertet,
//    somit ergeben sich etwa fünf bis sieben Aufgaben."; task types incl. "Array oder Zeichenketten-Implementationen
//    (z. B. zweitgrößtes Element bestimmen, Mittelwert, Palindromtest)", "Codierung (Zweierkomplement ...)", "Logische
//    Schaltungen (Halbaddierer / Volladdierer ...)"; Wahlbereich lists (Mealy-Automaten, Kryptologie, Hashfunktionen).
//  - KM BW, Abitur 2027 Detailplan (Abitur_2027_Detailplan.pdf): "Informatik Montag 19. April 2027 09.00 - 13.30 Uhr";
//    Nachtermin "Informatik Montag 10. Mai 2027 09.00 - 13.30 Uhr". Gesamtplan (Abitur_2027_Gesamtplan.pdf): written exams
//    "Freitag 16. April 2027" to "Mittwoch 5. Mai 2027"; first results "Mittwoch 23. Juni 2027"; oral exams "Montag
//    28. Juni 2027" to "Donnerstag 8. Juli 2027".
//  - GI Informatik-Monitor 2026/27, BW page (infmon-bw.txt): FACTS 67; Q-phase "zweistündiges Wahlfach oder als
//    dreistündiges Basisfach ... fünfstündiges Leistungsfach"; "Im Wahlfach Informatik und im Basisfach Informatik kann eine
//    mündliche Abiturprüfung abgelegt werden."; "Eine Programmierumgebung ist als Hilfsmittel nicht erlaubt."; "Als
//    Prüfungsfach ist Informatik keinem Aufgabenfeld zugeordnet"; new Bildungsplan "Inkraftsetzung für August 2027"; NIT
//    "zum Schuljahr 2027/2028"; Versuchsfassung "aus dem Jahr 2020"; "Anteil SuS mit Informatik in der Sek II 7 %"
//    (2024/2025, KMK). National FACTS 99 (BW among the "Schlusslichter", about one in twelve). Gender shares not used.
//  - Time: EinhZeitG; summer time 2027 from 28 March.
// Our own: Zweitgroesster.java (javac/java OpenJDK 21) and zweitgroesster.py (python3 -I), run 3 November 2026:
//   "[4, 9, 7, 9, 2] richtig: 7, fehlerhaft: 9", "[-5, -2, -8] richtig: -5, fehlerhaft: 0", "[3, 8] richtig: 3,
//   fehlerhaft: 3"; Python prints 7, -5, 3 for the same lists.
// Lesson family: start from the data, not from a guessed constant; test with duplicates and all-negative input.

const { DE } = require('../../scripts/nl/lib/market-de');

const JAVA = [
  'public class Zweitgroesster {',
  '    // Liefert den zweitgroessten verschiedenen Wert; Voraussetzung: mindestens zwei verschiedene Werte.',
  '    static int zweitgroesster(int[] a) {',
  '        int erster = a[0];',
  '        int zweiter = Integer.MIN_VALUE;',
  '        for (int i = 1; i < a.length; i++) {',
  '            if (a[i] > erster) {',
  '                zweiter = erster;',
  '                erster = a[i];',
  '            } else if (a[i] < erster && a[i] > zweiter) {',
  '                zweiter = a[i];',
  '            }',
  '        }',
  '        return zweiter;',
  '    }',
  '',
  '    // Fehlerhafte Variante: Startwerte 0 statt Werte aus dem Feld, und gleich grosse Werte werden nicht abgefangen.',
  '    static int zweitgroessterFehler(int[] a) {',
  '        int erster = 0;',
  '        int zweiter = 0;',
  '        for (int x : a) {',
  '            if (x >= erster) {',
  '                zweiter = erster;',
  '                erster = x;',
  '            } else if (x > zweiter) {',
  '                zweiter = x;',
  '            }',
  '        }',
  '        return zweiter;',
  '    }',
  '',
  '    public static void main(String[] args) {',
  '        int[][] tests = { {4, 9, 7, 9, 2}, {-5, -2, -8}, {3, 8} };',
  '        for (int[] t : tests) {',
  '            System.out.println(java.util.Arrays.toString(t) + " richtig: " + zweitgroesster(t)',
  '                + ", fehlerhaft: " + zweitgroessterFehler(t));',
  '        }',
  '    }',
  '}'
].join('\n');

const PY = [
  'def zweitgroesster(werte):',
  '    erster = werte[0]',
  '    zweiter = None',
  '    for x in werte[1:]:',
  '        if x > erster:',
  '            zweiter = erster',
  '            erster = x',
  '        elif x < erster and (zweiter is None or x > zweiter):',
  '            zweiter = x',
  '    return zweiter',
  '',
  'for t in [[4, 9, 7, 9, 2], [-5, -2, -8], [3, 8]]:',
  '    print(t, zweitgroesster(t))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'german', label: 'Informatik-Abitur Baden-Württemberg' },
  slug: 'informatik-abitur-baden-wuerttemberg',
  code: 'iwu',
  accent: '#616019',
  accentRationale: 'Informatik-Abitur Baden-Württemberg: an olive #616019 from alloc.tsv, distinct from the four other Land pages; contrast 5.33 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Deutschland' }],
  routeLabel: 'Informatik-Abitur Baden-Württemberg (Unterricht auf Englisch)',
  title: 'Informatik-Abitur Baden-Württemberg 2027: Facherlass, Termin',
  description: 'Informatik-Abitur Baden-Württemberg 2027: Pflichtteil plus drei von vier Wahlaufgaben, 270 Minuten, am 19. April 2027. Mit Übung, Unterricht auf Englisch.',
  ogDescription: 'Wie das schriftliche Informatik-Abitur 2027 in Baden-Württemberg aussieht: Schulversuch und Leistungsfach, Facherlass, Aufgabentypen, Termin am 19. April 2027 und eine eigene Pflichtteil-Übung in Java und Python.',
  twitterDescription: 'Informatik-Abitur BW 2027: Leistungsfach im Schulversuch, Facherlass, Termin am 19. April 2027, Java- und Python-Übung mit Lösung.',
  pageName: 'Informatik-Abitur Baden-Württemberg',
  webPageDescription: 'Leistungsfach Informatik in Baden-Württemberg, Abitur 2027, verständlich zusammengefasst: wer es schriftlich ablegen kann, was der Facherlass 2027 regelt, was der Aufgabenfundus der Abiturkommission zeigt, die Termine und eine eigene Übung zum zweitgrößten Wert in Java und Python.',
  courseDescription: 'Vorbereitung für das Leistungsfach Informatik in Baden-Württemberg, live und ausschließlich auf Englisch: Programmieren in der Kurssprache, Algorithmen und Datenstrukturen, Automaten und Schaltungen, Datenbanken und Kryptologie, als Gruppe oder einzeln.',
  crumbs: [{ name: 'Kurse', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Informatik-Abitur Baden-Württemberg',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Deutschland' },
    { href: '#erlass', label: 'Erlass' },
    { href: '#termin', label: 'Termin' },
    { href: '#uebung', label: 'Übung' },
    { href: '#zeiten', label: 'Zeiten' }
  ],
  eyebrow: 'Baden-Württemberg &middot; Abitur 2027 &middot; Leistungsfach Informatik',
  h1: 'Informatik-Abitur Baden-Württemberg: Vorbereitung auf Englisch',
  lede: 'In Baden-Württemberg schreibt nur ein Teil der Schulen überhaupt ein schriftliches Informatik-Abitur: Das Leistungsfach gibt es an Schulen im Schulversuch Informatik. Wer es belegt, bekommt einen Pflichtteil mit kurzen Basisaufgaben und wählt selbst drei von vier größeren Wahlaufgaben. Diese Seite fasst den Facherlass 2027 und den Aufgabenfundus der Abiturkommission zusammen, nennt den Termin und rechnet eine eigene Pflichtteil-Übung durch.',
  secondaryCta: { href: '#erlass', label: 'Was der Erlass regelt' },
  wa: 'Hallo Modern Age Coders, unser Kind hat Informatik als Leistungsfach in Baden-Württemberg, Abitur 2027. Gibt es eine kostenlose Probestunde auf Englisch?',
  heroNote: 'Live-Unterricht seit 2020 &middot; über 10.000 Lernende aus vielen Ländern &middot; Leistungsfachstoff auf Englisch',
  spec: [
    ['Für', 'Kursstufe, Leistungsfach Informatik'],
    ['Sprachen', 'die im Kurs eingeführte, dazu SQL'],
    ['Form', 'Gruppe mit 15 bis 20 oder einzeln'],
    ['Übung', 'Pflichtteil und Wahlaufgaben auf Papier'],
    ['Mentor', 'ein fester, live aus Indien'],
    ['Probe', 'erste Stunde ohne Kosten']
  ],
  capsuleQ: 'Kurz gesagt',
  capsule: 'Das schriftliche Informatik-Abitur 2027 in Baden-Württemberg gibt es im Leistungsfach an Schulversuchsschulen: Pflichtteil A plus drei von vier Wahlaufgaben, je 30 Bewertungseinheiten, 270 Minuten, am Montag, 19. April 2027. Wer sich mit Modern Age Coders vorbereitet, lernt live im Videounterricht und auf Englisch, im Kurs Informatik Oberstufe und Abitur: als Teil einer Gruppe oder allein, begleitet von einem festen Mentor im Tempo Ihres Kindes.',

  picks: {
    eyebrow: 'Passende Kurse',
    h2: 'Drei Kurse für das Leistungsfach',
    lede: 'Der Abiturkurs deckt die vier Wahlbereiche ab, der IT-Sicherheitskurs vertieft Kryptologie aus Bereich 4, und der Algorithmenkurs übt die Bausteine des Pflichtteils.',
    items: [
      { course: 'informatik-abitur-course-java-python', code: 'BW / 01', title: 'Informatik Oberstufe und Abitur', alt: 'Kursbild Informatik Oberstufe und Abitur mit Java und Python', note: 'Kursstufe. Programme entwerfen und analysieren, Datenstrukturen, Automaten, Schaltungen, Datenbanken und Kryptologie, von Hand gelöst.' },
      { course: 'cybersecurity-course-for-teens-ethical-defensive', code: 'BW / 02', title: 'IT-Sicherheit für Jugendliche', alt: 'Kursbild IT-Sicherheit für Jugendliche', note: 'Ab 13. Symmetrische und asymmetrische Verfahren, Hashfunktionen und Zertifikate, defensiv betrachtet.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'BW / 03', title: 'Algorithmen und Datenstrukturen', alt: 'Kursbild Algorithmen und Datenstrukturen für Jugendliche', note: 'Ab 13. Arrays, Zeichenketten, Rekursion, Sortieren und Graphen in vielen kurzen Aufgaben.' }
    ]
  },

  sections: [
    {
      id: 'erlass',
      eyebrow: 'Facherlass 2027',
      h2: 'Was regelt der Facherlass 2027 für Informatik in Baden-Württemberg?',
      lede: 'Der Erlass des Kultusministeriums für die Abiturprüfung 2027 unterscheidet drei Fälle, je nachdem, ob eine Schule am Schulversuch Informatik teilnimmt. Nur im Leistungsfach gibt es eine schriftliche Prüfung.',
      body: [
        { kind: 'table', numCols: [], caption: 'Schriftliches Informatik-Abitur 2027 in Baden-Württemberg (Leistungsfach, Schulversuch)', head: ['Punkt', 'Regel'], rows: [
          ['Wer schreibt', 'nur Leistungsfach an Schulen im Schulversuch Informatik'],
          ['Grundlage', 'Bildungsplan 2016, Leistungsfach und Brückenkurs'],
          ['Nicht geprüft', 'von-Neumann-Modellmaschine und Rechnernetze'],
          ['Bearbeitungszeit', '270 Minuten einschließlich Auswahlzeit'],
          ['Aufgaben', 'Pflichtteil A sowie vier Wahlaufgaben B1 bis B4, davon drei zu bearbeiten'],
          ['Wer wählt', 'die Schülerin oder der Schüler'],
          ['Bewertung', '4 Aufgabenteile zu je 30, zusammen 120 Bewertungseinheiten'],
          ['Programmiersprache', 'die im jeweiligen Kurs eingeführte'],
          ['Hilfsmittel', 'IQB-Formelsammlung, Rechtschreibwörterbuch, eingeführter WTR'],
          ['Fehlerbehandlung', 'Prüfung von Falscheingaben wird nicht verlangt']
        ] },
        { kind: 'source', html: 'Quellen: Kultusministerium Baden-Württemberg, Facherlass für die Abiturprüfung 2027, Stand 9. September 2025, Abschnitt 29 Informatik; Abiturkommission Informatik im Auftrag des Ministeriums, Leistungsfach Informatik, Schriftliche Abiturprüfung ab 2027, Version 3.0 vom 20. Oktober 2025 (für die Bewertungseinheiten). Gelesen am 3. November 2026; die Kurzform ist unsere.' },
        { kind: 'two', mt: true,
          leftH3: 'Die vier Wahlbereiche',
          left: [
            'B1 hat den Schwerpunkt Entwurf und Analyse von Programmen und Programmiertechniken, B2 Algorithmen und Datenstrukturen, B3 Automaten, formale Sprachen und technische Informatik, B4 Datenbanken, Kryptologie und Datenschutz.',
            'Weil jede Schülerin und jeder Schüler eine der vier Wahlaufgaben auslassen darf, kann man einen Bereich bewusst schwächer vorbereiten. Ganz weglassen sollte man keinen: Der Pflichtteil fragt Grundwissen aus allen Bereichen ab.'
          ],
          rightH3: 'Was sich geändert hat',
          right: [
            'Laut Aufgabenfundus galt von 2017 bis 2022 eine Bearbeitungszeit von 240 Minuten (in den Jahren 2021 und 2022 waren es 270), und die Lehrkraft wählte die Aufgaben aus. Seit 2023 wählen die Prüflinge selbst, seit 2024 werden 120 Bewertungseinheiten statt 60 Verrechnungspunkten vergeben.',
            'Neu für 2027 ist die mathematisch-naturwissenschaftliche Formelsammlung des IQB als zugelassenes Hilfsmittel.'
          ] },
        { kind: 'p', mt: true, html: 'Schulen, die nicht am Schulversuch teilnehmen, können nach dem Erlass nur das bisherige Wahlfach nach dem Bildungsplan 2004 anbieten. Laut Informatik-Monitor 2026/27 sind im Wahlfach und im dreistündigen Basisfach nur mündliche Abiturprüfungen möglich, das Leistungsfach umfasst fünf Wochenstunden. Eine Programmierumgebung ist in der schriftlichen Prüfung als Hilfsmittel nicht erlaubt.' }
      ]
    },
    {
      id: 'pflichtteil',
      eyebrow: 'Aufgabenfundus der Abiturkommission',
      h2: 'Was kommt im Pflichtteil des Informatik-Abiturs dran?',
      lede: 'Der Pflichtteil prüft an kleinen, voneinander unabhängigen Aufgaben grundlegende Techniken aus allen Bereichen. Laut Aufgabenfundus werden es in der Regel fünf bis sieben Aufgaben mit je 4 bis 6 Bewertungseinheiten.',
      body: [
        { kind: 'table', numCols: [], caption: 'Aufgabentypen im Pflichtteil laut Aufgabenfundus (Auswahl) und wie wir sie üben', head: ['Aufgabentyp', 'Beispiel aus dem Fundus-Text', 'Unsere Übungsform'], rows: [
          ['Array- oder Zeichenketten-Implementierung', 'zweitgrößtes Element, Mittelwert, Palindromtest', 'kurze Methoden von Hand, dann Randfälle testen'],
          ['Standardalgorithmen', 'kürzeste Wege, LZW, Huffman', 'Verfahren an kleinen Beispielen Schritt für Schritt'],
          ['Laufzeitverhalten', 'Quelltext oder Struktogramm analysieren', 'Schleifen zählen, Verdopplung der Eingabe durchdenken'],
          ['Rekursion', 'einfache Funktionen, Aufrufe nachvollziehen', 'Aufrufbaum zeichnen'],
          ['SQL-Anfragen', 'formulieren und interpretieren', 'Ergebnis vor dem Ausführen vorhersagen'],
          ['Logische Schaltungen', 'Halbaddierer, Volladdierer, Wahrheitstafel', 'Tafeln vollständig aufstellen'],
          ['Codierung', 'Zweierkomplement, Festkommazahlen', 'Umrechnen ohne Taschenrechnerhilfe']
        ] },
        { kind: 'source', html: 'Quelle: Leistungsfach Informatik, Schriftliche Abiturprüfung ab 2027, Version 3.0 vom 20. Oktober 2025, Abschnitt Aufgabenzuschnitt. Die dritte Spalte beschreibt unser eigenes Vorgehen. Die Liste im Fundus ist ausdrücklich nicht vollständig, und nicht jeder Typ kommt jedes Jahr vor.' },
        { kind: 'p', mt: true, html: 'Für die Klausuren in der Kursstufe gilt laut Erlass: In den ersten drei Halbjahren mindestens zwei Klausuren, im vierten mindestens eine, jeweils meist zwei Unterrichtsstunden lang. Der Schwerpunkt liegt im Anforderungsbereich II, also beim selbstständigen Anwenden in bekannten Zusammenhängen.' },
        { kind: 'two', mt: true,
          leftH3: 'Wenige wählen Informatik',
          left: [
            'Sieben Prozent der Jugendlichen in der baden-württembergischen Sekundarstufe II hatten 2024/2025 Informatik belegt; die Zahl stammt von der Kultusministerkonferenz und wird im Informatik-Monitor zitiert. Im bundesweiten Teil zählt das Land zu den drei Ländern, in denen nur ungefähr jede zwölfte Person in der Oberstufe Informatik belegt.',
            'Als Prüfungsfach ist Informatik laut Monitor keinem Aufgabenfeld zugeordnet und damit den Naturwissenschaften nicht gleichgestellt.'
          ],
          rightH3: 'Was danach kommt',
          right: [
            'Seit 2025/26 wird schrittweise das Pflichtfach Informatik und Medienbildung eingeführt, zuerst in Klasse 5 und 6. Ein neuer Bildungsplan soll laut Monitor im August 2027 in Kraft treten.',
            'Zum Schuljahr 2027/2028 kommt an Gemeinschaftsschule und Gymnasium das Profilfach Naturwissenschaft, Informatik und Technik (NIT) hinzu.'
          ] }
      ]
    },
    {
      id: 'termin',
      eyebrow: 'Abitur 2027',
      h2: 'Wann ist das Informatik-Abitur 2027 in Baden-Württemberg?',
      lede: 'Das Kultusministerium hat für 2027 einen Gesamtplan und einen Detailplan mit allen Fächern veröffentlicht.',
      body: [
        { kind: 'table', numCols: [], caption: 'Termine 2027 für das Leistungsfach Informatik an allgemein bildenden Gymnasien', head: ['Datum', 'Was'], rows: [
          ['Freitag, 16. April 2027', 'Beginn der schriftlichen Prüfungen'],
          ['Montag, 19. April 2027, 09.00 bis 13.30 Uhr', 'Informatik, Haupttermin'],
          ['Mittwoch, 5. Mai 2027', 'Ende der schriftlichen Prüfungen'],
          ['Montag, 10. Mai 2027, 09.00 bis 13.30 Uhr', 'Informatik, Nachtermin'],
          ['Mittwoch, 23. Juni 2027', 'erste Bekanntgabe der schriftlichen Ergebnisse'],
          ['28. Juni bis 8. Juli 2027', 'mündliche Prüfungen']
        ] },
        { kind: 'source', html: 'Quellen: Kultusministerium Baden-Württemberg, Abitur 2027 Gesamtplan (Terminplan für die schriftliche Abiturprüfung, Anlage I) und Abitur 2027 Detailplan (Anlage II), gelesen am 3. November 2026.' },
        { kind: 'p', mt: true, html: 'Viereinhalb Stunden von 9.00 bis 13.30 Uhr entsprechen genau den 270 Minuten des Erlasses. Der Haupttermin liegt am ersten Montag des Prüfungszeitraums; Informatik gehört damit zu den frühen Fächern, und die Vorbereitung muss vor Ostern im Wesentlichen stehen.' }
      ]
    },
    {
      id: 'uebung',
      tint: 'tint',
      eyebrow: 'Eine Übungsaufgabe von uns',
      h2: 'Wie findet man das zweitgrößte Element eines Arrays?',
      lede: 'Der Aufgabenfundus nennt "zweitgrößtes Element bestimmen" als Beispiel für eine Pflichtteilaufgabe. Die folgende Aufgabe dazu haben wir selbst geschrieben; sie ist keine echte Prüfungsaufgabe. Wir zeigen sie in Java und Python, weil der Erlass die im Kurs eingeführte Sprache zulässt.',
      body: [
        { kind: 'p', html: '<strong>Aufgabe (unsere).</strong> Gesucht ist der zweitgrößte verschiedene Wert eines Feldes ganzer Zahlen; das Feld enthält mindestens zwei verschiedene Werte. a) Implementieren Sie eine Methode. b) Eine Mitschülerin schlägt die Methode <code>zweitgroessterFehler</code> vor. Finden Sie zwei Eingaben, für die sie falsch rechnet, und erklären Sie die Ursachen.' },
        { kind: 'code', label: 'Zweitgroesster.java: richtige und fehlerhafte Variante', lang: 'Java', code: JAVA, note: 'Ausgabe mit OpenJDK 21, von uns ausgeführt: <code>[4, 9, 7, 9, 2] richtig: 7, fehlerhaft: 9</code>, <code>[-5, -2, -8] richtig: -5, fehlerhaft: 0</code>, <code>[3, 8] richtig: 3, fehlerhaft: 3</code>.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Lösung zu b): zwei Fehler, zwei Testfälle (unsere Analyse)', head: ['Eingabe', 'Richtig', 'Fehlerhafte Variante', 'Ursache'], rows: [
          ['{4, 9, 7, 9, 2}', '7', '9', 'die zweite 9 erfüllt x &gt;= erster und schiebt die erste 9 auf Platz zwei'],
          ['{-5, -2, -8}', '-5', '0', 'Startwert 0 ist größer als jeder Wert im Feld und wird nie verdrängt'],
          ['{3, 8}', '3', '3', 'unauffällig: dieser Test findet keinen der beiden Fehler']
        ] },
        { kind: 'p', mt: true, html: 'Die dritte Zeile ist die wichtigste Beobachtung: Mit positiven, verschiedenen Zahlen sehen beide Methoden gleich gut aus. Fehler zeigen sich erst bei Duplikaten des Maximums und bei ausschließlich negativen Werten. Die richtige Variante vermeidet beides, indem sie mit dem ersten Feldelement startet und gleich große Werte ausdrücklich überspringt (<code>a[i] &lt; erster</code>).' },
        { kind: 'code', label: 'zweitgroesster.py: dieselbe Idee in Python', lang: 'Python', code: PY, note: 'Ausgabe, von uns ausgeführt: <code>[4, 9, 7, 9, 2] 7</code>, <code>[-5, -2, -8] -5</code>, <code>[3, 8] 3</code>. Statt eines kleinsten int-Werts startet Python mit <code>None</code> für "noch kein zweiter Wert".' },
        { kind: 'ol', mt: true, items: [
          '<strong>Aus den Daten starten.</strong> Ein Startwert wie 0 ist eine Vermutung über die Eingabe. Nehmen Sie das erste Element oder einen ausdrücklichen Platzhalter.',
          '<strong>Gleichheit mitdenken.</strong> Die Aufgabenstellung sagt "verschiedener Wert". Prüfen Sie deshalb jedes &gt; und &gt;= darauf, was bei gleichen Werten passiert.',
          '<strong>Testfälle mit Absicht wählen.</strong> Ein Test mit Duplikat, einer mit nur negativen Zahlen, einer mit genau zwei Elementen. Erst wenn alle drei stimmen, ist die Methode glaubwürdig.'
        ] }
      ]
    },
    {
      id: 'englisch',
      eyebrow: 'Unterricht auf Englisch',
      h2: 'Wie läuft die Vorbereitung auf Englisch?',
      lede: 'Wir unterrichten ausschließlich auf Englisch; die Abituraufgaben sind deutsch. Die Fachsprache der Informatik ist aber zu großen Teilen englisch, von array bis hash.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Operatoren verstehen', p: 'Der Aufgabenfundus enthält eine Operatorenliste mit Zuordnung zu Anforderungsbereichen. Wir klären auf Englisch, was "analysieren", "angeben" oder "begründen" jeweils verlangt, und üben mit deutschen Aufgabentexten.' },
          { h3: 'Ihre Kurssprache', p: 'Der Erlass lässt die im Kurs eingeführte Programmiersprache zu. Der Mentor arbeitet in genau dieser Sprache, damit nichts doppelt gelernt werden muss.' },
          { h3: 'Ruhiges Tempo', p: 'Unterrichtet wird live aus Indien. Der Mentor spricht klar, erklärt bei Bedarf mit anderen Worten und richtet sich nach dem Tempo Ihres Kindes.' }
        ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Stand klären.</strong> Erste Stunde: eine Pflichtteilaufgabe aus dem aktuellen Halbjahr, dazu die Frage nach der Kurssprache.',
          '<strong>Pflichtteil breit üben.</strong> Jede Woche einige kurze Aufgaben aus verschiedenen Typen, damit kein Bereich fremd bleibt.',
          '<strong>Wahlaufgaben gewichten.</strong> Gemeinsam entscheiden, welche drei Bereiche Ihr Kind sicher beherrschen soll und welcher Reserve bleibt.',
          '<strong>Generalprobe.</strong> Vor dem 19. April 2027 eine vollständige Aufgabe in 270 Minuten, nur mit den erlaubten Hilfsmitteln.'
        ] }
      ]
    },
    {
      id: 'zeiten',
      eyebrow: 'Unterrichtszeiten',
      h2: 'Zu welcher Uhrzeit sind die Stunden möglich?',
      lede: 'Die Stunden passen wir dem Schultag in Baden-Württemberg an. Drei Beispiele mit der Uhrzeit beim Mentor:',
      body: [
        { kind: 'table', numCols: [], caption: 'Baden-Württemberg und Indien', head: ['Uhrzeit in BW', 'Indien, Winterzeit', 'Indien, ab 28. März 2027'], rows: [
          ['14:15', '18:45', '17:45'],
          ['18:15', '22:45', '21:45'],
          ['Samstag 11:30', '16:00', '15:00']
        ] },
        { kind: 'source', html: 'Gesetzliche Zeit nach dem Einheiten- und Zeitgesetz ist die MEZ (UTC+1) beziehungsweise in der Sommerzeit die MESZ (UTC+2); die Sommerzeit endete am 25. Oktober 2026 und kehrt am 28. März 2027 zurück. Indien hat das ganze Jahr UTC+5:30, ist also 4 Stunden 30 Minuten (Winter) oder 3 Stunden 30 Minuten (Sommer) voraus. Beispielzeiten, keine festen Kurse.' },
        { kind: 'p', mt: true, html: 'In den Wochen vor dem 19. April 2027 und um die Klausuren der Kursstufe buchen viele Familien zusätzliche Einzelstunden, jeweils in ihrer eigenen Zeitzone.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Fortschritt',
    h2: 'Woran man sieht, dass es vorangeht',
    lede: 'Unsere eigene Einteilung für das Leistungsfach. Keine Noten, keine Vorhersage des Ergebnisses.',
    table: { caption: 'Fünf Stufen bis zum Abitur (unsere)', head: ['Stufe', 'Etwa wann', 'Ihr Kind kann'], rows: [
      ['1. Kurze Methoden', 'erstes Halbjahr', 'Array- und Zeichenkettenaufgaben sauber implementieren und mit Randfällen testen'],
      ['2. Algorithmen', 'zweites Halbjahr', 'Standardverfahren von Hand ausführen und Laufzeiten vergleichen'],
      ['3. Theorie und Technik', 'drittes Halbjahr', 'Automaten, Grammatiken und Schaltungen sicher bearbeiten'],
      ['4. Daten und Sicherheit', 'drittes und viertes Halbjahr', 'SQL-Anfragen schreiben und Kryptoverfahren vergleichen'],
      ['5. Prüfungsreif', 'vor dem 19. April 2027', 'Pflichtteil und drei Wahlaufgaben in 270 Minuten lösen']
    ] },
    left: { h3: 'Für Eltern', ps: [
      'Jeden Monat erhalten Sie eine kurze Rückmeldung: Stufe, Stärken, nächster Schritt.',
      'Der Pflichtteil belohnt Breite. Wir achten darauf, dass kein Bereich über Monate liegen bleibt.'
    ] },
    right: { h3: 'Tipps für Prüflinge', ps: [
      'Testen Sie jede kurze Methode mit einem Duplikat und mit negativen Zahlen.',
      'Entscheiden Sie früh, welche Wahlaufgabe Ihre Reserve ist, und üben Sie die anderen drei gründlich.'
    ] }
  },

  catalogue: {
    eyebrow: 'Weitere Kurse',
    h2: 'Neun weitere Kurse für die Kursstufe',
    lede: 'Für einzelne Wahlbereiche, die Mathematik daneben oder den Blick aufs Studium. Alle live und auf Englisch.',
    bands: [
      { num: 'I', h3: 'Sprachen', sub: '13 bis 19 Jahre', courses: [
        { code: 'BW / CODE / 01', slug: 'python-complete-masterclass-teens', title: 'Python für Jugendliche', blurb: 'Klar aufgebaute Grundlagen.' },
        { code: 'BW / CODE / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java für Jugendliche', blurb: 'Objekte, Klassen, Vererbung.' },
        { code: 'BW / CODE / 03', slug: 'competitive-programming-for-teens-course', title: 'Wettbewerbsprogrammierung', blurb: 'Effiziente Algorithmen trainieren.' }
      ] },
      { num: 'II', h3: 'Daten', sub: '13 bis 19 Jahre', courses: [
        { code: 'BW / DATA / 01', slug: 'mysql-mastery-for-teens', title: 'SQL und Datenbanken', blurb: 'Modellieren und abfragen.' },
        { code: 'BW / DATA / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data Science', blurb: 'Daten mit Python auswerten.' },
        { code: 'BW / DATA / 03', slug: 'ai-ml-masterclass-teens', title: 'KI und maschinelles Lernen', blurb: 'Modelle verstehen lernen.' }
      ] },
      { num: 'III', h3: 'Mathematik', sub: '15 bis 19 Jahre', courses: [
        { code: 'BW / MATHE / 01', slug: 'abitur-mathematics-course-in-english', title: 'Abitur-Mathematik', blurb: 'Für die Mathematikprüfung.' },
        { code: 'BW / MATHE / 02', slug: 'statistics-probability-maths-course', title: 'Stochastik', blurb: 'Wahrscheinlichkeit sicher anwenden.' },
        { code: 'BW / MATHE / 03', slug: 'maths-through-coding', title: 'Mathematik mit Code', blurb: 'Rechnen und überprüfen mit Python.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Ablauf',
    h2: 'So funktioniert die Vorbereitung',
    lede: 'Zwei Termine je Woche, beide live und ungefähr eine Stunde lang, geleitet von Ihrem Mentor. Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche.',
    slots: [
      { time: 'Früher Nachmittag oder Abend', l: 'Nach dem Unterricht in der Kursstufe.' },
      { time: 'Samstag', l: 'Später Vormittag, gut für Probeaufgaben.' },
      { time: 'Einzeln', l: 'Vor Klausuren und vor dem 19. April 2027.' }
    ],
    cells: [
      { h3: 'Ein Mentor', p: 'Kennt Kurssprache und Wahlbereiche.' },
      { h3: 'Nach Erlass', p: 'Pflichtteil und B1 bis B4 als Gerüst.' },
      { h3: 'Mit Stift', p: 'Ohne Programmierumgebung, wie in der Prüfung.' },
      { h3: 'Englisch, gut verständlich', p: 'Deutsche Fachwörter immer dazu.' },
      { h3: 'Monatsbericht', p: 'Kurz für die Eltern.' },
      { h3: 'Zwei Formen', p: 'Fünfzehn bis zwanzig Lernende oder einzeln.' }
    ]
  },

  projectsH2: 'Projekte unserer Lernenden',
  projectsLede: 'Was neben der Kursstufe entsteht, zeigen die Karten unten. Mehr finden Sie auf <a class="ag-inline-link" href="/student-labs">Student labs</a> (Seite auf Englisch).',
  reviewsLede: 'Was Familien und Lernende auf Google schreiben, unverändert im Englischen.',

  fees: {
    h2: 'Was kostet die Vorbereitung?',
    lede: 'Ein Monat enthält acht Stunden Live-Unterricht. Wir rechnen die Preise zum Referenzkurs der Europäischen Zentralbank in Euro um, eingezogen wird jedoch in US-Dollar. Ihre Bank wechselt den Betrag, deshalb kann der Kontoauszug um Cent-Beträge abweichen.',
    free: ['Kostenlose Probestunde', 'Einstufung an einer Pflichtteilaufgabe', 'Keine Karte nötig'],
    group: ['Fünfzehn bis zwanzig Lernende', 'Ein Mentor bis zur Prüfung', 'Zwei Stunden pro Woche', 'Monatlich kündbar'],
    one: ['Nur Ihr Kind', 'In der Kurssprache Ihrer Schule', 'Zeiten nach Absprache']
  },

  faq: {
    eyebrow: 'Fragen und Antworten',
    h2: 'Informatik-Abitur Baden-Württemberg: häufige Fragen',
    items: [
      { q: 'Findet der Unterricht auf Deutsch statt?', a: 'Nein. Unterrichtet wird live und ausschließlich auf Englisch. Für Informatik ist das ein Plus, denn Ihr Kind übt Programmieren und Englisch zugleich, und Begriffe wie array, string oder hash sind ohnehin englisch. Tempo und Aussprache passt der Mentor an.' },
      { q: 'Wann ist das Informatik-Abitur 2027 in Baden-Württemberg?', a: 'Am Montag, 19. April 2027, von 9.00 bis 13.30 Uhr. Der Nachtermin ist Montag, 10. Mai 2027. So steht es im Detailplan des Kultusministeriums.' },
      { q: 'Kann jede Schule Informatik schriftlich im Abitur prüfen?', a: 'Nein. Laut Facherlass 2027 gibt es das schriftlich geprüfte Leistungsfach nur an Schulen im Schulversuch Informatik. Andere Schulen können nur das bisherige Wahlfach anbieten, in dem laut Informatik-Monitor eine mündliche Prüfung möglich ist.' },
      { q: 'Wie ist die Prüfung aufgebaut?', a: 'Pflichtteil A mit kurzen Basisaufgaben aus allen Bereichen, dazu vier Wahlaufgaben B1 bis B4, von denen die Prüflinge drei auswählen. Jeder der vier bearbeiteten Teile bringt 30 Bewertungseinheiten, zusammen 120.' },
      { q: 'In welcher Programmiersprache wird programmiert?', a: 'In der im jeweiligen Kurs eingeführten Sprache, so der Facherlass. Eine Programmierumgebung ist als Hilfsmittel nicht erlaubt, programmiert wird also mit Stift.' },
      { q: 'Welche Hilfsmittel sind 2027 erlaubt?', a: 'Die mathematisch-naturwissenschaftliche Formelsammlung des IQB, ein Nachschlagewerk zur deutschen Rechtschreibung und der im Kurs eingeführte wissenschaftliche Taschenrechner ohne Handbuch.' },
      { q: 'Muss man Falscheingaben im Code abfangen?', a: 'Nein. Der Erlass sagt, dass von vernünftigen Eingaben auszugehen ist und an eine Fehlerbehandlung von Falscheingaben nicht gedacht ist.' },
      { q: 'Wann finden die Stunden statt?', a: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche. 14:15 Uhr in Stuttgart ist im Winter 18:45 Uhr in Indien.' },
      { q: 'Wie wird die Gebühr bezahlt?', a: 'Monatlich, belastet in US-Dollar. Den Euro-Betrag auf der Seite rechnen wir mit dem Referenzkurs der Europäischen Zentralbank aus, den Wechsel macht Ihre Bank. Die Probestunde kostet nichts.' },
      { q: 'Arbeiten Sie mit dem Kultusministerium zusammen?', a: 'Nein. Wir sind mit Ministerium und Abiturkommission nicht verbunden, unterrichten begleitend zur Schule und vergeben keine Noten.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Weiterlesen',
    h2: 'Mehr zu Informatik in Deutschland',
    lede: 'Die meisten Seiten sind auf Englisch.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Unsere Seite für Deutschland.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Von Klasse 5 bis zum Abitur.' },
      { href: '/informatik-in-german-schools-by-state', label: 'Informatik by state', p: 'Pflichtstunden im Ländervergleich.' },
      { href: '/abitur-computer-science-in-english', label: 'Abitur computer science in English', p: 'Informatik im Abitur auf Englisch.' },
      { href: '/learn-to-think-not-copy-ai-germany', label: 'Learn to think, not copy AI', p: 'Denken lernen statt abschreiben.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Wie eine Live-Stunde abläuft.' }
    ]
  },

  start: {
    h2: 'Probestunde für Baden-Württemberg buchen',
    lede: 'Für den Einstieg reicht eine Klausur aus der Kursstufe oder eine Pflichtteilaufgabe aus dem Unterricht. Der Mentor löst sie gemeinsam mit Ihrem Kind und empfiehlt danach Kurs, Schwerpunkte und einen Plan bis zum 19. April 2027.',
    readFirst: 'Vorab: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> beschreibt unseren Unterricht, <a class="ag-inline-link" href="/abitur-computer-science-in-english">Abitur computer science in English</a> vergleicht das Fach bundesweit (beide englisch).',
    note: 'Unterricht live online mit Mentoren in Indien, nur auf Englisch. Per WhatsApp antworten wir am schnellsten.',
    formNote: 'Die Probestunde ist kostenlos und unverbindlich.'
  },

  footer: {
    cols: [
      { h4: 'Kurse', links: [
        { href: '/courses/informatik-abitur-course-java-python', label: 'Informatik Abitur' },
        { href: '/courses/cybersecurity-course-for-teens-ethical-defensive', label: 'IT-Sicherheit' },
        { href: '/courses/problem-solving-dsa-masterclass-teens', label: 'Algorithmen' },
        { href: '/courses', label: 'Alle Kurse' }
      ] },
      { h4: 'Deutschland', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/informatik-in-german-schools-by-state', label: 'Informatik nach Land' },
        { href: '/student-labs', label: 'Projekte' }
      ] }
    ],
    bottomRight: 'Startwert aus dem Feld, nicht aus dem Bauch'
  },

  personalityCss: `
.ag-root.ag-iwu .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-iwu .ag-capsule { border-left-width: 4px; border-radius: 1px; }
.ag-root.ag-iwu .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-iwu .ag-table td { hyphens: auto; }
.ag-root.ag-iwu .ag-code-head b { font-variant-numeric: tabular-nums; }
`,

  dossier: {
    curriculumAuthority: 'Kultusministerium Baden-Württemberg: Facherlass Abiturprüfung 2027 (Stand 09.09.2025, section 29), Abitur 2027 Gesamtplan and Detailplan; Abiturkommission Informatik BW, Leistungsfach Informatik ab 2027, Version 3.0 (20.10.2025); GI Informatik-Monitor 2026/27, BW page; Einheiten- und Zeitgesetz. Read 2 and 3 November 2026. Exercise our own.',
    localProject: 'Second-largest distinct value, a Pflichtteil task type named by the Abiturkommission: original Java and Python; correct version gives 7, -5, 3; a plausible buggy version (start values 0, >= on the maximum) gives 9, 0, 3, and the harmless-looking test {3, 8} catches neither bug. Lesson family: start from the data, not from a guessed constant; test with duplicates and all-negative input.',
    requiredMentions: ['[-5, -2, -8] richtig: -5, fehlerhaft: 0', '[4, 9, 7, 9, 2] richtig: 7, fehlerhaft: 9', 'Montag, 19. April 2027, 09.00 bis 13.30 Uhr', 'Montag, 10. Mai 2027, 09.00 bis 13.30 Uhr', '4 Aufgabenteile zu je 30, zusammen 120 Bewertungseinheiten', 'nur Leistungsfach an Schulen im Schulversuch Informatik', 'Startwert aus dem Feld, nicht aus dem Bauch', 'von-Neumann-Modellmaschine und Rechnernetze'],
    sources: [
      { claim: 'Facherlass 2027 section 29: Schulversuch, Leistungsfach, 270 minutes, Pflichtteil and B1 to B4, three of four, course language, aids, no error handling, Klausuren.', url: 'https://km.baden-wuerttemberg.de/fileadmin/redaktion/m-km/intern/PDF/Dateien/Gymnasium/Dokumente_Abitur/Abitur_2027/Facherlass_2027_Stand_09.09.2025.pdf' },
      { claim: '120 BE since 2024, IQB Formelsammlung from 2027, 30 BE per part, Pflichtteil task types, history 240 min and teacher choice.', url: 'https://km.baden-wuerttemberg.de/fileadmin/redaktion/m-km/intern/PDF/Dateien/Gymnasium/Dokumente_Abitur/Abitur_2027/INF_ABI27_MusterFundus_V3.0.pdf' },
      { claim: 'Informatik Monday 19 April 2027 09.00 to 13.30, Nachtermin 10 May 2027.', url: 'https://km.baden-wuerttemberg.de/fileadmin/redaktion/m-km/intern/PDF/Dateien/Gymnasium/Dokumente_Abitur/Abitur_2027/Abitur_2027_Detailplan.pdf' },
      { claim: 'Written period 16 April to 5 May 2027, results 23 June, oral 28 June to 8 July 2027.', url: 'https://km.baden-wuerttemberg.de/fileadmin/redaktion/m-km/intern/PDF/Dateien/Gymnasium/Dokumente_Abitur/Abitur_2027/Abitur_2027_Gesamtplan.pdf' },
      { claim: 'BW Oberstufe: Wahlfach, Basisfach, Leistungsfach; oral only in Wahl- and Basisfach; no IDE; 7 percent; new Bildungsplan August 2027; NIT 2027/28.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/baden-wuerttemberg' }
    ],
    rejectedClaims: [
      'German-language teaching: English only, stated plainly.',
      'Reproducing tasks from the Abiturkommission fundus or real exams: refused; only the task type name is cited, the exercise is ours.',
      'Third-party date sites: rejected; dates from the ministry Gesamtplan and Detailplan.',
      'Any grade promise: refused; we teach alongside school.',
      'Gender shares from the Informatik-Monitor: not used.'
    ]
  }
};
