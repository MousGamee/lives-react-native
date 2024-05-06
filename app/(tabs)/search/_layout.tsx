import { AntDesign, Ionicons } from '@expo/vector-icons'
import {
    createMaterialTopTabNavigator,
    MaterialTopTabNavigationOptions,
    MaterialTopTabNavigationEventMap
} from '@react-navigation/material-top-tabs'
import { ParamListBase, TabNavigationState } from '@react-navigation/native'
import { withLayoutContext } from 'expo-router'
import { TouchableOpacity, useWindowDimensions, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustumTextInput from '../../../components/CustumTextInput'

const { Navigator } = createMaterialTopTabNavigator()


export const MaterialTopTabs = withLayoutContext<
    MaterialTopTabNavigationOptions,
    typeof Navigator,
    TabNavigationState<ParamListBase>,
    MaterialTopTabNavigationEventMap
>(Navigator)


const SearchLayout = () => {
    const { height } = useWindowDimensions()
    return (
        <SafeAreaView className='flex-1 bg-neutral-900'>
            <View className='px-3 flex flex-row gap-2 justify-center py-4 border-b-white'>
                <CustumTextInput 
                style='flex-1'
                containerStyle='flex-grow'
                placeholder='Search'
                keyboardType='default' 
                icon={<AntDesign name="search1" size={20} color='white' 
                />} />
                <TouchableOpacity 
                className='flex justify-center items-center'
                onPress={() => console.log('open option modal')}>
                    <Ionicons name="options-outline" size={20} color="white" />
                </TouchableOpacity>
            </View>
            <MaterialTopTabs screenOptions={{
                //   animationEnabled : true
                tabBarContentContainerStyle : {
                    backgroundColor : 'rgba(23, 23, 23,.5)',
                    paddingHorizontal : 3
                },
                tabBarLabelStyle : {
                    fontFamily : "Poppins-Medium",
                    fontSize : height * 0.0125
                },
                tabBarActiveTintColor : '#FFF',
                tabBarIndicatorStyle : {
                    backgroundColor : '#880185',
                    height : 4,
                },
                
            }}>
                <MaterialTopTabs.Screen name='top' />
                <MaterialTopTabs.Screen name='lives' />
                <MaterialTopTabs.Screen name='creator' />
                <MaterialTopTabs.Screen name='videos' />
                <MaterialTopTabs.Screen name='sounds' />
            </MaterialTopTabs>
        </SafeAreaView>
    )
}

export default SearchLayout