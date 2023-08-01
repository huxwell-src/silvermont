import { useState } from 'react';
import angelainmo from '../assets/angelainmo.png'
import constect from '../assets/constect.png'
import cuidadoIntegral from '../assets/cuidado integrak.jpg'
import proseshs from '../assets/prosehs.png'
import realtyWorld from '../assets/realty world.png'
import securimetal from '../assets/securimental.png'
import strdGo from '../assets/strd go.jpg'
import Tittle from './Tittle';

const Clients = () => {
  // Arreglo de datos de clientes
  const clientsData = [
    {
      id: 1,
      imgUrl: angelainmo,
      altText: 'Angela Inmobiliaria',
    },
    {
      id: 2,
      imgUrl: constect,
      altText: 'Constect',
    },
    {
      id: 3,
      imgUrl: cuidadoIntegral,
      altText: 'Cuidado Integral',
    },
    {
      id: 4,
      imgUrl: proseshs,
      altText: 'Proseshs',
    },
    {
      id: 5,
      imgUrl: realtyWorld,
      altText: 'Realty World',
    },
    {
      id: 6,
      imgUrl: securimetal,
      altText: 'Securimetal',
    },
    {
      id: 7,
      imgUrl: strdGo,
      altText: 'Strd Go',
    },
  ];
  
  // Estado local para almacenar el id del cliente activado por hover
  const [hoveredClientId, setHoveredClientId] = useState(null);

  return (
    <section className="">
      <div className="mx-auto py-8 lg:py-16">
        <Tittle
        titulo="Nuestros"
        destacado="Clientes"
        subtitulo="Algunos de los clientes que ya han confiado en nostros"
        />
        <ul className="grid grid-cols-3 gap-10 sm:gap-12 md:grid-cols-3 lg:grid-cols-7">
          {clientsData.map((client) => (
            <li
              key={client.id}
              className={`flex items-center justify-center ${
                hoveredClientId !== null && hoveredClientId !== client.id
                  ? 'blur-sm duration-[400ms] '
                  : ''
              }`}
              onMouseEnter={() => setHoveredClientId(client.id)}
              onMouseLeave={() => setHoveredClientId(null)}
            >
              <img
                src={client.imgUrl}
                className={`grayscale ${
                  hoveredClientId === client.id ? 'grayscale-0' : ''
                } duration-[400ms] transform ${
                  hoveredClientId === client.id ? '-translate-y-3' : ''
                }`}
                alt={client.altText}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Clients;
