import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { HomeIcon } from "./icons/HomeIcon";
import { MenuIcon } from "./icons/MenuIcon";
import { OrdersIcon } from "./icons/OrdersIcon";
import { ProfileIcon } from "./icons/ProfileIcon";

export function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          if (!isFocused) navigation.navigate(route.name);
        };

        const renderIcon = () => {
          switch (route.name) {
            case "index":
              return <HomeIcon focused={isFocused} />;
            case "menu":
              return <MenuIcon focused={isFocused} />;
            case "orders":
              return <OrdersIcon focused={isFocused} />;
            case "profile":
              return <ProfileIcon focused={isFocused} />;
            default:
              return null;
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={[styles.tab, isFocused && styles.activeTab]}
          >
            {renderIcon()}
            <Text style={[styles.label, { color: isFocused ? "#FF593C" : "#7B7879" }]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    paddingBottom: 10,
    paddingHorizontal: 20,
    overflow: "hidden",
    shadowColor: 'rgb(0, 0, 0, 0.3)',
    shadowOffset: {
        width: 0,
        height: -4, // move shadow down
    },
    shadowOpacity: 0.1,  // control transparency
    shadowRadius: 8,    // 👈 this is your blur
    elevation: 8, 
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
    borderTopWidth: 2,
    borderTopColor: "transparent",
  },
  activeTab: {
    borderTopColor: "#FF593C",
  },
  label: {
    fontSize: 12,
    marginTop: 2,
  },
});
