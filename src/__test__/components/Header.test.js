import React from 'react';
import { mount, shallow } from 'enzyme';
import Header from '../../widgets/Header';
import ProviderMock from '../../__mocks__/ProviderMock';


describe('<Header />', ()=>{
  test('Render del Componente Header', () => {
    const header = shallow(
      <ProviderMock>
        <Header/>
      </ProviderMock>
    )
    expect(header.length).toEqual(1)
  });
});