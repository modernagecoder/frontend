// SHIP: market (es district, vacaciones útiles) | secundaria summer: Python and AI or C++ for OPI, 4 to 5 a week | prefix sums: precompute once, count operations
'use strict';
// Vacaciones útiles de programación en San Isidro, Lima (ag- Spanish door, Peru cluster row PE227, P2, hubGroup lima).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted". Fees render in USD from the template only; no soles, no typed figure, no camp length or start date.
// Angle: the San Isidro parent of a secundaria teenager (1° to 5°) who types "vacaciones útiles San Isidro" or "vacaciones
// útiles 2027" and wants the summer to count for something. Spine: what an online summer of programming is for a teen; the
// dates that sit around the summer (end of the 2026 school year, UTEC computing olympiads, university calendars); what the
// secundaria timetable gives (no computing area); Python or C++ for the OPI; one original lesson on counting steps; our own
// suggested summer route; why from home instead of crossing Lima; Peru to India clock conversions.
// Municipality: www.munisanisidro.gob.pe redirects by script to www.msi.gob.pe/portal, which did not connect (curl 000,
// retried once, 2026-11-09); gob.pe search for the institution returned nothing on summer programmes. So the page says
// nothing about municipal programmes in San Isidro.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/vacaciones-utiles-de-programacion-san-isidro-lima/,
// fetched 2026-11-08 by the research run unless noted; every quote string-matched in the raw text):
//  INEI, Censos Nacionales 2025, Indicadores demográficos, Cuadro N° 1 (places.tsv): SAN ISIDRO 73402 (ubigeo 150131);
//    LIMA METROPOLITANA 10141775, Province of Lima, 43 districts; neighbours used in plain text only.
//  RM 501-2025-MINEDU, Tabla 1 (rm501-2025-pdf/page11-checked-by-eye.png, read by eye 2026-11-09): "Del 19 octubre a 18 de
//    diciembre" (cuarto bloque lectivo), "Del 21 al 31 de diciembre" (quinto bloque de gestión), "Del 2 al 13 de marzo"
//    (primer bloque de gestión 2026), "Del 16 marzo al 15 de mayo" (primer bloque lectivo 2026).
//  MINEDU 14 Oct 2026 (n-mat2027): "inició hoy el despacho de 13.3 millones de unidades de materiales educativos para el año
//    escolar 2027"; no 2027 calendar norm on gob.pe (FACTS 28; sibling search saved 2026-11-09 returned total_count 0).
//  UTEC, Olimpiadas Peruanas de Computación home (opi-home/text.txt): "abiertas gratuitamente a todos los estudiantes de
//    secundaria del país"; "Inscripciones : hasta el 18 de marzo del 2026 . Competencia : 11 de Abril (Fase 2 - Final)";
//    OPEIA "Competencia : 19 de marzo del 2026 ( única fecha)"; OPECIA "Competencia : 27 de Abril del 2026".
//  UTEC, Reglamento OPI 2025 (opi-reglamento-2025/text.txt, LaTeX accents): Fase 1 "virtual", "Se podr´a usar C++ o Python";
//    Fase 2 "presencial en la Universidad de Ingenier´ıa y Tecnolog´ıa (UTEC)", "Duraci´on: 5 horas", "Se podr´a usar solo
//    C++"; "Queda prohibido el uso de IA generativa para la resoluci´on de problemas." Paraphrased on the page because of the
//    extraction artefacts.
//  PUCP, Guía del postulante (pucp-guia/text.txt): "DIPLOMA DE BACHILLERATO 2.° Convocatoria INSCRIPCIONES ABIERTAS
//    ENTREVISTAS: Hasta el 28 de enero de 2027".
//  Universidad de Lima, Guía del postulante 2027-1(A) (ulima-guia-20271a/text.txt): "INICIO DE CLASES Lunes 29 de marzo de 2027".
//  CNEB (cneb/text.txt): secundaria JER "Educación para el trabajo 2 2 2 2 2", "Total de horas 35 35 35 35 35"; "Inglés 3 3 3 3
//    3"; "horas pedagógicas (45 minutos)"; competency 28 transversal. No computing area (FACTS 39).
//  MINEDU, Fábrica de Programadores, 24 July 2025 (n-fabrica-prog): "1000 escolares de 4.º y 5.º de secundaria de Lima Norte
//    con formación en programación Python y certificación internacional".
//  INEI, Estadísticas de las TIC en los Hogares, II Trimestre 2026 (inei_tic_iit2026.txt): "en Lima Metropolitana, con un
//    92,4%" (internet use, population 6+); "el 53,3% en Lima Metropolitana" (households with at least one computer); footnote
//    "Lima Metropolitana incluye la Provincia Constitucional del Callao."
//  EF EPI 2025 Peru page (ef_peru.txt): Lima city 555, high band from 550.
//  Time (timezone.tsv): America/Lima UTC-5 all year, no DST since 1994; Asia/Kolkata UTC+5:30; India 10 h 30 min ahead.
// Summer offer (owner 2026-11-10, brief section "Summer offer"): Summer Python and AI (python-complete-masterclass-teens then
//   ai-ml-masterclass-teens or data-science-course-for-teens-python-data) or any catalogue course (C++, competitive
//   programming, DSA, PCEP, Java, web, apps, maths) at 4 to 5 live classes a week, group or one to one, flexible hours;
//   summer pace and fee agreed with the mentor first; first class free; no price typed. Lengths from
//   content/courses/data/*.json meta.duration: Python teens, AI and ML teens, C++ teens 10-12 months (40-48 weeks);
//   competitive programming teens 6 months (24 weeks); PCEP then PCAP 5 months (20 weeks).
// Our own calculations: 2 x 45 = 90 minutes a week of Educación para el trabajo (JER); 35 x 45 = 1,575 minutes a week in all.
//   Ten weeks: 2 a week = 20 classes, 4 a week = 40, 5 a week = 50. Long course 40 to 48 weeks x 2 = 80 to 96 classes;
//   20/96 = 21%, 20/80 = 25% (about a quarter); 40/96 = 42%, 50/80 = 62% (about half). Competitive programming 24 x 2 = 48.
// Our own example (isidro_prefix.py, isidro_prefix_reto.py in the src-pages folder), run with python3 -I, exact output:
//    sum from 0 to 9 = 55 / sum from 2 to 5 = 23 / sum from 4 to 4 = 5 / sum from 6 to 8 = 11 / Naive additions: 18 /
//    Prefix list: [0, 3, 11, 13, 20, 25, 34, 35, 41, 45, 55] / Prefix operations: 14
//    reto (1,000 scores, 1,000 queries over the whole list): Naive additions: 1000000 / Prefix operations: 2000
// Lesson family: prefix sums: pay once to precompute running totals, then answer every range-sum question with one
// subtraction; count the operations, not the seconds. (Changed from a linear-vs-binary search lesson on 9 Nov 2026 because two
// sibling modules already teach binary search.)

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  'scores = [3, 8, 2, 7, 5, 9, 1, 6, 4, 10]',
  'queries = [(0, 9), (2, 5), (4, 4), (6, 8)]',
  '',
  'naive_steps = 0',
  'for left, right in queries:',
  '    total = 0',
  '    for i in range(left, right + 1):',
  '        total = total + scores[i]',
  '        naive_steps = naive_steps + 1',
  "    print('sum from', left, 'to', right, '=', total)",
  "print('Naive additions:', naive_steps)",
  '',
  'prefix = [0]',
  'for value in scores:',
  '    prefix.append(prefix[-1] + value)',
  'prefix_steps = len(scores)',
  'for left, right in queries:',
  '    total = prefix[right + 1] - prefix[left]',
  '    prefix_steps = prefix_steps + 1',
  "print('Prefix list:', prefix)",
  "print('Prefix operations:', prefix_steps)"
].join('\n');

const OUT = [
  'sum from 0 to 9 = 55',
  'sum from 2 to 5 = 23',
  'sum from 4 to 4 = 5',
  'sum from 6 to 8 = 11',
  'Naive additions: 18',
  'Prefix list: [0, 3, 11, 13, 20, 25, 34, 35, 41, 45, 55]',
  'Prefix operations: 14'
].join('\n');

const OUT2 = [
  'Naive additions: 1000000',
  'Prefix operations: 2000'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'lima', label: 'Vacaciones útiles en San Isidro' },
  slug: 'vacaciones-utiles-de-programacion-san-isidro-lima',
  code: 'vais',
  accent: '#384213',
  accentRationale: 'Vacaciones útiles de programación en San Isidro: a deep olive-bark green #384213, the shade of the old olive trees and their trunks in summer shade, kept dark so it reads as ink rather than decoration; contrast 8.71 at its lowest across the three paper tints (alloc.tsv), well above 4.5, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Vacaciones útiles de programación en San Isidro',
  title: 'Vacaciones útiles de programación en San Isidro, Lima',
  description: 'Verano de programación para secundaria en San Isidro: Python e IA, o C++, DSA u otro curso, de 4 a 5 clases en vivo por semana, en inglés, en grupo o individual.',
  ogDescription: 'Un verano intensivo para adolescentes de San Isidro: Python e IA o un curso a elección, 4 a 5 clases por semana, con fechas de la OPI y de universidades a la vista.',
  twitterDescription: 'Secundaria en San Isidro: un verano de Python e IA, o de C++ para la olimpiada, con 4 a 5 clases en vivo por semana y en inglés.',
  pageName: 'Vacaciones útiles de programación en San Isidro',
  webPageDescription: 'Guía para familias de San Isidro, Lima, que buscan unas vacaciones útiles de programación para hijos en secundaria: nuestro verano de Python e IA o de un curso a elección con 4 a 5 clases por semana, población del distrito según el INEI (Censos 2025), fin del año escolar 2026 según la RM 501-2025-MINEDU, fechas de las Olimpiadas Peruanas de Computación de la UTEC y de dos universidades, lo que el plan de estudios de secundaria incluye y no incluye, y una clase de ejemplo escrita por nosotros sobre sumas acumuladas.',
  courseDescription: 'Clases en vivo y en línea de programación para adolescentes de San Isidro y de todo Lima, dictadas solo en inglés: Python, C++, estructuras de datos, programación competitiva e IA, en clase grupal o individual, con 4 a 5 clases por semana durante el verano y a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Vacaciones útiles en San Isidro',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#plan', label: 'Plan de verano' },
    { href: '#fechas', label: 'Fechas' },
    { href: '#olimpiada', label: 'Olimpiada' },
    { href: '#ejemplo', label: 'Ejemplo' },
    { href: '#ruta', label: 'Ruta' }
  ],
  eyebrow: 'San Isidro, Lima &middot; Vacaciones útiles &middot; Secundaria',
  h1: 'Vacaciones útiles de programación en San Isidro',
  lede: 'El verano es el único tramo largo del año en que un escolar de secundaria puede aprender algo exigente sin la presión de los exámenes bimestrales. Nuestro verano lo aprovecha con intensidad: de 4 a 5 clases en vivo por semana, en inglés y desde casa en San Isidro, por el camino de Python e IA o por el curso que su hijo escoja, como C++ para la olimpiada o DSA. Abajo están los dos caminos, cuánto rinde ese ritmo y las fechas reales de olimpiadas y universidades.',
  secondaryCta: { href: '#plan', label: 'Los dos caminos del verano' },
  wa: 'Hola Modern Age Coders, vivimos en San Isidro y buscamos vacaciones útiles de programación para nuestro hijo o hija de secundaria. ¿Podemos reservar una clase gratis?',
  heroNote: 'En vivo desde 2020 &middot; 4.9 en unas 547 reseñas de Google &middot; un mentor que habla inglés claro y sigue el ritmo de su hijo',
  spec: [
    ['Para quién', 'Adolescentes de 1° a 5° de secundaria'],
    ['Caminos', 'Python e IA, o C++, DSA y otros a elección'],
    ['Ritmo de verano', 'De 4 a 5 clases en vivo por semana'],
    ['Formato', 'Grupo de quince a veinte, o uno a uno'],
    ['Idioma', 'Siempre en inglés, en vivo'],
    ['Primera clase', 'Gratis, sin tarjeta']
  ],
  capsuleQ: 'En pocas palabras',
  capsule: 'Para un adolescente de San Isidro, unas vacaciones útiles de programación se hacen desde casa: Modern Age Coders las dicta por videollamada, en vivo y en inglés, con un mentor desde la India que explica sin apuro. El verano va a 4 a 5 clases por semana, por uno de dos caminos: Python e IA, o el curso que su hijo elija, por ejemplo C++ para la olimpiada, DSA, desarrollo web o apps. Usted decide si va en grupo o solo con el mentor, y fija el día y la hora; la clase de prueba no cuesta nada.',

  picks: {
    eyebrow: 'Para empezar este verano',
    h2: 'Por dónde arranca en enero un escolar de secundaria',
    lede: 'Los dos primeros son el camino de Python e IA, en orden; el tercero es la opción a elección que más nos piden quienes miran la olimpiada de informática.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'VAIS / 01', title: 'Python para adolescentes', alt: 'Imagen del curso de Python para adolescentes', note: 'Desde cero, de 13 a 18 años. Variables, bucles, funciones y listas en las primeras semanas, luego archivos y un proyecto propio. Con 4 o 5 clases semanales, el verano cubre más o menos la mitad del curso.' },
      { course: 'ai-ml-masterclass-teens', code: 'VAIS / 02', title: 'IA y machine learning para adolescentes', alt: 'Imagen del curso de inteligencia artificial y machine learning para adolescentes', note: 'La segunda parte del camino de Python e IA: datos, modelos que aprenden y cómo evaluarlos. Útil también para quien mira la olimpiada de IA de la UTEC, sin promesa de resultados.' },
      { course: 'cpp-programming-masterclass-for-teens', code: 'VAIS / 03', title: 'C++ para adolescentes', alt: 'Imagen del curso de C++ para adolescentes', note: 'El lenguaje que exigía la fase final de la Olimpiada Peruana de Informática en 2025. Fundamentos, la biblioteca estándar (STL) y estructuras de datos; un curso largo que el verano deja bien encaminado.' }
    ]
  },

  sections: [
    {
      id: 'plan',
      eyebrow: 'Plan de verano',
      h2: '¿Qué incluye el verano de programación para secundaria en San Isidro?',
      lede: 'Cuatro o cinco clases en vivo por semana, de alrededor de una hora, por uno de dos caminos. Su hijo puede arrancar cualquier semana entre enero y marzo; cuanto antes empiece, más clases suma antes de que vuelva el colegio.',
      body: [
        { kind: 'two',
          leftH3: 'Camino A: Python e IA de verano',
          left: [
            'El camino que proponemos por defecto a un adolescente. Las primeras semanas son de Python puro: leer un problema, escribir funciones, trabajar con listas y archivos. Cuando eso está firme, el estudiante entra en la inteligencia artificial con nuestro curso de IA y machine learning para adolescentes, o en ciencia de datos si le atraen más las tablas y los gráficos.',
            'No usamos en clase herramientas de IA que la empresa que las publica reserva a mayores de edad. La IA llega después del razonamiento propio, no en su lugar.'
          ],
          rightH3: 'Camino B: el curso que su hijo elija',
          right: [
            'Para el adolescente con una meta concreta: C++ y programación competitiva si mira la OPI, DSA (estructuras de datos y algoritmos) si quiere método, la certificación PCEP de Python, Java, desarrollo web full stack, apps para el celular, matemática de olimpiada o cualquier otro curso del catálogo.',
            'El ritmo es el mismo, 4 a 5 clases semanales, y el mentor ordena las semanas alrededor del objetivo que su hijo fijó en la clase gratis.'
          ] },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Ritmo normal frente a ritmo de verano en diez semanas (cuentas nuestras)', head: ['Ritmo', 'Clases en diez semanas', 'Parte de un curso largo (unas 80 a 96 clases)'], rows: [
          ['Año escolar: 2 por semana', '20', 'Cerca de una cuarta parte'],
          ['Verano: 4 por semana', '40', 'Algo menos de la mitad'],
          ['Verano: 5 por semana', '50', 'Más o menos la mitad, o algo más']
        ] },
        { kind: 'source', html: 'Cálculo nuestro con la duración que publica cada curso: Python, IA y machine learning y C++ para adolescentes duran de 10 a 12 meses al ritmo normal, unas 80 a 96 clases. Un curso más corto, como la preparación para el PCEP o un curso de tres meses, puede cerrarse en el verano; programación competitiva, de seis meses (unas 48 clases), queda terminada o muy cerca a 5 por semana. Un curso largo no termina en vacaciones: sigue en marzo a dos clases por semana, con el mismo mentor.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Qué camino encaja según el grado y la meta (orientación nuestra)', head: ['Grado y meta', 'Camino A: Python e IA', 'Camino B: a elección'], rows: [
          ['1° o 2° de secundaria, nunca programó', 'Python para adolescentes desde cero', 'Desarrollo web o apps, si prefiere ver resultados en pantalla'],
          ['3° o 4°, ya hizo algo de código', 'Python y luego IA y machine learning', 'C++ y programación competitiva, de cara a la OPI'],
          ['4° o 5°, piensa en la universidad', 'Ciencia de datos o IA y machine learning', 'DSA, certificación PCEP, Java'],
          ['Cualquier grado, le gustan los números', 'Python con datos', 'Matemática de olimpiada, con problemas nuestros']
        ] },
        { kind: 'source', html: 'Sugerencias de nuestros mentores. El grado no decide solo: en la clase gratis el mentor mira cómo razona su hijo y ajusta la recomendación.' },
        { kind: 'p', mt: true, html: 'Las tarjetas de precios de más abajo corresponden al ritmo del año escolar. El ritmo de verano, cuatro o cinco clases semanales, y su mensualidad se fijan con el mentor antes de empezar; la clase de prueba es gratuita.' }
      ]
    },
    {
      id: 'verano',
      eyebrow: 'Vacaciones útiles en San Isidro',
      h2: '¿En qué consisten unas vacaciones útiles de programación para secundaria?',
      lede: 'Son unas semanas de verano en las que su hijo aprende a programar con un objetivo concreto, en lugar de llenar las tardes con actividades sueltas. En nuestro caso son nuestros cursos de siempre, con el mismo mentor, pero a un ritmo más alto mientras no hay colegio: de 4 a 5 clases semanales en lugar de dos.',
      body: [
        { kind: 'p', html: 'San Isidro tiene 73,402 habitantes (INEI, Censos Nacionales 2025), dentro de una Lima Metropolitana que suma 10,141,775 personas en 43 distritos. Limita con Jesús María, Lince, La Victoria, San Borja, Surquillo, Miraflores y Magdalena del Mar. Es un distrito pequeño en población y muy céntrico, y aun así muchas familias que viven aquí tienen a sus hijos en colegios de otros distritos y conocen bien lo que cuesta sumar otro traslado a la semana.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Un objetivo, no un horario', p: 'Antes de la primera clase acordamos con su hijo qué quiere tener terminado cuando vuelva el colegio: un juego en Python, una base sólida para la olimpiada de informática o un primer modelo de IA. Todo el verano se ordena alrededor de esa meta.' },
          { h3: 'Un mentor que conversa en inglés', p: 'El mentor explica en inglés claro, escribe en pantalla lo que dice y pide al estudiante que explique su código en voz alta. En secundaria eso se convierte rápido en una práctica de inglés técnico que el colegio no suele dar.' },
          { h3: 'Sin moverse de casa', p: 'La clase ocurre en la computadora del estudiante, en su escritorio, con la pantalla compartida. No hay que cruzar Lima a la hora de mayor tránsito ni esperar a que termine otro taller para recogerlo.' }
        ] },
        { kind: 'p', mt: true, html: 'Toda la enseñanza ocurre en inglés, en vivo, sin traducción al castellano, y preferimos decirlo desde el principio: para muchas familias peruanas es justamente la razón de elegirnos, porque su hijo programa y practica el idioma en la misma hora. Si quiere ver cómo trabajamos con familias de colegios bilingües, nuestra <a class="ag-inline-link" href="/english-medium-coding-classes-lima">guía para colegios bilingües de Lima</a> lo cuenta con más detalle.' }
      ]
    },
    {
      id: 'fechas',
      eyebrow: 'Calendario',
      h2: '¿Cuándo empiezan y terminan las vacaciones escolares en Lima?',
      lede: 'Para los colegios del país, el año 2026 dejó de tener clases el 18 de diciembre de 2026, según la norma técnica del MINEDU. El calendario del año escolar 2027 todavía no estaba publicado cuando revisamos el portal del Estado, el 9 de noviembre de 2026. Mientras tanto, estas son las fechas verificadas que rodean el verano de un escolar de secundaria.',
      body: [
        { kind: 'table', numCols: [], caption: 'Fechas alrededor del verano 2027 para un escolar de secundaria en Lima (fuentes primarias)', head: ['Fecha', 'Qué ocurre', 'Quién lo publica'], rows: [
          ['18 de diciembre de 2026', 'Último día con clases del año 2026 (cierra el cuarto bloque lectivo)', 'MINEDU, RM 501-2025-MINEDU, Tabla 1'],
          ['21 al 31 de diciembre de 2026', 'Cierre administrativo: los docentes trabajan, los alumnos ya no asisten', 'MINEDU, RM 501-2025-MINEDU, Tabla 1'],
          ['Hasta el 28 de enero de 2027', 'Entrevistas de la 2.° convocatoria de admisión por Diploma de Bachillerato', 'PUCP, Guía del postulante'],
          ['29 de marzo de 2027', 'Inicio de clases del ciclo 2027-1', 'Universidad de Lima, Guía del postulante 2027-1(A)'],
          ['Hasta el 18 de marzo de 2026 (edición 2026)', 'Cierre de inscripciones de la Olimpiada Peruana de Informática (OPI) y de la de Inteligencia Artificial (OPEIA)', 'UTEC, Olimpiadas Peruanas de Computación'],
          ['19 de marzo de 2026 (edición 2026)', 'OPEIA, en fecha única', 'UTEC'],
          ['11 de abril de 2026 (edición 2026)', 'Final de la OPI (Fase 2)', 'UTEC'],
          ['27 de abril de 2026 (edición 2026)', 'Olimpiada Peruana de Ciberseguridad (OPECIA), en fecha única', 'UTEC']
        ] },
        { kind: 'source', html: 'Fuentes: MINEDU, RM 501-2025-MINEDU, Tabla 1 (comprobada a ojo en la imagen del PDF firmado); PUCP, admision.pucp.edu.pe/guia-del-postulante; Universidad de Lima, Guía del postulante Admisión 2027-1(A); UTEC, opi.utec.edu.pe. Consultadas el 8 y el 9 de noviembre de 2026. Las fechas de la UTEC son de la edición 2026: la página todavía mostraba esas fechas cuando la leímos, y las de 2027 las fijará la UTEC.' },
        { kind: 'two', mt: true,
          leftH3: 'Lo que la tabla dice al estudiante',
          left: [
            'Entre el último día lectivo de 2026 y el inicio de las clases universitarias de marzo de 2027 hay un verano completo. En la edición 2026, las inscripciones de la OPI y de la OPEIA cerraron el 18 de marzo, apenas iniciado el año escolar, que según la misma RM 501-2025-MINEDU empezó con clases el 16 de marzo de 2026.',
            'Si ese patrón se repite en 2027, cosa que solo la UTEC puede confirmar, quien quiera competir tendrá que llegar preparado desde el verano. En marzo ya no queda tiempo para empezar de cero.'
          ],
          rightH3: 'Lo que no sabemos todavía',
          right: [
            'El 14 de octubre de 2026 el MINEDU informó que había empezado a despachar 13.3 millones de unidades de materiales educativos para el año escolar 2027. La norma con las fechas de 2027 no estaba en gob.pe cuando la buscamos.',
            'Por eso no anunciamos una fecha de cierre del verano: su hijo empieza la semana que usted quiera, con 4 a 5 clases semanales, y pasa a dos por semana cuando el MINEDU publique el calendario y vuelva el colegio. Cada colegio, además, puede organizar su año en bimestres, trimestres u otra forma.'
          ] }
      ]
    },
    {
      id: 'colegio',
      eyebrow: 'Lo que da el colegio',
      h2: '¿Se enseña programación en secundaria en el Perú?',
      lede: 'No hay un curso de programación en el horario oficial. En la jornada escolar regular de secundaria, el Currículo Nacional (CNEB) asigna 35 horas pedagógicas por semana, y en esa tabla no figura un área de computación.',
      body: [
        { kind: 'two',
          leftH3: 'El área que más se acerca',
          left: [
            'El área más cercana es Educación para el trabajo, con 2 horas pedagógicas por semana en cada grado de la jornada regular, y su competencia trata sobre gestionar proyectos de emprendimiento económico o social, no sobre escribir código. Si cada hora pedagógica dura 45 minutos, son 90 minutos semanales (cuenta nuestra).',
            'La competencia digital del CNEB, la número 28, sobre entornos virtuales, es transversal: se trabaja dentro de otras áreas y no tiene horas propias. Lo que un colegio haga con programación depende de su propio plan y de sus horas de libre disponibilidad.'
          ],
          rightH3: 'Lo que el Estado prueba fuera del aula',
          right: [
            'El propio MINEDU reconoce la necesidad con pilotos. En julio de 2025 lanzó la Fábrica de Programadores, que, según anunció, en su primera etapa beneficiaría a 1000 escolares de 4.° y 5.° de secundaria de Lima Norte con formación en Python y certificación internacional.',
            'Es una buena noticia y es pequeña frente a todo Lima. Un estudiante de San Isidro que quiera programar con método, hoy, lo hace fuera del horario escolar. El verano es el momento con menos competencia por su tiempo.'
          ] },
        { kind: 'p', mt: true, html: 'Nuestras clases no reemplazan nada del colegio ni otorgan notas del sistema educativo peruano. No estamos vinculados al MINEDU, a la UTEC, a ninguna universidad, a la municipalidad ni a ningún colegio. Cuando su hijo concluye un curso, recibe un certificado de culminación emitido por nosotros y por nadie más.' }
      ]
    },
    {
      id: 'olimpiada',
      eyebrow: 'Olimpiada de informática',
      h2: '¿Python o C++ para la Olimpiada Peruana de Informática?',
      lede: 'Los dos, en ese orden. Según el reglamento de la OPI 2025 publicado por la UTEC, la primera fase virtual aceptaba C++ o Python, pero la final presencial en la UTEC, de cinco horas, solo permitía C++.',
      body: [
        { kind: 'p', html: 'Las Olimpiadas Peruanas de Computación las organiza la Universidad de Ingeniería y Tecnología (UTEC) y son gratuitas para todos los estudiantes de secundaria del país. Además de la OPI, la UTEC organiza la OPEIA, de inteligencia artificial, y la OPECIA, de ciberseguridad. El mismo reglamento de 2025 prohíbe usar IA generativa para resolver los problemas: quien la usa queda eliminado. Es una regla que nos parece coherente con lo que enseñamos. No reproducimos problemas de la olimpiada; para ver los oficiales, la página de la UTEC es opi.utec.edu.pe.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Un camino posible de Python a C++ en un verano (nuestra propuesta)', head: ['Tramo', 'Lenguaje', 'Qué practica su hijo'], rows: [
          ['Primero', 'Python', 'Leer un problema, escribir la entrada y la salida exactas, bucles y condiciones'],
          ['Segundo', 'Python', 'Listas y sumas acumuladas; contar cuántas operaciones hace cada idea, como en el ejemplo de abajo'],
          ['Tercero', 'C++', 'La misma lógica con tipos de datos, vectores y la biblioteca estándar'],
          ['Cuarto', 'C++', 'Problemas con límite de tiempo, casos extremos y depuración sin ayuda de IA']
        ] },
        { kind: 'source', html: 'Fuente de las reglas: UTEC, Reglamento de la Olimpiada Peruana de Informática 2025 (opi.utec.edu.pe/Reglamento_OPI_2025.pdf), leído el 8 de noviembre de 2026; las reglas de 2027 las publicará la UTEC. La columna de la derecha es nuestra.' },
        { kind: 'p', mt: true, html: 'Empezar por Python no es perder tiempo. Es el lenguaje en el que un adolescente entiende más rápido qué hace un algoritmo, porque casi no hay ceremonia alrededor del código. Cuando la idea está clara, pasarla a C++ es traducir, no aprender de nuevo. Para quien no piensa competir, Python solo ya da para todo un verano de proyectos. Y conviene decirlo: la inscripción en la OPI la hace el propio estudiante con las reglas de la UTEC; nosotros preparamos, no inscribimos ni prometemos resultados.' }
      ]
    },
    {
      id: 'ejemplo',
      tint: 'tint',
      eyebrow: 'Una clase de ejemplo',
      h2: '¿Qué son las sumas acumuladas y por qué conviene aprenderlas en verano?',
      lede: 'Son una lista que guarda, en cada posición, el total de todo lo anterior. Calcularla cuesta un recorrido, pero después cualquier suma de un tramo sale con una sola resta. La enseñamos temprano porque obliga a contar cuántas operaciones hace un programa, la pregunta de fondo de toda la programación competitiva. El ejercicio es nuestro.',
      body: [
        { kind: 'code', label: 'Sumar tramos de una lista, de dos maneras', lang: 'Python', code: PY, note: 'Son los puntajes de diez problemas de práctica, inventados por nosotros, y cuatro preguntas del tipo "¿cuántos puntos hay del problema 2 al 5?". Antes de ejecutar, el mentor pregunta en inglés: "How many additions will the first method need?"' },
        { kind: 'code', label: 'Lo que imprime el programa', lang: 'Salida', code: OUT, note: 'Esto es lo que devolvió Python 3 cuando corrimos el archivo, sin retoques. Las dos maneras dan las mismas sumas; la primera hizo 18 sumas y la segunda 14 operaciones, contando las diez que costó armar la lista acumulada.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Predecir.</strong> El estudiante calcula a mano cuántas sumas hará el primer método: 10 para el tramo completo, 4, 1 y 3 para los otros. Escribe 18 antes de ejecutar.',
          '<strong>Leer la lista acumulada.</strong> En <code>[0, 3, 11, 13, ...]</code> cada número es el total hasta ese problema. El 23 del tramo 2 a 5 sale de 34 menos 11, una sola resta.',
          '<strong>Desconfiar del 14.</strong> Con cuatro preguntas la ventaja parece pequeña: 18 contra 14. El mentor pregunta qué pasará con mil preguntas sobre mil puntajes.',
          '<strong>Hacer el reto.</strong> Con mil puntajes y mil preguntas sobre la lista completa, el primer método hace un millón de sumas; el segundo, dos mil operaciones. Es el reto que el estudiante escribe solo.',
          '<strong>Explicar la diferencia.</strong> El estudiante cierra con una frase en inglés: "I pay once to build the running totals, and then every question costs one subtraction."'
        ] },
        { kind: 'code', mt: true, label: 'La salida del reto: mil puntajes y mil preguntas', lang: 'Salida', code: OUT2, note: 'Resultado literal del reto, corrido en nuestra máquina con Python 3. Un millón de sumas contra dos mil operaciones, para obtener exactamente las mismas respuestas.' },
        { kind: 'p', mt: true, html: 'La lección no es memorizar un truco. Es contar las operaciones antes de confiar en el reloj: con diez datos cualquier método parece instantáneo, y la diferencia solo aparece el día en que los datos crecen, que es justo lo que ocurre en un problema de olimpiada con límite de tiempo. Un estudiante que aprende a hacerse esa pregunta en el verano la lleva a cualquier curso de matemática o ciencia del año siguiente. Y es algo que una IA que entrega el código terminado no le enseña, porque la pregunta la tiene que hacer él.' }
      ]
    },
    {
      id: 'ruta',
      eyebrow: 'Ruta de verano',
      h2: '¿Cómo puede ser un verano de programación con nosotros?',
      lede: 'Le proponemos una ruta por proyectos, no por fechas. Con 4 a 5 clases por semana, si su hijo empieza en enero el recorrido suele llegar hasta el final; si empieza más tarde, avanza lo que alcance y continúa en abril con el mismo mentor.',
      body: [
        { kind: 'table', numCols: [], caption: 'Ruta sugerida para un verano de programación en secundaria (nuestra propuesta, no un campamento)', head: ['Etapa', 'Proyecto que se entrega', 'Para quién'], rows: [
          ['1. Primeros programas', 'Un juego de adivinar números con pistas de "más alto" y "más bajo"', 'Quien empieza de cero'],
          ['2. Datos y listas', 'Una planilla de puntajes que responde sumas por tramo, como el ejemplo de esta página', 'Quien ya hizo la etapa 1 o programó en el colegio'],
          ['3. Algoritmos', 'Diez problemas cortos resueltos y explicados en inglés, con el número de operaciones de cada solución', 'Quien piensa en la OPI o en programación competitiva'],
          ['4. Proyecto propio', 'Una app, una web o un modelo de IA sencillo, presentado al final en cinco minutos', 'Quien quiere algo para mostrar en su colegio o en una postulación']
        ] },
        { kind: 'source', html: 'Ruta y proyectos: nuestros. Encaja en cualquiera de los dos caminos del verano, en grupo o individual, y no es un paquete cerrado: se paga por mes, con el ritmo acordado con el mentor.' },
        { kind: 'two', mt: true,
          leftH3: 'En clase grupal',
          left: [
            'Su hijo comparte la clase con otros quince a veinte adolescentes de edad y nivel parecidos, de varios países, con el mismo mentor durante todo el curso. Es la opción que conviene a quien disfruta comparar soluciones y escuchar cómo piensan otros.',
            'El grupo tiene su propio ritmo; si su hijo va más rápido, el mentor le da retos adicionales en vez de hacerlo esperar.'
          ],
          rightH3: 'En clases individuales',
          right: [
            'Para quien prepara la olimpiada o necesita avanzar en un tema concreto, las clases uno a uno permiten que el mentor diseñe el verano alrededor de los errores de su hijo, no de un temario común.',
            'También sirven si la familia viaja en enero o febrero: se reprograma con el mentor, y la clase se toma desde donde estén, con una laptop y una conexión estable.'
          ] }
      ]
    },
    {
      id: 'casa',
      eyebrow: 'Desde casa',
      h2: '¿Por qué hacer las vacaciones útiles en línea si vivimos en San Isidro?',
      lede: 'Porque el tiempo que no se pasa en un auto o en el transporte público se pasa programando. En vivo y desde casa, una clase de una hora ocupa una hora, no la tarde entera.',
      body: [
        { kind: 'p', html: 'No vamos a darle cifras de tránsito: cada familia de Lima conoce las suyas. Lo que sí sabemos es que en un verano típico los padres reparten a los hijos entre talleres, piscina, playa y visitas, y que cada actividad presencial suma un ida y vuelta. Una clase en línea no compite con esos planes; se acomoda entre ellos, a la hora que usted elija, y no depende de quién está libre para llevar y recoger.' },
        { kind: 'two', mt: true,
          leftH3: 'Lo que dice el INEI sobre Lima conectada',
          left: [
            'El INEI, en su boletín TIC de abril a junio de 2026, registra que el 92,4 % de las personas de 6 años a más en Lima Metropolitana usó internet, la cifra más alta del país. Para ese cálculo, el INEI cuenta al Callao como parte de Lima Metropolitana.',
            'Allí mismo figura que el 53,3 % de los hogares de Lima Metropolitana disponía de al menos una computadora. Para programar se necesita una: un celular no basta.'
          ],
          rightH3: 'Lo que necesita su hijo',
          right: [
            'Una laptop o una computadora de escritorio, con cámara, micrófono y audífonos. Python y C++ se instalan gratis en la primera clase, con ayuda del mentor.',
            'Un lugar tranquilo y la misma hora cada semana. A los adolescentes les cuesta menos sostener un hábito cuando la clase cae siempre en el mismo momento del día, aunque usted pueda cambiarla cuando lo necesite.'
          ] },
        { kind: 'p', mt: true, html: 'El inglés tampoco es un obstáculo para un escolar de Lima. En el EF EPI 2025, la medición anual de inglés de EF Education First, Lima obtiene 555 puntos, dentro del nivel alto, que EF fija desde 550. El índice mide adultos, no escolares, pero indica que en casa suele haber alguien que entiende la clase si su hijo necesita ayuda en las primeras semanas.' }
      ]
    },
    {
      id: 'horario',
      eyebrow: 'Hora de Perú y hora de la India',
      h2: '¿A qué hora serían las clases desde San Isidro?',
      lede: 'Usted fija la hora. Como el equipo de mentores está en la India, la tabla convierte algunas horas peruanas al reloj indio, solo como referencia.',
      body: [
        { kind: 'table', numCols: [], caption: 'Equivalencias entre la hora de Perú y la hora de la India (ejemplos de conversión, no un horario)', head: ['En Perú', 'En la India', 'Observación'], rows: [
          ['8:30 a. m.', '7:00 p. m.', 'Misma fecha; cómoda en enero y febrero'],
          ['11:30 a. m.', '10:00 p. m.', 'Misma fecha'],
          ['3:30 p. m.', '2:00 a. m.', 'Fecha siguiente en la India'],
          ['6:30 p. m.', '5:00 a. m.', 'Fecha siguiente en la India'],
          ['7:30 p. m.', '6:00 a. m.', 'Fecha siguiente en la India']
        ] },
        { kind: 'source', html: 'El reloj peruano marca UTC-5 los doce meses y no adelanta ni atrasa la hora desde 1994 (tzdata, America/Lima, y la hora oficial que difunde el INACAL). La India se mantiene en UTC+5:30. La ventaja de la India es entonces siempre la misma: 10 horas y 30 minutos, sea enero o julio.' },
        { kind: 'p', mt: true, html: 'Durante el verano muchas familias de San Isidro eligen la mañana, cuando el adolescente todavía no salió de casa y el mentor está en su tarde. En abril, con el colegio de vuelta, la clase suele pasar a otra hora sin cambiar de mentor.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progreso',
    h2: '¿Cómo saber si el verano rindió?',
    lede: 'Cinco señales propias que el mentor revisa con su hijo y le cuenta a usted.',
    table: { caption: 'Cinco señales de avance en programación para secundaria (nuestras)', head: ['Señal', 'Cuándo suele aparecer', 'Su hijo puede'], rows: [
      ['1. Lee el problema completo', 'Primeras semanas', 'separar la entrada, la salida y las condiciones antes de escribir una línea'],
      ['2. Predice', 'Al terminar la etapa 1', 'decir qué imprimirá su programa antes de ejecutarlo'],
      ['3. Cuenta operaciones', 'Etapa 2', 'comparar dos soluciones por cuántas operaciones hacen, no por cuánto tardan'],
      ['4. Depura solo', 'Etapa 3', 'encontrar su propio error con pruebas pequeñas, sin pedir el código a nadie'],
      ['5. Explica en inglés', 'Etapa 4', 'presentar su proyecto en cinco minutos y responder preguntas']
    ] },
    left: { h3: 'Para madres y padres', ps: [
      'Pregúntele a su hijo cuántas operaciones hace su programa. Si sabe responder, el verano está funcionando.',
      'Recibirá una nota breve del mentor después de las clases con lo practicado y lo que sigue. Puede escribirnos por WhatsApp, en castellano, cuando quiera.'
    ] },
    right: { h3: 'Para el estudiante', ps: [
      'Antes de pedir ayuda, pruebe su código con el caso más pequeño posible y con el más grande.',
      'Si una IA le da la respuesta, no aprendió a encontrarla. En la olimpiada de la UTEC esa ayuda ni siquiera está permitida.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más para escolares de secundaria',
    lede: 'Cualquiera sirve como camino B: en vivo, en inglés, en grupo o a solas, con 4 a 5 clases por semana en el verano y dos cuando vuelve el colegio.',
    bands: [
      { num: 'I', h3: 'Algoritmos y certificación', sub: 'Para quien quiere método', courses: [
        { code: 'VAIS / ALG / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Resolución de problemas y estructuras de datos', blurb: 'Lógica, pilas, colas, árboles y grafos, contados paso a paso.' },
        { code: 'VAIS / ALG / 02', slug: 'pcep-pcap-python-certification-course', title: 'Certificación PCEP y PCAP de Python', blurb: 'Preparación para los exámenes de Python Institute, el mismo PCEP del piloto del MINEDU.' },
        { code: 'VAIS / ALG / 03', slug: 'java-programming-masterclass-for-teens', title: 'Java para adolescentes', blurb: 'Programación orientada a objetos desde cero, con proyectos de consola y gráficos.' }
      ] },
      { num: 'II', h3: 'Datos e IA', sub: 'Para quien quiere construir', courses: [
        { code: 'VAIS / IA / 01', slug: 'competitive-programming-for-teens-course', title: 'Programación competitiva', blurb: 'Seis meses de problemas con límite de tiempo, para quien ya programa.' },
        { code: 'VAIS / IA / 02', slug: 'data-science-course-for-teens-python-data', title: 'Ciencia de datos', blurb: 'Tablas, gráficos y un primer modelo con datos públicos.' },
        { code: 'VAIS / IA / 03', slug: 'hackathon-prep-for-teens-coding-ai-build-innovate-win-course', title: 'Preparación para hackatones', blurb: 'Doce semanas para idear, construir y presentar en equipo, de 13 a 17 años.' }
      ] },
      { num: 'III', h3: 'Web y matemática', sub: 'Para completar el perfil', courses: [
        { code: 'VAIS / WEB / 01', slug: 'full-stack-web-development-teens-masterclass', title: 'Desarrollo web completo', blurb: 'React y Node.js hasta publicar una aplicación propia.' },
        { code: 'VAIS / WEB / 02', slug: 'git-github-version-control-course-for-teens', title: 'Git y GitHub', blurb: 'Guardar versiones y mostrar el trabajo como lo hacen los equipos reales.' },
        { code: 'VAIS / MAT / 01', slug: 'olympiad-competition-mathematics-mastery', title: 'Matemática de olimpiada', blurb: 'Razonamiento y demostración con problemas originales, en inglés.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo se organizan las clases en vivo?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Mañanas de verano', l: 'Antes de la playa o de los talleres, con la cabeza fresca.' },
      { time: 'Tardes de abril', l: 'Cuando vuelve el colegio, sin cambiar de mentor.' },
      { time: 'Uno a uno', l: 'El día y la hora que usted fije, y se mueven si viajan.' }
    ],
    cells: [
      { h3: 'Mentor estable', p: 'La misma persona durante el curso, que conoce los errores típicos de su hijo.' },
      { h3: 'Inglés con paciencia', p: 'Frases claras, código en pantalla y tiempo para responder.' },
      { h3: 'Código propio', p: 'El estudiante escribe cada línea; el mentor pregunta antes de corregir.' },
      { h3: 'Cuatro o cinco por semana', p: 'Ritmo de verano, con un entregable al cerrar cada etapa.' },
      { h3: 'Nota a la familia', p: 'Qué se practicó y cuál es el siguiente paso, por escrito.' },
      { h3: 'Dos formatos', p: 'Grupo de quince a veinte adolescentes, o clases individuales.' }
    ]
  },

  projectsH2: 'Proyectos de nuestros estudiantes',
  projectsLede: 'Así terminan los proyectos de quienes empiezan como su hijo; la colección completa está en <a class="ag-inline-link" href="/student-labs">Student labs</a>, en inglés.',
  reviewsLede: 'Lo que familias y alumnos dejaron escrito en Google, sin editar y en el inglés original.',

  fees: {
    h2: 'Precios para familias de San Isidro',
    lede: 'Estas mensualidades son las del año escolar, con ocho clases al mes, y figuran en dólares estadounidenses; se cobran con tarjeta y el banco emisor hace el cambio a soles. En el verano su hijo toma de 4 a 5 clases por semana, así que el número exacto y la mensualidad que le corresponde se cierran con el mentor antes de arrancar. La clase de prueba no se paga.',
    free: ['Una clase gratis con un mentor', 'Un reto corto para ver por dónde empezar', 'Sin tarjeta ni compromiso'],
    group: ['De quince a veinte adolescentes de nivel parecido', 'El mismo mentor en todo el curso', 'Dos clases por semana en el año, 4 o 5 en verano según lo acordado', 'Pago mes a mes, sin permanencia'],
    one: ['Solo su hijo y el mentor', 'El temario que él necesita, incluida la olimpiada', 'El día y la hora que usted decida']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Vacaciones útiles de programación en San Isidro: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Se dictan solamente en inglés, en vivo por videollamada, y eso juega a favor de su hijo: programa y, de paso, se acostumbra al inglés técnico que usan los programadores. El mentor va despacio y repite cuando hace falta. Lima aparece con 555 puntos, en la banda alta, en el EF EPI 2025.' },
      { q: '¿Cuántas clases por semana tiene el verano?', a: 'Entre 4 y 5 en vivo, cada una de alrededor de una hora. Es más del doble del ritmo del año escolar, que es de dos semanales, y por eso el verano rinde tanto.' },
      { q: '¿Cuánto dura el programa de verano y se termina el curso?', a: 'Lo que dure el descanso desde la semana en que empiece. Según nuestra cuenta, diez semanas a 4 o 5 clases suman de 40 a 50 clases: un curso corto como la preparación para el PCEP se puede cerrar, pero uno de 10 a 12 meses, como Python o C++ para adolescentes, llega más o menos a la mitad y continúa en marzo. No prometemos terminar un curso largo en vacaciones.' },
      { q: '¿Cuándo terminan las clases del colegio y cuándo empieza el año 2027?', a: 'Según la RM 501-2025-MINEDU, el último bloque lectivo de 2026 fue del 19 de octubre al 18 de diciembre de 2026. La norma del año escolar 2027 no estaba publicada en gob.pe al 9 de noviembre de 2026; cuando salga, las clases se acomodan a ella.' },
      { q: '¿Sirve para la Olimpiada Peruana de Informática?', a: 'Sirve para prepararse. Según el reglamento de 2025 de la UTEC, la fase virtual aceptaba Python o C++ y la final presencial solo C++, sin IA generativa. Enseñamos las dos cosas con problemas propios. La inscripción la hace el estudiante con la UTEC y no prometemos resultados.' },
      { q: '¿Desde qué edad son las vacaciones útiles de programación?', a: 'Esta página está pensada para adolescentes de 1° a 5° de secundaria. Para los hermanos menores, en primaria, hay otra ruta con bloques y Python sencillo, explicada en nuestra página dedicada a esa etapa.' },
      { q: '¿Mi hijo necesita saber programar antes?', a: 'No. El curso de Python para adolescentes empieza de cero. Quien ya programó en el colegio pasa directamente a datos y algoritmos; el mentor lo decide en la clase gratis según lo que ve.' },
      { q: '¿En qué horario se dictan las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Con una diferencia fija de 10 horas y 30 minutos, a las 8:30 a. m. de Lima les corresponden las 7:00 p. m. en la India.' },
            { q: '¿Cuánto cuesta el verano y cómo se paga?', a: 'La mensualidad publicada es la del ritmo normal de ocho clases. La de verano depende de si su hijo toma 4 o 5 clases por semana y de si va en grupo o solo, y se acuerda con el mentor antes de empezar. Se paga con tarjeta en dólares estadounidenses y el banco hace la conversión; la clase de prueba no pide datos de pago.' },
      { q: '¿Están vinculados a la municipalidad de San Isidro o a algún colegio?', a: 'No. Somos una academia en línea y no tenemos convenio con la municipalidad, con el MINEDU, con la UTEC ni con ningún colegio o universidad. Nuestras clases no dan notas escolares; al final de un curso entregamos nuestro propio certificado de finalización.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más páginas',
    h2: 'Para seguir leyendo',
    lede: 'Páginas relacionadas para familias de Lima con hijos en secundaria.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Clases de programación e IA en Perú', p: 'La guía general para todo el país, con el sistema escolar en una tabla.' },
      { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños en inglés', p: 'Si también tiene un hijo en primaria, por dónde empieza él.' },
      { href: '/english-medium-coding-classes-lima', label: 'English-medium coding classes in Lima', p: 'Pensada para quienes estudian en colegios IB, Cambridge o bilingües (texto en inglés).' },
      { href: '/coding-roadmap', label: 'Coding roadmap', p: 'El recorrido completo de lenguajes, de los primeros pasos a la universidad.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Lo que pasa minuto a minuto en una de nuestras clases.' },
      { href: '/courses', label: 'All courses', p: 'Todos los cursos, de primaria a profesionales.' }
    ]
  },

  start: {
    h2: 'Reserve una clase gratis antes del verano',
    lede: 'Durante la clase de prueba, el mentor habla con su hijo usando un inglés simple, le propone un problema breve y observa cómo lo aborda. Con eso le decimos qué camino le conviene, Python e IA o un curso a elección como C++, en qué etapa de la ruta empezar, si van cuatro o cinco clases por semana y si le sirve más el grupo o las clases individuales. Ahí se acuerda la mensualidad de verano.',
    readFirst: 'Si prefiere leer primero: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> describe nuestras clases y <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">la guía para Perú</a> resume el sistema escolar.',
    note: 'Los mentores enseñan desde la India, siempre en inglés y en tiempo real. Por WhatsApp, en cambio, puede escribirnos en castellano.',
    formNote: 'Gratis, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Para secundaria', links: [
        { href: '/courses/python-complete-masterclass-teens', label: 'Python para adolescentes' },
        { href: '/courses/ai-ml-masterclass-teens', label: 'IA y machine learning' },
        { href: '/courses/cpp-programming-masterclass-for-teens', label: 'C++ para adolescentes' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Perú', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Guía para Perú' },
        { href: '/english-medium-coding-classes-lima', label: 'Clases en inglés en Lima' },
        { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' }
      ] }
    ],
    bottomRight: 'Contar operaciones antes que segundos'
  },

  personalityCss: `
.ag-root.ag-vais .ag-hero h1 { max-width: 19ch; letter-spacing: -0.015em; }
.ag-root.ag-vais .ag-capsule { border-left-width: 6px; }
.ag-root.ag-vais .ag-table td:first-child { font-weight: 600; white-space: normal; }
.ag-root.ag-vais .ag-code-note { font-style: italic; }
.ag-root.ag-vais .ag-steps li { padding-bottom: 6px; }
`,

  dossier: {
    curriculumAuthority: 'MINEDU: RM 501-2025-MINEDU Tabla 1 (read by eye), CNEB secundaria JER table and competency 28, Fábrica de Programadores note (24 July 2025), materials note (14 October 2026); INEI Censos Nacionales 2025 (district population) and Boletín TIC II trimestre 2026; UTEC OPI home and Reglamento OPI 2025; PUCP Guía del postulante; Universidad de Lima Guía 2027-1(A); EF EPI 2025; tzdata and INACAL. Read 8 and 9 November 2026. The two summer tracks, the pace and track tables, the summer route, progress signals, the OPI path and the example are ours.',
    localProject: 'Prefix sums in Python for a San Isidro secundaria student: ten made-up practice scores and four range questions; adding each range one by one prints Naive additions: 18, while building the running totals once prints Prefix list: [0, 3, 11, 13, 20, 25, 34, 35, 41, 45, 55] and Prefix operations: 14; the reto with 1,000 scores and 1,000 questions prints Naive additions: 1000000 against Prefix operations: 2000. Lesson family: prefix sums, precompute once and answer each range with one subtraction; count operations, not seconds.',
    requiredMentions: ['Naive additions: 18', 'Prefix list: [0, 3, 11, 13, 20, 25, 34, 35, 41, 45, 55]', 'Naive additions: 1000000', 'San Isidro tiene 73,402 habitantes', 'el 92,4 % de las personas de 6 años a más en Lima Metropolitana usó internet', 'el 53,3 % de los hogares de Lima Metropolitana disponía de al menos una computadora', 'Hasta el 28 de enero de 2027', 'Contar operaciones antes que segundos', 'Ritmo normal frente a ritmo de verano en diez semanas', 'la final presencial en la UTEC, de cinco horas, solo permitía C++'],
    sources: [
      { claim: 'San Isidro 73,402 and Lima Metropolitana 10,141,775 (Censos Nacionales 2025, población total).', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: '2026 calendar blocks: last teaching block 19 October to 18 December 2026; management block 21 to 31 December 2026; classes from 16 March 2026.', url: 'https://cdn.www.gob.pe/uploads/document/file/8968298/7380466-rm-n-501-2025-minedu.pdf' },
      { claim: 'Materials for the 2027 school year dispatched from 14 October 2026.', url: 'https://www.gob.pe/institucion/minedu/noticias/1456889-minedu-inicia-distribucion-de-materiales-educativos-para-el-ano-escolar-2027' },
      { claim: 'OPI, OPEIA and OPECIA 2026 dates; free for all secondary students.', url: 'https://opi.utec.edu.pe/' },
      { claim: 'OPI 2025 rules: Fase 1 virtual with C++ or Python, Fase 2 in person at UTEC, 5 hours, C++ only, generative AI banned.', url: 'https://opi.utec.edu.pe/Reglamento_OPI_2025.pdf' },
      { claim: 'PUCP Diploma de Bachillerato 2nd call interviews until 28 January 2027.', url: 'https://admision.pucp.edu.pe/guia-del-postulante' },
      { claim: 'Universidad de Lima 2027-1 classes start Monday 29 March 2027.', url: 'https://www.ulima.edu.pe/sites/default/files/2026-11/admision_20271a_guia_del_postulante_v10.pdf' },
      { claim: 'Secundaria JER weekly hours, Educación para el trabajo 2 hours, 35 in total; competency 28 transversal.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Fábrica de Programadores: 1000 students of 4° and 5° secundaria in Lima Norte, Python with international certification.', url: 'https://www.gob.pe/institucion/minedu/noticias/1214050-minedu-impulsa-iniciativa-fabrica-de-programadores-para-formar-a-escolares-con-certificacion-internacional-en-programacion' },
      { claim: 'Lima Metropolitana internet use 92.4% (6+) and 53.3% of households with a computer, II trimestre 2026; Lima Metropolitana includes Callao.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'EF EPI 2025: Lima 555, high band from 550.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 with no DST since 1994; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Municipal summer programmes in San Isidro: not stated; msi.gob.pe did not connect (retried once, 9 November 2026) and gob.pe had no San Isidro summer notes, so the page says nothing about them.',
      'A summer price, a camp end date or a long course finished in the summer: refused; the 4 to 5 a week pace and its fee are agreed with the mentor, and the pace table is our arithmetic.',
      'OPI 2027 dates and rules: not published; the table labels the UTEC dates as the 2026 edition and the rules as 2025.',
      'PUCP Evaluación del Talento date (21 de febrero): left out because the line on the PUCP page carries no year.',
      'Traffic or commute figures for Lima: refused; none sourced.',
      'Spanish-language teaching, MINEDU, UTEC, university or municipal endorsement, official certificate: refused; the page says classes are in English and that we are not connected to any of them.',
      'Soles prices or any typed fee: refused; fees render from the template in USD.'
    ]
  }
};
