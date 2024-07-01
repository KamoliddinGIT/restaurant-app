import React from "react";
import { Text, View } from "react-native";

export default function MealItem({
  mealName,
  createdAt,
  mealCount,
  mealStatus,
  table,
  waiter,
}) {
  console.log(mealName);
  return (
    <View>
      <Text>{mealName}</Text>
    </View>
  );
}
