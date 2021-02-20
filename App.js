import React from 'react';
import Router from './src/router/index'
import {NavigationContainer} from '@react-navigation/native'
import Header from './src/componentes/Header/index'
import {View} from 'react-native'

export default function App() {
  return (
    <View style={{flex: 1}}>  
      <NavigationContainer>
        <Header />
        <Router />
      </NavigationContainer>
    </View>
  
  );
}

