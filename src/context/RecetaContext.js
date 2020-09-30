import React,{createContext, useEffect, useState} from 'react';
import axios from 'axios';

export const RecetaContext = createContext();

const RecetaProvider = (props) => {
    
    const[recetas,guardarRecetas] = useState([]);
    const [busqueda,buscarReceta] = useState({
        nombre:'',
        categoria:''
    });

    const[consultar,guardarConsultar] = useState(false);

    const {nombre , categoria} = busqueda;

    useEffect(()=>{

        if(consultar){
            const obtenerRecetas = async()=>{
                const url =`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
                const resultado = await axios.get(url);
                guardarRecetas(resultado.data.drinks);
            }
            obtenerRecetas()
        }

        // eslint-disable-next-line
    },[busqueda])

    return (  
        <RecetaContext.Provider
            value={{
                recetas,
                buscarReceta,
                guardarConsultar,
                
            }}
        >
            {props.children}
        </RecetaContext.Provider>
    );
}
 
export default RecetaProvider;