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
      <View style={styles.options}>
        <View>
          <Text style={styles.text}>{createdAt.slice(11, 16)}</Text>
          <Text style={styles.text}>Table: {table}</Text>
        </View>
        <View>
          <Text style={styles.text}>{waiter}</Text>
          <Text style={styles.text}>{mealStatus}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "90%",
    height: 250,
    backgroundColor: "#bbb",
  },
  text: {
    color: "white",
  },
  options: {
    display: "flex",
    width: "100%",
    height: "20%",
    borderWidth: 2,
    backgroundColor: "#ec3121",
  },
});
