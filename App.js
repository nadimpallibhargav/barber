import React from 'react';
import Entry from "./app/screens/EntryPage"
import LoginPage from './app/screens/LoginPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  SignInPage from './app/screens/SignInPage';

export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator>
        <Stack.Screen
          name="Entry"
          component={Entry}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen 
          name="Login" 
          component={LoginPage}
          options={{ title: 'Login' }}
          />
        <Stack.Screen 
          name="SignIn" 
          component={SignInPage}
          options={{ title: 'SignIn' }}
          />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}