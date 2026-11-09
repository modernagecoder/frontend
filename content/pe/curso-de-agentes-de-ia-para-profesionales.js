// SHIP: market | Agentes de IA para profesionales en Perú: casos, riesgo alto y plazos del DS 115-2025-PCM | human approval gate, failure threshold and an audit log for an office agent
'use strict';
// Curso de agentes de IA para profesionales (ag- Spanish-language door, Peru cluster row PE100, P4 subject, hubGroup subjects).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only. No legal advice: the regulation is quoted as context.
// Angle: the working professional in Peru who types "agentes de ia", "curso de agentes de ia para empresas", "agentes de ia
// microsoft / gemini / claude" (KEYWORDS.md section 2: adult, professional, tool-named; profession-specific AI recurs).
// Spine: what an agent does inside a company (Microsoft, OpenAI); which uses Peru's AI regulation calls high risk (art. 24.1) or
// forbids (art. 23) and what it asks for transparency (art. 25); the private-sector implementation schedule by sector (first final
// provision); how companies keep an agent under control (OpenAI: risk ratings, human intervention, failure thresholds); one
// original Python lesson (an approval gate, a failure threshold and an audit log); English at work by job function (EF EPI 2025).
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/curso-de-agentes-de-ia-para-profesionales/):
//  DS 115-2025-PCM, Reglamento de la Ley 31814 (El Peruano, martes 9 de setiembre de 2025; ds115.pdf/ds115.txt, from
//    gob.pe/institucion/pcm/normas-legales/7133522-115-2025-pcm): art. 22.1 "Uso indebido" and "Uso de riesgo alto"; art. 23.1 a
//    "Influir de manera engañosa o manipulativa en la toma de decisiones de las personas"; art. 24.1 a "gestionar activos críticos
//    nacionales que brindan soporte a servicios esenciales (energía, telecomunicaciones, salud, transporte, agua y banca, entre
//    otros)", b evaluation of NNA in education, e "Determinar procesos de selección, evaluación, contratación y cese de trabajadores
//    o postulantes", f social programmes, g "Determinar la evaluación crediticia de personas; salvo si el uso de la IA, es para la
//    detección de fraude financiero", h access to health services; art. 25.2 "el etiquetado visible del sistema basado en IA";
//    art. 7 h "Supervisión Humana"; Primera disposición complementaria final, private sector: "a) Para usos de IA en los sectores
//    de salud, educación, justicia, seguridad, economía y finanzas: Un (1) año", "b) ... transporte, comercio y trabajo: Dos (2)
//    años", "c) ... producción, agricultura, energía y minería: Tres (3) años", "d) Para todos los usos no incluidos en los sectores
//    anteriores ... Cuatro (4) años", each "contado a partir del día siguiente de la publicación".
//  OpenAI, "A practical guide to building agents" (openai-guide.txt): "Use these risk ratings to trigger automated actions, such as
//    pausing for guardrail checks before executing high-risk functions or escalating to a human if needed."; "Human intervention
//    is a critical safeguard"; "Exceeding failure thresholds: Set limits on agent retries or actions."
//  Microsoft Learn, Copilot Studio overview (copilotstudio.txt): "Microsoft Copilot Studio is a graphical, low-code studio for
//    building and managing AI-powered agents and workflows."; "Agents can work with employees and customers in multiple languages
//    across Microsoft Teams, Microsoft Copilot, websites, mobile apps, and other channels."
//  Anthropic, "Building effective agents" (anthropic.txt): "We recommend extensive testing in sandboxed environments, along with the
//    appropriate guardrails."
//  EF EPI 2025, Peru page (ef_peru.txt): "Scores by job function ... Accounting & Finance : 484 Admin & Clerical : 540 Customer
//    Service : 585 Human Resources : 542 IT : 522 Legal : 532 Marketing : 565 Operations : 554 Sales : 547 Strategy & Project
//    Management : 589"; Lima 555.
//  INEI TIC bulletin, II Trimestre 2026 (inei_tic_iit2026.txt): "el grupo de 25 a 40 años con un 95,2%".
//  Time: tzdata America/Lima -5:00, Asia/Kolkata +5:30.
// Our own example, run with python3 -I (aprobacion.py in the src-pages folder; the actions and approvals are invented by us):
//    1 | answer_faq | low | done / 2 | draft_quote | low | done / 3 | send_invoice | high | done after approval /
//    4 | delete_client | high | denied by human / 5 | refund_all | unknown tool | blocked /
//    6 | agent | too many failures | handed to a human
// Lesson family: control around an agent: a risk table per tool, a human approval gate for high-risk actions, unknown tools
// blocked, a failure threshold that hands the case to a person, and an audit log of every decision.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  '# Un agente de oficina propone acciones; las de riesgo alto esperan a una persona',
  "RIESGO = {'answer_faq': 'low', 'draft_quote': 'low', 'send_invoice': 'high', 'delete_client': 'high'}",
  "aprobado_por_humano = {'send_invoice': True, 'delete_client': False}",
  'MAX_FALLOS = 2',
  '',
  "propuestas = ['answer_faq', 'draft_quote', 'send_invoice', 'delete_client', 'refund_all']",
  'bitacora = []',
  'fallos = 0',
  '',
  'for accion in propuestas:',
  '    nivel = RIESGO.get(accion)',
  '    if nivel is None:',
  '        fallos += 1',
  "        bitacora.append((accion, 'unknown tool', 'blocked'))",
  '        if fallos >= MAX_FALLOS:',
  "            bitacora.append(('agent', 'too many failures', 'handed to a human'))",
  '            break',
  '        continue',
  "    if nivel == 'high' and not aprobado_por_humano.get(accion, False):",
  "        bitacora.append((accion, nivel, 'denied by human'))",
  '        fallos += 1',
  "    elif nivel == 'high':",
  "        bitacora.append((accion, nivel, 'done after approval'))",
  '    else:',
  "        bitacora.append((accion, nivel, 'done'))",
  '    if fallos >= MAX_FALLOS:',
  "        bitacora.append(('agent', 'too many failures', 'handed to a human'))",
  '        break',
  '',
  'for i, fila in enumerate(bitacora, 1):',
  "    print(i, *fila, sep=' | ')"
].join('\n');

const OUT = [
  '1 | answer_faq | low | done',
  '2 | draft_quote | low | done',
  '3 | send_invoice | high | done after approval',
  '4 | delete_client | high | denied by human',
  '5 | refund_all | unknown tool | blocked',
  '6 | agent | too many failures | handed to a human'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'subjects', label: 'Agentes de IA para profesionales' },
  slug: 'curso-de-agentes-de-ia-para-profesionales',
  code: 'aab',
  accent: '#006567',
  accentRationale: 'Agentes de IA para profesionales: a corporate deep cyan #006567, sober and businesslike, bluer than the forest green of the beginners\' agents page so the two read as siblings rather than twins; contrast 5.57 on the paper #FBF8F2 (alloc.tsv) and above 4.5 on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Curso de agentes de IA para profesionales',
  title: 'Curso de agentes de IA para profesionales en Perú, en inglés',
  description: 'Agentes de IA para profesionales en Perú: Copilot Studio, Gemini Enterprise y agentes de código, con control humano. Clases en vivo, en inglés y a su horario.',
  ogDescription: 'Qué hace un agente en una empresa, qué usos considera de riesgo alto el reglamento peruano de IA, sus plazos por sector y un agente con aprobación humana y bitácora, en Python.',
  twitterDescription: 'Curso de agentes de IA para profesionales en Perú, en vivo y en inglés: construir agentes útiles, aprobados por personas y auditables.',
  pageName: 'Curso de agentes de IA para profesionales en Perú',
  webPageDescription: 'Guía para profesionales y empresas en Perú que quieren usar agentes de IA: qué tareas resuelven, qué usos el Reglamento de la Ley 31814 (DS 115-2025-PCM) considera de riesgo alto o prohibidos, en qué plazos se aplica al sector privado según el sector, cómo se controla un agente con aprobaciones y límites, cómo está el inglés profesional en el Perú y un agente con bitácora escrito por nosotros.',
  courseDescription: 'Curso en vivo y en línea de agentes de inteligencia artificial para profesionales en el Perú, dictado solo en inglés por mentores desde la India: diseño de agentes con Microsoft Copilot Studio, Google Gemini Enterprise o agentes de programación como Codex y Claude Code, con herramientas, conocimiento propio, aprobación humana, límites y registro de acciones, en clases individuales o en grupo según el curso.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Agentes de IA para profesionales',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#en-la-empresa', label: 'En la empresa' },
    { href: '#riesgo', label: 'Riesgo alto' },
    { href: '#plazos', label: 'Plazos' },
    { href: '#control', label: 'Control' },
    { href: '#ejemplo', label: 'Ejemplo' }
  ],
  eyebrow: 'Perú &middot; Agentes de IA &middot; Profesionales y equipos',
  h1: 'Curso de agentes de IA para profesionales, en vivo y en inglés',
  lede: 'En una oficina, un agente de IA no es un experimento: responde a clientes, prepara cotizaciones, mueve datos entre sistemas. Por eso la pregunta profesional no es solo cómo construirlo, sino cómo hacer que pida permiso antes de una acción delicada, que deje rastro de lo que hizo y que cumpla las reglas que el Perú fijó para la IA en setiembre de 2025.',
  secondaryCta: { href: '#riesgo', label: 'Ver los usos de riesgo alto' },
  wa: 'Hola Modern Age Coders, soy profesional en Perú y me interesa el curso de agentes de IA en inglés. ¿Puedo agendar una clase de prueba sin costo?',
  heroNote: 'Clases en directo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; agentes con control humano',
  spec: [
    ['Para quién', 'Profesionales, líderes de equipo, fundadores y desarrolladores'],
    ['Plataformas', 'Copilot Studio, Gemini Enterprise, Codex y Claude Code'],
    ['Enfoque', 'Agentes útiles, aprobados por personas y auditables'],
    ['Formato', 'Individual en Copilot Studio y Gemini; grupo o individual en agentes de código'],
    ['Idioma', 'Inglés, con mentor en directo desde la India'],
    ['Primera clase', 'Sin costo']
  ],
  capsuleQ: 'En resumen',
  capsule: 'Este curso de agentes de IA para profesionales en el Perú enseña a diseñar, probar y poner en marcha agentes que hacen trabajo real en una organización, con Microsoft Copilot Studio, Google Gemini Enterprise o agentes de programación como Codex y Claude Code. Modern Age Coders lo dicta en vivo, en línea y en inglés, con mentores desde la India, poniendo el acento en el control: aprobación humana para las acciones delicadas, límites y bitácora. Las clases van a la hora que usted fije.',

  picks: {
    eyebrow: 'Cursos para profesionales',
    h2: 'Tres cursos de agentes de IA para el trabajo',
    lede: 'Elija según la plataforma de su organización: Microsoft, Google o agentes que programan junto a su equipo técnico.',
    items: [
      { course: 'ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals', code: 'AAB / 01', title: 'Copilot Studio para profesionales', alt: 'Imagen del curso de agentes de IA con Microsoft Copilot Studio para profesionales', note: 'Clases individuales. Agentes conectados a los datos y aplicaciones de su empresa, publicados en Teams o en la web, con flujos de aprobación y pruebas antes de salir a producción.' },
      { course: 'build-ai-agents-with-google-gemini-enterprise-course', code: 'AAB / 02', title: 'Agentes con Gemini Enterprise', alt: 'Imagen del curso de agentes de IA con Google Gemini Enterprise', note: 'Clases individuales, nivel intermedio a avanzado. Para organizaciones que trabajan con Google: agentes con conocimiento propio, pruebas de comportamiento y límites de política.' },
      { course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', code: 'AAB / 03', title: 'Codex y Claude Code para equipos técnicos', alt: 'Imagen del curso de agentes de programación Codex y Claude Code para profesionales', note: 'Para desarrolladores y quienes cambian de carrera. Delegar tareas de código a un agente revisando cada cambio, con pruebas y control de versiones.' }
    ]
  },

  sections: [
    {
      id: 'en-la-empresa',
      eyebrow: 'En la empresa',
      h2: '¿Para qué sirven los agentes de IA en una empresa?',
      lede: 'Para tareas de varios pasos que hoy hace una persona copiando información de un sistema a otro. Un agente lee una solicitud, consulta datos, prepara una respuesta o una acción y, si está bien diseñado, pide aprobación cuando la acción importa.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Atención al cliente', p: 'Responder preguntas frecuentes con los documentos de la empresa, tomar datos de un reclamo y derivar a una persona cuando el caso sale del guion. Microsoft describe agentes que trabajan con empleados y clientes en Teams, sitios web y aplicaciones.' },
          { h3: 'Ventas y operaciones', p: 'Preparar el borrador de una cotización a partir de un correo, revisar stock, programar una visita o resumir el estado de un pedido. La acción final, enviar o cobrar, queda en manos de alguien con nombre y cargo.' },
          { h3: 'Equipos técnicos', p: 'Agentes de programación que corren pruebas, encuentran la falla y proponen un cambio. El desarrollador revisa y aprueba; el agente no publica nada por su cuenta.' }
        ] },
        { kind: 'p', mt: true, html: 'Microsoft define Copilot Studio como "a graphical, low-code studio for building and managing AI-powered agents and workflows", y explica que esos agentes pueden trabajar "in multiple languages across Microsoft Teams, Microsoft Copilot, websites, mobile apps, and other channels". OpenAI, en su guía práctica, resume cualquier agente en tres piezas: un modelo, herramientas e instrucciones. El curso trabaja las tres, más una cuarta que las guías de las propias empresas insisten en no olvidar: el control.' },
        { kind: 'p', html: 'Si usted parte de cero y quiere primero entender qué es un agente, la página general del <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">resumen de nuestras clases en el Perú</a> le orienta por edad y nivel. Para quienes trabajan con equipos o familias en Lima, la página <a class="ag-inline-link" href="/english-medium-coding-classes-lima">English-medium coding classes in Lima</a> muestra cómo enseñamos en inglés.' }
      ]
    },
    {
      id: 'riesgo',
      eyebrow: 'Riesgo alto',
      h2: '¿Qué usos de agentes de IA considera de riesgo alto la ley peruana?',
      lede: 'El reglamento de la Ley 31814, aprobado por el Decreto Supremo N.° 115-2025-PCM y publicado en El Peruano el 9 de setiembre de 2025, clasifica los usos de la IA en indebidos, que están prohibidos, y de riesgo alto, que se permiten con condiciones y controles.',
      body: [
        { kind: 'table', numCols: [], caption: 'Algunos usos de IA de riesgo alto según el artículo 24.1 del DS 115-2025-PCM', head: ['Literal', 'Uso de riesgo alto', 'Dónde puede aparecer un agente'], rows: [
          ['a', 'Gestionar activos críticos que soportan servicios esenciales: energía, telecomunicaciones, salud, transporte, agua y banca, entre otros', 'Operaciones de empresas de servicios'],
          ['b', 'Evaluar a niños, niñas y adolescentes en el sector educativo, salvo que la IA sea complementaria a la evaluación humana', 'Plataformas educativas'],
          ['e', 'Determinar la selección, evaluación, contratación y cese de trabajadores o postulantes, o sus condiciones laborales', 'Recursos humanos'],
          ['f', 'Determinar el acceso, la priorización o el cese de programas sociales', 'Entidades públicas y operadores'],
          ['g', 'Determinar la evaluación crediticia de personas, salvo que la IA se use para detectar fraude financiero', 'Bancos, financieras y comercios con crédito'],
          ['h', 'Determinar el acceso a servicios de salud que afectan la vida y el bienestar', 'Clínicas y aseguradoras']
        ] },
        { kind: 'source', html: 'Fuente: Decreto Supremo N.° 115-2025-PCM, Reglamento de la Ley N.° 31814, artículo 24.1, El Peruano, 9 de setiembre de 2025 (copia en gob.pe). Resumimos cada literal; la lista completa incluye otros usos, como algunos de salud y los que impliquen alta probabilidad de discriminación. La tercera columna es nuestra. No es asesoría legal: verifique el texto vigente y consulte a un abogado.' },
        { kind: 'two', mt: true,
          leftH3: 'Lo prohibido y lo que hay que avisar',
          left: [
            'El artículo 23 considera uso indebido, y por tanto prohibido, un sistema de IA destinado, entre otros fines, a "influir de manera engañosa o manipulativa en la toma de decisiones de las personas". Un agente de ventas que presiona con técnicas engañosas entra de lleno en esa categoría.',
            'El artículo 25 pide, cuando sea relevante para la decisión o la interacción, "el etiquetado visible del sistema basado en IA": el cliente debe saber que conversa con una IA.'
          ],
          rightH3: 'Qué cambia para quien diseña agentes',
          right: [
            'Si un agente participa en una contratación, en un crédito o en el acceso a salud, el diseño debe prever supervisión humana, uno de los principios rectores del artículo 7: la persona debe poder "corregir, modificar o detener" el sistema.',
            'En el curso, cada agente que tocaría una decisión así se diseña como asistente de una persona, nunca como el que decide.'
          ] }
      ]
    },
    {
      id: 'plazos',
      eyebrow: 'Plazos',
      h2: '¿Desde cuándo se aplican estas reglas a las empresas privadas?',
      lede: 'De forma gradual, según el sector. La primera disposición complementaria final del reglamento fija para el sector privado plazos de uno a cuatro años, contados desde el día siguiente a su publicación del 9 de setiembre de 2025.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Plazos de implementación para el sector privado según el DS 115-2025-PCM', head: ['Sectores donde se usa la IA', 'Plazo desde la publicación', 'Ejemplos de agentes afectados (nuestros)'], rows: [
          ['Salud, educación, justicia, seguridad, economía y finanzas', '1 año', 'Agentes de bancos, clínicas, colegios y estudios jurídicos'],
          ['Transporte, comercio y trabajo', '2 años', 'Agentes de logística, tiendas en línea y recursos humanos'],
          ['Producción, agricultura, energía y minería', '3 años', 'Agentes de planta, de campo o de mantenimiento'],
          ['Todos los demás usos', '4 años', 'Agentes internos de oficina y de servicios generales']
        ] },
        { kind: 'source', html: 'Fuente: DS 115-2025-PCM, Primera Disposición Complementaria Final, plazos para el desarrollador o implementador del sector privado respecto del artículo 25 y del Capítulo II del Título VI; las micro y pequeñas empresas y los emprendimientos innovadores tienen plazos propios en la misma disposición. La tercera columna es nuestra. Las normas pueden modificarse: confirme la versión vigente en gob.pe.' },
        { kind: 'p', mt: true, html: 'Para un profesional, la lectura práctica es esta: si su organización trabaja en finanzas, salud o educación, el primer plazo ya corre desde setiembre de 2025, y cualquier agente que construya debería nacer con etiquetado, supervisión humana y registro de acciones. No damos asesoría legal ni de cumplimiento normativo; enseñamos a construir agentes que hagan fácil demostrar ese control.' }
      ]
    },
    {
      id: 'control',
      eyebrow: 'Control',
      h2: '¿Cómo se mantiene un agente de IA bajo control humano?',
      lede: 'Con tres mecanismos que recomiendan las propias empresas que los construyen: una clasificación de riesgo para cada acción, una persona que aprueba lo delicado y un límite de fallos que devuelve el caso a alguien.',
      body: [
        { kind: 'two',
          leftH3: 'Lo que recomiendan OpenAI y Anthropic',
          left: [
            'La guía práctica de OpenAI propone usar calificaciones de riesgo para "pausing for guardrail checks before executing high-risk functions or escalating to a human if needed", y señala como disparador de intervención humana "exceeding failure thresholds".',
            'Anthropic, en "Building effective agents", recomienda "extensive testing in sandboxed environments, along with the appropriate guardrails". En el curso, ningún agente toca datos reales antes de pasar por un entorno de práctica.'
          ],
          rightH3: 'Cómo lo aplicamos en clase',
          right: [
            'Cada herramienta del agente recibe un nivel de riesgo escrito por una persona, no por el modelo. Lo bajo se ejecuta; lo alto espera aprobación.',
            'Todo queda en una bitácora: qué propuso el agente, qué se aprobó, qué se negó y cuándo se devolvió el caso a una persona. Esa bitácora es lo que un auditor o un jefe va a pedir.'
          ] }
      ]
    },
    {
      id: 'ejemplo',
      tint: 'tint',
      eyebrow: 'Ejemplo',
      h2: '¿Cómo se programa la aprobación humana en un agente? Un ejemplo en Python',
      lede: 'Es una clase temprana del curso, sin modelo de lenguaje, para ver el control desnudo. Las acciones y las aprobaciones son inventadas por nosotros: un agente de oficina propone cinco acciones y una persona aprueba o niega las delicadas.',
      body: [
        { kind: 'code', label: 'Aprobación humana, límite de fallos y bitácora', lang: 'Python', code: PY, note: 'El diccionario <code>RIESGO</code> lo escribe una persona. <code>aprobado_por_humano</code> simula las respuestas del responsable. <code>MAX_FALLOS</code> decide cuándo el agente deja de insistir.' },
        { kind: 'code', label: 'La bitácora', lang: 'Salida', code: OUT, note: 'Salida exacta de Python 3 en nuestro equipo. Cada fila es una decisión registrada.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Riesgo bajo, sin espera.</strong> Responder una pregunta frecuente y preparar el borrador de una cotización son acciones de riesgo bajo: el agente las ejecuta y las anota, filas 1 y 2.',
          '<strong>Riesgo alto, con permiso.</strong> Enviar una factura es de riesgo alto. La persona responsable la aprobó, así que se ejecuta y la bitácora dice <code>done after approval</code>.',
          '<strong>Un no también se registra.</strong> Borrar un cliente es de riesgo alto y la persona lo negó. El agente no lo hace, anota <code>denied by human</code> y cuenta un fallo.',
          '<strong>Herramienta desconocida.</strong> <code>refund_all</code> no está en la tabla de riesgos. El agente no improvisa: la bloquea y cuenta el segundo fallo.',
          '<strong>Devolver el caso.</strong> Con dos fallos llega a <code>MAX_FALLOS</code> y se detiene con <code>handed to a human</code>. Es el disparador por umbral de fallos que describe la guía de OpenAI, escrito en treinta líneas.'
        ] },
        { kind: 'p', mt: true, html: 'En Copilot Studio o Gemini Enterprise estas piezas existen como configuraciones de la plataforma: flujos de aprobación, conectores con permisos, registros de actividad. Quien las programó una vez a mano entiende qué está configurando y por qué, y sabe explicarlo a su jefe, a su cliente o a un auditor. Ese es el objetivo del curso: agentes que se puedan defender.' }
      ]
    },
    {
      id: 'ingles',
      eyebrow: 'Inglés profesional',
      h2: '¿Por qué un curso de agentes en inglés para profesionales peruanos?',
      lede: 'Porque las plataformas, su documentación y sus foros están en inglés, y porque muchos profesionales peruanos ya tienen el nivel para aprovecharlo. El EF EPI 2025 mide el inglés por área de trabajo.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Inglés en el Perú por área de trabajo, según el EF EPI 2025', head: ['Área de trabajo', 'Puntaje EF EPI 2025'], rows: [
          ['Estrategia y gestión de proyectos', '589'],
          ['Atención al cliente', '585'],
          ['Marketing', '565'],
          ['Operaciones', '554'],
          ['Ventas', '547'],
          ['Recursos humanos', '542'],
          ['Legal', '532'],
          ['Tecnologías de la información', '522'],
          ['Contabilidad y finanzas', '484']
        ] },
        { kind: 'source', html: 'Fuente: EF English Proficiency Index 2025, página de Perú, "Scores by job function", consultada en noviembre de 2026. Según las bandas de EF, desde 550 puntos el nivel es alto y desde 500, moderado. Lima obtiene 555, nivel alto.' },
        { kind: 'p', mt: true, html: 'Las áreas donde más se habla de agentes, atención al cliente, operaciones y gestión de proyectos, son también las de mejor inglés según esta tabla. Contabilidad y finanzas queda por debajo de 500; si es su caso, le sugerimos clases individuales, donde el mentor ajusta el ritmo. Y el público existe: según el INEI, el 95,2% de los peruanos de 25 a 40 años usó internet en el segundo trimestre de 2026.' }
      ]
    },
    {
      id: 'horario',
      eyebrow: 'Horario',
      h2: '¿Cómo encaja un curso con mentores en la India en la agenda de un profesional en Lima?',
      lede: 'Con facilidad: la diferencia es fija, diez horas y media todo el año, y usted elige la hora.',
      body: [
        { kind: 'p', html: 'Tres equivalencias que calculamos con la hora oficial de cada país (Perú UTC-5, India UTC+5:30): las 6:00 a. m. en Lima son las 4:30 p. m. en la India; la 1:30 p. m. limeña, en la pausa del almuerzo, es medianoche allá; y las 10:00 p. m. en Lima son las 8:30 a. m. del día siguiente en la India. Son conversiones de ejemplo, no horarios fijos.' },
        { kind: 'p', html: 'Los cursos de Copilot Studio y Gemini Enterprise son individuales, así que la hora puede cambiar cada semana según su carga de trabajo. Si su empresa quiere formar a varias personas, cada una puede llevar su propio horario.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Madurez',
    h2: '¿Cómo se ve un agente listo para el trabajo real?',
    lede: 'Cinco niveles de madurez que usamos para revisar los agentes de nuestros estudiantes. Son nuestros, no una norma.',
    table: { caption: 'Cinco niveles de madurez de un agente profesional (escala nuestra)', head: ['Nivel', 'Qué tiene el agente', 'Pregunta que responde'], rows: [
      ['1. Funciona', 'Cumple la tarea en el caso normal', '¿Hace lo que se le pide?'],
      ['2. Se detiene', 'Límite de pasos y de fallos', '¿Sabe cuándo parar?'],
      ['3. Pide permiso', 'Aprobación humana para acciones de riesgo alto', '¿Quién decide lo delicado?'],
      ['4. Deja rastro', 'Bitácora de propuestas, aprobaciones y negativas', '¿Se puede auditar?'],
      ['5. Se presenta', 'Etiquetado visible y explicación al usuario', '¿El usuario sabe que habla con una IA?']
    ] },
    left: { h3: 'Para líderes de equipo', ps: [
      'Antes de aprobar un agente, pida ver su bitácora de una semana de pruebas.',
      'Asigne a una persona con nombre como responsable de cada acción de riesgo alto.'
    ] },
    right: { h3: 'Para quien construye', ps: [
      'Escriba la tabla de riesgos antes de escribir la primera instrucción del agente.',
      'Si una herramienta no está en la tabla, el agente no la usa.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más para profesionales',
    lede: 'Para reforzar la base técnica, entender los modelos o formar a su equipo, en directo y en inglés.',
    bands: [
      { num: 'I', h3: 'Base técnica', sub: 'Datos y automatización', courses: [
        { code: 'AAB / BASE / 01', slug: 'python-ai-automation-masterclass-college', title: 'Automatización con Python e IA', blurb: 'Scripts que leen, ordenan y mueven datos: a veces, la solución que evita un agente.' },
        { code: 'AAB / BASE / 02', slug: 'data-and-ai-analytics-for-non-programmers-course', title: 'Datos e IA sin programar', blurb: 'Para profesionales de negocio que trabajan con hojas de cálculo.' },
        { code: 'AAB / BASE / 03', slug: 'mysql-database-complete-masterclass-college', title: 'Bases de datos MySQL', blurb: 'Las tablas que un agente consulta, diseñadas y protegidas con criterio.' }
      ] },
      { num: 'II', h3: 'Entender los modelos', sub: 'Lo que hay detrás del agente', courses: [
        { code: 'AAB / MODELO / 01', slug: 'complete-generative-ai-masterclass-college', title: 'IA generativa por dentro', blurb: 'Modelos de lenguaje, tokens y conexión a datos propios.' },
        { code: 'AAB / MODELO / 02', slug: 'ai-ml-masterclass-complete-college', title: 'Aprendizaje automático', blurb: 'Cómo aprende y se evalúa un modelo, sin cajas negras.' },
        { code: 'AAB / MODELO / 03', slug: 'data-science-complete-masterclass-college', title: 'Ciencia de datos', blurb: 'Del dato sucio al informe que respalda una decisión.' }
      ] },
      { num: 'III', h3: 'Equipo y carrera', sub: 'Desde los 18 años', courses: [
        { code: 'AAB / EQUIPO / 01', slug: 'ai-tools-mastery-complete-college', title: 'Herramientas de IA con criterio', blurb: 'Uso diario de la IA generativa sin perder el juicio propio.' },
        { code: 'AAB / EQUIPO / 02', slug: 'hackathon-prep-for-adults-professionals-coding-ai-innovation-course', title: 'Hackathons para profesionales', blurb: 'Construir y presentar un prototipo con IA en poco tiempo.' },
        { code: 'AAB / EQUIPO / 03', slug: 'ai-agents-with-microsoft-copilot-studio-course-for-college-students', title: 'Copilot Studio para recién egresados', blurb: 'Solo individual: agentes con datos y conectores, para quien empieza su carrera.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Formato',
    h2: '¿Cómo son las clases del curso de agentes para profesionales?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Madrugada limeña', l: 'Antes de que empiece la jornada.' },
      { time: 'Pausa del almuerzo', l: 'Una sesión corta entre reuniones.' },
      { time: 'Noche', l: 'Después de la oficina, sin prisa.' }
    ],
    cells: [
      { h3: 'Su caso real', p: 'En individual, el agente del curso resuelve una tarea de su trabajo.' },
      { h3: 'Entorno de práctica', p: 'Nada toca datos reales antes de pasar las pruebas.' },
      { h3: 'Tabla de riesgos', p: 'Cada herramienta tiene un nivel y un responsable humano.' },
      { h3: 'Bitácora obligatoria', p: 'Todo agente del curso deja registro de lo que propone y hace.' },
      { h3: 'Mentor fijo', p: 'La misma persona revisa su avance de principio a fin.' },
      { h3: 'Individual o grupo', p: 'Copilot Studio y Gemini, individual; agentes de código, también en grupo de quince a veinte.' }
    ]
  },

  projectsH2: 'Proyectos de estudiantes',
  projectsLede: 'Trabajos de estudiantes adultos y jóvenes, varios con automatización e IA. Más en <a class="ag-inline-link" href="/student-labs">Student labs</a>, en inglés.',
  reviewsLede: 'Opiniones de estudiantes publicadas en Google, en inglés y sin editar.',

  fees: {
    h2: 'Cuánto cuesta el curso de agentes para profesionales',
    lede: 'Las tarifas figuran en dólares estadounidenses y se cobran mensualmente con tarjeta; su banco aplica el tipo de cambio. Las licencias de Copilot Studio, Gemini Enterprise o las suscripciones de agentes de código, cuando se necesitan, son aparte y se contratan con cada empresa o las provee su organización.',
    free: ['Clase de prueba sin costo', 'Diagnóstico de su caso de uso', 'Sin tarjeta para reservar'],
    group: ['Grupo de quince a veinte personas en agentes de código', 'Dos clases en directo por semana', 'Mentor fijo', 'Pago mensual'],
    one: ['Usted y su mentor', 'Agente para un caso de su trabajo', 'Formato de los cursos de Copilot Studio y Gemini']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Agentes de IA para profesionales: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No, todas son en inglés, en directo y por internet, con mentores desde la India. Para un profesional suele ser una ventaja: Copilot Studio, Gemini Enterprise y los agentes de código se documentan en inglés, y practicar el idioma explicando su propio agente sirve en cualquier reunión. En el EF EPI 2025, Lima tiene nivel alto y atención al cliente llega a 585 puntos. El mentor habla claro y se adapta a su ritmo.' },
      { q: '¿Necesito saber programar?', a: 'No para Copilot Studio, que es de bajo código. Gemini Enterprise pide nivel intermedio. Los cursos de agentes de código empiezan desde cero para quien cambia de carrera.' },
      { q: '¿Qué plataforma me conviene?', a: 'La que ya usa su organización. Si trabajan con Microsoft 365, Copilot Studio; con Google Workspace, Gemini Enterprise; si su equipo es técnico, Codex y Claude Code. En la clase de prueba lo definimos juntos.' },
      { q: '¿El curso me asesora sobre la ley de IA?', a: 'No. Explicamos qué dice el DS 115-2025-PCM como contexto y enseñamos a construir agentes con supervisión humana, bitácora y etiquetado, pero no damos asesoría legal ni de cumplimiento. Para eso, consulte a un abogado.' },
      { q: '¿Qué usos de IA son de riesgo alto en el Perú?', a: 'Entre otros, según el artículo 24.1 del reglamento: decidir contrataciones o despidos, evaluar créditos de personas salvo para detectar fraude, el acceso a servicios de salud y la gestión de servicios esenciales como energía o banca.' },
      { q: '¿Puedo usar un caso real de mi empresa?', a: 'Sí, en las clases individuales. Trabajamos primero en un entorno de práctica y con datos de prueba; usted decide qué información compartir según las reglas de su organización.' },
      { q: '¿Las licencias están incluidas?', a: 'No. Copilot Studio, Gemini Enterprise y las suscripciones de Codex y Claude Code se contratan con cada empresa o las provee su organización. Le ayudamos a preparar el entorno en la primera clase.' },
      { q: '¿En qué horario son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Por ejemplo, las 6:00 a. m. en Lima son las 4:30 p. m. en la India.' },
      { q: '¿Recibo un certificado?', a: 'Recibe nuestro certificado de finalización, que no tiene carácter oficial. Más útil ante un empleador es el agente que construyó, con su tabla de riesgos y su bitácora.' },
      { q: '¿Cómo se paga?', a: 'Mes a mes con tarjeta, en dólares estadounidenses; su banco hace la conversión. La clase de prueba no cuesta nada.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más lecturas',
    h2: 'Páginas relacionadas',
    lede: 'En inglés, el idioma del curso.',
    items: [
      { href: '/ai-agents-and-automation', label: 'AI agents and automation', p: 'Cuándo automatizar con un script y cuándo hace falta un agente.' },
      { href: '/agentic-coding-classes', label: 'Agentic coding classes', p: 'Programar con agentes de código, paso a paso.' },
      { href: '/ai-and-machine-learning-for-working-professionals', label: 'AI and machine learning for working professionals', p: 'La base de aprendizaje automático para quien ya trabaja.' },
      { href: '/ai-agents-explained', label: 'AI agents explained', p: 'Qué es un agente, explicado desde cero.' },
      { href: '/english-medium-coding-classes-lima', label: 'English-medium coding classes in Lima', p: 'Cómo enseñamos en inglés a estudiantes de Lima.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Nuestro método, clase por clase.' }
    ]
  },

  start: {
    h2: 'Traiga un caso de su trabajo a la clase de prueba',
    lede: 'En la clase sin costo el mentor le pide describir una tarea repetitiva de su trabajo, la descompone con usted en herramientas, riesgos y aprobaciones, y le recomienda la plataforma y el curso adecuados.',
    readFirst: 'Si quiere leer antes, <a class="ag-inline-link" href="/ai-agents-and-automation">AI agents and automation</a> y <a class="ag-inline-link" href="/agentic-coding-classes">Agentic coding classes</a> explican en inglés el enfoque del curso.',
    note: 'El curso es en directo, en línea y en inglés, con mentores en la India. Para consultas previas, WhatsApp en castellano.',
    formNote: 'Sin costo ni tarjeta.'
  },

  footer: {
    cols: [
      { h4: 'Agentes para el trabajo', links: [
        { href: '/courses/ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals', label: 'Copilot Studio' },
        { href: '/courses/build-ai-agents-with-google-gemini-enterprise-course', label: 'Gemini Enterprise' },
        { href: '/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', label: 'Codex y Claude Code' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Perú', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Clases en Perú' },
        { href: '/english-medium-coding-classes-lima', label: 'Clases en inglés en Lima' },
        { href: '/ai-agents-and-automation', label: 'Agentes y automatización' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' }
      ] }
    ],
    bottomRight: 'Si una herramienta no está en la tabla, el agente no la usa'
  },

  personalityCss: `
.ag-root.ag-aab .ag-hero h1 { letter-spacing: -0.011em; max-width: 22ch; }
.ag-root.ag-aab .ag-capsule { border-left-width: 4px; border-radius: 1px; }
.ag-root.ag-aab .ag-table caption { text-align: left; font-weight: 600; text-transform: none; }
.ag-root.ag-aab .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-aab .ag-steps li { line-height: 1.63; }
`,

  dossier: {
    curriculumAuthority: 'DS 115-2025-PCM, Reglamento de la Ley 31814 (El Peruano, 9 September 2025): arts. 7 h, 22, 23.1 a, 24.1 a, b, e, f, g, h, 25.2 and the first final complementary provision (private-sector schedule); OpenAI "A practical guide to building agents"; Anthropic "Building effective agents"; Microsoft Learn Copilot Studio overview; EF EPI 2025 Peru job-function scores; INEI ENAHO TIC bulletin, II Trimestre 2026; tzdata. The agent examples per area, the third columns, the maturity levels and the Python example are our own.',
    localProject: 'An approval gate for an office agent in Python: a human-written risk table (answer_faq and draft_quote low, send_invoice and delete_client high), simulated human approvals (send_invoice yes, delete_client no), unknown tools blocked and MAX_FALLOS = 2. Run with python3 -I the audit log reads: 1 answer_faq done, 2 draft_quote done, 3 send_invoice done after approval, 4 delete_client denied by human, 5 refund_all blocked as unknown tool, 6 agent handed to a human after too many failures. Lesson family: risk ratings, human approval, failure threshold and an audit log.',
    requiredMentions: ['3 | send_invoice | high | done after approval', '6 | agent | too many failures | handed to a human', 'Aprobación humana, límite de fallos y bitácora', 'Algunos usos de IA de riesgo alto según el artículo 24.1 del DS 115-2025-PCM', 'Plazos de implementación para el sector privado según el DS 115-2025-PCM', 'Producción, agricultura, energía y minería', 'influir de manera engañosa o manipulativa en la toma de decisiones de las personas', 'pausing for guardrail checks before executing high-risk functions', 'Inglés en el Perú por área de trabajo, según el EF EPI 2025', 'Si una herramienta no está en la tabla, el agente no la usa'],
    sources: [
      { claim: 'DS 115-2025-PCM (9 September 2025): high-risk uses (art. 24.1), prohibited manipulative uses (art. 23.1 a), visible labelling (art. 25.2), human supervision (art. 7 h), private-sector schedule of 1 to 4 years by sector.', url: 'https://cdn.www.gob.pe/uploads/document/file/8619777/7133522-decreto-supremo-n-115-2025-pcm.PDF?v=1757422328' },
      { claim: 'OpenAI: risk ratings to pause high-risk functions or escalate to a human; failure thresholds trigger human intervention.', url: 'https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf' },
      { claim: 'Anthropic: extensive testing in sandboxed environments with guardrails.', url: 'https://www.anthropic.com/engineering/building-effective-agents' },
      { claim: 'Microsoft: Copilot Studio is a low-code studio for agents and workflows; agents work across Teams, Copilot, websites and apps in multiple languages.', url: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-what-is-copilot-studio' },
      { claim: 'EF EPI 2025 Peru job-function scores (Strategy and Project Management 589 ... Accounting and Finance 484); Lima 555.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Internet use by 25 to 40 year olds 95.2% (II Trimestre 2026).', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' }
    ],
    rejectedClaims: [
      'Legal or compliance advice on Ley 31814 or DS 115-2025-PCM, or computed deadline dates: refused; the page quotes the schedule in years from publication, says the rules may change and points to a lawyer.',
      'Naming Peruvian competitors (Coderhouse, CIP) or their prices: refused.',
      'Including licences for Copilot Studio, Gemini Enterprise, Codex or Claude Code in our fee: refused; the page says they are contracted separately.',
      'Any job, salary or official-certificate claim: refused; our certificate of completion only.',
      'Real company data in the example: none; the actions and approvals are invented and labelled ours.'
    ]
  }
};
