import { AntDesign } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { View, Text, ImageBackground, useWindowDimensions, Animated, Pressable, Image } from 'react-native'
import { fakeFollwingCard } from '../constants/fakeFollowingCard'
import CustumButton from './CustumButton'

type Props = {
    card: any,
    itemWidth: number,
    itemHeight: number,
    scale: any
}



const FollowingCard = ({ card, itemHeight, itemWidth, scale }: Props) => {

    return (
        <Animated.View style={{
            transform: [
                { scale: scale }
            ],
        }}>

            <Pressable onPress={() => console.log(card.id)} style={{ paddingHorizontal: 10 }}>
                <ImageBackground source={{ uri: card.image }}
                    resizeMode={'cover'}
                    className='justify-center items-center'
                    style={{ width: itemWidth, height: itemHeight }}

                >
                    <Image source={{
                        uri: card.avatar
                    }}
                        resizeMode='cover'
                        className='rounded-full w-20 h-20 mt-5'
                        style={{
                            borderWidth: 4,
                            borderColor: '#FFF'
                        }}
                    />
                    <View className='mt-2 mb-2'>
                        <Text className='text-white text-center text-xl font-psemibold'>{card.userName}</Text>
                        <View className='flex-row mt-1 gap-x-2'>
                            <Text className='text-white font-pmedium'>{card.title}</Text>
                            <Text className='text-white font-pmedium '>{card.followers} followers</Text>
                        </View>
                    </View>
                    <CustumButton 
                    style='flex-row gap-x-2 px-2 py-1 justify-center items-center z-10'
                    btnText='Follow' 
                    icon={<AntDesign name="plus" size={24} color="white" />}
                    onPress={() => console.log('follow ' + card.userName)}/>
                </ImageBackground>
            </Pressable>
            <LinearGradient colors={["transparent", '#000']} className="absolute bottom-0 h-48 w-full" />

        </Animated.View>
    )
}

export default FollowingCard