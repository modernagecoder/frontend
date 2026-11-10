// SHIP: district kids door (ES) | Breña, Lima centro: niños por edad, computadora en casa, inglés | len() counts characters, split() counts words, and the double space
'use strict';
// Clases de programación para niños en Breña (ag- Spanish-language district door, Peru cluster row PE223, hubGroup lima;
// alloc: pnb, #4E582A). Written 2026-11-10.
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only; no soles, no typed figure.
// Angle: the Breña parent who types "clases de programación para niños breña" all year (not a summer page). Spine: what an
// online class from home in English is; how many children of each primaria age live in Breña (INEI Censos 2025, single
// ages); whether the computer at home is enough (INEI Censos 2025 household equipment, district row); what the
// municipality itself offers children (its own notes); a note for adolescentes; an original word-counting lesson.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/clases-de-programacion-para-ninos-brena-lima/
// and pe/src/inei/tab, pe/src/inei/tab-hogar; fetched 2026-11-08 to 2026-11-10; quotes grepped in the raw text):
//  INEI, Censos Nacionales 2025, Indicadores demográficos, Lima Metropolitana (tabulados/27/poblacion):
//    Cuadro N° 1 "DISTRITO BREÑA 104888" total, censada 96892, omitida 7996; "LIMA METROPOLITANA 10141775".
//    Cuadro N° 3 "DISTRITO BREÑA 96892 4231 6561 7153 17866 23048 18183 19850" (0-5, 6-11, 12-17, 18-29, 30-44, 45-59, 60+);
//    Lima Metropolitana 6 a 11 "818096", 12 a 17 "867253". All Breña rows are URBANA (no rural row).
//    Cuadro N° 2 single ages: "6 años 988", "7 años 954", "8 años 1115", "9 años 1132", "10 años 1219", "11 años 1153",
//    "12 años 1178".
//    Rank 28 of 43 Lima districts by total population (our ordering of Cuadro N° 1).
//    Neighbours, same Cuadro N° 1: LIMA 314840, JESÚS MARÍA 105776, PUEBLO LIBRE 99937.
//  INEI, Censos Nacionales 2025, hogar, Equipamiento_del_hogar.xlsx (tabulados/27/hogar), DISTRITO BREÑA, Hogares 31119:
//    Cuadro N° 1 Computadora 11506, Laptop 18694, Tableta 8416; Cuadro N° 2 Teléfono celular 30931, Conexión a internet
//    fijo 22243, Conexión a internet móvil 26367. Lima Metropolitana Hogares 2888407: Computadora 825305, Laptop 1198775,
//    Tableta 556106, internet fijo 1685106, internet móvil 2208429.
//  Municipalidad de Breña, gob.pe note 29 December 2025 (n-1322490): talleres "iniciarán el 5 de enero y se desarrollarán
//    hasta el mes de febrero"; registration "de manera presencial"; disciplines listed (fútbol, vóley, ajedrez, capoeira,
//    oratoria y liderazgo, arqueología recreativa, mini chef ...); no programming or computing in the list (grepped).
//  Municipalidad de Breña, gob.pe note 6 July 2026 (n-1415416): "77.° aniversario de creación política del distrito";
//    "Festival de Bandas Escolares"; "Concurso de Desfile Escolar" on "la avenida Arica". Officials' names left out.
//  National: MINEDU Edades normativas ("Se considera la edad normativa al 31 de marzo de cada año"); CNEB (no computing area,
//    competency 28 transversal); EF EPI 2025 Lima city 555 (high band); tzdata America/Lima -5:00, Asia/Kolkata +5:30.
// Our own calculations (python3 -I, scratchpad pe/d4/facts.py): 6561 / 96892 = 6.8 % and 7153 / 96892 = 7.4 %; 6561 + 7153 =
//    13714 against 19850 aged 60+; laptop 18694 / 31119 = 60.1 %, computadora 37.0 %, tableta 27.0 %, internet fijo 71.5 %,
//    móvil 84.7 %; Lima Metropolitana laptop 41.5 %, computadora 28.6 %, internet fijo 58.3 %, móvil 76.5 %.
// Our own example, run with python3 -I (brena.py in the src-pages folder), exact output:
//    Characters: 26 / Spaces: 7 / split(" ") gives 8 pieces / ['My', '', 'dog', 'likes', '', '', 'long', 'walks'] /
//    split() gives 5 words / ['My', 'dog', 'likes', 'long', 'walks']
// Lesson family: len() counts characters, split() with no argument counts words; split(" ") makes empty pieces at double
//    spaces.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  "frase = 'My  dog likes   long walks'",
  '',
  "print('Characters:', len(frase))",
  "print('Spaces:', frase.count(' '))",
  '',
  "trozos = frase.split(' ')",
  "print('split(\" \") gives', len(trozos), 'pieces')",
  'print(trozos)',
  '',
  'palabras = frase.split()',
  "print('split() gives', len(palabras), 'words')",
  'print(palabras)'
].join('\n');

const OUT = [
  'Characters: 26',
  'Spaces: 7',
  'split(" ") gives 8 pieces',
  "['My', '', 'dog', 'likes', '', '', 'long', 'walks']",
  'split() gives 5 words',
  "['My', 'dog', 'likes', 'long', 'walks']"
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'lima', label: 'Programación para niños en Breña' },
  slug: 'clases-de-programacion-para-ninos-brena-lima',
  code: 'pnb',
  accent: '#4E582A',
  accentRationale: 'Clases de programación para niños en Breña: a dark moss green #4E582A, quieter than the bright greens of the summer pages, for a compact central district of old streets; contrast above 4.5 on the paper #FBF8F2 (alloc.tsv) and on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Clases de programación para niños en Breña',
  title: 'Clases de programación para niños en Breña, en inglés',
  description: 'Clases de programación para niños de Breña, en Lima: en vivo y en inglés, desde la computadora de casa, todo el año, en grupo o a solas con el mentor.',
  ogDescription: 'Programación para niños de Breña sin salir del distrito: cuántos niños hay por edad, qué equipo hace falta en casa y una clase de ejemplo que cuenta palabras en inglés.',
  twitterDescription: 'Clases de programación para niños de Breña, en vivo y en inglés, desde casa y a la hora que elija la familia.',
  pageName: 'Clases de programación para niños en Breña',
  webPageDescription: 'Guía para madres y padres de Breña (Lima) que buscan clases de programación para sus hijos de 6 a 12 años durante todo el año: los niños del distrito por edad según los Censos Nacionales 2025 del INEI, el equipo de los hogares de Breña según el mismo censo, lo que ofrece la municipalidad, una nota para adolescentes y una clase de ejemplo en Python escrita por nosotros.',
  courseDescription: 'Clases en vivo y en línea de programación para niños de 6 a 12 años de Breña, dictadas solo en inglés: bloques y Scratch, Python, juegos y proyectos de IA, en clase grupal o individual, a cualquier hora y durante todo el año.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Programación para niños en Breña',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#desde-casa', label: 'Desde casa' },
    { href: '#por-edad', label: 'Por edad' },
    { href: '#equipo', label: 'Equipo' },
    { href: '#ejemplo', label: 'Ejemplo' },
    { href: '#hora', label: 'Hora' }
  ],
  eyebrow: 'Lima centro &middot; Breña &middot; De 6 a 12 años',
  h1: 'Clases de programación para niños en Breña, en inglés',
  lede: 'Esta página es para las familias de Breña que quieren que su hijo o hija aprenda a programar a lo largo del año escolar, no solo en el verano, y sin sumar un traslado más a la semana. Contamos cómo funciona una clase guiada en inglés por videollamada, cuántos chicos de cada edad registró el censo en el distrito, qué equipo suele haber en los hogares breñenses y cómo se ve una lección real.',
  secondaryCta: { href: '#por-edad', label: '¿Desde qué edad?' },
  wa: 'Hola Modern Age Coders, vivimos en Breña y buscamos clases de programación en inglés para nuestro hijo o hija. ¿Podemos reservar una clase gratis?',
  heroNote: 'Enseñamos en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; de Breña a la India, en la pantalla de su casa',
  spec: [
    ['Para quién', 'Niños de 6 a 12 años; también adolescentes'],
    ['Dónde', 'En su casa, en Breña, por videollamada'],
    ['Idioma', 'Solo inglés, con un mentor que va al ritmo del niño'],
    ['Formato', 'Grupo de quince a veinte, o clases individuales'],
    ['Cuándo', 'Todo el año, el día y la hora que usted elija'],
    ['Primera clase', 'Gratis, sin tarjeta']
  ],
  capsuleQ: 'Respuesta rápida',
  capsule: 'Sí. En Modern Age Coders enseñamos a programar a chicos de Breña de 6 a 12 años con clases en vivo y en inglés, por internet y durante todo el año. Su hijo se conecta desde la computadora de casa y un mentor que vive en la India lo acompaña por videollamada, despacio y a su ritmo. Primero arma programas con bloques y Scratch; hacia los nueve o diez años escribe Python, juegos y proyectos de IA. Usted escoge grupo o clase individual, y la hora. Probar cuesta nada: la primera sesión es gratis.',

  picks: {
    eyebrow: 'Para empezar en Breña',
    h2: 'Tres cursos con los que suelen empezar los niños de Breña',
    lede: 'Uno para los que todavía arrastran bloques, uno para el primer lenguaje escrito y uno para los que sueñan con publicar su propia web.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'PNB / 01', title: 'Scratch de principio a fin', alt: 'Imagen del curso completo de programación con Scratch', note: 'Pensado para 1°, 2° y 3° de primaria. Personajes, sonidos y juegos que se arman encajando bloques, con órdenes inglesas que el mentor pronuncia en voz alta.' },
      { course: 'python-ai-kids-masterclass', code: 'PNB / 02', title: 'Primer Python, con algo de IA', alt: 'Imagen del curso de Python e IA para niños', note: 'Cuando el chico ya teclea con soltura, hacia 4° o 5° grado. Programas que cuentan y revisan textos, como el ejemplo de abajo, preguntas y respuestas, y proyectos pequeños de IA.' },
      { course: 'kids-ai-web-development-course', code: 'PNB / 03', title: 'Su propia web', alt: 'Imagen del curso de desarrollo web para niños', note: 'Para los últimos grados de primaria. HTML y CSS hasta publicar una página sobre su mascota, su equipo o su juego favorito, redactada en un inglés sencillo.' }
    ]
  },

  sections: [
    {
      id: 'desde-casa',
      eyebrow: 'Desde casa',
      h2: '¿Se puede aprender a programar en Breña sin salir de casa?',
      lede: 'Sí. Nuestras sesiones ocurren en directo por videollamada: su hijo programa en la computadora de su casa, en Breña, mientras un mentor lo guía desde la India. El idioma de cada sesión es el inglés.',
      body: [
        { kind: 'p', html: 'Breña es un distrito pequeño y céntrico. Limita con el Cercado de Lima, Jesús María y Pueblo Libre, y en los Censos Nacionales 2025 del INEI figura con 104,888 habitantes, el puesto 28 de los 43 distritos de Lima Metropolitana por población (el puesto lo calculamos ordenando el Cuadro N.° 1). En un distrito así, casi todo queda cerca, pero una actividad extra para los chicos sigue costando lo mismo de siempre: alguien tiene que llevarlos, esperar y traerlos de vuelta.' },
        { kind: 'p', html: 'Con una clase en línea ese problema desaparece. El niño termina sus tareas, se sienta frente a la computadora y en cinco minutos ya está conectado con su mentor y con su grupo. No importa si la familia vive cerca de la avenida Arica o en otra parte del distrito: la clase llega igual a todas las casas.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'En vivo, no grabado', p: 'Un mentor de carne y hueso ve la pantalla de su hijo, le hace preguntas y lo deja equivocarse y corregir. Si se traba, lo resuelven juntos en ese momento.' },
          { h3: 'Solo en inglés', p: 'Python se escribe con palabras inglesas como <code>print</code>, <code>if</code> o <code>for</code>, y la conversación también va en inglés. El mentor pronuncia con calma, cambia la frase si no se entendió y deja tiempo para contestar.' },
          { h3: 'Todo el año', p: 'No es un taller de vacaciones. Su hijo puede empezar en cualquier mes, avanzar a su ritmo durante el año escolar y cambiar de horario cuando cambie el del colegio.' }
        ] },
        { kind: 'p', mt: true, html: 'El idioma es la duda número uno de los padres breñenses, y para muchos termina siendo el motivo para inscribirse: el chico programa y, sin darse cuenta, conversa en inglés una hora entera. En el ranking EF EPI 2025 de EF Education First, la ciudad de Lima obtiene 555 puntos, dentro de la banda alta. Su hijo no tiene que hablar inglés el primer día; le basta con animarse a escuchar y a probar. Cómo trabajamos con toda la primaria lo contamos en <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">nuestra guía para padres de primaria</a>.' }
      ]
    },
    {
      id: 'por-edad',
      eyebrow: 'Breña por edades',
      h2: '¿Cuántos niños de cada edad viven en Breña?',
      lede: 'Alrededor de mil por cada año de edad. El Cuadro N.° 2 de los Censos Nacionales 2025 cuenta a las personas censadas en Breña año por año, y entre los 6 y los 12 años los números van de 954 a 1,219 niños por edad.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Niñas y niños censados en Breña por edad simple, con el grado que les corresponde por edad normativa', head: ['Edad', 'Censados en Breña, 2025', 'Grado según la edad normativa', 'Por dónde empezar (nuestra sugerencia)'], rows: [
          ['6 años', '988', '1° de primaria', 'Secuencias de bloques y cuentos animados'],
          ['7 años', '954', '2° de primaria', 'Scratch con repeticiones y sonidos'],
          ['8 años', '1,115', '3° de primaria', 'Juegos completos en Scratch'],
          ['9 años', '1,132', '4° de primaria', 'Primeras líneas de Python'],
          ['10 años', '1,219', '5° de primaria', 'Python con textos y listas'],
          ['11 años', '1,153', '6° de primaria', 'Un proyecto propio: web, juego o IA'],
          ['12 años', '1,178', '1° de secundaria', 'Python más serio, o Java y apps']
        ] },
        { kind: 'source', html: 'Fuentes: INEI, Censos Nacionales 2025, tabulado "Indicadores demográficos" de Lima Metropolitana, Cuadro N.° 2 (población censada por edades simples); fecha censal 15 de septiembre de 2025. El grado sale de la guía "Edades normativas" del MINEDU, que toma como corte el 31 de marzo. La última columna la escribimos nosotros.' },
        { kind: 'two', mt: true,
          leftH3: 'Lo que muestra el cuadro',
          left: [
            'Sumando los grupos que publica el INEI en su Cuadro N.° 3, Breña tiene 6,561 niños censados de 6 a 11 años y 7,153 adolescentes de 12 a 17, sobre 96,892 personas censadas. Son el 6.8 % y el 7.4 % de la población censada (cálculo nuestro).',
            'El mismo cuadro muestra un distrito con muchos adultos mayores: 19,850 personas censadas tienen 60 años o más, más que todos los niños y adolescentes de 6 a 17 años juntos, que son 13,714 (cálculo nuestro). En muchas casas de Breña conviven abuelos, padres y nietos.'
          ],
          rightH3: 'Lo que significa para su hijo',
          right: [
            'Un niño de 10 años en Breña tiene más de mil compañeros de su misma edad en el distrito, repartidos en muchos colegios. Pero en un grupo de nuestras clases comparte la pantalla con chicos de su edad de otros lugares, y eso le obliga a usar el inglés para entenderse.',
            'La edad orienta, pero no manda. Durante la sesión de prueba el mentor plantea un reto corto y mira cómo lo encara su hijo; de ahí sale la sugerencia de curso. Una niña de 8 años que ya lee en inglés con soltura puede saltar antes a Python.'
          ] },
        { kind: 'p', mt: true, html: 'Como referencia, los Censos Nacionales 2025 cuentan en toda Lima Metropolitana 818,096 niños censados de 6 a 11 años y 867,253 adolescentes de 12 a 17. Los distritos vecinos de Breña se publican cada uno por separado en el mismo cuadro: el Cercado de Lima con 314,840 habitantes, Jesús María con 105,776 y Pueblo Libre con 99,937. Para las familias de esos dos últimos distritos tenemos páginas propias sobre el verano: <a class="ag-inline-link" href="/vacaciones-utiles-de-programacion-jesus-maria-lima">vacaciones útiles de programación en Jesús María</a> y <a class="ag-inline-link" href="/vacaciones-utiles-de-programacion-pueblo-libre-lima">en Pueblo Libre</a>.' }
      ]
    },
    {
      id: 'equipo',
      eyebrow: 'La computadora de casa',
      h2: '¿Alcanza con la computadora que hay en casa?',
      lede: 'Casi siempre, sí. Para programar hace falta una laptop o una computadora de escritorio con teclado, y según el censo de 2025 seis de cada diez hogares de Breña tienen al menos una laptop.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Equipos y conexión en los hogares de Breña y de Lima Metropolitana, Censos Nacionales 2025 (porcentajes calculados por nosotros)', head: ['En el hogar hay', 'Breña (31,119 hogares)', 'Lima Metropolitana (2,888,407 hogares)'], rows: [
          ['Laptop', '18,694 hogares (60.1 %)', '41.5 %'],
          ['Computadora de escritorio', '11,506 hogares (37.0 %)', '28.6 %'],
          ['Tableta', '8,416 hogares (27.0 %)', '19.3 %'],
          ['Conexión a internet fijo', '22,243 hogares (71.5 %)', '58.3 %'],
          ['Conexión a internet móvil', '26,367 hogares (84.7 %)', '76.5 %'],
          ['Teléfono celular', '30,931 hogares (99.4 %)', '99.4 %']
        ] },
        { kind: 'source', html: 'Fuente: INEI, Censos Nacionales 2025, tabulado "Equipamiento del hogar" de Lima Metropolitana, Cuadros N.° 1 (tenencia de equipos) y N.° 2 (servicios), fila "Hogares" del distrito de Breña y de Lima Metropolitana, hogares en viviendas particulares con ocupantes presentes. Un hogar puede tener laptop y computadora a la vez, por eso las filas no se suman. Los porcentajes son nuestros.' },
        { kind: 'two', mt: true,
          leftH3: 'Qué equipo sirve',
          left: [
            'Laptop o PC de escritorio, con cámara, micrófono y teclado. Si la comparten varios hermanos, alcanza con apartar esa hora para el que tiene clase. Todo lo que usamos es gratuito: Scratch corre en el navegador y Python se instala en unos minutos, con el mentor guiando la instalación.',
            'El celular, presente en casi todos los hogares, le sirve a usted para escribirnos por WhatsApp, no a su hijo para programar: en una pantalla tan chica y sin teclado, teclear código se vuelve una pelea. Una tableta aguanta, como mucho, el primer mes de bloques.'
          ],
          rightH3: 'Qué conexión hace falta',
          right: [
            'Una conexión estable durante la hora de clase. En Breña el 71.5 % de los hogares tiene internet fijo según el censo; si en su casa la señal llega por datos móviles, conviene probarla antes con una videollamada larga.',
            'Conviene tener audífonos con micrófono incorporado: el inglés del mentor llega más nítido, y su voz también, aunque en la sala suene la calle o la televisión.'
          ] },
        { kind: 'p', mt: true, html: 'No mostramos estas cifras para comparar familias ni barrios. Las mostramos porque responden una pregunta práctica que nos hacen a menudo: si una clase virtual va a funcionar en una casa normal de Breña. Según el propio censo, en la mayoría de los hogares del distrito ya está todo lo necesario.' }
      ]
    },
    {
      id: 'distrito',
      eyebrow: 'Lo que ya ofrece el distrito',
      h2: '¿Qué actividades para niños organiza la Municipalidad de Breña?',
      lede: 'Sobre todo deporte, arte y actividades escolares. En sus notas en gob.pe, la municipalidad anuncia talleres gratuitos de verano y celebraciones del distrito con los colegios; ninguna de las que encontramos incluye programación.',
      body: [
        { kind: 'p', html: 'El 29 de diciembre de 2025 la Municipalidad de Breña anunció sus talleres y cursos gratuitos para el verano 2026, que "iniciarán el 5 de enero y se desarrollarán hasta el mes de febrero", con inscripción "de manera presencial". La lista incluye fútbol, vóley, ajedrez, capoeira, oratoria y liderazgo, arqueología recreativa y mini chef, entre muchas otras. Buscamos en ese texto las palabras programación y computación, y no aparecen.' },
        { kind: 'p', html: 'En julio de 2026 la municipalidad celebró el "77.° aniversario de creación política del distrito" con un Festival de Bandas Escolares y un Concurso de Desfile Escolar en la avenida Arica. Son actividades que reúnen a los colegios del distrito, y que muestran algo que ya saben las familias: la vida de los chicos de Breña gira mucho alrededor del colegio y del barrio.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Una cosa no quita la otra', p: 'Un niño puede ir al taller de ajedrez o de vóley del distrito y además programar con nosotros dos veces por semana desde casa. Nuestras clases no compiten con lo que ya hace; se acomodan al horario que queda.' },
          { h3: 'Nada que trasladar', p: 'Los talleres municipales se inscriben y se dictan en locales del distrito. Las nuestras ocurren en la pantalla de su casa, así que no hay que sumar otro trayecto a los que ya hace la familia durante la semana.' },
          { h3: 'Sin vínculo oficial', p: 'Somos ajenos a la Municipalidad de Breña, con la UGEL ni con el MINEDU. Citamos las notas de la municipalidad solo para describir el distrito con datos de primera mano.' }
        ] },
        { kind: 'p', mt: true, html: 'Si busca un panorama más amplio de lo que hacemos en el país, nuestra página nacional <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">Coding and AI classes in Peru</a> reúne, en inglés, los cursos por edad y por materia que ofrecemos en todo el Perú.' }
      ]
    },
    {
      id: 'ejemplo',
      tint: 'tint',
      eyebrow: 'Una clase de ejemplo',
      h2: '¿Qué hace un chico de 5° de primaria en una sesión de Python?',
      lede: 'Este es un tramo de una sesión nuestra con alumnos de 5° y 6° grado. El ejercicio es nuestro: una frase en inglés con espacios de más, y dos maneras de contar sus palabras que dan resultados distintos.',
      body: [
        { kind: 'code', label: 'Contar letras y palabras en una frase', lang: 'Python', code: PY, note: 'La frase tiene dos espacios después de <code>My</code> y tres después de <code>likes</code>, a propósito. Es el tipo de error que se cuela cuando uno escribe rápido.' },
        { kind: 'code', label: 'Lo que imprime el programa', lang: 'Salida', code: OUT, note: 'Pegamos aquí lo que apareció en pantalla al correr el archivo con Python 3, sin tocar un carácter. Con <code>split(" ")</code> resultan 8 trozos, tres de ellos vacíos; con <code>split()</code>, las 5 palabras reales.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Leer la frase en voz alta.</strong> El niño la lee en inglés: "My dog likes long walks". Cinco palabras, dice. El mentor pregunta: "How many characters?" Y ahí empieza la duda.',
          '<strong>Predecir antes de ejecutar.</strong> Casi todos aciertan que <code>split()</code> dará 5, pero muy pocos adivinan que <code>split(" ")</code> dará 8. El mentor lanza entonces su pregunta: "Where do the extra pieces come from?"',
          '<strong>Encontrar los trozos vacíos.</strong> En la lista impresa aparecen tres <code>\'\'</code>. Cada uno es el hueco entre dos espacios seguidos. El niño los señala en la frase original y descubre por qué.',
          '<strong>Explicar la diferencia en una frase.</strong> "split with a space cuts at every space; split with nothing cuts at groups of spaces." Se practica una oración completa en inglés, no una palabra suelta.',
          '<strong>Llevarlo a su mundo.</strong> El reto final es escribir tres oraciones en inglés sobre su barrio, contar sus palabras con <code>split()</code> y comprobar el resultado contando con el dedo.'
        ] },
        { kind: 'p', mt: true, html: 'Parece un ejercicio menor, y sin embargo contiene el hábito central de todas nuestras sesiones: anticipar el resultado, contrastarlo con lo que de verdad aparece y poner en palabras la causa de la diferencia. Quien se limita a copiar una solución, sea de otro alumno o de un chatbot, jamás se pregunta de dónde salieron esos trozos vacíos. Sobre eso escribimos más en <a class="ag-inline-link" href="/aprender-a-pensar-no-copiar-programacion">aprender a pensar, no a copiar</a>.' }
      ]
    },
    {
      id: 'adolescentes',
      eyebrow: 'Si su hijo ya está en secundaria',
      h2: '¿Y si mi hijo tiene 12 años o más?',
      lede: 'También puede empezar. Para nosotros "niños" son los de 6 a 12 años; desde 1° de secundaria hablamos de adolescentes, con cursos que van más rápido y más hondo. En Breña viven 7,153 adolescentes censados de 12 a 17 años, según el Cuadro N.° 3 del censo de 2025.',
      body: [
        { kind: 'two',
          leftH3: 'Por dónde empiezan los adolescentes',
          left: [
            'Un adolescente que nunca programó puede ir directo a Python escrito, sin pasar por los bloques. En pocas semanas está haciendo programas que leen textos, guardan datos en listas y toman decisiones.',
            'Si ya programó un poco en el colegio o por su cuenta, el mentor le propone Java, desarrollo web o creación de apps, según lo que le guste construir.'
          ],
          rightH3: 'Lo que no da el horario escolar',
          right: [
            'En la secundaria peruana el CNEB no reserva horas para un curso de computación o programación. Su competencia sobre entornos virtuales atraviesa las demás áreas, y cuánto se trabaja depende de cada colegio.',
            'Por eso un adolescente que quiere programar de verdad suele hacerlo fuera del horario escolar. Nuestras clases acompañan al colegio, no lo reemplazan, y no otorgan notas.'
          ] },
        { kind: 'p', mt: true, html: 'Para esa etapa tenemos una guía aparte, <a class="ag-inline-link" href="/clases-de-programacion-para-adolescentes-peru">clases de programación para adolescentes en Perú</a>, con los cursos por grado y lo que se aprende en cada uno.' }
      ]
    },
    {
      id: 'hora',
      eyebrow: 'Horarios',
      h2: '¿A qué hora puede programar un niño de Breña?',
      lede: 'A la hora que la familia elija. Los mentores trabajan desde la India, cuyo reloj marca diez horas y media más que el peruano en cualquier mes. Abajo, cinco horas de Breña traducidas al reloj del mentor.',
      body: [
        { kind: 'table', numCols: [], caption: 'Una misma hora en Breña y en la India (solo para convertir; no es un horario de clases)', head: ['Hora en Breña (hora de Perú)', 'Hora del mentor (hora de la India)', 'Fecha en la India'], rows: [
          ['7:30 a. m.', '6:00 p. m.', 'Mismo día'],
          ['9:30 a. m.', '8:00 p. m.', 'Mismo día'],
          ['1:30 p. m.', '12:00 a. m. (medianoche)', 'Día siguiente'],
          ['4:30 p. m.', '3:00 a. m.', 'Día siguiente'],
          ['6:30 p. m.', '5:00 a. m.', 'Día siguiente']
        ] },
        { kind: 'source', html: 'La hora oficial peruana, que publica el INACAL, es UTC-5 los doce meses; la base de husos horarios tzdata (America/Lima) confirma que no hay horario de verano. La India usa UTC+5:30, también fijo. Resultado: la brecha no se mueve entre enero y julio.' },
        { kind: 'p', mt: true, html: 'Hay colegios limeños de turno mañana y de turno tarde. Quien estudia temprano suele programar a media tarde, con las tareas hechas; quien entra al mediodía aprovecha las primeras horas. El sistema de reservas le muestra cada opción directamente en hora de Perú.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Avance',
    h2: '¿Cómo se nota que su hijo avanza?',
    lede: 'Usamos cinco señales propias, que su hijo puede mostrarle en casa. No son notas ni tienen relación con las del colegio.',
    table: { caption: 'Cinco señales de avance en programación para niños (escala nuestra)', head: ['Señal', 'Edad habitual', 'Su hijo ya puede'], rows: [
      ['1. Ordena', '6 a 7 años', 'poner los bloques en el orden correcto para que su personaje cumpla una tarea'],
      ['2. Repite', '7 a 9 años', 'cambiar diez bloques iguales por un solo bucle y contarlo en inglés'],
      ['3. Cuenta', '9 a 10 años', 'armar en Python unas pocas líneas que cuenten letras o palabras de una frase'],
      ['4. Corrige', '10 a 11 años', 'encontrar por qué un resultado no es el esperado, como los trozos vacíos del ejemplo'],
      ['5. Crea', '11 a 12 años', 'planificar un proyecto propio y presentarlo en inglés a su familia']
    ] },
    left: { h3: 'Para madres y padres', ps: [
      'No mida el avance por la cantidad de líneas de código. Mídalo por si su hijo le puede contar qué hace su programa y qué falló la primera vez.',
      'Las semanas en que el programa falla son las que más enseñan. Si su hijo se frustra, pídale que le explique el error: al ponerlo en palabras, muchas veces lo resuelve solo.'
    ] },
    right: { h3: 'Para su hijo', ps: [
      'Apueste un número antes de correr el programa: ¿cuántas palabras habrá? Luego verifique si ganó la apuesta.',
      'Si el resultado sorprende, no lo borre: imprima la lista y mire qué hay adentro.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Otros nueve cursos para seguir avanzando',
    lede: 'Cada uno se enseña por videollamada y en inglés; el mentor que empieza el curso lo termina, sea en grupo o a solas con su hijo.',
    bands: [
      { num: 'I', h3: 'Primeros pasos', sub: 'Primeros grados', courses: [
        { code: 'PNB / INICIO / 01', slug: 'kids-coding-blocks-masterclass', title: 'Programación con bloques', blurb: 'Animaciones y juegos encajando piezas de colores, sin teclear casi nada.' },
        { code: 'PNB / INICIO / 02', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Razonamiento para pequeños', blurb: 'Series, acertijos y orden lógico antes de tocar código.' },
        { code: 'PNB / INICIO / 03', slug: 'minecraft-coding-for-kids-course', title: 'Programación con Minecraft', blurb: 'Bloques, redstone y código dentro del juego favorito de muchos chicos.' }
      ] },
      { num: 'II', h3: 'Crear y jugar', sub: 'De 8 a 12 años', courses: [
        { code: 'PNB / CREA / 01', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Juegos en Roblox', blurb: 'Pistas de obstáculos y marcadores en Roblox Studio, con Luau.' },
        { code: 'PNB / CREA / 02', slug: 'game-development-masterclass-for-kids', title: 'Videojuegos para niños', blurb: 'Diseñar niveles, reglas y puntajes, de la idea al juego terminado.' },
        { code: 'PNB / CREA / 03', slug: 'block-coding-app-development-masterclass', title: 'Apps con bloques', blurb: 'Una app propia para el teléfono de la familia, hecha con bloques.' }
      ] },
      { num: 'III', h3: 'Pensar con la IA', sub: 'Desde los 8 años', courses: [
        { code: 'PNB / IA / 01', slug: 'ai-literacy-for-kids-course', title: 'Entender la IA', blurb: 'Cómo responde un chatbot por dentro y por qué a veces inventa.' },
        { code: 'PNB / IA / 02', slug: 'maths-through-coding', title: 'Matemática con código', blurb: 'Fracciones, patrones y geometría del colegio, comprobadas con Python.' },
        { code: 'PNB / IA / 03', slug: 'cpp-programming-for-kids-course', title: 'C++ para niños', blurb: 'Un segundo lenguaje, más estricto, aprendido con retos cortos.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Qué pasa en una semana de clases?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Antes del colegio', l: 'Si su hijo entra al mediodía y por la mañana rinde más.' },
      { time: 'Después de las tareas', l: 'Para quien sale al mediodía y descansa un rato antes.' },
      { time: 'Individual', l: 'Sesiones a solas con el mentor, en el momento que la familia decida.' }
    ],
    cells: [
      { h3: 'Un mentor que no cambia', p: 'La misma persona del primer día al último, que aprende cómo razona su hijo.' },
      { h3: 'Inglés sin apuro', p: 'Oraciones breves, ejemplos en pantalla y pausas para que el chico conteste.' },
      { h3: 'El código lo escribe él', p: 'El mentor pregunta y guía; el niño teclea y corrige.' },
      { h3: 'Algo que mostrar', p: 'Cada etapa cierra con un proyecto que se puede enseñar en casa.' },
      { h3: 'Noticias para usted', p: 'Unas líneas tras cada etapa: qué se practicó y qué sigue.' },
      { h3: 'Grupo o individual', p: 'Quince a veinte compañeros de una etapa similar, o sesiones solo para él.' }
    ]
  },

  projectsH2: 'Lo que construyen nuestros estudiantes',
  projectsLede: 'Contar palabras de una frase es el comienzo; con constancia, el camino llega a aplicaciones completas. Estos trabajos los hicieron alumnos con más años de curso, y la colección entera está en <a class="ag-inline-link" href="/student-labs">Student labs</a> (en inglés).',
  reviewsLede: 'Opiniones dejadas en Google por familias y alumnos de varios países; las copiamos sin traducir.',

  fees: {
    h2: 'Precios para familias de Breña',
    lede: 'Publicamos la mensualidad en dólares de Estados Unidos y la cobramos con tarjeta. La conversión la hace el banco emisor el día del cargo, así que el monto final en soles depende del tipo de cambio de esa fecha.',
    free: ['Una clase gratis, en vivo', 'El mentor ve por dónde conviene empezar', 'Sin tarjeta y sin compromiso'],
    group: ['De quince a veinte niños de edad parecida', 'El mismo mentor todo el curso', 'Dos clases en vivo por semana', 'Pago mes a mes; se deja cuando quiera'],
    one: ['Solo su hijo y el mentor', 'Ritmo y temas a su medida', 'El día y la hora que usted elija']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Clases de programación para niños en Breña: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No, ninguna. Enseñamos únicamente en inglés, siempre en directo, y eso juega a favor de su hijo: cada sesión de programación es también una hora de conversación en otro idioma. Si una explicación no se entiende, el mentor la reformula y la muestra en pantalla. Lima figura en la banda alta del EF EPI 2025, con 555 puntos, de modo que muchos chicos de Breña llegan con una base que se aprovecha.' },
      { q: '¿Tienen un local en Breña?', a: 'No. No tenemos local en Breña ni en ninguna parte de Lima. Las clases son por videollamada y su hijo las toma desde casa, lo que le ahorra a la familia llevarlo y recogerlo cada semana.' },
      { q: '¿Desde qué edad puede empezar mi hijo?', a: 'Desde que entra a 1° grado, a los 6 años. Al principio todo son bloques y personajes; la mayoría de chicos está lista para teclear Python cuando cursa 4° o 5° grado.' },
      { q: '¿Cuántos niños viven en Breña?', a: 'Según los Censos Nacionales 2025 del INEI, en Breña hay 6,561 niños censados de 6 a 11 años y 7,153 adolescentes de 12 a 17, sobre 104,888 habitantes. Año por año, entre los 6 y los 12 años hay entre 954 y 1,219 niños por edad.' },
      { q: '¿Sirve la computadora que tenemos en casa?', a: 'Casi seguro que sí, si tiene teclado, cámara y micrófono. Según el censo de 2025, el 60.1 % de los hogares de Breña tiene laptop y el 37.0 % computadora de escritorio. El teléfono, en cambio, no da para escribir código.' },
      { q: '¿En qué horario se conecta un chico de Breña?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Como el reloj indio adelanta al peruano en diez horas y media, una sesión a las 9:30 a. m. en Breña empieza a las 8:00 p. m. para el mentor.' },
      { q: '¿Es solo para el verano?', a: 'No. Esta página es sobre clases durante todo el año. Su hijo puede empezar en cualquier mes, seguir durante el año escolar y cambiar de horario cuando cambie el del colegio.' },
      { q: '¿Cómo se paga la mensualidad?', a: 'Con tarjeta, cada mes, en dólares de Estados Unidos; el banco de su tarjeta convierte el importe. Para la sesión de prueba no pedimos ningún dato de pago.' },
      { q: '¿Tienen relación con la municipalidad o con el MINEDU?', a: 'Ninguna. Somos independientes de la Municipalidad de Breña, de la UGEL y del MINEDU; lo que su hijo aprende con nosotros no cuenta como nota del colegio. Quien completa un curso recibe un certificado de finalización emitido y firmado solo por Modern Age Coders.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Para seguir leyendo',
    h2: 'Otras páginas para familias de Breña',
    lede: 'Algunas en castellano y otras en inglés, para decidir con calma.',
    items: [
      { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños en inglés', p: 'La guía general para primaria: el colegio, la edad y una clase con un juego de colores.' },
      { href: '/clases-de-programacion-para-adolescentes-peru', label: 'Programación para adolescentes', p: 'Para chicos de secundaria que quieren ir más lejos.' },
      { href: '/aprender-a-pensar-no-copiar-programacion', label: 'Aprender a pensar, no a copiar', p: 'Por qué insistimos en predecir y explicar antes de ejecutar.' },
      { href: '/vacaciones-utiles-de-programacion-jesus-maria-lima', label: 'Vacaciones útiles en Jesús María', p: 'Para la familia vecina que busca un verano con código.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Nuestra página nacional, en inglés, con cursos por edad.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Nuestro método de enseñanza explicado en inglés, de la primera sesión en adelante.' }
    ]
  },

  start: {
    h2: 'Reserve una clase gratis desde Breña',
    lede: 'La sesión de prueba empieza con una charla breve, en inglés fácil; luego el mentor plantea un reto con bloques o con Python y observa cómo lo piensa su hijo. Con eso le recomendamos curso, formato y ritmo, sin ningún compromiso.',
    readFirst: 'Para leer con calma antes de reservar: el método en <a class="ag-inline-link" href="/how-we-teach">How we teach</a> y el catálogo completo en <a class="ag-inline-link" href="/courses">All courses</a>, ambos escritos en inglés.',
    note: 'Los mentores viven en la India y cada sesión ocurre en directo y en inglés. Si nos escribe por WhatsApp, hágalo tranquilo en castellano.',
    formNote: 'Gratis, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Cursos para empezar', links: [
        { href: '/courses/scratch-programming-complete-course', label: 'Scratch completo' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Python e IA para niños' },
        { href: '/courses/kids-ai-web-development-course', label: 'Páginas web para niños' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Para familias', links: [
        { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños en inglés' },
        { href: '/coding-and-ai-classes-in-peru', label: 'Nuestras clases en Perú' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: 'Contar antes de creer'
  },

  personalityCss: `
.ag-root.ag-pnb .ag-hero h1 { letter-spacing: -0.011em; max-width: 21ch; }
.ag-root.ag-pnb .ag-capsule { border-left-width: 4px; }
.ag-root.ag-pnb .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-pnb .ag-section-head h2 { max-width: 27ch; }
.ag-root.ag-pnb .ag-steps li { line-height: 1.64; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025: Indicadores demográficos de Lima Metropolitana (Cuadros N.° 1, 2 and 3) and Equipamiento del hogar (Cuadros N.° 1 and 2), district rows for Breña; Municipalidad de Breña notes on gob.pe of 29 December 2025 and 6 July 2026; MINEDU Edades normativas and CNEB; EF EPI 2025; tzdata and INACAL. The example, the starting suggestions and the progress signals are our own.',
    localProject: 'A word counter for a child of 10 or 11 in Breña: the English sentence "My  dog likes   long walks" with extra spaces; len() gives Characters: 26, count gives Spaces: 7, split(" ") gives 8 pieces with three empty strings and split() gives 5 words. Run with python3 -I. Lesson family: len() counts characters, split() with no argument counts words, split(" ") makes empty pieces at double spaces.',
    requiredMentions: ['split() gives 5 words', 'Where do the extra pieces come from?', '18,694 hogares (60.1 %)', 'el puesto 28 de los 43 distritos de Lima Metropolitana', '77.° aniversario de creación política del distrito', 'más que todos los niños y adolescentes de 6 a 17 años juntos, que son 13,714', 'Censados en Breña, 2025', 'Contar antes de creer', 'iniciarán el 5 de enero y se desarrollarán hasta el mes de febrero'],
    sources: [
      { claim: 'Breña 104,888 inhabitants, censada 96,892, 6,561 aged 6 to 11, 7,153 aged 12 to 17, 19,850 aged 60+, single ages 6 to 12; neighbours Lima, Jesús María, Pueblo Libre; Lima Metropolitana 818,096 and 867,253.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/27/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Breña households 31,119: laptop 18,694, computer 11,506, tablet 8,416, fixed internet 22,243, mobile internet 26,367, mobile phone 30,931; Lima Metropolitana totals.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/27/hogar/Equipamiento_del_hogar.xlsx' },
      { claim: 'Free summer 2026 workshops from 5 January to February, registered in person; list without programming.', url: 'https://www.gob.pe/institucion/munibrena/noticias/1322490' },
      { claim: '77th anniversary of the district, school band festival and school parade on avenida Arica (July 2026).', url: 'https://www.gob.pe/institucion/munibrena/noticias/1415416' },
      { claim: 'Normative age at 31 March.', url: 'https://cdn.www.gob.pe/uploads/document/file/2818106/Edades_normativas.pdf?v=1644437764' },
      { claim: 'CNEB: no computing area; competency 28 transversal.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'EF EPI 2025: Lima city 555, high band.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 with no DST; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Officials named in the municipal notes: left out on purpose.',
      'Any municipal coding workshop in Breña: none found; the 29 December 2025 list was grepped for programación and computación with no match, and the page says so.',
      'Income, class or strata readings of the household equipment table: refused; the table is shown only to answer whether a home computer is enough.',
      'Traffic or commute times: no figure used.',
      'Sums of the district populations or of the laptop and computer rows: refused; each figure is shown as INEI publishes it.',
      'Spanish-language teaching: refused; the capsule and an FAQ say the classes are in English only.',
      'Soles prices or any typed fee: refused; fees render from the template in USD.'
    ]
  }
};
