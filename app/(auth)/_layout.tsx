import React from 'react'
import { Stack } from 'expo-router'
import routes from '../../constants/routes'

const AuthLayout = () => {
  return (
    <Stack screenOptions={{ headerShown : false}}>
      <Stack.Screen name={routes.signIn}/>
      <Stack.Screen name={routes.signUp}/>
      <Stack.Screen name={routes.forgotPassword}/>
    </Stack>
  )
}

export default AuthLayout