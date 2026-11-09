// SHIP: market (es subject door) | data science en inglés con datos abiertos peruanos (UNHEVAL 2024, ODC-By) | sentinel values: a 0 that means "no data" and a placeholder date distort averages
'use strict';
// Curso de data science en inglés, Perú (ag- Spanish-language door, Peru cluster row PE106, P4, hubGroup subjects).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only; no soles, no typed figure.
// Searches (KEYWORDS.md): "curso de python para analisis de datos", "ciencia de datos curso", "ciencia de datos curso online",
// "ciencia de datos python curso", "curso de data science", "estadistica para ciencia de datos curso".
// Angle: a university student or adult in Peru (teens have their own course) who wants Python for data analysis. Spine: what
// data science is and what it asks of maths (CNEB competency "gestión de datos e incertidumbre"); the spreadsheet-to-Python
// step (INEI 2026: 73.7% used basic spreadsheet formulas, 12.1% wrote a program); an original analysis of a licensed Peruvian
// open dataset (UNHEVAL enrolments 2024, ODC-By) that finds sentinel values; the PROMPERÚ projection on real-time data
// (labelled as such); a route of our own; English.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/curso-de-data-science-en-ingles-peru/,
// fetched 2026-11-09 with curl -sL -A "Mozilla/5.0"):
//  Dataset: "Matriculados a la Universidad Nacional Hermilio Valdizán - 2024 [UNHEVAL]", publisher Universidad Nacional
//    Hermilio Valdizán de Huánuco, datosabiertos.gob.pe; dataset page: "Licencia Open Data Commons Attribution License";
//    metadatos_matriculados_1.docx: "Fecha de creación 2025-06-27", "Frecuencia de actualización Anual", "Licencia Open Data
//    Commons Attribution License"; file matriculados_2024_0.csv (1,868,489 bytes, semicolon CSV, UTF-8 with BOM).
//  Data dictionary (diccionario_datos_matriculados_1.xlsx): UUID "DNI del matriculado anonimizado"; PERIODO_MATRICULA
//    "0: Periodo Anual (Algunas Carreras), 1: Primer Periodo, 2: Segundo Periodo"; PROMEDIO_PONDERADO "Promedio de nota de
//    todos cursos aprobados"; CREDITOS_ACUMULADOS "Total de créditos acumulados de los cursos llevados"; FECHA_NACIMIENTO
//    "Formato: aaaammdd".
//  INEI, Boletín TIC II Trimestre 2026, Cuadro 4.1 (15+): spreadsheet formulas "67,1 71,7 71,7 73,7"; program "7,8 11,7 11,0
//    12,1"; text "el 73,7% aplicó fórmulas aritméticas simples en hojas de cálculo".
//  CNEB (FACTS 55): "Resuelve problemas de gestión de datos e incertidumbre" among the four maths competencies; secundaria
//    Matemática "4 4 4 4 4" hours (FACTS 39).
//  PROMPERÚ, Coyuntura sectorial para software (promperu_a.txt): "Se proyecta que, hacia 2027, más del 70 % de las empresas
//    adoptará arquitecturas de datos en tiempo real".
//  EF EPI 2025 Peru page: Lima 555; ages 26 to 30 score 559.
// Our own analysis (limpieza.py in the src-pages folder), run with python3 -I, exact output:
//    rows: 12787 | term 1: 6530
//    odd birth dates: ['19000101', '20190206', '20190217', '20190222', '20190225', '20190227', '20190312', '20190316', '20210818']
//    0 credits but an average above 0: 22
//    INGENIERÍA DE SISTEMAS n=294 zeros=6 mean_all=12.75 mean_real=13.02
//    INGENIERÍA CIVIL       n=314 zeros=6 mean_all=12.05 mean_real=12.29
//    ODONTOLOGÍA            n=221 zeros=8 mean_all=12.74 mean_real=13.22
//    INGENIERÍA AGRONÓMICA  n=197 zeros=8 mean_all=11.77 mean_real=12.27
//  Also checked (python3 -I): 27 escuelas académicas; 171 rows with PROMEDIO_PONDERADO 0 across both terms, all with 0
//    credits; highest average in the file 19.0.
// Lesson family: sentinel values; a 0 that means "no approved courses yet" and a placeholder birth date (1900-01-01) are not
//    data; detect them with a rule, report how many rows they touch, and watch a ranking flip once they are excluded.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  'import csv',
  'from statistics import mean',
  '',
  "with open('unheval_matriculados_2024.csv', encoding='utf-8-sig') as f:",
  "    rows = list(csv.DictReader(f, delimiter=';'))",
  "term1 = [r for r in rows if r['PERIODO_MATRICULA'] == '1']",
  "print('rows:', len(rows), '| term 1:', len(term1))",
  '',
  "odd = sorted({r['FECHA_NACIMIENTO'] for r in term1",
  "              if not 15 <= int(r['EDAD']) <= 90})",
  "print('odd birth dates:', odd)",
  '',
  "clash = [r for r in term1 if r['CREDITOS_ACUMULADOS'] == '0'",
  "         and float(r['PROMEDIO_PONDERADO']) > 0]",
  "print('0 credits but an average above 0:', len(clash))",
  '',
  "for s in ['INGENIERÍA DE SISTEMAS', 'INGENIERÍA CIVIL',",
  "          'ODONTOLOGÍA', 'INGENIERÍA AGRONÓMICA']:",
  "    g = [float(r['PROMEDIO_PONDERADO']) for r in term1",
  "         if r['ESCUELA_ACADEMICA'] == s]",
  '    real = [x for x in g if x > 0]',
  "    print(f'{s[:22]:22} n={len(g)} zeros={len(g) - len(real)}'",
  "          f' mean_all={mean(g):.2f} mean_real={mean(real):.2f}')"
].join('\n');

const OUT = [
  'rows: 12787 | term 1: 6530',
  "odd birth dates: ['19000101', '20190206', '20190217', '20190222', '20190225', '20190227', '20190312', '20190316', '20210818']",
  '0 credits but an average above 0: 22',
  'INGENIERÍA DE SISTEMAS n=294 zeros=6 mean_all=12.75 mean_real=13.02',
  'INGENIERÍA CIVIL       n=314 zeros=6 mean_all=12.05 mean_real=12.29',
  'ODONTOLOGÍA            n=221 zeros=8 mean_all=12.74 mean_real=13.22',
  'INGENIERÍA AGRONÓMICA  n=197 zeros=8 mean_all=11.77 mean_real=12.27'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'subjects', label: 'Data science y Python' },
  slug: 'curso-de-data-science-en-ingles-peru',
  code: 'dat',
  accent: '#015636',
  accentRationale: 'Curso de data science en inglés: a deep ledger green #015636, the colour of an accountant\'s column rule, sober for a page about numbers and close to the cluster greens without matching any; contrast 7.14 on the paper #FBF8F2 (alloc.tsv) and above 4.5 on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Curso de data science en inglés',
  title: 'Curso de data science y Python para análisis de datos',
  description: 'Curso de data science en vivo y en inglés para Perú: Python para análisis de datos, estadística y machine learning, con datos abiertos peruanos reales.',
  ogDescription: 'Python para análisis de datos con un caso peruano: analizamos los matriculados 2024 de la UNHEVAL (licencia ODC-By) y encontramos ceros que no son notas y fechas que no existen.',
  twitterDescription: 'Data science y Python para análisis de datos en clases en vivo y en inglés desde Perú, a cualquier hora.',
  pageName: 'Curso de data science en inglés',
  webPageDescription: 'Guía para universitarios y adultos en Perú que buscan un curso de Python para análisis de datos o ciencia de datos con clases en vivo y en inglés: qué es la ciencia de datos, el paso de la hoja de cálculo a Python según el INEI 2026, un análisis original de un conjunto de datos abiertos peruano con licencia ODC-By, la proyección de PROMPERÚ sobre datos en tiempo real y una ruta de estudio propuesta por nosotros.',
  courseDescription: 'Curso en vivo y en línea de ciencia de datos para personas de 18 años a más en todo el Perú, con versión para adolescentes, dictado solo en inglés: Python, pandas y visualización, limpieza de datos, estadística, SQL y modelos de machine learning, trabajando con datos abiertos reales, en clase grupal o individual y a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Data science en inglés',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#que-es-ds', label: 'Qué es' },
    { href: '#de-excel', label: 'De Excel a Python' },
    { href: '#analisis', label: 'Análisis' },
    { href: '#estadistica', label: 'Estadística' },
    { href: '#ruta-datos', label: 'Ruta' }
  ],
  eyebrow: 'Perú &middot; Data science &middot; Python para análisis de datos',
  h1: 'Curso de data science y Python, en vivo y en inglés',
  lede: 'Un conjunto de datos peruano, publicado con licencia abierta, tiene 12,787 filas sobre los matriculados de una universidad pública en 2024. Entre ellas hay notas promedio de cero que no son notas y fechas de nacimiento que nadie tuvo. Encontrarlas antes de sacar conclusiones es la primera lección de la ciencia de datos, y es la que este curso enseña desde el primer día.',
  secondaryCta: { href: '#analisis', label: 'Ver el análisis de ejemplo' },
  wa: 'Hola Modern Age Coders, me interesa el curso de data science y Python para análisis de datos, en inglés, desde Perú. ¿Puedo reservar una clase gratis?',
  heroNote: 'Clases en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; datos abiertos reales, analizados y explicados en inglés',
  spec: [
    ['Para quién', 'Universitarios y adultos; curso aparte para adolescentes de 13 a 17'],
    ['Herramientas', 'Python, pandas, gráficos, SQL y machine learning'],
    ['Formato', 'Clase grupal de quince a veinte personas, o clases individuales'],
    ['Horario', 'Cualquier día y a cualquier hora, con flexibilidad'],
    ['Mentores', 'Analistas y desarrolladores en la India'],
    ['Clase inicial', 'Gratuita y sin datos de tarjeta']
  ],
  capsuleQ: 'Respuesta rápida',
  capsule: 'Para aprender data science y Python para análisis de datos desde Perú existe una opción en inglés: Modern Age Coders enseña a universitarios y adultos, con un curso aparte para adolescentes, siempre en vivo, por internet y en inglés, con mentores desde la India. Se aprende a cargar, limpiar, resumir y graficar datos, la estadística que hay detrás y modelos de machine learning, practicando con datos abiertos peruanos. Puede elegir grupo o un mentor solo para usted, en el horario que le acomode, y la primera clase es gratis.',

  picks: {
    eyebrow: 'Cursos recomendados',
    h2: 'Tres cursos para empezar en ciencia de datos',
    lede: 'El recorrido completo para adultos, un curso centrado en el análisis que piden las empresas y la versión para secundaria.',
    items: [
      { course: 'data-science-complete-masterclass-college', code: 'DAT / 01', title: 'Ciencia de datos completa', alt: 'Imagen del curso de ciencia de datos para universitarios', note: 'Desde los 18 años. Python, estadística, machine learning y aprendizaje profundo, con proyectos sobre datos reales.' },
      { course: 'data-analysis-mastery-course-college', code: 'DAT / 02', title: 'Análisis de datos', alt: 'Imagen del curso de análisis de datos', note: 'Excel, SQL, Python y herramientas de inteligencia de negocios: el camino de la hoja de cálculo al código.' },
      { course: 'data-science-course-for-teens-python-data', code: 'DAT / 03', title: 'Data science para adolescentes', alt: 'Imagen del curso de ciencia de datos para adolescentes', note: 'De 13 a 17 años. Python con datos y primeros modelos, con conjuntos de datos pensados para su edad.' }
    ]
  },

  sections: [
    {
      id: 'que-es-ds',
      eyebrow: 'Qué es',
      h2: '¿Qué es la ciencia de datos y qué se aprende en un curso?',
      lede: 'Es el oficio de convertir datos en respuestas confiables: formular una pregunta, conseguir los datos, revisarlos, resumirlos, mostrarlos y, a veces, construir un modelo que prediga. Python es la herramienta más usada para hacerlo.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Preguntar', p: 'Un buen análisis empieza con una pregunta que se puede responder. "¿Cómo van los estudiantes?" no lo es; "¿cuál es el promedio ponderado por escuela en el primer periodo de 2024?" sí.' },
          { h3: 'Limpiar', p: 'Antes de calcular nada se revisa el archivo: columnas, tipos, valores imposibles, códigos que significan "sin dato". Es la parte menos vistosa y la que más errores evita.' },
          { h3: 'Comunicar', p: 'Un gráfico claro, una tabla corta y una frase que diga qué se encontró y con qué límites. Si nadie entiende el resultado, el análisis no sirvió.' }
        ] },
        { kind: 'p', mt: true, html: 'En la escuela peruana, esta forma de pensar tiene raíz oficial. El Currículo Nacional de la Educación Básica organiza el área de Matemática en cuatro competencias, y una de ellas es "Resuelve problemas de gestión de datos e incertidumbre". En secundaria, Matemática tiene 4 horas pedagógicas semanales en la jornada regular. Quien terminó el colegio ya vio promedios, tablas de frecuencia y probabilidades; lo que el curso añade es hacerlo con miles de filas, con código y con datos que no vienen limpios.' },
        { kind: 'p', html: 'Las búsquedas peruanas sobre el tema mezclan dos nombres: "ciencia de datos curso" y "curso de data science", junto con "curso de python para analisis de datos" y "estadistica para ciencia de datos curso". Son la misma familia. Nuestro curso cubre las tres partes que suelen buscarse por separado: Python, estadística y modelos, en ese orden.' }
      ]
    },
    {
      id: 'de-excel',
      eyebrow: 'De la hoja de cálculo a Python',
      h2: '¿Por qué aprender Python si ya uso Excel?',
      lede: 'Porque Excel enseña a pensar en datos, y Python permite hacerlo con archivos más grandes, de forma repetible y sin copiar fórmulas a mano. Según el INEI, en Perú hay muchas más personas en el primer paso que en el segundo.',
      body: [
        { kind: 'table', numCols: [0, 1, 2], caption: 'Hoja de cálculo frente a programación: porcentaje de peruanos de 15 años a más, segundo trimestre de cada año', head: ['Año', 'Aplicó fórmulas básicas en una hoja de cálculo', 'Escribió un programa'], rows: [
          ['2023', '67,1', '7,8'],
          ['2024', '71,7', '11,7'],
          ['2025', '71,7', '11,0'],
          ['2026', '73,7', '12,1']
        ] },
        { kind: 'source', html: 'Datos del INEI (Encuesta Nacional de Hogares), boletín de tecnologías de la información en los hogares, II Trimestre 2026, Cuadro N° 4.1; el año 2026 es preliminar. Elegimos dos de las diez filas del cuadro.' },
        { kind: 'p', mt: true, html: 'En el segundo trimestre de 2026, el 73,7 % de los peruanos de 15 años a más aplicó fórmulas aritméticas simples en una hoja de cálculo, y el 12,1 % escribió un programa. La distancia entre ambas cifras describe al estudiante típico de este curso: alguien que ya suma columnas, filtra tablas y arma gráficos en Excel, y que se topa con sus límites cuando el archivo pesa demasiado, cuando el mismo informe hay que rehacerlo cada mes o cuando la pregunta exige combinar varias fuentes.' },
        { kind: 'two', mt: true,
          leftH3: 'Lo que Excel hace bien',
          left: [
            'Mirar los datos, ordenar, filtrar, hacer una tabla dinámica para una pregunta rápida. En el curso no lo despreciamos: muchas veces el primer vistazo se da ahí.',
            'Compartir un resultado con alguien que no programa. La salida final de un análisis en Python suele terminar en una tabla que se abre en una hoja de cálculo.'
          ],
          rightH3: 'Donde Python gana',
          right: [
            'Archivos de cientos de miles de filas, pasos que se repiten idénticos cada vez que llega un archivo nuevo y un registro exacto de qué se hizo con los datos.',
            'Reglas de limpieza explícitas. En la lección de abajo, una línea de código dice qué filas se excluyen y por qué; en una hoja de cálculo, ese criterio suele quedar escondido en un filtro que alguien olvidó quitar.'
          ] }
      ]
    },
    {
      id: 'analisis',
      tint: 'tint',
      eyebrow: 'Un análisis de ejemplo',
      h2: '¿Cómo se ve un análisis de datos en Python con datos peruanos?',
      lede: 'Usamos un conjunto de datos abiertos real: "Matriculados a la Universidad Nacional Hermilio Valdizán - 2024 [UNHEVAL]", publicado por esa universidad de Huánuco en la Plataforma Nacional de Datos Abiertos con licencia Open Data Commons Attribution License (ODC-By), que permite reutilizarlo citando la fuente. El análisis es nuestro.',
      body: [
        { kind: 'p', html: 'El archivo, creado el 27 de junio de 2025 según sus metadatos, tiene una fila por matrícula y por periodo, con la identidad de cada estudiante anonimizada. Su diccionario de datos explica las columnas: <code>PROMEDIO_PONDERADO</code> es el "promedio de nota de todos cursos aprobados", <code>CREDITOS_ACUMULADOS</code> el total de créditos de los cursos llevados y <code>PERIODO_MATRICULA</code> vale 1 para el primer periodo y 2 para el segundo. Trabajamos solo con el primer periodo para no contar dos veces a quien se matriculó en ambos, y no usamos columnas personales como el sexo o el lugar de nacimiento.' },
        { kind: 'code', label: 'Revisar antes de promediar', lang: 'Python', code: PY, note: 'Antes de ejecutar, el mentor pregunta: "Which of these four schools has the highest average?" Casi todos responden mirando solo la primera columna de promedios.' },
        { kind: 'code', label: 'Lo que imprime', lang: 'Salida', code: OUT, note: 'Copiado sin cambios de nuestra ejecución con Python 3, sobre el archivo descargado el 9 de noviembre de 2026.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Filas no son personas.</strong> El archivo tiene 12,787 filas, pero el primer periodo tiene 6,530. Sumar los dos periodos contaría dos veces a casi todos.',
          '<strong>Fechas que no existen.</strong> El filtro de edades fuera de 15 a 90 años encuentra un nacimiento el 1 de enero de 1900, un valor de relleno típico, y ocho fechas de 2019 y 2021, que darían estudiantes universitarios de 3 a 6 años. Son errores de digitación, no niños prodigio. No los corregimos a ciegas: los reportamos.',
          '<strong>Un cero que no es nota.</strong> En cada escuela hay unas cuantas filas con promedio ponderado 0. En todo el archivo son 171, y todas tienen 0 créditos acumulados: son estudiantes sin cursos aprobados todavía. Como el promedio se define sobre cursos aprobados, para ellos no existe, y el archivo lo marca con un cero.',
          '<strong>El ranking cambia.</strong> Con los ceros, Ingeniería de Sistemas (12.75) supera por una centésima a Odontología (12.74). Sin ellos, Odontología queda arriba (13.22 frente a 13.02). Ocho ceros en una escuela y seis en otra bastan para invertir el orden.',
          '<strong>Una contradicción que se reporta.</strong> 22 filas del primer periodo tienen 0 créditos y aun así un promedio mayor que cero. El diccionario no lo explica, así que el análisis lo deja anotado como pregunta para quien publicó los datos.'
        ] },
        { kind: 'p', mt: true, html: 'Ninguna de estas cosas aparecía como error al ejecutar. El programa corre igual con los ceros, con la fecha de 1900 y con las contradicciones; simplemente da respuestas distintas. Por eso decimos en clase que la limpieza no es un paso previo al análisis: es el análisis. La frase que el estudiante explica al final, en inglés, resume la lección: "A zero is a number only when it was measured."' },
        { kind: 'p', html: 'Para ser claros sobre los límites: el promedio de una escuela no dice si sus estudiantes aprenden más o menos que los de otra, porque cada escuela califica sus propios cursos. El ejercicio no compara la calidad de las carreras; enseña a no dejar que un valor que significa "sin dato" se cuele en una cuenta. En el archivo completo, el promedio más alto es 19.0.' }
      ]
    },
    {
      id: 'estadistica',
      eyebrow: 'Estadística',
      h2: '¿Cuánta matemática necesita la ciencia de datos?',
      lede: 'Menos de la que muchos temen para empezar, y más de la que muchos creen para hacerlo bien. Lo esencial es estadística descriptiva, probabilidad y un poco de álgebra lineal, explicados con datos y no solo con fórmulas.',
      body: [
        { kind: 'table', numCols: [], caption: 'La matemática del curso y dónde se usa (plan nuestro)', head: ['Tema', 'Para qué sirve en datos', 'Cuándo aparece en el curso'], rows: [
          ['Promedio, mediana, dispersión', 'resumir una columna sin engañarse', 'desde la primera semana, como en el ejemplo'],
          ['Distribuciones y probabilidad', 'saber qué es raro y qué es normal en los datos', 'antes de hablar de modelos'],
          ['Muestreo y sesgo', 'entender a quién representan los datos y a quién no', 'en cada proyecto con datos reales'],
          ['Correlación y regresión', 'medir relaciones entre variables', 'en el primer modelo predictivo'],
          ['Álgebra lineal básica', 'entender cómo calculan los modelos de machine learning', 'al pasar a machine learning']
        ] },
        { kind: 'p', mt: true, html: 'Quien se siente inseguro con la matemática puede reforzarla en paralelo con nuestro curso de matemáticas para ciencia de datos o el de estadística y probabilidad. Lo que pedimos en todos los casos es la actitud del ejemplo: preguntarse qué significa cada número antes de usarlo. Un modelo de machine learning entrenado con ceros que no son notas aprende, con mucha confianza, algo que no es cierto.' }
      ]
    },
    {
      id: 'tendencia',
      eyebrow: 'Hacia dónde va',
      h2: '¿Tiene futuro estudiar ciencia de datos?',
      lede: 'Los análisis del sector apuntan a más datos y más rápidos. No prometemos empleo, pero sí podemos mostrar qué proyectan las fuentes que leímos.',
      body: [
        { kind: 'p', html: 'El estudio sectorial de PROMPERÚ sobre la industria del software recoge una proyección de la consultora que cita: "hacia 2027, más del 70 % de las empresas adoptará arquitecturas de datos en tiempo real", basadas en modelos como los data lakes, para integrar información de muchas fuentes. Es una estimación y la presentamos como tal, pero indica la dirección: los datos ya no llegan en un archivo al mes, sino de forma continua, y alguien tiene que saber revisarlos.' },
        { kind: 'p', html: 'En Perú, el propio Estado publica cada vez más datos abiertos, como el archivo de la UNHEVAL que usamos arriba. Practicar con ellos tiene una ventaja doble: los datos son reales, con sus defectos reales, y la pregunta que se responde tiene sentido para quien vive en el país. En el curso se trabajan varios conjuntos de la Plataforma Nacional de Datos Abiertos, siempre revisando su licencia antes de usarlos.' },
        { kind: 'p', html: 'Lo que no encontramos fue una cifra oficial reciente de cuántos analistas o científicos de datos trabajan en Perú, ni de sus sueldos; por eso no damos ninguna. El curso deja un portafolio de análisis propios en GitHub, cada uno con su pregunta, su limpieza documentada y sus límites escritos en inglés.' }
      ]
    },
    {
      id: 'ingles-datos',
      eyebrow: 'En inglés',
      h2: '¿Por qué estudiar data science en inglés?',
      lede: 'Porque la documentación de pandas, scikit-learn y casi todas las bibliotecas está en inglés, igual que los foros donde se resuelven los errores y buena parte de los informes que se leen en un equipo de datos.',
      body: [
        { kind: 'p', html: 'Según el EF EPI 2025, Lima suma 555 puntos, lo que la ubica en el tramo alto de dominio del inglés, y las personas de 26 a 30 años que rindieron el examen en Perú llegan a 559. Quien ya lee con soltura le saca más partido a un curso en inglés; quien todavía duda al hablar encuentra en cada clase práctica concreta: explicar un gráfico, defender por qué excluyó unas filas o preguntar por un resultado raro.' },
        { kind: 'p', html: 'Si usted estudió en un colegio limeño que enseña en inglés, <a class="ag-inline-link" href="/english-medium-coding-classes-lima">esta página para colegios bilingües</a> le resultará familiar. Y la página de <a class="ag-inline-link" href="/coding-classes-in-arequipa-peru">clases en Arequipa</a>, también en inglés, muestra otro proyecto con datos abiertos peruanos, sobre los atractivos turísticos de esa región. La oferta completa para el país está en <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">nuestra página de Perú</a>.' }
      ]
    },
    {
      id: 'ruta-datos',
      eyebrow: 'Ruta',
      h2: '¿Cuánto tiempo toma un curso de Python para análisis de datos?',
      lede: 'Para llegar desde cero a un primer proyecto de análisis completo, calculamos unos seis meses, a dos clases semanales en vivo. Es una estimación nuestra, que cada persona acelera o alarga.',
      body: [
        { kind: 'table', numCols: [], caption: 'Ruta de seis meses en ciencia de datos (propuesta nuestra)', head: ['Mes', 'Tema', 'Proyecto con datos reales'], rows: [
          ['1', 'Python básico: tipos, listas, diccionarios, funciones, archivos CSV', 'Leer un archivo de datos abiertos y contar sus filas'],
          ['2', 'pandas: filtrar, agrupar, unir tablas', 'Resumen por grupos, como el de la UNHEVAL'],
          ['3', 'Limpieza y visualización', 'Un informe con gráficos y reglas de limpieza documentadas'],
          ['4', 'Estadística aplicada y SQL', 'Preguntas respondidas con consultas y con intervalos'],
          ['5', 'Machine learning: regresión y clasificación', 'Un primer modelo evaluado con datos separados'],
          ['6', 'Proyecto final y comunicación', 'Un análisis propio publicado en GitHub, explicado en inglés']
        ] },
        { kind: 'p', mt: true, html: 'Quien ya programa en Python puede saltarse el primer mes. Quien viene de Excel suele avanzar rápido en el segundo, porque agrupar y filtrar ya le resulta familiar. El criterio para avanzar es siempre el proyecto del mes, revisado por el mentor, y no la fecha del calendario.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progreso',
    h2: '¿Cómo se sabe si ya analiza datos con criterio?',
    lede: 'Con cinco niveles propios. Ninguno se mide por la cantidad de código, sino por la calidad de las preguntas que la persona le hace a los datos.',
    table: { caption: 'Cinco niveles de análisis de datos (nuestros)', head: ['Nivel', 'Lo que la persona hace', 'Señal de dominio'], rows: [
      ['1. Cargar', 'abre un archivo y cuenta filas y columnas', 'nota que filas y personas no siempre coinciden'],
      ['2. Revisar', 'busca valores imposibles y códigos de "sin dato"', 'encuentra la fecha de 1900 sin que se la señalen'],
      ['3. Resumir', 'agrupa, promedia y grafica con reglas explícitas', 'dice cuántas filas excluyó y por qué'],
      ['4. Modelar', 'entrena y evalúa un modelo sencillo', 'separa datos de prueba y no se engaña con el resultado'],
      ['5. Comunicar', 'presenta hallazgos y límites a quien no programa', 'su informe responde la pregunta en una frase']
    ] },
    left: { h3: 'Para quien viene de Excel', ps: [
      'El nivel 2 suele sorprender: en una hoja de cálculo los valores raros se pierden entre miles de celdas, y en Python aparecen con una línea.',
      'No borre filas sin dejar escrito el criterio. Su yo del próximo mes se lo agradecerá.'
    ] },
    right: { h3: 'Para quien ya programa', ps: [
      'El reto suele estar en el nivel 5: explicar con pocas palabras qué se encontró y qué no se puede afirmar.',
      'Antes de entrenar un modelo, haga el nivel 2 completo. Un modelo no corrige datos sucios; los aprende.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más para trabajar con datos',
    lede: 'En vivo, en inglés y con mentor; los de la última banda son para quien ya domina Python.',
    bands: [
      { num: 'I', h3: 'Bases', sub: 'Python y matemática', courses: [
        { code: 'DAT / BASE / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python desde cero', blurb: 'El lenguaje, sin atajos, antes de pasar a pandas.' },
        { code: 'DAT / BASE / 02', slug: 'statistics-probability-maths-course', title: 'Estadística y probabilidad', blurb: 'La matemática que sostiene cada promedio y cada modelo.' },
        { code: 'DAT / BASE / 03', slug: 'data-analytics-mathematics-masterclass', title: 'Matemáticas para ciencia de datos', blurb: 'Estadística, álgebra lineal y lo necesario para machine learning.' }
      ] },
      { num: 'II', h3: 'Herramientas', sub: 'Bases de datos y análisis sin código', courses: [
        { code: 'DAT / HERR / 01', slug: 'mysql-database-complete-masterclass-college', title: 'MySQL', blurb: 'Consultas SQL para sacar de una base de datos solo lo que hace falta.' },
        { code: 'DAT / HERR / 02', slug: 'data-and-ai-analytics-for-non-programmers-course', title: 'Análisis para no programadores', blurb: 'Excel, Sheets y Power BI con IA, para quien no quiere escribir código.' },
        { code: 'DAT / HERR / 03', slug: 'orange-data-mining-machine-learning-course-for-college-students', title: 'Orange Data Mining', blurb: 'Machine learning visual, para entender los modelos antes de programarlos.' }
      ] },
      { num: 'III', h3: 'Modelos', sub: 'Machine learning e IA', courses: [
        { code: 'DAT / MOD / 01', slug: 'ai-ml-masterclass-complete-college', title: 'IA y machine learning', blurb: 'De la regresión al aprendizaje profundo, con Python.' },
        { code: 'DAT / MOD / 02', slug: 'complete-generative-ai-masterclass-college', title: 'IA generativa', blurb: 'Modelos de lenguaje y RAG sobre sus propios datos.' },
        { code: 'DAT / MOD / 03', slug: 'python-ai-automation-masterclass-college', title: 'Automatización con Python', blurb: 'Descargar, limpiar y reportar datos sin intervención manual.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo es una sesión del curso de data science?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Mañana', l: 'Para quien piensa con más claridad al empezar el día.' },
      { time: 'Noche', l: 'Para quien sale de la oficina o de la universidad tarde.' },
      { time: 'Individual', l: 'Días y horas que usted acuerda con su mentor.' }
    ],
    cells: [
      { h3: 'Datos reales', p: 'Conjuntos abiertos con licencia revisada, con todos sus defectos.' },
      { h3: 'Cuaderno compartido', p: 'El mentor ve su código y sus gráficos a la vez que usted.' },
      { h3: 'Criterio escrito', p: 'Cada fila excluida queda justificada en el propio código.' },
      { h3: 'Estadística con sentido', p: 'Cada fórmula aparece cuando un problema la necesita.' },
      { h3: 'Portafolio en GitHub', p: 'Cada proyecto queda publicado con su pregunta y sus límites.' },
      { h3: 'Grupo o individual', p: 'De quince a veinte personas de nivel similar, o usted con su mentor.' }
    ]
  },

  projectsH2: 'Análisis y proyectos de estudiantes',
  projectsLede: 'Análisis y aplicaciones hechos por alumnos de varios países; la colección está en <a class="ag-inline-link" href="/student-labs">Student labs</a> (en inglés).',
  reviewsLede: 'Opiniones dejadas en Google por estudiantes y familias, en el inglés en que las escribieron.',

  fees: {
    h2: '¿Cuánto cuesta el curso de data science?',
    lede: 'El precio mensual se publica en dólares estadounidenses y se paga con tarjeta. La conversión a la moneda de su cuenta la hace su banco, de modo que el monto cargado puede variar levemente según la cotización.',
    free: ['Una sesión gratis con un mentor', 'Un primer vistazo guiado a un archivo de datos real', 'Sin tarjeta y sin compromiso'],
    group: ['De quince a veinte personas de nivel similar', 'Un mentor que conoce sus datos', 'Dos clases en vivo semanales', 'Mensualidad sin contrato'],
    one: ['Usted y su mentor', 'Sus propios datos o los de su trabajo', 'El horario que acuerden']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Data science en inglés: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Las sesiones son en vivo, por internet y únicamente en inglés. Para el análisis de datos eso tiene sentido, porque la documentación de Python y sus bibliotecas está en inglés, y cada clase es también práctica oral: explicar un gráfico o un criterio de limpieza ante el mentor. Lima aparece entre las ciudades de inglés alto del EF EPI 2025.' },
      { q: '¿Qué es la ciencia de datos?', a: 'Es el trabajo de convertir datos en respuestas confiables: plantear una pregunta, conseguir y limpiar los datos, resumirlos, mostrarlos y, cuando hace falta, construir modelos que predicen. Python es la herramienta principal.' },
      { q: '¿Necesito saber programar?', a: 'No. El curso empieza con Python desde cero. Si usa Excel, ya tiene una ventaja: según el INEI, el 73,7 % de los peruanos de 15 años a más usó fórmulas en una hoja de cálculo en 2026, y ese razonamiento se traslada a Python.' },
      { q: '¿Cuánta matemática hace falta?', a: 'Para empezar, la del colegio: promedios, porcentajes y tablas. La estadística, la probabilidad y el álgebra lineal necesarias se enseñan dentro del curso, cuando cada proyecto las pide.' },
      { q: '¿Trabajan con datos peruanos?', a: 'Sí. Usamos conjuntos de la Plataforma Nacional de Datos Abiertos con licencia que lo permite, como los matriculados 2024 de la UNHEVAL, publicados con licencia ODC-By. No tenemos relación con la UNHEVAL; solo usamos sus datos abiertos citándolos.' },
      { q: '¿Cuánto dura el curso?', a: 'Nuestra ruta de referencia es de unos seis meses desde cero hasta un proyecto completo, a dos sesiones semanales; cada persona lo acorta o lo alarga.' },
      { q: '¿En qué horario son las sesiones?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. La India lleva 10 horas y 30 minutos de ventaja a Perú en todas las estaciones; las 7:30 a. m. de Lima son las 6:00 p. m. para el mentor.' },
      { q: '¿Cómo se paga?', a: 'Por tarjeta y en dólares estadounidenses; su banco hace el cambio. Probar la primera sesión no cuesta nada y no requiere datos de pago.' },
      { q: '¿Hay versión para adolescentes?', a: 'Sí, un curso de ciencia de datos para 13 a 17 años, con Python y primeros modelos y conjuntos de datos apropiados para su edad.' },
      { q: '¿El curso da un título o créditos?', a: 'No. Somos una academia privada sin vínculo con la SUNEDU, el MINEDU o universidades; no emitimos títulos ni créditos, solo una constancia propia de haber terminado.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más páginas',
    h2: 'Para seguir leyendo',
    lede: 'Lecturas sobre datos, IA y programación; la mayoría en inglés.',
    items: [
      { href: '/data-science-course', label: 'Data science course', p: 'El curso general de ciencia de datos, explicado en detalle.' },
      { href: '/ai-agents-course', label: 'AI agents course', p: 'Agentes de IA que consultan y procesan datos.' },
      { href: '/coding-roadmap', label: 'Coding roadmap', p: 'Qué estudiar antes y después del análisis de datos.' },
      { href: '/real-coding-classes', label: 'Real coding classes', p: 'Nuestra postura: escribir el código, no solo ejecutarlo.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Cómo trabaja un mentor en una sesión en vivo.' },
      { href: '/courses', label: 'All courses', p: 'El catálogo completo.' }
    ]
  },

  start: {
    h2: 'Pruebe una clase gratuita de data science',
    lede: 'En la sesión de prueba abre con el mentor un archivo de datos abiertos, cuentan sus filas y buscan juntos un primer valor sospechoso. A partir de ahí le recomendamos curso, nivel y formato, sin ningún compromiso.',
    readFirst: 'Para leer antes: <a class="ag-inline-link" href="/data-science-course">Data science course</a> describe el temario general y <a class="ag-inline-link" href="/how-we-teach">How we teach</a> nuestro método (ambas en inglés).',
    note: 'Mentores que viven en la India; sesiones en vivo por videollamada y siempre en inglés. Por WhatsApp contestamos rápido, incluso si nos escribe en castellano.',
    formNote: 'Gratis, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Data science', links: [
        { href: '/courses/data-science-complete-masterclass-college', label: 'Ciencia de datos' },
        { href: '/courses/data-analysis-mastery-course-college', label: 'Análisis de datos' },
        { href: '/courses/data-science-course-for-teens-python-data', label: 'Para adolescentes' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Para seguir', links: [
        { href: '/data-science-course', label: 'Data science course' },
        { href: '/coding-roadmap', label: 'Ruta de estudio' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: 'A zero is a number only when it was measured'
  },

  personalityCss: `
.ag-root.ag-dat .ag-hero h1 { letter-spacing: -0.01em; max-width: 22ch; }
.ag-root.ag-dat .ag-capsule { border-left-width: 5px; border-radius: 0; }
.ag-root.ag-dat .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-dat .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-dat .ag-code-note code { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'Plataforma Nacional de Datos Abiertos: dataset "Matriculados a la Universidad Nacional Hermilio Valdizán - 2024 [UNHEVAL]" (ODC-By), its metadata and data dictionary, fetched 9 November 2026; INEI TIC bulletin II trimestre 2026 Cuadro 4.1; MINEDU CNEB (maths competencies, secundaria hours); PROMPERÚ Coyuntura sectorial para software (projection labelled as such); EF EPI 2025 Peru page. The analysis, the maths table, the six-month route and the levels are our own.',
    localProject: 'Sentinel values in a licensed Peruvian open dataset: our Python analysis of the UNHEVAL (Huánuco) 2024 enrolment file (ODC-By) keeps term 1 only (6,530 of 12,787 rows), flags a 1900-01-01 placeholder and eight 2019 to 2021 birth dates, reports 22 rows with 0 credits but an average above 0, and shows that excluding zero averages (students with no approved courses) flips Ingeniería de Sistemas 12.75 over Odontología 12.74 into Odontología 13.22 over Sistemas 13.02. Lesson family: a 0 or a placeholder date that means "no data" is not data.',
    requiredMentions: ['rows: 12787 | term 1: 6530', '0 credits but an average above 0: 22', 'ODONTOLOGÍA            n=221 zeros=8 mean_all=12.74 mean_real=13.22', 'Open Data Commons Attribution License (ODC-By)', 'Resuelve problemas de gestión de datos e incertidumbre', 'el 73,7 % de los peruanos de 15 años a más aplicó fórmulas aritméticas simples', 'más del 70 % de las empresas adoptará arquitecturas de datos en tiempo real', 'A zero is a number only when it was measured', 'En todo el archivo son 171'],
    sources: [
      { claim: 'UNHEVAL 2024 enrolment dataset, ODC-By licence, created 2025-06-27.', url: 'https://www.datosabiertos.gob.pe/dataset/matriculados-la-universidad-nacional-hermilio-valdiz%C3%A1n-2024-unheval' },
      { claim: 'The CSV file analysed (12,787 rows).', url: 'https://www.datosabiertos.gob.pe/sites/default/files/matriculados_2024_0.csv' },
      { claim: 'Data dictionary: PROMEDIO_PONDERADO, CREDITOS_ACUMULADOS, PERIODO_MATRICULA definitions.', url: 'https://www.datosabiertos.gob.pe/sites/default/files/diccionario_datos_matriculados_1.xlsx' },
      { claim: 'INEI 2026: 73.7% used spreadsheet formulas, 12.1% wrote a program (15+), series 2023 to 2026.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'CNEB maths competency on data and uncertainty; secundaria maths hours.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'PROMPERÚ deck: projection that over 70% of companies will adopt real-time data architectures by 2027.', url: 'https://repositorio.promperu.gob.pe/server/api/core/bitstreams/632b2c71-b8c1-4b39-8134-5f057956962c/content' },
      { claim: 'EF EPI 2025 Peru: Lima 555; ages 26 to 30 score 559.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' }
    ],
    rejectedClaims: [
      'Spanish-language teaching: refused; classes are live, online and in English only, said in the capsule and in an FAQ.',
      'Comparing the quality of UNHEVAL degree programmes from their averages: refused; the page says each school grades its own courses.',
      'Using the SEXO, birthplace or other personal columns of the dataset: refused; only period, school, age check, average and credits.',
      'Any relationship with UNHEVAL, SUNEDU, MINEDU or a university, credits or official certificate: none held; the dataset is reused under ODC-By with attribution.',
      'Data-job numbers or salaries in Peru: no recent official figure found; no job promise.',
      'Soles prices, competitor prices or any typed fee: refused; fees render from the template in USD.'
    ]
  }
};
