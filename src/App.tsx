import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './paginas/painel/login/Login';
import Sobre from './paginas/painel/sobre/Sobre';
import Home from './paginas/painel/home/Home';
import Cadastro from './paginas/painel/cadastro/Cadastro';
import { AuthProvider } from './contexts/AuthContext';
import LojaLogin from './paginas/loja/Login/LojaLogin';


function App() {
  return (
    <>
    <AuthProvider>
        <BrowserRouter>
          <div className='min-h-[80vh]'>
            <Routes>
            <Route path="/" element={<Cadastro />} />
            <Route path="/" element={<Login />} />
            <Route path="/admin/login" element={<Login />} />
            <Route path='/login' element={<LojaLogin/>}/>
            <Route path="/admin/sobre" element={<Sobre />} />
            <Route path="/admin/cadastro" element={<Cadastro />} />
            <Route path="/admin/home" element={<Home />}/>
            </Routes>
          </div>
        </BrowserRouter>
        </AuthProvider>
    </>
  );
}
export default App;