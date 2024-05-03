import { Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { router, Tabs } from 'expo-router'
import routes from '../../constants/routes'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'

type TabItems = {
  size? : number,
  color? : string,
  focused? : boolean,
  label : string,
  icon? : JSX.Element
}
const TabItems = ({
  size,
  color,
  focused,
  label,
  icon 
}: TabItems) => {
  return (
    <View className='flex justify-center items-center gap-1'>
      {icon}
      <Text className={`font-pmedium text-xs  ${focused ? 'text-fuchsia-700' : 'text-gray-400'}`}>{label}</Text>
    </View>
  )
}

const TabsLayout = () => {

  const { height } = useWindowDimensions()
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#b92da8",
        tabBarInactiveTintColor: "#787878",
        tabBarShowLabel: false,
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
          tabBarIcon: ({ color, size, focused }) => {
            return (
             <TabItems 
                label='Home'
                color={color}
                focused={focused}
                size={size}
                icon={<AntDesign name="home" size={size} color={color} />}
             />
            )
          }
        }}
      />

      <Tabs.Screen name={routes.search}
        options={{
          title: 'Search',
          tabBarIcon: ({ color, size,focused }) => {
            return (
              <TabItems 
              label='Search'
              color={color}
              focused={focused}
              size={size}
              icon={ <AntDesign name="search1" size={size} color={color} />}
           />
            )
          }
        }} />

      <Tabs.Screen name="create"
        options={{
          tabBarIcon: () => (
            <TouchableOpacity
              className='border-fuchsia-700 border-solid border rounded-full'
              onPress={() => router.navigate('/create')}>
              <View className='bg-white rounded-full'>
                <AntDesign name="pluscircleo" size={34} color="#121212" />
              </View>
            </TouchableOpacity>
          )
        }} />

      <Tabs.Screen name={routes.following}
        options={{
          title: 'Following',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <TabItems 
              label='Following'
              color={color}
              focused={focused}
              size={size}
              icon={<MaterialCommunityIcons name="movie-filter" size={size} color={color} /> }
           />
              
            )
          }
        }} />
      <Tabs.Screen name={routes.profile}
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size,focused }) => {
            return (
              <TabItems 
              label='Profile'
              color={color}
              focused={focused}
              size={size}
              icon={<AntDesign name="user" size={size} color={color} />}
           />
              
            )
          }
        }} />
    </Tabs>
  )
}

export default TabsLayout