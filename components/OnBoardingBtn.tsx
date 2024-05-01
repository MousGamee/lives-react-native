import { View, Text, TouchableOpacity } from 'react-native'

type Props = {
    scrollTo: () => void
}

const OnBoardingBtn = ({ scrollTo }: Props) => {
    return (
        <TouchableOpacity className='border-cyan-700 p-6 bg-purple-600 justify-center items-center' activeOpacity={.8} onPress={scrollTo}>
            <Text className='text-white'>OnBoardingBtn</Text>
        </TouchableOpacity>
    )
}

export default OnBoardingBtn