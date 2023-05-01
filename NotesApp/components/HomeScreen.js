import { Button } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Home({ navigation, route }) {
  const allNotes = route.params;
  console.log(allNotes);

  function view(allNotes) {
    const check = Array.isArray(allNotes);
    if (allNotes === undefined) {
      navigation.navigate("All");
    } else if (check === true) {
      navigation.navigate("All", {
        data: allNotes,
      });
    }
  }

  return (
    <View style={styles.container}>
      <Button
        title="Create New Note"
        onPress={() => navigation.navigate("Create")}
      ></Button>
      <Button
        title="View All Notes"
        onPress={() => {
          view();
        }}
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
