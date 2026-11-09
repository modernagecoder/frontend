// SHIP: market | Mejor curso de Python en Perú: filtros indispensables, preferencias, PCEP y OPI | all() as a must-have gate, then a tuple key in sort() to break ties
'use strict';
// Mejor curso de Python en Perú (ag- Spanish-language door, Peru cluster row PE145, P4 best, hubGroup guides).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md (section 3.9: superlative in title and meta only, plain keyword
// H1, a section that defines what "mejor" means with evidence, never rank or price a named competitor); writer brief
// docs/superpowers/plans/2026-11-09-pe-writer-brief.md. Owner 2026-11-09: "make sure all our classes are live online in
// english". Owner 2026-11-08: timing flexible, any time. Formal "usted" throughout. Fees render in USD from the template only.
// Searches (KEYWORDS.md sections 1 and 6, Python row): "curso de python con certificado", "curso de python desde cero",
// "clases de python peru", "curso de python uni"; questions "¿Para qué sirve un curso de Python?", "¿Curso de Python con
// certificado vale la pena?".
// Spine: "mejor" defined as two kinds of criteria: must-haves that filter (live with code review, code from week one, a
// current Python 3, an honest certificate, a real trial class) and preferences that only order what survives (group or one to
// one, pace, project themes, PCEP preparation); what a certificate can mean (ours versus the Python Institute's PCEP, and
// MINEDU's Fábrica de Programadores); what the OPI 2025 rules say about Python and generative AI (primary-source table); which
// Python version (PEP 745); who studies online (INEI); English for IT (EF EPI 2025); one original filter-then-sort program.
// No competitor is named, ranked or priced; "curso de python uni" is answered without naming any provider's course.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/mejor-curso-de-python-peru/, fetched by the
// research passes on 2026-11-08 and 2026-11-09 with curl, every quote grepped in the raw text):
//  OPI, Reglamento OPI 2025, UTEC (opi-reglamento-2025.txt; PDF text layer mangles accents): "La fecha de FASE 1 ser´a el d´ıa 18
//    de Mayo de 2025"; "Esta fase ser´a virtual."; "Se podr´a usar C++ o Python"; "Clasifican a la FASE 2 los primeros 30 alumnos
//    con puntaje mayor a cero."; "La fecha de la FASE 2 ser´a el s´abado 31 de Mayo de 2025"; "Esta fase ser´a presencial";
//    "Se podr´a usar solo C++."; "Los 10 a 15 primeros puestos de la FASE 2 ser´an seleccionados para participar en OII-2025.";
//    "Los 4 primeros puestos de la FASE 2 ser´an seleccionados para participar en IOI-2025."; "Queda prohibido el uso de IA
//    generativa para la resoluci´on de problemas."; "Tener como m´aximo 20 a˜nos de edad al d´ıa 1 de Julio de 2025"; platform
//    "OmegaUp".
//  MINEDU press note, Fábrica de Programadores, July 2025 (n-fabrica-prog.txt, FACTS 45 to 47): "beneficiará a 1000 escolares de
//    4.º y 5.º de secundaria de Lima Norte con formación en programación Python y certificación internacional"; "seleccionados
//    mediante una prueba de lógica"; "Los participantes que concluyan ambas etapas podrán rendir el examen PCEP, con validez
//    global." (A politician is named in the note; not used.)
//  OpenEDG Python Institute, PCEP page (pcep.html.txt): "PCEP-30-03 Exam code Entry Certification level 35 Exam questions 50 min
//    Exam duration 70% Passing score 5 years Credential validity".
//  PEP 745, Python 3.14 release schedule (pep745.html.txt): "3.14.0 final: Tuesday, 2025-10-07"; "bugfix updates approximately
//    every two months for approximately 24 months"; security fixes "until October 2030".
//  INEI TIC II Trimestre 2026 (inei_tic_iit2026.txt): "el 97,3% de la población de 19 a 24 años utilizó Internet", "el de 12 a
//    18 años con un 92,5%"; "el 36,4% de los hogares del país disponía de al menos una computadora".
//  EF EPI 2025 Peru page (ef_peru.txt): job function "IT" 522; "Speaking score:" 480; Lima 555.
//  Brand facts (scripts/brand-facts.json): 10,000+ students worldwide, 4.9 from 547 Google reviews, since 2020; group 15 to 20.
//  Time: tzdata America/Lima -5:00, Asia/Kolkata +5:30.
// Our own program filtro.py (src-pages folder), four invented courses, run with python3 -I, exact output:
//    Solo por proyectos: Curso 1 / Pasan el filtro: ['Curso 2', 'Curso 4'] / Curso 4 4 proyectos, 48 horas en vivo /
//    Curso 2 4 proyectos, 32 horas en vivo
// Lesson family: must-have criteria as a gate with all() and a list comprehension, then a tuple key in sort() to break ties;
// max() without the gate picks a recorded course.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  '# Cuatro cursos de Python inventados: ninguno es un curso real',
  'cursos = [',
  "    {'nombre': 'Curso 1', 'en_vivo': False, 'revisan_codigo': False, 'proyectos': 9, 'horas_en_vivo': 0},",
  "    {'nombre': 'Curso 2', 'en_vivo': True,  'revisan_codigo': True,  'proyectos': 4, 'horas_en_vivo': 32},",
  "    {'nombre': 'Curso 3', 'en_vivo': True,  'revisan_codigo': False, 'proyectos': 6, 'horas_en_vivo': 40},",
  "    {'nombre': 'Curso 4', 'en_vivo': True,  'revisan_codigo': True,  'proyectos': 4, 'horas_en_vivo': 48},",
  ']',
  '',
  '# Sin filtro: gana el que promete mas proyectos',
  "print('Solo por proyectos:', max(cursos, key=lambda c: c['proyectos'])['nombre'])",
  '',
  '# Con filtro: lo indispensable se exige con all(), no se suma',
  "indispensable = ['en_vivo', 'revisan_codigo']",
  'pasan = [c for c in cursos if all(c[k] for k in indispensable)]',
  "print('Pasan el filtro:', [c['nombre'] for c in pasan])",
  '',
  '# Desempate: primero proyectos, luego horas en vivo (tupla, de mayor a menor)',
  "pasan.sort(key=lambda c: (c['proyectos'], c['horas_en_vivo']), reverse=True)",
  'for c in pasan:',
  "    print(c['nombre'], c['proyectos'], 'proyectos,', c['horas_en_vivo'], 'horas en vivo')"
].join('\n');

const OUT = [
  'Solo por proyectos: Curso 1',
  "Pasan el filtro: ['Curso 2', 'Curso 4']",
  'Curso 4 4 proyectos, 48 horas en vivo',
  'Curso 2 4 proyectos, 32 horas en vivo'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'guides', label: 'Cómo elegir un curso de Python' },
  slug: 'mejor-curso-de-python-peru',
  code: 'mep',
  accent: '#7E3029',
  accentRationale: 'Mejor curso de Python en Perú: a brick red #7E3029 (alloc.tsv), a buyer\'s-guide colour that reads as careful rather than loud; contrast 8.46 on the paper #FBF8F2 and 7.28 on the darkest paper tint, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Cómo elegir un curso de Python',
  title: 'Mejor curso de Python en Perú: cómo elegirlo, en vivo e inglés',
  description: '¿Cuál es el mejor curso de Python en Perú? Qué exigir sí o sí, qué depende de usted, qué certificado vale y qué dice la OPI. Clases en vivo, en inglés.',
  ogDescription: 'Cómo elegir un curso de Python en Perú sin rankings de marcas: filtros indispensables, preferencias personales, PCEP, la Olimpiada Peruana de Informática y la versión de Python que conviene aprender.',
  twitterDescription: 'Guía para elegir un curso de Python en Perú, con un programa que filtra y ordena opciones. Clases en vivo y en inglés, en grupo o individual.',
  pageName: 'Cómo elegir un curso de Python en Perú',
  webPageDescription: 'Guía para adolescentes, universitarios y adultos en Perú que comparan cursos de Python: qué condiciones descartan un curso, qué preferencias ordenan los que quedan, qué significa "con certificado", qué permiten las reglas de la Olimpiada Peruana de Informática de 2025, qué versión de Python enseñar en 2026 y un programa que aplica un filtro y un desempate.',
  courseDescription: 'Cursos de Python en vivo y en línea para adolescentes desde los 13 años, universitarios y adultos en todo el Perú, dictados solo en inglés por mentores desde la India: desde cero hasta proyectos propios y preparación para el examen PCEP del Python Institute, en grupo de quince a veinte personas o en clases individuales, a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Elegir un curso de Python',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#filtros', label: 'Indispensable' },
    { href: '#preferencias', label: 'Preferencias' },
    { href: '#certificado', label: 'Certificado' },
    { href: '#olimpiada', label: 'OPI' },
    { href: '#filtro', label: 'Ejemplo' }
  ],
  eyebrow: 'Perú &middot; Python &middot; Desde los 13 años y adultos',
  h1: 'Curso de Python en Perú: cómo elegir uno',
  lede: 'Un curso de Python se elige en dos pasos. Primero se descarta todo lo que no cumple lo indispensable, por atractivo que parezca. Después, entre lo que queda, se ordena según lo que a usted le importa. Saltarse el primer paso es la forma más común de pagar por un curso que no enseña.',
  secondaryCta: { href: '#filtros', label: 'Ver lo indispensable' },
  wa: 'Hola Modern Age Coders, estoy comparando cursos de Python desde Perú. ¿Puedo reservar una clase de prueba gratuita?',
  heroNote: 'Clases en vivo desde 2020 &middot; más de 10,000 estudiantes en varios países &middot; 4.9 en 547 reseñas de Google',
  spec: [
    ['Para quién', 'Adolescentes desde 13 años, universitarios y adultos'],
    ['Punto de partida', 'Desde cero o con algo de experiencia'],
    ['Formato', 'En vivo, con revisión de su código'],
    ['Tamaño', 'Grupo de quince a veinte, o individual'],
    ['Examen externo', 'Preparación para el PCEP, si usted lo quiere'],
    ['Primer paso', 'Clase de prueba gratuita']
  ],
  capsuleQ: 'Respuesta breve',
  capsule: 'El curso de Python que conviene elegir en Perú es el que primero pasa cinco filtros (clases en vivo con revisión de su código, código escrito desde la primera semana, Python 3 actual, un certificado que dice lo que es y una clase de prueba real) y después encaja con su ritmo, su edad y su meta. Modern Age Coders dicta Python en vivo, en línea y en inglés a adolescentes desde los 13 años, universitarios y adultos, en grupo o individual, a la hora que usted elija.',

  picks: {
    eyebrow: 'Cursos de Python',
    h2: 'Tres cursos de Python según su punto de partida',
    lede: 'Uno para escolares de secundaria, uno para adultos y universitarios que empiezan desde cero y uno para quien quiere rendir el examen PCEP.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'MEP / 01', title: 'Python para adolescentes', alt: 'Imagen del curso completo de Python para adolescentes', note: 'De 13 a 18 años, sin experiencia. Se avanza de las variables a programas con archivos y datos, con un proyecto al cierre de cada tramo.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'MEP / 02', title: 'Python de cero a avanzado', alt: 'Imagen del curso de Python de cero a avanzado para adultos', note: 'Para mayores de 18. Pensado para quien nunca programó y quiere llegar a escribir herramientas propias para el trabajo o la universidad.' },
      { course: 'pcep-pcap-python-certification-course', code: 'MEP / 03', title: 'Preparación PCEP y PCAP', alt: 'Imagen del curso de preparación para las certificaciones PCEP y PCAP de Python', note: 'Para quien quiere un examen externo. Prepara los temas del PCEP y luego del PCAP; el examen lo rinde usted ante el Python Institute.' }
    ]
  },

  sections: [
    {
      id: 'que-significa',
      eyebrow: 'Qué significa',
      h2: '¿Cuál es el mejor curso de Python en Perú?',
      lede: 'No hay uno solo, porque un escolar de 4.° de secundaria, un estudiante de ingeniería y una contadora de 45 años buscan cosas distintas. Lo que sí hay es un método que sirve para los tres.',
      body: [
        { kind: 'p', html: 'Para nosotros, "mejor" tiene dos partes. La primera son condiciones que no se negocian: si un curso no las cumple, se descarta, aunque tenga más proyectos, más horas o un diploma más vistoso. La segunda son preferencias: cosas que importan distinto a cada persona y que solo sirven para ordenar los cursos que sobrevivieron al filtro.' },
        { kind: 'three', cells: [
          { h3: 'Filtros', p: 'Cinco condiciones que un curso serio debe cumplir siempre. Se comprueban con preguntas concretas y con una clase de prueba.' },
          { h3: 'Preferencias', p: 'Grupo o individual, velocidad, temas de los proyectos, examen externo. Aquí no hay respuestas correctas, solo la suya.' },
          { h3: 'Evidencia', p: 'En cada punto decimos qué hacemos nosotros y dónde se puede verificar. No publicamos rankings de otras academias ni sus precios.' }
        ] },
        { kind: 'p', mt: true, html: 'Muchas listas de "los mejores cursos" suman todo en un solo puntaje. El problema de sumar es que un curso grabado con muchos proyectos puede terminar arriba de uno en vivo con menos proyectos, y para aprender a programar la clase en vivo pesa más que cualquier lista de proyectos. Más abajo hay un programa de Python que muestra exactamente ese error y cómo evitarlo.' }
      ]
    },
    {
      id: 'filtros',
      eyebrow: 'Indispensable',
      h2: '¿Qué debe tener sí o sí un buen curso de Python?',
      lede: 'Cinco cosas. Si falta una, el curso queda fuera, sin importar lo que ofrezca en lo demás.',
      body: [
        { kind: 'ol', items: [
          '<strong>Clases en vivo con alguien que lee su código.</strong> Python se aprende equivocándose, y un error que nadie revisa se convierte en costumbre. Pregunte quién corrige y cuándo. Nosotros: cada clase es en vivo por videollamada, usted comparte su pantalla y el mentor revisa su código con usted.',
          '<strong>Código escrito por usted desde la primera semana.</strong> Si el primer mes es teoría y diapositivas, desconfíe. Nosotros: en la primera clase usted ya escribe y ejecuta un programa pequeño.',
          '<strong>Python 3 en una versión vigente.</strong> Python 2 dejó de recibir soporte hace años y todavía aparece en materiales viejos. Pregunte qué versión instalan. Nosotros: trabajamos con Python 3 actual, y explicamos más abajo qué significa "actual" con el calendario oficial.',
          '<strong>Un certificado que dice lo que es.</strong> Un certificado de finalización acredita que usted terminó un curso; no es un título ni una certificación internacional. Nosotros: entregamos nuestro certificado de finalización, sin presentarlo como oficial, y preparamos para el PCEP para quien quiere un examen externo.',
          '<strong>Una clase de prueba que sea clase.</strong> Debe tener código, preguntas y un mentor, no solo una presentación comercial. Nosotros: la primera clase es gratuita, en vivo y sin tarjeta.'
        ] },
        { kind: 'p', mt: true, html: 'Hay una sexta condición que no figura en la lista porque depende de usted: que pueda seguir la clase en inglés. Nuestros cursos se dictan en inglés, y lo decimos antes de cualquier pago. La sección sobre el idioma, más abajo, le ayuda a decidir.' }
      ]
    },
    {
      id: 'preferencias',
      eyebrow: 'Preferencias',
      h2: '¿Qué depende de cada persona al elegir un curso de Python?',
      lede: 'Una vez aplicados los filtros, quedan pocas opciones. Entre ellas, decida con estas cuatro preguntas.',
      body: [
        { kind: 'two',
          leftH3: 'Ritmo y formato',
          left: [
            '<strong>¿Grupo o individual?</strong> En grupo de quince a veinte personas usted aprende también de las preguntas de otros, con un costo menor. En clases individuales el temario y la hora se mueven con usted, lo que conviene a quien trabaja con horarios cambiantes.',
            '<strong>¿Qué tan rápido?</strong> Un escolar con vacaciones puede avanzar más rápido que un adulto con jornada completa. Pida que le digan cuántas horas en vivo tiene el curso y cuántas horas de práctica esperan fuera de clase.'
          ],
          rightH3: 'Meta y temas',
          right: [
            '<strong>¿Para qué lo quiere?</strong> Para la universidad, para automatizar tareas del trabajo, para análisis de datos o para competir en olimpiadas. Cada meta pide proyectos distintos.',
            '<strong>¿Quiere un examen externo?</strong> Si sí, el curso debe cubrir los temas del examen que usted elija. Si no, no pague por una preparación que no va a usar.'
          ] },
        { kind: 'p', mt: true, html: 'Para escolares de 13 a 17 años hay un detalle más: la herramienta. Muchos cursos usan asistentes de IA para programar, y varios no admiten menores según sus propias condiciones. Lo explicamos en nuestra página de <a class="ag-inline-link" href="/curso-de-ia-para-adolescentes-peru">curso de IA para adolescentes</a>, y la lista completa de edades está en la <a class="ag-inline-link" href="/ai-tools-age-guide">AI tool age guide</a>.' }
      ]
    },
    {
      id: 'certificado',
      eyebrow: 'Certificado',
      h2: '¿Vale la pena un curso de Python con certificado?',
      lede: 'Vale si usted sabe qué certificado recibe. Hay dos cosas muy distintas que se llaman igual: el certificado de finalización de una academia y una certificación por examen de una entidad externa.',
      body: [
        { kind: 'p', html: 'El Python Institute, de OpenEDG, ofrece el PCEP, su certificación de nivel inicial. Según su propia página, el examen con código PCEP-30-03 tiene 35 preguntas, dura 50 minutos, se aprueba con 70% y la credencial vale cinco años. Lo rinde usted directamente ante esa entidad; ninguna academia lo "entrega".' },
        { kind: 'p', html: 'El PCEP ya es conocido en el sistema escolar peruano. En julio de 2025 el MINEDU presentó la estrategia Fábrica de Programadores, que en su primera etapa beneficiaría a 1000 escolares de 4.° y 5.° de secundaria de Lima Norte con formación en Python, seleccionados mediante una prueba de lógica. La nota del ministerio dice que quienes completen las dos etapas "podrán rendir el examen PCEP, con validez global". No tenemos relación con ese programa; lo citamos porque muestra qué examen eligió el Estado como referencia.' },
        { kind: 'p', html: 'Nuestra posición es simple. Al terminar un curso, usted recibe nuestro certificado de finalización, que no es oficial ni lo reconoce ninguna entidad del Estado. Si quiere una prueba externa, nuestro curso de preparación cubre los temas del PCEP y le ayuda a decidir cuándo está listo para rendirlo. Y en cualquier caso, lo que más pesa ante una universidad o un empleador es el código que usted puede mostrar y explicar.' }
      ]
    },
    {
      id: 'olimpiada',
      eyebrow: 'Olimpiada',
      h2: '¿Sirve Python para la Olimpiada Peruana de Informática?',
      lede: 'Para la primera fase, sí; para la final, no. El reglamento de 2025 de la OPI, organizada por la UTEC, permite Python solo en la fase virtual y exige C++ en la fase presencial.',
      body: [
        { kind: 'table', numCols: [], caption: 'Reglas de la Olimpiada Peruana de Informática 2025 que importan a quien aprende Python', head: ['Regla', 'Fase 1', 'Fase 2'], rows: [
          ['Fecha', '18 de mayo de 2025', 'Sábado 31 de mayo de 2025'],
          ['Modalidad', 'Virtual', 'Presencial, en la UTEC'],
          ['Lenguajes permitidos', 'C++ o Python', 'Solo C++'],
          ['Quién pasa', 'Los primeros 30 con puntaje mayor a cero van a la Fase 2', 'Los 4 primeros van a la IOI 2025; los primeros 10 a 15, a la OII 2025'],
          ['IA generativa', 'Prohibida para resolver problemas', 'Prohibida para resolver problemas'],
          ['Edad', 'Como máximo 20 años al 1 de julio de 2025', 'La misma regla']
        ] },
        { kind: 'source', html: 'Fuente: Universidad de Ingeniería y Tecnología (UTEC), Reglamento OPI 2025, publicado en opi.utec.edu.pe. Ambas fases se realizan en la plataforma OmegaUp. Modern Age Coders es ajeno a la UTEC y a la OPI; las reglas de cada año pueden cambiar, consulte siempre la versión vigente del organizador.' },
        { kind: 'p', mt: true, html: 'Dos lecturas útiles. La primera: Python es una buena puerta de entrada, pero quien aspira a la final necesita pasar a C++, y por eso en nuestro catálogo hay un curso de C++ para adolescentes y otro de programación competitiva. La segunda: la regla "Queda prohibido el uso de IA generativa para la resolución de problemas" confirma algo que repetimos en clase. Un curso que le enseña a pedirle el código a un asistente no lo prepara para ninguna prueba seria; uno que le enseña a razonar, sí.' }
      ]
    },
    {
      id: 'version',
      eyebrow: 'Versión',
      h2: '¿Qué versión de Python debe enseñar un curso en 2026?',
      lede: 'Una de Python 3 que siga recibiendo correcciones. El calendario oficial de cada versión está publicado en un documento de la propia comunidad de Python, llamado PEP.',
      body: [
        { kind: 'p', html: 'Según la PEP 745, la versión 3.14.0 final salió el martes 7 de octubre de 2025. Esa misma página dice que recibirá correcciones de errores aproximadamente cada dos meses durante unos 24 meses, y luego solo arreglos de seguridad hasta octubre de 2030. Un curso que en 2026 instala una versión reciente de Python 3 está bien; uno que todavía enseña Python 2 está desactualizado.' },
        { kind: 'p', html: 'Para un principiante las diferencias entre versiones recientes de Python 3 casi no se notan. Lo que sí se nota es aprender con mensajes de error claros y con la documentación al día, ambos en inglés. Es una razón más para estudiar en ese idioma desde el principio. Qué contiene semana a semana nuestro propio curso lo detallamos en <a class="ag-inline-link" href="/curso-de-python-en-ingles-peru">curso de Python en inglés</a>.' }
      ]
    },
    {
      id: 'filtro',
      tint: 'tint',
      eyebrow: 'Ejemplo',
      h2: '¿Cómo se ve la elección de un curso escrita en Python?',
      lede: 'Así, en veinte líneas. Los cuatro cursos son inventados por nosotros y no representan a ninguna academia. El programa muestra por qué sumar puntos no basta.',
      body: [
        { kind: 'code', label: 'Primero el filtro, después el orden', lang: 'Python', code: PY, note: 'Cada curso es un diccionario. <code>all()</code> devuelve <code>True</code> solo si todas las condiciones indispensables se cumplen; la lista por comprensión deja pasar únicamente esos cursos.' },
        { kind: 'code', label: 'Resultado', lang: 'Salida', code: OUT, note: 'Esta es la salida exacta que imprimió Python 3 cuando lo ejecutamos.' },
        { kind: 'ol', mt: true, items: [
          '<strong>El atajo engañoso.</strong> <code>max()</code> con la clave de proyectos elige el Curso 1, que promete nueve proyectos pero no es en vivo ni revisa código. Mirando un solo número, gana el peor candidato para aprender.',
          '<strong>El filtro.</strong> <code>all(c[k] for k in indispensable)</code> exige las dos condiciones a la vez. El Curso 1 cae por no ser en vivo y el Curso 3 por no revisar código, aunque tenga más proyectos que los que quedan.',
          '<strong>El desempate con tuplas.</strong> Los cursos 2 y 4 empatan en proyectos. La clave <code>(proyectos, horas_en_vivo)</code> compara primero el primer elemento y, si empatan, el segundo. Gana el Curso 4 por sus 48 horas en vivo.',
          '<strong>Su versión.</strong> Cambie la lista <code>indispensable</code> o el orden de la tupla según lo que a usted le importe y vuelva a ejecutar. Es la misma lógica de esta página convertida en código.'
        ] },
        { kind: 'p', mt: true, html: 'Este ejercicio aparece en las primeras semanas del curso porque junta tres ideas básicas, diccionarios, listas por comprensión y funciones como clave, en un problema que cualquiera entiende. Quien puede explicar con sus palabras por qué <code>max()</code> se equivocó ya está pensando como programador.' }
      ]
    },
    {
      id: 'ingles',
      eyebrow: 'Idioma',
      h2: '¿Conviene aprender Python en inglés viviendo en Perú?',
      lede: 'Sí, si puede seguir una conversación sencilla. Python, su documentación y sus mensajes de error están en inglés, y en el trabajo de tecnología el idioma pesa.',
      body: [
        { kind: 'p', html: 'El EF English Proficiency Index 2025 da a las personas que trabajan en tecnologías de la información en Perú un puntaje de 522, algo por encima del promedio nacional, y a Lima 555, en el nivel alto. La habilidad más baja del país es la expresión oral, con 480. Una clase en vivo en inglés, donde usted explica en voz alta qué hace su programa, entrena precisamente eso.' },
        { kind: 'p', html: 'Si en la clase de prueba le cuesta seguir al mentor, se lo diremos con franqueza. A veces la solución es empezar con clases individuales, donde el ritmo de la conversación lo marca usted.' }
      ]
    },
    {
      id: 'equipo',
      eyebrow: 'Equipo',
      h2: '¿Qué necesito para estudiar Python en línea desde Perú?',
      lede: 'Una computadora o laptop, internet estable y audífonos con micrófono. Con un celular no se programa con comodidad.',
      body: [
        { kind: 'p', html: 'Según el INEI, en el segundo trimestre de 2026 usaron internet el 97,3% de las personas de 19 a 24 años y el 92,5% de quienes tienen de 12 a 18. La conexión rara vez es el problema; la computadora sí puede serlo, porque apenas un 36,4% de los hogares peruanos cuenta con una o más. Si en su casa la comparten varias personas, reserve un horario de clase en que esté libre.' },
        { kind: 'p', html: 'Python corre bien en máquinas modestas. Para los primeros meses no hace falta comprar nada nuevo, y cuando un proyecto pide más potencia usamos cuadernos en la nube. Si busca un curso con un enfoque más amplio de inteligencia artificial, vea nuestro <a class="ag-inline-link" href="/curso-de-inteligencia-artificial-en-ingles-peru">curso de inteligencia artificial en inglés</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Avance',
    h2: '¿Cómo medir lo que ya aprendió de Python?',
    lede: 'Cinco escalones que usamos con los estudiantes. Son nuestros, no un examen oficial, y sirven para conversar con el mentor sobre el siguiente paso.',
    table: { caption: 'Cinco escalones de Python (escala nuestra)', head: ['Escalón', 'Tiempo habitual', 'Qué puede hacer'], rows: [
      ['1. Escribe', 'Primer mes', 'Programas cortos con variables, condiciones y bucles'],
      ['2. Organiza', 'Segundo y tercer mes', 'Funciones propias, listas y diccionarios'],
      ['3. Lee datos', 'Cuarto mes', 'Abre un archivo, lo procesa y maneja los errores'],
      ['4. Decide', 'Quinto y sexto mes', 'Elige la estructura adecuada y explica por qué'],
      ['5. Construye', 'Al final', 'Un proyecto propio con código que otro puede leer']
    ] },
    left: { h3: 'Si es escolar', ps: [
      'Practique diez minutos diarios en vez de dos horas el domingo. La constancia gana.',
      'Cuando algo falle, lea el mensaje de error completo antes de pedir ayuda.'
    ] },
    right: { h3: 'Si trabaja', ps: [
      'Elija un proyecto que le ahorre una tarea real de su semana. La motivación dura más.',
      'Guarde su código en GitHub con una explicación breve en inglés.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más alrededor de Python',
    lede: 'Para empezar antes, para competir o para aplicar Python en datos y trabajo. Todos en vivo y en inglés.',
    bands: [
      { num: 'I', h3: 'Empezar y competir', sub: 'De 9 a 18 años', courses: [
        { code: 'MEP / ESCOLAR / 01', slug: 'python-ai-kids-masterclass', title: 'Python e IA para niños', blurb: 'De 9 a 12 años: el primer contacto con el código escrito.' },
        { code: 'MEP / ESCOLAR / 02', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ para adolescentes', blurb: 'El lenguaje que exige la fase final de la OPI.' },
        { code: 'MEP / ESCOLAR / 03', slug: 'competitive-programming-for-teens-course', title: 'Programación competitiva', blurb: 'Problemas con tiempo límite, como en las olimpiadas.' }
      ] },
      { num: 'II', h3: 'Profundizar', sub: 'Algoritmos y datos', courses: [
        { code: 'MEP / PROFUNDO / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Estructuras de datos y algoritmos', blurb: 'Para adolescentes que ya programan y quieren pensar en eficiencia.' },
        { code: 'MEP / PROFUNDO / 02', slug: 'data-science-course-for-teens-python-data', title: 'Ciencia de datos para adolescentes', blurb: 'Tablas, gráficos y preguntas respondidas con datos reales.' },
        { code: 'MEP / PROFUNDO / 03', slug: 'pcap-python-certification-prep-course', title: 'Preparación PCAP', blurb: 'El paso siguiente al PCEP, para quien ya domina lo básico.' }
      ] },
      { num: 'III', h3: 'Aplicar', sub: 'Desde los 18 años', courses: [
        { code: 'MEP / APLICAR / 01', slug: 'python-ai-automation-masterclass-college', title: 'Automatización con Python e IA', blurb: 'Scripts que ahorran horas de trabajo repetitivo.' },
        { code: 'MEP / APLICAR / 02', slug: 'python-web-development-django-flask-course', title: 'Web con Django y Flask', blurb: 'Aplicaciones web completas escritas en Python.' },
        { code: 'MEP / APLICAR / 03', slug: 'data-science-complete-masterclass-college', title: 'Ciencia de datos completa', blurb: 'De la tabla sucia al informe que alguien puede usar.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Funcionamiento',
    h2: '¿Cómo son las clases de Python en vivo?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Antes del trabajo', l: 'Primeras horas de la mañana en Lima.' },
      { time: 'Entre clases', l: 'Una tarde libre en la universidad.' },
      { time: 'Fin del día', l: 'Después del colegio o de la oficina.' }
    ],
    cells: [
      { h3: 'Su pantalla, su código', p: 'El mentor ve lo que usted escribe y lo comenta en el momento.' },
      { h3: 'Predicción primero', p: 'Antes de ejecutar, usted dice qué espera que salga.' },
      { h3: 'Errores como pistas', p: 'Cada mensaje de error se lee completo y se interpreta.' },
      { h3: 'Asistentes con criterio', p: 'Solo se usan para revisar, nunca para entregar lo que no entiende.' },
      { h3: 'Mentor fijo', p: 'La misma persona sigue su avance de principio a fin.' },
      { h3: 'Proyecto por tramo', p: 'Cada etapa cierra con algo que usted puede mostrar.' }
    ]
  },

  projectsH2: 'Programas de nuestros estudiantes',
  projectsLede: 'Trabajos reales de estudiantes de distintas edades, publicados tal cual. Hay muchos más en <a class="ag-inline-link" href="/student-labs">Student labs</a> (página en inglés).',
  reviewsLede: 'Lo que escribieron en Google estudiantes y familias, sin traducir.',

  fees: {
    h2: '¿Cuánto cuesta nuestro curso de Python?',
    lede: 'Mostramos el monto en dólares estadounidenses, que es la moneda en que se cobra con tarjeta cada mes. El tipo de cambio lo pone su banco el día del cargo. No cobramos matrícula ni inscripción.',
    free: ['Primera clase en vivo sin costo', 'Ubicación según lo que ya sabe', 'Reserva sin tarjeta'],
    group: ['Quince a veinte estudiantes del mismo nivel', 'Mentor fijo', 'Revisión de código en clase', 'Sin permanencia mínima'],
    one: ['Usted y el mentor', 'Temario según su meta', 'La hora cambia con su semana']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Elegir un curso de Python: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No, se dictan en inglés, en vivo y por internet, con mentores desde la India. Es una ventaja: aprende Python en el idioma de su documentación y practica justo lo que más cuesta en el país: hablar, que en el EF EPI 2025 obtuvo 480 puntos frente a los 555 de Lima, ciudad de nivel alto. Para coordinar con nosotros puede escribirnos en castellano.' },
      { q: '¿Cuál es el mejor curso de Python en Perú?', a: 'El que pasa cinco filtros (en vivo con revisión de código, código desde la primera semana, Python 3 vigente, certificado honesto y clase de prueba real) y luego encaja con su meta y su ritmo. No publicamos un ranking de academias.' },
      { q: '¿Necesito saber programar para empezar?', a: 'No. Los cursos para adolescentes y adultos empiezan desde cero. Si ya sabe algo, la clase de prueba sirve para ubicarlo más adelante.' },
      { q: '¿El curso incluye el examen PCEP?', a: 'No incluye el examen. El PCEP lo rinde usted ante el Python Institute. Nuestro curso de preparación cubre sus temas y le ayuda a decidir cuándo rendirlo.' },
      { q: '¿Qué valor tiene su certificado?', a: 'Acredita que usted completó el curso con nosotros, y nada más. No lo emite una universidad, no lo reconocen el MINEDU ni SUNEDU, y no reemplaza una certificación por examen como el PCEP.' },
      { q: '¿Desde qué edad se puede estudiar Python?', a: 'Para escritura de código completa, desde los 13 años en nuestros cursos para adolescentes. Para niños de 9 a 12 hay un curso más lúdico de Python e IA.' },
      { q: '¿Python sirve para la Olimpiada Peruana de Informática?', a: 'En 2025, Python estaba permitido en la Fase 1 virtual, pero la Fase 2 presencial era solo en C++, según el reglamento de la UTEC. Revise siempre las reglas vigentes del organizador.' },
      { q: '¿Cuándo puedo tomar las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Un caso de conversión: 7:00 a. m. en Lima equivale a 5:30 p. m. del mismo día en la India.' },
      { q: '¿Puedo usar ChatGPT durante el curso?', a: 'Si es adulto, como herramienta de revisión, no para entregar código que no entiende. Si es menor de 18, solo herramientas que su edad permita y con permiso de su familia.' },
      { q: '¿Cómo se paga?', a: 'Con tarjeta, mes a mes, en dólares estadounidenses; su banco hace la conversión. Puede dejar el curso al terminar cualquier mes.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Para seguir',
    h2: 'Lecturas relacionadas',
    lede: 'Páginas nuestras en castellano y en inglés.',
    items: [
      { href: '/curso-de-inteligencia-artificial-en-ingles-peru', label: 'Curso de inteligencia artificial en inglés', p: 'El paso natural después de Python para quien quiere modelos y datos.' },
      { href: '/curso-de-ia-para-adolescentes-peru', label: 'Curso de IA para adolescentes', p: 'Inteligencia artificial para escolares, con herramientas permitidas para su edad.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Todas las páginas para el Perú en un lugar.' },
      { href: '/english-medium-coding-classes-lima', label: 'English-medium coding classes in Lima', p: 'Para familias de colegios bilingües limeños.' },
      { href: '/ai-tools-age-guide', label: 'AI tool age guide', p: 'Edad mínima de cada herramienta de IA, con la cita de la empresa.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Cómo se prepara y se dicta cada clase en vivo.' }
    ]
  },

  start: {
    h2: 'Ponga a prueba nuestro curso de Python, gratis',
    lede: 'Use la clase de prueba para comprobar los cinco filtros de esta página. Escribirá un programa corto con el mentor, que al final le dirá en qué curso y a qué ritmo le conviene empezar.',
    readFirst: 'Si quiere ver antes nuestro enfoque, lea <a class="ag-inline-link" href="/how-we-teach">How we teach</a>, en inglés.',
    note: 'Cada clase de Python ocurre en directo y en inglés, por videollamada con un mentor que enseña desde la India. Por WhatsApp le respondemos en castellano.',
    formNote: 'Sin pago ni tarjeta, y sin compromiso de inscripción.'
  },

  footer: {
    cols: [
      { h4: 'Cursos de Python', links: [
        { href: '/courses/python-complete-masterclass-teens', label: 'Python para adolescentes' },
        { href: '/courses/python-programming-masterclass-zero-to-advanced-college', label: 'Python desde cero' },
        { href: '/courses/pcep-pcap-python-certification-course', label: 'PCEP y PCAP' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Perú', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Clases en Perú' },
        { href: '/curso-de-inteligencia-artificial-en-ingles-peru', label: 'Curso de IA en inglés' },
        { href: '/curso-de-ia-para-adolescentes-peru', label: 'IA para adolescentes' },
        { href: '/ai-tools-age-guide', label: 'Edades de la IA' }
      ] }
    ],
    bottomRight: 'Lo indispensable se exige con all(); lo demás solo desempata'
  },

  personalityCss: `
.ag-root.ag-mep .ag-hero h1 { max-width: 19ch; letter-spacing: -0.01em; }
.ag-root.ag-mep .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-mep .ag-steps li { line-height: 1.6; }
.ag-root.ag-mep .ag-capsule { border-left-width: 3px; border-radius: 3px; }
.ag-root.ag-mep .ag-section-head h2 { max-width: 31ch; }
`,

  dossier: {
    curriculumAuthority: 'UTEC Reglamento OPI 2025 (phases, languages, generative AI ban, age limit); MINEDU press note on Fábrica de Programadores (July 2025); OpenEDG Python Institute PCEP page; PEP 745 (Python 3.14 schedule); INEI TIC bulletin II Trimestre 2026; EF EPI 2025 Peru page; tzdata. The filters, the preferences, the levels and the Python example are our own.',
    localProject: 'A course chooser in Python: four invented courses as dictionaries; max() by projects alone picks Curso 1, a recorded course with no code review; a gate with all() over the must-haves keeps Curso 2 and Curso 4; a tuple key (projects, live hours) in sort() breaks their tie, Curso 4 first with 48 live hours. Lesson family: must-haves are filters, preferences only order what survives.',
    requiredMentions: ["Pasan el filtro: ['Curso 2', 'Curso 4']", 'Primero el filtro, después el orden', 'Reglas de la Olimpiada Peruana de Informática 2025 que importan a quien aprende Python', 'Los primeros 30 con puntaje mayor a cero van a la Fase 2', 'Como máximo 20 años al 1 de julio de 2025', 'la versión 3.14.0 final salió el martes 7 de octubre de 2025', 'el examen con código PCEP-30-03 tiene 35 preguntas, dura 50 minutos, se aprueba con 70%', 'Cinco escalones de Python (escala nuestra)', 'Lo indispensable se exige con all(); lo demás solo desempata'],
    sources: [
      { claim: 'OPI 2025: Fase 1 on 18 May 2025, virtual, C++ or Python, top 30 advance; Fase 2 on 31 May 2025, in person at UTEC, C++ only; top 4 to IOI 2025, top 10 to 15 to OII 2025; generative AI banned; age limit 20 at 1 July 2025; OmegaUp.', url: 'https://opi.utec.edu.pe/Reglamento_OPI_2025.pdf' },
      { claim: 'Fábrica de Programadores: 1000 students of 4° and 5° secundaria in Lima Norte, Python, selected by a logic test, may sit the PCEP.', url: 'https://www.gob.pe/institucion/minedu/noticias/1214050-minedu-impulsa-iniciativa-fabrica-de-programadores-para-formar-a-escolares-con-certificacion-internacional-en-programacion' },
      { claim: 'PCEP-30-03: 35 questions, 50 minutes, 70% pass, 5-year validity.', url: 'https://pythoninstitute.org/pcep' },
      { claim: 'Python 3.14.0 final on 2025-10-07; bugfixes about every two months for about 24 months; security fixes until October 2030.', url: 'https://peps.python.org/pep-0745/' },
      { claim: 'INEI II Trimestre 2026: internet use 97.3% (19 to 24), 92.5% (12 to 18); 36.4% of homes with a computer.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'EF EPI 2025: IT job function 522, Lima 555, speaking 480.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' }
    ],
    rejectedClaims: [
      'A ranking of named Python courses (including any university course behind "curso de python uni") or a claim that ours is the best: refused.',
      'Any competitor price, a soles figure or a typed fee: refused; fees render from the template.',
      'That we award the PCEP or an official certificate: refused; the exam is the Python Institute\'s and our certificate is unofficial.',
      'Any connection with MINEDU\'s Fábrica de Programadores, UTEC or the OPI: refused; cited as context.',
      'OPI 2026 rules: not stated; the table quotes the 2025 rules and tells readers to check the current ones.'
    ]
  }
};
