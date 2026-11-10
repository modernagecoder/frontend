// SHIP: market (city, es) | Iquitos: programación para niños en vivo y en inglés desde casa, franca sobre equipo y conexión | a row is not a visitor: add the counts inside each row, then cross-tabulate by two keys
'use strict';
// Clases de programación para niños en Iquitos (ag- Spanish city door, Peru cluster row PE135, P6; alloc: cities, priq, #6E1727).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; owner 2026-11-08: timing flexible at any hour;
// USD only, through the template's data-price anchors. Formal "usted" throughout. Kids 6 to 12 only.
// Queries (KEYWORDS.md, autocomplete gl=pe): "clases de programación para niños iquitos peru", "curso de programación
// iquitos peru", "clases particulares iquitos ingles", "colegio bilingüe iquitos peru"; Iquitos is in the 12 to 14 band.
// Spine: Iquitos as four districts of Maynas (INEI 2025, San Juan Bautista the largest); EF EPI 2025 publishes no Iquitos
// score, so the page does not guess one; Loreto's home computers and internet are well below the national share (INEI
// Compendio 2026), stated plainly with what that means for a live class; robotics or coding; one original project on
// SERNANP visits to the Reserva Nacional Allpahuayo Mishana (San Juan Bautista district); clock conversions.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/clases-de-programacion-para-ninos-iquitos/,
// fetched 2026-11-10 with curl -sL -A "Mozilla/5.0"; national facts from pe/facts-school and pe/facts-market raw files):
//  - INEI, Censos Nacionales 2025, tabulados/16/poblacion/Indicadores_demograficos.xlsx (inei-ind-16.xlsx), Cuadro 1
//    (población total): "LORETO 1032771"; "PROVINCIA MAYNAS 500640"; "DISTRITO IQUITOS 122521"; "DISTRITO PUNCHANA 81494";
//    "DISTRITO BELÉN 75977"; "DISTRITO SAN JUAN BAUTISTA 154842". Cuadro 3 (población censada by age, "De 6 a 11 años"
//    third figure): "PROVINCIA MAYNAS 488707 47725 59899"; "DISTRITO IQUITOS 120060 8788 11696"; "DISTRITO PUNCHANA 80155
//    8005 9893"; "DISTRITO BELÉN 74546 7442 9194"; "DISTRITO SAN JUAN BAUTISTA 150429 15243 18997". Census reference day
//    15 September 2025. Never summed.
//  - INEI Lib1539, Perfil Sociodemográfico 2017, Cuadro N° 1.9 (places.tsv): Iquitos city 377,609 (2017 census).
//  - EF EPI 2025 Peru page (facts-market/src/ef_peru.raw): cityScore lists lima, cusco, trujillo, arequipa, huancayo,
//    piura, chiclayo, ica; no Iquitos and no Loreto entry. Lima 555 high.
//  - INEI Compendio Estadístico Perú 2026, tomo 1, cuadro 11.5: "Loreto 18,2 ... 20,1 22,8", "Total ... 34,1 33,9";
//    cuadro 11.6: "Loreto 9,6 ... 35,8 42,1", "Total ... 55,5 56,8".
//  - INEI Boletín TIC II trimestre 2026: "el 36,4% de los hogares del país disponía de al menos una computadora".
//  - MINEDU DITE robotics paper (FACTS 52): "la robótica en educación no es el objetivo, es el medio."
//  - MINEDU Edades normativas (FACTS 13, 14); CNEB (FACTS 32, 33, 57); RM 501-2025-MINEDU (FACTS 21).
//  - Time: tzdata America/Lima UTC-5 (no DST since 1994), Asia/Kolkata UTC+5:30.
//  - Data: Servicio Nacional de Áreas Naturales Protegidas por el Estado (SERNANP), "Frecuencia de visitas turísticas en
//    las Áreas Naturales Protegidas por el estado", Plataforma Nacional de Datos Abiertos,
//    https://www.datosabiertos.gob.pe/dataset/frecuencia-de-visitas-tur%C3%ADsticas-en-las-%C3%A1reas-naturales-protegidas-por-el-estado-%E2%80%93-servicio,
//    licence "Open Data Commons Attribution License" (ODC-By). File SERNANPdataset_Turismo.csv, 609,711 bytes, sha256
//    ee8e8fcd1da56f515f46eda8635e53b2fe8d6f5ef3f9459a9f0b5b5113a484fc, 5,952 rows, FECHA_CORTE 20240527. Dictionary
//    (DiccionarioDatos_Turismo_SERNANP.xlsx): EDAD "Infantes (menores de 5 años), Menores (entre 5 y 16 años), Adultos (entre
//    17 a 65 años) y Adultos mayores (superior de 65 años)"; VISITAS_E1 "estadía de 1 día", VISITAS_E2A3 "de 2 a 3 días",
//    VISITAS_E3A30 "de 3 hasta 30 días". Page text: "SENANP tiene en total 77 Áreas Naturales Protegidas de administración
//    Nacional de los cuales 36 reportan actividades turísticas." RN Allpahuayo Mishana: 123 rows, province MAYNAS, district
//    SAN JUAN BAUTISTA, sectors Irapay 82, Yarana 32, A 5, B 4; months January 2022 to November 2023; no INFANTE rows.
// Our own runs (scratchpad pe/c4/iquitos, python3 -I on the downloaded file), exact output:
//  v1 prints: Young visitors: 14
//  v2 prints: INFANTE [0, 0, 0] total 0 / MENOR [290, 261, 8] total 559 / ADULTO [1032, 230, 351] total 1613 /
//    ADULTO MAYOR [5, 7, 53] total 65
//  Our sum of the printed totals: 559 + 1613 + 65 = 2237 visits in the 23 months.
// Lesson family: a row is not a visitor. Count the numbers inside each row (three stay-length columns), then group by two
// keys (age band and origin) into a small table; a key that never appears comes back as 0 from dict.get.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'import csv',
  '',
  'rows = 0',
  'with open("SERNANPdataset_Turismo.csv", encoding="utf-8") as f:',
  '    for row in csv.DictReader(f):',
  '        if row["ANP"] == "RN Allpahuayo Mishana" and row["EDAD"] == "MENOR":',
  '            rows += 1',
  '',
  'print("Young visitors:", rows)'
].join('\n');

const V2 = [
  'import csv',
  '',
  'STAYS = ["VISITAS_E1", "VISITAS_E2A3", "VISITAS_E3A30"]',
  'table = {}',
  'with open("SERNANPdataset_Turismo.csv", encoding="utf-8") as f:',
  '    for row in csv.DictReader(f):',
  '        if row["ANP"] == "RN Allpahuayo Mishana":',
  '            visits = sum(int(row[s]) for s in STAYS)',
  '            key = (row["EDAD"], row["PROCEDENCIA"])',
  '            table[key] = table.get(key, 0) + visits',
  '',
  'for age in ["INFANTE", "MENOR", "ADULTO", "ADULTO MAYOR"]:',
  '    line = [table.get((age, p), 0) for p in ["LOCAL", "NACIONAL", "EXTRANJERO"]]',
  '    print(age, line, "total", sum(line))'
].join('\n');

const OUT2 = [
  'INFANTE [0, 0, 0] total 0',
  'MENOR [290, 261, 8] total 559',
  'ADULTO [1032, 230, 351] total 1613',
  'ADULTO MAYOR [5, 7, 53] total 65'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'cities', label: 'Iquitos: programación para niños' },
  slug: 'clases-de-programacion-para-ninos-iquitos',
  code: 'priq',
  accent: '#6E1727',
  accentRationale: 'Clases de programación para niños en Iquitos: a deep aguaje-fruit maroon #6E1727 allocated to this row in alloc.tsv; contrast 9.39 on the paper #FBF8F2 and well above 4.5 on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Clases de programación para niños en Iquitos',
  title: 'Clases de programación para niños en Iquitos, en inglés',
  description: 'Programación para niños de 6 a 12 años en Iquitos: clases en vivo, en línea y en inglés, con bloques, Scratch y Roblox, en grupo o uno a uno, a la hora que elija.',
  ogDescription: 'Clases de programación en vivo y en inglés para niños de Iquitos: los cuatro distritos según el INEI, una nota franca sobre computadoras y conexión en Loreto, y un proyecto con las visitas a la Reserva Allpahuayo Mishana.',
  twitterDescription: 'Programación para niños en Iquitos, en vivo y en inglés, desde casa y a la hora que la familia decida.',
  pageName: 'Clases de programación para niños en Iquitos',
  webPageDescription: 'Guía para familias de Iquitos sobre clases de programación para niños de 6 a 12 años dictadas en vivo y en inglés: niños por distrito según los Censos Nacionales 2025, computadoras e internet en Loreto según el Compendio Estadístico 2026, robótica o programación, y un proyecto de Python escrito por nosotros con las visitas registradas por el SERNANP en la Reserva Nacional Allpahuayo Mishana (ODC-By).',
  courseDescription: 'Clases en vivo y en línea de programación para niños de 6 a 12 años en Iquitos, dictadas solo en inglés: razonamiento, bloques, Scratch, Roblox y Python, en grupo o uno a uno, a la hora que elija la familia.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Programación para niños en Iquitos',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#maynas', label: 'Los distritos' },
    { href: '#conexion', label: 'Equipo y conexión' },
    { href: '#ingles', label: 'Inglés' },
    { href: '#reserva', label: 'Proyecto' },
    { href: '#reloj', label: 'Horario' }
  ],
  eyebrow: 'Iquitos &middot; Programación para niños &middot; De 6 a 12 años',
  h1: 'Clases de programación para niños en Iquitos',
  lede: 'Para aprender a programar desde Iquitos no hace falta viajar a ninguna parte: basta una computadora y una conexión que aguante una videollamada. Aquí le explicamos cómo son nuestras clases en vivo y en inglés para niños iquiteños, qué dicen las cifras del INEI sobre el equipo en los hogares de Loreto, por qué la sesión de prueba es tan importante aquí, y le mostramos un proyecto con datos de la Reserva Nacional Allpahuayo Mishana.',
  secondaryCta: { href: '#reserva', label: 'Ver el proyecto de la reserva' },
  wa: 'Hola Modern Age Coders, estamos en Iquitos y buscamos clases de programación en inglés para nuestro hijo o hija. ¿Podemos hacer la clase de prueba?',
  heroNote: 'En vivo desde 2020 &middot; más de 10,000 alumnos de varios países &middot; 4.9 de 5 en unas 547 opiniones de Google',
  spec: [
    ['Niños de', '6 a 12 años, primaria completa'],
    ['Aprenden', 'Lógica, bloques, Scratch, Roblox y Python'],
    ['Formato', 'Grupo de quince a veinte, o uno a uno'],
    ['Horario', 'El que su familia elija, cualquier día'],
    ['Mentores', 'En la India, por videollamada en vivo'],
    ['Primera clase', 'Sin costo y sin tarjeta']
  ],
  capsuleQ: 'La respuesta breve',
  capsule: 'Sí, un niño de Iquitos puede aprender a programar sin salir de su casa: Modern Age Coders da clases a chicos iquiteños de 6 a 12 años, en vivo, por internet y en inglés, guiadas por un mentor que trabaja desde la India, habla pausado y se ajusta al ritmo de cada uno. Los más chicos juegan con lógica y bloques; hacia los 9 se escribe Python. Su familia escoge grupo o clases uno a uno y decide cuándo. La primera clase es gratuita y sirve también para probar la conexión.',

  picks: {
    eyebrow: 'Primeros pasos',
    h2: '¿Con qué curso empieza un niño de Iquitos?',
    lede: 'Uno para los más pequeños, que todavía no programan pero ya razonan; uno amplio para toda la primaria; y uno para quien no deja de hablar de Roblox.',
    items: [
      { course: 'reasoning-and-readiness-course-for-young-thinkers', code: 'IQT / 01', title: 'Razonar antes de programar', alt: 'Imagen del curso de razonamiento para niños pequeños', note: 'De 6 a 9 años, seis meses, en dos grupos de edad. Acertijos, patrones y órdenes lógicas: la base de todo código, con muy poco texto en pantalla.' },
      { course: 'kids-coding-blocks-masterclass', code: 'IQT / 02', title: 'Programación con bloques', alt: 'Imagen del curso de programación con bloques para niños', note: 'De 6 a 12 años, de diez a doce meses, con grupos separados por edad. De los primeros bloques a juegos y apps sencillas.' },
      { course: 'roblox-game-coding-for-kids-lua-course', code: 'IQT / 03', title: 'Juegos propios en Roblox', alt: 'Imagen del curso de programación de juegos en Roblox', note: 'De 8 a 14 años, seis meses. El niño escribe en Luau las reglas de su propio juego dentro de Roblox Studio y entiende por qué funciona.' }
    ]
  },

  sections: [
    {
      id: 'maynas',
      eyebrow: 'Iquitos por distritos',
      h2: '¿Cuántos niños de 6 a 11 años viven en Iquitos y alrededores?',
      lede: 'En la provincia de Maynas, donde está Iquitos, el censo de 2025 contó 59,899 niños de 6 a 11 años. La ciudad se reparte en cuatro distritos, y el de mayor número de chicos es San Juan Bautista, no el distrito de Iquitos.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Maynas y los cuatro distritos de Iquitos según el INEI (2025)', head: ['Unidad del INEI', 'Habitantes (total)', 'Chicos de 6 a 11 (censados)'], rows: [
          ['Provincia de Maynas', '500,640', '59,899'],
          ['San Juan Bautista', '154,842', '18,997'],
          ['Iquitos', '122,521', '11,696'],
          ['Punchana', '81,494', '9,893'],
          ['Belén', '75,977', '9,194']
        ] },
        { kind: 'source', html: 'Fuente: INEI, tabulado de indicadores demográficos de Loreto, Censos Nacionales 2025 (referencia, 15 de septiembre de 2025). Los habitantes salen del Cuadro 1, que cuenta censados más omitidos; los niños, del Cuadro 3, que solo divide por edad a los censados, así que las dos columnas no se dividen entre sí. Como referencia, el departamento de Loreto tiene 1,032,771 habitantes y la ciudad de Iquitos tenía 377,609 según el conteo de 2017 que el INEI resume en su cuadro 1.9 de ciudades. No sumamos filas.' },
        { kind: 'two', mt: true,
          leftH3: 'Una ciudad entre ríos',
          left: [
            'Iquitos se extiende por cuatro distritos de la provincia de Maynas: Iquitos, Punchana, Belén y San Juan Bautista. San Juan Bautista, con 154,842 habitantes y 18,997 niños de 6 a 11 años, es el más poblado.',
            'Para un niño de primaria, eso significa que la academia más cercana puede quedar a un buen trecho en motocarro. Con una clase en línea, el trayecto desaparece y el niño empieza en su propia mesa.'
          ],
          rightH3: 'Lo que deja fuera el colegio',
          right: [
            'El Currículo Nacional, el mismo para Loreto que para Lima, no da horas propias a la computación en primaria. Lo digital es la competencia transversal número 28, que cada docente trabaja dentro de sus áreas como puede.',
            'Por eso, en Iquitos como en el resto del país, aprender a programar suele depender de la familia. Nuestras clases acompañan al colegio, en otro horario, y no reemplazan ningún curso escolar.'
          ] }
      ]
    },
    {
      id: 'conexion',
      eyebrow: 'Equipo y conexión',
      h2: '¿Sirven las clases en línea si en Iquitos la conexión no siempre es buena?',
      lede: 'Sirven cuando en casa hay una computadora con teclado y una conexión que sostiene una videollamada de principio a fin. En Loreto ninguna de las dos cosas está garantizada, y lo decimos antes de cobrar nada.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Equipo y acceso en los hogares, 2025 (en porcentaje de hogares)', head: ['Ámbito', 'Hogares con computadora', 'Hogares con internet'], rows: [
          ['Loreto', '22,8', '42,1'],
          ['Total del Perú', '33,9', '56,8']
        ] },
        { kind: 'source', html: 'Tomado del Compendio Estadístico Perú 2026 del INEI, primer tomo, cuadros 11.5 (hogares con al menos una computadora) y 11.6 (hogares con internet), elaborados con la ENAHO de 2025. Abarcan todo Loreto, incluidas comunidades rurales y ribereñas; el INEI no publica el dato de la ciudad sola.' },
        { kind: 'two', mt: true,
          leftH3: 'Las cifras, tal como son',
          left: [
            'Para 2025 el INEI anota que apenas el 22,8 % de los hogares de Loreto tenía una computadora y el 42,1 % tenía internet, frente al 33,9 % y el 56,8 % del país. Dentro de Iquitos es probable que el acceso sea mayor que en las comunidades del río, pero no hay una cifra oficial de la ciudad y no vamos a inventarla.',
            'Lo que sí sabemos es que una clase en vivo exige más que mirar videos: imagen y voz en las dos direcciones durante toda la sesión. Si la conexión se corta cada pocos minutos, el niño pierde el hilo y se desanima.'
          ],
          rightH3: 'Cómo lo comprobamos antes de empezar',
          right: [
            'La clase de prueba es también una prueba técnica. El mentor ve si el audio llega claro, si la imagen se congela y si el niño puede compartir su pantalla. Si la conexión no da, se lo diremos con franqueza en lugar de inscribir a su hijo.',
            'A veces la solución es simple: probar otra hora del día, acercar la computadora al router o usar un cable. Otras veces conviene esperar a tener un servicio más estable. Un celular, en cambio, no sirve para programar con comodidad.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Antes de la prueba.</strong> Encienda la computadora un rato antes y haga una videollamada corta con un familiar para ver si la imagen se sostiene.',
          '<strong>Elija el lugar.</strong> La mesa más cercana al router, lejos del ruido de la calle, con luz de frente y no detrás.',
          '<strong>Audífonos.</strong> Con ellos el niño entiende el inglés del mentor con mucha más claridad, aunque haya ruido en casa.',
          '<strong>Pruebe dos horarios.</strong> Si a la hora habitual la señal falla, la clase puede moverse; el horario es suyo.',
          '<strong>Decida con datos.</strong> Después de la prueba usted sabrá si la conexión aguanta. Si no, esperar también es una buena decisión.'
        ] },
        { kind: 'p', mt: true, html: 'Cuando el equipo y la conexión funcionan, estudiar desde casa tiene ventajas claras para una familia de Iquitos: nadie cruza la ciudad en la tarde, la clase continúa en vacaciones o en los días de lluvia fuerte, y su hijo tiene siempre al mismo mentor. Si quiere detalles de una sesión virtual, lea nuestra <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-online-peru">guía de clases virtuales para niños en el Perú</a>.' }
      ]
    },
    {
      id: 'ingles',
      eyebrow: 'Idioma',
      h2: '¿En qué idioma se dicta cada clase?',
      lede: 'En inglés, todas, sin grupos en castellano. Las sesiones son en vivo y por internet, y el mentor adapta su manera de hablar a cada niño. Para muchas familias de Iquitos eso es parte del atractivo: dos aprendizajes en la misma hora.',
      body: [
        { kind: 'two',
          leftH3: 'Un dato que no existe',
          left: [
            'El EF EPI 2025, el índice de inglés que elabora EF Education First, publica puntajes de inglés para ocho ciudades peruanas, de Lima a Ica, pero Iquitos no está entre ellas, y Loreto tampoco aparece en la lista de regiones. Así que no le daremos un número para Iquitos: no lo hay.',
            'Lo que el índice sí dice es que Lima llega a 555 puntos, en la banda alta, y que el Perú en conjunto obtiene 519, en la moderada. De las otras siete ciudades medidas, cinco quedan por debajo del puntaje nacional, y es razonable esperar que muchos niños iquiteños escuchen poco inglés fuera del colegio.'
          ],
          rightH3: 'Qué hacemos con eso',
          right: [
            'Con los de 6 a 8 años, el inglés entra casi solo: los bloques de colores, los personajes y unas pocas palabras repetidas, como <em>start</em>, <em>turn</em> o <em>again</em>, bastan para avanzar. El mentor muestra en la pantalla todo lo que dice.',
            'Con los de 9 a 12, la sesión de prueba nos indica si le conviene compartir grupo o estudiar a solas con su mentor, que puede ir tan despacio como el niño necesite. Si el idioma lo supera por completo, se lo diremos.'
          ] },
        { kind: 'p', mt: true, html: 'Si le interesa sobre todo el lado del idioma, nuestra página de <a class="ag-inline-link" href="/clases-de-ingles-y-programacion-ninos">clases de inglés y programación para niños</a> cuenta cómo avanzan juntos el vocabulario y el código semana a semana.' }
      ]
    },
    {
      id: 'robotica',
      eyebrow: 'Robótica',
      h2: '¿Robótica o programación para un niño iquiteño?',
      lede: 'Programación primero. Un robot es una máquina que obedece un programa, y lo que se aprende de verdad es a escribir ese programa. Nosotros no usamos ni vendemos kits de robótica.',
      body: [
        { kind: 'p', html: 'Un kit de robótica hay que comprarlo, mantenerlo y reponer sus piezas. El Ministerio de Educación, en su documento sobre robótica educativa, deja claro que el robot es una herramienta para aprender y no la meta de la clase. Lo que dura de esa experiencia es la lógica de dar órdenes en secuencia, repetirlas y decidir según lo que pasa.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Sin piezas que se pierdan', p: 'Todo ocurre en la computadora. No hay motores que se malogren con la humedad ni baterías que reemplazar.' },
          { h3: 'Un robot en pantalla', p: 'Sus hijos dan órdenes a un personaje que recorre un laberinto, evita obstáculos y cuenta sus pasos, tal como lo haría un robot de verdad.' },
          { h3: 'Robótica más adelante', p: 'Si el interés crece, un taller con kit hacia el final de la primaria aprovecha todo lo que el niño ya sabe programar.' }
        ] }
      ]
    },
    {
      id: 'reserva',
      tint: 'tint',
      eyebrow: 'Proyecto con datos de Loreto',
      h2: '¿Cuántos chicos visitaron la Reserva Nacional Allpahuayo Mishana?',
      lede: 'El SERNANP publica las visitas a las áreas naturales protegidas del país, separadas por edad, procedencia y tiempo de estadía. La Reserva Nacional Allpahuayo Mishana está en el distrito de San Juan Bautista, en la misma provincia que Iquitos. Con ese archivo, los chicos de quinto y sexto de primaria descubren que una fila de una tabla no es una persona.',
      body: [
        { kind: 'two',
          leftH3: 'Los datos',
          left: [
            'El conjunto se titula "Frecuencia de visitas turísticas en las Áreas Naturales Protegidas por el estado", es del Servicio Nacional de Áreas Naturales Protegidas por el Estado (SERNANP) y figura en datosabiertos.gob.pe bajo la Open Data Commons Attribution (ODC-By). Su ficha dice que el SERNANP administra 77 áreas nacionales y que 36 reportan actividad turística.',
            'Descargamos el archivo SERNANPdataset_Turismo.csv el 10 de noviembre de 2026. Para Allpahuayo Mishana tiene 123 filas, de enero de 2022 a noviembre de 2023, repartidas en cuatro sectores. Cada fila junta un mes, un sector, una edad y una procedencia (local, nacional o extranjera), y trae tres números: visitas de un día, de 2 a 3 días y de 3 a 30 días.'
          ],
          rightH3: 'La pregunta para la clase',
          right: [
            'El diccionario de datos define "menores" como visitantes de entre 5 y 16 años. La pregunta suena fácil: ¿cuántas visitas de menores tuvo la reserva en esos 23 meses?',
            'La primera idea de casi todos los niños es contar las filas que dicen MENOR. Eso hace la versión 1.'
          ] },
        { kind: 'code', label: 'Versión 1: contar filas', lang: 'Python', code: V1, note: 'Imprime: <code>Young visitors: 14</code>. Lo ejecutamos nosotros con Python 3.' },
        { kind: 'p', mt: true, html: 'Catorce parece poco para dos años, y debería hacer sospechar. El error es que cada fila no es un visitante: es un resumen. Una sola fila puede decir que en un mes llegaron decenas de chicos de Iquitos por un día. Para contar visitas hay que sumar los números que hay dentro de cada fila, en sus tres columnas de estadía. Y ya que estamos, conviene ordenar el resultado en una pequeña tabla: edad en una dirección y procedencia en la otra.' },
        { kind: 'code', label: 'Versión 2: sumar lo que hay dentro de cada fila', lang: 'Python', code: V2, note: '<code>table.get(key, 0)</code> devuelve 0 cuando una combinación no aparece nunca. Por eso INFANTE sale en ceros: en este archivo no hay ninguna fila de infantes para la reserva.' },
        { kind: 'code', label: 'Salida de la versión 2', lang: 'Salida', code: OUT2, note: 'Salida exacta. Cada lista va en el orden local, nacional, extranjero.' },
        { kind: 'p', mt: true, html: 'Las 14 filas de menores esconden 559 visitas: 290 de chicos de la zona, 261 de otras partes del Perú y 8 del extranjero. En total, sumando las cuatro edades, la reserva registró 2,237 visitas en esos 23 meses (suma nuestra de las cifras impresas). Los adultos llegan sobre todo desde la misma región, mientras que casi todas las visitas de mayores de 65 años son de extranjeros. Si un chico de 11 llega a esa última frase leyendo su propia tabla está razonando con datos de verdad.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3, 4], caption: 'Visitas a la Reserva Nacional Allpahuayo Mishana, enero de 2022 a noviembre de 2023 (tabla armada por nosotros con la salida de la versión 2)', head: ['Edad según el SERNANP', 'Local', 'Nacional', 'Extranjera', 'Total'], rows: [
          ['Menores (5 a 16 años)', '290', '261', '8', '559'],
          ['Adultos (17 a 65 años)', '1,032', '230', '351', '1,613'],
          ['Adultos mayores (más de 65)', '5', '7', '53', '65'],
          ['Infantes (menos de 5)', '0', '0', '0', '0']
        ] },
        { kind: 'source', html: 'Datos: SERNANP, archivo SERNANPdataset_Turismo.csv publicado en datosabiertos.gob.pe bajo ODC-By, fecha de corte 27 de mayo de 2024. Las sumas, la tabla y la redacción son nuestras. Las cifras son visitas registradas, no personas distintas: alguien que fue dos veces cuenta dos veces.' },
        { kind: 'ol', mt: true, items: [
          '<strong>De 6 a 8 años, con fichas.</strong> Hacer tres montoncitos de semillas o tapitas que representen tres días de visitas. ¿Hay "tres visitantes" o hay que contar lo que tiene cada montón?',
          '<strong>De 8 a 10 años, con Scratch.</strong> Guardar en una lista los números de cinco filas y hacer que un personaje diga cuántas filas son y cuánto suman. ¿Por qué no coinciden?',
          '<strong>De 10 a 12 años, con Python.</strong> Ejecutar la versión 1, explicar con sus palabras por qué da 14, y escribir su propia versión 2.',
          '<strong>Un reto para curiosos.</strong> El diccionario dice que una columna cuenta estadías "de 2 a 3 días" y otra "de 3 hasta 30 días". ¿En qué columna debería ir alguien que se quedó exactamente 3 días? Cuando dos categorías se pisan, hay que preguntar a quien hizo los datos.'
        ] }
      ]
    },
    {
      id: 'reloj',
      eyebrow: 'Horario',
      h2: '¿Qué hora es para el mentor cuando en Iquitos es de tarde?',
      lede: 'De madrugada del día siguiente. Iquitos marca la hora oficial peruana, y la India va diez horas y media adelante en cualquier época del año; la tabla lo muestra con ejemplos.',
      body: [
        { kind: 'table', numCols: [], caption: 'Ejemplos de equivalencia entre la hora de Iquitos y la del mentor (solo conversiones, no turnos)', head: ['Reloj de Iquitos (hora de Perú)', 'Reloj del mentor (hora de la India)', '¿Cambia la fecha?'], rows: [
          ['6:00 a. m.', '4:30 p. m.', 'No'],
          ['8:30 a. m.', '7:00 p. m.', 'No'],
          ['10:30 a. m.', '9:00 p. m.', 'No'],
          ['2:00 p. m.', '12:30 a. m.', 'Sí, ya es mañana allá'],
          ['4:00 p. m.', '2:30 a. m.', 'Sí, ya es mañana allá'],
          ['7:30 p. m.', '6:00 a. m.', 'Sí, ya es mañana allá']
        ] },
        { kind: 'source', html: 'Base: la zona America/Lima (tzdata) mantiene al Perú en UTC-5 durante todo el año, sin cambio estacional desde 1994; la hora oficial la difunde el INACAL. La zona Asia/Kolkata mantiene a la India en UTC+5:30. La diferencia, diez horas y media, no varía.' },
        { kind: 'p', mt: true, html: 'Usted reserva mirando su propio reloj; al mentor le llega la hora ya traducida a la suya. Como en ninguno de los dos países se adelanta ni se atrasa el reloj, lo acordado se mantiene igual de un mes a otro. Si la señal de internet es más estable a cierta hora del día, puede elegir justamente esa.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progreso',
    h2: '¿Qué va logrando un niño, etapa por etapa?',
    lede: 'Cinco etapas que definimos nosotros para la primaria. Sirven para ubicar a su hijo y para que usted vea avances concretos.',
    table: { caption: 'Etapas de aprendizaje para niños de 6 a 12 años, según nuestro propio esquema', head: ['Etapa', 'Edad en que suele llegar', 'Muestra que puede'], rows: [
      ['1. Seguir órdenes', '6 a 7 años', 'llevar a un personaje hasta una meta con una secuencia de bloques'],
      ['2. Contar con bucles', '7 a 9 años', 'usar una repetición en vez de copiar diez bloques iguales'],
      ['3. Elegir caminos', '8 a 10 años', 'programar un laberinto donde el personaje elige según lo que encuentra'],
      ['4. Python tecleado', '9 a 11 años', 'teclear unas líneas de Python y adivinar la salida antes de correrlas'],
      ['5. Leer una tabla', '10 a 12 años', 'distinguir filas de visitantes en datos reales, como los de Allpahuayo Mishana, y armar su propia tabla']
    ] },
    left: { h3: 'Para madres y padres', ps: [
      'Lo que pide el proyecto de la reserva es entender qué cuenta cada número antes de sumarlo.',
      'Medimos el avance por lo que el niño construye y defiende, nunca por el tiempo conectado.'
    ] },
    right: { h3: 'Para conversar en casa', ps: [
      'Pídale a su hijo que le explique la diferencia entre 14 y 559 en el proyecto de la reserva.',
      'Si la explica con sus palabras, entendió algo que muchos adultos confunden.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: '¿Qué otros cursos hay para niños de Iquitos?',
    lede: 'Nueve más, ordenados por edad. Todos con mentor en vivo, en inglés, en grupo o uno a uno.',
    bands: [
      { num: 'I', h3: 'Los primeros', sub: 'De 5 a 12 años', courses: [
        { code: 'IQT / P / 01', slug: 'scratch-programming-complete-course', title: 'Scratch completo', blurb: 'Entre los 6 y los 12 años: de cero a un juego terminado en tres o cuatro meses.' },
        { code: 'IQT / P / 02', slug: 'abacus-mental-maths-course-for-kids', title: 'Ábaco', blurb: 'Entre los 5 y los 10 años: cuentas, valor posicional y cálculo mental.' },
        { code: 'IQT / P / 03', slug: 'microsoft-office-kids-mastery', title: 'Office para niños', blurb: 'Entre los 7 y los 12 años: Word, PowerPoint y Excel para las tareas del colegio.' }
      ] },
      { num: 'II', h3: 'Juegos y apps', sub: 'De 7 a 12 años', courses: [
        { code: 'IQT / J / 01', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft programado', blurb: 'Entre los 7 y los 12 años: un agente robot que construye lo que el niño programa.' },
        { code: 'IQT / J / 02', slug: 'game-development-masterclass-for-kids', title: 'Hacer videojuegos', blurb: 'Entre los 8 y los 12 años: Scratch, Roblox y Minecraft en un solo camino.' },
        { code: 'IQT / J / 03', slug: 'block-coding-app-development-masterclass', title: 'Mi primera app', blurb: 'Entre los 8 y los 12 años: una aplicación de celular hecha con bloques.' }
      ] },
      { num: 'III', h3: 'Código y datos', sub: 'De 8 a 14 años', courses: [
        { code: 'IQT / C / 01', slug: 'python-ai-kids-masterclass', title: 'Python e IA', blurb: 'Entre los 9 y los 12 años: el primer lenguaje escrito, con juegos y datos.' },
        { code: 'IQT / C / 02', slug: 'ai-literacy-for-kids-course', title: 'Cómo piensa una IA', blurb: 'Entre los 8 y los 14 años: qué hay detrás de una respuesta de IA y cuándo falla.' },
        { code: 'IQT / C / 03', slug: 'kids-ai-web-development-course', title: 'Una web propia', blurb: 'Entre los 9 y los 12 años: HTML y CSS hasta publicar su página.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Funcionamiento',
    h2: '¿Cómo se organizan las clases para una familia de Iquitos?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Mañana', l: 'Para el turno tarde, o cuando la señal es más estable.' },
      { time: 'Tarde', l: 'Después del colegio y del almuerzo, con calma.' },
      { time: 'A medida', l: 'Uno a uno, en días y horas pactados con el mentor.' }
    ],
    cells: [
      { h3: 'Mentor fijo', p: 'Acompaña a su hijo todo el curso y conoce su ritmo.' },
      { h3: 'Inglés con paciencia', p: 'Todo se muestra en pantalla; el niño tiene tiempo para responder.' },
      { h3: 'Programa el niño', p: 'El mentor guía con preguntas; el código lo escribe su hijo.' },
      { h3: 'Grupos parejos', p: 'Niños de edades parecidas, nunca 1° con 6° de primaria.' },
      { h3: 'Resumen para casa', p: 'Qué se trabajó y qué viene, en pocas líneas.' },
      { h3: 'Grupo o uno a uno', p: 'Un grupo de 15 a 20, o una clase solo para su hijo.' }
    ]
  },

  projectsH2: '¿Qué construyen los alumnos que continúan?',
  projectsLede: 'Los que empiezan en primaria y siguen terminan publicando proyectos reales. Algunos están aquí abajo; el resto, en <a class="ag-inline-link" href="/student-labs">Student labs</a>, en inglés.',
  reviewsLede: 'Opiniones de familias y alumnos en Google, sin cambios, en inglés.',

  fees: {
    h2: 'Precios para familias de Iquitos',
    lede: 'Se paga mes a mes. El monto se fija en la moneda de Estados Unidos y en esa moneda llega a su tarjeta; quien emitió la tarjeta hace el cambio según la tasa que maneje, de modo que el cargo puede variar un poco.',
    free: ['Clase de prueba en vivo', 'Revisión de audio, imagen y conexión', 'Sin tarjeta'],
    group: ['Quince a veinte niños de edad cercana', 'El mismo mentor durante el curso', 'Dos clases en vivo por semana', 'Mensual, sin contrato largo'],
    one: ['Solo su hijo con el mentor', 'Ritmo y proyectos propios', 'Horario elegido por usted']
  },

  faq: {
    eyebrow: 'Preguntas desde Iquitos',
    h2: 'Programación para niños en Iquitos: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No: el único idioma de clase es el inglés, siempre en directo y en línea. Muchas familias lo ven como una ganancia doble, porque su hijo programa y a la vez practica el idioma con un motivo concreto. Si el niño no entiende, el mentor baja el ritmo y busca una palabra más fácil. El EF EPI 2025 sitúa a Lima en la banda alta de inglés; para Iquitos no publica dato, por eso la clase de prueba revisa también el idioma.' },
      { q: '¿Hay clases de programación para niños en Iquitos?', a: 'Sí, en línea y en vivo. Da igual si la familia vive en Punchana, Belén, San Juan Bautista o el distrito de Iquitos: el niño entra a la videollamada desde su mesa, con su mentor de siempre, en el horario acordado.' },
      { q: '¿Qué pasa si se corta el internet durante la clase?', a: 'Si es un corte corto, el niño vuelve a entrar y el mentor retoma donde quedaron. Si la conexión falla seguido, se nota en la clase de prueba, y se lo diremos antes de que pague nada: a veces basta cambiar de horario o acercarse al router, y a veces conviene esperar.' },
      { q: '¿Qué equipo necesita mi hijo?', a: 'Un equipo de escritorio o portátil con teclado, cámara, micro y audífonos, más una conexión que sostenga una videollamada. El INEI registra que en 2025 el 22,8 % de los hogares de Loreto tenía computadora. Programar desde un teléfono resulta incómodo.' },
      { q: '¿Desde qué edad?', a: 'A partir de los 6, edad con la que el MINEDU ubica a un niño en 1° de primaria. Los de 6 a 8 trabajan con lógica y bloques; desde los 9, la mayoría escribe Python.' },
      { q: '¿Hace falta que mi hijo sepa inglés?', a: 'No. Basta con que entienda saludos y palabras simples. Cuando la prueba muestra que el inglés lo supera, lo decimos claramente: puede convenir dejar pasar unos meses, o pasar a clases uno a uno.' },
      { q: '¿Enseñan robótica en Iquitos?', a: 'Enseñamos la programación que hace funcionar a un robot; no trabajamos con kits ni los ofrecemos. Para el MINEDU, el robot escolar es un recurso y no un fin, y las ideas de programación que su hijo domine aquí funcionan igual frente a cualquier kit.' },
      { q: '¿Cuándo pueden ser las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. La India va diez horas y media adelante de Iquitos todo el año: las 8:30 a. m. de Iquitos son las 7:00 p. m. del mentor.' },
      { q: '¿En qué moneda se paga?', a: 'En dólares estadounidenses, cada mes, con tarjeta, y su banco hace la conversión. La clase de prueba no tiene costo ni pide tarjeta.' },
      { q: '¿Las clases tienen validez para el colegio?', a: 'No. No tenemos vínculo con el MINEDU, la UGEL, el SERNANP ni ningún colegio de Iquitos, y no damos notas. Quien completa un curso se lleva un certificado de finalización emitido por nosotros, sin valor oficial.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más páginas',
    h2: 'Otras lecturas para familias de Iquitos',
    lede: 'Para comparar opciones con calma.',
    items: [
      { href: '/curso-de-python-para-ninos-peru', label: 'Python para niños en Perú', p: 'El paso después de los bloques, de 9 a 12 años.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'El índice de nuestras páginas peruanas, en inglés.' },
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch coding classes for kids', p: 'En inglés: así arrancan los más chicos.' },
      { href: '/ai-classes-for-kids', label: 'AI classes for kids', p: 'Inteligencia artificial para primaria (en inglés).' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Edades mínimas de las herramientas de IA (en inglés).' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Cómo es una clase con nosotros (en inglés).' }
    ]
  },

  start: {
    h2: 'Haga la clase de prueba desde Iquitos',
    lede: 'El mentor saluda a su hijo con un inglés muy simple, revisa que audio, imagen y conexión funcionen, y le propone un reto corto en la pantalla. Luego le proponemos un curso y una modalidad concretos, o le aconsejamos esperar si es lo más prudente.',
    readFirst: 'Dos páginas en inglés por si quiere leer antes: <a class="ag-inline-link" href="/how-we-teach">How we teach</a>, sobre nuestro método, y <a class="ag-inline-link" href="/courses">All courses</a>, con todos los temarios.',
    note: 'Las clases son en vivo, por internet y en inglés, con mentores en la India. Por WhatsApp puede escribirnos en castellano.',
    formNote: 'Gratis, sin tarjeta, sin obligación de seguir.'
  },

  footer: {
    cols: [
      { h4: 'Para empezar', links: [
        { href: '/courses/reasoning-and-readiness-course-for-young-thinkers', label: 'Razonar antes de programar' },
        { href: '/courses/kids-coding-blocks-masterclass', label: 'Programación con bloques' },
        { href: '/courses/roblox-game-coding-for-kids-lua-course', label: 'Juegos en Roblox' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Para familias', links: [
        { href: '/ai-projects-for-kids', label: 'Proyectos de IA' },
        { href: '/python-for-10-year-olds', label: 'Python a los 10' },
        { href: '/student-labs', label: 'Proyectos de alumnos' },
        { href: '/how-we-teach', label: 'Nuestro método' }
      ] }
    ],
    bottomRight: 'Una fila no es un visitante: sume lo que lleva dentro'
  },

  personalityCss: `
.ag-root.ag-priq .ag-hero h1 { letter-spacing: -0.01em; max-width: 22ch; }
.ag-root.ag-priq .ag-capsule { border-left-width: 5px; border-radius: 3px; }
.ag-root.ag-priq .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-priq .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-priq .ag-code-head b { letter-spacing: 0.025em; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (tabulado Indicadores demográficos de Loreto, Cuadros 1 and 3) and Perfil Sociodemográfico 2017 (Cuadro N° 1.9); INEI Compendio Estadístico Perú 2026 (cuadros 11.5 and 11.6, ENAHO 2025); EF EPI 2025 Peru page (no Iquitos score); MINEDU CNEB competency 28, Edades normativas, DITE robotics paper; tzdata America/Lima. Data: SERNANP, Frecuencia de visitas turísticas en las Áreas Naturales Protegidas por el estado, ODC-By. Example code, tables and stage plan are our own.',
    localProject: 'How many young visitors did the Reserva Nacional Allpahuayo Mishana have? An original Python project on the SERNANP protected-area visits file (ODC-By; 123 rows for the reserve, January 2022 to November 2023): Version 1 counts rows marked MENOR (14); Version 2 adds the three stay-length columns inside each row and cross-tabulates age by origin (MENOR 559 visits: 290 local, 261 national, 8 foreign). Lesson family: a row is not a visitor.',
    requiredMentions: ['SERNANPdataset_Turismo.csv', 'Young visitors: 14', 'MENOR [290, 261, 8] total 559', 'ADULTO [1032, 230, 351] total 1613', '59,899', '18,997', 'el 22,8 % de los hogares de Loreto', 'Iquitos no está entre ellas', 'Una fila no es un visitante: sume lo que lleva dentro'],
    sources: [
      { claim: 'Loreto, Maynas and Iquitos district populations, and children aged 6 to 11 by district, 2025.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/16/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Iquitos city population, 2017 census.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1539/libro.pdf' },
      { claim: 'Households with a computer and with internet in Loreto and Peru, 2025.', url: 'https://cdn.www.gob.pe/uploads/document/file/10884842/8776138-tomo-1-peru-compendio-estadistico-2026%282%29.pdf' },
      { claim: 'EF EPI 2025 city list for Peru, without Iquitos.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'SERNANP visits by protected area, age band, origin and stay, ODC-By.', url: 'https://www.datosabiertos.gob.pe/dataset/frecuencia-de-visitas-tur%C3%ADsticas-en-las-%C3%A1reas-naturales-protegidas-por-el-estado-%E2%80%93-servicio' },
      { claim: 'Robotics as a means, not the goal.', url: 'https://cdn.www.gob.pe/uploads/document/file/8182643/6842169-minedu-robotica.pdf' },
      { claim: 'Peru UTC-5 with no DST since 1994; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'An English score for Iquitos or Loreto: EF EPI 2025 publishes none, so the page prints none.',
      'A household-computer or internet share for Iquitos city alone, or a bandwidth figure: INEI publishes the department only; nothing invented.',
      'Unique visitors at Allpahuayo Mishana: the file counts visits, and the page says so.',
      'A distance from Iquitos to the reserve: not in the data, not printed.',
      'Spanish-language teaching: refused; every class is live, online and in English only.',
      'Robot kits or hardware: none.',
      'Any connection with MINEDU, the UGEL, SERNANP or any Iquitos school: none.'
    ]
  }
};
