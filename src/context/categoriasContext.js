import Axios from 'axios';
import React,{createContext,useState,useEffect} from 'react';

//Crear context
export const CategoriasContext = createContext() ;

//provider es donde se encuentran las funciones y los state

const CategoriasProvider = (props)=>{

    //creat el state del context.
    const [categorias,guardarCategorias] = useState([]);

    //ejecutar llamado a API
    useEffect(()=>{

        const obtenerCategorias = async () =>{
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            const categoriasApi = await Axios.get(url);
            guardarCategorias(categoriasApi.data.drinks); 
        }

        obtenerCategorias();
    },[])

    

    return(
        <CategoriasContext.Provider
            value={{
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider;