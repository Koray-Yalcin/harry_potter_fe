import { View, Text, ScrollView, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-native-elements';
import { rootStore } from '../store/store';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({navigation}: any) => {
    const dispatch = useDispatch<any>();
    const [chars, setChars] = useState<any[]>([]);
    const [filterData, setFilterData] = useState<any[]>([]);
    const [search, setSearch] = useState<string>('');
    const {data, loading, error} = useSelector((state: rootStore) => state.user);

    useEffect(() => {
      const fetch = async () => {
       const res = await axios.get('https://hp-api.onrender.com/api/characters');
       setChars(res.data);
       setFilterData(res.data);

       if(await AsyncStorage.getItem('token') == null) {
        navigation.navigate('Login');
      }
      }
      fetch();
    }, []);

    const searchChar = async (text: string) => {
      if(text) {
        const newData = filterData.filter(char => {
         const itemData = char.name ? char.name.toUpperCase() : ''.toUpperCase();
         const textData = text.toUpperCase();

         return itemData.indexOf(textData) > -1;
        });
        setChars(newData);
        setSearch(text);
      } else {
        setChars(filterData);
      }
    };

    const logout = async () => {
      await AsyncStorage.removeItem('token').then(() => {
        navigation.navigate('Login');
      })
    }

  return (
    <View>
        <Button buttonStyle={{width: '40%'}} onPress={() => {logout()}} title={'Logout'}></Button>
        <TextInput defaultValue={search} onChangeText={(text) => {searchChar(text)}} placeholder='Search Harry Potter Character' style={{borderColor: '#000', marginTop: '20%', backgroundColor: 'white'}} />
      <ScrollView>
      {chars.map(char => (
        <View key={char.id} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Text key={char.name}>{char.name}</Text>
        </View>
      ))}
    </ScrollView>
    </View>

  )
}

export default Home