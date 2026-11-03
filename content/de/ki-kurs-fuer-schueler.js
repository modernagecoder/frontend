'use strict';
// KI-Kurs für Schüler (ag- German-language door, Germany cluster P3 row DE064), written 2026-11-03.
// Owner 2026-11-02: classes are live, in English only, with mentors (based in India) who match the learner's pace and
// accent; the capsule says "auf Englisch". Formal "Sie" throughout. Pages show euro; checkout charges USD.
// Spine: almost every teenager in Germany already uses AI (JIM-Studie 2025); our course is about what happens inside:
// pupils from Klasse 7 build models in Python, starting with two models that are right equally often but not equally honest,
// and can take a project to the Bundeswettbewerb Künstliche Intelligenz. Tool ages only from the vendors' own pages.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/ki-kurs-fuer-schueler/, fetched 3 Nov 2026):
//  - mpfs, JIM-Studie 2025 (mpfs.de/app/uploads/2025/11/JIM_2025_PDF_barrierearm.pdf): "zwischen dem 02. Juni 2025 und dem
//    12. Juli 2025 aus der Grundgesamtheit der deutschsprachigen Jugendlichen im Alter von zwölf bis 19 Jahren in
//    Deutschland eine repräsentative Stichprobe von n = 1.200 Fällen befragt"; "84 Prozent haben das Tool bereits verwendet
//    - ein Plus von 27 Prozentpunkten gegenüber 2024, als noch 57 Prozent"; "Inzwischen arbeitet die Hälfte der
//    Jugendlichen mindestens mehrmals pro Woche mit ChatGPT"; "Bei den Zwölf- bis 13-Jährigen haben 69 Prozent ChatGPT
//    ausprobiert"; "Insgesamt berichten 91 Prozent der Befragten, generell mindestens eine KI-Anwendung einzusetzen (2024:
//    62 %)"; "74 Prozent Hausaufgaben und Lernen als Anlass ... (2024: 65 %)"; "Informationssuche mit 70 Prozent (2024:
//    43 %)"; "54 Prozent lassen sich hierbei von einer KI helfen"; "Knapp über die Hälfte (52 %) gibt an, KI in der Schule
//    bzw. im Unterricht einzusetzen"; motives base "JIM 2025, n=1.088 ... Basis: ChatGPT oder andere KI-Anwendung genutzt".
//    Press release PM 4/2025: "Die von KI gelieferten Informationen halten 57 Prozent dabei für vertrauenswürdig."
//  - KMK Handlungsempfehlung KI (10.10.2024): "Beim Lernen über KI ist daher relevant, die Güte der Ergebnisse von KI und
//    deren Wirkung auch aus ethischer Perspektive einschätzen zu können" (used here in our own words only).
//  - KMK-Kompetenzrahmen KI (16.10.2026): 2.1.2 "Chancen und Grenzen KI-gestützter Interaktionsformen"; 6.2.4
//    "Sensibilität gegenüber Deepfakes und KI-verstärkter Desinformation entwickeln"; "Die Kompetenzbereiche der KMK bleiben
//    in Struktur und Geltung unverändert."
//  - FACTS.md 208 to 214 (BWKI: Tübingen AI Center, machine learning required, Sekundarstufe I und II, teams up to four,
//    documentation + runnable code + video pitch, up to 10 teams to the November final, German or English, 2026 dates),
//    97 (about 15 percent take Informatik in the Qualifikationsphase).
//  - Anthropic consumer terms (18+, "whichever is higher"); Google Konto-Hilfe ("Deutschland: mindestens 16 Jahre");
//    ChatGPT 13 with parent's permission under 18 from content/ai-tool-age-audit.json (openai.com HTTP 403, not retried).
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
// Our own: sicher.py (scratchpad de/w/GC/kks2, python3 -I 3.14, seed 2026, 1000 invented photos):
// "Modell A: 760 von 1000 richtig | "mindestens 90 % sicher" bei 215 Fotos, davon richtig: 96%";
// "Modell B: 760 von 1000 richtig | "mindestens 90 % sicher" bei 1000 Fotos, davon richtig: 76%".
// (Replaced an earlier n-gram example on 2026-11-03 because a sibling page uses the same idea.)
// Lesson family: confidence is not correctness; check whether "90 percent sure" is right about 90 percent of the time
// (calibration).

const { DE } = require('../../scripts/nl/lib/market-de');

const PY = [
  'import random',
  '',
  'zufall = random.Random(2026)',
  '',
  '# 1000 erfundene Fotos: Für jedes gibt es eine wahre Chance p, dass eine Katze darauf ist',
  'faelle = []',
  'for _ in range(1000):',
  '    p = zufall.random()',
  '    katze = zufall.random() < p',
  '    faelle.append((p, katze))',
  '',
  'def modell_a(p):',
  '    return p                         # ehrlich: sagt die wahre Chance',
  '',
  'def modell_b(p):',
  '    return 0.99 if p > 0.5 else 0.01  # übermütig: immer fast sicher',
  '',
  "for name, modell in [('A', modell_a), ('B', modell_b)]:",
  '    richtig = sum((modell(p) > 0.5) == katze for p, katze in faelle)',
  '    sicher = [(p, katze) for p, katze in faelle if max(modell(p), 1 - modell(p)) >= 0.9]',
  '    treffer = sum((modell(p) > 0.5) == katze for p, katze in sicher)',
  "    print(f'Modell {name}: {richtig} von 1000 richtig | '",
  '          f\'"mindestens 90 % sicher" bei {len(sicher)} Fotos, davon richtig: {treffer / len(sicher):.0%}\')'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'german', label: 'KI-Kurs für Schüler' },
  slug: 'ki-kurs-fuer-schueler',
  code: 'kks',
  accent: '#034D73',
  accentRationale: 'KI-Kurs für Schüler: a deep ink blue #034D73, the colour of a terminal at night, cooler than the plum of the children\'s AI page; contrast 7.37 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Deutschland' }],
  routeLabel: 'KI-Kurs für Schüler (auf Englisch)',
  title: 'KI-Kurs für Schüler: Modelle bauen statt chatten, auf Englisch',
  description: 'KI-Kurs für Schülerinnen und Schüler ab Klasse 7: live auf Englisch, mit Python und eigenen Modellen. Dazu die JIM-Zahlen 2025 und der Weg zum BWKI.',
  ogDescription: 'Warum eine KI, die sich sicher ist, nicht recht haben muss, in einem kleinen Python-Experiment; wie Jugendliche in Deutschland laut JIM-Studie 2025 KI nutzen; welche Werkzeuge unter 18 erlaubt sind; der Bundeswettbewerb KI. Live-Unterricht auf Englisch.',
  twitterDescription: 'KI-Kurs für Schüler, live auf Englisch: Modelle in Python bauen, verstehen statt kopieren, bis zum BWKI.',
  pageName: 'KI-Kurs für Schüler',
  webPageDescription: 'Ein Leitfaden für Schülerinnen und Schüler ab Klasse 7 und ihre Eltern in Deutschland: wie Jugendliche laut JIM-Studie 2025 KI nutzen, was der KMK-Kompetenzrahmen von 2026 über KI verlangt, welche Altersgrenzen die Anbieter selbst setzen, ein eigenes Modell, das das nächste Wort vorhersagt, und der Weg zum Bundeswettbewerb Künstliche Intelligenz.',
  courseDescription: 'Live-Online-Kurs für Schülerinnen und Schüler von etwa 12 bis 19 Jahren in ganz Deutschland, ausschließlich auf Englisch: Python, Daten, maschinelles Lernen, Sprachmodelle von innen und ein eigenes KI-Projekt, in der Gruppe oder im Einzelunterricht.',
  crumbs: [{ name: 'Kurse', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'KI-Kurs für Schüler',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Deutschland' },
    { href: '#jim', label: 'JIM 2025' },
    { href: '#modell', label: 'Modell' },
    { href: '#bwki', label: 'BWKI' },
    { href: '#zeiten', label: 'Zeiten' }
  ],
  eyebrow: 'Deutschland &middot; Künstliche Intelligenz &middot; Klasse 7 bis 13',
  h1: 'KI-Kurs für Schüler: verstehen, was im Modell passiert',
  lede: 'Fast alle Jugendlichen in Deutschland nutzen inzwischen KI, für Hausaufgaben, zum Recherchieren, im Unterricht. Wie ein Modell zu seinen Antworten kommt und wie sicher es wirklich sein darf, wissen die wenigsten. In diesem Kurs bauen Schülerinnen und Schüler ab Klasse 7 eigene Modelle in Python, prüfen sie an echten Daten und lernen, wann man einer KI nicht trauen sollte. Unterricht auf Englisch, mit Mentoren aus Indien, live und mit einem festen Mentor.',
  secondaryCta: { href: '#modell', label: 'Das Modell ausprobieren' },
  wa: 'Hallo Modern Age Coders, ich interessiere mich für den KI-Kurs für Schüler auf Englisch. Kann ich eine kostenlose Probestunde buchen?',
  heroNote: 'Unterricht auf Englisch, mit Mentoren aus Indien &middot; live online seit 2020 &middot; über 10.000 Lernende weltweit',
  spec: [
    ['Für', 'Klasse 7 bis 13, etwa 12 bis 19 Jahre'],
    ['Sprache im Code', 'Python'],
    ['Inhalt', 'Daten, Modelle, Sicherheit prüfen'],
    ['Gruppe', 'Fünfzehn bis zwanzig, oder einzeln'],
    ['Unterricht', 'Live auf Englisch, fester Mentor'],
    ['Probestunde', 'Kostenlos, ohne Karte']
  ],
  capsuleQ: 'Kurz gesagt',
  capsule: 'Bei Modern Age Coders ist der KI-Kurs für Schüler ein Live-Unterricht auf Englisch, gedacht für Lernende von Klasse 7 bis 13 überall in Deutschland und gehalten von Mentoren aus Indien. Statt nur einen Chatbot zu bedienen, programmieren die Lernenden selbst Modelle in Python: vom ersten Klassifikator, dessen Sicherheit sie nachprüfen, bis zum eigenen Projekt für den Bundeswettbewerb Künstliche Intelligenz. Unterrichtet wird in einer Gruppe von fünfzehn bis zwanzig oder im Einzelunterricht, im Tempo der Lernenden.',

  picks: {
    eyebrow: 'Passende Kurse',
    h2: 'Drei Kurse für Jugendliche, die KI selbst bauen wollen',
    lede: 'Einer führt von Python zu echten Modellen, einer übt das Arbeiten mit Daten, einer bereitet auf die Informatik- und KI-Wettbewerbe in Deutschland vor.',
    items: [
      { course: 'ai-ml-masterclass-teens', code: 'KKS / 01', title: 'KI und maschinelles Lernen für Jugendliche', alt: 'Kursbild KI und maschinelles Lernen für Jugendliche', note: 'Ab 13 Jahren. Von Python über Regression und Klassifikation bis zu neuronalen Netzen, mit eigenen Projekten statt fertiger Werkzeuge.' },
      { course: 'data-science-course-for-teens-python-data', code: 'KKS / 02', title: 'Data Science für Jugendliche', alt: 'Kursbild Data Science für Jugendliche mit Python', note: 'Ab 13 Jahren. Daten einlesen, säubern, darstellen und die ersten Modelle darauf trainieren, Schritt für Schritt in Python.' },
      { course: 'german-informatics-competitions-course-biber-bwinf-bwki', code: 'KKS / 03', title: 'Informatik- und KI-Wettbewerbe', alt: 'Kursbild Informatik-Wettbewerbe Biber, BwInf und BWKI', note: 'Für 9 bis 19 Jahre. Vom Informatik-Biber bis zum BWKI-Projekt mit Dokumentation, lauffähigem Code und Präsentation.' }
    ]
  },

  sections: [
    {
      id: 'jim',
      eyebrow: 'Was Jugendliche tun',
      h2: 'Wie nutzen Jugendliche in Deutschland KI?',
      lede: 'Häufig und vor allem für die Schule. Die JIM-Studie 2025 hat 1.200 Jugendliche zwischen zwölf und 19 Jahren befragt, mit einem Schwerpunkt auf KI.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'KI im Alltag von Zwölf- bis 19-Jährigen, JIM-Studie 2025 und 2024', head: ['Aussage', '2025', '2024'], rows: [
          ['Haben ChatGPT schon verwendet (alle Befragten)', '84 %', '57 %'],
          ['Setzen mindestens eine KI-Anwendung ein (alle Befragten)', '91 %', '62 %'],
          ['Nutzen KI für Hausaufgaben oder zum Lernen (KI-Nutzende)', '74 %', '65 %'],
          ['Nutzen KI zur Informationssuche (KI-Nutzende)', '70 %', '43 %'],
          ['Lassen sich erklären, wie etwas geht (KI-Nutzende)', '54 %', 'nicht gesondert ausgewiesen'],
          ['Setzen KI in der Schule oder im Unterricht ein (KI-Nutzende)', '52 %', 'nicht gesondert ausgewiesen']
        ] },
        { kind: 'source', html: 'Quelle: Medienpädagogischer Forschungsverbund Südwest (mpfs), JIM-Studie 2025, Kapitel 13 Künstliche Intelligenz. Befragt wurden 1.200 deutschsprachige Jugendliche von zwölf bis 19 Jahren zwischen dem 2. Juni und dem 12. Juli 2025; die Nutzungsmotive beziehen sich auf 1.088 Befragte, die ChatGPT oder eine andere KI-Anwendung genutzt haben. Die Frage nach Hausaufgaben wurde 2025 leicht anders formuliert als 2024. Gelesen am 3. November 2026.' },
        { kind: 'two', mt: true,
          leftH3: 'Was auffällt',
          left: [
            'Laut JIM-Studie 2025 arbeitet die Hälfte der Jugendlichen mindestens mehrmals pro Woche mit ChatGPT. Schon bei den Zwölf- und Dreizehnjährigen haben es 69 Prozent ausprobiert.',
            'In der Pressemitteilung zur Studie heißt es außerdem, 57 Prozent hielten die von KI gelieferten Informationen für vertrauenswürdig. Genau hier setzt der Kurs an: Wer weiß, wie ein Modell rechnet, kann einschätzen, wann man ihm glauben kann und wann nicht.'
          ],
          rightH3: 'Was die Zahlen nicht sagen',
          right: [
            'Die Studie misst, wie oft Jugendliche KI nutzen, nicht, ob sie verstehen, was dabei passiert. Ein Schüler kann jeden Tag einen Chatbot fragen und trotzdem nicht wissen, warum dieser eine Quelle erfindet.',
            'Deshalb beginnen wir im Kurs nicht mit Eingabetricks, sondern mit der Frage, wie aus Daten eine Vorhersage wird. Den Rest der Zeit verbringen die Lernenden mit eigenem Code.'
          ] }
      ]
    },
    {
      id: 'kmk',
      eyebrow: 'Schule',
      h2: 'Was sollen Schüler laut KMK über KI können?',
      lede: 'Mehr als bedienen. Der KMK-Kompetenzrahmen "Bildung in der digitalen Welt" wurde im Oktober 2026 um KI ergänzt; die sechs Kompetenzbereiche bleiben dabei in Struktur und Geltung unverändert.',
      body: [
        { kind: 'table', numCols: [], caption: 'Drei Punkte aus dem KMK-Kompetenzrahmen 2026 und was wir im Kurs daraus machen', head: ['Abschnitt im Kompetenzrahmen', 'Wortlaut (Auszug)', 'Im Kurs (unsere Umsetzung)'], rows: [
          ['2.1.2 Interagieren', 'Chancen und Grenzen KI-gestützter Interaktionsformen', 'Die Sicherheitsangabe eines Modells an echten Ergebnissen prüfen'],
          ['5.5.1 Algorithmen erkennen und formulieren', 'zentraler Konzepte maschinellen Lernens sowie deren Grenzen', 'Trainings- und Testdaten trennen, Fehlerquoten messen'],
          ['6.2.4 Gesellschaftliche Wirkungen', 'Sensibilität gegenüber Deepfakes und KI-verstärkter Desinformation entwickeln', 'Überzeugend klingende Antworten nachzählen statt glauben']
        ] },
        { kind: 'source', html: 'Quelle: KMK-Kompetenzrahmen "Bildung in der digitalen Welt"; Aktualisierung im Kontext Künstlicher Intelligenz (2026), Beschluss der Bildungsministerkonferenz vom 16.10.2026, gelesen am 3. November 2026. Die rechte Spalte beschreibt unseren Kurs, nicht den Schulunterricht.' },
        { kind: 'p', mt: true, html: 'Schon 2024 hatten die Länder in ihrer Handlungsempfehlung zu KI betont, dass Lernende die Güte von KI-Ergebnissen beurteilen können sollen, auch unter ethischen Gesichtspunkten. Wie viel davon im Unterricht ankommt, hängt stark davon ab, ob jemand Informatik belegt. Laut Informatik-Monitor 2026/27 der Gesellschaft für Informatik wählen bundesweit nur rund 15 Prozent der Lernenden in der Qualifikationsphase das Fach.' },
        { kind: 'p', html: 'Noten geben wir nicht, und den Schulunterricht ersetzen wir nicht; was im Zeugnis steht, entscheidet die Schule. Er gibt Lernenden aber das Handwerkszeug, um im Unterricht, in einer Facharbeit oder im Wettbewerb mit eigenem Code zu argumentieren. Mit der KMK und den Ministerien der Länder sind wir nicht verbunden.' }
      ]
    },
    {
      id: 'modell',
      tint: 'tint',
      eyebrow: 'Ein Beispiel aus dem Kurs',
      h2: 'Ist eine KI, die sich sicher ist, auch richtig?',
      lede: 'Nicht unbedingt. Viele Modelle geben zu jeder Antwort an, wie sicher sie sind. Ob man dieser Zahl trauen kann, lässt sich prüfen: Wenn ein Modell sagt "90 Prozent sicher", sollte es in etwa neun von zehn solchen Fällen recht haben. Daten, Modelle und Code sind unsere eigenen.',
      body: [
        { kind: 'code', label: 'Zwei Modelle, gleich oft richtig, verschieden ehrlich', lang: 'Python', code: PY, note: 'Ausgabe unseres Laufs mit Python 3.14:<br><code>Modell A: 760 von 1000 richtig | "mindestens 90 % sicher" bei 215 Fotos, davon richtig: 96%</code><br><code>Modell B: 760 von 1000 richtig | "mindestens 90 % sicher" bei 1000 Fotos, davon richtig: 76%</code>' },
        { kind: 'table', mt: true, numCols: [1, 2, 3], caption: 'Was die beiden Modelle versprechen und was sie halten (unser Experiment, 1000 erfundene Fotos)', head: ['Modell', 'Richtig insgesamt', 'Fälle mit mindestens 90 % Sicherheit', 'Davon richtig'], rows: [
          ['A, ehrlich', '760', '215', '96 %'],
          ['B, übermütig', '760', '1000', '76 %']
        ] },
        { kind: 'p', mt: true, html: 'Beide Modelle entscheiden bei jedem Foto gleich, Katze oder keine Katze, und liegen deshalb gleich oft richtig: 760 von 1000. Der Unterschied steckt in der Zahl, die sie dazu nennen. Modell B behauptet bei jedem einzelnen Foto, zu mindestens 90 Prozent sicher zu sein, hat in diesen Fällen aber nur in 76 Prozent recht. Modell A ist nur bei 215 Fotos so sicher und liegt dort in 96 Prozent richtig. Wer nur auf die Zahl am Ende schaut, merkt davon nichts; wer nachzählt, sieht sofort, welchem Modell man glauben kann.' },
        { kind: 'p', html: 'Genau diese Frage stellt sich bei jeder KI, die eine Antwort mit Überzeugung formuliert. Ein Chatbot nennt zwar meist keine Prozentzahl, klingt aber fast immer sicher. Im Kurs lernen Jugendliche, die Sicherheit eines Modells wie eine Behauptung zu behandeln, die man an Daten überprüft.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Sicher ist nicht richtig.</strong> Eine hohe Sicherheitsangabe sagt etwas über das Modell, nicht über die Welt. Ob sie stimmt, zeigt erst der Vergleich mit den echten Ergebnissen.',
          '<strong>Nach Sicherheit sortieren und nachzählen.</strong> Alle Fälle mit "mindestens 90 Prozent" zusammennehmen und prüfen, wie viele davon stimmen. Liegt der Anteil weit darunter, ist das Modell übermütig.',
          '<strong>Gleich viele Treffer, verschiedener Wert.</strong> Ein ehrliches Modell ist nützlicher, weil man weiß, wann man selbst noch einmal hinsehen sollte.',
          '<strong>Den Zufall festhalten.</strong> Der Startwert 2026 sorgt dafür, dass jede Person im Kurs dieselben 1000 Fotos bekommt und die Ergebnisse vergleichen kann. Als nächste Übung ändern die Lernenden Modell B so, dass es ehrlicher wird.'
        ] }
      ]
    },
    {
      id: 'werkzeuge',
      eyebrow: 'Werkzeuge und Alter',
      h2: 'Welche KI-Werkzeuge dürfen Schüler unter 18 nutzen?',
      lede: 'Das legen die Anbieter in ihren eigenen Bedingungen fest, und die Grenzen liegen oft höher, als Jugendliche denken. Im Kurs empfehlen wir unter 18 nichts, was die Anbieter erst ab 18 erlauben.',
      body: [
        { kind: 'table', numCols: [], caption: 'Altersgrenzen laut Anbieter, Stand November 2026', head: ['Werkzeug', 'Regel des Anbieters', 'Für unseren Kurs'], rows: [
          ['Claude (Anthropic)', 'Mindestens 18 Jahre, oder das höhere Mindestalter vor Ort', 'Nicht für Teilnehmende unter 18'],
          ['ChatGPT (OpenAI)', 'Ab 13; wer jünger als 18 ist, braucht die Erlaubnis der Eltern', 'Nur ab 13 und nur mit Zustimmung der Eltern, nie als Pflicht'],
          ['Google-Konto, selbst verwaltet', 'Deutschland: mindestens 16 Jahre', 'Wir setzen kein eigenes Google-Konto voraus'],
          ['Python mit offenen Bibliotheken auf dem eigenen Rechner', 'Keine Altersgrenze, kein Konto', 'Unser Standardwerkzeug']
        ] },
        { kind: 'source', html: 'Quellen: Anthropic, Consumer Terms of Service, gelesen am 3. November 2026; Google, Konto-Hilfe zu Altersanforderungen, gelesen am 3. November 2026; OpenAI, Terms of Use, nach unserer Prüfung der Anbieterbedingungen vom Juli 2026 (openai.com hat unseren erneuten Abruf im November 2026 mit HTTP 403 abgelehnt). Mit keinem dieser Anbieter sind wir verbunden.' },
        { kind: 'p', mt: true, html: 'Das Wichtigste lernen Jugendliche ohnehin ohne fremde Werkzeuge: Ein Modell, das man selbst trainiert hat, kann man bis in die letzte Zahl erklären. Diese Erfahrung macht die Arbeit mit großen Modellen später sicherer, weil man weiß, welche Fragen man stellen muss.' }
      ]
    },
    {
      id: 'bwki',
      eyebrow: 'Wettbewerb',
      h2: 'Wie kommen Schüler zum Bundeswettbewerb Künstliche Intelligenz?',
      lede: 'Mit einem eigenen Projekt, das maschinelles Lernen verwendet. Der Bundeswettbewerb Künstliche Intelligenz (BWKI) wird vom Tübingen AI Center ausgerichtet und von der Kultusministerkonferenz empfohlen.',
      body: [
        { kind: 'table', numCols: [], caption: 'BWKI: Regeln und Termine der Runde 2026 laut Veranstalter', head: ['Punkt', 'Was gilt'], rows: [
          ['Wer teilnehmen kann', 'Schülerinnen und Schüler der Sekundarstufe I und II, allein oder im Team bis zu vier Personen'],
          ['Was ein Projekt braucht', 'Methoden des maschinellen Lernens'],
          ['Was abgegeben wird', 'Schriftliche Dokumentation, lauffähiger Code und ein Video-Pitch von zwei bis vier Minuten'],
          ['Sprache', 'Deutsch oder Englisch'],
          ['Start der Anmeldung 2026', '1. März 2026'],
          ['Schluss für Projektideen 2026', '12. Juli 2026 (verlängert)'],
          ['Abgabe der Projekte 2026', '20. September 2026'],
          ['Finale 2026', '13. November 2026 in Tübingen, mit bis zu zehn Teams']
        ] },
        { kind: 'source', html: 'Quelle: Bundeswettbewerb Künstliche Intelligenz, Teilnahmebedingungen und Startseite (bw-ki.de), gelesen am 2. November 2026. Die Termine für 2027 veröffentlicht der Veranstalter selbst. Mit dem BWKI und dem Tübingen AI Center sind wir nicht verbunden.' },
        { kind: 'p', mt: true, html: 'Dass Projekte auch auf Englisch eingereicht werden dürfen, passt gut zu unserem Unterricht: Wer Code, Kommentare und Dokumentation ohnehin auf Englisch schreibt, kann alles direkt verwenden. Im Kurs planen wir ein Projekt rückwärts vom Abgabetermin, schreiben die Dokumentation parallel zum Code und üben den Pitch vor der Gruppe. Die Aufgabenstellung, die Daten und die Ideen kommen von den Lernenden selbst; wir geben Rückmeldung, schreiben das Projekt aber nicht.' }
      ]
    },
    {
      id: 'zeiten',
      eyebrow: 'Unterrichtszeiten',
      h2: 'Wann findet der KI-Kurs für Schüler statt?',
      lede: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche.',
      body: [
        { kind: 'table', numCols: [], caption: 'Mögliche Stunden nach der Schule, umgerechnet auf die Uhr in Indien', head: ['In Deutschland', 'In Indien bis zum 27. März 2027', 'In Indien ab dem 28. März 2027'], rows: [
          ['16:10', '20:40', '19:40'],
          ['17:40', '22:10', '21:10'],
          ['Sonntag 10:15', '14:45', '13:45']
        ] },
        { kind: 'source', html: 'Das Einheiten- und Zeitgesetz legt für Deutschland MEZ (UTC+1) und im Sommer MESZ (UTC+2) fest. Die Sommerzeit endete am 25. Oktober 2026 und beginnt am 28. März 2027 von Neuem. Indien rechnet das ganze Jahr mit UTC+5:30; der Vorsprung beträgt also im Winter viereinhalb und im Sommer dreieinhalb Stunden. Die Zeilen sind Beispiele, keine festen Gruppen.' },
        { kind: 'p', mt: true, html: 'Vor Klausuren, Facharbeiten oder einer Wettbewerbsabgabe vereinbaren viele Lernende zusätzliche Einzelstunden. Im Buchungsformular erscheinen alle Zeiten in der Zeitzone, die Ihr Gerät verwendet.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Fortschritt',
    h2: 'Woran man sieht, dass jemand KI wirklich versteht',
    lede: 'Unsere eigenen fünf Stufen, nach denen wir Lernende einordnen und ihnen Rückmeldung geben.',
    table: { caption: 'Fünf Stufen im KI-Kurs für Schüler (unsere)', head: ['Stufe', 'Typisch ab', 'Sie können'], rows: [
      ['1. Daten lesen', 'Klasse 7', 'eine Tabelle in Python einlesen, zählen und darstellen'],
      ['2. Vorhersagen', 'Klasse 8', 'ein einfaches Modell bauen und prüfen, ob seine Sicherheitsangaben stimmen'],
      ['3. Prüfen', 'Klasse 9', 'Trainings- und Testdaten trennen und eine Fehlerquote berechnen'],
      ['4. Verbessern', 'Klasse 10', 'zwei Modelle vergleichen und begründen, welches besser ist und warum'],
      ['5. Eigenes Projekt', 'Oberstufe', 'eine Frage mit eigenen Daten beantworten, dokumentieren und vorstellen']
    ] },
    left: { h3: 'Für Schülerinnen und Schüler', ps: [
      'Lassen Sie jede Ausgabe Ihres Modells gegen die Daten prüfen, aus denen es gelernt hat. Ein Satz, der überzeugend klingt, ist noch kein Beleg.',
      'Schreiben Sie zu jedem Experiment eine Zeile auf: Was haben Sie erwartet, was kam heraus? Daraus wird später die Dokumentation.'
    ] },
    right: { h3: 'Für Eltern', ps: [
      'Bitten Sie Ihr Kind, Ihnen das Modell der Woche in zwei Minuten zu erklären. Wer es erklären kann, hat es verstanden.',
      'Nach jedem Block von Stunden schicken wir Ihnen einige Zeilen dazu, was geschafft ist und was als Nächstes ansteht.'
    ] }
  },

  catalogue: {
    eyebrow: 'Weitere Kurse',
    h2: 'Neun weitere Kurse rund um Code, Daten und Schule',
    lede: 'Überall gilt: live, englischsprachig, eine feste Bezugsperson als Mentor, wahlweise Gruppe oder Einzelstunde.',
    bands: [
      { num: 'I', h3: 'Programmieren', sub: '12 bis 18 Jahre', courses: [
        { code: 'KKS / CODE / 01', slug: 'python-complete-masterclass-teens', title: 'Python für Jugendliche', blurb: 'Vom ersten Skript bis zu eigenen Anwendungen.' },
        { code: 'KKS / CODE / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithmen und Datenstrukturen', blurb: 'Listen, Bäume, Suchen und Sortieren mit Verstand.' },
        { code: 'KKS / CODE / 03', slug: 'git-github-version-control-course-for-teens', title: 'Git und GitHub', blurb: 'Code sauber versionieren, wie es Wettbewerbe erwarten.' }
      ] },
      { num: 'II', h3: 'Daten und Modelle', sub: '13 bis 19 Jahre', courses: [
        { code: 'KKS / DATA / 01', slug: 'orange-data-mining-visual-machine-learning-course-for-teens', title: 'Maschinelles Lernen visuell', blurb: 'Modelle mit Orange zusammenstecken, bevor man sie programmiert.' },
        { code: 'KKS / DATA / 02', slug: 'statistics-probability-maths-course', title: 'Statistik und Wahrscheinlichkeit', blurb: 'Die Mathematik hinter jeder Vorhersage.' },
        { code: 'KKS / DATA / 03', slug: 'mysql-mastery-for-teens', title: 'Datenbanken und SQL', blurb: 'Daten abfragen, bevor man mit ihnen lernt.' }
      ] },
      { num: 'III', h3: 'Schule und Abschluss', sub: '15 bis 19 Jahre', courses: [
        { code: 'KKS / SCHULE / 01', slug: 'informatik-abitur-course-java-python', title: 'Informatik Oberstufe und Abitur', blurb: 'Java oder Python, Datenstrukturen, Automaten, SQL.' },
        { code: 'KKS / SCHULE / 02', slug: 'abitur-mathematics-course-in-english', title: 'Abitur Mathematik auf Englisch', blurb: 'Analysis, Geometrie und Stochastik für LK und GK.' },
        { code: 'KKS / SCHULE / 03', slug: 'ib-diploma-computer-science-course', title: 'IB Computer Science', blurb: 'Für internationale Schulen, neue Prüfung ab 2027.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Ablauf',
    h2: 'Wie der KI-Kurs für Schüler abläuft',
    lede: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche.',
    slots: [
      { time: 'Nach der Schule', l: 'Am späten Nachmittag, etwa ab 16:10 Uhr in Deutschland.' },
      { time: 'Sonntag', l: 'Vormittags, mit Zeit für längere Projekte.' },
      { time: 'Einzeln', l: 'Vor Klausuren, Facharbeiten und Abgaben nach Absprache.' }
    ],
    cells: [
      { h3: 'Erst die Idee', p: 'Jede Einheit beginnt mit einer Frage, die ein Modell beantworten soll.' },
      { h3: 'Dann der Code', p: 'Die Lernenden schreiben ihn selbst, der Mentor schaut mit auf den Bildschirm.' },
      { h3: 'Messen statt glauben', p: 'Jedes Modell wird an Daten geprüft, die es vorher nicht gesehen hat.' },
      { h3: 'Englisch, klar gesprochen', p: 'Fachbegriffe wie training data oder accuracy kommen mit Erklärung.' },
      { h3: 'Ohne Pflicht-Konten', p: 'Python und offene Bibliotheken reichen, kein KI-Abo nötig.' },
      { h3: 'Fester Mentor', p: 'Dieselbe Person begleitet Projekt und Lernstand.' }
    ]
  },

  projectsH2: 'Was Lernende bei uns bauen',
  projectsLede: 'Projekte von Jugendlichen aus unseren Kursen in aller Welt. Eine größere Auswahl steht auf <a class="ag-inline-link" href="/student-labs">Student labs</a> (auf Englisch).',
  reviewsLede: 'Stimmen von Eltern und Lernenden aus Google-Rezensionen, unübersetzt im Original.',

  fees: {
    h2: 'Kosten des KI-Kurses für Schüler',
    lede: 'Im Monatsbeitrag sind acht Live-Stunden enthalten. Wir nennen ihn in Euro, gerechnet zum Referenzkurs der Europäischen Zentralbank; abgerechnet wird jedoch in US-Dollar. Ihre Bank tauscht den Betrag um, weshalb die Summe auf dem Auszug leicht schwanken kann.',
    free: ['Kostenlose Probestunde mit einem kleinen Modell', 'Kurze Einschätzung von Vorwissen und Zielen', 'Ohne Kreditkarte'],
    group: ['Fünfzehn bis zwanzig Jugendliche', 'Immer derselbe Mentor', 'Zwei Stunden pro Woche', 'Monatlich zahlbar, monatlich beendbar'],
    one: ['Unterricht allein mit dem Mentor', 'Eigenes Projekt, eigenes Tempo', 'Termine frei vereinbar']
  },

  faq: {
    eyebrow: 'Häufige Fragen',
    h2: 'KI-Kurs für Schüler: häufige Fragen',
    items: [
      { q: 'Findet der Unterricht auf Deutsch statt?', a: 'Nein, nur auf Englisch, und zwar live. Die Mentoren aus Indien sprechen klar und langsam und stellen sich auf Tempo und Aussprache der Lernenden ein. Das ist ein Gewinn: Python, die meisten Bibliotheken und fast alle Fachtexte zu KI sind englisch, und beim BWKI dürfen Projekte auf Englisch eingereicht werden.' },
      { q: 'Ab welcher Klasse lohnt sich der KI-Kurs?', a: 'Ab etwa Klasse 7. Dann reichen Mathematik und Lesen, um das Experiment mit den zwei Modellen auf dieser Seite zu verstehen. Wer in der Oberstufe einsteigt, kommt schneller zu Statistik, neuronalen Netzen und einem eigenen Projekt.' },
      { q: 'Lernt man im Kurs, ChatGPT besser zu benutzen?', a: 'Nur am Rand. Im Mittelpunkt steht, wie solche Systeme intern arbeiten: Daten, Wahrscheinlichkeiten, Training und Test. Wer das versteht, nutzt jeden Chatbot kritischer und erkennt eher, wann eine Antwort erfunden ist.' },
      { q: 'Wie viele Jugendliche nutzen in Deutschland KI?', a: 'Laut JIM-Studie 2025 setzen 91 Prozent der Zwölf- bis 19-Jährigen mindestens eine KI-Anwendung ein, 84 Prozent haben ChatGPT schon verwendet. Von den KI-Nutzenden setzen 74 Prozent KI für Hausaufgaben oder zum Lernen ein. Befragt wurden 1.200 Jugendliche im Juni und Juli 2025.' },
      { q: 'Dürfen Schüler unter 18 Claude oder ChatGPT im Kurs verwenden?', a: 'Claude nicht, denn Anthropic verlangt mindestens 18 Jahre. ChatGPT ist laut OpenAI ab 13 erlaubt, unter 18 aber nur mit Erlaubnis der Eltern; im Kurs ist es nie Pflicht. Unser Standard sind Python und offene Bibliotheken ohne Konto.' },
      { q: 'Braucht man Vorkenntnisse in Python?', a: 'Nein. Wer noch nie programmiert hat, beginnt mit den Grundlagen und schreibt in den ersten Wochen kleine Programme, die Daten zählen und sortieren. Wer schon Python kann, steigt direkt bei den Modellen ein.' },
      { q: 'Kann ich mit dem Kurs am Bundeswettbewerb Künstliche Intelligenz teilnehmen?', a: 'Ja, wenn Sie ein eigenes Projekt mit maschinellem Lernen entwickeln. Der BWKI richtet sich an Schülerinnen und Schüler der Sekundarstufe I und II, allein oder im Team bis zu vier Personen. Abgegeben werden eine Dokumentation, lauffähiger Code und ein Video-Pitch. Die Anmeldung läuft direkt beim Veranstalter.' },
      { q: 'Hilft der Kurs bei Informatik in der Schule?', a: 'Ja, beim Programmieren, bei Datenstrukturen und beim Umgang mit Daten. Noten und Abschlüsse vergibt aber nur die Schule; wir unterrichten begleitend. Für das Informatik-Abitur gibt es zusätzlich unseren eigenen Kurs mit Java und Python.' },
      { q: 'Zu welchen Zeiten kann ich teilnehmen?', a: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche. So entspricht eine Stunde um 17:40 Uhr deutscher Winterzeit 22:10 Uhr beim Mentor in Indien.' },
      { q: 'Was kostet der Kurs, und wie wird bezahlt?', a: 'Den Monatsbeitrag zeigen wir in Euro, umgerechnet zum Referenzkurs der EZB. Abgebucht wird in US-Dollar; Ihre Bank rechnet in Euro um. Die Probestunde ist kostenlos und ohne Kreditkarte buchbar.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Weiterlesen',
    h2: 'Passende Seiten für Jugendliche in Deutschland',
    lede: 'Die meisten davon sind englischsprachig.',
    items: [
      { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and ML classes in Germany', p: 'Maschinelles Lernen mit echten deutschen Messdaten.' },
      { href: '/learn-to-think-not-copy-ai-germany', label: 'Learn to think, not copy AI', p: 'Eigenes Denken vor KI-Antworten, mit Beispiel.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Unterstützung im Schulfach bis zum Abitur.' },
      { href: '/abitur-computer-science-in-english', label: 'Abitur computer science in English', p: 'Das Informatik-Abitur, auf Englisch erklärt.' },
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Alle Angebote für Deutschland auf einen Blick.' },
      { href: '/student-labs', label: 'Student labs', p: 'Fertige Projekte unserer Lernenden.' }
    ]
  },

  start: {
    h2: 'Probestunde vereinbaren',
    lede: 'In der kostenlosen Probestunde baut der Mentor mit Ihnen oder Ihrem Kind die zwei Modelle von dieser Seite nach und zählt gemeinsam, welchem man trauen kann. Danach wissen beide Seiten, wo der Einstieg liegt und welche Gruppe passt.',
    readFirst: 'Hintergrund vorab: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> beschreibt eine typische Live-Stunde, <a class="ag-inline-link" href="/courses">All courses</a> listet sämtliche Lehrpläne; beide Seiten sind auf Englisch.',
    note: 'Live-Unterricht auf Englisch mit Mentoren, die in Indien sitzen. Schneller als per Formular geht es über WhatsApp.',
    formNote: 'Kostenlos und unverbindlich, keine Kreditkarte.'
  },

  footer: {
    cols: [
      { h4: 'KI und Daten', links: [
        { href: '/courses/ai-ml-masterclass-teens', label: 'KI für Jugendliche' },
        { href: '/courses/data-science-course-for-teens-python-data', label: 'Data Science' },
        { href: '/courses/german-informatics-competitions-course-biber-bwinf-bwki', label: 'Wettbewerbe' },
        { href: '/courses', label: 'Alle Kurse' }
      ] },
      { h4: 'Deutschland', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'KI in Deutschland' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/student-labs', label: 'Projekte' }
      ] }
    ],
    bottomRight: 'Sicher ist nicht richtig'
  },

  personalityCss: `
.ag-root.ag-kks .ag-hero h1 { letter-spacing: -0.016em; }
.ag-root.ag-kks .ag-capsule { border-left-width: 3px; border-radius: 0; }
.ag-root.ag-kks .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-kks .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-kks .ag-code-head b { letter-spacing: 0.02em; }
`,

  dossier: {
    curriculumAuthority: 'mpfs JIM-Studie 2025 and press release PM 4/2025; KMK Handlungsempfehlung KI (10.10.2024) and KMK-Kompetenzrahmen KI (16.10.2026); BWKI Teilnahmebedingungen and dates (FACTS.md 208 to 214); GI Informatik-Monitor (FACTS.md 97); Anthropic and Google age pages; Einheiten- und Zeitgesetz; read 2 and 3 November 2026. Example our own.',
    localProject: 'Confidence is not correctness: an original Python experiment on 1000 invented photos (seed 2026) with two models that make the same decisions and are both right 760 times; the honest model claims at least 90 percent certainty on 215 photos and is right on 96 percent of them, the overconfident one claims it on all 1000 and is right on 76 percent. Lesson family: check whether a model\'s stated confidence matches how often it is right (calibration).',
    requiredMentions: ['Modell B: 760 von 1000 richtig', 'davon richtig: 76%', 'Zwei Modelle, gleich oft richtig, verschieden ehrlich', 'Haben ChatGPT schon verwendet (alle Befragten)', 'Sensibilität gegenüber Deepfakes und KI-verstärkter Desinformation entwickeln', 'Schluss für Projektideen 2026', 'Python mit offenen Bibliotheken auf dem eigenen Rechner', 'Sicher ist nicht richtig'],
    sources: [
      { claim: 'JIM-Studie 2025: 1,200 young people aged 12 to 19; ChatGPT 84 percent; at least one AI app 91 percent; motives among AI users.', url: 'https://mpfs.de/app/uploads/2025/11/JIM_2025_PDF_barrierearm.pdf' },
      { claim: '57 percent consider AI-supplied information trustworthy.', url: 'https://mpfs.de/app/uploads/2025/11/PM_JIM-2025.pdf' },
      { claim: 'KMK 2026 competence framework sections 2.1.2, 5.5.1, 6.2.4.', url: 'https://www.kmk.org/fileadmin/Dateien/veroeffentlichungen_beschluesse/2026/2026_10_16-KI-Kompetenzrahmen.pdf' },
      { claim: 'KMK 2024 AI recommendation on judging the quality of AI results.', url: 'https://www.kmk.org/fileadmin/veroeffentlichungen_beschluesse/2024/2024_10_10-Handlungsempfehlung-KI.pdf' },
      { claim: 'BWKI rules and 2026 dates.', url: 'https://www.bw-ki.de/teilnahmebedingungen' },
      { claim: 'Claude 18+.', url: 'https://www.anthropic.com/legal/consumer-terms' },
      { claim: 'Google Account age in Germany 16.', url: 'https://support.google.com/accounts/answer/1350409?hl=de' }
    ],
    rejectedClaims: [
      'Recommending Claude or any 18+ tool to under-18 pupils: refused.',
      'Making ChatGPT a course requirement: refused; optional from 13 with parental permission only.',
      'JIM gender or school-type figures: not used.',
      'BWKI 2027 dates: not published in our sources; the page sends readers to the organiser.',
      'Any affiliation with the KMK, mpfs, BWKI or the Tübingen AI Center: none.',
      'German-language teaching: English only, said plainly.'
    ]
  }
};
