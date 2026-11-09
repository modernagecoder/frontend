// SHIP: vacaciones útiles district (ES) | Pueblo Libre: el calendario escolar MINEDU y cómo repartir el verano | halving search: guess a number from 1 to 100 in at most 7 tries
'use strict';
// Vacaciones útiles de programación en Pueblo Libre (ag- Spanish-language district door, Peru cluster row PE224, P2, hubGroup lima).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only; no soles, no typed figure, no camp length.
// Angle: the Pueblo Libre parent who types "vacaciones útiles pueblo libre 2026" or "talleres de verano pueblo libre" and
// is planning the months without school. Spine: when the school year starts and ends (RM 501-2025-MINEDU Tabla 1, the
// whole 2026 calendar, checked by eye; no 2027 norm yet); what the Municipalidad de Pueblo Libre itself publishes about its
// summer workshops (sport and chess, in person, twice a week); how to split the summer between workshops, rest and coding;
// who lives in the district (INEI Censos 2025); an original halving-search lesson that links chess-style thinking to code.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/vacaciones-utiles-de-programacion-pueblo-libre-lima/,
// fetched 2026-11-09 with curl from www.gob.pe, institution munipueblolibre-lima = "Municipalidad Distrital de Pueblo Libre - Lima"
// (not the Áncash homonym munipueblolibre); quotes grepped in the raw text):
//  pl-688466.html, Nota Informativa "13 de enero de 2023": "se iniciaron los Talleres de Verano 2023 de la Municipalidad de
//    Pueblo Libre, los cuales fueron creados con el objetivo de fortalecer el desarrollo cultural, psicosocial, artístico y
//    deportivo en la población"; "Los beneficiados son más de 500 pueblolibrences"; "talleres que organiza OMAPED, DEMUNA,
//    CIAM y Deportes"; "Al culminar estos talleres que durarán dos meses".
//  pl-58243.html, gob.pe service page "Inscribirse en un taller en los complejos deportivos de Pueblo Libre" ("Último cambio
//    23 abril 2024"): "talleres de verano e invierno dirigidos a niños y jóvenes, que se ofrecen en los complejos deportivos
//    de la municipalidad"; "fútbol, vóley, básquet, karate, tenis, capoeira, ajedrez, taekwondo, baby soccer, judo y gimnasia
//    rítmica; de lunes a viernes de 8:00 a. m. a 5:00 p. m."; "los talleres se dictan dos veces por semana y el pago es
//    mensual"; "Modalidad: Presencial". (The page's fee is deliberately not reproduced: no soles figures on Peru pages.)
//  RM 501-2025-MINEDU, PDF page 7, Tabla 1 "Distribución y fechas para la calendarización 2026" (checked by eye against the
//    page image, png saved): rows "Del 2 al 13 de marzo", "Del 16 marzo al 15 de mayo", "Del 18 al 22 de mayo", "Del 25 mayo al
//    24 de julio", "Del 27 julio a 7 de agosto", "Del 10 agosto al 9 de octubre", "Del 12 al 16 de octubre", "Del 19 octubre a
//    18 de diciembre", "Del 21 al 31 de diciembre"; durations 02, 09, 01, 09, 02, 09, 01, 09, 02 semanas; "treinta y seis (36)
//    semanas lectivas y ocho (08) semanas de gestión"; DRE and UGEL "tienen la potestad de definir una distribución de semanas
//    lectivas y de gestión distinta a la sugerida"; "la calendarización puede organizar el año escolar en bimestres,
//    trimestres u otra forma de organización". gob.pe search 2026-11-09: no 2027 norm (saved).
//  INEI Censos Nacionales 2025, Lima Metropolitana tabulado (tabulados/27/poblacion): Cuadro N° 1 "DISTRITO PUEBLO LIBRE 99937"
//    total, 96532 censada; Cuadro N° 3 "DISTRITO PUEBLO LIBRE 96532 3751 5496 6229 ...". Rank 29 of 43 = our ordering.
//  EF EPI 2025: Lima 555 (high). Time: tzdata America/Lima UTC-5 no DST; Asia/Kolkata UTC+5:30.
// Our own calculations (python3 -I): 5496 / 96532 = 5.7 %, 6229 / 96532 = 6.5 %.
// Our own example, run with python3 -I (adivina.py, adivina_peor.py in the src-pages folder), exact output:
//    Try 1 -> 50 too low / Try 2 -> 75 too high / Try 3 -> 62 too low / Try 4 -> 68 too low / Try 5 -> 71 too low /
//    Try 6 -> 73 correct!
//    From 1 to 10 -> at most 4 tries / From 1 to 100 -> at most 7 tries / From 1 to 1000 -> at most 10 tries
// Lesson family: halving search (binary search) with two bounds in a while loop, then the worst case counted over every
//    possible secret.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const JUEGO = [
  'secreto = 73',
  'bajo, alto = 1, 100',
  'intentos = 0',
  '',
  'while True:',
  '    intento = (bajo + alto) // 2',
  '    intentos = intentos + 1',
  '    if intento == secreto:',
  "        print('Try', intentos, '->', intento, 'correct!')",
  '        break',
  '    elif intento < secreto:',
  "        print('Try', intentos, '->', intento, 'too low')",
  '        bajo = intento + 1',
  '    else:',
  "        print('Try', intentos, '->', intento, 'too high')",
  '        alto = intento - 1'
].join('\n');

const JUEGO_OUT = [
  'Try 1 -> 50 too low',
  'Try 2 -> 75 too high',
  'Try 3 -> 62 too low',
  'Try 4 -> 68 too low',
  'Try 5 -> 71 too low',
  'Try 6 -> 73 correct!'
].join('\n');

const PEOR = [
  'def intentos_para(secreto, tope):',
  '    bajo, alto = 1, tope',
  '    intentos = 0',
  '    while True:',
  '        intento = (bajo + alto) // 2',
  '        intentos = intentos + 1',
  '        if intento == secreto:',
  '            return intentos',
  '        elif intento < secreto:',
  '            bajo = intento + 1',
  '        else:',
  '            alto = intento - 1',
  '',
  'for tope in [10, 100, 1000]:',
  '    peor = max(intentos_para(s, tope) for s in range(1, tope + 1))',
  "    print('From 1 to', tope, '-> at most', peor, 'tries')"
].join('\n');

const PEOR_OUT = [
  'From 1 to 10 -> at most 4 tries',
  'From 1 to 100 -> at most 7 tries',
  'From 1 to 1000 -> at most 10 tries'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'lima', label: 'Vacaciones útiles en Pueblo Libre' },
  slug: 'vacaciones-utiles-de-programacion-pueblo-libre-lima',
  code: 'vupp',
  accent: '#3D650E',
  accentRationale: 'Vacaciones útiles de programación en Pueblo Libre: a vine-leaf green #3D650E, warmer and yellower than the Los Olivos and Jesús María greens, for the district of old vineyards and the pisco festival; contrast 5.56 on the paper #FBF8F2 (alloc.tsv) and above 4.5 on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Vacaciones útiles de programación en Pueblo Libre',
  title: 'Vacaciones útiles de programación en Pueblo Libre, online',
  description: 'Vacaciones útiles de programación para chicos de Pueblo Libre: el calendario escolar del MINEDU, los talleres del distrito y clases en vivo y en inglés en casa.',
  ogDescription: 'Planifique el verano en Pueblo Libre: cuándo vuelve el colegio según el MINEDU, qué talleres ofrece el distrito y cómo sumar programación en vivo y en inglés.',
  twitterDescription: 'Un verano con código para chicos de Pueblo Libre: clases en vivo y en inglés, en grupo o individuales, sin salir de casa.',
  pageName: 'Vacaciones útiles de programación en Pueblo Libre',
  webPageDescription: 'Guía para familias de Pueblo Libre que organizan las vacaciones útiles: el calendario del año escolar 2026 según la RM 501-2025-MINEDU, lo que la Municipalidad de Pueblo Libre publica sobre sus talleres de verano, cómo repartir los meses entre talleres, descanso y programación en vivo y en inglés, la población del distrito según el INEI y un juego de adivinar números escrito por nosotros en Python.',
  courseDescription: 'Clases en vivo y en línea de programación para niños de 6 a 12 años y adolescentes de Pueblo Libre, dictadas solo en inglés: Scratch, Python, lógica y algoritmos, en clase grupal o individual, empezando en las vacaciones de verano y a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Vacaciones útiles en Pueblo Libre',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#calendario', label: 'Calendario' },
    { href: '#talleres', label: 'Talleres' },
    { href: '#repartir', label: 'Plan' },
    { href: '#adivinar', label: 'Ejemplo' },
    { href: '#desde-casa', label: 'Desde casa' }
  ],
  eyebrow: 'Lima &middot; Pueblo Libre &middot; Vacaciones útiles',
  h1: 'Vacaciones útiles de programación en Pueblo Libre',
  lede: 'Antes de inscribir a su hijo en nada, conviene tener el calendario a la vista: cuándo termina el colegio, cuándo vuelve y qué semanas quedan libres. Esta página parte de ahí, del calendario oficial del MINEDU, repasa lo que la municipalidad ofrece en verano y propone cómo encajar unas clases de programación en vivo y en inglés sin llenar cada hora del día.',
  secondaryCta: { href: '#calendario', label: 'Ver el calendario escolar' },
  wa: 'Hola Modern Age Coders, vivimos en Pueblo Libre y estamos armando el verano de nuestro hijo. ¿Podemos reservar una clase gratis de programación?',
  heroNote: 'Clases en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; un verano con plan, sin salir del distrito',
  spec: [
    ['Público', 'Niños de primaria y adolescentes de secundaria'],
    ['Temporada', 'Verano, y si funciona, el resto del año'],
    ['Modalidad', 'Videollamada en vivo, desde su casa'],
    ['Grupos', 'De quince a veinte, o clase individual'],
    ['Temas', 'Scratch, Python, lógica y algoritmos'],
    ['Inicio', 'Con una clase de prueba gratuita']
  ],
  capsuleQ: 'Lo esencial',
  capsule: 'En Pueblo Libre, las vacaciones útiles de programación de Modern Age Coders consisten en clases en vivo que su hijo toma en casa, por internet y en inglés, con un mentor en la India; sirven para niños de 6 a 12 años y para adolescentes. No hay campamento con fecha fija: usted elige cuándo empezar en el verano, si prefiere una clase grupal o clases individuales, y el día y la hora, que pueden ser cualquiera. Se combinan bien con un taller presencial del distrito y pueden seguir cuando vuelva el colegio. La primera clase es gratis.',

  picks: {
    eyebrow: 'Recomendados para el verano',
    h2: 'Cursos con los que se puede empezar en Pueblo Libre',
    lede: 'Para el chico que disfruta de los acertijos, para el que quiere escribir código de verdad y para el adolescente que va un paso más allá.',
    items: [
      { course: 'reasoning-and-readiness-course-for-young-thinkers', code: 'VUPP / 01', title: 'Razonamiento para pequeños', alt: 'Imagen del curso de razonamiento para niños pequeños', note: 'De 6 a 9 años. Patrones, orden y estrategia con retos en pantalla; el mismo tipo de pensamiento que pide un tablero de ajedrez.' },
      { course: 'python-ai-kids-masterclass', code: 'VUPP / 02', title: 'Python para chicos de primaria', alt: 'Imagen del curso de Python e IA para niños', note: 'Para 9 a 12 años. Su hijo escribe sus propios juegos, como el de adivinar un número de esta página, y conoce lo básico de la inteligencia artificial.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'VUPP / 03', title: 'Lógica y algoritmos en secundaria', alt: 'Imagen del curso de resolución de problemas y algoritmos para adolescentes', note: 'De 13 a 18 años. Búsqueda, ordenamiento y estructuras de datos, con problemas que exigen pensar antes de teclear.' }
    ]
  },

  sections: [
    {
      id: 'calendario',
      eyebrow: 'El calendario',
      h2: '¿Cuándo termina el colegio y cuándo vuelve, según el MINEDU?',
      lede: 'Para 2026, la Resolución Ministerial 501-2025-MINEDU fijó 36 semanas lectivas y 8 de gestión. Las clases empezaron el 16 de marzo y las semanas lectivas terminan el 18 de diciembre de 2026. El calendario de 2027 todavía no está publicado.',
      body: [
        { kind: 'table', numCols: [3], caption: 'El año escolar 2026 tramo por tramo: cuándo hay clases con alumnos y cuándo no', head: ['Tramo', 'Desde', 'Hasta', 'Semanas', '¿Clases con alumnos?'], rows: [
          ['Gestión de inicio', 'lun. 2 mar.', 'vie. 13 mar.', '2', 'No'],
          ['Lectivo 1', 'lun. 16 mar.', 'vie. 15 may.', '9', 'Sí'],
          ['Pausa de mayo', 'lun. 18 may.', 'vie. 22 may.', '1', 'No'],
          ['Lectivo 2', 'lun. 25 may.', 'vie. 24 jul.', '9', 'Sí'],
          ['Pausa de medio año', 'lun. 27 jul.', 'vie. 7 ago.', '2', 'No'],
          ['Lectivo 3', 'lun. 10 ago.', 'vie. 9 oct.', '9', 'Sí'],
          ['Pausa de octubre', 'lun. 12 oct.', 'vie. 16 oct.', '1', 'No'],
          ['Lectivo 4', 'lun. 19 oct.', 'vie. 18 dic.', '9', 'Sí'],
          ['Gestión de cierre', 'lun. 21 dic.', 'jue. 31 dic.', '2', 'No']
        ] },
        { kind: 'source', html: 'Elaborado por nosotros a partir de la Tabla 1 de la RM 501-2025-MINEDU, la norma técnica del MINEDU para el año escolar 2026, válida para colegios públicos y privados (página 7 del PDF firmado). Las fechas se leyeron sobre la imagen escaneada de esa página; los nombres de los tramos y los días de la semana los agregamos nosotros. Fechas de 2026.' },
        { kind: 'two', mt: true,
          leftH3: 'Lo que la tabla dice del verano',
          left: [
            'El último día lectivo de 2026 es el 18 de diciembre. En 2026 la vuelta a clases fue el 16 de marzo, después de dos semanas de gestión que empezaron el 2 de marzo. Si 2027 sigue un esquema parecido, el verano escolar ocupa de fines de diciembre a mediados de marzo, pero eso es una suposición nuestra, no una fecha oficial.',
            'Al 9 de noviembre de 2026, la búsqueda de "año escolar 2027" en gob.pe solo muestra la nota del MINEDU del 14 de octubre de 2026 sobre materiales educativos para ese año. La norma con las fechas de 2027 aún no aparece.'
          ],
          rightH3: 'Por qué su colegio puede ser distinto',
          right: [
            'La norma permite a cada DRE y UGEL adoptar un reparto de semanas "distinta a la sugerida" cuando el clima o la realidad social de su territorio lo piden.',
            'Además, "la calendarización puede organizar el año escolar en bimestres, trimestres u otra forma de organización". Por eso la fecha que vale para su hijo es la que comunique su colegio.'
          ] },
        { kind: 'p', mt: true, html: 'El calendario también muestra dos pausas cortas dentro del año, en mayo y en octubre, y una más larga entre el 27 de julio y el 7 de agosto de 2026. Nuestras clases no se detienen en esas semanas, porque no dependen del calendario escolar: si su hijo sigue con nosotros después del verano, puede aprovechar esas pausas para avanzar un proyecto.' }
      ]
    },
    {
      id: 'talleres',
      eyebrow: 'Lo que ofrece el distrito',
      h2: '¿Qué talleres de verano tiene la Municipalidad de Pueblo Libre?',
      lede: 'Talleres deportivos y de ajedrez, presenciales, en los complejos de la municipalidad. Su página de trámites en gob.pe explica que se ofrecen "talleres de verano e invierno dirigidos a niños y jóvenes", dos veces por semana, y en enero de 2023 la municipalidad informó que más de 500 vecinos se habían inscrito en sus Talleres de Verano.',
      body: [
        { kind: 'two',
          leftH3: 'Lo que dice la página de inscripción',
          left: [
            'Las disciplinas listadas son "fútbol, vóley, básquet, karate, tenis, capoeira, ajedrez, taekwondo, baby soccer, judo y gimnasia rítmica; de lunes a viernes de 8:00 a. m. a 5:00 p. m.". La misma página precisa que "los talleres se dictan dos veces por semana y el pago es mensual", y que la modalidad es presencial.',
            'Se dictan en locales municipales del distrito, como la Casa de la Juventud y los complejos deportivos. La página, cuyo último cambio es del 23 de abril de 2024, pide revisar la disponibilidad del taller antes de pagar.'
          ],
          rightH3: 'Lo que contó la nota de 2023',
          right: [
            'El 13 de enero de 2023 la municipalidad anunció el inicio de sus Talleres de Verano 2023, creados para "fortalecer el desarrollo cultural, psicosocial, artístico y deportivo en la población", con talleres organizados por OMAPED, DEMUNA, CIAM y Deportes.',
            'Según esa nota, los beneficiados fueron "más de 500 pueblolibrences" y los talleres "durarán dos meses". No encontramos en gob.pe una nota equivalente de 2026 ni anuncios del verano 2027.'
          ] },
        { kind: 'source', html: 'Fuentes: Municipalidad Distrital de Pueblo Libre (Lima), página de trámite "Inscribirse en un taller en los complejos deportivos de Pueblo Libre" en gob.pe, y nota informativa del 13 de enero de 2023 "Gran acogida en los talleres de verano de la Municipalidad de Pueblo Libre", ambas copiadas el 9 de noviembre de 2026. Para precios, cupos y fechas actuales, consulte a la municipalidad.' },
        { kind: 'p', mt: true, html: 'Nos llama la atención el ajedrez en esa lista. Un chico que disfruta pensando dos jugadas por delante suele disfrutar también programando, porque programar es eso: prever qué va a pasar y comprobarlo. Los talleres municipales no incluyen programación, y nosotros no tenemos ninguna relación con la Municipalidad de Pueblo Libre. Nuestra clase es otra pieza, en línea, que su hijo puede sumar a un taller del distrito sin que los horarios choquen.' }
      ]
    },
    {
      id: 'repartir',
      eyebrow: 'Un verano equilibrado',
      h2: '¿Cómo repartir el verano entre talleres, descanso y programación?',
      lede: 'Con un plan sencillo que deje días libres. Lo que sigue es nuestra propuesta para una familia de Pueblo Libre que empieza en enero; no es la duración de un curso ni de un campamento, y se adapta si empiezan más tarde.',
      body: [
        { kind: 'ol', items: [
          '<strong>Fin de diciembre: descanso de verdad.</strong> Las semanas lectivas de 2026 terminan el 18 de diciembre y las fiestas llegan enseguida. No hace falta empezar nada antes de enero.',
          '<strong>Primera semana de enero: elegir.</strong> Revise con su hijo qué taller del distrito le atrae y reserve una clase gratis de programación para ver si le gusta. Con dos actividades basta.',
          '<strong>Enero: el hábito.</strong> Dos clases de programación por semana, a una hora que no choque con el taller. Su hijo termina cada semana con algo pequeño que funciona.',
          '<strong>Febrero: el proyecto.</strong> Con lo aprendido, su hijo elige un proyecto propio: un juego, un cuento animado o, si es mayor, un programa como el de adivinar números de esta página.',
          '<strong>Antes de volver al colegio: mostrar y decidir.</strong> Su hijo presenta su proyecto a la familia, en inglés si se anima. Con eso deciden juntos si sigue en marzo con menos clases por semana o si cierra aquí.'
        ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Qué tipo de proyecto elegir en febrero según la edad (sugerencia nuestra)', head: ['Edad', 'Herramienta', 'Proyecto de febrero'], rows: [
          ['6 a 8 años', 'Bloques y Scratch', 'Un cuento animado con tres escenas y diálogos en inglés'],
          ['9 a 10 años', 'Scratch avanzado o primeros pasos en Python', 'Un juego con puntaje y niveles'],
          ['11 a 12 años', 'Python', 'El juego de adivinar números, con un jugador humano y otro que es la computadora'],
          ['13 años o más', 'Python, JavaScript o Java', 'Una herramienta útil para su vida: un organizador de tareas o un pequeño sitio web']
        ] },
        { kind: 'source', html: 'Plan y proyectos sugeridos por Modern Age Coders. El mentor los ajusta después de la clase gratis según lo que su hijo ya sabe y lo que le entusiasma.' }
      ]
    },
    {
      id: 'adivinar',
      tint: 'tint',
      eyebrow: 'Una clase de ejemplo',
      h2: '¿Cómo enseña la programación a pensar con estrategia?',
      lede: 'Con un juego clásico: adivinar un número del 1 al 100 recibiendo solo pistas de "too low" o "too high". El ejercicio es nuestro y lo usamos con chicos de 11 a 13 años. La pregunta del mentor es: ¿cuántos intentos necesita, como máximo, alguien que juega con la estrategia más astuta?',
      body: [
        { kind: 'code', label: 'La computadora adivina el 73', lang: 'Python', code: JUEGO, note: 'Cada intento es el punto medio entre <code>bajo</code> y <code>alto</code>. Si se queda corto, el nuevo piso es el intento más uno; si se pasa, el nuevo techo es el intento menos uno. El rango se parte por la mitad en cada vuelta.' },
        { kind: 'code', label: 'Lo que imprime', lang: 'Salida', code: JUEGO_OUT, note: 'Estas seis líneas salieron tal cual al ejecutar el programa con Python 3: el 73 aparece en el sexto intento.' },
        { kind: 'code', label: 'El peor caso, contado por la computadora', lang: 'Python', code: PEOR, note: 'Convertimos el juego en una función que devuelve cuántos intentos hicieron falta, la probamos con cada número secreto posible y nos quedamos con el máximo.' },
        { kind: 'code', label: 'Lo que imprime', lang: 'Salida', code: PEOR_OUT, note: 'Salida copiada sin cambios de nuestra ejecución en Python 3. Diez veces más números no exige diez veces más intentos: de 100 a 1000 solo se pasa de 7 a 10.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Jugar primero sin código.</strong> El mentor piensa un número y el chico pregunta en inglés: "Is it fifty?" Muchos empiezan por 1, 2, 3... y se dan cuenta solos de que así podrían necesitar cien preguntas.',
          '<strong>Descubrir la estrategia.</strong> El mentor pregunta: "Which guess removes the most numbers?" La respuesta, el punto medio, es la idea central del ejercicio.',
          '<strong>Escribir el programa.</strong> El chico traduce la estrategia a Python con dos variables, <code>bajo</code> y <code>alto</code>, y un bucle <code>while</code> que se detiene al acertar.',
          '<strong>Predecir el peor caso.</strong> Antes de correr la segunda versión, cada chico apuesta: ¿cuántos intentos como máximo para 1000 números? Casi nadie dice 10, y esa sorpresa es la lección.',
          '<strong>Darle la vuelta.</strong> Ahora el chico es quien adivina y la computadora da las pistas. Si usa el punto medio, nunca necesitará más de 7 intentos para un número del 1 al 100.'
        ] },
        { kind: 'p', mt: true, html: 'En ajedrez se aprende a mirar varias jugadas por delante; aquí se aprende a medir una estrategia antes de usarla. Esa forma de pensar, comprobar con datos en lugar de creer, es lo que intentamos enseñar en cada clase. Ningún atajo que entregue la respuesta hecha, sea un compañero o una herramienta de inteligencia artificial, enseña a llegar a ella.' }
      ]
    },
    {
      id: 'desde-casa',
      eyebrow: 'Pueblo Libre y las clases en línea',
      h2: '¿Por qué tomar las clases desde casa en Pueblo Libre?',
      lede: 'Porque el verano ya tiene suficientes traslados. Pueblo Libre tiene 99,937 habitantes según los Censos Nacionales 2025 del INEI, y entre las personas censadas hay 5,496 niños de 6 a 11 años y 6,229 adolescentes de 12 a 17. Para todos ellos, una clase en línea no exige salir de casa.',
      body: [
        { kind: 'two',
          leftH3: 'El distrito en cifras',
          left: [
            'Pueblo Libre es el distrito número 29 en población de los 43 de Lima Metropolitana (orden nuestro a partir del Cuadro N.° 1 del INEI). De sus 96,532 personas censadas, el 5.7 % tiene de 6 a 11 años y el 6.5 % de 12 a 17 (cálculo nuestro con el Cuadro N.° 3).',
            'Sus vecinos son Jesús María, Magdalena del Mar, San Miguel, Breña y el Cercado de Lima. Buscar programación en inglés de forma presencial obligaría a organizar idas y vueltas durante todo el verano.'
          ],
          rightH3: 'Lo que cambia con una clase en línea',
          right: [
            'No hay que llevar ni recoger a nadie. Su hijo puede ir a su taller de fútbol o de ajedrez en el complejo municipal por la mañana y programar por la tarde en su cuarto, sin que nadie de la familia pierda la tarde en traslados.',
            'Y el grupo se arma por edad y nivel, no por cercanía. Su hijo comparte clase con chicos que están en su mismo punto, aunque vivan en otras ciudades o países.'
          ] },
        { kind: 'two', mt: true,
          leftH3: 'Clases en inglés',
          left: [
            'Todas nuestras clases son en inglés. Para un chico de Lima es una buena noticia: el EF EPI 2025 ubica a la ciudad en el nivel alto, con 555 puntos, y una clase hablada es la práctica que más aprovecha ese nivel.',
            'Los mentores hablan claro, repiten cuando hace falta y apoyan cada idea con lo que muestran en pantalla.'
          ],
          rightH3: 'Mentores en otro huso horario',
          right: [
            'Los mentores están en la India, que va 10 horas y 30 minutos por delante de Perú sin cambios en el año: las 11:00 a. m. en Pueblo Libre son las 9:30 p. m. allá, y las 5:00 p. m. son las 3:30 a. m. del día siguiente.',
            'Usted no tiene que hacer esas cuentas: al reservar, los horarios aparecen en hora de Perú.'
          ] },
        { kind: 'p', mt: true, html: 'Si quiere conocer el resto de nuestra oferta, <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">la página de programación en inglés para niños de primaria</a> explica con detalle cómo empezar según la edad, y <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">Coding and AI classes in Peru</a> reúne, en inglés, todo lo que ofrecemos en el país. Para colegios bilingües de Lima, vea <a class="ag-inline-link" href="/english-medium-coding-classes-lima">English-medium coding classes in Lima</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Cómo medir el verano',
    h2: '¿Funcionó el verano? Cinco preguntas para comprobarlo',
    lede: 'No por las horas de pantalla, sino por lo que su hijo puede hacer y explicar. Estas preguntas son nuestras y sirven en marzo, al decidir si continuar.',
    table: { caption: 'Preguntas para revisar el verano con su hijo (nuestras)', head: ['Pregunta', 'Edad', 'Respuesta que indica avance'], rows: [
      ['¿Qué hace este proyecto?', '6 a 8 años', 'lo cuenta en orden, del principio al final'],
      ['¿Qué parte se repite?', '8 a 10 años', 'señala el bucle y dice cuántas veces se repite'],
      ['¿Qué pasa si cambio este número?', '10 a 12 años', 'predice el resultado antes de probarlo'],
      ['¿Cuál es el peor caso?', '11 a 14 años', 'piensa en el dato más difícil, como el número que más intentos pide'],
      ['¿Habría una forma más rápida?', '13 años o más', 'propone otra estrategia y explica si ahorraría intentos o no']
    ] },
    left: { h3: 'Para la familia', ps: [
      'Haga la pregunta y espere. A veces la explicación tarda en salir, sobre todo si su hijo la piensa primero en inglés, como en clase.',
      'Si en marzo su hijo sigue, bastan una o dos clases por semana durante el año escolar para no perder lo ganado.'
    ] },
    right: { h3: 'Para su hijo', ps: [
      'Antes de escribir código, juegue el problema a mano. Si sabe ganar el juego, sabrá programarlo.',
      'Cuando el programa funcione, busque el caso que lo haga fallar. Así se aprende de verdad.'
    ] }
  },

  catalogue: {
    eyebrow: 'Catálogo',
    h2: 'Nueve cursos más, por edad',
    lede: 'Todos se dan en vivo, en inglés y por videollamada; usted decide si su hijo va en grupo o con clases individuales.',
    bands: [
      { num: 'I', h3: 'Primaria baja', sub: 'De 6 a 9 años', courses: [
        { code: 'VUPP / INICIO / 01', slug: 'kids-coding-blocks-masterclass', title: 'Primeros programas con bloques', blurb: 'Animaciones y juegos sencillos para quien aún no escribe con soltura.' },
        { code: 'VUPP / INICIO / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Resolver problemas paso a paso', blurb: 'Descomponer un reto grande en pasos chicos, con juegos y acertijos en pantalla.' },
        { code: 'VUPP / INICIO / 03', slug: 'block-coding-app-development-masterclass', title: 'Apps con bloques', blurb: 'Una primera aplicación para el celular, sin escribir código.' }
      ] },
      { num: 'II', h3: 'Primaria alta', sub: 'De 9 a 12 años', courses: [
        { code: 'VUPP / ALTA / 01', slug: 'maths-through-coding', title: 'Matemática programando', blurb: 'Fracciones, patrones y gráficos explicados con pequeños programas.' },
        { code: 'VUPP / ALTA / 02', slug: 'middle-school-math-competitions-course', title: 'Retos de concursos de matemática', blurb: 'Problemas de competencia para chicos de 10 a 14 que buscan más desafío.' },
        { code: 'VUPP / ALTA / 03', slug: 'godot-game-development-course-for-kids-and-teens', title: 'Videojuegos con Godot', blurb: 'Juegos en 2D y 3D escribiendo GDScript, desde los 10 años.' }
      ] },
      { num: 'III', h3: 'Secundaria', sub: 'De 13 a 18 años', courses: [
        { code: 'VUPP / SEC / 01', slug: 'python-complete-masterclass-teens', title: 'Python de principio a fin', blurb: 'El lenguaje más usado para empezar, hasta proyectos propios.' },
        { code: 'VUPP / SEC / 02', slug: 'competitive-programming-for-teens-course', title: 'Programación competitiva', blurb: 'Problemas con tiempo límite, para chicos que disfrutan de los retos.' },
        { code: 'VUPP / SEC / 03', slug: 'complete-app-development-masterclass-for-teens', title: 'Apps para adolescentes', blurb: 'Aplicaciones reales para celular con React Native.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Formato',
    h2: '¿Qué formato tienen las clases de enero a marzo?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Si el taller es de mañana', l: 'La clase de programación puede ir por la tarde, ya en casa.' },
      { time: 'Si el taller es de tarde', l: 'La clase puede ir por la mañana, con la cabeza fresca.' },
      { time: 'Sin taller', l: 'Clases individuales en el momento del día que usted prefiera.' }
    ],
    cells: [
      { h3: 'Un mentor estable', p: 'Su hijo trabaja con la misma persona hasta terminar el curso.' },
      { h3: 'Inglés paso a paso', p: 'Explicaciones cortas, ejemplos visibles y tiempo para responder.' },
      { h3: 'Pensar antes de teclear', p: 'Cada problema se juega o se dibuja antes de programarlo.' },
      { h3: 'Proyectos que se terminan', p: 'Cada etapa acaba con algo que funciona y se puede enseñar.' },
      { h3: 'Comunicación con usted', p: 'Unas líneas tras las clases sobre lo hecho y lo siguiente.' },
      { h3: 'Grupo o a solas', p: 'Entre quince y veinte compañeros de edad cercana, o solo su hijo.' }
    ]
  },

  projectsH2: 'Lo que construyen nuestros alumnos',
  projectsLede: 'Del juego de adivinar números se pasa, con tiempo, a aplicaciones completas. Estos son algunos proyectos de alumnos mayores; hay muchos más en <a class="ag-inline-link" href="/student-labs">Student labs</a> (en inglés).',
  reviewsLede: 'Comentarios publicados en Google por familias y alumnos de varios países, reproducidos en su inglés original.',

  fees: {
    h2: 'Precio de las clases para Pueblo Libre',
    lede: 'Cobramos una mensualidad expresada en dólares estadounidenses, pagada con tarjeta. Es su banco el que la pasa a soles cuando procesa el pago, con el tipo de cambio de ese día, así que el monto en su estado de cuenta puede variar ligeramente.',
    free: ['Primera clase en vivo sin costo', 'Recomendación de curso y nivel', 'Sin datos de tarjeta'],
    group: ['De quince a veinte compañeros de edad cercana', 'Un solo mentor de principio a fin', 'Dos clases en vivo cada semana', 'Pago mensual, sin contrato'],
    one: ['Su hijo y el mentor, nadie más', 'Avance a su propio ritmo', 'El horario lo decide usted']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Vacaciones útiles de programación en Pueblo Libre: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Nuestras clases, en vivo y por internet, se dan solo en inglés. Para un chico de Lima eso suma: aprende a programar y gana soltura al hablar inglés en la misma hora. El mentor va despacio, usa frases cortas y muestra en pantalla lo que explica. El EF EPI 2025 sitúa el inglés de Lima en la banda alta, con 555 puntos.' },
      { q: '¿Cuándo termina el año escolar 2026?', a: 'La norma del MINEDU para 2026 (RM 501-2025-MINEDU) cierra las clases con alumnos el viernes 18 de diciembre de 2026; los últimos días del año quedan para trabajo de gestión de los colegios, sin alumnos. Su colegio puede tener su propia calendarización.' },
      { q: '¿Cuándo empiezan las clases escolares en 2027?', a: 'Al 9 de noviembre de 2026 el MINEDU no había publicado la norma del año escolar 2027 en gob.pe. Como referencia, en 2026 las semanas lectivas empezaron el 16 de marzo. La fecha que vale es la que comunique su colegio.' },
      { q: '¿La municipalidad de Pueblo Libre tiene talleres de programación?', a: 'En lo que publica en gob.pe, sus talleres de verano e invierno son de deporte y ajedrez, presenciales y dos veces por semana. No vimos talleres de programación. Nosotros no estamos vinculados con la municipalidad; nuestras clases son en línea y se pueden sumar a un taller del distrito.' },
      { q: '¿Cuánto dura el verano de programación?', a: 'No vendemos un programa de duración fija. Son clases mensuales que su hijo empieza cuando usted quiera. En esta página proponemos un plan propio de enero a marzo, solo como guía.' },
      { q: '¿Qué horario tienen las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Los mentores están en la India, 10 horas y 30 minutos por delante de Perú, pero usted siempre reserva en hora de Perú.' },
      { q: '¿A partir de qué edad?', a: 'Desde los 6 años, con bloques y personajes. Hacia los 9 o 10 años la mayoría puede escribir Python, y los adolescentes pueden empezar por Python, JavaScript, Java o algoritmos.' },
      { q: '¿Le sirve a un chico que juega ajedrez?', a: 'Mucho. Programar pide prever y comprobar, como el ajedrez. En el ejemplo de esta página el chico descubre que partir el rango por la mitad encuentra cualquier número del 1 al 100 en 7 intentos como máximo.' },
      { q: '¿Qué necesito en casa?', a: 'Una computadora o laptop con cámara y micrófono, audífonos y una conexión a internet estable. El celular no alcanza para programar cómodamente.' },
      { q: '¿Las clases dan nota escolar o algún certificado?', a: 'No dan nota escolar ni certificado del sistema educativo peruano, y no estamos afiliados al MINEDU ni a ningún colegio. Al terminar cada curso su hijo recibe el certificado de finalización propio de Modern Age Coders.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Siga leyendo',
    h2: 'Otras páginas para preparar el verano',
    lede: 'En castellano y en inglés.',
    items: [
      { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños de primaria, en inglés', p: 'Edad de inicio, horas de inglés en primaria y una clase con un juego de colores.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Todo lo que ofrecemos en el Perú, por edad y por tema.' },
      { href: '/english-medium-coding-classes-lima', label: 'English-medium coding classes in Lima', p: 'Para chicos de colegios que ya enseñan en inglés.' },
      { href: '/online-coding-summer-camp', label: 'Online coding summer camp', p: 'El verano de programación tal como lo planteamos en otros países.' },
      { href: '/ai-classes-for-kids', label: 'AI classes for kids', p: 'Inteligencia artificial para niños, explicada sin tecnicismos.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Así es una clase en vivo con nosotros.' }
    ]
  },

  start: {
    h2: 'Reserve una clase de prueba para el verano',
    lede: 'En la clase gratis el mentor juega con su hijo a adivinar un número o a mover un personaje, siempre en inglés sencillo, y observa cómo razona. Después le proponemos curso, formato y ritmo para el verano, sin compromiso.',
    readFirst: 'Dos lecturas previas, ambas en inglés: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> muestra una clase por dentro y <a class="ag-inline-link" href="/courses">All courses</a> reúne el catálogo.',
    note: 'Las clases se dictan en inglés, en vivo y en línea, con mentores desde la India. Por WhatsApp le respondemos también en castellano.',
    formNote: 'Gratis, sin tarjeta, sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Para el verano', links: [
        { href: '/courses/reasoning-and-readiness-course-for-young-thinkers', label: 'Razonamiento para pequeños' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Python para primaria' },
        { href: '/courses/problem-solving-dsa-masterclass-teens', label: 'Algoritmos para adolescentes' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Guías', links: [
        { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños en inglés' },
        { href: '/coding-and-ai-classes-in-peru', label: 'Nuestras clases en Perú' },
        { href: '/online-coding-summer-camp', label: 'Verano de programación' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' }
      ] }
    ],
    bottomRight: 'Siempre por la mitad'
  },

  personalityCss: `
.ag-root.ag-vupp .ag-hero h1 { letter-spacing: -0.006em; max-width: 19ch; }
.ag-root.ag-vupp .ag-capsule { border-left-width: 5px; }
.ag-root.ag-vupp .ag-table td:first-child { font-weight: 600; }
.ag-root.ag-vupp .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-vupp .ag-steps li { line-height: 1.64; }
`,

  dossier: {
    curriculumAuthority: 'MINEDU RM 501-2025-MINEDU (Tabla 1 checked by eye against the signed PDF page; DRE/UGEL and calendarización clauses); gob.pe search for the 2027 norm on 9 November 2026; Municipalidad Distrital de Pueblo Libre (Lima) service page on its sports workshops (last changed 23 April 2024) and note of 13 January 2023; INEI Censos Nacionales 2025 (Lima Metropolitana tabulado, Cuadros N.° 1 and 3); EF EPI 2025; tzdata and INACAL. The summer plan, the project table, the review questions and the guessing-game lesson are our own.',
    localProject: 'A halving-search lesson for a child of 11 to 13 in Pueblo Libre, linked to the chess workshops the municipality lists: the computer guesses 73 between 1 and 100 by always trying the midpoint (Try 1 -> 50 too low ... Try 6 -> 73 correct!), then a function counts the worst case over every secret: From 1 to 100 -> at most 7 tries, From 1 to 1000 -> at most 10 tries. Run with python3 -I. Lesson family: binary search with two bounds, then the worst case.',
    requiredMentions: ['73 correct!', 'at most 7 tries', 'at most 10 tries', 'Which guess removes the most numbers?', 'vie. 18 dic.', 'más de 500 pueblolibrences', 'los talleres se dictan dos veces por semana y el pago es mensual', 'distinta a la sugerida', 'Pueblo Libre es el distrito número 29 en población', 'Siempre por la mitad'],
    sources: [
      { claim: '2026 school calendar, Tabla 1: nine blocks from 2 March to 31 December 2026; 36 teaching and 8 management weeks; DRE and UGEL may set a different distribution; bimestres or trimestres.', url: 'https://cdn.www.gob.pe/uploads/document/file/8968298/7380466-rm-n-501-2025-minedu.pdf' },
      { claim: 'Summer and winter workshops for children and young people in municipal sports complexes, the eleven disciplines, twice a week, in person.', url: 'https://www.gob.pe/58243-inscribirse-en-un-taller-en-los-complejos-deportivos-de-pueblo-libre' },
      { claim: 'Talleres de Verano 2023: more than 500 residents, two months, OMAPED, DEMUNA, CIAM and Deportes (13 January 2023).', url: 'https://www.gob.pe/institucion/munipueblolibre-lima/noticias/688466-gran-acogida-en-los-talleres-de-verano-de-la-municipalidad-de-pueblo-libre' },
      { claim: 'The 2027 school-year materials note of 14 October 2026, the only 2027 school-year result on gob.pe on 9 November 2026.', url: 'https://www.gob.pe/institucion/minedu/noticias/1456889-minedu-inicia-distribucion-de-materiales-educativos-para-el-ano-escolar-2027' },
      { claim: 'Pueblo Libre 99,937 total, 96,532 censada, 5,496 aged 6 to 11 and 6,229 aged 12 to 17.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/27/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'EF EPI 2025: Lima 555, high band.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 with no DST; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'The municipal workshop fee printed on the gob.pe service page: not reproduced; Peru pages carry no soles figures.',
      'A 2027 calendar date: refused; the page says the norm was not published on 9 November 2026 and labels any expectation as ours.',
      'Any link with the Municipalidad de Pueblo Libre: none; the page says so.',
      'Confusing the Lima district with Pueblo Libre in Áncash: the gob.pe institution munipueblolibre (Áncash) was rejected; only munipueblolibre-lima is used.',
      'A camp length, start date or summer price: refused; normal monthly classes, the January to March plan is labelled as ours.',
      'Traffic or commute figures: none used.',
      'Spanish-language teaching: refused; English only, in the capsule and an FAQ.'
    ]
  }
};
