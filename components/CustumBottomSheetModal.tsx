import { View, Text, } from 'react-native';
import React, { forwardRef, useCallback, useMemo } from 'react';
import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';
import CustumTextInput from './CustumTextInput';

export type Ref = BottomSheetModal;

const CustumBottomSheetModal = forwardRef<Ref>((props, ref) => {
    const renderBackdrop = useCallback(
        (props: any) => <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />,
        []
    );
    const snapPoints = useMemo(() => ['75%', '90%'], []);

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
            <View className='flex-1 px-3'>
                <Text className='text-white font-pmedium text-lg'>Commentaire </Text>
            </View>
            <CustumTextInput
                keyboardType='default'
                placeholder='Add comment'
                placeholderTextColor='white'
                style='mt-auto bg-white'
            />
        </BottomSheetModal>
    );
});



export default CustumBottomSheetModal;