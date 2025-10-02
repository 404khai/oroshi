import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/use-color-scheme";


export const unstable_settings = {
  initialRouteName: "splash", // 👈 Start at splash
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        {/* Splash Screen */}
        <Stack.Screen name="splash" options={{ headerShown: false }} />

        {/* Main Tabs */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      
        {/* Example modal route if you use it */}
        <Stack.Screen
          name="modal"
          options={{ presentation: "modal", title: "Modal" }}
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
