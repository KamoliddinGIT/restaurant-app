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
      <Text style={styles.text}>date: {createdAt.slice(11, 17)}</Text>
      <Text style={styles.text}>table: {table}</Text>
      <Text style={styles.text}>waiter: {waiter}</Text>
      <Text style={styles.text}>{mealStatus}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    // flex: 1,
    width: "90%",
    padding: 10,
    backgroundColor: "#09a0ee",
    borderRadius: 10,
  },
  text: {
    color: "black",
  },
});
