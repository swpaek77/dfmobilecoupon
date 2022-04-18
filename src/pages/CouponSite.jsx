import React from 'react';
import WebView from 'react-native-webview';

export default function CouponSite() {
  return <WebView source={{ uri: 'https://mcoupon.nexon.com/dnfm' }} />;
}
