import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const MessagesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.root}>TeamPro</Text>
      <Text>Messages</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  root: {
    backgroundColor: '#002E27',
    padding: 20,
    justifyContent: 'flex-end',
  },
});

export default MessagesScreen;
