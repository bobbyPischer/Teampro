import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../components/CustomButton/CustomButton';

const LandingPage = () => {
  const navigation = useNavigation();

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  const onSignUpPressed = () => {
    navigation.navigate('SignUp');
  };

  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.header}>TeamPro</Text>
      <CustomButton text="Signin" onPress={onSignInPressed} />
      <CustomButton text="SignUp" onPress={onSignUpPressed} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#002E27',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },

  header: {
    marginTop: 150,
    height: 100,
    width: '80%',
    maxWidth: 300,
    fontSize: 70,
    fontFamily: 'arial',
    fontWeight: 'bold',
    paddingBottom: 400,

    color: '#FFFDE0',
  },
  inputHeader1: {
    color: '#FFFDE0',
    paddingRight: 300,
    alignItems: 'flex-end',
  },
  inputHeader2: {
    color: '#FFFDE0',
    paddingRight: 275,
    alignItems: 'flex-end',
  },
  icon: {
    position: 'relative',
    marginRight: 300,
    marginBottom: 20,
  },
});
export default LandingPage;
