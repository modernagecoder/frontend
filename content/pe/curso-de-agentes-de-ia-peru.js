// SHIP: market | Agentes de IA para principiantes en Perú: qué son, cómo funcionan, ejemplos, por edad | a rule-based agent loop: tools, memory, a goal check and two stopping conditions
'use strict';
// Curso de agentes de IA (ag- Spanish-language door, Peru cluster row PE099, P4 subject, hubGroup subjects).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only.
// Angle: the beginner in Peru who types "curso de agentes de ia", "agentes de ia ejemplos", "qué son los agentes de ia y cómo
// funcionan", "agentes de ia para principiantes" or "agentes de IA vs IA generativa" (KEYWORDS.md sections 2 and 6: 306 depth,
// adult and tool-named).
// Spine: what an agent is, in the words of the companies that build them (Google Cloud, OpenAI, Anthropic, Microsoft); agent vs
// assistant vs bot; when an agent is overkill; one original Python lesson (a rule-based agent loop with two tools, memory and two
// stopping conditions); the 2025 Peruvian regulation's own words on autonomy and human supervision; who can take an agents course
// at which age (Copilot Studio for teens only one to one with a parent accepting Microsoft's terms; Claude-based work 18+).
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/curso-de-agentes-de-ia-peru/):
//  Google Cloud, "¿Qué son los agentes de IA?" (googlecloud-es.txt, cloud.google.com/discover/what-are-ai-agents?hl=es): "Los
//    agentes de IA son sistemas de software que usan la IA para alcanzar objetivos y completar tareas en nombre de los usuarios.
//    Muestran razonamiento, planificación y memoria, y tienen un nivel de autonomía para tomar decisiones, aprender y adaptarse.";
//    "Los asistentes de IA son menos autónomos y requieren la intervención y las entradas del usuario."; "Los bots son los que
//    menos autonomía tienen, ya que suelen seguir reglas preprogramadas."
//  OpenAI, "A practical guide to building agents" PDF (openai-guide.txt): "Agents are systems that independently accomplish tasks on
//    your behalf."; "an agent consists of three core components: 01 Model ... 02 Tools ... 03 Instructions".
//  Anthropic, "Building effective agents", published Dec 19, 2024 (anthropic.txt): "Workflows are systems where LLMs and tools are
//    orchestrated through predefined code paths. Agents, on the other hand, are systems where LLMs dynamically direct their own
//    processes and tool usage"; "we recommend finding the simplest solution possible, and only increasing complexity when
//    needed"; "it's also common to include stopping conditions (such as a maximum number of iterations) to maintain control".
//  Microsoft Learn, Copilot Studio overview (copilotstudio.txt): "An agent is an AI assistant that handles conversations and
//    completes tasks. It follows the instructions you give it, draws on the knowledge sources you connect, and uses tools to take
//    action".
//  DS 115-2025-PCM, Reglamento de la Ley 31814 (El Peruano, 9 September 2025; ds115.txt): art. 6 j "Los diferentes sistemas basados
//    en IA varían en sus niveles de autonomía y la capacidad de entendimiento y adaptación después del despliegue."; art. 7 h
//    "Supervisión Humana: Los sistemas basados en IA, deben estar sujetos a una supervisión humana".
//  Course rules (content/courses/data/copilot-studio-teens.json): "for students under 18 a parent or guardian accepts Microsoft's
//    terms"; one to one only. Anthropic consumer terms (content/ai-tool-age-audit.json): 18+.
//  Time: tzdata America/Lima -5:00, Asia/Kolkata +5:30.
// Our own example, run with python3 -I (agente.py, agente_reto1.py, agente_reto2.py in the src-pages folder; the agenda is invented):
//    step 1 check Lima 16 -> busy / step 2 check Lima 17 -> busy / step 3 check Lima 18 -> free / step 4 DONE: Lima 18 = India 4.5
//    reto 1 (candidatas [16, 17, 19]): ... step 4 STOP: nothing free, ask the family
//    reto 2 (MAX_PASOS = 2): step 1 ... step 2 ... STOP: step limit reached
// Lesson family: an agent loop without a language model: a goal, two tools, memory of what was tried, a decision each step, a
// success check, and two stopping conditions (nothing left to try, step limit).

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  '# Objetivo: encontrar la primera hora libre de la familia y decir qué hora es en la India',
  'ocupadas = {16, 17, 19}            # agenda inventada: fútbol, tareas, cena',
  '',
  'def agenda_libre(hora_lima):       # herramienta 1: consulta la agenda',
  '    return hora_lima not in ocupadas',
  '',
  'def a_india(hora_lima):            # herramienta 2: Perú UTC-5, India UTC+5:30',
  '    return (hora_lima + 10.5) % 24',
  '',
  'candidatas = [16, 17, 18, 19]      # horas de Lima que propone la familia',
  "memoria = {'probadas': [], 'elegida': None}",
  'MAX_PASOS = 6',
  '',
  'for paso in range(1, MAX_PASOS + 1):',
  "    if memoria['elegida'] is not None:",
  "        h = memoria['elegida']",
  "        print('step', paso, 'DONE: Lima', h, '= India', a_india(h))",
  '        break',
  "    pendientes = [h for h in candidatas if h not in memoria['probadas']]",
  '    if not pendientes:',
  "        print('step', paso, 'STOP: nothing free, ask the family')",
  '        break',
  '    hora = pendientes[0]',
  '    libre = agenda_libre(hora)',
  "    memoria['probadas'].append(hora)",
  "    print('step', paso, 'check Lima', hora, '->', 'free' if libre else 'busy')",
  '    if libre:',
  "        memoria['elegida'] = hora",
  'else:',
  "    print('STOP: step limit reached')"
].join('\n');

const OUT = [
  'step 1 check Lima 16 -> busy',
  'step 2 check Lima 17 -> busy',
  'step 3 check Lima 18 -> free',
  'step 4 DONE: Lima 18 = India 4.5'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'subjects', label: 'Curso de agentes de IA' },
  slug: 'curso-de-agentes-de-ia-peru',
  code: 'age',
  accent: '#015636',
  accentRationale: 'Curso de agentes de IA: a dark forest green #015636, steady and practical for a page about systems that act on their own, clearly greener than the teals of the AI course pages; contrast 7.14 on the paper #FBF8F2 (alloc.tsv) and above 4.5 on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Curso de agentes de IA',
  title: 'Curso de agentes de IA en Perú, en vivo y en inglés',
  description: 'Curso de agentes de IA para principiantes en Perú: qué son, cómo funcionan y ejemplos reales. Clases en vivo y en inglés, en grupo o 1 a 1, desde los 13 años.',
  ogDescription: 'Qué es un agente de IA según las empresas que los construyen, en qué se diferencia de un chatbot, cuándo no hace falta uno y un agente en Python con dos herramientas, escrito por nosotros.',
  twitterDescription: 'Aprenda a construir agentes de IA en vivo y en inglés desde Perú: para principiantes, adultos y adolescentes desde los 13, con mentor.',
  pageName: 'Curso de agentes de IA en Perú',
  webPageDescription: 'Guía para principiantes en Perú sobre los agentes de inteligencia artificial: definiciones de Google Cloud, OpenAI, Anthropic y Microsoft, la diferencia entre agentes, asistentes y bots, cuándo no conviene un agente, qué dice el reglamento peruano de IA sobre autonomía y supervisión humana, qué curso corresponde a cada edad y un agente en Python escrito por nosotros.',
  courseDescription: 'Curso en vivo y en línea de agentes de inteligencia artificial para principiantes en todo el Perú, dictado solo en inglés por mentores desde la India: qué es un agente, cómo combina un modelo, herramientas e instrucciones, cómo se controla con límites y supervisión humana, y cómo se construye con Python, Copilot Studio o agentes de programación, según la edad, en grupo o en clases individuales.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Agentes de IA',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#que-son', label: 'Qué son' },
    { href: '#diferencias', label: 'Agente o chatbot' },
    { href: '#ejemplo', label: 'Ejemplo en Python' },
    { href: '#cuando-no', label: 'Cuándo no' },
    { href: '#edades', label: 'Por edad' }
  ],
  eyebrow: 'Perú &middot; Agentes de IA &middot; Principiantes desde los 13 años',
  h1: 'Curso de agentes de IA, en vivo y en inglés',
  lede: 'Un chatbot responde. Un agente actúa: consulta una agenda, busca un dato, llena un formulario, revisa si lo logró y decide el siguiente paso. Esa diferencia explica por qué "agentes de IA" se volvió una de las búsquedas de tecnología más frecuentes en el Perú. Este curso enseña a construirlos entendiendo cada pieza, sin magia y con control.',
  secondaryCta: { href: '#que-son', label: 'Qué es un agente, en breve' },
  wa: 'Hola Modern Age Coders, me interesa el curso de agentes de IA en inglés desde Perú. ¿Puedo tomar una clase de prueba gratis?',
  heroNote: 'Clases en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; 4.9 en reseñas de Google',
  spec: [
    ['Nivel', 'Principiante; no hace falta programar'],
    ['Edades', 'Adolescentes desde los 13 años y adultos'],
    ['Herramientas', 'Python, Copilot Studio y agentes de programación, según la edad'],
    ['Formato', 'Grupo de quince a veinte o individual; Copilot Studio solo individual'],
    ['Idioma', 'Inglés, con mentor en vivo desde la India'],
    ['Inicio', 'Clase de prueba gratuita']
  ],
  capsuleQ: 'Respuesta directa',
  capsule: 'Un agente de IA es un programa que recibe un objetivo y lo cumple por pasos: decide qué herramienta usar, la usa, revisa el resultado y sigue hasta terminar o detenerse. Modern Age Coders enseña a construir agentes de IA a estudiantes del Perú, en vivo, por videollamada y en inglés, para principiantes adultos y para adolescentes desde los 13 años, con herramientas que cada edad puede usar. Elija clase grupal o individual, el día y la hora que le acomoden.',

  picks: {
    eyebrow: 'Cursos de agentes',
    h2: 'Tres cursos para construir agentes de IA',
    lede: 'Uno para adolescentes, uno para universitarios y uno para adultos que quieren que un agente programe con ellos.',
    items: [
      { course: 'ai-agents-with-microsoft-copilot-studio-course-for-teens', code: 'AGE / 01', title: 'Agentes con Copilot Studio, de 13 a 18 años', alt: 'Imagen del curso de agentes de IA con Microsoft Copilot Studio para adolescentes', note: 'Solo en clases individuales. El estudiante crea agentes con conocimiento propio, herramientas y flujos; si es menor de 18, un padre o tutor acepta los términos de Microsoft.' },
      { course: 'ai-agents-with-microsoft-copilot-studio-course-for-college-students', code: 'AGE / 02', title: 'Agentes con Copilot Studio para universitarios', alt: 'Imagen del curso de agentes de IA con Microsoft Copilot Studio para universitarios', note: 'Desde los 18 años, en clases individuales. Agentes conectados a datos y a otras aplicaciones, con pruebas antes de publicarlos y límites claros.' },
      { course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', code: 'AGE / 03', title: 'Agentes que programan: Codex y Claude Code', alt: 'Imagen del curso de agentes de programación Codex y Claude Code para adultos', note: 'Para adultos, desde cero o con experiencia. Cómo trabajar con un agente que escribe código sin perder el control de lo que hace, revisando cada cambio.' }
    ]
  },

  sections: [
    {
      id: 'que-son',
      eyebrow: 'Qué son',
      h2: '¿Qué son los agentes de IA y cómo funcionan?',
      lede: 'Son sistemas que reciben un objetivo y avanzan hacia él por su cuenta, eligiendo pasos y herramientas. Las empresas que los construyen los definen de manera parecida, y conviene leerlas en sus propias palabras.',
      body: [
        { kind: 'table', numCols: [], caption: 'Cómo definen un agente de IA las empresas que los construyen', head: ['Empresa y documento', 'Definición, citada', 'Lo que subraya'], rows: [
          ['Google Cloud, "¿Qué son los agentes de IA?"', '"Sistemas de software que usan la IA para alcanzar objetivos y completar tareas en nombre de los usuarios"', 'Razonamiento, planificación, memoria y cierto grado de autonomía'],
          ['OpenAI, "A practical guide to building agents"', '"Systems that independently accomplish tasks on your behalf"', 'Tres piezas: un modelo, herramientas e instrucciones'],
          ['Anthropic, "Building effective agents" (19 de diciembre de 2024)', 'Sistemas donde el modelo "dynamically direct their own processes and tool usage"', 'Lo separa de un flujo fijo, escrito de antemano'],
          ['Microsoft, documentación de Copilot Studio', '"An AI assistant that handles conversations and completes tasks"', 'Sigue instrucciones, usa conocimiento conectado y herramientas']
        ] },
        { kind: 'source', html: 'Fuentes: páginas oficiales de Google Cloud (versión en castellano), OpenAI, Anthropic y Microsoft Learn, descargadas y leídas en noviembre de 2026. Las citas en inglés se dejan en su idioma original; la tercera columna es nuestro resumen.' },
        { kind: 'p', mt: true, html: 'Juntando las cuatro definiciones, un agente funciona como un ciclo de cuatro tiempos. <strong>Mira</strong> el estado de su tarea; <strong>decide</strong> qué hacer, a veces con un modelo de lenguaje y a veces con reglas; <strong>actúa</strong> con una herramienta, como una búsqueda o un cálculo; y <strong>comprueba</strong> si ya cumplió el objetivo. Si no, vuelve a empezar. Todo lo demás, desde un asistente de Teams hasta un agente que programa, es una variación de ese ciclo.' },
        { kind: 'p', html: 'Antes de los agentes conviene entender la IA que los mueve. Si usted parte de cero, nuestro <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">resumen de clases de programación e IA en el Perú</a> le muestra por dónde empezar según su edad, y para escolares que quieren aprovechar el verano está el plan de <a class="ag-inline-link" href="/vacaciones-utiles-2027-inteligencia-artificial">vacaciones útiles 2027 de inteligencia artificial</a>.' }
      ]
    },
    {
      id: 'diferencias',
      eyebrow: 'Agente, asistente o bot',
      h2: '¿En qué se diferencia un agente de IA de un chatbot o de la IA generativa?',
      lede: 'En la autonomía. La IA generativa produce un texto o una imagen cuando se le pide. Un asistente ayuda dentro de una conversación. Un agente recibe una meta y decide por sí mismo varios pasos seguidos para alcanzarla.',
      body: [
        { kind: 'table', numCols: [], caption: 'Agentes, asistentes y bots según Google Cloud', head: ['Tipo', 'Autonomía', 'Para qué sirve'], rows: [
          ['Agente de IA', 'La mayor: decide y actúa por pasos', 'Tareas y flujos de trabajo complejos'],
          ['Asistente de IA', 'Menor: necesita la intervención del usuario', 'Colaborar con una persona dentro de un producto'],
          ['Bot', 'La menor: sigue reglas preprogramadas', 'Tareas e interacciones sencillas']
        ] },
        { kind: 'source', html: 'Fuente: Google Cloud, "¿Qué son los agentes de IA?", sección sobre agentes, asistentes y bots. Ahí se lee que los asistentes "son menos autónomos y requieren la intervención y las entradas del usuario", y que los bots "son los que menos autonomía tienen, ya que suelen seguir reglas preprogramadas". Consultado en noviembre de 2026.' },
        { kind: 'p', mt: true, html: 'Algunos ejemplos que usamos en clase, todos nuestros: un agente que revisa la bandeja de entrada de una academia, clasifica las consultas y redacta borradores para que una persona los apruebe; uno que compara tres horarios de clases con la agenda de una familia; uno que lee una hoja de cálculo de ventas, detecta los días anómalos y escribe un resumen; y uno de programación que corre las pruebas de un proyecto, encuentra la que falla y propone un cambio. En los cuatro casos hay un objetivo, herramientas y un momento en que el agente debe parar.' }
      ]
    },
    {
      id: 'ejemplo',
      tint: 'tint',
      eyebrow: 'Primer agente',
      h2: '¿Cómo se programa un agente de IA sencillo? Un ejemplo en Python',
      lede: 'Así empieza el curso, sin ningún modelo de lenguaje, para ver el esqueleto limpio. La agenda es inventada por nosotros: la familia tiene ocupadas las 4, las 5 y las 7 de la tarde, y el agente debe encontrar una hora libre y traducirla a la hora de la India.',
      body: [
        { kind: 'code', label: 'Un agente con dos herramientas y memoria', lang: 'Python', code: PY, note: 'Las dos funciones son las herramientas. El diccionario <code>memoria</code> guarda lo que ya probó. Cada vuelta del bucle es un paso: mirar, decidir, actuar y comprobar. <code>MAX_PASOS</code> es el freno.' },
        { kind: 'code', label: 'Lo que hace el agente', lang: 'Salida', code: OUT, note: 'Salida real de Python 3 en nuestro equipo, sin retoques. El 4.5 significa las 4:30 de la madrugada siguiente en la India.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Mirar.</strong> Al empezar cada paso, el agente revisa su memoria: ¿ya eligió una hora? ¿Qué candidatas le quedan por probar? Sin memoria, repetiría la misma consulta para siempre.',
          '<strong>Decidir y actuar.</strong> Toma la primera candidata pendiente y llama a la herramienta <code>agenda_libre</code>. Las 16 y las 17 están ocupadas; las 18 están libres.',
          '<strong>Comprobar.</strong> En el paso 4 encuentra una hora elegida, usa la segunda herramienta, <code>a_india</code>, y termina: <code>DONE: Lima 18 = India 4.5</code>.',
          '<strong>Primer freno: no queda nada.</strong> Si las candidatas fueran 16, 17 y 19, todas ocupadas, el agente no inventa una hora: en el paso 4 imprime <code>STOP: nothing free, ask the family</code> y devuelve el problema a una persona.',
          '<strong>Segundo freno: límite de pasos.</strong> Con <code>MAX_PASOS = 2</code>, el agente prueba las 16 y las 17 y se detiene con <code>STOP: step limit reached</code>, aunque la solución estaba en el paso siguiente. Un límite protege, pero también puede cortar demasiado pronto.'
        ] },
        { kind: 'p', mt: true, html: 'En los módulos siguientes el estudiante cambia la decisión por reglas por la de un modelo de lenguaje, que elige la herramienta según el objetivo escrito en lenguaje natural. El esqueleto sigue siendo el mismo: herramientas, memoria, comprobación y frenos. Quien entendió este programa de treinta líneas entiende qué está pasando dentro de un agente comercial, y sabe dónde buscar cuando se equivoca.' }
      ]
    },
    {
      id: 'cuando-no',
      eyebrow: 'Cuándo no',
      h2: '¿Siempre conviene usar un agente de IA?',
      lede: 'No. Un agente es más caro, más lento y más difícil de controlar que un programa con pasos fijos. Las propias empresas que los construyen recomiendan empezar por lo más simple.',
      body: [
        { kind: 'two',
          leftH3: 'Lo que aconseja Anthropic',
          left: [
            'En "Building effective agents", publicado el 19 de diciembre de 2024, Anthropic recomienda "finding the simplest solution possible, and only increasing complexity when needed". Es decir, si la tarea siempre sigue los mismos pasos, basta un flujo de trabajo fijo.',
            'El mismo texto propone incluir "stopping conditions (such as a maximum number of iterations) to maintain control". Es exactamente el <code>MAX_PASOS</code> del ejemplo de arriba.'
          ],
          rightH3: 'Lo que dice el reglamento peruano',
          right: [
            'El Reglamento de la Ley 31814, aprobado por el DS 115-2025-PCM el 9 de setiembre de 2025, reconoce en su artículo 6 que los sistemas de IA "varían en sus niveles de autonomía". Un agente es justamente un sistema con más autonomía.',
            'Entre sus principios rectores, el artículo 7 incluye la supervisión humana: la intervención de una persona es necesaria para "corregir, modificar o detener" estos sistemas. Lo citamos como contexto, sin dar asesoría legal.'
          ] },
        { kind: 'p', mt: true, html: 'En el curso esto se traduce en una costumbre: antes de construir un agente, el estudiante escribe en una línea por qué un programa común no alcanza. Si no puede justificarlo, construye el programa común. Y cada agente que construye tiene un freno y un punto donde devuelve la decisión a una persona.' }
      ]
    },
    {
      id: 'edades',
      eyebrow: 'Por edad',
      h2: '¿Quién puede tomar un curso de agentes de IA y desde qué edad?',
      lede: 'Desde los 13 años, pero no con cualquier herramienta. Varias plataformas de agentes exigen mayoría de edad o una cuenta de trabajo, así que el curso depende de la edad del estudiante.',
      body: [
        { kind: 'table', numCols: [], caption: 'Qué curso de agentes corresponde a cada edad (criterio nuestro, a partir de los términos de cada empresa)', head: ['Edad', 'Herramienta del curso', 'Condición', 'Formato'], rows: [
          ['13 a 17 años', 'Microsoft Copilot Studio', 'Un padre, madre o tutor acepta los términos de Microsoft', 'Solo individual'],
          ['13 a 17 años', 'Python, con agentes escritos por el estudiante', 'Sin cuentas externas', 'Grupo o individual'],
          ['18 años o más, universitarios', 'Copilot Studio con datos y conectores', 'Cuenta de trabajo o de estudio, o entorno de práctica', 'Solo individual'],
          ['Adultos', 'Codex y Claude Code, agentes de programación', 'Claude exige 18 años; suscripciones propias de cada empresa', 'Grupo o individual'],
          ['Adultos en empresas', 'Gemini Enterprise o Copilot Studio', 'Cuenta de la organización', 'Solo individual']
        ] },
        { kind: 'source', html: 'Fuentes: fichas de nuestros cursos y términos de Anthropic y Microsoft citados en nuestra <a class="ag-inline-link" href="/ai-tools-age-guide">AI tool age guide</a> (auditoría del 15 de julio de 2026). Ningún estudiante menor de 18 usa Claude ni Claude Code en nuestras clases.' },
        { kind: 'p', mt: true, html: 'Para profesionales que quieren usar agentes en su trabajo, con aprobaciones, bitácoras y los plazos del reglamento peruano por sector, preparamos una guía aparte. Mientras tanto, la página en inglés <a class="ag-inline-link" href="/ai-agents-explained">AI agents explained</a> amplía las ideas de esta sección.' }
      ]
    },
    {
      id: 'horario',
      eyebrow: 'Horario',
      h2: '¿Cuándo son las clases de agentes de IA, si el mentor está en la India?',
      lede: 'Cuando usted las reserve. La diferencia con la India es de diez horas y media durante todo el año, sin horario de verano en ninguno de los dos países.',
      body: [
        { kind: 'p', html: 'Tres equivalencias que calculamos con los husos oficiales (Perú UTC-5, India UTC+5:30), igual que lo hace la segunda herramienta del agente: las 7:00 a. m. en Lima son las 5:30 p. m. en la India; las 12:30 p. m. limeñas son las 11:00 p. m. allá; y las 9:00 p. m. en Lima son las 7:30 a. m. del día siguiente en la India. Son conversiones, no horarios de clase.' },
        { kind: 'p', html: 'Los adultos que trabajan suelen elegir la mañana temprano o la noche; los adolescentes, la tarde después del colegio o el fin de semana. En el formato individual la hora puede cambiar cada semana.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Avance',
    h2: '¿Cómo se mide el avance construyendo agentes de IA?',
    lede: 'Cinco niveles nuestros para describir qué tan lejos ha llegado un estudiante. No son una certificación.',
    table: { caption: 'Cinco niveles en la construcción de agentes (escala nuestra)', head: ['Nivel', 'Qué construye', 'Qué demuestra'], rows: [
      ['1. Bucle', 'Un agente por reglas como el del ejemplo', 'Entiende herramientas, memoria y frenos'],
      ['2. Modelo', 'El mismo agente decidiendo con un modelo de lenguaje', 'Sabe cuándo la decisión es del modelo y cuándo del código'],
      ['3. Conocimiento', 'Un agente que responde con documentos propios', 'Detecta respuestas sin respaldo y las corrige'],
      ['4. Control', 'Un agente con aprobaciones humanas y registro de pasos', 'Diseña dónde parar y quién decide'],
      ['5. Proyecto', 'Un agente útil para un caso real, probado y documentado', 'Lo explica y lo defiende en inglés']
    ] },
    left: { h3: 'Para adultos', ps: [
      'Empiece por un problema propio y pequeño. Un agente que le ahorra veinte minutos al día vale más que uno espectacular que nunca usa.',
      'Pregúntese siempre qué pasa si el agente se equivoca, y quién lo nota.'
    ] },
    right: { h3: 'Para adolescentes', ps: [
      'Construya el bucle a mano antes de usar cualquier plataforma.',
      'Un agente sin freno no está terminado, por bien que funcione el primer día.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más cerca de los agentes',
    lede: 'La base que necesita un agente, agentes en el trabajo y el motor que hay detrás, todos en vivo y en inglés.',
    bands: [
      { num: 'I', h3: 'Antes del agente', sub: 'Programar y usar IA con criterio', courses: [
        { code: 'AGE / BASE / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python para adultos', blurb: 'Desde los 18 años: el lenguaje en que se escriben las herramientas de un agente.' },
        { code: 'AGE / BASE / 02', slug: 'python-complete-masterclass-teens', title: 'Python para adolescentes', blurb: 'De 13 a 18 años: lo necesario para escribir agentes propios sin cuentas externas.' },
        { code: 'AGE / BASE / 03', slug: 'ai-tools-mastery-complete-college', title: 'Herramientas de IA para adultos', blurb: 'Instrucciones claras y verificación de respuestas antes de delegar tareas.' }
      ] },
      { num: 'II', h3: 'Agentes en el trabajo', sub: 'Desde los 18 años', courses: [
        { code: 'AGE / TRABAJO / 01', slug: 'ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals', title: 'Copilot Studio para profesionales', blurb: 'Solo individual: agentes para procesos de una empresa, con datos y aprobaciones.' },
        { code: 'AGE / TRABAJO / 02', slug: 'build-ai-agents-with-google-gemini-enterprise-course', title: 'Agentes con Gemini Enterprise', blurb: 'Solo individual: agentes en el entorno de Google de una organización.' },
        { code: 'AGE / TRABAJO / 03', slug: 'python-ai-automation-masterclass-college', title: 'Automatización con Python', blurb: 'Scripts que hacen el trabajo repetitivo; a menudo, la solución simple que evita un agente.' }
      ] },
      { num: 'III', h3: 'El motor por dentro', sub: 'Modelos de IA', courses: [
        { code: 'AGE / MOTOR / 01', slug: 'complete-generative-ai-masterclass-college', title: 'IA generativa por dentro', blurb: 'Desde los 18 años: cómo funciona el modelo de lenguaje que decide en un agente.' },
        { code: 'AGE / MOTOR / 02', slug: 'ai-ml-masterclass-complete-college', title: 'Aprendizaje automático', blurb: 'Desde los 18 años: datos, modelos y evaluación, la base de toda la IA.' },
        { code: 'AGE / MOTOR / 03', slug: 'ai-ml-masterclass-teens', title: 'IA para adolescentes', blurb: 'De 13 a 18 años: modelos entrenados por el propio estudiante.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Las clases',
    h2: '¿Cómo son las clases del curso de agentes de IA?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Antes del trabajo', l: 'Para profesionales que estudian temprano.' },
      { time: 'Después del colegio', l: 'Para adolescentes, en la tarde o el fin de semana.' },
      { time: 'Semana a semana', l: 'En individual, la hora se acomoda a su agenda.' }
    ],
    cells: [
      { h3: 'El bucle primero', p: 'Todo agente empieza escrito a mano, para ver cada pieza.' },
      { h3: 'Herramientas reales', p: 'El estudiante conecta agentes a datos y servicios permitidos a su edad.' },
      { h3: 'Frenos obligatorios', p: 'Cada agente tiene un límite de pasos y un punto de entrega a una persona.' },
      { h3: 'Pruebas antes de publicar', p: 'Se buscan a propósito los casos en que el agente falla.' },
      { h3: 'Mentor fijo', p: 'La misma persona acompaña al estudiante todo el curso.' },
      { h3: 'Grupo o individual', p: 'Grupos de quince a veinte, o uno a uno; Copilot Studio, solo individual.' }
    ]
  },

  projectsH2: 'Proyectos de estudiantes',
  projectsLede: 'Trabajos de estudiantes de varias edades, algunos con agentes y automatización. Más en <a class="ag-inline-link" href="/student-labs">Student labs</a>, en inglés.',
  reviewsLede: 'Reseñas de estudiantes y familias publicadas en Google, en su inglés original.',

  fees: {
    h2: 'Cuánto cuesta el curso de agentes de IA',
    lede: 'Las mensualidades figuran en dólares estadounidenses y se pagan con tarjeta. Su banco hace la conversión cuando procesa el cargo. Las suscripciones a herramientas de terceros, cuando el curso las requiere, se contratan aparte con cada empresa.',
    free: ['Clase de prueba sin costo', 'El mentor sugiere el curso según su edad y objetivo', 'Sin tarjeta para reservar'],
    group: ['Grupo de quince a veinte estudiantes', 'Dos clases en directo por semana', 'Un mentor de inicio a fin', 'Pago mes a mes'],
    one: ['Solo usted y su mentor', 'Agentes para su propio caso', 'Obligatorio en los cursos de Copilot Studio y Gemini']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Agentes de IA: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No, son en inglés de principio a fin, en vivo y por internet, con mentores desde la India. Para quien construye agentes eso ayuda: la documentación de Copilot Studio, Gemini, Codex y Claude Code está en inglés, y los agentes se instruyen mejor cuando uno domina el idioma de la herramienta. Lima tiene un nivel de inglés alto según el EF EPI 2025. El mentor habla claro y ajusta el ritmo.' },
      { q: '¿Qué es un agente de IA, en una frase?', a: 'Un programa que recibe un objetivo y lo cumple por pasos, eligiendo herramientas, revisando el resultado y deteniéndose cuando termina o cuando alcanza un límite.' },
      { q: '¿Necesito saber programar?', a: 'No para empezar. Con Copilot Studio se construyen agentes sin código, y en los cursos con Python se empieza desde cero. Saber programar ayuda a entender qué hace el agente por dentro.' },
      { q: '¿Qué ejemplos de agentes de IA hay?', a: 'Un agente que clasifica correos y redacta borradores para aprobar, uno que cruza horarios con una agenda, uno que resume una hoja de ventas y uno que corre pruebas de un programa y propone arreglos. Todos los construimos en clase.' },
      { q: '¿Un adolescente puede tomar el curso?', a: 'Sí, desde los 13 años, con Copilot Studio en clases individuales y con un padre o tutor que acepte los términos de Microsoft, o con agentes escritos en Python sin cuentas externas. Claude y Claude Code no se usan con menores de 18.' },
      { q: '¿Agentes de IA o IA generativa?', a: 'La IA generativa produce contenido cuando se le pide. Un agente la usa como cerebro para decidir pasos y actuar con herramientas. El curso enseña ambas piezas y cómo se combinan.' },
      { q: '¿Necesito pagar herramientas aparte?', a: 'Depende del curso. Los agentes en Python no requieren pagos externos. Los cursos de Codex y Claude Code requieren suscripciones que se contratan directamente con cada empresa.' },
      { q: '¿En qué horario son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Por ejemplo, las 7:00 a. m. en Lima son las 5:30 p. m. en la India.' },
      { q: '¿Tiene certificado?', a: 'Al terminar se entrega un certificado de finalización de Modern Age Coders, sin valor oficial y no universitario. Lo que de verdad cuenta es el agente funcionando que usted puede enseñar.' },
      { q: '¿Cómo se paga?', a: 'Una vez al mes, con tarjeta; el importe está en dólares estadounidenses y la conversión corre por cuenta de su banco. Reservar la prueba no requiere tarjeta.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más lecturas',
    h2: 'Otras páginas sobre agentes',
    lede: 'Varias están en inglés, como las clases.',
    items: [
      { href: '/ai-agents-explained', label: 'AI agents explained', p: 'Una explicación más larga de qué es un agente y cómo se construye.' },
      { href: '/ai-agents-for-teens', label: 'AI agents for teens', p: 'Agentes de IA para escolares, con sus reglas de edad.' },
      { href: '/agentic-coding-classes', label: 'Agentic coding classes', p: 'Programar con agentes como Codex y Claude Code, para adultos.' },
      { href: '/ai-agents-and-automation', label: 'AI agents and automation', p: 'Cuándo basta automatizar y cuándo hace falta un agente.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Nuestras clases para el Perú, por edad y tema.' },
      { href: '/ai-tools-age-guide', label: 'AI tool age guide', p: 'Qué edad exige cada herramienta de IA.' }
    ]
  },

  start: {
    h2: 'Construya su primer agente en una clase de prueba',
    lede: 'En la clase gratuita el mentor le pregunta qué tarea le gustaría delegar, arma con usted el esqueleto de un agente por reglas y le recomienda el curso que corresponde a su edad y su objetivo.',
    readFirst: 'Si quiere leer antes, <a class="ag-inline-link" href="/ai-agents-explained">AI agents explained</a> y <a class="ag-inline-link" href="/agentic-coding-classes">Agentic coding classes</a> amplían en inglés lo que verá en la clase.',
    note: 'El curso de agentes se dicta en directo por videollamada y en inglés, desde la India. Sus preguntas previas puede enviarlas por WhatsApp en castellano.',
    formNote: 'Gratis, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Agentes de IA', links: [
        { href: '/courses/ai-agents-with-microsoft-copilot-studio-course-for-teens', label: 'Copilot Studio, 13 a 18' },
        { href: '/courses/ai-agents-with-microsoft-copilot-studio-course-for-college-students', label: 'Copilot Studio, universitarios' },
        { href: '/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', label: 'Codex y Claude Code' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Perú', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Clases en Perú' },
        { href: '/vacaciones-utiles-2027-inteligencia-artificial', label: 'Verano de IA 2027' },
        { href: '/ai-agents-explained', label: 'Qué es un agente' },
        { href: '/ai-tools-age-guide', label: 'Edades de las herramientas' }
      ] }
    ],
    bottomRight: 'Un agente sin freno no está terminado'
  },

  personalityCss: `
.ag-root.ag-age .ag-hero h1 { letter-spacing: -0.009em; max-width: 18ch; }
.ag-root.ag-age .ag-capsule { border-left-width: 4px; border-radius: 6px; }
.ag-root.ag-age .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-age .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-age .ag-steps li { line-height: 1.65; }
`,

  dossier: {
    curriculumAuthority: 'Google Cloud "¿Qué son los agentes de IA?" (Spanish edition); OpenAI "A practical guide to building agents"; Anthropic "Building effective agents" (19 December 2024); Microsoft Learn Copilot Studio overview; DS 115-2025-PCM arts. 6 j and 7 h (El Peruano, 9 September 2025); course rules in content/courses/data/copilot-studio-teens.json; vendor terms in content/ai-tool-age-audit.json; tzdata. The examples of agents, the age table, the levels, the agenda and the Python agent are our own.',
    localProject: 'A rule-based agent loop in Python with no language model: an invented family agenda (busy at 16, 17 and 19 Lima time), two tools (agenda_libre and a_india, UTC-5 to UTC+5:30), a memory of tried hours and a step limit. Run with python3 -I it checks 16 (busy), 17 (busy), 18 (free) and finishes "DONE: Lima 18 = India 4.5"; with candidates 16, 17, 19 it stops "nothing free, ask the family"; with MAX_PASOS = 2 it stops "step limit reached". Lesson family: goal, tools, memory, success check and two stopping conditions.',
    requiredMentions: ['step 4 DONE: Lima 18 = India 4.5', 'STOP: nothing free, ask the family', 'Un agente con dos herramientas y memoria', 'Cómo definen un agente de IA las empresas que los construyen', 'Agentes, asistentes y bots según Google Cloud', 'finding the simplest solution possible, and only increasing complexity when needed', 'varían en sus niveles de autonomía', 'Qué curso de agentes corresponde a cada edad', 'Cinco niveles en la construcción de agentes', 'Un agente sin freno no está terminado'],
    sources: [
      { claim: 'Google Cloud definition of AI agents; agents vs assistants vs bots by autonomy.', url: 'https://cloud.google.com/discover/what-are-ai-agents?hl=es' },
      { claim: 'OpenAI: agents independently accomplish tasks; three components (model, tools, instructions).', url: 'https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf' },
      { claim: 'Anthropic (19 December 2024): workflows vs agents; simplest solution first; stopping conditions such as a maximum number of iterations.', url: 'https://www.anthropic.com/engineering/building-effective-agents' },
      { claim: 'Microsoft: a Copilot Studio agent handles conversations, completes tasks, follows instructions, uses knowledge and tools.', url: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-what-is-copilot-studio' },
      { claim: 'DS 115-2025-PCM art. 6 j (AI systems vary in autonomy) and art. 7 h (human supervision to correct, modify or stop).', url: 'https://cdn.www.gob.pe/uploads/document/file/8619777/7133522-decreto-supremo-n-115-2025-pcm.PDF?v=1757422328' },
      { claim: 'Claude 18+.', url: 'https://www.anthropic.com/legal/consumer-terms' }
    ],
    rejectedClaims: [
      'Offering Claude, Claude Code or the Codex and Claude Code teens course to under-18s: refused; teens get Copilot Studio one to one with a parent accepting Microsoft\'s terms, or agents written in Python.',
      'Naming or ranking other Peruvian agent courses (Coderhouse, CIP) or their prices: refused.',
      'Legal advice on DS 115-2025-PCM: refused; quoted as context only.',
      'Any job, salary or official-certificate claim: refused; our certificate of completion only.',
      'A real family agenda in the example: none; it is invented and labelled ours.'
    ]
  }
};
