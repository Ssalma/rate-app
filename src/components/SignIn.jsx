import FormikTextInput from "./FormikTextInput";
import { Formik } from "formik";
import { View, Pressable, StyleSheet } from "react-native";
import Text from "./Text";
import theme from "../theme";
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

export default function SignIn() {
  const onSubmit = (values) => {
    console.log(values);
  };
  const initialValues = {
    username: "",
    password: "",
  };
  return (
    <View style={{ paddingLeft: 10, paddingRight: 10 }}>
      <Formik initialValues={initialValues}  onPress={onSubmit} validationSchema={validationSchema}>
        <>
          <FormikTextInput name="username" placeholder="Username" />
          <FormikTextInput
            name="password"
            secureTextEntry
            placeholder="Password"
          />
          <Pressable style={styles.btn} onPress={onSubmit} >
            <Text style={styles.btnText}>Sign in</Text>
          </Pressable>
        </>
      </Formik>
    </View>
  );
}
const styles = StyleSheet.create({
  btn: {
    backgroundColor: theme.colors.primary,
    height: 60,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  btnText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});
