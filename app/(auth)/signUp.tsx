import { View, Text, KeyboardAvoidingView, ImageBackground, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { icons, image } from '../../constants'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustumButton from '../../components/CustumButton'
import CustumTextInput from '../../components/CustumTextInput'
import { Fontisto } from '@expo/vector-icons'
import { Link, router } from 'expo-router'
import routes from '../../constants/routes'

const SignUp = () => {
  return (
    <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={0} className='h-full bg-black'>
      <ImageBackground source={image.signUpBkg} className="h-full w-full flex-col-reverse" resizeMode='cover'>
        <SafeAreaView className='px-3 flex items-center'>
          <View className='bg-neutral-800 w-full rounded-lg py-6 px-4'>
            <Text className='font-pbold text-3xl text-center text-white mb-4'>Sign Up</Text>
            <CustumTextInput
              icon={<Fontisto name="email" size={24} color="#A4A4A4" />}
              placeholder='Email'
              keyboardType='email-address'
              placeholderTextColor={'#A4A4A4'}
              containerStyle='mb-3'
            />
            <CustumTextInput
              icon={<Fontisto name="locked" size={24} color="#A4A4A4" />}
              placeholder='Password'
              keyboardType='visible-password'
              placeholderTextColor={'#A4A4A4'}
              containerStyle='mb-3'
            />
            <CustumTextInput
              icon={<Fontisto name="locked" size={24} color="#A4A4A4" />}
              placeholder='Confirm password'
              keyboardType='visible-password'
              placeholderTextColor={'#A4A4A4'}
              containerStyle='mb-3'
            />
            <CustumButton
              btnText='Sign In'
              style='py-4'
              onPress={() => router.replace(routes.home)}
            />

            <TouchableOpacity className='my-2' onPress={() => router.navigate('/forgotPassword')}>
              <Text className='text-center text-fuchsia-700 font-psemibold text-lg'>Forgot Password ?</Text>
            </TouchableOpacity>

            <View className='flex flex-row justify-between items-center'>
              <View
                style={{
                  borderColor: '#D9D9D9',
                  opacity: .4,
                  borderWidth: 1,
                  flex: 1
                }}
              />
              <Text className='text-white text-center px-4'>Or</Text>
              <View
                style={{
                  borderColor: '#D9D9D9',
                  borderWidth: 1,
                  opacity: .4,
                  flex: 1
                }} />
            </View>

            <View className='flex flex-row justify-center items-center gap-3 mt-2'>
              <TouchableOpacity className='p-3 flex justify-center items-center bg-neutral-600 rounded-full'>
                <Image source={icons.facebookIcon} className='h-8 w-8' resizeMode='contain' />
              </TouchableOpacity>
              <TouchableOpacity className='p-3 flex justify-center items-center bg-neutral-600 rounded-full'>
                <Image source={icons.appleIcon} className='h-8 w-8' resizeMode='contain' />
              </TouchableOpacity>
              <TouchableOpacity className='p-3 flex justify-center items-center bg-neutral-600 rounded-full'>
                <Image source={icons.googleIcon} className='h-8 w-8' resizeMode='contain' />
              </TouchableOpacity>
            </View>

            <View className='flex flex-row justify-center items-center mt-5'>
              <Text className='text-white font-psemibold text-md'>Already have an account? </Text>
              <TouchableOpacity activeOpacity={.7} onPress={() => router.navigate(routes.signIn)}>
                <Text className='text-fuchsia-700 font-psemibold text-md'>Sign in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </KeyboardAvoidingView>
  )
}

export default SignUp