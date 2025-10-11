import { View, Text, TouchableOpacity, Platform, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import BackArrowIcon from '@/components/icons/BackArrowIcon'
import MapPinIcon from '@/components/icons/MapPinIcon'
import EditIcon from '@/components/icons/EditIcon'

const deliveryAddress = () => {
  const router = useRouter()

  const handleBack = () => {
    if (router.canGoBack()) router.back()
    else router.push("/")
  }

  // Replace this with your device image path or require()
  const backgroundImage = require('@/assets/images/mapBg.png')

  return (
    <View style={styles.container}>
      {/* Top bar */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <BackArrowIcon />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Delivery Address</Text>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="search-outline" size={22} color="black" />
        </TouchableOpacity>
      </View>

      {/* Background map section */}
      <ImageBackground source={backgroundImage} style={styles.mapContainer} resizeMode="cover">
        {/* Floating delivery message */}
        <View style={styles.deliveryBubble}>
          <Text style={styles.deliveryText}>Your order will be delivered here</Text>
        </View>

        {/* Pin marker */}
        <View style={styles.pinContainer}>
          <MapPinIcon/>
        </View>
      </ImageBackground>

      {/* Bottom section */}
      <View style={styles.bottomSection}>
        <View style={styles.footer}>
            <Ionicons name="location-outline" size={20} color="#1C1C1E" />
            <View style={styles.deliveryLocation}>
                <Text style={styles.totalLabel}>Address</Text>
                <Text style={styles.totalValue}>123 Tokyo Lane</Text>
            </View>
            <EditIcon/>
        </View>

        <TouchableOpacity style={styles.orderButton} onPress={() => router.push("/screens/chat")}>
          <Text style={styles.orderButtonText}>Confirm Pin Location</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdfe',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fffdfe',
    paddingTop: Platform.OS === 'ios' ? 50 : 40,
    paddingHorizontal: 20,
    zIndex: 10,
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
  mapContainer: {
    flex: 1,
    marginTop: 19,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deliveryBubble: {
    position: 'absolute',
    top: '38%',
    backgroundColor: '#FFEADB',
    borderRadius: 8,
    padding: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  deliveryText: {
    color: '#804521',
    fontSize: 14,
    fontWeight: '400',
  },
  pinContainer: {
    position: 'absolute',
    top: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pinOuter: {
    width: 40,
    height: 40,
    backgroundColor: '#FF5C39',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pinInner: {
    width: 14,
    height: 14,
    backgroundColor: '#fff',
    borderRadius: 7,
  },
  bottomSection: {
    backgroundColor: '#fff',
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  deliveryLocation:{
    width: '80%',
    backgroundColor: '#4dfe4e',
    height: '100%'
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1C1C1E',
  },
  totalValue: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1C1C1E',
  },
  orderButton: {
    backgroundColor: '#FF5C39',
    borderRadius: 99,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  orderButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '400',
  },
})

export default deliveryAddress
