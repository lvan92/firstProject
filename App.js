import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configStore';
import InitApp from './InitApp';
import Toast from 'react-native-toast-message';
import { Home } from './screens/Home.screen';

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

