import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function MealItem({
  mealName,
  createdAt,
  mealCount,
  mealStatus,
  table,
  waiter,
}) {
  return (
    <View style={styles.card}>
      <Text>{mealName}</Text>
      <Text>{mealCount}</Text>
      <Text>{createdAt}</Text>
      <Text>{table}</Text>
      <Text>{waiter}</Text>
      <Text>{mealStatus}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "80%",
    backgroundColor: "rgb(238,174,202)",
    backgroundColor: radial-gradient(circle, rgba(238,174,202,1), rgba(4,82,175,1) 100%);
  },
});
