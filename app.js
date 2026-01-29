const btnAgregar = document.querySelector("#btnAgregar");
const inputTarea = document.querySelector("#inputTareas");
const listaTareas = document.querySelector(".listaTareas");

function crearTareas() {
    const tarea = inputTarea.value.trim();
    if (tarea === "") {
        return;
    }
    const listaAgregada = document.createElement("li");
    listaAgregada.innerHTML = `${tarea} <button id = "check">COMPLETAR </button> <button id = "delete">BORRAR</button>`;
    const check = listaAgregada.querySelector("#check");
    const borrar = listaAgregada.querySelector("#delete");

    check.addEventListener("click", function () {
        marcarCompletado(listaAgregada);
    });
    borrar.addEventListener("click", function () {
        borrarTarea(listaAgregada);
    });

    return listaAgregada;
}
function mostrarLista(nuevaTarea) {
    listaTareas.appendChild(nuevaTarea);
}
function borrarTarea(tarea) {

    tarea.remove();


}
function marcarCompletado(tarea) {

    tarea.classList.toggle("completada");
}

btnAgregar.addEventListener('click', function (event) {
    event.preventDefault();
    const creacionTareas = crearTareas();
    mostrarLista(creacionTareas);

});




