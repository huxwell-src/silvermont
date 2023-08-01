import {  } from 'react'
import { Facebook, Youtube, Linkedin } from './Icons'
import Tittle from './Tittle';

const Rrss = () => {

  return (

    <section >
        <Tittle
        titulo="No olvides"
        destacado="Seguirnos"
        subtitulo="Visita todas nuestras redes sociales y descubre todo lo nuevo que tendemos para ti"
        />
        <div className='flex items-center justify-center my-10 w-full'  >
            <a href="#">
                <Facebook height={60} className="hover:scale-110 mx-2 duration-200 saturate-[75%] hover:saturate-100"  />
            </a>
            <a href="https://www.youtube.com/channel/UC4aVSLSPmnKfmvsHlTKiQOQ">
                <Youtube height={60} className="hover:scale-110 mx-2 duration-200 saturate-[75%] hover:saturate-100"  />
            </a>
            <a href="https://www.linkedin.com/company/silvermont/">
                <Linkedin height={60} className="hover:scale-110 mx-4 duration-200 saturate-[75%] hover:saturate-100"  />
            </a>
        </div>
    </section>
  )
}

export default Rrss