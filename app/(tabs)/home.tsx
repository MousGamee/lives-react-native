import { View, Text, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native'
import { Video, ResizeMode } from 'expo-av'
import fakeVideosData from '../../constants/fakeVideosData'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons'
import HomeVideoItems from '../../components/HomeVideoItems'

const Home = () => {
 
  return (
   <HomeVideoItems />
  )
}

export default Home