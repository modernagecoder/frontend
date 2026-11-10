// SHIP: district (kids, year-round) | Lurín: live online learning is already familiar here; add coding for kids | lists: remove() deletes only the first match; count(), a while loop and an in check
'use strict';
// Clases de programación para niños en Lurín, Lima (ag- Spanish district door, Peru cluster row PE218, P6, hubGroup lima).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md
// (rule "City and district pages").
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only; no soles, no typed figure.
// Angle: the parent in Lurín, where the municipality itself has promoted live remote courses (computing on Zoom) and
// virtual English, who wants a year-round coding class for a child of 6 to 12. Spine: the 2025 census (the lowest omitted
// share among these districts) and single ages; the municipality's remote computing course, virtual English programme and
// new Casa de la Cultura y Biblioteca; INEI's ladder of digital skills (only 12.1% have written programs); what a live
// class adds to a recorded one; one original Python lesson on list.remove(); age path with adolescentes; clocks.
// No income or class assumptions about the district.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/clases-de-programacion-para-ninos-
// lurin-lima/, gob.pe notes fetched 10 November 2026 with curl -sL -A "Mozilla/5.0"; quotes grepped in the raw text):
//  INEI, Censos Nacionales 2025, Lima Metropolitana workbook (inei-censos2025-ind_27-lima-metropolitana.xlsx, 856800 bytes,
//    updated "al 15 de julio del año 2026"). CUADRO Nº 1: "DISTRITO LURÍN | 132149 | 66210 | 65939 | 128697 | ... | 3452".
//    CUADRO Nº 3: "DISTRITO LURÍN | 128697 | 10017 | 13554 | 13593 | 25766 | 31889 | 21004 | 12874". CUADRO Nº 2: 6 años
//    1983, 7 años 2064, 8 años 2310, 9 años 2406, 10 años 2403, 11 años 2388, 12 años 2328; rural 0.
//  Municipalidad Distrital de Lurín on gob.pe (institucion/munilurin):
//    n-780244 (20 Jun 2023): "Curso De Computación Y Ofimática"; "Modalidad Remoto: clases en vivo a través de zoom";
//    "Duración: 12 sesiones". The partner institute is not named on our page.
//    n-877107 (4 Dec 2023): "Educación - Programa virtual de Ingles"; "BECAS DE ESTUDIO Y BONOS EDUCATIVOS para el estudio
//    del idioma inglés en forma virtual dirigido a niños, jóvenes u adultos". The partner company is not named on our page.
//    n-945119 (23 Apr 2024): Día del Libro; "el inicio oficial de la construcción de nuestra próxima Casa de la Cultura y
//    Biblioteca Municipal". Officials' and guests' names left out.
//    n-1234015 (10 Jul 2025): "El distrito de Lurín cuenta con una Casa de la Cultura y Biblioteca Municipal, un espacio
//    diseñado para el beneficio de las familias, jóvenes, niños y de las futuras generaciones".
//  INEI, Estadísticas de las TIC en los Hogares, II Trimestre 2026 (inei_tic_iit2026.txt), population aged 15 and over:
//    "el 93,7% copió o movió archivos o carpetas"; "el 73,7% aplicó fórmulas aritméticas simples en hojas de cálculo";
//    "Solo el 47,7% de la población descargó, instaló y configuró nuevo software"; "apenas el 12,1% redactó programas
//    informáticos utilizando lenguajes de programación especializados". Households: "en Lima Metropolitana, el 84,7%".
//  EF EPI 2025 (MARKET 1.3): Lima 555 (high from 550).
//  CNEB (FACTS 39): secundaria without a computing area.
//  Time (timezone.tsv): America/Lima UTC-5, no DST since 1994; Asia/Kolkata UTC+5:30; India 10 h 30 min ahead.
// Our own calculations (python3 -I): 13554 / 128697 = 10.5 %; 13593 / 128697 = 10.6 %; 132149 / 10141775 = 1.3 %;
//    3452 / 132149 = 2.6 % omitted; 13554 / 818096 = 1.7 %; 1983+2064+2310+2406+2403+2388+2328 = 15882 aged 6 to 12.
// Our own example (canasta.py in the src-pages folder), run with python3 -I, exact output:
//    After one remove: ['lucuma', 'mango', 'banana', 'mango'] / Mangoes still there: 2 /
//    After the loop: ['lucuma', 'banana'] / No kiwi to remove
// Neighbouring districts named in plain text only (Pachacámac, Villa El Salvador, Punta Hermosa).
// Lesson family: list methods; remove() deletes only the first match, count() checks, while ... in removes all, in guards.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  "basket = ['mango', 'lucuma', 'mango', 'banana', 'mango']",
  '',
  "basket.remove('mango')",
  "print('After one remove:', basket)",
  "print('Mangoes still there:', basket.count('mango'))",
  '',
  "while 'mango' in basket:",
  "    basket.remove('mango')",
  "print('After the loop:', basket)",
  '',
  "if 'kiwi' in basket:",
  "    basket.remove('kiwi')",
  'else:',
  "    print('No kiwi to remove')"
].join('\n');

const OUT = [
  "After one remove: ['lucuma', 'mango', 'banana', 'mango']",
  'Mangoes still there: 2',
  "After the loop: ['lucuma', 'banana']",
  'No kiwi to remove'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'lima', label: 'Programación para niños en Lurín' },
  slug: 'clases-de-programacion-para-ninos-lurin-lima',
  code: 'prlu',
  accent: '#5B6C00',
  accentRationale: 'Lurín: a valley-field olive #5B6C00, the colour of the green strip the Lurín river keeps alive south of Lima, lighter and yellower than the other Lima district doors; allocated in alloc.tsv (contrast 4.75 on the paper #FBF8F2) and checked above 4.5 on every paper tint by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Clases de programación para niños en Lurín',
  title: 'Clases de programación para niños en Lurín, Lima',
  description: 'Clases de programación para niños de 6 a 12 años en Lurín, Lima: en vivo y en inglés por internet, durante todo el año, en grupo o individuales y cuando usted elija.',
  ogDescription: 'Programación en vivo para niños de Lurín, desde casa: el censo 2025 del distrito, por qué tan pocos adultos han escrito un programa según el INEI y un reto en Python con una canasta de frutas.',
  twitterDescription: 'Clases de programación en vivo y en inglés para niños de Lurín, por internet y en el horario que la familia decida.',
  pageName: 'Clases de programación para niños en Lurín',
  webPageDescription: 'Guía para familias de Lurín que buscan clases de programación para niños de 6 a 12 años durante todo el año: el distrito en los Censos Nacionales 2025 del INEI, los cursos remotos y el programa virtual de inglés que difundió la municipalidad, las habilidades digitales de la población según el INEI, la diferencia entre una clase en vivo y una grabada, y un ejercicio de Python con listas escrito por nosotros.',
  courseDescription: 'Clases en vivo de programación para niños de 6 a 12 años de Lurín, dictadas solo en inglés por internet: Scratch, Python, juegos y proyectos de IA, en grupo o individuales, sin pausa durante el año y en el horario que la familia prefiera.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Programación para niños, Lurín',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#lurin', label: 'Lurín en cifras' },
    { href: '#remoto', label: 'Clases remotas' },
    { href: '#habilidades', label: 'Habilidades digitales' },
    { href: '#canasta', label: 'Reto en Python' },
    { href: '#hora-lurin', label: 'Horario' }
  ],
  eyebrow: 'Lima Sur &middot; Lurín &middot; Niños de 6 a 12 años',
  h1: 'Clases de programación para niños en Lurín',
  lede: 'En Lurín las clases por internet no son una novedad: la propia municipalidad ha difundido cursos de computación en vivo por Zoom y becas para estudiar inglés de forma virtual. Programar es el paso siguiente para un niño. Aquí verá cuántos chicos tiene el distrito según el censo de 2025, qué dice el INEI sobre las habilidades digitales, en qué se diferencia una clase en vivo de una grabada y un reto en Python.',
  secondaryCta: { href: '#canasta', label: 'Ver el reto de la canasta' },
  wa: 'Hola Modern Age Coders, somos de Lurín y buscamos clases de programación para nuestro hijo o hija. ¿Podemos reservar una clase gratis?',
  heroNote: 'Enseñando en vivo desde 2020 &middot; más de 10,000 estudiantes de varios países &middot; cada niño con su mentor, siempre en inglés',
  spec: [
    ['Edad', 'De 6 a 12 años; adolescentes en otro grupo'],
    ['Modalidad', 'En vivo por internet, desde casa'],
    ['Calendario', 'Todo el año, sin cortes de temporada'],
    ['Idioma', 'Inglés en cada clase'],
    ['Formato', 'Grupo de quince a veinte o a solas'],
    ['Para empezar', 'Clase gratis, sin tarjeta']
  ],
  capsuleQ: 'Respuesta corta',
  capsule: 'Sí. Modern Age Coders enseña programación a niños de Lurín de 6 a 12 años en sesiones en vivo, dictadas en inglés, y continúan por internet a lo largo de los doce meses. No son videos grabados: un mentor desde la India está conectado con su hijo, le habla con claridad y a su ritmo, y mira su pantalla mientras programa. Se empieza con Scratch y bloques y se pasa a Python, juegos y proyectos de IA. La familia define si prefiere grupo o clases a solas y en qué momento de la semana, y la sesión inicial va por nuestra cuenta.',

  picks: {
    eyebrow: 'Primeros cursos',
    h2: '¿Cuál es un buen primer curso de programación para un niño de Lurín?',
    lede: 'Tres cursos para empezar, ordenados por edad y por cuánto texto puede manejar el niño.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'PRLU / 01', title: 'Programación con bloques', alt: 'Imagen del curso de programación con bloques para niños', note: 'Para el primer contacto con la programación, con chicos agrupados por edades: piezas de colores que se encajan para armar juegos y animaciones.' },
      { course: 'python-ai-kids-masterclass', code: 'PRLU / 02', title: 'Python con IA', alt: 'Imagen del curso de Python e IA para niños', note: 'Para quien ya cumplió 9. Listas, bucles y decisiones, como en la canasta de frutas que verá abajo, y más adelante algún proyecto con IA.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', code: 'PRLU / 03', title: 'Crear juegos con ayuda de la IA', alt: 'Imagen del curso de vibe coding para niños', note: 'De 8 a 12 años. El niño usa la IA como asistente para crear juegos en Scratch, pero revisa y entiende cada paso; la IA propone, el niño decide.' }
    ]
  },

  sections: [
    {
      id: 'lurin',
      eyebrow: 'Censo 2025',
      h2: '¿Cuántos niños hay en Lurín según el censo de 2025?',
      lede: 'El INEI censó en Lurín a 13,554 niños de 6 a 11 años y a 13,593 adolescentes de 12 a 17, en un distrito de 132,149 habitantes. Es, además, uno de los distritos de Lima donde el censo dejó a menos gente sin registrar.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Lurín en los Censos Nacionales 2025 (INEI)', head: ['Dato', 'Lurín'], rows: [
          ['Habitantes en total', '132,149'],
          ['Personas censadas', '128,697'],
          ['Personas omitidas', '3,452 (2,6 %, cálculo nuestro)'],
          ['Primera infancia (0 a 5)', '10,017'],
          ['Edad de primaria (6 a 11)', '13,554'],
          ['Edad de secundaria (12 a 17)', '13,593'],
          ['Mayores de 60', '12,874']
        ] },
        { kind: 'source', html: 'Datos tomados por nosotros de la hoja de cálculo de Lima Metropolitana que el INEI publicó con el censo de 2025 (cuadros 1 y 3, actualizada el 15 de julio de 2026). Quien no fue censado no tiene edad asignada.' },
        { kind: 'two', mt: true,
          leftH3: 'Niño por niño, de 6 a 12',
          left: [
            'Según el cuadro 2 del censo, en Lurín viven 1,983 chicos con 6 cumplidos, 2,064 de 7, 2,310 de 8, 2,406 de 9, 2,403 de 10, 2,388 de 11 y 2,328 de 12. Entre todos, 15,882 chicos de 6 a 12 años, sumados por nosotros.',
            'Las edades de 9 a 11 años, el momento en que la mayoría empieza a escribir código, reúnen a más de siete mil niños.'
          ],
          rightH3: 'Lurín dentro de Lima',
          right: [
            'Lurín aloja al 1,3 % de los limeños, pero al 1,7 % de los chicos de la capital que están en edad de primaria. Dentro del distrito, el 10,5 % de los censados tiene de 6 a 11 años y el 10,6 %, de 12 a 17 (cálculos nuestros).',
            'Toda la población censada figura en área urbana. Son conteos por edad; no dicen nada sobre las familias y no los usamos para hacer suposiciones.'
          ] },
        { kind: 'p', mt: true, html: 'Lurín tiene como vecinos a Pachacámac, Villa El Salvador y Punta Hermosa. Para una clase en línea, eso no importa: la distancia entre su casa y la del mentor es la misma estén donde estén.' }
      ]
    },
    {
      id: 'remoto',
      eyebrow: 'Aprender por internet',
      h2: '¿Qué cursos en línea ha difundido la Municipalidad de Lurín?',
      lede: 'En sus notas de gob.pe, la municipalidad ha promovido al menos dos formaciones a distancia: un curso de computación y ofimática con clases en vivo por Zoom, en 2023, y un programa de becas para estudiar inglés de forma virtual, también en 2023.',
      body: [
        { kind: 'table', numCols: [], caption: 'Formación y cultura en notas de la Municipalidad de Lurín', head: ['Fecha', 'Iniciativa', 'Lo que dice la nota'], rows: [
          ['20 de junio de 2023', 'Curso de Computación y Ofimática', 'Becas; "Modalidad Remoto: clases en vivo a través de zoom"; 12 sesiones'],
          ['4 de diciembre de 2023', 'Programa virtual de inglés', 'Becas y bonos para estudiar inglés en forma virtual, para niños, jóvenes o adultos'],
          ['23 de abril de 2024', 'Día del Libro', 'Anuncio del inicio de obras de la Casa de la Cultura y Biblioteca Municipal'],
          ['10 de julio de 2025', 'Casa de la Cultura y Biblioteca Municipal', 'Un espacio para "familias, jóvenes, niños y de las futuras generaciones"']
        ] },
        { kind: 'source', html: 'Fuente: Municipalidad Distrital de Lurín, notas en gob.pe/institucion/munilurin con las fechas indicadas, leídas el 10 de noviembre de 2026. No nombramos a las instituciones privadas que colaboraron con esos cursos ni a las autoridades. Modern Age Coders no tiene relación con la municipalidad ni con esos programas.' },
        { kind: 'p', mt: true, html: 'Las notas muestran algo práctico para las familias de Lurín: aprender en vivo por internet ya es una modalidad conocida en el distrito, para la computación y para el inglés. Nuestras clases para niños juntan las dos cosas, programación e inglés, con la misma lógica: un docente real, conectado a la misma hora que el alumno.' },
        { kind: 'p', html: 'La nueva Casa de la Cultura y Biblioteca Municipal es otro recurso para los niños del distrito, con libros y actividades presenciales. Una idea nuestra para combinar: que su hijo lea en la biblioteca sobre un tema que le guste, los animales, el espacio, el fútbol, y luego lo convierta en un juego de preguntas en Scratch o en Python.' }
      ]
    },
    {
      id: 'habilidades',
      eyebrow: 'Habilidades digitales',
      h2: '¿Cuántas personas en el Perú saben programar?',
      lede: 'Pocas. Según el INEI, en el segundo trimestre de 2026 apenas el 12,1 % de la población de 15 años a más dijo haber escrito programas en un lenguaje de programación, frente al 93,7 % que sabe copiar o mover archivos.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Habilidades informáticas de la población de 15 años a más, Perú, II trimestre de 2026', head: ['Actividad', 'Porcentaje'], rows: [
          ['Copió o movió archivos o carpetas', '93,7 %'],
          ['Aplicó fórmulas aritméticas simples en una hoja de cálculo', '73,7 %'],
          ['Descargó, instaló y configuró software nuevo', '47,7 %'],
          ['Escribió programas en un lenguaje de programación', '12,1 % del total']
        ] },
        { kind: 'source', html: 'Fuente: apartado 4, competencias informáticas, del boletín del INEI sobre TIC en los hogares (segundo trimestre de 2026, ENAHO). Es una cifra nacional; el INEI no la publica por distrito.' },
        { kind: 'two', mt: true,
          leftH3: 'Una escalera de habilidades',
          left: [
            'La tabla se lee como una escalera: casi todos dominan lo básico, tres de cada cuatro manejan una fórmula, menos de la mitad instala programas y solo uno de cada ocho ha escrito código.',
            'El último peldaño es el que hace la diferencia: quien programa no solo usa la tecnología, la construye.'
          ],
          rightH3: 'Empezar de niño',
          right: [
            'Un niño de Lurín que aprende a programar en primaria llega a la adolescencia con una habilidad que la mayoría de adultos del país no tiene, según estos datos del INEI.',
            'No es una promesa de empleo ni de notas: es una forma de pensar, ordenada y comprobable, que le sirve para cualquier cosa que estudie después.'
          ] },
        { kind: 'p', mt: true, html: 'El colegio cubre una parte del camino. El CNEB trabaja la competencia digital de forma transversal, pero no tiene un área de computación con horas propias en primaria ni en secundaria. Las clases de programación llenan ese hueco fuera del horario escolar.' }
      ]
    },
    {
      id: 'en-vivo',
      eyebrow: 'En vivo o grabado',
      h2: '¿Es lo mismo una clase en vivo que un curso grabado?',
      lede: 'No. Un video explica lo mismo a todos; una clase en vivo responde a lo que su hijo está haciendo en ese momento. Para un niño que aprende a programar, esa diferencia es enorme.',
      body: [
        { kind: 'table', numCols: [], caption: 'Clase en vivo y video grabado, comparados (comparación nuestra)', head: ['Aspecto', 'Clase en vivo', 'Video grabado'], rows: [
          ['Cuando el código falla', 'El mentor ve la pantalla y pregunta qué pasó', 'El niño se queda solo con el error'],
          ['Ritmo', 'Se ajusta a cada niño', 'Igual para todos'],
          ['Inglés', 'Conversación real, con preguntas y respuestas', 'Solo escuchar'],
          ['Constancia', 'Hay una hora fija con alguien esperando', 'Depende de la fuerza de voluntad'],
          ['Seguimiento', 'Notas a la familia sobre el avance', 'Ninguno']
        ] },
        { kind: 'p', mt: true, html: 'Todas nuestras clases son en vivo y en inglés. El mentor comparte su pantalla para explicar y luego mira la del niño mientras programa. Cuando algo falla, no da la respuesta: pregunta "What did you expect?" y "What happened instead?", y deja que el niño encuentre el problema. Esa conversación, imposible con un video, es la que enseña a pensar.' },
        { kind: 'p', html: 'Sobre el idioma: si su hijo todavía no habla inglés, empieza igual. El mentor usa frases cortas, repite con otras palabras y se apoya en la pantalla. En el EF EPI 2025 Lima alcanzó 555 puntos, dentro del nivel alto, y la conversación semanal con el mentor es práctica oral real. Más en <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a>.' }
      ]
    },
    {
      id: 'canasta',
      tint: 'tint',
      eyebrow: 'Reto en Python',
      h2: '¿Por qué remove no borra todos los mangos de la lista?',
      lede: 'Porque <code>remove</code> borra solo el primero que encuentra. Lo pensamos para chicos de quinto o sexto grado: una canasta de frutas peruanas en una lista y la pregunta de cómo sacar todos los mangos sin que quede ninguno.',
      body: [
        { kind: 'code', label: 'La canasta de frutas', lang: 'Python', code: PY, note: 'Escribimos <code>lucuma</code> sin tilde para que el ejemplo funcione igual en cualquier teclado; Python también acepta <code>\'lúcuma\'</code> dentro de las comillas.' },
        { kind: 'code', label: 'Salida', lang: 'Salida', code: OUT, note: 'Resultado tal cual lo devolvió canasta.py en Python 3, cuando lo ejecutamos nosotros.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Contar a mano.</strong> El niño cuenta los mangos de la primera línea: tres. Luego el mentor pregunta en inglés: "If we remove mango once, how many are left?".',
          '<strong>La sorpresa.</strong> Muchos niños esperan que <code>remove</code> los saque todos. La salida muestra que quedan dos: <code>Mangoes still there: 2</code>. Solo se fue el primero.',
          '<strong>Repetir hasta vaciar.</strong> <code>while \'mango\' in basket</code> repite el <code>remove</code> mientras quede algún mango. La lista final es <code>[\'lucuma\', \'banana\']</code>.',
          '<strong>Lo que no está.</strong> Si se intenta quitar un kiwi que no existe, Python da un error. Por eso el programa pregunta primero con <code>in</code> y, si no hay, lo dice: <code>No kiwi to remove</code>.',
          '<strong>Su propia canasta.</strong> El reto es armar una lista con las frutas o los útiles de su mochila, con algún elemento repetido, y predecir qué quedará después de cada línea antes de ejecutar.'
        ] },
        { kind: 'p', mt: true, html: 'Este error, creer que una instrucción hace más de lo que hace, es de los más frecuentes en programación, también en código que escribe una IA. Contar antes y después, y comprobar con <code>count</code>, es el hábito que buscamos: no confiar en lo que parece, sino verificarlo.' }
      ]
    },
    {
      id: 'etapas',
      eyebrow: 'Por edades',
      h2: '¿Cómo empieza a programar un niño de Lurín según su edad?',
      lede: 'Primero se juega con bloques; hacia el final de la primaria aparece el código escrito; con 13 cumplidos, el niño pasa a un grupo de secundaria.',
      body: [
        { kind: 'table', numCols: [], caption: 'Inicio sugerido según la edad (nuestro)', head: ['Edad', 'Herramienta', 'Lo que logra en los primeros meses'], rows: [
          ['6 a 7 años', 'Bloques grandes', 'Ordenar pasos y repetir acciones con un personaje'],
          ['8 a 9 años', 'Scratch', 'Un juego con puntaje y niveles'],
          ['9 a 10 años', 'Python', 'Listas, condiciones y programas cortos'],
          ['11 a 12 años', 'Python, Luau o HTML', 'Un proyecto propio de varias semanas']
        ] },
        { kind: 'source', html: 'Tabla orientativa, hecha por nosotros. El punto de partida real se decide observando a su hijo durante la sesión de prueba.' },
        { kind: 'two', mt: true,
          leftH3: 'Si su hijo tiene 6 años',
          left: [
            'A esa edad todavía aprende a leer, así que las clases usan colores, sonidos y personajes. Conviene que una persona adulta esté cerca las primeras veces.',
            'Lo explicamos en <a class="ag-inline-link" href="/programacion-para-ninos-de-6-anos">programación para niños de 6 años</a>.'
          ],
          rightH3: 'Si está en secundaria',
          right: [
            'Con 13 o más, su hijo trabaja con otros adolescentes: webs, Java, Python y algo de IA. Ninguno de los cinco grados de secundaria tiene horas de computación en la tabla del CNEB.',
            'Vea <a class="ag-inline-link" href="/clases-de-programacion-para-adolescentes-peru">clases de programación para adolescentes en Perú</a>.'
          ] }
      ]
    },
    {
      id: 'hora-lurin',
      eyebrow: 'Horario',
      h2: '¿Qué momento del día es en la India mientras en Lurín es de mañana?',
      lede: 'Allá ya es tarde o noche, con la misma fecha. Diez horas y media separan los dos relojes en cualquier mes. Abajo, algunos pares de horas a modo de ejemplo, que no fijan ninguna clase.',
      body: [
        { kind: 'table', numCols: [], caption: 'Hora en Lurín y su equivalente en la India', head: ['Lurín', 'India', 'Parte del día en la India'], rows: [
          ['6:15 a. m.', '4:45 p. m.', 'Tarde'],
          ['7:20 a. m.', '5:50 p. m.', 'Tarde'],
          ['10:40 a. m.', '9:10 p. m.', 'Noche'],
          ['1:30 p. m.', '12:00 a. m.', 'Medianoche'],
          ['3:40 p. m.', '2:10 a. m.', 'Pasada la medianoche'],
          ['5:20 p. m.', '3:50 a. m.', 'Antes del amanecer']
        ] },
        { kind: 'source', html: 'Cálculo sobre la base tzdata: America/Lima, UTC-5, no ha cambiado de hora desde 1994 (el INACAL da la hora oficial); Asia/Kolkata, UTC+5:30, tampoco cambia.' },
        { kind: 'p', mt: true, html: 'Al reservar, usted marca la hora de Lurín y el mentor la ve en la suya. Quien estudia de mañana suele preferir la clase después de comer; quien estudia de tarde, antes de salir de casa. En vacaciones puede cambiar el horario y mantener al mismo mentor.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Avance',
    h2: '¿Qué va logrando su hijo mes a mes?',
    lede: 'Cinco etapas propias con las que describimos el avance a la familia, sin calificaciones.',
    table: { caption: 'Cinco etapas de aprendizaje (nuestras)', head: ['Etapa', 'Edad frecuente', 'Su hijo ya puede'], rows: [
      ['1. Seguir pasos', '6 a 7 años', 'ordenar bloques para que algo ocurra como lo pensó'],
      ['2. Repetir con un bucle', '7 a 9 años', 'evitar copiar el mismo bloque muchas veces'],
      ['3. Trabajar con listas', '9 a 10 años', 'guardar varias cosas juntas y recorrerlas'],
      ['4. Verificar', '10 a 11 años', 'contar antes y después, como en la canasta, y encontrar su error'],
      ['5. Construir y explicar', '11 a 12 años', 'terminar un proyecto propio y presentarlo en inglés']
    ] },
    left: { h3: 'Para la familia', ps: [
      'Cuando cierre la computadora, que su hijo le resuma la clase en dos frases. Si puede, la entendió.',
      'La constancia pesa más que la velocidad: una clase cada semana durante meses deja más que un mes intenso.'
    ] },
    right: { h3: 'Para el niño', ps: [
      'Cuente lo que hay antes de cambiar algo, y vuelva a contar después.',
      'Si una instrucción no hizo todo lo que esperaba, lea qué hace exactamente.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Otros cursos para niños de Lurín',
    lede: 'En vivo, en inglés, con el mismo mentor durante el curso y en grupo o individual.',
    bands: [
      { num: 'I', h3: 'Arranque', sub: 'De 6 a 9 años', courses: [
        { code: 'PRLU / INI / 01', slug: 'scratch-programming-complete-course', title: 'Scratch desde cero', blurb: 'Juegos, historias y animaciones con bloques.' },
        { code: 'PRLU / INI / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Resolver problemas', blurb: 'Acertijos y patrones para pensar paso a paso.' },
        { code: 'PRLU / INI / 03', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft', blurb: 'Mundos de bloques que se construyen solos con un poco de código.' }
      ] },
      { num: 'II', h3: 'Crear', sub: 'De 8 a 12 años', courses: [
        { code: 'PRLU / CREA / 01', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Juegos en Roblox', blurb: 'Mapas y reglas programados en Luau.' },
        { code: 'PRLU / CREA / 02', slug: 'kids-ai-web-development-course', title: 'Mi página web', blurb: 'Una página con fotos, textos y colores elegidos por el niño.' },
        { code: 'PRLU / CREA / 03', slug: 'game-development-masterclass-for-kids', title: 'Desarrollo de videojuegos', blurb: 'Del boceto al juego completo, en varias plataformas.' }
      ] },
      { num: 'III', h3: 'Pensar más lejos', sub: 'De 9 a 12 años', courses: [
        { code: 'PRLU / LEJOS / 01', slug: 'ai-literacy-for-kids-course', title: 'Qué es la IA', blurb: 'Cómo aprende una máquina y cuándo se equivoca.' },
        { code: 'PRLU / LEJOS / 02', slug: 'maths-through-coding', title: 'Números que se programan', blurb: 'Tablas, fracciones y figuras dibujadas con Python.' },
        { code: 'PRLU / LEJOS / 03', slug: 'cpp-programming-for-kids-course', title: 'C++ para chicos', blurb: 'Llaves, punto y coma y tipos de datos, aprendidos con juegos.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo es la rutina de clases en vivo?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Por la mañana', l: 'Si el colegio es en el turno tarde.' },
      { time: 'Por la tarde', l: 'Si el colegio termina al mediodía.' },
      { time: 'Personalizado', l: 'En clases individuales, cuando usted indique.' }
    ],
    cells: [
      { h3: 'Un mentor', p: 'El mismo durante todo el curso.' },
      { h3: 'Inglés pausado', p: 'Frases cortas y explicación en pantalla.' },
      { h3: 'En vivo de verdad', p: 'Nada de videos grabados: hay alguien del otro lado.' },
      { h3: 'Proyectos', p: 'Cada etapa termina con algo terminado.' },
      { h3: 'Seguimiento', p: 'Notas cortas a la familia.' },
      { h3: 'Dos opciones', p: 'Un grupo de entre quince y veinte, o clases a solas.' }
    ]
  },

  projectsH2: 'Proyectos de alumnos',
  projectsLede: 'Algunos de nuestros alumnos mayores empezaron también con bloques y hoy publican aplicaciones. Hay otros ejemplos en <a class="ag-inline-link" href="/student-labs">Student labs</a> (en inglés).',
  reviewsLede: 'Así nos calificaron en Google familias y alumnos, con sus palabras originales en inglés.',

  fees: {
    h2: 'Precios para familias de Lurín',
    lede: 'Las tarifas aparecen en dólares estadounidenses y se cobran con tarjeta. El banco convierte el cargo a su moneda; por eso el monto exacto puede cambiar un poco según el tipo de cambio del día.',
    free: ['Primera clase gratis', 'Un reto para ubicar a su hijo', 'Sin tarjeta'],
    group: ['De quince a veinte niños de edad similar', 'Mentor fijo', 'Dos clases semanales en vivo', 'Pago mensual, sin permanencia'],
    one: ['Su hijo con el mentor, a solas', 'Plan a medida', 'Horario a elección']
  },

  faq: {
    eyebrow: 'Preguntas',
    h2: 'Programación para niños en Lurín: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Todas las clases son en inglés y en vivo. Para muchas familias de Lurín es justamente el atractivo: en la misma hora su hijo escribe código y conversa en otro idioma, con un mentor que va despacio y repite. Lima llegó al nivel alto del EF EPI 2025, y aprender a conversar en inglés desde primaria suma.' },
      { q: '¿Son clases grabadas?', a: 'No. Son clases en vivo: el mentor y su hijo están conectados a la misma hora, se ven, conversan y el mentor sigue lo que el niño escribe en su pantalla.' },
      { q: '¿Tienen relación con los cursos virtuales de la municipalidad?', a: 'Ninguna. Somos una academia privada sin convenios con la Municipalidad de Lurín ni con los programas que difunde, ni con el MINEDU, la UGEL o colegios.' },
      { q: '¿Cuántos niños hay en Lurín?', a: 'Para el censo de 2025, Lurín tiene 13,554 chicos en edad de primaria (6 a 11) y 13,593 en edad de secundaria (12 a 17), contando solo a quienes fueron censados.' },
      { q: '¿Mi hijo de 6 años es muy pequeño?', a: 'No. Con 6 se aprende con piezas de colores y personajes, sin teclear. El código escrito aparece más adelante, cuando ya lee y escribe con soltura.' },
      { q: '¿A qué hora son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Una referencia: la clase de las 10:15 de la mañana en Lurín es, para el mentor, a las 8:45 de la noche.' },
      { q: '¿Qué necesita en casa?', a: 'Un equipo de mesa o portátil con cámara y micrófono, audífonos y una señal de internet que aguante una hora sin cortes. El celular no reemplaza al teclado.' },
      { q: '¿Y para adolescentes?', a: 'Sí: grupos solo de secundaria, a partir de los 13, donde se programan webs, aplicaciones en Java o Python y proyectos de IA.' },
      { q: '¿Las clases dan notas o certificados escolares?', a: 'No. Van por fuera del colegio y no ponen calificaciones. Al cerrar cada curso emitimos una constancia de finalización con nuestro nombre, sin valor escolar.' },
      { q: '¿En qué moneda se paga?', a: 'La mensualidad se cobra en dólares estadounidenses a una tarjeta, y el banco la convierte. Probar la primera clase no cuesta nada y no requiere dar datos de pago.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más guías',
    h2: 'Otras páginas para familias',
    lede: 'Guías relacionadas, en castellano e inglés.',
    items: [
      { href: '/clases-de-programacion-para-ninos-online-peru', label: 'Programación para niños online', p: 'Cómo funcionan las clases virtuales en todo el Perú.' },
      { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños en inglés', p: 'Qué gana un niño que programa en otro idioma.' },
      { href: '/programacion-para-ninos-de-6-anos', label: 'Programación para niños de 6 años', p: 'El inicio con los más pequeños.' },
      { href: '/clases-de-programacion-para-adolescentes-peru', label: 'Programación para adolescentes', p: 'Opciones para chicos de 13 a 17.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Nuestro método contado en detalle (en inglés).' },
      { href: '/courses', label: 'All courses', p: 'Cada curso que ofrecemos, por edad (en inglés).' }
    ]
  },

  start: {
    h2: 'Pida la primera clase para su hijo',
    lede: 'El primer encuentro es corto: su hijo se presenta, el mentor le propone un juego o un acertijo a su medida y observa cómo lo encara. Luego le escribimos con una sugerencia de curso y modalidad, y usted ve si sigue.',
    readFirst: 'Información previa, por si la quiere: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> y <a class="ag-inline-link" href="/courses">All courses</a> (en inglés).',
    note: 'Todas las sesiones son en directo, con mentores que viven en la India, y en inglés. Las dudas por WhatsApp se responden en castellano.',
    formNote: 'Gratis y sin tarjeta.'
  },

  footer: {
    cols: [
      { h4: 'Cursos', links: [
        { href: '/courses/kids-coding-blocks-masterclass', label: 'Bloques' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Python con IA' },
        { href: '/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev', label: 'Juegos con IA' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Guías', links: [
        { href: '/clases-de-programacion-para-ninos-online-peru', label: 'Programación online' },
        { href: '/programacion-para-ninos-de-6-anos', label: 'Niños de 6 años' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: 'remove saca uno; while los saca todos'
  },

  personalityCss: `
.ag-root.ag-prlu .ag-hero h1 { max-width: 18ch; letter-spacing: -0.01em; }
.ag-root.ag-prlu .ag-capsule { border-left-width: 6px; border-radius: 3px; }
.ag-root.ag-prlu .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-prlu .ag-table caption { text-align: left; }
.ag-root.ag-prlu .ag-steps li { line-height: 1.64; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Lima Metropolitana workbook cuadros 1, 2 and 3, updated to 15 July 2026); INEI Estadísticas de las TIC en los Hogares, II trimestre 2026 (competencias informáticas); Municipalidad Distrital de Lurín notes on gob.pe (20 June 2023, 4 December 2023, 23 April 2024, 10 July 2025); MINEDU CNEB; EF EPI 2025; tzdata and INACAL. Read 8 to 10 November 2026. The live-versus-recorded comparison, age path, stages and Python exercise are our own.',
    localProject: 'A Peruvian fruit basket for a 10 to 12 year old in Lurín: basket.remove(\'mango\') deletes only the first of three mangoes (Mangoes still there: 2), while \'mango\' in basket removes the rest, and an in check prints No kiwi to remove instead of raising an error; the child then builds a basket from their own school bag and predicts each line. Lesson family: list methods remove, count and the in operator.',
    requiredMentions: ['Mangoes still there: 2', 'No kiwi to remove', 'Modalidad Remoto: clases en vivo a través de zoom', 'Programa virtual de inglés', 'Casa de la Cultura y Biblioteca Municipal', 'Escribió programas en un lenguaje de programación', '15,882 chicos de 6 a 12 años', 'remove saca uno; while los saca todos'],
    sources: [
      { claim: 'Lurín 132,149 total, 128,697 censused, 3,452 omitted; age groups; single ages 6 to 12; all urban.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/27/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Computing and office course, live on Zoom, 12 sessions (20 June 2023).', url: 'https://www.gob.pe/institucion/munilurin/noticias/780244-curso-de-computacion-y-ofimatica' },
      { claim: 'Virtual English programme with scholarships for children, young people or adults (4 December 2023).', url: 'https://www.gob.pe/institucion/munilurin/noticias/877107-educacion-programa-virtual-de-ingles' },
      { claim: 'Construction start of the Casa de la Cultura y Biblioteca Municipal announced (23 April 2024).', url: 'https://www.gob.pe/institucion/munilurin/noticias/945119-celebramos-el-dia-del-libro-en-nuestro-distrito' },
      { claim: 'Casa de la Cultura y Biblioteca Municipal for families and children (10 July 2025).', url: 'https://www.gob.pe/institucion/munilurin/noticias/1234015-casa-de-la-cultura-y-biblioteca-municipal' },
      { claim: 'Digital skills of people 15+: 93.7% copied files, 73.7% used formulas, 47.7% installed software, 12.1% wrote programs.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'No computing area in primaria or secundaria hours.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Peru UTC-5 with no DST since 1994; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Naming the private institutes that partnered on the municipal courses, or any official: left out.',
      'Any link with the municipality\'s remote courses or English programme: refused; the page says we are not connected.',
      'Job, grade or admission promises from learning to code: refused; the page says it is a way of thinking, not a promise.',
      'District-level digital-skill figures: INEI publishes national figures only; labelled as national.',
      'Any income or class reading of the census rows or the low omitted share: refused.',
      'Spanish-language teaching, recorded classes or typed fees: refused.'
    ]
  }
};
