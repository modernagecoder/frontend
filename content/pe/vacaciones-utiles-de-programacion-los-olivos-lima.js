// SHIP: vacaciones útiles district (ES) | Los Olivos: Verano Python e IA or a la carta, 4 to 5 a week, Lima Norte | a virtual robot on a grid: position, heading and a wall check
'use strict';
// Vacaciones útiles de programación en Los Olivos (ag- Spanish-language district door, Peru cluster row PE208, P2, hubGroup lima).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only; no soles, no typed figure, no camp length.
// Angle: the Los Olivos parent who types "vacaciones útiles los olivos" or "robótica para niños los olivos" (KEYWORDS.md:
// Los Olivos is the robotics + vacaciones útiles hotspot of Lima Norte). Spine: what a summer start with live online classes
// is (normal classes, our own suggested plan); how many children and teenagers live in Los Olivos and its Lima Norte
// neighbours (INEI Censos 2025); robótica or programación (MINEDU DITE paper, Hackathon 2025); MINEDU's Fábrica de
// Programadores pilot, which names Los Olivos; a robot programmed without a kit (our example); time conversions.
// Municipality: gob.pe searches on 2026-11-09 for "vacaciones utiles los olivos", "talleres de verano los olivos",
//   "verano 2026 los olivos", "los olivos vacaciones/verano/robotica" returned no Municipalidad de Los Olivos summer note
//   (saved: gobpe-search-*.html); www.munilosolivos.gob.pe timed out (curl 000). So the page says nothing about municipal
//   summer programmes.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/vacaciones-utiles-de-programacion-los-olivos-lima/,
// quotes grepped in the raw text):
//  INEI Censos Nacionales 2025, Indicadores demográficos, Lima Metropolitana file (tabulados/27/poblacion, 856,800 bytes):
//    Cuadro N° 1 "DISTRITO LOS OLIVOS 362039" (población total), "LIMA METROPOLITANA 10141775"; Cuadro N° 3 (población
//    censada por grupo de edad) "DISTRITO LOS OLIVOS 343232 17500 27111 29304 ..." (0 a 5, 6 a 11, 12 a 17); also Rímac
//    197361 / 183297 / 14847 / 16358, San Martín de Porres 764012 / 723830 / 59741 / 63462, Comas 578818 / 553297 / 48729 /
//    51347, Carabayllo 430806 / 416086 / 43563 / 44343, Puente Piedra 398960 / 378129 / 39067 / 39508, Santa Rosa 37680 /
//    36108 / 4194 / 4181, Ancón 78256 / 74099 / 7573 / 7579. Rank 12 of 43 = our ordering of Cuadro N° 1 (places.tsv).
//  MINEDU press note 24 July 2025, Fábrica de Programadores (FACTS 45 to 47): "beneficiará a 1000 escolares de 4.º y 5.º de
//    secundaria de Lima Norte con formación en programación Python y certificación internacional"; "seleccionados mediante una
//    prueba de lógica, pertenecen a colegios de Los Olivos, Rímac, San Martín de Porres, Comas, Carabayllo, Puente Piedra,
//    Santa Rosa y Ancón"; "curso presencial de iniciación en la Universidad Nacional de Ingeniería (UNI)"; "formación
//    especializada online dictada por la Universidad Privada del Norte (UPN)"; "podrán rendir el examen PCEP, con validez
//    global"; "Esta experiencia piloto busca validar el modelo pedagógico y replicarlo en el ámbito nacional"; "en alianza con
//    Cisco Networking Academy". (Minister and president names in the note are left out on purpose.)
//  MINEDU DITE robotics paper (FACTS 52 to 54): "la robótica en educación no es el objetivo, es el medio."; "desde el año 1996
//    con el proyecto Infoescuela"; "en los años 2009 y 2010, el MINEDU dota de Kits LEGO Wedo a casi el 100% de Instituciones
//    Educativas de Gestión Pública de Educación Primaria".
//  MINEDU Hackathon 2025 note (FACTS 48, 49): "proyectos de IA y robótica"; "entre 2023 y 2025, la presencia de estudiantes
//    mujeres creció en 28 %".
//  RM 501-2025-MINEDU, Tabla 1 (page 7, checked by eye, png saved): first teaching block "Del 16 marzo al 15 de mayo", fourth
//    "Del 19 octubre a 18 de diciembre", "treinta y seis (36) semanas lectivas". 2027: a gob.pe search on 2026-11-09 for
//    "año escolar 2027" returned only the 14 Oct 2026 materials note, no calendar norm (saved).
//  MINEDU press note 14 October 2026 (FACTS 18, 28): "2.2 millones" secundaria, "13.3 millones de unidades".
//  EF EPI 2025 Peru page: Lima city 555, class "border-epi-high"; Peru 519.
//  INEI Boletín TIC II trimestre 2026: Lima Metropolitana "84,7% de los hogares disponía del servicio"; "el 36,4% de los
//    hogares del país disponía de al menos una computadora".
//  Time: tzdata America/Lima -5:00 no DST; Asia/Kolkata +5:30 (timezone.tsv, INACAL).
// Our own calculations (python3 -I): 27111 / 343232 = 7.9 % and 29304 / 343232 = 8.5 % of the censada population of Los Olivos.
// Our own example, run with python3 -I (robot_v1.py, robot_v2.py in the src-pages folder), exact output:
//    v1: F (0, 1) north / F (0, 2) north / R (0, 2) east / F (1, 2) east / F (2, 2) east / F (3, 2) east / L (3, 2) north /
//        F (3, 3) north / F (3, 4) north / F (3, 5) north / End: (3, 5)
//    v2: ... F (3, 4) north / Wall! I stay at (3, 4) / End: (3, 4)
// Lesson family: a robot's state (position and heading) updated by a string of commands, with a wall check that keeps it on
//    the board; turning with % 4.
// REVISED 2026-11-10 for the owner's summer offer (brief, last section): "Verano Python e IA" (python-ai-kids-masterclass
// 9 to 12; python-complete-masterclass-teens, then ai-ml-masterclass-teens or data-science-course-for-teens-python-data
// from 14) or "Verano a la carta" (any course: DSA, full stack web, React Native apps, Java, C++, PCEP, Scratch, Roblox,
// vibe coding), 4 to 5 live classes a week, group or one to one, summer pace and fee agreed with the mentor before the first
// summer class, first class free. All facts, sources and the robot lesson kept; the eight-week plan at two a week replaced
// by a ten-week plan at four or five a week.
// Course durations read from content/courses/data/*.json on 2026-11-10: python-ai-kids 8-10 months (32-40 weeks), ages 9
// to 12; scratch 3-4 months; vibe coding kids 3 months; python teens and DSA teens 10-12 months; data science teens 6
// months, 14 to 18. Our arithmetic: weeks 1-2 = 8 / 10 classes, 4 = 16 / 20, 6 = 24 / 30, 8 = 32 / 40, 10 = 40 / 50;
// Python e IA kids at 2 a week = 64 to 80 classes, so a ten-week summer covers well over half but does not finish it.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  "ordenes = 'FFRFFFLFFF'",
  'x, y = 0, 0',
  'rumbo = 0',
  'pasos = [(0, 1), (1, 0), (0, -1), (-1, 0)]',
  "nombres = ['north', 'east', 'south', 'west']",
  '',
  'for orden in ordenes:',
  "    if orden == 'F':",
  '        dx, dy = pasos[rumbo]',
  '        x, y = x + dx, y + dy',
  "    elif orden == 'R':",
  '        rumbo = (rumbo + 1) % 4',
  "    elif orden == 'L':",
  '        rumbo = (rumbo - 1) % 4',
  '    print(orden, (x, y), nombres[rumbo])',
  '',
  "print('End:', (x, y))"
].join('\n');

const OUT1 = [
  'F (0, 1) north',
  'F (0, 2) north',
  'R (0, 2) east',
  'F (1, 2) east',
  'F (2, 2) east',
  'F (3, 2) east',
  'L (3, 2) north',
  'F (3, 3) north',
  'F (3, 4) north',
  'F (3, 5) north',
  'End: (3, 5)'
].join('\n');

const V2 = [
  "    if orden == 'F':",
  '        dx, dy = pasos[rumbo]',
  '        nx, ny = x + dx, y + dy',
  '        if 0 <= nx <= 4 and 0 <= ny <= 4:',
  '            x, y = nx, ny',
  '        else:',
  "            print('Wall! I stay at', (x, y))",
  '            continue'
].join('\n');

const OUT2 = [
  'F (3, 3) north',
  'F (3, 4) north',
  'Wall! I stay at (3, 4)',
  'End: (3, 4)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'lima', label: 'Vacaciones útiles en Los Olivos' },
  slug: 'vacaciones-utiles-de-programacion-los-olivos-lima',
  code: 'vupo',
  accent: '#005B4B',
  accentRationale: 'Vacaciones útiles de programación en Los Olivos: a deep olive-leaf green #005B4B for the district named after its olive groves, darker than the primaria green of the Spanish kids door; contrast 6.56 on the paper #FBF8F2 (alloc.tsv) and above 4.5 on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Vacaciones útiles de programación en Los Olivos',
  title: 'Vacaciones útiles de programación en Los Olivos, en inglés',
  description: 'Vacaciones útiles de programación en Los Olivos: Verano Python e IA o un curso a la carta, 4 a 5 clases por semana, en vivo y en inglés, para primaria y secundaria.',
  ogDescription: 'Verano de programación en Los Olivos: Python con IA o el curso que su hijo elija, cuatro o cinco clases semanales en vivo y en inglés, y un robot que se programa sin kit.',
  twitterDescription: 'Los Olivos, verano 2027: Python e IA o un curso a la carta, de 4 a 5 clases por semana en vivo y en inglés, en grupo o individuales.',
  pageName: 'Vacaciones útiles de programación en Los Olivos',
  webPageDescription: 'Guía para familias de Los Olivos (Lima Norte) que buscan vacaciones útiles de programación o de robótica para sus hijos: la población de niños y adolescentes del distrito según los Censos Nacionales 2025 del INEI, lo que dice el MINEDU sobre robótica educativa, la Fábrica de Programadores de Lima Norte, las dos opciones de verano (Python e IA, o un curso a la carta) a 4 o 5 clases por semana, un plan de diez semanas sugerido por nosotros y un robot virtual programado en Python.',
  courseDescription: 'Verano de programación en vivo para niños de 6 a 12 años y adolescentes de Los Olivos, dictado solo en inglés: Verano Python e IA o un curso a la carta (DSA, web, apps, Java, PCEP y más), de 4 a 5 clases por semana, en clase grupal o individual y a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Vacaciones útiles en Los Olivos',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#verano', label: 'El verano' },
    { href: '#lima-norte', label: 'Lima Norte' },
    { href: '#robotica', label: 'Robótica' },
    { href: '#robot', label: 'Ejemplo' },
    { href: '#plan', label: 'Plan' }
  ],
  eyebrow: 'Lima Norte &middot; Los Olivos &middot; Verano de programación',
  h1: 'Vacaciones útiles de programación en Los Olivos, en inglés',
  lede: 'Para las familias de Los Olivos que quieren un verano con propósito: programación en vivo, guiada en inglés por un mentor, cuatro o cinco veces por semana y sin salir de casa. Aquí explicamos las dos opciones de enero a marzo, cuántas clases suma el verano, qué diferencia hay entre robótica y programación, qué hizo el MINEDU en Lima Norte con la Fábrica de Programadores y cómo se programa un robot que solo existe en la pantalla.',
  secondaryCta: { href: '#verano', label: 'Ver las dos opciones de verano' },
  wa: 'Hola Modern Age Coders, vivimos en Los Olivos y nos interesa el Verano Python e IA (o un curso a la carta) para nuestro hijo o hija. ¿Podemos reservar una clase gratis?',
  heroNote: 'Enseñamos en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; un verano de código en Lima Norte sin cruzar la ciudad',
  spec: [
    ['Para quién', 'Niños de 6 a 12 años y adolescentes de secundaria'],
    ['Opciones', 'Verano Python e IA, o un curso a la carta'],
    ['Dónde', 'En casa, en Los Olivos, por videollamada'],
    ['Formato', 'Grupo de quince a veinte, o clases individuales'],
    ['Intensidad', 'De 4 a 5 clases en vivo por semana'],
    ['Primera clase', 'Gratis, sin tarjeta']
  ],
  capsuleQ: 'En pocas palabras',
  capsule: 'Sí: este verano Modern Age Coders ofrece a los chicos de Los Olivos, de 6 a 12 años y de secundaria, dos opciones: Verano Python e IA, la que proponemos primero, o Verano a la carta, con el curso que su hijo elija (DSA, web, apps, Java y más). Su hijo programa desde casa con un mentor en la India, en vivo y en inglés, de 4 a 5 clases por semana, en grupo o individual y a la hora que usted marque. No es un taller con kit de robótica. Intensidad y tarifa de verano se acuerdan con el mentor; la primera clase es gratis.',

  picks: {
    eyebrow: 'Para empezar este verano',
    h2: 'Tres cursos para un verano de código en Los Olivos',
    lede: 'Los dos primeros son el Verano Python e IA, uno para primaria y otro para secundaria; el tercero es un ejemplo de Verano a la carta para adolescentes que miran el examen internacional de Python.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'VUPO / 01', title: 'Python e IA para niños', alt: 'Imagen del curso de Python e IA para niños', note: 'Verano Python e IA, de 9 a 12 años. Aquí se escribe código por primera vez: dibujos, juegos de preguntas y, como en el ejemplo de esta página, un robot que avanza por una cuadrícula; al final, un proyecto de IA.' },
      { course: 'python-complete-masterclass-teens', code: 'VUPO / 02', title: 'Python para adolescentes', alt: 'Imagen del curso de Python para adolescentes', note: 'Verano Python e IA en secundaria. El mismo lenguaje que eligió la Fábrica de Programadores, de cero a proyectos propios; después vienen IA y machine learning, o ciencia de datos desde los 14.' },
      { course: 'pcep-pcap-python-certification-course', code: 'VUPO / 03', title: 'Python con meta PCEP y PCAP', alt: 'Imagen del curso de certificación de Python PCEP y PCAP', note: 'Verano a la carta, desde los 13. Python con la vista puesta en los exámenes PCEP y PCAP del Python Institute, que el alumno rinde por su cuenta si lo desea; la parte PCEP cabe en un verano intenso.' }
    ]
  },

  sections: [
    {
      id: 'verano',
      eyebrow: 'El verano',
      h2: '¿Qué les ofrecemos a los chicos de Los Olivos en enero, febrero y marzo?',
      lede: 'Dos opciones, en vivo y en inglés: Verano Python e IA, la que proponemos primero, o Verano a la carta, en la que su hijo elige el curso. En ambas se programa cuatro o cinco veces por semana, el doble o más que en el año escolar, y se arranca la semana que usted decida.',
      body: [
        { kind: 'two',
          leftH3: 'Verano Python e IA',
          left: [
            'Es la opción que más se parece a lo que pasa en Lima Norte, donde el MINEDU eligió Python para su Fábrica de Programadores. Su hijo entrena la lógica, escribe sus primeros programas en Python y cierra el verano con un proyecto de inteligencia artificial pensado para su edad.',
            'De 9 a 12 años, con <a class="ag-inline-link" href="/courses/python-ai-kids-masterclass">Python e IA para niños</a>. En secundaria, con <a class="ag-inline-link" href="/courses/python-complete-masterclass-teens">Python para adolescentes</a> y luego <a class="ag-inline-link" href="/courses/ai-ml-masterclass-teens">IA y machine learning</a> o, desde los 14, <a class="ag-inline-link" href="/courses/data-science-course-for-teens-python-data">ciencia de datos</a>. Los de 6 a 8 empiezan con bloques y llegan a Python después.'
          ],
          rightH3: 'Verano a la carta',
          right: [
            'Su hijo escoge cualquier curso del catálogo y lo lleva con la misma intensidad. En secundaria: <a class="ag-inline-link" href="/courses/problem-solving-dsa-masterclass-teens">algoritmos y estructuras de datos (DSA)</a>, <a class="ag-inline-link" href="/courses/full-stack-web-development-teens-masterclass">desarrollo web full stack</a>, <a class="ag-inline-link" href="/courses/complete-app-development-masterclass-for-teens">apps con React Native</a>, Java o C++. En primaria: Scratch, Roblox, apps con bloques o vibe coding para niños.',
            'Para el adolescente que mira el examen PCEP, como los chicos de la Fábrica, está el curso con meta PCEP y PCAP. En la clase gratis el mentor revisa con usted qué curso tiene sentido.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Qué opción conviene según la edad y el grado (guía nuestra)', head: ['Edad y grado, aproximados', 'Verano Python e IA', 'Verano a la carta, algunas ideas'], rows: [
          ['6 a 8 años, 1° a 3° de primaria', 'Aún con bloques; Python llega después', 'Scratch completo, programación con bloques, razonamiento para pequeños'],
          ['9 a 12 años, 4° a 6° de primaria', 'Python e IA para niños', 'Vibe coding para niños, videojuegos para niños, apps con bloques'],
          ['12 a 15 años, 1° a 3° de secundaria', 'Python para adolescentes', 'DSA para adolescentes, Java, apps con React Native'],
          ['15 a 17 años, 4° y 5° de secundaria', 'Python para adolescentes, luego IA y machine learning o ciencia de datos', 'Python con meta PCEP, web full stack, C++']
        ] },
        { kind: 'source', html: 'Guía de Modern Age Coders, con las edades de la ficha de cada curso. Ninguna opción exige saber programar.' },
        { kind: 'p', mt: true, html: 'En el Perú las vacaciones útiles son los programas de verano que llenan los meses sin colegio. La Resolución Ministerial 501-2025-MINEDU fijó el año escolar 2026 en 36 semanas lectivas, con el primer bloque de clases desde el 16 de marzo y el último hasta el 18 de diciembre de 2026. Lo que queda entre esa fecha y el inicio del año siguiente es el verano que muchas familias de Los Olivos quieren aprovechar.' },
        { kind: 'p', html: 'El calendario del año escolar 2027 todavía no está publicado. Al 9 de noviembre de 2026, una búsqueda en gob.pe por "año escolar 2027" solo devuelve la nota del MINEDU del 14 de octubre de 2026 sobre el despacho de 13.3 millones de unidades de materiales educativos para ese año. Por eso no le prometemos aquí una fecha de cierre del verano: cuando el MINEDU publique la norma, la fecha de vuelta al colegio será la que diga esa norma.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Lo que sí es', p: 'Clases en vivo por videollamada, cuatro o cinco por semana, con un mentor que conoce a su hijo, dentro de un grupo de quince a veinte chicos de su misma etapa o a solas con él. Cada semana se programa algo nuevo y se termina con un pequeño proyecto.' },
          { h3: 'Lo que no es', p: 'No es un taller presencial en un local del distrito ni un curso con un robot físico. No mandamos piezas ni kits a casa. Tampoco es un curso grabado: si su hijo se traba, el mentor lo ve en la pantalla compartida en ese momento.' },
          { h3: 'Lo que sigue en marzo', p: 'Cuando vuelva el colegio, su hijo baja a dos clases por semana, cambia de horario o termina. Si el curso es largo, en marzo lo encuentra bien avanzado y lo completa a ese ritmo.' }
        ] },
        { kind: 'p', mt: true, html: 'Un dato práctico para decidir: todas las clases son en inglés. El mentor habla despacio y adapta su acento al del niño, y el EF EPI 2025 ubica a Lima en el nivel alto de inglés, con 555 puntos, frente a los 519 del país. Para un niño de Los Olivos eso significa practicar inglés hablado mientras programa, dos cosas en la misma hora de verano.' }
      ]
    },
    {
      id: 'lima-norte',
      eyebrow: 'Los Olivos en cifras',
      h2: '¿Cuántos niños y adolescentes viven en Los Olivos?',
      lede: 'Decenas de miles. Los Censos Nacionales 2025 del INEI cuentan en Los Olivos 362,039 habitantes, y entre las personas censadas figuran 27,111 niños de 6 a 11 años y 29,304 adolescentes de 12 a 17. Es el duodécimo distrito más poblado de los 43 de Lima Metropolitana (orden nuestro a partir del cuadro del INEI).',
      body: [
        { kind: 'table', numCols: [1, 2, 3, 4], caption: 'Población de Los Olivos y de los otros distritos de Lima Norte que nombra la Fábrica de Programadores, Censos Nacionales 2025', head: ['Distrito', 'Población total', 'Población censada', 'Censados de 6 a 11 años', 'Censados de 12 a 17 años'], rows: [
          ['Los Olivos', '362,039', '343,232', '27,111', '29,304'],
          ['San Martín de Porres', '764,012', '723,830', '59,741', '63,462'],
          ['Comas', '578,818', '553,297', '48,729', '51,347'],
          ['Carabayllo', '430,806', '416,086', '43,563', '44,343'],
          ['Puente Piedra', '398,960', '378,129', '39,067', '39,508'],
          ['Rímac', '197,361', '183,297', '14,847', '16,358'],
          ['Ancón', '78,256', '74,099', '7,573', '7,579'],
          ['Santa Rosa', '37,680', '36,108', '4,194', '4,181']
        ] },
        { kind: 'source', html: 'Fuente: INEI, Censos Nacionales 2025, tabulado "Indicadores demográficos" de Lima Metropolitana: Cuadro N.° 1 (población total, censada y omitida por distrito) y Cuadro N.° 3 (población censada por grupo de edad). Fecha censal: 15 de septiembre de 2025. La población total suma la censada y la omitida; los grupos de edad solo existen para la censada. Cada distrito se publica por separado y así lo mostramos, sin sumarlos.' },
        { kind: 'two', mt: true,
          leftH3: 'Qué dicen estos números',
          left: [
            'En Los Olivos, 7.9 % de las personas censadas tiene entre 6 y 11 años y 8.5 % entre 12 y 17 (cálculo nuestro con el Cuadro N.° 3). Dicho de otro modo: en un distrito de este tamaño hay decenas de miles de chicos que en enero salen del colegio al mismo tiempo, y la oferta de verano de cualquier local se llena rápido.',
            'Los Olivos limita con San Martín de Porres, Independencia, Comas y Puente Piedra. Las familias de toda esa zona buscan lo mismo en el verano: algo útil, cerca y a un horario que funcione con el trabajo de los padres.'
          ],
          rightH3: 'Por qué en línea y desde casa',
          right: [
            'Con la clase en la pantalla de su casa, el local deja de importar. Su hijo no tiene que viajar a otro distrito para encontrar programación en inglés, y usted no tiene que organizar quién lo lleva y quién lo recoge cada día del verano.',
            'Lo que sí necesita es una computadora con teclado y una conexión estable. El boletín del INEI del segundo trimestre de 2026 indica que el 84,7 % de los hogares de Lima Metropolitana tiene servicio de internet, mientras que en todo el país solo el 36,4 % de los hogares cuenta con al menos una computadora. Con una sola máquina en casa, aunque la usen varios hermanos por turnos, basta.'
          ] },
        { kind: 'p', mt: true, html: 'Para comparar con el resto de la ciudad: el mismo tabulado del INEI da 10,141,775 habitantes para Lima Metropolitana en 2025. Si busca una guía general de nuestras clases en Lima, la tenemos en inglés: <a class="ag-inline-link" href="/english-medium-coding-classes-lima">English-medium coding classes in Lima</a>. Y para el panorama nacional, la página <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">Coding and AI classes in Peru</a> resume cómo trabajamos con familias de todo el país.' }
      ]
    },
    {
      id: 'robotica',
      eyebrow: 'Robótica o programación',
      h2: '¿Vacaciones útiles de robótica o de programación?',
      lede: 'Si su hijo empieza de cero, de programación. Un robot educativo es una computadora pequeña con motores y sensores, y lo que lo hace interesante es el programa que lleva dentro. Ese programa es lo que enseñamos.',
      body: [
        { kind: 'p', html: 'En Lima Norte, "robótica" es la primera palabra que muchas familias escriben cuando buscan tecnología para sus hijos en el verano. Tiene sentido: el MINEDU trabaja con robótica educativa desde hace décadas. En un documento de su área de innovación tecnológica (la DITE), el ministerio cuenta que usa la robótica educativa "desde el año 1996 con el proyecto Infoescuela" y que, en 2009 y 2010, llevó kits LEGO WeDo a prácticamente todas las escuelas públicas de primaria del país.' },
        { kind: 'p', html: 'El mismo texto ordena las prioridades sin rodeos: para el MINEDU, el robot es una herramienta para aprender y no la meta. Lo que se busca es que el estudiante piense, pruebe y corrija. Y en el Hackathon 2025 del MINEDU, los equipos premiados presentaron "proyectos de IA y robótica"; según la misma nota, entre 2023 y 2025 la participación de estudiantes mujeres creció en 28 %. En los dos casos, debajo de cada robot hay alguien que escribió el código.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'El cuerpo del robot', p: 'Motores, ruedas, sensores de luz o distancia. Es la parte que se compra o se arma. Nosotros no la usamos ni la vendemos: enseñamos en línea y sin hardware.' },
          { h3: 'El cerebro del robot', p: 'Un programa que dice qué hacer con lo que miden los sensores: avanzar, girar, detenerse ante una pared. Esa lógica es la misma en bloques, en Python o en el lenguaje de cualquier kit.' },
          { h3: 'Lo que se lleva su hijo', p: 'Si en marzo su colegio tiene taller de robótica, llegará sabiendo secuencias, bucles, condiciones y cómo buscar un error. Es la parte que más cuesta aprender frente a un robot que no se mueve como uno esperaba.' }
        ] },
        { kind: 'p', mt: true, html: 'Somos claros en esto porque es lo que más preguntan en Los Olivos: no enviamos ningún kit de robótica ni hacemos clases con robots físicos. Lo que sí hacemos es simular un robot en la pantalla, como en el ejemplo de más abajo, para que su hijo entienda qué pasa por dentro cuando un robot avanza, gira o choca con una pared. Si después quiere un taller con piezas, irá con la parte difícil ya aprendida.' }
      ]
    },
    {
      id: 'fabrica',
      eyebrow: 'Python en Lima Norte',
      h2: '¿Qué es la Fábrica de Programadores y qué tiene que ver con Los Olivos?',
      lede: 'Es una estrategia piloto del MINEDU, anunciada el 24 de julio de 2025, que en su primera etapa forma en Python a 1000 escolares de 4.° y 5.° de secundaria de Lima Norte. La nota del ministerio nombra a Los Olivos entre los distritos de los colegios participantes.',
      body: [
        { kind: 'two',
          leftH3: 'Lo que dice la nota del MINEDU',
          left: [
            'Los estudiantes fueron "seleccionados mediante una prueba de lógica" y "pertenecen a colegios de Los Olivos, Rímac, San Martín de Porres, Comas, Carabayllo, Puente Piedra, Santa Rosa y Ancón". La estrategia se desarrolla "en alianza con Cisco Networking Academy".',
            'El programa incluye un "curso presencial de iniciación en la Universidad Nacional de Ingeniería (UNI)" y una "formación especializada online dictada por la Universidad Privada del Norte (UPN)". Quienes concluyan ambas etapas "podrán rendir el examen PCEP, con validez global".'
          ],
          rightH3: 'Lo que significa para su familia',
          right: [
            'Que el propio ministerio eligió Python como primer lenguaje para adolescentes de Lima Norte, y el PCEP como meta. El MINEDU describe la Fábrica como una "experiencia piloto" que busca "replicarlo en el ámbito nacional".',
            'Nosotros no tenemos ninguna relación con la Fábrica de Programadores, con el MINEDU, con la UNI, con la UPN ni con Cisco, y no inscribimos a nadie en ella. Si su hijo adolescente quiere aprender Python con esa misma meta, nuestro curso de PCEP y PCAP sigue el temario público del Python Institute, en inglés, y el examen lo rinde él por su cuenta.'
          ] },
        { kind: 'p', mt: true, html: 'Para los más pequeños, la lección de la Fábrica es otra: a los adolescentes se los eligió con una prueba de lógica. La lógica se entrena desde primaria, con bloques y con retos como el del robot de esta página, y un verano es tiempo suficiente para notar el cambio. Por dónde empezar según la edad y el grado lo explicamos en <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">nuestra guía de programación para niños de primaria</a>.' }
      ]
    },
    {
      id: 'robot',
      tint: 'tint',
      eyebrow: 'Una clase de ejemplo',
      h2: '¿Cómo se programa un robot sin tener un robot?',
      lede: 'Con una cuadrícula en la pantalla. Este ejercicio es nuestro y lo usamos con niños de 10 a 12 años: un robot empieza en la esquina (0, 0) de un tablero de 5 por 5 mirando al norte, y obedece una cadena de órdenes en inglés: F para avanzar, R para girar a la derecha y L para girar a la izquierda.',
      body: [
        { kind: 'code', label: 'Versión 1: el robot obedece todo', lang: 'Python', code: V1, note: 'El robot guarda tres datos: su columna <code>x</code>, su fila <code>y</code> y su <code>rumbo</code> (0 norte, 1 este, 2 sur, 3 oeste). Girar a la derecha suma 1 y girar a la izquierda resta 1; el <code>% 4</code> hace que después del oeste vuelva el norte.' },
        { kind: 'code', label: 'Lo que imprime la versión 1', lang: 'Salida', code: OUT1, note: 'Así aparece en pantalla, carácter por carácter, cuando corrimos el programa en Python 3. Fíjese en la última orden: el tablero va de 0 a 4, y el robot terminó en la fila 5, fuera del tablero.' },
        { kind: 'code', label: 'Versión 2: el robot mira antes de avanzar', lang: 'Python', code: V2, note: 'Solo cambia el bloque de la orden F: el robot calcula su próxima casilla, comprueba que siga dentro del tablero y, si no, se queda donde está y lo dice. Un robot real hace lo mismo con su sensor de distancia.' },
        { kind: 'code', label: 'El final de la salida de la versión 2', lang: 'Salida', code: OUT2, note: 'Las siete primeras líneas son iguales a las de la versión 1. Ahora el robot termina en (3, 4), dentro del tablero.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Jugar sin computadora.</strong> El mentor dibuja el tablero y el niño mueve una moneda leyendo en voz alta: "forward, forward, turn right". Así descubre solo dónde terminará el robot.',
          '<strong>Predecir.</strong> Antes de ejecutar, el niño dice en inglés en qué casilla cree que acaba. La mayoría dice (3, 4) porque no cuenta la última F. El programa muestra (3, 5).',
          '<strong>Encontrar el problema.</strong> La pregunta del mentor es una sola: "Where is the board?" El tablero va de 0 a 4, y la fila 5 no existe.',
          '<strong>Arreglarlo con una condición.</strong> El niño escribe la comprobación <code>0 &lt;= ny &lt;= 4</code> y ve aparecer <code>Wall! I stay at (3, 4)</code>. Acaba de programar lo que en robótica se llama evitar un obstáculo.',
          '<strong>Inventar su propio recorrido.</strong> El reto final es escribir una cadena de órdenes que lleve al robot de (0, 0) a (4, 4) sin tocar ninguna pared, y explicarla en inglés a alguien de la familia.'
        ] },
        { kind: 'p', mt: true, html: 'Lo valioso del ejercicio no es el robot. Es el orden de trabajo: predecir, ejecutar, comparar y corregir con una regla clara. Es lo que enseñamos a cualquier edad, y es lo que no aprende quien copia una respuesta hecha, venga de un compañero o de una herramienta de inteligencia artificial.' }
      ]
    },
    {
      id: 'plan',
      eyebrow: 'Un verano con plan',
      h2: '¿Cómo podría ser un verano de programación? Nuestro plan sugerido',
      lede: 'Este plan es nuestro: un chico de 9 a 12 años que entra al Verano Python e IA en enero y programa cuatro o cinco veces por semana durante diez semanas. Si empieza más tarde, el plan se recorta; si en marzo quiere seguir, continúa a dos clases semanales.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Diez semanas de Verano Python e IA, a 4 o 5 clases por semana (plan sugerido por nosotros, no un horario)', head: ['Semanas', 'Clases acumuladas, a 4 / a 5 por semana', 'Qué aprende', 'Qué se lleva a casa'], rows: [
          ['1 y 2', '8 / 10', 'Secuencias y repeticiones con bloques; el tablero dibujado en papel', 'Un personaje que recorre un laberinto en Scratch'],
          ['3 y 4', '16 / 20', 'Primeras líneas de Python: variables, <code>print</code>, cadenas de texto', 'Un programa que saluda y cuenta en inglés'],
          ['5 y 6', '24 / 30', 'Bucles, condiciones y listas: el robot de la cuadrícula, versiones 1 y 2', 'Un robot que no se sale del tablero'],
          ['7 y 8', '32 / 40', 'Primeras ideas de IA: el programa compara muchos recorridos y aprende cuáles chocan', 'Un robot que elige entre varias rutas guardadas'],
          ['9 y 10', '40 / 50', 'Un proyecto propio con todo lo anterior', 'Un juego o simulación presentado en inglés a la familia']
        ] },
        { kind: 'source', html: 'Plan, proyectos y cuentas de Modern Age Coders: semanas por clases semanales. El curso Python e IA para niños está pensado para 8 a 10 meses a dos clases por semana, de 64 a 80 clases; las 40 a 50 del verano lo dejan bien encaminado, pero no terminado, y el resto sigue desde marzo. El mentor ajusta todo después de la clase gratis.' },
        { kind: 'p', mt: true, html: 'Con un curso a la carta pasa lo mismo, según su tamaño. Uno corto, como Scratch completo (de tres a cuatro meses al ritmo normal) o vibe coding para niños (tres meses), se termina dentro del verano. Uno largo, de diez a doce meses, como Python para adolescentes o DSA para adolescentes, suma de 80 a 100 clases: llega a marzo con cerca de la mitad hecha. Ese es el cálculo honesto, y es nuestro.' },
        { kind: 'two', mt: true,
          leftH3: 'Si su hijo tiene de 6 a 8 años',
          left: [
            'Todo el verano con bloques: personajes que se mueven, cuentos animados y laberintos. Cada clase deja dos o tres palabras inglesas que el chico ya usa solo, como <em>move</em>, <em>turn</em> o <em>repeat</em>.',
            'Durante las primeras sesiones ayuda mucho que mamá, papá o un hermano mayor ande cerca. Su papel no es tocar el teclado, sino dar tranquilidad mientras el pequeño se acostumbra a la voz del mentor.'
          ],
          rightH3: 'Si su hijo está en secundaria',
          right: [
            'Puede ir directo a Python, a Java o al curso con meta PCEP. Un adolescente que dedica el verano a escribir código cada semana vuelve en marzo con una base que el horario escolar no le da: el plan de estudios del CNEB no tiene un área propia de computación o programación.',
            'Para adolescentes también hay cursos de desarrollo web, apps y datos. Elegimos juntos en la clase gratis según lo que le interesa construir.'
          ] }
      ]
    },
    {
      id: 'hora',
      eyebrow: 'Horarios',
      h2: '¿A qué hora son las clases desde Los Olivos?',
      lede: 'A la hora que usted elija. Los mentores trabajan desde la India, cuyo reloj le saca a Perú una ventaja fija de 10 horas y 30 minutos en cualquier mes. La tabla traduce algunas horas de un reloj al otro.',
      body: [
        { kind: 'table', numCols: [], caption: 'Hora de Perú y hora de la India (conversiones de ejemplo, no un horario de clases)', head: ['Reloj de Los Olivos (hora de Perú)', 'Reloj del mentor (hora de la India)', 'Fecha allá'], rows: [
          ['9:00 a. m.', '7:30 p. m.', 'Misma fecha'],
          ['11:00 a. m.', '9:30 p. m.', 'Misma fecha'],
          ['4:00 p. m.', '2:30 a. m.', 'Ya es mañana'],
          ['6:00 p. m.', '4:30 a. m.', 'Ya es mañana'],
          ['8:00 p. m.', '6:30 a. m.', 'Ya es mañana']
        ] },
        { kind: 'source', html: 'La hora oficial peruana se mantiene en UTC-5 los doce meses, sin adelantos de verano (zona America/Lima de la base tzdata; hora oficial del INACAL), y la de la India en UTC+5:30, también fija. Como ninguno de los dos países mueve el reloj, la brecha de 10 horas y 30 minutos es la misma en enero que en julio.' },
        { kind: 'p', mt: true, html: 'En el verano muchas familias de Los Olivos prefieren la mañana, cuando la casa está tranquila y los padres pueden revisar al final qué hizo su hijo; otras eligen la tarde o la noche para que coincida con el regreso del trabajo. Cuando reserve la clase gratis, el sistema le muestra los horarios ya convertidos a la hora de Perú.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Al final del verano',
    h2: '¿Qué habrá aprendido su hijo cuando vuelva el colegio?',
    lede: 'Cinco señales propias nos ayudan a explicar a cada familia cómo va su hijo. No son notas: son cosas que él mismo puede mostrarle.',
    table: { caption: 'Cómo se nota el avance después de un verano con código (escala nuestra)', head: ['Señal', 'Edad habitual', 'Lo que su hijo hace solo'], rows: [
      ['1. Ordena', '6 a 8 años', 'acomoda los pasos de un recorrido hasta que su personaje alcanza la salida'],
      ['2. Repite', '7 a 9 años', 'usa un bucle en lugar de copiar diez veces el mismo bloque'],
      ['3. Decide', '8 a 10 años', 'escribe una condición, como la pared del robot, y explica en inglés para qué sirve'],
      ['4. Recuerda', '10 a 12 años', 'guarda el estado de algo en variables, como la posición y el rumbo del robot'],
      ['5. Diseña', '11 años en adelante', 'planifica un proyecto propio antes de escribirlo y lo presenta en inglés']
    ] },
    left: { h3: 'Para la familia', ps: [
      'No mida el verano por cuántas líneas escribió su hijo. Mídalo por si puede explicarle qué hace su programa y por qué falló la primera vez.',
      'Es normal que la semana en que aparecen las condiciones cueste un poco más. Es también la semana en que muchos niños empiezan a disfrutar de verdad.'
    ] },
    right: { h3: 'Para los chicos', ps: [
      'Antes de ejecutar, diga en voz alta dónde cree que va a terminar el robot. Después compruébelo.',
      'Si algo falla, no borre todo: siga el programa línea por línea con el dedo, como hizo con la moneda sobre el tablero.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más opciones',
    h2: 'Nueve cursos más para el verano y para después',
    lede: 'Todos valen para el Verano a la carta: en vivo y en inglés, en grupo o de forma individual, con el mismo mentor de principio a fin.',
    bands: [
      { num: 'I', h3: 'Para los más pequeños', sub: 'De 6 a 9 años', courses: [
        { code: 'VUPO / INICIO / 01', slug: 'kids-coding-blocks-masterclass', title: 'Programación con bloques', blurb: 'Juegos, animaciones y primeras apps con bloques de colores, desde los 6 años.' },
        { code: 'VUPO / INICIO / 02', slug: 'scratch-programming-complete-course', title: 'Scratch de cero a juegos', blurb: 'Un recorrido completo en Scratch, del primer personaje a un juego terminado.' },
        { code: 'VUPO / INICIO / 03', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Razonamiento para pequeños', blurb: 'Patrones, orden y acertijos para niños de 6 a 9 años, antes de programar.' }
      ] },
      { num: 'II', h3: 'Para crear y jugar', sub: 'De 8 a 12 años', courses: [
        { code: 'VUPO / CREA / 01', slug: 'game-development-masterclass-for-kids', title: 'Videojuegos para niños', blurb: 'Tres mundos de juego conocidos, Scratch, Roblox y Minecraft, para aprender a crear y no solo a jugar.' },
        { code: 'VUPO / CREA / 02', slug: 'ai-literacy-for-kids-course', title: 'Entender la inteligencia artificial', blurb: 'Para chicos curiosos desde los 8: qué hay detrás de un asistente de IA y en qué falla.' },
        { code: 'VUPO / CREA / 03', slug: 'maths-through-coding', title: 'Matemática con código', blurb: 'Matemática escolar explicada con programas en Python, de 10 a 15 años.' }
      ] },
      { num: 'III', h3: 'Para adolescentes', sub: 'Desde los 13 años', courses: [
        { code: 'VUPO / SEC / 01', slug: 'ai-ml-masterclass-teens', title: 'IA y machine learning para adolescentes', blurb: 'El paso siguiente del Verano Python e IA, de 13 a 18 años.' },
        { code: 'VUPO / SEC / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java para adolescentes', blurb: 'Programación orientada a objetos paso a paso, con proyectos.' },
        { code: 'VUPO / SEC / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Lógica y algoritmos', blurb: 'Estructuras de datos y resolución de problemas para secundaria.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo son las clases',
    h2: '¿Cómo funciona un verano de clases en vivo?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Mañanas de verano', l: 'Para aprovechar las horas en que su hijo está más despierto.' },
      { time: 'Tardes o noches', l: 'Para que coincida con el regreso de los padres del trabajo.' },
      { time: 'Individual', l: 'Su hijo solo con el mentor, el día que usted indique.' }
    ],
    cells: [
      { h3: 'El mismo mentor', p: 'Una persona que acompaña a su hijo todo el curso y conoce su forma de pensar.' },
      { h3: 'Inglés con calma', p: 'Frases cortas, la pantalla como apoyo y tiempo para que el niño responda.' },
      { h3: 'Su hijo escribe', p: 'El mentor guía con preguntas; el código lo escribe y lo corrige el niño.' },
      { h3: 'Un proyecto por etapa', p: 'Cada tramo del verano cierra con algo que se puede mostrar en casa.' },
      { h3: 'Noticias para la familia', p: 'Un resumen breve de lo trabajado y de lo que viene.' },
      { h3: 'Grupo o individual', p: 'Un aula virtual de quince a veinte compañeros, o una clase solo para él.' }
    ]
  },

  projectsH2: 'Proyectos de nuestros estudiantes',
  projectsLede: 'Lo que empieza con un robot en una cuadrícula termina, con constancia, en aplicaciones reales. Algunos trabajos de estudiantes mayores están abajo y hay más en <a class="ag-inline-link" href="/student-labs">Student labs</a> (página en inglés).',
  reviewsLede: 'Lo que escribieron en Google familias y alumnos de otros países; las reseñas se muestran en el inglés original.',

  fees: {
    h2: 'Cuánto cuesta un verano de programación',
    lede: 'Abajo figura la mensualidad del año escolar, ocho clases al mes, en dólares estadounidenses. En verano su hijo programa cuatro o cinco veces por semana, así que esa intensidad y su tarifa se definen con el mentor antes de la primera clase veraniega. Se cobra con tarjeta, y la conversión la hace su banco al momento del cargo.',
    free: ['Una clase gratis en vivo', 'El mentor ubica el punto de partida de su hijo', 'Sin tarjeta ni compromiso'],
    group: ['Quince a veinte chicos de edad parecida', 'Mismo mentor durante todo el curso', 'Dos clases semanales en el año; cuatro o cinco en verano', 'Se paga mes a mes y se deja cuando quiera'],
    one: ['Solo su hijo y el mentor', 'Python e IA o el curso a la carta', 'Días, horas e intensidad que usted fije']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Vacaciones útiles de programación en Los Olivos: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. El idioma de todas nuestras clases, que son en vivo y en línea, es el inglés, y para su hijo eso es una ganancia doble en el verano, porque programa y conversa en inglés a la vez. Si no entiende algo, el mentor lo dice de otra manera y lo muestra en la pantalla hasta que quede claro. Según el EF EPI 2025, Lima tiene un nivel alto de inglés (555 puntos), así que esa práctica cae en terreno fértil.' },
      { q: '¿Cuándo empiezan las vacaciones útiles de programación?', a: 'Cuando usted quiera. No hay una fecha de inicio común: reserva la clase gratis y su hijo empieza la semana que más le acomode, en enero, febrero o marzo. Las semanas lectivas del año escolar 2026 terminan el 18 de diciembre de 2026, según la RM 501-2025-MINEDU; el calendario 2027 aún no estaba publicado al 9 de noviembre de 2026.' },
      { q: '¿Qué opciones hay para el verano?', a: 'Dos: Verano Python e IA, que proponemos primero, y Verano a la carta, en la que su hijo elige cualquier curso, por ejemplo DSA, desarrollo web, apps, Java, C++ o el curso con meta PCEP. Las dos son en vivo y en inglés.' },
      { q: '¿Cuántas clases por semana tiene el verano?', a: 'De 4 a 5 clases en vivo por semana, en grupo o individuales. En diez semanas eso da de 40 a 50 clases, según nuestra cuenta; durante el año escolar el ritmo es de dos por semana.' },
      { q: '¿Cuánto dura el programa de verano?', a: 'Lo que dure su verano: no hay campamento con fecha fija. Proponemos un plan propio de diez semanas como guía. Los cursos cortos, como Scratch o vibe coding para niños, se terminan en ese tiempo; los largos avanzan cerca de la mitad y siguen en marzo.' },
      { q: '¿Es un curso de robótica?', a: 'No. Enseñamos programación, la parte que decide cómo se comporta un robot, y no usamos ni enviamos kits. Los robots de nuestras clases viven en la pantalla, como el de la cuadrícula de esta página. El propio MINEDU, en su documento sobre robótica educativa, presenta al robot como un medio para aprender y no como la meta.' },
      { q: '¿En qué horario puede programar un chico de Los Olivos?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Como el reloj indio le lleva a Perú 10 horas y 30 minutos durante todo el año, una clase a las 9:00 a. m. en Los Olivos es a las 7:30 p. m. para el mentor.' },
      { q: '¿Mi hijo de primaria ya tiene edad para programar?', a: 'Sí. Desde los 6 años se programa arrastrando bloques de colores. Hacia los 9 o 10 casi todos están listos para escribir Python, y los adolescentes de secundaria pueden empezar directamente con Python, Java o el curso con meta PCEP.' },
      { q: '¿Están vinculados a la Fábrica de Programadores del MINEDU?', a: 'No. No tenemos relación con el MINEDU, con la Fábrica de Programadores ni con las universidades o empresas que participan, y no inscribimos a nadie en ese programa. Lo mencionamos porque nombra a colegios de Los Olivos y usa Python y el examen PCEP, igual que uno de nuestros cursos.' },
      { q: '¿Qué necesita mi hijo en casa?', a: 'Basta una laptop o una computadora de escritorio con cámara y micrófono, unos audífonos y un internet que no se corte a mitad de clase. Con un celular se puede mirar, pero no programar con comodidad.' },
      { q: '¿Cuánto cuesta el verano?', a: 'En esta página verá la mensualidad del año escolar, de ocho clases, en dólares estadounidenses. La tarifa del verano, con cuatro o cinco clases por semana, se acuerda con el mentor antes de empezar. Se paga con tarjeta y la clase gratis no la pide.' },
      { q: '¿Recibe mi hijo un certificado?', a: 'Sí, al completar un curso le damos un certificado de finalización con el nombre de Modern Age Coders, que es quien lo firma. No es un certificado del MINEDU ni del sistema educativo peruano, y no otorga notas para el colegio.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Para seguir leyendo',
    h2: 'Otras páginas para familias de Lima Norte',
    lede: 'Unas en castellano, otras en inglés, todas útiles para planificar el año.',
    items: [
      { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños de primaria', p: 'Qué enseña la primaria, a qué edad empezar y una clase de ejemplo con un juego de colores.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Nuestra página nacional: cursos por edad y el sistema escolar peruano en una tabla.' },
      { href: '/english-medium-coding-classes-lima', label: 'English-medium coding classes in Lima', p: 'Para familias de colegios bilingües y de Bachillerato Internacional en Lima.' },
      { href: '/online-coding-summer-camp', label: 'Online coding summer camp', p: 'Cómo planteamos el verano de programación en otros países, en inglés.' },
      { href: '/ai-tools-age-guide', label: 'AI tool age guide', p: 'Qué herramientas de inteligencia artificial permite cada edad.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Cómo es una clase en vivo con nosotros, paso a paso.' }
    ]
  },

  start: {
    h2: 'Reserve la primera clase del verano',
    lede: 'En la clase gratis el mentor saluda a su hijo en un inglés sencillo, le propone mover un personaje o un robot en la pantalla y mira cómo razona. Con eso le sugerimos Verano Python e IA o un curso a la carta, el formato y cuántas clases por semana tomar, y se conversa la tarifa del verano, sin ningún compromiso.',
    readFirst: 'Si prefiere leer antes de reservar, tiene <a class="ag-inline-link" href="/how-we-teach">How we teach</a>, que cuenta cómo son nuestras clases en vivo, y <a class="ag-inline-link" href="/courses">All courses</a>, con el catálogo entero; ambas están escritas en inglés.',
    note: 'Enseñamos solo en inglés y siempre en vivo, con mentores que viven en la India. Por WhatsApp, en cambio, puede escribirnos en castellano.',
    formNote: 'Gratis, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Cursos de verano', links: [
        { href: '/courses/python-ai-kids-masterclass', label: 'Python e IA para niños' },
        { href: '/courses/python-complete-masterclass-teens', label: 'Python para adolescentes' },
        { href: '/courses/pcep-pcap-python-certification-course', label: 'Python con meta PCEP' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Para familias', links: [
        { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños en inglés' },
        { href: '/coding-and-ai-classes-in-peru', label: 'Nuestras clases en Perú' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: 'Mirar antes de avanzar'
  },

  personalityCss: `
.ag-root.ag-vupo .ag-hero h1 { letter-spacing: -0.01em; max-width: 21ch; }
.ag-root.ag-vupo .ag-capsule { border-left-width: 6px; }
.ag-root.ag-vupo .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-vupo .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-vupo .ag-steps li { line-height: 1.62; }
.ag-root.ag-vupo #verano .ag-grid-2 > div { border-left: 6px solid var(--ag-accent); border-radius: 4px; padding: 20px 22px; background: var(--ag-accent-soft); }
.ag-root.ag-vupo #verano .ag-grid-2 h3 { color: var(--ag-accent); margin-top: 0; letter-spacing: 0.01em; }
`,

  dossier: {
    curriculumAuthority: 'Summer offer per owner 2026-11-10 (two options, 4 to 5 classes a week; course durations from our own course pages; arithmetic ours). INEI Censos Nacionales 2025 (Lima Metropolitana tabulado, Cuadros N.° 1 and 3); MINEDU press note on Fábrica de Programadores (24 July 2025), DITE robotics paper, Hackathon 2025 note, RM 501-2025-MINEDU (Tabla 1, checked by eye), 14 October 2026 materials note; EF EPI 2025 Peru page; INEI Boletín TIC II trimestre 2026; tzdata and INACAL. No Municipalidad de Los Olivos summer source found on gob.pe on 9 November 2026, so the page says nothing about municipal programmes. The robot example, the summer plan and the progress signals are our own.',
    localProject: 'A virtual robot for a child of 10 to 12 in Los Olivos, where robotics is the summer word: a 5 by 5 board, a heading 0 to 3 turned with % 4 and a string of commands FFRFFFLFFF; Version 1 ends at End: (3, 5), off the board; Version 2 checks 0 <= ny <= 4 before moving, prints Wall! I stay at (3, 4) and ends at End: (3, 4). Run with python3 -I. Lesson family: state (position and heading) updated by commands, with a wall check.',
    requiredMentions: ['End: (3, 5)', 'Censados de 6 a 11 años', 'Wall! I stay at (3, 4)', 'Where is the board?', '27,111 niños de 6 a 11 años', 'pertenecen a colegios de Los Olivos, Rímac, San Martín de Porres, Comas, Carabayllo, Puente Piedra, Santa Rosa y Ancón', 'desde el año 1996 con el proyecto Infoescuela', 'el duodécimo distrito más poblado de los 43 de Lima Metropolitana', 'Mirar antes de avanzar', 'Nuestro plan sugerido'],
    sources: [
      { claim: 'Los Olivos 362,039 inhabitants (población total), censada 343,232, of whom 27,111 aged 6 to 11 and 29,304 aged 12 to 17; the other Lima Norte districts; Lima Metropolitana 10,141,775.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/27/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Fábrica de Programadores: 1000 students of 4.° and 5.° secundaria in Lima Norte, schools in Los Olivos and seven other districts, Python, PCEP, UNI and UPN, Cisco, pilot to replicate nationally (24 July 2025).', url: 'https://www.gob.pe/institucion/minedu/noticias/1214050-minedu-impulsa-iniciativa-fabrica-de-programadores-para-formar-a-escolares-con-certificacion-internacional-en-programacion' },
      { claim: 'Robotics as a means, not a goal; Infoescuela from 1996; LEGO WeDo kits to almost all public primaria schools in 2009 and 2010.', url: 'https://cdn.www.gob.pe/uploads/document/file/8182643/6842169-minedu-robotica.pdf' },
      { claim: 'Hackathon 2025: projects in AI and robotics; female participation up 28 % between 2023 and 2025.', url: 'https://www.gob.pe/institucion/minedu/noticias/1220955-minedu-premia-el-talento-estudiantil-y-docente-por-innovar-con-inteligencia-artificial-y-robotica-en-hackathon-2025' },
      { claim: '2026 school year: 36 teaching weeks, 16 March to 18 December 2026.', url: 'https://cdn.www.gob.pe/uploads/document/file/8968298/7380466-rm-n-501-2025-minedu.pdf' },
      { claim: '13.3 million units of materials for the 2027 school year (14 October 2026).', url: 'https://www.gob.pe/institucion/minedu/noticias/1456889-minedu-inicia-distribucion-de-materiales-educativos-para-el-ano-escolar-2027' },
      { claim: 'Lima Metropolitana households with internet 84.7 %, households with a computer 36.4 % nationally (II trimestre 2026).', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'EF EPI 2025: Lima 555 (high), Peru 519.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 with no DST; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Any municipal summer programme in Los Olivos: no Municipalidad de Los Olivos note was found on gob.pe on 9 November 2026 and its own site timed out, so the page says nothing about it.',
      'A typed summer price, a fixed camp start date, or a promise that a long course ends in the summer: refused; the summer pace and fee are agreed with the mentor, and the ten-week plan and class counts are labelled ours.',
      'Any link to the Fábrica de Programadores, MINEDU, UNI, UPN or Cisco: none; the page says we are not connected and enrol nobody.',
      'Robot kits or hardware: none; the robot is simulated in Python.',
      'A sum of the Lima Norte district populations: refused; each district is shown as INEI publishes it.',
      'Traffic or commute times across Lima: no figure used.',
      'Spanish-language teaching: refused; the capsule and an FAQ say the classes are in English only.'
    ]
  }
};
