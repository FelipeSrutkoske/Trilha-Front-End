import React from 'react';
import './ContactForm.css';

const ContactForm: React.FC = () => {
  return (
    <form className="contact-form">
      <input type="text" placeholder="Nome" />
      <input type="email" placeholder="Email" />
      <textarea placeholder="Mensagem" />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;