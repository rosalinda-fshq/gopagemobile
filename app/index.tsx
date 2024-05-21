import Logo from "@/components/Logo";
import SwiperSlider from "@/components/SwipeSlider";
import { Link } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

export default function Page() {
  return (
      <View className="relative w-full flex-1 items-center justify-center pt-[100px] pb-[20px] px-[20px] max-w-[340px] self-center">
        <Logo />
        <SwiperSlider />
        <View className="flex flex-row w-full justify-center gap-4 ">
          <Link
            href="/signup"
            asChild
            className="bg-[#a4c73a] w-[50%] py-2 px-2 rounded"
          >
            <Pressable>
              <Text className="text-white text-center text-[18px]">
                Get Started
              </Text>
            </Pressable>
          </Link>
          <Link
            href="/login"
            asChild
            className="bg-white border w-[50%] border-[#a4c73a] py-2 px-2 rounded"
          >
            <Pressable>
              <Text className="text-[#a4c73a] text-center text-[18px]">
                Log in
              </Text>
            </Pressable>
          </Link>
        </View>
      </View>
  );
}
