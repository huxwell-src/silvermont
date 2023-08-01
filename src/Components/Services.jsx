import {  } from 'react'
import Top from '../assets/wave-top.png'
import But from '../assets/wave-but.png'
import { Ad,Film } from './Icons'

const Services = () => {
  return (
    <section id='Services' className='bg-gold' >
        <img src={Top} className="w-full" alt="" />


        <div className='container mx-auto px-4' >
          <div className='flex items-center justify-center flex-col my-8 lg:mb-16'>
              <h2 className="text-center text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight mb-4 text-light-black md:text-4xl">
                  Nuestros <span className="text-zinc-100 ">Servicios</span>
              </h2>
              <span className='text-sm leading-7 text-neutral-100 uppercase text-center sm:text-left'>
                  Creando impacto visual, contando historias memorables
              </span>
          </div>
          <div className='flex justify-evenly items-center flex-col lg:flex-row ' >
            <div className='lg:w-1/3 w-full flex flex-col items-center sm:items-start' >
              <span className=' uppercase text-gray-50 font-medium text-center sm:text-left ' >Servicios</span>
              <h2 className=' capitalize text-neutral-50 my-4 md:my-0 font-bold text-3xl text-center sm:text-left' >Comencemos a trabajar ya mismo</h2>
              <a href="#Contact">
                <button className=' bg-slate-50 py-2 px-4 md:mt-6 rounded-full font-medium duration-200 shadow hover:shadow-lg active:shadow-sm hover:scale-105 active:scale-95 ' >Contactar</button>
              </a>
            </div>
            <div className='lg:w-2/3 w-full flex justify-evenly m-4 flex-col md:flex-row ' >
              <div className='card' >
                <Ad height={70}  fill="#efb810"/>
                <span className='font-bold my-2 text-xl text-light-black' >Marketing Digital</span>
                <p className='p !text-center' >Potenciamos tu presencia en línea con estrategias de marketing digital personalizadas. Desde campañas dirigidas hasta la gestión de redes sociales, optimizamos tu alcance y conexión con la audiencia digital.</p>
              </div> 
              <div className='card'>
                <Film height={70}  fill="#efb810"/>
                <span className='font-bold my-2 text-xl text-light-black' >Produccion audivisual</span>
                <p className='p !text-center' >Fusionamos el arte de la grabación con la pasión por contar historias. Creamos contenido visual cautivador, desde anuncios comerciales hasta recorridos virtuales, plasmando tu visión con precisión y creatividad.</p>
              </div>
            </div>
          </div>
        </div>

        <img src={But} className="w-full" alt="" />
    </section>
  )
}

export default Services