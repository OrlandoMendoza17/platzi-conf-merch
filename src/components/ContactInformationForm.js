import React from 'react'
import Input from '../widgets/Input'
import Button from '../widgets/Button'

const ContactInformationForm = () => {
  return (
    <form className="ContactInformationForm">
      <Input 
        className="form-control"
        name="name"
        placeholder="Nombre Completo"
        autoComplete="name" 
        type="text"
      />
      <Input 
        className="form-control"
        name="email"
        placeholder="Correo Electrónico"
        autoComplete="email" 
        type="email"
      />
      <Input 
        className="form-control"
        name="street-address"
        placeholder="Dirección"
        autoComplete="street-address" 
        type="text"
      />
      <Input 
        className="form-control"
        name="street-address"
        placeholder="Apartamento"
        autoComplete="street-address" 
        type="text"
      />
      <Input 
        className="form-control"
        name="city"
        placeholder="Ciudad"
        type="text"
      />
      <Input 
        className="form-control"
        name="country-name"
        placeholder="País"
        autoComplete="country-name" 
        type="text"
      />
      <Input 
        className="form-control"
        name="state"
        placeholder="Estado"
        type="text"
      />
      <Input 
        className="form-control"
        name="postal-code"
        placeholder="Código Postal"
        autoComplete="postal-code" 
        type="text"
      />
      <Input 
        className="form-control"
        name="tel"
        placeholder="Teléfono"
        autoComplete="tel" 
        type="tel"
      />
      <Button>
        PAGAR
      </Button>
    </form>
  )
}

export default ContactInformationForm
