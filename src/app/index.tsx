import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 30 }}>Home Screen</Text>
        <Link href='/camera' asChild>
          <Pressable style={styles.cameraButton}>
            <MaterialIcons name='photo-camera' size={24} color='black' />
          </Pressable>
        </Link>
        <Link href='/image-1'>
          <Text style={{ marginTop: 20, fontSize: 18, color: "blue" }}>
            Go to Image Screen 1
          </Text>
        </Link>
        <Link href='/image-2'>
          <Text style={{ marginTop: 20, fontSize: 18, color: "blue" }}>
            Go to Image Screen 2
          </Text>
        </Link>
        <Link href='/image-3'>
          <Text style={{ marginTop: 20, fontSize: 18, color: "blue" }}>
            Go to Image Screen 3
          </Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  cameraButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    justifyContent: "center",
    padding: 10,
    borderRadius: 9999,
    backgroundColor: "#DDDDDD",
    position: "absolute",
    bottom: 30,
    width: 60,
    height: 60,
    right: 30,
  },
});
