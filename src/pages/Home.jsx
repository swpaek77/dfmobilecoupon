import React from 'react';
import { BannerAd, BannerAdSize, TestIds } from '@react-native-admob/admob';
import { useAtom } from 'jotai';
import { Text, TouchableOpacity, View } from 'react-native';
import { interstitialJotai } from '../jotai';
import { showGlobalInterstitial, showInterstitial } from '../lib/common';

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <BannerAd size={BannerAdSize.BANNER} unitId={TestIds.BANNER} />
      <TouchableOpacity onPress={() => showGlobalInterstitial()}>
        <Text>test 11</Text>
      </TouchableOpacity>
      <Text>Home!</Text>
    </View>
  );
}
