/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';

const GradeCalculator = () => {
  const [age, setAge] =useState('');
  const [message, setMessage] = useState('');

  const handleCheckAge = () => {
    const userAge = parseInt(age);

  if (isNaN(userAge) || userAge <= 0) {
    Alert.alert('Please enter a valid age');
    return;
  }

  if (userAge < 18) {
    setMessage('You are a minor.');
} else if (userAge >=18 && userAge < 60) {
  setMessage('You are an adult.');
} else {
  setMessage('You are a senior citizen');
}
  };

  return (
    <View style={styles.container}>
    <Text style={styles.header}>Age Categorizer</Text>

      <Text>Enter your age:</Text>
      <TextInput styles={styles.input} 
      keyboardType="numeric"
      value={age}
      onChangeText={setAge}
      placeholder="ENter age"
      />
      <Button title="Check Age" onPress={handleCheckAge} />
       
       {message ? (
        <Text style={styles.result}>{message}</Text>
       ) : null}
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

    label: {
      fontSize: 18,
      marginBottom: 10,
    },

      input: {
        width: 80,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 20,
      },

        result: {
          fontSize: 20,
          marginTop: 20,
        },
});

export default GradeCalculator;
