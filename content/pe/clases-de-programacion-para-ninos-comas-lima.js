// SHIP: district | Comas, Lima Norte: live code classes at home beside its neighbours' school-age counts | binary numbers: repeated division by 2, bin() as a check, fingers to 31
'use strict';
// Clases de programación para niños en Comas (ag- Spanish district door, Peru cluster row PE200, P6, hubGroup lima).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md
// (rule "City and district pages").
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only; no soles, no typed figure.
// Angle: the parent in Comas looking for "clases de programación para niños Comas" at any point of the school year. Spine:
// Comas is the fourth most populous district in Peru (INEI Censos 2025); its school-age children set beside the districts
// around it (one quotable table, no sums); the municipality's own note on school entrances (gob.pe, March 2026); a first
// lesson on how computers count (binary); what each primaria grade can program; why a class at home instead of a 
// along Túpac Amaru or Universitaria (no traffic figures); INEI household computer data; adolescentes; Peru to India clock.
// No income or class assumptions about the district.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/clases-de-programacion-para-ninos-comas-lima/,
// fetched 10 November 2026 with curl -sL -A "Mozilla/5.0" or copied from saved raw files; quotes grepped in the raw text):
//  INEI, Censos Nacionales 2025, Lima Metropolitana workbook (inei-censos2025-ind_27-lima-metropolitana.xlsx), CUADRO N°1:
//    "DISTRITO COMAS | 578818 | 284376 | 294442 | 553297 | 271251 | 282046 | 25521"; CUADRO N°3: "DISTRITO COMAS | 553297 |
//    32808 | 48729 | 51347 | 101436 | ...", "DISTRITO CARABAYLLO | 416086 | 30391 | 43563 | 44343", "DISTRITO PUENTE PIEDRA |
//    378129 | 28425 | 39067 | 39508", "DISTRITO LOS OLIVOS | 343232 | 17500 | 27111 | 29304", "DISTRITO INDEPENDENCIA |
//    214620 | 12228 | 18582 | 20034", "DISTRITO SAN JUAN DE LURIGANCHO | 1124772 | 72722 | 107050 | 110134"; CUADRO N°2
//    single ages for Comas: 6 años 6869, 7 años 7397, 8 años 8259, 9 años 8505, 10 años 8820, 11 años 8879, 12 años 8827.
//  INEI national workbook (ind_00) CUADRO N° 1: 1,893 district rows; our sort puts Comas (578818) fourth, after San Juan de
//    Lurigancho, San Martín de Porres and Ate.
//  Municipalidad Distrital de Comas on gob.pe, noticias/1361454 (4 March 2026): "viene ejecutando el Plan “Zona Escolar Vial
//    Segura”"; "instalación y reforzamiento de señalización horizontal y vertical, colocación de reductores de velocidad";
//    "habilitación de espacios peatonales seguros"; "durante todo el mes de marzo se continuará". Names of officials and of
//    the schools in the note left out on purpose.
//  INEI, TIC en los Hogares, II Trimestre 2026 (inei_tic_iit2026.txt): "Este porcentaje alcanzó el 53,3% en Lima
//    Metropolitana" (computer); "el 74,3% cuenta con una sola unidad" (national, households with a computer); "la mayor
//    incidencia se observó en Lima Metropolitana con 98,1%" (mobile phone); "el 84,7% de los hogares disponía del servicio".
//  MINEDU Edades normativas (as in the pilot): edad normativa al 31 de marzo.
//  EF EPI 2025 Peru page (MARKET 1.3): Lima 555, high band from 550.
//  Time (timezone.tsv): America/Lima UTC-5 all year, no DST since 1994; Asia/Kolkata UTC+5:30; India 10 h 30 min ahead.
// Our own calculations (python3 -I): 578818 / 10141775 = 5.7 %; 48729 / 818096 = 6.0 % of Lima's censused 6 to 11;
//    48729 / 553297 = 8.8 %; 51347 / 553297 = 9.3 %; 25521 / 578818 = 4.4 % omitted.
// Our own example (comas_bin.py in the src-pages folder), run with python3 -I, exact output:
//    5 -> 101 | Python says: 101 / 12 -> 1100 | Python says: 1100 / 31 -> 11111 | Python says: 11111 /
//    One hand of fingers counts up to 31
// Neighbouring districts named in plain text only (Carabayllo, Puente Piedra, Los Olivos, Independencia, San Juan de Lurigancho).
// Lesson family: base 2; a while loop of n % 2 and n // 2 that builds the bits right to left, bin() as an independent check.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  'def to_binary(n):',
  '    if n == 0:',
  "        return '0'",
  "    bits = ''",
  '    while n > 0:',
  '        bits = str(n % 2) + bits',
  '        n = n // 2',
  '    return bits',
  '',
  'for n in [5, 12, 31]:',
  "    print(n, '->', to_binary(n), '| Python says:', bin(n)[2:])",
  "print('One hand of fingers counts up to', int('11111', 2))"
].join('\n');

const OUT = [
  '5 -> 101 | Python says: 101',
  'Python says: 1100',
  '31 -> 11111 | Python says: 11111',
  'One hand of fingers counts up to 31'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'lima', label: 'Programación para niños en Comas' },
  slug: 'clases-de-programacion-para-ninos-comas-lima',
  code: 'prco',
  accent: '#035E23',
  accentRationale: 'Comas: a forest green #035E23, a touch brighter than the San Martín de Porres page and greener than the Ate teal, so the Lima Norte doors stay apart; allocated in alloc.tsv (contrast 6.48 on the paper #FBF8F2) and checked above 4.5 on every paper tint by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Clases de programación para niños en Comas',
  title: 'Clases de programación para niños en Comas, Lima',
  description: 'Clases de programación para niños de 6 a 12 años en Comas, Lima Norte: en vivo, en línea y en inglés, sin traslados, en grupo o individuales y a su hora.',
  ogDescription: 'Programación para niños de Comas desde casa: cuántos escolares cuenta el censo 2025 en el distrito y sus vecinos, qué programar en cada grado y un reto con números binarios.',
  twitterDescription: 'Clases de programación en vivo y en inglés para niños de Comas, desde casa y en el horario de su familia.',
  pageName: 'Clases de programación para niños en Comas',
  webPageDescription: 'Guía para familias de Comas que buscan clases de programación para niños durante el año escolar: escolares del distrito y de los distritos vecinos según los Censos Nacionales 2025 del INEI, el plan municipal para los entornos de los colegios, los datos del INEI sobre computadoras en los hogares de Lima y un ejercicio de Python con números binarios escrito por nosotros.',
  courseDescription: 'Clases en vivo y en línea de programación para niños de 6 a 12 años de Comas, con cursos propios para adolescentes de secundaria, dictadas solo en inglés: Scratch, Python, Roblox, web y proyectos de IA, en clase grupal o individual y a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Programación para niños, Comas',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#comas', label: 'Comas y vecinos' },
    { href: '#binario', label: 'Ceros y unos' },
    { href: '#grados', label: 'Por grado' },
    { href: '#distancia', label: 'Desde casa' },
    { href: '#horas', label: 'Horas' }
  ],
  eyebrow: 'Lima Norte &middot; Comas &middot; Primaria y secundaria',
  h1: 'Clases de programación para niños en Comas',
  lede: 'Comas es el cuarto distrito más poblado del Perú y, junto con sus vecinos de Lima Norte, reúne a una enorme cantidad de chicos en edad escolar. Si usted quiere que su hijo aprenda a programar con un profesor de verdad, en vivo, sin que la familia tenga que organizar traslados, aquí verá qué dice el censo, qué conviene aprender en cada grado y cómo es una clase dictada en inglés.',
  secondaryCta: { href: '#binario', label: 'Ver el reto de los números binarios' },
  wa: 'Hola Modern Age Coders, somos de Comas y queremos que nuestro hijo o hija aprenda a programar. ¿Podemos reservar la clase gratis?',
  heroNote: 'En vivo desde 2020 &middot; más de 10,000 estudiantes en varios países &middot; el mismo mentor durante el curso, siempre en inglés',
  spec: [
    ['Alumnos', 'Primaria (6 a 12 años) y secundaria'],
    ['Modalidad', 'En línea, desde cualquier zona de Comas'],
    ['Herramientas', 'Scratch, Python, Roblox Studio, HTML'],
    ['Grupo', 'Quince a veinte niños, o clase individual'],
    ['Lengua de la clase', 'Inglés pausado, con todo en pantalla'],
    ['Para probar', 'Primera clase gratis, sin tarjeta']
  ],
  capsuleQ: 'La respuesta corta',
  capsule: 'Sí: un niño de Comas puede aprender a programar sin salir de su casa. Modern Age Coders da clases en vivo, en línea y en inglés para chicos de 6 a 12 años y cursos propios para secundaria. El mentor enseña desde la India por videollamada, ve la pantalla del alumno, le habla con claridad y sigue su ritmo. Se empieza con Scratch y se avanza a Python, Roblox, páginas web y proyectos de IA. Usted elige grupo o clase individual, el día y la hora, y la primera clase no cuesta nada.',

  picks: {
    eyebrow: 'Primeros cursos',
    h2: '¿Qué curso le recomiendan a un niño de Comas que empieza?',
    lede: 'Tres opciones según la edad del niño y lo que más le llama la atención.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'PRCO / 01', title: 'Programar con bloques', alt: 'Imagen del curso de programación con bloques para niños', note: 'Para 1° a 3° de primaria. Bloques que se arrastran y encajan para contar historias, hacer juegos y probar las primeras ideas de inteligencia artificial.' },
      { course: 'python-ai-kids-masterclass', code: 'PRCO / 02', title: 'Python para primaria', alt: 'Imagen del curso de Python e IA para niños', note: 'Desde 4° de primaria. Instrucciones escritas, figuras en pantalla, juegos de adivinanzas y retos de lógica como el de los números binarios.' },
      { course: 'kids-ai-web-development-course', code: 'PRCO / 03', title: 'Páginas web hechas por niños', alt: 'Imagen del curso de desarrollo web para niños', note: 'Para chicos de 9 a 12 años que quieren algo que se pueda compartir: una página propia con textos, imágenes y colores elegidos por ellos.' }
    ]
  },

  sections: [
    {
      id: 'comas',
      eyebrow: 'Comas y sus vecinos',
      h2: '¿Cuántos chicos en edad escolar tiene Comas?',
      lede: 'El censo de 2025 encontró en Comas 48,729 niños de 6 a 11 años y 51,347 adolescentes de 12 a 17 entre la población censada. El distrito suma 578,818 habitantes contando a la población omitida, el cuarto total más alto del país.',
      body: [
        { kind: 'table', numCols: [1, 2, 3], caption: 'Población censada en edad escolar: Comas y los distritos que lo rodean (2025)', head: ['Distrito', 'Censados en total', 'De 6 a 11 años', 'De 12 a 17 años'], rows: [
          ['Comas', '553,297', '48,729', '51,347'],
          ['Carabayllo', '416,086', '43,563', '44,343'],
          ['Puente Piedra', '378,129', '39,067', '39,508'],
          ['Los Olivos', '343,232', '27,111', '29,304'],
          ['Independencia', '214,620', '18,582', '20,034'],
          ['San Juan de Lurigancho', '1,124,772', '107,050', '110,134']
        ] },
        { kind: 'source', html: 'Fuente: cuadro 3 del libro de indicadores demográficos de Lima Metropolitana publicado por el INEI con los resultados definitivos de los Censos Nacionales 2025 (versión con límites al 15 de julio de 2026), que descargamos el 10 de noviembre de 2026. Son cifras de población censada; el INEI no reparte por edad a la población omitida. Cada fila es un distrito por separado.' },
        { kind: 'two', mt: true,
          leftH3: 'Cuarto entre todos los distritos',
          left: [
            'En el cuadro nacional, con 1,893 distritos, solo San Juan de Lurigancho, San Martín de Porres y Ate superan a Comas en habitantes (orden nuestro sobre las cifras del INEI).',
            'Según nuestro cálculo, Comas reúne el 5,7 % de la población de Lima Metropolitana y el 6,0 % de sus niños censados de 6 a 11 años.'
          ],
          rightH3: 'Lo que la tabla no mide',
          right: [
            'Dentro de Comas, el tramo de 6 a 11 años es el 8,8 % de los censados y el de 12 a 17 años, el 9,3 % (cálculo nuestro). Son proporciones de edad, no un retrato de las familias.',
            'No sacamos de estas cifras ninguna conclusión sobre ingresos, barrios o colegios. Lo que nos importa de cada niño lo vemos en la primera clase.'
          ] },
        { kind: 'p', mt: true, html: 'La tabla sirve para dimensionar algo que las familias de Lima Norte ya intuyen: en pocos kilómetros a la redonda hay decenas de miles de niños de primaria. Cualquier taller presencial de la zona tiene cupos limitados; una clase en línea no compite por un aula ni por un horario de local.' }
      ]
    },
    {
      id: 'colegios',
      eyebrow: 'El entorno escolar',
      h2: '¿Qué está haciendo la Municipalidad de Comas en los alrededores de los colegios?',
      lede: 'Según su propia nota en gob.pe del 4 de marzo de 2026, la Municipalidad de Comas ejecuta el Plan "Zona Escolar Vial Segura", con trabajos en los exteriores de varios colegios del distrito al comienzo del año escolar.',
      body: [
        { kind: 'p', html: 'La nota describe señalización pintada en la pista y paneles verticales, reductores de velocidad, dispositivos de control de tránsito y espacios peatonales en las entradas, con la idea de ordenar el espacio público frente a los colegios. La municipalidad anunció que el plan seguiría durante todo marzo de 2026 en más instituciones educativas.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'El colegio, en persona', p: 'La vida escolar de un niño de Comas pasa por la calle: la entrada, la salida, la espera de los padres. Que el municipio cuide ese espacio dice mucho de lo que pesa la escuela en el distrito.' },
          { h3: 'La programación, en casa', p: 'Nuestras clases suceden en otro momento del día y en otro lugar: frente a la computadora familiar, sin entrada ni salida que coordinar.' },
          { h3: 'Ninguna relación', p: 'Modern Age Coders no tiene vínculo con la Municipalidad de Comas ni con los colegios del plan. Resumimos su nota porque es información pública útil para las familias.' }
        ] },
        { kind: 'p', mt: true, html: 'No mencionamos los nombres de los colegios ni de las autoridades que aparecen en la nota: no son fuente de nuestros alumnos ni queremos sugerir ninguna relación con ellos.' }
      ]
    },
    {
      id: 'binario',
      tint: 'tint',
      eyebrow: 'Una clase por dentro',
      h2: '¿Cómo cuenta una computadora con solo ceros y unos?',
      lede: 'Con el sistema binario, y un niño de 10 u 11 años puede programarlo él mismo. El ejercicio es nuestro: una función que convierte un número común en ceros y unos dividiendo entre 2 una y otra vez, y que se compara con la respuesta que ya trae Python.',
      body: [
        { kind: 'code', label: 'De número a binario', lang: 'Python', code: PY, note: 'Antes de ejecutarlo, el mentor dice en inglés: "Five is one hundred and one in binary. Can you guess twelve?" El niño anota su apuesta en una hoja.' },
        { kind: 'code', label: 'Lo que imprime el programa', lang: 'Salida', code: OUT, note: 'Corrimos el archivo con Python 3 en nuestra máquina y copiamos estas cuatro líneas sin cambios. Las dos columnas coinciden: la función del niño y la de Python dicen lo mismo.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Dividir y anotar el resto.</strong> Para 12: 12 entre 2 da 6 y sobra 0; 6 entre 2 da 3 y sobra 0; 3 entre 2 da 1 y sobra 1; 1 entre 2 da 0 y sobra 1. Leídos de abajo hacia arriba, los restos forman <code>1100</code>.',
          '<strong>Por qué se pega a la izquierda.</strong> La línea <code>bits = str(n % 2) + bits</code> coloca cada resto delante de los anteriores, porque el último resto es la cifra más grande. Si se pegara a la derecha, el número saldría al revés.',
          '<strong>Comprobar con otra fuente.</strong> <code>bin(12)</code> devuelve <code>0b1100</code>; con <code>[2:]</code> se quitan los dos primeros caracteres. Que dos caminos distintos coincidan es una buena forma de confiar en un resultado.',
          '<strong>Contar con los dedos.</strong> Si cada dedo levantado es un 1, una mano entera es <code>11111</code>, que vale 31. Con una sola mano se cuenta de 0 a 31; el niño lo prueba y se lo enseña a su familia.',
          '<strong>Decirlo en inglés.</strong> El mentor pide la regla en una frase: "Divide by two, keep the remainder, read it from the bottom." Al principio sale entrecortada; a la tercera vez, completa.'
        ] },
        { kind: 'p', mt: true, html: 'Lo que queda después de esta clase no es un truco de conversión. Es la idea de que una computadora no sabe nada que no se le haya dicho paso por paso, y que un resultado se vuelve confiable cuando se comprueba por un segundo camino. Esa costumbre de verificar es la que le permite a un chico usar internet o la IA sin tragarse cualquier respuesta.' }
      ]
    },
    {
      id: 'grados',
      eyebrow: 'Grado por grado',
      h2: '¿Qué puede programar un niño de Comas en cada grado de primaria?',
      lede: 'Algo distinto en cada año. A los 6 años se ordenan bloques; a los 12 se planifica un proyecto completo. El censo dice cuántos niños de Comas hay en cada edad, y la tabla le muestra el tipo de reto que suele encajar.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Comas: niños censados por edad simple y un reto típico para cada una', head: ['Edad cumplida', 'Niños en Comas', 'Grado que suele cursar', 'Un reto de su nivel (nuestro)'], rows: [
          ['6', '6,869', '1° de primaria', 'Llevar un personaje hasta una estrella con flechas'],
          ['7', '7,397', '2° de primaria', 'Hacer que un gato baile repitiendo pasos'],
          ['8', '8,259', '3° de primaria', 'Un juego de atrapar frutas con puntaje'],
          ['9', '8,505', '4° de primaria', 'Un saludo en Python que pregunta el nombre'],
          ['10', '8,820', '5° de primaria', 'Una tabla de multiplicar que se escribe sola'],
          ['11', '8,879', '6° de primaria', 'El conversor a binario de esta página'],
          ['12', '8,827', '1° de secundaria', 'Un quiz propio con preguntas y puntaje']
        ] },
        { kind: 'source', html: 'Fuentes: INEI, cuadro 2 de los Censos Nacionales 2025 para Lima Metropolitana, población censada por edades simples; MINEDU, documento "Edades normativas", con la edad de ingreso a cada grado medida al 31 de marzo. El censo anota la edad que la persona tenía cuando fue visitada, por eso el grado es orientativo. Los retos son nuestros.' },
        { kind: 'two', mt: true,
          leftH3: 'A los 8 años, el salto',
          left: [
            'Muchos padres preguntan si 8 años es muy pronto. No lo es: a esa edad un niño ya puede crear un juego completo en Scratch, con variables y reglas. Nuestra guía de <a class="ag-inline-link" href="/programacion-para-ninos-de-8-anos">programación para niños de 8 años</a> lo explica con detalle.',
            'Lo que todavía cuesta a esa edad es escribir código largo sin bloques, así que no lo apuramos.'
          ],
          rightH3: 'A los 11 o 12, la autonomía',
          right: [
            'En 6° de primaria y 1° de secundaria el niño ya puede proponer su propio proyecto, dividirlo en partes y avanzar con menos ayuda. El mentor pasa de guiar cada paso a hacer preguntas.',
            'Es también la edad en que conviene empezar a leer los mensajes de error en inglés, que son una pequeña clase de idioma en sí mismos.'
          ] }
      ]
    },
    {
      id: 'distancia',
      eyebrow: 'Sin traslados',
      h2: '¿Por qué tomar la clase en casa y no en una academia fuera de Comas?',
      lede: 'Porque el tiempo de un niño de primaria rinde más programando que viajando. Desde Comas, una academia en otro distrito significa ir y volver con él varias veces por semana; en línea, la clase empieza cuando enciende la computadora.',
      body: [
        { kind: 'p', html: 'Comas limita con Carabayllo, Puente Piedra, Los Olivos, Independencia y San Juan de Lurigancho, y buena parte de sus vecinos se mueve por las grandes avenidas de Lima Norte, como la Universitaria. No vamos a inventar minutos de recorrido: ese cálculo le pertenece a usted, que hace el recorrido. Nuestro argumento es otro: con la clase en casa, ningún adulto tiene que dejar el trabajo para llevar y traer al niño.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'La computadora y el teléfono en los hogares, según el INEI (segundo trimestre de 2026)', head: ['Qué mide el INEI', 'Cifra', 'Dónde'], rows: [
          ['Hogares que tienen al menos una computadora', '53,3 %', 'Lima Metropolitana'],
          ['Hogares con computadora que tienen solo una', '74,3 %', 'Perú'],
          ['Hogares con teléfono celular', '98,1 %', 'Lima Metropolitana'],
          ['Hogares con internet contratado', '84,7 %', 'Lima Metropolitana']
        ] },
        { kind: 'source', html: 'Fuente: INEI, boletín de tecnologías de información y comunicación en los hogares, II trimestre de 2026, con datos preliminares de la ENAHO; lectura nuestra del 10 de noviembre de 2026. La cifra de hogares con una sola computadora es nacional. El INEI cuenta al Callao dentro de Lima Metropolitana y no publica datos por distrito.' },
        { kind: 'two', mt: true,
          leftH3: 'Una computadora para todos',
          left: [
            'Tres de cada cuatro hogares del país con computadora tienen solo una, según el INEI. Es normal: la clase de programación se agenda en el momento del día en que esa máquina está libre.',
            'Si dos hermanos quieren aprender, cada uno puede tener su propio horario sin necesitar otro equipo.'
          ],
          rightH3: 'El celular, para otra cosa',
          right: [
            'Casi todos los hogares de Lima tienen celular, pero escribir código en una pantalla táctil frustra a un niño. Para la clase hace falta teclado, cámara, micrófono y audífonos.',
            'El celular sirve para que usted reciba por WhatsApp los avisos y el resumen de cada clase.'
          ] },
        { kind: 'p', mt: true, html: 'Si vive cerca del límite con San Juan de Lurigancho o con Los Olivos, quizás le interesen también nuestras guías de verano para <a class="ag-inline-link" href="/vacaciones-utiles-de-programacion-san-juan-de-lurigancho-lima">San Juan de Lurigancho</a> y <a class="ag-inline-link" href="/vacaciones-utiles-de-programacion-los-olivos-lima">Los Olivos</a>; las clases son las mismas y siguen durante el año escolar.' }
      ]
    },
    {
      id: 'ingles',
      eyebrow: 'Idioma',
      h2: '¿Sirve una clase en inglés si en casa no se habla inglés?',
      lede: 'Sí, y muchas veces es justo lo que la familia busca. El niño no necesita llegar hablando: el mentor muestra, señala, repite y espera, hasta que las palabras de la clase se vuelven conocidas.',
      body: [
        { kind: 'p', html: 'En programación el inglés no se aprende de memoria, se usa. <code>while</code> significa "mientras" y el niño lo entiende porque ve su programa repetirse mientras se cumple algo. <code>print</code> hace aparecer un texto. Cada palabra tiene un efecto visible, y eso hace que se quede. Al principio, algunos niños responden en castellano; el mentor recoge la idea y le devuelve la frase en inglés, sin corregirlo frente a los demás.' },
        { kind: 'p', html: 'En el índice EF EPI 2025 de EF Education First, la ciudad de Lima figura con 555 puntos, por encima de la línea de 550 que EF usa para el nivel alto; el país entero queda en nivel moderado. El índice se calcula con adultos que dan la prueba de EF, no con escolares, pero muestra que el inglés hablado ya es una herramienta común en la capital. Que su hijo lo practique cada semana, haciendo algo que le gusta, es ganancia doble.' }
      ]
    },
    {
      id: 'secundaria',
      eyebrow: 'Secundaria',
      h2: '¿Tienen cursos para adolescentes de Comas?',
      lede: 'Sí. Los 51,347 chicos y chicas de 12 a 17 años que el censo registró en Comas están en edad de secundaria, y para ellos hay cursos con más exigencia y proyectos más grandes.',
      body: [
        { kind: 'p', html: 'Un adolescente puede empezar directamente con Python escrito, sin pasar por bloques, o elegir desarrollo web con JavaScript, Java, ciencia de datos o el diseño de aplicaciones. Muchos llegan con una idea propia, un juego o una página para su club o su promoción, y el curso se organiza alrededor de ella. Para ver los caminos de secundaria con calma, la página de <a class="ag-inline-link" href="/clases-de-programacion-para-adolescentes-peru">clases de programación para adolescentes en Perú</a> los ordena por interés.' },
        { kind: 'p', html: 'Con los menores de edad somos cuidadosos con la inteligencia artificial: hay herramientas con edad mínima y otras que piden autorización de los padres antes de los 18. Usamos solo lo que corresponde a cada edad y siempre para entender, nunca para que el alumno presente como suyo algo que no podría explicar.' }
      ]
    },
    {
      id: 'horas',
      eyebrow: 'Horario',
      h2: '¿Cómo se coordina la hora de Comas con la de un mentor en la India?',
      lede: 'Con una suma fija. La India va diez horas y treinta minutos por delante de Perú en todas las estaciones, porque ningún país cambia la hora durante el año.',
      body: [
        { kind: 'p', html: 'Perú usa UTC-5 y no aplica horario de verano desde 1994; la India usa UTC+5:30. Así, una clase a las 10:30 de la mañana en Comas son las 9:00 de la noche para el mentor, el mismo día; y una a las 5:30 de la tarde en Comas son las 4:00 de la madrugada siguiente en la India. Son ejemplos para entender la cuenta, no turnos ya armados.' },
        { kind: 'p', html: 'No tiene que hacer la conversión usted: al reservar la clase de prueba, el formulario le muestra las opciones con la hora de Perú. Las familias suelen elegir según el turno del colegio, por la mañana si el niño estudia en la tarde y por la tarde o la noche si estudia en la mañana.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Avance',
    h2: '¿Cómo saber si su hijo va por buen camino?',
    lede: 'Cinco escalones nuestros para ubicar a cada niño y contarle a la familia dónde está.',
    table: { caption: 'Cinco escalones de aprendizaje en programación (nuestros)', head: ['Escalón', 'Lo que el niño ya hace', 'Cómo se nota en casa'], rows: [
      ['1. Secuencia', 'Ordena pasos para que algo ocurra', 'Le explica el orden de su animación'],
      ['2. Repetición', 'Cambia diez bloques iguales por un bucle', 'Le muestra un programa más corto'],
      ['3. Condición', 'Decide con if y else', 'Su juego reacciona a lo que hace el jugador'],
      ['4. Comprobación', 'Verifica un resultado por otro camino, como bin()', 'Le enseña cómo revisó su respuesta'],
      ['5. Proyecto', 'Planifica y termina algo propio', 'Se lo presenta en inglés']
    ] },
    left: { h3: 'Para la familia', ps: [
      'El salto del escalón 2 al 3 suele ser el más lento. Paciencia: después todo se acelera.',
      'Una buena pregunta para la cena: "¿Qué se rompió hoy en tu programa y cómo lo arreglaste?"'
    ] },
    right: { h3: 'Para el alumno', ps: [
      'Cuando obtenga un resultado, busque otra forma de comprobarlo.',
      'Escriba en un cuaderno las palabras nuevas en inglés que usó en la clase.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más opciones',
    h2: '¿Qué otros cursos hay para niños y adolescentes de Comas?',
    lede: 'Nueve cursos más, todos dictados en vivo y en inglés, en aula o en clase individual.',
    bands: [
      { num: 'I', h3: 'Para los más chicos', sub: 'De 6 a 9 años', courses: [
        { code: 'PRCO / CHICOS / 01', slug: 'scratch-programming-complete-course', title: 'Scratch en tres meses', blurb: 'De la primera animación a un juego terminado.' },
        { code: 'PRCO / CHICOS / 02', slug: 'mental-maths-mastery-kids', title: 'Números en la cabeza', blurb: 'Cálculo mental con comprensión, no con trucos.' },
        { code: 'PRCO / CHICOS / 03', slug: 'block-coding-app-development-masterclass', title: 'Apps con bloques', blurb: 'Una aplicación sencilla para el celular de la familia.' }
      ] },
      { num: 'II', h3: 'Juegos y lógica', sub: 'De 8 a 12 años', courses: [
        { code: 'PRCO / LOGICA / 01', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Programar en Roblox', blurb: 'Reglas, trampas y premios escritos en Luau.' },
        { code: 'PRCO / LOGICA / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Pensamiento computacional', blurb: 'Partir un problema en pasos y probar cada uno.' },
        { code: 'PRCO / LOGICA / 03', slug: 'hackathon-prep-for-kids-coding-innovation-ai-projects-course', title: 'Rumbo a un hackatón', blurb: 'Doce semanas para idear, construir y presentar.' }
      ] },
      { num: 'III', h3: 'Secundaria', sub: 'De 13 a 18 años', courses: [
        { code: 'PRCO / SEC / 01', slug: 'python-complete-masterclass-teens', title: 'Python para secundaria', blurb: 'Del primer programa a proyectos con archivos y datos.' },
        { code: 'PRCO / SEC / 02', slug: 'complete-app-development-masterclass-for-teens', title: 'Apps móviles', blurb: 'Aplicaciones reales con React Native.' },
        { code: 'PRCO / SEC / 03', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ y algoritmos', blurb: 'Fundamentos sólidos y estructuras de datos.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Funcionamiento',
    h2: '¿Cómo son las clases semana a semana?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Mañana', l: 'Para chicos del turno tarde, antes de alistar la mochila.' },
      { time: 'Tarde', l: 'Al volver del colegio, después de comer y descansar.' },
      { time: 'Noche temprana', l: 'Cuando los padres ya están en casa y pueden mirar el final.' }
    ],
    cells: [
      { h3: 'Mismo mentor', p: 'Una sola persona acompaña a su hijo durante todo el curso.' },
      { h3: 'El niño escribe', p: 'Nadie programa por él: el mentor orienta y pregunta.' },
      { h3: 'Reto semanal', p: 'Una tarea corta que se piensa, no se copia.' },
      { h3: 'Mensaje a casa', p: 'Lo que se trabajó y lo que viene, en pocas líneas.' },
      { h3: 'Pago por mes', p: 'Sin matrícula: se puede pausar cuando haga falta.' },
      { h3: 'Aula o individual', p: 'Grupo de quince a veinte de su edad, o clase solo para él.' }
    ]
  },

  projectsH2: 'Lo que llegan a crear nuestros alumnos',
  projectsLede: 'Estos proyectos son de estudiantes que llevan más tiempo con nosotros; muestran adónde lleva la constancia. Hay más en <a class="ag-inline-link" href="/student-labs">Student labs</a>, en inglés.',
  reviewsLede: 'Comentarios de familias y alumnos de varios países en Google, en el inglés original.',

  fees: {
    h2: '¿Cuánto cuestan las clases para una familia de Comas?',
    lede: 'Las cuotas mensuales figuran abajo en dólares estadounidenses y se cargan a una tarjeta. Su banco convierte ese cargo a su moneda con el cambio del día, así que el número de su estado de cuenta puede diferir ligeramente.',
    free: ['Una clase de prueba completa', 'El mentor indica por dónde empezar', 'No se piden datos de tarjeta'],
    group: ['Quince a veinte chicos de edades cercanas', 'Mismo mentor todo el curso', 'Dos clases en vivo por semana', 'Pago mensual, sin permanencia'],
    one: ['Clase solo para su hijo', 'Ritmo y temas a su medida', 'Horario fijado por la familia']
  },

  faq: {
    eyebrow: 'Preguntas',
    h2: 'Programación para niños en Comas: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Toda la clase transcurre en inglés, en vivo y por internet, y muchas familias de Comas nos eligen precisamente por eso: el niño programa y suelta la lengua en otro idioma a la vez. El mentor habla pausado, repite y se adapta a su acento. Según el EF EPI 2025, Lima tiene un inglés de nivel alto, 555 puntos.' },
      { q: '¿Hay que ir a un local en Comas?', a: 'No hay local. Su hijo se conecta desde casa y el mentor lo atiende por videollamada desde la India; no tenemos sedes físicas en el Perú.' },
      { q: '¿Cuántos niños de primaria hay en Comas?', a: 'Según los Censos Nacionales 2025 del INEI, Comas tiene 48,729 niños censados de 6 a 11 años y 51,347 adolescentes de 12 a 17. La población total del distrito es de 578,818 personas.' },
      { q: '¿A qué edad conviene empezar?', a: 'A partir de los 6 años, edad de ingreso a 1° de primaria para el MINEDU. Primero con bloques; entre los 9 y los 10 años, la mayoría ya escribe Python.' },
      { q: '¿Mi hijo tiene que saber inglés?', a: 'No hace falta. El mentor usa frases cortas, escribe lo importante en pantalla y vuelve a explicar las veces necesarias. Tras unas semanas el niño sigue la clase con naturalidad.' },
      { q: '¿A qué hora son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Como la India va diez horas y media adelante, las 10:30 a. m. en Comas son las 9:00 p. m. para el mentor.' },
      { q: '¿Qué aprende un niño en la primera clase?', a: 'Hace un reto corto adecuado a su edad, por ejemplo mover un personaje en Scratch o escribir un saludo en Python, mientras el mentor observa cómo razona. Con eso le recomendamos el curso de inicio.' },
      { q: '¿Tienen relación con la Municipalidad de Comas?', a: 'No. Somos independientes y no tenemos vínculo con la municipalidad ni con colegios del distrito. Citamos su nota sobre el Plan "Zona Escolar Vial Segura" solo como información pública.' },
      { q: '¿Cómo se paga?', a: 'Cada mes, con tarjeta, en dólares estadounidenses que su banco convierte. La clase de prueba es gratis y sin datos de pago.' },
      { q: '¿Dan algún certificado?', a: 'Sí, uno propio de Modern Age Coders al terminar cada curso. No lo emite el MINEDU ni sirve como nota del colegio, porque no formamos parte del sistema educativo peruano.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Siga leyendo',
    h2: 'Otras páginas útiles para familias de Lima Norte',
    lede: 'Varias están escritas en inglés, como indica su título.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Nuestra oferta para todo el Perú, organizada por edad.' },
      { href: '/ai-tools-age-guide', label: 'AI tool age guide', p: 'Desde qué edad se puede usar cada herramienta de IA.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Qué sucede en una clase en vivo con nosotros.' },
      { href: '/student-labs', label: 'Student labs', p: 'Proyectos publicados por alumnos.' },
      { href: '/courses', label: 'All courses', p: 'El catálogo completo para todas las edades.' }
    ]
  },

  start: {
    h2: 'Pida la clase de prueba desde Comas',
    lede: 'Marque en el formulario el día y la hora según el reloj de Perú. El mentor conversará con su hijo en inglés sencillo, le dará un reto a su medida y luego le contará a usted qué curso le sugerimos y en qué modalidad.',
    readFirst: 'Si antes quiere saber más de nosotros, <a class="ag-inline-link" href="/how-we-teach">How we teach</a> explica el método y <a class="ag-inline-link" href="/courses">All courses</a> muestra todos los cursos (en inglés).',
    note: 'Todas las clases son en vivo, en línea y en inglés, con mentores en la India. Si nos escribe por WhatsApp, puede hacerlo en castellano.',
    formNote: 'Gratis, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Para empezar', links: [
        { href: '/courses/kids-coding-blocks-masterclass', label: 'Programar con bloques' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Python para primaria' },
        { href: '/courses/kids-ai-web-development-course', label: 'Páginas web para niños' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Más información', links: [
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/ai-tools-age-guide', label: 'IA según la edad' },
        { href: '/student-labs', label: 'Proyectos' },
        { href: '/coding-and-ai-classes-in-peru', label: 'Perú' }
      ] }
    ],
    bottomRight: 'Divida entre dos y lea de abajo hacia arriba'
  },

  personalityCss: `
.ag-root.ag-prco .ag-hero h1 { max-width: 19ch; letter-spacing: -0.012em; }
.ag-root.ag-prco .ag-capsule { border-left-width: 5px; }
.ag-root.ag-prco .ag-section-head h2 { max-width: 27ch; }
.ag-root.ag-prco .ag-table caption { text-align: left; }
.ag-root.ag-prco .ag-steps li { line-height: 1.65; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Lima Metropolitana workbook cuadros 1, 2 and 3; national workbook cuadro 1), INEI TIC II trimestre 2026, MINEDU Edades normativas, Municipalidad Distrital de Comas note of 4 March 2026 on gob.pe, EF EPI 2025, tzdata. Read 10 November 2026. Example code, challenges by age and learning steps are our own.',
    localProject: 'A decimal-to-binary converter in Python for an 11-year-old: a while loop of n % 2 and n // 2 builds the bits right to left, checked against bin(); it prints 5 -> 101, 12 -> 1100, 31 -> 11111 and One hand of fingers counts up to 31. Run with python3 -I. Lesson family: base 2 by repeated division by 2, with an independent check.',
    requiredMentions: ['Python says: 1100', 'One hand of fingers counts up to 31', 'Divide by two, keep the remainder, read it from the bottom', 'Zona Escolar Vial Segura', '48,729 niños de 6 a 11 años', '51,347 adolescentes de 12 a 17', 'Niños en Comas', 'Divida entre dos y lea de abajo hacia arriba', 'Cuarto entre todos los distritos'],
    sources: [
      { claim: 'Comas population 578,818 (censada 553,297, omitida 25,521); Comas and neighbour age groups; Comas single ages 6 to 12.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/27/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'National district ranking (1,893 districts).', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Plan "Zona Escolar Vial Segura": signage, speed reducers, pedestrian spaces at school entrances, continuing through March 2026.', url: 'https://www.gob.pe/institucion/municomas-lima/noticias/1361454-plan-zona-escolar-vial-segura-fortalece-la-seguridad-en-instituciones-educativas-de-comas' },
      { claim: 'Households with a computer 53.3% (Lima), one computer only 74.3% (Peru), mobile phone 98.1% and internet 84.7% (Lima), II trimestre 2026.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'Normative age per grade at 31 March.', url: 'https://cdn.www.gob.pe/uploads/document/file/2818106/Edades_normativas.pdf?v=1644437764' },
      { claim: 'EF EPI 2025: Lima 555, high band; Peru moderate.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 with no DST since 1994; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Spanish-language teaching: refused; every class is live, online and in English only.',
      'Any link with the Municipalidad de Comas or the schools in its note: none; school and official names left out.',
      'Road-accident figures or wording from the municipal note: left out (no accident, crime or health data on the page).',
      'Travel times on Túpac Amaru or Universitaria: refused; no primary source.',
      'Adding the six districts of the neighbour table into a Lima Norte total: refused (published parts are not summed).',
      'Income or class statements about Comas: refused; only census ages and counts.',
      'Soles prices, competitor prices or any typed fee: refused; fees render from the template in USD.'
    ]
  }
};
