import React, { useState } from 'react'
import '../styles/SidebarMenu.scss'

function SidebarMenu() {
  // Variables

  const [show, setShow] = useState(false);


  // Acciones

  const toggle = () => {
    setShow(!show);
    console.log(show)
  }



  // Vista
  return (
    <div id="SiderbarMenu" className={`offset h-screen w-96 absolute ${show ? 'right-0' : '-right-96'} top-0`}>
      <button><i onClick={toggle} id="SidebarMenu-icon" className={`bi bi-${show ? 'x' : 'list'} text-5xl text-white absolute -left-12`}></i></button>
    
    
    
    </div>
  )
}

export default SidebarMenu