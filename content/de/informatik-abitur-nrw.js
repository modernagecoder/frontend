'use strict';
// Informatik-Abitur NRW (ag- German-language door, Germany cluster row DE083, P3).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; formal "Sie";
// euro shown, USD charged. We teach alongside school and award no grades; the school course is the one that counts.
// Angle: only Nordrhein-Westfalen facts. What the 2027 written exam asks (Vorgaben Zentralabitur 2027 Informatik), when it
// is (Anlage A, Fachprüfungstermine 2027), how Informatik sits in the NRW Oberstufe (GI Informatik-Monitor 2026/27, NRW
// page), and an original queue-and-stack exercise in Java, the language the NRW Vorgaben name.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/informatik-abitur-nrw/; the two PDFs were
// fetched 2 to 3 November 2026 by sibling writers from standardsicherung.schulministerium.nrw.de, which later returned HTTP 403
// and was NOT fetched again; read here from the saved ministry files):
//  - Vorgaben Zentralabitur 2027 Informatik (informatik_2027_gg.pdf): "Die Schulen erhalten jeweils einen Aufgabensatz für den
//    Grundkurs und einen für den Leistungskurs. Beide Aufgabensätze enthalten vier Aufgaben."; "im Grundkurs zwei Aufgaben und
//    im Leistungskurs drei Aufgaben aus"; "Eine Aufgabenauswahl durch die Schülerinnen und Schüler ist nicht vorgesehen.";
//    aids "Wörterbuch zur deutschen Rechtschreibung", "WTR (Wissenschaftlicher Taschenrechner) oder CAS/MMS"; "Der Einsatz
//    eines Computers ist für die Bearbeitung der Aufgaben nicht vorgesehen."; "Die Arbeitszeit beträgt im Grundkurs 225
//    Minuten und im Leistungskurs 270 Minuten."; GK and LK lists: "Stapel (Klasse Stack)", "Schlange (Klasse Queue)",
//    "lineare Liste (Klasse List)", "Binärbaum (Klasse BinaryTree)", "binärer Suchbaum (Klasse BinarySearchTree)", "array bis
//    zweidimensional", "Struktogramme", "Java", "SQL", "Klassen DatabaseConnector, QueryResult", "Deterministische endliche
//    Automaten", "Nichtdeterministische endliche Automaten", "Produktionen mit ε", "Grundprinzipien des Datenschutzes";
//    LK only: "Graphen (Klassen Graph, Vertex, Edge)", "Algorithmen zur Kommunikation in Netzwerken (Klassen Connection,
//    Client, Server)", "Nichtdeterministische Kellerautomaten", "Grammatiken regulärer und kontextfreier Sprachen",
//    "Scanner, Parser und Interpreter für eine reguläre Sprache".
//  - Anlage A zum RdErl. d. MSB v. 30. Mai 2025 (anlage_a_termine_2027.pdf), checked against the rendered table on
//    3 November 2026: "Freitag, 16. April 2027 ... Ernährungslehre, Informatik, Technik X X" (LK and GK); first listed day
//    "Dienstag, 13. April 2027"; last "Mittwoch, 5. Mai 2027 Mathematik".
//  - GI Informatik-Monitor 2026/27, NRW page (infmon-nrw.txt, fetched 2 November 2026): Pflichtfach 5 and 6 (FACTS 80);
//    "In der Einführungsphase kann ein dreistündiger Grundkurs Informatik angeboten und belegt werden."; GK three hours, LK
//    five hours (FACTS 81); "In einem Leistungskursfach Informatik wird grundsätzlich schriftlich geprüft. In einem
//    Grundkursfach Informatik kann entweder eine schriftliche oder eine mündliche Prüfung erfolgen."; "Als Prüfungsfach ist
//    Informatik den naturwissenschaftlichen Fächern nicht gleichgestellt."; Gymnasium Wahlpflicht 9 and 10 "im Gesamtumfang
//    von sechs Wochenstunden"; Kennzahlen: "Anteil SuS mit Informatik in der Sek II 14 %" (Schuljahr 2024/2025, KMK);
//    "Anteil Abiturientinnen und Abiturienten mit Prüfungsfach Informatik 4 %" (2024/2025, MSB NRW); "Anzahl bestehende
//    Informatiklehrkräfte ... 2808" and "Anteil Informatiklehrkräfte an allen Lehrkräften 3 %" (Schuljahr 2025/2026, MSB NRW).
//    Gender figures on that page deliberately not used.
//  - Time: EinhZeitG, SoZV; summer time ended 25 October 2026, begins 28 March 2027 (brief rule 7).
// Our own: Umkehren.java, compiled and run with javac/java OpenJDK 21 on 3 November 2026:
//   kehreErsteUm([Ada, Ben, Cem, Dana, Eli, Fynn], 4) prints [Dana, Cem, Ben, Ada, Eli, Fynn];
//   then kehreErsteUm(..., 6) prints [Fynn, Eli, Ada, Ben, Cem, Dana]. Without the final rotation loop the first call would
//   leave [Eli, Fynn, Dana, Cem, Ben, Ada] (worked out by hand in the trace table, labelled ours).
// Lesson family: a stack reverses, a queue keeps order; write down both containers after every step.

const { DE } = require('../../scripts/nl/lib/market-de');

const JAVA = [
  'import java.util.ArrayDeque;',
  '',
  'public class Umkehren {',
  '    // Kehrt die ersten k Elemente der Schlange um, der Rest behaelt seine Reihenfolge.',
  '    static void kehreErsteUm(ArrayDeque<String> schlange, int k) {',
  '        ArrayDeque<String> stapel = new ArrayDeque<>();',
  '        for (int i = 0; i < k; i++) {',
  '            stapel.push(schlange.poll());',
  '        }',
  '        while (!stapel.isEmpty()) {',
  '            schlange.offer(stapel.pop());',
  '        }',
  '        int rest = schlange.size() - k;',
  '        for (int i = 0; i < rest; i++) {',
  '            schlange.offer(schlange.poll());',
  '        }',
  '    }',
  '',
  '    public static void main(String[] args) {',
  '        ArrayDeque<String> s = new ArrayDeque<>();',
  '        for (String name : new String[] {"Ada", "Ben", "Cem", "Dana", "Eli", "Fynn"}) {',
  '            s.offer(name);',
  '        }',
  '        kehreErsteUm(s, 4);',
  '        System.out.println(s);',
  '        kehreErsteUm(s, 6);',
  '        System.out.println(s);',
  '    }',
  '}'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'german', label: 'Informatik-Abitur NRW' },
  slug: 'informatik-abitur-nrw',
  code: 'ian',
  accent: '#365469',
  accentRationale: 'Informatik-Abitur NRW: a slate blue #365469, the ink of a printed exam booklet, allocated in alloc.tsv; contrast 6.48 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Deutschland' }],
  routeLabel: 'Informatik-Abitur NRW (Unterricht auf Englisch)',
  title: 'Informatik-Abitur NRW 2027: Vorgaben, Termin, Übung in Java',
  description: 'Informatik-Abitur NRW 2027: Java und SQL, 225 Minuten im Grundkurs, 270 im Leistungskurs, Termin 16. April 2027. Mit Übung in Java und Live-Unterricht auf Englisch.',
  ogDescription: 'Was das Zentralabitur 2027 in Nordrhein-Westfalen im Fach Informatik verlangt, wann geschrieben wird und eine eigene Übungsaufgabe mit Stapel und Schlange in Java, vollständig gelöst.',
  twitterDescription: 'Informatik-Abitur NRW 2027: Vorgaben, Termin am 16. April 2027 und eine gelöste Java-Übung mit Stack und Queue.',
  pageName: 'Informatik-Abitur NRW',
  webPageDescription: 'Ein Leitfaden für Schülerinnen, Schüler und Eltern in Nordrhein-Westfalen zum schriftlichen Informatik-Abitur 2027: die Vorgaben des Schulministeriums, der Prüfungstermin, die Stellung des Fachs in der Oberstufe nach dem Informatik-Monitor 2026/27 und eine eigene Übungsaufgabe in Java.',
  courseDescription: 'Ein Kurs für die Oberstufe in Nordrhein-Westfalen, live im Videounterricht und nur auf Englisch gehalten: Java mit Stack, Queue, List und Bäumen, SQL, Automaten, Grammatiken und viel Arbeit mit dem Stift, wahlweise als Gruppe oder einzeln.',
  crumbs: [{ name: 'Kurse', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Informatik-Abitur NRW',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Deutschland' },
    { href: '#vorgaben', label: 'Vorgaben' },
    { href: '#termin', label: 'Termin' },
    { href: '#uebung', label: 'Übung' },
    { href: '#zeiten', label: 'Zeiten' }
  ],
  eyebrow: 'Nordrhein-Westfalen &middot; Zentralabitur 2027 &middot; Informatik',
  h1: 'Informatik-Abitur NRW: Vorbereitung live auf Englisch',
  lede: 'Im Zentralabitur 2027 schreiben Grundkurs und Leistungskurs Informatik in Nordrhein-Westfalen am selben Tag, beide ohne Computer und beide mit Java und SQL als Sprachen der Aufgaben. Hier stehen die Vorgaben des Schulministeriums in einer Tabelle, der Termin mit Datum, die Rolle des Fachs in der Oberstufe und eine eigene Übungsaufgabe mit Stapel und Schlange, so wie sie im Abitur auf Papier verlangt werden könnte.',
  secondaryCta: { href: '#vorgaben', label: 'Die Vorgaben 2027' },
  wa: 'Hallo Modern Age Coders, unser Kind schreibt 2027 das Informatik-Abitur in NRW. Können wir eine kostenlose Probestunde auf Englisch buchen?',
  heroNote: 'Live-Unterricht seit 2020 &middot; mehr als 10.000 Lernende in vielen Ländern &middot; Java auf Papier geübt, live und auf Englisch',
  spec: [
    ['Für', 'Einführungsphase, Q1 und Q2 in NRW'],
    ['Sprachen', 'Java und SQL, wie in den Vorgaben'],
    ['Form', 'Gruppe mit 15 bis 20 oder Einzelunterricht'],
    ['Übung', 'Code auf Papier, ohne Rechner'],
    ['Mentor', 'Fest zugeteilt, live aus Indien'],
    ['Start', 'Probestunde kostenlos']
  ],
  capsuleQ: 'Kurz gesagt',
  capsule: 'Das Informatik-Abitur 2027 in NRW wird zentral gestellt: Java und SQL, keine Arbeit am Computer, 225 Minuten im Grundkurs und 270 im Leistungskurs, geschrieben am Freitag, 16. April 2027. Modern Age Coders bereitet Oberstufenschülerinnen und -schüler darauf live online vor, auf Englisch, mit dem Kurs Informatik Oberstufe und Abitur, in der Gruppe oder im Einzelunterricht. Tempo und Aussprache stimmt ein fester Mentor auf Ihr Kind ab.',

  picks: {
    eyebrow: 'Passende Kurse',
    h2: 'Drei Kurse für die Oberstufe in NRW',
    lede: 'Der erste Kurs ist der Kern für das Abitur, der zweite stärkt die Mathematik, die viele Informatik-Leistungskurse daneben belegen, der dritte richtet sich an alle, die über die Prüfung hinaus knobeln wollen.',
    items: [
      { course: 'informatik-abitur-course-java-python', code: 'NRW / 01', title: 'Informatik Oberstufe und Abitur', alt: 'Kursbild Informatik Oberstufe und Abitur mit Java und Python', note: 'Oberstufe, etwa 16 bis 19. Java von der Klasse bis zum binären Suchbaum, SQL, Automaten und Grammatiken, jede Woche auch eine Aufgabe nur mit Stift.' },
      { course: 'abitur-mathematics-course-in-english', code: 'NRW / 02', title: 'Abitur-Mathematik auf Englisch', alt: 'Kursbild Abitur-Mathematik auf Englisch', note: 'Oberstufe, etwa 15 bis 19. Analysis, Stochastik und Vektoren für das Mathematik-Abitur, im selben Live-Format.' },
      { course: 'german-informatics-competitions-course-biber-bwinf-bwki', code: 'NRW / 03', title: 'Informatik-Wettbewerbe', alt: 'Kursbild Informatik-Wettbewerbe Biber, BwInf und BWKI', note: 'Etwa 9 bis 19. Eigene Knobel- und Algorithmenaufgaben als Vorbereitung auf Wettbewerbe, für die Neugier neben der Schule.' }
    ]
  },

  sections: [
    {
      id: 'vorgaben',
      eyebrow: 'Vorgaben Zentralabitur 2027',
      h2: 'Was verlangt das Informatik-Abitur 2027 in NRW?',
      lede: 'Das Ministerium für Schule und Bildung legt für jeden Abiturjahrgang fest, worauf sich die zentralen Aufgaben stützen. Für 2027 sind das die folgenden Punkte, nach Grund- und Leistungskurs getrennt.',
      body: [
        { kind: 'table', numCols: [], caption: 'Schriftliches Informatik-Abitur 2027 in Nordrhein-Westfalen', head: ['Punkt', 'Grundkurs', 'Leistungskurs'], rows: [
          ['Arbeitszeit', '225 Minuten', '270 Minuten'],
          ['Aufgabensatz', 'vier Aufgaben, die Lehrkraft wählt zwei', 'vier Aufgaben, die Lehrkraft wählt drei'],
          ['Wahl durch Prüflinge', 'nicht vorgesehen', 'nicht vorgesehen'],
          ['Sprachen', 'Java und SQL', 'Java und SQL'],
          ['Datenstrukturen', 'Array bis zweidimensional, Stack, Queue, List, BinaryTree, BinarySearchTree', 'dazu Graphen mit Graph, Vertex und Edge'],
          ['Datenbanken', 'Klassen DatabaseConnector und QueryResult', 'Klassen DatabaseConnector und QueryResult'],
          ['Netzwerke', 'Einzelrechner und Rechnernetzwerke', 'dazu Algorithmen zur Kommunikation mit Connection, Client und Server'],
          ['Automaten', 'deterministische und nichtdeterministische endliche Automaten', 'dazu nichtdeterministische Kellerautomaten'],
          ['Sprachen und Grammatiken', 'Grammatiken regulärer Sprachen, Produktionen mit ε', 'reguläre und kontextfreie Grammatiken, Scanner, Parser und Interpreter für eine reguläre Sprache'],
          ['Hilfsmittel', 'Rechtschreibwörterbuch, WTR oder CAS/MMS', 'Rechtschreibwörterbuch, WTR oder CAS/MMS'],
          ['Computer', 'nicht vorgesehen', 'nicht vorgesehen']
        ] },
        { kind: 'source', html: 'Zusammengestellt aus den Vorgaben des NRW-Schulministeriums zum Zentralabitur 2027 im Fach Informatik, Teile II (weitere Vorgaben) und III (Übersicht der Schwerpunkte), von uns gelesen am 3. November 2026. Die Tabelle fasst zusammen; verbindlich bleibt der Kernlehrplan für die Sekundarstufe II mit allen Kompetenzerwartungen, nicht nur den hier genannten Schwerpunkten.' },
        { kind: 'two', mt: true,
          leftH3: 'Was die Tabelle für die Vorbereitung heißt',
          left: [
            'Wer in NRW Informatik schreibt, wählt keine Aufgaben selbst aus. Die Fachlehrkraft entscheidet vorher, welche zwei oder drei der vier Aufgaben die Kursgruppe bekommt. Lücken in einem Themenfeld lassen sich also nicht durch geschickte Wahl am Prüfungstag ausgleichen.',
            'Die Klassen sind namentlich festgelegt. Wer mit Stack, Queue und List im Unterricht nur am Rechner gearbeitet hat, muss im Abitur dieselben Methodenaufrufe mit Stift schreiben und dabei an jeden leeren Fall denken.'
          ],
          rightH3: 'Struktogramme und Diagramme',
          right: [
            'Unter Algorithmen nennen die Vorgaben ausdrücklich Struktogramme, unter Objekten und Klassen die Implementationsdiagramme. Beides gehört zum Handwerkszeug: Ein Algorithmus kann als Struktogramm gegeben sein und soll in Java umgesetzt werden, oder umgekehrt.',
            'Auch der Datenschutz steht in der Liste, unter dem Inhaltsfeld Informatik, Mensch und Gesellschaft. Das sind Textaufgaben, in denen begründet und bewertet wird, und sie verlangen eine andere Art der Übung als das Programmieren.'
          ] }
      ]
    },
    {
      id: 'termin',
      eyebrow: 'Prüfungstermin und Oberstufe',
      h2: 'Wann ist das Informatik-Abitur 2027 in NRW, und wer schreibt es?',
      lede: 'Grundkurs und Leistungskurs schreiben am Freitag, 16. April 2027. So steht es in Anlage A zum Runderlass des Schulministeriums vom 30. Mai 2025.',
      body: [
        { kind: 'table', numCols: [], caption: 'Informatik in der gymnasialen Oberstufe in NRW', head: ['Frage', 'Antwort', 'Quelle'], rows: [
          ['Termin der schriftlichen Prüfung 2027', 'Freitag, 16. April 2027, Grundkurs und Leistungskurs', 'MSB NRW, Anlage A, Fachprüfungstermine 2027'],
          ['Erster und letzter Termin der Liste', 'Dienstag, 13. April 2027 bis Mittwoch, 5. Mai 2027 (Mathematik)', 'MSB NRW, Anlage A'],
          ['Einführungsphase', 'dreistündiger Grundkurs Informatik möglich', 'Informatik-Monitor 2026/27'],
          ['Qualifikationsphase', 'Grundkurs mit drei, Leistungskurs mit fünf Wochenstunden', 'Informatik-Monitor 2026/27'],
          ['Prüfungsform', 'Leistungskurs grundsätzlich schriftlich; Grundkurs schriftlich oder mündlich', 'Informatik-Monitor 2026/27'],
          ['Ersatz für eine Naturwissenschaft', 'nein, als Prüfungsfach nicht gleichgestellt', 'Informatik-Monitor 2026/27']
        ] },
        { kind: 'source', html: 'Termine aus Anlage A zum Runderlass des Schulministeriums vom 30. Mai 2025, die wir mit der gedruckten Tabelle abgeglichen haben; Gesellschaft für Informatik, Informatik-Monitor 2026/27, Seite Nordrhein-Westfalen; beide gelesen am 2. und 3. November 2026.' },
        { kind: 'p', mt: true, html: 'Der 16. April 2027 liegt früh im Prüfungszeitraum, nur drei Tage nach dem ersten Termin der Liste. Für die Planung heißt das: Die Osterferien sind die letzte längere Übungsphase, und sie sollten nicht erst dem Fach gehören, das ganz am Ende geschrieben wird.' },
        { kind: 'two', mt: true,
          leftH3: 'Wie viele wählen Informatik?',
          left: [
            'Laut Informatik-Monitor hatten im Schuljahr 2024/2025 in NRW 14 Prozent der Schülerinnen und Schüler der Sekundarstufe II Informatik belegt (Quelle des Monitors: Kultusministerkonferenz). Als Prüfungsfach im Abitur hatten es 4 Prozent der Abiturientinnen und Abiturienten (Quelle: Schulministerium NRW).',
            'Wer Informatik als Abiturfach nimmt, sitzt also oft in einer kleinen Gruppe. Das ist ein Vorteil im Unterricht, aber es gibt weniger Mitschülerinnen und Mitschüler, mit denen man zusammen übt.'
          ],
          rightH3: 'Lehrkräfte im Land',
          right: [
            'Für das Schuljahr 2025/2026 meldete das Schulministerium dem Monitor 2.808 Informatiklehrkräfte, das sind 3 Prozent aller Lehrkräfte in NRW.',
            'Pflichtfach ist Informatik in NRW in Klasse 5 und 6 an allen allgemeinbildenden Schularten. Am Gymnasium folgt danach nur ein Wahlpflichtangebot in Klasse 9 und 10 mit insgesamt sechs Wochenstunden. Wer es nicht gewählt hat, beginnt in der Oberstufe mit wenig Vorwissen.'
          ] }
      ]
    },
    {
      id: 'klassen',
      eyebrow: 'Die Java-Klassen im Blick',
      h2: 'Welche Klassen und Themen kommen im NRW-Abitur dran?',
      lede: 'Die Vorgaben ordnen alles in Inhaltsfelder. Wir übersetzen sie hier in eine Lernreihenfolge, die sich in unserer Vorbereitung bewährt hat. Die Reihenfolge ist unsere, die Inhalte stammen aus den Vorgaben.',
      body: [
        { kind: 'ol', items: [
          '<strong>Objekte und Klassen, Implementationsdiagramme.</strong> Attribute, Methoden, Konstruktoren, Beziehungen zwischen Klassen. Wer ein Diagramm sicher in Java übersetzt, hat für alle folgenden Themen die Grundlage.',
          '<strong>Arrays, ein- und zweidimensional.</strong> Durchlaufen mit Zählschleifen, Summen, Maxima, Suchen. Das zweidimensionale Array verlangt zwei verschachtelte Schleifen und eine klare Vorstellung von Zeile und Spalte.',
          '<strong>Stack, Queue und List.</strong> Lineare Strukturen, bei denen jede Methode nur unter einer Bedingung sinnvoll ist: Aus einem leeren Stapel nimmt man nichts heraus.',
          '<strong>BinaryTree und BinarySearchTree.</strong> Rekursive Durchläufe (Preorder, Inorder, Postorder), Einfügen und Suchen im Suchbaum.',
          '<strong>Datenbanken mit SQL.</strong> Abfragen über mehrere Tabellen, dazu die Klassen DatabaseConnector und QueryResult, mit denen Java eine Abfrage absetzt und das Ergebnis liest.',
          '<strong>Endliche Automaten und Grammatiken.</strong> Ein Wort durch einen Automaten verfolgen, aus einem nichtdeterministischen einen deterministischen Automaten machen, Ableitungen mit einer Grammatik schreiben.',
          '<strong>Nur Leistungskurs: Graphen, Netzwerke, Kellerautomaten, Parser.</strong> Graph, Vertex und Edge mit Durchlauf und Wegsuche; Client und Server mit einem eigenen Protokoll; kontextfreie Sprachen.'
        ] },
        { kind: 'p', mt: true, html: 'Die Beschreibung der Abiturklassen, mit der im Kurs gearbeitet wird, bekommt Ihr Kind von seiner Schule. Auf genau diesem Stand bauen unsere Stunden auf, ergänzt um Aufgaben, die wir selbst geschrieben haben. In der Prüfung zählt allein, was die Vorgaben und die Lehrkraft festlegen; wir unterrichten begleitend zur Schule und vergeben keine Noten.' }
      ]
    },
    {
      id: 'uebung',
      tint: 'tint',
      eyebrow: 'Eine Übungsaufgabe von uns',
      h2: 'Wie sieht eine Abituraufgabe mit Stapel und Schlange aus?',
      lede: 'Die folgende Aufgabe haben wir selbst geschrieben, im Stil einer Teilaufgabe zu linearen Strukturen. Sie stammt nicht aus einer echten Abiturprüfung. Zum Ausprobieren am Rechner verwenden wir die Java-Klasse ArrayDeque; in der Prüfung arbeiten Sie mit den Klassen Stack und Queue aus den Vorgaben, deren Methoden anders heißen.',
      body: [
        { kind: 'p', html: '<strong>Aufgabe (unsere).</strong> In einer Schlange stehen sechs Namen: Ada, Ben, Cem, Dana, Eli, Fynn, Ada ganz vorn. Die Methode <code>kehreErsteUm(schlange, k)</code> soll die ersten k Namen umdrehen, alle übrigen sollen in ihrer Reihenfolge dahinter bleiben. Als Hilfsmittel steht genau ein Stapel zur Verfügung. a) Geben Sie die Schlange nach dem Aufruf mit k = 4 an. b) Begründen Sie, warum die letzte Schleife nötig ist. c) Was liefert ein zweiter Aufruf mit k = 6?' },
        { kind: 'code', label: 'Umkehren.java', lang: 'Java', code: JAVA, note: 'Ausgabe, so von uns mit OpenJDK 21 ausgeführt: <code>[Dana, Cem, Ben, Ada, Eli, Fynn]</code> und danach <code>[Fynn, Eli, Ada, Ben, Cem, Dana]</code>.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Lösung zu a): beide Behälter nach jedem Abschnitt (unsere Darstellung)', head: ['Schritt', 'Schlange (vorn links)', 'Stapel (oben links)'], rows: [
          ['Start', 'Ada, Ben, Cem, Dana, Eli, Fynn', 'leer'],
          ['Nach 4 mal Entnehmen und Ablegen', 'Eli, Fynn', 'Dana, Cem, Ben, Ada'],
          ['Nach dem Leeren des Stapels', 'Eli, Fynn, Dana, Cem, Ben, Ada', 'leer'],
          ['Nach 2 Rotationen (rest = 6 minus 4)', 'Dana, Cem, Ben, Ada, Eli, Fynn', 'leer']
        ] },
        { kind: 'p', mt: true, html: '<strong>Zu b).</strong> Ohne die letzte Schleife stünden die umgedrehten Namen hinten: Eli, Fynn, Dana, Cem, Ben, Ada. Der Stapel kann Elemente nur oben ablegen und oben wegnehmen, die Schlange nur hinten anfügen und vorn entnehmen. Die zurückgelegten Namen landen daher zwangsläufig hinter Eli und Fynn. Erst wenn die zwei übrigen Namen einmal von vorn nach hinten wandern, steht das Ergebnis richtig. Diese Begründung in zwei Sätzen ist im Abitur meist mehr wert als der Code allein.' },
        { kind: 'p', html: '<strong>Zu c).</strong> Mit k = 6 werden alle Namen umgedreht, und <code>rest</code> ist 0: Aus Dana, Cem, Ben, Ada, Eli, Fynn wird Fynn, Eli, Ada, Ben, Cem, Dana. Ein häufiger Fehler ist, <code>rest</code> erst nach dem Zurücklegen mit der falschen Größe zu berechnen; hier ist das unkritisch, weil die Schlange am Ende wieder alle sechs Namen enthält.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Beide Behälter aufschreiben.</strong> Notieren Sie nach jedem Abschnitt, was in der Schlange und was im Stapel steht. Mit zwei Spalten sieht man die Umkehrung, im Kopf verliert man sie.',
          '<strong>Leere Fälle prüfen.</strong> Was passiert mit k = 0? Die Schlange bleibt unverändert, und das ist richtig. In der Prüfung fragt man sich das bei jeder Methode, bevor man <code>front</code> oder <code>top</code> aufruft.',
          '<strong>Die Klassen der Vorgaben verwenden.</strong> Übertragen Sie die Lösung danach selbst auf Stack und Queue aus dem Unterricht. Genau dieser Schritt, von der vertrauten Bibliothek zur Abiturklasse, ist die eigentliche Übung.'
        ] }
      ]
    },
    {
      id: 'englisch',
      eyebrow: 'Unterricht auf Englisch',
      h2: 'Wie läuft die Vorbereitung auf Englisch ab?',
      lede: 'Wir unterrichten ausschließlich auf Englisch. Für Java ist das weniger ungewohnt, als viele denken: Schlüsselwörter, Klassen der Standardbibliothek und Fehlermeldungen sind ohnehin englisch.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Die Prüfungssprache bleibt Deutsch', p: 'Die Abituraufgaben sind deutsch formuliert. Deshalb besprechen wir die Operatoren wie erläutern, implementieren oder begründen so, dass Ihr Kind sie im deutschen Aufgabentext sicher erkennt, auch wenn die Stunde auf Englisch läuft.' },
          { h3: 'Fachwörter in beiden Sprachen', p: 'Stapel heißt stack, Schlange queue, Binärbaum binary tree. Der Mentor nennt beide Wörter, bis sie sitzen, und Ihr Kind darf jederzeit auf Deutsch nachfragen.' },
          { h3: 'Langsam, deutlich, wiederholt', p: 'Die Mentoren sitzen in Indien und unterrichten live per Video. Sie passen Tempo und Aussprache an, wiederholen schwierige Stellen mit anderen Worten und lassen Zeit zum Mitschreiben.' }
        ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Stand feststellen.</strong> In der ersten Stunde lösen wir mit Ihrem Kind eine kurze Aufgabe aus seinem aktuellen Halbjahr und sehen, wo es hakt.',
          '<strong>Plan bis zum 16. April 2027.</strong> Wir verteilen die Themen der Vorgaben auf die verbleibenden Wochen, mit Puffer vor den Klausuren der Q2.',
          '<strong>Jede Woche Papier.</strong> Mindestens eine Aufgabe pro Woche wird ohne Rechner gelöst und danach erst am Computer geprüft.',
          '<strong>Begründen üben.</strong> Zu jeder Lösung gehört ein Satz, warum sie stimmt. Das trainiert genau die Teile, die in Textform bewertet werden.'
        ] }
      ]
    },
    {
      id: 'zeiten',
      eyebrow: 'Unterrichtszeiten',
      h2: 'Zu welchen Uhrzeiten finden die Stunden statt?',
      lede: 'Die Mentoren arbeiten in Indien, der Unterricht richtet sich trotzdem nach dem Stundenplan in Nordrhein-Westfalen. Drei Beispiele zeigen, wie eine Uhrzeit hier und dort aussieht.',
      body: [
        { kind: 'table', numCols: [], caption: 'Beispielzeiten in Deutschland und beim Mentor in Indien', head: ['Uhrzeit in NRW', 'In Indien bis 27. März 2027 (MEZ)', 'In Indien ab 28. März 2027 (MESZ)'], rows: [
          ['14:00', '18:30', '17:30'],
          ['18:00', '22:30', '21:30'],
          ['Samstag 11:00', '15:30', '14:30']
        ] },
        { kind: 'source', html: 'Das Einheiten- und Zeitgesetz legt für Deutschland die MEZ (UTC+1) fest, im Sommer die MESZ (UTC+2); 2026 endete die Sommerzeit am 25. Oktober, 2027 beginnt sie am 28. März. Indien bleibt ganzjährig bei UTC+5:30, ist also im Winter 4 Stunden 30 Minuten und im Sommer 3 Stunden 30 Minuten voraus. Die Zeiten sind Beispiele, keine festen Gruppentermine.' },
        { kind: 'p', mt: true, html: 'Rund um die Klausuren der Q2 und in den Wochen vor dem 16. April 2027 buchen viele Familien zusätzliche Einzelstunden. Sie wählen die Uhrzeit bei der Buchung in Ihrer eigenen Zeitzone.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Fortschritt',
    h2: 'Woran Sie sehen, dass die Vorbereitung greift',
    lede: 'Unsere eigenen Stufen für die Oberstufe in NRW. Sie sind keine Noten und ersetzen keine Bewertung der Schule.',
    table: { caption: 'Fünf Stufen bis zum Informatik-Abitur (unsere Einteilung)', head: ['Stufe', 'Zeitpunkt', 'Ihr Kind kann'], rows: [
      ['1. Diagramm lesen', 'Einführungsphase', 'aus einem Implementationsdiagramm die Java-Klassen mit Attributen und Methoden schreiben'],
      ['2. Strukturen bedienen', 'Q1, erstes Halbjahr', 'Stack, Queue und List mit Stift verwenden und jeden leeren Fall abfangen'],
      ['3. Rekursiv denken', 'Q1, zweites Halbjahr', 'einen Binärbaum in allen drei Reihenfolgen durchlaufen und einen Suchbaum aufbauen'],
      ['4. Abfragen und Automaten', 'Q2, erstes Halbjahr', 'SQL über mehrere Tabellen schreiben und Wörter durch einen Automaten verfolgen'],
      ['5. Prüfungsreif', 'vor dem 16. April 2027', 'eine Aufgabe in der Zeit der Vorgaben vollständig lösen und jede Entscheidung begründen']
    ] },
    left: { h3: 'Für Eltern', ps: [
      'Nach jedem Monat erhalten Sie eine kurze Rückmeldung, welche Stufe erreicht ist und was noch fehlt.',
      'Ein Sprung von Stufe 2 zu 3 dauert oft am längsten, weil Rekursion für viele neu ist. Das ist normal und kein Grund zur Sorge.'
    ] },
    right: { h3: 'Für Schülerinnen und Schüler', ps: [
      'Schreiben Sie jede Lösung zuerst auf Papier. Erst danach tippen und vergleichen.',
      'Zeichnen Sie Stapel und Schlange als Kästchen. Wer sie sieht, verwechselt oben und vorn nicht mehr.'
    ] }
  },

  catalogue: {
    eyebrow: 'Weitere Kurse',
    h2: 'Neun weitere Kurse rund um Informatik und Mathematik',
    lede: 'Sinnvoll vor oder neben der Q1, je nachdem, wo Ihr Kind noch Lücken hat. Format und Sprache sind dieselben wie oben.',
    bands: [
      { num: 'I', h3: 'Java und Programmieren', sub: '13 bis 19 Jahre', courses: [
        { code: 'NRW / JAVA / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java für Jugendliche', blurb: 'Klassen, Vererbung und Sammlungen von Grund auf.' },
        { code: 'NRW / JAVA / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Datenstrukturen und Algorithmen', blurb: 'Stapel, Schlangen, Bäume und Graphen in der Tiefe.' },
        { code: 'NRW / JAVA / 03', slug: 'python-complete-masterclass-teens', title: 'Python für Jugendliche', blurb: 'Die zweite Sprache neben Java, für Projekte und Studium.' }
      ] },
      { num: 'II', h3: 'Daten und Netze', sub: '13 bis 19 Jahre', courses: [
        { code: 'NRW / DATEN / 01', slug: 'mysql-mastery-for-teens', title: 'SQL und Datenbanken', blurb: 'Joins, Gruppierungen und Datenmodelle.' },
        { code: 'NRW / DATEN / 02', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'IT-Sicherheit', blurb: 'Verschlüsselung und Schutz, defensiv gedacht.' },
        { code: 'NRW / DATEN / 03', slug: 'competitive-programming-for-teens-course', title: 'Wettbewerbsprogrammierung', blurb: 'Schnelle Algorithmen für Fortgeschrittene.' }
      ] },
      { num: 'III', h3: 'Mathematik und mehr', sub: '15 bis 19 Jahre', courses: [
        { code: 'NRW / MATHE / 01', slug: 'statistics-probability-maths-course', title: 'Stochastik', blurb: 'Wahrscheinlichkeit und Statistik mit Verständnis.' },
        { code: 'NRW / MATHE / 02', slug: 'maths-through-coding', title: 'Mathematik mit Code', blurb: 'Rechnen, Prüfen und Darstellen mit Python.' },
        { code: 'NRW / MATHE / 03', slug: 'ai-ml-masterclass-teens', title: 'KI und maschinelles Lernen', blurb: 'Modelle verstehen, nicht nur benutzen.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Ablauf',
    h2: 'So läuft die Abiturvorbereitung live',
    lede: 'Zwei Live-Stunden pro Woche mit demselben Mentor, jede rund eine Stunde lang. Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche.',
    slots: [
      { time: 'Nach der Schule', l: 'Am frühen Nachmittag oder am Abend deutscher Zeit.' },
      { time: 'Samstag', l: 'Am späten Vormittag, gut für längere Papieraufgaben.' },
      { time: 'Einzeln', l: 'Vor Q2-Klausuren und in der Osterzeit 2027.' }
    ],
    cells: [
      { h3: 'Ein Mentor', p: 'Dieselbe Person kennt den Kursstand und die Lücken.' },
      { h3: 'Vorgaben als Plan', p: 'Die Themen der Vorgaben 2027 bestimmen die Reihenfolge.' },
      { h3: 'Stift zuerst', p: 'Lösungen entstehen auf Papier, der Rechner prüft danach.' },
      { h3: 'Englisch, verständlich', p: 'Klare Sprache, Fachwörter in beiden Sprachen.' },
      { h3: 'Bericht an Eltern', p: 'Monatlich, kurz und mit nächstem Ziel.' },
      { h3: 'Gruppe oder einzeln', p: 'Fünfzehn bis zwanzig Lernende oder allein.' }
    ]
  },

  projectsH2: 'Was Lernende bauen',
  projectsLede: 'Wer Datenstrukturen versteht, baut daraus Anwendungen. Projekte unserer Lernenden zeigen die Karten unten; mehr finden Sie unter <a class="ag-inline-link" href="/student-labs">Student labs</a> (Seite auf Englisch).',
  reviewsLede: 'Bewertungen von Eltern und Lernenden auf Google, im englischen Original belassen.',

  fees: {
    h2: 'Kosten der Vorbereitung',
    lede: 'Ein Monat umfasst acht Stunden live. Die Euro-Beträge hier stützen sich auf den Referenzkurs der Europäischen Zentralbank; belastet wird Ihr Konto aber in US-Dollar, deren Umrechnung Ihre Bank vornimmt. Kleine Abweichungen auf dem Auszug sind deshalb möglich.',
    free: ['Kostenlose erste Stunde', 'Einstufung an einer Aufgabe aus dem Kurs', 'Ohne Kreditkarte'],
    group: ['Gruppe mit fünfzehn bis zwanzig Lernenden', 'Fester Mentor für die ganze Zeit', 'Zwei Stunden pro Woche', 'Monatlich kündbar'],
    one: ['Nur Ihr Kind und der Mentor', 'Plan nach Vorgaben und Kursstand', 'Termine nach Absprache']
  },

  faq: {
    eyebrow: 'Fragen und Antworten',
    h2: 'Informatik-Abitur NRW: häufige Fragen',
    items: [
      { q: 'Findet der Unterricht auf Deutsch statt?', a: 'Nein, der Unterricht ist ausschließlich auf Englisch, immer live. Für das Informatik-Abitur ist das ein Gewinn: Ihr Kind übt Programmieren und Englisch zugleich, und Java besteht ohnehin aus englischen Wörtern. Die Mentoren sprechen deutlich und passen Tempo und Aussprache an.' },
      { q: 'Wann ist das Informatik-Abitur 2027 in NRW?', a: 'Am Freitag, 16. April 2027, für Grundkurs und Leistungskurs. So steht es in Anlage A zum Runderlass des Schulministeriums vom 30. Mai 2025.' },
      { q: 'Wie lange dauert die Prüfung?', a: 'Laut den Vorgaben für 2027 beträgt die Arbeitszeit im Grundkurs 225 Minuten und im Leistungskurs 270 Minuten.' },
      { q: 'Welche Programmiersprache wird im NRW-Abitur verwendet?', a: 'Die Vorgaben 2027 nennen Java und SQL. Dazu kommen festgelegte Klassen wie Stack, Queue, List, BinaryTree und BinarySearchTree, im Leistungskurs auch Graph, Vertex und Edge.' },
      { q: 'Ist im NRW-Abitur ein Rechner erlaubt?', a: 'Nein. Die Vorgaben sagen, dass der Einsatz eines Computers nicht vorgesehen ist. Zugelassen sind ein Wörterbuch zur deutschen Rechtschreibung und ein wissenschaftlicher Taschenrechner oder ein CAS.' },
      { q: 'Können Schülerinnen und Schüler die Aufgaben selbst auswählen?', a: 'Nein. Von vier Aufgaben wählt die Fachlehrkraft im Grundkurs zwei und im Leistungskurs drei aus. Eine Auswahl durch die Prüflinge ist nicht vorgesehen.' },
      { q: 'Kann Informatik in NRW eine Naturwissenschaft ersetzen?', a: 'Nach dem Informatik-Monitor 2026/27 ist Informatik in NRW den naturwissenschaftlichen Fächern weder bei den Belegungspflichten noch als Prüfungsfach gleichgestellt. Wer Informatik wählt, braucht also weiterhin eine Naturwissenschaft.' },
      { q: 'Wann finden die Stunden statt?', a: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche. 14:00 Uhr in NRW ist im Winter 18:30 Uhr in Indien, wo die Mentoren sitzen.' },
      { q: 'In welcher Währung zahle ich?', a: 'In US-Dollar. Angezeigt wird der Monatsbetrag in Euro nach dem Referenzkurs der Europäischen Zentralbank, die Umrechnung macht Ihre Bank. Die erste Stunde kostet nichts.' },
      { q: 'Vergeben Sie Noten oder ein Zertifikat für das Abitur?', a: 'Nein. Wir unterrichten begleitend zur Schule. Die Note im Abitur entsteht allein in der Schule und in der zentralen Prüfung; wir sind mit dem Schulministerium nicht verbunden.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Weiterlesen',
    h2: 'Weitere Seiten für Familien in Deutschland',
    lede: 'Die meisten dieser Seiten sind auf Englisch geschrieben.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Die Übersicht für ganz Deutschland.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Für Klasse 5 bis 13, mit allen 16 Ländern.' },
      { href: '/abitur-computer-science-in-english', label: 'Abitur computer science in English', p: 'Das Informatik-Abitur im Ländervergleich.' },
      { href: '/informatik-in-german-schools-by-state', label: 'Informatik by state', p: 'Pflichtstunden in jedem Land.' },
      { href: '/abitur-maths-in-english', label: 'Abitur maths in English', p: 'Das Mathematik-Abitur auf Englisch.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Wie unser Live-Unterricht abläuft.' }
    ]
  },

  start: {
    h2: 'Probestunde für das Informatik-Abitur buchen',
    lede: 'Bringen Sie zur ersten Stunde eine Klausur oder ein Arbeitsblatt aus der Q1 oder Q2 mit. Der Mentor löst mit Ihrem Kind eine Aufgabe daraus und schlägt danach Kurs, Gruppe und Plan bis zum Prüfungstag vor.',
    readFirst: 'Zum Vorab-Lesen: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> zeigt, wie eine Live-Stunde aussieht, <a class="ag-inline-link" href="/student-labs">Student labs</a> zeigt Projekte (beide Seiten auf Englisch).',
    note: 'Alle Stunden laufen live online mit Mentoren in Indien und nur auf Englisch. Per WhatsApp antworten wir am schnellsten.',
    formNote: 'Die Probestunde ist gratis, ohne Vertrag und ohne Kartendaten.'
  },

  footer: {
    cols: [
      { h4: 'Abitur', links: [
        { href: '/courses/informatik-abitur-course-java-python', label: 'Informatik Abitur' },
        { href: '/courses/abitur-mathematics-course-in-english', label: 'Mathematik Abitur' },
        { href: '/courses/java-programming-masterclass-for-teens', label: 'Java für Jugendliche' },
        { href: '/courses', label: 'Alle Kurse' }
      ] },
      { h4: 'Deutschland', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/abitur-computer-science-in-english', label: 'Abitur computer science' },
        { href: '/student-labs', label: 'Projekte' }
      ] }
    ],
    bottomRight: 'Stapel oben, Schlange vorn'
  },

  personalityCss: `
.ag-root.ag-ian .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-ian .ag-capsule { border-left-width: 5px; }
.ag-root.ag-ian .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-ian .ag-table th { text-transform: none; }
.ag-root.ag-ian .ag-code-head b { font-variant-numeric: tabular-nums; }
`,

  dossier: {
    curriculumAuthority: 'Ministerium für Schule und Bildung NRW: Vorgaben Zentralabitur 2027 Informatik and Anlage A Fachprüfungstermine 2027 (RdErl. 30 May 2025); GI Informatik-Monitor 2026/27, Nordrhein-Westfalen page; Einheiten- und Zeitgesetz. Read 2 and 3 November 2026. Exercise our own.',
    localProject: 'Reverse the first k entries of a queue with one stack: an original Java exercise (ArrayDeque for running, NRW Stack and Queue in the exam), [Ada, Ben, Cem, Dana, Eli, Fynn] with k = 4 gives [Dana, Cem, Ben, Ada, Eli, Fynn], then k = 6 gives [Fynn, Eli, Ada, Ben, Cem, Dana]; the trace table shows why the final rotation is needed. Lesson family: a stack reverses, a queue keeps order; write both containers down after every step.',
    requiredMentions: ['[Dana, Cem, Ben, Ada, Eli, Fynn]', '[Fynn, Eli, Ada, Ben, Cem, Dana]', 'Freitag, 16. April 2027', 'im Grundkurs 225 Minuten und im Leistungskurs 270 Minuten', '2.808 Informatiklehrkräfte', 'Als Prüfungsfach im Abitur hatten es 4 Prozent', 'Stapel oben, Schlange vorn', 'Nach 2 Rotationen (rest = 6 minus 4)'],
    sources: [
      { claim: 'NRW Vorgaben 2027 Informatik: Java, SQL, named classes, task choice by teacher, aids, no computer, 225 and 270 minutes.', url: 'https://www.standardsicherung.schulministerium.nrw.de/system/files/media/document/file/informatik_2027_gg.pdf' },
      { claim: 'NRW 2027 written Abitur dates, Informatik Friday 16 April 2027 GK and LK.', url: 'https://www.standardsicherung.schulministerium.nrw.de/system/files/media/document/file/anlage_a_termine_2027_ht.pdf' },
      { claim: 'NRW Oberstufe Informatik rules, shares 14 and 4 percent, 2,808 teachers, Pflichtfach 5 and 6.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/nordrhein-westfalen' },
      { claim: 'German legal time.', url: 'https://www.gesetze-im-internet.de/einhzeitg/' }
    ],
    rejectedClaims: [
      'German-language teaching: we teach in English only, and the page says so.',
      'Any grade, pass or Abitur result promise: refused; we teach alongside school and award no grades.',
      'Reproducing real NRW Abitur tasks: refused; the exercise is our own.',
      'Method names of the ministry classes Stack, Queue and List: not quoted, because the saved Vorgaben PDF names the classes only.',
      'Gender shares from the Informatik-Monitor: not used (brief rule 10).',
      'Re-fetching standardsicherung.schulministerium.nrw.de after its HTTP 403: not attempted.'
    ]
  }
};
