import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import MealItem from "./MealItem";

export default function MealList({ meals }) {
  return (
    <View style={styles.container}>
      {meals.map((item) => {
        return <MealItem key={item.id} {...item} />;
      })}
      <StatusBar barStyle={"dark-content"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    overflow: "scroll",
    paddingTop: 50,
  },
});
