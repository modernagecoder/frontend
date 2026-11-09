// SHIP: market | Programar con IA sin copiar: pedir, leer, probar y explicar, con reglas de edad y de la OPI | leap-year rule: a plausible one-line answer that passes every test from 1901 to 2099 and fails in 1900 and 2100
'use strict';
// Programar con IA sin copiar (ag- Spanish-language door, Peru cluster row PE150, P4 think, hubGroup guides).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only.
// Angle: the teen, university student or professional who types "programar con ia" (10 autocomplete suggestions: gratis, curso,
// google, visual studio code, 2026; KEYWORDS.md "Vibe coding / programar con IA": "Pair vibe coding with programar con IA sin
// copiar"), and parents who ask whether AI will do the homework. The owner's promise: think and solve, never copy AI output.
// Spine: three ways to code with AI (complete, converse, delegate); one original example where AI-style code is plausible and
// wrong; our six-step protocol; age bands with vendor rules and Peru's DS 016-2024-JUS; what Peruvian official documents say about
// AI (OPI 2025 ban, OPEIA, MINEDU teacher course, rural AI planning); adults and professionals (INEI, EF EPI).
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/programar-con-ia-sin-copiar/;
// FACTS = facts-school/FACTS.md, MARKET/LEGAL = facts-market/):
//  UTEC OPI (FACTS 111 to 113, 116, 118): "abiertas gratuitamente a todos los estudiantes de secundaria del país"; OPEIA 2026 held
//    19 March 2026, 2025 delegation to the IOAI; Reglamento OPI 2025 "Queda prohibido el uso de IA generativa para la resolución de
//    problemas"; Fase 2 "Se podrá usar solo C++".
//  MINEDU press notes: more than 87,000 teachers enrolled in "Inteligencia artificial (IA) en la práctica docente" (FACTS 50, 2025);
//    AI for learning planning in 205 rural schools, about 27,000 students, from 2026 (FACTS 51).
//  DS 016-2024-JUS (LEGAL): art. 25.3 "En el marco de la oferta de servicios digitales dirigida a menores de catorce años de edad,
//    el tratamiento de datos personales es lícito siempre que se cuente con el consentimiento de aquel o aquellos que ejercen la
//    patria potestad o tutela"; art. 22.2 14 to 17 may consent "de acuerdo a su capacidad".
//  Vendor terms via content/ai-tool-age-audit.json (audited 2026-07-15): ChatGPT "You must be at least 13 years old ... If you are
//    under 18 you must have your parent or legal guardian's permission"; Claude 18; GitHub Copilot 13; Gemini 13 or country age,
//    not with Family Link; Replit "You must be an adult to use the Service".
//  INEI ENAHO TIC II Trimestre 2026 (MARKET 1.4): "el 97,3% de la población de 19 a 24 años utilizó Internet"; 25 to 40 95,2%.
//  EF EPI 2025 Peru page (MARKET 1.3): job function IT 522; Lima 555 High; Peru 519 Moderate.
//  Time: tzdata America/Lima -5:00, Asia/Kolkata +5:30.
// Our own example, run with python3 -I (pic.py in the scratchpad):
//    2024 True True igual / 2026 False False igual / 2028 True True igual / 1900 True False DISTINTO / 2000 True True igual /
//    2100 True False DISTINTO / 1901 a 2099: [] / 1601 a 2400: [1700, 1800, 1900, 2100, 2200, 2300] / coincide con calendar: True
// Lesson family: edge-case reasoning about a rule. A one-line leap-year test (year % 4 == 0), typical of a quick AI suggestion,
// agrees with the full Gregorian rule on every year from 1901 to 2099, so tests with "normal" years pass; it fails only on
// century years. Read the full rule, test the borders, compare with the standard library.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  'import calendar',
  '',
  '# Versión "rápida", como la que suele proponer un asistente (escrita por nosotros)',
  'def bisiesto_rapido(anio):',
  '    return anio % 4 == 0',
  '',
  '# Versión con la regla completa del calendario gregoriano',
  'def bisiesto(anio):',
  '    return anio % 4 == 0 and (anio % 100 != 0 or anio % 400 == 0)',
  '',
  'for anio in [2024, 2026, 2028, 1900, 2000, 2100]:',
  '    r, c = bisiesto_rapido(anio), bisiesto(anio)',
  "    print(anio, r, c, 'igual' if r == c else 'DISTINTO')",
  '',
  'def diferencias(desde, hasta):',
  '    return [a for a in range(desde, hasta + 1) if bisiesto_rapido(a) != bisiesto(a)]',
  '',
  "print('1901 a 2099:', diferencias(1901, 2099))",
  "print('1601 a 2400:', diferencias(1601, 2400))",
  "print('coincide con calendar:', all(bisiesto(a) == calendar.isleap(a) for a in range(1601, 2401)))"
].join('\n');

const OUT = [
  '2024 True True igual',
  '2026 False False igual',
  '2028 True True igual',
  '1900 True False DISTINTO',
  '2000 True True igual',
  '2100 True False DISTINTO',
  '1901 a 2099: []',
  '1601 a 2400: [1700, 1800, 1900, 2100, 2200, 2300]',
  'coincide con calendar: True'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'guides', label: 'Programar con IA sin copiar' },
  slug: 'programar-con-ia-sin-copiar',
  code: 'pic',
  accent: '#6E1727',
  accentRationale: 'Programar con IA sin copiar: a deep oxblood #6E1727, the red of a reviewer\'s correction rather than an alarm, for a page about checking machine output; contrast 9.39 on the paper #FBF8F2 (alloc.tsv) and above 4.5 on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Programar con IA sin copiar',
  title: 'Programar con IA sin copiar: método y reglas de edad',
  description: 'Programar con IA sin copiar lo que responde: un código plausible que falla en 1900 y 2100, las edades que fija cada empresa y la OPI. Clases en vivo, en inglés.',
  ogDescription: 'Cómo programar con inteligencia artificial y seguir pensando: un error que pasa casi todas las pruebas, seis pasos para revisar lo que propone la IA y qué permite cada edad en Perú.',
  twitterDescription: 'Programar con IA sin copiar: pedir, leer, probar y explicar. Clases en vivo y en inglés para adolescentes y adultos, en grupo o individuales.',
  pageName: 'Programar con IA sin copiar',
  webPageDescription: 'Guía para adolescentes, universitarios, profesionales y familias en Perú sobre cómo programar con inteligencia artificial sin copiar sus respuestas: las tres formas de usarla, un ejemplo de código plausible que falla solo en los bordes, un protocolo de seis pasos, las edades mínimas de cada herramienta y la norma peruana de datos para menores, y lo que dicen la OPI, la OPEIA y el MINEDU sobre la IA.',
  courseDescription: 'Clases en vivo y en línea para programar con inteligencia artificial sin depender de copiar, dictadas solo en inglés por mentores desde la India, para adolescentes desde los 13 años y adultos en todo el Perú: Python y web con asistentes de IA usados dentro de la regla de edad de cada empresa, revisión de código y pruebas, en grupo o individuales, a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'IA sin copiar',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#formas', label: 'Tres formas' },
    { href: '#bisiesto', label: 'Un fallo de borde' },
    { href: '#pasos', label: 'Seis pasos' },
    { href: '#edad', label: 'Por edad' },
    { href: '#peru', label: 'IA en Perú' }
  ],
  eyebrow: 'Perú &middot; Programar con IA &middot; Desde los 13 años',
  h1: 'Programar con IA sin copiar lo que responde',
  lede: 'Un asistente de IA escribe en segundos lo que a un principiante le tomaría una tarde. El problema es que escribe igual de rápido lo correcto y lo equivocado, y con el mismo tono seguro. Programar con IA de verdad es saber pedir, leer, poner a prueba y explicar lo que la máquina propone. Eso se entrena, y es lo que hacemos en clase.',
  secondaryCta: { href: '#bisiesto', label: 'Ver el fallo de 1900' },
  wa: 'Hola Modern Age Coders, quiero aprender a programar con IA sin copiar sus respuestas. ¿Puedo agendar una clase de prueba gratis en inglés?',
  heroNote: 'Enseñando en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; la IA propone, el estudiante decide',
  spec: [
    ['Edades', 'Desde 13 años con permiso familiar; adultos sin límite'],
    ['Herramientas', 'Solo las que admite la edad del estudiante'],
    ['Lenguajes', 'Python y desarrollo web, con pruebas'],
    ['Regla de oro', 'Cada línea aceptada se explica'],
    ['Idioma', 'Inglés, con mentor en vivo desde la India'],
    ['Modalidad', 'Grupo de quince a veinte, o uno a uno']
  ],
  capsuleQ: 'La respuesta corta',
  capsule: 'Programar con IA sin copiar significa usar asistentes como ChatGPT o GitHub Copilot para avanzar más rápido sin dejar de entender cada línea. En Modern Age Coders lo enseñamos en clases en vivo, por internet y en inglés, con mentores desde la India, a adolescentes desde los 13 años (con permiso familiar, como exigen las empresas) y a adultos en cualquier ciudad peruana. El estudiante pide, lee, prueba los bordes y explica. Hay modalidad grupal o individual, cualquier día y a la hora que usted prefiera.',

  picks: {
    eyebrow: 'Cursos con IA',
    h2: 'Tres cursos para programar con IA',
    lede: 'Uno para escolares de secundaria, otro para universitarios y otro para quien ya trabaja. En los tres la IA es una herramienta revisada, nunca la autora.',
    items: [
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', code: 'PIC / 01', title: 'Python y web con IA, de 13 a 17', alt: 'Imagen del curso de vibe coding para adolescentes', note: 'Para escolares de secundaria. Proyectos de Python y web en los que la IA sugiere y el estudiante prueba, corrige y defiende cada decisión. Herramientas solo con autorización de la familia.' },
      { course: 'vibe-coding-for-college-fullstack-ai-dsa-career-course', code: 'PIC / 02', title: 'Proyectos completos con IA, en la universidad', alt: 'Imagen del curso de vibe coding para universitarios', note: 'Para mayores de edad. Software de punta a punta armado con asistentes, más la base de estructuras de datos que permite saber cuándo el asistente se equivoca.' },
      { course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', code: 'PIC / 03', title: 'Agentes que programan, para profesionales', alt: 'Imagen del curso de Codex y Claude Code para profesionales', note: 'Solo adultos. Agentes de código como Codex y Claude Code en proyectos reales, con revisión humana de cada cambio antes de aceptarlo.' }
    ]
  },

  sections: [
    {
      id: 'formas',
      eyebrow: 'Tres formas',
      h2: '¿Qué significa programar con IA?',
      lede: 'Hoy hay tres maneras de hacerlo, y cada una pide un nivel distinto de criterio. Conviene saber en cuál está uno antes de decidir cuánto confiar.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Autocompletar', p: 'Herramientas como GitHub Copilot sugieren la línea siguiente mientras uno escribe. Ahorran tecleo, pero tientan a aceptar con Tab sin leer. Útiles para quien ya sabe qué quiere escribir.' },
          { h3: 'Conversar', p: 'Un chat como ChatGPT o Gemini responde preguntas y propone fragmentos enteros. Sirve para entender un error o comparar dos enfoques; es arriesgado cuando se le pide la tarea completa.' },
          { h3: 'Delegar', p: 'Los agentes de código leen un proyecto entero, cambian varios archivos y ejecutan pruebas por su cuenta. Dan más velocidad y exigen más revisión, por eso los reservamos para adultos con base sólida.' }
        ] },
        { kind: 'p', mt: true, html: 'En las tres formas vale lo mismo: la persona que firma el código es la responsable de él. Un asistente no sabe qué quería usted de verdad, no conoce los casos raros de su problema y no se hace cargo cuando el programa falla. Por eso "sin copiar" no quiere decir "sin IA". Quiere decir que nada entra al programa sin haber pasado por la cabeza de quien lo escribe.' },
        { kind: 'p', html: 'La base para llegar a ese punto es saber programar sin ayuda. Si alguien todavía no puede escribir un bucle solo, la IA no le enseña: le escribe. Por eso nuestros cursos con IA vienen después de un primer tramo de programación propia, como el que ofrecemos en el <a class="ag-inline-link" href="/curso-de-ia-para-adolescentes-peru">curso de IA para adolescentes</a> o, para adultos, en el <a class="ag-inline-link" href="/curso-de-inteligencia-artificial-en-ingles-peru">curso de inteligencia artificial en inglés</a>.' }
      ]
    },
    {
      id: 'bisiesto',
      tint: 'tint',
      eyebrow: 'Clase de muestra',
      h2: '¿Por qué el código que propone la IA puede estar mal aunque pase las pruebas?',
      lede: 'Porque las pruebas que se nos ocurren primero son las de casos normales, y los errores viven en los bordes. Este ejemplo lo escribimos nosotros imitando una respuesta rápida típica: decidir si un año es bisiesto.',
      body: [
        { kind: 'code', label: 'Dos reglas para años bisiestos', lang: 'Python', code: PY, note: 'La primera función usa solo la divisibilidad entre 4. La segunda aplica la regla gregoriana completa: divisible entre 4, salvo los años de siglo, que solo son bisiestos si se dividen entre 400.' },
        { kind: 'code', label: 'Resultado al ejecutar', lang: 'Salida', code: OUT, note: 'Texto devuelto por Python 3 en nuestro equipo, pegado tal cual. Entre 1901 y 2099 la lista de diferencias está vacía.' },
        { kind: 'ol', mt: true, items: [
          '<strong>La respuesta parece perfecta.</strong> Con 2024, 2026 y 2028, los años que cualquiera prueba primero, la versión rápida acierta las tres veces. Si el estudiante se detuviera aquí, la copiaría convencido.',
          '<strong>El dato sorprendente.</strong> Entre 1901 y 2099 las dos funciones no difieren en ningún año. Todas las fechas que una persona viva ha usado pasan la prueba. Por eso el error sobrevive tanto tiempo en programas reales.',
          '<strong>El borde que la delata.</strong> En 1900 y 2100 la versión rápida dice True y la completa dice False. Entre 1601 y 2400 hay seis años en conflicto: 1700, 1800, 1900, 2100, 2200 y 2300. El 2000 coincide porque sí se divide entre 400.',
          '<strong>Leer la regla, no la respuesta.</strong> La corrección no salió de preguntarle otra vez a la IA, sino de buscar cómo se define un año bisiesto y traducir cada condición a código.',
          '<strong>Una segunda opinión independiente.</strong> La última línea compara la versión completa con calendar.isleap, de la biblioteca estándar de Python, en 800 años seguidos. Coinciden en todos.'
        ] },
        { kind: 'p', mt: true, html: 'La lección no es "la IA se equivoca", que todos sabemos. Es más útil: una respuesta puede superar todas las pruebas obvias y seguir mal, así que el trabajo humano está en pensar qué casos raros existen. En un sistema de planillas, de vencimientos o de reservas, un error de bisiesto dormido durante décadas aparece justo el día menos oportuno.' }
      ]
    },
    {
      id: 'pasos',
      eyebrow: 'Protocolo',
      h2: '¿Cómo se programa con IA sin copiar? Seis pasos que usamos en clase',
      lede: 'Un protocolo que el estudiante aplica cada vez que un asistente le propone código. Al principio parece lento; a las pocas semanas se vuelve automático y ahorra horas de errores escondidos.',
      body: [
        { kind: 'ol', items: [
          '<strong>Intentar primero.</strong> Antes de abrir el asistente, escribir un esbozo propio o, al menos, los pasos en palabras. Así hay algo con qué comparar.',
          '<strong>Pedir con contexto.</strong> Explicar el problema, los datos de entrada y un caso raro que preocupa. Una pregunta vaga recibe una respuesta vaga.',
          '<strong>Leer antes de pegar.</strong> Recorrer la propuesta línea por línea y marcar lo que no se entiende. Lo que no se entiende se pregunta o se descarta.',
          '<strong>Probar los bordes.</strong> Cero, negativos, listas vacías, textos con tildes, fechas de siglo. Si el asistente no los mencionó, con más razón.',
          '<strong>Comparar con una fuente independiente.</strong> La documentación oficial, la biblioteca estándar o un cálculo a mano. Nunca otra respuesta del mismo asistente como única prueba.',
          '<strong>Explicar en voz alta.</strong> Contarle al mentor, en inglés, qué hace el código y por qué es correcto. Si no se puede explicar, no se entrega.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Señales de que se está copiando',
          left: [
            'El programa funciona, pero el estudiante no sabe qué pasaría si cambiara un dato.',
            'Hay funciones o bibliotecas en el código que nunca vio en clase y no sabe para qué están.'
          ],
          rightH3: 'Señales de que se está aprendiendo',
          right: [
            'El estudiante rechaza parte de una sugerencia y puede decir por qué.',
            'Encuentra un caso que rompe la respuesta de la IA antes de que lo encuentre el mentor.'
          ] }
      ]
    },
    {
      id: 'edad',
      eyebrow: 'Por edad',
      h2: '¿A partir de qué edad se puede programar con IA?',
      lede: 'Depende de la herramienta, y casi ninguna admite niños. La mayoría fija 13 años como mínimo, varias piden permiso de los padres hasta los 18 y algunas solo aceptan adultos.',
      body: [
        { kind: 'table', numCols: [], caption: 'Qué permiten las empresas de IA según la edad, y cómo trabajamos con cada grupo', head: ['Edad del estudiante', 'Lo que dicen los términos de las empresas', 'Lo que hacemos en clase'], rows: [
          ['De 6 a 12 años', 'ChatGPT, Gemini y GitHub Copilot piden al menos 13 años', 'Programan sin chatbots; aprenden cómo funciona la IA con ejercicios propios'],
          ['De 13 a 17 años', 'ChatGPT: permiso de padre o tutor hasta los 18; Gemini no funciona con cuentas Family Link', 'Asistentes solo con autorización escrita de la familia y después del intento propio'],
          ['Desde 18 años', 'Claude y Replit exigen ser adulto', 'Asistentes y agentes de código, siempre con revisión humana de cada cambio']
        ] },
        { kind: 'source', html: 'Fuente: condiciones de uso de OpenAI, Google, GitHub, Anthropic y Replit, con sus frases textuales reunidas en la <a class="ag-inline-link" href="/ai-tools-age-guide">AI tool age guide</a> tras la revisión del 15 de julio de 2026. En el caso de Anthropic, la edad mínima de 18 años se aplica en todos los países. La columna final es la práctica de Modern Age Coders.' },
        { kind: 'p', mt: true, html: 'En Perú se suma la norma de datos personales. El reglamento aprobado por el DS 016-2024-JUS dice, en su artículo 25.3, que en los servicios digitales dirigidos a menores de catorce años el tratamiento de datos es lícito siempre que se cuente con el consentimiento de quienes ejercen la patria potestad o tutela. Entre los 14 y los 17, el artículo 22.2 permite que el propio adolescente consienta, de acuerdo a su capacidad. Lo citamos como contexto, no como asesoría legal.' },
        { kind: 'p', html: 'Nuestra práctica es más estricta que el mínimo: aunque un estudiante de 15 años pudiera abrir una cuenta por sí solo, antes de usar un asistente en clase hablamos con la familia. Y con menores nunca recomendamos herramientas que la propia empresa reserva a adultos.' }
      ]
    },
    {
      id: 'peru',
      eyebrow: 'IA en Perú',
      h2: '¿Qué dicen las instituciones peruanas sobre usar IA para programar?',
      lede: 'No hay una regla única, pero los documentos oficiales dibujan una línea clara: la IA se acepta como herramienta de trabajo y se prohíbe cuando lo que se evalúa es la capacidad de resolver.',
      body: [
        { kind: 'table', numCols: [], caption: 'La inteligencia artificial en documentos oficiales peruanos, de 2025 a 2026', head: ['Quién lo publica', 'Qué dice', 'Lo que se lee entre líneas'], rows: [
          ['UTEC, Reglamento OPI 2025', '"Queda prohibido el uso de IA generativa para la resolución de problemas"; la final se programa solo en C++', 'Para competir hay que saber resolver sin asistente'],
          ['UTEC, página de las olimpiadas', 'La OPEIA 2026, olimpiada de inteligencia artificial, se tomó el 19 de marzo de 2026; su delegación 2025 fue a la IOAI', 'Construir IA es una disciplina que se compite, no solo que se usa'],
          ['MINEDU, nota de prensa de 2025', 'Más de 87 000 docentes se inscribieron en el curso "Inteligencia artificial (IA) en la práctica docente"', 'El sistema escolar está aprendiendo a usarla con criterio'],
          ['MINEDU, nota de prensa de 2025', 'Desde 2026, IA para planificar aprendizajes en 205 colegios rurales, con unos 27 000 estudiantes', 'La IA entra como apoyo a la planificación, no como reemplazo del estudiante']
        ] },
        { kind: 'source', html: 'Fuentes: opi.utec.edu.pe y su Reglamento OPI 2025; notas de prensa del MINEDU publicadas en gob.pe sobre el curso de IA para docentes y sobre el uso de IA en el ámbito rural. Consultadas en noviembre de 2026. La tercera columna es nuestra interpretación.' },
        { kind: 'p', mt: true, html: 'Cualquier escolar de secundaria peruano puede inscribirse sin costo en las olimpiadas de UTEC. Quien quiera prepararse para la OPI necesita exactamente lo contrario de copiar: resolver problemas nuevos con su propio razonamiento y bajo tiempo. Trabajamos esa base con problemas escritos por nosotros, sin reproducir enunciados de la olimpiada, y aclaramos que no tenemos vínculo alguno con UTEC.' }
      ]
    },
    {
      id: 'adultos',
      eyebrow: 'Adultos',
      h2: '¿Sirve programar con IA si ya trabajo o estoy en la universidad?',
      lede: 'Sí, y es donde más rinde, porque un adulto puede usar todas las herramientas y tiene problemas reales para resolver. El riesgo es el mismo que con un escolar: terminar con programas que nadie del equipo entiende.',
      body: [
        { kind: 'p', html: 'Los jóvenes adultos peruanos ya viven conectados. El boletín TIC del INEI para el segundo trimestre de 2026 registra que el 97,3% de la población de 19 a 24 años usó internet, y el 95,2% de la de 25 a 40. Lo que falta no es acceso a la IA, sino un método para usarla sin perder el control del código.' },
        { kind: 'p', html: 'El idioma juega a favor. La documentación de casi todas las herramientas de IA para programar está en inglés, y los propios asistentes responden con más precisión técnica en ese idioma. En el EF EPI 2025, los profesionales de tecnología en Perú obtienen 522 puntos y Lima llega a 555, en la banda "High". Una clase en inglés es práctica directa del vocabulario que el trabajo ya exige.' },
        { kind: 'p', html: 'En nuestros cursos para adultos el asistente es parte del día a día, pero cada cambio se revisa como en un equipo profesional: se lee, se prueba y se discute antes de aceptarlo. Para universitarios conviene sumar estructuras de datos y control de versiones, porque son las dos cosas que permiten detectar cuando una propuesta de la IA es lenta o rompe algo que ya funcionaba.' }
      ]
    },
    {
      id: 'horario',
      eyebrow: 'Horario',
      h2: '¿En qué horario se puede tomar una clase en vivo desde Perú?',
      lede: 'En cualquiera. Perú usa UTC-5 todo el año y la India UTC+5:30, así que la diferencia de diez horas y media no cambia nunca.',
      body: [
        { kind: 'p', html: 'Tres conversiones hechas por nosotros: una clase a las 7:00 a. m. de Lima, antes de la oficina, son las 5:30 p. m. en la India; a las 1:00 p. m. limeñas, en la hora de almuerzo, allá ya son las 11:30 p. m.; y a las 6:30 p. m. de Lima, al salir del colegio o de la universidad, en la India marcan las 5:00 a. m. del día siguiente. Son ejemplos de conversión, no un horario de clases.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Criterio',
    h2: '¿Cómo avanza el criterio al programar con IA?',
    lede: 'Cinco niveles que usamos para medir cuánto decide el estudiante y cuánto decide la máquina. La escala es nuestra.',
    table: { caption: 'Cinco niveles de criterio frente a un asistente de IA (escala nuestra)', head: ['Nivel', 'Cómo usa la IA', 'Qué ya no hace'], rows: [
      ['1. Escribe solo', 'Todavía no la usa', 'Depender de un asistente para un bucle'],
      ['2. Pregunta', 'Le pide explicar un error que ya localizó', 'Pedirle el ejercicio completo'],
      ['3. Revisa', 'Lee y prueba cada propuesta antes de aceptarla', 'Aceptar sugerencias con Tab sin leerlas'],
      ['4. Desconfía con método', 'Busca los bordes donde la propuesta falla', 'Tomar una prueba fácil como garantía'],
      ['5. Dirige', 'Divide un proyecto y delega partes a un agente, adulto y con revisión', 'Entregar código que no puede defender']
    ] },
    left: { h3: 'Para la familia', ps: [
      'Pregunte a su hijo qué parte de su último programa propuso la IA y qué parte rechazó. Si sabe responder, está aprendiendo.',
      'Un permiso para usar ChatGPT es una decisión familiar: dela por escrito y con condiciones claras.'
    ] },
    right: { h3: 'Para el estudiante', ps: [
      'La IA no conoce su problema tanto como usted; conoce millones de problemas parecidos.',
      'Si no puede explicar una línea, todavía no es suya.'
    ] }
  },

  catalogue: {
    eyebrow: 'Otros cursos',
    h2: 'Nueve cursos más alrededor de la IA',
    lede: 'Ordenados por edad, siempre en vivo y en inglés, con la opción de grupo o de clase individual.',
    bands: [
      { num: 'I', h3: 'Niños', sub: 'Sin chatbots, con mucho razonamiento', courses: [
        { code: 'PIC / NIÑOS / 01', slug: 'ai-literacy-for-kids-course', title: 'Alfabetización en IA', blurb: 'De 8 a 14 años: entender qué hace una IA por dentro, sin abrir cuentas.' },
        { code: 'PIC / NIÑOS / 02', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Juegos con IA guiada', blurb: 'De 8 a 12 años, con Scratch y la guía del mentor, sin cuentas propias de IA.' },
        { code: 'PIC / NIÑOS / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Pensamiento computacional', blurb: 'La base que después permite juzgar lo que propone una máquina.' }
      ] },
      { num: 'II', h3: 'Adolescentes', sub: 'Con permiso de la familia', courses: [
        { code: 'PIC / ADOL / 01', slug: 'teens-ai-tools-mastery-course', title: 'Herramientas de IA', blurb: 'Desde 13 años: pedir bien y verificar siempre.' },
        { code: 'PIC / ADOL / 02', slug: 'ai-ml-masterclass-teens', title: 'IA y machine learning', blurb: 'Modelos propios en Python, para saber qué hay detrás del chat.' },
        { code: 'PIC / ADOL / 03', slug: 'react-for-teens-complete-masterclass', title: 'React para adolescentes', blurb: 'Interfaces web en las que la IA ayuda y el estudiante revisa.' }
      ] },
      { num: 'III', h3: 'Adultos', sub: 'Desde los 18', courses: [
        { code: 'PIC / ADULT / 01', slug: 'ai-tools-mastery-complete-college', title: 'Asistentes de IA en el trabajo', blurb: 'ChatGPT, Claude y automatización con criterio profesional.' },
        { code: 'PIC / ADULT / 02', slug: 'complete-generative-ai-masterclass-college', title: 'IA generativa', blurb: 'Modelos de lenguaje, RAG y agentes, entendidos desde adentro.' },
        { code: 'PIC / ADULT / 03', slug: 'git-github-version-control-course-for-college-students', title: 'Git y GitHub', blurb: 'Para ver, revisar y deshacer cada cambio que haga un asistente.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Clases',
    h2: '¿Cómo es una clase en vivo de programación con IA?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Antes de la oficina', l: 'Para profesionales que estudian temprano.' },
      { time: 'Después de clases', l: 'Para escolares y universitarios por la tarde.' },
      { time: 'Fin de semana', l: 'Para proyectos largos que piden concentración.' }
    ],
    cells: [
      { h3: 'Primero sin asistente', p: 'Cada problema se esboza a mano antes de abrir la IA.' },
      { h3: 'Pantalla compartida', p: 'El mentor ve cada sugerencia que el estudiante acepta.' },
      { h3: 'Pruebas de borde', p: 'Ningún código se da por bueno sin casos extremos.' },
      { h3: 'Permiso familiar', p: 'Con menores, las herramientas se usan solo autorizadas.' },
      { h3: 'Defensa oral', p: 'El estudiante explica en inglés por qué su código es correcto.' },
      { h3: 'Un mentor estable', p: 'La misma persona sigue su criterio de semana en semana.' }
    ]
  },

  projectsH2: 'Proyectos de nuestros estudiantes',
  projectsLede: 'Trabajos construidos con y sin IA, todos explicados por sus autores. La colección en inglés vive en <a class="ag-inline-link" href="/student-labs">Student labs</a>.',
  reviewsLede: 'Lo que escribieron familias y estudiantes en Google, sin traducir.',

  fees: {
    h2: '¿Cuál es la cuota de las clases de programación con IA?',
    lede: 'Las cuotas se publican en dólares estadounidenses y se cobran a una tarjeta, débito o crédito; su banco hace la conversión a la moneda de su cuenta. Las cuentas de las herramientas de IA, si hacen falta, son aparte y las decide la familia.',
    free: ['Clase de prueba gratis', 'Diagnóstico de nivel con un problema real', 'Ningún dato bancario'],
    group: ['Grupo de quince a veinte, por edad', 'Dos sesiones en vivo cada semana', 'El mismo mentor durante el curso', 'Pago mensual, cancelable'],
    one: ['Un solo estudiante por clase', 'Proyecto elegido por el estudiante', 'Horario que se reacomoda']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Programar con IA sin copiar: preguntas frecuentes',
    items: [
      { q: '¿Es malo programar con inteligencia artificial?', a: 'No. Es una forma de trabajo cada vez más común. Lo dañino es aceptar código sin entenderlo, porque los errores de la IA suelen estar en los casos raros, justo donde nadie mira. Enseñamos a usarla y a revisarla.' },
      { q: '¿Las clases son en español?', a: 'No. Toda clase ocurre en directo y en línea, siempre en inglés, con mentores desde la India que hablan claro y a un ritmo cómodo. Es una ventaja doble: la documentación y los mensajes de las herramientas de IA están en inglés, y el estudiante practica el idioma mientras programa. Lima tiene inglés de nivel "High" en el EF EPI 2025. Para dudas administrativas puede escribirnos por WhatsApp en castellano.' },
      { q: '¿Hace falta saber programar antes de usar IA?', a: 'Hace falta, si se quiere saber si el resultado sirve. Sin base se obtiene un programa, pero no un juicio sobre él. Por eso pedimos una base propia antes de usar asistentes: quien no sabe escribir un bucle no puede revisar el que le propone la IA.' },
      { q: '¿Desde qué edad se puede usar ChatGPT para programar?', a: 'OpenAI pide al menos 13 años y permiso de un padre o tutor hasta los 18. Con menores de 13 no usamos chatbots, y entre 13 y 17 solo con autorización de la familia.' },
      { q: '¿Usan Claude con escolares?', a: 'Claude no, porque Anthropic exige 18 años. Con menores usamos únicamente herramientas cuyos términos admiten su edad, y solo después del intento propio.' },
      { q: '¿Está permitida la IA en la OPI?', a: 'No. Según el reglamento de 2025 que publica UTEC, ningún participante puede recurrir a IA generativa para resolver, y en la final solo se acepta C++. Practicamos con problemas propios y no tenemos relación con UTEC.' },
      { q: '¿La IA le va a hacer las tareas del colegio a mi hijo?', a: 'En nuestras clases, no. El estudiante intenta primero solo, y cualquier línea que venga de una herramienta tiene que poder explicarla. Si no puede, se reescribe con el mentor.' },
      { q: '¿En qué horario son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Una sesión a las 7:00 a. m. de Lima equivale a las 5:30 p. m. en la India.' },
      { q: '¿Dan certificado?', a: 'Al terminar cada curso entregamos un certificado de finalización de Modern Age Coders. No es un título oficial ni lo reconoce el MINEDU ni ninguna universidad.' },
      { q: '¿Cómo se paga?', a: 'Con tarjeta, una vez al mes, en dólares de Estados Unidos; la conversión la aplica el banco que emitió la tarjeta. La clase de prueba no tiene costo ni pide datos bancarios.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más páginas',
    h2: 'Lecturas relacionadas',
    lede: 'Algunas páginas nuestras sobre IA, código y criterio.',
    items: [
      { href: '/parents-guide-to-vibe-coding', label: 'Parents\' guide to vibe coding', p: 'Una guía en inglés para familias sobre programar con IA.' },
      { href: '/ai-tools-age-guide', label: 'AI tool age guide', p: 'Cuántos años pide cada servicio, citado de sus propios términos.' },
      { href: '/curso-de-inteligencia-artificial-en-ingles-peru', label: 'Curso de inteligencia artificial en inglés', p: 'Para adultos en Perú que quieren entender la IA por dentro.' },
      { href: '/curso-de-ia-para-adolescentes-peru', label: 'Curso de IA para adolescentes', p: 'Modelos hechos por escolares de secundaria, con reglas de edad.' },
      { href: '/vacaciones-utiles-2027-inteligencia-artificial', label: 'Verano 2027 de inteligencia artificial', p: 'Un plan de vacaciones útiles con IA para cada edad.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'La página principal de nuestras clases para Perú.' }
    ]
  },

  start: {
    h2: 'Pruebe una clase de programación con IA',
    lede: 'En la prueba gratuita el mentor le muestra al estudiante una propuesta de código hecha con IA y le pide encontrarle un caso que falle. Según cómo lo busca, recomienda empezar por la base o ir directo a un curso con asistentes.',
    readFirst: 'Antes de agendar puede revisar el <a class="ag-inline-link" href="#bisiesto">ejemplo del año 1900</a> y la tabla de <a class="ag-inline-link" href="#edad">edades por herramienta</a>.',
    note: 'Todas las sesiones son en directo, en línea y en inglés, con mentores en la India. La coordinación puede ser en castellano.',
    formNote: 'Gratis, sin tarjeta y sin permanencia.'
  },

  footer: {
    cols: [
      { h4: 'IA y código', links: [
        { href: '/courses/vibe-coding-for-teens-python-web-ai-projects-course', label: 'Vibe coding, adolescentes' },
        { href: '/courses/vibe-coding-for-college-fullstack-ai-dsa-career-course', label: 'Vibe coding, universidad' },
        { href: '/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', label: 'Agentes de código' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Perú', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Clases en Perú' },
        { href: '/curso-de-ia-para-adolescentes-peru', label: 'IA para adolescentes' },
        { href: '/curso-de-inteligencia-artificial-en-ingles-peru', label: 'IA en inglés, adultos' },
        { href: '/ai-tools-age-guide', label: 'Edades por herramienta' }
      ] }
    ],
    bottomRight: 'Pasar las pruebas fáciles no es estar bien'
  },

  personalityCss: `
.ag-root.ag-pic .ag-hero h1 { max-width: 16ch; letter-spacing: -0.015em; }
.ag-root.ag-pic .ag-capsule { border-left-width: 5px; border-radius: 0; }
.ag-root.ag-pic .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-pic .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-pic .ag-steps li { line-height: 1.62; }
`,

  dossier: {
    curriculumAuthority: 'UTEC OPI page and Reglamento OPI 2025 (generative AI ban, C++ final, OPEIA 2026); MINEDU press notes on the teacher AI course (87,000+, 2025) and rural AI planning (205 schools, about 27,000 students, from 2026); DS 016-2024-JUS arts. 22.2 and 25.3; vendor terms in content/ai-tool-age-audit.json (15 July 2026); INEI ENAHO TIC bulletin, II Trimestre 2026; EF EPI 2025 Peru page; tzdata. The class-policy columns, the protocol, the criterion scale and the leap-year example are our own.',
    localProject: 'A Python lesson on checking AI-style code: a one-line leap-year test (year % 4 == 0), written by us to imitate a quick assistant answer, agrees with the full Gregorian rule for 2024, 2026, 2028 and 2000 and for every year from 1901 to 2099 (empty difference list), and fails only on 1900 and 2100; between 1601 and 2400 the conflicts are [1700, 1800, 1900, 2100, 2200, 2300]; the full rule matches calendar.isleap on all 800 years. Run with python3 -I; output pasted unedited.',
    requiredMentions: ['1900 True False DISTINTO', '1601 a 2400: [1700, 1800, 1900, 2100, 2200, 2300]', 'Dos reglas para años bisiestos', 'Qué permiten las empresas de IA según la edad, y cómo trabajamos con cada grupo', 'La inteligencia artificial en documentos oficiales peruanos, de 2025 a 2026', 'Entre 1901 y 2099 las dos funciones no difieren en ningún año', 'los profesionales de tecnología en Perú obtienen 522 puntos', 'Cinco niveles de criterio frente a un asistente de IA (escala nuestra)', 'Pasar las pruebas fáciles no es estar bien'],
    sources: [
      { claim: 'OPI free for all secundaria students; OPEIA 2026 on 19 March 2026; 2025 delegation to the IOAI.', url: 'https://opi.utec.edu.pe/' },
      { claim: 'Reglamento OPI 2025: generative AI banned; Fase 2 C++ only.', url: 'https://opi.utec.edu.pe/Reglamento_OPI_2025.pdf' },
      { claim: 'More than 87,000 teachers enrolled in the MINEDU AI course (2025).', url: 'https://www.gob.pe/institucion/minedu/noticias/1164507-minedu-capacita-a-mas-de-87-000-docentes-en-inteligencia-artificial-en-el-ambito-nacional' },
      { claim: 'AI for learning planning in 205 rural schools, about 27,000 students, from 2026.', url: 'https://www.gob.pe/institucion/minedu/noticias/1304191-minedu-implementara-uso-de-inteligencia-artificial-para-fortalecer-aprendizajes-de-27-000-estudiantes-del-ambito-rural' },
      { claim: 'DS 016-2024-JUS arts. 22.2 and 25.3.', url: 'https://cdn.www.gob.pe/uploads/document/file/7568330/6426760-decreto-supremo-n-016-2024-jus-reglamento-de-la-ley-n-29733-ley-de-proteccion-de-datos-personales-publicado-nov-2024.pdf' },
      { claim: 'Internet use 97.3% (19 to 24) and 95.2% (25 to 40), II Trimestre 2026.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'EF EPI 2025: IT job function 522; Lima 555 High.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Vendor floors: ChatGPT 13 with parental permission; Claude 18; Replit adult; Gemini not with Family Link.', url: 'https://openai.com/policies/row-terms-of-use/' }
    ],
    rejectedClaims: [
      'Claude, Cursor or the Codex and Claude Code teens course for under-18s: refused; Claude is listed as adults only and the agents course offered is the adult one.',
      'Chatbots for under-13s: refused; the age table says children work without chatbots.',
      'Any connection with UTEC, OPI, OPEIA or MINEDU, or a medal promise: none; the page says so.',
      'Legal advice on DS 016-2024-JUS: refused; quoted as context only.',
      'A real AI transcript as the example: not used; the quick leap-year function is written by us and labelled as an imitation.'
    ]
  }
};
