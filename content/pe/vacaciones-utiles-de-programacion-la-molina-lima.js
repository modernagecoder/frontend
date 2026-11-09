// SHIP: market | La Molina summer: computación (Word, Excel) or programación, a teen-heavy district | types: text that looks like a number sorts as text (str vs int)
'use strict';
// Vacaciones útiles de programación en La Molina (ag- Spanish district door, Peru cluster row PE216, P2, hubGroup lima).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md
// (rule "Vacaciones útiles pages", district pages). Owner 2026-11-09: "make sure all our classes are live online in
// english"; 2026-11-08: timing flexible, any time. Formal "usted" throughout. Fees render in USD from the template only.
// Spine: the La Molina council's own summer and computing workshops teach "computación" (Word, Excel) and robotics; the
// parent's real question is whether computación and programación are the same thing. La Molina has more teenagers of 12
// to 17 than children of 6 to 11 (INEI 2025), so the page leans to secundaria, then shows the step from a spreadsheet to
// code with the district's own census figures.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/vacaciones-utiles-de-programacion-la-molina-lima/):
//  - The council site www.munimolina.gob.pe did not answer (curl code 000, tried twice on 9 Nov 2026); gob.pe/munimolina
//    is a 404. The council's institutional page on the state platform, gob.pe/institucion/munilamolina, worked; its news
//    list was read sheet by sheet (gobpe-list/) and three notes saved:
//    nota N° 380, 6 Jan 2026 (n-1328590-...html): "Molitalleres de Verano 2026"; "para niños y adolescentes hay teatro,
//      ilustración anime (presencial y virtual), locución y oratoria, robótica"; "Para los adolescentes y adultos se ha
//      organizado: preparación preuniversitaria, reforzamiento en matemáticas y comunicación, computación, quechua";
//      "Las inscripciones se cierran este viernes 9 de enero"; "los talleres se iniciarán el próximo lunes 12 de enero".
//    nota N° 365, 10 Dec 2025 (n-1308761-...html): "Talleres Deportivos de Verano 2026"; "más de 30 especialidades";
//      "10 locales"; "pensadas para niños y jóvenes entre 6 y 17 años".
//    nota N° 419, 15 Apr 2026 (n-1379493-...html): "Molitalleres gratuitos de Computación, dirigidos a niños y jóvenes de
//      10 a 18 años"; "10 a 13 años (enfocado en Word)"; "10 a 13 años (enfocado en Excel )"; "16 a 18 años (enfocado en
//      Word y Excel avanzado)"; "Desde este sábado 18 de abril".
//    Prices, addresses and phone numbers in the notes are not repeated; no political names.
//  - INEI Censos Nacionales 2025, Lima Metropolitana (inei/sheet2_CUADRO_N_1.tsv): "DISTRITO LA MOLINA 151360 71577 79783
//    143899 67902 75997 7461 3675 3786"; (inei/sheet4_CUADRO_N_3.tsv): "DISTRITO LA MOLINA 143899 5042 8435 10681 24793
//    29245 30484 35219".
//  - CNEB (facts-school FACTS 32, 33; cneb text): competency 28 "Se desenvuelve en entornos virtuales generados por las
//    TIC" under "Competencias transversales a las áreas"; no computing area in the plan de estudios.
//  - RM 501-2025-MINEDU Tabla 1 (rm501-2025-pdf/page11-checked-by-eye.png): "Del 19 octubre a 18 de diciembre".
//  - INEI TIC II Trimestre 2026 (inei_tic_iit2026.txt): "el de 12 a 18 años con un 92,5%"; Lima Metropolitana "84,7%".
//  - EF EPI 2025 (ef_peru.txt): Lima 555 (high from 550).
//  - Time (timezone.tsv): Peru UTC-5, India UTC+5:30.
//  - Neighbouring districts in plain text: Ate, Cieneguilla, Pachacámac, Villa María del Triunfo, Santiago de Surco.
// Our own calculations (python3 -I): 8435 / 143899 = 5.86% (6 to 11); 10681 / 143899 = 7.42% (12 to 17).
// Our own example (vupm_v1.py, vupm_v2.py), exact output:
//   v1: "Largest: 8435" / "Sorted: ['10681', '24793', '29245', '30484', '35219', '5042', '8435']"
//   v2: "Largest: 35219 in the group 60 y mas" / "Sorted: [5042, 8435, 10681, 24793, 29245, 30484, 35219]" /
//       "Smallest: 5042 in the group 0 a 5"
// Lesson family: a number stored as text compares letter by letter; convert with int() before max() and sorted().

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  "grupos = ['0 a 5', '6 a 11', '12 a 17', '18 a 29', '30 a 44', '45 a 59', '60 y mas']",
  "personas = ['5042', '8435', '10681', '24793', '29245', '30484', '35219']",
  '',
  "print('Largest:', max(personas))",
  "print('Sorted:', sorted(personas))"
].join('\n');

const OUT1 = [
  'Largest: 8435',
  "Sorted: ['10681', '24793', '29245', '30484', '35219', '5042', '8435']"
].join('\n');

const V2 = [
  '# grupos y personas, igual que antes',
  '',
  'numeros = [int(p) for p in personas]',
  '',
  'mayor = max(numeros)',
  "print('Largest:', mayor, 'in the group', grupos[numeros.index(mayor)])",
  "print('Sorted:', sorted(numeros))",
  "print('Smallest:', min(numeros), 'in the group', grupos[numeros.index(min(numeros))])"
].join('\n');

const OUT2 = [
  'Largest: 35219 in the group 60 y mas',
  'Sorted: [5042, 8435, 10681, 24793, 29245, 30484, 35219]',
  'Smallest: 5042 in the group 0 a 5'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'lima', label: 'Vacaciones útiles en La Molina' },
  slug: 'vacaciones-utiles-de-programacion-la-molina-lima',
  code: 'vupm',
  accent: '#4E582A',
  accentRationale: 'Vacaciones útiles en La Molina: an olive and dry-hill green #4E582A, for the cerros that ring La Molina and the green of its valley floor, distinct from the park green of the Surco page; contrast 6.19 on the paper #FBF8F2 (alloc.tsv) and above 4.5 on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Vacaciones útiles de programación en La Molina',
  title: 'Vacaciones útiles de programación en La Molina, en inglés',
  description: 'Vacaciones útiles de programación en La Molina para escolares de 6 a 17 años: clases en vivo, en línea y en inglés, más allá de Word y Excel, a cualquier hora.',
  ogDescription: 'Computación o programación: qué ofreció la Municipalidad de La Molina en el verano 2026, cuántos escolares tiene el distrito según el INEI y una clase que pasa de Excel a Python.',
  twitterDescription: 'Programación en vivo y en inglés para el verano en La Molina: de la hoja de cálculo al código, desde casa.',
  pageName: 'Vacaciones útiles de programación en La Molina',
  webPageDescription: 'Guía para familias de La Molina que buscan vacaciones útiles de programación con clases en vivo, en línea y en inglés: los Molitalleres y talleres de verano 2026 de la municipalidad, la diferencia entre computación y programación, los escolares del distrito según los Censos Nacionales 2025 del INEI y una clase de ejemplo en Python, escrita por nosotros, con datos del censo.',
  courseDescription: 'Clases en vivo y en línea de programación y computación para escolares de La Molina, dictadas solo en inglés, para empezar en el verano: hojas de cálculo, Python, matemática con código y proyectos para secundaria, en una clase grupal de quince a veinte o en clases individuales, a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Vacaciones útiles en La Molina',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#molitalleres', label: 'Verano 2026' },
    { href: '#diferencia', label: 'Computación o programación' },
    { href: '#secundaria', label: 'Secundaria' },
    { href: '#de-excel-a-python', label: 'Ejemplo' },
    { href: '#idioma', label: 'En inglés' }
  ],
  eyebrow: 'La Molina &middot; Vacaciones útiles &middot; De 6 a 17 años',
  h1: 'Vacaciones útiles de programación en La Molina',
  lede: 'En la lista de talleres de verano de La Molina suele aparecer la palabra <em>computación</em>, y muchas familias se preguntan si es lo mismo que aprender a programar. No lo es, aunque se complementan. Aquí encontrará qué ofreció la municipalidad en 2026, en qué se diferencian computación y programación, por qué este distrito tiene tantos adolescentes en edad de secundaria y cómo una clase pasa de una hoja de Excel a un programa en Python.',
  secondaryCta: { href: '#diferencia', label: '¿Computación o programación?' },
  wa: 'Hola Modern Age Coders, somos una familia de La Molina y buscamos clases de programación en inglés para estas vacaciones. ¿Podemos reservar una clase gratis?',
  heroNote: 'Clases en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; mentores que enseñan siempre en inglés',
  spec: [
    ['Distrito', 'La Molina, Lima Metropolitana'],
    ['Para quién', 'Escolares de 6 a 17 años, de primaria y secundaria'],
    ['Qué se aprende', 'Programación, y computación si hace falta'],
    ['Modalidad', 'En vivo por videollamada, desde casa'],
    ['Formato', 'Grupo de quince a veinte, o individual'],
    ['Clase de prueba', 'Gratis y sin tarjeta']
  ],
  capsuleQ: 'La respuesta corta',
  capsule: 'Para las vacaciones útiles en La Molina, Modern Age Coders ofrece clases de programación en vivo, en línea y en inglés para escolares de 6 a 17 años, desde la casa de cada familia. No se trata solo de computación, es decir, de usar Word o Excel: los estudiantes escriben sus propios programas en Scratch, Python o JavaScript con un mentor desde la India que habla claro y se adapta a su ritmo. Usted elige clase grupal o individual y el horario, cualquier día, y su hijo puede continuar cuando vuelva el colegio.',

  picks: {
    eyebrow: 'Por dónde empezar',
    h2: 'Tres cursos para un verano en La Molina',
    lede: 'Uno para quien todavía necesita manejar bien la computadora, uno para unir la matemática del colegio con el código y uno para el adolescente que quiere programar en serio.',
    items: [
      { course: 'microsoft-office-kids-mastery', code: 'VUPM / 01', title: 'Computación para niños: Word, PowerPoint y Excel', alt: 'Imagen del curso de Microsoft Office para niños', note: 'De 7 a 12 años. Si su hijo aún no se mueve con soltura en la computadora, este es el paso previo: documentos, presentaciones y primeras hojas de cálculo.' },
      { course: 'maths-through-coding', code: 'VUPM / 02', title: 'Matemática con código', alt: 'Imagen del curso de matemática a través de la programación en Python', note: 'De 10 a 15 años. Fracciones, porcentajes, gráficos y patrones explorados con Python, para que la matemática del colegio se vea de otra manera.' },
      { course: 'python-complete-masterclass-teens', code: 'VUPM / 03', title: 'Python completo para adolescentes', alt: 'Imagen del curso completo de Python para adolescentes', note: 'Para secundaria, de los 13 a los 17. El salto natural después de Excel: datos, funciones, archivos y programas que resuelven problemas que el adolescente elige.' }
    ]
  },

  sections: [
    {
      id: 'molitalleres',
      eyebrow: 'El verano municipal',
      h2: '¿Qué talleres de verano ofreció la Municipalidad de La Molina en 2026?',
      lede: 'Tres convocatorias, según las notas de prensa que la municipalidad publicó en su página institucional de gob.pe: los Molitalleres de Verano 2026, los Talleres Deportivos de Verano 2026 y, ya en abril, unos Molitalleres gratuitos de computación.',
      body: [
        { kind: 'table', numCols: [], caption: 'Convocatorias de la Municipalidad de La Molina para escolares, 2025 a 2026', head: ['Convocatoria', 'Fecha de la nota', 'Lo que anunció la municipalidad'], rows: [
          ['Talleres Deportivos de Verano 2026', '10 de diciembre de 2025', 'Más de 30 especialidades en 10 locales del distrito, pensadas para niños y jóvenes de 6 a 17 años'],
          ['Molitalleres de Verano 2026', '6 de enero de 2026', 'Inicio el lunes 12 de enero; robótica, teatro y danzas para niños y adolescentes; computación, preparación preuniversitaria y reforzamiento en matemáticas para adolescentes y adultos'],
          ['Molitalleres gratuitos de Computación', '15 de abril de 2026', 'Sábados desde el 18 de abril, de 10 a 18 años: Word y Excel de 10 a 13 años, Word y Excel avanzado de 16 a 18']
        ] },
        { kind: 'source', html: 'Fuente: Municipalidad Distrital de La Molina, notas de prensa N.° 365 (10 de diciembre de 2025), N.° 380 (6 de enero de 2026) y N.° 419 (15 de abril de 2026), en gob.pe/institucion/munilamolina, leídas el 9 de noviembre de 2026. El sitio web propio de la municipalidad no respondió cuando lo intentamos. La oferta para el verano 2027 aún no se había publicado. Modern Age Coders es ajena a la municipalidad y no participa en esos talleres.' },
        { kind: 'p', mt: true, html: 'Es una oferta amplia y, en buena parte, presencial: deportes en el estadio y en los complejos del distrito, artes en los locales municipales, y una robótica que permite a los más chicos tocar sensores y motores. La palabra que más nos interesa en estas notas es otra: computación. Aparece en el verano para adolescentes y adultos, y vuelve en abril como taller gratuito de Word y Excel para escolares. Es la prueba de que en La Molina hay demanda por aprender tecnología fuera del colegio, y también el origen de una confusión frecuente.' }
      ]
    },
    {
      id: 'diferencia',
      eyebrow: 'Una duda frecuente',
      h2: '¿Computación y programación son lo mismo?',
      lede: 'No. Computación es aprender a usar programas que otros hicieron, como Word, Excel o PowerPoint. Programación es escribir sus propios programas: decirle a la computadora, paso a paso, qué hacer. Lo primero es útil; lo segundo enseña a pensar de otra forma.',
      body: [
        { kind: 'table', numCols: [], caption: 'Computación y programación para escolares, lado a lado (comparación nuestra)', head: ['', 'Computación', 'Programación'], rows: [
          ['Qué hace el estudiante', 'Usa una herramienta ya hecha', 'Construye la herramienta'],
          ['Ejemplo típico', 'Una tabla en Excel con promedios', 'Un programa que calcula promedios de cualquier tabla'],
          ['Qué se aprende', 'Menús, fórmulas, formatos', 'Variables, condiciones, bucles, datos, depuración'],
          ['Cuando algo falla', 'Se busca la opción correcta', 'Se busca el error en la lógica propia'],
          ['A dónde lleva', 'Trabajo de oficina, tareas escolares', 'Juegos, webs, apps, análisis de datos, IA']
        ] },
        { kind: 'source', html: 'Comparación elaborada por nosotros. En el colegio peruano tampoco hay un curso de programación: el Currículo Nacional de la Educación Básica (CNEB) del MINEDU trata lo digital en la competencia 28, "Se desenvuelve en entornos virtuales generados por las TIC", que ubica entre las competencias transversales a las áreas, sin horas propias.' },
        { kind: 'two', mt: true,
          leftH3: 'Por qué conviene saber las dos',
          left: [
            'Un adolescente que maneja Excel ya entiende filas, columnas y fórmulas. Cuando pasa a Python, esa experiencia le ayuda: una lista se parece a una columna, y una función, a una fórmula que él mismo escribe.',
            'Al revés también funciona. Quien aprende a programar empieza a usar Excel de otra manera, porque entiende qué hace la hoja por debajo y detecta antes un resultado que no tiene sentido.'
          ],
          rightH3: 'Qué enseñamos nosotros',
          right: [
            'Nuestro centro es la programación: Scratch, Python, JavaScript, Java y proyectos de IA. Para niños de 7 a 12 años que todavía necesitan soltura con la computadora, también tenemos un curso de Word, PowerPoint y Excel.',
            'En el ejemplo de más abajo se ve el puente entre las dos: unos datos que vienen de una hoja de cálculo se comportan de forma rara en Python, y entender por qué es una lección de programación de verdad.'
          ] }
      ]
    },
    {
      id: 'distrito',
      eyebrow: 'El distrito',
      h2: '¿Cuántos escolares viven en La Molina?',
      lede: 'El censo de 2025 del INEI contó 151 360 habitantes en La Molina. En la población censada hay 8 435 niños de 6 a 11 años y 10 681 adolescentes de 12 a 17: más chicos en edad de secundaria que de primaria.',
      body: [
        { kind: 'table', numCols: [1], caption: 'La Molina en los Censos Nacionales 2025: población censada por grupo de edad (INEI, Cuadro N.° 3)', head: ['Grupo de edad', 'Personas censadas'], rows: [
          ['0 a 5 años', '5 042'],
          ['6 a 11 años', '8 435'],
          ['12 a 17 años', '10 681'],
          ['18 a 29 años', '24 793'],
          ['30 a 44 años', '29 245'],
          ['45 a 59 años', '30 484'],
          ['60 años y más', '35 219'],
          ['Total censado', '143 899']
        ] },
        { kind: 'source', html: 'Datos del INEI: archivo de indicadores demográficos de Lima Metropolitana de los Censos Nacionales 2025, que bajamos el 8 de noviembre de 2026. Las edades salen del Cuadro N.° 3; del Cuadro N.° 1 salen la población total de 151 360 (143 899 censados y 7 461 omitidos) y su reparto en 79 783 mujeres y 71 577 hombres. El total censado lo publica el propio INEI; no es una suma hecha por nosotros.' },
        { kind: 'two', mt: true,
          leftH3: 'Lo que muestran los números',
          left: [
            'Con nuestro cálculo, los adolescentes de 12 a 17 años son cerca del 7,4 % de la población censada del distrito y los niños de 6 a 11, cerca del 5,9 %. El grupo más grande es el de 60 años y más, con 35 219 personas.',
            'Por eso esta página mira especialmente a secundaria. Un adolescente de La Molina en vacaciones tiene tiempo, suele tener computadora en casa y está a pocos años de decidir qué estudiar: es el momento ideal para probar si la programación le gusta.'
          ],
          rightH3: 'Dónde queda La Molina',
          right: [
            'Está al este de Lima Metropolitana, cuya provincia agrupa 43 distritos. Sus vecinos son Ate, Cieneguilla, Pachacámac, Villa María del Triunfo y Santiago de Surco.',
            'Es un distrito de valle rodeado de cerros, con urbanizaciones extendidas y pocas vías de salida hacia el resto de Lima. Esa geografía explica por qué tantas familias molinenses prefieren actividades cerca de casa, o directamente en casa.'
          ] }
      ]
    },
    {
      id: 'en-casa',
      eyebrow: 'Sin salir del distrito',
      h2: '¿Vale la pena una clase en línea si vivimos en La Molina?',
      lede: 'Sí, y por una razón muy molinense: salir del distrito toma tiempo. Una clase en vivo por videollamada se toma en la sala o en el cuarto, sin manejar a ninguna academia en otro distrito.',
      body: [
        { kind: 'two',
          leftH3: 'Lo que se ahorra',
          left: [
            'No damos cifras de tráfico porque no las necesitamos: cualquier familia que baja todos los días por las avenidas que conectan La Molina con el resto de Lima sabe lo que cuesta una salida a media tarde. Una clase en casa elimina el viaje de ida, la espera y el viaje de vuelta.',
            'También elimina la coordinación. Si un padre trabaja fuera del distrito, nadie tiene que salir antes para recoger a un hijo; el adolescente se conecta solo, a su hora.'
          ],
          rightH3: 'Lo que hace falta en casa',
          right: [
            'Una computadora con teclado, cámara y micrófono, y una conexión estable. Para el INEI, entre abril y junio de 2026 tenían internet 84,7 de cada 100 hogares de Lima Metropolitana (donde cuenta también al Callao), y lo usaban 92,5 de cada 100 chicos peruanos de 12 a 18 años.',
            'El celular, en cambio, no sirve para programar: la pantalla es chica y sin teclado escribir código es frustrante. Una laptop compartida alcanza.'
          ] },
        { kind: 'p', mt: true, html: 'La clase en línea, además, no le quita al adolescente el verano de afuera. Puede ir por la mañana al taller deportivo de la municipalidad y conectarse por la tarde. Lo que importa es que la clase sea en vivo: el mentor mira la pantalla compartida, pregunta, espera y corrige en el momento, algo que un curso grabado no hace.' }
      ]
    },
    {
      id: 'secundaria',
      eyebrow: 'Adolescentes',
      h2: '¿Qué puede aprender un adolescente de secundaria en unas vacaciones?',
      lede: 'Lo suficiente para saber si la programación es lo suyo, y bastante más si sigue en marzo. Este es el recorrido que proponemos para un primer verano en secundaria; es un plan nuestro, no un programa cerrado.',
      body: [
        { kind: 'ol', items: [
          '<strong>Primer tramo: pensar como la computadora.</strong> Variables, entradas y decisiones con <code>if</code>. El adolescente escribe un programa que le pregunta su nota y le dice cuánto le falta para el promedio que quiere.',
          '<strong>Segundo tramo: listas y repeticiones.</strong> Lo que en Excel es una columna, en Python es una lista. Recorrerla con un bucle, sumar, buscar el mayor y el menor.',
          '<strong>Tercer tramo: datos de verdad.</strong> Trabajar con cifras publicadas, como las del censo de su distrito, y descubrir los problemas que traen: textos que parecen números, totales que no se deben sumar, columnas mal copiadas.',
          '<strong>Cuarto tramo: un proyecto propio.</strong> Una web sencilla con JavaScript, un juego, o un programa que resuelva algo de su vida escolar. Al final lo explica en inglés ante su mentor.'
        ] },
        { kind: 'source', html: 'Recorrido sugerido por nuestros mentores. Cada tramo dura lo que el estudiante necesite; el punto de partida se decide en la clase gratis.' },
        { kind: 'two', mt: true,
          leftH3: 'Si su hijo piensa en la universidad',
          left: [
            'En la oferta de verano 2026 de la municipalidad figuraba la preparación preuniversitaria. Nosotros no preparamos exámenes de admisión, que en el Perú se rinden en castellano, y no prometemos ingresos. Lo que sí hacemos es enseñar a razonar con datos y lógica, en inglés, algo que sirve en cualquier carrera.',
            'Para un adolescente indeciso, un verano programando es una forma de averiguar, con poco riesgo, si le gustaría una carrera de ingeniería, ciencia de datos o computación, antes de matricularse en ella.'
          ],
          rightH3: 'Y la IA',
          right: [
            'Los adolescentes ya usan herramientas de IA. En clase las usamos solo si son apropiadas para su edad y después de que el estudiante resolvió el problema por su cuenta: ChatGPT, por ejemplo, pide permiso de los padres a los menores de 18, y Claude es solo para mayores de edad.',
            'La meta es que la IA sirva para revisar un razonamiento, no para reemplazarlo. Un estudiante que entiende su propio código detecta cuándo la herramienta se equivoca.'
          ] }
      ]
    },
    {
      id: 'de-excel-a-python',
      tint: 'tint',
      eyebrow: 'Una clase de ejemplo',
      h2: '¿Cómo se pasa de una hoja de Excel a un programa en Python?',
      lede: 'Con cuidado, porque los datos copiados de una hoja de cálculo a veces llegan como texto. Esta lección es nuestra y la usamos con adolescentes de 12 a 15 años. Los datos son reales: los grupos de edad de La Molina en el censo 2025, tal como aparecen en la tabla de arriba.',
      body: [
        { kind: 'code', label: 'Versión 1: los datos llegaron como texto', lang: 'Python', code: V1, note: 'Las cifras están entre comillas, como pasa cuando una columna de Excel tiene formato de texto. El mentor pregunta en inglés: "Which age group is the largest?" Mirando la tabla, todos dicen 60 años y más.' },
        { kind: 'code', label: 'Salida de la versión 1', lang: 'Salida', code: OUT1, note: 'Resultado literal de correr el programa nosotros mismos con Python 3. Según el programa, el mayor es 8435, y en la lista ordenada el 5042 aparece al final.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Notar lo imposible.</strong> 8 435 no puede ser mayor que 35 219. El estudiante lo dice en inglés: "8435 is not the largest, the program is comparing something else."',
          '<strong>Leer como lo hace Python.</strong> Entre textos, Python compara carácter por carácter, como en un diccionario. "8435" empieza con 8, y ningún otro texto empieza con un carácter mayor, así que "gana". Por la misma razón "10681" va primero al ordenar: empieza con 1.',
          '<strong>Convertir antes de comparar.</strong> <code>int(p)</code> transforma cada texto en un número entero. Una sola línea con una lista por comprensión convierte toda la columna.',
          '<strong>Comprobar con la fuente.</strong> El resultado corregido debe coincidir con la tabla del INEI. Si no coincide, el error sigue en el programa o en la copia de los datos.'
        ] },
        { kind: 'code', label: 'Versión 2: convertir a números', lang: 'Python', code: V2, note: '<code>numeros.index(mayor)</code> devuelve la posición del mayor, y con esa posición se busca su nombre en <code>grupos</code>: dos listas paralelas, como dos columnas de la misma hoja.' },
        { kind: 'code', label: 'Salida de la versión 2', lang: 'Salida', code: OUT2, note: 'También es la salida literal de nuestra ejecución. Ahora el mayor es 35 219, el grupo de 60 años y más, como en la tabla del censo.' },
        { kind: 'p', mt: true, html: 'Fíjese en lo que el programa no hace: no suma los grupos para inventar un total. El INEI ya publica el total censado, 143 899, y la regla en clase es usar el total publicado en lugar de fabricar uno. Esa es la diferencia entre usar una herramienta y entender los datos, y la razón por la que en nuestras clases el estudiante predice, ejecuta y compara antes de dar algo por bueno. Una IA puede ordenar la lista en un segundo; lo que enseñamos es a darse cuenta cuando el orden no tiene sentido.' }
      ]
    },
    {
      id: 'idioma',
      eyebrow: 'Idioma de las clases',
      h2: '¿Por qué las clases son en inglés y no en español?',
      lede: 'Porque así enseñamos en todo el mundo: cada clase es en vivo, en línea y únicamente en inglés, con mentores que viven en la India. Para un escolar de La Molina eso suma: programación y práctica oral del idioma en la misma sesión.',
      body: [
        { kind: 'two',
          leftH3: 'Qué esperar en las primeras semanas',
          left: [
            'El mentor habla con frases cortas, repite de otra manera y muestra en pantalla lo que explica. Las dos o tres primeras semanas son de adaptación al acento, y en vacaciones esa adaptación es más fácil porque no compite con tareas ni exámenes.',
            'El vocabulario técnico ya está en inglés: <code>print</code>, <code>int</code>, <code>sorted</code>, <code>max</code>. Oírlo en una explicación, y no solo leerlo en la pantalla, ayuda a fijarlo.'
          ],
          rightH3: 'El punto de partida en Lima',
          right: [
            'En el EF EPI 2025, el índice anual de dominio del inglés de EF, Lima obtuvo 555 puntos y quedó en el nivel "Alto", que empieza en 550; ninguna otra ciudad peruana llegó a ese nivel. Es una medición de adultos, pero dice algo del entorno: en muchos hogares limeños el inglés ya se lee.',
            'Lo que suele faltar es hablarlo con soltura, y una clase de programación obliga a hacerlo: explicar un error, pedir ayuda, contar qué cambió.'
          ] },
        { kind: 'p', mt: true, html: 'Si su familia busca en concreto programación en inglés en Lima, nuestra página de <a class="ag-inline-link" href="/english-medium-coding-classes-lima">clases de programación en inglés para Lima</a> lo explica para colegios bilingües, Cambridge e IB. Si tiene hijos más chicos en primaria, le servirá la guía de <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">programación para niños en inglés</a>.' }
      ]
    },
    {
      id: 'fechas',
      eyebrow: 'Calendario',
      h2: '¿Desde cuándo pueden empezar las vacaciones útiles?',
      lede: 'Desde que termina el colegio. En 2026, el último bloque de clases fijado por el MINEDU en la RM 501-2025 fue del 19 de octubre al 18 de diciembre de 2026, de modo que desde la semana de Navidad su hijo tiene tiempo libre.',
      body: [
        { kind: 'p', html: 'La fecha de regreso en marzo de 2027 todavía no se conoce, porque el MINEDU aún no había publicado en gob.pe la norma del año escolar 2027 cuando la buscamos, el 8 de noviembre de 2026. Por eso no le ofrecemos un taller con fecha de cierre. Su hijo toma la clase gratis en diciembre, empieza el curso cuando quiera y, al volver el colegio, decide con usted si mantiene el ritmo, si lo reduce o si se toma un descanso.' },
        { kind: 'source', html: 'La fecha sale de la Tabla 1 de la RM 501-2025-MINEDU, que comprobamos mirando la página escaneada del documento firmado el 9 de noviembre de 2026. Cada colegio privado ajusta su propio calendario dentro de ese marco.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Hora de La Molina y hora de la India (conversiones de ejemplo, no un horario)', head: ['Hora de Perú', 'Hora de la India', 'Día en la India'], rows: [
          ['7:00 a. m.', '5:30 p. m.', 'El mismo día'],
          ['10:30 a. m.', '9:00 p. m.', 'El mismo día'],
          ['2:00 p. m.', '12:30 a. m.', 'El día siguiente'],
          ['5:30 p. m.', '4:00 a. m.', 'El día siguiente']
        ] },
        { kind: 'source', html: 'Perú está en UTC-5 durante todo el año y no cambia la hora desde 1994; la India está en UTC+5:30. La diferencia es fija: 10 horas y 30 minutos (tzdata, zonas America/Lima y Asia/Kolkata; reloj oficial del INACAL, consultado el 8 de noviembre de 2026).' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Avance',
    h2: '¿En qué nivel está su hijo al terminar el verano?',
    lede: 'Ubicamos a cada estudiante en una escala propia de cinco escalones, de usar la computadora a crear programas.',
    table: { caption: 'De la computación a la programación: cinco escalones (escala nuestra)', head: ['Escalón', 'Qué domina', 'Señal de que ya llegó'], rows: [
      ['1. Usuario', 'Documentos, carpetas y el navegador', 'Guarda y encuentra sus archivos sin ayuda'],
      ['2. Hoja de cálculo', 'Fórmulas, promedios y gráficos en Excel', 'Arma una tabla con totales que se actualizan solos'],
      ['3. Primer código', 'Variables, decisiones y bucles', 'Escribe un programa corto y anticipa su salida'],
      ['4. Datos', 'Listas, conversión de tipos, comparación con la fuente', 'Detecta que "8435" no es un número'],
      ['5. Proyecto', 'Un programa o una web propia', 'Lo explica en inglés y responde preguntas']
    ] },
    left: { h3: 'Si usted es madre o padre', ps: [
      'El salto que más cuesta es del escalón 2 al 3: dejar de elegir opciones en un menú y empezar a escribir instrucciones. Es normal que tome varias semanas.',
      'Una buena pregunta para la cena: "¿qué error encontraste hoy?". Quien sabe contar un error que corrigió está aprendiendo a programar.'
    ] },
    right: { h3: 'Si usted es el estudiante', ps: [
      'Cuando un resultado no tenga sentido, sospeche del tipo de dato antes que de la matemática.',
      'Compare siempre con la fuente. Si el programa y la tabla no coinciden, alguien se equivocó.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más para escolares de La Molina',
    lede: 'Cada uno se dicta en tiempo real y en inglés, con un mentor fijo, en un grupo o de manera individual.',
    bands: [
      { num: 'I', h3: 'Primaria', sub: 'De 6 a 10 años', courses: [
        { code: 'VUPM / PRI / 01', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Razonamiento para los más chicos', blurb: 'Secuencias, patrones y lógica antes del primer bloque de código.' },
        { code: 'VUPM / PRI / 02', slug: 'scratch-programming-complete-course', title: 'Scratch desde cero', blurb: 'Animaciones y juegos con bloques que encajan como piezas.' },
        { code: 'VUPM / PRI / 03', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft con código', blurb: 'Automatizar construcciones dentro de un mundo conocido.' }
      ] },
      { num: 'II', h3: 'Transición', sub: 'De 10 a 13 años', courses: [
        { code: 'VUPM / TRA / 01', slug: 'python-ai-kids-masterclass', title: 'Python e IA para niños', blurb: 'Primer lenguaje escrito, con dibujos, juegos y algo de IA.' },
        { code: 'VUPM / TRA / 02', slug: 'godot-game-development-course-for-kids-and-teens', title: 'Videojuegos con Godot', blurb: 'Juegos en 2D y 3D con GDScript, desde los 10 años.' },
        { code: 'VUPM / TRA / 03', slug: 'ai-literacy-for-kids-course', title: 'Cómo funciona la IA', blurb: 'Qué hay detrás de una respuesta automática y cuándo falla.' }
      ] },
      { num: 'III', h3: 'Secundaria', sub: 'De 13 a 17 años', courses: [
        { code: 'VUPM / SEC / 01', slug: 'mysql-mastery-for-teens', title: 'Bases de datos con SQL', blurb: 'El paso siguiente a Excel: consultar datos con un lenguaje.' },
        { code: 'VUPM / SEC / 02', slug: 'frontend-development-masterclass-for-teens', title: 'Desarrollo web para adolescentes', blurb: 'CSS cuidado y primeras interfaces con React.' },
        { code: 'VUPM / SEC / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Resolución de problemas', blurb: 'Lógica, estructuras de datos y algoritmos, paso a paso.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo funcionan las clases en vivo en vacaciones?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Temprano', l: 'Antes del taller deportivo o de salir con la familia.' },
      { time: 'A media tarde', l: 'Cuando el adolescente ya volvió y almorzó.' },
      { time: 'Según su agenda', l: 'Clases individuales en los días y horas que usted indique.' }
    ],
    cells: [
      { h3: 'Mentor estable', p: 'La misma persona acompaña a su hijo de inicio a fin.' },
      { h3: 'Explicación visible', p: 'Todo lo que dice el mentor aparece también en pantalla.' },
      { h3: 'Código propio', p: 'El estudiante teclea, prueba y depura su programa.' },
      { h3: 'Datos reales', p: 'Ejercicios con cifras publicadas, no inventadas.' },
      { h3: 'Informe breve', p: 'Usted recibe lo trabajado y el siguiente objetivo.' },
      { h3: 'Grupo o individual', p: 'De quince a veinte de edad similar, o a solas con su mentor.' }
    ]
  },

  projectsH2: 'Lo que llegan a construir',
  projectsLede: 'Después de algunos veranos y años de práctica, nuestros estudiantes publican aplicaciones completas. Hay una selección abajo y más en <a class="ag-inline-link" href="/student-labs">Student labs</a>, en inglés.',
  reviewsLede: 'Opiniones publicadas en Google por familias y estudiantes, sin editar y en inglés.',

  fees: {
    h2: 'Precios para familias de La Molina',
    lede: 'El precio mensual se muestra en dólares de Estados Unidos y se cobra con tarjeta. La conversión a soles la hace su banco al tipo de cambio que aplique ese día, así que el monto final puede moverse un poco entre un mes y otro.',
    free: ['Una clase de prueba gratis', 'Una recomendación de curso y de nivel', 'Sin pedir tarjeta'],
    group: ['Entre quince y veinte escolares de edad similar', 'Un mismo mentor durante el curso', 'Dos sesiones en vivo por semana', 'Mensual, sin permanencia mínima'],
    one: ['Su hijo y su mentor, a solas', 'Contenidos al ritmo del estudiante', 'Horario fijado por la familia']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Vacaciones útiles de programación en La Molina: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Enseñamos solo en inglés, en vivo y en línea, y para muchos escolares de La Molina esa es la gracia: programan y hablan inglés en la misma hora. El mentor va despacio y se adapta a cada estudiante. Con 555 puntos, Lima figura en la banda alta del índice de inglés de EF de 2025; hablar es justo lo que una clase así más ejercita.' },
      { q: '¿Es lo mismo que el taller de computación de la municipalidad?', a: 'No. Un taller de computación enseña a usar Word o Excel; nosotros enseñamos sobre todo a programar, es decir, a escribir programas propios. Si su hijo de 7 a 12 años aún necesita soltura con la computadora, también tenemos un curso de Word, PowerPoint y Excel.' },
      { q: '¿Las clases son presenciales en La Molina?', a: 'No. Son clases en vivo por videollamada con mentores en la India; su hijo se conecta desde casa y no tiene que ir a ningún local.' },
      { q: '¿Desde qué edad se puede empezar?', a: 'Desde los 6 años con bloques y razonamiento. Entre los 9 y los 10 años la mayoría puede escribir Python, y un adolescente de secundaria puede empezar directamente con Python, JavaScript o SQL.' },
      { q: '¿Hasta qué fecha va el taller de verano?', a: 'No tiene fecha de cierre, porque no es un taller aparte. Al acabar el año escolar su hijo entra a un curso regular, el mismo que se dicta todo el año, y lo mantiene mientras a la familia le sirva; llegado marzo, ustedes deciden si sigue igual, si reduce el ritmo o si se detiene.' },
      { q: '¿En qué horario serían las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. La India está 10 horas y 30 minutos por delante de Perú: las 10:30 a. m. en La Molina son las 9:00 p. m. allá.' },
      { q: '¿Preparan para el examen de admisión a la universidad?', a: 'No. Los exámenes de admisión en el Perú se rinden en castellano y no prometemos ingresos. Enseñamos programación y razonamiento matemático en inglés, que ayudan en cualquier carrera, pero la preparación preuniversitaria es otra cosa.' },
      { q: '¿Usarán inteligencia artificial en clase?', a: 'Solo herramientas permitidas para la edad del estudiante y después de que resolvió el problema por su cuenta. La IA sirve para revisar un razonamiento, no para hacerlo por él.' },
      { q: '¿Tienen alguna relación con la municipalidad o con el colegio?', a: 'Ninguna. No estamos vinculados con la Municipalidad de La Molina, el MINEDU, las UGEL ni ningún colegio, y no damos notas escolares. Al completar un curso, el estudiante recibe un certificado de finalización de Modern Age Coders.' },
      { q: '¿Cómo se pagan las clases?', a: 'Con tarjeta, mensualmente y en dólares estadounidenses. Su banco convierte el cargo a soles. La clase de prueba es gratis y no pide datos de pago.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más páginas',
    h2: 'Otras lecturas útiles',
    lede: 'Páginas del sitio que ayudan a decidir el verano de un escolar, en su mayoría en inglés.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Todo lo que enseñamos en el Perú, por edades.' },
      { href: '/summer-coding-camp-teens', label: 'Summer coding for teens', p: 'Qué puede construir un adolescente en unas vacaciones.' },
      { href: '/we-teach-you-how-to-think', label: 'We teach you how to think', p: 'Por qué el razonamiento va antes que las herramientas.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'La edad mínima de cada herramienta de IA.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Cómo transcurre una clase en vivo con nosotros.' },
      { href: '/student-labs', label: 'Student labs', p: 'Proyectos reales de estudiantes.' }
    ]
  },

  start: {
    h2: 'Reserve la clase de prueba gratis',
    lede: 'Durante esa primera hora gratuita, el mentor le habla a su hijo en un inglés sencillo, le pide resolver un problema corto y escucha cómo lo piensa. Después le decimos si conviene empezar por computación o directamente por programación, y en qué curso y formato.',
    readFirst: 'Antes de reservar puede leer <a class="ag-inline-link" href="/how-we-teach">How we teach</a>, que describe una clase, o revisar los temarios en <a class="ag-inline-link" href="/courses">All courses</a> (ambas páginas en inglés).',
    note: 'Nuestros mentores enseñan desde la India, en directo y en inglés. Por WhatsApp contestamos antes, y puede escribirnos en castellano sin problema.',
    formNote: 'Gratis, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Cursos para el verano', links: [
        { href: '/courses/microsoft-office-kids-mastery', label: 'Computación para niños' },
        { href: '/courses/maths-through-coding', label: 'Matemática con código' },
        { href: '/courses/python-complete-masterclass-teens', label: 'Python para adolescentes' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Para decidir', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Clases en el Perú' },
        { href: '/we-teach-you-how-to-think', label: 'Aprender a pensar' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: 'Primero convertir, después comparar'
  },

  personalityCss: `
.ag-root.ag-vupm .ag-hero h1 { letter-spacing: -0.008em; max-width: 19ch; }
.ag-root.ag-vupm .ag-capsule { border-left-width: 3px; border-radius: 4px; }
.ag-root.ag-vupm .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-vupm .ag-table caption { text-align: left; letter-spacing: 0.01em; }
.ag-root.ag-vupm .ag-code-note code { font-weight: 700; }
`,

  dossier: {
    curriculumAuthority: 'Municipalidad Distrital de La Molina press notes N.° 365 (10 December 2025), N.° 380 (6 January 2026) and N.° 419 (15 April 2026) on gob.pe/institucion/munilamolina; INEI Censos Nacionales 2025 (Lima Metropolitana, Cuadros N.° 1 and 3); MINEDU CNEB (competency 28) and RM 501-2025 Tabla 1; INEI TIC en los Hogares II Trimestre 2026; EF EPI 2025; tzdata and INACAL. Read 8 and 9 November 2026. The comparison table, the five steps, the teen plan and the Python lesson are our own.',
    localProject: 'From Excel to Python with La Molina\'s own census: an original lesson for 12 to 15 year olds on the INEI 2025 age groups of the district, stored as text the way a spreadsheet column formatted as text exports them. Version 1 prints "Largest: 8435" and sorts \'10681\' first; Version 2 converts with int() and prints "Largest: 35219 in the group 60 y mas", the sorted numbers and "Smallest: 5042 in the group 0 a 5", then checks against the published table and refuses to add the groups into a home-made total. Lesson family: str versus int, comparing and sorting text that looks like numbers.',
    requiredMentions: ['Largest: 8435', 'Largest: 35219 in the group 60 y mas', 'Smallest: 5042 in the group 0 a 5', 'Molitalleres de Verano 2026', 'Molitalleres gratuitos de Computación', '8 435 niños de 6 a 11 años y 10 681 adolescentes de 12 a 17', 'Detecta que "8435" no es un número', 'Primero convertir, después comparar', '¿Computación y programación son lo mismo?'],
    sources: [
      { claim: 'Molitalleres de Verano 2026: start Monday 12 January; robotics for children and teens; computing, pre-university prep and maths reinforcement for teens and adults.', url: 'https://www.gob.pe/institucion/munilamolina/noticias/1328590-este-viernes-cierran-las-inscripciones-para-los-molitalleres-de-verano-2026' },
      { claim: 'Talleres Deportivos de Verano 2026: more than 30 specialities in 10 venues, ages 6 to 17 (10 December 2025).', url: 'https://www.gob.pe/institucion/munilamolina/noticias/1308761-empezaron-las-inscripciones-para-talleres-deportivos-de-verano-2026' },
      { claim: 'Free computing Molitalleres from Saturday 18 April 2026, ages 10 to 18, Word and Excel.', url: 'https://www.gob.pe/institucion/munilamolina/noticias/1379493-la-molina-lanza-moltalleres-gratuitos-de-computacion-para-ninos-y-jovenes' },
      { claim: 'La Molina 151,360 total, 143,899 censada, 7,461 omitida, 79,783 women, 71,577 men; censada by age group 5,042 / 8,435 / 10,681 / 24,793 / 29,245 / 30,484 / 35,219.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/27/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'CNEB competency 28 is transversal; no computing area.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Fourth teaching block 19 October to 18 December 2026.', url: 'https://cdn.www.gob.pe/uploads/document/file/8968298/7380466-rm-n-501-2025-minedu.pdf' },
      { claim: 'Lima Metropolitana 84.7% of households with internet; 92.5% of 12 to 18 year olds used the internet (II Trimestre 2026).', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'EF EPI 2025: Lima 555, High band from 550.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 all year; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Anything from www.munimolina.gob.pe: the site did not answer (code 000) on 9 November 2026; only the council\'s gob.pe institutional notes are used.',
      'Council workshop prices, addresses and phone numbers: in the notes, not repeated.',
      'Traffic or commute figures for La Molina: none; the page says only that classes at home need no travel.',
      'Pre-university or admission-exam preparation, or any admission promise: refused; the page says the exams are in Spanish and we do not prepare them.',
      'INEI planos estratificados income strata for La Molina: not used.',
      'Adding the age groups into a home-made total: refused, and the lesson makes that rule explicit.',
      'Affiliation with the Municipalidad de La Molina, MINEDU, a UGEL or a school; Spanish-language teaching; robot kits: none, and the page says so.'
    ]
  }
};
