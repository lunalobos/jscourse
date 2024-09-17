// Variables
let contador = 0;
const valorContador = document.getElementById('contador');
const btnDecrementar = document.getElementById('decrementar');
const btnIncrementar = document.getElementById('incrementar');
const btnResetear = document.getElementById('resetear');

// Funciones
function actualizarContador() {
    valorContador.textContent = contador;
    
    // Cambia el color basado en el valor
    if (contador > 0) {
        valorContador.style.color = 'green';
    } else if (contador < 0) {
        valorContador.style.color = 'red';
    } else {
        valorContador.style.color = 'black';
    }
}

function incrementar() {
    contador++;
    actualizarContador();
}

function decrementar() {
    contador--;
    actualizarContador();
}

function resetear() {
    contador = 0;
    actualizarContador();
}

// Event Listeners
btnIncrementar.addEventListener('click', incrementar);
btnDecrementar.addEventListener('click', decrementar);
btnResetear.addEventListener('click', resetear);

// Inicializar el contador
actualizarContador();


