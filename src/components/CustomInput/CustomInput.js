import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {Formik} from 'formik';

const CustomInput = ({control, name, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name={name}
        render={({field: {value, onChange, onBlur}}) => (
          <TextInput
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            style={styles.input}
            secureTextEntry={secureTextEntry}
          />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '95%',

    borderRadius: 10,

    padding: 15,

    marginVertical: 10,
  },

  input: {},
});
export default CustomInput;
