import React, {useContext, useState} from 'react'
import Input from '../widgets/Input'
import Button from '../widgets/Button'
import {useHistory} from 'react-router'
import AppContext from '../context/AppContext'

const ContactInformationForm = () => {
  const history = useHistory()
  const {addBuyer} = useContext(AppContext)
  
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    country: '',
    state: '',
    postalcode: '',
    phone:'',
  })
  
  const handleChange = ({target}) =>{
    setUserInfo({
      ...userInfo,
      [target.name]: target.value
    })
  }
  
  const handleSubmit = (event) =>{
    event.preventDefault()
    addBuyer(userInfo)
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
        value={userInfo.name}
        handleChange={handleChange}
        placeholder="Nombre Completo"
        autoComplete="name" 
        type="text"
        required
      />
      <Input 
        className="form-control"
        name="email"
        value={userInfo.email}
        handleChange={handleChange}
        placeholder="Correo Electrónico"
        autoComplete="email" 
        type="email"
        required
      />
      <Input 
        className="form-control"
        name="address"
        value={userInfo.address}
        handleChange={handleChange}
        placeholder="Dirección"
        autoComplete="street-address" 
        type="text"
        required
      />
      <Input 
        className="form-control"
        name="city"
        value={userInfo.city}
        handleChange={handleChange}
        placeholder="Ciudad"
        type="text"
        required
      />
      <Input 
        className="form-control"
        name="country"
        value={userInfo.country}
        handleChange={handleChange}
        placeholder="País"
        autoComplete="country-name" 
        type="text"
        required
      />
      <Input 
        className="form-control"
        name="state"
        value={userInfo.state}
        handleChange={handleChange}
        placeholder="Estado"
        type="text"
        required
      />
      <Input 
        className="form-control"
        name="postalcode"
        value={userInfo.postalcode}
        handleChange={handleChange}
        placeholder="Código Postal"
        autoComplete="postal-code" 
        type="text"
        required
      />
      <Input 
        className="form-control"
        name="phone"
        value={userInfo.phone}
        handleChange={handleChange}
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
