import {} from 'react';
import Hero from './Components/Hero';
import Contact from './Components/Contact';
import Clients from './Components/Clients';
import Galery from './Components/Galery';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import './App.css';

function App() {
  return (
    <>
        <FloatingWhatsApp
          accountName="Silvermount"
          avatar='https://i.ibb.co/n36g81X/Logo.png'
          statusMessage='Respuesta usual en 1 hora'
          chatMessage="Hola, bienvenido! 🤝
Como podemos ayudarte?"
          placeholder="Escribir un mensaje"
          phoneNumber="+[country code] [number]"
          notification= "true"
          notificationSound="true"
          notificationDelay="30"
          allowClickAway="True"
          allowEsc="True"
        />
        <Hero />
        <div className='container mx-auto'>
        <Galery/>
        <Clients/>
        <Contact />
        </div>
    </>
  );
}

export default App;
