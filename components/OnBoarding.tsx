import { View, Text, FlatList, Animated } from 'react-native'
import { useState, useRef } from 'react'
import { image } from '../constants'
import OnBoardingItems from './OnBoardingItems'
import Paginator from './Paginator'
import OnBoardingBtn from './OnBoardingBtn'
import { router } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'

const slides = [
    {
        id: 1,
        text: "Capture Life's Moments in a Flash",
        image: image.onBoarding1
    },
    {
        id: 2,
        text: "Your Stories, Our Stage: Short, Sweet, and Stunning!",
        image: image.onBoarding2
    },
    {
        id: 3,
        text: "Instant Entertainment, Endless Inspiration!",
        image: image.onBoarding3
    },
]

const OnBoarding = () => {
    const scrollX = useRef(new Animated.Value(0)).current
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    const viewItemChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index)
    }).current

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current
    const slideRef = useRef(null)

    const scrollTo = async () => {
        if (currentIndex < slides.length - 1) {
            slideRef.current.scrollToIndex({ index: currentIndex + 1 })
        } else {
            try {
                await AsyncStorage.setItem('@viewdOnBoarding', 'true')
                router.replace('/signIn')
            } catch (error) {
                console.log('Error  => ', error)
            }
        }
    }


    return (
        <View className='bg-black h-full'>
            <FlatList
                horizontal
                pagingEnabled
                bounces={false}
                showsHorizontalScrollIndicator={false}
                decelerationRate={0}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false },
                )}
                onViewableItemsChanged={viewItemChanged}
                viewabilityConfig={viewConfig}
                scrollEventThrottle={32}
                data={slides}
                ref={slideRef}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <OnBoardingItems
                            id={item.id}
                            text={item.text}
                            image={item.image} />
                    )
                }}
            />
            <View className='pb-5 px-3'>
                <Paginator data={slides} scrollX={scrollX} />
                <OnBoardingBtn scrollTo={scrollTo} btnText={currentIndex < slides.length - 1 ? 'Next' : 'Get started'} />
            </View>
        </View>

    )
}

export default OnBoarding