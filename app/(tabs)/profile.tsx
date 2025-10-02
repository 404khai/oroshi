import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform,
} from 'react-native';
import { BlurView } from 'expo-blur';
import Svg, { Path } from "react-native-svg";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const profile = () => {
  const stats = [
    { value: '45', label: 'Orders' },
    { value: '12', label: 'Favorites' },
    { value: '5', label: 'Vouchers' },
  ];

  const menuItems = [
    {
      icon: 'receipt-outline',
      iconType: 'ionicons',
      title: 'My Orders',
      subtitle: 'View past & ongoing orders',
    },
    {
      icon: 'heart-outline',
      iconType: 'ionicons',
      title: 'Favorites',
      subtitle: 'See your saved dishes',
    },
    {
      icon: 'ticket-outline',
      iconType: 'material',
      title: 'My Vouchers',
      subtitle: 'Check available discounts',
    },
    {
      icon: 'card-outline',
      iconType: 'ionicons',
      title: 'Payment Methods',
      subtitle: 'Manage cards & wallets',
    },
    {
      icon: 'help-circle-outline',
      iconType: 'ionicons',
      title: 'Help & Support',
      subtitle: 'Contact us or FAQs',
    },
  ];

  const renderIcon = (item: { icon: any; iconType: any; title?: string; subtitle?: string; }) => {
    if (item.iconType === 'material') {
      return (
        <MaterialCommunityIcons
          name={item.icon}
          size={24}
          color="#9CA3AF"
        />
      );
    }
    return <Ionicons name={item.icon} size={24} color="#808087" />;
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Section */}
        <View style={styles.profileBox}>
            <View style={styles.profileSection}>
                <Image
                    source={require('../../assets/images/avatar2.png')}
                    style={styles.profileImage}
                />
                <View style={styles.profileInfo}>
                    <Text style={styles.profileName}>M. Takahashi</Text>
                    <TouchableOpacity style={styles.editButton}>
                        <Text style={styles.editButtonText}>Edit</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
            <View style={styles.divider} />

            {/* Stats Section */}
            <View style={styles.statsContainer}>
                {stats.map((stat, index) => (
                    <View key={index} style={styles.statItem}>
                    <Text style={styles.statValue}>{stat.value}</Text>
                    <Text style={styles.statLabel}>{stat.label}</Text>
                    </View>
                ))}
            </View>
        </View> 
        

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.menuItem,
                index === menuItems.length - 1 && styles.menuItemLast,
              ]}
            >
              <View style={styles.menuIconContainer}>
                {renderIcon(item)}
              </View>
              <View style={styles.menuContent}>
                <Text style={styles.menuTitle}>{item.title}</Text>
                <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
              </View>
              <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.86177 2.19514C4.60142 2.45549 4.60142 2.8776 4.86177 3.13795L9.7237 7.99988L4.86177 12.8618C4.60142 13.1222 4.60142 13.5443 4.86177 13.8046C5.12212 14.065 5.54423 14.065 5.80458 13.8046L11.1379 8.47128C11.3983 8.21093 11.3983 7.78882 11.1379 7.52847L5.80457 2.19514C5.54423 1.93479 5.12212 1.93479 4.86177 2.19514Z"
                    fill="#828282"
                />
              </Svg>

            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Fixed Top Bar with Blur */}
      <BlurView intensity={80} tint="light" style={styles.topBar}>
        <View style={styles.topBarContent}>
          <Text style={styles.topBarTitle}>Profile</Text>
          <TouchableOpacity style={styles.settingsButton}>
            <Ionicons name="settings-outline" size={24} color="#1F2937" />
          </TouchableOpacity>
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
  },
  scrollContent: {
    paddingTop: 80,
    paddingBottom: 40,
  },
  topBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    paddingBottom: 12,
    paddingHorizontal: 20,
    borderBottomWidth: 0,
    
  },
  topBarContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topBarTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1F2937',
  },
  settingsButton: {
    padding: 4,
  },
  profileBox:{
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    marginHorizontal: 20,
    marginBottom: 24,
    padding: 12,
    gap: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 1,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#FFD5BE'
  },
  profileInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 16,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
  },
  editButton: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    backgroundColor: '#FFF2F2',
    borderRadius: 30
  },
  editButtonText: {
    fontSize: 15,
    color: '#FF6B6B',
    fontWeight: '500',
  },
  divider: {
    height: 1, // thin line
    width: "100%", // take full width
    backgroundColor: "#EFEFF6", // your divider color
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    width: '100%',
    gap: 19,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F7F8FA',
    borderRadius: 12,
    padding: 10
  },
  statValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#8E8E93',
    fontWeight: '400',
  },
  menuContainer: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 16,
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  menuItemLast: {
    borderBottomWidth: 0,
  },
  menuIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F7F8FA',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  menuContent: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1C1C1E',
    marginBottom: 2,
  },
  menuSubtitle: {
    fontSize: 14,
    color: '#8E8E93',
    fontWeight: '400',
  },
});

export default profile;