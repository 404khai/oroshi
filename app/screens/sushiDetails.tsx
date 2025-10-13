import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import BackArrowIcon from "@/components/icons/BackArrowIcon";
import HeartIcon from "@/components/icons/HeartIcon";

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

export default function SushiDetails() {
  const router = useRouter();

  const renderHeader = () => (
    <>
      {/* Hero section with bg color */}
      <View style={styles.heroContainer}>
        {/* Top header icons */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <BackArrowIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.backButton}>
            <HeartIcon/>
          </TouchableOpacity>
        </View>

        {/* Hero image */}
        <Image
          source={require("../../assets/images/sushiHero.png")}
          style={styles.heroImage}
          resizeMode="cover"
        />
      </View>

      {/* Floating info card */}
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
    </>
  );

  const renderItem = ({ item }: { item: MenuItem }) => (
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
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={menuItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={<View style={{ height: 140 }} />}
        columnWrapperStyle={styles.columnWrapperStyle}
        showsVerticalScrollIndicator={false}
      />


      {/* Fixed bottom bar */}
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
  container: { flex: 1, backgroundColor: '#fffdfe' },

  /** HERO SECTION **/
  heroContainer: {
    width: "100%",
    backgroundColor: "#FFEFE3",
  },
  heroImage: {
    width: "100%",
    height: 280,
    top: 60,
  },

  header: {
    position: "absolute",
    top: 50,
    zIndex: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 16,
  },
  backButton: {
    padding: 10,
      backgroundColor: "#FFFFFF",
      borderRadius: 50,
      shadowColor: 'rgb(0, 0, 0, 0.3)',
      shadowOffset: {
          width: 0,
          height: 4, // move shadow down
      },
      shadowOpacity: 0.1,  // control transparency
      shadowRadius: 16,    // 👈 this is your blur
      elevation: 8,
  },
  columnWrapperStyle: {
    paddingHorizontal: 20,
  },

  /** INFO CARD **/
  infoCard: {
    backgroundColor: "rgb(255, 255, 255)",
    borderRadius: 20,
    padding: 16,
    marginHorizontal: 16,
    marginTop: -70,
    shadowColor: 'rgb(0, 0, 0, 0.3)',
    shadowOffset: {
        width: 0,
        height: 4, // move shadow down
    },
    shadowOpacity: 0.1,  // control transparency
    shadowRadius: 16,    // 👈 this is your blur
    elevation: 8,
  },

  restaurantName: { fontSize: 20, fontWeight: "600", color: "#1C1C1E" },
  row: { flexDirection: "row", alignItems: "center", marginTop: 6 },
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
  description: { color: "#8E8E93", marginTop: 6, fontSize: 14 },

  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,

  },
  tag: {
    backgroundColor: "#F7F8FA",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 8,
    marginBottom: 6,
  },
  tagText: { color: "#808087", fontSize: 12 },

  /** TABS **/
  tabs: {
    flexDirection: "row",
    marginTop: 14,
    paddingLeft: 20,
    marginBottom: 20
  },
  tabButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    backgroundColor: "#ffffff",
    shadowColor: 'rgb(0, 0, 0, 0.3)',
    shadowOffset: {
        width: 0,
        height: 4, // move shadow down
    },
    shadowOpacity: 0.1,  // control transparency
    shadowRadius: 16,    // 👈 this is your blur
    elevation: 16,
  },
  activeTab: { 
    backgroundColor: "#FFFFFF" 
  },
  tabText: { fontSize: 13, color: "#8E8E93", fontWeight: "400" },
  activeTabText: { color: "#1C1C1E" },

  /** MENU ITEMS **/
  menuCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 12,
    flex: 1,
    margin: 6,
    shadowColor: 'rgb(0, 0, 0, 0.3)',
    shadowOffset: {
        width: 0,
        height: 4, // move shadow down
    },
    shadowOpacity: 0.1,  // control transparency
    shadowRadius: 16,    // 👈 this is your blur
    elevation: 16,
  },
  menuImage: {
    width: 110,
    height: 110,
    borderRadius: 10,
    marginBottom: 8,
    alignSelf: 'center'
  },
  menuTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1C1C1E",
    marginBottom: 3,
  },
  menuFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuPrice: { fontWeight: "400", color: "#1C1C1E" },
  addButton: {
    backgroundColor: "#FF4B3E",
    borderRadius: 16,
    width: 28,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
  },

  /** FOOTER **/
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
  totalAmount: { fontSize: 16, fontWeight: "600", color: "#1C1C1E" },
  totalItems: { fontSize: 14, color: "#8E8E93" },
  orderButton: {
    backgroundColor: "#FF4B3E",
    borderRadius: 99,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  orderText: { color: "#fff", fontWeight: "400", fontSize: 14 },
});
