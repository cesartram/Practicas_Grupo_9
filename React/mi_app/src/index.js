// Importacion de react y otras librerias
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// Importacion de Componentes
import NavBar from './Componentes/NavBar';
import Footer from './Componentes/Footer';


// Importacion de Vistas
import Home from './Vistas/Home';
import Favoritos from './Vistas/Favoritos';
import Perfil from './Vistas/Perfil';
import ContadorUseEffect from './Vistas/ContadorUseEffect';
import ApiSinKeyFetch from './Vistas/ApiSinKeyFetch';

// Seleccionamos el elemento del DOM donde se renderizara nuestra APP
const root = ReactDOM.createRoot(document.getElementById('raiz'));

// Renderizamos la APP usando el metodo render
root.render(
  
  // BrowserRouter es una libreria que nos permite renderizar los componentes de forma dinamica.
  <BrowserRouter>
  
  {/* Se muestra el mismo navbar para todas las vistas */}
    <NavBar/>

  {/* Routes: Nos permite renderizar un conjunto de componentes y asignarles una ruta */}
    <Routes>
      
      {/* 
        path: La ruta
        element: El componente que se mostrara en la ruta indicada 
      */}
      <Route path="/" element={<Home/>} />
      <Route path="/favoritos" element={<Favoritos/>} />
      <Route path="/perfil" element={<Perfil/>} />
      <Route path="/hook-use_effect" element={<ContadorUseEffect/>} />
      <Route path="/apisinkeyfetch" element={<ApiSinKeyFetch/>} />
    
    </Routes>

    <Footer/>

  </BrowserRouter>
);