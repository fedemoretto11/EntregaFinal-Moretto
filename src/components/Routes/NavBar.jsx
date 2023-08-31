import CartWidget from '../Widgets/CartWidget'
import '../../styles/style.scss'
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';



function NavBar() {
  // Estados
  const [showMenu,setshowMenu] = useState(false);

  
  // Accion


  // Vista
  return (
    <nav id="navBar__header" className='navBar gap-2 flex flex-col md:flex-row justify-center md:justify-between items-center px-6 md:px-6 lg:px-24 py-2 md:gap-3 lg:gap-6'>
      <div className={`flex justify-between items-center w-full ${showMenu ? 'mt-5 md:mt-0' : 'mt-0'} `}>
        <Link to='/'>
          <h1 id="navBar__tittle" className={`navBar__tittle text-2xl md:text-xl lg:text-3xl`}>Super Music Changuito</h1>
        </Link>
        <i onClick={() => {setshowMenu(!showMenu)}} className='cursor-pointer	 block md:hidden material-icons text-4xl'>{`${showMenu ? 'close' : 'menu'}`}</i>
      </div>
      <div id="navBar__nav" className={`${showMenu ? 'flex' : 'hidden'} navBar__nav flex-col justify-center align-center text-center gap-5 md:flex md:flex-row h-auto w-auto my-5`}>
        <Link to={`/category/electronics`} className='navBar__link px-2 text-center text-xl md:text-lg lg:text-xl flex flex-col gap-1 justify-center items-center'>Electronico</Link>
        <Link to={`/category/jewelery`} className='navBar__link px-2 text-center text-xl md:text-lg lg:text-xl flex flex-col gap-1 justify-center items-center'>Joyas</Link>
        <Link to={`/category/men-clothing`} className='navBar__link px-2 text-center text-xl md:text-lg lg:text-xl flex flex-col gap-1 justify-center items-center'>Hombre</Link>
        <Link to={`/category/women-clothing`} className='navBar__link px-2 text-center text-xl md:text-lg lg:text-xl flex flex-col gap-1 justify-center items-center'>Mujer</Link>
        <Link to={`/cart`} className='navBar__link'><CartWidget /></Link>
      </div>
    </nav>
  )
}

export default NavBar
