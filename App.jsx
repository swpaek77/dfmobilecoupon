import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { initAppOpenAd, initInterstitialId, initRewardedAd } from './src/lib/admob';
import Tabs from './src/Tabs';

export default function App() {
  useEffect(() => {
    initAppOpenAd();
    initInterstitialId();
    initRewardedAd();
  }, []);

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
