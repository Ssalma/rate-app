import { View, StyleSheet, Pressable, ScrollView } from "react-native";
import Constants from "expo-constants";
import { Link } from "react-router-native";

import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    padding: 10,
    backgroundColor: theme.colors.appBar,
    flexDirection: "row",
    justifyContent: "space-between",
    // ...
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal >
        <Pressable style={{marginRight: 10}}>
          <Link to="/">
            <Text
              style={{ color: "white" }}
              fontSize="subheading"
              fontWeight={"bold"}
            >
              Repositories
            </Text>
          </Link>
        </Pressable>
        <Pressable>
          <Link to="/signIn">
            <Text
              style={{ color: "white" }}
              fontSize="subheading"
              fontWeight={"bold"}
            >
              SingIn
            </Text>
          </Link>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default AppBar;
