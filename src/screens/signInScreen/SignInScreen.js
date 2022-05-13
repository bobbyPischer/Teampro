import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  Button,
  TextInput,
  SafeAreaView,
} from 'react-native';

import React from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useFormik, Formik} from 'formik';
import * as Yup from 'yup';
import arrowIcon from '../../../assets/arrowIcon.png';
import axios from 'axios';
import {logInSchema} from '../../utils/validationSchemas';

const SignInScreen = () => {
  const navigation = useNavigation();
  const [token, setToken] = useState(false);
  const [user, setUser] = useState();

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
      console.warn('errror logging in', error);
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

      <Formik
        validationSchema={logInSchema}
        initialValues={{email: '', password: ''}}
        onSubmit={values => {
          onSignInPressed(values);
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <View>
            <Text style={styles.inputHeader1}>Email</Text>
            <TextInput
              style={styles.container}
              placeholder="email"
              onChangeText={handleChange('email')}
              value={values.email}
            />
            {errors.email && (
              <Text style={{fontSize: 10, color: 'red'}}>{errors.email}</Text>
            )}
            <Text style={styles.inputHeader1}>Password</Text>
            <TextInput
              style={styles.container}
              placeholder="password"
              onChangeText={handleChange('password')}
              value={values.password}
              secureTextEntry
            />
            {errors.password && (
              <Text style={{fontSize: 10, color: 'red'}}>
                {errors.password}
              </Text>
            )}

            <CustomButton
              style={styles.buttonContainer}
              text="Sign In"
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>
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
  container: {
    backgroundColor: 'white',
    width: 370,

    borderRadius: 10,

    padding: 15,

    marginVertical: 15,
  },
  buttonContainer: {
    backgroundColor: '#FFFDE0',
    width: 340,
    borderRadius: 10,
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
  },
  text: {color: '#002E27', fontWeight: 'bold'},
});

export default SignInScreen;
