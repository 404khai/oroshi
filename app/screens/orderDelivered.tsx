import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import ChatIcon from "@/components/icons/ChatIcon";
import CallIcon2 from "@/components/icons/CallIcon2";

const orderDelivered = () => {
  const router = useRouter();
  const [rating, setRating] = useState<number>(0);
  const [feedback, setFeedback] = useState("");

  const handleRating = (value: number) => setRating(value);

  return (
    <View style={styles.container}>
      {/* Close Button */}
      <TouchableOpacity style={styles.closeButton} onPress={() => router.push("/")}>
        <Ionicons name="close" size={22} color="#1C1C1E" />
      </TouchableOpacity>

      <Text style={styles.title}>Enjoy your meal!</Text>

      {/* Order Summary Card */}
      <View style={styles.orderCard}>
        <View style={styles.orderHeader}>
          <View style={styles.restaurantInfo}>
            <Image
              source={require("@/assets/images/sushiIcon.png")} // Replace with your asset
              style={styles.restaurantIcon}
            />
            <Text style={styles.restaurantName}>Sakura Sushi</Text>
          </View>
          <View style={styles.orderTag}>
            <Text style={styles.orderTagText}>#ORD-8452</Text>
          </View>
        </View>

        <Text style={styles.totalPaid}>Total paid: $23.00</Text>
        <Text style={styles.orderStatus}>Order delivered</Text>

        <Image
          source={require("@/assets/images/sushi.png")} // Replace with your asset
          style={styles.foodImage}
        />
      </View>

      {/* Address and Time Card */}
      <View style={styles.infoCard}>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Address</Text>
          <Text style={styles.infoValue}>123 Tokyo Lane</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Delivered at</Text>
          <Text style={styles.infoValue}>08:45 AM</Text>
        </View>

        <View style={[styles.infoRow, styles.delivererRow]}>
          <View style={styles.delivererInfo}>
            <Image
              source={require("@/assets/images/alexei.png")} // Replace with your asset
              style={styles.avatar}
            />
            <View>
              <Text style={styles.deliveredBy}>Delivered by</Text>
              <Text style={styles.delivererName}>Alexei Volkov</Text>
            </View>
          </View>

          <View style={styles.contactButtons}>
            <TouchableOpacity style={styles.contactButton}>
              <ChatIcon />
            </TouchableOpacity>
            <TouchableOpacity style={styles.contactButton}>
              <CallIcon2 />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Feedback Card */}
      <View style={styles.feedbackCard}>
        <Text style={styles.feedbackTitle}>How was your experience?</Text>

        <View style={styles.starsRow}>
          {[1, 2, 3, 4, 5].map((i) => (
            <TouchableOpacity key={i} onPress={() => handleRating(i)}>
              <Ionicons
                name={i <= rating ? "star" : "star-outline"}
                size={28}
                color="#FF593C"
              />
            </TouchableOpacity>
          ))}
        </View>

        <TextInput
          style={styles.textInput}
          placeholder="Share your thoughts..."
          placeholderTextColor="#B0B0B0"
          multiline
          value={feedback}
          onChangeText={setFeedback}
        />
      </View>

      {/* Order Details Button */}
      <TouchableOpacity style={styles.orderButton}>
        <Text style={styles.orderButtonText}>Order Details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default orderDelivered;

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
  totalPaid: {
    color: "#8E8E93",
    fontSize: 14,
    marginTop: 8,
  },
  orderStatus: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1C1C1E",
    marginTop: 2,
  },
  foodImage: {
    width: 40,
    height: 24,
    position: "absolute",
    right: 16,
    bottom: 16,
  },
  infoCard: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  infoLabel: {
    color: "#8E8E93",
    fontSize: 14,
  },
  infoValue: {
    color: "#1C1C1E",
    fontSize: 14,
    fontWeight: "500",
  },
  delivererRow: {
    alignItems: "center",
  },
  delivererInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 50,
  },
  deliveredBy: {
    fontSize: 14,
    color: "#8E8E93",
  },
  delivererName: {
    fontSize: 14,
    color: "#1C1C1E",
    fontWeight: "600",
  },
  contactButtons: {
    flexDirection: "row",
    gap: 10,
  },
  contactButton: {
    backgroundColor: "#F7F8FA",
    borderRadius: 50,
    padding: 10,
  },
  feedbackCard: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
    marginBottom: 20,
  },
  feedbackTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1C1C1E",
    marginBottom: 12,
  },
  starsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#FF593C",
    borderRadius: 12,
    padding: 10,
    fontSize: 14,
    color: "#1C1C1E",
    height: 80,
    textAlignVertical: "top",
  },
  orderButton: {
    backgroundColor: "#FF593C",
    borderRadius: 99,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 30,
  },
  orderButtonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "500",
  },
});
