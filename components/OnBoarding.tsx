import { View, Text, FlatList, Animated } from 'react-native'
import { useState, useRef } from 'react'
import { image } from '../constants'
import OnBoardingItems from './OnBoardingItems'
import Paginator from './Paginator'
import OnBoardingBtn from './OnBoardingBtn'

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

    const scrollTo = () => {
        if(currentIndex < slides.length - 1){
            slideRef.current.scrollToIndex({ index: currentIndex + 1})
        } else {
            console.log('last item')
        }
    }

    return (
        <View>
            <FlatList
                horizontal
                pagingEnabled
                bounces={false}
                showsHorizontalScrollIndicator={false}
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
            <Paginator data={slides} scrollX={scrollX} />
            <OnBoardingBtn scrollTo={scrollTo} btnText={currentIndex < slides.length - 1 ? 'Next' : 'Get started'}/>
        </View>

    )
}

export default OnBoarding