// SHIP: district | Carabayllo, Lima's youngest big district: live code at home, words and reading first | sorted letters as a signature: anagrams, lower() and a pair that only looks close
'use strict';
// Clases de programación para niños en Carabayllo (ag- Spanish district door, Peru cluster row PE203, P6, hubGroup lima).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md
// (rule "City and district pages").
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only; no soles, no typed figure.
// Angle: the parent in Carabayllo searching "clases de programación para niños Carabayllo" during the school year. Spine:
// Carabayllo has a larger share of children than Lima Metropolitana as a whole (INEI Censos 2025; one quotable table set
// against the Lima figure); what the municipality published on reading in primaria and on a vocational day held at its
// library (gob.pe); a word lesson in Python (anagrams with sorted letters) that is English vocabulary and code at once;
// starting age; why a class at home rather than travelling out of the district (no traffic figures); INEI connectivity;
// adolescentes; Peru to India clock. No income or class assumptions about the district.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/clases-de-programacion-para-ninos-
// carabayllo-lima/, fetched 10 November 2026 with curl -sL -A "Mozilla/5.0" or copied from saved raw files; quotes grepped
// in the raw text):
//  INEI, Censos Nacionales 2025, Lima Metropolitana workbook (inei-censos2025-ind_27-lima-metropolitana.xlsx), CUADRO N°1:
//    "DISTRITO CARABAYLLO | 430806 | 213700 | 217106 | 416086 | 205968 | 210118 | 14720"; CUADRO N°3: "DISTRITO CARABAYLLO
//    | 416086 | 30391 | 43563 | 44343 | 77838 | 100980 | 72784 | 46187", "LIMA METROPOLITANA | 9600043 | 555239 | 818096 |
//    867253 | 1800348 | 2322499 | 1744864 | 1491744"; CUADRO N°2 single ages: 6 años 6311, 7 años 6873, 8 años 7340, 9 años
//    7460, 10 años 7778, 11 años 7801, 12 años 7746.
//  INEI national workbook (ind_00) CUADRO N° 1: our sort of 1,893 districts puts Carabayllo (430806) eighth in Peru
//    (seventh in the province of Lima).
//  Municipalidad Distrital de Carabayllo on gob.pe (names of officials, of the school and of the partner university left
//    out on purpose): noticias/1299815 (13 July 2023): "Los estudiantes de primer y tercer grado de primaria"; "el proyecto
//    educativo de comprensión lectora “A más lectura, más aventuras”"; "incentivar, desarrollar y fomentar el hábito de la
//    lectura". noticias/1347381 (31 May 2024): "“1.er Megatov: Descubre tu Vocación”"; "realizado en el frontis de la
//    Biblioteca Municipal"; "orientar y acompañar a los jóvenes del distrito en el proceso de identificación de su vocación
//    profesional".
//  INEI, TIC en los Hogares, II Trimestre 2026 (inei_tic_iit2026.txt): "en Lima Metropolitana, con un 92,4%"; "el 84,7% de
//    los hogares disponía del servicio"; "alcanzó el 53,3% en Lima Metropolitana"; national "niños de 6 a 11 años (68,2%)";
//    "destacando la población de los niños de 6 a 11 años, adulta mayor y los adultos de 41 a 59 años en 6,7, 6,5 y 4,1
//    puntos porcentuales".
//  MINEDU Edades normativas (as in the pilot): edad normativa al 31 de marzo.
//  EF EPI 2025 Peru page (MARKET 1.3): Lima 555, high band from 550; reading 540, speaking 480 for Peru.
//  Time (timezone.tsv): America/Lima UTC-5 all year, no DST since 1994; Asia/Kolkata UTC+5:30; India 10 h 30 min ahead.
// Our own calculations (python3 -I): Carabayllo shares of its censused population: 0 to 5 7.3 %, 6 to 11 10.5 %, 12 to 17
//    10.7 %; Lima Metropolitana: 5.8 %, 8.5 %, 9.0 %; 430806 / 10141775 = 4.2 %; 43563 / 818096 = 5.3 %; 14720 / 430806 =
//    3.4 % omitted.
// Our own example (car_anagram.py in the src-pages folder), run with python3 -I, exact output:
//    listen + silent -> True / Night + thing -> True / apple + paper -> False / read + dare -> True /
//    Signature of read: ['a', 'd', 'e', 'r']
// Neighbouring districts named in plain text only (Comas, Puente Piedra, San Juan de Lurigancho).
// Lesson family: strings; sorted() turns a word into a letter signature, lower() first, and a pair that shares most letters
// but is not an anagram.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  'def same_letters(a, b):',
  '    return sorted(a.lower()) == sorted(b.lower())',
  '',
  "pairs = [('listen', 'silent'), ('Night', 'thing'), ('apple', 'paper'), ('read', 'dare')]",
  'for a, b in pairs:',
  "    print(a, '+', b, '->', same_letters(a, b))",
  "print('Signature of read:', sorted('read'))"
].join('\n');

const OUT = [
  'listen + silent -> True',
  'Night + thing -> True',
  'apple + paper -> False',
  'read + dare -> True',
  "Signature of read: ['a', 'd', 'e', 'r']"
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'lima', label: 'Programación para niños en Carabayllo' },
  slug: 'clases-de-programacion-para-ninos-carabayllo-lima',
  code: 'prca',
  accent: '#04693D',
  accentRationale: 'Carabayllo: a valley green #04693D, the green of the Chillón farmland that still edges the district, a mid tone between the Comas and Villa María del Triunfo pages; allocated in alloc.tsv (contrast 5.51 on the paper #FBF8F2) and checked above 4.5 on every paper tint by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Clases de programación para niños en Carabayllo',
  title: 'Clases de programación para niños en Carabayllo, Lima',
  description: 'Clases de programación para niños de 6 a 12 años en Carabayllo, Lima Norte: en vivo, en línea y en inglés, desde casa, grupales o individuales y en su horario.',
  ogDescription: 'Programación para niños de Carabayllo sin viajar: un distrito con más niños que el promedio de Lima según el censo 2025, lectura en primaria y un reto de anagramas en Python.',
  twitterDescription: 'Clases de programación en vivo y en inglés para niños de Carabayllo, desde casa y a la hora de su familia.',
  pageName: 'Clases de programación para niños en Carabayllo',
  webPageDescription: 'Guía para familias de Carabayllo que buscan clases de programación para niños durante el año escolar: la estructura de edades del distrito frente a Lima Metropolitana según los Censos Nacionales 2025 del INEI, lo que la municipalidad publicó sobre lectura y orientación vocacional, el acceso a internet según el INEI y un ejercicio de Python con palabras en inglés escrito por nosotros.',
  courseDescription: 'Clases en vivo y en línea de programación para niños de 6 a 12 años de Carabayllo, con cursos propios para adolescentes, dictadas solo en inglés: Scratch, Python, juegos, web y proyectos de IA, en clase grupal o individual y a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Programación para niños, Carabayllo',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#joven', label: 'Un distrito joven' },
    { href: '#lectura', label: 'Lectura' },
    { href: '#palabras', label: 'Reto de palabras' },
    { href: '#inicio', label: 'Cuándo empezar' },
    { href: '#hora-peru', label: 'Hora' }
  ],
  eyebrow: 'Lima Norte &middot; Carabayllo &middot; De 6 a 12 años',
  h1: 'Clases de programación para niños en Carabayllo',
  lede: 'Carabayllo es uno de los distritos con más niños de Lima, en proporción a su población. Si en su casa hay un chico curioso por las computadoras y usted busca un profesor de carne y hueso que le enseñe en vivo, sin trasladarse fuera del distrito, aquí encontrará las cifras del censo, lo que el municipio impulsa en lectura, la edad adecuada para arrancar y una muestra de clase en inglés.',
  secondaryCta: { href: '#palabras', label: 'Ver el reto de las palabras' },
  wa: 'Hola Modern Age Coders, vivimos en Carabayllo y queremos clases de programación para nuestro hijo o hija. ¿Cómo reservamos la clase gratis?',
  heroNote: 'Clases en vivo desde 2020 &middot; más de 10,000 alumnos en varios países &middot; un mentor que le habla a su hijo en inglés, siempre el mismo',
  spec: [
    ['Edades', 'Primaria completa, de 6 a 12; secundaria aparte'],
    ['Dónde', 'En su casa en Carabayllo, por videollamada'],
    ['Qué se usa', 'Scratch, Python, Roblox y HTML'],
    ['Modalidad', 'Grupo de quince a veinte o clase privada'],
    ['Idioma', 'Inglés pausado, con palabras en pantalla'],
    ['Para empezar', 'Una clase gratis, sin tarjeta']
  ],
  capsuleQ: 'La respuesta',
  capsule: 'Sí. Desde cualquier casa de Carabayllo se puede aprender a programar: Modern Age Coders enseña en vivo, en línea y en inglés a alumnos de primaria de 6 a 12 años, y tiene cursos propios para secundaria. Un mentor desde la India lo acompaña por videollamada, ve su pantalla, explica con frases claras y respeta su ritmo y su acento. Primero Scratch; después Python, Roblox, la web y la IA. Usted decide si su hijo va en grupo o solo, en qué día y a qué hora, y la clase de prueba es gratis.',

  picks: {
    eyebrow: 'Para empezar',
    h2: '¿Qué curso le conviene primero a un niño de Carabayllo?',
    lede: 'Tres puntos de partida distintos, según la edad y los gustos de su hijo.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'PRCA / 01', title: 'Scratch desde la primera clase', alt: 'Imagen del curso de Scratch para niños', note: 'Para los que nunca programaron, desde 1° de primaria. Historias, animaciones y juegos con bloques que se leen casi como oraciones.' },
      { course: 'python-ai-kids-masterclass', code: 'PRCA / 02', title: 'Python con palabras y juegos', alt: 'Imagen del curso de Python e IA para niños', note: 'Para 4° a 6° de primaria. Programas que juegan con palabras, como el de los anagramas, dibujos, adivinanzas y proyectos con IA.' },
      { course: 'minecraft-coding-for-kids-course', code: 'PRCA / 03', title: 'Programar en Minecraft', alt: 'Imagen del curso de programación con Minecraft', note: 'Para el niño que ya construye en Minecraft. Aprende a automatizar sus construcciones y descubre la lógica que hay detrás.' }
    ]
  },

  sections: [
    {
      id: 'joven',
      eyebrow: 'Un distrito joven',
      h2: '¿Por qué Carabayllo tiene tantos niños en edad escolar?',
      lede: 'El censo no explica las causas, pero sí muestra el hecho: en Carabayllo, de cada cien personas censadas, más de diez tienen entre 6 y 11 años, cuando en el conjunto de Lima Metropolitana son menos de nueve.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Peso de cada edad escolar: Carabayllo frente a Lima Metropolitana, población censada 2025', head: ['Tramo', 'Carabayllo', 'Lima Metropolitana'], rows: [
          ['Personas censadas', '416,086', '9,600,043'],
          ['Niños de 0 a 5 años', '30,391 (7,3 %)', '555,239 (5,8 %)'],
          ['Niños de 6 a 11 años', '43,563 (10,5 %)', '818,096 (8,5 %)'],
          ['Adolescentes de 12 a 17 años', '44,343 (10,7 %)', '867,253 (9,0 %)']
        ] },
        { kind: 'source', html: 'Fuente: tabulado del INEI con los indicadores demográficos de los distritos limeños (Censos Nacionales 2025, tabla de grupos de edad), guardado por nosotros en noviembre de 2026. Los porcentajes entre paréntesis los calculamos nosotros sobre la población censada de cada ámbito.' },
        { kind: 'two', mt: true,
          leftH3: 'Octavo en el país',
          left: [
            'Carabayllo tiene 430,806 habitantes si se suma la población omitida que estima el INEI (14,720 personas). Puestos en fila los distritos peruanos por número de habitantes, aparece en el octavo lugar nacional y en el séptimo de la provincia de Lima (ordenamiento propio).',
            'Hecha la división, alberga un 4,2 % de la gente de la capital, pero un 5,3 % de los escolares de primaria censados en ella.'
          ],
          rightH3: 'Edades y nada más',
          right: [
            'Que un distrito tenga más niños en proporción solo dice eso: que su población es más joven. No dice nada sobre los ingresos o la vida de cada familia, y no lo leemos de esa manera.',
            'Lo que sí cambia es el día a día: muchas casas con chicos en primaria y secundaria a la vez, y una computadora que se reparte entre hermanos.'
          ] }
      ]
    },
    {
      id: 'lectura',
      eyebrow: 'Leer en el distrito',
      h2: '¿Qué hace la Municipalidad de Carabayllo por la lectura de los niños?',
      lede: 'En julio de 2023 la municipalidad informó en gob.pe que alumnos de 1° y 3° de primaria de un colegio del distrito participaron en el proyecto de comprensión lectora "A más lectura, más aventuras", pensado para fomentar el hábito de leer.',
      body: [
        { kind: 'p', html: 'La misma municipalidad publicó en mayo de 2024 la realización del "1.er Megatov: Descubre tu Vocación", una jornada de orientación vocacional organizada frente a la Biblioteca Municipal, con talleres y espacios para ayudar a los jóvenes del distrito a identificar sus intereses y sus opciones de estudio. Las dos actividades ocurrieron en pleno año escolar.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Leer es programar', p: 'Un programa se lee antes de ejecutarse. Los niños que entienden bien lo que leen detectan antes por qué su código no hace lo esperado.' },
          { h3: 'Descubrir una vocación', p: 'Muchos adolescentes no saben si la informática les gusta hasta que construyen algo. Unos meses programando dan una respuesta más clara que cualquier test.' },
          { h3: 'Sin vínculo', p: 'No tenemos relación con la Municipalidad de Carabayllo, su biblioteca, el colegio del proyecto ni la universidad que participó en la jornada vocacional.' }
        ] },
        { kind: 'p', mt: true, html: 'Según el EF EPI 2025, los peruanos leen inglés con más soltura de la que tienen al hablarlo: el país saca 540 puntos en lectura y 480 en expresión oral. Por eso en nuestras clases leer y hablar van juntos. El niño lee una palabra en el código y luego la usa en una frase dicha en voz alta, como en el ejercicio que sigue.' }
      ]
    },
    {
      id: 'palabras',
      tint: 'tint',
      eyebrow: 'Una clase de ejemplo',
      h2: '¿Cómo junta una clase de Python las palabras en inglés y el código?',
      lede: 'Con anagramas: palabras que usan exactamente las mismas letras en otro orden. El ejercicio es nuestro. El programa ordena las letras de cada palabra y compara el resultado; si coincide, son anagramas.',
      body: [
        { kind: 'code', label: 'Buscar anagramas en inglés', lang: 'Python', code: PY, note: 'Antes de ejecutarlo, el mentor lee cada par en voz alta y pregunta: "Same letters or not?" El niño responde par por par y anota sus apuestas.' },
        { kind: 'code', label: 'Lo que imprime el programa', lang: 'Salida', code: OUT, note: 'Copiado sin cambios de lo que mostró Python 3 al correr el archivo en nuestra computadora.' },
        { kind: 'ol', mt: true, items: [
          '<strong>La firma de una palabra.</strong> <code>sorted(\'read\')</code> devuelve las letras en orden alfabético: a, d, e, r. Dos palabras con la misma firma tienen las mismas letras, en cualquier orden.',
          '<strong>Las mayúsculas engañan.</strong> Para Python, <code>N</code> y <code>n</code> son letras distintas. Por eso la función usa <code>lower()</code> antes de ordenar; sin eso, <em>Night</em> y <em>thing</em> no coincidirían.',
          '<strong>Parecidas no es lo mismo.</strong> <em>apple</em> y <em>paper</em> comparten casi todas las letras, pero una tiene dos <em>p</em> y una <em>l</em>, y la otra una <em>r</em>. El programa dice <code>False</code>. Mirar a ojo no basta; hay que contar.',
          '<strong>Vocabulario de regalo.</strong> En diez minutos el niño aprendió <em>listen</em>, <em>silent</em>, <em>night</em>, <em>thing</em>, <em>read</em> y <em>dare</em>, y las dijo en voz alta. El mentor pide una frase con dos de ellas: "I read in silence at night."',
          '<strong>Su propia lista.</strong> El reto de la semana: encontrar dos anagramas nuevos en inglés, agregarlos a <code>pairs</code> y predecir el resultado antes de correrlo.'
        ] },
        { kind: 'p', mt: true, html: 'Detrás del juego hay una idea que sirve mucho más allá de las palabras: para comparar dos cosas, primero se ponen en una forma común y recién después se comparan. Un niño que entiende esto revisa con otros ojos lo que le dice una página web o una herramienta de IA: no se queda con lo que "parece" igual.' }
      ]
    },
    {
      id: 'inicio',
      eyebrow: 'Cuándo empezar',
      h2: '¿A qué edad conviene que un niño de Carabayllo empiece a programar?',
      lede: 'A partir de 1° de primaria. Con 6 años se empieza con bloques; entre los 9 y los 10, la mayoría ya escribe en Python. El censo cuenta en Carabayllo más de seis mil niños en cada una de esas edades.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Carabayllo: niños censados por edad y la clase que les suele quedar bien', head: ['Edad', 'Niños censados en Carabayllo', 'Grado más probable', 'Tipo de clase (nuestro)'], rows: [
          ['6', '6,311', '1° de primaria', 'Bloques grandes, cuentos que se mueven'],
          ['7', '6,873', '2° de primaria', 'Personajes que repiten y responden'],
          ['8', '7,340', '3° de primaria', 'Juegos con puntaje y niveles'],
          ['9', '7,460', '4° de primaria', 'Primeros programas escritos'],
          ['10', '7,778', '5° de primaria', 'Listas, textos y juegos de palabras'],
          ['11', '7,801', '6° de primaria', 'Funciones, como la de los anagramas'],
          ['12', '7,746', '1° de secundaria', 'Un proyecto pensado y terminado por él']
        ] },
        { kind: 'source', html: 'Fuentes: tabla de edades año por año del INEI para los distritos de Lima (Censos Nacionales 2025) y la norma del MINEDU que asigna la edad de cada grado al 31 de marzo. Los encuestadores anotaron la edad cumplida el día de su visita, así que el grado es solo probable. La columna final es nuestra.' },
        { kind: 'two', mt: true,
          leftH3: 'Programación e inglés a la vez',
          left: [
            'Para muchas familias del distrito, lo más valioso es que el niño practica inglés sin sumar otra actividad. Si eso es lo que usted busca, nuestra página sobre <a class="ag-inline-link" href="/clases-de-ingles-y-programacion-ninos">clases de inglés y programación para niños</a> explica cómo se combinan.',
            'El idioma no se enseña como materia aparte: se usa para construir.'
          ],
          rightH3: 'Pensar, no copiar',
          right: [
            'Desde los primeros bloques, el mentor pide al niño que diga qué va a pasar antes de probar. Es el hábito que sostiene todo lo demás, y lo trabajamos también en nuestra guía sobre <a class="ag-inline-link" href="/aprender-a-pensar-no-copiar-programacion">aprender a pensar y no a copiar</a>.',
            'Un niño que predice y comprueba no necesita copiar respuestas.'
          ] }
      ]
    },
    {
      id: 'en-casa',
      eyebrow: 'Sin salir del distrito',
      h2: '¿Para qué viajar a otra parte de Lima si la clase puede ser en casa?',
      lede: 'Para nada, si lo que se busca es programar. Con la clase en línea el aula está en la sala de su casa y se llega a ella encendiendo la laptop.',
      body: [
        { kind: 'p', html: 'Carabayllo limita con Comas, Puente Piedra y San Juan de Lurigancho, y las academias de otras zonas de Lima quedan bastante más lejos. Sobre la duración del trayecto no damos números: no hay una fuente seria y preferimos no adivinar. Lo que sí sabemos es que llevar y traer a un niño de primaria dos veces por semana exige que un adulto esté libre a esa hora, y que una clase en casa elimina ese problema.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'Internet entre abril y junio de 2026: cifras del INEI para Lima y para los niños del país', head: ['Medición', 'Resultado', 'Cobertura'], rows: [
          ['Uso de internet, toda la población desde los 6 años', '92,4 %', 'Lima Metropolitana'],
          ['Hogares con internet', '84,7 %', 'Lima Metropolitana'],
          ['Hogares con computadora', '53,3 %', 'Lima Metropolitana'],
          ['Uso de internet, niños de 6 a 11 años', '68,2 %', 'Todo el Perú'],
          ['Aumento de ese uso infantil en un año', '6,7 puntos', 'Todo el Perú']
        ] },
        { kind: 'source', html: 'Fuente: INEI, boletín de acceso a tecnologías en los hogares con datos de abril a junio de 2026 (cifras preliminares de la ENAHO). La capital, para esta encuesta, incluye al Callao; el INEI no publica el dato por distrito ni el de los niños solo para Lima.' },
        { kind: 'two', mt: true,
          leftH3: 'Niños que recién se conectan',
          left: [
            'El uso de internet entre los niños de 6 a 11 años fue el que más creció en el país en un año, 6,7 puntos según el INEI, aunque sigue por debajo del de los adolescentes. Para muchos chicos de primaria, la clase de programación es su primera experiencia creando algo en una computadora.',
            'Por eso las primeras clases incluyen lo básico: el teclado, el mouse, guardar un archivo.'
          ],
          rightH3: 'El equipo para la clase',
          right: [
            'Una laptop o computadora de escritorio, aunque sea sencilla, con cámara y micrófono; unos audífonos; e internet que aguante una videollamada.',
            'Si la computadora se comparte entre hermanos, cada uno tiene su clase a su propia hora.'
          ] },
        { kind: 'p', mt: true, html: 'Si su familia está hacia el lado de San Juan de Lurigancho, también puede leer nuestra guía de <a class="ag-inline-link" href="/vacaciones-utiles-de-programacion-san-juan-de-lurigancho-lima">vacaciones útiles de programación en San Juan de Lurigancho</a>; son las mismas clases, contadas para el verano.' }
      ]
    },
    {
      id: 'ingles',
      eyebrow: 'En inglés',
      h2: '¿Cómo se sigue una clase en inglés sin hablarlo en casa?',
      lede: 'Paso a paso. El mentor no espera que el niño llegue hablando: usa frases cortas, escribe cada palabra clave, repite con otras palabras y deja que el niño conteste como pueda.',
      body: [
        { kind: 'p', html: 'Las primeras semanas, el niño entiende más de lo que dice, y es normal. Las palabras del código ayudan, porque cada una tiene un efecto que se ve: <code>print</code> muestra algo, <code>sorted</code> ordena, <code>lower</code> pasa a minúsculas. Cuando una palabra tiene un efecto visible, se recuerda sola.' },
        { kind: 'p', html: 'El índice EF EPI 2025 coloca a Lima con 555 puntos, lo suficiente para entrar en la categoría alta de EF, por encima del promedio nacional, que es moderado. Esa muestra se arma con personas adultas que hacen el examen en línea de EF, no con escolares, así que vale como referencia de ciudad: un inglés oral útil para estudiar y trabajar.' }
      ]
    },
    {
      id: 'secundaria',
      eyebrow: 'Secundaria',
      h2: '¿Qué ofrecen para los adolescentes de Carabayllo?',
      lede: 'Cursos pensados para su edad. El censo encontró en Carabayllo 44,343 chicos de 12 a 17 años, el 10,7 % de los censados del distrito según nuestro cálculo, y para ellos la programación empieza directamente con código.',
      body: [
        { kind: 'p', html: 'Un estudiante de secundaria puede elegir Python, desarrollo web, Java, datos o inteligencia artificial, y casi siempre avanza más rápido si tiene un proyecto propio: un juego, una página o una herramienta para algo que le importa. Ese camino también ayuda a la orientación vocacional: unos meses construyendo dicen mucho sobre si la informática le interesa como carrera.' },
        { kind: 'p', html: 'Con menores de edad cuidamos el uso de la inteligencia artificial: algunas herramientas tienen una edad mínima y otras piden permiso de los padres. En clase solo usamos las que corresponden a cada edad, para pensar y revisar, nunca para producir tareas que el alumno no pueda explicar.' }
      ]
    },
    {
      id: 'hora-peru',
      eyebrow: 'Horario',
      h2: '¿Qué hora será para el mentor cuando su hijo se conecte desde Carabayllo?',
      lede: 'Diez horas y media más tarde, en enero igual que en agosto: el desfase con la India no se mueve en ninguna estación.',
      body: [
        { kind: 'p', html: 'Lima marca UTC-5 todo el año (el país dejó el horario de verano en 1994) y la India, UTC+5:30. Así, si su hijo entra a clase a las 3:30 de la tarde en Carabayllo, para el mentor son las 2:00 de la madrugada siguiente; si entra a las 9:30 de la mañana, en la India son las 8:00 de la noche del mismo día. Tómelos como práctica de conversión; la hora real la decide su familia.' },
        { kind: 'p', html: 'Usted no tiene que calcular nada: el formulario de la clase gratis muestra los horarios en hora de Perú. Las familias eligen según el turno del colegio y su propio trabajo.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Avance',
    h2: '¿Cómo saber cuánto ha avanzado su hijo?',
    lede: 'Cinco etapas propias que el mentor usa para contarle a la familia en qué punto está el niño.',
    table: { caption: 'Cinco etapas de avance en programación (nuestras)', head: ['Etapa', 'Qué logra el niño', 'Qué le muestra a usted'], rows: [
      ['1. Sigue pasos', 'Ordena bloques para cumplir una meta', 'Una animación que funciona'],
      ['2. Usa palabras', 'Nombra en inglés lo que hace cada bloque', 'Le dice qué significa cada orden'],
      ['3. Compara bien', 'Pone dos cosas en la misma forma antes de compararlas', 'Le explica el truco de los anagramas'],
      ['4. Encuentra errores', 'Lee su código y halla el fallo', 'Le cuenta qué arregló'],
      ['5. Crea', 'Termina un proyecto propio y lo presenta en inglés', 'Se lo presenta a la familia']
    ] },
    left: { h3: 'Para madres y padres', ps: [
      'Si su hijo puede explicarle lo que hizo, aunque mezcle castellano e inglés, va muy bien.',
      'Las semanas lentas existen. Casi siempre preceden a un salto.'
    ] },
    right: { h3: 'Para los chicos', ps: [
      'Antes de ejecutar, diga qué espera ver.',
      'Si dos cosas "parecen" iguales, compruébelo de verdad.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: '¿Qué otros cursos hay para chicos de Carabayllo?',
    lede: 'Nueve más, todos con un mentor en vivo que enseña en inglés, en grupo o de manera individual.',
    bands: [
      { num: 'I', h3: 'Para los pequeños', sub: 'De 6 a 9 años', courses: [
        { code: 'PRCA / PEQ / 01', slug: 'kids-coding-blocks-masterclass', title: 'Bloques y primeras apps', blurb: 'Animaciones, juegos y una app hecha con bloques.' },
        { code: 'PRCA / PEQ / 02', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Lógica para pequeños', blurb: 'Ordenar, comparar y descubrir patrones.' },
        { code: 'PRCA / PEQ / 03', slug: 'mental-maths-mastery-kids', title: 'Cálculo con sentido', blurb: 'Números en la cabeza, entendiendo cada paso.' }
      ] },
      { num: 'II', h3: 'Construir', sub: 'De 8 a 12 años', courses: [
        { code: 'PRCA / CONS / 01', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox con código', blurb: 'Niveles propios con reglas escritas en Luau.' },
        { code: 'PRCA / CONS / 02', slug: 'kids-ai-web-development-course', title: 'Primera página web', blurb: 'HTML y CSS para mostrar algo propio en internet.' },
        { code: 'PRCA / CONS / 03', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Juegos con ayuda de IA', blurb: 'Crear con IA y revisar cada sugerencia.' }
      ] },
      { num: 'III', h3: 'Secundaria', sub: 'De 13 a 18 años', courses: [
        { code: 'PRCA / SEC / 01', slug: 'python-complete-masterclass-teens', title: 'Python avanzado', blurb: 'Del script corto al programa que guarda y lee información.' },
        { code: 'PRCA / SEC / 02', slug: 'full-stack-web-development-teens-masterclass', title: 'Web completa', blurb: 'Frontend y backend con React y Node.' },
        { code: 'PRCA / SEC / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algoritmos y lógica', blurb: 'Estructuras de datos y resolución de problemas.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Qué ritmo tienen las clases a lo largo del año?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Primera hora', l: 'Para chicos que estudian en el turno de la tarde.' },
      { time: 'Tarde', l: 'Cuando vuelven del colegio y ya almorzaron.' },
      { time: 'Fines de semana', l: 'Si entre semana el horario está lleno.' }
    ],
    cells: [
      { h3: 'Un mentor para el curso', p: 'La misma persona durante todo el recorrido.' },
      { h3: 'El niño programa', p: 'El mentor pregunta y orienta; no escribe por él.' },
      { h3: 'Ejercicio semanal', p: 'Una tarea breve para pensar, no para copiar.' },
      { h3: 'Informe corto', p: 'Lo practicado y lo siguiente, por mensaje.' },
      { h3: 'Mensualidad', p: 'Sin contratos largos; se puede pausar.' },
      { h3: 'En aula o a solas', p: 'Quince a veinte niños de edad parecida, o clase privada.' }
    ]
  },

  projectsH2: 'Proyectos de alumnos con más camino',
  projectsLede: 'Un vistazo a lo que construyen quienes siguen estudiando; la galería completa vive en <a class="ag-inline-link" href="/student-labs">Student labs</a>, escrita en inglés.',
  reviewsLede: 'Reseñas de Google escritas por familias y alumnos de varios países, conservadas en inglés.',

  fees: {
    h2: '¿Cuánto cuesta para una familia de Carabayllo?',
    lede: 'Abajo están los planes, con su mensualidad en dólares de Estados Unidos. Se abonan con tarjeta; al convertir, su banco aplica el tipo de cambio de la fecha, y por eso el cargo puede no coincidir al céntimo.',
    free: ['Una clase de prueba completa', 'Sugerencia del curso inicial', 'Sin tarjeta'],
    group: ['Quince a veinte niños de edad similar', 'El mismo mentor del principio al final', 'Dos clases en vivo semanales', 'Pago mes a mes'],
    one: ['Solo su hijo con el mentor', 'Contenidos a su medida', 'Horario que elige la familia']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Programación para niños en Carabayllo: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No, y lo decimos con orgullo: el idioma de cada sesión es el inglés. Las familias de Carabayllo que nos escogen valoran justamente eso, que el chico programe y converse en inglés dentro de la misma hora, con un mentor que va lento y se adapta. Lima ya tiene un inglés de nivel alto en el EF EPI 2025 (555 puntos), así que es una habilidad que su hijo usará.' },
      { q: '¿Dónde quedan sus aulas?', a: 'En la pantalla de su casa. No contamos con sedes físicas en el país; el mentor se une por videollamada desde la India.' },
      { q: '¿Cuántos niños viven en Carabayllo?', a: 'El último censo nacional, de 2025, contó 430,806 habitantes en el distrito; de los censados, 43,563 tenían entre 6 y 11 años y 44,343, entre 12 y 17.' },
      { q: '¿Un niño de 1° de primaria ya puede?', a: 'Sí. A los 6 años se programa arrastrando bloques y mirando imágenes. El paso a escribir Python llega por lo general en 4° o 5° grado.' },
      { q: '¿Y si en casa nadie habla inglés?', a: 'No es un requisito. Lo que el niño necesita lo recibe en la clase: frases breves, palabras clave escritas en pantalla y un mentor que repite sin apuro. Las familias suelen notar el cambio al mes.' },
      { q: '¿A qué hora son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Para hacerse una idea: a las 9:30 a. m. en Carabayllo el mentor está en sus 8:00 p. m.' },
      { q: '¿Qué aprende mi hijo además de programar?', a: 'Inglés hablado, porque toda la clase es en ese idioma, y el hábito de predecir y comprobar antes de dar algo por bueno. En el ejemplo de esta página, por ejemplo, aprende seis palabras nuevas mientras escribe una función.' },
      { q: '¿Trabajan con la Municipalidad de Carabayllo?', a: 'No. Modern Age Coders es privada e independiente: ni la municipalidad, ni su biblioteca, ni colegios o universidades tienen parte en nuestras clases. Las notas municipales de gob.pe aparecen aquí como dato público.' },
      { q: '¿Cuál es la forma de pago?', a: 'Tarjeta, con un cobro mensual expresado en dólares de Estados Unidos que el banco traduce a su moneda. Probar la primera clase no cuesta ni exige registrar la tarjeta.' },
      { q: '¿Entregan certificado?', a: 'Al acabar cada curso, su hijo recibe una constancia de la academia. No es un papel del MINEDU y el colegio no la cuenta como calificación.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más para leer',
    h2: 'Otras páginas que le pueden servir',
    lede: 'Ojo: los títulos en inglés indican textos escritos en inglés.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Punto de partida para todo lo que dictamos en el país.' },
      { href: '/ai-tools-age-guide', label: 'AI tool age guide', p: 'Reglas de edad de los asistentes de IA más populares.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Así es por dentro una clase en vivo.' },
      { href: '/student-labs', label: 'Student labs', p: 'Proyectos de nuestros alumnos.' },
      { href: '/courses', label: 'All courses', p: 'Todos los cursos, de primaria a adultos.' }
    ]
  },

  start: {
    h2: 'Pida la clase gratis para su hijo en Carabayllo',
    lede: 'Indique la fecha y la hora peruana que le acomodan. El mentor charlará con su hijo en un inglés fácil, le propondrá un reto corto y le dirá a usted por qué curso y en qué formato conviene empezar.',
    readFirst: 'Lecturas previas, si las desea: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> explica nuestro método y <a class="ag-inline-link" href="/courses">All courses</a> muestra los cursos; ambas están en inglés.',
    note: 'Las clases son en vivo, por internet y en inglés, y los mentores enseñan desde la India. Por WhatsApp le respondemos en castellano.',
    formNote: 'Gratis, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Cursos de inicio', links: [
        { href: '/courses/scratch-programming-complete-course', label: 'Scratch' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Python con palabras y juegos' },
        { href: '/courses/minecraft-coding-for-kids-course', label: 'Minecraft' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Para la familia', links: [
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/ai-tools-age-guide', label: 'IA según la edad' },
        { href: '/student-labs', label: 'Proyectos' },
        { href: '/coding-and-ai-classes-in-peru', label: 'Perú' }
      ] }
    ],
    bottomRight: 'Ordene las letras antes de comparar'
  },

  personalityCss: `
.ag-root.ag-prca .ag-hero h1 { max-width: 19ch; letter-spacing: -0.011em; }
.ag-root.ag-prca .ag-capsule { border-left-width: 5px; border-radius: 2px; }
.ag-root.ag-prca .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-prca .ag-table caption { font-style: italic; }
.ag-root.ag-prca .ag-steps li { line-height: 1.62; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Lima Metropolitana workbook cuadros 1, 2 and 3; national workbook cuadro 1), INEI TIC II trimestre 2026, MINEDU Edades normativas, Municipalidad Distrital de Carabayllo notes on gob.pe (13 July 2023 reading project, 31 May 2024 vocational day), EF EPI 2025, tzdata. Read 10 November 2026. Example code, class types and stages are our own.',
    localProject: 'An anagram checker in Python for an 11-year-old: sorted(a.lower()) == sorted(b.lower()) prints listen + silent True, Night + thing True, apple + paper False, read + dare True, and Signature of read: a, d, e, r. Run with python3 -I. Lesson family: sorted letters as a signature, lower() first, and a pair that only looks close.',
    requiredMentions: ['apple + paper', 'Signature of read', 'I read in silence at night', 'A más lectura, más aventuras', '43,563 (10,5 %)', '44,343 chicos de 12 a 17 años', 'Niños censados en Carabayllo', 'Ordene las letras antes de comparar', 'Megatov: Descubre tu Vocación'],
    sources: [
      { claim: 'Carabayllo population 430,806 (censada 416,086, omitida 14,720); age groups vs Lima Metropolitana; single ages 6 to 12.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/27/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'National district ranking (1,893 districts).', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Reading project "A más lectura, más aventuras" for 1° and 3° de primaria (13 July 2023).', url: 'https://www.gob.pe/institucion/municarabayllo/noticias/1299815-estudiantes-de-la-i-e-n-3058-virgen-de-fatima-participan-en-proyecto-educativo-de-comprension-lectora' },
      { claim: 'Vocational day "1.er Megatov: Descubre tu Vocación" in front of the municipal library (31 May 2024).', url: 'https://www.gob.pe/institucion/municarabayllo/noticias/1347381-1er-megatov-descubre-tu-vocacion' },
      { claim: 'Internet use 92.4%, internet 84.7% and computer 53.3% in Lima; children 6 to 11 at 68.2%, up 6.7 points (Peru), II trimestre 2026.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'Normative age per grade at 31 March.', url: 'https://cdn.www.gob.pe/uploads/document/file/2818106/Edades_normativas.pdf?v=1644437764' },
      { claim: 'EF EPI 2025: Lima 555, high band; Peru reading 540, speaking 480.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 with no DST since 1994; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Spanish-language teaching: refused; every class is live, online and in English only.',
      'Any link with the Municipalidad de Carabayllo, its library, the school in the reading project or the university at the vocational day: none; names left out.',
      'A cause for Carabayllo\'s younger age profile: refused; the census shows the shares, not the reasons.',
      'Travel times out of the district: refused; no primary source.',
      'Income or class statements about the district: refused; only census ages and counts.',
      'Soles prices, competitor prices or any typed fee: refused; fees render from the template in USD.'
    ]
  }
};
