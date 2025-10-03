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
import { LinearGradient } from "expo-linear-gradient";

const menu = () => {
    const categories = ["Nigiri", "Maki", "Bento", "Sashimi", "Temaki"];
  const [activeCategory, setActiveCategory] = React.useState("Nigiri");

  const dishes = [
    {
      id: 1,
      name: "Salmon Nigiri Set",
      price: "$12.50",
      image: require('../../assets/images/salmonNigiri.png')
    },
    {
      id: 2,
      name: "Maki Roll",
      price: "$10.00",
      image: require('../../assets/images/makiRoll.png')
    },
    {
      id: 3,
      name: "Deluxe Bento",
      price: "$14.00",
      image: require('../../assets/images/deluxeBento.png')
    },
    {
      id: 4,
      name: "Salmon Sashimi",
      price: "$14.00",
      image: require('../../assets/images/salmonSashimi.png')
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Menu</Text>

          <TouchableOpacity style={styles.searchButton}>
            <Ionicons name="search-outline" size={22} color="black" />
          </TouchableOpacity>
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
        <LinearGradient
            colors={["#FFDFC8", "#F6C5A3"]}
            start={{ x: 0, y: 0.5 }}   // gradient left → right
            end={{ x: 1, y: 0.5 }}
            style={styles.promo}
            >
            {/* Text Section */}
            <View>
                <Text style={styles.promoTitle}>20% OFF</Text>
                <Text style={styles.promoSub}>On all nigiri sets</Text>
            </View>

            {/* Image Section */}
            <Image
                source={require("../../assets/images/promo.png")}
                style={styles.promoImage}
                resizeMode="contain"
            />
        </LinearGradient>

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
              <View style={styles.dishPriceAddBtn}>
                <Text style={styles.dishPrice}>{dish.price}</Text>
                <TouchableOpacity style={styles.addButton}>
                    <Ionicons name="add" size={20} color="white" />
                </TouchableOpacity>
              </View>
              
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
    backgroundColor: "#fffdfe",
  },
  scrollContainer: {
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    paddingVertical: 40,
    paddingBottom: 10,
    backgroundColor: '#fffdfe',
  },
  headerText: {
    fontSize: 22,
    fontWeight: "600",
  },
  searchButton: {
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
  categories: {
    flexDirection: "row",
    marginBottom: 20,
  },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    marginRight: 10,
    shadowColor: 'rgb(0, 0, 0, 0.2)',
    shadowOffset: {
        width: 0,
        height: 4, // move shadow down
    },
    shadowOpacity: 0.1,  // control transparency
    shadowRadius: 16,    // 👈 this is your blur
    elevation: 8,
  },
  categoryButtonActive: {
    backgroundColor: "#FF593C",
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
    paddingHorizontal: 20,
    paddingVertical: 16,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40,
  },
  promoTitle: {
    fontSize: 34,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  promoSub: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  promoImage: {
    width: 170,  
    height: 142,
    position: 'absolute',
    right: 0,
    top: 5

  },
  popularHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1C1C1E',
  },
  seeAll: {
    fontSize: 16,
    color: '#FF593C',
    fontWeight: '600',
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
    shadowColor: 'rgb(0, 0, 0, 0.3)',
    shadowOffset: {
        width: 0,
        height: 4, // move shadow down
    },
    shadowOpacity: 0.1,  // control transparency
    shadowRadius: 16,    // 👈 this is your blur
    elevation: 16,
    position: "relative",
  },
  dishImage: {
    width: "100%",
    height: 108,
  },
  dishName: {
    fontSize: 14,
    fontWeight: "600",
    color: '#1C1C1E',
    marginBottom: 4,
  },
  dishPriceAddBtn:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  dishPrice: {
    fontSize: 13,
    color: "#1C1C1E",
  },
  addButton: {
    backgroundColor: "#ff6b6b",
    borderRadius: 50,
    padding: 4,
  },
})


export default menu