import React from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import MealItem from "./MealItem";

export default function MealList({ meals }) {
  return (
    // <View style={styles.container}>
    //   {meals.map((item) => {
    //     return <MealItem key={item._id} {...item} />;
    //   })}
    //   <StatusBar barStyle={"dark-content"} />
    // </View>
    <ScrollView
      contentContainerStyle={styles.scrollContent}
      // style={styles.container}
    >
      <StatusBar barStyle={"light-content"} />
      {meals.map((item) => {
        return <MealItem key={item._id} {...item} />;
      })}
    </ScrollView>
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
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    overflow: "scroll",
    paddingTop: 50,
    paddingBottom: 50,
    backgroundColor: "#bbb",
  },
});
