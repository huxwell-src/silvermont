import {} from 'react';
import Hero from './Components/Hero';
import Contact from './Components/Contact';
import Clients from './Components/Clients';
import Galery from './Components/Galery';
import Cta from './Components/Cta';
import Rrss from './Components/Rrss';
<<<<<<< HEAD
import About from './Components/About';
import Services from './Components/Services';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
=======
import { FloatingWhatsApp } from 'react-floating-whatsapp';
>>>>>>> 2ea91f1d55f33e358249e1ce689aa02d87b1273d
import './App.css';

function App() {
  return (
    <>
      <FloatingWhatsApp
        accountName="Silvermount"
        avatar="https://i.ibb.co/n36g81X/Logo.png"
        statusMessage="Respuesta usual en 1 hora"
        chatMessage="Hola, bienvenido! 🤝
Como podemos ayudarte?"
<<<<<<< HEAD
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
=======
        placeholder="Escribir un mensaje"
        phoneNumber="+[country code] [number]"
        notification="true"
        notificationSound="true"
        notificationDelay="30"
        allowClickAway="True"
        allowEsc="True"
      />
      <Hero />
      <div className="container mx-auto px-4">
        <Galery />
        <Clients />
      </div>
      <Cta />
      <div className="container mx-auto px-4">
        <Contact />
        <Rrss />
      </div>
>>>>>>> 2ea91f1d55f33e358249e1ce689aa02d87b1273d
    </>
  );
}

export default App;
