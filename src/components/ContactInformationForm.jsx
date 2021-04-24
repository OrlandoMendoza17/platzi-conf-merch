import React from 'react'
import Input from '../widgets/Input'
import Button from '../widgets/Button'
import {useHistory} from 'react-router'

const ContactInformationForm = () => {
  const history = useHistory()
  const handleSubmit = (event) =>{
    event.preventDefault()
    history.push('/payment')
  }
  return (
    <form 
      onSubmit={handleSubmit}
      className="ContactInformationForm"
    >
      <Input 
        className="form-control"
        name="name"
        placeholder="Nombre Completo"
        autoComplete="name" 
        type="text"
        required
      />
      <Input 
        className="form-control"
        name="email"
        placeholder="Correo Electrónico"
        autoComplete="email" 
        type="email"
        required
      />
      <Input 
        className="form-control"
        name="street-address"
        placeholder="Dirección"
        autoComplete="street-address" 
        type="text"
        required
      />
      <Input 
        className="form-control"
        name="city"
        placeholder="Ciudad"
        type="text"
        required
      />
      <Input 
        className="form-control"
        name="country-name"
        placeholder="País"
        autoComplete="country-name" 
        type="text"
        required
      />
      <Input 
        className="form-control"
        name="state"
        placeholder="Estado"
        type="text"
        required
      />
      <Input 
        className="form-control"
        name="postal-code"
        placeholder="Código Postal"
        autoComplete="postal-code" 
        type="text"
        required
      />
      <Input 
        className="form-control"
        name="tel"
        placeholder="Teléfono"
        autoComplete="tel" 
        type="tel"
        required
      />
      <Button type="submit">
        PAGAR
      </Button>
    </form>
  )
}

export default ContactInformationForm
