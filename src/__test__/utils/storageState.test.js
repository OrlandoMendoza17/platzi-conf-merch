import {getState, saveState} from "../../utils/storageState";
import LocalStorageMock from "../../__mocks__/localStorageMock";

describe('Pruebas de los utils storageState', () => {
  const objectToSave = {
    cart: [],
    buyer: {},
    orders: [],
    products: [],
  }
  global.localStorage = new LocalStorageMock;
  saveState(objectToSave);
  
  test('Probando que se guarde el state en el localStorage', () => {
    const state = localStorage.getItem('state');
    const expectedState = JSON.stringify(objectToSave);
    expect(state).toBe(expectedState)
  })
  test('Probando que se recupere el state del localStorage', () => {
    expect(getState()).toStrictEqual(objectToSave)
  })
})