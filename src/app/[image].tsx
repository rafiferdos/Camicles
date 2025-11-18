import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { Text } from "react-native";

const image = () => {
  const { image } = useLocalSearchParams<{ image: string }>();
  return (
    <>
      <Stack.Screen
          options={{ title : 'Image Details of: ' + image }}
        />
      <Text>This is image screen for image: {image}</Text>
    </>
  );
};

export default image;
