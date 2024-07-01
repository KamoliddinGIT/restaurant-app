import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

export default function MealName({ mealCount, mealName }) {
  return (
    <View style={styles.mealOption}>
      <Text style={styles.text_option}>{mealCount}X</Text>
      <Text style={styles.text_option}>{mealName}</Text>
      <TouchableOpacity title="qabul" color={"green"} style={styles.btn}>
        <Text>qabul</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
    borderBottomWidth: 1,
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
