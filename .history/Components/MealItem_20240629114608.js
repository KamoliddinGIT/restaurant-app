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
      <View style={styles.mealOption}>
        <Text style={styles.text_option}>{mealCount}X</Text>
        <Text style={styles.text_option}>{mealName}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "90%",
    height: 250,
  },
  text: {
    color: "white",
  },
  options: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: "21%",
    backgroundColor: "#ec3121",
    padding: 10,
  },
  mealOption: {
    width: "100%",
    height: "30%",
    flexDirection: "row",
  },
  text_option: {
    color: "black",
  },
});
