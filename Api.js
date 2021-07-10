import React, {useEffect, useState} from "react";
import axios from "axios";


const Api = () => {
    const [api, setApi] = useState({});



    useEffect(() =>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
            .then(response => response.data)
            .then(data => {
                setApi(data.results);
            }, [api]);
        console.log(api)
    });

        return (

            <div>
                    <ol>
                {api.map(({ datos }) =>

                    <li>
                       <h1>{ datos }</h1>
                    </li>

                    )};
                    </ol>
            </div>

        )
}


export default Api;