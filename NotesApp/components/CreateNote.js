import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import { Button } from "@rneui/themed";

export default function Create({ navigation, route }) {
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
          navigation.navigate({
            name: "Home",
            params: { title: noteTitle, content: noteContent },
            merge: true,
          });
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
