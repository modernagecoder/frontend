// SHIP: district (vacaciones útiles) | Peru's largest district: Python e IA or any course, 4-5 a week, no trip | sets: duplicates vanish; intersection, difference and union of two lists
'use strict';
// Vacaciones útiles de programación en San Juan de Lurigancho (ag- Spanish district door, Peru cluster row PE197, P2,
// hubGroup lima). Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief
// docs/superpowers/plans/2026-11-09-pe-writer-brief.md, section "Summer offer (owner 2026-11-10)", reworked 10 November 2026:
// option A = Summer Python and AI (python-ai-kids-masterclass; teens python-complete-masterclass-teens, ai-ml-masterclass-teens),
// option B = any catalogue course (Scratch, web, apps, DSA, Java, JavaScript, Roblox, maths...), both live, online and in
// English, 4 to 5 classes a week, group or one to one, flexible hours; the fee for that pace is agreed with the mentor before
// starting; first class free; no summer price typed. The old six-week, two-a-week plan became a ten-week plan at 4 to 5 a
// week. Every verified fact, source and the sets lesson are kept.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only; no soles, no typed figure, no camp figure.
// Angle: the parent in San Juan de Lurigancho (SJL) who types "vacaciones útiles San Juan de Lurigancho" in December. Spine:
// SJL is the most populous district in Peru (INEI Censos 2025), so the numbers of children are large; what the
// municipality itself published about its summer workshops (gob.pe, its own pages); when the 2026 school year ends and
// what is still unknown about 2027; why a class at home avoids crossing Lima; our own six-week summer plan; one original
// Python lesson (two siblings compare their summer lists with sets); flexible hours. No income or class assumptions about the district.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/vacaciones-utiles-de-programacion-
// san-juan-de-lurigancho-lima/, fetched 8 and 9 November 2026 with curl -sL -A "Mozilla/5.0"; quotes grepped in the raw):
//  INEI, Censos Nacionales 2025, Indicadores demográficos, Lima Metropolitana workbook (tabulados/27/poblacion/
//    Indicadores_demograficos.xlsx, same bytes 856800 as the saved copy), CUADRO N°1: "DISTRITO SAN JUAN DE LURIGANCHO |
//    1176422 | ... | 1124772 | ... | 51650"; "LIMA METROPOLITANA | 10141775"; CUADRO N°3 (población censada por grupo de
//    edad): "DISTRITO SAN JUAN DE LURIGANCHO | 1124772 | 72722 | 107050 | 110134 | 218396 | 283184 | 189148 | 144138",
//    "LIMA METROPOLITANA | 9600043 | 555239 | 818096 | 867253 | 1800348 | 2322499 | 1744864 | 1491744"; header "De 6 a 11
//    años", "De 12 a 17 años"; note "Los datos censales se han actualizado al 15 de julio del año 2026".
//  INEI, national workbook (tabulados/00, ind_00.xlsx) CUADRO N° 1: "PERÚ | 34157732"; 1,893 "DISTRITO" rows, of which SJL
//    (1176422) is the largest, then San Martín de Porres 764012 and Ate 702531 (our sort of the published rows).
//  Municipalidad Distrital de San Juan de Lurigancho on gob.pe (its own institutional pages):
//    https://www.gob.pe/institucion/munisanjuandelurigancho/noticias/754919-... (4 March 2023): "Cerca de 1,500 niños, niñas
//    y jóvenes, aprovecharon el verano en nuestras seis sedes"; "organizó durante el verano talleres en 14 disciplinas:
//    fútbol, karate, ballet, ajedrez, inglés, coro, dibujo, teatro, canto, guitarra, caporales, marinera, vóley y básquet".
//    Campaign page "¡Presentamos nuestros Talleres de Verano 2024!" (campañas/48662, body empty, "Último cambio 08 julio
//    2026"). Names of officials and guests on the 2023 note are left out on purpose (no political names).
//  RM 501-2025-MINEDU, Norma Técnica para el Año Escolar 2026, page 7 (checked by eye, rm501-2025-page11.png): "treinta y seis
//    (36) semanas lectivas y ocho (08) semanas de gestión"; "Cuarto bloque de semanas lectivas 09 semanas Del 19 octubre a 18
//    de diciembre"; "Quinto bloque de semanas de gestión 02 semanas Del 21 al 31 de diciembre"; "Primer bloque de semanas de
//    gestión 02 semanas Del 2 al 13 de marzo"; "Del 16 marzo al 15 de mayo".
//  gob.pe search of MINEDU's legal norms for "norma técnica año escolar 2027", run 9 November 2026 (saved html): returns the
//    2025 and 2026 norms (556-2024 and 501-2025) and no 2027 norm. FACTS.md 28: MINEDU began dispatching materials "para el
//    año escolar 2027" on 14 October 2026.
//  INEI, Estadísticas de las TIC en los Hogares, II Trimestre 2026 (inei_tic_iit2026.txt): "en Lima Metropolitana, el 84,7%
//    de los hogares disponía del servicio"; "Este porcentaje alcanzó el 53,3% en Lima Metropolitana" (computer); "el 74,3%
//    cuenta con una sola unidad"; footnote "Lima Metropolitana incluye la Provincia Constitucional del Callao".
//  EF EPI 2025 Peru page (MARKET 1.3): Lima 555, band "high" from 550.
//  Time (timezone.tsv): America/Lima UTC-5 all year, no DST since 1994; Asia/Kolkata UTC+5:30; India 10 h 30 min ahead.
// Our own calculations (python3 -I): 1176422 / 10141775 = 11.6 % of Lima Metropolitana; 107050 / 818096 = 13.1 % of Lima
//    Metropolitana's censused children aged 6 to 11; 107050 / 1124772 = 9.5 % and 110134 / 1124772 = 9.8 % of SJL's
//    censused population; 51650 / 1176422 = 4.4 % omitted. Summer plan (ours): two weeks x 4 to 5 = 8 to 10 classes per
//    block; cumulative 8-10, 16-20, 24-30, 32-40, 40-50 over ten weeks; a 10 to 12 month course at 2 a week is about 80 to
//    100 classes, so ten summer weeks cover about half.
// Our own example (conjuntos.py in the src-pages folder), run with python3 -I, exact output:
//    Lucia wrote 5 items but has 4 different ones / Both like: ['english', 'football'] / Only Lucia: ['chess', 'drawing'] /
//    Together: 6 different activities. The activities echo the municipal 2023 list (ajedrez, fútbol, dibujo, inglés, teatro,
//    guitarra); Lucía and Mateo are invented. Changed from a Caesar cipher on 9 Nov 2026 because the Jesús María sibling uses one.
// Neighbouring districts named in plain text only (Comas, Independencia, Rímac, El Agustino, Lurigancho, Carabayllo).
// Lesson family: sets; duplicates disappear, and & (both), - (only one) and | (either) compare two lists.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  "lucia = ['chess', 'football', 'drawing', 'english', 'football']",
  "mateo = ['football', 'guitar', 'english', 'theatre']",
  '',
  'lucia_set = set(lucia)',
  'mateo_set = set(mateo)',
  '',
  "print('Lucia wrote', len(lucia), 'items but has', len(lucia_set), 'different ones')",
  "print('Both like:', sorted(lucia_set & mateo_set))",
  "print('Only Lucia:', sorted(lucia_set - mateo_set))",
  "print('Together:', len(lucia_set | mateo_set), 'different activities')"
].join('\n');

const OUT = [
  'Lucia wrote 5 items but has 4 different ones',
  "Both like: ['english', 'football']",
  "Only Lucia: ['chess', 'drawing']",
  'Together: 6 different activities'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'lima', label: 'Vacaciones útiles en San Juan de Lurigancho' },
  slug: 'vacaciones-utiles-de-programacion-san-juan-de-lurigancho-lima',
  code: 'vups',
  accent: '#516000',
  accentRationale: 'San Juan de Lurigancho: a dry olive #516000, the colour of the cerros that close the valley on its eastern side, kept apart from the greens of the other Lima district pages; allocated in alloc.tsv (contrast 5.64 on the paper #FBF8F2) and checked above 4.5 on every paper tint by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Vacaciones útiles de programación en San Juan de Lurigancho',
  title: 'Vacaciones útiles de programación en San Juan de Lurigancho',
  description: 'Vacaciones útiles en San Juan de Lurigancho: Python e IA o el curso que elija, de 4 a 5 clases por semana, en vivo, en línea y en inglés, desde su casa.',
  ogDescription: 'Un verano de programación para San Juan de Lurigancho sin cruzar Lima: Python e IA o el curso que elija, cuatro o cinco clases por semana, un plan de diez semanas y un reto en Python.',
  twitterDescription: 'San Juan de Lurigancho: verano de Python e IA o del curso que elija, de 4 a 5 clases por semana, en vivo y en inglés.',
  pageName: 'Vacaciones útiles de programación en San Juan de Lurigancho',
  webPageDescription: 'Guía para familias de San Juan de Lurigancho que buscan vacaciones útiles de programación: población del distrito por edades según los Censos Nacionales 2025 del INEI, lo que la municipalidad publicó sobre sus talleres de verano, el calendario escolar 2026 del MINEDU, el acceso a internet en Lima Metropolitana según el INEI, las dos opciones de verano (Python e IA o un curso a elección) a cuatro o cinco clases por semana, un plan de diez semanas propio y un ejercicio de Python escrito por nosotros.',
  courseDescription: 'Verano de programación para niños de 6 a 12 años y adolescentes de San Juan de Lurigancho, en vivo, en línea y solo en inglés: Python e IA de verano o cualquier curso del catálogo, de 4 a 5 clases por semana, en clase grupal o individual y a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Vacaciones útiles, San Juan de Lurigancho',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#rutas', label: 'Dos opciones' },
    { href: '#plan', label: 'Plan de diez semanas' },
    { href: '#distrito', label: 'El distrito' },
    { href: '#calendario', label: 'Fechas' },
    { href: '#reto', label: 'Reto en Python' }
  ],
  eyebrow: 'Lima &middot; San Juan de Lurigancho &middot; Verano 2027',
  h1: 'Vacaciones útiles de programación en San Juan de Lurigancho',
  lede: 'San Juan de Lurigancho es el distrito con más habitantes del Perú y, por eso mismo, uno de los que más familias tienen buscando qué hacer con los meses sin colegio. Esta guía le muestra un verano de programación sin salir de casa: Python e IA o el curso que su hijo escoja, de cuatro a cinco sesiones semanales guiadas por un mentor en vivo, y un proyecto terminado para enseñar en marzo.',
  secondaryCta: { href: '#plan', label: 'Ver el plan de diez semanas' },
  wa: 'Hola Modern Age Coders, somos de San Juan de Lurigancho y buscamos clases de programación para las vacaciones. ¿Podemos reservar una clase gratis?',
  heroNote: 'Enseñamos en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; un solo mentor por curso, que le habla a su hijo en inglés',
  spec: [
    ['Para quién', 'Niños de 6 a 12 años y adolescentes de 1° a 5° de secundaria'],
    ['Dónde', 'En su casa, en San Juan de Lurigancho, por videollamada'],
    ['Ritmo y comienzo', 'De 4 a 5 clases por semana, desde la semana del verano que usted elija'],
    ['Formato', 'Clase grupal de quince a veinte, o clases individuales'],
    ['Opciones', 'Python e IA de verano, o cualquier curso del catálogo'],
    ['Primera clase', 'Gratis, sin tarjeta y sin compromiso']
  ],
  capsuleQ: 'En pocas palabras',
  capsule: 'Sí: su hijo puede programar estas vacaciones sin salir de San Juan de Lurigancho, con dos opciones. La A es Python e IA de verano: Python desde cero y después proyectos de inteligencia artificial para su edad. La B es el curso que su hijo elija, desde Scratch hasta desarrollo web, apps o algoritmos. Modern Age Coders dicta las clases en vivo, en línea y en inglés, de 4 a 5 clases por semana, con un mentor en la India. En grupo o individual, a la hora que usted escoja; el precio de ese ritmo se acuerda con el mentor y la clase de prueba es gratis.',

  picks: {
    eyebrow: 'Para empezar este verano',
    h2: '¿Con qué curso conviene arrancar unas vacaciones intensivas?',
    lede: 'Dos cursos de la opción A, uno para primaria y otro para secundaria, y uno breve de la opción B que se puede terminar antes de que vuelva el colegio.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'VUPS / 01', title: 'Opción A: Python e IA para niños', alt: 'Imagen del curso de Python e IA para niños', note: 'Para chicos que ya terminaron 3° o 4° de primaria. Primeras líneas de código escritas a mano, juegos de preguntas, dibujos y proyectos con inteligencia artificial, como el ejercicio de los dos hermanos de esta página. En un verano intensivo se avanza la mitad o algo más.' },
      { course: 'ai-ml-masterclass-teens', code: 'VUPS / 02', title: 'Opción A: IA para adolescentes', alt: 'Imagen del curso de inteligencia artificial y aprendizaje automático para adolescentes', note: 'Para secundaria, después de las bases de Python. Datos reales, modelos que aprenden y la pregunta que importa: cómo saber si el modelo se equivoca.' },
      { course: 'scratch-programming-complete-course', code: 'VUPS / 03', title: 'Opción B: Scratch completo', alt: 'Imagen del curso de Scratch para niños', note: 'Para niños que empiezan. Un personaje, un escenario y bloques que encajan; a cuatro o cinco clases por semana, es de los cursos que se pueden cerrar dentro de las vacaciones.' }
    ]
  },

  sections: [
    {
      id: 'rutas',
      eyebrow: 'Verano 2027 en casa',
      h2: '¿Qué opciones de verano hay para un chico de San Juan de Lurigancho?',
      lede: 'Dos, y en las dos sube el ritmo: de las dos clases semanales del año escolar se pasa a cuatro o cinco, para que los meses sin colegio dejen algo terminado.',
      body: [
        { kind: 'two',
          leftH3: 'Opción A: Python e IA de verano',
          left: [
            '<strong>Nuestra recomendación de partida.</strong> El chico escribe Python a mano desde la primera clase, sin atajos, y cuando ya domina variables, bucles y funciones lo usa en proyectos de inteligencia artificial que corresponden a su edad.',
            'En primaria va con el curso de Python e IA para niños. En secundaria arranca con <a class="ag-inline-link" href="/courses/python-complete-masterclass-teens">Python para adolescentes</a> y continúa con IA y aprendizaje automático o, desde los 14 años, ciencia de datos. Ninguna herramienta de IA que la edad del chico no permita entra en clase.'
          ],
          rightH3: 'Opción B: un curso a su elección',
          right: [
            '<strong>Para el que ya tiene algo en mente.</strong> Cualquier curso del catálogo se puede llevar a ritmo de verano: Scratch, Minecraft con código, Roblox, una web propia, apps, JavaScript, Java, C++, algoritmos y estructuras de datos (DSA), vibe coding o matemáticas.',
            'Si el curso elegido es breve, el verano puede cerrarlo; si es extenso, deja una buena parte avanzada. El mentor se lo dice con claridad en la clase gratis, antes de que usted decida.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Qué opción va con cada etapa escolar (guía nuestra)', head: ['Etapa escolar', 'Con la opción A', 'Con la opción B, por ejemplo'], rows: [
          ['Primaria, de 6 a 9 años', 'Antes de Python, un tramo de Scratch para aprender a dar órdenes', 'Scratch completo, bloques, Minecraft con código'],
          ['Primaria alta, de 9 a 12 años', 'El curso infantil de Python con IA: juegos primero, modelos sencillos después', 'Roblox con Luau, una web propia, resolver problemas'],
          ['Secundaria, de 12 a 17 años', 'Python para adolescentes, después IA o ciencia de datos', 'JavaScript, Java, algoritmos (DSA), apps con React Native']
        ] },
        { kind: 'source', html: 'Guía nuestra, armada con las edades de los cursos del catálogo; el mentor la ajusta tras la clase gratis.' },
        { kind: 'p', mt: true, html: 'Ninguna de las dos opciones tiene un precio de verano publicado. Cuánto cuestan cuatro o cinco sesiones semanales se conversa con el mentor antes del arranque, y usted resuelve con ese dato; abajo solo aparece, como referencia, la cuota normal del año escolar. La clase de prueba no se cobra.' }
      ]
    },
    {
      id: 'plan',
      eyebrow: 'Nuestro plan de verano',
      h2: '¿Qué aprende un niño en diez semanas de vacaciones con cuatro o cinco clases por semana?',
      lede: 'Lo suficiente para pasar de no saber qué es un bucle a terminar un proyecto propio y, en la opción A, a dar el primer paso en inteligencia artificial. El plan es una propuesta nuestra sin día de arranque común: la familia escoge la semana de inicio y, en marzo, si su hijo sigue al ritmo normal o hace una pausa.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Plan de verano en bloques de dos semanas, a cuatro o cinco clases semanales (propuesta nuestra)', head: ['Semanas', 'Clases acumuladas', 'Niños de 6 a 9 años (Scratch)', 'De 9 a 12 y adolescentes (Python e IA)'], rows: [
          ['1 y 2', '8 a 10', 'Mover un personaje con flechas, contar una historia corta, repetir con bucles', 'Imprimir mensajes, guardar datos en variables, pedir el nombre; bucles for'],
          ['3 y 4', '16 a 20', 'Decidir con si y si no: un juego de atrapar', 'Condiciones if y else, cadenas letra por letra, primeras funciones'],
          ['5 y 6', '24 a 30', 'Puntaje y tiempo: variables en un juego', 'Comparar listas con conjuntos: qué tienen en común dos hermanos'],
          ['7 y 8', '32 a 40', 'Diseñar el juego propio en papel y empezarlo', 'Un primer proyecto de IA con datos propios: un programa que clasifica o que predice'],
          ['9 y 10', '40 a 50', 'Terminar, probar con la familia y presentarlo en inglés', 'Proyecto final, caza de errores y presentación en inglés']
        ] },
        { kind: 'source', html: 'Plan y cuentas nuestros: cada bloque de dos semanas suma de 8 a 10 clases. Si su hijo tomó la opción B y el curso es de los cortos (Scratch, por ejemplo, o la web con HTML y CSS), estas diez semanas pueden cerrarlo. Si eligió uno extenso, de los que en el año escolar se reparten en 10 a 12 meses (unas 80 a 100 clases), el verano cubre más o menos la mitad y lo demás continúa en marzo. No hay fecha de inicio común.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Una sesión de prueba sin costo.</strong> Con un par de preguntas y un ejercicio corto, el mentor ve si a su hijo le conviene arrancar con Scratch o directamente con Python.',
          '<strong>Elegir opción, formato y ritmo.</strong> A o B; clase grupal con chicos de edad parecida o clases individuales; cuatro o cinco clases por semana, a las horas que le acomoden a la familia. Con el mentor se fija también el costo de esa frecuencia.',
          '<strong>Diez semanas de trabajo.</strong> Sesiones cortas casi a diario, con un pequeño reto para practicar entre una y otra, que nunca se resuelve copiando una respuesta.',
          '<strong>Un proyecto terminado.</strong> En el último bloque su hijo presenta lo que construyó y explica en inglés cómo funciona.',
          '<strong>Decidir en marzo.</strong> Seguir con dos clases a la semana durante el colegio, pasar a una frecuencia más suave en clases individuales, o pausar.'
        ] },
        { kind: 'p', mt: true, html: 'Si busca algo para los más chicos, en nuestra guía de <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a> encontrará qué conviene a cada edad de primaria, con otra clase de ejemplo. Y si su familia prefiere leer en inglés, la página <a class="ag-inline-link" href="/english-medium-coding-classes-lima">English-medium coding classes in Lima</a> explica las mismas clases para colegios bilingües.' }
      ]
    },
    {
      id: 'distrito',
      eyebrow: 'El distrito en cifras',
      h2: '¿Es San Juan de Lurigancho el distrito más poblado del Perú?',
      lede: 'Sí. El censo que el INEI levantó en 2025 le cuenta 1,176,422 habitantes, más que a cualquier otro distrito del país, y entre la gente censada aparecen 107,050 niños de 6 a 11 años y 110,134 chicos y chicas de 12 a 17.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'El distrito frente al total de la capital: cifras del censo de 2025', head: ['Concepto', 'San Juan de Lurigancho', 'Lima Metropolitana'], rows: [
          ['Habitantes en total, incluida la población omitida', '1,176,422', '10,141,775'],
          ['Personas efectivamente censadas', '1,124,772', '9,600,043'],
          ['Personas omitidas por el censo', '51,650', '541,732'],
          ['Primera infancia, edades 0 a 5', '72,722', '555,239'],
          ['Edad de primaria, 6 a 11', '107,050', '818,096'],
          ['Edad de secundaria, 12 a 17', '110,134', '867,253'],
          ['Jóvenes, 18 a 29', '218,396', '1,800,348']
        ] },
        { kind: 'source', html: 'Fuente: INEI, hoja de cálculo de indicadores demográficos de Lima Metropolitana de los Censos Nacionales 2025, cuadros 1 y 3, con datos actualizados por el INEI al 15 de julio de 2026; archivo descargado por nosotros el 8 de noviembre de 2026. Las filas por edad salen del cuadro 3, que solo cubre a quienes fueron censados; no las mezclamos con la población omitida.' },
        { kind: 'two', mt: true,
          leftH3: 'El más poblado de los 1,893 distritos',
          left: [
            'En el cuadro nacional del mismo censo hay 1,893 filas de distritos. Al ordenarlas por población, San Juan de Lurigancho queda primero con 1,176,422 habitantes, seguido por San Martín de Porres con 764,012 y Ate con 702,531 (orden nuestro, hecho sobre las cifras publicadas por el INEI).',
            'Dicho de otro modo, más de una de cada diez personas de Lima Metropolitana vive en este distrito: 11,6 % según nuestro cálculo con las cifras del INEI. El dato ayuda a entender por qué en diciembre se llenan tan rápido los cupos de cualquier taller presencial de la zona.'
          ],
          rightH3: 'Niños y adolescentes en edad escolar',
          right: [
            'Los 107,050 niños censados de 6 a 11 años son el 13,1 % de los niños de esa edad en toda Lima Metropolitana (cálculo nuestro). Dentro del distrito, representan el 9,5 % de la población censada, y los adolescentes de 12 a 17 años, el 9,8 %.',
            'Son las edades de primaria y secundaria. Cuando el colegio cierra en diciembre, todos ellos quedan con tiempo libre en las mismas semanas, y eso es justamente lo que una clase en línea permite repartir: cada familia elige su propio día y su propia hora.'
          ] },
        { kind: 'p', mt: true, html: 'Estas cifras describen cuánta gente vive en el distrito y de qué edades; no dicen nada de cómo vive cada familia, y no las usamos para eso. Lo que sí nos dicen es práctico: con más de un millón de vecinos, la distancia entre la casa y el taller suele pesar tanto como el contenido del taller.' }
      ]
    },
    {
      id: 'municipio',
      eyebrow: 'Lo que ofrece el distrito',
      h2: '¿Qué talleres de verano organiza la Municipalidad de San Juan de Lurigancho?',
      lede: 'En sus propias páginas de gob.pe, la Municipalidad Distrital de San Juan de Lurigancho informó que en el verano de 2023 cerca de 1,500 niños, niñas y jóvenes participaron en talleres en seis sedes del distrito, en 14 disciplinas.',
      body: [
        { kind: 'p', html: 'La nota del 4 de marzo de 2023, publicada por la municipalidad al cerrar esos talleres, enumera las disciplinas: fútbol, karate, ballet, ajedrez, inglés, coro, dibujo, teatro, canto, guitarra, caporales, marinera, vóley y básquet. Las seis sedes que nombra son el Complejo Monteverde, el Polideportivo San Carlos, el Complejo Totorita, el Polideportivo El Amauta, el Complejo La 49 de Caja de Agua y el Parque 6 de Campoy. Los talleres los organizó la Subgerencia de Educación, Cultura, Deportes y Juventudes.' },
        { kind: 'p', html: 'Para 2024 la municipalidad mantiene en gob.pe una página de campaña titulada "¡Presentamos nuestros Talleres de Verano 2024!", sin el detalle de disciplinas en el texto. Para el verano de 2027 no encontramos en sus páginas, al 9 de noviembre de 2026, ninguna convocatoria publicada. Si le interesa un taller municipal, conviene consultar directamente a la municipalidad cuando lo anuncie.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Deporte y arte en la sede', p: 'Los talleres municipales que describe la nota de 2023 son de movimiento, música, danza y expresión. Se viven en grupo y en persona, y eso tiene un valor que una pantalla no reemplaza.' },
          { h3: 'Programación desde la casa', p: 'Ninguna de las 14 disciplinas de esa lista es programación. Nuestras clases no compiten con el fútbol ni con la marinera: ocupan otra hora del día y se toman sin moverse de casa.' },
          { h3: 'Sin relación con el municipio', p: 'Modern Age Coders no tiene ningún vínculo con la Municipalidad de San Juan de Lurigancho. Citamos sus páginas solo para que usted vea qué ofrece el distrito y pueda combinarlo como prefiera.' }
        ] },
        { kind: 'p', mt: true, html: 'Muchas familias arman así su verano: un taller presencial en la mañana, cerca de casa, y cuatro o cinco clases de programación a la semana, en la tarde o en la noche. Como las nuestras son en línea y a la hora que usted escoja, no chocan con el horario de ningún taller.' }
      ]
    },
    {
      id: 'calendario',
      eyebrow: 'Fechas',
      h2: '¿Cuándo empiezan las vacaciones útiles 2027?',
      lede: 'En la práctica, el día en que su hijo sale del colegio. Para 2026, el MINEDU dejó la última semana de clases cerrando el 18 de diciembre de 2026, y nuestras clases pueden empezar al día siguiente o en cualquier semana de enero, febrero o marzo de 2027.',
      body: [
        { kind: 'table', numCols: [], caption: 'Inicio y cierre del calendario escolar 2026 en colegios públicos y privados', head: ['Tramo', 'Semanas', 'Fechas de 2026'], rows: [
          ['Gestión de apertura (sin alumnos)', '2', '2 a 13 de marzo'],
          ['Primer tramo de clases', '9', '16 de marzo a 15 de mayo'],
          ['Último tramo de clases', '9', '19 de octubre a 18 de diciembre'],
          ['Gestión de cierre (sin alumnos)', '2', '21 a 31 de diciembre']
        ] },
        { kind: 'source', html: 'Fuente: RM N.° 501-2025-MINEDU, Tabla 1 (página 7 del PDF firmado, que miramos directamente en la imagen escaneada el 9 de noviembre de 2026). La norma establece 36 semanas lectivas y 8 de gestión; las semanas de gestión son para el personal del colegio, no clases. Mostramos solo los bloques del inicio y del cierre; las UGEL pueden fijar una distribución distinta.' },
        { kind: 'two', mt: true,
          leftH3: 'Lo que todavía no se sabe',
          left: [
            'Hasta el 9 de noviembre de 2026, el buscador de normas legales del MINEDU en gob.pe mostraba las reglas de 2025 y de 2026, pero ninguna para 2027. El MINEDU sí informó el 14 de octubre de 2026 que inició el despacho de útiles y textos pensados para 2027.',
            'Por eso esta página no le da una fecha de regreso a clases. Su colegio o su UGEL se la confirmará. Para las clases de programación no importa: se pueden mantener durante el año escolar o pausarse cuando usted lo decida.'
          ],
          rightH3: 'Cómo lo leemos nosotros',
          right: [
            'Si el calendario 2027 se parece al de 2026, que abrió las semanas de gestión el 2 de marzo y las clases el 16 de marzo, el verano escolar dura desde fines de diciembre hasta marzo. Es una lectura nuestra, no un dato oficial para 2027.',
            'En esa ventana caben las diez semanas de nuestro plan, sobre todo si su hijo arranca en la primera quincena de enero. Quien empieza más tarde puede hacer menos semanas o seguir en marzo a dos clases por semana.'
          ] }
      ]
    },
    {
      id: 'en-casa',
      eyebrow: 'Sin salir del distrito',
      h2: '¿Por qué tomar clases de programación en línea desde San Juan de Lurigancho?',
      lede: 'Porque el tiempo de verano rinde más programando que viajando. Desde San Juan de Lurigancho, una academia presencial en otro distrito de Lima suele significar trasladarse con un niño de ida y de vuelta varias veces por semana; en línea, ese tiempo se queda en casa.',
      body: [
        { kind: 'p', html: 'San Juan de Lurigancho limita con Comas, Independencia, Rímac, El Agustino, Lurigancho y Carabayllo, y cualquier academia de los distritos del centro o del sur de Lima queda bastante más lejos. No le vamos a dar cifras de tráfico que no podemos comprobar; usted sabe de sobra cuánto tarda en salir del distrito a la hora en que saldría su hijo. Lo que sí podemos decir es que una clase en línea empieza en el minuto exacto en que su hijo abre la computadora.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'Internet y computadora en los hogares de Lima Metropolitana, II trimestre de 2026 (INEI)', head: ['Indicador', 'Porcentaje', 'Ámbito'], rows: [
          ['Hogares con servicio de internet', '84,7 %', 'Lima Metropolitana (incluye el Callao)'],
          ['Hogares con al menos una computadora', '53,3 %', 'Lima Metropolitana (incluye el Callao)'],
          ['Hogares con computadora que tienen una sola', '74,3 %', 'Todo el país']
        ] },
        { kind: 'source', html: 'Fuente: INEI, "Estadísticas de las Tecnologías de Información y Comunicación en los Hogares", II Trimestre 2026, Encuesta Nacional de Hogares (ENAHO), resultados preliminares; consultado por nosotros el 8 de noviembre de 2026. El INEI no publica estas cifras por distrito; son de toda Lima Metropolitana.' },
        { kind: 'two', mt: true,
          leftH3: 'Una sola máquina para toda la familia',
          left: [
            'Según el mismo boletín del INEI, en el 74,3 % de los hogares del país que tienen computadora hay solo una. En verano es más fácil compartirla: los padres trabajan de día y la clase puede ir temprano en la mañana, a mediodía o en la noche.',
            'Si dos hermanos quieren programar, pueden tomar clases en horarios distintos con la misma máquina. Lo que no recomendamos es programar en el celular: la pantalla es muy pequeña para escribir código.'
          ],
          rightH3: 'Lo que su hijo necesita',
          right: [
            'Basta un equipo de escritorio o portátil que tenga cámara y micrófono, más unos audífonos y un internet que no se corte a cada rato. Todo lo demás es gratuito: en la clase inicial el mentor deja listo Scratch o Python junto con su hijo.',
            'Nada más: no vendemos equipos, no pedimos libros ni materiales, y no hay que trasladarse a ningún local.'
          ] }
      ]
    },
    {
      id: 'reto',
      tint: 'tint',
      eyebrow: 'Un reto de verano',
      h2: '¿Cómo se ve una clase de Python en inglés a los 11 años?',
      lede: 'Un ejemplo de las semanas 5 y 6 del plan. Dos hermanos inventados por nosotros, Lucía y Mateo, anotan en inglés las actividades que quieren hacer este verano, que son casi las mismas que ofreció el municipio en 2023. Con conjuntos de Python, el programa descubre qué comparten, qué quiere solo uno y cuántas actividades distintas suman entre los dos.',
      body: [
        { kind: 'code', label: 'Dos listas de verano en Python', lang: 'Python', code: PY, note: 'Antes de ejecutarlo, el mentor pregunta: "Lucia wrote football twice. How many different activities does she really have?" Su hijo responde primero y después comprueba.' },
        { kind: 'code', label: 'Lo que imprime el programa', lang: 'Salida', code: OUT, note: 'Esto es exactamente lo que devolvió Python 3 cuando corrimos el archivo en nuestra computadora. Usamos <code>sorted</code> para que las listas salgan siempre en orden alfabético.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Los repetidos desaparecen.</strong> Lucía escribió <em>football</em> dos veces. Su lista tiene 5 elementos, pero al convertirla en conjunto con <code>set</code> quedan 4: un conjunto no guarda nada repetido.',
          '<strong>Lo que tienen en común.</strong> El símbolo <code>&amp;</code> se lee "and": deja solo lo que está en las dos listas. Los hermanos comparten <em>english</em> y <em>football</em>, así que pueden tomar esos talleres juntos.',
          '<strong>Lo que es solo de uno.</strong> Con <code>-</code> se resta: lo de Lucía menos lo de Mateo da <em>chess</em> y <em>drawing</em>. El reto es escribir la línea que muestre lo que solo quiere Mateo y predecir su resultado antes de correrla.',
          '<strong>Todo junto.</strong> El símbolo <code>|</code> une las dos listas sin repetir. Cuatro actividades de Lucía y cuatro de Mateo no dan ocho, dan seis, porque dos se cuentan una sola vez. Es la misma idea de los diagramas de Venn que se ven en Matemática.',
          '<strong>Con sus propios datos.</strong> Su hijo arma dos listas reales, la suya y la de un primo o un amigo, y explica en inglés qué descubrió: "We both like football, but only I like chess".'
        ] },
        { kind: 'p', mt: true, html: 'Los conjuntos no son el objetivo. Lo que se queda es la forma de pensar: contar a mano antes de que cuente la computadora, notar que 4 más 4 no siempre es 8 y explicar con una frase por qué. Un niño que aprende así no necesita copiar una respuesta de internet ni de una herramienta de IA, porque sabe llegar a ella y sabe revisarla.' }
      ]
    },
    {
      id: 'ingles',
      eyebrow: 'Clases en inglés',
      h2: '¿Las vacaciones útiles en inglés sirven si mi hijo no habla inglés?',
      lede: 'Sí. El punto de partida no es el idioma sino las ganas de escuchar e intentarlo. El mentor usa frases cortas, vuelve a explicar de otra manera cuando hace falta y escribe en pantalla cada palabra clave.',
      body: [
        { kind: 'p', html: 'El verano es un buen momento para esta mezcla, porque no hay tareas ni exámenes que le roben la cabeza. Con cuatro o cinco clases por semana, un chico que nunca habló inglés en voz alta aprende pronto a decir qué quiere que haga su programa, a preguntar por qué no funciona y a explicar lo que cambió. Es inglés usado para algo, no repetido de memoria.' },
        { kind: 'p', html: 'El índice EF EPI 2025 de EF Education First ubica a Lima en el nivel "alto" de dominio del inglés, con 555 puntos, el único nivel alto entre las ciudades peruanas medidas. Ese índice se basa en adultos que rinden la prueba de EF, no en niños, pero muestra que en Lima el inglés ya es parte de la vida de mucha gente. Para un niño de San Juan de Lurigancho, practicarlo cada semana con un mentor es una ventaja que se suma a la programación.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Avance',
    h2: '¿Cómo saber si el verano rindió?',
    lede: 'Cuatro señales propias con las que el mentor le resume, al cerrar el plan de verano, lo que su hijo ya domina.',
    table: { caption: 'Cuatro señales de avance al terminar el verano (nuestras)', head: ['Señal', 'Qué se ve en la clase', 'Qué puede mostrarle a usted'], rows: [
      ['1. Predice', 'Dice qué va a pasar antes de ejecutar el programa', 'Le explica qué hará su juego antes de abrirlo'],
      ['2. Revisa la cuenta', 'Nota que algo se repite o se cuenta dos veces', 'Le muestra un error que encontró él mismo'],
      ['3. Construye', 'Termina un proyecto propio de principio a fin', 'Le presenta el juego o la herramienta terminada'],
      ['4. Explica en inglés', 'Cuenta en una o dos frases cómo funciona', 'Repite esa explicación para usted en casa']
    ] },
    left: { h3: 'Para madres y padres', ps: [
      'El termómetro del verano no son las horas de pantalla, sino lo que su hijo es capaz de contarle. Si le explica su proyecto, aunque mezcle castellano e inglés, el verano rindió.',
      'Las primeras dos semanas son las más difíciles: acento nuevo, herramientas nuevas, errores. Es normal y se pasa.'
    ] },
    right: { h3: 'Para los chicos', ps: [
      'Cuando el programa falle, lea el mensaje de error con calma antes de cambiar nada.',
      'Pruebe siempre el caso más raro que se le ocurra. Ahí suelen esconderse los errores.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más opciones',
    h2: '¿Qué otros cursos se pueden tomar en verano?',
    lede: 'Nueve ideas más para la opción B. Todas se dictan en vivo y en inglés con un mentor fijo, aceptan el ritmo de verano y siguen cuando vuelve el colegio.',
    bands: [
      { num: 'I', h3: 'Los más pequeños', sub: 'De 6 a 9 años', courses: [
        { code: 'VUPS / CHICOS / 01', slug: 'kids-coding-blocks-masterclass', title: 'Programación con bloques', blurb: 'Juegos, historias y apps sencillas con bloques que se arrastran.' },
        { code: 'VUPS / CHICOS / 02', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Pensar antes de programar', blurb: 'Patrones, orden y acertijos para entrenar la lógica de los más chicos.' },
        { code: 'VUPS / CHICOS / 03', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft con código', blurb: 'Construir y automatizar en un mundo que su hijo ya conoce.' }
      ] },
      { num: 'II', h3: 'Juegos, web y lógica', sub: 'De 9 a 12 años', courses: [
        { code: 'VUPS / JUEGOS / 01', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Juegos en Roblox', blurb: 'Obstáculos, puntajes y tiendas programados en Luau dentro de Roblox Studio.' },
        { code: 'VUPS / JUEGOS / 02', slug: 'kids-ai-web-development-course', title: 'Una web propia', blurb: 'Su hijo diseña, escribe y sube a internet un sitio hecho por él.' },
        { code: 'VUPS / JUEGOS / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Resolver problemas', blurb: 'Pensamiento computacional con retos que se resuelven paso a paso.' }
      ] },
      { num: 'III', h3: 'Secundaria', sub: 'De 13 a 18 años', courses: [
        { code: 'VUPS / SEC / 01', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript para adolescentes', blurb: 'Páginas interactivas y juegos en el navegador desde la primera clase.' },
        { code: 'VUPS / SEC / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algoritmos y estructuras de datos', blurb: 'Pilas, colas, búsquedas y la forma de elegir entre ellas.' },
        { code: 'VUPS / SEC / 03', slug: 'java-programming-masterclass-for-teens', title: 'Java en secundaria', blurb: 'Clases, objetos y proyectos grandes, el lenguaje de muchas universidades.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo se organizan las clases en verano?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Temprano', l: 'Antes del taller del municipio o de salir al parque.' },
      { time: 'Después del almuerzo', l: 'Cuando el calor de enero invita a quedarse en casa.' },
      { time: 'En la noche', l: 'Para quien pasa el día fuera y programa al volver.' }
    ],
    cells: [
      { h3: 'Mentor de principio a fin', p: 'La misma persona dicta todo el curso y conoce cómo piensa su hijo.' },
      { h3: 'Pantalla compartida', p: 'El mentor ve el código del niño en el momento y lo guía sin teclear por él.' },
      { h3: 'Retos entre clases', p: 'Un ejercicio corto para practicar, pensado para resolverse sin copiar.' },
      { h3: 'Un informe breve', p: 'Le contamos qué se trabajó y qué viene en la siguiente clase.' },
      { h3: 'Pago mensual', p: 'Sin matrícula anual: continúa o se detiene cuando usted lo decida.' },
      { h3: 'En grupo o a solas', p: 'Un grupo de quince a veinte chicos de su misma edad, o una clase donde el mentor atiende solo a su hijo.' }
    ]
  },

  projectsH2: 'Proyectos de estudiantes que empezaron como su hijo',
  projectsLede: 'Lo que arma un niño en un verano es el primer paso; abajo hay proyectos de estudiantes con más camino recorrido, y muchos más en <a class="ag-inline-link" href="/student-labs">Student labs</a> (en inglés).',
  reviewsLede: 'Opiniones que familias y alumnos de varios países publicaron en Google; las dejamos en su idioma original, el inglés.',

  fees: {
    h2: '¿Cuánto cuestan las clases de verano?',
    lede: 'Las cifras de esta sección corresponden a la mensualidad estándar del año escolar, que incluye ocho clases. Para el verano, con cuatro o cinco clases cada semana, el mentor le comunica la tarifa antes de la primera clase y usted decide sin presión; no hay matrícula. Verá todo expresado en dólares de Estados Unidos; el cobro va a su tarjeta y el banco emisor lo pasa a soles al cambio vigente.',
    free: ['Una clase de prueba completa', 'El mentor recomienda por dónde empezar', 'Sin tarjeta ni compromiso'],
    group: ['Quince a veinte chicos de edad parecida', 'Mismo mentor durante todo el curso', 'Precio mostrado: ocho clases al mes', 'Verano: de 4 a 5 clases semanales'],
    one: ['Solo su hijo y el mentor', 'El plan de verano a su medida', 'Días y horas que usted elija']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Vacaciones útiles de programación en San Juan de Lurigancho: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No, se dictan únicamente en inglés, en vivo y por internet. Lejos de ser un obstáculo, para muchas familias es la razón de inscribirse: en una sola hora su hijo programa y además gana práctica oral con un idioma que en Lima ya pesa mucho (el índice EF EPI 2025 le da a la ciudad 555 puntos, nivel alto). El mentor ajusta su velocidad y su acento a cada chico.' },
      { q: '¿Hay que ir a alguna sede en San Juan de Lurigancho?', a: 'No hay sede a la que ir, ni en el distrito ni en otra parte del país. Su hijo se conecta desde la sala o el cuarto de su casa y el mentor lo recibe por videollamada desde la India, así que el traslado simplemente desaparece.' },
      { q: '¿En qué fecha arrancan estas vacaciones útiles?', a: 'En la que a usted le acomode, porque cada alumno inicia por separado: se puede arrancar ni bien acabe el colegio, que en 2026 tiene su última semana lectiva hasta el 18 de diciembre según la RM 501-2025-MINEDU, o en cualquier semana de enero, febrero o marzo de 2027.' },
      { q: '¿Cuántas semanas y cuántas clases tiene el verano de programación?', a: 'Proponemos diez semanas a cuatro o cinco clases cada una, que por cuenta nuestra son de 40 a 50 clases; si su hijo empieza tarde, serán menos. Los cursos cortos se completan en ese tiempo; los largos quedan a medio camino y se retoman con el colegio, al ritmo habitual.' },
      { q: '¿Puede elegir un curso distinto de Python e IA?', a: 'Sí, esa es la opción B: cualquier curso del catálogo al ritmo de verano, por ejemplo Scratch, Roblox, una web propia, apps, JavaScript, Java o algoritmos. El mentor le confirma en la clase gratis si el curso encaja con el nivel de su hijo.' },
      { q: '¿A qué hora son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Como la diferencia con la India es fija (allá son diez horas y media más), una clase a las 9:00 a. m. de Lima cae a las 7:30 p. m. para el mentor.' },
      { q: '¿Mi hijo de 6 años ya puede apuntarse?', a: 'Sí: a esa edad trabaja con bloques de colores y personajes de Scratch, casi sin leer. Hacia 4° o 5° de primaria casi todos están listos para escribir Python, y los adolescentes de secundaria tienen cursos propios de Python, JavaScript, Java e inteligencia artificial.' },
      { q: '¿Están vinculados a la Municipalidad de San Juan de Lurigancho?', a: 'No. Somos una academia independiente, ajena a la municipalidad y a sus talleres de verano. En esta página citamos lo que la propia municipalidad publicó en gob.pe sobre sus talleres de 2023, solo como información para las familias.' },
      { q: '¿Qué necesita mi hijo en casa?', a: 'Un equipo con teclado, cámara y micrófono, unos audífonos y buena señal de internet; el celular se queda corto para escribir código. Si en casa hay una sola máquina, dos hermanos pueden turnarse con clases a horas diferentes.' },
      { q: '¿Cuánto cuesta el ritmo de verano y cómo se paga?', a: 'El costo de la frecuencia de verano lo pacta con el mentor al inicio; en la página solo figura la cuota normal, que cubre ocho clases al mes. Se paga con tarjeta en dólares de Estados Unidos y el cambio a soles lo hace su banco. Para la clase de prueba no se le pide ningún dato de pago.' },
      { q: '¿Recibe algún certificado?', a: 'Sí, uno nuestro: cuando completa un curso, Modern Age Coders le entrega una constancia de finalización propia. No es un documento del MINEDU ni tiene valor para las notas del colegio, porque no estamos vinculados a ningún colegio ni al sistema educativo peruano.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Para seguir leyendo',
    h2: 'Otras páginas para su familia',
    lede: 'Más lecturas útiles; las que tienen título en inglés están escritas en ese idioma.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Todo lo que ofrecemos en el Perú, por edades y por materias.' },
      { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños en inglés', p: 'Qué aprende un niño de primaria en cada grado, en castellano.' },
      { href: '/english-medium-coding-classes-lima', label: 'English-medium coding in Lima', p: 'Las mismas clases explicadas para familias de colegios bilingües.' },
      { href: '/ai-tools-age-guide', label: 'AI tool age guide', p: 'Qué herramienta de inteligencia artificial puede usar su hijo según su edad.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Qué pasa minuto a minuto en una sesión con mentor.' },
      { href: '/courses', label: 'All courses', p: 'El catálogo completo, desde primaria hasta la universidad.' }
    ]
  },

  start: {
    h2: 'Reserve la primera clase del verano',
    lede: 'Marque el día y la hora según el reloj de Perú. En esa primera sesión el mentor saluda a su hijo con frases fáciles, le pone un desafío breve y después le sugiere a usted la opción A o B, la modalidad y cuántas clases por semana, con la tarifa de ese ritmo.',
    readFirst: 'Si prefiere informarse primero, revise <a class="ag-inline-link" href="/how-we-teach">How we teach</a>, sobre cómo es una clase, o revisar <a class="ag-inline-link" href="/courses">All courses</a> (ambas en inglés).',
    note: 'Los mentores enseñan desde la India y cada sesión es en inglés. Si nos escribe por WhatsApp, puede hacerlo en castellano sin problema.',
    formNote: 'Gratis, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Cursos de verano', links: [
        { href: '/courses/python-ai-kids-masterclass', label: 'Python e IA para niños' },
        { href: '/courses/ai-ml-masterclass-teens', label: 'IA para adolescentes' },
        { href: '/courses/scratch-programming-complete-course', label: 'Scratch completo' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Para familias', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Clases en el Perú' },
        { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: 'Un verano de código, sin cruzar Lima'
  },

  personalityCss: `
.ag-root.ag-vups .ag-hero h1 { max-width: 20ch; letter-spacing: -0.01em; }
.ag-root.ag-vups .ag-capsule { border-left-width: 6px; }
.ag-root.ag-vups .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-vups .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-vups .ag-steps li { line-height: 1.65; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Indicadores demográficos, Lima Metropolitana and national workbooks, Cuadros 1 and 3, updated 15 July 2026); Municipalidad Distrital de San Juan de Lurigancho on gob.pe (summer workshops note of 4 March 2023, 2024 campaign page); RM 501-2025-MINEDU Tabla 1 (checked by eye); gob.pe search of MINEDU norms on 9 November 2026 (no 2027 norm); INEI ENAHO TIC bulletin II trimestre 2026; EF EPI 2025; tzdata. The two summer options as presented, the stage table, the ten-week plan at 4 to 5 classes a week with its cumulative counts, the four signals and the sets exercise are our own.',
    localProject: 'Two summer lists for a child of 11 in San Juan de Lurigancho: Lucía and Mateo (invented) write the activities they want, echoing the municipal 2023 list; set() removes Lucía\'s repeated football (5 items, 4 different), & gives [\'english\', \'football\'], - gives [\'chess\', \'drawing\'], and | gives 6 different activities, not 8. Run with python3 -I. Lesson family: sets; duplicates vanish, intersection, difference and union.',
    requiredMentions: ['Lucia wrote 5 items but has 4 different ones', 'Together: 6 different activities', '1,176,422', '107,050 niños de 6 a 11 años', 'El más poblado de los 1,893 distritos', 'Complejo La 49 de Caja de Agua', 'cerca de 1,500 niños, niñas y jóvenes', 'Un verano de código, sin cruzar Lima', 'Plan de verano en bloques de dos semanas', '13,1 % de los niños de esa edad'],
    sources: [
      { claim: 'SJL population 1,176,422 (total), 1,124,772 censused, 51,650 omitted; age groups 6 to 11 and 12 to 17; Lima Metropolitana totals (Censos Nacionales 2025).', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/27/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'SJL is the largest of the 1,893 district rows in the national table (Censos Nacionales 2025).', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Summer 2023 municipal workshops: about 1,500 children and young people, six venues, 14 disciplines.', url: 'https://www.gob.pe/institucion/munisanjuandelurigancho/noticias/754919-el-leon-carlos-zambrano-causa-sensacion-en-clausura-de-talleres-de-la-municipalidad-de-sjl' },
      { claim: 'Municipal campaign page for the 2024 summer workshops.', url: 'https://www.gob.pe/institucion/munisanjuandelurigancho/campa%C3%B1as/48662-presentamos-nuestros-talleres-de-verano-2024' },
      { claim: '2026 school calendar: last teaching block to 18 December, management weeks 21 to 31 December, year opened 2 and 16 March.', url: 'https://cdn.www.gob.pe/uploads/document/file/8968298/7380466-rm-n-501-2025-minedu.pdf' },
      { claim: 'Materials dispatched for the 2027 school year from 14 October 2026.', url: 'https://www.gob.pe/institucion/minedu/noticias/1456889-minedu-inicia-distribucion-de-materiales-educativos-para-el-ano-escolar-2027' },
      { claim: 'Lima Metropolitana households: internet 84.7%, computer 53.3%; 74.3% of computer households have one (II trimestre 2026).', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'EF EPI 2025: Lima 555, high band.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' }
    ],
    rejectedClaims: [
      'Spanish-language teaching: refused; every class is live, online and in English only, said in the capsule and in an FAQ.',
      'A typed summer price, a common start date or a long course finished in one summer: refused; the 4 to 5 classes a week fee is agreed with the mentor, the ten-week plan and its counts are labelled ours.',
      'A 2027 school start date: refused; no 2027 norm was found on gob.pe on 9 November 2026, so the page says the school will confirm it.',
      'Traffic or commute times across Lima: refused; no figure was verified, so the page names neighbouring districts only and leaves the commute to the family.',
      'Income, housing or social-class statements about San Juan de Lurigancho (INEI strata exist in the research): refused; the page uses only population and age counts.',
      'Any link to the municipality: refused; the page says we are not connected and leaves out the names of officials and guests in the 2023 note.',
      'Summing censused age groups with the omitted population: refused; the age groups are printed as published.'
    ]
  }
};
