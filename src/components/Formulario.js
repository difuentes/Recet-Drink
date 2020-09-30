import React,{useContext,useState} from 'react';
import {CategoriasContext} from '../context/categoriasContext';
import {RecetaContext} from '../context/RecetaContext';


const Formulario = () => {

    //context de categorias
    const {categorias} = useContext(CategoriasContext)
    // state de busqueda
    const[busqueda,guardarBusqueda] = useState({
        nombre:'',
        categoria:''
    });

    //context receta
    const {buscarReceta,guardarConsultar} = useContext(RecetaContext);


    //obtener valores del form
    const obtenerCategoria = e =>{
        e.preventDefault();
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    } 

    return ( 
       <form 
        className="col-12"
        onSubmit={e =>{
            e.preventDefault();
            buscarReceta(busqueda);
            guardarConsultar(true);
        }}
       >
           <div className="col-8 mx-auto">
            <fieldset className="text-center">
                        <legend className="text-white bg-info rounded-pill" >Busca Tus Recetas por categorias o Ingredientes <span><i className="ml-2 fas fa-concierge-bell"></i></span> </legend>
            </fieldset>
           </div>

           <div className="row mt-2">
                <div className="col-md-4">
                    <input
                        name="nombre"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por ingrediente"
                        onChange={obtenerCategoria}
                    />    
                </div>

                <div className="col-md-4">
                    <select 
                     className="form-control" 
                     name="categoria"
                     onChange={obtenerCategoria}
                    >
                        <option>--Seleccionar Categoria --</option>
                        {categorias.map(categoria =>(
                            <option 
                                key={categoria.strCategory} 
                                value={categoria.strCategory}
                            >
                                {categoria.strCategory}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                   <input
                    className="btn btn-outline-success btn-block"
                    type="submit"
                    value="Buscar Recetas"
                   />
                </div>
                

           </div>
            
       </form>
     );
}
 
export default Formulario;