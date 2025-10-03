import React from 'react';
import { useRouter } from 'expo-router';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Platform,
} from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import Svg, { Path, Circle } from 'react-native-svg';

const HomeScreen = () => {
  const categories = [
    { id: 1, name: 'Nigiri', image: require('../../assets/images/nigiri.png') },
    { id: 2, name: 'Sashimi', image: require('../../assets/images/sashimi.png') },
    { id: 3, name: 'Bento', image: require('../../assets/images/bento.png') },
    { id: 4, name: 'Maki', image: require('../../assets/images/maki.png') },
  ];

  const sushiItems = [
    {
      id: 1,
      name: 'Sakura Sushi',
      rating: 4.8,
      time: '25 mins',
      image: require('../../assets/images/sakuraSushi.png')
    },
    {
      id: 2,
      name: 'Tokyo Delights',
      rating: 4.5,
      time: '30 mins',
      image: require('../../assets/images/tokyoDelights.png')
    },
    {
      id: 3,
      name: 'Sushi World',
      rating: 4.5,
      time: '32 mins',
      image: require('../../assets/images/sushiWorld.png')
    },
    {
      id: 4,
      name: 'Sushi Express',
      rating: 4.2,
      time: '34 mins',
      image: require('../../assets/images/sushiXpress.png')
    },
  ];

  const NotificationIcon = () => (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M12.5165 15.8833C12.5165 17.2583 11.3915 18.3833 10.0165 18.3833C9.33315 18.3833 8.69981 18.1 8.24981 17.65C7.79981 17.2 7.51648 16.5666 7.51648 15.8833"
        stroke="#1C1C1E"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <Path
        d="M10.0175 1.6748C10.2518 1.67482 10.4829 1.68915 10.71 1.71684C11.1137 1.76606 11.3166 2.19794 11.2023 2.58818C11.0935 2.95946 10.7201 3.21568 10.3343 3.18669C10.2297 3.17883 10.124 3.17482 10.0175 3.1748C7.67348 3.1748 5.76765 5.0808 5.76752 7.4248V9.83301C5.76752 10.1773 5.69682 10.5694 5.59955 10.9199C5.50218 11.2707 5.36079 11.641 5.18646 11.9336L5.18451 11.9365L4.2265 13.5283C4.03689 13.8436 4.03241 14.1251 4.10931 14.333C4.18643 14.5413 4.37416 14.7537 4.72162 14.8721L5.36908 15.0732C8.62134 16.0153 12.0821 15.9487 15.3046 14.8721C15.3059 14.8714 15.3073 14.8709 15.3087 14.8704C15.856 14.6877 16.1032 14.034 15.8 13.5278C15.7999 13.5276 15.7997 13.5277 15.7997 13.5278C15.7997 13.528 15.7996 13.528 15.7995 13.5279L14.8417 11.9365L14.8342 11.9252C14.834 11.925 14.8339 11.9246 14.8339 11.9243C14.8339 11.924 14.8338 11.9237 14.8337 11.9234C14.6669 11.634 14.5294 11.2675 14.4335 10.918C14.3378 10.5688 14.2675 10.1773 14.2675 9.83301V9.61292C14.2675 9.16558 14.7079 8.85094 15.1489 8.92643C15.4874 8.98439 15.7675 9.26354 15.7675 9.607V9.83301C15.7675 9.99701 15.8048 10.2478 15.8798 10.5215C15.9531 10.7888 16.0471 11.0216 16.1288 11.166L17.0845 12.7543C17.0848 12.7547 17.0851 12.755 17.0854 12.7554C17.0857 12.7557 17.086 12.7561 17.0862 12.7565C17.8807 14.082 17.2448 15.808 15.7792 16.2939C12.0336 17.5453 7.99167 17.5463 4.24603 16.2949L4.24408 16.2939C3.51 16.0455 2.95282 15.528 2.70306 14.8535C2.45315 14.1782 2.5396 13.4226 2.94135 12.7549L3.90033 11.1631C3.98375 11.022 4.07932 10.7884 4.15424 10.5186C4.22965 10.2467 4.26752 9.99666 4.26752 9.83301V7.4248C4.26765 4.25237 6.84505 1.6748 10.0175 1.6748Z"
        fill="#1C1C1E"
      />
      <Circle cx="16" cy="4" r="4" fill="#FF593C" />
    </Svg>
  );

  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Scrollable Content */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Categories */}
        <View style={styles.categoriesContainer}>
          {categories.map((category) => (
            <TouchableOpacity key={category.id} style={styles.categoryItem}>
              <View style={styles.categoryImageContainer}>
                <Image source={category.image} style={styles.categoryImage} />
              </View>
              <Text style={styles.categoryText}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Explore Sushi Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Explore Sushi</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>

        {/* Sushi Grid */}
        <View style={styles.sushiGrid}>
          {sushiItems.map((item) => (
            <View key={item.id} style={styles.sushiCard}>
              <View style={styles.imageContainer}>
                <Image source={item.image} style={styles.sushiImage} />
              </View>
              <View style={styles.sushiInfo}>
                <View style={styles.sushiHeader}>
                  <Text style={styles.sushiName}>{item.name}</Text>
                  <TouchableOpacity style={styles.favoriteButton}>
                    <Ionicons name="heart-outline" size={18} color="#FF6B6B" />
                  </TouchableOpacity>
                </View>
                <View style={styles.sushiMeta}>
                  <Ionicons name="star" size={14} color="#FF593C" />
                  <Text style={styles.rating}>{item.rating}</Text>
                  <Text style={styles.separator}>·</Text>
                  <Text style={styles.time}>{item.time}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Fixed Top Bar with Blur */}
      <BlurView intensity={80} style={styles.topBarContainer}>
        <View style={styles.topBar}>
          {/* Delivery Address */}
          <View style={styles.deliverySection}>
            <TouchableOpacity style={styles.notificationButton}>
              <Ionicons name="location-outline" size={20} color="#1C1C1E" />
            </TouchableOpacity>
            
            <View style={styles.addressContainer}>
              <Text style={styles.deliveryLabel}>Deliver now</Text>
              <View style={styles.addressRow}>
                <Text style={styles.addressText}>123 Tokyo Lane</Text>
                <Ionicons name="chevron-down" size={16} color="#828282" />
              </View>
            </View>
            <TouchableOpacity style={styles.notificationButton} onPress={() => router.push("/screens/notifications")}>
              <NotificationIcon />
            </TouchableOpacity>
          </View>

          {/* Search Bar */}
          <View style={styles.searchContainer}>
            <Ionicons
              name="search"
              size={20}
              color="#1C1C1E"
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Search sushi, rolls, sashimi..."
              placeholderTextColor="#8E8E93"
            />
            <TouchableOpacity style={styles.voiceButton}>
              <Ionicons name="mic-outline" size={20} color="#8E8E93" />
            </TouchableOpacity>
          </View>
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
    paddingTop: Platform.OS === 'ios' ? 180 : 180,
    paddingBottom: 24,
  },
  topBarContainer: {
    position: 'absolute',
    backgroundColor: '#fffdfe',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    paddingTop: Platform.OS === 'ios' ? 50 : 10,
  },
  topBar: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    paddingBottom: 20,
    backgroundColor: '#fffdfe',
  },
  deliverySection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  addressContainer: {
    flex: 1,
    marginLeft: 8,
  },
  deliveryLabel: {
    fontSize: 14,
    color: '#8E8E93',
    marginBottom: 2,
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1C1C1E',
    marginRight: 4,
  },
  notificationButton: {
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    paddingHorizontal: 12,
    height: 48,
    shadowColor: 'rgb(0, 0, 0, 0.3)',
    shadowOffset: {
        width: 0,
        height: 4, // move shadow down
    },
    shadowOpacity: 0.1,  // control transparency
    shadowRadius: 16,    // 👈 this is your blur
    elevation: 8, 
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#8E8E93',
  },
  voiceButton: {
    padding: 4,
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  categoryItem: {
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 19,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    shadowColor: 'rgb(0, 0, 0, 0.3)',
    shadowOffset: {
        width: 0,
        height: 4, // move shadow down
    },
    shadowOpacity: 0.1,  // control transparency
    shadowRadius: 16,    // 👈 this is your blur
    elevation: 16,
  },
  categoryImageContainer: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  categoryText: {
    fontSize: 12,
    color: '#1C1C1E',
    fontWeight: '500',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1C1C1E',
  },
  seeAllText: {
    fontSize: 16,
    color: '#FF593C',
    fontWeight: '600',
  },
  sushiGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 12,
    gap: 12
  },
  sushiCard: {
    width: 161,
    padding: 12,
    flexDirection: 'column',
    gap: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    shadowColor: 'rgb(0, 0, 0, 0.3)',
    shadowOffset: {
        width: 0,
        height: 4, // move shadow down
    },
    shadowOpacity: 0.1,  // control transparency
    shadowRadius: 16,    // 👈 this is your blur
    elevation: 16, 
  },
  imageContainer: {
    width: 137,
    alignItems: 'center',
    justifyContent: 'center',
    height: 112,
  },
  sushiImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  sushiInfo: {
    paddingHorizontal: 4,
  },
  sushiHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  sushiName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1C1C1E',
    flex: 1,
  },
  favoriteButton: {
    padding: 2,
  },
  sushiMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 13,
    color: '#1C1C1E',
    fontWeight: '500',
    marginLeft: 4,
  },
  separator: {
    fontSize: 13,
    color: '#9CA3AF',
    marginHorizontal: 6,
  },
  time: {
    fontSize: 13,
    color: '#6B7280',
  },
});

export default HomeScreen;