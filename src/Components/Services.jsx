import {  } from 'react'
import Top from '../assets/wave-top.png'
import But from '../assets/wave-but.png'

const Services = () => {
  return (
    <section id='Services' className='bg-gold' >
        <img src={Top} className="w-full" alt="" />
        <div className='flex items-center justify-center flex-col my-8 lg:mb-16'>
            <h2 className="text-center text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight mb-4 text-light-black md:text-4xl">
                Nuestros <span className="text-zinc-100 ">Servicios</span>
            </h2>
            <span className='text-sm leading-7 text-neutral-100 uppercase text-center sm:text-left'>
                Creando impacto visual, contando historias memorables
            </span>
        </div>
        <img src={But} className="w-full" alt="" />
    </section>
  )
}

export default Services