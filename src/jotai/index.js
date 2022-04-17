import { InterstitialAd, TestIds } from '@react-native-admob/admob';
import { atom } from 'jotai';

export const interstitialJotai = atom(InterstitialAd.createAd(TestIds.INTERSTITIAL));
