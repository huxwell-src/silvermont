import {} from 'react';

const Clients = () => {
  const clientsData = [
    {
      id: 1,
      imgUrl: 'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_6b8d809e846542f9a8b4ecf1114fdd33.jpg',
      altText: 'Client 1',
    },
    {
        id: 1,
        imgUrl: 'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_6b8d809e846542f9a8b4ecf1114fdd33.jpg',
        altText: 'Client 1',
      },
      {
        id: 1,
        imgUrl: 'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_6b8d809e846542f9a8b4ecf1114fdd33.jpg',
        altText: 'Client 1',
      },
    // Add more client objects as needed
  ];

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:py-16">
        <h2 className="mb-8 text-center text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900 dark:text-white md:text-4xl lg:mb-16">
          Nuestros <span className="text-gold">Clientes</span>
        </h2>
        <ul className="grid grid-cols-2 gap-10 sm:gap-12 md:grid-cols-3 lg:grid-cols-4">
          {clientsData.map((client) => (
            <li key={client.id} className="flex items-center justify-center">
              <img src={client.imgUrl} className=' grayscale hover:grayscale-0 duration-300 hover:-translate-y-3 ' alt={client.altText} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Clients;
