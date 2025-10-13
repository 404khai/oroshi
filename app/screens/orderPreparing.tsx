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
import ShieldIcon from "@/components/icons/ShieldIcon";
import CloseIcon from "@/components/icons/CloseIcon";

const orderPreparing = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Close Button */}
      <TouchableOpacity style={styles.closeButton} onPress={() => router.push("/")}>
        <CloseIcon />
      </TouchableOpacity>

      {/* Header */}
      <Text style={styles.title}>Hang in there, we’re on it!</Text>

      {/* Order Summary Card */}
      <View style={styles.orderCard}>
        <View style={styles.orderHeader}>
          <View style={styles.restaurantInfo}>
            <Image
              source={require("@/assets/images/restaurantLogo.png")} // Placeholder
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
          source={require("@/assets/images/food.png")} // Placeholder
          style={styles.foodImage}
        />
      </View>

      {/* Preparing Info Card */}
      <View style={styles.statusCard}>
        <View style={styles.statusRow}>
          <Text>👍</Text>
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
          <TouchableOpacity style={styles.exploreButton} onPress={() => router.push("/screens/orderDelivered")}>
            <Text style={styles.exploreButtonText}>Explore Now</Text>
          </TouchableOpacity>
        </View>

        <Image
          source={require("@/assets/images/rider.png")} // Placeholder
          style={styles.promoImage}
        />
      </View>

      {/* Delivery Info */}
      <View style={styles.deliveryRow}>
        <View style={styles.deliveryDot}>
            <ShieldIcon/>
        </View>
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
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1C1C1E",
    marginTop: 20,
    marginBottom: 16,
  },
  orderCard: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 16,
    shadowColor: 'rgb(0, 0, 0, 0.3)',
    shadowOffset: {
        width: 0,
        height: 4, // move shadow down
    },
    shadowOpacity: 0.1,  // control transparency
    shadowRadius: 16,    // 👈 this is your blur
    elevation: 8,
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
    backgroundColor: "#FFF2F2",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  orderTagText: {
    color: "#FF593C",
    fontSize: 12,
    fontWeight: "400",
  },
  estimatedLabel: {
    color: "#8E8E93",
    fontSize: 14,
    marginTop: 10,
  },
  estimatedTime: {
    fontSize: 20,
    fontWeight: "600",
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
    backgroundColor: "#FFEFE3",
    borderRadius: 16,
    padding: 12,
    marginBottom: 20,
  },
  statusRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
  },
  statusText: {
    color: "#8E8E93",
    fontSize: 14,
    flex: 1,
  },
  promoCard: {
    backgroundColor: "#EFEFFF",
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
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 4,
  },
  promoSubtitle: {
    color: "#8E8E93",
    fontSize: 14,
    marginBottom: 10,
  },
  exploreButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    paddingVertical: 4,
    paddingHorizontal: 12,
    alignSelf: "flex-start",
  },
  exploreButtonText: {
    color: "#1C1C1E",
    fontSize: 12,
    fontWeight: 400,
  },
  promoImage: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    borderRadius: 10,
  },
  deliveryRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
    marginTop: 10,
    bottom: -200,
    position: 'relative',
    gap: 12,
  },
  deliveryDot: {
    width: 40,
    height: 40,

    borderRadius: 50,
    backgroundColor: "#F7F8FA",
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
  },
  deliveryLabel: {
    fontSize: 14,
    color: "#8E8E93",
  },
  deliveryText: {
    fontSize: 16,
    fontWeight: 600,
    color: "#1C1C1E",
  },
});
