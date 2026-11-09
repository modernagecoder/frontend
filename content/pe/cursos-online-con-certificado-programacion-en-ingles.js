// SHIP: market (es subject door) | curso de programación online con certificado: qué papel vale, PCEP y salida laboral | check digits: a weighted sum mod 11 catches one typo and a swap, but not two errors
'use strict';
// Cursos online con certificado de programación en inglés (ag- Spanish-language door, Peru cluster row PE155, hubGroup subjects).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only.
// Angle: the adult, university student or parent in Peru who types "curso de programacion online con certificado" or
// "cursos online con certificado y salida laboral" (KEYWORDS.md section 2, "con certificado" depth 310) and asks
// "¿curso de Python con certificado vale la pena?" (section 6).
// Spine: three kinds of paper (completion certificate, independent exam, academic degree) and what each proves; the PCEP
// exam from the Python Institute's own page; how MINEDU's Fábrica de Programadores uses the PCEP (context only, we are not
// connected); what "salida laboral" can honestly mean; how to check a certificate; one original Python lesson on check digits.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/cursos-online-con-certificado-programacion-en-ingles/):
//  Python Institute, PCEP page (pcep.html, https://pythoninstitute.org/pcep, fetched 2026-11): "PCEP-30-03" "Exam code";
//    "35" "Exam questions"; "50 min" "Exam duration"; "70%" "Passing score"; "5 years" "Credential validity"; "No prerequisites";
//    "designed for students, beginners, aspiring developers, and professionals taking their first steps in programming";
//    sections "17%" 6 questions, "23%" 8, "26%" 9, "20%" 7, "14%" 5; "The exam contains 35 questions across five weighted
//    sections"; menu items "Verify Credentials" and "Digital Badging"; "progressing to the PCAP™ certification".
//  MINEDU press note, 24 July 2025 (fabrica.txt; FACTS 45 to 47): "beneficiará a 1000 escolares de 4.º y 5.º de secundaria de
//    Lima Norte con formación en programación Python y certificación internacional"; "en alianza con Cisco Networking Academy";
//    "seleccionados mediante una prueba de lógica"; districts "Los Olivos, Rímac, San Martín de Porres, Comas, Carabayllo,
//    Puente Piedra, Santa Rosa y Ancón"; "un curso presencial de iniciación en la Universidad Nacional de Ingeniería (UNI) y una
//    formación especializada online dictada por la Universidad Privada del Norte (UPN)"; "podrán rendir el examen PCEP, con
//    validez global".
//  INEI, Estadísticas de las TIC en los Hogares, II Trimestre 2026 (inei_tic_iit2026.txt): "el 36,4% de los hogares del país
//    disponía de al menos una computadora. Este porcentaje alcanzó el 53,3% en Lima Metropolitana, el 41,3% en el resto urbano
//    y 8,9% en el área rural"; "el 97,3% de la población de 19 a 24 años utilizó Internet".
//  EF EPI 2025 Peru page (ef_peru.txt): "Reading score: 540", "Speaking score: 480", "Student : 482", Lima 555.
//  Time: tzdata America/Lima -5:00, Asia/Kolkata +5:30 (facts-geo/timezone.tsv).
// Our own example, run with python3 -I (digito.py in the src-pages folder; the code format and weights are invented by us and
// are not the format of any real certificate, ours included):
//    codigo emitido: 20260417-5 / 20260417-5 -> valido / 20260471-5 -> rechazado / 20250417-5 -> rechazado /
//    20260417-3 -> rechazado / error: se esperaban 8 cifras: 2026O417 / dos errores: 30270417-5 -> True
//    Hand check: 7*2+6*0+5*2+4*6+3*0+2*4+7*1+6*7 = 105; 105 % 11 = 6; 11 - 6 = 5.
// Lesson family: check digits (weighted sum modulo 11): validation, a single wrong digit, a swap of neighbours, a letter
// instead of a zero raising ValueError, and two errors that cancel out.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  'PESOS = [7, 6, 5, 4, 3, 2, 7, 6]',
  '',
  'def digito_control(numero):',
  '    if len(numero) != 8 or not numero.isdigit():',
  "        raise ValueError('se esperaban 8 cifras: ' + numero)",
  '    suma = 0',
  '    for peso, cifra in zip(PESOS, numero):',
  '        suma += peso * int(cifra)',
  '    resto = 11 - suma % 11',
  "    return {10: 'K', 11: '0'}.get(resto, str(resto))",
  '',
  'def es_valido(codigo):',
  "    numero, control = codigo.split('-')",
  '    return digito_control(numero) == control',
  '',
  "base = '20260417'",
  "codigo = base + '-' + digito_control(base)",
  "print('codigo emitido:', codigo)",
  '',
  "pruebas = [codigo, '20260471-' + codigo[-1], '20250417-' + codigo[-1], '20260417-3']",
  'for p in pruebas:',
  "    print(p, '->', 'valido' if es_valido(p) else 'rechazado')",
  '',
  'try:',
  "    es_valido('2026O417-' + codigo[-1])",
  'except ValueError as e:',
  "    print('error:', e)",
  '',
  "print('dos errores:', '30270417-5', '->', es_valido('30270417-5'))"
].join('\n');

const OUT = [
  'codigo emitido: 20260417-5',
  '20260417-5 -> valido',
  '20260471-5 -> rechazado',
  '20250417-5 -> rechazado',
  '20260417-3 -> rechazado',
  'error: se esperaban 8 cifras: 2026O417',
  'dos errores: 30270417-5'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'subjects', label: 'Cursos de programación con certificado' },
  slug: 'cursos-online-con-certificado-programacion-en-ingles',
  code: 'ccpi',
  accent: '#006567',
  accentRationale: 'Cursos con certificado: a deep sea teal #006567, the colour of a stamped seal kept sober, distinct from the pine green of the AI course page; contrast above 4.5 on the paper #FBF8F2 (alloc.tsv) and on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Cursos de programación online con certificado',
  title: 'Curso de programación online con certificado, en inglés',
  description: 'Curso de programación online con certificado, en vivo y en inglés desde Perú: qué prueba cada papel, el examen PCEP de Python y qué esperar en lo laboral.',
  ogDescription: 'Certificado de finalización, examen PCEP o título: qué prueba cada uno, cómo se verifica y qué puede esperar en lo laboral, con un ejemplo en Python de cómo se valida un código.',
  twitterDescription: 'Programación en vivo y en inglés con certificado de finalización y preparación para el PCEP de Python, desde cualquier ciudad del Perú.',
  pageName: 'Cursos online de programación con certificado, en inglés, para el Perú',
  webPageDescription: 'Guía para quien busca en el Perú un curso de programación online con certificado: la diferencia entre un certificado de finalización, una certificación por examen y un título, el examen PCEP según el Python Institute, cómo lo usa la Fábrica de Programadores del MINEDU, qué significa en la práctica la salida laboral y un ejemplo en Python sobre dígitos de control.',
  courseDescription: 'Cursos en vivo y en línea de programación para adultos, universitarios y escolares en todo el Perú, dictados solo en inglés por mentores desde la India, con certificado de finalización de Modern Age Coders y, en Python, preparación para el examen PCEP del Python Institute; en grupo o en clases individuales, a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Cursos con certificado',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#tipos', label: 'Tipos de certificado' },
    { href: '#pcep', label: 'Examen PCEP' },
    { href: '#laboral', label: 'Salida laboral' },
    { href: '#ejemplo', label: 'Ejemplo' },
    { href: '#verificar', label: 'Verificar' }
  ],
  eyebrow: 'Perú &middot; Programación con certificado &middot; Adultos, universitarios y escolares',
  h1: 'Curso de programación online con certificado, en vivo y en inglés',
  lede: 'Antes de pagar un curso por su certificado conviene preguntar quién firma ese papel y qué demuestra. Un certificado de finalización dice que usted terminó. Una certificación por examen dice que aprobó una prueba ajena al curso. Un título lo da una universidad. Aquí le explicamos los tres y le contamos con franqueza cuál le damos nosotros.',
  secondaryCta: { href: '#tipos', label: 'Comparar los tipos de certificado' },
  wa: 'Hola Modern Age Coders, escribo desde Perú. Me interesa un curso de programación online con certificado. ¿Puedo agendar una clase de prueba gratuita?',
  heroNote: 'Enseñamos en directo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; 4.9 en reseñas de Google',
  spec: [
    ['Para quién', 'Adultos, universitarios y escolares desde los 13 años'],
    ['Lenguajes', 'Python, Java, desarrollo web y bases de datos'],
    ['Certificado', 'De finalización, emitido por Modern Age Coders'],
    ['Examen externo', 'Preparación para el PCEP del Python Institute'],
    ['Idioma', 'Inglés, con mentor en vivo desde la India'],
    ['Inicio', 'Clase de prueba sin costo']
  ],
  capsuleQ: 'Respuesta breve',
  capsule: 'Modern Age Coders dicta cursos de programación en vivo, en línea y en inglés a personas de todo el Perú, sean adultos, universitarios o escolares desde los 13 años, con un mentor desde la India, en grupo o de forma individual y a la hora que usted elija. Quien completa el curso obtiene nuestro certificado de finalización, que no es un título ni un documento oficial. Si quiere una prueba independiente, en Python le preparamos para el examen PCEP del Python Institute, que se rinde y se aprueba aparte. No prometemos empleo: le ayudamos a construir un portafolio que un empleador pueda revisar.',

  picks: {
    eyebrow: 'Cursos con certificado',
    h2: 'Tres cursos para salir con algo que mostrar',
    lede: 'Uno que apunta al examen PCEP, uno de Python completo para mayores de 18 y uno de Java para quienes estudian una carrera.',
    items: [
      { course: 'pcep-pcap-python-certification-course', code: 'CCPI / 01', title: 'Python con preparación para PCEP y PCAP', alt: 'Imagen del curso de Python con preparación para las certificaciones PCEP y PCAP', note: 'Recorre las cinco secciones del examen PCEP y continúa hacia el PCAP. El examen lo rinde usted con el Python Institute; nosotros le preparamos.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'CCPI / 02', title: 'Python de cero a avanzado', alt: 'Imagen del curso de Python desde cero hasta nivel avanzado para adultos', note: 'Desde los 18 años y sin experiencia. Termina con proyectos propios publicados en GitHub y nuestro certificado de finalización.' },
      { course: 'complete-java-programming-masterclass-college', code: 'CCPI / 03', title: 'Java completo para universitarios', alt: 'Imagen del curso completo de Java para estudiantes universitarios', note: 'Programación orientada a objetos, colecciones y Spring Boot, con un proyecto de punta a punta que puede llevar a una entrevista.' }
    ]
  },

  sections: [
    {
      id: 'tipos',
      eyebrow: 'Tipos de certificado',
      h2: '¿Qué certificado da un curso de programación online?',
      lede: 'Depende de quién lo emita. En las búsquedas peruanas "con certificado" aparece junto a casi cualquier curso, pero detrás de esa frase hay tres documentos muy distintos, y conviene saber cuál le ofrecen.',
      body: [
        { kind: 'table', numCols: [], caption: 'Tres documentos que se llaman certificado y lo que demuestra cada uno (clasificación nuestra)', head: ['Documento', 'Quién lo emite', 'Qué demuestra', 'Qué no demuestra'], rows: [
          ['Certificado o constancia de finalización', 'La institución que dictó el curso', 'Que usted asistió y completó las tareas o proyectos', 'Un nivel medido por alguien ajeno al curso'],
          ['Certificación por examen (por ejemplo, PCEP)', 'Una organización independiente que diseña y califica la prueba', 'Que aprobó un examen con un temario publicado y un puntaje mínimo', 'Que usted sepa construir un proyecto completo'],
          ['Grado o título', 'Una universidad o un instituto de educación superior', 'Una formación académica completa, según las normas de educación superior', 'Habilidades concretas de un lenguaje en particular'],
          ['Portafolio de proyectos', 'Usted mismo, con su código público', 'Lo que es capaz de construir y explicar', 'Nada, si el código no es suyo o no lo entiende']
        ] },
        { kind: 'source', html: 'Clasificación de Modern Age Coders para orientar la decisión, no una norma. El portafolio no es un certificado, pero lo incluimos porque es lo que más se revisa en una entrevista técnica.' },
        { kind: 'p', mt: true, html: 'Nuestro documento es el primero de la tabla, un certificado de finalización con la firma de Modern Age Coders. Acredita que usted completó un curso en vivo, con sus proyectos revisados por un mentor. No es un título, no lo otorga una universidad peruana y no tiene carácter oficial ante el MINEDU ni ante SUNEDU. Preferimos decirlo en la primera pantalla, porque un certificado que promete más de lo que es termina perjudicando a quien lo presenta.' },
        { kind: 'p', html: 'Lo que sí podemos sumar es la segunda fila. En Python preparamos para el PCEP, una certificación de nivel inicial que se rinde ante el Python Institute. Es una prueba que no depende de nosotros: si usted la aprueba, el mérito y el documento son suyos, y cualquier empleador puede comprobarlos en el sitio de quien la emite.' }
      ]
    },
    {
      id: 'pcep',
      eyebrow: 'Examen PCEP',
      h2: '¿Qué es el examen PCEP de Python y cómo es?',
      lede: 'El PCEP, "Certified Entry-Level Python Programmer", es la certificación de entrada del Python Institute. Su página oficial dice que no tiene requisitos previos y que está pensada para estudiantes, principiantes y profesionales que dan sus primeros pasos en programación.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'El examen PCEP-30-03 según la página del Python Institute', head: ['Preguntas', 'Peso', 'Qué se evalúa en ese bloque'], rows: [
          ['9', '26%', 'Colecciones: listas, tuplas, sets, diccionarios y strings, con cortes e índices'],
          ['8', '23%', 'Decisiones con if y repeticiones con while, for y range()'],
          ['7', '20%', 'Definir funciones, pasar argumentos y atrapar excepciones'],
          ['6', '17%', 'Cómo se ejecuta un programa: sintaxis, literales, operadores y tipos'],
          ['5', '14%', 'Leer y escribir archivos de texto y CSV, e importar math y random'],
          ['35 en total', '100%', 'Cinco bloques ponderados, ordenados aquí de mayor a menor peso']
        ] },
        { kind: 'source', html: 'Fuente: Python Institute, página del PCEP (pythoninstitute.org/pcep), consultada en noviembre de 2026. La misma página indica 50 minutos de duración, un puntaje mínimo aprobatorio de 70% y una vigencia de la credencial de 5 años. El orden por peso y las descripciones en castellano son nuestros.' },
        { kind: 'p', mt: true, html: 'La tabla dice algo que muchos cursos callan: la sección más pesada no es la de sintaxis básica, sino la de colecciones, con 9 de las 35 preguntas. Quien solo memorizó cómo se escribe un <code>for</code> pierde puntos en listas anidadas, cortes de cadenas y diccionarios. Por eso, en el curso, cada tema se practica leyendo programas ajenos y prediciendo su salida antes de ejecutarlos, que es justamente lo que pide el examen.' },
        { kind: 'p', html: 'El Python Institute presenta el PCEP como el primer paso hacia el PCAP, su certificación de nivel asociado. Nuestro curso sigue ese orden. Primero se consolida el nivel de entrada y, si usted quiere seguir, se avanza hacia la programación orientada a objetos y los módulos que pide el PCAP. Usted decide cuándo inscribirse en cada examen y lo rinde directamente con el Python Institute.' },
        { kind: 'p', html: 'Si busca una explicación en inglés y más detallada del examen, la tiene en nuestra página <a class="ag-inline-link" href="/pcep-python-certification-prep">PCEP Python certification prep</a>.' }
      ]
    },
    {
      id: 'fabrica',
      eyebrow: 'Contexto peruano',
      h2: '¿El PCEP se usa en el Perú?',
      lede: 'Sí. El Ministerio de Educación lo eligió como meta de su estrategia Fábrica de Programadores, presentada el 24 de julio de 2025. Lo contamos como contexto: Modern Age Coders no forma parte de esa estrategia ni tiene relación con el MINEDU.',
      body: [
        { kind: 'two',
          leftH3: 'Qué anunció el MINEDU en 2025',
          left: [
            'Según la nota de prensa del 24 de julio de 2025, la primera etapa beneficiaría a 1000 escolares de 4.º y 5.º de secundaria de Lima Norte, con formación en Python y certificación internacional, en alianza con Cisco Networking Academy.',
            'Los estudiantes fueron seleccionados mediante una prueba de lógica y venían de colegios de Los Olivos, Rímac, San Martín de Porres, Comas, Carabayllo, Puente Piedra, Santa Rosa y Ancón.'
          ],
          rightH3: 'Cómo se organizó la formación',
          right: [
            'El programa incluía un curso presencial de iniciación en la Universidad Nacional de Ingeniería y una formación especializada en línea dictada por la Universidad Privada del Norte.',
            'Quienes concluyeran ambas etapas, dice el MINEDU, "podrán rendir el examen PCEP, con validez global". El Estado peruano, en otras palabras, eligió una certificación por examen y no un certificado de asistencia.'
          ] },
        { kind: 'p', mt: true, html: 'Para una familia o un adulto que compara cursos, la lección es sencilla. Si el propio Ministerio apostó por un examen que mide a todos con la misma vara, vale la pena preguntar a cualquier curso con certificado si prepara para una prueba así o si solo entrega una constancia propia. Nosotros hacemos las dos cosas y no confundimos una con la otra.' },
        { kind: 'p', html: 'Si su hijo o hija está en 4.º o 5.º de secundaria y no entró a esa estrategia, puede preparar el mismo examen por su cuenta. Para adolescentes, el punto de partida suele ser el curso de IA y Python que describimos en <a class="ag-inline-link" href="/curso-de-ia-para-adolescentes-peru">curso de IA para adolescentes</a>, que usa solo herramientas permitidas para su edad.' }
      ]
    },
    {
      id: 'laboral',
      eyebrow: 'Salida laboral',
      h2: '¿Un curso con certificado da salida laboral?',
      lede: 'Ningún certificado consigue un empleo por sí solo, y desconfíe de quien le asegure lo contrario. Lo que abre una conversación con un empleador es poder mostrar trabajo propio y explicarlo.',
      body: [
        { kind: 'p', html: 'La frase "cursos online con certificado y salida laboral" se repite mucho en el Perú, y entendemos por qué: quien paga un curso quiere que le sirva para trabajar. Nuestra respuesta honesta tiene tres partes. No prometemos empleo, sueldo ni prácticas. No tenemos convenios con empresas peruanas para colocar estudiantes. Y sí trabajamos con usted, clase a clase, para que termine con evidencia de lo que sabe hacer.' },
        { kind: 'ol', items: [
          '<strong>Un repositorio público.</strong> Cada proyecto del curso termina en GitHub, con un archivo que explica en inglés qué hace el programa, cómo se ejecuta y qué decisiones tomó usted.',
          '<strong>Una explicación en voz alta.</strong> En la última clase de cada módulo usted presenta su proyecto al mentor como si fuera una entrevista. El mentor pregunta por qué eligió una estructura de datos y no otra.',
          '<strong>Una prueba externa, si la quiere.</strong> En Python, el PCEP es una forma de que alguien ajeno a nosotros mida su nivel con un temario público.',
          '<strong>Nuestro certificado de finalización.</strong> Sirve para dejar constancia de que completó un curso en vivo. Es el cierre, no el argumento principal.'
        ] },
        { kind: 'p', mt: true, html: 'El orden de la lista no es casual. En una entrevista técnica lo primero que se mira es el código y la forma en que usted lo explica. Un certificado puede ayudarle a pasar un filtro inicial, pero rara vez decide nada después de eso.' },
        { kind: 'p', html: 'Un dato del INEI ayuda a planificar. En el segundo trimestre de 2026, apenas un 36,4% de los hogares peruanos disponía de una computadora o más: el 53,3% en Lima Metropolitana, el 41,3% en el resto urbano y el 8,9% en el área rural. Un portafolio se construye programando, y para eso hace falta una computadora con regularidad. Si usted la comparte con su familia, conviene acordar las horas antes de empezar, y por eso nuestras clases se ajustan a su calendario.' }
      ]
    },
    {
      id: 'ingles',
      eyebrow: 'En inglés',
      h2: '¿Por qué estudiar programación con certificado en inglés?',
      lede: 'Porque el idioma de trabajo de la programación es el inglés: los nombres de las funciones, los mensajes de error, la documentación y la mayoría de las preguntas resueltas en internet. Un curso en inglés le entrena en las dos cosas a la vez.',
      body: [
        { kind: 'p', html: 'Todas nuestras clases son en vivo, en línea y en inglés. No dictamos en castellano. Para muchos peruanos eso es una ventaja más que un obstáculo. Según el EF EPI 2025, el puntaje de lectura en inglés del Perú es 540 y el de expresión oral es 480. Es decir, mucha gente entiende un texto técnico pero se traba al hablar. En una clase en vivo, explicar en voz alta qué hace su programa es parte del trabajo diario.' },
        { kind: 'p', html: 'El mismo índice da 482 puntos a quienes declaran ser estudiantes y 555 a Lima, la única ciudad peruana en el nivel alto. Los mentores dictan desde la India con un inglés pausado y nítido, y están acostumbrados a que el inglés no sea la primera lengua de quien aprende. Si en la clase de prueba el ritmo le resulta exigente, el mentor le recomendará empezar con clases individuales, donde la velocidad la fija usted.' },
        { kind: 'p', html: 'Para un hijo o una hija que todavía cursa primaria, la lógica se mantiene pero el formato cambia, como explicamos en <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a>. Para los adultos que quieren pasar de la programación a la inteligencia artificial, la continuación natural es el <a class="ag-inline-link" href="/curso-de-inteligencia-artificial-en-ingles-peru">curso de inteligencia artificial en inglés</a>.' }
      ]
    },
    {
      id: 'ejemplo',
      tint: 'tint',
      eyebrow: 'Una clase de muestra',
      h2: '¿Cómo sabe un sistema que un código de certificado no tiene errores? Un ejemplo en Python',
      lede: 'Muchos documentos llevan un número con un dígito de control al final. Esta clase, nuestra, muestra cómo funciona con un formato inventado para el ejercicio: ocho cifras, un guion y una cifra de control. No es el formato de ningún certificado real, tampoco del nuestro.',
      body: [
        { kind: 'code', label: 'Un dígito de control que detecta errores de tipeo', lang: 'Python', code: PY, note: 'Cada cifra se multiplica por un peso, se suman los productos y el resto de dividir entre 11 decide la cifra de control. Cuando el cálculo da 10 se escribe <code>K</code>, y cuando da 11 se escribe <code>0</code>. Ejercita cuatro secciones del PCEP: bucles, cadenas, funciones y excepciones.' },
        { kind: 'code', label: 'Resultado', lang: 'Salida', code: OUT, note: 'Salida exacta de Python 3, ejecutado por nosotros. El código emitido es <code>20260417-5</code>; tres alteraciones distintas se rechazan y una letra O en lugar de un cero provoca un error controlado.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Calcular a mano.</strong> Los productos son 7 por 2, 6 por 0, 5 por 2, 4 por 6, 3 por 0, 2 por 4, 7 por 1 y 6 por 7. Suman 105. El resto de 105 entre 11 es 6, y 11 menos 6 da 5. Ese 5 es la cifra de control.',
          '<strong>Dos cifras intercambiadas.</strong> En <code>20260471-5</code> el 1 y el 7 cambiaron de lugar, un error de tipeo muy común. Como los pesos de esas posiciones son distintos, la suma cambia y el código se rechaza.',
          '<strong>Una cifra equivocada.</strong> <code>20250417-5</code> tiene un 5 donde iba un 6. La suma baja 4 puntos y la cifra de control ya no coincide.',
          '<strong>Una letra disfrazada de número.</strong> <code>2026O417</code> lleva una O mayúscula. La función no intenta adivinar: lanza <code>ValueError</code> y el programa lo atrapa con <code>try</code> y <code>except</code>.',
          '<strong>El reto: dos errores que se anulan.</strong> En <code>30270417-5</code> cambiaron dos cifras: la primera sube 1 con peso 7 y la cuarta sube 1 con peso 4. La suma crece 11, el resto no cambia y el código pasa como válido: <code>True</code>. Un dígito de control atrapa los errores de una cifra, no a quien falsifica con cuidado.'
        ] },
        { kind: 'p', mt: true, html: 'La última línea es la lección que queremos dejar. Un número bien formado no prueba que un documento sea auténtico; solo prueba que nadie se equivocó al copiarlo. Para comprobar un certificado hay que consultarlo en el sitio de quien lo emite, que es lo que explicamos en la sección siguiente. En clase, el estudiante escribe la función antes de ver la nuestra y luego busca por su cuenta otro par de errores que se anulen.' }
      ]
    },
    {
      id: 'verificar',
      eyebrow: 'Verificar',
      h2: '¿Cómo saber si un certificado de programación vale la pena?',
      lede: 'Hágale cinco preguntas a cualquier curso antes de inscribirse. Si las respuestas son vagas, el certificado probablemente también lo sea.',
      body: [
        { kind: 'ol', items: [
          '<strong>¿Quién firma el documento?</strong> Una institución que dicta el curso, una organización que toma exámenes o una universidad. Cada una responde por cosas distintas.',
          '<strong>¿Qué demuestra exactamente?</strong> Asistencia, aprobación de un examen o un grado académico. Si nadie sabe decirlo en una frase, desconfíe.',
          '<strong>¿Se puede verificar?</strong> El Python Institute, por ejemplo, ofrece en su sitio una sección para verificar credenciales y emite insignias digitales. Pregunte si el certificado que le ofrecen tiene algo equivalente.',
          '<strong>¿Hubo un examen ajeno al curso?</strong> Una prueba calificada por otros pesa más que una constancia emitida por quien cobró las clases.',
          '<strong>¿Qué proyectos quedarán a su nombre?</strong> Sin proyectos propios, ningún certificado le servirá en una entrevista técnica.'
        ] },
        { kind: 'p', mt: true, html: 'Aplicadas a nosotros, las respuestas son estas. Firma Modern Age Coders. Demuestra que completó un curso en vivo con proyectos revisados. No es un documento oficial ni un título. El examen externo, en Python, es el PCEP, que usted rinde con el Python Institute. Y los proyectos quedan en su propio GitHub, a su nombre, para siempre.' },
        { kind: 'p', html: 'Desconfíe también de los cursos gratis con certificado que piden datos personales o un pago a último momento "solo por el certificado". Nuestra primera clase es gratuita y no pide tarjeta. Después, las mensualidades se muestran en esta página y no hay cargos por emitir el certificado.' }
      ]
    },
    {
      id: 'horario',
      eyebrow: 'Horario',
      h2: '¿A qué hora puedo tomar las clases desde el Perú?',
      lede: 'A la que usted reserve. El Perú está en UTC-5 y la India en UTC+5:30 todo el año, sin horario de verano en ninguno de los dos, así que la diferencia es siempre de diez horas y media.',
      body: [
        { kind: 'table', numCols: [], caption: 'Conversión de horas entre el Perú y la India (ejemplos, no un horario de clases)', head: ['Hora de Perú', 'Hora de la India', 'Para quién suele servir'], rows: [
          ['6:00 a. m.', '4:30 p. m.', 'Quien trabaja de día y estudia antes de salir'],
          ['8:00 a. m.', '6:30 p. m.', 'Universitarios con clases por la tarde'],
          ['7:30 p. m.', '6:00 a. m. del día siguiente', 'Quien llega de la oficina y cena temprano'],
          ['9:00 p. m.', '7:30 a. m. del día siguiente', 'Quien solo dispone de la noche']
        ] },
        { kind: 'source', html: 'Cálculo nuestro con la base de zonas horarias tzdata (America/Lima, UTC-5; Asia/Kolkata, UTC+5:30). La hora oficial del Perú la mantiene el INACAL.' },
        { kind: 'p', mt: true, html: 'Las filas son conversiones, no turnos fijos. En las clases individuales la hora puede moverse de una semana a otra. En grupo, el mentor le propone los grupos abiertos que coinciden con su franja.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Avance',
    h2: '¿Cuánto tiempo toma pasar de cero al examen PCEP?',
    lede: 'Con dos clases por semana y algo de práctica propia, muchos adultos llegan en unos meses. Esta es la escala que usamos para conversar sobre el avance; es nuestra y no reemplaza al examen.',
    table: { caption: 'Del primer programa al portafolio: cinco etapas de un curso con certificado (escala nuestra)', head: ['Etapa', 'Tiempo habitual', 'Qué hace el estudiante'], rows: [
      ['1. Escribe', 'Primer mes', 'Variables, condicionales y bucles en programas cortos'],
      ['2. Organiza', 'Segundo mes', 'Listas, diccionarios y cadenas; predice la salida antes de ejecutar'],
      ['3. Divide', 'Tercer mes', 'Funciones, excepciones y archivos, como el ejemplo del dígito de control'],
      ['4. Rinde', 'Cuarto mes en adelante', 'Simulacros cronometrados de 35 preguntas en 50 minutos'],
      ['5. Muestra', 'Al cerrar el curso', 'Un proyecto propio en GitHub, explicado en inglés, y el certificado de finalización']
    ] },
    left: { h3: 'Si trabaja a tiempo completo', ps: [
      'Dos clases por semana y media hora diaria de práctica bastan para avanzar sin abandonar.',
      'Reserve la etapa 4 para un período con menos carga laboral, porque los simulacros piden concentración.'
    ] },
    right: { h3: 'Si está en la universidad', ps: [
      'Use los cursos de la carrera como material: reescriba en Python un ejercicio de su facultad.',
      'Rinda el PCEP cuando sus simulacros superen con holgura el 70% que pide el examen.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más con certificado de finalización',
    lede: 'Organizados por lo que quiere demostrar al terminar, todos en vivo y en inglés.',
    bands: [
      { num: 'I', h3: 'Exámenes de programación', sub: 'Pruebas externas', courses: [
        { code: 'CCPI / EXAMEN / 01', slug: 'pcap-python-certification-prep-course', title: 'Preparación para el PCAP', blurb: 'El escalón siguiente al PCEP: clases, módulos y programación orientada a objetos en Python.' },
        { code: 'CCPI / EXAMEN / 02', slug: 'ap-computer-science-a-java-exam-prep-course', title: 'AP Computer Science A', blurb: 'Para escolares que apuntan a universidades de Estados Unidos: Java y el examen AP completo.' },
        { code: 'CCPI / EXAMEN / 03', slug: 'data-structures-algorithms-masterclass-college', title: 'Estructuras de datos y algoritmos', blurb: 'Lo que se evalúa en entrevistas técnicas, practicado problema por problema.' }
      ] },
      { num: 'II', h3: 'Portafolio profesional', sub: 'Desde los 18 años', courses: [
        { code: 'CCPI / PORTAFOLIO / 01', slug: 'full-stack-web-development-masterclass-college', title: 'Desarrollo web full stack', blurb: 'Una aplicación web completa, del diseño de la página a la base de datos, publicada en línea.' },
        { code: 'CCPI / PORTAFOLIO / 02', slug: 'mysql-database-complete-masterclass-college', title: 'Bases de datos con MySQL', blurb: 'Consultas, diseño de tablas y administración, con ejercicios sobre datos realistas.' },
        { code: 'CCPI / PORTAFOLIO / 03', slug: 'git-github-version-control-course-for-college-students', title: 'Git y GitHub', blurb: 'Control de versiones y trabajo en equipo: la vitrina donde vive su portafolio.' }
      ] },
      { num: 'III', h3: 'Para escolares', sub: 'De 13 a 18 años', courses: [
        { code: 'CCPI / ESCOLAR / 01', slug: 'python-complete-masterclass-teens', title: 'Python para adolescentes', blurb: 'La base que luego permite intentar el PCEP con calma.' },
        { code: 'CCPI / ESCOLAR / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java para adolescentes', blurb: 'Objetos y clases desde la secundaria, con proyectos que se pueden mostrar.' },
        { code: 'CCPI / ESCOLAR / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Resolución de problemas', blurb: 'Algoritmos y lógica para escolares que disfrutan los retos.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo se estudia',
    h2: '¿Cómo funcionan las clases en vivo con certificado?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Al amanecer', l: 'Una clase antes de entrar al trabajo.' },
      { time: 'Entre clases', l: 'Para universitarios con huecos en el horario.' },
      { time: 'Semana cambiante', l: 'En individual, cada sesión se agenda aparte.' }
    ],
    cells: [
      { h3: 'Programa compartido', p: 'El mentor ve su pantalla y corrige su código mientras usted lo escribe.' },
      { h3: 'Predecir antes de ejecutar', p: 'Cada ejercicio empieza con una pregunta: qué imprimirá este programa.' },
      { h3: 'Simulacros cronometrados', p: 'En la etapa final, pruebas con el formato y el tiempo del PCEP.' },
      { h3: 'Proyecto revisado', p: 'Ningún módulo se cierra sin un programa propio en su GitHub.' },
      { h3: 'Mentor estable', p: 'Una sola persona acompaña su avance hasta el certificado.' },
      { h3: 'Dos formatos', p: 'Clase grupal de quince a veinte estudiantes, o sesiones individuales.' }
    ]
  },

  projectsH2: 'Trabajos de estudiantes',
  projectsLede: 'Proyectos reales de nuestros estudiantes, como los que forman un portafolio. Hay más en <a class="ag-inline-link" href="/student-labs">Student labs</a>, en inglés.',
  reviewsLede: 'Lo que escribieron en Google estudiantes y familias de distintos países, sin retoques ni traducción.',

  fees: {
    h2: 'Precio de los cursos con certificado',
    lede: 'Abajo verá cada mensualidad expresada en dólares estadounidenses; el cobro es con tarjeta y la conversión a su moneda corre por cuenta de su banco el día del cargo. El certificado de finalización está incluido y no tiene costo adicional; la inscripción al examen PCEP se paga aparte, directamente al Python Institute.',
    free: ['Clase de prueba gratuita', 'Diagnóstico de su nivel en Python o Java', 'Reserva sin tarjeta'],
    group: ['Grupo de quince a veinte estudiantes', 'Dos clases en vivo por semana', 'Certificado de finalización incluido', 'Pago mes a mes, sin permanencia'],
    one: ['Clases solo para usted', 'Ritmo pensado para su fecha de examen', 'Horario que cambia con su semana']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Cursos de programación con certificado: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Todos nuestros cursos se dictan en vivo, por internet y en inglés, y así se lo decimos antes de empezar. Es una ventaja doble: aprende a programar en el idioma de la documentación y de los mensajes de error, y practica la expresión oral, que en el EF EPI 2025 es la habilidad más baja del Perú con 480 puntos. Lima, con 555 puntos, figura en el nivel alto. Si el ritmo le cuesta, el mentor lo baja.' },
      { q: '¿El certificado es oficial?', a: 'No. Lo emitimos nosotros, Modern Age Coders, para dejar constancia de que usted terminó el curso. Tampoco equivale a un título: no lo otorga una universidad y no tiene reconocimiento del MINEDU ni de SUNEDU. Sus proyectos revisados pesan más que el papel.' },
      { q: '¿Qué es el PCEP?', a: 'Es la certificación de nivel inicial en Python del Python Institute. Su página publica las condiciones del PCEP-30-03: 35 preguntas en 50 minutos, aprobación desde el 70% y una credencial que vence a los 5 años. Nosotros le preparamos; el examen lo rinde usted con el Python Institute.' },
      { q: '¿El precio incluye el examen PCEP?', a: 'No. Nuestras mensualidades cubren las clases y el certificado de finalización. La inscripción al examen se compra aparte al Python Institute, cuando usted decida rendirlo.' },
      { q: '¿Un curso con certificado me asegura trabajo?', a: 'No, y no lo prometemos. Le ayudamos a construir proyectos propios en GitHub y a explicarlos en inglés, que es lo que se revisa en una entrevista técnica. El empleo depende de muchos factores que ningún curso controla.' },
      { q: '¿Necesito experiencia previa?', a: 'No. Los cursos de Python y Java empiezan desde cero. El PCEP tampoco pide requisitos previos, según la página del Python Institute.' },
      { q: '¿Desde qué edad se puede estudiar?', a: 'Desde los 13 años en los cursos para adolescentes. Los cursos de nivel universitario y profesional son para mayores de 18.' },
      { q: '¿Puedo elegir el día y la hora de estudio?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Por ejemplo, las 9:00 p. m. en Lima son las 7:30 a. m. del día siguiente en la India.' },
      { q: '¿Cuánto dura el curso?', a: 'Depende de su punto de partida y del ritmo. Con dos clases por semana, muchos adultos llegan a los simulacros del PCEP en unos cuatro meses. En la clase de prueba el mentor le da una estimación según su nivel.' },
      { q: '¿Hay cursos gratis con certificado?', a: 'La clase de prueba es gratuita, pero no emite certificado. El certificado de finalización se entrega al completar un curso pagado, sin cargo extra por emitirlo.' },
      { q: '¿Cómo se paga?', a: 'Cada mes, con tarjeta y en dólares estadounidenses. La conversión a su moneda la aplica su banco. No cobramos matrícula ni emisión de certificado.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Para seguir leyendo',
    h2: 'Páginas relacionadas',
    lede: 'Otras páginas nuestras sobre exámenes, método y cursos en el Perú.',
    items: [
      { href: '/pcep-python-certification-prep', label: 'PCEP Python certification prep', p: 'El examen PCEP explicado en detalle, en inglés.' },
      { href: '/python-certification-pcep-pcap-course', label: 'Python certification: PCEP and PCAP', p: 'Cómo se encadenan las dos certificaciones del Python Institute.' },
      { href: '/how-to-think-like-a-programmer', label: 'How to think like a programmer', p: 'Lo que hay detrás de un buen portafolio: método, no memoria.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Todas nuestras clases para el Perú, por edad y por tema.' },
      { href: '/english-medium-coding-classes-lima', label: 'English-medium coding classes in Lima', p: 'Si en casa ya se habla inglés por el colegio de los hijos.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'El método de nuestras clases, explicado paso a paso.' }
    ]
  },

  start: {
    h2: 'Reserve una clase de prueba antes de decidir',
    lede: 'Durante la clase de prueba se le pide resolver un ejercicio corto, le hace preguntas sobre su objetivo, sea un examen, un cambio de trabajo o un proyecto, y le sugiere el curso que le conviene. No hace falta experiencia.',
    readFirst: 'Si quiere conocer el nivel antes, lea <a class="ag-inline-link" href="/pcep-python-certification-prep">PCEP Python certification prep</a> o <a class="ag-inline-link" href="/how-we-teach">How we teach</a>, ambas en inglés.',
    note: 'Recuerde: toda clase es en vivo, por internet y en inglés, dictada desde la India. Por WhatsApp le atendemos también en castellano.',
    formNote: 'Sin pago ni tarjeta para reservar.'
  },

  footer: {
    cols: [
      { h4: 'Cursos con certificado', links: [
        { href: '/courses/pcep-pcap-python-certification-course', label: 'Python con PCEP' },
        { href: '/courses/python-programming-masterclass-zero-to-advanced-college', label: 'Python desde cero' },
        { href: '/courses/complete-java-programming-masterclass-college', label: 'Java para universitarios' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Perú', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Clases en Perú' },
        { href: '/curso-de-inteligencia-artificial-en-ingles-peru', label: 'Curso de IA en inglés' },
        { href: '/curso-de-ia-para-adolescentes-peru', label: 'IA para adolescentes' },
        { href: '/coding-classes-in-arequipa-peru', label: 'Arequipa' }
      ] }
    ],
    bottomRight: 'Un certificado dice que usted terminó; su código dice lo que sabe hacer'
  },

  personalityCss: `
.ag-root.ag-ccpi .ag-hero h1 { letter-spacing: -0.012em; max-width: 22ch; }
.ag-root.ag-ccpi .ag-capsule { border-left-width: 4px; border-radius: 2px; }
.ag-root.ag-ccpi .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-ccpi .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-ccpi .ag-steps li { line-height: 1.6; }
`,

  dossier: {
    curriculumAuthority: 'Python Institute PCEP page (PCEP-30-03: 35 questions, 50 minutes, 70%, 5 years, five weighted sections, credential verification); MINEDU press note of 24 July 2025 on Fábrica de Programadores; INEI ENAHO TIC bulletin, II Trimestre 2026; EF EPI 2025 Peru page; tzdata. The certificate classification, the stage scale, the code format and the Python example are our own.',
    localProject: 'A check digit written by hand in Python on an invented eight-digit code: weights 7 6 5 4 3 2 7 6, sum 105, 105 % 11 = 6, control 5, so the code is 20260417-5. A swap (20260471-5), a wrong digit (20250417-5) and a wrong control (20260417-3) are rejected; a letter O raises ValueError; two changes that add 11 to the sum (30270417-5) pass as True. Lesson family: check digits and their limits.',
    requiredMentions: ['codigo emitido: 20260417-5', 'dos errores: 30270417-5', 'Un dígito de control que detecta errores de tipeo', 'El examen PCEP-30-03 según la página del Python Institute', 'Tres documentos que se llaman certificado y lo que demuestra cada uno', 'podrán rendir el examen PCEP, con validez global', 'el 53,3% en Lima Metropolitana, el 41,3% en el resto urbano y el 8,9% en el área rural', 'Del primer programa al portafolio: cinco etapas de un curso con certificado', 'Un certificado dice que usted terminó; su código dice lo que sabe hacer'],
    sources: [
      { claim: 'PCEP-30-03: 35 questions, 50 minutes, passing score 70%, credential validity 5 years, five sections weighted 17/23/26/20/14% (6/8/9/7/5 questions); no prerequisites; credential verification and digital badging; leads to PCAP.', url: 'https://pythoninstitute.org/pcep' },
      { claim: 'Fábrica de Programadores (24 July 2025): 1000 students of 4.º and 5.º secundaria in Lima Norte, Cisco Networking Academy, logic test, eight districts, UNI in person and UPN online, PCEP "con validez global".', url: 'https://www.gob.pe/institucion/minedu/noticias/1214050-minedu-impulsa-iniciativa-fabrica-de-programadores-para-formar-a-escolares-con-certificacion-internacional-en-programacion' },
      { claim: 'II Trimestre 2026: 36.4% of homes with a computer (Lima Metropolitana 53.3%, rest urban 41.3%, rural 8.9%).', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'EF EPI 2025 Peru: reading 540, speaking 480, students 482, Lima 555.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' }
    ],
    rejectedClaims: [
      'An official, SUNEDU- or MINEDU-recognised certificate: refused; the page says our certificate of completion is not official and is not a degree.',
      'A job, salary or internship promise ("salida laboral garantizada"): refused; the page says we promise none and have no placement agreements.',
      'Any link between us and Fábrica de Programadores, Cisco, UNI or UPN: refused; quoted as context with a plain statement that we are not connected.',
      'Printing the PCEP exam fee or any other price: refused; the page says the exam is paid separately to the Python Institute.',
      'Presenting the example code format as a real certificate format: refused; labelled invented, ours included.'
    ]
  }
};
