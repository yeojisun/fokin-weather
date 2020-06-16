import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.text}>getting the weather</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20, // →←패딩값
    paddingVertical: 100, // ↑↓패딩값
    backgroundColor: "#CEF6CE"
  },
  text: {
    color: "#2c2c2c",
    fontSize: 30
  }
});
