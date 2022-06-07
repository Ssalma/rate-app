import { View, StyleSheet, Image } from "react-native";
import Text from "./Text";
import theme from "../theme";
import Counts from "./Counts";
// import NumberFormat from 'react-number-format';

const styles = StyleSheet.create({
  separator: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "white",
  },
  text: { color: "black" },
  lang: {
    backgroundColor: theme.colors.primary,
    padding: 5,
    borderRadius: 5,
  },
  topContent: {
    flexDirection: "row",
    marginBottom: 15,
  },
});

const RepositoryItem = (item) => (
  <View style={styles.separator}>
    <View style={styles.topContent}>
      <Image
        source={{
          uri: item.ownerAvatarUrl,
        }}
        style={{ width: 50, height: 50, borderRadius: 5 }}
      ></Image>
      <View style={{ flex: 1, marginLeft: 20 }}>
        <Text fontSize="subheading" fontWeight={"bold"}>
          {item.fullName}
        </Text>
        <Text style={{ color: "#586069" }} fontSize="textSecondary">
          {item.description}
        </Text>
        <View style={{ alignItems: "baseline" }}>
          <View style={styles.lang}>
            <Text style={{ color: "white" }}>{item.language}</Text>
          </View>
        </View>
      </View>
    </View>
    <Counts {...item} />
  </View>
);

export default RepositoryItem;
