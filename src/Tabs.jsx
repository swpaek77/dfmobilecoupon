import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CouponSite from './pages/CouponSite';
import Home from './pages/Home';
import MyCode from './pages/MyCode';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#4b6cb7',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: '던파 모바일 쿠폰',
          tabBarLabel: '쿠폰',
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="MyCode"
        component={MyCode}
        options={{
          title: '나의 회원 코드',
          tabBarLabel: '회원 코드',
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="archive" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="CouponSite"
        component={CouponSite}
        options={{
          title: '쿠폰 사이트',
          tabBarLabel: '쿠폰 사이트',
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="web" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
}
