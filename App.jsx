import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { initAppOpenAd, initInterstitialId, initRewardedAd } from './src/lib/admob';
import Tabs from './src/Tabs';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import { toastConfig } from './src/lib/toastConfig';
import { requestUserPermission } from './src/lib/common';

export default function App() {
  useEffect(() => {
    // 이건 좀 심한듯?
    // initAppOpenAd();
    initInterstitialId();
    initRewardedAd();

    requestUserPermission();
  }, []);

  return (
    <>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
      <Toast position="top" config={toastConfig} />
    </>
  );
}
