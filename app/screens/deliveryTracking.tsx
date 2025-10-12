// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ImageBackground,
//   Image,
//   Dimensions,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { useRouter } from "expo-router";
// import Animated, {
//   useSharedValue,
//   useAnimatedStyle,
//   withSpring,
// } from "react-native-reanimated";
// import {
//   PanGestureHandler,
//   GestureHandlerRootView,
// } from "react-native-gesture-handler";
// import ChatIcon from "@/components/icons/ChatIcon";
// import CallIcon2 from "@/components/icons/CallIcon2";

// const { height } = Dimensions.get("window");

// const deliveryTracking = () => {
//   const router = useRouter();

//   const handleBack = () => {
//     if (router.canGoBack()) router.back();
//     else router.push("/");
//   };

//   // --- Reanimated shared value ---
//   const translateY = useSharedValue(0);
//   const MAX_TRANSLATE = -height * 0.35; // how far up the sheet can go
//   const MIN_TRANSLATE = 0; // resting position

//   const gestureHandler = (event: any) => {
//     translateY.value = Math.max(
//       Math.min(event.translationY, MIN_TRANSLATE),
//       MAX_TRANSLATE
//     );
//   };

//   const handleGestureEnd = (event: any) => {
//     if (event.translationY < -100) {
//       // slide up
//       translateY.value = withSpring(MAX_TRANSLATE, { damping: 15 });
//     } else {
//       // slide down
//       translateY.value = withSpring(MIN_TRANSLATE, { damping: 15 });
//     }
//   };

//   const animatedStyle = useAnimatedStyle(() => ({
//     transform: [{ translateY: translateY.value }],
//   }));

//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <View style={styles.container}>
//         {/* Background Image (map + scooter) */}
//         <ImageBackground
//           source={require("@/assets/images/scooterMap.png")}
//           style={styles.mapBackground}
//         >
//           {/* Top Floating Buttons */}
//           <View style={styles.topButtons}>
//             <TouchableOpacity style={styles.iconButton} onPress={handleBack}>
//               <Ionicons name="close" size={22} color="#1C1C1E" />
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.helpButton}>
//               <Text style={styles.helpText}>Help</Text>
//             </TouchableOpacity>
//           </View>
//         </ImageBackground>

//         {/* Draggable Bottom Sheet */}
//         <PanGestureHandler
//           onGestureEvent={gestureHandler}
//           onEnded={handleGestureEnd}
//         >
//           <Animated.View style={[styles.bottomSheet, animatedStyle]}>
//             {/* Small drag handle */}
//             <View style={styles.dragHandle} />

//             <Text style={styles.heading}>Heading your way</Text>
//             <Text style={styles.subText}>Arriving now</Text>

//             {/* Progress Bar */}
//             <View style={styles.progressContainer}>
//               {[
//                 { icon: "time-outline" },
//                 { icon: "cube-outline" },
//                 { icon: "bicycle-outline" },
//                 { icon: "home-outline" },
//               ].map((item, index) => (
//                 <View key={index} style={styles.stepItem}>
//                   <View
//                     style={[
//                       styles.stepCircle,
//                       index < 3 ? styles.activeCircle : styles.inactiveCircle,
//                     ]}
//                   >
//                     <Ionicons
//                       name={item.icon as any}
//                       size={16}
//                       color={index < 3 ? "#fff" : "#FF593C"}
//                     />
//                   </View>
//                   {index < 3 && <View style={styles.line} />}
//                 </View>
//               ))}
//             </View>

//             {/* Deliverer Info */}
//             <View style={styles.delivererRow}>
//               <View style={styles.delivererInfo}>
//                 <Image
//                   source={require("@/assets/images/alexei.png")}
//                   style={styles.avatar}
//                 />
//                 <View>
//                   <Text style={styles.delivererLabel}>Deliverer</Text>
//                   <Text style={styles.delivererName}>Alexei Volkov</Text>
//                 </View>
//               </View>

//               <View style={styles.contactButtons}>
//                 <TouchableOpacity
//                   style={styles.contactButton}
//                   onPress={() => router.push("/screens/chat")}
//                 >
//                   <ChatIcon />
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.contactButton}>
//                   <CallIcon2 />
//                 </TouchableOpacity>
//               </View>
//             </View>

//             {/* Order Details Button */}
//             <TouchableOpacity style={styles.orderButton}>
//               <Text style={styles.orderButtonText}>Order Details</Text>
//             </TouchableOpacity>
//           </Animated.View>
//         </PanGestureHandler>
//       </View>
//     </GestureHandlerRootView>
//   );
// };

// export default deliveryTracking;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   mapBackground: {
//     flex: 1,
//     resizeMode: "cover",
//     justifyContent: "space-between",
//   },
//   topButtons: {
//     position: "absolute",
//     top: 50,
//     width: "100%",
//     paddingHorizontal: 20,
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   iconButton: {
//     width: 40,
//     height: 40,
//     backgroundColor: "#fff",
//     borderRadius: 50,
//     justifyContent: "center",
//     alignItems: "center",
//     elevation: 4,
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//   },
//   helpButton: {
//     backgroundColor: "#fff",
//     borderRadius: 20,
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     elevation: 4,
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//   },
//   helpText: {
//     fontSize: 14,
//     fontWeight: "500",
//     color: "#1C1C1E",
//   },

//   bottomSheet: {
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: "#fff",
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     paddingHorizontal: 20,
//     paddingTop: 12,
//     paddingBottom: 34,
//   },
//   dragHandle: {
//     width: 40,
//     height: 4,
//     backgroundColor: "#E0E0E0",
//     borderRadius: 2,
//     alignSelf: "center",
//     marginBottom: 8,
//   },
//   heading: {
//     fontSize: 18,
//     fontWeight: "600",
//     color: "#1C1C1E",
//   },
//   subText: {
//     fontSize: 14,
//     color: "#8E8E93",
//     marginBottom: 16,
//   },
//   progressContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginVertical: 12,
//     justifyContent: "center",
//   },
//   stepItem: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   stepCircle: {
//     width: 36,
//     height: 36,
//     borderRadius: 50,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   activeCircle: {
//     backgroundColor: "#FF593C",
//   },
//   inactiveCircle: {
//     backgroundColor: "#FFE6E0",
//   },
//   line: {
//     width: 24,
//     height: 2,
//     backgroundColor: "#FF593C",
//   },
//   delivererRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginTop: 12,
//     marginBottom: 20,
//   },
//   delivererInfo: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 12,
//   },
//   avatar: {
//     width: 48,
//     height: 48,
//     borderRadius: 50,
//   },
//   delivererLabel: {
//     fontSize: 16,
//     fontWeight: "500",
//     color: "#1C1C1E",
//   },
//   delivererName: {
//     fontSize: 14,
//     fontWeight: "400",
//     color: "#8E8E93",
//   },
//   contactButtons: {
//     flexDirection: "row",
//     gap: 12,
//   },
//   contactButton: {
//     backgroundColor: "#F7F8FA",
//     borderRadius: 50,
//     padding: 10,
//   },
//   orderButton: {
//     backgroundColor: "#FF593C",
//     borderRadius: 99,
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//     alignItems: "center",
//   },
//   orderButtonText: {
//     color: "#fff",
//     fontSize: 14,
//     fontWeight: "400",
//   },
// });


import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import CallIcon from "@/components/icons/CallIcon";
import CallIcon2 from "@/components/icons/CallIcon2";
import ChatIcon from "@/components/icons/ChatIcon";

const deliveryTracking = () => {
  const router = useRouter()

  const handleBack = () => {
    if (router.canGoBack()) router.back()
    else router.push("/")
  }


  return (
    <View style={styles.container}>
      {/* Background Image (map + scooter) */}
      <ImageBackground
        source={require("@/assets/images/scooterMap.png")} // replace with your image
        style={styles.mapBackground}
      >
        {/* Top Floating Buttons */}
        <View style={styles.topButtons}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="close" size={22} color="#1C1C1E" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.helpButton}>
            <Text style={styles.helpText}>Help</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      {/* Bottom Sheet */}
      <View style={styles.bottomSheet}>
        <Text style={styles.heading}>Heading your way</Text>
        
        <Text style={styles.subText}>Arriving now</Text>

        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          {[
            { icon: "time-outline" },
            { icon: "cube-outline" },
            { icon: "bicycle-outline" },
            { icon: "home-outline" },
          ].map((item, index) => (
            <View key={index} style={styles.stepItem}>
              <View
                style={[
                  styles.stepCircle,
                  index < 3 ? styles.activeCircle : styles.inactiveCircle,
                ]}
              >
                <Ionicons
                  name={item.icon as any}
                  size={16}
                  color={index < 3 ? "#fff" : "#FF593C"}
                />
              </View>
              {index < 3 && <View style={styles.line} />}
            </View>
          ))}
        </View>

        <Text style={styles.give}>Give Alexei a moment to drop off your order</Text>

        {/* Deliverer Info */}
        <View style={styles.delivererRow}>
          <View style={styles.delivererInfo}>
            <Image
              source={require("@/assets/images/alexei.png")} // replace with your avatar
              style={styles.avatar}
            />
            <View>
              <Text style={styles.delivererLabel}>Deliverer</Text>
              <Text style={styles.delivererName}>Alexei Volkov</Text>
            </View>
          </View>

          <View style={styles.contactButtons}>
            <TouchableOpacity style={styles.contactButton} onPress={() => router.push("/screens/chat")}> 
              <ChatIcon />
            </TouchableOpacity>
            <TouchableOpacity style={styles.contactButton}>
              <CallIcon2 />
            </TouchableOpacity>
          </View>
        </View>

        {/* Order Details Button */}
        <TouchableOpacity style={styles.orderButton}>
          <Text style={styles.orderButtonText}>Order Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default deliveryTracking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mapBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "space-between",
  },
  topButtons: {
    position: "absolute",
    top: 50,
    width: "100%",
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconButton: {
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: 'rgb(0, 0, 0, 0.3)',
    shadowOffset: {
        width: 0,
        height: 4, // move shadow down
    },
    shadowOpacity: 0.1,  // control transparency
    shadowRadius: 16,    // 👈 this is your blur
    elevation: 16,
  },
  helpButton: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: "#fff",
    borderRadius: 20,
    width: 57,
    height: 40,
    paddingHorizontal: 16,
    paddingVertical: 10,
    shadowColor: 'rgb(0, 0, 0, 0.3)',
    shadowOffset: {
        width: 0,
        height: 4, // move shadow down
    },
    shadowOpacity: 0.1,  // control transparency
    shadowRadius: 16,    // 👈 this is your blur
    elevation: 16,
  },
  helpText: {
    fontSize: 12,
    fontWeight: 400,
    color: "#1C1C1E",
  },

  bottomSheet: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 34,
  },
  heading: {
    fontSize: 18,
    fontWeight: 600,
    color: "#1C1C1E",
  },
  subText: {
    fontSize: 14,
    fontWeight: 600,
    color: "#1C1C1E",
    marginTop: 16,
  },
  give:{
    fontSize: 14,
    fontWeight: 400,
    color: "#8E8E93",
    marginBottom: 12
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  stepItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  stepCircle: {
    width: 36,
    height: 36,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    margin: 4
  },
  activeCircle: {
    backgroundColor: "#FF593C",
  },
  inactiveCircle: {
    backgroundColor: "#FFEFE3",
  },
  line: {
    width: 50,
    height: 4,
    backgroundColor: "#FF593C",
    borderRadius: 20
  },
  delivererRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
    marginBottom: 20,
  },
  delivererInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 50,
  },
  delivererLabel: {
    fontSize: 16,
    fontWeight: 500,
    color: "#1C1C1E",
  },
  delivererName: {
    fontSize: 14,
    fontWeight: 400,
    color: "#8E8E93",
  },
  contactButtons: {
    flexDirection: "row",
    gap: 12,
  },
  contactButton: {
    backgroundColor: "#F7F8FA",
    borderRadius: 50,
    padding: 10,
  },
  orderButton: {
    backgroundColor: "#FF593C",
    borderRadius: 99,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  orderButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "400",
  },
});
