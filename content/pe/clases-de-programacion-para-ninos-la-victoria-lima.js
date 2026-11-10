// SHIP: district (kids, year-round) | La Victoria: from the district's school tech fair to a project built at home | alphabetical order: capitals sort before lower case; sorted(key=str.lower) and ord()
'use strict';
// Clases de programación para niños en La Victoria, Lima (ag- Spanish district door, Peru cluster row PE214, P6, hubGroup
// lima). Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief
// docs/superpowers/plans/2026-11-09-pe-writer-brief.md (rule "City and district pages").
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only; no soles, no typed figure.
// Angle: the parent in La Victoria (Lima, not Chiclayo) whose child saw or joined the district's school technology fair
// and wants to keep building projects all year, from home. Spine: which La Victoria and its census rows; children age by
// age with a running total; the municipality's science and technology fair, school count and computers for a school;
// how to prepare a fair project (our steps); robotics or coding; presenting in English; free park Wi-Fi versus a home
// connection (INEI); one original Python lesson on alphabetical order; clock conversions. No income or class assumptions.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/clases-de-programacion-para-ninos-
// la-victoria-lima/, gob.pe notes fetched 10 November 2026 with curl -sL -A "Mozilla/5.0"; quotes grepped in the raw text):
//  INEI, Censos Nacionales 2025, Lima Metropolitana workbook (inei-censos2025-ind_27-lima-metropolitana.xlsx, 856800 bytes,
//    updated "al 15 de julio del año 2026"). CUADRO Nº 1: "DISTRITO LA VICTORIA | 192325 | 94424 | 97901 | 171310 | ... |
//    21015". CUADRO Nº 3: "DISTRITO LA VICTORIA | 171310 | 9043 | 13305 | 13984 | 33685 | 41908 | 29905 | 29480".
//    CUADRO Nº 2: 6 años 1929, 7 años 2025, 8 años 2312, 9 años 2298, 10 años 2403, 11 años 2338, 12 años 2304; rural 0.
//  INEI national workbook (inei-censos2025-ind_00-peru.xlsx), CUADRO Nº 1: "DISTRITO LA VICTORIA" 106971 under PROVINCIA
//    CHICLAYO, and 192325 for Lima.
//  Municipalidad Distrital de La Victoria - Lima on gob.pe (institucion/munilavictoria):
//    n-1454074 (7 Oct 2026): "II Feria Tecnológica y Científica 2026"; "escolares del distrito y zonas aledañas presentaron
//    proyectos"; "una demostración de robótica" by a visiting university. Mayor's name and quotes left out.
//    n-1128411 (18 Mar 2025): "más de 37 mil escolares en 265 colegios que tiene el distrito". The anaemia figure in the same
//    note is a health statistic and is left out on purpose.
//    n-1375996 (7 Apr 2026): "entrega de 20 computadoras a la Institución Educativa N.° 005 Rosa de América, ubicada en la parte
//    alta del cerro San Cosme"; "en articulación con el Programa Nacional de Infraestructura Educativa (PRONIED)"; "nueva aula
//    tecnológica". Officials' names left out. The school is named only as context, with the municipality's page as source.
//    n-909531 (21 Feb 2024): "WiFi en 10 parques"; "disponible para todos los vecinos y visitantes las 24 horas del día". The
//    network password printed in the note is not repeated.
//  INEI, Estadísticas de las TIC en los Hogares, II Trimestre 2026 (inei_tic_iit2026.txt): "en Lima Metropolitana, el 84,7%
//    de los hogares disponía del servicio"; "el mayor nivel de uso de Internet se registró en Lima Metropolitana, con un
//    92,4%"; "el uso de Internet fue menor entre los niños de 6 a 11 años (68,2%)".
//  MINEDU DITE robotics paper (FACTS 52): "la robótica en educación no es el objetivo, es el medio."
//  EF EPI 2025 (MARKET 1.3): Lima 555 (high from 550); "Speaking score: 480" (Peru).
//  Time (timezone.tsv): America/Lima UTC-5, no DST since 1994; Asia/Kolkata UTC+5:30; India 10 h 30 min ahead.
// Our own calculations (python3 -I): 13305 / 171310 = 7.8 %; 13984 / 171310 = 8.2 %; 192325 / 10141775 = 1.9 %;
//    21015 / 192325 = 10.9 % omitted; 13305 / 818096 = 1.6 % of Lima's 6 to 11; running totals 1929, 3954, 6266, 8564,
//    10967, 13305, 15609 (ages 6 to 12).
// Our own example (orden.py in the src-pages folder), run with python3 -I, exact output:
//    ['Bruno', 'Valeria', 'ana', 'mateo', 'zoe'] / ['ana', 'Bruno', 'mateo', 'Valeria', 'zoe'] / True 90 97
// Neighbouring districts named in plain text only (Cercado de Lima, Lince, San Isidro, San Borja, San Luis, El Agustino).
// Lesson family: alphabetical order of strings; upper case sorts before lower case (ord), fixed with key=str.lower.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  "names = ['mateo', 'Valeria', 'ana', 'Bruno', 'zoe']",
  '',
  'print(sorted(names))',
  'print(sorted(names, key=str.lower))',
  "print('Z' < 'a', ord('Z'), ord('a'))"
].join('\n');

const OUT = [
  "['Bruno', 'Valeria', 'ana', 'mateo', 'zoe']",
  "['ana', 'Bruno', 'mateo', 'Valeria', 'zoe']",
  'True 90 97'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'lima', label: 'Programación para niños en La Victoria' },
  slug: 'clases-de-programacion-para-ninos-la-victoria-lima',
  code: 'prvi',
  accent: '#335A00',
  accentRationale: 'La Victoria: a strong leaf green #335A00, the colour of a science-fair ribbon, distinct from the bluer greens of the neighbouring district doors; allocated in alloc.tsv (contrast 6.55 on the paper #FBF8F2) and checked above 4.5 on every paper tint by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Clases de programación para niños en La Victoria',
  title: 'Clases de programación para niños en La Victoria, Lima',
  description: 'Clases de programación para niños de 6 a 12 años en La Victoria, Lima: en vivo y en inglés desde casa, todo el año, con proyectos propios y en el horario que elija.',
  ogDescription: 'De la feria tecnológica escolar de La Victoria a un proyecto hecho en casa: el censo 2025 del distrito, cómo preparar un proyecto, robótica o programación y un reto de orden alfabético en Python.',
  twitterDescription: 'Programación en vivo y en inglés para niños de La Victoria, Lima, desde casa y en cualquier mes del año.',
  pageName: 'Clases de programación para niños en La Victoria, Lima',
  webPageDescription: 'Guía para familias de La Victoria, en Lima, que buscan clases de programación para niños de 6 a 12 años todo el año: el distrito en los Censos Nacionales 2025 del INEI, la feria tecnológica y científica escolar de la municipalidad, cómo preparar un proyecto, robótica o programación, la conexión a internet en Lima según el INEI y un ejercicio de Python sobre orden alfabético escrito por nosotros.',
  courseDescription: 'Clases en vivo de programación para niños de 6 a 12 años de La Victoria, Lima, dictadas solo en inglés por videollamada: Scratch, Python, juegos, webs y proyectos de IA, en grupo o individuales, en cualquier época del año y a la hora que usted elija.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Programación para niños, La Victoria',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#victoria', label: '¿Qué La Victoria?' },
    { href: '#feria', label: 'Feria tecnológica' },
    { href: '#proyecto', label: 'Un proyecto' },
    { href: '#alfabeto', label: 'Reto en Python' },
    { href: '#conexion', label: 'Conexión' }
  ],
  eyebrow: 'Lima &middot; La Victoria &middot; Niños de primaria',
  h1: 'Clases de programación para niños en La Victoria',
  lede: 'En octubre de 2026 La Victoria celebró su segunda feria tecnológica y científica escolar. Para un niño que se entusiasmó con lo que vio, lo siguiente es aprender a construir sus propios proyectos, y eso no tiene por qué esperar a la próxima feria. Esta guía reúne las cifras de niños que dejó el censo de 2025 en el distrito, cómo preparar un proyecto, qué pasa con la robótica y un reto en Python.',
  secondaryCta: { href: '#proyecto', label: 'Cómo preparar un proyecto' },
  wa: 'Hola Modern Age Coders, somos de La Victoria (Lima) y queremos clases de programación para nuestro hijo o hija. ¿Podemos reservar una clase gratis?',
  heroNote: 'Clases en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; un mentor fijo que enseña en inglés',
  spec: [
    ['Para quién', 'Niños de 6 a 12 años; grupos para adolescentes aparte'],
    ['Dónde', 'Desde casa, en La Victoria, Lima'],
    ['Qué hacen', 'Juegos, webs, apps y proyectos para mostrar'],
    ['Idioma', 'Todas las clases en inglés'],
    ['Formato', 'Grupo de quince a veinte o individual'],
    ['Para probar', 'Una clase gratis, sin tarjeta']
  ],
  capsuleQ: 'Respuesta breve',
  capsule: 'Sí. Modern Age Coders ofrece a los niños de La Victoria, en Lima, de 6 a 12 años, clases de programación en vivo y en inglés que se toman desde casa durante todo el año. Del otro lado de la cámara hay un mentor que vive en la India y usa un inglés claro y pausado, y acompaña a cada niño a su propio ritmo. Se arranca con Scratch y bloques, se sigue con Python, webs y juegos, y cada etapa termina en un proyecto que el niño puede mostrar. Hay grupos y clases individuales a cualquier hora, y la sesión de prueba corre por nuestra cuenta.',

  picks: {
    eyebrow: 'Cursos recomendados',
    h2: '¿Qué curso le conviene a un niño de La Victoria que quiere crear proyectos?',
    lede: 'Elegimos tres pensando en niños que quieren construir algo que se pueda mostrar: un juego, una página web o un pequeño proyecto de inteligencia artificial.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'PRVI / 01', title: 'Bloques para crear', alt: 'Imagen del curso de programación con bloques para niños', note: 'Para chicos de 6 a 12, divididos por edades. Juegos, animaciones y apps sencillas: el primer proyecto presentable suele salir en pocas semanas.' },
      { course: 'kids-ai-web-development-course', code: 'PRVI / 02', title: 'Una web hecha por niños', alt: 'Imagen del curso de desarrollo web para niños', note: 'Desde los 9. HTML y CSS para publicar una página propia, por ejemplo la presentación de un proyecto de feria, con fotos y explicación.' },
      { course: 'python-ai-kids-masterclass', code: 'PRVI / 03', title: 'Python e inteligencia artificial', alt: 'Imagen del curso de Python e IA para niños', note: 'Para chicos que ya tienen 9 o más. Código escrito, listas ordenadas como en el reto de esta página y proyectos sencillos con IA.' }
    ]
  },

  sections: [
    {
      id: 'victoria',
      eyebrow: 'Primero, el lugar',
      h2: '¿De qué La Victoria trata esta página?',
      lede: 'Del distrito de La Victoria en Lima Metropolitana, vecino del Cercado de Lima, Lince, San Isidro, San Borja, San Luis y El Agustino. El censo de 2025 registra también un distrito La Victoria en la provincia de Chiclayo, con 106,971 habitantes.',
      body: [
        { kind: 'table', numCols: [1], caption: 'La Victoria (Lima) en los Censos Nacionales 2025', head: ['Concepto', 'Cifra'], rows: [
          ['Población total estimada', '192,325'],
          ['Población censada', '171,310'],
          ['Población omitida', '21,015'],
          ['Censados de 0 a 5 años', '9,043'],
          ['Censados de 6 a 11 años', '13,305'],
          ['Censados de 12 a 17 años', '13,984']
        ] },
        { kind: 'source', html: 'Fuente: INEI, Censos Nacionales 2025, cuadros 1 y 3 para Lima Metropolitana (versión con límites al 15 de julio de 2026); la cifra de Chiclayo viene del cuadro 1 del archivo nacional. Descargamos y leímos los dos archivos el 8 y el 10 de noviembre de 2026.' },
        { kind: 'two', mt: true,
          leftH3: 'Una omisión más alta',
          left: [
            'En La Victoria el INEI estima que el 10,9 % de la población no fue censada (21,015 de 192,325, cálculo nuestro). Es una proporción mayor que en otros distritos de Lima, y significa que las cifras por edad, que solo cuentan a los censados, se quedan cortas.',
            'Por eso leemos los números de niños como un mínimo: en el distrito viven al menos los que aparecen en la tabla.'
          ],
          rightH3: 'El distrito en Lima',
          right: [
            'La Victoria tiene el 1,9 % de la población de Lima Metropolitana. Entre sus censados, el 7,8 % tiene de 6 a 11 años y el 8,2 %, de 12 a 17 (cálculos nuestros).',
            'Todo el distrito es urbano para el INEI. Las cifras no dicen nada de ingresos ni de cómo vive cada familia, y no les pedimos eso.'
          ] }
      ]
    },
    {
      id: 'edades',
      eyebrow: 'Edad por edad',
      h2: '¿Cuántos niños de primaria hay en La Victoria?',
      lede: 'El censo cuenta 13,305 niños de 6 a 11 años, y 15,609 si se suma a los de 12. La tabla muestra cada edad con el total acumulado, para ver cuántos niños tienen la edad de su hijo o menos.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Niños censados en La Victoria por edad, con total acumulado (2025)', head: ['Edad', 'Niños censados', 'Acumulado desde los 6 años (cálculo nuestro)'], rows: [
          ['6 años', '1,929', '1,929'],
          ['7 años', '2,025', '3,954'],
          ['8 años', '2,312', '6,266'],
          ['9 años', '2,298', '8,564'],
          ['10 años', '2,403', '10,967'],
          ['11 años', '2,338', '13,305'],
          ['12 años', '2,304', '15,609']
        ] },
        { kind: 'source', html: 'Fuente: INEI, cuadro 2 de los Censos Nacionales 2025 (edades simples) para Lima Metropolitana. El acumulado a los 11 años coincide con el grupo de 6 a 11 del cuadro 3, 13,305, lo que confirma que las filas están completas. La tercera columna es nuestra.' },
        { kind: 'p', mt: true, html: 'Según la tabla de edades normativas del MINEDU, que mide la edad al 31 de marzo, un niño de 6 años está en 1° de primaria y uno de 11 en 6°. La edad con más niños censados en el distrito es la de 10 años, 2,403, que corresponde a 5° de primaria: justo el momento en que muchos pasan de bloques a escribir código.' }
      ]
    },
    {
      id: 'feria',
      eyebrow: 'Ciencia y tecnología escolar',
      h2: '¿Qué es la Feria Tecnológica y Científica de La Victoria?',
      lede: 'Es una feria escolar que organiza la Municipalidad de La Victoria. La segunda edición, en 2026, reunió a estudiantes del distrito y de zonas cercanas que presentaron proyectos de ciencia e innovación, según la nota municipal del 7 de octubre de 2026.',
      body: [
        { kind: 'p', html: 'La nota cuenta que "escolares del distrito y zonas aledañas presentaron proyectos", que hubo experimentos y materiales educativos de instituciones invitadas, y que una universidad hizo una demostración de robótica. No participamos en la feria ni tenemos relación con la municipalidad; la citamos porque muestra el interés del distrito por la tecnología escolar.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Educación y tecnología en notas de la Municipalidad de La Victoria', head: ['Fecha de la nota', 'Qué informó la municipalidad'], rows: [
          ['18 de marzo de 2025', 'Más de 37 mil escolares en 265 colegios públicos y privados del distrito'],
          ['21 de febrero de 2024', 'WiFi gratuito en 10 parques, disponible las 24 horas del día'],
          ['7 de abril de 2026', '20 computadoras entregadas, con el PRONIED del MINEDU, a la I.E. N.° 005 Rosa de América, en la parte alta del cerro San Cosme, para una nueva aula tecnológica'],
          ['7 de octubre de 2026', 'II Feria Tecnológica y Científica 2026 con proyectos de escolares']
        ] },
        { kind: 'source', html: 'Fuente: notas de prensa de la Municipalidad Distrital de La Victoria en gob.pe (institucion/munilavictoria), consultadas por nosotros el 10 de noviembre de 2026. Dejamos fuera los nombres de autoridades y la contraseña del WiFi que aparece en la nota de 2024. El colegio se menciona solo porque lo nombra la propia nota municipal.' },
        { kind: 'p', mt: true, html: 'Con más de 37 mil escolares en el distrito, según la municipalidad, una feria muestra una parte pequeña de lo que los chicos pueden hacer. La programación permite que cualquier niño prepare un proyecto propio en casa, a su ritmo, aunque no llegue a presentarlo en una feria. Lo que importa es haberlo construido y poder explicarlo.' }
      ]
    },
    {
      id: 'proyecto',
      eyebrow: 'Paso a paso',
      h2: '¿Cómo prepara un niño un proyecto de programación para una feria?',
      lede: 'Con un problema pequeño y real, un programa que lo resuelva y una explicación clara. Estos son los pasos que seguimos en clase con niños de 9 a 12 años; son nuestros, no los de ninguna feria en particular.',
      body: [
        { kind: 'ol', items: [
          '<strong>Elegir un problema de casa o del colegio.</strong> Por ejemplo: ordenar la lista de compañeros para un sorteo, llevar la cuenta de los libros leídos o registrar la temperatura de la semana.',
          '<strong>Decir qué debe hacer el programa en una frase.</strong> En inglés, con ayuda del mentor: "My program sorts names in alphabetical order".',
          '<strong>Construir la versión más simple.</strong> Pocas líneas que funcionen. Mejorar después, no antes.',
          '<strong>Probar casos raros.</strong> ¿Qué pasa con un nombre en minúsculas, uno repetido o una lista vacía? Aquí aparecen los errores interesantes, como el del reto de más abajo.',
          '<strong>Explicar el error que encontró.</strong> Un buen proyecto muestra qué falló y cómo se arregló. Los jurados y los profesores suelen valorar más eso que un programa perfecto.',
          '<strong>Presentarlo.</strong> Una página web sencilla o una presentación corta, con el código, una captura y la explicación en sus palabras.'
        ] },
        { kind: 'p', mt: true, html: 'Ninguno de estos pasos promete un premio; las ferias las evalúan sus organizadores. Lo que el niño gana en el camino es el hábito de pensar el problema antes de escribir, probar lo que hizo y contar lo que aprendió.' }
      ]
    },
    {
      id: 'robotica',
      eyebrow: 'Robótica',
      h2: '¿Hace falta un robot para aprender tecnología?',
      lede: 'No. Un robot es una forma vistosa de mostrar un programa, pero el programa es lo que hace que el robot funcione. Sin código, un robot no decide nada por su cuenta.',
      body: [
        { kind: 'p', html: 'Una frase del documento de robótica educativa del MINEDU lo resume: "la robótica en educación no es el objetivo, es el medio". En nuestras clases no hay piezas, motores ni sensores que comprar; solo código. Todo lo que su hijo aprende con nosotros sobre condiciones, bucles y listas le sirve igual si algún día programa un robot en el colegio o en una feria.' },
        { kind: 'p', html: 'Si quiere comparar con calma las dos opciones, tenemos una guía sobre <a class="ag-inline-link" href="/robotica-o-programacion-para-ninos">robótica o programación para niños</a>.' }
      ]
    },
    {
      id: 'ingles',
      eyebrow: 'Presentar en inglés',
      h2: '¿Puede un niño que recién aprende inglés presentar su proyecto en inglés?',
      lede: 'Sí, con frases cortas y práctica. En nuestras clases, que son todas en inglés, cada etapa termina con el niño explicando su proyecto al mentor. Al principio son tres o cuatro frases; con los meses, una presentación completa.',
      body: [
        { kind: 'two',
          leftH3: 'Las primeras frases',
          left: [
            '"This is my game." "You press space to jump." "I fixed a bug here." Son frases que el mentor enseña, el niño repite y luego adapta a su proyecto.',
            'Nadie espera un inglés perfecto. Se espera que el niño pueda decir qué hizo y por qué, aunque mezcle algo de castellano al principio.'
          ],
          rightH3: 'Por qué la parte oral',
          right: [
            'Hablar es la parte que menos se ejercita. En el EF EPI 2025, el puntaje peruano de speaking quedó en 480, por debajo de las demás habilidades, mientras que Lima en conjunto sumó 555 y se ubicó en la franja alta.',
            'Explicar un proyecto propio es la práctica oral más útil que conocemos: el niño sabe de qué habla y tiene algo que mostrar.'
          ] },
        { kind: 'p', mt: true, html: 'El mentor modera la velocidad, busca otra manera de decir lo mismo y deja tiempo para contestar. Las primeras dos o tres semanas suelen ser de adaptación al acento; después la mayoría de niños sigue la clase sin problema. Hay más detalle en <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">programación para niños en inglés</a>.' }
      ]
    },
    {
      id: 'alfabeto',
      tint: 'tint',
      eyebrow: 'Reto en Python',
      h2: '¿Por qué Python pone "Bruno" antes que "ana" al ordenar?',
      lede: 'Porque para la computadora las mayúsculas van antes que las minúsculas. Es un reto nuestro para niños de 10 a 12 años: ordenar la lista de participantes de una feria y descubrir por qué el resultado no sale en el orden que esperaba.',
      body: [
        { kind: 'code', label: 'Ordenar nombres', lang: 'Python', code: PY, note: 'Algunos nombres están con mayúscula inicial y otros no, como pasa cuando cada niño escribe el suyo.' },
        { kind: 'code', label: 'Salida exacta', lang: 'Salida', code: OUT, note: 'Resultado que nos devolvió Python 3 al correr orden.py, copiado sin cambios.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ordenar a mano.</strong> El niño escribe los cinco nombres en orden alfabético en su cuaderno: ana, Bruno, mateo, Valeria, zoe.',
          '<strong>La sorpresa.</strong> <code>sorted(names)</code> da otra cosa: primero Bruno y Valeria, después ana, mateo y zoe. El mentor pregunta: "Why does Valeria come before ana?".',
          '<strong>La pista.</strong> La última línea muestra que <code>\'Z\' &lt; \'a\'</code> es <code>True</code>: cada letra tiene un número, y la Z mayúscula (90) es menor que la a minúscula (97). Todas las mayúsculas van antes que todas las minúsculas.',
          '<strong>La solución.</strong> <code>key=str.lower</code> le dice a Python que compare los nombres como si estuvieran en minúsculas, sin cambiarlos. El resultado coincide con el cuaderno.',
          '<strong>Su propia lista.</strong> El reto es agregar "Ñusta" y "nicolás" y explicar en inglés el resultado. Ahí aparece un tema nuevo: las letras con tilde y la ñ, que también tienen su propio número.'
        ] },
        { kind: 'p', mt: true, html: 'El ejercicio enseña a desconfiar de un resultado que "parece" correcto y a buscar la regla que lo explica. Esa costumbre, comprobar en lugar de aceptar, es la que queremos que su hijo se lleve de cada clase, y es la que más falta cuando alguien copia código de otro o de una herramienta de IA.' }
      ]
    },
    {
      id: 'conexion',
      eyebrow: 'Conexión',
      h2: '¿Sirve el WiFi de un parque para una clase en línea?',
      lede: 'Para conectarse un momento, quizá; para una clase de una hora, no conviene. Una clase de programación pide una conexión estable, una computadora con teclado y un lugar tranquilo, y eso suele estar en casa.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Internet en Lima Metropolitana y uso infantil, segundo trimestre de 2026', head: ['Dato del INEI', 'Valor'], rows: [
          ['Hogares de Lima Metropolitana con internet', '84,7 %'],
          ['Uso de internet en Lima Metropolitana, desde los 6 años', '92,4 %'],
          ['Usuarios de internet de 6 a 11 años, todo el Perú', '68,2 %']
        ] },
        { kind: 'source', html: 'Fuente: INEI, boletín trimestral sobre TIC en los hogares (abril a junio de 2026, ENAHO preliminar). En la definición del INEI, Lima Metropolitana abarca también el Callao; para La Victoria sola no hay dato, y la tercera fila corresponde a todo el país.' },
        { kind: 'two', mt: true,
          leftH3: 'En casa',
          left: [
            'Más de ocho de cada diez hogares de Lima Metropolitana tienen internet, según el INEI. Si el suyo es uno de ellos, ya tiene lo principal.',
            'Pedimos una computadora o laptop, cámara, micrófono y audífonos. El celular sirve para mirar, no para escribir código.'
          ],
          rightH3: 'Sin moverse',
          right: [
            'La clase en línea evita el trayecto de ida y vuelta y la espera a la salida. La hora de clase es solo eso: una hora.',
            'Si la familia viaja o su hijo no puede salir, la clase sigue igual, desde donde haya una buena conexión.'
          ] }
      ]
    },
    {
      id: 'reloj',
      eyebrow: 'Horario',
      h2: '¿Cuándo es de día en la India si en La Victoria es la una de la tarde?',
      lede: 'Nunca: a la 1:00 p. m. de Lima, en la India son las 11:30 de la noche. La diferencia es siempre de 10 horas y 30 minutos, todo el año. La tabla convierte algunas horas como ejemplo; no es un horario de clases.',
      body: [
        { kind: 'table', numCols: [], caption: 'Hora en La Victoria y en la India (conversiones de ejemplo)', head: ['La Victoria', 'India', 'Allá es'], rows: [
          ['7:45 a. m.', '6:15 p. m.', 'Final de la tarde'],
          ['9:45 a. m.', '8:15 p. m.', 'Noche'],
          ['10:15 a. m.', '8:45 p. m.', 'Noche'],
          ['1:00 p. m.', '11:30 p. m.', 'Casi medianoche'],
          ['4:45 p. m.', '3:15 a. m.', 'Madrugada del día siguiente'],
          ['7:15 p. m.', '5:45 a. m.', 'Mañana del día siguiente']
        ] },
        { kind: 'source', html: 'Base de la conversión: Lima en UTC-5 sin horario de verano desde 1994 (tzdata America/Lima, hora oficial que custodia el INACAL) y la India en UTC+5:30 (Asia/Kolkata), también sin cambios en el año.' },
        { kind: 'p', mt: true, html: 'No tiene que hacer la cuenta: usted reserva en hora de Lima y el sistema avisa al mentor en la suya. Lo que sí conviene es elegir una hora en que su hijo esté descansado. Con colegio en la mañana, la tarde funciona; con colegio en la tarde, la mañana.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progreso',
    h2: '¿Qué proyectos puede hacer un niño según su avance?',
    lede: 'Cinco niveles propios, cada uno con un tipo de proyecto, que usamos para mostrar a la familia hasta dónde ha llegado su hijo.',
    table: { caption: 'Cinco niveles de proyecto (nuestros)', head: ['Nivel', 'Edad habitual', 'Proyecto típico'], rows: [
      ['1. Animación', '6 a 7 años', 'una escena en Scratch con personajes que hablan'],
      ['2. Juego simple', '7 a 9 años', 'un juego de atrapar objetos con puntaje'],
      ['3. Programa con datos', '9 a 10 años', 'una lista en Python que se ordena y se muestra'],
      ['4. Herramienta útil', '10 a 11 años', 'un programa que organiza algo real, como los participantes de una feria'],
      ['5. Proyecto presentado', '11 a 12 años', 'una web o un juego explicado en inglés frente al mentor y la familia']
    ] },
    left: { h3: 'Para la familia', ps: [
      'Siéntese como jurado y deje que su hijo le presente su último proyecto. Escuchará lo que entendió.',
      'Un error encontrado y explicado vale tanto como un programa que funciona a la primera.'
    ] },
    right: { h3: 'Para el niño', ps: [
      'Pruebe su programa con datos raros antes de mostrarlo.',
      'Si el orden sale extraño, busque la regla escondida.'
    ] }
  },

  catalogue: {
    eyebrow: 'Catálogo',
    h2: 'Más cursos para niños de primaria',
    lede: 'Igual que los anteriores: clases en directo, idioma inglés, un mentor asignado y la opción de grupo o de clases a solas.',
    bands: [
      { num: 'I', h3: 'Arrancar', sub: 'De 6 a 9 años', courses: [
        { code: 'PRVI / INI / 01', slug: 'scratch-programming-complete-course', title: 'Scratch para principiantes', blurb: 'Juegos y animaciones con bloques, desde cero.' },
        { code: 'PRVI / INI / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Pensar como programador', blurb: 'Acertijos para partir problemas en pasos.' },
        { code: 'PRVI / INI / 03', slug: 'minecraft-coding-for-kids-course', title: 'Programación en Minecraft', blurb: 'Comandos y construcciones dentro del juego.' }
      ] },
      { num: 'II', h3: 'Construir', sub: 'De 8 a 12 años', courses: [
        { code: 'PRVI / CONS / 01', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Juegos en Roblox', blurb: 'Mapas, reglas y puntajes escritos en Luau.' },
        { code: 'PRVI / CONS / 02', slug: 'block-coding-app-development-masterclass', title: 'Apps con bloques', blurb: 'Una aplicación de teléfono, pantalla por pantalla.' },
        { code: 'PRVI / CONS / 03', slug: 'hackathon-prep-for-kids-coding-innovation-ai-projects-course', title: 'Preparación para hackatones', blurb: 'Idear, construir y presentar un proyecto con plazo.' }
      ] },
      { num: 'III', h3: 'Pensar en grande', sub: 'De 9 a 12 años', courses: [
        { code: 'PRVI / GRAN / 01', slug: 'ai-literacy-for-kids-course', title: 'Entender la inteligencia artificial', blurb: 'Por qué una IA acierta o se equivoca, contado para niños.' },
        { code: 'PRVI / GRAN / 02', slug: 'maths-through-coding', title: 'Matemática programada', blurb: 'Patrones y problemas resueltos con código.' },
        { code: 'PRVI / GRAN / 03', slug: 'cpp-programming-for-kids-course', title: 'C++ inicial', blurb: 'Un segundo lenguaje con retos cortos.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo trabajamos',
    h2: '¿Qué incluye cada mes de clases?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Mañana', l: 'Para quienes estudian en el turno tarde.' },
      { time: 'Tarde', l: 'Para quienes salen del colegio al mediodía.' },
      { time: 'A medida', l: 'Clases individuales en el horario que usted fije.' }
    ],
    cells: [
      { h3: 'Mentor fijo', p: 'La misma persona durante todo el curso.' },
      { h3: 'Inglés comprensible', p: 'Explicaciones breves, siempre con algo que ver en pantalla.' },
      { h3: 'El niño construye', p: 'Escribe su código; el mentor orienta.' },
      { h3: 'Proyecto por etapa', p: 'Algo que se puede mostrar en casa o en una feria.' },
      { h3: 'Familia al tanto', p: 'Notas breves sobre lo trabajado.' },
      { h3: 'Grupo o individual', p: 'Quince a veinte niños o solo su hijo.' }
    ]
  },

  projectsH2: 'Proyectos de alumnos',
  projectsLede: 'Así se ven algunos proyectos de alumnos mayores que empezaron con bloques. La colección completa está en <a class="ag-inline-link" href="/student-labs">Student labs</a> (en inglés).',
  reviewsLede: 'Lo que escribieron en Google padres y alumnos, sin traducir.',

  fees: {
    h2: 'Precios para familias de La Victoria',
    lede: 'La mensualidad figura en dólares estadounidenses y se cobra a una tarjeta. El banco que la emite convierte el importe, así que lo que ve en su resumen depende del cambio vigente ese día.',
    free: ['Clase de prueba gratuita', 'Un reto para ver el punto de partida', 'Sin datos de tarjeta'],
    group: ['Quince a veinte niños de edad parecida', 'Mentor fijo', 'Dos clases semanales en vivo', 'Mensualidad sin permanencia'],
    one: ['Su hijo y su mentor', 'Ritmo y temas a medida', 'Horario elegido por usted']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Programación para niños en La Victoria: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Damos las clases únicamente en inglés, y siempre en vivo. Para muchas familias de La Victoria esa es la gracia: su hijo construye proyectos y, de paso, aprende a explicarlos en inglés. El mentor va despacio y repite, y hablar, el punto flojo del país según el índice EF EPI 2025, es justo lo que se entrena.' },
      { q: '¿Esta página es de La Victoria de Lima o de Chiclayo?', a: 'De La Victoria en Lima Metropolitana, con 192,325 habitantes según el censo de 2025. Hay otro distrito La Victoria en Chiclayo; nuestras clases en línea también llegan allí, pero los datos de esta página son del distrito limeño.' },
      { q: '¿Ayudan a preparar proyectos para ferias escolares?', a: 'Enseñamos a construir y explicar proyectos de programación, que el niño puede llevar a una feria si su colegio participa. No organizamos ferias ni prometemos premios; la evaluación es de cada feria.' },
      { q: '¿Necesita mi hijo un kit de robótica?', a: 'No. Enseñamos programación, no hardware, y no usamos kits. Lo que aprende le sirve si algún día programa un robot.' },
      { q: '¿Cuántos niños de primaria hay en La Victoria?', a: 'El cuadro 3 del censo de 2025 registra 13,305 niños de 6 a 11 años entre los censados del distrito. El INEI estima además 21,015 personas omitidas, sin edad publicada.' },
      { q: '¿A qué hora son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Si en La Victoria es la 1:00 p. m., en la India son las 11:30 p. m.' },
      { q: '¿Puede tomar las clases con el WiFi de un parque?', a: 'No lo recomendamos. Una clase de una hora necesita conexión estable, una computadora con teclado y un lugar tranquilo, y eso suele estar en casa.' },
      { q: '¿Qué ofrecen a partir de los 13 años?', a: 'Grupos solo de adolescentes, con proyectos más largos: aplicaciones web, programas en Java o Python y primeros modelos de IA.' },
      { q: '¿Trabajan con la municipalidad, el PRONIED o algún colegio del distrito?', a: 'No. Somos una academia privada en línea, sin convenio con la Municipalidad de La Victoria, el MINEDU, el PRONIED, la UGEL ni con colegios. Nuestras clases no ponen notas; quien completa un curso recibe un certificado de finalización de Modern Age Coders.' },
      { q: '¿En qué moneda se paga?', a: 'Cobramos en dólares de Estados Unidos a través de una tarjeta, y es el banco quien hace el cambio. La clase inicial es gratuita y no se registra ninguna tarjeta para tomarla.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Otras páginas',
    h2: 'Para seguir leyendo',
    lede: 'Guías relacionadas para familias de Lima.',
    items: [
      { href: '/robotica-o-programacion-para-ninos', label: 'Robótica o programación', p: 'Qué conviene aprender primero y por qué.' },
      { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños en inglés', p: 'Cómo se aprende con un mentor que habla inglés.' },
      { href: '/programacion-para-ninos-de-10-anos', label: 'Programación para niños de 10 años', p: 'La edad del paso de bloques a código.' },
      { href: '/vacaciones-utiles-de-programacion-surquillo-lima', label: 'Vacaciones útiles en Surquillo', p: 'Ideas de verano en otro distrito de Lima.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Nuestro método de enseñanza (en inglés).' },
      { href: '/courses', label: 'All courses', p: 'El catálogo completo (en inglés).' }
    ]
  },

  start: {
    h2: 'Reserve una clase gratis desde La Victoria',
    lede: 'Su hijo conoce al mentor, conversa un poco en inglés sencillo y resuelve un pequeño reto, con bloques o con Python según su edad. Con lo que vemos, le proponemos un curso y un formato; la decisión es suya.',
    readFirst: 'Si quiere informarse antes: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> y <a class="ag-inline-link" href="/courses">All courses</a> (en inglés).',
    note: 'Cada clase ocurre en directo por internet, guiada desde la India y en inglés. En WhatsApp puede consultarnos en castellano.',
    formNote: 'Gratis, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Cursos', links: [
        { href: '/courses/kids-coding-blocks-masterclass', label: 'Bloques' },
        { href: '/courses/kids-ai-web-development-course', label: 'Webs para niños' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Python e IA' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Guías', links: [
        { href: '/robotica-o-programacion-para-ninos', label: 'Robótica o programación' },
        { href: '/programacion-para-ninos-de-10-anos', label: 'Niños de 10 años' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: 'La Z mayúscula vale 90, la a minúscula 97'
  },

  personalityCss: `
.ag-root.ag-prvi .ag-hero h1 { max-width: 20ch; letter-spacing: -0.01em; }
.ag-root.ag-prvi .ag-capsule { border-left-width: 4px; border-radius: 0; }
.ag-root.ag-prvi .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-prvi .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-prvi .ag-steps li { line-height: 1.6; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Lima Metropolitana workbook cuadros 1, 2 and 3; national workbook cuadro 1 for Chiclayo; updated to 15 July 2026); INEI Estadísticas de las TIC en los Hogares, II trimestre 2026; Municipalidad Distrital de La Victoria notes on gob.pe (21 February 2024, 18 March 2025, 7 April 2026, 7 October 2026); MINEDU DITE robotics paper and edades normativas; EF EPI 2025; tzdata and INACAL. Read 8 to 10 November 2026. The project steps, levels and Python exercise are our own.',
    localProject: 'Sorting a science-fair participant list for a 10 to 12 year old in La Victoria: sorted() puts Bruno and Valeria before ana because upper case comes first (ord Z is 90, a is 97), and key=str.lower gives the notebook order; the child then adds Ñusta and nicolás and explains the result in English. Lesson family: alphabetical order of strings, ord(), key=str.lower.',
    requiredMentions: ['True 90 97', "['ana', 'Bruno', 'mateo', 'Valeria', 'zoe']", 'II Feria Tecnológica y Científica 2026', 'Más de 37 mil escolares en 265 colegios públicos y privados del distrito', 'WiFi gratuito en 10 parques', '106,971 habitantes', 'La Z mayúscula vale 90, la a minúscula 97', 'Acumulado desde los 6 años'],
    sources: [
      { claim: 'La Victoria 192,325 total, 171,310 censused, 21,015 omitted; age groups; single ages 6 to 12; all urban.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/27/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'La Victoria district in Chiclayo province, 106,971.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'II Feria Tecnológica y Científica 2026 with student projects and a robotics demonstration (7 October 2026).', url: 'https://www.gob.pe/institucion/munilavictoria/noticias/1454074-la-victoria-premia-el-ingenio-escolar-en-su-ii-feria-tecnologica-y-cientifica-2026' },
      { claim: 'More than 37,000 students in 265 schools (18 March 2025).', url: 'https://www.gob.pe/institucion/munilavictoria/noticias/1128411-mas-de-24-mil-escolares-volvieron-a-clases-en-la-victoria' },
      { claim: '20 computers to I.E. N.° 005 Rosa de América with PRONIED (7 April 2026).', url: 'https://www.gob.pe/institucion/munilavictoria/noticias/1375996-la-victoria-municipio-entrego-20-computadoras-a-estudiantes-de-cerro-san-cosme' },
      { claim: 'Free WiFi in 10 parks, 24 hours a day (21 February 2024).', url: 'https://www.gob.pe/institucion/munilavictoria/noticias/909531-municipalidad-de-la-victoria-ofrece-wifi-gratis-en-10-parques-del-distrito' },
      { claim: 'Lima Metropolitana households with internet 84.7%, internet use 92.4%; children 6 to 11 68.2% (national).', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'Robotics is the means, not the goal (MINEDU DITE).', url: 'https://cdn.www.gob.pe/uploads/document/file/8182643/6842169-minedu-robotica.pdf' },
      { claim: 'Peru UTC-5 with no DST since 1994; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'The anaemia figure in the March 2025 municipal note: a health statistic, left out on purpose.',
      'The park WiFi password and officials\' names: left out.',
      'Fair prizes or results for our students: refused; we did not take part and promise no awards.',
      'Robot kits or hardware: none; the page says we teach programming only.',
      'Any income or class reading of the census, or of the high omitted share: refused.',
      'Spanish-language teaching, municipal or school links, grades or typed fees: refused.'
    ]
  }
};
