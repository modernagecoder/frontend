// SHIP: market | Python para estudiantes de ingeniería en Perú: Programación I y métodos numéricos | numerical integration: trapezoid rule, the error falls about four times when n doubles
'use strict';
// Python para estudiantes de ingeniería (ag- Spanish-language door, Peru cluster row PE093, P4, hubGroup subjects).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only; no soles, no typed figure.
// Angle: the engineering student (or the 5° de secundaria student who wants engineering) who typed "curso de python uni"
// (rows.tsv PE093; KEYWORDS.md: "uni" = Universidad Nacional de Ingeniería, whose CTIC sells a Python course; we are not
// connected and never imply it). Spine: where programming sits in a Peruvian engineering plan, read from a university's
// own published curricula (UTEC: Programación I in ciclo 1 of every engineering career, Métodos Numéricos in ciclo 5 of
// four); what "UNI" is and how its admission exam works (from admision.uni.edu.pe; the exam is in Spanish, we promise no
// admission); Python as the engineer's calculator: one original trapezoid-rule lesson; English for engineers (EF EPI
// 2025 by age); certification (PCEP, PCAP); Peru to India clock for a university timetable.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/python-para-estudiantes-de-ingenieria-peru/
// and src-pages/_w2c/, fetched 2026-11-09 with curl; facts-school and facts-market raw copies fetched 2026-11-08):
//  UTEC career pages (utec.edu.pe/carreras/<career>, _w2c/utec-*.html), each: "Duración de la carrera 10 semestres (200
//    créditos)"; "Modalidad de estudio Presencial"; Ingeniería Industrial "Ciclo 1 Total: 20 créditos Programación I 4
//    créditos" and "Ciclo 2 ... Programación Orientada a Objetos 4 créditos Prerrequisito: Programación I"; Ingeniería
//    Mecánica "Ciclo 1 Total: 20 créditos Programación I 4 créditos", "Programación II 4 créditos", ciclo 5 "Métodos
//    Numéricos 3 créditos Prerrequisito: Ecuaciones Diferenciales - Álgebra Lineal" and "IA: Introducción a Machine
//    Learning 3 créditos"; Ingeniería Química ciclo 1 "Programación I 4 créditos", ciclo 2 "Programación II 4 créditos",
//    ciclo 5 "Métodos Numéricos 3 créditos"; Ingeniería Electrónica ciclo 1 "Programación I 4 créditos", ciclo 2
//    "Programación II 4 créditos"; Ingeniería Civil ciclo 1 "Programación I", ciclo 2 "Programación Orientada a Objetos",
//    ciclo 5 "Métodos Numéricos 3 créditos"; Ingeniería de la Energía ciclo 1 "Programación I", ciclo 2 "Programación II",
//    ciclo 5 "Métodos Numéricos 3 créditos"; Ingeniería Mecatrónica ciclo 1 "Programación I", ciclo 2 "Programación II".
//    None of the pages names the programming language. (fc.uni.edu.pe curriculum page returned HTTP 406: stopped there.
//    fiis.uni.edu.pe did not connect. PUCP plan page has no course list in static HTML. ULima malla is an image PDF.)
//  UNI Admisión 2026-2 (admision.uni.edu.pe/admision2026-2/index.html, _w2c/uni-adm.html; FACTS 67-69, 72, 75): "El examen
//    es de manera presencial y consiste en tres pruebas tomadas en tres días (lunes, miércoles y viernes)"; "1. Primera
//    prueba: - APTITUD ACADÉMICA - HUMANIDADES 2. Segunda prueba: - MATEMÁTICA 3. Tercera prueba: - Física - Química";
//    "Examen de Admisión Ordinario Lunes 10, miércoles 12 y viernes 14 de agosto de 2026"; "Modalidad Ingreso Directo
//    (CEPRE-UNI)"; FAQ: "es requisito principal para postular al examen de admisión es el haber culminado tus estudios
//    secundarios". The page also shows "Fechas del examen: 16, 18, 20 de FEBRERO" with no year: not printed.
//  MINEDU press note 24 July 2025 (FACTS 45, 46): Fábrica de Programadores "incluye un curso presencial de iniciación en la
//    Universidad Nacional de Ingeniería (UNI)"; participants "podrán rendir el examen PCEP".
//  SUNEDU press note 15 September 2021 (facts-market/src/sunedu_1_1m.txt): "94 universidades licenciadas (46 públicas y 48
//    privadas) que albergan a 1 millón 100 mil de estudiantes universitarios".
//  EF EPI 2025 Peru page (facts-market/src/ef_peru.raw): "ageGroup1Score":469 (18-20, low), "ageGroup2Score":540 (21-25,
//    moderate), "ageGroup3Score":559 (26-30, high); "IT : 522"; "Student : 482"; Lima 555.
//  INEI Boletín TIC II trimestre 2026: "el 97,3% de la población de 19 a 24 años utilizó Internet"; "laptop (18,9%)".
//  Python Institute (_w2c/pcep.html, pcap.html): PCEP-30-03 35 questions, 50 min, 70%; PCAP-31-04 42 questions, 65 min, 72%.
//  PEP 745: "3.14.0 final: Tuesday, 2025-10-07".
//  Course facts (content/courses/data): python-programming-masterclass-zero-to-advanced-college "9-11 months", 18+;
//    data-analytics-mathematics-masterclass "12-14 months", "built for college students and working professionals".
//  Time: tzdata America/Lima UTC-5 (no DST), Asia/Kolkata UTC+5:30; India 10 h 30 min ahead.
// Our own example, run with python3 -I (trapecio.py and trapecio_cubo.py in the src-pages folder), exact output:
//    n= 1  area=13.500000  error=4.500000 / n= 2  area=10.125000  error=1.125000  ratio=4.00 / n= 4  area=9.281250
//    error=0.281250  ratio=4.00 / n= 8  area=9.070312  error=0.070312  ratio=4.00 / n=16  area=9.017578  error=0.017578
//    ratio=4.00.  Cubic variant (x**3 on [0, 2], exact 4): n=16 area=4.015625 error=0.015625 ratio=4.00.
// Lesson family: numerical integration with the trapezoid rule; a function passed as an argument, a loop over interior
//    points, and the error that falls about four times each time n doubles (second-order method).

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  'def f(x):',
  '    return x * x',
  '',
  'def trapecio(f, a, b, n):',
  '    h = (b - a) / n',
  '    total = (f(a) + f(b)) / 2',
  '    for i in range(1, n):',
  '        total = total + f(a + i * h)',
  '    return total * h',
  '',
  'exacto = 9.0',
  'anterior = None',
  'for n in [1, 2, 4, 8, 16]:',
  '    aprox = trapecio(f, 0, 3, n)',
  '    error = aprox - exacto',
  '    if anterior is None:',
  "        print(f'n={n:2d}  area={aprox:.6f}  error={error:.6f}')",
  '    else:',
  "        print(f'n={n:2d}  area={aprox:.6f}  error={error:.6f}  ratio={anterior / error:.2f}')",
  '    anterior = error'
].join('\n');

const OUT = [
  'n= 1  area=13.500000  error=4.500000',
  'n= 2  area=10.125000  error=1.125000  ratio=4.00',
  'n= 4  area=9.281250  error=0.281250  ratio=4.00',
  'n= 8  area=9.070312  error=0.070312  ratio=4.00',
  'n=16  area=9.017578  error=0.017578  ratio=4.00'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'subjects', label: 'Python para ingeniería' },
  slug: 'python-para-estudiantes-de-ingenieria-peru',
  code: 'pei',
  accent: '#0B764D',
  accentRationale: 'Python para estudiantes de ingeniería: a drafting-table green #0B764D, the colour of the cutting mats and engineering graph paper that first-year students in Lima carry to class, lighter than the jungle green of the kids Python door; contrast 4.59 on the paper #FBF8F2 (alloc.tsv) and at or above 4.5 on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Python para estudiantes de ingeniería',
  title: 'Python para estudiantes de ingeniería en Perú, en inglés',
  description: 'Python para estudiantes de ingeniería en Perú, en vivo, en línea y en inglés: Programación I, métodos numéricos y datos, en grupo o individual, a la hora que elija.',
  ogDescription: 'Python para ingeniería en Perú: dónde aparece en la malla, qué es la UNI y su examen, cómo se usa en métodos numéricos y una lección propia con trapecios.',
  twitterDescription: 'Python en vivo y en inglés para estudiantes de ingeniería en Perú: de Programación I a métodos numéricos y datos.',
  pageName: 'Python para estudiantes de ingeniería',
  webPageDescription: 'Guía para estudiantes de ingeniería en Perú que buscan un curso de Python en vivo y en inglés: dónde aparece la programación en las mallas publicadas por las universidades, qué significa "curso de Python UNI" y cómo es el examen de admisión de la UNI según su propia página, cómo se usa Python en métodos numéricos con una lección propia sobre la regla del trapecio, y qué certificación tiene sentido.',
  courseDescription: 'Clases en vivo y en línea de Python para estudiantes de ingeniería y ciencias en todo el Perú, dictadas solo en inglés: fundamentos para Programación I, métodos numéricos, análisis de datos y automatización, con preparación opcional para PCEP y PCAP, en clase grupal o individual y a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Python para ingeniería',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#malla', label: 'La malla' },
    { href: '#uni', label: 'Python y la UNI' },
    { href: '#trapecio', label: 'Métodos numéricos' },
    { href: '#ingles', label: 'Inglés técnico' },
    { href: '#reloj', label: 'Horarios' }
  ],
  eyebrow: 'Perú &middot; Python para ingeniería &middot; Universitarios',
  h1: 'Python para estudiantes de ingeniería, en vivo y en inglés',
  lede: 'En casi todas las ingenierías el primer ciclo trae un curso de programación, y unos semestres después llegan los métodos numéricos, donde el código deja de ser un ejercicio y se convierte en la calculadora del ingeniero. Esta página es para quien estudia o va a estudiar ingeniería en Perú y quiere dominar Python a fondo, en inglés, con alguien que le explique cada paso.',
  secondaryCta: { href: '#trapecio', label: 'Ver la lección de métodos numéricos' },
  wa: 'Hola Modern Age Coders, estudio ingeniería en Perú y quiero reforzar Python en inglés. ¿Puedo reservar una clase gratis?',
  heroNote: 'Clases en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; Python para ciencias e ingeniería, explicado en inglés',
  spec: [
    ['Para quién', 'Universitarios de ingeniería y ciencias, y 5° de secundaria'],
    ['Temas', 'Fundamentos, métodos numéricos, datos y automatización'],
    ['Idioma', 'Inglés, con un mentor que ajusta el ritmo'],
    ['Formato', 'Grupo de quince a veinte, o individual'],
    ['Horario', 'Cualquier día y a cualquier hora'],
    ['Vínculos', 'Ninguno con la UNI ni con otra universidad']
  ],
  capsuleQ: 'La respuesta corta',
  capsule: 'Modern Age Coders enseña Python a estudiantes de ingeniería y ciencias de todo el Perú, en vivo, en línea y en inglés: los fundamentos que pide el curso de Programación I del primer ciclo, y luego el uso de Python en métodos numéricos, análisis de datos y automatización. Un mentor desde la India trabaja con usted por videollamada, con su código en pantalla. No tenemos relación con la UNI ni con ninguna universidad: acompañamos sus cursos, no los reemplazamos. Puede elegir clase grupal o individual, cualquier día y a cualquier hora, y la primera clase es gratis.',

  picks: {
    eyebrow: 'Cursos recomendados',
    h2: 'Tres cursos de Python para un estudiante de ingeniería',
    lede: 'Uno para dominar el lenguaje, uno para la matemática que hay detrás de los datos y uno para aplicar las dos cosas a problemas reales.',
    items: [
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'PEI / 01', title: 'Python de cero a avanzado', alt: 'Imagen del curso de Python de cero a avanzado para universitarios', note: 'Para mayores de 18. Python a profundidad, pruebas, Git y APIs, en nueve a once meses. Sirve tanto para quien llega a Programación I sin experiencia como para quien aprobó el curso pero no se siente seguro.' },
      { course: 'data-analytics-mathematics-masterclass', code: 'PEI / 02', title: 'Matemática para ciencia de datos', alt: 'Imagen del curso de matemática para ciencia de datos', note: 'Para universitarios y profesionales. Estadística, álgebra lineal y la matemática del machine learning, programadas en Python en lugar de solo escritas en la pizarra.' },
      { course: 'data-science-complete-masterclass-college', code: 'PEI / 03', title: 'Ciencia de datos', alt: 'Imagen del curso de ciencia de datos para universitarios', note: 'Desde los 18 años, de diez a doce meses. Del archivo de datos crudo al modelo, con Python, machine learning y aprendizaje profundo.' }
    ]
  },

  sections: [
    {
      id: 'malla',
      eyebrow: 'La malla curricular',
      h2: '¿En qué ciclo se lleva programación en ingeniería?',
      lede: 'En el primero. En las mallas que publica la Universidad de Ingeniería y Tecnología (UTEC), todas las carreras de ingeniería abren con Programación I en el ciclo 1, y cuatro de ellas vuelven a la programación en el ciclo 5 con Métodos Numéricos.',
      body: [
        { kind: 'table', numCols: [], caption: 'Cursos de programación en las mallas de ingeniería de la UTEC', head: ['Carrera', 'Ciclo 1', 'Ciclo 2', 'Ciclo 5'], rows: [
          ['Ingeniería Civil', 'Programación I (4 créditos)', 'Programación Orientada a Objetos (4)', 'Métodos Numéricos (3)'],
          ['Ingeniería Industrial', 'Programación I (4 créditos)', 'Programación Orientada a Objetos (4)', 'No figura'],
          ['Ingeniería Mecánica', 'Programación I (4 créditos)', 'Programación II (4)', 'Métodos Numéricos (3)'],
          ['Ingeniería Química', 'Programación I (4 créditos)', 'Programación II (4)', 'Métodos Numéricos (3)'],
          ['Ingeniería de la Energía', 'Programación I (4 créditos)', 'Programación II (4)', 'Métodos Numéricos (3)'],
          ['Ingeniería Electrónica', 'Programación I (4 créditos)', 'Programación II (4)', 'No figura'],
          ['Ingeniería Mecatrónica', 'Programación I (4 créditos)', 'Programación II (4)', 'No figura']
        ] },
        { kind: 'source', html: 'Fuente: páginas de cada carrera en utec.edu.pe/carreras, leídas el 9 de noviembre de 2026. Cada página indica una duración de 10 semestres (200 créditos) y modalidad presencial. "No figura" significa que la malla publicada no tiene un curso de Métodos Numéricos en el ciclo 5. Las páginas no dicen en qué lenguaje se dicta cada curso. Usamos la UTEC porque publica sus mallas completas en texto; las de otras universidades que intentamos leer no estaban disponibles en ese formato.' },
        { kind: 'p', mt: true, html: 'La tabla dice algo que cualquier cachimbo descubre en la primera semana: la programación llega antes que casi todo lo demás. Programación I comparte el ciclo 1 con Fundamentos del Cálculo, y los cuatro créditos que vale pesan igual que los de un curso de química. Quien llega sin haber escrito nunca un programa tiene que aprender a la vez la lógica, el lenguaje y la forma de trabajar, mientras se adapta a la universidad.' },
        { kind: 'p', html: 'En el ciclo 5 la programación vuelve con otra cara. Métodos Numéricos tiene como prerrequisitos Ecuaciones Diferenciales y Álgebra Lineal en las mallas de Mecánica y Civil: ya no se trata de aprender a programar, sino de usar el programa para resolver lo que a mano no se puede, como una integral sin fórmula cerrada o un sistema de ecuaciones grande. Mecánica suma en el mismo ciclo un curso de introducción a machine learning. Llegar a ese punto con Python bien aprendido cambia mucho la experiencia.' }
      ]
    },
    {
      id: 'uni',
      eyebrow: 'Python y la UNI',
      h2: '¿Qué significa "curso de Python UNI"?',
      lede: 'Quien busca "curso de Python UNI" casi siempre se refiere a la Universidad Nacional de Ingeniería, en Lima, o a los cursos que se dictan en ella. Nosotros no somos la UNI ni tenemos ningún convenio con ella; lo que ofrecemos es otra cosa: clases en vivo, en inglés, que sirven a estudiantes de cualquier universidad.',
      body: [
        { kind: 'p', html: 'La UNI aparece en otro programa de Python que conviene conocer. La Fábrica de Programadores del MINEDU, presentada por el MINEDU el 24 de julio de 2025 y dirigida en su primera etapa a mil estudiantes de los dos últimos grados de secundaria de Lima Norte, contempla una etapa presencial de iniciación dictada en la propia UNI, seguida de otra virtual a cargo de la UPN; al terminar ambas, los escolares pueden presentarse al examen PCEP. Es un programa del Estado con su propia selección; no participamos en él.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Examen de Admisión Ordinario UNI 2026-2, según la página de admisión de la UNI', head: ['Prueba', 'Día de 2026', 'Contenido'], rows: [
          ['Primera prueba', 'Lunes 10 de agosto', 'Aptitud Académica y Humanidades'],
          ['Segunda prueba', 'Miércoles 12 de agosto', 'Matemática'],
          ['Tercera prueba', 'Viernes 14 de agosto', 'Física y Química']
        ] },
        { kind: 'source', html: 'Fuente: Universidad Nacional de Ingeniería, página de Admisión 2026-2 (admision.uni.edu.pe), leída el 9 de noviembre de 2026: "El examen es de manera presencial y consiste en tres pruebas tomadas en tres días (lunes, miércoles y viernes)". Según sus preguntas frecuentes, el requisito principal para postular es haber terminado la secundaria. La UNI tiene además una modalidad de Ingreso Directo a través de su centro preuniversitario, el CEPRE-UNI. Para fechas de próximos procesos, consulte siempre la página oficial de la UNI.' },
        { kind: 'p', mt: true, html: 'Ninguna de las tres pruebas es de programación, y todas se rinden en castellano. Si usted está en 5° de secundaria y apunta a una ingeniería, nuestro aporte no es prepararlo para ese examen: eso lo hacen la academia o el centro preuniversitario, y la decisión de admisión es solo de la universidad. Lo que sí podemos darle es razonamiento matemático practicado en inglés y una base de Python que le quitará presión el primer ciclo. No prometemos ingresos ni puntajes.' },
        { kind: 'p', html: 'Para ponerlo en escala: según una nota de la SUNEDU del 15 de septiembre de 2021, el país contaba entonces con 94 universidades licenciadas, 46 públicas y 48 privadas, con 1 millón 100 mil estudiantes. Es la cifra oficial más reciente que encontramos publicada; la citamos con su año. Atendemos a estudiantes de cualquiera de ellas, de Lima o de regiones, porque las clases son por internet.' }
      ]
    },
    {
      id: 'trapecio',
      tint: 'tint',
      eyebrow: 'Una lección de métodos numéricos',
      h2: '¿Cómo se usa Python en métodos numéricos?',
      lede: 'Como una calculadora que usted mismo programa y en la que puede confiar porque sabe cómo funciona. Esta lección es nuestra: aproximamos el área bajo una curva con la regla del trapecio y medimos cómo baja el error cuando usamos más trapecios.',
      body: [
        { kind: 'code', label: 'Regla del trapecio en Python', lang: 'Python', code: PY, note: 'El mentor pregunta antes de ejecutar: "If we double n, how much smaller will the error be?" La mayoría responde "half". Lo comprobamos.' },
        { kind: 'code', label: 'Lo que imprime', lang: 'Salida', code: OUT, note: 'Esto mostró la terminal al ejecutarlo nosotros con Python 3.14.8. El área exacta de x al cuadrado entre 0 y 3 es 9.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Una función como argumento.</strong> <code>trapecio</code> recibe la función <code>f</code> igual que recibe un número. Cambiando una línea, la misma herramienta integra cualquier otra función: es la idea que hace reutilizable a un programa.',
          '<strong>Los extremos valen la mitad.</strong> <code>(f(a) + f(b)) / 2</code> refleja la fórmula: los puntos interiores se cuentan completos y los dos extremos a medias. El bucle <code>range(1, n)</code> recorre solo los interiores; con <code>range(0, n)</code> el resultado sale mal, y es un error típico del primer intento.',
          '<strong>El error no se divide entre dos.</strong> La columna <code>ratio</code> muestra 4.00 en todas las filas: cada vez que duplicamos los trapecios, el error baja cuatro veces. Eso es lo que significa que la regla del trapecio sea un método de segundo orden, y se ve en pantalla en lugar de memorizarse.',
          '<strong>Comprobar con otra función.</strong> Cambiamos <code>x * x</code> por <code>x ** 3</code>, el intervalo por 0 a 2 y el valor exacto por 4. Con <code>n=16</code> el programa imprime <code>area=4.015625</code> y <code>ratio=4.00</code> otra vez: la regla se mantiene.',
          '<strong>Su turno.</strong> Escriba la regla de Simpson junto a esta y compare la columna <code>ratio</code>. Antes de ejecutar, escriba su predicción. El mentor no le dará el número; le preguntará por qué cree que cambiará.'
        ] },
        { kind: 'p', mt: true, html: 'Así enseñamos todo: el estudiante predice, ejecuta, compara y explica. Una herramienta de IA puede escribir la función <code>trapecio</code> en segundos, pero no le dirá por qué el error se divide entre cuatro ni le avisará si usó mal los extremos. En un examen de métodos numéricos, y en un cálculo de ingeniería real, lo que se evalúa es justamente ese criterio.' }
      ]
    },
    {
      id: 'ingles',
      eyebrow: 'Inglés técnico',
      h2: '¿Por qué aprender Python en inglés si estudio ingeniería en Perú?',
      lede: 'Porque la bibliografía técnica, la documentación de las bibliotecas de Python y la mayor parte de las respuestas a los errores están en inglés. Y porque la edad universitaria es justo cuando más cuesta ese idioma, según el EF EPI 2025.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Inglés en Perú por edad y ocupación, EF EPI 2025', head: ['Grupo', 'Puntaje', 'Nivel según EF'], rows: [
          ['De 18 a 20 años', '469', 'Bajo'],
          ['De 21 a 25 años', '540', 'Moderado'],
          ['De 26 a 30 años', '559', 'Alto'],
          ['Estudiantes', '482', 'Bajo el 519 del Perú'],
          ['Tecnologías de la información', '522', 'Cerca del promedio del país (519)']
        ] },
        { kind: 'source', html: 'Fuente: EF EPI 2025, ficha de país de Perú publicada por EF Education First, revisada en noviembre de 2026. EF considera nivel alto desde 550 puntos y moderado desde 500. Los datos provienen de personas mayores de 18 años que rindieron el examen de EF, no de una muestra de toda la población.' },
        { kind: 'p', mt: true, html: 'Entre los 18 y los 20 años, la edad de los primeros ciclos, el grupo peruano del EF EPI 2025 está en nivel bajo, con 469 puntos; a los 26 a 30 años, cuando muchos ya trabajan, sube a 559. El salto ocurre, en buena parte, por necesidad. Aprender Python en inglés durante la carrera adelanta ese salto: usted lee la documentación de NumPy o de SciPy sin traductor, entiende el mensaje de error y puede explicar su código en una entrevista con una empresa internacional.' },
        { kind: 'p', html: 'No le pedimos un inglés perfecto para empezar. El mentor escribe en pantalla los términos técnicos, repite con otras palabras y le pide que explique su código en voz alta, en frases sencillas. Lo que se practica cada semana es exactamente el inglés que usará después. Para ver cómo trabajamos con escolares de colegios bilingües, revise nuestra guía sobre <a class="ag-inline-link" href="/english-medium-coding-classes-lima">programación en inglés para familias de Lima</a>.' }
      ]
    },
    {
      id: 'certificacion',
      eyebrow: 'Certificación',
      h2: '¿Le sirve a un estudiante de ingeniería una certificación de Python?',
      lede: 'Puede servir como prueba ordenada de sus conocimientos, pero no reemplaza un proyecto. Para un estudiante de ingeniería, el PCEP y el PCAP del Python Institute son útiles si quiere un respaldo externo de lo que sabe.',
      body: [
        { kind: 'two',
          leftH3: 'Lo que dice el Python Institute',
          left: [
            'El PCEP-30-03, nivel inicial, tiene 35 preguntas en 50 minutos y pide 70% para aprobar. El PCAP-31-04, nivel asociado, tiene 42 preguntas en 65 minutos y pide 72%. Ambas credenciales tienen una validez de 5 años, según las páginas del Python Institute leídas en noviembre de 2026.',
            'El PCAP incluye programación orientada a objetos, el tema del curso de Programación Orientada a Objetos que aparece en el ciclo 2 de Civil e Industrial en la UTEC.'
          ],
          rightH3: 'Lo que hacemos y lo que no',
          right: [
            'Preparamos los dos exámenes en nuestro curso de PCEP y PCAP. No los otorgamos, no vendemos vouchers y no garantizamos el resultado: el examen se compra y se rinde directamente con el Python Institute.',
            'Al aprobar nuestros cursos usted recibe nuestro certificado de finalización, que no tiene carácter oficial ni validez ante la universidad o la SUNEDU. Su valor está en los proyectos que lo acompañan.'
          ] },
        { kind: 'p', mt: true, html: 'Nuestra sugerencia a un estudiante de ingeniería: primero un repositorio con dos o tres proyectos que conecten Python con su especialidad (un análisis de datos de laboratorio, una simulación, una herramienta de cálculo), y después, si quiere, la certificación. El orden inverso suele dar un certificado sin nada que mostrar detrás. Las versiones de Python cambian poco a poco: la 3.14 se publicó el 7 de octubre de 2025 según el calendario oficial PEP 745, y es la que usamos en clase.' }
      ]
    },
    {
      id: 'reloj',
      eyebrow: 'Horarios',
      h2: '¿Cómo encaja una clase en vivo con el horario de la universidad?',
      lede: 'Usted elige el día y la hora, y puede cambiarlos cuando cambie su horario de ciclo. Estas filas convierten horas típicas de un universitario en Perú a la hora de la India; no son un horario de clases.',
      body: [
        { kind: 'table', numCols: [], caption: 'De la hora peruana a la hora de la India: ejemplos para un día de universidad', head: ['En Lima', 'En la India', 'Allá es'], rows: [
          ['6:30 a. m.', '5:00 p. m.', 'El mismo día'],
          ['7:00 a. m.', '5:30 p. m.', 'El mismo día'],
          ['12:30 p. m.', '11:00 p. m.', 'El mismo día'],
          ['5:00 p. m.', '3:30 a. m.', 'El día siguiente'],
          ['9:00 p. m.', '7:30 a. m.', 'El día siguiente'],
          ['11:00 p. m.', '9:30 a. m.', 'El día siguiente']
        ] },
        { kind: 'source', html: 'Cálculo propio a partir de tzdata: America/Lima es UTC-5 durante todo el año, sin horario de verano, en línea con la hora oficial del INACAL; Asia/Kolkata es UTC+5:30. La diferencia de 10 horas y 30 minutos es constante.' },
        { kind: 'p', mt: true, html: 'Los universitarios suelen elegir la primera hora de la mañana, antes de las clases presenciales, o la noche, después de los laboratorios. Las semanas de parciales y finales se pueden mover sin perder el curso, porque el horario lo fija usted con su mentor. Según el INEI, en el segundo trimestre de 2026 el 97,3% de la población de 19 a 24 años usó internet, así que la conexión rara vez es el problema; lo es el tiempo, y por eso la flexibilidad importa. Si prefiere aprovechar el verano para adelantar, vea el plan de <a class="ag-inline-link" href="/vacaciones-utiles-2027-programacion-online">vacaciones útiles 2027 de programación online</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Avance',
    h2: '¿Cómo medir el avance en Python durante la carrera?',
    lede: 'Cinco niveles nuestros, pensados para un estudiante de ingeniería. No son créditos ni notas; son la forma en que su mentor le dice dónde está.',
    table: { caption: 'Cinco niveles de Python para ingeniería (nuestros)', head: ['Nivel', 'Corresponde a', 'Usted puede'], rows: [
      ['1. Programar sin miedo', 'Antes o durante Programación I', 'escribir y depurar programas cortos con condicionales, bucles y funciones'],
      ['2. Organizar datos', 'Programación II u Orientada a Objetos', 'usar listas, diccionarios y clases propias, y leer datos de un archivo'],
      ['3. Calcular', 'Métodos Numéricos', 'implementar un método como el trapecio y medir su error'],
      ['4. Analizar', 'Laboratorios y proyectos', 'limpiar datos reales, graficarlos y sacar conclusiones defendibles'],
      ['5. Construir', 'Prácticas y tesis', 'escribir una herramienta que otra persona pueda usar y entender']
    ] },
    left: { h3: 'Durante el ciclo', ps: [
      'Use Python en los cursos que no son de programación: verifique sus resultados de física o de estadística con un programa corto. Así practica sin sumar horas a la semana.',
      'Guarde cada programa útil en un repositorio con un nombre que diga qué hace. En dos años será su portafolio.'
    ] },
    right: { h3: 'Antes de un examen', ps: [
      'Escriba el método a mano en papel antes de programarlo. Si no puede escribir los pasos, el código tampoco saldrá.',
      'Pruebe su programa con un caso cuyo resultado conoce, como el área de x al cuadrado entre 0 y 3, antes de confiar en él.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más para un futuro ingeniero',
    lede: 'Para ampliar lo que da la malla, según su especialidad y sus planes. Todos en vivo y en inglés, desde los 18 años.',
    bands: [
      { num: 'I', h3: 'Bases de computación', sub: 'Algoritmos y sistemas', courses: [
        { code: 'PEI / BASES / 01', slug: 'data-structures-algorithms-masterclass-college', title: 'Estructuras de datos y algoritmos', blurb: 'Lo que piden las entrevistas técnicas y los cursos de algoritmos de la carrera.' },
        { code: 'PEI / BASES / 02', slug: 'cpp-programming-complete-masterclass-college', title: 'C++ de fundamentos a moderno', blurb: 'El lenguaje de los sistemas embebidos y de la programación competitiva.' },
        { code: 'PEI / BASES / 03', slug: 'mysql-database-complete-masterclass-college', title: 'Bases de datos con MySQL', blurb: 'SQL y diseño de bases de datos para guardar lo que sus programas calculan.' }
      ] },
      { num: 'II', h3: 'Datos e IA', sub: 'Para todas las especialidades', courses: [
        { code: 'PEI / DATOS / 01', slug: 'ai-ml-masterclass-complete-college', title: 'IA y machine learning', blurb: 'De la matemática de los modelos al aprendizaje profundo y la IA generativa.' },
        { code: 'PEI / DATOS / 02', slug: 'data-analysis-mastery-course-college', title: 'Análisis de datos', blurb: 'Hojas de cálculo, consultas SQL y gráficos en Python para informes de laboratorio.' },
        { code: 'PEI / DATOS / 03', slug: 'python-ai-automation-masterclass-college', title: 'Automatización con Python', blurb: 'Scripts que ahorran horas de trabajo repetitivo en cualquier ingeniería.' }
      ] },
      { num: 'III', h3: 'Mostrar lo que sabe', sub: 'Certificación y proyectos', courses: [
        { code: 'PEI / MOSTRAR / 01', slug: 'pcep-pcap-python-certification-course', title: 'PCEP y PCAP', blurb: 'Los dos exámenes de Python más pedidos, PCEP primero y PCAP después.' },
        { code: 'PEI / MOSTRAR / 02', slug: 'pcap-python-certification-prep-course', title: 'Solo PCAP', blurb: 'Para quien ya domina lo básico y quiere el nivel asociado.' },
        { code: 'PEI / MOSTRAR / 03', slug: 'full-stack-web-development-masterclass-college', title: 'Desarrollo web completo', blurb: 'Para publicar sus herramientas en una web que cualquiera pueda usar.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo trabajamos con un estudiante de ingeniería?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Muy temprano', l: 'Antes de la primera clase presencial del día.' },
      { time: 'De noche', l: 'Después de laboratorios y prácticas.' },
      { time: 'Individual', l: 'Ajustada a su ciclo y a sus semanas de exámenes.' }
    ],
    cells: [
      { h3: 'Su código, en pantalla', p: 'Trabajamos sobre lo que usted escribe, no sobre diapositivas.' },
      { h3: 'Inglés técnico', p: 'Términos escritos, frases cortas y tiempo para preguntar.' },
      { h3: 'Problemas propios', p: 'Ejercicios escritos por nosotros, nunca las tareas de su universidad.' },
      { h3: 'Predecir primero', p: 'Antes de ejecutar, usted dice qué saldrá y por qué.' },
      { h3: 'Mentor estable', p: 'La misma persona sigue su avance de ciclo en ciclo.' },
      { h3: 'Grupo o individual', p: 'Un grupo de quince a veinte con su mismo nivel, o clases solo para usted.' }
    ]
  },

  projectsH2: 'Proyectos de nuestros estudiantes',
  projectsLede: 'Algunos trabajos de estudiantes mayores, con Python y otros lenguajes. Hay más en <a class="ag-inline-link" href="/student-labs">Student labs</a> (en inglés).',
  reviewsLede: 'Reseñas que estudiantes y familias dejaron en Google, en inglés y sin editar.',

  fees: {
    h2: 'Precio del curso de Python para estudiantes de ingeniería',
    lede: 'La cuota mensual aparece en dólares estadounidenses y se paga con tarjeta. Su banco la convierte a su moneda al tipo de cambio del día, de modo que el cargo puede diferir un poco del monto mostrado.',
    free: ['Una clase de prueba sin pago', 'Un diagnóstico de su nivel en Python', 'Sin tarjeta y sin compromiso'],
    group: ['Quince a veinte estudiantes de nivel parecido', 'Un mentor fijo', 'Dos clases en vivo por semana', 'Pago mensual, sin contrato'],
    one: ['Solo usted y el mentor', 'Temas al ritmo de su ciclo', 'Horario que usted define']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Python para estudiantes de ingeniería: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No: todo el curso va en inglés, en vivo y por internet, y para un estudiante de ingeniería eso es parte del valor: aprende Python y el inglés técnico con el que trabajará. El mentor habla claro y repite cuando hace falta. Lima figura con inglés de nivel alto en el EF EPI 2025, y la conversación en clase es lo que más ayuda a hablarlo.' },
      { q: '¿Ustedes dictan el curso de Python de la UNI?', a: 'No. No somos la Universidad Nacional de Ingeniería ni tenemos convenio con ella o con otra universidad. Somos una escuela en línea que enseña Python en vivo y en inglés a estudiantes de cualquier universidad del Perú.' },
      { q: '¿En qué ciclo se lleva programación en ingeniería?', a: 'Normalmente en el primero. En las mallas publicadas por la UTEC, todas sus ingenierías tienen Programación I en el ciclo 1, con 4 créditos, y Civil, Mecánica, Química y Energía tienen Métodos Numéricos en el ciclo 5.' },
      { q: '¿Me ayudan con las tareas de mi universidad?', a: 'No resolvemos tareas ni evaluaciones de la universidad. Enseñamos los mismos temas con problemas escritos por nosotros, para que usted pueda resolver los suyos solo y explicarlos.' },
      { q: '¿Python o MATLAB para métodos numéricos?', a: 'Use el que pida su curso. Python es gratuito y lo puede instalar en cualquier computadora, y sus bibliotecas científicas cubren lo que se ve en métodos numéricos. Lo que aprenda de un método en Python se traslada a cualquier otra herramienta.' },
      { q: '¿El examen de admisión de la UNI incluye programación?', a: 'No. Según la página de admisión de la UNI, el examen ordinario son tres pruebas presenciales: Aptitud Académica y Humanidades, Matemática, y Física y Química. Se rinden en castellano. No preparamos ese examen ni prometemos ingresos.' },
      { q: '¿Necesito saber programar para empezar?', a: 'No. El curso de Python de cero a avanzado empieza desde la primera variable. Si ya aprobó Programación I, el mentor lo ubica en el punto que le corresponda.' },
      { q: '¿El curso tiene certificado?', a: 'Sí, nuestro certificado de finalización al aprobar el examen final, sin carácter oficial. Si busca un respaldo externo, lo preparamos para el PCEP y el PCAP; la inscripción y el examen se hacen con el Python Institute.' },
      { q: '¿Puedo cambiar el horario cuando empiece otro ciclo?', a: 'Sí. Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Por ejemplo, una clase a las 7:00 a. m. en Lima es a las 5:30 p. m. para su mentor en la India.' },
      { q: '¿En qué moneda se paga?', a: 'En dólares de Estados Unidos, con tarjeta; el banco hace la conversión. La clase de prueba es gratis y no requiere tarjeta.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más páginas',
    h2: 'Lecturas útiles para estudiantes de ingeniería',
    lede: 'Páginas de nuestro sitio, en inglés salvo la primera, que complementan esta guía.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Nuestra oferta completa para estudiantes en Perú, por edad y tema.' },
      { href: '/python-for-data-science', label: 'Python for data science', p: 'Lo que hay que dominar de Python antes de trabajar con datos.' },
      { href: '/python-for-machine-learning', label: 'Python for machine learning', p: 'El camino de Python a los primeros modelos de aprendizaje automático.' },
      { href: '/data-structures-and-algorithms-course', label: 'Data structures and algorithms course', p: 'Algoritmos y estructuras de datos para la carrera y las entrevistas.' },
      { href: '/python-certification-pcep-pcap-course', label: 'PCEP and PCAP course', p: 'Detalles de la preparación para las certificaciones del Python Institute.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Qué hace el mentor en cada tramo de la sesión.' }
    ]
  },

  start: {
    h2: 'Reserve una clase de Python gratis',
    lede: 'En la clase de prueba el mentor le pregunta en qué ciclo está, qué cursos lleva y dónde se traba; luego le propone un problema numérico corto para ver cómo lo encara. Al final le sugiere un curso y un ritmo, y usted decide si sigue.',
    readFirst: 'Antes de reservar puede mirar <a class="ag-inline-link" href="/python-for-data-science">Python for data science</a> o <a class="ag-inline-link" href="/how-we-teach">How we teach</a>, ambas en inglés.',
    note: 'Clases en vivo y en línea con mentores en la India, dictadas solo en inglés. Si nos escribe por WhatsApp, puede hacerlo en castellano.',
    formNote: 'Sin costo, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Python y ciencias', links: [
        { href: '/courses/python-programming-masterclass-zero-to-advanced-college', label: 'Python de cero a avanzado' },
        { href: '/courses/data-analytics-mathematics-masterclass', label: 'Matemática para datos' },
        { href: '/courses/data-science-complete-masterclass-college', label: 'Ciencia de datos' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Para leer', links: [
        { href: '/python-for-machine-learning', label: 'Python y machine learning' },
        { href: '/data-structures-and-algorithms-course', label: 'Algoritmos' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: 'Duplique n y el error cae a la cuarta parte'
  },

  personalityCss: `
.ag-root.ag-pei .ag-hero h1 { letter-spacing: -0.014em; max-width: 23ch; }
.ag-root.ag-pei .ag-capsule { border-left-width: 3px; border-radius: 0; }
.ag-root.ag-pei .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-pei .ag-table caption { text-align: left; text-transform: none; font-weight: 600; }
.ag-root.ag-pei .ag-table td { font-variant-numeric: tabular-nums; }
`,

  dossier: {
    curriculumAuthority: 'UTEC career pages (seven engineering curricula: Programación I in ciclo 1, Programación II or Programación Orientada a Objetos in ciclo 2, Métodos Numéricos in ciclo 5 of four careers), read 9 Nov 2026; UNI Admisión 2026-2 page and FAQ; MINEDU Fábrica de Programadores press note (24 July 2025); SUNEDU press note (15 Sep 2021); EF EPI 2025 Peru page; INEI Boletín TIC II trimestre 2026; Python Institute PCEP and PCAP pages; PEP 745; tzdata and INACAL for time. The lesson, the five levels and the advice are our own.',
    localProject: 'The trapezoid rule in Python for a Peruvian engineering student heading for Métodos Numéricos (ciclo 5 in four UTEC engineering curricula): trapecio(f, a, b, n) receives the function as an argument, counts the two ends at half weight and loops over range(1, n); integrating x squared on [0, 3] (exact 9) with n = 1, 2, 4, 8, 16 prints errors 4.5, 1.125, 0.28125, 0.070312, 0.017578 and ratio=4.00 each time; x cubed on [0, 2] gives the same ratio. Run with python3 -I, output pasted exactly. Lesson family: numerical integration; the error falls about four times when n doubles.',
    requiredMentions: ['n=16  area=9.017578  error=0.017578  ratio=4.00', 'Duplique n y el error cae a la cuarta parte', 'Cursos de programación en las mallas de ingeniería de la UTEC', 'Examen de Admisión Ordinario UNI 2026-2', 'If we double n, how much smaller will the error be?', '94 universidades licenciadas, 46 públicas y 48 privadas', 'el 97,3% de la población de 19 a 24 años usó internet', 'area=4.015625', 'Programación Orientada a Objetos (4)', 'Inglés en Perú por edad y ocupación, EF EPI 2025'],
    sources: [
      { claim: 'UTEC engineering curricula: Programación I (4 credits) in ciclo 1, Programación II or Programación Orientada a Objetos in ciclo 2, Métodos Numéricos (3 credits) in ciclo 5 of Civil, Mecánica, Química and Energía; 10 semesters, 200 credits, presencial.', url: 'https://utec.edu.pe/carreras/ingenieria-mecanica' },
      { claim: 'UTEC Ingeniería Industrial curriculum (Programación I, Programación Orientada a Objetos).', url: 'https://utec.edu.pe/carreras/ingenieria-industrial' },
      { claim: 'UNI ordinary admission 2026-2: three in-person papers on 10, 12 and 14 August 2026; contents; Ingreso Directo (CEPRE-UNI).', url: 'https://admision.uni.edu.pe/admision2026-2/index.html' },
      { claim: 'UNI FAQ: completed secondary education is the main requirement.', url: 'https://admision.uni.edu.pe/preguntas-frecuentes/index.html' },
      { claim: 'Fábrica de Programadores includes an in-person introductory course at UNI and the PCEP exam.', url: 'https://www.gob.pe/institucion/minedu/noticias/1214050-minedu-impulsa-iniciativa-fabrica-de-programadores-para-formar-a-escolares-con-certificacion-internacional-en-programacion' },
      { claim: '94 licensed universities (46 public, 48 private) with 1.1 million students (SUNEDU, 15 Sep 2021).', url: 'https://www.gob.pe/institucion/sunedu/noticias/522805-sunedu-gracias-al-licenciamiento-1-millon-100-mil-estudiantes-acceden-a-educacion-universitaria-de-calidad' },
      { claim: 'EF EPI 2025: 18 to 20 at 469, 21 to 25 at 540, 26 to 30 at 559, Student 482, IT 522, Peru 519.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Internet use 19 to 24: 97.3% (II trimestre 2026).', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'PCEP-30-03 and PCAP-31-04 exam facts.', url: 'https://pythoninstitute.org/pcap' },
      { claim: 'Python 3.14.0 final 2025-10-07.', url: 'https://peps.python.org/pep-0745/' }
    ],
    rejectedClaims: [
      'Spanish-language teaching: refused; every class is live, online and in English only, in the capsule and in an FAQ.',
      'Any link with UNI, CTIC-UNI, UTEC or any university, or an official certificate: none; the page says so twice.',
      'Admission preparation or results: refused; the UNI exam is in Spanish and contains no programming; we promise no admission.',
      'The UNI next-exam dates (16, 18, 20 February) printed without a year on its page: not printed.',
      'The UNI registration fees in FACTS.md and any typed fee: refused; fees render from the template in USD.',
      'Doing university homework: refused; we teach with our own problems.',
      'Claiming which language UTEC teaches in Programación I: refused; the curricula do not say.'
    ]
  }
};
