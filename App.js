import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import React, {useCallback, useContext, useEffect, useState} from 'react';

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
