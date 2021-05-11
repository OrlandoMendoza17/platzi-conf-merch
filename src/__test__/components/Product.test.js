import React from 'react';
import {shallow} from "enzyme";
import Product from "../../components/Product";
import ProductMock from "../../__mocks__/ProductMock";
import ProviderMock from "../../__mocks__/ProviderMock";

describe('<Product />', () =>{
  test('Render del Componente Product', () => {
    const product = shallow(
      <ProviderMock>
        <Product product={ProductMock}/>
      </ProviderMock>
    )
    expect(product.length).toEqual(1);
  });
});