import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import React from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {Formik, validateYupSchema, yupToFormErrors} from 'formik';
import {logInSchema, signUpSchema} from '../../utils/validationSchemas';
import arrowIcon from '../../../assets/arrowIcon.png';
import axios from 'axios';

const SignUpScreen = () => {
  const navigation = useNavigation();

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

      <Formik
        validationSchema={signUpSchema}
        initialValues={{name: '', email: '', password: '', confirmPassword: ''}}
        onSubmit={values => {
          onRegisterPressed(values);
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
            <Text style={styles.inputHeader}>Name</Text>
            <TextInput
              style={styles.container}
              placeholder="name"
              onChangeText={handleChange('name')}
              value={values.name}
            />
            {errors.name && (
              <Text style={{fontSize: 10, color: 'red'}}>{errors.name}</Text>
            )}
            <Text style={styles.inputHeader}>Email</Text>
            <TextInput
              style={styles.container}
              placeholder="email"
              onChangeText={handleChange('email')}
              value={values.email}
            />
            {errors.email && (
              <Text style={{fontSize: 10, color: 'red'}}>{errors.email}</Text>
            )}
            <Text style={styles.inputHeader}>Password</Text>
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
            <Text style={styles.inputHeader}>Confirm</Text>
            <TextInput
              style={styles.container}
              placeholder="confirmPassword"
              onChangeText={handleChange('confirmPassword')}
              value={values.confirmPassword}
              secureTextEntry
            />
            {errors.confirmPassword && (
              <Text style={{fontSize: 10, color: 'red'}}>
                {errors.confirmPassword}
              </Text>
            )}

            <Button
              style={styles.container}
              title="submit"
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
    marginLeft: 3,
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

    textAlign: 'auto',
  },
  buttonContainer: {
    backgroundColor: '#FFFDE0',
    width: '95%',
    borderRadius: 10,
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
  },
  text: {color: '#002E27', fontWeight: 'bold'},
});

export default SignUpScreen;
