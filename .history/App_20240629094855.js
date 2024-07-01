import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MealList from "./Components/MealList";

export default function App() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("https://restoranapp-production.up.railway.app/meals")
      .then((res) => res.json())
      .then((data) => setMeals(data));
  }, []);

  return (
    <View style={styles.container}>
      <MealList />
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bbb",
    alignItems: "center",
    justifyContent: "center",
  },
});
