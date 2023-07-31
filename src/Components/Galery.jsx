import {} from 'react'
import Tittle from './Tittle';

const Galery = () => {
  return (
    <section id='Galery' >
        <Tittle
        titulo="Nuestro"
        destacado="Trabajo"
        subtitulo="Construyendo Relaciones Duraderas: Nuestra Dedicación a los Clientes y la Excelencia en Cada Proyecto"
        />
        <div className='flex flex-col  md:flex-row my-10' >
            <div className='md:w-1/2 mr-10' >
                <h2 className='mb-2 text-2xl font-bold uppercase ' >Galeria </h2>
                <p className='text-sm leading-5 text-justify text-light-black' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque porro deleniti possimus ducimus est eos ipsum officia, suscipit mollitia quisquam perspiciatis quod exercitationem accusantium quas fugit quam expedita. Voluptatum, neque!</p>
            </div>
            <div className="grid grid-cols-2 w-full ml-20 gap-4">
                <div className="h-full">
                    <iframe
                    title="Video 1"
                    className="mb-4 h-36 w-full rounded-2xl md:h-48 lg:h-64"
                    src="https://www.youtube.com/embed/_sugCKZiUes?autoplay=1&mute=1"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay"
                    ></iframe>
                    <iframe
                    title="Video 2"
                    className="mb-4 h-52 w-full rounded-2xl md:h-64 lg:h-96"
                    src="https://www.youtube.com/embed/_sugCKZiUes?autoplay=1&mute=1"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay"
                    ></iframe>
                </div>
                <div className="h-full">
                    <iframe
                    title="Video 3"
                    className="mb-4 h-52 w-full rounded-2xl md:h-64 lg:h-96"
                    src="https://www.youtube.com/embed/_sugCKZiUes?autoplay=1&mute=1"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay"
                    ></iframe>
                    <iframe
                    title="Video 4"
                    className="mb-4 h-36 w-full rounded-2xl md:h-48 lg:h-64"
                    src="https://www.youtube.com/embed/_sugCKZiUes?autoplay=1&mute=1"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay"
                    ></iframe>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Galery