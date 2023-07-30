import {} from 'react';
import { Logo, Menu } from './Icons';

const Navbar = () => {
  const links = [
    { id: 1, title: 'Inicio', url: '#' },
    { id: 2, title: 'Servicios', url: '#' },
    { id: 3, title: 'Acerca de', url: '#' },
    { id: 4, title: 'Contacto', url: '#' },
  ];

  const Width = () => 125;

  return (
    <header className="z-[999] absolute px-10 py-4 flex  justify-between items-center duration-75">
      <a href="#">
        {' '}
        <Logo color="#252525" width={Width()} />
      </a>
      <div className="relative ">
        <div className="sm:hidden">
          <Menu color="#FDFDFD" width={7} />
        </div>
        <div className="">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.url}
              className=' hidden sm:inline
            relative text-light-black text-lg font-medium decoration-none ml-4 
            transition-all duration-200 ease-in-out 
            before:absolute before:content-[" "] before:bg-gold before:w-0 before:h-[3px] before:rounded-full before:bottom-0 before:left-0 
            before:transition-all before:duration-200 before:ease-in-out 
            hover:text-gold hover:before:w-full'
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
