import React, { useEffect } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { useFonts, Fredoka_600SemiBold } from "@expo-google-fonts/fredoka";
import * as SplashScreen from "expo-splash-screen";
import { useRouter } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function Splash() {
  const router = useRouter();
  let [fontsLoaded] = useFonts({
    Fredoka: Fredoka_600SemiBold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();

      // Navigate to your tabs after 2 seconds
      const timeout = setTimeout(() => {
        router.replace("/(tabs)"); // 👈 adjust if your tabs folder is named differently
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Oroshi</Text>
      <Image
        source={require("../assets/images/splashImg.png")}
        style={styles.splashImage}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF5A3C",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    margin: 0,
  },
  title: {
    fontFamily: "Fredoka",
    fontSize: 36,
    color: "white",
  },
  splashImage: {
    position: "absolute",
    bottom: 0,
    left: -35,
    width: "100%",
    height: 150,
  },
});
