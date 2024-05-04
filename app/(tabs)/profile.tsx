import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Profile = () => {

  const clearStorage =async () => {
    try {
      await AsyncStorage.removeItem('@viewdOnBoarding')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <View className='flex-1 w-full h-full justify-center items-center'>
      <TouchableOpacity onPress={clearStorage}><Text>Clear storage</Text></TouchableOpacity>
    </View>
  )
}

export default Profile