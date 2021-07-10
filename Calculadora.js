import React, {useState} from "react";
import './calculadora.css'


const Calculadora = () => {

    const [numero1, setNumero1] = useState(0);
    const [numero2, setNumero2] = useState(0);
    const [resultado, setResultado] = useState(0);


    const asignarNumero1 = (event) => {
        setNumero1(event.target.value);
    }

    const asignarNumero2 = (event) => {
        setNumero2(event.target.value);
    }

    const multiplicar = () => {
        const multiplicacion = parseInt(numero1) * parseInt(numero2);
        setResultado(multiplicacion);
    }
    const sumarNumeros = () => {
        const suma = parseInt(numero1) + parseInt(numero2);

        setResultado(suma);
    }
    const resetCalculadora = () =>{
        setResultado(0);
    }
    const division = () => {
        const divisionResultado = parseInt(numero1) / parseInt(numero2);

        setResultado(divisionResultado);
    }
    const resta = () => {
        const restaResultado = parseInt(numero1) - parseInt(numero2);
        setResultado(restaResultado);

    }


    return(

        <div className='x'>

            <label for='numero1'>Numero1:</label>
            <input type="number" name = 'numero1' onChange={ asignarNumero1 }/>


            <label htmlFor='numero2'>Numero2:</label>
            <input type="number" name='numero2' onChange={ asignarNumero2 }/>

            <button onClick={() => resetCalculadora()}>
                Reset
            </button>
            <button onClick={() => sumarNumeros()}>
                +
            </button>
            <button onClick={() => multiplicar()}>
                *
            </button>
            <button onClick={() => division()}>
                /
            </button>
            <button onClick={() => resta()}>
                -
            </button>


            <h1>Resultado: { resultado }</h1>

        </div>

    );






}

export default Calculadora;