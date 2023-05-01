import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import { Button } from "@rneui/themed";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

export default function Create({ navigation, route }) {
  // states
  let [noteTitle, setNoteTitle] = useState("");
  let [noteContent, setNoteContent] = useState("");

  let params = route.params;
  let allNotes = params.notes;

  //fonts
  const [fontsLoaded] = useFonts({
    FiraSansLight: require("../assets/fonts/FiraSans-Light.ttf"),
    Neucha: require("../assets/fonts/Neucha-Regular.ttf"),
    FiraSansBold: require("../assets/fonts/FiraSans-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  //component
  function noteList() {
    const newNote = {
      title: noteTitle,
      content: noteContent,
    };
    allNotes.push(newNote);

    navigation.navigate("Home", {
      name: "Home",
      notes: allNotes,
    });
  }
  // user inputs
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text style={styles.titleText}>New Note</Text>
      <Text style={styles.inputText}>Title:</Text>
      <TextInput
        style={styles.input}
        placeholder="enter note title"
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
        placeholder="enter note content"
        value={noteContent}
        onChangeText={setNoteContent}
      />
      <Button
        buttonStyle={{
          backgroundColor: "#B2AC88",
          borderWidth: 2,
          borderColor: "white",
          borderRadius: 30,
        }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          margineVertical: 10,
        }}
        titleStyle={{
          fontFamily: "FiraSansBold",
        }}
        onPress={() => {
          noteList();
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
    padding: 5,
    opacity: "50%",
  },
  titleText: {
    fontSize: 25,
    fontFamily: "Neucha",
    padding: 5,
  },
  inputText: {
    textTransform: "uppercase",
    fontFamily: "FiraSansLight",
  },
});
