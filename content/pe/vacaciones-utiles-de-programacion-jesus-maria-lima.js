// SHIP: vacaciones útiles district (ES) | Jesús María: talleres municipales de verano más código en casa | a Caesar cipher: a function with parameters, return and % 26 wraparound
'use strict';
// Vacaciones útiles de programación en Jesús María (ag- Spanish-language district door, Peru cluster row PE222, P2, hubGroup lima).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only; no soles, no typed figure, no camp length.
// Angle: the Jesús María parent who types "vacaciones útiles jesús maría", "talleres de verano jesús maría" or "vacaciones
// útiles municipalidad de jesús maría" (KEYWORDS.md, autocomplete). Spine: what the municipality itself published about its
// summer workshops (gob.pe notes, January 2022 and January 2025): sport and art, no programming in the notes we read; how a
// family can pair a district workshop with a live online coding class at home; who lives in the district (INEI Censos 2025:
// fewer children, many older adults); what secundaria does not timetable (CNEB); the municipality's open-data invitation
// (30 Sept 2025) as a door for teenagers; an original Caesar-cipher lesson; Peru to India clock.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/vacaciones-utiles-de-programacion-jesus-maria-lima/,
// fetched 2026-11-09 with curl from www.gob.pe, the municipality's own institutional pages, quotes grepped in the raw text):
//  jm-577087.html, Nota Informativa "4 de enero de 2022": "Jesús María: Este 10 de enero inician talleres culturales de verano
//    para nuestros niños y adolescentes"; "Más de 13 disciplinas"; "los talleres que ofrece el Centro Cultural de la
//    Municipalidad de Jesús María"; "teatro, ballet, dibujo y pintura, canto coral, guitarra, danza hindú, clown y circo,
//    marinera norteña"; "oratoria, danza folklórica, improvisación y clown oratoria, violín".
//  jm-1091094.html, "6 de enero de 2025": "¡Vacaciones Divertidas En Jesús María!"; "Taller Deportivo de Vóley".
//  jm-1091108.html, "8 de enero de 2025": "¡En Jesús María Ya Iniciamos Las Vacaciones Divertidas 2025!"; "Taller de tenis en mesa".
//  jm-1091129.html, "11 de enero de 2025": "¡Las Vacaciones Divertidas 2025 Ya Comenzaron En Jesús María!"; "Taller de Karate".
//  jm-1115390.html, "14 de enero de 2025": "¡Las Vacaciones Son Divertidas En Jesús María!"; "Taller de K-Pop".
//  jm-1115408.html, "16 de enero de 2025": "disfrutar de FEBRERO en nuestra renovada Piscina Municipal".
//  jm-1255868.html, Nota de prensa "30 de setiembre de 2025": "Municipalidad de Jesús María invita al uso de sus datos
//    abiertos"; "invita a la ciudadanía, comunidad académica, sociedad civil y sector privado a hacer uso de sus datos
//    abiertos"; link "datosabiertos.gob.pe/group/municipalidad-distrital-de-jesús-maría-lima".
//  No 2026 summer note from the municipality was found in gob.pe searches on 2026-11-09; the page says the newest notes we
//    found are from January 2025 and that we are not connected to the municipality.
//  INEI Censos Nacionales 2025, Lima Metropolitana tabulado (tabulados/27/poblacion): Cuadro N° 1 "DISTRITO JESÚS MARÍA 105776"
//    (total), 97659 censada; Cuadro N° 3 "DISTRITO JESÚS MARÍA 97659 3997 5115 5947 16828 25850 18793 21129" (0 a 5, 6 a 11,
//    12 a 17, 18 a 29, 30 a 44, 45 a 59, 60 y más). Rank 27 of 43 = our ordering of Cuadro N° 1.
//  CNEB (FACTS 38 to 40): "Diseña y construye soluciones tecnológicas para resolver problemas"; secundaria JER table
//    "Inglés 3 3 3 3 3", "Educación para el trabajo 2 2 2 2 2", "Total de horas 35 35 35 35 35"; no computing area.
//  RM 501-2025-MINEDU Tabla 1 (checked by eye): fourth teaching block "Del 19 octubre a 18 de diciembre" 2026. gob.pe search on
//    2026-11-09: no 2027 school-year norm found.
//  EF EPI 2025: Lima 555 (high band). Time: tzdata America/Lima UTC-5, Asia/Kolkata UTC+5:30.
// Our own calculations (python3 -I): 5115 / 97659 = 5.2 %, 5947 / 97659 = 6.1 %, 21129 / 97659 = 21.6 % of the censada population.
// Our own example, run with python3 -I (cifrado.py, cifrado_error.py in the src-pages folder), exact output:
//    phhw ph dw fdpsr gh pduwh / meet me at campo de marte / abc
//    without % 26: IndexError: string index out of range
// Lesson family: a function with two parameters and a return value; wraparound with % 26; decoding is encoding with the
//    opposite key (an inverse test).

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const CIFRADO = [
  "ABC = 'abcdefghijklmnopqrstuvwxyz'",
  '',
  'def cifrar(texto, clave):',
  "    resultado = ''",
  '    for letra in texto:',
  '        if letra in ABC:',
  '            posicion = (ABC.index(letra) + clave) % 26',
  '            resultado = resultado + ABC[posicion]',
  '        else:',
  '            resultado = resultado + letra',
  '    return resultado',
  '',
  "secreto = cifrar('meet me at campo de marte', 3)",
  'print(secreto)',
  'print(cifrar(secreto, -3))',
  "print(cifrar('xyz', 3))"
].join('\n');

const SALIDA = [
  'phhw ph dw fdpsr gh pduwh',
  'meet me at campo de marte',
  'abc'
].join('\n');

const ERROR = [
  '            posicion = ABC.index(letra) + clave',
  '',
  "# al ejecutar print(cifrar('xyz', 3)), el error termina así:",
  'IndexError: string index out of range'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'lima', label: 'Vacaciones útiles en Jesús María' },
  slug: 'vacaciones-utiles-de-programacion-jesus-maria-lima',
  code: 'vupj',
  accent: '#075449',
  accentRationale: 'Vacaciones útiles de programación en Jesús María: a dark park-lawn green #075449, the colour of the Campo de Marte grass in summer, cooler and bluer than the Los Olivos olive; contrast 7.18 on the paper #FBF8F2 (alloc.tsv) and above 4.5 on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Vacaciones útiles de programación en Jesús María',
  title: 'Vacaciones útiles de programación en Jesús María, en vivo',
  description: 'Vacaciones útiles de programación para chicos de Jesús María: clases en vivo y en inglés desde casa, compatibles con los talleres de verano del distrito.',
  ogDescription: 'Talleres de verano en Jesús María y programación en casa: qué publica la municipalidad, cómo combinarlo con clases en vivo en inglés y un mensaje secreto en Python.',
  twitterDescription: 'Un verano de código para chicos de Jesús María: clases en vivo y en inglés, en grupo o individuales, a la hora que elija su familia.',
  pageName: 'Vacaciones útiles de programación en Jesús María',
  webPageDescription: 'Guía para familias de Jesús María que planifican las vacaciones útiles: lo que la Municipalidad de Jesús María publicó sobre sus talleres de verano en 2022 y 2025, cómo sumar clases de programación en vivo y en inglés desde casa, la población del distrito según los Censos Nacionales 2025 del INEI, lo que la secundaria no incluye según el CNEB, los datos abiertos del distrito y un ejercicio de cifrado escrito por nosotros.',
  courseDescription: 'Clases en vivo y en línea de programación para niños de 6 a 12 años y adolescentes de Jesús María, dictadas solo en inglés: Scratch, Python, web y proyectos de IA, en clase grupal o individual, desde las vacaciones de verano y a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Vacaciones útiles en Jesús María',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#municipio', label: 'Talleres' },
    { href: '#combinar', label: 'Combinar' },
    { href: '#secundaria', label: 'Secundaria' },
    { href: '#mensajes', label: 'Ejemplo' },
    { href: '#reloj', label: 'Horas' }
  ],
  eyebrow: 'Lima centro &middot; Jesús María &middot; Verano 2027',
  h1: 'Vacaciones útiles de programación en Jesús María',
  lede: 'Cada enero Jesús María se llena de talleres: vóley, karate, K-Pop, teatro, piscina. Ninguno de los que la municipalidad anunció en sus notas de verano era de programación. Esta página es para las familias que quieren sumar esa pieza al verano sin otro traslado: clases en vivo, en inglés, desde la mesa de su casa.',
  secondaryCta: { href: '#combinar', label: '¿Cómo se combina con un taller?' },
  wa: 'Hola Modern Age Coders, somos de Jesús María y buscamos clases de programación para estas vacaciones. ¿Podemos reservar una clase gratis?',
  heroNote: 'Clases en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; el taller por la mañana y el código en casa',
  spec: [
    ['Edades', 'De 6 a 12 años y adolescentes de secundaria'],
    ['Idea del verano', 'Un taller del distrito y una clase de código'],
    ['Lugar', 'Su casa en Jesús María, por videollamada'],
    ['Formato', 'Grupo de quince a veinte, o clases individuales'],
    ['Contenido', 'Scratch, Python, web y proyectos de IA'],
    ['Para probar', 'Una clase gratis, sin tarjeta']
  ],
  capsuleQ: 'La respuesta corta',
  capsule: 'Para el verano de Jesús María, Modern Age Coders propone algo que el distrito no tiene en sus talleres: programación para niños de primaria y adolescentes de secundaria, con clases en vivo, en línea y en inglés que su hijo sigue desde casa, en grupo o con un mentor solo para él, el día y a la hora que usted escoja. Encajan bien con un taller deportivo o artístico del distrito, porque no suman ningún traslado. Su hijo empieza en el verano con nuestras clases normales y decide en marzo si continúa. La primera clase es gratis.',

  picks: {
    eyebrow: 'Por dónde empezar',
    h2: 'Para empezar el verano en Jesús María: tres cursos',
    lede: 'Elegimos uno para cada etapa del colegio: primaria baja, primaria alta y secundaria.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'VUPJ / 01', title: 'Scratch, del personaje al juego', alt: 'Imagen del curso completo de programación en Scratch', note: 'Para primaria. Su hijo arma historias y juegos completos con bloques, y aprende a planificar antes de construir: buena compañía para un taller de teatro o de dibujo.' },
      { course: 'python-ai-kids-masterclass', code: 'VUPJ / 02', title: 'Python con juegos y mensajes', alt: 'Imagen del curso de Python e IA para niños', note: 'Para chicos de 9 a 12. Juegos de texto, dibujos con código y mensajes cifrados como el del ejemplo de esta página, con un vistazo a cómo funciona la inteligencia artificial.' },
      { course: 'javascript-course-for-teens-beginners-interactive-web', code: 'VUPJ / 03', title: 'JavaScript para adolescentes', alt: 'Imagen del curso de JavaScript para adolescentes', note: 'De 13 a 18 años. Páginas web que responden al usuario y juegos que corren en el navegador: un proyecto visible para enseñar al volver al colegio.' }
    ]
  },

  sections: [
    {
      id: 'municipio',
      eyebrow: 'Lo que publica el distrito',
      h2: '¿Hay talleres municipales de verano en Jesús María, y de qué son?',
      lede: 'Según sus propias notas en gob.pe, deportes y arte. En enero de 2025 la municipalidad presentó sus "Vacaciones Divertidas" con talleres como vóley, tenis de mesa, karate y K-Pop, y en enero de 2022 anunció talleres culturales de verano en su Centro Cultural. En las notas que leímos no aparece ningún taller de programación.',
      body: [
        { kind: 'table', numCols: [], caption: 'Notas de verano de la Municipalidad de Jesús María en gob.pe, leídas el 9 de noviembre de 2026', head: ['Fecha de la nota', 'Título publicado', 'Actividad que muestra'], rows: [
          ['4 de enero de 2022', 'Jesús María: Este 10 de enero inician talleres culturales de verano para nuestros niños y adolescentes', 'Más de 13 disciplinas: teatro, ballet, dibujo y pintura, canto coral, guitarra, danza hindú, marinera norteña, violín y otras'],
          ['6 de enero de 2025', '¡Vacaciones Divertidas En Jesús María!', 'Taller Deportivo de Vóley'],
          ['8 de enero de 2025', '¡En Jesús María Ya Iniciamos Las Vacaciones Divertidas 2025!', 'Taller de tenis en mesa'],
          ['11 de enero de 2025', '¡Las Vacaciones Divertidas 2025 Ya Comenzaron En Jesús María!', 'Taller de Karate'],
          ['14 de enero de 2025', '¡Las Vacaciones Son Divertidas En Jesús María!', 'Taller de K-Pop'],
          ['16 de enero de 2025', 'Nota sobre la piscina', 'Inscripciones para disfrutar de febrero en la Piscina Municipal']
        ] },
        { kind: 'source', html: 'Fuente: Municipalidad Distrital de Jesús María, notas informativas publicadas en su página institucional de gob.pe (gob.pe/munijesusmaria), copiadas el 9 de noviembre de 2026. Los títulos se transcriben como aparecen. No encontramos en gob.pe notas de verano de 2026 de esta municipalidad, y nada sobre el verano 2027 al cierre de esta página; para inscripciones, horarios y costos de sus talleres hay que consultar directamente a la municipalidad.' },
        { kind: 'two', mt: true,
          leftH3: 'Lo que las notas dejan ver',
          left: [
            'Un verano municipal pensado para moverse y expresarse: deporte en losas y piscina, y en el Centro Cultural artes escénicas, música y danza. La nota de 2022 describe esos talleres como una forma de que "nuestros niños y adolescentes" aprendan nuevas habilidades durante las vacaciones escolares.',
            'Es una oferta que muchas familias valoran porque está en el mismo distrito, en horario de día, y saca a los chicos de la pantalla.'
          ],
          rightH3: 'Lo que no encontramos',
          right: [
            'Ningún taller de programación, robótica o inteligencia artificial en esas seis notas. No quiere decir que la municipalidad nunca lo haya ofrecido; solo que no figura en lo que publicó y pudimos leer.',
            'Nosotros no tenemos ninguna relación con la Municipalidad de Jesús María ni con sus talleres. Lo que proponemos es otra cosa: una clase en vivo por internet que su hijo toma en casa y que puede convivir con el taller del distrito.'
          ] }
      ]
    },
    {
      id: 'combinar',
      eyebrow: 'Un verano en dos partes',
      h2: '¿Se puede combinar un taller del distrito con clases de programación online?',
      lede: 'Sí, y es la combinación que más recomendamos para un chico de Jesús María: el cuerpo se mueve en el taller y la cabeza programa en casa. Como nuestra clase no exige ir a ningún local, solo hay que encontrar una hora libre en el día.',
      body: [
        { kind: 'ol', items: [
          '<strong>Primero el taller.</strong> Si su hijo ya tiene un taller municipal o del colegio, anote sus días y horas. Esa es la parte fija del verano.',
          '<strong>Luego un hueco tranquilo.</strong> Busque un momento en que la casa esté en calma y su hijo descansado: después del almuerzo, a media tarde o temprano en la noche.',
          '<strong>Reserve la clase gratis en ese hueco.</strong> El sistema le muestra los horarios en hora de Perú. Allí el mentor conoce a su hijo y le sugiere grupo o clases individuales.',
          '<strong>Dos clases por semana.</strong> En grupo es el ritmo habitual. Si su hijo va a clases individuales, usted puede pedir otro ritmo.',
          '<strong>Revisión a mitad del verano.</strong> Hacia febrero, pídale que le muestre su proyecto y le explique cómo funciona. Con eso decide si sigue en marzo.'
        ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Cómo puede verse una semana de verano con taller y programación (ejemplo nuestro, no un horario)', head: ['Momento del día', 'Opción A: taller por la mañana', 'Opción B: taller por la tarde'], rows: [
          ['Mañana', 'Taller deportivo o artístico en el distrito', 'Clase de programación en casa, dos días por semana'],
          ['Después del almuerzo', 'Descanso; lectura o juego libre', 'Descanso; repasar el proyecto de la semana'],
          ['Tarde', 'Clase de programación en casa, dos días por semana', 'Taller deportivo o artístico en el distrito'],
          ['Noche', 'Mostrar a la familia lo que programó', 'Mostrar a la familia lo que programó']
        ] },
        { kind: 'source', html: 'Ejemplo propuesto por Modern Age Coders para ordenar el verano. No es el horario de ningún taller municipal, cuyos días y horas fija la municipalidad, ni una hora obligatoria para nuestras clases: la hora la pone usted.' },
        { kind: 'two', mt: true,
          leftH3: 'Por qué en casa y no en otro distrito',
          left: [
            'Jesús María está en el centro de Lima, rodeado por el Cercado de Lima, Breña, Pueblo Libre, Magdalena del Mar, San Isidro y Lince. Aun así, cualquier actividad que obligue a cruzar a otro distrito suma ida, vuelta y alguien que acompañe al chico.',
            'Con la clase en línea, esos viajes no existen. Su hijo termina el taller, llega a casa, almuerza y a la hora acordada abre la computadora.'
          ],
          rightH3: 'Por qué en inglés',
          right: [
            'El código se escribe con palabras inglesas, y una clase entera en inglés hace que su hijo las use con sentido desde el primer día. En la secundaria pública el CNEB asigna tres horas pedagógicas de Inglés por semana en la jornada regular.',
            'El EF EPI 2025 da a Lima 555 puntos, dentro de la banda alta que EF reserva para 550 o más. Para muchos chicos de la ciudad, un verano hablando inglés para programar es la práctica oral que les faltaba.'
          ] }
      ]
    },
    {
      id: 'distrito',
      eyebrow: 'Jesús María según el censo',
      h2: '¿Cuántos chicos en edad escolar tiene Jesús María?',
      lede: 'Pocos, comparado con otros distritos: el INEI contó 5,115 niños de 6 a 11 años y 5,947 adolescentes de 12 a 17 entre las 97,659 personas censadas en 2025. La población total del distrito, sumando a quienes el censo no llegó a registrar, es de 105,776 habitantes.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Jesús María por grupo de edad, población censada, Censos Nacionales 2025', head: ['Grupo de edad', 'Personas censadas', 'Parte del total censado (cálculo nuestro)'], rows: [
          ['De 0 a 5 años', '3,997', '4.1 %'],
          ['De 6 a 11 años', '5,115', '5.2 %'],
          ['De 12 a 17 años', '5,947', '6.1 %'],
          ['De 18 a 29 años', '16,828', '17.2 %'],
          ['De 30 a 44 años', '25,850', '26.5 %'],
          ['De 45 a 59 años', '18,793', '19.2 %'],
          ['De 60 y más años', '21,129', '21.6 %'],
          ['Total censado', '97,659', '100 %']
        ] },
        { kind: 'source', html: 'Datos del archivo de indicadores demográficos para Lima Metropolitana que el INEI publicó con los Censos Nacionales 2025: el reparto por edades sale del Cuadro N.° 3, que solo cubre a las personas censadas, y la cifra de 105,776 habitantes sale del Cuadro N.° 1, que añade a las omitidas. El censo tomó como referencia el 15 de septiembre de 2025. Los porcentajes son nuestros, redondeados a un decimal, y por eso pueden no sumar exactamente 100.' },
        { kind: 'p', mt: true, html: 'Jesús María ocupa el puesto 27 entre los 43 distritos de Lima Metropolitana por población (orden nuestro a partir del Cuadro N.° 1 del INEI). En el distrito viven más personas de 60 años o más que chicos de 6 a 17. Para una familia con hijos, eso tiene una consecuencia práctica: es menos probable que en la misma cuadra haya un grupo de verano de la edad exacta de su hijo y con el tema que le interesa. En una clase en línea, su hijo comparte grupo con chicos de su edad aunque vivan lejos.' },
        { kind: 'p', html: 'Si quiere ver cómo trabajamos con familias de toda la ciudad, la página en inglés <a class="ag-inline-link" href="/english-medium-coding-classes-lima">English-medium coding classes in Lima</a> mira sobre todo a quienes estudian en inglés en el colegio, y <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">Coding and AI classes in Peru</a> resume nuestra oferta para todo el país.' }
      ]
    },
    {
      id: 'secundaria',
      eyebrow: 'Adolescentes',
      h2: '¿Qué gana un adolescente de secundaria con un verano de programación?',
      lede: 'Tiempo para algo que el horario escolar no le da. En la jornada escolar regular de secundaria, el CNEB reparte 35 horas pedagógicas semanales y ninguna corresponde a un área de computación o programación.',
      body: [
        { kind: 'two',
          leftH3: 'Lo que sí trae el currículo',
          left: [
            'El CNEB incluye dentro de Ciencia y Tecnología la competencia "Diseña y construye soluciones tecnológicas para resolver problemas", y en la jornada regular Educación para el Trabajo tiene 2 horas a la semana en cada grado de secundaria. Cada colegio decide cómo las trabaja.',
            'Eso explica por qué dos chicos del mismo grado, en colegios distintos de Jesús María, pueden llegar al verano con experiencias muy distintas frente a una computadora.'
          ],
          rightH3: 'Lo que puede sumar el verano',
          right: [
            'Un lenguaje de programación de verdad, aprendido con constancia: Python, JavaScript o Java. Un proyecto terminado que se pueda mostrar. Y algo menos visible pero más útil: la costumbre de dividir un problema grande en pasos pequeños.',
            'Para los adolescentes que ya programan, el verano es buen momento para un curso más exigente, de algoritmos o desarrollo web, que durante el año escolar no tendría espacio.'
          ] },
        { kind: 'p', mt: true, html: 'Una puerta local para los más curiosos: el 30 de setiembre de 2025 la Municipalidad de Jesús María publicó una nota en la que "invita a la ciudadanía, comunidad académica, sociedad civil y sector privado a hacer uso de sus datos abiertos", disponibles en la Plataforma Nacional de Datos Abiertos. Un adolescente que aprende Python en el verano puede, más adelante, leer uno de esos archivos y hacerse preguntas sobre su propio distrito. En esta página no usamos esos datos; lo dejamos como idea para cuando el chico ya domine lo básico.' },
        { kind: 'p', html: 'Conviene decir también qué no somos: no ponemos notas escolares, no reemplazamos ningún curso del colegio y no emitimos documentos del sistema educativo peruano. Lo único que entregamos al cierre de cada curso es una constancia de finalización con nuestro nombre.' }
      ]
    },
    {
      id: 'mensajes',
      tint: 'tint',
      eyebrow: 'Una clase de ejemplo',
      h2: '¿Cómo es una clase de Python para un chico de 12 años?',
      lede: 'Aquí va un ejercicio nuestro para chicos de 11 a 14 años: mandar un mensaje secreto con el cifrado César, el método que según la tradición usaba Julio César, que reemplaza cada letra por la que está tres lugares más adelante en el alfabeto. El mensaje de prueba cita un parque del distrito, el Campo de Marte.',
      body: [
        { kind: 'code', label: 'Un cifrador de mensajes en Python', lang: 'Python', code: CIFRADO, note: 'La función <code>cifrar</code> recibe dos datos, el texto y la clave, y devuelve el texto cambiado. Los espacios no son letras del alfabeto, así que pasan tal cual.' },
        { kind: 'code', label: 'Lo que imprime', lang: 'Salida', code: SALIDA, note: 'Las tres líneas, sin ningún retoque, tal como salieron al ejecutar el programa con Python 3. La segunda prueba que descifrar es cifrar con la clave contraria: con -3 vuelve el mensaje original.' },
        { kind: 'code', label: 'La versión sin % 26, y lo que pasa', lang: 'Python', code: ERROR, note: 'Si se borra el <code>% 26</code>, la letra <code>x</code> (posición 23) más 3 da 26, y el alfabeto solo llega hasta la posición 25. Python se detiene con este error. El <code>% 26</code> hace que después de la z se vuelva a la a.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Cifrar a mano.</strong> Con el alfabeto escrito en una tira de papel, el chico cifra su propio nombre con clave 3 y lo dicta en inglés al mentor, letra por letra.',
          '<strong>Leer la función en voz alta.</strong> "For each letter in the text, if the letter is in the alphabet, move it three places." Traducir el código a una frase en inglés es la mitad del ejercicio.',
          '<strong>Romperlo a propósito.</strong> El mentor pide quitar el <code>% 26</code> y probar con <code>xyz</code>. Aparece el <code>IndexError</code> y el chico explica por qué: no hay letra en la posición 26.',
          '<strong>Comprobar con la clave contraria.</strong> Si <code>cifrar(cifrar(texto, 3), -3)</code> no devuelve el texto original, algo está mal. Es la primera prueba automática que escribe en su vida.',
          '<strong>Descifrar sin la clave.</strong> El reto final: el mentor manda un mensaje cifrado con una clave desconocida y el chico escribe un bucle que prueba las 26 claves posibles hasta encontrar la frase con sentido.'
        ] },
        { kind: 'p', mt: true, html: 'El ejercicio enseña más que cifrado. Enseña a escribir una función que hace una sola cosa bien, a encontrar el caso que rompe el programa y a comprobar un resultado de otra manera. Así entrenamos a los chicos a pensar, y es lo contrario de pegar una respuesta ajena que no se entiende, venga de donde venga, incluida una IA.' }
      ]
    },
    {
      id: 'reloj',
      eyebrow: 'Horas de clase',
      h2: '¿Cómo se coordina la hora con un mentor en la India?',
      lede: 'Usted pone la hora en su reloj y nosotros la traducimos al del mentor. La India está 10 horas y 30 minutos por delante de Perú, sin cambios en ningún mes, porque ninguno de los dos países adelanta ni atrasa la hora.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Después de un taller de mañana', p: 'Una clase a las 3:00 p. m. en Jesús María es a la 1:30 a. m. del día siguiente en la India. Nuestros mentores trabajan también en esas horas.' },
          { h3: 'Antes de un taller de tarde', p: 'Una clase a las 10:00 a. m. en Jesús María es a las 8:30 p. m. del mismo día en la India. Es una franja muy pedida en enero.' },
          { h3: 'Ya de noche', p: 'Una clase a las 7:00 p. m. en Jesús María es a las 5:30 a. m. del día siguiente en la India. Sirve a familias que solo pueden acompañar después del trabajo.' }
        ] },
        { kind: 'source', html: 'Cálculo con la hora oficial de Perú, UTC-5 sin horario de verano (base tzdata, zona America/Lima; INACAL), y la de la India, UTC+5:30. Ejemplos de conversión, no horarios fijos de clase.' },
        { kind: 'p', mt: true, html: 'Sobre la fecha de vuelta a clases: el último bloque lectivo del año escolar 2026 va del 19 de octubre al 18 de diciembre de 2026, según la Tabla 1 de la RM 501-2025-MINEDU. Al 9 de noviembre de 2026 no encontramos publicada la norma del año escolar 2027, así que no damos aquí una fecha de cierre del verano. Si su hijo sigue con nosotros en marzo, solo cambiamos la hora de clase para que no choque con el colegio.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Del verano en adelante',
    h2: '¿Qué puede construir su hijo, según su etapa?',
    lede: 'Una guía nuestra de proyectos posibles en un verano, de los 6 años a la secundaria. El mentor la ajusta a cada chico.',
    table: { caption: 'Proyectos de verano por etapa escolar (guía nuestra)', head: ['Etapa', 'Edad habitual', 'Un proyecto realista'], rows: [
      ['Primaria, 1° y 2°', '6 a 7 años', 'una tarjeta animada que saluda a la familia en inglés'],
      ['Primaria, 3° y 4°', '8 a 9 años', 'un juego de atrapar objetos en Scratch con puntaje'],
      ['Primaria, 5° y 6°', '10 a 11 años', 'un juego de preguntas en Python que lleva la cuenta de aciertos'],
      ['Secundaria, 1° a 3°', '12 a 14 años', 'el cifrador de mensajes y un descifrador que prueba todas las claves'],
      ['Secundaria, 4° y 5°', '15 a 16 años', 'una página web propia con JavaScript o un programa que lee un archivo de datos']
    ] },
    left: { h3: 'Cómo acompañar desde casa', ps: [
      'Pregunte qué hizo, no cuánto tiempo estuvo. Un chico que le explica su proyecto en dos frases aprendió más que uno que pasó tres horas copiando.',
      'Si su hijo también va a un taller del distrito, no lo sobrecargue: dos clases de programación por semana bastan para avanzar en serio.'
    ] },
    right: { h3: 'Un consejo para su hijo', ps: [
      'Cuando el programa falle, no lo borre. Lea el mensaje de error: casi siempre dice en inglés qué pasó y en qué línea.',
      'Pruebe su programa con el caso raro, como la letra z en el cifrado. Ahí aparecen los errores interesantes.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Otros nueve cursos para este verano',
    lede: 'Se dictan en inglés y en vivo; el formato, grupal o individual, lo elige usted.',
    bands: [
      { num: 'I', h3: 'Primeros pasos', sub: 'De 6 a 9 años', courses: [
        { code: 'VUPJ / INICIO / 01', slug: 'kids-coding-blocks-masterclass', title: 'Bloques para empezar', blurb: 'Primeras animaciones, juegos y apps arrastrando bloques, desde los 6 años.' },
        { code: 'VUPJ / INICIO / 02', slug: 'mental-maths-mastery-kids', title: 'Cálculo mental para niños', blurb: 'Sentido numérico con juegos, sin trucos de memoria, de 5 a 10 años.' },
        { code: 'VUPJ / INICIO / 03', slug: 'minecraft-coding-for-kids-course', title: 'Programar en Minecraft', blurb: 'Automatizar construcciones en un mundo que su hijo ya conoce.' }
      ] },
      { num: 'II', h3: 'Crear con código', sub: 'De 8 a 12 años', courses: [
        { code: 'VUPJ / CREA / 01', slug: 'kids-ai-web-development-course', title: 'Páginas web para niños', blurb: 'Su hijo arma y publica un sitio sobre su tema favorito, con HTML y CSS.' },
        { code: 'VUPJ / CREA / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Juegos en Roblox', blurb: 'Obstáculos, puntajes y tiendas en Roblox Studio con el lenguaje Luau.' },
        { code: 'VUPJ / CREA / 03', slug: 'cpp-programming-for-kids-course', title: 'C++ para niños', blurb: 'Un lenguaje exigente presentado con retos cortos y juegos, para 9 a 12.' }
      ] },
      { num: 'III', h3: 'Secundaria', sub: 'Desde los 13 años', courses: [
        { code: 'VUPJ / SEC / 01', slug: 'python-complete-masterclass-teens', title: 'Python completo para adolescentes', blurb: 'De la primera línea a programas que leen datos y resuelven problemas.' },
        { code: 'VUPJ / SEC / 02', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'Ciberseguridad para adolescentes', blurb: 'Cómo se protege una cuenta y una red, desde el lado defensivo.' },
        { code: 'VUPJ / SEC / 03', slug: 'frontend-development-masterclass-for-teens', title: 'Diseño web para adolescentes', blurb: 'De CSS bien hecho a interfaces con React, paso a paso.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Las clases por dentro',
    h2: '¿Qué pasa en una clase en vivo?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Antes del taller', l: 'Si el taller del distrito es por la tarde, la clase va por la mañana.' },
      { time: 'Después del taller', l: 'Si el taller es por la mañana, la clase va después del almuerzo.' },
      { time: 'Con su propio horario', l: 'En clases individuales, el día y la hora los marca usted.' }
    ],
    cells: [
      { h3: 'Un mentor que lo conoce', p: 'La misma persona de principio a fin, que sabe dónde se traba su hijo.' },
      { h3: 'Inglés que se entiende', p: 'Pausas, ejemplos en la pantalla y preguntas cortas.' },
      { h3: 'El teclado es suyo', p: 'Su hijo escribe y corrige; el mentor pregunta en lugar de dictar.' },
      { h3: 'Algo terminado', p: 'Cada tramo cierra con un proyecto que funciona y se puede enseñar.' },
      { h3: 'Familia informada', p: 'Unas líneas tras las clases sobre lo trabajado y el próximo paso.' },
      { h3: 'Dos formatos', p: 'Un grupo de quince a veinte de edades cercanas, o clases solo para él.' }
    ]
  },

  projectsH2: 'Trabajos de nuestros estudiantes',
  projectsLede: 'Después de un verano de bloques y mensajes cifrados, el camino sigue hasta aplicaciones completas. Abajo hay algunos proyectos de alumnos mayores; la colección entera está en <a class="ag-inline-link" href="/student-labs">Student labs</a>, en inglés.',
  reviewsLede: 'Reseñas que familias y alumnos dejaron en Google, sin editar y en el inglés en que fueron escritas.',

  fees: {
    h2: 'Lo que cuesta, para familias de Jesús María',
    lede: 'Nuestros precios aparecen en dólares estadounidenses y el pago es con tarjeta de crédito o débito. Su banco convierte el monto a soles en la fecha del cobro, por eso la cifra final de su estado de cuenta puede moverse un poco con el tipo de cambio.',
    free: ['Una primera clase sin costo', 'El mentor ve por dónde conviene empezar', 'No se pide tarjeta'],
    group: ['Un grupo de quince a veinte de edades cercanas', 'El mismo mentor todo el curso', 'Dos clases en vivo por semana', 'Mes a mes, sin permanencia'],
    one: ['Clases solo para su hijo', 'Un temario al ritmo que necesita', 'Días y horas a su elección']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Vacaciones útiles de programación en Jesús María: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Las dictamos siempre en inglés, en vivo y por internet, y eso juega a favor de su hijo: programa y practica el idioma en la misma clase. El mentor usa frases cortas, se apoya en la pantalla y espera la respuesta del chico sin apurarlo. Según el EF EPI 2025, el inglés de Lima está en el nivel alto, con 555 puntos.' },
      { q: '¿La municipalidad de Jesús María tiene talleres de programación en verano?', a: 'En las notas de verano que la Municipalidad de Jesús María publicó en gob.pe y que revisamos (enero de 2022 y enero de 2025) aparecen talleres de deporte, arte y piscina, pero ningún taller de programación. Para su oferta del próximo verano hay que consultar a la municipalidad. Nosotros no estamos vinculados con ella.' },
      { q: '¿Puede mi hijo ir a un taller del distrito y además programar?', a: 'Sí. Nuestra clase es en línea, así que basta con elegir una hora que no choque con el taller: si el taller es de mañana, la clase va por la tarde, y al revés.' },
      { q: '¿Cuándo pueden ser las clases si mi hijo ya tiene un taller?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Un ejemplo para calcular: si la clase es a las 10:00 a. m. en Jesús María, el mentor la empieza de noche, a las 8:30 p. m. de su reloj indio.' },
      { q: '¿Desde qué edad y hasta qué edad?', a: 'Desde los 6 años, con bloques, hasta el final de la secundaria, con Python, JavaScript o Java. También enseñamos a universitarios y adultos, pero esta página está pensada para el verano escolar.' },
      { q: '¿Cuántas semanas dura?', a: 'No hay una duración fija ni un campamento con fecha de cierre. Son clases mensuales: su hijo empieza cuando usted decida y sigue mientras le sirva. Muchas familias empiezan en enero y deciden en marzo.' },
      { q: '¿Qué aprende un adolescente en un verano?', a: 'Lo suficiente para escribir programas propios en un lenguaje real y terminar un proyecto, como el cifrador de mensajes de esta página o una web con JavaScript. Lo que más se nota al volver al colegio es la forma de abordar un problema por partes.' },
      { q: '¿Las clases son presenciales en Jesús María?', a: 'No. Son por videollamada, en vivo, y su hijo las toma en su casa. No tenemos local en Lima, de modo que no hay que trasladarse.' },
      { q: '¿Qué equipo hace falta?', a: 'Una computadora de escritorio o laptop con cámara, micrófono y teclado, unos audífonos y conexión estable. Con una tablet o un celular no se programa con comodidad.' },
      { q: '¿Dan certificado?', a: 'Sí, uno propio: el certificado de finalización de Modern Age Coders al terminar cada curso. No es un documento del MINEDU, no vale como nota escolar y no estamos afiliados a ningún colegio ni a la municipalidad.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más lecturas',
    h2: 'Páginas útiles para planificar el verano',
    lede: 'Unas están escritas en castellano y otras en inglés.',
    items: [
      { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación en inglés para primaria', p: 'Edad de inicio, lo que enseña el colegio y robótica o programación, con una clase de ejemplo.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'La guía nacional: el sistema escolar peruano y nuestros cursos por edad.' },
      { href: '/english-medium-coding-classes-lima', label: 'English-medium coding classes in Lima', p: 'Nuestra guía limeña, pensada para chicos que ya estudian en inglés.' },
      { href: '/ai-projects-for-kids', label: 'AI projects for kids', p: 'Proyectos de inteligencia artificial para niños, sin crear cuentas.' },
      { href: '/student-labs', label: 'Student labs', p: 'Lo que publican nuestros estudiantes de todo el mundo.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Una clase en vivo explicada por dentro.' }
    ]
  },

  start: {
    h2: 'Pida una clase gratis para este verano',
    lede: 'La clase gratis sirve para conocerse: el mentor saluda a su hijo con frases simples en inglés, le plantea un pequeño reto, como cifrar su nombre o mover un personaje, y observa cómo piensa. Luego le recomendamos curso y formato, sin compromiso.',
    readFirst: 'Para leer antes: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> describe una clase en vivo por dentro y <a class="ag-inline-link" href="/courses">All courses</a> lista todos los cursos; las dos páginas están en inglés.',
    note: 'Cada clase es en vivo, por internet y en inglés, con mentores en la India. El WhatsApp, en cambio, lo atendemos también en castellano.',
    formNote: 'Sin costo, sin tarjeta, sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Cursos para el verano', links: [
        { href: '/courses/scratch-programming-complete-course', label: 'Scratch completo' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Python e IA para niños' },
        { href: '/courses/javascript-course-for-teens-beginners-interactive-web', label: 'JavaScript para adolescentes' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Guías', links: [
        { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños en inglés' },
        { href: '/coding-and-ai-classes-in-peru', label: 'Nuestras clases en Perú' },
        { href: '/ai-projects-for-kids', label: 'Proyectos de IA' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' }
      ] }
    ],
    bottomRight: 'Tres letras más adelante'
  },

  personalityCss: `
.ag-root.ag-vupj .ag-hero h1 { letter-spacing: -0.008em; max-width: 20ch; }
.ag-root.ag-vupj .ag-capsule { border-left-width: 4px; border-radius: 0; }
.ag-root.ag-vupj .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-vupj .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-vupj .ag-steps li { line-height: 1.58; }
`,

  dossier: {
    curriculumAuthority: 'Municipalidad Distrital de Jesús María notes on gob.pe (4 January 2022; 6, 8, 11, 14 and 16 January 2025; 30 September 2025); INEI Censos Nacionales 2025 (Lima Metropolitana tabulado, Cuadros N.° 1 and 3); CNEB secundaria tables and competencies; RM 501-2025-MINEDU Tabla 1 (checked by eye); gob.pe search for the 2027 norm on 9 November 2026; EF EPI 2025; tzdata and INACAL. The cipher lesson, the combined-week example and the project guide are our own.',
    localProject: 'A Caesar cipher in Python for a 12-year-old in Jesús María, with a test message about the Campo de Marte: cifrar(texto, clave) shifts letters with % 26; run with python3 -I it prints phhw ph dw fdpsr gh pduwh, then meet me at campo de marte with key -3, then abc for xyz; without % 26 it stops with IndexError: string index out of range. Lesson family: a function with parameters and return, wraparound with %, and decoding as the inverse test.',
    requiredMentions: ['phhw ph dw fdpsr gh pduwh', 'meet me at campo de marte', 'IndexError: string index out of range', 'Taller de K-Pop', 'Más de 13 disciplinas', 'invita a la ciudadanía, comunidad académica, sociedad civil y sector privado a hacer uso de sus datos abiertos', '5,115 niños de 6 a 11 años', 'Jesús María ocupa el puesto 27 entre los 43 distritos', 'Tres letras más adelante', 'Diseña y construye soluciones tecnológicas para resolver problemas'],
    sources: [
      { claim: 'Talleres culturales de verano from 10 January 2022, more than 13 disciplines, at the municipal Centro Cultural.', url: 'https://www.gob.pe/institucion/munijesusmaria/noticias/577087-jesus-maria-este-10-de-enero-inician-talleres-culturales-de-verano-para-nuestros-ninos-y-adolescentes' },
      { claim: 'Vacaciones Divertidas 2025: vóley (6 January 2025).', url: 'https://www.gob.pe/institucion/munijesusmaria/noticias/1091094-vacaciones-divertidas-en-jesus-maria' },
      { claim: 'Vacaciones Divertidas 2025: tenis de mesa (8 January 2025).', url: 'https://www.gob.pe/institucion/munijesusmaria/noticias/1091108-en-jesus-maria-ya-iniciamos-las-vacaciones-divertidas-2025' },
      { claim: 'Vacaciones Divertidas 2025: karate (11 January 2025).', url: 'https://www.gob.pe/institucion/munijesusmaria/noticias/1091129-las-vacaciones-divertidas-2025-ya-comenzaron-en-jesus-maria' },
      { claim: 'Vacaciones Divertidas 2025: K-Pop (14 January 2025).', url: 'https://www.gob.pe/institucion/munijesusmaria/noticias/1115390-las-vacaciones-son-divertidas-en-jesus-maria' },
      { claim: 'Piscina Municipal in February 2025 (16 January 2025).', url: 'https://www.gob.pe/institucion/munijesusmaria/noticias/1115408-este-verano-2025-vive-unas-vacaciones-divertidas-en-jesus-maria' },
      { claim: 'Open-data invitation (30 September 2025).', url: 'https://www.gob.pe/institucion/munijesusmaria/noticias/1255868-municipalidad-de-jesus-maria-invita-al-uso-de-sus-datos-abiertos' },
      { claim: 'Jesús María 105,776 total, 97,659 censada, age groups of the censada population.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/27/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Secundaria regular day: 35 hours, Inglés 3, Educación para el Trabajo 2, competency Diseña y construye soluciones tecnológicas.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Fourth teaching block of 2026: 19 October to 18 December 2026.', url: 'https://cdn.www.gob.pe/uploads/document/file/8968298/7380466-rm-n-501-2025-minedu.pdf' },
      { claim: 'EF EPI 2025: Lima 555, high band.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' }
    ],
    rejectedClaims: [
      'That the municipality never offers programming: refused; the page says only that the six notes we read do not list it.',
      'Municipal workshop prices, schedules or 2026 to 2027 dates: none published in what we read; the page sends families to the municipality.',
      'Any link with the Municipalidad de Jesús María: none; the page says so twice.',
      'Reusing a municipal open dataset in the example: not done; the open-data note is cited only as an idea for later.',
      'A camp length, start date or summer price: refused; normal monthly classes, our own weekly pattern labelled as an example.',
      'Summing the 6 to 11 and 12 to 17 age groups: refused; each is printed as INEI publishes it.',
      'Spanish-language teaching: refused; English only, said in the capsule and in an FAQ.'
    ]
  }
};
