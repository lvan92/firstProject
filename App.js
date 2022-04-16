import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configStore';
import InitApp from './InitApp';

export const store = configureStore();
export default function App() {
  return (
    <Provider
      store={store}
    >
      <InitApp/>
    </Provider>
  );
}

