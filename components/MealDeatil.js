import { View, Text, StyleSheet } from "react-native";

function MealDetail({ duration, complexity, affordability, style, textStyle }) {
  return (
    <View style={[styles.details, style, textStyle]}>
      <Text style={[styles.detailItem, textStyle]}>{duration} min</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

export default MealDetail;

const styles = StyleSheet.create({
  details: {
    padding: 8,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
