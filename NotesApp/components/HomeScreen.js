import { Button } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

export default function Home({ navigation, route }) {
  const params = route.params;
  let allNotes = params.notes;
  console.log(allNotes);

  // fonts
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

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text style={{ fontFamily: "Neucha", fontSize: 30 }}>Home</Text>
      <Button
        title="Create New Note"
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
        onPress={() =>
          navigation.navigate("Create", {
            name: "Create",
            notes: allNotes,
          })
        }
      ></Button>
      <Button
        title="View All Notes"
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
