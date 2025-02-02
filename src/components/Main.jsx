import { Route, Routes, Navigate } from 'react-router-native';
import { StyleSheet, View } from "react-native";

import RepositoryList from "components/RepositoryList";
import AppBar from "./AppBar";
import SignIn from './SignIn';
// import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#e1e4e8',
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/signIn" element={<SignIn />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
