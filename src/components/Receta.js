import React,{useContext, useState} from 'react';
import {ModalContext} from '../context/ModalContext'
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 500,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        overflow: 'scroll',
        height: '100%',
        maxHeight: 500,
        display: 'block'
    },
    header: {
        padding: '12px 0',
        borderBottom: '1px solid orangered'
        },
        content: {
        padding: "12px 0",
        overflow: 'scroll'
        }
}));


const Receta = ({receta}) => {
    
    //Configuracion del modal de material ui
    const [modalStyle] = useState(getModalStyle);
    const [open,setOpen] = useState(false);

    //clases
    const clases = useStyles();
    
    const handrleOpen = ()=>{
        setOpen(true);
    }

    const handrleClose = ()=>{
        setOpen(false);
    }

    //extraer valores del context
    const {guardarIdReceta,infoReceta,guardarReceta} = useContext(ModalContext);

    //metodo traer ingredientes y cantidades
     const mostrarIngredientes= infoReceta =>{
        let ingredientes=[];
        for(let i=1;i<16;i++){
            if(infoReceta[`strIngredient${i}`]){
                ingredientes.push(
                    <li >{infoReceta[`strIngredient${i}`]} {infoReceta[`strMeasure${i}`]}  </li>
                );
            }
        }
        return ingredientes;
     }
    
    return (  
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header orange text-center">{receta.strDrink}</h2>
                <img 
                    src={receta.strDrinkThumb}
                    className="card-img-top" 
                    alt={`Imagen de ${receta.strDrink}`} 
                />
                <div className="card-body">
                    <button 
                        className="btn btn-block btn-info"
                        onClick={() =>{
                            guardarIdReceta(receta.idDrink);
                            handrleOpen();
                        }}
                       
                    >
                        Ver Receta
                    </button>
                    
                    <Modal
                        open={open}
                        onClose={ () =>{
                            guardarIdReceta(null);
                            guardarReceta({});
                            handrleClose();
                        }}
                    >
                        <div style={modalStyle} className={clases.paper} >
                            <h2 className="orange">{infoReceta.strDrink}</h2>
                            <h3 className="mt-4 mx-auto center"> Intrucciones de Preparacion</h3>
                            <p>
                                {infoReceta.strInstructions}
                            </p>
                            <img alt={infoReceta.strDrinks} className="img-fluid img-rounded  my-4" src={infoReceta.strDrinkThumb}/>

                            <h3 className="orange mx-auto center" >Ingredientes y cantidades</h3>
                            <ul >
                                {mostrarIngredientes(infoReceta)}
                            </ul>   
                        </div>
                    </Modal>

                </div>
            </div>
        </div>
    );
}
 
export default Receta;

