import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ProductsList } from './screens/ProductsList.js';
import { ProductDetails } from './screens/ProductDetails.js';
import { Cart } from './screens/Cart.js';
import { CartIcon } from './components/CartIcon.js';
import Checkout from './screens/Checkout.js';
import { CartProvider } from './CartContext.js';
import Login from './screens/Login.js';
import { LoginIcon } from './components/Login.js';
import { RegisterIcon } from './components/RegisterIcon.js';
import Register from './screens/Register.js';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Products' component={ProductsList} 
          options={({ navigation }) => ({
            title: 'Products',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
            headerLeft :()=><LoginIcon navigation={navigation} />  
          })}/>
          <Stack.Screen name='ProductDetails' component={ProductDetails} 
          options={({ navigation }) => ({
            title: 'Product details',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
          <Stack.Screen name='Cart' component={Cart} 
          options={({ navigation }) => ({
            title: 'My cart',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
           <Stack.Screen name='checkout' component={Checkout} 
          options={({ navigation }) => ({
            title: 'Checkout',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
           <Stack.Screen name='Login' component={Login} 
          options={({ navigation }) => ({
            title: 'Login',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
            headerLeft:()=><RegisterIcon navigation={navigation}/>
          })} />
          <Stack.Screen name='Register' component={Register} 
          options={({ navigation }) => ({
            title: 'Register',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
            headerLeft:()=><LoginIcon navigation={navigation}/>
          })} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20
  }
});

export default App;
