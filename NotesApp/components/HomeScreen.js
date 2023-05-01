import { Button } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";

const initialNotes = [
  {
    key: 1,
    title: "once again",
    content: "please",
  },
];

export default function Home({ navigation, route }) {
  const params = route.params;
  let allNotes = params.notes;
  console.log(allNotes);

  return (
    <View style={styles.container}>
      <Button
        title="Create New Note"
        onPress={() =>
          navigation.navigate("Create", {
            name: "Create",
            notes: allNotes,
          })
        }
      ></Button>
      <Button
        title="View All Notes"
        onPress={() =>
          navigation.navigate("All", {
            name: "All",
            notes: allNotes,
          })
        }
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
