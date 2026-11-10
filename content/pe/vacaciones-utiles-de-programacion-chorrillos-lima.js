// SHIP: district (vacaciones útiles) | Chorrillos teens: Python e IA or DSA, web, apps, 4-5 classes a week | a stack (append and pop) that checks whether brackets are balanced
'use strict';
// Vacaciones útiles de programación en Chorrillos (ag- Spanish district door, Peru cluster row PE207, P2, hubGroup lima).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md
// section "Summer offer (owner 2026-11-10)", reworked 10 November 2026: carril 1 = Summer Python and AI for teens
// (python-complete-masterclass-teens, then ai-ml-masterclass-teens or data-science from 14); carril 2 = any catalogue course
// (DSA, full-stack web, React Native apps, Java, C++, Unity games, vibe coding, PCEP, Orange, maths); both live, online and
// in English at 4 to 5 classes a week, group or one to one, flexible hours; the fee for that pace is agreed with the mentor,
// first class free, no summer price typed. All verified facts, sources and the bracket lesson are kept. Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08:
// timing flexible, any time. Formal "usted"; fees only through the template (USD anchors); no soles, no typed figure.
// Angle: this page is written for the adolescents of Chorrillos (1° to 5° de secundaria) and their parents, not for small
// children (the San Juan de Lurigancho page covers primaria). Spine: what the Municipalidad de Chorrillos itself published
// for summer 2026 (sport, aquatic and cultural workshops, in person); how many teenagers the 2025 census counts in the
// district; the secundaria timetable has no computing area (CNEB Tabla N.° 8) while MINEDU's own pilot chose Python; four
// summer challenges of our own; one original Python lesson (a bracket checker built on a stack); clock conversions for late risers.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/vacaciones-utiles-de-programacion-chorrillos-lima/,
// fetched 8 and 9 November 2026 with curl -sL -A "Mozilla/5.0"; quotes grepped in the raw files):
//  Municipalidad Distrital de Chorrillos on gob.pe (its own institutional pages), all dated "6 de enero de 2026":
//    1356104 "¡verano 2026 se vive en movimiento!": "Talleres Deportivos Verano 2026, una propuesta pensada para que niños,
//    niñas y jóvenes disfruten del deporte"; "Inicio: 05 de enero"; "Vacantes limitadas".
//    1356092 "Talleres deportivos acuáticos verano 2026": "Un espacio donde niñas, niños y adolescentes fortalecen su cuerpo,
//    su mente y su espíritu"; "Inicio: 07 de enero"; "Diversión, aprendizaje y aventura frente al mar".
//    1356109 "El verano se vive con arte, alegría y talento": "Talleres Culturales"; "Danza, teatro, expresión artística";
//    start "05 de enero" (in bold Unicode letters in the raw page).
//    All three: registration through appweb.munichorrillos.gob.pe; "Los pagos son de manera presencial en las siguientes
//    plataformas al ciudadano: Municipalidad de Chorrillos, Casa de la Juventud, Mega Plaza Express Cedros, Real Plaza
//    Guardia Civil y Plaza Lima Sur" (bold Unicode in the raw, read as text). No fee figure is printed on the page.
//  INEI Censos Nacionales 2025, Indicadores demográficos, Lima Metropolitana (tabulados/27, ind_27.xlsx) CUADRO N°1:
//    "DISTRITO CHORRILLOS | 377080 | ... | 359715 | ... | 17365"; CUADRO N°3: "DISTRITO CHORRILLOS | 359715 | 18922 | 30077 |
//    32037 | 67239 | 88865 | 67252 | 55323" (0-5, 6-11, 12-17, 18-29, 30-44, 45-59, 60+). Chorrillos is 11th of the 43
//    districts of Lima Metropolitana by total population (our sort of Cuadro N°1; places.tsv rank 11).
//  CNEB (minedu.gob.pe/curriculo), "TABLA N.° 8: ORGANIZACIÓN Y DISTRIBUCIÓN DEL TIEMPO SEMANAL DE EDUCACIÓN SECUNDARIA – II.EE.
//    CON JORNADA ESCOLAR REGULAR": "Matemática 4 4 4 4 4 Comunicación 4 4 4 4 4 Inglés 3 3 3 3 3 Arte y cultura 3 3 3 3 3
//    Ciencias sociales 3 3 3 3 3 Desarrollo personal, ciudadanía y cívica 3 3 3 3 3 Educación física 3 3 3 3 3 Educación
//    religiosa 2 2 2 2 2 Ciencia y tecnología 4 4 4 4 4 Educación para el trabajo 2 2 2 2 2 Tutoría y orientación educativa
//    2 2 2 2 2 Horas de libre disponibilidad 2 2 2 2 2 Total de horas 35 35 35 35 35"; "Diseña y construye soluciones
//    tecnológicas para resolver problemas" (Ciencia y tecnología competency, FACTS 38).
//  MINEDU press note, 24 July 2025 (n-fabrica-prog): "beneficiará a 1000 escolares de 4.º y 5.º de secundaria de Lima Norte
//    con formación en programación Python y certificación internacional"; "Los participantes que concluyan ambas etapas
//    podrán rendir el examen PCEP, con validez global"; "en alianza con Cisco Networking Academy". Political names in the
//    note are left out on purpose.
//  RM 501-2025-MINEDU, Tabla 1 (page 7, checked by eye): last teaching block "Del 19 octubre a 18 de diciembre"; "Quinto
//    bloque de semanas de gestión ... Del 21 al 31 de diciembre". gob.pe search on 9 November 2026: no 2027 norm.
//  EF EPI 2025: Lima 555 (high band from 550). Time: America/Lima UTC-5 all year; India UTC+5:30 (10 h 30 min ahead).
// Our own calculations (python3 -I): 32037 / 359715 = 8.9 % and 30077 / 359715 = 8.4 % of the censused population;
//    35 hours x 45 minutes = 1,575 minutes (26 h 15 min) a week of secundaria with no computing area; 2 x 4 = 8 classes a
//    month in a group (template). Summer (ours): 4 to 5 a week, so each challenge (about 4 classes) takes about a week.
//    Course sizes from our own course pages (content/courses/data, "duration"), classes = weeks x 2, summer = 10 weeks x 4
//    to 5 = 40 to 50: vibe coding teens 12 weeks = 24 classes (24/5 = 4.8, 24/4 = 6 weeks); Orange 24 classes (same); PCEP
//    half 20 weeks = 40 classes (8 to 10 weeks); Python teens 40-48 weeks = 80-96 (40/80 = 50 %, 50/96 = 52 %); DSA teens
//    44-52 weeks = 88-104 (38 % to 57 %); full stack teens 48-56 weeks = 96-112 (36 % to 52 %).
// Our own example (parentesis.py in the src-pages folder), run with python3 -I, exact output:
//    True (2 + 3) * [4 - 1] / True {[()]} / False (] / False ((1 + 2) / True print(len([1, 2]))
//    (Changed on 9 Nov 2026 from a ranking-with-ties lesson because the San Borja sibling uses that family.)
// Neighbouring districts in plain text only: Barranco, Santiago de Surco, San Juan de Miraflores, Villa El Salvador.
// Lesson family: a stack; push on open, pop and match on close, and an empty stack at the end means balanced.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  "pairs = {')': '(', ']': '[', '}': '{'}",
  '',
  'def balanced(text):',
  '    stack = []',
  '    for symbol in text:',
  "        if symbol in '([{':",
  '            stack.append(symbol)',
  '        elif symbol in pairs:',
  '            if not stack or stack.pop() != pairs[symbol]:',
  '                return False',
  '    return len(stack) == 0',
  '',
  "tests = ['(2 + 3) * [4 - 1]', '{[()]}', '(]', '((1 + 2)', 'print(len([1, 2]))']",
  'for t in tests:',
  '    print(balanced(t), t)'
].join('\n');

const OUT = [
  'True (2 + 3) * [4 - 1]',
  'True {[()]}',
  'False (]',
  'False ((1 + 2)',
  'True print(len([1, 2]))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'lima', label: 'Vacaciones útiles en Chorrillos' },
  slug: 'vacaciones-utiles-de-programacion-chorrillos-lima',
  code: 'vupc',
  accent: '#225C13',
  accentRationale: 'Chorrillos: a deep cliff-scrub green #225C13, the colour of the planted slopes of the Morro Solar above the bay, allocated in alloc.tsv (contrast 6.53 on the paper #FBF8F2) and checked above 4.5 on every paper tint by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Vacaciones útiles de programación en Chorrillos',
  title: 'Vacaciones útiles de programación en Chorrillos para secundaria',
  description: 'Verano de programación para secundaria en Chorrillos: Python e IA, o algoritmos, web o apps, de 4 a 5 clases por semana, en vivo, en línea y en inglés.',
  ogDescription: 'Verano intensivo para secundaria en Chorrillos: Python e IA o el curso que elijan, cuatro o cinco clases por semana, cuánto avanza cada curso y un revisor de paréntesis en Python.',
  twitterDescription: 'Chorrillos, secundaria: Python e IA, DSA, web o apps en verano, de 4 a 5 clases por semana, en vivo y en inglés.',
  pageName: 'Vacaciones útiles de programación en Chorrillos',
  webPageDescription: 'Guía para adolescentes de secundaria de Chorrillos y sus familias sobre unas vacaciones útiles de programación: los talleres de verano 2026 que anunció la Municipalidad de Chorrillos, la población adolescente del distrito según los Censos Nacionales 2025 del INEI, el plan de estudios de secundaria del CNEB, el piloto de Python del MINEDU, los dos carriles de verano (Python e IA o un curso a elección) a cuatro o cinco clases por semana, cuánto avanza cada curso en diez semanas, un plan de retos propio y un ejercicio de Python escrito por nosotros.',
  courseDescription: 'Verano intensivo de programación para adolescentes de 1° a 5° de secundaria en Chorrillos, en vivo, en línea y solo en inglés: Python e IA, o algoritmos, web full stack, apps, Java o C++, de 4 a 5 clases por semana, en grupo o individual y a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Vacaciones útiles, Chorrillos',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#carriles', label: 'Dos carriles' },
    { href: '#verano-municipal', label: 'Verano en el distrito' },
    { href: '#secundaria', label: 'Lo que falta' },
    { href: '#retos', label: 'Cuatro retos' },
    { href: '#pila', label: 'Ejercicio' }
  ],
  eyebrow: 'Lima &middot; Chorrillos &middot; Secundaria en verano',
  h1: 'Vacaciones útiles de programación en Chorrillos, para chicos de secundaria',
  lede: 'Entre la playa, el deporte y las reuniones con amigos, a un adolescente de Chorrillos le sobran horas en enero y febrero. Si quiere invertir varias de ellas en aprender a programar en serio, aquí tiene un verano intensivo pensado para secundaria: Python e IA o el curso que él mismo escoja, cuatro o cinco clases por semana desde casa, en inglés y con un mentor.',
  secondaryCta: { href: '#carriles', label: 'Ver los dos carriles de verano' },
  wa: 'Hola Modern Age Coders, escribo desde Chorrillos. Mi hijo o hija está en secundaria y quiere aprender a programar estas vacaciones. ¿Podemos reservar una clase gratis?',
  heroNote: 'Clases en vivo desde 2020 &middot; más de 10,000 alumnos en todo el mundo &middot; código real, explicado en inglés, sin copiar respuestas',
  spec: [
    ['Edades', 'Adolescentes de 12 a 17 años, de 1° a 5° de secundaria'],
    ['Lenguajes', 'Python primero; después JavaScript, Java o C# para juegos'],
    ['Desde dónde', 'Su casa en Chorrillos, por videollamada'],
    ['Modalidad', 'Grupo de quince a veinte adolescentes, o clases individuales'],
    ['Ritmo de verano', 'De 4 a 5 clases por semana, desde la semana que el estudiante elija'],
    ['Clase de prueba', 'Sin costo y sin tarjeta']
  ],
  capsuleQ: 'La respuesta corta',
  capsule: 'Sí. Un adolescente de Chorrillos puede hacer de sus vacaciones un verano intensivo de programación desde casa, por uno de dos carriles. El principal es Python e IA: Python bien aprendido y después inteligencia artificial o ciencia de datos. El otro es el curso que el propio chico escoja, como algoritmos (DSA), desarrollo web full stack o apps. En Modern Age Coders las clases son en vivo, en línea y en inglés, de 4 a 5 clases por semana, solo o en grupo, a la hora que él prefiera. El precio de ese ritmo se pacta con el mentor; la primera clase no se paga.',

  picks: {
    eyebrow: 'Por dónde empezar',
    h2: '¿Qué curso de programación conviene a un chico de secundaria en verano?',
    lede: 'Casi siempre Python, que es el carril 1. Para quien ya tiene una meta, dos cursos del carril 2 que piden muchos adolescentes: algoritmos y desarrollo web completo.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'VUPC / 01', title: 'Carril 1: Python, de cero a proyectos', alt: 'Imagen del curso de Python para adolescentes', note: 'De 13 a 18 años. Variables, listas, funciones y archivos, con ejercicios como el revisor de paréntesis de esta página; después, la puerta a la IA. Un verano intensivo de diez semanas deja hecha cerca de la mitad.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'VUPC / 02', title: 'Carril 2: algoritmos y estructuras de datos', alt: 'Imagen del curso de resolución de problemas y estructuras de datos para adolescentes', note: 'Para el que disfruta los acertijos y piensa en ingeniería u olimpiadas: pilas, colas, búsquedas y ordenamientos, siempre con la pregunta de cuánto tarda cada solución.' },
      { course: 'full-stack-web-development-teens-masterclass', code: 'VUPC / 03', title: 'Carril 2: web completa', alt: 'Imagen del curso de desarrollo web full stack para adolescentes', note: 'La parte que se ve y la que guarda los datos, con React y Node. Es el curso más largo de los tres: el verano deja hecho entre un tercio y la mitad.' }
    ]
  },

  sections: [
    {
      id: 'carriles',
      eyebrow: 'Verano intensivo para secundaria',
      h2: '¿Qué puede estudiar un adolescente de Chorrillos estas vacaciones?',
      lede: 'Dos carriles, los dos en vivo y en inglés, y en ambos el ritmo sube a cuatro o cinco clases por semana: más del doble que durante el colegio. Esa frecuencia es lo que hace que un verano se note en marzo.',
      body: [
        { kind: 'two',
          leftH3: 'Carril 1: Python e IA',
          left: [
            'Primero <a class="ag-inline-link" href="/courses/python-complete-masterclass-teens">Python para adolescentes</a>, completo y sin saltos: variables, listas, funciones, archivos y la pila del ejercicio de esta página. Con esa base, el estudiante sigue con IA y aprendizaje automático o, si ya cumplió 14, con ciencia de datos.',
            'Python es también el lenguaje que escogió el piloto del MINEDU que se describe más abajo; Modern Age Coders no participa en él. En clase solo usamos herramientas de IA permitidas para menores de 18 años.'
          ],
          rightH3: 'Carril 2: el curso que él escoja',
          right: [
            'Algoritmos y estructuras de datos (DSA) para quien piensa en olimpiadas o en ingeniería; desarrollo web full stack con React y Node; apps con React Native; Java, C++, videojuegos con Unity, vibe coding, preparación del PCEP o matemáticas.',
            'Aquí la decisión es del adolescente. Si el curso que quiere está por encima de su nivel, el mentor se lo dice en la clase de prueba y le propone el paso previo, sin rodeos.'
          ] },
        { kind: 'table', mt: true, numCols: [2], caption: 'Cuánto avanza cada curso en un verano de diez semanas a 4 o 5 clases semanales (cálculo nuestro)', head: ['Curso de ejemplo', 'Duración en el año escolar, a 2 clases por semana', 'Clases aproximadas', 'En el verano intensivo'], rows: [
          ['Vibe coding para adolescentes', '12 semanas', '24', 'Se completa en unas 5 a 6 semanas'],
          ['Minería de datos con Orange', '12 semanas', '24', 'Se completa en unas 5 a 6 semanas'],
          ['Tramo PCEP del curso PCEP y PCAP', '20 semanas', '40', 'Se completa en 8 a 10 semanas'],
          ['Python para adolescentes', '40 a 48 semanas', '80 a 96', 'Cerca de la mitad; sigue en marzo'],
          ['Algoritmos y estructuras de datos', '44 a 52 semanas', '88 a 104', 'Cerca de la mitad; sigue en marzo'],
          ['Web full stack', '48 a 56 semanas', '96 a 112', 'Entre un tercio y la mitad; sigue en marzo']
        ] },
        { kind: 'source', html: 'Duraciones tomadas de nuestras propias páginas de curso; las clases son semanas por dos y el avance de verano compara esas cifras con 40 a 50 clases (diez semanas por cuatro o cinco). Cálculo nuestro, no un calendario: ningún curso largo se termina en un verano y no se lo prometemos a nadie. El examen PCEP lo organiza Python Institute, aparte, y no prometemos nota.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Qué carril va con cada grado de secundaria (orientación nuestra)', head: ['Grado', 'Carril 1', 'Carril 2, ideas'], rows: [
          ['1° y 2° de secundaria, 12 a 14 años', 'Python para adolescentes desde los 13; a los 12, el curso infantil de Python e IA', 'Vibe coding, JavaScript para la web, videojuegos'],
          ['3° de secundaria, 14 a 15 años', 'Python y, con la base lista, ciencia de datos', 'Apps con React Native, Java, Unity'],
          ['4° y 5° de secundaria, 15 a 17 años', 'Python a fondo y, después, el curso de IA y aprendizaje automático', 'DSA, web full stack, PCEP, C++']
        ] },
        { kind: 'p', mt: true, html: 'El precio del ritmo de verano no figura en esta página. Antes de la primera clase intensiva, el mentor le dice a la familia cuánto cuestan cuatro o cinco sesiones semanales y la familia decide; como referencia, más abajo se ve la mensualidad normal, que corresponde a ocho clases. La clase de prueba es gratis en cualquiera de los dos carriles.' }
      ]
    },
    {
      id: 'verano-municipal',
      eyebrow: 'Verano en el distrito',
      h2: '¿Qué talleres de verano ofrece la Municipalidad de Chorrillos?',
      lede: 'Para el verano de 2026, la municipalidad anunció en sus páginas de gob.pe tres líneas de talleres presenciales: deportivos, deportivos acuáticos y culturales, todas publicadas el 6 de enero de 2026 y abiertas a niños, niñas, jóvenes o adolescentes según el taller.',
      body: [
        { kind: 'table', numCols: [], caption: 'Talleres de verano 2026 anunciados por la Municipalidad Distrital de Chorrillos', head: ['Línea de talleres', 'Inicio anunciado', 'A quién se dirige, según la municipalidad'], rows: [
          ['Talleres Deportivos Verano 2026', '5 de enero de 2026', 'Niños, niñas y jóvenes; "vacantes limitadas"'],
          ['Talleres deportivos acuáticos verano 2026', '7 de enero de 2026', 'Niñas, niños y adolescentes, "frente al mar"'],
          ['Talleres Culturales (danza, teatro, expresión artística)', '5 de enero de 2026', 'Los más pequeños de la casa']
        ] },
        { kind: 'source', html: 'Fuente: Municipalidad Distrital de Chorrillos, tres notas en gob.pe del 6 de enero de 2026: "¡verano 2026 se vive en movimiento!", "Talleres deportivos acuáticos verano 2026" y "El verano se vive con arte, alegría y talento", descargadas por nosotros el 9 de noviembre de 2026. Las tres indican inscripción por el sitio web de la municipalidad y pagos presenciales en la Municipalidad de Chorrillos, la Casa de la Juventud, Mega Plaza Express Cedros, Real Plaza Guardia Civil y Plaza Lima Sur. Ninguna publica montos, y aquí tampoco los ponemos.' },
        { kind: 'p', mt: true, html: 'Hasta el 9 de noviembre de 2026 no encontramos en esas páginas una convocatoria para el verano de 2027. Si la municipalidad repite el esquema, lo anunciará a inicios de enero; conviene revisar sus canales oficiales en esa fecha. Modern Age Coders no tiene relación alguna con la municipalidad ni con sus talleres: los mencionamos porque son lo primero que busca una familia chorrillana cuando escribe "vacaciones útiles" en el buscador.' },
        { kind: 'two', mt: true,
          leftH3: 'Mañana de mar, tarde de código',
          left: [
            'Los talleres del municipio son de cuerpo y escenario: deporte en la arena o en el agua, danza y teatro. Una clase de programación en línea no ocupa ese espacio; se acomoda en las horas en que el sol ya bajó o antes de salir.',
            'Muchos adolescentes combinan las dos cosas sin problema. Lo único que pedimos es que la hora de clase sea fija durante el verano, para que el hábito se forme.'
          ],
          rightH3: 'Lo que la programación añade',
          right: [
            'Ninguna de las tres líneas de talleres anunciadas para 2026 incluye programación. Es una habilidad que un chico de secundaria difícilmente encuentra en su colegio, como verá en la sección siguiente.',
            'En un verano bien aprovechado, un adolescente que nunca escribió código puede terminar un programa propio y entender cada línea. No es poco para tres meses sin colegio.'
          ] }
      ]
    },
    {
      id: 'adolescentes',
      eyebrow: 'El distrito en el censo',
      h2: '¿Cuántos adolescentes viven en Chorrillos según el censo 2025?',
      lede: 'El INEI contó 32,037 chicos y chicas de 12 a 17 años entre los 359,715 habitantes censados de Chorrillos en los Censos Nacionales 2025, alrededor del 8,9 % de la población censada del distrito (cálculo nuestro).',
      body: [
        { kind: 'two',
          leftH3: 'Las cifras del distrito',
          left: [
            'Con la población omitida incluida, Chorrillos suma 377,080 habitantes según el INEI: el undécimo distrito más poblado de los 43 de Lima Metropolitana, de acuerdo con nuestro orden de las cifras publicadas.',
            'Entre los censados hay también 30,077 niños de 6 a 11 años, que en dos o tres veranos serán los adolescentes de secundaria. El censo omitió a 17,365 personas, que no figuran en los grupos por edad.'
          ],
          rightH3: 'Lo que no dicen las cifras',
          right: [
            'Un censo cuenta personas y edades. No dice qué le interesa a cada adolescente ni cómo vive cada familia, y en esta página no hacemos ninguna suposición sobre eso.',
            'Lo que sí dejan ver es que, en verano, decenas de miles de chicos y chicas de Chorrillos tienen al mismo tiempo las mismas semanas libres. Una clase en línea, a la hora que cada uno elige, no depende de conseguir cupo en un local.'
          ] },
        { kind: 'source', mt: true, html: 'Fuente: INEI, Censos Nacionales 2025, indicadores demográficos de Lima Metropolitana (cuadros 1 y 3, con límites vigentes al 15 de julio de 2026), descargados por nosotros el 8 de noviembre de 2026. Los porcentajes y el puesto entre los distritos son cálculos nuestros sobre esas cifras.' }
      ]
    },
    {
      id: 'secundaria',
      eyebrow: 'Lo que falta en el horario',
      h2: '¿Se enseña programación en secundaria en el Perú?',
      lede: 'No como área propia. La tabla oficial de horas de secundaria con jornada regular reparte 35 horas pedagógicas a la semana entre doce filas, y ninguna es computación ni programación.',
      body: [
        { kind: 'table', numCols: [1, 2, 3, 4, 5], caption: 'Horas semanales de secundaria con Jornada Escolar Regular, por grado (CNEB, Tabla N.° 8)', head: ['Área curricular', '1°', '2°', '3°', '4°', '5°'], rows: [
          ['Matemática', '4', '4', '4', '4', '4'],
          ['Comunicación', '4', '4', '4', '4', '4'],
          ['Inglés', '3', '3', '3', '3', '3'],
          ['Ciencia y tecnología', '4', '4', '4', '4', '4'],
          ['Ciencias sociales', '3', '3', '3', '3', '3'],
          ['Desarrollo personal, ciudadanía y cívica', '3', '3', '3', '3', '3'],
          ['Arte y cultura', '3', '3', '3', '3', '3'],
          ['Educación física', '3', '3', '3', '3', '3'],
          ['Educación religiosa', '2', '2', '2', '2', '2'],
          ['Educación para el trabajo', '2', '2', '2', '2', '2'],
          ['Tutoría y orientación educativa', '2', '2', '2', '2', '2'],
          ['Horas de libre disponibilidad', '2', '2', '2', '2', '2'],
          ['Total de horas', '35', '35', '35', '35', '35']
        ] },
        { kind: 'source', html: 'Fuente: MINEDU, Currículo Nacional de la Educación Básica, "TABLA N.° 8: Organización y distribución del tiempo semanal de Educación Secundaria, II.EE. con Jornada Escolar Regular", en minedu.gob.pe/curriculo, consultado el 8 de noviembre de 2026. Los colegios con Jornada Escolar Completa tienen otra tabla, de 45 horas, que tampoco incluye un área de computación. Cada colegio organiza su horario dentro de este marco.' },
        { kind: 'p', mt: true, html: 'La tecnología aparece, eso sí, como competencia dentro de Ciencia y tecnología ("Diseña y construye soluciones tecnológicas para resolver problemas") y en las horas de libre disponibilidad, que algunos colegios usan para talleres. Depende de cada institución. Por eso hay adolescentes que terminan 5° de secundaria habiendo programado bastante y otros que nunca abrieron un editor de código.' },
        { kind: 'p', html: 'El propio Ministerio de Educación eligió Python cuando quiso probar la programación en secundaria. Según su nota del 24 de julio de 2025, el piloto Fábrica de Programadores beneficiaría "a 1000 escolares de 4.º y 5.º de secundaria de Lima Norte con formación en programación Python y certificación internacional", en alianza con Cisco Networking Academy, y quienes completaran sus dos etapas podrían rendir el examen PCEP. Chorrillos queda en Lima Sur y no forma parte de ese piloto; nosotros tampoco estamos vinculados a él. Lo citamos porque confirma que Python es una buena primera elección para un chico de secundaria.' },
        { kind: 'p', html: 'Para un adolescente que se pregunta qué carrera seguir, un verano programando sirve también para probar. Si le gusta resolver problemas con código, lo sabrá en pocas semanas; si no, habrá perdido poco y aprendido a pensar de una forma más ordenada. En nuestras clases nadie le da la respuesta hecha: el mentor pregunta, el estudiante prueba, se equivoca y corrige.' }
      ]
    },
    {
      id: 'retos',
      eyebrow: 'Nuestro plan para el verano',
      h2: '¿Qué puede construir un adolescente en unas vacaciones de programación?',
      lede: 'Proponemos cuatro retos que se encadenan, cada uno con algo terminado al final. Es un plan nuestro, no un curso con fechas: el estudiante empieza la semana que quiera y avanza a su ritmo.',
      body: [
        { kind: 'table', numCols: [0], caption: 'Cuatro retos de verano para secundaria (plan propio)', head: ['Reto', 'Qué aprende', 'Qué tiene al final'], rows: [
          ['1', 'Variables, listas y bucles; leer datos que escribe el usuario', 'Un registro de sus propias horas de práctica de un deporte o un instrumento'],
          ['2', 'Listas usadas como pila: <code>append</code> y <code>pop</code>', 'Un revisor que detecta paréntesis mal cerrados, como el ejercicio de abajo'],
          ['3', 'Funciones y archivos CSV', 'Un programa que guarda y vuelve a leer sus datos sin perderlos'],
          ['4', 'Diseño de un proyecto propio', 'Un juego, un quiz o una herramienta que resuelve algo de su vida diaria']
        ] },
        { kind: 'source', html: 'Plan nuestro para el arranque del carril 1. A cuatro o cinco clases por semana, cada reto suele tomar alrededor de una semana (estimación nuestra); en clases individuales el ritmo lo marca el estudiante. Terminados los cuatro, el resto del verano sigue el curso elegido, y en marzo se puede continuar a dos clases por semana o parar.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Una clase de prueba.</strong> El mentor le pide al adolescente que lea un programa corto en voz alta y diga qué cree que hace. Con eso sabe por qué reto empezar.',
          '<strong>Escoger carril, formato y ritmo.</strong> Python e IA o un curso a elección; grupo con chicos de su edad o uno a uno; cuatro o cinco clases por semana en un horario que no choque con la playa ni con los talleres del distrito.',
          '<strong>Un reto a la vez.</strong> Cada reto tiene una meta clara y un pequeño ejercicio entre clases que se resuelve pensando, no copiando de internet.',
          '<strong>Mostrar el resultado.</strong> Al cerrar cada reto, el estudiante presenta en inglés lo que construyó y responde dos o tres preguntas del mentor.',
          '<strong>Decidir en marzo.</strong> Continuar con el colegio, apuntar a la certificación PCEP en un curso aparte o tomarse un descanso.'
        ] },
        { kind: 'p', mt: true, html: 'Si en casa hay también un hermano menor de primaria, nuestra guía de <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">programación para niños en inglés</a> explica por dónde empiezan los más chicos. Y para una vista de todo lo que ofrecemos en el país, está la página <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">Coding and AI classes in Peru</a>, en inglés.' }
      ]
    },
    {
      id: 'pila',
      tint: 'tint',
      eyebrow: 'Un ejercicio del reto 2',
      h2: '¿Cómo sabe un programa si los paréntesis están bien cerrados?',
      lede: 'Con una pila, una de las estructuras de datos más simples y más útiles. Este ejercicio es nuestro y está pensado para secundaria: el programa lee un texto símbolo por símbolo y avisa si cada paréntesis, corchete o llave que se abre tiene su pareja correcta al cerrarse.',
      body: [
        { kind: 'code', label: 'Un revisor de paréntesis en Python', lang: 'Python', code: PY, note: 'Antes de ejecutar, el mentor señala la tercera prueba y pregunta en inglés: "Both symbols are brackets. Why should this one fail?"' },
        { kind: 'code', label: 'Salida del programa', lang: 'Salida', code: OUT, note: 'Copiamos la salida tal como la imprimió Python 3 al correr el archivo. La última prueba es una línea de Python real: el revisor puede revisar código.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Apilar al abrir.</strong> Cada vez que aparece <code>(</code>, <code>[</code> o <code>{</code>, el programa lo guarda encima de la pila con <code>append</code>, como quien apila platos.',
          '<strong>Desapilar al cerrar.</strong> Cuando aparece un símbolo de cierre, <code>pop</code> saca el último que se abrió. Si no es su pareja, el texto está mal: por eso <code>(]</code> devuelve False.',
          '<strong>Revisar lo que sobra.</strong> En <code>((1 + 2)</code> todos los cierres encajan, pero al final queda un paréntesis abierto en la pila. La última línea, <code>len(stack) == 0</code>, es la que lo detecta.',
          '<strong>Probar casos propios.</strong> El reto es predecir qué devuelve el programa con <code>)(</code> y con un texto vacío, y luego comprobarlo. Uno de los dos sorprende a casi todos.',
          '<strong>Llevarlo a lo suyo.</strong> El estudiante copia una fórmula de su cuaderno de Matemática con corchetes y llaves, la pasa por el revisor y explica en inglés dónde estaba el error, si lo había.'
        ] },
        { kind: 'p', mt: true, html: 'Lo que se aprende aquí va más allá de Python. El editor que avisa que falta un paréntesis, la calculadora que se niega a operar una expresión mal escrita y muchas herramientas de programación usan esta misma idea. Una herramienta de IA puede escribir el revisor en segundos; entender por qué funciona y encontrar el caso que lo rompe sigue siendo trabajo del estudiante.' }
      ]
    },
    {
      id: 'casa',
      eyebrow: 'Sin trasladarse',
      h2: '¿Por qué tomar las clases en línea en lugar de ir a una academia?',
      lede: 'Porque en verano el tiempo del adolescente vale más en el teclado que en el transporte. Desde Chorrillos, una academia presencial en otro distrito implica ir y volver varias veces por semana; en línea, la clase empieza en el escritorio de su cuarto.',
      body: [
        { kind: 'p', html: 'Chorrillos limita con Barranco, Santiago de Surco, San Juan de Miraflores y Villa El Salvador, además del mar. No le daremos cifras de tráfico que no podamos verificar; usted ya sabe lo que significa cruzar Lima en enero. Lo que sí podemos asegurar es que una clase en línea no depende de la hora punta ni del clima.' },
        { kind: 'two', mt: true,
          leftH3: 'Equipo mínimo',
          left: [
            'Una laptop o computadora de escritorio, cámara, micrófono y audífonos. Python y los editores que usamos son gratuitos y se instalan en la primera sesión.',
            'Un celular sirve para conversar con el mentor por WhatsApp, pero no para programar con comodidad.'
          ],
          rightH3: 'Autonomía del adolescente',
          right: [
            'A esta edad el estudiante maneja su propia agenda. Le recomendamos que la familia acuerde con él la hora de clase y que esa hora se respete como si fuera un entrenamiento.',
            'Los padres reciben un resumen breve de cada etapa. No hace falta que ustedes sepan programar para seguir el avance.'
          ] },
        { kind: 'p', mt: true, html: 'Sobre el idioma: las clases son en inglés porque el código está escrito en inglés y porque es la lengua de casi toda la documentación técnica. El índice EF EPI 2025 coloca a Lima en el nivel alto de dominio del inglés, con 555 puntos, entre adultos que rinden la prueba de EF. Para un adolescente de secundaria, hablar de su código en inglés cuatro o cinco veces por semana es práctica que el colegio, con tres horas de Inglés a la semana en jornada regular, difícilmente puede darle.' }
      ]
    },
    {
      id: 'reloj',
      eyebrow: 'Horarios',
      h2: '¿A qué hora pueden ser las clases si mi hijo se acuesta tarde en vacaciones?',
      lede: 'A la que le funcione a él. Los mentores están en la India, que va 10 horas y 30 minutos por delante de Perú todo el año, así que una clase a media tarde en Chorrillos cae de madrugada en la India, y también se puede.',
      body: [
        { kind: 'table', numCols: [], caption: 'Ejemplos de conversión entre la hora de Perú y la hora de la India (no es un horario de clases)', head: ['En Chorrillos (hora de Perú)', 'En la India', '¿Mismo día?'], rows: [
          ['11:00 a. m.', '9:30 p. m.', 'Sí'],
          ['1:30 p. m.', '12:00 a. m. (medianoche)', 'Pasa al día siguiente'],
          ['4:00 p. m.', '2:30 a. m.', 'Día siguiente'],
          ['8:00 p. m.', '6:30 a. m.', 'Día siguiente']
        ] },
        { kind: 'source', html: 'Perú está en UTC-5 durante todo el año y no cambia la hora en verano (base de datos tzdata, zona America/Lima; hora oficial del INACAL). La India está en UTC+5:30 todo el año. La diferencia de 10 horas y 30 minutos es fija. Las filas son solo ejemplos de conversión.' },
        { kind: 'p', mt: true, html: 'Al reservar, usted marca la hora en el reloj de Perú y el sistema la traduce para el mentor. Muchos adolescentes en vacaciones prefieren la mañana tardía o la noche; no hay un turno que les impongamos.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progreso',
    h2: '¿Cómo saber si un adolescente aprendió a programar este verano?',
    lede: 'No por las horas conectado, sino por lo que puede hacer solo. Estas son las cuatro pruebas que usamos al cerrar el verano.',
    table: { caption: 'Cuatro pruebas de cierre de verano (nuestras)', head: ['Prueba', 'Lo que hace el estudiante', 'Por qué importa'], rows: [
      ['Leer código ajeno', 'Explica qué hace un programa corto que no escribió', 'Es lo que más se hace en programación real'],
      ['Romper su propio programa', 'Busca el caso que lo hace fallar, como un paréntesis que sobra', 'Separa a quien copia de quien entiende'],
      ['Escribir desde cero', 'Resuelve un problema pequeño sin plantilla', 'Muestra que no depende de un ejemplo'],
      ['Contarlo en inglés', 'Presenta su proyecto en dos minutos', 'Une el código con la comunicación']
    ] },
    left: { h3: 'Para la familia', ps: [
      'Pídale a su hijo que le enseñe el reto 2 y que le explique por qué <code>(]</code> sale False. Si lo explica bien, entendió algo que muchos adultos no.',
      'No se preocupe si al inicio tarda en seguir el inglés del mentor. Las primeras semanas son de acostumbrarse.'
    ] },
    right: { h3: 'Para el estudiante', ps: [
      'Antes de pedir ayuda, lea el error completo y escriba en una línea qué cree que pasó.',
      'Si una herramienta de IA le da código, no lo pegue: léalo, cámbielo y pruebe un caso que lo rompa.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: '¿Qué más puede estudiar un adolescente después del verano?',
    lede: 'Nueve opciones más para el carril 2, todas en vivo y en inglés; admiten el ritmo intensivo de verano y continúan sin cortes en marzo.',
    bands: [
      { num: 'I', h3: 'Lenguajes', sub: 'De 13 a 18 años', courses: [
        { code: 'VUPC / LENG / 01', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript y la web', blurb: 'Botones, animaciones y juegos que corren en cualquier navegador.' },
        { code: 'VUPC / LENG / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java desde el inicio', blurb: 'El lenguaje de muchas carreras de ingeniería, con proyectos grandes.' },
        { code: 'VUPC / LENG / 03', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ y estructuras de datos', blurb: 'Para quien quiere velocidad y entender cómo funciona la memoria.' }
      ] },
      { num: 'II', h3: 'Datos e inteligencia artificial', sub: 'De 13 a 18 años', courses: [
        { code: 'VUPC / IA / 01', slug: 'ai-ml-masterclass-teens', title: 'Aprendizaje automático', blurb: 'Modelos que aprenden con datos, construidos y evaluados en Python.' },
        { code: 'VUPC / IA / 02', slug: 'orange-data-mining-visual-machine-learning-course-for-teens', title: 'Minería de datos visual', blurb: 'Aprendizaje automático sin escribir código, con la herramienta Orange.' },
        { code: 'VUPC / IA / 03', slug: 'vibe-coding-for-teens-python-web-ai-projects-course', title: 'Programar con ayuda de IA', blurb: 'Proyectos de Python y web donde la IA ayuda y el estudiante revisa todo.' }
      ] },
      { num: 'III', h3: 'Metas más altas', sub: 'De 14 a 18 años', courses: [
        { code: 'VUPC / META / 01', slug: 'pcep-pcap-python-certification-course', title: 'Certificación PCEP y PCAP', blurb: 'Preparación para los exámenes de Python Institute, sin promesas de nota.' },
        { code: 'VUPC / META / 02', slug: 'competitive-programming-for-teens-course', title: 'Programación competitiva', blurb: 'Algoritmos y problemas con tiempo límite, como en una olimpiada.' },
        { code: 'VUPC / META / 03', slug: 'data-science-course-for-teens-python-data', title: 'Ciencia de datos', blurb: 'Desde los 14 años: tablas, gráficos y un primer modelo, con la estadística explicada.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo son las clases para adolescentes?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Media mañana', l: 'Después de dormir un poco más, antes de bajar a la playa.' },
      { time: 'Tarde', l: 'Al volver del taller deportivo o del mar.' },
      { time: 'Noche', l: 'Para el adolescente que rinde más cuando la casa está en calma.' }
    ],
    cells: [
      { h3: 'Mentor fijo', p: 'Una misma persona acompaña al estudiante de la primera a la última clase.' },
      { h3: 'Código propio', p: 'El adolescente escribe cada línea; el mentor orienta, no dicta.' },
      { h3: 'Errores a la vista', p: 'Se comparten pantalla y errores para corregirlos en voz alta.' },
      { h3: 'Retos con cierre', p: 'Cada etapa termina en un programa que funciona y se puede mostrar.' },
      { h3: 'Resumen para la familia', p: 'Una nota corta al terminar cada reto, sin tecnicismos.' },
      { h3: 'Grupo o uno a uno', p: 'Entre quince y veinte chicos de edades cercanas, o atención individual.' }
    ]
  },

  projectsH2: 'Proyectos de otros estudiantes de secundaria y universidad',
  projectsLede: 'Lo que hacen nuestros alumnos con más experiencia; hay más trabajos publicados en <a class="ag-inline-link" href="/student-labs">Student labs</a> (en inglés).',
  reviewsLede: 'Comentarios que padres y alumnos de distintos países dejaron en Google, sin traducir.',

  fees: {
    h2: '¿Cuánto cuesta un verano de programación?',
    lede: 'Las tarjetas de esta sección muestran la cuota mensual de siempre, pensada para ocho clases. El verano intensivo, con cuatro o cinco sesiones por semana, se cotiza aparte: el mentor le da la cifra antes de la primera clase intensiva y usted acepta o no. No hay matrícula. El precio va en dólares de Estados Unidos, se carga a una tarjeta y su banco lo pasa a soles con el cambio de ese día.',
    free: ['Una sesión completa con un mentor', 'Recomendación de carril y de reto inicial', 'No se piden datos de pago'],
    group: ['Grupo de quince a veinte adolescentes', 'El mismo mentor hasta el final del curso', 'Cuota mostrada: ocho clases al mes', 'Verano: 4 o 5 sesiones por semana'],
    one: ['El estudiante y su mentor, solos', 'Ritmo y retos a la medida', 'Horario que la familia decide']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Vacaciones útiles de programación en Chorrillos: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No: todas son en vivo, en línea y en inglés. Para un adolescente eso suma, porque programa y practica el idioma en la misma sesión, con el vocabulario técnico que encontrará en la universidad. El mentor modera su velocidad y su acento. El EF EPI 2025 da a Lima 555 puntos, nivel alto, de modo que el inglés ya forma parte de la ciudad.' },
      { q: '¿Mi hijo necesita saber inglés para empezar?', a: 'Necesita entender frases sencillas, como las que ya ve en el colegio en las horas de Inglés. El resto se aprende en clase: el mentor escribe en pantalla las palabras clave y comprueba que el estudiante las entendió antes de avanzar.' },
      { q: '¿Desde qué grado de secundaria se puede empezar?', a: 'Desde 1° de secundaria, alrededor de los 12 años. Los chicos de 4° y 5° pueden ir más rápido y, si quieren una meta concreta, preparar después la certificación PCEP en un curso aparte.' },
      { q: '¿Cuándo empiezan las clases de verano?', a: 'No hay una fecha común. Cada estudiante empieza la semana que quiera; en 2026 el último tramo de clases del colegio termina el 18 de diciembre según la RM 501-2025-MINEDU, y se puede arrancar desde entonces o en cualquier semana de 2027.' },
      { q: '¿Cuántas clases por semana son en verano y cuánto se avanza?', a: 'De cuatro a cinco por semana. En diez semanas eso da de 40 a 50 clases, por cálculo nuestro: alcanza para completar un curso corto, como vibe coding o Orange, y para hacer cerca de la mitad de uno largo, como Python para adolescentes, que luego sigue con el colegio.' },
      { q: '¿Puede elegir algo distinto de Python?', a: 'Sí. Python e IA es el carril que recomendamos, pero el adolescente puede tomar al ritmo de verano cualquier curso del catálogo: algoritmos (DSA), web full stack, apps con React Native, Java, C++, videojuegos con Unity, vibe coding o matemáticas.' },
      { q: '¿A qué hora son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Por la diferencia fija de diez horas y media, las 8:00 p. m. en Chorrillos son las 6:30 a. m. del día siguiente en la India.' },
      { q: '¿Tienen relación con la Municipalidad de Chorrillos?', a: 'Ninguna. Somos una empresa independiente y no organizamos ni promocionamos los talleres municipales. Citamos lo que la municipalidad publicó en gob.pe en enero de 2026 para que las familias tengan la información completa.' },
      { q: '¿Las clases ayudan con el examen de admisión a la universidad?', a: 'No preparan para un examen de admisión, que en el Perú se rinde en castellano y lo decide cada universidad. Lo que sí desarrollan es razonamiento lógico y matemático, que sirve en cualquier carrera de ciencias o ingeniería. No prometemos ningún resultado de admisión.' },
      { q: '¿Qué necesita en casa?', a: 'Una computadora o laptop con cámara y micrófono, audífonos y buena conexión. Los programas que usamos son gratuitos. El celular no alcanza para escribir código.' },
      { q: '¿Cuánto cuesta el verano y cómo se paga?', a: 'El costo de cuatro o cinco clases semanales lo comunica el mentor antes de la primera clase intensiva; en la página solo aparece la cuota normal de ocho clases al mes. Se paga con tarjeta, en dólares estadounidenses, y el banco hace la conversión. Al terminar un curso el estudiante recibe nuestro certificado de finalización, que no es un documento oficial del sistema educativo peruano.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Para seguir',
    h2: 'Otras guías que pueden servirle',
    lede: 'Lecturas relacionadas para adolescentes y familias; las de título en inglés están en ese idioma.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'La guía general de nuestras clases para todo el país.' },
      { href: '/english-medium-coding-classes-lima', label: 'English-medium coding in Lima', p: 'Para familias de Lima que buscan programación enseñada en inglés.' },
      { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños en inglés', p: 'Si en casa también hay un niño de primaria.' },
      { href: '/ai-tools-age-guide', label: 'AI tool age guide', p: 'La edad mínima que exige cada herramienta de inteligencia artificial.' },
      { href: '/student-labs', label: 'Student labs', p: 'Proyectos reales publicados por nuestros alumnos.' },
      { href: '/courses', label: 'All courses', p: 'Todos los cursos, ordenados por edad y tema.' }
    ]
  },

  start: {
    h2: 'Reserve una clase de prueba para su hijo adolescente',
    lede: 'Indique la hora en el reloj de Perú. En la sesión, el mentor le muestra un programa corto al estudiante y le pide que adivine qué hace; según cómo razona, le propone un carril, el curso de arranque y si conviene ir a cuatro o a cinco clases por semana, con la tarifa de ese ritmo.',
    readFirst: 'Para conocer el método antes, lea <a class="ag-inline-link" href="/how-we-teach">How we teach</a> o explore <a class="ag-inline-link" href="/courses">All courses</a>; ambas páginas están en inglés.',
    note: 'Enseñamos en línea, en vivo y en inglés, desde la India. Por WhatsApp, en cambio, puede escribirnos en castellano.',
    formNote: 'Sin costo, sin tarjeta, sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Cursos para secundaria', links: [
        { href: '/courses/python-complete-masterclass-teens', label: 'Python para adolescentes' },
        { href: '/courses/problem-solving-dsa-masterclass-teens', label: 'Algoritmos (DSA)' },
        { href: '/courses/full-stack-web-development-teens-masterclass', label: 'Web full stack' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Más información', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Clases en el Perú' },
        { href: '/english-medium-coding-classes-lima', label: 'Programación en inglés en Lima' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/student-labs', label: 'Proyectos de alumnos' }
      ] }
    ],
    bottomRight: 'Mañana de mar, tarde de código'
  },

  personalityCss: `
.ag-root.ag-vupc .ag-hero h1 { max-width: 24ch; letter-spacing: -0.015em; }
.ag-root.ag-vupc .ag-capsule { border-left-width: 4px; border-radius: 0; }
.ag-root.ag-vupc .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-vupc .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-vupc .ag-steps li { line-height: 1.6; }
`,

  dossier: {
    curriculumAuthority: 'Municipalidad Distrital de Chorrillos on gob.pe (three notes of 6 January 2026 on the summer 2026 sport, aquatic and cultural workshops); INEI Censos Nacionales 2025 (Lima Metropolitana demographic workbook, Cuadros 1 and 3); MINEDU CNEB Tabla N.° 8 (secundaria, Jornada Escolar Regular); MINEDU note of 24 July 2025 on Fábrica de Programadores; RM 501-2025-MINEDU Tabla 1; EF EPI 2025; tzdata. The two summer lanes as presented, the course-progress table (durations from our own course pages, arithmetic ours), the lane-by-grade table, the four-challenge plan, the four closing tests and the bracket-checker exercise are ours.',
    localProject: 'A bracket checker for a secundaria student in Chorrillos: a Python function pushes every opening bracket onto a list used as a stack and pops it on each closing one; it prints True for (2 + 3) * [4 - 1], {[()]} and a real line of Python, False for (] (wrong pair) and for ((1 + 2) (one left open, caught by len(stack) == 0). Run with python3 -I. Lesson family: a stack, push and pop.',
    requiredMentions: ['False ((1 + 2)', 'Talleres deportivos acuáticos verano 2026', 'Mega Plaza Express Cedros', '32,037 chicos y chicas de 12 a 17 años', '377,080 habitantes', 'el undécimo distrito más poblado de los 43', 'Horas semanales de secundaria con Jornada Escolar Regular, por grado', 'Cuatro retos de verano para secundaria', 'Mañana de mar, tarde de código', 'Both symbols are brackets. Why should this one fail?'],
    sources: [
      { claim: 'Talleres Deportivos Verano 2026, start 5 January 2026, limited places, in-person payment points.', url: 'https://www.gob.pe/institucion/munichorrillos/noticias/1356104-verano-2026-se-vive-en-movimiento' },
      { claim: 'Talleres deportivos acuáticos verano 2026, start 7 January 2026, for children and adolescents.', url: 'https://www.gob.pe/institucion/munichorrillos/noticias/1356092-talleres-deportivos-acuaticos-verano-2026' },
      { claim: 'Talleres Culturales (danza, teatro, expresión artística), start 5 January 2026.', url: 'https://www.gob.pe/institucion/munichorrillos/noticias/1356109-el-verano-se-vive-con-arte-alegria-y-talento' },
      { claim: 'Chorrillos 377,080 total, 359,715 censused, 17,365 omitted; 30,077 aged 6 to 11 and 32,037 aged 12 to 17 (Censos Nacionales 2025).', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/27/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Secundaria JER weekly hours (Tabla N.° 8), 35 a week, no computing area; Ciencia y tecnología competency on technological solutions.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Fábrica de Programadores: 1,000 students of 4° and 5° secundaria in Lima Norte, Python, PCEP, with Cisco Networking Academy (24 July 2025).', url: 'https://www.gob.pe/institucion/minedu/noticias/1214050-minedu-impulsa-iniciativa-fabrica-de-programadores-para-formar-a-escolares-con-certificacion-internacional-en-programacion' },
      { claim: '2026 school year last teaching block to 18 December 2026.', url: 'https://cdn.www.gob.pe/uploads/document/file/8968298/7380466-rm-n-501-2025-minedu.pdf' },
      { claim: 'EF EPI 2025: Lima 555, high band.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' }
    ],
    rejectedClaims: [
      'Spanish-language teaching: refused; every class is live, online and in English only (capsule and FAQ).',
      'A typed summer price, a common start date or a long course finished in one summer: refused; the 4 to 5 classes a week fee is agreed with the mentor, the progress table is labelled ours and says long courses continue in March.',
      'Municipal workshop fees: the gob.pe notes print none, and the page prints none.',
      'Any connection with the Municipalidad de Chorrillos or with MINEDU\'s Fábrica de Programadores: refused; the page says we are not linked to either.',
      'Admission-exam preparation or results: refused; the page says admission exams are in Spanish, decided by each university, and that we promise no result.',
      'Commute or traffic times: refused; no verified figure, neighbouring districts named in plain text only.',
      'Income or class assumptions about Chorrillos (INEI strata exist in the research): refused; only population and age counts are used.',
      'Under-18 use of 18+ AI tools: the page only says to read and test any AI-written code; no adult-only tool is recommended.'
    ]
  }
};
