import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { withLayoutContext } from "expo-router";
import { CustomTabBar } from "../components/CustomTabBar";

const { Navigator } = createBottomTabNavigator();

const Tabs = withLayoutContext(Navigator);

export default function TabLayout() {
  return (
    <Tabs tabBar={(props) => <CustomTabBar {...props} />}>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="menu" options={{ title: "Menu" }} />
      <Tabs.Screen name="orders" options={{ title: "Orders" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}
