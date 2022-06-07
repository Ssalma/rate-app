import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  errorText: {
    color: theme.colors.error,
  }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style];
  return <NativeTextInput style={textInputStyle} {...props} {...error} />;
};

export default TextInput;