import { AppOpenAd, InterstitialAd, RewardedAd, TestIds } from '@react-native-admob/admob';
import { Platform } from 'react-native';
import { isTest } from './common';

export const adBannerId = isTest ? TestIds.BANNER : Platform.OS === 'android' ? 'ca-app-pub-6661482404483333/6425409561' : 'ca-app-pub-6661482404483333/2783841163';
export const adOpenId = isTest ? TestIds.APP_OPEN : Platform.OS === 'android' ? 'ca-app-pub-6661482404483333/5612242530' : 'ca-app-pub-6661482404483333/6542180826';
export const adInterstitialId = isTest ? TestIds.INTERSTITIAL : Platform.OS === 'android' ? 'ca-app-pub-6661482404483333/6505687656' : 'ca-app-pub-6661482404483333/2566442647';
export const adNativeId = isTest ? TestIds.NATIVE_ADVANCED : Platform.OS === 'android' ? 'ca-app-pub-6661482404483333/2794507503' : 'ca-app-pub-6661482404483333/8785200787';
export const adRewardedId = isTest ? TestIds.REWARDED : Platform.OS === 'android' ? 'ca-app-pub-6661482404483333/7918254948' : 'ca-app-pub-6661482404483333/3496380935';

// 0. 배너 광고
// 각 스크린에서 그냥 실행

// 1. App 오픈 광고
let appOpenAd = {};
export const initAppOpenAd = () => {
  appOpenAd = AppOpenAd.createAd(adOpenId);
  appOpenAd.addEventListener('adLoaded', e => {
    // console.log(e);
    // 좋은데 너무 심할듯?
    // appOpenAd.show();
  });
};

export const getAppOpenAd = () => {
  try {
    appOpenAd.show();
    appOpenAd.load();
  } catch (err) {
    console.log(err);
  }
};

// 2. 전면 광고
let interstitial = {};
export const initInterstitialId = () => {
  interstitial = InterstitialAd.createAd(adInterstitialId);
  interstitial.addEventListener('adLoaded', e => {
    // console.log(e);
  });
};

export const getInterstitialId = () => {
  try {
    interstitial.show();
    interstitial.load();
  } catch (err) {
    console.log(err);
  }
};

// 3. 네이티브 광고 (신규 플러그인 설치 필요한듯?)

// 4. 보상형 광고 (이것만 잇으면 안되고 보상 후 callback 필요)
let rewarded = {};
export const initRewardedAd = () => {
  rewarded = RewardedAd.createAd(adRewardedId);
  rewarded.addEventListener('adLoaded', e => {
    // console.log(e);
  });
  rewarded.addEventListener('rewarded', e => {
    console.log('rewarded', e);
  });
};

export const getRewardedAd = () => {
  try {
    rewarded.show();
    rewarded.load();
  } catch (err) {
    console.log(err);
  }
};
