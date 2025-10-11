import { View, Text, TouchableOpacity, Platform, StyleSheet, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import SendIcon from '@/components/icons/SendIcon'

const chat = () => {
  const router = useRouter()

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back()
    } else {
      router.push('/')
    }
  }

  return (
    <View style={styles.container}>
      {/* Top bar (your existing code) */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="#1C1C1E" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Alexei</Text>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="search-outline" size={22} color="black" />
        </TouchableOpacity>
      </View>

      {/* Chat Messages */}
      <ScrollView contentContainerStyle={styles.chatContainer}>
        <View style={styles.messageWrapperLeft}>
          <View style={styles.messageLeft}>
            <Text style={styles.messageText}>Hello</Text>
          </View>
          <Text style={styles.timeText}>08:00</Text>
        </View>

        <View style={styles.messageWrapperRight}>
          <View style={styles.messageRight}>
            <Text style={styles.messageText}>Is my sushi order on the way?</Text>
          </View>
          <Text style={styles.timeText}>08:00</Text>
        </View>

        <View style={styles.messageWrapperLeft}>
          <View style={styles.messageLeft}>
            <Text style={styles.messageText}>Is my sushi order on the way?</Text>
          </View>
          <Text style={styles.timeText}>08:02</Text>
        </View>

        <View style={styles.messageWrapperRight}>
          <View style={styles.messageRight}>
            <Text style={styles.messageText}>Awesome! When do you think you’ll arrive?</Text>
          </View>
          <Text style={styles.timeText}>08:02</Text>
        </View>

        <View style={styles.messageWrapperLeft}>
          <View style={styles.messageLeft}>
            <Text style={styles.messageText}>I should be there in about 15 minutes</Text>
          </View>
          <Text style={styles.timeText}>08:02</Text>
        </View>
      </ScrollView>

      {/* Input field */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Type your message..."
          style={styles.input}
          placeholderTextColor="#B1B1B1"
        />
        <TouchableOpacity style={styles.sendButton}>
          <SendIcon/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdfd',
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
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    shadowColor: 'rgb(0, 0, 0, 0.3)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 8,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1C1C1E',
  },
  chatContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  messageWrapperLeft: {
    alignItems: 'flex-start',
    marginBottom: 14,
  },
  messageWrapperRight: {
    alignItems: 'flex-end',
    marginBottom: 14,
  },
  messageLeft: {
    backgroundColor: '#F3F3F3',
    borderRadius: 20,
    borderTopLeftRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 16,
    maxWidth: '80%',
  },
  messageRight: {
    backgroundColor: '#FF4B3E',
    borderRadius: 20,
    borderTopRightRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 16,
    maxWidth: '80%',
  },
  messageText: {
    fontSize: 15,
    color: '#1C1C1E',
  },
  timeText: {
    fontSize: 11,
    color: '#A2A2A2',
    marginTop: 2,
    marginHorizontal: 6,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: '#F2F2F2',
  },
  input: {
    flex: 1,
    backgroundColor: '#F7F8FA',
    borderRadius: 25,
    padding: 12,
    fontSize: 15,
    color: '#8E8E93'
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#F7F8FA',
    borderRadius: 25,
    padding: 11,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default chat
