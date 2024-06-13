import { HelloWave } from '@/components/HelloWave'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { Stack } from 'expo-router'
import { Button, Text, Image, StyleSheet, View } from 'react-native'
import { Link } from 'expo-router'
//import Filters from '@/components/all/Filters'
import { Filters, ProductsContainer } from '@/components/all'
import { useProductsQuery } from '@/hooks/useProductsQuery'
export default function HomeScreen() {
  const { data, error, isLoading } = useProductsQuery({})

  if (isLoading) {
    return <Text>Loading...</Text>
  }

  if (error) {
    return <Text>Error: {error.message}</Text>
  }
  console.log(data, 'index.tsx')
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }
    >
      <View style={styles.container}>
        <Link href='/(tabs)/(home)/1337'>
          <Text>to detail</Text>
        </Link>
        <Filters />
        <ProductsContainer data={data} />
      </View>
    </ParallaxScrollView>
  )
}
//{pathname: '/(tabs)/(home)/1337', params:{Details:1337}}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
})
