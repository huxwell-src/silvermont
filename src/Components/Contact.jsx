import  { } from 'react';
import Tittle from './Tittle';

function Contact() {

  return (
    <section id='Contact' >
        <Tittle
        titulo="Agenda"
        destacado="Ahora Ya"
        subtitulo="Construyendo Relaciones Duraderas: Nuestra Dedicación a los Clientes y la Excelencia en Cada Proyecto"
      />
        <form className='xl:mx-60' >
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label htmlFor="first_name" className="block mb-2  font-medium text-light-black ">Nombre</label>
              <input type="text" className="input" placeholder="Nicolas" required />
            </div>
            <div>
              <label htmlFor="last_name" className="block mb-2 font-medium text-light-black ">Apellido</label>
              <input type="text" className="input" placeholder="Gonzalez" required />
            </div>
            <div>
              <label htmlFor="Email" className="block mb-2 font-medium text-light-black ">Email</label>
              <input type="Email"  className="input" placeholder="Nombre@ejempl" required />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-2 font-medium text-light-black ">Telefono</label>
              <input type="tel"className="input" placeholder="+56 9 12345678"  pattern="\+569[0-9]{8}" required />
            </div>
            
          </div>
          <div>
              <label htmlFor="phone" className="block mb-2 font-medium text-light-black ">Cuentanos tu caso</label>
              <textarea  cols="30" rows="10" placeholder='Describe con todo detalle lo que quires trabajar con nosotros' className='input mb-4'></textarea>
            </div>
          <div className='w-full text-right ' >
            <button type="submit" className="btn">Enviar</button>
          </div>
        </form>
    </section>
  );
}

export default Contact;
