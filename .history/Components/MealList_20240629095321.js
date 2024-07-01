import React from "react";
import { Text, View } from "react-native";

export default function MealList({ meals }) {
  return (
    <View>
      {meals.map((item) => {
        console.log(item);
      })}
    </View>
  );
}
