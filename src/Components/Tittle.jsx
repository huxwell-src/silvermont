
const Tittle = ({ titulo, destacado, subtitulo }) => {
  return (
    <div className='flex items-center justify-center flex-col my-8 lg:mb-16'>
      <h2 className="text-center text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight mb-4 text-light-black md:text-4xl">
        {titulo} <span className="text-gold">{destacado}</span>
      </h2>
      <span className='text-sm leading-7 text-gray-500 uppercase text-center sm:text-left'>
        {subtitulo}
      </span>
    </div>
  );
};

export default Tittle;
