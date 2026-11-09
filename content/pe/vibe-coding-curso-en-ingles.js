// SHIP: market (es subject door) | vibe coding en inglés: programar con IA sin copiar, por edades y reglas | tests first: assert expected outputs before trusting AI-generated code
'use strict';
// Vibe coding: curso en inglés (ag- Spanish-language door, Peru cluster row PE101, P4, hubGroup subjects).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only; no soles, no typed figure.
// Searches (KEYWORDS.md): "vibe coding que es", "vibe coding curso", "vibe coding en español", "programar con ia",
// "programar con ia curso", "crear apps con ia", PAA "¿Se puede programar con IA sin saber programar?", "¿Cursor o Claude?".
// Angle: a teen of 13 to 17 or an adult in Peru who wants to build with AI. Spine: what vibe coding is; the INEI 2026 gap
// between copying and pasting (92.7%) and writing a program (12.1%); why English helps (prompts, errors, docs; EF EPI);
// which AI tools each age may use by the vendors' own terms; one original lesson where tests catch a plausible AI answer;
// the rules outside class (OPI bans generative AI; MINEDU's own AI teacher course and rural pilot).
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/vibe-coding-curso-en-ingles/,
// fetched 2026-11-08 by the research pass and re-grepped 2026-11-09):
//  INEI, Boletín "Estadísticas de las TIC en los Hogares", II Trimestre 2026, N° 03 Setiembre 2026 (inei_tic_iit2026.txt),
//    Cuadro N° 4.1, población de 15 y más años: "el 92,7% utilizó las funciones de copiar y pegar información dentro de un
//    documento"; "Solo el 47,7% de la población descargó, instaló y configuró nuevo software, y apenas el 12,1% redactó
//    programas informáticos utilizando lenguajes de programación especializados."; series 2023 to 2026 for programming
//    "7,8 11,7 11,0 12,1"; copy and paste "86,9 90,2 92,1 92,7"; spreadsheet formulas "67,1 71,7 71,7 73,7"; install software
//    "42,3 46,5 46,7 47,7"; by sex: "Solo el 15,5% de los hombres redactó un programa informático utilizando un lenguaje de
//    programación, frente al 8,3% de las mujeres."; habilidades avanzadas "como escribir programas informáticos en lenguajes
//    de programación".
//  INEI same bulletin: "el 84,2% de la población de 6 y más años de edad en el país hizo uso de Internet".
//  UTEC, Reglamento OPI 2025 (FACTS 118, LaTeX artefacts kept): "Queda prohibido el uso de IA generativa para la resoluci´on de
//    problemas."; OPI home (FACTS 111): "abiertas gratuitamente a todos los estudiantes de secundaria del país".
//  MINEDU press notes: 87,000 teachers (FACTS 50) "más de 87 000 docentes ... se han inscrito en el curso “Inteligencia
//    artificial (IA) en la práctica docente”"; rural AI pilot (FACTS 51) "205 instituciones educativas del ámbito rural";
//    Hackathon 2025 (FACTS 48) "proyectos de IA y robótica".
//  Vendor age terms, quoted in content/ai-tool-age-audit.json (audited 2026-07-15): Anthropic consumer terms "You must be at
//    least 18 years old or the minimum age required to consent to use the Services in your location, whichever is higher.";
//    OpenAI terms "If you are under 18 you must have your parent or legal guardian's permission to use the Services.";
//    Replit terms "You must be an adult to use the Service."; GitHub terms: 13 floor.
//  EF EPI 2025, Peru page (MARKET 1.3, ef_peru.raw): Lima 555 (high); speaking 480; job function "it" score 522 "moderate".
//  Time: tzdata America/Lima UTC-5 with no DST; Asia/Kolkata UTC+5:30; India 10 h 30 min ahead (facts-geo/timezone.tsv).
// Our own example (v1_generado.py and v2_revisado.py in the src-pages folder), run with python3 -I, exact output:
//    v1: PASS (8, 0) -> (18, 30) expected (18, 30) / FAIL (7, 45) -> (17, 75) expected (18, 15) /
//        FAIL (15, 0) -> (25, 30) expected (1, 30)
//    v2: PASS for (8, 0), (7, 45), (15, 0) and (13, 30) -> (0, 0)
// Lesson family: write the tests first (expected outputs for ordinary and edge cases), then judge AI-generated code by them;
//    fix by converting to one unit (total minutes) and wrapping with % (24 * 60) and divmod.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'def peru_to_india(h, m):',
  '    return (h + 10, m + 30)',
  '',
  'tests = [((8, 0), (18, 30)), ((7, 45), (18, 15)), ((15, 0), (1, 30))]',
  'for (h, m), expected in tests:',
  '    got = peru_to_india(h, m)',
  "    print('PASS' if got == expected else 'FAIL', (h, m), '->', got, 'expected', expected)"
].join('\n');

const V1_OUT = [
  'PASS (8, 0) -> (18, 30) expected (18, 30)',
  'FAIL (7, 45) -> (17, 75) expected (18, 15)',
  'FAIL (15, 0) -> (25, 30) expected (1, 30)'
].join('\n');

const V2 = [
  'def peru_to_india(h, m):',
  '    total = (h * 60 + m + 10 * 60 + 30) % (24 * 60)',
  '    return divmod(total, 60)',
  '',
  'tests = [((8, 0), (18, 30)), ((7, 45), (18, 15)), ((15, 0), (1, 30)),',
  '         ((13, 30), (0, 0))]',
  'for (h, m), expected in tests:',
  '    got = peru_to_india(h, m)',
  "    print('PASS' if got == expected else 'FAIL', (h, m), '->', got, 'expected', expected)"
].join('\n');

const V2_OUT = [
  'PASS (8, 0) -> (18, 30) expected (18, 30)',
  'PASS (7, 45) -> (18, 15) expected (18, 15)',
  'PASS (15, 0) -> (1, 30) expected (1, 30)',
  'PASS (13, 30) -> (0, 0) expected (0, 0)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'subjects', label: 'Vibe coding en inglés' },
  slug: 'vibe-coding-curso-en-ingles',
  code: 'vci',
  accent: '#00493C',
  accentRationale: 'Vibe coding, curso en inglés: a deep terminal green #00493C, the colour of a code editor in dark mode, darker than the other Peru subject doors; contrast 8.44 on the paper #FBF8F2 (alloc.tsv) and above 4.5 on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Vibe coding: curso en inglés',
  title: 'Vibe coding: curso en vivo y en inglés para Perú',
  description: 'Curso de vibe coding en vivo y en inglés para adolescentes y adultos en Perú: programar con IA entendiendo cada línea, con pruebas, en grupo o individual.',
  ogDescription: 'Qué es el vibe coding, qué herramientas de IA permite cada edad, por qué conviene aprenderlo en inglés y una clase de ejemplo donde las pruebas atrapan el error de la IA.',
  twitterDescription: 'Vibe coding en vivo y en inglés desde Perú: describir, generar, probar y explicar el código, a cualquier hora.',
  pageName: 'Vibe coding: curso en inglés',
  webPageDescription: 'Guía para adolescentes, adultos y familias en Perú sobre el vibe coding o programación con inteligencia artificial, con clases en vivo y en inglés: qué es, la brecha entre copiar y programar según el INEI 2026, las edades mínimas que fijan los propios proveedores de IA, las reglas de la Olimpiada Peruana de Informática sobre IA generativa y una clase de ejemplo en Python escrita por nosotros.',
  courseDescription: 'Curso en vivo y en línea de vibe coding para adolescentes de 13 a 17 años y adultos en todo el Perú, dictado solo en inglés: describir lo que se quiere, generar código con un asistente permitido para la edad, escribir pruebas, leer cada línea y explicarla, en una clase grupal o en clases individuales, a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Vibe coding en inglés',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#que-es', label: 'Qué es' },
    { href: '#copiar', label: 'Copiar o programar' },
    { href: '#edades', label: 'Edades' },
    { href: '#ejemplo', label: 'Ejemplo' },
    { href: '#reglas', label: 'Reglas' }
  ],
  eyebrow: 'Perú &middot; Vibe coding &middot; Desde los 13 años',
  h1: 'Vibe coding: curso en vivo y en inglés',
  lede: 'Pedirle a una inteligencia artificial que escriba un programa ya no es noticia. Lo difícil es saber si ese programa hace lo que usted pidió. Este curso enseña a programar con IA como lo hace un desarrollador cuidadoso: describir bien, generar, probar, leer y explicar, todo en una sesión en vivo con un mentor que enseña en inglés.',
  secondaryCta: { href: '#ejemplo', label: 'Ver una clase de ejemplo' },
  wa: 'Hola Modern Age Coders, me interesa el curso de vibe coding en inglés desde Perú. ¿Puedo reservar una clase gratis?',
  heroNote: 'Clases en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; código generado, leído y explicado en inglés',
  spec: [
    ['Edades', 'Adolescentes de 13 a 17 años y adultos; niños de 8 a 12 en un curso aparte'],
    ['Herramientas', 'Asistentes de IA permitidos para cada edad, Python y la web'],
    ['Formato', 'Clase grupal de quince a veinte personas, o clases individuales'],
    ['Horario', 'Cualquier día y a cualquier hora, con flexibilidad'],
    ['Mentores', 'Desde la India, por videollamada y en inglés'],
    ['Primera clase', 'Gratis y sin tarjeta']
  ],
  capsuleQ: 'La respuesta corta',
  capsule: 'Vibe coding es programar describiendo en palabras lo que uno quiere y dejando que una IA proponga el código. En Modern Age Coders se enseña en vivo, por internet y en inglés a adolescentes de 13 a 17 años y a adultos de todo el Perú, con mentores desde la India. La regla del curso: ninguna línea se acepta sin pruebas y sin que el estudiante sepa explicarla. Se estudia en grupo o a solas con un mentor, en el horario que cada uno escoja, y la sesión de prueba no cuesta nada.',

  picks: {
    eyebrow: 'Cursos recomendados',
    h2: 'Tres cursos de vibe coding según la edad',
    lede: 'Uno para secundaria, uno para universitarios y quienes buscan su primer empleo en tecnología, y uno para profesionales que ya quieren trabajar con agentes de código.',
    items: [
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', code: 'VCI / 01', title: 'Vibe coding para adolescentes', alt: 'Imagen del curso de vibe coding para adolescentes', note: 'De 13 a 17 años. Python, páginas web y proyectos con IA, usando solo herramientas que sus propios términos permiten a esa edad.' },
      { course: 'vibe-coding-for-college-fullstack-ai-dsa-career-course', code: 'VCI / 02', title: 'Vibe coding para universitarios', alt: 'Imagen del curso de vibe coding para universitarios', note: 'Desde los 18 años. Aplicaciones completas con front end, back end y estructuras de datos, con la IA como copiloto y no como piloto.' },
      { course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', code: 'VCI / 03', title: 'Agentes de código para profesionales', alt: 'Imagen del curso de agentes de código Codex y Claude Code', note: 'Solo adultos. Encargar tareas largas a un agente, revisar sus cambios y decidir qué entra al proyecto y qué se descarta.' }
    ]
  },

  sections: [
    {
      id: 'que-es',
      eyebrow: 'Qué es',
      h2: '¿Qué es vibe coding y para qué sirve?',
      lede: 'Es una forma de programar en la que la persona describe la intención en lenguaje natural y un asistente de inteligencia artificial redacta el código. Sirve para llegar rápido a un primer prototipo; no sirve si nadie revisa lo que salió.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Describir', p: 'El estudiante escribe en inglés qué debe hacer el programa, con qué datos y qué resultado espera. Una descripción vaga produce código vago: por eso esta parte se practica tanto como la técnica.' },
          { h3: 'Generar', p: 'El asistente propone una función, una página o un archivo entero. Es un borrador, aunque luzca terminado, y casi siempre resuelve el caso fácil antes que el caso raro.' },
          { h3: 'Comprobar', p: 'Antes de aceptarlo, el estudiante corre pruebas que escribió él mismo, lee cada línea y explica en voz alta qué hace. Si no puede explicarla, la línea no entra.' }
        ] },
        { kind: 'p', mt: true, html: 'En los buscadores peruanos la pregunta más repetida no es cómo hacerlo, sino qué es. Las sugerencias de autocompletado para Perú que reunimos en noviembre de 2026 incluyen "vibe coding que es", "vibe coding que es y para que sirve", "vibe coding en español" y "programar con ia curso". Es un tema nuevo para mucha gente, y por eso conviene empezar por una definición honesta: vibe coding no es una herramienta concreta ni una marca, es una manera de trabajar.' },
        { kind: 'p', html: 'Esa manera de trabajar tiene una cara útil y otra peligrosa. La útil: alguien que sabe lo que quiere construir puede tener una versión que funcione en una tarde. La peligrosa: alguien que no entiende el código puede publicar algo que falla con el primer dato inesperado y no saber por qué. Nuestro curso se queda con la primera cara y entrena, clase tras clase, el hábito que evita la segunda.' },
        { kind: 'two', mt: true,
          leftH3: 'Para qué sí sirve',
          left: [
            'Para pasar de una idea a un prototipo que se puede mostrar: una calculadora de notas, una página para un emprendimiento familiar, un juego sencillo, un script que ordena archivos.',
            'Para aprender más rápido cuando se usa bien. Pedir a la IA que explique una línea, que proponga tres formas de resolver algo o que encuentre por qué falla una prueba acelera mucho el aprendizaje, siempre que el estudiante haga la última comprobación.'
          ],
          rightH3: 'Para qué no sirve',
          right: [
            'Para reemplazar el saber programar. Quien no distingue un bucle de una condición no puede juzgar si el asistente acertó; solo puede esperar que sí.',
            'Para entregar tareas del colegio o de la universidad como propias, ni para concursos que la prohíben. Más abajo explicamos la regla de la Olimpiada Peruana de Informática, que es muy clara.'
          ] }
      ]
    },
    {
      id: 'copiar',
      eyebrow: 'Copiar o programar',
      h2: '¿Se puede programar con IA sin saber programar?',
      lede: 'Se puede producir código, sí. Programar es otra cosa: decidir qué debe pasar, comprobar que pasa y arreglarlo cuando no pasa. El INEI muestra que en Perú esa segunda habilidad todavía es poco común, mientras que copiar y pegar es casi universal.',
      body: [
        { kind: 'table', numCols: [1, 2, 3, 4], caption: 'Población de 15 años a más que realizó cada actividad informática en Perú, II trimestre de cada año (porcentaje)', head: ['Actividad', '2023', '2024', '2025', '2026'], rows: [
          ['Copiar y pegar información dentro de un documento', '86,9', '90,2', '92,1', '92,7'],
          ['Usar fórmulas aritméticas básicas en una hoja de cálculo', '67,1', '71,7', '71,7', '73,7'],
          ['Encontrar, descargar, instalar y configurar software', '42,3', '46,5', '46,7', '47,7'],
          ['Redactar un programa informático con un lenguaje de programación', '7,8', '11,7', '11,0', '12,1']
        ] },
        { kind: 'source', html: 'Origen de los datos: boletín técnico N° 03 del INEI (setiembre de 2026) sobre TIC en los hogares, con base en la ENAHO del segundo trimestre, Cuadro N° 4.1 (cifras de 2026 preliminares). Actividades hechas con una computadora, laptop, tablet o similar. Selección de filas nuestra; el cuadro completo tiene diez actividades.' },
        { kind: 'p', mt: true, html: 'Según ese boletín del INEI, en el segundo trimestre de 2026 el 92,7 % de los peruanos de 15 años a más usó la función de copiar y pegar dentro de un documento, y apenas el 12,1 % redactó un programa con un lenguaje de programación. El propio INEI clasifica escribir programas como una habilidad avanzada. Entre una cifra y otra hay ochenta puntos de distancia, y ese espacio es exactamente donde el vibe coding mal usado deja a la gente: con la costumbre de pegar lo que salió de la pantalla, sin la costumbre de comprobarlo.' },
        { kind: 'p', html: 'El mismo cuadro trae una brecha que nos importa: el 15,5 % de los hombres y el 8,3 % de las mujeres de 15 años a más redactó un programa en el segundo trimestre de 2026. En nuestras clases no hay un perfil de estudiante ideal; lo que pedimos a todos, chicas y chicos, adultos de cualquier carrera, es la misma disciplina de pensar antes de aceptar.' },
        { kind: 'two', mt: true,
          leftH3: 'Lo que hace quien copia',
          left: [
            'Pide el código, lo pega, lo ejecuta una vez con el dato de ejemplo y, si no aparece un error rojo, lo da por bueno.',
            'Cuando algo falla días después, vuelve a pedir a la IA que lo arregle, sin saber qué cambió. Cada arreglo añade una capa que nadie entiende.'
          ],
          rightH3: 'Lo que hace quien programa con IA',
          right: [
            'Antes de pedir nada, escribe qué resultado espera para tres o cuatro casos, incluidos los raros. Esas son sus pruebas.',
            'Recibe el código, corre las pruebas, lee lo que falló y decide si corrige él mismo o si le explica a la IA, con precisión, qué caso está mal. Al final puede contar cada línea en sus propias palabras.'
          ] }
      ]
    },
    {
      id: 'ingles',
      eyebrow: 'En inglés',
      h2: '¿Por qué aprender vibe coding en inglés?',
      lede: 'Porque casi todo lo que rodea al código se escribe en inglés: las palabras del lenguaje, los mensajes de error, la documentación y buena parte de lo que responden los asistentes. Practicarlo en vivo con un mentor convierte esa dificultad en ventaja.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Las instrucciones', p: 'Una instrucción clara en inglés, con verbos precisos como <em>return</em>, <em>sort</em>, <em>validate</em> o <em>handle</em>, produce código más fácil de revisar. En clase se reescriben las instrucciones hasta que no admiten dos lecturas.' },
          { h3: 'Los errores', p: 'Un <code>TypeError</code> o un <code>KeyError</code> trae un mensaje en inglés que dice casi siempre qué pasó. Quien lo lee con calma lo resuelve en minutos; quien lo pega en el chat sin leerlo, tarda más y aprende menos.' },
          { h3: 'La conversación', p: 'Explicar en voz alta qué hace una función es la prueba final de que se entendió. Hacerlo en inglés frente al mentor es, además, práctica oral real, que es justo lo que más le falta al país según el EF EPI 2025.' }
        ] },
        { kind: 'p', mt: true, html: 'Con 555 puntos en el EF EPI 2025, Lima se ubica en la banda alta de dominio del inglés, mientras que la expresión oral es la habilidad más baja del país, con 480. La misma página de EF clasifica por función laboral a quienes rindieron su examen en Perú, y la función de tecnologías de la información obtiene 522 puntos, en la banda moderada. Dicho de otro modo: incluso entre quienes ya trabajan en tecnología hay espacio para ganar soltura en el inglés técnico, y un curso de programación dictado en inglés lo ejercita sin sumar otra actividad.' },
        { kind: 'p', html: 'No hace falta llegar con un inglés perfecto. Los mentores hablan despacio, escriben en el chat las palabras nuevas y aceptan que el estudiante mezcle castellano e inglés las primeras semanas. Lo que no se negocia es que el código y su explicación terminen en inglés, porque así es como se trabaja en cualquier equipo de software con clientes de otros países.' }
      ]
    },
    {
      id: 'edades',
      eyebrow: 'Edades y herramientas',
      h2: '¿Qué herramientas de IA puede usar cada edad?',
      lede: 'Las que sus propios términos de uso permiten. No es una opinión nuestra: cada proveedor fija una edad mínima, y nosotros la respetamos al pie de la letra al armar cada curso.',
      body: [
        { kind: 'table', numCols: [], caption: 'Edad mínima de algunos asistentes de IA según sus propios términos (lectura nuestra, revisada el 15 de julio de 2026)', head: ['Herramienta', 'Lo que dicen sus términos', 'Cómo la usamos'], rows: [
          ['Claude (Anthropic)', '18 años, o la edad de consentimiento local si es mayor', 'Solo en el curso de adultos'],
          ['ChatGPT (OpenAI)', '13 años; menores de 18 necesitan permiso de su madre, padre o tutor', 'Adolescentes, con permiso familiar'],
          ['GitHub Copilot', '13 años', 'Adolescentes y adultos'],
          ['Replit', 'Pide ser adulto; solo prevé permiso familiar para menores de 13', 'No la usamos con adolescentes'],
          ['Niños de 8 a 12', 'La mayoría de asistentes no les permite crear cuenta', 'Curso propio sin cuentas de IA']
        ] },
        { kind: 'source', html: 'Fuentes: términos de uso de Anthropic ("You must be at least 18 years old or the minimum age required to consent to use the Services in your location, whichever is higher."), de OpenAI ("If you are under 18 you must have your parent or legal guardian\'s permission to use the Services."), de Replit ("You must be an adult to use the Service.") y de GitHub, citados en nuestra auditoría de edades de herramientas de IA del 15 de julio de 2026. Los proveedores cambian sus términos; los revisamos antes de cada curso.' },
        { kind: 'two', mt: true,
          leftH3: 'Adolescentes de 13 a 17 años',
          left: [
            'Trabajan con asistentes que su edad permite y, cuando el proveedor lo exige, con el permiso de la familia. Claude no entra en sus clases, porque sus términos piden 18 años.',
            'La pregunta "¿Cursor o Claude?", que aparece entre las búsquedas peruanas, tiene para ellos una respuesta sencilla: lo que importa es aprender a revisar, y eso se aprende con cualquier asistente permitido. Para quien prefiere no crear cuentas, el mentor genera las propuestas en pantalla compartida y el estudiante las evalúa.'
          ],
          rightH3: 'Adultos y universitarios',
          right: [
            'Usan los asistentes y agentes de código que se usan en la industria, incluidos Claude Code y Codex en el curso para profesionales, con la misma regla de pruebas y explicación.',
            'Para quien estudia en la universidad, el curso cuida además la integridad académica: lo que se entrega en un curso universitario sigue las reglas de esa universidad, no las nuestras.'
          ] },
        { kind: 'p', mt: true, html: 'Si su hijo o hija tiene entre 8 y 12 años, el camino es otro: un curso de vibe coding para niños que no pide cuentas en ningún asistente y que trabaja sobre todo con bloques y proyectos guiados. Para esa edad, nuestra página de <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a> explica por dónde empezar, y la de <a class="ag-inline-link" href="/vacaciones-utiles-2027-inteligencia-artificial">vacaciones útiles 2027 de inteligencia artificial</a> propone un verano que respeta estas mismas reglas.' }
      ]
    },
    {
      id: 'ejemplo',
      tint: 'tint',
      eyebrow: 'Una clase de ejemplo',
      h2: '¿Cómo se ve una clase de vibe coding con pruebas?',
      lede: 'Este es un ejercicio real del curso, escrito por nosotros. El encargo: una función que convierta una hora de Perú a la hora de la India, el reloj de los mentores. Primero se escriben las pruebas; después se juzga el código.',
      body: [
        { kind: 'ol', items: [
          '<strong>Escribir lo esperado.</strong> Lima vive todo el año en UTC-5 y Delhi en UTC+5:30: el reloj del mentor siempre adelanta 10 horas y 30 minutos. El estudiante anota tres casos: las 8:00 de Perú son las 18:30 de la India; las 7:45 son las 18:15; las 15:00 son la 1:30 del día siguiente.',
          '<strong>Pedir el código.</strong> El estudiante lo describe en inglés: "Write a function that takes an hour and a minute in Peru time and returns the hour and minute in India time."',
          '<strong>Recibir una propuesta.</strong> Abajo está la versión 1, que escribimos nosotros imitando la respuesta rápida y plausible que suele aparecer: sumar 10 a la hora y 30 a los minutos.'
        ] },
        { kind: 'code', label: 'Versión 1: parece correcta', lang: 'Python', code: V1, note: 'Antes de ejecutar, el mentor pregunta en inglés: "Which of the three tests will pass?"' },
        { kind: 'code', label: 'Lo que imprime la versión 1', lang: 'Salida', code: V1_OUT, note: 'Es la salida literal que obtuvimos al correr este archivo con Python 3. Solo pasa el caso fácil.' },
        { kind: 'p', mt: true, html: 'La primera prueba pasa y por eso la versión 1 engaña: si el estudiante la hubiera probado solo con las 8:00, la habría aceptado. El segundo caso devuelve 17 horas y 75 minutos, una hora que no existe. El tercero devuelve las 25:30. Ninguno de los dos errores aparece como mensaje rojo: el programa corre feliz y responde mal. Esa es la lección central del vibe coding responsable.' },
        { kind: 'code', label: 'Versión 2: todo en minutos', lang: 'Python', code: V2, note: 'La idea: convertir todo a una sola unidad, sumar los 630 minutos de diferencia, dar la vuelta al día con <code>% (24 * 60)</code> y volver a horas y minutos con <code>divmod</code>.' },
        { kind: 'code', label: 'Lo que imprime la versión 2', lang: 'Salida', code: V2_OUT, note: 'Resultado tal cual de nuestra ejecución. Se añadió un cuarto caso a propósito: las 13:30 de Perú son la medianoche en la India.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Explicar el arreglo.</strong> El estudiante dice en una frase por qué funciona: "Minutes are easier to add, and the remainder wraps the day."',
          '<strong>Buscar el caso que falta.</strong> El mentor pregunta qué pasa si alguien escribe 24 como hora. La función no lo rechaza; decidir si debe hacerlo es parte del diseño, y la IA no puede decidirlo por el estudiante.',
          '<strong>Pedir a la IA con precisión.</strong> Solo ahora vuelve el asistente, con una instrucción más precisa que incluye las pruebas. Una instrucción con ejemplos concretos suele recibir una respuesta mucho más útil que una frase general.'
        ] },
        { kind: 'p', mt: true, html: 'La conversión no es un adorno: es la misma cuenta que hace cada familia peruana al reservar una clase con un mentor en la India. Y el hábito que entrena, escribir lo esperado antes de mirar el código, sirve igual para una función de diez líneas que para una aplicación entera. Le decimos a cada estudiante: la prueba la escribe usted, el código lo puede proponer cualquiera.' }
      ]
    },
    {
      id: 'reglas',
      eyebrow: 'Reglas fuera de clase',
      h2: '¿Se permite usar IA en concursos y en clase?',
      lede: 'Depende de quién pone las reglas, y conviene saberlo antes de usarla. En Perú hay ejemplos claros en los dos sentidos.',
      body: [
        { kind: 'two',
          leftH3: 'Donde está prohibida',
          left: [
            'La Olimpiada Peruana de Informática (OPI), que organiza la Universidad de Ingeniería y Tecnología (UTEC) y que está abierta gratuitamente a todos los estudiantes de secundaria del país, lo dice sin rodeos en su reglamento de 2025: "Queda prohibido el uso de IA generativa para la resolución de problemas."',
            'Para un adolescente que quiere competir, eso significa que el vibe coding no lo prepara para la OPI: lo que lo prepara es entender algoritmos y escribirlos solo. Por eso nuestro curso para adolescentes alterna proyectos con IA y ejercicios sin ella. No estamos vinculados a la UTEC ni a la OPI.'
          ],
          rightH3: 'Donde se está enseñando',
          right: [
            'El Ministerio de Educación informó que más de 87,000 docentes de todo el país se inscribieron en su curso gratuito "Inteligencia artificial (IA) en la práctica docente". También anunció el uso de IA para planificar los aprendizajes en 205 colegios rurales a partir de 2026.',
            'Y en su Hackathon 2025, la cuarta edición, el MINEDU distinguió proyectos de IA y de robótica hechos por escolares y profesores. La IA ya está en la escuela peruana; la pregunta es cómo se usa. No tenemos ninguna relación con el MINEDU.'
          ] },
        { kind: 'p', mt: true, html: 'Nuestra regla interna es una sola y vale para todas las edades: la IA puede proponer, pero quien firma el código es el estudiante, y firmar significa poder explicarlo y haberlo probado. Si un colegio, una universidad o un concurso prohíbe la IA en una tarea, esa regla manda sobre la nuestra, y el mentor la respeta.' },
        { kind: 'p', html: 'Para adolescentes que se preparan para la OPI, el camino que proponemos combina programación sin asistentes con resolución de problemas. Para familias que quieren entender el panorama completo del país, la página de <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">clases de programación e IA en Perú</a> resume los cursos por edad y las reglas que aplicamos.' }
      ]
    },
    {
      id: 'horario',
      eyebrow: 'Cómo empezar',
      h2: '¿Cómo empiezo un curso de vibe coding desde Perú?',
      lede: 'Con una clase gratis en la que el mentor le propone un encargo pequeño y observa cómo lo aborda. Así se decide el curso y el formato.',
      body: [
        { kind: 'ol', items: [
          '<strong>Reserve la clase gratis</strong> y escoja la hora tal como la marca su reloj en Perú; el sistema se la muestra al mentor convertida a su zona.',
          '<strong>Traiga una idea</strong>, aunque sea pequeña: una página para un negocio, una herramienta para estudiar, un juego. Si no tiene ninguna, el mentor propone una.',
          '<strong>Haga el primer ciclo completo</strong> en la clase: describir, recibir una propuesta, escribir dos pruebas y ver cuál falla.',
          '<strong>Reciba una recomendación</strong> de curso, nivel y formato. Si es menor de edad, la familia la recibe también, con las herramientas que se usarán y sus edades mínimas.',
          '<strong>Empiece</strong> en una clase grupal o en clases individuales, el día y la hora que le acomoden.'
        ] },
        { kind: 'p', mt: true, html: 'Para estudiantes de colegios bilingües de Lima, la página <a class="ag-inline-link" href="/english-medium-coding-classes-lima">English-medium coding classes in Lima</a> (en inglés) explica cómo encajan nuestras clases con un horario escolar en inglés. Y si quiere ver cómo enseñamos vibe coding en otros países, la página general <a class="ag-inline-link" href="/vibe-coding-classes">vibe coding classes</a> está en inglés.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progreso',
    h2: '¿Cómo se sabe si alguien ya programa con IA de verdad?',
    lede: 'Usamos cinco etapas propias. Pasar de una a otra no depende de cuánto código genera el estudiante, sino de cuánto puede comprobar y explicar.',
    table: { caption: 'Cinco etapas del vibe coding responsable (nuestras)', head: ['Etapa', 'Qué hace el estudiante', 'Señal de que la superó'], rows: [
      ['1. Pedir', 'describe en inglés lo que quiere y recibe código', 'su descripción incluye entradas, salidas y un ejemplo'],
      ['2. Ejecutar', 'corre lo que recibió y observa el resultado', 'nota cuando el resultado no coincide con lo pedido'],
      ['3. Probar', 'escribe pruebas antes de mirar el código', 'incluye al menos un caso raro, como la medianoche'],
      ['4. Leer', 'sigue el código línea por línea', 'explica cada línea en voz alta, sin mirar notas'],
      ['5. Decidir', 'acepta, corrige o rechaza la propuesta', 'puede defender su decisión frente al mentor']
    ] },
    left: { h3: 'Para adolescentes', ps: [
      'Casi todos llegan a la etapa 2 en la primera clase. La etapa 3 es la que cambia la forma de trabajar: escribir lo esperado antes de ver el código parece lento al principio y luego ahorra horas.',
      'Si una prueba falla, no es un fracaso: es la prueba haciendo su trabajo.'
    ] },
    right: { h3: 'Para adultos', ps: [
      'Quien ya programa suele saltar a la etapa 4, pero tiende a omitir la 3. Le pediremos pruebas igual.',
      'En la etapa 5 la pregunta deja de ser "¿funciona?" y pasa a ser "¿lo mantendría yo dentro de seis meses?".'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más para quien programa con IA',
    lede: 'Cada uno se dicta en vivo y en inglés, en grupo o a solas con el mentor. Los cursos que usan asistentes de IA respetan la edad mínima de cada herramienta.',
    bands: [
      { num: 'I', h3: 'La base sin atajos', sub: 'Programar a mano primero', courses: [
        { code: 'VCI / BASE / 01', slug: 'python-complete-masterclass-teens', title: 'Python para adolescentes', blurb: 'Variables, funciones, listas y archivos, escritos a mano, de 13 a 17 años.' },
        { code: 'VCI / BASE / 02', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python desde cero para adultos', blurb: 'De la primera línea a proyectos con módulos y pruebas, desde los 18 años.' },
        { code: 'VCI / BASE / 03', slug: 'git-github-version-control-course-for-college-students', title: 'Git y GitHub', blurb: 'Guardar cada cambio y deshacer lo que propuso mal un asistente.' }
      ] },
      { num: 'II', h3: 'Herramientas de IA', sub: 'Usarlas con criterio', courses: [
        { code: 'VCI / IA / 01', slug: 'teens-ai-tools-mastery-course', title: 'Herramientas de IA para adolescentes', blurb: 'Instrucciones claras y proyectos reales, desde los 13 años.' },
        { code: 'VCI / IA / 02', slug: 'ai-tools-mastery-complete-college', title: 'Herramientas de IA para adultos', blurb: 'Asistentes, automatización y flujos de trabajo, desde los 18 años.' },
        { code: 'VCI / IA / 03', slug: 'complete-generative-ai-masterclass-college', title: 'IA generativa por dentro', blurb: 'Modelos de lenguaje, RAG y agentes, para entender qué hay detrás.' }
      ] },
      { num: 'III', h3: 'Proyectos completos', sub: 'Del prototipo al producto', courses: [
        { code: 'VCI / PROY / 01', slug: 'full-stack-web-development-masterclass-college', title: 'Desarrollo web full stack', blurb: 'React, Node.js y despliegue, con o sin asistente al lado.' },
        { code: 'VCI / PROY / 02', slug: 'data-structures-algorithms-masterclass-college', title: 'Estructuras de datos y algoritmos', blurb: 'Lo que hace falta para juzgar si el código generado es eficiente.' },
        { code: 'VCI / PROY / 03', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Vibe coding para niños', blurb: 'Para hermanos menores de 8 a 12 años, sin cuentas de IA propias.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Qué incluye cada sesión en vivo?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Antes del trabajo', l: 'Para adultos que prefieren programar temprano, con la cabeza fresca.' },
      { time: 'Después del colegio', l: 'Para adolescentes, cuando ya terminaron las tareas del día.' },
      { time: 'Individual', l: 'El día y la hora que usted fije con su mentor, semana a semana.' }
    ],
    cells: [
      { h3: 'Pruebas antes que código', p: 'Cada encargo empieza por los resultados esperados, escritos por el estudiante.' },
      { h3: 'Pantalla compartida', p: 'El mentor ve cada propuesta de la IA junto con el estudiante y pregunta línea por línea.' },
      { h3: 'Herramientas por edad', p: 'Solo asistentes que los términos del proveedor permiten a esa edad.' },
      { h3: 'Explicación en inglés', p: 'Ninguna línea queda dentro sin que alguien la explique en voz alta.' },
      { h3: 'Proyecto propio', p: 'Cada tramo del curso termina con algo publicado o funcionando.' },
      { h3: 'Grupo o individual', p: 'De quince a veinte personas de edad parecida, o solo usted con el mentor.' }
    ]
  },

  projectsH2: 'Proyectos de nuestros estudiantes',
  projectsLede: 'Algunos trabajos de estudiantes de otros países que pasaron por el mismo método de pruebas y explicación. Hay más en <a class="ag-inline-link" href="/student-labs">Student labs</a> (en inglés).',
  reviewsLede: 'Opiniones publicadas en Google por estudiantes y familias, sin traducir, en el inglés original.',

  fees: {
    h2: 'Precios del curso de vibe coding para Perú',
    lede: 'Las mensualidades se muestran en dólares de Estados Unidos y se cobran con tarjeta; el banco que emitió la tarjeta convierte el cargo a la moneda de su cuenta según la cotización vigente al momento del cobro.',
    free: ['Una clase gratis con un mentor', 'Un primer encargo con pruebas, hecho en vivo', 'Sin tarjeta y sin compromiso'],
    group: ['De quince a veinte estudiantes de edad parecida', 'El mismo mentor durante todo el curso', 'Dos clases en vivo por semana', 'Pago mes a mes, sin permanencia'],
    one: ['Usted y un mentor, sin nadie más', 'Su proyecto, su ritmo y sus herramientas permitidas', 'Día y hora acordados con su mentor']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Vibe coding en inglés: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No: se dictan únicamente en inglés, siempre en vivo y por internet, y para muchos estudiantes eso es parte del atractivo: practican inglés técnico y oral mientras programan con IA. El mentor habla despacio y escribe en el chat las palabras nuevas. El EF EPI 2025 ubica a Lima en la banda alta de inglés, pero hablar es lo que menos domina el país, y una sesión conversada lo entrena.' },
      { q: '¿Qué es vibe coding y para qué sirve?', a: 'Es programar describiendo en palabras lo que uno quiere y dejando que un asistente de IA proponga el código. Sirve para llegar rápido a un prototipo. Para que sirva de verdad, alguien tiene que probar y entender lo que salió, y eso es lo que enseñamos.' },
      { q: '¿Se puede programar con IA sin saber programar?', a: 'Se puede obtener código, pero no se puede saber si es correcto. En nuestra clase de ejemplo, una función que suma 10 horas y 30 minutos pasa la prueba de las 8:00 y falla con las 7:45 y con las 15:00, sin mostrar ningún error. Solo quien escribió las pruebas lo nota.' },
      { q: '¿Desde qué edad se puede tomar el curso?', a: 'Desde los 13 años en el curso para adolescentes, con herramientas que sus términos permiten a esa edad y con permiso familiar cuando el proveedor lo pide. Los niños de 8 a 12 tienen un curso aparte sin cuentas de IA, y los adultos usan también agentes de código como Claude Code, que pide 18 años.' },
      { q: '¿Cursor o Claude: qué herramienta usan?', a: 'La que permita la edad del estudiante y convenga al proyecto. Claude solo se usa con adultos, porque sus términos piden 18 años. La herramienta cambia con los años; el método de describir, probar, leer y explicar se queda.' },
      { q: '¿Necesito saber inglés para empezar?', a: 'Basta un nivel con el que pueda seguir una explicación sencilla. Las primeras semanas se acepta mezclar castellano e inglés, y el mentor repite con otras palabras cuando hace falta.' },
      { q: '¿Puedo usar la IA en la Olimpiada Peruana de Informática?', a: 'No. El reglamento 2025 de la OPI, organizada por la UTEC, prohíbe la IA generativa para resolver los problemas. Para competir hay que saber programar sin asistente, y nuestro curso para adolescentes incluye ejercicios sin IA por esa razón. No estamos vinculados a la UTEC.' },
      { q: '¿En qué horario se dictan las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Entre Perú y la India hay 10 horas y 30 minutos de diferencia en cualquier mes, así que las 8:00 de Lima equivalen a las 18:30 del reloj del mentor.' },
      { q: '¿Con qué moneda se cobra el curso?', a: 'Con dólares estadounidenses, por tarjeta; su banco convierte el importe. Probar la primera sesión no exige dar ninguna tarjeta.' },
      { q: '¿El curso tiene validez oficial en Perú?', a: 'No. No estamos vinculados al MINEDU, a la SUNEDU ni a ninguna universidad, y el curso no otorga créditos ni grados. El único documento que damos al final es una constancia propia de que el curso se completó.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más páginas',
    h2: 'Para seguir leyendo',
    lede: 'Páginas relacionadas, la mayoría en inglés.',
    items: [
      { href: '/vibe-coding-for-teens', label: 'Vibe coding for teens', p: 'El método completo para secundaria, con proyectos por semana.' },
      { href: '/ai-tools-age-guide', label: 'AI tool age guide', p: 'Edades mínimas de un centenar largo de herramientas, citadas de sus dueños.' },
      { href: '/ai-agents-course', label: 'AI agents course', p: 'Qué es un agente de IA y cómo se construye uno con criterio.' },
      { href: '/real-coding-classes', label: 'Real coding classes', p: 'Por qué enseñamos a escribir código y no solo a usar plantillas.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Qué pasa, paso a paso, en una sesión con mentor.' },
      { href: '/courses', label: 'All courses', p: 'El catálogo completo, para todas las edades.' }
    ]
  },

  start: {
    h2: 'Reserve una clase gratis de vibe coding',
    lede: 'En la primera clase usted hace un ciclo completo con el mentor: describe un encargo pequeño en inglés, recibe una propuesta, escribe dos pruebas y ve cuál falla. Con eso le recomendamos curso y formato, sin compromiso.',
    readFirst: 'Si prefiere leer antes: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> describe nuestras clases y <a class="ag-inline-link" href="/ai-tools-age-guide">AI tool age guide</a> reúne las edades mínimas de cada herramienta (ambas en inglés).',
    note: 'Mentores en la India, sesiones en vivo por internet y siempre en inglés. Si le resulta más cómodo, escríbanos por WhatsApp en castellano.',
    formNote: 'Gratis, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Vibe coding', links: [
        { href: '/courses/vibe-coding-for-teens-python-web-ai-projects-course', label: 'Para adolescentes' },
        { href: '/courses/vibe-coding-for-college-fullstack-ai-dsa-career-course', label: 'Para universitarios' },
        { href: '/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', label: 'Agentes de código' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Antes de empezar', links: [
        { href: '/ai-tools-age-guide', label: 'Edades de las herramientas' },
        { href: '/vibe-coding-classes', label: 'Vibe coding classes' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: 'La prueba la escribe usted'
  },

  personalityCss: `
.ag-root.ag-vci .ag-hero h1 { letter-spacing: -0.015em; max-width: 20ch; }
.ag-root.ag-vci .ag-capsule { border-left-width: 4px; border-radius: 0; }
.ag-root.ag-vci .ag-section-head h2 { max-width: 26ch; }
.ag-root.ag-vci .ag-code-note code { font-weight: 600; }
.ag-root.ag-vci .ag-table td:first-child { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'INEI ENAHO TIC bulletin II trimestre 2026 (Cuadro 4.1, internet use); UTEC Reglamento OPI 2025 and OPI home; MINEDU press notes (87,000 teachers in the AI course, AI in 205 rural schools, Hackathon 2025); vendor terms of Anthropic, OpenAI, Replit and GitHub as quoted in content/ai-tool-age-audit.json (audited 15 July 2026); EF EPI 2025 Peru page; tzdata for time. Research read 8 November 2026, regrepped 9 November 2026. Example code, stages and the tools column are our own.',
    localProject: 'Tests before trust: a Python function that converts Peru time to India time (India is 10 h 30 min ahead all year). Version 1, written by us to imitate a quick AI answer, adds 10 to the hour and 30 to the minutes; run with python3 -I it passes (8, 0) and fails (7, 45) -> (17, 75) and (15, 0) -> (25, 30). Version 2 works in total minutes with % (24 * 60) and divmod and passes all four tests, including (13, 30) -> (0, 0). Lesson family: write expected outputs first, then judge generated code by them.',
    requiredMentions: ['FAIL (7, 45)', '(17, 75) expected (18, 15)', 'PASS (13, 30)', 'el 92,7 % de los peruanos de 15 años a más', 'apenas el 12,1 % redactó un programa', 'Queda prohibido el uso de IA generativa para la resolución de problemas.', 'más de 87,000 docentes', 'La prueba la escribe usted', 'la función de tecnologías de la información obtiene 522 puntos'],
    sources: [
      { claim: 'INEI Cuadro 4.1: 92.7% copied and pasted, 12.1% wrote a program (15+, II trimestre 2026); 2023 to 2025 series; 15.5% men and 8.3% women; 84.2% internet use.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'OPI 2025 rules ban generative AI for solving problems.', url: 'https://opi.utec.edu.pe/Reglamento_OPI_2025.pdf' },
      { claim: 'OPI is organised by UTEC and free for all secondary students.', url: 'https://opi.utec.edu.pe/' },
      { claim: 'More than 87,000 teachers enrolled in MINEDU\'s AI course.', url: 'https://www.gob.pe/institucion/minedu/noticias/1164507-minedu-capacita-a-mas-de-87-000-docentes-en-inteligencia-artificial-en-el-ambito-nacional' },
      { claim: 'AI for learning planning in 205 rural schools from 2026.', url: 'https://www.gob.pe/institucion/minedu/noticias/1304191-minedu-implementara-uso-de-inteligencia-artificial-para-fortalecer-aprendizajes-de-27-000-estudiantes-del-ambito-rural' },
      { claim: 'Hackathon 2025 rewarded AI and robotics projects.', url: 'https://www.gob.pe/institucion/minedu/noticias/1220955-minedu-premia-el-talento-estudiantil-y-docente-por-innovar-con-inteligencia-artificial-y-robotica-en-hackathon-2025' },
      { claim: 'Claude minimum age 18.', url: 'https://www.anthropic.com/legal/consumer-terms' },
      { claim: 'ChatGPT: under 18 needs parent or guardian permission.', url: 'https://openai.com/policies/row-terms-of-use/' },
      { claim: 'Replit: must be an adult.', url: 'https://replit.com/terms-of-service' },
      { claim: 'EF EPI 2025: Lima 555, speaking 480, IT job function 522.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 with no DST; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Spanish-language teaching: refused; every class is live, online and in English only, said in the capsule and in an FAQ.',
      'Recommending Claude, Replit or any 18+ tool to under-18s: refused; the table follows the vendors\' own terms.',
      'Saying vibe coding prepares a student for the OPI: refused; the OPI bans generative AI, and the page says so.',
      'Dating or attributing the term "vibe coding" to a person: refused, no primary source fetched.',
      'Any MINEDU, UTEC, SUNEDU or university endorsement, or an official certificate: none held.',
      'Soles prices, competitor prices or any typed fee: refused; fees render from the template in USD.'
    ]
  }
};
