import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

export default function AllNotes({ navigation, route }) {
  const params = route.params;

  useEffect(() => {
    if (route.params?.notes) {
      console.log(params);
    }
  }, [route.params?.notes]);
  /*function RenderNotes() {
    data.map((title, content) => {
      return console.log(`${title}: ${content}`);
    });
  }*/
  // render component
  function Maybe() {
    if (params.notes === undefined) {
      return <Text>no notes here</Text>;
    } else {
      return <Text>THEY PASSED</Text>;
    }
  }
  return (
    <View style={styles.container}>
      <Maybe />
      <StatusBar style="auto" />
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
