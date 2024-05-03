import { View, Text, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { ResizeMode, Video } from 'expo-av'
import fakeVideosData from '../constants/fakeVideosData'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign, FontAwesome, Ionicons, SimpleLineIcons } from '@expo/vector-icons'

const HomeVideoItems = () => {
    const [isLiked, setIsLiked] = useState<boolean>(false)
    const [isSaved, setIsSaved] = useState<boolean>(false)
    const { height } = useWindowDimensions()
    const VIDEO_HEIGHT = height - (height * .105)
    return (
        <View className='flex-1'>
            <Video
                style={[StyleSheet.absoluteFill, { height: VIDEO_HEIGHT }]}
                shouldPlay
                resizeMode={ResizeMode.COVER}
                source={{ uri: fakeVideosData[0].sources }}
            />
            <SafeAreaView className='flex flex-1 px-3'>
                {/* footer */}
                <View className='mt-auto flex flex-row'>
                    {/* caption */}
                    <View className='flex-1 justify-end'>
                        <Text className='text-white font-pregular text-sm'>{fakeVideosData[0].title}</Text>
                    </View>
                    {/* right icons */}
                    <View className='flex gap-2'>
                        <TouchableOpacity className='flex justify-center items-center gap-1' onPress={() => setIsLiked(!isLiked)}>
                            {isLiked ? <AntDesign name="heart" size={30} color="white" /> : <AntDesign name="hearto" size={30} color="white" />}
                            <Text className='text-white font-plight text-xs'>6k5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className='flex justify-center items-center gap-1'>
                            <SimpleLineIcons name="bubble" size={30} color="white" />
                            <Text className='text-white font-plight text-xs'>56</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className='flex justify-center items-center gap-1'>
                        <Ionicons name="arrow-redo-outline" size={30} color="white" />
                            <Text className='text-white font-plight text-xs'>6k5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className='flex justify-center items-center gap-1' onPress={() => setIsSaved(!isSaved)}>
                       { isSaved ? <FontAwesome name="bookmark" size={30} color="white" /> : <FontAwesome name="bookmark-o" size={30} color="white" />}
                            <Text className='text-white font-plight text-xs'>6k5</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </SafeAreaView>
        </View>
    )
}

export default HomeVideoItems