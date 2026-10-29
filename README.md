# Repaso de Promesas en JavaScript

## Propósito

Entorno web local para consultar y resolver los ejercicios del documento Repaso promesas.docx. El tema es JavaScript y las páginas usan HTML, CSS y JavaScript vanilla.

## Criterio de selección

Se incluyeron todos los ejercicios del documento, en su orden y numeración original: del 1 al 51, organizados en los seis bloques que aparecen en la fuente. Las listas del documento numeran los primeros cinco bloques como 1–10, 11–20, 21–30, 31–40 y 41–50; el último ejercicio aparece rotulado como 51. Los tres puntos numerados dentro del ejercicio 51 son requisitos de esa consigna, no ejercicios independientes.

Los ejercicios 1–10 y 51 tienen títulos explícitos. Para las tarjetas de los ejercicios 11–50, que no tienen un título separado en la fuente, se usa «Ejercicio [número]» como rótulo y se muestra la consigna original en la descripción. Las notas y los tips que ya forman parte de la fuente se mantienen en sus consignas. El documento original no se modifica.

## Estructura

- index.html: índice organizado por los seis bloques.
- assets/css/styles.css: diseño compartido responsive.
- assets/js/main.js: seguimiento de estado, persistencia local e importación/exportación.
- assets/favicon.svg: icono local del proyecto.
- ejercicio-XX/index.html: consigna, seguimiento, área de resultados y navegación.
- ejercicio-XX/css/styles.css: hoja CSS independiente del ejercicio.
- ejercicio-XX/js/script.js: plantilla independiente para escribir la solución.
- ejercicio-XX/js/functions.js: plantilla independiente para las funciones auxiliares.
- Repaso promesas.docx: documento fuente, conservado sin cambios.

## Abrir el proyecto

1. Abre esta carpeta en VS Code.
2. Abre index.html y ejecútalo con Live Server.
3. Usa las tarjetas para abrir ejercicios. En cada página, los controles permiten ir al ejercicio anterior o siguiente y volver al índice.

Live Server es necesario: todos los `script.js` de los ejercicios se cargan como módulos ES (`type="module"`) y los navegadores bloquean los módulos al abrir los archivos directamente con `file://`. El script compartido `assets/js/main.js` sigue siendo un script clásico.

## Dónde escribir y consultar resultados

Escribe cada solución en el script.js de su carpeta ejercicio-XX. Cada archivo nuevo contiene únicamente un comentario para señalar dónde empezar.

Cada ejercicio incluye además un functions.js con la misma plantilla vacía, destinado a las funciones auxiliares. Si la solución no las necesita, el archivo puede quedar sin usar o eliminarse. Cuando se use, sus funciones se exportan y se importan desde script.js.

Cada página dispone de un área de resultados. La indicación «(ver en consola)» aparece dentro de esa área, salvo que la consigna requiera mostrar el resultado en pantalla, en el DOM o mediante elementos HTML. Cuando aparezca la indicación, consulta la consola de herramientas de desarrollo del navegador.

## Progreso

El estado pendiente/resuelto se puede cambiar desde el control discreto situado arriba a la derecha de la consigna; también se muestra arriba a la derecha de cada tarjeta del índice. Se guarda automáticamente en localStorage del navegador. Al final del índice están las opciones para descargar o importar un JSON con los 51 estados. La importación valida la versión, los identificadores y todos los estados antes de sustituir los datos existentes.

Si el navegador bloquea el almacenamiento local, el sitio muestra un aviso; los cambios de esa sesión no se conservarán al recargar.

## Restricciones

El proyecto usa únicamente HTML, CSS y JavaScript vanilla, no requiere instalar dependencias y no carga recursos externos. No se añadieron soluciones a los ejercicios.
