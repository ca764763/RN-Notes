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
  useEffect(() => {
    if (route.params?.title) {
      noteList();
    }
  }, [route.params?.title]);

  const params = route.params;

  let [allNotes, setAllNotes] = useState([]);
  let [lastUsedKey, setNewKey] = useState(1);

  function noteList() {
    const newNote = {
      key: lastUsedKey + 1,
      title: route.params?.title,
      content: route.params?.content,
    };
    setAllNotes(allNotes.push(newNote));
    setNewKey(lastUsedKey + 1);
    console.log(allNotes);
  }

  /* function seeNotes() {
    if (params === undefined) {
      navigation.navigate("All");
    } else {
      navigation.navigate({
        name: "All",
        notes: allNotes,
      });
    }
  }*/

  return (
    <View style={styles.container}>
      <Button
        title="Create New Note"
        onPress={() =>
          navigation.navigate("Create", {
            notes: allNotes,
          })
        }
      ></Button>
      <Button
        title="View All Notes"
        onPress={() =>
          navigation.navigate({
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
