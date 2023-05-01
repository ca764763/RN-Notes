import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function AllNotes(navigation, route) {
  const params = route.params;
  console.log(params);
  /*function RenderNotes() {
    data.map((title, content) => {
      return console.log(`${title}: ${content}`);
    });
  }*/
  // render component
  function Maybe() {
    if (params === undefined) {
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
