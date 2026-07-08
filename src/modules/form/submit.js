import dayjs from "dayjs";
import { scheduleNew } from "../../services/schedule-new.js";

const form = document.querySelector("form");
const selectedDate = document.getElementById("date");
const clientName = document.getElementById("client");

// Data atual para formatar o input
const today = dayjs(new Date()).format("YYYY-MM-DD");

// Carrega a data atual e define a data mínima como sendo a data atual
selectedDate.value = today;
selectedDate.min = today;

form.onsubmit = async (event) => {
    // Previne o comportamento padrão de carregar a página
    event.preventDefault();

    try {
        // Recuperando o nome do cliente
        const name = clientName.value.trim();

        if (!name) {
            return alert("Informe o nome do cliente!")
        };

        // Recupera o horário selecionado
        const hourSelected = document.querySelector(".hour-selected");

        // Verifica se o horário está selecionado
        if (!hourSelected) {
            return alert("Selecione a hora.")
        };

        // Recupera somente a hora
        const [hour] = hourSelected.innerHTML.split(":")
        console.log(hour);
        
        // Insere a hora na data
        const when = dayjs(selectedDate.value).add(hour, "hour");
        console.log(when);
        
        // Gera um ID
        const id = new Date().getTime();

        console.log({id, name, when});

        await scheduleNew({id, name, when});
        
    } catch (error) {
        alert("Não foi possível realizar o agendamento.");
        console.log(error);
    };
};