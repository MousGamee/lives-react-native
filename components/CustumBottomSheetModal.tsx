import { View, Text, TouchableOpacity, KeyboardAvoidingView, FlatList, Image, Pressable } from 'react-native';
import React, { forwardRef, useCallback, useMemo, useState } from 'react';
import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';
import CustumTextInput from './CustumTextInput';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { fakeComments } from '../constants/fakeComment';
import Comments from './Comments';

export type Ref = BottomSheetModal;

const CustumBottomSheetModal = forwardRef<Ref>((props, ref) => {
    const renderBackdrop = useCallback(
        (props: any) => <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />,
        []
    );
    const snapPoints = useMemo(() => ['75%'], []);


    return (
        <BottomSheetModal
            ref={ref}
            index={0}
            snapPoints={snapPoints}
            backdropComponent={renderBackdrop}
            backgroundStyle={{
                backgroundColor: '#0e0e0e'
            }}

            style={{
                borderRadius: 0
            }}
        >
            <View className=' px-3 mb-5'>
                <Text className='text-white font-pmedium text-lg'>Commentaire </Text>
            </View>
            <FlatList
                data={fakeComments}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={{
                    height: '90%'
                }}

                renderItem={({ item }) => {
                    return (
                        <Comments comment={item}/>
                    )
                }}
                ListEmptyComponent={() => (
                    <View className='h-full items-center mt-40'>
                        <Text className='text-white font-psemibold text-lg'>No comment for now...</Text>
                    </View>
                )}
            />
            <KeyboardAvoidingView className='absolute w-full bottom-10 px-7 flex flex-row gap-3 bg-neutral-900'>
                <CustumTextInput
                    keyboardType='default'
                    placeholder='Add comment'
                    placeholderTextColor='white'
                    style='mt-auto'
                    containerStyle='mt-auto pb-auto flex-grow'
                />
                <TouchableOpacity className=' justify-center items-center'>
                    <FontAwesome name="send-o" size={24} color="#b82ca7" />
                </TouchableOpacity>
            </KeyboardAvoidingView>

        </BottomSheetModal>
    );
});



export default CustumBottomSheetModal;