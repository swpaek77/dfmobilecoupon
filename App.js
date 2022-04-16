import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  // const { adLoaded, adDismissed, show } = useInterstitialAd(TestIds.REWARDED_INTERSTITIAL);

  // console.log('adLoaded', adLoaded);
  useEffect(() => {
    console.log(1);
    // console.log('adLoaded', adLoaded);
    // console.log('adDismissed', adDismissed);

    // setTimeout(() => {
    //   console.log('2adLoaded', adLoaded);
    //   console.log('2adDismissed', adDismissed);
    // }, 4000);

    const interstitial = InterstitialAd.createAd(TestIds.INTERSTITIAL);
    // setInterstitialAd(interstitial);

    const subscriptions = [
      interstitial.addEventListener('adLoaded', a => {
        // setAdLoaded(true);
        console.log(a);
        console.log(111);

        // interstitial.show();
      }),
      interstitial.addEventListener('adDismissed', b => {
        // setAdDismissed(true);
        console.log(b);
        console.log(222);
      }),
    ];

    return () => subscriptions.forEach(sub => sub.remove());
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <BannerAd size={BannerAdSize.BANNER} unitId={TestIds.BANNER} />
      <TouchableOpacity onPress={() => console.log(adLoaded)}>
        <Text>test 11</Text>
      </TouchableOpacity>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator> */}
      <MyTabs />
    </NavigationContainer>
  );
}

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { BannerAd, BannerAdSize, InterstitialAd, TestIds, useInterstitialAd } from '@react-native-admob/admob';

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#e91e63',
        // tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen
        name="Feed"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="bell" color={color} size={size} />,
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="account" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
}
