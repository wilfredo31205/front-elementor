
import React from 'react'

import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logos.svg'

import huevo from '../public/image-transform.jpg'

import Cereza from '../public/image-stand-out.jpg'


import Cerezas2 from '../public/image-graphic-design.jpg'

import naranja from '../public/image-photography.jpg'


const Inicio = () => {
  return (  

      <>

  <div className="header hero">
        
      <div className="barra">

      <div className="contenedor">
      <div className="logos">
        
        <Image src={logo} className="logo"  />
  
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

    
        <div className="contenidoPrincipal"> {/* clase padre */ }

            <div className="contenido">

      
          <h1 className="transform">Transforma tu vida con nosotros</h1>

          <p className="parrafos">
          We are a full services creative agency especializy we are most famous that Simpson lorem
          es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las
           industrias desde el año 1500, cuando un impresor N. del T. persona que se dedica a la imprentadesconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen
          </p>

          <div className="learn">
          <Link href="#" className="">Learn More</Link>
          </div>
            </div>

          <div className="padre">
          <div className="FotoHuevo">



          <Image src={huevo} className="wilfredo"  />


          </div>

          </div>

        </div>

      {/* segunda parte */}


      <div className="contenidoPrincipal"> {/* clase padre */ }

<div className="contenido">



<Image src={Cereza} className="wilfredo"  />


</div>

  <div className="padre">
    <div className="FotoHuevo2">

        <h1 className="transform">Stand out to the rigth audience</h1>

        <p className="parrafos2">
        We are a full services creative agency especializy we are most famous that Simpson lorem
        es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las
        industrias desde el año 1500, cuando un impresor N. del T. persona que se dedica a la imprentadesconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen
        </p>

        <div className="learn">
            <Link href="#" className="">Learn More</Link>
        </div>  


      </div>

          </div>

          <div className="manzana-pera">

            <div className="finalSeccion">


              <Image src={Cerezas2 } className="wilfredo"  />

          


            </div>


            <div className="segundaImagen">


            <Image src={naranja } className="wilfredo"  />

            </div>

          


          </div>


              </div>

      </>
  );
}
 
export default Inicio;