import React,{useEffect,useState,createContext} from 'react';
import axios from 'axios';

//crear context
export const ModalContext = createContext();

const ModalProvider = (props) => {

    //state del provider
    const [idreceta,guardarIdReceta] = useState(null);
    const [infoReceta,guardarReceta] = useState({});

    useEffect(()=>{
        const obtenerReceta = async()=>{
            if(!idreceta) return;
            
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;
            const respuesta = await axios.get(url);
            //console.log(respuesta.data.drinks);
            guardarReceta(respuesta.data.drinks[0]);

        }
        obtenerReceta();
    },[idreceta])

    return (  
        <ModalContext.Provider
            value={{
                infoReceta,
                guardarIdReceta,
                guardarReceta
                
            }} 
        >
            {props.children}
        </ModalContext.Provider>
    );
}
 
export default ModalProvider;