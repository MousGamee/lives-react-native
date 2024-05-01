import { View, Text, Image, useWindowDimensions } from 'react-native'
import React from 'react'

type Props =  {
  id: number;
  text: string;
  image: any;
}

const OnBoardingItems = ({id, text, image} : Props) => {
const { width, height } = useWindowDimensions()
  return (
    <View style={{ width : width}}>
      <Image source={image} resizeMode="cover" style={{width : width, height : height*.7}}/>
      <View>
        <Text>{text}</Text>
      </View>
    </View>
  )
}

export default OnBoardingItems