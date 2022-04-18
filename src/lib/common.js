import { Dimensions } from 'react-native';
import messaging from '@react-native-firebase/messaging';

export const version = '0.01';
export const isTest = true;

export const getDimensions = () => {
  return {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  };
};

export const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled = authStatus === messaging.AuthorizationStatus.AUTHORIZED || authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
};

export const getToken = async () => {
  const token = await messaging().getToken();

  console.log(token);
};
