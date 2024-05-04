import { View, Text, StyleSheet, useWindowDimensions, TouchableOpacity, Pressable } from 'react-native'
import React, { memo, useEffect, useMemo, useRef, useState } from 'react'
import { AVPlaybackStatus, ResizeMode, Video } from 'expo-av'
import fakeVideosData from '../constants/fakeVideosData'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign, Feather, FontAwesome, Ionicons, SimpleLineIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

type Props = {
    id : number,
    description?: string
    sources: string
    subtitle?: string
    thumb?: string
    title: string,
    handleOpenBottomSheet?: () => void,
    activeVideo? : any
}
const HomeVideoItems = ({
    description,
    sources,
    subtitle,
    thumb,
    title,
    id,
    activeVideo
}: Props) => {

    const video = useRef<Video>(null)

    const [isLiked, setIsLiked] = useState<boolean>(false)
    const [isSaved, setIsSaved] = useState<boolean>(false)
    const [status, setStatus] = useState<AVPlaybackStatus>()
    const { height } = useWindowDimensions()
    const VIDEO_HEIGHT = height - (height * .105)

    const isPlaying = status?.isLoaded && status.isPlaying

    const handleVideo = () => {
        if (!video.current) { return }
        if (isPlaying) {
            video.current.pauseAsync()
        } else video.current.playAsync()
    }

    useEffect(() => {
        if(!video.current){
            return
        }
        if(activeVideo !== id){
            video.current.pauseAsync()
        }
        if(activeVideo == id){
            video.current.playAsync()
        }
    },[activeVideo, video.current])

    return (
        <View className='flex-1 bg-black' style={{ height: VIDEO_HEIGHT }}>
            <Video
                volume={1.0}
                isMuted={false}
                isLooping
                ref={video}
                style={[StyleSheet.absoluteFill, { height: '100%', zIndex: 1 }]}
                resizeMode={ResizeMode.COVER}
                source={{ uri: sources }}
                onPlaybackStatusUpdate={setStatus}
            />
            <Pressable
                style={{ zIndex: 34 }}
                onPress={handleVideo}
                className='flex flex-1 px-3'>
                {!isPlaying && <Feather name="play-circle" size={70} color="white" style={{
                    position: 'absolute',
                    top: (height / 2),
                    alignSelf: 'center'

                }} />}
                <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,.8)']}
                    style={[StyleSheet.absoluteFill, { top: '50%', }]}
                />
                {/* footer */}
                <SafeAreaView className='mt-auto flex flex-row'>
                    {/* caption */}
                    <View className='flex-1 justify-end'>
                        <Text className='text-white font-pregular text-sm'>{title}</Text>
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
                            {isSaved ? <FontAwesome name="bookmark" size={30} color="white" /> : <FontAwesome name="bookmark-o" size={30} color="white" />}
                            <Text className='text-white font-plight text-xs'>6k5</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>

            </Pressable>

        </View>
    )
}

export default memo(HomeVideoItems)