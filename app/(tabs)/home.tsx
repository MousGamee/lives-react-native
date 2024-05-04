import HomeVideoItems from '../../components/HomeVideoItems'
import { StatusBar } from 'expo-status-bar'
import { FlatList, View, Text } from 'react-native'
import fakeVideosData from '../../constants/fakeVideosData'
import { useCallback, useMemo, useRef, useState } from 'react'
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet'


const Home = () => {
 const [activeVideo, setActiveVideo] = useState(fakeVideosData[0].title)

 const onViewableItemsChanged = useCallback(({changed , viewableItems}) => {
  if(viewableItems.length > 0 && viewableItems[0].isViewable){
    setActiveVideo(viewableItems[0].item.id)
  }
 }, [])

  return (
    <>
      <StatusBar style='light' />

      <FlatList
        // scrollEnabled={false} when bootom sheet is open 
        scrollEventThrottle={32}
        data={fakeVideosData}
        keyExtractor={item => item.id.toString()}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          itemVisiblePercentThreshold : 50
        }}
        // initialNumToRender={3}
        // windowSize={3}
        // maxToRenderPerBatch={3}
        renderItem={({ item }) => {
          return (
            <HomeVideoItems
              sources={item.sources}
              title={item.title}
              activeVideo={activeVideo}
              id={item.id}
            />
          )
        }}
      />
    </>
  )
}

export default Home