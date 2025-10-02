import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform,
} from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const notifications = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Orders', 'Promotions'];

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back(); // ✅ goes to previous page
    } else {
      router.push("/"); // ✅ fallback to index (home)
    }
  };

  const notifications = [
    {
      id: 1,
      icon: '🍱',
      iconBg: '#FFE8E8',
      title: 'Your order is on the way!',
      description: 'Alexei just picked up your sushi from Sakura Sushi 🍣',
      time: '5 min',
    },
    {
      id: 2,
      icon: '🎉',
      iconBg: '#FFE8E8',
      title: 'Get 20% off Nigiri sets today only',
      description: 'Today only! Treat yourself to fresh salmon nigiri 🍣',
      time: '7h',
    },
    {
      id: 3,
      icon: '🎟️',
      iconBg: '#FFE8E8',
      title: 'Voucher Earned',
      description: 'You earned a $5 voucher from your last order. Apply at checkout!',
      time: '2h',
    },
    {
      id: 4,
      icon: '📦',
      iconBg: '#FFE8E8',
      title: 'Order Delivered',
      description: "Enjoy your meal! Don't forget to rate Sakura Sushi! ⭐",
      time: '4h',
    },
    {
      id: 5,
      icon: '🔥',
      iconBg: '#FFE8E8',
      title: 'Trending Near You',
      description: 'Tokyo Delights is getting popular, 100+ orders this week!',
      time: '8h',
    },
  ];

  return (
    <View style={styles.container}>
      {/* Scrollable Content */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Notifications List */}
        {notifications.map((notification) => (
          <TouchableOpacity key={notification.id} style={styles.notificationItem}>
            <View style={[styles.iconContainer, { backgroundColor: notification.iconBg }]}>
              <Text style={styles.iconEmoji}>{notification.icon}</Text>
            </View>
            <View style={styles.notificationContent}>
              <View style={styles.notificationHeader}>
                <Text style={styles.notificationTitle} numberOfLines={1}>
                  {notification.title}
                </Text>
                <Text style={styles.notificationTime}>{notification.time}</Text>
              </View>
              <Text style={styles.notificationDescription} numberOfLines={2}>
                {notification.description}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Fixed Header with Blur */}
      <BlurView intensity={80} tint="light" style={styles.headerContainer}>
        <View style={styles.header}>
          {/* Top Bar */}
          <View style={styles.topBar}>
            <TouchableOpacity style={styles.backButton} onPress={handleBack}>
              <Ionicons name="arrow-back" size={24} color="#1C1C1E" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Notifications</Text>
            <View style={styles.placeholder} />
          </View>

          {/* Filter Buttons */}
          <View style={styles.filtersContainer}>
            {filters.map((filter) => (
              <TouchableOpacity
                key={filter}
                style={[
                  styles.filterButton,
                  activeFilter === filter && styles.filterButtonActive,
                ]}
                onPress={() => setActiveFilter(filter)}
              >
                <Text
                  style={[
                    styles.filterText,
                    activeFilter === filter && styles.filterTextActive,
                  ]}
                >
                  {filter}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
    paddingTop: 20,
  },
  scrollContent: {
    paddingTop: Platform.OS === 'ios' ? 170 : 150,
    paddingBottom: 24,
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
  },
  header: {
    paddingBottom: 16,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: Platform.OS === 'ios' ? 50 : 40,
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  backButton: {
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    shadowColor: 'rgb(0, 0, 0, 0.2)',
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
    shadowColor: 'rgb(0, 0, 0, 0.06)',
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
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
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
    flex: 1,
  },
  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
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
    color: '#9CA3AF',
    fontWeight: '400',
  },
  notificationDescription: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
});

export default notifications;