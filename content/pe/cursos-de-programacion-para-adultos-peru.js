// SHIP: market | Adultos en Perú: aprender a programar trabajando, del Excel a Python, con certificado y sin promesas | group-by with a dictionary: totals per key, and the dirty-key trap of a spreadsheet export
'use strict';
// Cursos de programación para adultos en Perú (ag- Spanish-language door, Peru cluster row PE090, hubGroup ages).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only. No job, salary or income promise.
// Angle: the working adult who typed "clases de programación para adultos", "cursos online con certificado y salida
// laboral", "curso de programacion con salida laboral", "que curso de programacion tiene mas salida laboral", "curso de
// python con certificado", "curso de python desde cero" (KEYWORDS.md and autocomplete_pe.tsv). Spine: is it late to start
// (no); where Peruvian adults stand in digital skills (INEI Cuadro 4.1, the page's primary-source table); from spreadsheet
// to Python; what "salida laboral" can and cannot mean (context, no promise); what a certificate is worth (ours versus the
// PCEP); English at work (EF EPI 2025); one original lesson that totals a spreadsheet export; fitting classes around a job.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/cursos-de-programacion-para-adultos-peru/;
// read 2026-11-09, quotes grepped in the raw text):
//  INEI, boletín TIC II Trimestre 2026 (inei_tic_iit2026.txt), Cuadro N° 4.1 "Población de 15 y más años de edad que realizó
//   alguna actividad informática a través de una computadora, laptop, tablet o similar", rows for 2023 2024 2025 2026:
//   "88,9 92,0 93,0 93,7" (copiar o mover archivo), "86,9 90,2 92,1 92,7" (copiar y pegar), "87,0 86,2 87,6 86,4" (correos
//   con adjuntos), "67,1 71,7 71,7 73,7" (fórmulas en hoja de cálculo), "53,5 58,8 57,2 59,2" (conectar dispositivos),
//   "42,3 46,5 46,7 47,7" (instalar software), "65,4 71,2 71,7 75,1" (presentaciones), "66,1 70,8 69,1 70,5" (transferir
//   archivos), "7,8 11,7 11,0 12,1" (redactar un programa); text "apenas el 12,1% redactó programas informáticos utilizando
//   lenguajes de programación especializados"; "Solo el 15,5% de los hombres redactó un programa informático utilizando un
//   lenguaje de programación, frente al 8,3% de las mujeres."; Cuadro 2.1 "25 a 40 años 90,9 92,7 93,9 95,2" and "41 a 59
//   años 76,5 79,9 81,9 86,0".
//  World Bank Global Findex (wb_PER_con30e.json): "Accessed online info to learn/train/educate in past three months (% age
//   15+)", Peru, 2024, value 42.885... (42.9).
//  EF EPI 2025 Peru page (ef_peru.raw/.txt): "ageGroup3Score":559 high (26-30), "ageGroup4Score":537 (31-40),
//   "ageGroup5Score":509 (41+); "IT : 522"; "Customer Service : 585"; "Strategy & Project Management : 589".
//  US Commercial Service, Peru CCG Digital Economy, 2026-06-22 (tradegov_digital.txt): "particularly in sectors such as
//   eCommerce, FinTech, GovTech, software and digital services, and telecommunications"; "193 Peru-based fintechs operating as
//   of 2024".
//  Embassy of India, Lima (emb_india_peru.txt): TCS "providing over 1300 jobs locally".
//  Python Institute PCEP page (copy in ../cursos-de-programacion-para-universitarios-peru/pcep.txt): "Prerequisites None",
//   "Number of questions 35 Exam duration 50 minutes Passing score 70%".
//  Time: tzdata America/Lima -5:00, Asia/Kolkata +5:30.
// Our own example, run with python3 -I (ventas.py and ventas_v2.py in the src-pages folder), exact output:
//   ventas.py: 'Pan' 82 / 'pan' 35 / 'Gaseosa' 18 / 'Leche' 12 / 'Leche ' 9
//   ventas_v2.py (key = .strip().lower()): 'pan' 117 / 'leche' 21 / 'gaseosa' 18
// Lesson family: group-by with a dictionary (dict.get with a default, a running total per key, sorted by value with a key
// function), and the dirty-key trap: capitals and a trailing space split one product into several groups.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  'import csv, io',
  '',
  'datos = """fecha,producto,unidades',
  '2026-10-05,Pan,40',
  '2026-10-05,Leche,12',
  '2026-10-06,pan,35',
  '2026-10-06,Gaseosa,18',
  '2026-10-07,Leche ,9',
  '2026-10-07,Pan,42',
  '"""',
  '',
  'totales = {}',
  'for fila in csv.DictReader(io.StringIO(datos)):',
  "    clave = fila['producto']",
  "    totales[clave] = totales.get(clave, 0) + int(fila['unidades'])",
  '',
  'for producto, total in sorted(totales.items(), key=lambda par: par[1], reverse=True):',
  '    print(repr(producto), total)'
].join('\n');

const OUT = [
  "'Pan' 82",
  "'pan' 35",
  "'Gaseosa' 18",
  "'Leche' 12",
  "'Leche ' 9"
].join('\n');

const OUT2 = [
  "'pan' 117",
  "'leche' 21",
  "'gaseosa' 18"
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'ages', label: 'Programación para adultos' },
  slug: 'cursos-de-programacion-para-adultos-peru',
  code: 'cup',
  accent: '#255500',
  accentRationale: 'Cursos de programación para adultos: a dark moss green #255500, sober enough for a professional reader and distinct from the forest #004A28 of the online-for-kids door and the olives of the teen and university doors; allocated in alloc.tsv and checked by the build for at least 4.5:1 on every paper tint',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Cursos de programación para adultos en Perú',
  title: 'Cursos de programación para adultos en Perú, en vivo',
  description: 'Cursos de programación para adultos en Perú, en vivo y en inglés: Python desde cero, datos, web e IA, con certificado propio y a la hora que le deje el trabajo.',
  ogDescription: 'Aprender a programar de adulto en Perú: lo que muestran el INEI y el EF EPI, del Excel a Python, qué vale un certificado y qué significa de verdad salida laboral.',
  twitterDescription: 'Programación para adultos en Perú, desde cero, en vivo y en inglés: Python, datos, web e IA, en grupo o uno a uno, antes o después del trabajo.',
  pageName: 'Cursos de programación para adultos en Perú',
  webPageDescription: 'Guía para adultos que trabajan en Perú y quieren aprender a programar en clases en vivo y en inglés: las habilidades digitales de la población según el INEI de 2026, cómo pasar de la hoja de cálculo a Python, qué puede y qué no puede prometer un curso con salida laboral, qué vale un certificado, el inglés en el trabajo según el EF EPI 2025 y una clase de ejemplo escrita por nosotros.',
  courseDescription: 'Clases en vivo y en línea de programación para adultos en todo el Perú, dictadas solo en inglés: Python desde cero, análisis de datos, automatización, desarrollo web e inteligencia artificial, con certificado de finalización propio, en clase grupal o individual y en el horario que el estudiante elija.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Programación para adultos',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#edad', label: '¿Es tarde?' },
    { href: '#habilidades', label: 'Datos INEI' },
    { href: '#salida', label: 'Salida laboral' },
    { href: '#ejemplo', label: 'Ejemplo' },
    { href: '#horario', label: 'Horario' }
  ],
  eyebrow: 'Perú &middot; Adultos &middot; Desde cero, junto al trabajo',
  h1: 'Cursos de programación para adultos, en vivo y en inglés',
  lede: 'Trabaja, quizá tiene familia, y quiere aprender a programar sin dejar todo lo demás. Esta página responde lo que preguntan los adultos peruanos antes de inscribirse: si es tarde para empezar, por dónde, qué certificado sirve, qué se puede esperar en lo laboral y cómo se acomoda una clase en vivo a una semana de trabajo.',
  secondaryCta: { href: '#edad', label: '¿Es tarde para aprender?' },
  wa: 'Hola Modern Age Coders, soy adulto, vivo en Perú y quiero aprender a programar. ¿Puedo agendar la clase gratis?',
  heroNote: 'Clases en vivo desde 2020 &middot; estudiantes de 6 a 67 años &middot; usted escribe su código, con un mentor al lado',
  spec: [
    ['Para quién', 'Adultos de 18 años en adelante, con o sin experiencia'],
    ['Temas', 'Python, datos, automatización, web e IA'],
    ['Nivel', 'Desde cero, sin requisitos previos'],
    ['Certificado', 'De finalización, emitido por nosotros'],
    ['Formato', 'Grupo de quince a veinte adultos, o individual'],
    ['Horario', 'Antes, durante o después de su jornada']
  ],
  capsuleQ: 'La respuesta corta',
  capsule: 'Modern Age Coders enseña programación a adultos que viven en cualquier parte del Perú, con clases en vivo por internet dictadas en inglés: Python sin conocimientos previos, análisis de datos, automatización de tareas, desarrollo web e inteligencia artificial. Su mentor, que vive en la India, le acompaña por videollamada mientras usted escribe el código en su propia computadora. Cada curso completado se acredita con un certificado emitido por nosotros. No prometemos empleo: enseñamos a resolver problemas reales con código. Elija grupo o clases individuales, a la hora que su trabajo le deje libre.',

  picks: {
    eyebrow: 'Por dónde empezar',
    h2: 'Tres cursos para adultos que empiezan',
    lede: 'Uno para aprender a programar desde la base, uno para quien vive entre hojas de cálculo y uno para quien quiere usar la IA en su trabajo con criterio.',
    items: [
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'CUP / 01', title: 'Python de cero a avanzado', alt: 'Imagen del curso de Python de cero a avanzado', note: 'El curso que recomendamos a casi todos los adultos. Sin requisitos: empieza con la primera variable y llega a programas que leen archivos, procesan datos y automatizan tareas.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', code: 'CUP / 02', title: 'Datos e IA para no programadores', alt: 'Imagen del curso de datos e IA para no programadores', note: 'Excel, Google Sheets y Power BI usados a fondo, con apoyo de IA. Un puente natural hacia Python para quien ya trabaja con datos.' },
      { course: 'ai-tools-mastery-complete-college', code: 'CUP / 03', title: 'Herramientas de IA, a fondo', alt: 'Imagen del curso de herramientas de IA', note: 'ChatGPT, Claude y automatizaciones usadas con método: qué pedir, cómo revisar lo que responden y dónde no confiar en ellas.' }
    ]
  },

  sections: [
    {
      id: 'edad',
      eyebrow: 'Empezar de adulto',
      h2: '¿Es tarde para aprender a programar a los 30, 40 o 50 años?',
      lede: 'No. Un adulto aprende distinto que un adolescente, no peor: tiene menos horas libres, pero sabe para qué quiere aprender, aguanta con más calma la frustración inicial y trae problemas reales de su trabajo para resolver.',
      body: [
        { kind: 'p', html: 'En nuestras clases hay estudiantes de 6 a 67 años, y los adultos suelen avanzar con más constancia que los jóvenes una vez que encuentran su ritmo. Lo que cambia es el punto de partida: en lugar de juegos, el primer proyecto suele ser algo que ahorra tiempo en la oficina, como ordenar un archivo descargado del sistema, unir varias hojas de cálculo o revisar una lista de clientes.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Ventaja: el contexto', p: 'Usted ya conoce los problemas de su área. Programar es aprender una forma nueva de resolverlos, no inventar problemas para practicar.' },
          { h3: 'Ventaja: la disciplina', p: 'Quien cumple horarios de trabajo suele cumplir también dos clases por semana. La constancia pesa más que el talento.' },
          { h3: 'Reto: el tiempo', p: 'Por eso el horario es libre y existen las clases individuales: la hora se mueve con su semana, no al revés.' }
        ] },
        { kind: 'p', mt: true, html: 'El acceso tampoco es el problema. Según el INEI, en el segundo trimestre de 2026 usó internet el 95,2 % de las personas de 25 a 40 años y el 86,0 % de las de 41 a 59 años; en este último grupo la cifra era 76,5 % en el mismo trimestre de 2023. Y el Global Findex del Banco Mundial registra que en 2024 el 42,9 % de los peruanos de 15 y más años buscó información en internet para aprender o capacitarse en los tres meses anteriores a la encuesta. Aprender en línea ya es costumbre; aprender a programar en línea es el paso siguiente.' }
      ]
    },
    {
      id: 'habilidades',
      eyebrow: 'Lo que dicen los datos',
      h2: '¿Qué tan comunes son las habilidades de programación entre los adultos peruanos?',
      lede: 'Muy poco comunes. El INEI pregunta cada año qué actividades informáticas hizo la población de 15 y más años con una computadora, laptop o tablet. Casi todos copian archivos; uno de cada ocho escribe programas.',
      body: [
        { kind: 'table', numCols: [1, 2, 3], caption: 'Lo que hicieron con una computadora los peruanos de 15 años a más: 2026 frente a 2023 (porcentaje, II trimestre)', head: ['Actividad', 'En 2026', 'En 2023', 'Diferencia en puntos (nuestro cálculo)'], rows: [
          ['Mover o copiar archivos y carpetas', '93,7', '88,9', '+4,8'],
          ['Duplicar texto con copiar y pegar', '92,7', '86,9', '+5,8'],
          ['Mandar e-mails con adjuntos', '86,4', '87,0', '-0,6'],
          ['Armar presentaciones (PowerPoint, Prezi)', '75,1', '65,4', '+9,7'],
          ['Fórmulas sencillas en Excel u otra hoja', '73,7', '67,1', '+6,6'],
          ['Pasar archivos de un aparato a otro', '70,5', '66,1', '+4,4'],
          ['Instalar un aparato nuevo', '59,2', '53,5', '+5,7'],
          ['Buscar, instalar y configurar programas', '47,7', '42,3', '+5,4'],
          ['Escribir un programa en un lenguaje de programación', '12,1', '7,8', '+4,3']
        ] },
        { kind: 'source', html: 'Fuente: INEI, boletín técnico de TIC en los hogares del segundo trimestre de 2026, Cuadro N.° 4.1 (Encuesta Nacional de Hogares); los datos de 2026 son preliminares y la última columna es una resta nuestra. Leído el 9 de noviembre de 2026.' },
        { kind: 'p', mt: true, html: 'La tabla dibuja una escalera. En la base, casi toda la población que usa computadora maneja archivos y documentos. En el medio, unas tres de cada cuatro personas usan fórmulas en una hoja de cálculo. Arriba, menos de la mitad instala programas por su cuenta, y solo el 12,1 % redactó un programa con un lenguaje de programación en 2026. El mismo boletín muestra una brecha de género: lo hizo el 15,5 % de los hombres y el 8,3 % de las mujeres, casi el doble entre ellos.' },
        { kind: 'p', html: 'Para un adulto, la lectura práctica es esta: si ya usa fórmulas en Excel, está más cerca de programar de lo que cree. Una fórmula es una instrucción; un programa es una serie de instrucciones con decisiones y repeticiones. El salto que separa la fila de las fórmulas de la última fila de la tabla es justamente lo que enseñamos en los primeros meses.' }
      ]
    },
    {
      id: 'excel',
      eyebrow: 'De la hoja de cálculo al código',
      h2: '¿Por dónde empieza un adulto que nunca programó?',
      lede: 'Por Python, y casi siempre por un problema que ya tiene en su trabajo. El mentor le pide que traiga una tarea repetitiva y la convierte, semana a semana, en el hilo de sus clases.',
      body: [
        { kind: 'ol', items: [
          '<strong>Semanas 1 a 3: las bases.</strong> Variables, tipos de datos, condiciones y bucles, con ejemplos cortos. Todavía no toca sus archivos: primero hay que entender qué hace cada línea.',
          '<strong>Semanas 4 a 6: listas y diccionarios.</strong> Guardar muchos datos y recorrerlos. Aquí aparece el ejemplo de esta página: sumar unidades por producto.',
          '<strong>Semanas 7 a 10: archivos reales.</strong> Leer un CSV o un Excel exportado, limpiarlo, resumirlo y guardar el resultado. Es el momento en que la mayoría de adultos siente que el curso ya le ahorra tiempo.',
          '<strong>Después: su especialidad.</strong> Análisis de datos, automatización, desarrollo web o inteligencia artificial, según lo que necesite su trabajo o el que quiere tener.',
          '<strong>Siempre: explicar.</strong> En cada etapa usted cuenta en inglés qué hace su programa y por qué. Si puede explicarlo, puede mantenerlo.'
        ] },
        { kind: 'p', mt: true, html: 'Las semanas son orientativas y nuestras; cada adulto avanza a su ritmo. Lo que sí sostenemos es el orden: quien salta directo a pedirle código a una IA sin las bases termina con programas que no entiende y que no sabe arreglar cuando fallan, que es justo cuando más falta hacen.' }
      ]
    },
    {
      id: 'ejemplo',
      tint: 'tint',
      eyebrow: 'Una clase de ejemplo',
      h2: '¿Cómo es una clase de Python para un adulto que trabaja con Excel?',
      lede: 'Este ejercicio es nuestro y está pensado para alguien que administra un negocio o lleva reportes en una oficina: sumar las unidades vendidas por producto a partir de un archivo exportado. Funciona, pero el resultado está mal, y descubrir por qué es la lección.',
      body: [
        { kind: 'code', label: 'Sumar unidades por producto', lang: 'Python', code: PY, note: 'El texto entre comillas triples imita un CSV exportado de una hoja de cálculo. <code>totales.get(clave, 0)</code> devuelve cero la primera vez que aparece un producto; así cada fila suma a su grupo.' },
        { kind: 'code', label: 'Lo que imprime', lang: 'Salida', code: OUT, note: 'Copiamos esta salida directamente de la terminal después de ejecutar el archivo con Python 3. Usamos <code>repr</code> para que se vean las comillas, y con ellas el espacio sobrante.' },
        { kind: 'p', mt: true, html: 'El mentor pregunta: "How many products did the shop sell?" La respuesta correcta es tres: pan, leche y gaseosa. El programa muestra cinco grupos. <code>Pan</code> y <code>pan</code> quedaron separados porque Python distingue mayúsculas, y <code>\'Leche \'</code>, con un espacio al final que nadie ve en la hoja de cálculo, es para Python un producto distinto de <code>\'Leche\'</code>. Es el error más común al trabajar con datos que alguien escribió a mano.' },
        { kind: 'p', html: 'El arreglo es una sola línea. La clave se limpia antes de usarla: <code>clave = fila[\'producto\'].strip().lower()</code>. El método <code>strip()</code> quita los espacios de los extremos y <code>lower()</code> pasa todo a minúsculas. Con ese cambio el programa imprime:' },
        { kind: 'code', label: 'Lo que imprime la versión corregida', lang: 'Salida', code: OUT2, note: 'Salida exacta de la segunda versión, también ejecutada por nosotros. Las 82 y 35 unidades de pan se juntan en 117, y la leche suma 21.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Contar antes de confiar.</strong> Antes de mirar los totales, el adulto cuenta cuántos productos esperaba. Si el programa devuelve otra cantidad, algo anda mal aunque no haya ningún mensaje de error.',
          '<strong>Ver lo invisible.</strong> <code>repr</code> muestra las comillas y, con ellas, el espacio escondido. Es una herramienta de diagnóstico que se usa toda la vida.',
          '<strong>Arreglar en el origen o en el código.</strong> Se discute en inglés qué conviene: corregir la hoja de cálculo, o limpiar siempre los datos al leerlos. En un trabajo real, casi siempre ambas cosas.',
          '<strong>Llevarlo a su archivo.</strong> El reto final es aplicar el mismo programa a un archivo exportado de su propio trabajo, sin datos sensibles.'
        ] }
      ]
    },
    {
      id: 'salida',
      eyebrow: 'Salida laboral',
      h2: '¿Qué curso de programación tiene más salida laboral en el Perú?',
      lede: 'Ningún curso, por sí solo, tiene salida laboral; la tienen las habilidades que usted pueda demostrar. Lo que sí podemos decir con fuentes es dónde se usa la programación en el país y qué combinación de habilidades se repite.',
      body: [
        { kind: 'p', html: 'Una guía comercial del gobierno estadounidense dedicada al mercado digital peruano (22 de junio de 2026) destaca oportunidades en comercio electrónico, fintech, gobierno digital, software y servicios digitales, y telecomunicaciones, y cuenta 193 fintechs con base en el país en 2024. La Embajada de la India en Lima informa que Tata Consultancy Services da más de 1300 empleos en el Perú. Son datos de contexto: indican que hay empresas que necesitan gente que programe, no que un curso garantice un puesto en ellas.' },
        { kind: 'two', mt: true,
          leftH3: 'Lo que sí ayuda',
          left: [
            'Python con datos: leer, limpiar, resumir y presentar información. Sirve en casi cualquier área, desde finanzas hasta logística, y se puede aplicar en el empleo que ya tiene.',
            'Un portafolio pequeño y propio: tres proyectos que usted pueda explicar en una entrevista, idealmente sobre problemas de su sector.',
            'Inglés técnico hablado: explicar su código y discutir soluciones en inglés abre puertas en empresas con equipos fuera del país.'
          ],
          rightH3: 'Lo que no le prometemos',
          right: [
            'Un empleo, una práctica, un sueldo o un ascenso. Nadie serio puede prometerlo al vender un curso, y nosotros no lo hacemos.',
            'Que un certificado reemplace a la experiencia. Ayuda a mostrar constancia, pero lo que convence en una entrevista es lo que usted puede hacer frente a quien le pregunta.'
          ] },
        { kind: 'p', mt: true, html: 'Si su meta es cambiar de carrera, se lo diremos con franqueza en la clase gratis: es posible, toma meses de práctica constante y depende de mucho más que un curso. Si su meta es rendir más en el trabajo que ya tiene, el camino es más corto y los resultados se ven antes.' }
      ]
    },
    {
      id: 'certificado',
      eyebrow: 'Con certificado',
      h2: '¿Los cursos de programación online dan certificado?',
      lede: 'Sí, el nuestro: un certificado de finalización de Modern Age Coders. Si necesita una credencial de un tercero que examina, le preparamos para el PCEP del Python Institute, que se rinde con ellos.',
      body: [
        { kind: 'table', numCols: [], caption: 'Dos tipos de certificado, comparados (nuestra comparación; datos del PCEP según el Python Institute)', head: ['', 'Nuestro certificado de finalización', 'PCEP del Python Institute'], rows: [
          ['Quién lo emite', 'Modern Age Coders', 'Python Institute, a través de OpenEDG'],
          ['Qué demuestra', 'Que completó un curso con nosotros', 'Que aprobó un examen de Python de nivel inicial'],
          ['Cómo se obtiene', 'Terminando el curso', 'Examen de 35 preguntas en 50 minutos; aprueba con 70 %'],
          ['Requisitos', 'Ninguno', 'Ninguno'],
          ['Validez oficial en el Perú', 'No es un título ni tiene validez oficial', 'Es una certificación privada internacional, no un título peruano']
        ] },
        { kind: 'p', mt: true, html: 'Muchas búsquedas en el Perú piden "cursos online con certificado". Entendemos por qué: el certificado es algo que se puede adjuntar a un CV. Le recomendamos usarlo así, como prueba de constancia, y poner el peso en lo que puede mostrar: un repositorio con sus proyectos o una demostración en vivo en la entrevista. No estamos vinculados al MINEDU, a SUNEDU ni a ninguna universidad, y no somos centro examinador del Python Institute.' }
      ]
    },
    {
      id: 'ingles',
      eyebrow: 'Clases en inglés',
      h2: '¿Por qué aprender a programar en inglés siendo adulto en el Perú?',
      lede: 'Porque el código, la documentación y buena parte del trabajo técnico ya están en inglés, y porque la clase de programación es un lugar natural para practicar el inglés que usará en su trabajo.',
      body: [
        { kind: 'p', html: 'El índice EF EPI 2025 da a Lima un puntaje de 555, en el nivel alto, y muestra que el inglés de los peruanos alcanza su punto más alto entre los 26 y 30 años, con 559, para bajar a 537 entre los 31 y 40 años y a 509 desde los 41. Por función laboral, quienes trabajan en tecnologías de la información obtienen 522, por debajo de atención al cliente, con 585, o de estrategia y gestión de proyectos, con 589. Es decir, muchos profesionales técnicos del país todavía tienen margen en inglés.' },
        { kind: 'p', html: 'En nuestras clases el inglés no es un examen. El mentor habla claro, usa la pantalla para mostrar lo que dice y espera la respuesta. Al principio puede contestar con frases cortas; a las pocas semanas estará explicando su programa con soltura. Para los profesionales de Lima que ya trabajan en inglés, la página <a class="ag-inline-link" href="/english-medium-coding-classes-lima">English-medium coding classes in Lima</a> profundiza en ese perfil.' },
        { kind: 'p', html: 'Si además tiene hijos en edad escolar, puede ver nuestras páginas de <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">programación para niños en inglés</a> y de <a class="ag-inline-link" href="/vacaciones-utiles-2027-programacion-online">vacaciones útiles 2027 de programación online</a>. Hay familias en las que padres e hijos estudian con nosotros, cada uno en su curso y a su hora.' }
      ]
    },
    {
      id: 'horario',
      eyebrow: 'Horario',
      h2: '¿Cómo encaja una clase en vivo con una jornada de trabajo?',
      lede: 'Usted pone la hora. En las clases individuales la cambia cuando su semana se complica; en grupo elige uno cuyo horario le acomode y lo sostiene.',
      body: [
        { kind: 'two',
          leftH3: 'Lo que hacen nuestros estudiantes adultos',
          left: [
            'Muchos toman la clase temprano, antes de entrar a trabajar, cuando la cabeza está fresca. Otros la ponen al final de la tarde o de noche, después de la jornada.',
            'Quien viaja por trabajo suele preferir clases individuales: se conectan desde el hotel con su laptop y no pierden el hilo del curso.'
          ],
          rightH3: 'La hora de la India',
          right: [
            'Los mentores enseñan desde la India, que todo el año va diez horas y media por delante del Perú, porque ninguno de los dos cambia la hora en verano. Una clase a las 7:00 a. m. en Lima es a las 5:30 p. m. allá; una a las 9:00 p. m. en Lima, a las 7:30 a. m. del día siguiente.',
            'Usted reserva siempre en hora peruana; los ejemplos son conversiones, no un horario de grupos.'
          ] },
        { kind: 'p', mt: true, html: 'Además de las clases, calcule unas dos o tres horas a la semana de práctica propia. Es la parte que más cuesta sostener con un trabajo, y la que más se nota en el avance. El resumen de cursos y páginas del país está en la guía <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">coding and AI classes in Peru</a> (en inglés) reúne cursos y páginas.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progreso',
    h2: '¿Cómo sabe un adulto que está avanzando?',
    lede: 'Cinco señales propias, más útiles que contar horas de clase. El tiempo de cada una depende de cuánto practique.',
    table: { caption: 'Cinco señales de avance para adultos (nuestras)', head: ['Señal', 'Momento habitual', 'Lo que usted puede hacer'], rows: [
      ['1. Leer código', 'Primer mes', 'explicar qué hace un programa corto antes de ejecutarlo'],
      ['2. Escribir sin copiar', 'Segundo mes', 'resolver un ejercicio nuevo sin buscar la solución'],
      ['3. Usar sus datos', 'Tercer mes', 'leer y resumir un archivo de su propio trabajo, como en el ejemplo'],
      ['4. Encontrar errores', 'Cuarto mes', 'detectar un resultado equivocado aunque Python no muestre error'],
      ['5. Construir algo útil', 'Desde el sexto mes', 'automatizar una tarea que antes le tomaba horas, y explicarla en inglés']
    ] },
    left: { h3: 'Para organizarse', ps: [
      'Fije las clases como una reunión de trabajo: en la agenda, con la cámara lista y sin otras ventanas abiertas.',
      'Si una semana no pudo practicar, dígalo al mentor. Ajustar el plan sirve más que fingir que se avanzó.'
    ] },
    right: { h3: 'Para aprender', ps: [
      'Cuente lo que espera antes de leer el resultado. Si no coincide, ahí está la lección.',
      'Use la IA para revisar, no para escribir por usted. El código que entiende es el único que podrá mantener.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más para adultos',
    lede: 'Todos en vivo, en inglés y con un mentor fijo, en grupo o individuales.',
    bands: [
      { num: 'I', h3: 'Datos y automatización', sub: 'Para el trabajo diario', courses: [
        { code: 'CUP / DATOS / 01', slug: 'data-analysis-mastery-course-college', title: 'Análisis de datos', blurb: 'Excel, SQL, Python y tableros, de la pregunta al informe.' },
        { code: 'CUP / DATOS / 02', slug: 'python-ai-automation-masterclass-college', title: 'Automatización con Python', blurb: 'Scripts que hacen el trabajo repetitivo por usted.' },
        { code: 'CUP / DATOS / 03', slug: 'pcep-pcap-python-certification-course', title: 'Certificación PCEP y PCAP', blurb: 'El temario oficial, con simulacros, para rendir con el Python Institute.' }
      ] },
      { num: 'II', h3: 'Web y software', sub: 'Para construir productos', courses: [
        { code: 'CUP / WEB / 01', slug: 'html-css-course-for-beginners-build-real-websites', title: 'HTML y CSS desde cero', blurb: 'Su primera web publicada, adaptada al celular.' },
        { code: 'CUP / WEB / 02', slug: 'full-stack-web-development-masterclass-college', title: 'Desarrollo full stack', blurb: 'React y Node.js para aplicaciones completas.' },
        { code: 'CUP / WEB / 03', slug: 'git-github-advanced-version-control-masterclass-for-professionals', title: 'Git para profesionales', blurb: 'Control de versiones como se trabaja en equipo.' }
      ] },
      { num: 'III', h3: 'Inteligencia artificial', sub: 'Para usarla con criterio', courses: [
        { code: 'CUP / IA / 01', slug: 'complete-generative-ai-masterclass-college', title: 'IA generativa', blurb: 'Modelos de lenguaje, RAG y agentes explicados por dentro.' },
        { code: 'CUP / IA / 02', slug: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', title: 'Agentes de código con IA', blurb: 'Codex y Claude Code para profesionales, revisando cada cambio.' },
        { code: 'CUP / IA / 03', slug: 'hackathon-prep-for-adults-professionals-coding-ai-innovation-course', title: 'Hackatón para adultos', blurb: 'Doce semanas para idear, construir y presentar un proyecto.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo son las clases en vivo para adultos?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Antes de la oficina', l: 'Una clase temprano, con la mente descansada.' },
      { time: 'Al salir', l: 'Al final de la tarde o en la noche, hora de Perú.' },
      { time: 'Semana a semana', l: 'En individuales, la hora se ajusta a su agenda.' }
    ],
    cells: [
      { h3: 'Sus problemas', p: 'Los ejercicios se acercan a lo que usted hace en su trabajo.' },
      { h3: 'Mentor fijo', p: 'La misma persona durante el curso, que conoce su ritmo.' },
      { h3: 'Programa usted', p: 'El mentor pregunta y revisa; el teclado es suyo.' },
      { h3: 'Sin requisitos', p: 'Se empieza desde cero, sin saber programar.' },
      { h3: 'Certificado propio', p: 'Al terminar, nuestro certificado de finalización.' },
      { h3: 'Grupo o individual', p: 'De quince a veinte adultos, o usted solo con el mentor.' }
    ]
  },

  projectsH2: 'Proyectos de nuestros estudiantes',
  projectsLede: 'Algunos proyectos publicados por estudiantes; más en <a class="ag-inline-link" href="/student-labs">Student labs</a> (en inglés).',
  reviewsLede: 'Reseñas de Google de estudiantes y familias, mostradas tal como se publicaron, en inglés.',

  fees: {
    h2: 'Precios para adultos en Perú',
    lede: 'El precio mensual se muestra en dólares estadounidenses y se paga con tarjeta. Su banco convierte el cargo a su moneda, de modo que la cifra final en su estado de cuenta puede variar un poco según el cambio del día.',
    free: ['Una clase gratis con un mentor', 'Una conversación sobre sus metas', 'Sin tarjeta y sin compromiso'],
    group: ['De quince a veinte adultos de nivel parecido', 'Un mentor para todo el curso', 'Dos clases en vivo por semana', 'Mes a mes, sin permanencia'],
    one: ['Usted y el mentor', 'El temario que su trabajo necesita', 'Horario que se adapta a su agenda']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Cursos de programación para adultos: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No, todas son en inglés, con un mentor en vivo por videollamada. Muchos adultos lo ven como parte del valor: aprenden a programar y practican el inglés de trabajo a la vez. El mentor habla con claridad, repite cuando hace falta y respeta su ritmo. El EF EPI 2025 sitúa a Lima en el nivel alto de inglés, y la clase conversada ayuda sobre todo a hablar con soltura.' },
      { q: '¿Es tarde para aprender a programar a los 40 o 50 años?', a: 'No. Tenemos estudiantes hasta los 67 años. Un adulto tiene menos tiempo libre, pero más claridad sobre para qué aprende, y eso compensa. Lo que más pesa es la práctica constante.' },
      { q: '¿Necesito saber algo antes de empezar?', a: 'No. Basta saber usar una computadora, como copiar archivos o usar una hoja de cálculo. El curso de Python empieza desde cero.' },
      { q: '¿Qué curso de programación tiene más salida laboral?', a: 'Ningún curso garantiza trabajo. Python aplicado a datos y automatización es útil en casi cualquier área y se puede usar en el empleo actual. Lo que más convence a un empleador es un portafolio que usted pueda explicar.' },
      { q: '¿El curso da certificado?', a: 'Sí: al terminar le entregamos un certificado de Modern Age Coders que acredita el curso completado; no equivale a un título. Para una credencial externa, preparamos el examen PCEP del Python Institute, que se rinde directamente con ellos.' },
      { q: '¿Cuánto tiempo a la semana necesito?', a: 'Las clases en vivo más unas dos o tres horas de práctica propia. Con ese ritmo, la mayoría usa Python con sus propios archivos hacia el tercer mes.' },
      { q: '¿A qué hora son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Con la India diez horas y media por delante todo el año, una clase a las 7:00 a. m. en Lima cae a las 5:30 p. m. para el mentor; usted solo ve la hora peruana.' },
      { q: '¿Puedo usar ChatGPT o Claude en el curso?', a: 'Sí, como adulto puede usarlos, y en el curso de herramientas de IA aprendemos a hacerlo bien. En las clases de programación los usamos para revisar y explicar, no para escribir el código por usted.' },
      { q: '¿Qué necesito para las clases?', a: 'Una computadora o laptop con micrófono y una conexión estable. Todo el software que usamos es gratuito.' },
      { q: '¿Están vinculados a alguna universidad o al Estado?', a: 'No. Somos una academia privada en línea, sin vínculo con el MINEDU, SUNEDU, universidades ni institutos. Nuestros cursos no otorgan títulos ni créditos.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Otras páginas',
    h2: 'Lecturas relacionadas',
    lede: 'Páginas que amplían esta guía, la mayoría en inglés.',
    items: [
      { href: '/coding-classes-for-adults', label: 'Coding classes for adults', p: 'Nuestra propuesta general para adultos, en inglés.' },
      { href: '/ai-classes-for-adults', label: 'AI classes for adults', p: 'Inteligencia artificial para adultos, desde lo básico.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Todo lo que enseñamos en el país, por edad y tema.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Cómo es por dentro una clase en vivo.' },
      { href: '/student-labs', label: 'Student labs', p: 'Proyectos de estudiantes.' },
      { href: '/courses', label: 'All courses', p: 'El catálogo completo.' }
    ]
  },

  start: {
    h2: 'Agende su clase gratis',
    lede: 'Son de 30 a 45 minutos sin costo. Su mentor conversa con usted sobre su trabajo y lo que quiere lograr, le propone un ejercicio corto en Python, aunque nunca haya programado, y al final le sugiere un curso y un formato. Sin compromiso.',
    readFirst: 'Si prefiere leer antes de agendar, en inglés: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> sobre nuestras clases y <a class="ag-inline-link" href="/courses">All courses</a> con todos los temarios.',
    note: 'Enseñamos en vivo y en línea desde la India, siempre en inglés. Por WhatsApp puede escribirnos en castellano.',
    formNote: 'Gratis, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Cursos para adultos', links: [
        { href: '/courses/python-programming-masterclass-zero-to-advanced-college', label: 'Python de cero a avanzado' },
        { href: '/courses/data-and-ai-analytics-for-non-programmers-course', label: 'Datos e IA para no programadores' },
        { href: '/courses/ai-tools-mastery-complete-college', label: 'Herramientas de IA' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Más información', links: [
        { href: '/coding-classes-for-adults', label: 'Programación para adultos' },
        { href: '/ai-classes-for-adults', label: 'IA para adultos' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: 'Contar antes de confiar en el total'
  },

  personalityCss: `
.ag-root.ag-cup .ag-hero h1 { max-width: 22ch; letter-spacing: -0.008em; }
.ag-root.ag-cup .ag-capsule { border-left-width: 5px; border-radius: 0; }
.ag-root.ag-cup .ag-table caption { text-align: left; font-variant-numeric: tabular-nums; }
.ag-root.ag-cup .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-cup .ag-steps li { line-height: 1.6; }
`,

  dossier: {
    curriculumAuthority: 'INEI boletín TIC II Trimestre 2026 (Cuadro 4.1 computing activities 2023 to 2026, the gender gap in writing programs, Cuadro 2.1 internet use by age); World Bank Global Findex 2024 (con30e); EF EPI 2025 Peru page (age groups, job functions); US Commercial Service Peru Digital Economy guide (22 June 2026); Embassy of India in Lima; Python Institute PCEP page. Read 9 November 2026. The sales-total lesson, the week plan, the certificate comparison and the progress signals are our own.',
    localProject: 'Totals per product from a spreadsheet export, in Python, for a working adult in Peru: csv.DictReader reads six rows, a dictionary with get(key, 0) sums units per product and sorted(..., key=lambda) orders them; version 1 prints five groups (\'Pan\' 82, \'pan\' 35, \'Leche \' 9 among them) because of capitals and a trailing space; with .strip().lower() it prints \'pan\' 117, \'leche\' 21, \'gaseosa\' 18. Lesson family: group-by with a dictionary and the dirty-key trap.',
    requiredMentions: ['Cuadro N.° 4.1', 'solo el 12,1 % redactó un programa', 'lo hizo el 15,5 % de los hombres y el 8,3 % de las mujeres', 'el 42,9 % de los peruanos de 15 y más años', 'el 86,0 % de las de 41 a 59 años', 'Contar antes de confiar en el total', 'con 559, para bajar a 537', 'Ningún curso, por sí solo, tiene salida laboral', 'strip().lower()', 'Tata Consultancy Services da más de 1300 empleos'],
    sources: [
      { claim: 'Computing activities of people 15+ (Cuadro 4.1), 2023 to 2026; men 15.5% and women 8.3% wrote a program; internet use by age group (Cuadro 2.1).', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'Accessed online information to learn or train, Peru 2024: 42.9% of people 15+.', url: 'https://api.worldbank.org/v2/country/PER/indicator/con30e?source=28&format=json' },
      { claim: 'EF EPI 2025 Peru: Lima 555; ages 26 to 30 559, 31 to 40 537, 41+ 509; IT 522, customer service 585, strategy 589.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru digital economy sectors and 193 fintechs in 2024.', url: 'https://www.trade.gov/country-commercial-guides/peru-digital-economy' },
      { claim: 'TCS provides over 1,300 jobs in Peru.', url: 'https://eoilima.gov.in/page/india-peru/' },
      { claim: 'PCEP: no prerequisites, 35 questions, 50 minutes, 70% to pass.', url: 'https://pythoninstitute.org/pcep' }
    ],
    rejectedClaims: [
      'Spanish-language teaching: refused; capsule and FAQ say every class is live, online and in English only.',
      'Job, internship, salary or promotion promises for "salida laboral": refused; the page says no course guarantees work.',
      'Official validity of our certificate, or any link with MINEDU, SUNEDU or a university: none; the page says so.',
      'PROMPERÚ services export figures: left out because they are dollar amounts and add nothing to an adult learner.',
      'Money in the lesson: refused; the example sums units, not prices.',
      'Soles prices or any typed fee: refused.'
    ]
  }
};
