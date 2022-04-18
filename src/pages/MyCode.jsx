import AsyncStorage from '@react-native-async-storage/async-storage';
import Clipboard from '@react-native-clipboard/clipboard';
import { Card, Icon, Input, ListItem } from '@rneui/themed';
import React, { useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-toast-message';

export default function MyCode() {
  const [myCodeList, setMyCodeList] = useState([]);

  useEffect(() => {
    getCodeList();
  }, []);

  const getCodeList = async () => {
    let asyncMyCodeList = await AsyncStorage.getItem('myCodeList');
    let result = [{ code: '' }];
    if (asyncMyCodeList) {
      result = JSON.parse(asyncMyCodeList);
    }

    setMyCodeList(result);
  };

  const setMyCode = async (e, res) => {
    res.code = e;
    setMyCodeList([...myCodeList]);
    await AsyncStorage.setItem('myCodeList', JSON.stringify(myCodeList));
  };

  const addNewCode = async () => {
    myCodeList.push({ code: '' });
    setMyCodeList([...myCodeList]);
    await AsyncStorage.setItem('myCodeList', JSON.stringify(myCodeList));
  };

  const delMyCode = async idx => {
    let afterCode = myCodeList.filter((r, i) => i !== idx);
    if (afterCode.length === 0) {
      afterCode = [{ code: '' }];
    }
    setMyCodeList(afterCode);
    await AsyncStorage.setItem('myCodeList', JSON.stringify(afterCode));
  };

  const copyMyCode = code => {
    Toast.hide();
    if (!code) {
      setTimeout(() => {
        Toast.show({
          type: 'error',
          text1: '코드를 입력해주세요!!',
        });
      }, 100);
      return;
    }
    Clipboard.setString(code);

    setTimeout(() => {
      Toast.show({
        type: 'success',
        text1: '복사 완료!!',
        text2: code,
      });
    }, 100);
  };

  return (
    <View style={{ flex: 1 }}>
      {myCodeList.map((res, idx) => (
        <View key={idx} style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', padding: 10, margin: 10, marginBottom: 0, borderRadius: 10 }}>
          <TextInput
            style={{
              borderBottomWidth: 1,
              borderColor: '#aaa',
              padding: 10,
              flexGrow: 1,
            }}
            placeholder="내 회원코드 입력"
            value={res.code}
            onChangeText={e => setMyCode(e, res)}
          />

          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => copyMyCode(res.code)}>
              <Ionicons name="copy-outline" color="#000" size={25} style={{ padding: 5 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => delMyCode(idx)}>
              <Ionicons name="trash-outline" color="#000" size={25} style={{ padding: 5 }} />
            </TouchableOpacity>
          </View>
        </View>
      ))}

      <TouchableOpacity
        style={{
          position: 'absolute',
          borderRadius: 100,
          padding: 10,
          backgroundColor: '#4b6cb7',
          bottom: 10,
          right: 10,
        }}
        onPress={() => addNewCode()}
      >
        <Ionicons name="add" color="#fff" size={25} />
      </TouchableOpacity>
    </View>
  );
}
