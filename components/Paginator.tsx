import { View, Text, Animated, useWindowDimensions } from 'react-native'
import React from 'react'

type Props = {
    data: Array<any>,
    scrollX: Animated.Value
}

const Paginator = ({ data, scrollX }: Props) => {
    const { width } = useWindowDimensions()
    return (
        <View className='flex-row justify-center items-center mb-5'>
            {data.map((_, i) => {
                const inputRange = [(i - 1) * width, i * width, (i + 1) * width]
                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [10, 30, 10],
                    extrapolate: 'clamp'
                })
                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [.7, 1, .7],
                    extrapolate: 'clamp'
                })

                const bgColor = scrollX.interpolate({
                    inputRange,
                    outputRange: ['#3F3F3F', '#880185', '#3F3F3F'],
                    extrapolate: 'clamp'
                })

                return (
                    <Animated.View key={i.toString()} style={{
                        height: 10,
                        borderRadius: 5,
                        marginHorizontal: 3,
                        backgroundColor: bgColor,
                        width: dotWidth,
                        opacity: opacity
                    }} />
                )
            })}
        </View>
    )
}

export default Paginator