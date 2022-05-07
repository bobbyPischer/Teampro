import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import arrowIcon from '../../../assets/arrowIcon.png';

const SignUpScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigation();

  const onRegisterPressed = () => {
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

      <Text style={styles.inputHeader}>Name</Text>
      <CustomInput placeholder="Name" value={name} setValue={setName} />

      <Text style={styles.inputHeader}>Email</Text>
      <CustomInput placeholder="Email " value={email} setValue={setEmail} />

      <Text style={styles.inputHeader}>Password</Text>
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <Text style={styles.inputHeader}>Confirm Password</Text>
      <CustomInput
        placeholder="Confirm Password"
        value={confirmPassword}
        setValue={setConfirmPassword}
        secureTextEntry={true}
      />

      <CustomButton text="Signin" onPress={onRegisterPressed} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#002E27',
    justifyContent: 'space-between',
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
    paddingBottom: 150,

    color: '#FFFDE0',
  },
  inputHeader: {
    color: '#FFFDE0',
    paddingRight: 300,
    alignItems: 'flex-end',
    flexWrap: 'nowrap',
  },
  icon: {
    position: 'relative',
    marginRight: 300,
    marginBottom: 20,
  },
});

export default SignUpScreen;
