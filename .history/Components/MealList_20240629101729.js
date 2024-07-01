import React from "react";
import { Text, View } from "react-native";
import MealItem from "./MealItem";

export default function MealList({ meals }) {
  return (
    <View>
      {meals.map((item) => {
        return <MealItem key={item.id} {...item} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({});
