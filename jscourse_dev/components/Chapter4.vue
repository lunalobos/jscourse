<template>
    <div class="mt-2 flex flex-col rounded-lg border-2 p-4 shadow-lg w-4/6">
        <Angles :right-angle-name="rightName" :left-angle-name="leftName" />
        <ChapterTitle :name="chapterName" />
        <SectionTitle :chapter="chapterName" section="Manejo de Errores" />
        <p class="mt-2 mb-2">
            JavaScript proporciona mecanismos para manejar errores y excepciones que pueden ocurrir 
            durante la ejecución del código.
        </p>
        <SubsectionTitle :chapter="chapterName" section="Manejo de Errores" subsection="Try...Catch" />
        <p class="mt-2 mb-2">
            El bloque try...catch es la estructura básica para manejar errores en JavaScript:
        </p>
        <pre>
            <code class="language-javascript">
try {
  // Codigo que puede lanzar un error
  throw new Error('Este es un error de ejemplo');
} catch (error) {
  console.error('Se capturo un error:', error.message);
} finally {
  console.log('Este bloque siempre se ejecuta');
}
            </code>
        </pre>
        <SubsectionTitle :chapter="chapterName" section="Manejo de Errores" subsection="Tipos de Errores" />
        <p class="mt-2 mb-2">
            JavaScript tiene varios tipos de errores predefinidos:
        </p>
        <ul>
            <li><code>Error</code>: Error genérico</li>
            <li><code>SyntaxError</code>: Error de sintaxis</li>
            <li><code>ReferenceError</code>: Referencia a una variable no definida</li>
            <li><code>TypeError</code>: Operación en un tipo de dato incorrecto</li>
            <li><code>RangeError</code>: Valor numérico fuera de rango</li>
        </ul>
        <SubsectionTitle :chapter="chapterName" section="Manejo de Errores" 
            subsection="Creación de errores personalizados" />
        <p class="mt-2 mb-2">
            Se pueden crear errores personalizados extendiendo la clase Error:
        </p>
        <pre>
            <code class="language-javascript">
class MiErrorPersonalizado extends Error {
  constructor(mensaje) {
    super(mensaje);
    this.name = 'MiErrorPersonalizado';
  }
}

throw new MiErrorPersonalizado('Este es un error personalizado');
            </code>
        </pre>
        <SectionTitle :chapter="chapterName" section="Objetos Globales y clases útiles" />
        <p class="mt-2 mb-2">
            JavaScript tiene varios objetos globales incorporados que proporcionan funcionalidad útil.
        </p>
        <SubsectionTitle :chapter="chapterName" section="Objetos Globales" subsection="Object" />
        <p class="mt-2 mb-2">
            Object es el objeto raíz de la jerarquía de objetos en JavaScript. Posee además varios métodos
            utilitarios. Estos métodos son estáticos, a diferencia de los que vimos en el apartado de
            objetos, estos métodos están asociados a la clase y no al los objetos creados con esa clase.
            Veamos algunos ejemplos:
        </p>
        <pre>
            <code class="language-javascript">
const obj = { a: 1, b: 2 };
console.log(Object.keys(obj)); // ['a', 'b']
console.log(Object.values(obj)); // [1, 2]
            </code>
        </pre>
        
        <SubsectionTitle :chapter="chapterName" section="Objetos Globales" subsection="Math" />
        <p class="mt-2 mb-2">
            Proporciona funciones matemáticas y constantes:
        </p>
        <pre>
            <code class="language-javascript">
console.log(Math.PI); // 3.141592653589793
console.log(Math.random()); // Numero aleatorio entre 0 y 1
            </code>
        </pre>
        <SubsectionTitle :chapter="chapterName" section="Objetos Globales" subsection="Date" />
        <p class="mt-2 mb-2">
            Permite trabajar con fechas y horas:
        </p>
        <pre>
            <code class="language-javascript">
const ahora = new Date();
console.log(ahora.toISOString());
            </code>
        </pre>
        <SectionTitle :chapter="chapterName" section="Funciones Globales" />
        <p class="mt-2 mb-2">
            JavaScript incluye varias funciones globales que pueden ser utilizadas.
        </p>
        <SubsectionTitle :chapter="chapterName" section="Funciones Globales" subsection="parseInt() y parseFloat()" />
        <p class="mt-2 mb-2">
            Ambas funciones convierten cadenas en números:
        </p>
        <pre>
            <code class="language-javascript">
console.log(parseInt('42')); // 42
console.log(parseFloat('3.14')); // 3.14
            </code>
        </pre>
        <SubsectionTitle :chapter="chapterName" section="Funciones Globales" subsection="isNaN() y isFinite()" />
        <p class="mt-2 mb-2">
            Ambas funciones verifican si un valor es NaN o finito:
        </p>
        <pre>
            <code class="language-javascript">
console.log(isNaN(NaN)); // true
console.log(isFinite(1/0)); // false
            </code>
        </pre>
        <SubsectionTitle :chapter="chapterName" section="Funciones Globales" subsection="setTimeout() y setInterval()" />
        <p class="mt-2 mb-2">
            Permiten ejecutar código después de un retraso o a intervalos regulares:
        </p>
        <pre>
            <code class="language-javascript">
setTimeout(() => console.log('Retrasado'), 1000);

const intervalo = setInterval(() => console.log('Intervalo'), 1000);
// Para detener el intervalo:
// clearInterval(intervalo);
            </code>
        </pre>
        <SectionTitle :chapter="chapterName" section="Asincronía en JavaScript" />
        <p class="mt-2 mb-2">
            JavaScript es un lenguaje de programación de un solo hilo. Si el único hilo de ejecución que poseemos se queda ejecutando una operación muy larga estamos en un problema.
            Para sortear esto es que el lenguaje permite operaciones asíncronas. 
        </p>
        <p class="mt-2 mb-2">
            Una operación asíncrona es una operación o sección del código que se especifica que debe 
            ejecutarse en algún momento, pero no se especifica cuando, de ahí su nombre "asíncrona".  
        </p>
        <p class="mt-2 mb-2">
            Una vez que el interprete de JavaScript alcansa una sección de código asíncrona deja esta 
            porción de código en espera y gestiona según un criterio
            que depende del intérprete el momento en el que se ejecutará. Esto le da flexibilidad al 
            interprete para evitar que operaciones de mucho costo computacional
            o de mucha latencia se ejecuten y no permitan que la interfaz sea fluida. Esto permite 
            optimizar el uso del único hilo que del cual dispone javascript.
        </p>
        <p class="mt-2 mb-2">
            Para especificar que una porción de código es asíncrona se utilizan callbacks y promesas, 
            además de un nuevo enfoque conocido como await async.
        </p>
        <p class="mt-2 mb-2">
            Un callback es una función que se pasa como argumento a otra función y se ejecuta después 
            de que esta última haya terminado.
        </p>
        <pre>
            <code class="language-javascript">
function operacionAsincrona(callback) {
  setTimeout(() => {
    console.log("Operacion completada");
    callback();
  }, 1000);
}

operacionAsincrona(() => {
  console.log("Callback ejecutado");
});
            </code>
        </pre>
        <p class="mt-2 mb-2">
            En este ejemplo, <code>setTimeout</code> simula una operación asíncrona que tarda 1 
            segundo en completarse.
        </p>
        <SubsectionTitle :chapter="chapterName" section="Asincronía en JavaScript" subsection="Promesas" />
        <p class="mt-2 mb-2">
            Las promesas proporcionan una forma más elegante de manejar operaciones asíncronas. 
            Una promesa representa un valor que puede no estar disponible inmediatamente, pero lo 
            estará en el futuro.
        </p>
        <pre>
            <code class="language-javascript">
function operacionPromesa() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Operacion completada");
      resolve("Exito");
    }, 1000);
  });
}

operacionPromesa()
  .then(resultado => console.log(resultado))
  .catch(error => console.error(error));
            </code>
        </pre>
        <p class="mt-2 mb-2">
            Las promesas tienen tres estados: pendiente, cumplida o rechazada. Utilizamos 
            <code>then()</code> para manejar el éxito y <code>catch()</code> para manejar errores.
        </p>
        <SubsectionTitle :chapter="chapterName" section="Asincronía en JavaScript" subsection="Await async" />
        <p class="mt-2 mb-2">
            Async/Await es una sintaxis más reciente que facilita el trabajo con promesas:
        </p>
        <pre>
            <code>
async function ejecutarOperacion() {
  try {
    const resultado = await operacionPromesa();
    console.log(resultado);
  } catch (error) {
    console.error(error);
  }
}

ejecutarOperacion();
            </code>
        </pre>
        <SectionTitle :chapter="chapterName" section="Fetch API" />
        <p class="mt-2 mb-2">
            La API Fetch proporciona una interfaz para realizar solicitudes HTTP. Devuelve una 
            promesa que se resuelve con la respuesta a la solicitud.
        </p>
        <pre>
            <code class="language-javascript">
8async function generarUUID() {
  try {
    const respuesta = await fetch('https://www.uuidtools.com/api/generate/v4');
    if (!respuesta.ok) {
      throw new Error('Error en la respuesta de la red');
    }
    const datos = await respuesta.json();
    console.log('UUID generado:', datos[0]);
  } catch (error) {
    console.error('Error al generar UUID:', error);
  }
}

generarUUID();
            </code>
        </pre>
        <p class="mt-2 mb-2">
            Este ejemplo utiliza <code>fetch</code> para hacer una solicitud GET a la API de UUIDTools 
            para generar un UUID versión 4. La respuesta se procesa como JSON y se muestra el UUID 
            generado.
        </p>
        <p class="mt-2 mb-2">
            La función <code>fetch</code> devuelve una promesa que se resuelve con un objeto 
            <code>Response</code>. Utilizamos <code>await</code> dos veces: una para esperar la respuesta 
            de la red y otra para parsear el cuerpo de la respuesta como JSON.
        </p>
        <p class="mt-2 mb-2">
            Este ejemplo integra los conceptos de asincronía, promesas y el uso de la API Fetch en una 
            aplicación práctica.
        </p>
    </div>
</template>
<script setup>
const chapterName = 'Errores, Objetos Globales, Funciones Globales y asincronía en JavaScript';
const rightName = 'chapter5';
const leftName = 'chapter3';

</script>