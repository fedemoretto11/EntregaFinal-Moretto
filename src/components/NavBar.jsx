import CartWidget from './CartWidget'
import '../styles/NavBar.scss'
import { useState } from 'react';
import { Link } from 'react-router-dom';



function NavBar() {
  // Estados
  const [showMenu,setshowMenu] = useState(false);


  const categories = [
    {
      name: 'Guitarras',
      categoryId: 'MLA417638',
      subcategories: []
    },
    {
      name: 'Pianos',
      categoryId: 'MLA2100',
      subcategories: []
    },
    {
      name: 'Baterias',
      categoryId: 'MLA416667',
      subcategories: []
    },
    {
      name: 'Accesorios',
      categoryId: 'MLA434786',
      subcategories: []
    },
  ];


  
  // Accion



  // Vista
  return (
    <nav id="navBar__header" className='gap-2 flex flex-col md:flex-row justify-center md:justify-between items-center px-6 md:px-6 lg:px-24 py-2 md:gap-3 lg:gap-6'>
      <div className={`flex justify-between items-center w-full ${showMenu ? 'mt-5 md:mt-0' : 'mt-0'} `}>
        <Link to='/'>
          <h1 id="navBar__tittle" className={`text-2xl md:text-xl lg:text-3xl`}>Super Music Changuito</h1>
        </Link>
        <i onClick={() => {setshowMenu(!showMenu)}} className='cursor-pointer	 block md:hidden material-icons text-4xl'>{`${showMenu ? 'close' : 'menu'}`}</i>
      </div>
      <div id="navBar__nav" className={`${showMenu ? 'flex' : 'hidden'} flex-col justify-center align-center text-center gap-5 md:flex md:flex-row h-auto w-auto my-5`}>
        <Link to={`/cat/electronics`} id='navBar__link' className='px-2 text-center text-xl md:text-lg lg:text-xl flex flex-col gap-1 justify-center items-center'>Electronico</Link>
        <Link to={`/cat/jewelery`} id='navBar__link' className='px-2 text-center text-xl md:text-lg lg:text-xl flex flex-col gap-1 justify-center items-center'>Joyas</Link>
        <Link to={`/cat/men's clothing`} id='navBar__link' className='px-2 text-center text-xl md:text-lg lg:text-xl flex flex-col gap-1 justify-center items-center'>Hombre</Link>
        <Link to={`/cat/women's clothing`} id='navBar__link' className='px-2 text-center text-xl md:text-lg lg:text-xl flex flex-col gap-1 justify-center items-center'>Mujer</Link>
        <Link to={`/carrito`} id='navBar__link'><CartWidget /></Link>
      </div>
    </nav>
  )
}

export default NavBar




  // <Link to={`/cat/MLA417638`} id='navBar__link' className='px-2 text-center text-xl md:text-lg lg:text-xl flex flex-col gap-1 justify-center items-center'>Guitarras</Link>
  // <Link to={`/cat/MLA2100`} id='navBar__link' className='px-2 text-center text-xl md:text-lg lg:text-xl flex flex-col gap-1 justify-center items-center'>Pianos</Link>
  // <Link to={`/cat/MLA416667`} id='navBar__link' className='px-2 text-center text-xl md:text-lg lg:text-xl flex flex-col gap-1 justify-center items-center'>Baterias</Link>
  // <Link to={`/cat/MLA434786`} id='navBar__link' className='px-2 text-center text-xl md:text-lg lg:text-xl flex flex-col gap-1 justify-center items-center'>Accesorios</Link>
        