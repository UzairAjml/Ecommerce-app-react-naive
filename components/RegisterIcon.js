
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { CartContext } from '../CartContext';

export function RegisterIcon({navigation}) {
  return (
    
    <View style={styles.container}>
      <Text style={styles.text} 
        onPress={() => {
          navigation.navigate('Register');
        }}
      >Register</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    backgroundColor: 'orange',
    height: 32,
    padding: 12,
    borderRadius: 32 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
