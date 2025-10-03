import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function orders() {
  const [quantity, setQuantity] = useState(1);

  const orderSummary = {
    name: "Salmon Nigiri Set",
    price: 12.5,
    desc: "Delicious salmon nigiri with fresh wasabi",
    image: require("../../assets/images/salmonNigiri.png"),
  };

  const orderedItems = [
    {
      id: 1,
      name: "Japanese Sushi Bento",
      delivery: "123 Tokyo Lane",
      from: "From Sushi World",
      status: "Arriving",
      image: require("../../assets/images/sushiWorld.png"),
    },
    {
      id: 2,
      name: "Deluxe Sushi Bento",
      delivery: "123 Tokyo Lane",
      from: "From Sushi Express",
      status: "Arriving",
      image: require("../../assets/images/deluxeSushi.png"),
    },
  ];

  const total = (orderSummary.price * quantity).toFixed(2);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>

          <Text style={styles.headerText}>My Orders</Text>
          <TouchableOpacity style={styles.searchButton}>
            <Ionicons name="search-outline" size={22} color="black" />
          </TouchableOpacity>
          
        </View>

        {/* Order Summary */}
        <Text style={styles.sectionTitle}>Order Summary</Text>
        <View style={styles.orderBox}>
            <View style={styles.orderCard}>
            <Image source={orderSummary.image} style={styles.orderImage} />
            <View style={{ flex: 1, marginLeft: 12 }}>
                <Text style={styles.orderName}>{orderSummary.name}</Text>
                <Text style={styles.orderDesc}>{orderSummary.desc}</Text>
                <View style={styles.rowBetween}>
                <Text style={styles.orderPrice}>${orderSummary.price.toFixed(2)}</Text>
                <View style={styles.quantityControl}>
                    <TouchableOpacity
                    onPress={() => setQuantity(Math.max(1, quantity - 1))}
                    style={styles.qBtn}
                    >
                    <Ionicons name="remove" size={18} color="#1C1C1E" />
                    </TouchableOpacity>
                    <Text style={styles.quantity}>{quantity}</Text>
                    <TouchableOpacity
                    onPress={() => setQuantity(quantity + 1)}
                    style={styles.qBtn}
                    >
                    <Ionicons name="add" size={18} color="#1C1C1E" />
                    </TouchableOpacity>
                </View>
                </View>
            </View>
            </View>
            
            <View style={styles.divider} />

            {/* Total & Place Order */}
            <View style={styles.totalRow}>
            <Text style={styles.totalText}>Total {quantity} items</Text>
            <Text style={styles.totalCount}>${total}</Text>
            </View>
            <TouchableOpacity style={styles.placeOrderBtn}>
            <Text style={styles.placeOrderText}>Place Order</Text>
            </TouchableOpacity>
        </View>

        {/* Ordered Items */}
        <View style={styles.orderedHeader}>
          <Text style={styles.sectionTitle}>Ordered Items</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>

        {orderedItems.map((item) => (
          <View key={item.id} style={styles.orderedCard}>
            <Image source={item.image} style={styles.orderedImage} />
            
            <View style={styles.orderedCardDetails}>
                <View style={{ flex: 1, marginLeft: 12 }}>
                    <Text style={styles.orderedName}>{item.name}</Text>
                    <Text style={styles.orderedDetails}>
                        Delivery · {item.delivery}
                    </Text>
                    <Text style={styles.orderedFrom}>{item.from}</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between',alignItems: "center", marginLeft: 12 }}>
                    <Text
                        style={[
                        styles.status,
                        { color: item.status === "Delivered" ? "green" : "#FF593C" },
                        ]}
                    >
                        {item.status}
                    </Text>
                    <TouchableOpacity style={styles.trackBtn}>
                        <Text style={styles.trackText}>Track</Text>
                    </TouchableOpacity>
                </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fffdfe" },
  scrollContainer: { padding: 16 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    paddingVertical: 30,
    paddingBottom: 10,
    backgroundColor: '#fffdfe',
  },
  headerText: { fontSize: 20, fontWeight: "600", color: '#1C1C1E' },
  sectionTitle: { fontSize: 16, fontWeight: "600", marginBottom: 12 },
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

  orderBox: {
    paddingHorizontal: 12,
    paddingVertical: 16,
    flexDirection: 'column',
    gap: 8,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    shadowColor: 'rgb(0, 0, 0, 0.3)',
    shadowOffset: {
        width: 0,
        height: 4, // move shadow down
    },
    shadowOpacity: 0.1,  // control transparency
    shadowRadius: 16,    // 👈 this is your blur
    elevation: 8, 
    marginBottom: 24,
  },
  divider: {
    height: 1, // thin line
    width: "100%", // take full width
    backgroundColor: "#EFEFF6", // your divider color
  },
  // Order summary card
  orderCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  orderImage: { width: 80, height: 80, borderRadius: 12 },
  orderName: { fontSize: 14, fontWeight: "600", color: '#1C1C1E' },
  orderDesc: { fontSize: 13, color: "#8E8E93", marginVertical: 4 },
  orderPrice: { fontSize: 15, fontWeight: "600", color: "#333" },
  rowBetween: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },

  // Quantity control
  quantityControl: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F7F8FA",
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  qBtn: { padding: 4},
  quantity: { marginHorizontal: 8, fontWeight: "600", color: '#1C1C1E' },

  // Totals
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6
  },
  totalText: { fontSize: 14, fontWeight: "500", color: '#8E8E93' },
  totalCount: { fontSize: 14, fontWeight: "500", color: '#1C1C1E' },
  placeOrderBtn: {
    backgroundColor: "#FF824D",
    borderRadius: 25,
    paddingVertical: 14,
    alignItems: "center",
  },
  placeOrderText: { color: "#fff", fontSize: 14, fontWeight: "600" },

  // Ordered items list
  orderedHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  seeAll: { color: "#FF593C", fontWeight: "500", fontSize: 16 },

  orderedCard: {
    flexDirection: "row",
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
    elevation: 8,
  },
  orderedCardDetails:{
    width: 220,
    height: '100%',
  },
  orderedImage: { width: 80, height: 80, borderRadius: 12 },
  orderedName: { fontSize: 15, fontWeight: "600", color: "#1C1C1E" },
  orderedDetails: { fontSize: 13, color: "#8E8E93" },
  orderedFrom: { fontSize: 13, color: "#999" },
  status: { fontSize: 13, fontWeight: "400" },
  trackBtn: {
    backgroundColor: "#FF593C",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  trackText: { color: "#fff", fontWeight: "500", fontSize: 13 },
});
