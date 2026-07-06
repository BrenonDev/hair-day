import dayjs from "dayjs";

const form = document.querySelector("form");
const selectedDate = document.getElementById("date");

// Data atual para formatar o input
const today = dayjs(new Date()).format("YYYY-MM-DD");

// Carrega a data atual e define a data mínima como sendo a data atual
selectedDate.value = today;
selectedDate.min = today;

form.onsubmit = (event) => {
    // Previne o comportamento padrão de carregar a página
    event.preventDefault();

    console.log("Enviado");
};