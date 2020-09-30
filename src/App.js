import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoReceta from './components/ListadoReceta';

import CategoriasProvider from './context/categoriasContext';
import RecetaProvider from './context/RecetaContext';
import ModalProvider from './context/ModalContext';

function App() {
  return (
   <>
    <CategoriasProvider>
      <RecetaProvider>
        <ModalProvider>
          <Header/>
              <div className="container mt-3 ">
                <div className="row">
                      <Formulario/>
                </div>
              </div>
            <ListadoReceta/>
        </ModalProvider>
      </RecetaProvider>
    </CategoriasProvider>
   </>
  );
}

export default App;
