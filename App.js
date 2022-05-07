import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import SignInScreen from './src/screens/signInScreen/SignInScreen';
import SignUpScreen from './src/screens/signUpScreen/SignUpScreen';
import Navigation from './src/navigation';

const YourApp = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#002E27',
  },
});
export default YourApp;
