import CartWidget from './CartWidget'
import '../styles/NavBar.scss'
import { useState } from 'react';


function NavBar() {
  // Estados
  const [show,setShow] = useState(false);

  
  // Accion
  const toggleResponsiveNavbar = () => {
    setShow(!show);
  }



  // Vista
  return (
    <header id="navBar-header" className='gap-2 flex flex-col md:flex-row justify-center md:justify-between items-center px-6 md:px-24 py-2 md:gap-3 lg:gap-6'>
      <div className={`flex justify-between items-center w-full ${show ? 'mt-5' : 'mt-0'}`}>
        <h1 id="navBar-tittle" className={`text-2xl lg:text-3xl`}>
          Super Music Changuito
        </h1>
        <i onClick={toggleResponsiveNavbar} className='block md:hidden bi bi-list text-4xl'></i>
      </div>
      <nav id="navBar-nav" className={`${show ? 'flex' : 'hidden'} flex-col justify-center align-center text-center gap-5 
      md:flex md:flex-row h-auto w-auto my-5
      `}>
        <a href="" className='navBar-link px-2 text-xl md:text-lg lg:text-xl'>Guitarras</a>
        <a href="" className='navBar-link px-2 text-xl md:text-lg lg:text-xl'>Pianos</a>
        <a href="" className='navBar-link px-2 text-xl md:text-lg lg:text-xl'>Baterias</a>
        <a href="" className='navBar-link px-2 text-xl md:text-lg lg:text-xl'>Accesorios</a>
        <CartWidget />  
      </nav>
    </header>
  )
}

export default NavBar