import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";

export function hoursLoad({ date }) {
    const opening = openingHours.map((hour) => {
        // Recupera somente a hora
        const [schedulesHour] = hour.split(":");
        
        // Adiciona a hora na data e verifica se está no passado
        const isHourPast = dayjs(date).add(schedulesHour, "hour").isAfter(dayjs());
        console.log(schedulesHour, isHourPast);
        
        return {
            hour,
            available: isHourPast
        };
    });

    console.log(opening);
    
};