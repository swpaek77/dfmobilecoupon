import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './pages/Home';
import Setting from './pages/Setting';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#e91e63',
        // tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen
        name="Feed"
        component={Home}
        options={{
          title: '던파 모바일 쿠폰',
          tabBarLabel: '쿠폰',
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          title: '설정',
          tabBarLabel: '설정',
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="cog" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
}
