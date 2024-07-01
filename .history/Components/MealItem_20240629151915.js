import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function MealItem({ tableNum, createdAt, meals }) {
  return (
    <View style={styles.card}>
      <View style={styles.options}>
        <View>
          <Text style={styles.text}>{createdAt.slice(11, 16)}</Text>
          <Text style={styles.text}>Table: {tableNum}</Text>
        </View>
        <View>
          <Text style={styles.text}>{meal.waiter}</Text>
          <Text style={styles.text}>{mealStatus}</Text>
        </View>
      </View>
      <View style={styles.mealOption}>
        <View style={styles.access}>
          <Text style={styles.text_option}>{mealCount}X</Text>
          <Text style={styles.text_option}>{mealName}</Text>
        </View>
        <TouchableOpacity title="qabul" color={"green"} style={styles.btn}>
          <Text>qabul</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "90%",
    height: 250,
    backgroundColor: "white",
    gap: 10,
    alignItems: "center",
  },
  text: {
    color: "white",
    fontWeight: "normal",
    fontSize: 18,
  },
  options: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: "25%",
    backgroundColor: "#ec3121",
    padding: 10,
  },
  mealOption: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1.5,
  },
  text_option: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  access: {
    flexDirection: "row",
    gap: 10,
  },
  btn: {
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 5,
    marginBottom: 2,
  },
});
