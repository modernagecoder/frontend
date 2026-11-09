// SHIP: market | Precio de un profesor particular de matemáticas en Perú: hora reloj, traslado, frecuencia | divmod for hours and minutes: 45-minute school hours, travel time and cost per clock hour
'use strict';
// Precio de un profesor particular de matemáticas en Perú (ag- Spanish-language door, Peru cluster row PE148, P4 cost, hubGroup
// guides). Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md (sections 3 and 6: cost pages explain what drives cost
// and show our fee through the template only; no competitor prices, no soles); writer brief
// docs/superpowers/plans/2026-11-09-pe-writer-brief.md. Owner 2026-11-09: "make sure all our classes are live online in
// english". Owner 2026-11-08: timing flexible, any time. Formal "usted" throughout. priceSubject 'maths' (maths.international
// row of pricing.config.jsonc). "Mejor" appears only inside the two uses of the timing line (how.lede and one FAQ).
// Searches (KEYWORDS.md sections 1, 3 and 6, maths tutoring row): "clases particulares de matemáticas precio", "clases
// particulares precio por hora perú", "profesor de matemáticas a domicilio", "clases particulares de matemáticas para
// secundaria"; questions "¿Cuánto cobra un profesor particular de matemáticas por hora en Perú?", "¿Clases a domicilio u
// online?".
// Spine: there is no official market rate, so the page explains what moves the price (format, place, level, one to one or
// group, frequency), how to compare offers per clock hour when academies count 45-minute school hours (CNEB) and when the
// family travels, how much maths the school already gives by grade (CNEB Tablas N.° 6, 8 and 9, converted to clock minutes by
// us), how to budget across the 2026 school year (RM 501-2025-MINEDU: 36 teaching weeks in four nine-week blocks, at least 160
// teaching days), what ENLA 2025 found in maths, and where our maths fee is (template cards, USD, monthly). One original
// divmod program with invented offers in "unidades".
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/precio-profesor-particular-matematicas-peru/,
// fetched 2026-11-08 with curl by the research pass, every quote grepped in the raw text):
//  CNEB, MINEDU (cneb.txt): "horas pedagógicas (45 minutos)"; Tabla N.° 6 primaria "Matemática 5 5 4 4 4 4", "Total de horas 30
//    30 30 30 30 30"; Tabla N.° 8 secundaria JER "Matemática 4 4 4 4 4", "Total de horas 35 35 35 35 35"; Tabla N.° 9 secundaria
//    JEC "Matemática 6 6 6 6 6", "Total de horas 45 45 45 45 45". Competencies: "Resuelve problemas de regularidad, equivalencia y
//    cambio", "Resuelve problemas de movimiento, forma y localización", "Resuelve problemas de gestión de datos e incertidumbre",
//    "Competencia 23: Resuelve problemas de cantidad."
//  RM 501-2025-MINEDU (rm501-2025.txt): "El año escolar está compuesto por treinta y seis (36) semanas lectivas y ocho (08)
//    semanas de gestión"; "deben cumplirse, como minimo, ciento sesenta (160) días lectivos y treinta (30) de gestión"; four
//    blocks "Primer bloque de semanas lectivas 09 semanas" ... "Cuarto bloque de semanas lectivas 09 semanas".
//  MINEDU press note 13 May 2026 (n-enla2025.txt, FACTS 60 and 61): "presenta, a nivel nacional, resultados similares a los
//    obtenidos en 2023 y 2024 en Lectura y Matemática."; "En 2.º grado de secundaria, se registran avances en Matemática frente
//    al 2023, siendo este el primer año con cambios positivos tras su severa afectación por el cierre de las escuelas."
//  INEI TIC II Trimestre 2026 (inei_tic_iit2026.txt): homes with internet "en Lima Metropolitana, el 84,7% ... en el resto
//    urbano, el 66,2% ... en el área rural solo el 27,1%"; "el 36,4% de los hogares del país disponía de al menos una
//    computadora".
//  EF EPI 2025 Peru page (ef_peru.txt): Lima 555 (high), Peru 519, speaking 480.
//  Template: fees cards with data-price maths.international.group and .personal, "al mes, ocho clases en vivo"; pricing
//    display.hoursPerClass 1. No figure typed on the page.
//  Brand facts: 10,000+ students worldwide, 4.9 from 547 Google reviews, since 2020; group 15 to 20, one to one.
//  Time: tzdata America/Lima -5:00, Asia/Kolkata +5:30.
// Our own calculations: 5 x 45 = 225 min, 4 x 45 = 180 min, 6 x 45 = 270 min of maths a week; 36 teaching weeks / 4 blocks = 9.
// Our own program minutos.py (src-pages folder), invented offers in "unidades", run with python3 -I, exact output:
//    Profesor A, a domicilio        clase  4 h 00 min  tiempo familiar  4 h 00 min   30.00 por hora reloj
//    Academia B, por hora pedag.    clase  6 h 00 min  tiempo familiar 12 h 40 min   16.67 por hora reloj
//    Clase C en linea               clase  8 h 00 min  tiempo familiar  8 h 00 min   13.75 por hora reloj
// Lesson family: unit conversion with divmod (minutes to hours and minutes), 45-minute school hours against clock hours, and
// travel time counted as part of the family's cost.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  '# Ofertas INVENTADAS en "unidades": no son tarifas de ningun profesor ni las nuestras',
  'ofertas = [',
  '    # (nombre, monto, sesiones al mes, minutos por sesion, minutos de traslado ida y vuelta)',
  "    ('Profesor A, a domicilio',      120, 4, 60, 0),",
  "    ('Academia B, por hora pedag.',  100, 8, 45, 50),",
  "    ('Clase C en linea',             110, 8, 60, 0),",
  ']',
  '',
  'def h_min(minutos):',
  '    horas, resto = divmod(minutos, 60)',
  "    return f'{horas} h {resto:02d} min'",
  '',
  'for nombre, monto, sesiones, duracion, traslado in ofertas:',
  '    clase = sesiones * duracion',
  '    familia = sesiones * (duracion + traslado)',
  '    por_hora = monto / clase * 60',
  "    print(f'{nombre:<30} clase {h_min(clase):>11}  tiempo familiar {h_min(familia):>11}  {por_hora:6.2f} por hora reloj')"
].join('\n');

const OUT = [
  'Profesor A, a domicilio        clase  4 h 00 min  tiempo familiar  4 h 00 min   30.00 por hora reloj',
  'Academia B, por hora pedag.    clase  6 h 00 min  tiempo familiar 12 h 40 min   16.67 por hora reloj',
  'Clase C en linea               clase  8 h 00 min  tiempo familiar  8 h 00 min   13.75 por hora reloj'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'guides', label: 'Precio de un profesor particular de matemáticas' },
  slug: 'precio-profesor-particular-matematicas-peru',
  code: 'ppp',
  accent: '#8B3B3E',
  accentRationale: 'Precio de un profesor particular de matemáticas: a muted oxblood #8B3B3E (alloc.tsv), sober for a household-budget page and a shade apart from the other guide colours; contrast 7.09 on the paper #FBF8F2 and 6.10 on the darkest paper tint, checked by the build',
  pageType: 'market',
  market: PE_ES,
  priceSubject: 'maths',
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Precio de un profesor particular de matemáticas',
  title: 'Precio de un profesor particular de matemáticas en Perú',
  description: '¿Cuánto cobra un profesor particular de matemáticas en Perú? Qué mueve el precio, cómo compararlo por hora reloj y qué cobramos por clases en vivo en inglés.',
  ogDescription: 'Cómo comparar precios de clases particulares de matemáticas en Perú: hora pedagógica contra hora reloj, traslados, frecuencia y nivel, con el calendario escolar 2026 del MINEDU.',
  twitterDescription: 'Precio de clases particulares de matemáticas en Perú: cómo compararlas por hora reloj, con un programa en Python. Nuestras clases: en vivo, en inglés.',
  pageName: 'Precio de un profesor particular de matemáticas en Perú',
  webPageDescription: 'Guía de costos para familias en Perú que buscan un profesor particular de matemáticas: qué hace subir o bajar la tarifa, cómo convertir horas pedagógicas de 45 minutos a horas reloj, cómo contar el traslado, cuánta matemática da ya el colegio según el CNEB, cómo repartir el reforzamiento en el año escolar 2026 y dónde está nuestra tarifa mensual.',
  courseDescription: 'Clases particulares de matemáticas en vivo y en línea para escolares de primaria y secundaria y para adultos en todo el Perú, dictadas solo en inglés por mentores desde la India, con pago mensual en dólares estadounidenses: reforzamiento, preparación por nivel e IB o IGCSE, en grupo de quince a veinte estudiantes o en clases individuales, a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Precio del profesor de matemáticas',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#factores', label: 'Qué lo mueve' },
    { href: '#hora-reloj', label: 'Hora reloj' },
    { href: '#programa', label: 'Programa' },
    { href: '#colegio', label: 'Colegio' },
    { href: '#tarifa', label: 'Nuestra tarifa' }
  ],
  eyebrow: 'Perú &middot; Matemáticas &middot; Clases particulares',
  h1: 'Precio de un profesor particular de matemáticas en Perú',
  lede: 'No existe una tarifa oficial ni un promedio publicado por una fuente pública para las clases particulares de matemáticas en Perú. Lo que sí se puede hacer es comparar bien: convertir todo a horas de reloj, sumar los traslados y pensar cuántas semanas de reforzamiento necesita su hijo en el año escolar.',
  secondaryCta: { href: '#hora-reloj', label: 'Cómo comparar por hora reloj' },
  wa: 'Hola Modern Age Coders, quisiera saber el precio de sus clases particulares de matemáticas desde Perú y reservar una clase de prueba gratuita.',
  heroNote: 'Enseñamos en vivo desde 2020 &middot; más de 10,000 estudiantes en distintos países &middot; 4.9 de 5 en 547 reseñas de Google',
  spec: [
    ['Niveles', 'Primaria, secundaria, IB, IGCSE y adultos'],
    ['Formato', 'En vivo por videollamada'],
    ['Modalidad', 'Individual, o grupo de quince a veinte'],
    ['Pago', 'Mensual, en dólares, con tarjeta'],
    ['Incluye', 'Ocho clases en vivo al mes'],
    ['Primera clase', 'Gratuita']
  ],
  capsuleQ: 'Respuesta breve',
  capsule: 'El precio de un profesor particular de matemáticas en Perú depende del formato (a domicilio, en academia o en línea), del nivel, de si la clase es individual o en grupo, de cuántas horas da al mes y de si cuenta horas pedagógicas de 45 minutos u horas de reloj. Para comparar, lleve todo a horas reloj y sume el tiempo de traslado. Modern Age Coders da clases de matemáticas en vivo, en línea y en inglés, individuales o en grupo, a cualquier hora, con una tarifa mensual en dólares que aparece en esta página.',

  picks: {
    eyebrow: 'Cursos de matemáticas',
    h2: 'Tres cursos de matemáticas según la etapa escolar',
    lede: 'Uno para primaria, uno para los primeros años de secundaria y uno para los últimos. Los tres se pagan con la misma mensualidad.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'PPP / 01', title: 'Matemática de primaria', alt: 'Imagen del curso completo de matemática para primaria', note: 'Para niños de 6 a 11 años. Números, operaciones, fracciones y problemas con enunciado, explicados paso a paso en un inglés sencillo.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'PPP / 02', title: 'Matemática de 1.° a 3.° de secundaria', alt: 'Imagen del curso de matemática para los primeros años de secundaria', note: 'El tramo donde suelen aparecer las primeras dificultades: álgebra, proporciones, ecuaciones y geometría con razonamiento.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'PPP / 03', title: 'Matemática de 4.° y 5.° de secundaria', alt: 'Imagen del curso completo de matemática para los últimos años de secundaria', note: 'Funciones, trigonometría, estadística y probabilidad, con la profundidad que pide quien piensa en la universidad.' }
    ]
  },

  sections: [
    {
      id: 'factores',
      eyebrow: 'Qué lo mueve',
      h2: '¿Cuánto cobra un profesor particular de matemáticas por hora en Perú?',
      lede: 'Depende de seis cosas. Ninguna fuente pública publica un promedio de mercado, y desconfíe de quien le dé una cifra "normal" sin decir de dónde sale.',
      body: [
        { kind: 'ol', items: [
          '<strong>Dónde ocurre la clase.</strong> A domicilio, el profesor cobra también su traslado, aunque no lo detalle. En una academia, usted paga el local. En línea no hay traslado para nadie.',
          '<strong>Individual o en grupo.</strong> Una hora individual cuesta más que una hora en grupo porque el profesor la dedica entera a un solo estudiante.',
          '<strong>El nivel.</strong> Reforzar sumas de 3.° de primaria no exige lo mismo que preparar funciones de 5.° de secundaria o matemática del IB. A más nivel, menos profesores disponibles.',
          '<strong>Cuánto dura una "hora".</strong> Muchas academias peruanas cuentan en horas pedagógicas de 45 minutos. Una oferta de ocho horas pedagógicas da seis horas de reloj.',
          '<strong>La frecuencia.</strong> Una clase suelta para la víspera de un examen suele costar más por hora que un paquete mensual con clases fijas.',
          '<strong>Lo que viene incluido.</strong> Material, ejercicios para casa, revisión de tareas, informes a la familia. Dos clases con el mismo precio pueden traer cosas muy distintas.'
        ] },
        { kind: 'p', mt: true, html: 'Por eso esta página no le da una cifra del mercado: no existe una fuente pública que la mida, y cualquier número que circule depende de quién, dónde y cómo. Le damos, en cambio, una forma de comparar que funciona con cualquier oferta, y le mostramos dónde está nuestra tarifa para que la ponga en la misma cuenta.' }
      ]
    },
    {
      id: 'hora-reloj',
      eyebrow: 'Hora reloj',
      h2: '¿Cómo comparar precios de clases particulares de matemáticas?',
      lede: 'Convirtiendo todo a minutos de clase real y, si la familia se desplaza, sumando el tiempo de ida y vuelta. Cinco pasos.',
      body: [
        { kind: 'ol', items: [
          '<strong>Anote el monto del mes</strong> de cada oferta, con matrícula y materiales prorrateados si los hay.',
          '<strong>Anote cuántas sesiones hay al mes y cuántos minutos dura cada una.</strong> Si la oferta habla de "horas", pregunte si son de 45 o de 60 minutos.',
          '<strong>Multiplique</strong> sesiones por minutos: esos son los minutos de clase del mes.',
          '<strong>Divida el monto entre esos minutos y multiplique por 60.</strong> El resultado es el costo por hora reloj, comparable entre ofertas.',
          '<strong>Sume aparte el tiempo de la familia.</strong> Si su hijo va a una academia, el traslado no aparece en la boleta, pero alguien lo acompaña, espera y regresa. Ese tiempo también es un costo.'
        ] },
        { kind: 'p', mt: true, html: 'La hora pedagógica no es un invento de las academias: es la medida oficial del colegio. El Currículo Nacional del MINEDU la define como "horas pedagógicas (45 minutos)" y en esa unidad reparte el tiempo de cada área. Que una academia la use no tiene nada de malo; el problema es comparar ocho horas pedagógicas con ocho horas reloj como si fueran lo mismo.' }
      ]
    },
    {
      id: 'programa',
      tint: 'tint',
      eyebrow: 'Programa',
      h2: '¿Cómo pasar horas pedagógicas a horas reloj? Un programa en Python',
      lede: 'Con la función <code>divmod</code>, que divide y devuelve a la vez el cociente y el resto. Las tres ofertas son inventadas por nosotros, expresadas en "unidades" ficticias: ninguna corresponde a un profesor real ni a nosotros.',
      body: [
        { kind: 'code', label: 'Minutos de clase, minutos de familia', lang: 'Python', code: PY, note: 'Cada oferta indica monto, sesiones al mes, minutos por sesión y minutos de traslado ida y vuelta. <code>h_min</code> convierte minutos a horas y minutos con <code>divmod(minutos, 60)</code>.' },
        { kind: 'code', label: 'Resultado', lang: 'Salida', code: OUT, note: 'Esto imprimió Python 3 en nuestra máquina. Todo número de la tabla es una unidad ficticia; ninguno es una tarifa.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ocho "horas" que son seis.</strong> La Academia B da ocho sesiones de 45 minutos: 360 minutos, que <code>divmod(360, 60)</code> convierte en <code>(6, 0)</code>, es decir 6 h 00 min.',
          '<strong>El traslado duplica el tiempo.</strong> Con 50 minutos de ida y vuelta por sesión, la familia dedica 12 h 40 min al mes para recibir 6 horas de clase. <code>divmod(760, 60)</code> da <code>(12, 40)</code>.',
          '<strong>La mensualidad más alta no es la hora más cara.</strong> El Profesor A cobra 120 unidades por cuatro horas: 30.00 por hora reloj. La Clase C cobra 110 por ocho horas: 13.75. La B queda en 16.67, sin contar el traslado.',
          '<strong>Los ceros a la izquierda.</strong> <code>{resto:02d}</code> escribe siempre dos cifras, por eso aparece "4 h 00 min" y no "4 h 0 min".',
          '<strong>Sus ofertas.</strong> Reemplace los números por los de las clases que está comparando. Si su hijo tiene clase a domicilio, el traslado de la familia es cero, pero pregunte si el profesor lo cobra aparte.'
        ] },
        { kind: 'p', mt: true, html: 'Convertir unidades sin perder el resto es justo el tipo de razonamiento que el colegio pide en la competencia "Resuelve problemas de cantidad" del Currículo Nacional. Que su hijo escriba este programa con usted es, de paso, una clase de matemática.' }
      ]
    },
    {
      id: 'colegio',
      eyebrow: 'Colegio',
      h2: '¿Cuántas horas de matemática da el colegio y cuántas más hacen falta?',
      lede: 'El colegio ya da entre tres y cuatro horas y media de reloj por semana, según el grado y la jornada. Un reforzamiento útil suele sumar poco tiempo, bien usado, más que muchas horas extra.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Matemática semanal en el colegio peruano según el CNEB, en horas pedagógicas y en minutos de reloj', head: ['Grado y jornada', 'Horas pedagógicas por semana', 'Minutos de reloj (cálculo nuestro)'], rows: [
          ['1.° y 2.° de primaria', '5', '225'],
          ['3.° a 6.° de primaria', '4', '180'],
          ['Secundaria, jornada escolar regular', '4', '180'],
          ['Secundaria, jornada escolar completa', '6', '270']
        ] },
        { kind: 'source', html: 'Fuente: Ministerio de Educación, Currículo Nacional de la Educación Básica, Tablas N.° 6 (primaria), 8 (secundaria con jornada escolar regular) y 9 (secundaria con jornada escolar completa). La columna de minutos multiplica cada cifra por 45, la duración de la hora pedagógica en el mismo documento; la conversión es nuestra.' },
        { kind: 'p', mt: true, html: 'Visto así, una clase particular de una hora a la semana agrega entre un cuarto y un tercio del tiempo de matemática que su hijo ya recibe. Es bastante. Lo que decide si ese tiempo sirve no es su cantidad, sino que ataque lo que el colegio no alcanza a cubrir: el tema que quedó flojo, la duda que su hijo no se atreve a preguntar frente a treinta compañeros.' },
        { kind: 'p', html: 'Los resultados nacionales ayudan a poner el tema en perspectiva. El MINEDU informó el 13 de mayo de 2026 que la evaluación ENLA 2025 mostró, a nivel nacional, resultados similares a los de 2023 y 2024 en Lectura y Matemática, y que en 2.° de secundaria hubo avances en Matemática frente a 2023, los primeros cambios positivos después del cierre de las escuelas. Si su hijo está en esos grados, no está solo en la dificultad.' }
      ]
    },
    {
      id: 'presupuesto',
      eyebrow: 'Presupuesto',
      h2: '¿Cuántos meses de clases particulares de matemáticas conviene presupuestar?',
      lede: 'Depende de para qué. Hay tres casos frecuentes, y el calendario escolar del MINEDU ayuda a planificar cada uno.',
      body: [
        { kind: 'p', html: 'Según la Resolución Ministerial N.° 501-2025-MINEDU, el año escolar 2026 tiene treinta y seis semanas lectivas y ocho semanas de gestión, con un mínimo de 160 días lectivos. Las semanas lectivas se organizan en cuatro bloques de nueve semanas cada uno. Cada bloque es una buena unidad para presupuestar un reforzamiento.' },
        { kind: 'three', cells: [
          { h3: 'Un tema puntual', p: 'Un bloque de nueve semanas, o menos. Por ejemplo, ecuaciones de 2.° de secundaria. Se empieza al detectar el problema, no la semana del examen.' },
          { h3: 'Una base floja', p: 'Dos bloques seguidos. Primero se reconstruye lo que falta de grados anteriores y después se acompaña lo que se ve en clase.' },
          { h3: 'Ir más allá', p: 'Todo el año. Para quien disfruta la matemática y quiere olimpiadas, IB o preparación preuniversitaria con razonamiento en inglés.' }
        ] },
        { kind: 'p', mt: true, html: 'Los colegios pueden organizar el año en bimestres o trimestres, y las direcciones regionales pueden ajustar la distribución de semanas. Consulte el calendario de su colegio antes de fijar fechas. Para el verano, entre enero y marzo, muchas familias aprovechan para nivelar: es tiempo libre del colegio y las clases en línea siguen igual.' }
      ]
    },
    {
      id: 'domicilio',
      eyebrow: 'Domicilio u online',
      h2: '¿Clases de matemáticas a domicilio u online?',
      lede: 'Las dos funcionan si el profesor es bueno. La diferencia está en el tiempo, el costo y lo que se puede hacer en pantalla.',
      body: [
        { kind: 'two',
          leftH3: 'A favor de la clase a domicilio',
          left: [
            'El profesor ve el cuaderno de cerca y puede sentarse al lado del niño. Para los más pequeños, que todavía se distraen con la pantalla, puede ser más cómodo.',
            'No hace falta computadora, algo importante en un país donde, según el INEI, solo el 36,4% de los hogares tenía al menos una en el segundo trimestre de 2026.'
          ],
          rightH3: 'A favor de la clase online',
          right: [
            'No hay traslado para nadie, y eso suele abaratar la hora. Se puede reservar a horas en que un profesor no llegaría a su casa.',
            'La pizarra digital queda guardada y se repasa después. En Lima Metropolitana, el 84,7% de los hogares tenía internet en 2026 según el INEI; en el resto urbano, el 66,2%; en el área rural, el 27,1%.'
          ] },
        { kind: 'p', mt: true, html: 'Nosotros enseñamos solo en línea y en inglés. Para algunas familias eso es justo lo que buscan; para otras, la clase a domicilio en castellano será más adecuada, y está bien decirlo. Si quiere saber cómo trabajamos con niños pequeños, vea <a class="ag-inline-link" href="/clases-de-matematicas-en-ingles-para-ninos">clases de matemáticas en inglés para niños</a>. Para secundaria, la página de <a class="ag-inline-link" href="/profesor-particular-de-matematicas-online-peru">profesor particular de matemáticas online</a> explica nuestro reforzamiento.' }
      ]
    },
    {
      id: 'tarifa',
      eyebrow: 'Nuestra tarifa',
      h2: '¿Cuánto cuestan las clases de matemáticas de Modern Age Coders?',
      lede: 'Las dos tarjetas de precios de esta página, grupo e individual, muestran nuestra tarifa en dólares estadounidenses. Aquí explicamos qué cubre, para que la ponga en su comparación por hora reloj.',
      body: [
        { kind: 'p', html: 'El cobro es mensual y va a su tarjeta en dólares; la conversión a soles corre por cuenta de su banco. Cada mes incluye ocho clases en vivo de una hora reloj, no de 45 minutos. Para usar el método de esta página, divida el monto de la tarjeta entre ocho: ese es nuestro costo por hora reloj. No hay traslado ni matrícula que sumar.' },
        { kind: 'p', html: 'Enseñamos en inglés y en directo; los profesores, desde la India, explican despacio y comprueban que el estudiante entendió. El EF EPI 2025 ubica a Lima en el nivel alto de inglés, con 555 puntos, y para muchas familias de colegios bilingües eso convierte la clase en un refuerzo doble. Si su hijo sigue el programa del IB, vea también nuestra página de <a class="ag-inline-link" href="/tutor-ib-matematicas-en-ingles-peru">tutor de matemáticas IB en inglés</a>.' },
        { kind: 'p', html: 'No damos notas ni certificados oficiales y no reemplazamos al colegio: acompañamos lo que su hijo ve en clase. Si ya no lo necesita, no renueva el mes siguiente.' }
      ]
    },
    {
      id: 'horario',
      eyebrow: 'Horario',
      h2: '¿Puede un profesor desde la India dar clases a la hora de Lima?',
      lede: 'Sí. Lima vive en UTC-5 y la India en UTC+5:30 los doce meses, sin cambio de hora en ninguno de los dos: la diferencia es siempre de diez horas y media.',
      body: [
        { kind: 'p', html: 'Para tener una idea, calculado por nosotros: una clase a las 5:00 p. m. en Lima es a las 3:30 a. m. del día siguiente en la India; una a las 8:00 a. m. de un sábado en Lima es a las 6:30 p. m. de ese sábado allá; y una a las 7:00 p. m. en Lima cae a las 5:30 a. m. del día siguiente en la India. Son solo ejemplos de conversión.' },
        { kind: 'p', html: 'La tarifa no cambia con la hora. Domingo temprano o jueves tarde, el monto es idéntico.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Lo que recibe',
    h2: '¿Qué debe recibir una familia por cada mes de clases particulares?',
    lede: 'Cinco cosas que usted tiene derecho a reclamarnos mes a mes; úselas también para medir otras ofertas. La lista la armamos nosotros.',
    table: { caption: 'Lo que cubre un mes de matemáticas con nosotros (lista nuestra)', head: ['Concepto', 'Detalle', 'Verificación en casa'], rows: [
      ['Clases en vivo', 'Ocho de una hora reloj', 'Cuente las sesiones del mes'],
      ['Diagnóstico', 'Al empezar y al cambiar de tema', 'Pida el resultado por escrito'],
      ['Ejercicios para casa', 'Después de cada clase', 'Revise el cuaderno de su hijo'],
      ['Informe a la familia', 'Avances y temas pendientes', 'Llega por mensaje'],
      ['Profesor', 'El mismo de principio a fin', 'Pregunte a su hijo su nombre']
    ] },
    left: { h3: 'Antes de contratar a cualquier profesor', ps: [
      'Pregunte cuántos minutos dura cada sesión y si el traslado se cobra aparte.',
      'Pida una primera clase para ver cómo explica, no solo cómo resuelve.'
    ] },
    right: { h3: 'Durante el reforzamiento', ps: [
      'Fíjese si su hijo explica el procedimiento con sus palabras, no solo si llega al resultado.',
      'Revise los avances al terminar cada bloque de nueve semanas del calendario escolar.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos de matemáticas más',
    lede: 'Desde los primeros números hasta el IB, todos con la misma mensualidad, en vivo y en inglés.',
    bands: [
      { num: 'I', h3: 'Primaria', sub: 'De 6 a 11 años', courses: [
        { code: 'PPP / PRIMARIA / 01', slug: 'early-math-foundations', title: 'Primeros números', blurb: 'Contar, comparar y sumar con objetos y dibujos.' },
        { code: 'PPP / PRIMARIA / 02', slug: 'mental-maths-mastery-kids', title: 'Cálculo mental', blurb: 'Estrategias para operar rápido y sin miedo.' },
        { code: 'PPP / PRIMARIA / 03', slug: 'maths-through-coding', title: 'Matemática con código', blurb: 'Fracciones y patrones que se ven moverse en pantalla.' }
      ] },
      { num: 'II', h3: 'Secundaria', sub: 'De 12 a 17 años', courses: [
        { code: 'PPP / SECUNDARIA / 01', slug: 'algebra-foundations-masterclass', title: 'Bases de álgebra', blurb: 'Ecuaciones y expresiones, el tema que más reforzamiento pide.' },
        { code: 'PPP / SECUNDARIA / 02', slug: 'statistics-probability-maths-course', title: 'Estadística y probabilidad', blurb: 'Datos e incertidumbre, una competencia completa del currículo.' },
        { code: 'PPP / SECUNDARIA / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Matemática de olimpiada', blurb: 'Problemas originales para quien disfruta pensar.' }
      ] },
      { num: 'III', h3: 'Programas internacionales y adultos', sub: 'Desde los 14 años', courses: [
        { code: 'PPP / INTER / 01', slug: 'ib-mathematics-aa-ai-masterclass', title: 'Matemática IB', blurb: 'Análisis y Enfoques, o Aplicaciones e Interpretación.' },
        { code: 'PPP / INTER / 02', slug: 'igcse-mathematics-mastery', title: 'Matemática IGCSE', blurb: 'Para colegios con programa Cambridge.' },
        { code: 'PPP / INTER / 03', slug: 'college-mathematics-complete-masterclass', title: 'Matemática universitaria', blurb: 'Para universitarios y adultos que retoman la materia.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Funcionamiento',
    h2: '¿Cómo son las clases particulares de matemáticas en línea?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Después del colegio', l: 'Con la tarea del día todavía fresca.' },
      { time: 'Fin de semana', l: 'Para repasar la semana con calma.' },
      { time: 'Antes de un examen', l: 'Más sesiones durante esas semanas.' }
    ],
    cells: [
      { h3: 'Pizarra compartida', p: 'Profesor y estudiante escriben en el mismo espacio.' },
      { h3: 'Explicar antes de resolver', p: 'El estudiante dice cómo lo haría antes de calcular.' },
      { h3: 'Una hora reloj', p: 'Sesiones de sesenta minutos, no de cuarenta y cinco.' },
      { h3: 'Mismo profesor', p: 'Una sola persona conoce los vacíos de su hijo.' },
      { h3: 'Ejercicios propios', p: 'Problemas escritos por nosotros, ajustados al nivel.' },
      { h3: 'Grupo o individual', p: 'Quince a veinte estudiantes, o su hijo solo.' }
    ]
  },

  projectsH2: 'Trabajos de nuestros estudiantes',
  projectsLede: 'Proyectos reales de estudiantes, varios que mezclan matemática y programación. La colección completa está en <a class="ag-inline-link" href="/student-labs">Student labs</a>.',
  reviewsLede: 'Opiniones publicadas en Google por estudiantes y familias, sin traducir.',

  fees: {
    h2: 'Nuestra tarifa mensual de matemáticas',
    lede: 'Los montos figuran en dólares estadounidenses, la moneda en que se carga la tarjeta cada mes; su banco hace la conversión. No cobramos matrícula ni traslado.',
    free: ['Primera clase completa, gratis', 'Diagnóstico del nivel', 'Sin tarjeta para reservar'],
    group: ['Quince a veinte estudiantes del mismo nivel', 'Ocho clases en vivo al mes', 'Profesor fijo', 'Puede dejarlo cualquier mes'],
    one: ['Su hijo y el profesor, solos', 'Ocho clases en vivo al mes', 'Temas según su colegio']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Tarifas de clases particulares de matemáticas: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Nuestras clases de matemáticas son en vivo y en inglés, con profesores desde la India que explican pausado. Es una ventaja: su hijo repasa matemática y practica inglés hablado, la habilidad más baja del Perú en el EF EPI 2025 (480 puntos), mientras Lima ya está en el nivel alto con 555. Con usted coordinamos en castellano.' },
      { q: '¿Cuánto cobra un profesor particular de matemáticas por hora en Perú?', a: 'No hay una tarifa oficial ni un promedio publicado por una fuente pública. Depende del formato, el nivel, si es individual y si cuenta horas de 45 o de 60 minutos. Compare siempre por hora reloj y sume el traslado.' },
      { q: '¿Una hora pedagógica es una hora?', a: 'No. El Currículo Nacional del MINEDU la fija en 45 minutos. Ocho horas pedagógicas son seis horas reloj.' },
      { q: '¿Cuánto dura cada una de sus clases?', a: 'Una hora reloj. Cada mes incluye ocho clases en vivo, según las tarjetas de precios.' },
      { q: '¿Cuál es su tarifa?', a: 'La ve más arriba, en las dos tarjetas de matemáticas (grupo e individual), expresada en dólares estadounidenses. Divida el monto entre ocho para obtener el costo por hora reloj.' },
      { q: '¿Hacen clases a domicilio?', a: 'No. Solo enseñamos en línea, en vivo y en inglés. Si su familia prefiere clases presenciales en castellano, esa será otra opción.' },
      { q: '¿Preparan para el examen de admisión?', a: 'Los exámenes de admisión peruanos se rinden en castellano. Podemos reforzar el razonamiento matemático en inglés, pero no prometemos ingresos: la universidad decide.' },
      { q: '¿Cuántos meses de reforzamiento hacen falta?', a: 'Para un tema puntual, un bloque de nueve semanas del calendario escolar suele bastar; para una base floja, dos. El diagnóstico de la clase de prueba ayuda a estimarlo.' },
      { q: '¿Hay que comprometerse con un día de clase?', a: 'En absoluto. Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Reservar de noche o de mañana no altera el monto.' },
      { q: '¿Hay contrato de permanencia?', a: 'Ninguno. Se paga mes a mes, y si su hijo ya no necesita el reforzamiento, simplemente no renueva el mes siguiente.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Para seguir',
    h2: 'Otras páginas de matemáticas',
    lede: 'En castellano y en inglés.',
    items: [
      { href: '/profesor-particular-de-matematicas-online-peru', label: 'Profesor particular de matemáticas online', p: 'Cómo trabajamos el reforzamiento de secundaria.' },
      { href: '/profesor-de-matematicas-en-ingles-peru', label: 'Profesor de matemáticas en inglés', p: 'Para estudiantes que quieren la materia y el idioma a la vez.' },
      { href: '/clases-de-matematicas-en-ingles-para-ninos', label: 'Clases de matemáticas en inglés para niños', p: 'Primaria, con números y palabras en inglés.' },
      { href: '/tutor-ib-matematicas-en-ingles-peru', label: 'Tutor de matemáticas IB en inglés', p: 'Para colegios con Bachillerato Internacional.' },
      { href: '/pricing', label: 'Pricing', p: 'Todos nuestros planes, en inglés.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Matemáticas, programación e IA: todo lo que ofrecemos a familias peruanas.' }
    ]
  },

  start: {
    h2: 'Pida una clase de prueba antes de comparar',
    lede: 'La primera clase es gratuita. El profesor hace un diagnóstico corto, trabaja un tema con su hijo y al final le dice cuántas semanas de reforzamiento estima y en qué formato.',
    readFirst: 'Si quiere ver todos nuestros planes antes, revise <a class="ag-inline-link" href="/pricing">Pricing</a>, en inglés.',
    note: 'Enseñamos matemáticas únicamente en inglés y en directo por videollamada; el profesor trabaja desde la India. Los mensajes con la familia pueden ser en castellano.',
    formNote: 'Sin pago, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Cursos de matemáticas', links: [
        { href: '/courses/elementary-mathematics-complete-masterclass', label: 'Primaria' },
        { href: '/courses/comprehensive-middle-school-mathematics-mastery', label: 'Secundaria inicial' },
        { href: '/courses/complete-high-school-mathematics-mastery', label: 'Secundaria final' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Perú', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Clases en Perú' },
        { href: '/profesor-particular-de-matematicas-online-peru', label: 'Profesor online' },
        { href: '/tutor-ib-matematicas-en-ingles-peru', label: 'Tutor IB' },
        { href: '/pricing', label: 'Precios' }
      ] }
    ],
    bottomRight: 'Ocho horas pedagógicas son seis horas de reloj'
  },

  personalityCss: `
.ag-root.ag-ppp .ag-hero h1 { max-width: 21ch; letter-spacing: -0.01em; }
.ag-root.ag-ppp .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-ppp .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-ppp .ag-steps li { line-height: 1.58; }
.ag-root.ag-ppp .ag-capsule { border-left-width: 3px; }
`,

  dossier: {
    curriculumAuthority: 'MINEDU CNEB (hora pedagógica of 45 minutes; maths hours in Tablas N.° 6, 8 and 9; competency 23); RM 501-2025-MINEDU (2026 school year: 36 teaching weeks in four nine-week blocks, at least 160 teaching days); MINEDU press note of 13 May 2026 on ENLA 2025; INEI TIC bulletin II Trimestre 2026; EF EPI 2025 Peru page; the template maths fees cards (USD, eight live classes a month); tzdata. The six factors, the five steps, the minute conversions, the budgeting cases, the monthly list and the Python program are our own.',
    localProject: 'A divmod program in Python with three invented offers in "unidades" (no tutor\'s prices): a home tutor (4 sessions of 60 minutes), an academy counting 45-minute hours (8 sessions, 50 minutes of travel each) and an online class (8 sessions of 60 minutes). Class time 4 h 00 min, 6 h 00 min and 8 h 00 min; family time for the academy 12 h 40 min; cost per clock hour 30.00, 16.67 and 13.75. Lesson family: unit conversion with divmod, school hours against clock hours, travel time as a cost.',
    requiredMentions: ['Academia B, por hora pedag.    clase  6 h 00 min  tiempo familiar 12 h 40 min   16.67 por hora reloj', 'Minutos de clase, minutos de familia', 'Matemática semanal en el colegio peruano según el CNEB, en horas pedagógicas y en minutos de reloj', 'Secundaria, jornada escolar completa', 'treinta y seis semanas lectivas y ocho semanas de gestión, con un mínimo de 160 días lectivos', 'cuatro bloques de nueve semanas cada uno', 'Lo que cubre un mes de matemáticas con nosotros (lista nuestra)', 'ocho clases en vivo de una hora reloj, no de 45 minutos', 'Ocho horas pedagógicas son seis horas de reloj'],
    sources: [
      { claim: 'CNEB: hora pedagógica of 45 minutes; Matemática 5 5 4 4 4 4 (primaria), 4 4 4 4 4 (secundaria JER), 6 6 6 6 6 (secundaria JEC); competency 23.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'RM 501-2025-MINEDU: 36 teaching weeks and 8 management weeks, at least 160 teaching days; four teaching blocks of 9 weeks.', url: 'https://cdn.www.gob.pe/uploads/document/file/8968298/7380466-rm-n-501-2025-minedu.pdf' },
      { claim: 'ENLA 2025 (published 13 May 2026): national results similar to 2023 and 2024; maths gains in 2° secundaria over 2023.', url: 'https://www.gob.pe/institucion/minedu/noticias/1390772-enla-2025-se-mantienen-avances-en-lectura-y-matematica-con-mejoras-en-las-zonas-rurales' },
      { claim: 'INEI II Trimestre 2026: homes with internet Lima Metropolitana 84.7%, rest urban 66.2%, rural 27.1%; 36.4% of homes with a computer.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'EF EPI 2025: Lima 555 (high), speaking 480.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' }
    ],
    rejectedClaims: [
      'A market average or typical hourly rate for maths tutors in Peru: refused; no public primary source measures it.',
      'Any competitor or academy price, a soles figure or our fee typed in copy: refused; our fee renders from the template (priceSubject maths).',
      'Admission or grade promises: refused; the page says the admission exams are in Spanish and the university decides.',
      'Home visits: refused; we teach online only and say so.',
      'Official certificates or grades: refused.'
    ]
  }
};
