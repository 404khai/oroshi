import BackArrowIcon from '@/components/icons/BackArrowIcon';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import EditIcon from '../../components/icons/EditIcon';
import GreenTagIcon from '../../components/icons/GreenTagIcon';
import ProfileIcon2 from '../../components/icons/ProfileIcon2';
// ...imports same as before

const checkout = () => {
  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.push("/");
    }
  };

  const router = useRouter()
  const [quantity, setQuantity] = useState(1);

  // Make it an array so we can map multiple items
  const orderSummary = [
    {
      id: 1,
      name: "Salmon Nigiri Set",
      price: 12.5,
      desc: "Delicious salmon nigiri with fresh wasabi",
      image: require("../../assets/images/salmonNigiri.png"),
    },
    {
      id: 2,
      name: "Deluxe Bento",
      price: 14.0,
      desc: "Tasty deluxe bento box with mixed sushi",
      image: require("../../assets/images/deluxeBento.png"),
    },
  ];

  // Calculate total
  const total = orderSummary.reduce(
    (sum, item) => sum + item.price * quantity,
    0
  ).toFixed(2);

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <BackArrowIcon />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Checkout</Text>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <EditIcon />
        </TouchableOpacity>
      </View>

      {/* Scrollable Content */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.orderBox}>
          {/* 🔹 Map twice over orderSummary */}
          {orderSummary.map((order, index) => (
            <React.Fragment key={order.id}>
                <View style={styles.orderCard}>
                <Image source={order.image} style={styles.orderImage} />
                <View style={{ flex: 1, marginLeft: 12 }}>
                    <Text style={styles.orderName}>{order.name}</Text>
                    <Text style={styles.orderDesc}>{order.desc}</Text>
                    <View style={styles.rowBetween}>
                    <Text style={styles.orderPrice}>${order.price.toFixed(2)}</Text>
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

                {/* Divider only BETWEEN items */}
                {index < orderSummary.length - 1 && (
                <View style={styles.divider} />
                )}
            </React.Fragment>
            ))}


          {/* 🔹 Total only (removed Place Order button) */}
        
        </View>
      </ScrollView>

      <View style={styles.card}>
        <View style={styles.cardRow}>
          <View style={styles.row}>
            <View style={styles.profileIcon}>
                <ProfileIcon2/>
            </View>
            <Text style={styles.text}>Deliver to: M. Takahashi</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#999" />
        </View>

        <View style={styles.divider} />

        <View style={styles.cardRow}>
          <View style={styles.row}>
            <View style={styles.locationIcon}>
                <GreenTagIcon/>
            </View>
            <Text style={styles.discountText}>20% OFF Applied</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#999" />
        </View>
      </View>

      {/* Checkout Summary */}
      <View style={styles.summary}>
        <View style={styles.summaryBox}>
            <View style={styles.rowBetween}>
                <Text style={styles.summaryTitle}>Checkout</Text>
                <Text style={styles.time}>30-45 mins</Text>
            </View>

            <View style={styles.rowBetween}>
                <Text style={styles.label}>Subtotal</Text>
                <Text style={styles.value}>$26.50</Text>
            </View>

            <View style={styles.rowBetween}>
                <Text style={styles.label}>Delivery Fee</Text>
                <Text style={styles.value}>$3.00</Text>
            </View>

            <View style={styles.rowBetween}>
                <Text style={styles.label}>Discount</Text>
                <Text style={styles.value}>- $6.50</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.rowBetween}>
                <Text style={styles.totalLabel}>Total</Text>
                <Text style={styles.totalValue}>$23.00</Text>
            </View>
        </View>

        <TouchableOpacity style={styles.continueBtn} onPress={() => router.push("/screens/checkout2")}>
            <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </View>

      {/* Continue Button */}
      
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#fffdfe',
    
  },
  scrollView: {
    flexDirection: 'column',
    paddingHorizontal: 20,
  },
  scrollContent: {
    paddingTop: Platform.OS === 'ios' ? 170 : 40,
    paddingBottom: 24,
    flexDirection: 'column',
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


  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 12,
    gap:16,
    marginBottom: 16,
    height: 136,
    marginHorizontal: 20,
    shadowColor: 'rgb(0, 0, 0, 0.3)',
    shadowOffset: {
        width: 0,
        height: 4, // move shadow down
    },
    shadowOpacity: 0.1,  // control transparency
    shadowRadius: 16,    // 👈 this is your blur
    elevation: 8,
  },
  row: { flexDirection: "row", alignItems: "center" },
  cardRow: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center" ,
    width: '100%',
    height: 40
  },
  profileIcon:{
    padding: 10,
    backgroundColor: '#F7F8FA',
    borderRadius: 50
  },
  locationIcon:{
    padding: 10,
    backgroundColor: '#EDFFF3',
    borderRadius: 50
  },
  text: {
    marginLeft: 8,
    fontSize: 15,
    color: "#808087",
  },
  discountText: {
    marginLeft: 8,
    fontSize: 15,
    color: "#44B46C",
    fontWeight: "500",
  },
  summaryBox:{
    height: 196,
    gap: 10,
  },
  summary: {
    flexDirection: 'column',
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 34
  },
  summaryTitle: { fontSize: 14, fontWeight: "600", color: '#1C1C1E' },
  time: { fontSize: 14, fontWeight: "600", color: "#1C1C1E" },
  label: { fontSize: 14, fontWeight: "400", color: "#8E8E93", marginVertical: 4 },
  value: { fontSize: 14, fontWeight: "400", color: "#8E8E93", marginVertical: 4 },
  totalLabel: { fontSize: 16, fontWeight: "600", color: '#1C1C1E' },
  totalValue: { fontSize: 16, fontWeight: "600", color: '#1C1C1E' },
  continueBtn: {
    backgroundColor: "#FF593C",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  continueText: { color: "#fff", fontSize: 14, fontWeight: "400" },
});

export default checkout;