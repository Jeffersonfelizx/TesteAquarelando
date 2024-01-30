import React, { useContext } from 'react';

import { UserContext } from '../../../contexts/UserContext';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const { nome, setNome } = useContext(UserContext);

  return (
    <div className='flex items-center justify-center'>
      <div>
        <h2 className="my-4 text-5xl text-slate-900">Logar</h2>
        <h2 className="text-4xl text-slate-900 ">Ola user : {nome}</h2>
        <Link to="/login" className="flex justify-center w-1/2 py-2 my-4 text-white bg-indigo-400 rounded hover:bg-indigo-900">
          Voltar 
        </Link>
      </div>

    </div>
  );
}

export default Home;