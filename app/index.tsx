import Button from "@/components/Button";
import SwipeSlider from "@/components/SwipeSlider";
import { Link } from "expo-router";
import React from "react";
import { Pressable, Text, View, Image } from "react-native";

export default function Page() {
  return (
    <>
      <View className="relative flex items-center justify-center pt-14 pb-12 px-14">
        <Image
          className="w-[50%] h-[15%] mb-16"
          source={require("../assets/images/gopageLogo.png")}
        />
        <SwipeSlider />
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
    </>
  );
}
