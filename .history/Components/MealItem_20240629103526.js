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
      <Text>{mealCount}X</Text>
      <Text>{createdAt.slice(0, 10)}</Text>
      <Text>table: {table}</Text>
      <Text>waiter: {waiter}</Text>
      <Text>{mealStatus}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    // flex: 1,
    width: "90%",
    padding: 10,
    backgroundColor: "#09a0ee",
    borderRadius: 15,
  },
});
