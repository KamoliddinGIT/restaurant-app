import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MealName from "./MealName";

export default function MealItem({ tableNum, meals, createdAt }) {
  return (
    <>
      <View style={styles.card}>
        <View style={styles.options}>
          <View>
            <Text style={styles.text}>{createdAt}</Text>
            <Text style={styles.text}>Table: {tableNum}</Text>
          </View>
          <View>
            <Text style={styles.text}>John</Text>
            <Text style={styles.text}>{}</Text>
          </View>
        </View>
        <View>
          {meals.map((item) => {
            return <MealName key={item._id} {...item} tableNum={tableNum} />;
          })}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "90%",
    minHeight: 250,
    flexDirection: "column",
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
    flexDirection: "column",
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
