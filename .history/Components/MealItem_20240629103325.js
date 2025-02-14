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
      <Text>{createdAt.slice(0, 15)}</Text>
      <Text>{table}</Text>
      <Text>{waiter}</Text>
      <Text>{mealStatus}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "90%",
    padding: 10,
    backgroundColor: "#09a0ee",
  },
});
