
import React from 'react'

import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logos.svg'


const Inicio = () => {
  return (  

      <>

  <div className="header hero">
        
      <div className="barra">

      <div className="contenedor">
      <div className="logos">
        
        <Image src={logo} className="logo"/>
  
        </div>


      <nav className="">
        
      <ul>
         <Link href="">About</Link>
          <Link href="">Services</Link>
          <Link href="">Projects</Link>
          <Link href="">Contact</Link>
      </ul>

      </nav>



      </div>
      <h1 className="TituloPortada">We are Creatives</h1>
   
      </div>
    
     
        </div>

    
        <div className="header-contenido">
            <div className="contenedor">
                <h1>Bienvenido a Blog de Viajes</h1>
            </div>
        </div>

      </>
  );
}
 
export default Inicio;