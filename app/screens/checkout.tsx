import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Platform,
} from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import EditIcon from '../components/icons/EditIcon';

const checkout = () => {
  
  const handleBack = () => {
    if (router.canGoBack()) {
      router.back(); // ✅ goes to previous page
    } else {
      router.push("/"); // ✅ fallback to index (home)
    }
  };

  const [quantity, setQuantity] = useState(1);
  
    const orderSummary = {
      name: "Salmon Nigiri Set",
      price: 12.5,
      desc: "Delicious salmon nigiri with fresh wasabi",
      image: require("../../assets/images/salmonNigiri.png"),
    };
  
    
  
    const total = (orderSummary.price * quantity).toFixed(2);

  return (
    <View style={styles.container}>
      {/* Scrollable Content */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        
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
            <TouchableOpacity style={styles.placeOrderBtn} onPress={() => router.push("/screens/checkout")}>
            <Text style={styles.placeOrderText}>Place Order</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Fixed Header with Blur */}
      <BlurView intensity={80} tint="light" style={styles.headerContainer}>
        <View style={styles.header}>
          {/* Top Bar */}
          <View style={styles.topBar}>
            <TouchableOpacity style={styles.backButton} onPress={handleBack}>
              <Ionicons name="arrow-back" size={24} color="#1C1C1E" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Checkout</Text>

            <TouchableOpacity style={styles.backButton} onPress={handleBack}>
              <EditIcon></EditIcon>
            </TouchableOpacity>
            {/* <View style={styles.placeholder} /> */}
          </View>

          {/* Filter Buttons */}
          
        </View>
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdfe',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  scrollContent: {
    paddingTop: Platform.OS === 'ios' ? 170 : 150,
    paddingBottom: 24,
    flexDirection: 'column',
    backgroundColor: '#fffdfe',
    gap: 16
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    backgroundColor: '#fffdfe',
  },
  header: {
    paddingBottom: 16,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fffdfe',
    paddingTop: Platform.OS === 'ios' ? 50 : 40,
    paddingHorizontal: 20,
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
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1C1C1E',
  },
  placeholder: {
    width: 32,
  },
  filtersContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 12,
  },
  filterButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    shadowColor: 'rgb(0, 0, 0, 0.2)',
    shadowOffset: {
        width: 0,
        height: 4, // move shadow down
    },
    shadowOpacity: 0.1,  // control transparency
    shadowRadius: 16,    // 👈 this is your blur
    elevation: 8,
  },
  filterButtonActive: {
    backgroundColor: '#FF593C',
  },
  filterText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#8E8E93',
  },
  filterTextActive: {
    color: '#FFFFFF',
  },
  notificationItem: {
    flexDirection: 'row',
    padding: 12,
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
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  iconEmoji: {
    fontSize: 24,
  },
  notificationContent: {
    flexDirection: 'row',
  },
  notificationHeader: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 212,
    alignItems: 'flex-start',
  },
  notificationTitle: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    color: '#1C1C1E',
    marginRight: 8,
  },
  notificationTime: {
    fontSize: 13,
    color: '#888888',
    fontWeight: '400',
  },
  notificationDescription: {
    fontSize: 14,
    color: '#8E8E93',
    lineHeight: 20,
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
});

export default checkout;