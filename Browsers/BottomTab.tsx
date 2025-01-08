import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen1 from '../Screens/Screen1';
import Screen2 from '../Screens/Screen2';
import Screen3 from '../Screens/Screen3';
import Screen4 from '../Screens/Screen4';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Screen1" component={Screen1}/>
    <Tab.Screen name="Screen2" component={Screen2}/> 
    <Tab.Screen name="Screen3" component={Screen3}/>
    <Tab.Screen name="Screen4" component={Screen4}/>
  </Tab.Navigator>
);

export default BottomTabNavigator;
