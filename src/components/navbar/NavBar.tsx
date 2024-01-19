import { Link, useNavigate } from 'react-router-dom'

function NavBar() {
  return (
    <>
     <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>Aquarelando</div>

            <div className='flex gap-4'>
                
              <Link to="/home" className='hover:underline'>Home</Link>
              <div className='hover:underline'>Categoria</div>
              <Link to="/login" className='hover:underline'>Login</Link>
              <div className='hover:underline'>Perfil</div>
              <div className='hover:underline'>Sair</div>
              <Link to="/sobre" className='hover:underline'>Sobre</Link>
             
            </div>
          </div>
        </div>
    </>
  )
}

export default NavBar