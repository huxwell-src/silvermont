import { useState } from 'react';
import { Logo } from './Icons';
import { Dialog } from '@headlessui/react';
import Wave from '../assets/wavHero.png';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// Datos de navegación
const navigation = [
  { name: 'Inicio', href: '#' },
  { name: 'Servicios', href: '#' },
  { name: 'Galeria', href: '#Galery' },
  { name: 'Contacto', href: '#Contact' },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className=" bg-fixed bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1601585195878-4017735dea2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80')]">
        <div className="bg-black/75 overflow-hidden backdrop-blur	 flex flex-col justify-center bg-no-repeat object-cover h-[100svh] ">
          {/* Encabezado con barra de navegación */}
          <header className="absolute inset-x-0 top-0 z-50">
            <nav
              className="flex items-center justify-between p-6 lg:px-8"
              aria-label="Global"
            >
              <div className="flex lg:flex-1">
                {/* Logo */}
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Silvermont</span>
                  <Logo height="32" color="#FDFDFD" />
                </a>
              </div>
              {/* Botón del menú en dispositivos móviles */}
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-light"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              {/* Navegación en escritorio */}
              <div className="hidden lg:flex lg:gap-x-12">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="md:text-base text-sm  font-semibold leading-6 text-light hover:scale-110 duration-200"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="hidden lg:flex lg:flex-1"></div>
            </nav>
            {/* Menú desplegable en dispositivos móviles */}
            <Dialog
              as="div"
              className="lg:hidden"
              open={mobileMenuOpen}
              onClose={setMobileMenuOpen}
            >
              <div className="fixed inset-0 z-50" />
              <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                  {/* Logo en el menú desplegable */}
                  <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Silvermount</span>
                    <Logo height="25" color="#191919" />
                  </a>
                  {/* Botón de cierre del menú desplegable */}
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-light-black"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  {/* Elementos de navegación en el menú desplegable */}
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Dialog>
          </header>

          {/* Contenido del Hero */}
          <div className="relative mt-auto px-6 flex items-center pt-14 lg:px-8">
            {/* Fondo degradado y efecto de desenfoque */}
            <div className=""></div>
            <div className="mx-auto max-w-5xl ">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight sm:text-[3rem] xl:text-6xl text-light ">
                  ¿Necesita grabar vídeos de alta calidad de las propiedades de
                  su empresa? <br /> Nosotros podemos hacerlo.
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 text-light ">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a href="#Contact" className="btn">
                    Contactar
                  </a>
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-light hover:scale-105 duration-200"
                  >
                    Explorar <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="self-end h-20 w-full  mt-auto ">
            <img src={Wave} className="h-full w-full " />
          </div>
        </div>
      </div>
    </>
  );
}
