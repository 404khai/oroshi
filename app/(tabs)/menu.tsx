import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const menu = () => {
    const categories = ["Nigiri", "Maki", "Bento", "Sashimi", "Temaki"];
  const [activeCategory, setActiveCategory] = React.useState("Nigiri");

  const dishes = [
    {
      id: 1,
      name: "Salmon Nigiri Set",
      price: "$12.50",
      image: require('../../assets/images/sakuraSushi.png')
    },
    {
      id: 2,
      name: "Maki Roll",
      price: "$10.00",
      image: require('../../assets/images/sakuraSushi.png')
    },
    {
      id: 3,
      name: "Deluxe Bento",
      price: "$14.00",
      image: require('../../assets/images/sakuraSushi.png')
    },
    {
      id: 4,
      name: "Salmon Sashimi",
      price: "$14.00",
      image: require('../../assets/images/sakuraSushi.png')
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Menu</Text>
          <Ionicons name="search-outline" size={22} color="black" />
        </View>

        {/* Categories */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat}
              onPress={() => setActiveCategory(cat)}
              style={[
                styles.categoryButton,
                activeCategory === cat && styles.categoryButtonActive,
              ]}
            >
              <Text
                style={[
                  styles.categoryText,
                  activeCategory === cat && styles.categoryTextActive,
                ]}
              >
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Promo Banner */}
        <View style={styles.promo}>
          <View>
            <Text style={styles.promoTitle}>20% OFF</Text>
            <Text style={styles.promoSub}>On all nigiri sets</Text>
          </View>
          <Image
            source={require("../../assets/images/promo.png")}
            style={styles.promoImage}
            resizeMode="contain"
          />
        </View>

        {/* Popular Dishes */}
        <View style={styles.popularHeader}>
          <Text style={styles.sectionTitle}>Popular Dishes</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>

        {/* Dishes Grid */}
        <View style={styles.dishesGrid}>
          {dishes.map((dish) => (
            <View key={dish.id} style={styles.dishCard}>
              <Image source={dish.image} style={styles.dishImage} />
              <Text style={styles.dishName}>{dish.name}</Text>
              <Text style={styles.dishPrice}>{dish.price}</Text>
              <TouchableOpacity style={styles.addButton}>
                <Ionicons name="add" size={20} color="white" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "600",
  },
  categories: {
    flexDirection: "row",
    marginBottom: 20,
  },
  categoryButton: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    backgroundColor: "#f2f2f2",
    borderRadius: 20,
    marginRight: 10,
  },
  categoryButtonActive: {
    backgroundColor: "#ff6b6b",
  },
  categoryText: {
    fontSize: 14,
    color: "#555",
  },
  categoryTextActive: {
    color: "#fff",
    fontWeight: "600",
  },
  promo: {
    flexDirection: "row",
    backgroundColor: "#ffe2d4",
    borderRadius: 16,
    padding: 16,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  promoTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#ff6b6b",
  },
  promoSub: {
    fontSize: 14,
    color: "#555",
  },
  promoImage: {
    width: 100,
    height: 80,
  },
  popularHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  seeAll: {
    color: "#ff6b6b",
    fontWeight: "500",
  },
  dishesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  dishCard: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 12,
    marginBottom: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    position: "relative",
  },
  dishImage: {
    width: "100%",
    height: 100,
    borderRadius: 12,
    marginBottom: 10,
  },
  dishName: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
  },
  dishPrice: {
    fontSize: 13,
    color: "#555",
  },
  addButton: {
    position: "absolute",
    bottom: 12,
    right: 12,
    backgroundColor: "#ff6b6b",
    borderRadius: 50,
    padding: 6,
  },
})


export default menu