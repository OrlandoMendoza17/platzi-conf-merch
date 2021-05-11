import React from 'react';
import {mount, shallow} from "enzyme";
import Product from "../../components/Product";
import ProductMock from "../../__mocks__/ProductMock";
import ProviderMock from "../../__mocks__/ProviderMock";

describe('<Product />', () =>{
  const product = mount(
    <ProviderMock>
      <Product product={ProductMock}/>
    </ProviderMock>
  )

  test('Render del Componente Product', () => {
    expect(product.length).toEqual(1);
  });
  
  test('Settear un Producto como favorito', () => {
    const button = product.find('button')
    const btnInstace = button.instance()
    
    //Por defecto todo producto no debe ser favorito
    expect(btnInstace.className).not.toMatch(/selected/)
    button.simulate('click')
    
    expect(btnInstace.className).toMatch(/selected/)
  });
});