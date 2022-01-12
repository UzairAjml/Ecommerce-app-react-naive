// Formik x React Native example
import React, { useEffect, useState } from 'react';
import { Button, TextInput, View,StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { OrderAPI } from '../services/Order';
import {
  ToastAndroid,
  Platform,
} from 'react-native';





const Checkout = ({navigation}) => {

  const [response,setResponse]=useState('');

  const notifyMessage=(msg)=> {
    if (Platform.OS === 'android') {
    ToastAndroid.show(msg, ToastAndroid.LONG)
    }
    }
  

  const handleCheckout=async(values)=>{
    const order={
      orderItems: values.length,
      shippingAddress: values.address,
      paymentMethod: 'stripe',
      itemsPrice: '3500',
      shippingPrice: '200',
      taxPrice: '300',
      totalPrice: '635893',
  
    }

    const res = await OrderAPI(order);
    setResponse(res);
    
    

  }


  useEffect(()=>{

    if(response){
      notifyMessage('Order Succesfully Placed')
      navigation.navigate('Products')
    }
  },[response])

  

  return(
    <Formik
    initialValues={{ email: '', number:'',address:'' }}
    onSubmit={values => handleCheckout(values)}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <View style={styles.CheckoutForm}>
        <TextInput
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
          placeholder='Enter Email'
        />
        <TextInput
          onChangeText={handleChange('number')}
          onBlur={handleBlur('number')}
          value={values.number}
          placeholder='Enter PhnoNumber'

        />
        <TextInput
          onChangeText={handleChange('address')}
          onBlur={handleBlur('address')}
          value={values.address}
          placeholder='Enter Address'

        />
        <Button onPress={handleSubmit} title="Place Order" />
      </View>
    )}
  </Formik>
  )
}

export default Checkout;

const styles = StyleSheet.create({
  CheckoutForm: {
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
    
   },
  });
  