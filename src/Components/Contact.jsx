import  { useState, useEffect } from 'react';
import axios from 'axios';

function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    // Fetch country data using Rest Countries API v2
    axios
      .get('https://restcountries.com/v2/all')
      .then((response) => {
        const countryData = response.data;
        setCountries(countryData);
        setSelectedCountry(countryData[0]?.name || '');
      })
      .catch((error) => {
        console.error('Error fetching country data:', error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to the server)
    console.log('Form submitted!');
  };

  return (
    <div className="max-w-screen-md mx-auto p-5">
      <header className="text-center mb-16">
        <p className="mt-4 text-sm leading-7 text-gray-500 font-regular uppercase">
          Contacto
        </p>
        <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
          Cotiza <span className="text-gold">Ahora</span>
        </h3>
      </header>

      <form className="w-full" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              htmlFor="first-name"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Nombre
            </label>
            <input
              className="input"
              id="first-name"
              type="text"
              placeholder="Axel"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              htmlFor="last-name"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Apellido
            </label>
            <input
              className="input"
              id="last-name"
              type="text"
              placeholder="Gonzalez"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              htmlFor="email"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Email
            </label>
            <input
              className="input"
              id="email"
              type="email"
              placeholder="someone@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              htmlFor="phone"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Teléfono
            </label>
            <div className="flex items-center">
              <select
                className="appearance-none block bg-gray-200 w-1/4 text-gray-700 border border-gray-200 rounded-l-xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                onChange={(e) => setSelectedCountry(e.target.value)}
                value={selectedCountry}
              >
                {countries.map((country, index) => (
                  <option key={index} value={country.name}>
                    {country.flags && (
                      <img
                        src={country.flags.svg}
                        alt={country.name}
                        className="w-6 h-4 mr-2"
                      />
                    )}
                    {country.name}
                  </option>
                ))}
              </select>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-r-xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="phone"
                type="text"
                placeholder="Número de teléfono"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              htmlFor="message"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Tu mensaje
            </label>
            <textarea
              rows="10"
              placeholder="Cuentanos con todo detalle aquello que pretendes lograr"
              className="input"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="text-right w-full px-3">
            <button className="btn my-5" type="submit">
              Cotizar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
