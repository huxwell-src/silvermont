import {} from 'react'
import {Logo} from './Icons'

const Navbar = () => {
    const links = [
        { id: 1, title: 'Inicio', url: '#' },
        { id: 2, title: 'Servicios', url: '#' },
        { id: 3, title: 'Acerca de', url: '#' },
        { id: 4, title: 'Contacto', url: '#' },
      ];
  return (
    <header className=' z-[999] absolute top-0 left-0 w-full flex justify-between items-center py-4 px-10 md:px-20 lg:px-52 duration-75' >
    <a href="#">   <Logo color="#252525" width={170} /> </a>
    <div className='relative ' >
        <div className='' >
            {links.map((link) => (
            <a key={link.id} href={link.url} 
            className='
            relative text-light-black text-lg font-medium decoration-none ml-4 
            transition-all duration-200 ease-in-out 
            before:absolute before:content-[" "] before:bg-gold before:w-0 before:h-[3px] before:rounded-full before:bottom-0 before:left-0 
            before:transition-all before:duration-200 before:ease-in-out 
            hover:text-gold hover:before:w-full'>
                {link.title}
            </a>))}
        </div>
    </div>
</header>
  )
}

export default Navbar