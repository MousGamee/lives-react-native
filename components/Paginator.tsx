import { View, Text, Animated, useWindowDimensions } from 'react-native'
import React from 'react'

type Props = {
    data: Array<any>,
    scrollX: Animated.Value
}

const Paginator = ({ data, scrollX }: Props) => {
    const { width } = useWindowDimensions()
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            {data.map((_, i) => {
                const inputRange = [(i - 1) * width, i * width, (i + 1) * width]
                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [10, 30, 10],
                    extrapolate: 'clamp'
                })
                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [.3, 1, .3],
                    extrapolate: 'clamp'
                })

                return (
                    <Animated.View key={i.toString()} style={{
                        height: 10,
                        borderRadius: 5,
                        marginHorizontal: 3,
                        backgroundColor: '#880185',
                        width: dotWidth,
                        opacity : opacity
                    }} />
                )
            })}
        </View>
    )
}

export default Paginator