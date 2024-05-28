import React, { useState } from 'react';
import Navbar from '../componentes/Navbar';

const Login = () => {
  const [formData, setFormData] = useState({
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
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Correo electrónico" value={formData.email} onChange={handleChange} />
        <input type="password" name="password" placeholder="Contraseña" value={formData.password} onChange={handleChange} />
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;