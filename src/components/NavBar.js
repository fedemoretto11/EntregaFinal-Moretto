import CartWidget from './CartWidget'
import '../styles/NavBar.scss'


function NavBar() {
  return (
    <header id="navBar-header" className='flex justify-between items-center px-24 py-2 h-24'>
      <h1 id="navBar-tittle" className="text-3xl">
        Super Music Changuito
      </h1>
      <nav>
        <a href="" className='navBar-link px-2 text-xl'>Guitarras</a>
        <a href="" className='navBar-link px-2 text-xl'>Pianos</a>
        <a href="" className='navBar-link px-2 text-xl'>Baterias</a>
        <a href="" className='navBar-link px-2 text-xl'>Accesorios</a>
      </nav>
      <div className='flex gap-9'>
        <CartWidget />
        <i class="bi bi-list text-4xl"></i>
      </div>
    </header>
  )
}

export default NavBar