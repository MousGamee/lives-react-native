import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const CreateLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='create'/>
    </Stack>
  )
}

export default CreateLayout