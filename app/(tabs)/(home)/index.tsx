import { HelloWave } from '@/components/HelloWave'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { Stack } from 'expo-router'
import { Button, Text, Image, StyleSheet } from 'react-native'
import { Link } from 'expo-router'
export default function HomeScreen() {
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
      <Link href='/(tabs)/(home)/1337'>
        <Text>to detail</Text>
      </Link>
    </ParallaxScrollView>
  )
}
//{pathname: '/(tabs)/(home)/1337', params:{Details:1337}}
const styles = StyleSheet.create({
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
