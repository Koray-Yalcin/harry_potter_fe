import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import { Button, Input } from 'react-native-elements'
import { UserType } from '../store/actionTypes/userActionTypes'
import { useDispatch } from 'react-redux'
import { register } from '../store/actions/userAction'

const Register = ({navigation}: any) => {
    const [values, setValues] = useState<UserType>({
        fullname: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const dispatch = useDispatch<any>();

  return (
    <View>
      <Text style={{textAlign: 'center', marginBottom: 15}}>Register</Text>
      <Input placeholder={'Fullname'} value={values.fullname} onChangeText={(name) => {setValues({...values, fullname: name});}}/>
      <Input placeholder={'Username'} value={values.username} onChangeText={(username) => {setValues({...values, username: username});}}/>
      <Input placeholder={'Email'} value={values.email} textContentType= "emailAddress" onChangeText={(email) => {setValues({...values, email: email});}} />
      <Input placeholder={'Password'} value={values.password} secureTextEntry={true} onChangeText={(password) => {setValues({...values, password: password});}}/>
      <Input placeholder={'Confirm Password'} onChangeText={(cpassword) => {setValues({...values, confirmPassword: cpassword})}} secureTextEntry={true}/>
      <Button title={'Register'} onPress={() => {
        dispatch(register(values));
        navigation.navigate('Login');
      }}></Button>
    </View>
  )
}

export default Register