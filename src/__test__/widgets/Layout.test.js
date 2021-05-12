import React from 'react';
import {mount} from 'enzyme';
import {create} from "react-test-renderer";
import Layout from "../../components/Layout";
import ProviderMock from "../../__mocks__/ProviderMock";

describe('<Layout/>', ()=>{
  const ComponentToTest = (
    <ProviderMock>
      <Layout/>
    </ProviderMock>
  )
  
  test('Render del Layout', () => {
    const layout = mount(ComponentToTest)
    expect(layout.length).toEqual(1);
  });
  
  test('Comprobar la UI del componente Layout', () => {
    const layout = create(ComponentToTest)
    expect(layout.toJSON()).toMatchSnapshot();
  });
});