import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function FetchData() {
  return (
    <View style={styles.container}>
      <Text>Fetch data!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 50,
    fontWeight: "500",
  },
});
