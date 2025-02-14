import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

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
        <View style={styles.access}>
          <Text style={styles.text_option}>{mealCount}X</Text>
          <Text style={styles.text_option}>{mealName}</Text>
        </View>
        <Button
          title="Press Me"
          onPress={handlePress}
          color="#841584" // Custom color (optional)
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "90%",
    height: 250,
    backgroundColor: "white",
    // justifyContent: "center",
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
    gap: 10,
    padding: 10,
    width: "90%",
    height: "18%",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 2,
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
    width: "30%",
    height: 30,
    padding: 10,
    backgroundColor: "blue",
    color: "black",
  },
});
