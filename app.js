const btnAgregar = document.querySelector("#btnAgregar");
const formulario = document.querySelector("#formulario");

const listaTareas = document.querySelector("#hola");


btnAgregar.addEventListener('click',function (event) {
    event.preventDefault();
    let inputTarea = document.querySelector("#inputTareas").value;
    listaTareas.innerhtml += `<li>${inputTarea}</li>`;
    console.log("aknd");
});



