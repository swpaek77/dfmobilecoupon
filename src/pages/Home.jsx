import { BannerAd, BannerAdSize } from '@react-native-admob/admob';
import axios from 'axios';
import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { adBannerId, getInterstitialId, getRewardedAd } from '../lib/admob';

export default function Home() {
  useEffect(() => {
    getDfMobileCoupon();
  }, []);

  const getDfMobileCoupon = async () => {
    try {
      const { data } = await axios.get('https://api.pswoo.com/df-mobile-coupons', {
        params: {
          _sort: 'expireDate:DESC',
        },
      });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <BannerAd size={BannerAdSize.BANNER} unitId={adBannerId} />
      <TouchableOpacity
        //
        style={{ padding: 10, backgroundColor: 'green' }}
        onPress={() => getInterstitialId()}
      >
        <Text>2. 전면 광고</Text>
      </TouchableOpacity>
      <TouchableOpacity
        //
        style={{ padding: 10, backgroundColor: 'green' }}
        onPress={() => getRewardedAd()}
      >
        <Text>4. 보상형 광고</Text>
      </TouchableOpacity>
      <Text>Home!</Text>
    </View>
  );
}
