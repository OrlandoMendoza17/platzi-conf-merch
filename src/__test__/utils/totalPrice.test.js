import {totalPrice} from "../../utils/totalPrice";

describe('Prueba del util totalPrice', ()=>{
  const cart = [
    {
      'price': 25,
      'count': 1,
    },
    {
      'price': 10,
      'count': 2,
    },
  ]
  const expected = 45;
  // Se multiplica la cantidad por el precio del producto
  
  test(`Se espera que el precio total de ${expected}`, () =>{
    expect(totalPrice(cart)).toEqual(expected)
  })
})