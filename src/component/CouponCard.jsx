import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button, Icon } from '@rneui/themed';
import moment from 'moment';
import { getDimensions } from '../lib/common';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Clipboard from '@react-native-clipboard/clipboard';
import { getInterstitialId } from '../lib/admob';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CouponCard({ item, index }) {
  const [b, setB] = useState(false);
  const copyCoupon = async code => {
    Clipboard.setString(code);
    Toast.hide();

    setTimeout(() => {
      Toast.show({
        type: 'success',
        text1: '복사 완료!!',
        text2: code,
      });
    }, 100);

    item.isCopied = !item.isCopied;

    let copiedCouponList = await AsyncStorage.getItem('copiedCouponList');
    let result = [];
    if (copiedCouponList) {
      result = JSON.parse(copiedCouponList);
    }
    if (item.isCopied) {
      result.push(code);
      getInterstitialId();
    } else {
      result = result.filter(res => res !== code);
    }
    result = [...new Set(result)];
    await AsyncStorage.setItem('copiedCouponList', JSON.stringify(result));

    setB(!b);
  };
  return (
    <Card containerStyle={item.isCopied ? { backgroundColor: 'palegreen' } : {}}>
      <Card.Title>{item.couponCode}</Card.Title>
      <Card.Divider />
      <Text style={{ marginBottom: 10 }}>만료일: {moment(item.expireDate).format('YYYY년 M월 D일')}</Text>
      <Text style={{ marginBottom: 10 }}>{item.couponContent}</Text>
      <Button
        icon={<Ionicons name="copy-outline" color="#ffffff" size={20} style={{ marginRight: 10 }} />}
        buttonStyle={{
          borderRadius: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
        }}
        title="복사"
        onPress={() => copyCoupon(item.couponCode)}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
});
