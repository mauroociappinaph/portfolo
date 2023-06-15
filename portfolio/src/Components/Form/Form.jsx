import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Realiza las acciones necesarias con los datos del formulario (por ejemplo, enviar una solicitud, actualizar el estado, etc.)
    console.log('Name:', name);
    console.log('Email:', email);
    // Limpia los campos del formulario
    setName('');
    setEmail('');
  };

  return (
    <>
    <NavBar />
    <div>
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    <Footer />
    </>
  );
}

export default Form;
