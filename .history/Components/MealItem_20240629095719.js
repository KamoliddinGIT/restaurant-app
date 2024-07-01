import React from "react";
import { Text, View } from "react-native";

export default function MealItem({ data }) {
  console.log(data);
  return (
    <View>
      <Text>{mealName}</Text>
    </View>
  );
}
