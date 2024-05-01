import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import OnBoarding from '../components/OnBoarding'

const App = () => {
  const [logged, setLogged] = useState(false)
  return (
    <OnBoarding />
  )
}

export default App