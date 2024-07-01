import React from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import MealItem from "./MealItem";

export default function MealList({ meals }) {
  return (
    <ScrollView style={styles.container}>
      {meals.map((item) => {
        return <MealItem key={item.id} {...item} />;
      })}
      <StatusBar barStyle={"dark-content"} />
    </Scro>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    minHeight: "100vh",
    alignItems: "center",
    gap: "20px",
    overflow: "scroll",
    paddingTop: 30,
  },
});
