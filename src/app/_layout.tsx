import { Stack } from 'expo-router'
import React from 'react'

const RootLayout = () => {
  return (
    <>
      <Stack
        screenOptions={{
          headerTintColor: 'violet'
        }}
      >
        <Stack.Screen
          name='index'
          options={{ title : 'Home' }}
        />
      </Stack>
    </>
  )
}

export default RootLayout