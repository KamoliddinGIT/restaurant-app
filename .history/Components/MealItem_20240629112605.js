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
      <Text style={styles.text}>
        {mealName} - {mealCount}X
      </Text>
      <Text style={styles.text}>date: {createdAt.slice(11, 16)}</Text>
      <Text style={styles.text}>table: {table}</Text>
      <Text style={styles.text}>waiter: {waiter}</Text>
      <Text style={styles.text}>condition: {mealStatus}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "90%",
    height: "300",
    padding: 10,
    backgroundColor: "#09a0ee",
    borderRadius: 10,
  },
  text: {
    color: "black",
  },
});
