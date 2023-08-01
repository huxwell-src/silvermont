import {} from 'react';
import Hero from './Components/Hero';
import Contact from './Components/Contact';
import Clients from './Components/Clients';
import Galery from './Components/Galery';
import Cta from './Components/Cta';
import Rrss from './Components/Rrss';
import About from './Components/About';
import Services from './Components/Services';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import './App.css';

function App() {
  return (
    <>
      <FloatingWhatsApp
        accountName="Silvermount"
        avatar="https://i.ibb.co/n36g81X/Logo.png"
        statusMessage="Respuesta usual en 1 hora"
        chatMessage="💬 Estamos aquí para dar vida a tus ideas. Hablemos y descubre cómo podemos crear juntos algo extraordinario. 🚀🎥"
        placeholder="Escribir un mensaje"
        phoneNumber="+[country code] [number]"
        notification= "true"
        notificationSound="true"
        notificationDelay="30"
        allowClickAway="True"
        allowEsc="True"
        />
        <Hero/>
        <div className='container mx-auto px-4'>
          <About/>
        </div>
          <Services/>
        <div className='container mx-auto px-4'>
          <Galery/>
          <Clients/>
        </div>
        <Cta/>
        <div className='container mx-auto px-4'>
          <Contact />
          <Rrss/>
        </div>
    </>
  );
}

export default App;
