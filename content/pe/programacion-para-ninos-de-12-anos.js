// SHIP: market | 12 años, 1° de secundaria: Python y Luau en serio, ONEM, OPI y COAR a la vista | growth of a function: linear vs doubling waves, and a while loop that finds the crossing point
'use strict';
// Programación para niños de 12 años (ag- Spanish-language door, Peru cluster row PE125, P4, hubGroup ages).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only; no soles, no typed figure.
// Search: "programación para niños de 12 años", "inteligencia artificial para niños de 12 años" (KEYWORDS.md section 1). 13,
// 14 and 15 años return no suggestions, so this is the last "niños" age page; from 13 the cluster says "adolescentes" or the
// grade. Angle: the parent of a 12-year-old who has just started (or is about to start) 1° de secundaria. Spine: what a
// 12-year-old builds (Python with structure, Luau scripts in Roblox, a first web page); what 1° de secundaria gives (Ley
// 28044, D.S. 011-2012-ED Art. 64, CNEB Tablas N.° 8 and N.° 9, Educación para el trabajo, competency 28 level 6); Python or
// Roblox; one Python lesson on game difficulty (linear vs doubling); the contests and doors that open in secundaria (ONEM
// Nivel 1, OPI and OPEIA, COAR admission after 2°, MINEDU Hackathon); AI rules at 12 (still under 13); class design.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/programacion-para-ninos-de-12-anos/,
// fetched 2026-11-08, quotes grepped in the raw text):
//  MINEDU Edades normativas (FACTS 13 to 15): "Se considera la edad normativa al 31 de marzo de cada año."; "VI 1er grado
//    2do grado".
//  Ley 28044 (FACTS 6): "La Educación Secundaria constituye el tercer nivel de la Educación Básica Regular y dura cinco años.
//    Ofrece a los estudiantes una formación científica, humanista y técnica."
//  D.S. 011-2012-ED Art. 64 (FACTS 11, OCR): "Atiende a los adolescentes que hayan aprobado el sexto grado de Educación Primaria."
//  CNEB Tabla N.° 8 (JER): "Matemática 4 4 4 4 4", "Comunicación 4 4 4 4 4", "Inglés 3 3 3 3 3", "Ciencia y tecnología 4 4 4 4 4",
//    "Educación para el trabajo 2 2 2 2 2", "Horas de libre disponibilidad 2 2 2 2 2", "Total de horas 35 35 35 35 35";
//    Tabla N.° 9 (JEC): "Matemática 6 6 6 6 6 Comunicación 5 5 5 5 5 Inglés 5 5 5 5 5", "Ciencia y tecnología 5 5 5 5 5",
//    "Educación para el trabajo 3 3 3 3 3 ... Horas de libre disponibilidad 3 3 3 3 3 Total de horas 45 45 45 45 45";
//    "EDUCACIÓN PARA EL TRABAJO Gestiona proyectos de emprendimiento económico y social"; competency 28 level 6 (PDF page 155
//    checked by eye): "integra distintas actividades, actitudes y conocimientos de diversos contextos socioculturales en su
//    entorno virtual personal. Crea materiales digitales (presentaciones, videos, documentos, diseños, entre otros) que responde
//    a necesidades concretas"; "Nivel 6 Nivel esperado al final del ciclo VI".
//  ONEM 2026 (UGEL 06 oficio, FACTS 99 to 103): "NIVEL 1: 1° y 2° grado de educación secundaria"; "ALFA: Estudiantes de IIEE
//    públicas BETA: Estudiantes de IIEE privadas"; "Consta de diez (10) ítems de respuesta construida cerrada"; "La prueba tiene
//    una duración de dos (02) horas."; school stage "el día miércoles 08 de Julio" (2026). El Peruano (FACTS 105): "la ONEM 2026
//    convocó a más de 1,7 millones de estudiantes de secundaria de todo el país."
//  OPI (UTEC, FACTS 111): "Las Olimpiadas Peruanas de Computación son competencias organizadas por la Universidad de Ingeniería
//    y Tecnología (UTEC), abiertas gratuitamente a todos los estudiantes de secundaria del país."
//  COAR 2026 (FACTS 94, press note 11 January 2026): "ofrecerá un total de 2650 vacantes para estudiantes de instituciones
//    educativas públicas que hayan culminado el segundo grado de secundaria"; "será virtual y gratuita".
//  MINEDU Hackathon 2025 (FACTS 48, 49): "entre 2023 y 2025, la presencia de estudiantes mujeres creció en 28 %".
//  INEI Boletín TIC II trimestre 2026: "el de 12 a 18 años con un 92,5%".
//  AI tool ages via content/ai-tool-age-audit.json (vendor quotes, audited 2026-07-15): OpenAI 13 with parental permission
//    under 18; Gemini 13 with a personal or school account; Claude 18.
//  Time: tzdata America/Lima UTC-5 no DST; Asia/Kolkata UTC+5:30.
// Our own calculations (python3 -I): JER week 35 x 45 = 1,575 minutes; JEC 45 x 45 = 2,025; Educación para el trabajo 2 x 45 =
//    90 (JER) and 3 x 45 = 135 (JEC); Inglés 3 x 45 = 135 (JER) and 5 x 45 = 225 (JEC).
// Our own example (oleadas.py in the scratchpad, run with python3 -I), exact output:
//    Oleada 0 | lineal: 3 | doble: 3 / Oleada 2 | lineal: 7 | doble: 12 / Oleada 4 | lineal: 11 | doble: 48 /
//    Oleada 6 | lineal: 15 | doble: 192 / Oleada 8 | lineal: 19 | doble: 768 / lineal pasa de 1000 en la oleada 499 /
//    doble pasa de 1000 en la oleada 9
// Lesson family: how a function grows (adding a fixed amount vs doubling), tabulated in a loop, and a while loop that searches
// for the first input whose output passes a limit.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  'def lineal(oleada):',
  '    return 3 + 2 * oleada',
  '',
  'def doble(oleada):',
  '    return 3 * 2 ** oleada',
  '',
  'for oleada in range(0, 9, 2):',
  "    print('Oleada', oleada, '| lineal:', lineal(oleada), '| doble:', doble(oleada))",
  '',
  'for regla in [lineal, doble]:',
  '    oleada = 0',
  '    while regla(oleada) <= 1000:',
  '        oleada = oleada + 1',
  "    print(regla.__name__, 'pasa de 1000 en la oleada', oleada)"
].join('\n');

const OUT = [
  'Oleada 0 | lineal: 3 | doble: 3',
  'Oleada 2 | lineal: 7 | doble: 12',
  'Oleada 4 | lineal: 11 | doble: 48',
  'Oleada 6 | lineal: 15 | doble: 192',
  'Oleada 8 | lineal: 19 | doble: 768',
  'lineal pasa de 1000 en la oleada 499',
  'doble pasa de 1000 en la oleada 9'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'ages', label: 'Programación para niños de 12 años' },
  slug: 'programacion-para-ninos-de-12-anos',
  code: 'pab',
  accent: '#1B6A00',
  accentRationale: 'Programación para niños de 12 años: a strong field green #1B6A00, brighter and more grown-up than the olive of the primaria pages, for the year a child crosses into secundaria; contrast 5.48 on the paper #FBF8F2 (alloc.tsv) and above 4.5 on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Programación para niños de 12 años',
  title: 'Programación para niños de 12 años: Python y Roblox en inglés',
  description: 'Programación para niños de 12 años en Perú, en 1° de secundaria: Python, Roblox con Luau y retos como la ONEM o la OPI, en clases en vivo y en inglés.',
  ogDescription: 'Qué programa un chico de 12 años, qué trae 1° de secundaria, Python o Roblox, la ONEM y la OPI, y una lección sobre la dificultad de un videojuego.',
  twitterDescription: 'Programación para niños de 12 años en Perú: Python, Luau y proyectos propios, en vivo y en inglés.',
  pageName: 'Programación para niños de 12 años',
  webPageDescription: 'Guía para familias en Perú con un hijo o hija de 12 años que empieza la secundaria: qué puede construir con Python y con Luau en Roblox, qué incluye 1° de secundaria según el CNEB en jornada regular y completa, qué competencias y concursos se abren (ONEM, OPI, COAR, Hackathon del MINEDU), qué reglas de edad tienen las herramientas de IA y una lección propia sobre cómo crece la dificultad de un videojuego.',
  courseDescription: 'Clases en vivo y en línea de programación para niños de 12 años en Perú, dictadas solo en inglés: Python con funciones y datos, juegos en Roblox con Luau, desarrollo web y razonamiento matemático, en clase grupal o individual, a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Programación para niños de 12 años',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#doce', label: 'A los 12' },
    { href: '#secundaria', label: '1° de secundaria' },
    { href: '#oleadas', label: 'Ejemplo' },
    { href: '#concursos', label: 'ONEM y OPI' },
    { href: '#ia', label: 'IA' }
  ],
  eyebrow: 'Perú &middot; Programación por edades &middot; 12 años',
  h1: 'Programación para niños de 12 años: Python y Roblox, en inglés',
  lede: 'A los 12 años su hijo o hija deja la primaria, entra a un colegio con más cursos y más profesores, y empieza a pedir más autonomía. También es la edad en que la programación deja de ser un juego guiado y se vuelve un proyecto propio. Esta página cuenta qué puede construir, qué le da 1° de secundaria y qué puertas se le abren.',
  secondaryCta: { href: '#oleadas', label: 'Ver la lección de las oleadas' },
  wa: 'Hola Modern Age Coders, nuestro hijo o hija tiene 12 años y está en 1° de secundaria en Perú. Nos interesan clases de programación en inglés, ¿cómo empezamos?',
  heroNote: 'En vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; a los 12, proyectos propios en Python y Luau, explicados en inglés',
  spec: [
    ['Edad', '12 años, 1° de secundaria'],
    ['Lenguajes', 'Python, Luau (Roblox), HTML y CSS'],
    ['Qué construye', 'Juegos, herramientas y páginas web propias'],
    ['Formato', 'Grupo de quince a veinte, o clases individuales'],
    ['Horario', 'El que la familia proponga, cualquier día'],
    ['Primera clase', 'Gratis, sin datos de tarjeta']
  ],
  capsuleQ: 'Lo esencial',
  capsule: 'A los 12 años, en 1° de secundaria, un chico ya puede programar en serio: escribir Python con funciones y listas, crear scripts en Luau para sus juegos de Roblox o publicar su primera página web. Modern Age Coders le enseña en clases en vivo, en línea y en inglés; desde la India, un mentor que habla claro y se adapta a su ritmo lo acompaña en cada proyecto. Puede elegir un grupo o clases individuales, a cualquier hora y cualquier día. Es también la edad de los primeros concursos de secundaria, como la ONEM y la OPI, donde el razonamiento que se practica programando suma mucho.',

  picks: {
    eyebrow: 'Cursos para los 12 años',
    h2: 'Tres cursos para empezar la secundaria programando',
    lede: 'Uno para Python con profundidad, uno para quien quiere crear sus propios videojuegos y uno para quien disfruta los retos de lógica y matemática.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'PAB / 01', title: 'Python e IA', alt: 'Imagen del curso de Python e inteligencia artificial', note: 'Hasta los 12 años. Funciones, listas, diccionarios y proyectos de IA hechos por el propio estudiante, sin cuentas de adulto.' },
      { course: 'godot-game-development-course-for-kids-and-teens', code: 'PAB / 02', title: 'Videojuegos con Godot', alt: 'Imagen del curso de videojuegos con Godot', note: 'De 10 a 17 años. Juegos en 2D y 3D con GDScript, un lenguaje muy parecido a Python, en un motor gratuito y profesional.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'PAB / 03', title: 'Pensamiento computacional', alt: 'Imagen del curso de resolución de problemas y pensamiento computacional', note: 'Descomponer problemas, buscar patrones y diseñar algoritmos: la base de la ONEM, de la OPI y de cualquier curso de programación posterior.' }
    ]
  },

  sections: [
    {
      id: 'doce',
      eyebrow: 'A los 12 años',
      h2: '¿Qué programación puede aprender un niño de 12 años?',
      lede: 'Casi cualquier cosa que aprenda un adulto principiante, con un ritmo adaptado. Lo que cambia frente a los 10 años no es tanto el lenguaje como la ambición: a los 12 los chicos quieren hacer algo que funcione de verdad y que otros puedan usar.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Python con estructura', p: 'Funciones que reciben datos y devuelven resultados, listas y diccionarios, archivos de texto. Un chico de 12 años puede escribir un programa de cien líneas organizado en partes y entender cada una.' },
          { h3: 'Luau en Roblox', p: 'En Roblox Studio ya no se limita a las herramientas visuales: escribe scripts que controlan puertas, monedas, tiendas y la dificultad de cada nivel. Es código real, con variables, funciones y eventos.' },
          { h3: 'Su primera web', p: 'HTML y CSS para armar una página sobre su tema favorito y publicarla. Es la primera vez que algo hecho por él se puede abrir desde cualquier celular.' }
        ] },
        { kind: 'p', mt: true, html: 'Doce años es también la última edad en que en Perú se habla de "niños" en este tema: desde los 13, las familias buscan "programación para adolescentes" o por grado de secundaria. Nosotros acompañamos ese cambio. A los 12 todavía cuidamos mucho la motivación y el juego, y a la vez empezamos a tratar al estudiante como alguien capaz de planificar un proyecto de varias semanas, equivocarse y corregir sin que se lo pidan.' },
        { kind: 'p', html: 'Si su hijo nunca programó, no es tarde: a los 12 años se puede empezar directamente con Python y avanzar rápido, porque la lectura, la matemática y el manejo del teclado ya están. Si viene de Scratch o de Roblox, aprovechamos lo que sabe y pasamos pronto al código escrito. En la clase gratis el mentor le propone un pequeño reto y, según cómo lo encara, sugiere por dónde seguir.' }
      ]
    },
    {
      id: 'secundaria',
      eyebrow: 'El colegio en 1°',
      h2: '¿Qué cambia en 1° de secundaria y hay computación?',
      lede: 'Cambia casi todo: más horas, más áreas, un profesor por curso. Lo que no cambia es que el plan nacional no tiene un área de programación. Lo más cercano es Educación para el trabajo, y su competencia es de emprendimiento, no de código.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Jornada Escolar Regular (JER) y Jornada Escolar Completa (JEC): seis áreas de 1° de secundaria comparadas', head: ['Área (1° de secundaria)', 'JER: horas', 'JEC: horas', 'Diferencia en minutos (cuenta nuestra)'], rows: [
          ['Educación para el trabajo', '2', '3', '45 más en JEC'],
          ['Inglés', '3', '5', '90 más en JEC'],
          ['Matemática', '4', '6', '90 más en JEC'],
          ['Ciencia y tecnología', '4', '5', '45 más en JEC'],
          ['Comunicación', '4', '5', '45 más en JEC'],
          ['Horas de libre disponibilidad', '2', '3', '45 más en JEC'],
          ['Semana entera, todas las áreas', '35', '45', '450 más en JEC']
        ] },
        { kind: 'source', html: 'Fuente: columnas de 1.° en las Tablas N.° 8 (JER) y N.° 9 (JEC) del CNEB del MINEDU, en horas pedagógicas de 45 minutos. Solo se muestran seis áreas; Arte y cultura, Ciencias sociales, Desarrollo personal, Educación física, Educación religiosa y Tutoría completan el total. Grado y edad según las edades normativas del MINEDU: 1° de secundaria corresponde a 12 años al 31 de marzo, y 1° y 2° forman el ciclo VI. Consulta: 8 de noviembre de 2026.' },
        { kind: 'two', mt: true,
          leftH3: 'Lo que dicen la ley y el CNEB',
          left: [
            'Según la Ley General de Educación, la secundaria se extiende cinco años y busca dar una formación "científica, humanista y técnica". Su reglamento precisa que atiende "a los adolescentes que hayan aprobado el sexto grado de Educación Primaria".',
            'El área de Educación para el trabajo tiene una sola competencia: "Gestiona proyectos de emprendimiento económico y social". Puede incluir herramientas digitales, pero no está pensada para enseñar a programar.'
          ],
          rightH3: 'Tecnología: el nivel del ciclo VI',
          right: [
            'Para la competencia 28, la de entornos virtuales, el CNEB espera al final del ciclo VI (1° y 2° de secundaria) que el estudiante "integra distintas actividades, actitudes y conocimientos de diversos contextos socioculturales en su entorno virtual personal" y "crea materiales digitales (presentaciones, videos, documentos, diseños, entre otros) que responde a necesidades concretas".',
            'Un programa que resuelve un problema real (calcular, ordenar, avisar, jugar) es un material digital que responde a una necesidad concreta, solo que con un nivel de exigencia mayor que una presentación.'
          ] },
        { kind: 'p', mt: true, html: 'Haciendo cuentas con horas de 45 minutos, un chico de 1° pasa en el colegio 1,575 minutos semanales en jornada regular y 2,025 en jornada completa (cálculo nuestro). Es una semana cargada, y por eso las clases de programación tienen que ser flexibles y no sumar estrés. No reemplazamos ningún curso del colegio ni tenemos vínculo con el MINEDU o con colegio alguno; nada de lo que su hijo trabaje aquí llega a su libreta, y al terminar cada curso recibe una constancia propia de Modern Age Coders.' }
      ]
    },
    {
      id: 'roblox',
      eyebrow: 'Python o Roblox',
      h2: '¿Python o Roblox para un chico de 12 años?',
      lede: 'Las dos opciones son código de verdad. La diferencia está en el destino: Python abre la puerta a datos, inteligencia artificial y concursos; Luau en Roblox, al diseño de videojuegos con un público inmediato.',
      body: [
        { kind: 'table', numCols: [], caption: 'Python, Luau en Roblox y GDScript en Godot a los 12 años (comparación nuestra)', head: ['', 'Python', 'Luau (Roblox Studio)', 'GDScript (Godot)'], rows: [
          ['Para qué sirve después', 'Datos, IA, automatización, concursos como la OPI', 'Juegos dentro de Roblox', 'Juegos propios en 2D y 3D'],
          ['Qué tan exigente es', 'Media; mucha precisión al escribir', 'Media; hay que entender el motor', 'Media; parecido a Python'],
          ['Lo que motiva', 'Ver resultados en números y texto', 'Que sus amigos jueguen lo que hizo', 'Crear un juego desde cero, fuera de una plataforma'],
          ['Cuenta necesaria', 'Ninguna', 'Cuenta de Roblox gestionada por un adulto', 'Ninguna; el motor es gratuito'],
          ['Nuestro curso', 'Python e IA, hasta los 12; luego Python para adolescentes', 'Roblox, de 8 a 14 años', 'Godot, de 10 a 17 años']
        ] },
        { kind: 'source', html: 'Tabla y edades de curso: Modern Age Coders. La cuenta de Roblox recomendamos que la cree y la supervise una persona adulta de la familia.' },
        { kind: 'p', mt: true, html: 'Nuestro consejo para la mayoría de los chicos de 12 años: si su hijo vive en Roblox, empiece por ahí y aproveche esa energía; en unos meses Luau le habrá enseñado variables, funciones y eventos, y pasar a Python será fácil. Si lo que le atrae son los retos de lógica, los números o la IA, vaya directo a Python. Y si quiere hacer "su propio juego, no uno dentro de Roblox", Godot es una puerta muy buena que pocos conocen.' },
        { kind: 'p', html: 'Lo que no recomendamos es quedarse años en la misma herramienta solo porque es cómoda. A esta edad el salto de lenguaje es fácil y enseña algo valioso: que las ideas (variables, condiciones, bucles, funciones) son las mismas y lo que cambia es cómo se escriben. Un chico que lo descubre a los 12 aprende cualquier lenguaje nuevo con calma a los 16.' }
      ]
    },
    {
      id: 'oleadas',
      tint: 'tint',
      eyebrow: 'Una lección de ejemplo',
      h2: '¿Cómo se ve una clase de Python para un chico de 12 años?',
      lede: 'Escribimos esta lección a partir de una pregunta de diseño de videojuegos: si cada oleada trae más enemigos, ¿cuánto más? Dos reglas que al principio dan lo mismo terminan siendo mundos distintos. Python lo muestra en pocas líneas.',
      body: [
        { kind: 'code', label: 'Dos reglas de dificultad y la búsqueda del límite', lang: 'Python', code: PY, note: 'La regla lineal suma 2 enemigos por oleada; la regla doble multiplica por 2. La pregunta del mentor, antes de correr nada: "In which wave will each rule pass 1000 enemies?"' },
        { kind: 'code', label: 'Lo que imprime', lang: 'Salida', code: OUT, note: 'Salida exacta, copiada de la consola al ejecutar el programa con Python 3. La regla doble pasa los mil en la oleada 9; la lineal recién en la 499.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Predecir.</strong> El estudiante adivina en qué oleada cada regla pasa de 1000 enemigos. Casi todos dicen números parecidos para las dos. La salida los desmiente.',
          '<strong>Leer la tabla.</strong> En la oleada 0 ambas reglas dan 3. En la 2 ya hay diferencia (7 contra 12) y en la 8 es enorme (19 contra 768). Sumar una cantidad fija es crecer en línea; multiplicar es crecer cada vez más rápido.',
          '<strong>Entender el <code>while</code>.</strong> El segundo bucle no sabe de antemano cuántas vueltas dará: avanza oleada por oleada mientras el número no pase de 1000. Es la forma de buscar "la primera vez que algo ocurre".',
          '<strong>Pensar como diseñador.</strong> Con la regla doble, el juego se vuelve imposible en pocas oleadas; con la lineal, aburrido durante mucho tiempo. ¿Qué regla intermedia propondría? El estudiante escribe una tercera función y la prueba en el mismo bucle.',
          '<strong>Llevarlo a Roblox o a Godot.</strong> La misma función, escrita en Luau o en GDScript, decide cuántos enemigos aparecen en su juego. El estudiante ve que la matemática del colegio decide si su juego es divertido.'
        ] },
        { kind: 'p', mt: true, html: 'Esta lección une tres cosas que un chico de 12 años está viendo por separado: funciones en Python, potencias en Matemática y diseño de juegos en su tiempo libre. La idea de que multiplicar crece mucho más rápido que sumar le servirá para entender el interés compuesto, el crecimiento de una población o por qué un rumor se esparce tan rápido por un grupo de WhatsApp. Y le deja una pregunta que los buenos programadores se hacen siempre: no solo "¿funciona?", sino "¿qué pasa cuando los números crecen?".' }
      ]
    },
    {
      id: 'concursos',
      eyebrow: 'Concursos y oportunidades',
      h2: '¿Qué concursos de matemática y programación hay en 1° de secundaria?',
      lede: 'Varios, y algunos muy grandes. Con la secundaria su hijo entra a la ONEM, puede inscribirse en las olimpiadas de computación de la UTEC y, si estudia en un colegio público, se acerca la convocatoria a los COAR.',
      body: [
        { kind: 'table', numCols: [], caption: 'Oportunidades que se abren a los 12 años en Perú, según sus organizadores', head: ['Qué es', 'Quién participa', 'Lo que dice la fuente'], rows: [
          ['ONEM 2026, Olimpiada Nacional Escolar de Matemática', 'Nivel 1: 1° y 2° de secundaria; categoría Alfa (públicos) y Beta (privados)', 'Etapa escolar el 8 de julio de 2026; prueba de diez ítems de respuesta construida y dos horas; más de 1,7 millones de estudiantes convocados'],
          ['OPI y OPEIA, Olimpiadas Peruanas de Computación (UTEC)', 'Todos los estudiantes de secundaria del país', 'Abiertas y gratuitas; la OPEIA es la de inteligencia artificial'],
          ['COAR, Colegios de Alto Rendimiento', 'Estudiantes de colegios públicos que terminaron 2° de secundaria', '2,650 vacantes en la admisión 2026, con inscripción virtual y gratuita'],
          ['Hackathon del MINEDU', 'Equipos de estudiantes y docentes', 'Proyectos de IA y robótica premiados en 2025; la participación de estudiantes mujeres creció 28 % entre 2023 y 2025']
        ] },
        { kind: 'source', html: 'Fuentes: oficio múltiple de la UGEL 06 sobre la ONEM 2026 y nota de El Peruano sobre su etapa nacional; página de las Olimpiadas Peruanas de Computación de la UTEC (opi.utec.edu.pe); nota de prensa del MINEDU del 11 de enero de 2026 sobre la admisión COAR 2026; nota del MINEDU sobre la Hackathon 2025. Consultadas en noviembre de 2026. No tenemos ninguna relación con el MINEDU, la UTEC, la ONEM ni los COAR.' },
        { kind: 'p', mt: true, html: 'La inscripción en la ONEM se hace a través del colegio, que organiza la primera etapa. Los enunciados de la ONEM y de la OPI no los copiamos; entrenamos con problemas originales escritos por nosotros, en inglés, que trabajan el mismo tipo de razonamiento. Para la OPI, programar en Python desde temprano ayuda mucho, porque su reglamento 2025 lo admite en la primera fase (la final, presencial, se programa solo en C++). Para el chico al que le entusiasman estos retos, nuestra página para <a class="ag-inline-link" href="/vacaciones-utiles-de-programacion-san-isidro-lima">estudiantes de secundaria de San Isidro</a> repasa sus fechas en detalle, y la de <a class="ag-inline-link" href="/vacaciones-utiles-de-programacion-la-molina-lima">La Molina</a> cuenta cómo pasar de la computación escolar (Word, Excel) a programar.' }
      ]
    },
    {
      id: 'ia',
      eyebrow: 'Inteligencia artificial',
      h2: '¿Inteligencia artificial para niños de 12 años: qué está permitido?',
      lede: 'A los 12 todavía no se cumple la edad mínima de los asistentes de IA más conocidos. Eso no impide aprender IA; cambia cómo se aprende.',
      body: [
        { kind: 'two',
          leftH3: 'Las reglas de edad',
          left: [
            'ChatGPT no admite usuarios menores de 13, y de 13 a 17 solo con autorización de los padres. Gemini fija también los 13 para cuentas personales y escolares, y Claude, de Anthropic, los 18. Son los términos que cada empresa publica, recogidos palabra por palabra en el AI tool age guide de este sitio, actualizado en julio de 2026.',
            'Con 12 años, su hijo no debería tener cuenta propia en ninguno de esos servicios. En nuestras clases no se los pedimos ni los usamos con él.'
          ],
          rightH3: 'Cómo enseñamos IA a los 12',
          right: [
            'Con programas que el estudiante escribe: un clasificador sencillo hecho a mano, un juego que se adapta a cómo juega la persona, un análisis de datos con listas. Así entiende que la IA aprende de ejemplos y se equivoca cuando los ejemplos son malos.',
            'Cuando cumpla 13, se abren cursos de IA para adolescentes que usan herramientas con permiso de los padres. Hasta entonces, lo que aprende sobre cómo funciona por dentro le dará criterio para usarlas bien.'
          ] },
        { kind: 'p', mt: true, html: 'Entre abril y junio de 2026, 92,5 de cada 100 peruanos de 12 a 18 años se conectaron a internet, de acuerdo con el INEI. Su hijo está entrando a esa etapa, y con ella llegan los primeros contactos con la IA, muchas veces sin que nadie le explique nada. Enseñarle a programar es también enseñarle a desconfiar con inteligencia: si sabe cómo se construye un sistema que adivina, sabe que adivinar no es saber. Es la diferencia entre copiar una respuesta y pensarla, que es lo que trabajamos en cada clase.' }
      ]
    },
    {
      id: 'clase',
      eyebrow: 'La clase',
      h2: '¿Qué ocurre en una sesión en inglés con un chico de 12 años?',
      lede: 'Más parecida a un taller que a una clase: el mentor plantea, el estudiante decide cómo resolverlo, y al final se revisa juntos qué funcionó y qué no.',
      body: [
        { kind: 'ol', items: [
          '<strong>El objetivo de la sesión.</strong> Al inicio se acuerda qué se quiere lograr: que el juego tenga un menú, que el programa lea un archivo, que la web tenga una segunda página.',
          '<strong>Plan antes de código.</strong> En dos o tres frases dichas en inglés, el estudiante cuenta cómo piensa hacerlo. El mentor no corrige el plan: pregunta lo que falta.',
          '<strong>Trabajo autónomo.</strong> Con la pantalla compartida, el estudiante programa. El mentor interviene solo cuando lo ve trabado demasiado tiempo, y siempre con preguntas.',
          '<strong>Revisión de código.</strong> En la clase grupal, los estudiantes leen el código de otro y señalan algo que entendieron y algo que no. Es lo que hacen los equipos profesionales.',
          '<strong>Lo que sigue.</strong> Cada uno anota el siguiente paso de su proyecto. La familia recibe una nota breve con eso.'
        ] },
        { kind: 'source', html: 'Así organizamos nosotros la sesión; cada mentor la ajusta a su grupo.' },
        { kind: 'p', mt: true, html: 'A los 12 años el inglés suele ser una ventaja más que una barrera: el colegio da tres horas semanales en jornada regular y cinco en jornada completa, y la mayoría de los chicos consume videos y juegos en inglés. En clase practican algo que el colegio no siempre da: explicar en voz alta un razonamiento técnico. Lima tiene nivel alto de inglés en el EF EPI 2025, pero lo que más cuesta es hablar, y explicar el propio código es una práctica oral exigente y útil. Si quiere ver cómo seguimos con los mayores de 12, la <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">página principal para Perú</a> reúne los caminos por edad y por materia.' }
      ]
    },
    {
      id: 'horario',
      eyebrow: 'Horarios',
      h2: '¿A qué hora puede tomar clases un chico de 12 años en Perú?',
      lede: 'Con la secundaria las tardes se llenan de tareas, deporte y amigos. Por eso no tenemos horarios fijos: la familia elige.',
      body: [
        { kind: 'table', numCols: [], caption: 'De la hora de Perú a la de la India: algunos ejemplos de conversión, no un horario', head: ['Perú (UTC-5)', 'India (UTC+5:30)', 'Día en la India'], rows: [
          ['8:30 a. m.', '7:00 p. m.', 'El mismo'],
          ['12:00 m.', '10:30 p. m.', 'El mismo'],
          ['5:30 p. m.', '4:00 a. m.', 'El siguiente'],
          ['9:00 p. m.', '7:30 a. m.', 'El siguiente']
        ] },
        { kind: 'source', html: 'Perú no cambia la hora en ninguna época del año (tzdata, America/Lima; hora oficial del INACAL) y la India tampoco; la diferencia es siempre de diez horas y treinta minutos. Conversión nuestra, revisada en noviembre de 2026.' },
        { kind: 'p', mt: true, html: 'Los chicos de jornada completa salen tarde del colegio, y para ellos suelen funcionar las mañanas de fin de semana o una hora fija entre semana después de la cena. Los de jornada regular tienen más margen por la tarde. Si su hijo quiere aprovechar el verano para empezar, los <a class="ag-inline-link" href="/talleres-de-verano-programacion-ninos-online">talleres de verano en línea ordenados por grado</a> incluyen un camino para quien pasa a 1° o a 2° de secundaria.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progreso',
    h2: '¿Cómo saber si un chico de 12 años avanza en programación?',
    lede: 'Cinco etapas propias para el primer año de secundaria. Las usamos para hablar con la familia y con el propio estudiante.',
    table: { caption: 'Cinco etapas de progreso a los 12 años (nuestras)', head: ['Etapa', 'Qué hace el estudiante', 'Pregunta que ya se hace solo'], rows: [
      ['1. Escribe con orden', 'divide su programa en funciones con nombres claros', '¿esta parte debería ser una función aparte?'],
      ['2. Prueba los límites', 'busca qué pasa con valores muy grandes, cero o vacíos', '¿qué pasa si el número crece mucho?'],
      ['3. Lee código ajeno', 'entiende y comenta un programa escrito por otra persona', '¿qué quiso hacer quien escribió esto?'],
      ['4. Planifica un proyecto', 'divide un proyecto de varias semanas en pasos', '¿qué hago primero para poder probar pronto?'],
      ['5. Lo presenta', 'muestra su proyecto en inglés y responde preguntas', '¿cómo explico esto a alguien que no programa?']
    ] },
    left: { h3: 'Para la familia', ps: [
      'A los 12 años los avances se ven en la autonomía: su hijo empieza a programar sin que nadie se lo pida y a buscar soluciones por su cuenta. Celebre eso más que el resultado final.',
      'Pregúntele qué parte de su proyecto le costó más. Si sabe responder con precisión, está aprendiendo de verdad.'
    ] },
    right: { h3: 'Para el estudiante', ps: [
      'Cuando su programa funcione, pruebe con números enormes, con cero y con nada. Ahí aparecen los errores interesantes.',
      'Antes de pedir ayuda, explique el problema en voz alta. Muchas veces la solución aparece a mitad de la frase.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más para los 12 años',
    lede: 'Se dictan en vivo y en inglés. Algunos son la continuación natural de primaria y otros preparan el paso a los cursos para adolescentes.',
    bands: [
      { num: 'I', h3: 'Crear', sub: 'Juegos, web y apps', courses: [
        { code: 'PAB / CREAR / 01', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Juegos en Roblox con Luau', blurb: 'Scripts propios en Roblox Studio, de 8 a 14 años.' },
        { code: 'PAB / CREAR / 02', slug: 'kids-ai-web-development-course', title: 'Desarrollo web', blurb: 'HTML y CSS para publicar páginas propias, de 9 a 12 años.' },
        { code: 'PAB / CREAR / 03', slug: 'block-coding-app-development-masterclass', title: 'Apps para el celular', blurb: 'Una aplicación construida y probada en un teléfono real.' }
      ] },
      { num: 'II', h3: 'Razonar', sub: 'Matemática y lógica', courses: [
        { code: 'PAB / RAZON / 01', slug: 'maths-through-coding', title: 'Matemática con Python', blurb: 'Potencias, fracciones y datos explorados programando, de 10 a 15 años.' },
        { code: 'PAB / RAZON / 02', slug: 'middle-school-math-competitions-course', title: 'Competencias de matemática', blurb: 'Problemas originales del estilo de las olimpiadas escolares.' },
        { code: 'PAB / RAZON / 03', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Matemática de inicio de secundaria', blurb: 'Pre-álgebra y geometría con explicaciones paso a paso.' }
      ] },
      { num: 'III', h3: 'Otros lenguajes', sub: 'Para ir más allá', courses: [
        { code: 'PAB / LENG / 01', slug: 'cpp-programming-for-kids-course', title: 'C++ para chicos', blurb: 'El lenguaje que el reglamento 2025 de la OPI exige en su final, desde lo básico.' },
        { code: 'PAB / LENG / 02', slug: 'ai-literacy-for-kids-course', title: 'Entender la IA', blurb: 'Cómo aprenden las máquinas, sin abrir cuentas en chatbots.' },
        { code: 'PAB / LENG / 03', slug: 'hackathon-prep-for-kids-coding-innovation-ai-projects-course', title: 'Preparación para hackatones', blurb: 'Idear y presentar un proyecto en equipo, hasta los 12 años.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Qué formatos y horarios hay para un chico de 12 años?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Fines de semana', l: 'Útil para chicos de jornada completa.' },
      { time: 'Entre semana', l: 'Después de las tareas, cuando la tarde lo permite.' },
      { time: 'Individuales', l: 'Horario que cambia según la semana del estudiante.' }
    ],
    cells: [
      { h3: 'Proyectos propios', p: 'El estudiante elige qué construir y lo lleva semanas.' },
      { h3: 'Plan antes de código', p: 'Primero se explica la idea en inglés, luego se programa.' },
      { h3: 'Revisión entre pares', p: 'Leer el código de otro es parte de la clase.' },
      { h3: 'Sin respuestas hechas', p: 'Ni copiar soluciones ni pedírselas a una IA.' },
      { h3: 'El mismo mentor', p: 'Acompaña todo el curso y conoce el proyecto.' },
      { h3: 'Nota a la familia', p: 'Breve: qué se avanzó y cuál es el siguiente paso.' }
    ]
  },

  projectsH2: 'Proyectos de estudiantes un poco mayores',
  projectsLede: 'Lo que un chico de 12 años empieza hoy puede convertirse en proyectos como estos, de nuestros estudiantes de secundaria y universidad. Hay más en <a class="ag-inline-link" href="/student-labs">Student labs</a>.',
  reviewsLede: 'Lo que familias y estudiantes escribieron en Google, sin traducir.',

  fees: {
    h2: 'Cuánto cuestan las clases para un chico de 12 años',
    lede: 'La mensualidad aparece en dólares estadounidenses y se cobra con tarjeta; su banco hace la conversión y aplica el cambio vigente ese día. La clase gratis no requiere ningún medio de pago.',
    free: ['Clase de prueba gratuita con un mentor', 'Un reto corto para ubicar su nivel', 'Ningún dato de pago'],
    group: ['Grupo de quince a veinte chicos de edad similar', 'Mentor fijo durante todo el curso', 'Dos clases en vivo a la semana', 'Pago mensual, se puede dejar cuando quiera'],
    one: ['Solo su hijo y el mentor', 'Proyecto y ritmo personalizados', 'Horario a medida, semana a semana']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Programación para niños de 12 años: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No: todo se enseña en inglés, en vivo y en línea, con mentores en la India. A los 12 años eso suele sumar: su hijo aprende a programar y, de paso, a explicar en inglés lo que piensa, algo que pocas clases le piden. El EF EPI 2025 ubica a Lima en el nivel alto de inglés; hablar es justo lo que más se ejercita al explicar el propio código.' },
      { q: '¿Qué puede programar un niño de 12 años?', a: 'Programas en Python con funciones, listas y archivos; scripts en Luau para sus juegos de Roblox; juegos en Godot; y su primera página web con HTML y CSS. Es la edad en que los proyectos se vuelven propios y de varias semanas.' },
      { q: '¿En qué grado está un chico de 12 años en Perú?', a: 'En 1° de secundaria. El MINEDU asigna el grado por la edad cumplida al 31 de marzo, y 1° y 2° de secundaria componen el ciclo VI del CNEB.' },
      { q: '¿Hay computación en 1° de secundaria?', a: 'No como área propia. La semana tiene 35 horas en jornada regular y 45 en jornada completa, con Educación para el trabajo como el área más cercana, cuya competencia es gestionar proyectos de emprendimiento.' },
      { q: '¿Python o Roblox a los 12 años?', a: 'Si su hijo vive en Roblox, empezar con Luau aprovecha su motivación. Si le atraen los números, la IA o los concursos, Python. Las ideas son las mismas y el paso de uno a otro es fácil a esta edad.' },
      { q: '¿Puede participar en la ONEM a los 12 años?', a: 'Sí, desde 1° de secundaria. La ONEM 2026 agrupa 1° y 2° en el Nivel 1, y la inscripción se hace por el colegio. Nosotros no reproducimos sus problemas: entrenamos el razonamiento con problemas originales nuestros.' },
      { q: '¿Puede usar ChatGPT en las clases?', a: 'Con su propia cuenta, no: a los 12 todavía no alcanza los 13 que exige OpenAI, y Claude pide 18. A los 12 enseñamos IA con programas que el estudiante escribe él mismo.' },
      { q: '¿A qué hora son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Las 12:00 m. en Perú son las 10:30 p. m. en la India, y esa diferencia se mantiene todo el año.' },
      { q: '¿Qué pasa cuando cumpla 13?', a: 'Pasa a nuestros cursos para adolescentes cuando el mentor y la familia lo vean oportuno: Python completo, desarrollo web, IA con herramientas permitidas desde los 13 con permiso de los padres, y preparación para concursos.' },
      { q: '¿Dan un certificado?', a: 'Una constancia de finalización de Modern Age Coders al terminar cada curso. No tiene valor oficial para el colegio ni para el MINEDU, con quienes no tenemos relación.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más páginas',
    h2: 'Para seguir leyendo',
    lede: 'Guías relacionadas para familias con chicos que empiezan la secundaria. Las páginas de Perú están en castellano.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Clases en Perú', p: 'Todos los caminos por edad y por materia para familias peruanas.' },
      { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Primaria en inglés', p: 'Lo que viene antes de los 12: de 6 a 12 años, paso a paso.' },
      { href: '/vacaciones-utiles-de-programacion-san-isidro-lima', label: 'Secundaria en San Isidro', p: 'Un verano de programación antes de la OPI y otras fechas.' },
      { href: '/coding-for-12-year-olds', label: 'Coding for 12 year olds', p: 'La versión internacional, en inglés, de esta misma guía.' },
      { href: '/ai-tools-age-guide', label: 'AI tool age guide', p: 'La edad mínima de cada herramienta de IA, con la cita del fabricante.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Cómo trabajan nuestros mentores con estudiantes de esta edad.' }
    ]
  },

  start: {
    h2: 'Reserve una clase gratis para su hijo de 12 años',
    lede: 'Durante la prueba gratuita el mentor habla con su hijo en inglés, le propone un pequeño reto en Python o en el entorno que él prefiera y observa cómo plantea la solución. Después le sugerimos un curso y un formato, sin compromiso.',
    readFirst: 'Puede leer antes <a class="ag-inline-link" href="/how-we-teach">How we teach</a> sobre nuestro método y revisar <a class="ag-inline-link" href="/courses">All courses</a> para ver el catálogo (páginas en inglés).',
    note: 'Cada sesión es en vivo, por internet, desde la India y únicamente en inglés. Para dudas, WhatsApp es lo más ágil, y puede escribirnos en castellano.',
    formNote: 'Gratis, sin tarjeta ni compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Cursos para los 12 años', links: [
        { href: '/courses/python-ai-kids-masterclass', label: 'Python e IA' },
        { href: '/courses/godot-game-development-course-for-kids-and-teens', label: 'Videojuegos con Godot' },
        { href: '/courses/problem-solving-and-computational-thinking-for-kids', label: 'Pensamiento computacional' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Perú', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Clases en Perú' },
        { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Primaria en inglés' },
        { href: '/talleres-de-verano-programacion-ninos-online', label: 'Talleres de verano' },
        { href: '/vacaciones-utiles-de-programacion-la-molina-lima', label: 'La Molina' }
      ] }
    ],
    bottomRight: 'Sumar crece en línea; multiplicar, en curva'
  },

  personalityCss: `
.ag-root.ag-pab .ag-hero h1 { letter-spacing: -0.016em; max-width: 22ch; }
.ag-root.ag-pab .ag-capsule { border-left-width: 6px; border-radius: 0; }
.ag-root.ag-pab .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-pab .ag-table caption { text-align: left; }
.ag-root.ag-pab .ag-steps li { line-height: 1.58; }
`,

  dossier: {
    curriculumAuthority: 'MINEDU: Edades normativas (31 March; 1° de secundaria = 12 años, ciclo VI), Ley 28044 (secundaria five years), D.S. 011-2012-ED Art. 64, CNEB Tablas N.° 8 and N.° 9 (1.° column), Educación para el trabajo competency, competency 28 level 6 (PDF page 155 checked by eye), COAR 2026 admission note (11 January 2026), Hackathon 2025 note; UGEL 06 oficio and El Peruano on ONEM 2026; UTEC OPI page; INEI Boletín TIC II trimestre 2026; vendor AI age floors via content/ai-tool-age-audit.json; tzdata for time. All read 8 November 2026. The comparison table, class structure, stages and example are our own.',
    localProject: 'Game difficulty in Python for a 12-year-old in 1° de secundaria: two functions give enemies per wave, lineal (3 + 2n) and doble (3 x 2^n); a loop prints waves 0 to 8 (19 against 768 at wave 8) and a while loop finds the first wave above 1000: lineal pasa de 1000 en la oleada 499, doble pasa de 1000 en la oleada 9, run with python3 -I. Lesson family: linear vs doubling growth, and a while loop searching for a crossing point.',
    requiredMentions: ['Oleada 8 | lineal: 19 | doble: 768', 'lineal pasa de 1000 en la oleada 499', 'doble pasa de 1000 en la oleada 9', 'Sumar crece en línea; multiplicar, en curva', 'integra distintas actividades, actitudes y conocimientos de diversos contextos socioculturales', 'Gestiona proyectos de emprendimiento económico y social', 'a los adolescentes que hayan aprobado el sexto grado de Educación Primaria', '2,650 vacantes en la admisión 2026', '1,575 minutos semanales', 'creció 28 % entre 2023 y 2025'],
    sources: [
      { claim: 'Normative age at 31 March; 1er and 2do grado de secundaria form ciclo VI.', url: 'https://cdn.www.gob.pe/uploads/document/file/2818106/Edades_normativas.pdf?v=1644437764' },
      { claim: 'Secundaria lasts five years with scientific, humanist and technical education.', url: 'https://cdn.www.gob.pe/uploads/document/file/4049722/Ley%2028044%20-%20Ley%20General%20de%20Educaci%C3%B3n%20.pdf' },
      { claim: 'Secundaria serves adolescents who passed 6° de primaria (Art. 64).', url: 'https://cdn.www.gob.pe/uploads/document/file/104990/_0011-2012-ED_-_14-03-2013_02_34_14_-d.s_011-2012-ed.pdf' },
      { claim: 'Tablas N.° 8 and N.° 9 (JER 35, JEC 45), Educación para el trabajo competency, competency 28 level 6.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'ONEM 2026 levels, categories, ten items, two hours, school stage 8 July 2026.', url: 'https://ofimult.ugel06.gob.pe/archivos/oficio-multiple-no-00164-2026-mineduvmgi-drelm-ugel06dir-agebre-1781620977.pdf' },
      { claim: 'ONEM 2026 drew more than 1.7 million secondary students.', url: 'https://elperuano.pe/noticia/306597-72-escolares-ganadores-de-la-olimpiada-nacional-de-matematica-seran-premiados-este-lunes-en-huampani' },
      { claim: 'OPI and OPEIA organised by UTEC, free for all secondary students.', url: 'https://opi.utec.edu.pe/' },
      { claim: 'COAR 2026: 2,650 places for public-school students who finished 2° de secundaria.', url: 'https://www.gob.pe/institucion/minedu/noticias/1331404-minedu-pone-en-marcha-proceso-de-admision-a-los-colegios-de-alto-rendimiento' },
      { claim: 'Hackathon 2025: female student participation up 28% between 2023 and 2025.', url: 'https://www.gob.pe/institucion/minedu/noticias/1220955-minedu-premia-el-talento-estudiantil-y-docente-por-innovar-con-inteligencia-artificial-y-robotica-en-hackathon-2025' },
      { claim: 'Internet use 92.5% of 12 to 18 year olds, II trimestre 2026.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'ChatGPT 13 with parental permission under 18.', url: 'https://openai.com/policies/row-terms-of-use/' },
      { claim: 'Peru UTC-5 with no DST; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Reproducing ONEM or OPI problems: refused; the page says we train with original problems of our own.',
      'Recommending ChatGPT, Gemini or Claude accounts for a 12-year-old: refused; the page quotes the age floors and teaches AI with the student\'s own programs.',
      'Any connection with MINEDU, UTEC, ONEM or COAR, or help with COAR admission: none claimed; the page says we have no relation with them.',
      'Spanish-language teaching: refused; capsule and FAQ say every class is live, online and in English.',
      'Official certificate or school grades: none; only our own certificate of completion.',
      'Soles prices or any typed fee: refused; fees render from the template in USD.'
    ]
  }
};
