import { View, Text, FlatList, useWindowDimensions, Animated } from 'react-native'
import React, { useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FollowingCard from '../../components/FollowingCard'
import { fakeFollwingCard } from '../../constants/fakeFollowingCard'

const Following = () => {

  const { width, height } = useWindowDimensions()

  const itemWidth = width * .8
  const itemHeight = height * .6
  const spacerItemSize = (width - itemWidth) / 2


  const scrollX = useRef(new Animated.Value(0)).current
  return (
    <View className='bg-neutral-900 flex-1'>
      <SafeAreaView>
        <View className='flex justify-center items-center mt-10 mb-10'>
          <Text className='text-white font-psemibold text-lg'>Trending Creators</Text>
          <Text className='text-white font-pregular px-10 text-center mt-2'>Follow an account and see they latest videos here</Text>
        </View>
        <Animated.FlatList
          horizontal
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          data={fakeFollwingCard}
          keyExtractor={item => item.title}
          snapToInterval={itemWidth + 20}
          decelerationRate={0}
          bounces={false}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true })}
          renderItem={({ item }) => {

            if (!item.image) {
              return (
                <View style={{ width: spacerItemSize }} />
              )
            }
            const inputRange = [
              (item.id - 2) * itemWidth,
              (item.id - 1) * itemWidth,
              item.id * itemWidth,
            ]

            const scale = scrollX.interpolate({
              inputRange: inputRange,
              outputRange: [.9, 1, .9],
            })
            return (
              <FollowingCard
                card={item}
                itemWidth={itemWidth}
                scale={scale}
                itemHeight={itemHeight} />
            )
          }}
        />
      </SafeAreaView>
    </View>
  )
}

export default Following