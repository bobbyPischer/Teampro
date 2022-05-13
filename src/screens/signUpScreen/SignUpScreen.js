import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import arrowIcon from '../../../assets/arrowIcon.png';
import axios from 'axios';

const SignUpScreen = () => {
  const navigation = useNavigation();

  const {control, handleSubmit} = useForm();

  const onRegisterPressed = async values => {
    try {
      const {data} = await axios.post(
        'http://localhost:3000/auth/register',
        values,
      );
      console.log(data);
    } catch (error) {
      console.log('error registering user', error);
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
      <Text style={styles.inputHeader}>Name</Text>

      <CustomInput name="name" placeholder="Name" control={control} />
      <Text style={styles.inputHeader}>Email</Text>
      <CustomInput name="email" placeholder="Email" control={control} />
      <Text style={styles.inputHeader}>Password</Text>
      <CustomInput
        name="password"
        placeholder="Password"
        control={control}
        secureTextEntry={true}
      />
      <Text style={styles.inputHeader}>Confirm Password</Text>
      <CustomInput
        name="confirmPassword"
        placeholder="Confirm Password"
        control={control}
        secureTextEntry={true}
      />
      <CustomButton text="Signin" onPress={handleSubmit(onRegisterPressed)} />
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
