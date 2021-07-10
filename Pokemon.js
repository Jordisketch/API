import React, {useEffect, useState} from "react";
import axios from "axios";
import './style.css'


const Pokemon = () => {

    const [datos, setDatos] = useState([]);
    const [filtrado, setFiltrado] = useState('');


    useEffect( () => {

        axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
            .then(response => response.data)
            .then(data => {
                setDatos(data.results);

            }, [datos]);
    });
    const agregarFiltro = event => {
        setFiltrado(event.target.value);
    }
    const getImg = (url) => {
        let id = url.split('/').reverse()[1];
        return id.toString().padStart(3, '000')
    }
    const formatName = name => {
        return name.toString().replace(/\b[a-z]/g, char => char.toUpperCase());
    }
    const itemsFiltrados = datos.filter(
        item => item.name.toLowerCase().search(filtrado.toLowerCase()) !== -1
    )


    return(

        <div className= 'contenido'>

            <input type="text" onChange={ agregarFiltro }/>

            <ol className= ' contenido_pp '>

                { itemsFiltrados.map(({ name, url }) => (

                    <li>
                        <img src= {  `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${getImg(url)}.png`} alt="Pokemon"/>
                    <h1> { name }</h1>
                    </li>

                ))}

            </ol>


        </div>

    );



}


export default Pokemon;


