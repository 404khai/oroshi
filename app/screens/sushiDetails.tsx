import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

interface MenuItem {
  id: string;
  name: string;
  price: string;
  image: any;
}

const menuItems: MenuItem[] = [
  { id: "1", name: "Salmon Nigiri Set", price: "$12.50", image: require("../../assets/images/salmonNigiri.png") },
  { id: "2", name: "Maki Roll", price: "$10.00", image: require("../../assets/images/makiRoll.png") },
  { id: "3", name: "Deluxe Bento", price: "$12.50", image: require("../../assets/images/deluxeBento.png") },
  { id: "4", name: "Salmon Sashimi", price: "$10.00", image: require("../../assets/images/salmonSashimi.png") },
];

const router = useRouter()

export default function sushiDetails () {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="heart-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Hero Image */}
      <Image
        source={require("../../assets/images/sushiHero.png")}
        style={styles.heroImage}
        resizeMode="cover"
      />

      {/* Floating Card */}
      <View style={styles.infoCard}>
        <Text style={styles.restaurantName}>Sakura Sushi</Text>
        <View style={styles.row}>
          <Ionicons name="star" size={14} color="#FF4B3E" />
          <Text style={styles.rating}>4.8</Text>
          <Text style={styles.subText}>(1.2K reviews)</Text>
          <View style={styles.dot} />
          <Ionicons name="time-outline" size={14} color="#000" />
          <Text style={styles.subText}>25 mins</Text>
          <View style={styles.dot} />
          <Text style={styles.priceTier}>$$</Text>
        </View>
        <Text style={styles.description}>Authentic sushi experience</Text>

        {/* Tags */}
        <View style={styles.tags}>
          {["Japanese", "Sushi", "Sea food", "Ramen"].map((tag) => (
            <View key={tag} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView
        style={styles.scrollArea}
        contentContainerStyle={{ paddingBottom: 130 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Tabs */}
        <View style={styles.tabs}>
          {["Nigiri", "Sashimi", "Maki", "Temaki", "Bento"].map((tab, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.tabButton, index === 0 && styles.activeTab]}
            >
              <Text
                style={[styles.tabText, index === 0 && styles.activeTabText]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Menu Items */}
        <FlatList
          data={menuItems}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.menuCard}>
              <Image source={item.image} style={styles.menuImage} />
              <Text style={styles.menuTitle}>{item.name}</Text>
              <View style={styles.menuFooter}>
                <Text style={styles.menuPrice}>{item.price}</Text>
                <TouchableOpacity style={styles.addButton}>
                  <Ionicons name="add" size={20} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </ScrollView>

      {/* Fixed Bottom Bar */}
      <View style={styles.footer}>
        <View>
          <Text style={styles.totalAmount}>$25.00</Text>
          <Text style={styles.totalItems}>Total 2 items</Text>
        </View>
        <TouchableOpacity style={styles.orderButton}>
          <Text style={styles.orderText}>Go to orders</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    position: "absolute",
    top: 40,
    zIndex: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 16,
  },
  heroImage: {
    width: "100%",
    height: 250,
  },
  infoCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
    marginTop: -40,
    shadowColor: 'rgb(0, 0, 0, 0.3)',
    shadowOffset: {
        width: 0,
        height: 4, // move shadow down
    },
    shadowOpacity: 0.1,  // control transparency
    shadowRadius: 16,    // 👈 this is your blur
    elevation: 8, 
  },
  restaurantName: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  rating: { fontWeight: "600", fontSize: 13, marginHorizontal: 4 },
  subText: { color: "#777", fontSize: 12 },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#999",
    marginHorizontal: 6,
  },
  priceTier: { color: "#FF4B3E", fontWeight: "700" },
  description: {
    color: "#666",
    marginTop: 6,
    fontSize: 13,
  },
  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },
  tag: {
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginRight: 8,
    marginBottom: 6,
  },
  tagText: { color: "#777", fontSize: 12 },
  scrollArea: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 16,
  },
  tabs: {
    flexDirection: "row",
    marginBottom: 16,
  },
  tabButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
    backgroundColor: "#F5F5F5",
  },
  activeTab: {
    backgroundColor: "#FF4B3E",
  },
  tabText: {
    fontSize: 13,
    color: "#777",
    fontWeight: "500",
  },
  activeTabText: {
    color: "#fff",
  },
  menuCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 12,
    flex: 1,
    margin: 6,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
  },
  menuImage: {
    width: "100%",
    height: 90,
    borderRadius: 10,
    marginBottom: 8,
  },
  menuTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
    marginBottom: 4,
  },
  menuFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuPrice: {
    fontWeight: "600",
    color: "#000",
  },
  addButton: {
    backgroundColor: "#FF4B3E",
    borderRadius: 16,
    width: 28,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderTopWidth: 1,
    borderColor: "#eee",
  },
  totalAmount: { fontSize: 16, fontWeight: "700", color: "#000" },
  totalItems: { fontSize: 13, color: "#777" },
  orderButton: {
    backgroundColor: "#FF4B3E",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  orderText: { color: "#fff", fontWeight: "600", fontSize: 15 },
});
