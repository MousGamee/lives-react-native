import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

type Props = {
    style? : string,
    btnText : string,
    onPress : () => void
}

const CustumButton = ({ 
    style,
    btnText,
    onPress
}: Props) => {
  return (
    <TouchableOpacity className='bg-fuchsia-800 py-4 rounded-lg w-full' onPress={onPress}>
      <Text className='text-center text-white text-lg font-pmedium'>{btnText}</Text>
    </TouchableOpacity>
  )
}

export default CustumButton