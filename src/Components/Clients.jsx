import { useState } from 'react';

const Clients = () => {
  // Arreglo de datos de clientes
  const clientsData = [
    {
      id: 1,
      imgUrl: 'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_6b8d809e846542f9a8b4ecf1114fdd33.jpg',
      altText: 'Client 1',
    },
    {
      id: 2,
      imgUrl: 'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_6b8d809e846542f9a8b4ecf1114fdd33.jpg',
      altText: 'Client 2',
    },
    {
      id: 3,
      imgUrl: 'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_6b8d809e846542f9a8b4ecf1114fdd33.jpg',
      altText: 'Client 3',
    },
    {
      id: 4,
      imgUrl: 'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_6b8d809e846542f9a8b4ecf1114fdd33.jpg',
      altText: 'Client 3',
    },
    {
      id: 5,
      imgUrl: 'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_6b8d809e846542f9a8b4ecf1114fdd33.jpg',
      altText: 'Client 3',
    },
    {
      id: 6,
      imgUrl: 'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_6b8d809e846542f9a8b4ecf1114fdd33.jpg',
      altText: 'Client 3',
    },
    {
      id: 7,
      imgUrl: 'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_6b8d809e846542f9a8b4ecf1114fdd33.jpg',
      altText: 'Client 3',
    },
    {
      id: 8,
      imgUrl: 'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_6b8d809e846542f9a8b4ecf1114fdd33.jpg',
      altText: 'Client 3',
    },
  ];
  
  // Estado local para almacenar el id del cliente activado por hover
  const [hoveredClientId, setHoveredClientId] = useState(null);

  return (
    <section className="mx-4">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:py-16">
        <h2 className="mb-8 text-center text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900 md:text-4xl lg:mb-16">
          Nuestros <span className="text-gold">Clientes</span>
        </h2>
        <ul className="grid grid-cols-2 gap-10 sm:gap-12 md:grid-cols-3 lg:grid-cols-4">
          {clientsData.map((client) => (
            <li
              key={client.id}
              className={`flex items-center justify-center ${
                hoveredClientId !== null && hoveredClientId !== client.id
                  ? 'blur'
                  : ''
              }`}
              onMouseEnter={() => setHoveredClientId(client.id)}
              onMouseLeave={() => setHoveredClientId(null)}
            >
              <img
                src={client.imgUrl}
                className={`grayscale ${
                  hoveredClientId === client.id ? 'grayscale-0' : ''
                } duration-300 transform ${
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
