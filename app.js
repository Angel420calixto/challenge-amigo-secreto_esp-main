// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista que almacenará los nombres ingresados
const listaDeAmigos = [];

// funcion agregar amigos ala lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    if (listaDeAmigos.includes(nombre)) {
        alert("Este nombre ya fue ingresado.");
        return;
    }

    listaDeAmigos.push(nombre);

    input.value = "";

    actualizarListaVisual();
}
// funcion para actualizar los nombres ingresados

function actualizarListaVisual() {
    const ul = document.getElementById("listaAmigos");

    ul.innerHTML = "";

    listaDeAmigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        ul.appendChild(li);
    });
}
// funcion para sortear los nombres ingresados

function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = "";

    if (listaDeAmigos.length === 0) {
        alert("Agrega al menos un amigo antes de sortear.");
        return;
    }

    const indice = Math.floor(Math.random() * listaDeAmigos.length);
    const ganador = listaDeAmigos[indice];

    const li = document.createElement("li");
    li.textContent = `🎉 El amigo secreto es: ${ganador}`;
    resultado.appendChild(li);
}
