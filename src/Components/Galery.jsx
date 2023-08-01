import {  } from 'react';
import Tittle from './Tittle';

const videos = [
  "https://www.youtube.com/embed/_sugCKZiUes?autoplay=1&mute=1&controls=0&showinfo=0&title=0loop=1",
  "https://www.youtube.com/embed/yrQeELBt7FA?autoplay=1&mute=1&controls=0&showinfo=0&title=0loop=1",
  "https://www.youtube.com/embed/pGGWSDj73Cg?autoplay=1&mute=1&controls=0&showinfo=0&title=0loop=1",
  "https://www.youtube.com/embed/eJAadHdYVz0?autoplay=1&mute=1&controls=0&showinfo=0&title=0loop=1",
];

const Galery = () => {
  return (
    <section id='Galery'>
      <Tittle
        titulo="Nuestro"
        destacado="Trabajo"
        subtitulo="Descubre el arte audiovisual en movimiento"
      />
      <div className='flex flex-col xl:flex-row my-10'>
        <div className='xl:w-1/3 mr-10 mb-6'>
        <h3 className='text-2xl font-bold'><span className='text-gold' >Galeria de</span>  Videos</h3>
          <p className='p'>
            Despierta tus emociones con nuestra cautivadora galería audiovisual. En Silvermount, hemos creado una selección de videos que no solo cuentan historias, sino que también activan conexiones emocionales profundas. Desde impactantes anuncios comerciales hasta deslumbrantes recorridos virtuales de propiedades inmobiliarias, cada video ha sido meticulosamente diseñado para dejar una impresión duradera en tu mente y corazón. Sumérgete en un mundo de narrativas visuales cautivadoras y experimenta el poder del audiovisual en su máxima expresión. 
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-2">
          {videos.map((videoUrl, index) => (
            <div key={index}>
              <iframe
                src={videoUrl}
                frameBorder="0"
                className='h-72 w-full  xl:w-96 rounded-2xl'
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Galery;
