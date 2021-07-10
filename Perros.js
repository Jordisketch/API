import React, {useEffect, useState} from "react";
import axios from "axios";



const Perros = () => {

    const [datosPerro, setDatosPerro] = useState('');



    useEffect(() => {
        axios.get('https://dog.ceo/api/breeds/image/random')
            .then(response => response.data)
            .then(data => {
                setDatosPerro(data.results);

                console.log(datosPerro)
            }, [datosPerro])
    })


    return (

      <div>

      </div>

    );






}

export default Perros;