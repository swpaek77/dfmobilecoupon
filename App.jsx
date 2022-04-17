import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { globalInterstitial } from './src/lib/common';
import Tabs from './src/Tabs';

export default function App() {
  globalInterstitial;
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
