import React, { useEffect } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { useFonts, Fredoka_600SemiBold } from "@expo-google-fonts/fredoka";
import * as SplashScreen from "expo-splash-screen";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

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
        router.replace("/(tabs)");
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FF6A3C', '#FF593C']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <Text style={styles.title}>Oroshi</Text>
        <Image
          source={require("../assets/images/splashImg.png")}
          style={styles.splashImage}
          resizeMode="contain"
        />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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