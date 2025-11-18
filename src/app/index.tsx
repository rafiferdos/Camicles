import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 30 }}>Home Screen</Text>
        <Link href='/camera' asChild>
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 20,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                padding: 10,
                backgroundColor: "lightgray",
                marginTop: 20,
                borderRadius: 50,
              }}
            >
              Go to Camera
              <MaterialIcons name='photo-camera' size={24} color='black' />
            </Text>
          </Pressable>
        </Link>
      </View>
    </>
  );
}
