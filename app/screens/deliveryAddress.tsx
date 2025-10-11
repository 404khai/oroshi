import { View, Text, TouchableOpacity, Platform, StyleSheet } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import EditIcon from '@/components/icons/EditIcon'

const deliveryAddress = () => {
    const router = useRouter()

    const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="#1C1C1E" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Delivery Address</Text>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="search-outline" size={22} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalValue}>$23.00</Text>
      </View>
      
              {/* Place Order Button */}
      <TouchableOpacity style={styles.orderButton} onPress={() => router.push("/screens/deliveryAddress")}>
        <Text style={styles.orderButtonText}>Confirm Pin Location</Text>
      </TouchableOpacity>
    </View>
  )
}

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

 footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 6,
    marginBottom: 10,
  },
  totalLabel: { fontSize: 16, fontWeight: '500', color: '#1C1C1E' },
  totalValue: { fontSize: 16, fontWeight: '500', color: '#1C1C1E' },
  orderButton: {
    backgroundColor: '#FF5C39',
    borderRadius: 99,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  orderButtonText: { color: '#fff', fontSize: 14, fontWeight: '400' },

});
export default deliveryAddress