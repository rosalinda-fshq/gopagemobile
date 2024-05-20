import { Stack } from "expo-router";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="signup"
        options={{
          headerShown: true,
          headerTitle: "",
          headerLeft: CustomBackButton,
        }}
      />
      <Stack.Screen
        name="login"
        options={{
          headerShown: false,
          headerTitle: "",
          headerLeft: CustomBackButton,
        }}
      />
      <Stack.Screen
        name="resetPassword"
        options={{
          headerShown: false,
          headerTitle: "",
          headerLeft: CustomBackButton,
        }}
      />
    </Stack>
  );
}

const CustomBackButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "index" }],
    });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Ionicons name="chevron-back-outline" size={24} color="black" />
    </TouchableOpacity>
  );
};
