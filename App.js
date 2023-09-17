import {
  NavigationContainer,
  DefaultTheme
} from '@react-navigation/native';
import React from "react";
import { NativeBaseProvider } from "native-base";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import ForgotPassword from './components/auth/ForgotPassword';
import ChangePassword from './components/auth/ChangePassword';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white'
  },
};

const headerOptions = {
  headerStyle: {
    backgroundColor: 'indigo.700'
  },
  headerTintColor: 'white'
}

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer theme={ MyTheme }>
        <Stack.Navigator>
          <Stack.Screen
            name='Login'
            component={ Login }
            options={ headerOptions }
          />
          <Stack.Screen
            name='SignUp'
            component={ SignUp }
            options={{
              ...headerOptions,
              title: 'Sign up'
            }}
          />
          <Stack.Screen
            name='ForgotPassword'
            component={ ForgotPassword }
            options={{
              ...headerOptions,
              title: 'Recover your password'
            }}
          />
          <Stack.Screen
            name='ChangePassword'
            component={ ChangePassword }
            options={{
              ...headerOptions,
              title: 'Change your password'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
  