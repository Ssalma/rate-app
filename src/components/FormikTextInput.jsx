
import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: theme.colors.error,
  },
  inputStyle:{
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    height: 60,
    marginTop: 15,
    padding: 10,
  },
  errorMode:{
    borderWidth: 1,
    borderColor: theme.colors.error,
    borderRadius: 5,
    height: 60,
    marginTop: 15,
    padding: 10,
  }
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
        style={ !showError ? styles.inputStyle : styles.errorMode}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;