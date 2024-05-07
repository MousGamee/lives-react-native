import { View, Text, Pressable, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Comment } from '../types'
import { AntDesign } from '@expo/vector-icons'

type Props = {
    comment: Comment
}

const Comments = ({ comment: item }: Props) => {


    const [isLiked, setIsLiked] = useState<boolean>(false)
    const [isDisliked, setIsDisliked] = useState<boolean>(false)


    const handleLike = () => {
        if(isLiked){
            setIsLiked(false)
        }
        if(!isLiked && isDisliked){
            setIsLiked(true)
            setIsDisliked(false)
        }
        if(!isLiked){
            setIsLiked(true)
        }
    }
    const handleDisLike = () => {
        if(isDisliked){
            setIsDisliked(false)
        }
        if(!isDisliked && isLiked){
            setIsLiked(false)
            setIsDisliked(true)
        }
        if(!isDisliked){
            setIsDisliked(true)
        }
    }

    return (
        <View className='px-3 mb-7 '>
            <View className='flex-row gap-3'>
                <Pressable onPress={() => console.log('go to user page, ' + item.commentedBy)}>
                    <Image
                        source={{ uri: "https://cdn-icons-png.flaticon.com/512/147/147133.png" }}
                        className='w-10 h-10 rounded-full'
                        resizeMode='contain'
                    />
                </Pressable>
                <View>
                    <Text className='text-white font-bold'>{item.commentedBy}</Text>
                    <Text className='text-white font-pextralight text-xs'>{item.commentedAt.toLocaleDateString()}</Text>
                </View>
            </View>
            <Text className='text-white'>{item.text}</Text>
            <View className='flex-row items-center gap-1 mt-1'>
                <View className='flex-row items-center gap-1'>
                    <TouchableOpacity onPress={() => handleLike()}>
                        <AntDesign name={isLiked ? 'like1' : 'like2'} size={20} color="white" />
                    </TouchableOpacity>
                    <Text className='text-white'>{item.likes}</Text>
                </View>
                <View className='flex-row items-center gap-1'>
                    <TouchableOpacity onPress={() => handleDisLike()}>
                        <AntDesign name={isDisliked ? "dislike1" : 'dislike2'} size={20} color="white" />
                    </TouchableOpacity>
                    <Text className='text-white'>{item.likes}</Text>
                </View>
            </View>
        </View>
    )
}

export default Comments