import React from 'react';
import {create} from 'react-test-renderer';
import { shallow } from 'enzyme';
import Header from '../../widgets/Header';
import ProviderMock from '../../__mocks__/ProviderMock';


describe('<Header />', ()=>{
  const Component = (
    <ProviderMock>
      <Header/>
    </ProviderMock>
  )
  
  test('Render del Componente Header', () => {
    const header = shallow(Component);
    expect(header.length).toEqual(1);
  });
  
  test('Comprobar la UI de Header', () => {
    const header = create(Component);
    expect(header.toJSON()).toMatchSnapshot();
  });
});