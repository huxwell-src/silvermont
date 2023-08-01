import {  } from 'react'
import Tittle from './Tittle';

const About = () => {
  return (
    <section id='About' >
        <Tittle
        titulo="Pero,"
        destacado="¿Quienes somos?"
        subtitulo="Conoce el origen donde la magia del audiovisual cobra vida"
      />
      <div className='flex flex-col md:flex-row' >
        <div className='md:w-1/2' >
            <h3 className='text-2xl font-bold'><span className='text-gold' >Nuestra</span>  Historia</h3>
            <p className='p ' > Fundada por <span className='text-gold font-medium' > César González y Oscar Alfaro </span>, Silvermont es una empresa de producción audiovisual altamente especializada en el sector inmobiliario, comercial e industrial. Con una dedicación excepcional por contar historias, la experiencia acumulada en el campo y un enfoque creativo y profesional, él se dedica a captar clientes mediante la creación de contenidos publicitarios e internos cautivadores. Con un equipo altamente calificado y el uso de tecnología de vanguardia, él garantiza soluciones audiovisuales excepcionales y resultados de calidad. Silvermont trabaja incansablemente para plasmar la identidad única de cada negocio en cada proyecto audiovisual, llevando sus empresas al siguiente nivel con el poder del audiovisual. Si buscas destacar en el mercado y alcanzar tus objetivos empresariales, no dudes en contactar con Silvermount y experimentar la pasión por la producción audiovisual. </p>
        </div>
        <div className='md:w-1/2  flex items-center justify-center '>
            <div className='h-80 lg:h-96 w-80 lg:w-96 rounded-irregular-circle bg-cover bg-center bg-[url("https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")] ' ></div>
        </div>
      </div>
    </section>
  )
}

export default About