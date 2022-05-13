import {
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
import {useForm} from 'react-hook-form';
import arrowIcon from '../../../assets/arrowIcon.png';
import axios from 'axios';

const SignInScreen = () => {
  const navigation = useNavigation();
  const [token, setToken] = useState(false);
  const [user, setUser] = useState();
  const [values, setValues] = useState();

  const {control, handleSubmit} = useForm();

  const onSignInPressed = async values => {
    try {
      const {data} = await axios.post(
        'http://localhost:3000/auth/login',
        values,
      );
      const {user, token} = data;
      console.log(data);

      setUser(user);
      setToken(token);
      console.warn(token);
      navigation.navigate('Messages');
    } catch (error) {
      console.warn('error logging in');
      setValues('');
    }
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
        name="email"
        placeholder="Email"
        control={control}
        secureTextEntry={false}
      />
      <Text style={styles.inputHeader2}>Password</Text>
      <CustomInput
        name="password"
        placeholder="Password"
        control={control}
        secureTextEntry={true}
      />
      <CustomButton text="Signin" onPress={handleSubmit(onSignInPressed)} />
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
