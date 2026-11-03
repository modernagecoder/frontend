'use strict';
// Mathe-Abitur-Vorbereitung online (ag- German-language door, Germany cluster P3 row DE076, hub group 'german').
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; writer brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; formal "Sie";
// pages show euro, checkout charges USD. We are not connected with the IQB, the KMK or any Land ministry.
// Angle: a pupil in the Qualifikationsphase (or a parent) asking what exactly the written maths Abitur 2027 asks and how
// to prepare online. Spine: the NRW Vorgaben 2027 as the worked case (Pflicht and Wahlpflicht tasks in Prüfungsteil A,
// what the teacher and the pupil choose in Teil B), what only the Leistungskurs covers, which calculator (WTR or CAS/MMS)
// may do what, a six-month plan to 5 May 2027, and one original Funktionenschar task with a value-table check.
// The live page abitur-maths-in-english already carries the IQB marks table, the Notenpunkte table and the operator words;
// none of those tables is repeated here.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/mathe-abitur-vorbereitung-online/,
// fetched 2 and 3 Nov 2026; quoted strings grepped from the .txt files):
//  - NRW Standardsicherung, Mathematik GOSt page (5c63a626): "Für die Bearbeitung der schriftlichen Abituraufgaben im Fach
//    Mathematik ist in Nordrhein-Westfalen ab dem Abitur 2027 die ländergemeinsame mathematisch-naturwissenschaftliche
//    Formelsammlung als Hilfsmittel verpflichtend."; "Die Verpflichtung zur Anschaffung eines grafikfähigen Taschenrechners
//    ... entfällt gemäß Schulmail vom 23.09.2022 für die Jahrgänge, die ab dem Schuljahr 2023/24 in die Einführungsphase
//    ... eintreten."
//  - NRW "Zentralabitur 2027 – Mathematik" Vorgaben (mathematik_2027_gg.pdf): task types "Aufgabe mit realitätsnahem
//    Kontext", "innermathematische Argumentationsaufgabe", "hilfsmittelfrei zu bearbeitende Aufgabe"; GK Pflichtteil "drei
//    Aufgaben", LK "vier Aufgaben" (two Analysis); Wahlpflichtteil "sechs Aufgaben", pupils choose two, "eine Festlegung auf
//    eines der drei Sachgebiete ... möglich"; GK "fünf Aufgaben", LK "sechs Aufgaben" in Teil 1; "Eine Aufgabenauswahl durch
//    die Lehrkräfte ist im ersten Prüfungsteil nicht vorgesehen."; Teil 2 four sets (GK/LK x WTR/CAS), each "zwei
//    Analysisaufgaben, eine Aufgabe zur Vektoriellen Geometrie und eine Aufgabe zur Stochastik"; "Die Lehrkraft wählt eine
//    der beiden Analysisaufgaben aus."; "Eine Aufgabenauswahl durch die Schülerinnen und Schüler ist im zweiten Prüfungsteil
//    nicht vorgesehen."; Hilfsmittel "Wörterbuch zur deutschen Rechtschreibung", WTR or CAS/MMS, Formelsammlung; 255 and 300
//    minutes; LK-only Fokussierungen: "Funktionsscharen", "Kettenregel", "natürlichen Logarithmusfunktion", "Normalverteilung",
//    "σ-Regeln", "Binomialkoeffizient", "Lagebeziehungen und Abstände: Punkte, Geraden, Ebenen (alle Kombinationen)"; GK:
//    "Kettenregel bei Verknüpfungen der natürlichen Exponentialfunktion mit linearen Funktionen".
//  - NRW Organisatorische Vorgaben ab 2026: Teil A "max. 100 Minuten" (GK) and "max. 110 Minuten" (LK); Teil B "min. 155
//    Minuten" and "min. 190 Minuten"; "Jeder Prüfling entscheidet selbst über den Zeitpunkt, zu dem er den Prüfungsteil A
//    abgibt und die Hilfsmittel erhält."
//  - NRW Anforderungen an digitale Mathematikwerkzeuge (WTR ab 2026, CAS/MMS ab 2030): WTR not intended for "Lösen von
//    Gleichungen oder Gleichungssystemen", "Differenzieren oder Integrieren von Funktionen", "Darstellen von
//    Funktionsgraphen"; WTR must output "Werten eines Terms mit einer Variable in Tabellenform" and values of the binomial and
//    normal distribution; requirements "im Rahmen der Entwicklung des ländergemeinsamen Abituraufgabenpools erarbeitet".
//  - NRW Termine 2027 and Anlage A (FACTS 42 to 44, 48): written main exams 13 April to 5 May 2027; last Q2 teaching day
//    19 March 2027; "Mittwoch, 5. Mai 2027 Mathematik"; start 9:00.
//  - Berlin Prüfungsplan 2026/27 (be-pruefungsplan-2027, "Stand: 15.09.2026"): "Mi, 05.05.2027 LF + 3. pf MATHEMATIK +
//    mathematik Pool".
//  - IQB Abitur page (dc1ff83b, FACTS 30 to 33): pools since 2017; common dates since 2022; "landeseigene Kommission";
//    used pool tasks published with "Erwartungshorizonte und Bewertungshinweise".
//  - KMK Bildungsstandards Mathematik Allgemeine Hochschulreife (04232334, FACTS 125 to 128): "Beschluss der
//    Kultusministerkonferenz vom 18.10.2012"; K1 to K6; L1 to L5.
//  - Time: Einheitenzeitgesetz; summer time ended 25 October 2026, begins 28 March 2027; India UTC+5:30.
// Our own (scratchpad de/w/GE/py/schar.py, python3 -I) prints:
//    a = 1/2: T(1/2 | -1/4), H(-1/2 | 1/4), T = -2a^3: True | H auf y = -2x^3: True
//    a = 1: T(1 | -2), H(-1 | 2), T = -2a^3: True | H auf y = -2x^3: True
//    a = 2: T(2 | -16), H(-2 | 16), T = -2a^3: True | H auf y = -2x^3: True
//    x = 0.0 ... f(x) = 0.000 / -5.875 / -11.000 / -14.625 / -16.000 / -14.375 / -9.000 / 0.875 / 16.000 (x = 4.0)
// Lesson family: a parameter stands for a whole family; solve it in general, then test one member with a value table.

const { DE } = require('../../scripts/nl/lib/market-de');

const PY = [
  'from fractions import Fraction as F',
  '',
  'def f(a, x):',
  '    return x**3 - 3*a**2*x',
  '',
  'for a in [F(1, 2), F(1), F(2)]:',
  '    t, h = f(a, a), f(a, -a)',
  '    print(f"a = {a}: T({a} | {t}), H({-a} | {h}),",',
  '          "T = -2a^3:", t == -2*a**3, "| H auf y = -2x^3:", h == -2*(-a)**3)',
  '',
  'a = 2',
  'for i in range(9):',
  '    x = i / 2',
  '    print(f"x = {x:.1f}   f(x) = {f(a, x):7.3f}")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'german', label: 'Mathe-Abitur-Vorbereitung online' },
  slug: 'mathe-abitur-vorbereitung-online',
  code: 'mav',
  accent: '#694D6B',
  accentRationale: 'Mathe-Abitur-Vorbereitung online: a muted plum #694D6B, the colour of a fountain-pen ink used for long exam papers, distinct from the slate blue of the English Abitur maths page and the Informatik petrol; at least 5.93 on the paper #FBF8F2 and its tints',
  pageType: 'market',
  priceSubject: 'maths',
  market: DE,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Deutschland' }],
  routeLabel: 'Mathe-Abitur-Vorbereitung online (auf Englisch)',
  title: 'Mathe-Abitur-Vorbereitung online: live auf Englisch, LK und GK',
  description: 'Mathe-Abitur 2027 vorbereiten, live online auf Englisch: Aufbau nach den NRW-Vorgaben, was nur im LK kommt, WTR oder CAS und ein Plan bis zum 5. Mai 2027.',
  ogDescription: 'Wie das schriftliche Mathe-Abitur 2027 aufgebaut ist, was nur im Leistungskurs geprüft wird, was der Taschenrechner darf, ein Sechsmonatsplan und eine gelöste Funktionenschar, mit Live-Unterricht auf Englisch.',
  twitterDescription: 'Mathe-Abitur 2027 vorbereiten: Aufbau, LK-Themen, Taschenrechner, Plan und eine Funktionenschar. Live auf Englisch.',
  pageName: 'Mathe-Abitur-Vorbereitung online',
  webPageDescription: 'Ein Leitfaden für Schülerinnen und Schüler der Qualifikationsphase und ihre Eltern: das schriftliche Mathematik-Abitur 2027 am Beispiel der Vorgaben aus Nordrhein-Westfalen, die Unterschiede zwischen Grund- und Leistungskurs, die Regeln für WTR und CAS, ein Vorbereitungsplan bis Mai 2027 und eine eigene Übungsaufgabe zu Funktionenscharen.',
  courseDescription: 'Live-Online-Vorbereitung auf das schriftliche Mathematik-Abitur für Grund- und Leistungskurs in ganz Deutschland, ausschließlich auf Englisch mit den deutschen Fachbegriffen: Analysis, Analytische Geometrie und Stochastik, hilfsmittelfreier Teil und Probeklausuren, in der Gruppe oder im Einzelunterricht.',
  crumbs: [{ name: 'Kurse', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Mathe-Abitur-Vorbereitung',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Deutschland' },
    { href: '#aufbau', label: 'Aufbau' },
    { href: '#rechner', label: 'Rechner' },
    { href: '#beispiel', label: 'Beispiel' },
    { href: '#zeiten', label: 'Zeiten' }
  ],
  eyebrow: 'Deutschland &middot; Mathematik &middot; Qualifikationsphase',
  h1: 'Mathe-Abitur-Vorbereitung online, live auf Englisch',
  lede: 'Das schriftliche Mathe-Abitur 2027 wird für viele Schülerinnen und Schüler am Mittwoch, dem 5. Mai 2027, geschrieben, in Nordrhein-Westfalen ebenso wie in Berlin. Diese Seite zeigt am Beispiel der offiziellen Vorgaben aus Nordrhein-Westfalen, welche Aufgaben im hilfsmittelfreien Teil Pflicht sind und welche Sie wählen dürfen, welche Themen nur im Leistungskurs vorkommen, was ein einfacher Taschenrechner können muss und was er nicht darf, und wie eine Vorbereitung in sechs Monaten aussehen kann. Unterrichtet wird live, auf Englisch, mit Mentoren aus Indien.',
  secondaryCta: { href: '#aufbau', label: 'Aufbau der Prüfung' },
  wa: 'Hallo Modern Age Coders, ich schreibe 2027 das Mathe-Abitur und suche eine Vorbereitung online auf Englisch. Kann ich eine kostenlose Probestunde buchen?',
  heroNote: 'Mathe live online seit 2020 &middot; über 10.000 Lernende weltweit &middot; Grund- und Leistungskurs, Unterricht auf Englisch',
  spec: [
    ['Für', 'Qualifikationsphase, Grund- und Leistungskurs'],
    ['Themen', 'Analysis, Geometrie, Stochastik'],
    ['Übung', 'Teil A ohne Hilfsmittel, ganze Probeklausuren'],
    ['Gruppe', 'Fünfzehn bis zwanzig, oder Einzelunterricht'],
    ['Sprache', 'Englisch, mit den deutschen Fachwörtern'],
    ['Probestunde', 'Kostenlos, ohne Karte']
  ],
  capsuleQ: 'Kurz gesagt',
  capsule: 'Bei Modern Age Coders bereiten Sie sich online und live auf das Mathe-Abitur vor, mit Unterricht auf Englisch, egal in welchem Land Sie die Qualifikationsphase besuchen und ob im Grund- oder Leistungskurs: Analysis, Analytische Geometrie und Stochastik, der hilfsmittelfreie Teil A unter Zeitdruck und vollständige Probeklausuren. Grundlage ist unser Kurs Abitur Mathematik in English. Sie lernen in einer Gruppe von fünfzehn bis zwanzig oder im Einzelunterricht, mit einem festen Mentor, der Tempo und Aussprache an Sie anpasst.',

  picks: {
    eyebrow: 'Passende Kurse',
    h2: 'Drei Kurse für das Abiturjahr',
    lede: 'Der erste ist für das Mathe-Abitur selbst gebaut. Die beiden anderen helfen, wenn die Analysis noch wackelt oder wenn Sie die Mathematik mit dem Rechner tiefer verstehen möchten.',
    items: [
      { course: 'abitur-mathematics-course-in-english', code: 'MAV / 01', title: 'Abitur Mathematik in English', alt: 'Kursbild Abitur Mathematik in English, Leistungskurs und Grundkurs', note: 'Für 16 bis 19 Jahre. Analysis, Geometrie und Stochastik im Format des ländergemeinsamen Pools, mit Teil-A-Training und Probeklausuren.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'MAV / 02', title: 'Oberstufenmathematik von Grund auf', alt: 'Kursbild Complete High School Mathematics Mastery', note: 'Für alle, denen Termumformungen, Ableitungen oder Vektoren noch nicht sicher von der Hand gehen. Lücken aus der Mittelstufe schließen, bevor die Abiturthemen darauf aufbauen.' },
      { course: 'maths-through-coding', code: 'MAV / 03', title: 'Mathematik mit Python', alt: 'Kursbild Maths Through Coding, Mathematik mit Python', note: 'Funktionen, Wertetabellen und Wahrscheinlichkeiten selbst programmieren. Wer eine Wertetabelle einmal selbst erzeugt hat, liest die des Taschenrechners anders.' }
    ]
  },

  sections: [
    {
      id: 'aufbau',
      eyebrow: 'Aufbau der Prüfung',
      h2: 'Wie ist das schriftliche Mathe-Abitur 2027 aufgebaut?',
      lede: 'Jedes Land regelt das selbst, viele Aufgaben stammen aber aus demselben ländergemeinsamen Pool. Nordrhein-Westfalen hat seine Vorgaben für 2027 besonders genau veröffentlicht, deshalb dient es hier als durchgerechnetes Beispiel.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Nordrhein-Westfalen, schriftliches Abitur Mathematik 2027: wer was auswählt', head: ['', 'Grundkurs', 'Leistungskurs'], rows: [
          ['Teil A, Pflichtaufgaben', '3: je eine zu Analysis, Vektorieller Geometrie, Stochastik', '4: zwei zu Analysis, je eine zu Geometrie und Stochastik'],
          ['Teil A, Wahlpflicht', '2 aus 6, Sie wählen selbst', '2 aus 6, Sie wählen selbst'],
          ['Teil A, zusammen', '5 Aufgaben ohne Hilfsmittel', '6 Aufgaben ohne Hilfsmittel'],
          ['Teil A, Abgabe spätestens', 'nach 100 Minuten', 'nach 110 Minuten'],
          ['Teil B', '3 Aufgaben mit Hilfsmitteln', '3 Aufgaben mit Hilfsmitteln'],
          ['Teil B, wer wählt?', 'Die Lehrkraft wählt eine von zwei Analysisaufgaben', 'Die Lehrkraft wählt eine von zwei Analysisaufgaben'],
          ['Arbeitszeit gesamt', '255 Minuten', '300 Minuten']
        ] },
        { kind: 'source', html: 'Quelle: Ministerium für Schule und Bildung NRW, Standardsicherung, "Zentralabitur 2027, Mathematik" (Vorgaben) und "Organisatorische Vorgaben zur Durchführung der Abiturprüfung im Fach Mathematik ab dem Prüfungsjahr 2026", gelesen am 3. November 2026. Die Zeiten verstehen sich einschließlich Auswahlzeit.' },
        { kind: 'two', mt: true,
          leftH3: 'Was die Tabelle für die Vorbereitung heißt',
          left: [
            'Im Wahlpflichtteil von Teil A liegen sechs Aufgaben, zwei zu jedem Sachgebiet, und Sie bearbeiten zwei davon. Die Vorgaben erlauben ausdrücklich, beide aus demselben Sachgebiet zu nehmen. Wer in Stochastik sicher ist, kann dort also doppelt punkten. Wer aber nur ein Gebiet übt, steht im Pflichtteil trotzdem vor allen drei.',
            'In Teil B dagegen wählen nicht Sie. Laut NRW-Vorgaben 2027 ist eine Aufgabenauswahl durch die Schülerinnen und Schüler im zweiten Prüfungsteil nicht vorgesehen; die Lehrkraft entscheidet sich für eine der beiden Analysisaufgaben, Geometrie und Stochastik sind fest. Eine Lücke in einem Gebiet lässt sich dort nicht umgehen.'
          ],
          rightH3: 'Wann Sie Teil A abgeben',
          right: [
            'Zu Beginn liegen alle Aufgaben auf dem Tisch, der Taschenrechner und die Formelsammlung aber noch nicht. Nach den organisatorischen Vorgaben aus NRW entscheidet jeder Prüfling selbst, wann er Teil A abgibt und die Hilfsmittel bekommt, im Grundkurs spätestens nach 100, im Leistungskurs spätestens nach 110 Minuten.',
            'Wer früher abgibt, hat mehr Zeit für die langen Aufgaben: im Grundkurs mindestens 155, im Leistungskurs mindestens 190 Minuten. Wir trainieren deshalb, wie viele Minuten Sie für Teil A wirklich brauchen, und zwar früh im Schuljahr, nicht erst in der letzten Woche.'
          ] },
        { kind: 'p', mt: true, html: 'Und in den anderen Ländern? Seit dem Prüfungsjahr 2017 gibt es nach Angaben des Instituts zur Qualitätsentwicklung im Bildungswesen (IQB) ländergemeinsame Aufgabenpools für Mathematik, und seit 2022 finden die Prüfungen in Mathematik weitgehend an gemeinsamen Terminen statt. Welche Poolaufgaben ein Land verwendet und wie viele eigene es ergänzt, entscheidet dort jeweils eine landeseigene Kommission. Der Berliner Prüfungsplan für 2026/27 (Stand 15.09.2026) führt Mathematik unter "Mi, 05.05.2027", also ebenfalls am Mittwoch, dem 5. Mai 2027. Fragen Sie für die Einzelheiten Ihres Landes immer Ihre Schule: Der Schulkurs und die Regeln Ihres Landes sind das, was zählt, wir unterrichten begleitend.' }
      ]
    },
    {
      id: 'lk',
      eyebrow: 'Grundkurs und Leistungskurs',
      h2: 'Was kommt im Mathe-Abitur nur im Leistungskurs dran?',
      lede: 'Die Sachgebiete sind dieselben, die Tiefe nicht. Die Fokussierungen in den NRW-Vorgaben für 2027 zeigen den Unterschied so genau wie kaum ein anderes Dokument.',
      body: [
        { kind: 'table', numCols: [], caption: 'Inhalte, die die NRW-Vorgaben 2027 nur für den Leistungskurs nennen (Auswahl)', head: ['Sachgebiet', 'Grundkurs', 'Zusätzlich im Leistungskurs'], rows: [
          ['Funktionen', 'Ganzrationale Funktionen, Exponentialfunktionen, Sinus und Kosinus, Wurzel und 1/x', 'Sinusfunktionen der Form a &middot; sin(b &middot; (x + c)) + d, natürliche Logarithmusfunktion, Potenzfunktionen mit rationalem Exponenten'],
          ['Ableiten', 'Produktregel; Kettenregel nur bei e-Funktion mit linearer innerer Funktion', 'Kettenregel allgemein, Funktionsscharen, Eigenschaften in Abhängigkeit von Parametern'],
          ['Geometrie', 'Ebenen in Parameter- und Koordinatenform, Schnittwinkel, Schnittpunkte', 'Normalenform, Lagebeziehungen und Abstände von Punkten, Geraden und Ebenen in allen Kombinationen'],
          ['Stochastik', 'Baumdiagramme, Vierfeldertafeln, Binomialverteilung mit Histogrammen', 'Binomialkoeffizient, &sigma;-Regeln, Normalverteilung mit &mu; und &sigma;']
        ] },
        { kind: 'source', html: 'Quelle: NRW, Vorgaben "Zentralabitur 2027, Mathematik", Teil III, Übersicht der inhaltlichen Schwerpunkte und Fokussierungen. Die Vorgaben betonen, dass die gesamte Obligatorik des Kernlehrplans verbindlich bleibt; die Fokussierungen ersetzen den Lehrplan nicht.' },
        { kind: 'p', mt: true, html: 'Für die Vorbereitung bedeutet das: Ein Leistungskurs braucht deutlich mehr Zeit für Parameter. Eine Funktionenschar, also eine Funktion mit einem zusätzlichen Buchstaben wie a oder k, verlangt dieselben Schritte wie eine gewöhnliche Kurvendiskussion, nur dass jedes Ergebnis selbst wieder von a abhängt. Genau daran scheitern viele, weil sie mit Zahlen sicher sind, mit Buchstaben aber unsicher werden. Im Grundkurs liegt der Schwerpunkt eher auf sauberem Rechnen mit ganzrationalen und Exponentialfunktionen und auf Stochastik mit Baumdiagramm und Vierfeldertafel.' },
        { kind: 'p', html: 'Bundesweit gelten seit dem Beschluss der Kultusministerkonferenz vom 18.10.2012 die Bildungsstandards für die Allgemeine Hochschulreife in Mathematik. Sie beschreiben sechs allgemeine Kompetenzen, von Mathematisch argumentieren (K1) über Probleme mathematisch lösen (K2) bis Mathematisch modellieren (K3), und fünf Leitideen von Algorithmus und Zahl (L1) bis Daten und Zufall (L5). Die Länder bauen ihre Lehrpläne darauf auf, deshalb ähneln sich die Prüfungen trotz unterschiedlicher Vorgaben.' }
      ]
    },
    {
      id: 'rechner',
      eyebrow: 'Hilfsmittel',
      h2: 'Welcher Taschenrechner ist im Mathe-Abitur erlaubt, und was darf er?',
      lede: 'In Nordrhein-Westfalen schreiben Kurse entweder mit einem einfachen wissenschaftlichen Taschenrechner (WTR) oder mit einem Computer-Algebra-System bzw. modularen Mathematiksystem (CAS/MMS). Die Anforderungen wurden im Rahmen des ländergemeinsamen Pools erarbeitet.',
      body: [
        { kind: 'table', numCols: [], caption: 'Einfacher wissenschaftlicher Taschenrechner (WTR) im Abitur ab 2026: was er können muss und was nicht vorgesehen ist', head: ['Vorausgesetzt', 'Nicht vorgesehen'], rows: [
          ['Werte eines Terms mit einer Variablen als Tabelle ausgeben', 'Terme mit Variablen umformen'],
          ['Einzelne und kumulierte Werte der Binomialverteilung', 'Gleichungen oder Gleichungssysteme lösen'],
          ['Werte der Normalverteilung', 'Differenzieren, Integrieren, Werte einer Ableitung oder eines Integrals berechnen'],
          ['Grundrechenarten, trigonometrische Funktionen und ihre Umkehrungen', 'Funktionsgraphen darstellen, mit Vektoren und Matrizen rechnen']
        ] },
        { kind: 'source', html: 'Quelle: NRW Standardsicherung, "Anforderungen an die Funktionalität eines einfachen wissenschaftlichen Taschenrechners (WTR) in der schriftlichen Abiturprüfung im Fach Mathematik ab dem Jahr 2026", gelesen am 3. November 2026. Dasselbe Dokument enthält die Anforderungen an CAS und MMS ab dem Jahr 2030.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Die Wertetabelle zählt', p: 'Der WTR darf keine Gleichung lösen, aber er muss eine Wertetabelle ausgeben. Mit ihr prüfen Sie ein Extremum oder einen Vorzeichenwechsel, den Sie vorher von Hand berechnet haben. Wir üben das in jeder Analysisstunde.' },
          { h3: 'Formelsammlung ab 2027 Pflicht', p: 'Für das Abitur 2027 ist in Nordrhein-Westfalen die ländergemeinsame mathematisch-naturwissenschaftliche Formelsammlung als Hilfsmittel verpflichtend, alternativ ein fachspezifischer Auszug daraus. Kennen Sie sie, bevor Sie sie in der Prüfung zum ersten Mal aufschlagen.' },
          { h3: 'Kein Grafikrechner mehr nötig', p: 'Die Pflicht zur Anschaffung eines grafikfähigen Taschenrechners entfällt in NRW laut Schulmail vom 23.09.2022 für die Jahrgänge, die ab dem Schuljahr 2023/24 in die Einführungsphase eingetreten sind. Welches Gerät Ihr Kurs nutzt, sagt Ihnen die Schule.' }
        ] },
        { kind: 'p', mt: true, html: 'Ein Wörterbuch zur deutschen Rechtschreibung ist laut NRW-Vorgaben in beiden Prüfungsteilen zugelassen. Für Schülerinnen und Schüler, die zu Hause Englisch sprechen, ist das ein kleiner, aber echter Vorteil: Die Aufgaben sind auf Deutsch, die Begründungen schreiben Sie auf Deutsch, und ein Wörterbuch hilft bei der Rechtschreibung. Mathematische Begriffe lernen Sie bei uns ohnehin in beiden Sprachen.' }
      ]
    },
    {
      id: 'plan',
      eyebrow: 'Vorbereitungsplan',
      h2: 'Wie bereitet man sich in sechs Monaten auf das Mathe-Abitur vor?',
      lede: 'Von Anfang November 2026 bis zum 5. Mai 2027 bleiben rund sechs Monate. In Nordrhein-Westfalen endet der Unterricht für die Q2 schon am Freitag, dem 19. März 2027. So teilen wir die Zeit auf, als Vorschlag, den der Mentor an Ihren Kurs anpasst.',
      body: [
        { kind: 'ol', items: [
          '<strong>November und Dezember 2026: Bestandsaufnahme.</strong> Eine alte Klausur aus Ihrem Kurs, ohne Zeitdruck gerechnet, zeigt, welches Sachgebiet am meisten Punkte kostet. Dort beginnen wir, nicht bei Kapitel 1.',
          '<strong>Januar 2027: Analysis vertiefen.</strong> Ableitungsregeln ohne Hilfsmittel, Kurvendiskussion, im Leistungskurs Funktionenscharen. Jede Woche zehn Minuten Teil-A-Training mit der Uhr.',
          '<strong>Februar 2027: Geometrie und Stochastik.</strong> Ebenen, Schnittwinkel und Abstände; Baumdiagramm, Vierfeldertafel, Binomialverteilung. Die Werte der Verteilung holen Sie mit dem Rechner, das Modell stellen Sie selbst auf.',
          '<strong>März 2027: echte Poolaufgaben.</strong> Das IQB veröffentlicht nach jedem Prüfungsjahr die genutzten Poolaufgaben mit Erwartungshorizonten und Bewertungshinweisen. Wir rechnen sie mit Ihnen und vergleichen Ihre Lösung mit dem Erwartungshorizont, Satz für Satz.',
          '<strong>Ab 19. März 2027: Probeklausuren.</strong> Zwei oder drei vollständige Klausuren unter Prüfungsbedingungen, 255 oder 300 Minuten, mit dem Gerät und der Formelsammlung, die Sie auch im Abitur haben.',
          '<strong>Letzte Woche: nur noch Teil A.</strong> Kurze, hilfsmittelfreie Aufgaben halten das Rechnen ohne Rechner wach. Neue Themen fangen wir jetzt nicht mehr an.'
        ] },
        { kind: 'p', mt: true, html: 'Dieser Plan ist unser eigener Vorschlag, keine Vorgabe eines Ministeriums. In Ländern mit anderen Prüfungsterminen verschieben wir die Blöcke entsprechend. Die schriftlichen Hauptprüfungen in Nordrhein-Westfalen laufen 2027 vom 13. April bis zum 5. Mai und beginnen jeweils um 9:00 Uhr; Mathematik ist dort der letzte Haupttermin.' }
      ]
    },
    {
      id: 'beispiel',
      tint: 'tint',
      eyebrow: 'Eine Übungsaufgabe',
      h2: 'Wie löst man eine Funktionenschar im Abitur?',
      lede: 'Funktionsscharen stehen in den NRW-Vorgaben 2027 nur beim Leistungskurs. Die folgende Aufgabe ist unsere eigene, keine Prüfungsaufgabe. Sie zeigt den Grundgedanken: erst allgemein mit dem Parameter rechnen, dann ein Mitglied der Schar mit einer Wertetabelle prüfen.',
      body: [
        { kind: 'p', html: '<strong>Aufgabe (unsere).</strong> Gegeben ist für a &gt; 0 die Funktionenschar f<sub>a</sub>(x) = x&sup3; &minus; 3a&sup2;x. (1) Bestimmen Sie die Extrempunkte in Abhängigkeit von a. (2) Zeigen Sie, dass alle Hochpunkte auf dem Graphen von y = &minus;2x&sup3; liegen. (3) Für welches a liegt der Tiefpunkt bei y = &minus;16?' },
        { kind: 'p', html: '<strong>Lösung zu (1).</strong> f<sub>a</sub>\'(x) = 3x&sup2; &minus; 3a&sup2;. Aus 3x&sup2; &minus; 3a&sup2; = 0 folgt x = a oder x = &minus;a. Die zweite Ableitung ist f<sub>a</sub>\'\'(x) = 6x; bei x = a ist sie 6a &gt; 0, also liegt dort ein Tiefpunkt, bei x = &minus;a ist sie &minus;6a &lt; 0, also ein Hochpunkt. Einsetzen: f<sub>a</sub>(a) = a&sup3; &minus; 3a&sup3; = &minus;2a&sup3; und f<sub>a</sub>(&minus;a) = &minus;a&sup3; + 3a&sup3; = 2a&sup3;. Damit gilt T(a | &minus;2a&sup3;) und H(&minus;a | 2a&sup3;).' },
        { kind: 'p', html: '<strong>Lösung zu (2).</strong> Für den Hochpunkt ist x = &minus;a, also a = &minus;x. Eingesetzt in y = 2a&sup3; ergibt sich y = 2(&minus;x)&sup3; = &minus;2x&sup3;. Diese Kurve heißt Ortskurve der Hochpunkte; sie gilt hier für x &lt; 0, weil a positiv ist. <strong>Lösung zu (3).</strong> &minus;2a&sup3; = &minus;16 liefert a&sup3; = 8, also a = 2 und T(2 | &minus;16).' },
        { kind: 'code', label: 'Die Probe: drei Mitglieder der Schar und eine Wertetabelle', lang: 'Python', code: PY, note: 'Ausgabe, so wie wir sie mit <code>python3 -I</code> erhalten haben: <code>a = 1/2: T(1/2 | -1/4), H(-1/2 | 1/4), T = -2a^3: True | H auf y = -2x^3: True</code>, ebenso <code>True</code> und <code>True</code> für a = 1 mit T(1 | -2) und für a = 2 mit T(2 | -16), H(-2 | 16). Die Wertetabelle für a = 2 lautet: x = 0.0 bis 4.0 in Schritten von 0.5 ergibt 0.000, -5.875, -11.000, -14.625, -16.000, -14.375, -9.000, 0.875, 16.000.' },
        { kind: 'table', mt: true, numCols: [0, 1], caption: 'Die Wertetabelle für a = 2, wie sie auch ein einfacher Taschenrechner ausgibt', head: ['x', 'f<sub>2</sub>(x)'], rows: [
          ['1,5', '&minus;14,625'],
          ['2,0', '&minus;16,000'],
          ['2,5', '&minus;14,375'],
          ['3,0', '&minus;9,000'],
          ['3,5', '0,875']
        ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Allgemein zuerst.</strong> Rechnen Sie mit a, solange es geht, und setzen Sie Zahlen erst ganz am Ende ein. Sonst lösen Sie nur eine Aufgabe statt einer ganzen Familie.',
          '<strong>Ein Mitglied prüfen.</strong> Die Tabelle zeigt um x = 2 den kleinsten Wert &minus;16 und auf beiden Seiten größere Werte. Das bestätigt den Tiefpunkt, den wir vorher allgemein gefunden haben.',
          '<strong>Den zweiten Hinweis lesen.</strong> Zwischen x = 3,0 und x = 3,5 wechselt das Vorzeichen. Die Nullstelle dort ist 2&radic;3, ungefähr 3,46, denn f<sub>a</sub>(x) = x(x&sup2; &minus; 3a&sup2;). Die Tabelle beweist nichts, aber sie fängt Rechenfehler, bevor sie Punkte kosten.'
        ] }
      ]
    },
    {
      id: 'englisch',
      eyebrow: 'Unterricht auf Englisch',
      h2: 'Kann man sich auf Englisch auf das deutsche Mathe-Abitur vorbereiten?',
      lede: 'Ja, und für manche ist das sogar leichter. Das Abitur selbst schreiben Sie auf Deutsch; wir unterrichten auf Englisch und nennen zu jedem Begriff das deutsche Wort, das in Ihrer Klausur steht.',
      body: [
        { kind: 'table', numCols: [], caption: 'Fachwörter aus dem Abiturjahr, Deutsch und Englisch (unsere Auswahl)', head: ['In der Klausur', 'Im Unterricht', 'Worum es geht'], rows: [
          ['Funktionenschar', 'family of functions', 'eine Funktion mit Parameter, etwa f<sub>a</sub>'],
          ['Ortskurve', 'locus of the turning points', 'die Kurve, auf der alle Extrempunkte einer Schar liegen'],
          ['Steckbriefaufgabe', 'reconstructing a function from conditions', 'aus Bedingungen den Funktionsterm bestimmen'],
          ['Bestandsfunktion', 'accumulation function', 'aus einer Änderungsrate den Bestand berechnen'],
          ['Normalenvektor', 'normal vector', 'ein Vektor senkrecht zu einer Ebene'],
          ['Vierfeldertafel', 'two-way table', 'zwei Merkmale und ihre Häufigkeiten'],
          ['Erwartungswert', 'expected value', 'der Mittelwert einer Zufallsgröße auf lange Sicht']
        ] },
        { kind: 'p', mt: true, html: 'Viele Lernende, die mit Englisch aufgewachsen sind oder eine internationale Schule besucht haben, verstehen einen Beweisgedanken auf Englisch schneller. Andere wollen ihr Englisch fürs Studium verbessern und nutzen die Mathestunden dafür. Unsere Mentoren arbeiten von Indien aus, sprechen langsam und deutlich, wiederholen eine schwierige Stelle mit anderen Worten und passen sich an Ihre Aussprache an. Ihre Lösungen schreiben Sie im Unterricht so auf, wie Sie es in der Klausur tun würden, auf Deutsch, wenn Sie das möchten.' }
      ]
    },
    {
      id: 'zeiten',
      eyebrow: 'Unterrichtszeiten',
      h2: 'Wann findet die Abiturvorbereitung statt?',
      lede: 'Die Mentoren arbeiten in Indien, die Stunden liegen trotzdem in Ihrem Nachmittag oder an Ihrem Wochenende. Die Tabelle zeigt einige Beispiele, umgerechnet für Winter und Sommer.',
      body: [
        { kind: 'table', numCols: [], caption: 'Vier Beispieltermine, umgerechnet in die Uhrzeit des Mentors', head: ['Deutsche Zeit', 'Indische Zeit bis 27. März 2027 (MEZ)', 'Indische Zeit ab 28. März 2027 (MESZ)'], rows: [
          ['14:00', '18:30', '17:30'],
          ['16:45', '21:15', '20:15'],
          ['Samstag 11:30', '16:00', '15:00'],
          ['Sonntag 10:00', '14:30', '13:30']
        ] },
        { kind: 'source', html: 'Rechtsgrundlage ist das Einheiten- und Zeitgesetz: MEZ entspricht UTC+1, MESZ entspricht UTC+2. Seit dem 25. Oktober 2026 gilt wieder MEZ, ab dem 28. März 2027 erneut MESZ. Weil Indien das ganze Jahr UTC+5:30 hat, beträgt der Abstand jetzt viereinhalb und ab Ende März dreieinhalb Stunden. Die Zeiten sind Beispiele, keine festen Kurszeiten.' },
        { kind: 'p', mt: true, html: 'In den Wochen vor dem Abitur buchen viele zusätzlich einzelne Stunden, etwa für eine Probeklausur am Samstagvormittag mit anschließender Besprechung. Bei der Buchung sehen Sie alle Zeiten in Ihrer eigenen Zeitzone.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Fortschritt',
    h2: 'Woran Sie erkennen, dass die Vorbereitung wirkt',
    lede: 'Vier Stufen, mit denen wir den Stand vor dem Abitur einschätzen. Die Einteilung ist unsere eigene.',
    table: { caption: 'Vier Stufen der Abiturvorbereitung in Mathematik (unsere)', head: ['Stufe', 'Woran man sie erkennt', 'Nächster Schritt'], rows: [
      ['1. Rezepte', 'Aufgaben gelingen, wenn sie aussehen wie im Heft', 'die Frage hinter jedem Rechenschritt stellen'],
      ['2. Sicher ohne Rechner', 'Teil A in der vorgegebenen Zeit, mit wenigen Fehlern', 'Parameter und Begründungen üben'],
      ['3. Selbst prüfen', 'eigene Ergebnisse mit Wertetabelle oder Probe kontrollieren', 'ganze Poolaufgaben unter Zeitdruck'],
      ['4. Prüfungsreif', 'eine vollständige Klausur in 255 oder 300 Minuten ohne Einbruch', 'nur noch wiederholen, keine neuen Themen']
    ] },
    left: { h3: 'Für Eltern', ps: [
      'Nach jeder Probeklausur erhalten Sie eine kurze Rückmeldung: welches Sachgebiet Punkte gekostet hat, wie viel Zeit Teil A gebraucht hat und was in den nächsten Wochen dran ist.',
      'Noten versprechen wir nicht. Was wir zeigen können, ist, ob Ihr Kind von Woche zu Woche sicherer und schneller wird.'
    ] },
    right: { h3: 'Für Schülerinnen und Schüler', ps: [
      'Schreiben Sie bei jeder Probeklausur die Uhrzeit auf, zu der Sie Teil A abgeben. Die Zahl sagt mehr über Ihren Stand als jede Note.',
      'Nach jeder Rechnung eine Probe: einsetzen, Tabelle ansehen, Vorzeichen prüfen. Zehn Sekunden, die oft einen ganzen Aufgabenteil retten.'
    ] }
  },

  catalogue: {
    eyebrow: 'Weitere Kurse',
    h2: 'Neun weitere Kurse rund um Mathematik',
    lede: 'Live und auf Englisch, in einer Gruppe oder einzeln, jeweils mit einem Mentor, der Sie über Monate begleitet.',
    bands: [
      { num: 'I', h3: 'Grundlagen festigen', sub: '13 bis 19 Jahre', courses: [
        { code: 'MAV / BASIS / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra von Grund auf', blurb: 'Terme, Gleichungen und Funktionen, bis sie sitzen.' },
        { code: 'MAV / BASIS / 02', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Mittelstufenmathematik', blurb: 'Lücken aus Klasse 7 bis 10 gezielt schließen.' },
        { code: 'MAV / BASIS / 03', slug: 'statistics-probability-maths-course', title: 'Statistik und Wahrscheinlichkeit', blurb: 'Baumdiagramme, Verteilungen und Kenngrößen vertiefen.' }
      ] },
      { num: 'II', h3: 'Andere Abschlüsse', sub: '15 bis 19 Jahre', courses: [
        { code: 'MAV / INT / 01', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB Maths AA und AI', blurb: 'Für das IB Diploma, SL und HL.' },
        { code: 'MAV / INT / 02', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level Maths', blurb: 'Pure, Mechanics und Statistics für britische Abschlüsse.' },
        { code: 'MAV / INT / 03', slug: 'igcse-mathematics-mastery', title: 'IGCSE Mathematics', blurb: 'Vor der Oberstufe an internationalen Schulen.' }
      ] },
      { num: 'III', h3: 'Über das Abitur hinaus', sub: '16 Jahre und älter', courses: [
        { code: 'MAV / WEITER / 01', slug: 'college-mathematics-complete-masterclass', title: 'Mathematik für das Studium', blurb: 'Analysis und Lineare Algebra für das erste Semester.' },
        { code: 'MAV / WEITER / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Wettbewerbsmathematik', blurb: 'Beweise und Problemlösen für Mathebegeisterte.' },
        { code: 'MAV / WEITER / 03', slug: 'data-analytics-mathematics-masterclass', title: 'Mathematik für Datenanalyse', blurb: 'Statistik und Lineare Algebra in der Anwendung.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Ablauf',
    h2: 'Wie die Live-Vorbereitung abläuft',
    lede: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche.',
    slots: [
      { time: 'Nachmittag', l: 'Nach dem Kursunterricht, wenn der Stoff des Tages noch frisch ist.' },
      { time: 'Wochenende', l: 'Vormittags, gut geeignet für lange Probeklausuren.' },
      { time: 'Einzeln', l: 'Vor Klausuren und Vorabiturklausuren nach Absprache.' }
    ],
    cells: [
      { h3: 'Ein Mentor', p: 'Dieselbe Person kennt Ihren Kurs, Ihren Rechner und Ihre typischen Fehler.' },
      { h3: 'Mit Uhr', p: 'Teil A wird regelmäßig gegen die Zeit geübt.' },
      { h3: 'Echte Poolaufgaben', p: 'Veröffentlichte Aufgaben des IQB mit Erwartungshorizont.' },
      { h3: 'Ihr Gerät', p: 'Wir arbeiten mit dem WTR oder CAS, den Ihre Schule vorgibt.' },
      { h3: 'Zwei Sprachen', p: 'Erklärt auf Englisch, jedes Fachwort auch auf Deutsch.' },
      { h3: 'Zwei Formate', p: 'Eine Oberstufengruppe von fünfzehn bis zwanzig, oder nur Sie mit dem Mentor.' }
    ]
  },

  projectsH2: 'Was Lernende bei uns bauen',
  projectsLede: 'Wer Mathematik und Programmieren verbindet, baut irgendwann eigene Werkzeuge. Einige Projekte unserer Lernenden sehen Sie unten; mehr gibt es auf <a class="ag-inline-link" href="/student-labs">Student labs</a> (Englisch).',
  reviewsLede: 'Was Familien und Lernende auf Google über uns schreiben, im englischen Original belassen.',

  fees: {
    h2: 'Was die Abiturvorbereitung kostet',
    lede: 'Sie zahlen monatlich, acht Live-Stunden sind enthalten. Auf dieser Seite sehen Sie die Beträge in Euro, umgerechnet zum Referenzkurs der Europäischen Zentralbank. Abgebucht wird der Betrag in US-Dollar, und Ihre Bank rechnet ihn in Euro um, weshalb er auf dem Kontoauszug um einige Cent abweichen kann.',
    free: ['Eine kostenlose Probestunde', 'Ein Blick auf eine alte Klausur aus Ihrem Kurs', 'Keine Kartenangabe'],
    group: ['Fünfzehn bis zwanzig Lernende aus der Oberstufe', 'Derselbe Mentor jede Woche', 'Zwei Stunden pro Woche', 'Monatlich, ohne lange Bindung'],
    one: ['Sie und Ihr Mentor allein', 'Ihr Kurs, Ihr Rechner, Ihr Tempo', 'Termine nach Absprache, auch kurz vor der Prüfung']
  },

  faq: {
    eyebrow: 'Häufige Fragen',
    h2: 'Mathe-Abitur-Vorbereitung online: häufige Fragen',
    items: [
      { q: 'Findet der Unterricht auf Deutsch statt?', a: 'Nein. Wir unterrichten ausschließlich auf Englisch, immer live, und nennen zu jedem Fachbegriff das deutsche Wort, das in Ihrer Klausur steht. So üben Sie Mathematik und Englisch zugleich, was für ein Studium im In- oder Ausland ein echter Vorteil ist.' },
      { q: 'Wann ist das Mathe-Abitur 2027?', a: 'In Nordrhein-Westfalen ist der Haupttermin für Mathematik im Grund- und Leistungskurs Mittwoch, der 5. Mai 2027, Beginn 9:00 Uhr. Der Berliner Prüfungsplan 2026/27 nennt für Mathematik ebenfalls den 5. Mai 2027. Für andere Länder gilt der Termin, den Ihre Schule bekannt gibt.' },
      { q: 'Wie lange dauert das Mathe-Abitur?', a: 'Nach den NRW-Vorgaben für 2027 beträgt die Arbeitszeit einschließlich Auswahlzeit im Grundkurs 255 Minuten und im Leistungskurs 300 Minuten. Den hilfsmittelfreien Teil A geben Sie im Grundkurs spätestens nach 100, im Leistungskurs spätestens nach 110 Minuten ab.' },
      { q: 'Darf ich im Mathe-Abitur Aufgaben auswählen?', a: 'In Nordrhein-Westfalen ja, aber nur in Teil A: Aus sechs Wahlpflichtaufgaben bearbeiten Sie zwei, auch beide aus demselben Sachgebiet. In Teil B wählt die Lehrkraft eine von zwei Analysisaufgaben aus, die Aufgaben zu Geometrie und Stochastik sind fest vorgegeben.' },
      { q: 'Was kann ein einfacher Taschenrechner im Abitur?', a: 'Laut den NRW-Anforderungen ab 2026 muss ein WTR Wertetabellen eines Terms ausgeben und Werte der Binomial- und Normalverteilung berechnen. Gleichungen lösen, ableiten, integrieren oder Graphen zeichnen ist nicht vorgesehen. Diese Schritte rechnen Sie von Hand.' },
      { q: 'Was ist der Unterschied zwischen Leistungskurs und Grundkurs in Mathe?', a: 'Die Sachgebiete sind gleich, der Leistungskurs geht weiter. Die NRW-Vorgaben 2027 nennen nur für den Leistungskurs unter anderem Funktionsscharen, die allgemeine Kettenregel, die natürliche Logarithmusfunktion, Abstände zwischen Punkten, Geraden und Ebenen sowie die Normalverteilung.' },
      { q: 'Wo finde ich echte Abituraufgaben zum Üben?', a: 'Das IQB veröffentlicht nach jedem Prüfungsjahr die von den Ländern genutzten Poolaufgaben, zusammen mit Erwartungshorizonten und Bewertungshinweisen. Viele Länder stellen außerdem eigene alte Aufgaben bereit. Wir arbeiten mit diesen Aufgaben und mit eigenen Übungen; Prüfungsaufgaben veröffentlichen wir nicht nach.' },
      { q: 'Zu welchen Uhrzeiten kann ich üben?', a: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche. Ein Beispiel: 14:00 Uhr deutscher Zeit ist bis zum 27. März 2027 18:30 Uhr in Indien.' },
      { q: 'Bekomme ich durch die Vorbereitung eine bessere Abiturnote?', a: 'Eine Note können und wollen wir nicht versprechen. Das Abitur nimmt Ihre Schule ab, und Ihr Schulkurs ist das, was zählt. Wir unterrichten begleitend: Wir zeigen Ihnen, wo Punkte verloren gehen, üben gezielt und messen, ob Sie in den Probeklausuren sicherer werden.' },
      { q: 'Was kostet die Vorbereitung, und in welcher Währung zahle ich?', a: 'Sie zahlen einen Monatsbeitrag. Angezeigt wird er in Euro, berechnet mit dem Kurs, den die Europäische Zentralbank veröffentlicht; belastet wird Ihr Konto in US-Dollar, und Ihre Bank übernimmt den Wechsel. Für die Probestunde zahlen Sie nichts und geben keine Karte an.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Weiterlesen',
    h2: 'Mehr zum Abitur und zu unserem Unterricht',
    lede: 'Die meisten davon sind auf Englisch geschrieben.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Unsere Übersicht für ganz Deutschland.' },
      { href: '/abitur-maths-in-english', label: 'Abitur maths in English', p: 'Bewertungseinheiten, Notenpunkte und Operatoren, ausführlich auf Englisch erklärt.' },
      { href: '/abitur-vs-ib-vs-a-levels-maths', label: 'Abitur vs IB vs A levels', p: 'Drei Mathe-Abschlüsse im direkten Vergleich.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Für das zweite MINT-Fach im Abitur, ebenfalls auf Englisch.' },
      { href: '/learn-to-think-not-copy-ai-germany', label: 'Learn to think, not copy AI', p: 'Warum wir Lösungswege erklären statt Ergebnisse liefern.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Unser Live-Unterricht im Detail.' }
    ]
  },

  start: {
    h2: 'Kostenlose Probestunde vereinbaren',
    lede: 'Bringen Sie zur ersten Stunde eine alte Klausur oder ein Übungsblatt aus Ihrem Kurs mit. Der Mentor rechnet eine Aufgabe mit Ihnen, schaut, wo es hakt, und schlägt dann einen Plan bis zum Abitur vor.',
    readFirst: 'Wer vorher lesen möchte: <a class="ag-inline-link" href="/abitur-maths-in-english">Abitur maths in English</a> erklärt die Bewertung, <a class="ag-inline-link" href="/courses/abitur-mathematics-course-in-english">der Kurs Abitur Mathematik in English</a> zeigt den Lehrplan (beide auf Englisch).',
    note: 'Unterricht live online mit Mentoren in Indien, nur auf Englisch. Wir sind mit keinem Ministerium, keiner Schule und nicht mit dem IQB verbunden. Per WhatsApp antworten wir am schnellsten.',
    formNote: 'Kostenlos, ohne Karte, ohne Verpflichtung.'
  },

  footer: {
    cols: [
      { h4: 'Mathematik', links: [
        { href: '/courses/abitur-mathematics-course-in-english', label: 'Abitur Mathematik' },
        { href: '/courses/complete-high-school-mathematics-mastery', label: 'Oberstufenmathematik' },
        { href: '/courses/maths-through-coding', label: 'Mathematik mit Python' },
        { href: '/courses', label: 'Alle Kurse' }
      ] },
      { h4: 'Deutschland', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/abitur-maths-in-english', label: 'Abitur maths in English' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/student-labs', label: 'Projekte' }
      ] }
    ],
    bottomRight: 'Erst allgemein, dann ein Mitglied prüfen'
  },

  personalityCss: `
.ag-root.ag-mav .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-mav .ag-capsule { border-left-width: 3px; }
.ag-root.ag-mav .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-mav .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-mav .ag-table td { hyphens: auto; }
`,

  dossier: {
    curriculumAuthority: 'NRW Ministerium für Schule und Bildung, Standardsicherung: Vorgaben Zentralabitur 2027 Mathematik, Organisatorische Vorgaben ab 2026, Anforderungen an digitale Mathematikwerkzeuge, Mathematik GOSt page, Termine 2027; Berlin Prüfungsplan 2026/27; IQB Abitur pages; KMK Bildungsstandards Mathematik AHR 2012; read 2 and 3 November 2026. Example our own.',
    localProject: 'An original Funktionenschar task f_a(x) = x³ − 3a²x solved in general (T(a | −2a³), H(−a | 2a³), Ortskurve y = −2x³, a = 2 for T at −16) and tested in Python for a = 1/2, 1, 2 with exact fractions plus the WTR-style value table for a = 2 (minimum −16 at x = 2, sign change between 3.0 and 3.5). Lesson family: a parameter stands for a whole family; solve in general, then test one member with a value table.',
    requiredMentions: ['f<sub>a</sub>(x) = x&sup3; &minus; 3a&sup2;x', 'H auf y = -2x^3: True', 'Ortskurve der Hochpunkte', '2 aus 6, Sie wählen selbst', 'Schulmail vom 23.09.2022', 'Werte eines Terms mit einer Variablen als Tabelle ausgeben', 'Mi, 05.05.2027', 'Erst allgemein, dann ein Mitglied prüfen'],
    sources: [
      { claim: 'NRW 2027 maths Abitur: task choice in Teil A and B, Hilfsmittel, 255 and 300 minutes, LK-only Fokussierungen.', url: 'https://www.standardsicherung.schulministerium.nrw.de/system/files/media/document/file/mathematik_2027_gg.pdf' },
      { claim: 'NRW: Teil A hand-in within 100 or 110 minutes; Teil B at least 155 or 190 minutes.', url: 'https://www.standardsicherung.schulministerium.nrw.de/system/files/media/document/file/organisatorische_vorgaben_fuer_das_pruefungsjahr_ab2026_gy_ge.pdf' },
      { claim: 'WTR functions required and not intended from 2026; CAS/MMS from 2030.', url: 'https://www.standardsicherung.schulministerium.nrw.de/system/files/media/document/file/anforderungen_digitale_mathematikwerkzeuge_abitur_2026_bzw_2030_neu.pdf' },
      { claim: 'Formelsammlung compulsory in NRW from Abitur 2027; graphing calculator obligation dropped (Schulmail 23.09.2022).', url: 'https://www.standardsicherung.schulministerium.nrw.de/zentralabitur-gost/faecher/mathematik-gost' },
      { claim: 'NRW 2027 dates: 13 April to 5 May, maths 5 May 2027, last Q2 teaching day 19 March 2027.', url: 'https://www.standardsicherung.schulministerium.nrw.de/zentralabitur-gost/termine/2027' },
      { claim: 'Berlin maths Abitur 5 May 2027.', url: 'https://www.berlin.de/sen/bildung/schule/pruefungen-und-abschluesse/pruefungsplan-2027.pdf' },
      { claim: 'IQB pools since 2017, common dates since 2022, Land commission, published tasks with Erwartungshorizonte.', url: 'https://www.iqb.hu-berlin.de/abitur/' },
      { claim: 'KMK Bildungsstandards Mathematik AHR, 18.10.2012, K1 to K6, L1 to L5.', url: 'https://www.kmk.org/fileadmin/Dateien/veroeffentlichungen_beschluesse/2012/2012_10_18-Bildungsstandards-Mathe-Abi.pdf' }
    ],
    rejectedClaims: [
      'German-language teaching: we teach in English only, and the page says so in the capsule and the FAQ.',
      'Any grade or Notenpunkte promise: refused; the school course is the one that counts.',
      'Reproducing real Abitur or pool tasks: refused; the example is our own.',
      'Abitur 2027 dates for Länder other than NRW and Berlin: not verified, so not stated.',
      'Any connection with the IQB, the KMK or a ministry: none, and the page says so.'
    ]
  }
};
