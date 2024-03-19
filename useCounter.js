import { useState } from "react"

export const useCounter = ( initialValue = 1 ) => {

    const [counter, setCounter] = useState(initialValue);

    const incremento = () =>{
        setCounter(counter+1);
    }
    const decremento = () =>{
            setCounter(counter-1);
    }
    const reinicio = () =>{
        setCounter(initialValue);
    }

    return{
        counter,
        incremento,
        decremento,
        reinicio,
    }

}



