import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';

import Home from '../views/Home'
import Produtos from '../views/Produtos'


const routeTab = createBottomTabNavigator()

const Tab= () =>{
    return(

        <routeTab.Navigator 
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Produtos') {
                iconName = focused ? 'musical-notes-outline' : 'musical-notes-sharp';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'blue',
            inactiveTintColor: 'black',
          }}>
            <routeTab.Screen name="Home" component={Home}/>
            <routeTab.Screen name="Produtos" component={Produtos}/>
        </routeTab.Navigator>

 
 
      
    )
}

export default Tab