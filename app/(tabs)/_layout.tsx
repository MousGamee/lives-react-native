import { useWindowDimensions } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import routes from '../../constants/routes'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'



const TabsLayout = () => {

  const { height } = useWindowDimensions()
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#b92da8",
        tabBarInactiveTintColor: "#3b3b3b",
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold'
        },
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#0e0e0e",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          height: height * .105,
        },
      }}>
      <Tabs.Screen name={routes.home}
        options={{
          title: 'Home',
          tabBarIcon: ({  color, size, }) => {
            return (
              <AntDesign name="home" size={size} color={color} />
            )
          }
        }}
      />

      <Tabs.Screen name={routes.search}
        options={{
          title: 'Search',
          tabBarIcon: ({  color, size, }) => {
            return (
              <AntDesign name="search1" size={size} color={color} />
            )
          }
        }} />

        <Tabs.Screen name="create"/>

      <Tabs.Screen name={routes.following}
        options={{
          title: 'Following',
          tabBarIcon: ({ color, size, }) => {
            return (
              <MaterialCommunityIcons name="movie-filter" size={size} color={color} />
            )
          }
        }} />
      <Tabs.Screen name={routes.profile}
        options={{
          title: 'Profile',
          tabBarIcon: ({  color, size, }) => {
            return (
              <AntDesign name="user" size={size} color={color}/>
            )
          }
        }} />
    </Tabs>
  )
}

export default TabsLayout