# Welcome to your Expo app 👋

## start up app

[connection-issue] https://docs.expo.dev/develop/development-builds/development-workflows/

## routing for user based application

### splash screen and route set up (mb already done)

#### share modal on screens

// if there is a database

- bookings
- checkout
- properties
- reviews
- rentals

//role based interessting

- favorites
- profile
  // want is favorited
- properties

[stack] https://docs.expo.dev/router/advanced/stack/

app/\_layout includ the routes. can push multiple screens. basic is the tabs
we get a theme provider aswell

\_layout.tsx

```tsx
<ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
  <Stack
    screenOptions={{
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
  >
    <Stack.Screen name='(tabs)' options={{ headerShown: true }} />
    <Stack.Screen name='+not-found' />
  </Stack>
</ThemeProvider>
```

(tabs)/\_layout.tsx

- share model header on both tabs

```tsx
import { Tabs } from 'expo-router'
import React from 'react'

import { TabBarIcon } from '@/components/navigation/TabBarIcon'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from '@/hooks/useColorScheme'

import { Button } from 'react-native'
import { useLayoutEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'

export default function TabLayout() {
  const colorScheme = useColorScheme()

  const navigation = useNavigation()
  const router = useRouter()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title='Modal' onPress={() => router.push('/Modal')} />
      ),
    })
  }, [navigation, router])

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name='(home)'
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'home' : 'home-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='Profile'
        options={{
          title: 'profiles',
          headerShown: true,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'code-slash' : 'code-slash-outline'}
              color={color}
            />
          ),
          headerRight: () => (
            <Button title='Modal' onPress={() => router.push('/Modal')} />
          ),
        }}
      />
    </Tabs>
  )
}
```

(tabs)/index.tsx

```tsx
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
    ></ParallaxScrollView>
  )
}
```

#### add the screens

## i dunno look db. mb ignore

## profile for the array with user is the most important

## search load \* times

## articles in page where load \* times

## functionality favorite no load

## when and where
