import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Input } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux';
import { rootStore } from '../store/store';
import { login } from '../store/actions/userAction';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}: any) => {
  const {data, loading, error} = useSelector((state: rootStore) => state.user);
  const dispatch = useDispatch<any>();
  const [values, setValues] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  useEffect(() => {
    const checkToken = async () => {
     const token = await AsyncStorage.getItem('token');
     if(token) {
      navigation.navigate('Home');
     }
    }
    checkToken();
  }, [data]);

  return (
    <View>
      <Text style={{textAlign: 'center', marginBottom: 15}}>Login</Text>
      <Input placeholder={'Email'} onChangeText={(email) => {setValues({...values, email: email})}} textContentType= "emailAddress" />
      <Input placeholder={'Password'} onChangeText={(password) => {setValues({...values, password: password})}} secureTextEntry={true}/>
      <Input placeholder={'Confirm Password'} onChangeText={(cpassword) => {setValues({...values, confirmPassword: cpassword})}} secureTextEntry={true}/>
      <Button title={'Login'} onPress={async () => {dispatch(login(values)); await AsyncStorage.setItem('token', data.accessToken);}} ></Button>
      <View style={{marginTop: '5%'}}>
        <Text>Don't you have an account?</Text>
        <Button buttonStyle={{width: '40%'}} onPress={() => {navigation.navigate('Register')}} title={'Register'}></Button>
      </View>

    </View>
  )
}

export default Login