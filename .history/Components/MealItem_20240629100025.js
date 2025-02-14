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
  return (
    <View>
      <Text>{mealName}</Text>
      <Text>{mealCount}</Text>
      <Text>{createdAt}</Text>
      <Text>{table}</Text>
      <Text>{waiter}</Text>
    </View>
  );
}
