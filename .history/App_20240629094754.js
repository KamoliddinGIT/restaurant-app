import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("https://restoranapp-production.up.railway.app/meals")
      .then((res) => res.json())
      .then((data) => setMeals(data));
    console.log(meals);
  }, []);
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
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
