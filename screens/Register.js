// Formik x React Native example
import React, { useEffect, useState } from 'react';
import { Button, TextInput, View,StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { RegisterAPI } from '../services/Auth';


const Register = ({navigation}) => {
const [respose,setRes]=useState([]);

  const handleLogin=async(values)=>{
    const res= await RegisterAPI(values.email,values.password,values.name)
    setRes(res);
    if(res){
        navigation.navigate('Login')
    }
    }


  

  
  return (
    <Formik
    initialValues={{ email: '', password:'',name:''}}
    onSubmit={values => handleLogin(values)}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <View style={styles.loginForm} >
         <TextInput
          onChangeText={handleChange('name')}
          onBlur={handleBlur('name')}
          value={values.name}
          placeholder='Name'
          style={styles.fields}

        />  
        <TextInput
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
          placeholder='Email'
          style={styles.fields}
        />
         <TextInput
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          value={values.password}
          placeholder='Password'
          style={styles.fields}

        />
       
        <Button onPress={handleSubmit} title="Register" style={{marginTop:'12'}} />
      </View>
    )}
  </Formik>
  )
}

export default Register


const styles = StyleSheet.create({
  
  loginForm: {
   display:'flex',
   flexDirection:'column',
   justifyContent:'center',
   alignItems:'center'
   
  },
  fields:{
    marginTop:12,
    padding:10
  }
});