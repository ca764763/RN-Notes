import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

export default function AllNotes({ navigation, route }) {
  const params = route.params;
  console.log(params.notes);
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

  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <Text style={styles.title}>Your Notes</Text>
      <FlatList
        data={allNotes}
        extraData={allNotes}
        renderItem={({ item }) => (
          <View style={styles.note}>
            <Text style={styles.notetitle}>{item.title}</Text>
            <Text style={styles.noteContent}>{item.content}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  notetitle: {
    fontWeight: "bold",
    fontFamily: "FiraSansBold",
    textTransform: "uppercase",
  },
  notecontent: {
    fontFamily: "FiraSansLight",
  },
  note: {
    padding: 20,
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    margin: 5,
  },
  title: {
    fontSize: 30,
    padding: 10,
    textTransform: "uppercase",
    fontFamily: "Neucha",
  },
});
