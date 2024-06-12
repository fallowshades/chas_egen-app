import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
export default function _layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#1C357F' },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen name='index' />
      <Stack.Screen name='[Details]' />
      <Stack.Screen name='Favorites' />
      <Stack.Screen name='Profiles' />
    </Stack>
  )
}

const styles = StyleSheet.create({})
