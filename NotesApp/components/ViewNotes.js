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

  const [fontsLoaded] = useFonts({
    FiraSansLight: require("../assets/fonts/FiraSans-Light.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <Text style={styles.title}>Notes</Text>
      <FlatList
        data={allNotes}
        extraData={allNotes}
        renderItem={({ item }) => (
          <View>
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
  },
  notecontent: {
    fontFamily: "FiraSansLight",
  },
  title: {
    fontSize: 30,
    padding: 10,
    textTransform: "uppercase",
  },
});
