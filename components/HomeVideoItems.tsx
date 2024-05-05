import { View, Text, StyleSheet, useWindowDimensions, TouchableOpacity, Pressable, Image } from 'react-native'
import React, { memo, useEffect, useRef, useState } from 'react'
import { AVPlaybackStatus, ResizeMode, Video } from 'expo-av'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign, Feather, FontAwesome, Ionicons, SimpleLineIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import { useSegments } from 'expo-router'
import routes from '../constants/routes'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import CustumBottomSheetModal from './CustumBottomSheetModal'

type Props = {
    id: number,
    description?: string
    sources: string
    subtitle?: string
    thumb?: string
    title: string,
    activeVideo?: any,
    createdBy?: string,
    creatorAvatar?: string
}
const HomeVideoItems = ({
    description,
    sources,
    subtitle,
    thumb,
    title,
    id,
    activeVideo,
    createdBy,
    creatorAvatar
}: Props) => {

    const video = useRef<Video>(null)
    const commentModal = useRef<BottomSheetModal>(null)

    const [isLiked, setIsLiked] = useState<boolean>(false)
    const [isFollowed, setIsFollowed] = useState<boolean>(false)
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

    // track when the user change page
    const segment = useSegments()

    // handle modal bottom sheet

    const handleComment = () => commentModal.current?.present()
    // handle signle tap
    const singleTap = Gesture.Tap().onEnd((_event, success) => {
        console.log('signle tap')
    })
    // handle double tap
    const doubleTap = Gesture.Tap().numberOfTaps(2).onEnd((_event, success) => {
        console.log('double tap')
    })

    // handle videos play when the user scroll
    useEffect(() => {
        if (!video.current) {
            return
        }
        if (activeVideo !== id) {
            video.current.pauseAsync()
        }
        if (activeVideo == id) {
            video.current.playAsync()
        }
    }, [activeVideo, video.current])

    // stop video when leave the home screen
    useEffect(() => {
        if (segment[1] !== routes.home) {
            video.current.pauseAsync()
        } else video.current.playAsync()

    }, [segment])

    return (
        <GestureDetector gesture={Gesture.Exclusive(doubleTap, singleTap)}
        >
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
                        <View className='flex-1 justify-end gap-3 pr-3'>
                            <View className='flex flex-row items-center gap-2'>
                                <Pressable onPress={() => console.log('go to user ' + createdBy)}>
                                    <Image
                                        source={{ uri: creatorAvatar }}
                                        resizeMode='cover'
                                        className='w-8 h-8 rounded-full'
                                    />
                                </Pressable>
                                <Text 
                                numberOfLines={3}
                                className='text-white font-pregular text-xs'>{createdBy}</Text>
                                <TouchableOpacity className='bg-neutral-700 px-1 py-1 rounded-lg' onPress={() => setIsFollowed(!isFollowed)}>
                                    <Text className='text-white font-pmedium text-xs'>{isFollowed ? 'Following' : 'Follow'}</Text>
                                </TouchableOpacity>
                            </View>
                            <Text className='text-white font-pregular text-sm'>{description}</Text>
                        </View>
                        {/* right icons */}
                        <View className='flex gap-2'>
                            <TouchableOpacity className='flex justify-center items-center gap-1' onPress={() => setIsLiked(!isLiked)}>
                                {isLiked ? <AntDesign name="heart" size={30} color="white" /> : <AntDesign name="hearto" size={30} color="white" />}
                                <Text className='text-white font-plight text-xs'>6k5</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className='flex justify-center items-center gap-1' onPress={handleComment}>
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
                <CustumBottomSheetModal ref={commentModal} />
            </View>
        </GestureDetector>
    )
}

export default memo(HomeVideoItems)