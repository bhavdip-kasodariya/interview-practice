import * as React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Screens} from '../CommonConfig';
import styles from './styles';
import HomeScreen from '../Screens/Home';

const Stack = createStackNavigator();

const HideHeader = {
  headerShown: false,
};

export default function AppNavigator() {
  return (
    <SafeAreaProvider style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={Screens.Home}
          screenOptions={{
            ...TransitionPresets.SlideFromRightIOS,
          }}>
          <Stack.Screen
            name={Screens.Home}
            component={HomeScreen}
            options={HideHeader}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
