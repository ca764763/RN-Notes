import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import { Button } from "@rneui/themed";

export default function Create({ navigation, route }) {
  let notes = [
    {
      key: 1,
      title: "once again",
      content: "please",
    },
  ];

  let [allNotes, setAllNotes] = useState([notes]);
  let [lastUsedKey, setNewKey] = useState(2);

  function addnote() {
    const newNote = {
      key: lastUsedKey + 1,
      title: noteTitle,
      content: noteContent,
    };
    setAllNotes({ allNotes: allNotes.push(newNote) });
    setNewKey(lastUsedKey + 1);
    navigation.navigate("Home", {
      allNotes,
    });
  }

  let [noteTitle, setNoteTitle] = useState("");
  let [noteContent, setNoteContent] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>New Note</Text>
      <Text style={styles.inputText}>Title:</Text>
      <TextInput
        style={styles.input}
        placeholder="enter title"
        value={noteTitle}
        onChangeText={setNoteTitle}
      />
      <Text style={styles.inputText}>Note:</Text>
      <TextInput
        editable
        multiline
        numberOfLines={5}
        maxLength={40}
        style={styles.input}
        placeholder="enter note"
        value={noteContent}
        onChangeText={setNoteContent}
      />
      <Button
        onPress={() => {
          addnote();
        }}
        title="Add Note"
      ></Button>
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 1,
  },
  titleText: {
    textDecorationLine: "underline",
    fontSize: 25,
  },
  inputText: {
    fontVariant: "small-caps",
  },
});
