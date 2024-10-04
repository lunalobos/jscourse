<template>
    <div class="mt-2 flex flex-col rounded-lg border-2 p-4 shadow-lg w-4/6">
        <Angles :right-angle-name="rightName" :left-angle-name="leftName" />
        <ChapterTitle :name="chapterName" />
        <SectionTitle :chapter="chapterName" section="Arrays" />
        <p class="mt-2 mb-2">
            Un array es una colección ordenada de elementos. En JavaScript, los arrays pueden contener 
            elementos de cualquier tipo de datos, incluidos otros arrays.
        </p>
        <p class="mt-2 mb-2">
            Para crear un array en JavaScript, se pueden utilizar corchetes `[]` o el constructor `Array`.
        </p>
        <pre>
            <code class="language-javascript">
let array1 = [1, 2, 3, 4, 5];
let array2 = new Array(1, 2, 3, 4, 5);
            </code>
        </pre>
        <p class="mt-2 mb-2">
            Los elementos de un array se acceden utilizando índices, comenzando desde 0.
        </p>
        <pre>
            <code class="language-javascript">
let firstElement = array1[0]; // 1
let lastElement = array1[array1.length - 1]; // 5
            </code>
        </pre>
        <SubsectionTitle :chapter="chapterName" section="Arrays" subsection="Metodos de arrays" />
        <p class="mt-2 mb-2">
            JavaScript proporciona varios métodos útiles para manipular arrays, tales como `push`, 
            `pop`, `shift`, `unshift`, `map`, `filter`, y `reduce`.
        </p>
        <pre>
            <code class="languaje-javascript">
array1.push(6); // Agrega 6 al final del array
array1.pop(); // Remueve el ultimo elemento del array
let newArray = array1.map(x => x * 2); // [2, 4, 6, 8, 10]
let filteredArray = array1.filter(x => x > 2); // [3, 4, 5]
let sum = array1.reduce((acc, x) => acc + x, 0); // 15
            </code>
        </pre>
        <SubsectionTitle :chapter="chapterName" section="Arrays" subsection="Rest Parameters en funciones" />
        <p class="mt-2 mb-2">
            Ahora que estamos mejor familiarizados con los arrays en JavaScript, vamos a ver un ejemplo de uso de rest parameters en una función.
            Este tipo de parámetros permiten representar un número indefinido de argumentos como un array:
        </p>
        <pre>
            <code class="languaje-javascript">
function sumar(...numeros) {
    return numeros.reduce((total, num) => total + num, 0);
}

console.log(sumar(1, 2, 3, 4)); // Salida: 10
            </code>
        </pre>
        <SectionTitle :chapter="chapterName" section="Sets" />
        <p class="mt-2 mb-2">
            Un set es una colección de valores únicos. Los sets permiten almacenar cualquier tipo de valor, 
            ya sea primitivo u objeto.
        </p>
        <p class="mt-2 mb-2">
            Para crear un set en JavaScript, se utiliza el constructor `Set`.
        </p>
        <pre>
            <code class="languaje-javascript">
let set = new Set([1, 2, 3, 4, 5, 5]);
console.log(set); // Set { 1, 2, 3, 4, 5 }
            </code>
        </pre>
        <p class="mt-2 mb-2">
            Los sets tienen métodos para añadir, eliminar y verificar la existencia de elementos.
        </p>
        <pre>
            <code class="languaje-javascript">
set.add(6); // Agrega 6 al set
set.delete(3); // Elimina 3 del set
console.log(set.has(4)); // true
            </code>
        </pre>
        <SectionTitle :chapter="chapterName" section="Mapas" />
        <p class="mt-2 mb-2">
            Un mapa es una colección de pares clave-valor donde las claves pueden ser de cualquier tipo
            de datos.
        </p>
        <p class="mt-2 mb-2">
            Para crear un mapa en JavaScript, se utiliza el constructor `Map`.
        </p>
        <pre>
            <code class="languaje-javascript">
let map = new Map();
map.set("name", "Dave");
map.set("age", 40);
            </code>
        </pre>
        <p class="mt-2 mb-2">
            Los mapas tienen métodos para añadir, eliminar y obtener elementos.
        </p>
        <pre>
            <code class="languaje-javascript">
console.log(map.get("name")); // "Dave"
map.delete("age"); // Elimina la clave "age"
console.log(map.has("age")); // false
            </code>
        </pre>
        <SectionTitle :chapter="chapterName" section="Ejemplo integrador" />
        <p>
            A continuación, presentaremos un ejemplo que integra un array con HTML para crear un menú 
            desplegable (`select`) y un botón que muestra una alerta con la opción seleccionada.
        </p>
        <SubsectionTitle :chapter="chapterName" section="Ejemplo integrador" 
            subsection="Código HTML y JavaScript" />
        <p class="mt-2 mb-2">
            El siguiente código HTML incluye un menú desplegable y un botón. El JavaScript asociado 
            llena el menú desplegable con valores de un array y muestra una alerta con la opción 
            seleccionada cuando se hace clic en el botón.
        </p>
        <pre>
            <code class="languaje-html">
                {{ html }}
            </code>
        </pre>
        <p class="mt-2 mb-2">
            El script JavaScript se ejecuta cuando el contenido del DOM ha sido completamente cargado. 
            Se define un array de opciones y se utiliza para llenar el elemento `select` con opciones. 
            Al hacer clic en el botón, se muestra una alerta con la opción seleccionada.
        </p>
        <ul>
            <li><strong><code>optionsArray</code></strong>: Array que contiene las opciones del menú desplegable.</li>
            <li><strong><code>selectElement</code></strong>: Referencia al elemento <code>&lt;select&gt;</code> en el DOM.</li>
            <li><strong><code>forEach</code></strong>: Itera sobre cada elemento del array, creando y añadiendo un elemento <code>&lt;option&gt;</code> al menú desplegable.</li>
            <li><strong><code>addEventListener</code></strong>: Añade un evento de clic al botón que muestra una alerta con la opción seleccionada.</li>
        </ul>
        
    </div>
</template>
<script setup>

const chapterName = 'Estructuras de datos';
const rightName = 'chapter4';
const leftName = 'chapter2';

const html = `
\<!DOCTYPE html\>
\<html\>
\<head\>
    \<title\>Ejemplo Integrador\</title\>
    \<script type="text/javascript"\>
        document.addEventListener('DOMContentLoaded', function() {
            let optionsArray = ['Opcion 1', 'Opcion 2', 'Opcion 3', 'Opcion 4'];
            let selectElement = document.getElementById('optionsSelect');
            optionsArray.forEach(function(option) {
                let optionElement = document.createElement('option');
                optionElement.textContent = option;
                optionElement.value = option;
                selectElement.appendChild(optionElement);
            });

            document.getElementById('alertButton').addEventListener('click', function() {
                let selectedOption = selectElement.value;
                alert('Has seleccionado: ' + selectedOption);
            });
        });
    \</script\>
\</head\>
\<body\>
    \<h1\>Selecciona una Opcion\</h1\>
    \<select id="optionsSelect"\>\</select\>
    \<button id="alertButton"\>Mostrar Seleccion\</button\>
\</body\>
\</html\>
`

</script>