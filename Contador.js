import React, {useEffect, useState} from "react";
import axios from "axios";
import './contador.css'


const Contador = () => {

    const [contador, setContador] = useState(0);
    const [contadorAntiguo, setContadorAntiguo] = useState(0);


    const aumentarContador = () => {
        setContador(contador + 1)
    };
    const disminuircontador = () => {
        if (contador === 0) {
            setContador(0);
        } else {
            setContador(contador - 1)
        }
    };


    const resetearContador = () => {
        setContadorAntiguo(contador);
        setContador(0);
    };


    return (

        <div className= 'div'>
            <div className='p'>
                <button onClick={() => aumentarContador()}>Aumenta</button>
                <button onClick={() => disminuircontador()}>Disminuir</button>
                <button onClick={() => resetearContador()}>Resetear</button>
            </div>
            <h1>Contador Actual:  npm start{contador}</h1>
            <h1>Contador Antiguo: { contadorAntiguo }</h1>


        </div>


    )

}
export default Contador;
