// SHIP: district | San Juan de Miraflores: live code at home in all six zones, after its school wifi points | Morse code: a dict to encode, an inverted dict to decode, and the gap that matters
'use strict';
// Clases de programación para niños en San Juan de Miraflores (ag- Spanish district door, Peru cluster row PE204, P6,
// hubGroup lima). Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief
// docs/superpowers/plans/2026-11-09-pe-writer-brief.md (rule "City and district pages").
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only; no soles, no typed figure.
// Angle: the parent in San Juan de Miraflores (SJM) searching "clases de programación para niños San Juan de Miraflores"
// during the school year. Spine: the 2025 census for SJM against Lima; what the municipality itself wrote about the district
// (creation law of 1965, its six zones) and about wifi points it set up for schoolchildren to join virtual classes (gob.pe,
// January 2022); a Morse code lesson in Python about signals; starting age; why a class at home rather than a trip
// across Lima Sur (no traffic figures); INEI connectivity; English; adolescentes; Peru to India clock.
// No income or class assumptions about the district or its zones.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/clases-de-programacion-para-ninos-
// san-juan-de-miraflores-lima/, fetched 10 November 2026 with curl -sL -A "Mozilla/5.0" or copied from saved raw files;
// quotes grepped in the raw text):
//  INEI, Censos Nacionales 2025, Lima Metropolitana workbook (inei-censos2025-ind_27-lima-metropolitana.xlsx), CUADRO N°1:
//    "DISTRITO SAN JUAN DE MIRAFLORES | 420096 | 208102 | 211994 | 394812 | 195200 | 199612 | 25284"; CUADRO N°3: "DISTRITO
//    SAN JUAN DE MIRAFLORES | 394812 | 21085 | 32654 | 35173 | 73249 | 97006 | 71535 | 64110"; CUADRO N°2 single ages:
//    6 años 4562, 7 años 5135, 8 años 5464, 9 años 5651, 10 años 5983, 11 años 5859, 12 años 5914.
//  INEI national workbook (ind_00) CUADRO N° 1: our sort of 1,893 districts puts SJM (420096) ninth in Peru (eighth in the
//    province of Lima).
//  Municipalidad Distrital de San Juan de Miraflores on gob.pe, noticias/575970 (12 January 2022): "el 12 de enero de 1965,
//    fue promulgada la Ley Nº 15382 que crea el Distrito de San Juan de Miraflores, limitando con Villa María del Triunfo y
//    Santiago de Surco"; "seis zonas: Zona Urbana, Pamplona Alta, Pamplona Baja, Pampas de San Juan, María Auxiliadora y
//    Panamericana Sur"; "se habilitaron 10 puntos WIFI para los escolares de primaria, secundaria y estudios superiores,
//    quienes carecían de internet para poder conectarse a sus clases virtuales"; "equipados con tablets, impresoras,
//    carpetas y papel". The note's population claim ("más de 500 mil", 2022) is NOT used: the 2025 census is the source.
//    Its political names, security and health passages are left out on purpose.
//  INEI, TIC en los Hogares, II Trimestre 2026 (inei_tic_iit2026.txt): "el 84,7% de los hogares disponía del servicio";
//    "alcanzó el 53,3% en Lima Metropolitana"; "en Lima Metropolitana, el 91,6% de los usuarios se conectó mediante
//    celular"; "adolescentes de 12 a 18 años con un 78,1% y entre los niños de 6 a 11 años con un 48,5%" (national, internet
//    by mobile phone).
//  MINEDU Edades normativas (as in the pilot): edad normativa al 31 de marzo.
//  EF EPI 2025 Peru page (MARKET 1.3): Lima 555, high band from 550.
//  Time (timezone.tsv): America/Lima UTC-5 all year, no DST since 1994; Asia/Kolkata UTC+5:30; India 10 h 30 min ahead.
// Our own calculations (python3 -I): 420096 / 10141775 = 4.1 %; 32654 / 818096 = 4.0 % of Lima's censused 6 to 11;
//    32654 / 394812 = 8.3 %; 35173 / 394812 = 8.9 %; 25284 / 420096 = 6.0 % omitted; 2026 - 1965 = 61 years since the law.
// Our own example (sjm_morse.py in the src-pages folder), run with python3 -I, exact output:
//    WIFI in Morse: .-- .. ..-. .. / Decoded: WIFI / Without spaces: .--....-...
// Neighbouring districts named in plain text only (Santiago de Surco, Villa María del Triunfo, Chorrillos, Villa El Salvador).
// Lesson family: Morse code; a dictionary to encode, the same dictionary inverted to decode, and why the separator between
// letters matters.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  "morse = {'S': '...', 'O': '---', 'H': '....', 'I': '..', 'W': '.--', 'F': '..-.'}",
  '',
  "word = 'WIFI'",
  "signal = ' '.join(morse[letter] for letter in word)",
  "print('WIFI in Morse:', signal)",
  '',
  'back = {}',
  'for letter, code in morse.items():',
  '    back[code] = letter',
  "print('Decoded:', ''.join(back[c] for c in signal.split(' ')))",
  "print('Without spaces:', signal.replace(' ', ''))"
].join('\n');

const OUT = [
  'WIFI in Morse: .-- .. ..-. ..',
  'Decoded: WIFI',
  'Without spaces: .--....-...'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'lima', label: 'Programación para niños en San Juan de Miraflores' },
  slug: 'clases-de-programacion-para-ninos-san-juan-de-miraflores-lima',
  code: 'pnsj',
  accent: '#516000',
  accentRationale: 'San Juan de Miraflores: a dry olive #516000, the colour of the sandy pampas on the south side of Lima, a yellower tone than the other district greens; allocated in alloc.tsv (contrast 5.64 on the paper #FBF8F2) and checked above 4.5 on every paper tint by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Clases de programación para niños en San Juan de Miraflores',
  title: 'Programación para niños en San Juan de Miraflores',
  description: 'Clases de programación para niños de 6 a 12 años en San Juan de Miraflores, Lima: en vivo, en línea y en inglés, desde casa, en grupo o solos y a cualquier hora.',
  ogDescription: 'Programación para niños de San Juan de Miraflores desde casa: el distrito en el censo 2025, sus seis zonas, los puntos wifi para escolares y un reto de código Morse en Python.',
  twitterDescription: 'Clases de programación en vivo y en inglés para niños de San Juan de Miraflores, sin salir de casa.',
  pageName: 'Clases de programación para niños en San Juan de Miraflores',
  webPageDescription: 'Guía para familias de San Juan de Miraflores que buscan clases de programación para niños durante el año: cifras por edad del distrito según los Censos Nacionales 2025 del INEI, lo que la municipalidad publicó sobre sus seis zonas y sobre puntos wifi para escolares, el acceso a internet según el INEI y un ejercicio de Python con código Morse escrito por nosotros.',
  courseDescription: 'Clases en vivo y en línea de programación para niños de 6 a 12 años de San Juan de Miraflores, con cursos propios para adolescentes, dictadas solo en inglés: Scratch, Python, Roblox, web y proyectos de IA, en clase grupal o individual y a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Programación para niños, San Juan de Miraflores',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#sjm', label: 'El distrito' },
    { href: '#senal', label: 'Conexión' },
    { href: '#morse', label: 'Reto Morse' },
    { href: '#primaria', label: 'Primaria' },
    { href: '#hora-india', label: 'Hora' }
  ],
  eyebrow: 'Lima Sur &middot; San Juan de Miraflores &middot; Niños y adolescentes',
  h1: 'Clases de programación para niños en San Juan de Miraflores',
  lede: 'De Pamplona Alta a la Zona Urbana, San Juan de Miraflores tiene miles de chicos en primaria y secundaria. Esta guía responde lo que preguntan sus familias cuando buscan una clase de programación que no les obligue a cruzar Lima Sur: qué cuenta el censo, qué hizo el municipio para conectar a los escolares, cómo se empieza según la edad y cómo es una sesión real con un mentor que habla en inglés.',
  secondaryCta: { href: '#morse', label: 'Ver el reto del código Morse' },
  wa: 'Hola Modern Age Coders, somos de San Juan de Miraflores y buscamos clases de programación para nuestro hijo o hija. ¿Nos ayudan a reservar la clase gratis?',
  heroNote: 'Enseñando en vivo desde 2020 &middot; más de 10,000 alumnos en el mundo &middot; un mentor que acompaña a cada niño en inglés',
  spec: [
    ['Alumnos', 'Primaria de 6 a 12 años; secundaria con cursos propios'],
    ['Lugar', 'Cualquiera de las seis zonas del distrito, desde casa'],
    ['Temas', 'Scratch, Python, Roblox, web e inteligencia artificial'],
    ['Formato', 'Grupo de quince a veinte, o uno a uno'],
    ['Idioma', 'Inglés claro, con cada palabra en pantalla'],
    ['Prueba', 'Primera clase sin costo ni tarjeta']
  ],
  capsuleQ: 'La respuesta en corto',
  capsule: 'Sí. Los niños de San Juan de Miraflores pueden aprender a programar sin salir de casa con Modern Age Coders, que enseña en vivo, en línea y en inglés a todo el tramo de primaria, de los 6 a los 12, y abre otra ruta para quienes ya están en secundaria. El mentor, que trabaja desde la India, comparte pantalla con su hijo, le habla claro y respeta su ritmo. Primero Scratch; luego Python, Roblox, la web y la IA. Usted escoge entre aula compartida y clase privada, y decide cuándo; la sesión inicial no se cobra.',

  picks: {
    eyebrow: 'Para arrancar',
    h2: '¿Con qué curso puede empezar un niño de San Juan de Miraflores?',
    lede: 'Uno para contar historias, otro para escribir código y otro para construir juegos.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'PNSJ / 01', title: 'Crear con bloques', alt: 'Imagen del curso de programación con bloques para niños', note: 'De 1° a 3° de primaria. Cuentos animados, juegos y una primera app con bloques de colores, casi sin texto.' },
      { course: 'python-ai-kids-masterclass', code: 'PNSJ / 02', title: 'Python: mensajes y señales', alt: 'Imagen del curso de Python e IA para niños', note: 'Desde 4° de primaria. Programas escritos, códigos secretos como el Morse de esta página, juegos de preguntas y proyectos con IA.' },
      { course: 'roblox-game-coding-for-kids-lua-course', code: 'PNSJ / 03', title: 'Juegos propios en Roblox', alt: 'Imagen del curso de programación de juegos en Roblox', note: 'Desde los 8 años. Para el niño fanático de Roblox que quiere diseñar sus propios niveles con código.' }
    ]
  },

  sections: [
    {
      id: 'sjm',
      eyebrow: 'El distrito',
      h2: '¿Cuántos niños de primaria hay en San Juan de Miraflores?',
      lede: 'El censo de 2025 registró en San Juan de Miraflores 32,654 niños de 6 a 11 años y 35,173 adolescentes de 12 a 17 entre las personas censadas. El distrito suma 420,096 habitantes contando la población omitida.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'San Juan de Miraflores y Lima Metropolitana: población y edades escolares (Censos Nacionales 2025)', head: ['Indicador', 'San Juan de Miraflores', 'Lima Metropolitana'], rows: [
          ['Habitantes (censados y omitidos)', '420,096', '10,141,775'],
          ['Personas censadas', '394,812', '9,600,043'],
          ['Omitidos según el INEI', '25,284', '541,732'],
          ['Censados de 6 a 11 años', '32,654', '818,096'],
          ['Censados de 12 a 17 años', '35,173', '867,253']
        ] },
        { kind: 'source', html: 'Fuente: INEI, hoja de cálculo de los Censos Nacionales 2025 con indicadores demográficos de cada distrito de Lima Metropolitana (cuadros 1 y 3), en la versión que el INEI actualizó a los límites de julio de 2026; descarga propia del 10 de noviembre de 2026. Las edades corresponden solo a quienes fueron censados.' },
        { kind: 'two', mt: true,
          leftH3: 'Noveno en el Perú',
          left: [
            'Si se ordena la lista nacional de distritos del INEI de mayor a menor, San Juan de Miraflores queda noveno en población y octavo dentro de la provincia de Lima (ordenamiento hecho por nosotros).',
            'Le corresponde, según nuestras cuentas, un 4,1 % de la población de la capital y un 4,0 % de sus escolares de primaria censados.'
          ],
          rightH3: 'Un retrato de edades',
          right: [
            'Ocho de cada cien censados del distrito tienen edad de primaria (8,3 %) y casi nueve, edad de secundaria (8,9 %), según nuestras divisiones. Son cifras de edad y solo eso.',
            'No las usamos para suponer nada sobre ninguna de las seis zonas ni sobre las familias que viven en ellas.'
          ] },
        { kind: 'p', mt: true, html: 'Según su propia municipalidad, San Juan de Miraflores fue creado por la Ley N.° 15382, promulgada el 12 de enero de 1965, y hoy se organiza en seis zonas: Zona Urbana, Pamplona Alta, Pamplona Baja, Pampas de San Juan, María Auxiliadora y Panamericana Sur. En 2026 el distrito cumplió 61 años (cuenta nuestra).' }
      ]
    },
    {
      id: 'senal',
      eyebrow: 'Conectados',
      h2: '¿Qué hizo la municipalidad para que los escolares se conectaran?',
      lede: 'En enero de 2022, la Municipalidad de San Juan de Miraflores informó en gob.pe que había habilitado 10 puntos wifi para escolares de primaria, secundaria y estudios superiores que no tenían internet para conectarse a sus clases virtuales.',
      body: [
        { kind: 'p', html: 'La misma nota, publicada al cumplirse 57 años de la creación del distrito, describe que esos puntos estaban equipados con tablets, impresoras, carpetas y papel. Era la época en que muchas clases escolares todavía eran virtuales, y el municipio respondió con espacios de conexión compartidos.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Lo que cambió', p: 'Hoy el INEI calcula que el 84,7 % de los hogares de Lima Metropolitana tiene internet contratado (abril a junio de 2026). Para la mayoría de familias, la conexión ya está en casa.' },
          { h3: 'Lo que pide la clase', p: 'Programar en vivo exige más que señal: teclado físico, cámara, micrófono y un rincón silencioso donde conversar sesenta minutos con el mentor.' },
          { h3: 'Ningún vínculo', p: 'Nuestra academia es ajena a la Municipalidad de San Juan de Miraflores y a sus puntos wifi. Citamos la nota porque cuenta algo útil de la historia reciente del distrito.' }
        ] },
        { kind: 'p', mt: true, html: 'De esa nota viene la idea del ejercicio que sigue: las redes, el wifi y los celulares envían mensajes como señales. Mucho antes de internet, la gente ya codificaba mensajes con puntos y rayas. Programarlo es una forma estupenda de entender cómo viaja la información.' }
      ]
    },
    {
      id: 'morse',
      tint: 'tint',
      eyebrow: 'Ejemplo de clase',
      h2: '¿Cómo se programa un código secreto en Python?',
      lede: 'Con un diccionario. El ejercicio es nuestro: el programa traduce la palabra WIFI a código Morse, la vuelve a traducir a letras con el diccionario dado vuelta y muestra qué pasa si se borran los espacios entre letras.',
      body: [
        { kind: 'code', label: 'WIFI en código Morse', lang: 'Python', code: PY, note: 'Antes de ejecutar, el mentor muestra la tabla de letras y pregunta: "W is dot, dash, dash. What will WIFI look like?" El niño lo escribe a mano primero.' },
        { kind: 'code', label: 'Lo que imprime el programa', lang: 'Salida', code: OUT, note: 'Las tres líneas son la salida literal de Python 3 en nuestra máquina. La última línea es el problema que el niño debe explicar.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Codificar.</strong> El diccionario <code>morse</code> guarda cada letra con su señal. El programa recorre W, I, F, I, busca cada una y las une con un espacio: <code>.-- .. ..-. ..</code>',
          '<strong>Dar vuelta el diccionario.</strong> Para decodificar hace falta lo contrario: buscar por señal y obtener la letra. El bucle arma <code>back</code> con las claves y los valores intercambiados.',
          '<strong>Decodificar.</strong> <code>split(\' \')</code> corta la señal en los espacios, y cada trozo se busca en <code>back</code>. Sale <code>WIFI</code> otra vez: el viaje de ida y vuelta funciona.',
          '<strong>El espacio importa.</strong> Sin espacios, la señal queda <code>.--....-...</code> y ya no se sabe dónde termina cada letra. Esos mismos puntos podrían leerse de varias maneras. Un separador, que parece nada, es lo que hace legible el mensaje.',
          '<strong>La conclusión, en inglés.</strong> Se resume en una frase que el niño repite: "Without the gaps, the message cannot be read back." Y el reto para la semana: codificar el nombre del niño, agregando al diccionario las letras que falten.'
        ] },
        { kind: 'p', mt: true, html: 'La enseñanza va más allá del Morse. Un niño que entiende que un mensaje necesita reglas claras para poder leerse de vuelta empieza a pensar como quien diseña sistemas: se pregunta qué pasa en el caso raro antes de que ocurra. Esa costumbre es la que le permite revisar lo que le responde internet, o una herramienta de IA, en lugar de aceptarlo sin mirar.' }
      ]
    },
    {
      id: 'primaria',
      eyebrow: 'Edad y grado',
      h2: '¿Qué conviene aprender en cada año de primaria?',
      lede: 'Cada edad tiene su herramienta. A los 6 años, bloques y personajes; hacia los 9, el primer código escrito; a los 11 o 12, proyectos propios con estructuras como los diccionarios.',
      body: [
        { kind: 'table', numCols: [1], caption: 'San Juan de Miraflores: censados por edad y una propuesta de contenido para cada una', head: ['Edad', 'Censados en San Juan de Miraflores', 'Grado orientativo', 'Qué conviene aprender (nuestro)'], rows: [
          ['6 años', '4,562', '1° de primaria', 'Ordenar instrucciones con bloques grandes'],
          ['7 años', '5,135', '2° de primaria', 'Repetir y esperar: bucles y tiempos en Scratch'],
          ['8 años', '5,464', '3° de primaria', 'Decidir con condiciones dentro de un juego'],
          ['9 años', '5,651', '4° de primaria', 'Escribir las primeras líneas de Python'],
          ['10 años', '5,983', '5° de primaria', 'Listas y textos: mensajes que se arman solos'],
          ['11 años', '5,859', '6° de primaria', 'Diccionarios, como el del código Morse'],
          ['12 años', '5,914', '1° de secundaria', 'Un proyecto completo: idea, código y presentación']
        ] },
        { kind: 'source', html: 'Fuentes: el desglose año por año de las edades que el INEI publicó para Lima Metropolitana con el censo de 2025, y la regla del MINEDU que relaciona edad y grado tomando como corte el 31 de marzo. El grado sale aproximado porque el censo registra la edad del día en que se visitó cada hogar. Las sugerencias de la derecha son nuestras.' },
        { kind: 'two', mt: true,
          leftH3: 'Si su hijo juega Roblox',
          left: [
            'Muchos niños llegan a la programación por los videojuegos. Roblox Studio permite construir niveles propios y programarlos en Luau, y en inglés. Nuestra página de <a class="ag-inline-link" href="/programacion-roblox-para-ninos-en-ingles">programación Roblox para niños en inglés</a> cuenta cómo lo enseñamos.',
            'Para chicos desde los 8 años suele ser el enganche perfecto.'
          ],
          rightH3: 'Si le interesa la IA',
          right: [
            'A partir de los 8 años, un niño puede entender qué hace una inteligencia artificial por dentro y cuándo se equivoca. Lo explicamos en nuestro <a class="ag-inline-link" href="/curso-de-inteligencia-artificial-para-ninos-peru">curso de inteligencia artificial para niños en Perú</a>.',
            'Usamos solo herramientas permitidas para la edad de cada alumno.'
          ] }
      ]
    },
    {
      id: 'en-casa',
      eyebrow: 'Sin salir',
      h2: '¿Para qué trasladarse si la clase de programación puede ser en casa?',
      lede: 'Para nada, en la mayoría de casos. Una clase en línea empieza a la hora exacta, sin buses ni esperas, y el niño termina en su propia casa.',
      body: [
        { kind: 'p', html: 'San Juan de Miraflores limita con Santiago de Surco, Villa María del Triunfo, Chorrillos y Villa El Salvador. Elegir una academia fuera del distrito obliga a organizar, dos tardes por semana, quién deja y quién recoge al niño. Las familias de la Panamericana Sur o de Pamplona saben cuánto les toma moverse, y nosotros no vamos a inventar esa cifra. Con la clase en casa esa organización sobra.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'Señal y equipos en casa: lo que reportó el INEI para abril a junio de 2026', head: ['Medición del INEI', 'Porcentaje', 'Ámbito'], rows: [
          ['Viviendas con internet pagado', '84,7 %', 'Lima Metropolitana'],
          ['Hogares con computadora', '53,3 %', 'Lima Metropolitana'],
          ['Usuarios de internet que entran por celular', '91,6 %', 'Lima Metropolitana'],
          ['Niños de 6 a 11 años que usan internet en el celular', '48,5 %', 'Perú']
        ] },
        { kind: 'source', html: 'Fuente: INEI, reporte trimestral de TIC en hogares basado en la ENAHO, cifras preliminares del segundo trimestre de 2026. El Callao va sumado a Lima en esa encuesta, que tampoco se abre por distritos.' },
        { kind: 'two', mt: true,
          leftH3: 'El celular no alcanza',
          left: [
            'En Lima casi todos los usuarios de internet se conectan por celular, y en el país menos de la mitad de los niños de 6 a 11 años usa internet a través de un celular, según el INEI. Para programar, de todos modos, el celular se queda corto: pantalla pequeña y sin teclado.',
            'La clase necesita una laptop o computadora, aunque sea compartida.'
          ],
          rightH3: 'Lo que hay que preparar',
          right: [
            'Un equipo sencillo con cámara y micrófono, unos audífonos y una conexión estable. Los programas son gratuitos y el mentor los instala junto con su hijo.',
            'Cuando la máquina es de toda la familia, se agenda la clase en el hueco del día en que nadie la ocupa.'
          ] },
        { kind: 'p', mt: true, html: 'Para quienes viven pegados a Surco hay además una <a class="ag-inline-link" href="/vacaciones-utiles-de-programacion-surco-lima">guía pensada para el verano en ese distrito</a>, con estas mismas clases.' }
      ]
    },
    {
      id: 'ingles',
      eyebrow: 'Inglés',
      h2: '¿Cómo aprende programación en inglés un niño que recién empieza con el idioma?',
      lede: 'Escuchando, mirando y probando. El mentor no da un discurso: dice una frase corta, la muestra en pantalla y espera que el niño la use.',
      body: [
        { kind: 'p', html: 'En la programación, las palabras en inglés tienen un efecto inmediato. Si el niño escribe <code>split</code>, el texto se parte; si escribe <code>join</code>, se une. Esa relación directa entre palabra y resultado hace que el vocabulario se quede. Al principio el niño contesta en castellano o con gestos, y el mentor lo acompaña hasta que se anima con frases cortas.' },
        { kind: 'p', html: 'El EF EPI 2025, que EF Education First publica cada año, otorga a Lima 555 puntos, la categoría alta de su escala, que arranca en 550. El país completo queda en moderado. Los datos vienen de adultos que rinden el test de EF en internet, no de niños. Aun así, muestran que en la capital el inglés ya es moneda corriente en estudios y empleos, y que una práctica oral semanal, desde primaria, tiene valor real.' }
      ]
    },
    {
      id: 'secundaria',
      eyebrow: 'Secundaria',
      h2: '¿Qué pueden estudiar los adolescentes de San Juan de Miraflores?',
      lede: 'Programación de verdad, sin bloques. Para los 35,173 chicos del distrito con edades de 12 a 17, según el censo, el punto de partida es el código escrito.',
      body: [
        { kind: 'p', html: 'Para secundaria hay cursos de Python, desarrollo web, Java, datos e inteligencia artificial, y el ritmo es otro: el mentor discute decisiones con el alumno, le pide que planifique y lo deja equivocarse para aprender. Muchos adolescentes llegan con una idea, un juego o una página, y el curso se arma en torno a ella.' },
        { kind: 'p', html: 'Hay asistentes de IA que exigen una edad mínima, y otros que, para un menor, requieren la autorización expresa de su familia. En clase con menores usamos solo las adecuadas para su edad, como apoyo para pensar, y nunca para que el alumno entregue algo que no sabría explicar.' }
      ]
    },
    {
      id: 'hora-india',
      eyebrow: 'Horario',
      h2: '¿Qué hora es para el mentor cuando en San Juan de Miraflores es de noche?',
      lede: 'Ya es la mañana siguiente. El reloj de la India le lleva a Lima diez horas y media de ventaja, y esa distancia es la misma de enero a diciembre.',
      body: [
        { kind: 'p', html: 'El Perú usa UTC-5 y abandonó el horario de verano en 1994; la India usa UTC+5:30 y tampoco lo aplica. Dos ejemplos: una clase a las 8:30 de la noche en San Juan de Miraflores encuentra al mentor desayunando, a las 7:00 del día siguiente; una a las 10:00 de la mañana en el distrito, a las 8:30 de la noche en la India. No son turnos reservados; son cuentas de ejemplo.' },
        { kind: 'p', html: 'Para reservar no hace falta convertir: el formulario de la clase de prueba presenta los horarios en hora de Perú. Las familias eligen según el turno escolar del niño y sus propias jornadas de trabajo.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Avance',
    h2: '¿Qué muestra que su hijo progresa en programación?',
    lede: 'Cinco señales nuestras, desde las primeras clases hasta el primer proyecto propio.',
    table: { caption: 'Cinco señales de progreso para alumnos de primaria (nuestras)', head: ['Señal', 'En la clase', 'Lo que usted ve'], rows: [
      ['1. Da órdenes claras', 'Arma secuencias que funcionan a la primera', 'Una animación que hace lo que él dijo'],
      ['2. Usa palabras del código', 'Nombra en inglés lo que hace cada instrucción', 'Le traduce sus propios comandos'],
      ['3. Guarda y busca', 'Usa listas y diccionarios, como en el reto Morse', 'Un mensaje secreto que usted debe descifrar'],
      ['4. Piensa en el caso raro', 'Se pregunta qué pasa si falta un dato o un espacio', 'Le cuenta un error que previó'],
      ['5. Termina y presenta', 'Completa un proyecto y lo explica en inglés', 'La presentación, en casa']
    ] },
    left: { h3: 'Para madres y padres', ps: [
      'Pida a su hijo que le enseñe algo de su clase. Si puede enseñarlo, lo aprendió.',
      'No se preocupe por meses lentos: el aprendizaje en programación avanza a saltos.'
    ] },
    right: { h3: 'Para los alumnos', ps: [
      'Antes de correr el programa, diga qué espera que pase.',
      'Busque siempre el caso extraño: un espacio que falta, un número negativo, una lista vacía.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más opciones',
    h2: '¿Qué otros cursos hay para chicos de San Juan de Miraflores?',
    lede: 'Otros nueve cursos con mentor en vivo y clase en inglés, para grupo o para un solo alumno.',
    bands: [
      { num: 'I', h3: 'Empezar', sub: 'De 6 a 9 años', courses: [
        { code: 'PNSJ / INI / 01', slug: 'scratch-programming-complete-course', title: 'Scratch completo', blurb: 'Personajes, escenarios y reglas hasta cerrar un juego.' },
        { code: 'PNSJ / INI / 02', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Lógica para los pequeños', blurb: 'Secuencias y patrones antes del código.' },
        { code: 'PNSJ / INI / 03', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft con instrucciones', blurb: 'Automatizar lo que el niño ya construye.' }
      ] },
      { num: 'II', h3: 'Construir y entender', sub: 'De 8 a 12 años', courses: [
        { code: 'PNSJ / MED / 01', slug: 'game-development-masterclass-for-kids', title: 'Diseño de videojuegos', blurb: 'Tres mundos de juego, una misma lógica.' },
        { code: 'PNSJ / MED / 02', slug: 'kids-ai-web-development-course', title: 'Páginas web propias', blurb: 'Publicar en internet algo hecho por él.' },
        { code: 'PNSJ / MED / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Resolver problemas', blurb: 'Partir un reto grande en pasos pequeños.' }
      ] },
      { num: 'III', h3: 'Secundaria', sub: 'De 13 a 18 años', courses: [
        { code: 'PNSJ / SEC / 01', slug: 'python-complete-masterclass-teens', title: 'Python para secundaria', blurb: 'Programas completos, de la idea al archivo.' },
        { code: 'PNSJ / SEC / 02', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'Ciberseguridad defensiva', blurb: 'Cuidar cuentas, redes y datos con criterio.' },
        { code: 'PNSJ / SEC / 03', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript', blurb: 'Botones, animaciones y lógica que corre en el navegador.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Así funciona',
    h2: '¿Cómo se organiza una semana de clases?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Mañana libre', l: 'Para quienes estudian en el turno de la tarde.' },
      { time: 'Al volver del colegio', l: 'Con la tarea lista y la computadora disponible.' },
      { time: 'Noche', l: 'Cuando la familia ya está reunida en casa.' }
    ],
    cells: [
      { h3: 'Mentor fijo', p: 'Una sola persona acompaña a su hijo todo el curso.' },
      { h3: 'Código del alumno', p: 'El niño escribe; el mentor orienta con preguntas.' },
      { h3: 'Reto de la semana', p: 'Un ejercicio breve para pensar entre clases.' },
      { h3: 'Mensaje a la familia', p: 'Lo hecho y lo próximo, en pocas líneas.' },
      { h3: 'Pago mensual', p: 'Sin compromiso anual; se puede pausar.' },
      { h3: 'Grupo o individual', p: 'Aula de quince a veinte de la misma edad, o clase privada.' }
    ]
  },

  projectsH2: 'Lo que construyen los alumnos que siguen',
  projectsLede: 'Así se ve el trabajo tras meses de práctica constante. Hay muchos más en <a class="ag-inline-link" href="/student-labs">Student labs</a>, en inglés.',
  reviewsLede: 'Lo que padres y estudiantes dejaron escrito en Google, sin traducir.',

  fees: {
    h2: '¿Cuánto cuesta la clase para una familia de San Juan de Miraflores?',
    lede: 'Los planes aparecen abajo con su mensualidad en dólares estadounidenses. El cobro es con tarjeta y su banco hace la conversión al cambio del día, de modo que el cargo puede variar un poco.',
    free: ['Primera clase completa sin costo', 'Recomendación de curso y modalidad', 'Sin tarjeta'],
    group: ['Quince a veinte niños de edad similar', 'Un mismo mentor durante el curso', 'Dos clases en vivo cada semana', 'Pago mensual, sin permanencia'],
    one: ['Su hijo a solas con el mentor', 'Ritmo y temas a medida', 'Horario a elección de la familia']
  },

  faq: {
    eyebrow: 'Dudas comunes',
    h2: 'Programación para niños en San Juan de Miraflores: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Se habla inglés de principio a fin, siempre en vivo y a través de internet, y para muchas familias de San Juan de Miraflores ahí está el beneficio: su hijo programa y, a la vez, gana soltura hablando un idioma que Lima ya maneja en nivel alto, según el EF EPI 2025 (555 puntos). El mentor habla pausado y se adapta al niño.' },
      { q: '¿Dónde son las clases?', a: 'En su casa. No tenemos aulas en el distrito ni en el resto del país; el niño se conecta por videollamada y el mentor participa desde la India.' },
      { q: '¿Cuántos escolares tiene el distrito?', a: 'El censo de 2025 dio para el distrito 420,096 habitantes; dentro de la población censada hay 32,654 chicos en el tramo de 6 a 11 años y 35,173 en el de 12 a 17.' },
      { q: '¿Qué edad mínima piden?', a: 'Seis años, la edad de 1° de primaria. Esos primeros meses son de bloques y personajes; el código escrito suele llegar en 4° grado.' },
      { q: '¿Hace falta saber inglés?', a: 'No. El inglés se va ganando en la propia clase, con oraciones breves, palabras escritas en la pantalla y un mentor que no se impacienta. Al mes, casi todos los chicos ya entienden la dinámica.' },
      { q: '¿A qué hora son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Una referencia: cuando en San Juan de Miraflores son las 10:00 a. m., en la ciudad del mentor ya marcan las 8:30 p. m.' },
      { q: '¿Puede tomar la clase con un celular?', a: 'No se lo recomendamos. Para programar hace falta un teclado y una pantalla de computadora; el celular sirve para recibir los avisos por WhatsApp.' },
      { q: '¿Trabajan con la Municipalidad de San Juan de Miraflores?', a: 'No. Ni la municipalidad, ni sus puntos wifi, ni los colegios del distrito tienen relación con nosotros; la nota municipal aparece solo como contexto del distrito.' },
      { q: '¿Cómo se paga?', a: 'Con un cargo mensual a su tarjeta, fijado en dólares de Estados Unidos; la conversión corre por cuenta del banco. Probar no cuesta nada y no requiere registrar medios de pago.' },
      { q: '¿Dan certificado?', a: 'Sí, una constancia de la propia academia por cada curso completado. Es privada: el MINEDU no la emite y no se convierte en nota escolar.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Lecturas',
    h2: 'Lecturas para seguir en Lima Sur',
    lede: 'Atención: un título en inglés indica un texto en inglés.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'La guía general de nuestras clases en el país.' },
      { href: '/vacaciones-utiles-de-programacion-chorrillos-lima', label: 'Vacaciones útiles en Chorrillos', p: 'El verano visto desde el distrito vecino de la costa.' },
      { href: '/ai-tools-age-guide', label: 'AI tool age guide', p: 'Qué herramientas de IA permite usar cada edad.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Una clase en vivo, explicada por dentro.' },
      { href: '/courses', label: 'All courses', p: 'Todos los cursos, ordenados por edad.' }
    ]
  },

  start: {
    h2: 'Reserve una clase de prueba desde San Juan de Miraflores',
    lede: 'Fije la fecha y la hora peruana que prefiera. Durante la sesión el mentor charlará con su hijo, le pondrá un problema a su medida y al terminar le explicará a usted cuál sería el siguiente paso.',
    readFirst: 'Si quiere informarse antes, revise <a class="ag-inline-link" href="/how-we-teach">How we teach</a> y <a class="ag-inline-link" href="/courses">All courses</a>, ambas en inglés.',
    note: 'Las clases se dan en vivo y en inglés, por internet, con mentores en la India. Puede escribirnos por WhatsApp en castellano.',
    formNote: 'Gratis, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Para empezar', links: [
        { href: '/courses/kids-coding-blocks-masterclass', label: 'Crear con bloques' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Python' },
        { href: '/courses/roblox-game-coding-for-kids-lua-course', label: 'Roblox' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Información', links: [
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/ai-tools-age-guide', label: 'IA según la edad' },
        { href: '/student-labs', label: 'Proyectos' },
        { href: '/coding-and-ai-classes-in-peru', label: 'Perú' }
      ] }
    ],
    bottomRight: 'Sin el espacio, el mensaje no se lee'
  },

  personalityCss: `
.ag-root.ag-pnsj .ag-hero h1 { max-width: 22ch; letter-spacing: -0.013em; }
.ag-root.ag-pnsj .ag-capsule { border-left-width: 4px; border-radius: 2px; }
.ag-root.ag-pnsj .ag-section-head h2 { max-width: 27ch; }
.ag-root.ag-pnsj .ag-table td:first-child { font-variant-numeric: tabular-nums; }
.ag-root.ag-pnsj .ag-steps li { line-height: 1.58; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Lima Metropolitana workbook cuadros 1, 2 and 3; national workbook cuadro 1), INEI TIC II trimestre 2026, MINEDU Edades normativas, Municipalidad Distrital de San Juan de Miraflores note of 12 January 2022 on gob.pe (Ley 15382 of 1965, six zones, 10 wifi points), EF EPI 2025, tzdata. Read 10 November 2026. Example code, content by age and signals are our own.',
    localProject: 'Morse code in Python for an 11-year-old: a dictionary encodes WIFI as .-- .. ..-. .., the dictionary inverted decodes it back to WIFI, and removing the spaces gives .--....-... which cannot be read back. Run with python3 -I. Lesson family: a dictionary to encode, an inverted dictionary to decode, and why the separator matters.',
    requiredMentions: ['Decoded: WIFI', 'Without spaces:', 'Without the gaps, the message cannot be read back', 'Ley N.° 15382', '10 puntos wifi', '32,654 niños de 6 a 11 años', 'Censados en San Juan de Miraflores', 'Sin el espacio, el mensaje no se lee', 'Noveno en el Perú'],
    sources: [
      { claim: 'SJM population 420,096 (censada 394,812, omitida 25,284); ages 6 to 11 and 12 to 17; single ages 6 to 12.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/27/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'National district ranking (1,893 districts).', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Ley 15382 of 12 January 1965 creating the district; six zones; 10 wifi points for schoolchildren with tablets and printers (12 January 2022).', url: 'https://www.gob.pe/institucion/munisjm/noticias/575970-san-juan-de-miraflores-celebra-57-anos-de-fundacion-con-nuevas-obras-entregadas-y-programas-sociales-en-beneficio-de-los-vecinos' },
      { claim: 'Lima households with internet 84.7% and computer 53.3%; 91.6% of Lima users by phone; 48.5% of children 6 to 11 use internet by phone (Peru), II trimestre 2026.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'Normative age per grade at 31 March.', url: 'https://cdn.www.gob.pe/uploads/document/file/2818106/Edades_normativas.pdf?v=1644437764' },
      { claim: 'EF EPI 2025: Lima 555, high band; Peru moderate.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 with no DST since 1994; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Spanish-language teaching: refused; every class is live, online and in English only.',
      'The municipal note\'s population figure ("más de 500 mil", 2022): refused; the 2025 census figure is used.',
      'Political names, security and health passages of the municipal note: left out on purpose.',
      'Any link with the Municipalidad de San Juan de Miraflores or its wifi points: none; the page says so.',
      'Travel times across Lima Sur: refused; no primary source.',
      'Income or class statements about the district or any of its six zones: refused; only census ages and counts.',
      'Soles prices, competitor prices or any typed fee: refused; fees render from the template in USD.'
    ]
  }
};
