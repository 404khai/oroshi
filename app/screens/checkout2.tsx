import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import Svg, { Path, Rect, G, Defs, ClipPath } from 'react-native-svg';
// import Header from '../components/Header'; // your existing header component

export default function checkout2() {
  return (
    <View style={styles.container}>
      {/* <Header title="Checkout" /> */}

      <ScrollView contentContainerStyle={styles.content}>
        {/* Map and Pin Section */}
        <View style={styles.mapContainer}>
          <Image source={require('../../assets/images/map.png')} style={styles.map}/>
          <TouchableOpacity style={styles.editPinButton}>
            <Text style={styles.editPinText}>Edit Pin</Text>
          </TouchableOpacity>
        </View>

        {/* Address Info Section */}
        <View style={styles.infoCard}>
          {/* Home */}
          <View style={styles.row}>
            <View style={styles.iconBg}>
                <HomeIcon />
            </View>
            <View style={styles.textBox}>
              <Text style={styles.label}>Home</Text>
              <Text style={styles.value}>123 Tokyo Lane</Text>
            </View>
          </View>

          <View style={styles.divider} />

          {/* Phone */}
          <View style={styles.row}>
            <View style={styles.iconBg}>
                <PhoneIcon />
            </View>
            
            <View style={styles.textBox}>
              <Text style={styles.label}>Phone</Text>
              <Text style={styles.value}>+81 03-4567-8901</Text>
            </View>
          </View>

          <View style={styles.divider} />

          {/* Delivery Time */}
          <View style={styles.row}>
            <View style={styles.iconBg}>
                <ClockIcon />
            </View>
            <View style={styles.textBox}>
              <Text style={styles.label}>Delivery Time</Text>
              <Text style={styles.value}>30–45 mins</Text>
            </View>
          </View>
        </View>

        {/* Payment Section */}
        <View style={styles.paymentCard}>
          <View style={styles.paymentOption}>
            <ApplePayIcon />
            <Text style={styles.paymentText}>Apple Pay</Text>
          </View>

          <View style={styles.paymentOption}>
            <MastercardIcon />
            <Text style={styles.paymentText}>xxxx-9010</Text>
          </View>

          <TouchableOpacity style={styles.paymentOption}>
            <View style={styles.addCardCircle}>
              <Text style={{ fontSize: 20, color: '#888' }}>+</Text>
            </View>
            <Text style={styles.paymentText}>Add new card</Text>
          </TouchableOpacity>
        </View>

        {/* Total Section */}
        <View style={styles.footer}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>$23.00</Text>
        </View>

        {/* Place Order Button */}
        <TouchableOpacity style={styles.orderButton}>
          <Text style={styles.orderButtonText}>Place Order</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

/* SVG ICONS */
const HomeIcon = () => (
  <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <Path
      d="M7.51675 2.36667L3.02508 5.86667C2.27508 6.45 1.66675 7.69167 1.66675 8.63334V14.8083C1.66675 16.7417 3.24175 18.325 5.17508 18.325H14.8251C16.7584 18.325 18.3334 16.7417 18.3334 14.8167V8.75C18.3334 7.74167 17.6584 6.45 16.8334 5.875L11.6834 2.26667C10.5167 1.45 8.64175 1.49167 7.51675 2.36667Z"
      stroke="#808087"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.0002 14.9917V12.4917"
      stroke="#808087"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const PhoneIcon = () => (
  <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <Path
      d="M17.4758 14.7475C17.4758 15.0175 17.4158 15.295 17.2883 15.565C17.1608 15.835 16.9958 16.09 16.7783 16.33C16.4108 16.735 16.0058 17.0275 15.5483 17.215C15.0983 17.4025 14.6108 17.5 14.0858 17.5C13.3208 17.5 12.5033 17.32 11.6408 16.9525C10.7783 16.585 9.91579 16.09 9.06079 15.4675C8.19829 14.8375 7.38079 14.14 6.60079 13.3675C5.82829 12.5875 5.13079 11.77 4.50829 10.915C3.89329 10.06 3.39829 9.205 3.03829 8.3575C2.67829 7.5025 2.49829 6.685 2.49829 5.905C2.49829 5.395 2.58829 4.9075 2.76829 4.4575C2.94829 4 3.23329 3.58 3.63079 3.205C4.11079 2.7325 4.63579 2.5 5.19079 2.5C5.40079 2.5 5.61079 2.545 5.79829 2.635C5.99329 2.725 6.16579 2.86 6.30079 3.055L8.04079 5.5075C8.17579 5.695 8.27329 5.8675 8.34079 6.0325C8.40829 6.19 8.44579 6.3475 8.44579 6.49C8.44579 6.67 8.39329 6.85 8.28829 7.0225C8.19079 7.195 8.04829 7.375 7.86829 7.555L7.29829 8.1475C7.21579 8.23 7.17829 8.3275 7.17829 8.4475C7.17829 8.5075 7.18579 8.56 7.20079 8.62C7.22329 8.68 7.24579 8.725 7.26079 8.77C7.39579 9.0175 7.62829 9.34 7.95829 9.73C8.29579 10.12 8.65579 10.5175 9.04579 10.915C9.45079 11.3125 9.84079 11.68 10.2383 12.0175C10.6283 12.3475 10.9508 12.5725 11.2058 12.7075C11.2433 12.7225 11.2883 12.745 11.3408 12.7675C11.4008 12.79 11.4608 12.7975 11.5283 12.7975C11.6558 12.7975 11.7533 12.7525 11.8358 12.67L12.4058 12.1075C12.5933 11.92 12.7733 11.7775 12.9458 11.6875C13.1183 11.5825 13.2908 11.53 13.4783 11.53C13.6208 11.53 13.7708 11.56 13.9358 11.6275C14.1008 11.695 14.2733 11.7925 14.4608 11.92L16.9433 13.6825C17.1383 13.8175 17.2733 13.975 17.3558 14.1625C17.4308 14.35 17.4758 14.5375 17.4758 14.7475Z"
      stroke="#808087"
      strokeWidth="1.35"
      strokeMiterlimit="10"
    />
  </Svg>
);

const ClockIcon = () => (
  <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <Path
      d="M17.9166 9.99995C17.9166 14.3699 14.3699 17.9166 9.99992 17.9166C5.62992 17.9166 2.08325 14.3699 2.08325 9.99995C2.08325 5.62995 5.62992 2.08328 9.99992 2.08328C14.3699 2.08328 17.9166 5.62995 17.9166 9.99995Z"
      stroke="#808087"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.9368 12.5174L10.4826 11.0528C10.0551 10.7995 9.70679 10.1899 9.70679 9.69118V6.44534"
      stroke="#808087"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const ApplePayIcon = () => (
  <Svg width="27" height="20" viewBox="0 0 27 20" fill="none">
    <Rect x="0.5" y="2.5" width="26" height="15" rx="2.5" stroke="#1C1C1E" />
    <Path
      d="M7.7522 7.0314C7.52387 7.30158 7.15847 7.51477 6.7931 7.48428C6.74744 7.11896 6.9263 6.73073 7.13563 6.49094C7.36396 6.21314 7.76361 6.01522 8.08712 6C8.12517 6.38058 7.97672 6.75356 7.7522 7.0314Z"
      fill="#1C1C1E"
    />
  </Svg>
);

const MastercardIcon = () => (
  <Svg width="27" height="20" viewBox="0 0 27 20" fill="none">
    <G clipPath="url(#clip0_1_2437)">
      <Path d="M10.2148 4.48834H16.3035V15.4287H10.2148V4.48834Z" fill="#FF5F00" />
      <Path
        d="M10.6015 9.95853C10.6015 7.7357 11.6453 5.76408 13.2496 4.48831C12.0706 3.56053 10.5823 3 8.95862 3C5.11196 3 2 6.11196 2 9.95853C2 13.8051 5.11196 16.9171 8.95853 16.9171C10.5822 16.9171 12.0705 16.3565 13.2496 15.4287C11.6453 14.1723 10.6015 12.1814 10.6015 9.95853Z"
        fill="#EB001B"
      />
      <Path
        d="M24.5184 9.95853C24.5184 13.805 21.4064 16.9171 17.5598 16.9171C15.9362 16.9171 14.4479 16.3565 13.2688 15.4287C14.8924 14.153 15.9169 12.1814 15.9169 9.95853C15.9169 7.7357 14.8731 5.76408 13.2688 4.48831C14.4478 3.56053 15.9362 3 17.5598 3C21.4064 3 24.5184 6.13133 24.5184 9.95853Z"
        fill="#F79E1B"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1_2437">
        <Rect width="22.5409" height="14" fill="white" transform="translate(2 3)" />
      </ClipPath>
    </Defs>
  </Svg>
);

/* STYLES */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 16 },
  mapContainer: { alignItems: 'center', marginBottom: 20 },
  map: {
    width: '100%',
    height: 150,
    backgroundColor: '#eee',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapPlaceholder: { color: '#888' },
  divider: {
    height: 1, // thin line
    width: "100%", // take full width
    backgroundColor: "#EFEFF6", // your divider color
  },
  editPinButton: {
    position: 'absolute',
    bottom: 38,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    
  },
  editPinText: { 
    color: '#1C1C1E', 
    fontWeight: '400' ,
  },
  infoCard: {
    flexDirection: 'column',
    gap: 8,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 12,
    marginBottom: 20,
    shadowColor: 'rgb(0, 0, 0, 0.3)',
    shadowOffset: {
        width: 0,
        height: 4, // move shadow down
    },
    shadowOpacity: 0.1,  // control transparency
    shadowRadius: 16,    // 👈 this is your blur
    elevation: 8,
  },
  row: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingVertical:8,
    width: '100%'
  },
  iconBg:{
    padding: 10,
    backgroundColor: '#F7F8FA',
    borderRadius: 20,
  },
  textBox: { marginLeft: 12 },
  label: { fontSize: 14, color: '#808087' },
  value: { fontSize: 15, fontWeight: '600', color: '#000' },
  paymentCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: 'rgb(0, 0, 0, 0.3)',
    shadowOffset: {
        width: 0,
        height: 4, // move shadow down
    },
    shadowOpacity: 0.1,  // control transparency
    shadowRadius: 16,    // 👈 this is your blur
    elevation: 8,
  },
  paymentOption: { flexDirection: 'row', alignItems: 'center', marginBottom: 14 },
  paymentText: { marginLeft: 12, fontSize: 15, color: '#000' },
  addCardCircle: {
    width: 27,
    height: 27,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 6,
    marginBottom: 10,
  },
  totalLabel: { fontSize: 16, fontWeight: '500', color: '#555' },
  totalValue: { fontSize: 18, fontWeight: '700', color: '#000' },
  orderButton: {
    backgroundColor: '#FF5C39',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  orderButtonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
