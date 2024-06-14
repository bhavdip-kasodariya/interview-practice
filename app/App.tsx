import React from 'react';
import { View } from 'react-native';

import AppNavigator from './Navigation/AppNavigator';
import { styles } from './styles';
import store from './Reducers/Store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <AppNavigator />
      </View>
    </Provider>
  );
};

export default App;
