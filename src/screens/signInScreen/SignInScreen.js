import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import arrowIcon from '../../../assets/arrowIcon.png';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const onSignInPressed = () => {
    navigation.navigate('LandingPage');
  };

  return (
    <SafeAreaView style={styles.root}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('LandingPage');
        }}>
        <Image style={styles.icon} source={arrowIcon}></Image>
      </TouchableOpacity>

      <Text style={styles.header}>TeamPro</Text>
      <Text style={styles.inputHeader1}>Email</Text>
      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername}
        secureTextEntry={false}
      />
      <Text style={styles.inputHeader2}>Password</Text>
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <CustomButton text="Signin" onPress={onSignInPressed} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#002E27',
    alignItems: 'center',
    padding: 20,
  },

  header: {
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

export default SignInScreen;
