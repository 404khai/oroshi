import BackArrowIcon from '@/components/icons/BackArrowIcon'
import EditIcon2 from '@/components/icons/EditIcon2'
import LocationIcon from '@/components/icons/LocationIcon'
import MapPinIcon from '@/components/icons/MapPinIcon'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { ImageBackground, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

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

            {/* Triangle tail */}
            <View style={styles.triangle} />
        </View>

        {/* Pin marker */}
        <View style={styles.pinContainer}>
          <MapPinIcon/>
        </View>
      </ImageBackground>

      {/* Bottom section */}
      <View style={styles.bottomSection}>
        <View style={styles.footer}>
            <View style={styles.locationBg}>
                <LocationIcon/>
            </View>
            <View style={styles.deliveryLocation}>
                <Text style={styles.addressTxt}>Address</Text>
                <Text style={styles.addressTxt2}>123 Tokyo Lane</Text>
            </View>
            <EditIcon2/>
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
  pinContainer: {
    position: 'absolute',
    top: '50%',
    alignItems: 'center',
    justifyContent: 'center',
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
    alignItems: 'center',
  },
  deliveryText: {
    color: '#804521',
    fontSize: 14,
    fontWeight: '400',
  },
  triangle: {
    position: 'absolute',
    bottom: -8, // pushes it below the bubble
    left: '55%',
    marginLeft: -8, // centers horizontally (half of border width)
    width: 0,
    height: 0,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderTopWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#FFEADB', // same as bubble background
  },
  locationBg:{
    padding: 10, 
    borderRadius: 99,
    backgroundColor: '#F7F8FA'
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
    width: '75%',
    height: '100%'
  },
  addressTxt: {
    fontSize: 14,
    fontWeight: '400',
    color: '#8E8E93',
  },
  addressTxt2: {
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
