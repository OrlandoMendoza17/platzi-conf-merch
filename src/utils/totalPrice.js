export const totalPrice = (cart) =>{
  return cart.reduce((accumulator, item) => accumulator + (item.price * item.count), 0)
}