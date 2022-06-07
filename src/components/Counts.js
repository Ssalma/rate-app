import { View, StyleSheet } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
  bottomContent: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

function kFormatter(num) {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
    : Math.sign(num) * Math.abs(num);
}

export default function Counts(item) {
  return (
    <View style={styles.bottomContent}>
      <View>
        <Text fontSize="subheading" fontWeight={"bold"}>
          {kFormatter(item.stargazersCount)}
        </Text>
        <Text style={{ color: "#586069" }} fontSize="textSecondary">
          Stars
        </Text>
      </View>
      <View>
        <Text fontSize="subheading" fontWeight={"bold"}>
          {kFormatter(item.forksCount)}
        </Text>
        <Text style={{ color: "#586069" }} fontSize="textSecondary">
          Forks
        </Text>
      </View>
      <View>
        <Text fontSize="subheading" fontWeight={"bold"}>
          {kFormatter(item.reviewCount)}
        </Text>
        <Text style={{ color: "#586069" }} fontSize="textSecondary">
          Reviews
        </Text>
      </View>
      <View>
        <Text fontSize="subheading" fontWeight={"bold"}>
          {kFormatter(item.ratingAverage)}
        </Text>
        <Text style={{ color: "#586069" }} fontSize="textSecondary">
          Ratings
        </Text>
      </View>
    </View>
  );
}
