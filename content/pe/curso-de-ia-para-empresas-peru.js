// SHIP: market (es subject door) | IA para empresas en Perú: formar al equipo, medir un piloto, MIPYME y el DS 115 | precision, recall and the threshold of an AI pilot, and the accuracy trap
'use strict';
// Curso de IA para empresas (ag- Spanish-language door, Peru cluster row PE157, hubGroup subjects).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only. Adult and professional only (18+ courses).
// No legal advice: the regulation is quoted as published, as context.
// Angle: the owner, manager or team lead in Peru who types "curso de ia para empresas" (KEYWORDS.md section 2: profession-
// specific AI recurs; "ia para empresas"). The sibling curso-de-agentes-de-ia-para-profesionales covers high-risk uses (arts.
// 22 to 25) and the sector schedule; this page takes another angle: what the regulation calls a company that deploys AI
// (art. 6), what it asks of every private developer or deployer (arts. 26, 27, 31.2, 31.3), what applies only to high risk
// (31.1, 31.4, 32), the MYPE timetable, the sandbox and support for MIPYME (arts. 17, 18), and how to measure a pilot.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/curso-de-ia-para-empresas-peru/):
//  DS 115-2025-PCM, Reglamento de la Ley 31814 (El Peruano, martes 9 de setiembre de 2025; ds115.txt / ds115.flat):
//    art. 6 "Implementador: Toda persona natural, persona jurídica o entidad pública que integra o despliega un sistema basado
//    en IA dentro de un proceso productivo u operativo"; "Desarrollador: Toda persona natural, persona jurídica o entidad pública
//    que diseñe, programe o entrene un sistema basado en IA"; "Sesgo Algorítmico: Error sistemático que ocurre cuando un sistema
//    basado en IA, toma decisiones injustas, parciales o discriminatorias"; "Emprendimiento innovador : Micro o pequeña empresa
//    en desarrollo"; art. 13.1 "a través de la Plataforma Nacional de Talento Digital"; art. 17.2 sandbox "evalúe sus efectos
//    antes de su implementación a gran escala"; art. 18.2 "Se promueve que las MIPYME, Emprendimientos Innovadores y entidades
//    de investigación, participen del entorno de experimentación y prueba controlado (Sandbox)"; art. 18.3 PRODUCE and
//    CONCYTEC "mecanismos de financiamiento y apoyo a las MIPYME"; art. 26.1 "se debe cumplir con la normativa vigente sobre
//    privacidad y protección de datos personales"; art. 27.1 a "Promover la participación de equipos diversos y
//    multidisciplinarios"; art. 31.1 high risk: "mantener un registro actualizado y accesible"; art. 31.2 "Establecer
//    políticas, protocolos y procedimientos claros"; art. 31.3 "Fomentar la educación y concientización interna de sus
//    colaboradores sobre los riesgos asociados con el uso de la IA"; art. 31.4 high risk: human oversight, staff able "detener,
//    corregir o invalidar las decisiones"; art. 32.1 private impact assessment "de manera voluntaria"; art. 32.3 documentation
//    kept "por un período mínimo de tres (3) años"; Primera disposición complementaria final, MYPES: "a) Para pequeñas empresas
//    con ventas anuales superiores a 150 UIT y hasta el monto máximo de 1700 UIT: Dos (2) años"; "b) Para microempresas con
//    ventas anuales hasta el monto máximo de 150 UIT y otros equivalentes: Tres (3) años", both counted from the day after
//    publication, applying to "el artículo 25 y el Capítulo II del Título VI" (arts. 31 to 33).
//  EF EPI 2025 Peru page (facts-market/src/ef_peru.txt): "Speaking score: 480", Lima 555.
//  Vendor terms (content/ai-tool-age-audit.json): Claude 18+.
//  Time: tzdata America/Lima -5:00, Asia/Kolkata +5:30.
// Our own calculation: two years from the day after 9 September 2025 runs to September 2027; three years to September 2028
// (labelled ours, not legal advice).
// Our own example, run with python3 -I (piloto.py; twelve invented complaints and scores):
//    umbral 0.7: marcados 4, aciertos 3, falsas alarmas 1, urgentes perdidos 2, precision 0.75, cobertura 0.60
//    umbral 0.5: marcados 6, aciertos 3, falsas alarmas 3, urgentes perdidos 2, precision 0.50, cobertura 0.60
//    umbral 0.25: marcados 10, aciertos 5, falsas alarmas 5, urgentes perdidos 0, precision 0.50, cobertura 1.00
//    exactitud con umbral 0.5: 0.58 / exactitud si nunca marca nada: 0.58
// Lesson family: evaluating a classifier pilot: confusion counts, precision, recall (cobertura), a decision threshold, and why
// accuracy alone can match a model that does nothing.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  '# 12 reclamos inventados: puntaje que dio el modelo y si de verdad eran urgentes',
  'casos = [(0.95, True), (0.88, True), (0.81, False), (0.74, True),',
  '         (0.66, False), (0.58, False), (0.47, True), (0.41, False),',
  '         (0.33, False), (0.29, True), (0.18, False), (0.07, False)]',
  '',
  'def evaluar(umbral):',
  '    vp = sum(1 for p, real in casos if p >= umbral and real)',
  '    fp = sum(1 for p, real in casos if p >= umbral and not real)',
  '    fn = sum(1 for p, real in casos if p < umbral and real)',
  '    precision = vp / (vp + fp)',
  '    cobertura = vp / (vp + fn)',
  "    print(f'umbral {umbral}: marcados {vp + fp}, aciertos {vp}, '",
  "          f'falsas alarmas {fp}, urgentes perdidos {fn}, '",
  "          f'precision {precision:.2f}, cobertura {cobertura:.2f}')",
  '',
  'for u in (0.7, 0.5, 0.25):',
  '    evaluar(u)',
  '',
  'exactitud = sum(1 for p, real in casos if (p >= 0.5) == real) / len(casos)',
  "print('exactitud con umbral 0.5:', round(exactitud, 2))",
  "print('exactitud si nunca marca nada:', round(sum(1 for _, r in casos if not r) / len(casos), 2))"
].join('\n');

const OUT = [
  'umbral 0.7: marcados 4, aciertos 3, falsas alarmas 1, urgentes perdidos 2, precision 0.75, cobertura 0.60',
  'umbral 0.5: marcados 6, aciertos 3, falsas alarmas 3, urgentes perdidos 2, precision 0.50, cobertura 0.60',
  'umbral 0.25: marcados 10, aciertos 5, falsas alarmas 5, urgentes perdidos 0, precision 0.50, cobertura 1.00',
  'exactitud con umbral 0.5: 0.58',
  'exactitud si nunca marca nada: 0.58'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'subjects', label: 'Curso de IA para empresas' },
  slug: 'curso-de-ia-para-empresas-peru',
  code: 'iae',
  accent: '#007047',
  accentRationale: 'Curso de IA para empresas: a ledger green #007047, the green of an accounts book, brighter than the blackboard green of the teachers page; contrast above 4.5 on the paper #FBF8F2 (alloc.tsv) and on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Curso de IA para empresas',
  title: 'Curso de IA para empresas en Perú, en vivo y en inglés',
  description: 'Curso de IA para empresas en Perú, en vivo y en inglés: forme a su equipo, mida un piloto antes de escalarlo y conozca lo que pide el DS 115-2025-PCM. Por persona.',
  ogDescription: 'Qué llama el reglamento peruano implementador, qué pide a toda empresa que usa IA, los plazos para MYPE y cómo medir un piloto de IA con precisión y cobertura, en Python.',
  twitterDescription: 'Inteligencia artificial para dueños, gerentes y equipos en Perú, en vivo y en inglés, en grupo o individual, con agentes de Copilot Studio y Gemini.',
  pageName: 'Curso de inteligencia artificial para empresas en el Perú',
  webPageDescription: 'Guía para empresas peruanas que quieren formar a su gente en inteligencia artificial: qué es un implementador según el DS 115-2025-PCM, qué obligaciones alcanzan a toda empresa y cuáles solo al riesgo alto, los plazos graduales para micro y pequeñas empresas, el sandbox y el apoyo a las MIPYME, cómo medir un piloto con precisión y cobertura, y qué cursos tomar por rol.',
  courseDescription: 'Cursos en vivo y en línea de inteligencia artificial para dueños de empresa, gerentes y equipos de trabajo en todo el Perú, dictados solo en inglés por mentores desde la India: uso responsable de herramientas generativas, datos, evaluación de pilotos, automatización con Python y agentes en Microsoft Copilot Studio y Google Gemini Enterprise, en grupo o en clases individuales, a cualquier hora. Solo para mayores de 18 años.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'IA para empresas',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#roles', label: 'Por rol' },
    { href: '#reglamento', label: 'Reglamento' },
    { href: '#mype', label: 'MYPE' },
    { href: '#piloto', label: 'Medir un piloto' },
    { href: '#equipo', label: 'Formar al equipo' }
  ],
  eyebrow: 'Perú &middot; Inteligencia artificial &middot; Empresas y profesionales',
  h1: 'Curso de IA para empresas en Perú, en vivo y en inglés',
  lede: 'La mayoría de las empresas no fracasa con la IA por falta de herramientas, sino por falta de criterio: se compra una licencia, nadie mide si funciona y a los tres meses se abandona. Este curso forma a las personas que deciden y a las que operan, para que su empresa pruebe la IA con método, la mida con números y cumpla lo que pide la norma peruana.',
  secondaryCta: { href: '#roles', label: 'Ver el curso según su rol' },
  wa: 'Hola Modern Age Coders, escribo desde una empresa en Perú y me interesa el curso de inteligencia artificial para empresas. ¿Podemos agendar una clase de prueba?',
  heroNote: 'Clases en directo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; nota de 4.9 en Google',
  spec: [
    ['Para quién', 'Dueños, gerentes y equipos; mayores de 18 años'],
    ['Base', 'Ninguna para empezar; Python opcional'],
    ['Contenido', 'IA generativa, datos, pilotos, automatización y agentes'],
    ['Modalidad', 'Grupo de quince a veinte personas, o individual'],
    ['Idioma', 'Inglés, con mentor en vivo desde la India'],
    ['Inicio', 'Clase de prueba sin costo']
  ],
  capsuleQ: 'Respuesta breve',
  capsule: 'Modern Age Coders ofrece a empresas de todo el Perú formación en IA en vivo, en línea y en inglés, pensada para dueños, gerentes y equipos mayores de 18 años. Cada persona aprende según su rol: usar herramientas generativas con criterio, medir un piloto antes de escalarlo, automatizar tareas con Python o construir agentes en Microsoft Copilot Studio y Google Gemini Enterprise. Las clases son en grupo o individuales, a la hora que le convenga a cada participante, con un mentor desde la India. Explicamos el reglamento peruano de IA como contexto, nunca como asesoría legal.',

  picks: {
    eyebrow: 'Cursos para empresas',
    h2: 'Tres cursos con los que suelen empezar las empresas',
    lede: 'Dos para construir agentes dentro de las plataformas que su empresa quizás ya paga, y uno para equipos técnicos que programan con agentes de código. Los tres son para mayores de 18.',
    items: [
      { course: 'ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals', code: 'IAE / 01', title: 'Agentes con Microsoft Copilot Studio', alt: 'Imagen del curso de agentes de inteligencia artificial con Microsoft Copilot Studio para profesionales', note: 'Solo en clases individuales. Para empresas que trabajan con Microsoft 365 y quieren un agente que responda con sus documentos internos, con permisos bien puestos.' },
      { course: 'build-ai-agents-with-google-gemini-enterprise-course', code: 'IAE / 02', title: 'Agentes con Google Gemini Enterprise', alt: 'Imagen del curso para construir agentes de inteligencia artificial con Google Gemini Enterprise', note: 'Solo en clases individuales. Para equipos que viven en Google Workspace: agentes conectados a sus datos, probados antes de abrirlos al resto de la empresa.' },
      { course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', code: 'IAE / 03', title: 'Codex y Claude Code para equipos técnicos', alt: 'Imagen del curso de agentes de programación Codex y Claude Code para profesionales', note: 'Pensado para desarrolladores y analistas que quieren encargar trabajo de código a un agente sin aceptar ningún cambio a ciegas. Por los términos de Claude, solo adultos.' }
    ]
  },

  sections: [
    {
      id: 'roles',
      eyebrow: 'Por rol',
      h2: '¿Qué debe aprender de IA cada persona de una empresa?',
      lede: 'No lo mismo. Un gerente necesita saber decidir y medir; un analista, trabajar con datos; un desarrollador, delegar código a un agente sin perder el control. Esta es la ruta que proponemos por rol.',
      body: [
        { kind: 'table', numCols: [], caption: 'Qué aprende cada rol en un curso de IA para empresas (propuesta nuestra)', head: ['Rol', 'Qué necesita poder hacer', 'Curso que sugerimos', 'Primer resultado visible'], rows: [
          ['Dueño o gerente general', 'Decidir qué probar, cómo medirlo y cuándo detenerlo', 'Herramientas de IA con criterio', 'Un piloto con una métrica definida antes de empezar'],
          ['Jefe de área (ventas, atención, operaciones)', 'Redactar el caso de uso y leer los resultados del piloto', 'Datos e IA sin programar', 'Un tablero con precisión y cobertura del piloto'],
          ['Analista o contador', 'Limpiar datos y automatizar reportes repetitivos', 'Automatización con Python e IA', 'Un script que ahorra horas al mes'],
          ['Equipo de Microsoft 365 o Google Workspace', 'Construir un agente interno con permisos y pruebas', 'Copilot Studio o Gemini Enterprise, uno a uno', 'Un agente probado con preguntas reales'],
          ['Desarrollador', 'Usar agentes de código y revisar cada cambio', 'Codex y Claude Code', 'Una tarea real resuelta y revisada con pruebas']
        ] },
        { kind: 'source', html: 'Recomendación de Modern Age Coders. Todos estos cursos son para mayores de 18 años. Para revisar qué edad pide cada herramienta, consulte la <a class="ag-inline-link" href="/ai-tools-age-guide">AI tool age guide</a>.' },
        { kind: 'p', mt: true, html: 'Cada persona se inscribe en su propio curso y sigue su propio ritmo. Si quiere formar a varias personas de la misma empresa, escríbanos y le diremos qué combinación de clases grupales e individuales tiene sentido para su equipo. No vendemos paquetes cerrados ni prometemos resultados de negocio; enseñamos a las personas a trabajar con la IA con método.' },
        { kind: 'p', html: 'Si lo que necesita no es aprender sino que alguien construya la herramienta, ese es otro servicio, que describimos en <a class="ag-inline-link" href="/for-business">Modern Age Coders for Business</a>. Esta página trata solo de formación.' }
      ]
    },
    {
      id: 'reglamento',
      eyebrow: 'Reglamento',
      h2: '¿Qué pide la ley peruana a una empresa que usa inteligencia artificial?',
      lede: 'La norma que reglamenta la Ley 31814, el DS 115-2025-PCM, vigente tras su publicación del 9 de setiembre de 2025, distingue entre quien crea un sistema de IA y quien lo usa dentro de su negocio. La mayoría de empresas está en el segundo grupo.',
      body: [
        { kind: 'two',
          leftH3: 'Implementador o desarrollador',
          left: [
            'El artículo 6 llama desarrollador a quien "diseñe, programe o entrene un sistema basado en IA", e implementador a quien "integra o despliega un sistema basado en IA dentro de un proceso productivo u operativo".',
            'Una empresa que conecta un agente de Copilot Studio a su mesa de ayuda es, con esas palabras, una implementadora. Una empresa que entrena su propio modelo con sus datos es, además, desarrolladora.'
          ],
          rightH3: 'Sesgo algorítmico',
          right: [
            'El mismo artículo define el sesgo algorítmico como un "error sistemático" por el que un sistema de IA toma decisiones injustas, parciales o discriminatorias, debido a los datos de entrenamiento, al diseño del algoritmo o a interacciones humanas sesgadas.',
            'Es un concepto técnico antes que jurídico, y se detecta midiendo. Por eso dedicamos una sección entera a cómo medir un piloto.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Qué artículos del DS 115-2025-PCM alcanzan a una empresa privada y cuáles solo al riesgo alto', head: ['Artículo', 'Qué dice, en resumen', 'A quién alcanza'], rows: [
          ['26.1', 'Cumplir la normativa vigente de privacidad y protección de datos personales', 'Todo desarrollo, implementación y uso de IA'],
          ['27.1', 'Comportamiento probo y ético; entre otras acciones, equipos diversos y multidisciplinarios', 'Desarrolladores, implementadores y usuarios'],
          ['31.2', 'Políticas, protocolos y procedimientos claros de seguridad, privacidad, transparencia y rendición de cuentas', 'Desarrolladores e implementadores'],
          ['31.3', 'Fomentar la educación y concientización interna de los colaboradores sobre los riesgos de la IA', 'Desarrolladores e implementadores'],
          ['31.1', 'Un registro actualizado del funcionamiento, las fuentes de datos y la lógica del sistema', 'Solo sistemas de riesgo alto'],
          ['31.4', 'Supervisión humana: personal capacitado que pueda detener, corregir o invalidar decisiones', 'Solo sistemas de riesgo alto, en ciertos sectores'],
          ['32.1 y 32.3', 'Evaluación de impacto voluntaria y documentación conservada al menos tres años', 'Riesgo alto, de forma voluntaria en el sector privado']
        ] },
        { kind: 'source', html: 'Texto consultado: artículos 6, 26, 27, 31 y 32 del reglamento aprobado por DS 115-2025-PCM (El Peruano, edición del 9 de setiembre de 2025). Resumen nuestro; no es asesoría legal. Para su caso concreto consulte a un abogado.' },
        { kind: 'p', mt: true, html: 'Una fila nos toca de cerca. El artículo 31.3 pide a desarrolladores e implementadores "fomentar la educación y concientización interna de sus colaboradores sobre los riesgos asociados con el uso de la IA". El reglamento no dice con quién ni cómo, y no reconoce cursos privados. Pero sí deja claro que formar al equipo forma parte de usar la IA de manera responsable. Nuestro curso puede ser una parte de esa formación; la política interna, en cambio, la define su empresa.' }
      ]
    },
    {
      id: 'mype',
      eyebrow: 'MYPE',
      h2: '¿Qué plazos tienen las micro y pequeñas empresas?',
      lede: 'Más largos que los de las demás. La primera disposición complementaria final del reglamento da a las MYPE y a los emprendimientos innovadores plazos graduales para el artículo 25 y el capítulo II del título VI, que es donde están las obligaciones del sector privado.',
      body: [
        { kind: 'table', numCols: [], caption: 'Plazos graduales para MYPE en el DS 115-2025-PCM, con un cálculo nuestro de la fecha', head: ['Tipo de empresa', 'Ventas anuales según el reglamento', 'Plazo', 'Hasta aproximadamente (cálculo nuestro)'], rows: [
          ['Pequeña empresa', 'Más de 150 UIT y hasta 1700 UIT', 'Dos (2) años', 'Setiembre de 2027'],
          ['Microempresa', 'Hasta 150 UIT y otros equivalentes', 'Tres (3) años', 'Setiembre de 2028']
        ] },
        { kind: 'source', html: 'Base normativa: la primera disposición complementaria final del DS 115-2025-PCM, cuyos plazos se cuentan "a partir del día siguiente de la publicación" del decreto, el 9 de setiembre de 2025. La última columna es nuestro cálculo aproximado, no una interpretación legal.' },
        { kind: 'p', mt: true, html: 'Un plazo largo no significa que convenga esperar. Lo que la tabla aplaza son deberes de transparencia y de buenas prácticas, y el mismo reglamento recuerda en su artículo 26 que la normativa de protección de datos personales debe cumplirse. Para una MYPE, el tiempo de gracia es la oportunidad de formar a dos o tres personas clave con calma y probar la IA en un proceso pequeño antes de que las obligaciones sean exigibles.' },
        { kind: 'two', mt: true,
          leftH3: 'El sandbox',
          left: [
            'El artículo 17 crea un entorno de experimentación y prueba controlada, para probar sistemas de IA de forma segura y evaluar sus efectos "antes de su implementación a gran escala".',
            'El artículo 18.2 promueve que las MIPYME, los emprendimientos innovadores y las entidades de investigación participen en él. Quien lo gestiona es la SGTD de la PCM; nosotros no participamos.'
          ],
          rightH3: 'Apoyo y formación del Estado',
          right: [
            'El artículo 18.3 encarga articular con PRODUCE y el CONCYTEC mecanismos de financiamiento y apoyo a las MIPYME para usar y adoptar sistemas de IA.',
            'Y el artículo 13.1 prevé cursos, talleres y otras modalidades formativas a través de la Plataforma Nacional de Talento Digital. Vale la pena revisarla; nuestro curso no forma parte de ella.'
          ] }
      ]
    },
    {
      id: 'piloto',
      tint: 'tint',
      eyebrow: 'Una clase de muestra',
      h2: '¿Cómo saber si un piloto de IA funciona? Un ejemplo en Python',
      lede: 'Imagine que su empresa prueba un modelo que marca los reclamos urgentes. El modelo da a cada reclamo un puntaje entre 0 y 1, y usted decide desde qué puntaje se trata como urgente. Los doce reclamos y sus puntajes son inventados por nosotros para la clase.',
      body: [
        { kind: 'code', label: 'Medir un piloto de IA con precisión, cobertura y umbral', lang: 'Python', code: PY, note: 'Precisión: de lo que el modelo marcó como urgente, cuánto lo era. Cobertura: de lo que era urgente, cuánto marcó el modelo. El umbral es la decisión de negocio que conecta las dos.' },
        { kind: 'code', label: 'Resultado', lang: 'Salida', code: OUT, note: 'Salida literal de Python 3 en nuestra computadora. Con umbral 0.25 no se pierde ningún urgente, a cambio de cinco falsas alarmas.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Umbral alto, 0.7.</strong> El modelo marca cuatro reclamos y acierta en tres: precisión 0.75. Pero de los cinco urgentes reales se le escapan dos: cobertura 0.60. Un cliente con un problema serio espera sin que nadie lo sepa.',
          '<strong>Umbral medio, 0.5.</strong> Marca seis y acierta en los mismos tres. Bajar el umbral sumó falsas alarmas sin rescatar ningún urgente, porque los dos perdidos tienen puntajes de 0.47 y 0.29.',
          '<strong>Umbral bajo, 0.25.</strong> Marca diez, acierta en los cinco urgentes y no pierde ninguno: cobertura 1.00. El costo es revisar cinco reclamos que no lo eran. Si revisar uno toma dos minutos y perder un urgente cuesta un cliente, quizás le convenga.',
          '<strong>La trampa de la exactitud.</strong> Con umbral 0.5 el modelo clasifica bien el 58% de los reclamos. Un "modelo" que nunca marca nada también acierta el 58%, porque siete de doce reclamos no eran urgentes. Un proveedor que solo le reporta exactitud le está ocultando lo importante.',
          '<strong>El reto.</strong> Cambie el umbral a 0.45 y prediga, antes de ejecutar, cuántos urgentes se pierden. Luego escriba en una frase, en inglés, qué umbral recomendaría a la gerencia y por qué.'
        ] },
        { kind: 'p', mt: true, html: 'Este ejercicio es la clase que más cambia la conversación en una empresa. Antes de comprar o ampliar una herramienta de IA, la pregunta deja de ser "¿es buena?" y pasa a ser "¿qué error nos sale más caro y cuánto estamos dispuestos a pagar por evitarlo?". También es la manera práctica de vigilar el sesgo algorítmico que define el reglamento: medir los errores por grupo, no solo en promedio.' }
      ]
    },
    {
      id: 'generativa',
      eyebrow: 'IA generativa',
      h2: '¿Qué IA conviene usar primero en una empresa?',
      lede: 'La que resuelve un proceso concreto, medible y de bajo riesgo. Redactar borradores, resumir documentos largos y clasificar correos suelen ser buenos primeros pasos; decidir sobre personas, créditos o contrataciones no lo son.',
      body: [
        { kind: 'p', html: 'Proponemos a cada empresa una regla de tres preguntas antes de cualquier piloto. Primero, si el proceso usa datos personales, y si es así, cómo se cumple la ley de protección de datos que el propio reglamento de IA recuerda en su artículo 26. Segundo, quién revisa el resultado antes de que llegue a un cliente. Tercero, qué número dirá, en un mes, si el piloto funcionó. Si alguna respuesta queda en blanco, el piloto todavía no está listo.' },
        { kind: 'p', html: 'Con esas respuestas, las herramientas se eligen solas. Una empresa en Microsoft 365 empieza con Copilot Studio; una en Google Workspace, con Gemini Enterprise. Un equipo que solo necesita redactar y resumir puede quedarse en herramientas generativas generales, siempre con revisión humana. Lo que no cambia, sea cual sea la herramienta, es el método: un caso de uso escrito, una métrica y una persona responsable.' },
        { kind: 'p', html: 'Si quiere entender primero cómo aprende un modelo, sin enfoque empresarial, la página de nuestro <a class="ag-inline-link" href="/curso-de-inteligencia-artificial-en-ingles-peru">curso de inteligencia artificial en inglés</a> lo explica con un ejemplo en Python. Y si su duda es en qué se distingue un chatbot de un agente que ejecuta acciones, lea <a class="ag-inline-link" href="/ai-agents-explained">AI agents explained</a>, en inglés.' }
      ]
    },
    {
      id: 'equipo',
      eyebrow: 'Formar al equipo',
      h2: '¿Por qué formar al equipo de su empresa en IA en inglés?',
      lede: 'Porque las plataformas de IA, su documentación y sus foros de soporte funcionan en inglés, y porque un equipo que lee y habla de IA en inglés depende menos de traducciones e intermediarios.',
      body: [
        { kind: 'p', html: 'Sin excepción, cada clase que dictamos ocurre en vivo, por internet y en inglés. Según el EF EPI 2025, Lima tiene 555 puntos, el nivel alto, mientras que la expresión oral es la habilidad más débil del Perú, con 480. Muchos profesionales peruanos leen bien un manual técnico, pero les cuesta defender una propuesta en una reunión en inglés. Las clases trabajan las dos cosas: el contenido y la explicación en voz alta.' },
        { kind: 'p', html: 'Los mentores enseñan desde la India y trabajan a diario con profesionales de otros países. Si un participante de su equipo necesita ir más despacio, puede pasar al formato individual sin cambiar de curso. Y como cada persona elige su hora, nadie tiene que dejar su puesto en el horario de mayor carga.' },
        { kind: 'p', html: 'Los cursos de esta página son para adultos. Si en su empresa hay padres o madres que preguntan por opciones para sus hijos adolescentes, les puede compartir <a class="ag-inline-link" href="/curso-de-ia-para-adolescentes-peru">IA para adolescentes de secundaria</a>, que usa solo herramientas permitidas para su edad.' }
      ]
    },
    {
      id: 'horario',
      eyebrow: 'Horario',
      h2: '¿A qué hora puede estudiar un equipo en el Perú con mentores en la India?',
      lede: 'A la que cada persona reserve. Lima está en UTC-5 y la India en UTC+5:30, sin horario de verano en ninguno de los dos países, de modo que la India va diez horas y media adelante todo el año.',
      body: [
        { kind: 'table', numCols: [], caption: 'Horas de oficina en el Perú y su equivalente en la India (conversiones de ejemplo, no turnos)', head: ['Hora de Perú', 'Hora de la India', 'Momento laboral'], rows: [
          ['7:00 a. m.', '5:30 p. m.', 'Antes de abrir la oficina'],
          ['1:00 p. m.', '11:30 p. m.', 'A la hora del refrigerio, en formato individual'],
          ['6:30 p. m.', '5:00 a. m. del día siguiente', 'Al cerrar la jornada'],
          ['8:00 p. m.', '6:30 a. m. del día siguiente', 'Desde casa, por la noche']
        ] },
        { kind: 'source', html: 'Cálculo nuestro con tzdata (America/Lima UTC-5; Asia/Kolkata UTC+5:30). La hora oficial del Perú la mantiene el INACAL.' },
        { kind: 'p', mt: true, html: 'En una misma empresa, el gerente puede tomar sus clases a primera hora y el analista por la noche. No hace falta coordinar un horario común para todo el equipo.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Madurez',
    h2: '¿Cómo saber en qué punto está su empresa con la IA?',
    lede: 'Cinco niveles que usamos para conversar con las empresas sobre su avance. Son nuestros, no una certificación ni una exigencia legal.',
    table: { caption: 'Cinco niveles de uso de IA en una empresa (escala nuestra)', head: ['Nivel', 'Cómo se reconoce', 'Siguiente paso'], rows: [
      ['1. Uso suelto', 'Cada quien usa la herramienta que quiere, sin reglas', 'Escribir una política interna corta'],
      ['2. Uso con reglas', 'Hay una política y nadie sube datos personales', 'Elegir un proceso para un piloto'],
      ['3. Piloto medido', 'Un caso de uso con una métrica definida antes de empezar', 'Medir precisión y cobertura, como en el ejemplo'],
      ['4. Proceso integrado', 'La IA forma parte de un flujo con revisión humana', 'Documentar el sistema y sus datos'],
      ['5. Mejora continua', 'Se revisan los errores por grupo y se ajusta el umbral', 'Formar a nuevas personas del equipo']
    ] },
    left: { h3: 'Si su empresa es una MYPE', ps: [
      'Llegue al nivel 3 con un solo proceso. Es más útil que cinco herramientas sin medir.',
      'Forme primero a una persona que pueda enseñar a las demás.'
    ] },
    right: { h3: 'Si su empresa es mediana o grande', ps: [
      'Pase del nivel 2 al 3 por área, empezando por la que tenga datos más ordenados.',
      'Asigne un responsable por cada piloto, con nombre y fecha de revisión.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más para equipos de empresa',
    lede: 'Para los distintos perfiles de una organización, todos en vivo, en inglés y para mayores de 18.',
    bands: [
      { num: 'I', h3: 'Sin programar', sub: 'Gerencia y áreas de negocio', courses: [
        { code: 'IAE / NEGOCIO / 01', slug: 'ai-tools-mastery-complete-college', title: 'Herramientas de IA con criterio', blurb: 'Para la gerencia: pedir bien, comprobar lo recibido y proteger la información.' },
        { code: 'IAE / NEGOCIO / 02', slug: 'data-and-ai-analytics-for-non-programmers-course', title: 'Datos e IA sin programar', blurb: 'Excel, Sheets y Power BI para leer los números de un piloto.' },
        { code: 'IAE / NEGOCIO / 03', slug: 'complete-business-finance-mathematics-mastery', title: 'Matemática financiera y de negocios', blurb: 'Inversión, riesgo y decisiones con números, la base de cualquier caso de negocio.' }
      ] },
      { num: 'II', h3: 'Con datos', sub: 'Analistas y contadores', courses: [
        { code: 'IAE / DATOS / 01', slug: 'python-ai-automation-masterclass-college', title: 'Automatización con Python e IA', blurb: 'Tareas de oficina repetitivas convertidas en programas que corren sin ayuda.' },
        { code: 'IAE / DATOS / 02', slug: 'data-analysis-mastery-course-college', title: 'Análisis de datos completo', blurb: 'De la hoja de cálculo a SQL y Python, con tableros que la gerencia entiende.' },
        { code: 'IAE / DATOS / 03', slug: 'mysql-database-complete-masterclass-college', title: 'Bases de datos con MySQL', blurb: 'Donde viven los datos que cualquier IA de la empresa va a usar.' }
      ] },
      { num: 'III', h3: 'Equipos técnicos', sub: 'Desarrollo e IA a fondo', courses: [
        { code: 'IAE / TECNICO / 01', slug: 'complete-generative-ai-masterclass-college', title: 'IA generativa por dentro', blurb: 'RAG, agentes y modelos de lenguaje, armados pieza por pieza y puestos a prueba.' },
        { code: 'IAE / TECNICO / 02', slug: 'ai-ml-masterclass-complete-college', title: 'Aprendizaje automático completo', blurb: 'Clasificadores, métricas y redes neuronales para casos propios.' },
        { code: 'IAE / TECNICO / 03', slug: 'git-github-advanced-version-control-masterclass-for-professionals', title: 'Git y GitHub avanzado', blurb: 'Control de versiones para equipos que trabajan con agentes de código.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Funcionamiento',
    h2: '¿Qué pasa en una clase de IA para una empresa?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Antes de la oficina', l: 'La primera hora del día, sin interrupciones.' },
      { time: 'Fin de jornada', l: 'Al cerrar pendientes, desde casa.' },
      { time: 'Cierre de mes', l: 'En individual, se reprograma en semanas de carga.' }
    ],
    cells: [
      { h3: 'Casos de su sector', p: 'Los ejemplos se adaptan a ventas, atención, finanzas u operaciones.' },
      { h3: 'Datos inventados primero', p: 'Se practica con datos ficticios antes de tocar información real.' },
      { h3: 'Una métrica por ejercicio', p: 'Nada se da por bueno sin un número que lo respalde.' },
      { h3: 'Revisión humana siempre', p: 'Cada resultado de una IA lo valida una persona antes de usarse.' },
      { h3: 'Mentor asignado', p: 'Alguien que conoce su rol y el proceso que quiere mejorar.' },
      { h3: 'Formatos', p: 'Grupos de quince a veinte adultos, o clases individuales.' }
    ]
  },

  projectsH2: 'Proyectos de nuestros estudiantes',
  projectsLede: 'Una muestra de lo que construyen nuestros estudiantes, de varias edades y países; la colección completa está en <a class="ag-inline-link" href="/student-labs">Student labs</a>.',
  reviewsLede: 'Reseñas que estudiantes y familias publicaron en Google, sin editar.',

  fees: {
    h2: 'Cuánto cuesta formar a una persona en IA',
    lede: 'Cada mensualidad se muestra en dólares estadounidenses y se cobra por persona, con tarjeta. La conversión la realiza el banco emisor de la tarjeta al momento del cobro. No hay matrícula ni licencias de software incluidas: las plataformas como Copilot Studio o Gemini Enterprise las contrata su empresa con cada proveedor.',
    free: ['Clase de prueba gratuita', 'Conversación sobre el rol y el proceso a mejorar', 'Sin tarjeta para reservar'],
    group: ['Grupo de quince a veinte adultos', 'Dos clases en vivo por semana', 'Mentor fijo', 'Mensual, sin contrato de permanencia'],
    one: ['Una persona y su mentor', 'Ejemplos con procesos de su empresa', 'Horario que se mueve con su agenda']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Curso de IA para empresas: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No, el idioma de todas las clases es el inglés, siempre en vivo y en línea. Para una empresa eso suma: las plataformas de IA y su documentación están en inglés. Además, hablar es lo que menos domina el país según el EF EPI 2025 (480 puntos en expresión oral), y el curso obliga a explicar en voz alta. Lima obtiene 555, nivel alto. El mentor adapta el ritmo a cada participante.' },
      { q: '¿El curso cumple con el DS 115-2025-PCM?', a: 'El reglamento no aprueba ni reconoce cursos privados. Su artículo 31.3 pide fomentar la educación interna de los colaboradores sobre los riesgos de la IA, y nuestro curso puede formar parte de esa formación. El cumplimiento de su empresa depende de su política interna y conviene revisarlo con un abogado.' },
      { q: '¿Ustedes dan asesoría legal sobre la ley de IA?', a: 'No. Citamos la Ley 31814 y su reglamento como contexto, tal como se publicaron en El Peruano. Para obligaciones concretas de su empresa, consulte a un abogado.' },
      { q: '¿Pueden capacitar a todo mi equipo a la vez?', a: 'Cada persona se inscribe en su curso y elige su hora. Si quiere formar a varias personas, escríbanos y le proponemos una combinación de clases grupales e individuales según los roles.' },
      { q: '¿Necesitan saber programar?', a: 'No para los cursos de gerencia y de datos sin programar. Los cursos de automatización con Python y de agentes de código empiezan desde lo básico, aunque avanzan más rápido con alguien que ya programa.' },
      { q: '¿Incluye licencias de Copilot Studio o Gemini Enterprise?', a: 'No. Enseñamos a construir agentes en esas plataformas; las licencias las contrata su empresa directamente con Microsoft o Google. Los dos cursos de agentes se dictan solo en formato individual.' },
      { q: '¿Desde qué edad son los cursos?', a: 'Desde los 18 años. Algunas herramientas que usamos, como Claude, exigen esa edad en sus términos.' },
      { q: '¿En qué horario son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Por ejemplo, las 7:00 a. m. en Lima equivalen a las 5:30 p. m. en la India.' },
      { q: '¿Recibimos certificado?', a: 'Cada participante recibe nuestro certificado de finalización. No es un documento oficial ni lo reconoce ninguna entidad del Estado peruano.' },
      { q: '¿Prometen un retorno de la inversión?', a: 'No. Enseñamos a medir: si un piloto de IA no mejora la métrica que su empresa definió, el curso le habrá enseñado a detectarlo a tiempo, y eso también tiene valor.' },
      { q: '¿Cómo se paga?', a: 'Por persona, cada mes, con tarjeta y en dólares estadounidenses; el banco convierte el monto. No cobramos matrícula.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Para seguir',
    h2: 'Lecturas para gerentes y equipos',
    lede: 'Material propio sobre IA en el trabajo; la mayoría está en inglés.',
    items: [
      { href: '/ai-and-machine-learning-for-working-professionals', label: 'AI and machine learning for working professionals', p: 'Aprendizaje automático para quien ya tiene una carrera en marcha.' },
      { href: '/ai-agents-explained', label: 'AI agents explained', p: 'Qué hace un agente que no hace un chatbot.' },
      { href: '/one-on-one-ai-classes', label: 'One-on-one AI classes', p: 'El formato individual, para gerentes con agenda cambiante.' },
      { href: '/for-business', label: 'Modern Age Coders for Business', p: 'Si necesita que construyamos la herramienta en lugar de aprender a hacerla.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'El mapa de nuestras clases en el país, de niños a profesionales.' },
      { href: '/ai-tools-age-guide', label: 'AI tool age guide', p: 'Edades mínimas de cada herramienta, citadas de sus términos.' }
    ]
  },

  start: {
    h2: 'Agende una clase de prueba para su empresa',
    lede: 'En la clase de prueba hablamos del proceso que quiere mejorar, revisamos juntos un ejemplo como el del piloto y le sugerimos qué curso corresponde a cada rol. Puede venir una persona o dos de la misma empresa.',
    readFirst: 'Antes de reservar puede revisar <a class="ag-inline-link" href="/ai-agents-explained">AI agents explained</a> o <a class="ag-inline-link" href="/one-on-one-ai-classes">One-on-one AI classes</a>, ambas en inglés.',
    note: 'Recuerde que el mentor enseña desde la India, en vivo y en inglés. Las consultas por WhatsApp sí las respondemos en castellano.',
    formNote: 'Sin costo y sin tarjeta.'
  },

  footer: {
    cols: [
      { h4: 'Cursos para empresas', links: [
        { href: '/courses/ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals', label: 'Copilot Studio' },
        { href: '/courses/build-ai-agents-with-google-gemini-enterprise-course', label: 'Gemini Enterprise' },
        { href: '/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', label: 'Codex y Claude Code' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Perú', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Clases en Perú' },
        { href: '/curso-de-inteligencia-artificial-en-ingles-peru', label: 'Curso de IA en inglés' },
        { href: '/for-business', label: 'Servicios para empresas' },
        { href: '/ai-tools-age-guide', label: 'Edades de las herramientas' }
      ] }
    ],
    bottomRight: 'Antes de escalar una IA, decida qué error le sale más caro'
  },

  personalityCss: `
.ag-root.ag-iae .ag-hero h1 { letter-spacing: -0.01em; max-width: 21ch; }
.ag-root.ag-iae .ag-capsule { border-left-width: 3px; border-radius: 0; }
.ag-root.ag-iae .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-iae .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-iae .ag-steps li { line-height: 1.6; }
`,

  dossier: {
    curriculumAuthority: 'DS 115-2025-PCM (El Peruano, 9 September 2025): art. 6 (desarrollador, implementador, sesgo algorítmico, emprendimiento innovador), 13.1, 17, 18.2, 18.3, 26.1, 27.1, 31.1 to 31.4, 32.1, 32.3 and the first final complementary provision (MYPE timetable); EF EPI 2025 Peru page; vendor terms in content/ai-tool-age-audit.json; tzdata. The role table, the maturity scale, the approximate deadline dates and the Python example are our own.',
    localProject: 'A pilot evaluation in Python on twelve invented complaints with model scores: at threshold 0.7 precision 0.75 and recall 0.60; at 0.5 precision 0.50 and recall 0.60; at 0.25 precision 0.50 and recall 1.00; accuracy at 0.5 is 0.58, the same as a model that never flags anything. Lesson family: precision, recall, decision thresholds and the accuracy trap when evaluating an AI pilot.',
    requiredMentions: ['umbral 0.25: marcados 10, aciertos 5, falsas alarmas 5, urgentes perdidos 0', 'exactitud si nunca marca nada: 0.58', 'Medir un piloto de IA con precisión, cobertura y umbral', 'Qué artículos del DS 115-2025-PCM alcanzan a una empresa privada y cuáles solo al riesgo alto', 'Plazos graduales para MYPE en el DS 115-2025-PCM, con un cálculo nuestro de la fecha', 'fomentar la educación y concientización interna de sus colaboradores sobre los riesgos asociados con el uso de la IA', 'integra o despliega un sistema basado en IA dentro de un proceso productivo u operativo', 'Qué aprende cada rol en un curso de IA para empresas', 'Antes de escalar una IA, decida qué error le sale más caro'],
    sources: [
      { claim: 'DS 115-2025-PCM: art. 6 definitions; 13.1 Plataforma Nacional de Talento Digital; 17 and 18.2 sandbox for MIPYME; 18.3 PRODUCE and CONCYTEC support; 26.1 data protection; 27.1 ethics; 31.1 to 31.4 private-sector obligations; 32.1 and 32.3 voluntary impact assessment kept three years; MYPE timetable two years (small, 150 to 1700 UIT) and three years (micro, up to 150 UIT).', url: 'https://cdn.www.gob.pe/uploads/document/file/8619777/7133522-decreto-supremo-n-115-2025-pcm.PDF?v=1757422328' },
      { claim: 'Regulation page on gob.pe (publication of 9 September 2025).', url: 'https://www.gob.pe/institucion/pcm/normas-legales/7133522-115-2025-pcm' },
      { claim: 'EF EPI 2025 Peru: speaking 480, Lima 555.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Claude 18+.', url: 'https://www.anthropic.com/legal/consumer-terms' }
    ],
    rejectedClaims: [
      'That our course makes a company compliant with DS 115-2025-PCM or is recognised under it: refused; the page says the regulation recognises no private course and advises a lawyer.',
      'Legal advice on deadlines: refused; the approximate dates are labelled our own calculation, not an interpretation.',
      'Return-on-investment, productivity or job promises: refused; the page promises measurement, not results.',
      'Bundled Copilot Studio or Gemini Enterprise licences, corporate packages or invented team discounts: refused; licences are bought from Microsoft or Google, and team training is quoted case by case without a typed figure.',
      'Repeating the high-risk use list and sector schedule already covered by the professionals agents page: avoided; this page uses the deployer definition, arts. 26, 27, 31, 32 and the MYPE timetable instead.'
    ]
  }
};
