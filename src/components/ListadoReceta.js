import React,{useContext} from 'react';
import Receta from './Receta' ;
import {RecetaContext} from '../context/RecetaContext';

const ListadoReceta = () => {

    const {recetas} = useContext(RecetaContext);

    return (  
        <div className="col-12 mx-auto row mt-3">
            {recetas.map(receta =>(
                <Receta
                    key={receta.idDrink}
                    receta={receta}
                />
            ))}
        </div>
    );
}
 
export default ListadoReceta;