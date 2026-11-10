// SHIP: market | Surco reinforces maths, comunicación and English; code in English works on two at once, any age | bisect: an age to its group, inclusive edges, bisect_left vs bisect_right
'use strict';
// Clases de programación en Surco (ag- Spanish district door, Peru cluster row PE138, P6, hubGroup cities).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md
// (rule "City and district pages"). Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08:
// timing flexible, any time. Formal "usted" throughout. Fees render in USD from the template only.
// Spine (year-round, all ages; differs from vacaciones-utiles-de-programacion-surco-lima, which planned one summer for
// several siblings): the Santiago de Surco council says it runs school reinforcement in maths, comunicación and English in
// its municipal libraries and inside schools with volunteers from seven universities. Programming taught in English works
// on maths reasoning and English in the same hour, so the page treats code as reforzamiento for escolares, then follows
// the large 18 to 29 group (universitarios) and adult entrepreneurs. Lesson: placing an age in its census group with bisect,
// where the edges decide everything.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/clases-de-programacion-surco/,
// gob.pe notes and searches fetched 2026-11-10; INEI, EF and timezone files copied from the research run of 2026-11-08):
//  - INEI Censos Nacionales 2025, Lima Metropolitana tabulado (inei/sheet2_CUADRO_N_1.tsv): "DISTRITO SANTIAGO DE SURCO
//    402074 188658 213416 386432 180941 205491 15642 7717 7925"; (inei/sheet4_CUADRO_N_3.tsv): "DISTRITO SANTIAGO DE SURCO
//    386432 15690 24155 28204 66470 85158 80647 86108"; column heads "De 0 a 5 años ... De 60 y más años".
//  - Municipalidad de Santiago de Surco on gob.pe (institucion/munisantiagodesurco):
//    n-1216723.txt, 5 Sep 2024: "El distrito surcano obtuvo el segundo lugar a nivel nacional en el “Torneo Escolar Aprende
//      con Eddu”"; "participaron más de 1600 escolares de todo el país y el objetivo es promover una mayor educación
//      financiera en las escuelas"; "el reforzamiento educativo en matemáticas, comunicación e inglés. Estas clases se dictan
//      en nuestras bibliotecas municipales, así como dentro de los colegios a través del voluntariado de siete
//      universidades." The pupil and school named in the note are not repeated.
//    n-1153180.txt, 17 May 2024: "Fueron 97 participantes de 14 centros educativos del distrito" (Municipio y Parlamento
//      Escolar 2024). Officials' names in the note are not repeated.
//    n-1216722.txt, 4 Sep 2024: "taller “Impulso Empresarial”, dirigido a la comunidad de Mypes surcanas"; "participarán 60
//      emprendedores surcanos"; "Las clases serán virtuales y presenciales".
//  - INEI, Boletín TIC II trimestre 2026 (inei_tic_iit2026.txt): "el 97,3% de la población de 19 a 24 años utilizó Internet,
//    seguido por el grupo de 25 a 40 años con un 95,2% y el de 12 a 18 años con un 92,5%"; "el 91,3% de las personas con
//    educación secundaria utilizó Internet".
//  - EF EPI 2025 (ef_peru.txt): Lima 555, High from 550.
//  - Time (timezone.tsv): Peru UTC-5 all year, India UTC+5:30.
//  - Neighbouring districts, plain text: Miraflores, Surquillo, San Borja, Ate, La Molina, San Juan de Miraflores,
//    Chorrillos, Barranco.
// Our own calculations (python3 -I): 24155 + 28204 = 52359 aged 6 to 17; 52359 / 386432 = 13.55%; 66470 / 386432 = 17.20%
//   (18 to 29); 86108 / 386432 = 22.28% (60 and over); 402074 / 10141775 = 3.96% of Lima Metropolitana's population.
// Our own example (surco_v1.py, surco_v2.py), exact output: v1 (bisect_left) "6 -> 0 a 5", "12 -> 6 a 11", "18 -> 12 a 17",
//   "45 -> 30 a 44"; v2 (bisect_right) "6 -> 6 a 11", "12 -> 12 a 17", "18 -> 18 a 29", "45 -> 45 a 59", "67 -> 60 y mas".
// Lesson family: binary search with the bisect module to place a value in a band; boundaries are where the bug hides;
// test exactly the edge values.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const HEAD = [
  "limites = [6, 12, 18, 30, 45, 60]",
  "grupos = ['0 a 5', '6 a 11', '12 a 17', '18 a 29', '30 a 44', '45 a 59', '60 y mas']",
  '',
  'for edad in [5, 6, 11, 12, 17, 18, 44, 45, 67]:'
];

const V1 = ['from bisect import bisect_left', ''].concat(HEAD, ["    print(edad, '->', grupos[bisect_left(limites, edad)])"]).join('\n');
const V2 = ['from bisect import bisect_right', ''].concat(HEAD, ["    print(edad, '->', grupos[bisect_right(limites, edad)])"]).join('\n');

const OUT1 = ['5 -> 0 a 5', '6 -> 0 a 5', '11 -> 6 a 11', '12 -> 6 a 11', '17 -> 12 a 17', '18 -> 12 a 17', '44 -> 30 a 44', '45 -> 30 a 44', '67 -> 60 y mas'].join('\n');
const OUT2 = ['5 -> 0 a 5', '6 -> 6 a 11', '11 -> 6 a 11', '12 -> 12 a 17', '17 -> 12 a 17', '18 -> 18 a 29', '44 -> 30 a 44', '45 -> 45 a 59', '67 -> 60 y mas'].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'cities', label: 'Programación en Surco' },
  slug: 'clases-de-programacion-surco',
  code: 'psu',
  accent: '#861501',
  accentRationale: 'Clases de programación en Surco: a brick red #861501, the colour of the adobe walls of the old Surco Pueblo and its plaza, the deepest red of the Lima district doors; contrast checked by the build on the paper #FBF8F2 and its tints (alloc.tsv)',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Clases de programación en Surco',
  title: 'Clases de programación en Surco, en vivo y en inglés',
  description: 'Clases de programación en Surco para escolares, universitarios y adultos: en vivo, en línea y en inglés, como reforzamiento de matemática e inglés, todo el año.',
  ogDescription: 'Surco refuerza matemática, comunicación e inglés con voluntarios universitarios. Programar en inglés trabaja dos de esas tres cosas a la vez. Clases en vivo para cada edad.',
  twitterDescription: 'Programación en vivo y en inglés para Santiago de Surco: escolares, universitarios y adultos, todo el año.',
  pageName: 'Clases de programación en Surco',
  webPageDescription: 'Guía para familias y vecinos de Santiago de Surco que buscan clases de programación durante el año, dictadas en vivo, en línea y en inglés: cómo encaja la programación con el reforzamiento de matemática, comunicación e inglés que la municipalidad describe en gob.pe, la población del distrito por edades según los Censos Nacionales 2025 del INEI, rutas para escolares, universitarios y adultos, y una clase de ejemplo en Python, escrita por nosotros, que ubica cada edad en su grupo del censo.',
  courseDescription: 'Clases en vivo y en línea de programación, matemática con código e inteligencia artificial para vecinos de Santiago de Surco, de los 6 años a la edad adulta, dictadas solo en inglés: Python, resolución de problemas, ciencia de datos y desarrollo web, en grupos de quince a veinte o individuales, durante todo el año.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Programación en Surco',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#refuerzo', label: 'Reforzamiento' },
    { href: '#surcanos', label: 'Censo 2025' },
    { href: '#universitarios', label: 'Universidad' },
    { href: '#bordes', label: 'Ejemplo' },
    { href: '#franja', label: 'Hora' }
  ],
  eyebrow: 'Santiago de Surco &middot; Programación como reforzamiento &middot; Escolares y adultos',
  h1: 'Clases de programación en Surco que también refuerzan matemática e inglés',
  lede: 'Muchas familias de Surco buscan reforzamiento para el colegio: matemática que no termina de salir, un inglés que se entiende pero no se habla. La propia municipalidad organiza clases de refuerzo en esas materias. La programación en inglés no reemplaza ese refuerzo, pero trabaja dos de sus piezas en la misma hora. Aquí explicamos cómo, con datos del censo de 2025, rutas para escolares, universitarios y adultos, y una lección real donde un solo número fuera de lugar cambia el resultado.',
  secondaryCta: { href: '#refuerzo', label: 'Cómo refuerza la programación' },
  wa: 'Hola Modern Age Coders, somos de Surco y buscamos clases de programación en inglés. ¿Se puede reservar una clase gratuita?',
  heroNote: 'Clases en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; todo en inglés, sin prisa',
  spec: [
    ['Distrito', 'Santiago de Surco, Lima Metropolitana'],
    ['Escolares', 'De 6 a 17 años, de primaria a 5° de secundaria'],
    ['Adultos', 'Universitarios, profesionales y emprendedores'],
    ['Modalidad', 'En vivo por internet, todo el año'],
    ['Formato', 'Grupo de quince a veinte, o individual'],
    ['Primera sesión', 'Gratis, sin tarjeta']
  ],
  capsuleQ: 'La respuesta corta',
  capsule: 'Sí: un surcano de cualquier edad puede aprender a programar con Modern Age Coders, en vivo, en línea y en inglés, cualquier mes del año, desde primaria hasta la universidad o el trabajo. Para un escolar funcionan como reforzamiento: cada problema de código exige razonamiento matemático, y cada explicación se da en inglés. Para un adulto, son Python, datos o desarrollo web aplicados a su trabajo. Enseña un mentor desde la India, con un inglés claro que se ajusta al alumno, en grupo o a solas y en el horario que usted decida.',

  picks: {
    eyebrow: 'Primeros pasos',
    h2: 'Tres cursos que refuerzan mientras enseñan a programar',
    lede: 'Uno donde la matemática se aprende escribiendo código, uno de lógica y algoritmos para secundaria, y uno de datos para quien ya terminó el colegio.',
    items: [
      { course: 'maths-through-coding', code: 'PSU / 01', title: 'Matemática a través del código', alt: 'Imagen del curso de matemática a través del código', note: 'Para chicos de 10 a 15. Fracciones, patrones, porcentajes y geometría resueltos en Python: el número deja de ser abstracto cuando el programa lo calcula.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'PSU / 02', title: 'Resolución de problemas y algoritmos', alt: 'Imagen del curso de resolución de problemas para adolescentes', note: 'Para secundaria. Lógica, búsquedas, ordenamientos y estructuras de datos, con problemas que primero se piensan en papel y luego se programan.' },
      { course: 'data-science-complete-masterclass-college', code: 'PSU / 03', title: 'Ciencia de datos', alt: 'Imagen del curso de ciencia de datos', note: 'Para universitarios y adultos. Python, tablas, gráficos y primeros modelos, con datos reales y la costumbre de comprobar cada cifra.' }
    ]
  },

  sections: [
    {
      id: 'refuerzo',
      eyebrow: 'Reforzamiento',
      h2: '¿La programación sirve como reforzamiento escolar?',
      lede: 'Sirve para dos de las tres materias que más se refuerzan. No es una clase de matemática ni una de inglés, pero un problema de programación obliga a razonar con números y a explicarse en inglés, y eso se nota en el colegio.',
      body: [
        { kind: 'p', html: 'La Municipalidad de Santiago de Surco describe, en una nota del 5 de setiembre de 2024, su "reforzamiento educativo en matemáticas, comunicación e inglés", y añade que esas clases "se dictan en nuestras bibliotecas municipales, así como dentro de los colegios a través del voluntariado de siete universidades". La misma nota cuenta que el distrito obtuvo el segundo lugar nacional en un torneo escolar de educación financiera en el que participaron más de 1,600 escolares de todo el país. Es una señal de que en Surco el refuerzo se toma en serio.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Las tres materias de refuerzo que menciona la municipalidad, y qué aporta una clase de programación en inglés (comparación nuestra)', head: ['Materia que refuerza el distrito', 'Qué se practica al programar', 'Ejemplo en clase'], rows: [
          ['Matemáticas', 'Variables, operaciones, desigualdades, porcentajes, intervalos', 'Decidir si la edad 12 cae en el grupo "6 a 11" o en el "12 a 17"'],
          ['Inglés', 'Leer instrucciones, explicar en voz alta, entender mensajes de error', 'Traducir "index out of range" y decir qué lo causó'],
          ['Comunicación', 'Ordenar una explicación, escribir comentarios claros', 'Contar a otro alumno, en tres frases, qué hace su programa']
        ] },
        { kind: 'source', html: 'Primera columna: Municipalidad Distrital de Santiago de Surco, nota "Surco destaca a nivel nacional en el Torneo Escolar \'Aprende con Eddu\'", gob.pe, 5 de setiembre de 2024, leída el 10 de noviembre de 2026. La segunda y tercera columnas son nuestras. No tenemos ningún vínculo con la municipalidad, con las universidades voluntarias ni con el torneo.' },
        { kind: 'p', mt: true, html: 'Nuestras clases acompañan al colegio, no lo sustituyen, y no ponen notas escolares. Lo que sí ocurre a menudo es que un alumno de 2° o 3° de secundaria que programa dos veces por semana empieza a ver las inecuaciones y los porcentajes como herramientas, porque los usa para que su juego o su análisis funcione. Si su hijo necesita refuerzo de matemática puro, tenemos también clases de <a class="ag-inline-link" href="/razonamiento-matematico-clases-online-peru">razonamiento matemático en línea</a>.' }
      ]
    },
    {
      id: 'surcanos',
      eyebrow: 'Surco en el censo',
      h2: '¿Cuántos escolares y jóvenes viven en Santiago de Surco?',
      lede: 'Santiago de Surco tiene 402,074 habitantes según los Censos Nacionales 2025, cerca del 4 % de toda Lima Metropolitana (cálculo nuestro). Entre sus censados hay 52,359 personas de 6 a 17 años en edad escolar.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Santiago de Surco: población censada por grupo de edad y porcentaje del distrito, 2025', head: ['Grupo de edad (INEI)', 'Surcanos censados', 'Porcentaje del distrito'], rows: [
          ['De 0 a 5 años', '15,690', '4.1 %'],
          ['De 6 a 11 años', '24,155', '6.3 %'],
          ['De 12 a 17 años', '28,204', '7.3 %'],
          ['De 18 a 29 años', '66,470', '17.2 %'],
          ['De 30 a 44 años', '85,158', '22.0 %'],
          ['De 45 a 59 años', '80,647', '20.9 %'],
          ['De 60 y más años', '86,108', '22.3 %'],
          ['Total de censados', '386,432', '100 %']
        ] },
        { kind: 'source', html: 'Datos: Instituto Nacional de Estadística e Informática, Censos Nacionales 2025, tabulado de Lima Metropolitana, Cuadro N.° 3, que desagrega por edad solo a la población censada. La cifra de 402,074 habitantes viene del Cuadro N.° 1 y suma censados (386,432) y omitidos (15,642). Porcentajes calculados por nosotros sobre el total censado.' },
        { kind: 'two', mt: true,
          leftH3: 'Muchos chicos en secundaria',
          left: [
            'Hay más surcanos censados en el tramo de 12 a 17 (28,204) que en el de 6 a 11 (24,155). Es la edad de la secundaria, en la que la matemática se vuelve más abstracta y el refuerzo más pedido.',
            'En la nota de mayo de 2024 sobre su Municipio y Parlamento Escolar, la municipalidad cuenta 97 participantes de 14 centros educativos del distrito: hay escolares surcanos que ya quieren organizar y proponer, no solo asistir.'
          ],
          rightH3: 'Y muchos jóvenes después',
          right: [
            'El grupo de 18 a 29 años suma 66,470 personas, el 17.2 % del distrito. Son universitarios, institutos y primeros empleos: la edad en que aprender a programar en inglés se convierte en ventaja laboral.',
            'Surco limita con Miraflores, Surquillo, San Borja, Ate, La Molina, San Juan de Miraflores, Chorrillos y Barranco, varios de ellos con universidades e institutos cerca. Desde cualquiera de esos distritos la clase se toma igual.'
          ] }
      ]
    },
    {
      id: 'escolares',
      eyebrow: 'Primaria y secundaria',
      h2: '¿Qué programación puede aprender un escolar de Surco según su grado?',
      lede: 'La edad orienta, pero manda lo que el alumno ya sabe hacer. Esta es la secuencia que solemos seguir, ajustada por el mentor en la clase de prueba.',
      body: [
        { kind: 'table', numCols: [], caption: 'Secuencia orientativa por grado escolar (nuestra)', head: ['Grado', 'Herramienta', 'Lo que refuerza de paso'], rows: [
          ['1° a 3° de primaria', 'Scratch con historias y juegos', 'Orden, secuencia y vocabulario básico en inglés'],
          ['4° a 6° de primaria', 'Python con dibujos, o páginas web', 'Multiplicación, coordenadas, lectura de instrucciones'],
          ['1° y 2° de secundaria', 'Python con listas y funciones', 'Variables y ecuaciones con sentido práctico'],
          ['3° y 4° de secundaria', 'Algoritmos, datos, JavaScript o Java', 'Desigualdades, porcentajes, funciones'],
          ['5° de secundaria', 'Proyecto propio o preparación técnica', 'Razonamiento para exámenes y explicación oral en inglés']
        ] },
        { kind: 'source', html: 'Secuencia elaborada por Modern Age Coders. No corresponde a ningún plan oficial del Ministerio de Educación y no otorga notas ni créditos escolares.' },
        { kind: 'p', mt: true, html: 'Para 5° de secundaria hay una pregunta frecuente: si sirve para el examen de admisión. Las pruebas de ingreso de las universidades peruanas se rinden en castellano y nadie honesto puede garantizar una vacante; nosotros tampoco. Practicamos, eso sí, problemas de razonamiento en inglés, que ejercitan el mismo músculo. Si su hijo ya decidió que lo suyo es el código, tenemos una guía de <a class="ag-inline-link" href="/clases-de-programacion-para-adolescentes-peru">clases de programación para adolescentes</a> con más detalle.' }
      ]
    },
    {
      id: 'universitarios',
      eyebrow: 'Después del colegio',
      h2: '¿Y si ya estoy en la universidad o trabajo en Surco?',
      lede: 'Entonces la clase deja de ser refuerzo y pasa a ser oficio. El grupo de 18 a 29 años es el segundo más grande del distrito, y es el que más pregunta por Python, datos y desarrollo web.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Universitarios', p: 'Repasar en inglés lo que la carrera enseña en castellano: Java, Python, estructuras de datos, bases de datos. Con un mentor que no avanza hasta que usted entiende, y que corrige su código como lo haría un equipo de trabajo.' },
          { h3: 'Profesionales', p: 'Automatizar el reporte semanal, cruzar dos tablas sin copiar y pegar, armar un tablero. Un adulto que trabaja suele ver el primer resultado útil en las primeras semanas.' },
          { h3: 'Emprendedores', p: 'Una página de reservas, una tienda sencilla, un formulario que guarda pedidos. Construir la primera versión uno mismo ayuda a saber qué pedir después.' }
        ] },
        { kind: 'p', mt: true, html: 'La municipalidad trabaja también con emprendedores: en setiembre de 2024 anunció con la universidad ESAN el taller "Impulso Empresarial" para 60 emprendedores surcanos, con clases virtuales y presenciales. Es otra muestra de que en Surco la formación de adultos ya pasó por la pantalla. Nosotros no damos asesoría de negocios; enseñamos a construir el software.' },
        { kind: 'p', html: 'Un dato del INEI explica por qué este grupo aprende bien en línea: en el segundo trimestre de 2026, el 97,3 % de la población de 19 a 24 años del país usó internet, y el 95,2 % de la de 25 a 40. Son las edades más conectadas del Perú; la diferencia está en usar esa conexión para producir algo propio.' }
      ]
    },
    {
      id: 'bordes',
      tint: 'tint',
      eyebrow: 'Una lección de ejemplo',
      h2: '¿Cómo ubica un programa una edad en su grupo del censo?',
      lede: 'Con búsqueda binaria, y con mucho cuidado en los bordes. Este ejercicio es nuestro: tomamos los límites de los grupos de edad del Cuadro N.° 3 y pedimos al programa que diga a qué grupo pertenece cada edad. Es matemática de intervalos y programación al mismo tiempo, ideal para secundaria.',
      body: [
        { kind: 'code', label: 'Primer intento, con bisect_left', lang: 'Python', code: V1, note: 'La lista <code>limites</code> guarda la edad con la que empieza cada grupo a partir del segundo. <code>bisect_left</code> busca dónde encajaría la edad dentro de esa lista ordenada.' },
        { kind: 'code', label: 'Resultado del primer intento', lang: 'Salida', code: OUT1, note: 'Salida exacta con python3. Fíjese en las edades 6, 12, 18 y 45: todas caen un grupo antes del que les corresponde.' },
        { kind: 'code', label: 'Segundo intento, con bisect_right', lang: 'Python', code: V2, note: 'Cambia una sola palabra. <code>bisect_right</code> coloca la edad después de cualquier límite igual a ella.' },
        { kind: 'code', label: 'Resultado del segundo intento', lang: 'Salida', code: OUT2, note: 'Salida exacta con python3. Ahora 6 va a "6 a 11", 12 a "12 a 17" y 45 a "45 a 59", como en la tabla del INEI.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Escribir el intervalo como en matemática.</strong> El grupo "6 a 11" es 6 &le; edad &lt; 12: cerrado a la izquierda, abierto a la derecha. El alumno lo escribe en su cuaderno antes de tocar el código.',
          '<strong>Probar los bordes, no el medio.</strong> Las edades 5, 11, 17 y 44 salen bien en los dos intentos. El error solo aparece justo en los límites: 6, 12, 18, 45. Quien prueba con edades "cómodas" nunca lo ve.',
          '<strong>Explicar la diferencia en inglés.</strong> "bisect_left puts the age before an equal limit; bisect_right puts it after." Una frase, dicha en voz alta, que obliga a entender la idea y no solo a copiar.',
          '<strong>Contar los pasos.</strong> Con siete grupos da igual, pero si fueran un millón de límites, la búsqueda binaria seguiría necesitando solo unos veinte pasos, porque cada paso descarta la mitad. Es la misma idea de adivinar un número diciendo "mayor" o "menor".',
          '<strong>Llevarlo a la vida real.</strong> Tramos de notas, tarifas por peso, categorías por edad en un campeonato: siempre que hay tramos, hay bordes, y los bordes se prueban primero.'
        ] },
        { kind: 'p', mt: true, html: 'Esta lección refuerza la matemática de intervalos sin llamarse "clase de matemática", y por eso funciona con alumnos que dicen que los números no les gustan. También enseña algo que ninguna herramienta que da respuestas hechas enseña por sí sola: desconfiar de un programa que funciona con los casos fáciles y buscar el caso que lo rompe.' }
      ]
    },
    {
      id: 'en-casa',
      eyebrow: 'Sin salir del distrito',
      h2: '¿Por qué en línea y no en una academia cercana?',
      lede: 'Por el tiempo y por el mentor. Surco es grande, y una academia que queda "cerca" puede estar al otro lado del distrito o en uno vecino; una clase en vivo por internet empieza en el escritorio de su casa.',
      body: [
        { kind: 'two',
          leftH3: 'Lo que se ahorra',
          left: [
            'Los traslados de ida y vuelta, la espera mientras dura la clase y el estrés de llegar a tiempo en las horas más cargadas de Lima. No damos minutos, porque cada calle de Surco es un mundo; cada familia sabe cuánto le cuesta su propio recorrido.',
            'Para los escolares hay una ventaja más: después de la clase, la tarea sigue en la misma computadora, sin perder el hilo.'
          ],
          rightH3: 'Lo que se gana',
          right: [
            'Un mentor dedicado que ve su pantalla y su código en tiempo real. En una sala presencial con veinte computadoras, el profesor no siempre alcanza a mirar cada una.',
            'Según el INEI, en el segundo trimestre de 2026 el 92,5 % de los adolescentes de 12 a 18 años del país usó internet y el 91,3 % de las personas con educación secundaria también. La conexión ya está en casa; falta darle un uso que construya algo.'
          ] }
      ]
    },
    {
      id: 'franja',
      eyebrow: 'Horario',
      h2: '¿En qué horario se puede estudiar desde Surco?',
      lede: 'En el que usted elija. Como los mentores están en la India, conviene saber cómo se traduce la hora; la diferencia es de diez horas y media y no cambia en ninguna época del año.',
      body: [
        { kind: 'table', numCols: [], caption: 'Cuatro horas de Surco convertidas a la hora de la India (ejemplos de equivalencia, no franjas fijas)', head: ['Reloj en Surco', 'Reloj en la India', 'Para quién suele servir'], rows: [
          ['8:00 a. m.', '6:30 p. m., misma fecha', 'Universitarios con clases por la tarde'],
          ['12:30 p. m.', '11:00 p. m., misma fecha', 'Adultos en su pausa de mediodía'],
          ['3:30 p. m.', '2:00 a. m., fecha siguiente', 'Escolares que salen temprano del colegio'],
          ['7:30 p. m.', '6:00 a. m., fecha siguiente', 'Profesionales y emprendedores']
        ] },
        { kind: 'source', html: 'Zona horaria America/Lima (UTC-5, sin horario de verano) y Asia/Kolkata (UTC+5:30), según la base tzdata; el INACAL publica la hora oficial peruana con el mismo desfase. La tercera columna es nuestra.' },
        { kind: 'p', mt: true, html: 'Sobre el inglés del mentor: habla despacio, usa frases cortas y escribe en el chat las palabras clave. El EF EPI 2025 ubica a Lima en 555 puntos, en el nivel alto, así que muchos alumnos entienden más de lo que creen; la clase les da la ocasión de hablar.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Avance',
    h2: '¿Qué debería notar después de unos meses?',
    lede: 'Cinco logros propios que usamos para escolares y adultos. Cada uno se ve en el trabajo del alumno, no en una nota.',
    table: { caption: 'Cinco logros en programación, de menor a mayor (nuestros)', head: ['Logro', 'Cuándo suele llegar', 'Cómo se reconoce'], rows: [
      ['1. Razona en pasos', 'Primeras semanas', 'escribe en orden lo que el programa debe hacer antes de programarlo'],
      ['2. Prueba los bordes', 'Segundo mes', 'busca los valores límite, como en el ejemplo de los grupos de edad'],
      ['3. Explica en inglés', 'Tercer mes', 'cuenta en voz alta qué hace su código y por qué falló'],
      ['4. Usa estructuras', 'Cuarto a sexto mes', 'elige entre lista, diccionario o búsqueda según el problema'],
      ['5. Termina proyectos', 'Desde el sexto mes', 'entrega un trabajo propio que otra persona puede usar']
    ] },
    left: { h3: 'Para madres y padres', ps: [
      'Observe si su hijo empieza a usar palabras como "límite", "caso" o "prueba" para hablar de otras cosas. Es señal de que el razonamiento se está trasladando.',
      'Compare con el colegio a mediano plazo, no a la semana: el efecto del razonamiento en matemática tarda en verse.'
    ] },
    right: { h3: 'Para adultos', ps: [
      'Antes de dar por bueno un resultado, pruebe el caso más raro que se le ocurra.',
      'Lleve a clase un problema real de su trabajo; el mentor lo usará como proyecto.'
    ] }
  },

  catalogue: {
    eyebrow: 'Catálogo',
    h2: 'Nueve cursos más para Surco',
    lede: 'Con clases en vivo y en inglés y un mentor que lo sigue de principio a fin, en grupo o individual.',
    bands: [
      { num: 'I', h3: 'Primaria', sub: 'De 6 a 12 años', courses: [
        { code: 'PSU / PRIMARIA / 01', slug: 'kids-coding-blocks-masterclass', title: 'Bloques para empezar', blurb: 'Secuencias, bucles y eventos con bloques, de 6 a 12 años.' },
        { code: 'PSU / PRIMARIA / 02', slug: 'python-ai-kids-masterclass', title: 'Python con IA para primaria', blurb: 'Primeros programas escritos, desde los 9 años.' },
        { code: 'PSU / PRIMARIA / 03', slug: 'mental-maths-mastery-kids', title: 'Cálculo mental', blurb: 'Estrategias para operar rápido y con seguridad.' }
      ] },
      { num: 'II', h3: 'Secundaria', sub: 'De 13 a 18 años', courses: [
        { code: 'PSU / SECUNDARIA / 01', slug: 'python-complete-masterclass-teens', title: 'Python completo', blurb: 'De lo básico a proyectos con datos y juegos.' },
        { code: 'PSU / SECUNDARIA / 02', slug: 'complete-high-school-mathematics-mastery', title: 'Matemática de secundaria', blurb: 'Álgebra, funciones y más, en inglés y con paciencia.' },
        { code: 'PSU / SECUNDARIA / 03', slug: 'frontend-development-masterclass-for-teens', title: 'Desarrollo web frontend', blurb: 'Páginas modernas con HTML, CSS y JavaScript.' }
      ] },
      { num: 'III', h3: 'Universidad y trabajo', sub: 'Desde los 18 años', courses: [
        { code: 'PSU / ADULTOS / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python de cero a avanzado', blurb: 'Para quien empieza o quiere ordenar lo que ya sabe.' },
        { code: 'PSU / ADULTOS / 02', slug: 'statistics-probability-maths-course', title: 'Estadística y probabilidad', blurb: 'De los datos a la prueba de hipótesis.' },
        { code: 'PSU / ADULTOS / 03', slug: 'complete-app-development-masterclass-college', title: 'Desarrollo de apps', blurb: 'Una app de principio a fin, publicable.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Funcionamiento',
    h2: '¿Qué ocurre durante una sesión con el mentor?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Mañana', l: 'Para universitarios y quienes estudian en el turno tarde.' },
      { time: 'Tarde', l: 'Para escolares, tras el almuerzo.' },
      { time: 'Noche', l: 'Para quienes trabajan durante el día.' }
    ],
    cells: [
      { h3: 'Un solo mentor', p: 'Sabe en qué quedó la clase anterior y qué le cuesta.' },
      { h3: 'Pantalla a la vista', p: 'Comparte su código y el mentor lo revisa con usted.' },
      { h3: 'Piensa primero', p: 'Antes de escribir, el alumno predice qué va a pasar.' },
      { h3: 'Termina algo', p: 'Cada tramo acaba en un programa que funciona.' },
      { h3: 'Mensaje de cierre', p: 'Tras las sesiones, un resumen con lo trabajado.' },
      { h3: 'Dos formatos', p: 'Grupo de quince a veinte o sesiones individuales.' }
    ]
  },

  projectsH2: 'Trabajos de nuestros alumnos',
  projectsLede: 'Proyectos de estudiantes que empezaron como los suyos. Más ejemplos en <a class="ag-inline-link" href="/student-labs">Student labs</a> (en inglés).',
  reviewsLede: 'Comentarios de Google de familias y alumnos, reproducidos como los escribieron, en inglés.',

  fees: {
    h2: 'Precios para familias de Surco',
    lede: 'El precio figura en dólares de Estados Unidos y se cobra con tarjeta; su banco lo convierte a su moneda, de modo que el cargo en su estado de cuenta depende del tipo de cambio de esa fecha.',
    free: ['Una clase de prueba sin costo', 'Una recomendación honesta de curso', 'Sin tarjeta ni compromiso'],
    group: ['Entre quince y veinte alumnos de edad similar', 'Un mismo mentor para todo el curso', 'Dos clases en vivo a la semana', 'Pago mes a mes'],
    one: ['Usted o su hijo con el mentor, a solas', 'Temas elegidos según la necesidad', 'Días y horas a su medida']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Clases de programación en Surco: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No: el mentor enseña en inglés, en vivo y por internet, a todos los alumnos. Lejos de ser un obstáculo, para muchas familias de Surco es el atractivo, porque el chico refuerza inglés mientras programa. El mentor habla pausado y repite. Lima alcanza 555 puntos en el EF EPI 2025, un nivel alto.' },
      { q: '¿La programación ayuda con la matemática del colegio?', a: 'Ayuda con el razonamiento: intervalos, porcentajes, variables, funciones. No reemplaza las clases de matemática ni pone notas. Si su hijo necesita refuerzo de matemática como tal, también enseñamos razonamiento matemático en línea.' },
      { q: '¿Cuántos escolares hay en Santiago de Surco?', a: 'El Cuadro N.° 3 de los Censos Nacionales 2025 del INEI registra 24,155 niños de 6 a 11 años y 28,204 adolescentes de 12 a 17 entre los censados del distrito. El total de habitantes es 402,074.' },
      { q: '¿La Municipalidad de Surco dicta clases de programación?', a: 'En sus notas publicadas en gob.pe describe reforzamiento en matemáticas, comunicación e inglés en bibliotecas y colegios, no un curso de programación. No tenemos ninguna relación con la municipalidad.' },
      { q: '¿Desde qué edad pueden empezar?', a: 'Desde los 6 años con bloques. La matemática a través del código funciona bien de 10 a 15 años, y para adultos no hay límite.' },
      { q: '¿Sirve para el examen de admisión?', a: 'No preparamos el examen, que es en castellano, ni prometemos ingresos. Sí entrenamos el razonamiento matemático en inglés, útil para cualquier examen que pida pensar con orden.' },
      { q: '¿Cuándo son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. En la India el reloj marca diez horas y media más que en Perú, durante todo el año.' },
      { q: '¿Qué computadora necesita mi hijo?', a: 'Cualquier laptop o computadora con cámara, micrófono y buena conexión. Los programas son gratuitos y se instalan en la primera clase; con un celular no se programa cómodo.' },
      { q: '¿En qué moneda se cobra?', a: 'En dólares de Estados Unidos, con tarjeta; la conversión la aplica su banco. La clase de prueba es gratis y no pide datos de pago.' },
      { q: '¿Dan algún certificado?', a: 'Un certificado de finalización de Modern Age Coders al terminar cada curso. No es un documento del Ministerio de Educación ni cuenta como nota del colegio.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más lecturas',
    h2: 'Para seguir leyendo',
    lede: 'Guías relacionadas en castellano y en inglés.',
    items: [
      { href: '/vacaciones-utiles-de-programacion-surco-lima', label: 'Vacaciones útiles en Surco', p: 'Un plan de verano para hermanos de distintas edades.' },
      { href: '/clases-de-programacion-para-adolescentes-peru', label: 'Programación para adolescentes', p: 'Rutas para 1° a 5° de secundaria.' },
      { href: '/razonamiento-matematico-clases-online-peru', label: 'Razonamiento matemático', p: 'Clases en línea de razonamiento, en inglés.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'El índice de todas las guías para el Perú.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Nuestra forma de enseñar, en inglés.' },
      { href: '/courses', label: 'All courses', p: 'Cada curso disponible, por edad.' }
    ]
  },

  start: {
    h2: 'Pida una clase de prueba desde Surco',
    lede: 'En esa primera sesión el mentor charla con el alumno en un inglés sencillo, le da un reto corto y observa cómo lo piensa. Después le proponemos un curso y un formato, sin presión.',
    readFirst: 'Dos lecturas previas, en inglés: <a class="ag-inline-link" href="/how-we-teach">How we teach</a>, sobre nuestras clases, y <a class="ag-inline-link" href="/courses">All courses</a>, con el catálogo.',
    note: 'Enseñamos en tiempo real y por internet, desde la India y solo en inglés. Si quiere preguntar algo antes, escríbanos por WhatsApp en castellano.',
    formNote: 'Gratis, sin pedir tarjeta.'
  },

  footer: {
    cols: [
      { h4: 'Cursos para empezar', links: [
        { href: '/courses/maths-through-coding', label: 'Matemática con código' },
        { href: '/courses/problem-solving-dsa-masterclass-teens', label: 'Algoritmos para secundaria' },
        { href: '/courses/data-science-complete-masterclass-college', label: 'Ciencia de datos' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Guías', links: [
        { href: '/clases-de-programacion-para-adolescentes-peru', label: 'Adolescentes' },
        { href: '/razonamiento-matematico-clases-online-peru', label: 'Razonamiento matemático' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: 'Los bordes se prueban primero'
  },

  personalityCss: `
.ag-root.ag-psu .ag-hero h1 { max-width: 23ch; letter-spacing: -0.012em; }
.ag-root.ag-psu .ag-capsule { border-left-width: 5px; }
.ag-root.ag-psu .ag-table caption { font-style: italic; text-align: left; }
.ag-root.ag-psu .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-psu .ag-steps li { line-height: 1.62; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Lima Metropolitana tabulados, Cuadros N.° 1 and N.° 3); Municipalidad de Santiago de Surco notes on gob.pe of 5 Sep 2024, 17 May 2024 and 4 Sep 2024; INEI Boletín TIC II trimestre 2026; EF EPI 2025; tzdata and INACAL. Read 10 November 2026. The comparison table, the grade sequence, the progress table and the Python example are our own.',
    localProject: 'Placing an age in its INEI 2025 census age group with Python\'s bisect module, using the group limits of Cuadro N.° 3: bisect_left sends the edge ages to the group before ("6 -> 0 a 5", "12 -> 6 a 11", "45 -> 30 a 44"), bisect_right gets them right ("6 -> 6 a 11", "18 -> 18 a 29", "45 -> 45 a 59"). Lesson family: binary search for bands, half-open intervals, testing the edge values first.',
    requiredMentions: ['6 -&gt; 0 a 5', '45 -&gt; 45 a 59', '12 -&gt; 12 a 17', 'voluntariado de siete universidades', '52,359 personas de 6 a 17 años', 'Impulso Empresarial', '97 participantes de 14 centros educativos', 'Los bordes se prueban primero', 'cerrado a la izquierda, abierto a la derecha'],
    sources: [
      { claim: 'Santiago de Surco population 402,074 (total), 386,432 censada, 15,642 omitida, and censada by age group.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/27/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'School reinforcement in maths, comunicación and English in municipal libraries and schools with volunteers from seven universities; second place nationally in a school tournament with more than 1,600 pupils.', url: 'https://www.gob.pe/institucion/munisantiagodesurco/noticias/1216723-surco-destaca-a-nivel-nacional-en-el-torneo-escolar-aprende-con-eddu' },
      { claim: 'Municipio y Parlamento Escolar 2024: 97 participants from 14 schools.', url: 'https://www.gob.pe/institucion/munisantiagodesurco/noticias/1153180-alcalde-de-surco-tomo-juramento-a-integrantes-de-municipio-y-parlamento-escolar-2024' },
      { claim: 'Impulso Empresarial with ESAN for 60 entrepreneurs, virtual and in-person classes (2024).', url: 'https://www.gob.pe/institucion/munisantiagodesurco/noticias/1216722-municipalidad-de-surco-y-esan-inician-taller-impulso-empresarial' },
      { claim: 'Internet use by age (19 to 24: 97.3%, 25 to 40: 95.2%, 12 to 18: 92.5%) and with secondary education (91.3%), II trimestre 2026.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'EF EPI 2025: Lima 555, High band.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 with no DST; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Spanish-language teaching: refused; every class is live, online and in English only, said in the capsule and in an FAQ.',
      'Any link with the Municipalidad de Surco, ESAN, the volunteer universities or the tournament organiser: none; the page says so and names no officials, pupils or schools.',
      'Grade or admission promises: refused; the page says the admission exams are in Spanish and we do not prepare them or promise entry.',
      'The council\'s summer 2026 workshops: left to the vacaciones útiles page, linked once.',
      'Commute minutes: no primary source, so no figure.',
      'Soles prices, competitor prices or any typed fee: refused; fees render from the template in USD.'
    ]
  }
};
