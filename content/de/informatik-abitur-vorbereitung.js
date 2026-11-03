'use strict';
// Informatik-Abitur Vorbereitung (ag- German-language door, Germany cluster P3, rows.tsv DE070, alloc code iav).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; the capsule
// says "auf Englisch". Formal "Sie" throughout. Pages show euro; checkout charges USD.
// Angle: the national frame every Land's Informatik-Abitur is built on, read from the KMK's Einheitliche
// Prüfungsanforderungen (EPA) Informatik: three Lern- und Prüfungsbereiche, six modelling techniques (at least two in the
// Grundkurs, three in the Leistungskurs), the three Anforderungsbereiche, the 45 and 75 percent thresholds; then one
// concrete Land, Nordrhein-Westfalen 2027 (task choice, minutes, Java and SQL), as the worked case. The Land-by-Land
// table lives on abitur-computer-science-in-english and is not repeated here.
// Sources (all fetched raw with curl -sL -A "Mozilla/5.0" on 3 Nov 2026; copies in
// ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/informatik-abitur-vorbereitung/):
//  - KMK, EPA Informatik, https://www.kmk.org/fileadmin/Dateien/veroeffentlichungen_beschluesse/1989/1989_12_01-EPA-Informatik.pdf
//    (epa.pdf, text epa.txt via PDFKit). Quotes: "(Beschluss der Kultusministerkonferenz vom 01.12.1989 i.d.F. vom 05.02.2004)";
//    "spätestens zur Abiturprüfung im Jahre 2007 umzusetzen"; "drei Lern- und Prüfungsbereiche sind für das Grundkursfach und
//    das Leistungskursfach verbindlich"; area names "Grundlegende Modellierungstechniken", "Interaktion mit und von
//    Informatiksystemen", "Möglichkeiten und Grenzen informatischer Verfahren"; "mindestens zwei im Grundkursfach und
//    mindestens drei im Leis-tungskursfach" (six techniques: Objektorientierte, Datenmodellierung, Zustandsorientierte,
//    Modellierung von Abläufen mit Algorithmen, Funktionale, Regelbasierte); "besteht aus zwei oder drei Aufga-ben";
//    "in jedem Fall auf den Bereich Grundlegende Modellierungstechniken beziehen"; "nicht auf die Inhalte nur eines
//    Kurshalbjahres beschränken"; "Schwergewicht ... im Anforderungsbereich II ... Anforderungsbereich I in höherem Maße als
//    Anforderungsbereich III"; "mindestens 45 Prozent" for "ausreichend" (05 Punkte), "Dazu reichen Leistungen allein im
//    Anforderungsbereich I nicht aus"; "mindestens 75 Prozent" for "gut" (11 Punkte); "erläuternde, kommentierende und
//    begründende Texte unverzichtbare Bestandteile der Prüfungsleistung"; "Fehler in der Fachsprache" count as fachliche
//    Fehler; Teilaufgaben "so unabhängig voneinander ..., dass eine Fehlleistung ... nicht die weitere Bearbeitung ...
//    unmöglich macht"; AFB II list includes "Begründen von bestimmten Eigenschaften (z. B. Terminierung, Zeit- und
//    Speicheraufwand)"; AFB III includes "Entwickeln einer Sprache".
//  - NRW Standardsicherung, Informatik GOSt page https://www.standardsicherung.schulministerium.nrw.de/zentralabitur-gost/faecher/informatik
//    (nrw-inf.html): "Vorgaben Abitur 2027 - Informatik - 14.08.2024", "Vorgaben Abitur 2028 - Informatik - 25.08.2025",
//    "Vorgaben Abitur 2029 - Informatik - 25.08.2026".
//  - NRW Vorgaben Zentralabitur 2027 Informatik, .../informatik_2027_gg.pdf (nrw-vorgaben-2027.pdf/.txt): "Beide Aufgabensätze
//    enthalten vier Aufgaben"; teacher picks "im Grundkurs zwei Aufgaben und im Leistungskurs drei Aufgaben";
//    "Eine Aufgabenauswahl durch die Schülerinnen und Schüler ist nicht vorgesehen"; "Die Arbeitszeit beträgt im Grundkurs
//    225 Minuten und im Leistungskurs 270 Minuten"; "Der Einsatz eines Computers ist für die Bearbeitung der Aufgaben nicht
//    vorgesehen"; Java and SQL listed; "Graphen (Klassen Graph, Vertex, Edge)" only in the Leistungskurs column.
//  - FACTS.md 42 (NRW written Abitur 13 April to 5 May 2027), 43 (last Q2 teaching day 19 March 2027), 97 (about
//    15 percent take Informatik in the Qualifikationsphase), 72 (Bayern central, on paper).
//  - Time: EinhZeitG; summer time ends 25 October 2026, begins 28 March 2027 (facts-geo/timezone.tsv).
// Our own: recursive binaer(n), compiled and run (javac/java openjdk 21; python3 -I): 0 -> 0, 1 -> 1, 2 -> 10,
// 13 -> 1101; binaer_fehler(13) -> 1101, binaer_fehler(0) -> RecursionError (Java would throw StackOverflowError).
// Lesson family: a recursion is only as good as its base case: test the smallest inputs first and argue termination.

const { DE: DE_DE } = require('../../scripts/nl/lib/market-de');

const JAVA = [
  'public class Binaer {',
  '    public static String binaer(int n) {',
  '        if (n < 2) {',
  '            return String.valueOf(n);',
  '        }',
  '        return binaer(n / 2) + (n % 2);',
  '    }',
  '',
  '    public static void main(String[] args) {',
  '        int[] tests = {0, 1, 2, 13};',
  '        for (int n : tests) {',
  '            System.out.println(n + " -> " + binaer(n));',
  '        }',
  '    }',
  '}'
].join('\n');

const PY = [
  'def binaer(n):',
  '    if n < 2:',
  '        return str(n)',
  '    return binaer(n // 2) + str(n % 2)',
  '',
  'def binaer_fehler(n):',
  '    if n == 1:',
  '        return "1"',
  '    return binaer_fehler(n // 2) + str(n % 2)',
  '',
  'for n in [0, 1, 2, 13]:',
  '    print(n, "->", binaer(n))',
  'print("binaer_fehler(13) ->", binaer_fehler(13))',
  'try:',
  '    binaer_fehler(0)',
  'except RecursionError:',
  '    print("binaer_fehler(0) -> RecursionError")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'german', label: 'Informatik-Abitur Vorbereitung' },
  slug: 'informatik-abitur-vorbereitung',
  code: 'iav',
  accent: '#246742',
  accentRationale: 'Informatik-Abitur Vorbereitung: a deep circuit-board green #246742, allocated for this page, clearly apart from the Informatik-Nachhilfe petrol and the Abitur maths slate; contrast 5.51 or better on the paper #FBF8F2 and on all three paper tints',
  pageType: 'market',
  market: DE_DE,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Deutschland' }],
  routeLabel: 'Informatik-Abitur Vorbereitung (auf Englisch)',
  title: 'Informatik-Abitur Vorbereitung: live auf Englisch, GK und LK',
  description: 'Informatik-Abitur Vorbereitung live auf Englisch: was die KMK im Grund- und Leistungskurs verlangt, Anforderungsbereiche, Punkte und ein Rekursionsbeispiel.',
  ogDescription: 'Vorbereitung auf das Informatik-Abitur, live auf Englisch: die bundesweiten Prüfungsanforderungen der KMK, das Zentralabitur 2027 in NRW als Beispiel, ein Plan bis zur Prüfung und eine eigene Rekursionsaufgabe.',
  twitterDescription: 'Informatik-Abitur vorbereiten, live auf Englisch: KMK-Anforderungen, AFB I bis III, NRW 2027, Rekursion mit Basisfall.',
  pageName: 'Informatik-Abitur Vorbereitung',
  webPageDescription: 'Ein Leitfaden für Schülerinnen und Schüler der Oberstufe und ihre Eltern zur Vorbereitung auf das Informatik-Abitur: die Einheitlichen Prüfungsanforderungen Informatik der Kultusministerkonferenz, die Anforderungsbereiche, die Schwellen für 05 und 11 Punkte, das Zentralabitur 2027 in Nordrhein-Westfalen als konkreter Fall und eine eigene Übungsaufgabe zur Rekursion in Java und Python.',
  courseDescription: 'Live-Online-Vorbereitung auf das Informatik-Abitur im Grundkurs und Leistungskurs, ausschließlich auf Englisch: Modellierung, Datenstrukturen, Algorithmen, Automaten, Datenbanken und Netze in Java oder Python, mit Aufgaben auf Papier, in der Gruppe oder im Einzelunterricht.',
  crumbs: [{ name: 'Kurse', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Informatik-Abitur',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Deutschland' },
    { href: '#bereiche', label: 'Bereiche' },
    { href: '#pruefung', label: 'Prüfung' },
    { href: '#beispiel', label: 'Beispiel' },
    { href: '#plan', label: 'Plan' }
  ],
  eyebrow: 'Deutschland &middot; Informatik &middot; Oberstufe und Abitur',
  h1: 'Informatik-Abitur Vorbereitung, live auf Englisch',
  lede: 'Jedes Land stellt sein Informatik-Abitur selbst, aber alle bauen auf denselben Prüfungsanforderungen der Kultusministerkonferenz auf. Diese Seite erklärt diesen gemeinsamen Rahmen: welche drei Bereiche geprüft werden, was die Anforderungsbereiche I, II und III verlangen, ab wie viel Prozent es 05 und 11 Punkte gibt, wie das Zentralabitur 2027 in Nordrhein-Westfalen konkret aussieht und wie Sie sich mit einem festen Mentor, live und auf Englisch, darauf vorbereiten.',
  secondaryCta: { href: '#bereiche', label: 'Was geprüft wird' },
  wa: 'Hallo Modern Age Coders, ich bereite mich auf das Informatik-Abitur vor und interessiere mich für Unterricht auf Englisch. Kann ich eine kostenlose Probestunde buchen?',
  heroNote: 'Abiturvorbereitung live per Video &middot; seit 2020 online &middot; mehr als 10.000 Lernende weltweit &middot; Unterricht auf Englisch',
  spec: [
    ['Für', 'Einführungs- und Qualifikationsphase'],
    ['Kurse', 'Grundkurs und Leistungskurs'],
    ['Sprachen', 'Java oder Python, dazu SQL'],
    ['Format', 'Gruppe mit fünfzehn bis zwanzig, oder einzeln'],
    ['Unterricht', 'Live, auf Englisch, Mentoren in Indien'],
    ['Probestunde', 'Kostenlos, ohne Karte']
  ],
  capsuleQ: 'Die Antwort in Kürze',
  capsule: 'Wer sich bei Modern Age Coders auf das Informatik-Abitur vorbereitet, lernt live und auf Englisch, im Grundkurs wie im Leistungskurs und in jedem Bundesland: Modellierung, Datenstrukturen, Algorithmen, Automaten und SQL in Java oder Python, geübt mit eigenen Aufgaben auf Papier im Stil der Prüfung. Grundlage ist unser Kurs Informatik Oberstufe und Abitur, wahlweise in einer Gruppe von fünfzehn bis zwanzig Lernenden oder einzeln, immer mit demselben Mentor.',

  picks: {
    eyebrow: 'Kurse für das Abitur',
    h2: 'Drei Kurse für die Zeit bis zur Prüfung',
    lede: 'Der erste Kurs ist der Kern der Vorbereitung. Die beiden anderen schließen Lücken davor und daneben: Grundlagen aus der Mittelstufe und Datenbanken mit SQL.',
    items: [
      { course: 'informatik-abitur-course-java-python', code: 'IAV / 01', title: 'Informatik Oberstufe und Abitur', alt: 'Kursbild Informatik Oberstufe und Abitur mit Java und Python', note: 'Ab 16 und bis 19. Klassen und Objekte, Listen, Stapel, Schlangen und Bäume, Automaten, Netze und SQL, mit Prüfungsaufgaben auf Papier, die wir selbst schreiben.' },
      { course: 'informatik-companion-course-klasse-5-10', code: 'IAV / 02', title: 'Informatik Companion, Klasse 5 bis 10', alt: 'Kursbild Informatik Companion für Klasse 5 bis 10', note: 'Für alle, die ohne Informatik aus der Mittelstufe in die Einführungsphase kommen: Schleifen, Bedingungen, Funktionen und Listen in Python, in Ruhe nachgeholt.' },
      { course: 'mysql-mastery-for-teens', code: 'IAV / 03', title: 'Datenbanken und SQL', alt: 'Kursbild Datenbanken und SQL für Jugendliche', note: 'Ab 13 Jahren. Tabellen, Schlüssel, Verbünde und Gruppierungen, also genau die Abfragen, die im Abitur als Text auf Papier geschrieben werden.' }
    ]
  },

  sections: [
    {
      id: 'bereiche',
      eyebrow: 'Der gemeinsame Rahmen',
      h2: 'Was wird im Informatik-Abitur bundesweit verlangt?',
      lede: 'Grundlage sind die Einheitlichen Prüfungsanforderungen in der Abiturprüfung Informatik, kurz EPA, ein Beschluss der Kultusministerkonferenz vom 01.12.1989 in der Fassung vom 05.02.2004. Die Länder sollten sie spätestens zur Abiturprüfung im Jahre 2007 umsetzen. Seitdem richten sich alle Landeslehrpläne für die Oberstufe danach.',
      body: [
        { kind: 'p', html: 'Die EPA nennen drei Lern- und Prüfungsbereiche, die für das Grundkursfach und das Leistungskursfach verbindlich sind: <strong>Grundlegende Modellierungstechniken</strong>, <strong>Interaktion mit und von Informatiksystemen</strong> sowie <strong>Möglichkeiten und Grenzen informatischer Verfahren</strong>. Der erste Bereich ist der wichtigste, denn jede schriftliche Prüfungsaufgabe muss sich laut EPA in jedem Fall auf ihn beziehen. Er enthält sechs Modellierungstechniken, von denen der Grundkurs mindestens zwei und der Leistungskurs mindestens drei behandeln muss.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Die sechs Modellierungstechniken der EPA Informatik und was jeweils dazugehört', head: ['Modellierungstechnik', 'Laut EPA insbesondere', 'Typisch im Unterricht (unsere Einordnung)'], rows: [
          ['Objektorientierte Modellierung', 'Objekt, Klasse, Beziehungen zwischen Klassen, Interaktion von Objekten, Klassendiagramm (z. B. mit UML)', 'Klassen in Java oder Python entwerfen, Assoziation und Vererbung im Diagramm'],
          ['Datenmodellierung', 'Semantisches Datenmodell (ER-Modell), logisches Datenmodell (z. B. relationales Datenmodell)', 'ER-Diagramm zeichnen, in Tabellen überführen, SQL-Abfragen schreiben'],
          ['Zustandsorientierte Modellierung', 'Variablenkonzept, Automaten (Zustände und Zustandsübergänge), Zustandsdiagramme', 'Endliche Automaten zeichnen und Wörter durchlaufen lassen'],
          ['Modellierung von Abläufen mit Algorithmen', 'Algorithmusbegriff, Ablaufstrukturen, Datenstrukturen, Teilalgorithmen, Struktogramme, z. B. Rekursion, Sortier- und Suchverfahren', 'Struktogramm lesen, Sortierverfahren verfolgen, Rekursion begründen'],
          ['Funktionale Modellierung', 'Funktionale Zusammenhänge, Kombination von Funktionen, funktionale Abstraktion', 'Seltener; Funktionen ohne Seiteneffekte, Verkettung'],
          ['Regelbasierte Modellierung', 'Fakten und Regeln, Klauseln, Anfragen', 'Selten; logische Programmierung, etwa in Prolog']
        ] },
        { kind: 'source', html: 'Quelle: Kultusministerkonferenz, Einheitliche Prüfungsanforderungen in der Abiturprüfung Informatik, Beschluss vom 01.12.1989 i.d.F. vom 05.02.2004, Abschnitt 1.2, gelesen am 3. November 2026. Die rechte Spalte ist unsere eigene Einschätzung dessen, was in Oberstufenkursen häufig vorkommt, keine Angabe der KMK.' },
        { kind: 'two', mt: true,
          leftH3: 'Die beiden anderen Bereiche',
          left: [
            'Zur Interaktion mit und von Informatiksystemen zählen die EPA unter anderem die Repräsentation von Information, formale Sprachen mit Syntax und Semantik, Netze und Kommunikationsprotokolle sowie Datenschutz und Datensicherheit, etwa Kryptologie.',
            'Unter Möglichkeiten und Grenzen informatischer Verfahren stehen das von-Neumann-Rechnermodell, die Beurteilung von Verfahren nach Effizienz, prinzipielle und praktische Grenzen der Berechenbarkeit sowie gesellschaftliche, ethische und rechtliche Fragen.'
          ],
          rightH3: 'Grundkurs oder Leistungskurs?',
          right: [
            'Beide Kursarten prüfen dieselben drei Bereiche. Der Unterschied liegt laut EPA unter anderem im Grad der Vorstrukturierung, in der Offenheit der Aufgabenstellung, in der Selbstständigkeit, im Abstraktions- und Formalisierungsgrad und in der Komplexität.',
            'Für die Vorbereitung heißt das: Im Grundkurs gibt die Aufgabe oft Zwischenschritte vor. Im Leistungskurs muss man den Weg häufiger selbst finden und begründen, warum er funktioniert.'
          ] }
      ]
    },
    {
      id: 'pruefung',
      eyebrow: 'Die schriftliche Prüfung',
      h2: 'Wie ist die schriftliche Informatik-Prüfung aufgebaut, und wann gibt es welche Punkte?',
      lede: 'Die EPA legen fest, wie eine Prüfungsaufgabe gebaut sein muss und wie sie bewertet wird. Wer das kennt, kann gezielter üben, statt nur Stoff zu wiederholen.',
      body: [
        { kind: 'ol', items: [
          '<strong>Zwei oder drei Aufgaben.</strong> Eine Prüfungsaufgabe im Fach Informatik besteht laut EPA aus zwei oder drei Aufgaben, jede kann in Teilaufgaben gegliedert sein.',
          '<strong>Immer mit Modellierung.</strong> Die Aufgabe muss sich auf mehrere Bereiche beziehen und in jedem Fall auf die Grundlegenden Modellierungstechniken.',
          '<strong>Nicht nur ein Halbjahr.</strong> Eine Prüfungsaufgabe darf sich nicht auf die Inhalte nur eines Kurshalbjahres beschränken. Wer nur das letzte Halbjahr wiederholt, ist also nicht vorbereitet.',
          '<strong>Teilaufgaben unabhängig.</strong> Die Teilaufgaben sollen so unabhängig voneinander sein, dass ein Fehler am Anfang die weitere Bearbeitung nicht unmöglich macht. Es lohnt sich also immer, weiterzuschreiben.',
          '<strong>Schwerpunkt im Anforderungsbereich II.</strong> Der größte Teil der erwarteten Leistung liegt im Anforderungsbereich II, daneben kommen I und III vor, und zwar I in höherem Maße als III.'
        ] },
        { kind: 'p', mt: true, html: 'Für die Bewertung nennen die EPA zwei feste Schwellen: Die Note "ausreichend" (05 Punkte) soll erteilt werden, wenn mindestens 45 Prozent der erwarteten Gesamtleistung erbracht sind, und dazu reichen Leistungen allein im Anforderungsbereich I nicht aus. Die Note "gut" (11 Punkte) gibt es ab mindestens 75 Prozent. Dazwischen und darüber werden die Notenstufen ungefähr linear zugeordnet. Außerdem stellen die EPA klar, dass erläuternde, kommentierende und begründende Texte unverzichtbare Bestandteile der Prüfungsleistung sind und dass Fehler in der Fachsprache als fachliche Fehler gelten.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Ein konkreter Fall: das Zentralabitur Informatik 2027 in Nordrhein-Westfalen', head: ['Punkt', 'Grundkurs', 'Leistungskurs'], rows: [
          ['Aufgaben, die die Schule erhält', 'Ein Aufgabensatz mit vier Aufgaben', 'Ein Aufgabensatz mit vier Aufgaben'],
          ['Davon bearbeitet', 'Zwei, ausgewählt von der Fachlehrkraft', 'Drei, ausgewählt von der Fachlehrkraft'],
          ['Auswahl durch Prüflinge', 'Nicht vorgesehen', 'Nicht vorgesehen'],
          ['Arbeitszeit', '225 Minuten', '270 Minuten'],
          ['Sprachen', 'Java und SQL', 'Java und SQL'],
          ['Datenstrukturen', 'Bis Binärbaum und binärer Suchbaum', 'Zusätzlich Graphen (Klassen Graph, Vertex, Edge)'],
          ['Computer', 'Nicht vorgesehen', 'Nicht vorgesehen']
        ] },
        { kind: 'source', html: 'Quelle: Ministerium für Schule und Bildung NRW, Standardsicherung, "Zentralabitur 2027, Informatik", Vorgaben vom 14.08.2024, Abschnitte II und III, gelesen am 3. November 2026. Die Vorgaben für 2028 erschienen am 25.08.2025, die für 2029 am 25.08.2026. Andere Länder regeln Auswahl, Zeit und Sprache anders; eine Übersicht aller Länder finden Sie auf unserer englischen Seite zum Informatik-Abitur.' },
        { kind: 'p', mt: true, html: 'Die Tabelle zeigt, warum die Vorbereitung früh beginnen sollte: Die Prüflinge wählen in Nordrhein-Westfalen keine Aufgaben selbst aus, und sie schreiben ohne Computer. Wer in der Qualifikationsphase Code nur am Rechner ausprobiert hat, muss das Programmieren auf Papier eigens üben. Nur eine Minderheit wählt das Fach überhaupt: Der Informatik-Monitor 2026/27 beziffert die bundesweite Belegungsquote in der Qualifikationsphase auf rund 15 Prozent. Wer dazugehört, hat oft kleine Kurse und wenig Vergleich mit anderen Prüflingen.' }
      ]
    },
    {
      id: 'afb',
      eyebrow: 'Anforderungsbereiche',
      h2: 'Was bedeuten Anforderungsbereich I, II und III in Informatik?',
      lede: 'Jede Teilaufgabe im Abitur gehört zu einem der drei Anforderungsbereiche. Die EPA beschreiben sie für Informatik mit konkreten Tätigkeiten. Daraus leiten wir ab, wie man jeden Bereich übt.',
      body: [
        { kind: 'table', numCols: [], caption: 'Die drei Anforderungsbereiche in Informatik, mit Beispielen aus den EPA', head: ['Bereich', 'Kern laut EPA', 'Beispiele aus den EPA', 'So üben wir es (unser Vorgehen)'], rows: [
          ['I, Wiedergeben', 'Bekannte Sachverhalte und Verfahren wiedergeben und beschreiben', 'Datenstrukturen beschreiben, bekannte Automaten darstellen, in eine andere Darstellungsform übersetzen', 'Kurze Abfragen zu Begriffen, jeden Begriff auch auf Englisch und Deutsch'],
          ['II, Anwenden', 'Gelerntes selbstständig auf vergleichbare neue Situationen übertragen', 'Gegebenen Algorithmus analysieren, ER-Diagramm in ein Relationenmodell umsetzen, Terminierung und Aufwand begründen', 'Fremden Code verfolgen, Eigenschaften in ganzen Sätzen begründen'],
          ['III, Gestalten und Beurteilen', 'Komplexe Probleme planmäßig bearbeiten, Methoden selbst auswählen und anpassen', 'Problem in Teilprobleme zerlegen, neues Verfahren entwickeln, eine einfache Sprache entwickeln', 'Offene Aufgaben ohne Zwischenschritte, danach die eigene Lösung bewerten']
        ] },
        { kind: 'source', html: 'Quelle: Kultusministerkonferenz, EPA Informatik, Abschnitt 2.2 "Fachspezifische Beschreibung der Anforderungsbereiche", gelesen am 3. November 2026. Die letzte Spalte beschreibt unseren Unterricht.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Warum II zählt', p: 'Da der Schwerpunkt der Prüfung im Anforderungsbereich II liegt, üben wir am meisten das Übertragen: eine bekannte Datenstruktur in einem neuen Zusammenhang, ein bekannter Algorithmus mit einer kleinen Änderung.' },
          { h3: 'Warum I nicht reicht', p: 'Die EPA sagen ausdrücklich, dass Leistungen allein im Anforderungsbereich I für 05 Punkte nicht ausreichen. Auswendig gelernte Definitionen sind nötig, aber nicht genug.' },
          { h3: 'Begründen schreiben', p: 'Weil begründende Texte zur Prüfungsleistung gehören, schreibt jede Lernende und jeder Lernende bei uns Begründungen aus, in kurzen, vollständigen Sätzen. Der Mentor korrigiert die Logik, nicht nur das Ergebnis.' }
        ] }
      ]
    },
    {
      id: 'beispiel',
      tint: 'tint',
      eyebrow: 'Ein Übungsbeispiel',
      h2: 'Wie begründet man im Abitur, dass eine Rekursion endet?',
      lede: 'Die EPA nennen das Begründen der Terminierung eines gegebenen Algorithmus ausdrücklich als Tätigkeit im Anforderungsbereich II. Die Aufgabe unten haben wir selbst geschrieben; sie stammt aus keinem Abitur. Sie zeigt, warum man eine Rekursion immer zuerst mit den kleinsten Eingaben testet.',
      body: [
        { kind: 'code', label: 'Die Methode binaer', lang: 'Java', code: JAVA, note: 'Ausgabe, von uns kompiliert und ausgeführt: <code>0 -&gt; 0</code>, <code>1 -&gt; 1</code>, <code>2 -&gt; 10</code>, <code>13 -&gt; 1101</code>. Die Methode liefert die Binärdarstellung einer natürlichen Zahl als Zeichenkette.' },
        { kind: 'table', mt: true, numCols: [0], caption: 'Der Aufruf binaer(13), Ebene für Ebene (unser Beispiel)', head: ['Ebene', 'Aufruf', 'n / 2 und n % 2', 'Rückgabe nach oben'], rows: [
          ['1', 'binaer(13)', '6 und 1', 'binaer(6) + "1" = "1101"'],
          ['2', 'binaer(6)', '3 und 0', 'binaer(3) + "0" = "110"'],
          ['3', 'binaer(3)', '1 und 1', 'binaer(1) + "1" = "11"'],
          ['4', 'binaer(1)', 'Basisfall, n &lt; 2', '"1"']
        ] },
        { kind: 'p', mt: true, html: '<strong>Die Begründung der Terminierung, so wie wir sie aufschreiben lassen:</strong> Für jedes n größer oder gleich 2 ruft die Methode sich mit n / 2 auf. Diese Zahl ist kleiner als n und mindestens 1. Die Argumente bilden also eine streng fallende Folge natürlicher Zahlen, und eine solche Folge kann nicht unendlich lang sein. Spätestens nach endlich vielen Schritten ist n kleiner als 2, und der Basisfall beendet die Rekursion.' },
        { kind: 'code', label: 'Dieselbe Methode in Python, mit einer fehlerhaften Variante', lang: 'Python', code: PY, note: 'Ausgabe, von uns mit Python 3 ausgeführt: <code>0 -&gt; 0</code>, <code>1 -&gt; 1</code>, <code>2 -&gt; 10</code>, <code>13 -&gt; 1101</code>, dann <code>binaer_fehler(13) -&gt; 1101</code> und <code>binaer_fehler(0) -&gt; RecursionError</code>. In Java endet derselbe Fehler mit einem StackOverflowError.' },
        { kind: 'p', mt: true, html: 'Die Variante <code>binaer_fehler</code> sieht richtig aus und liefert für 13 dasselbe Ergebnis. Ihr Basisfall prüft aber nur <code>n == 1</code>. Wird sie mit 0 aufgerufen, ist 0 / 2 wieder 0: Das Argument wird nicht kleiner, die Begründung von oben greift nicht, und die Rekursion endet nie. Wer nur mit 13 testet, findet diesen Fehler nicht.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Kleinste Eingaben zuerst.</strong> Testen Sie jede rekursive Methode mit 0, 1 und 2, bevor Sie eine große Zahl nehmen.',
          '<strong>Das Maß benennen.</strong> Schreiben Sie auf, welche Größe bei jedem Aufruf kleiner wird, hier n, und warum sie nicht unter den Basisfall fallen kann.',
          '<strong>Jede Ebene eine Zeile.</strong> Notieren Sie Aufrufe in einer Tabelle wie oben und lesen Sie die Rückgaben von unten nach oben.'
        ] }
      ]
    },
    {
      id: 'plan',
      eyebrow: 'Vorbereitungsplan',
      h2: 'Wann sollte man mit der Vorbereitung auf das Informatik-Abitur anfangen?',
      lede: 'Spätestens zu Beginn des letzten Schuljahres. Weil eine Prüfungsaufgabe nicht nur ein Kurshalbjahr abdecken darf, braucht die Wiederholung Zeit. In Nordrhein-Westfalen beginnen die schriftlichen Abiturprüfungen 2027 am 13. April 2027 und enden am 5. Mai 2027; der letzte Unterrichtstag der Qualifikationsphase 2 ist Freitag, der 19. März 2027.',
      body: [
        { kind: 'table', numCols: [], caption: 'Ein Plan für die letzten Monate vor dem schriftlichen Abitur 2027 (unser Vorschlag)', head: ['Zeitraum', 'Schwerpunkt', 'Ergebnis'], rows: [
          ['November und Dezember 2026', 'Lücken aus allen Halbjahren finden: Klassen und Objekte, lineare Strukturen, Bäume', 'Eine Liste der Themen, die noch unsicher sind'],
          ['Januar 2027', 'Datenbanken: ER-Modell, Relationenmodell, SQL auf Papier', 'Abfragen ohne Rechner sicher schreiben'],
          ['Februar 2027', 'Automaten und Grammatiken, Netze und Datenschutz', 'Wörter durch Automaten verfolgen, Begriffe sicher erklären'],
          ['März 2027', 'Vollständige Probeprüfungen unter Zeit, mit eigenen Aufgaben im Prüfungsstil', 'Gefühl für die Arbeitszeit, Begründungen ausformuliert'],
          ['Bis zum Prüfungstag', 'Nur noch Schwachstellen, Fachsprache, Schreibtischtests', 'Ruhe und Routine']
        ] },
        { kind: 'p', mt: true, html: 'Der Plan ist ein Vorschlag, der sich am Schulkurs ausrichtet. Wir unterrichten parallel zur Schule und vergeben keine Noten; was im Abitur zählt, ist allein der Unterricht und die Prüfung Ihrer Schule. In anderen Ländern liegen die Termine anders; der Mentor verschiebt die Monate entsprechend.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Mögliche Unterrichtszeiten, deutsche Zeit und Zeit des Mentors in Indien', head: ['Deutsche Zeit', 'In Indien, MEZ (bis 28. März 2027)', 'In Indien, MESZ (ab 28. März 2027)'], rows: [
          ['Dienstag 16:15', '20:45', '19:45'],
          ['Donnerstag 18:00', '22:30', '21:30'],
          ['Samstag 12:15', '16:45', '15:45']
        ] },
        { kind: 'source', html: 'Umrechnung von uns. Nach dem Einheiten- und Zeitgesetz gilt in Deutschland von Ende Oktober bis Ende März MEZ (UTC+1), sonst MESZ (UTC+2); umgestellt wurde zuletzt am 25. Oktober 2026, die nächste Umstellung folgt am 28. März 2027. Für Indien gilt das ganze Jahr UTC+5:30. Die Zeiten sind Beispiele, keine festen Gruppentermine.' }
      ]
    },
    {
      id: 'englisch',
      eyebrow: 'Unterrichtssprache',
      h2: 'Kann man sich auf Englisch auf ein deutsches Abitur vorbereiten?',
      lede: 'Ja, und in Informatik passt das besonders gut. Wir sagen es dennoch deutlich: Der Unterricht findet ausschließlich auf Englisch statt, die Prüfung schreiben Sie auf Deutsch.',
      body: [
        { kind: 'two',
          leftH3: 'Was auf Englisch leicht fällt',
          left: [
            'Java, Python und SQL bestehen aus englischen Schlüsselwörtern. Die Klassen der NRW-Vorgaben heißen Stack, Queue, List, BinaryTree und DatabaseConnector. Wer die Fachsprache im Unterricht auf Englisch hört, versteht diese Namen sofort.',
            'Die Mentoren sprechen langsam und deutlich, passen Tempo und Aussprache an und wiederholen schwierige Stellen mit anderen Worten.'
          ],
          rightH3: 'Was wir eigens auf Deutsch üben',
          right: [
            'Da Fehler in der Fachsprache laut EPA als fachliche Fehler gelten, legen wir zu jedem Thema eine Liste mit den deutschen Fachbegriffen an: Basisfall, Terminierung, Zustandsübergang, Primärschlüssel.',
            'Begründungen, die im Abitur auf Deutsch stehen müssen, formulieren Sie selbst auf Deutsch; der Mentor prüft die Logik dahinter auf Englisch. So üben Sie nebenbei Englisch, ohne dass die Prüfungssprache leidet.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Fortschritt',
    h2: 'Woran Sie merken, dass die Vorbereitung wirkt',
    lede: 'Fünf Stufen, die wir für die Oberstufe verwenden und an denen wir Eltern und Lernenden den Stand zurückmelden.',
    table: { caption: 'Fünf Stufen der Abiturvorbereitung in Informatik (unsere)', head: ['Stufe', 'Zeitpunkt', 'Was Sie dann können'], rows: [
      ['1. Begriffe sicher', 'Einführungsphase', 'Klasse, Objekt, Methode, Liste und Automat erklären, auf Deutsch und Englisch'],
      ['2. Code lesen', 'Erstes Jahr der Qualifikationsphase', 'fremden Code auf Papier verfolgen und die Ausgabe vorhersagen'],
      ['3. Übertragen', 'Erstes Jahr der Qualifikationsphase', 'einen bekannten Algorithmus an eine neue Aufgabe anpassen'],
      ['4. Begründen', 'Zweites Jahr der Qualifikationsphase', 'Terminierung, Aufwand und Korrektheit in ganzen Sätzen begründen'],
      ['5. Prüfungsreif', 'Vor der Prüfung', 'eine ganze Probeprüfung in der Arbeitszeit ohne Computer bearbeiten']
    ] },
    left: { h3: 'Für Eltern', ps: [
      'Ein häufiger Engpass liegt zwischen Stufe 2 und 4: Der Code läuft, aber die schriftliche Begründung fehlt. Genau dort verlieren viele Prüflinge Punkte, obwohl sie den Stoff kennen.',
      'Nach jeder Einheit schreibt der Mentor zwei, drei Sätze: woran gearbeitet wurde und welches Thema als Nächstes folgt.'
    ] },
    right: { h3: 'Für Schülerinnen und Schüler', ps: [
      'Schreiben Sie zu jeder Lösung einen Satz, warum sie stimmt. Wenn Ihnen der Satz nicht einfällt, ist das die Stelle, die Sie wiederholen sollten.',
      'Testen Sie jede Methode zuerst mit der kleinsten sinnvollen Eingabe.'
    ] }
  },

  catalogue: {
    eyebrow: 'Weitere Kurse',
    h2: 'Neun weitere Kurse rund um das Informatik-Abitur',
    lede: 'Jeder Kurs läuft live auf Englisch, mit einem festen Mentor, als Gruppe oder im Einzelunterricht.',
    bands: [
      { num: 'I', h3: 'Programmieren vertiefen', sub: '13 bis 19 Jahre', courses: [
        { code: 'IAV / CODE / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java für Jugendliche', blurb: 'Objektorientierung, die im Abitur meist in Java geprüft wird.' },
        { code: 'IAV / CODE / 02', slug: 'python-complete-masterclass-teens', title: 'Python für Jugendliche', blurb: 'Für Schulen, die die Oberstufe in Python unterrichten.' },
        { code: 'IAV / CODE / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithmen und Datenstrukturen', blurb: 'Listen, Bäume, Suchen und Sortieren in der Tiefe.' }
      ] },
      { num: 'II', h3: 'Über den Kurs hinaus', sub: '13 bis 19 Jahre', courses: [
        { code: 'IAV / PLUS / 01', slug: 'german-informatics-competitions-course-biber-bwinf-bwki', title: 'Informatik-Wettbewerbe', blurb: 'Vom Informatik-Biber bis zum Bundeswettbewerb Informatik.' },
        { code: 'IAV / PLUS / 02', slug: 'competitive-programming-for-teens-course', title: 'Wettbewerbsprogrammierung', blurb: 'Für alle, die schneller und genauer programmieren wollen.' },
        { code: 'IAV / PLUS / 03', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'IT-Sicherheit für Jugendliche', blurb: 'Verschlüsselung und Schutz, passend zum Thema Datensicherheit.' }
      ] },
      { num: 'III', h3: 'Andere Abschlüsse', sub: '15 bis 19 Jahre', courses: [
        { code: 'IAV / INT / 01', slug: 'ib-diploma-computer-science-course', title: 'IB Computer Science', blurb: 'Für das IB Diploma an internationalen Schulen.' },
        { code: 'IAV / INT / 02', slug: 'ap-computer-science-a-java-exam-prep-course', title: 'AP Computer Science A', blurb: 'Java-Prüfung des amerikanischen College Board.' },
        { code: 'IAV / INT / 03', slug: 'abitur-mathematics-course-in-english', title: 'Abitur Mathematik auf Englisch', blurb: 'Für das zweite Prüfungsfach, ebenfalls live.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Ablauf',
    h2: 'Wie die Vorbereitung im Live-Unterricht abläuft',
    lede: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche.',
    slots: [
      { time: 'Nach der Schule', l: 'Späte Nachmittage und frühe Abende deutscher Zeit.' },
      { time: 'Samstag', l: 'Vormittags, gut für längere Probeprüfungen.' },
      { time: 'Vor Klausuren', l: 'Zusätzliche Einzelstunden nach Absprache.' }
    ],
    cells: [
      { h3: 'Ein Mentor', p: 'Dieselbe Person bis zur Prüfung, die Ihren Kurs und Ihre Schwächen kennt.' },
      { h3: 'Ihr Schulstoff', p: 'Wir arbeiten mit den Vorgaben Ihres Landes und dem Material Ihres Kurses.' },
      { h3: 'Papier statt Rechner', p: 'Code schreiben und verfolgen ohne Ausführen, wie in der Prüfung.' },
      { h3: 'Eigene Aufgaben', p: 'Übungsaufgaben im Prüfungsstil, die wir selbst schreiben.' },
      { h3: 'Begründungen', p: 'Jede Lösung mit einem Satz dazu, warum sie stimmt.' },
      { h3: 'Rückmeldung', p: 'Kurzer Bericht nach jeder Einheit, auch an die Eltern.' }
    ]
  },

  projectsH2: 'Was Lernende bauen',
  projectsLede: 'Neben der Prüfung entstehen bei uns eigene Programme. Eine Auswahl sehen Sie unten, mehr auf <a class="ag-inline-link" href="/student-labs">Student labs</a> (Seite auf Englisch).',
  reviewsLede: 'Echte Google-Bewertungen von Familien und Lernenden, im englischen Wortlaut belassen.',

  fees: {
    h2: 'Kosten der Abiturvorbereitung',
    lede: 'Abgerechnet wird monatlich, acht Live-Einheiten sind enthalten. Auf dieser Seite sehen Sie die Beträge in Euro, umgerechnet zum Referenzkurs der Europäischen Zentralbank. Die Zahlung selbst erfolgt in US-Dollar, und Ihre Bank rechnet sie in Euro um, weshalb der abgebuchte Betrag minimal abweichen kann.',
    free: ['Eine kostenlose Probestunde', 'Ein Blick auf Ihren Kursstand und Ihre Klausuren', 'Ohne Karte und ohne Bindung'],
    group: ['Fünfzehn bis zwanzig Lernende aus der Oberstufe', 'Ein fester Mentor bis zur Prüfung', 'Zwei Einheiten pro Woche', 'Monatlich kündbar'],
    one: ['Sie und Ihr Mentor allein', 'Plan nach Ihrem Prüfungstermin', 'Zeiten nach Absprache']
  },

  faq: {
    eyebrow: 'Fragen und Antworten',
    h2: 'Informatik-Abitur Vorbereitung: häufige Fragen',
    items: [
      { q: 'Findet der Unterricht auf Deutsch statt?', a: 'Nein. Der Unterricht ist live und ausschließlich auf Englisch, mit Mentoren in Indien, die Tempo und Aussprache an Sie anpassen. Viele sehen das als Vorteil: Sie lernen Informatik in der Sprache, aus der Java, Python und SQL stammen, und üben Englisch zugleich. Die deutschen Fachbegriffe für die Prüfung sammeln wir gemeinsam.' },
      { q: 'Was wird im Informatik-Abitur geprüft?', a: 'Nach den Einheitlichen Prüfungsanforderungen der Kultusministerkonferenz drei Bereiche: Grundlegende Modellierungstechniken, Interaktion mit und von Informatiksystemen sowie Möglichkeiten und Grenzen informatischer Verfahren. Jede schriftliche Prüfungsaufgabe muss sich auf die Modellierungstechniken beziehen. Was Ihr Land genau verlangt, steht in seinen Vorgaben.' },
      { q: 'Wie viel Prozent braucht man für 05 Punkte im Informatik-Abitur?', a: 'Laut EPA Informatik soll "ausreichend" (05 Punkte) gegeben werden, wenn mindestens 45 Prozent der erwarteten Gesamtleistung erbracht sind; Leistungen nur im Anforderungsbereich I reichen dafür nicht. Für "gut" (11 Punkte) nennen die EPA mindestens 75 Prozent.' },
      { q: 'Was ist der Unterschied zwischen Grundkurs und Leistungskurs in Informatik?', a: 'Beide prüfen dieselben drei Bereiche. Der Leistungskurs behandelt laut EPA mindestens drei statt zwei Modellierungstechniken und verlangt mehr Selbstständigkeit, Abstraktion und Formalisierung. In Nordrhein-Westfalen kommen 2027 im Leistungskurs zum Beispiel Graphen hinzu, und die Arbeitszeit ist mit 270 statt 225 Minuten länger.' },
      { q: 'Darf man im Informatik-Abitur einen Computer benutzen?', a: 'Das regelt jedes Land selbst. In Nordrhein-Westfalen ist der Einsatz eines Computers im Zentralabitur 2027 nicht vorgesehen, in Bayern besteht das schriftliche Informatik-Abitur zu großen Teilen aus Programmieraufgaben auf Papier. Deshalb üben wir das Schreiben und Verfolgen von Code ohne Rechner.' },
      { q: 'Bereiten Sie auf Java oder auf Python vor?', a: 'Auf die Sprache, die Ihre Schule verwendet. In Nordrhein-Westfalen sind Java und SQL vorgegeben; andere Länder und Schulen arbeiten auch mit Python. Der Mentor richtet sich nach Ihrem Kursmaterial.' },
      { q: 'Benoten Sie oder ersetzen Sie den Schulunterricht?', a: 'Weder noch. Wir unterrichten begleitend zur Schule und vergeben keine Noten oder Abschlüsse. Was für das Abitur zählt, sind allein der Unterricht und die Prüfungen Ihrer Schule und Ihres Landes. Unsere Probeprüfungen dienen nur der Übung.' },
      { q: 'Wann finden die Stunden statt?', a: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche. Im Winter ist Indien 4 Stunden 30 Minuten voraus, im Sommer 3 Stunden 30 Minuten.' },
      { q: 'Was kostet die Vorbereitung, und wie wird bezahlt?', a: 'Die Monatsgebühr steht auf dieser Seite in Euro, umgerechnet zum Referenzkurs der Europäischen Zentralbank. Abgebucht wird in US-Dollar, die Umrechnung übernimmt Ihre Bank. Die Probestunde kostet nichts und braucht keine Karte.' },
      { q: 'Ich hatte in der Mittelstufe kein Informatik. Ist das ein Problem?', a: 'Nein, aber planen Sie Zeit ein. In mehreren Ländern ist Informatik in der Sekundarstufe I nicht für alle verpflichtend. Unser Kurs Informatik Companion holt Schleifen, Bedingungen, Funktionen und Listen nach, bevor die Oberstufe mit Klassen und Datenstrukturen beginnt.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Mehr dazu',
    h2: 'Weitere Seiten zum Thema',
    lede: 'Seiten für Lernende und Familien in Deutschland, zum Teil auf Englisch.',
    items: [
      { href: '/abitur-computer-science-in-english', label: 'Abitur computer science in English', p: 'Das Informatik-Abitur Land für Land, auf Englisch.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Unterstützung von Klasse 5 bis zur Oberstufe.' },
      { href: '/informatik-in-german-schools-by-state', label: 'Informatik in German schools by state', p: 'Wo Informatik Pflichtfach ist, auf Englisch.' },
      { href: '/abitur-maths-in-english', label: 'Abitur maths in English', p: 'Das Mathematik-Abitur und seine Struktur.' },
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Alle unsere Seiten für Deutschland.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Wie unser Live-Unterricht funktioniert.' }
    ]
  },

  start: {
    h2: 'Probestunde für die Abiturvorbereitung buchen',
    lede: 'In der ersten Stunde schaut der Mentor mit Ihnen auf eine alte Klausur oder die Vorgaben Ihres Landes und findet heraus, welche Themen noch wackeln. Danach schlagen wir einen Plan bis zur Prüfung vor.',
    readFirst: 'Zum Vorab-Lesen: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> über unseren Unterricht und <a class="ag-inline-link" href="/courses/informatik-abitur-course-java-python">den Kurs Informatik Oberstufe und Abitur</a> mit dem vollständigen Lehrplan (beide auf Englisch).',
    note: 'Alle Stunden sind live online, auf Englisch, mit Mentoren in Indien. Per WhatsApp antworten wir am schnellsten, auf Englisch oder kurz auf Deutsch.',
    formNote: 'Kostenlos und unverbindlich, keine Karte nötig.'
  },

  footer: {
    cols: [
      { h4: 'Abitur', links: [
        { href: '/courses/informatik-abitur-course-java-python', label: 'Informatik Abitur' },
        { href: '/courses/abitur-mathematics-course-in-english', label: 'Mathematik Abitur' },
        { href: '/courses/mysql-mastery-for-teens', label: 'SQL für Jugendliche' },
        { href: '/courses', label: 'Alle Kurse' }
      ] },
      { h4: 'Deutschland', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/abitur-computer-science-in-english', label: 'Informatik-Abitur (EN)' },
        { href: '/student-labs', label: 'Projekte' }
      ] }
    ],
    bottomRight: 'Erst der Basisfall, dann die Rekursion'
  },

  personalityCss: `
.ag-root.ag-iav .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-iav .ag-capsule { border-left-width: 5px; border-radius: 2px; }
.ag-root.ag-iav .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-iav .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-iav .ag-table td { hyphens: auto; }
`,

  dossier: {
    curriculumAuthority: 'KMK, Einheitliche Prüfungsanforderungen in der Abiturprüfung Informatik (01.12.1989 i.d.F. 05.02.2004); NRW Standardsicherung, Vorgaben Zentralabitur 2027 Informatik (14.08.2024); GI Informatik-Monitor 2026/27; Einheiten- und Zeitgesetz; read 3 November 2026. Example code our own.',
    localProject: 'A recursive binaer(n) in Java and Python: calls for binaer(13) traced level by level to "1101", a written termination argument (n / 2 strictly smaller and at least 1), and a faulty variant with base case n == 1 that loops on 0 (RecursionError, StackOverflowError in Java); both compiled and run. Lesson family: a recursion is only as good as its base case; test the smallest inputs first and argue termination.',
    requiredMentions: ['Einheitlichen Prüfungsanforderungen in der Abiturprüfung Informatik', 'Beschluss der Kultusministerkonferenz vom 01.12.1989 in der Fassung vom 05.02.2004', 'mindestens zwei und der Leistungskurs mindestens drei', 'mindestens 45 Prozent der erwarteten Gesamtleistung', 'binaer_fehler(0) -&gt; RecursionError', 'Der Aufruf binaer(13), Ebene für Ebene', 'Graphen (Klassen Graph, Vertex, Edge)', 'Erst der Basisfall, dann die Rekursion'],
    sources: [
      { claim: 'Three binding areas, six modelling techniques (GK at least two, LK three), task structure, AFB weighting, 45 and 75 percent thresholds, explanatory texts, Fachsprache errors.', url: 'https://www.kmk.org/fileadmin/Dateien/veroeffentlichungen_beschluesse/1989/1989_12_01-EPA-Informatik.pdf' },
      { claim: 'NRW Zentralabitur 2027 Informatik: four tasks, teacher picks two (GK) or three (LK), 225 and 270 minutes, no computer, Java and SQL, Graphen in LK.', url: 'https://www.standardsicherung.schulministerium.nrw.de/system/files/media/document/file/informatik_2027_gg.pdf' },
      { claim: 'NRW Vorgaben publication dates for 2027, 2028, 2029.', url: 'https://www.standardsicherung.schulministerium.nrw.de/zentralabitur-gost/faecher/informatik' },
      { claim: 'NRW written Abitur 2027 window and last Q2 teaching day.', url: 'https://www.standardsicherung.schulministerium.nrw.de/zentralabitur-gost/termine/2027' },
      { claim: 'About 15 percent take Informatik in the Qualifikationsphase; Bayern written Abitur on paper.', url: 'https://informatik-monitor.de/' }
    ],
    rejectedClaims: [
      'German-language teaching: we teach in English only, and the page says so.',
      'Any grade or pass promise: none; the school and the Land exam are what count.',
      'Reproducing EPA or NRW exam tasks: refused; the recursion example is our own.',
      'A Land-by-Land table of Informatik-Abitur rules: already on abitur-computer-science-in-english, not repeated.',
      'The NRW Informatik exam day in 2027: the Anlage A PDF layout does not tie Informatik to one date unambiguously, so not stated.'
    ]
  }
};
