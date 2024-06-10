# Welcome to your Expo app 👋

## start up app

[connection-issue] https://docs.expo.dev/develop/development-builds/development-workflows/

## routing for user based application

### splash screen and route set up

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

index.tsx

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

## i dunno look db. mb ignore

## profile for the array with user is the most important

## search load \* times

## articles in page where load \* times

## functionality favorite no load

## when and where
