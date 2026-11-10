// SHIP: district (kids, year-round) | Rímac: next to the district's music and culture workshops, a coding class at home | loop control: continue skips one item, break stops the loop, and the coins never reached
'use strict';
// Clases de programación para niños en el Rímac, Lima (ag- Spanish district door, Peru cluster row PE213, P6, hubGroup
// lima). Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief
// docs/superpowers/plans/2026-11-09-pe-writer-brief.md (rule "City and district pages").
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only; no soles, no typed figure.
// Angle: the parent in the Rímac whose child already goes to a music or culture workshop and who wants a second, year-round
// activity that does not mean another trip: coding at home. Spine: the census age structure of the district; what the
// municipality offers (cultural workshops, free music classes, a university agreement); music and code share repetition,
// skipping and stopping (our analogy); what an hour of class in English sounds like; INEI connectivity in Lima; one
// original Python lesson on continue and break; age guide with adolescentes; clock conversions. No income or class
// assumptions about the district.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/clases-de-programacion-para-ninos-
// rimac-lima/, gob.pe notes fetched 10 November 2026 with curl -sL -A "Mozilla/5.0"; quotes grepped in the raw text):
//  INEI, Censos Nacionales 2025, Lima Metropolitana workbook (inei-censos2025-ind_27-lima-metropolitana.xlsx, 856800 bytes,
//    updated "al 15 de julio del año 2026"). CUADRO Nº 1: "DISTRITO RÍMAC | 197361 | 96959 | 100402 | 183297 | ... | 14064".
//    CUADRO Nº 3: "DISTRITO RÍMAC | 183297 | 10228 | 14847 | 16358 | 33865 | 41521 | 32981 | 33497". CUADRO Nº 2: 6 años
//    2134, 7 años 2265, 8 años 2505, 9 años 2557, 10 años 2758, 11 años 2628, 12 años 2733; rural 0.
//  Municipalidad Distrital del Rímac on gob.pe (institucion/munirimac):
//    n-1128833 (18 Mar 2025): "TALLERES CULTURALES 2025"; "Creando un nuevo espacio para las artes, música y la cultura";
//    "FECHA: Del 17 al 28 de marzo DIA: De Lunes a Viernes de 3:00 a 6:00 p.m. LUGAR: Centro Cultural del Rímac – Escuela
//    Taller Rímac Jr. Chiclayo Nº 594"; organised by the "Gerencia del Centro Histórico del Rímac, Cultura y Turismo".
//    n-1091472 (11 Jan 2025): "CLASES DE MÚSICA GRATUITAS" (styled letters in the raw, read as such); "Único requisito traer
//    tu propio instrumento".
//    n-1154944 (21 Apr 2025): "convenio marco de cooperación" with the "Universidad de Educación Enrique Guzmán y Valle, la
//    Cantuta", "que beneficien a los estudiantes, docentes y ciudadanía". Names of the mayor and rector left out.
//  INEI, Estadísticas de las TIC en los Hogares, II Trimestre 2026 (inei_tic_iit2026.txt): "en Lima Metropolitana, el 84,7%
//    de los hogares disponía del servicio"; "el mayor crecimiento se registró en Lima Metropolitana, con un aumento de 4,3
//    puntos porcentuales"; "el mayor nivel de uso de Internet se registró en Lima Metropolitana, con un 92,4%"; "Este
//    porcentaje alcanzó el 53,3% en Lima Metropolitana".
//  CNEB (FACTS 57, 39): Arte y cultura "3 3 3 3 3 3" in primaria; no computing area in primaria or secundaria.
//  EF EPI 2025 (MARKET 1.3): Lima 555 (high from 550); Peru 519.
//  Time (timezone.tsv): America/Lima UTC-5, no DST since 1994; Asia/Kolkata UTC+5:30; India 10 h 30 min ahead.
// Our own calculations (python3 -I): shares of the 183297 censused: 0-5 5.6 %, 6-11 8.1 %, 12-17 8.9 %, 18-29 18.5 %,
//    30-44 22.7 %, 45-59 18.0 %, 60+ 18.3 %; 197361 / 10141775 = 1.9 %; 14064 / 197361 = 7.1 % omitted;
//    2134+2265+2505+2557+2758+2628+2733 = 17580 children aged 6 to 12.
// Our own example (baldosas.py in the src-pages folder), run with python3 -I, exact output:
//    coin number 1 / rock: jump over it / coin number 2 / coin number 3 / lava: stop here / Coins collected: 3 of 4
// Neighbouring districts named in plain text only (Cercado de Lima, San Juan de Lurigancho, Independencia, San Martín de
// Porres).
// Lesson family: loop control; continue skips one item, break ends the loop, and what comes after break never runs.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  "tiles = ['coin', 'rock', 'coin', 'coin', 'lava', 'coin']",
  '',
  'coins = 0',
  'for tile in tiles:',
  "    if tile == 'rock':",
  "        print('rock: jump over it')",
  '        continue',
  "    if tile == 'lava':",
  "        print('lava: stop here')",
  '        break',
  '    coins = coins + 1',
  "    print('coin number', coins)",
  '',
  "print('Coins collected:', coins, 'of', tiles.count('coin'))"
].join('\n');

const OUT = [
  'coin number 1',
  'rock: jump over it',
  'coin number 2',
  'coin number 3',
  'lava: stop here',
  'Coins collected: 3 of 4'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'lima', label: 'Programación para niños en el Rímac' },
  slug: 'clases-de-programacion-para-ninos-rimac-lima',
  code: 'prri',
  accent: '#154A06',
  accentRationale: 'Rímac: a deep riverbank green #154A06, the shade of the old alamedas along the river that names the district, darker than any other Lima district door so it stays distinct; allocated in alloc.tsv (contrast 8.46 on the paper #FBF8F2) and checked above 4.5 on every paper tint by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Clases de programación para niños en el Rímac',
  title: 'Clases de programación para niños en el Rímac, Lima',
  description: 'Clases de programación para niños de 6 a 12 años en el Rímac: en vivo y en inglés, desde casa, durante todo el año y en grupo o individuales, a la hora que elija.',
  ogDescription: 'Programación para niños del Rímac sin sumar otro trayecto: el censo 2025 del distrito por edades, lo que la música y el código tienen en común y un juego en Python con monedas, rocas y lava.',
  twitterDescription: 'Clases de programación en vivo y en inglés para niños del Rímac, desde casa y en el horario que la familia prefiera.',
  pageName: 'Clases de programación para niños en el Rímac',
  webPageDescription: 'Guía para familias del Rímac que buscan clases de programación para niños de 6 a 12 años todo el año: la estructura por edades del distrito en los Censos Nacionales 2025 del INEI, los talleres culturales y de música que publica la municipalidad, lo que se parecen la música y la programación, la conectividad en Lima según el INEI y un ejercicio de Python con break y continue escrito por nosotros.',
  courseDescription: 'Clases de programación en vivo para niños de 6 a 12 años del Rímac, dictadas solo en inglés por videollamada: Scratch, Python, juegos y proyectos de IA, en grupo o individuales, cualquier mes del año y en el horario que la familia escoja.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Programación para niños, Rímac',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#por-edades', label: 'Por edades' },
    { href: '#musica', label: 'Música y código' },
    { href: '#una-hora', label: 'Una clase' },
    { href: '#monedas', label: 'Reto en Python' },
    { href: '#horas', label: 'Horario' }
  ],
  eyebrow: 'Lima &middot; Rímac &middot; Niños de 6 a 12 años',
  h1: 'Clases de programación para niños en el Rímac',
  lede: 'Muchos niños del Rímac ya tienen una actividad fija: un taller de música, de danza, de deporte. Sumar programación no tiene por qué significar otro trayecto. Esta página cuenta cuántos chicos tiene el distrito según el censo de 2025, por qué la música y el código se parecen más de lo que parece, cómo suena una hora de clase en inglés y un pequeño juego en Python.',
  secondaryCta: { href: '#monedas', label: 'Ver el juego de monedas en Python' },
  wa: 'Hola Modern Age Coders, somos del Rímac y queremos clases de programación para nuestro hijo o hija. ¿Podemos reservar una clase gratis?',
  heroNote: 'En vivo desde 2020 &middot; más de 10,000 estudiantes alrededor del mundo &middot; mentores que enseñan siempre en inglés',
  spec: [
    ['Niños', 'De 6 a 12 años, de 1° a 6° de primaria'],
    ['Adolescentes', 'Grupos propios desde los 13 años'],
    ['Desde', 'La casa familiar, en cualquier zona del Rímac'],
    ['Idioma', 'Inglés, siempre'],
    ['Formato', 'Grupo de quince a veinte, o clases a solas'],
    ['Primera sesión', 'Gratis, sin pedir tarjeta']
  ],
  capsuleQ: 'La respuesta',
  capsule: 'Sí. Los niños del Rímac de 6 a 12 años pueden aprender a programar con Modern Age Coders sin salir de casa: cada sesión ocurre en vivo, en inglés, a través de la cámara, y el curso sigue mes tras mes durante todo el año. Un mentor desde la India les habla con claridad, sin apuro, y espera a que cada niño entienda antes de seguir. Se empieza con Scratch y bloques y se avanza a Python, videojuegos y proyectos de IA. Hay clases grupales e individuales, en el horario que usted elija, y la sesión inicial no se cobra.',

  picks: {
    eyebrow: 'Cursos de inicio',
    h2: '¿Qué curso le conviene a un niño del Rímac?',
    lede: 'Para la mayoría de familias la decisión se reduce a tres caminos, según la edad del niño y lo que ya le gusta hacer en la computadora.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'PRRI / 01', title: 'Scratch completo', alt: 'Imagen del curso completo de Scratch para niños', note: 'Para chicos de 6 a 10. Escenas animadas, música hecha con bloques y juegos con niveles: el lugar natural para empezar, incluso sin leer todavía con soltura.' },
      { course: 'python-ai-kids-masterclass', code: 'PRRI / 02', title: 'Python con inteligencia artificial', alt: 'Imagen del curso de Python e IA para niños', note: 'Para chicos que ya tienen 9 o más. Bucles, condiciones y decisiones como las del juego de monedas de esta página, y luego pequeños proyectos con IA.' },
      { course: 'roblox-game-coding-for-kids-lua-course', code: 'PRRI / 03', title: 'Programar juegos en Roblox', alt: 'Imagen del curso de programación de juegos en Roblox', note: 'Desde los 8. Para el niño que juega Roblox y quiere crear su propio mapa: obstáculos, monedas y reglas que él mismo escribe en Luau.' }
    ]
  },

  sections: [
    {
      id: 'por-edades',
      eyebrow: 'El distrito por edades',
      h2: '¿Qué edades tiene la población del Rímac?',
      lede: 'En el censo de 2025 el Rímac tuvo 14,847 niños de 6 a 11 años y 16,358 adolescentes de 12 a 17. El distrito suma 197,361 habitantes según el INEI, el 1,9 % de Lima Metropolitana.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Población censada del Rímac por grupos de edad (Censos Nacionales 2025)', head: ['Grupo de edad', 'Personas', 'Proporción de los censados (cálculo nuestro)'], rows: [
          ['0 a 5 años', '10,228', '5,6 %'],
          ['6 a 11 años', '14,847', '8,1 %'],
          ['12 a 17 años', '16,358', '8,9 %'],
          ['18 a 29 años', '33,865', '18,5 %'],
          ['30 a 44 años', '41,521', '22,7 %'],
          ['45 a 59 años', '32,981', '18,0 %'],
          ['60 años a más', '33,497', '18,3 %'],
          ['Total censado', '183,297', '100 %']
        ] },
        { kind: 'source', html: 'Fuente: INEI, cuadro 3 de los Censos Nacionales 2025 para Lima Metropolitana, en la revisión del 15 de julio de 2026. El cuadro 1 añade 14,064 personas omitidas (7,1 % de la población total, cálculo nuestro) que no tienen edad publicada. La tercera columna es nuestra.' },
        { kind: 'two', mt: true,
          leftH3: 'Cada año de primaria',
          left: [
            'Con el cuadro 2, que da edades simples, se ven los niños año por año: 2,134 de 6 años, 2,265 de 7, 2,505 de 8, 2,557 de 9, 2,758 de 10, 2,628 de 11 y 2,733 de 12. Juntos dan 17,580 chicos entre los 6 y los 12 cumplidos, según nuestra propia suma.',
            'La edad de 10 años es la más numerosa de ese tramo en el distrito.'
          ],
          rightH3: 'Qué no dicen las filas',
          right: [
            'Que casi uno de cada cinco censados tenga 60 años o más es un dato de edades, nada más. No dice con quién vive cada niño ni cómo es su casa, y no lo usamos para suponerlo.',
            'Toda la población censada del Rímac figura en área urbana en el cuadro 2.'
          ] },
        { kind: 'p', mt: true, html: 'El Rímac está al otro lado del río frente al Cercado de Lima, y limita con San Juan de Lurigancho, Independencia y San Martín de Porres. Una clase por videollamada no depende de puentes ni de rutas: empieza cuando su hijo enciende la computadora.' }
      ]
    },
    {
      id: 'musica',
      eyebrow: 'Música y código',
      h2: '¿Se parece aprender a programar a aprender música?',
      lede: 'Más de lo que parece. Una partitura es una lista de instrucciones que se ejecutan en orden, con partes que se repiten, saltos y un final. Un programa es lo mismo. Los niños que leen música suelen reconocer enseguida la idea de un bucle.',
      body: [
        { kind: 'p', html: 'En el Rímac la música tiene su espacio público. La municipalidad anunció en gob.pe, el 11 de enero de 2025, clases de música gratuitas en su Centro Cultural, con un "único requisito": "traer tu propio instrumento". El 18 de marzo de 2025 abrió la inscripción a los Talleres Culturales 2025, del 17 al 28 de marzo, de lunes a viernes de 3:00 a 6:00 p. m., en el Centro Cultural del Rímac, Escuela Taller Rímac, en el jirón Chiclayo. Y el 21 de abril de 2025 informó de un convenio marco con la Universidad Nacional de Educación Enrique Guzmán y Valle, La Cantuta, para proyectos que beneficien a estudiantes, docentes y vecinos. No tenemos ninguna relación con la municipalidad ni con la universidad; los citamos para describir lo que el distrito ofrece.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Ideas de la música y su equivalente al programar (comparación nuestra)', head: ['En música', 'En programación', 'Cómo se escribe en Python'], rows: [
          ['Tocar las notas en orden', 'Ejecutar instrucciones una tras otra', 'Una línea debajo de otra'],
          ['Signo de repetición', 'Un bucle', '<code>for</code> o <code>while</code>'],
          ['Saltar un compás marcado', 'Pasar al siguiente elemento', '<code>continue</code>'],
          ['Fin de la pieza', 'Terminar el bucle antes de tiempo', '<code>break</code>'],
          ['Contar compases', 'Una variable que suma', '<code>coins = coins + 1</code>']
        ] },
        { kind: 'source', html: 'La tabla es una comparación nuestra para niños; no es una teoría musical. Sirve para que un niño que estudia un instrumento use lo que ya sabe.' },
        { kind: 'p', mt: true, html: 'Las dos cosas se combinan bien en la semana: el taller de música en persona, con el instrumento en la mano, y la clase de programación desde casa, en otro horario. El CNEB da a Arte y cultura tres horas pedagógicas semanales en todos los grados de primaria y no incluye un área de computación; la programación queda fuera del horario escolar, y ahí es donde entramos nosotros.' }
      ]
    },
    {
      id: 'una-hora',
      eyebrow: 'Una clase por dentro',
      h2: '¿Cómo suena una hora de clase de programación en inglés?',
      lede: 'Como una conversación de trabajo entre el niño y su mentor, con frases cortas que se repiten cada semana. Todas nuestras clases son en inglés; esta es la forma típica de una sesión con un niño de 9 o 10 años.',
      body: [
        { kind: 'ol', items: [
          '<strong>Saludo y repaso (5 minutos).</strong> "Hi! What did we build last time?". El niño abre su proyecto y lo muestra. Si contesta en castellano, el mentor le devuelve la frase en inglés y él la repite.',
          '<strong>El reto del día (10 minutos).</strong> El mentor comparte su pantalla y presenta un problema pequeño: "Our player must skip the rocks". Lo explica con un dibujo, no solo con palabras.',
          '<strong>Predecir (5 minutos).</strong> "What do you think will happen?". El niño responde antes de ejecutar nada. Equivocarse aquí está bien; es parte del método.',
          '<strong>Programar (25 minutos).</strong> El niño escribe en su propia computadora mientras el mentor mira su pantalla. Cuando aparece un error, el mentor pregunta "Which line?" en lugar de corregirlo él.',
          '<strong>Explicar (10 minutos).</strong> "Tell me how it works". El niño cuenta su solución en inglés, con las palabras que tenga. El mentor completa lo que falta.',
          '<strong>Cierre (5 minutos).</strong> Una tarea corta para la semana y una nota para la familia sobre lo trabajado.'
        ] },
        { kind: 'p', mt: true, html: 'Los tiempos son aproximados y el reparto es nuestro; con niños de 6 o 7 años la clase tiene más juego y menos texto. Lo constante es el idioma: el mentor no cambia al castellano, pero habla despacio, repite y usa la pantalla para que el niño nunca se quede sin entender qué hacer.' },
        { kind: 'p', html: 'Para ubicar el inglés en contexto: en el EF EPI 2025 la capital sacó 555 y quedó en la banda alta de la medición, mientras el país completo marcó 519. Una hora semanal de conversación con propósito, como la de arriba, es práctica oral que difícilmente se consigue de otra manera a esta edad.' }
      ]
    },
    {
      id: 'desde-casa',
      eyebrow: 'Clases a distancia',
      h2: '¿Qué hace falta para tomar clases en línea desde el Rímac?',
      lede: 'Un equipo de mesa o portátil con teclado, una cámara, un micrófono, audífonos e internet. Nada más: no hay que instalar programas de pago ni comprar kits, y no hay que salir de casa.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Internet y computadoras en Lima Metropolitana, abril a junio de 2026 (INEI)', head: ['Indicador', 'Lima Metropolitana'], rows: [
          ['Hogares con internet', '84,7 %'],
          ['Aumento frente al mismo trimestre de 2025', '4,3 puntos porcentuales'],
          ['Usuarios de internet entre la población desde los 6 años', '92,4 %'],
          ['Hogares con computadora', '53,3 %']
        ] },
        { kind: 'source', html: 'Fuente: INEI, boletín de estadísticas de las TIC en los hogares, segundo trimestre de 2026, con datos preliminares de la ENAHO. Lima Metropolitana incluye la Provincia Constitucional del Callao; el INEI no publica cifras por distrito.' },
        { kind: 'two', mt: true,
          leftH3: 'Lima se conecta cada vez más',
          left: [
            'Según el INEI, la proporción de hogares de Lima Metropolitana con internet creció 4,3 puntos en un año, el mayor aumento entre las áreas del país. Para muchas familias, la conexión ya no es el obstáculo.',
            'La computadora sí lo es para algunas: un poco más de la mitad de los hogares de Lima tiene una. Si en su casa hay una compartida, basta con reservarla para la hora de la clase.'
          ],
          rightH3: 'El tiempo que se ahorra',
          right: [
            'Nadie tiene que cruzar el río ni coordinar quién lleva y quién recoge. La clase dura lo que dura, y el resto de la tarde queda libre para la tarea o el taller de música.',
            'Si un día su hijo no puede salir, la clase sigue. Si la familia viaja, también, desde cualquier lugar con internet.'
          ] }
      ]
    },
    {
      id: 'monedas',
      tint: 'tint',
      eyebrow: 'Reto en Python',
      h2: '¿Qué hacen break y continue dentro de un bucle?',
      lede: '<code>continue</code> salta lo que queda de esa vuelta y pasa a la siguiente; <code>break</code> termina el bucle en ese momento. Este ejercicio, preparado por nosotros para chicos de quinto y sexto de primaria, los muestra con un camino de baldosas: monedas, una roca que hay que saltar y lava que obliga a detenerse.',
      body: [
        { kind: 'code', label: 'Un camino de baldosas', lang: 'Python', code: PY, note: 'La lista <code>tiles</code> es el camino. El bucle recorre las baldosas una por una, en orden.' },
        { kind: 'code', label: 'Salida del programa', lang: 'Salida', code: OUT, note: 'Así respondió Python 3 cuando ejecutamos baldosas.py; no cambiamos ni una letra.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Recorrer en papel.</strong> El niño dibuja las seis baldosas y pone el dedo en la primera. El mentor dice: "Walk slowly. What happens on each tile?".',
          '<strong>La roca.</strong> En la segunda baldosa, <code>continue</code> hace que el programa imprima el aviso y pase a la siguiente baldosa sin sumar moneda. La roca se salta, pero el camino sigue.',
          '<strong>La lava.</strong> En la quinta baldosa, <code>break</code> termina el recorrido. La sexta baldosa tiene una moneda, pero el bucle nunca llega a ella.',
          '<strong>El resumen.</strong> La última línea dice <code>Coins collected: 3 of 4</code>: había cuatro monedas en el camino y se juntaron tres. El niño explica en inglés cuál se perdió y por qué.',
          '<strong>Cambiar el camino.</strong> El reto es mover la lava al final de la lista y predecir el nuevo resultado antes de ejecutar. Después, cambiar <code>break</code> por <code>continue</code> y ver qué pasa.'
        ] },
        { kind: 'p', mt: true, html: 'Lo valioso del ejercicio no es la sintaxis, sino la pregunta que deja: ¿qué parte de mi programa nunca se ejecutó? Un niño que se acostumbra a preguntárselo revisa su trabajo en vez de darlo por bueno, y esa costumbre es la que tratamos de construir en cada clase, lejos de copiar respuestas ajenas o generadas.' }
      ]
    },
    {
      id: 'por-donde',
      eyebrow: 'Por dónde empezar',
      h2: '¿Qué aprende un niño del Rímac según su edad?',
      lede: 'Los más pequeños aprenden con bloques y personajes; desde los 9 años la mayoría puede escribir código; y desde los 13 hay grupos aparte para adolescentes.',
      body: [
        { kind: 'table', numCols: [], caption: 'Recorrido sugerido por edad (nuestro)', head: ['Edad', 'Lo que aprende', 'Un proyecto posible'], rows: [
          ['6 y 7 años', 'Secuencias y repeticiones con bloques', 'Una canción animada en Scratch'],
          ['8 y 9 años', 'Condiciones, variables y eventos', 'Un juego de atrapar notas musicales'],
          ['10 y 11 años', 'Bucles, break y continue en Python', 'El camino de baldosas de esta página, ampliado'],
          ['12 años', 'Funciones y proyectos con varias partes', 'Un juego en Roblox con niveles']
        ] },
        { kind: 'source', html: 'Recomendación nuestra. La ubicación final la decide el mentor en la clase gratis, según lo que su hijo ya sabe hacer.' },
        { kind: 'two', mt: true,
          leftH3: 'Si su hijo tiene 12 años',
          left: [
            'Con 12 años hay dos caminos: seguir con los chicos de primaria un tiempo más o subir al grupo de secundaria. Lo definimos con usted tras la sesión de prueba.',
            'Las opciones para esa edad están explicadas en <a class="ag-inline-link" href="/programacion-para-ninos-de-12-anos">programación para niños de 12 años</a>.'
          ],
          rightH3: 'Si está en secundaria',
          right: [
            'Entre los 13 y los 17 se trabaja en grupos aparte, con proyectos de IA, páginas web, Java y Python. Como la secundaria peruana no reserva horas para computación, estos cursos se toman por fuera del colegio.',
            'Vea <a class="ag-inline-link" href="/clases-de-programacion-para-adolescentes-peru">clases de programación para adolescentes</a>.'
          ] }
      ]
    },
    {
      id: 'horas',
      eyebrow: 'Horarios',
      h2: '¿Cómo se coordina la hora entre el Rímac y la India?',
      lede: 'Con una diferencia que nunca cambia: la India va 10 horas y 30 minutos por delante. Usted reserva en hora peruana y el sistema hace la conversión. Estos son ejemplos, no un horario de clases.',
      body: [
        { kind: 'table', numCols: [], caption: 'Conversión de hora del Rímac a hora de la India', head: ['En el Rímac', 'En la India', 'Momento allá'], rows: [
          ['6:45 a. m.', '5:15 p. m.', 'Tarde'],
          ['9:15 a. m.', '7:45 p. m.', 'Noche'],
          ['11:45 a. m.', '10:15 p. m.', 'Noche'],
          ['1:45 p. m.', '12:15 a. m.', 'Pasada la medianoche'],
          ['3:15 p. m.', '1:45 a. m.', 'Madrugada'],
          ['5:45 p. m.', '4:15 a. m.', 'Madrugada']
        ] },
        { kind: 'source', html: 'Hora del Perú: UTC-5, sin cambio de hora desde 1994 (tzdata, zona America/Lima, y hora oficial del INACAL). Hora de la India: UTC+5:30 fija (Asia/Kolkata). Por eso la diferencia es igual en verano y en invierno.' },
        { kind: 'p', mt: true, html: 'Si su hijo tiene un taller de música por la tarde, la clase de programación puede ir en la mañana, o al revés. Como usted elige el horario, las dos actividades no chocan. En vacaciones se puede cambiar la hora sin cambiar de mentor.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Avance',
    h2: '¿Cómo se ve el progreso de un niño que programa?',
    lede: 'Cinco señales propias, de la más simple a la más madura, que usamos para contarle a la familia dónde está su hijo.',
    table: { caption: 'Cinco señales de progreso (nuestras)', head: ['Señal', 'Edad en que suele aparecer', 'En la práctica'], rows: [
      ['1. Sigue la partitura', '6 a 7 años', 'ordena bloques para que una escena ocurra como la imaginó'],
      ['2. Repite con un bucle', '7 a 9 años', 'cambia diez bloques iguales por uno de repetición'],
      ['3. Salta y se detiene', '9 a 10 años', 'usa <code>continue</code> y <code>break</code> en el lugar correcto'],
      ['4. Encuentra lo que no corrió', '10 a 11 años', 'descubre qué parte de su programa nunca se ejecutó'],
      ['5. Compone su propio proyecto', '11 a 12 años', 'diseña un juego con reglas propias y lo presenta en inglés']
    ] },
    left: { h3: 'Para madres y padres', ps: [
      'Si su hijo estudia un instrumento, pregúntele qué se parece entre su partitura y su programa. La respuesta suele sorprender.',
      'Los atascos son normales, sobre todo cuando pasa de bloques a texto. Con constancia se superan.'
    ] },
    right: { h3: 'Para los niños', ps: [
      'Recorra su bucle con el dedo, paso a paso, antes de ejecutarlo.',
      'Si falta una moneda al final, busque el break que la dejó fuera.'
    ] }
  },

  catalogue: {
    eyebrow: 'Catálogo',
    h2: 'Más cursos para primaria',
    lede: 'Cada curso es en vivo, en inglés, con un mentor que acompaña al niño de inicio a fin, y se toma en grupo o de forma individual.',
    bands: [
      { num: 'I', h3: 'Para empezar', sub: 'De 6 a 9 años', courses: [
        { code: 'PRRI / INI / 01', slug: 'kids-coding-blocks-masterclass', title: 'Bloques de colores', blurb: 'Animaciones y juegos para los más pequeños, por edades.' },
        { code: 'PRRI / INI / 02', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Razonamiento temprano', blurb: 'Patrones y orden lógico antes de programar.' },
        { code: 'PRRI / INI / 03', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft y código', blurb: 'Construcciones y comandos en un mundo conocido.' }
      ] },
      { num: 'II', h3: 'Crear', sub: 'De 8 a 12 años', courses: [
        { code: 'PRRI / CREA / 01', slug: 'game-development-masterclass-for-kids', title: 'Desarrollo de juegos', blurb: 'De la idea al juego jugable, en varias plataformas.' },
        { code: 'PRRI / CREA / 02', slug: 'kids-ai-web-development-course', title: 'Una web hecha por el niño', blurb: 'HTML y CSS para publicar su propia página.' },
        { code: 'PRRI / CREA / 03', slug: 'block-coding-app-development-masterclass', title: 'Primeras apps', blurb: 'Una aplicación de teléfono armada con bloques.' }
      ] },
      { num: 'III', h3: 'Ir más allá', sub: 'De 9 a 12 años', courses: [
        { code: 'PRRI / MAS / 01', slug: 'cpp-programming-for-kids-course', title: 'C++ con retos', blurb: 'Un lenguaje más exigente, con juegos cortos.' },
        { code: 'PRRI / MAS / 02', slug: 'ai-literacy-for-kids-course', title: 'IA para curiosos', blurb: 'Qué hace una inteligencia artificial y cuándo se equivoca.' },
        { code: 'PRRI / MAS / 03', slug: 'maths-through-coding', title: 'Matemática con Python', blurb: 'Problemas de números resueltos con programas propios.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Funcionamiento',
    h2: '¿Qué forma tiene una semana de clases?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Antes del taller', l: 'Si su hijo tiene música o deporte por la tarde.' },
      { time: 'Después del colegio', l: 'Con el almuerzo y la tarea resueltos.' },
      { time: 'Horario a medida', l: 'En clases individuales, el que usted marque.' }
    ],
    cells: [
      { h3: 'Mentor constante', p: 'La misma persona todo el curso.' },
      { h3: 'Inglés sin prisa', p: 'Frases cortas, repetición y apoyo visual.' },
      { h3: 'Su hijo programa', p: 'Él escribe; el mentor pregunta y orienta.' },
      { h3: 'Algo terminado', p: 'Cada etapa cierra con un proyecto.' },
      { h3: 'Familia informada', p: 'Un resumen corto después de las clases.' },
      { h3: 'Grupo o individual', p: 'Quince a veinte chicos de edad cercana, o solo su hijo.' }
    ]
  },

  projectsH2: 'Trabajos de nuestros alumnos',
  projectsLede: 'Con el tiempo, los proyectos de bloques dan paso a aplicaciones de verdad. Debajo, una muestra de chicos más grandes, y otros tantos en <a class="ag-inline-link" href="/student-labs">Student labs</a> (en inglés).',
  reviewsLede: 'Reseñas que familias y alumnos publicaron en Google, en inglés y sin cambios.',

  fees: {
    h2: 'Precios para familias del Rímac',
    lede: 'Las tarifas están en dólares estadounidenses y se pagan con tarjeta. El banco emisor hace la conversión a su moneda, de modo que el cargo final cambia ligeramente según el tipo de cambio de la fecha.',
    free: ['Una clase de prueba gratuita', 'Un reto para ubicar a su hijo', 'Sin tarjeta'],
    group: ['De quince a veinte chicos de edad similar', 'Mentor fijo', 'Dos clases semanales en vivo', 'Pago por mes, sin permanencia'],
    one: ['Solo su hijo y el mentor', 'Plan hecho a su medida', 'El horario que usted elija']
  },

  faq: {
    eyebrow: 'Preguntas',
    h2: 'Programación para niños en el Rímac: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No: todas se dan en inglés, en vivo, sin excepciones. Muchas familias lo buscan justamente por eso, porque su hijo programa y conversa en inglés a la vez. El mentor habla con calma y repite lo necesario. En el EF EPI 2025 Lima alcanzó el nivel alto del índice, y practicar el idioma hablando, desde niño, ayuda a llegar ahí.' },
      { q: '¿Cuántos chicos en edad escolar tiene el Rímac?', a: 'Entre las personas censadas en 2025, el INEI contó 14,847 en el tramo de 6 a 11 años y 16,358 en el de 12 a 17.' },
      { q: '¿Puede mi hijo combinar la programación con un taller de música?', a: 'Sí. Como usted elige el horario de la clase en línea, puede ponerla en la mañana o en otro día que no choque con el taller.' },
      { q: '¿Mi hijo de 7 años es muy pequeño?', a: 'No. A los 7 se programa moviendo bloques y personajes en Scratch, sin escribir texto. Pasar a teclear código suele darse un par de años después.' },
      { q: '¿A qué hora son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Un ejemplo: 9:15 de la mañana en el Rímac equivale a 7:45 de la noche para el mentor.' },
      { q: '¿Qué necesita mi hijo para conectarse?', a: 'Un equipo con teclado, cámara y micrófono, más audífonos y una señal estable. La pantalla del teléfono queda chica para escribir código.' },
      { q: '¿Hay grupos para adolescentes?', a: 'Sí, separados de los de primaria y desde los 13 años; allí se aprende Java, Python, desarrollo de webs e IA.' },
      { q: '¿Tienen convenio con la municipalidad o con La Cantuta?', a: 'No. No estamos vinculados a la Municipalidad del Rímac, a ninguna universidad, al MINEDU, a la UGEL ni a ningún colegio. Mencionamos sus actividades solo como contexto.' },
      { q: '¿Las clases tienen validez escolar?', a: 'No. No reemplazan ningún curso ni dan calificaciones. Lo único que entregamos al completar un curso es una constancia de finalización con el nombre de Modern Age Coders.' },
      { q: '¿Cómo se paga?', a: 'Mes a mes, en dólares de EE. UU. y con tarjeta. El banco de la familia hace el cambio de moneda. Para la sesión de prueba no hace falta registrar ninguna tarjeta.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Para seguir',
    h2: 'Otras guías útiles',
    lede: 'Páginas relacionadas para familias con niños y adolescentes.',
    items: [
      { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños en inglés', p: 'Lo que más preguntan los padres peruanos, respondido en una sola página.' },
      { href: '/programacion-para-ninos-de-12-anos', label: 'Programación para niños de 12 años', p: 'Qué cambia al acercarse a la secundaria.' },
      { href: '/programacion-roblox-para-ninos-en-ingles', label: 'Roblox para niños en inglés', p: 'Cómo se aprende a programar creando juegos en Roblox.' },
      { href: '/clases-de-programacion-para-adolescentes-peru', label: 'Programación para adolescentes', p: 'Cursos para chicos y chicas de secundaria.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Así son nuestras clases por dentro (en inglés).' },
      { href: '/courses', label: 'All courses', p: 'Todos nuestros cursos (en inglés).' }
    ]
  },

  start: {
    h2: 'Reserve una clase de prueba desde el Rímac',
    lede: 'Su hijo se conecta, conversa unos minutos con el mentor y resuelve un pequeño problema adecuado a su edad. Así vemos por dónde conviene empezar. Después le contamos qué curso y qué formato proponemos, y usted decide.',
    readFirst: 'Si quiere leer antes de reservar, puede revisar <a class="ag-inline-link" href="/how-we-teach">How we teach</a> y <a class="ag-inline-link" href="/courses">All courses</a> (en inglés).',
    note: 'Nuestros mentores enseñan desde la India, en directo y en inglés. Las consultas por WhatsApp se atienden en castellano.',
    formNote: 'Sin costo y sin tarjeta.'
  },

  footer: {
    cols: [
      { h4: 'Cursos', links: [
        { href: '/courses/scratch-programming-complete-course', label: 'Scratch completo' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Python con IA' },
        { href: '/courses/roblox-game-coding-for-kids-lua-course', label: 'Roblox' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Guías', links: [
        { href: '/programacion-para-ninos-de-12-anos', label: 'Niños de 12 años' },
        { href: '/programacion-roblox-para-ninos-en-ingles', label: 'Roblox en inglés' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: 'Saltar la roca, frenar ante la lava'
  },

  personalityCss: `
.ag-root.ag-prri .ag-hero h1 { max-width: 19ch; letter-spacing: -0.014em; }
.ag-root.ag-prri .ag-capsule { border-left-width: 6px; border-radius: 2px; }
.ag-root.ag-prri .ag-section-head h2 { max-width: 26ch; }
.ag-root.ag-prri .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-prri .ag-steps li { line-height: 1.66; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Lima Metropolitana workbook cuadros 1, 2 and 3, updated to 15 July 2026); INEI Estadísticas de las TIC en los Hogares, II trimestre 2026; Municipalidad Distrital del Rímac notes on gob.pe (11 January, 18 March and 21 April 2025); MINEDU CNEB hours; EF EPI 2025; tzdata and INACAL. Read 8 to 10 November 2026. The music comparison, class outline, age path and Python exercise are our own.',
    localProject: 'A tile path for a 10 to 12 year old in the Rímac: the loop walks coin, rock, coin, coin, lava, coin; continue skips the rock, break stops at the lava, so it prints Coins collected: 3 of 4 and the last coin is never reached; the child then moves the lava and swaps break for continue, predicting each result. Linked to the district\'s music workshops through our repetition and stopping analogy. Lesson family: loop control with continue and break.',
    requiredMentions: ['Coins collected: 3 of 4', 'lava: stop here', 'Talleres Culturales 2025', 'traer tu propio instrumento', 'Universidad Nacional de Educación Enrique Guzmán y Valle', '17,580 chicos entre los 6 y los 12 cumplidos', 'Saltar la roca, frenar ante la lava', 'Aumento frente al mismo trimestre de 2025'],
    sources: [
      { claim: 'Rímac 197,361 total, 183,297 censused, 14,064 omitted; seven age groups; single ages 6 to 12; all urban.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/27/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Talleres Culturales 2025, 17 to 28 March, weekdays 3 to 6 p.m., Centro Cultural del Rímac, Escuela Taller Rímac.', url: 'https://www.gob.pe/institucion/munirimac/noticias/1128833-inscribirte-en-los-talleres-culturales-2025' },
      { claim: 'Free music classes at the Centro Cultural, bring your own instrument (11 January 2025).', url: 'https://www.gob.pe/institucion/munirimac/noticias/1091472-clases-gratuitas-de-musica-en-el-centro-cultural' },
      { claim: 'Framework agreement with the Universidad Nacional de Educación Enrique Guzmán y Valle (21 April 2025).', url: 'https://www.gob.pe/institucion/munirimac/noticias/1154944-firma-de-convenio-marco-entre-la-municipalidad-del-rimac-y-la-universidad-nacional-de-educacion-enrique-guzman-y-valle' },
      { claim: 'Lima Metropolitana households with internet 84.7%, up 4.3 points; internet use 92.4%; households with a computer 53.3%.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'Primaria Arte y cultura 3 hours; no computing area.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'EF EPI 2025: Lima 555 (high), Peru 519.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 with no DST since 1994; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Any reading of household make-up from the 60-and-over share: refused; the page says it is an age figure only.',
      'A link with the municipality or La Cantuta: refused; the page says we have none.',
      'Names of the mayor or the rector: left out.',
      'District internet or computer figures: not published by INEI; Lima Metropolitana rows are labelled.',
      'That music lessons make children better coders: not claimed; the music table is labelled our own comparison for children.',
      'Spanish-language teaching, grades, official certificates or typed fees: refused.'
    ]
  }
};
