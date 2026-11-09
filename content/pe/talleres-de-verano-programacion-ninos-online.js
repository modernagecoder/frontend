// SHIP: market | Talleres de verano de programación online por edades: cinco talleres, de 1° de primaria a 5° de secundaria | a while loop that halves a range (binary search) to find a secret number
'use strict';
// Talleres de verano de programación para niños online (ag- Spanish-language door, Peru cluster row PE110, P2 summer season,
// hubGroup exams). Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief
// docs/superpowers/plans/2026-11-09-pe-writer-brief.md. Owner 2026-11-09: "make sure all our classes are live online in english".
// Owner 2026-11-08: timing flexible, any time. Formal "usted" throughout. Fees render in USD from the template only. No camp
// length, start date or camp price (spec section 8, question 8): the "talleres" are our own way of grouping the normal live
// classes by age for a summer start, and the page says so.
// Angle: the parent who types "talleres de verano para niños 2027" or "talleres de verano programación online" and thinks in
// workshops by age, as municipal and school summer programmes are sold. Spine: what a taller de verano de programación is
// with us (live, a project per taller, no fixed start); which taller fits each grade (MINEDU normative ages, our taller
// bands); what workshop time school already has (CNEB Tabla N.° 5: free-disposal hours per level, and what they may be used
// for); what each of our five talleres builds; one original Python lesson (binary search) for the 10 to 13 band; what comes
// after a summer for teens (ONEM and OPI, from their organisers, as context); clock conversions.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/talleres-de-verano-programacion-ninos-online/;
// FACTS = facts-school/FACTS.md):
//  MINEDU, Edades normativas (FACTS 13, 14, 15): "Se considera la edad normativa al 31 de marzo de cada año."; ages "6 años 7
//    años 8 años 9 años 10 años 11 años 12 años 13 años 14 años 15 años 16 años" against "1er grado ... 6to grado" (primaria)
//    and "1er grado ... 5to grado" (secundaria).
//  Ley 28044 (FACTS 4, 5, 6): inicial "de 3 a 5 años en forma escolarizada"; primaria "dura seis años"; secundaria "dura cinco
//    años".
//  D.S. 011-2012-ED, Art. 61 (FACTS 10): "Atiende a niños y niñas a partir de los 6 años de edad."
//  CNEB, TABLA N.° 5 (raw cneb/text.txt): "TABLA N.° 5: DISTRIBUCIÓN DEL TIEMPO EN HORAS PEDAGÓGICAS DE LA EDUCACIÓN BÁSICA
//    REGULAR ... Horas que se deben destinar a las áreas obligatorias 30 26 31 40 Tutoría 0 2 2 2 Horas de libre disponibilidad
//    0 2 2 3 Total de horas establecidas 30 30 35 45" (columns Inicial, Primaria, Secundaria JER, Secundaria JEC); "horas
//    pedagógicas (45 minutos)"; "11 áreas 31 competencias".
//  CNEB (FACTS 43): "Desarrollar talleres o áreas que complementen el logro de determinados aprendizajes considerados
//    prioritarios para la realidad local o para las necesidades de los estudiantes."; "Tienen valor oficial en el Plan de
//    estudios de la institu[ción]".
//  CNEB (FACTS 37, 38): "EDUCACIÓN PARA EL TRABAJO Gestiona proyectos de emprendimiento económico y social"; "Diseña y
//    construye soluciones tecnológicas para resolver problemas".
//  UGEL 06 oficio múltiple on ONEM 2026 (FACTS 99, 100): "se llevará a cabo de manera simultánea a nivel nacional el día
//    miércoles 08 de Julio"; "NIVEL 1: 1° y 2° grado de educación secundaria NIVEL 2: 3° y 4° grado de educación secundaria
//    NIVEL 3: 5° grado de educación secundaria".
//  El Peruano (FACTS 105): "la ONEM 2026 convocó a más de 1,7 millones de estudiantes de secundaria de todo el país."
//  UTEC (FACTS 111, 116): "abiertas gratuitamente a todos los estudiantes de secundaria del país"; Reglamento OPI 2025, Fase 2
//    "Se podr´a usar solo C++." (Fase 1 allows C++ or Python).
//  RM 501-2025-MINEDU Tabla 1 (FACTS 23; page image checked by eye 2026-11-09): last teaching block "Del 19 octubre a 18 de
//    diciembre" 2026.
//  Time: tzdata America/Lima -5:00, Asia/Kolkata +5:30.
// Our own calculations (python3 -I): free-disposal minutes a week = hours x 45: primaria 2 x 45 = 90, secundaria JER
//    2 x 45 = 90, JEC 3 x 45 = 135. Binary-search worst case for 1 to 100 (peor.py): "Worst case for 1 to 100: 7 tries".
// Our own example, run with python3 -I (adivina.py, reto.py, peor.py in the src-pages folder), exact output:
//    50 too low / 75 too high / 62 too low / 68 too low / 71 too low / 73 correct! / Tries: 6
//    reto (secreto = 100): 50 too low / 75 too low / 88 too low / 94 too low / 97 too low / 99 too low / 100 correct! / Tries: 7
// Lesson family: a while loop that keeps a low and a high bound and halves the range each turn (binary search), with
// if/elif/else steering, a counter, and the worst case measured over every possible secret.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  'secreto = 73',
  'bajo = 1',
  'alto = 100',
  'intentos = 0',
  '',
  'while bajo <= alto:',
  '    intento = (bajo + alto) // 2',
  '    intentos = intentos + 1',
  '    if intento == secreto:',
  "        print(intento, 'correct!')",
  '        break',
  '    elif intento < secreto:',
  "        print(intento, 'too low')",
  '        bajo = intento + 1',
  '    else:',
  "        print(intento, 'too high')",
  '        alto = intento - 1',
  '',
  "print('Tries:', intentos)"
].join('\n');

const OUT = [
  '50 too low',
  '75 too high',
  '62 too low',
  '68 too low',
  '71 too low',
  '73 correct!',
  'Tries: 6'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'exams', label: 'Talleres de verano de programación online' },
  slug: 'talleres-de-verano-programacion-ninos-online',
  code: 'tvp',
  accent: '#7C4B02',
  accentRationale: 'Talleres de verano de programación para niños: a golden-ochre #7C4B02, the colour of sand at four in the afternoon and of the wooden workbench in a taller, warmer and yellower than the other summer doors; contrast 5.95 on the paper #FBF8F2 (alloc.tsv) and above 4.5 on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Talleres de verano de programación online',
  title: 'Talleres de verano de programación para niños, online',
  description: 'Talleres de verano 2027 de programación online para niños y adolescentes en Perú: cinco talleres por edad, en vivo y en inglés, grupales o individuales.',
  ogDescription: 'Cinco talleres de verano de programación por edades, de 1° de primaria a 5° de secundaria, en vivo y en inglés desde Perú, con un proyecto por taller y un reto de lógica en Python.',
  twitterDescription: 'Talleres de verano de programación online para niños y adolescentes en Perú, en vivo y en inglés, organizados por grado y edad.',
  pageName: 'Talleres de verano de programación para niños online',
  webPageDescription: 'Guía para familias en Perú que buscan talleres de verano de programación online: qué es un taller con nosotros, qué taller corresponde a cada grado según las edades normativas del MINEDU, cuánto tiempo de taller da el colegio según la Tabla N.° 5 del CNEB, qué construye cada taller, un reto de lógica en Python escrito por nosotros y qué viene después para los adolescentes.',
  courseDescription: 'Talleres de verano en vivo y en línea de programación para niños y adolescentes de 6 a 16 años en todo el Perú, dictados solo en inglés y organizados por grado: bloques, juegos, Python, web y lógica, en grupo o en clases individuales, a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Talleres de verano de programación',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#taller', label: 'Qué es un taller' },
    { href: '#por-edad', label: 'Por edad' },
    { href: '#cinco-talleres', label: 'Los cinco talleres' },
    { href: '#reto', label: 'Reto de lógica' },
    { href: '#despues', label: 'Después del verano' }
  ],
  eyebrow: 'Perú &middot; Talleres de verano 2027 &middot; De 6 a 16 años',
  h1: 'Talleres de verano de programación online para niños y adolescentes',
  lede: 'Cuando se acerca enero, muchas madres y padres en Perú arman el verano de sus hijos con talleres: uno de natación, uno de arte, uno de algo nuevo. Si ese algo nuevo es programar, aquí encontrará cinco talleres en línea organizados por grado, qué construye su hijo en cada uno y cómo se conectan con lo que el colegio ya enseña y no enseña.',
  secondaryCta: { href: '#por-edad', label: '¿Qué taller le toca a mi hijo?' },
  wa: 'Hola Modern Age Coders, buscamos un taller de verano de programación online en inglés para nuestro hijo o hija en Perú. ¿Podemos reservar una clase gratis?',
  heroNote: 'Clases en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; un taller por grado, un proyecto por taller',
  spec: [
    ['Talleres', 'Cinco, de 1° de primaria a 5° de secundaria'],
    ['Edades', 'De 6 a 16 años, según la edad normativa del grado'],
    ['Producto', 'Un proyecto terminado al cierre de cada taller'],
    ['Formato', 'Clase grupal de quince a veinte, o individual'],
    ['Idioma', 'Inglés, en vivo, con mentores desde la India'],
    ['Primera clase', 'Gratis y sin tarjeta']
  ],
  capsuleQ: 'La respuesta corta',
  capsule: 'Los talleres de verano de programación de Modern Age Coders reúnen a escolares peruanos de 6 a 16 años en clases en vivo, en línea y en inglés, agrupadas en cinco talleres según el grado escolar: desde bloques en 1° de primaria hasta lógica y proyectos en Python en secundaria. Cada taller termina en un proyecto propio. No hay fecha de inicio común: su hijo empieza cuando usted decida, en grupo o en clases individuales, a cualquier hora.',

  picks: {
    eyebrow: 'Cursos detrás de los talleres',
    h2: 'Tres cursos en los que se apoyan los talleres de verano',
    lede: 'Los talleres no son cursos aparte: son la forma en que organizamos nuestros cursos regulares para el verano. Estos tres cubren el primer, el tercer y el último taller.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'TVP / 01', title: 'Bloques para empezar', alt: 'Imagen del curso de programación con bloques para niños', note: 'Base del taller de 1° y 2° de primaria. Arrastrar, encajar y probar: los niños de 6 y 7 años crean animaciones y juegos cortos sin escribir texto.' },
      { course: 'roblox-game-coding-for-kids-lua-course', code: 'TVP / 02', title: 'Roblox Studio por dentro', alt: 'Imagen del curso de programación de juegos en Roblox', note: 'Una opción del taller de 3° a 6° de primaria. El mundo favorito de muchos niños peruanos, esta vez construido por ellos mismos en Roblox Studio.' },
      { course: 'competitive-programming-for-teens-course', code: 'TVP / 03', title: 'Programación competitiva', alt: 'Imagen del curso de programación competitiva para adolescentes', note: 'Para el taller de 3° a 5° de secundaria. Algoritmos como la búsqueda binaria de esta página, practicados con problemas originales y tiempo limitado.' }
    ]
  },

  sections: [
    {
      id: 'taller',
      eyebrow: 'Qué es un taller',
      h2: '¿Qué es un taller de verano de programación online?',
      lede: 'Con nosotros, un taller es un tramo de clases en vivo con un objetivo concreto: su hijo termina construyendo algo que funciona. Lo llamamos taller porque se trabaja con las manos en el teclado, no copiando de la pizarra.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Hacer, no mirar', p: 'En cada sesión su hijo escribe o arma su propio programa mientras el mentor lo observa en pantalla compartida. Las explicaciones son cortas; la mayor parte del tiempo es práctica guiada.' },
          { h3: 'Agrupado por grado', p: 'Usamos los grados del colegio peruano para ubicar a cada niño en uno de cinco talleres. Así se encuentra con compañeros de su edad y con retos a su medida.' },
          { h3: 'Un proyecto al cierre', p: 'Cada taller termina con algo que se puede mostrar: un juego, una animación, una página web o un programa que resuelve un acertijo. Es la prueba de lo aprendido.' }
        ] },
        { kind: 'p', mt: true, html: 'Hay una diferencia importante con los talleres de verano de una municipalidad o de un colegio: los nuestros no tienen fecha de inauguración ni un número de sesiones cerrado. Son nuestras clases regulares, organizadas por talleres para quien empieza en el verano. Su hijo puede arrancar en diciembre de 2026, en enero de 2027 o en febrero de 2027, y seguir con el mismo mentor cuando vuelva el colegio, o terminar con su proyecto y despedirse. Se paga mes a mes.' },
        { kind: 'p', html: 'Todos los talleres se dictan en vivo y en inglés. Los mentores enseñan desde la India, pronuncian con claridad y van a la velocidad de cada niño. No hace falta que su hijo domine el idioma; sí conviene saber que el mentor no cambiará al castellano. Para ver cómo se vive eso con un niño de primaria, la guía <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a> lo cuenta en detalle.' }
      ]
    },
    {
      id: 'por-edad',
      eyebrow: 'Por grado y edad',
      h2: '¿Qué taller de programación le corresponde a mi hijo según su edad?',
      lede: 'El que corresponde a su grado. Usamos la edad normativa del MINEDU, la que el Estado toma como referencia para matricular a un estudiante en cada grado, y le asignamos uno de nuestros cinco talleres.',
      body: [
        { kind: 'table', numCols: [], caption: 'Grado escolar, edad normativa y taller de verano sugerido', head: ['Grado en el colegio', 'Edad normativa al 31 de marzo', 'Taller sugerido (nuestro)', 'Proyecto de cierre (nuestro)'], rows: [
          ['1° y 2° de primaria', '6 y 7 años', 'Taller 1: Bloques y movimiento', 'Una animación con personajes que hablan'],
          ['3° y 4° de primaria', '8 y 9 años', 'Taller 2: Juegos con reglas', 'Un juego con puntaje y tres niveles'],
          ['5° y 6° de primaria', '10 y 11 años', 'Taller 3: Primer código escrito', 'Un juego de adivinanzas en Python'],
          ['1° y 2° de secundaria', '12 y 13 años', 'Taller 4: Programas útiles y web', 'Una página web o una calculadora propia'],
          ['3°, 4° y 5° de secundaria', '14, 15 y 16 años', 'Taller 5: Algoritmos y proyectos', 'Un programa que resuelve un problema real']
        ] },
        { kind: 'source', html: 'De dónde salen las dos primeras columnas: la tabla de edades normativas que publica el MINEDU en gob.pe, que fija la edad de cada grado al 31 de marzo; la Ley General de Educación (Ley 28044), que da seis grados a la primaria y cinco a la secundaria; y el reglamento de esa ley (D.S. 011-2012-ED), que abre la primaria a los 6 años. Taller y proyecto son propuestas nuestras.' },
        { kind: 'two', mt: true,
          leftH3: 'Si su hijo está entre dos talleres',
          left: [
            'La edad normativa es una referencia, no una regla para nosotros. Un niño de 4° de primaria que ya lee y escribe con soltura puede ir directo al taller 3; uno de 1° de secundaria que nunca programó puede empezar por el taller 3 y avanzar más rápido.',
            'La clase gratis sirve justamente para eso. El mentor le propone un reto corto y, según cómo lo resuelve, le recomienda el taller que le conviene.'
          ],
          rightH3: 'Y si es menor de 6 años',
          right: [
            'La Ley General de Educación ubica a los niños de 3 a 5 años en educación inicial. Nuestros talleres empiezan a los 6, con 1° de primaria, porque antes de esa edad sostener la atención frente a una pantalla durante una clase completa suele ser difícil.',
            'Si tiene un hijo de 5 y otro mayor, el mayor puede empezar este verano y el menor, el próximo.'
          ] }
      ]
    },
    {
      id: 'colegio',
      eyebrow: 'Talleres en el colegio',
      h2: '¿Los colegios en Perú tienen talleres de programación?',
      lede: 'Algunos sí, pero depende de cada colegio. El Currículo Nacional reserva unas pocas horas a la semana de libre disponibilidad, y es en ese espacio donde una institución puede, si quiere, abrir un taller de computación o de programación.',
      body: [
        { kind: 'table', numCols: [1, 2, 3, 4], caption: 'Distribución semanal del tiempo en horas pedagógicas por nivel, según la Tabla N.° 5 del CNEB', head: ['Concepto', 'Inicial', 'Primaria', 'Secundaria, jornada regular', 'Secundaria, jornada completa'], rows: [
          ['Horas para las áreas obligatorias', '30', '26', '31', '40'],
          ['Tutoría', '0', '2', '2', '2'],
          ['Horas de libre disponibilidad', '0', '2', '2', '3'],
          ['Total de horas establecidas', '30', '30', '35', '45']
        ] },
        { kind: 'source', html: 'Tomado de la Tabla N.° 5 del CNEB que publica el MINEDU, titulada "Distribución del tiempo en horas pedagógicas de la Educación Básica Regular". Cada hora pedagógica dura 45 minutos. Las tablas por grado del mismo documento detallan cómo se reparten esas horas; en primaria, por ejemplo, las de libre disponibilidad son tres en 1° y 2°.' },
        { kind: 'p', mt: true, html: 'El CNEB dice para qué sirven esas horas: entre otras cosas, para "desarrollar talleres o áreas que complementen el logro de determinados aprendizajes considerados prioritarios para la realidad local o para las necesidades de los estudiantes", y aclara que tienen valor oficial en el plan de estudios de la institución. Dos horas pedagógicas son 90 minutos a la semana (cálculo nuestro), y ese tiempo se reparte entre todo lo que el colegio considere prioritario, no solo computación.' },
        { kind: 'two', mt: true,
          leftH3: 'Dónde roza la tecnología',
          left: [
            'Entre las 31 competencias del CNEB, el área de Ciencia y tecnología incluye "Diseña y construye soluciones tecnológicas para resolver problemas". Es lo más cercano a la programación que tiene el currículo, aunque no exige ningún lenguaje.',
            'En secundaria, Educación para el trabajo tiene una sola competencia: "Gestiona proyectos de emprendimiento económico y social". Un estudiante que sabe programar puede llevar ahí una idea mucho más lejos.'
          ],
          rightH3: 'Lo que suma un taller de verano',
          right: [
            'Lo que el colegio no alcanza a dar en 90 minutos semanales compartidos, el verano lo permite con calma: dos sesiones por semana dedicadas solo a programar, con un mentor pendiente de un grupo de edades parecidas o de su hijo solo.',
            'Un taller nuestro suma al colegio, no compite con él: no pone notas, no entrega documentos con valor oficial y funciona por completo al margen del MINEDU y de los colegios.'
          ] }
      ]
    },
    {
      id: 'cinco-talleres',
      eyebrow: 'Los cinco talleres',
      h2: '¿Qué construye un niño en cada taller de verano?',
      lede: 'Cada taller tiene su herramienta, su forma de pensar y su proyecto. Estos son los cinco, tal como los proponemos para el verano 2027. Son nuestros y se ajustan a cada niño.',
      body: [
        { kind: 'ol', items: [
          '<strong>Taller 1, Bloques y movimiento (6 y 7 años).</strong> Con bloques de colores el niño ordena pasos para que un personaje camine, salte y hable. Aprende que el orden importa y que una instrucción mal puesta cambia todo. Cierra con una animación de su propia historia.',
          '<strong>Taller 2, Juegos con reglas (8 y 9 años).</strong> Aparecen las repeticiones, las condiciones y las variables: si el gato toca la pelota, suma un punto. El niño diseña niveles y los prueba con su familia. Cierra con un juego de tres niveles, en Scratch o en Roblox Studio.',
          '<strong>Taller 3, Primer código escrito (10 y 11 años).</strong> El paso de los bloques al teclado, con Python. Variables, preguntas al usuario, decisiones y bucles. Cierra con un juego de adivinanzas como el del reto de abajo, escrito línea por línea por el propio niño.',
          '<strong>Taller 4, Programas útiles y web (12 y 13 años).</strong> Programas que hacen algo práctico: una calculadora de notas, un conversor de unidades, una página web sobre un tema que le apasione, con HTML y CSS. Cierra publicando su proyecto.',
          '<strong>Taller 5, Algoritmos y proyectos (14 a 16 años).</strong> Cómo pensar un problema antes de programarlo: búsqueda, ordenamiento, eficiencia. Cierra con un proyecto que resuelve un problema real elegido por el estudiante, y con la explicación de por qué su solución funciona.'
        ] },
        { kind: 'p', mt: true, html: 'Cada taller dura lo que su hijo necesite para terminar su proyecto con comprensión. Para la mayoría, unas ocho semanas de dos sesiones semanales bastan, y enero y febrero de 2027 suman justo algo más de ocho semanas. Pero esa cifra es una estimación nuestra, no un compromiso: hay niños que terminan antes y otros que prefieren seguir en marzo con el taller siguiente.' }
      ]
    },
    {
      id: 'reto',
      tint: 'tint',
      eyebrow: 'Un reto de lógica',
      h2: '¿Cómo es una clase del taller de primer código escrito?',
      lede: 'Este es un reto que hacemos en el taller 3, para 5° y 6° de primaria, y que vuelve en el taller 5 con más profundidad. El ejercicio es nuestro: la computadora adivina un número secreto del 1 al 100 partiendo el rango por la mitad en cada intento.',
      body: [
        { kind: 'code', label: 'La computadora adivina un número del 1 al 100', lang: 'Python', code: PY, note: 'En cada vuelta, <code>intento</code> es el punto medio entre <code>bajo</code> y <code>alto</code>. Si se pasó, el techo baja; si se quedó corto, el piso sube.' },
        { kind: 'code', label: 'Lo que sale en pantalla con el secreto 73', lang: 'Salida', code: OUT, note: 'Resultado exacto de Python 3, tal como lo vimos al ejecutarlo. Seis intentos para encontrar el 73.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Jugar primero sin computadora.</strong> El mentor piensa un número y el niño adivina; el mentor solo dice "too high" o "too low". Casi todos los niños descubren solos que conviene empezar por 50.',
          '<strong>Seguir el programa a mano.</strong> Con 1 y 100, el punto medio es 50; como 50 es poco, <code>bajo</code> pasa a 51 y el siguiente medio es 75. El niño escribe la secuencia en una hoja antes de mirar la pantalla.',
          '<strong>Cambiar el secreto.</strong> Con <code>secreto = 100</code> el programa imprime 50, 75, 88, 94, 97, 99, 100 y termina con <code>Tries: 7</code>. ¿Por qué tarda más que con 73?',
          '<strong>Buscar el peor caso.</strong> Probando los cien secretos posibles con un bucle, el máximo es 7 intentos (cálculo nuestro con Python). El niño entiende que partir por la mitad garantiza encontrar cualquier número del 1 al 100 en siete pasos o menos.',
          '<strong>Decirlo en inglés.</strong> Al final, el niño explica la estrategia en una frase: "every guess cuts the numbers in half". Es la idea de la búsqueda binaria, uno de los algoritmos más usados en informática.'
        ] },
        { kind: 'p', mt: true, html: 'El reto tiene poco de Python y mucho de pensamiento. Su hijo no memoriza un truco: descubre una estrategia jugando, la convierte en un programa, la pone a prueba con el caso más difícil y la explica con sus palabras. Por eso no damos la solución al empezar ni dejamos que una herramienta la escriba por él. Lo que queremos que se lleve del verano es esa forma de razonar.' }
      ]
    },
    {
      id: 'despues',
      eyebrow: 'Después del verano',
      h2: '¿Qué puede hacer un adolescente después de un taller de programación?',
      lede: 'Seguir aprendiendo durante el año escolar, construir proyectos más grandes o, si le atrae la competencia, conocer las olimpiadas escolares que existen en el Perú. Estas son dos, contadas desde las fuentes de sus organizadores.',
      body: [
        { kind: 'two',
          leftH3: 'Olimpiada de matemática (ONEM)',
          left: [
            'Según El Peruano, la ONEM 2026 convocó a más de 1,7 millones de estudiantes de secundaria de todo el país. Su etapa de colegio se tomó el miércoles 8 de julio de 2026 en simultáneo a nivel nacional, según un oficio de la UGEL 06.',
            'Se compite por niveles: el nivel 1 es para 1° y 2° de secundaria, el nivel 2 para 3° y 4°, y el nivel 3 para 5°. La participación se organiza a través del colegio. La lógica de un algoritmo como la búsqueda binaria ayuda a razonar con orden, pero no preparamos para la ONEM con sus problemas.'
          ],
          rightH3: 'Olimpiada de informática (OPI)',
          right: [
            'Las Olimpiadas Peruanas de Computación, a cargo de la UTEC (Universidad de Ingeniería y Tecnología), se presentan como competencias "abiertas gratuitamente a todos los estudiantes de secundaria del país". En la OPI, según su reglamento de 2025, la primera fase admite C++ o Python, y en la final se usa solo C++.',
            'Para un adolescente que terminó el taller 5 con gusto por los algoritmos, la OPI es un siguiente paso natural. Las fechas cambian cada año; consulte siempre la página de UTEC.'
          ] },
        { kind: 'p', mt: true, html: 'No tenemos relación con el MINEDU, la ONEM, UTEC ni la OPI, no reproducimos sus problemas y no prometemos medallas. Enseñamos con problemas escritos por nosotros. Si su hijo es adolescente, estudia en un colegio bilingüe de Lima y prefiere leer en inglés, la página <a class="ag-inline-link" href="/english-medium-coding-classes-lima">English-medium coding classes in Lima</a> muestra los cursos que suelen seguir los estudiantes de secundaria, y la página principal <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">coding and AI classes in Peru</a> resume todo lo que ofrecemos en el país.' }
      ]
    },
    {
      id: 'horario',
      eyebrow: 'Horario',
      h2: '¿A qué hora se conectan los talleres desde Perú?',
      lede: 'A la que usted reserve. Perú usa UTC-5 y la India UTC+5:30 todo el año, sin cambios de horario, así que la India siempre va diez horas y media adelante.',
      body: [
        { kind: 'p', html: 'Para darle una idea, con cálculos nuestros y sin que sean horarios de clase: un taller a las 8:30 a. m. en Perú se dicta a las 7:00 p. m. en la India; uno a las 10:00 a. m., a las 8:30 p. m.; uno a las 12:30 p. m., a las 11:00 p. m.; y uno a las 5:30 p. m. de Perú, a las 4:00 a. m. del día siguiente en la India (zonas America/Lima y Asia/Kolkata de la base tzdata).' },
        { kind: 'p', html: 'Muchas familias combinan un taller de programación en la mañana con otro de deporte o arte en la tarde. Como el nuestro es en línea, no hay que trasladarse: su hijo termina la clase y en minutos puede estar camino a la piscina o al parque.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Avance',
    h2: '¿Cómo pasa un niño de un taller al siguiente?',
    lede: 'Usamos cinco habilidades propias, una por taller. Su hijo pasa al siguiente cuando domina la anterior, no cuando cumple años.',
    table: { caption: 'Una habilidad por taller (nuestra escala)', head: ['Taller', 'Habilidad clave', 'Señal de que está listo para el siguiente'], rows: [
      ['1. Bloques y movimiento', 'Ordenar pasos', 'arma una secuencia de diez bloques sin ayuda y la corrige si falla'],
      ['2. Juegos con reglas', 'Decidir y repetir', 'usa condiciones y repeticiones para que su juego reaccione al jugador'],
      ['3. Primer código escrito', 'Escribir y predecir', 'escribe un programa corto en Python y dice qué imprimirá antes de correrlo'],
      ['4. Programas útiles y web', 'Organizar', 'divide un programa en partes con nombre y las reutiliza'],
      ['5. Algoritmos y proyectos', 'Razonar sobre eficiencia', 'explica por qué una solución es más rápida que otra, como la búsqueda binaria']
    ] },
    left: { h3: 'Para madres y padres', ps: [
      'Un taller terminado no se mide por el tiempo, sino por el proyecto y por la explicación. Siéntese con su hijo diez minutos y deje que le enseñe cómo funciona lo que hizo.',
      'Si su hijo quiere repetir un taller con otro proyecto antes de pasar al siguiente, es una decisión sensata, no un retroceso.'
    ] },
    right: { h3: 'Para los estudiantes', ps: [
      'Antes de pedir ayuda, lea su código en voz alta línea por línea.',
      'Cuando algo funcione, pruebe el caso más difícil. Si también funciona, recién está terminado.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos para los talleres',
    h2: 'Nueve cursos más que alimentan los cinco talleres',
    lede: 'Se dictan igual que los talleres, en vivo y en inglés, grupales o uno a uno. Con el mentor decide cuál suma más al taller de su hijo.',
    bands: [
      { num: 'I', h3: 'Talleres 1 y 2', sub: 'De 6 a 9 años', courses: [
        { code: 'TVP / T1 / 01', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Pequeños pensadores', blurb: 'Acertijos y patrones para 6 a 9 años, antes o junto con los bloques.' },
        { code: 'TVP / T1 / 02', slug: 'scratch-programming-complete-course', title: 'Scratch completo', blurb: 'Animaciones y juegos con bloques, la herramienta principal del taller 2.' },
        { code: 'TVP / T1 / 03', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft programado', blurb: 'De 7 a 12 años: construir y automatizar con comandos y bloques.' }
      ] },
      { num: 'II', h3: 'Talleres 3 y 4', sub: 'De 9 a 13 años', courses: [
        { code: 'TVP / T3 / 01', slug: 'kids-ai-web-development-course', title: 'Web para primaria', blurb: 'Entre 9 y 12 años: HTML y CSS para publicar su primer sitio, con su nombre en la portada.' },
        { code: 'TVP / T3 / 02', slug: 'block-coding-app-development-masterclass', title: 'Apps con bloques para celular', blurb: 'Entre 8 y 12 años: su hijo diseña botones y pantallas y la prueba en el teléfono de la familia.' },
        { code: 'TVP / T3 / 03', slug: 'ai-literacy-for-kids-course', title: 'Cómo piensa una IA', blurb: 'De 8 a 14 años: entender la inteligencia artificial sin abrir cuentas.' }
      ] },
      { num: 'III', h3: 'Taller 5', sub: 'De 13 a 17 años', courses: [
        { code: 'TVP / T5 / 01', slug: 'python-complete-masterclass-teens', title: 'Python de principio a fin', blurb: 'De 13 a 18 años: el lenguaje del taller 5, desde cero hasta proyectos.' },
        { code: 'TVP / T5 / 02', slug: 'complete-game-development-masterclass-for-teens', title: 'Videojuegos con Unity', blurb: 'De 13 a 18 años: C# y juegos publicados, para quien prefiere crear jugando.' },
        { code: 'TVP / T5 / 03', slug: 'frontend-development-masterclass-for-teens', title: 'Desarrollo web frontend', blurb: 'De 13 a 18 años: del CSS cuidado a interfaces con React.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo se organizan los talleres en vivo?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Taller de mañana', l: 'Deja la tarde libre para deporte, playa o arte.' },
      { time: 'Taller de tarde', l: 'Para familias que aprovechan la mañana para otras actividades.' },
      { time: 'Taller individual', l: 'Uno a uno con el mentor, a la hora que convenga en casa.' }
    ],
    cells: [
      { h3: 'Por grado', p: 'Compañeros de edad parecida y retos a la medida del grado.' },
      { h3: 'Manos en el teclado', p: 'Poca exposición y mucha práctica guiada en cada sesión.' },
      { h3: 'Un mentor por taller', p: 'La misma persona del inicio al proyecto final.' },
      { h3: 'Proyecto al cierre', p: 'Cada taller termina con algo que se puede mostrar.' },
      { h3: 'Reporte breve', p: 'La familia recibe una nota corta sobre lo trabajado.' },
      { h3: 'Mes a mes', p: 'Sin permanencia: se sigue al taller siguiente solo si su hijo quiere.' }
    ]
  },

  projectsH2: 'Proyectos de nuestros estudiantes',
  projectsLede: 'Así se ven los proyectos cuando los talleres continúan: trabajos de estudiantes mayores que empezaron con bloques. Hay más en <a class="ag-inline-link" href="/student-labs">Student labs</a> (en inglés).',
  reviewsLede: 'Comentarios de familias y estudiantes en Google, copiados tal cual, en inglés.',

  fees: {
    h2: 'Cuánto cuesta un taller de verano en Perú',
    lede: 'El taller se paga como cualquier mes de clases: la mensualidad figura aquí en dólares estadounidenses, se cobra con tarjeta y su banco la convierte con el tipo de cambio del día del cargo. No hay matrícula ni costo de materiales.',
    free: ['Clase de prueba gratis', 'El mentor sugiere el taller adecuado', 'Sin tarjeta y sin compromiso'],
    group: ['Taller grupal de quince a veinte estudiantes', 'Dos sesiones en vivo por semana', 'El mismo mentor hasta el proyecto final', 'Pago mensual, se puede dejar cualquier mes'],
    one: ['Taller individual con un mentor', 'Proyecto y ritmo según su hijo', 'Días y horas a su elección']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Talleres de verano de programación online: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Los cinco talleres se dictan en vivo, en línea y exclusivamente en inglés, algo que muchas familias buscan a propósito: el verano trae programación y horas de inglés hablado en un mismo taller. Los mentores hablan claro y a la velocidad del niño. El EF EPI 2025 sitúa a Lima en el nivel alto de inglés, y conversar en vivo es la forma más directa de afianzarlo.' },
      { q: '¿Qué taller de programación le toca a mi hijo?', a: 'El de su grado: taller 1 para 1° y 2° de primaria, taller 2 para 3° y 4°, taller 3 para 5° y 6°, taller 4 para 1° y 2° de secundaria y taller 5 para 3° a 5° de secundaria. En la clase gratis el mentor confirma o ajusta esa ubicación.' },
      { q: '¿Desde qué edad hay talleres de verano de programación?', a: 'Desde los 6 años, que es la edad con la que el MINEDU ubica a un niño en 1° de primaria. Los niños de inicial, de 3 a 5 años, todavía no participan en nuestros talleres.' },
      { q: '¿Cuándo empiezan los talleres de verano 2027?', a: 'Cuando usted lo decida. No hay fecha de inauguración: después de la clase gratis, el taller arranca en los días siguientes, sea en diciembre de 2026 o durante enero y febrero de 2027.' },
      { q: '¿Cuántas sesiones tiene cada taller?', a: 'No hay un número cerrado. Estimamos unas ocho semanas de dos sesiones semanales para terminar el proyecto de un taller, pero se paga mes a mes y cada niño avanza a su ritmo.' },
      { q: '¿A qué hora son los talleres?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Un ejemplo: las 9:30 a. m. peruanas caen a las 8:00 p. m. en la India.' },
      { q: '¿Se necesita saber programar o hablar inglés?', a: 'No. Cada taller empieza desde lo básico de su nivel, y basta con que su hijo entienda instrucciones simples en inglés. El oído se acostumbra al acento del mentor en pocas semanas.' },
      { q: '¿Qué materiales hay que comprar?', a: 'Ninguno. Hace falta una computadora o laptop con cámara, micrófono e internet, y unos audífonos. Las herramientas de los talleres son gratuitas y no usamos kits de robótica ni piezas físicas.' },
      { q: '¿Los talleres sirven para la ONEM o la OPI?', a: 'Enseñan a razonar y a programar, que es la base de cualquier olimpiada, pero no preparamos con los problemas de la ONEM ni de la OPI, no tenemos relación con sus organizadores y no prometemos resultados.' },
      { q: '¿Dan certificado o nota escolar?', a: 'Nota escolar, no, porque somos independientes del MINEDU y de los colegios. Lo que sí damos, al completar un curso, es una constancia de finalización firmada por Modern Age Coders.' },
      { q: '¿Cómo se paga un taller?', a: 'Como un mes de clases: en dólares estadounidenses, con tarjeta, y su banco hace la conversión. La clase de prueba no cuesta nada.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más páginas',
    h2: 'Para seguir leyendo',
    lede: 'Otras páginas para preparar el verano, la mayoría en inglés.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'La entrada general para familias en el Perú.' },
      { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños en inglés', p: 'Qué esperar de una clase en inglés en primaria, en castellano.' },
      { href: '/coding-classes-in-arequipa-peru', label: 'Coding classes in Arequipa', p: 'Para familias del sur, con datos abiertos de Arequipa.' },
      { href: '/ai-tools-age-guide', label: 'AI tool age guide', p: 'La edad mínima de cada herramienta de inteligencia artificial, tomada de sus propios términos.' },
      { href: '/student-labs', label: 'Student labs', p: 'Lo que construyeron estudiantes que pasaron por estos talleres y siguieron.' },
      { href: '/courses', label: 'All courses', p: 'Todos los programas, para cualquier edad entre 6 y 67 años.' }
    ]
  },

  start: {
    h2: 'Reserve la clase gratis y encuentre su taller',
    lede: 'En la clase de prueba el mentor saluda a su hijo en inglés sencillo, le plantea un pequeño reto acorde a su grado y mira cómo lo encara. A partir de ahí le confirmamos qué taller le corresponde y en qué formato conviene empezar.',
    readFirst: 'Puede leer antes <a class="ag-inline-link" href="/how-we-teach">How we teach</a>, sobre cómo damos clases en vivo, y explorar <a class="ag-inline-link" href="/courses">All courses</a>, con todos los cursos (ambas en inglés).',
    note: 'Cada taller se da por videollamada, en vivo, en inglés y con un mentor desde la India. Si prefiere preguntar antes, escriba al WhatsApp: allí le contestamos en castellano.',
    formNote: 'Gratis, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Talleres', links: [
        { href: '/courses/kids-coding-blocks-masterclass', label: 'Bloques, talleres 1 y 2' },
        { href: '/courses/roblox-game-coding-for-kids-lua-course', label: 'Roblox, taller 2 y 3' },
        { href: '/courses/competitive-programming-for-teens-course', label: 'Algoritmos, taller 5' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Perú', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Clases en Perú' },
        { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Niños, en inglés' },
        { href: '/english-medium-coding-classes-lima', label: 'Secundaria en Lima' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' }
      ] }
    ],
    bottomRight: 'Siete intentos bastan del 1 al 100'
  },

  personalityCss: `
.ag-root.ag-tvp .ag-hero h1 { letter-spacing: -0.012em; max-width: 23ch; }
.ag-root.ag-tvp .ag-capsule { border-left-width: 6px; border-radius: 1px; }
.ag-root.ag-tvp .ag-steps li strong { font-weight: 700; }
.ag-root.ag-tvp .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-tvp .ag-table caption { text-align: left; }
`,

  dossier: {
    curriculumAuthority: 'MINEDU: Edades normativas (gob.pe), Ley 28044, D.S. 011-2012-ED, CNEB Tabla N.° 5 and free-disposal hours, CNEB competencies of Ciencia y tecnología and Educación para el trabajo, RM 501-2025-MINEDU Tabla 1; UGEL 06 oficio on ONEM 2026; El Peruano on ONEM 2026; UTEC OPI page and Reglamento OPI 2025; tzdata. The five talleres, their projects, the skill ladder and the Python example are our own.',
    localProject: 'A binary-search lesson in Python for the taller of 5° and 6° de primaria: the computer guesses a secret number from 1 to 100 by halving the range with a while loop and low and high bounds; with secreto = 73 it prints 50 too low, 75 too high, 62 too low, 68 too low, 71 too low, 73 correct! and Tries: 6; with 100 it takes 7; a loop over all hundred secrets gives Worst case for 1 to 100: 7 tries. Lesson family: while loop, bounds, midpoint, if/elif/else steering and a measured worst case.',
    requiredMentions: ['73 correct!', 'Tries: 6', 'Tries: 7', 'every guess cuts the numbers in half', 'Distribución semanal del tiempo en horas pedagógicas por nivel', 'Horas de libre disponibilidad', 'Gestiona proyectos de emprendimiento económico y social', 'más de 1,7 millones de estudiantes de secundaria', 'Taller 3: Primer código escrito', 'Siete intentos bastan del 1 al 100'],
    sources: [
      { claim: 'Normative age per grade, measured at 31 March.', url: 'https://cdn.www.gob.pe/uploads/document/file/2818106/Edades_normativas.pdf?v=1644437764' },
      { claim: 'Inicial 3 to 5, primaria six years, secundaria five years (Ley 28044).', url: 'https://cdn.www.gob.pe/uploads/document/file/4049722/Ley%2028044%20-%20Ley%20General%20de%20Educaci%C3%B3n%20.pdf' },
      { claim: 'Primaria from age 6 (Reglamento, Art. 61).', url: 'https://cdn.www.gob.pe/uploads/document/file/104990/_0011-2012-ED_-_14-03-2013_02_34_14_-d.s_011-2012-ed.pdf' },
      { claim: 'CNEB Tabla N.° 5 (hours by level), free-disposal hours for workshops, 31 competencies, Ciencia y tecnología and Educación para el trabajo competencies.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'ONEM 2026 school stage on Wednesday 8 July 2026; levels by secundaria grade.', url: 'https://ofimult.ugel06.gob.pe/archivos/oficio-multiple-no-00164-2026-mineduvmgi-drelm-ugel06dir-agebre-1781620977.pdf' },
      { claim: 'ONEM 2026 drew more than 1.7 million secondary students.', url: 'https://elperuano.pe/noticia/306597-72-escolares-ganadores-de-la-olimpiada-nacional-de-matematica-seran-premiados-este-lunes-en-huampani' },
      { claim: 'UTEC computing olympiads free for all secondary students; OPI 2025 Fase 1 C++ or Python, Fase 2 C++ only.', url: 'https://opi.utec.edu.pe/Reglamento_OPI_2025.pdf' },
      { claim: 'EF EPI 2025: Lima 555, High band.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 with no DST; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'A taller with a start date, a fixed number of sessions or a one-payment price: refused; the talleres are our grouping of monthly classes, and the eight weeks are labelled our estimate.',
      'Spanish-language teaching: refused; every taller is live, online and in English only.',
      'ONEM or OPI preparation with their problems, or any medal promise: refused; the page describes them from their organisers and says we are not connected.',
      'Robot kits or materials: none; the page says no kits or physical parts are used.',
      'Treating the MINEDU normative age as our placement rule: refused; the page says the mentor places each child in the free class.',
      'Soles prices, competitor prices or any typed fee: refused; fees render from the template in USD.'
    ]
  }
};
