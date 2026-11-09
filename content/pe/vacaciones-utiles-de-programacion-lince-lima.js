// SHIP: district (vacaciones útiles) | Lince: free municipal workshops by day, code and maths at home, via chess | one function counted on all 64 squares: knight-move table, symmetry, total
'use strict';
// Vacaciones útiles de programación en Lince (ag- Spanish district door, Peru cluster row PE228, P2, hubGroup lima).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md
// (rule "Vacaciones útiles pages": ordinary live classes as a summer start, our own suggested plan, no invented camp
// length, start date or price). Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08:
// timing flexible, any time. Formal "usted"; fees only through the template; no soles, no typed figure.
// Angle: Lince is a small district (33rd of 43 by population) whose municipality runs free summer workshops for resident
// children, chess among them. Spine: what the Municipalidad de Lince published for summer 2026 and about 2024; the district
// in the 2025 census; programming as a way to practise the maths area of the CNEB (competency "Resuelve problemas de
// movimiento, forma y localización", weekly Matemática hours by grade); a plan of our own in three chess phases; one
// original Python lesson (knight moves on a board, coordinates and edges); clock conversions. No income or class
// assumptions about the district (INEI strata exist in the research and are not used).
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/vacaciones-utiles-de-programacion-lince-lima/,
// fetched 8 and 9 November 2026 with curl -sL -A "Mozilla/5.0"; quotes grepped in the raw files):
//  Municipalidad Distrital de Lince on gob.pe (its own institutional news pages):
//    1334625 and 1338776 (both "6 de enero de 2026", same text) "Lince lanza Talleres de Verano 2026 con actividades
//      gratuitas para niños y jóvenes": "una amplia oferta de talleres gratuitos dirigidos a niños y jóvenes del distrito";
//      "más de una veintena de disciplinas deportivas y artísticas"; sport list includes "ajedrez"; arts list includes
//      "dibujo y pintura para niños"; "Las inscripciones estarán abiertas desde las 8: 00 a.m. hasta las 8:00 p. m. del
//      miércoles 7 de enero y se realizarán de manera presencial en el Complejo Deportivo Mariscal Ramón Castilla";
//      "Cada niño podrá inscribirse en hasta dos talleres"; "Para los menores que no residan en el distrito, se aplicará un
//      pago"; "Las clases iniciarán el lunes 12 de enero".
//    929197 (26 February 2024) "Clausura de los “Talleres de Verano 2024”": "Estos talleres contaron con más de 2700 alumnos
//      participantes de los 41 talleres deportivos y artísticos"; "hubo exhibiciones de boxeo, Taekwondo, ajedrez y de hockey
//      sobre patines". Officials named in other notes are left out (no political names).
//  INEI Censos Nacionales 2025, Indicadores demográficos, Lima Metropolitana (tabulados/27, ind_27.xlsx) CUADRO N°1:
//    "DISTRITO LINCE | 72911 | ... | 66298 | ... | 6613"; CUADRO N°3: "DISTRITO LINCE | 66298 | 2735 | 3567 | 3825 | 11581 |
//    18018 | 12104 | 14468". Lince is 33rd of the 43 districts by total population (our sort of Cuadro N°1).
//  CNEB (minedu.gob.pe/curriculo): Matemática competencies "Resuelve problemas de regularidad, equivalencia y cambio
//    MATEMÁTICA Resuelve problemas de movimiento, forma y localización Resuelve problemas de gestión de datos e
//    incertidumbre" (FACTS 55); primaria Tabla N.° 6 "Matemática 5 5 4 4 4 4"; secundaria JER Tabla N.° 8 "Matemática 4 4 4
//    4 4"; secundaria JEC "Matemática 6 6 6 6 6" (FACTS 41); "horas pedagógicas (45 minutos)".
//  RM 501-2025-MINEDU Tabla 1 (page 7, checked by eye): "Cuarto bloque de semanas lectivas 09 semanas Del 19 octubre a 18 de
//    diciembre". gob.pe search on 9 November 2026: no 2027 school-year norm found.
//  EF EPI 2025: Lima 555, high band. Time: America/Lima UTC-5 all year (no DST); India UTC+5:30; 10 h 30 min ahead.
// Our own calculations (python3 -I): 3567 / 66298 = 5.4 % and 3825 / 66298 = 5.8 % of the censused population;
//    72911 / 10141775 = 0.7 % of Lima Metropolitana; 4 x 45 = 180 and 5 x 45 = 225 minutes of Matemática a week.
// Our own example (tablero.py in the src-pages folder), run with python3 -I, exact output (8 rows then a total):
//    2 3 4 4 4 4 3 2 / 3 4 6 6 6 6 4 3 / 4 6 8 8 8 8 6 4 (x4 rows) / 3 4 6 6 6 6 4 3 / 2 3 4 4 4 4 3 2 /
//    All squares together: 336. (Reworked on 9 Nov 2026 from a single-square move list so the lesson centres on nested
//    loops and symmetry, not on the wall check that the Los Olivos sibling teaches.)
// Neighbouring districts in plain text only: Jesús María, San Isidro, La Victoria, Cercado de Lima.
// Lesson family: apply one counting function to every cell of a grid and read the resulting table (symmetry, corners,
// a grand total and why the pairs are half of it).

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  'jumps = [(1, 2), (2, 1), (2, -1), (1, -2), (-1, -2), (-2, -1), (-2, 1), (-1, 2)]',
  '',
  'def count_moves(col, row):',
  '    total = 0',
  '    for dc, dr in jumps:',
  '        c = col + dc',
  '        r = row + dr',
  '        if 0 <= c < 8 and 0 <= r < 8:',
  '            total = total + 1',
  '    return total',
  '',
  'grand_total = 0',
  'for row in range(8):',
  '    numbers = []',
  '    for col in range(8):',
  '        n = count_moves(col, row)',
  '        grand_total = grand_total + n',
  '        numbers.append(str(n))',
  "    print(' '.join(numbers))",
  "print('All squares together:', grand_total)"
].join('\n');

const OUT = [
  '2 3 4 4 4 4 3 2',
  '3 4 6 6 6 6 4 3',
  '4 6 8 8 8 8 6 4',
  '4 6 8 8 8 8 6 4',
  '4 6 8 8 8 8 6 4',
  '4 6 8 8 8 8 6 4',
  '3 4 6 6 6 6 4 3',
  '2 3 4 4 4 4 3 2',
  'All squares together: 336'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'lima', label: 'Vacaciones útiles en Lince' },
  slug: 'vacaciones-utiles-de-programacion-lince-lima',
  code: 'vupl',
  accent: '#0E5715',
  accentRationale: 'Lince: a deep park green #0E5715, the colour of the tree canopy around the Mariscal Ramón Castilla park where the district runs its summer workshops; allocated in alloc.tsv (contrast 7.12 on the paper #FBF8F2) and checked above 4.5 on every paper tint by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Vacaciones útiles de programación en Lince',
  title: 'Vacaciones útiles de programación y matemáticas en Lince',
  description: 'Vacaciones útiles en Lince para niños y adolescentes: programación y matemáticas en clases en vivo, en línea y en inglés, desde casa y en el horario que usted elija.',
  ogDescription: 'Lince ofrece talleres de verano gratuitos de día; en casa, su hijo puede sumar programación y matemáticas en inglés. Censo 2025, el plan de estudios y un reto de ajedrez en Python.',
  twitterDescription: 'Programación y matemáticas en las vacaciones útiles de Lince: clases en vivo y en inglés, desde casa.',
  pageName: 'Vacaciones útiles de programación en Lince',
  webPageDescription: 'Guía para familias de Lince que quieren unas vacaciones útiles de programación y matemáticas: los Talleres de Verano 2026 que anunció la Municipalidad de Lince, el distrito en los Censos Nacionales 2025 del INEI, las horas y competencias de Matemática del CNEB, un plan propio en tres fases y un ejercicio de Python sobre el ajedrez escrito por nosotros.',
  courseDescription: 'Clases en vivo y en línea de programación y matemáticas para niños y adolescentes de Lince, dictadas solo en inglés, que pueden empezar en vacaciones: Python, lógica, matemáticas de primaria y secundaria y matemáticas a través del código, en grupo o individuales y a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Vacaciones útiles, Lince',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#talleres-lince', label: 'Talleres gratuitos' },
    { href: '#matematica', label: 'Matemática' },
    { href: '#caballo', label: 'Reto de ajedrez' },
    { href: '#fases', label: 'Tres fases' },
    { href: '#censo', label: 'Lince en cifras' }
  ],
  eyebrow: 'Lima &middot; Lince &middot; Programación y matemáticas en verano',
  h1: 'Vacaciones útiles de programación y matemáticas en Lince',
  lede: 'Lince tiene una ventaja que pocos distritos ofrecen: talleres municipales de verano gratuitos para los niños que viven en él. Esta página le propone cómo completar ese verano con algo que los talleres no cubren, programación y matemáticas enseñadas en vivo y en inglés, sin salir de casa y en las horas que el taller deja libres.',
  secondaryCta: { href: '#caballo', label: 'Ver el reto del caballo' },
  wa: 'Hola Modern Age Coders, somos una familia de Lince. Queremos que nuestro hijo aproveche el verano con programación o matemáticas. ¿Podemos reservar una clase gratis?',
  heroNote: 'Clases en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; programación y matemáticas con el mismo rigor, siempre en inglés',
  spec: [
    ['Edades', 'De 6 a 17 años, de 1° de primaria a 5° de secundaria'],
    ['Materias', 'Programación, matemáticas y matemáticas a través del código'],
    ['Lugar', 'Desde su casa en Lince, por videollamada'],
    ['Agrupación', 'Grupo de quince a veinte, o clases uno a uno'],
    ['Comienzo', 'Libre: la semana que la familia escoja'],
    ['Sesión de prueba', 'Gratuita y sin datos de tarjeta']
  ],
  capsuleQ: 'Lo esencial',
  capsule: 'Sí: un niño o adolescente de Lince puede sumar programación y matemáticas a sus vacaciones útiles sin moverse de casa. Modern Age Coders enseña en vivo, en línea y en inglés, con un mentor desde la India que explica despacio y verifica que el estudiante entendió. Hay cursos de Python, lógica, matemáticas de primaria y secundaria, y matemáticas aprendidas programando. Se puede tomar en grupo o uno a uno, empezar cualquier semana del verano y elegir la hora que no choque con los talleres del distrito. La primera sesión es gratuita.',

  picks: {
    eyebrow: 'Cursos sugeridos para Lince',
    h2: '¿Qué curso combina mejor con un verano de talleres?',
    lede: 'Uno que une matemática y código, uno de programación pura y uno de matemáticas para primaria, según lo que su hijo necesite más.',
    items: [
      { course: 'maths-through-coding', code: 'VUPL / 01', title: 'Matemáticas a través del código', alt: 'Imagen del curso de matemáticas a través de la programación', note: 'De 10 a 15 años. Fracciones, coordenadas, patrones y probabilidad se aprenden escribiendo programas en Python que los ponen a prueba, como el reto del caballo de esta página.' },
      { course: 'python-ai-kids-masterclass', code: 'VUPL / 02', title: 'Primeros programas en Python', alt: 'Imagen del curso de Python e IA para niños', note: 'Para chicos que leen y escriben con soltura. Juegos de turnos, preguntas y respuestas, dibujos y pequeños proyectos con inteligencia artificial.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'VUPL / 03', title: 'Matemática de primaria', alt: 'Imagen del curso de matemáticas para primaria', note: 'Del primer al quinto grado. Números, operaciones, medidas y problemas, con un diagnóstico inicial en lugar de ubicar al niño solo por su edad.' }
    ]
  },

  sections: [
    {
      id: 'talleres-lince',
      eyebrow: 'Lo que ofrece el distrito',
      h2: '¿Qué talleres de verano gratuitos organiza la Municipalidad de Lince?',
      lede: 'En enero de 2026, la Municipalidad de Lince anunció en gob.pe sus Talleres de Verano con "más de una veintena de disciplinas deportivas y artísticas", gratuitos para los niños y jóvenes del distrito. Las clases empezaron el lunes 12 de enero de 2026.',
      body: [
        { kind: 'table', numCols: [], caption: 'Talleres de Verano 2026 de la Municipalidad de Lince: lo que dice su anuncio', head: ['Punto', 'Lo publicado por la municipalidad (6 de enero de 2026)'], rows: [
          ['Costo', 'Talleres gratuitos para niños y jóvenes del distrito; para los menores que no residen en Lince, "se aplicará un pago"'],
          ['Oferta', 'Más de una veintena de disciplinas deportivas y artísticas, entre ellas ajedrez, deportes de equipo, artes marciales, danza, música y dibujo y pintura para niños'],
          ['Inscripción', 'Presencial, el miércoles 7 de enero de 2026, de 8:00 a. m. a 8:00 p. m., en el Complejo Deportivo Mariscal Ramón Castilla'],
          ['Límite', 'Cada niño puede inscribirse en hasta dos talleres'],
          ['Inicio de clases', 'Lunes 12 de enero de 2026']
        ] },
        { kind: 'source', html: 'Fuente: Municipalidad Distrital de Lince, nota de prensa "Lince lanza Talleres de Verano 2026 con actividades gratuitas para niños y jóvenes", publicada en gob.pe el 6 de enero de 2026 y archivada por nuestro equipo el 9 de noviembre de 2026. Agrupamos la lista de disciplinas por tipo; la nota las enumera una por una. No reproducimos montos porque la nota no los publica.' },
        { kind: 'p', mt: true, html: 'No es un programa pequeño. En la clausura del verano anterior del que la municipalidad dejó cifras, la nota del 26 de febrero de 2024 informó que los Talleres de Verano 2024 "contaron con más de 2700 alumnos participantes de los 41 talleres deportivos y artísticos", con exhibiciones que incluyeron el ajedrez. Para 2027 no encontramos aún un anuncio en sus páginas al 9 de noviembre de 2026; si sigue el patrón de 2026, la convocatoria saldría a inicios de enero, pero eso es una suposición nuestra.' },
        { kind: 'two', mt: true,
          leftH3: 'Dos talleres, y la tarde libre',
          left: [
            'El límite de dos talleres por niño deja horas libres en la semana. Ahí encaja una clase en línea: no ocupa cupo, no necesita traslado y se programa alrededor del horario del parque.',
            'Muchas familias eligen un taller de movimiento, otro artístico y, en casa, dos clases semanales de programación o de matemáticas.'
          ],
          rightH3: 'Somos otra cosa',
          right: [
            'Modern Age Coders no tiene ninguna relación con la Municipalidad de Lince ni con sus talleres, y nuestras clases no son gratuitas: tienen una mensualidad, que se muestra más abajo.',
            'Mencionamos los talleres municipales porque son, con razón, lo primero que considera una familia de Lince, y porque el verano se arma mejor con toda la información.'
          ] }
      ]
    },
    {
      id: 'matematica',
      eyebrow: 'Programar para entender matemática',
      h2: '¿Programar ayuda con las matemáticas del colegio?',
      lede: 'Sí, cuando el programa obliga a pensar en números, posiciones y reglas. Una de las cuatro competencias de Matemática del Currículo Nacional es "Resuelve problemas de movimiento, forma y localización", y es justo lo que se practica al programar un movimiento sobre una cuadrícula.',
      body: [
        { kind: 'table', numCols: [1, 2, 3, 4, 5, 6], caption: 'Horas pedagógicas semanales de Matemática por grado, según el CNEB', head: ['Nivel y jornada', '1°', '2°', '3°', '4°', '5°', '6°'], rows: [
          ['Primaria (Tabla N.° 6)', '5', '5', '4', '4', '4', '4'],
          ['Secundaria, Jornada Escolar Regular (Tabla N.° 8)', '4', '4', '4', '4', '4', 'no aplica'],
          ['Secundaria, Jornada Escolar Completa', '6', '6', '6', '6', '6', 'no aplica']
        ] },
        { kind: 'source', html: 'Fuente: MINEDU, Currículo Nacional de la Educación Básica (minedu.gob.pe/curriculo), tablas de organización del tiempo semanal de primaria y de secundaria, consultadas el 8 de noviembre de 2026. Cada hora pedagógica dura 45 minutos según el propio CNEB; la secundaria tiene cinco grados, por eso la columna de 6° no aplica. Las competencias del área de Matemática también vienen del CNEB.' },
        { kind: 'p', mt: true, html: 'Con horas de 45 minutos, cuatro horas pedagógicas son 180 minutos de Matemática a la semana y cinco son 225 (cálculo nuestro). Es tiempo suficiente para avanzar el programa del año, pero rara vez alcanza para que cada alumno experimente por su cuenta. Programar le da a su hijo ese espacio: en lugar de resolver diez ejercicios iguales, escribe una regla una vez y deja que la computadora la pruebe en cien casos.' },
        { kind: 'two', mt: true,
          leftH3: 'Las cuatro competencias del CNEB',
          left: [
            'El área de Matemática del CNEB se organiza en cuatro competencias: resolver problemas de cantidad; de regularidad, equivalencia y cambio; de movimiento, forma y localización; y de gestión de datos e incertidumbre.',
            'Cada una tiene un equivalente natural en programación: variables y operaciones, patrones y fórmulas, coordenadas y figuras, listas de datos y probabilidades.'
          ],
          rightH3: 'Lo que no hacemos',
          right: [
            'No reemplazamos al colegio ni ponemos notas. Nuestras clases acompañan lo que su hijo aprende en el aula, en otro momento del día, y el colegio sigue siendo quien evalúa.',
            'Tampoco preparamos para pruebas oficiales del MINEDU. Lo que buscamos es que su hijo entienda por qué funciona una regla, no que memorice cómo aplicarla.'
          ] }
      ]
    },
    {
      id: 'caballo',
      tint: 'tint',
      eyebrow: 'Del tablero al código',
      h2: '¿Cómo se programan los movimientos del caballo de ajedrez?',
      lede: 'El ajedrez está entre los talleres de verano de Lince, así que este ejercicio nuestro parte del tablero. El caballo salta en forma de L; el programa cuenta cuántos saltos tiene desde cada una de las 64 casillas y dibuja el tablero completo con esos números. Es geometría de coordenadas y conteo, escrita en Python y en inglés.',
      body: [
        { kind: 'code', label: 'Un tablero de saltos del caballo en Python', lang: 'Python', code: PY, note: 'Pregunta del mentor antes de ejecutar: "From a corner, how many squares can the knight reach?" La mayoría de los chicos dice cuatro u ocho.' },
        { kind: 'code', label: 'Resultado', lang: 'Salida', code: OUT, note: 'Copiado sin cambios de la ejecución con Python 3 en nuestra máquina. Cada número es la cantidad de saltos posibles desde esa casilla: dos en las esquinas, ocho en el centro.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Las casillas como coordenadas.</strong> Cada casilla es un par (columna, fila) con números de 0 a 7, igual que un punto en el plano cartesiano. Los ocho saltos en L de la lista <code>jumps</code> son ocho desplazamientos que se suman a ese punto.',
          '<strong>Un bucle dentro de otro.</strong> El bucle de afuera recorre las filas y el de adentro las columnas: 8 por 8 son las 64 casillas. El estudiante explica en inglés por qué hacen falta los dos: "one loop for rows, one loop for columns".',
          '<strong>No salirse del tablero.</strong> La condición <code>0 &lt;= c &lt; 8 and 0 &lt;= r &lt; 8</code> descarta los saltos que caen afuera. Es una línea, pero sin ella todas las casillas darían 8.',
          '<strong>Leer la tabla.</strong> El tablero de números es simétrico: se ve igual al darle la vuelta de arriba abajo o de izquierda a derecha. ¿Por qué? Porque el caballo salta igual hacia cualquier lado. Ese tipo de observación es matemática, aunque haya salido de un programa.',
          '<strong>Su propio reto.</strong> El total es 336. ¿Por qué el número de pares de casillas unidas por un salto es exactamente la mitad, 168? El estudiante lo razona antes de escribir el código que lo comprueba.'
        ] },
        { kind: 'p', mt: true, html: 'Un niño que juega ajedrez ya sabe mover el caballo. Programarlo le exige algo más: describir la regla con tanta precisión que una máquina la pueda seguir, recorrer todos los casos en orden y luego mirar el resultado buscando un patrón. Esa precisión es la misma que pide un problema de matemáticas bien resuelto, y no se aprende copiando la respuesta de otro ni pidiéndosela a una herramienta de IA.' }
      ]
    },
    {
      id: 'fases',
      eyebrow: 'Plan propio en tres fases',
      h2: '¿Cómo organizar un verano de programación y matemáticas?',
      lede: 'Como una partida de ajedrez: apertura, medio juego y final. Es un plan nuestro, pensado para convivir con los talleres del distrito; no es un curso con fecha de inicio ni con duración cerrada.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Apertura', p: 'Las primeras clases sirven para ubicar a su hijo. Con bloques o con Python, según la edad, aprende a dar instrucciones exactas, guardar datos en variables y repetir con bucles. En matemáticas, el mentor detecta qué temas del año anterior conviene reforzar.' },
          { h3: 'Medio juego', p: 'El trabajo central: coordenadas, condiciones y funciones, aplicadas a problemas como el del caballo. Cada semana hay un reto entre clases que se resuelve razonando, y una conversación corta en inglés sobre cómo se resolvió.' },
          { h3: 'Final', p: 'Un proyecto propio que reúne todo: un juego de tablero, un generador de ejercicios de matemáticas o una pequeña herramienta. Su hijo lo presenta en inglés a la familia antes de que vuelva el colegio.' }
        ] },
        { kind: 'source', html: 'Plan nuestro. En grupo, con dos clases por semana, muchas familias completan las tres fases entre enero y marzo; en clases individuales el ritmo se ajusta a su hijo. No es una duración fija: se paga por mes y se puede continuar durante el año escolar o pausar.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Reservar la sesión gratuita</strong> en el horario de Perú que le acomode.',
          '<strong>Conversar con el mentor</strong>, que le hace a su hijo un par de preguntas de lógica y matemáticas en inglés sencillo para ubicar su nivel.',
          '<strong>Elegir curso y formato</strong>: programación, matemáticas o las dos unidas, en grupo o uno a uno.',
          '<strong>Fijar dos horarios semanales</strong> que no choquen con los dos talleres municipales que su hijo haya escogido.',
          '<strong>Revisar en marzo</strong> si continúa con el colegio en marcha, con menos clases o con una pausa.'
        ] },
        { kind: 'p', mt: true, html: 'Si su hijo es más pequeño y nunca programó, nuestra guía en castellano sobre <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">programación para niños de primaria en inglés</a> explica cómo se empieza a cada edad. Para ver todos nuestros cursos en el Perú, en inglés, está <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">Coding and AI classes in Peru</a>.' }
      ]
    },
    {
      id: 'censo',
      eyebrow: 'Lince en cifras',
      h2: '¿Cuántos niños hay en Lince según el censo 2025?',
      lede: 'El INEI registró en Lince 3,567 niños de 6 a 11 años y 3,825 adolescentes de 12 a 17 años, de un total de 66,298 personas censadas. Con la población omitida, el distrito tiene 72,911 habitantes, alrededor del 0,7 % de Lima Metropolitana.',
      body: [
        { kind: 'two',
          leftH3: 'Un distrito compacto',
          left: [
            'Por población total, Lince ocupa el puesto 33 entre los 43 distritos de Lima Metropolitana, según nuestro orden de las cifras del INEI. Los niños en edad de primaria son el 5,4 % de la población censada y los de secundaria el 5,8 % (cálculos nuestros).',
            'El censo omitió a 6,613 personas, que no se reparten por edades en el cuadro, de modo que no las sumamos a esos grupos.'
          ],
          rightH3: 'Lo que significa para el verano',
          right: [
            'En un distrito pequeño, las sedes municipales quedan cerca y los cupos se llenan con vecinos. Eso favorece a los talleres presenciales, y está bien que así sea.',
            'La clase en línea agrega otra cosa: una materia que los talleres no cubren y un horario que su familia decide. Las cifras no dicen nada sobre las familias, y no las usamos para suponer nada de ellas.'
          ] },
        { kind: 'source', mt: true, html: 'Fuente: INEI, Censos Nacionales 2025, archivo de indicadores demográficos de Lima Metropolitana (cuadro 1, población total, censada y omitida; cuadro 3, población censada por edades), con límites al 15 de julio de 2026, bajado el 8 de noviembre de 2026. Porcentajes y puesto: cálculo nuestro.' }
      ]
    },
    {
      id: 'reloj',
      eyebrow: 'Horario e idioma',
      h2: '¿Cómo encajan las clases con la hora de Lima y con el inglés de mi hijo?',
      lede: 'Con libertad total de horario: los mentores trabajan desde la India, que adelanta a Lima en diez horas y media durante todo el año, y la clase se acomoda a la hora que su familia elija.',
      body: [
        { kind: 'table', numCols: [], caption: 'Tres horas de Lima convertidas a la hora de la India (ejemplos de conversión, no horarios de clase)', head: ['Hora de Perú, en Lince', 'Hora de la India', 'Día en la India'], rows: [
          ['7:30 a. m., antes del taller', '6:00 p. m.', 'Mismo día'],
          ['12:30 p. m., al volver del parque', '11:00 p. m.', 'Mismo día'],
          ['6:00 p. m., ya en casa', '4:30 a. m.', 'Día siguiente']
        ] },
        { kind: 'source', html: 'Hora de Perú: UTC-5 fija, sin cambio estacional (zona America/Lima de la base tzdata, que coincide con la hora oficial que difunde el INACAL). Hora de la India: UTC+5:30. Por eso la brecha no varía en ningún mes.' },
        { kind: 'p', mt: true, html: 'Sobre el inglés: las clases se dictan solo en ese idioma, y eso no exige que su hijo lo hable bien desde el inicio. El mentor arma frases cortas, deja escrito en pantalla cada término nuevo y comprueba que se entendió antes de seguir. El índice EF EPI 2025 le asigna a Lima 555 puntos, dentro de su nivel alto, medido en adultos; para un niño de Lince, practicarlo hablando de su propio código es una manera natural de acercarse a ese nivel.' },
        { kind: 'p', html: 'Lince limita con Jesús María, San Isidro, La Victoria y el Cercado de Lima, y cualquier academia presencial de esos distritos queda a un trayecto corto. Aun así, cada trayecto suma tiempo de ida, espera y vuelta, que no vamos a cuantificar con cifras que no podemos verificar. En línea, la clase termina y su hijo ya está en casa. Las familias que prefieren leer en inglés tienen la versión de <a class="ag-inline-link" href="/english-medium-coding-classes-lima">English-medium coding classes in Lima</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progreso',
    h2: '¿Cómo saber si el verano mejoró su lógica y su matemática?',
    lede: 'Tres señales nuestras, una por fase del plan, que el mentor le comenta a la familia.',
    table: { caption: 'Tres señales de avance, una por fase (nuestras)', head: ['Fase', 'Señal en clase', 'Pregunta para hacerle en casa'], rows: [
      ['Apertura', 'Da instrucciones exactas, sin pasos de más ni de menos', '¿Cómo le explicarías a la computadora que salte en L?'],
      ['Medio juego', 'Revisa los bordes y las excepciones antes de fiarse del resultado', '¿Qué pasa si el caballo está en una esquina?'],
      ['Final', 'Termina un proyecto y lo explica en inglés', '¿Me muestras tu proyecto y me cuentas cómo funciona?']
    ] },
    left: { h3: 'Para madres y padres', ps: [
      'Hágale a su hijo las preguntas de la tercera columna. No importa si responde mezclando castellano e inglés; importa que la explicación tenga sentido.',
      'Si su hijo juega ajedrez en el taller municipal, pregúntele qué tienen en común el tablero y el programa. La respuesta suele sorprender.'
    ] },
    right: { h3: 'Para el estudiante', ps: [
      'Dibuje el problema en papel antes de escribir una sola línea de código.',
      'Cuando el resultado parezca correcto, pruebe la esquina. Siempre la esquina.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más opciones',
    h2: '¿Qué otros cursos de matemáticas y programación hay?',
    lede: 'Nueve cursos más, en vivo y en inglés, que se pueden empezar en vacaciones y seguir durante el colegio.',
    bands: [
      { num: 'I', h3: 'Matemática', sub: 'De 6 a 15 años', courses: [
        { code: 'VUPL / MAT / 01', slug: 'mental-maths-mastery-kids', title: 'Cálculo mental', blurb: 'Sentido numérico de verdad, sin trucos memorizados, para los más chicos.' },
        { code: 'VUPL / MAT / 02', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Matemática para 1° y 2° de secundaria', blurb: 'Prealgebra y geometría con explicación de cada paso.' },
        { code: 'VUPL / MAT / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Matemática de competencia', blurb: 'Problemas de olimpiada creados por nosotros, para quien disfruta el desafío.' }
      ] },
      { num: 'II', h3: 'Lógica', sub: 'De 6 a 12 años', courses: [
        { code: 'VUPL / LOG / 01', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Razonamiento temprano', blurb: 'Patrones y orden para niños de 6 a 9 años.' },
        { code: 'VUPL / LOG / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Resolver problemas', blurb: 'Descomponer, ordenar y verificar, con retos graduados.' },
        { code: 'VUPL / LOG / 03', slug: 'kids-coding-blocks-masterclass', title: 'Bloques para programar', blurb: 'La primera experiencia con código, sin teclear todavía.' }
      ] },
      { num: 'III', h3: 'Programación en secundaria', sub: 'De 13 a 17 años', courses: [
        { code: 'VUPL / SEC / 01', slug: 'python-complete-masterclass-teens', title: 'Python completo', blurb: 'De las bases a proyectos con archivos y datos.' },
        { code: 'VUPL / SEC / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algoritmos', blurb: 'Estructuras de datos y problemas resueltos con método.' },
        { code: 'VUPL / SEC / 03', slug: 'data-science-course-for-teens-python-data', title: 'Datos con Python', blurb: 'Estadística aplicada y primeros modelos, desde los 14 años.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo se organizan las clases en vacaciones?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Temprano', l: 'Antes de salir al complejo deportivo.' },
      { time: 'Mediodía', l: 'Entre un taller y el almuerzo.' },
      { time: 'Tarde o noche', l: 'Cuando el día de parque ya terminó.' }
    ],
    cells: [
      { h3: 'Un mentor de inicio a fin', p: 'La misma persona sigue a su hijo durante todo el curso.' },
      { h3: 'Pizarra y código', p: 'Matemática y programación se explican en la misma pantalla.' },
      { h3: 'Él resuelve', p: 'El mentor pregunta y orienta; la solución la escribe su hijo.' },
      { h3: 'Un proyecto por fase', p: 'Apertura, medio juego y final cierran con algo terminado.' },
      { h3: 'Nota para la familia', p: 'Al terminar cada fase, un resumen breve de avances y siguientes pasos.' },
      { h3: 'Grupo o uno a uno', p: 'De quince a veinte estudiantes de edades cercanas, o atención exclusiva.' }
    ]
  },

  projectsH2: 'Proyectos de estudiantes con más camino',
  projectsLede: 'Así se ve el trabajo de alumnos que empezaron igual que su hijo y siguieron; hay más en <a class="ag-inline-link" href="/student-labs">Student labs</a>, en inglés.',
  reviewsLede: 'Lo que escribieron en Google familias y alumnos de varios países; se muestra en el inglés original.',

  fees: {
    h2: '¿Cuánto cuesta y cómo se paga?',
    lede: 'A diferencia de los talleres municipales, nuestras clases tienen una mensualidad, igual en verano que durante el año y sin cuota de inscripción. Se muestra en dólares de Estados Unidos y se paga con tarjeta; la conversión a soles la hace su banco.',
    free: ['Sesión de prueba con un mentor', 'Ubicación de nivel en lógica y matemática', 'Ningún dato de tarjeta'],
    group: ['Quince a veinte estudiantes de edades cercanas', 'Mentor fijo durante el curso', 'Dos clases en vivo a la semana', 'Mensualidad que se puede cancelar'],
    one: ['Atención solo para su hijo', 'Programación, matemática o ambas', 'Horario elegido por la familia']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Vacaciones útiles de programación en Lince: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No, se imparten solo en inglés, siempre en vivo y en línea. Muchas familias de Lince lo ven como un beneficio doble: su hijo avanza en programación o matemáticas y, en la misma hora, practica el inglés hablado. El mentor regula su ritmo y su acento para cada estudiante, y Lima ya figura con nivel alto de inglés en el EF EPI 2025.' },
      { q: '¿Son gratuitas como los talleres de la municipalidad?', a: 'No. Los Talleres de Verano de la Municipalidad de Lince son gratuitos para los niños del distrito; nuestras clases tienen una mensualidad. Lo único gratuito es la primera sesión de prueba. No tenemos ninguna relación con la municipalidad.' },
      { q: '¿Se pueden combinar con los dos talleres municipales?', a: 'Sí. La municipalidad permite hasta dos talleres por niño, y nuestras clases son en línea a la hora que usted elija, así que se acomodan alrededor de ese horario sin traslados.' },
      { q: '¿Enseñan matemáticas además de programación?', a: 'Sí. Hay cursos de matemática para primaria y para los primeros años de secundaria, de cálculo mental y de matemática de competencia, y un curso que enseña matemáticas escribiendo programas en Python. El mentor recomienda cuál conviene después de la sesión de prueba.' },
      { q: '¿Desde cuándo se puede empezar?', a: 'Desde la semana que usted elija. El último bloque lectivo de 2026 cierra el 18 de diciembre de 2026 según la RM 501-2025-MINEDU, y su hijo puede empezar desde esa fecha o cuando prefiera durante 2027, sin esperar a nadie.' },
      { q: '¿El plan de verano tiene una duración fija?', a: 'No. Proponemos tres fases propias, apertura, medio juego y final, pero son nuestras clases mensuales de siempre: usted decide cuánto dura el verano de su hijo y si continúa en el año escolar.' },
      { q: '¿A qué hora son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. La India va 10 horas y 30 minutos adelante de Lima; una clase a las 7:30 a. m. en Lince es a las 6:00 p. m. en la India.' },
      { q: '¿Sirve para mejorar las notas de matemática?', a: 'Ayuda a entender mejor, pero no prometemos notas: el colegio es el que evalúa. Lo que sí trabajamos es el razonamiento detrás de cada procedimiento, que es lo que permite resolver un problema nuevo.' },
      { q: '¿Qué equipo hace falta?', a: 'Computadora de escritorio o portátil con cámara y micrófono, unos audífonos y conexión estable. Todo el software que usamos es gratuito. Para escribir código, el celular no es suficiente.' },
      { q: '¿Entregan algún certificado?', a: 'Al completar un curso, su hijo recibe un certificado de finalización propio de Modern Age Coders. No es un documento del MINEDU ni tiene validez escolar.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más guías',
    h2: 'Para seguir leyendo',
    lede: 'Páginas relacionadas; las que tienen nombre en inglés están escritas en inglés.',
    items: [
      { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños en inglés', p: 'La guía en castellano para familias con hijos en primaria.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Todos nuestros cursos para el Perú, por edad y materia.' },
      { href: '/english-medium-coding-classes-lima', label: 'English-medium coding in Lima', p: 'Programación en inglés para familias de colegios bilingües.' },
      { href: '/courses/maths-through-coding', label: 'Maths through coding', p: 'El curso que une matemáticas y Python, en detalle.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Nuestro método de enseñanza, explicado paso a paso.' },
      { href: '/courses', label: 'All courses', p: 'El catálogo completo, de primaria a adultos.' }
    ]
  },

  start: {
    h2: 'Reserve la sesión de prueba gratuita',
    lede: 'Elija el día y la hora pensando en la hora peruana. Durante esa primera sesión, el mentor le plantea a su hijo un acertijo de lógica y una pregunta de matemáticas en inglés sencillo, y con eso le recomienda a usted si empezar por programación, por matemáticas o por las dos.',
    readFirst: 'Si quiere conocernos antes, lea <a class="ag-inline-link" href="/how-we-teach">How we teach</a> o recorra <a class="ag-inline-link" href="/courses">All courses</a>; están en inglés.',
    note: 'Mentores en la India, clases en vivo en inglés. Por WhatsApp le atendemos también en castellano.',
    formNote: 'Sesión gratuita y sin tarjeta.'
  },

  footer: {
    cols: [
      { h4: 'Cursos para Lince', links: [
        { href: '/courses/maths-through-coding', label: 'Matemáticas con código' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Python para niños' },
        { href: '/courses/elementary-mathematics-complete-masterclass', label: 'Matemática de primaria' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Guías', links: [
        { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños' },
        { href: '/coding-and-ai-classes-in-peru', label: 'Clases en el Perú' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: 'Del tablero al código, siempre probando la esquina'
  },

  personalityCss: `
.ag-root.ag-vupl .ag-hero h1 { max-width: 21ch; letter-spacing: -0.012em; }
.ag-root.ag-vupl .ag-capsule { border-left-width: 5px; border-radius: 3px; }
.ag-root.ag-vupl .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-vupl .ag-table th { text-transform: uppercase; letter-spacing: 0.04em; font-size: 0.82rem; }
.ag-root.ag-vupl .ag-steps li { line-height: 1.6; }
`,

  dossier: {
    curriculumAuthority: 'Municipalidad Distrital de Lince on gob.pe (Talleres de Verano 2026 press note of 6 January 2026; closing note of the 2024 workshops, 26 February 2024); INEI Censos Nacionales 2025 (Lima Metropolitana workbook, Cuadros 1 and 3); MINEDU CNEB (Matemática competencies, weekly hours in Tablas N.° 6 and N.° 8 and the JEC table, 45-minute hours); RM 501-2025-MINEDU Tabla 1; EF EPI 2025; tzdata. The three-phase plan, the three signals and the knight-board exercise are ours.',
    localProject: 'A board of knight moves for a child of 10 to 15 in Lince, where chess is one of the free municipal summer workshops: two nested Python loops visit all 64 squares as (column, row) coordinates, a function counts the L-shaped jumps that stay inside the board, and the program prints an 8 by 8 table (2 in the corners, 8 in the centre, symmetric) and the total 336. Run with python3 -I. Lesson family: one counting function applied to every cell of a grid, then reading the table.',
    requiredMentions: ['All squares together: 336', '3 4 6 6 6 6 4 3', 'Complejo Deportivo Mariscal Ramón Castilla', 'Cada niño puede inscribirse en hasta dos talleres', 'más de 2700 alumnos participantes de los 41 talleres deportivos y artísticos', 'Resuelve problemas de movimiento, forma y localización', '3,567 niños de 6 a 11 años', 'el puesto 33 entre los 43 distritos', 'Del tablero al código, siempre probando la esquina', 'Horas pedagógicas semanales de Matemática por grado'],
    sources: [
      { claim: 'Talleres de Verano 2026: free for resident children and young people, more than twenty disciplines incl. chess, in-person registration on 7 January 2026 at the Complejo Deportivo Mariscal Ramón Castilla, up to two workshops per child, non-residents pay, classes from 12 January 2026.', url: 'https://www.gob.pe/institucion/munilince/noticias/1334625-lince-lanza-talleres-de-verano-2026-con-actividades-gratuitas-para-ninos-y-jovenes' },
      { claim: 'Talleres de Verano 2024 closed with more than 2,700 participants in 41 workshops, chess among the exhibitions (26 February 2024).', url: 'https://www.gob.pe/institucion/munilince/noticias/929197-clausura-de-los-talleres-de-verano-2024' },
      { claim: 'Lince 72,911 total, 66,298 censused, 6,613 omitted; 3,567 aged 6 to 11 and 3,825 aged 12 to 17 (Censos Nacionales 2025).', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/27/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Matemática competencies (incl. movimiento, forma y localización) and weekly Matemática hours by grade in primaria, secundaria JER and JEC; 45-minute teaching hours.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: '2026 school year last teaching block to 18 December 2026.', url: 'https://cdn.www.gob.pe/uploads/document/file/8968298/7380466-rm-n-501-2025-minedu.pdf' },
      { claim: 'EF EPI 2025: Lima 555, high band.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 all year, India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Spanish-language teaching: refused; classes are live, online and in English only (capsule and FAQ).',
      'Free classes like the municipal workshops: refused; the page says plainly that ours have a monthly fee and only the trial is free.',
      'A summer camp length, start date or price: refused; the three-phase plan is labelled ours; fees come from the template.',
      'Grade improvements or MINEDU test preparation: refused; the page says the school evaluates and we promise no marks.',
      'Any link with the Municipalidad de Lince: refused; officials\' names are left out and the page says we are not connected.',
      'Income or class statements about Lince (INEI strata flag it in the research): refused; only population and age counts are used.',
      'Commute times to neighbouring districts: refused; no verified figure.',
      'Reproducing competition problems: refused; the olympiad course blurb says the problems are our own.'
    ]
  }
};
