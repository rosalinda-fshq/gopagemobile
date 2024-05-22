import ButtonComponent from "@/components/Button";
import Logo from "@/components/Logo";
import SwiperSlider from "@/components/SwipeSlider";
import { Link } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});
export default function Page() {
  const navigation = useNavigation();

  return (
    <View className="relative flex-1 items-center justify-center pt-[100px] pb-[20px] px-[20px]">
      <Logo />
      {/* <SwiperSlider /> */}
      <View className="flex flex-row justify-between items-center">
        <ButtonComponent
          text="Get Started"
          textColor="text-white"
          intent="primary"
          onPress={() => navigation.navigate("signup")}
        />
        <ButtonComponent
          text="Log In"
          textColor="text-[#a4c73a]"
          intent="secondary"
          onPress={() => navigation.navigate("login")}
        />
      </View>
    </View>
  );
}
