// Formik x React Native example
import React, { useEffect, useState } from 'react';
import { Button, TextInput, View,StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { LoginAPI } from '../services/Auth';


const Login = ({navigation}) => {
const [response,setResponse]=useState([]);

  const handleLogin=async(values)=>{
    const res= await LoginAPI(values.email,values.password)
    setResponse(res);
    if(res){
      navigation.navigate('Products')
    }

  }
  
  return (
    <Formik
    initialValues={{ email: '', password:''}}
    onSubmit={values => handleLogin(values)}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <View style={styles.loginForm} >
        <TextInput
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
          placeholder='Email'
        />
         <TextInput
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          value={values.password}
          placeholder='Password'
        />
       
        <Button onPress={handleSubmit} title="Login" />
      </View>
    )}
  </Formik>
  )
}

export default Login


const styles = StyleSheet.create({
  
  loginForm: {
   display:'flex',
   flexDirection:'column',
   justifyContent:'center',
   alignItems:'center'
   
  },
  fields:{
    marginTop:12,
    padding:40
  }
});