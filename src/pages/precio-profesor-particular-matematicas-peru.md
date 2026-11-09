---
title: "Precio de un profesor particular de matemáticas en Perú"
description: "¿Cuánto cobra un profesor particular de matemáticas en Perú? Qué mueve el precio, cómo compararlo por hora reloj y qué cobramos por clases en vivo en inglés."
canonical: https://learn.modernagecoders.com/precio-profesor-particular-matematicas-peru
source: src/pages/precio-profesor-particular-matematicas-peru.html
---
> El precio de un profesor particular de matemáticas en Perú depende del formato (a domicilio, en academia o en línea), del nivel, de si la clase es individual o en grupo, de cuántas horas da al mes y de si cuenta horas pedagógicas de 45 minutos u horas de reloj. Para comparar, lleve todo a horas reloj y sume el tiempo de traslado. Modern Age Coders da clases de matemáticas en vivo, en línea y en inglés, individuales o en grupo, a cualquier hora, con una tarifa mensual en dólares que aparece en esta página.

[Inicio](/) / [Cursos](/courses) / [Perú](/coding-and-ai-classes-in-peru) / Precio del profesor de matemáticas

Perú · Matemáticas · Clases particulares

# Precio de un profesor particular de matemáticas en Perú

No existe una tarifa oficial ni un promedio publicado por una fuente pública para las clases particulares de matemáticas en Perú. Lo que sí se puede hacer es comparar bien: convertir todo a horas de reloj, sumar los traslados y pensar cuántas semanas de reforzamiento necesita su hijo en el año escolar.

En resumen: Idioma de las clases: Clases en vivo y en línea, solo en inglés, al ritmo del estudiante; los mentores hablan claro y adaptan su velocidad y su acento a cada estudiante; Niveles: Primaria, secundaria, IB, IGCSE y adultos; Formato: En vivo por videollamada; Modalidad: Individual, o grupo de quince a veinte; Pago: Mensual, en dólares, con tarjeta; Incluye: Ocho clases en vivo al mes; Primera clase: Gratuita. 4.9 de 5 en 547 reseñas de Google.

## Tres cursos de matemáticas según la etapa escolar

Uno para primaria, uno para los primeros años de secundaria y uno para los últimos. Los tres se pagan con la misma mensualidad.

- [Matemática de primaria](/courses/elementary-mathematics-complete-masterclass): Para niños de 6 a 11 años. Números, operaciones, fracciones y problemas con enunciado, explicados paso a paso en un inglés sencillo.
- [Matemática de 1.° a 3.° de secundaria](/courses/comprehensive-middle-school-mathematics-mastery): El tramo donde suelen aparecer las primeras dificultades: álgebra, proporciones, ecuaciones y geometría con razonamiento.
- [Matemática de 4.° y 5.° de secundaria](/courses/complete-high-school-mathematics-mastery): Funciones, trigonometría, estadística y probabilidad, con la profundidad que pide quien piensa en la universidad.

## ¿Cuánto cobra un profesor particular de matemáticas por hora en Perú?

Depende de seis cosas. Ninguna fuente pública publica un promedio de mercado, y desconfíe de quien le dé una cifra "normal" sin decir de dónde sale.

1. **Dónde ocurre la clase.** A domicilio, el profesor cobra también su traslado, aunque no lo detalle. En una academia, usted paga el local. En línea no hay traslado para nadie.
2. **Individual o en grupo.** Una hora individual cuesta más que una hora en grupo porque el profesor la dedica entera a un solo estudiante.
3. **El nivel.** Reforzar sumas de 3.° de primaria no exige lo mismo que preparar funciones de 5.° de secundaria o matemática del IB. A más nivel, menos profesores disponibles.
4. **Cuánto dura una "hora".** Muchas academias peruanas cuentan en horas pedagógicas de 45 minutos. Una oferta de ocho horas pedagógicas da seis horas de reloj.
5. **La frecuencia.** Una clase suelta para la víspera de un examen suele costar más por hora que un paquete mensual con clases fijas.
6. **Lo que viene incluido.** Material, ejercicios para casa, revisión de tareas, informes a la familia. Dos clases con el mismo precio pueden traer cosas muy distintas.

Por eso esta página no le da una cifra del mercado: no existe una fuente pública que la mida, y cualquier número que circule depende de quién, dónde y cómo. Le damos, en cambio, una forma de comparar que funciona con cualquier oferta, y le mostramos dónde está nuestra tarifa para que la ponga en la misma cuenta.

## ¿Cómo comparar precios de clases particulares de matemáticas?

Convirtiendo todo a minutos de clase real y, si la familia se desplaza, sumando el tiempo de ida y vuelta. Cinco pasos.

1. **Anote el monto del mes** de cada oferta, con matrícula y materiales prorrateados si los hay.
2. **Anote cuántas sesiones hay al mes y cuántos minutos dura cada una.** Si la oferta habla de "horas", pregunte si son de 45 o de 60 minutos.
3. **Multiplique** sesiones por minutos: esos son los minutos de clase del mes.
4. **Divida el monto entre esos minutos y multiplique por 60.** El resultado es el costo por hora reloj, comparable entre ofertas.
5. **Sume aparte el tiempo de la familia.** Si su hijo va a una academia, el traslado no aparece en la boleta, pero alguien lo acompaña, espera y regresa. Ese tiempo también es un costo.

La hora pedagógica no es un invento de las academias: es la medida oficial del colegio. El Currículo Nacional del MINEDU la define como "horas pedagógicas (45 minutos)" y en esa unidad reparte el tiempo de cada área. Que una academia la use no tiene nada de malo; el problema es comparar ocho horas pedagógicas con ocho horas reloj como si fueran lo mismo.

## ¿Cómo pasar horas pedagógicas a horas reloj? Un programa en Python

Con la función divmod, que divide y devuelve a la vez el cociente y el resto. Las tres ofertas son inventadas por nosotros, expresadas en "unidades" ficticias: ninguna corresponde a un profesor real ni a nosotros.

**Minutos de clase, minutos de familia** (Python)
```python
# Ofertas INVENTADAS en "unidades": no son tarifas de ningun profesor ni las nuestras
ofertas = [
    # (nombre, monto, sesiones al mes, minutos por sesion, minutos de traslado ida y vuelta)
    ('Profesor A, a domicilio',      120, 4, 60, 0),
    ('Academia B, por hora pedag.',  100, 8, 45, 50),
    ('Clase C en linea',             110, 8, 60, 0),
]

def h_min(minutos):
    horas, resto = divmod(minutos, 60)
    return f'{horas} h {resto:02d} min'

for nombre, monto, sesiones, duracion, traslado in ofertas:
    clase = sesiones * duracion
    familia = sesiones * (duracion + traslado)
    por_hora = monto / clase * 60
    print(f'{nombre:<30} clase {h_min(clase):>11}  tiempo familiar {h_min(familia):>11}  {por_hora:6.2f} por hora reloj')
```
Cada oferta indica monto, sesiones al mes, minutos por sesión y minutos de traslado ida y vuelta. h_min convierte minutos a horas y minutos con divmod(minutos, 60).

**Resultado** (Salida)
```salida
Profesor A, a domicilio        clase  4 h 00 min  tiempo familiar  4 h 00 min   30.00 por hora reloj
Academia B, por hora pedag.    clase  6 h 00 min  tiempo familiar 12 h 40 min   16.67 por hora reloj
Clase C en linea               clase  8 h 00 min  tiempo familiar  8 h 00 min   13.75 por hora reloj
```
Esto imprimió Python 3 en nuestra máquina. Todo número de la tabla es una unidad ficticia; ninguno es una tarifa.

1. **Ocho "horas" que son seis.** La Academia B da ocho sesiones de 45 minutos: 360 minutos, que divmod(360, 60) convierte en (6, 0), es decir 6 h 00 min.
2. **El traslado duplica el tiempo.** Con 50 minutos de ida y vuelta por sesión, la familia dedica 12 h 40 min al mes para recibir 6 horas de clase. divmod(760, 60) da (12, 40).
3. **La mensualidad más alta no es la hora más cara.** El Profesor A cobra 120 unidades por cuatro horas: 30.00 por hora reloj. La Clase C cobra 110 por ocho horas: 13.75. La B queda en 16.67, sin contar el traslado.
4. **Los ceros a la izquierda.** {resto:02d} escribe siempre dos cifras, por eso aparece "4 h 00 min" y no "4 h 0 min".
5. **Sus ofertas.** Reemplace los números por los de las clases que está comparando. Si su hijo tiene clase a domicilio, el traslado de la familia es cero, pero pregunte si el profesor lo cobra aparte.

Convertir unidades sin perder el resto es justo el tipo de razonamiento que el colegio pide en la competencia "Resuelve problemas de cantidad" del Currículo Nacional. Que su hijo escriba este programa con usted es, de paso, una clase de matemática.

## ¿Cuántas horas de matemática da el colegio y cuántas más hacen falta?

El colegio ya da entre tres y cuatro horas y media de reloj por semana, según el grado y la jornada. Un reforzamiento útil suele sumar poco tiempo, bien usado, más que muchas horas extra.

**Matemática semanal en el colegio peruano según el CNEB, en horas pedagógicas y en minutos de reloj**

| Grado y jornada | Horas pedagógicas por semana | Minutos de reloj (cálculo nuestro) |
|---|---|---|
| 1.° y 2.° de primaria | 5 | 225 |
| 3.° a 6.° de primaria | 4 | 180 |
| Secundaria, jornada escolar regular | 4 | 180 |
| Secundaria, jornada escolar completa | 6 | 270 |

Fuente: Ministerio de Educación, Currículo Nacional de la Educación Básica, Tablas N.° 6 (primaria), 8 (secundaria con jornada escolar regular) y 9 (secundaria con jornada escolar completa). La columna de minutos multiplica cada cifra por 45, la duración de la hora pedagógica en el mismo documento; la conversión es nuestra.

Visto así, una clase particular de una hora a la semana agrega entre un cuarto y un tercio del tiempo de matemática que su hijo ya recibe. Es bastante. Lo que decide si ese tiempo sirve no es su cantidad, sino que ataque lo que el colegio no alcanza a cubrir: el tema que quedó flojo, la duda que su hijo no se atreve a preguntar frente a treinta compañeros.

Los resultados nacionales ayudan a poner el tema en perspectiva. El MINEDU informó el 13 de mayo de 2026 que la evaluación ENLA 2025 mostró, a nivel nacional, resultados similares a los de 2023 y 2024 en Lectura y Matemática, y que en 2.° de secundaria hubo avances en Matemática frente a 2023, los primeros cambios positivos después del cierre de las escuelas. Si su hijo está en esos grados, no está solo en la dificultad.

## ¿Cuántos meses de clases particulares de matemáticas conviene presupuestar?

Depende de para qué. Hay tres casos frecuentes, y el calendario escolar del MINEDU ayuda a planificar cada uno.

Según la Resolución Ministerial N.° 501-2025-MINEDU, el año escolar 2026 tiene treinta y seis semanas lectivas y ocho semanas de gestión, con un mínimo de 160 días lectivos. Las semanas lectivas se organizan en cuatro bloques de nueve semanas cada uno. Cada bloque es una buena unidad para presupuestar un reforzamiento.

### Un tema puntual

Un bloque de nueve semanas, o menos. Por ejemplo, ecuaciones de 2.° de secundaria. Se empieza al detectar el problema, no la semana del examen.

### Una base floja

Dos bloques seguidos. Primero se reconstruye lo que falta de grados anteriores y después se acompaña lo que se ve en clase.

### Ir más allá

Todo el año. Para quien disfruta la matemática y quiere olimpiadas, IB o preparación preuniversitaria con razonamiento en inglés.

Los colegios pueden organizar el año en bimestres o trimestres, y las direcciones regionales pueden ajustar la distribución de semanas. Consulte el calendario de su colegio antes de fijar fechas. Para el verano, entre enero y marzo, muchas familias aprovechan para nivelar: es tiempo libre del colegio y las clases en línea siguen igual.

## ¿Clases de matemáticas a domicilio u online?

Las dos funcionan si el profesor es bueno. La diferencia está en el tiempo, el costo y lo que se puede hacer en pantalla.

### A favor de la clase a domicilio

El profesor ve el cuaderno de cerca y puede sentarse al lado del niño. Para los más pequeños, que todavía se distraen con la pantalla, puede ser más cómodo.

No hace falta computadora, algo importante en un país donde, según el INEI, solo el 36,4% de los hogares tenía al menos una en el segundo trimestre de 2026.

### A favor de la clase online

No hay traslado para nadie, y eso suele abaratar la hora. Se puede reservar a horas en que un profesor no llegaría a su casa.

La pizarra digital queda guardada y se repasa después. En Lima Metropolitana, el 84,7% de los hogares tenía internet en 2026 según el INEI; en el resto urbano, el 66,2%; en el área rural, el 27,1%.

Nosotros enseñamos solo en línea y en inglés. Para algunas familias eso es justo lo que buscan; para otras, la clase a domicilio en castellano será más adecuada, y está bien decirlo. Si quiere saber cómo trabajamos con niños pequeños, vea [clases de matemáticas en inglés para niños](/clases-de-matematicas-en-ingles-para-ninos). Para secundaria, la página de [profesor particular de matemáticas online](/profesor-particular-de-matematicas-online-peru) explica nuestro reforzamiento.

## ¿Cuánto cuestan las clases de matemáticas de Modern Age Coders?

Las dos tarjetas de precios de esta página, grupo e individual, muestran nuestra tarifa en dólares estadounidenses. Aquí explicamos qué cubre, para que la ponga en su comparación por hora reloj.

El cobro es mensual y va a su tarjeta en dólares; la conversión a soles corre por cuenta de su banco. Cada mes incluye ocho clases en vivo de una hora reloj, no de 45 minutos. Para usar el método de esta página, divida el monto de la tarjeta entre ocho: ese es nuestro costo por hora reloj. No hay traslado ni matrícula que sumar.

Enseñamos en inglés y en directo; los profesores, desde la India, explican despacio y comprueban que el estudiante entendió. El EF EPI 2025 ubica a Lima en el nivel alto de inglés, con 555 puntos, y para muchas familias de colegios bilingües eso convierte la clase en un refuerzo doble. Si su hijo sigue el programa del IB, vea también nuestra página de [tutor de matemáticas IB en inglés](/tutor-ib-matematicas-en-ingles-peru).

No damos notas ni certificados oficiales y no reemplazamos al colegio: acompañamos lo que su hijo ve en clase. Si ya no lo necesita, no renueva el mes siguiente.

## ¿Puede un profesor desde la India dar clases a la hora de Lima?

Sí. Lima vive en UTC-5 y la India en UTC+5:30 los doce meses, sin cambio de hora en ninguno de los dos: la diferencia es siempre de diez horas y media.

Para tener una idea, calculado por nosotros: una clase a las 5:00 p. m. en Lima es a las 3:30 a. m. del día siguiente en la India; una a las 8:00 a. m. de un sábado en Lima es a las 6:30 p. m. de ese sábado allá; y una a las 7:00 p. m. en Lima cae a las 5:30 a. m. del día siguiente en la India. Son solo ejemplos de conversión.

La tarifa no cambia con la hora. Domingo temprano o jueves tarde, el monto es idéntico.

## ¿Qué debe recibir una familia por cada mes de clases particulares?

Cinco cosas que usted tiene derecho a reclamarnos mes a mes; úselas también para medir otras ofertas. La lista la armamos nosotros.

**Lo que cubre un mes de matemáticas con nosotros (lista nuestra)**

| Concepto | Detalle | Verificación en casa |
|---|---|---|
| Clases en vivo | Ocho de una hora reloj | Cuente las sesiones del mes |
| Diagnóstico | Al empezar y al cambiar de tema | Pida el resultado por escrito |
| Ejercicios para casa | Después de cada clase | Revise el cuaderno de su hijo |
| Informe a la familia | Avances y temas pendientes | Llega por mensaje |
| Profesor | El mismo de principio a fin | Pregunte a su hijo su nombre |

### Antes de contratar a cualquier profesor

Pregunte cuántos minutos dura cada sesión y si el traslado se cobra aparte.
Pida una primera clase para ver cómo explica, no solo cómo resuelve.

### Durante el reforzamiento

Fíjese si su hijo explica el procedimiento con sus palabras, no solo si llega al resultado.
Revise los avances al terminar cada bloque de nueve semanas del calendario escolar.

## Nueve cursos de matemáticas más

Desde los primeros números hasta el IB, todos con la misma mensualidad, en vivo y en inglés.

### Primaria

De 6 a 11 años

- [Primeros números](/courses/early-math-foundations): Contar, comparar y sumar con objetos y dibujos.
- [Cálculo mental](/courses/mental-maths-mastery-kids): Estrategias para operar rápido y sin miedo.
- [Matemática con código](/courses/maths-through-coding): Fracciones y patrones que se ven moverse en pantalla.

### Secundaria

De 12 a 17 años

- [Bases de álgebra](/courses/algebra-foundations-masterclass): Ecuaciones y expresiones, el tema que más reforzamiento pide.
- [Estadística y probabilidad](/courses/statistics-probability-maths-course): Datos e incertidumbre, una competencia completa del currículo.
- [Matemática de olimpiada](/courses/olympiad-competition-mathematics-mastery): Problemas originales para quien disfruta pensar.

### Programas internacionales y adultos

Desde los 14 años

- [Matemática IB](/courses/ib-mathematics-aa-ai-masterclass): Análisis y Enfoques, o Aplicaciones e Interpretación.
- [Matemática IGCSE](/courses/igcse-mathematics-mastery): Para colegios con programa Cambridge.
- [Matemática universitaria](/courses/college-mathematics-complete-masterclass): Para universitarios y adultos que retoman la materia.

## ¿Cómo son las clases particulares de matemáticas en línea?

Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.

- **Después del colegio** Con la tarea del día todavía fresca.
- **Fin de semana** Para repasar la semana con calma.
- **Antes de un examen** Más sesiones durante esas semanas.

- **Pizarra compartida** Profesor y estudiante escriben en el mismo espacio.
- **Explicar antes de resolver** El estudiante dice cómo lo haría antes de calcular.
- **Una hora reloj** Sesiones de sesenta minutos, no de cuarenta y cinco.
- **Mismo profesor** Una sola persona conoce los vacíos de su hijo.
- **Ejercicios propios** Problemas escritos por nosotros, ajustados al nivel.
- **Grupo o individual** Quince a veinte estudiantes, o su hijo solo.

## Nuestra tarifa mensual de matemáticas

Los montos figuran en dólares estadounidenses, la moneda en que se carga la tarjeta cada mes; su banco hace la conversión. No cobramos matrícula ni traslado.

- Primera clase gratis: Gratis. Primera clase completa, gratis. Diagnóstico del nivel. Sin tarjeta para reservar.
- Clase grupal: USD 100 al mes. Quince a veinte estudiantes del mismo nivel. Ocho clases en vivo al mes. Profesor fijo. Puede dejarlo cualquier mes.
- Clases individuales: USD 150 al mes. Su hijo y el profesor, solos. Ocho clases en vivo al mes. Temas según su colegio.

## Tarifas de clases particulares de matemáticas: preguntas frecuentes

### ¿Las clases son en español?

No. Nuestras clases de matemáticas son en vivo y en inglés, con profesores desde la India que explican pausado. Es una ventaja: su hijo repasa matemática y practica inglés hablado, la habilidad más baja del Perú en el EF EPI 2025 (480 puntos), mientras Lima ya está en el nivel alto con 555. Con usted coordinamos en castellano.

### ¿Cuánto cobra un profesor particular de matemáticas por hora en Perú?

No hay una tarifa oficial ni un promedio publicado por una fuente pública. Depende del formato, el nivel, si es individual y si cuenta horas de 45 o de 60 minutos. Compare siempre por hora reloj y sume el traslado.

### ¿Una hora pedagógica es una hora?

No. El Currículo Nacional del MINEDU la fija en 45 minutos. Ocho horas pedagógicas son seis horas reloj.

### ¿Cuánto dura cada una de sus clases?

Una hora reloj. Cada mes incluye ocho clases en vivo, según las tarjetas de precios.

### ¿Cuál es su tarifa?

La ve más arriba, en las dos tarjetas de matemáticas (grupo e individual), expresada en dólares estadounidenses. Divida el monto entre ocho para obtener el costo por hora reloj.

### ¿Hacen clases a domicilio?

No. Solo enseñamos en línea, en vivo y en inglés. Si su familia prefiere clases presenciales en castellano, esa será otra opción.

### ¿Preparan para el examen de admisión?

Los exámenes de admisión peruanos se rinden en castellano. Podemos reforzar el razonamiento matemático en inglés, pero no prometemos ingresos: la universidad decide.

### ¿Cuántos meses de reforzamiento hacen falta?

Para un tema puntual, un bloque de nueve semanas del calendario escolar suele bastar; para una base floja, dos. El diagnóstico de la clase de prueba ayuda a estimarlo.

### ¿Hay que comprometerse con un día de clase?

En absoluto. Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Reservar de noche o de mañana no altera el monto.

### ¿Hay contrato de permanencia?

Ninguno. Se paga mes a mes, y si su hijo ya no necesita el reforzamiento, simplemente no renueva el mes siguiente.

## Otras páginas de matemáticas

- [Profesor particular de matemáticas online](/profesor-particular-de-matematicas-online-peru): Cómo trabajamos el reforzamiento de secundaria.
- [Profesor de matemáticas en inglés](/profesor-de-matematicas-en-ingles-peru): Para estudiantes que quieren la materia y el idioma a la vez.
- [Clases de matemáticas en inglés para niños](/clases-de-matematicas-en-ingles-para-ninos): Primaria, con números y palabras en inglés.
- [Tutor de matemáticas IB en inglés](/tutor-ib-matematicas-en-ingles-peru): Para colegios con Bachillerato Internacional.
- [Pricing](/pricing): Todos nuestros planes, en inglés.
- [Coding and AI classes in Peru](/coding-and-ai-classes-in-peru): Matemáticas, programación e IA: todo lo que ofrecemos a familias peruanas.

## Contacto

Reserve la primera clase gratis en [https://learn.modernagecoders.com/precio-profesor-particular-matematicas-peru](https://learn.modernagecoders.com/precio-profesor-particular-matematicas-peru#start), por WhatsApp o llamando al +91 91233 66161 (un número de la India, el contacto real de Modern Age Coders) o por correo a connect@modernagecoders.com.
