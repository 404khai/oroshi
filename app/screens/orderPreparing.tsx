import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const orderPreparing = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Close Button */}
      <TouchableOpacity style={styles.closeButton} onPress={() => router.push("/")}>
        <Ionicons name="close" size={22} color="#1C1C1E" />
      </TouchableOpacity>

      {/* Header */}
      <Text style={styles.title}>Hang in there, we’re on it!</Text>

      {/* Order Summary Card */}
      <View style={styles.orderCard}>
        <View style={styles.orderHeader}>
          <View style={styles.restaurantInfo}>
            <Image
              source={require("@/assets/images/placeholder-restaurant.png")} // Placeholder
              style={styles.restaurantIcon}
            />
            <Text style={styles.restaurantName}>Sakura Sushi</Text>
          </View>

          <View style={styles.orderTag}>
            <Text style={styles.orderTagText}>Preparing Order</Text>
          </View>
        </View>

        <Text style={styles.estimatedLabel}>Estimated arrival</Text>
        <Text style={styles.estimatedTime}>30–49 minutes</Text>

        <Image
          source={require("@/assets/images/placeholder-food.png")} // Placeholder
          style={styles.foodImage}
        />
      </View>

      {/* Preparing Info Card */}
      <View style={styles.statusCard}>
        <View style={styles.statusRow}>
          <Ionicons name="thumbs-up" size={18} color="#FF593C" />
          <Text style={styles.statusText}>
            Sakura Sushi is preparing your order. Fresh rolls are on the way!
          </Text>
        </View>
      </View>

      {/* Promo Card */}
      <View style={styles.promoCard}>
        <View style={styles.promoTextBox}>
          <Text style={styles.promoTitle}>Unlock Free Delivery!</Text>
          <Text style={styles.promoSubtitle}>
            Get more exclusive deals and discounts.
          </Text>
          <TouchableOpacity style={styles.exploreButton}>
            <Text style={styles.exploreButtonText}>Explore Now</Text>
          </TouchableOpacity>
        </View>

        <Image
          source={require("@/assets/images/placeholder-rider.png")} // Placeholder
          style={styles.promoImage}
        />
      </View>

      {/* Delivery Info */}
      <View style={styles.deliveryRow}>
        <View style={styles.deliveryDot} />
        <View>
          <Text style={styles.deliveryLabel}>Delivering to</Text>
          <Text style={styles.deliveryText}>Home, Expected in 25 mins</Text>
        </View>
      </View>
    </View>
  );
};

export default orderPreparing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: "#F7F7F7",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1C1C1E",
    marginTop: 20,
    marginBottom: 16,
  },
  orderCard: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
    marginBottom: 20,
    position: "relative",
  },
  orderHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  restaurantInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  restaurantIcon: {
    width: 28,
    height: 28,
    borderRadius: 50,
    backgroundColor: "#F5F5F5",
  },
  restaurantName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1C1C1E",
  },
  orderTag: {
    backgroundColor: "#FFF0ED",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  orderTagText: {
    color: "#FF593C",
    fontSize: 12,
    fontWeight: "600",
  },
  estimatedLabel: {
    color: "#8E8E93",
    fontSize: 13,
    marginTop: 10,
  },
  estimatedTime: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1C1C1E",
    marginTop: 4,
  },
  foodImage: {
    width: 40,
    height: 25,
    position: "absolute",
    right: 16,
    bottom: 16,
  },
  statusCard: {
    backgroundColor: "#FFF6F2",
    borderRadius: 12,
    padding: 12,
    marginBottom: 20,
  },
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  statusText: {
    color: "#FF593C",
    fontSize: 13.5,
    flex: 1,
  },
  promoCard: {
    backgroundColor: "#F5F3FF",
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  promoTextBox: {
    flex: 1,
    paddingRight: 12,
  },
  promoTitle: {
    color: "#1C1C1E",
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 4,
  },
  promoSubtitle: {
    color: "#6C6C6C",
    fontSize: 13,
    marginBottom: 10,
  },
  exploreButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignSelf: "flex-start",
    borderWidth: 1,
    borderColor: "#E3E3E3",
  },
  exploreButtonText: {
    color: "#1C1C1E",
    fontSize: 13,
    fontWeight: "500",
  },
  promoImage: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    backgroundColor: "#EAEAEA",
    borderRadius: 10,
  },
  deliveryRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
    marginTop: 10,
    gap: 12,
  },
  deliveryDot: {
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: "#FFF6F2",
    justifyContent: "center",
    alignItems: "center",
  },
  deliveryLabel: {
    fontSize: 13,
    color: "#8E8E93",
  },
  deliveryText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1C1C1E",
  },
});
