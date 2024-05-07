import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

type Props = {
    style? : string,
    btnText : string,
    onPress : () => void,
    icon? : JSX.Element
}

const CustumButton = ({ 
    style,
    btnText,
    onPress, 
    icon
}: Props) => {
  return (
    <TouchableOpacity className={`bg-fuchsia-800 rounded-lg ${style}`} onPress={onPress}>
      { icon && icon }
      <Text className='text-center text-white text-lg font-pmedium'>{btnText}</Text>
    </TouchableOpacity>
  )
}

export default CustumButton