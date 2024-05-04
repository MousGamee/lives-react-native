import HomeVideoItems from '../../components/HomeVideoItems'
import { StatusBar } from 'expo-status-bar'
import { FlatList } from 'react-native'
import fakeVideosData from '../../constants/fakeVideosData'

const Home = () => {

  return (
    <>
      <StatusBar style='light' />
      <FlatList
        scrollEventThrottle={32}
        data={fakeVideosData}
        keyExtractor={item => item.title}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <HomeVideoItems
              sources={item.sources}
              title={item.title} />
          )
        }}
      />

    </>
  )
}

export default Home