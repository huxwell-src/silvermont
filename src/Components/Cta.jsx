import {  } from 'react'

const Cta = () => {
  return (
    <section
      className="bg-center bg-no-repeat bg-cover bg-[url('https://images.unsplash.com/photo-1523132797263-747d5d0dbbb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80')] bg-gray-700 bg-blend-multiply"
    >
      <div className="px-4 mx-auto max-w-screen-xl backdrop-blur-sm text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          ¡Convierte tu visión en una obra maestra audiovisual! Contáctanos hoy mismo.
        </h1>
        <p className="mb-8 font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          En Silvermont, transformamos ideas en realidades impactantes y memorables.</p>
        <div className="flex  sm:flex-row justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="#Contact"
            className="btn flex justify-center items-center"
          >
            Comenzar
            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Cta