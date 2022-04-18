import { BannerAd, BannerAdSize } from '@react-native-admob/admob';
import { ListItem, Switch } from '@rneui/themed';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { adBannerId } from '../lib/admob';

export default function Setting() {
  const [push, setPush] = useState(false);
  return (
    <View>
      <BannerAd size={BannerAdSize.ADAPTIVE_BANNER} unitId={adBannerId} />
      <ListItem bottomDivider onPress={() => console.log(123)}>
        <ListItem.Content style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
          <Switch value={push} onValueChange={value => setPush(value)} />
          <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 10 }}>푸시 알람 받기</Text>
        </ListItem.Content>
      </ListItem>
    </View>
  );
}
