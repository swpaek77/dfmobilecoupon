import { InterstitialAd, TestIds } from '@react-native-admob/admob';

export let globalInterstitial = InterstitialAd.createAd(TestIds.INTERSTITIAL);
export const showGlobalInterstitial = () => {
  try {
    globalInterstitial.show();
    globalInterstitial = InterstitialAd.createAd(TestIds.INTERSTITIAL);
  } catch (err) {
    console.log(err);
  }
};
