import { Text, TouchableOpacity } from 'react-native'

type Props = {
    scrollTo: () => void,
    btnText: string
}

const OnBoardingBtn = ({ scrollTo, btnText }: Props) => {
    return (
        <TouchableOpacity
            className='border-cyan-700 px-6 py-3 rounded-md bg-fuchsia-800 justify-center items-center mb-5'
            activeOpacity={.8}
            onPress={scrollTo}>
            <Text className='text-white font-pblack text-xl'>{btnText}</Text>
        </TouchableOpacity>
    )
}

export default OnBoardingBtn