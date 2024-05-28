import React, { useState } from 'react';
import Navbar from '../componentes/Navbar';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
        <Navbar/>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" placeholder="Nombre" value={formData.firstName} onChange={handleChange} />
        <input type="text" name="lastName" placeholder="Apellido" value={formData.lastName} onChange={handleChange} />
        <input type="email" name="email" placeholder="Correo electrónico" value={formData.email} onChange={handleChange} />
        <input type="password" name="password" placeholder="Contraseña" value={formData.password} onChange={handleChange} />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;