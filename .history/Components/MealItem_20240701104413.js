import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MealName from "./MealName";

export default function MealItem({ tableNum, meals, createdAt }) {
  console.log(meals);
  return (
    <>
      {meals.map((item) => {
        return <MealName key={item._id} {...item} tableNum={tableNum} />;
      })}
    </>
  );
}

// const styles = StyleSheet.create({
//   card: {
//     width: "90%",
//     height: 250,
//     backgroundColor: "white",
//     gap: 10,
//     alignItems: "center",
//   },
//   text: {
//     color: "white",
//     fontWeight: "normal",
//     fontSize: 18,
//   },
//   options: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     width: "100%",
//     height: "25%",
//     backgroundColor: "#ec3121",
//     padding: 10,
//   },
//   mealOption: {
//     width: "90%",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     borderBottomWidth: 1.5,
//   },
//   text_option: {
//     color: "black",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   access: {
//     flexDirection: "row",
//     gap: 10,
//   },
//   btn: {
//     backgroundColor: "#DDDDDD",
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 2,
//   },
// });
