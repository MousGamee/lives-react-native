import { View, Text, TextInput, KeyboardTypeOptions } from 'react-native'
import React from 'react'
import { Fontisto } from '@expo/vector-icons'

type Props = {
    keyboardType : KeyboardTypeOptions,
    placeholder? : string,
    placeholderTextColor? : string,
    containerStyle? : string,
    icon? : JSX.Element
}

const CustumTextInput = ({
keyboardType,
placeholderTextColor,
placeholder,
containerStyle, 
icon
}: Props) => {
  return (
    <View className={`flex flex-row justify-center py-4 px-3 rounded-xl w-full focus:border-fuchsia-300 bg-neutral-700 ${containerStyle}`}>
      {icon}
      <TextInput 
        keyboardType={keyboardType}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={keyboardType === 'visible-password'}
      className='h-full flex-1 font-pmedium text-md text-white pl-2'/>
    </View>
  )
}

export default CustumTextInput