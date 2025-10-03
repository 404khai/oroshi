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
      image: require("../../assets/images/salmonNigiri.png"),
    },
    {
      id: 2,
      name: "Deluxe Sushi Bento",
      delivery: "123 Tokyo Lane",
      from: "From Sushi Express",
      status: "Delivered",
      image: require("../../assets/images/salmonNigiri.png"),
    },
  ];

  const total = (orderSummary.price * quantity).toFixed(2);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>My Orders</Text>
          <Ionicons name="search-outline" size={22} color="black" />
        </View>

        {/* Order Summary */}
        <Text style={styles.sectionTitle}>Order Summary</Text>
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
                  <Ionicons name="remove" size={18} color="#333" />
                </TouchableOpacity>
                <Text style={styles.quantity}>{quantity}</Text>
                <TouchableOpacity
                  onPress={() => setQuantity(quantity + 1)}
                  style={styles.qBtn}
                >
                  <Ionicons name="add" size={18} color="#333" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {/* Total & Place Order */}
        <View style={styles.totalRow}>
          <Text style={styles.totalText}>Total {quantity} items</Text>
          <Text style={styles.totalText}>${total}</Text>
        </View>
        <TouchableOpacity style={styles.placeOrderBtn}>
          <Text style={styles.placeOrderText}>Place Order</Text>
        </TouchableOpacity>

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
            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text style={styles.orderedName}>{item.name}</Text>
              <Text style={styles.orderedDetails}>
                Delivery · {item.delivery}
              </Text>
              <Text style={styles.orderedFrom}>{item.from}</Text>
            </View>
            <View style={{ alignItems: "flex-end" }}>
              <Text
                style={[
                  styles.status,
                  { color: item.status === "Delivered" ? "green" : "orange" },
                ]}
              >
                {item.status}
              </Text>
              <TouchableOpacity style={styles.trackBtn}>
                <Text style={styles.trackText}>Track</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  scrollContainer: { padding: 16 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  headerText: { fontSize: 22, fontWeight: "600" },
  sectionTitle: { fontSize: 18, fontWeight: "600", marginBottom: 12 },

  // Order summary card
  orderCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 12,
    marginBottom: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  orderImage: { width: 80, height: 80, borderRadius: 12 },
  orderName: { fontSize: 16, fontWeight: "600" },
  orderDesc: { fontSize: 13, color: "#666", marginVertical: 4 },
  orderPrice: { fontSize: 15, fontWeight: "600", color: "#333" },
  rowBetween: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },

  // Quantity control
  quantityControl: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  qBtn: { padding: 4 },
  quantity: { marginHorizontal: 8, fontWeight: "600" },

  // Totals
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  totalText: { fontSize: 15, fontWeight: "500" },
  placeOrderBtn: {
    backgroundColor: "#ff6b6b",
    borderRadius: 25,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 24,
  },
  placeOrderText: { color: "#fff", fontSize: 16, fontWeight: "600" },

  // Ordered items list
  orderedHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  seeAll: { color: "#ff6b6b", fontWeight: "500" },

  orderedCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 12,
    marginBottom: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  orderedImage: { width: 80, height: 80, borderRadius: 12 },
  orderedName: { fontSize: 15, fontWeight: "600" },
  orderedDetails: { fontSize: 13, color: "#666" },
  orderedFrom: { fontSize: 13, color: "#999" },
  status: { fontSize: 13, fontWeight: "600", marginBottom: 6 },
  trackBtn: {
    backgroundColor: "#ff6b6b",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  trackText: { color: "#fff", fontWeight: "600", fontSize: 13 },
});
