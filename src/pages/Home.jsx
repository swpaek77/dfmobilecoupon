import { BannerAd, BannerAdSize } from '@react-native-admob/admob';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import CouponCard from '../component/CouponCard';
import { adBannerId } from '../lib/admob';
import { getUniqueId, getManufacturer, getModel } from 'react-native-device-info';

export default function Home({ navigation }) {
  const [dfMobileCoupon, setDfMobileCoupon] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDfMobileCoupon();
    });

    return unsubscribe;
  }, [navigation]);

  const getDfMobileCoupon = async () => {
    try {
      console.log('getUniqueId', getUniqueId());
      console.log('getManufacturer', await getManufacturer());
      console.log('getModel', getModel());
      const { data } = await axios.get('https://api.pswoo.com/df-mobile-coupons', {
        params: {
          _sort: 'expireDate:DESC',
        },
      });

      let couponList = data;
      let copiedCouponList = await AsyncStorage.getItem('copiedCouponList');
      if (copiedCouponList) {
        copiedCouponList = JSON.parse(copiedCouponList);
        couponList.forEach(res => {
          if (copiedCouponList.includes(res.couponCode)) {
            res.isCopied = true;
          }
        });
      }

      setDfMobileCoupon(couponList);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <BannerAd size={BannerAdSize.ADAPTIVE_BANNER} unitId={adBannerId} />
      <FlatList
        //
        data={dfMobileCoupon}
        contentContainerStyle={{ paddingBottom: 30 }}
        renderItem={({ item, index }) => <CouponCard item={item} index={index} />}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}
