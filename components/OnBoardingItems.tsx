import { Text, useWindowDimensions, ImageBackground } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

type Props = {
  id: number;
  text: string;
  image: any;
}

const OnBoardingItems = ({ id, text, image }: Props) => {
  const { width, height } = useWindowDimensions()
  return (
    <ImageBackground
      key={id}
      className='flex items-center justify-end pb-10'
      source={image}
      style={{ width: width, height: height * .8 }}>
      <Text className='font-pblack text-white text-2xl text-center'>{text}</Text>
      <LinearGradient colors={["transparent", '#000']} className="absolute bottom-0 h-10 w-full" />
    </ImageBackground>
  )
}

export default OnBoardingItems