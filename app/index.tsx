import { View, Text, ActivityIndicator } from 'react-native'
import { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import OnBoarding from '../components/OnBoarding'
import { Redirect } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useGlobalContext } from '../context/GlobalProvider'

const Loading = () => {
  return (
    <View className='w-full h-full justify-center items-center'>
      <ActivityIndicator size={'large'} />
    </View>
  )
}
const App = () => {
  const [loading, setLoading] = useState(false)
  const [viewdOnBoarding, setViewdOnBoarding] = useState(false)
  const checkOnBoarding = async() => {
    try {
      const value = await AsyncStorage.getItem('@viewdOnBoarding')
      if(value !== null){
        setViewdOnBoarding(true)
      }
    } catch (error) {
      console.log('Error => ', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    checkOnBoarding()
  },[])

  return (
    <>
      {loading ? <Loading /> : 
      viewdOnBoarding ? <Redirect href={'/signIn'} /> : <OnBoarding />}
    </>
  )
}

export default App